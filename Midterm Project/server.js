const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// configure your Gmail transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourgmail@gmail.com",       // your Gmail
    pass: "your-app-password",         // Gmail app password (not your real password!)
  },
});

// route to handle sending email
app.post("/send-email", (req, res) => {
  const { name, contact, email, address, item, quantity, payment, total } = req.body;

  const mailOptions = {
    from: "yourgmail@gmail.com",
    to: email,
    subject: "Centro Café Order Receipt",
    text: `
Thank you for your order!

Order Details:
Name: ${name}
Contact: ${contact}
Email: ${email}
Address: ${address}
Item: ${item}
Quantity: ${quantity}
Payment: ${payment}
Total Price: ₱${total}

We’ll contact you shortly to confirm delivery.
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully!");
    }
  });
});

// start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
