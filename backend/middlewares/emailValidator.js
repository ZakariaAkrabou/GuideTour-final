const nodemailer = require("nodemailer");
require("dotenv").config();

exports.emailValidate = async (email, link) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "ayoub",
        password: "11111",
      },
    });
    let info = await transporter.sendMail({
      from: "sender@server.com",
      to: email,
      subject: "Message title",
      text: "Plaintext version of the message",
      html: `<div>
        <a href=${link}>cliclhere</a>
        <div/>`,
    });
    res.send("sent");
  } catch (error) {
    res.send(error);
  }
};
