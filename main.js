(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (t, e, n) {
      t.exports = n("zUnb");
    },
    PSD3: function (t, e, n) {
      (t.exports = (function () {
        "use strict";
        function t(e) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(e);
        }
        function e(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function r(t, e, r) {
          return e && n(t.prototype, e), r && n(t, r), t;
        }
        function s() {
          return (s =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
        }
        function i(t) {
          return (i = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function o(t, e) {
          return (o =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function a() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function c(t, e, n) {
          return (c = a()
            ? Reflect.construct
            : function (t, e, n) {
                var r = [null];
                r.push.apply(r, e);
                var s = new (Function.bind.apply(t, r))();
                return n && o(s, n.prototype), s;
              }).apply(null, arguments);
        }
        function l(t, e) {
          return !e || ("object" != typeof e && "function" != typeof e)
            ? (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t)
            : e;
        }
        function u(t, e, n) {
          return (u =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (t, e, n) {
                  var r = (function (t, e) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(t, e) &&
                      null !== (t = i(t));

                    );
                    return t;
                  })(t, e);
                  if (r) {
                    var s = Object.getOwnPropertyDescriptor(r, e);
                    return s.get ? s.get.call(n) : s.value;
                  }
                })(t, e, n || t);
        }
        var h = "SweetAlert2:",
          d = function (t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
          },
          f = function (t) {
            return Object.keys(t).map(function (e) {
              return t[e];
            });
          },
          p = function (t) {
            return Array.prototype.slice.call(t);
          },
          g = function (e) {
            console.warn(
              "".concat(h, " ").concat("object" === t(e) ? e.join(" ") : e),
            );
          },
          m = function (t) {
            console.error("".concat(h, " ").concat(t));
          },
          w = [],
          y = function (t) {
            return "function" == typeof t ? t() : t;
          },
          v = function (t) {
            return t && "function" == typeof t.toPromise;
          },
          b = function (t) {
            return v(t) ? t.toPromise() : Promise.resolve(t);
          },
          _ = function (t) {
            return t && Promise.resolve(t) === t;
          },
          k = Object.freeze({
            cancel: "cancel",
            backdrop: "backdrop",
            close: "close",
            esc: "esc",
            timer: "timer",
          }),
          x = function (e) {
            return (
              e instanceof Element ||
              (function (e) {
                return "object" === t(e) && e.jquery;
              })(e)
            );
          },
          C = function (t) {
            var e = {};
            for (var n in t) e[t[n]] = "swal2-" + t[n];
            return e;
          },
          S = C([
            "container",
            "shown",
            "height-auto",
            "iosfix",
            "popup",
            "modal",
            "no-backdrop",
            "no-transition",
            "toast",
            "toast-shown",
            "show",
            "hide",
            "close",
            "title",
            "header",
            "content",
            "html-container",
            "actions",
            "confirm",
            "deny",
            "cancel",
            "footer",
            "icon",
            "icon-content",
            "image",
            "input",
            "file",
            "range",
            "select",
            "radio",
            "checkbox",
            "label",
            "textarea",
            "inputerror",
            "input-label",
            "validation-message",
            "progress-steps",
            "active-progress-step",
            "progress-step",
            "progress-step-line",
            "loader",
            "loading",
            "styled",
            "top",
            "top-start",
            "top-end",
            "top-left",
            "top-right",
            "center",
            "center-start",
            "center-end",
            "center-left",
            "center-right",
            "bottom",
            "bottom-start",
            "bottom-end",
            "bottom-left",
            "bottom-right",
            "grow-row",
            "grow-column",
            "grow-fullscreen",
            "rtl",
            "timer-progress-bar",
            "timer-progress-bar-container",
            "scrollbar-measure",
            "icon-success",
            "icon-warning",
            "icon-info",
            "icon-question",
            "icon-error",
          ]),
          I = C(["success", "warning", "info", "question", "error"]),
          A = function () {
            return document.body.querySelector(".".concat(S.container));
          },
          T = function (t) {
            var e = A();
            return e ? e.querySelector(t) : null;
          },
          E = function (t) {
            return T(".".concat(t));
          },
          O = function () {
            return E(S.popup);
          },
          P = function () {
            return E(S.icon);
          },
          R = function () {
            return E(S.title);
          },
          j = function () {
            return E(S.content);
          },
          L = function () {
            return E(S["html-container"]);
          },
          N = function () {
            return E(S.image);
          },
          D = function () {
            return E(S["progress-steps"]);
          },
          F = function () {
            return E(S["validation-message"]);
          },
          $ = function () {
            return T(".".concat(S.actions, " .").concat(S.confirm));
          },
          M = function () {
            return T(".".concat(S.actions, " .").concat(S.deny));
          },
          H = function () {
            return T(".".concat(S.loader));
          },
          U = function () {
            return T(".".concat(S.actions, " .").concat(S.cancel));
          },
          B = function () {
            return E(S.actions);
          },
          V = function () {
            return E(S.header);
          },
          z = function () {
            return E(S.footer);
          },
          q = function () {
            return E(S["timer-progress-bar"]);
          },
          G = function () {
            return E(S.close);
          },
          W = function () {
            var t = p(
                O().querySelectorAll(
                  '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])',
                ),
              ).sort(function (t, e) {
                return (t = parseInt(t.getAttribute("tabindex"))) >
                  (e = parseInt(e.getAttribute("tabindex")))
                  ? 1
                  : t < e
                    ? -1
                    : 0;
              }),
              e = p(
                O().querySelectorAll(
                  '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',
                ),
              ).filter(function (t) {
                return "-1" !== t.getAttribute("tabindex");
              });
            return (function (t) {
              for (var e = [], n = 0; n < t.length; n++)
                -1 === e.indexOf(t[n]) && e.push(t[n]);
              return e;
            })(t.concat(e)).filter(function (t) {
              return dt(t);
            });
          },
          Z = function () {
            return !K() && !document.body.classList.contains(S["no-backdrop"]);
          },
          K = function () {
            return document.body.classList.contains(S["toast-shown"]);
          },
          Q = { previousBodyPadding: null },
          J = function (t, e) {
            if (((t.textContent = ""), e)) {
              var n = new DOMParser().parseFromString(e, "text/html");
              p(n.querySelector("head").childNodes).forEach(function (e) {
                t.appendChild(e);
              }),
                p(n.querySelector("body").childNodes).forEach(function (e) {
                  t.appendChild(e);
                });
            }
          },
          Y = function (t, e) {
            if (!e) return !1;
            for (var n = e.split(/\s+/), r = 0; r < n.length; r++)
              if (!t.classList.contains(n[r])) return !1;
            return !0;
          },
          X = function (e, n, r) {
            if (
              ((function (t, e) {
                p(t.classList).forEach(function (n) {
                  -1 === f(S).indexOf(n) &&
                    -1 === f(I).indexOf(n) &&
                    -1 === f(e.showClass).indexOf(n) &&
                    t.classList.remove(n);
                });
              })(e, n),
              n.customClass && n.customClass[r])
            ) {
              if (
                "string" != typeof n.customClass[r] &&
                !n.customClass[r].forEach
              )
                return g(
                  "Invalid type of customClass."
                    .concat(r, '! Expected string or iterable object, got "')
                    .concat(t(n.customClass[r]), '"'),
                );
              st(e, n.customClass[r]);
            }
          };
        function tt(t, e) {
          if (!e) return null;
          switch (e) {
            case "select":
            case "textarea":
            case "file":
              return ot(t, S[e]);
            case "checkbox":
              return t.querySelector(".".concat(S.checkbox, " input"));
            case "radio":
              return (
                t.querySelector(".".concat(S.radio, " input:checked")) ||
                t.querySelector(".".concat(S.radio, " input:first-child"))
              );
            case "range":
              return t.querySelector(".".concat(S.range, " input"));
            default:
              return ot(t, S.input);
          }
        }
        var et,
          nt = function (t) {
            if ((t.focus(), "file" !== t.type)) {
              var e = t.value;
              (t.value = ""), (t.value = e);
            }
          },
          rt = function (t, e, n) {
            t &&
              e &&
              ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)),
              e.forEach(function (e) {
                t.forEach
                  ? t.forEach(function (t) {
                      n ? t.classList.add(e) : t.classList.remove(e);
                    })
                  : n
                    ? t.classList.add(e)
                    : t.classList.remove(e);
              }));
          },
          st = function (t, e) {
            rt(t, e, !0);
          },
          it = function (t, e) {
            rt(t, e, !1);
          },
          ot = function (t, e) {
            for (var n = 0; n < t.childNodes.length; n++)
              if (Y(t.childNodes[n], e)) return t.childNodes[n];
          },
          at = function (t, e, n) {
            n === "".concat(parseInt(n)) && (n = parseInt(n)),
              n || 0 === parseInt(n)
                ? (t.style[e] = "number" == typeof n ? "".concat(n, "px") : n)
                : t.style.removeProperty(e);
          },
          ct = function (t) {
            t.style.display =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "flex";
          },
          lt = function (t) {
            t.style.display = "none";
          },
          ut = function (t, e, n, r) {
            var s = t.querySelector(e);
            s && (s.style[n] = r);
          },
          ht = function (t, e, n) {
            e ? ct(t, n) : lt(t);
          },
          dt = function (t) {
            return !(
              !t ||
              !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
            );
          },
          ft = function (t) {
            return !!(t.scrollHeight > t.clientHeight);
          },
          pt = function (t) {
            var e = window.getComputedStyle(t),
              n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
              r = parseFloat(e.getPropertyValue("transition-duration") || "0");
            return n > 0 || r > 0;
          },
          gt = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = q();
            dt(n) &&
              (e && ((n.style.transition = "none"), (n.style.width = "100%")),
              setTimeout(function () {
                (n.style.transition = "width ".concat(t / 1e3, "s linear")),
                  (n.style.width = "0%");
              }, 10));
          },
          mt = function () {
            return (
              "undefined" == typeof window || "undefined" == typeof document
            );
          },
          wt = '\n <div aria-labelledby="'
            .concat(S.title, '" aria-describedby="')
            .concat(S.content, '" class="')
            .concat(S.popup, '" tabindex="-1">\n   <div class="')
            .concat(S.header, '">\n     <ul class="')
            .concat(S["progress-steps"], '"></ul>\n     <div class="')
            .concat(S.icon, '"></div>\n     <img class="')
            .concat(S.image, '" />\n     <h2 class="')
            .concat(S.title, '" id="')
            .concat(S.title, '"></h2>\n     <button type="button" class="')
            .concat(S.close, '"></button>\n   </div>\n   <div class="')
            .concat(S.content, '">\n     <div id="')
            .concat(S.content, '" class="')
            .concat(S["html-container"], '"></div>\n     <input class="')
            .concat(S.input, '" />\n     <input type="file" class="')
            .concat(S.file, '" />\n     <div class="')
            .concat(
              S.range,
              '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="',
            )
            .concat(S.select, '"></select>\n     <div class="')
            .concat(S.radio, '"></div>\n     <label for="')
            .concat(S.checkbox, '" class="')
            .concat(
              S.checkbox,
              '">\n       <input type="checkbox" />\n       <span class="',
            )
            .concat(S.label, '"></span>\n     </label>\n     <textarea class="')
            .concat(S.textarea, '"></textarea>\n     <div class="')
            .concat(S["validation-message"], '" id="')
            .concat(
              S["validation-message"],
              '"></div>\n   </div>\n   <div class="',
            )
            .concat(S.actions, '">\n     <div class="')
            .concat(S.loader, '"></div>\n     <button type="button" class="')
            .concat(
              S.confirm,
              '"></button>\n     <button type="button" class="',
            )
            .concat(S.deny, '"></button>\n     <button type="button" class="')
            .concat(S.cancel, '"></button>\n   </div>\n   <div class="')
            .concat(S.footer, '"></div>\n   <div class="')
            .concat(S["timer-progress-bar-container"], '">\n     <div class="')
            .concat(S["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
            .replace(/(^|\n)\s*/g, ""),
          yt = function (t) {
            on.isVisible() &&
              et !== t.target.value &&
              on.resetValidationMessage(),
              (et = t.target.value);
          },
          vt = function (e, n) {
            e instanceof HTMLElement
              ? n.appendChild(e)
              : "object" === t(e)
                ? bt(e, n)
                : e && J(n, e);
          },
          bt = function (t, e) {
            t.jquery ? _t(e, t) : J(e, t.toString());
          },
          _t = function (t, e) {
            if (((t.textContent = ""), 0 in e))
              for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
            else t.appendChild(e.cloneNode(!0));
          },
          kt = (function () {
            if (mt()) return !1;
            var t = document.createElement("div"),
              e = {
                WebkitAnimation: "webkitAnimationEnd",
                OAnimation: "oAnimationEnd oanimationend",
                animation: "animationend",
              };
            for (var n in e)
              if (
                Object.prototype.hasOwnProperty.call(e, n) &&
                void 0 !== t.style[n]
              )
                return e[n];
            return !1;
          })();
        function xt(t, e, n) {
          ht(t, n["show".concat(d(e), "Button")], "inline-block"),
            J(t, n["".concat(e, "ButtonText")]),
            t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]),
            (t.className = S[e]),
            X(t, n, "".concat(e, "Button")),
            st(t, n["".concat(e, "ButtonClass")]);
        }
        var Ct = {
            promise: new WeakMap(),
            innerParams: new WeakMap(),
            domCache: new WeakMap(),
          },
          St = [
            "input",
            "file",
            "range",
            "select",
            "radio",
            "checkbox",
            "textarea",
          ],
          It = function (t, e) {
            (t.placeholder && !e.inputPlaceholder) ||
              (t.placeholder = e.inputPlaceholder);
          },
          At = function (t, e, n) {
            if (n.inputLabel) {
              t.id = S.input;
              var r = document.createElement("label"),
                s = S["input-label"];
              r.setAttribute("for", t.id),
                (r.className = s),
                st(r, n.customClass.inputLabel),
                (r.innerText = n.inputLabel),
                e.insertAdjacentElement("beforebegin", r);
            }
          },
          Tt = function (t) {
            var e = S[t] ? S[t] : S.input;
            return ot(j(), e);
          },
          Et = {};
        (Et.text =
          Et.email =
          Et.password =
          Et.number =
          Et.tel =
          Et.url =
            function (e, n) {
              return (
                "string" == typeof n.inputValue ||
                "number" == typeof n.inputValue
                  ? (e.value = n.inputValue)
                  : _(n.inputValue) ||
                    g(
                      'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                        t(n.inputValue),
                        '"',
                      ),
                    ),
                At(e, e, n),
                It(e, n),
                (e.type = n.input),
                e
              );
            }),
          (Et.file = function (t, e) {
            return At(t, t, e), It(t, e), t;
          }),
          (Et.range = function (t, e) {
            var n = t.querySelector("input"),
              r = t.querySelector("output");
            return (
              (n.value = e.inputValue),
              (n.type = e.input),
              (r.value = e.inputValue),
              At(n, t, e),
              t
            );
          }),
          (Et.select = function (t, e) {
            if (((t.textContent = ""), e.inputPlaceholder)) {
              var n = document.createElement("option");
              J(n, e.inputPlaceholder),
                (n.value = ""),
                (n.disabled = !0),
                (n.selected = !0),
                t.appendChild(n);
            }
            return At(t, t, e), t;
          }),
          (Et.radio = function (t) {
            return (t.textContent = ""), t;
          }),
          (Et.checkbox = function (t, e) {
            var n = tt(j(), "checkbox");
            (n.value = 1),
              (n.id = S.checkbox),
              (n.checked = Boolean(e.inputValue));
            var r = t.querySelector("span");
            return J(r, e.inputPlaceholder), t;
          }),
          (Et.textarea = function (t, e) {
            (t.value = e.inputValue), It(t, e), At(t, t, e);
            var n = function (t) {
              return (
                parseInt(window.getComputedStyle(t).paddingLeft) +
                parseInt(window.getComputedStyle(t).paddingRight)
              );
            };
            if ("MutationObserver" in window) {
              var r = parseInt(window.getComputedStyle(O()).width);
              new MutationObserver(function () {
                var e = t.offsetWidth + n(O()) + n(j());
                O().style.width = e > r ? "".concat(e, "px") : null;
              }).observe(t, { attributes: !0, attributeFilter: ["style"] });
            }
            return t;
          });
        var Ot = function (t, e) {
            var n = L();
            X(n, e, "htmlContainer"),
              e.html
                ? (vt(e.html, n), ct(n, "block"))
                : e.text
                  ? ((n.textContent = e.text), ct(n, "block"))
                  : lt(n),
              (function (t, e) {
                var n = j(),
                  r = Ct.innerParams.get(t),
                  s = !r || e.input !== r.input;
                St.forEach(function (t) {
                  var r = S[t],
                    i = ot(n, r);
                  (function (t, e) {
                    var n = tt(j(), t);
                    if (n)
                      for (var r in ((function (t) {
                        for (var e = 0; e < t.attributes.length; e++) {
                          var n = t.attributes[e].name;
                          -1 === ["type", "value", "style"].indexOf(n) &&
                            t.removeAttribute(n);
                        }
                      })(n),
                      e))
                        ("range" === t && "placeholder" === r) ||
                          n.setAttribute(r, e[r]);
                  })(t, e.inputAttributes),
                    (i.className = r),
                    s && lt(i);
                }),
                  e.input &&
                    (s &&
                      (function (t) {
                        if (!Et[t.input])
                          return m(
                            'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
                              t.input,
                              '"',
                            ),
                          );
                        var e = Tt(t.input),
                          n = Et[t.input](e, t);
                        ct(n),
                          setTimeout(function () {
                            nt(n);
                          });
                      })(e),
                    (function (t) {
                      var e = Tt(t.input);
                      t.customClass && st(e, t.customClass.input);
                    })(e));
              })(t, e),
              X(j(), e, "content");
          },
          Pt = function (t, e) {
            for (var n in I) e.icon !== n && it(t, I[n]);
            st(t, I[e.icon]), Lt(t, e), Rt(), X(t, e, "icon");
          },
          Rt = function () {
            for (
              var t = O(),
                e = window
                  .getComputedStyle(t)
                  .getPropertyValue("background-color"),
                n = t.querySelectorAll(
                  "[class^=swal2-success-circular-line], .swal2-success-fix",
                ),
                r = 0;
              r < n.length;
              r++
            )
              n[r].style.backgroundColor = e;
          },
          jt = function (t, e) {
            (t.textContent = ""),
              J(
                t,
                e.iconHtml
                  ? Nt(e.iconHtml)
                  : "success" === e.icon
                    ? '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '
                    : "error" === e.icon
                      ? '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '
                      : Nt({ question: "?", warning: "!", info: "i" }[e.icon]),
              );
          },
          Lt = function (t, e) {
            if (e.iconColor) {
              (t.style.color = e.iconColor),
                (t.style.borderColor = e.iconColor);
              for (
                var n = 0,
                  r = [
                    ".swal2-success-line-tip",
                    ".swal2-success-line-long",
                    ".swal2-x-mark-line-left",
                    ".swal2-x-mark-line-right",
                  ];
                n < r.length;
                n++
              )
                ut(t, r[n], "backgroundColor", e.iconColor);
              ut(t, ".swal2-success-ring", "borderColor", e.iconColor);
            }
          },
          Nt = function (t) {
            return '<div class="'
              .concat(S["icon-content"], '">')
              .concat(t, "</div>");
          },
          Dt = [],
          Ft = function () {
            return A() && A().getAttribute("data-queue-step");
          },
          $t = function (t, e) {
            var n = V();
            X(n, e, "header"),
              (function (t, e) {
                var n = D();
                if (!e.progressSteps || 0 === e.progressSteps.length)
                  return lt(n);
                ct(n), (n.textContent = "");
                var r = parseInt(
                  void 0 === e.currentProgressStep
                    ? Ft()
                    : e.currentProgressStep,
                );
                r >= e.progressSteps.length &&
                  g(
                    "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)",
                  ),
                  e.progressSteps.forEach(function (t, s) {
                    var i = (function (t) {
                      var e = document.createElement("li");
                      return st(e, S["progress-step"]), J(e, t), e;
                    })(t);
                    if (
                      (n.appendChild(i),
                      s === r && st(i, S["active-progress-step"]),
                      s !== e.progressSteps.length - 1)
                    ) {
                      var o = (function (t) {
                        var e = document.createElement("li");
                        return (
                          st(e, S["progress-step-line"]),
                          t.progressStepsDistance &&
                            (e.style.width = t.progressStepsDistance),
                          e
                        );
                      })(e);
                      n.appendChild(o);
                    }
                  });
              })(0, e),
              (function (t, e) {
                var n = Ct.innerParams.get(t),
                  r = P();
                n && e.icon === n.icon
                  ? (jt(r, e), Pt(r, e))
                  : e.icon || e.iconHtml
                    ? e.icon && -1 === Object.keys(I).indexOf(e.icon)
                      ? (m(
                          'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                            e.icon,
                            '"',
                          ),
                        ),
                        lt(r))
                      : (ct(r), jt(r, e), Pt(r, e), st(r, e.showClass.icon))
                    : lt(r);
              })(t, e),
              (function (t, e) {
                var n = N();
                if (!e.imageUrl) return lt(n);
                ct(n, ""),
                  n.setAttribute("src", e.imageUrl),
                  n.setAttribute("alt", e.imageAlt),
                  at(n, "width", e.imageWidth),
                  at(n, "height", e.imageHeight),
                  (n.className = S.image),
                  X(n, e, "image");
              })(0, e),
              (function (t, e) {
                var n = R();
                ht(n, e.title || e.titleText),
                  e.title && vt(e.title, n),
                  e.titleText && (n.innerText = e.titleText),
                  X(n, e, "title");
              })(0, e),
              (function (t, e) {
                var n = G();
                J(n, e.closeButtonHtml),
                  X(n, e, "closeButton"),
                  ht(n, e.showCloseButton),
                  n.setAttribute("aria-label", e.closeButtonAriaLabel);
              })(0, e);
          },
          Mt = function (t, e) {
            (function (t, e) {
              var n = A(),
                r = O();
              e.toast
                ? (at(n, "width", e.width), (r.style.width = "100%"))
                : at(r, "width", e.width),
                at(r, "padding", e.padding),
                e.background && (r.style.background = e.background),
                lt(F()),
                (function (t, e) {
                  (t.className = ""
                    .concat(S.popup, " ")
                    .concat(dt(t) ? e.showClass.popup : "")),
                    e.toast
                      ? (st(
                          [document.documentElement, document.body],
                          S["toast-shown"],
                        ),
                        st(t, S.toast))
                      : st(t, S.modal),
                    X(t, e, "popup"),
                    "string" == typeof e.customClass && st(t, e.customClass),
                    e.icon && st(t, S["icon-".concat(e.icon)]);
                })(r, e);
            })(0, e),
              (function (t, e) {
                var n = A();
                if (n) {
                  (function (t, e) {
                    "string" == typeof e
                      ? (t.style.background = e)
                      : e ||
                        st(
                          [document.documentElement, document.body],
                          S["no-backdrop"],
                        );
                  })(n, e.backdrop),
                    !e.backdrop &&
                      e.allowOutsideClick &&
                      g(
                        '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`',
                      ),
                    (function (t, e) {
                      e in S
                        ? st(t, S[e])
                        : (g(
                            'The "position" parameter is not valid, defaulting to "center"',
                          ),
                          st(t, S.center));
                    })(n, e.position),
                    (function (t, e) {
                      if (e && "string" == typeof e) {
                        var n = "grow-".concat(e);
                        n in S && st(t, S[n]);
                      }
                    })(n, e.grow),
                    X(n, e, "container");
                  var r = document.body.getAttribute("data-swal2-queue-step");
                  r &&
                    (n.setAttribute("data-queue-step", r),
                    document.body.removeAttribute("data-swal2-queue-step"));
                }
              })(0, e),
              $t(t, e),
              Ot(t, e),
              (function (t, e) {
                var n = B(),
                  r = H(),
                  s = $(),
                  i = M(),
                  o = U();
                e.showConfirmButton ||
                  e.showDenyButton ||
                  e.showCancelButton ||
                  lt(n),
                  X(n, e, "actions"),
                  xt(s, "confirm", e),
                  xt(i, "deny", e),
                  xt(o, "cancel", e),
                  (function (t, e, n, r) {
                    if (!r.buttonsStyling) return it([t, e, n], S.styled);
                    st([t, e, n], S.styled),
                      r.confirmButtonColor &&
                        (t.style.backgroundColor = r.confirmButtonColor),
                      r.denyButtonColor &&
                        (e.style.backgroundColor = r.denyButtonColor),
                      r.cancelButtonColor &&
                        (n.style.backgroundColor = r.cancelButtonColor);
                  })(s, i, o, e),
                  e.reverseButtons &&
                    (n.insertBefore(o, r),
                    n.insertBefore(i, r),
                    n.insertBefore(s, r)),
                  J(r, e.loaderHtml),
                  X(r, e, "loader");
              })(0, e),
              (function (t, e) {
                var n = z();
                ht(n, e.footer), e.footer && vt(e.footer, n), X(n, e, "footer");
              })(0, e),
              "function" == typeof e.didRender
                ? e.didRender(O())
                : "function" == typeof e.onRender && e.onRender(O());
          },
          Ht = function () {
            return $() && $().click();
          },
          Ut = function (t) {
            var e = O();
            e || on.fire(), (e = O());
            var n = B(),
              r = H();
            !t && dt($()) && (t = $()),
              ct(n),
              t &&
                (lt(t), r.setAttribute("data-button-to-replace", t.className)),
              r.parentNode.insertBefore(r, t),
              st([e, n], S.loading),
              ct(r),
              e.setAttribute("data-loading", !0),
              e.setAttribute("aria-busy", !0),
              e.focus();
          },
          Bt = {},
          Vt = function () {
            if (Bt.timeout)
              return (
                (function () {
                  var t = q(),
                    e = parseInt(window.getComputedStyle(t).width);
                  t.style.removeProperty("transition"),
                    (t.style.width = "100%");
                  var n = parseInt(window.getComputedStyle(t).width),
                    r = parseInt((e / n) * 100);
                  t.style.removeProperty("transition"),
                    (t.style.width = "".concat(r, "%"));
                })(),
                Bt.timeout.stop()
              );
          },
          zt = function () {
            if (Bt.timeout) {
              var t = Bt.timeout.start();
              return gt(t), t;
            }
          },
          qt = !1,
          Gt = {},
          Wt = function (t) {
            for (var e = t.target; e && e !== document; e = e.parentNode)
              for (var n in Gt) {
                var r = e.getAttribute(n);
                if (r) return void Gt[n].fire({ template: r });
              }
          },
          Zt = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            icon: void 0,
            iconColor: void 0,
            iconHtml: void 0,
            template: void 0,
            toast: !1,
            animation: !0,
            showClass: {
              popup: "swal2-show",
              backdrop: "swal2-backdrop-show",
              icon: "swal2-icon-show",
            },
            hideClass: {
              popup: "swal2-hide",
              backdrop: "swal2-backdrop-hide",
              icon: "swal2-icon-hide",
            },
            customClass: {},
            target: "body",
            backdrop: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showDenyButton: !1,
            showCancelButton: !1,
            preConfirm: void 0,
            preDeny: void 0,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: void 0,
            denyButtonText: "No",
            denyButtonAriaLabel: "",
            denyButtonColor: void 0,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: void 0,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusDeny: !1,
            focusCancel: !1,
            returnFocus: !0,
            showCloseButton: !1,
            closeButtonHtml: "&times;",
            closeButtonAriaLabel: "Close this dialog",
            loaderHtml: "",
            showLoaderOnConfirm: !1,
            showLoaderOnDeny: !1,
            imageUrl: void 0,
            imageWidth: void 0,
            imageHeight: void 0,
            imageAlt: "",
            timer: void 0,
            timerProgressBar: !1,
            width: void 0,
            padding: void 0,
            background: void 0,
            input: void 0,
            inputPlaceholder: "",
            inputLabel: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputAttributes: {},
            inputValidator: void 0,
            returnInputValueOnDeny: !1,
            validationMessage: void 0,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: void 0,
            progressStepsDistance: void 0,
            onBeforeOpen: void 0,
            onOpen: void 0,
            willOpen: void 0,
            didOpen: void 0,
            onRender: void 0,
            didRender: void 0,
            onClose: void 0,
            onAfterClose: void 0,
            willClose: void 0,
            didClose: void 0,
            onDestroy: void 0,
            didDestroy: void 0,
            scrollbarPadding: !0,
          },
          Kt = [
            "allowEscapeKey",
            "allowOutsideClick",
            "background",
            "buttonsStyling",
            "cancelButtonAriaLabel",
            "cancelButtonColor",
            "cancelButtonText",
            "closeButtonAriaLabel",
            "closeButtonHtml",
            "confirmButtonAriaLabel",
            "confirmButtonColor",
            "confirmButtonText",
            "currentProgressStep",
            "customClass",
            "denyButtonAriaLabel",
            "denyButtonColor",
            "denyButtonText",
            "didClose",
            "didDestroy",
            "footer",
            "hideClass",
            "html",
            "icon",
            "iconColor",
            "iconHtml",
            "imageAlt",
            "imageHeight",
            "imageUrl",
            "imageWidth",
            "onAfterClose",
            "onClose",
            "onDestroy",
            "progressSteps",
            "returnFocus",
            "reverseButtons",
            "showCancelButton",
            "showCloseButton",
            "showConfirmButton",
            "showDenyButton",
            "text",
            "title",
            "titleText",
            "willClose",
          ],
          Qt = {
            animation: 'showClass" and "hideClass',
            onBeforeOpen: "willOpen",
            onOpen: "didOpen",
            onRender: "didRender",
            onClose: "willClose",
            onAfterClose: "didClose",
            onDestroy: "didDestroy",
          },
          Jt = [
            "allowOutsideClick",
            "allowEnterKey",
            "backdrop",
            "focusConfirm",
            "focusDeny",
            "focusCancel",
            "returnFocus",
            "heightAuto",
            "keydownListenerCapture",
          ],
          Yt = function (t) {
            return Object.prototype.hasOwnProperty.call(Zt, t);
          },
          Xt = function (t) {
            return Qt[t];
          },
          te = function (t) {
            Yt(t) || g('Unknown parameter "'.concat(t, '"'));
          },
          ee = function (t) {
            -1 !== Jt.indexOf(t) &&
              g('The parameter "'.concat(t, '" is incompatible with toasts'));
          },
          ne = function (t) {
            var e, n, r;
            Xt(t) &&
              ((e = t),
              (n = Xt(t)),
              (r = '"'
                .concat(
                  e,
                  '" is deprecated and will be removed in the next major release. Please use "',
                )
                .concat(n, '" instead.')),
              -1 === w.indexOf(r) && (w.push(r), g(r)));
          },
          re = function (t) {
            for (var e in t) te(e), t.toast && ee(e), ne(e);
          },
          se = Object.freeze({
            isValidParameter: Yt,
            isUpdatableParameter: function (t) {
              return -1 !== Kt.indexOf(t);
            },
            isDeprecatedParameter: Xt,
            argsToParams: function (e) {
              var n = {};
              return (
                "object" !== t(e[0]) || x(e[0])
                  ? ["title", "html", "icon"].forEach(function (r, s) {
                      var i = e[s];
                      "string" == typeof i || x(i)
                        ? (n[r] = i)
                        : void 0 !== i &&
                          m(
                            "Unexpected type of "
                              .concat(
                                r,
                                '! Expected "string" or "Element", got ',
                              )
                              .concat(t(i)),
                          );
                    })
                  : s(n, e[0]),
                n
              );
            },
            isVisible: function () {
              return dt(O());
            },
            clickConfirm: Ht,
            clickDeny: function () {
              return M() && M().click();
            },
            clickCancel: function () {
              return U() && U().click();
            },
            getContainer: A,
            getPopup: O,
            getTitle: R,
            getContent: j,
            getHtmlContainer: L,
            getImage: N,
            getIcon: P,
            getInputLabel: function () {
              return E(S["input-label"]);
            },
            getCloseButton: G,
            getActions: B,
            getConfirmButton: $,
            getDenyButton: M,
            getCancelButton: U,
            getLoader: H,
            getHeader: V,
            getFooter: z,
            getTimerProgressBar: q,
            getFocusableElements: W,
            getValidationMessage: F,
            isLoading: function () {
              return O().hasAttribute("data-loading");
            },
            fire: function () {
              for (
                var t = this, e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              return c(t, n);
            },
            mixin: function (t) {
              return (function (n) {
                !(function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function",
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                  })),
                    e && o(t, e);
                })(f, n);
                var c,
                  h,
                  d =
                    ((c = f),
                    (h = a()),
                    function () {
                      var t,
                        e = i(c);
                      if (h) {
                        var n = i(this).constructor;
                        t = Reflect.construct(e, arguments, n);
                      } else t = e.apply(this, arguments);
                      return l(this, t);
                    });
                function f() {
                  return e(this, f), d.apply(this, arguments);
                }
                return (
                  r(f, [
                    {
                      key: "_main",
                      value: function (e, n) {
                        return u(i(f.prototype), "_main", this).call(
                          this,
                          e,
                          s({}, t, n),
                        );
                      },
                    },
                  ]),
                  f
                );
              })(this);
            },
            queue: function (t) {
              var e = this;
              Dt = t;
              var n = function (t, e) {
                  (Dt = []), t(e);
                },
                r = [];
              return new Promise(function (t) {
                !(function s(i, o) {
                  i < Dt.length
                    ? (document.body.setAttribute("data-swal2-queue-step", i),
                      e.fire(Dt[i]).then(function (e) {
                        void 0 !== e.value
                          ? (r.push(e.value), s(i + 1, o))
                          : n(t, { dismiss: e.dismiss });
                      }))
                    : n(t, { value: r });
                })(0);
              });
            },
            getQueueStep: Ft,
            insertQueueStep: function (t, e) {
              return e && e < Dt.length ? Dt.splice(e, 0, t) : Dt.push(t);
            },
            deleteQueueStep: function (t) {
              void 0 !== Dt[t] && Dt.splice(t, 1);
            },
            showLoading: Ut,
            enableLoading: Ut,
            getTimerLeft: function () {
              return Bt.timeout && Bt.timeout.getTimerLeft();
            },
            stopTimer: Vt,
            resumeTimer: zt,
            toggleTimer: function () {
              var t = Bt.timeout;
              return t && (t.running ? Vt() : zt());
            },
            increaseTimer: function (t) {
              if (Bt.timeout) {
                var e = Bt.timeout.increase(t);
                return gt(e, !0), e;
              }
            },
            isTimerRunning: function () {
              return Bt.timeout && Bt.timeout.isRunning();
            },
            bindClickHandler: function () {
              (Gt[
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "data-swal-template"
              ] = this),
                qt || (document.body.addEventListener("click", Wt), (qt = !0));
            },
          });
        function ie() {
          if (Ct.innerParams.get(this)) {
            var t = Ct.domCache.get(this);
            lt(t.loader);
            var e = t.popup.getElementsByClassName(
              t.loader.getAttribute("data-button-to-replace"),
            );
            e.length
              ? ct(e[0], "inline-block")
              : !dt($()) && !dt(M()) && !dt(U()) && lt(t.actions),
              it([t.popup, t.actions], S.loading),
              t.popup.removeAttribute("aria-busy"),
              t.popup.removeAttribute("data-loading"),
              (t.confirmButton.disabled = !1),
              (t.denyButton.disabled = !1),
              (t.cancelButton.disabled = !1);
          }
        }
        var oe = function (t) {
            var e = t.target,
              n = A();
            return !(
              ae(t) ||
              ce(t) ||
              (e !== n &&
                (ft(n) ||
                  "INPUT" === e.tagName ||
                  (ft(j()) && j().contains(e))))
            );
          },
          ae = function (t) {
            return (
              t.touches &&
              t.touches.length &&
              "stylus" === t.touches[0].touchType
            );
          },
          ce = function (t) {
            return t.touches && t.touches.length > 1;
          },
          le = function () {
            return !!window.MSInputMethodContext && !!document.documentMode;
          },
          ue = function () {
            var t = A(),
              e = O();
            t.style.removeProperty("align-items"),
              e.offsetTop < 0 && (t.style.alignItems = "flex-start");
          },
          he = { swalPromiseResolve: new WeakMap() };
        function de(t, e, n, r) {
          K()
            ? ye(t, r)
            : ((function (t) {
                return new Promise(function (e) {
                  if (!t) return e();
                  var n = window.scrollX,
                    r = window.scrollY;
                  (Bt.restoreFocusTimeout = setTimeout(function () {
                    Bt.previousActiveElement && Bt.previousActiveElement.focus
                      ? (Bt.previousActiveElement.focus(),
                        (Bt.previousActiveElement = null))
                      : document.body && document.body.focus(),
                      e();
                  }, 100)),
                    void 0 !== n && void 0 !== r && window.scrollTo(n, r);
                });
              })(n).then(function () {
                return ye(t, r);
              }),
              Bt.keydownTarget.removeEventListener(
                "keydown",
                Bt.keydownHandler,
                { capture: Bt.keydownListenerCapture },
              ),
              (Bt.keydownHandlerAdded = !1)),
            e.parentNode &&
              !document.body.getAttribute("data-swal2-queue-step") &&
              e.parentNode.removeChild(e),
            Z() &&
              (null !== Q.previousBodyPadding &&
                ((document.body.style.paddingRight = "".concat(
                  Q.previousBodyPadding,
                  "px",
                )),
                (Q.previousBodyPadding = null)),
              (function () {
                if (Y(document.body, S.iosfix)) {
                  var t = parseInt(document.body.style.top, 10);
                  it(document.body, S.iosfix),
                    (document.body.style.top = ""),
                    (document.body.scrollTop = -1 * t);
                }
              })(),
              "undefined" != typeof window &&
                le() &&
                window.removeEventListener("resize", ue),
              p(document.body.children).forEach(function (t) {
                t.hasAttribute("data-previous-aria-hidden")
                  ? (t.setAttribute(
                      "aria-hidden",
                      t.getAttribute("data-previous-aria-hidden"),
                    ),
                    t.removeAttribute("data-previous-aria-hidden"))
                  : t.removeAttribute("aria-hidden");
              })),
            it(
              [document.documentElement, document.body],
              [S.shown, S["height-auto"], S["no-backdrop"], S["toast-shown"]],
            );
        }
        function fe(t) {
          var e = O();
          if (e) {
            t = pe(t);
            var n = Ct.innerParams.get(this);
            if (n && !Y(e, n.hideClass.popup)) {
              var r = he.swalPromiseResolve.get(this);
              it(e, n.showClass.popup), st(e, n.hideClass.popup);
              var s = A();
              it(s, n.showClass.backdrop),
                st(s, n.hideClass.backdrop),
                ge(this, e, n),
                r(t);
            }
          }
        }
        var pe = function (t) {
            return void 0 === t
              ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
              : s({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, t);
          },
          ge = function (t, e, n) {
            var r = A(),
              s = kt && pt(e),
              i = n.onAfterClose,
              o = n.didClose;
            me(e, n.willClose, n.onClose),
              s
                ? we(t, e, r, n.returnFocus, o || i)
                : de(t, r, n.returnFocus, o || i);
          },
          me = function (t, e, n) {
            null !== e && "function" == typeof e
              ? e(t)
              : null !== n && "function" == typeof n && n(t);
          },
          we = function (t, e, n, r, s) {
            (Bt.swalCloseEventFinishedCallback = de.bind(null, t, n, r, s)),
              e.addEventListener(kt, function (t) {
                t.target === e &&
                  (Bt.swalCloseEventFinishedCallback(),
                  delete Bt.swalCloseEventFinishedCallback);
              });
          },
          ye = function (t, e) {
            setTimeout(function () {
              "function" == typeof e && e(), t._destroy();
            });
          };
        function ve(t, e, n) {
          var r = Ct.domCache.get(t);
          e.forEach(function (t) {
            r[t].disabled = n;
          });
        }
        function be(t, e) {
          if (!t) return !1;
          if ("radio" === t.type)
            for (
              var n = t.parentNode.parentNode.querySelectorAll("input"), r = 0;
              r < n.length;
              r++
            )
              n[r].disabled = e;
          else t.disabled = e;
        }
        var _e = (function () {
            function t(n, r) {
              e(this, t),
                (this.callback = n),
                (this.remaining = r),
                (this.running = !1),
                this.start();
            }
            return (
              r(t, [
                {
                  key: "start",
                  value: function () {
                    return (
                      this.running ||
                        ((this.running = !0),
                        (this.started = new Date()),
                        (this.id = setTimeout(this.callback, this.remaining))),
                      this.remaining
                    );
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    return (
                      this.running &&
                        ((this.running = !1),
                        clearTimeout(this.id),
                        (this.remaining -= new Date() - this.started)),
                      this.remaining
                    );
                  },
                },
                {
                  key: "increase",
                  value: function (t) {
                    var e = this.running;
                    return (
                      e && this.stop(),
                      (this.remaining += t),
                      e && this.start(),
                      this.remaining
                    );
                  },
                },
                {
                  key: "getTimerLeft",
                  value: function () {
                    return (
                      this.running && (this.stop(), this.start()),
                      this.remaining
                    );
                  },
                },
                {
                  key: "isRunning",
                  value: function () {
                    return this.running;
                  },
                },
              ]),
              t
            );
          })(),
          ke = {
            email: function (t, e) {
              return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(
                t,
              )
                ? Promise.resolve()
                : Promise.resolve(e || "Invalid email address");
            },
            url: function (t, e) {
              return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                t,
              )
                ? Promise.resolve()
                : Promise.resolve(e || "Invalid URL");
            },
          };
        function xe(t) {
          (function (t) {
            t.inputValidator ||
              Object.keys(ke).forEach(function (e) {
                t.input === e && (t.inputValidator = ke[e]);
              });
          })(t),
            t.showLoaderOnConfirm &&
              !t.preConfirm &&
              g(
                "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request",
              ),
            (t.animation = y(t.animation)),
            (function (t) {
              (!t.target ||
                ("string" == typeof t.target &&
                  !document.querySelector(t.target)) ||
                ("string" != typeof t.target && !t.target.appendChild)) &&
                (g('Target parameter is not valid, defaulting to "body"'),
                (t.target = "body"));
            })(t),
            "string" == typeof t.title &&
              (t.title = t.title.split("\n").join("<br />")),
            (function (t) {
              var e,
                n,
                r,
                s,
                i,
                o,
                a,
                c,
                l,
                u,
                h =
                  !!(e = A()) &&
                  (e.parentNode.removeChild(e),
                  it(
                    [document.documentElement, document.body],
                    [S["no-backdrop"], S["toast-shown"], S["has-column"]],
                  ),
                  !0);
              if (mt()) m("SweetAlert2 requires document to initialize");
              else {
                var d = document.createElement("div");
                (d.className = S.container),
                  h && st(d, S["no-transition"]),
                  J(d, wt);
                var f =
                  "string" == typeof (u = t.target)
                    ? document.querySelector(u)
                    : u;
                f.appendChild(d),
                  (function (t) {
                    var e = O();
                    e.setAttribute("role", t.toast ? "alert" : "dialog"),
                      e.setAttribute(
                        "aria-live",
                        t.toast ? "polite" : "assertive",
                      ),
                      t.toast || e.setAttribute("aria-modal", "true");
                  })(t),
                  (function (t) {
                    "rtl" === window.getComputedStyle(t).direction &&
                      st(A(), S.rtl);
                  })(f),
                  (n = j()),
                  (r = ot(n, S.input)),
                  (s = ot(n, S.file)),
                  (i = n.querySelector(".".concat(S.range, " input"))),
                  (o = n.querySelector(".".concat(S.range, " output"))),
                  (a = ot(n, S.select)),
                  (c = n.querySelector(".".concat(S.checkbox, " input"))),
                  (l = ot(n, S.textarea)),
                  (r.oninput = yt),
                  (s.onchange = yt),
                  (a.onchange = yt),
                  (c.onchange = yt),
                  (l.oninput = yt),
                  (i.oninput = function (t) {
                    yt(t), (o.value = i.value);
                  }),
                  (i.onchange = function (t) {
                    yt(t), (i.nextSibling.value = i.value);
                  });
              }
            })(t);
        }
        var Ce,
          Se = ["swal-title", "swal-html", "swal-footer"],
          Ie = function (t, e) {
            p(t.attributes).forEach(function (n) {
              -1 === e.indexOf(n.name) &&
                g([
                  'Unrecognized attribute "'
                    .concat(n.name, '" on <')
                    .concat(t.tagName.toLowerCase(), ">."),
                  "".concat(
                    e.length
                      ? "Allowed attributes are: ".concat(e.join(", "))
                      : "To set the value, use HTML within the element.",
                  ),
                ]);
            });
          },
          Ae = function (t, e) {
            "function" == typeof e.didOpen
              ? setTimeout(function () {
                  return e.didOpen(t);
                })
              : "function" == typeof e.onOpen &&
                setTimeout(function () {
                  return e.onOpen(t);
                });
          },
          Te = function t(e) {
            var n = O();
            if (e.target === n) {
              var r = A();
              n.removeEventListener(kt, t), (r.style.overflowY = "auto");
            }
          },
          Ee = function (t, e) {
            kt && pt(e)
              ? ((t.style.overflowY = "hidden"), e.addEventListener(kt, Te))
              : (t.style.overflowY = "auto");
          },
          Oe = function (t, e, n) {
            (function () {
              if (
                ((/iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !window.MSStream) ||
                  ("MacIntel" === navigator.platform &&
                    navigator.maxTouchPoints > 1)) &&
                !Y(document.body, S.iosfix)
              ) {
                var t = document.body.scrollTop;
                (document.body.style.top = "".concat(-1 * t, "px")),
                  st(document.body, S.iosfix),
                  (function () {
                    var t,
                      e = A();
                    (e.ontouchstart = function (e) {
                      t = oe(e);
                    }),
                      (e.ontouchmove = function (e) {
                        t && (e.preventDefault(), e.stopPropagation());
                      });
                  })(),
                  navigator.userAgent.match(
                    /(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i,
                  ) ||
                    (O().scrollHeight > window.innerHeight - 44 &&
                      (A().style.paddingBottom = "".concat(44, "px")));
              }
            })(),
              "undefined" != typeof window &&
                le() &&
                (ue(), window.addEventListener("resize", ue)),
              e &&
                "hidden" !== n &&
                null === Q.previousBodyPadding &&
                document.body.scrollHeight > window.innerHeight &&
                ((Q.previousBodyPadding = parseInt(
                  window
                    .getComputedStyle(document.body)
                    .getPropertyValue("padding-right"),
                )),
                (document.body.style.paddingRight = "".concat(
                  Q.previousBodyPadding +
                    (function () {
                      var t = document.createElement("div");
                      (t.className = S["scrollbar-measure"]),
                        document.body.appendChild(t);
                      var e = t.getBoundingClientRect().width - t.clientWidth;
                      return document.body.removeChild(t), e;
                    })(),
                  "px",
                ))),
              setTimeout(function () {
                t.scrollTop = 0;
              });
          },
          Pe = function (t, e, n) {
            st(t, n.showClass.backdrop),
              e.style.setProperty("opacity", "0", "important"),
              ct(e),
              setTimeout(function () {
                st(e, n.showClass.popup), e.style.removeProperty("opacity");
              }, 10),
              st([document.documentElement, document.body], S.shown),
              n.heightAuto &&
                n.backdrop &&
                !n.toast &&
                st([document.documentElement, document.body], S["height-auto"]);
          },
          Re = {
            select: function (t, e, n) {
              var r = ot(t, S.select),
                s = function (t, e, r) {
                  var s = document.createElement("option");
                  (s.value = r),
                    J(s, e),
                    (s.selected = Le(r, n.inputValue)),
                    t.appendChild(s);
                };
              e.forEach(function (t) {
                var e = t[0],
                  n = t[1];
                if (Array.isArray(n)) {
                  var i = document.createElement("optgroup");
                  (i.label = e),
                    (i.disabled = !1),
                    r.appendChild(i),
                    n.forEach(function (t) {
                      return s(i, t[1], t[0]);
                    });
                } else s(r, n, e);
              }),
                r.focus();
            },
            radio: function (t, e, n) {
              var r = ot(t, S.radio);
              e.forEach(function (t) {
                var e = t[0],
                  s = t[1],
                  i = document.createElement("input"),
                  o = document.createElement("label");
                (i.type = "radio"),
                  (i.name = S.radio),
                  (i.value = e),
                  Le(e, n.inputValue) && (i.checked = !0);
                var a = document.createElement("span");
                J(a, s),
                  (a.className = S.label),
                  o.appendChild(i),
                  o.appendChild(a),
                  r.appendChild(o);
              });
              var s = r.querySelectorAll("input");
              s.length && s[0].focus();
            },
          },
          je = function e(n) {
            var r = [];
            return (
              "undefined" != typeof Map && n instanceof Map
                ? n.forEach(function (n, s) {
                    var i = n;
                    "object" === t(i) && (i = e(i)), r.push([s, i]);
                  })
                : Object.keys(n).forEach(function (s) {
                    var i = n[s];
                    "object" === t(i) && (i = e(i)), r.push([s, i]);
                  }),
              r
            );
          },
          Le = function (t, e) {
            return e && e.toString() === t.toString();
          },
          Ne = function (t, e, n) {
            var r = (function (t, e) {
              var n = t.getInput();
              if (!n) return null;
              switch (e.input) {
                case "checkbox":
                  return (function (t) {
                    return t.checked ? 1 : 0;
                  })(n);
                case "radio":
                  return (function (t) {
                    return t.checked ? t.value : null;
                  })(n);
                case "file":
                  return (function (t) {
                    return t.files.length
                      ? null !== t.getAttribute("multiple")
                        ? t.files
                        : t.files[0]
                      : null;
                  })(n);
                default:
                  return e.inputAutoTrim ? n.value.trim() : n.value;
              }
            })(t, e);
            e.inputValidator
              ? De(t, e, r)
              : t.getInput().checkValidity()
                ? "deny" === n
                  ? Fe(t, e, r)
                  : Me(t, e, r)
                : (t.enableButtons(),
                  t.showValidationMessage(e.validationMessage));
          },
          De = function (t, e, n) {
            t.disableInput(),
              Promise.resolve()
                .then(function () {
                  return b(e.inputValidator(n, e.validationMessage));
                })
                .then(function (r) {
                  t.enableButtons(),
                    t.enableInput(),
                    r ? t.showValidationMessage(r) : Me(t, e, n);
                });
          },
          Fe = function (t, e, n) {
            e.showLoaderOnDeny && Ut(M()),
              e.preDeny
                ? Promise.resolve()
                    .then(function () {
                      return b(e.preDeny(n, e.validationMessage));
                    })
                    .then(function (e) {
                      !1 === e
                        ? t.hideLoading()
                        : t.closePopup({
                            isDenied: !0,
                            value: void 0 === e ? n : e,
                          });
                    })
                : t.closePopup({ isDenied: !0, value: n });
          },
          $e = function (t, e) {
            t.closePopup({ isConfirmed: !0, value: e });
          },
          Me = function (t, e, n) {
            e.showLoaderOnConfirm && Ut(),
              e.preConfirm
                ? (t.resetValidationMessage(),
                  Promise.resolve()
                    .then(function () {
                      return b(e.preConfirm(n, e.validationMessage));
                    })
                    .then(function (e) {
                      dt(F()) || !1 === e
                        ? t.hideLoading()
                        : $e(t, void 0 === e ? n : e);
                    }))
                : $e(t, n);
          },
          He = function (t, e, n) {
            var r = W();
            if (r.length)
              return (
                (e += n) === r.length
                  ? (e = 0)
                  : -1 === e && (e = r.length - 1),
                r[e].focus()
              );
            O().focus();
          },
          Ue = ["ArrowRight", "ArrowDown", "Right", "Down"],
          Be = ["ArrowLeft", "ArrowUp", "Left", "Up"],
          Ve = ["Escape", "Esc"],
          ze = function (t, e, n) {
            if (
              !e.isComposing &&
              e.target &&
              t.getInput() &&
              e.target.outerHTML === t.getInput().outerHTML
            ) {
              if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
              Ht(), e.preventDefault();
            }
          },
          qe = function (t, e) {
            for (var n = t.target, r = W(), s = -1, i = 0; i < r.length; i++)
              if (n === r[i]) {
                s = i;
                break;
              }
            He(0, s, t.shiftKey ? -1 : 1),
              t.stopPropagation(),
              t.preventDefault();
          },
          Ge = function (t) {
            if (-1 !== [$(), M(), U()].indexOf(document.activeElement)) {
              var e =
                  -1 !== Ue.indexOf(t)
                    ? "nextElementSibling"
                    : "previousElementSibling",
                n = document.activeElement[e];
              n && n.focus();
            }
          },
          We = function (t, e, n) {
            y(e.allowEscapeKey) && (t.preventDefault(), n(k.esc));
          },
          Ze = !1,
          Ke = function (e, n) {
            var r = (function (e) {
                var n =
                  "string" == typeof e.template
                    ? document.querySelector(e.template)
                    : e.template;
                if (!n) return {};
                var r = n.content || n;
                return (
                  (function (t) {
                    var e = Se.concat([
                      "swal-param",
                      "swal-button",
                      "swal-image",
                      "swal-icon",
                      "swal-input",
                      "swal-input-option",
                    ]);
                    p(t.querySelectorAll("*")).forEach(function (n) {
                      if (n.parentNode === t) {
                        var r = n.tagName.toLowerCase();
                        -1 === e.indexOf(r) &&
                          g("Unrecognized element <".concat(r, ">"));
                      }
                    });
                  })(r),
                  s(
                    (function (e) {
                      var n = {};
                      return (
                        p(e.querySelectorAll("swal-param")).forEach(
                          function (e) {
                            Ie(e, ["name", "value"]);
                            var r = e.getAttribute("name"),
                              s = e.getAttribute("value");
                            "boolean" == typeof Zt[r] &&
                              "false" === s &&
                              (s = !1),
                              "object" === t(Zt[r]) && (s = JSON.parse(s)),
                              (n[r] = s);
                          },
                        ),
                        n
                      );
                    })(r),
                    (function (t) {
                      var e = {};
                      return (
                        p(t.querySelectorAll("swal-button")).forEach(
                          function (t) {
                            Ie(t, ["type", "color", "aria-label"]);
                            var n = t.getAttribute("type");
                            (e["".concat(n, "ButtonText")] = t.innerHTML),
                              (e["show".concat(d(n), "Button")] = !0),
                              t.hasAttribute("color") &&
                                (e["".concat(n, "ButtonColor")] =
                                  t.getAttribute("color")),
                              t.hasAttribute("aria-label") &&
                                (e["".concat(n, "ButtonAriaLabel")] =
                                  t.getAttribute("aria-label"));
                          },
                        ),
                        e
                      );
                    })(r),
                    (function (t) {
                      var e = {},
                        n = t.querySelector("swal-image");
                      return (
                        n &&
                          (Ie(n, ["src", "width", "height", "alt"]),
                          n.hasAttribute("src") &&
                            (e.imageUrl = n.getAttribute("src")),
                          n.hasAttribute("width") &&
                            (e.imageWidth = n.getAttribute("width")),
                          n.hasAttribute("height") &&
                            (e.imageHeight = n.getAttribute("height")),
                          n.hasAttribute("alt") &&
                            (e.imageAlt = n.getAttribute("alt"))),
                        e
                      );
                    })(r),
                    (function (t) {
                      var e = {},
                        n = t.querySelector("swal-icon");
                      return (
                        n &&
                          (Ie(n, ["type", "color"]),
                          n.hasAttribute("type") &&
                            (e.icon = n.getAttribute("type")),
                          n.hasAttribute("color") &&
                            (e.iconColor = n.getAttribute("color")),
                          (e.iconHtml = n.innerHTML)),
                        e
                      );
                    })(r),
                    (function (t) {
                      var e = {},
                        n = t.querySelector("swal-input");
                      n &&
                        (Ie(n, ["type", "label", "placeholder", "value"]),
                        (e.input = n.getAttribute("type") || "text"),
                        n.hasAttribute("label") &&
                          (e.inputLabel = n.getAttribute("label")),
                        n.hasAttribute("placeholder") &&
                          (e.inputPlaceholder = n.getAttribute("placeholder")),
                        n.hasAttribute("value") &&
                          (e.inputValue = n.getAttribute("value")));
                      var r = t.querySelectorAll("swal-input-option");
                      return (
                        r.length &&
                          ((e.inputOptions = {}),
                          p(r).forEach(function (t) {
                            Ie(t, ["value"]);
                            var n = t.getAttribute("value");
                            e.inputOptions[n] = t.innerHTML;
                          })),
                        e
                      );
                    })(r),
                    (function (t, e) {
                      var n = {};
                      for (var r in e) {
                        var s = e[r],
                          i = t.querySelector(s);
                        i &&
                          (Ie(i, []),
                          (n[s.replace(/^swal-/, "")] = i.innerHTML));
                      }
                      return n;
                    })(r, Se),
                  )
                );
              })(e),
              i = s({}, Zt.showClass, n.showClass, r.showClass, e.showClass),
              o = s({}, Zt.hideClass, n.hideClass, r.hideClass, e.hideClass),
              a = s({}, Zt, n, r, e);
            return (
              (a.showClass = i),
              (a.hideClass = o),
              !1 === e.animation &&
                ((a.showClass = {
                  popup: "swal2-noanimation",
                  backdrop: "swal2-noanimation",
                }),
                (a.hideClass = {})),
              a
            );
          },
          Qe = function (e, n, r) {
            return new Promise(function (s) {
              var i = function (t) {
                e.closePopup({ isDismissed: !0, dismiss: t });
              };
              he.swalPromiseResolve.set(e, s),
                (n.confirmButton.onclick = function () {
                  return (function (t, e) {
                    t.disableButtons(),
                      e.input ? Ne(t, e, "confirm") : Me(t, e, !0);
                  })(e, r);
                }),
                (n.denyButton.onclick = function () {
                  return (function (t, e) {
                    t.disableButtons(),
                      e.returnInputValueOnDeny
                        ? Ne(t, e, "deny")
                        : Fe(t, e, !1);
                  })(e, r);
                }),
                (n.cancelButton.onclick = function () {
                  return (function (t, e) {
                    t.disableButtons(), e(k.cancel);
                  })(e, i);
                }),
                (n.closeButton.onclick = function () {
                  return i(k.close);
                }),
                (function (t, e, n) {
                  Ct.innerParams.get(t).toast
                    ? (function (t, e, n) {
                        e.popup.onclick = function () {
                          var e = Ct.innerParams.get(t);
                          e.showConfirmButton ||
                            e.showDenyButton ||
                            e.showCancelButton ||
                            e.showCloseButton ||
                            e.timer ||
                            e.input ||
                            n(k.close);
                        };
                      })(t, e, n)
                    : ((function (t) {
                        t.popup.onmousedown = function () {
                          t.container.onmouseup = function (e) {
                            (t.container.onmouseup = void 0),
                              e.target === t.container && (Ze = !0);
                          };
                        };
                      })(e),
                      (function (t) {
                        t.container.onmousedown = function () {
                          t.popup.onmouseup = function (e) {
                            (t.popup.onmouseup = void 0),
                              (e.target === t.popup ||
                                t.popup.contains(e.target)) &&
                                (Ze = !0);
                          };
                        };
                      })(e),
                      (function (t, e, n) {
                        e.container.onclick = function (r) {
                          var s = Ct.innerParams.get(t);
                          Ze
                            ? (Ze = !1)
                            : r.target === e.container &&
                              y(s.allowOutsideClick) &&
                              n(k.backdrop);
                        };
                      })(t, e, n));
                })(e, n, i),
                (function (t, e, n, r) {
                  e.keydownTarget &&
                    e.keydownHandlerAdded &&
                    (e.keydownTarget.removeEventListener(
                      "keydown",
                      e.keydownHandler,
                      { capture: e.keydownListenerCapture },
                    ),
                    (e.keydownHandlerAdded = !1)),
                    n.toast ||
                      ((e.keydownHandler = function (e) {
                        return (function (t, e, n) {
                          var r = Ct.innerParams.get(t);
                          r &&
                            (r.stopKeydownPropagation && e.stopPropagation(),
                            "Enter" === e.key
                              ? ze(t, e, r)
                              : "Tab" === e.key
                                ? qe(e, r)
                                : -1 !== [].concat(Ue, Be).indexOf(e.key)
                                  ? Ge(e.key)
                                  : -1 !== Ve.indexOf(e.key) && We(e, r, n));
                        })(t, e, r);
                      }),
                      (e.keydownTarget = n.keydownListenerCapture
                        ? window
                        : O()),
                      (e.keydownListenerCapture = n.keydownListenerCapture),
                      e.keydownTarget.addEventListener(
                        "keydown",
                        e.keydownHandler,
                        { capture: e.keydownListenerCapture },
                      ),
                      (e.keydownHandlerAdded = !0));
                })(e, Bt, r, i),
                (function (e, n) {
                  "select" === n.input || "radio" === n.input
                    ? (function (e, n) {
                        var r = j(),
                          s = function (t) {
                            return Re[n.input](r, je(t), n);
                          };
                        v(n.inputOptions) || _(n.inputOptions)
                          ? (Ut($()),
                            b(n.inputOptions).then(function (t) {
                              e.hideLoading(), s(t);
                            }))
                          : "object" === t(n.inputOptions)
                            ? s(n.inputOptions)
                            : m(
                                "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
                                  t(n.inputOptions),
                                ),
                              );
                      })(e, n)
                    : -1 !==
                        ["text", "email", "number", "tel", "textarea"].indexOf(
                          n.input,
                        ) &&
                      (v(n.inputValue) || _(n.inputValue)) &&
                      (function (t, e) {
                        var n = t.getInput();
                        lt(n),
                          b(e.inputValue)
                            .then(function (r) {
                              (n.value =
                                "number" === e.input
                                  ? parseFloat(r) || 0
                                  : "".concat(r)),
                                ct(n),
                                n.focus(),
                                t.hideLoading();
                            })
                            .catch(function (e) {
                              m("Error in inputValue promise: ".concat(e)),
                                (n.value = ""),
                                ct(n),
                                n.focus(),
                                t.hideLoading();
                            });
                      })(e, n);
                })(e, r),
                (function (t) {
                  var e = A(),
                    n = O();
                  "function" == typeof t.willOpen
                    ? t.willOpen(n)
                    : "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n);
                  var r = window.getComputedStyle(document.body).overflowY;
                  Pe(e, n, t),
                    setTimeout(function () {
                      Ee(e, n);
                    }, 10),
                    Z() &&
                      (Oe(e, t.scrollbarPadding, r),
                      p(document.body.children).forEach(function (t) {
                        t === A() ||
                          (function (t, e) {
                            if ("function" == typeof t.contains)
                              return t.contains(e);
                          })(t, A()) ||
                          (t.hasAttribute("aria-hidden") &&
                            t.setAttribute(
                              "data-previous-aria-hidden",
                              t.getAttribute("aria-hidden"),
                            ),
                          t.setAttribute("aria-hidden", "true"));
                      })),
                    K() ||
                      Bt.previousActiveElement ||
                      (Bt.previousActiveElement = document.activeElement),
                    Ae(n, t),
                    it(e, S["no-transition"]);
                })(r),
                Ye(Bt, r, i),
                Xe(n, r),
                setTimeout(function () {
                  n.container.scrollTop = 0;
                });
            });
          },
          Je = function (t) {
            var e = {
              popup: O(),
              container: A(),
              content: j(),
              actions: B(),
              confirmButton: $(),
              denyButton: M(),
              cancelButton: U(),
              loader: H(),
              closeButton: G(),
              validationMessage: F(),
              progressSteps: D(),
            };
            return Ct.domCache.set(t, e), e;
          },
          Ye = function (t, e, n) {
            var r = q();
            lt(r),
              e.timer &&
                ((t.timeout = new _e(function () {
                  n("timer"), delete t.timeout;
                }, e.timer)),
                e.timerProgressBar &&
                  (ct(r),
                  setTimeout(function () {
                    t.timeout && t.timeout.running && gt(e.timer);
                  })));
          },
          Xe = function (t, e) {
            if (!e.toast)
              return y(e.allowEnterKey)
                ? void (tn(t, e) || He(0, -1, 1))
                : en();
          },
          tn = function (t, e) {
            return e.focusDeny && dt(t.denyButton)
              ? (t.denyButton.focus(), !0)
              : e.focusCancel && dt(t.cancelButton)
                ? (t.cancelButton.focus(), !0)
                : !(
                    !e.focusConfirm ||
                    !dt(t.confirmButton) ||
                    (t.confirmButton.focus(), 0)
                  );
          },
          en = function () {
            document.activeElement &&
              "function" == typeof document.activeElement.blur &&
              document.activeElement.blur();
          },
          nn = function (t) {
            for (var e in t) t[e] = new WeakMap();
          },
          rn = Object.freeze({
            hideLoading: ie,
            disableLoading: ie,
            getInput: function (t) {
              var e = Ct.innerParams.get(t || this),
                n = Ct.domCache.get(t || this);
              return n ? tt(n.content, e.input) : null;
            },
            close: fe,
            closePopup: fe,
            closeModal: fe,
            closeToast: fe,
            enableButtons: function () {
              ve(this, ["confirmButton", "denyButton", "cancelButton"], !1);
            },
            disableButtons: function () {
              ve(this, ["confirmButton", "denyButton", "cancelButton"], !0);
            },
            enableInput: function () {
              return be(this.getInput(), !1);
            },
            disableInput: function () {
              return be(this.getInput(), !0);
            },
            showValidationMessage: function (t) {
              var e = Ct.domCache.get(this),
                n = Ct.innerParams.get(this);
              J(e.validationMessage, t),
                (e.validationMessage.className = S["validation-message"]),
                n.customClass &&
                  n.customClass.validationMessage &&
                  st(e.validationMessage, n.customClass.validationMessage),
                ct(e.validationMessage);
              var r = this.getInput();
              r &&
                (r.setAttribute("aria-invalid", !0),
                r.setAttribute("aria-describedBy", S["validation-message"]),
                nt(r),
                st(r, S.inputerror));
            },
            resetValidationMessage: function () {
              var t = Ct.domCache.get(this);
              t.validationMessage && lt(t.validationMessage);
              var e = this.getInput();
              e &&
                (e.removeAttribute("aria-invalid"),
                e.removeAttribute("aria-describedBy"),
                it(e, S.inputerror));
            },
            getProgressSteps: function () {
              return Ct.domCache.get(this).progressSteps;
            },
            _main: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              re(s({}, e, t)),
                Bt.currentInstance && Bt.currentInstance._destroy(),
                (Bt.currentInstance = this);
              var n = Ke(t, e);
              xe(n),
                Object.freeze(n),
                Bt.timeout && (Bt.timeout.stop(), delete Bt.timeout),
                clearTimeout(Bt.restoreFocusTimeout);
              var r = Je(this);
              return Mt(this, n), Ct.innerParams.set(this, n), Qe(this, r, n);
            },
            update: function (t) {
              var e = O(),
                n = Ct.innerParams.get(this);
              if (!e || Y(e, n.hideClass.popup))
                return g(
                  "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.",
                );
              var r = {};
              Object.keys(t).forEach(function (e) {
                on.isUpdatableParameter(e)
                  ? (r[e] = t[e])
                  : g(
                      'Invalid parameter to update: "'.concat(
                        e,
                        '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md',
                      ),
                    );
              });
              var i = s({}, n, r);
              Mt(this, i),
                Ct.innerParams.set(this, i),
                Object.defineProperties(this, {
                  params: {
                    value: s({}, this.params, t),
                    writable: !1,
                    enumerable: !0,
                  },
                });
            },
            _destroy: function () {
              var t = Ct.domCache.get(this),
                e = Ct.innerParams.get(this);
              e &&
                (t.popup &&
                  Bt.swalCloseEventFinishedCallback &&
                  (Bt.swalCloseEventFinishedCallback(),
                  delete Bt.swalCloseEventFinishedCallback),
                Bt.deferDisposalTimer &&
                  (clearTimeout(Bt.deferDisposalTimer),
                  delete Bt.deferDisposalTimer),
                (function (t) {
                  "function" == typeof t.didDestroy
                    ? t.didDestroy()
                    : "function" == typeof t.onDestroy && t.onDestroy();
                })(e),
                delete this.params,
                delete Bt.keydownHandler,
                delete Bt.keydownTarget,
                nn(Ct),
                nn(he));
            },
          }),
          sn = (function () {
            function t() {
              if ((e(this, t), "undefined" != typeof window)) {
                "undefined" == typeof Promise &&
                  m(
                    "This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)",
                  ),
                  (Ce = this);
                for (
                  var n = arguments.length, r = new Array(n), s = 0;
                  s < n;
                  s++
                )
                  r[s] = arguments[s];
                var i = Object.freeze(this.constructor.argsToParams(r));
                Object.defineProperties(this, {
                  params: {
                    value: i,
                    writable: !1,
                    enumerable: !0,
                    configurable: !0,
                  },
                });
                var o = this._main(this.params);
                Ct.promise.set(this, o);
              }
            }
            return (
              r(t, [
                {
                  key: "then",
                  value: function (t) {
                    return Ct.promise.get(this).then(t);
                  },
                },
                {
                  key: "finally",
                  value: function (t) {
                    return Ct.promise.get(this).finally(t);
                  },
                },
              ]),
              t
            );
          })();
        s(sn.prototype, rn),
          s(sn, se),
          Object.keys(rn).forEach(function (t) {
            sn[t] = function () {
              var e;
              if (Ce) return (e = Ce)[t].apply(e, arguments);
            };
          }),
          (sn.DismissReason = k),
          (sn.version = "10.16.3");
        var on = sn;
        return (on.default = on), on;
      })()),
        void 0 !== this &&
          this.Sweetalert2 &&
          (this.swal =
            this.sweetAlert =
            this.Swal =
            this.SweetAlert =
              this.Sweetalert2),
        "undefined" != typeof document &&
          (function (t, e) {
            var n = t.createElement("style");
            if (
              (t.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)
            )
              n.styleSheet.disabled || (n.styleSheet.cssText = e);
            else
              try {
                n.innerHTML = e;
              } catch (t) {
                n.innerText = e;
              }
          })(
            document, '.swal2-popup.swal2-toast{flex-direction:column;align-items:stretch;width:auto;padding:1.25em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;margin:0 .625em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container{padding:.625em 0 0}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex:1;flex-basis:auto!important;align-self:stretch;width:auto;height:2.2em;height:auto;margin:0 .3125em;margin-top:.3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.125em .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#2778c4;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#d14529;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#757575;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}',
          );
    },
    zUnb: function (t, e, n) {
      "use strict";
      function r(t) {
        return "function" == typeof t;
      }
      n.r(e);
      let s = !1;
      const i = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                t.stack,
            );
          } else
            s &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3",
              );
          s = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
      function o(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      const a = {
          closed: !0,
          next(t) {},
          error(t) {
            if (i.useDeprecatedSynchronousErrorHandling) throw t;
            o(t);
          },
          complete() {},
        },
        c = (() =>
          Array.isArray || ((t) => t && "number" == typeof t.length))();
      function l(t) {
        return null !== t && "object" == typeof t;
      }
      const u = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t.map((t, e) => `${e + 1}) ${t.toString()}`).join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      let h = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let {
              _parentOrParents: n,
              _ctorUnsubscribe: s,
              _unsubscribe: i,
              _subscriptions: o,
            } = this;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof t)
            )
              n.remove(this);
            else if (null !== n)
              for (let t = 0; t < n.length; ++t) n[t].remove(this);
            if (r(i)) {
              s && (this._unsubscribe = void 0);
              try {
                i.call(this);
              } catch (a) {
                e = a instanceof u ? d(a.errors) : [a];
              }
            }
            if (c(o)) {
              let t = -1,
                n = o.length;
              for (; ++t < n; ) {
                const n = o[t];
                if (l(n))
                  try {
                    n.unsubscribe();
                  } catch (a) {
                    (e = e || []),
                      a instanceof u ? (e = e.concat(d(a.errors))) : e.push(a);
                  }
              }
            }
            if (e) throw new u(e);
          }
          add(e) {
            let n = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
              case "function":
                n = new t(e);
              case "object":
                if (
                  n === this ||
                  n.closed ||
                  "function" != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + e + " added to Subscription.",
                );
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof t) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
        }
        return (
          (t.EMPTY = (function (t) {
            return (t.closed = !0), t;
          })(new t())),
          t
        );
      })();
      function d(t) {
        return t.reduce((t, e) => t.concat(e instanceof u ? e.errors : e), []);
      }
      const f = (() =>
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random())();
      class p extends h {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!t) {
                this.destination = a;
                break;
              }
              if ("object" == typeof t) {
                t instanceof p
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable),
                    (this.destination = t),
                    t.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new g(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new g(this, t, e, n));
          }
        }
        [f]() {
          return this;
        }
        static create(t, e, n) {
          const r = new p(t, e, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }
      }
      class g extends p {
        constructor(t, e, n, s) {
          let i;
          super(), (this._parentSubscriber = t);
          let o = this;
          r(e)
            ? (i = e)
            : e &&
              ((i = e.next),
              (n = e.error),
              (s = e.complete),
              e !== a &&
                ((o = Object.create(e)),
                r(o.unsubscribe) && this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = i),
            (this._error = n),
            (this._complete = s);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = i;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : o(t),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              o(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              i.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling))
              throw n;
            o(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!i.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            e.call(this._context, n);
          } catch (r) {
            return i.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
              : (o(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            t.unsubscribe();
        }
      }
      const m = (() =>
        ("function" == typeof Symbol && Symbol.observable) || "@@observable")();
      function w(t) {
        return t;
      }
      let y = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: r } = this,
              s = (function (t, e, n) {
                if (t) {
                  if (t instanceof p) return t;
                  if (t[f]) return t[f]();
                }
                return t || e || n ? new p(t, e, n) : new p(a);
              })(t, e, n);
            if (
              (s.add(
                r
                  ? r.call(s, this.source)
                  : this.source ||
                      (i.useDeprecatedSynchronousErrorHandling &&
                        !s.syncErrorThrowable)
                    ? this._subscribe(s)
                    : this._trySubscribe(s),
              ),
              i.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              i.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: r } = t;
                    if (e || r) return !1;
                    t = n && n instanceof p ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = v(e))((e, n) => {
              let r;
              r = this.subscribe(
                (e) => {
                  try {
                    t(e);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                e,
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [m]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length
              ? this
              : (0 === (e = t).length
                  ? w
                  : 1 === e.length
                    ? e[0]
                    : function (t) {
                        return e.reduce((t, e) => e(t), t);
                      })(this);
            var e;
          }
          toPromise(t) {
            return new (t = v(t))((t, e) => {
              let n;
              this.subscribe(
                (t) => (n = t),
                (t) => e(t),
                () => t(n),
              );
            });
          }
        }
        return (t.create = (e) => new t(e)), t;
      })();
      function v(t) {
        if ((t || (t = i.Promise || Promise), !t))
          throw new Error("no Promise impl found");
        return t;
      }
      const b = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      class _ extends h {
        constructor(t, e) {
          super(),
            (this.subject = t),
            (this.subscriber = e),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (
            ((this.subject = null),
            !e || 0 === e.length || t.isStopped || t.closed)
          )
            return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
      class k extends p {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let x = (() => {
        class t extends y {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [f]() {
            return new k(this);
          }
          lift(t) {
            const e = new C(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new b();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                r = e.slice();
              for (let s = 0; s < n; s++) r[s].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new b();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              r = e.slice();
            for (let s = 0; s < n; s++) r[s].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new b();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new b();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new b();
            return this.hasError
              ? (t.error(this.thrownError), h.EMPTY)
              : this.isStopped
                ? (t.complete(), h.EMPTY)
                : (this.observers.push(t), new _(this, t));
          }
          asObservable() {
            const t = new y();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new C(t, e)), t;
      })();
      class C extends x {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : h.EMPTY;
        }
      }
      function S(t) {
        return t && "function" == typeof t.schedule;
      }
      function I(t, e) {
        return function (n) {
          if ("function" != typeof t)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?",
            );
          return n.lift(new A(t, e));
        };
      }
      class A {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new T(t, this.project, this.thisArg));
        }
      }
      class T extends p {
        constructor(t, e, n) {
          super(t),
            (this.project = e),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const E = (t) => (e) => {
        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
        e.complete();
      };
      function O() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      const P = O(),
        R = (t) => t && "number" == typeof t.length && "function" != typeof t;
      function j(t) {
        return (
          !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        );
      }
      const L = (t) => {
        if (t && "function" == typeof t[m])
          return (
            (r = t),
            (t) => {
              const e = r[m]();
              if ("function" != typeof e.subscribe)
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable",
                );
              return e.subscribe(t);
            }
          );
        if (R(t)) return E(t);
        if (j(t))
          return (
            (n = t),
            (t) => (
              n
                .then(
                  (e) => {
                    t.closed || (t.next(e), t.complete());
                  },
                  (e) => t.error(e),
                )
                .then(null, o),
              t
            )
          );
        if (t && "function" == typeof t[P])
          return (
            (e = t),
            (t) => {
              const n = e[P]();
              for (;;) {
                let e;
                try {
                  e = n.next();
                } catch (r) {
                  return t.error(r), t;
                }
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                "function" == typeof n.return &&
                  t.add(() => {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        {
          const e = l(t) ? "an invalid object" : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`,
          );
        }
        var e, n, r;
      };
      function N(t, e) {
        return new y((n) => {
          const r = new h();
          let s = 0;
          return (
            r.add(
              e.schedule(function () {
                s !== t.length
                  ? (n.next(t[s++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              }),
            ),
            r
          );
        });
      }
      function D(t, e) {
        return e
          ? (function (t, e) {
              if (null != t) {
                if (
                  (function (t) {
                    return t && "function" == typeof t[m];
                  })(t)
                )
                  return (function (t, e) {
                    return new y((n) => {
                      const r = new h();
                      return (
                        r.add(
                          e.schedule(() => {
                            const s = t[m]();
                            r.add(
                              s.subscribe({
                                next(t) {
                                  r.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  r.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  r.add(e.schedule(() => n.complete()));
                                },
                              }),
                            );
                          }),
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (j(t))
                  return (function (t, e) {
                    return new y((n) => {
                      const r = new h();
                      return (
                        r.add(
                          e.schedule(() =>
                            t.then(
                              (t) => {
                                r.add(
                                  e.schedule(() => {
                                    n.next(t),
                                      r.add(e.schedule(() => n.complete()));
                                  }),
                                );
                              },
                              (t) => {
                                r.add(e.schedule(() => n.error(t)));
                              },
                            ),
                          ),
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (R(t)) return N(t, e);
                if (
                  (function (t) {
                    return t && "function" == typeof t[P];
                  })(t) ||
                  "string" == typeof t
                )
                  return (function (t, e) {
                    if (!t) throw new Error("Iterable cannot be null");
                    return new y((n) => {
                      const r = new h();
                      let s;
                      return (
                        r.add(() => {
                          s && "function" == typeof s.return && s.return();
                        }),
                        r.add(
                          e.schedule(() => {
                            (s = t[P]()),
                              r.add(
                                e.schedule(function () {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = s.next();
                                    (t = n.value), (e = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  e
                                    ? n.complete()
                                    : (n.next(t), this.schedule());
                                }),
                              );
                          }),
                        ),
                        r
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(
                ((null !== t && typeof t) || t) + " is not observable",
              );
            })(t, e)
          : t instanceof y
            ? t
            : new y(L(t));
      }
      class F extends p {
        constructor(t) {
          super(), (this.parent = t);
        }
        _next(t) {
          this.parent.notifyNext(t);
        }
        _error(t) {
          this.parent.notifyError(t), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class M extends p {
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyError(t) {
          this.destination.error(t);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function H(t, e) {
        if (!e.closed) return t instanceof y ? t.subscribe(e) : L(t)(e);
      }
      function U(t, e, n = Number.POSITIVE_INFINITY) {
        return "function" == typeof e
          ? (r) =>
              r.pipe(
                U((n, r) => D(t(n, r)).pipe(I((t, s) => e(n, t, r, s))), n),
              )
          : ("number" == typeof e && (n = e), (e) => e.lift(new B(t, n)));
      }
      class B {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new V(t, this.project, this.concurrent));
        }
      }
      class V extends M {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent
            ? this._tryNext(t)
            : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(e);
        }
        _innerSub(t) {
          const e = new F(this),
            n = this.destination;
          n.add(e);
          const r = H(t, e);
          r !== e && n.add(r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyComplete() {
          const t = this.buffer;
          this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function z(t = Number.POSITIVE_INFINITY) {
        return U(w, t);
      }
      function q(t, e) {
        return e ? N(t, e) : new y(E(t));
      }
      function G() {
        return function (t) {
          return t.lift(new W(t));
        };
      }
      class W {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new Z(t, n),
            s = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class Z extends p {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = t._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      class K extends y {
        constructor(t, e) {
          super(),
            (this.source = t),
            (this.subjectFactory = e),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (
            (t && !t.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new h()),
              t.add(this.source.subscribe(new J(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = h.EMPTY))),
            t
          );
        }
        refCount() {
          return G()(this);
        }
      }
      const Q = (() => {
        const t = K.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount },
        };
      })();
      class J extends k {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0),
              (t._subject = null),
              (t._connection = null),
              e && e.unsubscribe();
          }
        }
      }
      function Y() {
        return new x();
      }
      function X(t) {
        for (let e in t) if (t[e] === X) return e;
        throw Error("Could not find renamed property on target object.");
      }
      function tt(t) {
        if ("string" == typeof t) return t;
        if (Array.isArray(t)) return "[" + t.map(tt).join(", ") + "]";
        if (null == t) return "" + t;
        if (t.overriddenName) return `${t.overriddenName}`;
        if (t.name) return `${t.name}`;
        const e = t.toString();
        if (null == e) return "" + e;
        const n = e.indexOf("\n");
        return -1 === n ? e : e.substring(0, n);
      }
      function et(t, e) {
        return null == t || "" === t
          ? null === e
            ? ""
            : e
          : null == e || "" === e
            ? t
            : t + " " + e;
      }
      const nt = X({ __forward_ref__: X });
      function rt(t) {
        return (
          (t.__forward_ref__ = rt),
          (t.toString = function () {
            return tt(this());
          }),
          t
        );
      }
      function st(t) {
        return "function" == typeof (e = t) &&
          e.hasOwnProperty(nt) &&
          e.__forward_ref__ === rt
          ? t()
          : t;
        var e;
      }
      class it extends Error {
        constructor(t, e) {
          super(
            (function (t, e) {
              return `${t ? `NG0${t}: ` : ""}${e}`;
            })(t, e),
          ),
            (this.code = t);
        }
      }
      function ot(t) {
        return "string" == typeof t ? t : null == t ? "" : String(t);
      }
      function at(t) {
        return "function" == typeof t
          ? t.name || t.toString()
          : "object" == typeof t && null != t && "function" == typeof t.type
            ? t.type.name || t.type.toString()
            : ot(t);
      }
      function ct(t, e) {
        const n = e ? ` in ${e}` : "";
        throw new it("201", `No provider for ${at(t)} found${n}`);
      }
      function lt(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0,
        };
      }
      function ut(t) {
        return { providers: t.providers || [], imports: t.imports || [] };
      }
      function ht(t) {
        return dt(t, pt) || dt(t, mt);
      }
      function dt(t, e) {
        return t.hasOwnProperty(e) ? t[e] : null;
      }
      function ft(t) {
        return t && (t.hasOwnProperty(gt) || t.hasOwnProperty(wt))
          ? t[gt]
          : null;
      }
      const pt = X({ "\u0275prov": X }),
        gt = X({ "\u0275inj": X }),
        mt = X({ ngInjectableDef: X }),
        wt = X({ ngInjectorDef: X });
      var yt = (function (t) {
        return (
          (t[(t.Default = 0)] = "Default"),
          (t[(t.Host = 1)] = "Host"),
          (t[(t.Self = 2)] = "Self"),
          (t[(t.SkipSelf = 4)] = "SkipSelf"),
          (t[(t.Optional = 8)] = "Optional"),
          t
        );
      })({});
      let vt;
      function bt(t) {
        const e = vt;
        return (vt = t), e;
      }
      function _t(t, e, n) {
        const r = ht(t);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & yt.Optional
            ? null
            : void 0 !== e
              ? e
              : void ct(tt(t), "Injector");
      }
      function kt(t) {
        return { toString: t }.toString();
      }
      var xt = (function (t) {
          return (
            (t[(t.OnPush = 0)] = "OnPush"), (t[(t.Default = 1)] = "Default"), t
          );
        })({}),
        Ct = (function (t) {
          return (
            (t[(t.Emulated = 0)] = "Emulated"),
            (t[(t.None = 2)] = "None"),
            (t[(t.ShadowDom = 3)] = "ShadowDom"),
            t
          );
        })({});
      const St = "undefined" != typeof globalThis && globalThis,
        It = "undefined" != typeof window && window,
        At =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Tt = "undefined" != typeof global && global,
        Et = St || Tt || It || At,
        Ot = {},
        Pt = [],
        Rt = [],
        jt = X({ "\u0275cmp": X }),
        Lt = X({ "\u0275dir": X }),
        Nt = X({ "\u0275pipe": X }),
        Dt = X({ "\u0275mod": X }),
        Ft = X({ "\u0275loc": X }),
        $t = X({ "\u0275fac": X }),
        Mt = X({ __NG_ELEMENT_ID__: X });
      let Ht = 0;
      function Ut(t) {
        return kt(() => {
          const e = {},
            n = {
              type: t.type,
              providersResolver: null,
              decls: t.decls,
              vars: t.vars,
              factory: null,
              template: t.template || null,
              consts: t.consts || null,
              ngContentSelectors: t.ngContentSelectors,
              hostBindings: t.hostBindings || null,
              hostVars: t.hostVars || 0,
              hostAttrs: t.hostAttrs || null,
              contentQueries: t.contentQueries || null,
              declaredInputs: e,
              inputs: null,
              outputs: null,
              exportAs: t.exportAs || null,
              onPush: t.changeDetection === xt.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: t.selectors || Rt,
              viewQuery: t.viewQuery || null,
              features: t.features || null,
              data: t.data || {},
              encapsulation: t.encapsulation || Ct.Emulated,
              id: "c",
              styles: t.styles || Rt,
              _: null,
              setInput: null,
              schemas: t.schemas || null,
              tView: null,
            },
            r = t.directives,
            s = t.features,
            i = t.pipes;
          return (
            (n.id += Ht++),
            (n.inputs = Gt(t.inputs, e)),
            (n.outputs = Gt(t.outputs)),
            s && s.forEach((t) => t(n)),
            (n.directiveDefs = r
              ? () => ("function" == typeof r ? r() : r).map(Bt)
              : null),
            (n.pipeDefs = i
              ? () => ("function" == typeof i ? i() : i).map(Vt)
              : null),
            n
          );
        });
      }
      function Bt(t) {
        return (
          Zt(t) ||
          (function (t) {
            return t[Lt] || null;
          })(t)
        );
      }
      function Vt(t) {
        return (function (t) {
          return t[Nt] || null;
        })(t);
      }
      const zt = {};
      function qt(t) {
        const e = {
          type: t.type,
          bootstrap: t.bootstrap || Rt,
          declarations: t.declarations || Rt,
          imports: t.imports || Rt,
          exports: t.exports || Rt,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null,
        };
        return (
          null != t.id &&
            kt(() => {
              zt[t.id] = t.type;
            }),
          e
        );
      }
      function Gt(t, e) {
        if (null == t) return Ot;
        const n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            let s = t[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])),
              (n[s] = r),
              e && (e[s] = i);
          }
        return n;
      }
      const Wt = Ut;
      function Zt(t) {
        return t[jt] || null;
      }
      function Kt(t, e) {
        const n = t[Dt] || null;
        if (!n && !0 === e)
          throw new Error(`Type ${tt(t)} does not have '\u0275mod' property.`);
        return n;
      }
      const Qt = 20,
        Jt = 10;
      function Yt(t) {
        return Array.isArray(t) && "object" == typeof t[1];
      }
      function Xt(t) {
        return Array.isArray(t) && !0 === t[1];
      }
      function te(t) {
        return 0 != (8 & t.flags);
      }
      function ee(t) {
        return 2 == (2 & t.flags);
      }
      function ne(t) {
        return 1 == (1 & t.flags);
      }
      function re(t) {
        return null !== t.template;
      }
      function se(t, e) {
        return t.hasOwnProperty($t) ? t[$t] : null;
      }
      class ie {
        constructor(t, e, n) {
          (this.previousValue = t),
            (this.currentValue = e),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function oe() {
        return ae;
      }
      function ae(t) {
        return t.type.prototype.ngOnChanges && (t.setInput = le), ce;
      }
      function ce() {
        const t = ue(this),
          e = null == t ? void 0 : t.current;
        if (e) {
          const n = t.previous;
          if (n === Ot) t.previous = e;
          else for (let t in e) n[t] = e[t];
          (t.current = null), this.ngOnChanges(e);
        }
      }
      function le(t, e, n, r) {
        const s =
            ue(t) ||
            (function (t, e) {
              return (t.__ngSimpleChanges__ = e);
            })(t, { previous: Ot, current: null }),
          i = s.current || (s.current = {}),
          o = s.previous,
          a = this.declaredInputs[n],
          c = o[a];
        (i[a] = new ie(c && c.currentValue, e, o === Ot)), (t[r] = e);
      }
      function ue(t) {
        return t.__ngSimpleChanges__ || null;
      }
      let he;
      function de(t) {
        return !!t.listen;
      }
      oe.ngInherit = !0;
      const fe = {
        createRenderer: (t, e) =>
          void 0 !== he
            ? he
            : "undefined" != typeof document
              ? document
              : void 0,
      };
      function pe(t) {
        for (; Array.isArray(t); ) t = t[0];
        return t;
      }
      function ge(t, e) {
        return pe(e[t]);
      }
      function me(t, e) {
        return pe(e[t.index]);
      }
      function we(t, e) {
        return t.data[e];
      }
      function ye(t, e) {
        const n = e[t];
        return Yt(n) ? n : n[0];
      }
      function ve(t) {
        const e = (function (t) {
          return t.__ngContext__ || null;
        })(t);
        return e ? (Array.isArray(e) ? e : e.lView) : null;
      }
      function be(t) {
        return 4 == (4 & t[2]);
      }
      function _e(t) {
        return 128 == (128 & t[2]);
      }
      function ke(t, e) {
        return null == e ? null : t[e];
      }
      function xe(t) {
        t[18] = 0;
      }
      function Ce(t, e) {
        t[5] += e;
        let n = t,
          r = t[3];
        for (
          ;
          null !== r && ((1 === e && 1 === n[5]) || (-1 === e && 0 === n[5]));

        )
          (r[5] += e), (n = r), (r = r[3]);
      }
      const Se = {
        lFrame: Ge(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1,
      };
      function Ie() {
        return Se.bindingsEnabled;
      }
      function Ae() {
        return Se.lFrame.lView;
      }
      function Te() {
        return Se.lFrame.tView;
      }
      function Ee(t) {
        Se.lFrame.contextLView = t;
      }
      function Oe() {
        let t = Pe();
        for (; null !== t && 64 === t.type; ) t = t.parent;
        return t;
      }
      function Pe() {
        return Se.lFrame.currentTNode;
      }
      function Re(t, e) {
        const n = Se.lFrame;
        (n.currentTNode = t), (n.isParent = e);
      }
      function je() {
        return Se.lFrame.isParent;
      }
      function Le() {
        return Se.isInCheckNoChangesMode;
      }
      function Ne(t) {
        Se.isInCheckNoChangesMode = t;
      }
      function De() {
        return Se.lFrame.bindingIndex++;
      }
      function Fe(t) {
        const e = Se.lFrame,
          n = e.bindingIndex;
        return (e.bindingIndex = e.bindingIndex + t), n;
      }
      function $e(t, e) {
        const n = Se.lFrame;
        (n.bindingIndex = n.bindingRootIndex = t), Me(e);
      }
      function Me(t) {
        Se.lFrame.currentDirectiveIndex = t;
      }
      function He() {
        return Se.lFrame.currentQueryIndex;
      }
      function Ue(t) {
        Se.lFrame.currentQueryIndex = t;
      }
      function Be(t) {
        const e = t[1];
        return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null;
      }
      function Ve(t, e, n) {
        if (n & yt.SkipSelf) {
          let r = e,
            s = t;
          for (
            ;
            (r = r.parent),
              !(
                null !== r ||
                n & yt.Host ||
                ((r = Be(s)), null === r) ||
                ((s = s[15]), 10 & r.type)
              );

          );
          if (null === r) return !1;
          (e = r), (t = s);
        }
        const r = (Se.lFrame = qe());
        return (r.currentTNode = e), (r.lView = t), !0;
      }
      function ze(t) {
        const e = qe(),
          n = t[1];
        (Se.lFrame = e),
          (e.currentTNode = n.firstChild),
          (e.lView = t),
          (e.tView = n),
          (e.contextLView = t),
          (e.bindingIndex = n.bindingStartIndex),
          (e.inI18n = !1);
      }
      function qe() {
        const t = Se.lFrame,
          e = null === t ? null : t.child;
        return null === e ? Ge(t) : e;
      }
      function Ge(t) {
        const e = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: t,
          child: null,
          inI18n: !1,
        };
        return null !== t && (t.child = e), e;
      }
      function We() {
        const t = Se.lFrame;
        return (
          (Se.lFrame = t.parent), (t.currentTNode = null), (t.lView = null), t
        );
      }
      const Ze = We;
      function Ke() {
        const t = We();
        (t.isParent = !0),
          (t.tView = null),
          (t.selectedIndex = -1),
          (t.contextLView = null),
          (t.elementDepthCount = 0),
          (t.currentDirectiveIndex = -1),
          (t.currentNamespace = null),
          (t.bindingRootIndex = -1),
          (t.bindingIndex = -1),
          (t.currentQueryIndex = 0);
      }
      function Qe() {
        return Se.lFrame.selectedIndex;
      }
      function Je(t) {
        Se.lFrame.selectedIndex = t;
      }
      function Ye() {
        const t = Se.lFrame;
        return we(t.tView, t.selectedIndex);
      }
      function Xe(t, e) {
        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
          const e = t.data[n].type.prototype,
            {
              ngAfterContentInit: r,
              ngAfterContentChecked: s,
              ngAfterViewInit: i,
              ngAfterViewChecked: o,
              ngOnDestroy: a,
            } = e;
          r && (t.contentHooks || (t.contentHooks = [])).push(-n, r),
            s &&
              ((t.contentHooks || (t.contentHooks = [])).push(n, s),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, s)),
            i && (t.viewHooks || (t.viewHooks = [])).push(-n, i),
            o &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, o),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, o)),
            null != a && (t.destroyHooks || (t.destroyHooks = [])).push(n, a);
        }
      }
      function tn(t, e, n) {
        rn(t, e, 3, n);
      }
      function en(t, e, n, r) {
        (3 & t[2]) === n && rn(t, e, n, r);
      }
      function nn(t, e) {
        let n = t[2];
        (3 & n) === e && ((n &= 2047), (n += 1), (t[2] = n));
      }
      function rn(t, e, n, r) {
        const s = null != r ? r : -1,
          i = e.length - 1;
        let o = 0;
        for (let a = void 0 !== r ? 65535 & t[18] : 0; a < i; a++)
          if ("number" == typeof e[a + 1]) {
            if (((o = e[a]), null != r && o >= r)) break;
          } else
            e[a] < 0 && (t[18] += 65536),
              (o < s || -1 == s) &&
                (sn(t, n, e, a), (t[18] = (4294901760 & t[18]) + a + 2)),
              a++;
      }
      function sn(t, e, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          o = t[s ? -n[r] : n[r]];
        s
          ? t[2] >> 11 < t[18] >> 16 &&
            (3 & t[2]) === e &&
            ((t[2] += 2048), i.call(o))
          : i.call(o);
      }
      const on = -1;
      class an {
        constructor(t, e, n) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = e),
            (this.injectImpl = n);
        }
      }
      function cn(t, e, n) {
        const r = de(t);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ("number" == typeof i) {
            if (0 !== i) break;
            s++;
            const o = n[s++],
              a = n[s++],
              c = n[s++];
            r ? t.setAttribute(e, a, c, o) : e.setAttributeNS(o, a, c);
          } else {
            const o = i,
              a = n[++s];
            un(o)
              ? r && t.setProperty(e, o, a)
              : r
                ? t.setAttribute(e, o, a)
                : e.setAttribute(o, a),
              s++;
          }
        }
        return s;
      }
      function ln(t) {
        return 3 === t || 4 === t || 6 === t;
      }
      function un(t) {
        return 64 === t.charCodeAt(0);
      }
      function hn(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice();
        else {
          let n = -1;
          for (let r = 0; r < e.length; r++) {
            const s = e[r];
            "number" == typeof s
              ? (n = s)
              : 0 === n ||
                dn(t, n, s, null, -1 === n || 2 === n ? e[++r] : null);
          }
        }
        return t;
      }
      function dn(t, e, n, r, s) {
        let i = 0,
          o = t.length;
        if (-1 === e) o = -1;
        else
          for (; i < t.length; ) {
            const n = t[i++];
            if ("number" == typeof n) {
              if (n === e) {
                o = -1;
                break;
              }
              if (n > e) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < t.length; ) {
          const e = t[i];
          if ("number" == typeof e) break;
          if (e === n) {
            if (null === r) return void (null !== s && (t[i + 1] = s));
            if (r === t[i + 1]) return void (t[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== o && (t.splice(o, 0, e), (i = o + 1)),
          t.splice(i++, 0, n),
          null !== r && t.splice(i++, 0, r),
          null !== s && t.splice(i++, 0, s);
      }
      function fn(t) {
        return t !== on;
      }
      function pn(t) {
        return 32767 & t;
      }
      function gn(t, e) {
        let n = t >> 16,
          r = e;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let mn = !0;
      function wn(t) {
        const e = mn;
        return (mn = t), e;
      }
      let yn = 0;
      function vn(t, e) {
        const n = _n(t, e);
        if (-1 !== n) return n;
        const r = e[1];
        r.firstCreatePass &&
          ((t.injectorIndex = e.length),
          bn(r.data, t),
          bn(e, null),
          bn(r.blueprint, null));
        const s = kn(t, e),
          i = t.injectorIndex;
        if (fn(s)) {
          const t = pn(s),
            n = gn(s, e),
            r = n[1].data;
          for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s];
        }
        return (e[i + 8] = s), i;
      }
      function bn(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function _n(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null === e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex;
      }
      function kn(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex)
          return t.parent.injectorIndex;
        let n = 0,
          r = null,
          s = e;
        for (; null !== s; ) {
          const t = s[1],
            e = t.type;
          if (((r = 2 === e ? t.declTNode : 1 === e ? s[6] : null), null === r))
            return on;
          if ((n++, (s = s[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return on;
      }
      function xn(t, e, n) {
        !(function (t, e, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Mt) && (r = n[Mt]),
            null == r && (r = n[Mt] = yn++);
          const s = 255 & r;
          e.data[t + (s >> 5)] |= 1 << s;
        })(t, e, n);
      }
      function Cn(t, e, n) {
        if (n & yt.Optional) return t;
        ct(e, "NodeInjector");
      }
      function Sn(t, e, n, r) {
        if (
          (n & yt.Optional && void 0 === r && (r = null),
          0 == (n & (yt.Self | yt.Host)))
        ) {
          const s = t[9],
            i = bt(void 0);
          try {
            return s ? s.get(e, r, n & yt.Optional) : _t(e, r, n & yt.Optional);
          } finally {
            bt(i);
          }
        }
        return Cn(r, e, n);
      }
      function In(t, e, n, r = yt.Default, s) {
        if (null !== t) {
          const i = (function (t) {
            if ("string" == typeof t) return t.charCodeAt(0) || 0;
            const e = t.hasOwnProperty(Mt) ? t[Mt] : void 0;
            return "number" == typeof e ? (e >= 0 ? 255 & e : Tn) : e;
          })(n);
          if ("function" == typeof i) {
            if (!Ve(e, t, r)) return r & yt.Host ? Cn(s, n, r) : Sn(e, n, r, s);
            try {
              const t = i();
              if (null != t || r & yt.Optional) return t;
              ct(n);
            } finally {
              Ze();
            }
          } else if ("number" == typeof i) {
            let s = null,
              o = _n(t, e),
              a = on,
              c = r & yt.Host ? e[16][6] : null;
            for (
              (-1 === o || r & yt.SkipSelf) &&
              ((a = -1 === o ? kn(t, e) : e[o + 8]),
              a !== on && jn(r, !1)
                ? ((s = e[1]), (o = pn(a)), (e = gn(a, e)))
                : (o = -1));
              -1 !== o;

            ) {
              const t = e[1];
              if (Rn(i, o, t.data)) {
                const t = En(o, e, n, s, r, c);
                if (t !== An) return t;
              }
              (a = e[o + 8]),
                a !== on && jn(r, e[1].data[o + 8] === c) && Rn(i, o, e)
                  ? ((s = t), (o = pn(a)), (e = gn(a, e)))
                  : (o = -1);
            }
          }
        }
        return Sn(e, n, r, s);
      }
      const An = {};
      function Tn() {
        return new Ln(Oe(), Ae());
      }
      function En(t, e, n, r, s, i) {
        const o = e[1],
          a = o.data[t + 8],
          c = On(
            a,
            o,
            n,
            null == r ? ee(a) && mn : r != o && 0 != (3 & a.type),
            s & yt.Host && i === a,
          );
        return null !== c ? Pn(e, o, c, a) : An;
      }
      function On(t, e, n, r, s) {
        const i = t.providerIndexes,
          o = e.data,
          a = 1048575 & i,
          c = t.directiveStart,
          l = i >> 20,
          u = s ? a + l : t.directiveEnd;
        for (let h = r ? a : a + l; h < u; h++) {
          const t = o[h];
          if ((h < c && n === t) || (h >= c && t.type === n)) return h;
        }
        if (s) {
          const t = o[c];
          if (t && re(t) && t.type === n) return c;
        }
        return null;
      }
      function Pn(t, e, n, r) {
        let s = t[n];
        const i = e.data;
        if (s instanceof an) {
          const o = s;
          o.resolving &&
            (function (t, e) {
              throw new it(
                "200",
                `Circular dependency in DI detected for ${t}`,
              );
            })(at(i[n]));
          const a = wn(o.canSeeViewProviders);
          o.resolving = !0;
          const c = o.injectImpl ? bt(o.injectImpl) : null;
          Ve(t, r, yt.Default);
          try {
            (s = t[n] = o.factory(void 0, i, t, r)),
              e.firstCreatePass &&
                n >= r.directiveStart &&
                (function (t, e, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: s,
                    ngDoCheck: i,
                  } = e.type.prototype;
                  if (r) {
                    const r = ae(e);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, r);
                  }
                  s &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, i));
                })(n, i[n], e);
          } finally {
            null !== c && bt(c), wn(a), (o.resolving = !1), Ze();
          }
        }
        return s;
      }
      function Rn(t, e, n) {
        return !!(n[e + (t >> 5)] & (1 << t));
      }
      function jn(t, e) {
        return !(t & yt.Self || (t & yt.Host && e));
      }
      class Ln {
        constructor(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        get(t, e) {
          return In(this._tNode, this._lView, t, void 0, e);
        }
      }
      function Nn(t) {
        return (function (t, e) {
          if ("class" === e) return t.classes;
          if ("style" === e) return t.styles;
          const n = t.attrs;
          if (n) {
            const t = n.length;
            let r = 0;
            for (; r < t; ) {
              const s = n[r];
              if (ln(s)) break;
              if (0 === s) r += 2;
              else if ("number" == typeof s)
                for (r++; r < t && "string" == typeof n[r]; ) r++;
              else {
                if (s === e) return n[r + 1];
                r += 2;
              }
            }
          }
          return null;
        })(Oe(), t);
      }
      const Dn = "__parameters__";
      function Fn(t, e, n) {
        return kt(() => {
          const r = (function (t) {
            return function (...e) {
              if (t) {
                const n = t(...e);
                for (const t in n) this[t] = n[t];
              }
            };
          })(e);
          function s(...t) {
            if (this instanceof s) return r.apply(this, t), this;
            const e = new s(...t);
            return (n.annotation = e), n;
            function n(t, n, r) {
              const s = t.hasOwnProperty(Dn)
                ? t[Dn]
                : Object.defineProperty(t, Dn, { value: [] })[Dn];
              for (; s.length <= r; ) s.push(null);
              return (s[r] = s[r] || []).push(e), t;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)),
            (s.prototype.ngMetadataName = t),
            (s.annotationCls = s),
            s
          );
        });
      }
      class $n {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ɵprov = lt({
                  token: this,
                  providedIn: e.providedIn || "root",
                  factory: e.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const Mn = new $n("AnalyzeForEntryComponents"),
        Hn = Function;
      function Un(t, e) {
        void 0 === e && (e = t);
        for (let n = 0; n < t.length; n++) {
          let r = t[n];
          Array.isArray(r)
            ? (e === t && (e = t.slice(0, n)), Un(r, e))
            : e !== t && e.push(r);
        }
        return e;
      }
      function Bn(t, e) {
        t.forEach((t) => (Array.isArray(t) ? Bn(t, e) : e(t)));
      }
      function Vn(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function zn(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      function qn(t, e, n) {
        let r = Wn(t, e);
        return (
          r >= 0
            ? (t[1 | r] = n)
            : ((r = ~r),
              (function (t, e, n, r) {
                let s = t.length;
                if (s == e) t.push(n, r);
                else if (1 === s) t.push(r, t[0]), (t[0] = n);
                else {
                  for (s--, t.push(t[s - 1], t[s]); s > e; )
                    (t[s] = t[s - 2]), s--;
                  (t[e] = n), (t[e + 1] = r);
                }
              })(t, r, e, n)),
          r
        );
      }
      function Gn(t, e) {
        const n = Wn(t, e);
        if (n >= 0) return t[1 | n];
      }
      function Wn(t, e) {
        return (function (t, e, n) {
          let r = 0,
            s = t.length >> 1;
          for (; s !== r; ) {
            const n = r + ((s - r) >> 1),
              i = t[n << 1];
            if (e === i) return n << 1;
            i > e ? (s = n) : (r = n + 1);
          }
          return ~(s << 1);
        })(t, e);
      }
      const Zn = {},
        Kn = /\n/gm,
        Qn = "__source",
        Jn = X({ provide: String, useValue: X });
      let Yn;
      function Xn(t) {
        const e = Yn;
        return (Yn = t), e;
      }
      function tr(t, e = yt.Default) {
        if (void 0 === Yn)
          throw new Error("inject() must be called from an injection context");
        return null === Yn
          ? _t(t, void 0, e)
          : Yn.get(t, e & yt.Optional ? null : void 0, e);
      }
      function er(t, e = yt.Default) {
        return (vt || tr)(st(t), e);
      }
      function nr(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const r = st(t[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error("Arguments array must have arguments.");
            let t,
              n = yt.Default;
            for (let e = 0; e < r.length; e++) {
              const s = r[e],
                i = s.__NG_DI_FLAG__;
              "number" == typeof i
                ? -1 === i
                  ? (t = s.token)
                  : (n |= i)
                : (t = s);
            }
            e.push(er(t, n));
          } else e.push(er(r));
        }
        return e;
      }
      function rr(t, e) {
        return (t.__NG_DI_FLAG__ = e), (t.prototype.__NG_DI_FLAG__ = e), t;
      }
      const sr = rr(
          Fn("Inject", (t) => ({ token: t })),
          -1,
        ),
        ir = rr(Fn("Optional"), 8),
        or = rr(Fn("SkipSelf"), 4);
      class ar {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      function cr(t) {
        return t instanceof ar ? t.changingThisBreaksApplicationSecurity : t;
      }
      const lr =
          /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        ur =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      var hr = (function (t) {
        return (
          (t[(t.NONE = 0)] = "NONE"),
          (t[(t.HTML = 1)] = "HTML"),
          (t[(t.STYLE = 2)] = "STYLE"),
          (t[(t.SCRIPT = 3)] = "SCRIPT"),
          (t[(t.URL = 4)] = "URL"),
          (t[(t.RESOURCE_URL = 5)] = "RESOURCE_URL"),
          t
        );
      })({});
      function dr(t) {
        const e = (function () {
          const t = Ae();
          return t && t[12];
        })();
        return e
          ? e.sanitize(hr.URL, t) || ""
          : (function (t, e) {
                const n = (function (t) {
                  return (t instanceof ar && t.getTypeName()) || null;
                })(t);
                if (null != n && n !== e) {
                  if ("ResourceURL" === n && "URL" === e) return !0;
                  throw new Error(
                    `Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`,
                  );
                }
                return n === e;
              })(t, "URL")
            ? cr(t)
            : ((n = ot(t)),
              (n = String(n)).match(lr) || n.match(ur) ? n : "unsafe:" + n);
        var n;
      }
      function fr(t) {
        return t.ngDebugContext;
      }
      function pr(t) {
        return t.ngOriginalError;
      }
      function gr(t, ...e) {
        t.error(...e);
      }
      class mr {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            r = (function (t) {
              return t.ngErrorLogger || gr;
            })(t);
          r(this._console, "ERROR", t),
            e && r(this._console, "ORIGINAL ERROR", e),
            n && r(this._console, "ERROR CONTEXT", n);
        }
        _findContext(t) {
          return t ? (fr(t) ? fr(t) : this._findContext(pr(t))) : null;
        }
        _findOriginalError(t) {
          let e = pr(t);
          for (; e && pr(e); ) e = pr(e);
          return e;
        }
      }
      function wr(t, e) {
        t.__ngContext__ = e;
      }
      const yr = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Et))();
      function vr(t) {
        return t instanceof Function ? t() : t;
      }
      var br = (function (t) {
        return (
          (t[(t.Important = 1)] = "Important"),
          (t[(t.DashCase = 2)] = "DashCase"),
          t
        );
      })({});
      function _r(t, e) {
        return (void 0)(t, e);
      }
      function kr(t) {
        const e = t[3];
        return Xt(e) ? e[3] : e;
      }
      function xr(t) {
        return Sr(t[13]);
      }
      function Cr(t) {
        return Sr(t[4]);
      }
      function Sr(t) {
        for (; null !== t && !Xt(t); ) t = t[4];
        return t;
      }
      function Ir(t, e, n, r, s) {
        if (null != r) {
          let i,
            o = !1;
          Xt(r) ? (i = r) : Yt(r) && ((o = !0), (r = r[0]));
          const a = pe(r);
          0 === t && null !== n
            ? null == s
              ? jr(e, n, a)
              : Rr(e, n, a, s || null, !0)
            : 1 === t && null !== n
              ? Rr(e, n, a, s || null, !0)
              : 2 === t
                ? (function (t, e, n) {
                    const r = Nr(t, e);
                    r &&
                      (function (t, e, n, r) {
                        de(t) ? t.removeChild(e, n, r) : e.removeChild(n);
                      })(t, r, e, n);
                  })(e, a, o)
                : 3 === t && e.destroyNode(a),
            null != i &&
              (function (t, e, n, r, s) {
                const i = n[7];
                i !== pe(n) && Ir(e, t, r, i, s);
                for (let o = Jt; o < n.length; o++) {
                  const s = n[o];
                  Ur(s[1], s, t, e, r, i);
                }
              })(e, t, i, n, s);
        }
      }
      function Ar(t, e, n) {
        return de(t)
          ? t.createElement(e, n)
          : null === n
            ? t.createElement(e)
            : t.createElementNS(n, e);
      }
      function Tr(t, e) {
        const n = t[9],
          r = n.indexOf(e),
          s = e[3];
        1024 & e[2] && ((e[2] &= -1025), Ce(s, -1)), n.splice(r, 1);
      }
      function Er(t, e) {
        if (t.length <= Jt) return;
        const n = Jt + e,
          r = t[n];
        if (r) {
          const i = r[17];
          null !== i && i !== t && Tr(i, r), e > 0 && (t[n - 1][4] = r[4]);
          const o = zn(t, Jt + e);
          Ur(r[1], (s = r), s[11], 2, null, null), (s[0] = null), (s[6] = null);
          const a = o[19];
          null !== a && a.detachView(o[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        var s;
        return r;
      }
      function Or(t, e) {
        if (!(256 & e[2])) {
          const n = e[11];
          de(n) && n.destroyNode && Ur(t, e, n, 3, null, null),
            (function (t) {
              let e = t[13];
              if (!e) return Pr(t[1], t);
              for (; e; ) {
                let n = null;
                if (Yt(e)) n = e[13];
                else {
                  const t = e[10];
                  t && (n = t);
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; )
                    Yt(e) && Pr(e[1], e), (e = e[3]);
                  null === e && (e = t), Yt(e) && Pr(e[1], e), (n = e && e[4]);
                }
                e = n;
              }
            })(e);
        }
      }
      function Pr(t, e) {
        if (!(256 & e[2])) {
          (e[2] &= -129),
            (e[2] |= 256),
            (function (t, e) {
              let n;
              if (null != t && null != (n = t.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const t = e[n[r]];
                  if (!(t instanceof an)) {
                    const e = n[r + 1];
                    if (Array.isArray(e))
                      for (let n = 0; n < e.length; n += 2)
                        e[n + 1].call(t[e[n]]);
                    else e.call(t);
                  }
                }
            })(t, e),
            (function (t, e) {
              const n = t.cleanup,
                r = e[7];
              let s = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const t = n[i + 1],
                      o = "function" == typeof t ? t(e) : pe(e[t]),
                      a = r[(s = n[i + 2])],
                      c = n[i + 3];
                    "boolean" == typeof c
                      ? o.removeEventListener(n[i], a, c)
                      : c >= 0
                        ? r[(s = c)]()
                        : r[(s = -c)].unsubscribe(),
                      (i += 2);
                  } else {
                    const t = r[(s = n[i + 1])];
                    n[i].call(t);
                  }
              if (null !== r) {
                for (let t = s + 1; t < r.length; t++) (0, r[t])();
                e[7] = null;
              }
            })(t, e),
            1 === e[1].type && de(e[11]) && e[11].destroy();
          const n = e[17];
          if (null !== n && Xt(e[3])) {
            n !== e[3] && Tr(n, e);
            const r = e[19];
            null !== r && r.detachView(t);
          }
        }
      }
      function Rr(t, e, n, r, s) {
        de(t) ? t.insertBefore(e, n, r, s) : e.insertBefore(n, r, s);
      }
      function jr(t, e, n) {
        de(t) ? t.appendChild(e, n) : e.appendChild(n);
      }
      function Lr(t, e, n, r, s) {
        null !== r ? Rr(t, e, n, r, s) : jr(t, e, n);
      }
      function Nr(t, e) {
        return de(t) ? t.parentNode(e) : e.parentNode;
      }
      function Dr(t, e, n, r) {
        const s = (function (t, e, n) {
            return (function (t, e, n) {
              let r = e;
              for (; null !== r && 40 & r.type; ) r = (e = r).parent;
              if (null === r) return n[0];
              if (2 & r.flags) {
                const e = t.data[r.directiveStart].encapsulation;
                if (e === Ct.None || e === Ct.Emulated) return null;
              }
              return me(r, n);
            })(t, e.parent, n);
          })(t, r, e),
          i = e[11],
          o = (function (t, e, n) {
            return (function (t, e, n) {
              return 40 & t.type ? me(t, n) : null;
            })(t, 0, n);
          })(r.parent || e[6], 0, e);
        if (null != s)
          if (Array.isArray(n))
            for (let a = 0; a < n.length; a++) Lr(i, s, n[a], o, !1);
          else Lr(i, s, n, o, !1);
      }
      function Fr(t, e) {
        if (null !== e) {
          const n = e.type;
          if (3 & n) return me(e, t);
          if (4 & n) return Mr(-1, t[e.index]);
          if (8 & n) {
            const n = e.child;
            if (null !== n) return Fr(t, n);
            {
              const n = t[e.index];
              return Xt(n) ? Mr(-1, n) : pe(n);
            }
          }
          if (32 & n) return _r(e, t)() || pe(t[e.index]);
          {
            const n = $r(t, e);
            return null !== n
              ? Array.isArray(n)
                ? n[0]
                : Fr(kr(t[16]), n)
              : Fr(t, e.next);
          }
        }
        return null;
      }
      function $r(t, e) {
        return null !== e ? t[16][6].projection[e.projection] : null;
      }
      function Mr(t, e) {
        const n = Jt + t + 1;
        if (n < e.length) {
          const t = e[n],
            r = t[1].firstChild;
          if (null !== r) return Fr(t, r);
        }
        return e[7];
      }
      function Hr(t, e, n, r, s, i, o) {
        for (; null != n; ) {
          const a = r[n.index],
            c = n.type;
          if (
            (o && 0 === e && (a && wr(pe(a), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & c) Hr(t, e, n.child, r, s, i, !1), Ir(e, t, s, a, i);
            else if (32 & c) {
              const o = _r(n, r);
              let c;
              for (; (c = o()); ) Ir(e, t, s, c, i);
              Ir(e, t, s, a, i);
            } else 16 & c ? Br(t, e, r, n, s, i) : Ir(e, t, s, a, i);
          n = o ? n.projectionNext : n.next;
        }
      }
      function Ur(t, e, n, r, s, i) {
        Hr(n, r, t.firstChild, e, s, i, !1);
      }
      function Br(t, e, n, r, s, i) {
        const o = n[16],
          a = o[6].projection[r.projection];
        if (Array.isArray(a))
          for (let c = 0; c < a.length; c++) Ir(e, t, s, a[c], i);
        else Hr(t, e, a, o[3], s, i, !0);
      }
      function Vr(t, e, n) {
        de(t) ? t.setAttribute(e, "style", n) : (e.style.cssText = n);
      }
      function zr(t, e, n) {
        de(t)
          ? "" === n
            ? t.removeAttribute(e, "class")
            : t.setAttribute(e, "class", n)
          : (e.className = n);
      }
      function qr(t, e, n) {
        let r = t.length;
        for (;;) {
          const s = t.indexOf(e, n);
          if (-1 === s) return s;
          if (0 === s || t.charCodeAt(s - 1) <= 32) {
            const n = e.length;
            if (s + n === r || t.charCodeAt(s + n) <= 32) return s;
          }
          n = s + 1;
        }
      }
      const Gr = "ng-template";
      function Wr(t, e, n) {
        let r = 0;
        for (; r < t.length; ) {
          let s = t[r++];
          if (n && "class" === s) {
            if (((s = t[r]), -1 !== qr(s.toLowerCase(), e, 0))) return !0;
          } else if (1 === s) {
            for (; r < t.length && "string" == typeof (s = t[r++]); )
              if (s.toLowerCase() === e) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Zr(t) {
        return 4 === t.type && t.value !== Gr;
      }
      function Kr(t, e, n) {
        return e === (4 !== t.type || n ? t.value : Gr);
      }
      function Qr(t, e, n) {
        let r = 4;
        const s = t.attrs || [],
          i = (function (t) {
            for (let e = 0; e < t.length; e++) if (ln(t[e])) return e;
            return t.length;
          })(s);
        let o = !1;
        for (let a = 0; a < e.length; a++) {
          const c = e[a];
          if ("number" != typeof c) {
            if (!o)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== c && !Kr(t, c, n)) || ("" === c && 1 === e.length))
                ) {
                  if (Jr(r)) return !1;
                  o = !0;
                }
              } else {
                const l = 8 & r ? c : e[++a];
                if (8 & r && null !== t.attrs) {
                  if (!Wr(t.attrs, l, n)) {
                    if (Jr(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const u = Yr(8 & r ? "class" : c, s, Zr(t), n);
                if (-1 === u) {
                  if (Jr(r)) return !1;
                  o = !0;
                  continue;
                }
                if ("" !== l) {
                  let t;
                  t = u > i ? "" : s[u + 1].toLowerCase();
                  const e = 8 & r ? t : null;
                  if ((e && -1 !== qr(e, l, 0)) || (2 & r && l !== t)) {
                    if (Jr(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !Jr(r) && !Jr(c)) return !1;
            if (o && Jr(c)) continue;
            (o = !1), (r = c | (1 & r));
          }
        }
        return Jr(r) || o;
      }
      function Jr(t) {
        return 0 == (1 & t);
      }
      function Yr(t, e, n, r) {
        if (null === e) return -1;
        let s = 0;
        if (r || !n) {
          let n = !1;
          for (; s < e.length; ) {
            const r = e[s];
            if (r === t) return s;
            if (3 === r || 6 === r) n = !0;
            else {
              if (1 === r || 2 === r) {
                let t = e[++s];
                for (; "string" == typeof t; ) t = e[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += n ? 1 : 2;
          }
          return -1;
        }
        return (function (t, e) {
          let n = t.indexOf(4);
          if (n > -1)
            for (n++; n < t.length; ) {
              const r = t[n];
              if ("number" == typeof r) return -1;
              if (r === e) return n;
              n++;
            }
          return -1;
        })(e, t);
      }
      function Xr(t, e, n = !1) {
        for (let r = 0; r < e.length; r++) if (Qr(t, e[r], n)) return !0;
        return !1;
      }
      function ts(t, e) {
        return t ? ":not(" + e.trim() + ")" : e;
      }
      function es(t) {
        let e = t[0],
          n = 1,
          r = 2,
          s = "",
          i = !1;
        for (; n < t.length; ) {
          let o = t[n];
          if ("string" == typeof o)
            if (2 & r) {
              const e = t[++n];
              s += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]";
            } else 8 & r ? (s += "." + o) : 4 & r && (s += " " + o);
          else
            "" === s || Jr(o) || ((e += ts(i, s)), (s = "")),
              (r = o),
              (i = i || !Jr(r));
          n++;
        }
        return "" !== s && (e += ts(i, s)), e;
      }
      const ns = {};
      function rs(t) {
        ss(Te(), Ae(), Qe() + t, Le());
      }
      function ss(t, e, n, r) {
        if (!r)
          if (3 == (3 & e[2])) {
            const r = t.preOrderCheckHooks;
            null !== r && tn(e, r, n);
          } else {
            const r = t.preOrderHooks;
            null !== r && en(e, r, 0, n);
          }
        Je(n);
      }
      function is(t, e) {
        return (t << 17) | (e << 2);
      }
      function os(t) {
        return (t >> 17) & 32767;
      }
      function as(t) {
        return 2 | t;
      }
      function cs(t) {
        return (131068 & t) >> 2;
      }
      function ls(t, e) {
        return (-131069 & t) | (e << 2);
      }
      function us(t) {
        return 1 | t;
      }
      function hs(t, e) {
        const n = t.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const n = t.data[i];
              Ue(s), n.contentQueries(2, e[i], i);
            }
          }
      }
      function ds(t, e, n, r, s, i, o, a, c, l) {
        const u = e.blueprint.slice();
        return (
          (u[0] = s),
          (u[2] = 140 | r),
          xe(u),
          (u[3] = u[15] = t),
          (u[8] = n),
          (u[10] = o || (t && t[10])),
          (u[11] = a || (t && t[11])),
          (u[12] = c || (t && t[12]) || null),
          (u[9] = l || (t && t[9]) || null),
          (u[6] = i),
          (u[16] = 2 == e.type ? t[16] : u),
          u
        );
      }
      function fs(t, e, n, r, s) {
        let i = t.data[e];
        if (null === i)
          (i = (function (t, e, n, r, s) {
            const i = Pe(),
              o = je(),
              a = (t.data[e] = (function (t, e, n, r, s, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: e ? e.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: s,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: e,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, o ? i : i && i.parent, n, e, r, s));
            return (
              null === t.firstChild && (t.firstChild = a),
              null !== i &&
                (o
                  ? null == i.child && null !== a.parent && (i.child = a)
                  : null === i.next && (i.next = a)),
              a
            );
          })(t, e, n, r, s)),
            Se.lFrame.inI18n && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = s);
          const t = (function () {
            const t = Se.lFrame,
              e = t.currentTNode;
            return t.isParent ? e : e.parent;
          })();
          i.injectorIndex = null === t ? -1 : t.injectorIndex;
        }
        return Re(i, !0), i;
      }
      function ps(t, e, n, r) {
        if (0 === n) return -1;
        const s = e.length;
        for (let i = 0; i < n; i++)
          e.push(r), t.blueprint.push(r), t.data.push(null);
        return s;
      }
      function gs(t, e, n) {
        ze(e);
        try {
          const r = t.viewQuery;
          null !== r && zs(1, r, n);
          const s = t.template;
          null !== s && ys(t, e, s, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && hs(t, e),
            t.staticViewQueries && zs(2, t.viewQuery, n);
          const i = t.components;
          null !== i &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) Ms(t, e[n]);
            })(e, i);
        } catch (r) {
          throw (t.firstCreatePass && (t.incompleteFirstPass = !0), r);
        } finally {
          (e[2] &= -5), Ke();
        }
      }
      function ms(t, e, n, r) {
        const s = e[2];
        if (256 == (256 & s)) return;
        ze(e);
        const i = Le();
        try {
          xe(e),
            (Se.lFrame.bindingIndex = t.bindingStartIndex),
            null !== n && ys(t, e, n, 2, r);
          const o = 3 == (3 & s);
          if (!i)
            if (o) {
              const n = t.preOrderCheckHooks;
              null !== n && tn(e, n, null);
            } else {
              const n = t.preOrderHooks;
              null !== n && en(e, n, 0, null), nn(e, 0);
            }
          if (
            ((function (t) {
              for (let e = xr(t); null !== e; e = Cr(e)) {
                if (!e[2]) continue;
                const t = e[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e],
                    r = n[3];
                  0 == (1024 & n[2]) && Ce(r, 1), (n[2] |= 1024);
                }
              }
            })(e),
            (function (t) {
              for (let e = xr(t); null !== e; e = Cr(e))
                for (let t = Jt; t < e.length; t++) {
                  const n = e[t],
                    r = n[1];
                  _e(n) && ms(r, n, r.template, n[8]);
                }
            })(e),
            null !== t.contentQueries && hs(t, e),
            !i)
          )
            if (o) {
              const n = t.contentCheckHooks;
              null !== n && tn(e, n);
            } else {
              const n = t.contentHooks;
              null !== n && en(e, n, 1), nn(e, 1);
            }
          !(function (t, e) {
            const n = t.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let t = 0; t < n.length; t++) {
                  const r = n[t];
                  if (r < 0) Je(~r);
                  else {
                    const s = r,
                      i = n[++t],
                      o = n[++t];
                    $e(i, s), o(2, e[s]);
                  }
                }
              } finally {
                Je(-1);
              }
          })(t, e);
          const a = t.components;
          null !== a &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) Fs(t, e[n]);
            })(e, a);
          const c = t.viewQuery;
          if ((null !== c && zs(2, c, r), !i))
            if (o) {
              const n = t.viewCheckHooks;
              null !== n && tn(e, n);
            } else {
              const n = t.viewHooks;
              null !== n && en(e, n, 2), nn(e, 2);
            }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
            i || (e[2] &= -73),
            1024 & e[2] && ((e[2] &= -1025), Ce(e[3], -1));
        } finally {
          Ke();
        }
      }
      function ws(t, e, n, r) {
        const s = e[10],
          i = !Le(),
          o = be(e);
        try {
          i && !o && s.begin && s.begin(), o && gs(t, e, r), ms(t, e, n, r);
        } finally {
          i && !o && s.end && s.end();
        }
      }
      function ys(t, e, n, r, s) {
        const i = Qe();
        try {
          Je(-1), 2 & r && e.length > Qt && ss(t, e, Qt, Le()), n(r, s);
        } finally {
          Je(i);
        }
      }
      function vs(t, e, n) {
        Ie() &&
          ((function (t, e, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            t.firstCreatePass || vn(n, e), wr(r, e);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const r = t.data[a],
                i = re(r);
              i && js(e, n, r);
              const c = Pn(e, t, a, n);
              wr(c, e),
                null !== o && Ls(0, a - s, c, r, 0, o),
                i && (ye(n.index, e)[8] = c);
            }
          })(t, e, n, me(n, e)),
          128 == (128 & n.flags) &&
            (function (t, e, n) {
              const r = n.directiveStart,
                s = n.directiveEnd,
                i = n.index,
                o = Se.lFrame.currentDirectiveIndex;
              try {
                Je(i);
                for (let n = r; n < s; n++) {
                  const r = t.data[n],
                    s = e[n];
                  Me(n),
                    (null === r.hostBindings &&
                      0 === r.hostVars &&
                      null === r.hostAttrs) ||
                      Ts(r, s);
                }
              } finally {
                Je(-1), Me(o);
              }
            })(t, e, n));
      }
      function bs(t, e, n = me) {
        const r = e.localNames;
        if (null !== r) {
          let s = e.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const o = r[i + 1],
              a = -1 === o ? n(e, t) : t[o];
            t[s++] = a;
          }
        }
      }
      function _s(t) {
        const e = t.tView;
        return null === e || e.incompleteFirstPass
          ? (t.tView = ks(
              1,
              null,
              t.template,
              t.decls,
              t.vars,
              t.directiveDefs,
              t.pipeDefs,
              t.viewQuery,
              t.schemas,
              t.consts,
            ))
          : e;
      }
      function ks(t, e, n, r, s, i, o, a, c, l) {
        const u = Qt + r,
          h = u + s,
          d = (function (t, e) {
            const n = [];
            for (let r = 0; r < e; r++) n.push(r < t ? null : ns);
            return n;
          })(u, h),
          f = "function" == typeof l ? l() : l;
        return (d[1] = {
          type: t,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: e,
          data: d.slice().fill(null, u),
          bindingStartIndex: u,
          expandoStartIndex: h,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof o ? o() : o,
          firstChild: null,
          schemas: c,
          consts: f,
          incompleteFirstPass: !1,
        });
      }
      function xs(t, e, n, r) {
        const s = Gs(e);
        null === n
          ? s.push(r)
          : (s.push(n), t.firstCreatePass && Ws(t).push(r, s.length - 1));
      }
      function Cs(t, e, n) {
        for (let r in t)
          if (t.hasOwnProperty(r)) {
            const s = t[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(e, s)
              : (n[r] = [e, s]);
          }
        return n;
      }
      function Ss(t, e, n, r, s, i, o, a) {
        const c = me(e, n);
        let l,
          u = e.inputs;
        var h;
        !a && null != u && (l = u[r])
          ? (Ks(t, n, l, r, s),
            ee(e) &&
              (function (t, e) {
                const n = ye(e, t);
                16 & n[2] || (n[2] |= 64);
              })(n, e.index))
          : 3 & e.type &&
            ((r =
              "class" === (h = r)
                ? "className"
                : "for" === h
                  ? "htmlFor"
                  : "formaction" === h
                    ? "formAction"
                    : "innerHtml" === h
                      ? "innerHTML"
                      : "readonly" === h
                        ? "readOnly"
                        : "tabindex" === h
                          ? "tabIndex"
                          : h),
            (s = null != o ? o(s, e.value || "", r) : s),
            de(i)
              ? i.setProperty(c, r, s)
              : un(r) || (c.setProperty ? c.setProperty(r, s) : (c[r] = s)));
      }
      function Is(t, e, n, r) {
        let s = !1;
        if (Ie()) {
          const i = (function (t, e, n) {
              const r = t.directiveRegistry;
              let s = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const o = r[i];
                  Xr(n, o.selectors, !1) &&
                    (s || (s = []),
                    xn(vn(n, e), t, o.type),
                    re(o) ? (Es(t, n), s.unshift(o)) : s.push(o));
                }
              return s;
            })(t, e, n),
            o = null === r ? null : { "": -1 };
          if (null !== i) {
            (s = !0), Ps(n, t.data.length, i.length);
            for (let t = 0; t < i.length; t++) {
              const e = i[t];
              e.providersResolver && e.providersResolver(e);
            }
            let r = !1,
              a = !1,
              c = ps(t, e, i.length, null);
            for (let s = 0; s < i.length; s++) {
              const l = i[s];
              (n.mergedAttrs = hn(n.mergedAttrs, l.hostAttrs)),
                Rs(t, n, e, c, l),
                Os(c, l, o),
                null !== l.contentQueries && (n.flags |= 8),
                (null === l.hostBindings &&
                  null === l.hostAttrs &&
                  0 === l.hostVars) ||
                  (n.flags |= 128);
              const u = l.type.prototype;
              !r &&
                (u.ngOnChanges || u.ngOnInit || u.ngDoCheck) &&
                ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index),
                (r = !0)),
                a ||
                  (!u.ngOnChanges && !u.ngDoCheck) ||
                  ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(
                    n.index,
                  ),
                  (a = !0)),
                c++;
            }
            !(function (t, e) {
              const n = e.directiveEnd,
                r = t.data,
                s = e.attrs,
                i = [];
              let o = null,
                a = null;
              for (let c = e.directiveStart; c < n; c++) {
                const t = r[c],
                  n = t.inputs,
                  l = null === s || Zr(e) ? null : Ns(n, s);
                i.push(l), (o = Cs(n, c, o)), (a = Cs(t.outputs, c, a));
              }
              null !== o &&
                (o.hasOwnProperty("class") && (e.flags |= 16),
                o.hasOwnProperty("style") && (e.flags |= 32)),
                (e.initialInputs = i),
                (e.inputs = o),
                (e.outputs = a);
            })(t, n);
          }
          o &&
            (function (t, e, n) {
              if (e) {
                const r = (t.localNames = []);
                for (let t = 0; t < e.length; t += 2) {
                  const s = n[e[t + 1]];
                  if (null == s)
                    throw new it(
                      "301",
                      `Export of name '${e[t + 1]}' not found!`,
                    );
                  r.push(e[t], s);
                }
              }
            })(n, r, o);
        }
        return (n.mergedAttrs = hn(n.mergedAttrs, n.attrs)), s;
      }
      function As(t, e, n, r, s, i) {
        const o = i.hostBindings;
        if (o) {
          let n = t.hostBindingOpCodes;
          null === n && (n = t.hostBindingOpCodes = []);
          const i = ~e.index;
          (function (t) {
            let e = t.length;
            for (; e > 0; ) {
              const n = t[--e];
              if ("number" == typeof n && n < 0) return n;
            }
            return 0;
          })(n) != i && n.push(i),
            n.push(r, s, o);
        }
      }
      function Ts(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e);
      }
      function Es(t, e) {
        (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
      }
      function Os(t, e, n) {
        if (n) {
          if (e.exportAs)
            for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
          re(e) && (n[""] = t);
        }
      }
      function Ps(t, e, n) {
        (t.flags |= 1),
          (t.directiveStart = e),
          (t.directiveEnd = e + n),
          (t.providerIndexes = e);
      }
      function Rs(t, e, n, r, s) {
        t.data[r] = s;
        const i = s.factory || (s.factory = se(s.type)),
          o = new an(i, re(s), null);
        (t.blueprint[r] = o),
          (n[r] = o),
          As(t, e, 0, r, ps(t, n, s.hostVars, ns), s);
      }
      function js(t, e, n) {
        const r = me(e, t),
          s = _s(n),
          i = t[10],
          o = Hs(
            t,
            ds(
              t,
              s,
              null,
              n.onPush ? 64 : 16,
              r,
              e,
              i,
              i.createRenderer(r, n),
              null,
              null,
            ),
          );
        t[e.index] = o;
      }
      function Ls(t, e, n, r, s, i) {
        const o = i[e];
        if (null !== o) {
          const t = r.setInput;
          for (let e = 0; e < o.length; ) {
            const s = o[e++],
              i = o[e++],
              a = o[e++];
            null !== t ? r.setInput(n, a, s, i) : (n[i] = a);
          }
        }
      }
      function Ns(t, e) {
        let n = null,
          r = 0;
        for (; r < e.length; ) {
          const s = e[r];
          if (0 !== s)
            if (5 !== s) {
              if ("number" == typeof s) break;
              t.hasOwnProperty(s) &&
                (null === n && (n = []), n.push(s, t[s], e[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function Ds(t, e, n, r) {
        return new Array(t, !0, !1, e, null, 0, r, n, null, null);
      }
      function Fs(t, e) {
        const n = ye(e, t);
        if (_e(n)) {
          const t = n[1];
          80 & n[2] ? ms(t, n, t.template, n[8]) : n[5] > 0 && $s(n);
        }
      }
      function $s(t) {
        for (let n = xr(t); null !== n; n = Cr(n))
          for (let t = Jt; t < n.length; t++) {
            const e = n[t];
            if (1024 & e[2]) {
              const t = e[1];
              ms(t, e, t.template, e[8]);
            } else e[5] > 0 && $s(e);
          }
        const e = t[1].components;
        if (null !== e)
          for (let n = 0; n < e.length; n++) {
            const r = ye(e[n], t);
            _e(r) && r[5] > 0 && $s(r);
          }
      }
      function Ms(t, e) {
        const n = ye(e, t),
          r = n[1];
        !(function (t, e) {
          for (let n = e.length; n < t.blueprint.length; n++)
            e.push(t.blueprint[n]);
        })(r, n),
          gs(r, n, n[8]);
      }
      function Hs(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
      }
      function Us(t) {
        for (; t; ) {
          t[2] |= 64;
          const e = kr(t);
          if (0 != (512 & t[2]) && !e) return t;
          t = e;
        }
        return null;
      }
      function Bs(t, e, n) {
        const r = e[10];
        r.begin && r.begin();
        try {
          ms(t, e, t.template, n);
        } catch (s) {
          throw (Zs(e, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function Vs(t) {
        !(function (t) {
          for (let e = 0; e < t.components.length; e++) {
            const n = t.components[e],
              r = ve(n),
              s = r[1];
            ws(s, r, s.template, n);
          }
        })(t[8]);
      }
      function zs(t, e, n) {
        Ue(0), e(t, n);
      }
      const qs = (() => Promise.resolve(null))();
      function Gs(t) {
        return t[7] || (t[7] = []);
      }
      function Ws(t) {
        return t.cleanup || (t.cleanup = []);
      }
      function Zs(t, e) {
        const n = t[9],
          r = n ? n.get(mr, null) : null;
        r && r.handleError(e);
      }
      function Ks(t, e, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            c = e[o],
            l = t.data[o];
          null !== l.setInput ? l.setInput(c, s, r, a) : (c[a] = s);
        }
      }
      function Qs(t, e, n) {
        const r = ge(e, t);
        !(function (t, e, n) {
          de(t) ? t.setValue(e, n) : (e.textContent = n);
        })(t[11], r, n);
      }
      function Js(t, e, n) {
        let r = n ? t.styles : null,
          s = n ? t.classes : null,
          i = 0;
        if (null !== e)
          for (let o = 0; o < e.length; o++) {
            const t = e[o];
            "number" == typeof t
              ? (i = t)
              : 1 == i
                ? (s = et(s, t))
                : 2 == i && (r = et(r, t + ": " + e[++o] + ";"));
          }
        n ? (t.styles = r) : (t.stylesWithoutHost = r),
          n ? (t.classes = s) : (t.classesWithoutHost = s);
      }
      const Ys = new $n("INJECTOR", -1);
      class Xs {
        get(t, e = Zn) {
          if (e === Zn) {
            const e = new Error(`NullInjectorError: No provider for ${tt(t)}!`);
            throw ((e.name = "NullInjectorError"), e);
          }
          return e;
        }
      }
      const ti = new $n("Set Injector scope."),
        ei = {},
        ni = {},
        ri = [];
      let si;
      function ii() {
        return void 0 === si && (si = new Xs()), si;
      }
      function oi(t, e = null, n = null, r) {
        return new ai(t, n, e || ii(), r);
      }
      class ai {
        constructor(t, e, n, r = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          e && Bn(e, (n) => this.processProvider(n, t, e)),
            Bn([t], (t) => this.processInjectorType(t, [], s)),
            this.records.set(Ys, li(void 0, this));
          const i = this.records.get(ti);
          (this.scope = null != i ? i.value : null),
            (this.source = r || ("object" == typeof t ? null : tt(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, e = Zn, n = yt.Default) {
          this.assertNotDestroyed();
          const r = Xn(this);
          try {
            if (!(n & yt.SkipSelf)) {
              let e = this.records.get(t);
              if (void 0 === e) {
                const n =
                  ("function" == typeof (s = t) ||
                    ("object" == typeof s && s instanceof $n)) &&
                  ht(t);
                (e = n && this.injectableDefInScope(n) ? li(ci(t), ei) : null),
                  this.records.set(t, e);
              }
              if (null != e) return this.hydrate(t, e);
            }
            return (n & yt.Self ? ii() : this.parent).get(
              t,
              (e = n & yt.Optional && e === Zn ? null : e),
            );
          } catch (i) {
            if ("NullInjectorError" === i.name) {
              if (
                ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(tt(t)),
                r)
              )
                throw i;
              return (function (t, e, n, r) {
                const s = t.ngTempTokenPath;
                throw (
                  (e[Qn] && s.unshift(e[Qn]),
                  (t.message = (function (t, e, n, r = null) {
                    t =
                      t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1)
                        ? t.substr(2)
                        : t;
                    let s = tt(e);
                    if (Array.isArray(e)) s = e.map(tt).join(" -> ");
                    else if ("object" == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let r = e[n];
                          t.push(
                            n +
                              ":" +
                              ("string" == typeof r
                                ? JSON.stringify(r)
                                : tt(r)),
                          );
                        }
                      s = `{${t.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${t.replace(Kn, "\n  ")}`;
                  })("\n" + t.message, s, n, r)),
                  (t.ngTokenPath = s),
                  (t.ngTempTokenPath = null),
                  t)
                );
              })(i, t, "R3InjectorError", this.source);
            }
            throw i;
          } finally {
            Xn(r);
          }
          var s;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((e, n) => t.push(tt(n))),
            `R3Injector[${t.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error("Injector has already been destroyed.");
        }
        processInjectorType(t, e, n) {
          if (!(t = st(t))) return !1;
          let r = ft(t);
          const s = (null == r && t.ngModule) || void 0,
            i = void 0 === s ? t : s,
            o = -1 !== n.indexOf(i);
          if ((void 0 !== s && (r = ft(s)), null == r)) return !1;
          if (null != r.imports && !o) {
            let t;
            n.push(i);
            try {
              Bn(r.imports, (r) => {
                this.processInjectorType(r, e, n) &&
                  (void 0 === t && (t = []), t.push(r));
              });
            } finally {
            }
            if (void 0 !== t)
              for (let e = 0; e < t.length; e++) {
                const { ngModule: n, providers: r } = t[e];
                Bn(r, (t) => this.processProvider(t, n, r || ri));
              }
          }
          this.injectorDefTypes.add(i);
          const a = se(i) || (() => new i());
          this.records.set(i, li(a, ei));
          const c = r.providers;
          if (null != c && !o) {
            const e = t;
            Bn(c, (t) => this.processProvider(t, e, c));
          }
          return void 0 !== s && void 0 !== t.providers;
        }
        processProvider(t, e, n) {
          let r = hi((t = st(t))) ? t : st(t && t.provide);
          const s = (function (t, e, n) {
            return ui(t)
              ? li(void 0, t.useValue)
              : li(
                  (function (t, e, n) {
                    let r;
                    if (hi(t)) {
                      const e = st(t);
                      return se(e) || ci(e);
                    }
                    if (ui(t)) r = () => st(t.useValue);
                    else if ((s = t) && s.useFactory)
                      r = () => t.useFactory(...nr(t.deps || []));
                    else if (
                      (function (t) {
                        return !(!t || !t.useExisting);
                      })(t)
                    )
                      r = () => er(st(t.useExisting));
                    else {
                      const e = st(t && (t.useClass || t.provide));
                      if (
                        !(function (t) {
                          return !!t.deps;
                        })(t)
                      )
                        return se(e) || ci(e);
                      r = () => new e(...nr(t.deps));
                    }
                    var s;
                    return r;
                  })(t),
                  ei,
                );
          })(t);
          if (hi(t) || !0 !== t.multi) this.records.get(r);
          else {
            let e = this.records.get(r);
            e ||
              ((e = li(void 0, ei, !0)),
              (e.factory = () => nr(e.multi)),
              this.records.set(r, e)),
              (r = t),
              e.multi.push(t);
          }
          this.records.set(r, s);
        }
        hydrate(t, e) {
          var n;
          return (
            e.value === ei && ((e.value = ni), (e.value = e.factory())),
            "object" == typeof e.value &&
              e.value &&
              null !== (n = e.value) &&
              "object" == typeof n &&
              "function" == typeof n.ngOnDestroy &&
              this.onDestroy.add(e.value),
            e.value
          );
        }
        injectableDefInScope(t) {
          return (
            !!t.providedIn &&
            ("string" == typeof t.providedIn
              ? "any" === t.providedIn || t.providedIn === this.scope
              : this.injectorDefTypes.has(t.providedIn))
          );
        }
      }
      function ci(t) {
        const e = ht(t),
          n = null !== e ? e.factory : se(t);
        if (null !== n) return n;
        if (t instanceof $n)
          throw new Error(`Token ${tt(t)} is missing a \u0275prov definition.`);
        if (t instanceof Function)
          return (function (t) {
            const e = t.length;
            if (e > 0) {
              const n = (function (t, e) {
                const n = [];
                for (let r = 0; r < t; r++) n.push("?");
                return n;
              })(e);
              throw new Error(
                `Can't resolve all parameters for ${tt(t)}: (${n.join(", ")}).`,
              );
            }
            const n = (function (t) {
              const e = t && (t[pt] || t[mt]);
              if (e) {
                const n = (function (t) {
                  if (t.hasOwnProperty("name")) return t.name;
                  const e = ("" + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? "" : e[1];
                })(t);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`,
                  ),
                  e
                );
              }
              return null;
            })(t);
            return null !== n ? () => n.factory(t) : () => new t();
          })(t);
        throw new Error("unreachable");
      }
      function li(t, e, n = !1) {
        return { factory: t, value: e, multi: n ? [] : void 0 };
      }
      function ui(t) {
        return null !== t && "object" == typeof t && Jn in t;
      }
      function hi(t) {
        return "function" == typeof t;
      }
      const di = function (t, e, n) {
        return (function (t, e = null, n = null, r) {
          const s = oi(t, e, n, r);
          return s._resolveInjectorDefTypes(), s;
        })({ name: n }, e, t, n);
      };
      let fi = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t)
              ? di(t, e, "")
              : di(t.providers, t.parent, t.name || "");
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = Zn),
          (t.NULL = new Xs()),
          (t.ɵprov = lt({
            token: t,
            providedIn: "any",
            factory: () => er(Ys),
          })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      function pi(t, e) {
        Xe(ve(t)[1], Oe());
      }
      let gi = null;
      function mi() {
        if (!gi) {
          const t = Et.Symbol;
          if (t && t.iterator) gi = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              "entries" !== n &&
                "size" !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (gi = n);
            }
          }
        }
        return gi;
      }
      function wi(t) {
        return (
          !!yi(t) && (Array.isArray(t) || (!(t instanceof Map) && mi() in t))
        );
      }
      function yi(t) {
        return null !== t && ("function" == typeof t || "object" == typeof t);
      }
      function vi(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0);
      }
      function bi(t, e, n, r) {
        const s = Ae();
        return (
          vi(s, De(), e) &&
            (Te(),
            (function (t, e, n, r, s, i) {
              const o = me(t, e);
              !(function (t, e, n, r, s, i, o) {
                if (null == i)
                  de(t) ? t.removeAttribute(e, s, n) : e.removeAttribute(s);
                else {
                  const a = null == o ? ot(i) : o(i, r || "", s);
                  de(t)
                    ? t.setAttribute(e, s, a, n)
                    : n
                      ? e.setAttributeNS(n, s, a)
                      : e.setAttribute(s, a);
                }
              })(e[11], o, i, t.value, n, r, s);
            })(Ye(), s, t, e, n, r)),
          bi
        );
      }
      function _i(t, e, n, r) {
        return vi(t, De(), n) ? e + ot(n) + r : ns;
      }
      function ki(t, e, n, r, s, i, o, a) {
        const c = Ae(),
          l = Te(),
          u = t + Qt,
          h = l.firstCreatePass
            ? (function (t, e, n, r, s, i, o, a, c) {
                const l = e.consts,
                  u = fs(e, t, 4, o || null, ke(l, a));
                Is(e, n, u, ke(l, c)), Xe(e, u);
                const h = (u.tViews = ks(
                  2,
                  u,
                  r,
                  s,
                  i,
                  e.directiveRegistry,
                  e.pipeRegistry,
                  null,
                  e.schemas,
                  l,
                ));
                return (
                  null !== e.queries &&
                    (e.queries.template(e, u),
                    (h.queries = e.queries.embeddedTView(u))),
                  u
                );
              })(u, l, c, e, n, r, s, i, o)
            : l.data[u];
        Re(h, !1);
        const d = c[11].createComment("");
        Dr(l, c, d, h),
          wr(d, c),
          Hs(c, (c[u] = Ds(d, c, d, h))),
          ne(h) && vs(l, c, h),
          null != o && bs(c, h, a);
      }
      function xi(t) {
        return (function (t, e) {
          return t[e];
        })(Se.lFrame.contextLView, Qt + t);
      }
      function Ci(t, e = yt.Default) {
        const n = Ae();
        return null === n ? er(t, e) : In(Oe(), n, st(t), e);
      }
      function Si(t, e, n) {
        const r = Ae();
        return vi(r, De(), e) && Ss(Te(), Ye(), r, t, e, r[11], n, !1), Si;
      }
      function Ii(t, e, n, r, s) {
        const i = s ? "class" : "style";
        Ks(t, n, e.inputs[i], i, r);
      }
      function Ai(t, e, n, r) {
        const s = Ae(),
          i = Te(),
          o = Qt + t,
          a = s[11],
          c = (s[o] = Ar(a, e, Se.lFrame.currentNamespace)),
          l = i.firstCreatePass
            ? (function (t, e, n, r, s, i, o) {
                const a = e.consts,
                  c = fs(e, t, 2, s, ke(a, i));
                return (
                  Is(e, n, c, ke(a, o)),
                  null !== c.attrs && Js(c, c.attrs, !1),
                  null !== c.mergedAttrs && Js(c, c.mergedAttrs, !0),
                  null !== e.queries && e.queries.elementStart(e, c),
                  c
                );
              })(o, i, s, 0, e, n, r)
            : i.data[o];
        Re(l, !0);
        const u = l.mergedAttrs;
        null !== u && cn(a, c, u);
        const h = l.classes;
        null !== h && zr(a, c, h);
        const d = l.styles;
        null !== d && Vr(a, c, d),
          64 != (64 & l.flags) && Dr(i, s, c, l),
          0 === Se.lFrame.elementDepthCount && wr(c, s),
          Se.lFrame.elementDepthCount++,
          ne(l) &&
            (vs(i, s, l),
            (function (t, e, n) {
              if (te(e)) {
                const r = e.directiveEnd;
                for (let s = e.directiveStart; s < r; s++) {
                  const e = t.data[s];
                  e.contentQueries && e.contentQueries(1, n[s], s);
                }
              }
            })(i, l, s)),
          null !== r && bs(s, l);
      }
      function Ti() {
        let t = Oe();
        je() ? (Se.lFrame.isParent = !1) : ((t = t.parent), Re(t, !1));
        const e = t;
        Se.lFrame.elementDepthCount--;
        const n = Te();
        n.firstCreatePass && (Xe(n, t), te(t) && n.queries.elementEnd(t)),
          null != e.classesWithoutHost &&
            (function (t) {
              return 0 != (16 & t.flags);
            })(e) &&
            Ii(n, e, Ae(), e.classesWithoutHost, !0),
          null != e.stylesWithoutHost &&
            (function (t) {
              return 0 != (32 & t.flags);
            })(e) &&
            Ii(n, e, Ae(), e.stylesWithoutHost, !1);
      }
      function Ei(t, e, n, r) {
        Ai(t, e, n, r), Ti();
      }
      function Oi() {
        return Ae();
      }
      function Pi(t) {
        return !!t && "function" == typeof t.then;
      }
      function Ri(t, e, n = !1, r) {
        const s = Ae(),
          i = Te(),
          o = Oe();
        return (
          (function (t, e, n, r, s, i, o = !1, a) {
            const c = ne(r),
              l = t.firstCreatePass && Ws(t),
              u = Gs(e);
            let h = !0;
            if (3 & r.type) {
              const d = me(r, e),
                f = a ? a(d) : Ot,
                p = f.target || d,
                g = u.length,
                m = a ? (t) => a(pe(t[r.index])).target : r.index;
              if (de(n)) {
                let o = null;
                if (
                  (!a &&
                    c &&
                    (o = (function (t, e, n, r) {
                      const s = t.cleanup;
                      if (null != s)
                        for (let i = 0; i < s.length - 1; i += 2) {
                          const t = s[i];
                          if (t === n && s[i + 1] === r) {
                            const t = e[7],
                              n = s[i + 2];
                            return t.length > n ? t[n] : null;
                          }
                          "string" == typeof t && (i += 2);
                        }
                      return null;
                    })(t, e, s, r.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i),
                    (o.__ngLastListenerFn__ = i),
                    (h = !1);
                else {
                  i = Li(r, e, i, !1);
                  const t = n.listen(f.name || p, s, i);
                  u.push(i, t), l && l.push(s, m, g, g + 1);
                }
              } else
                (i = Li(r, e, i, !0)),
                  p.addEventListener(s, i, o),
                  u.push(i),
                  l && l.push(s, m, g, o);
            } else i = Li(r, e, i, !1);
            const d = r.outputs;
            let f;
            if (h && null !== d && (f = d[s])) {
              const t = f.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[f[n]][f[n + 1]].subscribe(i),
                    o = u.length;
                  u.push(i, t), l && l.push(s, r.index, o, -(o + 1));
                }
            }
          })(i, s, s[11], o, t, e, n, r),
          Ri
        );
      }
      function ji(t, e, n) {
        try {
          return !1 !== e(n);
        } catch (r) {
          return Zs(t, r), !1;
        }
      }
      function Li(t, e, n, r) {
        return function s(i) {
          if (i === Function) return n;
          const o = 2 & t.flags ? ye(t.index, e) : e;
          0 == (32 & e[2]) && Us(o);
          let a = ji(e, n, i),
            c = s.__ngNextListenerFn__;
          for (; c; ) (a = ji(e, c, i) && a), (c = c.__ngNextListenerFn__);
          return r && !1 === a && (i.preventDefault(), (i.returnValue = !1)), a;
        };
      }
      function Ni(t = 1) {
        return (function (t) {
          return (Se.lFrame.contextLView = (function (t, e) {
            for (; t > 0; ) (e = e[15]), t--;
            return e;
          })(t, Se.lFrame.contextLView))[8];
        })(t);
      }
      function Di(t, e, n) {
        return Fi(t, "", e, "", n), Di;
      }
      function Fi(t, e, n, r, s) {
        const i = Ae(),
          o = _i(i, e, n, r);
        return o !== ns && Ss(Te(), Ye(), i, t, o, i[11], s, !1), Fi;
      }
      function $i(t, e, n, r, s) {
        const i = t[n + 1],
          o = null === e;
        let a = r ? os(i) : cs(i),
          c = !1;
        for (; 0 !== a && (!1 === c || o); ) {
          const n = t[a + 1];
          Mi(t[a], e) && ((c = !0), (t[a + 1] = r ? us(n) : as(n))),
            (a = r ? os(n) : cs(n));
        }
        c && (t[n + 1] = r ? as(i) : us(i));
      }
      function Mi(t, e) {
        return (
          null === t ||
          null == e ||
          (Array.isArray(t) ? t[1] : t) === e ||
          (!(!Array.isArray(t) || "string" != typeof e) && Wn(t, e) >= 0)
        );
      }
      function Hi(t, e, n) {
        return (
          (function (t, e, n, r) {
            const s = Ae(),
              i = Te(),
              o = Fe(2);
            i.firstUpdatePass &&
              (function (t, e, n, r) {
                const s = t.data;
                if (null === s[n + 1]) {
                  const i = s[Qe()],
                    o = (function (t, e) {
                      return e >= t.expandoStartIndex;
                    })(t, n);
                  (function (t, e) {
                    return 0 != (32 & t.flags);
                  })(i) &&
                    null === e &&
                    !o &&
                    (e = !1),
                    (e = (function (t, e, n, r) {
                      const s = (function (t) {
                        const e = Se.lFrame.currentDirectiveIndex;
                        return -1 === e ? null : t[e];
                      })(t);
                      let i = e.residualStyles;
                      if (null === s)
                        0 === e.styleBindings &&
                          ((n = Bi((n = Ui(null, t, e, n, r)), e.attrs, r)),
                          (i = null));
                      else {
                        const o = e.directiveStylingLast;
                        if (-1 === o || t[o] !== s)
                          if (((n = Ui(s, t, e, n, r)), null === i)) {
                            let n = (function (t, e, n) {
                              const r = e.styleBindings;
                              if (0 !== cs(r)) return t[os(r)];
                            })(t, e);
                            void 0 !== n &&
                              Array.isArray(n) &&
                              ((n = Ui(null, t, e, n[1], r)),
                              (n = Bi(n, e.attrs, r)),
                              (function (t, e, n, r) {
                                t[os(e.styleBindings)] = r;
                              })(t, e, 0, n));
                          } else
                            i = (function (t, e, n) {
                              let r;
                              const s = e.directiveEnd;
                              for (
                                let i = 1 + e.directiveStylingLast;
                                i < s;
                                i++
                              )
                                r = Bi(r, t[i].hostAttrs, false);
                              return Bi(r, e.attrs, false);
                            })(t, e);
                      }
                      return void 0 !== i && (e.residualStyles = i), n;
                    })(s, i, e, r)),
                    (function (t, e, n, r, s, i) {
                      let o = e.styleBindings,
                        a = os(o),
                        c = cs(o);
                      t[r] = n;
                      let l,
                        u = !1;
                      if (Array.isArray(n)) {
                        const t = n;
                        (l = t[1]), (null === l || Wn(t, l) > 0) && (u = !0);
                      } else l = n;
                      if (s)
                        if (0 !== c) {
                          const e = os(t[a + 1]);
                          (t[r + 1] = is(e, a)),
                            0 !== e && (t[e + 1] = ls(t[e + 1], r)),
                            (t[a + 1] = (131071 & t[a + 1]) | (r << 17));
                        } else
                          (t[r + 1] = is(a, 0)),
                            0 !== a && (t[a + 1] = ls(t[a + 1], r)),
                            (a = r);
                      else
                        (t[r + 1] = is(c, 0)),
                          0 === a ? (a = r) : (t[c + 1] = ls(t[c + 1], r)),
                          (c = r);
                      u && (t[r + 1] = as(t[r + 1])),
                        $i(t, l, r, !0),
                        $i(t, l, r, !1),
                        (function (t, e, n, r, s) {
                          const i = t.residualStyles;
                          null != i &&
                            "string" == typeof e &&
                            Wn(i, e) >= 0 &&
                            (n[r + 1] = us(n[r + 1]));
                        })(e, l, t, r),
                        (o = is(a, c)),
                        (e.styleBindings = o);
                    })(s, i, e, n, o);
                }
              })(i, t, o, false),
              e !== ns &&
                vi(s, o, e) &&
                (function (t, e, n, r, s, i, o, a) {
                  if (!(3 & e.type)) return;
                  const c = t.data,
                    l = c[a + 1];
                  zi(1 == (1 & l) ? Vi(c, e, n, s, cs(l), o) : void 0) ||
                    (zi(i) ||
                      ((function (t) {
                        return 2 == (2 & t);
                      })(l) &&
                        (i = Vi(c, null, n, s, a, o))),
                    (function (t, e, n, r, s) {
                      const i = de(t);
                      {
                        let e = -1 === r.indexOf("-") ? void 0 : br.DashCase;
                        if (null == s)
                          i
                            ? t.removeStyle(n, r, e)
                            : n.style.removeProperty(r);
                        else {
                          const o =
                            "string" == typeof s && s.endsWith("!important");
                          o && ((s = s.slice(0, -10)), (e |= br.Important)),
                            i
                              ? t.setStyle(n, r, s, e)
                              : n.style.setProperty(r, s, o ? "important" : "");
                        }
                      }
                    })(r, 0, ge(Qe(), n), s, i));
                })(
                  i,
                  i.data[Qe()],
                  s,
                  s[11],
                  t,
                  (s[o + 1] = (function (t, e) {
                    return (
                      null == t ||
                        ("string" == typeof e
                          ? (t += e)
                          : "object" == typeof t && (t = tt(cr(t)))),
                      t
                    );
                  })(e, n)),
                  false,
                  o,
                );
          })(t, e, n),
          Hi
        );
      }
      function Ui(t, e, n, r, s) {
        let i = null;
        const o = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < o && ((i = e[a]), (r = Bi(r, i.hostAttrs, s)), i !== t);

        )
          a++;
        return null !== t && (n.directiveStylingLast = a), r;
      }
      function Bi(t, e, n) {
        const r = n ? 1 : 2;
        let s = -1;
        if (null !== e)
          for (let i = 0; i < e.length; i++) {
            const o = e[i];
            "number" == typeof o
              ? (s = o)
              : s === r &&
                (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]),
                qn(t, o, !!n || e[++i]));
          }
        return void 0 === t ? null : t;
      }
      function Vi(t, e, n, r, s, i) {
        const o = null === e;
        let a;
        for (; s > 0; ) {
          const e = t[s],
            i = Array.isArray(e),
            c = i ? e[1] : e,
            l = null === c;
          let u = n[s + 1];
          u === ns && (u = l ? Pt : void 0);
          let h = l ? Gn(u, r) : c === r ? u : void 0;
          if ((i && !zi(h) && (h = Gn(e, r)), zi(h) && ((a = h), o))) return a;
          const d = t[s + 1];
          s = o ? os(d) : cs(d);
        }
        if (null !== e) {
          let t = i ? e.residualClasses : e.residualStyles;
          null != t && (a = Gn(t, r));
        }
        return a;
      }
      function zi(t) {
        return void 0 !== t;
      }
      function qi(t, e = "") {
        const n = Ae(),
          r = Te(),
          s = t + Qt,
          i = r.firstCreatePass ? fs(r, s, 1, e, null) : r.data[s],
          o = (n[s] = (function (t, e) {
            return de(t) ? t.createText(e) : t.createTextNode(e);
          })(n[11], e));
        Dr(r, n, o, i), Re(i, !1);
      }
      function Gi(t, e, n) {
        const r = Ae(),
          s = _i(r, t, e, n);
        return s !== ns && Qs(r, Qe(), s), Gi;
      }
      function Wi(t, e, n, r, s) {
        const i = Ae(),
          o = (function (t, e, n, r, s, i) {
            const o = (function (t, e, n, r) {
              const s = vi(t, e, n);
              return vi(t, e + 1, r) || s;
            })(t, Se.lFrame.bindingIndex, n, s);
            return Fe(2), o ? e + ot(n) + r + ot(s) + i : ns;
          })(i, t, e, n, r, s);
        return o !== ns && Qs(i, Qe(), o), Wi;
      }
      function Zi(t, e, n) {
        const r = Ae();
        return vi(r, De(), e) && Ss(Te(), Ye(), r, t, e, r[11], n, !0), Zi;
      }
      const Ki = void 0;
      var Qi = [
        "en",
        [["a", "p"], ["AM", "PM"], Ki],
        [["AM", "PM"], Ki, Ki],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        Ki,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        Ki,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", Ki, "{1} 'at' {0}", Ki],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function (t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === e && 0 === n ? 1 : 5;
        },
      ];
      let Ji = {};
      function Yi(t) {
        return (
          t in Ji ||
            (Ji[t] =
              Et.ng &&
              Et.ng.common &&
              Et.ng.common.locales &&
              Et.ng.common.locales[t]),
          Ji[t]
        );
      }
      var Xi = (function (t) {
        return (
          (t[(t.LocaleId = 0)] = "LocaleId"),
          (t[(t.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
          (t[(t.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
          (t[(t.DaysFormat = 3)] = "DaysFormat"),
          (t[(t.DaysStandalone = 4)] = "DaysStandalone"),
          (t[(t.MonthsFormat = 5)] = "MonthsFormat"),
          (t[(t.MonthsStandalone = 6)] = "MonthsStandalone"),
          (t[(t.Eras = 7)] = "Eras"),
          (t[(t.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
          (t[(t.WeekendRange = 9)] = "WeekendRange"),
          (t[(t.DateFormat = 10)] = "DateFormat"),
          (t[(t.TimeFormat = 11)] = "TimeFormat"),
          (t[(t.DateTimeFormat = 12)] = "DateTimeFormat"),
          (t[(t.NumberSymbols = 13)] = "NumberSymbols"),
          (t[(t.NumberFormats = 14)] = "NumberFormats"),
          (t[(t.CurrencyCode = 15)] = "CurrencyCode"),
          (t[(t.CurrencySymbol = 16)] = "CurrencySymbol"),
          (t[(t.CurrencyName = 17)] = "CurrencyName"),
          (t[(t.Currencies = 18)] = "Currencies"),
          (t[(t.Directionality = 19)] = "Directionality"),
          (t[(t.PluralCase = 20)] = "PluralCase"),
          (t[(t.ExtraData = 21)] = "ExtraData"),
          t
        );
      })({});
      const to = "en-US";
      let eo = to;
      function no(t) {
        var e, n;
        (n = "Expected localeId to be defined"),
          null == (e = t) &&
            (function (t, e, n, r) {
              throw new Error(
                `ASSERTION ERROR: ${t} [Expected=> null != ${e} <=Actual]`,
              );
            })(n, e),
          "string" == typeof t && (eo = t.toLowerCase().replace(/_/g, "-"));
      }
      class ro {}
      class so {
        resolveComponentFactory(t) {
          throw (function (t) {
            const e = Error(
              `No component factory found for ${tt(t)}. Did you add it to @NgModule.entryComponents?`,
            );
            return (e.ngComponent = t), e;
          })(t);
        }
      }
      let io = (() => {
        class t {}
        return (t.NULL = new so()), t;
      })();
      function oo(...t) {}
      function ao(t, e) {
        return new lo(me(t, e));
      }
      const co = function () {
        return ao(Oe(), Ae());
      };
      let lo = (() => {
        class t {
          constructor(t) {
            this.nativeElement = t;
          }
        }
        return (t.__NG_ELEMENT_ID__ = co), t;
      })();
      function uo(t) {
        return t instanceof lo ? t.nativeElement : t;
      }
      class ho {}
      let fo = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => po()), t;
      })();
      const po = function () {
        const t = Ae(),
          e = ye(Oe().index, t);
        return (function (t) {
          return t[11];
        })(Yt(e) ? e : t);
      };
      let go = (() => {
        class t {}
        return (
          (t.ɵprov = lt({ token: t, providedIn: "root", factory: () => null })),
          t
        );
      })();
      class mo {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const wo = new mo("11.2.6");
      class yo {
        constructor() {}
        supports(t) {
          return wi(t);
        }
        create(t) {
          return new bo(t);
        }
      }
      const vo = (t, e) => e;
      class bo {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || vo);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; e || n; ) {
            const i = !n || (e && e.currentIndex < Co(n, r, s)) ? e : n,
              o = Co(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((e = e._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const t = o - r,
                e = a - r;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  e <= i && i < t && (s[n] = r + 1);
                }
                s[i.previousIndex] = e - t;
              }
            }
            o !== a && t(i, o, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (
            e = this._identityChangesHead;
            null !== e;
            e = e._nextIdentityChange
          )
            t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !wi(t)))
            throw new Error(
              `Error trying to diff '${tt(t)}'. Only arrays and iterables are allowed`,
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (r = this._trackByFn(e, n)),
                null !== s && Object.is(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, e)),
                    Object.is(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, e)), (i = !0)),
                (s = s._next);
          } else
            (e = 0),
              (function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[mi()]();
                  let r;
                  for (; !(r = n.next()).done; ) e(r.value);
                }
              })(t, (t) => {
                (r = this._trackByFn(e, t)),
                  null !== s && Object.is(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, t, r, e)),
                      Object.is(s.item, t) || this._addIdentityChange(s, t))
                    : ((s = this._mismatch(s, t, r, e)), (i = !0)),
                  (s = s._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(s), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, r) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(n, null))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, s, r))
              : null !==
                  (t =
                    null === this._linkedRecords
                      ? null
                      : this._linkedRecords.get(n, r))
                ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                  this._moveAfter(t, s, r))
                : (t = this._addAfter(new _o(e, n), s, r)),
            t
          );
        }
        _verifyReinsertion(t, e, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, r))
              : t.currentIndex != r &&
                ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return (
            this._unlink(t),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const r = null === e ? this._itHead : e._next;
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new xo()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return (
            null === e ? (this._itHead = n) : (e._next = n),
            null === n ? (this._itTail = e) : (n._prev = e),
            t
          );
        }
        _addToMoves(t, e) {
          return (
            t.previousIndex === e ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new xo()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class _o {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class ko {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if (
              (null === e || e <= n.currentIndex) &&
              Object.is(n.trackById, t)
            )
              return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class xo {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new ko()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Co(t, e, n) {
        const r = t.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + e + s;
      }
      class So {
        constructor() {}
        supports(t) {
          return t instanceof Map || yi(t);
        }
        create() {
          return new Io();
        }
      }
      class Io {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || yi(t)))
              throw new Error(
                `Error trying to diff '${tt(t)}'. Only maps and objects are allowed`,
              );
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n)
                this._maybeAddToChanges(e, t),
                  (this._appendAfter = e),
                  (e = e._next);
              else {
                const r = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, r);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
              : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new Ao(t);
          return (
            this._records.set(t, n),
            (n.currentValue = e),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          Object.is(e, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = e),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map
            ? t.forEach(e)
            : Object.keys(t).forEach((n) => e(t[n], n));
        }
      }
      class Ao {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function To() {
        return new Eo([new yo()]);
      }
      let Eo = (() => {
        class t {
          constructor(t) {
            this.factories = t;
          }
          static create(e, n) {
            if (null != n) {
              const t = n.factories.slice();
              e = e.concat(t);
            }
            return new t(e);
          }
          static extend(e) {
            return {
              provide: t,
              useFactory: (n) => t.create(e, n || To()),
              deps: [[t, new or(), new ir()]],
            };
          }
          find(t) {
            const e = this.factories.find((e) => e.supports(t));
            if (null != e) return e;
            throw new Error(
              `Cannot find a differ supporting object '${t}' of type '${((n = t), n.name || typeof n)}'`,
            );
            var n;
          }
        }
        return (t.ɵprov = lt({ token: t, providedIn: "root", factory: To })), t;
      })();
      function Oo() {
        return new Po([new So()]);
      }
      let Po = (() => {
        class t {
          constructor(t) {
            this.factories = t;
          }
          static create(e, n) {
            if (n) {
              const t = n.factories.slice();
              e = e.concat(t);
            }
            return new t(e);
          }
          static extend(e) {
            return {
              provide: t,
              useFactory: (n) => t.create(e, n || Oo()),
              deps: [[t, new or(), new ir()]],
            };
          }
          find(t) {
            const e = this.factories.find((e) => e.supports(t));
            if (e) return e;
            throw new Error(`Cannot find a differ supporting object '${t}'`);
          }
        }
        return (t.ɵprov = lt({ token: t, providedIn: "root", factory: Oo })), t;
      })();
      function Ro(t, e, n, r, s = !1) {
        for (; null !== n; ) {
          const i = e[n.index];
          if ((null !== i && r.push(pe(i)), Xt(i)))
            for (let t = Jt; t < i.length; t++) {
              const e = i[t],
                n = e[1].firstChild;
              null !== n && Ro(e[1], e, n, r);
            }
          const o = n.type;
          if (8 & o) Ro(t, e, n.child, r);
          else if (32 & o) {
            const t = _r(n, e);
            let s;
            for (; (s = t()); ) r.push(s);
          } else if (16 & o) {
            const t = $r(e, n);
            if (Array.isArray(t)) r.push(...t);
            else {
              const n = kr(e[16]);
              Ro(n[1], n, t, r, !0);
            }
          }
          n = s ? n.projectionNext : n.next;
        }
        return r;
      }
      class jo {
        constructor(t, e) {
          (this._lView = t),
            (this._cdRefInjectingView = e),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            e = t[1];
          return Ro(e, t, e.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (Xt(t)) {
              const e = t[8],
                n = e ? e.indexOf(this) : -1;
              n > -1 && (Er(t, n), zn(e, n));
            }
            this._attachedToViewContainer = !1;
          }
          Or(this._lView[1], this._lView);
        }
        onDestroy(t) {
          xs(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          Us(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Bs(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (t, e, n) {
            Ne(!0);
            try {
              Bs(t, e, n);
            } finally {
              Ne(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef() {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!",
            );
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null),
            Ur(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer)
            throw new Error(
              "This view is already attached to a ViewContainer!",
            );
          this._appRef = t;
        }
      }
      class Lo extends jo {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Vs(this._view);
        }
        checkNoChanges() {
          !(function (t) {
            Ne(!0);
            try {
              Vs(t);
            } finally {
              Ne(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      const No = function (t = !1) {
        return (function (t, e, n) {
          if (!n && ee(t)) {
            const n = ye(t.index, e);
            return new jo(n, n);
          }
          return 47 & t.type ? new jo(e[16], e) : null;
        })(Oe(), Ae(), t);
      };
      let Do = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = No), (t.__ChangeDetectorRef__ = !0), t;
      })();
      const Fo = [new So()],
        $o = new Eo([new yo()]),
        Mo = new Po(Fo),
        Ho = function () {
          return zo(Oe(), Ae());
        };
      let Uo = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = Ho), t;
      })();
      const Bo = Uo,
        Vo = class extends Bo {
          constructor(t, e, n) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = e),
              (this.elementRef = n);
          }
          createEmbeddedView(t) {
            const e = this._declarationTContainer.tViews,
              n = ds(
                this._declarationLView,
                e,
                t,
                16,
                null,
                e.declTNode,
                null,
                null,
                null,
                null,
              );
            n[17] = this._declarationLView[this._declarationTContainer.index];
            const r = this._declarationLView[19];
            return (
              null !== r && (n[19] = r.createEmbeddedView(e)),
              gs(e, n, t),
              new jo(n)
            );
          }
        };
      function zo(t, e) {
        return 4 & t.type ? new Vo(e, t, ao(t, e)) : null;
      }
      class qo {}
      class Go {}
      const Wo = function () {
        return Xo(Oe(), Ae());
      };
      let Zo = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = Wo), t;
      })();
      const Ko = Zo,
        Qo = class extends Ko {
          constructor(t, e, n) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = e),
              (this._hostLView = n);
          }
          get element() {
            return ao(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Ln(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = kn(this._hostTNode, this._hostLView);
            if (fn(t)) {
              const e = gn(t, this._hostLView),
                n = pn(t);
              return new Ln(e[1].data[n + 8], e);
            }
            return new Ln(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const e = Jo(this._lContainer);
            return (null !== e && e[t]) || null;
          }
          get length() {
            return this._lContainer.length - Jt;
          }
          createEmbeddedView(t, e, n) {
            const r = t.createEmbeddedView(e || {});
            return this.insert(r, n), r;
          }
          createComponent(t, e, n, r, s) {
            const i = n || this.parentInjector;
            if (!s && null == t.ngModule && i) {
              const t = i.get(qo, null);
              t && (s = t);
            }
            const o = t.create(i, r, void 0, s);
            return this.insert(o.hostView, e), o;
          }
          insert(t, e) {
            const n = t._lView,
              r = n[1];
            if (Xt(n[3])) {
              const e = this.indexOf(t);
              if (-1 !== e) this.detach(e);
              else {
                const e = n[3],
                  r = new Qo(e, e[6], e[3]);
                r.detach(r.indexOf(t));
              }
            }
            const s = this._adjustIndex(e),
              i = this._lContainer;
            !(function (t, e, n, r) {
              const s = Jt + r,
                i = n.length;
              r > 0 && (n[s - 1][4] = e),
                r < i - Jt
                  ? ((e[4] = n[s]), Vn(n, Jt + r, e))
                  : (n.push(e), (e[4] = null)),
                (e[3] = n);
              const o = e[17];
              null !== o &&
                n !== o &&
                (function (t, e) {
                  const n = t[9];
                  e[16] !== e[3][3][16] && (t[2] = !0),
                    null === n ? (t[9] = [e]) : n.push(e);
                })(o, e);
              const a = e[19];
              null !== a && a.insertView(t), (e[2] |= 128);
            })(r, n, i, s);
            const o = Mr(s, i),
              a = n[11],
              c = Nr(a, i[7]);
            return (
              null !== c &&
                (function (t, e, n, r, s, i) {
                  (r[0] = s), (r[6] = e), Ur(t, r, n, 1, s, i);
                })(r, i[6], a, n, c, o),
              t.attachToViewContainerRef(),
              Vn(Yo(i), s, t),
              t
            );
          }
          move(t, e) {
            return this.insert(t, e);
          }
          indexOf(t) {
            const e = Jo(this._lContainer);
            return null !== e ? e.indexOf(t) : -1;
          }
          remove(t) {
            const e = this._adjustIndex(t, -1),
              n = Er(this._lContainer, e);
            n && (zn(Yo(this._lContainer), e), Or(n[1], n));
          }
          detach(t) {
            const e = this._adjustIndex(t, -1),
              n = Er(this._lContainer, e);
            return n && null != zn(Yo(this._lContainer), e) ? new jo(n) : null;
          }
          _adjustIndex(t, e = 0) {
            return null == t ? this.length + e : t;
          }
        };
      function Jo(t) {
        return t[8];
      }
      function Yo(t) {
        return t[8] || (t[8] = []);
      }
      function Xo(t, e) {
        let n;
        const r = e[t.index];
        if (Xt(r)) n = r;
        else {
          let s;
          if (8 & t.type) s = pe(r);
          else {
            const n = e[11];
            s = n.createComment("");
            const r = me(t, e);
            Rr(
              n,
              Nr(n, r),
              s,
              (function (t, e) {
                return de(t) ? t.nextSibling(e) : e.nextSibling;
              })(n, r),
              !1,
            );
          }
          (e[t.index] = n = Ds(r, e, s, t)), Hs(e, n);
        }
        return new Qo(n, t, e);
      }
      const ta = {};
      class ea extends io {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const e = Zt(t);
          return new sa(e, this.ngModule);
        }
      }
      function na(t) {
        const e = [];
        for (let n in t)
          t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      const ra = new $n("SCHEDULER_TOKEN", {
        providedIn: "root",
        factory: () => yr,
      });
      class sa extends ro {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(es).join(",")),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!e);
        }
        get inputs() {
          return na(this.componentDef.inputs);
        }
        get outputs() {
          return na(this.componentDef.outputs);
        }
        create(t, e, n, r) {
          const s = (r = r || this.ngModule)
              ? (function (t, e) {
                  return {
                    get: (n, r, s) => {
                      const i = t.get(n, ta, s);
                      return i !== ta || r === ta ? i : e.get(n, r, s);
                    },
                  };
                })(t, r.injector)
              : t,
            i = s.get(ho, fe),
            o = s.get(go, null),
            a = i.createRenderer(null, this.componentDef),
            c = this.componentDef.selectors[0][0] || "div",
            l = n
              ? (function (t, e, n) {
                  if (de(t)) return t.selectRootElement(e, n === Ct.ShadowDom);
                  let r = "string" == typeof e ? t.querySelector(e) : e;
                  return (r.textContent = ""), r;
                })(a, n, this.componentDef.encapsulation)
              : Ar(
                  i.createRenderer(null, this.componentDef),
                  c,
                  (function (t) {
                    const e = t.toLowerCase();
                    return "svg" === e
                      ? "http://www.w3.org/2000/svg"
                      : "math" === e
                        ? "http://www.w3.org/1998/MathML/"
                        : null;
                  })(c),
                ),
            u = this.componentDef.onPush ? 576 : 528,
            h = {
              components: [],
              scheduler: yr,
              clean: qs,
              playerHandler: null,
              flags: 0,
            },
            d = ks(0, null, null, 1, 0, null, null, null, null, null),
            f = ds(null, d, h, u, null, null, i, a, o, s);
          let p, g;
          ze(f);
          try {
            const t = (function (t, e, n, r, s, i) {
              const o = n[1];
              n[20] = t;
              const a = fs(o, 20, 2, "#host", null),
                c = (a.mergedAttrs = e.hostAttrs);
              null !== c &&
                (Js(a, c, !0),
                null !== t &&
                  (cn(s, t, c),
                  null !== a.classes && zr(s, t, a.classes),
                  null !== a.styles && Vr(s, t, a.styles)));
              const l = r.createRenderer(t, e),
                u = ds(
                  n,
                  _s(e),
                  null,
                  e.onPush ? 64 : 16,
                  n[20],
                  a,
                  r,
                  l,
                  null,
                  null,
                );
              return (
                o.firstCreatePass &&
                  (xn(vn(a, n), o, e.type), Es(o, a), Ps(a, n.length, 1)),
                Hs(n, u),
                (n[20] = u)
              );
            })(l, this.componentDef, f, i, a);
            if (l)
              if (n) cn(a, l, ["ng-version", wo.full]);
              else {
                const { attrs: t, classes: e } = (function (t) {
                  const e = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < t.length; ) {
                    let i = t[r];
                    if ("string" == typeof i)
                      2 === s
                        ? "" !== i && e.push(i, t[++r])
                        : 8 === s && n.push(i);
                    else {
                      if (!Jr(s)) break;
                      s = i;
                    }
                    r++;
                  }
                  return { attrs: e, classes: n };
                })(this.componentDef.selectors[0]);
                t && cn(a, l, t), e && e.length > 0 && zr(a, l, e.join(" "));
              }
            if (((g = we(d, Qt)), void 0 !== e)) {
              const t = (g.projection = []);
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const r = e[n];
                t.push(null != r ? Array.from(r) : null);
              }
            }
            (p = (function (t, e, n, r, s) {
              const i = n[1],
                o = (function (t, e, n) {
                  const r = Oe();
                  t.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    Rs(t, r, e, ps(t, e, 1, null), n));
                  const s = Pn(e, t, r.directiveStart, r);
                  wr(s, e);
                  const i = me(r, e);
                  return i && wr(i, e), s;
                })(i, n, e);
              if (
                (r.components.push(o),
                (t[8] = o),
                s && s.forEach((t) => t(o, e)),
                e.contentQueries)
              ) {
                const t = Oe();
                e.contentQueries(1, o, t.directiveStart);
              }
              const a = Oe();
              return (
                !i.firstCreatePass ||
                  (null === e.hostBindings && null === e.hostAttrs) ||
                  (Je(a.index),
                  As(n[1], a, 0, a.directiveStart, a.directiveEnd, e),
                  Ts(e, o)),
                o
              );
            })(t, this.componentDef, f, h, [pi])),
              gs(d, f, null);
          } finally {
            Ke();
          }
          return new ia(this.componentType, p, ao(g, f), f, g);
        }
      }
      class ia extends class {} {
        constructor(t, e, n, r, s) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = s),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new Lo(r)),
            (this.componentType = t);
        }
        get injector() {
          return new Ln(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      const oa = new Map();
      class aa extends qo {
        constructor(t, e) {
          super(),
            (this._parent = e),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new ea(this));
          const n = Kt(t),
            r = t[Ft] || null;
          r && no(r),
            (this._bootstrapComponents = vr(n.bootstrap)),
            (this._r3Injector = oi(
              t,
              e,
              [
                { provide: qo, useValue: this },
                { provide: io, useValue: this.componentFactoryResolver },
              ],
              tt(t),
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, e = fi.THROW_IF_NOT_FOUND, n = yt.Default) {
          return t === fi || t === qo || t === Ys
            ? this
            : this._r3Injector.get(t, e, n);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class ca extends Go {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== Kt(t) &&
              (function (t) {
                const e = new Set();
                !(function t(n) {
                  const r = Kt(n, !0),
                    s = r.id;
                  null !== s &&
                    ((function (t, e, n) {
                      if (e && e !== n)
                        throw new Error(
                          `Duplicate module registered for ${t} - ${tt(e)} vs ${tt(e.name)}`,
                        );
                    })(s, oa.get(s), n),
                    oa.set(s, n));
                  const i = vr(r.imports);
                  for (const o of i) e.has(o) || (e.add(o), t(o));
                })(t);
              })(t);
        }
        create(t) {
          return new aa(this.moduleType, t);
        }
      }
      function la(t, e, n) {
        const r =
            (function () {
              const t = Se.lFrame;
              let e = t.bindingRootIndex;
              return (
                -1 === e &&
                  (e = t.bindingRootIndex = t.tView.bindingStartIndex),
                e
              );
            })() + t,
          s = Ae();
        return s[r] === ns
          ? (function (t, e, n) {
              return (t[e] = n);
            })(s, r, n ? e.call(n) : e())
          : (function (t, e) {
              return t[e];
            })(s, r);
      }
      const ua = class extends x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          let r,
            s = (t) => null,
            i = () => null;
          t && "object" == typeof t
            ? ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t.next(e));
                  }
                : (e) => {
                    t.next(e);
                  }),
              t.error &&
                (s = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t.error(e));
                    }
                  : (e) => {
                      t.error(e);
                    }),
              t.complete &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t(e));
                  }
                : (e) => {
                    t(e);
                  }),
              e &&
                (s = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e(t));
                    }
                  : (t) => {
                      e(t);
                    }),
              n &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const o = super.subscribe(r, s, i);
          return t instanceof h && t.add(o), o;
        }
      };
      function ha() {
        return this._results[mi()]();
      }
      class da {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const e = mi(),
            n = da.prototype;
          n[e] || (n[e] = ha);
        }
        get changes() {
          return this._changes || (this._changes = new ua());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, e) {
          return this._results.reduce(t, e);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, e) {
          const n = this;
          n.dirty = !1;
          const r = Un(t);
          (this._changesDetected = !(function (t, e, n) {
            if (t.length !== e.length) return !1;
            for (let r = 0; r < t.length; r++) {
              let s = t[r],
                i = e[r];
              if ((n && ((s = n(s)), (i = n(i))), i !== s)) return !1;
            }
            return !0;
          })(n._results, r, e)) &&
            ((n._results = r),
            (n.length = r.length),
            (n.last = r[this.length - 1]),
            (n.first = r[0]));
        }
        notifyOnChanges() {
          !this._changes ||
            (!this._changesDetected && this._emitDistinctChangesOnly) ||
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      class fa {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new fa(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class pa {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const e = t.queries;
          if (null !== e) {
            const n =
                null !== t.contentQueries ? t.contentQueries[0] : e.length,
              r = [];
            for (let t = 0; t < n; t++) {
              const n = e.getByIndex(t);
              r.push(this.queries[n.indexInDeclarationView].clone());
            }
            return new pa(r);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let e = 0; e < this.queries.length; e++)
            null !== Sa(t, e).matches && this.queries[e].setDirty();
        }
      }
      class ga {
        constructor(t, e, n = null) {
          (this.predicate = t), (this.flags = e), (this.read = n);
        }
      }
      class ma {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementStart(t, e);
        }
        elementEnd(t) {
          for (let e = 0; e < this.queries.length; e++)
            this.queries[e].elementEnd(t);
        }
        embeddedTView(t) {
          let e = null;
          for (let n = 0; n < this.length; n++) {
            const r = null !== e ? e.length : 0,
              s = this.getByIndex(n).embeddedTView(t, r);
            s &&
              ((s.indexInDeclarationView = n),
              null !== e ? e.push(s) : (e = [s]));
          }
          return null !== e ? new ma(e) : null;
        }
        template(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].template(t, e);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class wa {
        constructor(t, e = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = e);
        }
        elementStart(t, e) {
          this.isApplyingToNode(e) && this.matchTNode(t, e);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, e) {
          this.elementStart(t, e);
        }
        embeddedTView(t, e) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, e),
              new wa(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const e = this._declarationNodeIndex;
            let n = t.parent;
            for (; null !== n && 8 & n.type && n.index !== e; ) n = n.parent;
            return e === (null !== n ? n.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, e) {
          const n = this.metadata.predicate;
          if (Array.isArray(n))
            for (let r = 0; r < n.length; r++) {
              const s = n[r];
              this.matchTNodeWithReadOption(t, e, ya(e, s)),
                this.matchTNodeWithReadOption(t, e, On(e, t, s, !1, !1));
            }
          else
            n === Uo
              ? 4 & e.type && this.matchTNodeWithReadOption(t, e, -1)
              : this.matchTNodeWithReadOption(t, e, On(e, t, n, !1, !1));
        }
        matchTNodeWithReadOption(t, e, n) {
          if (null !== n) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === lo || r === Zo || (r === Uo && 4 & e.type))
                this.addMatch(e.index, -2);
              else {
                const n = On(e, t, r, !1, !1);
                null !== n && this.addMatch(e.index, n);
              }
            else this.addMatch(e.index, n);
          }
        }
        addMatch(t, e) {
          null === this.matches
            ? (this.matches = [t, e])
            : this.matches.push(t, e);
        }
      }
      function ya(t, e) {
        const n = t.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
        return null;
      }
      function va(t, e, n, r) {
        return -1 === n
          ? (function (t, e) {
              return 11 & t.type ? ao(t, e) : 4 & t.type ? zo(t, e) : null;
            })(e, t)
          : -2 === n
            ? (function (t, e, n) {
                return n === lo
                  ? ao(e, t)
                  : n === Uo
                    ? zo(e, t)
                    : n === Zo
                      ? Xo(e, t)
                      : void 0;
              })(t, e, r)
            : Pn(t, t[1], n, e);
      }
      function ba(t, e, n, r) {
        const s = e[19].queries[r];
        if (null === s.matches) {
          const r = t.data,
            i = n.matches,
            o = [];
          for (let t = 0; t < i.length; t += 2) {
            const s = i[t];
            o.push(s < 0 ? null : va(e, r[s], i[t + 1], n.metadata.read));
          }
          s.matches = o;
        }
        return s.matches;
      }
      function _a(t, e, n, r) {
        const s = t.queries.getByIndex(n),
          i = s.matches;
        if (null !== i) {
          const o = ba(t, e, s, n);
          for (let t = 0; t < i.length; t += 2) {
            const n = i[t];
            if (n > 0) r.push(o[t / 2]);
            else {
              const s = i[t + 1],
                o = e[-n];
              for (let t = Jt; t < o.length; t++) {
                const e = o[t];
                e[17] === e[3] && _a(e[1], e, s, r);
              }
              if (null !== o[9]) {
                const t = o[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e];
                  _a(n[1], n, s, r);
                }
              }
            }
          }
        }
        return r;
      }
      function ka(t) {
        const e = Ae(),
          n = Te(),
          r = He();
        Ue(r + 1);
        const s = Sa(n, r);
        if (t.dirty && be(e) === (2 == (2 & s.metadata.flags))) {
          if (null === s.matches) t.reset([]);
          else {
            const i = s.crossesNgTemplate ? _a(n, e, r, []) : ba(n, e, s, r);
            t.reset(i, uo), t.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function xa(t, e, n, r) {
        const s = Te();
        if (s.firstCreatePass) {
          const i = Oe();
          (function (t, e, n) {
            null === t.queries && (t.queries = new ma()),
              t.queries.track(new wa(e, n));
          })(s, new ga(e, n, r), i.index),
            (function (t, e) {
              const n = t.contentQueries || (t.contentQueries = []);
              e !== (n.length ? n[n.length - 1] : -1) &&
                n.push(t.queries.length - 1, e);
            })(s, t),
            2 == (2 & n) && (s.staticContentQueries = !0);
        }
        !(function (t, e, n) {
          const r = new da(4 == (4 & n));
          xs(t, e, r, r.destroy),
            null === e[19] && (e[19] = new pa()),
            e[19].queries.push(new fa(r));
        })(s, Ae(), n);
      }
      function Ca() {
        return (t = Ae()), (e = He()), t[19].queries[e].queryList;
        var t, e;
      }
      function Sa(t, e) {
        return t.queries.getByIndex(e);
      }
      const Ia = new $n("Application Initializer");
      let Aa = (() => {
        class t {
          constructor(t) {
            (this.appInits = t),
              (this.resolve = oo),
              (this.reject = oo),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, e) => {
                (this.resolve = t), (this.reject = e);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              e = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const e = this.appInits[n]();
                Pi(e) && t.push(e);
              }
            Promise.all(t)
              .then(() => {
                e();
              })
              .catch((t) => {
                this.reject(t);
              }),
              0 === t.length && e(),
              (this.initialized = !0);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(Ia, 8));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Ta = new $n("AppId"),
        Ea = {
          provide: Ta,
          useFactory: function () {
            return `${Oa()}${Oa()}${Oa()}`;
          },
          deps: [],
        };
      function Oa() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Pa = new $n("Platform Initializer"),
        Ra = new $n("Platform ID"),
        ja = new $n("appBootstrapListener");
      let La = (() => {
        class t {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Na = new $n("LocaleId"),
        Da = new $n("DefaultCurrencyCode");
      class Fa {
        constructor(t, e) {
          (this.ngModuleFactory = t), (this.componentFactories = e);
        }
      }
      const $a = function (t) {
          return new ca(t);
        },
        Ma = $a,
        Ha = function (t) {
          return Promise.resolve($a(t));
        },
        Ua = function (t) {
          const e = $a(t),
            n = vr(Kt(t).declarations).reduce((t, e) => {
              const n = Zt(e);
              return n && t.push(new sa(n)), t;
            }, []);
          return new Fa(e, n);
        },
        Ba = Ua,
        Va = function (t) {
          return Promise.resolve(Ua(t));
        };
      let za = (() => {
        class t {
          constructor() {
            (this.compileModuleSync = Ma),
              (this.compileModuleAsync = Ha),
              (this.compileModuleAndAllComponentsSync = Ba),
              (this.compileModuleAndAllComponentsAsync = Va);
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const qa = (() => Promise.resolve(0))();
      function Ga(t) {
        "undefined" == typeof Zone
          ? qa.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", t);
      }
      class Wa {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: e = !1,
          shouldCoalesceRunChangeDetection: n = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ua(!1)),
            (this.onMicrotaskEmpty = new ua(!1)),
            (this.onStable = new ua(!1)),
            (this.onError = new ua(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched();
          const r = this;
          (r._nesting = 0),
            (r._outer = r._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)),
            (r.shouldCoalesceEventChangeDetection = !n && e),
            (r.shouldCoalesceRunChangeDetection = n),
            (r.lastRequestAnimationFrameId = -1),
            (r.nativeRequestAnimationFrame = (function () {
              let t = Et.requestAnimationFrame,
                e = Et.cancelAnimationFrame;
              if ("undefined" != typeof Zone && t && e) {
                const n = t[Zone.__symbol__("OriginalDelegate")];
                n && (t = n);
                const r = e[Zone.__symbol__("OriginalDelegate")];
                r && (e = r);
              }
              return {
                nativeRequestAnimationFrame: t,
                nativeCancelAnimationFrame: e,
              };
            })().nativeRequestAnimationFrame),
            (function (t) {
              const e = () => {
                !(function (t) {
                  -1 === t.lastRequestAnimationFrameId &&
                    ((t.lastRequestAnimationFrameId =
                      t.nativeRequestAnimationFrame.call(Et, () => {
                        t.fakeTopEventTask ||
                          (t.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (t.lastRequestAnimationFrameId = -1),
                                Qa(t),
                                Ka(t);
                            },
                            void 0,
                            () => {},
                            () => {},
                          )),
                          t.fakeTopEventTask.invoke();
                      })),
                    Qa(t));
                })(t);
              };
              t._inner = t._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, s, i, o, a) => {
                  try {
                    return Ja(t), n.invokeTask(s, i, o, a);
                  } finally {
                    ((t.shouldCoalesceEventChangeDetection &&
                      "eventTask" === i.type) ||
                      t.shouldCoalesceRunChangeDetection) &&
                      e(),
                      Ya(t);
                  }
                },
                onInvoke: (n, r, s, i, o, a, c) => {
                  try {
                    return Ja(t), n.invoke(s, i, o, a, c);
                  } finally {
                    t.shouldCoalesceRunChangeDetection && e(), Ya(t);
                  }
                },
                onHasTask: (e, n, r, s) => {
                  e.hasTask(r, s),
                    n === r &&
                      ("microTask" == s.change
                        ? ((t._hasPendingMicrotasks = s.microTask),
                          Qa(t),
                          Ka(t))
                        : "macroTask" == s.change &&
                          (t.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (e, n, r, s) => (
                  e.handleError(r, s),
                  t.runOutsideAngular(() => t.onError.emit(s)),
                  !1
                ),
              });
            })(r);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!Wa.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (Wa.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask("NgZoneEvent: " + r, t, Za, oo, oo);
          try {
            return s.runTask(i, e, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const Za = {};
      function Ka(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function Qa(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          ((t.shouldCoalesceEventChangeDetection ||
            t.shouldCoalesceRunChangeDetection) &&
            -1 !== t.lastRequestAnimationFrameId)
        );
      }
      function Ja(t) {
        t._nesting++,
          t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function Ya(t) {
        t._nesting--, Ka(t);
      }
      class Xa {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ua()),
            (this.onMicrotaskEmpty = new ua()),
            (this.onStable = new ua()),
            (this.onError = new ua());
        }
        run(t, e, n) {
          return t.apply(e, n);
        }
        runGuarded(t, e, n) {
          return t.apply(e, n);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, e, n, r) {
          return t.apply(e, n);
        }
      }
      let tc = (() => {
          class t {
            constructor(t) {
              (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Wa.assertNotInAngularZone(),
                        Ga(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Ga(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (e) =>
                    !e.updateCb ||
                    !e.updateCb(t) ||
                    (clearTimeout(e.timeoutId), !1),
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data,
                  }))
                : [];
            }
            addCallback(t, e, n) {
              let r = -1;
              e &&
                e > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (t) => t.timeoutId !== r,
                  )),
                    t(this._didWork, this.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n });
            }
            whenStable(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?',
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(t, e, n) {
              return [];
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(er(Wa));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        ec = (() => {
          class t {
            constructor() {
              (this._applications = new Map()), sc.addToWindow(this);
            }
            registerApplication(t, e) {
              this._applications.set(t, e);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, e = !0) {
              return sc.findTestabilityInTree(this, t, e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class nc {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      let rc,
        sc = new nc(),
        ic = !0,
        oc = !1;
      const ac = new $n("AllowMultipleToken");
      class cc {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function lc(t, e, n = []) {
        const r = `Platform: ${e}`,
          s = new $n(r);
        return (e = []) => {
          let i = uc();
          if (!i || i.injector.get(ac, !1))
            if (t) t(n.concat(e).concat({ provide: s, useValue: !0 }));
            else {
              const t = n
                .concat(e)
                .concat(
                  { provide: s, useValue: !0 },
                  { provide: ti, useValue: "platform" },
                );
              !(function (t) {
                if (rc && !rc.destroyed && !rc.injector.get(ac, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one.",
                  );
                rc = t.get(hc);
                const e = t.get(Pa, null);
                e && e.forEach((t) => t());
              })(fi.create({ providers: t, name: r }));
            }
          return (function (t) {
            const e = uc();
            if (!e) throw new Error("No platform exists!");
            if (!e.injector.get(t, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first.",
              );
            return e;
          })(s);
        };
      }
      function uc() {
        return rc && !rc.destroyed ? rc : null;
      }
      let hc = (() => {
        class t {
          constructor(t) {
            (this._injector = t),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, e) {
            const n = (function (t, e) {
                let n;
                return (
                  (n =
                    "noop" === t
                      ? new Xa()
                      : ("zone.js" === t ? void 0 : t) ||
                        new Wa({
                          enableLongStackTrace: ((oc = !0), ic),
                          shouldCoalesceEventChangeDetection: !!(null == e
                            ? void 0
                            : e.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == e
                            ? void 0
                            : e.ngZoneRunCoalescing),
                        })),
                  n
                );
              })(e ? e.ngZone : void 0, {
                ngZoneEventCoalescing: (e && e.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (e && e.ngZoneRunCoalescing) || !1,
              }),
              r = [{ provide: Wa, useValue: n }];
            return n.run(() => {
              const e = fi.create({
                  providers: r,
                  parent: this.injector,
                  name: t.moduleType.name,
                }),
                s = t.create(e),
                i = s.injector.get(mr, null);
              if (!i)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?",
                );
              return (
                n.runOutsideAngular(() => {
                  const t = n.onError.subscribe({
                    next: (t) => {
                      i.handleError(t);
                    },
                  });
                  s.onDestroy(() => {
                    pc(this._modules, s), t.unsubscribe();
                  });
                }),
                (function (t, e, n) {
                  try {
                    const r = n();
                    return Pi(r)
                      ? r.catch((n) => {
                          throw (
                            (e.runOutsideAngular(() => t.handleError(n)), n)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (e.runOutsideAngular(() => t.handleError(r)), r);
                  }
                })(i, n, () => {
                  const t = s.injector.get(Aa);
                  return (
                    t.runInitializers(),
                    t.donePromise.then(
                      () => (
                        no(s.injector.get(Na, to) || to),
                        this._moduleDoBootstrap(s),
                        s
                      ),
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, e = []) {
            const n = dc({}, e);
            return (function (t, e, n) {
              const r = new ca(n);
              return Promise.resolve(r);
            })(0, 0, t).then((t) => this.bootstrapModuleFactory(t, n));
          }
          _moduleDoBootstrap(t) {
            const e = t.injector.get(fc);
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach((t) => e.bootstrap(t));
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${tt(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`,
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach((t) => t.destroy()),
              this._destroyListeners.forEach((t) => t()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(fi));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function dc(t, e) {
        return Array.isArray(e)
          ? e.reduce(dc, t)
          : Object.assign(Object.assign({}, t), e);
      }
      let fc = (() => {
        class t {
          constructor(t, e, n, r, s) {
            (this._zone = t),
              (this._injector = e),
              (this._exceptionHandler = n),
              (this._componentFactoryResolver = r),
              (this._initStatus = s),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const i = new y((t) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              o = new y((t) => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    Wa.assertNotInAngularZone(),
                      Ga(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  Wa.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = (function (...t) {
              let e = Number.POSITIVE_INFINITY,
                n = null,
                r = t[t.length - 1];
              return (
                S(r)
                  ? ((n = t.pop()),
                    t.length > 1 &&
                      "number" == typeof t[t.length - 1] &&
                      (e = t.pop()))
                  : "number" == typeof r && (e = t.pop()),
                null === n && 1 === t.length && t[0] instanceof y
                  ? t[0]
                  : z(e)(q(t, n))
              );
            })(
              i,
              o.pipe((t) => {
                return G()(
                  ((e = Y),
                  function (t) {
                    let n;
                    n =
                      "function" == typeof e
                        ? e
                        : function () {
                            return e;
                          };
                    const r = Object.create(t, Q);
                    return (r.source = t), (r.subjectFactory = n), r;
                  })(t),
                );
                var e;
              }),
            );
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.",
              );
            let n;
            (n =
              t instanceof ro
                ? t
                : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const r = n.isBoundToModule ? void 0 : this._injector.get(qo),
              s = n.create(fi.NULL, [], e || n.selector, r),
              i = s.location.nativeElement,
              o = s.injector.get(tc, null),
              a = o && s.injector.get(ec);
            return (
              o && a && a.registerApplication(i, o),
              s.onDestroy(() => {
                this.detachView(s.hostView),
                  pc(this.components, s),
                  a && a.unregisterApplication(i);
              }),
              this._loadComponent(s),
              s
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(t),
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            pc(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(ja, [])
                .concat(this._bootstrapListeners)
                .forEach((e) => e(t));
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(Wa), er(fi), er(mr), er(io), er(Aa));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function pc(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class gc {}
      class mc {}
      const wc = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
      let yc = (() => {
        class t {
          constructor(t, e) {
            (this._compiler = t), (this._config = e || wc);
          }
          load(t) {
            return this.loadAndCompile(t);
          }
          loadAndCompile(t) {
            let [e, r] = t.split("#");
            return (
              void 0 === r && (r = "default"),
              n("zn8P")(e)
                .then((t) => t[r])
                .then((t) => vc(t, e, r))
                .then((t) => this._compiler.compileModuleAsync(t))
            );
          }
          loadFactory(t) {
            let [e, r] = t.split("#"),
              s = "NgFactory";
            return (
              void 0 === r && ((r = "default"), (s = "")),
              n("zn8P")(
                this._config.factoryPathPrefix +
                  e +
                  this._config.factoryPathSuffix,
              )
                .then((t) => t[r + s])
                .then((t) => vc(t, e, r))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(za), er(mc, 8));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function vc(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      const bc = lc(null, "core", [
          { provide: Ra, useValue: "unknown" },
          { provide: hc, deps: [fi] },
          { provide: ec, deps: [] },
          { provide: La, deps: [] },
        ]),
        _c = [
          { provide: fc, useClass: fc, deps: [Wa, fi, mr, io, Aa] },
          {
            provide: ra,
            deps: [Wa],
            useFactory: function (t) {
              let e = [];
              return (
                t.onStable.subscribe(() => {
                  for (; e.length; ) e.pop()();
                }),
                function (t) {
                  e.push(t);
                }
              );
            },
          },
          { provide: Aa, useClass: Aa, deps: [[new ir(), Ia]] },
          { provide: za, useClass: za, deps: [] },
          Ea,
          {
            provide: Eo,
            useFactory: function () {
              return $o;
            },
            deps: [],
          },
          {
            provide: Po,
            useFactory: function () {
              return Mo;
            },
            deps: [],
          },
          {
            provide: Na,
            useFactory: function (t) {
              return (
                no(
                  (t =
                    t ||
                    ("undefined" != typeof $localize && $localize.locale) ||
                    to),
                ),
                t
              );
            },
            deps: [[new sr(Na), new ir(), new or()]],
          },
          { provide: Da, useValue: "USD" },
        ];
      let kc = (() => {
          class t {
            constructor(t) {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(er(fc));
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ut({ providers: _c })),
            t
          );
        })(),
        xc = null;
      function Cc() {
        return xc;
      }
      const Sc = new $n("DocumentToken");
      let Ic = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = lt({ factory: Ac, token: t, providedIn: "platform" })),
          t
        );
      })();
      function Ac() {
        return er(Ec);
      }
      const Tc = new $n("Location Initialized");
      let Ec = (() => {
        class t extends Ic {
          constructor(t) {
            super(), (this._doc = t), this._init();
          }
          _init() {
            (this.location = Cc().getLocation()),
              (this._history = Cc().getHistory());
          }
          getBaseHrefFromDOM() {
            return Cc().getBaseHref(this._doc);
          }
          onPopState(t) {
            Cc()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("popstate", t, !1);
          }
          onHashChange(t) {
            Cc()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("hashchange", t, !1);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(t) {
            this.location.pathname = t;
          }
          pushState(t, e, n) {
            Oc() ? this._history.pushState(t, e, n) : (this.location.hash = n);
          }
          replaceState(t, e, n) {
            Oc()
              ? this._history.replaceState(t, e, n)
              : (this.location.hash = n);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(Sc));
          }),
          (t.ɵprov = lt({ factory: Pc, token: t, providedIn: "platform" })),
          t
        );
      })();
      function Oc() {
        return !!window.history.pushState;
      }
      function Pc() {
        return new Ec(er(Sc));
      }
      function Rc(t, e) {
        if (0 == t.length) return e;
        if (0 == e.length) return t;
        let n = 0;
        return (
          t.endsWith("/") && n++,
          e.startsWith("/") && n++,
          2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        );
      }
      function jc(t) {
        const e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length;
        return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n);
      }
      function Lc(t) {
        return t && "?" !== t[0] ? "?" + t : t;
      }
      let Nc = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = lt({ factory: Dc, token: t, providedIn: "root" })),
          t
        );
      })();
      function Dc(t) {
        const e = er(Sc).location;
        return new $c(er(Ic), (e && e.origin) || "");
      }
      const Fc = new $n("appBaseHref");
      let $c = (() => {
          class t extends Nc {
            constructor(t, e) {
              if (
                (super(),
                (this._platformLocation = t),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.",
                );
              this._baseHref = e;
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return Rc(this._baseHref, t);
            }
            path(t = !1) {
              const e =
                  this._platformLocation.pathname +
                  Lc(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? `${e}${n}` : e;
            }
            pushState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + Lc(r));
              this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + Lc(r));
              this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(er(Ic), er(Fc, 8));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Mc = (() => {
          class t extends Nc {
            constructor(t, e) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ""),
                null != e && (this._baseHref = e);
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let e = this._platformLocation.hash;
              return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e;
            }
            prepareExternalUrl(t) {
              const e = Rc(this._baseHref, t);
              return e.length > 0 ? "#" + e : e;
            }
            pushState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + Lc(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + Lc(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(er(Ic), er(Fc, 8));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Hc = (() => {
          class t {
            constructor(t, e) {
              (this._subject = new ua()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = t);
              const n = this._platformStrategy.getBaseHref();
              (this._platformLocation = e),
                (this._baseHref = jc(Bc(n))),
                this._platformStrategy.onPopState((t) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: t.state,
                    type: t.type,
                  });
                });
            }
            path(t = !1) {
              return this.normalize(this._platformStrategy.path(t));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(t, e = "") {
              return this.path() == this.normalize(t + Lc(e));
            }
            normalize(e) {
              return t.stripTrailingSlash(
                (function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, Bc(e)),
              );
            }
            prepareExternalUrl(t) {
              return (
                t && "/" !== t[0] && (t = "/" + t),
                this._platformStrategy.prepareExternalUrl(t)
              );
            }
            go(t, e = "", n = null) {
              this._platformStrategy.pushState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + Lc(e)),
                  n,
                );
            }
            replaceState(t, e = "", n = null) {
              this._platformStrategy.replaceState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + Lc(e)),
                  n,
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            onUrlChange(t) {
              this._urlChangeListeners.push(t),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((t) => {
                    this._notifyUrlChangeListeners(t.url, t.state);
                  }));
            }
            _notifyUrlChangeListeners(t = "", e) {
              this._urlChangeListeners.forEach((n) => n(t, e));
            }
            subscribe(t, e, n) {
              return this._subject.subscribe({
                next: t,
                error: e,
                complete: n,
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(er(Nc), er(Ic));
            }),
            (t.normalizeQueryParams = Lc),
            (t.joinWithSlash = Rc),
            (t.stripTrailingSlash = jc),
            (t.ɵprov = lt({ factory: Uc, token: t, providedIn: "root" })),
            t
          );
        })();
      function Uc() {
        return new Hc(er(Nc), er(Ic));
      }
      function Bc(t) {
        return t.replace(/\/index.html$/, "");
      }
      var Vc = (function (t) {
        return (
          (t[(t.Zero = 0)] = "Zero"),
          (t[(t.One = 1)] = "One"),
          (t[(t.Two = 2)] = "Two"),
          (t[(t.Few = 3)] = "Few"),
          (t[(t.Many = 4)] = "Many"),
          (t[(t.Other = 5)] = "Other"),
          t
        );
      })({});
      class zc {}
      let qc = (() => {
        class t extends zc {
          constructor(t) {
            super(), (this.locale = t);
          }
          getPluralCategory(t, e) {
            switch (
              (function (t) {
                return (function (t) {
                  const e = (function (t) {
                    return t.toLowerCase().replace(/_/g, "-");
                  })(t);
                  let n = Yi(e);
                  if (n) return n;
                  const r = e.split("-")[0];
                  if (((n = Yi(r)), n)) return n;
                  if ("en" === r) return Qi;
                  throw new Error(`Missing locale data for the locale "${t}".`);
                })(t)[Xi.PluralCase];
              })(e || this.locale)(t)
            ) {
              case Vc.Zero:
                return "zero";
              case Vc.One:
                return "one";
              case Vc.Two:
                return "two";
              case Vc.Few:
                return "few";
              case Vc.Many:
                return "many";
              default:
                return "other";
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(Na));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Gc(t, e) {
        e = encodeURIComponent(e);
        for (const n of t.split(";")) {
          const t = n.indexOf("="),
            [r, s] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
          if (r.trim() === e) return decodeURIComponent(s);
        }
        return null;
      }
      class Wc {
        constructor(t, e, n, r) {
          (this.$implicit = t),
            (this.ngForOf = e),
            (this.index = n),
            (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let Zc = (() => {
        class t {
          constructor(t, e, n) {
            (this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            this._trackByFn = t;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs
                    .find(n)
                    .create(this.ngForTrackBy);
                } catch (e) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${((t = n), t.name || typeof t)}'. NgFor only supports binding to Iterables such as Arrays.`,
                  );
                }
            }
            var t;
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const e = [];
            t.forEachOperation((t, n, r) => {
              if (null == t.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new Wc(null, this._ngForOf, -1, -1),
                    null === r ? void 0 : r,
                  ),
                  s = new Kc(t, n);
                e.push(s);
              } else if (null == r)
                this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r);
                const i = new Kc(t, s);
                e.push(i);
              }
            });
            for (let n = 0; n < e.length; n++)
              this._perViewChange(e[n].view, e[n].record);
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const t = this._viewContainer.get(n);
              (t.context.index = n),
                (t.context.count = r),
                (t.context.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange((t) => {
              this._viewContainer.get(t.currentIndex).context.$implicit =
                t.item;
            });
          }
          _perViewChange(t, e) {
            t.context.$implicit = e.item;
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Ci(Zo), Ci(Uo), Ci(Eo));
          }),
          (t.ɵdir = Wt({
            type: t,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          t
        );
      })();
      class Kc {
        constructor(t, e) {
          (this.record = t), (this.view = e);
        }
      }
      let Qc = (() => {
        class t {
          constructor(t, e) {
            (this._viewContainer = t),
              (this._context = new Jc()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = e);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t),
              this._updateView();
          }
          set ngIfThen(t) {
            Yc("ngIfThen", t),
              (this._thenTemplateRef = t),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(t) {
            Yc("ngIfElse", t),
              (this._elseTemplateRef = t),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context,
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context,
                  )));
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Ci(Zo), Ci(Uo));
          }),
          (t.ɵdir = Wt({
            type: t,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
          })),
          t
        );
      })();
      class Jc {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Yc(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(
            `${t} must be a TemplateRef, but received '${tt(e)}'.`,
          );
      }
      let Xc = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ut({ providers: [{ provide: zc, useClass: qc }] })),
            t
          );
        })(),
        tl = (() => {
          class t {}
          return (
            (t.ɵprov = lt({
              token: t,
              providedIn: "root",
              factory: () => new el(er(Sc), window),
            })),
            t
          );
        })();
      class el {
        constructor(t, e) {
          (this.document = t), (this.window = e), (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(t) {
          this.supportsScrolling() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          var e;
          if (!this.supportsScrolling()) return;
          const n =
            null !== (e = this.document.getElementById(t)) && void 0 !== e
              ? e
              : this.document.getElementsByName(t)[0];
          void 0 !== n && (this.scrollToElement(n), this.attemptFocus(n));
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            r = e.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        attemptFocus(t) {
          return t.focus(), this.document.activeElement === t;
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const t =
              nl(this.window.history) ||
              nl(Object.getPrototypeOf(this.window.history));
            return !(!t || (!t.writable && !t.set));
          } catch (t) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch (t) {
            return !1;
          }
        }
      }
      function nl(t) {
        return Object.getOwnPropertyDescriptor(t, "scrollRestoration");
      }
      class rl extends class extends class {} {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      } {
        static makeCurrent() {
          var t;
          (t = new rl()), xc || (xc = t);
        }
        getProperty(t, e) {
          return t[e];
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        getValue(t) {
          return t.value;
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
          return "window" === e
            ? window
            : "document" === e
              ? t
              : "body" === e
                ? t.body
                : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const e =
            il || ((il = document.querySelector("base")), il)
              ? il.getAttribute("href")
              : null;
          return null == e
            ? null
            : ((n = e),
              sl || (sl = document.createElement("a")),
              sl.setAttribute("href", n),
              "/" === sl.pathname.charAt(0) ? sl.pathname : "/" + sl.pathname);
          var n;
        }
        resetBaseElement() {
          il = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return Gc(document.cookie, t);
        }
      }
      let sl,
        il = null;
      const ol = new $n("TRANSITION_ID"),
        al = [
          {
            provide: Ia,
            useFactory: function (t, e, n) {
              return () => {
                n.get(Aa).donePromise.then(() => {
                  const n = Cc();
                  Array.prototype.slice
                    .apply(e.querySelectorAll("style[ng-transition]"))
                    .filter((e) => e.getAttribute("ng-transition") === t)
                    .forEach((t) => n.remove(t));
                });
              };
            },
            deps: [ol, Sc, fi],
            multi: !0,
          },
        ];
      class cl {
        static init() {
          var t;
          (t = new cl()), (sc = t);
        }
        addToWindow(t) {
          (Et.getAngularTestability = (e, n = !0) => {
            const r = t.findTestabilityInTree(e, n);
            if (null == r)
              throw new Error("Could not find testability for element.");
            return r;
          }),
            (Et.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (Et.getAllAngularRootElements = () => t.getAllRootElements()),
            Et.frameworkStabilizers || (Et.frameworkStabilizers = []),
            Et.frameworkStabilizers.push((t) => {
              const e = Et.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const s = function (e) {
                (r = r || e), n--, 0 == n && t(r);
              };
              e.forEach(function (t) {
                t.whenStable(s);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const r = t.getTestability(e);
          return null != r
            ? r
            : n
              ? Cc().isShadowRoot(e)
                ? this.findTestabilityInTree(t, e.host, !0)
                : this.findTestabilityInTree(t, e.parentElement, !0)
              : null;
        }
      }
      const ll = new $n("EventManagerPlugins");
      let ul = (() => {
        class t {
          constructor(t, e) {
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach((t) => (t.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n);
          }
          addGlobalEventListener(t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const e = this._eventNameToPlugin.get(t);
            if (e) return e;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const e = n[r];
              if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
            }
            throw new Error(`No event manager plugin found for event ${t}`);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(ll), er(Wa));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class hl {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const r = Cc().getGlobalEventTarget(this._doc, t);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${e}`);
          return this.addEventListener(r, e, n);
        }
      }
      let dl = (() => {
          class t {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const e = new Set();
              t.forEach((t) => {
                this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
              }),
                this.onStylesAdded(e);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        fl = (() => {
          class t extends dl {
            constructor(t) {
              super(),
                (this._doc = t),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(t.head);
            }
            _addStylesToHost(t, e) {
              t.forEach((t) => {
                const n = this._doc.createElement("style");
                (n.textContent = t), this._styleNodes.add(e.appendChild(n));
              });
            }
            addHost(t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }
            removeHost(t) {
              this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach((e) => this._addStylesToHost(t, e));
            }
            ngOnDestroy() {
              this._styleNodes.forEach((t) => Cc().remove(t));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(er(Sc));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const pl = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        gl = /%COMP%/g;
      function ml(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          let s = e[r];
          Array.isArray(s) ? ml(t, s, n) : ((s = s.replace(gl, t)), n.push(s));
        }
        return n;
      }
      function wl(t) {
        return (e) => {
          if ("__ngUnwrap__" === e) return t;
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      let yl = (() => {
        class t {
          constructor(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new vl(t));
          }
          createRenderer(t, e) {
            if (!t || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case Ct.Emulated: {
                let n = this.rendererByCompId.get(e.id);
                return (
                  n ||
                    ((n = new bl(
                      this.eventManager,
                      this.sharedStylesHost,
                      e,
                      this.appId,
                    )),
                    this.rendererByCompId.set(e.id, n)),
                  n.applyToHost(t),
                  n
                );
              }
              case 1:
              case Ct.ShadowDom:
                return new _l(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const t = ml(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(t),
                    this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(ul), er(fl), er(Ta));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class vl {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e
            ? document.createElementNS(pl[e] || e, t)
            : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = "string" == typeof t ? document.querySelector(t) : t;
          if (!n)
            throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ""), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, r) {
          if (r) {
            e = r + ":" + e;
            const s = pl[r];
            s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const r = pl[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, r) {
          r & (br.DashCase | br.Important)
            ? t.style.setProperty(e, n, r & br.Important ? "important" : "")
            : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & br.DashCase ? t.style.removeProperty(e) : (t.style[e] = "");
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return "string" == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, wl(n))
            : this.eventManager.addEventListener(t, e, wl(n));
        }
      }
      class bl extends vl {
        constructor(t, e, n, r) {
          super(t), (this.component = n);
          const s = ml(r + "-" + n.id, n.styles, []);
          e.addStyles(s),
            (this.contentAttr = "_ngcontent-%COMP%".replace(
              gl,
              r + "-" + n.id,
            )),
            (this.hostAttr = "_nghost-%COMP%".replace(gl, r + "-" + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, "");
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ""), n;
        }
      }
      class _l extends vl {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.shadowRoot = n.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = ml(r.id, r.styles, []);
          for (let i = 0; i < s.length; i++) {
            const t = document.createElement("style");
            (t.textContent = s[i]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t)),
          );
        }
      }
      let kl = (() => {
        class t extends hl {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, e, n) {
            return (
              t.addEventListener(e, n, !1),
              () => this.removeEventListener(t, e, n)
            );
          }
          removeEventListener(t, e, n) {
            return t.removeEventListener(e, n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(Sc));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const xl = ["alt", "control", "meta", "shift"],
        Cl = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        Sl = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        Il = {
          alt: (t) => t.altKey,
          control: (t) => t.ctrlKey,
          meta: (t) => t.metaKey,
          shift: (t) => t.shiftKey,
        };
      let Al = (() => {
        class t extends hl {
          constructor(t) {
            super(t);
          }
          supports(e) {
            return null != t.parseEventName(e);
          }
          addEventListener(e, n, r) {
            const s = t.parseEventName(n),
              i = t.eventCallback(s.fullKey, r, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => Cc().onAndCancel(e, s.domEventName, i));
          }
          static parseEventName(e) {
            const n = e.toLowerCase().split("."),
              r = n.shift();
            if (0 === n.length || ("keydown" !== r && "keyup" !== r))
              return null;
            const s = t._normalizeKey(n.pop());
            let i = "";
            if (
              (xl.forEach((t) => {
                const e = n.indexOf(t);
                e > -1 && (n.splice(e, 1), (i += t + "."));
              }),
              (i += s),
              0 != n.length || 0 === s.length)
            )
              return null;
            const o = {};
            return (o.domEventName = r), (o.fullKey = i), o;
          }
          static getEventFullKey(t) {
            let e = "",
              n = (function (t) {
                let e = t.key;
                if (null == e) {
                  if (((e = t.keyIdentifier), null == e)) return "Unidentified";
                  e.startsWith("U+") &&
                    ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                    3 === t.location && Sl.hasOwnProperty(e) && (e = Sl[e]));
                }
                return Cl[e] || e;
              })(t);
            return (
              (n = n.toLowerCase()),
              " " === n ? (n = "space") : "." === n && (n = "dot"),
              xl.forEach((r) => {
                r != n && (0, Il[r])(t) && (e += r + ".");
              }),
              (e += n),
              e
            );
          }
          static eventCallback(e, n, r) {
            return (s) => {
              t.getEventFullKey(s) === e && r.runGuarded(() => n(s));
            };
          }
          static _normalizeKey(t) {
            switch (t) {
              case "esc":
                return "escape";
              default:
                return t;
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(Sc));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Tl = lc(bc, "browser", [
          { provide: Ra, useValue: "browser" },
          {
            provide: Pa,
            useValue: function () {
              rl.makeCurrent(), cl.init();
            },
            multi: !0,
          },
          {
            provide: Sc,
            useFactory: function () {
              return (
                (function (t) {
                  he = t;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        El = [
          [],
          { provide: ti, useValue: "root" },
          {
            provide: mr,
            useFactory: function () {
              return new mr();
            },
            deps: [],
          },
          { provide: ll, useClass: kl, multi: !0, deps: [Sc, Wa, Ra] },
          { provide: ll, useClass: Al, multi: !0, deps: [Sc] },
          [],
          { provide: yl, useClass: yl, deps: [ul, fl, Ta] },
          { provide: ho, useExisting: yl },
          { provide: dl, useExisting: fl },
          { provide: fl, useClass: fl, deps: [Sc] },
          { provide: tc, useClass: tc, deps: [Wa] },
          { provide: ul, useClass: ul, deps: [ll, Wa] },
          [],
        ];
      let Ol = (() => {
        class t {
          constructor(t) {
            if (t)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.",
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: t,
              providers: [
                { provide: Ta, useValue: e.appId },
                { provide: ol, useExisting: Ta },
                al,
              ],
            };
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(t, 12));
          }),
          (t.ɵmod = qt({ type: t })),
          (t.ɵinj = ut({ providers: El, imports: [Xc, kc] })),
          t
        );
      })();
      function Pl(...t) {
        let e = t[t.length - 1];
        return S(e) ? (t.pop(), N(t, e)) : q(t);
      }
      "undefined" != typeof window && window;
      class Rl extends x {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new b();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      class jl extends p {
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
      class Ll extends p {
        constructor(t, e, n) {
          super(),
            (this.parent = t),
            (this.outerValue = e),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(
            this.outerValue,
            t,
            this.outerIndex,
            this.index++,
            this,
          );
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      function Nl(t, e, n, r, s = new Ll(t, n, r)) {
        if (!s.closed) return e instanceof y ? e.subscribe(s) : L(e)(s);
      }
      const Dl = {};
      class Fl {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new $l(t, this.resultSelector));
        }
      }
      class $l extends jl {
        constructor(t, e) {
          super(t),
            (this.resultSelector = e),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(t) {
          this.values.push(Dl), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) this.add(Nl(this, t[n], void 0, n));
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n) {
          const r = this.values,
            s = this.toRespond
              ? r[n] === Dl
                ? --this.toRespond
                : this.toRespond
              : 0;
          (r[n] = e),
            0 === s &&
              (this.resultSelector
                ? this._tryResultSelector(r)
                : this.destination.next(r.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const Ml = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "no elements in sequence"),
            (this.name = "EmptyError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      function Hl(...t) {
        return z(1)(Pl(...t));
      }
      const Ul = new y((t) => t.complete());
      function Bl(t) {
        return t
          ? (function (t) {
              return new y((e) => t.schedule(() => e.complete()));
            })(t)
          : Ul;
      }
      function Vl(t) {
        return new y((e) => {
          let n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? D(n) : Bl()).subscribe(e);
        });
      }
      function zl(t, e) {
        return "function" == typeof e
          ? (n) =>
              n.pipe(zl((n, r) => D(t(n, r)).pipe(I((t, s) => e(n, t, r, s)))))
          : (e) => e.lift(new ql(t));
      }
      class ql {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new Gl(t, this.project));
        }
      }
      class Gl extends M {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(e);
        }
        _innerSub(t) {
          const e = this.innerSubscription;
          e && e.unsubscribe();
          const n = new F(this),
            r = this.destination;
          r.add(n),
            (this.innerSubscription = H(t, n)),
            this.innerSubscription !== n && r.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
      }
      const Wl = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "argument out of range"),
            (this.name = "ArgumentOutOfRangeError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      function Zl(t) {
        return (e) => (0 === t ? Bl() : e.lift(new Kl(t)));
      }
      class Kl {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new Wl();
        }
        call(t, e) {
          return e.subscribe(new Ql(t, this.total));
        }
      }
      class Ql extends p {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e &&
            (this.destination.next(t),
            n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function Jl(t, e) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new Yl(t, e, n));
          }
        );
      }
      class Yl {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(
            new Xl(t, this.accumulator, this.seed, this.hasSeed),
          );
        }
      }
      class Xl extends p {
        constructor(t, e, n, r) {
          super(t),
            (this.accumulator = e),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function tu(t, e) {
        return function (n) {
          return n.lift(new eu(t, e));
        };
      }
      class eu {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new nu(t, this.predicate, this.thisArg));
        }
      }
      class nu extends p {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
      function ru(t) {
        return function (e) {
          const n = new su(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      class su {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new iu(t, this.selector, this.caught));
        }
      }
      class iu extends M {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const r = new F(this);
            this.add(r);
            const s = H(n, r);
            s !== r && this.add(s);
          }
        }
      }
      function ou(t, e) {
        return U(t, e, 1);
      }
      function au(t) {
        return function (e) {
          return 0 === t ? Bl() : e.lift(new cu(t));
        };
      }
      class cu {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new Wl();
        }
        call(t, e) {
          return e.subscribe(new lu(t, this.total));
        }
      }
      class lu extends p {
        constructor(t, e) {
          super(t),
            (this.total = e),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            r = this.count++;
          e.length < n ? e.push(t) : (e[r % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = e++ % n;
              t.next(r[s]);
            }
          }
          t.complete();
        }
      }
      function uu(t = fu) {
        return (e) => e.lift(new hu(t));
      }
      class hu {
        constructor(t) {
          this.errorFactory = t;
        }
        call(t, e) {
          return e.subscribe(new du(t, this.errorFactory));
        }
      }
      class du extends p {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(t) {
          (this.hasValue = !0), this.destination.next(t);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }
        }
      }
      function fu() {
        return new Ml();
      }
      function pu(t = null) {
        return (e) => e.lift(new gu(t));
      }
      class gu {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new mu(t, this.defaultValue));
        }
      }
      class mu extends p {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      function wu(t, e) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            t ? tu((e, n) => t(e, n, r)) : w,
            Zl(1),
            n ? pu(e) : uu(() => new Ml()),
          );
      }
      function yu() {}
      function vu(t, e, n) {
        return function (r) {
          return r.lift(new bu(t, e, n));
        };
      }
      class bu {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(
            new _u(t, this.nextOrObserver, this.error, this.complete),
          );
        }
      }
      class _u extends p {
        constructor(t, e, n, s) {
          super(t),
            (this._tapNext = yu),
            (this._tapError = yu),
            (this._tapComplete = yu),
            (this._tapError = n || yu),
            (this._tapComplete = s || yu),
            r(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || yu),
                (this._tapError = e.error || yu),
                (this._tapComplete = e.complete || yu));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
      class ku {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new xu(t, this.callback));
        }
      }
      class xu extends p {
        constructor(t, e) {
          super(t), this.add(new h(e));
        }
      }
      class Cu {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class Su extends Cu {
        constructor(t, e, n = "imperative", r = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Iu extends Cu {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Au extends Cu {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Tu extends Cu {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Eu extends Cu {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ou extends Cu {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Pu extends Cu {
        constructor(t, e, n, r, s) {
          super(t, e),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Ru extends Cu {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ju extends Cu {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Lu {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Nu {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Du {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
        }
      }
      class Fu {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
        }
      }
      class $u {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
        }
      }
      class Mu {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
        }
      }
      class Hu {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`;
        }
      }
      const Uu = "primary";
      class Bu {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return Object.prototype.hasOwnProperty.call(this.params, t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Vu(t) {
        return new Bu(t);
      }
      function zu(t) {
        const e = Error("NavigationCancelingError: " + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function qu(t, e, n) {
        const r = n.path.split("/");
        if (r.length > t.length) return null;
        if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length))
          return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const e = r[i],
            n = t[i];
          if (e.startsWith(":")) s[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: s };
      }
      function Gu(t, e) {
        const n = t ? Object.keys(t) : void 0,
          r = e ? Object.keys(e) : void 0;
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++)
          if (((s = n[i]), !Wu(t[s], e[s]))) return !1;
        return !0;
      }
      function Wu(t, e) {
        if (Array.isArray(t) && Array.isArray(e)) {
          if (t.length !== e.length) return !1;
          const n = [...t].sort(),
            r = [...e].sort();
          return n.every((t, e) => r[e] === t);
        }
        return t === e;
      }
      function Zu(t) {
        return Array.prototype.concat.apply([], t);
      }
      function Ku(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function Qu(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function Ju(t) {
        return (e = t) && "function" == typeof e.subscribe
          ? t
          : Pi(t)
            ? D(Promise.resolve(t))
            : Pl(t);
        var e;
      }
      function Yu(t, e, n) {
        return n
          ? (function (t, e) {
              return Gu(t, e);
            })(t.queryParams, e.queryParams) && Xu(t.root, e.root)
          : (function (t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every((n) => Wu(t[n], e[n]))
              );
            })(t.queryParams, e.queryParams) && th(t.root, e.root);
      }
      function Xu(t, e) {
        if (!ih(t.segments, e.segments)) return !1;
        if (t.numberOfChildren !== e.numberOfChildren) return !1;
        for (const n in e.children) {
          if (!t.children[n]) return !1;
          if (!Xu(t.children[n], e.children[n])) return !1;
        }
        return !0;
      }
      function th(t, e) {
        return eh(t, e, e.segments);
      }
      function eh(t, e, n) {
        if (t.segments.length > n.length)
          return !!ih(t.segments.slice(0, n.length), n) && !e.hasChildren();
        if (t.segments.length === n.length) {
          if (!ih(t.segments, n)) return !1;
          for (const n in e.children) {
            if (!t.children[n]) return !1;
            if (!th(t.children[n], e.children[n])) return !1;
          }
          return !0;
        }
        {
          const r = n.slice(0, t.segments.length),
            s = n.slice(t.segments.length);
          return (
            !!ih(t.segments, r) &&
            !!t.children.primary &&
            eh(t.children.primary, e, s)
          );
        }
      }
      class nh {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Vu(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return ch.serialize(this);
        }
      }
      class rh {
        constructor(t, e) {
          (this.segments = t),
            (this.children = e),
            (this.parent = null),
            Qu(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return lh(this);
        }
      }
      class sh {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = Vu(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return mh(this);
        }
      }
      function ih(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      class oh {}
      class ah {
        parse(t) {
          const e = new _h(t);
          return new nh(
            e.parseRootSegment(),
            e.parseQueryParams(),
            e.parseFragment(),
          );
        }
        serialize(t) {
          var e;
          return `/${uh(t.root, !0)}${(function (t) {
            const e = Object.keys(t).map((e) => {
              const n = t[e];
              return Array.isArray(n)
                ? n.map((t) => `${dh(e)}=${dh(t)}`).join("&")
                : `${dh(e)}=${dh(n)}`;
            });
            return e.length ? `?${e.join("&")}` : "";
          })(
            t.queryParams,
          )}${"string" == typeof t.fragment ? `#${((e = t.fragment), encodeURI(e))}` : ""}`;
        }
      }
      const ch = new ah();
      function lh(t) {
        return t.segments.map((t) => mh(t)).join("/");
      }
      function uh(t, e) {
        if (!t.hasChildren()) return lh(t);
        if (e) {
          const e = t.children.primary ? uh(t.children.primary, !1) : "",
            n = [];
          return (
            Qu(t.children, (t, e) => {
              e !== Uu && n.push(`${e}:${uh(t, !1)}`);
            }),
            n.length > 0 ? `${e}(${n.join("//")})` : e
          );
        }
        {
          const e = (function (t, e) {
            let n = [];
            return (
              Qu(t.children, (t, r) => {
                r === Uu && (n = n.concat(e(t, r)));
              }),
              Qu(t.children, (t, r) => {
                r !== Uu && (n = n.concat(e(t, r)));
              }),
              n
            );
          })(t, (e, n) =>
            n === Uu ? [uh(t.children.primary, !1)] : [`${n}:${uh(e, !1)}`],
          );
          return 1 === Object.keys(t.children).length &&
            null != t.children.primary
            ? `${lh(t)}/${e[0]}`
            : `${lh(t)}/(${e.join("//")})`;
        }
      }
      function hh(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function dh(t) {
        return hh(t).replace(/%3B/gi, ";");
      }
      function fh(t) {
        return hh(t)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function ph(t) {
        return decodeURIComponent(t);
      }
      function gh(t) {
        return ph(t.replace(/\+/g, "%20"));
      }
      function mh(t) {
        return `${fh(t.path)}${
          ((e = t.parameters),
          Object.keys(e)
            .map((t) => `;${fh(t)}=${fh(e[t])}`)
            .join(""))
        }`;
        var e;
      }
      const wh = /^[^\/()?;=#]+/;
      function yh(t) {
        const e = t.match(wh);
        return e ? e[0] : "";
      }
      const vh = /^[^=?&#]+/,
        bh = /^[^?&#]+/;
      class _h {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new rh([], {})
              : new rh([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional("&"));
          return t;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const t = [];
          for (
            this.peekStartsWith("(") || t.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith("(") && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) &&
              (n.primary = new rh(t, e)),
            n
          );
        }
        parseSegment() {
          const t = yh(this.remaining);
          if ("" === t && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`,
            );
          return this.capture(t), new sh(ph(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(";"); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = yh(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = yh(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[ph(e)] = ph(n);
        }
        parseQueryParam(t) {
          const e = (function (t) {
            const e = t.match(vh);
            return e ? e[0] : "";
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = (function (t) {
              const e = t.match(bh);
              return e ? e[0] : "";
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const r = gh(e),
            s = gh(n);
          if (t.hasOwnProperty(r)) {
            let e = t[r];
            Array.isArray(e) || ((e = [e]), (t[r] = e)), e.push(s);
          } else t[r] = s;
        }
        parseParens(t) {
          const e = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const n = yh(this.remaining),
              r = this.remaining[n.length];
            if ("/" !== r && ")" !== r && ";" !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let s;
            n.indexOf(":") > -1
              ? ((s = n.substr(0, n.indexOf(":"))),
                this.capture(s),
                this.capture(":"))
              : t && (s = Uu);
            const i = this.parseChildren();
            (e[s] = 1 === Object.keys(i).length ? i.primary : new rh([], i)),
              this.consumeOptional("//");
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)), !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class kh {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = xh(t, this._root);
          return e ? e.children.map((t) => t.value) : [];
        }
        firstChild(t) {
          const e = xh(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = Ch(t, this._root);
          return e.length < 2
            ? []
            : e[e.length - 2].children
                .map((t) => t.value)
                .filter((e) => e !== t);
        }
        pathFromRoot(t) {
          return Ch(t, this._root).map((t) => t.value);
        }
      }
      function xh(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = xh(t, n);
          if (e) return e;
        }
        return null;
      }
      function Ch(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const r = Ch(t, n);
          if (r.length) return r.unshift(e), r;
        }
        return [];
      }
      class Sh {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Ih(t) {
        const e = {};
        return t && t.children.forEach((t) => (e[t.value.outlet] = t)), e;
      }
      class Ah extends kh {
        constructor(t, e) {
          super(t), (this.snapshot = e), jh(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Th(t, e) {
        const n = (function (t, e) {
            const n = new Ph([], {}, {}, "", {}, Uu, e, null, t.root, -1, {});
            return new Rh("", new Sh(n, []));
          })(t, e),
          r = new Rl([new sh("", {})]),
          s = new Rl({}),
          i = new Rl({}),
          o = new Rl({}),
          a = new Rl(""),
          c = new Eh(r, s, o, a, i, Uu, e, n.root);
        return (c.snapshot = n.root), new Ah(new Sh(c, []), n);
      }
      class Eh {
        constructor(t, e, n, r, s, i, o, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(I((t) => Vu(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(I((t) => Vu(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Oh(t, e = "emptyOnly") {
        const n = t.pathFromRoot;
        let r = 0;
        if ("always" !== e)
          for (r = n.length - 1; r >= 1; ) {
            const t = n[r],
              e = n[r - 1];
            if (t.routeConfig && "" === t.routeConfig.path) r--;
            else {
              if (e.component) break;
              r--;
            }
          }
        return (function (t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign(Object.assign({}, t.params), e.params),
              data: Object.assign(Object.assign({}, t.data), e.data),
              resolve: Object.assign(
                Object.assign({}, t.resolve),
                e._resolvedData,
              ),
            }),
            { params: {}, data: {}, resolve: {} },
          );
        })(n.slice(r));
      }
      class Ph {
        constructor(t, e, n, r, s, i, o, a, c, l, u) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = c),
            (this._lastPathIndex = l),
            (this._resolve = u);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = Vu(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Vu(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url.map((t) => t.toString()).join("/")}', path:'${this.routeConfig ? this.routeConfig.path : ""}')`;
        }
      }
      class Rh extends kh {
        constructor(t, e) {
          super(e), (this.url = t), jh(this, e);
        }
        toString() {
          return Lh(this._root);
        }
      }
      function jh(t, e) {
        (e.value._routerState = t), e.children.forEach((e) => jh(t, e));
      }
      function Lh(t) {
        const e =
          t.children.length > 0 ? ` { ${t.children.map(Lh).join(", ")} } ` : "";
        return `${t.value}${e}`;
      }
      function Nh(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            Gu(e.queryParams, n.queryParams) ||
              t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            Gu(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!Gu(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            Gu(e.data, n.data) || t.data.next(n.data);
        } else
          (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function Dh(t, e) {
        var n, r;
        return (
          Gu(t.params, e.params) &&
          ih((n = t.url), (r = e.url)) &&
          n.every((t, e) => Gu(t.parameters, r[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || Dh(t.parent, e.parent))
        );
      }
      function Fh(t, e, n) {
        if (n && t.shouldReuseRoute(e.value, n.value.snapshot)) {
          const r = n.value;
          r._futureSnapshot = e.value;
          const s = (function (t, e, n) {
            return e.children.map((e) => {
              for (const r of n.children)
                if (t.shouldReuseRoute(e.value, r.value.snapshot))
                  return Fh(t, e, r);
              return Fh(t, e);
            });
          })(t, e, n);
          return new Sh(r, s);
        }
        {
          const n = t.retrieve(e.value);
          if (n) {
            const t = n.route;
            return $h(e, t), t;
          }
          {
            const n = new Eh(
                new Rl((r = e.value).url),
                new Rl(r.params),
                new Rl(r.queryParams),
                new Rl(r.fragment),
                new Rl(r.data),
                r.outlet,
                r.component,
                r,
              ),
              s = e.children.map((e) => Fh(t, e));
            return new Sh(n, s);
          }
        }
        var r;
      }
      function $h(t, e) {
        if (t.value.routeConfig !== e.value.routeConfig)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot created from a different route",
          );
        if (t.children.length !== e.children.length)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot with a different number of children",
          );
        e.value._futureSnapshot = t.value;
        for (let n = 0; n < t.children.length; ++n)
          $h(t.children[n], e.children[n]);
      }
      function Mh(t) {
        return (
          "object" == typeof t && null != t && !t.outlets && !t.segmentPath
        );
      }
      function Hh(t) {
        return "object" == typeof t && null != t && t.outlets;
      }
      function Uh(t, e, n, r, s) {
        let i = {};
        return (
          r &&
            Qu(r, (t, e) => {
              i[e] = Array.isArray(t) ? t.map((t) => `${t}`) : `${t}`;
            }),
          new nh(n.root === t ? e : Bh(n.root, t, e), i, s)
        );
      }
      function Bh(t, e, n) {
        const r = {};
        return (
          Qu(t.children, (t, s) => {
            r[s] = t === e ? n : Bh(t, e, n);
          }),
          new rh(t.segments, r)
        );
      }
      class Vh {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = e),
            (this.commands = n),
            t && n.length > 0 && Mh(n[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const r = n.find(Hh);
          if (r && r !== Ku(n))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class zh {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function qh(t, e, n) {
        if (
          (t || (t = new rh([], {})),
          0 === t.segments.length && t.hasChildren())
        )
          return Gh(t, e, n);
        const r = (function (t, e, n) {
            let r = 0,
              s = e;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < t.segments.length; ) {
              if (r >= n.length) return i;
              const e = t.segments[s],
                o = n[r];
              if (Hh(o)) break;
              const a = `${o}`,
                c = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === a) break;
              if (a && c && "object" == typeof c && void 0 === c.outlets) {
                if (!Qh(a, c, e)) return i;
                r += 2;
              } else {
                if (!Qh(a, {}, e)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(t, e, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          const e = new rh(t.segments.slice(0, r.pathIndex), {});
          return (
            (e.children.primary = new rh(
              t.segments.slice(r.pathIndex),
              t.children,
            )),
            Gh(e, 0, s)
          );
        }
        return r.match && 0 === s.length
          ? new rh(t.segments, {})
          : r.match && !t.hasChildren()
            ? Wh(t, e, n)
            : r.match
              ? Gh(t, 0, s)
              : Wh(t, e, n);
      }
      function Gh(t, e, n) {
        if (0 === n.length) return new rh(t.segments, {});
        {
          const r = (function (t) {
              return Hh(t[0]) ? t[0].outlets : { [Uu]: t };
            })(n),
            s = {};
          return (
            Qu(r, (n, r) => {
              "string" == typeof n && (n = [n]),
                null !== n && (s[r] = qh(t.children[r], e, n));
            }),
            Qu(t.children, (t, e) => {
              void 0 === r[e] && (s[e] = t);
            }),
            new rh(t.segments, s)
          );
        }
      }
      function Wh(t, e, n) {
        const r = t.segments.slice(0, e);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if (Hh(i)) {
            const t = Zh(i.outlets);
            return new rh(r, t);
          }
          if (0 === s && Mh(n[0])) {
            r.push(new sh(t.segments[e].path, Kh(n[0]))), s++;
            continue;
          }
          const o = Hh(i) ? i.outlets.primary : `${i}`,
            a = s < n.length - 1 ? n[s + 1] : null;
          o && a && Mh(a)
            ? (r.push(new sh(o, Kh(a))), (s += 2))
            : (r.push(new sh(o, {})), s++);
        }
        return new rh(r, {});
      }
      function Zh(t) {
        const e = {};
        return (
          Qu(t, (t, n) => {
            "string" == typeof t && (t = [t]),
              null !== t && (e[n] = Wh(new rh([], {}), 0, t));
          }),
          e
        );
      }
      function Kh(t) {
        const e = {};
        return Qu(t, (t, n) => (e[n] = `${t}`)), e;
      }
      function Qh(t, e, n) {
        return t == n.path && Gu(e, n.parameters);
      }
      class Jh {
        constructor(t, e, n, r) {
          (this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t),
            Nh(this.futureState.root),
            this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const r = Ih(e);
          t.children.forEach((t) => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, r[e], n), delete r[e];
          }),
            Qu(r, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(t, e, s.children);
            } else this.deactivateChildRoutes(t, e, n);
          else s && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: e,
              route: t,
              contexts: r,
            });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet),
            r = n && t.value.component ? n.children : e,
            s = Ih(t);
          for (const i of Object.keys(s))
            this.deactivateRouteAndItsChildren(s[i], r);
          n &&
            n.outlet &&
            (n.outlet.deactivate(), n.children.onOutletDeactivated());
        }
        activateChildRoutes(t, e, n) {
          const r = Ih(e);
          t.children.forEach((t) => {
            this.activateRoutes(t, r[t.value.outlet], n),
              this.forwardEvent(new Mu(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new Fu(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if ((Nh(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(t, e, s.children);
            } else this.activateChildRoutes(t, e, n);
          else if (r.component) {
            const e = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                Yh(t.route);
            } else {
              const n = (function (t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = r),
                (e.resolver = s),
                e.outlet && e.outlet.activateWith(r, s),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function Yh(t) {
        Nh(t.value), t.children.forEach(Yh);
      }
      class Xh {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function td(t) {
        return "function" == typeof t;
      }
      function ed(t) {
        return t instanceof nh;
      }
      const nd = Symbol("INITIAL_VALUE");
      function rd() {
        return zl((t) =>
          (function (...t) {
            let e, n;
            return (
              S(t[t.length - 1]) && (n = t.pop()),
              "function" == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && c(t[0]) && (t = t[0]),
              q(t, n).lift(new Fl(e))
            );
          })(
            t.map((t) =>
              t.pipe(
                Zl(1),
                (function (...t) {
                  const e = t[t.length - 1];
                  return S(e) ? (t.pop(), (n) => Hl(t, n, e)) : (e) => Hl(t, e);
                })(nd),
              ),
            ),
          ).pipe(
            Jl((t, e) => {
              let n = !1;
              return e.reduce((t, r, s) => {
                if (t !== nd) return t;
                if ((r === nd && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === e.length - 1 || ed(r)) return r;
                }
                return t;
              }, t);
            }, nd),
            tu((t) => t !== nd),
            I((t) => (ed(t) ? t : !0 === t)),
            Zl(1),
          ),
        );
      }
      let sd = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = Ut({
            type: t,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && Ei(0, "router-outlet");
            },
            directives: function () {
              return [Xd];
            },
            encapsulation: 2,
          })),
          t
        );
      })();
      function id(t, e = "") {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          od(r, ad(e, r));
        }
      }
      function od(t, e) {
        t.children && id(t.children, e);
      }
      function ad(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? `${t}/`
              : !t && e.path
                ? e.path
                : `${t}/${e.path}`
            : ""
          : t;
      }
      function cd(t) {
        const e = t.children && t.children.map(cd),
          n = e
            ? Object.assign(Object.assign({}, t), { children: e })
            : Object.assign({}, t);
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            n.outlet !== Uu &&
            (n.component = sd),
          n
        );
      }
      function ld(t) {
        return t.outlet || Uu;
      }
      function ud(t, e) {
        const n = t.filter((t) => ld(t) === e);
        return n.push(...t.filter((t) => ld(t) !== e)), n;
      }
      const hd = {
        matched: !1,
        consumedSegments: [],
        lastChild: 0,
        parameters: {},
        positionalParamSegments: {},
      };
      function dd(t, e, n) {
        var r;
        if ("" === e.path)
          return "full" === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? Object.assign({}, hd)
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                parameters: {},
                positionalParamSegments: {},
              };
        const s = (e.matcher || qu)(n, t, e);
        if (!s) return Object.assign({}, hd);
        const i = {};
        Qu(s.posParams, (t, e) => {
          i[e] = t.path;
        });
        const o =
          s.consumed.length > 0
            ? Object.assign(
                Object.assign({}, i),
                s.consumed[s.consumed.length - 1].parameters,
              )
            : i;
        return {
          matched: !0,
          consumedSegments: s.consumed,
          lastChild: s.consumed.length,
          parameters: o,
          positionalParamSegments:
            null !== (r = s.posParams) && void 0 !== r ? r : {},
        };
      }
      function fd(t, e, n, r, s = "corrected") {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some((n) => pd(t, e, n) && ld(n) !== Uu);
          })(t, n, r)
        ) {
          const s = new rh(
            e,
            (function (t, e, n, r) {
              const s = {};
              (s.primary = r),
                (r._sourceSegment = t),
                (r._segmentIndexShift = e.length);
              for (const i of n)
                if ("" === i.path && ld(i) !== Uu) {
                  const n = new rh([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = e.length),
                    (s[ld(i)] = n);
                }
              return s;
            })(t, e, r, new rh(n, t.children)),
          );
          return (
            (s._sourceSegment = t),
            (s._segmentIndexShift = e.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some((n) => pd(t, e, n));
          })(t, n, r)
        ) {
          const i = new rh(
            t.segments,
            (function (t, e, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (pd(t, n, a) && !s[ld(a)]) {
                  const n = new rh([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift =
                      "legacy" === i ? t.segments.length : e.length),
                    (o[ld(a)] = n);
                }
              return Object.assign(Object.assign({}, s), o);
            })(t, e, n, r, t.children, s),
          );
          return (
            (i._sourceSegment = t),
            (i._segmentIndexShift = e.length),
            { segmentGroup: i, slicedSegments: n }
          );
        }
        const i = new rh(t.segments, t.children);
        return (
          (i._sourceSegment = t),
          (i._segmentIndexShift = e.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      function pd(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path
        );
      }
      function gd(t, e, n, r) {
        return (
          !!(ld(t) === r || (r !== Uu && pd(e, n, t))) &&
          ("**" === t.path || dd(e, t, n).matched)
        );
      }
      function md(t, e, n) {
        return 0 === e.length && !t.children[n];
      }
      class wd {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class yd {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function vd(t) {
        return new y((e) => e.error(new wd(t)));
      }
      function bd(t) {
        return new y((e) => e.error(new yd(t)));
      }
      function _d(t) {
        return new y((e) =>
          e.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${t}'`,
            ),
          ),
        );
      }
      class kd {
        constructor(t, e, n, r, s) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = s),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(qo));
        }
        apply() {
          const t = fd(this.urlTree.root, [], [], this.config).segmentGroup,
            e = new rh(t.segments, t.children);
          return this.expandSegmentGroup(this.ngModule, this.config, e, Uu)
            .pipe(
              I((t) =>
                this.createUrlTree(
                  xd(t),
                  this.urlTree.queryParams,
                  this.urlTree.fragment,
                ),
              ),
            )
            .pipe(
              ru((t) => {
                if (t instanceof yd)
                  return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof wd) throw this.noMatchError(t);
                throw t;
              }),
            );
        }
        match(t) {
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, Uu)
            .pipe(
              I((e) => this.createUrlTree(xd(e), t.queryParams, t.fragment)),
            )
            .pipe(
              ru((t) => {
                if (t instanceof wd) throw this.noMatchError(t);
                throw t;
              }),
            );
        }
        noMatchError(t) {
          return new Error(
            `Cannot match any routes. URL Segment: '${t.segmentGroup}'`,
          );
        }
        createUrlTree(t, e, n) {
          const r = t.segments.length > 0 ? new rh([], { [Uu]: t }) : t;
          return new nh(r, e, n);
        }
        expandSegmentGroup(t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(I((t) => new rh([], t)))
            : this.expandSegment(t, n, e, n.segments, r, !0);
        }
        expandChildren(t, e, n) {
          const r = [];
          for (const s of Object.keys(n.children))
            "primary" === s ? r.unshift(s) : r.push(s);
          return D(r).pipe(
            ou((r) => {
              const s = n.children[r],
                i = ud(e, r);
              return this.expandSegmentGroup(t, i, s, r).pipe(
                I((t) => ({ segment: t, outlet: r })),
              );
            }),
            Jl((t, e) => ((t[e.outlet] = e.segment), t), {}),
            (function (t, e) {
              const n = arguments.length >= 2;
              return (r) =>
                r.pipe(
                  t ? tu((e, n) => t(e, n, r)) : w,
                  au(1),
                  n ? pu(e) : uu(() => new Ml()),
                );
            })(),
          );
        }
        expandSegment(t, e, n, r, s, i) {
          return D(n).pipe(
            ou((o) =>
              this.expandSegmentAgainstRoute(t, e, n, o, r, s, i).pipe(
                ru((t) => {
                  if (t instanceof wd) return Pl(null);
                  throw t;
                }),
              ),
            ),
            wu((t) => !!t),
            ru((t, n) => {
              if (t instanceof Ml || "EmptyError" === t.name) {
                if (md(e, r, s)) return Pl(new rh([], {}));
                throw new wd(e);
              }
              throw t;
            }),
          );
        }
        expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
          return gd(r, e, s, i)
            ? void 0 === r.redirectTo
              ? this.matchSegmentAgainstRoute(t, e, r, s, i)
              : o && this.allowRedirects
                ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
                : vd(e)
            : vd(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          return "**" === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                t,
                e,
                n,
                r,
                s,
                i,
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith("/")
            ? bd(s)
            : this.lineralizeSegments(n, s).pipe(
                U((n) => {
                  const s = new rh(n, {});
                  return this.expandSegment(t, s, e, n, r, !1);
                }),
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: c,
            positionalParamSegments: l,
          } = dd(e, r, s);
          if (!o) return vd(e);
          const u = this.applyRedirectCommands(a, r.redirectTo, l);
          return r.redirectTo.startsWith("/")
            ? bd(u)
            : this.lineralizeSegments(r, u).pipe(
                U((r) =>
                  this.expandSegment(t, e, n, r.concat(s.slice(c)), i, !1),
                ),
              );
        }
        matchSegmentAgainstRoute(t, e, n, r, s) {
          if ("**" === n.path)
            return n.loadChildren
              ? (n._loadedConfig
                  ? Pl(n._loadedConfig)
                  : this.configLoader.load(t.injector, n)
                ).pipe(I((t) => ((n._loadedConfig = t), new rh(r, {}))))
              : Pl(new rh(r, {}));
          const { matched: i, consumedSegments: o, lastChild: a } = dd(e, n, r);
          if (!i) return vd(e);
          const c = r.slice(a);
          return this.getChildConfig(t, n, r).pipe(
            U((t) => {
              const r = t.module,
                i = t.routes,
                { segmentGroup: a, slicedSegments: l } = fd(e, o, c, i),
                u = new rh(a.segments, a.children);
              if (0 === l.length && u.hasChildren())
                return this.expandChildren(r, i, u).pipe(
                  I((t) => new rh(o, t)),
                );
              if (0 === i.length && 0 === l.length) return Pl(new rh(o, {}));
              const h = ld(n) === s;
              return this.expandSegment(r, u, i, l, h ? Uu : s, !0).pipe(
                I((t) => new rh(o.concat(t.segments), t.children)),
              );
            }),
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? Pl(new Xh(e.children, t))
            : e.loadChildren
              ? void 0 !== e._loadedConfig
                ? Pl(e._loadedConfig)
                : this.runCanLoadGuards(t.injector, e, n).pipe(
                    U((n) =>
                      n
                        ? this.configLoader
                            .load(t.injector, e)
                            .pipe(I((t) => ((e._loadedConfig = t), t)))
                        : (function (t) {
                            return new y((e) =>
                              e.error(
                                zu(
                                  `Cannot load children because the guard of the route "path: '${t.path}'" returned false`,
                                ),
                              ),
                            );
                          })(e),
                    ),
                  )
              : Pl(new Xh([], t));
        }
        runCanLoadGuards(t, e, n) {
          const r = e.canLoad;
          return r && 0 !== r.length
            ? Pl(
                r.map((r) => {
                  const s = t.get(r);
                  let i;
                  if (
                    (function (t) {
                      return t && td(t.canLoad);
                    })(s)
                  )
                    i = s.canLoad(e, n);
                  else {
                    if (!td(s)) throw new Error("Invalid CanLoad guard");
                    i = s(e, n);
                  }
                  return Ju(i);
                }),
              ).pipe(
                rd(),
                vu((t) => {
                  if (!ed(t)) return;
                  const e = zu(
                    `Redirecting to "${this.urlSerializer.serialize(t)}"`,
                  );
                  throw ((e.url = t), e);
                }),
                I((t) => !0 === t),
              )
            : Pl(!0);
        }
        lineralizeSegments(t, e) {
          let n = [],
            r = e.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return Pl(n);
            if (r.numberOfChildren > 1 || !r.children.primary)
              return _d(t.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(
            e,
            this.urlSerializer.parse(e),
            t,
            n,
          );
        }
        applyRedirectCreatreUrlTree(t, e, n, r) {
          const s = this.createSegmentGroup(t, e.root, n, r);
          return new nh(
            s,
            this.createQueryParams(e.queryParams, this.urlTree.queryParams),
            e.fragment,
          );
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            Qu(t, (t, r) => {
              if ("string" == typeof t && t.startsWith(":")) {
                const s = t.substring(1);
                n[r] = e[s];
              } else n[r] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, r) {
          const s = this.createSegments(t, e.segments, n, r);
          let i = {};
          return (
            Qu(e.children, (e, s) => {
              i[s] = this.createSegmentGroup(t, e, n, r);
            }),
            new rh(s, i)
          );
        }
        createSegments(t, e, n, r) {
          return e.map((e) =>
            e.path.startsWith(":")
              ? this.findPosParam(t, e, r)
              : this.findOrReturn(e, n),
          );
        }
        findPosParam(t, e, n) {
          const r = n[e.path.substring(1)];
          if (!r)
            throw new Error(
              `Cannot redirect to '${t}'. Cannot find '${e.path}'.`,
            );
          return r;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const r of e) {
            if (r.path === t.path) return e.splice(n), r;
            n++;
          }
          return t;
        }
      }
      function xd(t) {
        const e = {};
        for (const n of Object.keys(t.children)) {
          const r = xd(t.children[n]);
          (r.segments.length > 0 || r.hasChildren()) && (e[n] = r);
        }
        return (function (t) {
          if (1 === t.numberOfChildren && t.children.primary) {
            const e = t.children.primary;
            return new rh(t.segments.concat(e.segments), e.children);
          }
          return t;
        })(new rh(t.segments, e));
      }
      class Cd {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Sd {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function Id(t, e, n) {
        const r = t._root;
        return Td(r, e ? e._root : null, n, [r.value]);
      }
      function Ad(t, e, n) {
        const r = (function (t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function Td(
        t,
        e,
        n,
        r,
        s = { canDeactivateChecks: [], canActivateChecks: [] },
      ) {
        const i = Ih(e);
        return (
          t.children.forEach((t) => {
            !(function (
              t,
              e,
              n,
              r,
              s = { canDeactivateChecks: [], canActivateChecks: [] },
            ) {
              const i = t.value,
                o = e ? e.value : null,
                a = n ? n.getContext(t.value.outlet) : null;
              if (o && i.routeConfig === o.routeConfig) {
                const c = (function (t, e, n) {
                  if ("function" == typeof n) return n(t, e);
                  switch (n) {
                    case "pathParamsChange":
                      return !ih(t.url, e.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !ih(t.url, e.url) || !Gu(t.queryParams, e.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !Dh(t, e) || !Gu(t.queryParams, e.queryParams);
                    case "paramsChange":
                    default:
                      return !Dh(t, e);
                  }
                })(o, i, i.routeConfig.runGuardsAndResolvers);
                c
                  ? s.canActivateChecks.push(new Cd(r))
                  : ((i.data = o.data), (i._resolvedData = o._resolvedData)),
                  Td(t, e, i.component ? (a ? a.children : null) : n, r, s),
                  c &&
                    a &&
                    a.outlet &&
                    a.outlet.isActivated &&
                    s.canDeactivateChecks.push(new Sd(a.outlet.component, o));
              } else
                o && Ed(e, a, s),
                  s.canActivateChecks.push(new Cd(r)),
                  Td(t, null, i.component ? (a ? a.children : null) : n, r, s);
            })(t, i[t.value.outlet], n, r.concat([t.value]), s),
              delete i[t.value.outlet];
          }),
          Qu(i, (t, e) => Ed(t, n.getContext(e), s)),
          s
        );
      }
      function Ed(t, e, n) {
        const r = Ih(t),
          s = t.value;
        Qu(r, (t, r) => {
          Ed(t, s.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new Sd(
              s.component && e && e.outlet && e.outlet.isActivated
                ? e.outlet.component
                : null,
              s,
            ),
          );
      }
      class Od {}
      function Pd(t) {
        return new y((e) => e.error(t));
      }
      class Rd {
        constructor(t, e, n, r, s, i) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          const t = fd(
              this.urlTree.root,
              [],
              [],
              this.config.filter((t) => void 0 === t.redirectTo),
              this.relativeLinkResolution,
            ).segmentGroup,
            e = this.processSegmentGroup(this.config, t, Uu);
          if (null === e) return null;
          const n = new Ph(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              Uu,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {},
            ),
            r = new Sh(n, e),
            s = new Rh(this.url, r);
          return this.inheritParamsAndData(s._root), s;
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = Oh(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach((t) => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = [];
          for (const s of Object.keys(e.children)) {
            const r = e.children[s],
              i = ud(t, s),
              o = this.processSegmentGroup(i, r, s);
            if (null === o) return null;
            n.push(...o);
          }
          const r = (function (t) {
            const e = [];
            for (const n of t) {
              if (!jd(n)) {
                e.push(n);
                continue;
              }
              const t = e.find(
                (t) => n.value.routeConfig === t.value.routeConfig,
              );
              void 0 !== t ? t.children.push(...n.children) : e.push(n);
            }
            return e;
          })(n);
          return (
            r.sort((t, e) =>
              t.value.outlet === Uu
                ? -1
                : e.value.outlet === Uu
                  ? 1
                  : t.value.outlet.localeCompare(e.value.outlet),
            ),
            r
          );
        }
        processSegment(t, e, n, r) {
          for (const s of t) {
            const t = this.processSegmentAgainstRoute(s, e, n, r);
            if (null !== t) return t;
          }
          return md(e, n, r) ? [] : null;
        }
        processSegmentAgainstRoute(t, e, n, r) {
          if (t.redirectTo || !gd(t, e, n, r)) return null;
          let s,
            i = [],
            o = [];
          if ("**" === t.path) {
            const r = n.length > 0 ? Ku(n).parameters : {};
            s = new Ph(
              n,
              r,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Dd(t),
              ld(t),
              t.component,
              t,
              Ld(e),
              Nd(e) + n.length,
              Fd(t),
            );
          } else {
            const r = dd(e, t, n);
            if (!r.matched) return null;
            (i = r.consumedSegments),
              (o = n.slice(r.lastChild)),
              (s = new Ph(
                i,
                r.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Dd(t),
                ld(t),
                t.component,
                t,
                Ld(e),
                Nd(e) + i.length,
                Fd(t),
              ));
          }
          const a = (function (t) {
              return t.children
                ? t.children
                : t.loadChildren
                  ? t._loadedConfig.routes
                  : [];
            })(t),
            { segmentGroup: c, slicedSegments: l } = fd(
              e,
              i,
              o,
              a.filter((t) => void 0 === t.redirectTo),
              this.relativeLinkResolution,
            );
          if (0 === l.length && c.hasChildren()) {
            const t = this.processChildren(a, c);
            return null === t ? null : [new Sh(s, t)];
          }
          if (0 === a.length && 0 === l.length) return [new Sh(s, [])];
          const u = ld(t) === r,
            h = this.processSegment(a, c, l, u ? Uu : r);
          return null === h ? null : [new Sh(s, h)];
        }
      }
      function jd(t) {
        const e = t.value.routeConfig;
        return e && "" === e.path && void 0 === e.redirectTo;
      }
      function Ld(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function Nd(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; )
          (e = e._sourceSegment),
            (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function Dd(t) {
        return t.data || {};
      }
      function Fd(t) {
        return t.resolve || {};
      }
      function $d(t) {
        return zl((e) => {
          const n = t(e);
          return n ? D(n).pipe(I(() => e)) : Pl(e);
        });
      }
      class Md extends class {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      } {}
      const Hd = new $n("ROUTES");
      class Ud {
        constructor(t, e, n, r) {
          (this.loader = t),
            (this.compiler = e),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(t, e) {
          if (e._loader$) return e._loader$;
          this.onLoadStartListener && this.onLoadStartListener(e);
          const n = this.loadModuleFactory(e.loadChildren).pipe(
            I((n) => {
              this.onLoadEndListener && this.onLoadEndListener(e);
              const r = n.create(t);
              return new Xh(
                Zu(r.injector.get(Hd, void 0, yt.Self | yt.Optional)).map(cd),
                r,
              );
            }),
            ru((t) => {
              throw ((e._loader$ = void 0), t);
            }),
          );
          return (e._loader$ = new K(n, () => new x()).pipe(G())), e._loader$;
        }
        loadModuleFactory(t) {
          return "string" == typeof t
            ? D(this.loader.load(t))
            : Ju(t()).pipe(
                U((t) =>
                  t instanceof Go
                    ? Pl(t)
                    : D(this.compiler.compileModuleAsync(t)),
                ),
              );
        }
      }
      class Bd {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Vd()),
            (this.attachRef = null);
        }
      }
      class Vd {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new Bd()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      class zd {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function qd(t) {
        throw t;
      }
      function Gd(t, e, n) {
        return e.parse("/");
      }
      function Wd(t, e) {
        return Pl(null);
      }
      let Zd = (() => {
          class t {
            constructor(t, e, n, r, s, i, o, a) {
              (this.rootComponentType = t),
                (this.urlSerializer = e),
                (this.rootContexts = n),
                (this.location = r),
                (this.config = a),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.disposed = !1),
                (this.lastLocationChangeInfo = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new x()),
                (this.errorHandler = qd),
                (this.malformedUriErrorHandler = Gd),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = {
                  beforePreactivation: Wd,
                  afterPreactivation: Wd,
                }),
                (this.urlHandlingStrategy = new zd()),
                (this.routeReuseStrategy = new Md()),
                (this.onSameUrlNavigation = "ignore"),
                (this.paramsInheritanceStrategy = "emptyOnly"),
                (this.urlUpdateStrategy = "deferred"),
                (this.relativeLinkResolution = "corrected"),
                (this.ngModule = s.get(qo)),
                (this.console = s.get(La));
              const c = s.get(Wa);
              (this.isNgZoneEnabled = c instanceof Wa && Wa.isInAngularZone()),
                this.resetConfig(a),
                (this.currentUrlTree = new nh(new rh([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new Ud(
                  i,
                  o,
                  (t) => this.triggerEvent(new Lu(t)),
                  (t) => this.triggerEvent(new Nu(t)),
                )),
                (this.routerState = Th(
                  this.currentUrlTree,
                  this.rootComponentType,
                )),
                (this.transitions = new Rl({
                  id: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    this.currentUrlTree,
                  ),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(
                    this.currentUrlTree,
                  ),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: "imperative",
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null,
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations();
            }
            setupNavigations(t) {
              const e = this.events;
              return t.pipe(
                tu((t) => 0 !== t.id),
                I((t) =>
                  Object.assign(Object.assign({}, t), {
                    extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl),
                  }),
                ),
                zl((t) => {
                  let n = !1,
                    r = !1;
                  return Pl(t).pipe(
                    vu((t) => {
                      this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(
                              Object.assign({}, this.lastSuccessfulNavigation),
                              { previousNavigation: null },
                            )
                          : null,
                      };
                    }),
                    zl((t) => {
                      const n =
                        !this.navigated ||
                        t.extractedUrl.toString() !==
                          this.browserUrlTree.toString();
                      if (
                        ("reload" === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return Pl(t).pipe(
                          zl((t) => {
                            const n = this.transitions.getValue();
                            return (
                              e.next(
                                new Su(
                                  t.id,
                                  this.serializeUrl(t.extractedUrl),
                                  t.source,
                                  t.restoredState,
                                ),
                              ),
                              n !== this.transitions.getValue()
                                ? Ul
                                : Promise.resolve(t)
                            );
                          }),
                          ((r = this.ngModule.injector),
                          (s = this.configLoader),
                          (i = this.urlSerializer),
                          (o = this.config),
                          zl((t) =>
                            (function (t, e, n, r, s) {
                              return new kd(t, e, n, r, s).apply();
                            })(r, s, i, t.extractedUrl, o).pipe(
                              I((e) =>
                                Object.assign(Object.assign({}, t), {
                                  urlAfterRedirects: e,
                                }),
                              ),
                            ),
                          )),
                          vu((t) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: t.urlAfterRedirects },
                            );
                          }),
                          (function (t, e, n, r, s) {
                            return U((i) =>
                              (function (
                                t,
                                e,
                                n,
                                r,
                                s = "emptyOnly",
                                i = "legacy",
                              ) {
                                try {
                                  const o = new Rd(
                                    t,
                                    e,
                                    n,
                                    r,
                                    s,
                                    i,
                                  ).recognize();
                                  return null === o ? Pd(new Od()) : Pl(o);
                                } catch (o) {
                                  return Pd(o);
                                }
                              })(
                                t,
                                e,
                                i.urlAfterRedirects,
                                n(i.urlAfterRedirects),
                                r,
                                s,
                              ).pipe(
                                I((t) =>
                                  Object.assign(Object.assign({}, i), {
                                    targetSnapshot: t,
                                  }),
                                ),
                              ),
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            (t) => this.serializeUrl(t),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution,
                          ),
                          vu((t) => {
                            "eager" === this.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                this.setBrowserUrl(
                                  t.urlAfterRedirects,
                                  !!t.extras.replaceUrl,
                                  t.id,
                                  t.extras.state,
                                ),
                              (this.browserUrlTree = t.urlAfterRedirects));
                            const n = new Eu(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot,
                            );
                            e.next(n);
                          }),
                        );
                      var r, s, i, o;
                      if (
                        n &&
                        this.rawUrlTree &&
                        this.urlHandlingStrategy.shouldProcessUrl(
                          this.rawUrlTree,
                        )
                      ) {
                        const {
                            id: n,
                            extractedUrl: r,
                            source: s,
                            restoredState: i,
                            extras: o,
                          } = t,
                          a = new Su(n, this.serializeUrl(r), s, i);
                        e.next(a);
                        const c = Th(r, this.rootComponentType).snapshot;
                        return Pl(
                          Object.assign(Object.assign({}, t), {
                            targetSnapshot: c,
                            urlAfterRedirects: r,
                            extras: Object.assign(Object.assign({}, o), {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          }),
                        );
                      }
                      return (
                        (this.rawUrlTree = t.rawUrl),
                        (this.browserUrlTree = t.urlAfterRedirects),
                        t.resolve(null),
                        Ul
                      );
                    }),
                    $d((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.beforePreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    vu((t) => {
                      const e = new Ou(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                      );
                      this.triggerEvent(e);
                    }),
                    I((t) =>
                      Object.assign(Object.assign({}, t), {
                        guards: Id(
                          t.targetSnapshot,
                          t.currentSnapshot,
                          this.rootContexts,
                        ),
                      }),
                    ),
                    (function (t, e) {
                      return U((n) => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: s,
                          guards: {
                            canActivateChecks: i,
                            canDeactivateChecks: o,
                          },
                        } = n;
                        return 0 === o.length && 0 === i.length
                          ? Pl(
                              Object.assign(Object.assign({}, n), {
                                guardsResult: !0,
                              }),
                            )
                          : (function (t, e, n, r) {
                              return D(t).pipe(
                                U((t) =>
                                  (function (t, e, n, r, s) {
                                    const i =
                                      e && e.routeConfig
                                        ? e.routeConfig.canDeactivate
                                        : null;
                                    return i && 0 !== i.length
                                      ? Pl(
                                          i.map((i) => {
                                            const o = Ad(i, e, s);
                                            let a;
                                            if (
                                              (function (t) {
                                                return t && td(t.canDeactivate);
                                              })(o)
                                            )
                                              a = Ju(
                                                o.canDeactivate(t, e, n, r),
                                              );
                                            else {
                                              if (!td(o))
                                                throw new Error(
                                                  "Invalid CanDeactivate guard",
                                                );
                                              a = Ju(o(t, e, n, r));
                                            }
                                            return a.pipe(wu());
                                          }),
                                        ).pipe(rd())
                                      : Pl(!0);
                                  })(t.component, t.route, n, e, r),
                                ),
                                wu((t) => !0 !== t, !0),
                              );
                            })(o, r, s, t).pipe(
                              U((n) =>
                                n && "boolean" == typeof n
                                  ? (function (t, e, n, r) {
                                      return D(e).pipe(
                                        ou((e) =>
                                          Hl(
                                            (function (t, e) {
                                              return (
                                                null !== t && e && e(new Du(t)),
                                                Pl(!0)
                                              );
                                            })(e.route.parent, r),
                                            (function (t, e) {
                                              return (
                                                null !== t && e && e(new $u(t)),
                                                Pl(!0)
                                              );
                                            })(e.route, r),
                                            (function (t, e, n) {
                                              const r = e[e.length - 1],
                                                s = e
                                                  .slice(0, e.length - 1)
                                                  .reverse()
                                                  .map((t) =>
                                                    (function (t) {
                                                      const e = t.routeConfig
                                                        ? t.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return e && 0 !== e.length
                                                        ? { node: t, guards: e }
                                                        : null;
                                                    })(t),
                                                  )
                                                  .filter((t) => null !== t)
                                                  .map((e) =>
                                                    Vl(() =>
                                                      Pl(
                                                        e.guards.map((s) => {
                                                          const i = Ad(
                                                            s,
                                                            e.node,
                                                            n,
                                                          );
                                                          let o;
                                                          if (
                                                            (function (t) {
                                                              return (
                                                                t &&
                                                                td(
                                                                  t.canActivateChild,
                                                                )
                                                              );
                                                            })(i)
                                                          )
                                                            o = Ju(
                                                              i.canActivateChild(
                                                                r,
                                                                t,
                                                              ),
                                                            );
                                                          else {
                                                            if (!td(i))
                                                              throw new Error(
                                                                "Invalid CanActivateChild guard",
                                                              );
                                                            o = Ju(i(r, t));
                                                          }
                                                          return o.pipe(wu());
                                                        }),
                                                      ).pipe(rd()),
                                                    ),
                                                  );
                                              return Pl(s).pipe(rd());
                                            })(t, e.path, n),
                                            (function (t, e, n) {
                                              const r = e.routeConfig
                                                ? e.routeConfig.canActivate
                                                : null;
                                              return r && 0 !== r.length
                                                ? Pl(
                                                    r.map((r) =>
                                                      Vl(() => {
                                                        const s = Ad(r, e, n);
                                                        let i;
                                                        if (
                                                          (function (t) {
                                                            return (
                                                              t &&
                                                              td(t.canActivate)
                                                            );
                                                          })(s)
                                                        )
                                                          i = Ju(
                                                            s.canActivate(e, t),
                                                          );
                                                        else {
                                                          if (!td(s))
                                                            throw new Error(
                                                              "Invalid CanActivate guard",
                                                            );
                                                          i = Ju(s(e, t));
                                                        }
                                                        return i.pipe(wu());
                                                      }),
                                                    ),
                                                  ).pipe(rd())
                                                : Pl(!0);
                                            })(t, e.route, n),
                                          ),
                                        ),
                                        wu((t) => !0 !== t, !0),
                                      );
                                    })(r, i, t, e)
                                  : Pl(n),
                              ),
                              I((t) =>
                                Object.assign(Object.assign({}, n), {
                                  guardsResult: t,
                                }),
                              ),
                            );
                      });
                    })(this.ngModule.injector, (t) => this.triggerEvent(t)),
                    vu((t) => {
                      if (ed(t.guardsResult)) {
                        const e = zu(
                          `Redirecting to "${this.serializeUrl(t.guardsResult)}"`,
                        );
                        throw ((e.url = t.guardsResult), e);
                      }
                      const e = new Pu(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult,
                      );
                      this.triggerEvent(e);
                    }),
                    tu((t) => {
                      if (!t.guardsResult) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new Au(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          "",
                        );
                        return e.next(n), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    $d((t) => {
                      if (t.guards.canActivateChecks.length)
                        return Pl(t).pipe(
                          vu((t) => {
                            const e = new Ru(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot,
                            );
                            this.triggerEvent(e);
                          }),
                          zl((t) => {
                            let n = !1;
                            return Pl(t).pipe(
                              ((r = this.paramsInheritanceStrategy),
                              (s = this.ngModule.injector),
                              U((t) => {
                                const {
                                  targetSnapshot: e,
                                  guards: { canActivateChecks: n },
                                } = t;
                                if (!n.length) return Pl(t);
                                let i = 0;
                                return D(n).pipe(
                                  ou((t) =>
                                    (function (t, e, n, r) {
                                      return (function (t, e, n, r) {
                                        const s = Object.keys(t);
                                        if (0 === s.length) return Pl({});
                                        const i = {};
                                        return D(s).pipe(
                                          U((s) =>
                                            (function (t, e, n, r) {
                                              const s = Ad(t, e, r);
                                              return Ju(
                                                s.resolve
                                                  ? s.resolve(e, n)
                                                  : s(e, n),
                                              );
                                            })(t[s], e, n, r).pipe(
                                              vu((t) => {
                                                i[s] = t;
                                              }),
                                            ),
                                          ),
                                          au(1),
                                          U(() =>
                                            Object.keys(i).length === s.length
                                              ? Pl(i)
                                              : Ul,
                                          ),
                                        );
                                      })(t._resolve, t, e, r).pipe(
                                        I(
                                          (e) => (
                                            (t._resolvedData = e),
                                            (t.data = Object.assign(
                                              Object.assign({}, t.data),
                                              Oh(t, n).resolve,
                                            )),
                                            null
                                          ),
                                        ),
                                      );
                                    })(t.route, e, r, s),
                                  ),
                                  vu(() => i++),
                                  au(1),
                                  U((e) => (i === n.length ? Pl(t) : Ul)),
                                );
                              })),
                              vu({
                                next: () => (n = !0),
                                complete: () => {
                                  if (!n) {
                                    const n = new Au(
                                      t.id,
                                      this.serializeUrl(t.extractedUrl),
                                      "At least one route resolver didn't emit any value.",
                                    );
                                    e.next(n), t.resolve(!1);
                                  }
                                },
                              }),
                            );
                            var r, s;
                          }),
                          vu((t) => {
                            const e = new ju(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot,
                            );
                            this.triggerEvent(e);
                          }),
                        );
                    }),
                    $d((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.afterPreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    I((t) => {
                      const e = (function (t, e, n) {
                        const r = Fh(t, e._root, n ? n._root : void 0);
                        return new Ah(r, e);
                      })(
                        this.routeReuseStrategy,
                        t.targetSnapshot,
                        t.currentRouterState,
                      );
                      return Object.assign(Object.assign({}, t), {
                        targetRouterState: e,
                      });
                    }),
                    vu((t) => {
                      (this.currentUrlTree = t.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(
                          this.currentUrlTree,
                          t.rawUrl,
                        )),
                        (this.routerState = t.targetRouterState),
                        "deferred" === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              this.rawUrlTree,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state,
                            ),
                          (this.browserUrlTree = t.urlAfterRedirects));
                    }),
                    ((i = this.rootContexts),
                    (o = this.routeReuseStrategy),
                    (a = (t) => this.triggerEvent(t)),
                    I(
                      (t) => (
                        new Jh(
                          o,
                          t.targetRouterState,
                          t.currentRouterState,
                          a,
                        ).activate(i),
                        t
                      ),
                    )),
                    vu({
                      next() {
                        n = !0;
                      },
                      complete() {
                        n = !0;
                      },
                    }),
                    ((s = () => {
                      if (!n && !r) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new Au(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`,
                        );
                        e.next(n), t.resolve(!1);
                      }
                      this.currentNavigation = null;
                    }),
                    (t) => t.lift(new ku(s))),
                    ru((n) => {
                      if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                        const r = ed(n.url);
                        r ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(
                            t.currentRouterState,
                            t.currentUrlTree,
                            t.rawUrl,
                          ));
                        const s = new Au(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n.message,
                        );
                        e.next(s),
                          r
                            ? setTimeout(() => {
                                const e = this.urlHandlingStrategy.merge(
                                  n.url,
                                  this.rawUrlTree,
                                );
                                this.scheduleNavigation(
                                  e,
                                  "imperative",
                                  null,
                                  {
                                    skipLocationChange:
                                      t.extras.skipLocationChange,
                                    replaceUrl:
                                      "eager" === this.urlUpdateStrategy,
                                  },
                                  {
                                    resolve: t.resolve,
                                    reject: t.reject,
                                    promise: t.promise,
                                  },
                                );
                              }, 0)
                            : t.resolve(!1);
                      } else {
                        this.resetStateAndUrl(
                          t.currentRouterState,
                          t.currentUrlTree,
                          t.rawUrl,
                        );
                        const r = new Tu(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n,
                        );
                        e.next(r);
                        try {
                          t.resolve(this.errorHandler(n));
                        } catch (i) {
                          t.reject(i);
                        }
                      }
                      var s;
                      return Ul;
                    }),
                  );
                  var s, i, o, a;
                }),
              );
            }
            resetRootComponentType(t) {
              (this.rootComponentType = t),
                (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }
            setTransition(t) {
              this.transitions.next(
                Object.assign(Object.assign({}, this.getTransition()), t),
              );
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0,
                  });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((t) => {
                  const e = this.extractLocationChangeInfoFromEvent(t);
                  this.shouldScheduleNavigation(
                    this.lastLocationChangeInfo,
                    e,
                  ) &&
                    setTimeout(() => {
                      const { source: t, state: n, urlTree: r } = e,
                        s = { replaceUrl: !0 };
                      if (n) {
                        const t = Object.assign({}, n);
                        delete t.navigationId,
                          0 !== Object.keys(t).length && (s.state = t);
                      }
                      this.scheduleNavigation(r, t, n, s);
                    }, 0),
                    (this.lastLocationChangeInfo = e);
                }));
            }
            extractLocationChangeInfoFromEvent(t) {
              var e;
              return {
                source: "popstate" === t.type ? "popstate" : "hashchange",
                urlTree: this.parseUrl(t.url),
                state: (
                  null === (e = t.state) || void 0 === e
                    ? void 0
                    : e.navigationId
                )
                  ? t.state
                  : null,
                transitionId: this.getTransition().id,
              };
            }
            shouldScheduleNavigation(t, e) {
              if (!t) return !0;
              const n = e.urlTree.toString() === t.urlTree.toString();
              return !(
                e.transitionId === t.transitionId &&
                n &&
                (("hashchange" === e.source && "popstate" === t.source) ||
                  ("popstate" === e.source && "hashchange" === t.source))
              );
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(t) {
              this.events.next(t);
            }
            resetConfig(t) {
              id(t),
                (this.config = t.map(cd)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.transitions.complete(),
                this.locationSubscription &&
                  (this.locationSubscription.unsubscribe(),
                  (this.locationSubscription = void 0)),
                (this.disposed = !0);
            }
            createUrlTree(t, e = {}) {
              const {
                  relativeTo: n,
                  queryParams: r,
                  fragment: s,
                  queryParamsHandling: i,
                  preserveFragment: o,
                } = e,
                a = n || this.routerState.root,
                c = o ? this.currentUrlTree.fragment : s;
              let l = null;
              switch (i) {
                case "merge":
                  l = Object.assign(
                    Object.assign({}, this.currentUrlTree.queryParams),
                    r,
                  );
                  break;
                case "preserve":
                  l = this.currentUrlTree.queryParams;
                  break;
                default:
                  l = r || null;
              }
              return (
                null !== l && (l = this.removeEmptyProps(l)),
                (function (t, e, n, r, s) {
                  if (0 === n.length) return Uh(e.root, e.root, e, r, s);
                  const i = (function (t) {
                    if (
                      "string" == typeof t[0] &&
                      1 === t.length &&
                      "/" === t[0]
                    )
                      return new Vh(!0, 0, t);
                    let e = 0,
                      n = !1;
                    const r = t.reduce((t, r, s) => {
                      if ("object" == typeof r && null != r) {
                        if (r.outlets) {
                          const e = {};
                          return (
                            Qu(r.outlets, (t, n) => {
                              e[n] = "string" == typeof t ? t.split("/") : t;
                            }),
                            [...t, { outlets: e }]
                          );
                        }
                        if (r.segmentPath) return [...t, r.segmentPath];
                      }
                      return "string" != typeof r
                        ? [...t, r]
                        : 0 === s
                          ? (r.split("/").forEach((r, s) => {
                              (0 == s && "." === r) ||
                                (0 == s && "" === r
                                  ? (n = !0)
                                  : ".." === r
                                    ? e++
                                    : "" != r && t.push(r));
                            }),
                            t)
                          : [...t, r];
                    }, []);
                    return new Vh(n, e, r);
                  })(n);
                  if (i.toRoot()) return Uh(e.root, new rh([], {}), e, r, s);
                  const o = (function (t, e, n) {
                      if (t.isAbsolute) return new zh(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex) {
                        const t = n.snapshot._urlSegment;
                        return new zh(t, t === e.root, 0);
                      }
                      const r = Mh(t.commands[0]) ? 0 : 1;
                      return (function (t, e, n) {
                        let r = t,
                          s = e,
                          i = n;
                        for (; i > s; ) {
                          if (((i -= s), (r = r.parent), !r))
                            throw new Error("Invalid number of '../'");
                          s = r.segments.length;
                        }
                        return new zh(r, !1, s - i);
                      })(
                        n.snapshot._urlSegment,
                        n.snapshot._lastPathIndex + r,
                        t.numberOfDoubleDots,
                      );
                    })(i, e, t),
                    a = o.processChildren
                      ? Gh(o.segmentGroup, o.index, i.commands)
                      : qh(o.segmentGroup, o.index, i.commands);
                  return Uh(o.segmentGroup, a, e, r, s);
                })(a, this.currentUrlTree, t, l, c)
              );
            }
            navigateByUrl(t, e = { skipLocationChange: !1 }) {
              const n = ed(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, "imperative", null, e);
            }
            navigate(t, e = { skipLocationChange: !1 }) {
              return (
                (function (t) {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if (null == n)
                      throw new Error(
                        `The requested path contains ${n} segment at index ${e}`,
                      );
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              let e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }
            isActive(t, e) {
              if (ed(t)) return Yu(this.currentUrlTree, t, e);
              const n = this.parseUrl(t);
              return Yu(this.currentUrlTree, n, e);
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((e, n) => {
                const r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                (t) => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = t.id),
                    this.events.next(
                      new Iu(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(this.currentUrlTree),
                      ),
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    (this.currentNavigation = null),
                    t.resolve(!0);
                },
                (t) => {
                  this.console.warn("Unhandled Navigation Error: ");
                },
              );
            }
            scheduleNavigation(t, e, n, r, s) {
              if (this.disposed) return Promise.resolve(!1);
              const i = this.getTransition(),
                o =
                  "imperative" !== e &&
                  "imperative" === (null == i ? void 0 : i.source),
                a =
                  (this.lastSuccessfulId === i.id || this.currentNavigation
                    ? i.rawUrl
                    : i.urlAfterRedirects
                  ).toString() === t.toString();
              if (o && a) return Promise.resolve(!0);
              let c, l, u;
              s
                ? ((c = s.resolve), (l = s.reject), (u = s.promise))
                : (u = new Promise((t, e) => {
                    (c = t), (l = e);
                  }));
              const h = ++this.navigationId;
              return (
                this.setTransition({
                  id: h,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: c,
                  reject: l,
                  promise: u,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                u.catch((t) => Promise.reject(t))
              );
            }
            setBrowserUrl(t, e, n, r) {
              const s = this.urlSerializer.serialize(t);
              (r = r || {}),
                this.location.isCurrentPathEqualTo(s) || e
                  ? this.location.replaceState(
                      s,
                      "",
                      Object.assign(Object.assign({}, r), { navigationId: n }),
                    )
                  : this.location.go(
                      s,
                      "",
                      Object.assign(Object.assign({}, r), { navigationId: n }),
                    );
            }
            resetStateAndUrl(t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n,
                )),
                this.resetUrlToCurrentUrlTree();
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                "",
                { navigationId: this.lastSuccessfulId },
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                er(Hn),
                er(oh),
                er(Vd),
                er(Hc),
                er(fi),
                er(gc),
                er(za),
                er(void 0),
              );
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Kd = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.route = e),
                (this.commands = []),
                (this.onChanges = new x()),
                null == n && r.setAttribute(s.nativeElement, "tabindex", "0");
            }
            ngOnChanges(t) {
              this.onChanges.next(this);
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            onClick() {
              const t = {
                skipLocationChange: Jd(this.skipLocationChange),
                replaceUrl: Jd(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, t), !0;
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo:
                  void 0 !== this.relativeTo ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Jd(this.preserveFragment),
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                Ci(Zd),
                Ci(Eh),
                Nn("tabindex"),
                Ci(fo),
                Ci(lo),
              );
            }),
            (t.ɵdir = Wt({
              type: t,
              selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
              hostBindings: function (t, e) {
                1 & t &&
                  Ri("click", function () {
                    return e.onClick();
                  });
              },
              inputs: {
                routerLink: "routerLink",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
                relativeTo: "relativeTo",
              },
              features: [oe],
            })),
            t
          );
        })(),
        Qd = (() => {
          class t {
            constructor(t, e, n) {
              (this.router = t),
                (this.route = e),
                (this.locationStrategy = n),
                (this.commands = []),
                (this.onChanges = new x()),
                (this.subscription = t.events.subscribe((t) => {
                  t instanceof Iu && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            ngOnChanges(t) {
              this.updateTargetUrlAndHref(), this.onChanges.next(this);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(t, e, n, r, s) {
              if (0 !== t || e || n || r || s) return !0;
              if ("string" == typeof this.target && "_self" != this.target)
                return !0;
              const i = {
                skipLocationChange: Jd(this.skipLocationChange),
                replaceUrl: Jd(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, i), !1;
            }
            updateTargetUrlAndHref() {
              this.href = this.locationStrategy.prepareExternalUrl(
                this.router.serializeUrl(this.urlTree),
              );
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo:
                  void 0 !== this.relativeTo ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Jd(this.preserveFragment),
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Ci(Zd), Ci(Eh), Ci(Nc));
            }),
            (t.ɵdir = Wt({
              type: t,
              selectors: [
                ["a", "routerLink", ""],
                ["area", "routerLink", ""],
              ],
              hostVars: 2,
              hostBindings: function (t, e) {
                1 & t &&
                  Ri("click", function (t) {
                    return e.onClick(
                      t.button,
                      t.ctrlKey,
                      t.shiftKey,
                      t.altKey,
                      t.metaKey,
                    );
                  }),
                  2 & t && (Zi("href", e.href, dr), bi("target", e.target));
              },
              inputs: {
                routerLink: "routerLink",
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
                relativeTo: "relativeTo",
              },
              features: [oe],
            })),
            t
          );
        })();
      function Jd(t) {
        return "" === t || !!t;
      }
      let Yd = (() => {
          class t {
            constructor(t, e, n, r, s, i) {
              (this.router = t),
                (this.element = e),
                (this.renderer = n),
                (this.cdr = r),
                (this.link = s),
                (this.linkWithHref = i),
                (this.classes = []),
                (this.isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.routerEventsSubscription = t.events.subscribe((t) => {
                  t instanceof Iu && this.update();
                }));
            }
            ngAfterContentInit() {
              Pl(this.links.changes, this.linksWithHrefs.changes, Pl(null))
                .pipe(z())
                .subscribe((t) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              var t;
              null === (t = this.linkInputChangesSubscription) ||
                void 0 === t ||
                t.unsubscribe();
              const e = [
                ...this.links.toArray(),
                ...this.linksWithHrefs.toArray(),
                this.link,
                this.linkWithHref,
              ]
                .filter((t) => !!t)
                .map((t) => t.onChanges);
              this.linkInputChangesSubscription = D(e)
                .pipe(z())
                .subscribe((t) => {
                  this.isActive !== this.isLinkActive(this.router)(t) &&
                    this.update();
                });
            }
            set routerLinkActive(t) {
              const e = Array.isArray(t) ? t : t.split(" ");
              this.classes = e.filter((t) => !!t);
            }
            ngOnChanges(t) {
              this.update();
            }
            ngOnDestroy() {
              var t;
              this.routerEventsSubscription.unsubscribe(),
                null === (t = this.linkInputChangesSubscription) ||
                  void 0 === t ||
                  t.unsubscribe();
            }
            update() {
              this.links &&
                this.linksWithHrefs &&
                this.router.navigated &&
                Promise.resolve().then(() => {
                  const t = this.hasActiveLinks();
                  this.isActive !== t &&
                    ((this.isActive = t),
                    this.cdr.markForCheck(),
                    this.classes.forEach((e) => {
                      t
                        ? this.renderer.addClass(this.element.nativeElement, e)
                        : this.renderer.removeClass(
                            this.element.nativeElement,
                            e,
                          );
                    }));
                });
            }
            isLinkActive(t) {
              return (e) =>
                t.isActive(e.urlTree, this.routerLinkActiveOptions.exact);
            }
            hasActiveLinks() {
              const t = this.isLinkActive(this.router);
              return (
                (this.link && t(this.link)) ||
                (this.linkWithHref && t(this.linkWithHref)) ||
                this.links.some(t) ||
                this.linksWithHrefs.some(t)
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                Ci(Zd),
                Ci(lo),
                Ci(fo),
                Ci(Do),
                Ci(Kd, 8),
                Ci(Qd, 8),
              );
            }),
            (t.ɵdir = Wt({
              type: t,
              selectors: [["", "routerLinkActive", ""]],
              contentQueries: function (t, e, n) {
                if ((1 & t && (xa(n, Kd, 1), xa(n, Qd, 1)), 2 & t)) {
                  let t;
                  ka((t = Ca())) && (e.links = t),
                    ka((t = Ca())) && (e.linksWithHrefs = t);
                }
              },
              inputs: {
                routerLinkActiveOptions: "routerLinkActiveOptions",
                routerLinkActive: "routerLinkActive",
              },
              exportAs: ["routerLinkActive"],
              features: [oe],
            })),
            t
          );
        })(),
        Xd = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.parentContexts = t),
                (this.location = e),
                (this.resolver = n),
                (this.changeDetector = s),
                (this.activated = null),
                (this._activatedRoute = null),
                (this.activateEvents = new ua()),
                (this.deactivateEvents = new ua()),
                (this.name = r || Uu),
                t.onChildOutletCreated(this.name, this);
            }
            ngOnDestroy() {
              this.parentContexts.onChildOutletDestroyed(this.name);
            }
            ngOnInit() {
              if (!this.activated) {
                const t = this.parentContexts.getContext(this.name);
                t &&
                  t.route &&
                  (t.attachRef
                    ? this.attach(t.attachRef, t.route)
                    : this.activateWith(t.route, t.resolver || null));
              }
            }
            get isActivated() {
              return !!this.activated;
            }
            get component() {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this.activated.instance;
            }
            get activatedRoute() {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this._activatedRoute;
            }
            get activatedRouteData() {
              return this._activatedRoute
                ? this._activatedRoute.snapshot.data
                : {};
            }
            detach() {
              if (!this.activated) throw new Error("Outlet is not activated");
              this.location.detach();
              const t = this.activated;
              return (this.activated = null), (this._activatedRoute = null), t;
            }
            attach(t, e) {
              (this.activated = t),
                (this._activatedRoute = e),
                this.location.insert(t.hostView);
            }
            deactivate() {
              if (this.activated) {
                const t = this.component;
                this.activated.destroy(),
                  (this.activated = null),
                  (this._activatedRoute = null),
                  this.deactivateEvents.emit(t);
              }
            }
            activateWith(t, e) {
              if (this.isActivated)
                throw new Error("Cannot activate an already activated outlet");
              this._activatedRoute = t;
              const n = (e = e || this.resolver).resolveComponentFactory(
                  t._futureSnapshot.routeConfig.component,
                ),
                r = this.parentContexts.getOrCreateContext(this.name).children,
                s = new tf(t, r, this.location.injector);
              (this.activated = this.location.createComponent(
                n,
                this.location.length,
                s,
              )),
                this.changeDetector.markForCheck(),
                this.activateEvents.emit(this.activated.instance);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Ci(Vd), Ci(Zo), Ci(io), Nn("name"), Ci(Do));
            }),
            (t.ɵdir = Wt({
              type: t,
              selectors: [["router-outlet"]],
              outputs: {
                activateEvents: "activate",
                deactivateEvents: "deactivate",
              },
              exportAs: ["outlet"],
            })),
            t
          );
        })();
      class tf {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === Eh
            ? this.route
            : t === Vd
              ? this.childContexts
              : this.parent.get(t, e);
        }
      }
      class ef {}
      class nf {
        preload(t, e) {
          return Pl(null);
        }
      }
      let rf = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.injector = r),
                (this.preloadingStrategy = s),
                (this.loader = new Ud(
                  e,
                  n,
                  (e) => t.triggerEvent(new Lu(e)),
                  (e) => t.triggerEvent(new Nu(e)),
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  tu((t) => t instanceof Iu),
                  ou(() => this.preload()),
                )
                .subscribe(() => {});
            }
            preload() {
              const t = this.injector.get(qo);
              return this.processRoutes(t, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(t, e) {
              const n = [];
              for (const r of e)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                  const t = r._loadedConfig;
                  n.push(this.processRoutes(t.module, t.routes));
                } else
                  r.loadChildren && !r.canLoad
                    ? n.push(this.preloadConfig(t, r))
                    : r.children && n.push(this.processRoutes(t, r.children));
              return D(n).pipe(
                z(),
                I((t) => {}),
              );
            }
            preloadConfig(t, e) {
              return this.preloadingStrategy.preload(e, () =>
                (e._loadedConfig
                  ? Pl(e._loadedConfig)
                  : this.loader.load(t.injector, e)
                ).pipe(
                  U(
                    (t) => (
                      (e._loadedConfig = t),
                      this.processRoutes(t.module, t.routes)
                    ),
                  ),
                ),
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(er(Zd), er(gc), er(za), er(fi), er(ef));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        sf = (() => {
          class t {
            constructor(t, e, n = {}) {
              (this.router = t),
                (this.viewportScroller = e),
                (this.options = n),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (n.scrollPositionRestoration =
                  n.scrollPositionRestoration || "disabled"),
                (n.anchorScrolling = n.anchorScrolling || "disabled");
            }
            init() {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof Su
                  ? ((this.store[this.lastId] =
                      this.viewportScroller.getScrollPosition()),
                    (this.lastSource = t.navigationTrigger),
                    (this.restoredId = t.restoredState
                      ? t.restoredState.navigationId
                      : 0))
                  : t instanceof Iu &&
                    ((this.lastId = t.id),
                    this.scheduleScrollEvent(
                      t,
                      this.router.parseUrl(t.urlAfterRedirects).fragment,
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof Hu &&
                  (t.position
                    ? "top" === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(t.position)
                    : t.anchor && "enabled" === this.options.anchorScrolling
                      ? this.viewportScroller.scrollToAnchor(t.anchor)
                      : "disabled" !== this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(t, e) {
              this.router.triggerEvent(
                new Hu(
                  t,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  e,
                ),
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(er(Zd), er(tl), er(void 0));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const of = new $n("ROUTER_CONFIGURATION"),
        af = new $n("ROUTER_FORROOT_GUARD"),
        cf = [
          Hc,
          { provide: oh, useClass: ah },
          {
            provide: Zd,
            useFactory: function (t, e, n, r, s, i, o, a = {}, c, l) {
              const u = new Zd(null, t, e, n, r, s, i, Zu(o));
              if (
                (c && (u.urlHandlingStrategy = c),
                l && (u.routeReuseStrategy = l),
                (function (t, e) {
                  t.errorHandler && (e.errorHandler = t.errorHandler),
                    t.malformedUriErrorHandler &&
                      (e.malformedUriErrorHandler = t.malformedUriErrorHandler),
                    t.onSameUrlNavigation &&
                      (e.onSameUrlNavigation = t.onSameUrlNavigation),
                    t.paramsInheritanceStrategy &&
                      (e.paramsInheritanceStrategy =
                        t.paramsInheritanceStrategy),
                    t.relativeLinkResolution &&
                      (e.relativeLinkResolution = t.relativeLinkResolution),
                    t.urlUpdateStrategy &&
                      (e.urlUpdateStrategy = t.urlUpdateStrategy);
                })(a, u),
                a.enableTracing)
              ) {
                const t = Cc();
                u.events.subscribe((e) => {
                  t.logGroup(`Router Event: ${e.constructor.name}`),
                    t.log(e.toString()),
                    t.log(e),
                    t.logGroupEnd();
                });
              }
              return u;
            },
            deps: [
              oh,
              Vd,
              Hc,
              fi,
              gc,
              za,
              Hd,
              of,
              [class {}, new ir()],
              [class {}, new ir()],
            ],
          },
          Vd,
          {
            provide: Eh,
            useFactory: function (t) {
              return t.routerState.root;
            },
            deps: [Zd],
          },
          { provide: gc, useClass: yc },
          rf,
          nf,
          class {
            preload(t, e) {
              return e().pipe(ru(() => Pl(null)));
            }
          },
          { provide: of, useValue: { enableTracing: !1 } },
        ];
      function lf() {
        return new cc("Router", Zd);
      }
      let uf = (() => {
        class t {
          constructor(t, e) {}
          static forRoot(e, n) {
            return {
              ngModule: t,
              providers: [
                cf,
                pf(e),
                {
                  provide: af,
                  useFactory: ff,
                  deps: [[Zd, new ir(), new or()]],
                },
                { provide: of, useValue: n || {} },
                {
                  provide: Nc,
                  useFactory: df,
                  deps: [Ic, [new sr(Fc), new ir()], of],
                },
                { provide: sf, useFactory: hf, deps: [Zd, tl, of] },
                {
                  provide: ef,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : nf,
                },
                { provide: cc, multi: !0, useFactory: lf },
                [
                  gf,
                  { provide: Ia, multi: !0, useFactory: mf, deps: [gf] },
                  { provide: yf, useFactory: wf, deps: [gf] },
                  { provide: ja, multi: !0, useExisting: yf },
                ],
              ],
            };
          }
          static forChild(e) {
            return { ngModule: t, providers: [pf(e)] };
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(af, 8), er(Zd, 8));
          }),
          (t.ɵmod = qt({ type: t })),
          (t.ɵinj = ut({})),
          t
        );
      })();
      function hf(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new sf(t, e, n);
      }
      function df(t, e, n = {}) {
        return n.useHash ? new Mc(t, e) : new $c(t, e);
      }
      function ff(t) {
        return "guarded";
      }
      function pf(t) {
        return [
          { provide: Mn, multi: !0, useValue: t },
          { provide: Hd, multi: !0, useValue: t },
        ];
      }
      let gf = (() => {
        class t {
          constructor(t) {
            (this.injector = t),
              (this.initNavigation = !1),
              (this.resultOfPreactivationDone = new x());
          }
          appInitializer() {
            return this.injector.get(Tc, Promise.resolve(null)).then(() => {
              let t = null;
              const e = new Promise((e) => (t = e)),
                n = this.injector.get(Zd),
                r = this.injector.get(of);
              return (
                "disabled" === r.initialNavigation
                  ? (n.setUpLocationChangeListener(), t(!0))
                  : "enabled" === r.initialNavigation ||
                      "enabledBlocking" === r.initialNavigation
                    ? ((n.hooks.afterPreactivation = () =>
                        this.initNavigation
                          ? Pl(null)
                          : ((this.initNavigation = !0),
                            t(!0),
                            this.resultOfPreactivationDone)),
                      n.initialNavigation())
                    : t(!0),
                e
              );
            });
          }
          bootstrapListener(t) {
            const e = this.injector.get(of),
              n = this.injector.get(rf),
              r = this.injector.get(sf),
              s = this.injector.get(Zd),
              i = this.injector.get(fc);
            t === i.components[0] &&
              (("enabledNonBlocking" !== e.initialNavigation &&
                void 0 !== e.initialNavigation) ||
                s.initialNavigation(),
              n.setUpPreloading(),
              r.init(),
              s.resetRootComponentType(i.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(fi));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function mf(t) {
        return t.appInitializer.bind(t);
      }
      function wf(t) {
        return t.bootstrapListener.bind(t);
      }
      const yf = new $n("Router Initializer");
      class vf {}
      class bf {}
      class _f {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  "string" == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split("\n").forEach((t) => {
                            const e = t.indexOf(":");
                            if (e > 0) {
                              const n = t.slice(0, e),
                                r = n.toLowerCase(),
                                s = t.slice(e + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r)
                                  ? this.headers.get(r).push(s)
                                  : this.headers.set(r, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach((e) => {
                            let n = t[e];
                            const r = e.toLowerCase();
                            "string" == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(r, n),
                                this.maybeSetNormalizedName(e, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const e = this.headers.get(t.toLowerCase());
          return e && e.length > 0 ? e[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, e) {
          return this.clone({ name: t, value: e, op: "a" });
        }
        set(t, e) {
          return this.clone({ name: t, value: e, op: "s" });
        }
        delete(t, e) {
          return this.clone({ name: t, value: e, op: "d" });
        }
        maybeSetNormalizedName(t, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof _f
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
              (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach((e) => {
              this.headers.set(e, t.headers.get(e)),
                this.normalizedNames.set(e, t.normalizedNames.get(e));
            });
        }
        clone(t) {
          const e = new _f();
          return (
            (e.lazyInit =
              this.lazyInit && this.lazyInit instanceof _f
                ? this.lazyInit
                : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            e
          );
        }
        applyUpdate(t) {
          const e = t.name.toLowerCase();
          switch (t.op) {
            case "a":
            case "s":
              let n = t.value;
              if (("string" == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(t.name, e);
              const r = ("a" === t.op ? this.headers.get(e) : void 0) || [];
              r.push(...n), this.headers.set(e, r);
              break;
            case "d":
              const s = t.value;
              if (s) {
                let t = this.headers.get(e);
                if (!t) return;
                (t = t.filter((t) => -1 === s.indexOf(t))),
                  0 === t.length
                    ? (this.headers.delete(e), this.normalizedNames.delete(e))
                    : this.headers.set(e, t);
              } else this.headers.delete(e), this.normalizedNames.delete(e);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((e) =>
              t(this.normalizedNames.get(e), this.headers.get(e)),
            );
        }
      }
      class kf {
        encodeKey(t) {
          return xf(t);
        }
        encodeValue(t) {
          return xf(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      function xf(t) {
        return encodeURIComponent(t)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/gi, "$")
          .replace(/%2C/gi, ",")
          .replace(/%3B/gi, ";")
          .replace(/%2B/gi, "+")
          .replace(/%3D/gi, "=")
          .replace(/%3F/gi, "?")
          .replace(/%2F/gi, "/");
      }
      class Cf {
        constructor(t = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new kf()),
            t.fromString)
          ) {
            if (t.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function (t, e) {
              const n = new Map();
              return (
                t.length > 0 &&
                  t
                    .replace(/^\?/, "")
                    .split("&")
                    .forEach((t) => {
                      const r = t.indexOf("="),
                        [s, i] =
                          -1 == r
                            ? [e.decodeKey(t), ""]
                            : [
                                e.decodeKey(t.slice(0, r)),
                                e.decodeValue(t.slice(r + 1)),
                              ],
                        o = n.get(s) || [];
                      o.push(i), n.set(s, o);
                    }),
                n
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach((e) => {
                  const n = t.fromObject[e];
                  this.map.set(e, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const e = this.map.get(t);
          return e ? e[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, e) {
          return this.clone({ param: t, value: e, op: "a" });
        }
        appendAll(t) {
          const e = [];
          return (
            Object.keys(t).forEach((n) => {
              const r = t[n];
              Array.isArray(r)
                ? r.forEach((t) => {
                    e.push({ param: n, value: t, op: "a" });
                  })
                : e.push({ param: n, value: r, op: "a" });
            }),
            this.clone(e)
          );
        }
        set(t, e) {
          return this.clone({ param: t, value: e, op: "s" });
        }
        delete(t, e) {
          return this.clone({ param: t, value: e, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((t) => {
                const e = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map((t) => e + "=" + this.encoder.encodeValue(t))
                  .join("&");
              })
              .filter((t) => "" !== t)
              .join("&")
          );
        }
        clone(t) {
          const e = new Cf({ encoder: this.encoder });
          return (
            (e.cloneFrom = this.cloneFrom || this),
            (e.updates = (this.updates || []).concat(t)),
            e
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach((t) => {
                switch (t.op) {
                  case "a":
                  case "s":
                    const e =
                      ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                    e.push(t.value), this.map.set(t.param, e);
                    break;
                  case "d":
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let e = this.map.get(t.param) || [];
                      const n = e.indexOf(t.value);
                      -1 !== n && e.splice(n, 1),
                        e.length > 0
                          ? this.map.set(t.param, e)
                          : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function Sf(t) {
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer;
      }
      function If(t) {
        return "undefined" != typeof Blob && t instanceof Blob;
      }
      function Af(t) {
        return "undefined" != typeof FormData && t instanceof FormData;
      }
      class Tf {
        constructor(t, e, n, r) {
          let s;
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = t.toUpperCase()),
            (function (t) {
              switch (t) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (s = r))
              : (s = n),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new _f()),
            this.params)
          ) {
            const t = this.params.toString();
            if (0 === t.length) this.urlWithParams = e;
            else {
              const n = e.indexOf("?");
              this.urlWithParams =
                e + (-1 === n ? "?" : n < e.length - 1 ? "&" : "") + t;
            }
          } else (this.params = new Cf()), (this.urlWithParams = e);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Sf(this.body) ||
                If(this.body) ||
                Af(this.body) ||
                "string" == typeof this.body
              ? this.body
              : this.body instanceof Cf
                ? this.body.toString()
                : "object" == typeof this.body ||
                    "boolean" == typeof this.body ||
                    Array.isArray(this.body)
                  ? JSON.stringify(this.body)
                  : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || Af(this.body)
            ? null
            : If(this.body)
              ? this.body.type || null
              : Sf(this.body)
                ? null
                : "string" == typeof this.body
                  ? "text/plain"
                  : this.body instanceof Cf
                    ? "application/x-www-form-urlencoded;charset=UTF-8"
                    : "object" == typeof this.body ||
                        "number" == typeof this.body ||
                        Array.isArray(this.body)
                      ? "application/json"
                      : null;
        }
        clone(t = {}) {
          const e = t.method || this.method,
            n = t.url || this.url,
            r = t.responseType || this.responseType,
            s = void 0 !== t.body ? t.body : this.body,
            i =
              void 0 !== t.withCredentials
                ? t.withCredentials
                : this.withCredentials,
            o =
              void 0 !== t.reportProgress
                ? t.reportProgress
                : this.reportProgress;
          let a = t.headers || this.headers,
            c = t.params || this.params;
          return (
            void 0 !== t.setHeaders &&
              (a = Object.keys(t.setHeaders).reduce(
                (e, n) => e.set(n, t.setHeaders[n]),
                a,
              )),
            t.setParams &&
              (c = Object.keys(t.setParams).reduce(
                (e, n) => e.set(n, t.setParams[n]),
                c,
              )),
            new Tf(e, n, s, {
              params: c,
              headers: a,
              reportProgress: o,
              responseType: r,
              withCredentials: i,
            })
          );
        }
      }
      var Ef = (function (t) {
        return (
          (t[(t.Sent = 0)] = "Sent"),
          (t[(t.UploadProgress = 1)] = "UploadProgress"),
          (t[(t.ResponseHeader = 2)] = "ResponseHeader"),
          (t[(t.DownloadProgress = 3)] = "DownloadProgress"),
          (t[(t.Response = 4)] = "Response"),
          (t[(t.User = 5)] = "User"),
          t
        );
      })({});
      class Of {
        constructor(t, e = 200, n = "OK") {
          (this.headers = t.headers || new _f()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || n),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Pf extends Of {
        constructor(t = {}) {
          super(t), (this.type = Ef.ResponseHeader);
        }
        clone(t = {}) {
          return new Pf({
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class Rf extends Of {
        constructor(t = {}) {
          super(t),
            (this.type = Ef.Response),
            (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new Rf({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class jf extends Of {
        constructor(t) {
          super(t, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${t.url || "(unknown url)"}`
                : `Http failure response for ${t.url || "(unknown url)"}: ${t.status} ${t.statusText}`),
            (this.error = t.error || null);
        }
      }
      function Lf(t, e) {
        return {
          body: e,
          headers: t.headers,
          observe: t.observe,
          params: t.params,
          reportProgress: t.reportProgress,
          responseType: t.responseType,
          withCredentials: t.withCredentials,
        };
      }
      let Nf = (() => {
        class t {
          constructor(t) {
            this.handler = t;
          }
          request(t, e, n = {}) {
            let r;
            if (t instanceof Tf) r = t;
            else {
              let s, i;
              (s = n.headers instanceof _f ? n.headers : new _f(n.headers)),
                n.params &&
                  (i =
                    n.params instanceof Cf
                      ? n.params
                      : new Cf({ fromObject: n.params })),
                (r = new Tf(t, e, void 0 !== n.body ? n.body : null, {
                  headers: s,
                  params: i,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || "json",
                  withCredentials: n.withCredentials,
                }));
            }
            const s = Pl(r).pipe(ou((t) => this.handler.handle(t)));
            if (t instanceof Tf || "events" === n.observe) return s;
            const i = s.pipe(tu((t) => t instanceof Rf));
            switch (n.observe || "body") {
              case "body":
                switch (r.responseType) {
                  case "arraybuffer":
                    return i.pipe(
                      I((t) => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer))
                          throw new Error("Response is not an ArrayBuffer.");
                        return t.body;
                      }),
                    );
                  case "blob":
                    return i.pipe(
                      I((t) => {
                        if (null !== t.body && !(t.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return t.body;
                      }),
                    );
                  case "text":
                    return i.pipe(
                      I((t) => {
                        if (null !== t.body && "string" != typeof t.body)
                          throw new Error("Response is not a string.");
                        return t.body;
                      }),
                    );
                  case "json":
                  default:
                    return i.pipe(I((t) => t.body));
                }
              case "response":
                return i;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${n.observe}}`,
                );
            }
          }
          delete(t, e = {}) {
            return this.request("DELETE", t, e);
          }
          get(t, e = {}) {
            return this.request("GET", t, e);
          }
          head(t, e = {}) {
            return this.request("HEAD", t, e);
          }
          jsonp(t, e) {
            return this.request("JSONP", t, {
              params: new Cf().append(e, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(t, e = {}) {
            return this.request("OPTIONS", t, e);
          }
          patch(t, e, n = {}) {
            return this.request("PATCH", t, Lf(n, e));
          }
          post(t, e, n = {}) {
            return this.request("POST", t, Lf(n, e));
          }
          put(t, e, n = {}) {
            return this.request("PUT", t, Lf(n, e));
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(er(vf));
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class Df {
        constructor(t, e) {
          (this.next = t), (this.interceptor = e);
        }
        handle(t) {
          return this.interceptor.intercept(t, this.next);
        }
      }
      const Ff = new $n("HTTP_INTERCEPTORS");
      let $f = (() => {
        class t {
          intercept(t, e) {
            return e.handle(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Mf = /^\)\]\}',?\n/;
      class Hf {}
      let Uf = (() => {
          class t {
            constructor() {}
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Bf = (() => {
          class t {
            constructor(t) {
              this.xhrFactory = t;
            }
            handle(t) {
              if ("JSONP" === t.method)
                throw new Error(
                  "Attempted to construct Jsonp request without HttpClientJsonpModule installed.",
                );
              return new y((e) => {
                const n = this.xhrFactory.build();
                if (
                  (n.open(t.method, t.urlWithParams),
                  t.withCredentials && (n.withCredentials = !0),
                  t.headers.forEach((t, e) =>
                    n.setRequestHeader(t, e.join(",")),
                  ),
                  t.headers.has("Accept") ||
                    n.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*",
                    ),
                  !t.headers.has("Content-Type"))
                ) {
                  const e = t.detectContentTypeHeader();
                  null !== e && n.setRequestHeader("Content-Type", e);
                }
                if (t.responseType) {
                  const e = t.responseType.toLowerCase();
                  n.responseType = "json" !== e ? e : "text";
                }
                const r = t.serializeBody();
                let s = null;
                const i = () => {
                    if (null !== s) return s;
                    const e = 1223 === n.status ? 204 : n.status,
                      r = n.statusText || "OK",
                      i = new _f(n.getAllResponseHeaders()),
                      o =
                        (function (t) {
                          return "responseURL" in t && t.responseURL
                            ? t.responseURL
                            : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
                              ? t.getResponseHeader("X-Request-URL")
                              : null;
                        })(n) || t.url;
                    return (
                      (s = new Pf({
                        headers: i,
                        status: e,
                        statusText: r,
                        url: o,
                      })),
                      s
                    );
                  },
                  o = () => {
                    let { headers: r, status: s, statusText: o, url: a } = i(),
                      c = null;
                    204 !== s &&
                      (c = void 0 === n.response ? n.responseText : n.response),
                      0 === s && (s = c ? 200 : 0);
                    let l = s >= 200 && s < 300;
                    if ("json" === t.responseType && "string" == typeof c) {
                      const t = c;
                      c = c.replace(Mf, "");
                      try {
                        c = "" !== c ? JSON.parse(c) : null;
                      } catch (u) {
                        (c = t), l && ((l = !1), (c = { error: u, text: c }));
                      }
                    }
                    l
                      ? (e.next(
                          new Rf({
                            body: c,
                            headers: r,
                            status: s,
                            statusText: o,
                            url: a || void 0,
                          }),
                        ),
                        e.complete())
                      : e.error(
                          new jf({
                            error: c,
                            headers: r,
                            status: s,
                            statusText: o,
                            url: a || void 0,
                          }),
                        );
                  },
                  a = (t) => {
                    const { url: r } = i(),
                      s = new jf({
                        error: t,
                        status: n.status || 0,
                        statusText: n.statusText || "Unknown Error",
                        url: r || void 0,
                      });
                    e.error(s);
                  };
                let c = !1;
                const l = (r) => {
                    c || (e.next(i()), (c = !0));
                    let s = { type: Ef.DownloadProgress, loaded: r.loaded };
                    r.lengthComputable && (s.total = r.total),
                      "text" === t.responseType &&
                        n.responseText &&
                        (s.partialText = n.responseText),
                      e.next(s);
                  },
                  u = (t) => {
                    let n = { type: Ef.UploadProgress, loaded: t.loaded };
                    t.lengthComputable && (n.total = t.total), e.next(n);
                  };
                return (
                  n.addEventListener("load", o),
                  n.addEventListener("error", a),
                  n.addEventListener("timeout", a),
                  n.addEventListener("abort", a),
                  t.reportProgress &&
                    (n.addEventListener("progress", l),
                    null !== r &&
                      n.upload &&
                      n.upload.addEventListener("progress", u)),
                  n.send(r),
                  e.next({ type: Ef.Sent }),
                  () => {
                    n.removeEventListener("error", a),
                      n.removeEventListener("abort", a),
                      n.removeEventListener("load", o),
                      n.removeEventListener("timeout", a),
                      t.reportProgress &&
                        (n.removeEventListener("progress", l),
                        null !== r &&
                          n.upload &&
                          n.upload.removeEventListener("progress", u)),
                      n.readyState !== n.DONE && n.abort();
                  }
                );
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(er(Hf));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const Vf = new $n("XSRF_COOKIE_NAME"),
        zf = new $n("XSRF_HEADER_NAME");
      class qf {}
      let Gf = (() => {
          class t {
            constructor(t, e, n) {
              (this.doc = t),
                (this.platform = e),
                (this.cookieName = n),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ("server" === this.platform) return null;
              const t = this.doc.cookie || "";
              return (
                t !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = Gc(t, this.cookieName)),
                  (this.lastCookieString = t)),
                this.lastToken
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(er(Sc), er(Ra), er(Vf));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Wf = (() => {
          class t {
            constructor(t, e) {
              (this.tokenService = t), (this.headerName = e);
            }
            intercept(t, e) {
              const n = t.url.toLowerCase();
              if (
                "GET" === t.method ||
                "HEAD" === t.method ||
                n.startsWith("http://") ||
                n.startsWith("https://")
              )
                return e.handle(t);
              const r = this.tokenService.getToken();
              return (
                null === r ||
                  t.headers.has(this.headerName) ||
                  (t = t.clone({ headers: t.headers.set(this.headerName, r) })),
                e.handle(t)
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(er(qf), er(zf));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Zf = (() => {
          class t {
            constructor(t, e) {
              (this.backend = t), (this.injector = e), (this.chain = null);
            }
            handle(t) {
              if (null === this.chain) {
                const t = this.injector.get(Ff, []);
                this.chain = t.reduceRight(
                  (t, e) => new Df(t, e),
                  this.backend,
                );
              }
              return this.chain.handle(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(er(bf), er(fi));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Kf = (() => {
          class t {
            static disable() {
              return {
                ngModule: t,
                providers: [{ provide: Wf, useClass: $f }],
              };
            }
            static withOptions(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.cookieName ? { provide: Vf, useValue: e.cookieName } : [],
                  e.headerName ? { provide: zf, useValue: e.headerName } : [],
                ],
              };
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ut({
              providers: [
                Wf,
                { provide: Ff, useExisting: Wf, multi: !0 },
                { provide: qf, useClass: Gf },
                { provide: Vf, useValue: "XSRF-TOKEN" },
                { provide: zf, useValue: "X-XSRF-TOKEN" },
              ],
            })),
            t
          );
        })(),
        Qf = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ut({
              providers: [
                Nf,
                { provide: vf, useClass: Zf },
                Bf,
                { provide: bf, useExisting: Bf },
                Uf,
                { provide: Hf, useExisting: Uf },
              ],
              imports: [
                [
                  Kf.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN",
                  }),
                ],
              ],
            })),
            t
          );
        })(),
        Jf = (() => {
          class t {
            constructor(t) {
              this.http = t;
            }
            readRaghuApi() {
              return this.http.get("assets/data/sloka.json");
            }
            readAnalysis() {
              return this.http.get("assets/data/analysis.json");
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(er(Nf));
            }),
            (t.ɵprov = lt({ token: t, factory: t.ɵfac, providedIn: "root" })),
            t
          );
        })(),
        Yf = (() => {
          class t {
            constructor(t, e) {
              (this.routes = t),
                (this.service = e),
                (this.chapters = [
                  { chapt: "1-10", route: "1" },
                  { chapt: "11-20", route: "2" },
                  { chapt: "21-30", route: "3" },
                  { chapt: "31-40", route: "4" },
                  { chapt: "41-50", route: "5" },
                  { chapt: "51-60", route: "6" },
                  { chapt: "61-70", route: "7" },
                  { chapt: "71-80", route: "8" },
                  { chapt: "81-90", route: "9" },
                  { chapt: "91-100", route: "10" },
                ]),
                (this.SktData = []);
            }
            ngOnInit() {
              $(document).ready(function () {
                $(".carousel").carousel(),
                  $(".carousel.carousel-slider").carousel({
                    fullWidth: !0,
                    height: 450,
                    indicators: !0,
                    duration: 150,
                  });
              }),
                this.routes.paramMap.subscribe((t) => {
                  (this.data = t.get("chaptno")),
                    this.service.readRaghuApi().subscribe((t) => {
                      this.SktData = t;
                    });
                });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Ci(Eh), Ci(Jf));
            }),
            (t.ɵcmp = Ut({
              type: t,
              selectors: [["app-slider"]],
              decls: 3,
              vars: 0,
              consts: [
                [1, "carousel", "carousel-slider", "center"],
                ["href", "#one!", 1, "carousel-item"],
                ["src", "assets/images/sr.jpg"],
              ],
              template: function (t, e) {
                1 & t &&
                  (Ai(0, "div", 0),
                  Ai(1, "div", 1),
                  Ei(2, "img", 2),
                  Ti(),
                  Ti());
              },
              styles: [
                "p[_ngcontent-%COMP%]{font-size:large;text-align:justify}",
              ],
            })),
            t
          );
        })();
      function Xf(t, e) {
        if ((1 & t && (Ai(0, "p"), qi(1), Ti()), 2 & t)) {
          const t = e.$implicit;
          rs(1), Gi(" ", t.para, " ");
        }
      }
      let tp = (() => {
        class t {
          constructor(t) {
            (this.http = t), (this.about = []);
          }
          ngOnInit() {
            this.http.get("assets/data/about.json").subscribe((t) => {
              this.about = t;
            });
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Ci(Nf));
          }),
          (t.ɵcmp = Ut({
            type: t,
            selectors: [["app-about"]],
            decls: 7,
            vars: 1,
            consts: [
              [1, "section"],
              [1, "container"],
              [1, "pink-text"],
              [4, "ngFor", "ngForOf"],
            ],
            template: function (t, e) {
              1 & t &&
                (Ei(0, "app-slider"),
                Ai(1, "div", 0),
                Ai(2, "div", 1),
                Ai(3, "h5", 2),
                qi(4, "About the project"),
                Ti(),
                Ei(5, "hr"),
                ki(6, Xf, 2, 1, "p", 3),
                Ti(),
                Ti()),
                2 & t && (rs(6), Si("ngForOf", e.about));
            },
            directives: [Yf, Zc],
            styles: [
              "p[_ngcontent-%COMP%]{font-size:large;text-align:justify}",
            ],
          })),
          t
        );
      })();
      var ep = n("PSD3"),
        np = n.n(ep);
      function rp(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "li", 46),
            Ri("click", function () {
              Ee(t);
              const n = e.$implicit;
              return Ni().getSlokas(n.route);
            }),
            Ai(1, "a", 47),
            qi(2),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = e.$implicit;
          rs(2), Gi(" ", t.chapt, "");
        }
      }
      function sp(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "li", 48),
            Ri("click", function () {
              Ee(t);
              const n = e.$implicit;
              return Ni().getAnalysis(n.chaptno, n.slokano);
            }),
            Ai(1, "span", 49),
            qi(2),
            Ti(),
            Ei(3, "hr"),
            Ai(4, "a", 50),
            qi(5),
            Ei(6, "br"),
            qi(7),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = e.$implicit;
          rs(2),
            Gi(
              " \u0936\u094d\u0932\u094b\u0915\u0938\u0902\u0916\u094d\u092f\u093e : ",
              t.slokano,
              " ",
            ),
            rs(3),
            Gi(" ", t.spart1, ""),
            rs(2),
            Gi(" ", t.spart2, "");
        }
      }
      function ip(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " Word No. "), Ti(), Ti());
      }
      function op(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "tr", 63),
            Ri("click", function () {
              return Ee(t), Ni(3).showGraf("1");
            }),
            Ai(1, "td", 47),
            qi(2, " 1.1.A. "),
            Ti(),
            Ti();
        }
      }
      function ap(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.1.B. "), Ti(), Ti());
      }
      function cp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.1.C. "), Ti(), Ti());
      }
      function lp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.1.D. "), Ti(), Ti());
      }
      function up(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.1.E. "), Ti(), Ti());
      }
      function hp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.1.F. "), Ti(), Ti());
      }
      function dp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.1.G. "), Ti(), Ti());
      }
      function fp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function pp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.1.I."), Ti(), Ti());
      }
      function gp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.1.J."), Ti(), Ti());
      }
      function mp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.1.K."), Ti(), Ti());
      }
      function wp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.1.L."), Ti(), Ti());
      }
      function yp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.1.M."), Ti(), Ti());
      }
      function vp(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().index;
          rs(2), Gi(" ", t + 1, "");
        }
      }
      function bp(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.word, " ");
        }
      }
      function _p(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.sandhied_word, " ");
        }
      }
      function kp(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_analysis, " ");
        }
      }
      function xp(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_in_context, " ");
        }
      }
      function Cp(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, ". ");
        }
      }
      function Sp(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, " ");
        }
      }
      function Ip(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.kaaraka_sambandha, " ");
        }
      }
      function Ap(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Tp(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.hindi_meaning, "");
        }
      }
      function Ep(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.english_meaning, "");
        }
      }
      function Op(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Pp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Rp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function jp(t, e) {
        if (
          (1 & t &&
            (Ai(0, "li"),
            Ai(1, "table"),
            ki(2, vp, 3, 1, "tr", 57),
            ki(3, bp, 3, 1, "tr", 57),
            ki(4, _p, 3, 1, "tr", 57),
            ki(5, kp, 3, 1, "tr", 57),
            ki(6, xp, 3, 1, "tr", 57),
            ki(7, Cp, 3, 1, "tr", 57),
            ki(8, Sp, 3, 1, "tr", 57),
            ki(9, Ip, 3, 1, "tr", 57),
            ki(10, Ap, 3, 0, "tr", 57),
            ki(11, Tp, 3, 1, "tr", 57),
            ki(12, Ep, 3, 1, "tr", 57),
            ki(13, Op, 3, 0, "tr", 57),
            ki(14, Pp, 3, 0, "tr", 57),
            ki(15, Rp, 3, 0, "tr", 57),
            Ti(),
            Ti()),
          2 & t)
        ) {
          const t = e.$implicit;
          Ni(3);
          const n = xi(103),
            r = xi(31),
            s = xi(37),
            i = xi(43),
            o = xi(49),
            a = xi(55),
            c = xi(25),
            l = xi(67),
            u = xi(73),
            h = xi(79),
            d = xi(85),
            f = xi(91),
            p = xi(97),
            g = xi(61);
          Hi("background-color", t.bgcolor),
            rs(2),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == g.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == n.checked);
        }
      }
      function Lp(t, e) {
        if (
          (1 & t &&
            (Ai(0, "ul"),
            Ai(1, "li", 60),
            Ai(2, "table"),
            ki(3, ip, 3, 0, "tr", 57),
            ki(4, op, 3, 0, "tr", 61),
            ki(5, ap, 3, 0, "tr", 57),
            ki(6, cp, 3, 0, "tr", 57),
            ki(7, lp, 3, 0, "tr", 57),
            ki(8, up, 3, 0, "tr", 57),
            ki(9, hp, 3, 0, "tr", 57),
            ki(10, dp, 3, 0, "tr", 57),
            ki(11, fp, 3, 0, "tr", 57),
            ki(12, pp, 3, 0, "tr", 57),
            ki(13, gp, 3, 0, "tr", 57),
            ki(14, mp, 3, 0, "tr", 57),
            ki(15, wp, 3, 0, "tr", 57),
            ki(16, yp, 3, 0, "tr", 57),
            Ti(),
            Ti(),
            ki(17, jp, 16, 16, "li", 62),
            Ti()),
          2 & t)
        ) {
          const t = Ni(2),
            e = xi(103),
            n = xi(31),
            r = xi(37),
            s = xi(43),
            i = xi(49),
            o = xi(55),
            a = xi(25),
            c = xi(67),
            l = xi(73),
            u = xi(79),
            h = xi(85),
            d = xi(91),
            f = xi(97),
            p = xi(61);
          rs(3),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == n.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == e.checked),
            rs(1),
            Si("ngForOf", t.sentOneAna);
        }
      }
      function Np(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "div", 64),
            Ai(1, "a", 65),
            Ri("click", function () {
              Ee(t);
              const e = Ni(2);
              return e.showGraf(e.sentOneGraf);
            }),
            Ei(2, "img", 66),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = Ni(2);
          rs(2), Di("src", t.sentOneGraf, dr);
        }
      }
      function Dp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " Word No. "), Ti(), Ti());
      }
      function Fp(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "tr", 63),
            Ri("click", function () {
              return Ee(t), Ni(3).showGraf("2");
            }),
            Ai(1, "td", 47),
            qi(2, " 1.2.A. "),
            Ti(),
            Ti();
        }
      }
      function $p(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.2.B. "), Ti(), Ti());
      }
      function Mp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.2.C. "), Ti(), Ti());
      }
      function Hp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.2.D. "), Ti(), Ti());
      }
      function Up(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.2.E. "), Ti(), Ti());
      }
      function Bp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.2.F. "), Ti(), Ti());
      }
      function Vp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.2.G. "), Ti(), Ti());
      }
      function zp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.2.H."), Ti(), Ti());
      }
      function qp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.2.I."), Ti(), Ti());
      }
      function Gp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.2.J."), Ti(), Ti());
      }
      function Wp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.2.K."), Ti(), Ti());
      }
      function Zp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.2.L."), Ti(), Ti());
      }
      function Kp(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.2.M."), Ti(), Ti());
      }
      function Qp(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().index;
          rs(2), Gi(" ", t + 1, "");
        }
      }
      function Jp(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.word, " ");
        }
      }
      function Yp(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.sandhied_word, " ");
        }
      }
      function Xp(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_analysis, " ");
        }
      }
      function tg(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_in_context, " ");
        }
      }
      function eg(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, ". ");
        }
      }
      function ng(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, " ");
        }
      }
      function rg(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.kaaraka_sambandha, " ");
        }
      }
      function sg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function ig(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.hindi_meaning, "");
        }
      }
      function og(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.english_meaning, "");
        }
      }
      function ag(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function cg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function lg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function ug(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "li", 63),
            Ri("click", function () {
              Ee(t);
              const n = e.$implicit;
              return Ni(3).showGraf(n.graph);
            }),
            Ai(1, "table"),
            ki(2, Qp, 3, 1, "tr", 57),
            ki(3, Jp, 3, 1, "tr", 57),
            ki(4, Yp, 3, 1, "tr", 57),
            ki(5, Xp, 3, 1, "tr", 57),
            ki(6, tg, 3, 1, "tr", 57),
            ki(7, eg, 3, 1, "tr", 57),
            ki(8, ng, 3, 1, "tr", 57),
            ki(9, rg, 3, 1, "tr", 57),
            ki(10, sg, 3, 0, "tr", 57),
            ki(11, ig, 3, 1, "tr", 57),
            ki(12, og, 3, 1, "tr", 57),
            ki(13, ag, 3, 0, "tr", 57),
            ki(14, cg, 3, 0, "tr", 57),
            ki(15, lg, 3, 0, "tr", 57),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = e.$implicit;
          Ni(3);
          const n = xi(103),
            r = xi(31),
            s = xi(37),
            i = xi(43),
            o = xi(49),
            a = xi(55),
            c = xi(25),
            l = xi(67),
            u = xi(73),
            h = xi(79),
            d = xi(85),
            f = xi(91),
            p = xi(97),
            g = xi(61);
          Hi("background-color", t.bgcolor),
            rs(2),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == g.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == n.checked);
        }
      }
      function hg(t, e) {
        if (
          (1 & t &&
            (Ai(0, "ul"),
            Ai(1, "li", 60),
            Ai(2, "table"),
            ki(3, Dp, 3, 0, "tr", 57),
            ki(4, Fp, 3, 0, "tr", 61),
            ki(5, $p, 3, 0, "tr", 57),
            ki(6, Mp, 3, 0, "tr", 57),
            ki(7, Hp, 3, 0, "tr", 57),
            ki(8, Up, 3, 0, "tr", 57),
            ki(9, Bp, 3, 0, "tr", 57),
            ki(10, Vp, 3, 0, "tr", 57),
            ki(11, zp, 3, 0, "tr", 57),
            ki(12, qp, 3, 0, "tr", 57),
            ki(13, Gp, 3, 0, "tr", 57),
            ki(14, Wp, 3, 0, "tr", 57),
            ki(15, Zp, 3, 0, "tr", 57),
            ki(16, Kp, 3, 0, "tr", 57),
            Ti(),
            Ti(),
            ki(17, ug, 16, 16, "li", 67),
            Ti()),
          2 & t)
        ) {
          const t = Ni(2),
            e = xi(103),
            n = xi(31),
            r = xi(37),
            s = xi(43),
            i = xi(49),
            o = xi(55),
            a = xi(25),
            c = xi(67),
            l = xi(73),
            u = xi(79),
            h = xi(85),
            d = xi(91),
            f = xi(97),
            p = xi(61);
          rs(3),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == n.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == e.checked),
            rs(1),
            Si("ngForOf", t.sentTwoAna);
        }
      }
      function dg(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "div", 64),
            Ai(1, "a", 65),
            Ri("click", function () {
              Ee(t);
              const e = Ni(2);
              return e.showGraf(e.sentTwoGraf);
            }),
            Ei(2, "img", 68),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = Ni(2);
          rs(2), Di("src", t.sentTwoGraf, dr);
        }
      }
      function fg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " Word No. "), Ti(), Ti());
      }
      function pg(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "tr", 63),
            Ri("click", function () {
              return Ee(t), Ni(3).showGraf("3");
            }),
            Ai(1, "td", 47),
            qi(2, " 1.3.A. "),
            Ti(),
            Ti();
        }
      }
      function gg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.3.B. "), Ti(), Ti());
      }
      function mg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.3.C. "), Ti(), Ti());
      }
      function wg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.3.D. "), Ti(), Ti());
      }
      function yg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.3.E. "), Ti(), Ti());
      }
      function vg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.3.F. "), Ti(), Ti());
      }
      function bg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.3.G. "), Ti(), Ti());
      }
      function _g(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.3.H."), Ti(), Ti());
      }
      function kg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.3.I."), Ti(), Ti());
      }
      function xg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.3.J."), Ti(), Ti());
      }
      function Cg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.3.K."), Ti(), Ti());
      }
      function Sg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.3.L."), Ti(), Ti());
      }
      function Ig(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.3.M."), Ti(), Ti());
      }
      function Ag(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().index;
          rs(2), Gi(" ", t + 1, "");
        }
      }
      function Tg(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.word, " ");
        }
      }
      function Eg(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.sandhied_word, " ");
        }
      }
      function Og(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_analysis, " ");
        }
      }
      function Pg(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_in_context, " ");
        }
      }
      function Rg(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, ". ");
        }
      }
      function jg(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, " ");
        }
      }
      function Lg(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.kaaraka_sambandha, " ");
        }
      }
      function Ng(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Dg(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.hindi_meaning, "");
        }
      }
      function Fg(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.english_meaning, "");
        }
      }
      function $g(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Mg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Hg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Ug(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "li", 63),
            Ri("click", function () {
              Ee(t);
              const n = e.$implicit;
              return Ni(3).showGraf(n.graph);
            }),
            Ai(1, "table"),
            ki(2, Ag, 3, 1, "tr", 57),
            ki(3, Tg, 3, 1, "tr", 57),
            ki(4, Eg, 3, 1, "tr", 57),
            ki(5, Og, 3, 1, "tr", 57),
            ki(6, Pg, 3, 1, "tr", 57),
            ki(7, Rg, 3, 1, "tr", 57),
            ki(8, jg, 3, 1, "tr", 57),
            ki(9, Lg, 3, 1, "tr", 57),
            ki(10, Ng, 3, 0, "tr", 57),
            ki(11, Dg, 3, 1, "tr", 57),
            ki(12, Fg, 3, 1, "tr", 57),
            ki(13, $g, 3, 0, "tr", 57),
            ki(14, Mg, 3, 0, "tr", 57),
            ki(15, Hg, 3, 0, "tr", 57),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = e.$implicit;
          Ni(3);
          const n = xi(103),
            r = xi(31),
            s = xi(37),
            i = xi(43),
            o = xi(49),
            a = xi(55),
            c = xi(25),
            l = xi(67),
            u = xi(73),
            h = xi(79),
            d = xi(85),
            f = xi(91),
            p = xi(97),
            g = xi(61);
          Hi("background-color", t.bgcolor),
            rs(2),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == g.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == n.checked);
        }
      }
      function Bg(t, e) {
        if (
          (1 & t &&
            (Ai(0, "ul"),
            Ai(1, "li", 60),
            Ai(2, "table"),
            ki(3, fg, 3, 0, "tr", 57),
            ki(4, pg, 3, 0, "tr", 61),
            ki(5, gg, 3, 0, "tr", 57),
            ki(6, mg, 3, 0, "tr", 57),
            ki(7, wg, 3, 0, "tr", 57),
            ki(8, yg, 3, 0, "tr", 57),
            ki(9, vg, 3, 0, "tr", 57),
            ki(10, bg, 3, 0, "tr", 57),
            ki(11, _g, 3, 0, "tr", 57),
            ki(12, kg, 3, 0, "tr", 57),
            ki(13, xg, 3, 0, "tr", 57),
            ki(14, Cg, 3, 0, "tr", 57),
            ki(15, Sg, 3, 0, "tr", 57),
            ki(16, Ig, 3, 0, "tr", 57),
            Ti(),
            Ti(),
            ki(17, Ug, 16, 16, "li", 67),
            Ti()),
          2 & t)
        ) {
          const t = Ni(2),
            e = xi(103),
            n = xi(31),
            r = xi(37),
            s = xi(43),
            i = xi(49),
            o = xi(55),
            a = xi(25),
            c = xi(67),
            l = xi(73),
            u = xi(79),
            h = xi(85),
            d = xi(91),
            f = xi(97),
            p = xi(61);
          rs(3),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == n.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == e.checked),
            rs(1),
            Si("ngForOf", t.sentThreeAna);
        }
      }
      function Vg(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "div", 64),
            Ai(1, "a", 65),
            Ri("click", function () {
              Ee(t);
              const e = Ni(2);
              return e.showGraf(e.sentThreeGraf);
            }),
            Ei(2, "img", 68),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = Ni(2);
          rs(2), Di("src", t.sentThreeGraf, dr);
        }
      }
      function zg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " Word No. "), Ti(), Ti());
      }
      function qg(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "tr", 63),
            Ri("click", function () {
              return Ee(t), Ni(3).showGraf("4");
            }),
            Ai(1, "td", 47),
            qi(2, " 1.4.A. "),
            Ti(),
            Ti();
        }
      }
      function Gg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.4.B. "), Ti(), Ti());
      }
      function Wg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.4.C. "), Ti(), Ti());
      }
      function Zg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.4.D. "), Ti(), Ti());
      }
      function Kg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.4.E. "), Ti(), Ti());
      }
      function Qg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.4.F. "), Ti(), Ti());
      }
      function Jg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.4.G. "), Ti(), Ti());
      }
      function Yg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.4.H."), Ti(), Ti());
      }
      function Xg(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.4.I."), Ti(), Ti());
      }
      function tm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.4.J."), Ti(), Ti());
      }
      function em(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.4.K."), Ti(), Ti());
      }
      function nm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.4.L."), Ti(), Ti());
      }
      function rm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.4.M."), Ti(), Ti());
      }
      function sm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().index;
          rs(2), Gi(" ", t + 1, "");
        }
      }
      function im(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.word, " ");
        }
      }
      function om(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.sandhied_word, " ");
        }
      }
      function am(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_analysis, " ");
        }
      }
      function cm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_in_context, " ");
        }
      }
      function lm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, ". ");
        }
      }
      function um(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, " ");
        }
      }
      function hm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.kaaraka_sambandha, " ");
        }
      }
      function dm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function fm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.hindi_meaning, "");
        }
      }
      function pm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.english_meaning, "");
        }
      }
      function gm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function mm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function wm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function ym(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "li", 63),
            Ri("click", function () {
              Ee(t);
              const n = e.$implicit;
              return Ni(3).showGraf(n.graph);
            }),
            Ai(1, "table"),
            ki(2, sm, 3, 1, "tr", 57),
            ki(3, im, 3, 1, "tr", 57),
            ki(4, om, 3, 1, "tr", 57),
            ki(5, am, 3, 1, "tr", 57),
            ki(6, cm, 3, 1, "tr", 57),
            ki(7, lm, 3, 1, "tr", 57),
            ki(8, um, 3, 1, "tr", 57),
            ki(9, hm, 3, 1, "tr", 57),
            ki(10, dm, 3, 0, "tr", 57),
            ki(11, fm, 3, 1, "tr", 57),
            ki(12, pm, 3, 1, "tr", 57),
            ki(13, gm, 3, 0, "tr", 57),
            ki(14, mm, 3, 0, "tr", 57),
            ki(15, wm, 3, 0, "tr", 57),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = e.$implicit;
          Ni(3);
          const n = xi(103),
            r = xi(31),
            s = xi(37),
            i = xi(43),
            o = xi(49),
            a = xi(55),
            c = xi(25),
            l = xi(67),
            u = xi(73),
            h = xi(79),
            d = xi(85),
            f = xi(91),
            p = xi(97),
            g = xi(61);
          Hi("background-color", t.bgcolor),
            rs(2),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == g.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == n.checked);
        }
      }
      function vm(t, e) {
        if (
          (1 & t &&
            (Ai(0, "ul"),
            Ai(1, "li", 60),
            Ai(2, "table"),
            ki(3, zg, 3, 0, "tr", 57),
            ki(4, qg, 3, 0, "tr", 61),
            ki(5, Gg, 3, 0, "tr", 57),
            ki(6, Wg, 3, 0, "tr", 57),
            ki(7, Zg, 3, 0, "tr", 57),
            ki(8, Kg, 3, 0, "tr", 57),
            ki(9, Qg, 3, 0, "tr", 57),
            ki(10, Jg, 3, 0, "tr", 57),
            ki(11, Yg, 3, 0, "tr", 57),
            ki(12, Xg, 3, 0, "tr", 57),
            ki(13, tm, 3, 0, "tr", 57),
            ki(14, em, 3, 0, "tr", 57),
            ki(15, nm, 3, 0, "tr", 57),
            ki(16, rm, 3, 0, "tr", 57),
            Ti(),
            Ti(),
            ki(17, ym, 16, 16, "li", 67),
            Ti()),
          2 & t)
        ) {
          const t = Ni(2),
            e = xi(103),
            n = xi(31),
            r = xi(37),
            s = xi(43),
            i = xi(49),
            o = xi(55),
            a = xi(25),
            c = xi(67),
            l = xi(73),
            u = xi(79),
            h = xi(85),
            d = xi(91),
            f = xi(97),
            p = xi(61);
          rs(3),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == n.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == e.checked),
            rs(1),
            Si("ngForOf", t.sentFourAna);
        }
      }
      function bm(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "div", 64),
            Ai(1, "a", 65),
            Ri("click", function () {
              Ee(t);
              const e = Ni(2);
              return e.showGraf(e.sentFourGraf);
            }),
            Ei(2, "img", 68),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = Ni(2);
          rs(2), Di("src", t.sentFourGraf, dr);
        }
      }
      function _m(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " Word No. "), Ti(), Ti());
      }
      function km(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "tr", 63),
            Ri("click", function () {
              return Ee(t), Ni(3).showGraf("5");
            }),
            Ai(1, "td", 47),
            qi(2, " 1.5.A. "),
            Ti(),
            Ti();
        }
      }
      function xm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.5.B. "), Ti(), Ti());
      }
      function Cm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.5.C. "), Ti(), Ti());
      }
      function Sm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.5.D. "), Ti(), Ti());
      }
      function Im(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.5.E. "), Ti(), Ti());
      }
      function Am(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.5.F. "), Ti(), Ti());
      }
      function Tm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.5.G. "), Ti(), Ti());
      }
      function Em(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.5.H."), Ti(), Ti());
      }
      function Om(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.5.I."), Ti(), Ti());
      }
      function Pm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.5.J."), Ti(), Ti());
      }
      function Rm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.5.K."), Ti(), Ti());
      }
      function jm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.5.L."), Ti(), Ti());
      }
      function Lm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.5.M."), Ti(), Ti());
      }
      function Nm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().index;
          rs(2), Gi(" ", t + 1, "");
        }
      }
      function Dm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.word, " ");
        }
      }
      function Fm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.sandhied_word, " ");
        }
      }
      function $m(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_analysis, " ");
        }
      }
      function Mm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_in_context, " ");
        }
      }
      function Hm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, ". ");
        }
      }
      function Um(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, " ");
        }
      }
      function Bm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.kaaraka_sambandha, " ");
        }
      }
      function Vm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function zm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.hindi_meaning, "");
        }
      }
      function qm(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.english_meaning, "");
        }
      }
      function Gm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Wm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Zm(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Km(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "li", 63),
            Ri("click", function () {
              Ee(t);
              const n = e.$implicit;
              return Ni(3).showGraf(n.graph);
            }),
            Ai(1, "table"),
            ki(2, Nm, 3, 1, "tr", 57),
            ki(3, Dm, 3, 1, "tr", 57),
            ki(4, Fm, 3, 1, "tr", 57),
            ki(5, $m, 3, 1, "tr", 57),
            ki(6, Mm, 3, 1, "tr", 57),
            ki(7, Hm, 3, 1, "tr", 57),
            ki(8, Um, 3, 1, "tr", 57),
            ki(9, Bm, 3, 1, "tr", 57),
            ki(10, Vm, 3, 0, "tr", 57),
            ki(11, zm, 3, 1, "tr", 57),
            ki(12, qm, 3, 1, "tr", 57),
            ki(13, Gm, 3, 0, "tr", 57),
            ki(14, Wm, 3, 0, "tr", 57),
            ki(15, Zm, 3, 0, "tr", 57),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = e.$implicit;
          Ni(3);
          const n = xi(103),
            r = xi(31),
            s = xi(37),
            i = xi(43),
            o = xi(49),
            a = xi(55),
            c = xi(25),
            l = xi(67),
            u = xi(73),
            h = xi(79),
            d = xi(85),
            f = xi(91),
            p = xi(97),
            g = xi(61);
          Hi("background-color", t.bgcolor),
            rs(2),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == g.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == n.checked);
        }
      }
      function Qm(t, e) {
        if (
          (1 & t &&
            (Ai(0, "ul"),
            Ai(1, "li", 60),
            Ai(2, "table"),
            ki(3, _m, 3, 0, "tr", 57),
            ki(4, km, 3, 0, "tr", 61),
            ki(5, xm, 3, 0, "tr", 57),
            ki(6, Cm, 3, 0, "tr", 57),
            ki(7, Sm, 3, 0, "tr", 57),
            ki(8, Im, 3, 0, "tr", 57),
            ki(9, Am, 3, 0, "tr", 57),
            ki(10, Tm, 3, 0, "tr", 57),
            ki(11, Em, 3, 0, "tr", 57),
            ki(12, Om, 3, 0, "tr", 57),
            ki(13, Pm, 3, 0, "tr", 57),
            ki(14, Rm, 3, 0, "tr", 57),
            ki(15, jm, 3, 0, "tr", 57),
            ki(16, Lm, 3, 0, "tr", 57),
            Ti(),
            Ti(),
            ki(17, Km, 16, 16, "li", 67),
            Ti()),
          2 & t)
        ) {
          const t = Ni(2),
            e = xi(103),
            n = xi(31),
            r = xi(37),
            s = xi(43),
            i = xi(49),
            o = xi(55),
            a = xi(25),
            c = xi(67),
            l = xi(73),
            u = xi(79),
            h = xi(85),
            d = xi(91),
            f = xi(97),
            p = xi(61);
          rs(3),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == n.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == e.checked),
            rs(1),
            Si("ngForOf", t.sentFiveAna);
        }
      }
      function Jm(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "div", 64),
            Ai(1, "a", 65),
            Ri("click", function () {
              Ee(t);
              const e = Ni(2);
              return e.showGraf(e.sentFiveGraf);
            }),
            Ei(2, "img", 68),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = Ni(2);
          rs(2), Di("src", t.sentFiveGraf, dr);
        }
      }
      function Ym(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " Word No. "), Ti(), Ti());
      }
      function Xm(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "tr", 63),
            Ri("click", function () {
              return Ee(t), Ni(3).showGraf("6");
            }),
            Ai(1, "td", 47),
            qi(2, " 1.6.A. "),
            Ti(),
            Ti();
        }
      }
      function tw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.6.B. "), Ti(), Ti());
      }
      function ew(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.6.C. "), Ti(), Ti());
      }
      function nw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.6.D. "), Ti(), Ti());
      }
      function rw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.6.E. "), Ti(), Ti());
      }
      function sw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.6.F. "), Ti(), Ti());
      }
      function iw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.6.G. "), Ti(), Ti());
      }
      function ow(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.6.H."), Ti(), Ti());
      }
      function aw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.6.I."), Ti(), Ti());
      }
      function cw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.6.J."), Ti(), Ti());
      }
      function lw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.6.K."), Ti(), Ti());
      }
      function uw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.6.L."), Ti(), Ti());
      }
      function hw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.6.M."), Ti(), Ti());
      }
      function dw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().index;
          rs(2), Gi(" ", t + 1, "");
        }
      }
      function fw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.word, " ");
        }
      }
      function pw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.sandhied_word, " ");
        }
      }
      function gw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_analysis, " ");
        }
      }
      function mw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_in_context, " ");
        }
      }
      function ww(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, ". ");
        }
      }
      function yw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, " ");
        }
      }
      function vw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.kaaraka_sambandha, " ");
        }
      }
      function bw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function _w(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.hindi_meaning, "");
        }
      }
      function kw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.english_meaning, "");
        }
      }
      function xw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Cw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Sw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Iw(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "li", 63),
            Ri("click", function () {
              Ee(t);
              const n = e.$implicit;
              return Ni(3).showGraf(n.graph);
            }),
            Ai(1, "table"),
            ki(2, dw, 3, 1, "tr", 57),
            ki(3, fw, 3, 1, "tr", 57),
            ki(4, pw, 3, 1, "tr", 57),
            ki(5, gw, 3, 1, "tr", 57),
            ki(6, mw, 3, 1, "tr", 57),
            ki(7, ww, 3, 1, "tr", 57),
            ki(8, yw, 3, 1, "tr", 57),
            ki(9, vw, 3, 1, "tr", 57),
            ki(10, bw, 3, 0, "tr", 57),
            ki(11, _w, 3, 1, "tr", 57),
            ki(12, kw, 3, 1, "tr", 57),
            ki(13, xw, 3, 0, "tr", 57),
            ki(14, Cw, 3, 0, "tr", 57),
            ki(15, Sw, 3, 0, "tr", 57),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = e.$implicit;
          Ni(3);
          const n = xi(103),
            r = xi(31),
            s = xi(37),
            i = xi(43),
            o = xi(49),
            a = xi(55),
            c = xi(25),
            l = xi(67),
            u = xi(73),
            h = xi(79),
            d = xi(85),
            f = xi(91),
            p = xi(97),
            g = xi(61);
          Hi("background-color", t.bgcolor),
            rs(2),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == g.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == n.checked);
        }
      }
      function Aw(t, e) {
        if (
          (1 & t &&
            (Ai(0, "ul"),
            Ai(1, "li", 60),
            Ai(2, "table"),
            ki(3, Ym, 3, 0, "tr", 57),
            ki(4, Xm, 3, 0, "tr", 61),
            ki(5, tw, 3, 0, "tr", 57),
            ki(6, ew, 3, 0, "tr", 57),
            ki(7, nw, 3, 0, "tr", 57),
            ki(8, rw, 3, 0, "tr", 57),
            ki(9, sw, 3, 0, "tr", 57),
            ki(10, iw, 3, 0, "tr", 57),
            ki(11, ow, 3, 0, "tr", 57),
            ki(12, aw, 3, 0, "tr", 57),
            ki(13, cw, 3, 0, "tr", 57),
            ki(14, lw, 3, 0, "tr", 57),
            ki(15, uw, 3, 0, "tr", 57),
            ki(16, hw, 3, 0, "tr", 57),
            Ti(),
            Ti(),
            ki(17, Iw, 16, 16, "li", 67),
            Ti()),
          2 & t)
        ) {
          const t = Ni(2),
            e = xi(103),
            n = xi(31),
            r = xi(37),
            s = xi(43),
            i = xi(49),
            o = xi(55),
            a = xi(25),
            c = xi(67),
            l = xi(73),
            u = xi(79),
            h = xi(85),
            d = xi(91),
            f = xi(97),
            p = xi(61);
          rs(3),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == n.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == e.checked),
            rs(1),
            Si("ngForOf", t.sentSixAna);
        }
      }
      function Tw(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "div", 64),
            Ai(1, "a", 65),
            Ri("click", function () {
              Ee(t);
              const e = Ni(2);
              return e.showGraf(e.sentSixGraf);
            }),
            Ei(2, "img", 68),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = Ni(2);
          rs(2), Di("src", t.sentSixGraf, dr);
        }
      }
      function Ew(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " Word No. "), Ti(), Ti());
      }
      function Ow(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "tr", 63),
            Ri("click", function () {
              return Ee(t), Ni(3).showGraf("7");
            }),
            Ai(1, "td", 47),
            qi(2, " 1.7.A. "),
            Ti(),
            Ti();
        }
      }
      function Pw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.7.B. "), Ti(), Ti());
      }
      function Rw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.7.C. "), Ti(), Ti());
      }
      function jw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.7.D. "), Ti(), Ti());
      }
      function Lw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.7.E. "), Ti(), Ti());
      }
      function Nw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.7.F. "), Ti(), Ti());
      }
      function Dw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.7.G. "), Ti(), Ti());
      }
      function Fw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.7.H."), Ti(), Ti());
      }
      function $w(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.7.I."), Ti(), Ti());
      }
      function Mw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.7.J."), Ti(), Ti());
      }
      function Hw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.7.K."), Ti(), Ti());
      }
      function Uw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.7.L."), Ti(), Ti());
      }
      function Bw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1.7.M."), Ti(), Ti());
      }
      function Vw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().index;
          rs(2), Gi(" ", t + 1, "");
        }
      }
      function zw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.word, " ");
        }
      }
      function qw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.sandhied_word, " ");
        }
      }
      function Gw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_analysis, " ");
        }
      }
      function Ww(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_in_context, " ");
        }
      }
      function Zw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, ". ");
        }
      }
      function Kw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, " ");
        }
      }
      function Qw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.kaaraka_sambandha, " ");
        }
      }
      function Jw(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Yw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.hindi_meaning, "");
        }
      }
      function Xw(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.english_meaning, "");
        }
      }
      function ty(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function ey(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function ny(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function ry(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "li", 63),
            Ri("click", function () {
              Ee(t);
              const n = e.$implicit;
              return Ni(3).showGraf(n.graph);
            }),
            Ai(1, "table"),
            ki(2, Vw, 3, 1, "tr", 57),
            ki(3, zw, 3, 1, "tr", 57),
            ki(4, qw, 3, 1, "tr", 57),
            ki(5, Gw, 3, 1, "tr", 57),
            ki(6, Ww, 3, 1, "tr", 57),
            ki(7, Zw, 3, 1, "tr", 57),
            ki(8, Kw, 3, 1, "tr", 57),
            ki(9, Qw, 3, 1, "tr", 57),
            ki(10, Jw, 3, 0, "tr", 57),
            ki(11, Yw, 3, 1, "tr", 57),
            ki(12, Xw, 3, 1, "tr", 57),
            ki(13, ty, 3, 0, "tr", 57),
            ki(14, ey, 3, 0, "tr", 57),
            ki(15, ny, 3, 0, "tr", 57),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = e.$implicit;
          Ni(3);
          const n = xi(103),
            r = xi(31),
            s = xi(37),
            i = xi(43),
            o = xi(49),
            a = xi(55),
            c = xi(25),
            l = xi(67),
            u = xi(73),
            h = xi(79),
            d = xi(85),
            f = xi(91),
            p = xi(97),
            g = xi(61);
          Hi("background-color", t.bgcolor),
            rs(2),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == g.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == n.checked);
        }
      }
      function sy(t, e) {
        if (
          (1 & t &&
            (Ai(0, "ul"),
            Ai(1, "li", 60),
            Ai(2, "table"),
            ki(3, Ew, 3, 0, "tr", 57),
            ki(4, Ow, 3, 0, "tr", 61),
            ki(5, Pw, 3, 0, "tr", 57),
            ki(6, Rw, 3, 0, "tr", 57),
            ki(7, jw, 3, 0, "tr", 57),
            ki(8, Lw, 3, 0, "tr", 57),
            ki(9, Nw, 3, 0, "tr", 57),
            ki(10, Dw, 3, 0, "tr", 57),
            ki(11, Fw, 3, 0, "tr", 57),
            ki(12, $w, 3, 0, "tr", 57),
            ki(13, Mw, 3, 0, "tr", 57),
            ki(14, Hw, 3, 0, "tr", 57),
            ki(15, Uw, 3, 0, "tr", 57),
            ki(16, Bw, 3, 0, "tr", 57),
            Ti(),
            Ti(),
            ki(17, ry, 16, 16, "li", 67),
            Ti()),
          2 & t)
        ) {
          const t = Ni(2),
            e = xi(103),
            n = xi(31),
            r = xi(37),
            s = xi(43),
            i = xi(49),
            o = xi(55),
            a = xi(25),
            c = xi(67),
            l = xi(73),
            u = xi(79),
            h = xi(85),
            d = xi(91),
            f = xi(97),
            p = xi(61);
          rs(3),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == n.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == e.checked),
            rs(1),
            Si("ngForOf", t.sentSevenAna);
        }
      }
      function iy(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "div", 64),
            Ai(1, "a", 65),
            Ri("click", function () {
              Ee(t);
              const e = Ni(2);
              return e.showGraf(e.sentSevenGraf);
            }),
            Ei(2, "img", 68),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = Ni(2);
          rs(2), Di("src", t.sentSevenGraf, dr);
        }
      }
      function oy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " Word No. "), Ti(), Ti());
      }
      function ay(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "tr", 63),
            Ri("click", function () {
              return Ee(t), Ni(3).showGraf("1a");
            }),
            Ai(1, "td", 47),
            qi(2, " 1a.1.A. "),
            Ti(),
            Ti();
        }
      }
      function cy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1a.1.B. "), Ti(), Ti());
      }
      function ly(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1a.1.C. "), Ti(), Ti());
      }
      function uy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1a.1.D. "), Ti(), Ti());
      }
      function hy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1a.1.E. "), Ti(), Ti());
      }
      function dy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1a.1.F. "), Ti(), Ti());
      }
      function fy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1a.1.G. "), Ti(), Ti());
      }
      function py(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1a.1.H."), Ti(), Ti());
      }
      function gy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1a.1.I."), Ti(), Ti());
      }
      function my(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1a.1.J."), Ti(), Ti());
      }
      function wy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1a.1.K."), Ti(), Ti());
      }
      function yy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1a.1.L."), Ti(), Ti());
      }
      function vy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1a.1.M."), Ti(), Ti());
      }
      function by(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().index;
          rs(2), Gi(" ", t + 1, "");
        }
      }
      function _y(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.word, " ");
        }
      }
      function ky(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.sandhied_word, " ");
        }
      }
      function xy(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_analysis, " ");
        }
      }
      function Cy(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_in_context, " ");
        }
      }
      function Sy(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, ". ");
        }
      }
      function Iy(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, " ");
        }
      }
      function Ay(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.kaaraka_sambandha, " ");
        }
      }
      function Ty(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Ey(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.hindi_meaning, "");
        }
      }
      function Oy(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.english_meaning, "");
        }
      }
      function Py(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Ry(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function jy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Ly(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "li", 63),
            Ri("click", function () {
              Ee(t);
              const n = e.$implicit;
              return Ni(3).showGraf(n.graph);
            }),
            Ai(1, "table"),
            ki(2, by, 3, 1, "tr", 57),
            ki(3, _y, 3, 1, "tr", 57),
            ki(4, ky, 3, 1, "tr", 57),
            ki(5, xy, 3, 1, "tr", 57),
            ki(6, Cy, 3, 1, "tr", 57),
            ki(7, Sy, 3, 1, "tr", 57),
            ki(8, Iy, 3, 1, "tr", 57),
            ki(9, Ay, 3, 1, "tr", 57),
            ki(10, Ty, 3, 0, "tr", 57),
            ki(11, Ey, 3, 1, "tr", 57),
            ki(12, Oy, 3, 1, "tr", 57),
            ki(13, Py, 3, 0, "tr", 57),
            ki(14, Ry, 3, 0, "tr", 57),
            ki(15, jy, 3, 0, "tr", 57),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = e.$implicit;
          Ni(3);
          const n = xi(103),
            r = xi(31),
            s = xi(37),
            i = xi(43),
            o = xi(49),
            a = xi(55),
            c = xi(25),
            l = xi(67),
            u = xi(73),
            h = xi(79),
            d = xi(85),
            f = xi(91),
            p = xi(97),
            g = xi(61);
          Hi("background-color", t.bgcolor),
            rs(2),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == g.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == n.checked);
        }
      }
      function Ny(t, e) {
        if (
          (1 & t &&
            (Ai(0, "ul"),
            Ai(1, "li", 60),
            Ai(2, "table"),
            ki(3, oy, 3, 0, "tr", 57),
            ki(4, ay, 3, 0, "tr", 61),
            ki(5, cy, 3, 0, "tr", 57),
            ki(6, ly, 3, 0, "tr", 57),
            ki(7, uy, 3, 0, "tr", 57),
            ki(8, hy, 3, 0, "tr", 57),
            ki(9, dy, 3, 0, "tr", 57),
            ki(10, fy, 3, 0, "tr", 57),
            ki(11, py, 3, 0, "tr", 57),
            ki(12, gy, 3, 0, "tr", 57),
            ki(13, my, 3, 0, "tr", 57),
            ki(14, wy, 3, 0, "tr", 57),
            ki(15, yy, 3, 0, "tr", 57),
            ki(16, vy, 3, 0, "tr", 57),
            Ti(),
            Ti(),
            ki(17, Ly, 16, 16, "li", 67),
            Ti()),
          2 & t)
        ) {
          const t = Ni(2),
            e = xi(103),
            n = xi(31),
            r = xi(37),
            s = xi(43),
            i = xi(49),
            o = xi(55),
            a = xi(25),
            c = xi(67),
            l = xi(73),
            u = xi(79),
            h = xi(85),
            d = xi(91),
            f = xi(97),
            p = xi(61);
          rs(3),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == n.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == e.checked),
            rs(1),
            Si("ngForOf", t.sentOneAAna);
        }
      }
      function Dy(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "div", 64),
            Ai(1, "a", 65),
            Ri("click", function () {
              Ee(t);
              const e = Ni(2);
              return e.showGraf(e.sentOneAGraf);
            }),
            Ei(2, "img", 68),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = Ni(2);
          rs(2), Di("src", t.sentOneAGraf, dr);
        }
      }
      function Fy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " Word No. "), Ti(), Ti());
      }
      function $y(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "tr", 63),
            Ri("click", function () {
              return Ee(t), Ni(3).showGraf("1b");
            }),
            Ai(1, "td", 47),
            qi(2, " 1b.1.A. "),
            Ti(),
            Ti();
        }
      }
      function My(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1b.1.B. "), Ti(), Ti());
      }
      function Hy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1b.1.C. "), Ti(), Ti());
      }
      function Uy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1b.1.D. "), Ti(), Ti());
      }
      function By(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1b.1.E. "), Ti(), Ti());
      }
      function Vy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1b.1.F. "), Ti(), Ti());
      }
      function zy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1b.1.G. "), Ti(), Ti());
      }
      function qy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1b.1.H."), Ti(), Ti());
      }
      function Gy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1b.1.I."), Ti(), Ti());
      }
      function Wy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1b.1.J."), Ti(), Ti());
      }
      function Zy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1b.1.K."), Ti(), Ti());
      }
      function Ky(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1b.1.L."), Ti(), Ti());
      }
      function Qy(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 1b.1.M."), Ti(), Ti());
      }
      function Jy(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().index;
          rs(2), Gi(" ", t + 1, "");
        }
      }
      function Yy(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.word, " ");
        }
      }
      function Xy(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.sandhied_word, " ");
        }
      }
      function tv(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_analysis, " ");
        }
      }
      function ev(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_in_context, " ");
        }
      }
      function nv(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, ". ");
        }
      }
      function rv(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, " ");
        }
      }
      function sv(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.kaaraka_sambandha, " ");
        }
      }
      function iv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function ov(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.hindi_meaning, "");
        }
      }
      function av(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.english_meaning, "");
        }
      }
      function cv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function lv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function uv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function hv(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "li", 63),
            Ri("click", function () {
              Ee(t);
              const n = e.$implicit;
              return Ni(3).showGraf(n.graph);
            }),
            Ai(1, "table"),
            ki(2, Jy, 3, 1, "tr", 57),
            ki(3, Yy, 3, 1, "tr", 57),
            ki(4, Xy, 3, 1, "tr", 57),
            ki(5, tv, 3, 1, "tr", 57),
            ki(6, ev, 3, 1, "tr", 57),
            ki(7, nv, 3, 1, "tr", 57),
            ki(8, rv, 3, 1, "tr", 57),
            ki(9, sv, 3, 1, "tr", 57),
            ki(10, iv, 3, 0, "tr", 57),
            ki(11, ov, 3, 1, "tr", 57),
            ki(12, av, 3, 1, "tr", 57),
            ki(13, cv, 3, 0, "tr", 57),
            ki(14, lv, 3, 0, "tr", 57),
            ki(15, uv, 3, 0, "tr", 57),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = e.$implicit;
          Ni(3);
          const n = xi(103),
            r = xi(31),
            s = xi(37),
            i = xi(43),
            o = xi(49),
            a = xi(55),
            c = xi(25),
            l = xi(67),
            u = xi(73),
            h = xi(79),
            d = xi(85),
            f = xi(91),
            p = xi(97),
            g = xi(61);
          Hi("background-color", t.bgcolor),
            rs(2),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == g.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == n.checked);
        }
      }
      function dv(t, e) {
        if (
          (1 & t &&
            (Ai(0, "ul"),
            Ai(1, "li", 60),
            Ai(2, "table"),
            ki(3, Fy, 3, 0, "tr", 57),
            ki(4, $y, 3, 0, "tr", 61),
            ki(5, My, 3, 0, "tr", 57),
            ki(6, Hy, 3, 0, "tr", 57),
            ki(7, Uy, 3, 0, "tr", 57),
            ki(8, By, 3, 0, "tr", 57),
            ki(9, Vy, 3, 0, "tr", 57),
            ki(10, zy, 3, 0, "tr", 57),
            ki(11, qy, 3, 0, "tr", 57),
            ki(12, Gy, 3, 0, "tr", 57),
            ki(13, Wy, 3, 0, "tr", 57),
            ki(14, Zy, 3, 0, "tr", 57),
            ki(15, Ky, 3, 0, "tr", 57),
            ki(16, Qy, 3, 0, "tr", 57),
            Ti(),
            Ti(),
            ki(17, hv, 16, 16, "li", 67),
            Ti()),
          2 & t)
        ) {
          const t = Ni(2),
            e = xi(103),
            n = xi(31),
            r = xi(37),
            s = xi(43),
            i = xi(49),
            o = xi(55),
            a = xi(25),
            c = xi(67),
            l = xi(73),
            u = xi(79),
            h = xi(85),
            d = xi(91),
            f = xi(97),
            p = xi(61);
          rs(3),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == n.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == e.checked),
            rs(1),
            Si("ngForOf", t.sentOneBAna);
        }
      }
      function fv(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "div", 64),
            Ai(1, "a", 65),
            Ri("click", function () {
              Ee(t);
              const e = Ni(2);
              return e.showGraf(e.sentOneBGraf);
            }),
            Ei(2, "img", 68),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = Ni(2);
          rs(2), Di("src", t.sentOneBGraf, dr);
        }
      }
      function pv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " Word No. "), Ti(), Ti());
      }
      function gv(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "tr", 63),
            Ri("click", function () {
              return Ee(t), Ni(3).showGraf("2a");
            }),
            Ai(1, "td", 47),
            qi(2, " 2a.1.A. "),
            Ti(),
            Ti();
        }
      }
      function mv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2a.1.B. "), Ti(), Ti());
      }
      function wv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2a.1.C. "), Ti(), Ti());
      }
      function yv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2a.1.D. "), Ti(), Ti());
      }
      function vv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2a.1.E. "), Ti(), Ti());
      }
      function bv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2a.1.F. "), Ti(), Ti());
      }
      function _v(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2a.1.G. "), Ti(), Ti());
      }
      function kv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2a.1.H."), Ti(), Ti());
      }
      function xv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2a.1.I."), Ti(), Ti());
      }
      function Cv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2a.1.J."), Ti(), Ti());
      }
      function Sv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2a.1.K."), Ti(), Ti());
      }
      function Iv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2a.1.L."), Ti(), Ti());
      }
      function Av(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2a.1.M."), Ti(), Ti());
      }
      function Tv(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().index;
          rs(2), Gi(" ", t + 1, "");
        }
      }
      function Ev(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.word, " ");
        }
      }
      function Ov(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.sandhied_word, " ");
        }
      }
      function Pv(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_analysis, " ");
        }
      }
      function Rv(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_in_context, " ");
        }
      }
      function jv(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, ". ");
        }
      }
      function Lv(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, " ");
        }
      }
      function Nv(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.kaaraka_sambandha, " ");
        }
      }
      function Dv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Fv(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.hindi_meaning, "");
        }
      }
      function $v(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.english_meaning, "");
        }
      }
      function Mv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Hv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Uv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function Bv(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "li", 63),
            Ri("click", function () {
              Ee(t);
              const n = e.$implicit;
              return Ni(3).showGraf(n.graph);
            }),
            Ai(1, "table"),
            ki(2, Tv, 3, 1, "tr", 57),
            ki(3, Ev, 3, 1, "tr", 57),
            ki(4, Ov, 3, 1, "tr", 57),
            ki(5, Pv, 3, 1, "tr", 57),
            ki(6, Rv, 3, 1, "tr", 57),
            ki(7, jv, 3, 1, "tr", 57),
            ki(8, Lv, 3, 1, "tr", 57),
            ki(9, Nv, 3, 1, "tr", 57),
            ki(10, Dv, 3, 0, "tr", 57),
            ki(11, Fv, 3, 1, "tr", 57),
            ki(12, $v, 3, 1, "tr", 57),
            ki(13, Mv, 3, 0, "tr", 57),
            ki(14, Hv, 3, 0, "tr", 57),
            ki(15, Uv, 3, 0, "tr", 57),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = e.$implicit;
          Ni(3);
          const n = xi(103),
            r = xi(31),
            s = xi(37),
            i = xi(43),
            o = xi(49),
            a = xi(55),
            c = xi(25),
            l = xi(67),
            u = xi(73),
            h = xi(79),
            d = xi(85),
            f = xi(91),
            p = xi(97),
            g = xi(61);
          Hi("background-color", t.bgcolor),
            rs(2),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == g.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == n.checked);
        }
      }
      function Vv(t, e) {
        if (
          (1 & t &&
            (Ai(0, "ul"),
            Ai(1, "li", 60),
            Ai(2, "table"),
            ki(3, pv, 3, 0, "tr", 57),
            ki(4, gv, 3, 0, "tr", 61),
            ki(5, mv, 3, 0, "tr", 57),
            ki(6, wv, 3, 0, "tr", 57),
            ki(7, yv, 3, 0, "tr", 57),
            ki(8, vv, 3, 0, "tr", 57),
            ki(9, bv, 3, 0, "tr", 57),
            ki(10, _v, 3, 0, "tr", 57),
            ki(11, kv, 3, 0, "tr", 57),
            ki(12, xv, 3, 0, "tr", 57),
            ki(13, Cv, 3, 0, "tr", 57),
            ki(14, Sv, 3, 0, "tr", 57),
            ki(15, Iv, 3, 0, "tr", 57),
            ki(16, Av, 3, 0, "tr", 57),
            Ti(),
            Ti(),
            ki(17, Bv, 16, 16, "li", 67),
            Ti()),
          2 & t)
        ) {
          const t = Ni(2),
            e = xi(103),
            n = xi(31),
            r = xi(37),
            s = xi(43),
            i = xi(49),
            o = xi(55),
            a = xi(25),
            c = xi(67),
            l = xi(73),
            u = xi(79),
            h = xi(85),
            d = xi(91),
            f = xi(97),
            p = xi(61);
          rs(3),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == n.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == e.checked),
            rs(1),
            Si("ngForOf", t.sentTwoAAna);
        }
      }
      function zv(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "div", 64),
            Ai(1, "a", 65),
            Ri("click", function () {
              Ee(t);
              const e = Ni(2);
              return e.showGraf(e.sentTwoAGraf);
            }),
            Ei(2, "img", 68),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = Ni(2);
          rs(2), Di("src", t.sentTwoAGraf, dr);
        }
      }
      function qv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " Word No. "), Ti(), Ti());
      }
      function Gv(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "tr", 63),
            Ri("click", function () {
              return Ee(t), Ni(3).showGraf("2b");
            }),
            Ai(1, "td", 47),
            qi(2, " 2b.1.A. "),
            Ti(),
            Ti();
        }
      }
      function Wv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2b.1.B. "), Ti(), Ti());
      }
      function Zv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2b.1.C. "), Ti(), Ti());
      }
      function Kv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2b.1.D. "), Ti(), Ti());
      }
      function Qv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2b.1.E. "), Ti(), Ti());
      }
      function Jv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2b.1.F. "), Ti(), Ti());
      }
      function Yv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2b.1.G. "), Ti(), Ti());
      }
      function Xv(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2b.1.H."), Ti(), Ti());
      }
      function tb(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2b.1.I."), Ti(), Ti());
      }
      function eb(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2b.1.J."), Ti(), Ti());
      }
      function nb(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2b.1.K."), Ti(), Ti());
      }
      function rb(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2b.1.L."), Ti(), Ti());
      }
      function sb(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " 2b.1.M."), Ti(), Ti());
      }
      function ib(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().index;
          rs(2), Gi(" ", t + 1, "");
        }
      }
      function ob(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.word, " ");
        }
      }
      function ab(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.sandhied_word, " ");
        }
      }
      function cb(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_analysis, " ");
        }
      }
      function lb(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.morph_in_context, " ");
        }
      }
      function ub(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, ". ");
        }
      }
      function hb(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.samAsa, " ");
        }
      }
      function db(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.kaaraka_sambandha, " ");
        }
      }
      function fb(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function pb(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.hindi_meaning, "");
        }
      }
      function gb(t, e) {
        if ((1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2), Ti(), Ti()), 2 & t)) {
          const t = Ni().$implicit;
          rs(2), Gi(" ", t.english_meaning, "");
        }
      }
      function mb(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function wb(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function yb(t, e) {
        1 & t && (Ai(0, "tr"), Ai(1, "td"), qi(2, " --- "), Ti(), Ti());
      }
      function vb(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "li", 63),
            Ri("click", function () {
              Ee(t);
              const n = e.$implicit;
              return Ni(3).showGraf(n.graph);
            }),
            Ai(1, "table"),
            ki(2, ib, 3, 1, "tr", 57),
            ki(3, ob, 3, 1, "tr", 57),
            ki(4, ab, 3, 1, "tr", 57),
            ki(5, cb, 3, 1, "tr", 57),
            ki(6, lb, 3, 1, "tr", 57),
            ki(7, ub, 3, 1, "tr", 57),
            ki(8, hb, 3, 1, "tr", 57),
            ki(9, db, 3, 1, "tr", 57),
            ki(10, fb, 3, 0, "tr", 57),
            ki(11, pb, 3, 1, "tr", 57),
            ki(12, gb, 3, 1, "tr", 57),
            ki(13, mb, 3, 0, "tr", 57),
            ki(14, wb, 3, 0, "tr", 57),
            ki(15, yb, 3, 0, "tr", 57),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = e.$implicit;
          Ni(3);
          const n = xi(103),
            r = xi(31),
            s = xi(37),
            i = xi(43),
            o = xi(49),
            a = xi(55),
            c = xi(25),
            l = xi(67),
            u = xi(73),
            h = xi(79),
            d = xi(85),
            f = xi(91),
            p = xi(97),
            g = xi(61);
          Hi("background-color", t.bgcolor),
            rs(2),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == g.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == n.checked);
        }
      }
      function bb(t, e) {
        if (
          (1 & t &&
            (Ai(0, "ul"),
            Ai(1, "li", 60),
            Ai(2, "table"),
            ki(3, qv, 3, 0, "tr", 57),
            ki(4, Gv, 3, 0, "tr", 61),
            ki(5, Wv, 3, 0, "tr", 57),
            ki(6, Zv, 3, 0, "tr", 57),
            ki(7, Kv, 3, 0, "tr", 57),
            ki(8, Qv, 3, 0, "tr", 57),
            ki(9, Jv, 3, 0, "tr", 57),
            ki(10, Yv, 3, 0, "tr", 57),
            ki(11, Xv, 3, 0, "tr", 57),
            ki(12, tb, 3, 0, "tr", 57),
            ki(13, eb, 3, 0, "tr", 57),
            ki(14, nb, 3, 0, "tr", 57),
            ki(15, rb, 3, 0, "tr", 57),
            ki(16, sb, 3, 0, "tr", 57),
            Ti(),
            Ti(),
            ki(17, vb, 16, 16, "li", 67),
            Ti()),
          2 & t)
        ) {
          const t = Ni(2),
            e = xi(103),
            n = xi(31),
            r = xi(37),
            s = xi(43),
            i = xi(49),
            o = xi(55),
            a = xi(25),
            c = xi(67),
            l = xi(73),
            u = xi(79),
            h = xi(85),
            d = xi(91),
            f = xi(97),
            p = xi(61);
          rs(3),
            Si("ngIf", 1 == a.checked),
            rs(1),
            Si("ngIf", 1 == n.checked),
            rs(1),
            Si("ngIf", 1 == r.checked),
            rs(1),
            Si("ngIf", 1 == s.checked),
            rs(1),
            Si("ngIf", 1 == i.checked),
            rs(1),
            Si("ngIf", 1 == o.checked),
            rs(1),
            Si("ngIf", 1 == p.checked),
            rs(1),
            Si("ngIf", 1 == c.checked),
            rs(1),
            Si("ngIf", 1 == l.checked),
            rs(1),
            Si("ngIf", 1 == u.checked),
            rs(1),
            Si("ngIf", 1 == h.checked),
            rs(1),
            Si("ngIf", 1 == d.checked),
            rs(1),
            Si("ngIf", 1 == f.checked),
            rs(1),
            Si("ngIf", 1 == e.checked),
            rs(1),
            Si("ngForOf", t.sentTwoBAna);
        }
      }
      function _b(t, e) {
        if (1 & t) {
          const t = Oi();
          Ai(0, "div", 64),
            Ai(1, "a", 65),
            Ri("click", function () {
              Ee(t);
              const e = Ni(2);
              return e.showGraf(e.sentTwoBGraf);
            }),
            Ei(2, "img", 68),
            Ti(),
            Ti();
        }
        if (2 & t) {
          const t = Ni(2);
          rs(2), Di("src", t.sentTwoBGraf, dr);
        }
      }
      function kb(t, e) {
        if (
          (1 & t &&
            (Ai(0, "div", 51),
            Ai(1, "h6", 52),
            Ai(2, "b"),
            qi(3),
            Ti(),
            qi(4, " \xa0\xa0\xa0\xa0 "),
            Ai(5, "span", 53),
            qi(6, "[Click on graph for zoom view]"),
            Ti(),
            Ti(),
            Ai(7, "ul"),
            Ai(8, "li", 54),
            Ai(9, "div", 55),
            Ai(10, "div", 56),
            ki(11, Lp, 18, 15, "ul", 57),
            Ti(),
            Ai(12, "div", 58),
            ki(13, Np, 3, 1, "div", 59),
            Ti(),
            Ti(),
            Ai(14, "div", 55),
            Ai(15, "div", 56),
            ki(16, hg, 18, 15, "ul", 57),
            Ti(),
            Ai(17, "div", 58),
            ki(18, dg, 3, 1, "div", 59),
            Ti(),
            Ti(),
            Ai(19, "div", 55),
            Ai(20, "div", 56),
            ki(21, Bg, 18, 15, "ul", 57),
            Ti(),
            Ai(22, "div", 58),
            ki(23, Vg, 3, 1, "div", 59),
            Ti(),
            Ti(),
            Ai(24, "div", 55),
            Ai(25, "div", 56),
            ki(26, vm, 18, 15, "ul", 57),
            Ti(),
            Ai(27, "div", 58),
            ki(28, bm, 3, 1, "div", 59),
            Ti(),
            Ti(),
            Ai(29, "div", 55),
            Ai(30, "div", 56),
            ki(31, Qm, 18, 15, "ul", 57),
            Ti(),
            Ai(32, "div", 58),
            ki(33, Jm, 3, 1, "div", 59),
            Ti(),
            Ti(),
            Ai(34, "div", 55),
            Ai(35, "div", 56),
            ki(36, Aw, 18, 15, "ul", 57),
            Ti(),
            Ai(37, "div", 58),
            ki(38, Tw, 3, 1, "div", 59),
            Ti(),
            Ti(),
            Ai(39, "div", 55),
            Ai(40, "div", 56),
            ki(41, sy, 18, 15, "ul", 57),
            Ti(),
            Ai(42, "div", 58),
            ki(43, iy, 3, 1, "div", 59),
            Ti(),
            Ti(),
            Ai(44, "div", 55),
            Ai(45, "div", 56),
            ki(46, Ny, 18, 15, "ul", 57),
            Ti(),
            Ai(47, "div", 58),
            ki(48, Dy, 3, 1, "div", 59),
            Ti(),
            Ti(),
            Ai(49, "div", 55),
            Ai(50, "div", 56),
            ki(51, dv, 18, 15, "ul", 57),
            Ti(),
            Ai(52, "div", 58),
            ki(53, fv, 3, 1, "div", 59),
            Ti(),
            Ti(),
            Ai(54, "div", 55),
            Ai(55, "div", 56),
            ki(56, Vv, 18, 15, "ul", 57),
            Ti(),
            Ai(57, "div", 58),
            ki(58, zv, 3, 1, "div", 59),
            Ti(),
            Ti(),
            Ai(59, "div", 55),
            Ai(60, "div", 56),
            ki(61, bb, 18, 15, "ul", 57),
            Ti(),
            Ai(62, "div", 58),
            ki(63, _b, 3, 1, "div", 59),
            Ti(),
            Ti(),
            Ti(),
            Ti(),
            Ei(64, "br"),
            Ei(65, "br"),
            Ti()),
          2 & t)
        ) {
          const t = Ni(),
            e = xi(175),
            n = xi(121),
            r = xi(127),
            s = xi(133),
            i = xi(139),
            o = xi(115),
            a = xi(151),
            c = xi(157),
            l = xi(163),
            u = xi(169),
            h = xi(145);
          rs(3),
            Wi(
              "You selected Chapter ",
              t.chapterNo,
              " and Sloka ",
              t.slokaNo,
              "",
            ),
            rs(8),
            Si("ngIf", 1 == o.checked),
            rs(2),
            Si("ngIf", "yes" == t.sentOneStat),
            rs(3),
            Si("ngIf", "yes" == t.sentTwoStat && 1 == n.checked),
            rs(2),
            Si("ngIf", "yes" == t.sentTwoStat && 1 == n.checked),
            rs(3),
            Si("ngIf", "yes" == t.sentThreeStat && 1 == r.checked),
            rs(2),
            Si("ngIf", "yes" == t.sentThreeStat && 1 == r.checked),
            rs(3),
            Si("ngIf", "yes" == t.sentFourStat && 1 == s.checked),
            rs(2),
            Si("ngIf", "yes" == t.sentFourStat && 1 == s.checked),
            rs(3),
            Si("ngIf", "yes" == t.sentFiveStat && 1 == i.checked),
            rs(2),
            Si("ngIf", "yes" == t.sentFiveStat && 1 == i.checked),
            rs(3),
            Si("ngIf", "yes" == t.sentSixStat && 1 == h.checked),
            rs(2),
            Si("ngIf", "yes" == t.sentSixStat && 1 == h.checked),
            rs(3),
            Si("ngIf", "yes" == t.sentSevenStat && 1 == a.checked),
            rs(2),
            Si("ngIf", "yes" == t.sentSevenStat && 1 == a.checked),
            rs(3),
            Si("ngIf", "yes" == t.sentOneAStat && 1 == c.checked),
            rs(2),
            Si("ngIf", "yes" == t.sentOneAStat && 1 == c.checked),
            rs(3),
            Si("ngIf", "yes" == t.sentOneBStat && 1 == l.checked),
            rs(2),
            Si("ngIf", "yes" == t.sentOneBStat && 1 == l.checked),
            rs(3),
            Si("ngIf", "yes" == t.sentTwoAStat && 1 == u.checked),
            rs(2),
            Si("ngIf", "yes" == t.sentTwoAStat && 1 == u.checked),
            rs(3),
            Si("ngIf", "yes" == t.sentTwoBStat && 1 == e.checked),
            rs(2),
            Si("ngIf", "yes" == t.sentTwoBStat && 1 == e.checked);
        }
      }
      let xb = (() => {
        class t {
          constructor(t, e, n) {
            (this.routes = t),
              (this.service = e),
              (this.http = n),
              (this.chapters = []),
              (this.SktData = []),
              (this.slokaAnalysis = []),
              (this.compAna = []),
              (this.texts = []),
              (this.shwAna = !1),
              (this.showAnalysis = []),
              (this.sentOneAna = []),
              (this.sentTwoAna = []),
              (this.sentThreeAna = []),
              (this.sentFourAna = []),
              (this.sentFiveAna = []),
              (this.sentSixAna = []),
              (this.sentSevenAna = []),
              (this.sentOneAAna = []),
              (this.sentOneBAna = []),
              (this.sentTwoAAna = []),
              (this.sentTwoBAna = []);
          }
          ngOnInit() {
            this.http.get("assets/data/chapters.json").subscribe((t) => {
              this.chapters = t;
            }),
              this.service.readRaghuApi().subscribe((t) => {
                this.SktData = t;
              }),
              this.service.readAnalysis().subscribe((t) => {
                this.compAna = t;
              }),
              $(document).ready(function () {
                $(".modal").modal(), $(".materialboxed").materialbox();
              });
          }
          getSlokas(t) {
            (this.texts = []), (this.shwAna = !1), (this.shwGraf = !1);
            for (let e of this.SktData) e.chaptno == t && this.texts.push(e);
          }
          getAnalysis(t, e) {
            (this.chapterNo = t),
              (this.slokaNo = e),
              (this.showAnalysis = []),
              (this.sentOneAna = []),
              (this.sentTwoAna = []),
              (this.sentThreeAna = []),
              (this.sentFourAna = []),
              (this.sentFiveAna = []),
              (this.sentSixAna = []),
              (this.sentSevenAna = []),
              (this.sentOneAAna = []),
              (this.sentOneBAna = []),
              (this.sentTwoAAna = []),
              (this.sentTwoBAna = []),
              (this.sentOneGraf = ""),
              (this.sentTwoGraf = ""),
              (this.sentThreeGraf = ""),
              (this.sentFourGraf = ""),
              (this.sentFiveGraf = ""),
              (this.sentSixGraf = ""),
              (this.sentSevenGraf = ""),
              (this.sentOneAGraf = ""),
              (this.sentOneBGraf = ""),
              (this.sentTwoAGraf = ""),
              (this.sentTwoBGraf = ""),
              (this.sentOneStat = ""),
              (this.sentTwoStat = ""),
              (this.sentThreeStat = ""),
              (this.sentFourStat = ""),
              (this.sentFiveStat = ""),
              (this.sentSixStat = ""),
              (this.sentSevenStat = ""),
              (this.sentOneAStat = ""),
              (this.sentOneBStat = ""),
              (this.sentTwoAStat = ""),
              (this.sentTwoBStat = "");
            for (let n of this.compAna)
              (this.showAnalysis = []),
                n.chpatno == t &&
                  n.slokano == e &&
                  ("1" == n.sentno
                    ? (this.sentOneAna.push(n),
                      (this.sentOneGraf = n.graph),
                      (this.sentOneStat = "yes"))
                    : "2" == n.sentno
                      ? (this.sentTwoAna.push(n),
                        (this.sentTwoGraf = n.graph),
                        (this.sentTwoStat = "yes"))
                      : "3" == n.sentno
                        ? (this.sentThreeAna.push(n),
                          (this.sentThreeGraf = n.graph),
                          (this.sentThreeStat = "yes"))
                        : "4" == n.sentno
                          ? (this.sentFourAna.push(n),
                            (this.sentFourGraf = n.graph),
                            (this.sentFourStat = "yes"))
                          : "5" == n.sentno
                            ? (this.sentFiveAna.push(n),
                              (this.sentFiveGraf = n.graph),
                              (this.sentFiveStat = "yes"))
                            : "6" == n.sentno
                              ? (this.sentSixAna.push(n),
                                (this.sentSixGraf = n.graph),
                                (this.sentSixStat = "yes"))
                              : "7" == n.sentno
                                ? (this.sentSevenAna.push(n),
                                  (this.sentSevenGraf = n.graph),
                                  (this.sentSevenStat = "yes"))
                                : "1a" == n.sentno
                                  ? (this.sentOneAAna.push(n),
                                    (this.sentOneAGraf = n.graph),
                                    (this.sentOneAStat = "yes"))
                                  : "1b" == n.sentno
                                    ? (this.sentOneBAna.push(n),
                                      (this.sentOneBGraf = n.graph),
                                      (this.sentOneBStat = "yes"))
                                    : "2a" == n.sentno
                                      ? (this.sentTwoAAna.push(n),
                                        (this.sentTwoAGraf = n.graph),
                                        (this.sentTwoAStat = "yes"))
                                      : "2b" == n.sentno &&
                                        (this.sentTwoBAna.push(n),
                                        (this.sentTwoBGraf = n.graph),
                                        (this.sentTwoBStat = "yes")));
            "" == this.sentOneStat
              ? (np.a.fire({
                  text: "The Analysis Not Found for this Sloka!",
                  icon: "info",
                }),
                (this.shwAna = !1))
              : ((this.shwAna = !0), (this.shwGraf = !1));
          }
          show() {
            console.log("hi");
          }
          showGraf(t) {
            (this.grafLink = ""), (this.grafLink = t), (this.shwGraf = !0);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Ci(Eh), Ci(Jf), Ci(Nf));
          }),
          (t.ɵcmp = Ut({
            type: t,
            selectors: [["app-ereader"]],
            decls: 182,
            vars: 4,
            consts: [
              [1, "chapt"],
              ["class", "z-depth-4 center", 3, "click", 4, "ngFor", "ngForOf"],
              [1, "sloka"],
              [1, "grey", "lighten-4"],
              ["class", " pink-text white", 3, "click", 4, "ngFor", "ngForOf"],
              ["class", "analysis2222", 4, "ngIf"],
              ["id", "modal2", 1, "modal", "bottom-sheet"],
              [1, "modal-content"],
              ["width", "100%", "height", "500px", 3, "src"],
              [1, "modal-footer", "grey", "lighten-1"],
              [
                "href",
                "#!",
                1,
                "modal-close",
                "waves-effect",
                "waves-green",
                "btn-flat",
              ],
              ["id", "show", 1, "section", "white", "z-depth-4"],
              [1, "container", "center"],
              [
                "href",
                "#modal1",
                1,
                "waves-effect",
                "waves-light",
                "btn-flat",
                "modal-trigger",
              ],
              ["id", "modal1", 1, "modal", "modal-fixed-footer"],
              ["type", "checkbox", 3, "click"],
              ["wordNo", ""],
              ["type", "checkbox", "checked", "", 3, "click"],
              ["sanskrit", ""],
              ["sktwithoutsandhi", ""],
              ["multimorf", ""],
              ["mrfInContext", ""],
              ["samaasa", ""],
              ["samaasavigraha", ""],
              ["kaarakarel", ""],
              ["cate", ""],
              ["hindimean", ""],
              ["engmean", ""],
              ["derimean", ""],
              ["sandhirule", ""],
              ["meter", ""],
              ["unde", ""],
              [
                "type",
                "checkbox",
                "checked",
                "",
                "disabled",
                "disabled",
                3,
                "click",
              ],
              ["sentOne", ""],
              ["sentTwo", ""],
              ["sentThree", ""],
              ["sentFour", ""],
              ["sentFive", ""],
              ["sentSix", ""],
              ["sentSeven", ""],
              ["sentOneA", ""],
              ["sentOneB", ""],
              ["sentTwoA", ""],
              ["sentTwoB", ""],
              [1, "modal-footer"],
              [1, "modal-close", "waves-effect", "waves-green", "btn-flat"],
              [1, "z-depth-4", "center", 3, "click"],
              [1, "pink-text"],
              [1, "pink-text", "white", 3, "click"],
              [1, "center", 2, "font-size", "xx-small"],
              [1, "collection-item", "black-text"],
              [1, "analysis2222"],
              [1, "purple-text", 2, "margin-left", "30px"],
              [1, "red-text"],
              [1, "analysis"],
              [1, "row"],
              [1, "col", "s12", "l8"],
              [4, "ngIf"],
              [1, "col", "s12", "l4"],
              ["class", "center sticky", 4, "ngIf"],
              [2, "float", "left", "position", "relative"],
              [3, "click", 4, "ngIf"],
              [3, "background-color", 4, "ngFor", "ngForOf"],
              [3, "click"],
              [1, "center", "sticky"],
              ["href", "#modal2", 1, "modal-trigger", 3, "click"],
              ["width", "100%", "height", "250", 3, "src"],
              [3, "background-color", "click", 4, "ngFor", "ngForOf"],
              ["width", "100%", "height", "200px", 3, "src"],
            ],
            template: function (t, e) {
              1 & t &&
                (Ai(0, "div", 0),
                Ai(1, "ul"),
                ki(2, rp, 3, 1, "li", 1),
                Ti(),
                Ti(),
                Ai(3, "div", 2),
                Ai(4, "ul", 3),
                ki(5, sp, 8, 3, "li", 4),
                Ti(),
                Ti(),
                ki(6, kb, 66, 24, "div", 5),
                Ai(7, "div", 6),
                Ai(8, "div", 7),
                Ei(9, "img", 8),
                Ti(),
                Ai(10, "div", 9),
                Ai(11, "a", 10),
                qi(12, "Close"),
                Ti(),
                Ti(),
                Ti(),
                Ai(13, "div", 11),
                Ai(14, "div", 12),
                Ai(15, "a", 13),
                qi(16, "Show/Hide"),
                Ti(),
                Ti(),
                Ai(17, "div", 14),
                Ai(18, "div", 7),
                Ai(19, "h5"),
                qi(20, " Show & Hide Features"),
                Ti(),
                Ei(21, "hr"),
                Ai(22, "p"),
                Ai(23, "label"),
                Ai(24, "input", 15, 16),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(26, "span"),
                qi(27, "Show Word No. (Index number)"),
                Ti(),
                Ti(),
                Ti(),
                Ai(28, "p"),
                Ai(29, "label"),
                Ai(30, "input", 17, 18),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(32, "span"),
                qi(33, " Sanskrit (A) "),
                Ti(),
                Ti(),
                Ti(),
                Ai(34, "p"),
                Ai(35, "label"),
                Ai(36, "input", 15, 19),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(38, "span"),
                qi(39, " Sanskrit without sandhi (B)"),
                Ti(),
                Ti(),
                Ti(),
                Ai(40, "p"),
                Ai(41, "label"),
                Ai(42, "input", 15, 20),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(44, "span"),
                qi(45, "Multiple Morphology (C)"),
                Ti(),
                Ti(),
                Ti(),
                Ai(46, "p"),
                Ai(47, "label"),
                Ai(48, "input", 17, 21),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(50, "span"),
                qi(51, "Morph in Context (D)"),
                Ti(),
                Ti(),
                Ti(),
                Ai(52, "p"),
                Ai(53, "label"),
                Ai(54, "input", 15, 22),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(56, "span"),
                qi(57, " samaasa structural analysis (E)"),
                Ti(),
                Ti(),
                Ti(),
                Ai(58, "p"),
                Ai(59, "label"),
                Ai(60, "input", 15, 23),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(62, "span"),
                qi(63, " samaasa vigraha (F)"),
                Ti(),
                Ti(),
                Ti(),
                Ai(64, "p"),
                Ai(65, "label"),
                Ai(66, "input", 15, 24),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(68, "span"),
                qi(69, "kaaraka relation (G)"),
                Ti(),
                Ti(),
                Ti(),
                Ai(70, "p"),
                Ai(71, "label"),
                Ai(72, "input", 15, 25),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(74, "span"),
                qi(75, " Category (H)"),
                Ti(),
                Ti(),
                Ti(),
                Ai(76, "p"),
                Ai(77, "label"),
                Ai(78, "input", 17, 26),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(80, "span"),
                qi(81, " Hindi Meaning (I)"),
                Ti(),
                Ti(),
                Ti(),
                Ai(82, "p"),
                Ai(83, "label"),
                Ai(84, "input", 15, 27),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(86, "span"),
                qi(87, " English Meaning (J)"),
                Ti(),
                Ti(),
                Ti(),
                Ai(88, "p"),
                Ai(89, "label"),
                Ai(90, "input", 15, 28),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(92, "span"),
                qi(93, " Derivational Meaning (K)"),
                Ti(),
                Ti(),
                Ti(),
                Ai(94, "p"),
                Ai(95, "label"),
                Ai(96, "input", 15, 29),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(98, "span"),
                qi(99, " Sandhi rules(L)"),
                Ti(),
                Ti(),
                Ti(),
                Ai(100, "p"),
                Ai(101, "label"),
                Ai(102, "input", 15, 30),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(104, "span"),
                qi(105, " Meter: Guru-Laghu(M)"),
                Ti(),
                Ti(),
                Ti(),
                Ai(106, "p"),
                Ai(107, "label"),
                Ai(108, "input", 15, 31),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(110, "span"),
                qi(111, " undefined"),
                Ti(),
                Ti(),
                Ti(),
                Ai(112, "p"),
                Ai(113, "label"),
                Ai(114, "input", 32, 33),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(116, "span"),
                qi(117, "Sent 1 "),
                Ti(),
                Ti(),
                qi(118, " \xa0\xa0 "),
                Ai(119, "label"),
                Ai(120, "input", 17, 34),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(122, "span"),
                qi(123, "Sent 2 "),
                Ti(),
                Ti(),
                qi(124, " \xa0\xa0 "),
                Ai(125, "label"),
                Ai(126, "input", 17, 35),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(128, "span"),
                qi(129, "Sent 3 "),
                Ti(),
                Ti(),
                qi(130, "\xa0\xa0 "),
                Ai(131, "label"),
                Ai(132, "input", 17, 36),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(134, "span"),
                qi(135, "Sent 4 "),
                Ti(),
                Ti(),
                qi(136, "\xa0\xa0 "),
                Ai(137, "label"),
                Ai(138, "input", 17, 37),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(140, "span"),
                qi(141, "Sent 5 "),
                Ti(),
                Ti(),
                qi(142, "\xa0\xa0 "),
                Ai(143, "label"),
                Ai(144, "input", 17, 38),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(146, "span"),
                qi(147, "Sent 6 "),
                Ti(),
                Ti(),
                qi(148, "\xa0\xa0 "),
                Ai(149, "label"),
                Ai(150, "input", 17, 39),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(152, "span"),
                qi(153, "Sent 7 "),
                Ti(),
                Ti(),
                Ti(),
                Ai(154, "p"),
                Ai(155, "label"),
                Ai(156, "input", 17, 40),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(158, "span"),
                qi(159, "Sent 1a "),
                Ti(),
                Ti(),
                qi(160, " \xa0\xa0 "),
                Ai(161, "label"),
                Ai(162, "input", 17, 41),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(164, "span"),
                qi(165, "Sent 1b "),
                Ti(),
                Ti(),
                qi(166, " \xa0\xa0 "),
                Ai(167, "label"),
                Ai(168, "input", 17, 42),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(170, "span"),
                qi(171, "Sent 2a "),
                Ti(),
                Ti(),
                qi(172, "\xa0\xa0 "),
                Ai(173, "label"),
                Ai(174, "input", 17, 43),
                Ri("click", function () {
                  return e.show();
                }),
                Ti(),
                Ai(176, "span"),
                qi(177, "Sent 2b "),
                Ti(),
                Ti(),
                qi(178, "\xa0\xa0 "),
                Ti(),
                Ti(),
                Ai(179, "div", 44),
                Ai(180, "a", 45),
                qi(181, "Close"),
                Ti(),
                Ti(),
                Ti(),
                Ti()),
                2 & t &&
                  (rs(2),
                  Si("ngForOf", e.chapters),
                  rs(3),
                  Si("ngForOf", e.texts),
                  rs(1),
                  Si("ngIf", e.shwAna),
                  rs(3),
                  Di("src", e.grafLink, dr));
            },
            directives: [Zc, Qc],
            styles: [
              ".border[_ngcontent-%COMP%]{border-style:solid;border-width:1px}.chapters[_ngcontent-%COMP%]{display:inline}.chapt[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{overflow-x:scroll;white-space:nowrap}.chapt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;width:90px;padding:15px;*display:inline;zoom:1;margin:5px;cursor:pointer;border-radius:10px}.chapt[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover, .sloka[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{overflow-x:scroll}.sloka[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{white-space:nowrap}.sloka[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;padding:15px;*display:inline;zoom:1.2;margin:5px;cursor:pointer;border-radius:5px;border:1px solid #d3d3d3}.analysis[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .sloka[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover{overflow-x:scroll}.analysis[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{white-space:nowrap}.analysis[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;padding:15px;*display:inline;zoom:1;margin:2px;cursor:pointer;border:1px solid #d3d3d3}.analysis[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover{overflow-x:scroll}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, [_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:2px}#show[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%;padding:10px}.bottom-sheet[_ngcontent-%COMP%]{max-height:100%!important}.sticky[_ngcontent-%COMP%]{position:sticky!important;top:0}",
            ],
          })),
          t
        );
      })();
      function Cb(t, e) {
        if ((1 & t && (Ai(0, "h5", 4), qi(1), Ei(2, "hr"), Ti()), 2 & t)) {
          const t = e.$implicit;
          rs(1), Gi(" ", t.title, "");
        }
      }
      function Sb(t, e) {
        if ((1 & t && (Ai(0, "p"), qi(1), Ti()), 2 & t)) {
          const t = e.$implicit;
          rs(1), Gi(" ", t.para, " ");
        }
      }
      function Ib(t, e) {
        if ((1 & t && (Ai(0, "div"), ki(1, Sb, 2, 1, "p", 3), Ti()), 2 & t)) {
          const t = e.$implicit;
          rs(1), Si("ngForOf", t.intro);
        }
      }
      let Ab = (() => {
        class t {
          constructor(t) {
            (this.http = t), (this.intro = []);
          }
          ngOnInit() {
            this.http.get("assets/data/intro.json").subscribe((t) => {
              this.intro = t;
            });
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Ci(Nf));
          }),
          (t.ɵcmp = Ut({
            type: t,
            selectors: [["app-intro"]],
            decls: 4,
            vars: 2,
            consts: [
              [1, "section"],
              [1, "container"],
              ["class", "center pink-text", 4, "ngFor", "ngForOf"],
              [4, "ngFor", "ngForOf"],
              [1, "center", "pink-text"],
            ],
            template: function (t, e) {
              1 & t &&
                (Ai(0, "div", 0),
                Ai(1, "div", 1),
                ki(2, Cb, 3, 1, "h5", 2),
                ki(3, Ib, 2, 1, "div", 3),
                Ti(),
                Ti()),
                2 & t &&
                  (rs(2),
                  Si("ngForOf", e.intro),
                  rs(1),
                  Si("ngForOf", e.intro));
            },
            directives: [Zc],
            styles: [
              "p[_ngcontent-%COMP%]{font-size:larger;text-align:center}",
            ],
          })),
          t
        );
      })();
      const Tb = [
        {
          path: "",
          component: (() => {
            class t {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (t.ɵfac = function (e) {
                return new (e || t)();
              }),
              (t.ɵcmp = Ut({
                type: t,
                selectors: [["app-home"]],
                decls: 2,
                vars: 0,
                template: function (t, e) {
                  1 & t && (Ei(0, "app-slider"), Ei(1, "app-intro"));
                },
                directives: [Yf, Ab],
                styles: [""],
              })),
              t
            );
          })(),
        },
        { path: "ereader", component: xb },
        { path: "about", component: tp },
      ];
      let Eb = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵmod = qt({ type: t })),
          (t.ɵinj = ut({ imports: [[uf.forRoot(Tb, { useHash: !0 })], uf] })),
          t
        );
      })();
      const Ob = function () {
          return ["/about"];
        },
        Pb = function () {
          return ["/ereader"];
        };
      let Rb = (() => {
          class t {
            constructor() {}
            ngOnInit() {
              $(document).ready(function () {
                $(".sidenav").sidenav();
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = Ut({
              type: t,
              selectors: [["app-header"]],
              decls: 65,
              vars: 8,
              consts: [
                [1, "navbar-fixed"],
                [1, "indigo"],
                [1, "nav-wrapper"],
                ["href", "#!", 1, "mylogo", 2, "margin-left", "10px"],
                ["href", "#", "data-target", "slide-out", 1, "sidenav-trigger"],
                [1, "material-icons"],
                ["id", "nav-mobile", 1, "right", "hide-on-med-and-down"],
                ["routerLink", ""],
                [1, "material-icons", "left"],
                [
                  "href",
                  "https://scl.samsaadhanii.in/scl/",
                  "target",
                  "_blank",
                ],
                ["routerLinkActive", "router-link-active", 3, "routerLink"],
                ["id", "slide-out", 1, "sidenav"],
                [1, "user-view"],
                ["href", "#!", 1, "center", "white-text"],
                ["src", "assets/images/sr.jpg", 1, "responsive-img"],
                [1, "sidenav-close"],
              ],
              template: function (t, e) {
                1 & t &&
                  (Ai(0, "div", 0),
                  Ai(1, "nav", 1),
                  Ai(2, "div", 2),
                  Ai(3, "a", 3),
                  qi(4, "Mahabharata"),
                  Ti(),
                  Ai(5, "a", 4),
                  Ai(6, "i", 5),
                  qi(7, "menu"),
                  Ti(),
                  Ti(),
                  Ai(8, "ul", 6),
                  Ai(9, "li"),
                  Ai(10, "a", 7),
                  Ai(11, "i", 8),
                  qi(12, "home"),
                  Ti(),
                  qi(13, "Home"),
                  Ti(),
                  Ti(),
                  Ai(14, "li"),
                  Ai(15, "a", 9),
                  Ai(16, "i", 8),
                  qi(17, "settings_applications "),
                  Ti(),
                  qi(18, "संसाधनी"),
                  Ti(),
                  Ti(),
                  Ai(19, "li"),
                  Ai(20, "a", 10),
                  Ai(21, "i", 8),
                  qi(22, "people"),
                  Ti(),
                  qi(23, "About"),
                  Ti(),
                  Ti(),
                  Ai(24, "li"),
                  Ai(25, "a", 10),
                  Ai(26, "i", 8),
                  qi(27, "speaker_notes"),
                  Ti(),
                  qi(28, "e-Reader"),
                  Ti(),
                  Ti(),
                  Ai(29, "li"),
                  Ai(30, "a", 9),
                  Ai(31, "i", 8),
                  qi(32, "email"),
                  Ti(),
                  qi(33, "Contact Us"),
                  Ti(),
                  Ti(),
                  Ti(),
                  Ti(),
                  Ti(),
                  Ti(),
                  Ai(34, "ul", 11),
                  Ai(35, "li", 1),
                  Ai(36, "div", 12),
                  Ai(37, "h4", 13),
                  qi( 38, "1000-Sentences",
                  ),
                  Ti(),
                  Ei(39, "img", 14),
                  Ti(),
                  Ti(),
                  Ai(40, "li", 15),
                  Ai(41, "a", 7),
                  Ai(42, "i", 8),
                  qi(43, "home"),
                  Ti(),
                  qi(44, "Home"),
                  Ti(),
                  Ti(),
                  Ai(45, "li", 15),
                  Ai(46, "a", 9),
                  Ai(47, "i", 8),
                  qi(48, "settings_applications "),
                  Ti(),
                  qi(49, "संसाधनी"),
                  Ti(),
                  Ti(),
                  Ai(50, "li", 15),
                  Ai(51, "a", 10),
                  Ai(52, "i", 8),
                  qi(53, "people"),
                  Ti(),
                  qi(54, "About"),
                  Ti(),
                  Ti(),
                  Ai(55, "li", 15),
                  Ai(56, "a", 10),
                  Ai(57, "i", 8),
                  qi(58, "speaker_notes"),
                  Ti(),
                  qi(59, "e-Reader"),
                  Ti(),
                  Ti(),
                  Ai(60, "li", 15),
                  Ai(61, "a", 9),
                  Ai(62, "i", 8),
                  qi(63, "email"),
                  Ti(),
                  qi(64, "Contact Us"),
                  Ti(),
                  Ti(),
                  Ti()),
                  2 & t &&
                    (rs(20),
                    Si("routerLink", la(4, Ob)),
                    rs(5),
                    Si("routerLink", la(5, Pb)),
                    rs(26),
                    Si("routerLink", la(6, Ob)),
                    rs(5),
                    Si("routerLink", la(7, Pb)));
              },
              directives: [Qd, Yd],
              styles: [".mylogo[_ngcontent-%COMP%]{font-size:larger}"],
            })),
            t
          );
        })(),
        jb = (() => {
          class t {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = Ut({
              type: t,
              selectors: [["app-footer"]],
              decls: 8,
              vars: 0,
              consts: [
                [1, "page-footer", "white", "darken-3"],
                [1, "footer-copyright", "black"],
                [1, "container"],
                [
                  "href",
                  "https://ska-mahe-blr.github.io/",
                  "target",
                  "_blank",
                  1,
                  "white-text",
                ],
                [
                  "href",
                  "https://scl.samsaadhanii.in/scl/contributors.html",
                  "target",
                  "_blank",
                  1,
                  "grey-text",
                  "text-lighten-4",
                  "right",
                ],
              ],
              template: function (t, e) {
                1 & t &&
                  (Ai(0, "footer", 0),
                  Ai(1, "div", 1),
                  Ai(2, "div", 2),
                  qi(3, " \xa9 2024| "),
                  Ai(4, "a", 3),
                  qi(5, "MAHE B'LRU"),
                  Ti(),
                  Ai(6, "a", 4),
                  qi(7, "Contributors"),
                  Ti(),
                  Ti(),
                  Ti(),
                  Ti());
              },
              styles: [""],
            })),
            t
          );
        })(),
        Lb = (() => {
          class t {
            constructor() {
              this.title = "rAmAyaNa";
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = Ut({
              type: t,
              selectors: [["app-root"]],
              decls: 6,
              vars: 0,
              template: function (t, e) {
                1 & t &&
                  (Ai(0, "header"),
                  Ei(1, "app-header"),
                  Ti(),
                  Ai(2, "main"),
                  Ei(3, "router-outlet"),
                  Ti(),
                  Ai(4, "footer"),
                  Ei(5, "app-footer"),
                  Ti());
              },
              directives: [Rb, Xd, jb],
              styles: [""],
            })),
            t
          );
        })(),
        Nb = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t, bootstrap: [Lb] })),
            (t.ɵinj = ut({ providers: [], imports: [[Ol, Eb, Qf, uf]] })),
            t
          );
        })();
      (function () {
        if (oc)
          throw new Error("Cannot enable prod mode after platform setup.");
        ic = !1;
      })(),
        Tl()
          .bootstrapModule(Nb)
          .catch((t) => console.error(t));
    },
    zn8P: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = "zn8P");
    },
  },
  [[0, 0]],
]);

