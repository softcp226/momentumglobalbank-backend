// // const fetch = require("isomorphic-fetch");
// // const fetch_user = async (user_form) => {
// //   const formdata = new FormData();
// //   formdata.append("first_name", user_form.first_name);
// //   try {
// //     const response = await fetch("http://localhost:3000/api/user/register", {
// //       method: "POST",
// //       // headers:{"content-type":"application/json"},
// //       // body:JSON.stringify(user_form)
// //       body: formdata,
// //     });
// //     const result = await response.json();
// //     console.log(result);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };

// // fetch_user({ first_name: "firstname" });

// // const {
// //   create_mail_options,
// //   transporter,
// // } = require("./mailer/reg_success_mail");

// // const callmailer=async()=>{
// //   first_name = "nsam";
// //   last_name = "chidera";
// //   account_type = "savings account";
// //   account_number = "35636829298278";
// //   account_pin = 2002;
// //   const result = await sendEmail({
// //     first_name,
// //     last_name,
// //     account_type,
// //     account_number,
// //     account_pin,
// //   });
// //   console.log(result);
// // }
// // callmailer()

// // let account_number=Math.random(2553633.37333)
// // console.log(Math.ceil(account_number))
// // let account_number = Math.floor(Math.random() * 11000000000);
// // console.log(account_number);
// // let token =
// //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI0ZDRlYjAwZGNkMzEyODZkY2YyOWVmIiwiaWF0IjoxNjQ5MzIwMjA4fQ.J8OMVS9ZbLaWQfxf0WqygcgMRg28ys1OjSVHW53MeuE";

// // const fetch = require("isomorphic-fetch");
// // const fetch_user = async (user_form) => {
// //   try {
// //     const response = await fetch(
// //       "http://localhost:3000/api/user/transaction/complete",
// //       {
// //         method: "POST",
// //         headers: { "content-type": "application/json" },
// //         body: JSON.stringify(user_form),
// //       }
// //     );
// //     const result = await response.json();
// //     console.log(result);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };
// // fetch_user({
// //   token,
// //   user: "62523139f9e62082fa19191f",
// //   otp: "10704",
// // });

// // fetch_user({
// //   token,
// //   user: "62523139f9e62082fa19191f",
// //   account_number: "7167883745",
// //   amount: 200,
// //   description: "transfer used for tea payment2",
// //   // loan_amount: "2500",
// //   // loan_type: "car loan",
// //   // duration: "57",
// //   // loan_details: "first loan",
// // });
// //   let otp = Math.floor(Math.random() * 11000);
// // console.log(otp)

// // var os = require("os");

// // var networkInterfaces = os.networkInterfaces();

// // console.log(networkInterfaces);

// // let currentdate = new Date();
// // let datetime = `${currentdate.getDate()}/${
// //   currentdate.getMonth() + 1
// // }/${currentdate.getFullYear()} @ ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

// // let currentdate = new Date();
// // let datetime = `${currentdate.getFullYear()}-${
// //   currentdate.getMonth() + 1
// // }-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

const hashpassword = require("./admin-hash/hashPassword");
const Admin = require("./model/admin");
const create_admin = async (user_name, password) => {
  const hashed_password = await hashpassword(password);
  const admin = await new Admin({
    user_name,
    password: hashed_password,
  });
  const result = await admin.save();
  console.log(result);

  // await Admin.findOneAndDelete({ user_name });
};
create_admin("superadmin", "password");

// const nodemailer = require("nodemailer");

// const smtpTransport = require("nodemailer-smtp-transport");

// // const transporter = nodemailer.createTransport(
// //   smtpTransport({
// //     host: "mail.zionintercontinentalb.com",
// //     secureConnection: false,
// //     tls: {
// //       rejectUnauthorized: false,
// //     },
// //     port: 587,
// //     auth: {
// //       user: "support@zionintercontinentalb.com",
// //       pass: "zionintercontinentalbank1@1",
// //     },
// //   }),
// // );

// let transporter = nodemailer.createTransport({
//   service: "Gmail",
//   secure: false,

//   auth: {
//     user: "zionintercontinentalbank058@gmail.com",
//     pass: "esioxniayjfncell",
//   },
// });

