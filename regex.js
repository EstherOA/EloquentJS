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
    const settings = {};
    let subObject;
    // console.log("ini file:", lines);
    fileContents.split(/\r?\n/).map(l => {
        if(l.startsWith(";")) return;
        if(l.startsWith("[")) {
            subObject = l.replace(/\[(.*)\]/, "$1");
            settings[subObject] = {}
            return;
        };
        const [prop, val] = l.split("=")
        if(subObject) {
            settings[subObject][prop] = val;
        } else {
            settings[prop] = val;
        }
        // console.log(l);
    });
    console.log(settings);
}

readFile(parseIni);