const {readFile} = require("fs/promises");

const Readfile = async DB => {
    try {
        const data = await readFile(DB, "utf8");
        return JSON.parse(data)
    } catch(err) {
        return {err}
    }
};

module.exports = Readfile;