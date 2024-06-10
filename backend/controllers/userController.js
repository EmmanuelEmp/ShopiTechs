import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"
import generateToken from "../utils/generateToken.js"
import sendEmail from "../utils/sendEmail.js"
import crypto from "crypto"


//@desc Login User
//route POST /login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      cartData: user.cartData, // Send cart data to the client
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@desc Register User
//route POST /register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error("User already Exists")
  }

  const user = await User.create({ name, email, password })

  if (user) {
    generateToken(res, user._id)
    res.status(201)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(400)
    throw new Error("Invalid User Credentials");
  }
})

//@desc Update User Profile
//route PUT /update
//@access public
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) user.password = req.body.password
    await user.save()
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(404)
    throw new Error("User Not Found")
  }
})


//@desc Log Out User
//route GET /logout
//@access public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  })
  res.cookie("connect.sid", "", {
    httpOnly: true,
    expires: new Date(0),
  })
  res.status(200).json({
    message: "Logged Out Successfully",
  })
})

//@desc Forgot Password
//route POST /forgot-password
//@access public
const forgotPassword = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User Not Found");
  }

  const resetToken = user.createPasswordResetToken();
  await user.save();

  const resetUrl = `https://shopitechs-1.onrender.com/reset-password/${resetToken}`;

  const message = `Forgot Password? Click on this link to reset your Password: ${resetUrl}`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your Password reset token. (valid for 10mins)",
      message,
    });

    res.status(200).json({
      message: "Token Sent to email!",
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    res.status(500).json({
      status: "error",
      message: "There was an error in sending the email. Please try again later",
    });
  }
});


//@desc Reset Password
//route PATCH /reset-password/:resetToken
//@access public
const resetPassword = asyncHandler(async (req, res) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({
      status: "fail",
      message: "Token is invalid or has expired",
    });
  }

  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  generateToken(res, user._id);

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});


//@desc Get Users profile
//route GET /
//@access private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find()
  res.json(users)
})

//@desc Update Users profile
//route PUT /:id
//@access private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = Boolean(req.body.isAdmin)

    await user.save()

    res.json({ message: "User updated Successfully" })
  } else {
    res.status(404)
    throw new Error("USer Not Found")
  }
})

//@desc Get Users profile by ID
//route GET /:id
//@access private
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404)
    throw new Error("User Not Found")
  }
})

//@desc Delete Users profile
//route DELETE /:id
//@access private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await User.deleteOne({ _id: req.params.id })
    res.status(204).json({ message: "User Deleted Successfully" })
  } else {
    res.status(404)
    throw new Error("User Not Found")
  }
})
// const getUserCart = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id);
//   if (user) {
//       return res.json({ cartData: user.cartData });
//   } else {
//       res.status(404);
//       throw new Error("User not found");
//   }
// });

// const updateUserCart = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id);
//   if (user) {
//       user.cartData = req.body.cartData;
//       await user.save();
//       return res.json({ cartData: user.cartData })
//   } else {
//       res.status(404);
//       throw new Error("User not found")
//   }
// });

export {
  loginUser,
  registerUser,
  updateUserProfile,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUsers,
  updateUser,
  getUserById,
  deleteUser,
  // getUserCart, 
  // updateUserCart
}
