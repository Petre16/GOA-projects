import { readFile } from "fs/promises";

const ReadFile = async DB => {
    try {
        const data = await readFile(DB, "utf8")
        return JSON.parse(data)
    } catch (error) {
        console.log({error})
    }
}

export default ReadFile