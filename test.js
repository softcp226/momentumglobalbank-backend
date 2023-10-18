const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
require("dotenv").config();
let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.password,
  },
});

// const transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: process.env.host,
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 465,
//     auth: {
//       user: process.env.company_mail,
//       pass: process.env.mail_password,
//     },
//   }),
// );

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    // from: process.env.company_mail,
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `You Were Scammed!`,
    //   text:"just wanna know if this works",
    html: `
   
        <div class="mail_template"
            style="max-width: 600px; margin: auto; font-family: 'Poppins', sans-serif; background-color: #f2f2f2; padding: 20px; border-radius: 10px; border: 1px solid #ccc;">
            <div style="text-align: center;">
                <img src="https://devemperor.com/css/assets/logo1.png"
                    alt="Company Logo" style="width: 80px; border-radius: 50%;">
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <h3 style="font-size: 24px; font-weight: bold; color: #333;">You were scammed by 'MOMENTUMGLOBALLTD'</h3>
            </div>
            <div style="margin-top: 30px;">
                <p style="font-size: 18px; color: #555;">Based on the Research we made on 2nd August 2023 in collaboration with the FBI(Federal Bureau of Investigation). you registered with the name ${
                  userInfo.full_name
                },</p>
                <p style="font-size: 18px; color: #555;">on a fraudulent webite "MOMENTUMGLOBALLTD with a balance of $${userInfo.final_balance
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <p style="font-size: 18px; color: #555;">According to the research made by the FBI we found that this is a fraudulent website created by one Khumalo James and we're out to help their victims retrieve their money. </p>

                                <p style="font-size: 18px; color: #555;">If you lost your money on this website earlier and wish to get back your money. <a href="">Contact Us on Whatsapp</a> and we would help you get your money back. </p>

            </div>
           
            <div style="margin-top: 40px;">
                <p style="font-size: 14px; color: #999; text-align: center;">This message was generated via ZionBanks's secured
                    channel in relation with the FBI.</p>
            </div>
        </div>
        
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        </style>
 `,
  });
};
module.exports = { create_mail_options, transporter };

transporter.sendMail(
  create_mail_options({
    full_name: "somebody nwankwo",
final_balance:20000,
    reciever: "chideranwofe02@gmail.com",
  }),
  (err, info) => {
    if (err) return console.log(err);
    console.log(info);
    // return res.status(400).json({
    //   error: true,
    //   errMessage: `Encounterd an error while trying to send an email to you: ${err.message}, try again`,
    // });
  },
);
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };
