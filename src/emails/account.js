const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_APIKEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mosalam365@gmail.com',
        subject: 'Welcome to Task Manager App',
        text: `Welcome to the app, ${name}. Let me know your experience with the app`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mosalam365@gmail.com',
        subject: 'Cancelling Task Manager App',
        text: `Goodbye, ${name}. Sorry to see you go`
    })
}
module.exports ={
    sendWelcomeEmail,
    sendCancelEmail
}