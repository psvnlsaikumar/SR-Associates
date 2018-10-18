const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const xoauth2 = require('xoauth2');


exports.transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'saiyah007devtest@gmail.com',
            pass: 'expectant',
            clientId: '800013153087-h9822fon5h5oc12je09ac0eujj9vj9lv.apps.googleusercontent.com',
            clientSecret: 'aFReBS2Ew3-tTxMTgXdAxEek',
            refreshToken: '1/j-tmOHp96COc49mVfKL3TD__IOsEJYevWsGT9aeN48c'
        })
    }
}));

var from, subject, message;
var mailOptions = {
    from: from,
    to: 'saiyah0007@gmail.com',
    subject: subject,
    text: message
}

exports.transporter.sendMail(mailOptions, function(err, res) {
    if(err){
        console.log('Error' + err);
    } else {
        console.log('Email has been sent')
    }
});