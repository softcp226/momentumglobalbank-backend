const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

// const credit_transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.zionintercontinentalb.com",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 587,
//     auth: {
//       user: "support@zionintercontinentalb.com",
//       pass: "zionintercontinentalbank1@1",
//     },
//   }),
// );
// require("dotenv").config();
let credit_transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});

let currentdate = new Date();
let datetime = `${currentdate.getFullYear()}-${
  currentdate.getMonth() + 1
}-${currentdate.getDate()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;


let credit_create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever_mail,
    subject: `CREDIT ALERT`,
    //   text:"just wanna know if this works",
    html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transaction Reciept</title>
</head>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=Poppins:wght@200;400&display=swap');
*{
    
    box-sizing: border-box;
    font-family: 'Nanum Gothic Coding', monospace;
font-family: 'Poppins', sans-serif;
  }
  main{
      font-family: 'Nanum Gothic Coding', monospace;
font-family: 'Poppins', sans-serif;
  }
h3{
   font-weight: 900;
}
.reciept{
    color: #fff;  
}

.logo{
    background-color: #142c8e; 
    width: 100%;
   padding: 0px;
    color: #fff;
}
.hr{
    background-color: #142c8e;
    width: 100%;
    height: 1.2px;
}
h5,p{
    font-size: 18px;
      font-family: 'Nanum Gothic Coding', monospace;
font-family: 'Poppins', sans-serif;
}
</style>
<body>
   

        </div>
    <main style="background-color:#fff;  box-shadow: 0 3px 15px rgb(0 0 0 / 10%); width: 75%; margin: auto; padding: 10px;">

       
       
           <div style="margin: auto; text-align: center;" >  <h6 class="name"  style="text-align: center; font-size: 18px; color:#fff;background-color: #142c8e;">MOMENTUM GLOBAL BANK</h6></div>
          
        
        <h1 style=" text-align: center; font-size: 15px; color:#142c8e;">Credit Transaction Reciept</h1>
        <div class="hr">
            </div>

        <p style="font-size:16px">Payment Refrence:Momentum Global Bank Transfer</p>
     
        <h1></h1>

        <div>
            <p style="font-size:15px">Transaction Date: ${userInfo.datetime}</p>
            <p style="font-size:15px"> Reference Number: ${userInfo.refrence_number}</p>
            <p style="font-size:15px">Description:${userInfo.description}</p>
            <p style="font-size:15px">Status: <b style="color:green">${userInfo.status}</b></p>
            <p style="font-size:15px">Amount: ${userInfo.amount}</p>
            <p style="font-size:15px">Total Balance:$${userInfo.balance}</p>
            <h5 style="font-weight: 400; font-size: 20px; border: 0px solid  #142c8e; text-align: center;background-color: #142c8e;">Reciept Total: ${userInfo.amount}</h5>
       
        </div>
<div class="hr"></div><br><br>
        
       
        <article>
            <h1>Payment Details</h1>
            <p>From: ${userInfo.sender}</p>
            
            <p>Reference Number:${userInfo.refrence_number}</p>
              </article>
        <hr>
    </div>

        <div class="logo">
                  <div style="margin: auto; text-align: center;" >  <h6 class="name"  style=" text-align: center; font-size: 16px; color:#fff;background-color: #142c8e; ">MOMENTUM GLOBAL BANK</h6></div></div>
                  <p class="disclaimer" style="font-size: 12px; font-weight: bolder;">
      Disclaimer: this message was automatically generated via momentum global bank secured channel,please do not reply to this message
      all correspondence should be addressed to momentum global bank or
      your relationship officer
    </p>
               
    </main>
    </body>

</html>
`,
  });
};
module.exports = { credit_create_mail_options, credit_transporter };
