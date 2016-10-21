var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://o52tiger%40163.com:Cp1y01m04D@smtp.163.com');

var ip_list = require('./ip_list');
var text = "IP:" + ip_list.join(' \n');

var mailOptions = {
    from: 'o52tiger@163.com',
    to: 'o52tiger@qq.com',
    subject: '树莓派IP地址',
    text: text
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});