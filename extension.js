import { lib, game, ui, get, ai, _status } from "../../noname.js"
import { content } from "./main/content.js"
import { precontent } from "./main/precontent.js"
import { config } from "./main/config.js"
import { help } from "./main/help.js"
import { basic } from "./main/basic.js"
import { extensionDefaultPackage } from "./main/main.js"
export let type = "extension";

export default async function () {
    const extensionInfo = await lib.init.promises.json(`${basic.extensionDirectoryPath}info.json`);
    let extension = {
        name: extensionInfo.name,
        editable: false,
        content: content,
        precontent: precontent,
        config: await basic.resolve(config),
        help: await basic.resolve(help),
        package: await basic.resolve(extensionDefaultPackage),
        files: { "character": [], "card": [], "skill": [], "audio": [] }
    };
    Object.keys(extensionInfo).filter(key => key != "name").forEach(key => extension.package[key] = extensionInfo[key]);
    return extension;
}
