const path = require("path");
const fs = require("fs");
const axios = require("axios");

function cloneFile(cloneUrl, dirPath) {
    axios(cloneUrl)
        .then(r => r.data)
        .then(data => {
            var parse = cloneUrl.split("/");
            fs.writeFile(path.join(dirPath, `./${parse[parse.length - 1]}`), data, {}, (err) => {
                if (err) throw err;
            })
        })
}

exports.cloneFile = cloneFile;