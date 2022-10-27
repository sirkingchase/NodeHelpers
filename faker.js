const faker = require('faker');

var fakeObj = {};
var myData = ["name", "address", "date", "finance", "phone", "company", "internet"];

myData.forEach(function(fu) {
    //console.log(fu.valueOf());
    var objs = Object.getOwnPropertyNames(faker[fu.valueOf()]);

    for(var i in objs ){
        //console.log(objs[i].valueOf());    
        fakeObj[objs[i].valueOf()] = faker[fu.valueOf()][objs[i].valueOf()]();
    }
});
console.log(JSON.stringify(fakeObj));
