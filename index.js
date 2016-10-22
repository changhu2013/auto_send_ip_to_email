var os=require('os');
var nodemailer = require('nodemailer');
var TIMEOUT = 10000;

function get_ip_list(){
    var ifaces = os.networkInterfaces();
    var ip_list = [];

    for (var dev in ifaces) {
        var alias = 0;
        ifaces[dev].forEach(function(details){
            if (details.family == 'IPv4') {
            ip_list.push(dev + (alias ? ':' + alias : '') + ' ' + details.address);
            ++alias;
            }
        });
    }

    return ip_list;
}

function send_email(){
    var transporter = nodemailer.createTransport('smtps://o52tiger%40163.com:Cp1y01m04D@smtp.163.com');
    var ip_list = get_ip_list();
    var text = "TIME : \n"
            + new Date() + " \n"
            + "IP   :\n"
            + ip_list.join(' \n');

    var mailOptions = {
        from    : 'o52tiger@163.com',
        to      : 'o52tiger@qq.com',
        subject : '树莓派IP地址',
        text    : text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}

setTimeout(send_email, TIMEOUT);