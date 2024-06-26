import nodemailer from "nodemailer"

const sendEmail = async options => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    rejectUnauthorized: false
  })

  const mailOptions = {
    from: "Emma O C <emmyochogwu@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
    //html:
  }

  await transporter.sendMail(mailOptions)
}

export default sendEmail
