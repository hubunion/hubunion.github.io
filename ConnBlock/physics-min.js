(function t(e, i, o) {
    function n(s, a) {
        if (!i[s]) {
            if (!e[s]) {
                var l = "function" == typeof require && require;
                if (!a && l)
                    return l(s, !0);
                if (r)
                    return r(s, !0);
                var h = new Error("Cannot find module '" + s + "'");
                throw h.code = "MODULE_NOT_FOUND",
                h
            }
            var c = i[s] = {
                exports: {}
            };
            e[s][0].call(c.exports, function(t) {
                return n(e[s][1][t] || t)
            }, c, c.exports, t, e, i, o)
        }
        return i[s].exports
    }
    for (var r = "function" == typeof require && require, s = 0; s < o.length; s++)
        n(o[s]);
    return n
}
)({
    1: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.CannonRigidBody = void 0;
        var o, n = (o = t("../../../../../external/cannon/cannon")) && o.__esModule ? o : {
            default: o
        };
        function r(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        var s = new n.default.Vec3
          , a = new n.default.Vec3
          , l = cc.Vec3
          , h = function() {
            function t() {
                this._rigidBody = void 0,
                this._sharedBody = void 0,
                this._isEnabled = !1
            }
            var e, i, o = t.prototype;
            return o.__preload = function(t) {
                this._rigidBody = t,
                this._sharedBody = cc.director.getPhysics3DManager().physicsWorld.getSharedBody(this._rigidBody.node),
                this._sharedBody.reference = !0,
                this._sharedBody.wrappedBody = this
            }
            ,
            o.onLoad = function() {}
            ,
            o.onEnable = function() {
                this._isEnabled = !0,
                this.mass = this._rigidBody.mass,
                this.allowSleep = this._rigidBody.allowSleep,
                this.linearDamping = this._rigidBody.linearDamping,
                this.angularDamping = this._rigidBody.angularDamping,
                this.useGravity = this._rigidBody.useGravity,
                this.isKinematic = this._rigidBody.isKinematic,
                this.fixedRotation = this._rigidBody.fixedRotation,
                this.linearFactor = this._rigidBody.linearFactor,
                this.angularFactor = this._rigidBody.angularFactor,
                this._sharedBody.enabled = !0
            }
            ,
            o.onDisable = function() {
                this._isEnabled = !1,
                this._sharedBody.enabled = !1
            }
            ,
            o.onDestroy = function() {
                this._sharedBody.reference = !1,
                this._rigidBody = null,
                this._sharedBody = null
            }
            ,
            o.wakeUp = function() {
                return this._sharedBody.body.wakeUp()
            }
            ,
            o.sleep = function() {
                return this._sharedBody.body.sleep()
            }
            ,
            o.getLinearVelocity = function(t) {
                return l.copy(t, this._sharedBody.body.velocity),
                t
            }
            ,
            o.setLinearVelocity = function(t) {
                var e = this._sharedBody.body;
                e.isSleeping() && e.wakeUp(),
                l.copy(e.velocity, t)
            }
            ,
            o.getAngularVelocity = function(t) {
                return l.copy(t, this._sharedBody.body.angularVelocity),
                t
            }
            ,
            o.setAngularVelocity = function(t) {
                var e = this._sharedBody.body;
                e.isSleeping() && e.wakeUp(),
                l.copy(e.angularVelocity, t)
            }
            ,
            o.applyForce = function(t, e) {
                null == e && (e = l.ZERO);
                var i = this._sharedBody.body;
                i.isSleeping() && i.wakeUp(),
                i.applyForce(l.copy(s, t), l.copy(a, e))
            }
            ,
            o.applyImpulse = function(t, e) {
                null == e && (e = l.ZERO);
                var i = this._sharedBody.body;
                i.isSleeping() && i.wakeUp(),
                i.applyImpulse(l.copy(s, t), l.copy(a, e))
            }
            ,
            o.applyLocalForce = function(t, e) {
                null == e && (e = l.ZERO);
                var i = this._sharedBody.body;
                i.isSleeping() && i.wakeUp(),
                i.applyLocalForce(l.copy(s, t), l.copy(a, e))
            }
            ,
            o.applyLocalImpulse = function(t, e) {
                null == e && (e = l.ZERO);
                var i = this._sharedBody.body;
                i.isSleeping() && i.wakeUp(),
                i.applyLocalImpulse(l.copy(s, t), l.copy(a, e))
            }
            ,
            o.applyTorque = function(t) {
                var e = this._sharedBody.body;
                e.isSleeping() && e.wakeUp(),
                e.torque.x += t.x,
                e.torque.y += t.y,
                e.torque.z += t.z
            }
            ,
            o.applyLocalTorque = function(t) {
                var e = this._sharedBody.body;
                e.isSleeping() && e.wakeUp(),
                l.copy(s, t),
                e.vectorToWorldFrame(s, s),
                e.torque.x += s.x,
                e.torque.y += s.y,
                e.torque.z += s.z
            }
            ,
            e = t,
            (i = [{
                key: "isAwake",
                get: function() {
                    return this._sharedBody.body.isAwake()
                }
            }, {
                key: "isSleepy",
                get: function() {
                    return this._sharedBody.body.isSleepy()
                }
            }, {
                key: "isSleeping",
                get: function() {
                    return this._sharedBody.body.isSleeping()
                }
            }, {
                key: "allowSleep",
                set: function(t) {
                    var e = this._sharedBody.body;
                    e.isSleeping() && e.wakeUp(),
                    e.allowSleep = t
                }
            }, {
                key: "mass",
                set: function(t) {
                    var e = this._sharedBody.body;
                    e.mass = t,
                    0 == e.mass ? e.type = n.default.Body.STATIC : e.type = this._rigidBody.isKinematic ? n.default.Body.KINEMATIC : n.default.Body.DYNAMIC,
                    e.updateMassProperties(),
                    e.isSleeping() && e.wakeUp()
                }
            }, {
                key: "isKinematic",
                set: function(t) {
                    var e = this._sharedBody.body;
                    0 == e.mass ? e.type = n.default.Body.STATIC : e.type = t ? n.default.Body.KINEMATIC : n.default.Body.DYNAMIC
                }
            }, {
                key: "fixedRotation",
                set: function(t) {
                    var e = this._sharedBody.body;
                    e.isSleeping() && e.wakeUp(),
                    e.fixedRotation = t,
                    e.updateMassProperties()
                }
            }, {
                key: "linearDamping",
                set: function(t) {
                    this._sharedBody.body.linearDamping = t
                }
            }, {
                key: "angularDamping",
                set: function(t) {
                    this._sharedBody.body.angularDamping = t
                }
            }, {
                key: "useGravity",
                set: function(t) {
                    var e = this._sharedBody.body;
                    e.isSleeping() && e.wakeUp(),
                    e.useGravity = t
                }
            }, {
                key: "linearFactor",
                set: function(t) {
                    var e = this._sharedBody.body;
                    e.isSleeping() && e.wakeUp(),
                    l.copy(e.linearFactor, t)
                }
            }, {
                key: "angularFactor",
                set: function(t) {
                    var e = this._sharedBody.body;
                    e.isSleeping() && e.wakeUp(),
                    l.copy(e.angularFactor, t)
                }
            }, {
                key: "rigidBody",
                get: function() {
                    return this._rigidBody
                }
            }, {
                key: "sharedBody",
                get: function() {
                    return this._sharedBody
                }
            }, {
                key: "isEnabled",
                get: function() {
                    return this._isEnabled
                }
            }]) && r(e.prototype, i),
            t
        }();
        i.CannonRigidBody = h
    }
    , {
        "../../../../../external/cannon/cannon": 24
    }],
    2: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.CannonSharedBody = void 0;
        var o, n = (o = t("../../../../../external/cannon/cannon")) && o.__esModule ? o : {
            default: o
        }, r = t("../framework/physics-enum"), s = t("../framework/util"), a = t("./cannon-util");
        function l(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        var h = cc.Node._LocalDirtyFlag.PHYSICS_SCALE
          , c = cc.Quat
          , p = cc.Vec3
          , u = cc.js.array.fastRemoveAt
          , d = new p
          , y = new c
          , f = []
          , v = {
            type: "collision-enter",
            selfCollider: null,
            otherCollider: null,
            contacts: []
        }
          , m = function() {
            function t(t, e) {
                this.node = void 0,
                this.wrappedWorld = void 0,
                this.body = new n.default.Body,
                this.shapes = [],
                this.wrappedBody = null,
                this.index = -1,
                this.ref = 0,
                this.onCollidedListener = this.onCollided.bind(this),
                this.wrappedWorld = e,
                this.node = t,
                this.body.material = this.wrappedWorld.world.defaultMaterial,
                this.body.addEventListener("cc-collide", this.onCollidedListener),
                this._updateGroup(),
                this.node.on(cc.Node.EventType.GROUP_CHANGED, this._updateGroup, this)
            }
            t.getSharedBody = function(e, i) {
                var o = e._id;
                if (t.sharedBodiesMap.has(o))
                    return t.sharedBodiesMap.get(o);
                var n = new t(e,i);
                return t.sharedBodiesMap.set(e._id, n),
                n
            }
            ;
            var e, i, o = t.prototype;
            return o._updateGroup = function() {
                (0,
                a.groupIndexToBitMask)(this.node.groupIndex, this.body)
            }
            ,
            o.addShape = function(t) {
                if (this.shapes.indexOf(t) < 0) {
                    var e = this.body.shapes.length;
                    this.body.addShape(t.shape),
                    this.shapes.push(t),
                    t.setIndex(e);
                    var i = this.body.shapeOffsets[e]
                      , o = this.body.shapeOrientations[e];
                    t.setOffsetAndOrient(i, o)
                }
            }
            ,
            o.removeShape = function(t) {
                var e = this.shapes.indexOf(t);
                e >= 0 && (u(this.shapes, e),
                this.body.removeShape(t.shape),
                t.setIndex(-1))
            }
            ,
            o.syncSceneToPhysics = function(t) {
                void 0 === t && (t = !1);
                var e = this.node
                  , i = (0,
                s.worldDirty)(e);
                if (t || i) {
                    if (this.body.aabbNeedsUpdate = !0,
                    e.getWorldPosition(d),
                    e.getWorldRotation(y),
                    p.copy(this.body.position, d),
                    c.copy(this.body.quaternion, y),
                    e._localMatDirty & h) {
                        for (var o = e.__wscale, n = 0; n < this.shapes.length; n++)
                            this.shapes[n].setScale(o);
                        (0,
                        a.commitShapeUpdates)(this.body)
                    }
                    this.body.isSleeping() && this.body.wakeUp()
                }
            }
            ,
            o.syncPhysicsToScene = function() {
                this.body.type == r.ERigidBodyType.STATIC || this.body.isSleeping() || (p.copy(d, this.body.position),
                c.copy(y, this.body.quaternion),
                this.node.setWorldPosition(d),
                this.node.setWorldRotation(y))
            }
            ,
            o.destroy = function() {
                this.body.removeEventListener("cc-collide", this.onCollidedListener),
                this.node.off(cc.Node.EventType.GROUP_CHANGED, this._updateGroup, this),
                t.sharedBodiesMap.delete(this.node._id),
                delete n.default.World.idToBodyMap[this.body.id],
                this.node = null,
                this.wrappedWorld = null,
                this.body = null,
                this.shapes = null,
                this.onCollidedListener = null
            }
            ,
            o.onCollided = function(t) {
                v.type = t.event;
                var e = (0,
                s.getWrap)(t.selfShape)
                  , i = (0,
                s.getWrap)(t.otherShape);
                if (e) {
                    v.selfCollider = e.collider,
                    v.otherCollider = i ? i.collider : null;
                    var o = 0;
                    for (o = v.contacts.length; o--; )
                        f.push(v.contacts.pop());
                    for (o = 0; o < t.contacts.length; o++) {
                        var n = t.contacts[o];
                        if (f.length > 0) {
                            var r = f.pop();
                            p.copy(r.contactA, n.ri),
                            p.copy(r.contactB, n.rj),
                            p.copy(r.normal, n.ni),
                            v.contacts.push(r)
                        } else {
                            var l = {
                                contactA: p.copy(new p, n.ri),
                                contactB: p.copy(new p, n.rj),
                                normal: p.copy(new p, n.ni)
                            };
                            v.contacts.push(l)
                        }
                    }
                    for (o = 0; o < this.shapes.length; o++) {
                        var h = this.shapes[o];
                        v.type = a.deprecatedEventMap[v.type],
                        h.collider.emit(v.type, v),
                        v.type = t.event,
                        h.collider.emit(v.type, v)
                    }
                }
            }
            ,
            e = t,
            (i = [{
                key: "enabled",
                set: function(t) {
                    if (t) {
                        if (this.index < 0) {
                            this.index = this.wrappedWorld.bodies.length,
                            this.wrappedWorld.addSharedBody(this);
                            var e = this.node;
                            this.body.aabbNeedsUpdate = !0,
                            e.getWorldPosition(d),
                            e.getWorldRotation(y);
                            var i = this.body.position;
                            i.x = parseFloat(d.x.toFixed(3)),
                            i.y = parseFloat(d.y.toFixed(3)),
                            i.z = parseFloat(d.z.toFixed(3));
                            var o = this.body.quaternion;
                            if (o.x = parseFloat(y.x.toFixed(12)),
                            o.y = parseFloat(y.y.toFixed(12)),
                            o.z = parseFloat(y.z.toFixed(12)),
                            o.w = parseFloat(y.w.toFixed(12)),
                            e._localMatDirty & h) {
                                for (var n = e.__wscale, r = 0; r < this.shapes.length; r++)
                                    this.shapes[r].setScale(n);
                                (0,
                                a.commitShapeUpdates)(this.body)
                            }
                            this.body.isSleeping() && this.body.wakeUp()
                        }
                    } else
                        this.index >= 0 && (0 == this.shapes.length && null == this.wrappedBody || 0 == this.shapes.length && null != this.wrappedBody && !this.wrappedBody.rigidBody.enabledInHierarchy || 0 == this.shapes.length && null != this.wrappedBody && !this.wrappedBody.isEnabled) && (this.body.sleep(),
                        this.index = -1,
                        this.wrappedWorld.removeSharedBody(this))
                }
            }, {
                key: "reference",
                set: function(t) {
                    t ? this.ref++ : this.ref--,
                    0 == this.ref && this.destroy()
                }
            }]) && l(e.prototype, i),
            t
        }();
        i.CannonSharedBody = m,
        m.sharedBodiesMap = new Map
    }
    , {
        "../../../../../external/cannon/cannon": 24,
        "../framework/physics-enum": 19,
        "../framework/util": 23,
        "./cannon-util": 3
    }],
    3: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.commitShapeUpdates = function(t) {
            t.aabbNeedsUpdate = !0,
            t.updateMassProperties(),
            t.updateBoundingRadius()
        }
        ,
        i.deprecatedEventMap = void 0,
        i.fillRaycastResult = function(t, e) {
            t._assign(n.copy(new n, e.hitPointWorld), e.distance, (0,
            o.getWrap)(e.shape).collider)
        }
        ,
        i.groupIndexToBitMask = r,
        i.toCannonRaycastOptions = function(t, e) {
            t.checkCollisionResponse = !e.queryTrigger,
            r(e.groupIndex, t),
            t.skipBackFaces = !1
        }
        ;
        var o = t("../framework/util")
          , n = cc.Vec3;
        function r(t, e) {
            var i = 1 << t
              , o = 0
              , n = cc.game.collisionMatrix[t];
            if (n) {
                for (var r = 0; r < n.length; r++)
                    n[r] && (o |= 1 << r);
                e.collisionFilterGroup = i,
                e.collisionFilterMask = o
            } else
                cc.error("cannon-utils: group is not exist", t)
        }
        i.deprecatedEventMap = {
            onCollisionEnter: "collision-enter",
            onCollisionStay: "collision-stay",
            onCollisionExit: "collision-exit",
            onTriggerEnter: "trigger-enter",
            onTriggerStay: "trigger-stay",
            onTriggerExit: "trigger-exit"
        }
    }
    , {
        "../framework/util": 23
    }],
    4: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.CannonWorld = void 0;
        var o, n = (o = t("../../../../../external/cannon/cannon")) && o.__esModule ? o : {
            default: o
        }, r = t("./cannon-util"), s = t("./shapes/cannon-shape"), a = t("./cannon-shared-body"), l = t("../framework/util");
        function h(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        var c = cc.Vec3
          , p = cc.js.array.fastRemoveAt
          , u = function() {
            function t() {
                this.bodies = [],
                this._world = void 0,
                this._raycastResult = new n.default.RaycastResult,
                this._world = new n.default.World,
                this._world.broadphase = new n.default.NaiveBroadphase,
                this._world.addEventListener("postStep", this.onPostStep.bind(this))
            }
            var e, i, o = t.prototype;
            return o.onPostStep = function() {
                var t = cc.director.getPhysics3DManager();
                if (t.useFixedDigit)
                    for (var e = t.fixDigits.position, i = t.fixDigits.rotation, o = this._world.bodies, r = 0; r < o.length; r++) {
                        var s = o[r];
                        if (s.type != n.default.Body.STATIC && !s.isSleeping()) {
                            var a = s.position;
                            a.x = parseFloat(a.x.toFixed(e)),
                            a.y = parseFloat(a.y.toFixed(e)),
                            a.z = parseFloat(a.z.toFixed(e));
                            var l = s.quaternion;
                            l.x = parseFloat(l.x.toFixed(i)),
                            l.y = parseFloat(l.y.toFixed(i)),
                            l.z = parseFloat(l.z.toFixed(i)),
                            l.w = parseFloat(l.w.toFixed(i));
                            var h = s.velocity;
                            h.x = parseFloat(h.x.toFixed(e)),
                            h.y = parseFloat(h.y.toFixed(e)),
                            h.z = parseFloat(h.z.toFixed(e));
                            var c = s.angularVelocity;
                            c.x = parseFloat(c.x.toFixed(e)),
                            c.y = parseFloat(c.y.toFixed(e)),
                            c.z = parseFloat(c.z.toFixed(e))
                        }
                    }
            }
            ,
            o.step = function(t, e, i) {
                this.syncSceneToPhysics(),
                this._world.step(t, e, i),
                this.syncPhysicsToScene(),
                this.emitEvents()
            }
            ,
            o.syncSceneToPhysics = function() {
                (0,
                l.clearNodeTransformRecord)();
                for (var t = 0; t < this.bodies.length; t++)
                    this.bodies[t].syncSceneToPhysics();
                (0,
                l.clearNodeTransformDirtyFlag)()
            }
            ,
            o.syncPhysicsToScene = function() {
                for (var t = 0; t < this.bodies.length; t++)
                    this.bodies[t].syncPhysicsToScene()
            }
            ,
            o.emitEvents = function() {
                this._world.emitTriggeredEvents(),
                this._world.emitCollisionEvents()
            }
            ,
            o.raycastClosest = function(t, e, i) {
                f(t, e.maxDistance),
                (0,
                r.toCannonRaycastOptions)(v, e);
                var o = this._world.raycastClosest(d, y, v, this._raycastResult);
                return o && (0,
                r.fillRaycastResult)(i, this._raycastResult),
                o
            }
            ,
            o.raycast = function(t, e, i, o) {
                return f(t, e.maxDistance),
                (0,
                r.toCannonRaycastOptions)(v, e),
                this._world.raycastAll(d, y, v, function(t) {
                    var e = i.add();
                    (0,
                    r.fillRaycastResult)(e, t),
                    o.push(e)
                })
            }
            ,
            o.getSharedBody = function(t) {
                return a.CannonSharedBody.getSharedBody(t, this)
            }
            ,
            o.addSharedBody = function(t) {
                this.bodies.indexOf(t) < 0 && (this.bodies.push(t),
                this._world.addBody(t.body))
            }
            ,
            o.removeSharedBody = function(t) {
                var e = this.bodies.indexOf(t);
                e >= 0 && (p(this.bodies, e),
                this._world.remove(t.body))
            }
            ,
            e = t,
            (i = [{
                key: "world",
                get: function() {
                    return this._world
                }
            }, {
                key: "defaultMaterial",
                set: function(t) {
                    this._world.defaultMaterial.friction = t.friction,
                    this._world.defaultMaterial.restitution = t.restitution,
                    null != s.CannonShape.idToMaterial[t._uuid] && (s.CannonShape.idToMaterial[t._uuid] = this._world.defaultMaterial)
                }
            }, {
                key: "allowSleep",
                set: function(t) {
                    this._world.allowSleep = t
                }
            }, {
                key: "gravity",
                set: function(t) {
                    c.copy(this._world.gravity, t)
                }
            }]) && h(e.prototype, i),
            t
        }();
        i.CannonWorld = u;
        var d = new n.default.Vec3
          , y = new n.default.Vec3;
        function f(t, e) {
            c.copy(d, t.o),
            t.computeHit(y, e)
        }
        var v = {
            checkCollisionResponse: !1,
            collisionFilterGroup: -1,
            collisionFilterMask: -1,
            skipBackFaces: !1
        }
    }
    , {
        "../../../../../external/cannon/cannon": 24,
        "../framework/util": 23,
        "./cannon-shared-body": 2,
        "./cannon-util": 3,
        "./shapes/cannon-shape": 7
    }],
    5: [function(t) {
        "use strict";
        var e = t("../framework/physics-selector")
          , i = t("./cannon-rigid-body")
          , o = t("./cannon-world")
          , n = t("./shapes/cannon-box-shape")
          , r = t("./shapes/cannon-sphere-shape");
        (0,
        e.instantiate)(n.CannonBoxShape, r.CannonSphereShape, i.CannonRigidBody, o.CannonWorld)
    }
    , {
        "../framework/physics-selector": 22,
        "./cannon-rigid-body": 1,
        "./cannon-world": 4,
        "./shapes/cannon-box-shape": 6,
        "./shapes/cannon-sphere-shape": 8
    }],
    6: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.CannonBoxShape = void 0;
        var o, n = (o = t("../../../../../../external/cannon/cannon")) && o.__esModule ? o : {
            default: o
        }, r = t("../cannon-util"), s = t("./cannon-shape");
        function a(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        function l(t, e) {
            return (l = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        var h = cc.Vec3
          , c = new h
          , p = function(t) {
            var e, i;
            function o(e) {
                var i;
                return (i = t.call(this) || this).halfExtent = new n.default.Vec3,
                h.multiplyScalar(i.halfExtent, e, .5),
                i._shape = new n.default.Box(i.halfExtent.clone()),
                i
            }
            i = t,
            (e = o).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            l(e, i);
            var s, p, u = o.prototype;
            return u.onLoad = function() {
                t.prototype.onLoad.call(this),
                this.size = this.boxCollider.size
            }
            ,
            u.setScale = function(e) {
                t.prototype.setScale.call(this, e),
                this.size = this.boxCollider.size
            }
            ,
            s = o,
            (p = [{
                key: "boxCollider",
                get: function() {
                    return this.collider
                }
            }, {
                key: "box",
                get: function() {
                    return this._shape
                }
            }, {
                key: "size",
                set: function(t) {
                    this.collider.node.getWorldScale(c),
                    c.x = Math.abs(c.x),
                    c.y = Math.abs(c.y),
                    c.z = Math.abs(c.z),
                    h.multiplyScalar(this.halfExtent, t, .5),
                    h.multiply(this.box.halfExtents, this.halfExtent, c),
                    this.box.updateConvexPolyhedronRepresentation(),
                    -1 != this._index && (0,
                    r.commitShapeUpdates)(this._body)
                }
            }]) && a(s.prototype, p),
            o
        }(s.CannonShape);
        i.CannonBoxShape = p
    }
    , {
        "../../../../../../external/cannon/cannon": 24,
        "../cannon-util": 3,
        "./cannon-shape": 7
    }],
    7: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.CannonShape = void 0;
        var o, n = (o = t("../../../../../../external/cannon/cannon")) && o.__esModule ? o : {
            default: o
        }, r = t("../../framework/util"), s = t("../cannon-util");
        function a(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        var l = {
            type: "trigger-enter",
            selfCollider: null,
            otherCollider: null
        }
          , h = cc.Vec3
          , c = new h
          , p = function() {
            function t() {
                this._collider = void 0,
                this._shape = void 0,
                this._offset = new n.default.Vec3,
                this._orient = new n.default.Quaternion,
                this._index = -1,
                this._sharedBody = void 0,
                this.onTriggerListener = this.onTrigger.bind(this)
            }
            var e, i, o = t.prototype;
            return o.__preload = function(t) {
                this._collider = t,
                (0,
                r.setWrap)(this._shape, this),
                this._shape.addEventListener("cc-trigger", this.onTriggerListener),
                this._sharedBody = cc.director.getPhysics3DManager().physicsWorld.getSharedBody(this._collider.node),
                this._sharedBody.reference = !0
            }
            ,
            o.onLoad = function() {
                this.center = this._collider.center,
                this.isTrigger = this._collider.isTrigger
            }
            ,
            o.onEnable = function() {
                this._sharedBody.addShape(this),
                this._sharedBody.enabled = !0
            }
            ,
            o.onDisable = function() {
                this._sharedBody.removeShape(this),
                this._sharedBody.enabled = !1
            }
            ,
            o.onDestroy = function() {
                this._sharedBody.reference = !1,
                this._shape.removeEventListener("cc-trigger", this.onTriggerListener),
                delete n.default.World.idToShapeMap[this._shape.id],
                this._sharedBody = null,
                (0,
                r.setWrap)(this._shape, null),
                this._offset = null,
                this._orient = null,
                this._shape = null,
                this._collider = null,
                this.onTriggerListener = null
            }
            ,
            o.setScale = function() {
                this._setCenter(this._collider.center)
            }
            ,
            o.setIndex = function(t) {
                this._index = t
            }
            ,
            o.setOffsetAndOrient = function(t, e) {
                cc.Vec3.copy(t, this._offset),
                cc.Vec3.copy(e, this._orient),
                this._offset = t,
                this._orient = e
            }
            ,
            o._setCenter = function(t) {
                var e = this._offset;
                h.copy(e, t),
                this._collider.node.getWorldScale(c),
                h.multiply(e, e, c)
            }
            ,
            o.onTrigger = function(t) {
                l.type = t.event;
                var e = (0,
                r.getWrap)(t.selfShape)
                  , i = (0,
                r.getWrap)(t.otherShape);
                e && (l.selfCollider = e.collider,
                l.otherCollider = i ? i.collider : null,
                l.type = s.deprecatedEventMap[l.type],
                this._collider.emit(l.type, l),
                l.type = t.event,
                this._collider.emit(l.type, l))
            }
            ,
            e = t,
            (i = [{
                key: "shape",
                get: function() {
                    return this._shape
                }
            }, {
                key: "collider",
                get: function() {
                    return this._collider
                }
            }, {
                key: "attachedRigidBody",
                get: function() {
                    return this._sharedBody.wrappedBody ? this._sharedBody.wrappedBody.rigidBody : null
                }
            }, {
                key: "sharedBody",
                get: function() {
                    return this._sharedBody
                }
            }, {
                key: "material",
                set: function(e) {
                    null == e ? this._shape.material = null : (null == t.idToMaterial[e._uuid] && (t.idToMaterial[e._uuid] = new n.default.Material(e._uuid)),
                    this._shape.material = t.idToMaterial[e._uuid],
                    this._shape.material.friction = e.friction,
                    this._shape.material.restitution = e.restitution)
                }
            }, {
                key: "isTrigger",
                set: function(t) {
                    this._shape.collisionResponse = !t,
                    this._index >= 0 && this._body.updateHasTrigger()
                }
            }, {
                key: "center",
                set: function(t) {
                    this._setCenter(t),
                    this._index >= 0 && (0,
                    s.commitShapeUpdates)(this._body)
                }
            }, {
                key: "_body",
                get: function() {
                    return this._sharedBody.body
                }
            }]) && a(e.prototype, i),
            t
        }();
        i.CannonShape = p,
        p.idToMaterial = {}
    }
    , {
        "../../../../../../external/cannon/cannon": 24,
        "../../framework/util": 23,
        "../cannon-util": 3
    }],
    8: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.CannonSphereShape = void 0;
        var o, n = (o = t("../../../../../../external/cannon/cannon")) && o.__esModule ? o : {
            default: o
        }, r = t("../cannon-util"), s = t("./cannon-shape");
        function a(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        function l(t, e) {
            return (l = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        var h = new cc.Vec3
          , c = function(t) {
            var e, i;
            function o(e) {
                var i;
                return (i = t.call(this) || this)._radius = void 0,
                i._radius = e,
                i._shape = new n.default.Sphere(i._radius),
                i
            }
            i = t,
            (e = o).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            l(e, i);
            var s, c, p = o.prototype;
            return p.onLoad = function() {
                t.prototype.onLoad.call(this),
                this.radius = this.sphereCollider.radius
            }
            ,
            p.setScale = function(e) {
                t.prototype.setScale.call(this, e),
                this.radius = this.sphereCollider.radius
            }
            ,
            s = o,
            (c = [{
                key: "sphereCollider",
                get: function() {
                    return this.collider
                }
            }, {
                key: "sphere",
                get: function() {
                    return this._shape
                }
            }, {
                key: "radius",
                get: function() {
                    return this._radius
                },
                set: function(t) {
                    this.collider.node.getWorldScale(h);
                    var e = h.maxAxis();
                    this.sphere.radius = t * Math.abs(e),
                    this.sphere.updateBoundingSphereRadius(),
                    -1 != this._index && (0,
                    r.commitShapeUpdates)(this._body)
                }
            }]) && a(s.prototype, c),
            o
        }(s.CannonShape);
        i.CannonSphereShape = c
    }
    , {
        "../../../../../../external/cannon/cannon": 24,
        "../cannon-util": 3,
        "./cannon-shape": 7
    }],
    9: [function(t) {
        "use strict";
        t("../cannon/instantiate");
        var e, i = (e = t("../../../../../external/cannon/cannon")) && e.__esModule ? e : {
            default: e
        };
        window && (window.CANNON = i.default)
    }
    , {
        "../../../../../external/cannon/cannon": 24,
        "../cannon/instantiate": 5
    }],
    10: [function(t, e, i) {
        "use strict";
        i.__esModule = !0;
        var o = t("../framework");
        Object.keys(o).forEach(function(t) {
            "default" !== t && "__esModule" !== t && (t in i && i[t] === o[t] || (i[t] = o[t]))
        })
    }
    , {
        "../framework": 17
    }],
    11: [function(t, e, i) {
        "use strict";
        var o, n, r, s, a, l;
        function h(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }
        function c(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        function p(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function u(t, e) {
            return (u = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function d(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }),
            r.enumerable = !!r.enumerable,
            r.configurable = !!r.configurable,
            ("value"in r || r.initializer) && (r.writable = !0),
            r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r),
            n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0,
            r.initializer = void 0),
            void 0 === r.initializer && (Object.defineProperty(t, e, r),
            r = null),
            r
        }
        i.__esModule = !0,
        i.PhysicsMaterial = void 0;
        var y = cc._decorator
          , f = y.ccclass
          , v = y.property
          , m = cc.js.array.fastRemove
          , g = cc.math.equals
          , b = f("cc.PhysicsMaterial")((l = a = function(t) {
            var e, i;
            function o() {
                var e;
                return h(e = t.call(this) || this, "_friction", r, p(e)),
                h(e, "_restitution", s, p(e)),
                cc.EventTarget.call(p(e)),
                o.allMaterials.push(p(e)),
                "" == e._uuid && (e._uuid = "pm_" + o._idCounter++),
                e
            }
            i = t,
            (e = o).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            u(e, i);
            var n, a, l = o.prototype;
            return l.clone = function() {
                var t = new o;
                return t._friction = this._friction,
                t._restitution = this._restitution,
                t
            }
            ,
            l.destroy = function() {
                return !!t.prototype.destroy.call(this) && (m(o.allMaterials, this),
                !0)
            }
            ,
            n = o,
            (a = [{
                key: "friction",
                get: function() {
                    return this._friction
                },
                set: function(t) {
                    g(this._friction, t) || (this._friction = t,
                    this.emit("physics_material_update"))
                }
            }, {
                key: "restitution",
                get: function() {
                    return this._restitution
                },
                set: function(t) {
                    g(this._restitution, t) || (this._restitution = t,
                    this.emit("physics_material_update"))
                }
            }]) && c(n.prototype, a),
            o
        }(cc.Asset),
        a.allMaterials = [],
        a._idCounter = 0,
        r = d((n = l).prototype, "_friction", [v], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return .1
            }
        }),
        s = d(n.prototype, "_restitution", [v], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return .1
            }
        }),
        d(n.prototype, "friction", [v], Object.getOwnPropertyDescriptor(n.prototype, "friction"), n.prototype),
        d(n.prototype, "restitution", [v], Object.getOwnPropertyDescriptor(n.prototype, "restitution"), n.prototype),
        o = n)) || o;
        i.PhysicsMaterial = b,
        cc.js.mixin(b.prototype, cc.EventTarget.prototype),
        cc.PhysicsMaterial = b
    }
    , {}],
    12: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.BoxCollider3D = void 0;
        var o, n, r, s, a, l, h, c = t("../../instance"), p = t("./collider-component");
        function u(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }
        function d(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        function y(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function f(t, e) {
            return (f = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function v(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }),
            r.enumerable = !!r.enumerable,
            r.configurable = !!r.configurable,
            ("value"in r || r.initializer) && (r.writable = !0),
            r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r),
            n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0,
            r.initializer = void 0),
            void 0 === r.initializer && (Object.defineProperty(t, e, r),
            r = null),
            r
        }
        var m = cc._decorator
          , g = m.ccclass
          , b = m.executeInEditMode
          , w = m.executionOrder
          , x = m.menu
          , _ = m.property
          , B = cc.Vec3
          , S = (o = g("cc.BoxCollider3D"),
        n = w(98),
        r = x("i18n:MAIN_MENU.component.physics/Collider/Box 3D"),
        s = _({
            type: cc.Vec3
        }),
        o(a = n(a = r(a = b((v((l = function(t) {
            var e, i, o, n;
            function r() {
                var e;
                return u(e = t.call(this) || this, "_size", h, y(e)),
                e._shape = (0,
                c.createBoxShape)(e._size),
                e
            }
            return i = t,
            (e = r).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            f(e, i),
            o = r,
            (n = [{
                key: "size",
                get: function() {
                    return this._size
                },
                set: function(t) {
                    B.copy(this._size, t),
                    this.boxShape.size = this._size
                }
            }, {
                key: "boxShape",
                get: function() {
                    return this._shape
                }
            }]) && d(o.prototype, n),
            r
        }(p.Collider3D)).prototype, "size", [s], Object.getOwnPropertyDescriptor(l.prototype, "size"), l.prototype),
        h = v(l.prototype, "_size", [_], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return new B(1,1,1)
            }
        }),
        a = l)) || a) || a) || a) || a);
        i.BoxCollider3D = S
    }
    , {
        "../../instance": 18,
        "./collider-component": 13
    }],
    13: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.Collider3D = void 0;
        var o, n, r, s, a, l, h, c, p, u, d = t("../../assets/physics-material");
        function y(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }
        function f(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        function v(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function m(t, e) {
            return (m = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function g(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }),
            r.enumerable = !!r.enumerable,
            r.configurable = !!r.configurable,
            ("value"in r || r.initializer) && (r.writable = !0),
            r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r),
            n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0,
            r.initializer = void 0),
            void 0 === r.initializer && (Object.defineProperty(t, e, r),
            r = null),
            r
        }
        var b = cc._decorator
          , w = b.ccclass
          , x = b.property
          , _ = cc.Vec3
          , B = (o = w("cc.Collider3D"),
        n = x({
            type: d.PhysicsMaterial,
            displayName: "Material",
            displayOrder: -1
        }),
        r = x({
            displayOrder: 0
        }),
        s = x({
            type: cc.Vec3,
            displayOrder: 1
        }),
        a = x({
            type: d.PhysicsMaterial
        }),
        o((g((h = function(t) {
            var e, i;
            function o() {
                var e;
                return (e = t.call(this) || this)._shape = void 0,
                e._isSharedMaterial = !0,
                y(e, "_material", c, v(e)),
                y(e, "_isTrigger", p, v(e)),
                y(e, "_center", u, v(e)),
                cc.EventTarget.call(v(e)),
                e
            }
            i = t,
            (e = o).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            m(e, i);
            var n, r, s = o.prototype;
            return s.on = function() {}
            ,
            s.off = function() {}
            ,
            s.once = function() {}
            ,
            s.emit = function() {}
            ,
            s.__preload = function() {
                this._shape.__preload(this)
            }
            ,
            s.onLoad = function() {
                this.sharedMaterial = null == this._material ? cc.director.getPhysics3DManager().defaultMaterial : this._material,
                this._shape.onLoad()
            }
            ,
            s.onEnable = function() {
                this._shape.onEnable()
            }
            ,
            s.onDisable = function() {
                this._shape.onDisable()
            }
            ,
            s.onDestroy = function() {
                this._material && this._material.off("physics_material_update", this._updateMaterial, this),
                this._shape.onDestroy()
            }
            ,
            s._updateMaterial = function() {
                this._shape.material = this._material
            }
            ,
            n = o,
            (r = [{
                key: "sharedMaterial",
                get: function() {
                    return this._material
                },
                set: function(t) {
                    this.material = t
                }
            }, {
                key: "material",
                get: function() {
                    return this._isSharedMaterial && null != this._material && (this._material.off("physics_material_update", this._updateMaterial, this),
                    this._material = this._material.clone(),
                    this._material.on("physics_material_update", this._updateMaterial, this),
                    this._isSharedMaterial = !1),
                    this._material
                },
                set: function(t) {
                    null != t && null != this._material ? this._material._uuid != t._uuid && (this._material.off("physics_material_update", this._updateMaterial, this),
                    t.on("physics_material_update", this._updateMaterial, this),
                    this._isSharedMaterial = !1,
                    this._material = t) : null != t && null == this._material ? (t.on("physics_material_update", this._updateMaterial, this),
                    this._material = t) : null == t && null != this._material && (this._material.off("physics_material_update", this._updateMaterial, this),
                    this._material = t),
                    this._updateMaterial()
                }
            }, {
                key: "isTrigger",
                get: function() {
                    return this._isTrigger
                },
                set: function(t) {
                    this._isTrigger = t,
                    this._shape.isTrigger = this._isTrigger
                }
            }, {
                key: "center",
                get: function() {
                    return this._center
                },
                set: function(t) {
                    _.copy(this._center, t),
                    this._shape.center = this._center
                }
            }, {
                key: "attachedRigidbody",
                get: function() {
                    return this.shape.attachedRigidBody
                }
            }, {
                key: "shape",
                get: function() {
                    return this._shape
                }
            }, {
                key: "_assertOnload",
                get: function() {
                    var t = 0 == this._isOnLoadCalled;
                    return t && cc.error("Physics Error: Please make sure that the node has been added to the scene"),
                    !t
                }
            }]) && f(n.prototype, r),
            o
        }(cc.Component)).prototype, "sharedMaterial", [n], Object.getOwnPropertyDescriptor(h.prototype, "sharedMaterial"), h.prototype),
        g(h.prototype, "isTrigger", [r], Object.getOwnPropertyDescriptor(h.prototype, "isTrigger"), h.prototype),
        g(h.prototype, "center", [s], Object.getOwnPropertyDescriptor(h.prototype, "center"), h.prototype),
        c = g(h.prototype, "_material", [a], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }),
        p = g(h.prototype, "_isTrigger", [x], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }),
        u = g(h.prototype, "_center", [x], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return new _
            }
        }),
        l = h)) || l);
        i.Collider3D = B,
        cc.js.mixin(B.prototype, cc.EventTarget.prototype)
    }
    , {
        "../../assets/physics-material": 11
    }],
    14: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.SphereCollider3D = void 0;
        var o, n, r, s = t("../../instance"), a = t("./collider-component");
        function l(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }
        function h(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        function c(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function p(t, e) {
            return (p = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function u(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }),
            r.enumerable = !!r.enumerable,
            r.configurable = !!r.configurable,
            ("value"in r || r.initializer) && (r.writable = !0),
            r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r),
            n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0,
            r.initializer = void 0),
            void 0 === r.initializer && (Object.defineProperty(t, e, r),
            r = null),
            r
        }
        var d = cc._decorator
          , y = d.ccclass
          , f = d.executeInEditMode
          , v = d.executionOrder
          , m = d.menu
          , g = d.property
          , b = y("cc.SphereCollider3D")(o = v(98)(o = m("i18n:MAIN_MENU.component.physics/Collider/Sphere 3D")(o = f((u((n = function(t) {
            var e, i, o, n;
            function a() {
                var e;
                return l(e = t.call(this) || this, "_radius", r, c(e)),
                e._shape = (0,
                s.createSphereShape)(e._radius),
                e
            }
            return i = t,
            (e = a).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            p(e, i),
            o = a,
            (n = [{
                key: "radius",
                get: function() {
                    return this._radius
                },
                set: function(t) {
                    this._radius = t,
                    this.sphereShape.radius = this._radius
                }
            }, {
                key: "sphereShape",
                get: function() {
                    return this._shape
                }
            }]) && h(o.prototype, n),
            a
        }(a.Collider3D)).prototype, "radius", [g], Object.getOwnPropertyDescriptor(n.prototype, "radius"), n.prototype),
        r = u(n.prototype, "_radius", [g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return .5
            }
        }),
        o = n)) || o) || o) || o) || o;
        i.SphereCollider3D = b
    }
    , {
        "../../instance": 18,
        "./collider-component": 13
    }],
    15: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.ConstantForce = void 0;
        var o, n, r, s, a, l, h, c, p, u, d, y, f, v, m = t("./rigid-body-component");
        function g(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }
        function b(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        function w(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function x(t, e) {
            return (x = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function _(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }),
            r.enumerable = !!r.enumerable,
            r.configurable = !!r.configurable,
            ("value"in r || r.initializer) && (r.writable = !0),
            r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r),
            n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0,
            r.initializer = void 0),
            void 0 === r.initializer && (Object.defineProperty(t, e, r),
            r = null),
            r
        }
        var B = cc._decorator
          , S = B.ccclass
          , E = B.executeInEditMode
          , M = B.executionOrder
          , C = B.menu
          , A = B.property
          , z = B.requireComponent
          , F = B.disallowMultiple
          , R = cc.Vec3
          , T = (o = S("cc.ConstantForce"),
        n = M(98),
        r = z(m.RigidBody3D),
        s = C("i18n:MAIN_MENU.component.physics/Constant Force 3D"),
        a = A({
            displayOrder: 0
        }),
        l = A({
            displayOrder: 1
        }),
        h = A({
            displayOrder: 2
        }),
        c = A({
            displayOrder: 3
        }),
        o(p = n(p = r(p = s(p = F(p = E((u = function(t) {
            var e, i;
            function o() {
                for (var e, i = arguments.length, o = new Array(i), n = 0; n < i; n++)
                    o[n] = arguments[n];
                return (e = t.call.apply(t, [this].concat(o)) || this)._rigidbody = null,
                g(e, "_force", d, w(e)),
                g(e, "_localForce", y, w(e)),
                g(e, "_torque", f, w(e)),
                g(e, "_localTorque", v, w(e)),
                e._mask = 0,
                e
            }
            i = t,
            (e = o).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            x(e, i);
            var n, r, s = o.prototype;
            return s.onLoad = function() {
                this._rigidbody = this.node.getComponent(m.RigidBody3D),
                this._maskUpdate(this._force, 1),
                this._maskUpdate(this._localForce, 2),
                this._maskUpdate(this._torque, 4),
                this._maskUpdate(this._localTorque, 8)
            }
            ,
            s.lateUpdate = function() {
                null != this._rigidbody && 0 != this._mask && (1 & this._mask && this._rigidbody.applyForce(this._force),
                2 & this._mask && this._rigidbody.applyLocalForce(this.localForce),
                4 & this._mask && this._rigidbody.applyTorque(this._torque),
                8 & this._mask && this._rigidbody.applyLocalTorque(this._localTorque))
            }
            ,
            s._maskUpdate = function(t, e) {
                R.strictEquals(t, R.ZERO) ? this._mask &= ~e : this._mask |= e
            }
            ,
            n = o,
            (r = [{
                key: "force",
                get: function() {
                    return this._force
                },
                set: function(t) {
                    R.copy(this._force, t),
                    this._maskUpdate(this._force, 1)
                }
            }, {
                key: "localForce",
                get: function() {
                    return this._localForce
                },
                set: function(t) {
                    R.copy(this._localForce, t),
                    this._maskUpdate(this.localForce, 2)
                }
            }, {
                key: "torque",
                get: function() {
                    return this._torque
                },
                set: function(t) {
                    R.copy(this._torque, t),
                    this._maskUpdate(this._torque, 4)
                }
            }, {
                key: "localTorque",
                get: function() {
                    return this._localTorque
                },
                set: function(t) {
                    R.copy(this._localTorque, t),
                    this._maskUpdate(this._localTorque, 8)
                }
            }]) && b(n.prototype, r),
            o
        }(cc.Component),
        d = _(u.prototype, "_force", [A], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return new R
            }
        }),
        y = _(u.prototype, "_localForce", [A], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return new R
            }
        }),
        f = _(u.prototype, "_torque", [A], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return new R
            }
        }),
        v = _(u.prototype, "_localTorque", [A], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return new R
            }
        }),
        _(u.prototype, "force", [a], Object.getOwnPropertyDescriptor(u.prototype, "force"), u.prototype),
        _(u.prototype, "localForce", [l], Object.getOwnPropertyDescriptor(u.prototype, "localForce"), u.prototype),
        _(u.prototype, "torque", [h], Object.getOwnPropertyDescriptor(u.prototype, "torque"), u.prototype),
        _(u.prototype, "localTorque", [c], Object.getOwnPropertyDescriptor(u.prototype, "localTorque"), u.prototype),
        p = u)) || p) || p) || p) || p) || p) || p);
        i.ConstantForce = T
    }
    , {
        "./rigid-body-component": 16
    }],
    16: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.RigidBody3D = void 0;
        var o, n, r, s, a, l, h, c, p, u, d, y, f, v, m, g, b, w, x, _, B, S = t("../instance");
        function E(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }
        function M(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        function C(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function A(t, e) {
            return (A = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function z(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }),
            r.enumerable = !!r.enumerable,
            r.configurable = !!r.configurable,
            ("value"in r || r.initializer) && (r.writable = !0),
            r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r),
            n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0,
            r.initializer = void 0),
            void 0 === r.initializer && (Object.defineProperty(t, e, r),
            r = null),
            r
        }
        var F = cc._decorator
          , R = F.ccclass
          , T = F.disallowMultiple
          , P = F.executeInEditMode
          , q = F.executionOrder
          , O = F.menu
          , I = F.property
          , V = cc.Vec3
          , j = (o = R("cc.RigidBody3D"),
        n = q(99),
        r = O("i18n:MAIN_MENU.component.physics/Rigid Body 3D"),
        s = I({
            displayOrder: 0
        }),
        a = I({
            displayOrder: 1
        }),
        l = I({
            displayOrder: 2
        }),
        h = I({
            displayOrder: 3
        }),
        c = I({
            displayOrder: 4
        }),
        p = I({
            displayOrder: 5
        }),
        u = I({
            displayOrder: 6
        }),
        d = I({
            displayOrder: 7
        }),
        o(y = n(y = r(y = P(y = T((z((f = function(t) {
            var e, i;
            function o() {
                var e;
                return (e = t.call(this) || this)._body = void 0,
                e._allowSleep = !0,
                E(e, "_mass", v, C(e)),
                E(e, "_linearDamping", m, C(e)),
                E(e, "_angularDamping", g, C(e)),
                E(e, "_fixedRotation", b, C(e)),
                E(e, "_isKinematic", w, C(e)),
                E(e, "_useGravity", x, C(e)),
                E(e, "_linearFactor", _, C(e)),
                E(e, "_angularFactor", B, C(e)),
                e._body = (0,
                S.createRigidBody)(),
                e
            }
            i = t,
            (e = o).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            A(e, i);
            var n, r, s = o.prototype;
            return s.__preload = function() {
                this._body.__preload(this)
            }
            ,
            s.onEnable = function() {
                this._body.onEnable()
            }
            ,
            s.onDisable = function() {
                this._body.onDisable()
            }
            ,
            s.onDestroy = function() {
                this._body.onDestroy()
            }
            ,
            s.applyForce = function(t, e) {
                this._assertOnload && this._body.applyForce(t, e)
            }
            ,
            s.applyLocalForce = function(t, e) {
                this._assertOnload && this._body.applyLocalForce(t, e)
            }
            ,
            s.applyImpulse = function(t, e) {
                this._assertOnload && this._body.applyImpulse(t, e)
            }
            ,
            s.applyLocalImpulse = function(t, e) {
                this._assertOnload && this._body.applyLocalImpulse(t, e)
            }
            ,
            s.applyTorque = function(t) {
                this._assertOnload && this._body.applyTorque(t)
            }
            ,
            s.applyLocalTorque = function(t) {
                this._assertOnload && this._body.applyLocalTorque(t)
            }
            ,
            s.wakeUp = function() {
                this._assertOnload && this._body.wakeUp()
            }
            ,
            s.sleep = function() {
                this._assertOnload && this._body.sleep()
            }
            ,
            s.getLinearVelocity = function(t) {
                this._assertOnload && this._body.getLinearVelocity(t)
            }
            ,
            s.setLinearVelocity = function(t) {
                this._assertOnload && this._body.setLinearVelocity(t)
            }
            ,
            s.getAngularVelocity = function(t) {
                this._assertOnload && this._body.getAngularVelocity(t)
            }
            ,
            s.setAngularVelocity = function(t) {
                this._assertOnload && this._body.setAngularVelocity(t)
            }
            ,
            n = o,
            (r = [{
                key: "allowSleep",
                get: function() {
                    return this._allowSleep
                },
                set: function(t) {
                    this._allowSleep = t,
                    this._body.allowSleep = t
                }
            }, {
                key: "mass",
                get: function() {
                    return this._mass
                },
                set: function(t) {
                    this._mass = t,
                    this._body.mass = t
                }
            }, {
                key: "linearDamping",
                get: function() {
                    return this._linearDamping
                },
                set: function(t) {
                    this._linearDamping = t,
                    this._body.linearDamping = t
                }
            }, {
                key: "angularDamping",
                get: function() {
                    return this._angularDamping
                },
                set: function(t) {
                    this._angularDamping = t,
                    this._body.angularDamping = t
                }
            }, {
                key: "isKinematic",
                get: function() {
                    return this._isKinematic
                },
                set: function(t) {
                    this._isKinematic = t,
                    this._body.isKinematic = t
                }
            }, {
                key: "useGravity",
                get: function() {
                    return this._useGravity
                },
                set: function(t) {
                    this._useGravity = t,
                    this._body.useGravity = t
                }
            }, {
                key: "fixedRotation",
                get: function() {
                    return this._fixedRotation
                },
                set: function(t) {
                    this._fixedRotation = t,
                    this._body.fixedRotation = t
                }
            }, {
                key: "linearFactor",
                get: function() {
                    return this._linearFactor
                },
                set: function(t) {
                    V.copy(this._linearFactor, t),
                    this._body.linearFactor = this._linearFactor
                }
            }, {
                key: "angularFactor",
                get: function() {
                    return this._angularFactor
                },
                set: function(t) {
                    V.copy(this._angularFactor, t),
                    this._body.angularFactor = this._angularFactor
                }
            }, {
                key: "isAwake",
                get: function() {
                    return !!this._assertOnload && this._body.isAwake
                }
            }, {
                key: "isSleepy",
                get: function() {
                    return !!this._assertOnload && this._body.isSleepy
                }
            }, {
                key: "isSleeping",
                get: function() {
                    return !!this._assertOnload && this._body.isSleeping
                }
            }, {
                key: "rigidBody",
                get: function() {
                    return this._body
                }
            }, {
                key: "_assertOnload",
                get: function() {
                    var t = 0 == this._isOnLoadCalled;
                    return t && cc.error("Physics Error: Please make sure that the node has been added to the scene"),
                    !t
                }
            }]) && M(n.prototype, r),
            o
        }(cc.Component)).prototype, "mass", [s], Object.getOwnPropertyDescriptor(f.prototype, "mass"), f.prototype),
        z(f.prototype, "linearDamping", [a], Object.getOwnPropertyDescriptor(f.prototype, "linearDamping"), f.prototype),
        z(f.prototype, "angularDamping", [l], Object.getOwnPropertyDescriptor(f.prototype, "angularDamping"), f.prototype),
        z(f.prototype, "isKinematic", [h], Object.getOwnPropertyDescriptor(f.prototype, "isKinematic"), f.prototype),
        z(f.prototype, "useGravity", [c], Object.getOwnPropertyDescriptor(f.prototype, "useGravity"), f.prototype),
        z(f.prototype, "fixedRotation", [p], Object.getOwnPropertyDescriptor(f.prototype, "fixedRotation"), f.prototype),
        z(f.prototype, "linearFactor", [u], Object.getOwnPropertyDescriptor(f.prototype, "linearFactor"), f.prototype),
        z(f.prototype, "angularFactor", [d], Object.getOwnPropertyDescriptor(f.prototype, "angularFactor"), f.prototype),
        v = z(f.prototype, "_mass", [I], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 10
            }
        }),
        m = z(f.prototype, "_linearDamping", [I], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return .1
            }
        }),
        g = z(f.prototype, "_angularDamping", [I], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return .1
            }
        }),
        b = z(f.prototype, "_fixedRotation", [I], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }),
        w = z(f.prototype, "_isKinematic", [I], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }),
        x = z(f.prototype, "_useGravity", [I], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !0
            }
        }),
        _ = z(f.prototype, "_linearFactor", [I], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return new V(1,1,1)
            }
        }),
        B = z(f.prototype, "_angularFactor", [I], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return new V(1,1,1)
            }
        }),
        y = f)) || y) || y) || y) || y) || y);
        i.RigidBody3D = j
    }
    , {
        "../instance": 18
    }],
    17: [function(t, e, i) {
        "use strict";
        i.__esModule = !0;
        var o = t("./physics-manager");
        i.Physics3DManager = o.Physics3DManager;
        var n = t("./physics-ray-result");
        i.PhysicsRayResult = n.PhysicsRayResult;
        var r = t("./components/collider/box-collider-component");
        i.BoxCollider3D = r.BoxCollider3D;
        var s = t("./components/collider/collider-component");
        i.Collider3D = s.Collider3D;
        var a = t("./components/collider/sphere-collider-component");
        i.SphereCollider3D = a.SphereCollider3D;
        var l = t("./components/rigid-body-component");
        i.RigidBody3D = l.RigidBody3D;
        var h = t("./components/constant-force")
          , c = t("./assets/physics-material");
        i.PhysicsMaterial = c.PhysicsMaterial,
        cc.Physics3DManager = o.Physics3DManager,
        cc.Collider3D = s.Collider3D,
        cc.BoxCollider3D = r.BoxCollider3D,
        cc.SphereCollider3D = a.SphereCollider3D,
        cc.RigidBody3D = l.RigidBody3D,
        cc.PhysicsRayResult = n.PhysicsRayResult,
        cc.ConstantForce = h.ConstantForce
    }
    , {
        "./assets/physics-material": 11,
        "./components/collider/box-collider-component": 12,
        "./components/collider/collider-component": 13,
        "./components/collider/sphere-collider-component": 14,
        "./components/constant-force": 15,
        "./components/rigid-body-component": 16,
        "./physics-manager": 20,
        "./physics-ray-result": 21
    }],
    18: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.createBoxShape = function(t) {
            return new o.BoxShape(t)
        }
        ,
        i.createPhysicsWorld = function() {
            return new o.PhysicsWorld
        }
        ,
        i.createRigidBody = function() {
            return new o.RigidBody
        }
        ,
        i.createSphereShape = function(t) {
            return new o.SphereShape(t)
        }
        ;
        var o = t("./physics-selector")
    }
    , {
        "./physics-selector": 22
    }],
    19: [function(t, e, i) {
        "use strict";
        var o;
        i.__esModule = !0,
        i.ERigidBodyType = void 0,
        i.ERigidBodyType = o,
        function(t) {
            t[t.DYNAMIC = 1] = "DYNAMIC",
            t[t.STATIC = 2] = "STATIC",
            t[t.KINEMATIC = 4] = "KINEMATIC"
        }(o || (i.ERigidBodyType = o = {}))
    }
    , {}],
    20: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.Physics3DManager = void 0;
        var o, n, r, s, a, l, h, c, p = t("./instance"), u = t("./assets/physics-material"), d = t("./physics-ray-result");
        function y(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }
        function f(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        function v(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }),
            r.enumerable = !!r.enumerable,
            r.configurable = !!r.configurable,
            ("value"in r || r.initializer) && (r.writable = !0),
            r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r),
            n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0,
            r.initializer = void 0),
            void 0 === r.initializer && (Object.defineProperty(t, e, r),
            r = null),
            r
        }
        var m = cc._decorator
          , g = m.property
          , b = (0,
        m.ccclass)("cc.Physics3DManager")((r = v((n = function() {
            function t() {
                this.physicsWorld = void 0,
                this.raycastClosestResult = new d.PhysicsRayResult,
                this.raycastResults = [],
                y(this, "_enabled", r, this),
                y(this, "_allowSleep", s, this),
                y(this, "_gravity", a, this),
                y(this, "_maxSubStep", l, this),
                y(this, "_fixedTime", h, this),
                y(this, "_useFixedTime", c, this),
                this.useAccumulator = !1,
                this._accumulator = 0,
                this.useFixedDigit = !1,
                this.useInternalTime = !1,
                this.fixDigits = {
                    position: 5,
                    rotation: 12,
                    timeNow: 3
                },
                this._deltaTime = 0,
                this._lastTime = 0,
                this._material = null,
                this.raycastOptions = {
                    groupIndex: -1,
                    queryTrigger: !0,
                    maxDistance: 1 / 0
                },
                this.raycastResultPool = new cc.RecyclePool(function() {
                    return new d.PhysicsRayResult
                }
                ,1),
                cc.director._scheduler && cc.director._scheduler.enableForTarget(this),
                this.physicsWorld = (0,
                p.createPhysicsWorld)(),
                this._lastTime = performance.now(),
                this.gravity = this._gravity,
                this.allowSleep = this._allowSleep,
                this._material = new u.PhysicsMaterial,
                this._material.friction = .1,
                this._material.restitution = .1,
                this._material.on("physics_material_update", this._updateMaterial, this),
                this.physicsWorld.defaultMaterial = this._material
            }
            var e, i, o = t.prototype;
            return o.update = function(t) {
                if (this._enabled) {
                    if (this.useInternalTime) {
                        var e = parseFloat(performance.now().toFixed(this.fixDigits.timeNow));
                        this._deltaTime = e > this._lastTime ? (e - this._lastTime) / 1e3 : 0,
                        this._lastTime = e
                    } else
                        this._deltaTime = t;
                    if (cc.director.emit(cc.Director.EVENT_BEFORE_PHYSICS),
                    this._useFixedTime)
                        this.physicsWorld.step(this._fixedTime);
                    else if (this.useAccumulator) {
                        var i = 0;
                        for (this._accumulator += this._deltaTime; i < this._maxSubStep && this._accumulator > this._fixedTime; )
                            this.physicsWorld.step(this._fixedTime),
                            this._accumulator -= this._fixedTime,
                            i++
                    } else
                        this.physicsWorld.step(this._fixedTime, this._deltaTime, this._maxSubStep);
                    cc.director.emit(cc.Director.EVENT_AFTER_PHYSICS)
                }
            }
            ,
            o.raycast = function(t, e, i, o) {
                if (void 0 === e && (e = 0),
                void 0 === i && (i = 1 / 0),
                void 0 === o && (o = !0),
                this.raycastResultPool.reset(),
                this.raycastResults.length = 0,
                "string" == typeof e) {
                    var n = cc.game.groupList.indexOf(e);
                    -1 == n && (n = 0),
                    this.raycastOptions.groupIndex = n
                } else
                    this.raycastOptions.groupIndex = e;
                return this.raycastOptions.maxDistance = i,
                this.raycastOptions.queryTrigger = o,
                this.physicsWorld.raycast(t, this.raycastOptions, this.raycastResultPool, this.raycastResults) ? this.raycastResults : null
            }
            ,
            o.raycastClosest = function(t, e, i, o) {
                if (void 0 === e && (e = 0),
                void 0 === i && (i = 1 / 0),
                void 0 === o && (o = !0),
                "string" == typeof e) {
                    var n = cc.game.groupList.indexOf(e);
                    -1 == n && (n = 0),
                    this.raycastOptions.groupIndex = n
                } else
                    this.raycastOptions.groupIndex = e;
                return this.raycastOptions.maxDistance = i,
                this.raycastOptions.queryTrigger = o,
                this.physicsWorld.raycastClosest(t, this.raycastOptions, this.raycastClosestResult) ? this.raycastClosestResult : null
            }
            ,
            o._updateMaterial = function() {
                this.physicsWorld.defaultMaterial = this._material
            }
            ,
            e = t,
            (i = [{
                key: "enabled",
                get: function() {
                    return this._enabled
                },
                set: function(t) {
                    this._enabled = t
                }
            }, {
                key: "allowSleep",
                get: function() {
                    return this._allowSleep
                },
                set: function(t) {
                    this._allowSleep = t,
                    this.physicsWorld.allowSleep = this._allowSleep
                }
            }, {
                key: "maxSubStep",
                get: function() {
                    return this._maxSubStep
                },
                set: function(t) {
                    this._maxSubStep = t
                }
            }, {
                key: "deltaTime",
                get: function() {
                    return this._fixedTime
                },
                set: function(t) {
                    this._fixedTime = t
                }
            }, {
                key: "useFixedTime",
                get: function() {
                    return this._useFixedTime
                },
                set: function(t) {
                    this._useFixedTime = t
                }
            }, {
                key: "gravity",
                get: function() {
                    return this._gravity
                },
                set: function(t) {
                    this._gravity.set(t),
                    this.physicsWorld.gravity = t
                }
            }, {
                key: "defaultMaterial",
                get: function() {
                    return this._material
                }
            }]) && f(e.prototype, i),
            t
        }()).prototype, "_enabled", [g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }),
        s = v(n.prototype, "_allowSleep", [g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !0
            }
        }),
        a = v(n.prototype, "_gravity", [g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return new cc.Vec3(0,-10,0)
            }
        }),
        l = v(n.prototype, "_maxSubStep", [g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 1
            }
        }),
        h = v(n.prototype, "_fixedTime", [g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 1 / 60
            }
        }),
        c = v(n.prototype, "_useFixedTime", [g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !0
            }
        }),
        o = n)) || o;
        i.Physics3DManager = b
    }
    , {
        "./assets/physics-material": 11,
        "./instance": 18,
        "./physics-ray-result": 21
    }],
    21: [function(t, e, i) {
        "use strict";
        function o(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        i.__esModule = !0,
        i.PhysicsRayResult = void 0;
        var n = cc.Vec3
          , r = function() {
            function t() {
                this._hitPoint = new n,
                this._distance = 0,
                this._collidier = null
            }
            var e, i, r = t.prototype;
            return r._assign = function(t, e, i) {
                n.copy(this._hitPoint, t),
                this._distance = e,
                this._collidier = i
            }
            ,
            r.clone = function() {
                var e = new t;
                return n.copy(e._hitPoint, this._hitPoint),
                e._distance = this._distance,
                e._collidier = this._collidier,
                e
            }
            ,
            e = t,
            (i = [{
                key: "hitPoint",
                get: function() {
                    return this._hitPoint
                }
            }, {
                key: "distance",
                get: function() {
                    return this._distance
                }
            }, {
                key: "collider",
                get: function() {
                    return this._collidier
                }
            }]) && o(e.prototype, i),
            t
        }();
        i.PhysicsRayResult = r
    }
    , {}],
    22: [function(t, e, i) {
        "use strict";
        var o, n, r, s;
        i.__esModule = !0,
        i.SphereShape = i.RigidBody = i.PhysicsWorld = i.BoxShape = void 0,
        i.instantiate = function(t, e, a, l) {
            i.BoxShape = o = t,
            i.SphereShape = n = e,
            i.RigidBody = r = a,
            i.PhysicsWorld = s = l
        }
        ,
        i.BoxShape = o,
        i.SphereShape = n,
        i.RigidBody = r,
        i.PhysicsWorld = s
    }
    , {}],
    23: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i.clearNodeTransformDirtyFlag = function() {
            for (var t in w) {
                var e = w[t];
                e._localMatDirty &= ~r,
                e._localMatDirty & s || (e._worldMatDirty = !1,
                e._renderFlag &= ~a)
            }
            w = {},
            d.length = 0
        }
        ,
        i.clearNodeTransformRecord = function() {
            w = {},
            d.length = 0
        }
        ,
        i.getWrap = function(t) {
            return t.__cc_wrapper__
        }
        ,
        i.setWrap = function(t, e) {
            t.__cc_wrapper__ = e
        }
        ,
        i.stringfyQuat = function(t) {
            return "(x: " + t.x + ", y: " + t.y + ", z: " + t.z + ", w: " + t.w + ")"
        }
        ,
        i.stringfyVec3 = function(t) {
            return "(x: " + t.x + ", y: " + t.y + ", z: " + t.z + ")"
        }
        ,
        i.updateWorldRT = function(t, e, i) {
            var o = t.parent;
            o ? (x(o, !0),
            c.transformMat4(y, e, h.invert(b, o._worldMatrix)),
            p.multiply(g, p.conjugate(g, o.__wrot), i),
            t.setPosition(y),
            t.setRotation(g)) : (t.setPosition(e),
            t.setRotation(i))
        }
        ,
        i.updateWorldTransform = x,
        i.worldDirty = function(t) {
            for (var e = t; e; ) {
                if (e._worldMatDirty)
                    return !0;
                e = e._parent
            }
            return !1
        }
        ;
        var o = cc.Node._LocalDirtyFlag
          , n = o.PHYSICS_TRS
          , r = o.ALL_TRS
          , s = o.SKEW
          , a = cc.RenderFlow.FLAG_TRANSFORM
          , l = cc.Mat3
          , h = cc.Mat4
          , c = cc.Vec3
          , p = cc.Quat
          , u = cc.Trs
          , d = []
          , y = cc.v3()
          , f = cc.quat()
          , v = new l
          , m = v.m
          , g = cc.quat()
          , b = cc.mat4()
          , w = {};
        function x(t, e) {
            void 0 === e && (e = !1);
            for (var i, o, r, s, a, b, x, _, B = t, S = 0, E = !1, M = 0; B; ) {
                if (!e && w[B._id]) {
                    M |= B._localMatDirty & n,
                    E = E || !!M;
                    break
                }
                d[S++] = B,
                B._localMatDirty & n && (E = !0),
                B = B._parent
            }
            if (!E)
                return !1;
            for (d.length = S; S; )
                i = d[--S],
                !e && (w[i._id] = i),
                o = i._worldMatrix,
                a = i._matrix,
                s = i._trs,
                b = i.__wpos = i.__wpos || cc.v3(),
                x = i.__wrot = i.__wrot || cc.quat(),
                _ = i.__wscale = i.__wscale || cc.v3(),
                i._localMatDirty & n && u.toMat4(a, s),
                i._localMatDirty |= M,
                (M |= i._localMatDirty & n) & n ? (B ? (r = B._worldMatrix,
                u.toPosition(y, s),
                c.transformMat4(b, y, r),
                h.multiply(o, r, a),
                u.toRotation(f, s),
                p.multiply(x, B.__wrot, f),
                l.fromQuat(v, p.conjugate(g, x)),
                l.multiplyMat4(v, v, o),
                _.x = m[0],
                _.y = m[4],
                _.z = m[8]) : (u.toPosition(b, s),
                u.toRotation(x, s),
                u.toScale(_, s),
                h.copy(o, a)),
                B = i) : B = i;
            return !0
        }
    }
    , {}],
    24: [function(t, e, i) {
        (function(o) {
            "use strict";
            !function(t) {
                if ("object" == typeof i && void 0 !== e)
                    e.exports = t();
                else if ("function" == typeof define && define.amd)
                    define([], t);
                else {
                    var n;
                    "undefined" != typeof window ? n = window : void 0 !== o ? n = o : "undefined" != typeof self && (n = self),
                    n.CANNON = t()
                }
            }(function() {
                return function e(i, o, n) {
                    function r(a, l) {
                        if (!o[a]) {
                            if (!i[a]) {
                                var h = "function" == typeof t && t;
                                if (!l && h)
                                    return h(a, !0);
                                if (s)
                                    return s(a, !0);
                                throw new Error("Cannot find module '" + a + "'")
                            }
                            var c = o[a] = {
                                exports: {}
                            };
                            i[a][0].call(c.exports, function(t) {
                                return r(i[a][1][t] || t)
                            }, c, c.exports, e, i, o, n)
                        }
                        return o[a].exports
                    }
                    for (var s = "function" == typeof t && t, a = 0; a < n.length; a++)
                        r(n[a]);
                    return r
                }({
                    1: [function(t, e) {
                        e.exports = {
                            name: "@cocos/cannon",
                            version: "1.1.1-exp.3",
                            description: "A lightweight 3D physics engine written in JavaScript.",
                            homepage: "https://github.com/cocos-creator/cannon.js",
                            author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se), JayceLai",
                            keywords: ["cannon.js", "cocos", "creator", "physics", "engine", "3d"],
                            scripts: {
                                build: "grunt && npm run preprocess && grunt addLicense && grunt addDate",
                                preprocess: "node node_modules/uglify-js/bin/uglifyjs build/cannon.js -o build/cannon.min.js -c -m"
                            },
                            main: "./build/cannon.min.js",
                            engines: {
                                node: "*"
                            },
                            repository: {
                                type: "git",
                                url: "https://github.com/cocos-creator/cannon.js.git"
                            },
                            bugs: {
                                url: "https://github.com/cocos-creator/cannon.js/issues"
                            },
                            licenses: [{
                                type: "MIT"
                            }],
                            devDependencies: {
                                jshint: "latest",
                                "uglify-js": "latest",
                                nodeunit: "^0.9.0",
                                grunt: "~0.4.0",
                                "grunt-contrib-jshint": "~0.1.1",
                                "grunt-contrib-nodeunit": "^0.4.1",
                                "grunt-contrib-concat": "~0.1.3",
                                "grunt-contrib-uglify": "^0.5.1",
                                "grunt-browserify": "^2.1.4",
                                "grunt-contrib-yuidoc": "^0.5.2",
                                browserify: "*"
                            },
                            dependencies: {}
                        }
                    }
                    , {}],
                    2: [function(t, e) {
                        e.exports = {
                            version: t("../package.json").version,
                            AABB: t("./collision/AABB"),
                            ArrayCollisionMatrix: t("./collision/ArrayCollisionMatrix"),
                            Body: t("./objects/Body"),
                            Box: t("./shapes/Box"),
                            Broadphase: t("./collision/Broadphase"),
                            Constraint: t("./constraints/Constraint"),
                            ContactEquation: t("./equations/ContactEquation"),
                            Narrowphase: t("./world/Narrowphase"),
                            ConeTwistConstraint: t("./constraints/ConeTwistConstraint"),
                            ContactMaterial: t("./material/ContactMaterial"),
                            ConvexPolyhedron: t("./shapes/ConvexPolyhedron"),
                            Cylinder: t("./shapes/Cylinder"),
                            DistanceConstraint: t("./constraints/DistanceConstraint"),
                            Equation: t("./equations/Equation"),
                            EventTarget: t("./utils/EventTarget"),
                            FrictionEquation: t("./equations/FrictionEquation"),
                            GSSolver: t("./solver/GSSolver"),
                            GridBroadphase: t("./collision/GridBroadphase"),
                            Heightfield: t("./shapes/Heightfield"),
                            HingeConstraint: t("./constraints/HingeConstraint"),
                            LockConstraint: t("./constraints/LockConstraint"),
                            Mat3: t("./math/Mat3"),
                            Material: t("./material/Material"),
                            NaiveBroadphase: t("./collision/NaiveBroadphase"),
                            ObjectCollisionMatrix: t("./collision/ObjectCollisionMatrix"),
                            Pool: t("./utils/Pool"),
                            Particle: t("./shapes/Particle"),
                            Plane: t("./shapes/Plane"),
                            PointToPointConstraint: t("./constraints/PointToPointConstraint"),
                            Quaternion: t("./math/Quaternion"),
                            Ray: t("./collision/Ray"),
                            RaycastVehicle: t("./objects/RaycastVehicle"),
                            RaycastResult: t("./collision/RaycastResult"),
                            RigidVehicle: t("./objects/RigidVehicle"),
                            RotationalEquation: t("./equations/RotationalEquation"),
                            RotationalMotorEquation: t("./equations/RotationalMotorEquation"),
                            SAPBroadphase: t("./collision/SAPBroadphase"),
                            SPHSystem: t("./objects/SPHSystem"),
                            Shape: t("./shapes/Shape"),
                            Solver: t("./solver/Solver"),
                            Sphere: t("./shapes/Sphere"),
                            SplitSolver: t("./solver/SplitSolver"),
                            Spring: t("./objects/Spring"),
                            Transform: t("./math/Transform"),
                            Trimesh: t("./shapes/Trimesh"),
                            Vec3: t("./math/Vec3"),
                            Vec3Pool: t("./utils/Vec3Pool"),
                            World: t("./world/World"),
                            Octree: t("./utils/Octree"),
                            CMath: t("./math/CMath")
                        }
                    }
                    , {
                        "../package.json": 1,
                        "./collision/AABB": 3,
                        "./collision/ArrayCollisionMatrix": 4,
                        "./collision/Broadphase": 5,
                        "./collision/GridBroadphase": 6,
                        "./collision/NaiveBroadphase": 7,
                        "./collision/ObjectCollisionMatrix": 8,
                        "./collision/Ray": 10,
                        "./collision/RaycastResult": 11,
                        "./collision/SAPBroadphase": 12,
                        "./constraints/ConeTwistConstraint": 13,
                        "./constraints/Constraint": 14,
                        "./constraints/DistanceConstraint": 15,
                        "./constraints/HingeConstraint": 16,
                        "./constraints/LockConstraint": 17,
                        "./constraints/PointToPointConstraint": 18,
                        "./equations/ContactEquation": 20,
                        "./equations/Equation": 21,
                        "./equations/FrictionEquation": 22,
                        "./equations/RotationalEquation": 23,
                        "./equations/RotationalMotorEquation": 24,
                        "./material/ContactMaterial": 25,
                        "./material/Material": 26,
                        "./math/CMath": 27,
                        "./math/Mat3": 29,
                        "./math/Quaternion": 30,
                        "./math/Transform": 31,
                        "./math/Vec3": 32,
                        "./objects/Body": 33,
                        "./objects/RaycastVehicle": 34,
                        "./objects/RigidVehicle": 35,
                        "./objects/SPHSystem": 36,
                        "./objects/Spring": 37,
                        "./shapes/Box": 39,
                        "./shapes/ConvexPolyhedron": 40,
                        "./shapes/Cylinder": 41,
                        "./shapes/Heightfield": 42,
                        "./shapes/Particle": 43,
                        "./shapes/Plane": 44,
                        "./shapes/Shape": 45,
                        "./shapes/Sphere": 46,
                        "./shapes/Trimesh": 47,
                        "./solver/GSSolver": 48,
                        "./solver/Solver": 49,
                        "./solver/SplitSolver": 50,
                        "./utils/EventTarget": 51,
                        "./utils/Octree": 52,
                        "./utils/Pool": 53,
                        "./utils/Vec3Pool": 56,
                        "./world/Narrowphase": 57,
                        "./world/World": 58
                    }],
                    3: [function(t, e) {
                        var i = t("../math/Vec3");
                        function o(t) {
                            t = t || {},
                            this.lowerBound = new i,
                            t.lowerBound && this.lowerBound.copy(t.lowerBound),
                            this.upperBound = new i,
                            t.upperBound && this.upperBound.copy(t.upperBound)
                        }
                        t("../utils/Utils"),
                        e.exports = o;
                        var n = new i;
                        o.prototype.setFromPoints = function(t, e, i, o) {
                            var r = this.lowerBound
                              , s = this.upperBound
                              , a = i;
                            r.copy(t[0]),
                            a && a.vmult(r, r),
                            s.copy(r);
                            for (var l = 1; l < t.length; l++) {
                                var h = t[l];
                                a && (a.vmult(h, n),
                                h = n),
                                h.x > s.x && (s.x = h.x),
                                h.x < r.x && (r.x = h.x),
                                h.y > s.y && (s.y = h.y),
                                h.y < r.y && (r.y = h.y),
                                h.z > s.z && (s.z = h.z),
                                h.z < r.z && (r.z = h.z)
                            }
                            return e && (e.vadd(r, r),
                            e.vadd(s, s)),
                            o && (r.x -= o,
                            r.y -= o,
                            r.z -= o,
                            s.x += o,
                            s.y += o,
                            s.z += o),
                            this
                        }
                        ,
                        o.prototype.copy = function(t) {
                            return this.lowerBound.copy(t.lowerBound),
                            this.upperBound.copy(t.upperBound),
                            this
                        }
                        ,
                        o.prototype.clone = function() {
                            return (new o).copy(this)
                        }
                        ,
                        o.prototype.extend = function(t) {
                            this.lowerBound.x = Math.min(this.lowerBound.x, t.lowerBound.x),
                            this.upperBound.x = Math.max(this.upperBound.x, t.upperBound.x),
                            this.lowerBound.y = Math.min(this.lowerBound.y, t.lowerBound.y),
                            this.upperBound.y = Math.max(this.upperBound.y, t.upperBound.y),
                            this.lowerBound.z = Math.min(this.lowerBound.z, t.lowerBound.z),
                            this.upperBound.z = Math.max(this.upperBound.z, t.upperBound.z)
                        }
                        ,
                        o.prototype.overlaps = function(t) {
                            var e = this.lowerBound
                              , i = this.upperBound
                              , o = t.lowerBound
                              , n = t.upperBound
                              , r = o.x <= i.x && i.x <= n.x || e.x <= n.x && n.x <= i.x
                              , s = o.y <= i.y && i.y <= n.y || e.y <= n.y && n.y <= i.y
                              , a = o.z <= i.z && i.z <= n.z || e.z <= n.z && n.z <= i.z;
                            return r && s && a
                        }
                        ,
                        o.prototype.volume = function() {
                            var t = this.lowerBound
                              , e = this.upperBound;
                            return (e.x - t.x) * (e.y - t.y) * (e.z - t.z)
                        }
                        ,
                        o.prototype.contains = function(t) {
                            var e = this.lowerBound
                              , i = this.upperBound
                              , o = t.lowerBound
                              , n = t.upperBound;
                            return e.x <= o.x && i.x >= n.x && e.y <= o.y && i.y >= n.y && e.z <= o.z && i.z >= n.z
                        }
                        ,
                        o.prototype.getCorners = function(t, e, i, o, n, r, s, a) {
                            var l = this.lowerBound
                              , h = this.upperBound;
                            t.copy(l),
                            e.set(h.x, l.y, l.z),
                            i.set(h.x, h.y, l.z),
                            o.set(l.x, h.y, h.z),
                            n.set(h.x, l.y, h.z),
                            r.set(l.x, h.y, l.z),
                            s.set(l.x, l.y, h.z),
                            a.copy(h)
                        }
                        ;
                        var r = [new i, new i, new i, new i, new i, new i, new i, new i];
                        o.prototype.toLocalFrame = function(t, e) {
                            var i = r
                              , o = i[0]
                              , n = i[1]
                              , s = i[2]
                              , a = i[3]
                              , l = i[4]
                              , h = i[5]
                              , c = i[6]
                              , p = i[7];
                            this.getCorners(o, n, s, a, l, h, c, p);
                            for (var u = 0; 8 !== u; u++) {
                                var d = i[u];
                                t.pointToLocal(d, d)
                            }
                            return e.setFromPoints(i)
                        }
                        ,
                        o.prototype.toWorldFrame = function(t, e) {
                            var i = r
                              , o = i[0]
                              , n = i[1]
                              , s = i[2]
                              , a = i[3]
                              , l = i[4]
                              , h = i[5]
                              , c = i[6]
                              , p = i[7];
                            this.getCorners(o, n, s, a, l, h, c, p);
                            for (var u = 0; 8 !== u; u++) {
                                var d = i[u];
                                t.pointToWorld(d, d)
                            }
                            return e.setFromPoints(i)
                        }
                        ,
                        o.prototype.overlapsRay = function(t) {
                            var e = 1 / t._direction.x
                              , i = 1 / t._direction.y
                              , o = 1 / t._direction.z
                              , n = (this.lowerBound.x - t.from.x) * e
                              , r = (this.upperBound.x - t.from.x) * e
                              , s = (this.lowerBound.y - t.from.y) * i
                              , a = (this.upperBound.y - t.from.y) * i
                              , l = (this.lowerBound.z - t.from.z) * o
                              , h = (this.upperBound.z - t.from.z) * o
                              , c = Math.max(Math.max(Math.min(n, r), Math.min(s, a)), Math.min(l, h))
                              , p = Math.min(Math.min(Math.max(n, r), Math.max(s, a)), Math.max(l, h));
                            return !(p < 0 || c > p)
                        }
                    }
                    , {
                        "../math/Vec3": 32,
                        "../utils/Utils": 55
                    }],
                    4: [function(t, e) {
                        function i() {
                            this.matrix = []
                        }
                        e.exports = i,
                        i.prototype.get = function(t, e) {
                            if (t = t.index,
                            (e = e.index) > t) {
                                var i = e;
                                e = t,
                                t = i
                            }
                            return this.matrix[(t * (t + 1) >> 1) + e - 1]
                        }
                        ,
                        i.prototype.set = function(t, e, i) {
                            if (t = t.index,
                            (e = e.index) > t) {
                                var o = e;
                                e = t,
                                t = o
                            }
                            this.matrix[(t * (t + 1) >> 1) + e - 1] = i ? 1 : 0
                        }
                        ,
                        i.prototype.reset = function() {
                            for (var t = 0, e = this.matrix.length; t !== e; t++)
                                this.matrix[t] = 0
                        }
                        ,
                        i.prototype.setNumObjects = function(t) {
                            this.matrix.length = t * (t - 1) >> 1
                        }
                    }
                    , {}],
                    5: [function(t, e) {
                        var i = t("../objects/Body")
                          , o = t("../math/Vec3")
                          , n = t("../math/Quaternion");
                        function r() {
                            this.world = null,
                            this.useBoundingBoxes = !1,
                            this.dirty = !0
                        }
                        t("../shapes/Shape"),
                        t("../shapes/Plane"),
                        e.exports = r,
                        r.prototype.collisionPairs = function() {
                            throw new Error("collisionPairs not implemented for this BroadPhase class!")
                        }
                        ,
                        r.prototype.needBroadphaseCollision = function(t, e) {
                            return 0 != (t.collisionFilterGroup & e.collisionFilterMask) && 0 != (e.collisionFilterGroup & t.collisionFilterMask) && (!(!t.hasTrigger && !e.hasTrigger) || 0 == (t.type & i.STATIC) && t.sleepState !== i.SLEEPING || 0 == (e.type & i.STATIC) && e.sleepState !== i.SLEEPING)
                        }
                        ,
                        r.prototype.intersectionTest = function(t, e, i, o) {
                            this.useBoundingBoxes ? this.doBoundingBoxBroadphase(t, e, i, o) : this.doBoundingSphereBroadphase(t, e, i, o)
                        }
                        ;
                        var s = new o;
                        new o,
                        new n,
                        new o,
                        r.prototype.doBoundingSphereBroadphase = function(t, e, i, o) {
                            var n = s;
                            e.position.vsub(t.position, n);
                            var r = Math.pow(t.boundingRadius + e.boundingRadius, 2);
                            n.norm2() < r && (i.push(t),
                            o.push(e))
                        }
                        ,
                        r.prototype.doBoundingBoxBroadphase = function(t, e, i, o) {
                            t.aabbNeedsUpdate && t.computeAABB(),
                            e.aabbNeedsUpdate && e.computeAABB(),
                            t.aabb.overlaps(e.aabb) && (i.push(t),
                            o.push(e))
                        }
                        ;
                        var a = {
                            keys: []
                        }
                          , l = []
                          , h = [];
                        r.prototype.makePairsUnique = function(t, e) {
                            for (var i = a, o = l, n = h, r = t.length, s = 0; s !== r; s++)
                                o[s] = t[s],
                                n[s] = e[s];
                            for (t.length = 0,
                            e.length = 0,
                            s = 0; s !== r; s++) {
                                var c = o[s].id
                                  , p = n[s].id;
                                i[u = c < p ? c + "," + p : p + "," + c] = s,
                                i.keys.push(u)
                            }
                            for (s = 0; s !== i.keys.length; s++) {
                                var u = i.keys.pop()
                                  , d = i[u];
                                t.push(o[d]),
                                e.push(n[d]),
                                delete i[u]
                            }
                        }
                        ,
                        r.prototype.setWorld = function() {}
                        ;
                        var c = new o;
                        r.boundingSphereCheck = function(t, e) {
                            var i = c;
                            return t.position.vsub(e.position, i),
                            Math.pow(t.shape.boundingSphereRadius + e.shape.boundingSphereRadius, 2) > i.norm2()
                        }
                        ,
                        r.prototype.aabbQuery = function() {
                            return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),
                            []
                        }
                    }
                    , {
                        "../math/Quaternion": 30,
                        "../math/Vec3": 32,
                        "../objects/Body": 33,
                        "../shapes/Plane": 44,
                        "../shapes/Shape": 45
                    }],
                    6: [function(t, e) {
                        e.exports = r;
                        var i = t("./Broadphase")
                          , o = t("../math/Vec3")
                          , n = t("../shapes/Shape");
                        function r(t, e, n, r, s) {
                            i.apply(this),
                            this.nx = n || 10,
                            this.ny = r || 10,
                            this.nz = s || 10,
                            this.aabbMin = t || new o(100,100,100),
                            this.aabbMax = e || new o(-100,-100,-100);
                            var a = this.nx * this.ny * this.nz;
                            if (a <= 0)
                                throw "GridBroadphase: Each dimension's n must be >0";
                            this.bins = [],
                            this.binLengths = [],
                            this.bins.length = a,
                            this.binLengths.length = a;
                            for (var l = 0; l < a; l++)
                                this.bins[l] = [],
                                this.binLengths[l] = 0
                        }
                        r.prototype = new i,
                        r.prototype.constructor = r;
                        var s = new o;
                        new o,
                        r.prototype.collisionPairs = function(t, e, i) {
                            for (var o = t.numObjects(), r = t.bodies, a = this.aabbMax, l = this.aabbMin, h = this.nx, c = this.ny, p = this.nz, u = c * p, d = p, y = 1, f = a.x, v = a.y, m = a.z, g = l.x, b = l.y, w = l.z, x = h / (f - g), _ = c / (v - b), B = p / (m - w), S = (f - g) / h, E = (v - b) / c, M = (m - w) / p, C = .5 * Math.sqrt(S * S + E * E + M * M), A = n.types, z = A.SPHERE, F = A.PLANE, R = (A.BOX,
                            A.COMPOUND,
                            A.CONVEXPOLYHEDRON,
                            this.bins), T = this.binLengths, P = this.bins.length, q = 0; q !== P; q++)
                                T[q] = 0;
                            var O = Math.ceil;
                            function I(t, e, i, o, n, r, s) {
                                var a = (t - g) * x | 0
                                  , l = (e - b) * _ | 0
                                  , f = (i - w) * B | 0
                                  , v = O((o - g) * x)
                                  , m = O((n - b) * _)
                                  , S = O((r - w) * B);
                                a < 0 ? a = 0 : a >= h && (a = h - 1),
                                l < 0 ? l = 0 : l >= c && (l = c - 1),
                                f < 0 ? f = 0 : f >= p && (f = p - 1),
                                v < 0 ? v = 0 : v >= h && (v = h - 1),
                                m < 0 ? m = 0 : m >= c && (m = c - 1),
                                S < 0 ? S = 0 : S >= p && (S = p - 1),
                                l *= d,
                                f *= y,
                                v *= u,
                                m *= d,
                                S *= y;
                                for (var E = a *= u; E <= v; E += u)
                                    for (var M = l; M <= m; M += d)
                                        for (var C = f; C <= S; C += y) {
                                            var A = E + M + C;
                                            R[A][T[A]++] = s
                                        }
                            }
                            for (l = Math.min,
                            a = Math.max,
                            q = 0; q !== o; q++) {
                                var V = (it = r[q]).shape;
                                switch (V.type) {
                                case z:
                                    var j = it.position.x
                                      , k = it.position.y
                                      , N = it.position.z
                                      , L = V.radius;
                                    I(j - L, k - L, N - L, j + L, k + L, N + L, it);
                                    break;
                                case F:
                                    V.worldNormalNeedsUpdate && V.computeWorldNormal(it.quaternion);
                                    var W = V.worldNormal
                                      , D = g + .5 * S - it.position.x
                                      , U = b + .5 * E - it.position.y
                                      , G = w + .5 * M - it.position.z
                                      , H = s;
                                    H.set(D, U, G);
                                    for (var K = 0, Q = 0; K !== h; K++,
                                    Q += u,
                                    H.y = U,
                                    H.x += S)
                                        for (var X = 0, Y = 0; X !== c; X++,
                                        Y += d,
                                        H.z = G,
                                        H.y += E)
                                            for (var Z = 0, J = 0; Z !== p; Z++,
                                            J += y,
                                            H.z += M)
                                                if (H.dot(W) < C) {
                                                    var $ = Q + Y + J;
                                                    R[$][T[$]++] = it
                                                }
                                    break;
                                default:
                                    it.aabbNeedsUpdate && it.computeAABB(),
                                    I(it.aabb.lowerBound.x, it.aabb.lowerBound.y, it.aabb.lowerBound.z, it.aabb.upperBound.x, it.aabb.upperBound.y, it.aabb.upperBound.z, it)
                                }
                            }
                            for (q = 0; q !== P; q++) {
                                var tt = T[q];
                                if (tt > 1) {
                                    var et = R[q];
                                    for (K = 0; K !== tt; K++) {
                                        var it = et[K];
                                        for (X = 0; X !== K; X++) {
                                            var ot = et[X];
                                            this.needBroadphaseCollision(it, ot) && this.intersectionTest(it, ot, e, i)
                                        }
                                    }
                                }
                            }
                            this.makePairsUnique(e, i)
                        }
                    }
                    , {
                        "../math/Vec3": 32,
                        "../shapes/Shape": 45,
                        "./Broadphase": 5
                    }],
                    7: [function(t, e) {
                        e.exports = n;
                        var i = t("./Broadphase")
                          , o = t("./AABB");
                        function n() {
                            i.apply(this)
                        }
                        n.prototype = new i,
                        n.prototype.constructor = n,
                        n.prototype.collisionPairs = function(t, e, i) {
                            var o, n, r, s, a = t.bodies, l = a.length;
                            for (o = 0; o !== l; o++)
                                for (n = 0; n !== o; n++)
                                    r = a[o],
                                    s = a[n],
                                    this.needBroadphaseCollision(r, s) && this.intersectionTest(r, s, e, i)
                        }
                        ,
                        new o,
                        n.prototype.aabbQuery = function(t, e, i) {
                            i = i || [];
                            for (var o = 0; o < t.bodies.length; o++) {
                                var n = t.bodies[o];
                                n.aabbNeedsUpdate && n.computeAABB(),
                                n.aabb.overlaps(e) && i.push(n)
                            }
                            return i
                        }
                    }
                    , {
                        "./AABB": 3,
                        "./Broadphase": 5
                    }],
                    8: [function(t, e) {
                        function i() {
                            this.matrix = {}
                        }
                        e.exports = i,
                        i.prototype.get = function(t, e) {
                            if (t = t.id,
                            (e = e.id) > t) {
                                var i = e;
                                e = t,
                                t = i
                            }
                            return t + "-" + e in this.matrix
                        }
                        ,
                        i.prototype.set = function(t, e, i) {
                            if (t = t.id,
                            (e = e.id) > t) {
                                var o = e;
                                e = t,
                                t = o
                            }
                            i ? this.matrix[t + "-" + e] = !0 : delete this.matrix[t + "-" + e]
                        }
                        ,
                        i.prototype.reset = function() {
                            this.matrix = {}
                        }
                        ,
                        i.prototype.setNumObjects = function() {}
                    }
                    , {}],
                    9: [function(t, e) {
                        function i() {
                            this.current = [],
                            this.previous = []
                        }
                        function o(t, e) {
                            t.push((4294901760 & e) >> 16, 65535 & e)
                        }
                        e.exports = i,
                        i.prototype.getKey = function(t, e) {
                            if (e < t) {
                                var i = e;
                                e = t,
                                t = i
                            }
                            return t << 16 | e
                        }
                        ,
                        i.prototype.set = function(t, e) {
                            for (var i = this.getKey(t, e), o = this.current, n = 0; i > o[n]; )
                                n++;
                            if (i !== o[n]) {
                                for (e = o.length - 1; e >= n; e--)
                                    o[e + 1] = o[e];
                                o[n] = i
                            }
                        }
                        ,
                        i.prototype.tick = function() {
                            var t = this.current;
                            this.current = this.previous,
                            this.previous = t,
                            this.current.length = 0
                        }
                        ,
                        i.prototype.getDiff = function(t, e) {
                            for (var i = this.current, n = this.previous, r = i.length, s = n.length, a = 0, l = 0; l < r; l++) {
                                for (var h = i[l]; h > n[a]; )
                                    a++;
                                h === n[a] || o(t, h)
                            }
                            for (a = 0,
                            l = 0; l < s; l++) {
                                for (var c = n[l]; c > i[a]; )
                                    a++;
                                i[a] === c || o(e, c)
                            }
                        }
                    }
                    , {}],
                    10: [function(t, e) {
                        e.exports = l;
                        var i = t("../math/Vec3")
                          , o = t("../math/Quaternion")
                          , n = t("../math/Transform")
                          , r = (t("../shapes/ConvexPolyhedron"),
                        t("../shapes/Box"),
                        t("../collision/RaycastResult"))
                          , s = t("../shapes/Shape")
                          , a = t("../collision/AABB");
                        function l(t, e) {
                            this.from = t ? t.clone() : new i,
                            this.to = e ? e.clone() : new i,
                            this._direction = new i,
                            this.precision = 1e-4,
                            this.checkCollisionResponse = !0,
                            this.skipBackfaces = !1,
                            this.collisionFilterMask = -1,
                            this.collisionFilterGroup = -1,
                            this.mode = l.ANY,
                            this.result = new r,
                            this.hasHit = !1,
                            this.callback = function() {}
                        }
                        l.prototype.constructor = l,
                        l.CLOSEST = 1,
                        l.ANY = 2,
                        l.ALL = 4;
                        var h = new a
                          , c = [];
                        l.prototype.intersectWorld = function(t, e) {
                            return this.mode = e.mode || l.ANY,
                            this.result = e.result || new r,
                            this.skipBackfaces = !!e.skipBackfaces,
                            this.checkCollisionResponse = !!e.checkCollisionResponse,
                            this.collisionFilterMask = void 0 !== e.collisionFilterMask ? e.collisionFilterMask : -1,
                            this.collisionFilterGroup = void 0 !== e.collisionFilterGroup ? e.collisionFilterGroup : -1,
                            e.from && this.from.copy(e.from),
                            e.to && this.to.copy(e.to),
                            this.callback = e.callback || function() {}
                            ,
                            this.hasHit = !1,
                            this.result.reset(),
                            this._updateDirection(),
                            this.getAABB(h),
                            c.length = 0,
                            t.broadphase.aabbQuery(t, h, c),
                            this.intersectBodies(c),
                            this.hasHit
                        }
                        ;
                        var p = new i
                          , u = new i;
                        function d(t, e, i, o) {
                            o.vsub(e, I),
                            i.vsub(e, p),
                            t.vsub(e, u);
                            var n, r, s = I.dot(I), a = I.dot(p), l = I.dot(u), h = p.dot(p), c = p.dot(u);
                            return (n = h * l - a * c) >= 0 && (r = s * c - a * l) >= 0 && n + r < s * h - a * a
                        }
                        l.pointInTriangle = d;
                        var y = new i
                          , f = new o;
                        l.prototype.intersectBody = function(t, e) {
                            e && (this.result = e,
                            this._updateDirection());
                            var i = this.checkCollisionResponse;
                            if ((!i || t.collisionResponse) && 0 != (this.collisionFilterGroup & t.collisionFilterMask) && 0 != (t.collisionFilterGroup & this.collisionFilterMask))
                                for (var o = y, n = f, r = 0, s = t.shapes.length; r < s; r++) {
                                    var a = t.shapes[r];
                                    if ((!i || a.collisionResponse) && (t.quaternion.mult(t.shapeOrientations[r], n),
                                    t.quaternion.vmult(t.shapeOffsets[r], o),
                                    o.vadd(t.position, o),
                                    this.intersectShape(a, n, o, t),
                                    this.result._shouldStop))
                                        break
                                }
                        }
                        ,
                        l.prototype.intersectBodies = function(t, e) {
                            e && (this.result = e,
                            this._updateDirection());
                            for (var i = 0, o = t.length; !this.result._shouldStop && i < o; i++)
                                this.intersectBody(t[i])
                        }
                        ,
                        l.prototype._updateDirection = function() {
                            this.to.vsub(this.from, this._direction),
                            this._direction.normalize()
                        }
                        ,
                        l.prototype.intersectShape = function(t, e, i, o) {
                            if (!(j(this.from, this._direction, i) > t.boundingSphereRadius)) {
                                var n = this[t.type];
                                n && n.call(this, t, e, i, o, t)
                            }
                        }
                        ,
                        new i,
                        new i;
                        var v = new i
                          , m = new i
                          , g = new i
                          , b = new i;
                        new i,
                        new r,
                        l.prototype.intersectBox = function(t, e, i, o, n) {
                            return this.intersectConvex(t.convexPolyhedronRepresentation, e, i, o, n)
                        }
                        ,
                        l.prototype[s.types.BOX] = l.prototype.intersectBox,
                        l.prototype.intersectPlane = function(t, e, o, n, r) {
                            var s = this.from
                              , a = this.to
                              , l = this._direction
                              , h = new i(0,0,1);
                            e.vmult(h, h);
                            var c = new i;
                            s.vsub(o, c);
                            var p = c.dot(h);
                            if (a.vsub(o, c),
                            !(p * c.dot(h) > 0 || s.distanceTo(a) < p)) {
                                var u = h.dot(l);
                                if (!(Math.abs(u) < this.precision)) {
                                    var d = new i
                                      , y = new i
                                      , f = new i;
                                    s.vsub(o, d);
                                    var v = -h.dot(d) / u;
                                    l.scale(v, y),
                                    s.vadd(y, f),
                                    this.reportIntersection(h, f, r, n, -1)
                                }
                            }
                        }
                        ,
                        l.prototype[s.types.PLANE] = l.prototype.intersectPlane,
                        l.prototype.getAABB = function(t) {
                            var e = this.to
                              , i = this.from;
                            t.lowerBound.x = Math.min(e.x, i.x),
                            t.lowerBound.y = Math.min(e.y, i.y),
                            t.lowerBound.z = Math.min(e.z, i.z),
                            t.upperBound.x = Math.max(e.x, i.x),
                            t.upperBound.y = Math.max(e.y, i.y),
                            t.upperBound.z = Math.max(e.z, i.z)
                        }
                        ;
                        var w = {
                            faceList: [0]
                        }
                          , x = new i
                          , _ = new l
                          , B = [];
                        l.prototype.intersectHeightfield = function(t, e, i, o, r) {
                            t.data,
                            t.elementSize;
                            var s = _;
                            s.from.copy(this.from),
                            s.to.copy(this.to),
                            n.pointToLocalFrame(i, e, s.from, s.from),
                            n.pointToLocalFrame(i, e, s.to, s.to),
                            s._updateDirection();
                            var l, h, c, p, u = B;
                            l = h = 0,
                            c = p = t.data.length - 1;
                            var d = new a;
                            s.getAABB(d),
                            t.getIndexOfPosition(d.lowerBound.x, d.lowerBound.y, u, !0),
                            l = Math.max(l, u[0]),
                            h = Math.max(h, u[1]),
                            t.getIndexOfPosition(d.upperBound.x, d.upperBound.y, u, !0),
                            c = Math.min(c, u[0] + 1),
                            p = Math.min(p, u[1] + 1);
                            for (var y = l; y < c; y++)
                                for (var f = h; f < p; f++) {
                                    if (this.result._shouldStop)
                                        return;
                                    if (t.getAabbAtIndex(y, f, d),
                                    d.overlapsRay(s)) {
                                        if (t.getConvexTrianglePillar(y, f, !1),
                                        n.pointToWorldFrame(i, e, t.pillarOffset, x),
                                        this.intersectConvex(t.pillarConvex, e, x, o, r, w),
                                        this.result._shouldStop)
                                            return;
                                        t.getConvexTrianglePillar(y, f, !0),
                                        n.pointToWorldFrame(i, e, t.pillarOffset, x),
                                        this.intersectConvex(t.pillarConvex, e, x, o, r, w)
                                    }
                                }
                        }
                        ,
                        l.prototype[s.types.HEIGHTFIELD] = l.prototype.intersectHeightfield;
                        var S = new i
                          , E = new i;
                        l.prototype.intersectSphere = function(t, e, i, o, n) {
                            var r = this.from
                              , s = this.to
                              , a = t.radius
                              , l = Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2) + Math.pow(s.z - r.z, 2)
                              , h = 2 * ((s.x - r.x) * (r.x - i.x) + (s.y - r.y) * (r.y - i.y) + (s.z - r.z) * (r.z - i.z))
                              , c = Math.pow(r.x - i.x, 2) + Math.pow(r.y - i.y, 2) + Math.pow(r.z - i.z, 2) - Math.pow(a, 2)
                              , p = Math.pow(h, 2) - 4 * l * c
                              , u = S
                              , d = E;
                            if (!(p < 0))
                                if (0 === p)
                                    r.lerp(s, p, u),
                                    u.vsub(i, d),
                                    d.normalize(),
                                    this.reportIntersection(d, u, n, o, -1);
                                else {
                                    var y = (-h - Math.sqrt(p)) / (2 * l)
                                      , f = (-h + Math.sqrt(p)) / (2 * l);
                                    if (y >= 0 && y <= 1 && (r.lerp(s, y, u),
                                    u.vsub(i, d),
                                    d.normalize(),
                                    this.reportIntersection(d, u, n, o, -1)),
                                    this.result._shouldStop)
                                        return;
                                    f >= 0 && f <= 1 && (r.lerp(s, f, u),
                                    u.vsub(i, d),
                                    d.normalize(),
                                    this.reportIntersection(d, u, n, o, -1))
                                }
                        }
                        ,
                        l.prototype[s.types.SPHERE] = l.prototype.intersectSphere;
                        var M = new i
                          , C = (new i,
                        new i,
                        new i);
                        l.prototype.intersectConvex = function(t, e, i, o, n, r) {
                            for (var s = M, a = C, l = r && r.faceList || null, h = t.faces, c = t.vertices, p = t.faceNormals, u = this._direction, y = this.from, f = this.to, w = y.distanceTo(f), x = l ? l.length : h.length, _ = this.result, B = 0; !_._shouldStop && B < x; B++) {
                                var S = l ? l[B] : B
                                  , E = h[S]
                                  , A = p[S]
                                  , z = e
                                  , F = i;
                                a.copy(c[E[0]]),
                                z.vmult(a, a),
                                a.vadd(F, a),
                                a.vsub(y, a),
                                z.vmult(A, s);
                                var R = u.dot(s);
                                if (!(Math.abs(R) < this.precision)) {
                                    var T = s.dot(a) / R;
                                    if (!(T < 0)) {
                                        u.mult(T, v),
                                        v.vadd(y, v),
                                        m.copy(c[E[0]]),
                                        z.vmult(m, m),
                                        F.vadd(m, m);
                                        for (var P = 1; !_._shouldStop && P < E.length - 1; P++) {
                                            g.copy(c[E[P]]),
                                            b.copy(c[E[P + 1]]),
                                            z.vmult(g, g),
                                            z.vmult(b, b),
                                            F.vadd(g, g),
                                            F.vadd(b, b);
                                            var q = v.distanceTo(y);
                                            !d(v, m, g, b) && !d(v, g, m, b) || q > w || this.reportIntersection(s, v, n, o, S)
                                        }
                                    }
                                }
                            }
                        }
                        ,
                        l.prototype[s.types.CONVEXPOLYHEDRON] = l.prototype.intersectConvex;
                        var A = new i
                          , z = new i
                          , F = new i
                          , R = new i
                          , T = new i
                          , P = new i
                          , q = (new a,
                        [])
                          , O = new n;
                        l.prototype.intersectTrimesh = function(t, e, i, o, r, s) {
                            var a = A
                              , l = q
                              , h = O
                              , c = C
                              , p = z
                              , u = F
                              , y = R
                              , f = P
                              , w = T
                              , x = (s && s.faceList,
                            t.indices)
                              , _ = (t.vertices,
                            t.faceNormals,
                            this.from)
                              , B = this.to
                              , S = this._direction;
                            h.position.copy(i),
                            h.quaternion.copy(e),
                            n.vectorToLocalFrame(i, e, S, p),
                            n.pointToLocalFrame(i, e, _, u),
                            n.pointToLocalFrame(i, e, B, y),
                            y.x *= t.scale.x,
                            y.y *= t.scale.y,
                            y.z *= t.scale.z,
                            u.x *= t.scale.x,
                            u.y *= t.scale.y,
                            u.z *= t.scale.z,
                            y.vsub(u, p),
                            p.normalize();
                            var E = u.distanceSquared(y);
                            t.tree.rayQuery(this, h, l);
                            for (var M = 0, I = l.length; !this.result._shouldStop && M !== I; M++) {
                                var V = l[M];
                                t.getNormal(V, a),
                                t.getVertex(x[3 * V], m),
                                m.vsub(u, c);
                                var j = p.dot(a)
                                  , k = a.dot(c) / j;
                                if (!(k < 0)) {
                                    p.scale(k, v),
                                    v.vadd(u, v),
                                    t.getVertex(x[3 * V + 1], g),
                                    t.getVertex(x[3 * V + 2], b);
                                    var N = v.distanceSquared(u);
                                    !d(v, g, m, b) && !d(v, m, g, b) || N > E || (n.vectorToWorldFrame(e, a, w),
                                    n.pointToWorldFrame(i, e, v, f),
                                    this.reportIntersection(w, f, r, o, V))
                                }
                            }
                            l.length = 0
                        }
                        ,
                        l.prototype[s.types.TRIMESH] = l.prototype.intersectTrimesh,
                        l.prototype.reportIntersection = function(t, e, i, o, n) {
                            var r = this.from
                              , s = this.to
                              , a = r.distanceTo(e)
                              , h = this.result;
                            if (!(this.skipBackfaces && t.dot(this._direction) > 0))
                                switch (h.hitFaceIndex = void 0 !== n ? n : -1,
                                this.mode) {
                                case l.ALL:
                                    this.hasHit = !0,
                                    h.set(r, s, t, e, i, o, a),
                                    h.hasHit = !0,
                                    this.callback(h);
                                    break;
                                case l.CLOSEST:
                                    (a < h.distance || !h.hasHit) && (this.hasHit = !0,
                                    h.hasHit = !0,
                                    h.set(r, s, t, e, i, o, a));
                                    break;
                                case l.ANY:
                                    this.hasHit = !0,
                                    h.hasHit = !0,
                                    h.set(r, s, t, e, i, o, a),
                                    h._shouldStop = !0
                                }
                        }
                        ;
                        var I = new i
                          , V = new i;
                        function j(t, e, i) {
                            i.vsub(t, I);
                            var o = I.dot(e);
                            return e.mult(o, V),
                            V.vadd(t, V),
                            i.distanceTo(V)
                        }
                    }
                    , {
                        "../collision/AABB": 3,
                        "../collision/RaycastResult": 11,
                        "../math/Quaternion": 30,
                        "../math/Transform": 31,
                        "../math/Vec3": 32,
                        "../shapes/Box": 39,
                        "../shapes/ConvexPolyhedron": 40,
                        "../shapes/Shape": 45
                    }],
                    11: [function(t, e) {
                        var i = t("../math/Vec3");
                        function o() {
                            this.rayFromWorld = new i,
                            this.rayToWorld = new i,
                            this.hitNormalWorld = new i,
                            this.hitPointWorld = new i,
                            this.hasHit = !1,
                            this.shape = null,
                            this.body = null,
                            this.hitFaceIndex = -1,
                            this.distance = -1,
                            this._shouldStop = !1
                        }
                        e.exports = o,
                        o.prototype.reset = function() {
                            this.rayFromWorld.setZero(),
                            this.rayToWorld.setZero(),
                            this.hitNormalWorld.setZero(),
                            this.hitPointWorld.setZero(),
                            this.hasHit = !1,
                            this.shape = null,
                            this.body = null,
                            this.hitFaceIndex = -1,
                            this.distance = -1,
                            this._shouldStop = !1
                        }
                        ,
                        o.prototype.abort = function() {
                            this._shouldStop = !0
                        }
                        ,
                        o.prototype.set = function(t, e, i, o, n, r, s) {
                            this.rayFromWorld.copy(t),
                            this.rayToWorld.copy(e),
                            this.hitNormalWorld.copy(i),
                            this.hitPointWorld.copy(o),
                            this.shape = n,
                            this.body = r,
                            this.distance = s
                        }
                    }
                    , {
                        "../math/Vec3": 32
                    }],
                    12: [function(t, e) {
                        t("../shapes/Shape");
                        var i = t("../collision/Broadphase");
                        function o(t) {
                            i.apply(this),
                            this.axisList = [],
                            this.world = null,
                            this.axisIndex = 0;
                            var e = this.axisList;
                            this._addBodyHandler = function(t) {
                                e.push(t.body)
                            }
                            ,
                            this._removeBodyHandler = function(t) {
                                var i = e.indexOf(t.body);
                                -1 !== i && e.splice(i, 1)
                            }
                            ,
                            t && this.setWorld(t)
                        }
                        e.exports = o,
                        o.prototype = new i,
                        o.prototype.setWorld = function(t) {
                            this.axisList.length = 0;
                            for (var e = 0; e < t.bodies.length; e++)
                                this.axisList.push(t.bodies[e]);
                            t.removeEventListener("addBody", this._addBodyHandler),
                            t.removeEventListener("removeBody", this._removeBodyHandler),
                            t.addEventListener("addBody", this._addBodyHandler),
                            t.addEventListener("removeBody", this._removeBodyHandler),
                            this.world = t,
                            this.dirty = !0
                        }
                        ,
                        o.insertionSortX = function(t) {
                            for (var e = 1, i = t.length; e < i; e++) {
                                for (var o = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.x <= o.aabb.lowerBound.x); n--)
                                    t[n + 1] = t[n];
                                t[n + 1] = o
                            }
                            return t
                        }
                        ,
                        o.insertionSortY = function(t) {
                            for (var e = 1, i = t.length; e < i; e++) {
                                for (var o = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.y <= o.aabb.lowerBound.y); n--)
                                    t[n + 1] = t[n];
                                t[n + 1] = o
                            }
                            return t
                        }
                        ,
                        o.insertionSortZ = function(t) {
                            for (var e = 1, i = t.length; e < i; e++) {
                                for (var o = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.z <= o.aabb.lowerBound.z); n--)
                                    t[n + 1] = t[n];
                                t[n + 1] = o
                            }
                            return t
                        }
                        ,
                        o.prototype.collisionPairs = function(t, e, i) {
                            var n, r, s = this.axisList, a = s.length, l = this.axisIndex;
                            for (this.dirty && (this.sortList(),
                            this.dirty = !1),
                            n = 0; n !== a; n++) {
                                var h = s[n];
                                for (r = n + 1; r < a; r++) {
                                    var c = s[r];
                                    if (this.needBroadphaseCollision(h, c)) {
                                        if (!o.checkBounds(h, c, l))
                                            break;
                                        this.intersectionTest(h, c, e, i)
                                    }
                                }
                            }
                        }
                        ,
                        o.prototype.sortList = function() {
                            for (var t = this.axisList, e = this.axisIndex, i = t.length, n = 0; n !== i; n++) {
                                var r = t[n];
                                r.aabbNeedsUpdate && r.computeAABB()
                            }
                            0 === e ? o.insertionSortX(t) : 1 === e ? o.insertionSortY(t) : 2 === e && o.insertionSortZ(t)
                        }
                        ,
                        o.checkBounds = function(t, e, i) {
                            var o, n;
                            0 === i ? (o = t.position.x,
                            n = e.position.x) : 1 === i ? (o = t.position.y,
                            n = e.position.y) : 2 === i && (o = t.position.z,
                            n = e.position.z);
                            var r = t.boundingRadius;
                            return n - e.boundingRadius < o + r
                        }
                        ,
                        o.prototype.autoDetectAxis = function() {
                            for (var t = 0, e = 0, i = 0, o = 0, n = 0, r = 0, s = this.axisList, a = s.length, l = 1 / a, h = 0; h !== a; h++) {
                                var c = s[h]
                                  , p = c.position.x;
                                t += p,
                                e += p * p;
                                var u = c.position.y;
                                i += u,
                                o += u * u;
                                var d = c.position.z;
                                n += d,
                                r += d * d
                            }
                            var y = e - t * t * l
                              , f = o - i * i * l
                              , v = r - n * n * l;
                            this.axisIndex = y > f ? y > v ? 0 : 2 : f > v ? 1 : 2
                        }
                        ,
                        o.prototype.aabbQuery = function(t, e, i) {
                            i = i || [],
                            this.dirty && (this.sortList(),
                            this.dirty = !1);
                            var o = this.axisIndex
                              , n = "x";
                            1 === o && (n = "y"),
                            2 === o && (n = "z");
                            for (var r = this.axisList, s = (e.lowerBound[n],
                            e.upperBound[n],
                            0); s < r.length; s++) {
                                var a = r[s];
                                a.aabbNeedsUpdate && a.computeAABB(),
                                a.aabb.overlaps(e) && i.push(a)
                            }
                            return i
                        }
                    }
                    , {
                        "../collision/Broadphase": 5,
                        "../shapes/Shape": 45
                    }],
                    13: [function(t, e) {
                        e.exports = s,
                        t("./Constraint");
                        var i = t("./PointToPointConstraint")
                          , o = t("../equations/ConeEquation")
                          , n = t("../equations/RotationalEquation")
                          , r = (t("../equations/ContactEquation"),
                        t("../math/Vec3"));
                        function s(t, e, s) {
                            var a = void 0 !== (s = s || {}).maxForce ? s.maxForce : 1e6
                              , l = s.pivotA ? s.pivotA.clone() : new r
                              , h = s.pivotB ? s.pivotB.clone() : new r;
                            this.axisA = s.axisA ? s.axisA.clone() : new r,
                            this.axisB = s.axisB ? s.axisB.clone() : new r,
                            i.call(this, t, l, e, h, a),
                            this.collideConnected = !!s.collideConnected,
                            this.angle = void 0 !== s.angle ? s.angle : 0;
                            var c = this.coneEquation = new o(t,e,s)
                              , p = this.twistEquation = new n(t,e,s);
                            this.twistAngle = void 0 !== s.twistAngle ? s.twistAngle : 0,
                            c.maxForce = 0,
                            c.minForce = -a,
                            p.maxForce = 0,
                            p.minForce = -a,
                            this.equations.push(c, p)
                        }
                        s.prototype = new i,
                        s.constructor = s,
                        new r,
                        new r,
                        s.prototype.update = function() {
                            var t = this.bodyA
                              , e = this.bodyB
                              , o = this.coneEquation
                              , n = this.twistEquation;
                            i.prototype.update.call(this),
                            t.vectorToWorldFrame(this.axisA, o.axisA),
                            e.vectorToWorldFrame(this.axisB, o.axisB),
                            this.axisA.tangents(n.axisA, n.axisA),
                            t.vectorToWorldFrame(n.axisA, n.axisA),
                            this.axisB.tangents(n.axisB, n.axisB),
                            e.vectorToWorldFrame(n.axisB, n.axisB),
                            o.angle = this.angle,
                            n.maxAngle = this.twistAngle
                        }
                    }
                    , {
                        "../equations/ConeEquation": 19,
                        "../equations/ContactEquation": 20,
                        "../equations/RotationalEquation": 23,
                        "../math/Vec3": 32,
                        "./Constraint": 14,
                        "./PointToPointConstraint": 18
                    }],
                    14: [function(t, e) {
                        e.exports = o;
                        var i = t("../utils/Utils");
                        function o(t, e, n) {
                            n = i.defaults(n, {
                                collideConnected: !0,
                                wakeUpBodies: !0
                            }),
                            this.equations = [],
                            this.bodyA = t,
                            this.bodyB = e,
                            this.id = o.idCounter++,
                            this.collideConnected = n.collideConnected,
                            n.wakeUpBodies && (t && t.wakeUp(),
                            e && e.wakeUp())
                        }
                        o.prototype.update = function() {
                            throw new Error("method update() not implmemented in this Constraint subclass!")
                        }
                        ,
                        o.prototype.enable = function() {
                            for (var t = this.equations, e = 0; e < t.length; e++)
                                t[e].enabled = !0
                        }
                        ,
                        o.prototype.disable = function() {
                            for (var t = this.equations, e = 0; e < t.length; e++)
                                t[e].enabled = !1
                        }
                        ,
                        o.idCounter = 0
                    }
                    , {
                        "../utils/Utils": 55
                    }],
                    15: [function(t, e) {
                        e.exports = n;
                        var i = t("./Constraint")
                          , o = t("../equations/ContactEquation");
                        function n(t, e, n, r) {
                            i.call(this, t, e),
                            void 0 === n && (n = t.position.distanceTo(e.position)),
                            void 0 === r && (r = 1e6),
                            this.distance = n;
                            var s = this.distanceEquation = new o(t,e);
                            this.equations.push(s),
                            s.minForce = -r,
                            s.maxForce = r
                        }
                        n.prototype = new i,
                        n.prototype.update = function() {
                            var t = this.bodyA
                              , e = this.bodyB
                              , i = this.distanceEquation
                              , o = .5 * this.distance
                              , n = i.ni;
                            e.position.vsub(t.position, n),
                            n.normalize(),
                            n.mult(o, i.ri),
                            n.mult(-o, i.rj)
                        }
                    }
                    , {
                        "../equations/ContactEquation": 20,
                        "./Constraint": 14
                    }],
                    16: [function(t, e) {
                        e.exports = s,
                        t("./Constraint");
                        var i = t("./PointToPointConstraint")
                          , o = t("../equations/RotationalEquation")
                          , n = t("../equations/RotationalMotorEquation")
                          , r = (t("../equations/ContactEquation"),
                        t("../math/Vec3"));
                        function s(t, e, s) {
                            var a = void 0 !== (s = s || {}).maxForce ? s.maxForce : 1e6
                              , l = s.pivotA ? s.pivotA.clone() : new r
                              , h = s.pivotB ? s.pivotB.clone() : new r;
                            i.call(this, t, l, e, h, a),
                            (this.axisA = s.axisA ? s.axisA.clone() : new r(1,0,0)).normalize(),
                            (this.axisB = s.axisB ? s.axisB.clone() : new r(1,0,0)).normalize();
                            var c = this.rotationalEquation1 = new o(t,e,s)
                              , p = this.rotationalEquation2 = new o(t,e,s)
                              , u = this.motorEquation = new n(t,e,a);
                            u.enabled = !1,
                            this.equations.push(c, p, u)
                        }
                        s.prototype = new i,
                        s.constructor = s,
                        s.prototype.enableMotor = function() {
                            this.motorEquation.enabled = !0
                        }
                        ,
                        s.prototype.disableMotor = function() {
                            this.motorEquation.enabled = !1
                        }
                        ,
                        s.prototype.setMotorSpeed = function(t) {
                            this.motorEquation.targetVelocity = t
                        }
                        ,
                        s.prototype.setMotorMaxForce = function(t) {
                            this.motorEquation.maxForce = t,
                            this.motorEquation.minForce = -t
                        }
                        ;
                        var a = new r
                          , l = new r;
                        s.prototype.update = function() {
                            var t = this.bodyA
                              , e = this.bodyB
                              , o = this.motorEquation
                              , n = this.rotationalEquation1
                              , r = this.rotationalEquation2
                              , s = a
                              , h = l
                              , c = this.axisA
                              , p = this.axisB;
                            i.prototype.update.call(this),
                            t.quaternion.vmult(c, s),
                            e.quaternion.vmult(p, h),
                            s.tangents(n.axisA, r.axisA),
                            n.axisB.copy(h),
                            r.axisB.copy(h),
                            this.motorEquation.enabled && (t.quaternion.vmult(this.axisA, o.axisA),
                            e.quaternion.vmult(this.axisB, o.axisB))
                        }
                    }
                    , {
                        "../equations/ContactEquation": 20,
                        "../equations/RotationalEquation": 23,
                        "../equations/RotationalMotorEquation": 24,
                        "../math/Vec3": 32,
                        "./Constraint": 14,
                        "./PointToPointConstraint": 18
                    }],
                    17: [function(t, e) {
                        e.exports = r,
                        t("./Constraint");
                        var i = t("./PointToPointConstraint")
                          , o = t("../equations/RotationalEquation")
                          , n = (t("../equations/RotationalMotorEquation"),
                        t("../equations/ContactEquation"),
                        t("../math/Vec3"));
                        function r(t, e, r) {
                            var s = void 0 !== (r = r || {}).maxForce ? r.maxForce : 1e6
                              , a = new n
                              , l = new n
                              , h = new n;
                            t.position.vadd(e.position, h),
                            h.scale(.5, h),
                            e.pointToLocalFrame(h, l),
                            t.pointToLocalFrame(h, a),
                            i.call(this, t, a, e, l, s),
                            this.xA = t.vectorToLocalFrame(n.UNIT_X),
                            this.xB = e.vectorToLocalFrame(n.UNIT_X),
                            this.yA = t.vectorToLocalFrame(n.UNIT_Y),
                            this.yB = e.vectorToLocalFrame(n.UNIT_Y),
                            this.zA = t.vectorToLocalFrame(n.UNIT_Z),
                            this.zB = e.vectorToLocalFrame(n.UNIT_Z);
                            var c = this.rotationalEquation1 = new o(t,e,r)
                              , p = this.rotationalEquation2 = new o(t,e,r)
                              , u = this.rotationalEquation3 = new o(t,e,r);
                            this.equations.push(c, p, u)
                        }
                        r.prototype = new i,
                        r.constructor = r,
                        new n,
                        new n,
                        r.prototype.update = function() {
                            var t = this.bodyA
                              , e = this.bodyB
                              , o = (this.motorEquation,
                            this.rotationalEquation1)
                              , n = this.rotationalEquation2
                              , r = this.rotationalEquation3;
                            i.prototype.update.call(this),
                            t.vectorToWorldFrame(this.xA, o.axisA),
                            e.vectorToWorldFrame(this.yB, o.axisB),
                            t.vectorToWorldFrame(this.yA, n.axisA),
                            e.vectorToWorldFrame(this.zB, n.axisB),
                            t.vectorToWorldFrame(this.zA, r.axisA),
                            e.vectorToWorldFrame(this.xB, r.axisB)
                        }
                    }
                    , {
                        "../equations/ContactEquation": 20,
                        "../equations/RotationalEquation": 23,
                        "../equations/RotationalMotorEquation": 24,
                        "../math/Vec3": 32,
                        "./Constraint": 14,
                        "./PointToPointConstraint": 18
                    }],
                    18: [function(t, e) {
                        e.exports = r;
                        var i = t("./Constraint")
                          , o = t("../equations/ContactEquation")
                          , n = t("../math/Vec3");
                        function r(t, e, r, s, a) {
                            i.call(this, t, r),
                            a = void 0 !== a ? a : 1e6,
                            this.pivotA = e ? e.clone() : new n,
                            this.pivotB = s ? s.clone() : new n;
                            var l = this.equationX = new o(t,r)
                              , h = this.equationY = new o(t,r)
                              , c = this.equationZ = new o(t,r);
                            this.equations.push(l, h, c),
                            l.minForce = h.minForce = c.minForce = -a,
                            l.maxForce = h.maxForce = c.maxForce = a,
                            l.ni.set(1, 0, 0),
                            h.ni.set(0, 1, 0),
                            c.ni.set(0, 0, 1)
                        }
                        r.prototype = new i,
                        r.prototype.update = function() {
                            var t = this.bodyA
                              , e = this.bodyB
                              , i = this.equationX
                              , o = this.equationY
                              , n = this.equationZ;
                            t.quaternion.vmult(this.pivotA, i.ri),
                            e.quaternion.vmult(this.pivotB, i.rj),
                            o.ri.copy(i.ri),
                            o.rj.copy(i.rj),
                            n.ri.copy(i.ri),
                            n.rj.copy(i.rj)
                        }
                    }
                    , {
                        "../equations/ContactEquation": 20,
                        "../math/Vec3": 32,
                        "./Constraint": 14
                    }],
                    19: [function(t, e) {
                        e.exports = r;
                        var i = t("../math/Vec3")
                          , o = (t("../math/Mat3"),
                        t("./Equation"))
                          , n = t("../math/CMath");
                        function r(t, e, n) {
                            var r = void 0 !== (n = n || {}).maxForce ? n.maxForce : 1e6;
                            o.call(this, t, e, -r, r),
                            this.axisA = n.axisA ? n.axisA.clone() : new i(1,0,0),
                            this.axisB = n.axisB ? n.axisB.clone() : new i(0,1,0),
                            this.angle = void 0 !== n.angle ? n.angle : 0
                        }
                        r.prototype = new o,
                        r.prototype.constructor = r;
                        var s = new i
                          , a = new i;
                        r.prototype.computeB = function(t) {
                            var e = this.a
                              , i = this.b
                              , o = this.axisA
                              , r = this.axisB
                              , l = s
                              , h = a
                              , c = this.jacobianElementA
                              , p = this.jacobianElementB;
                            return o.cross(r, l),
                            r.cross(o, h),
                            c.rotational.copy(h),
                            p.rotational.copy(l),
                            -(n.cos(this.angle) - o.dot(r)) * e - this.computeGW() * i - t * this.computeGiMf()
                        }
                    }
                    , {
                        "../math/CMath": 27,
                        "../math/Mat3": 29,
                        "../math/Vec3": 32,
                        "./Equation": 21
                    }],
                    20: [function(t, e) {
                        e.exports = n;
                        var i = t("./Equation")
                          , o = t("../math/Vec3");
                        function n(t, e, n) {
                            n = void 0 !== n ? n : 1e6,
                            i.call(this, t, e, 0, n),
                            this.si = null,
                            this.sj = null,
                            this.restitution = 0,
                            this.ri = new o,
                            this.rj = new o,
                            this.ni = new o
                        }
                        t("../math/Mat3"),
                        n.prototype = new i,
                        n.prototype.constructor = n;
                        var r = new o
                          , s = new o
                          , a = new o;
                        n.prototype.computeB = function(t) {
                            var e = this.a
                              , i = this.b
                              , o = this.bi
                              , n = this.bj
                              , l = this.ri
                              , h = this.rj
                              , c = r
                              , p = s
                              , u = o.velocity
                              , d = o.angularVelocity
                              , y = (o.force,
                            o.torque,
                            n.velocity)
                              , f = n.angularVelocity
                              , v = (n.force,
                            n.torque,
                            a)
                              , m = this.jacobianElementA
                              , g = this.jacobianElementB
                              , b = this.ni;
                            l.cross(b, c),
                            h.cross(b, p),
                            b.negate(m.spatial),
                            c.negate(m.rotational),
                            g.spatial.copy(b),
                            g.rotational.copy(p),
                            v.copy(n.position),
                            v.vadd(h, v),
                            v.vsub(o.position, v),
                            v.vsub(l, v);
                            var w = b.dot(v)
                              , x = this.restitution + 1;
                            return -w * e - (x * y.dot(b) - x * u.dot(b) + f.dot(p) - d.dot(c)) * i - t * this.computeGiMf()
                        }
                        ;
                        var l = new o
                          , h = new o
                          , c = new o
                          , p = new o
                          , u = new o;
                        n.prototype.getImpactVelocityAlongNormal = function() {
                            var t = l
                              , e = h
                              , i = c
                              , o = p
                              , n = u;
                            return this.bi.position.vadd(this.ri, i),
                            this.bj.position.vadd(this.rj, o),
                            this.bi.getVelocityAtWorldPoint(i, t),
                            this.bj.getVelocityAtWorldPoint(o, e),
                            t.vsub(e, n),
                            this.ni.dot(n)
                        }
                    }
                    , {
                        "../math/Mat3": 29,
                        "../math/Vec3": 32,
                        "./Equation": 21
                    }],
                    21: [function(t, e) {
                        e.exports = n;
                        var i = t("../math/JacobianElement")
                          , o = t("../math/Vec3");
                        function n(t, e, o, r) {
                            this.id = n.id++,
                            this.minForce = void 0 === o ? -1e6 : o,
                            this.maxForce = void 0 === r ? 1e6 : r,
                            this.bi = t,
                            this.bj = e,
                            this.a = 0,
                            this.b = 0,
                            this.eps = 0,
                            this.jacobianElementA = new i,
                            this.jacobianElementB = new i,
                            this.enabled = !0,
                            this.multiplier = 0,
                            this.setSpookParams(1e7, 4, 1 / 60)
                        }
                        n.prototype.constructor = n,
                        n.id = 0,
                        n.prototype.setSpookParams = function(t, e, i) {
                            var o = e
                              , n = t
                              , r = i;
                            this.a = 4 / (r * (1 + 4 * o)),
                            this.b = 4 * o / (1 + 4 * o),
                            this.eps = 4 / (r * r * n * (1 + 4 * o))
                        }
                        ,
                        n.prototype.computeB = function(t, e, i) {
                            var o = this.computeGW();
                            return -this.computeGq() * t - o * e - this.computeGiMf() * i
                        }
                        ,
                        n.prototype.computeGq = function() {
                            var t = this.jacobianElementA
                              , e = this.jacobianElementB
                              , i = this.bi
                              , o = this.bj
                              , n = i.position
                              , r = o.position;
                            return t.spatial.dot(n) + e.spatial.dot(r)
                        }
                        ,
                        new o,
                        n.prototype.computeGW = function() {
                            var t = this.jacobianElementA
                              , e = this.jacobianElementB
                              , i = this.bi
                              , o = this.bj
                              , n = i.velocity
                              , r = o.velocity
                              , s = i.angularVelocity
                              , a = o.angularVelocity;
                            return t.multiplyVectors(n, s) + e.multiplyVectors(r, a)
                        }
                        ,
                        n.prototype.computeGWlambda = function() {
                            var t = this.jacobianElementA
                              , e = this.jacobianElementB
                              , i = this.bi
                              , o = this.bj
                              , n = i.vlambda
                              , r = o.vlambda
                              , s = i.wlambda
                              , a = o.wlambda;
                            return t.multiplyVectors(n, s) + e.multiplyVectors(r, a)
                        }
                        ;
                        var r = new o
                          , s = new o
                          , a = new o
                          , l = new o;
                        n.prototype.computeGiMf = function() {
                            var t = this.jacobianElementA
                              , e = this.jacobianElementB
                              , i = this.bi
                              , o = this.bj
                              , n = i.force
                              , h = i.torque
                              , c = o.force
                              , p = o.torque
                              , u = i.invMassSolve
                              , d = o.invMassSolve;
                            return n.scale(u, r),
                            c.scale(d, s),
                            i.invInertiaWorldSolve.vmult(h, a),
                            o.invInertiaWorldSolve.vmult(p, l),
                            t.multiplyVectors(r, a) + e.multiplyVectors(s, l)
                        }
                        ;
                        var h = new o;
                        n.prototype.computeGiMGt = function() {
                            var t = this.jacobianElementA
                              , e = this.jacobianElementB
                              , i = this.bi
                              , o = this.bj
                              , n = i.invMassSolve
                              , r = o.invMassSolve
                              , s = i.invInertiaWorldSolve
                              , a = o.invInertiaWorldSolve
                              , l = n + r;
                            return s.vmult(t.rotational, h),
                            l += h.dot(t.rotational),
                            a.vmult(e.rotational, h),
                            l + h.dot(e.rotational)
                        }
                        ;
                        var c = new o;
                        new o,
                        new o,
                        new o,
                        new o,
                        new o,
                        n.prototype.addToWlambda = function(t) {
                            var e = this.jacobianElementA
                              , i = this.jacobianElementB
                              , o = this.bi
                              , n = this.bj
                              , r = c;
                            o.vlambda.addScaledVector(o.invMassSolve * t, e.spatial, o.vlambda),
                            n.vlambda.addScaledVector(n.invMassSolve * t, i.spatial, n.vlambda),
                            o.invInertiaWorldSolve.vmult(e.rotational, r),
                            o.wlambda.addScaledVector(t, r, o.wlambda),
                            n.invInertiaWorldSolve.vmult(i.rotational, r),
                            n.wlambda.addScaledVector(t, r, n.wlambda)
                        }
                        ,
                        n.prototype.computeC = function() {
                            return this.computeGiMGt() + this.eps
                        }
                    }
                    , {
                        "../math/JacobianElement": 28,
                        "../math/Vec3": 32
                    }],
                    22: [function(t, e) {
                        e.exports = n;
                        var i = t("./Equation")
                          , o = t("../math/Vec3");
                        function n(t, e, n) {
                            i.call(this, t, e, -n, n),
                            this.ri = new o,
                            this.rj = new o,
                            this.t = new o
                        }
                        t("../math/Mat3"),
                        n.prototype = new i,
                        n.prototype.constructor = n;
                        var r = new o
                          , s = new o;
                        n.prototype.computeB = function(t) {
                            this.a;
                            var e = this.b
                              , i = (this.bi,
                            this.bj,
                            this.ri)
                              , o = this.rj
                              , n = r
                              , a = s
                              , l = this.t;
                            i.cross(l, n),
                            o.cross(l, a);
                            var h = this.jacobianElementA
                              , c = this.jacobianElementB;
                            return l.negate(h.spatial),
                            n.negate(h.rotational),
                            c.spatial.copy(l),
                            c.rotational.copy(a),
                            -this.computeGW() * e - t * this.computeGiMf()
                        }
                    }
                    , {
                        "../math/Mat3": 29,
                        "../math/Vec3": 32,
                        "./Equation": 21
                    }],
                    23: [function(t, e) {
                        e.exports = r;
                        var i = t("../math/Vec3")
                          , o = (t("../math/Mat3"),
                        t("./Equation"))
                          , n = t("../math/CMath");
                        function r(t, e, n) {
                            var r = void 0 !== (n = n || {}).maxForce ? n.maxForce : 1e6;
                            o.call(this, t, e, -r, r),
                            this.axisA = n.axisA ? n.axisA.clone() : new i(1,0,0),
                            this.axisB = n.axisB ? n.axisB.clone() : new i(0,1,0),
                            this.maxAngle = Math.PI / 2
                        }
                        r.prototype = new o,
                        r.prototype.constructor = r;
                        var s = new i
                          , a = new i;
                        r.prototype.computeB = function(t) {
                            var e = this.a
                              , i = this.b
                              , o = this.axisA
                              , r = this.axisB
                              , l = s
                              , h = a
                              , c = this.jacobianElementA
                              , p = this.jacobianElementB;
                            return o.cross(r, l),
                            r.cross(o, h),
                            c.rotational.copy(h),
                            p.rotational.copy(l),
                            -(n.cos(this.maxAngle) - o.dot(r)) * e - this.computeGW() * i - t * this.computeGiMf()
                        }
                    }
                    , {
                        "../math/CMath": 27,
                        "../math/Mat3": 29,
                        "../math/Vec3": 32,
                        "./Equation": 21
                    }],
                    24: [function(t, e) {
                        e.exports = n;
                        var i = t("../math/Vec3")
                          , o = (t("../math/Mat3"),
                        t("./Equation"));
                        function n(t, e, n) {
                            n = void 0 !== n ? n : 1e6,
                            o.call(this, t, e, -n, n),
                            this.axisA = new i,
                            this.axisB = new i,
                            this.targetVelocity = 0
                        }
                        n.prototype = new o,
                        n.prototype.constructor = n,
                        n.prototype.computeB = function(t) {
                            this.a;
                            var e = this.b
                              , i = (this.bi,
                            this.bj,
                            this.axisA)
                              , o = this.axisB
                              , n = this.jacobianElementA
                              , r = this.jacobianElementB;
                            return n.rotational.copy(i),
                            o.negate(r.rotational),
                            -(this.computeGW() - this.targetVelocity) * e - t * this.computeGiMf()
                        }
                    }
                    , {
                        "../math/Mat3": 29,
                        "../math/Vec3": 32,
                        "./Equation": 21
                    }],
                    25: [function(t, e) {
                        var i = t("../utils/Utils");
                        function o(t, e, n) {
                            n = i.defaults(n, {
                                friction: .3,
                                restitution: .3,
                                contactEquationStiffness: 1e7,
                                contactEquationRelaxation: 3,
                                frictionEquationStiffness: 1e7,
                                frictionEquationRelaxation: 3
                            }),
                            this.id = o.idCounter++,
                            this.materials = [t, e],
                            this.friction = n.friction,
                            this.restitution = n.restitution,
                            this.contactEquationStiffness = n.contactEquationStiffness,
                            this.contactEquationRelaxation = n.contactEquationRelaxation,
                            this.frictionEquationStiffness = n.frictionEquationStiffness,
                            this.frictionEquationRelaxation = n.frictionEquationRelaxation
                        }
                        e.exports = o,
                        o.idCounter = 0
                    }
                    , {
                        "../utils/Utils": 55
                    }],
                    26: [function(t, e) {
                        function i(t) {
                            var e = "";
                            "string" == typeof (t = t || {}) ? (e = t,
                            t = {}) : "object" == typeof t && (e = ""),
                            this.name = e,
                            this.id = i.idCounter++,
                            this.friction = void 0 !== t.friction ? t.friction : -1,
                            this.restitution = void 0 !== t.restitution ? t.restitution : -1
                        }
                        e.exports = i,
                        i.idCounter = 0
                    }
                    , {}],
                    27: [function(t, e) {
                        var i = 180 / Math.PI;
                        function o(t) {
                            return t * i
                        }
                        var n = {};
                        function r(t) {
                            if (n.digit != t) {
                                for (var e = 1 / Math.pow(10, t), o = 0; o <= 90; o += e)
                                    n[o.toFixed(t)] = Math.sin(o / i);
                                n.digit = t
                            }
                        }
                        function s(t, e) {
                            return t <= 90 ? n[t.toFixed(e)] : t <= 180 ? n[(t = 180 - t).toFixed(e)] : t <= 270 ? -n[(t -= 180).toFixed(e)] : -n[(t = 360 - t).toFixed(e)]
                        }
                        function a(t) {
                            var e = o(t) % 360;
                            return e < 0 && (e += 360),
                            s(e, p._digit)
                        }
                        function l(t) {
                            var e = (o(t) + 90) % 360;
                            return e < 0 && (e += 360),
                            s(e, p._digit)
                        }
                        function h(t) {
                            return Math.sin(t).toFixed(p.digit)
                        }
                        function c(t) {
                            return Math.cos(t).toFixed(p.digit)
                        }
                        var p = {
                            sin: Math.sin,
                            cos: Math.cos,
                            atan2: Math.atan2
                        };
                        p._sin = a,
                        p._cos = l,
                        p._sinArr = n,
                        p._sin360 = s,
                        p._sinNative = h,
                        p._cosNative = c,
                        p._radian2angle = o,
                        p._calculateSinByDigit = r,
                        p._digit = 1,
                        Object.defineProperty(p, "digit", {
                            get: function() {
                                return this._digit
                            },
                            set: function(t) {
                                this._digit = t,
                                1 == this._mode && r(t)
                            }
                        }),
                        p._mode = 0,
                        Object.defineProperty(p, "mode", {
                            get: function() {
                                return this._mode
                            },
                            set: function(t) {
                                this._mode != t && (this._mode = t,
                                0 == t ? (p.sin = Math.sin,
                                p.cos = Math.cos) : 1 == t ? (p.digit = p._digit,
                                p.sin = a,
                                p.cos = l) : 2 == t && (p.sin = h,
                                p.cos = c))
                            }
                        }),
                        e.exports = p
                    }
                    , {}],
                    28: [function(t, e) {
                        e.exports = o;
                        var i = t("./Vec3");
                        function o() {
                            this.spatial = new i,
                            this.rotational = new i
                        }
                        o.prototype.multiplyElement = function(t) {
                            return t.spatial.dot(this.spatial) + t.rotational.dot(this.rotational)
                        }
                        ,
                        o.prototype.multiplyVectors = function(t, e) {
                            return t.dot(this.spatial) + e.dot(this.rotational)
                        }
                    }
                    , {
                        "./Vec3": 32
                    }],
                    29: [function(t, e) {
                        e.exports = o;
                        var i = t("./Vec3");
                        function o(t) {
                            this.elements = t || [0, 0, 0, 0, 0, 0, 0, 0, 0]
                        }
                        o.prototype.identity = function() {
                            var t = this.elements;
                            t[0] = 1,
                            t[1] = 0,
                            t[2] = 0,
                            t[3] = 0,
                            t[4] = 1,
                            t[5] = 0,
                            t[6] = 0,
                            t[7] = 0,
                            t[8] = 1
                        }
                        ,
                        o.prototype.setZero = function() {
                            var t = this.elements;
                            t[0] = 0,
                            t[1] = 0,
                            t[2] = 0,
                            t[3] = 0,
                            t[4] = 0,
                            t[5] = 0,
                            t[6] = 0,
                            t[7] = 0,
                            t[8] = 0
                        }
                        ,
                        o.prototype.setTrace = function(t) {
                            var e = this.elements;
                            e[0] = t.x,
                            e[4] = t.y,
                            e[8] = t.z
                        }
                        ,
                        o.prototype.getTrace = function(t) {
                            t = t || new i;
                            var e = this.elements;
                            t.x = e[0],
                            t.y = e[4],
                            t.z = e[8]
                        }
                        ,
                        o.prototype.vmult = function(t, e) {
                            e = e || new i;
                            var o = this.elements
                              , n = t.x
                              , r = t.y
                              , s = t.z;
                            return e.x = o[0] * n + o[1] * r + o[2] * s,
                            e.y = o[3] * n + o[4] * r + o[5] * s,
                            e.z = o[6] * n + o[7] * r + o[8] * s,
                            e
                        }
                        ,
                        o.prototype.smult = function(t) {
                            for (var e = 0; e < this.elements.length; e++)
                                this.elements[e] *= t
                        }
                        ,
                        o.prototype.mmult = function(t, e) {
                            for (var i = e || new o, n = 0; n < 3; n++)
                                for (var r = 0; r < 3; r++) {
                                    for (var s = 0, a = 0; a < 3; a++)
                                        s += t.elements[n + 3 * a] * this.elements[a + 3 * r];
                                    i.elements[n + 3 * r] = s
                                }
                            return i
                        }
                        ,
                        o.prototype.scale = function(t, e) {
                            e = e || new o;
                            for (var i = this.elements, n = e.elements, r = 0; 3 !== r; r++)
                                n[3 * r + 0] = t.x * i[3 * r + 0],
                                n[3 * r + 1] = t.y * i[3 * r + 1],
                                n[3 * r + 2] = t.z * i[3 * r + 2];
                            return e
                        }
                        ,
                        o.prototype.solve = function(t, e) {
                            e = e || new i;
                            for (var o, n = [], r = 0; r < 12; r++)
                                n.push(0);
                            for (r = 0; r < 3; r++)
                                for (o = 0; o < 3; o++)
                                    n[r + 4 * o] = this.elements[r + 3 * o];
                            n[3] = t.x,
                            n[7] = t.y,
                            n[11] = t.z;
                            var s, a, l = 3, h = l;
                            do {
                                if (0 === n[(r = h - l) + 4 * r])
                                    for (o = r + 1; o < h; o++)
                                        if (0 !== n[r + 4 * o]) {
                                            s = 4;
                                            do {
                                                n[(a = 4 - s) + 4 * r] += n[a + 4 * o]
                                            } while (--s);
                                            break
                                        }
                                if (0 !== n[r + 4 * r])
                                    for (o = r + 1; o < h; o++) {
                                        var c = n[r + 4 * o] / n[r + 4 * r];
                                        s = 4;
                                        do {
                                            n[(a = 4 - s) + 4 * o] = a <= r ? 0 : n[a + 4 * o] - n[a + 4 * r] * c
                                        } while (--s)
                                    }
                            } while (--l);
                            if (e.z = n[11] / n[10],
                            e.y = (n[7] - n[6] * e.z) / n[5],
                            e.x = (n[3] - n[2] * e.z - n[1] * e.y) / n[0],
                            isNaN(e.x) || isNaN(e.y) || isNaN(e.z) || e.x === 1 / 0 || e.y === 1 / 0 || e.z === 1 / 0)
                                throw "Could not solve equation! Got x=[" + e.toString() + "], b=[" + t.toString() + "], A=[" + this.toString() + "]";
                            return e
                        }
                        ,
                        o.prototype.e = function(t, e, i) {
                            if (void 0 === i)
                                return this.elements[e + 3 * t];
                            this.elements[e + 3 * t] = i
                        }
                        ,
                        o.prototype.copy = function(t) {
                            for (var e = 0; e < t.elements.length; e++)
                                this.elements[e] = t.elements[e];
                            return this
                        }
                        ,
                        o.prototype.toString = function() {
                            for (var t = "", e = 0; e < 9; e++)
                                t += this.elements[e] + ",";
                            return t
                        }
                        ,
                        o.prototype.reverse = function(t) {
                            t = t || new o;
                            for (var e, i = [], n = 0; n < 18; n++)
                                i.push(0);
                            for (n = 0; n < 3; n++)
                                for (e = 0; e < 3; e++)
                                    i[n + 6 * e] = this.elements[n + 3 * e];
                            i[3] = 1,
                            i[9] = 0,
                            i[15] = 0,
                            i[4] = 0,
                            i[10] = 1,
                            i[16] = 0,
                            i[5] = 0,
                            i[11] = 0,
                            i[17] = 1;
                            var r, s, a = 3, l = a;
                            do {
                                if (0 === i[(n = l - a) + 6 * n])
                                    for (e = n + 1; e < l; e++)
                                        if (0 !== i[n + 6 * e]) {
                                            r = 6;
                                            do {
                                                i[(s = 6 - r) + 6 * n] += i[s + 6 * e]
                                            } while (--r);
                                            break
                                        }
                                if (0 !== i[n + 6 * n])
                                    for (e = n + 1; e < l; e++) {
                                        var h = i[n + 6 * e] / i[n + 6 * n];
                                        r = 6;
                                        do {
                                            i[(s = 6 - r) + 6 * e] = s <= n ? 0 : i[s + 6 * e] - i[s + 6 * n] * h
                                        } while (--r)
                                    }
                            } while (--a);
                            n = 2;
                            do {
                                e = n - 1;
                                do {
                                    h = i[n + 6 * e] / i[n + 6 * n],
                                    r = 6;
                                    do {
                                        i[(s = 6 - r) + 6 * e] = i[s + 6 * e] - i[s + 6 * n] * h
                                    } while (--r)
                                } while (e--)
                            } while (--n);
                            n = 2;
                            do {
                                h = 1 / i[n + 6 * n],
                                r = 6;
                                do {
                                    i[(s = 6 - r) + 6 * n] = i[s + 6 * n] * h
                                } while (--r)
                            } while (n--);
                            n = 2;
                            do {
                                e = 2;
                                do {
                                    if (s = i[3 + e + 6 * n],
                                    isNaN(s) || s === 1 / 0)
                                        throw "Could not reverse! A=[" + this.toString() + "]";
                                    t.e(n, e, s)
                                } while (e--)
                            } while (n--);
                            return t
                        }
                        ,
                        o.prototype.setRotationFromQuaternion = function(t) {
                            var e = t.x
                              , i = t.y
                              , o = t.z
                              , n = t.w
                              , r = e + e
                              , s = i + i
                              , a = o + o
                              , l = e * r
                              , h = e * s
                              , c = e * a
                              , p = i * s
                              , u = i * a
                              , d = o * a
                              , y = n * r
                              , f = n * s
                              , v = n * a
                              , m = this.elements;
                            return m[0] = 1 - (p + d),
                            m[1] = h - v,
                            m[2] = c + f,
                            m[3] = h + v,
                            m[4] = 1 - (l + d),
                            m[5] = u - y,
                            m[6] = c - f,
                            m[7] = u + y,
                            m[8] = 1 - (l + p),
                            this
                        }
                        ,
                        o.prototype.transpose = function(t) {
                            for (var e = (t = t || new o).elements, i = this.elements, n = 0; 3 !== n; n++)
                                for (var r = 0; 3 !== r; r++)
                                    e[3 * n + r] = i[3 * r + n];
                            return t
                        }
                    }
                    , {
                        "./Vec3": 32
                    }],
                    30: [function(t, e) {
                        e.exports = n;
                        var i = t("./Vec3")
                          , o = t("./CMath");
                        function n(t, e, i, o) {
                            this.x = void 0 !== t ? t : 0,
                            this.y = void 0 !== e ? e : 0,
                            this.z = void 0 !== i ? i : 0,
                            this.w = void 0 !== o ? o : 1
                        }
                        n.prototype.set = function(t, e, i, o) {
                            return this.x = t,
                            this.y = e,
                            this.z = i,
                            this.w = o,
                            this
                        }
                        ,
                        n.prototype.toString = function() {
                            return this.x + "," + this.y + "," + this.z + "," + this.w
                        }
                        ,
                        n.prototype.toArray = function() {
                            return [this.x, this.y, this.z, this.w]
                        }
                        ,
                        n.prototype.setFromAxisAngle = function(t, e) {
                            var i = o.sin(.5 * e);
                            return this.x = t.x * i,
                            this.y = t.y * i,
                            this.z = t.z * i,
                            this.w = o.cos(.5 * e),
                            this
                        }
                        ,
                        n.prototype.toAxisAngle = function(t) {
                            t = t || new i,
                            this.normalize();
                            var e = 2 * Math.acos(this.w)
                              , o = Math.sqrt(1 - this.w * this.w);
                            return o < .001 ? (t.x = this.x,
                            t.y = this.y,
                            t.z = this.z) : (t.x = this.x / o,
                            t.y = this.y / o,
                            t.z = this.z / o),
                            [t, e]
                        }
                        ;
                        var r = new i
                          , s = new i;
                        n.prototype.setFromVectors = function(t, e) {
                            if (t.isAntiparallelTo(e)) {
                                var i = r
                                  , o = s;
                                t.tangents(i, o),
                                this.setFromAxisAngle(i, Math.PI)
                            } else {
                                var n = t.cross(e);
                                this.x = n.x,
                                this.y = n.y,
                                this.z = n.z,
                                this.w = Math.sqrt(Math.pow(t.norm(), 2) * Math.pow(e.norm(), 2)) + t.dot(e),
                                this.normalize()
                            }
                            return this
                        }
                        ,
                        new i,
                        new i,
                        new i,
                        n.prototype.mult = function(t, e) {
                            e = e || new n;
                            var i = this.x
                              , o = this.y
                              , r = this.z
                              , s = this.w
                              , a = t.x
                              , l = t.y
                              , h = t.z
                              , c = t.w;
                            return e.x = i * c + s * a + o * h - r * l,
                            e.y = o * c + s * l + r * a - i * h,
                            e.z = r * c + s * h + i * l - o * a,
                            e.w = s * c - i * a - o * l - r * h,
                            e
                        }
                        ,
                        n.prototype.inverse = function(t) {
                            var e = this.x
                              , i = this.y
                              , o = this.z
                              , r = this.w;
                            t = t || new n,
                            this.conjugate(t);
                            var s = 1 / (e * e + i * i + o * o + r * r);
                            return t.x *= s,
                            t.y *= s,
                            t.z *= s,
                            t.w *= s,
                            t
                        }
                        ,
                        n.prototype.conjugate = function(t) {
                            return (t = t || new n).x = -this.x,
                            t.y = -this.y,
                            t.z = -this.z,
                            t.w = this.w,
                            t
                        }
                        ,
                        n.prototype.normalize = function() {
                            var t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
                            return 0 === t ? (this.x = 0,
                            this.y = 0,
                            this.z = 0,
                            this.w = 0) : (t = 1 / t,
                            this.x *= t,
                            this.y *= t,
                            this.z *= t,
                            this.w *= t),
                            this
                        }
                        ,
                        n.prototype.normalizeFast = function() {
                            var t = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
                            return 0 === t ? (this.x = 0,
                            this.y = 0,
                            this.z = 0,
                            this.w = 0) : (this.x *= t,
                            this.y *= t,
                            this.z *= t,
                            this.w *= t),
                            this
                        }
                        ,
                        n.prototype.vmult = function(t, e) {
                            e = e || new i;
                            var o = t.x
                              , n = t.y
                              , r = t.z
                              , s = this.x
                              , a = this.y
                              , l = this.z
                              , h = this.w
                              , c = h * o + a * r - l * n
                              , p = h * n + l * o - s * r
                              , u = h * r + s * n - a * o
                              , d = -s * o - a * n - l * r;
                            return e.x = c * h + d * -s + p * -l - u * -a,
                            e.y = p * h + d * -a + u * -s - c * -l,
                            e.z = u * h + d * -l + c * -a - p * -s,
                            e
                        }
                        ,
                        n.prototype.copy = function(t) {
                            return this.x = t.x,
                            this.y = t.y,
                            this.z = t.z,
                            this.w = t.w,
                            this
                        }
                        ,
                        n.prototype.toEuler = function(t, e) {
                            var i, n, r;
                            e = e || "YZX";
                            var s = this.x
                              , a = this.y
                              , l = this.z
                              , h = this.w;
                            switch (e) {
                            case "YZX":
                                var c = s * a + l * h;
                                if (c > .499 && (i = 2 * o.atan2(s, h),
                                n = Math.PI / 2,
                                r = 0),
                                c < -.499 && (i = -2 * o.atan2(s, h),
                                n = -Math.PI / 2,
                                r = 0),
                                isNaN(i)) {
                                    var p = s * s
                                      , u = a * a
                                      , d = l * l;
                                    i = o.atan2(2 * a * h - 2 * s * l, 1 - 2 * u - 2 * d),
                                    n = Math.asin(2 * c),
                                    r = o.atan2(2 * s * h - 2 * a * l, 1 - 2 * p - 2 * d)
                                }
                                break;
                            default:
                                throw new Error("Euler order " + e + " not supported yet.")
                            }
                            t.y = i,
                            t.z = n,
                            t.x = r
                        }
                        ,
                        n.prototype.setFromEuler = function(t, e, i, n) {
                            n = n || "XYZ";
                            var r = o.cos(t / 2)
                              , s = o.cos(e / 2)
                              , a = o.cos(i / 2)
                              , l = o.sin(t / 2)
                              , h = o.sin(e / 2)
                              , c = o.sin(i / 2);
                            return "XYZ" === n ? (this.x = l * s * a + r * h * c,
                            this.y = r * h * a - l * s * c,
                            this.z = r * s * c + l * h * a,
                            this.w = r * s * a - l * h * c) : "YXZ" === n ? (this.x = l * s * a + r * h * c,
                            this.y = r * h * a - l * s * c,
                            this.z = r * s * c - l * h * a,
                            this.w = r * s * a + l * h * c) : "ZXY" === n ? (this.x = l * s * a - r * h * c,
                            this.y = r * h * a + l * s * c,
                            this.z = r * s * c + l * h * a,
                            this.w = r * s * a - l * h * c) : "ZYX" === n ? (this.x = l * s * a - r * h * c,
                            this.y = r * h * a + l * s * c,
                            this.z = r * s * c - l * h * a,
                            this.w = r * s * a + l * h * c) : "YZX" === n ? (this.x = l * s * a + r * h * c,
                            this.y = r * h * a + l * s * c,
                            this.z = r * s * c - l * h * a,
                            this.w = r * s * a - l * h * c) : "XZY" === n && (this.x = l * s * a - r * h * c,
                            this.y = r * h * a - l * s * c,
                            this.z = r * s * c + l * h * a,
                            this.w = r * s * a + l * h * c),
                            this
                        }
                        ,
                        n.prototype.clone = function() {
                            return new n(this.x,this.y,this.z,this.w)
                        }
                        ,
                        n.prototype.slerp = function(t, e, i) {
                            i = i || new n;
                            var r, s, a, l, h, c = this.x, p = this.y, u = this.z, d = this.w, y = t.x, f = t.y, v = t.z, m = t.w;
                            return (s = c * y + p * f + u * v + d * m) < 0 && (s = -s,
                            y = -y,
                            f = -f,
                            v = -v,
                            m = -m),
                            1 - s > 1e-6 ? (r = Math.acos(s),
                            a = o.sin(r),
                            l = o.sin((1 - e) * r) / a,
                            h = o.sin(e * r) / a) : (l = 1 - e,
                            h = e),
                            i.x = l * c + h * y,
                            i.y = l * p + h * f,
                            i.z = l * u + h * v,
                            i.w = l * d + h * m,
                            i
                        }
                        ,
                        n.prototype.integrate = function(t, e, i, o) {
                            o = o || new n;
                            var r = t.x * i.x
                              , s = t.y * i.y
                              , a = t.z * i.z
                              , l = this.x
                              , h = this.y
                              , c = this.z
                              , p = this.w
                              , u = .5 * e;
                            return o.x += u * (r * p + s * c - a * h),
                            o.y += u * (s * p + a * l - r * c),
                            o.z += u * (a * p + r * h - s * l),
                            o.w += u * (-r * l - s * h - a * c),
                            o
                        }
                    }
                    , {
                        "./CMath": 27,
                        "./Vec3": 32
                    }],
                    31: [function(t, e) {
                        var i = t("./Vec3")
                          , o = t("./Quaternion");
                        function n(t) {
                            t = t || {},
                            this.position = new i,
                            t.position && this.position.copy(t.position),
                            this.quaternion = new o,
                            t.quaternion && this.quaternion.copy(t.quaternion)
                        }
                        e.exports = n;
                        var r = new o;
                        n.pointToLocalFrame = function(t, e, o, n) {
                            return n = n || new i,
                            o.vsub(t, n),
                            e.conjugate(r),
                            r.vmult(n, n),
                            n
                        }
                        ,
                        n.prototype.pointToLocal = function(t, e) {
                            return n.pointToLocalFrame(this.position, this.quaternion, t, e)
                        }
                        ,
                        n.pointToWorldFrame = function(t, e, o, n) {
                            return n = n || new i,
                            e.vmult(o, n),
                            n.vadd(t, n),
                            n
                        }
                        ,
                        n.prototype.pointToWorld = function(t, e) {
                            return n.pointToWorldFrame(this.position, this.quaternion, t, e)
                        }
                        ,
                        n.prototype.vectorToWorldFrame = function(t, e) {
                            return e = e || new i,
                            this.quaternion.vmult(t, e),
                            e
                        }
                        ,
                        n.vectorToWorldFrame = function(t, e, i) {
                            return t.vmult(e, i),
                            i
                        }
                        ,
                        n.vectorToLocalFrame = function(t, e, o, n) {
                            return n = n || new i,
                            e.w *= -1,
                            e.vmult(o, n),
                            e.w *= -1,
                            n
                        }
                    }
                    , {
                        "./Quaternion": 30,
                        "./Vec3": 32
                    }],
                    32: [function(t, e) {
                        e.exports = o;
                        var i = t("./Mat3");
                        function o(t, e, i) {
                            this.x = t || 0,
                            this.y = e || 0,
                            this.z = i || 0
                        }
                        o.ZERO = new o(0,0,0),
                        o.UNIT_X = new o(1,0,0),
                        o.UNIT_Y = new o(0,1,0),
                        o.UNIT_Z = new o(0,0,1),
                        o.prototype.cross = function(t, e) {
                            var i = t.x
                              , n = t.y
                              , r = t.z
                              , s = this.x
                              , a = this.y
                              , l = this.z;
                            return (e = e || new o).x = a * r - l * n,
                            e.y = l * i - s * r,
                            e.z = s * n - a * i,
                            e
                        }
                        ,
                        o.prototype.set = function(t, e, i) {
                            return this.x = t,
                            this.y = e,
                            this.z = i,
                            this
                        }
                        ,
                        o.prototype.setZero = function() {
                            this.x = this.y = this.z = 0
                        }
                        ,
                        o.prototype.vadd = function(t, e) {
                            if (!e)
                                return new o(this.x + t.x,this.y + t.y,this.z + t.z);
                            e.x = t.x + this.x,
                            e.y = t.y + this.y,
                            e.z = t.z + this.z
                        }
                        ,
                        o.prototype.vsub = function(t, e) {
                            if (!e)
                                return new o(this.x - t.x,this.y - t.y,this.z - t.z);
                            e.x = this.x - t.x,
                            e.y = this.y - t.y,
                            e.z = this.z - t.z
                        }
                        ,
                        o.prototype.crossmat = function() {
                            return new i([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0])
                        }
                        ,
                        o.prototype.normalize = function() {
                            var t = this.x
                              , e = this.y
                              , i = this.z
                              , o = Math.sqrt(t * t + e * e + i * i);
                            if (o > 0) {
                                var n = 1 / o;
                                this.x *= n,
                                this.y *= n,
                                this.z *= n
                            } else
                                this.x = 0,
                                this.y = 0,
                                this.z = 0;
                            return o
                        }
                        ,
                        o.prototype.unit = function(t) {
                            t = t || new o;
                            var e = this.x
                              , i = this.y
                              , n = this.z
                              , r = Math.sqrt(e * e + i * i + n * n);
                            return r > 0 ? (r = 1 / r,
                            t.x = e * r,
                            t.y = i * r,
                            t.z = n * r) : (t.x = 1,
                            t.y = 0,
                            t.z = 0),
                            t
                        }
                        ,
                        o.prototype.norm = function() {
                            var t = this.x
                              , e = this.y
                              , i = this.z;
                            return Math.sqrt(t * t + e * e + i * i)
                        }
                        ,
                        o.prototype.length = o.prototype.norm,
                        o.prototype.norm2 = function() {
                            return this.dot(this)
                        }
                        ,
                        o.prototype.lengthSquared = o.prototype.norm2,
                        o.prototype.distanceTo = function(t) {
                            var e = this.x
                              , i = this.y
                              , o = this.z
                              , n = t.x
                              , r = t.y
                              , s = t.z;
                            return Math.sqrt((n - e) * (n - e) + (r - i) * (r - i) + (s - o) * (s - o))
                        }
                        ,
                        o.prototype.distanceSquared = function(t) {
                            var e = this.x
                              , i = this.y
                              , o = this.z
                              , n = t.x
                              , r = t.y
                              , s = t.z;
                            return (n - e) * (n - e) + (r - i) * (r - i) + (s - o) * (s - o)
                        }
                        ,
                        o.prototype.mult = function(t, e) {
                            e = e || new o;
                            var i = this.x
                              , n = this.y
                              , r = this.z;
                            return e.x = t * i,
                            e.y = t * n,
                            e.z = t * r,
                            e
                        }
                        ,
                        o.prototype.vmul = function(t, e) {
                            return (e = e || new o).x = t.x * this.x,
                            e.y = t.y * this.y,
                            e.z = t.z * this.z,
                            e
                        }
                        ,
                        o.prototype.scale = o.prototype.mult,
                        o.prototype.addScaledVector = function(t, e, i) {
                            return (i = i || new o).x = this.x + t * e.x,
                            i.y = this.y + t * e.y,
                            i.z = this.z + t * e.z,
                            i
                        }
                        ,
                        o.prototype.dot = function(t) {
                            return this.x * t.x + this.y * t.y + this.z * t.z
                        }
                        ,
                        o.prototype.isZero = function() {
                            return 0 === this.x && 0 === this.y && 0 === this.z
                        }
                        ,
                        o.prototype.negate = function(t) {
                            return (t = t || new o).x = -this.x,
                            t.y = -this.y,
                            t.z = -this.z,
                            t
                        }
                        ;
                        var n = new o
                          , r = new o;
                        o.prototype.tangents = function(t, e) {
                            var i = this.norm();
                            if (i > 0) {
                                var o = n
                                  , s = 1 / i;
                                o.set(this.x * s, this.y * s, this.z * s);
                                var a = r;
                                Math.abs(o.x) < .9 ? (a.set(1, 0, 0),
                                o.cross(a, t)) : (a.set(0, 1, 0),
                                o.cross(a, t)),
                                o.cross(t, e)
                            } else
                                t.set(1, 0, 0),
                                e.set(0, 1, 0)
                        }
                        ,
                        o.prototype.toString = function() {
                            return this.x + "," + this.y + "," + this.z
                        }
                        ,
                        o.prototype.toArray = function() {
                            return [this.x, this.y, this.z]
                        }
                        ,
                        o.prototype.copy = function(t) {
                            return this.x = t.x,
                            this.y = t.y,
                            this.z = t.z,
                            this
                        }
                        ,
                        o.prototype.lerp = function(t, e, i) {
                            var o = this.x
                              , n = this.y
                              , r = this.z;
                            i.x = o + (t.x - o) * e,
                            i.y = n + (t.y - n) * e,
                            i.z = r + (t.z - r) * e
                        }
                        ,
                        o.prototype.almostEquals = function(t, e) {
                            return void 0 === e && (e = 1e-6),
                            !(Math.abs(this.x - t.x) > e || Math.abs(this.y - t.y) > e || Math.abs(this.z - t.z) > e)
                        }
                        ,
                        o.prototype.almostZero = function(t) {
                            return void 0 === t && (t = 1e-6),
                            !(Math.abs(this.x) > t || Math.abs(this.y) > t || Math.abs(this.z) > t)
                        }
                        ;
                        var s = new o;
                        o.prototype.isAntiparallelTo = function(t, e) {
                            return this.negate(s),
                            s.almostEquals(t, e)
                        }
                        ,
                        o.prototype.clone = function() {
                            return new o(this.x,this.y,this.z)
                        }
                    }
                    , {
                        "./Mat3": 29
                    }],
                    33: [function(t, e) {
                        e.exports = h;
                        var i = t("../utils/EventTarget")
                          , o = (t("../shapes/Shape"),
                        t("../math/Vec3"))
                          , n = t("../math/Mat3")
                          , r = t("../math/Quaternion")
                          , s = (t("../material/Material"),
                        t("../collision/AABB"))
                          , a = t("../shapes/Box")
                          , l = t("../world/World");
                        function h(t) {
                            t = t || {},
                            i.apply(this),
                            this.id = h.idCounter++,
                            this.world = null,
                            this.preStep = null,
                            this.postStep = null,
                            this.vlambda = new o,
                            this.collisionFilterGroup = "number" == typeof t.collisionFilterGroup ? t.collisionFilterGroup : 1,
                            this.collisionFilterMask = "number" == typeof t.collisionFilterMask ? t.collisionFilterMask : -1,
                            this.collisionResponse = !0,
                            this.position = new o,
                            this.previousPosition = new o,
                            this.interpolatedPosition = new o,
                            this.initPosition = new o,
                            t.position && (this.position.copy(t.position),
                            this.previousPosition.copy(t.position),
                            this.interpolatedPosition.copy(t.position),
                            this.initPosition.copy(t.position)),
                            this.velocity = new o,
                            t.velocity && this.velocity.copy(t.velocity),
                            this.initVelocity = new o,
                            this.force = new o;
                            var e = "number" == typeof t.mass ? t.mass : 0;
                            this.mass = e,
                            this.invMass = e > 0 ? 1 / e : 0,
                            this.material = t.material || null,
                            this.linearDamping = "number" == typeof t.linearDamping ? t.linearDamping : .01,
                            this.type = e <= 0 ? h.STATIC : h.DYNAMIC,
                            typeof t.type == typeof h.STATIC && (this.type = t.type),
                            this.allowSleep = void 0 === t.allowSleep || t.allowSleep,
                            this.sleepState = 0,
                            this.sleepSpeedLimit = void 0 !== t.sleepSpeedLimit ? t.sleepSpeedLimit : .1,
                            this.sleepTimeLimit = void 0 !== t.sleepTimeLimit ? t.sleepTimeLimit : 1,
                            this.timeLastSleepy = 0,
                            this._wakeUpAfterNarrowphase = !1,
                            this.torque = new o,
                            this.quaternion = new r,
                            this.initQuaternion = new r,
                            this.previousQuaternion = new r,
                            this.interpolatedQuaternion = new r,
                            t.quaternion && (this.quaternion.copy(t.quaternion),
                            this.initQuaternion.copy(t.quaternion),
                            this.previousQuaternion.copy(t.quaternion),
                            this.interpolatedQuaternion.copy(t.quaternion)),
                            this.angularVelocity = new o,
                            t.angularVelocity && this.angularVelocity.copy(t.angularVelocity),
                            this.initAngularVelocity = new o,
                            this.shapes = [],
                            this.shapeOffsets = [],
                            this.shapeOrientations = [],
                            this.inertia = new o,
                            this.invInertia = new o,
                            this.invInertiaWorld = new n,
                            this.invMassSolve = 0,
                            this.invInertiaSolve = new o,
                            this.invInertiaWorldSolve = new n,
                            this.fixedRotation = void 0 !== t.fixedRotation && t.fixedRotation,
                            this.useGravity = !0,
                            this.angularDamping = void 0 !== t.angularDamping ? t.angularDamping : .01,
                            this.linearFactor = new o(1,1,1),
                            t.linearFactor && this.linearFactor.copy(t.linearFactor),
                            this.angularFactor = new o(1,1,1),
                            t.angularFactor && this.angularFactor.copy(t.angularFactor),
                            this.aabb = new s,
                            this.aabbNeedsUpdate = !0,
                            this.boundingRadius = 0,
                            this.wlambda = new o,
                            t.shape && this.addShape(t.shape),
                            this.hasTrigger = !0,
                            this.updateMassProperties()
                        }
                        h.prototype = new i,
                        h.prototype.constructor = h,
                        h.COLLIDE_EVENT_NAME = "collide",
                        h.DYNAMIC = 1,
                        h.STATIC = 2,
                        h.KINEMATIC = 4,
                        h.AWAKE = 0,
                        h.SLEEPY = 1,
                        h.SLEEPING = 2,
                        h.idCounter = 0,
                        h.wakeupEvent = {
                            type: "wakeup"
                        },
                        h.prototype.wakeUp = function() {
                            l.SLEEPING = !1;
                            var t = this.sleepState;
                            this.sleepState = 0,
                            this._wakeUpAfterNarrowphase = !1,
                            t === h.SLEEPING && this.dispatchEvent(h.wakeupEvent)
                        }
                        ,
                        h.prototype.sleep = function() {
                            this.sleepState = h.SLEEPING,
                            this.velocity.set(0, 0, 0),
                            this.angularVelocity.set(0, 0, 0),
                            this._wakeUpAfterNarrowphase = !1
                        }
                        ,
                        h.sleepyEvent = {
                            type: "sleepy"
                        },
                        h.sleepEvent = {
                            type: "sleep"
                        },
                        h.prototype.sleepTick = function(t) {
                            if (this.allowSleep) {
                                var e = this.sleepState
                                  , i = this.velocity.norm2() + this.angularVelocity.norm2()
                                  , o = Math.pow(this.sleepSpeedLimit, 2);
                                e === h.AWAKE && i < o ? (this.sleepState = h.SLEEPY,
                                this.timeLastSleepy = t,
                                this.dispatchEvent(h.sleepyEvent)) : e === h.SLEEPY && i > o ? this.wakeUp() : e === h.SLEEPY && t - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(),
                                this.dispatchEvent(h.sleepEvent))
                            }
                        }
                        ,
                        h.prototype.updateSolveMassProperties = function() {
                            this.sleepState === h.SLEEPING || this.type === h.KINEMATIC ? (this.invMassSolve = 0,
                            this.invInertiaSolve.setZero(),
                            this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass,
                            this.invInertiaSolve.copy(this.invInertia),
                            this.invInertiaWorldSolve.copy(this.invInertiaWorld))
                        }
                        ,
                        h.prototype.pointToLocalFrame = function(t, e) {
                            return e = e || new o,
                            t.vsub(this.position, e),
                            this.quaternion.conjugate().vmult(e, e),
                            e
                        }
                        ,
                        h.prototype.vectorToLocalFrame = function(t, e) {
                            return e = e || new o,
                            this.quaternion.conjugate().vmult(t, e),
                            e
                        }
                        ,
                        h.prototype.pointToWorldFrame = function(t, e) {
                            return e = e || new o,
                            this.quaternion.vmult(t, e),
                            e.vadd(this.position, e),
                            e
                        }
                        ,
                        h.prototype.vectorToWorldFrame = function(t, e) {
                            return e = e || new o,
                            this.quaternion.vmult(t, e),
                            e
                        }
                        ;
                        var c = new o
                          , p = new r;
                        h.prototype.addShape = function(t, e, i) {
                            var n = new o
                              , s = new r;
                            return e && n.copy(e),
                            i && s.copy(i),
                            this.shapes.push(t),
                            this.shapeOffsets.push(n),
                            this.shapeOrientations.push(s),
                            this.aabbNeedsUpdate = !0,
                            this.updateMassProperties(),
                            this.updateBoundingRadius(),
                            this.updateHasTrigger(),
                            l.idToShapeMap[t.id] = t,
                            t.body = this,
                            this
                        }
                        ,
                        h.prototype.removeShape = function(t) {
                            var e = this.shapes.indexOf(t);
                            -1 !== e && (this.shapes.splice(e, 1),
                            this.shapeOffsets.splice(e, 1),
                            this.shapeOrientations.splice(e, 1),
                            this.aabbNeedsUpdate = !0,
                            this.updateMassProperties(),
                            this.updateBoundingRadius(),
                            this.updateHasTrigger())
                        }
                        ,
                        h.prototype.updateBoundingRadius = function() {
                            for (var t = this.shapes, e = this.shapeOffsets, i = t.length, o = 0, n = 0; n !== i; n++) {
                                var r = t[n];
                                r.updateBoundingSphereRadius();
                                var s = e[n].norm()
                                  , a = r.boundingSphereRadius;
                                s + a > o && (o = s + a)
                            }
                            this.boundingRadius = o
                        }
                        ;
                        var u = new s;
                        h.prototype.computeAABB = function() {
                            for (var t = this.shapes, e = this.shapeOffsets, i = this.shapeOrientations, o = t.length, n = c, r = p, s = this.quaternion, a = this.aabb, l = u, h = 0; h !== o; h++) {
                                var d = t[h];
                                s.vmult(e[h], n),
                                n.vadd(this.position, n),
                                i[h].mult(s, r),
                                d.calculateWorldAABB(n, r, l.lowerBound, l.upperBound),
                                0 === h ? a.copy(l) : a.extend(l)
                            }
                            this.aabbNeedsUpdate = !1
                        }
                        ;
                        var d = new n
                          , y = new n;
                        new n,
                        h.prototype.updateInertiaWorld = function(t) {
                            var e = this.invInertia;
                            if (e.x !== e.y || e.y !== e.z || t) {
                                var i = d
                                  , o = y;
                                i.setRotationFromQuaternion(this.quaternion),
                                i.transpose(o),
                                i.scale(e, i),
                                i.mmult(o, this.invInertiaWorld)
                            }
                        }
                        ,
                        new o;
                        var f = new o;
                        h.prototype.applyForce = function(t, e) {
                            if (this.type === h.DYNAMIC) {
                                var i = f;
                                e.cross(t, i),
                                this.force.vadd(t, this.force),
                                this.torque.vadd(i, this.torque)
                            }
                        }
                        ;
                        var v = new o
                          , m = new o;
                        h.prototype.applyLocalForce = function(t, e) {
                            if (this.type === h.DYNAMIC) {
                                var i = v
                                  , o = m;
                                this.vectorToWorldFrame(t, i),
                                this.vectorToWorldFrame(e, o),
                                this.applyForce(i, o)
                            }
                        }
                        ,
                        new o;
                        var g = new o
                          , b = new o;
                        h.prototype.applyImpulse = function(t, e) {
                            if (this.type === h.DYNAMIC) {
                                var i = e
                                  , o = g;
                                o.copy(t),
                                o.mult(this.invMass, o),
                                this.velocity.vadd(o, this.velocity);
                                var n = b;
                                i.cross(t, n),
                                this.invInertiaWorld.vmult(n, n),
                                this.angularVelocity.vadd(n, this.angularVelocity)
                            }
                        }
                        ;
                        var w = new o
                          , x = new o;
                        h.prototype.applyLocalImpulse = function(t, e) {
                            if (this.type === h.DYNAMIC) {
                                var i = w
                                  , o = x;
                                this.vectorToWorldFrame(t, i),
                                this.vectorToWorldFrame(e, o),
                                this.applyImpulse(i, o)
                            }
                        }
                        ;
                        var _ = new o;
                        h.prototype.updateMassProperties = function() {
                            var t = _;
                            this.invMass = this.mass > 0 ? 1 / this.mass : 0;
                            var e = this.inertia
                              , i = this.fixedRotation;
                            this.computeAABB(),
                            t.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2),
                            a.calculateInertia(t, this.mass, e),
                            this.invInertia.set(e.x > 0 && !i ? 1 / e.x : 0, e.y > 0 && !i ? 1 / e.y : 0, e.z > 0 && !i ? 1 / e.z : 0),
                            this.updateInertiaWorld(!0)
                        }
                        ,
                        h.prototype.getVelocityAtWorldPoint = function(t, e) {
                            var i = new o;
                            return t.vsub(this.position, i),
                            this.angularVelocity.cross(i, e),
                            this.velocity.vadd(e, e),
                            e
                        }
                        ,
                        new o,
                        new o,
                        new r,
                        new r,
                        h.prototype.integrate = function(t, e, i) {
                            if (this.previousPosition.copy(this.position),
                            this.previousQuaternion.copy(this.quaternion),
                            (this.type === h.DYNAMIC || this.type === h.KINEMATIC) && this.sleepState !== h.SLEEPING) {
                                var o = this.velocity
                                  , n = this.angularVelocity
                                  , r = this.position
                                  , s = this.force
                                  , a = this.torque
                                  , l = this.quaternion
                                  , c = this.invMass
                                  , p = this.invInertiaWorld
                                  , u = this.linearFactor
                                  , d = c * t;
                                o.x += s.x * d * u.x,
                                o.y += s.y * d * u.y,
                                o.z += s.z * d * u.z;
                                var y = p.elements
                                  , f = this.angularFactor
                                  , v = a.x * f.x
                                  , m = a.y * f.y
                                  , g = a.z * f.z;
                                n.x += t * (y[0] * v + y[1] * m + y[2] * g),
                                n.y += t * (y[3] * v + y[4] * m + y[5] * g),
                                n.z += t * (y[6] * v + y[7] * m + y[8] * g),
                                r.x += o.x * t,
                                r.y += o.y * t,
                                r.z += o.z * t,
                                l.integrate(this.angularVelocity, t, this.angularFactor, l),
                                e && (i ? l.normalizeFast() : l.normalize()),
                                this.aabbNeedsUpdate = !0,
                                this.updateInertiaWorld()
                            }
                        }
                        ,
                        h.prototype.isSleeping = function() {
                            return this.sleepState === h.SLEEPING
                        }
                        ,
                        h.prototype.isSleepy = function() {
                            return this.sleepState === h.SLEEPY
                        }
                        ,
                        h.prototype.isAwake = function() {
                            return this.sleepState === h.AWAKE
                        }
                        ,
                        h.prototype.updateHasTrigger = function() {
                            for (var t = this.shapes.length; t-- && (this.hasTrigger = !this.shapes[t].collisionResponse,
                            !this.hasTrigger); )
                                ;
                        }
                    }
                    , {
                        "../collision/AABB": 3,
                        "../material/Material": 26,
                        "../math/Mat3": 29,
                        "../math/Quaternion": 30,
                        "../math/Vec3": 32,
                        "../shapes/Box": 39,
                        "../shapes/Shape": 45,
                        "../utils/EventTarget": 51,
                        "../world/World": 58
                    }],
                    34: [function(t, e) {
                        t("./Body");
                        var i = t("../math/Vec3")
                          , o = t("../math/Quaternion")
                          , n = (t("../collision/RaycastResult"),
                        t("../collision/Ray"))
                          , r = t("../objects/WheelInfo");
                        function s(t) {
                            this.chassisBody = t.chassisBody,
                            this.wheelInfos = [],
                            this.sliding = !1,
                            this.world = null,
                            this.indexRightAxis = void 0 !== t.indexRightAxis ? t.indexRightAxis : 1,
                            this.indexForwardAxis = void 0 !== t.indexForwardAxis ? t.indexForwardAxis : 0,
                            this.indexUpAxis = void 0 !== t.indexUpAxis ? t.indexUpAxis : 2
                        }
                        e.exports = s,
                        new i,
                        new i,
                        new i;
                        var a = new i
                          , l = new i
                          , h = new i;
                        new n,
                        s.prototype.addWheel = function(t) {
                            var e = new r(t = t || {})
                              , i = this.wheelInfos.length;
                            return this.wheelInfos.push(e),
                            i
                        }
                        ,
                        s.prototype.setSteeringValue = function(t, e) {
                            this.wheelInfos[e].steering = t
                        }
                        ,
                        new i,
                        s.prototype.applyEngineForce = function(t, e) {
                            this.wheelInfos[e].engineForce = t
                        }
                        ,
                        s.prototype.setBrake = function(t, e) {
                            this.wheelInfos[e].brake = t
                        }
                        ,
                        s.prototype.addToWorld = function(t) {
                            this.constraints,
                            t.addBody(this.chassisBody);
                            var e = this;
                            this.preStepCallback = function() {
                                e.updateVehicle(t.dt)
                            }
                            ,
                            t.addEventListener("preStep", this.preStepCallback),
                            this.world = t
                        }
                        ,
                        s.prototype.getVehicleAxisWorld = function(t, e) {
                            e.set(0 === t ? 1 : 0, 1 === t ? 1 : 0, 2 === t ? 1 : 0),
                            this.chassisBody.vectorToWorldFrame(e, e)
                        }
                        ,
                        s.prototype.updateVehicle = function(t) {
                            for (var e = this.wheelInfos, o = e.length, n = this.chassisBody, r = 0; r < o; r++)
                                this.updateWheelTransform(r);
                            this.currentVehicleSpeedKmHour = 3.6 * n.velocity.norm();
                            var s = new i;
                            for (this.getVehicleAxisWorld(this.indexForwardAxis, s),
                            s.dot(n.velocity) < 0 && (this.currentVehicleSpeedKmHour *= -1),
                            r = 0; r < o; r++)
                                this.castRay(e[r]);
                            this.updateSuspension(t);
                            var a = new i
                              , l = new i;
                            for (r = 0; r < o; r++) {
                                var h = (d = e[r]).suspensionForce;
                                h > d.maxSuspensionForce && (h = d.maxSuspensionForce),
                                d.raycastResult.hitNormalWorld.scale(h * t, a),
                                d.raycastResult.hitPointWorld.vsub(n.position, l),
                                n.applyImpulse(a, l)
                            }
                            this.updateFriction(t);
                            var c = new i
                              , p = new i
                              , u = new i;
                            for (r = 0; r < o; r++) {
                                var d = e[r];
                                n.getVelocityAtWorldPoint(d.chassisConnectionPointWorld, u);
                                var y = 1;
                                switch (this.indexUpAxis) {
                                case 1:
                                    y = -1
                                }
                                if (d.isInContact) {
                                    this.getVehicleAxisWorld(this.indexForwardAxis, p);
                                    var f = p.dot(d.raycastResult.hitNormalWorld);
                                    d.raycastResult.hitNormalWorld.scale(f, c),
                                    p.vsub(c, p);
                                    var v = p.dot(u);
                                    d.deltaRotation = y * v * t / d.radius
                                }
                                !d.sliding && d.isInContact || 0 === d.engineForce || !d.useCustomSlidingRotationalSpeed || (d.deltaRotation = (d.engineForce > 0 ? 1 : -1) * d.customSlidingRotationalSpeed * t),
                                Math.abs(d.brake) > Math.abs(d.engineForce) && (d.deltaRotation = 0),
                                d.rotation += d.deltaRotation,
                                d.deltaRotation *= .99
                            }
                        }
                        ,
                        s.prototype.updateSuspension = function() {
                            for (var t = this.chassisBody.mass, e = this.wheelInfos, i = e.length, o = 0; o < i; o++) {
                                var n = e[o];
                                if (n.isInContact) {
                                    var r, s = n.suspensionRestLength - n.suspensionLength;
                                    r = n.suspensionStiffness * s * n.clippedInvContactDotSuspension;
                                    var a = n.suspensionRelativeVelocity;
                                    r -= (a < 0 ? n.dampingCompression : n.dampingRelaxation) * a,
                                    n.suspensionForce = r * t,
                                    n.suspensionForce < 0 && (n.suspensionForce = 0)
                                } else
                                    n.suspensionForce = 0
                            }
                        }
                        ,
                        s.prototype.removeFromWorld = function(t) {
                            this.constraints,
                            t.remove(this.chassisBody),
                            t.removeEventListener("preStep", this.preStepCallback),
                            this.world = null
                        }
                        ;
                        var c = new i
                          , p = new i;
                        s.prototype.castRay = function(t) {
                            var e = c
                              , o = p;
                            this.updateWheelTransformWorld(t);
                            var n = this.chassisBody
                              , r = -1
                              , s = t.suspensionRestLength + t.radius;
                            t.directionWorld.scale(s, e);
                            var a = t.chassisConnectionPointWorld;
                            a.vadd(e, o);
                            var l = t.raycastResult;
                            l.reset();
                            var h = n.collisionResponse;
                            n.collisionResponse = !1,
                            this.world.rayTest(a, o, l),
                            n.collisionResponse = h;
                            var u = l.body;
                            if (t.raycastResult.groundObject = 0,
                            u) {
                                r = l.distance,
                                t.raycastResult.hitNormalWorld = l.hitNormalWorld,
                                t.isInContact = !0;
                                var d = l.distance;
                                t.suspensionLength = d - t.radius;
                                var y = t.suspensionRestLength - t.maxSuspensionTravel
                                  , f = t.suspensionRestLength + t.maxSuspensionTravel;
                                t.suspensionLength < y && (t.suspensionLength = y),
                                t.suspensionLength > f && (t.suspensionLength = f,
                                t.raycastResult.reset());
                                var v = t.raycastResult.hitNormalWorld.dot(t.directionWorld)
                                  , m = new i;
                                n.getVelocityAtWorldPoint(t.raycastResult.hitPointWorld, m);
                                var g = t.raycastResult.hitNormalWorld.dot(m);
                                if (v >= -.1)
                                    t.suspensionRelativeVelocity = 0,
                                    t.clippedInvContactDotSuspension = 10;
                                else {
                                    var b = -1 / v;
                                    t.suspensionRelativeVelocity = g * b,
                                    t.clippedInvContactDotSuspension = b
                                }
                            } else
                                t.suspensionLength = t.suspensionRestLength + 0 * t.maxSuspensionTravel,
                                t.suspensionRelativeVelocity = 0,
                                t.directionWorld.scale(-1, t.raycastResult.hitNormalWorld),
                                t.clippedInvContactDotSuspension = 1;
                            return r
                        }
                        ,
                        s.prototype.updateWheelTransformWorld = function(t) {
                            t.isInContact = !1;
                            var e = this.chassisBody;
                            e.pointToWorldFrame(t.chassisConnectionPointLocal, t.chassisConnectionPointWorld),
                            e.vectorToWorldFrame(t.directionLocal, t.directionWorld),
                            e.vectorToWorldFrame(t.axleLocal, t.axleWorld)
                        }
                        ,
                        s.prototype.updateWheelTransform = function(t) {
                            var e = a
                              , i = l
                              , n = h
                              , r = this.wheelInfos[t];
                            this.updateWheelTransformWorld(r),
                            r.directionLocal.scale(-1, e),
                            i.copy(r.axleLocal),
                            e.cross(i, n),
                            n.normalize(),
                            i.normalize();
                            var s = r.steering
                              , c = new o;
                            c.setFromAxisAngle(e, s);
                            var p = new o;
                            p.setFromAxisAngle(i, r.rotation);
                            var u = r.worldTransform.quaternion;
                            this.chassisBody.quaternion.mult(c, u),
                            u.mult(p, u),
                            u.normalize();
                            var d = r.worldTransform.position;
                            d.copy(r.directionWorld),
                            d.scale(r.suspensionLength, d),
                            d.vadd(r.chassisConnectionPointWorld, d)
                        }
                        ;
                        var u = [new i(1,0,0), new i(0,1,0), new i(0,0,1)];
                        s.prototype.getWheelTransformWorld = function(t) {
                            return this.wheelInfos[t].worldTransform
                        }
                        ;
                        var d = new i
                          , y = []
                          , f = [];
                        s.prototype.updateFriction = function(t) {
                            for (var e = d, o = this.wheelInfos, n = o.length, r = this.chassisBody, s = f, a = y, l = 0; l < n; l++)
                                v = (M = o[l]).raycastResult.body,
                                M.sideImpulse = 0,
                                M.forwardImpulse = 0,
                                s[l] || (s[l] = new i),
                                a[l] || (a[l] = new i);
                            for (l = 0; l < n; l++)
                                if (v = (M = o[l]).raycastResult.body) {
                                    var h = a[l];
                                    this.getWheelTransformWorld(l).vectorToWorldFrame(u[this.indexRightAxis], h);
                                    var c = M.raycastResult.hitNormalWorld
                                      , p = h.dot(c);
                                    c.scale(p, e),
                                    h.vsub(e, h),
                                    h.normalize(),
                                    c.cross(h, s[l]),
                                    s[l].normalize(),
                                    M.sideImpulse = A(r, M.raycastResult.hitPointWorld, v, M.raycastResult.hitPointWorld, h),
                                    M.sideImpulse *= 1
                                }
                            for (this.sliding = !1,
                            l = 0; l < n; l++) {
                                var v = (M = o[l]).raycastResult.body
                                  , m = 0;
                                if (M.slipInfo = 1,
                                v) {
                                    var g = M.brake ? M.brake : 0;
                                    m = b(r, v, M.raycastResult.hitPointWorld, s[l], g);
                                    var w = g / (m += M.engineForce * t);
                                    M.slipInfo *= w
                                }
                                if (M.forwardImpulse = 0,
                                M.skidInfo = 1,
                                v) {
                                    M.skidInfo = 1;
                                    var x = M.suspensionForce * t * M.frictionSlip
                                      , _ = x * x;
                                    M.forwardImpulse = m;
                                    var B = .5 * M.forwardImpulse
                                      , S = 1 * M.sideImpulse
                                      , E = B * B + S * S;
                                    M.sliding = !1,
                                    E > _ && (this.sliding = !0,
                                    M.sliding = !0,
                                    w = x / Math.sqrt(E),
                                    M.skidInfo *= w)
                                }
                            }
                            if (this.sliding)
                                for (l = 0; l < n; l++)
                                    0 !== (M = o[l]).sideImpulse && M.skidInfo < 1 && (M.forwardImpulse *= M.skidInfo,
                                    M.sideImpulse *= M.skidInfo);
                            for (l = 0; l < n; l++) {
                                var M = o[l]
                                  , C = new i;
                                if (M.raycastResult.hitPointWorld.vsub(r.position, C),
                                0 !== M.forwardImpulse) {
                                    var z = new i;
                                    s[l].scale(M.forwardImpulse, z),
                                    r.applyImpulse(z, C)
                                }
                                if (0 !== M.sideImpulse) {
                                    v = M.raycastResult.body;
                                    var F = new i;
                                    M.raycastResult.hitPointWorld.vsub(v.position, F);
                                    var R = new i;
                                    a[l].scale(M.sideImpulse, R),
                                    r.vectorToLocalFrame(C, C),
                                    C["xyz"[this.indexUpAxis]] *= M.rollInfluence,
                                    r.vectorToWorldFrame(C, C),
                                    r.applyImpulse(R, C),
                                    R.scale(-1, R),
                                    v.applyImpulse(R, F)
                                }
                            }
                        }
                        ;
                        var v = new i
                          , m = new i
                          , g = new i;
                        function b(t, e, i, o, n) {
                            var r = 0
                              , s = i
                              , a = v
                              , l = m
                              , h = g;
                            return t.getVelocityAtWorldPoint(s, a),
                            e.getVelocityAtWorldPoint(s, l),
                            a.vsub(l, h),
                            n < (r = -o.dot(h) * (1 / (S(t, i, o) + S(e, i, o)))) && (r = n),
                            r < -n && (r = -n),
                            r
                        }
                        var w = new i
                          , x = new i
                          , _ = new i
                          , B = new i;
                        function S(t, e, i) {
                            var o = w
                              , n = x
                              , r = _
                              , s = B;
                            return e.vsub(t.position, o),
                            o.cross(i, n),
                            t.invInertiaWorld.vmult(n, s),
                            s.cross(o, r),
                            t.invMass + i.dot(r)
                        }
                        var E = new i
                          , M = new i
                          , C = new i;
                        function A(t, e, i, o, n) {
                            if (n.norm2() > 1.1)
                                return 0;
                            var r = E
                              , s = M
                              , a = C;
                            return t.getVelocityAtWorldPoint(e, r),
                            i.getVelocityAtWorldPoint(o, s),
                            r.vsub(s, a),
                            -.2 * n.dot(a) * (1 / (t.invMass + i.invMass))
                        }
                    }
                    , {
                        "../collision/Ray": 10,
                        "../collision/RaycastResult": 11,
                        "../math/Quaternion": 30,
                        "../math/Vec3": 32,
                        "../objects/WheelInfo": 38,
                        "./Body": 33
                    }],
                    35: [function(t, e) {
                        var i = t("./Body")
                          , o = t("../shapes/Sphere")
                          , n = t("../shapes/Box")
                          , r = t("../math/Vec3")
                          , s = t("../constraints/HingeConstraint")
                          , a = t("../math/CMath");
                        function l(t) {
                            if (this.wheelBodies = [],
                            this.coordinateSystem = void 0 === t.coordinateSystem ? new r(1,2,3) : t.coordinateSystem.clone(),
                            this.chassisBody = t.chassisBody,
                            !this.chassisBody) {
                                var e = new n(new r(5,2,.5));
                                this.chassisBody = new i(1,e)
                            }
                            this.constraints = [],
                            this.wheelAxes = [],
                            this.wheelForces = []
                        }
                        e.exports = l,
                        l.prototype.addWheel = function(t) {
                            var e = (t = t || {}).body;
                            e || (e = new i(1,new o(1.2))),
                            this.wheelBodies.push(e),
                            this.wheelForces.push(0),
                            new r;
                            var n = void 0 !== t.position ? t.position.clone() : new r
                              , a = new r;
                            this.chassisBody.pointToWorldFrame(n, a),
                            e.position.set(a.x, a.y, a.z);
                            var l = void 0 !== t.axis ? t.axis.clone() : new r(0,1,0);
                            this.wheelAxes.push(l);
                            var h = new s(this.chassisBody,e,{
                                pivotA: n,
                                axisA: l,
                                pivotB: r.ZERO,
                                axisB: l,
                                collideConnected: !1
                            });
                            return this.constraints.push(h),
                            this.wheelBodies.length - 1
                        }
                        ,
                        l.prototype.setSteeringValue = function(t, e) {
                            var i = this.wheelAxes[e]
                              , o = a.cos(t)
                              , n = a.sin(t)
                              , r = i.x
                              , s = i.y;
                            this.constraints[e].axisA.set(o * r - n * s, n * r + o * s, 0)
                        }
                        ,
                        l.prototype.setMotorSpeed = function(t, e) {
                            var i = this.constraints[e];
                            i.enableMotor(),
                            i.motorTargetVelocity = t
                        }
                        ,
                        l.prototype.disableMotor = function(t) {
                            this.constraints[t].disableMotor()
                        }
                        ;
                        var h = new r;
                        l.prototype.setWheelForce = function(t, e) {
                            this.wheelForces[e] = t
                        }
                        ,
                        l.prototype.applyWheelForce = function(t, e) {
                            var i = this.wheelAxes[e]
                              , o = this.wheelBodies[e]
                              , n = o.torque;
                            i.scale(t, h),
                            o.vectorToWorldFrame(h, h),
                            n.vadd(h, n)
                        }
                        ,
                        l.prototype.addToWorld = function(t) {
                            for (var e = this.constraints, i = this.wheelBodies.concat([this.chassisBody]), o = 0; o < i.length; o++)
                                t.addBody(i[o]);
                            for (o = 0; o < e.length; o++)
                                t.addConstraint(e[o]);
                            t.addEventListener("preStep", this._update.bind(this))
                        }
                        ,
                        l.prototype._update = function() {
                            for (var t = this.wheelForces, e = 0; e < t.length; e++)
                                this.applyWheelForce(t[e], e)
                        }
                        ,
                        l.prototype.removeFromWorld = function(t) {
                            for (var e = this.constraints, i = this.wheelBodies.concat([this.chassisBody]), o = 0; o < i.length; o++)
                                t.remove(i[o]);
                            for (o = 0; o < e.length; o++)
                                t.removeConstraint(e[o])
                        }
                        ;
                        var c = new r;
                        l.prototype.getWheelSpeed = function(t) {
                            var e = this.wheelAxes[t]
                              , i = this.wheelBodies[t].angularVelocity;
                            return this.chassisBody.vectorToWorldFrame(e, c),
                            i.dot(c)
                        }
                    }
                    , {
                        "../constraints/HingeConstraint": 16,
                        "../math/CMath": 27,
                        "../math/Vec3": 32,
                        "../shapes/Box": 39,
                        "../shapes/Sphere": 46,
                        "./Body": 33
                    }],
                    36: [function(t, e) {
                        e.exports = o,
                        t("../shapes/Shape");
                        var i = t("../math/Vec3");
                        function o() {
                            this.particles = [],
                            this.density = 1,
                            this.smoothingRadius = 1,
                            this.speedOfSound = 1,
                            this.viscosity = .01,
                            this.eps = 1e-6,
                            this.pressures = [],
                            this.densities = [],
                            this.neighbors = []
                        }
                        t("../math/Quaternion"),
                        t("../shapes/Particle"),
                        t("../objects/Body"),
                        t("../material/Material"),
                        o.prototype.add = function(t) {
                            this.particles.push(t),
                            this.neighbors.length < this.particles.length && this.neighbors.push([])
                        }
                        ,
                        o.prototype.remove = function(t) {
                            var e = this.particles.indexOf(t);
                            -1 !== e && (this.particles.splice(e, 1),
                            this.neighbors.length > this.particles.length && this.neighbors.pop())
                        }
                        ;
                        var n = new i;
                        o.prototype.getNeighbors = function(t, e) {
                            for (var i = this.particles.length, o = t.id, r = this.smoothingRadius * this.smoothingRadius, s = n, a = 0; a !== i; a++) {
                                var l = this.particles[a];
                                l.position.vsub(t.position, s),
                                o !== l.id && s.norm2() < r && e.push(l)
                            }
                        }
                        ;
                        var r = new i
                          , s = new i
                          , a = new i
                          , l = new i
                          , h = new i
                          , c = new i;
                        o.prototype.update = function() {
                            for (var t = this.particles.length, e = r, i = this.speedOfSound, o = this.eps, n = 0; n !== t; n++) {
                                var p = this.particles[n];
                                (S = this.neighbors[n]).length = 0,
                                this.getNeighbors(p, S),
                                S.push(this.particles[n]);
                                for (var u = S.length, d = 0, y = 0; y !== u; y++) {
                                    p.position.vsub(S[y].position, e);
                                    var f = e.norm()
                                      , v = this.w(f);
                                    d += S[y].mass * v
                                }
                                this.densities[n] = d,
                                this.pressures[n] = i * i * (this.densities[n] - this.density)
                            }
                            var m = s
                              , g = a
                              , b = l
                              , w = h
                              , x = c;
                            for (n = 0; n !== t; n++) {
                                var _, B, S, E = this.particles[n];
                                for (m.set(0, 0, 0),
                                g.set(0, 0, 0),
                                u = (S = this.neighbors[n]).length,
                                y = 0; y !== u; y++) {
                                    var M = S[y];
                                    E.position.vsub(M.position, w);
                                    var C = w.norm();
                                    _ = -M.mass * (this.pressures[n] / (this.densities[n] * this.densities[n] + o) + this.pressures[y] / (this.densities[y] * this.densities[y] + o)),
                                    this.gradw(w, b),
                                    b.mult(_, b),
                                    m.vadd(b, m),
                                    M.velocity.vsub(E.velocity, x),
                                    x.mult(1 / (1e-4 + this.densities[n] * this.densities[y]) * this.viscosity * M.mass, x),
                                    B = this.nablaw(C),
                                    x.mult(B, x),
                                    g.vadd(x, g)
                                }
                                g.mult(E.mass, g),
                                m.mult(E.mass, m),
                                E.force.vadd(g, E.force),
                                E.force.vadd(m, E.force)
                            }
                        }
                        ,
                        o.prototype.w = function(t) {
                            var e = this.smoothingRadius;
                            return 315 / (64 * Math.PI * Math.pow(e, 9)) * Math.pow(e * e - t * t, 3)
                        }
                        ,
                        o.prototype.gradw = function(t, e) {
                            var i = t.norm()
                              , o = this.smoothingRadius;
                            t.mult(945 / (32 * Math.PI * Math.pow(o, 9)) * Math.pow(o * o - i * i, 2), e)
                        }
                        ,
                        o.prototype.nablaw = function(t) {
                            var e = this.smoothingRadius;
                            return 945 / (32 * Math.PI * Math.pow(e, 9)) * (e * e - t * t) * (7 * t * t - 3 * e * e)
                        }
                    }
                    , {
                        "../material/Material": 26,
                        "../math/Quaternion": 30,
                        "../math/Vec3": 32,
                        "../objects/Body": 33,
                        "../shapes/Particle": 43,
                        "../shapes/Shape": 45
                    }],
                    37: [function(t, e) {
                        var i = t("../math/Vec3");
                        function o(t, e, o) {
                            o = o || {},
                            this.restLength = "number" == typeof o.restLength ? o.restLength : 1,
                            this.stiffness = o.stiffness || 100,
                            this.damping = o.damping || 1,
                            this.bodyA = t,
                            this.bodyB = e,
                            this.localAnchorA = new i,
                            this.localAnchorB = new i,
                            o.localAnchorA && this.localAnchorA.copy(o.localAnchorA),
                            o.localAnchorB && this.localAnchorB.copy(o.localAnchorB),
                            o.worldAnchorA && this.setWorldAnchorA(o.worldAnchorA),
                            o.worldAnchorB && this.setWorldAnchorB(o.worldAnchorB)
                        }
                        e.exports = o,
                        o.prototype.setWorldAnchorA = function(t) {
                            this.bodyA.pointToLocalFrame(t, this.localAnchorA)
                        }
                        ,
                        o.prototype.setWorldAnchorB = function(t) {
                            this.bodyB.pointToLocalFrame(t, this.localAnchorB)
                        }
                        ,
                        o.prototype.getWorldAnchorA = function(t) {
                            this.bodyA.pointToWorldFrame(this.localAnchorA, t)
                        }
                        ,
                        o.prototype.getWorldAnchorB = function(t) {
                            this.bodyB.pointToWorldFrame(this.localAnchorB, t)
                        }
                        ;
                        var n = new i
                          , r = new i
                          , s = new i
                          , a = new i
                          , l = new i
                          , h = new i
                          , c = new i
                          , p = new i
                          , u = new i
                          , d = new i
                          , y = new i;
                        o.prototype.applyForce = function() {
                            var t = this.stiffness
                              , e = this.damping
                              , i = this.restLength
                              , o = this.bodyA
                              , f = this.bodyB
                              , v = n
                              , m = r
                              , g = s
                              , b = a
                              , w = y
                              , x = l
                              , _ = h
                              , B = c
                              , S = p
                              , E = u
                              , M = d;
                            this.getWorldAnchorA(x),
                            this.getWorldAnchorB(_),
                            x.vsub(o.position, B),
                            _.vsub(f.position, S),
                            _.vsub(x, v);
                            var C = v.norm();
                            m.copy(v),
                            m.normalize(),
                            f.velocity.vsub(o.velocity, g),
                            f.angularVelocity.cross(S, w),
                            g.vadd(w, g),
                            o.angularVelocity.cross(B, w),
                            g.vsub(w, g),
                            m.mult(-t * (C - i) - e * g.dot(m), b),
                            o.force.vsub(b, o.force),
                            f.force.vadd(b, f.force),
                            B.cross(b, E),
                            S.cross(b, M),
                            o.torque.vsub(E, o.torque),
                            f.torque.vadd(M, f.torque)
                        }
                    }
                    , {
                        "../math/Vec3": 32
                    }],
                    38: [function(t, e) {
                        var i = t("../math/Vec3")
                          , o = t("../math/Transform")
                          , n = t("../collision/RaycastResult")
                          , r = t("../utils/Utils");
                        function s(t) {
                            t = r.defaults(t, {
                                chassisConnectionPointLocal: new i,
                                chassisConnectionPointWorld: new i,
                                directionLocal: new i,
                                directionWorld: new i,
                                axleLocal: new i,
                                axleWorld: new i,
                                suspensionRestLength: 1,
                                suspensionMaxLength: 2,
                                radius: 1,
                                suspensionStiffness: 100,
                                dampingCompression: 10,
                                dampingRelaxation: 10,
                                frictionSlip: 1e4,
                                steering: 0,
                                rotation: 0,
                                deltaRotation: 0,
                                rollInfluence: .01,
                                maxSuspensionForce: Number.MAX_VALUE,
                                isFrontWheel: !0,
                                clippedInvContactDotSuspension: 1,
                                suspensionRelativeVelocity: 0,
                                suspensionForce: 0,
                                skidInfo: 0,
                                suspensionLength: 0,
                                maxSuspensionTravel: 1,
                                useCustomSlidingRotationalSpeed: !1,
                                customSlidingRotationalSpeed: -.1
                            }),
                            this.maxSuspensionTravel = t.maxSuspensionTravel,
                            this.customSlidingRotationalSpeed = t.customSlidingRotationalSpeed,
                            this.useCustomSlidingRotationalSpeed = t.useCustomSlidingRotationalSpeed,
                            this.sliding = !1,
                            this.chassisConnectionPointLocal = t.chassisConnectionPointLocal.clone(),
                            this.chassisConnectionPointWorld = t.chassisConnectionPointWorld.clone(),
                            this.directionLocal = t.directionLocal.clone(),
                            this.directionWorld = t.directionWorld.clone(),
                            this.axleLocal = t.axleLocal.clone(),
                            this.axleWorld = t.axleWorld.clone(),
                            this.suspensionRestLength = t.suspensionRestLength,
                            this.suspensionMaxLength = t.suspensionMaxLength,
                            this.radius = t.radius,
                            this.suspensionStiffness = t.suspensionStiffness,
                            this.dampingCompression = t.dampingCompression,
                            this.dampingRelaxation = t.dampingRelaxation,
                            this.frictionSlip = t.frictionSlip,
                            this.steering = 0,
                            this.rotation = 0,
                            this.deltaRotation = 0,
                            this.rollInfluence = t.rollInfluence,
                            this.maxSuspensionForce = t.maxSuspensionForce,
                            this.engineForce = 0,
                            this.brake = 0,
                            this.isFrontWheel = t.isFrontWheel,
                            this.clippedInvContactDotSuspension = 1,
                            this.suspensionRelativeVelocity = 0,
                            this.suspensionForce = 0,
                            this.skidInfo = 0,
                            this.suspensionLength = 0,
                            this.sideImpulse = 0,
                            this.forwardImpulse = 0,
                            this.raycastResult = new n,
                            this.worldTransform = new o,
                            this.isInContact = !1
                        }
                        e.exports = s;
                        var a = new i
                          , l = new i;
                        a = new i,
                        s.prototype.updateWheel = function(t) {
                            var e = this.raycastResult;
                            if (this.isInContact) {
                                var i = e.hitNormalWorld.dot(e.directionWorld);
                                e.hitPointWorld.vsub(t.position, l),
                                t.getVelocityAtWorldPoint(l, a);
                                var o = e.hitNormalWorld.dot(a);
                                if (i >= -.1)
                                    this.suspensionRelativeVelocity = 0,
                                    this.clippedInvContactDotSuspension = 10;
                                else {
                                    var n = -1 / i;
                                    this.suspensionRelativeVelocity = o * n,
                                    this.clippedInvContactDotSuspension = n
                                }
                            } else
                                e.suspensionLength = this.suspensionRestLength,
                                this.suspensionRelativeVelocity = 0,
                                e.directionWorld.scale(-1, e.hitNormalWorld),
                                this.clippedInvContactDotSuspension = 1
                        }
                    }
                    , {
                        "../collision/RaycastResult": 11,
                        "../math/Transform": 31,
                        "../math/Vec3": 32,
                        "../utils/Utils": 55
                    }],
                    39: [function(t, e) {
                        e.exports = r;
                        var i = t("./Shape")
                          , o = t("../math/Vec3")
                          , n = t("./ConvexPolyhedron");
                        function r(t) {
                            i.call(this, {
                                type: i.types.BOX
                            }),
                            this.halfExtents = t,
                            this.convexPolyhedronRepresentation = null,
                            this.updateConvexPolyhedronRepresentation(),
                            this.updateBoundingSphereRadius()
                        }
                        r.prototype = new i,
                        r.prototype.constructor = r,
                        r.prototype.updateConvexPolyhedronRepresentation = function() {
                            var t = this.halfExtents.x
                              , e = this.halfExtents.y
                              , i = this.halfExtents.z
                              , r = o
                              , s = [new r(-t,-e,-i), new r(t,-e,-i), new r(t,e,-i), new r(-t,e,-i), new r(-t,-e,i), new r(t,-e,i), new r(t,e,i), new r(-t,e,i)]
                              , a = (new r(0,0,1),
                            new r(0,1,0),
                            new r(1,0,0),
                            new n(s,[[3, 2, 1, 0], [4, 5, 6, 7], [5, 4, 0, 1], [2, 3, 7, 6], [0, 4, 7, 3], [1, 2, 6, 5]]));
                            this.convexPolyhedronRepresentation = a,
                            a.material = this.material
                        }
                        ,
                        r.prototype.calculateLocalInertia = function(t, e) {
                            return e = e || new o,
                            r.calculateInertia(this.halfExtents, t, e),
                            e
                        }
                        ,
                        r.calculateInertia = function(t, e, i) {
                            var o = t;
                            o.isZero() ? (i.x = 2 / 12 * e,
                            i.y = 2 / 12 * e,
                            i.z = 2 / 12 * e) : (i.x = 1 / 12 * e * (4 * o.y * o.y + 4 * o.z * o.z),
                            i.y = 1 / 12 * e * (4 * o.x * o.x + 4 * o.z * o.z),
                            i.z = 1 / 12 * e * (4 * o.y * o.y + 4 * o.x * o.x))
                        }
                        ,
                        r.prototype.getSideNormals = function(t, e) {
                            var i = t
                              , o = this.halfExtents;
                            if (i[0].set(o.x, 0, 0),
                            i[1].set(0, o.y, 0),
                            i[2].set(0, 0, o.z),
                            i[3].set(-o.x, 0, 0),
                            i[4].set(0, -o.y, 0),
                            i[5].set(0, 0, -o.z),
                            void 0 !== e)
                                for (var n = 0; n !== i.length; n++)
                                    e.vmult(i[n], i[n]);
                            return i
                        }
                        ,
                        r.prototype.volume = function() {
                            return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z
                        }
                        ,
                        r.prototype.updateBoundingSphereRadius = function() {
                            this.boundingSphereRadius = this.halfExtents.norm()
                        }
                        ;
                        var s = new o;
                        new o,
                        r.prototype.forEachWorldCorner = function(t, e, i) {
                            for (var o = this.halfExtents, n = [[o.x, o.y, o.z], [-o.x, o.y, o.z], [-o.x, -o.y, o.z], [-o.x, -o.y, -o.z], [o.x, -o.y, -o.z], [o.x, o.y, -o.z], [-o.x, o.y, -o.z], [o.x, -o.y, o.z]], r = 0; r < n.length; r++)
                                s.set(n[r][0], n[r][1], n[r][2]),
                                e.vmult(s, s),
                                t.vadd(s, s),
                                i(s.x, s.y, s.z)
                        }
                        ;
                        var a = [new o, new o, new o, new o, new o, new o, new o, new o];
                        r.prototype.calculateWorldAABB = function(t, e, i, o) {
                            var n = this.halfExtents;
                            a[0].set(n.x, n.y, n.z),
                            a[1].set(-n.x, n.y, n.z),
                            a[2].set(-n.x, -n.y, n.z),
                            a[3].set(-n.x, -n.y, -n.z),
                            a[4].set(n.x, -n.y, -n.z),
                            a[5].set(n.x, n.y, -n.z),
                            a[6].set(-n.x, n.y, -n.z),
                            a[7].set(n.x, -n.y, n.z);
                            var r = a[0];
                            e.vmult(r, r),
                            t.vadd(r, r),
                            o.copy(r),
                            i.copy(r);
                            for (var s = 1; s < 8; s++) {
                                r = a[s],
                                e.vmult(r, r),
                                t.vadd(r, r);
                                var l = r.x
                                  , h = r.y
                                  , c = r.z;
                                l > o.x && (o.x = l),
                                h > o.y && (o.y = h),
                                c > o.z && (o.z = c),
                                l < i.x && (i.x = l),
                                h < i.y && (i.y = h),
                                c < i.z && (i.z = c)
                            }
                        }
                    }
                    , {
                        "../math/Vec3": 32,
                        "./ConvexPolyhedron": 40,
                        "./Shape": 45
                    }],
                    40: [function(t, e) {
                        e.exports = r;
                        var i = t("./Shape")
                          , o = t("../math/Vec3")
                          , n = (t("../math/Quaternion"),
                        t("../math/Transform"));
                        function r(t, e, o) {
                            i.call(this, {
                                type: i.types.CONVEXPOLYHEDRON
                            }),
                            this.vertices = t || [],
                            this.worldVertices = [],
                            this.worldVerticesNeedsUpdate = !0,
                            this.faces = e || [],
                            this.faceNormals = [],
                            this.computeNormals(),
                            this.worldFaceNormalsNeedsUpdate = !0,
                            this.worldFaceNormals = [],
                            this.uniqueEdges = [],
                            this.uniqueAxes = o ? o.slice() : null,
                            this.computeEdges(),
                            this.updateBoundingSphereRadius()
                        }
                        r.prototype = new i,
                        r.prototype.constructor = r;
                        var s = new o;
                        r.prototype.computeEdges = function() {
                            var t = this.faces
                              , e = this.vertices
                              , i = (e.length,
                            this.uniqueEdges);
                            i.length = 0;
                            for (var o = s, n = 0; n !== t.length; n++)
                                for (var r = t[n], a = r.length, l = 0; l !== a; l++) {
                                    var h = (l + 1) % a;
                                    e[r[l]].vsub(e[r[h]], o),
                                    o.normalize();
                                    for (var c = !1, p = 0; p !== i.length; p++)
                                        if (i[p].almostEquals(o) || i[p].almostEquals(o)) {
                                            c = !0;
                                            break
                                        }
                                    c || i.push(o.clone())
                                }
                        }
                        ,
                        r.prototype.computeNormals = function() {
                            this.faceNormals.length = this.faces.length;
                            for (var t = 0; t < this.faces.length; t++) {
                                for (var e = 0; e < this.faces[t].length; e++)
                                    if (!this.vertices[this.faces[t][e]])
                                        throw new Error("Vertex " + this.faces[t][e] + " not found!");
                                var i = this.faceNormals[t] || new o;
                                this.getFaceNormal(t, i),
                                i.negate(i),
                                this.faceNormals[t] = i;
                                var n = this.vertices[this.faces[t][0]];
                                if (i.dot(n) < 0)
                                    for (console.error(".faceNormals[" + t + "] = Vec3(" + i.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule."),
                                    e = 0; e < this.faces[t].length; e++)
                                        console.warn(".vertices[" + this.faces[t][e] + "] = Vec3(" + this.vertices[this.faces[t][e]].toString() + ")")
                            }
                        }
                        ;
                        var a = new o
                          , l = new o;
                        r.computeNormal = function(t, e, i, o) {
                            e.vsub(t, l),
                            i.vsub(e, a),
                            a.cross(l, o),
                            o.isZero() || o.normalize()
                        }
                        ,
                        r.prototype.getFaceNormal = function(t, e) {
                            var i = this.faces[t]
                              , o = this.vertices[i[0]]
                              , n = this.vertices[i[1]]
                              , s = this.vertices[i[2]];
                            return r.computeNormal(o, n, s, e)
                        }
                        ;
                        var h = new o;
                        r.prototype.clipAgainstHull = function(t, e, i, n, r, s, a, l, c) {
                            for (var p = h, u = -1, d = -Number.MAX_VALUE, y = 0; y < i.faces.length; y++) {
                                p.copy(i.faceNormals[y]),
                                r.vmult(p, p);
                                var f = p.dot(s);
                                f > d && (d = f,
                                u = y)
                            }
                            for (var v = [], m = i.faces[u], g = m.length, b = 0; b < g; b++) {
                                var w = i.vertices[m[b]]
                                  , x = new o;
                                x.copy(w),
                                r.vmult(x, x),
                                n.vadd(x, x),
                                v.push(x)
                            }
                            u >= 0 && this.clipFaceAgainstHull(s, t, e, v, a, l, c)
                        }
                        ;
                        var c = new o
                          , p = new o
                          , u = new o
                          , d = new o
                          , y = new o
                          , f = new o;
                        r.prototype.findSeparatingAxis = function(t, e, i, o, n, r, s, a) {
                            var l = c
                              , h = p
                              , v = u
                              , m = d
                              , g = y
                              , b = f
                              , w = Number.MAX_VALUE;
                            if (this.uniqueAxes)
                                for (_ = 0; _ !== this.uniqueAxes.length; _++) {
                                    if (i.vmult(this.uniqueAxes[_], l),
                                    !1 === (E = this.testSepAxis(l, t, e, i, o, n)))
                                        return !1;
                                    E < w && (w = E,
                                    r.copy(l))
                                }
                            else
                                for (var x = s ? s.length : this.faces.length, _ = 0; _ < x; _++) {
                                    var B = s ? s[_] : _;
                                    if (l.copy(this.faceNormals[B]),
                                    i.vmult(l, l),
                                    !1 === (E = this.testSepAxis(l, t, e, i, o, n)))
                                        return !1;
                                    E < w && (w = E,
                                    r.copy(l))
                                }
                            if (t.uniqueAxes)
                                for (_ = 0; _ !== t.uniqueAxes.length; _++) {
                                    if (n.vmult(t.uniqueAxes[_], h),
                                    !1 === (E = this.testSepAxis(h, t, e, i, o, n)))
                                        return !1;
                                    E < w && (w = E,
                                    r.copy(h))
                                }
                            else {
                                var S = a ? a.length : t.faces.length;
                                for (_ = 0; _ < S; _++) {
                                    var E;
                                    if (B = a ? a[_] : _,
                                    h.copy(t.faceNormals[B]),
                                    n.vmult(h, h),
                                    !1 === (E = this.testSepAxis(h, t, e, i, o, n)))
                                        return !1;
                                    E < w && (w = E,
                                    r.copy(h))
                                }
                            }
                            for (var M = 0; M !== this.uniqueEdges.length; M++) {
                                i.vmult(this.uniqueEdges[M], m);
                                for (var C = 0; C !== t.uniqueEdges.length; C++)
                                    if (n.vmult(t.uniqueEdges[C], g),
                                    m.cross(g, b),
                                    !b.almostZero()) {
                                        b.normalize();
                                        var A = this.testSepAxis(b, t, e, i, o, n);
                                        if (!1 === A)
                                            return !1;
                                        A < w && (w = A,
                                        r.copy(b))
                                    }
                            }
                            return o.vsub(e, v),
                            v.dot(r) > 0 && r.negate(r),
                            !0
                        }
                        ;
                        var v = []
                          , m = [];
                        r.prototype.testSepAxis = function(t, e, i, o, n, s) {
                            r.project(this, t, i, o, v),
                            r.project(e, t, n, s, m);
                            var a = v[0]
                              , l = v[1]
                              , h = m[0]
                              , c = m[1];
                            if (a < c || h < l)
                                return !1;
                            var p = a - c
                              , u = h - l;
                            return p < u ? p : u
                        }
                        ;
                        var g = new o
                          , b = new o;
                        r.prototype.calculateLocalInertia = function(t, e) {
                            this.computeLocalAABB(g, b);
                            var i = b.x - g.x
                              , o = b.y - g.y
                              , n = b.z - g.z;
                            e.x = 1 / 12 * t * (4 * o * o + 4 * n * n),
                            e.y = 1 / 12 * t * (4 * i * i + 4 * n * n),
                            e.z = 1 / 12 * t * (4 * o * o + 4 * i * i)
                        }
                        ,
                        r.prototype.getPlaneConstantOfFace = function(t) {
                            var e = this.faces[t]
                              , i = this.faceNormals[t]
                              , o = this.vertices[e[0]];
                            return -i.dot(o)
                        }
                        ;
                        var w = new o
                          , x = new o
                          , _ = new o
                          , B = new o
                          , S = new o
                          , E = new o
                          , M = new o
                          , C = new o;
                        r.prototype.clipFaceAgainstHull = function(t, e, i, o, n, r, s) {
                            for (var a = w, l = x, h = _, c = B, p = S, u = E, d = M, y = C, f = o, v = [], m = -1, g = Number.MAX_VALUE, b = 0; b < this.faces.length; b++) {
                                a.copy(this.faceNormals[b]),
                                i.vmult(a, a);
                                var A = a.dot(t);
                                A < g && (g = A,
                                m = b)
                            }
                            if (!(m < 0)) {
                                var z = this.faces[m];
                                z.connectedFaces = [];
                                for (var F = 0; F < this.faces.length; F++)
                                    for (var R = 0; R < this.faces[F].length; R++)
                                        -1 !== z.indexOf(this.faces[F][R]) && F !== m && -1 === z.connectedFaces.indexOf(F) && z.connectedFaces.push(F);
                                f.length;
                                for (var T = z.length, P = 0; P < T; P++) {
                                    var q = this.vertices[z[P]]
                                      , O = this.vertices[z[(P + 1) % T]];
                                    q.vsub(O, l),
                                    h.copy(l),
                                    i.vmult(h, h),
                                    e.vadd(h, h),
                                    c.copy(this.faceNormals[m]),
                                    i.vmult(c, c),
                                    e.vadd(c, c),
                                    h.cross(c, p),
                                    p.negate(p),
                                    u.copy(q),
                                    i.vmult(u, u),
                                    e.vadd(u, u),
                                    u.dot(p);
                                    var I = z.connectedFaces[P];
                                    d.copy(this.faceNormals[I]);
                                    var V = this.getPlaneConstantOfFace(I);
                                    y.copy(d),
                                    i.vmult(y, y);
                                    var j = V - y.dot(e);
                                    for (this.clipFaceAgainstPlane(f, v, y, j); f.length; )
                                        f.shift();
                                    for (; v.length; )
                                        f.push(v.shift())
                                }
                                for (d.copy(this.faceNormals[m]),
                                V = this.getPlaneConstantOfFace(m),
                                y.copy(d),
                                i.vmult(y, y),
                                j = V - y.dot(e),
                                F = 0; F < f.length; F++) {
                                    var k = y.dot(f[F]) + j;
                                    if (k <= n && (k = n),
                                    k <= r) {
                                        var N = f[F];
                                        if (k <= 0) {
                                            var L = {
                                                point: N,
                                                normal: y,
                                                depth: k
                                            };
                                            s.push(L)
                                        }
                                    }
                                }
                            }
                        }
                        ,
                        r.prototype.clipFaceAgainstPlane = function(t, e, i, n) {
                            var r, s, a = t.length;
                            if (a < 2)
                                return e;
                            var l = t[t.length - 1]
                              , h = t[0];
                            r = i.dot(l) + n;
                            for (var c = 0; c < a; c++) {
                                if (h = t[c],
                                s = i.dot(h) + n,
                                r < 0)
                                    if (s < 0)
                                        (p = new o).copy(h),
                                        e.push(p);
                                    else {
                                        var p = new o;
                                        l.lerp(h, r / (r - s), p),
                                        e.push(p)
                                    }
                                else
                                    s < 0 && (p = new o,
                                    l.lerp(h, r / (r - s), p),
                                    e.push(p),
                                    e.push(h));
                                l = h,
                                r = s
                            }
                            return e
                        }
                        ,
                        r.prototype.computeWorldVertices = function(t, e) {
                            for (var i = this.vertices.length; this.worldVertices.length < i; )
                                this.worldVertices.push(new o);
                            for (var n = this.vertices, r = this.worldVertices, s = 0; s !== i; s++)
                                e.vmult(n[s], r[s]),
                                t.vadd(r[s], r[s]);
                            this.worldVerticesNeedsUpdate = !1
                        }
                        ,
                        new o,
                        r.prototype.computeLocalAABB = function(t, e) {
                            var i = this.vertices.length
                              , o = this.vertices;
                            t.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
                            e.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
                            for (var n = 0; n < i; n++) {
                                var r = o[n];
                                r.x < t.x ? t.x = r.x : r.x > e.x && (e.x = r.x),
                                r.y < t.y ? t.y = r.y : r.y > e.y && (e.y = r.y),
                                r.z < t.z ? t.z = r.z : r.z > e.z && (e.z = r.z)
                            }
                        }
                        ,
                        r.prototype.computeWorldFaceNormals = function(t) {
                            for (var e = this.faceNormals.length; this.worldFaceNormals.length < e; )
                                this.worldFaceNormals.push(new o);
                            for (var i = this.faceNormals, n = this.worldFaceNormals, r = 0; r !== e; r++)
                                t.vmult(i[r], n[r]);
                            this.worldFaceNormalsNeedsUpdate = !1
                        }
                        ,
                        r.prototype.updateBoundingSphereRadius = function() {
                            for (var t = 0, e = this.vertices, i = 0, o = e.length; i !== o; i++) {
                                var n = e[i].norm2();
                                n > t && (t = n)
                            }
                            this.boundingSphereRadius = Math.sqrt(t)
                        }
                        ;
                        var A = new o;
                        r.prototype.calculateWorldAABB = function(t, e, i, o) {
                            for (var n, r, s, a, l, h, c = this.vertices.length, p = this.vertices, u = 0; u < c; u++) {
                                A.copy(p[u]),
                                e.vmult(A, A),
                                t.vadd(A, A);
                                var d = A;
                                (d.x < n || void 0 === n) && (n = d.x),
                                (d.x > a || void 0 === a) && (a = d.x),
                                (d.y < r || void 0 === r) && (r = d.y),
                                (d.y > l || void 0 === l) && (l = d.y),
                                (d.z < s || void 0 === s) && (s = d.z),
                                (d.z > h || void 0 === h) && (h = d.z)
                            }
                            i.set(n, r, s),
                            o.set(a, l, h)
                        }
                        ,
                        r.prototype.volume = function() {
                            return 4 * Math.PI * this.boundingSphereRadius / 3
                        }
                        ,
                        r.prototype.getAveragePointLocal = function(t) {
                            t = t || new o;
                            for (var e = this.vertices.length, i = this.vertices, n = 0; n < e; n++)
                                t.vadd(i[n], t);
                            return t.mult(1 / e, t),
                            t
                        }
                        ,
                        r.prototype.transformAllPoints = function(t, e) {
                            var i = this.vertices.length
                              , o = this.vertices;
                            if (e) {
                                for (var n = 0; n < i; n++) {
                                    var r = o[n];
                                    e.vmult(r, r)
                                }
                                for (n = 0; n < this.faceNormals.length; n++)
                                    r = this.faceNormals[n],
                                    e.vmult(r, r)
                            }
                            if (t)
                                for (n = 0; n < i; n++)
                                    (r = o[n]).vadd(t, r)
                        }
                        ;
                        var z = new o
                          , F = new o
                          , R = new o;
                        r.prototype.pointIsInside = function(t) {
                            var e = this.vertices.length
                              , i = this.vertices
                              , o = this.faces
                              , n = this.faceNormals
                              , r = this.faces.length
                              , s = z;
                            this.getAveragePointLocal(s);
                            for (var a = 0; a < r; a++) {
                                this.faces[a].length,
                                e = n[a];
                                var l = i[o[a][0]]
                                  , h = F;
                                t.vsub(l, h);
                                var c = e.dot(h)
                                  , p = R;
                                s.vsub(l, p);
                                var u = e.dot(p);
                                if (c < 0 && u > 0 || c > 0 && u < 0)
                                    return !1
                            }
                            return -1
                        }
                        ,
                        new o;
                        var T = new o
                          , P = new o;
                        r.project = function(t, e, i, o, r) {
                            var s = t.vertices.length
                              , a = T
                              , l = 0
                              , h = 0
                              , c = P
                              , p = t.vertices;
                            c.setZero(),
                            n.vectorToLocalFrame(i, o, e, a),
                            n.pointToLocalFrame(i, o, c, c);
                            var u = c.dot(a);
                            h = l = p[0].dot(a);
                            for (var d = 1; d < s; d++) {
                                var y = p[d].dot(a);
                                y > l && (l = y),
                                y < h && (h = y)
                            }
                            if ((h -= u) > (l -= u)) {
                                var f = h;
                                h = l,
                                l = f
                            }
                            r[0] = l,
                            r[1] = h
                        }
                    }
                    , {
                        "../math/Quaternion": 30,
                        "../math/Transform": 31,
                        "../math/Vec3": 32,
                        "./Shape": 45
                    }],
                    41: [function(t, e) {
                        e.exports = r,
                        t("./Shape");
                        var i = t("../math/Vec3")
                          , o = (t("../math/Quaternion"),
                        t("./ConvexPolyhedron"))
                          , n = t("../math/CMath");
                        function r(t, e, r, s, a) {
                            if (a) {
                                for (var l = s, h = n.cos, c = n.sin, p = r / 2, u = [], d = [], y = [0], f = [1], v = [], m = 2 * Math.PI / l, g = 0; g < l; g++)
                                    u.push(new i(t * h(m * g),p,t * c(m * g))),
                                    u.push(new i(t * h(m * g),-p,t * c(m * g))),
                                    g < l - 1 ? (d.push([2 * g + 2, 2 * g + 3, 2 * g + 1, 2 * g]),
                                    y.push(2 * g + 2),
                                    f.push(2 * g + 3)) : d.push([0, 1, 2 * g + 1, 2 * g]),
                                    (l % 2 == 1 || g < l / 2) && v.push(new i(h(m * (g + .5)),0,c(m * (g + .5))));
                                d.push(f);
                                var b = [];
                                for (g = 0; g < y.length; g++)
                                    b.push(y[y.length - g - 1]);
                                return d.push(b),
                                v.push(new i(0,1,0)),
                                void o.call(this, u, d, v)
                            }
                            l = s;
                            var w = []
                              , x = (v = [],
                            [])
                              , _ = []
                              , B = [];
                            for (h = n.cos,
                            c = n.sin,
                            w.push(new i(e * h(0),e * c(0),.5 * -r)),
                            _.push(0),
                            w.push(new i(t * h(0),t * c(0),.5 * r)),
                            B.push(1),
                            g = 0; g < l; g++) {
                                m = 2 * Math.PI / l * (g + 1);
                                var S = 2 * Math.PI / l * (g + .5);
                                g < l - 1 ? (w.push(new i(e * h(m),e * c(m),.5 * -r)),
                                _.push(2 * g + 2),
                                w.push(new i(t * h(m),t * c(m),.5 * r)),
                                B.push(2 * g + 3),
                                x.push([2 * g + 2, 2 * g + 3, 2 * g + 1, 2 * g])) : x.push([0, 1, 2 * g + 1, 2 * g]),
                                (l % 2 == 1 || g < l / 2) && v.push(new i(h(S),c(S),0))
                            }
                            for (x.push(B),
                            v.push(new i(0,0,1)),
                            b = [],
                            g = 0; g < _.length; g++)
                                b.push(_[_.length - g - 1]);
                            x.push(b),
                            o.call(this, w, x, v)
                        }
                        r.prototype = new o
                    }
                    , {
                        "../math/CMath": 27,
                        "../math/Quaternion": 30,
                        "../math/Vec3": 32,
                        "./ConvexPolyhedron": 40,
                        "./Shape": 45
                    }],
                    42: [function(t, e) {
                        var i = t("./Shape")
                          , o = t("./ConvexPolyhedron")
                          , n = t("../math/Vec3")
                          , r = t("../utils/Utils");
                        function s(t, e) {
                            e = r.defaults(e, {
                                maxValue: null,
                                minValue: null,
                                elementSize: 1
                            }),
                            this.data = t,
                            this.maxValue = e.maxValue,
                            this.minValue = e.minValue,
                            this.elementSize = e.elementSize,
                            null === e.minValue && this.updateMinValue(),
                            null === e.maxValue && this.updateMaxValue(),
                            this.cacheEnabled = !0,
                            i.call(this, {
                                type: i.types.HEIGHTFIELD
                            }),
                            this.pillarConvex = new o,
                            this.pillarOffset = new n,
                            this.updateBoundingSphereRadius(),
                            this._cachedPillars = {}
                        }
                        e.exports = s,
                        s.prototype = new i,
                        s.prototype.update = function() {
                            this._cachedPillars = {}
                        }
                        ,
                        s.prototype.updateMinValue = function() {
                            for (var t = this.data, e = t[0][0], i = 0; i !== t.length; i++)
                                for (var o = 0; o !== t[i].length; o++) {
                                    var n = t[i][o];
                                    n < e && (e = n)
                                }
                            this.minValue = e
                        }
                        ,
                        s.prototype.updateMaxValue = function() {
                            for (var t = this.data, e = t[0][0], i = 0; i !== t.length; i++)
                                for (var o = 0; o !== t[i].length; o++) {
                                    var n = t[i][o];
                                    n > e && (e = n)
                                }
                            this.maxValue = e
                        }
                        ,
                        s.prototype.setHeightValueAtIndex = function(t, e, i) {
                            this.data[t][e] = i,
                            this.clearCachedConvexTrianglePillar(t, e, !1),
                            t > 0 && (this.clearCachedConvexTrianglePillar(t - 1, e, !0),
                            this.clearCachedConvexTrianglePillar(t - 1, e, !1)),
                            e > 0 && (this.clearCachedConvexTrianglePillar(t, e - 1, !0),
                            this.clearCachedConvexTrianglePillar(t, e - 1, !1)),
                            e > 0 && t > 0 && this.clearCachedConvexTrianglePillar(t - 1, e - 1, !0)
                        }
                        ,
                        s.prototype.getRectMinMax = function(t, e, i, o, n) {
                            n = n || [];
                            for (var r = this.data, s = this.minValue, a = t; a <= i; a++)
                                for (var l = e; l <= o; l++) {
                                    var h = r[a][l];
                                    h > s && (s = h)
                                }
                            n[0] = this.minValue,
                            n[1] = s
                        }
                        ,
                        s.prototype.getIndexOfPosition = function(t, e, i, o) {
                            var n = this.elementSize
                              , r = this.data
                              , s = Math.floor(t / n)
                              , a = Math.floor(e / n);
                            return i[0] = s,
                            i[1] = a,
                            o && (s < 0 && (s = 0),
                            a < 0 && (a = 0),
                            s >= r.length - 1 && (s = r.length - 1),
                            a >= r[0].length - 1 && (a = r[0].length - 1)),
                            !(s < 0 || a < 0 || s >= r.length - 1 || a >= r[0].length - 1)
                        }
                        ;
                        var a = []
                          , l = new n
                          , h = new n
                          , c = new n
                          , p = new n;
                        s.prototype.getTriangleAt = function(t, e, i, o, n, r) {
                            var s = a;
                            this.getIndexOfPosition(t, e, s, i);
                            var l = s[0]
                              , h = s[1]
                              , c = this.data;
                            i && (l = Math.min(c.length - 2, Math.max(0, l)),
                            h = Math.min(c[0].length - 2, Math.max(0, h)));
                            var p = this.elementSize
                              , u = Math.pow(t / p - l, 2) + Math.pow(e / p - h, 2) > Math.pow(t / p - (l + 1), 2) + Math.pow(e / p - (h + 1), 2);
                            return this.getTriangle(l, h, u, o, n, r),
                            u
                        }
                        ;
                        var u = new n
                          , d = new n
                          , y = new n
                          , f = new n
                          , v = new n;
                        function m(t, e, i, o, n, r, s, a, l) {
                            l.x = ((r - a) * (t - s) + (s - n) * (e - a)) / ((r - a) * (i - s) + (s - n) * (o - a)),
                            l.y = ((a - o) * (t - s) + (i - s) * (e - a)) / ((r - a) * (i - s) + (s - n) * (o - a)),
                            l.z = 1 - l.x - l.y
                        }
                        s.prototype.getNormalAt = function(t, e, i, o) {
                            var n = u
                              , r = d
                              , s = y
                              , a = f
                              , l = v;
                            this.getTriangleAt(t, e, i, n, r, s),
                            r.vsub(n, a),
                            s.vsub(n, l),
                            a.cross(l, o),
                            o.normalize()
                        }
                        ,
                        s.prototype.getAabbAtIndex = function(t, e, i) {
                            var o = this.data
                              , n = this.elementSize;
                            i.lowerBound.set(t * n, e * n, o[t][e]),
                            i.upperBound.set((t + 1) * n, (e + 1) * n, o[t + 1][e + 1])
                        }
                        ,
                        s.prototype.getHeightAt = function(t, e, i) {
                            var o = this.data
                              , n = h
                              , r = c
                              , s = p
                              , u = a;
                            this.getIndexOfPosition(t, e, u, i);
                            var d = u[0]
                              , y = u[1];
                            i && (d = Math.min(o.length - 2, Math.max(0, d)),
                            y = Math.min(o[0].length - 2, Math.max(0, y)));
                            var f = this.getTriangleAt(t, e, i, n, r, s);
                            m(t, e, n.x, n.y, r.x, r.y, s.x, s.y, l);
                            var v = l;
                            return f ? o[d + 1][y + 1] * v.x + o[d][y + 1] * v.y + o[d + 1][y] * v.z : o[d][y] * v.x + o[d + 1][y] * v.y + o[d][y + 1] * v.z
                        }
                        ,
                        s.prototype.getCacheConvexTrianglePillarKey = function(t, e, i) {
                            return t + "_" + e + "_" + (i ? 1 : 0)
                        }
                        ,
                        s.prototype.getCachedConvexTrianglePillar = function(t, e, i) {
                            return this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, i)]
                        }
                        ,
                        s.prototype.setCachedConvexTrianglePillar = function(t, e, i, o, n) {
                            this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, i)] = {
                                convex: o,
                                offset: n
                            }
                        }
                        ,
                        s.prototype.clearCachedConvexTrianglePillar = function(t, e, i) {
                            delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, i)]
                        }
                        ,
                        s.prototype.getTriangle = function(t, e, i, o, n, r) {
                            var s = this.data
                              , a = this.elementSize;
                            i ? (o.set((t + 1) * a, (e + 1) * a, s[t + 1][e + 1]),
                            n.set(t * a, (e + 1) * a, s[t][e + 1]),
                            r.set((t + 1) * a, e * a, s[t + 1][e])) : (o.set(t * a, e * a, s[t][e]),
                            n.set((t + 1) * a, e * a, s[t + 1][e]),
                            r.set(t * a, (e + 1) * a, s[t][e + 1]))
                        }
                        ,
                        s.prototype.getConvexTrianglePillar = function(t, e, i) {
                            var r = this.pillarConvex
                              , s = this.pillarOffset;
                            if (this.cacheEnabled) {
                                if (a = this.getCachedConvexTrianglePillar(t, e, i))
                                    return this.pillarConvex = a.convex,
                                    void (this.pillarOffset = a.offset);
                                r = new o,
                                s = new n,
                                this.pillarConvex = r,
                                this.pillarOffset = s
                            }
                            var a = this.data
                              , l = this.elementSize
                              , h = r.faces;
                            r.vertices.length = 6;
                            for (var c = 0; c < 6; c++)
                                r.vertices[c] || (r.vertices[c] = new n);
                            for (h.length = 5,
                            c = 0; c < 5; c++)
                                h[c] || (h[c] = []);
                            var p = r.vertices
                              , u = (Math.min(a[t][e], a[t + 1][e], a[t][e + 1], a[t + 1][e + 1]) - this.minValue) / 2 + this.minValue;
                            i ? (s.set((t + .75) * l, (e + .75) * l, u),
                            p[0].set(.25 * l, .25 * l, a[t + 1][e + 1] - u),
                            p[1].set(-.75 * l, .25 * l, a[t][e + 1] - u),
                            p[2].set(.25 * l, -.75 * l, a[t + 1][e] - u),
                            p[3].set(.25 * l, .25 * l, -u - 1),
                            p[4].set(-.75 * l, .25 * l, -u - 1),
                            p[5].set(.25 * l, -.75 * l, -u - 1),
                            h[0][0] = 0,
                            h[0][1] = 1,
                            h[0][2] = 2,
                            h[1][0] = 5,
                            h[1][1] = 4,
                            h[1][2] = 3,
                            h[2][0] = 2,
                            h[2][1] = 5,
                            h[2][2] = 3,
                            h[2][3] = 0,
                            h[3][0] = 3,
                            h[3][1] = 4,
                            h[3][2] = 1,
                            h[3][3] = 0,
                            h[4][0] = 1,
                            h[4][1] = 4,
                            h[4][2] = 5,
                            h[4][3] = 2) : (s.set((t + .25) * l, (e + .25) * l, u),
                            p[0].set(-.25 * l, -.25 * l, a[t][e] - u),
                            p[1].set(.75 * l, -.25 * l, a[t + 1][e] - u),
                            p[2].set(-.25 * l, .75 * l, a[t][e + 1] - u),
                            p[3].set(-.25 * l, -.25 * l, -u - 1),
                            p[4].set(.75 * l, -.25 * l, -u - 1),
                            p[5].set(-.25 * l, .75 * l, -u - 1),
                            h[0][0] = 0,
                            h[0][1] = 1,
                            h[0][2] = 2,
                            h[1][0] = 5,
                            h[1][1] = 4,
                            h[1][2] = 3,
                            h[2][0] = 0,
                            h[2][1] = 2,
                            h[2][2] = 5,
                            h[2][3] = 3,
                            h[3][0] = 1,
                            h[3][1] = 0,
                            h[3][2] = 3,
                            h[3][3] = 4,
                            h[4][0] = 4,
                            h[4][1] = 5,
                            h[4][2] = 2,
                            h[4][3] = 1),
                            r.computeNormals(),
                            r.computeEdges(),
                            r.updateBoundingSphereRadius(),
                            this.setCachedConvexTrianglePillar(t, e, i, r, s)
                        }
                        ,
                        s.prototype.calculateLocalInertia = function(t, e) {
                            return (e = e || new n).set(0, 0, 0),
                            e
                        }
                        ,
                        s.prototype.volume = function() {
                            return Number.MAX_VALUE
                        }
                        ,
                        s.prototype.calculateWorldAABB = function(t, e, i, o) {
                            i.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
                            o.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
                        }
                        ,
                        s.prototype.updateBoundingSphereRadius = function() {
                            var t = this.data
                              , e = this.elementSize;
                            this.boundingSphereRadius = new n(t.length * e,t[0].length * e,Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm()
                        }
                        ,
                        s.prototype.setHeightsFromImage = function(t, e) {
                            var i = document.createElement("canvas");
                            i.width = t.width,
                            i.height = t.height;
                            var o = i.getContext("2d");
                            o.drawImage(t, 0, 0);
                            var n = o.getImageData(0, 0, t.width, t.height)
                              , r = this.data;
                            r.length = 0,
                            this.elementSize = Math.abs(e.x) / n.width;
                            for (var s = 0; s < n.height; s++) {
                                for (var a = [], l = 0; l < n.width; l++) {
                                    var h = (n.data[4 * (s * n.height + l)] + n.data[4 * (s * n.height + l) + 1] + n.data[4 * (s * n.height + l) + 2]) / 4 / 255 * e.z;
                                    e.x < 0 ? a.push(h) : a.unshift(h)
                                }
                                e.y < 0 ? r.unshift(a) : r.push(a)
                            }
                            this.updateMaxValue(),
                            this.updateMinValue(),
                            this.update()
                        }
                    }
                    , {
                        "../math/Vec3": 32,
                        "../utils/Utils": 55,
                        "./ConvexPolyhedron": 40,
                        "./Shape": 45
                    }],
                    43: [function(t, e) {
                        e.exports = n;
                        var i = t("./Shape")
                          , o = t("../math/Vec3");
                        function n() {
                            i.call(this, {
                                type: i.types.PARTICLE
                            })
                        }
                        n.prototype = new i,
                        n.prototype.constructor = n,
                        n.prototype.calculateLocalInertia = function(t, e) {
                            return (e = e || new o).set(0, 0, 0),
                            e
                        }
                        ,
                        n.prototype.volume = function() {
                            return 0
                        }
                        ,
                        n.prototype.updateBoundingSphereRadius = function() {
                            this.boundingSphereRadius = 0
                        }
                        ,
                        n.prototype.calculateWorldAABB = function(t, e, i, o) {
                            i.copy(t),
                            o.copy(t)
                        }
                    }
                    , {
                        "../math/Vec3": 32,
                        "./Shape": 45
                    }],
                    44: [function(t, e) {
                        e.exports = n;
                        var i = t("./Shape")
                          , o = t("../math/Vec3");
                        function n() {
                            i.call(this, {
                                type: i.types.PLANE
                            }),
                            this.worldNormal = new o,
                            this.worldNormalNeedsUpdate = !0,
                            this.boundingSphereRadius = Number.MAX_VALUE
                        }
                        n.prototype = new i,
                        n.prototype.constructor = n,
                        n.prototype.computeWorldNormal = function(t) {
                            var e = this.worldNormal;
                            e.set(0, 0, 1),
                            t.vmult(e, e),
                            this.worldNormalNeedsUpdate = !1
                        }
                        ,
                        n.prototype.calculateLocalInertia = function(t, e) {
                            return e || new o
                        }
                        ,
                        n.prototype.volume = function() {
                            return Number.MAX_VALUE
                        }
                        ;
                        var r = new o;
                        n.prototype.calculateWorldAABB = function(t, e, i, o) {
                            r.set(0, 0, 1),
                            e.vmult(r, r);
                            var n = Number.MAX_VALUE;
                            i.set(-n, -n, -n),
                            o.set(n, n, n),
                            1 === r.x && (o.x = t.x),
                            1 === r.y && (o.y = t.y),
                            1 === r.z && (o.z = t.z),
                            -1 === r.x && (i.x = t.x),
                            -1 === r.y && (i.y = t.y),
                            -1 === r.z && (i.z = t.z)
                        }
                        ,
                        n.prototype.updateBoundingSphereRadius = function() {
                            this.boundingSphereRadius = Number.MAX_VALUE
                        }
                    }
                    , {
                        "../math/Vec3": 32,
                        "./Shape": 45
                    }],
                    45: [function(t, e) {
                        e.exports = o;
                        var i = t("../utils/EventTarget")
                          , o = t("./Shape");
                        function o(t) {
                            t = t || {},
                            i.apply(this),
                            this.id = o.idCounter++,
                            this.type = t.type || 0,
                            this.boundingSphereRadius = 0,
                            this.collisionResponse = !t.collisionResponse || t.collisionResponse,
                            this.collisionFilterGroup = void 0 !== t.collisionFilterGroup ? t.collisionFilterGroup : 1,
                            this.collisionFilterMask = void 0 !== t.collisionFilterMask ? t.collisionFilterMask : -1,
                            this.material = t.material ? t.material : null,
                            this.body = null
                        }
                        t("../math/Vec3"),
                        t("../math/Quaternion"),
                        t("../material/Material"),
                        o.prototype = new i,
                        o.prototype.constructor = o,
                        o.prototype.updateBoundingSphereRadius = function() {
                            throw "computeBoundingSphereRadius() not implemented for shape type " + this.type
                        }
                        ,
                        o.prototype.volume = function() {
                            throw "volume() not implemented for shape type " + this.type
                        }
                        ,
                        o.prototype.calculateLocalInertia = function() {
                            throw "calculateLocalInertia() not implemented for shape type " + this.type
                        }
                        ,
                        o.idCounter = 0,
                        o.types = {
                            SPHERE: 1,
                            PLANE: 2,
                            BOX: 4,
                            COMPOUND: 8,
                            CONVEXPOLYHEDRON: 16,
                            HEIGHTFIELD: 32,
                            PARTICLE: 64,
                            CYLINDER: 128,
                            TRIMESH: 256
                        }
                    }
                    , {
                        "../material/Material": 26,
                        "../math/Quaternion": 30,
                        "../math/Vec3": 32,
                        "../utils/EventTarget": 51,
                        "./Shape": 45
                    }],
                    46: [function(t, e) {
                        e.exports = n;
                        var i = t("./Shape")
                          , o = t("../math/Vec3");
                        function n(t) {
                            if (i.call(this, {
                                type: i.types.SPHERE
                            }),
                            this.radius = void 0 !== t ? t : 1,
                            this.radius < 0)
                                throw new Error("The sphere radius cannot be negative.");
                            this.updateBoundingSphereRadius()
                        }
                        n.prototype = new i,
                        n.prototype.constructor = n,
                        n.prototype.calculateLocalInertia = function(t, e) {
                            e = e || new o;
                            var i = 2 * t * this.radius * this.radius / 5;
                            return e.x = i,
                            e.y = i,
                            e.z = i,
                            e
                        }
                        ,
                        n.prototype.volume = function() {
                            return 4 * Math.PI * this.radius / 3
                        }
                        ,
                        n.prototype.updateBoundingSphereRadius = function() {
                            this.boundingSphereRadius = this.radius
                        }
                        ,
                        n.prototype.calculateWorldAABB = function(t, e, i, o) {
                            for (var n = this.radius, r = ["x", "y", "z"], s = 0; s < r.length; s++) {
                                var a = r[s];
                                i[a] = t[a] - n,
                                o[a] = t[a] + n
                            }
                        }
                    }
                    , {
                        "../math/Vec3": 32,
                        "./Shape": 45
                    }],
                    47: [function(t, e) {
                        e.exports = l;
                        var i = t("./Shape")
                          , o = t("../math/Vec3")
                          , n = (t("../math/Quaternion"),
                        t("../math/Transform"))
                          , r = t("../collision/AABB")
                          , s = t("../utils/Octree")
                          , a = t("../math/CMath");
                        function l(t, e) {
                            i.call(this, {
                                type: i.types.TRIMESH
                            }),
                            this.vertices = new Float32Array(t),
                            this.indices = new Int16Array(e),
                            this.normals = new Float32Array(e.length),
                            this.aabb = new r,
                            this.edges = null,
                            this.scale = new o(1,1,1),
                            this.tree = new s,
                            this.updateEdges(),
                            this.updateNormals(),
                            this.updateAABB(),
                            this.updateBoundingSphereRadius(),
                            this.updateTree()
                        }
                        l.prototype = new i,
                        l.prototype.constructor = l;
                        var h = new o;
                        l.prototype.updateTree = function() {
                            var t = this.tree;
                            t.reset(),
                            t.aabb.copy(this.aabb);
                            var e = this.scale;
                            t.aabb.lowerBound.x *= 1 / e.x,
                            t.aabb.lowerBound.y *= 1 / e.y,
                            t.aabb.lowerBound.z *= 1 / e.z,
                            t.aabb.upperBound.x *= 1 / e.x,
                            t.aabb.upperBound.y *= 1 / e.y,
                            t.aabb.upperBound.z *= 1 / e.z;
                            for (var i = new r, n = new o, s = new o, a = new o, l = [n, s, a], h = 0; h < this.indices.length / 3; h++) {
                                var c = 3 * h;
                                this._getUnscaledVertex(this.indices[c], n),
                                this._getUnscaledVertex(this.indices[c + 1], s),
                                this._getUnscaledVertex(this.indices[c + 2], a),
                                i.setFromPoints(l),
                                t.insert(i, h)
                            }
                            t.removeEmptyNodes()
                        }
                        ;
                        var c = new r;
                        l.prototype.getTrianglesInAABB = function(t, e) {
                            c.copy(t);
                            var i = this.scale
                              , o = i.x
                              , n = i.y
                              , r = i.z
                              , s = c.lowerBound
                              , a = c.upperBound;
                            return s.x /= o,
                            s.y /= n,
                            s.z /= r,
                            a.x /= o,
                            a.y /= n,
                            a.z /= r,
                            this.tree.aabbQuery(c, e)
                        }
                        ,
                        l.prototype.setScale = function(t) {
                            var e = this.scale.x === this.scale.y === this.scale.z
                              , i = t.x === t.y === t.z;
                            e && i || this.updateNormals(),
                            this.scale.copy(t),
                            this.updateAABB(),
                            this.updateBoundingSphereRadius()
                        }
                        ,
                        l.prototype.updateNormals = function() {
                            for (var t = h, e = this.normals, i = 0; i < this.indices.length / 3; i++) {
                                var o = 3 * i
                                  , n = this.indices[o]
                                  , r = this.indices[o + 1]
                                  , s = this.indices[o + 2];
                                this.getVertex(n, f),
                                this.getVertex(r, v),
                                this.getVertex(s, m),
                                l.computeNormal(v, f, m, t),
                                e[o] = t.x,
                                e[o + 1] = t.y,
                                e[o + 2] = t.z
                            }
                        }
                        ,
                        l.prototype.updateEdges = function() {
                            for (var t = {}, e = function() {
                                t[n < r ? n + "_" + r : r + "_" + n] = !0
                            }, i = 0; i < this.indices.length / 3; i++) {
                                var o = 3 * i
                                  , n = this.indices[o]
                                  , r = this.indices[o + 1];
                                this.indices[o + 2],
                                e(),
                                e(),
                                e()
                            }
                            var s = Object.keys(t);
                            for (this.edges = new Int16Array(2 * s.length),
                            i = 0; i < s.length; i++) {
                                var a = s[i].split("_");
                                this.edges[2 * i] = parseInt(a[0], 10),
                                this.edges[2 * i + 1] = parseInt(a[1], 10)
                            }
                        }
                        ,
                        l.prototype.getEdgeVertex = function(t, e, i) {
                            var o = this.edges[2 * t + (e ? 1 : 0)];
                            this.getVertex(o, i)
                        }
                        ;
                        var p = new o
                          , u = new o;
                        l.prototype.getEdgeVector = function(t, e) {
                            var i = p
                              , o = u;
                            this.getEdgeVertex(t, 0, i),
                            this.getEdgeVertex(t, 1, o),
                            o.vsub(i, e)
                        }
                        ;
                        var d = new o
                          , y = new o;
                        l.computeNormal = function(t, e, i, o) {
                            e.vsub(t, y),
                            i.vsub(e, d),
                            d.cross(y, o),
                            o.isZero() || o.normalize()
                        }
                        ;
                        var f = new o
                          , v = new o
                          , m = new o;
                        l.prototype.getVertex = function(t, e) {
                            var i = this.scale;
                            return this._getUnscaledVertex(t, e),
                            e.x *= i.x,
                            e.y *= i.y,
                            e.z *= i.z,
                            e
                        }
                        ,
                        l.prototype._getUnscaledVertex = function(t, e) {
                            var i = 3 * t
                              , o = this.vertices;
                            return e.set(o[i], o[i + 1], o[i + 2])
                        }
                        ,
                        l.prototype.getWorldVertex = function(t, e, i, o) {
                            return this.getVertex(t, o),
                            n.pointToWorldFrame(e, i, o, o),
                            o
                        }
                        ,
                        l.prototype.getTriangleVertices = function(t, e, i, o) {
                            var n = 3 * t;
                            this.getVertex(this.indices[n], e),
                            this.getVertex(this.indices[n + 1], i),
                            this.getVertex(this.indices[n + 2], o)
                        }
                        ,
                        l.prototype.getNormal = function(t, e) {
                            var i = 3 * t;
                            return e.set(this.normals[i], this.normals[i + 1], this.normals[i + 2])
                        }
                        ;
                        var g = new r;
                        l.prototype.calculateLocalInertia = function(t, e) {
                            this.computeLocalAABB(g);
                            var i = g.upperBound.x - g.lowerBound.x
                              , o = g.upperBound.y - g.lowerBound.y
                              , n = g.upperBound.z - g.lowerBound.z;
                            return e.set(1 / 12 * t * (4 * o * o + 4 * n * n), 1 / 12 * t * (4 * i * i + 4 * n * n), 1 / 12 * t * (4 * o * o + 4 * i * i))
                        }
                        ;
                        var b = new o;
                        l.prototype.computeLocalAABB = function(t) {
                            var e = t.lowerBound
                              , i = t.upperBound
                              , o = this.vertices.length
                              , n = (this.vertices,
                            b);
                            this.getVertex(0, n),
                            e.copy(n),
                            i.copy(n);
                            for (var r = 0; r !== o; r++)
                                this.getVertex(r, n),
                                n.x < e.x ? e.x = n.x : n.x > i.x && (i.x = n.x),
                                n.y < e.y ? e.y = n.y : n.y > i.y && (i.y = n.y),
                                n.z < e.z ? e.z = n.z : n.z > i.z && (i.z = n.z)
                        }
                        ,
                        l.prototype.updateAABB = function() {
                            this.computeLocalAABB(this.aabb)
                        }
                        ,
                        l.prototype.updateBoundingSphereRadius = function() {
                            for (var t = 0, e = this.vertices, i = new o, n = 0, r = e.length / 3; n !== r; n++) {
                                this.getVertex(n, i);
                                var s = i.norm2();
                                s > t && (t = s)
                            }
                            this.boundingSphereRadius = Math.sqrt(t)
                        }
                        ,
                        new o;
                        var w = new n
                          , x = new r;
                        l.prototype.calculateWorldAABB = function(t, e, i, o) {
                            var n = w
                              , r = x;
                            n.position = t,
                            n.quaternion = e,
                            this.aabb.toWorldFrame(n, r),
                            i.copy(r.lowerBound),
                            o.copy(r.upperBound)
                        }
                        ,
                        l.prototype.volume = function() {
                            return 4 * Math.PI * this.boundingSphereRadius / 3
                        }
                        ,
                        l.createTorus = function(t, e, i, o, n) {
                            t = t || 1,
                            e = e || .5,
                            i = i || 8,
                            o = o || 6,
                            n = n || 2 * Math.PI;
                            for (var r = [], s = [], h = 0; h <= i; h++)
                                for (var c = 0; c <= o; c++) {
                                    var p = c / o * n
                                      , u = h / i * Math.PI * 2
                                      , d = (t + e * a.cos(u)) * a.cos(p)
                                      , y = (t + e * a.cos(u)) * a.sin(p)
                                      , f = e * a.sin(u);
                                    r.push(d, y, f)
                                }
                            for (h = 1; h <= i; h++)
                                for (c = 1; c <= o; c++) {
                                    var v = (o + 1) * h + c - 1
                                      , m = (o + 1) * (h - 1) + c - 1
                                      , g = (o + 1) * (h - 1) + c
                                      , b = (o + 1) * h + c;
                                    s.push(v, m, b),
                                    s.push(m, g, b)
                                }
                            return new l(r,s)
                        }
                    }
                    , {
                        "../collision/AABB": 3,
                        "../math/CMath": 27,
                        "../math/Quaternion": 30,
                        "../math/Transform": 31,
                        "../math/Vec3": 32,
                        "../utils/Octree": 52,
                        "./Shape": 45
                    }],
                    48: [function(t, e) {
                        e.exports = o,
                        t("../math/Vec3"),
                        t("../math/Quaternion");
                        var i = t("./Solver");
                        function o() {
                            i.call(this),
                            this.iterations = 10,
                            this.tolerance = 1e-7
                        }
                        o.prototype = new i;
                        var n = []
                          , r = []
                          , s = [];
                        o.prototype.solve = function(t, e) {
                            var i, o, a, l, h, c = 0, p = this.iterations, u = this.tolerance * this.tolerance, d = this.equations, y = d.length, f = e.bodies, v = f.length, m = t;
                            if (0 !== y)
                                for (var g = 0; g !== v; g++)
                                    f[g].updateSolveMassProperties();
                            var b = r
                              , w = s
                              , x = n;
                            for (b.length = y,
                            w.length = y,
                            x.length = y,
                            g = 0; g !== y; g++) {
                                var _ = d[g];
                                x[g] = 0,
                                w[g] = _.computeB(m),
                                b[g] = 1 / _.computeC()
                            }
                            if (0 !== y) {
                                for (g = 0; g !== v; g++) {
                                    var B = (M = f[g]).vlambda
                                      , S = M.wlambda;
                                    B.set(0, 0, 0),
                                    S.set(0, 0, 0)
                                }
                                for (c = 0; c !== p; c++) {
                                    l = 0;
                                    for (var E = 0; E !== y; E++)
                                        _ = d[E],
                                        i = w[E],
                                        o = b[E],
                                        (h = x[E]) + (a = o * (i - _.computeGWlambda() - _.eps * h)) < _.minForce ? a = _.minForce - h : h + a > _.maxForce && (a = _.maxForce - h),
                                        x[E] += a,
                                        l += a > 0 ? a : -a,
                                        _.addToWlambda(a);
                                    if (l * l < u)
                                        break
                                }
                                for (g = 0; g !== v; g++) {
                                    var M, C = (M = f[g]).velocity, A = M.angularVelocity;
                                    M.vlambda.vmul(M.linearFactor, M.vlambda),
                                    C.vadd(M.vlambda, C),
                                    M.wlambda.vmul(M.angularFactor, M.wlambda),
                                    A.vadd(M.wlambda, A)
                                }
                                for (var z = d.length, F = 1 / m; z--; )
                                    d[z].multiplier = x[z] * F
                            }
                            return c
                        }
                    }
                    , {
                        "../math/Quaternion": 30,
                        "../math/Vec3": 32,
                        "./Solver": 49
                    }],
                    49: [function(t, e) {
                        function i() {
                            this.equations = []
                        }
                        e.exports = i,
                        i.prototype.solve = function() {
                            return 0
                        }
                        ,
                        i.prototype.addEquation = function(t) {
                            t.enabled && this.equations.push(t)
                        }
                        ,
                        i.prototype.removeEquation = function(t) {
                            var e = this.equations
                              , i = e.indexOf(t);
                            -1 !== i && e.splice(i, 1)
                        }
                        ,
                        i.prototype.removeAllEquations = function() {
                            this.equations.length = 0
                        }
                    }
                    , {}],
                    50: [function(t, e) {
                        e.exports = n,
                        t("../math/Vec3"),
                        t("../math/Quaternion");
                        var i = t("./Solver")
                          , o = t("../objects/Body");
                        function n(t) {
                            for (i.call(this),
                            this.iterations = 10,
                            this.tolerance = 1e-7,
                            this.subsolver = t,
                            this.nodes = [],
                            this.nodePool = []; this.nodePool.length < 128; )
                                this.nodePool.push(this.createNode())
                        }
                        n.prototype = new i;
                        var r = []
                          , s = []
                          , a = {
                            bodies: []
                        }
                          , l = o.STATIC;
                        function h(t) {
                            for (var e = t.length, i = 0; i !== e; i++) {
                                var o = t[i];
                                if (!(o.visited || o.body.type & l))
                                    return o
                            }
                            return !1
                        }
                        var c = [];
                        function p(t, e, i, o) {
                            for (c.push(t),
                            t.visited = !0,
                            e(t, i, o); c.length; )
                                for (var n, r = c.pop(); n = h(r.children); )
                                    n.visited = !0,
                                    e(n, i, o),
                                    c.push(n)
                        }
                        function u(t, e, i) {
                            e.push(t.body);
                            for (var o = t.eqs.length, n = 0; n !== o; n++) {
                                var r = t.eqs[n];
                                -1 === i.indexOf(r) && i.push(r)
                            }
                        }
                        function d(t, e) {
                            return e.id - t.id
                        }
                        n.prototype.createNode = function() {
                            return {
                                body: null,
                                children: [],
                                eqs: [],
                                visited: !1
                            }
                        }
                        ,
                        n.prototype.solve = function(t, e) {
                            for (var i = r, o = this.nodePool, n = e.bodies, l = this.equations, c = l.length, y = n.length, f = this.subsolver; o.length < y; )
                                o.push(this.createNode());
                            i.length = y;
                            for (var v = 0; v < y; v++)
                                i[v] = o[v];
                            for (v = 0; v !== y; v++) {
                                var m = i[v];
                                m.body = n[v],
                                m.children.length = 0,
                                m.eqs.length = 0,
                                m.visited = !1
                            }
                            for (var g = 0; g !== c; g++) {
                                var b = l[g]
                                  , w = (v = n.indexOf(b.bi),
                                n.indexOf(b.bj))
                                  , x = i[v]
                                  , _ = i[w];
                                x.children.push(_),
                                x.eqs.push(b),
                                _.children.push(x),
                                _.eqs.push(b)
                            }
                            var B, S = 0, E = s;
                            f.tolerance = this.tolerance,
                            f.iterations = this.iterations;
                            for (var M = a; B = h(i); ) {
                                E.length = 0,
                                M.bodies.length = 0,
                                p(B, u, M.bodies, E);
                                var C = E.length;
                                for (E = E.sort(d),
                                v = 0; v !== C; v++)
                                    f.addEquation(E[v]);
                                f.solve(t, M),
                                f.removeAllEquations(),
                                S++
                            }
                            return S
                        }
                    }
                    , {
                        "../math/Quaternion": 30,
                        "../math/Vec3": 32,
                        "../objects/Body": 33,
                        "./Solver": 49
                    }],
                    51: [function(t, e) {
                        var i = function() {};
                        e.exports = i,
                        i.prototype = {
                            constructor: i,
                            addEventListener: function(t, e) {
                                void 0 === this._listeners && (this._listeners = {});
                                var i = this._listeners;
                                return void 0 === i[t] && (i[t] = []),
                                -1 === i[t].indexOf(e) && i[t].push(e),
                                this
                            },
                            hasEventListener: function(t, e) {
                                if (void 0 === this._listeners)
                                    return !1;
                                var i = this._listeners;
                                return void 0 !== i[t] && -1 !== i[t].indexOf(e)
                            },
                            hasAnyEventListener: function(t) {
                                return void 0 !== this._listeners && void 0 !== this._listeners[t]
                            },
                            removeEventListener: function(t, e) {
                                if (void 0 === this._listeners)
                                    return this;
                                var i = this._listeners;
                                if (void 0 === i[t])
                                    return this;
                                var o = i[t].indexOf(e);
                                return -1 !== o && i[t].splice(o, 1),
                                this
                            },
                            dispatchEvent: function(t) {
                                if (void 0 === this._listeners)
                                    return this;
                                var e = this._listeners[t.type];
                                if (void 0 !== e) {
                                    t.target = this;
                                    for (var i = 0, o = e.length; i < o; i++)
                                        e[i].call(this, t)
                                }
                                return this
                            }
                        }
                    }
                    , {}],
                    52: [function(t, e) {
                        var i = t("../collision/AABB")
                          , o = t("../math/Vec3");
                        function n(t) {
                            t = t || {},
                            this.root = t.root || null,
                            this.aabb = t.aabb ? t.aabb.clone() : new i,
                            this.data = [],
                            this.children = []
                        }
                        function r(t, e) {
                            (e = e || {}).root = null,
                            e.aabb = t,
                            n.call(this, e),
                            this.maxDepth = void 0 !== e.maxDepth ? e.maxDepth : 8
                        }
                        e.exports = r,
                        r.prototype = new n,
                        n.prototype.reset = function() {
                            this.children.length = this.data.length = 0
                        }
                        ,
                        n.prototype.insert = function(t, e, i) {
                            var o = this.data;
                            if (i = i || 0,
                            !this.aabb.contains(t))
                                return !1;
                            var n = this.children;
                            if (i < (this.maxDepth || this.root.maxDepth)) {
                                var r = !1;
                                n.length || (this.subdivide(),
                                r = !0);
                                for (var s = 0; 8 !== s; s++)
                                    if (n[s].insert(t, e, i + 1))
                                        return !0;
                                r && (n.length = 0)
                            }
                            return o.push(e),
                            !0
                        }
                        ;
                        var s = new o;
                        n.prototype.subdivide = function() {
                            var t = this.aabb
                              , e = t.lowerBound
                              , r = t.upperBound
                              , a = this.children;
                            a.push(new n({
                                aabb: new i({
                                    lowerBound: new o(0,0,0)
                                })
                            }), new n({
                                aabb: new i({
                                    lowerBound: new o(1,0,0)
                                })
                            }), new n({
                                aabb: new i({
                                    lowerBound: new o(1,1,0)
                                })
                            }), new n({
                                aabb: new i({
                                    lowerBound: new o(1,1,1)
                                })
                            }), new n({
                                aabb: new i({
                                    lowerBound: new o(0,1,1)
                                })
                            }), new n({
                                aabb: new i({
                                    lowerBound: new o(0,0,1)
                                })
                            }), new n({
                                aabb: new i({
                                    lowerBound: new o(1,0,1)
                                })
                            }), new n({
                                aabb: new i({
                                    lowerBound: new o(0,1,0)
                                })
                            })),
                            r.vsub(e, s),
                            s.scale(.5, s);
                            for (var l = this.root || this, h = 0; 8 !== h; h++) {
                                var c = a[h];
                                c.root = l;
                                var p = c.aabb.lowerBound;
                                p.x *= s.x,
                                p.y *= s.y,
                                p.z *= s.z,
                                p.vadd(e, p),
                                p.vadd(s, c.aabb.upperBound)
                            }
                        }
                        ,
                        n.prototype.aabbQuery = function(t, e) {
                            this.data,
                            this.children;
                            for (var i = [this]; i.length; ) {
                                var o = i.pop();
                                o.aabb.overlaps(t) && Array.prototype.push.apply(e, o.data),
                                Array.prototype.push.apply(i, o.children)
                            }
                            return e
                        }
                        ;
                        var a = new i;
                        n.prototype.rayQuery = function(t, e, i) {
                            return t.getAABB(a),
                            a.toLocalFrame(e, a),
                            this.aabbQuery(a, i),
                            i
                        }
                        ,
                        n.prototype.removeEmptyNodes = function() {
                            for (var t = this.children.length - 1; t >= 0; t--)
                                this.children[t].removeEmptyNodes(),
                                this.children[t].children.length || this.children[t].data.length || this.children.splice(t, 1)
                        }
                    }
                    , {
                        "../collision/AABB": 3,
                        "../math/Vec3": 32
                    }],
                    53: [function(t, e) {
                        function i() {
                            this.objects = [],
                            this.type = Object
                        }
                        e.exports = i,
                        i.prototype.release = function() {
                            for (var t = arguments.length, e = 0; e !== t; e++)
                                this.objects.push(arguments[e]);
                            return this
                        }
                        ,
                        i.prototype.get = function() {
                            return 0 === this.objects.length ? this.constructObject() : this.objects.pop()
                        }
                        ,
                        i.prototype.constructObject = function() {
                            throw new Error("constructObject() not implemented in this Pool subclass yet!")
                        }
                        ,
                        i.prototype.resize = function(t) {
                            for (var e = this.objects; e.length > t; )
                                e.pop();
                            for (; e.length < t; )
                                e.push(this.constructObject());
                            return this
                        }
                    }
                    , {}],
                    54: [function(t, e) {
                        function i() {
                            this.data = {
                                keys: []
                            }
                        }
                        e.exports = i,
                        i.prototype.get = function(t, e) {
                            if (t > e) {
                                var i = e;
                                e = t,
                                t = i
                            }
                            return this.data[t + "-" + e]
                        }
                        ,
                        i.prototype.set = function(t, e, i) {
                            if (t > e) {
                                var o = e;
                                e = t,
                                t = o
                            }
                            var n = t + "-" + e;
                            return this.get(t, e) || this.data.keys.push(n),
                            this.data[n] = i,
                            this.data[n]
                        }
                        ,
                        i.prototype.del = function(t, e) {
                            if (t > e) {
                                var i = e;
                                e = t,
                                t = i
                            }
                            var o = t + "-" + e
                              , n = this.data.keys.indexOf(o);
                            return n >= 0 && (this.data.keys.splice(n, 1),
                            delete this.data[o],
                            !0)
                        }
                        ,
                        i.prototype.reset = function() {
                            this.data = {
                                keys: []
                            }
                        }
                        ,
                        i.prototype.getLength = function() {
                            return this.data.keys.length
                        }
                        ,
                        i.prototype.getKeyByIndex = function(t) {
                            return this.data.keys[t]
                        }
                        ,
                        i.prototype.getDataByKey = function(t) {
                            return this.data[t]
                        }
                    }
                    , {}],
                    55: [function(t, e) {
                        function i() {}
                        e.exports = i,
                        i.defaults = function(t, e) {
                            for (var i in t = t || {},
                            e)
                                i in t || (t[i] = e[i]);
                            return t
                        }
                    }
                    , {}],
                    56: [function(t, e) {
                        e.exports = n;
                        var i = t("../math/Vec3")
                          , o = t("./Pool");
                        function n() {
                            o.call(this),
                            this.type = i
                        }
                        n.prototype = new o,
                        n.prototype.constructObject = function() {
                            return new i
                        }
                    }
                    , {
                        "../math/Vec3": 32,
                        "./Pool": 53
                    }],
                    57: [function(t, e) {
                        e.exports = u;
                        var i = t("../collision/AABB")
                          , o = t("../objects/Body")
                          , n = t("../shapes/Shape")
                          , r = t("../collision/Ray")
                          , s = t("../math/Vec3")
                          , a = t("../math/Transform")
                          , l = (t("../shapes/ConvexPolyhedron"),
                        t("../math/Quaternion"))
                          , h = (t("../solver/Solver"),
                        t("../utils/Vec3Pool"))
                          , c = t("../equations/ContactEquation")
                          , p = t("../equations/FrictionEquation");
                        function u(t) {
                            this.contactPointPool = [],
                            this.frictionEquationPool = [],
                            this.result = [],
                            this.frictionResult = [],
                            this.v3pool = new h,
                            this.world = t,
                            this.currentContactMaterial = null,
                            this.enableFrictionReduction = !1
                        }
                        u.prototype.createContactEquation = function(t, e, i, o, n, r) {
                            var s;
                            this.contactPointPool.length ? ((s = this.contactPointPool.pop()).bi = t,
                            s.bj = e) : s = new c(t,e),
                            s.enabled = t.collisionResponse && e.collisionResponse && i.collisionResponse && o.collisionResponse;
                            var a = this.currentContactMaterial;
                            s.restitution = a.restitution,
                            s.setSpookParams(a.contactEquationStiffness, a.contactEquationRelaxation, this.world.dt);
                            var l = i.material || t.material
                              , h = o.material || e.material;
                            return l && h && l.restitution >= 0 && h.restitution >= 0 && (s.restitution = l.restitution * h.restitution),
                            s.si = n || i,
                            s.sj = r || o,
                            s
                        }
                        ,
                        u.prototype.createFrictionEquationsFromContact = function(t, e) {
                            var i = t.bi
                              , o = t.bj
                              , n = t.si
                              , r = t.sj
                              , s = this.world
                              , a = this.currentContactMaterial
                              , l = a.friction
                              , h = n.material || i.material
                              , c = r.material || o.material;
                            if (h && c && h.friction >= 0 && c.friction >= 0 && (l = h.friction * c.friction),
                            l > 0) {
                                var u = l * s.gravity.length()
                                  , d = i.invMass + o.invMass;
                                d > 0 && (d = 1 / d);
                                var y = this.frictionEquationPool
                                  , f = y.length ? y.pop() : new p(i,o,u * d)
                                  , v = y.length ? y.pop() : new p(i,o,u * d);
                                return f.bi = v.bi = i,
                                f.bj = v.bj = o,
                                f.minForce = v.minForce = -u * d,
                                f.maxForce = v.maxForce = u * d,
                                f.ri.copy(t.ri),
                                f.rj.copy(t.rj),
                                v.ri.copy(t.ri),
                                v.rj.copy(t.rj),
                                t.ni.tangents(f.t, v.t),
                                f.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, s.dt),
                                v.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, s.dt),
                                f.enabled = v.enabled = t.enabled,
                                e.push(f, v),
                                !0
                            }
                            return !1
                        }
                        ;
                        var d = new s
                          , y = new s
                          , f = new s;
                        u.prototype.createFrictionFromAverage = function(t) {
                            var e = this.result[this.result.length - 1];
                            if (this.createFrictionEquationsFromContact(e, this.frictionResult) && 1 !== t) {
                                var i = this.frictionResult[this.frictionResult.length - 2]
                                  , o = this.frictionResult[this.frictionResult.length - 1];
                                d.setZero(),
                                y.setZero(),
                                f.setZero();
                                for (var n = e.bi, r = (e.bj,
                                0); r !== t; r++)
                                    (e = this.result[this.result.length - 1 - r]).bodyA !== n ? (d.vadd(e.ni, d),
                                    y.vadd(e.ri, y),
                                    f.vadd(e.rj, f)) : (d.vsub(e.ni, d),
                                    y.vadd(e.rj, y),
                                    f.vadd(e.ri, f));
                                var s = 1 / t;
                                y.scale(s, i.ri),
                                f.scale(s, i.rj),
                                o.ri.copy(i.ri),
                                o.rj.copy(i.rj),
                                d.normalize(),
                                d.tangents(i.t, o.t)
                            }
                        }
                        ;
                        var v = new s
                          , m = new s
                          , g = new l
                          , b = new l;
                        u.prototype.getContacts = function(t, e, i, n, r, s, a) {
                            this.contactPointPool = r,
                            this.frictionEquationPool = a,
                            this.result = n,
                            this.frictionResult = s;
                            for (var l = g, h = b, c = v, p = m, u = 0, d = t.length; u !== d; u++) {
                                var y = t[u]
                                  , f = e[u]
                                  , w = null;
                                y.material && f.material && (w = i.getContactMaterial(y.material, f.material) || null);
                                for (var x = 0 == y.collisionResponse || 0 == f.collisionResponse || y.type & o.KINEMATIC && f.type & o.STATIC || y.type & o.STATIC && f.type & o.KINEMATIC || y.type & o.KINEMATIC && f.type & o.KINEMATIC, _ = 0; _ < y.shapes.length; _++) {
                                    y.quaternion.mult(y.shapeOrientations[_], l),
                                    y.quaternion.vmult(y.shapeOffsets[_], c),
                                    c.vadd(y.position, c);
                                    for (var B = y.shapes[_], S = 0; S < f.shapes.length; S++) {
                                        f.quaternion.mult(f.shapeOrientations[S], h),
                                        f.quaternion.vmult(f.shapeOffsets[S], p),
                                        p.vadd(f.position, p);
                                        var E = f.shapes[S];
                                        if (B.collisionFilterMask & E.collisionFilterGroup && E.collisionFilterMask & B.collisionFilterGroup && !(c.distanceTo(p) > B.boundingSphereRadius + E.boundingSphereRadius)) {
                                            x |= 0 == B.collisionResponse || 0 == E.collisionResponse;
                                            var M = null;
                                            B.material && E.material && (M = i.getContactMaterial(B.material, E.material) || null),
                                            this.currentContactMaterial = M || w || i.defaultContactMaterial;
                                            var C = this[B.type | E.type];
                                            if (C && (B.type < E.type ? C.call(this, B, E, c, p, l, h, y, f, B, E, x) : C.call(this, E, B, p, c, h, l, f, y, B, E, x)) && x) {
                                                i.shapeOverlapKeeper.set(B.id, E.id),
                                                i.bodyOverlapKeeper.set(y.id, f.id);
                                                var A = {
                                                    si: B,
                                                    sj: E
                                                };
                                                i.triggerDic.set(B.id, E.id, A),
                                                i.oldTriggerDic.set(B.id, E.id, A)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        ,
                        u.prototype[n.types.BOX | n.types.BOX] = u.prototype.boxBox = function(t, e, i, o, n, r, s, a, l, h, c) {
                            return t.convexPolyhedronRepresentation.material = t.material,
                            e.convexPolyhedronRepresentation.material = e.material,
                            t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse,
                            e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse,
                            this.convexConvex(t.convexPolyhedronRepresentation, e.convexPolyhedronRepresentation, i, o, n, r, s, a, t, e, c)
                        }
                        ,
                        u.prototype[n.types.BOX | n.types.CONVEXPOLYHEDRON] = u.prototype.boxConvex = function(t, e, i, o, n, r, s, a, l, h, c) {
                            return t.convexPolyhedronRepresentation.material = t.material,
                            t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse,
                            this.convexConvex(t.convexPolyhedronRepresentation, e, i, o, n, r, s, a, t, e, c)
                        }
                        ,
                        u.prototype[n.types.BOX | n.types.PARTICLE] = u.prototype.boxParticle = function(t, e, i, o, n, r, s, a, l, h, c) {
                            return t.convexPolyhedronRepresentation.material = t.material,
                            t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse,
                            this.convexParticle(t.convexPolyhedronRepresentation, e, i, o, n, r, s, a, t, e, c)
                        }
                        ,
                        u.prototype[n.types.SPHERE] = u.prototype.sphereSphere = function(t, e, i, o, n, r, s, a, l, h, c) {
                            if (c)
                                return i.distanceSquared(o) < Math.pow(t.radius + e.radius, 2);
                            var p = this.createContactEquation(s, a, t, e, l, h);
                            o.vsub(i, p.ni),
                            p.ni.normalize(),
                            p.ri.copy(p.ni),
                            p.rj.copy(p.ni),
                            p.ri.mult(t.radius, p.ri),
                            p.rj.mult(-e.radius, p.rj),
                            p.ri.vadd(i, p.ri),
                            p.ri.vsub(s.position, p.ri),
                            p.rj.vadd(o, p.rj),
                            p.rj.vsub(a.position, p.rj),
                            this.result.push(p),
                            this.createFrictionEquationsFromContact(p, this.frictionResult)
                        }
                        ;
                        var w = new s
                          , x = new s
                          , _ = new s;
                        u.prototype[n.types.PLANE | n.types.TRIMESH] = u.prototype.planeTrimesh = function(t, e, i, o, n, r, l, h, c, p, u) {
                            var d = new s
                              , y = w;
                            y.set(0, 0, 1),
                            n.vmult(y, y);
                            for (var f = 0; f < e.vertices.length / 3; f++) {
                                e.getVertex(f, d);
                                var v = new s;
                                v.copy(d),
                                a.pointToWorldFrame(o, r, v, d);
                                var m = x;
                                if (d.vsub(i, m),
                                y.dot(m) <= 0) {
                                    if (u)
                                        return !0;
                                    var g = this.createContactEquation(l, h, t, e, c, p);
                                    g.ni.copy(y);
                                    var b = _;
                                    y.scale(m.dot(y), b),
                                    d.vsub(b, b),
                                    g.ri.copy(b),
                                    g.ri.vsub(l.position, g.ri),
                                    g.rj.copy(d),
                                    g.rj.vsub(h.position, g.rj),
                                    this.result.push(g),
                                    this.createFrictionEquationsFromContact(g, this.frictionResult)
                                }
                            }
                        }
                        ;
                        var B = new s
                          , S = new s
                          , E = (new s,
                        new s)
                          , M = new s
                          , C = new s
                          , A = new s
                          , z = new s
                          , F = new s
                          , R = new s
                          , T = new s
                          , P = new s
                          , q = new s
                          , O = new s
                          , I = new i
                          , V = [];
                        u.prototype[n.types.SPHERE | n.types.TRIMESH] = u.prototype.sphereTrimesh = function(t, e, i, o, n, s, l, h, c, p, u) {
                            var d = C
                              , y = A
                              , f = z
                              , v = F
                              , m = R
                              , g = T
                              , b = I
                              , w = M
                              , x = S
                              , _ = V;
                            a.pointToLocalFrame(o, s, i, m);
                            var j = t.radius;
                            b.lowerBound.set(m.x - j, m.y - j, m.z - j),
                            b.upperBound.set(m.x + j, m.y + j, m.z + j),
                            e.getTrianglesInAABB(b, _);
                            for (var k = E, N = t.radius * t.radius, L = 0; L < _.length; L++)
                                for (var W = 0; W < 3; W++)
                                    if (e.getVertex(e.indices[3 * _[L] + W], k),
                                    k.vsub(m, x),
                                    x.norm2() <= N) {
                                        if (w.copy(k),
                                        a.pointToWorldFrame(o, s, w, k),
                                        k.vsub(i, x),
                                        u)
                                            return !0;
                                        (G = this.createContactEquation(l, h, t, e, c, p)).ni.copy(x),
                                        G.ni.normalize(),
                                        G.ri.copy(G.ni),
                                        G.ri.scale(t.radius, G.ri),
                                        G.ri.vadd(i, G.ri),
                                        G.ri.vsub(l.position, G.ri),
                                        G.rj.copy(k),
                                        G.rj.vsub(h.position, G.rj),
                                        this.result.push(G),
                                        this.createFrictionEquationsFromContact(G, this.frictionResult)
                                    }
                            for (L = 0; L < _.length; L++)
                                for (W = 0; W < 3; W++) {
                                    e.getVertex(e.indices[3 * _[L] + W], d),
                                    e.getVertex(e.indices[3 * _[L] + (W + 1) % 3], y),
                                    y.vsub(d, f),
                                    m.vsub(y, g);
                                    var D = g.dot(f);
                                    m.vsub(d, g);
                                    var U = g.dot(f);
                                    if (U > 0 && D < 0 && (m.vsub(d, g),
                                    v.copy(f),
                                    v.normalize(),
                                    U = g.dot(v),
                                    v.scale(U, g),
                                    g.vadd(d, g),
                                    (Z = g.distanceTo(m)) < t.radius)) {
                                        if (u)
                                            return !0;
                                        var G = this.createContactEquation(l, h, t, e, c, p);
                                        g.vsub(m, G.ni),
                                        G.ni.normalize(),
                                        G.ni.scale(t.radius, G.ri),
                                        a.pointToWorldFrame(o, s, g, g),
                                        g.vsub(h.position, G.rj),
                                        a.vectorToWorldFrame(s, G.ni, G.ni),
                                        a.vectorToWorldFrame(s, G.ri, G.ri),
                                        this.result.push(G),
                                        this.createFrictionEquationsFromContact(G, this.frictionResult)
                                    }
                                }
                            for (var H = P, K = q, Q = O, X = B, Y = (L = 0,
                            _.length); L !== Y; L++) {
                                e.getTriangleVertices(_[L], H, K, Q),
                                e.getNormal(_[L], X),
                                m.vsub(H, g);
                                var Z = g.dot(X);
                                if (X.scale(Z, g),
                                m.vsub(g, g),
                                Z = g.distanceTo(m),
                                r.pointInTriangle(g, H, K, Q) && Z < t.radius) {
                                    if (u)
                                        return !0;
                                    G = this.createContactEquation(l, h, t, e, c, p),
                                    g.vsub(m, G.ni),
                                    G.ni.normalize(),
                                    G.ni.scale(t.radius, G.ri),
                                    a.pointToWorldFrame(o, s, g, g),
                                    g.vsub(h.position, G.rj),
                                    a.vectorToWorldFrame(s, G.ni, G.ni),
                                    a.vectorToWorldFrame(s, G.ri, G.ri),
                                    this.result.push(G),
                                    this.createFrictionEquationsFromContact(G, this.frictionResult)
                                }
                            }
                            _.length = 0
                        }
                        ;
                        var j = new s
                          , k = new s
                          , N = new s
                          , L = new s
                          , W = new s;
                        u.prototype[n.types.SPHERE | n.types.PLANE] = u.prototype.spherePlane = function(t, e, i, o, n, r, s, a, l, h, c) {
                            if (N.set(0, 0, 1),
                            r.vmult(N, N),
                            N.negate(N),
                            N.normalize(),
                            N.mult(t.radius, L),
                            i.vsub(o, j),
                            N.mult(N.dot(j), k),
                            j.vsub(k, W),
                            -j.dot(N) <= t.radius) {
                                if (c)
                                    return !0;
                                var p = this.createContactEquation(s, a, t, e, l, h);
                                p.ni.copy(N),
                                p.ri.copy(L),
                                p.rj.copy(W);
                                var u = p.ri
                                  , d = p.rj;
                                u.vadd(i, u),
                                u.vsub(s.position, u),
                                d.vadd(o, d),
                                d.vsub(a.position, d),
                                this.result.push(p),
                                this.createFrictionEquationsFromContact(p, this.frictionResult)
                            }
                            return !1
                        }
                        ;
                        var D = new s
                          , U = new s
                          , G = new s;
                        function H(t, e, i) {
                            for (var o = null, n = t.length, r = 0; r !== n; r++) {
                                var s = t[r]
                                  , a = D;
                                t[(r + 1) % n].vsub(s, a);
                                var l = U;
                                a.cross(e, l);
                                var h = G;
                                i.vsub(s, h);
                                var c = l.dot(h);
                                if (!(null === o || c > 0 && !0 === o || c <= 0 && !1 === o))
                                    return !1;
                                null === o && (o = c > 0)
                            }
                            return !0
                        }
                        var K = new s
                          , Q = new s
                          , X = new s
                          , Y = new s
                          , Z = [new s, new s, new s, new s, new s, new s]
                          , J = new s
                          , $ = new s
                          , tt = new s
                          , et = new s;
                        u.prototype[n.types.SPHERE | n.types.BOX] = u.prototype.sphereBox = function(t, e, i, o, n, r, s, a, l, h, c) {
                            var p = this.v3pool
                              , u = Z;
                            i.vsub(o, K),
                            e.getSideNormals(u, r);
                            for (var d = t.radius, y = !1, f = $, v = tt, m = et, g = null, b = 0, w = 0, x = 0, _ = null, B = 0, S = u.length; B !== S && !1 === y; B++) {
                                var E = Q;
                                E.copy(u[B]);
                                var M = E.norm();
                                E.normalize();
                                var C = K.dot(E);
                                if (C < M + d && C > 0) {
                                    var A = X
                                      , z = Y;
                                    A.copy(u[(B + 1) % 3]),
                                    z.copy(u[(B + 2) % 3]);
                                    var F = A.norm()
                                      , R = z.norm();
                                    A.normalize(),
                                    z.normalize();
                                    var T = K.dot(A)
                                      , P = K.dot(z);
                                    if (T < F && T > -F && P < R && P > -R) {
                                        var q = Math.abs(C - M - d);
                                        if ((null === _ || q < _) && (_ = q,
                                        w = T,
                                        x = P,
                                        g = M,
                                        f.copy(E),
                                        v.copy(A),
                                        m.copy(z),
                                        b++,
                                        c))
                                            return !0
                                    }
                                }
                            }
                            if (b) {
                                y = !0;
                                var O = this.createContactEquation(s, a, t, e, l, h);
                                f.mult(-d, O.ri),
                                O.ni.copy(f),
                                O.ni.negate(O.ni),
                                f.mult(g, f),
                                v.mult(w, v),
                                f.vadd(v, f),
                                m.mult(x, m),
                                f.vadd(m, O.rj),
                                O.ri.vadd(i, O.ri),
                                O.ri.vsub(s.position, O.ri),
                                O.rj.vadd(o, O.rj),
                                O.rj.vsub(a.position, O.rj),
                                this.result.push(O),
                                this.createFrictionEquationsFromContact(O, this.frictionResult)
                            }
                            for (var I = p.get(), V = J, j = 0; 2 !== j && !y; j++)
                                for (var k = 0; 2 !== k && !y; k++)
                                    for (var N = 0; 2 !== N && !y; N++)
                                        if (I.set(0, 0, 0),
                                        j ? I.vadd(u[0], I) : I.vsub(u[0], I),
                                        k ? I.vadd(u[1], I) : I.vsub(u[1], I),
                                        N ? I.vadd(u[2], I) : I.vsub(u[2], I),
                                        o.vadd(I, V),
                                        V.vsub(i, V),
                                        V.norm2() < d * d) {
                                            if (c)
                                                return !0;
                                            y = !0,
                                            (O = this.createContactEquation(s, a, t, e, l, h)).ri.copy(V),
                                            O.ri.normalize(),
                                            O.ni.copy(O.ri),
                                            O.ri.mult(d, O.ri),
                                            O.rj.copy(I),
                                            O.ri.vadd(i, O.ri),
                                            O.ri.vsub(s.position, O.ri),
                                            O.rj.vadd(o, O.rj),
                                            O.rj.vsub(a.position, O.rj),
                                            this.result.push(O),
                                            this.createFrictionEquationsFromContact(O, this.frictionResult)
                                        }
                            p.release(I),
                            I = null;
                            var L = p.get()
                              , W = p.get()
                              , D = (O = p.get(),
                            p.get())
                              , U = (q = p.get(),
                            u.length);
                            for (j = 0; j !== U && !y; j++)
                                for (k = 0; k !== U && !y; k++)
                                    if (j % 3 != k % 3) {
                                        u[k].cross(u[j], L),
                                        L.normalize(),
                                        u[j].vadd(u[k], W),
                                        O.copy(i),
                                        O.vsub(W, O),
                                        O.vsub(o, O);
                                        var G = O.dot(L);
                                        for (L.mult(G, D),
                                        N = 0; N === j % 3 || N === k % 3; )
                                            N++;
                                        q.copy(i),
                                        q.vsub(D, q),
                                        q.vsub(W, q),
                                        q.vsub(o, q);
                                        var H = Math.abs(G)
                                          , it = q.norm();
                                        if (H < u[N].norm() && it < d) {
                                            if (c)
                                                return !0;
                                            y = !0;
                                            var ot = this.createContactEquation(s, a, t, e, l, h);
                                            W.vadd(D, ot.rj),
                                            ot.rj.copy(ot.rj),
                                            q.negate(ot.ni),
                                            ot.ni.normalize(),
                                            ot.ri.copy(ot.rj),
                                            ot.ri.vadd(o, ot.ri),
                                            ot.ri.vsub(i, ot.ri),
                                            ot.ri.normalize(),
                                            ot.ri.mult(d, ot.ri),
                                            ot.ri.vadd(i, ot.ri),
                                            ot.ri.vsub(s.position, ot.ri),
                                            ot.rj.vadd(o, ot.rj),
                                            ot.rj.vsub(a.position, ot.rj),
                                            this.result.push(ot),
                                            this.createFrictionEquationsFromContact(ot, this.frictionResult)
                                        }
                                    }
                            p.release(L, W, O, D, q)
                        }
                        ;
                        var it = new s
                          , ot = new s
                          , nt = new s
                          , rt = new s
                          , st = new s
                          , at = new s
                          , lt = new s
                          , ht = new s
                          , ct = new s
                          , pt = new s;
                        u.prototype[n.types.SPHERE | n.types.CONVEXPOLYHEDRON] = u.prototype.sphereConvex = function(t, e, i, o, n, r, s, a, l, h, c) {
                            var p = this.v3pool;
                            i.vsub(o, it);
                            for (var u = e.faceNormals, d = e.faces, y = e.vertices, f = t.radius, v = 0; v !== y.length; v++) {
                                var m = y[v]
                                  , g = st;
                                r.vmult(m, g),
                                o.vadd(g, g);
                                var b = rt;
                                if (g.vsub(i, b),
                                b.norm2() < f * f)
                                    return !!c || (w = !0,
                                    (q = this.createContactEquation(s, a, t, e, l, h)).ri.copy(b),
                                    q.ri.normalize(),
                                    q.ni.copy(q.ri),
                                    q.ri.mult(f, q.ri),
                                    g.vsub(o, q.rj),
                                    q.ri.vadd(i, q.ri),
                                    q.ri.vsub(s.position, q.ri),
                                    q.rj.vadd(o, q.rj),
                                    q.rj.vsub(a.position, q.rj),
                                    this.result.push(q),
                                    void this.createFrictionEquationsFromContact(q, this.frictionResult))
                            }
                            for (var w = !1, x = (v = 0,
                            d.length); v !== x && !1 === w; v++) {
                                var _ = u[v]
                                  , B = d[v]
                                  , S = at;
                                r.vmult(_, S);
                                var E = lt;
                                r.vmult(y[B[0]], E),
                                E.vadd(o, E);
                                var M = ht;
                                S.mult(-f, M),
                                i.vadd(M, M);
                                var C = ct;
                                M.vsub(E, C);
                                var A = C.dot(S)
                                  , z = pt;
                                if (i.vsub(E, z),
                                A < 0 && z.dot(S) > 0) {
                                    for (var F = [], R = 0, T = B.length; R !== T; R++) {
                                        var P = p.get();
                                        r.vmult(y[B[R]], P),
                                        o.vadd(P, P),
                                        F.push(P)
                                    }
                                    if (H(F, S, i)) {
                                        if (c)
                                            return !0;
                                        w = !0;
                                        var q = this.createContactEquation(s, a, t, e, l, h);
                                        S.mult(-f, q.ri),
                                        S.negate(q.ni);
                                        var O = p.get();
                                        S.mult(-A, O);
                                        var I = p.get();
                                        S.mult(-f, I),
                                        i.vsub(o, q.rj),
                                        q.rj.vadd(I, q.rj),
                                        q.rj.vadd(O, q.rj),
                                        q.rj.vadd(o, q.rj),
                                        q.rj.vsub(a.position, q.rj),
                                        q.ri.vadd(i, q.ri),
                                        q.ri.vsub(s.position, q.ri),
                                        p.release(O),
                                        p.release(I),
                                        this.result.push(q),
                                        this.createFrictionEquationsFromContact(q, this.frictionResult),
                                        R = 0;
                                        for (var V = F.length; R !== V; R++)
                                            p.release(F[R]);
                                        return
                                    }
                                    for (R = 0; R !== B.length; R++) {
                                        var j = p.get()
                                          , k = p.get();
                                        r.vmult(y[B[(R + 1) % B.length]], j),
                                        r.vmult(y[B[(R + 2) % B.length]], k),
                                        o.vadd(j, j),
                                        o.vadd(k, k);
                                        var N = ot;
                                        k.vsub(j, N);
                                        var L = nt;
                                        N.unit(L);
                                        var W = p.get()
                                          , D = p.get();
                                        i.vsub(j, D);
                                        var U = D.dot(L);
                                        L.mult(U, W),
                                        W.vadd(j, W);
                                        var G = p.get();
                                        if (W.vsub(i, G),
                                        U > 0 && U * U < N.norm2() && G.norm2() < f * f) {
                                            if (c)
                                                return !0;
                                            for (q = this.createContactEquation(s, a, t, e, l, h),
                                            W.vsub(o, q.rj),
                                            W.vsub(i, q.ni),
                                            q.ni.normalize(),
                                            q.ni.mult(f, q.ri),
                                            q.rj.vadd(o, q.rj),
                                            q.rj.vsub(a.position, q.rj),
                                            q.ri.vadd(i, q.ri),
                                            q.ri.vsub(s.position, q.ri),
                                            this.result.push(q),
                                            this.createFrictionEquationsFromContact(q, this.frictionResult),
                                            R = 0,
                                            V = F.length; R !== V; R++)
                                                p.release(F[R]);
                                            return p.release(j),
                                            p.release(k),
                                            p.release(W),
                                            p.release(G),
                                            void p.release(D)
                                        }
                                        p.release(j),
                                        p.release(k),
                                        p.release(W),
                                        p.release(G),
                                        p.release(D)
                                    }
                                    for (R = 0,
                                    V = F.length; R !== V; R++)
                                        p.release(F[R])
                                }
                            }
                        }
                        ,
                        new s,
                        new s,
                        u.prototype[n.types.PLANE | n.types.BOX] = u.prototype.planeBox = function(t, e, i, o, n, r, s, a, l, h, c) {
                            return e.convexPolyhedronRepresentation.material = e.material,
                            e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse,
                            e.convexPolyhedronRepresentation.id = e.id,
                            this.planeConvex(t, e.convexPolyhedronRepresentation, i, o, n, r, s, a, t, e, c)
                        }
                        ;
                        var ut = new s
                          , dt = new s
                          , yt = new s
                          , ft = new s;
                        u.prototype[n.types.PLANE | n.types.CONVEXPOLYHEDRON] = u.prototype.planeConvex = function(t, e, i, o, n, r, s, a, l, h, c) {
                            var p = ut
                              , u = dt;
                            u.set(0, 0, 1),
                            n.vmult(u, u);
                            for (var d = 0, y = yt, f = 0; f !== e.vertices.length; f++)
                                if (p.copy(e.vertices[f]),
                                r.vmult(p, p),
                                o.vadd(p, p),
                                p.vsub(i, y),
                                u.dot(y) <= 0) {
                                    if (c)
                                        return !0;
                                    var v = this.createContactEquation(s, a, t, e, l, h)
                                      , m = ft;
                                    u.mult(u.dot(y), m),
                                    p.vsub(m, m),
                                    m.vsub(i, v.ri),
                                    v.ni.copy(u),
                                    p.vsub(o, v.rj),
                                    v.ri.vadd(i, v.ri),
                                    v.ri.vsub(s.position, v.ri),
                                    v.rj.vadd(o, v.rj),
                                    v.rj.vsub(a.position, v.rj),
                                    this.result.push(v),
                                    d++,
                                    this.enableFrictionReduction || this.createFrictionEquationsFromContact(v, this.frictionResult)
                                }
                            this.enableFrictionReduction && d && this.createFrictionFromAverage(d)
                        }
                        ;
                        var vt = new s
                          , mt = new s;
                        u.prototype[n.types.CONVEXPOLYHEDRON] = u.prototype.convexConvex = function(t, e, i, o, n, r, s, a, l, h, c, p, u) {
                            var d = vt;
                            if (!(i.distanceTo(o) > t.boundingSphereRadius + e.boundingSphereRadius) && t.findSeparatingAxis(e, i, n, o, r, d, p, u)) {
                                var y = []
                                  , f = mt;
                                t.clipAgainstHull(i, n, e, o, r, d, -100, 100, y);
                                for (var v = 0, m = 0; m !== y.length; m++) {
                                    if (c)
                                        return !0;
                                    var g = this.createContactEquation(s, a, t, e, l, h)
                                      , b = g.ri
                                      , w = g.rj;
                                    d.negate(g.ni),
                                    y[m].normal.negate(f),
                                    f.mult(y[m].depth, f),
                                    y[m].point.vadd(f, b),
                                    w.copy(y[m].point),
                                    b.vsub(i, b),
                                    w.vsub(o, w),
                                    b.vadd(i, b),
                                    b.vsub(s.position, b),
                                    w.vadd(o, w),
                                    w.vsub(a.position, w),
                                    this.result.push(g),
                                    v++,
                                    this.enableFrictionReduction || this.createFrictionEquationsFromContact(g, this.frictionResult)
                                }
                                this.enableFrictionReduction && v && this.createFrictionFromAverage(v)
                            }
                        }
                        ;
                        var gt = new s
                          , bt = new s
                          , wt = new s;
                        u.prototype[n.types.PLANE | n.types.PARTICLE] = u.prototype.planeParticle = function(t, e, i, o, n, r, s, a, l, h, c) {
                            var p = gt;
                            p.set(0, 0, 1),
                            s.quaternion.vmult(p, p);
                            var u = bt;
                            if (o.vsub(s.position, u),
                            p.dot(u) <= 0) {
                                if (c)
                                    return !0;
                                var d = this.createContactEquation(a, s, e, t, l, h);
                                d.ni.copy(p),
                                d.ni.negate(d.ni),
                                d.ri.set(0, 0, 0);
                                var y = wt;
                                p.mult(p.dot(o), y),
                                o.vsub(y, y),
                                d.rj.copy(y),
                                this.result.push(d),
                                this.createFrictionEquationsFromContact(d, this.frictionResult)
                            }
                        }
                        ;
                        var xt = new s;
                        u.prototype[n.types.PARTICLE | n.types.SPHERE] = u.prototype.sphereParticle = function(t, e, i, o, n, r, s, a, l, h, c) {
                            var p = xt;
                            if (p.set(0, 0, 1),
                            o.vsub(i, p),
                            p.norm2() <= t.radius * t.radius) {
                                if (c)
                                    return !0;
                                var u = this.createContactEquation(a, s, e, t, l, h);
                                p.normalize(),
                                u.rj.copy(p),
                                u.rj.mult(t.radius, u.rj),
                                u.ni.copy(p),
                                u.ni.negate(u.ni),
                                u.ri.set(0, 0, 0),
                                this.result.push(u),
                                this.createFrictionEquationsFromContact(u, this.frictionResult)
                            }
                        }
                        ;
                        var _t = new l
                          , Bt = new s
                          , St = (new s,
                        new s)
                          , Et = new s
                          , Mt = new s;
                        u.prototype[n.types.PARTICLE | n.types.CONVEXPOLYHEDRON] = u.prototype.convexParticle = function(t, e, i, o, n, r, s, a, l, h, c) {
                            var p = -1
                              , u = St
                              , d = Mt
                              , y = null
                              , f = Bt;
                            if (f.copy(o),
                            f.vsub(i, f),
                            n.conjugate(_t),
                            _t.vmult(f, f),
                            t.pointIsInside(f)) {
                                t.worldVerticesNeedsUpdate && t.computeWorldVertices(i, n),
                                t.worldFaceNormalsNeedsUpdate && t.computeWorldFaceNormals(n);
                                for (var v = 0, m = t.faces.length; v !== m; v++) {
                                    var g = [t.worldVertices[t.faces[v][0]]]
                                      , b = t.worldFaceNormals[v];
                                    o.vsub(g[0], Et);
                                    var w = -b.dot(Et);
                                    if (null === y || Math.abs(w) < Math.abs(y)) {
                                        if (c)
                                            return !0;
                                        y = w,
                                        p = v,
                                        u.copy(b)
                                    }
                                }
                                if (-1 !== p) {
                                    var x = this.createContactEquation(a, s, e, t, l, h);
                                    u.mult(y, d),
                                    d.vadd(o, d),
                                    d.vsub(i, d),
                                    x.rj.copy(d),
                                    u.negate(x.ni),
                                    x.ri.set(0, 0, 0);
                                    var _ = x.ri
                                      , B = x.rj;
                                    _.vadd(o, _),
                                    _.vsub(a.position, _),
                                    B.vadd(i, B),
                                    B.vsub(s.position, B),
                                    this.result.push(x),
                                    this.createFrictionEquationsFromContact(x, this.frictionResult)
                                } else
                                    console.warn("Point found inside convex, but did not find penetrating face!")
                            }
                        }
                        ,
                        u.prototype[n.types.BOX | n.types.HEIGHTFIELD] = u.prototype.boxHeightfield = function(t, e, i, o, n, r, s, a, l, h, c) {
                            return t.convexPolyhedronRepresentation.material = t.material,
                            t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse,
                            this.convexHeightfield(t.convexPolyhedronRepresentation, e, i, o, n, r, s, a, t, e, c)
                        }
                        ;
                        var Ct = new s
                          , At = new s
                          , zt = [0];
                        u.prototype[n.types.CONVEXPOLYHEDRON | n.types.HEIGHTFIELD] = u.prototype.convexHeightfield = function(t, e, i, o, n, r, s, l, h, c, p) {
                            var u = e.data
                              , d = e.elementSize
                              , y = t.boundingSphereRadius
                              , f = At
                              , v = zt
                              , m = Ct;
                            a.pointToLocalFrame(o, r, i, m);
                            var g = Math.floor((m.x - y) / d) - 1
                              , b = Math.ceil((m.x + y) / d) + 1
                              , w = Math.floor((m.y - y) / d) - 1
                              , x = Math.ceil((m.y + y) / d) + 1;
                            if (!(b < 0 || x < 0 || g > u.length || w > u[0].length)) {
                                g < 0 && (g = 0),
                                b < 0 && (b = 0),
                                w < 0 && (w = 0),
                                x < 0 && (x = 0),
                                g >= u.length && (g = u.length - 1),
                                b >= u.length && (b = u.length - 1),
                                x >= u[0].length && (x = u[0].length - 1),
                                w >= u[0].length && (w = u[0].length - 1);
                                var _ = [];
                                e.getRectMinMax(g, w, b, x, _);
                                var B = _[0]
                                  , S = _[1];
                                if (!(m.z - y > S || m.z + y < B))
                                    for (var E = g; E < b; E++)
                                        for (var M = w; M < x; M++) {
                                            var C = !1;
                                            if (e.getConvexTrianglePillar(E, M, !1),
                                            a.pointToWorldFrame(o, r, e.pillarOffset, f),
                                            i.distanceTo(f) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (C = this.convexConvex(t, e.pillarConvex, i, f, n, r, s, l, h, c, p, v, null)),
                                            p && C)
                                                return !0;
                                            if (e.getConvexTrianglePillar(E, M, !0),
                                            a.pointToWorldFrame(o, r, e.pillarOffset, f),
                                            i.distanceTo(f) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (C = this.convexConvex(t, e.pillarConvex, i, f, n, r, s, l, h, c, p, v, null)),
                                            p && C)
                                                return !0
                                        }
                            }
                        }
                        ;
                        var Ft = new s
                          , Rt = new s;
                        u.prototype[n.types.SPHERE | n.types.HEIGHTFIELD] = u.prototype.sphereHeightfield = function(t, e, i, o, n, r, s, l, h, c, p) {
                            var u = e.data
                              , d = t.radius
                              , y = e.elementSize
                              , f = Rt
                              , v = Ft;
                            a.pointToLocalFrame(o, r, i, v);
                            var m = Math.floor((v.x - d) / y) - 1
                              , g = Math.ceil((v.x + d) / y) + 1
                              , b = Math.floor((v.y - d) / y) - 1
                              , w = Math.ceil((v.y + d) / y) + 1;
                            if (!(g < 0 || w < 0 || m > u.length || b > u[0].length)) {
                                m < 0 && (m = 0),
                                g < 0 && (g = 0),
                                b < 0 && (b = 0),
                                w < 0 && (w = 0),
                                m >= u.length && (m = u.length - 1),
                                g >= u.length && (g = u.length - 1),
                                w >= u[0].length && (w = u[0].length - 1),
                                b >= u[0].length && (b = u[0].length - 1);
                                var x = [];
                                e.getRectMinMax(m, b, g, w, x);
                                var _ = x[0]
                                  , B = x[1];
                                if (!(v.z - d > B || v.z + d < _))
                                    for (var S = this.result, E = m; E < g; E++)
                                        for (var M = b; M < w; M++) {
                                            var C = S.length
                                              , A = !1;
                                            if (e.getConvexTrianglePillar(E, M, !1),
                                            a.pointToWorldFrame(o, r, e.pillarOffset, f),
                                            i.distanceTo(f) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (A = this.sphereConvex(t, e.pillarConvex, i, f, n, r, s, l, t, e, p)),
                                            p && A)
                                                return !0;
                                            if (e.getConvexTrianglePillar(E, M, !0),
                                            a.pointToWorldFrame(o, r, e.pillarOffset, f),
                                            i.distanceTo(f) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (A = this.sphereConvex(t, e.pillarConvex, i, f, n, r, s, l, t, e, p)),
                                            p && A)
                                                return !0;
                                            if (S.length - C > 2)
                                                return
                                        }
                            }
                        }
                    }
                    , {
                        "../collision/AABB": 3,
                        "../collision/Ray": 10,
                        "../equations/ContactEquation": 20,
                        "../equations/FrictionEquation": 22,
                        "../math/Quaternion": 30,
                        "../math/Transform": 31,
                        "../math/Vec3": 32,
                        "../objects/Body": 33,
                        "../shapes/ConvexPolyhedron": 40,
                        "../shapes/Shape": 45,
                        "../solver/Solver": 49,
                        "../utils/Vec3Pool": 56
                    }],
                    58: [function(t, e) {
                        e.exports = g,
                        t("../shapes/Shape");
                        var i = t("../math/Vec3")
                          , o = t("../math/Quaternion")
                          , n = t("../solver/GSSolver")
                          , r = (t("../equations/ContactEquation"),
                        t("../equations/FrictionEquation"),
                        t("./Narrowphase"))
                          , s = t("../utils/EventTarget")
                          , a = t("../collision/ArrayCollisionMatrix")
                          , l = t("../collision/ObjectCollisionMatrix")
                          , h = t("../collision/OverlapKeeper")
                          , c = t("../material/Material")
                          , p = t("../material/ContactMaterial")
                          , u = t("../objects/Body")
                          , d = t("../utils/TupleDictionary")
                          , y = t("../collision/RaycastResult")
                          , f = t("../collision/AABB")
                          , v = t("../collision/Ray")
                          , m = t("../collision/NaiveBroadphase");
                        function g(t) {
                            t = t || {},
                            s.apply(this),
                            this.dt = -1,
                            this.allowSleep = !!t.allowSleep,
                            this.contacts = [],
                            this.frictionEquations = [],
                            this.quatNormalizeSkip = void 0 !== t.quatNormalizeSkip ? t.quatNormalizeSkip : 0,
                            this.quatNormalizeFast = void 0 !== t.quatNormalizeFast && t.quatNormalizeFast,
                            this.time = 0,
                            this.timeFixed = 0,
                            this.stepnumber = 0,
                            this.default_dt = 1 / 60,
                            this.nextId = 0,
                            this.gravity = new i,
                            t.gravity && this.gravity.copy(t.gravity),
                            this.broadphase = void 0 !== t.broadphase ? t.broadphase : new m,
                            this.bodies = [],
                            this.solver = void 0 !== t.solver ? t.solver : new n,
                            this.constraints = [],
                            this.narrowphase = new r(this),
                            this.collisionMatrix = new a,
                            this.collisionMatrixPrevious = new a,
                            this.bodyOverlapKeeper = new h,
                            this.shapeOverlapKeeper = new h,
                            this.materials = [],
                            this.contactmaterials = [],
                            this.contactMaterialTable = new d,
                            this.defaultMaterial = new c("default"),
                            this.defaultContactMaterial = new p(this.defaultMaterial,this.defaultMaterial,{
                                friction: .3,
                                restitution: 0
                            }),
                            this.doProfiling = !1,
                            this.profile = {
                                solve: 0,
                                makeContactConstraints: 0,
                                broadphase: 0,
                                integrate: 0,
                                narrowphase: 0
                            },
                            this.accumulator = 0,
                            this.subsystems = [],
                            this.addBodyEvent = {
                                type: "addBody",
                                body: null
                            },
                            this.removeBodyEvent = {
                                type: "removeBody",
                                body: null
                            },
                            this.idToBodyMap = {},
                            this.broadphase.setWorld(this),
                            this.substeps = 0,
                            this.cm = new l,
                            this.tm = new l,
                            this.triggerDic = new d,
                            this.oldTriggerDic = new d,
                            this.contactsDic = new d,
                            this.oldContactsDic = new d
                        }
                        g.idToBodyMap = {},
                        g.idToShapeMap = {},
                        g.prototype = new s,
                        new f;
                        var b = new v;
                        if (g.prototype.getContactMaterial = function(t, e) {
                            return this.contactMaterialTable.get(t.id, e.id)
                        }
                        ,
                        g.prototype.numObjects = function() {
                            return this.bodies.length
                        }
                        ,
                        g.prototype.collisionMatrixTick = function() {
                            var t = this.collisionMatrixPrevious;
                            this.collisionMatrixPrevious = this.collisionMatrix,
                            this.collisionMatrix = t,
                            this.collisionMatrix.reset(),
                            this.bodyOverlapKeeper.tick(),
                            this.shapeOverlapKeeper.tick()
                        }
                        ,
                        g.prototype.add = g.prototype.addBody = function(t) {
                            g.SLEEPING = !1,
                            -1 === this.bodies.indexOf(t) && (t.index = this.bodies.length,
                            this.bodies.push(t),
                            t.world = this,
                            t.initPosition.copy(t.position),
                            t.initVelocity.copy(t.velocity),
                            t.timeLastSleepy = this.time,
                            t instanceof u && (t.initAngularVelocity.copy(t.angularVelocity),
                            t.initQuaternion.copy(t.quaternion)),
                            this.collisionMatrix.setNumObjects(this.bodies.length),
                            this.addBodyEvent.body = t,
                            this.cm.setNumObjects(this.bodies.length),
                            g.idToBodyMap[t.id] = t,
                            this.dispatchEvent(this.addBodyEvent))
                        }
                        ,
                        g.prototype.addConstraint = function(t) {
                            g.SLEEPING = !1,
                            this.constraints.push(t)
                        }
                        ,
                        g.prototype.removeConstraint = function(t) {
                            g.SLEEPING = !1;
                            var e = this.constraints.indexOf(t);
                            -1 !== e && this.constraints.splice(e, 1)
                        }
                        ,
                        g.prototype.rayTest = function(t, e, i) {
                            i instanceof y ? this.raycastClosest(t, e, {
                                skipBackfaces: !0
                            }, i) : this.raycastAll(t, e, {
                                skipBackfaces: !0
                            }, i)
                        }
                        ,
                        g.prototype.raycastAll = function(t, e, i, o) {
                            return i.mode = v.ALL,
                            i.from = t,
                            i.to = e,
                            i.callback = o,
                            b.intersectWorld(this, i)
                        }
                        ,
                        g.prototype.raycastAny = function(t, e, i, o) {
                            return i.mode = v.ANY,
                            i.from = t,
                            i.to = e,
                            i.result = o,
                            b.intersectWorld(this, i)
                        }
                        ,
                        g.prototype.raycastClosest = function(t, e, i, o) {
                            return i.mode = v.CLOSEST,
                            i.from = t,
                            i.to = e,
                            i.result = o,
                            b.intersectWorld(this, i)
                        }
                        ,
                        g.prototype.remove = function(t) {
                            g.SLEEPING = !1,
                            t.world = null;
                            var e = this.bodies.length - 1
                              , i = this.bodies
                              , o = i.indexOf(t);
                            if (-1 !== o) {
                                i.splice(o, 1);
                                for (var n = 0; n !== i.length; n++)
                                    i[n].index = n;
                                this.collisionMatrix.setNumObjects(e),
                                this.removeBodyEvent.body = t,
                                delete g.idToBodyMap[t.id],
                                this.cm.setNumObjects(e),
                                this.dispatchEvent(this.removeBodyEvent)
                            }
                        }
                        ,
                        g.prototype.removeBody = g.prototype.remove,
                        g.prototype.getBodyById = function(t) {
                            return g.idToBodyMap[t]
                        }
                        ,
                        g.prototype.getShapeById = function(t) {
                            return g.idToShapeMap[t]
                        }
                        ,
                        g.prototype.addMaterial = function(t) {
                            this.materials.push(t)
                        }
                        ,
                        g.prototype.addContactMaterial = function(t) {
                            this.contactmaterials.push(t),
                            this.contactMaterialTable.set(t.materials[0].id, t.materials[1].id, t)
                        }
                        ,
                        "undefined" == typeof performance && (performance = {}),
                        !performance.now) {
                            var w = Date.now();
                            performance.timing && performance.timing.navigationStart && (w = performance.timing.navigationStart),
                            performance.now = function() {
                                return Date.now() - w
                            }
                        }
                        new i,
                        g.prototype.step = function(t, e, i) {
                            if (i = i || 10,
                            0 === (e = e || 0))
                                this.internalStep(t),
                                this.time += t,
                                this.substeps = 1;
                            else {
                                for (this.accumulator += e,
                                this.substeps = 0; this.accumulator >= t && this.substeps < i; )
                                    this.internalStep(t),
                                    this.accumulator -= t,
                                    this.substeps++;
                                for (var o = this.accumulator % t / t, n = 0; n !== this.bodies.length; n++) {
                                    var r = this.bodies[n];
                                    r.previousPosition.lerp(r.position, o, r.interpolatedPosition),
                                    r.previousQuaternion.slerp(r.quaternion, o, r.interpolatedQuaternion),
                                    r.previousQuaternion.normalize()
                                }
                                this.time += e
                            }
                        }
                        ;
                        var x, _, B, S, E, M, C = {
                            type: "postStep"
                        }, A = {
                            type: "preStep"
                        }, z = {
                            type: "collide",
                            body: null,
                            contact: null
                        }, F = [], R = [], T = [], P = [];
                        new i,
                        new i,
                        new i,
                        new i,
                        new i,
                        new i,
                        new i,
                        new i,
                        new i,
                        new o,
                        new o,
                        new o,
                        new i,
                        g.prototype.internalStep = function(t) {
                            this.dt = t;
                            var e, i = this.contacts, o = T, n = P, r = this.numObjects(), s = this.bodies, a = this.solver, l = this.gravity, h = this.doProfiling, c = this.profile, p = u.DYNAMIC, d = this.constraints, y = R, f = (l.norm(),
                            l.x), v = l.y, m = l.z, b = 0;
                            for (h && (e = performance.now()),
                            b = 0; b !== r; b++)
                                if ((V = s[b]).useGravity && V.type === p) {
                                    var w = V.force
                                      , x = V.mass;
                                    w.x += x * f,
                                    w.y += x * v,
                                    w.z += x * m
                                }
                            b = 0;
                            for (var _ = this.subsystems.length; b !== _; b++)
                                this.subsystems[b].update();
                            h && (e = performance.now()),
                            o.length = 0,
                            n.length = 0,
                            this.broadphase.collisionPairs(this, o, n),
                            h && (c.broadphase = performance.now() - e);
                            var B = d.length;
                            for (b = 0; b !== B; b++)
                                if (!(L = d[b]).collideConnected)
                                    for (var S = o.length - 1; S >= 0; S -= 1)
                                        (L.bodyA === o[S] && L.bodyB === n[S] || L.bodyB === o[S] && L.bodyA === n[S]) && (o.splice(S, 1),
                                        n.splice(S, 1));
                            this.collisionMatrixTick(),
                            h && (e = performance.now());
                            var E = F
                              , M = i.length;
                            for (b = 0; b !== M; b++)
                                E.push(i[b]);
                            i.length = 0;
                            var q = this.frictionEquations.length;
                            for (b = 0; b !== q; b++)
                                y.push(this.frictionEquations[b]);
                            if (this.frictionEquations.length = 0,
                            this.narrowphase.getContacts(o, n, this, i, E, this.frictionEquations, y),
                            0 != i.length || !g.SLEEPING) {
                                for (h && (c.narrowphase = performance.now() - e),
                                h && (e = performance.now()),
                                b = 0; b < this.frictionEquations.length; b++)
                                    a.addEquation(this.frictionEquations[b]);
                                for (var O = i.length, I = 0; I !== O; I++) {
                                    var V = (L = i[I]).bi
                                      , j = L.bj
                                      , k = L.si
                                      , N = L.sj;
                                    k.material && N.material ? k.material.restitution >= 0 && N.material.restitution >= 0 && (L.restitution = k.material.restitution * N.material.restitution) : V.material && j.material && V.material.restitution >= 0 && j.material.restitution >= 0 && (L.restitution = V.material.restitution * j.material.restitution),
                                    a.addEquation(L),
                                    V.allowSleep && V.type === u.DYNAMIC && V.sleepState === u.SLEEPING && j.sleepState === u.AWAKE && j.type !== u.STATIC && j.velocity.norm2() + j.angularVelocity.norm2() >= 2 * Math.pow(j.sleepSpeedLimit, 2) && (V._wakeUpAfterNarrowphase = !0),
                                    j.allowSleep && j.type === u.DYNAMIC && j.sleepState === u.SLEEPING && V.sleepState === u.AWAKE && V.type !== u.STATIC && V.velocity.norm2() + V.angularVelocity.norm2() >= 2 * Math.pow(V.sleepSpeedLimit, 2) && (j._wakeUpAfterNarrowphase = !0),
                                    this.collisionMatrix.set(V, j, !0),
                                    this.collisionMatrixPrevious.get(V, j) || (z.body = j,
                                    z.contact = L,
                                    V.dispatchEvent(z),
                                    z.body = V,
                                    j.dispatchEvent(z)),
                                    this.bodyOverlapKeeper.set(V.id, j.id),
                                    this.shapeOverlapKeeper.set(k.id, N.id)
                                }
                                for (this.emitContactEvents(),
                                h && (c.makeContactConstraints = performance.now() - e,
                                e = performance.now()),
                                b = 0; b !== r; b++)
                                    (V = s[b])._wakeUpAfterNarrowphase && (V.wakeUp(),
                                    V._wakeUpAfterNarrowphase = !1);
                                for (B = d.length,
                                b = 0; b !== B; b++) {
                                    var L;
                                    (L = d[b]).update(),
                                    S = 0;
                                    for (var W = L.equations.length; S !== W; S++) {
                                        var D = L.equations[S];
                                        a.addEquation(D)
                                    }
                                }
                                a.solve(t, this),
                                h && (c.solve = performance.now() - e),
                                a.removeAllEquations();
                                var U = Math.pow;
                                for (b = 0; b !== r; b++)
                                    if ((V = s[b]).type & p) {
                                        var G = U(1 - V.linearDamping, t)
                                          , H = V.velocity;
                                        H.mult(G, H);
                                        var K = V.angularVelocity;
                                        if (K) {
                                            var Q = U(1 - V.angularDamping, t);
                                            K.mult(Q, K)
                                        }
                                    }
                                for (this.dispatchEvent(A),
                                b = 0; b !== r; b++)
                                    (V = s[b]).preStep && V.preStep.call(V);
                                h && (e = performance.now());
                                var X = this.stepnumber % (this.quatNormalizeSkip + 1) == 0
                                  , Y = this.quatNormalizeFast;
                                for (b = 0; b !== r; b++)
                                    s[b].integrate(t, X, Y);
                                for (this.clearForces(),
                                this.broadphase.dirty = !0,
                                h && (c.integrate = performance.now() - e),
                                this.time += t,
                                this.timeFixed += t,
                                this.stepnumber += 1,
                                this.dispatchEvent(C),
                                b = 0; b !== r; b++) {
                                    var Z = (V = s[b]).postStep;
                                    Z && Z.call(V)
                                }
                                if (this.allowSleep) {
                                    for (b = 0; b !== r; b++)
                                        s[b].sleepTick(this.time);
                                    for (g.SLEEPING = !0,
                                    b = 0; b !== r; b++)
                                        if ((V = s[b]).type != u.STATIC && !V.isSleeping()) {
                                            g.SLEEPING = !1;
                                            break
                                        }
                                } else
                                    g.SLEEPING = !1
                            }
                        }
                        ,
                        g.prototype.emitContactEvents = (x = [],
                        _ = [],
                        B = {
                            type: "beginContact",
                            bodyA: null,
                            bodyB: null
                        },
                        S = {
                            type: "endContact",
                            bodyA: null,
                            bodyB: null
                        },
                        E = {
                            type: "beginShapeContact",
                            bodyA: null,
                            bodyB: null,
                            shapeA: null,
                            shapeB: null
                        },
                        M = {
                            type: "endShapeContact",
                            bodyA: null,
                            bodyB: null,
                            shapeA: null,
                            shapeB: null
                        },
                        function() {
                            var t = this.hasAnyEventListener("beginContact")
                              , e = this.hasAnyEventListener("endContact");
                            if ((t || e) && this.bodyOverlapKeeper.getDiff(x, _),
                            t) {
                                for (var i = 0, o = x.length; i < o; i += 2)
                                    B.bodyA = this.getBodyById(x[i]),
                                    B.bodyB = this.getBodyById(x[i + 1]),
                                    this.dispatchEvent(B);
                                B.bodyA = B.bodyB = null
                            }
                            if (e) {
                                for (i = 0,
                                o = _.length; i < o; i += 2)
                                    S.bodyA = this.getBodyById(_[i]),
                                    S.bodyB = this.getBodyById(_[i + 1]),
                                    this.dispatchEvent(S);
                                S.bodyA = S.bodyB = null
                            }
                            x.length = _.length = 0;
                            var n = this.hasAnyEventListener("beginShapeContact")
                              , r = this.hasAnyEventListener("endShapeContact");
                            if ((n || r) && this.shapeOverlapKeeper.getDiff(x, _),
                            n) {
                                for (i = 0,
                                o = x.length; i < o; i += 2) {
                                    var s = this.getShapeById(x[i])
                                      , a = this.getShapeById(x[i + 1]);
                                    E.shapeA = s,
                                    E.shapeB = a,
                                    E.bodyA = s.body,
                                    E.bodyB = a.body,
                                    this.dispatchEvent(E)
                                }
                                E.bodyA = E.bodyB = E.shapeA = E.shapeB = null
                            }
                            if (r) {
                                for (i = 0,
                                o = _.length; i < o; i += 2)
                                    s = this.getShapeById(_[i]),
                                    a = this.getShapeById(_[i + 1]),
                                    M.shapeA = s,
                                    M.shapeB = a,
                                    M.bodyA = s.body,
                                    M.bodyB = a.body,
                                    this.dispatchEvent(M);
                                M.bodyA = M.bodyB = M.shapeA = M.shapeB = null
                            }
                        }
                        ),
                        g.prototype.clearForces = function() {
                            for (var t = this.bodies, e = t.length, i = 0; i !== e; i++) {
                                var o = t[i];
                                o.force,
                                o.torque,
                                o.force.set(0, 0, 0),
                                o.torque.set(0, 0, 0)
                            }
                        }
                        ;
                        var q = {
                            type: "cc-trigger",
                            event: "",
                            selfBody: null,
                            otherBody: null,
                            selfShape: null,
                            otherShape: null
                        }
                          , O = {
                            type: "cc-collide",
                            event: "",
                            body: null,
                            selfShape: null,
                            otherShape: null,
                            contacts: null
                        }
                          , I = [];
                        g.prototype.emitTriggeredEvents = function() {
                            if (0 != this.substeps) {
                                for (var t, e, i = this.triggerDic.getLength(); i--; )
                                    if (t = this.triggerDic.getKeyByIndex(i),
                                    null != (e = this.triggerDic.getDataByKey(t))) {
                                        var o = e.si
                                          , n = e.sj;
                                        this.tm.get(o, n) ? q.event = "onTriggerStay" : (this.tm.set(o, n, !0),
                                        q.event = "onTriggerEnter"),
                                        q.selfShape = o,
                                        q.otherShape = n,
                                        q.selfBody = o.body,
                                        q.otherBody = n.body,
                                        o.dispatchEvent(q),
                                        q.selfShape = n,
                                        q.otherShape = o,
                                        q.selfBody = n.body,
                                        q.otherBody = o.body,
                                        n.dispatchEvent(q)
                                    }
                                for (i = this.oldTriggerDic.getLength(); i > 0; )
                                    i--,
                                    t = this.oldTriggerDic.getKeyByIndex(i),
                                    null == this.triggerDic.getDataByKey(t) && null != (e = this.oldTriggerDic.getDataByKey(t)) && (o = e.si,
                                    n = e.sj,
                                    this.tm.set(o, n, !1),
                                    this.oldTriggerDic.del(o.id, n.id) && i--,
                                    q.event = "onTriggerExit",
                                    q.selfShape = o,
                                    q.otherShape = n,
                                    q.selfBody = o.body,
                                    q.otherBody = n.body,
                                    o.dispatchEvent(q),
                                    q.selfShape = n,
                                    q.otherShape = o,
                                    q.selfBody = n.body,
                                    q.otherBody = o.body,
                                    n.dispatchEvent(q));
                                this.triggerDic.reset()
                            }
                        }
                        ,
                        g.prototype.emitCollisionEvents = function() {
                            if (0 != this.substeps) {
                                for (var t, e, i = this.contacts, o = this.contacts.length; o--; ) {
                                    var n = (c = i[o]).si
                                      , r = c.sj
                                      , s = this.contactsDic.get(n.id, r.id);
                                    null == s && (s = this.contactsDic.set(n.id, r.id, [])),
                                    s.push(c)
                                }
                                for (o = this.contactsDic.getLength(); o--; )
                                    if (t = this.contactsDic.getKeyByIndex(o),
                                    null != (e = this.contactsDic.getDataByKey(t))) {
                                        n = e[0].si,
                                        r = e[0].sj;
                                        var a = n.body
                                          , l = r.body;
                                        this.cm.get(a, l) ? O.event = "onCollisionStay" : (this.cm.set(a, l, !0),
                                        O.event = "onCollisionEnter"),
                                        O.bi = a,
                                        O.contact = e[0],
                                        O.contacts = e,
                                        O.body = l,
                                        O.selfShape = n,
                                        O.otherShape = r,
                                        a.dispatchEvent(O),
                                        O.body = a,
                                        O.selfShape = r,
                                        O.otherShape = n,
                                        l.dispatchEvent(O)
                                    }
                                var h = I;
                                for (o = h.length; o--; ) {
                                    var c;
                                    n = (c = h[o]).si,
                                    r = c.sj,
                                    null == this.oldContactsDic.get(n.id, r.id) && this.oldContactsDic.set(n.id, r.id, c)
                                }
                                for (o = this.oldContactsDic.getLength(); o--; )
                                    t = this.oldContactsDic.getKeyByIndex(o),
                                    null == this.contactsDic.getDataByKey(t) && (n = (e = this.oldContactsDic.getDataByKey(t)).si,
                                    r = e.sj,
                                    a = n.body,
                                    l = r.body,
                                    this.cm.get(a, l) && (a.isSleeping() && l.isSleeping() || (this.cm.set(a, l, !1),
                                    O.bi = a,
                                    O.contact = e,
                                    O.event = "onCollisionExit",
                                    O.body = l,
                                    O.selfShape = n,
                                    O.otherShape = r,
                                    O.contacts.length = 0,
                                    O.contacts.push(e),
                                    a.dispatchEvent(O),
                                    O.body = a,
                                    O.selfShape = r,
                                    O.otherShape = n,
                                    l.dispatchEvent(O))));
                                this.contactsDic.reset(),
                                this.oldContactsDic.reset(),
                                F = I,
                                I = this.contacts.slice(),
                                this.contacts.length = 0
                            }
                        }
                    }
                    , {
                        "../collision/AABB": 3,
                        "../collision/ArrayCollisionMatrix": 4,
                        "../collision/NaiveBroadphase": 7,
                        "../collision/ObjectCollisionMatrix": 8,
                        "../collision/OverlapKeeper": 9,
                        "../collision/Ray": 10,
                        "../collision/RaycastResult": 11,
                        "../equations/ContactEquation": 20,
                        "../equations/FrictionEquation": 22,
                        "../material/ContactMaterial": 25,
                        "../material/Material": 26,
                        "../math/Quaternion": 30,
                        "../math/Vec3": 32,
                        "../objects/Body": 33,
                        "../shapes/Shape": 45,
                        "../solver/GSSolver": 48,
                        "../utils/EventTarget": 51,
                        "../utils/TupleDictionary": 54,
                        "./Narrowphase": 57
                    }]
                }, {}, [2])(2)
            })
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}]
}, {}, [10, 9]);
