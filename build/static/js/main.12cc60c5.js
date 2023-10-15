/*! For license information please see main.12cc60c5.js.LICENSE.txt */
!(function () {
  var e = {
      725: function (e) {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (a) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, a) {
              for (
                var i,
                  o,
                  l = (function (e) {
                    if (null === e || void 0 === e)
                      throw new TypeError(
                        "Object.assign cannot be called with null or undefined"
                      );
                    return Object(e);
                  })(e),
                  s = 1;
                s < arguments.length;
                s++
              ) {
                for (var c in (i = Object(arguments[s])))
                  n.call(i, c) && (l[c] = i[c]);
                if (t) {
                  o = t(i);
                  for (var u = 0; u < o.length; u++)
                    r.call(i, o[u]) && (l[o[u]] = i[o[u]]);
                }
              }
              return l;
            };
      },
      888: function (e, t, n) {
        "use strict";
        var r = n(47);
        function a() {}
        function i() {}
        (i.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, i, o) {
              if (o !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      7: function (e, t, n) {
        e.exports = n(888)();
      },
      47: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          l = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          h = {},
          p = {};
        function m(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(p, e) ||
                    (!d.call(h, e) &&
                      (f.test(e) ? (p[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          j = Symbol.for("react.portal"),
          N = Symbol.for("react.fragment"),
          k = Symbol.for("react.strict_mode"),
          S = Symbol.for("react.profiler"),
          E = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          O = Symbol.for("react.forward_ref"),
          A = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          P = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var I = Symbol.iterator;
        function _(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (I && e[I]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          z = Object.assign;
        function D(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var F = !1;
        function U(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  l = i.length - 1;
                1 <= o && 0 <= l && a[o] !== i[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (a[o] !== i[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || a[o] !== i[l])) {
                        var s = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case N:
              return "Fragment";
            case j:
              return "Portal";
            case S:
              return "Profiler";
            case k:
              return "StrictMode";
            case A:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case E:
                return (e._context.displayName || "Context") + ".Provider";
              case O:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case P:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === k ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function G(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function Q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function V(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = Q(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = Q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var n = t.checked;
          return z({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function J(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = G(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          X(e, t);
          var n = G(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, G(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + G(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return z({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: G(n) };
        }
        function ie(e, t) {
          var n = G(t.value),
            r = G(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var he = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          pe = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (he.hasOwnProperty(e) && he[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(he).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (he[t] = he[e]);
          });
        });
        var ve = z(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var je = null,
          Ne = null,
          ke = null;
        function Se(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof je) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = wa(t)), je(e.stateNode, e.type, t));
          }
        }
        function Ee(e) {
          Ne ? (ke ? ke.push(e) : (ke = [e])) : (Ne = e);
        }
        function Ce() {
          if (Ne) {
            var e = Ne,
              t = ke;
            if (((ke = Ne = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function Oe(e, t) {
          return e(t);
        }
        function Ae() {}
        var Te = !1;
        function Pe(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return Oe(e, t, n);
          } finally {
            (Te = !1), (null !== Ne || null !== ke) && (Ae(), Ce());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (u)
          try {
            var Ie = {};
            Object.defineProperty(Ie, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Ie, Ie),
              window.removeEventListener("test", Ie, Ie);
          } catch (ue) {
            Le = !1;
          }
        function _e(e, t, n, r, a, i, o, l, s) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Me = !1,
          ze = null,
          De = !1,
          Fe = null,
          Ue = {
            onError: function (e) {
              (Me = !0), (ze = e);
            },
          };
        function He(e, t, n, r, a, i, o, l, s) {
          (Me = !1), (ze = null), _e.apply(Ue, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ge(e) {
          if (Be(e) !== e) throw Error(i(188));
        }
        function Qe(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return Ge(a), e;
                    if (o === r) return Ge(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = o);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = o), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = o), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ve(e)
            : null;
        }
        function Ve(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ve(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ye = a.unstable_cancelCallback,
          Ke = a.unstable_shouldYield,
          Je = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          $e = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var l = o & ~a;
            0 !== l ? (r = dt(l)) : 0 !== (i &= o) && (r = dt(i));
          } else 0 !== (o = n & ~a) ? (r = dt(o)) : 0 !== i && (r = dt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function ht(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          jt,
          Nt,
          kt,
          St,
          Et = !1,
          Ct = [],
          Ot = null,
          At = null,
          Tt = null,
          Pt = new Map(),
          Rt = new Map(),
          Lt = [],
          It =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function _t(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ot = null;
              break;
            case "dragenter":
            case "dragleave":
              At = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              Pt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && jt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function zt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void St(e.priority, function () {
                      Nt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Dt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && jt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          Dt(e) && n.delete(t);
        }
        function Ut() {
          (Et = !1),
            null !== Ot && Dt(Ot) && (Ot = null),
            null !== At && Dt(At) && (At = null),
            null !== Tt && Dt(Tt) && (Tt = null),
            Pt.forEach(Ft),
            Rt.forEach(Ft);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Et ||
              ((Et = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function Bt(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < Ct.length) {
            Ht(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ot && Ht(Ot, e),
              null !== At && Ht(At, e),
              null !== Tt && Ht(Tt, e),
              Pt.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            zt(n), null === n.blockedOn && Lt.shift();
        }
        var Wt = x.ReactCurrentBatchConfig,
          Gt = !0;
        function Qt(e, t, n, r) {
          var a = bt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = i);
          }
        }
        function Vt(e, t, n, r) {
          var a = bt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = i);
          }
        }
        function qt(e, t, n, r) {
          if (Gt) {
            var a = Kt(e, t, n, r);
            if (null === a) Gr(e, t, r, Yt, n), _t(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Ot = Mt(Ot, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (At = Mt(At, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Tt = Mt(Tt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Pt.set(i, Mt(Pt.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Rt.set(i, Mt(Rt.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((_t(e, r), 4 & t && -1 < It.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && wt(i),
                  null === (i = Kt(e, t, n, r)) && Gr(e, t, r, Yt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Gr(e, t, r, null, n);
          }
        }
        var Yt = null;
        function Kt(e, t, n, r) {
          if (((Yt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Yt = e), null;
        }
        function Jt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Zt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return ($t = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            z(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = an(cn),
          dn = z({}, cn, { view: 0, detail: 0 }),
          fn = an(dn),
          hn = z({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Sn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          pn = an(hn),
          mn = an(z({}, hn, { dataTransfer: 0 })),
          gn = an(z({}, dn, { relatedTarget: 0 })),
          vn = an(
            z({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = z({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          xn = an(z({}, cn, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          jn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Nn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function kn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Nn[e]) && !!t[e];
        }
        function Sn() {
          return kn;
        }
        var En = z({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? jn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Sn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = an(En),
          On = an(
            z({}, hn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          An = an(
            z({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sn,
            })
          ),
          Tn = an(
            z({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Pn = z({}, hn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = an(Pn),
          Ln = [9, 13, 27, 32],
          In = u && "CompositionEvent" in window,
          _n = null;
        u && "documentMode" in document && (_n = document.documentMode);
        var Mn = u && "TextEvent" in window && !_n,
          zn = u && (!In || (_n && 8 < _n && 11 >= _n)),
          Dn = String.fromCharCode(32),
          Fn = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Gn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Qn(e, t, n, r) {
          Ee(r),
            0 < (t = Vr(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Vn = null,
          qn = null;
        function Yn(e) {
          Dr(e, 0);
        }
        function Kn(e) {
          if (q(xa(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (u) {
          var Zn;
          if (u) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            Zn = $n;
          } else Zn = !1;
          Xn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Vn && (Vn.detachEvent("onpropertychange", nr), (qn = Vn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Kn(qn)) {
            var t = [];
            Qn(t, qn, e, we(e)), Pe(Yn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Vn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(qn);
        }
        function ir(e, t) {
          if ("click" === e) return Kn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Kn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function hr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && hr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = ur(n, i));
                var o = ur(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = u && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== Y(r) ||
            ("selectionStart" in (r = gr) && hr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Vr(vr, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var jr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Nr = {},
          kr = {};
        function Sr(e) {
          if (Nr[e]) return Nr[e];
          if (!jr[e]) return e;
          var t,
            n = jr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in kr) return (Nr[e] = n[t]);
          return e;
        }
        u &&
          ((kr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete jr.animationend.animation,
            delete jr.animationiteration.animation,
            delete jr.animationstart.animation),
          "TransitionEvent" in window || delete jr.transitionend.transition);
        var Er = Sr("animationend"),
          Cr = Sr("animationiteration"),
          Or = Sr("animationstart"),
          Ar = Sr("transitionend"),
          Tr = new Map(),
          Pr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Rr(e, t) {
          Tr.set(e, t), s(t, [e]);
        }
        for (var Lr = 0; Lr < Pr.length; Lr++) {
          var Ir = Pr[Lr];
          Rr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)));
        }
        Rr(Er, "onAnimationEnd"),
          Rr(Cr, "onAnimationIteration"),
          Rr(Or, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(Ar, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var _r =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(_r)
          );
        function zr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, l, s, c) {
              if ((He.apply(this, arguments), Me)) {
                if (!Me) throw Error(i(198));
                var u = ze;
                (Me = !1), (ze = null), De || ((De = !0), (Fe = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    s = l.instance,
                    c = l.currentTarget;
                  if (((l = l.listener), s !== i && a.isPropagationStopped()))
                    break e;
                  zr(a, l, c), (i = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (l = r[o]).instance),
                    (c = l.currentTarget),
                    (l = l.listener),
                    s !== i && a.isPropagationStopped())
                  )
                    break e;
                  zr(a, l, c), (i = s);
                }
            }
          }
          if (De) throw ((e = Fe), (De = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Hr = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Hr]) {
            (e[Hr] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), Ur("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Jt(t)) {
            case 1:
              var a = Qt;
              break;
            case 4:
              a = Vt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Gr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = ya(l))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = i = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Pe(function () {
            var r = i,
              a = we(n),
              o = [];
            e: {
              var l = Tr.get(e);
              if (void 0 !== l) {
                var s = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Cn;
                    break;
                  case "focusin":
                    (c = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (c = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = An;
                    break;
                  case Er:
                  case Cr:
                  case Or:
                    s = vn;
                    break;
                  case Ar:
                    s = Tn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = On;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== l ? l + "Capture" : null) : l;
                u = [];
                for (var h, p = r; null !== p; ) {
                  var m = (h = p).stateNode;
                  if (
                    (5 === h.tag &&
                      null !== m &&
                      ((h = m),
                      null !== f &&
                        null != (m = Re(p, f)) &&
                        u.push(Qr(p, m, h))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < u.length &&
                  ((l = new s(l, c, null, n, a)),
                  o.push({ event: l, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!ya(c) && !c[pa])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? ya(c)
                          : null) &&
                        (c !== (d = Be(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((s = null), (c = r)),
                  s !== c))
              ) {
                if (
                  ((u = pn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = On),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == s ? l : xa(s)),
                  (h = null == c ? l : xa(c)),
                  ((l = new u(m, p + "leave", s, n, a)).target = d),
                  (l.relatedTarget = h),
                  (m = null),
                  ya(a) === r &&
                    (((u = new u(f, p + "enter", c, n, a)).target = h),
                    (u.relatedTarget = d),
                    (m = u)),
                  (d = m),
                  s && c)
                )
                  e: {
                    for (f = c, p = 0, h = u = s; h; h = qr(h)) p++;
                    for (h = 0, m = f; m; m = qr(m)) h++;
                    for (; 0 < p - h; ) (u = qr(u)), p--;
                    for (; 0 < h - p; ) (f = qr(f)), h--;
                    for (; p--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = qr(u)), (f = qr(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== s && Yr(o, l, s, u, !1),
                  null !== c && null !== d && Yr(o, d, c, u, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? xa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var g = Jn;
              else if (Gn(l))
                if (Xn) g = or;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = ir);
              switch (
                (g && (g = g(e, r))
                  ? Qn(o, g, n, a)
                  : (v && v(e, l, r),
                    "focusout" === e &&
                      (v = l._wrapperState) &&
                      v.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (v = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  (Gn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(o, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  xr(o, n, a);
              }
              var y;
              if (In)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (zn &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (y = en())
                    : ((Zt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Bn = !0))),
                0 < (v = Vr(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  o.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!In && Un(e, t))
                          ? ((e = en()), ($t = Zt = Xt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return zn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Vr(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Dr(o, t);
          });
        }
        function Qr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Vr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Re(e, n)) && r.unshift(Qr(e, i, a)),
              null != (i = Re(e, t)) && r.push(Qr(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Yr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              c = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== c &&
              ((l = c),
              a
                ? null != (s = Re(n, i)) && o.unshift(Qr(n, s, l))
                : a || (null != (s = Re(n, i)) && o.push(Qr(n, s, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Kr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Kr, "\n")
            .replace(Jr, "");
        }
        function Zr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(i(425));
        }
        function $r() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Bt(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ua(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          ha = "__reactProps$" + da,
          pa = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          va = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pa] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ua(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ua(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[pa]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function wa(e) {
          return e[ha] || null;
        }
        var ja = [],
          Na = -1;
        function ka(e) {
          return { current: e };
        }
        function Sa(e) {
          0 > Na || ((e.current = ja[Na]), (ja[Na] = null), Na--);
        }
        function Ea(e, t) {
          Na++, (ja[Na] = e.current), (e.current = t);
        }
        var Ca = {},
          Oa = ka(Ca),
          Aa = ka(!1),
          Ta = Ca;
        function Pa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ca;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Ra(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          Sa(Aa), Sa(Oa);
        }
        function Ia(e, t, n) {
          if (Oa.current !== Ca) throw Error(i(168));
          Ea(Oa, t), Ea(Aa, n);
        }
        function _a(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, W(e) || "Unknown", a));
          return z({}, n, r);
        }
        function Ma(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ca),
            (Ta = Oa.current),
            Ea(Oa, e),
            Ea(Aa, Aa.current),
            !0
          );
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = _a(e, t, Ta)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Sa(Aa),
              Sa(Oa),
              Ea(Oa, e))
            : Sa(Aa),
            Ea(Aa, n);
        }
        var Da = null,
          Fa = !1,
          Ua = !1;
        function Ha(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Ba() {
          if (!Ua && null !== Da) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = Da;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Fa = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), qe($e, Ba), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ga = 0,
          Qa = null,
          Va = 0,
          qa = [],
          Ya = 0,
          Ka = null,
          Ja = 1,
          Xa = "";
        function Za(e, t) {
          (Wa[Ga++] = Va), (Wa[Ga++] = Qa), (Qa = e), (Va = t);
        }
        function $a(e, t, n) {
          (qa[Ya++] = Ja), (qa[Ya++] = Xa), (qa[Ya++] = Ka), (Ka = e);
          var r = Ja;
          e = Xa;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ja = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Xa = i + e);
          } else (Ja = (1 << i) | (n << a) | r), (Xa = e);
        }
        function ei(e) {
          null !== e.return && (Za(e, 1), $a(e, 1, 0));
        }
        function ti(e) {
          for (; e === Qa; )
            (Qa = Wa[--Ga]), (Wa[Ga] = null), (Va = Wa[--Ga]), (Wa[Ga] = null);
          for (; e === Ka; )
            (Ka = qa[--Ya]),
              (qa[Ya] = null),
              (Xa = qa[--Ya]),
              (qa[Ya] = null),
              (Ja = qa[--Ya]),
              (qa[Ya] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function oi(e, t) {
          var n = Rc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function li(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ri = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ka ? { id: Ja, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Rc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function si(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ci(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!li(e, t)) {
                if (si(e)) throw Error(i(418));
                t = ca(n.nextSibling);
                var r = ni;
                t && li(e, t)
                  ? oi(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (si(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ui(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function di(e) {
          if (e !== ni) return !1;
          if (!ai) return ui(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (si(e)) throw (fi(), Error(i(418)));
            for (; t; ) oi(e, t), (t = ca(t.nextSibling));
          }
          if ((ui(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fi() {
          for (var e = ri; e; ) e = ca(e.nextSibling);
        }
        function hi() {
          (ri = ni = null), (ai = !1);
        }
        function pi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var mi = x.ReactCurrentBatchConfig;
        function gi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = z({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vi = ka(null),
          yi = null,
          bi = null,
          xi = null;
        function wi() {
          xi = bi = yi = null;
        }
        function ji(e) {
          var t = vi.current;
          Sa(vi), (e._currentValue = t);
        }
        function Ni(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function ki(e, t) {
          (yi = e),
            (xi = bi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xl = !0), (e.firstContext = null));
        }
        function Si(e) {
          var t = e._currentValue;
          if (xi !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bi)
            ) {
              if (null === yi) throw Error(i(308));
              (bi = e), (yi.dependencies = { lanes: 0, firstContext: e });
            } else bi = bi.next = e;
          return t;
        }
        var Ei = null;
        function Ci(e) {
          null === Ei ? (Ei = [e]) : Ei.push(e);
        }
        function Oi(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ci(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ai(e, r)
          );
        }
        function Ai(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ti = !1;
        function Pi(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ri(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Li(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ii(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & As))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ai(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ci(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ai(e, n)
          );
        }
        function _i(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Mi(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function zi(e, t, n, r) {
          var a = e.updateQueue;
          Ti = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              c = s.next;
            (s.next = null), null === o ? (i = c) : (o.next = c), (o = s);
            var u = e.alternate;
            null !== u &&
              (l = (u = u.updateQueue).lastBaseUpdate) !== o &&
              (null === l ? (u.firstBaseUpdate = c) : (l.next = c),
              (u.lastBaseUpdate = s));
          }
          if (null !== i) {
            var d = a.baseState;
            for (o = 0, u = c = s = null, l = i; ; ) {
              var f = l.lane,
                h = l.eventTime;
              if ((r & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: h,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    m = l;
                  switch (((f = t), (h = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (p = m.payload)) {
                        d = p.call(h, d, f);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (p = m.payload)
                              ? p.call(h, d, f)
                              : p) ||
                        void 0 === f
                      )
                        break e;
                      d = z({}, d, f);
                      break e;
                    case 2:
                      Ti = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [l]) : f.push(l));
              } else
                (h = {
                  eventTime: h,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === u ? ((c = u = h), (s = d)) : (u = u.next = h),
                  (o |= f);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === u && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = u),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (zs |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function Di(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var Fi = new r.Component().refs;
        function Ui(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : z({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Hi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              i = Li(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Ii(e, i, a)) && (rc(t, e, a, r), _i(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              i = Li(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Ii(e, i, a)) && (rc(t, e, a, r), _i(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tc(),
              r = nc(e),
              a = Li(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Ii(e, a, r)) && (rc(t, e, r, n), _i(t, e, r));
          },
        };
        function Bi(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, i);
        }
        function Wi(e, t, n) {
          var r = !1,
            a = Ca,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Si(i))
              : ((a = Ra(t) ? Ta : Oa.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Pa(e, a)
                  : Ca)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Hi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Gi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Hi.enqueueReplaceState(t, t.state, null);
        }
        function Qi(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Fi), Pi(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Si(i))
            : ((i = Ra(t) ? Ta : Oa.current), (a.context = Pa(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (Ui(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Hi.enqueueReplaceState(a, a.state, null),
              zi(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Vi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Fi && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function qi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Yi(e) {
          return (0, e._init)(e._payload);
        }
        function Ki(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ic(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Dc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var i = n.type;
            return i === N
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === R &&
                    Yi(i) === t.type))
              ? (((r = a(t, n.props)).ref = Vi(e, t, n)), (r.return = e), r)
              : (((r = _c(n.type, n.key, n.props, null, e.mode, r)).ref = Vi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Mc(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Dc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = _c(t.type, t.key, t.props, null, e.mode, n)).ref = Vi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case j:
                  return ((t = Fc(t, e.mode, n)).return = e), t;
                case R:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || _(t))
                return ((t = Mc(t, e.mode, n, null)).return = e), t;
              qi(e, t);
            }
            return null;
          }
          function h(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? c(e, t, n, r) : null;
                case j:
                  return n.key === a ? u(e, t, n, r) : null;
                case R:
                  return h(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || _(n)) return null !== a ? null : d(e, t, n, r, null);
              qi(e, n);
            }
            return null;
          }
          function p(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case j:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case R:
                  return p(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || _(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              qi(t, r);
            }
            return null;
          }
          function m(a, i, l, s) {
            for (
              var c = null, u = null, d = i, m = (i = 0), g = null;
              null !== d && m < l.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = h(a, d, l[m], s);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(a, d),
                (i = o(v, i, m)),
                null === u ? (c = v) : (u.sibling = v),
                (u = v),
                (d = g);
            }
            if (m === l.length) return n(a, d), ai && Za(a, m), c;
            if (null === d) {
              for (; m < l.length; m++)
                null !== (d = f(a, l[m], s)) &&
                  ((i = o(d, i, m)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return ai && Za(a, m), c;
            }
            for (d = r(a, d); m < l.length; m++)
              null !== (g = p(d, a, m, l[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (i = o(g, i, m)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Za(a, m),
              c
            );
          }
          function g(a, l, s, c) {
            var u = _(s);
            if ("function" !== typeof u) throw Error(i(150));
            if (null == (s = u.call(s))) throw Error(i(151));
            for (
              var d = (u = null), m = l, g = (l = 0), v = null, y = s.next();
              null !== m && !y.done;
              g++, y = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = h(a, m, y.value, c);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (l = o(b, l, g)),
                null === d ? (u = b) : (d.sibling = b),
                (d = b),
                (m = v);
            }
            if (y.done) return n(a, m), ai && Za(a, g), u;
            if (null === m) {
              for (; !y.done; g++, y = s.next())
                null !== (y = f(a, y.value, c)) &&
                  ((l = o(y, l, g)),
                  null === d ? (u = y) : (d.sibling = y),
                  (d = y));
              return ai && Za(a, g), u;
            }
            for (m = r(a, m); !y.done; g++, y = s.next())
              null !== (y = p(m, a, g, y.value, c)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (l = o(y, l, g)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Za(a, g),
              u
            );
          }
          return function e(r, i, o, s) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === N &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var c = o.key, u = i; null !== u; ) {
                      if (u.key === c) {
                        if ((c = o.type) === N) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              ((i = a(u, o.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === R &&
                            Yi(c) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((i = a(u, o.props)).ref = Vi(r, u, o)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    o.type === N
                      ? (((i = Mc(o.props.children, r.mode, s, o.key)).return =
                          r),
                        (r = i))
                      : (((s = _c(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          s
                        )).ref = Vi(r, i, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case j:
                  e: {
                    for (u = o.key; null !== i; ) {
                      if (i.key === u) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, o.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Fc(o, r.mode, s)).return = r), (r = i);
                  }
                  return l(r);
                case R:
                  return e(r, i, (u = o._init)(o._payload), s);
              }
              if (te(o)) return m(r, i, o, s);
              if (_(o)) return g(r, i, o, s);
              qi(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = Dc(o, r.mode, s)).return = r), (r = i)),
                l(r))
              : n(r, i);
          };
        }
        var Ji = Ki(!0),
          Xi = Ki(!1),
          Zi = {},
          $i = ka(Zi),
          eo = ka(Zi),
          to = ka(Zi);
        function no(e) {
          if (e === Zi) throw Error(i(174));
          return e;
        }
        function ro(e, t) {
          switch ((Ea(to, t), Ea(eo, e), Ea($i, Zi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Sa($i), Ea($i, t);
        }
        function ao() {
          Sa($i), Sa(eo), Sa(to);
        }
        function io(e) {
          no(to.current);
          var t = no($i.current),
            n = se(t, e.type);
          t !== n && (Ea(eo, e), Ea($i, n));
        }
        function oo(e) {
          eo.current === e && (Sa($i), Sa(eo));
        }
        var lo = ka(0);
        function so(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var co = [];
        function uo() {
          for (var e = 0; e < co.length; e++)
            co[e]._workInProgressVersionPrimary = null;
          co.length = 0;
        }
        var fo = x.ReactCurrentDispatcher,
          ho = x.ReactCurrentBatchConfig,
          po = 0,
          mo = null,
          go = null,
          vo = null,
          yo = !1,
          bo = !1,
          xo = 0,
          wo = 0;
        function jo() {
          throw Error(i(321));
        }
        function No(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function ko(e, t, n, r, a, o) {
          if (
            ((po = o),
            (mo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (xo = 0), 25 <= o)) throw Error(i(301));
              (o += 1),
                (vo = go = null),
                (t.updateQueue = null),
                (fo.current = cl),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((fo.current = ol),
            (t = null !== go && null !== go.next),
            (po = 0),
            (vo = go = mo = null),
            (yo = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function So() {
          var e = 0 !== xo;
          return (xo = 0), e;
        }
        function Eo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vo ? (mo.memoizedState = vo = e) : (vo = vo.next = e), vo
          );
        }
        function Co() {
          if (null === go) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = go.next;
          var t = null === vo ? mo.memoizedState : vo.next;
          if (null !== t) (vo = t), (go = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (go = e).memoizedState,
              baseState: go.baseState,
              baseQueue: go.baseQueue,
              queue: go.queue,
              next: null,
            }),
              null === vo ? (mo.memoizedState = vo = e) : (vo = vo.next = e);
          }
          return vo;
        }
        function Oo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ao(e) {
          var t = Co(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = go,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var l = a.next;
              (a.next = o.next), (o.next = l);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var s = (l = null),
              c = null,
              u = o;
            do {
              var d = u.lane;
              if ((po & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var f = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((s = c = f), (l = r)) : (c = c.next = f),
                  (mo.lanes |= d),
                  (zs |= d);
              }
              u = u.next;
            } while (null !== u && u !== o);
            null === c ? (l = r) : (c.next = s),
              lr(r, t.memoizedState) || (xl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (mo.lanes |= o), (zs |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function To(e) {
          var t = Co(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== a);
            lr(o, t.memoizedState) || (xl = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Po() {}
        function Ro(e, t) {
          var n = mo,
            r = Co(),
            a = t(),
            o = !lr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (xl = !0)),
            (r = r.queue),
            Go(_o.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== vo && 1 & vo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fo(9, Io.bind(null, n, r, a, t), void 0, null),
              null === Ts)
            )
              throw Error(i(349));
            0 !== (30 & po) || Lo(n, t, a);
          }
          return a;
        }
        function Lo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Io(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Mo(t) && zo(e);
        }
        function _o(e, t, n) {
          return n(function () {
            Mo(t) && zo(e);
          });
        }
        function Mo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function zo(e) {
          var t = Ai(e, 1);
          null !== t && rc(t, e, 1, -1);
        }
        function Do(e) {
          var t = Eo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Oo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, mo, e)),
            [t.memoizedState, e]
          );
        }
        function Fo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Uo() {
          return Co().memoizedState;
        }
        function Ho(e, t, n, r) {
          var a = Eo();
          (mo.flags |= e),
            (a.memoizedState = Fo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bo(e, t, n, r) {
          var a = Co();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== go) {
            var o = go.memoizedState;
            if (((i = o.destroy), null !== r && No(r, o.deps)))
              return void (a.memoizedState = Fo(t, n, i, r));
          }
          (mo.flags |= e), (a.memoizedState = Fo(1 | t, n, i, r));
        }
        function Wo(e, t) {
          return Ho(8390656, 8, e, t);
        }
        function Go(e, t) {
          return Bo(2048, 8, e, t);
        }
        function Qo(e, t) {
          return Bo(4, 2, e, t);
        }
        function Vo(e, t) {
          return Bo(4, 4, e, t);
        }
        function qo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Yo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bo(4, 4, qo.bind(null, t, e), n)
          );
        }
        function Ko() {}
        function Jo(e, t) {
          var n = Co();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && No(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xo(e, t) {
          var n = Co();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && No(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zo(e, t, n) {
          return 0 === (21 & po)
            ? (e.baseState && ((e.baseState = !1), (xl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = mt()), (mo.lanes |= n), (zs |= n), (e.baseState = !0)),
              t);
        }
        function $o(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ho.transition;
          ho.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ho.transition = r);
          }
        }
        function el() {
          return Co().memoizedState;
        }
        function tl(e, t, n) {
          var r = nc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = Oi(e, t, n, r))) {
            rc(n, e, r, tc()), il(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = nc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  l = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, o))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Ci(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = Oi(e, t, a, r)) &&
              (rc(n, e, r, (a = tc())), il(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === mo || (null !== t && t === mo);
        }
        function al(e, t) {
          bo = yo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function il(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var ol = {
            readContext: Si,
            useCallback: jo,
            useContext: jo,
            useEffect: jo,
            useImperativeHandle: jo,
            useInsertionEffect: jo,
            useLayoutEffect: jo,
            useMemo: jo,
            useReducer: jo,
            useRef: jo,
            useState: jo,
            useDebugValue: jo,
            useDeferredValue: jo,
            useTransition: jo,
            useMutableSource: jo,
            useSyncExternalStore: jo,
            useId: jo,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Si,
            useCallback: function (e, t) {
              return (Eo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Si,
            useEffect: Wo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ho(4194308, 4, qo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ho(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ho(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Eo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Eo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, mo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Eo().memoizedState = e);
            },
            useState: Do,
            useDebugValue: Ko,
            useDeferredValue: function (e) {
              return (Eo().memoizedState = e);
            },
            useTransition: function () {
              var e = Do(!1),
                t = e[0];
              return (
                (e = $o.bind(null, e[1])), (Eo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mo,
                a = Eo();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Ts)) throw Error(i(349));
                0 !== (30 & po) || Lo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Wo(_o.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Fo(9, Io.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Eo(),
                t = Ts.identifierPrefix;
              if (ai) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ja & ~(1 << (32 - ot(Ja) - 1))).toString(32) + n)),
                  0 < (n = xo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Si,
            useCallback: Jo,
            useContext: Si,
            useEffect: Go,
            useImperativeHandle: Yo,
            useInsertionEffect: Qo,
            useLayoutEffect: Vo,
            useMemo: Xo,
            useReducer: Ao,
            useRef: Uo,
            useState: function () {
              return Ao(Oo);
            },
            useDebugValue: Ko,
            useDeferredValue: function (e) {
              return Zo(Co(), go.memoizedState, e);
            },
            useTransition: function () {
              return [Ao(Oo)[0], Co().memoizedState];
            },
            useMutableSource: Po,
            useSyncExternalStore: Ro,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          cl = {
            readContext: Si,
            useCallback: Jo,
            useContext: Si,
            useEffect: Go,
            useImperativeHandle: Yo,
            useInsertionEffect: Qo,
            useLayoutEffect: Vo,
            useMemo: Xo,
            useReducer: To,
            useRef: Uo,
            useState: function () {
              return To(Oo);
            },
            useDebugValue: Ko,
            useDeferredValue: function (e) {
              var t = Co();
              return null === go
                ? (t.memoizedState = e)
                : Zo(t, go.memoizedState, e);
            },
            useTransition: function () {
              return [To(Oo)[0], Co().memoizedState];
            },
            useMutableSource: Po,
            useSyncExternalStore: Ro,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function ul(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function dl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var hl = "function" === typeof WeakMap ? WeakMap : Map;
        function pl(e, t, n) {
          ((n = Li(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Qs || ((Qs = !0), (Vs = r)), fl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = Li(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  "function" !== typeof r &&
                    (null === qs ? (qs = new Set([this])) : qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new hl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Ec.bind(null, e, t, n)), t.then(e, e));
        }
        function vl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Li(-1, 1)).tag = 2), Ii(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = x.ReactCurrentOwner,
          xl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? Xi(t, null, n, r) : Ji(t, e.child, n, r);
        }
        function jl(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            ki(t, a),
            (r = ko(e, t, n, r, i, a)),
            (n = So()),
            null === e || xl
              ? (ai && n && ei(t), (t.flags |= 1), wl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ql(e, t, a))
          );
        }
        function Nl(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Lc(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = _c(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), kl(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(o, r) &&
              e.ref === t.ref
            )
              return Ql(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ic(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function kl(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (sr(i, r) && e.ref === t.ref) {
              if (((xl = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Ql(e, t, a);
              0 !== (131072 & e.flags) && (xl = !0);
            }
          }
          return Cl(e, t, n, r, a);
        }
        function Sl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ea(Is, Ls),
                (Ls |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ea(Is, Ls),
                  (Ls |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Ea(Is, Ls),
                (Ls |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ea(Is, Ls),
              (Ls |= r);
          return wl(e, t, a, n), t.child;
        }
        function El(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Cl(e, t, n, r, a) {
          var i = Ra(n) ? Ta : Oa.current;
          return (
            (i = Pa(t, i)),
            ki(t, a),
            (n = ko(e, t, n, r, i, a)),
            (r = So()),
            null === e || xl
              ? (ai && r && ei(t), (t.flags |= 1), wl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ql(e, t, a))
          );
        }
        function Ol(e, t, n, r, a) {
          if (Ra(n)) {
            var i = !0;
            Ma(t);
          } else i = !1;
          if ((ki(t, a), null === t.stateNode))
            Gl(e, t), Wi(t, n, r), Qi(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var s = o.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Si(c))
              : (c = Pa(t, (c = Ra(n) ? Ta : Oa.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== r || s !== c) && Gi(t, o, r, c)),
              (Ti = !1);
            var f = t.memoizedState;
            (o.state = f),
              zi(t, r, o, a),
              (s = t.memoizedState),
              l !== r || f !== s || Aa.current || Ti
                ? ("function" === typeof u &&
                    (Ui(t, n, u, r), (s = t.memoizedState)),
                  (l = Ti || Bi(t, n, l, r, f, s, c))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = c),
                  (r = l))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Ri(e, t),
              (l = t.memoizedProps),
              (c = t.type === t.elementType ? l : gi(t.type, l)),
              (o.props = c),
              (d = t.pendingProps),
              (f = o.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Si(s))
                : (s = Pa(t, (s = Ra(n) ? Ta : Oa.current)));
            var h = n.getDerivedStateFromProps;
            (u =
              "function" === typeof h ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== d || f !== s) && Gi(t, o, r, s)),
              (Ti = !1),
              (f = t.memoizedState),
              (o.state = f),
              zi(t, r, o, a);
            var p = t.memoizedState;
            l !== d || f !== p || Aa.current || Ti
              ? ("function" === typeof h &&
                  (Ui(t, n, h, r), (p = t.memoizedState)),
                (c = Ti || Bi(t, n, c, r, f, p, s) || !1)
                  ? (u ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, p, s),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, p, s)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (o.props = r),
                (o.state = p),
                (o.context = s),
                (r = c))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Al(e, t, n, r, i, a);
        }
        function Al(e, t, n, r, a, i) {
          El(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && za(t, n, !1), Ql(e, t, i);
          (r = t.stateNode), (bl.current = t);
          var l =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Ji(t, e.child, null, i)),
                (t.child = Ji(t, null, l, i)))
              : wl(e, t, l, i),
            (t.memoizedState = r.state),
            a && za(t, n, !0),
            t.child
          );
        }
        function Tl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ia(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ia(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Pl(e, t, n, r, a) {
          return hi(), pi(a), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var Rl,
          Ll,
          Il,
          _l,
          Ml = { dehydrated: null, treeContext: null, retryLane: 0 };
        function zl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Dl(e, t, n) {
          var r,
            a = t.pendingProps,
            o = lo.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ea(lo, 1 & o),
            null === e)
          )
            return (
              ci(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = zc(s, a, 0, null)),
                      (e = Mc(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = zl(n)),
                      (t.memoizedState = Ml),
                      e)
                    : Fl(t, s))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ul(e, t, l, (r = dl(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = zc(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Mc(o, a, l, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Ji(t, e.child, null, l),
                    (t.child.memoizedState = zl(l)),
                    (t.memoizedState = Ml),
                    o);
              if (0 === (1 & t.mode)) return Ul(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Ul(e, t, l, (r = dl((o = Error(i(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), xl || s)) {
                if (null !== (r = Ts)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Ai(e, a), rc(r, e, a, -1));
                }
                return gc(), Ul(e, t, l, (r = dl(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Oc.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ri = ca(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((qa[Ya++] = Ja),
                    (qa[Ya++] = Xa),
                    (qa[Ya++] = Ka),
                    (Ja = e.id),
                    (Xa = e.overflow),
                    (Ka = t)),
                  (t = Fl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, o, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (o = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Ic(o, c)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (l = Ic(r, l))
                : ((l = Mc(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? zl(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ml),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Ic(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Fl(e, t) {
          return (
            ((t = zc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ul(e, t, n, r) {
          return (
            null !== r && pi(r),
            Ji(t, e.child, null, n),
            ((e = Fl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Hl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ni(e.return, t, n);
        }
        function Bl(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Wl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = lo.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Hl(e, n, t);
                else if (19 === e.tag) Hl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ea(lo, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === so(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bl(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === so(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bl(t, !0, n, null, i);
                break;
              case "together":
                Bl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Gl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ql(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (zs |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Ic((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ic(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Vl(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Yl(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return ql(t), null;
            case 1:
            case 17:
              return Ra(t.type) && La(), ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Sa(Aa),
                Sa(Oa),
                uo(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (lc(ii), (ii = null)))),
                Ll(e, t),
                ql(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Il(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return ql(t), null;
                }
                if (((e = no($i.current)), di(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[ha] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < _r.length; a++) Fr(_r[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      J(r, o), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Fr("invalid", r);
                  }
                  for (var s in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(s)) {
                      var c = o[s];
                      "children" === s
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : l.hasOwnProperty(s) &&
                          null != c &&
                          "onScroll" === s &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      V(r), $(r, o, !0);
                      break;
                    case "textarea":
                      V(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = $r);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[ha] = r),
                    Rl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < _r.length; a++) Fr(_r[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        J(e, r), (a = K(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = z({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (o in (ye(n, a), (c = a)))
                      if (c.hasOwnProperty(o)) {
                        var u = c[o];
                        "style" === o
                          ? ge(e, u)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : "children" === o
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && fe(e, u)
                            : "number" === typeof u && fe(e, "" + u)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (l.hasOwnProperty(o)
                              ? null != u && "onScroll" === o && Fr("scroll", e)
                              : null != u && b(e, o, u, s));
                      }
                    switch (n) {
                      case "input":
                        V(e), $(e, r, !1);
                        break;
                      case "textarea":
                        V(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + G(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return ql(t), null;
            case 6:
              if (e && null != t.stateNode) _l(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = no(to.current)), no($i.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (o = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return ql(t), null;
            case 13:
              if (
                (Sa(lo),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fi(), hi(), (t.flags |= 98560), (o = !1);
                else if (((o = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(i(317));
                    o[fa] = t;
                  } else
                    hi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  ql(t), (o = !1);
                } else null !== ii && (lc(ii), (ii = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & lo.current)
                        ? 0 === _s && (_s = 3)
                        : gc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  ql(t),
                  null);
            case 4:
              return (
                ao(),
                Ll(e, t),
                null === e && Br(t.stateNode.containerInfo),
                ql(t),
                null
              );
            case 10:
              return ji(t.type._context), ql(t), null;
            case 19:
              if ((Sa(lo), null === (o = t.memoizedState))) return ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = o.rendering)))
                if (r) Vl(o, !1);
                else {
                  if (0 !== _s || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = so(e))) {
                        for (
                          t.flags |= 128,
                            Vl(o, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (e = s.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ea(lo, (1 & lo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Xe() > Ws &&
                    ((t.flags |= 128),
                    (r = !0),
                    Vl(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = so(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Vl(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !s.alternate &&
                        !ai)
                    )
                      return ql(t), null;
                  } else
                    2 * Xe() - o.renderingStartTime > Ws &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Vl(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (t.child = s),
                    (o.last = s));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = lo.current),
                  Ea(lo, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (ql(t), null);
            case 22:
            case 23:
              return (
                fc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ls) &&
                    (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Kl(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && La(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Sa(Aa),
                Sa(Oa),
                uo(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Sa(lo),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                hi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Sa(lo), null;
            case 4:
              return ao(), null;
            case 10:
              return ji(t.type._context), null;
            case 22:
            case 23:
              return fc(), null;
            default:
              return null;
          }
        }
        (Rl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ll = function () {}),
          (Il = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no($i.current);
              var i,
                o = null;
              switch (n) {
                case "input":
                  (a = K(e, a)), (r = K(e, r)), (o = []);
                  break;
                case "select":
                  (a = z({}, a, { value: void 0 })),
                    (r = z({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (u in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                  if ("style" === u) {
                    var s = a[u];
                    for (i in s)
                      s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (l.hasOwnProperty(u)
                        ? o || (o = [])
                        : (o = o || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((s = null != a ? a[u] : void 0),
                  r.hasOwnProperty(u) && c !== s && (null != c || null != s))
                )
                  if ("style" === u)
                    if (s) {
                      for (i in s)
                        !s.hasOwnProperty(i) ||
                          (c && c.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in c)
                        c.hasOwnProperty(i) &&
                          s[i] !== c[i] &&
                          (n || (n = {}), (n[i] = c[i]));
                    } else n || (o || (o = []), o.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (o = o || []).push(u, c))
                      : "children" === u
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (o = o || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (l.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Fr("scroll", e),
                            o || s === c || (o = []))
                          : (o = o || []).push(u, c));
              }
              n && (o = o || []).push("style", n);
              var u = o;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (_l = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Jl = !1,
          Xl = !1,
          Zl = "function" === typeof WeakSet ? WeakSet : Set,
          $l = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Sc(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Sc(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && ts(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function as(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function is(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[ha],
              delete t[ma],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function hs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Xl || es(n, t);
            case 6:
              var r = ds,
                a = fs;
              (ds = null),
                hs(e, t, n),
                (fs = a),
                null !== (ds = r) &&
                  (fs
                    ? ((e = ds),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ds.removeChild(n.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Bt(e))
                  : sa(ds, n.stateNode));
              break;
            case 4:
              (r = ds),
                (a = fs),
                (ds = n.stateNode.containerInfo),
                (fs = !0),
                hs(e, t, n),
                (ds = r),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      ts(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              hs(e, t, n);
              break;
            case 1:
              if (
                !Xl &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Sc(n, t, l);
                }
              hs(e, t, n);
              break;
            case 21:
              hs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xl = (r = Xl) || null !== n.memoizedState),
                  hs(e, t, n),
                  (Xl = r))
                : hs(e, t, n);
              break;
            default:
              hs(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zl()),
              t.forEach(function (t) {
                var r = Ac.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(i(160));
                ps(o, l, a), (ds = null), (fs = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (u) {
                Sc(a, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
        }
        function vs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gs(t, e), ys(e), 4 & r)) {
                try {
                  rs(3, e, e.return), as(3, e);
                } catch (g) {
                  Sc(e, e.return, g);
                }
                try {
                  rs(5, e, e.return);
                } catch (g) {
                  Sc(e, e.return, g);
                }
              }
              break;
            case 1:
              gs(t, e), ys(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (gs(t, e),
                ys(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (g) {
                  Sc(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : o,
                  s = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === s &&
                      "radio" === o.type &&
                      null != o.name &&
                      X(a, o),
                      be(s, l);
                    var u = be(s, o);
                    for (l = 0; l < c.length; l += 2) {
                      var d = c[l],
                        f = c[l + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, u);
                    }
                    switch (s) {
                      case "input":
                        Z(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var h = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var p = o.value;
                        null != p
                          ? ne(a, !!o.multiple, p, !1)
                          : h !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[ha] = o;
                  } catch (g) {
                    Sc(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gs(t, e), ys(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (g) {
                  Sc(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gs(t, e),
                ys(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (g) {
                  Sc(e, e.return, g);
                }
              break;
            case 4:
            default:
              gs(t, e), ys(e);
              break;
            case 13:
              gs(t, e),
                ys(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bs = Xe())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xl = (u = Xl) || d), gs(t, e), (Xl = u))
                  : gs(t, e),
                ys(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for ($l = e, d = e.child; null !== d; ) {
                    for (f = $l = d; null !== $l; ) {
                      switch (((p = (h = $l).child), h.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, h, h.return);
                          break;
                        case 1:
                          es(h, h.return);
                          var m = h.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = h), (n = h.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Sc(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          es(h, h.return);
                          break;
                        case 22:
                          if (null !== h.memoizedState) {
                            js(f);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = h), ($l = p)) : js(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          u
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((s = f.stateNode),
                              (l =
                                void 0 !== (c = f.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (s.style.display = me("display", l)));
                      } catch (g) {
                        Sc(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                      } catch (g) {
                        Sc(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              gs(t, e), ys(e), 4 & r && ms(e);
            case 21:
          }
        }
        function ys(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    us(e, ss(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  cs(e, ss(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (l) {
              Sc(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          ($l = e), xs(e, t, n);
        }
        function xs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== $l; ) {
            var a = $l,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Jl;
              if (!o) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Xl;
                l = Jl;
                var c = Xl;
                if (((Jl = o), (Xl = s) && !c))
                  for ($l = a; null !== $l; )
                    (s = (o = $l).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Ns(a)
                        : null !== s
                        ? ((s.return = o), ($l = s))
                        : Ns(a);
                for (; null !== i; ) ($l = i), xs(i, t, n), (i = i.sibling);
                ($l = a), (Jl = l), (Xl = c);
              }
              ws(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), ($l = i))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== $l; ) {
            var t = $l;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl || as(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Di(t, o, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Di(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Bt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Xl || (512 & t.flags && is(t));
              } catch (h) {
                Sc(t, t.return, h);
              }
            }
            if (t === e) {
              $l = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), ($l = n);
              break;
            }
            $l = t.return;
          }
        }
        function js(e) {
          for (; null !== $l; ) {
            var t = $l;
            if (t === e) {
              $l = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), ($l = n);
              break;
            }
            $l = t.return;
          }
        }
        function Ns(e) {
          for (; null !== $l; ) {
            var t = $l;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    as(4, t);
                  } catch (s) {
                    Sc(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Sc(t, a, s);
                    }
                  }
                  var i = t.return;
                  try {
                    is(t);
                  } catch (s) {
                    Sc(t, i, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    is(t);
                  } catch (s) {
                    Sc(t, o, s);
                  }
              }
            } catch (s) {
              Sc(t, t.return, s);
            }
            if (t === e) {
              $l = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), ($l = l);
              break;
            }
            $l = t.return;
          }
        }
        var ks,
          Ss = Math.ceil,
          Es = x.ReactCurrentDispatcher,
          Cs = x.ReactCurrentOwner,
          Os = x.ReactCurrentBatchConfig,
          As = 0,
          Ts = null,
          Ps = null,
          Rs = 0,
          Ls = 0,
          Is = ka(0),
          _s = 0,
          Ms = null,
          zs = 0,
          Ds = 0,
          Fs = 0,
          Us = null,
          Hs = null,
          Bs = 0,
          Ws = 1 / 0,
          Gs = null,
          Qs = !1,
          Vs = null,
          qs = null,
          Ys = !1,
          Ks = null,
          Js = 0,
          Xs = 0,
          Zs = null,
          $s = -1,
          ec = 0;
        function tc() {
          return 0 !== (6 & As) ? Xe() : -1 !== $s ? $s : ($s = Xe());
        }
        function nc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & As) && 0 !== Rs
            ? Rs & -Rs
            : null !== mi.transition
            ? (0 === ec && (ec = mt()), ec)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
        }
        function rc(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (Zs = null), Error(i(185)));
          vt(e, n, r),
            (0 !== (2 & As) && e === Ts) ||
              (e === Ts && (0 === (2 & As) && (Ds |= n), 4 === _s && sc(e, Rs)),
              ac(e, r),
              1 === n &&
                0 === As &&
                0 === (1 & t.mode) &&
                ((Ws = Xe() + 500), Fa && Ba()));
        }
        function ac(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var o = 31 - ot(i),
                l = 1 << o,
                s = a[o];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[o] = ht(l, t))
                : s <= t && (e.expiredLanes |= l),
                (i &= ~l);
            }
          })(e, t);
          var r = ft(e, e === Ts ? Rs : 0);
          if (0 === r)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Ha(e);
                  })(cc.bind(null, e))
                : Ha(cc.bind(null, e)),
                oa(function () {
                  0 === (6 & As) && Ba();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Tc(n, ic.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ic(e, t) {
          if ((($s = -1), (ec = 0), 0 !== (6 & As))) throw Error(i(327));
          var n = e.callbackNode;
          if (Nc() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ts ? Rs : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vc(e, r);
          else {
            t = r;
            var a = As;
            As |= 2;
            var o = mc();
            for (
              (Ts === e && Rs === t) ||
              ((Gs = null), (Ws = Xe() + 500), hc(e, t));
              ;

            )
              try {
                bc();
                break;
              } catch (s) {
                pc(e, s);
              }
            wi(),
              (Es.current = o),
              (As = a),
              null !== Ps ? (t = 0) : ((Ts = null), (Rs = 0), (t = _s));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = pt(e)) && ((r = a), (t = oc(e, a))),
              1 === t)
            )
              throw ((n = Ms), hc(e, 0), sc(e, r), ac(e, Xe()), n);
            if (6 === t) sc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(i(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vc(e, r)) &&
                    0 !== (o = pt(e)) &&
                    ((r = o), (t = oc(e, o))),
                  1 === t))
              )
                throw ((n = Ms), hc(e, 0), sc(e, r), ac(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  jc(e, Hs, Gs);
                  break;
                case 3:
                  if (
                    (sc(e, r),
                    (130023424 & r) === r && 10 < (t = Bs + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tc(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(jc.bind(null, e, Hs, Gs), t);
                    break;
                  }
                  jc(e, Hs, Gs);
                  break;
                case 4:
                  if ((sc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - ot(r);
                    (o = 1 << l), (l = t[l]) > a && (a = l), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Ss(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(jc.bind(null, e, Hs, Gs), r);
                    break;
                  }
                  jc(e, Hs, Gs);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return ac(e, Xe()), e.callbackNode === n ? ic.bind(null, e) : null;
        }
        function oc(e, t) {
          var n = Us;
          return (
            e.current.memoizedState.isDehydrated && (hc(e, t).flags |= 256),
            2 !== (e = vc(e, t)) && ((t = Hs), (Hs = n), null !== t && lc(t)),
            e
          );
        }
        function lc(e) {
          null === Hs ? (Hs = e) : Hs.push.apply(Hs, e);
        }
        function sc(e, t) {
          for (
            t &= ~Fs,
              t &= ~Ds,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function cc(e) {
          if (0 !== (6 & As)) throw Error(i(327));
          Nc();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ac(e, Xe()), null;
          var n = vc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = oc(e, r)));
          }
          if (1 === n) throw ((n = Ms), hc(e, 0), sc(e, t), ac(e, Xe()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            jc(e, Hs, Gs),
            ac(e, Xe()),
            null
          );
        }
        function uc(e, t) {
          var n = As;
          As |= 1;
          try {
            return e(t);
          } finally {
            0 === (As = n) && ((Ws = Xe() + 500), Fa && Ba());
          }
        }
        function dc(e) {
          null !== Ks && 0 === Ks.tag && 0 === (6 & As) && Nc();
          var t = As;
          As |= 1;
          var n = Os.transition,
            r = bt;
          try {
            if (((Os.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Os.transition = n), 0 === (6 & (As = t)) && Ba();
          }
        }
        function fc() {
          (Ls = Is.current), Sa(Is);
        }
        function hc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ps))
            for (n = Ps.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    La();
                  break;
                case 3:
                  ao(), Sa(Aa), Sa(Oa), uo();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Sa(lo);
                  break;
                case 10:
                  ji(r.type._context);
                  break;
                case 22:
                case 23:
                  fc();
              }
              n = n.return;
            }
          if (
            ((Ts = e),
            (Ps = e = Ic(e.current, null)),
            (Rs = Ls = t),
            (_s = 0),
            (Ms = null),
            (Fs = Ds = zs = 0),
            (Hs = Us = null),
            null !== Ei)
          ) {
            for (t = 0; t < Ei.length; t++)
              if (null !== (r = (n = Ei[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Ei = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = Ps;
            try {
              if ((wi(), (fo.current = ol), yo)) {
                for (var r = mo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((po = 0),
                (vo = go = mo = null),
                (bo = !1),
                (xo = 0),
                (Cs.current = null),
                null === n || null === n.return)
              ) {
                (_s = 1), (Ms = t), (Ps = null);
                break;
              }
              e: {
                var o = e,
                  l = n.return,
                  s = n,
                  c = t;
                if (
                  ((t = Rs),
                  (s.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var h = d.alternate;
                    h
                      ? ((d.updateQueue = h.updateQueue),
                        (d.memoizedState = h.memoizedState),
                        (d.lanes = h.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = vl(l);
                  if (null !== p) {
                    (p.flags &= -257),
                      yl(p, l, s, 0, t),
                      1 & p.mode && gl(o, u, t),
                      (c = u);
                    var m = (t = p).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(c), (t.updateQueue = g);
                    } else m.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gl(o, u, t), gc();
                    break e;
                  }
                  c = Error(i(426));
                } else if (ai && 1 & s.mode) {
                  var v = vl(l);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      yl(v, l, s, 0, t),
                      pi(ul(c, s));
                    break e;
                  }
                }
                (o = c = ul(c, s)),
                  4 !== _s && (_s = 2),
                  null === Us ? (Us = [o]) : Us.push(o),
                  (o = l);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Mi(o, pl(0, c, t));
                      break e;
                    case 1:
                      s = c;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === qs || !qs.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Mi(o, ml(o, s, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              wc(n);
            } catch (x) {
              (t = x), Ps === n && null !== n && (Ps = n = n.return);
              continue;
            }
            break;
          }
        }
        function mc() {
          var e = Es.current;
          return (Es.current = ol), null === e ? ol : e;
        }
        function gc() {
          (0 !== _s && 3 !== _s && 2 !== _s) || (_s = 4),
            null === Ts ||
              (0 === (268435455 & zs) && 0 === (268435455 & Ds)) ||
              sc(Ts, Rs);
        }
        function vc(e, t) {
          var n = As;
          As |= 2;
          var r = mc();
          for ((Ts === e && Rs === t) || ((Gs = null), hc(e, t)); ; )
            try {
              yc();
              break;
            } catch (a) {
              pc(e, a);
            }
          if ((wi(), (As = n), (Es.current = r), null !== Ps))
            throw Error(i(261));
          return (Ts = null), (Rs = 0), _s;
        }
        function yc() {
          for (; null !== Ps; ) xc(Ps);
        }
        function bc() {
          for (; null !== Ps && !Ke(); ) xc(Ps);
        }
        function xc(e) {
          var t = ks(e.alternate, e, Ls);
          (e.memoizedProps = e.pendingProps),
            null === t ? wc(e) : (Ps = t),
            (Cs.current = null);
        }
        function wc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Yl(n, t, Ls))) return void (Ps = n);
            } else {
              if (null !== (n = Kl(n, t)))
                return (n.flags &= 32767), void (Ps = n);
              if (null === e) return (_s = 6), void (Ps = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ps = t);
            Ps = t = e;
          } while (null !== t);
          0 === _s && (_s = 5);
        }
        function jc(e, t, n) {
          var r = bt,
            a = Os.transition;
          try {
            (Os.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Nc();
                } while (null !== Ks);
                if (0 !== (6 & As)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, o),
                  e === Ts && ((Ps = Ts = null), (Rs = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ys ||
                    ((Ys = !0),
                    Tc(tt, function () {
                      return Nc(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Os.transition), (Os.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = As;
                  (As |= 4),
                    (Cs.current = null),
                    (function (e, t) {
                      if (((ea = Gt), hr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                h = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = l + a),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (c = l + r),
                                    3 === f.nodeType &&
                                      (l += f.nodeValue.length),
                                    null !== (p = f.firstChild);

                                )
                                  (h = f), (f = p);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (h === n && ++u === a && (s = l),
                                    h === o && ++d === r && (c = l),
                                    null !== (p = f.nextSibling))
                                  )
                                    break;
                                  h = (f = h).parentNode;
                                }
                                f = p;
                              }
                              n =
                                -1 === s || -1 === c
                                  ? null
                                  : { start: s, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Gt = !1,
                          $l = t;
                        null !== $l;

                      )
                        if (
                          ((e = (t = $l).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), ($l = e);
                        else
                          for (; null !== $l; ) {
                            t = $l;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gi(t.type, g),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (w) {
                              Sc(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), ($l = e);
                              break;
                            }
                            $l = t.return;
                          }
                      (m = ns), (ns = !1);
                    })(e, n),
                    vs(n, e),
                    pr(ta),
                    (Gt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bs(n, e, a),
                    Je(),
                    (As = s),
                    (bt = l),
                    (Os.transition = o);
                } else e.current = n;
                if (
                  (Ys && ((Ys = !1), (Ks = e), (Js = a)),
                  (o = e.pendingLanes),
                  0 === o && (qs = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ac(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Qs) throw ((Qs = !1), (e = Vs), (Vs = null), e);
                0 !== (1 & Js) && 0 !== e.tag && Nc(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Zs
                      ? Xs++
                      : ((Xs = 0), (Zs = e))
                    : (Xs = 0),
                  Ba();
              })(e, t, n, r);
          } finally {
            (Os.transition = a), (bt = r);
          }
          return null;
        }
        function Nc() {
          if (null !== Ks) {
            var e = xt(Js),
              t = Os.transition,
              n = bt;
            try {
              if (((Os.transition = null), (bt = 16 > e ? 16 : e), null === Ks))
                var r = !1;
              else {
                if (((e = Ks), (Ks = null), (Js = 0), 0 !== (6 & As)))
                  throw Error(i(331));
                var a = As;
                for (As |= 4, $l = e.current; null !== $l; ) {
                  var o = $l,
                    l = o.child;
                  if (0 !== (16 & $l.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var c = 0; c < s.length; c++) {
                        var u = s[c];
                        for ($l = u; null !== $l; ) {
                          var d = $l;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), ($l = f);
                          else
                            for (; null !== $l; ) {
                              var h = (d = $l).sibling,
                                p = d.return;
                              if ((os(d), d === u)) {
                                $l = null;
                                break;
                              }
                              if (null !== h) {
                                (h.return = p), ($l = h);
                                break;
                              }
                              $l = p;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      $l = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== l)
                    (l.return = o), ($l = l);
                  else
                    e: for (; null !== $l; ) {
                      if (0 !== (2048 & (o = $l).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), ($l = y);
                        break e;
                      }
                      $l = o.return;
                    }
                }
                var b = e.current;
                for ($l = b; null !== $l; ) {
                  var x = (l = $l).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x)
                    (x.return = l), ($l = x);
                  else
                    e: for (l = b; null !== $l; ) {
                      if (0 !== (2048 & (s = $l).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              as(9, s);
                          }
                        } catch (j) {
                          Sc(s, s.return, j);
                        }
                      if (s === l) {
                        $l = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), ($l = w);
                        break e;
                      }
                      $l = s.return;
                    }
                }
                if (
                  ((As = a),
                  Ba(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (j) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Os.transition = t);
            }
          }
          return !1;
        }
        function kc(e, t, n) {
          (e = Ii(e, (t = pl(0, (t = ul(n, t)), 1)), 1)),
            (t = tc()),
            null !== e && (vt(e, 1, t), ac(e, t));
        }
        function Sc(e, t, n) {
          if (3 === e.tag) kc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                kc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === qs || !qs.has(r)))
                ) {
                  (t = Ii(t, (e = ml(t, (e = ul(n, e)), 1)), 1)),
                    (e = tc()),
                    null !== t && (vt(t, 1, e), ac(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ec(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tc()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ts === e &&
              (Rs & n) === n &&
              (4 === _s ||
              (3 === _s && (130023424 & Rs) === Rs && 500 > Xe() - Bs)
                ? hc(e, 0)
                : (Fs |= n)),
            ac(e, t);
        }
        function Cc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = tc();
          null !== (e = Ai(e, t)) && (vt(e, t, n), ac(e, n));
        }
        function Oc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cc(e, n);
        }
        function Ac(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Cc(e, n);
        }
        function Tc(e, t) {
          return qe(e, t);
        }
        function Pc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Rc(e, t, n, r) {
          return new Pc(e, t, n, r);
        }
        function Lc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ic(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Rc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function _c(e, t, n, r, a, o) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Lc(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case N:
                return Mc(n.children, a, o, t);
              case k:
                (l = 8), (a |= 8);
                break;
              case S:
                return (
                  ((e = Rc(12, n, t, 2 | a)).elementType = S), (e.lanes = o), e
                );
              case A:
                return (
                  ((e = Rc(13, n, t, a)).elementType = A), (e.lanes = o), e
                );
              case T:
                return (
                  ((e = Rc(19, n, t, a)).elementType = T), (e.lanes = o), e
                );
              case L:
                return zc(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case E:
                      l = 10;
                      break e;
                    case C:
                      l = 9;
                      break e;
                    case O:
                      l = 11;
                      break e;
                    case P:
                      l = 14;
                      break e;
                    case R:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Rc(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Mc(e, t, n, r) {
          return ((e = Rc(7, e, r, t)).lanes = n), e;
        }
        function zc(e, t, n, r) {
          return (
            ((e = Rc(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Dc(e, t, n) {
          return ((e = Rc(6, e, null, t)).lanes = n), e;
        }
        function Fc(e, t, n) {
          return (
            ((t = Rc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Uc(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Hc(e, t, n, r, a, i, o, l, s) {
          return (
            (e = new Uc(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Rc(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Pi(i),
            e
          );
        }
        function Bc(e) {
          if (!e) return Ca;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ra(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ra(n)) return _a(e, n, t);
          }
          return t;
        }
        function Wc(e, t, n, r, a, i, o, l, s) {
          return (
            ((e = Hc(n, r, !0, e, 0, i, 0, l, s)).context = Bc(null)),
            (n = e.current),
            ((i = Li((r = tc()), (a = nc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ii(n, i, a),
            (e.current.lanes = a),
            vt(e, a, r),
            ac(e, r),
            e
          );
        }
        function Gc(e, t, n, r) {
          var a = t.current,
            i = tc(),
            o = nc(a);
          return (
            (n = Bc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Li(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ii(a, t, o)) && (rc(e, a, o, i), _i(e, a, o)),
            o
          );
        }
        function Qc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Vc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qc(e, t) {
          Vc(e, t), (e = e.alternate) && Vc(e, t);
        }
        ks = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Aa.current) xl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Tl(t), hi();
                        break;
                      case 5:
                        io(t);
                        break;
                      case 1:
                        Ra(t.type) && Ma(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ea(vi, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ea(lo, 1 & lo.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Dl(e, t, n)
                            : (Ea(lo, 1 & lo.current),
                              null !== (e = Ql(e, t, n)) ? e.sibling : null);
                        Ea(lo, 1 & lo.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Wl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ea(lo, lo.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Sl(e, t, n);
                    }
                    return Ql(e, t, n);
                  })(e, t, n)
                );
              xl = 0 !== (131072 & e.flags);
            }
          else (xl = !1), ai && 0 !== (1048576 & t.flags) && $a(t, Va, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Gl(e, t), (e = t.pendingProps);
              var a = Pa(t, Oa.current);
              ki(t, n), (a = ko(null, t, r, e, a, n));
              var o = So();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(r) ? ((o = !0), Ma(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Pi(t),
                    (a.updater = Hi),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Qi(t, r, e, n),
                    (t = Al(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ai && o && ei(t),
                    wl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Gl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Lc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === O) return 11;
                        if (e === P) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gi(r, e)),
                  a)
                ) {
                  case 0:
                    t = Cl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ol(null, t, r, e, n);
                    break e;
                  case 11:
                    t = jl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Nl(null, t, r, gi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Cl(e, t, r, (a = t.elementType === r ? a : gi(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ol(e, t, r, (a = t.elementType === r ? a : gi(r, a)), n)
              );
            case 3:
              e: {
                if ((Tl(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Ri(e, t),
                  zi(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Pl(e, t, r, n, (a = ul(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Pl(e, t, r, n, (a = ul(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = ca(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = Xi(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((hi(), r === a)) {
                    t = Ql(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                io(t),
                null === e && ci(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                El(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ci(t), null;
            case 13:
              return Dl(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ji(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                jl(e, t, r, (a = t.elementType === r ? a : gi(r, a)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (l = a.value),
                  Ea(vi, r._currentValue),
                  (r._currentValue = l),
                  null !== o)
                )
                  if (lr(o.value, l)) {
                    if (o.children === a.children && !Aa.current) {
                      t = Ql(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        l = o.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === o.tag) {
                              (c = Li(-1, n & -n)).tag = 2;
                              var u = o.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (o.lanes |= n),
                              null !== (c = o.alternate) && (c.lanes |= n),
                              Ni(o.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === o.tag)
                        l = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (l = o.return)) throw Error(i(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Ni(l, n, t),
                          (l = o.sibling);
                      } else l = o.child;
                      if (null !== l) l.return = o;
                      else
                        for (l = o; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (o = l.sibling)) {
                            (o.return = l.return), (l = o);
                            break;
                          }
                          l = l.return;
                        }
                      o = l;
                    }
                wl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                ki(t, n),
                (r = r((a = Si(a)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = gi((r = t.type), t.pendingProps)),
                Nl(e, t, r, (a = gi(r.type, a)), n)
              );
            case 15:
              return kl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : gi(r, a)),
                Gl(e, t),
                (t.tag = 1),
                Ra(r) ? ((e = !0), Ma(t)) : (e = !1),
                ki(t, n),
                Wi(t, r, a),
                Qi(t, r, a, n),
                Al(null, t, r, !0, e, n)
              );
            case 19:
              return Wl(e, t, n);
            case 22:
              return Sl(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Yc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Kc(e) {
          this._internalRoot = e;
        }
        function Jc(e) {
          this._internalRoot = e;
        }
        function Xc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $c() {}
        function eu(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = Qc(o);
                l.call(e);
              };
            }
            Gc(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Qc(o);
                    i.call(e);
                  };
                }
                var o = Wc(t, r, e, 0, null, !1, 0, "", $c);
                return (
                  (e._reactRootContainer = o),
                  (e[pa] = o.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  dc(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Qc(s);
                  l.call(e);
                };
              }
              var s = Hc(e, 0, !1, null, 0, !1, 0, "", $c);
              return (
                (e._reactRootContainer = s),
                (e[pa] = s.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                dc(function () {
                  Gc(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Qc(o);
        }
        (Jc.prototype.render = Kc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Gc(e, t, null, null);
          }),
          (Jc.prototype.unmount = Kc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                dc(function () {
                  Gc(null, e, null, null);
                }),
                  (t[pa] = null);
              }
            }),
          (Jc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = kt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && zt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ac(t, Xe()),
                    0 === (6 & As) && ((Ws = Xe() + 500), Ba()));
                }
                break;
              case 13:
                dc(function () {
                  var t = Ai(e, 1);
                  if (null !== t) {
                    var n = tc();
                    rc(t, e, 1, n);
                  }
                }),
                  qc(e, 1);
            }
          }),
          (jt = function (e) {
            if (13 === e.tag) {
              var t = Ai(e, 134217728);
              if (null !== t) rc(t, e, 134217728, tc());
              qc(e, 134217728);
            }
          }),
          (Nt = function (e) {
            if (13 === e.tag) {
              var t = nc(e),
                n = Ai(e, t);
              if (null !== n) rc(n, e, t, tc());
              qc(e, t);
            }
          }),
          (kt = function () {
            return bt;
          }),
          (St = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (je = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(i(90));
                      q(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Oe = uc),
          (Ae = dc);
        var tu = {
            usingClientEntryPoint: !1,
            Events: [ba, xa, wa, Ee, Ce, uc],
          },
          nu = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          ru = {
            bundleType: nu.bundleType,
            version: nu.version,
            rendererPackageName: nu.rendererPackageName,
            rendererConfig: nu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Qe(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!au.isDisabled && au.supportsFiber)
            try {
              (at = au.inject(ru)), (it = au);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xc(t)) throw Error(i(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: j,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xc(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = Yc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Hc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[pa] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Kc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = Qe(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return dc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zc(t)) throw Error(i(200));
            return eu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xc(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              l = Yc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Wc(t, null, e, 1, null != n ? n : null, a, 0, o, l)),
              (e[pa] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Jc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zc(t)) throw Error(i(200));
            return eu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zc(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (dc(function () {
                eu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pa] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zc(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return eu(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      77: function (e) {
        var t = "undefined" !== typeof Element,
          n = "function" === typeof Map,
          r = "function" === typeof Set,
          a = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
        function i(e, o) {
          if (e === o) return !0;
          if (e && o && "object" == typeof e && "object" == typeof o) {
            if (e.constructor !== o.constructor) return !1;
            var l, s, c, u;
            if (Array.isArray(e)) {
              if ((l = e.length) != o.length) return !1;
              for (s = l; 0 !== s--; ) if (!i(e[s], o[s])) return !1;
              return !0;
            }
            if (n && e instanceof Map && o instanceof Map) {
              if (e.size !== o.size) return !1;
              for (u = e.entries(); !(s = u.next()).done; )
                if (!o.has(s.value[0])) return !1;
              for (u = e.entries(); !(s = u.next()).done; )
                if (!i(s.value[1], o.get(s.value[0]))) return !1;
              return !0;
            }
            if (r && e instanceof Set && o instanceof Set) {
              if (e.size !== o.size) return !1;
              for (u = e.entries(); !(s = u.next()).done; )
                if (!o.has(s.value[0])) return !1;
              return !0;
            }
            if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
              if ((l = e.length) != o.length) return !1;
              for (s = l; 0 !== s--; ) if (e[s] !== o[s]) return !1;
              return !0;
            }
            if (e.constructor === RegExp)
              return e.source === o.source && e.flags === o.flags;
            if (
              e.valueOf !== Object.prototype.valueOf &&
              "function" === typeof e.valueOf &&
              "function" === typeof o.valueOf
            )
              return e.valueOf() === o.valueOf();
            if (
              e.toString !== Object.prototype.toString &&
              "function" === typeof e.toString &&
              "function" === typeof o.toString
            )
              return e.toString() === o.toString();
            if ((l = (c = Object.keys(e)).length) !== Object.keys(o).length)
              return !1;
            for (s = l; 0 !== s--; )
              if (!Object.prototype.hasOwnProperty.call(o, c[s])) return !1;
            if (t && e instanceof Element) return !1;
            for (s = l; 0 !== s--; )
              if (
                (("_owner" !== c[s] && "__v" !== c[s] && "__o" !== c[s]) ||
                  !e.$$typeof) &&
                !i(e[c[s]], o[c[s]])
              )
                return !1;
            return !0;
          }
          return e !== e && o !== o;
        }
        e.exports = function (e, t) {
          try {
            return i(e, t);
          } catch (n) {
            if ((n.message || "").match(/stack|recursion/i))
              return (
                console.warn("react-fast-compare cannot handle circular refs"),
                !1
              );
            throw n;
          }
        };
      },
      475: function (e, t, n) {
        "use strict";
        var r,
          a = n(791),
          i =
            (r = a) && "object" === typeof r && "default" in r ? r.default : r;
        function o(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var l = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = function (e, t, n) {
          if ("function" !== typeof e)
            throw new Error("Expected reducePropsToState to be a function.");
          if ("function" !== typeof t)
            throw new Error(
              "Expected handleStateChangeOnClient to be a function."
            );
          if ("undefined" !== typeof n && "function" !== typeof n)
            throw new Error(
              "Expected mapStateOnServer to either be undefined or a function."
            );
          return function (r) {
            if ("function" !== typeof r)
              throw new Error(
                "Expected WrappedComponent to be a React component."
              );
            var s,
              c = [];
            function u() {
              (s = e(
                c.map(function (e) {
                  return e.props;
                })
              )),
                d.canUseDOM ? t(s) : n && (s = n(s));
            }
            var d = (function (e) {
              var t, n;
              function a() {
                return e.apply(this, arguments) || this;
              }
              (n = e),
                ((t = a).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n),
                (a.peek = function () {
                  return s;
                }),
                (a.rewind = function () {
                  if (a.canUseDOM)
                    throw new Error(
                      "You may only call rewind() on the server. Call peek() to read the current state."
                    );
                  var e = s;
                  return (s = void 0), (c = []), e;
                });
              var o = a.prototype;
              return (
                (o.UNSAFE_componentWillMount = function () {
                  c.push(this), u();
                }),
                (o.componentDidUpdate = function () {
                  u();
                }),
                (o.componentWillUnmount = function () {
                  var e = c.indexOf(this);
                  c.splice(e, 1), u();
                }),
                (o.render = function () {
                  return i.createElement(r, this.props);
                }),
                a
              );
            })(a.PureComponent);
            return (
              o(
                d,
                "displayName",
                "SideEffect(" +
                  (function (e) {
                    return e.displayName || e.name || "Component";
                  })(r) +
                  ")"
              ),
              o(d, "canUseDOM", l),
              d
            );
          };
        };
      },
      493: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.useIsVisible = void 0);
        var r = n(791);
        t.useIsVisible = function (e) {
          var t = e.offset,
            n = void 0 === t ? 0 : t,
            a = e.persistent,
            i = void 0 === a || a,
            o = e.minVisibleHeight,
            l = void 0 === o ? 0 : o,
            s = (0, r.useState)(!1),
            c = s[0],
            u = s[1],
            d = (0, r.useRef)(null),
            f = function () {
              if (d.current) {
                var e = d.current.getBoundingClientRect().top;
                e + n >= 0 && e + l - n <= window.innerHeight
                  ? u(!0)
                  : i || u(!1);
              }
            };
          return (
            (0, r.useEffect)(function () {
              return (
                f(),
                document.addEventListener("scroll", f, !0),
                function () {
                  return document.removeEventListener("scroll", f, !0);
                }
              );
            }),
            [c, d]
          );
        };
      },
      915: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var a in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, a) &&
                          (e[a] = t[a]);
                    return e;
                  }),
                r.apply(this, arguments)
              );
            },
          a =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FadeIn = void 0);
        var i = a(n(791)),
          o = n(493),
          l = n(908),
          s = { delayInMilliseconds: 0, durationInMilliseconds: 1200 };
        t.FadeIn = function (e) {
          var t,
            n = r(r({}, s), e),
            a = n.from,
            c = n.triggerOffset,
            u = n.positionOffset,
            d = n.delayInMilliseconds,
            f = n.durationInMilliseconds,
            h = (0, o.useIsVisible)({ offset: c }),
            p = h[0],
            m = h[1],
            g = (0, l.getFromPosition)(a);
          return i.default.createElement(
            "div",
            {
              style:
                ((t = { position: "relative" }),
                (t[g] = p ? 0 : u),
                (t.opacity = p ? 1 : 0),
                (t.transition = ""
                  .concat(g, " ")
                  .concat(f, "ms, opacity ")
                  .concat(f, "ms")),
                (t.transitionDelay = "".concat(d, "ms")),
                t),
              ref: m,
            },
            e.children
          );
        };
      },
      908: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getFromPosition = void 0),
          (t.getFromPosition = function (e) {
            switch (e) {
              case "bottom":
                return "top";
              case "top":
                return "bottom";
              case "left":
                return "right";
              case "right":
                return "left";
            }
          });
      },
      615: function (e, t, n) {
        "use strict";
        t.U = void 0;
        var r = n(915);
        Object.defineProperty(t, "U", {
          enumerable: !0,
          get: function () {
            return r.FadeIn;
          },
        });
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            i = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            o.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: u,
            props: i,
            _owner: l.current,
          };
        }
        (t.Fragment = i), (t.jsx = c), (t.jsxs = c);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), m(x, v.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          j = Object.prototype.hasOwnProperty,
          N = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, r) {
          var a,
            i = {},
            o = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              j.call(t, a) && !k.hasOwnProperty(a) && (i[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) i.children = r;
          else if (1 < s) {
            for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
            i.children = c;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === i[a] && (i[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: l,
            props: i,
            _owner: N.current,
          };
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function O(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function A(e, t, a, i, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = e))),
              (e = "" === i ? "." + O(s, 0) : i),
              w(o)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  A(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (E(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (s && s.key === o.key)
                          ? ""
                          : ("" + o.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (i = "" === i ? "." : i + ":"), w(e)))
            for (var c = 0; c < e.length; c++) {
              var u = i + O((l = e[c]), c);
              s += A(l, t, a, u, o);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (h && e[h]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(l = e.next()).done; )
              s += A((l = l.value), t, a, (u = i + O(l, c++)), o);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            A(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          L = { transition: null },
          I = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: N,
          };
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              i = e.key,
              o = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (l = N.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                j.call(t, c) &&
                  !k.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              s = Array(c);
              for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                c = l + 1,
                u = e[c];
              if (0 > i(s, n))
                c < a && 0 > i(u, s)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(c < a && 0 > i(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          h = 3,
          p = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) a(u);
            else {
              if (!(t.startTime <= e)) break;
              a(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function w(e) {
          if (((g = !1), x(e), !m))
            if (null !== r(c)) (m = !0), L(j);
            else {
              var t = r(u);
              null !== t && I(w, t.startTime - e);
            }
        }
        function j(e, n) {
          (m = !1), g && ((g = !1), y(E), (E = -1)), (p = !0);
          var i = h;
          try {
            for (
              x(n), f = r(c);
              null !== f && (!(f.expirationTime > n) || (e && !A()));

            ) {
              var o = f.callback;
              if ("function" === typeof o) {
                (f.callback = null), (h = f.priorityLevel);
                var l = o(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (f.callback = l)
                    : f === r(c) && a(c),
                  x(n);
              } else a(c);
              f = r(c);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(u);
              null !== d && I(w, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (h = i), (p = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var N,
          k = !1,
          S = null,
          E = -1,
          C = 5,
          O = -1;
        function A() {
          return !(t.unstable_now() - O < C);
        }
        function T() {
          if (null !== S) {
            var e = t.unstable_now();
            O = e;
            var n = !0;
            try {
              n = S(!0, e);
            } finally {
              n ? N() : ((k = !1), (S = null));
            }
          } else k = !1;
        }
        if ("function" === typeof b)
          N = function () {
            b(T);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var P = new MessageChannel(),
            R = P.port2;
          (P.port1.onmessage = T),
            (N = function () {
              R.postMessage(null);
            });
        } else
          N = function () {
            v(T, 0);
          };
        function L(e) {
          (S = e), k || ((k = !0), N());
        }
        function I(e, n) {
          E = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || p || ((m = !0), L(j));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = h;
            }
            var n = h;
            h = t;
            try {
              return e();
            } finally {
              h = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = h;
            h = e;
            try {
              return t();
            } finally {
              h = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (l = i + l),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (g ? (y(E), (E = -1)) : (g = !0), I(w, i - o)))
                : ((e.sortIndex = l), n(c, e), m || p || ((m = !0), L(j))),
              e
            );
          }),
          (t.unstable_shouldYield = A),
          (t.unstable_wrapCallback = function (e) {
            var t = h;
            return function () {
              var n = h;
              h = t;
              try {
                return e.apply(this, arguments);
              } finally {
                h = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = e),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var i = Object.create(null);
        n.r(i);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach(function (e) {
            o[e] = function () {
              return r[e];
            };
          });
        return (
          (o.default = function () {
            return r;
          }),
          n.d(i, o),
          i
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".fa6e4515.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "healthgo:";
      n.l = function (r, a, i, o) {
        if (e[r]) e[r].push(a);
        else {
          var l, s;
          if (void 0 !== i)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var d = c[u];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + i
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + i),
            (l.src = r)),
            (e[r] = [a]);
          var f = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(h);
              var a = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                a &&
                  a.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            h = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var i = new Promise(function (n, r) {
              a = e[t] = [n, r];
            });
            r.push((a[2] = i));
            var o = n.p + n.u(t),
              l = new Error();
            n.l(
              o,
              function (r) {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = i),
                    (l.request = o),
                    a[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var a,
            i,
            o = r[0],
            l = r[1],
            s = r[2],
            c = 0;
          if (
            o.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (s) s(n);
          }
          for (t && t(r); c < o.length; c++)
            (i = o[c]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        r = (self.webpackChunkhealthgo = self.webpackChunkhealthgo || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      "use strict";
      var e,
        t = n(791),
        r = n.t(t, 2),
        a = n(250);
      function i(e) {
        if (Array.isArray(e)) return e;
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function l(e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      }
      function s() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function c(e, t) {
        return (
          i(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i,
                o,
                l = [],
                s = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    s = !0
                  );
              } catch (u) {
                (c = !0), (a = u);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          l(e, t) ||
          s()
        );
      }
      function u(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function d(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          u(e) ||
          l(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function h(e) {
        return (
          (h =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          h(e)
        );
      }
      function p(e) {
        var t = (function (e, t) {
          if ("object" !== h(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== h(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === h(t) ? t : String(t);
      }
      function m(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, p(r.key), r);
        }
      }
      function g(e, t, n) {
        return (
          t && m(e.prototype, t),
          n && m(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function v(e, t) {
        return (
          (v = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          v(e, t)
        );
      }
      function y(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && v(e, t);
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      function x() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function w(e, t) {
        if (t && ("object" === h(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function j(e) {
        var t = x();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var a = b(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return w(this, n);
        };
      }
      function N(e, t, n) {
        return (
          (N = x()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && v(a, n.prototype), a;
              }),
          N.apply(null, arguments)
        );
      }
      function k(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (k = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return N(e, arguments, b(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              v(r, e)
            );
          }),
          k(e)
        );
      }
      function S() {
        return (
          (S = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          S.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var E,
        C = "popstate";
      function O(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function A(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function T(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          S(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? R(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function P(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          i = e.hash,
          o = void 0 === i ? "" : i;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function R(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function L(t, n, r, a) {
        void 0 === a && (a = {});
        var i = a,
          o = i.window,
          l = void 0 === o ? document.defaultView : o,
          s = i.v5Compat,
          c = void 0 !== s && s,
          u = l.history,
          d = e.Pop,
          f = null,
          h = p();
        function p() {
          return (u.state || { idx: null }).idx;
        }
        function m() {
          d = e.Pop;
          var t = p(),
            n = null == t ? null : t - h;
          (h = t), f && f({ action: d, location: v.location, delta: n });
        }
        function g(e) {
          var t =
              "null" !== l.location.origin
                ? l.location.origin
                : l.location.href,
            n = "string" === typeof e ? e : P(e);
          return (
            O(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == h && ((h = 0), u.replaceState(S({}, u.state, { idx: h }), ""));
        var v = {
          get action() {
            return d;
          },
          get location() {
            return t(l, u);
          },
          listen: function (e) {
            if (f)
              throw new Error("A history only accepts one active listener");
            return (
              l.addEventListener(C, m),
              (f = e),
              function () {
                l.removeEventListener(C, m), (f = null);
              }
            );
          },
          createHref: function (e) {
            return n(l, e);
          },
          createURL: g,
          encodeLocation: function (e) {
            var t = g(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            d = e.Push;
            var a = T(v.location, t, n);
            r && r(a, t);
            var i = A(a, (h = p() + 1)),
              o = v.createHref(a);
            try {
              u.pushState(i, "", o);
            } catch (s) {
              l.location.assign(o);
            }
            c && f && f({ action: d, location: v.location, delta: 1 });
          },
          replace: function (t, n) {
            d = e.Replace;
            var a = T(v.location, t, n);
            r && r(a, t);
            var i = A(a, (h = p())),
              o = v.createHref(a);
            u.replaceState(i, "", o),
              c && f && f({ action: d, location: v.location, delta: 0 });
          },
          go: function (e) {
            return u.go(e);
          },
        };
        return v;
      }
      function I(e, t, n) {
        void 0 === n && (n = "/");
        var r = Y(("string" === typeof t ? R(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = _(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var i = null, o = 0; null == i && o < a.length; ++o)
          i = Q(a[o], q(r));
        return i;
      }
      function _(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var a = function (e, a, i) {
          var o = {
            relativePath: void 0 === i ? e.path || "" : i,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          o.relativePath.startsWith("/") &&
            (O(
              o.relativePath.startsWith(r),
              'Absolute route path "' +
                o.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (o.relativePath = o.relativePath.slice(r.length)));
          var l = $([r, o.relativePath]),
            s = n.concat(o);
          e.children &&
            e.children.length > 0 &&
            (O(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            _(e.children, t, s, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: G(l, e.index), routesMeta: s });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                i = (function (e, t) {
                  var n =
                    ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                  if (!n) {
                    if (
                      Array.isArray(e) ||
                      (n = l(e)) ||
                      (t && e && "number" === typeof e.length)
                    ) {
                      n && (e = n);
                      var r = 0,
                        a = function () {};
                      return {
                        s: a,
                        n: function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: a,
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }
                  var i,
                    o = !0,
                    s = !1;
                  return {
                    s: function () {
                      n = n.call(e);
                    },
                    n: function () {
                      var e = n.next();
                      return (o = e.done), e;
                    },
                    e: function (e) {
                      (s = !0), (i = e);
                    },
                    f: function () {
                      try {
                        o || null == n.return || n.return();
                      } finally {
                        if (s) throw i;
                      }
                    },
                  };
                })(M(e.path));
              try {
                for (i.s(); !(r = i.n()).done; ) {
                  var o = r.value;
                  a(e, t, o);
                }
              } catch (s) {
                i.e(s);
              } finally {
                i.f();
              }
            } else a(e, t);
          }),
          t
        );
      }
      function M(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = i((n = t)) || u(n) || l(n) || s(),
          a = r[0],
          o = r.slice(1),
          c = a.endsWith("?"),
          f = a.replace(/\?$/, "");
        if (0 === o.length) return c ? [f, ""] : [f];
        var h = M(o.join("/")),
          p = [];
        return (
          p.push.apply(
            p,
            d(
              h.map(function (e) {
                return "" === e ? f : [f, e].join("/");
              })
            )
          ),
          c && p.push.apply(p, d(h)),
          p.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(E || (E = {}));
      var z = /^:\w+$/,
        D = 3,
        F = 2,
        U = 1,
        H = 10,
        B = -2,
        W = function (e) {
          return "*" === e;
        };
      function G(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(W) && (r += B),
          t && (r += F),
          n
            .filter(function (e) {
              return !W(e);
            })
            .reduce(function (e, t) {
              return e + (z.test(t) ? D : "" === t ? U : H);
            }, r)
        );
      }
      function Q(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", i = [], o = 0;
          o < n.length;
          ++o
        ) {
          var l = n[o],
            s = o === n.length - 1,
            c = "/" === a ? t : t.slice(a.length) || "/",
            u = V(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
              c
            );
          if (!u) return null;
          Object.assign(r, u.params);
          var d = l.route;
          i.push({
            params: r,
            pathname: $([a, u.pathname]),
            pathnameBase: ee($([a, u.pathnameBase])),
            route: d,
          }),
            "/" !== u.pathnameBase && (a = $([a, u.pathnameBase]));
        }
        return i;
      }
      function V(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            K(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var i = new RegExp(a, t ? void 0 : "i");
            return [i, r];
          })(e.path, e.caseSensitive, e.end),
          r = c(n, 2),
          a = r[0],
          i = r[1],
          o = t.match(a);
        if (!o) return null;
        var l = o[0],
          s = l.replace(/(.)\/+$/, "$1"),
          u = o.slice(1),
          d = i.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = u[n] || "";
              s = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    K(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(u[n] || "", t)),
              e
            );
          }, {});
        return { params: d, pathname: l, pathnameBase: s, pattern: e };
      }
      function q(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            K(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function Y(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function K(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function J(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function X(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function Z(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = R(e))
            : (O(
                !(a = S({}, e)).pathname || !a.pathname.includes("?"),
                J("?", "pathname", "search", a)
              ),
              O(
                !a.pathname || !a.pathname.includes("#"),
                J("#", "pathname", "hash", a)
              ),
              O(
                !a.search || !a.search.includes("#"),
                J("#", "search", "hash", a)
              ));
        var i,
          o = "" === e || "" === a.pathname,
          l = o ? "/" : a.pathname;
        if (r || null == l) i = n;
        else {
          var s = t.length - 1;
          if (l.startsWith("..")) {
            for (var c = l.split("/"); ".." === c[0]; ) c.shift(), (s -= 1);
            a.pathname = c.join("/");
          }
          i = s >= 0 ? t[s] : "/";
        }
        var u = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? R(e) : e,
              r = n.pathname,
              a = n.search,
              i = void 0 === a ? "" : a,
              o = n.hash,
              l = void 0 === o ? "" : o,
              s = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: s, search: te(i), hash: ne(l) };
          })(a, i),
          d = l && "/" !== l && l.endsWith("/"),
          f = (o || "." === l) && n.endsWith("/");
        return u.pathname.endsWith("/") || (!d && !f) || (u.pathname += "/"), u;
      }
      var $ = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        ee = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        te = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        ne = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        re = (function (e) {
          y(n, e);
          var t = j(n);
          function n() {
            return f(this, n), t.apply(this, arguments);
          }
          return g(n);
        })(k(Error));
      function ae(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      var ie = ["post", "put", "patch", "delete"],
        oe = (new Set(ie), ["get"].concat(ie));
      new Set(oe),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      Symbol("deferred");
      function le() {
        return (
          (le = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          le.apply(this, arguments)
        );
      }
      var se =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        ce = t.useState,
        ue = t.useEffect,
        de = t.useLayoutEffect,
        fe = t.useDebugValue;
      function he(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !se(n, r);
        } catch (a) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var pe = t.createContext(null);
      var me = t.createContext(null);
      var ge = t.createContext(null);
      var ve = t.createContext(null);
      var ye = t.createContext(null);
      var be = t.createContext({ outlet: null, matches: [] });
      var xe = t.createContext(null);
      function we() {
        return null != t.useContext(ye);
      }
      function je() {
        return we() || O(!1), t.useContext(ye).location;
      }
      function Ne() {
        we() || O(!1);
        var e = t.useContext(ve),
          n = e.basename,
          r = e.navigator,
          a = t.useContext(be).matches,
          i = je().pathname,
          o = JSON.stringify(
            X(a).map(function (e) {
              return e.pathnameBase;
            })
          ),
          l = t.useRef(!1);
        return (
          t.useEffect(function () {
            l.current = !0;
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), l.current))
                if ("number" !== typeof e) {
                  var a = Z(e, JSON.parse(o), i, "path" === t.relative);
                  "/" !== n &&
                    (a.pathname = "/" === a.pathname ? n : $([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state, t);
                } else r.go(e);
            },
            [n, r, o, i]
          )
        );
      }
      function ke(e, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = t.useContext(be).matches,
          i = je().pathname,
          o = JSON.stringify(
            X(a).map(function (e) {
              return e.pathnameBase;
            })
          );
        return t.useMemo(
          function () {
            return Z(e, JSON.parse(o), i, "path" === r);
          },
          [e, o, i, r]
        );
      }
      function Se() {
        var e = (function () {
            var e,
              n = t.useContext(xe),
              r = Pe(Ce.UseRouteError),
              a = Re(Ce.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = ae(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          i = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: i }, r) : null,
          null
        );
      }
      var Ee,
        Ce,
        Oe = (function (e) {
          y(r, e);
          var n = j(r);
          function r(e) {
            var t;
            return (
              f(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            g(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(
                          be.Provider,
                          { value: this.props.routeContext },
                          t.createElement(xe.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function Ae(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          i = t.useContext(pe);
        return (
          i &&
            i.static &&
            i.staticContext &&
            r.route.errorElement &&
            (i.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(be.Provider, { value: n }, a)
        );
      }
      function Te(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var a = e,
          i = null == r ? void 0 : r.errors;
        if (null != i) {
          var o = a.findIndex(function (e) {
            return e.route.id && (null == i ? void 0 : i[e.route.id]);
          });
          o >= 0 || O(!1), (a = a.slice(0, Math.min(a.length, o + 1)));
        }
        return a.reduceRight(function (e, o, l) {
          var s = o.route.id ? (null == i ? void 0 : i[o.route.id]) : null,
            c = r ? o.route.errorElement || t.createElement(Se, null) : null,
            u = n.concat(a.slice(0, l + 1)),
            d = function () {
              return t.createElement(
                Ae,
                { match: o, routeContext: { outlet: e, matches: u } },
                s ? c : void 0 !== o.route.element ? o.route.element : e
              );
            };
          return r && (o.route.errorElement || 0 === l)
            ? t.createElement(Oe, {
                location: r.location,
                component: c,
                error: s,
                children: d(),
                routeContext: { outlet: null, matches: u },
              })
            : d();
        }, null);
      }
      function Pe(e) {
        var n = t.useContext(me);
        return n || O(!1), n;
      }
      function Re(e) {
        var n = (function (e) {
            var n = t.useContext(be);
            return n || O(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || O(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
      })(Ee || (Ee = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(Ce || (Ce = {}));
      var Le;
      function Ie(e) {
        O(!1);
      }
      function _e(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          i = n.children,
          o = void 0 === i ? null : i,
          l = n.location,
          s = n.navigationType,
          c = void 0 === s ? e.Pop : s,
          u = n.navigator,
          d = n.static,
          f = void 0 !== d && d;
        we() && O(!1);
        var h = a.replace(/^\/*/, "/"),
          p = t.useMemo(
            function () {
              return { basename: h, navigator: u, static: f };
            },
            [h, u, f]
          );
        "string" === typeof l && (l = R(l));
        var m = l,
          g = m.pathname,
          v = void 0 === g ? "/" : g,
          y = m.search,
          b = void 0 === y ? "" : y,
          x = m.hash,
          w = void 0 === x ? "" : x,
          j = m.state,
          N = void 0 === j ? null : j,
          k = m.key,
          S = void 0 === k ? "default" : k,
          E = t.useMemo(
            function () {
              var e = Y(v, h);
              return null == e
                ? null
                : { pathname: e, search: b, hash: w, state: N, key: S };
            },
            [h, v, b, w, N, S]
          );
        return null == E
          ? null
          : t.createElement(
              ve.Provider,
              { value: p },
              t.createElement(ye.Provider, {
                children: o,
                value: { location: E, navigationType: c },
              })
            );
      }
      function Me(n) {
        var r = n.children,
          a = n.location,
          i = t.useContext(pe);
        return (function (n, r) {
          we() || O(!1);
          var a,
            i = t.useContext(ve).navigator,
            o = t.useContext(me),
            l = t.useContext(be).matches,
            s = l[l.length - 1],
            c = s ? s.params : {},
            u = (s && s.pathname, s ? s.pathnameBase : "/"),
            d = (s && s.route, je());
          if (r) {
            var f,
              h = "string" === typeof r ? R(r) : r;
            "/" === u ||
              (null == (f = h.pathname) ? void 0 : f.startsWith(u)) ||
              O(!1),
              (a = h);
          } else a = d;
          var p = a.pathname || "/",
            m = I(n, { pathname: "/" === u ? p : p.slice(u.length) || "/" }),
            g = Te(
              m &&
                m.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, c, e.params),
                    pathname: $([
                      u,
                      i.encodeLocation
                        ? i.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? u
                        : $([
                            u,
                            i.encodeLocation
                              ? i.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  });
                }),
              l,
              o || void 0
            );
          return r && g
            ? t.createElement(
                ye.Provider,
                {
                  value: {
                    location: le(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      a
                    ),
                    navigationType: e.Pop,
                  },
                },
                g
              )
            : g;
        })(i && !r ? i.router.routes : De(r), a);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Le || (Le = {}));
      var ze = new Promise(function () {});
      t.Component;
      function De(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== Ie && O(!1),
                  e.props.index && e.props.children && O(!1);
                var i = [].concat(d(n), [a]),
                  o = {
                    id: e.props.id || i.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (o.children = De(e.props.children, i)),
                  r.push(o);
              } else r.push.apply(r, De(e.props.children, n));
          }),
          r
        );
      }
      function Fe() {
        return (
          (Fe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Fe.apply(this, arguments)
        );
      }
      function Ue(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var He = [
          "onClick",
          "relative",
          "reloadDocument",
          "replace",
          "state",
          "target",
          "to",
          "preventScrollReset",
        ],
        Be = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "children",
        ];
      function We(e) {
        var n,
          r = e.basename,
          a = e.children,
          i = e.window,
          o = t.useRef();
        null == o.current &&
          (o.current =
            (void 0 === (n = { window: i, v5Compat: !0 }) && (n = {}),
            L(
              function (e, t) {
                var n = e.location;
                return T(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : P(t);
              },
              null,
              n
            )));
        var l = o.current,
          s = c(t.useState({ action: l.action, location: l.location }), 2),
          u = s[0],
          d = s[1];
        return (
          t.useLayoutEffect(
            function () {
              return l.listen(d);
            },
            [l]
          ),
          t.createElement(_e, {
            basename: r,
            children: a,
            location: u.location,
            navigationType: u.action,
            navigator: l,
          })
        );
      }
      var Ge =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        Qe = t.forwardRef(function (e, n) {
          var r,
            a = e.onClick,
            i = e.relative,
            o = e.reloadDocument,
            l = e.replace,
            s = e.state,
            c = e.target,
            u = e.to,
            d = e.preventScrollReset,
            f = Ue(e, He),
            h = !1;
          if (
            Ge &&
            "string" === typeof u &&
            /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(u)
          ) {
            r = u;
            var p = new URL(window.location.href),
              m = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u);
            m.origin === p.origin
              ? (u = m.pathname + m.search + m.hash)
              : (h = !0);
          }
          var g = (function (e, n) {
              var r = (void 0 === n ? {} : n).relative;
              we() || O(!1);
              var a = t.useContext(ve),
                i = a.basename,
                o = a.navigator,
                l = ke(e, { relative: r }),
                s = l.hash,
                c = l.pathname,
                u = l.search,
                d = c;
              return (
                "/" !== i && (d = "/" === c ? i : $([i, c])),
                o.createHref({ pathname: d, search: u, hash: s })
              );
            })(u, { relative: i }),
            v = (function (e, n) {
              var r = void 0 === n ? {} : n,
                a = r.target,
                i = r.replace,
                o = r.state,
                l = r.preventScrollReset,
                s = r.relative,
                c = Ne(),
                u = je(),
                d = ke(e, { relative: s });
              return t.useCallback(
                function (t) {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, a)
                  ) {
                    t.preventDefault();
                    var n = void 0 !== i ? i : P(u) === P(d);
                    c(e, {
                      replace: n,
                      state: o,
                      preventScrollReset: l,
                      relative: s,
                    });
                  }
                },
                [u, c, d, i, o, a, e, l, s]
              );
            })(u, {
              replace: l,
              state: s,
              target: c,
              preventScrollReset: d,
              relative: i,
            });
          return t.createElement(
            "a",
            Fe({}, f, {
              href: r || g,
              onClick:
                h || o
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || v(e);
                    },
              ref: n,
              target: c,
            })
          );
        });
      var Ve = t.forwardRef(function (e, n) {
        var r = e["aria-current"],
          a = void 0 === r ? "page" : r,
          i = e.caseSensitive,
          o = void 0 !== i && i,
          l = e.className,
          s = void 0 === l ? "" : l,
          c = e.end,
          u = void 0 !== c && c,
          d = e.style,
          f = e.to,
          h = e.children,
          p = Ue(e, Be),
          m = ke(f, { relative: p.relative }),
          g = je(),
          v = t.useContext(me),
          y = t.useContext(ve).navigator,
          b = y.encodeLocation ? y.encodeLocation(m).pathname : m.pathname,
          x = g.pathname,
          w =
            v && v.navigation && v.navigation.location
              ? v.navigation.location.pathname
              : null;
        o ||
          ((x = x.toLowerCase()),
          (w = w ? w.toLowerCase() : null),
          (b = b.toLowerCase()));
        var j,
          N = x === b || (!u && x.startsWith(b) && "/" === x.charAt(b.length)),
          k =
            null != w &&
            (w === b || (!u && w.startsWith(b) && "/" === w.charAt(b.length))),
          S = N ? a : void 0;
        j =
          "function" === typeof s
            ? s({ isActive: N, isPending: k })
            : [s, N ? "active" : null, k ? "pending" : null]
                .filter(Boolean)
                .join(" ");
        var E = "function" === typeof d ? d({ isActive: N, isPending: k }) : d;
        return t.createElement(
          Qe,
          Fe({}, p, {
            "aria-current": S,
            className: j,
            ref: n,
            style: E,
            to: f,
          }),
          "function" === typeof h ? h({ isActive: N, isPending: k }) : h
        );
      });
      var qe, Ye;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(qe || (qe = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Ye || (Ye = {}));
      var Ke = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        Je = t.createContext && t.createContext(Ke),
        Xe = function () {
          return (
            (Xe =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            Xe.apply(this, arguments)
          );
        },
        Ze = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function $e(e) {
        return (
          e &&
          e.map(function (e, n) {
            return t.createElement(e.tag, Xe({ key: n }, e.attr), $e(e.child));
          })
        );
      }
      function et(e) {
        return function (n) {
          return t.createElement(
            tt,
            Xe({ attr: Xe({}, e.attr) }, n),
            $e(e.child)
          );
        };
      }
      function tt(e) {
        var n = function (n) {
          var r,
            a = e.attr,
            i = e.size,
            o = e.title,
            l = Ze(e, ["attr", "size", "title"]),
            s = i || n.size || "1em";
          return (
            n.className && (r = n.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            t.createElement(
              "svg",
              Xe(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                a,
                l,
                {
                  className: r,
                  style: Xe(
                    Xe({ color: e.color || n.color }, n.style),
                    e.style
                  ),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && t.createElement("title", null, o),
              e.children
            )
          );
        };
        return void 0 !== Je
          ? t.createElement(Je.Consumer, null, function (e) {
              return n(e);
            })
          : n(Ke);
      }
      function nt(e) {
        return et({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z",
              },
            },
          ],
        })(e);
      }
      function rt(e) {
        return et({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
              },
            },
          ],
        })(e);
      }
      function at(e) {
        return et({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
              },
            },
          ],
        })(e);
      }
      function it(e) {
        return et({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z",
              },
            },
          ],
        })(e);
      }
      function ot(e) {
        return et({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z",
              },
            },
          ],
        })(e);
      }
      function lt(e) {
        return et({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z",
              },
            },
          ],
        })(e);
      }
      function st(e) {
        return et({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
              },
            },
          ],
        })(e);
      }
      function ct(e) {
        return et({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
              },
            },
          ],
        })(e);
      }
      function ut(e) {
        return et({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z",
              },
            },
          ],
        })(e);
      }
      function dt(e) {
        return et({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
              },
            },
          ],
        })(e);
      }
      function ft(e) {
        return et({
          tag: "svg",
          attr: { viewBox: "0 0 352 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
              },
            },
          ],
        })(e);
      }
      function ht(e) {
        return et({
          tag: "svg",
          attr: { viewBox: "0 0 20 20", fill: "currentColor" },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                clipRule: "evenodd",
              },
            },
          ],
        })(e);
      }
      function pt(e) {
        return et({
          tag: "svg",
          attr: { viewBox: "0 0 20 20", fill: "currentColor" },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                clipRule: "evenodd",
              },
            },
          ],
        })(e);
      }
      var mt =
        n.p + "static/media/image15.cf46688ce43aa6eb44dbf855e1dbb0ba.svg";
      function gt(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      var vt,
        yt = Object.prototype.toString,
        bt = Object.getPrototypeOf,
        xt =
          ((vt = Object.create(null)),
          function (e) {
            var t = yt.call(e);
            return vt[t] || (vt[t] = t.slice(8, -1).toLowerCase());
          }),
        wt = function (e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return xt(t) === e;
            }
          );
        },
        jt = function (e) {
          return function (t) {
            return typeof t === e;
          };
        },
        Nt = Array.isArray,
        kt = jt("undefined");
      var St = wt("ArrayBuffer");
      var Et = jt("string"),
        Ct = jt("function"),
        Ot = jt("number"),
        At = function (e) {
          return null !== e && "object" === typeof e;
        },
        Tt = function (e) {
          if ("object" !== xt(e)) return !1;
          var t = bt(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        Pt = wt("Date"),
        Rt = wt("File"),
        Lt = wt("Blob"),
        It = wt("FileList"),
        _t = wt("URLSearchParams");
      function Mt(e, t) {
        var n,
          r,
          a = (
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          ).allOwnKeys,
          i = void 0 !== a && a;
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), Nt(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            var o,
              l = i ? Object.getOwnPropertyNames(e) : Object.keys(e),
              s = l.length;
            for (n = 0; n < s; n++) (o = l[n]), t.call(null, e[o], o, e);
          }
      }
      function zt(e, t) {
        t = t.toLowerCase();
        for (var n, r = Object.keys(e), a = r.length; a-- > 0; )
          if (t === (n = r[a]).toLowerCase()) return n;
        return null;
      }
      var Dt =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        Ft = function (e) {
          return !kt(e) && e !== Dt;
        };
      var Ut,
        Ht =
          ((Ut = "undefined" !== typeof Uint8Array && bt(Uint8Array)),
          function (e) {
            return Ut && e instanceof Ut;
          }),
        Bt = wt("HTMLFormElement"),
        Wt = (function (e) {
          var t = Object.prototype.hasOwnProperty;
          return function (e, n) {
            return t.call(e, n);
          };
        })(),
        Gt = wt("RegExp"),
        Qt = function (e, t) {
          var n = Object.getOwnPropertyDescriptors(e),
            r = {};
          Mt(n, function (n, a) {
            !1 !== t(n, a, e) && (r[a] = n);
          }),
            Object.defineProperties(e, r);
        },
        Vt = "abcdefghijklmnopqrstuvwxyz",
        qt = "0123456789",
        Yt = { DIGIT: qt, ALPHA: Vt, ALPHA_DIGIT: Vt + Vt.toUpperCase() + qt };
      var Kt = wt("AsyncFunction"),
        Jt = {
          isArray: Nt,
          isArrayBuffer: St,
          isBuffer: function (e) {
            return (
              null !== e &&
              !kt(e) &&
              null !== e.constructor &&
              !kt(e.constructor) &&
              Ct(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            var t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (Ct(e.append) &&
                  ("formdata" === (t = xt(e)) ||
                    ("object" === t &&
                      Ct(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && St(e.buffer);
          },
          isString: Et,
          isNumber: Ot,
          isBoolean: function (e) {
            return !0 === e || !1 === e;
          },
          isObject: At,
          isPlainObject: Tt,
          isUndefined: kt,
          isDate: Pt,
          isFile: Rt,
          isBlob: Lt,
          isRegExp: Gt,
          isFunction: Ct,
          isStream: function (e) {
            return At(e) && Ct(e.pipe);
          },
          isURLSearchParams: _t,
          isTypedArray: Ht,
          isFileList: It,
          forEach: Mt,
          merge: function e() {
            for (
              var t = ((Ft(this) && this) || {}).caseless,
                n = {},
                r = function (r, a) {
                  var i = (t && zt(n, a)) || a;
                  Tt(n[i]) && Tt(r)
                    ? (n[i] = e(n[i], r))
                    : Tt(r)
                    ? (n[i] = e({}, r))
                    : Nt(r)
                    ? (n[i] = r.slice())
                    : (n[i] = r);
                },
                a = 0,
                i = arguments.length;
              a < i;
              a++
            )
              arguments[a] && Mt(arguments[a], r);
            return n;
          },
          extend: function (e, t, n) {
            return (
              Mt(
                t,
                function (t, r) {
                  n && Ct(t) ? (e[r] = gt(t, n)) : (e[r] = t);
                },
                {
                  allOwnKeys: (arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {}
                  ).allOwnKeys,
                }
              ),
              e
            );
          },
          trim: function (e) {
            return e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, n, r) {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: function (e, t, n, r) {
            var a,
              i,
              o,
              l = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (i = (a = Object.getOwnPropertyNames(e)).length; i-- > 0; )
                (o = a[i]),
                  (r && !r(o, e, t)) || l[o] || ((t[o] = e[o]), (l[o] = !0));
              e = !1 !== n && bt(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: xt,
          kindOfTest: wt,
          endsWith: function (e, t, n) {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            var r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: function (e) {
            if (!e) return null;
            if (Nt(e)) return e;
            var t = e.length;
            if (!Ot(t)) return null;
            for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: function (e, t) {
            for (
              var n, r = (e && e[Symbol.iterator]).call(e);
              (n = r.next()) && !n.done;

            ) {
              var a = n.value;
              t.call(e, a[0], a[1]);
            }
          },
          matchAll: function (e, t) {
            for (var n, r = []; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: Bt,
          hasOwnProperty: Wt,
          hasOwnProp: Wt,
          reduceDescriptors: Qt,
          freezeMethods: function (e) {
            Qt(e, function (t, n) {
              if (Ct(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              var r = e[n];
              Ct(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = function () {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: function (e, t) {
            var n = {},
              r = function (e) {
                e.forEach(function (e) {
                  n[e] = !0;
                });
              };
            return Nt(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: function (e) {
            return e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              });
          },
          noop: function () {},
          toFiniteNumber: function (e, t) {
            return (e = +e), Number.isFinite(e) ? e : t;
          },
          findKey: zt,
          global: Dt,
          isContextDefined: Ft,
          ALPHABET: Yt,
          generateString: function () {
            for (
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 16,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Yt.ALPHA_DIGIT,
                n = "",
                r = t.length;
              e--;

            )
              n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              Ct(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: function (e) {
            var t = new Array(10);
            return (function e(n, r) {
              if (At(n)) {
                if (t.indexOf(n) >= 0) return;
                if (!("toJSON" in n)) {
                  t[r] = n;
                  var a = Nt(n) ? [] : {};
                  return (
                    Mt(n, function (t, n) {
                      var i = e(t, r + 1);
                      !kt(i) && (a[n] = i);
                    }),
                    (t[r] = void 0),
                    a
                  );
                }
              }
              return n;
            })(e, 0);
          },
          isAsyncFn: Kt,
          isThenable: function (e) {
            return e && (At(e) || Ct(e)) && Ct(e.then) && Ct(e.catch);
          },
        };
      function Xt(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a && (this.response = a);
      }
      Jt.inherits(Xt, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: Jt.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      var Zt = Xt.prototype,
        $t = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach(function (e) {
        $t[e] = { value: e };
      }),
        Object.defineProperties(Xt, $t),
        Object.defineProperty(Zt, "isAxiosError", { value: !0 }),
        (Xt.from = function (e, t, n, r, a, i) {
          var o = Object.create(Zt);
          return (
            Jt.toFlatObject(
              e,
              o,
              function (e) {
                return e !== Error.prototype;
              },
              function (e) {
                return "isAxiosError" !== e;
              }
            ),
            Xt.call(o, e.message, t, n, r, a),
            (o.cause = e),
            (o.name = e.name),
            i && Object.assign(o, i),
            o
          );
        });
      var en = Xt,
        tn = null;
      function nn(e) {
        return Jt.isPlainObject(e) || Jt.isArray(e);
      }
      function rn(e) {
        return Jt.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function an(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = rn(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      var on = Jt.toFlatObject(Jt, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var ln = function (e, t, n) {
        if (!Jt.isObject(e)) throw new TypeError("target must be an object");
        t = t || new (tn || FormData)();
        var r = (n = Jt.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !Jt.isUndefined(t[e]);
            }
          )).metaTokens,
          a = n.visitor || c,
          i = n.dots,
          o = n.indexes,
          l =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            Jt.isSpecCompliantForm(t);
        if (!Jt.isFunction(a))
          throw new TypeError("visitor must be a function");
        function s(e) {
          if (null === e) return "";
          if (Jt.isDate(e)) return e.toISOString();
          if (!l && Jt.isBlob(e))
            throw new en("Blob is not supported. Use a Buffer instead.");
          return Jt.isArrayBuffer(e) || Jt.isTypedArray(e)
            ? l && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function c(e, n, a) {
          var l = e;
          if (e && !a && "object" === typeof e)
            if (Jt.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (Jt.isArray(e) &&
                (function (e) {
                  return Jt.isArray(e) && !e.some(nn);
                })(e)) ||
              ((Jt.isFileList(e) || Jt.endsWith(n, "[]")) &&
                (l = Jt.toArray(e)))
            )
              return (
                (n = rn(n)),
                l.forEach(function (e, r) {
                  !Jt.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === o ? an([n], r, i) : null === o ? n : n + "[]",
                      s(e)
                    );
                }),
                !1
              );
          return !!nn(e) || (t.append(an(a, n, i), s(e)), !1);
        }
        var u = [],
          d = Object.assign(on, {
            defaultVisitor: c,
            convertValue: s,
            isVisitable: nn,
          });
        if (!Jt.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!Jt.isUndefined(n)) {
              if (-1 !== u.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              u.push(n),
                Jt.forEach(n, function (n, i) {
                  !0 ===
                    (!(Jt.isUndefined(n) || null === n) &&
                      a.call(t, n, Jt.isString(i) ? i.trim() : i, r, d)) &&
                    e(n, r ? r.concat(i) : [i]);
                }),
                u.pop();
            }
          })(e),
          t
        );
      };
      function sn(e) {
        var t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function cn(e, t) {
        (this._pairs = []), e && ln(e, this, t);
      }
      var un = cn.prototype;
      (un.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (un.toString = function (e) {
          var t = e
            ? function (t) {
                return e.call(this, t, sn);
              }
            : sn;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      var dn = cn;
      function fn(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function hn(e, t, n) {
        if (!t) return e;
        var r,
          a = (n && n.encode) || fn,
          i = n && n.serialize;
        if (
          (r = i
            ? i(t, n)
            : Jt.isURLSearchParams(t)
            ? t.toString()
            : new dn(t, n).toString(a))
        ) {
          var o = e.indexOf("#");
          -1 !== o && (e = e.slice(0, o)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
        }
        return e;
      }
      var pn = (function () {
          function e() {
            f(this, e), (this.handlers = []);
          }
          return (
            g(e, [
              {
                key: "use",
                value: function (e, t, n) {
                  return (
                    this.handlers.push({
                      fulfilled: e,
                      rejected: t,
                      synchronous: !!n && n.synchronous,
                      runWhen: n ? n.runWhen : null,
                    }),
                    this.handlers.length - 1
                  );
                },
              },
              {
                key: "eject",
                value: function (e) {
                  this.handlers[e] && (this.handlers[e] = null);
                },
              },
              {
                key: "clear",
                value: function () {
                  this.handlers && (this.handlers = []);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  Jt.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                  });
                },
              },
            ]),
            e
          );
        })(),
        mn = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        gn = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : dn,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          isStandardBrowserEnv: (function () {
            var e;
            return (
              ("undefined" === typeof navigator ||
                ("ReactNative" !== (e = navigator.product) &&
                  "NativeScript" !== e &&
                  "NS" !== e)) &&
              "undefined" !== typeof window &&
              "undefined" !== typeof document
            );
          })(),
          isStandardBrowserWebWorkerEnv:
            "undefined" !== typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            "function" === typeof self.importScripts,
          protocols: ["http", "https", "file", "blob", "url", "data"],
        };
      var vn = function (e) {
          function t(e, n, r, a) {
            var i = e[a++],
              o = Number.isFinite(+i),
              l = a >= e.length;
            return (
              (i = !i && Jt.isArray(r) ? r.length : i),
              l
                ? (Jt.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !o)
                : ((r[i] && Jt.isObject(r[i])) || (r[i] = []),
                  t(e, n, r[i], a) &&
                    Jt.isArray(r[i]) &&
                    (r[i] = (function (e) {
                      var t,
                        n,
                        r = {},
                        a = Object.keys(e),
                        i = a.length;
                      for (t = 0; t < i; t++) r[(n = a[t])] = e[n];
                      return r;
                    })(r[i])),
                  !o)
            );
          }
          if (Jt.isFormData(e) && Jt.isFunction(e.entries)) {
            var n = {};
            return (
              Jt.forEachEntry(e, function (e, r) {
                t(
                  (function (e) {
                    return Jt.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                      return "[]" === e[0] ? "" : e[1] || e[0];
                    });
                  })(e),
                  r,
                  n,
                  0
                );
              }),
              n
            );
          }
          return null;
        },
        yn = { "Content-Type": void 0 };
      var bn = {
        transitional: mn,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (e, t) {
            var n,
              r = t.getContentType() || "",
              a = r.indexOf("application/json") > -1,
              i = Jt.isObject(e);
            if (
              (i && Jt.isHTMLForm(e) && (e = new FormData(e)), Jt.isFormData(e))
            )
              return a && a ? JSON.stringify(vn(e)) : e;
            if (
              Jt.isArrayBuffer(e) ||
              Jt.isBuffer(e) ||
              Jt.isStream(e) ||
              Jt.isFile(e) ||
              Jt.isBlob(e)
            )
              return e;
            if (Jt.isArrayBufferView(e)) return e.buffer;
            if (Jt.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            if (i) {
              if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return ln(
                    e,
                    new gn.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return gn.isNode && Jt.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (n = Jt.isFileList(e)) ||
                r.indexOf("multipart/form-data") > -1
              ) {
                var o = this.env && this.env.FormData;
                return ln(
                  n ? { "files[]": e } : e,
                  o && new o(),
                  this.formSerializer
                );
              }
            }
            return i || a
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (Jt.isString(e))
                    try {
                      return (t || JSON.parse)(e), Jt.trim(e);
                    } catch (r) {
                      if ("SyntaxError" !== r.name) throw r;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            var t = this.transitional || bn.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (e && Jt.isString(e) && ((n && !this.responseType) || r)) {
              var a = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (i) {
                if (a) {
                  if ("SyntaxError" === i.name)
                    throw en.from(
                      i,
                      en.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw i;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: gn.classes.FormData, Blob: gn.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      Jt.forEach(["delete", "get", "head"], function (e) {
        bn.headers[e] = {};
      }),
        Jt.forEach(["post", "put", "patch"], function (e) {
          bn.headers[e] = Jt.merge(yn);
        });
      var xn = bn,
        wn = Jt.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        jn = Symbol("internals");
      function Nn(e) {
        return e && String(e).trim().toLowerCase();
      }
      function kn(e) {
        return !1 === e || null == e
          ? e
          : Jt.isArray(e)
          ? e.map(kn)
          : String(e);
      }
      function Sn(e, t, n, r, a) {
        return Jt.isFunction(r)
          ? r.call(this, t, n)
          : (a && (t = n),
            Jt.isString(t)
              ? Jt.isString(r)
                ? -1 !== t.indexOf(r)
                : Jt.isRegExp(r)
                ? r.test(t)
                : void 0
              : void 0);
      }
      var En = (function (e, t) {
        function n(e) {
          f(this, n), e && this.set(e);
        }
        return (
          g(
            n,
            [
              {
                key: "set",
                value: function (e, t, n) {
                  var r = this;
                  function a(e, t, n) {
                    var a = Nn(t);
                    if (!a)
                      throw new Error("header name must be a non-empty string");
                    var i = Jt.findKey(r, a);
                    (!i ||
                      void 0 === r[i] ||
                      !0 === n ||
                      (void 0 === n && !1 !== r[i])) &&
                      (r[i || t] = kn(e));
                  }
                  var i = function (e, t) {
                    return Jt.forEach(e, function (e, n) {
                      return a(e, n, t);
                    });
                  };
                  return (
                    Jt.isPlainObject(e) || e instanceof this.constructor
                      ? i(e, t)
                      : Jt.isString(e) &&
                        (e = e.trim()) &&
                        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
                      ? i(
                          (function (e) {
                            var t,
                              n,
                              r,
                              a = {};
                            return (
                              e &&
                                e.split("\n").forEach(function (e) {
                                  (r = e.indexOf(":")),
                                    (t = e
                                      .substring(0, r)
                                      .trim()
                                      .toLowerCase()),
                                    (n = e.substring(r + 1).trim()),
                                    !t ||
                                      (a[t] && wn[t]) ||
                                      ("set-cookie" === t
                                        ? a[t]
                                          ? a[t].push(n)
                                          : (a[t] = [n])
                                        : (a[t] = a[t] ? a[t] + ", " + n : n));
                                }),
                              a
                            );
                          })(e),
                          t
                        )
                      : null != e && a(t, e, n),
                    this
                  );
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  if ((e = Nn(e))) {
                    var n = Jt.findKey(this, e);
                    if (n) {
                      var r = this[n];
                      if (!t) return r;
                      if (!0 === t)
                        return (function (e) {
                          for (
                            var t,
                              n = Object.create(null),
                              r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            (t = r.exec(e));

                          )
                            n[t[1]] = t[2];
                          return n;
                        })(r);
                      if (Jt.isFunction(t)) return t.call(this, r, n);
                      if (Jt.isRegExp(t)) return t.exec(r);
                      throw new TypeError(
                        "parser must be boolean|regexp|function"
                      );
                    }
                  }
                },
              },
              {
                key: "has",
                value: function (e, t) {
                  if ((e = Nn(e))) {
                    var n = Jt.findKey(this, e);
                    return !(
                      !n ||
                      void 0 === this[n] ||
                      (t && !Sn(0, this[n], n, t))
                    );
                  }
                  return !1;
                },
              },
              {
                key: "delete",
                value: function (e, t) {
                  var n = this,
                    r = !1;
                  function a(e) {
                    if ((e = Nn(e))) {
                      var a = Jt.findKey(n, e);
                      !a ||
                        (t && !Sn(0, n[a], a, t)) ||
                        (delete n[a], (r = !0));
                    }
                  }
                  return Jt.isArray(e) ? e.forEach(a) : a(e), r;
                },
              },
              {
                key: "clear",
                value: function (e) {
                  for (var t = Object.keys(this), n = t.length, r = !1; n--; ) {
                    var a = t[n];
                    (e && !Sn(0, this[a], a, e, !0)) ||
                      (delete this[a], (r = !0));
                  }
                  return r;
                },
              },
              {
                key: "normalize",
                value: function (e) {
                  var t = this,
                    n = {};
                  return (
                    Jt.forEach(this, function (r, a) {
                      var i = Jt.findKey(n, a);
                      if (i) return (t[i] = kn(r)), void delete t[a];
                      var o = e
                        ? (function (e) {
                            return e
                              .trim()
                              .toLowerCase()
                              .replace(/([a-z\d])(\w*)/g, function (e, t, n) {
                                return t.toUpperCase() + n;
                              });
                          })(a)
                        : String(a).trim();
                      o !== a && delete t[a], (t[o] = kn(r)), (n[o] = !0);
                    }),
                    this
                  );
                },
              },
              {
                key: "concat",
                value: function () {
                  for (
                    var e, t = arguments.length, n = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  return (e = this.constructor).concat.apply(
                    e,
                    [this].concat(n)
                  );
                },
              },
              {
                key: "toJSON",
                value: function (e) {
                  var t = Object.create(null);
                  return (
                    Jt.forEach(this, function (n, r) {
                      null != n &&
                        !1 !== n &&
                        (t[r] = e && Jt.isArray(n) ? n.join(", ") : n);
                    }),
                    t
                  );
                },
              },
              {
                key: Symbol.iterator,
                value: function () {
                  return Object.entries(this.toJSON())[Symbol.iterator]();
                },
              },
              {
                key: "toString",
                value: function () {
                  return Object.entries(this.toJSON())
                    .map(function (e) {
                      var t = c(e, 2);
                      return t[0] + ": " + t[1];
                    })
                    .join("\n");
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "AxiosHeaders";
                },
              },
            ],
            [
              {
                key: "from",
                value: function (e) {
                  return e instanceof this ? e : new this(e);
                },
              },
              {
                key: "concat",
                value: function (e) {
                  for (
                    var t = new this(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    r[a - 1] = arguments[a];
                  return (
                    r.forEach(function (e) {
                      return t.set(e);
                    }),
                    t
                  );
                },
              },
              {
                key: "accessor",
                value: function (e) {
                  var t = (this[jn] = this[jn] = { accessors: {} }).accessors,
                    n = this.prototype;
                  function r(e) {
                    var r = Nn(e);
                    t[r] ||
                      (!(function (e, t) {
                        var n = Jt.toCamelCase(" " + t);
                        ["get", "set", "has"].forEach(function (r) {
                          Object.defineProperty(e, r + n, {
                            value: function (e, n, a) {
                              return this[r].call(this, t, e, n, a);
                            },
                            configurable: !0,
                          });
                        });
                      })(n, e),
                      (t[r] = !0));
                  }
                  return Jt.isArray(e) ? e.forEach(r) : r(e), this;
                },
              },
            ]
          ),
          n
        );
      })();
      En.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        Jt.freezeMethods(En.prototype),
        Jt.freezeMethods(En);
      var Cn = En;
      function On(e, t) {
        var n = this || xn,
          r = t || n,
          a = Cn.from(r.headers),
          i = r.data;
        return (
          Jt.forEach(e, function (e) {
            i = e.call(n, i, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          i
        );
      }
      function An(e) {
        return !(!e || !e.__CANCEL__);
      }
      function Tn(e, t, n) {
        en.call(this, null == e ? "canceled" : e, en.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      Jt.inherits(Tn, en, { __CANCEL__: !0 });
      var Pn = Tn;
      var Rn = gn.isStandardBrowserEnv
        ? {
            write: function (e, t, n, r, a, i) {
              var o = [];
              o.push(e + "=" + encodeURIComponent(t)),
                Jt.isNumber(n) &&
                  o.push("expires=" + new Date(n).toGMTString()),
                Jt.isString(r) && o.push("path=" + r),
                Jt.isString(a) && o.push("domain=" + a),
                !0 === i && o.push("secure"),
                (document.cookie = o.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
      function Ln(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      var In = gn.isStandardBrowserEnv
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
            function r(e) {
              var r = e;
              return (
                t && (n.setAttribute("href", r), (r = n.href)),
                n.setAttribute("href", r),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            }
            return (
              (e = r(window.location.href)),
              function (t) {
                var n = Jt.isString(t) ? r(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      var _n = function (e, t) {
        e = e || 10;
        var n,
          r = new Array(e),
          a = new Array(e),
          i = 0,
          o = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (l) {
            var s = Date.now(),
              c = a[o];
            n || (n = s), (r[i] = l), (a[i] = s);
            for (var u = o, d = 0; u !== i; ) (d += r[u++]), (u %= e);
            if (((i = (i + 1) % e) === o && (o = (o + 1) % e), !(s - n < t))) {
              var f = c && s - c;
              return f ? Math.round((1e3 * d) / f) : void 0;
            }
          }
        );
      };
      function Mn(e, t) {
        var n = 0,
          r = _n(50, 250);
        return function (a) {
          var i = a.loaded,
            o = a.lengthComputable ? a.total : void 0,
            l = i - n,
            s = r(l);
          n = i;
          var c = {
            loaded: i,
            total: o,
            progress: o ? i / o : void 0,
            bytes: l,
            rate: s || void 0,
            estimated: s && o && i <= o ? (o - i) / s : void 0,
            event: a,
          };
          (c[t ? "download" : "upload"] = !0), e(c);
        };
      }
      var zn = "undefined" !== typeof XMLHttpRequest,
        Dn = {
          http: tn,
          xhr:
            zn &&
            function (e) {
              return new Promise(function (t, n) {
                var r,
                  a = e.data,
                  i = Cn.from(e.headers).normalize(),
                  o = e.responseType;
                function l() {
                  e.cancelToken && e.cancelToken.unsubscribe(r),
                    e.signal && e.signal.removeEventListener("abort", r);
                }
                Jt.isFormData(a) &&
                  (gn.isStandardBrowserEnv || gn.isStandardBrowserWebWorkerEnv
                    ? i.setContentType(!1)
                    : i.setContentType("multipart/form-data;", !1));
                var s = new XMLHttpRequest();
                if (e.auth) {
                  var c = e.auth.username || "",
                    u = e.auth.password
                      ? unescape(encodeURIComponent(e.auth.password))
                      : "";
                  i.set("Authorization", "Basic " + btoa(c + ":" + u));
                }
                var d = Ln(e.baseURL, e.url);
                function f() {
                  if (s) {
                    var r = Cn.from(
                      "getAllResponseHeaders" in s && s.getAllResponseHeaders()
                    );
                    !(function (e, t, n) {
                      var r = n.config.validateStatus;
                      n.status && r && !r(n.status)
                        ? t(
                            new en(
                              "Request failed with status code " + n.status,
                              [en.ERR_BAD_REQUEST, en.ERR_BAD_RESPONSE][
                                Math.floor(n.status / 100) - 4
                              ],
                              n.config,
                              n.request,
                              n
                            )
                          )
                        : e(n);
                    })(
                      function (e) {
                        t(e), l();
                      },
                      function (e) {
                        n(e), l();
                      },
                      {
                        data:
                          o && "text" !== o && "json" !== o
                            ? s.response
                            : s.responseText,
                        status: s.status,
                        statusText: s.statusText,
                        headers: r,
                        config: e,
                        request: s,
                      }
                    ),
                      (s = null);
                  }
                }
                if (
                  (s.open(
                    e.method.toUpperCase(),
                    hn(d, e.params, e.paramsSerializer),
                    !0
                  ),
                  (s.timeout = e.timeout),
                  "onloadend" in s
                    ? (s.onloadend = f)
                    : (s.onreadystatechange = function () {
                        s &&
                          4 === s.readyState &&
                          (0 !== s.status ||
                            (s.responseURL &&
                              0 === s.responseURL.indexOf("file:"))) &&
                          setTimeout(f);
                      }),
                  (s.onabort = function () {
                    s &&
                      (n(new en("Request aborted", en.ECONNABORTED, e, s)),
                      (s = null));
                  }),
                  (s.onerror = function () {
                    n(new en("Network Error", en.ERR_NETWORK, e, s)),
                      (s = null);
                  }),
                  (s.ontimeout = function () {
                    var t = e.timeout
                        ? "timeout of " + e.timeout + "ms exceeded"
                        : "timeout exceeded",
                      r = e.transitional || mn;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                      n(
                        new en(
                          t,
                          r.clarifyTimeoutError
                            ? en.ETIMEDOUT
                            : en.ECONNABORTED,
                          e,
                          s
                        )
                      ),
                      (s = null);
                  }),
                  gn.isStandardBrowserEnv)
                ) {
                  var h =
                    (e.withCredentials || In(d)) &&
                    e.xsrfCookieName &&
                    Rn.read(e.xsrfCookieName);
                  h && i.set(e.xsrfHeaderName, h);
                }
                void 0 === a && i.setContentType(null),
                  "setRequestHeader" in s &&
                    Jt.forEach(i.toJSON(), function (e, t) {
                      s.setRequestHeader(t, e);
                    }),
                  Jt.isUndefined(e.withCredentials) ||
                    (s.withCredentials = !!e.withCredentials),
                  o && "json" !== o && (s.responseType = e.responseType),
                  "function" === typeof e.onDownloadProgress &&
                    s.addEventListener(
                      "progress",
                      Mn(e.onDownloadProgress, !0)
                    ),
                  "function" === typeof e.onUploadProgress &&
                    s.upload &&
                    s.upload.addEventListener(
                      "progress",
                      Mn(e.onUploadProgress)
                    ),
                  (e.cancelToken || e.signal) &&
                    ((r = function (t) {
                      s &&
                        (n(!t || t.type ? new Pn(null, e, s) : t),
                        s.abort(),
                        (s = null));
                    }),
                    e.cancelToken && e.cancelToken.subscribe(r),
                    e.signal &&
                      (e.signal.aborted
                        ? r()
                        : e.signal.addEventListener("abort", r)));
                var p = (function (e) {
                  var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                  return (t && t[1]) || "";
                })(d);
                p && -1 === gn.protocols.indexOf(p)
                  ? n(
                      new en(
                        "Unsupported protocol " + p + ":",
                        en.ERR_BAD_REQUEST,
                        e
                      )
                    )
                  : s.send(a || null);
              });
            },
        };
      Jt.forEach(Dn, function (e, t) {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (n) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      var Fn = {
        getAdapter: function (e) {
          for (
            var t, n, r = (e = Jt.isArray(e) ? e : [e]).length, a = 0;
            a < r &&
            ((t = e[a]), !(n = Jt.isString(t) ? Dn[t.toLowerCase()] : t));
            a++
          );
          if (!n) {
            if (!1 === n)
              throw new en(
                "Adapter ".concat(t, " is not supported by the environment"),
                "ERR_NOT_SUPPORT"
              );
            throw new Error(
              Jt.hasOwnProp(Dn, t)
                ? "Adapter '".concat(t, "' is not available in the build")
                : "Unknown adapter '".concat(t, "'")
            );
          }
          if (!Jt.isFunction(n))
            throw new TypeError("adapter is not a function");
          return n;
        },
        adapters: Dn,
      };
      function Un(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new Pn(null, e);
      }
      function Hn(e) {
        return (
          Un(e),
          (e.headers = Cn.from(e.headers)),
          (e.data = On.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
          Fn.getAdapter(e.adapter || xn.adapter)(e).then(
            function (t) {
              return (
                Un(e),
                (t.data = On.call(e, e.transformResponse, t)),
                (t.headers = Cn.from(t.headers)),
                t
              );
            },
            function (t) {
              return (
                An(t) ||
                  (Un(e),
                  t &&
                    t.response &&
                    ((t.response.data = On.call(
                      e,
                      e.transformResponse,
                      t.response
                    )),
                    (t.response.headers = Cn.from(t.response.headers)))),
                Promise.reject(t)
              );
            }
          )
        );
      }
      var Bn = function (e) {
        return e instanceof Cn ? e.toJSON() : e;
      };
      function Wn(e, t) {
        t = t || {};
        var n = {};
        function r(e, t, n) {
          return Jt.isPlainObject(e) && Jt.isPlainObject(t)
            ? Jt.merge.call({ caseless: n }, e, t)
            : Jt.isPlainObject(t)
            ? Jt.merge({}, t)
            : Jt.isArray(t)
            ? t.slice()
            : t;
        }
        function a(e, t, n) {
          return Jt.isUndefined(t)
            ? Jt.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function i(e, t) {
          if (!Jt.isUndefined(t)) return r(void 0, t);
        }
        function o(e, t) {
          return Jt.isUndefined(t)
            ? Jt.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function l(n, a, i) {
          return i in t ? r(n, a) : i in e ? r(void 0, n) : void 0;
        }
        var s = {
          url: i,
          method: i,
          data: i,
          baseURL: o,
          transformRequest: o,
          transformResponse: o,
          paramsSerializer: o,
          timeout: o,
          timeoutMessage: o,
          withCredentials: o,
          adapter: o,
          responseType: o,
          xsrfCookieName: o,
          xsrfHeaderName: o,
          onUploadProgress: o,
          onDownloadProgress: o,
          decompress: o,
          maxContentLength: o,
          maxBodyLength: o,
          beforeRedirect: o,
          transport: o,
          httpAgent: o,
          httpsAgent: o,
          cancelToken: o,
          socketPath: o,
          responseEncoding: o,
          validateStatus: l,
          headers: function (e, t) {
            return a(Bn(e), Bn(t), !0);
          },
        };
        return (
          Jt.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            var i = s[r] || a,
              o = i(e[r], t[r], r);
            (Jt.isUndefined(o) && i !== l) || (n[r] = o);
          }),
          n
        );
      }
      var Gn = "1.4.0",
        Qn = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          Qn[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      var Vn = {};
      Qn.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v" +
            Gn +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return function (n, a, i) {
          if (!1 === e)
            throw new en(
              r(a, " has been removed" + (t ? " in " + t : "")),
              en.ERR_DEPRECATED
            );
          return (
            t &&
              !Vn[a] &&
              ((Vn[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, a, i)
          );
        };
      };
      var qn = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new en(
                "options must be an object",
                en.ERR_BAD_OPTION_VALUE
              );
            for (var r = Object.keys(e), a = r.length; a-- > 0; ) {
              var i = r[a],
                o = t[i];
              if (o) {
                var l = e[i],
                  s = void 0 === l || o(l, i, e);
                if (!0 !== s)
                  throw new en(
                    "option " + i + " must be " + s,
                    en.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new en("Unknown option " + i, en.ERR_BAD_OPTION);
            }
          },
          validators: Qn,
        },
        Yn = qn.validators,
        Kn = (function () {
          function e(t) {
            f(this, e),
              (this.defaults = t),
              (this.interceptors = { request: new pn(), response: new pn() });
          }
          return (
            g(e, [
              {
                key: "request",
                value: function (e, t) {
                  "string" === typeof e
                    ? ((t = t || {}).url = e)
                    : (t = e || {});
                  var n,
                    r = (t = Wn(this.defaults, t)),
                    a = r.transitional,
                    i = r.paramsSerializer,
                    o = r.headers;
                  void 0 !== a &&
                    qn.assertOptions(
                      a,
                      {
                        silentJSONParsing: Yn.transitional(Yn.boolean),
                        forcedJSONParsing: Yn.transitional(Yn.boolean),
                        clarifyTimeoutError: Yn.transitional(Yn.boolean),
                      },
                      !1
                    ),
                    null != i &&
                      (Jt.isFunction(i)
                        ? (t.paramsSerializer = { serialize: i })
                        : qn.assertOptions(
                            i,
                            { encode: Yn.function, serialize: Yn.function },
                            !0
                          )),
                    (t.method = (
                      t.method ||
                      this.defaults.method ||
                      "get"
                    ).toLowerCase()),
                    (n = o && Jt.merge(o.common, o[t.method])) &&
                      Jt.forEach(
                        [
                          "delete",
                          "get",
                          "head",
                          "post",
                          "put",
                          "patch",
                          "common",
                        ],
                        function (e) {
                          delete o[e];
                        }
                      ),
                    (t.headers = Cn.concat(n, o));
                  var l = [],
                    s = !0;
                  this.interceptors.request.forEach(function (e) {
                    ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
                      ((s = s && e.synchronous),
                      l.unshift(e.fulfilled, e.rejected));
                  });
                  var c,
                    u = [];
                  this.interceptors.response.forEach(function (e) {
                    u.push(e.fulfilled, e.rejected);
                  });
                  var d,
                    f = 0;
                  if (!s) {
                    var h = [Hn.bind(this), void 0];
                    for (
                      h.unshift.apply(h, l),
                        h.push.apply(h, u),
                        d = h.length,
                        c = Promise.resolve(t);
                      f < d;

                    )
                      c = c.then(h[f++], h[f++]);
                    return c;
                  }
                  d = l.length;
                  var p = t;
                  for (f = 0; f < d; ) {
                    var m = l[f++],
                      g = l[f++];
                    try {
                      p = m(p);
                    } catch (v) {
                      g.call(this, v);
                      break;
                    }
                  }
                  try {
                    c = Hn.call(this, p);
                  } catch (v) {
                    return Promise.reject(v);
                  }
                  for (f = 0, d = u.length; f < d; ) c = c.then(u[f++], u[f++]);
                  return c;
                },
              },
              {
                key: "getUri",
                value: function (e) {
                  return hn(
                    Ln((e = Wn(this.defaults, e)).baseURL, e.url),
                    e.params,
                    e.paramsSerializer
                  );
                },
              },
            ]),
            e
          );
        })();
      Jt.forEach(["delete", "get", "head", "options"], function (e) {
        Kn.prototype[e] = function (t, n) {
          return this.request(
            Wn(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        Jt.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                Wn(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (Kn.prototype[e] = t()), (Kn.prototype[e + "Form"] = t(!0));
        });
      var Jn = Kn,
        Xn = (function () {
          function e(t) {
            if ((f(this, e), "function" !== typeof t))
              throw new TypeError("executor must be a function.");
            var n;
            this.promise = new Promise(function (e) {
              n = e;
            });
            var r = this;
            this.promise.then(function (e) {
              if (r._listeners) {
                for (var t = r._listeners.length; t-- > 0; ) r._listeners[t](e);
                r._listeners = null;
              }
            }),
              (this.promise.then = function (e) {
                var t,
                  n = new Promise(function (e) {
                    r.subscribe(e), (t = e);
                  }).then(e);
                return (
                  (n.cancel = function () {
                    r.unsubscribe(t);
                  }),
                  n
                );
              }),
              t(function (e, t, a) {
                r.reason || ((r.reason = new Pn(e, t, a)), n(r.reason));
              });
          }
          return (
            g(
              e,
              [
                {
                  key: "throwIfRequested",
                  value: function () {
                    if (this.reason) throw this.reason;
                  },
                },
                {
                  key: "subscribe",
                  value: function (e) {
                    this.reason
                      ? e(this.reason)
                      : this._listeners
                      ? this._listeners.push(e)
                      : (this._listeners = [e]);
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (e) {
                    if (this._listeners) {
                      var t = this._listeners.indexOf(e);
                      -1 !== t && this._listeners.splice(t, 1);
                    }
                  },
                },
              ],
              [
                {
                  key: "source",
                  value: function () {
                    var t;
                    return {
                      token: new e(function (e) {
                        t = e;
                      }),
                      cancel: t,
                    };
                  },
                },
              ]
            ),
            e
          );
        })();
      var Zn = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(Zn).forEach(function (e) {
        var t = c(e, 2),
          n = t[0],
          r = t[1];
        Zn[r] = n;
      });
      var $n = Zn;
      var er = (function e(t) {
        var n = new Jn(t),
          r = gt(Jn.prototype.request, n);
        return (
          Jt.extend(r, Jn.prototype, n, { allOwnKeys: !0 }),
          Jt.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(Wn(t, n));
          }),
          r
        );
      })(xn);
      (er.Axios = Jn),
        (er.CanceledError = Pn),
        (er.CancelToken = Xn),
        (er.isCancel = An),
        (er.VERSION = Gn),
        (er.toFormData = ln),
        (er.AxiosError = en),
        (er.Cancel = er.CanceledError),
        (er.all = function (e) {
          return Promise.all(e);
        }),
        (er.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (er.isAxiosError = function (e) {
          return Jt.isObject(e) && !0 === e.isAxiosError;
        }),
        (er.mergeConfig = Wn),
        (er.AxiosHeaders = Cn),
        (er.formToJSON = function (e) {
          return vn(Jt.isHTMLForm(e) ? new FormData(e) : e);
        }),
        (er.HttpStatusCode = $n),
        (er.default = er);
      var tr = er,
        nr = n(184),
        rr = function () {
          var e = c((0, t.useState)(""), 2),
            n = e[0],
            r = e[1],
            a = c((0, t.useState)(""), 2),
            i = a[0],
            o = a[1],
            l = function (e) {
              e.preventDefault();
              var t = { Email: n };
              tr.post(
                "https://sheet.best/api/sheets/cf5fe4b9-b70b-415c-9d68-0e71dfbc1ff3",
                t
              )
                .then(function (e) {
                  r(""),
                    o(
                      "You have successfully subscribed to our mailing list. Thank you!"
                    );
                })
                .catch(function (e) {
                  console.error("Errorssss:", e);
                });
            };
          return (0, nr.jsxs)("div", {
            className: "bg-secondary pt-10",
            children: [
              (0, nr.jsx)("div", {
                className: "waitlist-section pt-36 lg:pt-72",
              }),
              (0, nr.jsxs)("section", {
                className: "bg-primary",
                children: [
                  (0, nr.jsxs)("div", {
                    className:
                      "footer lg:p-20 lg:pt-0 p-10 lg:grid grid-cols-2 gap-10 lg:block md:block hidden lg-screen",
                    children: [
                      (0, nr.jsxs)("div", {
                        className: "lg:grid grid-cols-2  gap-5",
                        children: [
                          (0, nr.jsxs)("div", {
                            children: [
                              (0, nr.jsx)("img", {
                                src: mt,
                                alt: "Healthgo Logo",
                              }),
                              (0, nr.jsx)("p", {
                                className: "name mt-5 text-white",
                                children: "HealthGO Technologies",
                              }),
                              (0, nr.jsx)("p", {
                                className: "motto text-white",
                                children: "...quality healthcare for all",
                              }),
                              (0, nr.jsx)("p", {
                                className: "copyright pt-10 text-white",
                                children: "\xa9 Copyrights 2023",
                              }),
                            ],
                          }),
                          (0, nr.jsxs)("div", {
                            className: "pt-10",
                            children: [
                              (0, nr.jsx)("p", {
                                className: "footer-head text-white",
                                children: "CONTACT",
                              }),
                              (0, nr.jsxs)("ul", {
                                children: [
                                  (0, nr.jsxs)("li", {
                                    className: "flex items-center text-white",
                                    children: [
                                      (0, nr.jsx)("span", {
                                        className: "mr-3",
                                        children: (0, nr.jsx)(nt, {
                                          className: "icon",
                                        }),
                                      }),
                                      "Lagos, Nigeria",
                                    ],
                                  }),
                                  (0, nr.jsx)("li", {
                                    children: (0, nr.jsxs)("a", {
                                      href: "tel:+2348131927155",
                                      className: "flex items-center text-white",
                                      children: [
                                        (0, nr.jsx)("span", {
                                          className: "mr-3",
                                          children: (0, nr.jsx)(lt, {
                                            className: "icon ",
                                          }),
                                        }),
                                        "+234 813 192 7155",
                                      ],
                                    }),
                                  }),
                                  (0, nr.jsx)("li", {
                                    children: (0, nr.jsxs)("a", {
                                      href: "mailto:hello@healthgotechnologies.com",
                                      className: "flex items-center text-white",
                                      children: [
                                        (0, nr.jsx)("span", {
                                          className: "mr-3",
                                          children: (0, nr.jsx)(rt, {
                                            className: "icon",
                                          }),
                                        }),
                                        "hello@healthgotechnologies.com",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, nr.jsxs)("div", {
                                className: "flex text-white pt-5",
                                children: [
                                  (0, nr.jsx)("a", {
                                    href: "https://www.linkedin.com/company/healthgohq/",
                                    children: (0, nr.jsx)(ct, {
                                      className: "sm-icon",
                                    }),
                                  }),
                                  (0, nr.jsx)("a", {
                                    href: "https://www.instagram.com/healthgohq/",
                                    children: (0, nr.jsx)(st, {
                                      className: "sm-icon",
                                    }),
                                  }),
                                  (0, nr.jsx)("a", {
                                    href: "https://twitter.com/healthgoHQ",
                                    children: (0, nr.jsx)(dt, {
                                      className: "sm-icon",
                                    }),
                                  }),
                                  (0, nr.jsx)("a", {
                                    href: "https://t.me/HealthgoHQ",
                                    children: (0, nr.jsx)(ut, {
                                      className: "sm-icon",
                                    }),
                                  }),
                                  (0, nr.jsx)("a", {
                                    href: "https://medium.com/@HealthGO_HQ",
                                    children: (0, nr.jsx)(ot, {
                                      className: "sm-icon",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, nr.jsxs)("div", {
                        className: "lg:grid grid-cols-2 gap-5",
                        children: [
                          (0, nr.jsxs)("div", {
                            className: "grid grid-cols-2 gap-5 pt-10",
                            children: [
                              (0, nr.jsxs)("div", {
                                children: [
                                  (0, nr.jsx)("p", {
                                    className: "footer-head text-white",
                                    children: "QUICK LINKS",
                                  }),
                                  (0, nr.jsxs)("ul", {
                                    className: "text-white",
                                    children: [
                                      (0, nr.jsx)("li", {
                                        children: (0, nr.jsx)("a", {
                                          href: "https://play.google.com/store/apps/details?id=com.healthgo",
                                          target: "_blank",
                                          rel: "noreferrer",
                                          children: "Download the App",
                                        }),
                                      }),
                                      (0, nr.jsx)("li", {
                                        children: (0, nr.jsx)(Ve, {
                                          to: "/",
                                          children: " Home ",
                                        }),
                                      }),
                                      (0, nr.jsx)("li", {
                                        children: (0, nr.jsx)(Ve, {
                                          to: "about",
                                          children: "About Us",
                                        }),
                                      }),
                                      (0, nr.jsx)("li", {
                                        children: (0, nr.jsx)(Ve, {
                                          to: "contact",
                                          children: "Contact Us",
                                        }),
                                      }),
                                      (0, nr.jsx)("li", {
                                        children: (0, nr.jsx)(Ve, {
                                          to: "events",
                                          children: "Events",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, nr.jsxs)("div", {
                                children: [
                                  (0, nr.jsx)("p", {
                                    className: "footer-head text-white",
                                    children: "LEARN MORE",
                                  }),
                                  (0, nr.jsxs)("ul", {
                                    className: "text-white",
                                    children: [
                                      (0, nr.jsx)("li", {
                                        children: (0, nr.jsx)(Ve, {
                                          to: "who-we-are",
                                          children: "Who we are",
                                        }),
                                      }),
                                      (0, nr.jsx)("li", {
                                        children: (0, nr.jsx)(Ve, {
                                          to: "what-we-do",
                                          children: "What we do",
                                        }),
                                      }),
                                      (0, nr.jsx)("li", {
                                        children: (0, nr.jsx)(Ve, {
                                          to: "why-we-do-this",
                                          children: "Why we do this",
                                        }),
                                      }),
                                      (0, nr.jsx)("li", {
                                        children: (0, nr.jsx)(Ve, {
                                          to: "privacy",
                                          children: "Privacy Policy",
                                        }),
                                      }),
                                      (0, nr.jsx)("li", {
                                        children: (0, nr.jsx)(Ve, {
                                          to: "careers",
                                          children: "Careers",
                                        }),
                                      }),
                                      (0, nr.jsx)("li", {
                                        children: (0, nr.jsx)("a", {
                                          href: "https://docs.healthgotechnologies.com",
                                          target: "_blank",
                                          rel: "noreferrer",
                                          children: "Documentation",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, nr.jsxs)("div", {
                            className: "pt-10",
                            children: [
                              (0, nr.jsx)("p", {
                                className: "footer-head text-white",
                                children: "STAY UPDATED!",
                              }),
                              (0, nr.jsx)("p", {
                                className: "mail text-white",
                                children:
                                  "Join our mailing list to get the latest updates in your mail.",
                              }),
                              (0, nr.jsxs)("form", {
                                onSubmit: l,
                                children: [
                                  (0, nr.jsx)("input", {
                                    className:
                                      "appearance-none block w-full bg-primary border py-3 px-4 leading-tight focus:outline-none",
                                    onChange: function (e) {
                                      return r(e.target.value);
                                    },
                                    value: n,
                                    type: "email",
                                    placeholder: "Your email address",
                                  }),
                                  (0, nr.jsx)("p", {
                                    className: "text-white mt-3",
                                    children: i,
                                  }),
                                  (0, nr.jsxs)("button", {
                                    className:
                                      "bg-white hover:bg-secondary text-primary mt-5 font-bold py-2 px-4 rounded inline-flex items-center",
                                    children: [
                                      (0, nr.jsx)("span", {
                                        className: "mr-2",
                                        children: "Subscribe",
                                      }),
                                      (0, nr.jsx)(ht, {}),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, nr.jsxs)("div", {
                    className:
                      "footer lg:p-20 lg:pt-0 p-10 lg:grid grid-cols-2 gap-10 block lg:hidden md:hidden",
                    children: [
                      (0, nr.jsxs)("div", {
                        className: "",
                        children: [
                          (0, nr.jsx)("p", {
                            className: "footer-head text-white",
                            children: "STAY UPDATED!",
                          }),
                          (0, nr.jsx)("p", {
                            className: "mail text-white",
                            children:
                              "Join our mailing list to get the latest updates in your mail.",
                          }),
                          (0, nr.jsxs)("form", {
                            onSubmit: l,
                            children: [
                              (0, nr.jsx)("input", {
                                className:
                                  "appearance-none block w-full bg-primary border py-3 px-4 leading-tight focus:outline-none",
                                onChange: function (e) {
                                  return r(e.target.value);
                                },
                                value: n,
                                type: "email",
                                placeholder: "Your email address",
                              }),
                              (0, nr.jsx)("p", {
                                className: "text-white mt-3",
                                children: i,
                              }),
                              (0, nr.jsxs)("button", {
                                className:
                                  "bg-white hover:bg-secondary text-primary mt-5 font-bold py-2 px-4 rounded inline-flex items-center",
                                children: [
                                  (0, nr.jsx)("span", {
                                    className: "mr-2",
                                    children: "Subscribe",
                                  }),
                                  (0, nr.jsx)(ht, {}),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, nr.jsxs)("div", {
                        className: "grid grid-cols-2 gap-5 pt-10",
                        children: [
                          (0, nr.jsxs)("div", {
                            children: [
                              (0, nr.jsx)("p", {
                                className: "footer-head text-white",
                                children: "QUICK LINKS",
                              }),
                              (0, nr.jsxs)("ul", {
                                className: "text-white",
                                children: [
                                  (0, nr.jsx)("li", {
                                    children: (0, nr.jsx)("a", {
                                      href: "https://play.google.com/store/apps/details?id=com.healthgo",
                                      target: "_blank",
                                      rel: "noreferrer",
                                      children: "Download the App",
                                    }),
                                  }),
                                  (0, nr.jsx)("li", {
                                    children: (0, nr.jsx)(Ve, {
                                      to: "/",
                                      children: " Home ",
                                    }),
                                  }),
                                  (0, nr.jsx)("li", {
                                    children: (0, nr.jsx)(Ve, {
                                      to: "about",
                                      children: "About Us",
                                    }),
                                  }),
                                  (0, nr.jsx)("li", {
                                    children: (0, nr.jsx)(Ve, {
                                      to: "contact",
                                      children: "Contact Us",
                                    }),
                                  }),
                                  (0, nr.jsx)("li", {
                                    children: (0, nr.jsx)(Ve, {
                                      to: "events",
                                      children: "Events",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, nr.jsxs)("div", {
                            children: [
                              (0, nr.jsx)("p", {
                                className: "footer-head text-white",
                                children: "LEARN MORE",
                              }),
                              (0, nr.jsxs)("ul", {
                                className: "text-white",
                                children: [
                                  (0, nr.jsx)("li", {
                                    children: (0, nr.jsx)(Ve, {
                                      to: "who-we-are",
                                      children: "Who we are",
                                    }),
                                  }),
                                  (0, nr.jsx)("li", {
                                    children: (0, nr.jsx)(Ve, {
                                      to: "what-we-do",
                                      children: "What we do",
                                    }),
                                  }),
                                  (0, nr.jsx)("li", {
                                    children: (0, nr.jsx)(Ve, {
                                      to: "why-we-do-this",
                                      children: "Why we do this",
                                    }),
                                  }),
                                  (0, nr.jsx)("li", {
                                    children: (0, nr.jsx)(Ve, {
                                      to: "privacy",
                                      children: "Privacy Policy",
                                    }),
                                  }),
                                  (0, nr.jsx)("li", {
                                    children: (0, nr.jsx)(Ve, {
                                      to: "careers",
                                      children: "Careers",
                                    }),
                                  }),
                                  (0, nr.jsx)("li", {
                                    children: (0, nr.jsx)("a", {
                                      href: "https://docs.healthgotechnologies.com",
                                      target: "_blank",
                                      rel: "noreferrer",
                                      children: "Documentation",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, nr.jsxs)("div", {
                        className: "pt-10",
                        children: [
                          (0, nr.jsx)("p", {
                            className: "footer-head text-white",
                            children: "CONTACT",
                          }),
                          (0, nr.jsxs)("ul", {
                            children: [
                              (0, nr.jsxs)("li", {
                                className: "flex items-center text-white",
                                children: [
                                  (0, nr.jsx)("span", {
                                    className: "mr-3",
                                    children: (0, nr.jsx)(nt, {
                                      className: "icon",
                                    }),
                                  }),
                                  "Lagos, Nigeria",
                                ],
                              }),
                              (0, nr.jsxs)("li", {
                                className: "flex items-center text-white",
                                children: [
                                  (0, nr.jsx)("span", {
                                    className: "mr-3",
                                    children: (0, nr.jsx)(lt, {
                                      className: "icon ",
                                    }),
                                  }),
                                  "+234 813 192 7155",
                                ],
                              }),
                              (0, nr.jsxs)("li", {
                                className: "flex items-center text-white",
                                children: [
                                  (0, nr.jsx)("span", {
                                    className: "mr-3",
                                    children: (0, nr.jsx)(rt, {
                                      className: "icon",
                                    }),
                                  }),
                                  "hello@healthgotechnologies.com",
                                ],
                              }),
                            ],
                          }),
                          (0, nr.jsxs)("div", {
                            className: "flex text-white pt-5",
                            children: [
                              (0, nr.jsx)("a", {
                                href: "https://www.linkedin.com/company/healthgohq/",
                                children: (0, nr.jsx)(ct, {
                                  className: "sm-icon",
                                }),
                              }),
                              (0, nr.jsx)("a", {
                                href: "https://www.instagram.com/healthgohq/",
                                children: (0, nr.jsx)(st, {
                                  className: "sm-icon",
                                }),
                              }),
                              (0, nr.jsx)("a", {
                                href: "https://twitter.com/healthgoHQ",
                                children: (0, nr.jsx)(dt, {
                                  className: "sm-icon",
                                }),
                              }),
                              (0, nr.jsx)("a", {
                                href: "https://t.me/HealthgoHQ",
                                children: (0, nr.jsx)(ut, {
                                  className: "sm-icon",
                                }),
                              }),
                              (0, nr.jsx)("a", {
                                href: "https://medium.com/@HealthGO_HQ",
                                children: (0, nr.jsx)(ot, {
                                  className: "sm-icon",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, nr.jsxs)("div", {
                        className: "text-center mt-14 ",
                        children: [
                          (0, nr.jsxs)("div", {
                            className: "inline-flex items-center",
                            children: [
                              (0, nr.jsx)("img", {
                                src: mt,
                                alt: "Healthgo Logo",
                              }),
                              (0, nr.jsxs)("div", {
                                className: "pl-3",
                                children: [
                                  (0, nr.jsx)("p", {
                                    className: "name text-white",
                                    children: "HealthGO Technologies",
                                  }),
                                  (0, nr.jsx)("p", {
                                    className: "motto text-white",
                                    children: "...quality healthcare for all",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, nr.jsx)("p", {
                            className: "copyright pt-3 text-white",
                            children: "\xa9 Copyrights 2023",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      var ar = n.p + "static/media/logo.7f781fa9dc2e23fed7bf48c816f7eb7b.svg";
      function ir() {
        var e = (0, t.useRef)(null),
          n = c((0, t.useState)(!1), 2),
          r = n[0],
          a = n[1],
          i = function () {
            return a(!1);
          },
          o = c((0, t.useState)(!1), 2),
          l = (o[0], o[1]);
        return (
          (0, t.useEffect)(function () {
            function t(t) {
              (e.current && e.current.contains(t.target)) || l(!0);
            }
            return (
              document.addEventListener("click", t),
              function () {
                document.removeEventListener("click", t);
              }
            );
          }, []),
          (0, nr.jsx)(nr.Fragment, {
            children: (0, nr.jsx)("nav", {
              className: r ? "navbar bg-primary" : "navbar hidden",
              style: { maxWidth: "1700px", margin: "0 auto", overflowX: "" },
              children: (0, nr.jsxs)("div", {
                className:
                  "navbar-container bg-primary lg:pl-20 pl-10 pr-10 lg:pr-20",
                children: [
                  (0, nr.jsx)("div", {
                    className: "navbar-logo",
                    children: (0, nr.jsx)(Ve, {
                      to: "/",
                      onClick: i,
                      children: (0, nr.jsx)("img", {
                        src: ar,
                        alt: "Logo",
                        className: "logo",
                      }),
                    }),
                  }),
                  (0, nr.jsxs)("ul", {
                    className: r ? "nav-menu active" : "nav-menu hidden",
                    children: [
                      (0, nr.jsx)("li", {
                        className: "nav-item ",
                        children: (0, nr.jsx)(Ve, {
                          to: "/",
                          className: function (e) {
                            return (
                              "nav-links" + (e.isActive ? " activated" : "")
                            );
                          },
                          onClick: i,
                          children: (0, nr.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              "Home",
                              (0, nr.jsx)("span", {
                                className: "lg:hidden md:hidden chevron",
                                children: (0, nr.jsx)(it, {}),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, nr.jsx)("li", {
                        className: "nav-item",
                        children: (0, nr.jsx)(Ve, {
                          to: "/about",
                          className: function (e) {
                            return (
                              "nav-links" + (e.isActive ? " activated" : "")
                            );
                          },
                          onClick: i,
                          children: (0, nr.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              "About Us",
                              (0, nr.jsx)("span", {
                                className: "lg:hidden md:hidden chevron",
                                children: (0, nr.jsx)(it, {}),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, nr.jsx)("li", {
                        className: "nav-item",
                        children: (0, nr.jsx)(Ve, {
                          to: "/events",
                          className: function (e) {
                            return (
                              "nav-links" + (e.isActive ? " activated" : "")
                            );
                          },
                          onClick: i,
                          children: (0, nr.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              "Events",
                              (0, nr.jsx)("span", {
                                className: "lg:hidden md:hidden chevron",
                                children: (0, nr.jsx)(it, {}),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, nr.jsxs)("li", {
                        className: "nav-item dropdown",
                        children: [
                          (0, nr.jsx)("div", {
                            className: "nav-links",
                            onClick: function () {
                              l(!0);
                            },
                            children: (0, nr.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                "Learn More",
                                (0, nr.jsx)("span", {
                                  ref: e,
                                  className:
                                    "lg:ml-2 lg:hidden md:hidden chevron",
                                  children: (0, nr.jsx)(it, {}),
                                }),
                                (0, nr.jsx)("span", {
                                  className: "lg:ml-2 hidden lg:block chevron",
                                  children: (0, nr.jsx)(at, {}),
                                }),
                              ],
                            }),
                          }),
                          (0, nr.jsxs)("div", {
                            className: "dropdown-content",
                            children: [
                              (0, nr.jsx)(Ve, {
                                to: "/who-we-are",
                                className: function (e) {
                                  return (
                                    "nav-links" +
                                    (e.isActive ? " activated" : "")
                                  );
                                },
                                onClick: i,
                                children: (0, nr.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    "Who we are",
                                    (0, nr.jsx)("span", {
                                      className: "lg:hidden md:hidden chevron",
                                      children: (0, nr.jsx)(it, {}),
                                    }),
                                  ],
                                }),
                              }),
                              (0, nr.jsx)(Ve, {
                                to: "/what-we-do",
                                className: function (e) {
                                  return (
                                    "nav-links" +
                                    (e.isActive ? " activated" : "")
                                  );
                                },
                                onClick: i,
                                children: (0, nr.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    "What we do",
                                    (0, nr.jsx)("span", {
                                      className: "lg:hidden md:hidden chevron",
                                      children: (0, nr.jsx)(it, {}),
                                    }),
                                  ],
                                }),
                              }),
                              (0, nr.jsx)(Ve, {
                                to: "/why-we-do-this",
                                className: function (e) {
                                  return (
                                    "nav-links" +
                                    (e.isActive ? " activated" : "")
                                  );
                                },
                                onClick: i,
                                children: (0, nr.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    "Why we do it",
                                    (0, nr.jsx)("span", {
                                      className: "lg:hidden md:hidden chevron",
                                      children: (0, nr.jsx)(it, {}),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, nr.jsx)("li", {
                        className: "nav-item",
                        children: (0, nr.jsx)(Ve, {
                          to: "/partner",
                          className: function (e) {
                            return (
                              "nav-links" + (e.isActive ? " activated" : "")
                            );
                          },
                          onClick: i,
                          children: (0, nr.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              "Become a Partner",
                              (0, nr.jsx)("span", {
                                className: "lg:hidden md:hidden chevron",
                                children: (0, nr.jsx)(it, {}),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, nr.jsx)("div", {
                    className: "header-icons-box",
                    children: (0, nr.jsx)("a", {
                      href: "https://play.google.com/store/apps/details?id=com.healthgo",
                      target: "_blank",
                      rel: "noreferrer",
                      children: (0, nr.jsxs)("button", {
                        className:
                          "bg-white hover:bg-secondary text-primary font-bold py-2 px-4 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110",
                        children: [
                          (0, nr.jsx)("span", {
                            className: "mr-2",
                            children: "Get Started",
                          }),
                          (0, nr.jsx)(ht, {}),
                        ],
                      }),
                    }),
                  }),
                  (0, nr.jsx)("div", {
                    className: "menu-icon text-white",
                    onClick: function () {
                      return a(!r);
                    },
                    children: r ? (0, nr.jsx)(ft, {}) : (0, nr.jsx)(pt, {}),
                  }),
                ],
              }),
            }),
          })
        );
      }
      var or = n.p + "static/media/image1.7a7cb55a0f5d13d8998d91ede76c9238.svg";
      var lr = n.p + "static/media/image2.9e2ed7974ea71ba60924a21b59f39a82.svg";
      var sr = n.p + "static/media/image4.cfd320f9406f18e250d6ff9b17151233.svg";
      var cr = n.p + "static/media/image5.d9cff5428c68b6dd79a89fbd7ed5e304.svg";
      var ur = n.p + "static/media/icon2.10570ac31b62e2497a82add241681ef5.svg";
      var dr = n.p + "static/media/icon3.a52925e458837588995538937001bd3b.svg";
      var fr = n.p + "static/media/icon4.3a601309041de41f24700ae7f934618d.svg";
      var hr = n.p + "static/media/icon5.292f0f315388997aa525cc5f6efe5658.svg";
      var pr = n.p + "static/media/icon6.015f9fb4f4e8691aacff930e75c9c4a3.svg";
      var mr = n.p + "static/media/image9.faeac707d5e12267a123ea10f0c6bcdb.svg",
        gr = function () {
          return (0, nr.jsx)("section", {
            className: "lg:p-20 lg:pt-40 lg:pb-0 p-10 pt-20 lg-screen",
            children: (0, nr.jsxs)("div", {
              className: "lg:grid grid-cols-7",
              children: [
                (0, nr.jsx)("div", {
                  className: "col-span-3",
                  children: (0, nr.jsx)("img", {
                    src: mr,
                    alt: "Connect",
                    className:
                      "animate__animated animate__infinite\tinfinite animate__swing",
                  }),
                }),
                (0, nr.jsxs)("div", {
                  className: "col-span-4 lg:pl-20",
                  children: [
                    (0, nr.jsx)("p", {
                      className: "waitlist-head text-primary ",
                      children: "Let's Connect",
                    }),
                    (0, nr.jsx)("div", {
                      className: "col-span-4",
                      children: (0, nr.jsx)("p", {
                        className: "text-blackk  connect-text pt-10 ",
                        children:
                          "Connect with HealthGO on various social media platforms via the links below...or send a mail.",
                      }),
                    }),
                    (0, nr.jsxs)("div", {
                      className:
                        "pt-10 icons animate__animated animate__shakeX animate__delay-5s ",
                      children: [
                        (0, nr.jsx)("a", {
                          href: "https://www.linkedin.com/company/healthgohq/",
                          children: (0, nr.jsx)("img", {
                            src: pr,
                            alt: "linkedin",
                          }),
                        }),
                        (0, nr.jsx)("a", {
                          href: "https://www.instagram.com/healthgohq/",
                          children: (0, nr.jsx)("img", {
                            src: hr,
                            alt: "instagram",
                          }),
                        }),
                        (0, nr.jsx)("a", {
                          href: "https://twitter.com/healthgoHQ",
                          children: (0, nr.jsx)("img", {
                            src: dr,
                            alt: "twitter",
                          }),
                        }),
                        (0, nr.jsx)("a", {
                          href: "https://t.me/HealthgoHQ",
                          children: (0, nr.jsx)("img", {
                            src: ur,
                            alt: "telegram",
                          }),
                        }),
                        (0, nr.jsx)("a", {
                          href: "https://medium.com/@HealthGO_HQ",
                          children: (0, nr.jsx)("img", {
                            src: fr,
                            alt: "medium",
                          }),
                        }),
                      ],
                    }),
                    (0, nr.jsx)("button", {
                      className:
                        "mt-8 bg-secondary border border-primary hover:bg-primary hover:text-white text-primary font-bold py-3 px-6 rounded  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110",
                      children: (0, nr.jsxs)("a", {
                        href: "mailto:hello@healthgotechnologies.com",
                        className: "inline-flex items-center",
                        children: [
                          (0, nr.jsx)("span", {
                            className: "mr-2",
                            children: "Send a mail",
                          }),
                          " ",
                          (0, nr.jsx)(ht, {}),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var vr = n.p + "static/media/image6.3a0a880995ab85cfa54f282913151b5e.svg";
      var yr = n.p + "static/media/image7.9c12cac310720d184db1af225097e592.svg",
        br = function () {
          return (0, nr.jsxs)(nr.Fragment, {
            children: [
              (0, nr.jsx)("div", {
                className: "waitlist-section pt-32 lg:pt-72",
              }),
              (0, nr.jsx)("section", {
                className: "pb-10 bg-primary",
                children: (0, nr.jsxs)("div", {
                  className: "lg:p-20 lg:pb-40 p-10 lg-screen",
                  children: [
                    (0, nr.jsxs)("div", {
                      className: "grid grid-cols-7 mission-about",
                      children: [
                        (0, nr.jsx)("div", {
                          className: "col-span-2 ",
                          children: (0, nr.jsx)("img", {
                            src: vr,
                            className: "mission-img",
                            alt: "Mission",
                          }),
                        }),
                        (0, nr.jsx)("div", {
                          className: "col-span-5 ",
                          children: (0, nr.jsx)("p", {
                            className: "text-white about-text",
                            children:
                              "We are committed to building interoperable and accessible healthcare solutions and rewarding users for being health-compliant.",
                          }),
                        }),
                      ],
                    }),
                    (0, nr.jsxs)("div", {
                      className:
                        " grid grid-cols-7 mission-about lg:mt-40 mt-20",
                      children: [
                        (0, nr.jsx)("div", {
                          className: "col-span-5 ",
                          children: (0, nr.jsx)("p", {
                            className: "text-white about-text",
                            children:
                              "At HealthGO, Our vision is to ensure that we grow our users\u2019 finances while keeping them healthy.",
                          }),
                        }),
                        (0, nr.jsx)("div", {
                          className: "col-span-2",
                          children: (0, nr.jsx)("img", {
                            src: yr,
                            className: "mission-img",
                            alt: "Vision",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section-down pt-32 lg:pt-72 ",
              }),
            ],
          });
        },
        xr = n(615),
        wr = n.p + "static/media/partner1.23a05ebbc5a0b21febce.png",
        jr = n.p + "static/media/partner2.6503272666e712adcd3a.png",
        Nr = n.p + "static/media/partner4.f401a54b51ca7cfb4765.png",
        kr = n.p + "static/media/partner5.0557921603334462308d.png",
        Sr = n.p + "static/media/partner0.a9665d2731813100110a.png";
      var Er = n.p + "static/media/image8.e6fb6cff82abbb61fd13bb932287e5f5.svg",
        Cr = n(7),
        Or = n.n(Cr),
        Ar = n(475),
        Tr = n.n(Ar),
        Pr = n(77),
        Rr = n.n(Pr),
        Lr = n(725),
        Ir = n.n(Lr),
        _r = "bodyAttributes",
        Mr = "htmlAttributes",
        zr = "titleAttributes",
        Dr = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
        },
        Fr =
          (Object.keys(Dr).map(function (e) {
            return Dr[e];
          }),
          "charset"),
        Ur = "cssText",
        Hr = "href",
        Br = "http-equiv",
        Wr = "innerHTML",
        Gr = "itemprop",
        Qr = "name",
        Vr = "property",
        qr = "rel",
        Yr = "src",
        Kr = "target",
        Jr = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        Xr = "defaultTitle",
        Zr = "defer",
        $r = "encodeSpecialCharacters",
        ea = "onChangeClientState",
        ta = "titleTemplate",
        na = Object.keys(Jr).reduce(function (e, t) {
          return (e[Jr[t]] = t), e;
        }, {}),
        ra = [Dr.NOSCRIPT, Dr.SCRIPT, Dr.STYLE],
        aa = "data-react-helmet",
        ia =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        oa = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        },
        la = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        sa =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        ca = function (e, t) {
          var n = {};
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
          return n;
        },
        ua = function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        },
        da = function (e) {
          return !1 ===
            (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1])
            ? String(e)
            : String(e)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;");
        },
        fa = function (e) {
          var t = va(e, Dr.TITLE),
            n = va(e, ta);
          if (n && t)
            return n.replace(/%s/g, function () {
              return Array.isArray(t) ? t.join("") : t;
            });
          var r = va(e, Xr);
          return t || r || void 0;
        },
        ha = function (e) {
          return va(e, ea) || function () {};
        },
        pa = function (e, t) {
          return t
            .filter(function (t) {
              return "undefined" !== typeof t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return sa({}, e, t);
            }, {});
        },
        ma = function (e, t) {
          return t
            .filter(function (e) {
              return "undefined" !== typeof e[Dr.BASE];
            })
            .map(function (e) {
              return e[Dr.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                  var i = r[a].toLowerCase();
                  if (-1 !== e.indexOf(i) && n[i]) return t.concat(n);
                }
              return t;
            }, []);
        },
        ga = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                ("undefined" !== typeof t[e] &&
                  ja(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      ia(t[e]) +
                      '"'
                  ),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var a = {};
              n.filter(function (e) {
                for (
                  var n = void 0, i = Object.keys(e), o = 0;
                  o < i.length;
                  o++
                ) {
                  var l = i[o],
                    s = l.toLowerCase();
                  -1 === t.indexOf(s) ||
                    (n === qr && "canonical" === e[n].toLowerCase()) ||
                    (s === qr && "stylesheet" === e[s].toLowerCase()) ||
                    (n = s),
                    -1 === t.indexOf(l) ||
                      (l !== Wr && l !== Ur && l !== Gr) ||
                      (n = l);
                }
                if (!n || !e[n]) return !1;
                var c = e[n].toLowerCase();
                return (
                  r[n] || (r[n] = {}),
                  a[n] || (a[n] = {}),
                  !r[n][c] && ((a[n][c] = !0), !0)
                );
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var i = Object.keys(a), o = 0; o < i.length; o++) {
                var l = i[o],
                  s = Ir()({}, r[l], a[l]);
                r[l] = s;
              }
              return e;
            }, [])
            .reverse();
        },
        va = function (e, t) {
          for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            if (r.hasOwnProperty(t)) return r[t];
          }
          return null;
        },
        ya = (function () {
          var e = Date.now();
          return function (t) {
            var n = Date.now();
            n - e > 16
              ? ((e = n), t(n))
              : setTimeout(function () {
                  ya(t);
                }, 0);
          };
        })(),
        ba = function (e) {
          return clearTimeout(e);
        },
        xa =
          "undefined" !== typeof window
            ? (window.requestAnimationFrame &&
                window.requestAnimationFrame.bind(window)) ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              ya
            : n.g.requestAnimationFrame || ya,
        wa =
          "undefined" !== typeof window
            ? window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              ba
            : n.g.cancelAnimationFrame || ba,
        ja = function (e) {
          return (
            console && "function" === typeof console.warn && console.warn(e)
          );
        },
        Na = null,
        ka = function (e, t) {
          var n = e.baseTag,
            r = e.bodyAttributes,
            a = e.htmlAttributes,
            i = e.linkTags,
            o = e.metaTags,
            l = e.noscriptTags,
            s = e.onChangeClientState,
            c = e.scriptTags,
            u = e.styleTags,
            d = e.title,
            f = e.titleAttributes;
          Ca(Dr.BODY, r), Ca(Dr.HTML, a), Ea(d, f);
          var h = {
              baseTag: Oa(Dr.BASE, n),
              linkTags: Oa(Dr.LINK, i),
              metaTags: Oa(Dr.META, o),
              noscriptTags: Oa(Dr.NOSCRIPT, l),
              scriptTags: Oa(Dr.SCRIPT, c),
              styleTags: Oa(Dr.STYLE, u),
            },
            p = {},
            m = {};
          Object.keys(h).forEach(function (e) {
            var t = h[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (p[e] = n), r.length && (m[e] = h[e].oldTags);
          }),
            t && t(),
            s(e, p, m);
        },
        Sa = function (e) {
          return Array.isArray(e) ? e.join("") : e;
        },
        Ea = function (e, t) {
          "undefined" !== typeof e &&
            document.title !== e &&
            (document.title = Sa(e)),
            Ca(Dr.TITLE, t);
        },
        Ca = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute(aa),
                a = r ? r.split(",") : [],
                i = [].concat(a),
                o = Object.keys(t),
                l = 0;
              l < o.length;
              l++
            ) {
              var s = o[l],
                c = t[s] || "";
              n.getAttribute(s) !== c && n.setAttribute(s, c),
                -1 === a.indexOf(s) && a.push(s);
              var u = i.indexOf(s);
              -1 !== u && i.splice(u, 1);
            }
            for (var d = i.length - 1; d >= 0; d--) n.removeAttribute(i[d]);
            a.length === i.length
              ? n.removeAttribute(aa)
              : n.getAttribute(aa) !== o.join(",") &&
                n.setAttribute(aa, o.join(","));
          }
        },
        Oa = function (e, t) {
          var n = document.head || document.querySelector(Dr.HEAD),
            r = n.querySelectorAll(e + "[" + aa + "]"),
            a = Array.prototype.slice.call(r),
            i = [],
            o = void 0;
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var n = document.createElement(e);
                for (var r in t)
                  if (t.hasOwnProperty(r))
                    if (r === Wr) n.innerHTML = t.innerHTML;
                    else if (r === Ur)
                      n.styleSheet
                        ? (n.styleSheet.cssText = t.cssText)
                        : n.appendChild(document.createTextNode(t.cssText));
                    else {
                      var l = "undefined" === typeof t[r] ? "" : t[r];
                      n.setAttribute(r, l);
                    }
                n.setAttribute(aa, "true"),
                  a.some(function (e, t) {
                    return (o = t), n.isEqualNode(e);
                  })
                    ? a.splice(o, 1)
                    : i.push(n);
              }),
            a.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            i.forEach(function (e) {
              return n.appendChild(e);
            }),
            { oldTags: a, newTags: i }
          );
        },
        Aa = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r =
              "undefined" !== typeof e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
          }, "");
        },
        Ta = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(e).reduce(function (t, n) {
            return (t[Jr[n] || n] = e[n]), t;
          }, t);
        },
        Pa = function (e, n, r) {
          switch (e) {
            case Dr.TITLE:
              return {
                toComponent: function () {
                  return (function (e, n, r) {
                    var a,
                      i = (((a = { key: n })[aa] = !0), a),
                      o = Ta(r, i);
                    return [t.createElement(Dr.TITLE, o, n)];
                  })(0, n.title, n.titleAttributes);
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var a = Aa(n),
                      i = Sa(t);
                    return a
                      ? "<" +
                          e +
                          " " +
                          aa +
                          '="true" ' +
                          a +
                          ">" +
                          da(i, r) +
                          "</" +
                          e +
                          ">"
                      : "<" +
                          e +
                          " " +
                          aa +
                          '="true">' +
                          da(i, r) +
                          "</" +
                          e +
                          ">";
                  })(e, n.title, n.titleAttributes, r);
                },
              };
            case _r:
            case Mr:
              return {
                toComponent: function () {
                  return Ta(n);
                },
                toString: function () {
                  return Aa(n);
                },
              };
            default:
              return {
                toComponent: function () {
                  return (function (e, n) {
                    return n.map(function (n, r) {
                      var a,
                        i = (((a = { key: r })[aa] = !0), a);
                      return (
                        Object.keys(n).forEach(function (e) {
                          var t = Jr[e] || e;
                          if (t === Wr || t === Ur) {
                            var r = n.innerHTML || n.cssText;
                            i.dangerouslySetInnerHTML = { __html: r };
                          } else i[t] = n[e];
                        }),
                        t.createElement(e, i)
                      );
                    });
                  })(e, n);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var a = Object.keys(r)
                          .filter(function (e) {
                            return !(e === Wr || e === Ur);
                          })
                          .reduce(function (e, t) {
                            var a =
                              "undefined" === typeof r[t]
                                ? t
                                : t + '="' + da(r[t], n) + '"';
                            return e ? e + " " + a : a;
                          }, ""),
                        i = r.innerHTML || r.cssText || "",
                        o = -1 === ra.indexOf(e);
                      return (
                        t +
                        "<" +
                        e +
                        " " +
                        aa +
                        '="true" ' +
                        a +
                        (o ? "/>" : ">" + i + "</" + e + ">")
                      );
                    }, "");
                  })(e, n, r);
                },
              };
          }
        },
        Ra = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            a = e.htmlAttributes,
            i = e.linkTags,
            o = e.metaTags,
            l = e.noscriptTags,
            s = e.scriptTags,
            c = e.styleTags,
            u = e.title,
            d = void 0 === u ? "" : u,
            f = e.titleAttributes;
          return {
            base: Pa(Dr.BASE, t, r),
            bodyAttributes: Pa(_r, n, r),
            htmlAttributes: Pa(Mr, a, r),
            link: Pa(Dr.LINK, i, r),
            meta: Pa(Dr.META, o, r),
            noscript: Pa(Dr.NOSCRIPT, l, r),
            script: Pa(Dr.SCRIPT, s, r),
            style: Pa(Dr.STYLE, c, r),
            title: Pa(Dr.TITLE, { title: d, titleAttributes: f }, r),
          };
        },
        La = (function (e) {
          var n, r;
          return (
            (r = n =
              (function (n) {
                function r() {
                  return oa(this, r), ua(this, n.apply(this, arguments));
                }
                return (
                  (function (e, t) {
                    if ("function" !== typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof t
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      t &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, t)
                          : (e.__proto__ = t));
                  })(r, n),
                  (r.prototype.shouldComponentUpdate = function (e) {
                    return !Rr()(this.props, e);
                  }),
                  (r.prototype.mapNestedChildrenToProps = function (e, t) {
                    if (!t) return null;
                    switch (e.type) {
                      case Dr.SCRIPT:
                      case Dr.NOSCRIPT:
                        return { innerHTML: t };
                      case Dr.STYLE:
                        return { cssText: t };
                    }
                    throw new Error(
                      "<" +
                        e.type +
                        " /> elements are self-closing and can not contain children. Refer to our API for more information."
                    );
                  }),
                  (r.prototype.flattenArrayTypeChildren = function (e) {
                    var t,
                      n = e.child,
                      r = e.arrayTypeChildren,
                      a = e.newChildProps,
                      i = e.nestedChildren;
                    return sa(
                      {},
                      r,
                      (((t = {})[n.type] = [].concat(r[n.type] || [], [
                        sa({}, a, this.mapNestedChildrenToProps(n, i)),
                      ])),
                      t)
                    );
                  }),
                  (r.prototype.mapObjectTypeChildren = function (e) {
                    var t,
                      n,
                      r = e.child,
                      a = e.newProps,
                      i = e.newChildProps,
                      o = e.nestedChildren;
                    switch (r.type) {
                      case Dr.TITLE:
                        return sa(
                          {},
                          a,
                          (((t = {})[r.type] = o),
                          (t.titleAttributes = sa({}, i)),
                          t)
                        );
                      case Dr.BODY:
                        return sa({}, a, { bodyAttributes: sa({}, i) });
                      case Dr.HTML:
                        return sa({}, a, { htmlAttributes: sa({}, i) });
                    }
                    return sa({}, a, (((n = {})[r.type] = sa({}, i)), n));
                  }),
                  (r.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                    var n = sa({}, t);
                    return (
                      Object.keys(e).forEach(function (t) {
                        var r;
                        n = sa({}, n, (((r = {})[t] = e[t]), r));
                      }),
                      n
                    );
                  }),
                  (r.prototype.warnOnInvalidChildren = function (e, t) {
                    return !0;
                  }),
                  (r.prototype.mapChildrenToProps = function (e, n) {
                    var r = this,
                      a = {};
                    return (
                      t.Children.forEach(e, function (e) {
                        if (e && e.props) {
                          var t = e.props,
                            i = t.children,
                            o = (function (e) {
                              var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : {};
                              return Object.keys(e).reduce(function (t, n) {
                                return (t[na[n] || n] = e[n]), t;
                              }, t);
                            })(ca(t, ["children"]));
                          switch ((r.warnOnInvalidChildren(e, i), e.type)) {
                            case Dr.LINK:
                            case Dr.META:
                            case Dr.NOSCRIPT:
                            case Dr.SCRIPT:
                            case Dr.STYLE:
                              a = r.flattenArrayTypeChildren({
                                child: e,
                                arrayTypeChildren: a,
                                newChildProps: o,
                                nestedChildren: i,
                              });
                              break;
                            default:
                              n = r.mapObjectTypeChildren({
                                child: e,
                                newProps: n,
                                newChildProps: o,
                                nestedChildren: i,
                              });
                          }
                        }
                      }),
                      (n = this.mapArrayTypeChildrenToProps(a, n))
                    );
                  }),
                  (r.prototype.render = function () {
                    var n = this.props,
                      r = n.children,
                      a = ca(n, ["children"]),
                      i = sa({}, a);
                    return (
                      r && (i = this.mapChildrenToProps(r, i)),
                      t.createElement(e, i)
                    );
                  }),
                  la(r, null, [
                    {
                      key: "canUseDOM",
                      set: function (t) {
                        e.canUseDOM = t;
                      },
                    },
                  ]),
                  r
                );
              })(t.Component)),
            (n.propTypes = {
              base: Or().object,
              bodyAttributes: Or().object,
              children: Or().oneOfType([Or().arrayOf(Or().node), Or().node]),
              defaultTitle: Or().string,
              defer: Or().bool,
              encodeSpecialCharacters: Or().bool,
              htmlAttributes: Or().object,
              link: Or().arrayOf(Or().object),
              meta: Or().arrayOf(Or().object),
              noscript: Or().arrayOf(Or().object),
              onChangeClientState: Or().func,
              script: Or().arrayOf(Or().object),
              style: Or().arrayOf(Or().object),
              title: Or().string,
              titleAttributes: Or().object,
              titleTemplate: Or().string,
            }),
            (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
            (n.peek = e.peek),
            (n.rewind = function () {
              var t = e.rewind();
              return (
                t ||
                  (t = Ra({
                    baseTag: [],
                    bodyAttributes: {},
                    encodeSpecialCharacters: !0,
                    htmlAttributes: {},
                    linkTags: [],
                    metaTags: [],
                    noscriptTags: [],
                    scriptTags: [],
                    styleTags: [],
                    title: "",
                    titleAttributes: {},
                  })),
                t
              );
            }),
            r
          );
        })(
          Tr()(
            function (e) {
              return {
                baseTag: ma([Hr, Kr], e),
                bodyAttributes: pa(_r, e),
                defer: va(e, Zr),
                encode: va(e, $r),
                htmlAttributes: pa(Mr, e),
                linkTags: ga(Dr.LINK, [qr, Hr], e),
                metaTags: ga(Dr.META, [Qr, Fr, Br, Vr, Gr], e),
                noscriptTags: ga(Dr.NOSCRIPT, [Wr], e),
                onChangeClientState: ha(e),
                scriptTags: ga(Dr.SCRIPT, [Yr, Wr], e),
                styleTags: ga(Dr.STYLE, [Ur], e),
                title: fa(e),
                titleAttributes: pa(zr, e),
              };
            },
            function (e) {
              Na && wa(Na),
                e.defer
                  ? (Na = xa(function () {
                      ka(e, function () {
                        Na = null;
                      });
                    }))
                  : (ka(e), (Na = null));
            },
            Ra
          )(function () {
            return null;
          })
        );
      La.renderStatic = La.rewind;
      var Ia = [
          Sr,
          wr,
          jr,
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAADICAMAAAAOaWIyAAAApVBMVEVHcEzb7pXN52nM52jL52jN6GnM52jL52jN5mnL52jQ6XLN52nN6GnM52jN6GnM52j6+vrM6GnO6G7N52nM6GjN6GrM6GjM52jM6GjN52nM52j5+fnM52jM6GjM6GjZ7JTW64bO6G/M52j5+fnN52nM6GjM6GjM6Gj5+fn5+fnM52j6+vr6+vr6+vr6+vr5+fn5+fn6+vrf7qL6+vrO6G7M52j5+flapsh+AAAANXRSTlMABTLUghj8gDN+DjdT9CHtJV/mQJRJauJ1J8zX3IrDLDXxneYuurKk+6urF01fopLAdvdk8Rtn2Z0AABQrSURBVHja7F1pY6M4Em0wh7mMHQw+Yry7NLY7Th+Z3nX//5+2dhIHSaiQCCABrdczX3pgEvNcxdNTVenLl67h+sfDwvyiMF7Mkn1wuQT79UZTD2OUcKPlzrq8YbeMXPVERgdzcQwvCIJDMlNPZUzQdGNiXQhYk9RTWXs0QeyfwgsV4dlXImwMQbxZ38QWBGvr5CqcBy+2VpcqXJP4KouVCBvyiukQXDgQ7JUIG2ie9tKy2AIDWq2pBim2zuGlFsKjcsIGFcS5s7UutWFNDF2JsIGIrThbXT4F67I6+SprD0Fs7YNLA9yMbfUUe75i2jHydLjdsl7WSoT1WWwR9jQlH68OS8NYHlaMb0JwWKg1VR/FFs2eJqibnFPHsW3HSU+TgCXClLHdvxXT6YHBWrjPjBvFNzgORzgrY7tXqLanX4N4d0ztd4bf4aRnZjhv18rY7ovYYq2Ywm0RxAjLjpHtWSJMGdt9WDEtWPa0tToujRLD7zzby+OOKcKUsS1VbLHt6WB7Sh2A4vdwPrHWVNYuVWsqaWLrzLNiqmD4FQaXCFPGtowgZtvT9xUTGw6XCLOFG9vac4FSKtG+z+fzZwbm8+/zoUrHN3u6kmR0xcRD802EMb41q5NgETZ/efzAP6X/+PWKRwa+fv32MkyS2fa0VV4xFenZAMP5uAt6ZWw/P/75dscvMpDnX/+84huIt/88RJLdKGXb06DYMgwnSRyQZyPrlbHtvvz5ACWS/3BheCRz2tNQENvrRex58WJtGw1EmDBjW0NI/gFF8shI1nSjidgynLUfTfXp9Z/IXztw1u6Nsa09wSSPNJI1I6xhT1PydOzdKL5B1704WQNZm8/YTl2hJH/7/ndEsh7WtafRIL7m6XeG33meRgswnDmM7TCSS/JII9mob09/BPFbnsZxy9qgCGMb20sVyR1orkkDsaWXKL5nbVCEsYzt3UxFcutYWKDYOlWILWoQl8IZFmHgmspKJJP88vL09PPXHY/FpS8ff/nz6eXl54BIdo8VQQzl6XUCBTFnOFeJsL0rlWTt2XW1gsCfxaUfQlzTNNcd0tZKFNZfMS0qgxhF9ZqKLsKCWCrJBGgkDw7LWva0wczTZNb2WCKsHM6Zpkhu16/ele3ppf0JsVWdtcFwtinG9ipXJLeKxKpjT8NBrG9Mc6NXijB+Y9tRJLcqu/bY091+asV0pXHmXlOs5s5yIJp1hrG9x75rW1OR3CJiLFWGS5Y9TUU+uytNzTXzijUVnLVTLJYtX5Hc4qfN8EA22PY0JU9jOkmDs/bN2AaytoFnlLOmSG4NOVZ0a50cLnsaD+ISH2DWfl1T0UWYk+EpxVMktwYHNxTTmismIoi5whkQYQZurqaK5NZs6y32ZI9OHbFFC2KecAZE2BmTXpOZIrkl+FaF7GKILZNp67mscMal10qcgf03kaydcc+Y257OwTxdytoV4Zxg4ewcsF/m4CqSW4GHD8XMikCutKer8zQZzrOKNdVVhBUsLzHpFUSK5FaQYrEzKcLKWEe8KyaucIaz9tqApNdSUyS3YVtjT9U6I1G1aCOIeUSYj+TrE6YQVhtFcuu29SpFsnWk04P40y9KQITpSCgT0uuyViS3YFvjSmePcJxQ7WmzUQKlh7O3KPK1g5cv7E1Fcsu2dYCsn5xYh+3pJjSXjW09Rn7sEheCviK5MUDb2ll7TcUWvwjzEmQZhXszJ02R3BAb2Lb2WxBbvFlb9x3QwJ4qkhtiDdnW1/WT3kEQA+GMSi/DwMtUDEVyM5h7yLY2kPWTbnaSMjUTYRmTXriBbSqSG8EHqwVQ2dXVMU/apngboNKLqB1YKJIbfcwzJLuMBJFdna1iTOS1jEgvh8gvriK5AXTYtvaLQM472yXQci7pFSmSGwBvctsZdNnV4abuDFlFVRjYiuQG2RK3rY9021rvcLvPRRZSqIGN1w7sNn0i+b/DIhlvcgtTsbLrbZ2OrqKg2oFLokj+dBhhLrGFVgsIkV2vyUSnG9gHAc1v6DgJFsnIpcMiOYJlFxLI3Q6yRVZRVQZ23DXJP/gv/WdQJC+hagEbta07bgY36Qa2IcDARkc8McJTexkoyZsdWC2A2NZ5xw24bs5VO9BF85v7yM3cM0LyryGRnFyAagFs/dT5iLwZ1cC2CQO7g+Y37fmRmzn00qchzRbAbaUDZFt3/nsgu45w7UAXzW/zn08fYEUyeumASI55bGtv0/knAqSXLcDA1hC0d2mPoJ3k2tZM6WWLaH7T3v+0e2lvgDe5BUi1gCHEtkaeHp+B7X1RqAtHtm1NlV4VBnaqOKudI7dc1QJCBhihBvYCNrDVeSR10QPbmiq9YANbwPS2kUE7Qk1uomUXIb3Q2gFbYPPbGOHxVQsI0pKo9MIM7EDs9LaRIa2wrQXLropVFGFgZ+rMv1p6dsfT5JaLOw0CqB0Q1/w2QoBNbrhtLS5yZrKb38YHoskNta0TkbY18htJM7BHC64mN13ksbectQO+4o77iWZ9sa2Z0ssWOr1tTICb3ETb1vRVFGhgW8rA5saaqBaQaFuzpBdZO6AMbN7MyGVbTwX7S4X00tHmN3x6mzVRBjYf5Da58UivCG1+exDS/DY22XXuk23NlF5E85sysLnQL9uaLr1gA1vEyW8jQNqfagFIeolpfnued4B/ywKW4eDZbOKrBQjpxWVgt9f89v1rB/j9v//IAbZFh1ULWEi1gONE8mQXGcoiDOwf3/60j98XObBQkqtsa5my61V6AQZ2R81v4yWZaHJbymhy41hFTQU0v42X5CU8Eldck1vNVVRHzW+jJZlocjvJaXLjkF5Y81uGb3/rLQmvxw7w+0ESYti2ltTk1szAtlv6St3WUC3/+zz/lyQUcWlyNblNpblKYO2ApWoHuLHopW1NN7AlTG8bB479qxYApdcUrB2wjqp2YCQkqwKRT4JvlzHvW7q2VbquEyh80wWU8Bo0kiEuoYxullCjRT8m/tQ1QwRMAhoVlK35F2AgGxTCp/ONCu4ROgYKXUXpsrcahc/ZHJnpBY8Y6E/RgPiJuePCTPqMaw7ZJX729chgqEK+8WPa/5JctC7EViW5n3mY534a2Hy29VHJLi74PRmqCa6fppGyrRuHDN+pbtIa3qps64myrTnB17oqWMXyVf4Yij1OVJ202usm9A5PYB2f9BrQOIktvqGibGtuwINhbEkGthoM077IAXtl7H6NeLIJp13JrhoAh7XZkoa1bdSwtvalbM/6V9XYxS6QwrUDkRqgOhKAMyUcyaOQp0JHIbuxjyGif2Adv8rHvvzROln4FVgkayNDFaN3vWHBugHdUM2hG+LIy02Yo35Nh4EORO98qPlmd7EQAEcgXB+WhQHzVo2LdfsDoWziJFWX329As5Z//TuLek8QrrantQ7xDNYOOFKPJ5iKPZ4AP0Aa2uMiBp8RKSXh6SxFSfYtjhtQkr2g+trVCchA8MQ28bUDkG2NVwt0MafNJeijl53oIfFVwIY/cnGGkhwFNUnOQ9bVoUHPucSRQXQD2xN9ZFAk9sgg7VDxbIGsd32kG9hZ4iDZC2uSPFuxrz9Smcp7Y2BLPPyLOG8F2OXKyPSIC6+6JOcPdUnecdxwNnttYEtsciP0J13Bky9uQp5FYU2SN6uaJJd+ASpSjWlgy2t+4+xJ7sS21rLSo2I9qBLJXvckb3lIpqY6vqN1c1lH69oiTiYok0z5OemlMqfXJnnWDckWVU/05LQRQHalnR+STXvdUvJ1+RE3JXnXCcn0Rf6mF+cGSW1y05alR7VkZusKkq2ABsvC3gLocwdvgEi2Jvs7titc9dM3YnvR/CbXti5FcllfLy/8JG+jKQbP86Io9hMnBiJ5F0/Ld9xu8IFcEkbuHeZmsWW39EY8BnbHh8pIbnIrM0jGA0XawiRz9WmhkcxVmIiRjBVAzfbMvgO3B6dyovM0E/FNbhnlbYhfQTG0GpI8a0SyB79L6KtMcGKuvRZlYG+mui7FtobeyRauXzTK10BqJHuwKjxobH/eklCB7eaxcZfyMs7HplCI7zHRpHCPIhlLxoBfJL35zYz31untR0lpcisiObA+HF6NmuyCPkYyRnJGv13na37rLJS1aH97qjeWq2zr7prcikjerWjNsdrp4+FM+hjJWC4GOg+KzyDHwM73b7FzZVlKkxvyTt4eafm6sCAnxz5GMiq8QOdX7hlRs8M9Q0aSRmkWkTxZW5R3W5GtzycekvMZgU0e+b4GRvLOo9wQ+y4nyeaBp86Rc2yu2QnLsyJ4TpGcJrclYkvsyvYaskuV8JAc7AiswjCwiA+ARnKwIm94uN5A0IWRjAz71vQz3z4d3wBsfdM+zVp+AExVgU1uGTIq/VSuDyk23UOPJ13TQZDM9q4rSA7S5A7ntOI0jKpOYMX8tnzmtsiz5s6mhBVjfPxoXHY96N1xjLyTw2mRmj9EwEf9lrVHMmNDkjdNSIZxcnmNPcjAbjecNXNzzRJGSGdZ5Gy2DJHwxRbgPScihSMGsjMrM5JBbKs6DyKo+Q0r27z72LMWhK5r5m//YzrLQpvckHVyjLyA1+QKM4iQmr8+RvK2sjqq6qCoaRlNs/Y1T9/3FvWpTWOZtK07tc4z9DiWhCzxXiNrI3PS40gOMkYHUUUFdqSXWfamG9NtlqcLUGJZaJMb8k6+rjJRmUV8/50v7ZHcdiRbuyxmBR5f8xtG8+fCGQniilgW2+SWoSQjr2Abp+9KOhJ/PYvkVcIRdOAxrPY6mupUnj8hwsgg/n97V7SkKAwERTAuKFCcgCwlPlgrVvl+//9rB+jKDGQyYRUOtzJ1T+6x3qXpSaczmVBc7trW41YfISaDgqjGunJh+n4dyC+fk8MrXzdDX6i8ziIS5mF07pGY5DJeP/kj92ZDTAbryfp7gZ7OFs+AfBjK5HDonGyzw0QffqvXUWmyWRI4f2nS2aIg/lguN8kFoSrCsQ+5UfvJWzQSBSycqS0wLZDtNMKRZm5xij2SyfveA2n1wGk1VF3n7E4hLn6ABnYNs5tu6az9xYswT56nGxrvtqm7LukjCKP3ZsNMBiI0X4F92Now1AJZvkFhDd2FsugNCnGwm9h3Bo2d1hSH35obIKqsraCzMmurSRxla6e2qkmU7bHPYmEmg/H3k3Zh3LxqT4D80l2oWyHfKkiwncCfIso6h98wyjXOKjp/kFnbYkjs3EUeiXKxmJbJYOu1aHfxmg3m14EcPFvIdx/txB5Uz6o4/NZm7YbOA9ZUNIlriKPMhdtOvv7JjxHnZDhz2Rc8fnNhMhiSHYSNvYuWPvzWoXOy0V1TVSRW5Ok0c/B3yFEevzdbh8kASiGon8ynMgSdgWGznqJ7G6iucys6q0RYa2w/7GlpnoYkVnBZiPF7s3WZvCCLM2fIZFwNwFY7dgzsPHakMFd0Voiw5fKWtXXEVj8kKE9wk1uXybIy63gxVyYjKvN1y/jw298wvziuHGelCKuNbU2x1UsTZW94x+/N1puTJQcm7pvxc2Qy9lXYL++5MOJQFusf0HnT/JFBXJPYlSNcQVyUB6E296Zhcv/gzD2fPAWy5VnDmIweUBTyxYPOEhUSbXs8KelMijAZiSuxRZPYOR3Dfpqc4gKoHpP7hxiLhT7I+8LpRlHEp+v5uJEyWYQx9cBWC2T0r2XLK6RNEXz7WhAw1yJMYWxLxRYh54qrLdXWovAmZPI3yF0P8bvo+wnv+rZbLc+aZOugSAtk1EmAXUV5JbEhciZF2HqtMrZ1xFb9rsTnPfUfnQDlPsjdnPadT14H8qfOIXRNkHETJ/Y62ogaaj+/UHRWG9tAbFEzsXPJVUM0OsqWBORONx938XKQ9y8EGV0AxS5HFFsdYl9SdHbUayoliddxX2x1vzn2JgM5kmXAdlABND9oDOM/BbJNg4yaVPH7OWvlDmd+GrqmqsTWlhFbGgwYl8vwmNBjgByp+iNB3o3PZFuxwZ4OOlDE9BDzVWuqWoRhY7trT2uKrYm5DLfSH14CytePaQ70PvxBszbIZK1mbRBkqNR6IKN9B/ZooOUwr6Rg1lStsS21pwGJFWJrWi7DtouZbOJqxxR0Mf1B20XIZK38/jeSU18kSsXM7kVZS8dWj72g11TA2GbEVnHhSCzEVFyGDVQLmeRuNRYgLJ4XIzGQyVrUhyCjBqq9aRfp6z8adyqtopKjs2JNdRNhnNjiSOyfozScCOXVQXaEO5X5CwBLMbwVMnxEq60uBHMnVF4vfme0Ch+9XcxJXsbYVoqtnEtV+3hXQRqFiNijoRyc7Ue0w7PJHx+2pv+2/Zs52h1zw/3hYNPRHFQMAcgR+0B9FhKAnOTgpz2QV2f4cKlZS/OZHrl8qhJhKnua+b3+MbsfhY6m4bK1asOTfeqBUjXZp/UgfwbBShFBEHztkhV+IGAe2MArEOBX92vqLPy09ha8l5w4ma8QYQPsaRR/LtsVeN0Rl92Fide/4l9uzs2dtLEtXzEpf5+wHXyVAkL5kBhIxhEl2+sTIkzTnv7OC2XUc+QAygbjEem8KWyOzgpjW8uebjBsxNaCRNlgPG4E6dn/OZ3ddcHa0/4xpQThHWWD8ejBijAh5Ma2lj29PyUK4dygbDCeJGt/Ztyayj9cO2sqHXta5C7TgrdC2WA8nQi78MZ2/KCzlj0dXrd8FVt0NBhPSOcPxtgW1ZrqJsJqezrnSGwXG51lu2VuTJ6YznrGtpY9nQZmPOcqwnSMbU172sR8gze2de1pE++8ptK1p03MWoTxxjZhT38YEr+VCLuGwyCW2dMm5k5n3tjm7WkTsw/e2GbtaRO/Q4Sp7WkT75C11cY2b0+beA8RRlYXaNnTJt6EzjJjW9eeNvFGaypsbBt7+neKsF3c3sdyMium3xo3Y9vY079ehJVn42z91/gHQ7z9XpsXrdEAAAAASUVORK5CYII=",
          Nr,
          kr,
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgMAAADICAMAAABCtRI7AAABIFBMVEVHcExK4IQh2WlX34xhdXki2Wok2mvO49nk8useO0Hd9ujS4dyjr7EfO0EeO0Gfs68dOkCq8ca/7dKBzqNSaGwlQUeirrEzTVM4UVZMY2iM7LJQZmswSk+s8ceSoKM3UFYxTFLQ8N4wS1AkQEY4UVZoe39idnoq228l2mxIX2SJmZyxu72hra9XbHF56KW2wMKGlpmv6MYdOkA8VVolQUcfPEIq229a45A13Xc2UFYv3HMx3HM/WF2LraE13XbL1NNSaGyfq65u551X4o1S4op1h4tF4IIlQUd46KRj5ZZGXmNx559fc3g4UVdt5p2J67B6i46VoqV6i45m5ZhqfYFIX2S5wsQ7VFlZbnJPZmpRZ2xIX2Qh2WkcOT8aNz4m2mwkl0EIAAAAXHRSTlMAxf4GCvP8AgH0BhxB+/wF/jMMGJv6Jg7Lv1Fn7jsj2d0S0ezmm6jy+TZVPTStLEBzIvGm4vn3qONz6w3HE9QwqE6JPrc/z/N7mYdtU7BMY4BiWF2StT6ZenGypGMXIjEAAA9PSURBVHja7J0LV9pMEIYjUBKuSWNFrJaLqKUWLSBBa6FVK6KUVsqntbYE/v+/+JLdYLnsLkIWEDPvac/xHAgbkoeZ2dnZiSCAQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUCjJHKRBBdycSXlXvJQrvzpk9stAwqLKPf52xdcdLR0dfk698ktwjVdOAaWvC0ucnnT6Rcvls7eLAMGTmUAq5N+8flsXwUKHMwAwqB4+BoocDQDhtLpw30/xIeOZqDV8h5fLoMpcDYDLld66YcKpsDJDJimoHgWAAiczUDLZUQFAIGzGTBMwTlA4HQGWq6lrxAZOpyBlvcCIHA6A63O0j5cZIcz0GqdAwROZ8DlOgvAZXa4HWh1vqlwnR3OQOvoK8wQnc5A6zAHF9rpDHT+A2/gdAZaMEFcPAZc6XHLCdNeMATPjIHLN+Pp+vL8mIUBJAkWj4HX6ljbC/x+96fc9eeii24I/HCtF42B8W+Z5C5ff3aBIXAyA4bkl0tpSraw8wOutSMYEITceZFiCM6ScLGdwYCQPCxOwRlIk+5ylEYEMtSjHnFSzPEnG7j3cLlXorhADAiBpQ6RgeLXyU9SjmWCBEXKqx7mFkfJEwsyFfGQDhfLmUxZHkWA8aaYTD/jSQa2Pln2rC5ngqc9Mg5Y9XimtZ2TOwPim89kQ2BjZrCe8P1T3hT+sxrd2Y0xrkyylvL1K28J/+1L1UgeKnPr85V2R1zwSsmnbTYp7Kn1go+p6gFtMVX2ZLJ78fzgAflU6eZ0JJhPhAFBpHiDyQOC3HedIiUUimfpGxma0bbOVDtOuIv+j4rxydFdts+7MY+PUu5kbE0foY0GhZ7gn7wvpBCOCGm+RNYjLgQDAsUQTL5w9It5K0NrFdqFWd8YxcDGPcGbvTKPUr4zzzdyYrypvfmL/DN4Fx8xsF59RUQgdpMK0Q9SqrcZeSEYkMgRweRrBu9H/JzjdXFSBrbWaQzoK3cswxXZQwx8IL/6bmsUA6kbkh+olDT2YVriVF4EBoRvx6RM4dFXewwYdn9AYctkKqUKi4GwRlX4+xcqA+2N36I9BhT6wBrxyEq0+40Mw98rTeu6h3AhKC0CA2+O+E4MEAPtxN5Ov/bWCpbnVP7m6AyESzfbNGUzApUBXU+s22JASVAHvmlkCHzF/uBvE8on9hrZXjVu9jZ92EloJXURfEGOGBB0bDJwEvEMqpzZ3kCXrbpOZaC98lHy0CSLLAaUaNAOAysH4lgDq82wMaaupHaCxpy3T36PZzW450PfNXUqLoAdSJKDQpsMvCLE4LLcjCK7TTYEFgPjZji6DBhxYcAWA+ONiyYTSigaRMG/1COcNSrvJpAhOJEXgAH/zBgwQvBmwnxxqz4NBvRqTZ0ZA2IdGfvNDPVn7mmiiLGQBDswMNgBspA1/zQY0ElzxykxUN5Glr7BsPTLawpyBtKTZ4ASD0yJAWHdvN7tvwHODITxLI2WKuLPwLst06ltsjZjeBqmqahmxadvB6YzL6AxECyZr95m+DLQTqxVdUaqiDsD0jvk7G+ZTnbXYEDx3Tx9BqTLaeQHqAx8+W7+bEu8GYhna4gB7S4wEwbUJnYF7EWKsMnJ3gLYAXKe8GJ/OgwETAbaxDSRLQZ2Y7dWXOifCQMNFO/9ZL5pNaGYE4Mnz4DEfb2AzUAS2wH+DAiVkmkIFGKqiDcDUhktQhU+MKcOnmzK5ys8/ZhQ4r5uOMIOHEzJDghSPdGmpYq42wE8LSj8Yr9Lzvz8GXny+QGRHBHaqR+Ylx0Q1Hs0OQgTUkW8GRDLO4iBL6PeJ8vcl4+5M5Ck1BFNniqeVzxg3ulXKAuZGg4JuNuB5ccxMA1xZkBUD99y3272qHnBVBgQKqgYRBleQgQGqLFAgIaAnbriueQHMANCHeXolaF6I/7xwHNhIEAtLbezv4DJgIQWiLnnCbsMqOsp5A4G8w/c5wXPxA5ISSoCtkrLmQyod/o01gu6DAjJWhgl8A6S4AsGL/3wkyqk5cPiVPYbMhlomqV77Q1iAYHFgLw6IHZlZj8DUuSEVFX0KAY8Ywy8eAyoV4f7A99HytE2mtltQEBnQJQzJXSHiOGAVUuWSgwoup15PAMCThUNliA/ppasOjhwfC/4bOIBSb16610agOAlq5uFrbZU1Dqi1UwjjuuI7iUqAwpBzHLRQQbk+haCoC9V9Kia0sFhQxp1WXDh4gE0AeyHQHr5mYHAha1dx4x6Qg2XWv6NCHQ7QCgnLr0fgwFBvV9Bh5W+jMnA8MCJD8/DF5hWwDLwDxD4cxesRiT2utMhBsxfkdZbVaxp3bpiPV4XxmQgOA4DEk4V6b471R4D7efCgJTs5gBcF1/9D44gPb12RH37CxTTwur4X7fYZ93/aAYU9P8gMA4D3VSRERfaYcA45TC9RGSh4oGeHID36Ad+n8rsbFW02YSEucdECcfrtI/HDPhSAyqcjBUTolQRKl0Nb+6Ow4A2NPDt6XPID0iB3l/8AwRvGNGAy27rAToDhn9I3ESoEy40N6x+dNuZG1q+bn0D72bJ2Jsbys9gbjg4AewcYwj89JDQZbtDJWYg1LvxBuVt9JXo9m6M8UhNHjkiS8nfZilfO9QtLXNujkgMDPp9AwIUKFG3nHPoTYjnBbenmQd9OQij0K4iM/fkc2RAwKkivXrnd/h6wXDo1+kc/8eCoHP0Q+TDwEnk3zPahV1kGsI1tpfhyYAVErStqiKnrheIRIPfKT5AMFw54OoGDFwY6FGtSk8RT4cBf30DV5sHHewLDASI5SGdIp7+i8PJ4jQPBEgMSKgvhaLfZmbGgKSu91SbO5MBkR72Fb8liRC4lr7yqH0j2QEJrRXp2kd1VgwYU6Ka8tCYYF7xgCjL89t7LrOSwRYEQqD/0zg90IrEgOC/WzGTh9HKzBgwGxXhnFRNnEI88Lia0sjpaWxuNaVv6D1ITaN/iSHotQQuXs80IzIg4BVDhRUW8mbAqirSE80p2IEbZWRtueBvpny+xPt51ZZ/+czsTI4hkMSHRDI/BCgMCPeogGhrfYYM+HFVkRLN8N9f0ED7SZl7TORVc5nUN7c9JszyADNleLbct5rgPd/ndaoUBgIHjNKB6TAgJH+v4Kqi99z3GWVH7zUTK2aiSvszt31G0jK9Ugw98gBDIOBVRRfHZx1TGMAlRCxvwJ8B40WcKlr7w5kBsY52N47Yc6rMa8+pjHsjSoERluAKL4qZ1QUGAvzOkcaA/05DBT71GTJgLSHqWlXnvfe8ak52C6wVTbURntPec//1kjXLZ7sDV/oKJ9MNd8C1VT2NASMsRItJfwMzZEDAVUW4HoAnA8t/TAZS2afYg8J9few9fo2n4fTtA9gSWMtD6uucNAsGJBwWUrOFU2GgW1XEmwE1i2obGL1o/E3ffHrRqNdmN4G31zgV2C0holgCrxUF8M1j0BlI3qG1o7XMDBnohgS8GRDexZGTiQbJK8yiWkHFkyuvZp0fUC+PUV6giCEQ1LNjpiVY2uffUZfKgCAFrbUjlcmARNNEDAixk8cyII4zsGrODhU9XNg5LXsGmtO5PavB7RRKU/JvUjmCAffDLbcgkNxXb0dAIM2OAWvtSI/WGQzUApFIjKyyewIGJBFXm49iQPseoQ9M6l0fi+KKs5CvsHbT16Sy0diL53H9rHbLvVktmQGvxYC7p61MNx/MdgctF39LwGIgg3qaK+QNKFYtWZ4mX+K3OoEd6FYVjaolC1EHzhdeEZy6p5nq9qoNm71qq758999Dr1olkZnNeoH3Av+Y+w1/0coHq5fHzJiANwQSiwGrLVn13k9lgKVocxIGhORv7REMsIogC1mSN2gWwn3Vr0MKz6pntXUXJfXsLXFRwH19xLQE/8qNudoBckkaKyy00buezYAQw40JKL3rH9G3nNy73lNZ0xRW7/rSjHrXpy0ElocmglYqUJKZELg6XKoGepYqUBqAbO4lESUJiI1KxXp8kt71ydrQriJaqihKWeqtlEYycEP+NuVslPwIC13R8tFseTbPsEifW1aAkBru5oPZELR4Q1BLaRo1CSDdm86ZuGqQ+xsKhVlSiC3t6nFN892xZ+FSpaRpqRptrv87pDEHNmw65XPl8u5OwuxWr/W3r89HzWfZTOWJRkMMeA9zCIEyMR3UA4FrdhCUdxv/t3e/r2kDcRzHJf64IxZCW7BMWEFGlyBD9EktFgsV6br1gcr2aAj+///FojnbWrzvqUvdZXu/nlbRXj7eJXffS6Yn1mKR+vdPX39tP1NqzK4+SK62XmdFX7rT9tDxnaLLmfVFWrXaP8UP/ty29uk6qlw07mfdaXf24v7kUipMzzcDSf/cDATXlkWBLATl5hFDoCPpTky60mhYdgyk7Snb/rblc+Wcv7jli4Q/Oj44cv2/lejVFIGK9Ds902xLBtJDvPwwZb2hSGBeUQqtxeSm5vyIjzpXeTeQLv11+njfYTMDiYlA7yGRFgWy+WBHCNbzCfDdRgaqzxGoScuD/Ww4UHJ52SJ5OqN9i5aB9ITP2QuspgnMsVWn4obzOT1B4TJQHa1Oc1VHjkD8fGR11CME/1QGqo/DbJi/kY/r5FUPrxxFhuvpZRQiA9Wsh08jEIi9wGRzkHeEIBjVaeOiZCA2+8VO5Qhcv73icxUZEoLCZMBEQNxMlNp20S/XlwU1QlCMDJgePpQHgsDca+CNlqPI8FuPZvY/A+sIyPO/tn3k2l1kSDv7noE4qxoOJ4NDIrAKgVhkGIwJgecZGGSFY2FTjEBNWgUK5RAs6Am8zsDDjhG4E4uDyo9yT9DvaNraV1HfREAeCGqO+jDlCMFi3FE0tqd0a7WSvd5GYI1Ax1XAUH4SS4vmue1ER+4ZUFkE5Mu7HX7F2lFpuiAEXgv/PAIlZ5EhPYHfERjkEIHV/ILYE+Rzhyq8w2hwNorFWw3tfjoXNe+OWW6MvCIwlPeOJf3d95Fr1ZRLi25+UFrkIcdsv6kw3JWrtGhACDycIxrFjjtN7TW5o7XlZqYv5cYMB95lQHz6RGJ2E+zjo7z8zHBQrAwke/YCGfEBZ/NaTJFhgTKw3li2fwgSKk2LlIHxILY5+FjVx3FVELPxwC+3duHBa32356IWE4b/xbSDiPYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCP6DZ8eQGwmQcDYAAAAAElFTkSuQmCC",
        ],
        _a = function () {
          var e = c((0, t.useState)(""), 2),
            n = e[0],
            r = e[1],
            a = c((0, t.useState)(""), 2),
            i = a[0],
            o = a[1],
            l = c((0, t.useState)(""), 2),
            s = l[0],
            u = l[1];
          return (0, nr.jsxs)("div", {
            className: "container-box bg-secondary",
            children: [
              (0, nr.jsxs)("section", {
                className: "lg:p-20 p-10 lg:grid grid-cols-7 lg-screen ",
                children: [
                  (0, nr.jsxs)("div", {
                    className: "col-span-4 lg:mr-20 ",
                    children: [
                      (0, nr.jsx)(xr.U, {
                        from: "left",
                        positionOffset: 400,
                        triggerOffset: 200,
                        delayInMilliseconds: 0,
                        children: (0, nr.jsxs)("p", {
                          className: "text-primary home-head",
                          children: [
                            "A Global Portal for ",
                            (0, nr.jsx)("br", {}),
                            "General Healthcare Assistance",
                          ],
                        }),
                      }),
                      (0, nr.jsx)(xr.U, {
                        from: "left",
                        positionOffset: 400,
                        triggerOffset: 200,
                        delayInMilliseconds: 200,
                        children: (0, nr.jsx)("p", {
                          className: "sub-head mt-10 ",
                          children:
                            "The HealthGO Mobile App is available on Google Playstore and it\u2019s coming soon to Apple App Store.",
                        }),
                      }),
                      (0, nr.jsx)(xr.U, {
                        from: "left",
                        positionOffset: 400,
                        q: !0,
                        triggerOffset: 200,
                        delayInMilliseconds: 300,
                        children: (0, nr.jsx)("a", {
                          href: "https://play.google.com/store/apps/details?id=com.healthgo",
                          target: "_blank",
                          rel: "noreferrer",
                          children: (0, nr.jsxs)("button", {
                            className:
                              "mt-8 bg-primary text-white font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110",
                            children: [
                              (0, nr.jsx)("span", {
                                className: "mr-2",
                                children: "Download Now",
                              }),
                              (0, nr.jsx)(ht, {}),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, nr.jsx)("div", {
                    className: "col-span-3 lg:pt-0 pt-10",
                    children: (0, nr.jsx)("img", {
                      src: or,
                      alt: "Healthgo",
                      className: "animate__animated",
                    }),
                  }),
                ],
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section pt-36 lg:pt-72",
              }),
              (0, nr.jsx)("section", {
                className: "pb-10 bg-primary",
                children: (0, nr.jsxs)("div", {
                  className: "lg:p-20  p-10 lg:grid grid-cols-7 lg-screen",
                  children: [
                    (0, nr.jsxs)("div", {
                      className: "col-span-4 mr-10",
                      children: [
                        (0, nr.jsx)(xr.U, {
                          from: "left",
                          positionOffset: 400,
                          triggerOffset: 200,
                          delayInMilliseconds: 0,
                          children: (0, nr.jsxs)("p", {
                            className: "waitlist-head text-white",
                            children: [
                              "Iphone User? ",
                              (0, nr.jsx)("br", {}),
                              " Join the Waitlist",
                            ],
                          }),
                        }),
                        (0, nr.jsx)(xr.U, {
                          from: "left",
                          positionOffset: 400,
                          triggerOffset: 200,
                          delayInMilliseconds: 200,
                          children: (0, nr.jsx)("p", {
                            className: "text-white pt-10",
                            children:
                              "If you are an IOS user, Kindly Join the waitlist to get updated right in your inbox when the HealthGO mobile app is availble on Apple Store.",
                          }),
                        }),
                        (0, nr.jsx)(xr.U, {
                          from: "left",
                          positionOffset: 400,
                          triggerOffset: 200,
                          delayInMilliseconds: 300,
                          children: (0, nr.jsxs)("form", {
                            className: "w-full max-w-lg mt-10",
                            onSubmit: function (e) {
                              e.preventDefault();
                              var t = { Name: n, Email: i };
                              tr.post(
                                "https://sheet.best/api/sheets/ea3c2e87-54d4-4490-bae7-1faa1cb3eda5",
                                t
                              )
                                .then(function (e) {
                                  r(""),
                                    o(""),
                                    u(
                                      "You have successfully joined the waitlist"
                                    );
                                })
                                .catch(function (e) {
                                  console.error("Errorssss:", e);
                                });
                            },
                            children: [
                              (0, nr.jsxs)("div", {
                                className: "flex flex-wrap -mx-3 mb-6",
                                children: [
                                  (0, nr.jsxs)("div", {
                                    className:
                                      "w-full md:w-1/2 px-3 mb-6 md:mb-0",
                                    children: [
                                      (0, nr.jsx)("label", {
                                        className: "label text-white  mb-10",
                                        for: "grid-first-name",
                                        children: "First Name",
                                      }),
                                      (0, nr.jsx)("input", {
                                        className:
                                          "appearance-none block w-full bg-primary border py-3 px-4 leading-tight focus:outline-none",
                                        onChange: function (e) {
                                          return r(e.target.value);
                                        },
                                        value: n,
                                        type: "text",
                                        placeholder: "e.g Connell",
                                        name: "name",
                                      }),
                                    ],
                                  }),
                                  (0, nr.jsxs)("div", {
                                    className: "w-full md:w-1/2 px-3",
                                    children: [
                                      (0, nr.jsx)("label", {
                                        className:
                                          "tracking-wide text-white mb-20",
                                        children: "Email Address",
                                      }),
                                      (0, nr.jsx)("input", {
                                        className:
                                          "appearance-none block w-full bg-primary border py-3 px-4 leading-tight focus:outline-none ",
                                        onChange: function (e) {
                                          return o(e.target.value);
                                        },
                                        value: i,
                                        type: "text",
                                        placeholder:
                                          "Enter Your Email Address Here",
                                        name: "email",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, nr.jsx)("p", {
                                className: "text-white",
                                children: s,
                              }),
                              (0, nr.jsxs)("button", {
                                type: "submit",
                                className:
                                  "mt-8 bg-white hover:bg-secondary text-primary font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110",
                                children: [
                                  (0, nr.jsx)("span", {
                                    className: "mr-2",
                                    children: "Join the waitlist",
                                  }),
                                  (0, nr.jsx)(ht, {}),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, nr.jsx)("div", {
                      className:
                        "col-span-3 pt-20 lg:pt-0 animate__animated animate__bounce animate__infinite\tinfinite",
                      children: (0, nr.jsx)("img", {
                        src: lr,
                        alt: "Waitlist",
                      }),
                    }),
                  ],
                }),
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section-down pt-36 lg:pt-72 ",
              }),
              (0, nr.jsx)("section", {
                className: "about-section lg-screen",
                children: (0, nr.jsxs)("div", {
                  className: "lg:p-20 lg:pt-20 p-10 lg:grid grid-cols-7",
                  children: [
                    (0, nr.jsxs)("div", {
                      className: "col-span-3 relative",
                      children: [
                        (0, nr.jsx)("img", {
                          src: cr,
                          className: "on-top hover:animate-spin",
                          alt: "Logo",
                        }),
                        (0, nr.jsx)("img", {
                          src: sr,
                          className: "carry",
                          alt: "Logo",
                        }),
                      ],
                    }),
                    (0, nr.jsxs)("div", {
                      className: "col-span-4 lg:pt-0 pt-20 lg:block hidden",
                      children: [
                        (0, nr.jsxs)(xr.U, {
                          from: "left",
                          positionOffset: 400,
                          triggerOffset: 200,
                          delayInMilliseconds: 0,
                          children: [
                            (0, nr.jsx)("p", {
                              className:
                                "text-primary about-head animate__animated animate__zoomInDown",
                              children: "What we do",
                            }),
                            (0, nr.jsx)("p", {
                              className:
                                "text-primary about-sub mt-5 mb-5 animate__animated animate__flipInX",
                              children:
                                "HealthGo is Africa\u2019s gateway to quality, affordable and faster healthcare assistance leveraging blockchain and AI.",
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "offer text-blackk mt-10",
                          children: [
                            (0, nr.jsxs)(xr.U, {
                              from: "right",
                              positionOffset: 400,
                              triggerOffset: 200,
                              delayInMilliseconds: 200,
                              children: [
                                (0, nr.jsx)("p", {
                                  children: "At HealthGO, we offer: ",
                                }),
                                (0, nr.jsxs)("div", {
                                  className: "list",
                                  children: [
                                    (0, nr.jsx)("p", { children: "1." }),
                                    (0, nr.jsx)("p", {
                                      className: "ml-3",
                                      children:
                                        "Teletherapy and Consultations with Doctors and other health personels.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, nr.jsx)(xr.U, {
                              from: "right",
                              positionOffset: 400,
                              triggerOffset: 200,
                              delayInMilliseconds: 400,
                              children: (0, nr.jsxs)("div", {
                                className: "list",
                                children: [
                                  (0, nr.jsx)("p", { children: "2." }),
                                  (0, nr.jsx)("p", {
                                    className: "ml-3",
                                    children:
                                      "Online purchase of drugs, kits and other items from Pharmacies via the HealthGO mobile App.",
                                  }),
                                ],
                              }),
                            }),
                            (0, nr.jsx)(xr.U, {
                              from: "right",
                              positionOffset: 400,
                              triggerOffset: 200,
                              delayInMilliseconds: 600,
                              children: (0, nr.jsxs)("div", {
                                className: "list",
                                children: [
                                  (0, nr.jsx)("p", { children: "3." }),
                                  (0, nr.jsx)("p", {
                                    className: "ml-3",
                                    children:
                                      "Health education in a dynamic and better way.",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, nr.jsxs)("div", {
                      className: "col-span-4 lg:pt-0 pt-20  lg:hidden",
                      children: [
                        (0, nr.jsxs)(xr.U, {
                          from: "left",
                          positionOffset: 400,
                          triggerOffset: 200,
                          delayInMilliseconds: 0,
                          children: [
                            (0, nr.jsx)("p", {
                              className:
                                "text-primary about-head animate__animated animate__zoomInDown",
                              children: "What we do",
                            }),
                            (0, nr.jsx)("p", {
                              className:
                                "text-primary about-sub mt-5 mb-5 animate__animated animate__flipInX",
                              children:
                                "HealthGo is Africa\u2019s gateway to quality, affordable and faster healthcare assistance leveraging blockchain and AI.",
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "offer text-blackk mt-10",
                          children: [
                            (0, nr.jsxs)(xr.U, {
                              from: "left",
                              positionOffset: 400,
                              triggerOffset: 200,
                              delayInMilliseconds: 200,
                              children: [
                                (0, nr.jsx)("p", {
                                  children: "At HealthGO, we offer: ",
                                }),
                                (0, nr.jsxs)("div", {
                                  className: "list",
                                  children: [
                                    (0, nr.jsx)("p", { children: "1." }),
                                    (0, nr.jsx)("p", {
                                      className: "ml-3",
                                      children:
                                        "Teletherapy and Consultations with Doctors and other health personels.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, nr.jsx)(xr.U, {
                              from: "left",
                              positionOffset: 400,
                              triggerOffset: 200,
                              delayInMilliseconds: 400,
                              children: (0, nr.jsxs)("div", {
                                className: "list",
                                children: [
                                  (0, nr.jsx)("p", { children: "2." }),
                                  (0, nr.jsx)("p", {
                                    className: "ml-3",
                                    children:
                                      "Online purchase of drugs, kits and other items from Pharmacies via the HealthGO mobile App.",
                                  }),
                                ],
                              }),
                            }),
                            (0, nr.jsx)(xr.U, {
                              from: "left",
                              positionOffset: 400,
                              triggerOffset: 200,
                              delayInMilliseconds: 600,
                              children: (0, nr.jsxs)("div", {
                                className: "list",
                                children: [
                                  (0, nr.jsx)("p", { children: "3." }),
                                  (0, nr.jsx)("p", {
                                    className: "ml-3",
                                    children:
                                      "Health education in a dynamic and better way.",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, nr.jsx)(br, {}),
              (0, nr.jsxs)("div", {
                className: "lg:p-20 lg:pt-20 p-10",
                children: [
                  (0, nr.jsx)("p", {
                    className:
                      "text-primary text-left about-head animate__animated animate__zoomInDown lg-screen",
                    children: "Our Partners",
                  }),
                  (0, nr.jsx)("div", {
                    style: { overflowX: "hidden" },
                    children: (0, nr.jsx)("div", {
                      className: "mt-10 ticker",
                      children: (0, nr.jsx)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          whiteSpace: "nowrap",
                        },
                        children: Ia.map(function (e, t) {
                          return (0,
                          nr.jsx)("img", { src: e, className: "ticker-item", alt: "Partner ".concat(t + 1) }, t);
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section pt-36 lg:pt-72",
              }),
              (0, nr.jsx)("section", {
                className: "bg-primary",
                children: (0, nr.jsx)(xr.U, {
                  from: "left",
                  positionOffset: 400,
                  triggerOffset: 200,
                  delayInMilliseconds: 0,
                  children: (0, nr.jsxs)("div", {
                    className:
                      "lg:p-20 lg:pb-0 p-10 lg:grid grid-cols-7 lg-screen",
                    children: [
                      (0, nr.jsxs)("div", {
                        className: "col-span-4 mr-10",
                        children: [
                          (0, nr.jsx)("p", {
                            className: "waitlist-head text-white",
                            children: "Partner with Us...",
                          }),
                          (0, nr.jsx)("div", {
                            className: "col-span-4",
                            children: (0, nr.jsx)("p", {
                              className: "text-white about-sub mt-10 ",
                              children:
                                "HealthGo is Africa\u2019s gateway to quality, affordable and faster healthcare assistance leveraging blockchain and AI.",
                            }),
                          }),
                          (0, nr.jsx)("a", {
                            href: "mailto:hello@healthgotechnologies.com",
                            children: (0, nr.jsxs)("button", {
                              className:
                                "mt-8 bg-white hover:bg-secondary text-primary font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110",
                              children: [
                                (0, nr.jsx)("span", {
                                  className: "mr-2",
                                  children: " Join Us",
                                }),
                                " ",
                                (0, nr.jsx)(ht, {}),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, nr.jsx)("div", {
                        className:
                          "col-span-3 lg:pt-0 pt-20 animate__animated animate__wobble animate__infinite infinite",
                        children: (0, nr.jsx)("img", {
                          src: Er,
                          alt: "Join us",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section-down pt-36 lg:pt-72 ",
              }),
              (0, nr.jsx)(gr, {}),
            ],
          });
        },
        Ma = function (e) {
          var t = e.Question,
            n = e.Offer,
            r = e.Number,
            a = e.List;
          return (0, nr.jsxs)(nr.Fragment, {
            children: [
              (0, nr.jsx)("div", {
                className: "waitlist-section pt-36 lg:pt-72",
              }),
              (0, nr.jsx)("section", {
                className: "pb-10 bg-primary",
                children: (0, nr.jsx)(xr.U, {
                  from: "left",
                  positionOffset: 400,
                  triggerOffset: 200,
                  delayInMilliseconds: 0,
                  children: (0, nr.jsxs)("div", {
                    className: "lg:p-20 p-10 lg:grid grid-cols-7 lg-screen",
                    children: [
                      (0, nr.jsxs)("div", {
                        className: "col-span-4 mr-10",
                        children: [
                          (0, nr.jsx)("p", {
                            className: "waitlist-head text-white",
                            children: t,
                          }),
                          (0, nr.jsx)("p", {
                            className: "waitlist-head text-white",
                            children: "Partner with Us...",
                          }),
                          (0, nr.jsxs)("div", {
                            className: "col-span-4",
                            children: [
                              (0, nr.jsx)("p", {
                                className: "text-white about-sub mt-10 ",
                                children:
                                  "HealthGo is Africa\u2019s gateway to quality, affordable and faster healthcare assistance leveraging blockchain and AI.",
                              }),
                              (0, nr.jsxs)("div", {
                                className: "offer text-white mt-10",
                                children: [
                                  (0, nr.jsxs)("p", { children: [n, " "] }),
                                  (0, nr.jsxs)("div", {
                                    className: "list",
                                    children: [
                                      (0, nr.jsx)("p", { children: r }),
                                      (0, nr.jsx)("p", {
                                        className: "ml-3",
                                        children: a,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, nr.jsx)("a", {
                            href: "mailto:hello@healthgotechnologies.com",
                            children: (0, nr.jsxs)("button", {
                              className:
                                "mt-8 bg-white hover:bg-secondary text-primary font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110",
                              children: [
                                (0, nr.jsx)("span", {
                                  className: "mr-2",
                                  children: " Contact Us",
                                }),
                                (0, nr.jsx)(ht, {}),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, nr.jsx)("div", {
                        className:
                          "col-span-3 lg:pt-0 pt-20 animate__animated animate__wobble animate__infinite infinite",
                        children: (0, nr.jsx)("img", {
                          src: Er,
                          alt: "Contact Us",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section-down pt-36 lg:pt-72 ",
              }),
            ],
          });
        };
      var za =
          n.p + "static/media/image10.06690e282ffc59d91071098e5dbb4388.svg",
        Da = n.p + "static/media/image11.84f90a752b7c08799aad.png",
        Fa = function () {
          return (0, nr.jsxs)("div", {
            className: "container-box bg-secondary",
            children: [
              (0, nr.jsxs)("section", {
                className: "lg:p-20 p-10 lg:grid grid-cols-7 lg-screen",
                children: [
                  (0, nr.jsxs)("div", {
                    className: "col-span-4 lg:mr-20",
                    children: [
                      (0, nr.jsx)("p", {
                        className: "text-primary home-head",
                        children: "There's no event happening soon...",
                      }),
                      (0, nr.jsx)("p", {
                        className: "sub-head mt-10",
                        children:
                          "You'd be informed as soon as there's an event coming up. For now, kindly check out pictures and videos from past events",
                      }),
                      (0, nr.jsx)("a", {
                        href: "https://youtu.be/De8rzpBmmIc",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, nr.jsxs)("button", {
                          className:
                            "mt-8 bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-6 rounded inline-flex items-center",
                          children: [
                            (0, nr.jsx)("span", {
                              className: "mr-2",
                              children: "Check Past Events",
                            }),
                            (0, nr.jsx)(ht, {}),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, nr.jsx)("div", {
                    className: "col-span-3",
                    children: (0, nr.jsx)("img", {
                      src: za,
                      alt: "Past events",
                    }),
                  }),
                ],
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section pt-20 lg:pt-72",
              }),
              (0, nr.jsx)("section", {
                className: "pb-10 bg-primary",
                children: (0, nr.jsxs)("div", {
                  className: "lg:p-20 p-10 lg:grid grid-cols-7 lg-screen",
                  children: [
                    (0, nr.jsxs)("div", {
                      className: "col-span-4 mr-10",
                      children: [
                        (0, nr.jsx)("p", {
                          className: "waitlist-head text-white",
                          children: "Health Finance BlockChain 2022",
                        }),
                        (0, nr.jsx)("p", {
                          className: "text-white pt-10",
                          children:
                            "If you are an IOS user, Kindly Join the waitlist to get updated right in your inbox when the HealthGO mobile app is availble on Apple Store.",
                        }),
                        (0, nr.jsx)("a", {
                          href: "https://youtu.be/De8rzpBmmIc",
                          target: "_blank",
                          rel: "noreferrer",
                          children: (0, nr.jsxs)("button", {
                            className:
                              "mt-10 bg-white hover:bg-secondary text-primary font-bold py-3 px-6 rounded inline-flex items-center",
                            children: [
                              (0, nr.jsx)("span", {
                                className: "mr-2",
                                children: "See images & Videos",
                              }),
                              (0, nr.jsx)(ht, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, nr.jsx)("div", {
                      className: "col-span-3 pt-20 lg:pt-0",
                      children: (0, nr.jsx)("img", { src: Da, alt: "Events" }),
                    }),
                  ],
                }),
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section-down pt-20 lg:pt-48 ",
              }),
              (0, nr.jsx)("section", {
                className: "about-section lg-screen",
                children: (0, nr.jsxs)("div", {
                  className: "lg:p-20 lg:pt-20 p-10 ",
                  children: [
                    (0, nr.jsx)("p", {
                      className: "h-about-header  text-primary text-center",
                      children: "Other Events",
                    }),
                    (0, nr.jsxs)("div", {
                      className: "lg:grid grid-cols-7",
                      children: [
                        (0, nr.jsxs)("div", {
                          className: "col-span-4 lg:mr-20",
                          children: [
                            (0, nr.jsx)("p", {
                              className: "text-primary home-head lg:mt-20",
                              children: "There's no event happening soon...",
                            }),
                            (0, nr.jsx)("p", {
                              className: "sub-head mt-10",
                              children:
                                "You'd be informed as soon as there's an event coming up. For now, kindly check out pictures and videos from past events",
                            }),
                          ],
                        }),
                        (0, nr.jsx)("div", {
                          className: "col-span-3",
                          children: (0, nr.jsx)("img", {
                            src: za,
                            alt: "Coming_events",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, nr.jsx)(Ma, {
                Question: "Are you planning an event?",
                Offer:
                  "At HealthGO, we are eager to partner with various organizations for Tech events with agreements that will be loved by both parties.",
              }),
              (0, nr.jsx)(gr, {}),
            ],
          });
        };
      var Ua =
        n.p + "static/media/image12.76bfe1403016a9c6a48f2ef07ce85209.svg";
      var Ha =
        n.p + "static/media/person1.ee8e2fc06a4d845bfc377db868e5edd7.svg";
      var Ba =
        n.p + "static/media/person2.4467589ee848b2058616c76378c6d88c.svg";
      var Wa =
        n.p + "static/media/person3.b938e5c5507709348644472630e50175.svg";
      var Ga =
          n.p + "static/media/person4.9e1d4a0def2ed96dacddcbb623695c53.svg",
        Qa = n.p + "static/media/person6.ad8f943d4a63f860abc3.png";
      var Va =
        n.p + "static/media/person7.917dc1aebda34ad21e397ddc6fde3ad7.svg";
      var qa =
        n.p + "static/media/person8.b475a5f05057a248e81a4c5e69735ef3.svg";
      var Ya =
          n.p + "static/media/person16.837b77d7193eccb18926bc5554e7661e.svg",
        Ka = n.p + "static/media/person17.c51a40ba83e3b99183ee.png",
        Ja = n.p + "static/media/person18.b86c436572fc4d8549af.png",
        Xa = n.p + "static/media/person19.83751f22e17f5f399862.png";
      var Za =
          n.p + "static/media/person20.b47998e5904026a29beabecf3738409f.svg",
        $a = n.p + "static/media/person23.1feed2bc88a59177d0fe.png";
      var ei =
          n.p + "static/media/person26.25f6ce5ef1bff9d74e3f4a97170867c3.svg",
        ti = function () {
          var e = [
            { Img: Ha, Name: "Divinegift Soetan", Position: "CEO/Co-Founder" },
            {
              Img: Za,
              Name: "Olabisi Folorunso-Lanlehin",
              Position: "COO/Co-Founder",
            },
            { Img: Wa, Name: "Kolawole Elijah", Position: "CTO" },
            { Img: Ga, Name: "Chinedu Elijah", Position: "Project Manager" },
            {
              Img: qa,
              Name: "Okunade Ifeoluwa",
              Position: "Lead Medical Director",
            },
            { Img: $a, Name: "Mustapha Favour", Position: "Product Designer" },
            { Img: Qa, Name: "Sanusi Habib", Position: "Graphics Designer" },
            { Img: Va, Name: "Ajiboye Gideon", Position: "Web Developer" },
            { Img: Ka, Name: "Samuel Aholu", Position: "Web Developer" },
            { Img: Xa, Name: "Caleb Nwachukwu", Position: "Web Developer" },
            {
              Img: Ya,
              Name: "Kolawole Emmanuel",
              Position: "BackEnd Developer",
            },
            { Img: Ja, Name: "Habeeb Mustapha", Position: "Graphics Designer" },
            {
              Img: Ba,
              Name: "Precious Soetan",
              Position: "Lead Content Writer",
            },
            { Img: ei, Name: "Abdullahi Adam", Position: "Technical Writer" },
          ];
          return (0, nr.jsxs)("div", {
            className: "container-box bg-secondary",
            children: [
              (0, nr.jsxs)("section", {
                className: "lg:p-20 p-10 lg:grid grid-cols-7 lg-screen ",
                children: [
                  (0, nr.jsxs)("div", {
                    className: "col-span-4 mr-30 pb-20",
                    children: [
                      (0, nr.jsx)("p", {
                        className: "waitlist-head text-primary",
                        children: "About Us",
                      }),
                      (0, nr.jsxs)("div", {
                        className: "col-span-4",
                        children: [
                          (0, nr.jsx)(xr.U, {
                            from: "left",
                            positionOffset: 400,
                            triggerOffset: 200,
                            delayInMilliseconds: 0,
                            children: (0, nr.jsx)("p", {
                              className: "text-blackk about-sub mt-5 ",
                              children:
                                "HealthGo is Africa\u2019s gateway to quality, affordable and faster healthcare assistance leveraging blockchain and AI.",
                            }),
                          }),
                          (0, nr.jsxs)("div", {
                            className: "offer text-blackk mt-5",
                            children: [
                              (0, nr.jsxs)(xr.U, {
                                from: "left",
                                positionOffset: 400,
                                triggerOffset: 200,
                                delayInMilliseconds: 200,
                                children: [
                                  (0, nr.jsx)("p", {
                                    children: "At HealthGO, we offer:",
                                  }),
                                  (0, nr.jsxs)("div", {
                                    className: "list",
                                    children: [
                                      (0, nr.jsx)("p", { children: "1." }),
                                      (0, nr.jsx)("p", {
                                        className: "ml-3",
                                        children:
                                          "Teletherapy and Consultations with Doctors and other health personels.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, nr.jsx)(xr.U, {
                                from: "left",
                                positionOffset: 400,
                                triggerOffset: 200,
                                delayInMilliseconds: 400,
                                children: (0, nr.jsxs)("div", {
                                  className: "list",
                                  children: [
                                    (0, nr.jsx)("p", { children: "2." }),
                                    (0, nr.jsx)("p", {
                                      className: "ml-3",
                                      children:
                                        "Online purchase of drugs, kits and other items from Pharmacies via the HealthGO mobile App.",
                                    }),
                                  ],
                                }),
                              }),
                              (0, nr.jsx)(xr.U, {
                                from: "left",
                                positionOffset: 400,
                                triggerOffset: 200,
                                delayInMilliseconds: 600,
                                children: (0, nr.jsxs)("div", {
                                  className: "list",
                                  children: [
                                    (0, nr.jsx)("p", { children: "3." }),
                                    (0, nr.jsx)("p", {
                                      className: "ml-3",
                                      children:
                                        "Health education in a dynamic and better way.",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, nr.jsxs)("div", {
                    className: "col-span-3 relative",
                    children: [
                      (0, nr.jsx)("img", {
                        src: cr,
                        className: "on-top hover:animate-spin",
                        alt: "about",
                      }),
                      (0, nr.jsx)("img", {
                        src: sr,
                        className: "carry ",
                        alt: "about",
                      }),
                    ],
                  }),
                ],
              }),
              (0, nr.jsx)(br, {}),
              (0, nr.jsx)("section", {
                children: (0, nr.jsxs)("div", {
                  className:
                    "lg:p-20 lg:pt-20 p-10 lg:grid grid-cols-7 lg-screen",
                  children: [
                    (0, nr.jsxs)("div", {
                      className: "col-span-4 mr-30",
                      children: [
                        (0, nr.jsx)("p", {
                          className: "waitlist-head text-primary",
                          children: "Roadmap",
                        }),
                        (0, nr.jsxs)("div", {
                          className: "col-span-4",
                          children: [
                            (0, nr.jsx)(xr.U, {
                              from: "left",
                              positionOffset: 400,
                              triggerOffset: 200,
                              delayInMilliseconds: 0,
                              children: (0, nr.jsx)("p", {
                                className: "text-blackk about-sub mt-5 ",
                                children:
                                  "Step-by-step process of building a usable and sustaiinable product",
                              }),
                            }),
                            (0, nr.jsxs)("div", {
                              className: "offer text-blackk mt-5",
                              children: [
                                (0, nr.jsx)(xr.U, {
                                  from: "left",
                                  positionOffset: 400,
                                  triggerOffset: 200,
                                  delayInMilliseconds: 200,
                                  children: (0, nr.jsx)("div", {
                                    children: (0, nr.jsx)("p", {
                                      children:
                                        "Explore our product milestones and progress by clicking the button below.",
                                    }),
                                  }),
                                }),
                                (0, nr.jsx)(xr.U, {
                                  from: "left",
                                  positionOffset: 400,
                                  triggerOffset: 200,
                                  delayInMilliseconds: 200,
                                  children: (0, nr.jsx)("a", {
                                    href: "https://docs.healthgotechnologies.com/healthgo/roadmap",
                                    children: (0, nr.jsxs)("button", {
                                      className:
                                        "mt-8 bg-primary text-white font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110",
                                      children: [
                                        (0, nr.jsx)("span", {
                                          className: "mr-2",
                                          children: "See Roadmap",
                                        }),
                                        (0, nr.jsx)(ht, {}),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, nr.jsx)("div", {
                      className: "col-span-3 lg:pt-0 pt-20",
                      children: (0, nr.jsx)("img", {
                        src: Ua,
                        alt: "Roadmap",
                        className:
                          "animate__animated animate__infinite\tinfinite animate__swing",
                      }),
                    }),
                  ],
                }),
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section pt-36 lg:pt-72",
              }),
              (0, nr.jsx)("section", {
                className: "pb-10 bg-primary lg:p-20 p-10 ",
                children: (0, nr.jsxs)("div", {
                  className: "lg-screen",
                  children: [
                    (0, nr.jsx)("p", {
                      className: "about-header  text-white text-center ",
                      children: "Meet The Team",
                    }),
                    (0, nr.jsx)("p", {
                      className: "text-white about-sub pt-10",
                      children:
                        "Meet the committed brains and hands building HealthGO Technologies and pushing the gospel of affordable and quality healthcare for every African.",
                    }),
                    (0, nr.jsx)("div", {
                      className:
                        "pt-10 grid lg:grid-cols-4 md:grid-cols-2 gap-10",
                      children: e.map(function (e, t) {
                        return (0,
                        nr.jsxs)("div", { className: "relative mt-28", children: [(0, nr.jsx)("img", { src: e.Img, alt: "Team Pic", className: "absolute team-image" }), (0, nr.jsx)("img", { src: mt, alt: "Healthgo Logo", className: "team-logo absolute" }), (0, nr.jsxs)("div", { className: "about-card", children: [(0, nr.jsx)("p", { className: "team-name text-primary text-center pt-20", children: e.Name }), (0, nr.jsx)("p", { className: "team-title text-center pt-2", children: e.Position })] })] });
                      }),
                    }),
                  ],
                }),
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section-down pt-36 lg:pt-72 ",
              }),
              (0, nr.jsx)(gr, {}),
            ],
          });
        };
      var ni =
          n.p + "static/media/image13.dfa588095faaf0ff5e9bdf68a1a9b3b8.svg",
        ri = function () {
          return (0, nr.jsxs)("div", {
            className: "container-box bg-secondary overflow-hidden",
            children: [
              (0, nr.jsxs)("section", {
                className: "lg:p-20 p-10 lg-screen",
                children: [
                  (0, nr.jsx)("p", {
                    className: "heading text-primary",
                    children: "Who We Are...",
                  }),
                  (0, nr.jsxs)("div", {
                    className: "lg:grid grid-cols-7 lg:mt-20 mt-10",
                    children: [
                      (0, nr.jsxs)("div", {
                        className: "col-span-4 lg:pr-20  wwa",
                        children: [
                          (0, nr.jsx)("p", {
                            className: " text-blackk wwa-sub",
                            children:
                              "HealthGo is founded on the belief that there can certainly be a moderate, affordable, and easily accessible healthcare system for all.",
                          }),
                          (0, nr.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, nr.jsx)("img", {
                                src: cr,
                                alt: "Healthgo Logo",
                                className: "over-up",
                              }),
                              (0, nr.jsx)("img", {
                                src: cr,
                                alt: "Healthgo Logo",
                                className: "over-down",
                              }),
                              (0, nr.jsxs)("div", {
                                className: "wwa-text text-blackk mt-10",
                                children: [
                                  (0, nr.jsx)("p", {
                                    children:
                                      "With this in mind, we have put more work into the research process to get results in achieving this goal.",
                                  }),
                                  (0, nr.jsx)("p", {
                                    children:
                                      "In this, we discovered that integrating Blockchain technology into the healthcare industry would bring great change and adaptive adherence solutions to reduce fatal illness and also reduce the cost of quality healthcare solutions, which is a necessity of life, and offer job opportunities to health practitioners and reduce the unemployment rate.",
                                  }),
                                  (0, nr.jsx)("p", {
                                    children:
                                      "We also act as a third-party educational platform that educates the public about health care and shares the latest updates on health care and Blockchain technology around the world.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, nr.jsx)("div", {
                        className: "col-span-3 lg:pt-0 pt-20",
                        children: (0, nr.jsx)("img", {
                          src: ni,
                          alt: "WWA design",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, nr.jsx)(br, {}),
              (0, nr.jsx)(gr, {}),
            ],
          });
        };
      var ai =
        n.p + "static/media/image14.010a47d70c1b0e97b6a34d9edef24187.svg";
      var ii =
        n.p + "static/media/image16.05cb827d0108f4c89e7622ce0f8e2700.svg";
      var oi =
        n.p + "static/media/image17.50b0ef21fc0276ec7182e34d61293ec4.svg";
      var li =
        n.p + "static/media/image18.b62d6d95c1cd284d7eff4b96e257b463.svg";
      var si =
        n.p + "static/media/image19.dd9a8f30a0ce87dc8d7f5cb0c1e5421e.svg";
      var ci =
          n.p + "static/media/image20.7259c62369ba6fae00d5912ae178de29.svg",
        ui = function () {
          return (0, nr.jsxs)("div", {
            className: "container-box bg-secondary overflow-hidden",
            children: [
              (0, nr.jsxs)("section", {
                className: "lg:p-20 p-10 lg-screen",
                children: [
                  (0, nr.jsx)("p", {
                    className: "heading text-primary",
                    children: "What We Do...",
                  }),
                  (0, nr.jsxs)("div", {
                    className: "lg:grid md:grid grid-cols-7 lg:mt-20 mt-10",
                    children: [
                      (0, nr.jsxs)("div", {
                        className: "col-span-4 lg:pr-20 wwa",
                        children: [
                          (0, nr.jsx)("p", {
                            className: " text-blackk wwa-sub",
                            children:
                              "We advance human dignity and protect the world through our work on transformational issues critical to humanity's shared future.",
                          }),
                          (0, nr.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, nr.jsx)("img", {
                                src: cr,
                                alt: "healthgo Logo",
                                className: "over-up-alt",
                              }),
                              (0, nr.jsx)("img", {
                                src: cr,
                                alt: "healthgo Logo",
                                className: "over-down-alt",
                              }),
                              (0, nr.jsxs)("div", {
                                className: "wwa-text text-blackk mt-10",
                                children: [
                                  (0, nr.jsx)("p", {
                                    children:
                                      "The world's health is a very critical part of humanity's future and this is one of the great fears that International bodies work daily to curb, fighting every epidemic or pandemic in the world.",
                                  }),
                                  (0, nr.jsx)("p", {
                                    className: "mt-5",
                                    children:
                                      "As a strategic startup in the healthcare industry leveraging on blockchain technology, we bring together fresh thinking and diverse voices around innovative ideas to drive progress and tackle problems.",
                                  }),
                                  (0, nr.jsx)("p", {
                                    className: "mt-5",
                                    children:
                                      "We build communities of support and nurture initiatives to advance the dignity and well-being of people's health and financial status by providing affordable and comfortable healthcare systems, ensuring accurate data-keeping to stop repeatitive payments for the diagnosis done before, and enabling quick peer-to-peer cryptographic transactions on our decentralized exchange.",
                                  }),
                                ],
                              }),
                              (0, nr.jsxs)("div", {
                                className: "wwa-text-alt text-blackk mt-10",
                                children: [
                                  (0, nr.jsx)("p", {
                                    children:
                                      "We work behind the scenes as a third-party, shaping negotiations and connecting experts to clients in need of their services. Other times, we drive public awareness and involvement through communications, campaigns, and events.",
                                  }),
                                  (0, nr.jsx)("p", {
                                    className: "mt-3",
                                    children:
                                      "We work to build collective action to drive great awareness into effective healthcare systems and Blockchain adoption in Africa. Blockchain- the only place where everyone on earth can have a voice.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, nr.jsx)("div", {
                        className: "col-span-3 lg:pt-0 pt-20",
                        children: (0, nr.jsx)("img", {
                          src: ai,
                          alt: "WWD imagee",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section pt-20 lg:pt-60",
              }),
              (0, nr.jsx)("section", {
                className: "pb-10 bg-primary lg:p-20 p-10 lg:pt-0",
                children: (0, nr.jsxs)("div", {
                  className: "lg-screen",
                  children: [
                    (0, nr.jsx)("p", {
                      className: "product-head text-white",
                      children: "Our Products",
                    }),
                    (0, nr.jsx)("p", {
                      className: "product-text text-white pt-10",
                      children:
                        "More than telemedicine and teletherapy, HealthGo is a personalized healthcare management service provider leveraging blockchain technology. We offer affordable access to medical specialists and general health care assistance.",
                    }),
                    (0, nr.jsxs)("div", {
                      className: "lg:grid grid-cols-3 gap-10 lg:pt-48",
                      children: [
                        (0, nr.jsxs)("div", {
                          className: "product-card relative",
                          children: [
                            (0, nr.jsx)("img", {
                              src: ii,
                              alt: "Product",
                              className: "card-img",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-20 card-head text-primary",
                              children: "In-app healthcare support",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-10 text-blackk card-text",
                              children:
                                "We coordinate with health workers of all kinds, caregivers to give users the best healthcare adherence plan to improve health outcomes.",
                            }),
                            (0, nr.jsx)("img", {
                              src: mt,
                              alt: "Halthgo Logo",
                              className: "card-logo",
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "product-card relative",
                          children: [
                            (0, nr.jsx)("img", {
                              src: oi,
                              alt: "Product",
                              className: "card-img",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-20 card-head text-primary",
                              children: "Virtual Follow Up",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-10 text-blackk card-text",
                              children:
                                "We have built a follow-up mechanism that ensures that we're tracking adherence, complications, and possible interactions in real-time through a dedicated team of care specialists performing virtual checks and in-house checks.",
                            }),
                            (0, nr.jsx)("img", {
                              src: mt,
                              alt: "Halthgo Logo",
                              className: "card-logo",
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "product-card relative",
                          children: [
                            (0, nr.jsx)("img", {
                              src: li,
                              alt: "Product",
                              className: "card-img",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-20 card-head text-primary",
                              children: "Medication and Diagnosis Delivery",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-10 text-blackk card-text",
                              children:
                                "To save customers time, money, and effort, we provide doorstep delivery of medical care and test results, in-house testing to individual users, and virtual delivery of test results.",
                            }),
                            (0, nr.jsx)("img", {
                              src: mt,
                              alt: "Healthgo Logo",
                              className: "card-logo",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, nr.jsxs)("div", {
                      className: "lg:grid grid-cols-2 lg:pt-48",
                      children: [
                        (0, nr.jsxs)("div", {
                          className: "product-card-big relative lg:pt-0 ",
                          children: [
                            (0, nr.jsx)("img", {
                              src: si,
                              alt: "Product",
                              className: "card-img",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-20 card-head text-primary",
                              children: "In-app Finances",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-10 text-blackk card-text",
                              children:
                                'We created "A Decentralized Cryptocurrency Wallet" with a fully functional peer-to-peer trading facility to buy, sell, hold, and stake different crypto currencies to make it easier for users to get quality health care services at an affordable price. This wallet is fully in the authority of our users to stop paying out of pocket anymore and pay easily for healthcare services, also to get healthcare services on credit',
                            }),
                            (0, nr.jsx)("img", {
                              src: mt,
                              alt: "Healthgo Logo",
                              className: "card-logo",
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "product-card-big relative",
                          children: [
                            (0, nr.jsx)("img", {
                              src: ci,
                              alt: "Product",
                              className: "card-img",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-20 card-head text-primary",
                              children: "Public Transchain",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-10 text-blackk card-text",
                              children:
                                "The WHO loses count on accurate health details, which is one of the major reason researchers aren't getting accurate information about Nigeria's health status. HealthGo pubic transchain would serve as a health record-keeping blockchain that stores health information kept on this blockchain and can be accessed by a wallet ID designated by the blockchain for a specific user.",
                            }),
                            (0, nr.jsx)("img", {
                              src: mt,
                              alt: "Healthgo Logo",
                              className: "card-logo",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section-down pt-40 lg:pt-60 ",
              }),
              (0, nr.jsx)(gr, {}),
            ],
          });
        };
      var di =
        n.p + "static/media/image21.cf77f4ad9c0b33f137e937f972c80952.svg";
      var fi =
        n.p + "static/media/image22.65ff40f31cd9f627c6e27fe2b7eb40f2.svg";
      var hi =
        n.p + "static/media/image23.ab77894784416dcb8f55fa85038ca589.svg";
      var pi =
        n.p + "static/media/image24.316e3bceee0ef81cb16b2d618fd66748.svg";
      var mi =
          n.p + "static/media/image25.a6d6816be0ecbd06e51ab6dfadb2b425.svg",
        gi = function () {
          return (0, nr.jsxs)("div", {
            className: "container-box bg-secondary overflow-hidden",
            children: [
              (0, nr.jsxs)("section", {
                className: "lg:p-20 p-10 lg-screen",
                children: [
                  (0, nr.jsx)("p", {
                    className: "heading text-primary",
                    children: "Why we do this...",
                  }),
                  (0, nr.jsxs)("div", {
                    className: "lg:grid grid-cols-7 mt-10 lg:mt-20",
                    children: [
                      (0, nr.jsxs)("div", {
                        className: "col-span-4 lg:pr-20 wwa",
                        children: [
                          (0, nr.jsx)("p", {
                            className: " text-blackk wwa-sub",
                            children:
                              "When we act together to affect humanity positively, change happens.",
                          }),
                          (0, nr.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, nr.jsx)("img", {
                                src: cr,
                                alt: "Halthgo Logo",
                                className: "over-up",
                              }),
                              (0, nr.jsx)("img", {
                                src: cr,
                                alt: "healthgo Logo",
                                className: "over-down",
                              }),
                              (0, nr.jsxs)("div", {
                                className: "wwa-text text-blackk mt-10",
                                children: [
                                  (0, nr.jsx)("p", {
                                    children:
                                      "Looking at the world we live in today, our challenges are so intertwined that we can only solve them together, with smart responses across countries, cultures, and peoples.",
                                  }),
                                  (0, nr.jsx)("p", {
                                    children:
                                      "As our world grows more connected and threats become more complex, the success of having interoperable healthcare services ready to be used by all is becoming more essential to humanity. That is why the existence of HealthGo technologies is essential for humanity.",
                                  }),
                                  (0, nr.jsx)("p", {
                                    children:
                                      "HealthGo Technologies is committed to delivering on the promise of providing accessible and interoperable healthcare solutions. We are proud to have it in our name. We are determined to see it succeed.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, nr.jsx)("div", {
                        className: "col-span-3 lg:pt-0 pt-20",
                        children: (0, nr.jsx)("img", {
                          src: di,
                          alt: "Section Design",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section pt-36 lg:pt-72",
              }),
              (0, nr.jsx)("section", {
                className: "pb-10 bg-primary lg:p-20 p-10 lg:pt-0",
                children: (0, nr.jsxs)("div", {
                  className: "lg-screen",
                  children: [
                    (0, nr.jsx)("p", {
                      className: "product-head text-white",
                      children: "Our Focus",
                    }),
                    (0, nr.jsx)("p", {
                      className: "product-text text-white pt-10",
                      children:
                        "Among other Sustainable Development Goals that our product covers in one way or the other, here are the main SDGs that we focus on achieving",
                    }),
                    (0, nr.jsxs)("div", {
                      className:
                        "grid lg:grid-cols-4 md:grid-cols-2 gap-10 lg:pt-48",
                      children: [
                        (0, nr.jsxs)("div", {
                          className: "focus-card relative",
                          children: [
                            (0, nr.jsx)("img", {
                              src: fi,
                              alt: "SDG 03",
                              className: "focus-card-img",
                            }),
                            (0, nr.jsx)("p", {
                              className: " focus-card-head text-primary",
                              children: "SDG 03",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-10 text-blackk card-text",
                              children: "Good Health and WellBeing",
                            }),
                            (0, nr.jsx)("img", {
                              src: mt,
                              alt: "Healthgo Logo",
                              className: "card-logo",
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "focus-card relative",
                          children: [
                            (0, nr.jsx)("img", {
                              src: hi,
                              alt: "SDG 17",
                              className: "focus-card-img",
                            }),
                            (0, nr.jsx)("p", {
                              className: " focus-card-head text-primary",
                              children: "SDG 17",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-10 text-blackk card-text",
                              children: "Partnership for The goals",
                            }),
                            (0, nr.jsx)("img", {
                              src: mt,
                              alt: "Healthgo Logo",
                              className: "card-logo",
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "focus-card relative",
                          children: [
                            (0, nr.jsx)("img", {
                              src: pi,
                              alt: "SDG 04",
                              className: "focus-card-img",
                            }),
                            (0, nr.jsx)("p", {
                              className: " focus-card-head text-primary",
                              children: "SDG 04",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-10 text-blackk card-text",
                              children: "Quality Education (Health Education)",
                            }),
                            (0, nr.jsx)("img", {
                              src: mt,
                              alt: "Healthgo Logo",
                              className: "card-logo",
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "focus-card relative",
                          children: [
                            (0, nr.jsx)("img", {
                              src: mi,
                              alt: "SDG 08",
                              className: "focus-card-img",
                            }),
                            (0, nr.jsx)("p", {
                              className: " focus-card-head text-primary",
                              children: "SDG 08",
                            }),
                            (0, nr.jsx)("p", {
                              className: "pt-10 text-blackk card-text",
                              children: "Decent work and Economic Growth",
                            }),
                            (0, nr.jsx)("img", {
                              src: mt,
                              alt: "Healthgo Logo",
                              className: "card-logo",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section-down pt-40 lg:pt-60 ",
              }),
              (0, nr.jsx)(gr, {}),
            ],
          });
        },
        vi = function () {
          return (0, nr.jsx)("section", {
            className: "container-box bg-secondary lg:p-20 p-10",
            children: (0, nr.jsxs)("div", {
              className: "lg-screen",
              children: [
                (0, nr.jsx)("p", {
                  className: "privacy text-primary",
                  children: "Privacy Policy",
                }),
                (0, nr.jsxs)("div", {
                  className: "lg:grid grid-cols-5 gap-10 pt-10",
                  children: [
                    (0, nr.jsx)("div", {
                      className: " lg:col-span-2 ",
                      children: (0, nr.jsx)("div", {
                        className: "privacy-box",
                        children: (0, nr.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, nr.jsxs)("div", {
                              className: "privacy-card",
                              children: [
                                (0, nr.jsx)("p", {
                                  className: "privacy-card-head text-primary",
                                  children: "Table of Contents",
                                }),
                                (0, nr.jsxs)("ul", {
                                  className: " pt-10 content-text ",
                                  children: [
                                    (0, nr.jsx)("a", {
                                      href: "#",
                                      children: (0, nr.jsxs)("li", {
                                        className: "flex items-center mb-5",
                                        children: [
                                          "Introduction",
                                          (0, nr.jsx)("span", {
                                            className: "ml-3",
                                            children: (0, nr.jsx)(ht, {}),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, nr.jsx)("a", {
                                      href: "#registration",
                                      children: (0, nr.jsxs)("li", {
                                        className: "flex items-center mb-5",
                                        children: [
                                          "Registration and account",
                                          (0, nr.jsx)("span", {
                                            className: "ml-3",
                                            children: (0, nr.jsx)(ht, {}),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, nr.jsx)("a", {
                                      href: "#service",
                                      children: (0, nr.jsxs)("li", {
                                        className: "flex items-center mb-5",
                                        children: [
                                          "Service Limitations and Modifications",
                                          (0, nr.jsx)("span", {
                                            className: "ml-3",
                                            children: (0, nr.jsx)(ht, {}),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, nr.jsx)("a", {
                                      href: "#use",
                                      children: (0, nr.jsxs)("li", {
                                        className: "flex items-center mb-5",
                                        children: [
                                          "Use of website and mobile applications",
                                          (0, nr.jsx)("span", {
                                            className: "ml-3",
                                            children: (0, nr.jsx)(ht, {}),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, nr.jsx)("a", {
                                      href: "#agreement",
                                      children: (0, nr.jsxs)("li", {
                                        className: "flex items-center mb-20",
                                        children: [
                                          "User agreement and disclaimer",
                                          (0, nr.jsx)("span", {
                                            className: "ml-3",
                                            children: (0, nr.jsx)(ht, {}),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, nr.jsx)("img", {
                              src: cr,
                              alt: "Heealthgo Logo",
                              className: "privacy-card-logo",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, nr.jsxs)("div", {
                      className: "col-span-3 lg:pt-0 pt-40",
                      children: [
                        (0, nr.jsxs)("div", {
                          id: "introduction",
                          children: [
                            (0, nr.jsx)("p", {
                              className: "privacy-head",
                              children: "Introduction",
                            }),
                            (0, nr.jsxs)("div", {
                              className: "privacy-text",
                              children: [
                                (0, nr.jsx)("p", {
                                  children:
                                    "HealthGO technologies is the trading name for the company. We operate an/a Healthcare platform consisting of a website and mobile application together with supporting payment infrastructure for the purchase of Telemedicine products and/or services.",
                                }),
                                (0, nr.jsx)("p", {
                                  children:
                                    "These General terms and conditions shall apply to users of the platform (website and mobile application) and shall govern your use of the platform and related services. By using our platform you accept these general terms and conditions in full. If you disagree with these general terms and conditions or any part of these General terms and conditions you must not use our platform.",
                                }),
                                (0, nr.jsx)("p", {
                                  children:
                                    "If you use our platform in the course of a business or other organizational project then by so doing you:",
                                }),
                                (0, nr.jsxs)("ul", {
                                  className: "list-disc pl-10",
                                  children: [
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Confirm that you have obtained the necessary authority to agree to these general terms and conditions",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Bind both yourself and the person company or other legal entity that operates that business or organizational project to these general terms and conditions; and",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Agree that you in these general terms and conditions shall reference both the individual user and the relevant person company or legal entity unless the context requires otherwise.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, nr.jsx)("div", {
                          className: "pt-24",
                          id: "registration",
                        }),
                        (0, nr.jsxs)("div", {
                          children: [
                            (0, nr.jsx)("p", {
                              className: "privacy-head",
                              children: "Registration and account",
                            }),
                            (0, nr.jsxs)("div", {
                              className: "privacy-text",
                              children: [
                                (0, nr.jsx)("p", {
                                  children:
                                    "You may not register with our platform if you are under IB years of age (by using our platform or agreeing to these general terms and conditions you warrant and represent to us that you are at least 18 years of age).",
                                }),
                                (0, nr.jsx)("p", {
                                  children:
                                    "If you register far an account with our platform you will be asked to provide an email address/user ID and password and you agree to:",
                                }),
                                (0, nr.jsxs)("ul", {
                                  className: "list-disc pl-10",
                                  children: [
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Keep your password confidential;",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Notify us in writing immediately (using our contact details provided at HealthGO technologies if you become aware of any disclosure of your password; and",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Be responsible for any activity on our platform arising out of any failure to keep your password confidential and that you may be held liable for any lasses arising out of such a failure.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Your account shall be used exclusively by you and you shall not transfer your account to any third party. If you authorize any third party to manage your account on your behalf this shall be at your own risk.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "We may suspend or cancel your account details at any time in our sole discretion and without notice or explanation providing that if we cancel any products or services you have paid far but not received and you have not breached these general terms and conditions we will refund you in respect of the same.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "You may cancel your account on our platform by contacting us.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, nr.jsx)("div", {
                          className: "pt-24",
                          id: "service",
                        }),
                        (0, nr.jsxs)("div", {
                          children: [
                            (0, nr.jsx)("p", {
                              className: "privacy-head ",
                              children: "Service Limitations and Modifications",
                            }),
                            (0, nr.jsxs)("div", {
                              className: "privacy-text",
                              children: [
                                (0, nr.jsx)("p", {
                                  children:
                                    "We use reasonable care and skill to keep the Platform's Service operational and to provide you with a personalized, immersive experience. However, our service offerings and their availability may change from time to time and subject to applicable laws, without liability to you; for example:",
                                }),
                                (0, nr.jsx)("p", {
                                  children:
                                    "If you register far an account with our platform you will be asked to provide an email address/user ID and password and you agree to:",
                                }),
                                (0, nr.jsxs)("ul", {
                                  className: "list-disc pl-10",
                                  children: [
                                    (0, nr.jsx)("li", {
                                      children:
                                        "HealthGO technologies service may experience temporary interruptions due to technical difficulties, maintenance or testing, or updates, including those required to reflect changes in relevant laws and regulatory requirements.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "We aim to evolve and improve our services constantly, and we may modify, suspend, or stop (permanently or temporarily) providing all or part of the HealthGO technologies service (including particular functions, features, subscription plans and promotional offerings).",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "The platform has no obligation to provide any specific content through the HealthGO technologies",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "If you have already paid for a subscription that got discontinued by our discretion, we will refund the fees that were paid for the service that was discontinued by us. Your account and billing information must be up to date in order for us to refund you.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "We have no liability to you, nor any obligation to provide a refund to you, in connection with internet or other service outages or failures that are caused by the actions of government authorities. other third parties or events beyond our control.",
                                    }),
                                  ],
                                }),
                                (0, nr.jsx)("p", {
                                  children:
                                    "Notwithstanding you may forward links to products and/or services on our website and redistribute our newsletter and promotional materials in print and electronic form to any person.",
                                }),
                                (0, nr.jsx)("p", {
                                  children:
                                    "We reserve the right to suspend or restrict access to our website to areas of our website and/or to functionality upon our website. We may far example suspend access to the website during server maintenance or when we update the website. You must not circumvent or bypass or attempt to circumvent or bypass any access restriction measures on the website.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, nr.jsx)("div", { className: "pt-24", id: "use" }),
                        (0, nr.jsxs)("div", {
                          children: [
                            (0, nr.jsx)("p", {
                              className: "privacy-head",
                              children:
                                "Use of website and mobile applications",
                            }),
                            (0, nr.jsxs)("div", {
                              className: "privacy-text",
                              children: [
                                (0, nr.jsx)("p", { children: "You may:" }),
                                (0, nr.jsxs)("ul", {
                                  className: "list-disc pl-10",
                                  children: [
                                    (0, nr.jsx)("li", {
                                      children:
                                        "View pages from our website in a web browser",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Download pages from our website for caching in a web browser",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Print pages from our website for your own personal and non-commercial use providing that such printing is not systematic or excessive; and",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Use our platform services by means of a web browser subject to the other provisions of these general terms and conditions.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Except as expressly permitted by these general terms and conditions you must not edit or otherwise modify any material on our website. Unless you own or control the relevant rights in the material you must not: Republish material from our website (including republication on another website) Tell, rent or sub-license material from our website; Show any material from our website in public; Exploit material from our website for a commercial purpose; or Redistribute material from our website.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Except as expressly permitted by these general terms and conditions you must not edit or otherwise modify any material on our website.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Unless you own or control the relevant rights in the material you must not:",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Republish material from our website (including republication on another website)",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Tell, rent or sub-license material from our website;",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Show any material from our website in public; or",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Exploit material from our website for a commercial purpose;",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Redistribute material from our website.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, nr.jsx)("div", {
                          className: "pt-24",
                          id: "agreement",
                        }),
                        (0, nr.jsxs)("div", {
                          children: [
                            (0, nr.jsx)("p", {
                              className: "privacy-head",
                              children: "USER AGREEMENT AND DISCLAIMER",
                            }),
                            (0, nr.jsxs)("div", {
                              className: "privacy-text",
                              children: [
                                (0, nr.jsxs)("ul", {
                                  className: "list-disc pl-10",
                                  children: [
                                    (0, nr.jsx)("li", {
                                      children:
                                        "The information on this website [or mobile application] is not intended or implied to be a substitute for professional medical advice, diagnosis or treatment. All content, including text, graphics, images and information, contained on or available through this website is for general information purposes only. All information on this site is well researched and reviewed and is provided in good faith. HealthGo makes no representation or warranty of any kind, express or implied, and assumes no responsibility for the accuracy, validity, reliability, availability or completeness of any information contained on or available through this website, and such information is subject to change without notice.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Under no circumstance shall we have any liability to you (whether in contract, tort, or otherwise) for any loss or damage of any kind incurred as a result of the use of this site [or mobile application] or reliance on any information provided on the site [or mobile application]. Your use of the site [or our mobile application] and your reliance on any information thereof is solely at your own risk.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "We advise that you confirm any information obtained from or through this website [or our mobile application] with other sources, and review all information regarding any medical condition or treatment with your physician or heath practitioner. Never disregard professional medical advice or delay seeking medical treatment because of something you have read on or accessed through this website.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "HealthGo does not recommend, endorse or make any representation about the efficacy, appropriateness or suitability of any specific tests, products, procedures, treatments, services, opinions, health care providers or other information that may be contained on or available through this web site. HealthGo is neither responsible nor liable for any advice, course of treatment, diagnosis or any other information, services or products that you obtain through this website.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "Medical and health practitioners affiliated with HealthGo are duly licensed and registered professionals. Health practitioners associated with HealthGo are independent practitioners and members of health institutions in Nigeria and are neither employees nor agents of HealthGo. To this extent, HealthGo is not responsible for the services provided by the said health practitioners.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "HealthGo shall not bear any liability for hyperlinks to websites or services of third parties included on this website [or our mobile application]. From our service, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality and relevant links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.",
                                    }),
                                    (0, nr.jsx)("li", {
                                      children:
                                        "In the event that any injury or loss is occasioned by the use of this website, the user shall immediately notify us and give particulars of such injury or loss.",
                                    }),
                                  ],
                                }),
                                (0, nr.jsx)("p", {
                                  children:
                                    "By accessing or using our service, you signify that you have read, understood, and agreed to the disclaimer statement contained above.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        yi = function () {
          return (0, nr.jsxs)(nr.Fragment, {
            children: [
              (0, nr.jsx)("div", {
                className: "container-box bg-secondary lg:p-20 p-10",
                children: (0, nr.jsxs)("div", {
                  className: "lg-screen",
                  children: [
                    (0, nr.jsx)("p", {
                      className: "contact-head text-primary mb-10",
                      children: "Contact Us",
                    }),
                    (0, nr.jsx)("div", {
                      className: "pb-20",
                      children: (0, nr.jsxs)("div", {
                        className: "relative",
                        children: [
                          (0, nr.jsx)("div", {
                            className: "contact-card ",
                            children: (0, nr.jsx)("p", {
                              className: "contact-text",
                              children:
                                "We are always happy to form more partnerships and connect with like minds for the advancement of humanity as a whole. We\u2019d be pleased to partner with you. Kindly contact us through any of the means below.",
                            }),
                          }),
                          (0, nr.jsx)("img", {
                            src: cr,
                            alt: "Halthgo Logo",
                            className: "contact-logo",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, nr.jsx)("div", {
                className: "bg-secondary",
                children: (0, nr.jsx)("section", {
                  className: "lg:p-20 lg:pt-40 lg:pb-0 p-10 pt-20 lg-screen",
                  children: (0, nr.jsxs)("div", {
                    className: "lg:grid grid-cols-7",
                    children: [
                      (0, nr.jsxs)("div", {
                        className: "col-span-4 lg:pl-20",
                        children: [
                          (0, nr.jsx)("p", {
                            className: "waitlist-head text-primary ",
                            children: "Let's Connect",
                          }),
                          (0, nr.jsx)("div", {
                            className: "col-span-4",
                            children: (0, nr.jsx)("p", {
                              className: "text-blackk  connect-text pt-10 ",
                              children:
                                "Connect with HealthGO on various social media platforms via the links below...or send a mail.",
                            }),
                          }),
                          (0, nr.jsxs)("div", {
                            className: "pt-10 icons",
                            children: [
                              (0, nr.jsx)("a", {
                                href: "https://www.linkedin.com/company/healthgohq/",
                                children: (0, nr.jsx)("img", {
                                  src: pr,
                                  alt: "linkedin",
                                }),
                              }),
                              (0, nr.jsxs)("a", {
                                href: "https://www.instagram.com/healthgohq/",
                                children: [
                                  " ",
                                  (0, nr.jsx)("img", {
                                    src: hr,
                                    alt: "instagram",
                                  }),
                                ],
                              }),
                              (0, nr.jsx)("a", {
                                href: "https://twitter.com/healthgoHQ",
                                children: (0, nr.jsx)("img", {
                                  src: dr,
                                  alt: "twitter",
                                }),
                              }),
                              (0, nr.jsx)("a", {
                                href: "https://t.me/HealthgoHQ",
                                children: (0, nr.jsx)("img", {
                                  src: ur,
                                  alt: "telegram",
                                }),
                              }),
                              (0, nr.jsx)("a", {
                                href: "https://medium.com/@HealthGO_HQ",
                                children: (0, nr.jsx)("img", {
                                  src: fr,
                                  alt: "medium",
                                }),
                              }),
                            ],
                          }),
                          (0, nr.jsx)("button", {
                            className:
                              "mt-8 bg-secondary border border-primary hover:bg-primary hover:text-white text-primary font-bold py-3 px-6 rounded inline-flex items-center",
                            children: (0, nr.jsxs)("a", {
                              href: "mailto:hello@healthgotechnologies.com",
                              className: "inline-flex items-center",
                              children: [
                                (0, nr.jsx)("span", {
                                  className: "mr-2",
                                  children: "Send a mail",
                                }),
                                " ",
                                (0, nr.jsx)(ht, {}),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, nr.jsx)("div", {
                        className: "col-span-3 pt-20 lg:pt-0",
                        children: (0, nr.jsx)("img", {
                          src: mr,
                          alt: "Contact",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
      var bi =
          n.p + "static/media/image26.1a57b9859b043c3d752364e08826f0d8.svg",
        xi = function () {
          return (0, nr.jsxs)("section", {
            className: "container-box bg-secondary ",
            children: [
              (0, nr.jsxs)("div", {
                className: "lg:grid grid-cols-7 lg:p-20 p-10",
                children: [
                  (0, nr.jsxs)("div", {
                    className:
                      "col-span-4 lg:mr-20 lg:mt-20 align-center career-box",
                    children: [
                      (0, nr.jsx)("p", {
                        className: "text-primary career-head",
                        children: "There are no open roles currently...",
                      }),
                      (0, nr.jsx)("p", {
                        className: "sub-head mt-10",
                        children:
                          "Kindly join our wait list to be informed as soon as there\u2019s any open role at HealthGO.",
                      }),
                      (0, nr.jsx)("a", {
                        href: "https://forms.gle/ebsNDXNyoKX1V9GK6",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, nr.jsxs)("button", {
                          className:
                            "mt-8 bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-6 rounded inline-flex items-center",
                          children: [
                            (0, nr.jsx)("span", {
                              className: "mr-2",
                              children: "Join Waitlist",
                            }),
                            " ",
                            (0, nr.jsx)(ht, {}),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, nr.jsx)("div", {
                    className: "col-span-3 lg:pt-0 pt-10",
                    children: (0, nr.jsx)("img", { src: bi, alt: "Vacancy" }),
                  }),
                ],
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section pt-20 lg:pt-60",
              }),
              (0, nr.jsxs)("div", {
                className:
                  "lg:p-20 lg:pt-0 p-10 grid lg:grid-cols-2 gap-10 bg-primary",
                children: [
                  (0, nr.jsx)("p", {
                    className: "text-secondary career-head",
                    children: "Are you an healthcare provider?",
                  }),
                  (0, nr.jsxs)("div", {
                    children: [
                      (0, nr.jsx)("p", {
                        className: "sub-head text-white lg:mt-5",
                        children:
                          "Are you a provider aiming at providing your services on the HealthGo app?",
                      }),
                      (0, nr.jsx)("a", {
                        href: "https://forms.gle/m1pfY2sNSqHSkR1N6",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, nr.jsxs)("button", {
                          className:
                            "mt-10 bg-white hover:bg-secondary text-primary font-bold py-3 px-6 rounded inline-flex items-center",
                          children: [
                            (0, nr.jsx)("span", {
                              className: "mr-2",
                              children: "Join Us",
                            }),
                            " ",
                            (0, nr.jsx)(ht, {}),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section-down pt-20 lg:pt-48 ",
              }),
              (0, nr.jsx)(gr, {}),
            ],
          });
        },
        wi = function (e) {
          var n = e.children,
            r = je().pathname;
          return (
            (0, t.useEffect)(
              function () {
                window.scrollTo(0, 0);
              },
              [r]
            ),
            n || null
          );
        };
      var ji = n.p + "static/media/404.8ec7d7812138548912e3637f1ae7bdf6.svg",
        Ni = function () {
          return (0, nr.jsxs)("section", {
            className: "bg-secondary text-center _404-page lg:p-20 p-10",
            children: [
              (0, nr.jsx)("img", {
                src: ji,
                alt: "404",
                className: "pt-8 _404",
              }),
              (0, nr.jsx)("p", {
                className: "text-primary oops",
                children: "Oops!",
              }),
              (0, nr.jsx)("p", {
                className: "oops-text",
                children:
                  "This Page took a wellness break. We'll get you on track soon!",
              }),
              (0, nr.jsx)(Ve, {
                to: "/",
                children: (0, nr.jsxs)("button", {
                  className:
                    "mt-6 bg-primary hover:bg-white hover:text-primary text-white py-3 px-6 rounded inline-flex items-center",
                  children: [
                    (0, nr.jsx)("span", {
                      className: "mr-2",
                      children: "Let's go home then",
                    }),
                    (0, nr.jsx)(ht, {}),
                  ],
                }),
              }),
            ],
          });
        };
      var ki =
        n.p + "static/media/image28.5115bf9d8f1e4caf7dffc60383d76655.svg";
      var Si =
          n.p + "static/media/image27.3fd31e23a4b2ac8a210992d5a3572912.svg",
        Ei = function () {
          return (0, nr.jsxs)("div", {
            className: "container-box bg-secondary overflow-hidden",
            children: [
              (0, nr.jsx)("section", {
                className: "lg:p-20 p-10 lg-screen",
                children: (0, nr.jsxs)("div", {
                  className: "lg:grid grid-cols-7 mt-10 lg:mt-20",
                  children: [
                    (0, nr.jsxs)("div", {
                      className: "col-span-4 lg:pr-20 wwa",
                      children: [
                        (0, nr.jsx)("p", {
                          className: " text-primary partner",
                          children:
                            "Become an Healthgo partner and get benefits made specifically for you.",
                        }),
                        (0, nr.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, nr.jsx)("img", {
                              src: cr,
                              alt: "Halthgo Logo",
                              className: "over-up",
                            }),
                            (0, nr.jsx)("img", {
                              src: cr,
                              alt: "healthgo Logo",
                              className: "over-down",
                            }),
                            (0, nr.jsx)("div", {
                              className: "wwa-text text-blackk mt-10",
                              children: (0, nr.jsx)("p", {
                                children:
                                  "Whether you are a healthcare personnel or a non-healthcare practitioner, partnering with HealthGO can help you accelerate health growth and scale across financially. You can also earn commissions by referring HealthGo across your network.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, nr.jsx)("div", {
                      className: "col-span-3 lg:pt-0 pt-20",
                      children: (0, nr.jsx)("img", {
                        src: di,
                        alt: "Section Design",
                      }),
                    }),
                  ],
                }),
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section pt-36 lg:pt-72",
              }),
              (0, nr.jsx)("section", {
                className:
                  "pb-10 bg-primary lg:p-20 p-10 lg:pt-0 lg:pb-0 md:pb-0",
                children: (0, nr.jsxs)("div", {
                  className: "lg-screen grid lg:grid-cols-11 md:grid-cols-10",
                  children: [
                    (0, nr.jsx)("img", {
                      src: Si,
                      alt: "Section Design",
                      className: "col-span-5",
                    }),
                    (0, nr.jsxs)("div", {
                      className: "col-span-6",
                      children: [
                        (0, nr.jsx)("p", {
                          className: "partner text-white",
                          children:
                            "Begin your journey to becoming an Healthgo Referral partner.",
                        }),
                        (0, nr.jsx)("div", {
                          className: "partner-line mt-10",
                          children: (0, nr.jsx)("p", {
                            className: "line-text text-center",
                            children:
                              "With Healthgo you can be the best referral partner!",
                          }),
                        }),
                        (0, nr.jsx)("p", {
                          className: "sub-head mt-14 text-white",
                          children:
                            "A Healthgo Referral Partner is a business, individual or enterprise corporation that earn commissions for each legitimate referral that referred to Healthgo. Referrals are one of the best ways to make money with us at HealthGo.",
                        }),
                        (0, nr.jsx)("a", {
                          href: "https://forms.gle/a7ZVjH6Gt2jG4YJaA",
                          target: "_blank",
                          rel: "noreferrer",
                          children: (0, nr.jsxs)("button", {
                            className:
                              "mt-8 bg-secondary text-primary font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110",
                            children: [
                              (0, nr.jsx)("span", {
                                className: "mr-2",
                                children: "Become a Partner",
                              }),
                              (0, nr.jsx)(ht, {}),
                            ],
                          }),
                        }),
                        (0, nr.jsx)("a", {
                          href: "mailto:partners@healthgotechnologies.com",
                          children: (0, nr.jsx)("p", {
                            className: "mt-3 sub-head text-white",
                            children: "Mail: partners@healthgotechnologies.com",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section-down pt-40 lg:pt-60 ",
              }),
              (0, nr.jsx)("section", {
                className: "lg:p-20 p-10 lg-screen",
                children: (0, nr.jsxs)("div", {
                  className: "grid lg:grid-cols-2 md:grid-cols-2",
                  children: [
                    (0, nr.jsxs)("div", {
                      children: [
                        (0, nr.jsx)("p", {
                          className: "text-primary partner",
                          children: "Grow your revenue as a Referral Partner",
                        }),
                        (0, nr.jsxs)("div", {
                          className: "partner-text mt-10",
                          children: [
                            (0, nr.jsx)("p", {
                              children:
                                "Earn up to 1% commission (of the net revenue) for every referral made.",
                            }),
                            (0, nr.jsx)("p", {
                              className: "mt-5",
                              children:
                                "Earn recurring commissions when a lead is converted to a paying customer on HealthGo.",
                            }),
                            (0, nr.jsx)("p", {
                              className: "mt-5",
                              children:
                                "Keep track of all referrals from your HealthGo app and withdraw (payout) commissions to preferred bank accounts with ease. Commissions will reflect on your HealthGo balance. o.",
                            }),
                            (0, nr.jsxs)("p", {
                              className: "mt-5",
                              children: [
                                "Get access to HealthGO referral partner program and event.",
                                " ",
                              ],
                            }),
                            (0, nr.jsx)("p", {
                              className: "mt-5",
                              children:
                                "Increase in referral partner loyalty by making sure people or startups referred get to be active on the Platform.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, nr.jsx)("div", {
                      className: "mt-10 lg:mt-0 md:mt-0",
                      children: (0, nr.jsx)("img", {
                        src: ki,
                        alt: "Section Design",
                      }),
                    }),
                  ],
                }),
              }),
              (0, nr.jsx)("div", {
                className: "waitlist-section pt-36 lg:pt-72",
              }),
              (0, nr.jsxs)("section", {
                className: "lg:p-20 lg:pb-40 p-10 lg:pt-0 pt-0 bg-primary",
                children: [
                  (0, nr.jsx)("p", {
                    className: "benefits text-center text-white",
                    children: "Partner Benefits",
                  }),
                  (0, nr.jsx)("p", {
                    className: "benefits-sub pt-5 pb-20 text-center text-white",
                    children: "Some of the numerous benefits you stand to gain",
                  }),
                  (0, nr.jsx)("div", {
                    className: "lg-screen",
                    children: (0, nr.jsxs)("div", {
                      className: "grid lg:grid-cols-2 md:grid-cols-2 gap-10",
                      children: [
                        (0, nr.jsxs)("div", {
                          className: "partner-card-1 p-10",
                          children: [
                            (0, nr.jsx)("p", {
                              className: "partner-card-h",
                              children:
                                "Partner with Healthgo to accelerate growth",
                            }),
                            (0, nr.jsx)("p", {
                              className: "partner-card-t mt-5",
                              children:
                                "With access to our wide network of partners, you can expand your reach and gain commission in referring more partners that are active.",
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "partner-card-2 p-10",
                          children: [
                            (0, nr.jsx)("p", {
                              className: "partner-card-h",
                              children: "Increase customer loyalty",
                            }),
                            (0, nr.jsx)("p", {
                              className: "partner-card-t mt-5",
                              children:
                                "Gain increased customer loyalty by becoming associated with trusted brands and industry partners.",
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "partner-card-3 p-10",
                          children: [
                            (0, nr.jsx)("p", {
                              className: "partner-card-h",
                              children:
                                "Increase efficiency in crucial business areas",
                            }),
                            (0, nr.jsx)("p", {
                              className: "partner-card-t mt-5",
                              children:
                                "The Healthgo Partner Program provides access to resources that help you improve the efficiency of operations, increase in sales, and create long-term relationships.",
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "partner-card-4 p-10",
                          children: [
                            (0, nr.jsx)("p", {
                              className: "partner-card-h",
                              children: "Earn from the comfort of your home",
                            }),
                            (0, nr.jsx)("p", {
                              className: "partner-card-t mt-5",
                              children:
                                "Earn commissions for each valid lead of individuals and startups you refer to Healtgo. No other implementation is required.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Ci = function () {
          var e = c((0, t.useState)(""), 2),
            n = e[0],
            r = e[1],
            a = c((0, t.useState)(""), 2),
            i = a[0],
            o = a[1],
            l = function (e) {
              e.preventDefault();
              var t = { Email: n };
              tr.post(
                "https://sheet.best/api/sheets/cf5fe4b9-b70b-415c-9d68-0e71dfbc1ff3",
                t
              )
                .then(function (e) {
                  r(""),
                    o(
                      "You have successfully subscribed to our mailing list. Thank you!"
                    );
                })
                .catch(function (e) {
                  console.error("Errorssss:", e);
                });
            };
          return (0, nr.jsx)("div", {
            children: (0, nr.jsxs)("section", {
              className: "bg-primary pt-20",
              children: [
                (0, nr.jsxs)("div", {
                  className:
                    "footer lg:p-20 lg:pt-0 p-10 lg:grid md:grid grid-cols-2 gap-10 lg:block md:block hidden lg-screen",
                  children: [
                    (0, nr.jsxs)("div", {
                      className: "lg:grid grid-cols-2  gap-5",
                      children: [
                        (0, nr.jsxs)("div", {
                          children: [
                            (0, nr.jsx)("img", {
                              src: mt,
                              alt: "Healthgo Logo",
                            }),
                            (0, nr.jsx)("p", {
                              className: "name mt-5 text-white",
                              children: "HealthGO Technologies",
                            }),
                            (0, nr.jsx)("p", {
                              className: "motto text-white",
                              children: "...quality healthcare for all",
                            }),
                            (0, nr.jsx)("p", {
                              className: "copyright pt-10 text-white",
                              children: "\xa9 Copyrights 2023",
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "pt-10",
                          children: [
                            (0, nr.jsx)("p", {
                              className: "footer-head text-white",
                              children: "CONTACT",
                            }),
                            (0, nr.jsxs)("ul", {
                              children: [
                                (0, nr.jsxs)("li", {
                                  className: "flex items-center text-white",
                                  children: [
                                    (0, nr.jsx)("span", {
                                      className: "mr-3",
                                      children: (0, nr.jsx)(nt, {
                                        className: "icon",
                                      }),
                                    }),
                                    "Lagos, Nigeria",
                                  ],
                                }),
                                (0, nr.jsx)("li", {
                                  children: (0, nr.jsxs)("a", {
                                    href: "tel:+2348131927155",
                                    className: "flex items-center text-white",
                                    children: [
                                      (0, nr.jsx)("span", {
                                        className: "mr-3",
                                        children: (0, nr.jsx)(lt, {
                                          className: "icon ",
                                        }),
                                      }),
                                      "+234 813 192 7155",
                                    ],
                                  }),
                                }),
                                (0, nr.jsx)("li", {
                                  children: (0, nr.jsxs)("a", {
                                    href: "mailto:hello@healthgotechnologies.com",
                                    className: "flex items-center text-white",
                                    children: [
                                      (0, nr.jsx)("span", {
                                        className: "mr-3",
                                        children: (0, nr.jsx)(rt, {
                                          className: "icon",
                                        }),
                                      }),
                                      "hello@healthgotechnologies.com",
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, nr.jsxs)("div", {
                              className: "flex text-white pt-5",
                              children: [
                                (0, nr.jsx)("a", {
                                  href: "https://www.linkedin.com/company/healthgohq/",
                                  children: (0, nr.jsx)(ct, {
                                    className: "sm-icon",
                                  }),
                                }),
                                (0, nr.jsx)("a", {
                                  href: "https://www.instagram.com/healthgohq/",
                                  children: (0, nr.jsx)(st, {
                                    className: "sm-icon",
                                  }),
                                }),
                                (0, nr.jsx)("a", {
                                  href: "https://twitter.com/healthgoHQ",
                                  children: (0, nr.jsx)(dt, {
                                    className: "sm-icon",
                                  }),
                                }),
                                (0, nr.jsx)("a", {
                                  href: "https://t.me/HealthgoHQ",
                                  children: (0, nr.jsx)(ut, {
                                    className: "sm-icon",
                                  }),
                                }),
                                (0, nr.jsx)("a", {
                                  href: "https://medium.com/@HealthGO_HQ",
                                  children: (0, nr.jsx)(ot, {
                                    className: "sm-icon",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, nr.jsxs)("div", {
                      className: "lg:grid grid-cols-2 gap-5",
                      children: [
                        (0, nr.jsxs)("div", {
                          className: "grid grid-cols-2 gap-5 pt-10",
                          children: [
                            (0, nr.jsxs)("div", {
                              children: [
                                (0, nr.jsx)("p", {
                                  className: "footer-head text-white",
                                  children: "QUICK LINKS",
                                }),
                                (0, nr.jsxs)("ul", {
                                  className: "text-white",
                                  children: [
                                    (0, nr.jsx)("li", {
                                      children: (0, nr.jsx)("a", {
                                        href: "https://play.google.com/store/apps/details?id=com.healthgo",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Download the App",
                                      }),
                                    }),
                                    (0, nr.jsx)("li", {
                                      children: (0, nr.jsx)(Ve, {
                                        to: "/",
                                        children: " Home ",
                                      }),
                                    }),
                                    (0, nr.jsx)("li", {
                                      children: (0, nr.jsx)(Ve, {
                                        to: "about",
                                        children: "About Us",
                                      }),
                                    }),
                                    (0, nr.jsx)("li", {
                                      children: (0, nr.jsx)(Ve, {
                                        to: "contact",
                                        children: "Contact Us",
                                      }),
                                    }),
                                    (0, nr.jsx)("li", {
                                      children: (0, nr.jsx)(Ve, {
                                        to: "events",
                                        children: "Events",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, nr.jsxs)("div", {
                              children: [
                                (0, nr.jsx)("p", {
                                  className: "footer-head text-white",
                                  children: "LEARN MORE",
                                }),
                                (0, nr.jsxs)("ul", {
                                  className: "text-white",
                                  children: [
                                    (0, nr.jsx)("li", {
                                      children: (0, nr.jsx)(Ve, {
                                        to: "who-we-are",
                                        children: "Who we are",
                                      }),
                                    }),
                                    (0, nr.jsx)("li", {
                                      children: (0, nr.jsx)(Ve, {
                                        to: "what-we-do",
                                        children: "What we do",
                                      }),
                                    }),
                                    (0, nr.jsx)("li", {
                                      children: (0, nr.jsx)(Ve, {
                                        to: "why-we-do-this",
                                        children: "Why we do this",
                                      }),
                                    }),
                                    (0, nr.jsx)("li", {
                                      children: (0, nr.jsx)(Ve, {
                                        to: "privacy",
                                        children: "Privacy Policy",
                                      }),
                                    }),
                                    (0, nr.jsx)("li", {
                                      children: (0, nr.jsx)(Ve, {
                                        to: "careers",
                                        children: "Careers",
                                      }),
                                    }),
                                    (0, nr.jsx)("li", {
                                      children: (0, nr.jsx)("a", {
                                        href: "https://docs.healthgotechnologies.com",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Documentation",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "pt-10",
                          children: [
                            (0, nr.jsx)("p", {
                              className: "footer-head text-white",
                              children: "STAY UPDATED!",
                            }),
                            (0, nr.jsx)("p", {
                              className: "mail text-white",
                              children:
                                "Join our mailing list to get the latest updates in your mail.",
                            }),
                            (0, nr.jsxs)("form", {
                              onSubmit: l,
                              children: [
                                (0, nr.jsx)("input", {
                                  className:
                                    "appearance-none block w-full bg-primary border py-3 px-4 leading-tight focus:outline-none",
                                  onChange: function (e) {
                                    return r(e.target.value);
                                  },
                                  value: n,
                                  type: "email",
                                  placeholder: "Your email address",
                                }),
                                (0, nr.jsx)("p", {
                                  className: "text-white mt-3",
                                  children: i,
                                }),
                                (0, nr.jsxs)("button", {
                                  className:
                                    "bg-white hover:bg-secondary text-primary mt-5 font-bold py-2 px-4 rounded inline-flex items-center",
                                  children: [
                                    (0, nr.jsx)("span", {
                                      className: "mr-2",
                                      children: "Subscribe",
                                    }),
                                    (0, nr.jsx)(ht, {}),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, nr.jsxs)("div", {
                  className:
                    "footer lg:p-20 lg:pt-0 p-10 lg:grid grid-cols-2 gap-10 block lg:hidden md:hidden",
                  children: [
                    (0, nr.jsxs)("div", {
                      className: "",
                      children: [
                        (0, nr.jsx)("p", {
                          className: "footer-head text-white",
                          children: "STAY UPDATED!",
                        }),
                        (0, nr.jsx)("p", {
                          className: "mail text-white",
                          children:
                            "Join our mailing list to get the latest updates in your mail.",
                        }),
                        (0, nr.jsxs)("form", {
                          onSubmit: l,
                          children: [
                            (0, nr.jsx)("input", {
                              className:
                                "appearance-none block w-full bg-primary border py-3 px-4 leading-tight focus:outline-none",
                              onChange: function (e) {
                                return r(e.target.value);
                              },
                              value: n,
                              type: "email",
                              placeholder: "Your email address",
                            }),
                            (0, nr.jsx)("p", {
                              className: "text-white mt-3",
                              children: i,
                            }),
                            (0, nr.jsxs)("button", {
                              className:
                                "bg-white hover:bg-secondary text-primary mt-5 font-bold py-2 px-4 rounded inline-flex items-center",
                              children: [
                                (0, nr.jsx)("span", {
                                  className: "mr-2",
                                  children: "Subscribe",
                                }),
                                (0, nr.jsx)(ht, {}),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, nr.jsxs)("div", {
                      className: "grid grid-cols-2 gap-5 pt-10",
                      children: [
                        (0, nr.jsxs)("div", {
                          children: [
                            (0, nr.jsx)("p", {
                              className: "footer-head text-white",
                              children: "QUICK LINKS",
                            }),
                            (0, nr.jsxs)("ul", {
                              className: "text-white",
                              children: [
                                (0, nr.jsx)("li", {
                                  children: (0, nr.jsx)("a", {
                                    href: "https://play.google.com/store/apps/details?id=com.healthgo",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Download the App",
                                  }),
                                }),
                                (0, nr.jsx)("li", {
                                  children: (0, nr.jsx)(Ve, {
                                    to: "/",
                                    children: " Home ",
                                  }),
                                }),
                                (0, nr.jsx)("li", {
                                  children: (0, nr.jsx)(Ve, {
                                    to: "about",
                                    children: "About Us",
                                  }),
                                }),
                                (0, nr.jsx)("li", {
                                  children: (0, nr.jsx)(Ve, {
                                    to: "contact",
                                    children: "Contact Us",
                                  }),
                                }),
                                (0, nr.jsx)("li", {
                                  children: (0, nr.jsx)(Ve, {
                                    to: "events",
                                    children: "Events",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          children: [
                            (0, nr.jsx)("p", {
                              className: "footer-head text-white",
                              children: "LEARN MORE",
                            }),
                            (0, nr.jsxs)("ul", {
                              className: "text-white",
                              children: [
                                (0, nr.jsx)("li", {
                                  children: (0, nr.jsx)(Ve, {
                                    to: "who-we-are",
                                    children: "Who we are",
                                  }),
                                }),
                                (0, nr.jsx)("li", {
                                  children: (0, nr.jsx)(Ve, {
                                    to: "what-we-do",
                                    children: "What we do",
                                  }),
                                }),
                                (0, nr.jsx)("li", {
                                  children: (0, nr.jsx)(Ve, {
                                    to: "why-we-do-this",
                                    children: "Why we do this",
                                  }),
                                }),
                                (0, nr.jsx)("li", {
                                  children: (0, nr.jsx)(Ve, {
                                    to: "privacy",
                                    children: "Privacy Policy",
                                  }),
                                }),
                                (0, nr.jsx)("li", {
                                  children: (0, nr.jsx)(Ve, {
                                    to: "careers",
                                    children: "Careers",
                                  }),
                                }),
                                (0, nr.jsx)("li", {
                                  children: (0, nr.jsx)("a", {
                                    href: "https://docs.healthgotechnologies.com",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Documentation",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, nr.jsxs)("div", {
                      className: "pt-10",
                      children: [
                        (0, nr.jsx)("p", {
                          className: "footer-head text-white",
                          children: "CONTACT",
                        }),
                        (0, nr.jsxs)("ul", {
                          children: [
                            (0, nr.jsxs)("li", {
                              className: "flex items-center text-white",
                              children: [
                                (0, nr.jsx)("span", {
                                  className: "mr-3",
                                  children: (0, nr.jsx)(nt, {
                                    className: "icon",
                                  }),
                                }),
                                "Lagos, Nigeria",
                              ],
                            }),
                            (0, nr.jsxs)("li", {
                              className: "flex items-center text-white",
                              children: [
                                (0, nr.jsx)("span", {
                                  className: "mr-3",
                                  children: (0, nr.jsx)(lt, {
                                    className: "icon ",
                                  }),
                                }),
                                "+234 813 192 7155",
                              ],
                            }),
                            (0, nr.jsxs)("li", {
                              className: "flex items-center text-white",
                              children: [
                                (0, nr.jsx)("span", {
                                  className: "mr-3",
                                  children: (0, nr.jsx)(rt, {
                                    className: "icon",
                                  }),
                                }),
                                "hello@healthgotechnologies.com",
                              ],
                            }),
                          ],
                        }),
                        (0, nr.jsxs)("div", {
                          className: "flex text-white pt-5",
                          children: [
                            (0, nr.jsx)("a", {
                              href: "https://www.linkedin.com/company/healthgohq/",
                              children: (0, nr.jsx)(ct, {
                                className: "sm-icon",
                              }),
                            }),
                            (0, nr.jsx)("a", {
                              href: "https://www.instagram.com/healthgohq/",
                              children: (0, nr.jsx)(st, {
                                className: "sm-icon",
                              }),
                            }),
                            (0, nr.jsx)("a", {
                              href: "https://twitter.com/healthgoHQ",
                              children: (0, nr.jsx)(dt, {
                                className: "sm-icon",
                              }),
                            }),
                            (0, nr.jsx)("a", {
                              href: "https://t.me/HealthgoHQ",
                              children: (0, nr.jsx)(ut, {
                                className: "sm-icon",
                              }),
                            }),
                            (0, nr.jsx)("a", {
                              href: "https://medium.com/@HealthGO_HQ",
                              children: (0, nr.jsx)(ot, {
                                className: "sm-icon",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, nr.jsxs)("div", {
                      className: "text-center mt-14 ",
                      children: [
                        (0, nr.jsxs)("div", {
                          className: "inline-flex items-center",
                          children: [
                            (0, nr.jsx)("img", {
                              src: mt,
                              alt: "Healthgo Logo",
                            }),
                            (0, nr.jsxs)("div", {
                              className: "pl-3",
                              children: [
                                (0, nr.jsx)("p", {
                                  className: "name text-white",
                                  children: "HealthGO Technologies",
                                }),
                                (0, nr.jsx)("p", {
                                  className: "motto text-white",
                                  children: "...quality healthcare for all",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, nr.jsx)("p", {
                          className: "copyright pt-3 text-white",
                          children: "\xa9 Copyrights 2023",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var Oi = function () {
          return (0, nr.jsx)(We, {
            children: (0, nr.jsxs)(wi, {
              children: [
                (0, nr.jsx)(ir, {}),
                (0, nr.jsxs)(Me, {
                  children: [
                    (0, nr.jsx)(Ie, {
                      path: "/",
                      element: (0, nr.jsxs)(nr.Fragment, {
                        children: [
                          (0, nr.jsx)(_a, {}),
                          " ",
                          (0, nr.jsx)(rr, {}),
                        ],
                      }),
                    }),
                    (0, nr.jsx)(Ie, {
                      path: "/events",
                      element: (0, nr.jsxs)(nr.Fragment, {
                        children: [
                          (0, nr.jsx)(Fa, {}),
                          " ",
                          (0, nr.jsx)(rr, {}),
                        ],
                      }),
                    }),
                    (0, nr.jsx)(Ie, {
                      path: "/about",
                      element: (0, nr.jsxs)(nr.Fragment, {
                        children: [
                          (0, nr.jsx)(ti, {}),
                          " ",
                          (0, nr.jsx)(rr, {}),
                        ],
                      }),
                    }),
                    (0, nr.jsx)(Ie, {
                      path: "/who-we-are",
                      element: (0, nr.jsxs)(nr.Fragment, {
                        children: [
                          (0, nr.jsx)(ri, {}),
                          " ",
                          (0, nr.jsx)(rr, {}),
                        ],
                      }),
                    }),
                    (0, nr.jsx)(Ie, {
                      path: "/what-we-do",
                      element: (0, nr.jsxs)(nr.Fragment, {
                        children: [
                          (0, nr.jsx)(ui, {}),
                          " ",
                          (0, nr.jsx)(rr, {}),
                        ],
                      }),
                    }),
                    (0, nr.jsx)(Ie, {
                      path: "/why-we-do-this",
                      element: (0, nr.jsxs)(nr.Fragment, {
                        children: [
                          (0, nr.jsx)(gi, {}),
                          " ",
                          (0, nr.jsx)(rr, {}),
                        ],
                      }),
                    }),
                    (0, nr.jsx)(Ie, {
                      path: "/privacy",
                      element: (0, nr.jsxs)(nr.Fragment, {
                        children: [
                          (0, nr.jsx)(vi, {}),
                          " ",
                          (0, nr.jsx)(rr, {}),
                        ],
                      }),
                    }),
                    (0, nr.jsx)(Ie, {
                      path: "/contact",
                      element: (0, nr.jsxs)(nr.Fragment, {
                        children: [
                          (0, nr.jsx)(yi, {}),
                          " ",
                          (0, nr.jsx)(rr, {}),
                        ],
                      }),
                    }),
                    (0, nr.jsx)(Ie, {
                      path: "/careers",
                      element: (0, nr.jsxs)(nr.Fragment, {
                        children: [
                          (0, nr.jsx)(xi, {}),
                          " ",
                          (0, nr.jsx)(rr, {}),
                        ],
                      }),
                    }),
                    (0, nr.jsx)(Ie, {
                      path: "/privacy",
                      element: (0, nr.jsxs)(nr.Fragment, {
                        children: [
                          (0, nr.jsx)(vi, {}),
                          " ",
                          (0, nr.jsx)(rr, {}),
                        ],
                      }),
                    }),
                    (0, nr.jsx)(Ie, {
                      path: "/partner",
                      element: (0, nr.jsxs)(nr.Fragment, {
                        children: [
                          (0, nr.jsx)(Ei, {}),
                          " ",
                          (0, nr.jsx)(Ci, {}),
                        ],
                      }),
                    }),
                    (0, nr.jsx)(Ie, {
                      path: "*",
                      element: (0, nr.jsx)(Ni, {}),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Ai = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  i = t.getLCP,
                  o = t.getTTFB;
                n(e), r(e), a(e), i(e), o(e);
              });
        };
      a
        .createRoot(document.getElementById("root"))
        .render((0, nr.jsx)(t.StrictMode, { children: (0, nr.jsx)(Oi, {}) })),
        Ai();
    })();
})();
//# sourceMappingURL=main.12cc60c5.js.map
