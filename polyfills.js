(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    1: function (e, t, n) {
      e.exports = n("hN/g");
    },
    "hN/g": function (e, t, n) {
      "use strict";
      n.r(t), n("pDpN");
    },
    pDpN: function (e, t, n) {
      "use strict";
      !(function (e) {
        const t = e.performance;
        function n(e) {
          t && t.mark && t.mark(e);
        }
        function o(e, n) {
          t && t.measure && t.measure(e, n);
        }
        n("Zone");
        const r = e.__Zone_symbol_prefix || "__zone_symbol__";
        function s(e) {
          return r + e;
        }
        const a = !0 === e[s("forceDuplicateZoneCheck")];
        if (e.Zone) {
          if (a || "function" != typeof e.Zone.__symbol__)
            throw new Error("Zone already loaded.");
          return e.Zone;
        }
        class i {
          constructor(e, t) {
            (this._parent = e),
              (this._name = t ? t.name || "unnamed" : "<root>"),
              (this._properties = (t && t.properties) || {}),
              (this._zoneDelegate = new l(
                this,
                this._parent && this._parent._zoneDelegate,
                t,
              ));
          }
          static assertZonePatched() {
            if (e.Promise !== O.ZoneAwarePromise)
              throw new Error(
                "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)",
              );
          }
          static get root() {
            let e = i.current;
            for (; e.parent; ) e = e.parent;
            return e;
          }
          static get current() {
            return z.zone;
          }
          static get currentTask() {
            return j;
          }
          static __load_patch(t, r, s = !1) {
            if (O.hasOwnProperty(t)) {
              if (!s && a) throw Error("Already loaded patch: " + t);
            } else if (!e["__Zone_disable_" + t]) {
              const s = "Zone:" + t;
              n(s), (O[t] = r(e, i, C)), o(s, s);
            }
          }
          get parent() {
            return this._parent;
          }
          get name() {
            return this._name;
          }
          get(e) {
            const t = this.getZoneWith(e);
            if (t) return t._properties[e];
          }
          getZoneWith(e) {
            let t = this;
            for (; t; ) {
              if (t._properties.hasOwnProperty(e)) return t;
              t = t._parent;
            }
            return null;
          }
          fork(e) {
            if (!e) throw new Error("ZoneSpec required!");
            return this._zoneDelegate.fork(this, e);
          }
          wrap(e, t) {
            if ("function" != typeof e)
              throw new Error("Expecting function got: " + e);
            const n = this._zoneDelegate.intercept(this, e, t),
              o = this;
            return function () {
              return o.runGuarded(n, this, arguments, t);
            };
          }
          run(e, t, n, o) {
            z = { parent: z, zone: this };
            try {
              return this._zoneDelegate.invoke(this, e, t, n, o);
            } finally {
              z = z.parent;
            }
          }
          runGuarded(e, t = null, n, o) {
            z = { parent: z, zone: this };
            try {
              try {
                return this._zoneDelegate.invoke(this, e, t, n, o);
              } catch (r) {
                if (this._zoneDelegate.handleError(this, r)) throw r;
              }
            } finally {
              z = z.parent;
            }
          }
          runTask(e, t, n) {
            if (e.zone != this)
              throw new Error(
                "A task can only be run in the zone of creation! (Creation: " +
                  (e.zone || y).name +
                  "; Execution: " +
                  this.name +
                  ")",
              );
            if (e.state === v && (e.type === P || e.type === D)) return;
            const o = e.state != E;
            o && e._transitionTo(E, b), e.runCount++;
            const r = j;
            (j = e), (z = { parent: z, zone: this });
            try {
              e.type == D &&
                e.data &&
                !e.data.isPeriodic &&
                (e.cancelFn = void 0);
              try {
                return this._zoneDelegate.invokeTask(this, e, t, n);
              } catch (s) {
                if (this._zoneDelegate.handleError(this, s)) throw s;
              }
            } finally {
              e.state !== v &&
                e.state !== Z &&
                (e.type == P || (e.data && e.data.isPeriodic)
                  ? o && e._transitionTo(b, E)
                  : ((e.runCount = 0),
                    this._updateTaskCount(e, -1),
                    o && e._transitionTo(v, E, v))),
                (z = z.parent),
                (j = r);
            }
          }
          scheduleTask(e) {
            if (e.zone && e.zone !== this) {
              let t = this;
              for (; t; ) {
                if (t === e.zone)
                  throw Error(
                    `can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`,
                  );
                t = t.parent;
              }
            }
            e._transitionTo(T, v);
            const t = [];
            (e._zoneDelegates = t), (e._zone = this);
            try {
              e = this._zoneDelegate.scheduleTask(this, e);
            } catch (n) {
              throw (
                (e._transitionTo(Z, T, v),
                this._zoneDelegate.handleError(this, n),
                n)
              );
            }
            return (
              e._zoneDelegates === t && this._updateTaskCount(e, 1),
              e.state == T && e._transitionTo(b, T),
              e
            );
          }
          scheduleMicroTask(e, t, n, o) {
            return this.scheduleTask(new u(S, e, t, n, o, void 0));
          }
          scheduleMacroTask(e, t, n, o, r) {
            return this.scheduleTask(new u(D, e, t, n, o, r));
          }
          scheduleEventTask(e, t, n, o, r) {
            return this.scheduleTask(new u(P, e, t, n, o, r));
          }
          cancelTask(e) {
            if (e.zone != this)
              throw new Error(
                "A task can only be cancelled in the zone of creation! (Creation: " +
                  (e.zone || y).name +
                  "; Execution: " +
                  this.name +
                  ")",
              );
            e._transitionTo(w, b, E);
            try {
              this._zoneDelegate.cancelTask(this, e);
            } catch (t) {
              throw (
                (e._transitionTo(Z, w),
                this._zoneDelegate.handleError(this, t),
                t)
              );
            }
            return (
              this._updateTaskCount(e, -1),
              e._transitionTo(v, w),
              (e.runCount = 0),
              e
            );
          }
          _updateTaskCount(e, t) {
            const n = e._zoneDelegates;
            -1 == t && (e._zoneDelegates = null);
            for (let o = 0; o < n.length; o++) n[o]._updateTaskCount(e.type, t);
          }
        }
        i.__symbol__ = s;
        const c = {
          name: "",
          onHasTask: (e, t, n, o) => e.hasTask(n, o),
          onScheduleTask: (e, t, n, o) => e.scheduleTask(n, o),
          onInvokeTask: (e, t, n, o, r, s) => e.invokeTask(n, o, r, s),
          onCancelTask: (e, t, n, o) => e.cancelTask(n, o),
        };
        class l {
          constructor(e, t, n) {
            (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
              (this.zone = e),
              (this._parentDelegate = t),
              (this._forkZS = n && (n && n.onFork ? n : t._forkZS)),
              (this._forkDlgt = n && (n.onFork ? t : t._forkDlgt)),
              (this._forkCurrZone =
                n && (n.onFork ? this.zone : t._forkCurrZone)),
              (this._interceptZS = n && (n.onIntercept ? n : t._interceptZS)),
              (this._interceptDlgt =
                n && (n.onIntercept ? t : t._interceptDlgt)),
              (this._interceptCurrZone =
                n && (n.onIntercept ? this.zone : t._interceptCurrZone)),
              (this._invokeZS = n && (n.onInvoke ? n : t._invokeZS)),
              (this._invokeDlgt = n && (n.onInvoke ? t : t._invokeDlgt)),
              (this._invokeCurrZone =
                n && (n.onInvoke ? this.zone : t._invokeCurrZone)),
              (this._handleErrorZS =
                n && (n.onHandleError ? n : t._handleErrorZS)),
              (this._handleErrorDlgt =
                n && (n.onHandleError ? t : t._handleErrorDlgt)),
              (this._handleErrorCurrZone =
                n && (n.onHandleError ? this.zone : t._handleErrorCurrZone)),
              (this._scheduleTaskZS =
                n && (n.onScheduleTask ? n : t._scheduleTaskZS)),
              (this._scheduleTaskDlgt =
                n && (n.onScheduleTask ? t : t._scheduleTaskDlgt)),
              (this._scheduleTaskCurrZone =
                n && (n.onScheduleTask ? this.zone : t._scheduleTaskCurrZone)),
              (this._invokeTaskZS =
                n && (n.onInvokeTask ? n : t._invokeTaskZS)),
              (this._invokeTaskDlgt =
                n && (n.onInvokeTask ? t : t._invokeTaskDlgt)),
              (this._invokeTaskCurrZone =
                n && (n.onInvokeTask ? this.zone : t._invokeTaskCurrZone)),
              (this._cancelTaskZS =
                n && (n.onCancelTask ? n : t._cancelTaskZS)),
              (this._cancelTaskDlgt =
                n && (n.onCancelTask ? t : t._cancelTaskDlgt)),
              (this._cancelTaskCurrZone =
                n && (n.onCancelTask ? this.zone : t._cancelTaskCurrZone)),
              (this._hasTaskZS = null),
              (this._hasTaskDlgt = null),
              (this._hasTaskDlgtOwner = null),
              (this._hasTaskCurrZone = null);
            const o = n && n.onHasTask;
            (o || (t && t._hasTaskZS)) &&
              ((this._hasTaskZS = o ? n : c),
              (this._hasTaskDlgt = t),
              (this._hasTaskDlgtOwner = this),
              (this._hasTaskCurrZone = e),
              n.onScheduleTask ||
                ((this._scheduleTaskZS = c),
                (this._scheduleTaskDlgt = t),
                (this._scheduleTaskCurrZone = this.zone)),
              n.onInvokeTask ||
                ((this._invokeTaskZS = c),
                (this._invokeTaskDlgt = t),
                (this._invokeTaskCurrZone = this.zone)),
              n.onCancelTask ||
                ((this._cancelTaskZS = c),
                (this._cancelTaskDlgt = t),
                (this._cancelTaskCurrZone = this.zone)));
          }
          fork(e, t) {
            return this._forkZS
              ? this._forkZS.onFork(this._forkDlgt, this.zone, e, t)
              : new i(e, t);
          }
          intercept(e, t, n) {
            return this._interceptZS
              ? this._interceptZS.onIntercept(
                  this._interceptDlgt,
                  this._interceptCurrZone,
                  e,
                  t,
                  n,
                )
              : t;
          }
          invoke(e, t, n, o, r) {
            return this._invokeZS
              ? this._invokeZS.onInvoke(
                  this._invokeDlgt,
                  this._invokeCurrZone,
                  e,
                  t,
                  n,
                  o,
                  r,
                )
              : t.apply(n, o);
          }
          handleError(e, t) {
            return (
              !this._handleErrorZS ||
              this._handleErrorZS.onHandleError(
                this._handleErrorDlgt,
                this._handleErrorCurrZone,
                e,
                t,
              )
            );
          }
          scheduleTask(e, t) {
            let n = t;
            if (this._scheduleTaskZS)
              this._hasTaskZS && n._zoneDelegates.push(this._hasTaskDlgtOwner),
                (n = this._scheduleTaskZS.onScheduleTask(
                  this._scheduleTaskDlgt,
                  this._scheduleTaskCurrZone,
                  e,
                  t,
                )),
                n || (n = t);
            else if (t.scheduleFn) t.scheduleFn(t);
            else {
              if (t.type != S) throw new Error("Task is missing scheduleFn.");
              k(t);
            }
            return n;
          }
          invokeTask(e, t, n, o) {
            return this._invokeTaskZS
              ? this._invokeTaskZS.onInvokeTask(
                  this._invokeTaskDlgt,
                  this._invokeTaskCurrZone,
                  e,
                  t,
                  n,
                  o,
                )
              : t.callback.apply(n, o);
          }
          cancelTask(e, t) {
            let n;
            if (this._cancelTaskZS)
              n = this._cancelTaskZS.onCancelTask(
                this._cancelTaskDlgt,
                this._cancelTaskCurrZone,
                e,
                t,
              );
            else {
              if (!t.cancelFn) throw Error("Task is not cancelable");
              n = t.cancelFn(t);
            }
            return n;
          }
          hasTask(e, t) {
            try {
              this._hasTaskZS &&
                this._hasTaskZS.onHasTask(
                  this._hasTaskDlgt,
                  this._hasTaskCurrZone,
                  e,
                  t,
                );
            } catch (n) {
              this.handleError(e, n);
            }
          }
          _updateTaskCount(e, t) {
            const n = this._taskCounts,
              o = n[e],
              r = (n[e] = o + t);
            if (r < 0)
              throw new Error("More tasks executed then were scheduled.");
            (0 != o && 0 != r) ||
              this.hasTask(this.zone, {
                microTask: n.microTask > 0,
                macroTask: n.macroTask > 0,
                eventTask: n.eventTask > 0,
                change: e,
              });
          }
        }
        class u {
          constructor(t, n, o, r, s, a) {
            if (
              ((this._zone = null),
              (this.runCount = 0),
              (this._zoneDelegates = null),
              (this._state = "notScheduled"),
              (this.type = t),
              (this.source = n),
              (this.data = r),
              (this.scheduleFn = s),
              (this.cancelFn = a),
              !o)
            )
              throw new Error("callback is not defined");
            this.callback = o;
            const i = this;
            this.invoke =
              t === P && r && r.useG
                ? u.invokeTask
                : function () {
                    return u.invokeTask.call(e, i, this, arguments);
                  };
          }
          static invokeTask(e, t, n) {
            e || (e = this), I++;
            try {
              return e.runCount++, e.zone.runTask(e, t, n);
            } finally {
              1 == I && m(), I--;
            }
          }
          get zone() {
            return this._zone;
          }
          get state() {
            return this._state;
          }
          cancelScheduleRequest() {
            this._transitionTo(v, T);
          }
          _transitionTo(e, t, n) {
            if (this._state !== t && this._state !== n)
              throw new Error(
                `${this.type} '${this.source}': can not transition to '${e}', expecting state '${t}'${n ? " or '" + n + "'" : ""}, was '${this._state}'.`,
              );
            (this._state = e), e == v && (this._zoneDelegates = null);
          }
          toString() {
            return this.data && void 0 !== this.data.handleId
              ? this.data.handleId.toString()
              : Object.prototype.toString.call(this);
          }
          toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount,
            };
          }
        }
        const h = s("setTimeout"),
          p = s("Promise"),
          f = s("then");
        let d,
          g = [],
          _ = !1;
        function k(t) {
          if (0 === I && 0 === g.length)
            if ((d || (e[p] && (d = e[p].resolve(0))), d)) {
              let e = d[f];
              e || (e = d.then), e.call(d, m);
            } else e[h](m, 0);
          t && g.push(t);
        }
        function m() {
          if (!_) {
            for (_ = !0; g.length; ) {
              const t = g;
              g = [];
              for (let n = 0; n < t.length; n++) {
                const o = t[n];
                try {
                  o.zone.runTask(o, null, null);
                } catch (e) {
                  C.onUnhandledError(e);
                }
              }
            }
            C.microtaskDrainDone(), (_ = !1);
          }
        }
        const y = { name: "NO ZONE" },
          v = "notScheduled",
          T = "scheduling",
          b = "scheduled",
          E = "running",
          w = "canceling",
          Z = "unknown",
          S = "microTask",
          D = "macroTask",
          P = "eventTask",
          O = {},
          C = {
            symbol: s,
            currentZoneFrame: () => z,
            onUnhandledError: R,
            microtaskDrainDone: R,
            scheduleMicroTask: k,
            showUncaughtError: () => !i[s("ignoreConsoleErrorUncaughtError")],
            patchEventTarget: () => [],
            patchOnProperties: R,
            patchMethod: () => R,
            bindArguments: () => [],
            patchThen: () => R,
            patchMacroTask: () => R,
            patchEventPrototype: () => R,
            isIEOrEdge: () => !1,
            getGlobalObjects: () => {},
            ObjectDefineProperty: () => R,
            ObjectGetOwnPropertyDescriptor: () => {},
            ObjectCreate: () => {},
            ArraySlice: () => [],
            patchClass: () => R,
            wrapWithCurrentZone: () => R,
            filterProperties: () => [],
            attachOriginToPatched: () => R,
            _redefineProperty: () => R,
            patchCallbacks: () => R,
          };
        let z = { parent: null, zone: new i(null, null) },
          j = null,
          I = 0;
        function R() {}
        o("Zone", "Zone"), (e.Zone = i);
      })(
        ("undefined" != typeof window && window) ||
          ("undefined" != typeof self && self) ||
          global,
      );
      const o = Object.getOwnPropertyDescriptor,
        r = Object.defineProperty,
        s = Object.getPrototypeOf,
        a = Object.create,
        i = Array.prototype.slice,
        c = "addEventListener",
        l = "removeEventListener",
        u = Zone.__symbol__(c),
        h = Zone.__symbol__(l),
        p = "true",
        f = "false",
        d = Zone.__symbol__("");
      function g(e, t) {
        return Zone.current.wrap(e, t);
      }
      function _(e, t, n, o, r) {
        return Zone.current.scheduleMacroTask(e, t, n, o, r);
      }
      const k = Zone.__symbol__,
        m = "undefined" != typeof window,
        y = m ? window : void 0,
        v = (m && y) || ("object" == typeof self && self) || global,
        T = [null];
      function b(e, t) {
        for (let n = e.length - 1; n >= 0; n--)
          "function" == typeof e[n] && (e[n] = g(e[n], t + "_" + n));
        return e;
      }
      function E(e) {
        return (
          !e ||
          (!1 !== e.writable &&
            !("function" == typeof e.get && void 0 === e.set))
        );
      }
      const w =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope,
        Z =
          !("nw" in v) &&
          void 0 !== v.process &&
          "[object process]" === {}.toString.call(v.process),
        S = !Z && !w && !(!m || !y.HTMLElement),
        D =
          void 0 !== v.process &&
          "[object process]" === {}.toString.call(v.process) &&
          !w &&
          !(!m || !y.HTMLElement),
        P = {},
        O = function (e) {
          if (!(e = e || v.event)) return;
          let t = P[e.type];
          t || (t = P[e.type] = k("ON_PROPERTY" + e.type));
          const n = this || e.target || v,
            o = n[t];
          let r;
          if (S && n === y && "error" === e.type) {
            const t = e;
            (r =
              o &&
              o.call(this, t.message, t.filename, t.lineno, t.colno, t.error)),
              !0 === r && e.preventDefault();
          } else
            (r = o && o.apply(this, arguments)),
              null == r || r || e.preventDefault();
          return r;
        };
      function C(e, t, n) {
        let s = o(e, t);
        if (
          (!s && n && o(n, t) && (s = { enumerable: !0, configurable: !0 }),
          !s || !s.configurable)
        )
          return;
        const a = k("on" + t + "patched");
        if (e.hasOwnProperty(a) && e[a]) return;
        delete s.writable, delete s.value;
        const i = s.get,
          c = s.set,
          l = t.substr(2);
        let u = P[l];
        u || (u = P[l] = k("ON_PROPERTY" + l)),
          (s.set = function (t) {
            let n = this;
            n || e !== v || (n = v),
              n &&
                (n[u] && n.removeEventListener(l, O),
                c && c.apply(n, T),
                "function" == typeof t
                  ? ((n[u] = t), n.addEventListener(l, O, !1))
                  : (n[u] = null));
          }),
          (s.get = function () {
            let n = this;
            if ((n || e !== v || (n = v), !n)) return null;
            const o = n[u];
            if (o) return o;
            if (i) {
              let e = i && i.call(this);
              if (e)
                return (
                  s.set.call(this, e),
                  "function" == typeof n.removeAttribute &&
                    n.removeAttribute(t),
                  e
                );
            }
            return null;
          }),
          r(e, t, s),
          (e[a] = !0);
      }
      function z(e, t, n) {
        if (t) for (let o = 0; o < t.length; o++) C(e, "on" + t[o], n);
        else {
          const t = [];
          for (const n in e) "on" == n.substr(0, 2) && t.push(n);
          for (let o = 0; o < t.length; o++) C(e, t[o], n);
        }
      }
      const j = k("originalInstance");
      function I(e) {
        const t = v[e];
        if (!t) return;
        (v[k(e)] = t),
          (v[e] = function () {
            const n = b(arguments, e);
            switch (n.length) {
              case 0:
                this[j] = new t();
                break;
              case 1:
                this[j] = new t(n[0]);
                break;
              case 2:
                this[j] = new t(n[0], n[1]);
                break;
              case 3:
                this[j] = new t(n[0], n[1], n[2]);
                break;
              case 4:
                this[j] = new t(n[0], n[1], n[2], n[3]);
                break;
              default:
                throw new Error("Arg list too long.");
            }
          }),
          N(v[e], t);
        const n = new t(function () {});
        let o;
        for (o in n)
          ("XMLHttpRequest" === e && "responseBlob" === o) ||
            (function (t) {
              "function" == typeof n[t]
                ? (v[e].prototype[t] = function () {
                    return this[j][t].apply(this[j], arguments);
                  })
                : r(v[e].prototype, t, {
                    set: function (n) {
                      "function" == typeof n
                        ? ((this[j][t] = g(n, e + "." + t)), N(this[j][t], n))
                        : (this[j][t] = n);
                    },
                    get: function () {
                      return this[j][t];
                    },
                  });
            })(o);
        for (o in t)
          "prototype" !== o && t.hasOwnProperty(o) && (v[e][o] = t[o]);
      }
      function R(e, t, n) {
        let r = e;
        for (; r && !r.hasOwnProperty(t); ) r = s(r);
        !r && e[t] && (r = e);
        const a = k(t);
        let i = null;
        if (
          r &&
          (!(i = r[a]) || !r.hasOwnProperty(a)) &&
          ((i = r[a] = r[t]), E(r && o(r, t)))
        ) {
          const e = n(i, a, t);
          (r[t] = function () {
            return e(this, arguments);
          }),
            N(r[t], i);
        }
        return i;
      }
      function M(e, t, n) {
        let o = null;
        function r(e) {
          const t = e.data;
          return (
            (t.args[t.cbIdx] = function () {
              e.invoke.apply(this, arguments);
            }),
            o.apply(t.target, t.args),
            e
          );
        }
        o = R(
          e,
          t,
          (e) =>
            function (t, o) {
              const s = n(t, o);
              return s.cbIdx >= 0 && "function" == typeof o[s.cbIdx]
                ? _(s.name, o[s.cbIdx], s, r)
                : e.apply(t, o);
            },
        );
      }
      function N(e, t) {
        e[k("OriginalDelegate")] = t;
      }
      let x = !1,
        L = !1;
      function A() {
        try {
          const e = y.navigator.userAgent;
          if (-1 !== e.indexOf("MSIE ") || -1 !== e.indexOf("Trident/"))
            return !0;
        } catch (e) {}
        return !1;
      }
      function H() {
        if (x) return L;
        x = !0;
        try {
          const e = y.navigator.userAgent;
          (-1 === e.indexOf("MSIE ") &&
            -1 === e.indexOf("Trident/") &&
            -1 === e.indexOf("Edge/")) ||
            (L = !0);
        } catch (e) {}
        return L;
      }
      Zone.__load_patch("ZoneAwarePromise", (e, t, n) => {
        const o = Object.getOwnPropertyDescriptor,
          r = Object.defineProperty,
          s = n.symbol,
          a = [],
          i = !0 === e[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
          c = s("Promise"),
          l = s("then");
        (n.onUnhandledError = (e) => {
          if (n.showUncaughtError()) {
            const t = e && e.rejection;
            t
              ? console.error(
                  "Unhandled Promise rejection:",
                  t instanceof Error ? t.message : t,
                  "; Zone:",
                  e.zone.name,
                  "; Task:",
                  e.task && e.task.source,
                  "; Value:",
                  t,
                  t instanceof Error ? t.stack : void 0,
                )
              : console.error(e);
          }
        }),
          (n.microtaskDrainDone = () => {
            for (; a.length; ) {
              const t = a.shift();
              try {
                t.zone.runGuarded(() => {
                  if (t.throwOriginal) throw t.rejection;
                  throw t;
                });
              } catch (e) {
                h(e);
              }
            }
          });
        const u = s("unhandledPromiseRejectionHandler");
        function h(e) {
          n.onUnhandledError(e);
          try {
            const n = t[u];
            "function" == typeof n && n.call(this, e);
          } catch (o) {}
        }
        function p(e) {
          return e && e.then;
        }
        function f(e) {
          return e;
        }
        function d(e) {
          return C.reject(e);
        }
        const g = s("state"),
          _ = s("value"),
          k = s("finally"),
          m = s("parentPromiseValue"),
          y = s("parentPromiseState"),
          v = null,
          T = !0,
          b = !1;
        function E(e, t) {
          return (n) => {
            try {
              Z(e, t, n);
            } catch (o) {
              Z(e, !1, o);
            }
          };
        }
        const w = s("currentTaskTrace");
        function Z(e, o, s) {
          const c = (function () {
            let e = !1;
            return function (t) {
              return function () {
                e || ((e = !0), t.apply(null, arguments));
              };
            };
          })();
          if (e === s) throw new TypeError("Promise resolved with itself");
          if (e[g] === v) {
            let h = null;
            try {
              ("object" != typeof s && "function" != typeof s) ||
                (h = s && s.then);
            } catch (u) {
              return (
                c(() => {
                  Z(e, !1, u);
                })(),
                e
              );
            }
            if (
              o !== b &&
              s instanceof C &&
              s.hasOwnProperty(g) &&
              s.hasOwnProperty(_) &&
              s[g] !== v
            )
              D(s), Z(e, s[g], s[_]);
            else if (o !== b && "function" == typeof h)
              try {
                h.call(s, c(E(e, o)), c(E(e, !1)));
              } catch (u) {
                c(() => {
                  Z(e, !1, u);
                })();
              }
            else {
              e[g] = o;
              const c = e[_];
              if (
                ((e[_] = s),
                e[k] === k && o === T && ((e[g] = e[y]), (e[_] = e[m])),
                o === b && s instanceof Error)
              ) {
                const e =
                  t.currentTask &&
                  t.currentTask.data &&
                  t.currentTask.data.__creationTrace__;
                e &&
                  r(s, w, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: e,
                  });
              }
              for (let t = 0; t < c.length; )
                P(e, c[t++], c[t++], c[t++], c[t++]);
              if (0 == c.length && o == b) {
                e[g] = 0;
                let o = s;
                try {
                  throw new Error(
                    "Uncaught (in promise): " +
                      ((l = s) && l.toString === Object.prototype.toString
                        ? ((l.constructor && l.constructor.name) || "") +
                          ": " +
                          JSON.stringify(l)
                        : l
                          ? l.toString()
                          : Object.prototype.toString.call(l)) +
                      (s && s.stack ? "\n" + s.stack : ""),
                  );
                } catch (u) {
                  o = u;
                }
                i && (o.throwOriginal = !0),
                  (o.rejection = s),
                  (o.promise = e),
                  (o.zone = t.current),
                  (o.task = t.currentTask),
                  a.push(o),
                  n.scheduleMicroTask();
              }
            }
          }
          var l;
          return e;
        }
        const S = s("rejectionHandledHandler");
        function D(e) {
          if (0 === e[g]) {
            try {
              const n = t[S];
              n &&
                "function" == typeof n &&
                n.call(this, { rejection: e[_], promise: e });
            } catch (n) {}
            e[g] = b;
            for (let t = 0; t < a.length; t++)
              e === a[t].promise && a.splice(t, 1);
          }
        }
        function P(e, t, n, o, r) {
          D(e);
          const s = e[g],
            a = s
              ? "function" == typeof o
                ? o
                : f
              : "function" == typeof r
                ? r
                : d;
          t.scheduleMicroTask(
            "Promise.then",
            () => {
              try {
                const o = e[_],
                  r = !!n && k === n[k];
                r && ((n[m] = o), (n[y] = s));
                const i = t.run(a, void 0, r && a !== d && a !== f ? [] : [o]);
                Z(n, !0, i);
              } catch (o) {
                Z(n, !1, o);
              }
            },
            n,
          );
        }
        const O = function () {};
        class C {
          static toString() {
            return "function ZoneAwarePromise() { [native code] }";
          }
          static resolve(e) {
            return Z(new this(null), T, e);
          }
          static reject(e) {
            return Z(new this(null), b, e);
          }
          static race(e) {
            let t,
              n,
              o = new this((e, o) => {
                (t = e), (n = o);
              });
            function r(e) {
              t(e);
            }
            function s(e) {
              n(e);
            }
            for (let a of e) p(a) || (a = this.resolve(a)), a.then(r, s);
            return o;
          }
          static all(e) {
            return C.allWithCallback(e);
          }
          static allSettled(e) {
            return (
              this && this.prototype instanceof C ? this : C
            ).allWithCallback(e, {
              thenCallback: (e) => ({ status: "fulfilled", value: e }),
              errorCallback: (e) => ({ status: "rejected", reason: e }),
            });
          }
          static allWithCallback(e, t) {
            let n,
              o,
              r = new this((e, t) => {
                (n = e), (o = t);
              }),
              s = 2,
              a = 0;
            const i = [];
            for (let l of e) {
              p(l) || (l = this.resolve(l));
              const e = a;
              try {
                l.then(
                  (o) => {
                    (i[e] = t ? t.thenCallback(o) : o), s--, 0 === s && n(i);
                  },
                  (r) => {
                    t
                      ? ((i[e] = t.errorCallback(r)), s--, 0 === s && n(i))
                      : o(r);
                  },
                );
              } catch (c) {
                o(c);
              }
              s++, a++;
            }
            return (s -= 2), 0 === s && n(i), r;
          }
          constructor(e) {
            const t = this;
            if (!(t instanceof C))
              throw new Error("Must be an instanceof Promise.");
            (t[g] = v), (t[_] = []);
            try {
              e && e(E(t, T), E(t, b));
            } catch (n) {
              Z(t, !1, n);
            }
          }
          get [Symbol.toStringTag]() {
            return "Promise";
          }
          get [Symbol.species]() {
            return C;
          }
          then(e, n) {
            let o = this.constructor[Symbol.species];
            (o && "function" == typeof o) || (o = this.constructor || C);
            const r = new o(O),
              s = t.current;
            return (
              this[g] == v ? this[_].push(s, r, e, n) : P(this, s, r, e, n), r
            );
          }
          catch(e) {
            return this.then(null, e);
          }
          finally(e) {
            let n = this.constructor[Symbol.species];
            (n && "function" == typeof n) || (n = C);
            const o = new n(O);
            o[k] = k;
            const r = t.current;
            return (
              this[g] == v ? this[_].push(r, o, e, e) : P(this, r, o, e, e), o
            );
          }
        }
        (C.resolve = C.resolve),
          (C.reject = C.reject),
          (C.race = C.race),
          (C.all = C.all);
        const z = (e[c] = e.Promise);
        e.Promise = C;
        const j = s("thenPatched");
        function I(e) {
          const t = e.prototype,
            n = o(t, "then");
          if (n && (!1 === n.writable || !n.configurable)) return;
          const r = t.then;
          (t[l] = r),
            (e.prototype.then = function (e, t) {
              return new C((e, t) => {
                r.call(this, e, t);
              }).then(e, t);
            }),
            (e[j] = !0);
        }
        return (
          (n.patchThen = I),
          z &&
            (I(z),
            R(e, "fetch", (e) => {
              return (
                (t = e),
                function (e, n) {
                  let o = t.apply(e, n);
                  if (o instanceof C) return o;
                  let r = o.constructor;
                  return r[j] || I(r), o;
                }
              );
              var t;
            })),
          (Promise[t.__symbol__("uncaughtPromiseErrors")] = a),
          C
        );
      }),
        Zone.__load_patch("toString", (e) => {
          const t = Function.prototype.toString,
            n = k("OriginalDelegate"),
            o = k("Promise"),
            r = k("Error"),
            s = function () {
              if ("function" == typeof this) {
                const s = this[n];
                if (s)
                  return "function" == typeof s
                    ? t.call(s)
                    : Object.prototype.toString.call(s);
                if (this === Promise) {
                  const n = e[o];
                  if (n) return t.call(n);
                }
                if (this === Error) {
                  const n = e[r];
                  if (n) return t.call(n);
                }
              }
              return t.call(this);
            };
          (s[n] = t), (Function.prototype.toString = s);
          const a = Object.prototype.toString;
          Object.prototype.toString = function () {
            return "function" == typeof Promise && this instanceof Promise
              ? "[object Promise]"
              : a.call(this);
          };
        });
      let F = !1;
      if ("undefined" != typeof window)
        try {
          const e = Object.defineProperty({}, "passive", {
            get: function () {
              F = !0;
            },
          });
          window.addEventListener("test", e, e),
            window.removeEventListener("test", e, e);
        } catch (de) {
          F = !1;
        }
      const q = { useG: !0 },
        G = {},
        B = {},
        W = new RegExp("^" + d + "(\\w+)(true|false)$"),
        U = k("propagationStopped");
      function V(e, t) {
        const n = (t ? t(e) : e) + f,
          o = (t ? t(e) : e) + p,
          r = d + n,
          s = d + o;
        (G[e] = {}), (G[e].false = r), (G[e].true = s);
      }
      function $(e, t, n) {
        const o = (n && n.add) || c,
          r = (n && n.rm) || l,
          a = (n && n.listeners) || "eventListeners",
          i = (n && n.rmAll) || "removeAllListeners",
          u = k(o),
          h = "." + o + ":",
          g = function (e, t, n) {
            if (e.isRemoved) return;
            const o = e.callback;
            "object" == typeof o &&
              o.handleEvent &&
              ((e.callback = (e) => o.handleEvent(e)),
              (e.originalDelegate = o)),
              e.invoke(e, t, [n]);
            const s = e.options;
            s &&
              "object" == typeof s &&
              s.once &&
              t[r].call(
                t,
                n.type,
                e.originalDelegate ? e.originalDelegate : e.callback,
                s,
              );
          },
          _ = function (t) {
            if (!(t = t || e.event)) return;
            const n = this || t.target || e,
              o = n[G[t.type].false];
            if (o)
              if (1 === o.length) g(o[0], n, t);
              else {
                const e = o.slice();
                for (let o = 0; o < e.length && (!t || !0 !== t[U]); o++)
                  g(e[o], n, t);
              }
          },
          m = function (t) {
            if (!(t = t || e.event)) return;
            const n = this || t.target || e,
              o = n[G[t.type].true];
            if (o)
              if (1 === o.length) g(o[0], n, t);
              else {
                const e = o.slice();
                for (let o = 0; o < e.length && (!t || !0 !== t[U]); o++)
                  g(e[o], n, t);
              }
          };
        function y(t, n) {
          if (!t) return !1;
          let c = !0;
          n && void 0 !== n.useG && (c = n.useG);
          const l = n && n.vh;
          let g = !0;
          n && void 0 !== n.chkDup && (g = n.chkDup);
          let y = !1;
          n && void 0 !== n.rt && (y = n.rt);
          let v = t;
          for (; v && !v.hasOwnProperty(o); ) v = s(v);
          if ((!v && t[o] && (v = t), !v)) return !1;
          if (v[u]) return !1;
          const T = n && n.eventNameToString,
            b = {},
            E = (v[u] = v[o]),
            w = (v[k(r)] = v[r]),
            S = (v[k(a)] = v[a]),
            D = (v[k(i)] = v[i]);
          let P;
          function O(e, t) {
            return !F && "object" == typeof e && e
              ? !!e.capture
              : F && t
                ? "boolean" == typeof e
                  ? { capture: e, passive: !0 }
                  : e
                    ? "object" == typeof e && !1 !== e.passive
                      ? Object.assign(Object.assign({}, e), { passive: !0 })
                      : e
                    : { passive: !0 }
                : e;
          }
          n && n.prepend && (P = v[k(n.prepend)] = v[n.prepend]);
          const C = c
              ? function (e) {
                  if (!b.isExisting)
                    return E.call(
                      b.target,
                      b.eventName,
                      b.capture ? m : _,
                      b.options,
                    );
                }
              : function (e) {
                  return E.call(b.target, b.eventName, e.invoke, b.options);
                },
            z = c
              ? function (e) {
                  if (!e.isRemoved) {
                    const t = G[e.eventName];
                    let n;
                    t && (n = t[e.capture ? p : f]);
                    const o = n && e.target[n];
                    if (o)
                      for (let r = 0; r < o.length; r++)
                        if (o[r] === e) {
                          o.splice(r, 1),
                            (e.isRemoved = !0),
                            0 === o.length &&
                              ((e.allRemoved = !0), (e.target[n] = null));
                          break;
                        }
                  }
                  if (e.allRemoved)
                    return w.call(
                      e.target,
                      e.eventName,
                      e.capture ? m : _,
                      e.options,
                    );
                }
              : function (e) {
                  return w.call(e.target, e.eventName, e.invoke, e.options);
                },
            j =
              n && n.diff
                ? n.diff
                : function (e, t) {
                    const n = typeof t;
                    return (
                      ("function" === n && e.callback === t) ||
                      ("object" === n && e.originalDelegate === t)
                    );
                  },
            I = Zone[k("UNPATCHED_EVENTS")],
            R = e[k("PASSIVE_EVENTS")],
            M = function (t, o, r, s, a = !1, i = !1) {
              return function () {
                const u = this || e;
                let h = arguments[0];
                n && n.transferEventName && (h = n.transferEventName(h));
                let d = arguments[1];
                if (!d) return t.apply(this, arguments);
                if (Z && "uncaughtException" === h)
                  return t.apply(this, arguments);
                let _ = !1;
                if ("function" != typeof d) {
                  if (!d.handleEvent) return t.apply(this, arguments);
                  _ = !0;
                }
                if (l && !l(t, d, u, arguments)) return;
                const k = F && !!R && -1 !== R.indexOf(h),
                  m = O(arguments[2], k);
                if (I)
                  for (let e = 0; e < I.length; e++)
                    if (h === I[e])
                      return k ? t.call(u, h, d, m) : t.apply(this, arguments);
                const y = !!m && ("boolean" == typeof m || m.capture),
                  v = !(!m || "object" != typeof m) && m.once,
                  E = Zone.current;
                let w = G[h];
                w || (V(h, T), (w = G[h]));
                const S = w[y ? p : f];
                let D,
                  P = u[S],
                  C = !1;
                if (P) {
                  if (((C = !0), g))
                    for (let e = 0; e < P.length; e++) if (j(P[e], d)) return;
                } else P = u[S] = [];
                const z = u.constructor.name,
                  M = B[z];
                M && (D = M[h]),
                  D || (D = z + o + (T ? T(h) : h)),
                  (b.options = m),
                  v && (b.options.once = !1),
                  (b.target = u),
                  (b.capture = y),
                  (b.eventName = h),
                  (b.isExisting = C);
                const N = c ? q : void 0;
                N && (N.taskData = b);
                const x = E.scheduleEventTask(D, d, N, r, s);
                return (
                  (b.target = null),
                  N && (N.taskData = null),
                  v && (m.once = !0),
                  (F || "boolean" != typeof x.options) && (x.options = m),
                  (x.target = u),
                  (x.capture = y),
                  (x.eventName = h),
                  _ && (x.originalDelegate = d),
                  i ? P.unshift(x) : P.push(x),
                  a ? u : void 0
                );
              };
            };
          return (
            (v[o] = M(E, h, C, z, y)),
            P &&
              (v.prependListener = M(
                P,
                ".prependListener:",
                function (e) {
                  return P.call(b.target, b.eventName, e.invoke, b.options);
                },
                z,
                y,
                !0,
              )),
            (v[r] = function () {
              const t = this || e;
              let o = arguments[0];
              n && n.transferEventName && (o = n.transferEventName(o));
              const r = arguments[2],
                s = !!r && ("boolean" == typeof r || r.capture),
                a = arguments[1];
              if (!a) return w.apply(this, arguments);
              if (l && !l(w, a, t, arguments)) return;
              const i = G[o];
              let c;
              i && (c = i[s ? p : f]);
              const u = c && t[c];
              if (u)
                for (let e = 0; e < u.length; e++) {
                  const n = u[e];
                  if (j(n, a))
                    return (
                      u.splice(e, 1),
                      (n.isRemoved = !0),
                      0 === u.length &&
                        ((n.allRemoved = !0),
                        (t[c] = null),
                        "string" == typeof o) &&
                        (t[d + "ON_PROPERTY" + o] = null),
                      n.zone.cancelTask(n),
                      y ? t : void 0
                    );
                }
              return w.apply(this, arguments);
            }),
            (v[a] = function () {
              const t = this || e;
              let o = arguments[0];
              n && n.transferEventName && (o = n.transferEventName(o));
              const r = [],
                s = X(t, T ? T(o) : o);
              for (let e = 0; e < s.length; e++) {
                const t = s[e];
                r.push(t.originalDelegate ? t.originalDelegate : t.callback);
              }
              return r;
            }),
            (v[i] = function () {
              const t = this || e;
              let o = arguments[0];
              if (o) {
                n && n.transferEventName && (o = n.transferEventName(o));
                const e = G[o];
                if (e) {
                  const n = t[e.false],
                    s = t[e.true];
                  if (n) {
                    const e = n.slice();
                    for (let t = 0; t < e.length; t++) {
                      const n = e[t];
                      this[r].call(
                        this,
                        o,
                        n.originalDelegate ? n.originalDelegate : n.callback,
                        n.options,
                      );
                    }
                  }
                  if (s) {
                    const e = s.slice();
                    for (let t = 0; t < e.length; t++) {
                      const n = e[t];
                      this[r].call(
                        this,
                        o,
                        n.originalDelegate ? n.originalDelegate : n.callback,
                        n.options,
                      );
                    }
                  }
                }
              } else {
                const e = Object.keys(t);
                for (let t = 0; t < e.length; t++) {
                  const n = W.exec(e[t]);
                  let o = n && n[1];
                  o && "removeListener" !== o && this[i].call(this, o);
                }
                this[i].call(this, "removeListener");
              }
              if (y) return this;
            }),
            N(v[o], E),
            N(v[r], w),
            D && N(v[i], D),
            S && N(v[a], S),
            !0
          );
        }
        let v = [];
        for (let s = 0; s < t.length; s++) v[s] = y(t[s], n);
        return v;
      }
      function X(e, t) {
        if (!t) {
          const n = [];
          for (let o in e) {
            const r = W.exec(o);
            let s = r && r[1];
            if (s && (!t || s === t)) {
              const t = e[o];
              if (t) for (let e = 0; e < t.length; e++) n.push(t[e]);
            }
          }
          return n;
        }
        let n = G[t];
        n || (V(t), (n = G[t]));
        const o = e[n.false],
          r = e[n.true];
        return o ? (r ? o.concat(r) : o.slice()) : r ? r.slice() : [];
      }
      function J(e, t) {
        const n = e.Event;
        n &&
          n.prototype &&
          t.patchMethod(
            n.prototype,
            "stopImmediatePropagation",
            (e) =>
              function (t, n) {
                (t[U] = !0), e && e.apply(t, n);
              },
          );
      }
      function Y(e, t, n, o, r) {
        const s = Zone.__symbol__(o);
        if (t[s]) return;
        const a = (t[s] = t[o]);
        (t[o] = function (s, i, c) {
          return (
            i &&
              i.prototype &&
              r.forEach(function (t) {
                const r = `${n}.${o}::` + t,
                  s = i.prototype;
                if (s.hasOwnProperty(t)) {
                  const n = e.ObjectGetOwnPropertyDescriptor(s, t);
                  n && n.value
                    ? ((n.value = e.wrapWithCurrentZone(n.value, r)),
                      e._redefineProperty(i.prototype, t, n))
                    : s[t] && (s[t] = e.wrapWithCurrentZone(s[t], r));
                } else s[t] && (s[t] = e.wrapWithCurrentZone(s[t], r));
              }),
            a.call(t, s, i, c)
          );
        }),
          e.attachOriginToPatched(t[o], a);
      }
      const K = [
          "absolutedeviceorientation",
          "afterinput",
          "afterprint",
          "appinstalled",
          "beforeinstallprompt",
          "beforeprint",
          "beforeunload",
          "devicelight",
          "devicemotion",
          "deviceorientation",
          "deviceorientationabsolute",
          "deviceproximity",
          "hashchange",
          "languagechange",
          "message",
          "mozbeforepaint",
          "offline",
          "online",
          "paint",
          "pageshow",
          "pagehide",
          "popstate",
          "rejectionhandled",
          "storage",
          "unhandledrejection",
          "unload",
          "userproximity",
          "vrdisplayconnected",
          "vrdisplaydisconnected",
          "vrdisplaypresentchange",
        ],
        Q = [
          "encrypted",
          "waitingforkey",
          "msneedkey",
          "mozinterruptbegin",
          "mozinterruptend",
        ],
        ee = ["load"],
        te = [
          "blur",
          "error",
          "focus",
          "load",
          "resize",
          "scroll",
          "messageerror",
        ],
        ne = ["bounce", "finish", "start"],
        oe = [
          "loadstart",
          "progress",
          "abort",
          "error",
          "load",
          "progress",
          "timeout",
          "loadend",
          "readystatechange",
        ],
        re = [
          "upgradeneeded",
          "complete",
          "abort",
          "success",
          "error",
          "blocked",
          "versionchange",
          "close",
        ],
        se = ["close", "error", "open", "message"],
        ae = ["error", "message"],
        ie = [
          "abort",
          "animationcancel",
          "animationend",
          "animationiteration",
          "auxclick",
          "beforeinput",
          "blur",
          "cancel",
          "canplay",
          "canplaythrough",
          "change",
          "compositionstart",
          "compositionupdate",
          "compositionend",
          "cuechange",
          "click",
          "close",
          "contextmenu",
          "curechange",
          "dblclick",
          "drag",
          "dragend",
          "dragenter",
          "dragexit",
          "dragleave",
          "dragover",
          "drop",
          "durationchange",
          "emptied",
          "ended",
          "error",
          "focus",
          "focusin",
          "focusout",
          "gotpointercapture",
          "input",
          "invalid",
          "keydown",
          "keypress",
          "keyup",
          "load",
          "loadstart",
          "loadeddata",
          "loadedmetadata",
          "lostpointercapture",
          "mousedown",
          "mouseenter",
          "mouseleave",
          "mousemove",
          "mouseout",
          "mouseover",
          "mouseup",
          "mousewheel",
          "orientationchange",
          "pause",
          "play",
          "playing",
          "pointercancel",
          "pointerdown",
          "pointerenter",
          "pointerleave",
          "pointerlockchange",
          "mozpointerlockchange",
          "webkitpointerlockerchange",
          "pointerlockerror",
          "mozpointerlockerror",
          "webkitpointerlockerror",
          "pointermove",
          "pointout",
          "pointerover",
          "pointerup",
          "progress",
          "ratechange",
          "reset",
          "resize",
          "scroll",
          "seeked",
          "seeking",
          "select",
          "selectionchange",
          "selectstart",
          "show",
          "sort",
          "stalled",
          "submit",
          "suspend",
          "timeupdate",
          "volumechange",
          "touchcancel",
          "touchmove",
          "touchstart",
          "touchend",
          "transitioncancel",
          "transitionend",
          "waiting",
          "wheel",
        ].concat(
          [
            "webglcontextrestored",
            "webglcontextlost",
            "webglcontextcreationerror",
          ],
          ["autocomplete", "autocompleteerror"],
          ["toggle"],
          [
            "afterscriptexecute",
            "beforescriptexecute",
            "DOMContentLoaded",
            "freeze",
            "fullscreenchange",
            "mozfullscreenchange",
            "webkitfullscreenchange",
            "msfullscreenchange",
            "fullscreenerror",
            "mozfullscreenerror",
            "webkitfullscreenerror",
            "msfullscreenerror",
            "readystatechange",
            "visibilitychange",
            "resume",
          ],
          K,
          [
            "beforecopy",
            "beforecut",
            "beforepaste",
            "copy",
            "cut",
            "paste",
            "dragstart",
            "loadend",
            "animationstart",
            "search",
            "transitionrun",
            "transitionstart",
            "webkitanimationend",
            "webkitanimationiteration",
            "webkitanimationstart",
            "webkittransitionend",
          ],
          [
            "activate",
            "afterupdate",
            "ariarequest",
            "beforeactivate",
            "beforedeactivate",
            "beforeeditfocus",
            "beforeupdate",
            "cellchange",
            "controlselect",
            "dataavailable",
            "datasetchanged",
            "datasetcomplete",
            "errorupdate",
            "filterchange",
            "layoutcomplete",
            "losecapture",
            "move",
            "moveend",
            "movestart",
            "propertychange",
            "resizeend",
            "resizestart",
            "rowenter",
            "rowexit",
            "rowsdelete",
            "rowsinserted",
            "command",
            "compassneedscalibration",
            "deactivate",
            "help",
            "mscontentzoom",
            "msmanipulationstatechanged",
            "msgesturechange",
            "msgesturedoubletap",
            "msgestureend",
            "msgesturehold",
            "msgesturestart",
            "msgesturetap",
            "msgotpointercapture",
            "msinertiastart",
            "mslostpointercapture",
            "mspointercancel",
            "mspointerdown",
            "mspointerenter",
            "mspointerhover",
            "mspointerleave",
            "mspointermove",
            "mspointerout",
            "mspointerover",
            "mspointerup",
            "pointerout",
            "mssitemodejumplistitemremoved",
            "msthumbnailclick",
            "stop",
            "storagecommit",
          ],
        );
      function ce(e, t, n) {
        if (!n || 0 === n.length) return t;
        const o = n.filter((t) => t.target === e);
        if (!o || 0 === o.length) return t;
        const r = o[0].ignoreProperties;
        return t.filter((e) => -1 === r.indexOf(e));
      }
      function le(e, t, n, o) {
        e && z(e, ce(e, t, n), o);
      }
      function ue(e, t) {
        if (Z && !D) return;
        if (Zone[e.symbol("patchEvents")]) return;
        const n = "undefined" != typeof WebSocket,
          o = t.__Zone_ignore_on_properties;
        if (S) {
          const e = window,
            t = A() ? [{ target: e, ignoreProperties: ["error"] }] : [];
          le(e, ie.concat(["messageerror"]), o ? o.concat(t) : o, s(e)),
            le(Document.prototype, ie, o),
            void 0 !== e.SVGElement && le(e.SVGElement.prototype, ie, o),
            le(Element.prototype, ie, o),
            le(HTMLElement.prototype, ie, o),
            le(HTMLMediaElement.prototype, Q, o),
            le(HTMLFrameSetElement.prototype, K.concat(te), o),
            le(HTMLBodyElement.prototype, K.concat(te), o),
            le(HTMLFrameElement.prototype, ee, o),
            le(HTMLIFrameElement.prototype, ee, o);
          const n = e.HTMLMarqueeElement;
          n && le(n.prototype, ne, o);
          const r = e.Worker;
          r && le(r.prototype, ae, o);
        }
        const r = t.XMLHttpRequest;
        r && le(r.prototype, oe, o);
        const a = t.XMLHttpRequestEventTarget;
        a && le(a && a.prototype, oe, o),
          "undefined" != typeof IDBIndex &&
            (le(IDBIndex.prototype, re, o),
            le(IDBRequest.prototype, re, o),
            le(IDBOpenDBRequest.prototype, re, o),
            le(IDBDatabase.prototype, re, o),
            le(IDBTransaction.prototype, re, o),
            le(IDBCursor.prototype, re, o)),
          n && le(WebSocket.prototype, se, o);
      }
      Zone.__load_patch("util", (e, t, n) => {
        (n.patchOnProperties = z),
          (n.patchMethod = R),
          (n.bindArguments = b),
          (n.patchMacroTask = M);
        const s = t.__symbol__("BLACK_LISTED_EVENTS"),
          u = t.__symbol__("UNPATCHED_EVENTS");
        e[u] && (e[s] = e[u]),
          e[s] && (t[s] = t[u] = e[s]),
          (n.patchEventPrototype = J),
          (n.patchEventTarget = $),
          (n.isIEOrEdge = H),
          (n.ObjectDefineProperty = r),
          (n.ObjectGetOwnPropertyDescriptor = o),
          (n.ObjectCreate = a),
          (n.ArraySlice = i),
          (n.patchClass = I),
          (n.wrapWithCurrentZone = g),
          (n.filterProperties = ce),
          (n.attachOriginToPatched = N),
          (n._redefineProperty = Object.defineProperty),
          (n.patchCallbacks = Y),
          (n.getGlobalObjects = () => ({
            globalSources: B,
            zoneSymbolEventNames: G,
            eventNames: ie,
            isBrowser: S,
            isMix: D,
            isNode: Z,
            TRUE_STR: p,
            FALSE_STR: f,
            ZONE_SYMBOL_PREFIX: d,
            ADD_EVENT_LISTENER_STR: c,
            REMOVE_EVENT_LISTENER_STR: l,
          }));
      });
      const he = k("zoneTask");
      function pe(e, t, n, o) {
        let r = null,
          s = null;
        n += o;
        const a = {};
        function i(t) {
          const n = t.data;
          return (
            (n.args[0] = function () {
              return t.invoke.apply(this, arguments);
            }),
            (n.handleId = r.apply(e, n.args)),
            t
          );
        }
        function c(t) {
          return s.call(e, t.data.handleId);
        }
        (r = R(
          e,
          (t += o),
          (n) =>
            function (r, s) {
              if ("function" == typeof s[0]) {
                const e = {
                    isPeriodic: "Interval" === o,
                    delay:
                      "Timeout" === o || "Interval" === o ? s[1] || 0 : void 0,
                    args: s,
                  },
                  n = s[0];
                s[0] = function () {
                  try {
                    return n.apply(this, arguments);
                  } finally {
                    e.isPeriodic ||
                      ("number" == typeof e.handleId
                        ? delete a[e.handleId]
                        : e.handleId && (e.handleId[he] = null));
                  }
                };
                const r = _(t, s[0], e, i, c);
                if (!r) return r;
                const l = r.data.handleId;
                return (
                  "number" == typeof l ? (a[l] = r) : l && (l[he] = r),
                  l &&
                    l.ref &&
                    l.unref &&
                    "function" == typeof l.ref &&
                    "function" == typeof l.unref &&
                    ((r.ref = l.ref.bind(l)), (r.unref = l.unref.bind(l))),
                  "number" == typeof l || l ? l : r
                );
              }
              return n.apply(e, s);
            },
        )),
          (s = R(
            e,
            n,
            (t) =>
              function (n, o) {
                const r = o[0];
                let s;
                "number" == typeof r
                  ? (s = a[r])
                  : ((s = r && r[he]), s || (s = r)),
                  s && "string" == typeof s.type
                    ? "notScheduled" !== s.state &&
                      ((s.cancelFn && s.data.isPeriodic) || 0 === s.runCount) &&
                      ("number" == typeof r ? delete a[r] : r && (r[he] = null),
                      s.zone.cancelTask(s))
                    : t.apply(e, o);
              },
          ));
      }
      function fe(e, t) {
        if (Zone[t.symbol("patchEventTarget")]) return;
        const {
          eventNames: n,
          zoneSymbolEventNames: o,
          TRUE_STR: r,
          FALSE_STR: s,
          ZONE_SYMBOL_PREFIX: a,
        } = t.getGlobalObjects();
        for (let c = 0; c < n.length; c++) {
          const e = n[c],
            t = a + (e + s),
            i = a + (e + r);
          (o[e] = {}), (o[e][s] = t), (o[e][r] = i);
        }
        const i = e.EventTarget;
        return i && i.prototype
          ? (t.patchEventTarget(e, [i && i.prototype]), !0)
          : void 0;
      }
      Zone.__load_patch("legacy", (e) => {
        const t = e[Zone.__symbol__("legacyPatch")];
        t && t();
      }),
        Zone.__load_patch("queueMicrotask", (e, t, n) => {
          n.patchMethod(
            e,
            "queueMicrotask",
            (e) =>
              function (e, n) {
                t.current.scheduleMicroTask("queueMicrotask", n[0]);
              },
          );
        }),
        Zone.__load_patch("timers", (e) => {
          const t = "set",
            n = "clear";
          pe(e, t, n, "Timeout"),
            pe(e, t, n, "Interval"),
            pe(e, t, n, "Immediate");
        }),
        Zone.__load_patch("requestAnimationFrame", (e) => {
          pe(e, "request", "cancel", "AnimationFrame"),
            pe(e, "mozRequest", "mozCancel", "AnimationFrame"),
            pe(e, "webkitRequest", "webkitCancel", "AnimationFrame");
        }),
        Zone.__load_patch("blocking", (e, t) => {
          const n = ["alert", "prompt", "confirm"];
          for (let o = 0; o < n.length; o++)
            R(
              e,
              n[o],
              (n, o, r) =>
                function (o, s) {
                  return t.current.run(n, e, s, r);
                },
            );
        }),
        Zone.__load_patch("EventTarget", (e, t, n) => {
          !(function (e, t) {
            t.patchEventPrototype(e, t);
          })(e, n),
            fe(e, n);
          const o = e.XMLHttpRequestEventTarget;
          o && o.prototype && n.patchEventTarget(e, [o.prototype]);
        }),
        Zone.__load_patch("MutationObserver", (e, t, n) => {
          I("MutationObserver"), I("WebKitMutationObserver");
        }),
        Zone.__load_patch("IntersectionObserver", (e, t, n) => {
          I("IntersectionObserver");
        }),
        Zone.__load_patch("FileReader", (e, t, n) => {
          I("FileReader");
        }),
        Zone.__load_patch("on_property", (e, t, n) => {
          ue(n, e);
        }),
        Zone.__load_patch("customElements", (e, t, n) => {
          !(function (e, t) {
            const { isBrowser: n, isMix: o } = t.getGlobalObjects();
            (n || o) &&
              e.customElements &&
              "customElements" in e &&
              t.patchCallbacks(
                t,
                e.customElements,
                "customElements",
                "define",
                [
                  "connectedCallback",
                  "disconnectedCallback",
                  "adoptedCallback",
                  "attributeChangedCallback",
                ],
              );
          })(e, n);
        }),
        Zone.__load_patch("XHR", (e, t) => {
          !(function (e) {
            const c = e.XMLHttpRequest;
            if (!c) return;
            const l = c.prototype;
            let p = l[u],
              f = l[h];
            if (!p) {
              const t = e.XMLHttpRequestEventTarget;
              if (t) {
                const e = t.prototype;
                (p = e[u]), (f = e[h]);
              }
            }
            const d = "readystatechange",
              g = "scheduled";
            function m(e) {
              const o = e.data,
                a = o.target;
              (a[s] = !1), (a[i] = !1);
              const c = a[r];
              p || ((p = a[u]), (f = a[h])), c && f.call(a, d, c);
              const l = (a[r] = () => {
                if (a.readyState === a.DONE)
                  if (!o.aborted && a[s] && e.state === g) {
                    const n = a[t.__symbol__("loadfalse")];
                    if (0 !== a.status && n && n.length > 0) {
                      const r = e.invoke;
                      (e.invoke = function () {
                        const n = a[t.__symbol__("loadfalse")];
                        for (let t = 0; t < n.length; t++)
                          n[t] === e && n.splice(t, 1);
                        o.aborted || e.state !== g || r.call(e);
                      }),
                        n.push(e);
                    } else e.invoke();
                  } else o.aborted || !1 !== a[s] || (a[i] = !0);
              });
              return (
                p.call(a, d, l),
                a[n] || (a[n] = e),
                w.apply(a, o.args),
                (a[s] = !0),
                e
              );
            }
            function y() {}
            function v(e) {
              const t = e.data;
              return (t.aborted = !0), Z.apply(t.target, t.args);
            }
            const T = R(
                l,
                "open",
                () =>
                  function (e, t) {
                    return (e[o] = 0 == t[2]), (e[a] = t[1]), T.apply(e, t);
                  },
              ),
              b = k("fetchTaskAborting"),
              E = k("fetchTaskScheduling"),
              w = R(
                l,
                "send",
                () =>
                  function (e, n) {
                    if (!0 === t.current[E]) return w.apply(e, n);
                    if (e[o]) return w.apply(e, n);
                    {
                      const t = {
                          target: e,
                          url: e[a],
                          isPeriodic: !1,
                          args: n,
                          aborted: !1,
                        },
                        o = _("XMLHttpRequest.send", y, t, m, v);
                      e &&
                        !0 === e[i] &&
                        !t.aborted &&
                        o.state === g &&
                        o.invoke();
                    }
                  },
              ),
              Z = R(
                l,
                "abort",
                () =>
                  function (e, o) {
                    const r = e[n];
                    if (r && "string" == typeof r.type) {
                      if (null == r.cancelFn || (r.data && r.data.aborted))
                        return;
                      r.zone.cancelTask(r);
                    } else if (!0 === t.current[b]) return Z.apply(e, o);
                  },
              );
          })(e);
          const n = k("xhrTask"),
            o = k("xhrSync"),
            r = k("xhrListener"),
            s = k("xhrScheduled"),
            a = k("xhrURL"),
            i = k("xhrErrorBeforeScheduled");
        }),
        Zone.__load_patch("geolocation", (e) => {
          e.navigator &&
            e.navigator.geolocation &&
            (function (e, t) {
              const n = e.constructor.name;
              for (let r = 0; r < t.length; r++) {
                const s = t[r],
                  a = e[s];
                if (a) {
                  if (!E(o(e, s))) continue;
                  e[s] = ((e) => {
                    const t = function () {
                      return e.apply(this, b(arguments, n + "." + s));
                    };
                    return N(t, e), t;
                  })(a);
                }
              }
            })(e.navigator.geolocation, [
              "getCurrentPosition",
              "watchPosition",
            ]);
        }),
        Zone.__load_patch("PromiseRejectionEvent", (e, t) => {
          function n(t) {
            return function (n) {
              X(e, t).forEach((o) => {
                const r = e.PromiseRejectionEvent;
                if (r) {
                  const e = new r(t, {
                    promise: n.promise,
                    reason: n.rejection,
                  });
                  o.invoke(e);
                }
              });
            };
          }
          e.PromiseRejectionEvent &&
            ((t[k("unhandledPromiseRejectionHandler")] =
              n("unhandledrejection")),
            (t[k("rejectionHandledHandler")] = n("rejectionhandled")));
        });
    },
  },
  [[1, 0]],
]);

