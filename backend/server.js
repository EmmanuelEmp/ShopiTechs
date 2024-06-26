// import express from "express";import path from "path"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"
import cookieParser from "cookie-parser"
import passportUtil from "./utils/passport.js"
import authRoutes from "./routes/authRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import stripeUtil from "./utils/stripe.js"
import path from "path"

dotenv.config()

connectDB()

const PORT = process.env.PORT || 5000

const app = express()

//https://stackoverflow.com/questions/57009371/access-to-xmlhttprequest-at-from-origin-localhost3000-has-been-blocked

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://shopitechs-1.onrender.com")
  next()
})

app.use(
  cors({
    origin: ["https://shopitechs-1.onrender.com", "https://shopitechs-1.onrender.com"],
    methods: "GET, POST, PATCH, DELETE, PUT",
    credentials: true,
  })
)

app.use(cookieParser())
passportUtil(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// app.use('/upload', express.static("upload/images"))


stripeUtil(app)

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/auth", authRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/upload", uploadRoutes)

const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve()
  app.use("/uploads", express.static(path.join(__dirname, "uploads")))
  app.use(express.static(path.join(__dirname, "/frontend/dist")))
  app.use("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  ) 
} else {
  app.use("/uploads", express.static(path.join(__dirname, "uploads")))
  app.get("/", (req, res) => {
    res.send("Api is running...")
  })
}

app.use(notFound)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})