const fs = require('fs');

function readFile(callback) {
    fs.readFile("test.ini", 'utf8', (err, data) => {
        if(err) {
            console.log("Error reading file:", err);
        } else callback(data);
    });
}

function parseIni(fileContents) {
    // console.log("ini file:", fileContents);
    // console.log("lines:", lines);
    let settings = {};
    const results = settings;
    // console.log("ini file:", lines);
    fileContents.split(/\r?\n/).map(l => {
        let found;
        // if(l.startsWith(";")) return;
        if(found = l.match(/\[(.*)\]/)) {
            settings = results[found[1]] = {} ;
        } else if(found = l.match(/(\w+)=(.*)/)) {
            settings[found[1]] = found[2]
        } else if(!/ /.test(l)) {
            throw new Error("Invalid format!")
        }
        // console.log(l);
    });
    console.log(results);
}

readFile(parseIni);
