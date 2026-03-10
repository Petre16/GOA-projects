const {writeFile} = require("fs/promises");

const WriteFile = async (DB, data) => {
    try {
        await writeFile(DB, JSON.stringify(data));
        return "Data saved successfully"
    } catch(err) {
        return {err};
    }
};

module.exports = WriteFile