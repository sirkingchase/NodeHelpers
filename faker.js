
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

var randomNum = parseInt((Math.abs(Math.random() * 100))) + 31;

fakeObj.username = fakeObj.firstName + '.' + fakeObj.lastName + '_' + randomNum;

fakeObj.email = fakeObj.username + '@helloworld.com';

var arrStr = ['Male', 'Female'];
fakeObj.gender = arrStr[Math.floor(Math.random() * arrStr.length)];

fakeObj.birthDate = new Date(faker.date.between('1960-01-01T00:00:00.000Z', '2000-01-01T00:00:00.000Z')).toLocaleDateString('en-US');

fakeObj.soon = new Date(new Date().setDate(new Date().getDate() + randomNum )).toLocaleDateString('en-US');

fakeObj.zipCodeByState = fakeObj.zipCodeByState.substring(0, 5)

console.log(JSON.stringify(fakeObj));

exportsTest.fake = fakeObj;
