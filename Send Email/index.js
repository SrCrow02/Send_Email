const email = require("nodemailer");

const transport = email.createTransport({
    host: 'smtp.gmail.com',
    porta: 465,
    secure: true, //true port 465
    auth: {
        user: 'YOUR_EMAIL',
        pass: 'PASSWORD_APP',
    },
});

transport.sendMail({
    from: "SrCrow02 <EMAIL>",
    to: 'RECIPIENTS_EMAIL',
    subject: 'Send your email',
    html: '<h1>CONTENT</h1>',
    text: "if your html fails!"
}).then((response) => console.log("Email sent!"))
.catch((err) => console.log(err))

