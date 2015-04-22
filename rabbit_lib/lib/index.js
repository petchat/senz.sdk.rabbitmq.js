var publisher  = require('./publisher.js');
var subscriber = require('./subscriber.js');
console.log('RABBIT LIB PROCESSING\n===================');
console.log('Here is rabbit lib!\nby MeoWoodie! at Fri, April, 17, 2015.\n');

exports.publish = function(msg, event){
    publisher.publishMessage(msg, event);
};

exports.register = function(callback, consumer_name, event){
    subscriber.registerEvent(callback, consumer_name, event);
};