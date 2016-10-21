var os=require('os');
var ifaces = os.networkInterfaces();
var address_list = [];

for (var dev in ifaces) {
  var alias=0;
  ifaces[dev].forEach(function(details){
    if (details.family == 'IPv4') {
      address_list.push(dev + (alias ? ':' + alias : '') + ' ' + details.address);
      ++alias;
    }
  });
}

module.exports = address_list || [];