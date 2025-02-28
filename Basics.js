const fs = require('fs');

function aaa(err,data){
    console.log(err);
    console.log(data);
}

fs.readFile("a.txt","utf-8",aaa);