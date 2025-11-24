import { lib, game, ui, get, ai, _status } from "../../../noname.js"
import { character } from "../character/index.js";
import { skill } from "../character/skill.js";
import { } from "../js/pause.js";
import { } from "../js/connect.js";
import { } from "../js/broadcast.js";
import { } from "../js/private.js";
export async function precontent(config, pack) {
    {
        //本体版本检测
        let noname = lib.version.split(".").slice(2),
            min = [4],
            len = Math.min(noname.length, min.length),
            status = false;
        if (lib.version.slice(0, 8) === "1.10.17.")
            for (let i = 0; i < len; i++) {
                if (Number(noname[i]) < min[i]) {
                    status = "您的无名杀版本太低";
                    break;
                }
            }
        else status = "检测到游戏版本号与本扩展支持版本号不同";
        if (typeof status === "string") {
            alert(status + "，为避免版本不兼容产生不必要的问题，已为您关闭《星之梦》，稍后重启游戏");
            game.saveExtensionConfig("星之梦", "enable", false);
            game.reload();
        }
    }
    if (lib.config && lib.config[`extension_凌梦自用_enable`]) {
        alert("Tip:建议删除旧扩展凌梦自用")
    }

    //屏蔽弹窗
    if (lib.config.extension_星之梦_cancelwindow) {
        window.onerror = function (msg, src, line, column, err) { };
    }
    // 自由选将-筛选按钮扩充
    if (lib.config.extension_星之梦_filterexpand) {
        lib.characterDialogGroup = {
            // 原版
            '收藏': function (name, capt) {
                return lib.config.favouriteCharacter.includes(name) ? capt : null;
            },
            '最近': function (name, capt) {
                var list = get.config('recentCharacter') || [];
                return list.includes(name) ? capt : null;
            },
            // 扩充
            '<span style=\"color:#00ADE7\">♂</span>': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (lib.character[i][0] == "male") {
                        list.push(i);
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '<span style=\"color:#E56587\">♀</span>': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (lib.character[i][0] == "female") {
                        list.push(i);
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '<span style=\"color:#00ADE7\">♂</span><span style=\"color:#E56587\">♀</span>': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (lib.character[i][0] == "double") {
                        list.push(i);
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '主公': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (lib.character[i][4].includes('zhu')) {
                        list.push(i);
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '护甲': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (typeof lib.character[i][2] == typeof "") {
                        var list1 = lib.character[i][2].split('/');
                        if (list1.length == 3) {
                            list.push(i);
                        }
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '体力≠上限': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (typeof lib.character[i][2] == typeof "") {
                        var list1 = lib.character[i][2].split('/');
                        if (Number(list1[0]) != Number(list1[1])) {
                            list.push(i);
                        }
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '1上限': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (typeof lib.character[i][2] == typeof "") {
                        var list1 = lib.character[i][2].split('/');
                        if (Number(list1[1]) == 1) {
                            list.push(i);
                        }
                    }
                    if (typeof lib.character[i][2] == typeof 0) {
                        if (lib.character[i][2] == 1) {
                            list.push(i);
                        }
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '2上限': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (typeof lib.character[i][2] == typeof "") {
                        var list1 = lib.character[i][2].split('/');
                        if (Number(list1[1]) == 2) {
                            list.push(i);
                        }
                    }
                    if (typeof lib.character[i][2] == typeof 0) {
                        if (lib.character[i][2] == 2) {
                            list.push(i);
                        }
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '3上限': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (typeof lib.character[i][2] == typeof "") {
                        var list1 = lib.character[i][2].split('/');
                        if (Number(list1[1]) == 3) {
                            list.push(i);
                        }
                    }
                    if (typeof lib.character[i][2] == typeof 0) {
                        if (lib.character[i][2] == 3) {
                            list.push(i);
                        }
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '4上限': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (typeof lib.character[i][2] == typeof "") {
                        var list1 = lib.character[i][2].split('/');
                        if (Number(list1[1]) == 4) {
                            list.push(i);
                        }
                    }
                    if (typeof lib.character[i][2] == typeof 0) {
                        if (lib.character[i][2] == 4) {
                            list.push(i);
                        }
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '5上限': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (typeof lib.character[i][2] == typeof "") {
                        var list1 = lib.character[i][2].split('/');
                        if (Number(list1[1]) == 5) {
                            list.push(i);
                        }
                    }
                    if (typeof lib.character[i][2] == typeof 0) {
                        if (lib.character[i][2] == 5) {
                            list.push(i);
                        }
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '6上限': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (typeof lib.character[i][2] == typeof "") {
                        var list1 = lib.character[i][2].split('/');
                        if (Number(list1[1]) == 6) {
                            list.push(i);
                        }
                    }
                    if (typeof lib.character[i][2] == typeof 0) {
                        if (lib.character[i][2] == 6) {
                            list.push(i);
                        }
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '7上限': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (typeof lib.character[i][2] == typeof "") {
                        var list1 = lib.character[i][2].split('/');
                        if (Number(list1[1]) == 7) {
                            list.push(i);
                        }
                    }
                    if (typeof lib.character[i][2] == typeof 0) {
                        if (lib.character[i][2] == 7) {
                            list.push(i);
                        }
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '8上限': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (typeof lib.character[i][2] == typeof "") {
                        var list1 = lib.character[i][2].split('/');
                        if (Number(list1[1]) == 8) {
                            list.push(i);
                        }
                    }
                    if (typeof lib.character[i][2] == typeof 0) {
                        if (lib.character[i][2] == 8) {
                            list.push(i);
                        }
                    }
                }
                return list.includes(name) ? capt : null;
            },
            '>8上限': function (name, capt) {
                var list = [];
                for (var i in lib.character) {
                    if (typeof lib.character[i][2] == typeof "") {
                        var list1 = lib.character[i][2].split('/');
                        if (Number(list1[1]) > 8) {
                            list.push(i);
                        }
                    }
                    if (typeof lib.character[i][2] == typeof 0) {
                        if (lib.character[i][2] > 8) {
                            list.push(i);
                        }
                    }
                }
                return list.includes(name) ? capt : null;
            },
        };
    }
    // 下面是一键导入的代码
    // 原理：根据extension目录下的扩展文件夹名写入游戏设置，完成后自动重启
    game.yjdrcqgn = function (bool) {
        var arr;
        game.getFileList("extension", function (fold, file) {
            arr = Array.from(fold);
            var f = function (array, ck) {
                if (!Array.isArray(array) || array.length == 0) return;
                var fail = [],
                    rean = false;
                while (array.length) {
                    var obj = array.shift();
                    // 新增当扩展文件夹内缺少extension.js时报错提示
                    if (lib.device) {
                        window.resolveLocalFileSystemURL(
                            localStorage.getItem("noname_inited") + "extension/" + obj + "/" + "extension.js",
                            function (entry) {
                                // alert('导入成功');
                            },
                            function () {
                                // 手机端用window.resolveLocalFileSystemURL无法检测文件是否存在，故更改了弹窗内容
                                alert("检测到扩展文件夹内缺少 extension.js 文件" + "\n\r请检查扩展文件夹的文件结构是否正确！");
                                // alert("本层文件夹内缺少 extension.js 文件:\n游戏目录/extension/" + obj + "\n\r请检查扩展文件夹的文件结构是否正确！");
                            }
                        );
                    } else {
                        // 非手机端，修复在非windows的平台上有问题的bug，感谢リいコしロ的指导
                        if (!lib.node.fs.existsSync(__dirname + "/extension/" + obj + "/" + "extension.js")) {
                            alert("本层文件夹内缺少 extension.js 文件:\n游戏目录/extension/" + obj + "\n\r请检查扩展文件夹的文件结构是否正确！");
                            continue;
                        }
                    }
                    if (["coin", "boss", "wuxing", "cardpile"].includes(obj)) continue;
                    if (ck.indexOf(obj) == -1) {
                        fail.add(obj);
                        continue;
                    }
                    if (lib.config.extensions.indexOf(obj) > -1) continue;
                    rean = true;
                    lib.config.extensions.add(obj);
                    game.saveConfig("extension_" + obj + "_enable", true);
                }
                if (fail.length == 0 && rean) {
                    game.saveConfig("extensions", lib.config.extensions);
                    if (bool == true) game.reload();
                }
            };
            f(arr, Array.from(fold));
        });
    };
    //官方势力
    if (lib.config.extension_星之梦_guanfangshili) {
        Object.defineProperty(lib, "group", {
            get: () => ["wei", "shu", "wu", "qun", "jin"],
            set: () => { },
        });
        lib.skill._slyh = {
            trigger: { global: "gameStart", player: "enterGame" },
            forced: true,
            popup: false,
            silent: true,
            priority: Infinity,
            filter(_, player) {
                return get.mode() !== "guozhan" && player.group && !lib.group.includes(player.group);
            },
            async content(event, trigger, player) {
                const result = await player
                    .chooseControl(lib.group.slice(0, 5))
                    .set("ai", () => get.event().controls.randomGet())
                    .set("prompt", "请选择你的势力")
                    .forResult();
                if (result?.control) {
                    player.group = result.control;
                    player.node.name.dataset.nature = get.groupnature(result.control);
                }
            },
        };
    }
    //神将选择势力
    if (lib.config.extension_星之梦_shenjiangshili) {
        lib.skill._bol_doudizhuchoosegroup = {
            charlotte: true,
            ruleSkill: true,
            trigger: {
                global: "gameStart",
                player: "enterGame",
            },
            forced: true,
            popup: false,
            silent: true,
            priority: 520, //大于523是早于重新选将，小于523是晚于重新选将
            firstDo: true,
            direct: true,
            filter(event, player) {
                if (get.mode() != "doudizhu" && get.mode() != "versus" && get.mode() != "single") return false;
                if (lib.character[player.name1][1] == "shen" || lib.character[player.name1][1] == "devil") return true;
                // for (var i of lib.character[player.name1][4]) {
                //     return i.includes("doublegroup");
                // }
            },
            content() {
                "step 0";
                var name = player.name1;
                if (get.is.double(name)) {
                    player.chooseControl(get.is.double(name, true)).set("prompt", "请选择你的势力");
                } else if (lib.character[name][1] == "shen" || lib.character[name][1] == "devil") {
                    var list = lib.group.slice(0);
                    list.remove("shen");
                    list.remove("devil");
                    player.chooseControl(list).set("prompt", "请选择武将的势力");
                }
                "step 1";
                if (result.control) {
                    player.changeGroup(result.control);
                }
            },
        };
    }
    //阶段提示
    lib.skill._tphaseTip = {
        trigger: {
            global: ["phaseBegin", "phaseZhunbeiBefore", "phaseJudgeBefore", "phaseDrawBefore", "phaseUseBefore", "phaseDiscardBefore", "phaseJieshuBefore", "phaseEnd", "phaseAfter"],
        },
        filter: function (event, player) {
            const config = lib.config.extension_星之梦_tphaseTipStyle;
            return config && lib.config.extension_星之梦_tphaseTip;
        },
        async content(event, trigger) {
            game.broadcastAll(
                (phasename, player) => {
                    // 只对主玩家处理，非主玩家直接返回
                    if (player !== game.me) return;

                    if (phasename === "phaseAfter") {
                        if (player.tphaseTip) {
                            // 添加向右淡出动画
                            if (player.tphaseTip && player.tphaseTip.classList) {
                                player.tphaseTip.classList.remove("active");
                                player.tphaseTip.classList.add("fade-out-right");
                            }

                            // 动画结束后移除元素
                            setTimeout(() => {
                                if (player.tphaseTip && player.tphaseTip.parentNode) {
                                    player.tphaseTip.remove();
                                }
                                player.tphaseTip = null;
                                player.tphaseTipImg = null;
                            }, 600);
                        }
                    } else {
                        const config = lib.config.extension_星之梦_tphaseTipStyle;
                        const basePath = "extension/星之梦/image/JDTS/";
                        const imageTypes = ["hhks", "zbjd", "pdjd", "mpjd", "cpjd", "qpjd", "jsjd", "hhjs"];
                        const phases = ["Begin", "ZhunbeiBefore", "JudgeBefore", "DrawBefore", "UseBefore", "DiscardBefore", "JieshuBefore", "End"];
                        const phaseStyles = {
                            "1": {},
                            "2": {}
                        };
                        [1, 2].forEach(version => {
                            const ext = version === 1 ? "jpg" : "png";
                            phases.forEach((phase, index) => {
                                const key = `phase${phase}`;
                                phaseStyles[version][key] = `${basePath}${imageTypes[index]}.${ext}`;
                            });
                        });
                        // 根据配置选择对应的图片路径
                        const phase = phaseStyles[config] || phaseStyles["1"];
                        const imgSrc = phase[phasename];

                        if (!player.tphaseTip) {
                            const addStyle = () => {
                                // 检查样式是否已添加
                                if (document.getElementById('tphaseTip-styles')) return;

                                const style = document.createElement("style");
                                style.id = 'tphaseTip-styles';
                                style.textContent = `
                                .tphaseTip {
                                    position: fixed;
                                    left: 40px;
                                    bottom: 195px;
                                    width: 85px;
                                    opacity: 0;
                                    pointer-events: none;
                                    z-index: 4;
                                }
                                .tphaseTip.active {
                                    opacity: 1;
                                }
                                .tphaseTip img {
                                    max-width: 100%;
                                    height: auto;
                                }

                                /* 从左淡入动画 */
                                @keyframes tphaseTip-fadeInLeft {
                                    from {
                                        opacity: 0;
                                        transform: translateX(-25px);
                                    }
                                    to {
                                        opacity: 1;
                                        transform: translateX(0);
                                    }
                                }

                                /* 向右淡出动画 */
                                @keyframes tphaseTip-fadeOutRight {
                                    from {
                                        opacity: 1;
                                        transform: translateX(0);
                                    }
                                    to {
                                        opacity: 0;
                                        transform: translateX(75px);
                                    }
                                }

                                .tphaseTip.fade-in-left {
                                    animation: tphaseTip-fadeInLeft 0.6s ease-out forwards; /* 改为0.6秒 */
                                }

                                .tphaseTip.fade-out-right {
                                    animation: tphaseTip-fadeOutRight 0.6s ease-in forwards; /* 改为0.6秒 */
                                }
                            `;
                                document.head.appendChild(style);
                            };

                            if (!game.phaseStyle) {
                                game.phaseStyle = true;
                                addStyle();
                            }

                            // 创建并附加到 document.body
                            player.tphaseTip = document.createElement("div");
                            player.tphaseTip.className = "tphaseTip";
                            document.body.appendChild(player.tphaseTip);

                            // 创建图片元素并存储引用
                            player.tphaseTipImg = document.createElement("img");
                            player.tphaseTipImg.src = imgSrc;
                            player.tphaseTipImg.alt = phasename;
                            player.tphaseTip.appendChild(player.tphaseTipImg);

                            // 执行淡入动画
                            if (player.tphaseTip && player.tphaseTip.classList) {
                                player.tphaseTip.classList.add("fade-in-left");
                                setTimeout(() => {
                                    if (player.tphaseTip && player.tphaseTip.classList) {
                                        player.tphaseTip.classList.add("active");
                                    }
                                }, 10);
                            }

                            // 客户端同步
                            if (lib.node && lib.node.clients) {
                                lib.node.clients.forEach(c => {
                                    if (!c.gameOptions) c.gameOptions = {};
                                    if (!c.gameOptions.phaseTip) {
                                        c.send(addStyle);
                                        c.gameOptions.phaseTip = true;
                                    }
                                });
                            }
                        } else {
                            // 先添加向右淡出动画
                            if (player.tphaseTip && player.tphaseTip.classList) {
                                player.tphaseTip.classList.remove("active", "fade-in-left");
                                player.tphaseTip.classList.add("fade-out-right");
                            }

                            // 动画结束后更新图片并重新从左淡入
                            setTimeout(() => {
                                // 直接使用存储的图片引用更新
                                if (player.tphaseTipImg) {
                                    player.tphaseTipImg.src = imgSrc;
                                    player.tphaseTipImg.alt = phasename;
                                }

                                // 移除淡出类，添加淡入类
                                if (player.tphaseTip && player.tphaseTip.classList) {
                                    player.tphaseTip.classList.remove("fade-out-right");
                                    void player.tphaseTip.offsetWidth; // 触发重绘
                                    player.tphaseTip.classList.add("fade-in-left");

                                    // 短暂延迟后添加active类
                                    setTimeout(() => {
                                        if (player.tphaseTip && player.tphaseTip.classList) {
                                            player.tphaseTip.classList.add("active");
                                        }
                                    }, 10);
                                }
                            }, 600);
                        }
                    }
                },
                event.triggername,
                trigger.player
            );
        },
        direct: true,
        popup: false,
        forced: true,
        forceDie: true,
        charlotte: true,
        locked: true,
    };
    //前缀Prefix添加
    lib.namePrefix.set("凌", {
        color: "#8470FF",
        nature: "LightSlateBlue",
        showName: "凌",
    });
    lib.namePrefix.set("真", {
        color: "#FFD700",
        nature: "GoldEnrod",
        showName: "真",
    });
    lib.namePrefix.set("☆神", {
        color: "#FFD700",
        nature: "GoldEnrod",
        showName: "☆神",
    });
    lib.namePrefix.set("虎翼", {
        color: "#FFD700",
        nature: "GoldEnrod",
        showName: "虎翼",
    });
    lib.namePrefix.set("勇", {
        color: "#def7ca",
        nature: "watermm",
        showName: "勇",
    });
    lib.namePrefix.set("严", {
        color: "#def7ca",
        nature: "watermm",
        showName: "严",
    });
    lib.namePrefix.set("信", {
        color: "#def7ca",
        nature: "watermm",
        showName: "信",
    });
    lib.namePrefix.set("废", {
        color: "#a4a4a4",
        nature: "black",
        showName: "废",
    });
    lib.namePrefix.set("ddd", {
        getSpan: () => {
            const span = document.createElement("span"),
                style = span.style;
            style.writingMode = style.webkitWritingMode = "horizontal-tb";
            style.fontFamily = "MotoyaLMaru";
            style.transform = "scaleY(0.85)";
            span.textContent = "3D";
            return span.outerHTML;
        },
    });
    //添加卡牌包
    lib.init.js(
        lib.assetURL + "extension/星之梦/card/card.js",
        null,
        () => {
            //导入卡牌包
            lib.config.all.cards.push("swCard");
            lib.translate["swCard_card_config"] = "<span style='font-family: xingkai'>神武再世</span>";
        },
        () => {
            alert("error 〈神武再世〉卡牌导入失败");
        }
    );
    //单向联机
    if (skill.skill) character.skill = skill.skill;
    if (skill.translate) {
        for (let translate in skill.translate) if (!character.translate[translate]) character.translate[translate] = skill.translate[translate];
    };
    // if (skill.dynamicTranslate) {
    //     character.dynamicTranslate = character.dynamicTranslate || {}; // 初始化
    //     for (let key in skill.dynamicTranslate) {
    //         if (!character.dynamicTranslate[key]) {  // 和translate一样的保护性赋值
    //             character.dynamicTranslate[key] = skill.dynamicTranslate[key];
    //         }
    //     }
    // };
    delete character.name;
    game.addCharacterPack(character);
    lib.translate.星之梦_character_config = "星之梦";
    lib.config.星之梦_characters_enable = true;
    lib.arenaReady.push(function () {
        lib.connectCharacterPack.add("星之梦");
    });
    if (!_status.postReconnect.lingmeng_pack) _status.postReconnect.lingmeng_pack = [function (pack) {
        lib.translate.星之梦_character_config = "星之梦";
        lib.characterPack["星之梦"] = pack;
        for (let key in pack) lib.character[key] = pack[key];
        lib.config.extension_星之梦_characters_enable = true;
        lib.connectCharacterPack.add("星之梦");
        lib.config.characters.add("星之梦");
    }, lib.characterPack["星之梦"]];
    if (!_status.postReconnect.lingmeng_translate) _status.postReconnect.lingmeng_translate = [function (translates) {
        lib.translate.星之梦_character_config = "星之梦";
        for (let key in translates) lib.translate[key] = translates[key];
    }, character.translate];
    if (!_status.postReconnect.lm_pack_namePrefix) _status.postReconnect.lm_pack_namePrefix = [function () {
        //Prefix添加
        lib.namePrefix.set("凌", {
            color: "#8470FF",
            nature: "LightSlateBlue",
            showName: "凌",
        });
        lib.namePrefix.set("真", {
            color: "#FFD700",
            nature: "GoldEnrod",
            showName: "真",
        });
        lib.namePrefix.set("☆神", {
            color: "#FFD700",
            nature: "GoldEnrod",
            showName: "☆神",
        });
        lib.namePrefix.set("虎翼", {
            color: "#FFD700",
            nature: "GoldEnrod",
            showName: "虎翼",
        });
        lib.namePrefix.set("勇", {
            color: "#def7ca",
            nature: "watermm",
            showName: "勇",
        });
        lib.namePrefix.set("严", {
            color: "#def7ca",
            nature: "watermm",
            showName: "严",
        });
        lib.namePrefix.set("信", {
            color: "#def7ca",
            nature: "watermm",
            showName: "信",
        });
        lib.namePrefix.set("废", {
            color: "#a4a4a4",
            nature: "black",
            showName: "废",
        });
    }, []];
    lib.element.content.waitForPlayer = function () {
        "step 0"
        ui.auto.hide();
        ui.pause.hide();
        game.createServer();
        if (!lib.translate.zhu) {
            lib.translate.zhu = "主";
        };
        if (event.func) {
            event.func();
        };
        if (!lib.configOL.number) {
            lib.configOL.number = parseInt(lib.configOL.player_number);
        };
        if (game.onlineroom) {
            game.send("server", "config", lib.configOL);
        };
        ui.create.connectPlayers(game.ip);
        if (!window.isNonameServer) {
            var me = game.connectPlayers[0];
            me.setIdentity("zhu");
            me.initOL(get.connectNickname(), lib.config.connect_avatar);
            me.playerid = "1";
            game.onlinezhu = "1";
        };
        _status.waitingForPlayer = true;
        if (window.isNonameServer) {
            document.querySelector("#server_status").innerHTML = "等待中";
        };
        game.pause();
        "step 1"
        _status.waitingForPlayer = false;
        lib.configOL.gameStarted = true;
        if (window.isNonameServer) {
            document.querySelector("#server_status").innerHTML = "游戏中";
        };
        if (game.onlineroom) {
            game.send("server", "config", lib.configOL);
        };
        for (var i = 0; i < game.connectPlayers.length; i++) {
            game.connectPlayers[i].delete();
        };
        delete game.connectPlayers;
        if (ui.roomInfo) {
            ui.roomInfo.remove();
            delete ui.roomInfo;
        };
        if (ui.exitroom) {
            ui.exitroom.remove();
            delete ui.exitroom;
        };
        game.broadcast(function (postReconnect, pack) {
            postReconnect = get.parsedResult(postReconnect);
            for (var i in postReconnect) {
                if (Array.isArray(postReconnect[i])) {
                    postReconnect[i].shift().apply(this, postReconnect[i]);
                };
            };
        }, _status.postReconnect);
        game.broadcast("gameStart");
        game.delay(2);
        ui.auto.show();
        ui.pause.show();
        if (lib.config.show_cardpile) {
            ui.cardPileButton.style.display = "";
        };
    };

}