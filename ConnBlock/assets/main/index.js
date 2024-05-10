window.__require = function t(e, o, n) {
    function i(c, a) {
        if (!o[c]) {
            if (!e[c]) {
                var h = c.split("/");
                if (h = h[h.length - 1],
                !e[h]) {
                    var r = "function" == typeof __require && __require;
                    if (!a && r)
                        return r(h, !0);
                    if (s)
                        return s(h, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
                c = h
            }
            var l = o[c] = {
                exports: {}
            };
            e[c][0].call(l.exports, function(t) {
                return i(e[c][1][t] || t)
            }, l, l.exports, t, e, o, n)
        }
        return o[c].exports
    }
    for (var s = "function" == typeof __require && __require, c = 0; c < n.length; c++)
        i(n[c]);
    return i
}({
    Main: [function(t, e) {
        "use strict";
        function o(t, e) {
            var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (o)
                return (o = o.call(t)).next.bind(o);
            if (Array.isArray(t) || (o = n(t)) || e && t && "number" == typeof t.length) {
                o && (t = o);
                var i = 0;
                return function() {
                    return i >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[i++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function n(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return i(t, e);
                var o = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === o && t.constructor && (o = t.constructor.name),
                "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? i(t, e) : void 0
            }
        }
        function i(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var o = 0, n = new Array(e); o < e; o++)
                n[o] = t[o];
            return n
        }
        cc._RF.push(e, "100e0Pqk/ZDeJxgjsk5mM+O", "Main"),
        cc.Class({
            extends: cc.Component,
            properties: {
                selected: cc.Prefab,
                line: cc.Prefab,
                listBlock: cc.Node,
                bestscore: cc.Label,
                score: cc.Label,
                diamondcount: cc.Label,
                lines: cc.Node,
                hammer: cc.Node,
                change: cc.Node,
                home: cc.Node,
                descol: cc.Node,
                desrow: cc.Node,
                pause: cc.Node,
                sellist: cc.Node,
                explosion: cc.Prefab,
                broken: cc.Prefab,
                rocket: cc.Node,
                miniblack: cc.Node,
                spAnim: cc.Node,
                target: cc.Node,
                startgameAnim: cc.Node,
                combo: cc.Node,
                sound: cc.AudioClip,
                newblock: cc.Node,
                hammerblock: cc.Prefab,
                emoji: cc.Node,
                fireWork: cc.Node,
                nextBlock: cc.Node,
                tutorial: cc.Node,
                manager: cc.Node
            },
            onLoad: function() {
                this.time = 0,
                this.best = !0,
                this.emojiTime = 5,
                this.button(),
                this.linePool || (this.onPool(),
                this.checkTime(),
                this.responsive()),
                this.init()
            },
            setPosition: function() {
                cc.winSize.height / cc.winSize.width >= 2 || (this.listBlock.y += 20,
                this.lines.y += 20,
                this.sellist.y += 20,
                this.node.getChildByName("brokenlist").y += 20,
                this.node.getChildByName("exlist").y += 20)
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (this.hammer.y += 10,
                this.change.y += 10,
                this.descol.y += 10,
                this.desrow.y += 10,
                cc.find("footer", this.node).scale = .9,
                cc.find("header", this.node).scale = .9,
                this.spAnim.scale = .8,
                this.listBlock.scale = .95,
                this.emoji.scale = .9,
                this.lines.scale = .95,
                this.sellist.scale = .95,
                this.node.getChildByName("brokenlist").scale = .95,
                this.node.getChildByName("exlist").scale = .95)
            },
            startAnimation: function() {
                var t = this;
                this.startgameAnim.active = !0,
                this.startgameAnim.getComponent(dragonBones.ArmatureDisplay).playAnimation("a", 1),
                this.scheduleOnce(function() {
                    t.startgameAnim.active = !1
                }, 2)
            },
            init: function() {
                this.diamondcount.string = (cc.sys.localStorage.getItem("diamond") || 0).toString(),
                this.diamond = parseInt(cc.sys.localStorage.getItem("diamond")) || 0,
                this.isArr = !1,
                this.node.on("touchstart", this.onTouchStart, this),
                this.isChange || this.isChoose || this.node.on("touchmove", this.onTouchMove, this),
                this.node.on("touchend", this.onTouchEnd, this)
            },
            data: function(t, e, o, n) {
                var i = this;
                this.myScore = parseInt(cc.sys.localStorage.getItem("currentScore_" + n)) || 0,
                this.bestscore.string = cc.sys.localStorage.getItem("bestscore_" + n) || 0,
                cc.sys.localStorage.getItem("arr_" + n) || this.scheduleOnce(function() {
                    i.startAnimation()
                }, .2),
                this.xPos = t,
                this.yPos = e,
                this.distance = o,
                "6x8" === n ? (this.lines.scale = .8,
                this.sellist.scale = .8,
                this.node.getChildByName("brokenlist").scale = .8,
                this.node.getChildByName("exlist").scale = .8) : (this.lines.scale = .95,
                this.sellist.scale = .95,
                this.node.getChildByName("brokenlist").scale = .95,
                this.node.getChildByName("exlist").scale = .95)
            },
            onDestroy: function() {
                this.node.off("touchstart", this.onTouchStart, this),
                this.node.off("touchmove", this.onTouchMove, this),
                this.node.off("touchend", this.onTouchEnd, this),
                this.desBtn()
            },
            desBtn: function() {
                this.hammer.off("touchend", this.useHammer, this),
                this.change.off("touchend", this.useChange, this),
                this.descol.off("touchend", this.column, this),
                this.desrow.off("touchend", this.row, this)
            },
            onPool: function() {
                this.linePool = new cc.NodePool("line");
                for (var t = 0; t < 20; t++) {
                    var e = cc.instantiate(this.line);
                    this.linePool.put(e)
                }
                this.selPool = new cc.NodePool("select");
                for (var o = 0; o < 20; o++) {
                    var n = cc.instantiate(this.selected);
                    this.selPool.put(n)
                }
                this.brokePool = new cc.NodePool("broken");
                for (var i = 0; i < 20; i++) {
                    var s = cc.instantiate(this.broken);
                    this.brokePool.put(s)
                }
                this.exPool = new cc.NodePool("explosion");
                for (var c = 0; c < 20; c++) {
                    var a = cc.instantiate(this.explosion);
                    this.exPool.put(a)
                }
            },
            stopBlockActions: function() {
                for (var t, e = o(this.listBlock.children); !(t = e()).done; ) {
                    var n = t.value;
                    n.stopAllActions(),
                    n.scale = 1
                }
            },
            showEmoji: function() {
                this.emoji.stopAllActions(),
                this.nextBlock.stopAllActions(),
                this.emojiTime = 5,
                this.nextBlock.active = !1,
                this.emoji.active = !0,
                this.emoji.new = !0,
                this.emoji.getComponent(dragonBones.ArmatureDisplay).playAnimation("b", 1),
                this.emoji.scale = 0,
                this.emoji.active,
                cc.tween(this.emoji).to(.3, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            hideEmoji: function() {
                this.emoji.active && (this.emoji.active = !1,
                this.newblock.stopAllActions(),
                this.listBlock.getComponent("box").rehibilitate())
            },
            onTouchStart: function(t) {
                if (this.isChoose || this.isChange || this.isCol || this.isRow) {
                    if ((this.isCol || this.isRow || this.isChoose) && t) {
                        this.target.active = !0;
                        var e = t.getLocation();
                        e = this.node.convertToNodeSpaceAR(e),
                        this.target.x = e.x,
                        this.target.y = e.y
                    }
                } else {
                    this.resultArr = [];
                    var o = this.listBlock.children
                      , n = t.getLocation()
                      , i = o.find(function(t) {
                        return 1 == t._hitTest(n)
                    }, this);
                    i && (this.time = 15,
                    this.listBlock.getComponent("box").showResultBlock(i.value),
                    this.stopBlockActions(),
                    this.node.getChildByName("hand").active = !1,
                    this.touchStart = i,
                    this.resultArr.push(i),
                    this.blockScale(i),
                    this.spwanSelected(i),
                    this.playBlockAudio(1))
                }
            },
            playBlockAudio: function(t) {
                if ("on" === cc.sys.localStorage.getItem("sound")) {
                    for (var e = t; e >= 1; e -= 11)
                        t = e;
                    var o = "mbl" + t;
                    0 === t && (o = "gop_bl");
                    var n = this.sound;
                    cc.resources.load("am_thanh/ingame/game_play/" + o, function(t, e) {
                        n = e,
                        cc.audioEngine.play(n, !1, 1)
                    })
                }
            },
            checkTime: function() {
                var t = this;
                this.schedule(function() {
                    t.emojiTime += .5,
                    t.time ? t.time += .5 : (t.time = 0,
                    t.time += .5),
                    10 === t.time && t.listBlock.getComponent("box").suggestions(),
                    3.5 === t.emojiTime && t.hideEmoji()
                }, .5)
            },
            button: function() {
                this.isChoose = !1,
                this.isChange = !1,
                this.isCol = !1,
                this.isRow = !1,
                this.spAnim.getChildByName("des").on("touchend", this.offSP, this),
                this.hammer.on("touchend", this.useHammer, this),
                this.change.on("touchend", this.useChange, this),
                this.descol.on("touchend", this.column, this),
                this.desrow.on("touchend", this.row, this)
            },
            offSP: function() {
                this.miniblack.active = !1,
                this.spAnim.active = !1,
                this.a = null,
                this.destroyPool(),
                this.button(),
                this.init()
            },
            goldNotification: function() {
                var t = this;
                this.diamondcount.node.color = cc.color("#FF0000"),
                cc.tween(this.diamondcount.node).to(.1, {
                    scale: .9
                }).to(.1, {
                    scale: .7
                }).to(.1, {
                    scale: .9
                }).to(.1, {
                    scale: .7
                }).start(),
                cc.tween(this.diamondcount.node.parent.getChildByName("coin")).to(.1, {
                    scale: 1.2
                }).to(.1, {
                    scale: 1
                }).to(.1, {
                    scale: 1.2
                }).to(.1, {
                    scale: 1
                }).start(),
                this.scheduleOnce(function() {
                    t.diamondcount.node.color = cc.color("#FFFFFF")
                }, .4)
            },
            column: function() {
                this.playAnotherSound("button"),
                this.diamond >= 400 ? (this.miniblack.active = !0,
                this.spAnim.active = !0,
                this.isCol = !0,
                this.time = 15,
                this.stopBlockActions(),
                this.spAnim.getComponent(dragonBones.ArmatureDisplay).armatureName = "rocket_h",
                this.spAnim.getChildByName("name").getComponent(cc.Label).string = "Rocket!",
                this.spAnim.getChildByName("howtouse").getComponent(cc.Label).string = "Select block to use rocket",
                this.onTouchStart(),
                this.onTouchEnd()) : (this.goldNotification(),
                this.more_coin())
            },
            row: function() {
                this.playAnotherSound("button"),
                this.diamond >= 350 ? (this.time = 15,
                this.miniblack.active = !0,
                this.spAnim.active = !0,
                this.isRow = !0,
                this.stopBlockActions(),
                this.spAnim.getComponent(dragonBones.ArmatureDisplay).armatureName = "rocket_v",
                this.spAnim.getChildByName("name").getComponent(cc.Label).string = "Rocket!",
                this.spAnim.getChildByName("howtouse").getComponent(cc.Label).string = "Select block to use rocket",
                this.onTouchStart(),
                this.onTouchEnd()) : (this.goldNotification(),
                this.more_coin())
            },
            more_coin: function() {
                var t = this.node.parent.getChildByName("more_coin");
                t.active = !0,
                cc.tween(t).to(.5, {
                    scale: 1.2
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            useHammer: function() {
                this.playAnotherSound("button"),
                this.diamond >= 170 ? (this.time = 15,
                this.isChoose = !0,
                this.spAnim.active = !0,
                this.miniblack.active = !0,
                this.stopBlockActions(),
                this.spAnim.getComponent(dragonBones.ArmatureDisplay).armatureName = "hammer",
                this.spAnim.getChildByName("name").getComponent(cc.Label).string = "Smash!",
                this.spAnim.getChildByName("howtouse").getComponent(cc.Label).string = "Select block to remove",
                this.onTouchStart(),
                this.onTouchEnd()) : (this.goldNotification(),
                this.more_coin())
            },
            useChange: function() {
                this.playAnotherSound("button"),
                this.diamond >= 195 ? (this.time = 15,
                this.miniblack.active = !0,
                this.isChange = !0,
                this.spAnim.active = !0,
                this.stopBlockActions(),
                this.spAnim.getComponent(dragonBones.ArmatureDisplay).armatureName = "change",
                this.spAnim.getChildByName("name").getComponent(cc.Label).string = "Change!",
                this.spAnim.getChildByName("howtouse").getComponent(cc.Label).string = "Select 2 block to change",
                this.node.off("touchstart", this.onTouchStart, this),
                this.node.off("touchmove", this.onTouchMove, this),
                this.onTouchEnd()) : (this.goldNotification(),
                this.more_coin())
            },
            blockScale: function(t) {
                cc.tween(t).to(.15, {
                    scale: 1.3
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.016, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.016, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            chooseColor: function(t) {
                for (var e = t.value, o = e; o >= 2; o /= 1024)
                    e = o;
                return 2 === e ? "03caef" : 4 === e ? "5fea10" : 8 === e ? "f1b60b" : 16 === e ? "d0679a" : 32 === e ? "365ff4" : 64 === e ? "a13ef1" : 128 === e ? "f53ecb" : 256 === e ? "029b5b" : 512 === e ? "b7632e" : 1024 === e ? "f44832" : void 0
            },
            spwanLine: function(t, e) {
                var o = null;
                if (o = this.linePool.size() > 0 ? this.linePool.get() : cc.instantiate(this.line),
                this.lines.addChild(o),
                o.x = t.x,
                o.y = t.y,
                e && this.resultArr.length >= 2) {
                    var n = this.chooseColor(this.touchStart)
                      , i = o.getComponent(cc.Graphics);
                    i.clear(),
                    i.lineWidth = 17,
                    i.strokeColor.fromHEX(n),
                    i.moveTo(0, 0),
                    i.lineTo(0, this.distance + this.listBlock.children[0].width / 2.5),
                    i.stroke(),
                    this.touchStart.x === t.x && this.touchStart.y < t.y ? o.angle = 180 : this.touchStart.x === t.x && this.touchStart.y > t.y ? o.angle = 0 : this.touchStart.x < t.x && this.touchStart.y === t.y ? o.angle = 90 : this.touchStart.x > t.x && this.touchStart.y === t.y ? o.angle = -90 : this.touchStart.x < t.x && this.touchStart.y > t.y ? o.angle = 45 : this.touchStart.x < t.x && this.touchStart.y < t.y ? o.angle = 135 : this.touchStart.x > t.x && this.touchStart.y > t.y ? o.angle = -45 : this.touchStart.x > t.x && this.touchStart.y < t.y && (o.angle = -135)
                }
            },
            onTouchMove: function(t) {
                if (this.isCol || this.isRow || this.isChoose) {
                    var e = t.getLocation();
                    e = this.node.convertToNodeSpaceAR(e),
                    this.target.x = e.x,
                    this.target.y = e.y
                } else if (this.resultArr && this.resultArr.length > 0) {
                    var n = this.listBlock.children
                      , i = t.getLocation()
                      , s = n.find(function(t) {
                        return 1 == t._hitTest(i)
                    }, this);
                    if (s && s != this.touchStart) {
                        var c = s.position.sub(this.touchStart.position).mag();
                        if ((s.value == this.touchStart.value || this.resultArr.length > 1 && (s.value === 2 * this.touchStart.value || s.value == this.touchStart.value || s.value === this.touchStart.value / 2)) && c < (this.distance || 111) * Math.sqrt(2) + 1) {
                            for (var a, h = o(this.resultArr); !(a = h()).done; )
                                a.value == s && s != this.resultArr[this.resultArr.length - 2] && (this.isArr = !0);
                            this.resultArr.length >= 2 && s === this.resultArr[this.resultArr.length - 2] ? (this.linePool.put(this.lines.children[this.lines.childrenCount - 1]),
                            this.selPool.put(this.sellist.children[this.sellist.childrenCount - 1]),
                            this.resultArr.pop(),
                            this.touchStart = this.resultArr[this.resultArr.length - 1],
                            this.checkResultBlock()) : !this.isArr && s.value >= this.touchStart.value && (this.resultArr.push(s),
                            this.playBlockAudio(this.resultArr.length),
                            this.blockScale(s),
                            this.spwanLine(s, !0),
                            this.spwanSelected(s),
                            this.touchStart = s,
                            this.checkResultBlock()),
                            this.isArr = !1
                        }
                    }
                }
            },
            checkResultBlock: function() {
                for (var t, e = 0, o = 0; o < this.resultArr.length; o++)
                    e += this.resultArr[o].value;
                for (var n = 2; n <= e; n *= 2)
                    t = n;
                this.listBlock.getComponent("box").changeResultBlock(t)
            },
            changeEmoji: function(t) {
                t < 4 ? this.emoji.getComponent(dragonBones.ArmatureDisplay).armatureName = "e1" : t < 8 ? this.emoji.getComponent(dragonBones.ArmatureDisplay).armatureName = "e2" : t < 10 ? this.emoji.getComponent(dragonBones.ArmatureDisplay).armatureName = "e3" : t < 12 ? this.emoji.getComponent(dragonBones.ArmatureDisplay).armatureName = "e4" : t < 16 ? this.emoji.getComponent(dragonBones.ArmatureDisplay).armatureName = "e5" : t >= 16 && (this.emoji.getComponent(dragonBones.ArmatureDisplay).armatureName = "e6")
            },
            spwanSelected: function(t) {
                var e = null;
                e = this.selPool.size() > 0 ? this.selPool.get() : cc.instantiate(this.selected),
                this.sellist.addChild(e),
                e.x = t.x,
                e.y = t.y,
                this.blockScale(e)
            },
            playToolSound: function(t) {
                if ("on" === cc.sys.localStorage.getItem("sound")) {
                    var e = this.sound;
                    cc.resources.load("am_thanh/ingame/tool/" + t, function(t, o) {
                        e = o,
                        cc.audioEngine.play(e, !1, 1)
                    })
                }
            },
            playAnotherSound: function(t) {
                if ("on" === cc.sys.localStorage.getItem("sound")) {
                    var e = this.sound;
                    cc.resources.load("am_thanh/" + t, function(t, o) {
                        e = o,
                        cc.audioEngine.play(e, !1, 1)
                    })
                }
            },
            onChange: function(t) {
                var e = this.listBlock.children
                  , o = t.getLocation()
                  , n = e.find(function(t) {
                    return 1 == t._hitTest(o)
                }, this);
                this.a && this.a != n && n ? (this.spAnim.getChildByName("des").off("touchend", this.offSP, this),
                this.spwanSelected(n),
                this.diamond -= 195,
                this.diamondcount.string = this.diamond.toString(),
                this.playToolSound("change"),
                cc.tween(n).to(1.3, {
                    x: this.a.x,
                    y: this.a.y
                }).start(),
                n.i = this.a.i,
                n.j = this.a.j,
                cc.tween(this.a).to(1.3, {
                    x: n.x,
                    y: n.y
                }).start(),
                this.a.i = (this.xPos - n.y) / this.distance,
                this.a.j = (n.x - this.yPos) / this.distance,
                this.listBlock.getComponent("box").change(this.a, n),
                cc.sys.localStorage.setItem("diamond", this.diamond),
                this.isChange = !1,
                this.a = null,
                this.scheduleOnce(function() {
                    this.init(),
                    this.button(),
                    this.miniblack.active = !1,
                    this.spAnim.active = !1,
                    this.listBlock.getComponent("box").checkGame(),
                    this.time = 0,
                    this.destroyPool()
                }, 1.4)) : n && !this.a ? (this.a = n,
                this.spwanSelected(n)) : n === this.a && (this.a = null,
                this.destroyPool())
            },
            effect: function(t, e) {
                this.broke = null,
                this.brokePool.size() > 0 ? this.broke = this.brokePool.get() : this.broke = cc.instantiate(this.broken),
                this.node.getChildByName("brokenlist").addChild(this.broke),
                this.broke.x = t.x,
                this.broke.y = t.y,
                this.ex = null,
                this.exPool.size() > 0 ? this.ex = this.exPool.get() : this.ex = cc.instantiate(this.explosion),
                this.node.getChildByName("exlist").addChild(this.ex),
                this.ex.x = t.x,
                this.ex.y = t.y;
                var o = this.chooseColor(t);
                return this.broke.getComponent(dragonBones.ArmatureDisplay).playAnimation("a", 1),
                this.broke.color = cc.color(o),
                this.ex.getComponent(dragonBones.ArmatureDisplay).playAnimation("a", 1),
                this.ex.getComponent(dragonBones.ArmatureDisplay).armatureName = e,
                this.ex.color = cc.color(o),
                this.ex.getComponent(dragonBones.ArmatureDisplay)
            },
            desEffectPool: function() {
                for (var t = this.node.getChildByName("brokenlist").childrenCount - 1; t >= 0; t--)
                    this.brokePool.put(this.node.getChildByName("brokenlist").children[0]),
                    this.exPool.put(this.node.getChildByName("exlist").children[0])
            },
            onUseHammer: function(t) {
                var e = this.listBlock.children
                  , o = t.getLocation()
                  , n = e.find(function(t) {
                    return 1 == t._hitTest(o)
                }, this);
                if (this.target.active = !1,
                n) {
                    this.spAnim.getChildByName("des").off("touchend", this.offSP, this),
                    this.onDestroy();
                    var i = cc.instantiate(this.hammerblock);
                    this.listBlock.addChild(i),
                    i.x = this.spAnim.x,
                    i.y = this.spAnim.y,
                    i.getComponent(dragonBones.ArmatureDisplay).armatureName = "hammer",
                    cc.tween(i).to(.5, {
                        x: n.x,
                        y: n.y - 20
                    }, {
                        easing: "quadIn"
                    }).start(),
                    this.scheduleOnce(function() {
                        i.getComponent(dragonBones.ArmatureDisplay).playAnimation("a", 1)
                    }, .5),
                    this.scheduleOnce(function() {
                        this.playToolSound("hammer"),
                        this.diamondcount.string = this.diamond.toString(),
                        this.listBlock.getComponent("box").creatBlock(n),
                        this.listBlock.getComponent("box").destroyBlock(n),
                        this.effect(n, "effect2"),
                        this.diamond -= 170,
                        this.scheduleOnce(function() {
                            this.miniblack.active = !1,
                            this.spAnim.active = !1,
                            this.time = 0,
                            this.listBlock.getComponent("box").move(n),
                            cc.sys.localStorage.setItem("diamond", this.diamond),
                            this.isChoose = !1,
                            this.init(),
                            this.button()
                        }, .3),
                        this.scheduleOnce(function() {
                            this.listBlock.getComponent("box").checkGame(),
                            i.destroy(),
                            this.desEffectPool()
                        }, 1)
                    }, 1, 2)
                }
            },
            activeRoket: function(t) {
                return this.rocket.active = !0,
                this.rocket.angle = 90,
                this.rocket.x = t.x,
                this.rocket.y = t.y,
                this.rocket.parent = this.listBlock,
                this.rocket.getComponent(dragonBones.ArmatureDisplay).playAnimation("a", 1),
                this.playToolSound("rocket_explode"),
                this.rocket.getComponent(dragonBones.ArmatureDisplay)
            },
            destroyCol: function(t) {
                var e = this.listBlock.children
                  , o = t.getLocation()
                  , n = e.find(function(t) {
                    return 1 == t._hitTest(o)
                }, this);
                this.target.active = !1,
                n && (this.spAnim.getChildByName("des").off("touchend", this.offSP, this),
                this.onDestroy(),
                this.isCol = !1,
                this.diamond -= 400,
                this.activeRoket(n).armatureName = "rocket_v",
                this.scheduleOnce(function() {
                    this.rocket.active = !1,
                    this.rocket.removeFromParent(),
                    this.miniblack.active = !1,
                    this.spAnim.active = !1,
                    cc.sys.localStorage.setItem("diamond", this.diamond)
                }, 1),
                this.diamondcount.string = this.diamond.toString(),
                this.listBlock.getComponent("box").destroyCol(n))
            },
            destroyRow: function(t) {
                var e = this.listBlock.children
                  , o = t.getLocation()
                  , n = e.find(function(t) {
                    return 1 == t._hitTest(o)
                }, this);
                this.target.active = !1,
                n && (this.spAnim.getChildByName("des").off("touchend", this.offSP, this),
                this.onDestroy(),
                this.isRow = !1,
                this.activeRoket(n).armatureName = "rocket_h",
                this.scheduleOnce(function() {
                    this.rocket.active = !1,
                    this.rocket.removeFromParent(),
                    this.miniblack.active = !1,
                    this.spAnim.active = !1,
                    cc.sys.localStorage.setItem("diamond", this.diamond)
                }, 1),
                this.diamond -= 350,
                this.diamondcount.string = this.diamond.toString(),
                this.listBlock.getComponent("box").destroyRow(n))
            },
            destroyPool: function() {
                for (var t = this.sellist.childrenCount - 1; t >= 0; t--)
                    this.selPool.put(this.sellist.children[t]),
                    t < this.lines.childrenCount && this.linePool.put(this.lines.children[t])
            },
            onTouchEnd: function(t) {
                if (this.tutorial.active && this.listBlock.children.length > 1 && (this.node.getChildByName("hand").active = !0),
                this.isChoose || this.isChange || this.isCol || this.isRow)
                    this.isChange && t ? this.onChange(t) : this.isChoose && t ? this.onUseHammer(t) : this.isCol && t ? this.destroyCol(t) : this.isRow && t && this.destroyRow(t);
                else if (this.destroyPool(),
                this.resultArr && this.resultArr.length > 1) {
                    this.onDestroy();
                    for (var e = 0, o = 0, n = 0, i = 0; i < this.resultArr.length; i++)
                        o += this.resultArr[i].value;
                    for (var s = 2; s <= o; s *= 2)
                        n = s;
                    if (this.tutorial.active)
                        if (this.resultArr.length === this.listBlock.children.length) {
                            for (; n > 2; n /= 2)
                                e++;
                            this.desResultArr(e),
                            this.node.getChildByName("hand").active = !1
                        } else
                            this.init(),
                            this.button();
                    else {
                        var c;
                        this.showEmoji(),
                        this.changeEmoji(this.resultArr.length);
                        var a = this.resultArr.length;
                        for (this.resultArr.length >= 8 && (this.combo.isOn = !0,
                        c = 2 * this.resultArr.length,
                        this.scheduleOnce(function() {
                            this.listBlock.getComponent("box").spawnCoin(this.resultArr[this.resultArr.length - 1]).getComponent(dragonBones.ArmatureDisplay).armatureName = "coin",
                            this.listBlock.getComponent("box").coinAnimation(this.resultArr[this.resultArr.length - 1], c)
                        }, .1 * (this.resultArr.length + 1))),
                        this.updateScore(n); n > 2; n /= 2)
                            e++;
                        var h = .11 * this.resultArr.length + .5;
                        this.emoji.new = !1,
                        this.emojiTime = 0,
                        this.emojiAction(),
                        this.desResultArr(e, a),
                        this.scheduleOnce(function() {
                            this.desEffectPool()
                        }, h)
                    }
                } else
                    this.resultArr && 1 === this.resultArr.length && (this.listBlock.getComponent("box").rehibilitate(),
                    this.time = 5)
            },
            emojiAction: function() {
                this.emoji.getComponent(dragonBones.ArmatureDisplay).playAnimation("a", 1)
            },
            resetTime: function() {
                this.time = 0
            },
            setTime: function() {
                this.time = 15
            },
            desResultArr: function(t, e) {
                this.resultArr.length > 1 ? this.scheduleOnce(function() {
                    this.effect(this.resultArr[0], "effect1"),
                    this.tutorial.active || this.listBlock.getComponent("box").creatBlock(this.resultArr[0], t),
                    this.listBlock.getComponent("box").destroyBlock(this.resultArr[0]),
                    this.resultArr.shift(),
                    this.desResultArr(t, e)
                }, .1) : this.scheduleOnce(function() {
                    var o = this;
                    this.resultArr[0].stopAllActions(),
                    this.resultArr[0].scale = 0,
                    this.effect(this.resultArr[0], "effect1"),
                    this.playBlockAudio(0),
                    this.scheduleOnce(function() {
                        o.listBlock.getComponent("box").changeBlock(o.resultArr[0], t),
                        cc.tween(o.resultArr[0]).to(.5, {
                            scale: 1.3
                        }, {
                            easing: "quadInOut"
                        }).to(.2, {
                            scale: 1
                        }, {
                            easing: "quadInOut"
                        }).to(.05, {
                            scale: 1.1
                        }, {
                            easing: "quadInOut"
                        }).to(.05, {
                            scale: 1
                        }, {
                            easing: "quadInOut"
                        }).start(),
                        o.scheduleOnce(function() {
                            o.tutorial.active || (o.listBlock.getComponent("box").move(),
                            o.checkCombo(e))
                        }, .7)
                    }, .2),
                    this.tutorial.active && this.scheduleOnce(function() {
                        this.tutorial.getComponent("tutorial").nextTut()
                    }, 1.7)
                }, .1)
            },
            checkCombo: function(t) {
                if (this.combo.isOn) {
                    var e = null;
                    t < 10 ? e = "nice" : t < 12 ? e = "excellent" : t < 16 ? e = "cool" : t >= 16 && (e = "amazing"),
                    this.setTime(),
                    this.comboAnimation(t, e)
                }
            },
            comboAnimation: function(t, e) {
                var o = this;
                t >= 10 && this.showFireWork();
                var n = this.combo;
                if (n.scale = 0,
                n.opacity = 0,
                cc.resources.load("combo/" + e, cc.SpriteFrame, function(t, e) {
                    n.getComponent(cc.Sprite).spriteFrame = e
                }),
                n.active = !0,
                "on" === cc.sys.localStorage.getItem("sound")) {
                    var i = this.sound;
                    cc.resources.load("am_thanh/combosound/" + e, function(t, e) {
                        i = e,
                        cc.audioEngine.play(i, !1, 1)
                    })
                }
                var s = this.combo.parent.children[1];
                s.active = !0,
                s.getComponent(cc.Label).string = "Combox" + t,
                cc.tween(n).to(.6, {
                    scale: 1.2,
                    opacity: 255
                }).to(.1, {
                    scale: 1
                }).to(1).by(.55, {
                    scale: -1,
                    opacity: -225,
                    angle: 1080
                }).start(),
                this.scheduleOnce(function() {
                    s.active = !1,
                    n.active = !1,
                    n.isOn = !1,
                    o.hightScoreSke ? (o.playHightScoreAnim(),
                    o.hightScoreSke = !1) : o.newblock.isOn && !o.hightScoreSke ? (o.newblock.isOn = !1,
                    o.scheduleOnce(function() {
                        o.listBlock.getComponent("box").showNewBlock()
                    }, .5)) : (o.init(),
                    o.button())
                }, 2.25)
            },
            activeEvent: function() {
                this.newblock.isOn || this.hightScoreSke || (this.init(),
                this.button())
            },
            showFireWork: function() {
                this.fireWork.getComponent(dragonBones.ArmatureDisplay).playAnimation("a", 1)
            },
            updateDiamond: function(t) {
                this.diamond += t,
                this.diamondcount.string = this.diamond.toString(),
                cc.sys.localStorage.setItem("diamond", this.diamond)
            },
            changeNum: function(t) {
                return t >= 1e6 ? t.toString().slice(0, 1) + "M" : t >= 1e6 ? t.toString().slice(0, 1) + "M" : t >= 1e5 ? t.toString().slice(0, 3) + "K" : t >= 1e4 ? t.toString().slice(0, 2) + "K" : t.toString()
            },
            playHightScoreAnim: function() {
                var t = this
                  , e = this.node.parent.getChildByName("hight_score_ske");
                e.getComponent(dragonBones.ArmatureDisplay).armatureName = null,
                e.isOn = !0,
                this.scheduleOnce(function() {
                    var t = this;
                    if (e.active = !0,
                    this.onDestroy(),
                    this.node.parent.getChildByName("blackground").active = !0,
                    e.getComponent(dragonBones.ArmatureDisplay).armatureName = "hight_score",
                    e.getComponent(dragonBones.ArmatureDisplay).playAnimation("a", 1),
                    "on" === cc.sys.localStorage.getItem("sound")) {
                        var o = this.sound;
                        cc.resources.load("am_thanh/ingame/hight_score", function(t, e) {
                            o = e,
                            cc.audioEngine.play(o, !1, 1)
                        })
                    }
                    this.setTime(),
                    this.scheduleOnce(function() {
                        t.node.parent.getChildByName("blackground").on("touchend", t.moveHightScoreAnim, t)
                    }, 2)
                }, .5),
                this.scheduleOnce(function() {
                    e.isOn && t.moveHightScoreAnim()
                }, 5.8)
            },
            moveHightScoreAnim: function() {
                this.node.parent.getChildByName("blackground").active = !1,
                this.node.parent.getChildByName("hight_score_ske").isOn = !1,
                this.node.parent.getChildByName("hight_score_ske").active = !1,
                this.init(),
                this.button(),
                this.manager.getComponent("Manager").showInter(),
                this.newblock.isOn ? (this.listBlock.getComponent("box").showNewBlock(),
                this.newblock.isOn = !1) : this.resetTime()
            },
            updateScore: function(t) {
                this.myScore += t,
                this.score.string = this.myScore.toString(),
                this.myScore > this.bestscore.string && (this.best && this.myScore >= 5e3 && (!0 !== this.combo.isOn ? this.playHightScoreAnim() : this.hightScoreSke = !0,
                this.best = !1),
                this.bestscore.string = this.myScore.toString())
            },
            pauseGame: function() {
                this.playAnotherSound("button"),
                this.pause.active = !0,
                this.pause.scale = 0,
                cc.tween(this.pause).to(.5, {
                    scale: 1.2
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start(),
                this.node.parent.getChildByName("blackground").active = !0,
                this.onDestroy()
            },
            exit: function() {
                this.stopBlockActions(),
                this.time = 0,
                this.best = !0,
                this.node.active = !1,
                this.home.active = !0,
                this.home.getComponent("home").updateDiamond()
            },
            reset: function() {
                this.stopBlockActions(),
                this.time = 0,
                this.listBlock.getComponent("box").resetListBlock(1),
                this.listBlock.getComponent("box").getMap(),
                this.score.string = "0",
                this.best = !0,
                this.onLoad()
            },
            getSuggestions: function(t) {
                var e = this;
                t.length > 0 && t[0] && (cc.tween(t[0]).repeatForever(cc.tween().by(.3, {
                    scale: .07
                }, {
                    easing: "quadInOut"
                }).by(.3, {
                    scale: -.07
                }, {
                    easing: "quadInOut"
                }).by(.5)).start(),
                t.shift(t[0]),
                this.scheduleOnce(function() {
                    e.getSuggestions(t)
                }, .15))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Manager: [function(t, e) {
        "use strict";
        cc._RF.push(e, "6937c0ixW5NIZeZ3rC2vFnJ", "Manager");
        var o = null
          , n = null
          , i = t("Screenshot");
        cc.Class({
            extends: cc.Component,
            properties: {
                newblock: cc.Node,
                avatarHome: cc.Node,
                avatarGame: cc.Node,
                avatarEnd: cc.Node
            },
            onLoad: function() {
                cc.log(cc.url.raw("resources/raw/share.png"))
            },
            start: function() {
                "undefined" != typeof FBInstant && (this.getInfo(),
                this.preLoadRewardAds(),
                this.preLoadInter(),
                this.showBanner(),
                this.createShotcut())
            },
            getInfo: function() {
                var t = this;
                if ("undefined" != typeof FBInstant) {
                    var e = new Image;
                    e.crossOrigin = "anonymous",
                    e.src = FBInstant.player.getPhoto(),
                    cc.assetManager.loadRemote(e.src, {
                        ext: ".jpg"
                    }, function(e, o) {
                        t.avatarHome.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o),
                        t.avatarGame.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o),
                        t.avatarEnd.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o)
                    }),
                    this.avatarHome.scale = .15,
                    this.avatarGame.scale = .15,
                    this.avatarEnd.scale = .2
                }
            },
            updateInvite: function(t) {
                var e = FBInstant.player.getName()
                  , o = FBInstant.player.getPhoto();
                cc.log(o, e),
                i.singlePlay(o, e, t, function(t) {
                    cc.log(t),
                    FBInstant.updateAsync({
                        action: "CUSTOM",
                        cta: "Join The Fight",
                        image: t,
                        text: {
                            default: "Play with me!",
                            localizations: {
                                vi_VN: "Ch\u01a1i c\xf9ng " + e
                            }
                        },
                        template: "play_turn"
                    }).then(function() {})
                })
            },
            showFriendList: function(t) {
                var e = this;
                "undefined" != typeof FBInstant && FBInstant.player.getConnectedPlayersAsync().then(function(o) {
                    if (cc.log(o),
                    o.length > 0) {
                        var n = o[Math.floor(Math.random() * o.length)];
                        FBInstant.context.createAsync(n.getID()).then(function() {}).catch(function(o) {
                            "USER_INPUT" == o.code && FBInstant.context.chooseAsync({
                                filters: ["NEW_PLAYERS_ONLY"]
                            }).then(function() {
                                console.log(FBInstant.context.getID()),
                                e.updateInvite(t || 0),
                                FBInstant.context.switchAsync(null).then(function() {})
                            }).catch(function(t) {
                                cc.log("Error", t),
                                t.code
                            })
                        })
                    } else
                        FBInstant.context.chooseAsync({
                            filters: ["NEW_PLAYERS_ONLY"]
                        }).then(function() {
                            e.updateInvite(t || 0),
                            FBInstant.context.switchAsync(null).then(function() {
                                cc.log("call")
                            })
                        }).catch(function(t) {
                            t.code
                        })
                }).catch(function(t) {
                    cc.log("Error", t),
                    t.code
                })
            },
            shareGame: function(t) {
                if ("undefined" != typeof FBInstant) {
                    var e = FBInstant.player.getName()
                      , o = FBInstant.player.getPhoto();
                    i.singlePlay(o, e, t || 0, function(t) {
                        FBInstant.shareAsync({
                            image: t,
                            text: FBInstant.player.getName() + " is asking for your help!",
                            data: {
                                myReplayData: "..."
                            },
                            shareDestination: ["NEWSFEED", "GROUP", "COPY_LINK", "MESSENGER"],
                            switchContext: !1
                        }).then(function() {}).catch(function() {})
                    })
                }
            },
            createShotcut: function() {
                FBInstant.canCreateShortcutAsync().then(function(t) {
                    t && FBInstant.createShortcutAsync().then(function() {
                        cc.log("Shortcut created")
                    }).catch(function() {
                        cc.log("Shortcut not created")
                    })
                }).catch(function() {
                    cc.log("fail")
                })
            },
            preLoadInter: function() {
                // FBInstant.getInterstitialAdAsync("688492126184909_689123079455147").then(function(t) {
                //     return (n = t).loadAsync()
                // }).then(function() {
                //     console.log("Interstitial preloaded")
                // }).catch(function(t) {
                //     console.error("Interstitial failed to preload: " + t.message)
                // })
            },
            preLoadRewardAds: function() {
                // FBInstant.getRewardedVideoAsync("688492126184909_689123169455138").then(function(t) {
                //     return (o = t).loadAsync()
                // }).then(function() {
                //     console.log("Rewarded video preloaded")
                // }).catch(function(t) {
                //     console.error("Rewarded video failed to preload: " + t.message)
                // })
            },
            loadRewardAds: function() {
                console.log("广告场景");
                var t = this;
                HUHU_showRewardedVideoAd(()=>{
                    t.newblock.getComponent("newblock").offThisDialog(100);
                }
                , ()=>{
                    promptTxT("No ads temporarily");
                }
                )
            },
            setData: function() {
                GameUtils.Player.get("Sound") || (GameUtils.Player.set("Sound", !0),
                GameUtils.Player.set("remove_ads", !1),
                GameUtils.Player.set("Rate", !1))
            },
            showBanner: function() {
                var t = this;
                // FBInstant.loadBannerAdAsync("688492126184909_689122976121824").then(function() {
                //     console.log("banner success"),
                //     t.scheduleOnce(t.showBanner, 60)
                // }).catch(function(e) {
                //     console.log("banner fail", e),
                //     t.scheduleOnce(t.showBanner, 10)
                // })
            },
            showInter: function() {
                console.log("广告场景");
                HUHU_showInterstitialAd();
            }
        }),
        cc._RF.pop()
    }
    , {
        Screenshot: "Screenshot"
    }],
    Screenshot: [function(t, e) {
        "use strict";
        cc._RF.push(e, "361aeyW8YpH/oYMiahy8ZAg", "Screenshot");
        var o = {
            extends: cc.Component,
            properties: {},
            singlePlay: function(t, e, o, n) {
                var i = {
                    width: 720,
                    height: 720,
                    pngData: [{
                        url: t,
                        x: 58,
                        y: 200,
                        width: 150,
                        height: 150
                    }, {
                        url: cc.url.raw("resources/raw/share.png"),
                        x: 0,
                        y: 0,
                        width: 720,
                        height: 720
                    }],
                    fontData: [{
                        text: e,
                        font: "30px serif",
                        textAlign: "center",
                        lineWidth: 32,
                        fillStyle: "#FFFFFF",
                        x: 120,
                        y: 340
                    }, {
                        text: o,
                        font: "38px serif",
                        textAlign: "center",
                        lineWidth: 32,
                        fillStyle: "#720000",
                        x: 120,
                        y: 455
                    }]
                };
                this.callDraw(i, n)
            },
            invite: function(t) {
                var e = {
                    width: 720,
                    height: 720,
                    pngData: [{
                        url: cc.url.raw("resources/pic_share.png"),
                        x: 0,
                        y: 0,
                        width: 720,
                        height: 720
                    }]
                };
                this.callDraw(e, t)
            },
            asyncFriend: function(t, e, o) {
                cc.log("asyncFriend", data),
                cc.size(600, 315);
                var n = {
                    width: 600,
                    height: 316,
                    pngData: [{
                        url: t,
                        x: 261,
                        y: 24,
                        width: 98,
                        height: 98
                    }, {
                        url: e,
                        x: 459,
                        y: 24,
                        width: 98,
                        height: 98
                    }, {
                        url: cc.url.raw("resources/shareMulti.png"),
                        x: 0,
                        y: 0,
                        width: 600,
                        height: 316
                    }],
                    fontData: []
                };
                this.callDraw(n, o)
            },
            callDraw: function(t, e) {
                for (var o = this, n = 0; n < t.pngData.length; n++) {
                    var i = t.pngData[n]
                      , s = new Image;
                    i.playImage = s,
                    s.crossOrigin = "anonymous",
                    s.height = i.height,
                    s.width = i.width,
                    s.src = i.url,
                    s.isLoad = !1,
                    s.onload = function() {
                        this.width = this.width,
                        this.height = this.height,
                        this.isLoad = !0;
                        var n = o.drawImage(t);
                        n && "function" == typeof e && e(n)
                    }
                }
            },
            drawImage: function(t) {
                for (var e = 0; e < t.pngData.length; e++)
                    if (1 != (i = t.pngData[e]).playImage.isLoad)
                        return void cc.log("some image not loaded");
                if (cc.log("start draw image"),
                null == this.drawFun) {
                    var o = document.createElement("canvas");
                    o.width = t.width,
                    o.height = t.height;
                    for (var n = 0; n < t.pngData.length; n++) {
                        var i = t.pngData[n]
                          , s = o.getContext("2d");
                        s.drawImage(i.playImage, i.x, i.y, i.playImage.width, i.playImage.height)
                    }
                    if (t.fontData)
                        for (var c = 0; c < t.fontData.length; c++) {
                            var a = t.fontData[c];
                            s.font = a.font,
                            s.lineWidth = a.lineWidth,
                            s.fillStyle = a.fillStyle,
                            s.textAlign = a.textAlign,
                            a.shadow && (cc.log(a.shadow),
                            s.shadowColor = a.shadow.color || "rgb(0, 0, 0)",
                            s.shadowOffsetX = a.shadow.x || 0,
                            s.shadowOffsetY = a.shadow.y || 0,
                            s.shadowBlur = a.shadow.blur || 0),
                            s.fillText(a.text.toString(), a.x, a.y)
                        }
                    return o.toDataURL("image/png")
                }
                this.drawFun()
            },
            start: function() {}
        };
        e.exports = o,
        cc._RF.pop()
    }
    , {}],
    addblock: [function(t, e) {
        "use strict";
        function o(t, e) {
            var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (o)
                return (o = o.call(t)).next.bind(o);
            if (Array.isArray(t) || (o = n(t)) || e && t && "number" == typeof t.length) {
                o && (t = o);
                var i = 0;
                return function() {
                    return i >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[i++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function n(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return i(t, e);
                var o = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === o && t.constructor && (o = t.constructor.name),
                "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? i(t, e) : void 0
            }
        }
        function i(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var o = 0, n = new Array(e); o < e; o++)
                n[o] = t[o];
            return n
        }
        cc._RF.push(e, "2382fHNCElIyL9Do2yVbSky", "addblock"),
        cc.Class({
            extends: cc.Component,
            properties: {
                exit: cc.Node,
                ok: cc.Node,
                list: cc.Node,
                listblock: cc.Node
            },
            onLoad: function() {
                this.responsive(),
                cc.find("black", this.node).on("touchend", this.onTouchEnd, this),
                this.exit.on("touchend", this.onTouchEnd, this),
                this.ok.on("touchend", this.onTouchEnd, this)
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (cc.find("board", this.node).scale = .9)
            },
            setval: function() {
                for (var t, e = o(this.list.children); !(t = e()).done; ) {
                    var n = t.value;
                    0 === n.x && (n.scale = 1.3)
                }
            },
            action: function(t) {
                this.min = t;
                for (var e, n = Math.pow(2, t + 6), i = this.listblock.getComponent("box"), s = o(this.list.children); !(e = s()).done; ) {
                    var c = e.value;
                    0 === c.x ? i.changeDialog(c, n) : i.changeDialog(c, 2 * n)
                }
            },
            playSound: function(t) {
                if ("on" === cc.sys.localStorage.getItem("sound")) {
                    var e = this.sound;
                    cc.resources.load("am_thanh/" + t, function(t, o) {
                        e = o,
                        cc.audioEngine.play(e, !1, 1)
                    })
                }
            },
            onTouchEnd: function() {
                this.playSound("button"),
                this.node.scale = 0,
                this.node.active = !1,
                this.node.parent.getChildByName("Manager").getComponent("Manager").showInter(),
                this.scheduleOnce(function() {
                    cc.find("Canvas/game/blockbox/block").getComponent("box").destroySmallestBlock()
                }, .5)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    box: [function(t, e) {
        "use strict";
        function o(t, e) {
            var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (o)
                return (o = o.call(t)).next.bind(o);
            if (Array.isArray(t) || (o = n(t)) || e && t && "number" == typeof t.length) {
                o && (t = o);
                var i = 0;
                return function() {
                    return i >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[i++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function n(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return i(t, e);
                var o = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === o && t.constructor && (o = t.constructor.name),
                "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? i(t, e) : void 0
            }
        }
        function i(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var o = 0, n = new Array(e); o < e; o++)
                n[o] = t[o];
            return n
        }
        cc._RF.push(e, "76807TgDgtNBrNG02epOjhH", "box");
        var s = t("data");
        cc.Class({
            name: "Sprites",
            properties: {
                name: "",
                sp: cc.SpriteFrame
            }
        }),
        cc.Class({
            extends: cc.Component,
            properties: {
                coin: cc.Prefab,
                game: cc.Node,
                prefab: cc.Prefab,
                blackGround: cc.Node,
                highestblock: cc.Node,
                maplist: cc.Node,
                nextBlock: cc.Node,
                coinCount: cc.Node,
                newblock: cc.Node,
                eliminated: cc.Node,
                bestScore: cc.Label,
                tutorial: cc.Node,
                theme1: {
                    default: [],
                    type: cc.SpriteFrame
                },
                theme2: {
                    default: [],
                    type: cc.SpriteFrame
                },
                theme3: {
                    default: [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function() {
                this.highestNum = 128,
                this.curent = 0,
                this.myPool || this.onPool()
            },
            changeTheme: function() {
                var t = this
                  , e = cc.sys.localStorage.getItem("theme");
                if (e) {
                    for (var o = 0; o < this.row; o++)
                        for (var n = function(n) {
                            var i = t.arr[o][n];
                            cc.resources.load(e + "/" + t.arr[o][n].name, cc.SpriteFrame, function(t, e) {
                                i.getComponent(cc.Sprite).spriteFrame = e
                            })
                        }, i = 0; i < this.column; i++)
                            n(i);
                    var s = this.nextBlock
                      , c = this.highestblock;
                    cc.resources.load(e + "/" + s.name, cc.SpriteFrame, function(t, e) {
                        s.getComponent(cc.Sprite).spriteFrame = e
                    }),
                    cc.resources.load(e + "/" + c.name, cc.SpriteFrame, function(t, e) {
                        c.getComponent(cc.Sprite).spriteFrame = e
                    }),
                    this.listblock = "theme1" === e ? this.theme1 : "theme2" === e ? this.theme2 : this.theme3
                }
            },
            onPool: function() {
                this.myPool = new cc.NodePool("Block");
                for (var t = 0; t < 50; t++) {
                    var e = cc.instantiate(this.prefab);
                    this.myPool.put(e)
                }
                this.coinPool = new cc.NodePool("coin");
                for (var o = 0; o < 5; o++) {
                    var n = cc.instantiate(this.coin);
                    this.coinPool.put(n)
                }
            },
            getMap: function(t) {
                var e, n = null;
                if (t)
                    n = t;
                else
                    for (var i, c = o(this.maplist.children); !(i = c()).done; ) {
                        var a = i.value;
                        0 === a.x && (n = a.name)
                    }
                for (var h, r = o(s); !(h = r()).done; ) {
                    var l = h.value;
                    l.map === n && (this.row = l.row,
                    this.column = l.column,
                    this.distance = l.distance,
                    this.xPos = l.xPos,
                    this.yPos = l.yPos,
                    e = l.map)
                }
                this.best = parseInt(cc.sys.localStorage.getItem("best_" + this.column + "x" + this.row)) || 2048,
                this.mileStone = 2 * this.best,
                this.minNum = parseInt(cc.sys.localStorage.getItem("minNum_" + this.column + "x" + this.row)) || 0,
                this.maxNum = this.minNum + 6,
                this.game.getComponent("Main").data(this.xPos, this.yPos, this.distance, e),
                this.spawnBlock()
            },
            spawnBlock: function() {
                this.arr = [];
                for (var t = 0; t < this.row; ++t) {
                    this.arr[t] = [];
                    for (var e = 0; e < this.column; ++e) {
                        var o = this.creatBlock();
                        o.x = this.yPos + e * this.distance,
                        o.y = this.xPos - t * this.distance,
                        this.spawnRandomCoin(o),
                        o.i = t,
                        o.j = e,
                        this.arr[t][e] = o
                    }
                }
                this.column >= 6 ? this.node.scale = .8 : this.node.scale = .95;
                for (var n = 0, i = this.highestNum; i > 2; i /= 2)
                    ++n;
                this.nextBlock.getComponent(cc.Sprite).spriteFrame = this.listblock[n],
                this.nextNum = parseInt(cc.sys.localStorage.getItem("nextBlock_" + this.column + "x" + this.row)) || 128,
                cc.find("Canvas/game/header/transcript/frame_bg/score").getComponent(cc.Label).string = cc.sys.localStorage.getItem("currentScore_" + this.column + "x" + this.row) || 0,
                this.curent = 0
            },
            spawnRandomCoin: function(t) {
                var e = null;
                Math.floor(101 * Math.random()) + 1 <= 2 && (e = this.coinPool.size() > 0 ? this.coinPool.get() : cc.instantiate(this.coin)),
                e && (t.addChild(e),
                e.x = -30,
                e.y = -25,
                e.getComponent(dragonBones.ArmatureDisplay).armatureName = "coin",
                e.getComponent(dragonBones.ArmatureDisplay).playAnimation("a"),
                e.scale = .7,
                e.angle = 0)
            },
            spawnCoin: function(t) {
                var e = null;
                return e = this.coinPool.size() > 0 ? this.coinPool.get() : cc.instantiate(this.coin),
                t.addChild(e),
                e.x = 0,
                e.y = 0,
                e.getComponent(dragonBones.ArmatureDisplay).armatureName = "fly",
                e.getComponent(dragonBones.ArmatureDisplay).playAnimation("a"),
                e.scale = .7,
                e.angle = 0,
                e
            },
            destroyBlockTut: function() {
                for (var t = this.node.children.length - 1; t >= 0; t--)
                    this.myPool.put(this.node.children[t])
            },
            spawnTutBlock: function(t) {
                "tut1" === t.name ? (this.creatTuTBlock(t, 0, -65, 0),
                this.creatTuTBlock(t, 0, 65, 0)) : "tut2" === t.name ? (this.creatTuTBlock(t, 1, 0, 120),
                this.creatTuTBlock(t, 1, 0, 0),
                this.creatTuTBlock(t, 2, 0, -120)) : "tut3" === t.name && (this.creatTuTBlock(t, 1, -168, 176),
                this.creatTuTBlock(t, 1, -168, 65),
                this.creatTuTBlock(t, 2, -57, 65),
                this.creatTuTBlock(t, 3, -57, -46),
                this.creatTuTBlock(t, 3, 54, -157),
                this.creatTuTBlock(t, 4, 165, -157),
                this.creatTuTBlock(t, 5, 165, -46))
            },
            creatTuTBlock: function(t, e, o, n) {
                var i = null;
                i = this.myPool.size() > 0 ? this.myPool.get() : cc.instantiate(this.prefab),
                this.node.addChild(i),
                i.getComponent(cc.Sprite).spriteFrame = this.listblock[e],
                i.name = Math.pow(2, e + 1).toString(),
                i.value = parseInt(i.name),
                i.x = t.x + o,
                i.y = t.y + n
            },
            creatBlock: function(t) {
                var e = null;
                e = this.myPool.size() > 0 ? this.myPool.get() : cc.instantiate(this.prefab),
                this.node.addChild(e),
                e.scale = 1;
                var o = cc.sys.localStorage.getItem("arr_" + this.column + "x" + this.row);
                if (!o || t) {
                    var n = Math.floor(Math.random() * (this.maxNum - this.minNum)) + this.minNum;
                    e.getComponent(cc.Sprite).spriteFrame = this.listblock[n],
                    e.name = Math.pow(2, n + 1).toString(),
                    e.value = parseInt(e.getComponent(cc.Sprite).name)
                } else if (void 0 !== o && !t) {
                    o = o.split(",");
                    var i = parseInt(o[this.curent]);
                    i >= this.highestNum && (this.highestNum = 2 * i);
                    for (var s = 0, c = i; c > 2; c /= 2)
                        ++s;
                    e.getComponent(cc.Sprite).spriteFrame = this.listblock[s],
                    e.name = Math.pow(2, s + 1).toString(),
                    e.value = parseInt(e.getComponent(cc.Sprite).name),
                    this.curent++
                }
                return t && this.newBlock(e, t),
                e
            },
            changeDialog: function(t, e) {
                t.name = e.toString();
                for (var o = 0; e > 2; e /= 2)
                    o++;
                t.getComponent(cc.Sprite).spriteFrame = this.listblock[o]
            },
            newBlock: function(t, e) {
                for (var n, i = this.xPos + 36, s = o(this.node.children.filter(function(t) {
                    if (t.x === e.x)
                        return t
                }, this)); !(n = s()).done; ) {
                    var c = n.value;
                    i < c.y && (i = c.y)
                }
                t.y = i + this.distance,
                t.x = e.x,
                this.spawnRandomCoin(t)
            },
            resetListBlock: function(t) {
                for (var e = 0; e < this.row; e++)
                    for (var o = 0; o < this.column; o++)
                        this.arr[e][o].children && this.coinPool.put(this.arr[e][o].children[0]),
                        this.destroyBlock(this.arr[e][o]);
                t && (this.setData(),
                this.onLoad())
            },
            setData: function() {
                cc.sys.localStorage.removeItem("best_" + this.column + "x" + this.row),
                cc.sys.localStorage.removeItem("minNum_" + this.column + "x" + this.row);
                var t = parseInt(this.nextBlock.getComponent(cc.Sprite).spriteFrame.name) / 2;
                this.nextBlock.getComponent(cc.Sprite).spriteFrame = this.listblock[6],
                cc.sys.localStorage.setItem("bestscore_" + this.column + "x" + this.row, this.bestScore.string),
                this.column && this.row && cc.sys.localStorage.removeItem("currentScore_" + this.column + "x" + this.row),
                (t > parseInt(cc.sys.localStorage.getItem("highestblock_" + this.column + "x" + this.row)) || !cc.sys.localStorage.getItem("highestblock_" + this.column + "x" + this.row)) && cc.sys.localStorage.setItem("highestblock_" + this.column + "x" + this.row, t),
                cc.sys.localStorage.setItem("nextBlock_" + this.column + "x" + this.row, 128),
                cc.sys.localStorage.removeItem("arr_" + this.column + "x" + this.row)
            },
            destroyBlock: function(t) {
                0 !== t.children.length && this.coinAnimation(t, 10),
                this.tutorial.active || (this.arr[t.i][t.j] = null),
                this.myPool.put(t)
            },
            coinAnimation: function(t, e) {
                var o = t.children[0];
                o.removeFromParent(),
                this.game.addChild(o),
                o.x = t.x - 30,
                o.y = t.y - 25,
                o.scale = 1,
                o.getComponent(dragonBones.ArmatureDisplay).armatureName = "coin_rotate",
                o.getComponent(dragonBones.ArmatureDisplay).playAnimation("a");
                var n = this.game.getChildByName("destination");
                cc.tween(o).parallel(cc.tween().bezierTo(2, cc.v2(o.x, o.y), cc.v2(-700, 800), cc.v2(n.x, n.y)), cc.tween().by(2, {
                    angle: -Math.atan((n.x - o.x) / (n.y - o.y)) / Math.PI * 180
                })).start(),
                this.scheduleOnce(function() {
                    this.coinPool.put(o.children[0]),
                    o.getComponent(dragonBones.ArmatureDisplay).armatureName = "cong_coin",
                    o.getComponent(dragonBones.ArmatureDisplay).playAnimation("a", 1),
                    cc.tween(this.coinCount).by(.2, {
                        scale: .2
                    }).to(.2, {
                        scale: 1
                    }).start()
                }, 2),
                this.scheduleOnce(function() {
                    this.game.getComponent("Main").updateDiamond(e)
                }, 2.1),
                this.scheduleOnce(function() {
                    this.coinPool.put(o.children[0]),
                    this.coinPool.put(o)
                }, 3.1)
            },
            changeBlock: function(t, e) {
                var o = this;
                if (t.getComponent(cc.Sprite).spriteFrame = this.listblock[e],
                t.name = Math.pow(2, e + 1).toString(),
                t.value = Math.pow(2, e + 1),
                !this.tutorial.active) {
                    if (t.children[0] && this.coinAnimation(t, 10),
                    !this.listblock[e])
                        return this.creatBlock(t),
                        void this.destroyBlock(t);
                    if (this.nextNum <= t.value && (t.value >= 2048 && (this.game.parent.getChildByName("unlock_map").isOn = !0),
                    this.nextNum = 2 * t.value,
                    this.nextBlock.getComponent(cc.Sprite).spriteFrame = this.listblock[e + 1],
                    cc.sys.localStorage.setItem("nextBlock_" + this.column + "x" + this.row, this.nextNum),
                    this.scheduleOnce(function() {
                        o.game.parent.getChildByName("hight_score_ske").isOn || o.game.parent.getChildByName("showcombo").children[0].isOn ? o.newblock.isOn = !0 : o.showNewBlock()
                    }, .5)),
                    t.value > this.best) {
                        for (var n = -1, i = t.value / this.best; i >= 1; i /= 2)
                            n++;
                        this.maxNum += n,
                        this.minNum += n,
                        this.best = 2 * t.value
                    }
                }
            },
            showNewBlock: function() {
                this.newblock.active = !0,
                this.newblock.getComponent("newblock").init(parseInt(this.nextNum)),
                this.game.getComponent("Main").playAnotherSound("new_block")
            },
            showNewMap: function() {
                "false" !== cc.sys.localStorage.getItem("lockMap_6x8") && this.column + "x" + this.row == "5x8" && this.nextNum >= 4096 ? (cc.sys.localStorage.setItem("lockMap_6x8", "false"),
                this.showDialogNewMap()) : "false" !== cc.sys.localStorage.getItem("lockMap_5x7") && this.column + "x" + this.row == "6x8" && this.nextNum >= 4096 ? (cc.sys.localStorage.setItem("lockMap_5x7", "false"),
                this.showDialogNewMap()) : "false" !== cc.sys.localStorage.getItem("lockMap_4x6") && this.column + "x" + this.row == "5x7" && this.nextNum >= 4096 && (cc.sys.localStorage.setItem("lockMap_4x6", "false"),
                this.showDialogNewMap())
            },
            showDialogNewMap: function() {
                this.game.parent.getChildByName("unlock_map").isOn = !1;
                var t = this.game.parent.getChildByName("unlock_map");
                t.active = !0,
                t.getComponent("unlock_map").loadMap(this.column + "x" + this.row),
                this.actionDialog(t)
            },
            saveGame: function() {
                for (var t = [], e = 0; e < this.row; ++e)
                    for (var o = 0; o < this.column; ++o)
                        t.push(this.arr[e][o].value);
                cc.sys.localStorage.setItem("currentScore_" + this.column + "x" + this.row, cc.find("Canvas/game/header/transcript/frame_bg/score").getComponent(cc.Label).string),
                cc.sys.localStorage.setItem("arr_" + this.column + "x" + this.row, t)
            },
            checkGame: function() {
                var t = this;
                this.saveGame();
                for (var e = 0, o = 0; o < this.row; o++)
                    for (var n = 0; n < this.column && (n < this.column - 1 && (0 === o && this.arr[o][n].value != this.arr[o][n + 1].value && this.arr[o][n].value != this.arr[o + 1][n].value && this.arr[o][n].value != this.arr[o + 1][n + 1].value || this.row - 1 > o && o > 0 && this.arr[o][n].value != this.arr[o][n + 1].value && this.arr[o][n].value != this.arr[o + 1][n].value && this.arr[o][n].value != this.arr[o + 1][n + 1].value && this.arr[o][n].value != this.arr[o - 1][n + 1].value || o === this.row - 1 && this.arr[o][n].value != this.arr[o][n + 1].value && this.arr[o][n].value != this.arr[o - 1][n + 1].value) || n === this.column - 1 && o < this.row - 1 && this.arr[o][n].value != this.arr[o + 1][n].value); n++)
                        ++e;
                e === this.column * this.row - 1 ? this.gameOver() : this.best >= this.mileStone && this.scheduleOnce(function() {
                    t.newblock.active || t.game.parent.getChildByName("hight_score_ske").isOn || t.game.parent.getChildByName("showcombo").children[0].isOn ? t.eliminated.isOn = !0 : t.showEliminated()
                }, .5)
            },
            gameOver: function() {
                if (cc.sys.localStorage.getItem("bestscore_" + this.column + "x" + this.row) > parseInt(this.bestScore.string)) {
                    cc.sys.localStorage.setItem("bestscore_" + this.column + "x" + this.row, this.bestScore.string);
                    var t = parseInt(this.nextBlock.getComponent(cc.Sprite).spriteFrame.name) / 2;
                    (parseInt(cc.sys.localStorage.getItem("highestblock_" + this.column + "x" + this.row)) < t || !cc.sys.localStorage.getItem("highestblock_" + this.column + "x" + this.row)) && cc.sys.localStorage.setItem("highestblock_" + this.column + "x" + this.row, t)
                }
                this.game.parent.getChildByName("Manager").getComponent("Manager").showInter(),
                this.game.parent.getChildByName("gameoverFB").active = !0,
                this.game.parent.getChildByName("gameoverFB").getComponent("gameoverFB").init(this.column, this.row)
            },
            getHighestBlock: function(t) {
                for (var e = 0; t > 2; t /= 2)
                    e++;
                var o = cc.sys.localStorage.getItem("theme");
                "theme1" === o ? this.listblock = this.theme1 : "theme2" === o ? this.listblock = this.theme2 : "theme3" === o ? this.listblock = this.theme3 : (this.listblock = this.theme1,
                cc.sys.localStorage.setItem("theme", "theme1")),
                this.highestblock.getComponent(cc.Sprite).spriteFrame = this.listblock[e],
                this.highestblock.name = Math.pow(2, e + 1).toString(),
                this.highestblock.value = Math.pow(2, e + 1).toString()
            },
            filterNull: function(t) {
                return t.filter(function(t) {
                    return null != t
                })
            },
            slide: function(t) {
                var e = this.filterNull(t);
                for (this.count = this.row - e.length; e.length < this.row; )
                    e.push(null);
                return e
            },
            move: function() {
                for (var t = this, e = this.node.children.filter(function(t) {
                    return t.y > this.xPos
                }, this), n = 0; n < this.column; n++) {
                    for (var i = [], s = this.row - 1; s >= 0; s--)
                        i.push(this.arr[s][n]);
                    (i = this.slide(i)).reverse();
                    for (var c = 0; c < this.row; c++)
                        if (this.arr[c][n] = i[c],
                        this.arr[c][n] && (this.xPos - this.arr[c][n].y) / this.distance !== c) {
                            var a = this.arr[c][n].y - (this.xPos - this.distance * c);
                            cc.tween(this.arr[c][n]).to((this.arr[c][n].y - (this.xPos - this.distance * c)) / this.distance * .17, {
                                y: this.xPos - this.distance * c
                            }, {
                                easing: "cubicIn"
                            }).by(.1, {
                                y: a / 10
                            }).by(.1, {
                                y: -a / 10
                            }).by(.03, {
                                y: a / 30
                            }).by(.03, {
                                y: -a / 30
                            }).start(),
                            this.arr[c][n].i = c,
                            this.arr[c][n].j = n
                        }
                    for (var h = 0, r = 0; r < this.row; r++)
                        this.arr[r][n] || (this.arr[h][n] = null,
                        h += 1);
                    if (0 !== h)
                        for (var l, u = o(e); !(l = u()).done; ) {
                            var d = l.value;
                            if (d.y > this.xPos && (d.x - this.yPos) / this.distance == n) {
                                var m = d.y - 36 - (d.y - 36 - this.distance * h);
                                cc.tween(d).by(.17 * this.count, {
                                    y: -36 - this.distance * h
                                }, {
                                    easing: "cubicIn"
                                }).by(.1, {
                                    y: m / 10
                                }).by(.1, {
                                    y: -m / 10
                                }).by(.03, {
                                    y: m / 30
                                }).by(.03, {
                                    y: -m / 30
                                }).start(),
                                d.i = (this.xPos - (d.y - 36 - this.distance * h)) / this.distance,
                                d.j = (d.x - this.yPos) / this.distance,
                                this.arr[d.i][d.j] = d,
                                d.y === e[e.length - 1].y && d.value === e[e.length - 1].value && d.x === e[e.length - 1].x && this.scheduleOnce(function() {
                                    var e = t.game.getComponent("Main");
                                    e.resetTime(),
                                    e.activeEvent(),
                                    t.checkGame()
                                }, .17 * this.count + .26)
                            }
                        }
                }
            },
            actionDialog: function(t) {
                cc.tween(t).to(.5, {
                    scale: 1.2
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).call(this.game.getComponent("Main").playAnotherSound("eliminated"), this).start()
            },
            showEliminated: function() {
                this.eliminated.isOn = !1,
                this.eliminated.active = !0,
                cc.sys.localStorage.setItem("best_" + this.column + "x" + this.row, "" + this.best),
                cc.sys.localStorage.setItem("minNum_" + this.column + "x" + this.row, "" + this.minNum),
                this.eliminated.getComponent("eliminated").action(this.minNum),
                this.actionDialog(this.eliminated)
            },
            destroySmallestBlock: function() {
                for (var t = this, e = this.minNum, o = 0; o < this.row; ++o)
                    for (var n = 0; n < this.column; ++n)
                        this.arr[o][n].value <= Math.pow(2, e) && (this.creatBlock(this.arr[o][n]),
                        this.game.getComponent("Main").effect(this.arr[o][n], "effect1"),
                        this.destroyBlock(this.arr[o][n]));
                this.mileStone = 2 * this.best,
                this.scheduleOnce(function() {
                    t.move()
                }, .5)
            },
            suggestions: function() {
                var t = [];
                this.suggest = [];
                for (var e = 0; e < this.row; e++)
                    for (var n = 0; n < this.column; n++) {
                        for (var i, s = 0, c = o(this.node.children); !(i = c()).done; ) {
                            var a = i.value;
                            a.position.sub(this.arr[e][n].position).mag() <= this.distance * Math.sqrt(2) + 1 && a.value === this.arr[e][n].value && ++s
                        }
                        s >= 2 && t.push(this.arr[e][n])
                    }
                var h = Math.floor(Math.random() * t.length);
                this.suggest.push(t[h]),
                t[h] && this.sugArr(t[h]),
                this.game.getComponent("Main").getSuggestions(this.suggest)
            },
            sugArr: function(t) {
                for (var e, n = o(this.node.children); !(e = n()).done; ) {
                    var i = e.value;
                    i.position.sub(t.position).mag() <= this.distance * Math.sqrt(2) + 1 && i.value === t.value && (this.suggest.indexOf(i),
                    i !== t && -1 === this.suggest.indexOf(i) && (this.suggest.push(i),
                    this.sugArr(i)))
                }
            },
            change: function(t, e) {
                this.arr[t.i][t.j] = t,
                this.arr[e.i][e.j] = e
            },
            destroyCol: function(t) {
                this.blockAbove(t, 1),
                this.blockBelow(t, 1);
                var e = this.game.getComponent("Main");
                e.effect(this.arr[t.i][t.j], "effect2"),
                this.creatBlock(this.arr[t.i][t.j]),
                this.destroyBlock(this.arr[t.i][t.j]),
                this.scheduleOnce(function() {
                    this.move(),
                    this.scheduleOnce(function() {
                        e.button(),
                        e.init(),
                        e.desEffectPool(),
                        this.checkGame()
                    }, .17 * this.row + .26)
                }, 1)
            },
            blockAbove: function(t, e) {
                t.i - e >= 0 && this.scheduleOnce(function() {
                    this.game.getComponent("Main").effect(this.arr[t.i - e][t.j], "effect2"),
                    this.creatBlock(this.arr[t.i - e][t.j]),
                    this.destroyBlock(this.arr[t.i - e][t.j]),
                    ++e,
                    this.blockAbove(t, e)
                }, .13)
            },
            blockBelow: function(t, e) {
                t.i + e < this.row && this.scheduleOnce(function() {
                    this.game.getComponent("Main").effect(this.arr[t.i + e][t.j], "effect2"),
                    this.creatBlock(this.arr[t.i + e][t.j]),
                    this.destroyBlock(this.arr[t.i + e][t.j]),
                    ++e,
                    this.blockBelow(t, e)
                }, .13)
            },
            destroyRow: function(t) {
                this.leftBlock(t, 1),
                this.rightBlock(t, 1);
                var e = this.game.getComponent("Main");
                e.effect(this.arr[t.i][t.j], "effect2"),
                this.creatBlock(this.arr[t.i][t.j]),
                this.destroyBlock(this.arr[t.i][t.j]),
                this.scheduleOnce(function() {
                    this.move(),
                    this.scheduleOnce(function() {
                        e.button(),
                        e.init(),
                        e.desEffectPool(),
                        this.checkGame()
                    }, .17 + .26)
                }, 1)
            },
            leftBlock: function(t, e) {
                t.j - e >= 0 && this.scheduleOnce(function() {
                    this.game.getComponent("Main").effect(this.arr[t.i][t.j - e], "effect2"),
                    this.creatBlock(this.arr[t.i][t.j - e]),
                    this.destroyBlock(this.arr[t.i][t.j - e]),
                    ++e,
                    this.leftBlock(t, e)
                }, .13)
            },
            rightBlock: function(t, e) {
                t.j + e < this.column && this.scheduleOnce(function() {
                    this.game.getComponent("Main").effect(this.arr[t.i][t.j + e], "effect2"),
                    this.creatBlock(this.arr[t.i][t.j + e]),
                    this.destroyBlock(this.arr[t.i][t.j + e]),
                    ++e,
                    this.rightBlock(t, e)
                }, .13)
            },
            showResultBlock: function(t) {
                this.nextBlock.stopAllActions(),
                cc.find("header/emoji_ske", this.game).active = !1,
                this.nextBlock.active = !0;
                for (var e = 0, o = t; o > 2; o /= 2)
                    e++;
                this.nextBlock.scale = 0,
                this.nextBlock.getComponent(cc.Sprite).spriteFrame = this.listblock[e],
                cc.tween(this.nextBlock).to(.3, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            changeResultBlock: function(t) {
                for (var e = 0, o = t; o > 2; o /= 2)
                    e++;
                this.nextBlock.getComponent(cc.Sprite).spriteFrame = this.listblock[e]
            },
            rehibilitate: function() {
                for (var t = 0, e = parseInt(cc.sys.localStorage.getItem("nextBlock_" + this.column + "x" + this.row)) || 128; e > 2; e /= 2)
                    t++;
                this.nextBlock.getComponent(cc.Sprite).spriteFrame = this.listblock[t],
                this.nextBlock.active = !0,
                this.nextBlock.scale = 0,
                cc.tween(this.nextBlock).to(.3, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            }
        }),
        cc._RF.pop()
    }
    , {
        data: "data"
    }],
    continue: [function(t, e) {
        "use strict";
        function o(t, e) {
            var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (o)
                return (o = o.call(t)).next.bind(o);
            if (Array.isArray(t) || (o = n(t)) || e && t && "number" == typeof t.length) {
                o && (t = o);
                var i = 0;
                return function() {
                    return i >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[i++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function n(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return i(t, e);
                var o = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === o && t.constructor && (o = t.constructor.name),
                "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? i(t, e) : void 0
            }
        }
        function i(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var o = 0, n = new Array(e); o < e; o++)
                n[o] = t[o];
            return n
        }
        cc._RF.push(e, "7cac2PIC/pNMI4OICBBspQs", "continue"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ads: cc.Node,
                continueBtn: cc.Node,
                gameOver: cc.Node,
                gameOverFB: cc.Node
            },
            onLoad: function() {
                this.responsive(),
                this.ads.on("touchstart", this.onTouchStart, this),
                this.continueBtn.on("touchstart", this.onTouchStart, this),
                this.ads.on("touchend", this.onTouchEnd, this),
                this.continueBtn.on("touchend", this.onTouchEnd, this)
            },
            responsive: function() {
                if (cc.winSize.height / cc.winSize.width >= 2)
                    for (var t, e = o(this.node.children); !(t = e()).done; ) {
                        var n = t.value;
                        "black" !== n.name && (n.scale = .9)
                    }
            },
            onTouchStart: function(t) {
                cc.tween(t.target).to(.15, {
                    scale: 1.3
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            onTouchEnd: function(t) {
                var e = this.node.parent.getChildByName("game").getComponent("Main");
                "No,thanks" === t.target.name && (this.node.parent.getChildByName("Manager").getComponent("Manager").showInter(),
                this.node.active = !1,
                e.playAnotherSound("game_over"),
                this.gameOverFB.active = !0)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    data: [function(t, e) {
        "use strict";
        cc._RF.push(e, "185cb9zJU5BoJmgsNFzD1qN", "data"),
        e.exports = [{
            map: "4x6",
            column: 4,
            row: 6,
            xPos: 450,
            yPos: -221,
            distance: 150
        }, {
            map: "5x7",
            column: 5,
            row: 7,
            xPos: 450,
            yPos: -240,
            distance: 120
        }, {
            map: "5x8",
            column: 5,
            row: 8,
            xPos: 450,
            yPos: -240,
            distance: 120
        }, {
            map: "6x8",
            column: 6,
            row: 8,
            xPos: 450,
            yPos: -300,
            distance: 120
        }],
        cc._RF.pop()
    }
    , {}],
    eliminated: [function(t, e) {
        "use strict";
        function o(t, e) {
            var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (o)
                return (o = o.call(t)).next.bind(o);
            if (Array.isArray(t) || (o = n(t)) || e && t && "number" == typeof t.length) {
                o && (t = o);
                var i = 0;
                return function() {
                    return i >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[i++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function n(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return i(t, e);
                var o = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === o && t.constructor && (o = t.constructor.name),
                "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? i(t, e) : void 0
            }
        }
        function i(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var o = 0, n = new Array(e); o < e; o++)
                n[o] = t[o];
            return n
        }
        cc._RF.push(e, "ff535u0nkxP66v+EA6f4B3T", "eliminated"),
        cc.Class({
            extends: cc.Component,
            properties: {
                exit: cc.Node,
                ok: cc.Node,
                addblock: cc.Node,
                list: cc.Node,
                listblock: cc.Node
            },
            onLoad: function() {
                this.responsive(),
                this.exit.on("touchend", this.onTouchEnd, this),
                this.ok.on("touchend", this.onTouchEnd, this),
                cc.find("black", this.node).on("touchend", this.onTouchEnd, this)
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (cc.find("board", this.node).scale = .9)
            },
            setval: function() {
                for (var t, e = o(this.list.children); !(t = e()).done; ) {
                    var n = t.value;
                    0 === n.x && (n.scale = 1.3),
                    n.x <= 0 ? n.children[0].active = !0 : n.children[0].active = !1
                }
            },
            action: function(t) {
                var e = this.listblock.getComponent("box");
                this.min = t;
                for (var n, i = Math.pow(2, t), s = o(this.list.children); !(n = s()).done; ) {
                    var c = n.value;
                    0 === c.x ? e.changeDialog(c, i) : e.changeDialog(c, 2 * i)
                }
            },
            onTouchEnd: function() {
                this.node.scale = 0,
                this.node.active = !1,
                this.addblock.active = !0,
                cc.tween(this.addblock).to(.5, {
                    scale: 1.2
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).call(this.node.parent.getChildByName("game").getComponent("Main").playAnotherSound("add_block"), this).start(),
                this.node.parent.getChildByName("addblock").getComponent("addblock").action(this.min)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    gameoverFB: [function(t, e) {
        "use strict";
        cc._RF.push(e, "34624WlfpxFdp0UvhWPzU4n", "gameoverFB"),
        cc.Class({
            extends: cc.Component,
            properties: {
                exit: cc.Node,
                shareBtn: cc.Node,
                playWithFriend: cc.Node,
                home: cc.Node,
                game: cc.Node,
                blackGround: cc.Node,
                best: cc.Label,
                score: cc.Label
            },
            onLoad: function() {
                this.exit.on("touchend", this.onTouchEnd, this),
                this.shareBtn.on("touchend", this.onTouchEnd, this),
                this.playWithFriend.on("touchend", this.onTouchEnd, this),
                this.responsive()
            },
            init: function(t, e) {
                this.best.string = cc.sys.localStorage.getItem("bestscore_" + t + "x" + e),
                this.score.string = cc.sys.localStorage.getItem("currentScore_" + t + "x" + e)
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (cc.find("board", this.node).scale = .9)
            },
            onTouchStart: function(t) {
                cc.tween(t.target).to(.15, {
                    scale: 1.3
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            action: function(t) {
                t.scale = 0,
                cc.tween(t).to(.5, {
                    scale: 1.2
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            onTouchEnd: function(t) {
                var e = this.game.getComponent("Main")
                  , o = this.node.parent.getChildByName("Manager").getComponent("Manager");
                "x" === t.target.name ? (e.playAnotherSound("button"),
                this.game.getComponent("Main").reset(),
                cc.director.loadScene("game")) : "share" === t.target.name ? (e.playAnotherSound("button"),
                o.shareGame(parseInt(this.score.string))) : "play_friend" === t.target.name && (e.playAnotherSound("button"),
                o.showFriendList(parseInt(this.score.string)))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    gameover: [function(t, e) {
        "use strict";
        cc._RF.push(e, "3369c3BRrtIFoyQwdfqSrcR", "gameover"),
        cc.Class({
            extends: cc.Component,
            properties: {
                exit: cc.Node,
                adsBtn: cc.Node,
                continueBtn: cc.Node,
                home: cc.Node,
                game: cc.Node,
                blackGround: cc.Node,
                best: cc.Label,
                score: cc.Label
            },
            onLoad: function() {
                this.exit.on("touchend", this.onTouchEnd, this),
                this.continueBtn.on("touchend", this.onTouchEnd, this),
                this.adsBtn.on("touchend", this.onTouchEnd, this),
                this.responsive()
            },
            init: function(t, e) {
                this.best.string = cc.sys.localStorage.getItem("bestscore_" + t + "x" + e),
                this.score.string = cc.sys.localStorage.getItem("currentScore_" + t + "x" + e)
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (cc.find("board", this.node).scale = .9)
            },
            onTouchStart: function(t) {
                cc.tween(t.target).to(.15, {
                    scale: 1.3
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            action: function(t) {
                cc.tween(t).to(.5, {
                    scale: 1.2
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            onTouchEnd: function(t) {
                var e = this.game.getComponent("Main");
                "x" === t.target.name ? (e.playAnotherSound("button"),
                this.game.getComponent("Main").reset(),
                cc.director.loadScene("game")) : "continue" === t.target.name ? (e.playAnotherSound("button"),
                this.game.getComponent("Main").reset(),
                this.node.active = !1,
                this.game.getComponent("Main").onLoad()) : "claim x2" === t.target.name && cc.log(1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    home: [function(t, e) {
        "use strict";
        var o;
        function n(t, e) {
            var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (o)
                return (o = o.call(t)).next.bind(o);
            if (Array.isArray(t) || (o = i(t)) || e && t && "number" == typeof t.length) {
                o && (t = o);
                var n = 0;
                return function() {
                    return n >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[n++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function i(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return s(t, e);
                var o = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === o && t.constructor && (o = t.constructor.name),
                "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? s(t, e) : void 0
            }
        }
        function s(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var o = 0, n = new Array(e); o < e; o++)
                n[o] = t[o];
            return n
        }
        cc._RF.push(e, "632ea/pUQtFnoRknKHA79ra", "home"),
        cc.Class(((o = {
            extends: cc.Component,
            properties: {
                gamename: cc.Node,
                setting: cc.Node,
                game: cc.Node,
                blackGround: cc.Node,
                settingBtn: cc.Node,
                playBtn: cc.Node,
                bwf: cc.Node,
                listblock: cc.Node,
                diamond: cc.Label,
                leftBtn: cc.Node,
                rightBtn: cc.Node,
                maps: cc.Node,
                bestscore: cc.Label,
                lock: cc.Node,
                hightSke: cc.Node,
                note: cc.Label
            },
            onLoad: function() {
                this.responsive(),
                this.setSound(),
                this.diamond.string = (cc.sys.localStorage.getItem("diamond") || 0).toString(),
                this.maplist(),
                this.loadBlock(0),
                this.onPlay(),
                this.animation()
                this.node.getChildByName("header").getChildByName("frameavatar").active = !1;
                this.game.getChildByName("header").getChildByName("frameavatar").active = !1;
            },
            start: function() {
                this.node.parent.getChildByName("Manager").getComponent("Manager").showInter()
            },
            updateDiamond: function() {
                this.diamond.string = (cc.sys.localStorage.getItem("diamond") || 0).toString()
            },
            setSound: function() {
                cc.sys.localStorage.getItem("sound") || cc.sys.localStorage.setItem("sound", "on")
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (cc.find("header", this.node).scale = .9,
                cc.find("body", this.node).scale = .9)
            },
            btnAnim: function(t) {
                cc.tween(t).repeatForever(cc.tween().to(.5, {
                    opacity: 120
                }).to(.5, {
                    opacity: 255
                })).start()
            },
            animation: function() {
                this.btnAnim(this.leftBtn),
                this.btnAnim(this.rightBtn),
                this.schedule(function() {
                    cc.tween(this.playBtn).to(.2, {
                        scale: 1.2
                    }).by(.1, {
                        angle: -5
                    }).by(.1, {
                        angle: 10
                    }).by(.1, {
                        angle: -10
                    }).by(.1, {
                        angle: 10
                    }).by(.1, {
                        angle: -5
                    }).to(.2, {
                        scale: 1
                    }).start()
                }, 4)
            },
            maplist: function() {
                for (var t, e = n(this.maps.children); !(t = e()).done; ) {
                    var o = t.value;
                    0 == o.x && (o.scale = 1)
                }
            },
            loadBlock: function(t) {
                for (var e, o = this, i = n(this.maps.children); !(e = i()).done; ) {
                    var s = e.value;
                    s.x + t === 0 && function() {
                        var t = cc.find("body/level", o.node)
                          , e = void 0;
                        if ("5x8" === s.name ? (o.leftBtn.active = !1,
                        e = "easy") : "6x8" === s.name ? (o.leftBtn.active = !0,
                        o.rightBtn.active = !0,
                        e = "normal") : "5x7" === s.name ? (o.leftBtn.active = !0,
                        o.rightBtn.active = !0,
                        e = "hard") : "4x6" === s.name && (o.rightBtn.active = !1,
                        e = "master"),
                        cc.resources.load("level/" + e, cc.SpriteFrame, function(e, o) {
                            t.getComponent(cc.Sprite).spriteFrame = o
                        }),
                        "false" != cc.sys.localStorage.getItem("lockMap_6x8") && "6x8" === s.name || "false" != cc.sys.localStorage.getItem("lockMap_5x7") && "5x7" === s.name || "false" != cc.sys.localStorage.getItem("lockMap_4x6") && "4x6" === s.name)
                            "6x8" === s.name ? o.note.string = "TO UNLOCK\nReach 2048\nin map 5x8" : "5x7" === s.name ? o.note.string = "TO UNLOCK\nReach 2048\nin map 6x8" : "4x6" === s.name && (o.note.string = "TO UNLOCK\nReach 2048\nin map 5x7"),
                            o.bestscore.string = 0,
                            o.lock.active = !0,
                            o.hightSke.active = !1;
                        else {
                            o.lock.active = !1,
                            o.hightSke.active = !0,
                            o.note.string = "";
                            var n = parseInt(cc.sys.localStorage.getItem("highestblock_" + s.name));
                            n < parseInt(cc.sys.localStorage.getItem("nextBlock_" + s.name)) && (n = parseInt(cc.sys.localStorage.getItem("nextBlock_" + s.name))),
                            o.listblock.getComponent("box").getHighestBlock(n),
                            parseInt(cc.sys.localStorage.getItem("currentScore_" + s.name)) > parseInt(cc.sys.localStorage.getItem("bestscore_" + s.name)) ? o.bestscore.string = (cc.sys.localStorage.getItem("currentScore_" + s.name) || 0).toString() : o.bestscore.string = (cc.sys.localStorage.getItem("bestscore_" + s.name) || 0).toString()
                        }
                    }()
                }
            },
            onPlay: function() {
                this.playBtn.on("touchstart", this.onTouchStart, this),
                this.settingBtn.on("touchstart", this.onTouchStart, this),
                this.bwf.on("touchstart", this.onTouchStart, this),
                this.rightBtn.on("touchstart", this.onTouchStart, this),
                this.leftBtn.on("touchstart", this.onTouchStart, this),
                this.playBtn.on("touchend", this.onTouchEnd, this),
                this.settingBtn.on("touchend", this.onTouchEnd, this),
                this.bwf.on("touchend", this.onTouchEnd, this),
                this.rightBtn.on("touchend", this.onTouchEnd, this),
                this.leftBtn.on("touchend", this.onTouchEnd, this)
            },
            onDestroy: function() {
                this.node.off("touchstart", this.onTouchStart, this),
                this.playBtn.off("touchend", this.onTouchEnd, this),
                this.settingBtn.off("touchend", this.onTouchEnd, this),
                this.bwf.off("touchend", this.onTouchEnd, this),
                this.rightBtn.off("touchend", this.onTouchEnd, this),
                this.leftBtn.off("touchend", this.onTouchEnd, this)
            },
            onTouchStart: function(t) {
                cc.tween(t.target).to(.15, {
                    scale: 1.3
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            action: function(t) {
                cc.tween(t).to(.5, {
                    scale: 1.2
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            onTouchEnd: function(t) {
                if ("play" !== t.target.name || this.lock.active)
                    "play_friend" === t.target.name ? (this.game.getComponent("Main").playAnotherSound("button"),
                    this.node.parent.getChildByName("Manager").getComponent("Manager").showFriendList()) : "setting" === t.target.name ? (this.game.getComponent("Main").playAnotherSound("button"),
                    this.setting.active = !0,
                    this.blackGround.active = !0,
                    this.onDestroy(),
                    this.action(this.setting)) : "leftbtn" === t.target.name ? (this.game.getComponent("Main").playAnotherSound("button"),
                    this.rightBtn.off("touchend", this.onTouchEnd, this),
                    this.leftBtn.off("touchend", this.onTouchEnd, this),
                    this.moveLeft(),
                    this.scheduleOnce(function() {
                        this.rightBtn.on("touchend", this.onTouchEnd, this),
                        this.leftBtn.on("touchend", this.onTouchEnd, this)
                    }, .2)) : "rightbtn" === t.target.name && (this.game.getComponent("Main").playAnotherSound("button"),
                    this.rightBtn.off("touchend", this.onTouchEnd, this),
                    this.leftBtn.off("touchend", this.onTouchEnd, this),
                    this.moveRight(),
                    this.scheduleOnce(function() {
                        this.rightBtn.on("touchend", this.onTouchEnd, this),
                        this.leftBtn.on("touchend", this.onTouchEnd, this)
                    }, .2));
                else {
                    this.game.active = !0,
                    this.node.active = !1,
                    this.game.getComponent("Main").playAnotherSound("button");
                    for (var e, o = n(this.maps.children); !(e = o()).done; ) {
                        var i = e.value;
                        0 === i.x && i.name
                    }
                    cc.sys.localStorage.getItem("old") && "true" === cc.sys.localStorage.getItem("old") ? (this.listblock.getComponent("box").resetListBlock(),
                    this.listblock.getComponent("box").getMap()) : (this.game.getChildByName("tutorial").active = !0,
                    this.game.getChildByName("header").active = !1,
                    this.game.getChildByName("footer").active = !1,
                    this.listblock.getComponent("box").resetListBlock())
                }
            },
            moveLeft: function() {
                for (var t = this.maps.children.length - 1; t >= 0; t--)
                    0 !== this.maps.children[0].x && (cc.tween(this.maps.children[t]).by(.2, {
                        x: 290
                    }).start(),
                    this.maps.children[t].x + 290 === 0 ? (cc.tween(this.maps.children[t]).to(.2, {
                        scale: 1
                    }).start(),
                    this.loadBlock(290)) : 1 === this.maps.children[t].scale && cc.tween(this.maps.children[t]).to(.2, {
                        scale: .7
                    }).start())
            },
            moveRight: function() {
                for (var t = this.maps.children.length - 1; t >= 0; t--)
                    0 !== this.maps.children[3].x && (cc.tween(this.maps.children[t]).by(.2, {
                        x: -290
                    }).start(),
                    this.maps.children[t].x - 290 == 0 ? (cc.tween(this.maps.children[t]).to(.2, {
                        scale: 1
                    }).start(),
                    this.loadBlock(-290)) : 1 === this.maps.children[t].scale && cc.tween(this.maps.children[t]).to(.2, {
                        scale: .7
                    }).start())
            }
        }).start = function() {
            this.gamename.getComponent(dragonBones.ArmatureDisplay).playAnimation("a"),
            this.playBtn.getComponent(dragonBones.ArmatureDisplay).playAnimation("a")
        }
        ,
        o)),
        cc._RF.pop()
    }
    , {}],
    loading: [function(t, e) {
        "use strict";
        function o(t, e) {
            var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (o)
                return (o = o.call(t)).next.bind(o);
            if (Array.isArray(t) || (o = n(t)) || e && t && "number" == typeof t.length) {
                o && (t = o);
                var i = 0;
                return function() {
                    return i >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[i++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function n(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return i(t, e);
                var o = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === o && t.constructor && (o = t.constructor.name),
                "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? i(t, e) : void 0
            }
        }
        function i(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var o = 0, n = new Array(e); o < e; o++)
                n[o] = t[o];
            return n
        }
        cc._RF.push(e, "53fd5JK6cZF26BB9xzgPsLd", "loading"),
        cc.Class({
            extends: cc.Component,
            properties: {
                progressbar: cc.ProgressBar,
                home: cc.Node
            },
            onLoad: function() {
                var t = this;
                this.responsive(),
                cc.tween(this.progressbar).by(4.9, {
                    progress: 1
                }).start(),
                this.scheduleOnce(function() {
                    t.node.active = !1,
                    t.home.active = !0
                }, 5)
            },
            responsive: function() {
                if (cc.winSize.height / cc.winSize.width >= 2)
                    for (var t, e = o(this.node.children); !(t = e()).done; )
                        t.value.scale = .9
            }
        }),
        cc._RF.pop()
    }
    , {}],
    more_coin: [function(t, e) {
        "use strict";
        cc._RF.push(e, "5b577m+1zFDQoc86ILBHGsl", "more_coin"),
        cc.Class({
            extends: cc.Component,
            properties: {
                exit: cc.Node,
                free: cc.Node,
                listblock: cc.Node
            },
            onLoad: function() {
                this.responsive(),
                this.exit.on("touchend", this.onTouchEnd, this),
                this.free.on("touchend", this.onTouchEnd, this),
                this.node.getChildByName("black").on("touchend", this.onTouchEnd, this)
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (cc.find("board", this.node).scale = .9)
            },
            onTouchEnd: function(t) {
                "x" === t.target.name || "black" === t.target.name ? this.offThisDialog() : "free" === t.target.name && (this.node.parent.getChildByName("Manager").getComponent("Manager").loadRewardAds(),
                this.offThisDialog())
                if ("free" === t.target.name) {
                    window.cy_Sdk && window.cy_Sdk.ga(window.cy_Sdk.REWARD_CLICK, "Free Coins");
                }
            },
            spawnCoin: function() {
                this.listblock.getComponent("box").spawnCoin(this.coin).getComponent(dragonBones.ArmatureDisplay).armatureName = "coin",
                this.listblock.getComponent("box").coinAnimation(this.coin, 100)
            },
            offThisDialog: function() {
                var t = this;
                cc.tween(this.node).to(.3, {
                    scale: 0
                }, {
                    easing: "quadInOut"
                }).start(),
                this.scheduleOnce(function() {
                    t.node.active = !1
                }, .3)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    newblock: [function(t, e) {
        "use strict";
        cc._RF.push(e, "0fd88PfyRBFGITpmGmBAdsL", "newblock"),
        cc.Class({
            extends: cc.Component,
            properties: {
                rewardBtn: cc.Node,
                continue: cc.Node,
                list: cc.Node,
                listblock: cc.Node,
                game: cc.Node,
                eliminated: cc.Node,
                coin: cc.Node,
                notification: cc.Node
            },
            onLoad: function() {
                window.cy_Sdk && window.cy_Sdk.adShow();
                HUHU_showInterstitialAd();
                this.responsive(),
                this.rewardBtn.on("touchend", this.onTouchEnd, this),
                this.continue.on("touchend", this.onTouchEnd, this)
            },
            init: function(t) {
                var e = this.listblock.getComponent("box");
                e.changeDialog(this.list.children[0], t / 2),
                e.changeDialog(this.list.children[1], t),
                e.changeDialog(this.list.children[2], 2 * t)
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (cc.find("body", this.node).scale = .9)
            },
            onTouchEnd: function(t) {
                var e = this.node.parent.getChildByName("Manager").getComponent("Manager");
                "continue" === t.target.name ? (e.showInter(),
                this.offThisDialog(50)) : "x2Reward" === t.target.name && e.loadRewardAds()
                if ("x2Reward" === t.target.name) {
                    window.cy_Sdk && window.cy_Sdk.ga(window.cy_Sdk.REWARD_CLICK, "x2Reward");
                }
            },
            offThisDialog: function(t) {
                this.node.active = !1,
                this.eliminated.isOn && this.listblock.getComponent("box").showEliminated(),
                this.game.getComponent("Main").init(),
                this.game.getComponent("Main").button(),
                this.listblock.getComponent("box").spawnCoin(this.coin).getComponent(dragonBones.ArmatureDisplay).armatureName = "coin",
                this.listblock.getComponent("box").coinAnimation(this.coin, t),
                this.node.parent.getChildByName("unlock_map").isOn && this.listblock.getComponent("box").showNewMap();
                window.cy_Sdk && window.cy_Sdk.adHide();
            },
            showNotifications: function() {
                var t = this;
                this.notification.active = !0,
                this.rewardBtn.off("touchend", this.onTouchEnd, this),
                this.scheduleOnce(function() {
                    t.notification.active = !1,
                    t.rewardBtn.on("touchend", t.onTouchEnd, t)
                }, 1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    pause: [function(t, e) {
        "use strict";
        cc._RF.push(e, "57dd6GMyDtFb5eqplPS/PSU", "pause"),
        cc.Class({
            extends: cc.Component,
            properties: {
                home: cc.Node,
                exit: cc.Node,
                blackGround: cc.Node,
                theme: cc.Node,
                themeBtn: cc.Node,
                homeBtn: cc.Node,
                restart: cc.Node,
                sound: cc.Node,
                soundon: cc.Node,
                soundoff: cc.Node,
                hightske: cc.Node
            },
            onLoad: function() {
                this.responsive(),
                this.setSound(),
                this.game = this.node.parent.getChildByName("game"),
                this.init()
            },
            setSound: function() {
                var t = cc.sys.localStorage.getItem("sound");
                "on" === t ? (this.soundon.active = !0,
                this.soundoff.active = !1) : "off" === t && (this.soundon.active = !1,
                this.soundoff.active = !0)
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (cc.find("board", this.node).scale = .9)
            },
            init: function() {
                this.blackGround.on("touchend", this.onTouchEnd, this),
                this.exit.on("touchend", this.onTouchEnd, this),
                this.themeBtn.on("touchend", this.onTouchEnd, this),
                this.sound.on("touchend", this.onTouchEnd, this),
                this.homeBtn.on("touchend", this.onTouchEnd, this),
                this.restart.on("touchend", this.onTouchEnd, this)
            },
            playSound: function(t) {
                if ("on" === cc.sys.localStorage.getItem("sound")) {
                    var e = this.sound;
                    cc.resources.load("am_thanh/" + t, function(t, o) {
                        e = o,
                        cc.audioEngine.play(e, !1, 1)
                    })
                }
            },
            action: function(t) {
                cc.tween(t).to(.5, {
                    scale: 1.2
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            activeAction: function() {
                this.game.getComponent("Main").init(),
                this.game.getComponent("Main").button()
            },
            onTouchEnd: function(t) {
                "x" !== t.target.name && "blackground" !== t.target.name || this.hightske.active ? "sound" === t.target.name ? (this.playSound("button"),
                !0 === this.soundon.active ? (this.soundon.active = !1,
                this.soundoff.active = !0,
                cc.sys.localStorage.setItem("sound", "off")) : (this.soundon.active = !0,
                this.soundoff.active = !1,
                cc.sys.localStorage.setItem("sound", "on"))) : "home" === t.target.name ? (this.playSound("button"),
                this.activeAction(),
                this.game.getComponent("Main").exit(),
                this.node.scale = 0,
                this.node.active = !1,
                this.blackGround.active = !1) : "restart" === t.target.name ? (this.playSound("button"),
                cc.tween(this.node).to(.3, {
                    scale: 0
                }, {
                    easing: "quadInOut"
                }).start(),
                this.game.getComponent("Main").reset(),
                this.scheduleOnce(function() {
                    this.node.active = !1,
                    this.blackGround.active = !1
                }, .3)) : "theme" === t.target.name && (this.playSound("button"),
                cc.tween(this.node).to(.3, {
                    scale: 0
                }, {
                    easing: "quadInOut"
                }).start(),
                this.scheduleOnce(function() {
                    this.node.active = !1,
                    this.theme.active = !0,
                    this.action(this.theme)
                }, .3)) : this.theme.active || 1 !== this.node.scale || (this.playSound("button"),
                cc.tween(this.node).to(.3, {
                    scale: 0
                }, {
                    easing: "quadInOut"
                }).start(),
                this.scheduleOnce(function() {
                    this.node.active = !1,
                    this.blackGround.active = !1,
                    this.activeAction()
                }, .3))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    rank: [function(t, e) {
        "use strict";
        cc._RF.push(e, "3139beUTEVPPY5HIGUt09iO", "rank"),
        cc.Class({
            extends: cc.Component,
            properties: {
                exit: cc.Node,
                black: cc.Node
            },
            onLoad: function() {
                this.exit.on("touchend", this.onTouchEnd, this),
                this.black.on("touchend", this.onTouchEnd, this)
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (cc.find("board", this.node).scale = .9)
            },
            playSound: function(t) {
                if ("on" === cc.sys.localStorage.getItem("sound")) {
                    var e = this.sound;
                    cc.resources.load("am_thanh/" + t, function(t, o) {
                        e = o,
                        cc.audioEngine.play(e, !1, 1)
                    })
                }
            },
            onTouchEnd: function() {
                var t = this;
                this.playSound("button"),
                cc.tween(this.node).to(.3, {
                    scale: 0
                }, {
                    easing: "quadInOut"
                }).start(),
                this.scheduleOnce(function() {
                    t.node.active = !1,
                    t.node.parent.getChildByName("home").getComponent("home").onPlay()
                }, .3)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    setting: [function(t, e) {
        "use strict";
        cc._RF.push(e, "d1552QTXnFDr7+2WT5GuSNn", "setting"),
        cc.Class({
            extends: cc.Component,
            properties: {
                home: cc.Node,
                exit: cc.Node,
                blackGround: cc.Node,
                sound: cc.Node,
                soundon: cc.Node,
                soundoff: cc.Node
            },
            onLoad: function() {
                this.responsive(),
                this.setSound(),
                this.blackGround.on("touchend", this.onTouchEnd, this),
                this.exit.on("touchend", this.onTouchEnd, this),
                this.sound.on("touchend", this.onTouchEnd, this)
            },
            setSound: function() {
                var t = cc.sys.localStorage.getItem("sound");
                "on" === t ? (this.soundon.active = !0,
                this.soundoff.active = !1) : "off" === t && (this.soundon.active = !1,
                this.soundoff.active = !0)
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (cc.find("board", this.node).scale = .9)
            },
            playSound: function(t) {
                if ("on" === cc.sys.localStorage.getItem("sound")) {
                    var e = this.sound;
                    cc.resources.load("am_thanh/" + t, function(t, o) {
                        e = o,
                        cc.audioEngine.play(e, !1, 1)
                    })
                }
            },
            onTouchStart: function(t) {
                cc.tween(t.target).to(.15, {
                    scale: 1.3
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            onTouchEnd: function(t) {
                "x" !== t.target.name && "blackground" !== t.target.name || 1 !== this.node.scale ? "sound" === t.target.name && (this.playSound("button"),
                !0 === this.soundon.active ? (this.soundon.active = !1,
                this.soundoff.active = !0,
                cc.sys.localStorage.setItem("sound", "off")) : (this.soundon.active = !0,
                this.soundoff.active = !1,
                cc.sys.localStorage.setItem("sound", "on"))) : (this.playSound("button"),
                cc.tween(this.node).to(.3, {
                    scale: 0
                }, {
                    easing: "quadInOut"
                }).start(),
                this.scheduleOnce(function() {
                    this.node.active = !1,
                    this.blackGround.active = !1,
                    this.home.getComponent("home").onPlay()
                }, .3))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    shop: [function(t, e) {
        "use strict";
        cc._RF.push(e, "90226LL3PpDqrIU/U5NLHIO", "shop"),
        cc.Class({
            extends: cc.Component,
            properties: {
                home: cc.Node,
                exit: cc.Node,
                blackGround: cc.Node,
                gameOver: cc.Node
            },
            onLoad: function() {
                this.blackGround.on("touchend", this.onTouchEnd, this),
                this.node.on("touchstart", this.onTouchStart, this),
                this.exit.on("touchend", this.onTouchEnd, this),
                this.responsive()
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (cc.find("board", this.node).scale = .9)
            },
            onTouchStart: function(t) {
                cc.tween(t.target).to(.15, {
                    scale: 1.3
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            onTouchEnd: function(t) {
                "x" !== t.target.name && "blackground" !== t.target.name || 1 !== this.node.scale || (!1 === this.home.active ? (cc.tween(this.node).to(.3, {
                    scale: 0
                }, {
                    easing: "quadInOut"
                }).start(),
                this.scheduleOnce(function() {
                    this.node.active = !1,
                    this.gameOver.active = !0
                }, .3)) : (cc.tween(this.node).to(.3, {
                    scale: 0
                }, {
                    easing: "quadInOut"
                }).start(),
                this.scheduleOnce(function() {
                    this.node.active = !1,
                    this.blackGround.active = !1,
                    this.home.getComponent("home").onPlay()
                }, .3)))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    theme: [function(t, e) {
        "use strict";
        cc._RF.push(e, "240daQIO5lLZ6H4q00cNIOQ", "theme"),
        cc.Class({
            extends: cc.Component,
            properties: {
                exit: cc.Node,
                use: cc.Node,
                use2: cc.Node,
                selected: cc.Node,
                pause: cc.Node,
                unlock: cc.Node,
                frameselected: cc.Node,
                t3_1: cc.Node,
                t3_2: cc.Node,
                listBlock: cc.Node,
                theme1: cc.Node,
                theme2: cc.Node,
                theme3: cc.Node,
                blackground: cc.Node,
                hightske: cc.Node
            },
            onLoad: function() {
                this.init(),
                this.blackground.on("touchend", this.onTouchEnd, this),
                this.exit.on("touchend", this.onTouchEnd, this),
                this.use.on("touchend", this.onTouchEnd, this),
                this.use2.on("touchend", this.onTouchEnd, this),
                this.unlock.on("touchend", this.onTouchEnd, this),
                this.responsive()
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (cc.find("board", this.node).scale = .9)
            },
            init: function() {
                cc.sys.localStorage.getItem("theme3") && this.unLock();
                var t = cc.sys.localStorage.getItem("theme")
                  , e = this.selected.parent;
                "theme1" === t ? (this.theme1.children[this.theme1.childrenCount - 1].parent = e,
                this.frameselected.parent = this.theme1,
                this.selected.parent = this.theme1) : "theme2" === t ? (this.theme2.children[this.theme2.childrenCount - 1].parent = e,
                this.frameselected.parent = this.theme2,
                this.selected.parent = this.theme2) : "theme3" === t ? (this.theme3.children[this.theme3.childrenCount - 1].parent = e,
                this.frameselected.parent = this.theme3,
                this.selected.parent = this.theme3) : (this.theme2.children[this.theme2.childrenCount - 1].parent = e,
                this.frameselected.parent = this.theme2,
                this.selected.parent = this.theme2)
            },
            playSound: function(t) {
                if ("on" === cc.sys.localStorage.getItem("sound")) {
                    var e = this.sound;
                    cc.resources.load("am_thanh/" + t, function(t, o) {
                        e = o,
                        cc.audioEngine.play(e, !1, 1)
                    })
                }
            },
            unLock: function() {
                this.unlock.active = !1,
                this.t3_1.action = !1,
                this.t3_2.active = !0,
                this.use2.active = !0
            },
            action: function(t) {
                cc.tween(t).to(.5, {
                    scale: 1.2
                }, {
                    easing: "quadInOut"
                }).to(.15, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1.02
                }, {
                    easing: "quadInOut"
                }).to(.05, {
                    scale: 1
                }, {
                    easing: "quadInOut"
                }).start()
            },
            onTouchEnd: function(t) {
                var e;
                if ("x" === t.target.name || "blackground" === t.target.name)
                    this.pause.active || 1 !== this.node.scale || (this.playSound("button"),
                    cc.tween(this.node).to(.3, {
                        scale: 0
                    }, {
                        easing: "quadInOut"
                    }).start(),
                    this.scheduleOnce(function() {
                        this.node.active = !1,
                        this.blackground.active = !1,
                        this.action(this.pause),
                        this.listBlock.getComponent("box").changeTheme(),
                        this.pause.getComponent("pause").activeAction()
                    }, .3));
                else if ("use" === t.target.name)
                    this.playSound("button"),
                    e = this.selected.parent,
                    this.frameselected.parent = this.use.parent,
                    this.selected.parent = this.use.parent,
                    cc.sys.localStorage.setItem("theme", this.use.parent.name),
                    this.use.parent = e;
                else if ("use2" === t.target.name)
                    this.playSound("button"),
                    e = this.selected.parent,
                    this.frameselected.parent = this.use2.parent,
                    this.selected.parent = this.use2.parent,
                    cc.sys.localStorage.setItem("theme", this.use2.parent.name),
                    this.use2.parent = e;
                else if ("unlock" === t.target.name) {
                    this.playSound("button");
                    var o = parseInt(cc.sys.localStorage.getItem("diamond"));
                    o >= 200 && (this.unLock(),
                    o -= 200,
                    cc.sys.localStorage.setItem("theme3", "bought"),
                    cc.sys.localStorage.setItem("diamond", o))
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    tutorial: [function(t, e) {
        "use strict";
        cc._RF.push(e, "a2d06wdyO1Mz6ycDRZn7P8I", "tutorial"),
        cc.Class({
            extends: cc.Component,
            properties: {
                tut1: cc.Node,
                tut2: cc.Node,
                tut3: cc.Node,
                hand: cc.Node,
                skip: cc.Node,
                game: cc.Node,
                listblock: cc.Node
            },
            onLoad: function() {
                this.responsive(),
                this.skip.on("touchend", this.onTouchEnd, this),
                this.listblock.getComponent("box").spawnTutBlock(this.tut1),
                this.action()
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (this.skip.scale = .95,
                this.tut1.scale = .95,
                this.tut2.scale = .95,
                this.tut3.scale = .95,
                this.hand.scale = .95)
            },
            action: function() {
                this.hand.active = !0,
                this.hand.x = this.tut1.x - 15.5,
                this.hand.y = this.tut1.x - 49.5,
                cc.tween(this.hand).repeatForever(cc.tween().to(.8, {
                    x: this.tut1.x + 114.5
                }).to(0, {
                    x: this.tut1.x - 10,
                    opacity: 0
                }).delay(3).to(0, {
                    opacity: 255
                })).start()
            },
            onPlay: function() {
                this.game.getComponent("Main").init(),
                this.game.getComponent("Main").button()
            },
            nextTut: function() {
                this.tut1.active ? (this.hand.active = !0,
                this.hand.stopAllActions(),
                this.tut1.active = !1,
                this.tut2.active = !0,
                this.listblock.getComponent("box").destroyBlockTut(),
                this.listblock.getComponent("box").spawnTutBlock(this.tut2),
                this.hand.x = this.tut2.x + 44.5,
                this.hand.y = this.tut2.y + 70.5,
                cc.tween(this.hand).repeatForever(cc.tween().to(1, {
                    y: this.tut2.x - 169.5
                }).to(0, {
                    y: this.tut2.x + 70.5,
                    opacity: 0
                }).delay(3).to(0, {
                    opacity: 255
                })).start(),
                this.onPlay()) : this.tut2.active ? (this.hand.active = !0,
                this.hand.stopAllActions(),
                this.listblock.getComponent("box").destroyBlockTut(),
                this.tut2.active = !1,
                this.tut3.active = !0,
                this.listblock.getComponent("box").spawnTutBlock(this.tut3),
                this.hand.x = this.tut3.x - 118.5,
                this.hand.y = this.tut3.y + 126.5,
                cc.tween(this.hand).repeatForever(cc.tween().to(0, {
                    opacity: 255
                }).to(.4, {
                    y: this.tut3.y + 14.5
                }).to(.4, {
                    x: this.tut3.x - 6.5
                }).to(.4, {
                    y: this.tut3.y - 97.5
                }).to(.5, {
                    y: this.tut3.y - 209.5,
                    x: this.tut3.x + 105.5
                }).to(.4, {
                    x: this.tut3.x + 217.5
                }).to(.4, {
                    y: this.tut3.y - 97.5
                }).to(0, {
                    x: this.tut3.x - 118.5,
                    y: this.tut3.y + 126.5,
                    opacity: 0
                }).delay(3).to(0, {
                    opacity: 255
                })).start(),
                this.onPlay()) : (this.node.active = !1,
                this.hand.active = !1,
                this.listblock.getComponent("box").destroyBlockTut(),
                this.listblock.getComponent("box").getMap(),
                this.game.getComponent("Main").checkTime(),
                this.game.getComponent("Main").setPosition(),
                this.game.getChildByName("footer").active = !0,
                this.game.getChildByName("header").active = !0,
                cc.sys.localStorage.setItem("old", "true"),
                this.onPlay())
            },
            onTouchEnd: function(t) {
                "skip" === t.target.name && this.nextTut()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    unlock_map: [function(t, e) {
        "use strict";
        cc._RF.push(e, "139e1MFt5FMZLsNvK0BUdWK", "unlock_map"),
        cc.Class({
            extends: cc.Component,
            properties: {
                exit: cc.Node,
                play: cc.Node,
                listblock: cc.Node,
                game: cc.Node
            },
            onLoad: function() {
                this.responsive(),
                this.exit.on("touchend", this.onTouchEnd, this),
                this.play.on("touchend", this.onTouchEnd, this),
                this.node.getChildByName("black").on("touchend", this.onTouchEnd, this)
            },
            responsive: function() {
                cc.winSize.height / cc.winSize.width >= 2 && (cc.find("board", this.node).scale = .9)
            },
            loadMap: function(t) {
                var e, o;
                "5x8" === t ? (o = "6x8",
                e = "normal") : "6x8" === t ? (o = "5x7",
                e = "hard") : "5x7" === t && (o = "4x6",
                e = "master");
                var n = cc.find("board/level", this.node)
                  , i = cc.find("board/map", this.node);
                cc.resources.load("level/" + e, cc.SpriteFrame, function(t, e) {
                    n.getComponent(cc.Sprite).spriteFrame = e
                }),
                cc.resources.load("maps/" + o, cc.SpriteFrame, function(t, e) {
                    i.getComponent(cc.Sprite).spriteFrame = e
                })
            },
            onTouchEnd: function(t) {
                var e = this;
                "x" === t.target.name || "black" === t.target.name ? (cc.tween(this.node).to(.3, {
                    scale: 0
                }, {
                    easing: "quadInOut"
                }).start(),
                this.scheduleOnce(function() {
                    e.node.active = !1
                }, .3)) : "play_now" === t.target.name && (this.node.scale = 0,
                this.node.active = !1,
                this.game.getComponent("Main").exit(),
                this.scheduleOnce(function() {
                    e.game.parent.getChildByName("home").getComponent("home").moveRight()
                }, .2))
            }
        }),
        cc._RF.pop()
    }
    , {}]
}, {}, ["Main", "Manager", "Screenshot", "addblock", "box", "continue", "data", "eliminated", "gameover", "gameoverFB", "home", "loading", "more_coin", "newblock", "pause", "rank", "setting", "shop", "theme", "tutorial", "unlock_map"]);