// let create_mail_options = (userInfo) => {
//   return (mailOptions = {
//     from: "support@zionintercontinentalbnk.com",
//     // from:"michelleannschlloser@outlook.com",
//     to: userInfo.reciever,
//     subject: `Account Registration Notification`,
//     //   text:"just wanna know if this works",
//     html: `
//   <main>

//   <style>
// @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=Nunito+Sans:ital,wght@0,600;0,700;1,600&family=Nunito:ital,wght@0,200;0,300;1,200&family=Open+Sans&family=Poppins:wght@200&family=Roboto:wght@400;500&display=swap');

// .maincontainer{
// font-family: 'Nanum Gothic Coding', monospace;
// font-family: 'Nunito', sans-serif;
// font-family: 'Nunito Sans', sans-serif;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Roboto', sans-serif;
//       width: 100%;
//       top: 0;
//       left: 0;
//       right: 0;
//       font-weight: 100;
//       line-height: 2.5;
//     }
//     .cordial {
//       font-size: 16px;

//     }
//     .head-txt {
//       text-align: center;
//       background-color: #142c8e;
//       font-size: 20px;
//       color: #fff;
//     }
//     .paragraph-01,
//     .paragraph-02 {
//       font-size: 15.5px;
//       padding: 1px;
//     }
//     .paragraph-03 {
//       font-weight: 400;
//       font-size: 15.5px;
//       padding: 1px;
//       color: green;
//     }
//     .paragraph-04{
//       font-size: 15.5px;
//       padding: 1px;
//     }
//     .disclaimer{
//         font-size: 12px;
//         font-weight: 700;
//         padding: 0px;
//     }
//     h1,h2,h4,h5,h6{
//         font-size: 18px;
//     }
//   </style>

//   <div class="maincontainer">
//     <div class="head-txt">
//       <h1 style=" text-align: center; font-size: 16px; color: #142c8e;">ZION INTERCONTINENTAL BANK</h1>
//       <h3 style="font-size: 15px;">NEW ACCOUNT NOTIFICATION</h3>
//     </div>

//     <p class="sm-p">
//       Dear ${userInfo.first_name} ${userInfo.last_name}, Thank you so much for allowing us to help you
//       with your ${userInfo.account_type} opening. We are committed to providing our
//       customers with the highest level of service and the most innovative
//       banking products that are possible. We are very glad you chose us as your
//       financial institution and hope you will take advantage of our wide variety
//       of savings, investment and loan products which are designed to meet your
//       needs
//     </p>
//     <p class="sm-p">
//       For more detailed informations about our loans,Credit Cards or other
//       financial services, please contact our customer support or the
//       relationship officer that would be assigned to you shortly
//     </p>

//     <div class="paragraph-03">
//       <h4 style="color: #142c8e">ACCOUNT DETAILS</h4>
//       <p>Account Number: ${userInfo.account_number}</p>
//       <p>Account Type: ${userInfo.account_type}</p>
//       <p>Account Pin:  ${userInfo.account_pin}</p>
//       <p>Account Password:**** (used for registration)</p>
//     </div class="paragraph-04">
//     <h5 style="color: red">STATUS:     INACTIVE</h5>
//     <p class="sm-p">
//       incase you have any questions do not hesitate to contact us and we will
//       reach out to you as soon as possible
//     </p>
//     <br />
//     <h1 style="  font-size: 17px; text-align: center; background-color:  #142c8e; color: #fff;" >ZION INTERCONTINENTAL BANK</h1>
//     <p class="disclaimer" style="font-size: 12px; font-weight: bolder;">
//       Disclaimer: this message was automatically generated via zion intercontinental bank secured channel,please do not reply to this message
//       all correspondence should be addressed to zion intercontinental bank or
//       your relationship officer
//     </p>
//   </div>
// </main>
//  `,
//   });
// };
// module.exports = { create_mail_options, transporter };

// transporter.sendMail(
//   create_mail_options({
//     first_name: "chidera",
//     last_name: "nwofe",
//     account_type: "checking",
//     account_number: "9373483737",
//     reciever: "chideranwofe02@gmail.com",
//     account_pin: "2002",
//   }),
//   (err, info) => {
//     if (err) return console.log(err.message);
//     console.log(info);
//     // return res.status(400).json({
//     //   error: true,
//     //   errMessage: `Encounterd an error while trying to send an email to you: ${err.message}, try again`,
//     // });
//   },
// );
