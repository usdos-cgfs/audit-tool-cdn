(function(g,f){if(typeof define=="function"&&define.amd){define(f)}else if(typeof exports=="object" && typeof module<"u"){module.exports=f()}else{var m=f();for(var i in m) g[i]=m[i]}}(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : this,function(){var exports={};var __exports=exports;var module={exports};
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/knockout/build/output/knockout-latest.js
var require_knockout_latest = __commonJS({
  "node_modules/knockout/build/output/knockout-latest.js"(exports, module2) {
    (function() {
      (function(n) {
        var A = this || (0, eval)("this"), w = A.document, R = A.navigator, v = A.jQuery, H = A.JSON;
        v || "undefined" === typeof jQuery || (v = jQuery);
        (function(n2) {
          "function" === typeof define && define.amd ? define(["exports", "require"], n2) : "object" === typeof exports && "object" === typeof module2 ? n2(module2.exports || exports) : n2(A.ko = {});
        })(function(S, T) {
          function K(a2, c) {
            return null === a2 || typeof a2 in W ? a2 === c : false;
          }
          function X(b, c) {
            var d;
            return function() {
              d || (d = a.a.setTimeout(function() {
                d = n;
                b();
              }, c));
            };
          }
          function Y(b, c) {
            var d;
            return function() {
              clearTimeout(d);
              d = a.a.setTimeout(b, c);
            };
          }
          function Z(a2, c) {
            c && "change" !== c ? "beforeChange" === c ? this.pc(a2) : this.gb(a2, c) : this.qc(a2);
          }
          function aa(a2, c) {
            null !== c && c.s && c.s();
          }
          function ba(a2, c) {
            var d = this.qd, e = d[r];
            e.ra || (this.Qb && this.mb[c] ? (d.uc(c, a2, this.mb[c]), this.mb[c] = null, --this.Qb) : e.I[c] || d.uc(c, a2, e.J ? { da: a2 } : d.$c(a2)), a2.Ja && a2.gd());
          }
          var a = "undefined" !== typeof S ? S : {};
          a.b = function(b, c) {
            for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++) e = e[d[f]];
            e[d[d.length - 1]] = c;
          };
          a.L = function(a2, c, d) {
            a2[c] = d;
          };
          a.version = "3.5.1";
          a.b(
            "version",
            a.version
          );
          a.options = { deferUpdates: false, useOnlyNativeEvents: false, foreachHidesDestroyed: false };
          a.a = function() {
            function b(a2, b2) {
              for (var c2 in a2) f.call(a2, c2) && b2(c2, a2[c2]);
            }
            function c(a2, b2) {
              if (b2) for (var c2 in b2) f.call(b2, c2) && (a2[c2] = b2[c2]);
              return a2;
            }
            function d(a2, b2) {
              a2.__proto__ = b2;
              return a2;
            }
            function e(b2, c2, d2, e2) {
              var l2 = b2[c2].match(q) || [];
              a.a.D(d2.match(q), function(b3) {
                a.a.Na(l2, b3, e2);
              });
              b2[c2] = l2.join(" ");
            }
            var f = Object.prototype.hasOwnProperty, g = { __proto__: [] } instanceof Array, h = "function" === typeof Symbol, m = {}, k = {};
            m[R && /Firefox\/2/i.test(R.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
            m.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
            b(m, function(a2, b2) {
              if (b2.length) for (var c2 = 0, d2 = b2.length; c2 < d2; c2++) k[b2[c2]] = a2;
            });
            var l = { propertychange: true }, p = w && function() {
              for (var a2 = 3, b2 = w.createElement("div"), c2 = b2.getElementsByTagName("i"); b2.innerHTML = "<!--[if gt IE " + ++a2 + "]><i></i><![endif]-->", c2[0]; ) ;
              return 4 < a2 ? a2 : n;
            }(), q = /\S+/g, t;
            return {
              Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
              D: function(a2, b2, c2) {
                for (var d2 = 0, e2 = a2.length; d2 < e2; d2++) b2.call(c2, a2[d2], d2, a2);
              },
              A: "function" == typeof Array.prototype.indexOf ? function(a2, b2) {
                return Array.prototype.indexOf.call(a2, b2);
              } : function(a2, b2) {
                for (var c2 = 0, d2 = a2.length; c2 < d2; c2++) if (a2[c2] === b2) return c2;
                return -1;
              },
              Lb: function(a2, b2, c2) {
                for (var d2 = 0, e2 = a2.length; d2 < e2; d2++) if (b2.call(c2, a2[d2], d2, a2)) return a2[d2];
                return n;
              },
              Pa: function(b2, c2) {
                var d2 = a.a.A(b2, c2);
                0 < d2 ? b2.splice(d2, 1) : 0 === d2 && b2.shift();
              },
              wc: function(b2) {
                var c2 = [];
                b2 && a.a.D(b2, function(b3) {
                  0 > a.a.A(c2, b3) && c2.push(b3);
                });
                return c2;
              },
              Mb: function(a2, b2, c2) {
                var d2 = [];
                if (a2) for (var e2 = 0, l2 = a2.length; e2 < l2; e2++) d2.push(b2.call(c2, a2[e2], e2));
                return d2;
              },
              jb: function(a2, b2, c2) {
                var d2 = [];
                if (a2) for (var e2 = 0, l2 = a2.length; e2 < l2; e2++) b2.call(c2, a2[e2], e2) && d2.push(a2[e2]);
                return d2;
              },
              Nb: function(a2, b2) {
                if (b2 instanceof Array) a2.push.apply(a2, b2);
                else for (var c2 = 0, d2 = b2.length; c2 < d2; c2++) a2.push(b2[c2]);
                return a2;
              },
              Na: function(b2, c2, d2) {
                var e2 = a.a.A(a.a.bc(b2), c2);
                0 > e2 ? d2 && b2.push(c2) : d2 || b2.splice(e2, 1);
              },
              Ba: g,
              extend: c,
              setPrototypeOf: d,
              Ab: g ? d : c,
              P: b,
              Ga: function(a2, b2, c2) {
                if (!a2) return a2;
                var d2 = {}, e2;
                for (e2 in a2) f.call(a2, e2) && (d2[e2] = b2.call(c2, a2[e2], e2, a2));
                return d2;
              },
              Tb: function(b2) {
                for (; b2.firstChild; ) a.removeNode(b2.firstChild);
              },
              Yb: function(b2) {
                b2 = a.a.la(b2);
                for (var c2 = (b2[0] && b2[0].ownerDocument || w).createElement("div"), d2 = 0, e2 = b2.length; d2 < e2; d2++) c2.appendChild(a.oa(b2[d2]));
                return c2;
              },
              Ca: function(b2, c2) {
                for (var d2 = 0, e2 = b2.length, l2 = []; d2 < e2; d2++) {
                  var k2 = b2[d2].cloneNode(true);
                  l2.push(c2 ? a.oa(k2) : k2);
                }
                return l2;
              },
              va: function(b2, c2) {
                a.a.Tb(b2);
                if (c2) for (var d2 = 0, e2 = c2.length; d2 < e2; d2++) b2.appendChild(c2[d2]);
              },
              Xc: function(b2, c2) {
                var d2 = b2.nodeType ? [b2] : b2;
                if (0 < d2.length) {
                  for (var e2 = d2[0], l2 = e2.parentNode, k2 = 0, f2 = c2.length; k2 < f2; k2++) l2.insertBefore(c2[k2], e2);
                  k2 = 0;
                  for (f2 = d2.length; k2 < f2; k2++) a.removeNode(d2[k2]);
                }
              },
              Ua: function(a2, b2) {
                if (a2.length) {
                  for (b2 = 8 === b2.nodeType && b2.parentNode || b2; a2.length && a2[0].parentNode !== b2; ) a2.splice(0, 1);
                  for (; 1 < a2.length && a2[a2.length - 1].parentNode !== b2; ) a2.length--;
                  if (1 < a2.length) {
                    var c2 = a2[0], d2 = a2[a2.length - 1];
                    for (a2.length = 0; c2 !== d2; ) a2.push(c2), c2 = c2.nextSibling;
                    a2.push(d2);
                  }
                }
                return a2;
              },
              Zc: function(a2, b2) {
                7 > p ? a2.setAttribute("selected", b2) : a2.selected = b2;
              },
              Db: function(a2) {
                return null === a2 || a2 === n ? "" : a2.trim ? a2.trim() : a2.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
              },
              Ud: function(a2, b2) {
                a2 = a2 || "";
                return b2.length > a2.length ? false : a2.substring(0, b2.length) === b2;
              },
              vd: function(a2, b2) {
                if (a2 === b2) return true;
                if (11 === a2.nodeType) return false;
                if (b2.contains) return b2.contains(1 !== a2.nodeType ? a2.parentNode : a2);
                if (b2.compareDocumentPosition) return 16 == (b2.compareDocumentPosition(a2) & 16);
                for (; a2 && a2 != b2; ) a2 = a2.parentNode;
                return !!a2;
              },
              Sb: function(b2) {
                return a.a.vd(b2, b2.ownerDocument.documentElement);
              },
              kd: function(b2) {
                return !!a.a.Lb(b2, a.a.Sb);
              },
              R: function(a2) {
                return a2 && a2.tagName && a2.tagName.toLowerCase();
              },
              Ac: function(b2) {
                return a.onError ? function() {
                  try {
                    return b2.apply(this, arguments);
                  } catch (c2) {
                    throw a.onError && a.onError(c2), c2;
                  }
                } : b2;
              },
              setTimeout: function(b2, c2) {
                return setTimeout(a.a.Ac(b2), c2);
              },
              Gc: function(b2) {
                setTimeout(function() {
                  a.onError && a.onError(b2);
                  throw b2;
                }, 0);
              },
              B: function(b2, c2, d2) {
                var e2 = a.a.Ac(d2);
                d2 = l[c2];
                if (a.options.useOnlyNativeEvents || d2 || !v) if (d2 || "function" != typeof b2.addEventListener) if ("undefined" != typeof b2.attachEvent) {
                  var k2 = function(a2) {
                    e2.call(b2, a2);
                  }, f2 = "on" + c2;
                  b2.attachEvent(
                    f2,
                    k2
                  );
                  a.a.K.za(b2, function() {
                    b2.detachEvent(f2, k2);
                  });
                } else throw Error("Browser doesn't support addEventListener or attachEvent");
                else b2.addEventListener(c2, e2, false);
                else t || (t = "function" == typeof v(b2).on ? "on" : "bind"), v(b2)[t](c2, e2);
              },
              Fb: function(b2, c2) {
                if (!b2 || !b2.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                var d2;
                "input" === a.a.R(b2) && b2.type && "click" == c2.toLowerCase() ? (d2 = b2.type, d2 = "checkbox" == d2 || "radio" == d2) : d2 = false;
                if (a.options.useOnlyNativeEvents || !v || d2) if ("function" == typeof w.createEvent) if ("function" == typeof b2.dispatchEvent) d2 = w.createEvent(k[c2] || "HTMLEvents"), d2.initEvent(c2, true, true, A, 0, 0, 0, 0, 0, false, false, false, false, 0, b2), b2.dispatchEvent(d2);
                else throw Error("The supplied element doesn't support dispatchEvent");
                else if (d2 && b2.click) b2.click();
                else if ("undefined" != typeof b2.fireEvent) b2.fireEvent("on" + c2);
                else throw Error("Browser doesn't support triggering events");
                else v(b2).trigger(c2);
              },
              f: function(b2) {
                return a.O(b2) ? b2() : b2;
              },
              bc: function(b2) {
                return a.O(b2) ? b2.v() : b2;
              },
              Eb: function(b2, c2, d2) {
                var l2;
                c2 && ("object" === typeof b2.classList ? (l2 = b2.classList[d2 ? "add" : "remove"], a.a.D(c2.match(q), function(a2) {
                  l2.call(b2.classList, a2);
                })) : "string" === typeof b2.className.baseVal ? e(b2.className, "baseVal", c2, d2) : e(b2, "className", c2, d2));
              },
              Bb: function(b2, c2) {
                var d2 = a.a.f(c2);
                if (null === d2 || d2 === n) d2 = "";
                var e2 = a.h.firstChild(b2);
                !e2 || 3 != e2.nodeType || a.h.nextSibling(e2) ? a.h.va(b2, [b2.ownerDocument.createTextNode(d2)]) : e2.data = d2;
                a.a.Ad(b2);
              },
              Yc: function(a2, b2) {
                a2.name = b2;
                if (7 >= p) try {
                  var c2 = a2.name.replace(/[&<>'"]/g, function(a3) {
                    return "&#" + a3.charCodeAt(0) + ";";
                  });
                  a2.mergeAttributes(w.createElement("<input name='" + c2 + "'/>"), false);
                } catch (d2) {
                }
              },
              Ad: function(a2) {
                9 <= p && (a2 = 1 == a2.nodeType ? a2 : a2.parentNode, a2.style && (a2.style.zoom = a2.style.zoom));
              },
              wd: function(a2) {
                if (p) {
                  var b2 = a2.style.width;
                  a2.style.width = 0;
                  a2.style.width = b2;
                }
              },
              Pd: function(b2, c2) {
                b2 = a.a.f(b2);
                c2 = a.a.f(c2);
                for (var d2 = [], e2 = b2; e2 <= c2; e2++) d2.push(e2);
                return d2;
              },
              la: function(a2) {
                for (var b2 = [], c2 = 0, d2 = a2.length; c2 < d2; c2++) b2.push(a2[c2]);
                return b2;
              },
              Da: function(a2) {
                return h ? Symbol(a2) : a2;
              },
              Zd: 6 === p,
              $d: 7 === p,
              W: p,
              Lc: function(b2, c2) {
                for (var d2 = a.a.la(b2.getElementsByTagName("input")).concat(a.a.la(b2.getElementsByTagName("textarea"))), e2 = "string" == typeof c2 ? function(a2) {
                  return a2.name === c2;
                } : function(a2) {
                  return c2.test(a2.name);
                }, l2 = [], k2 = d2.length - 1; 0 <= k2; k2--) e2(d2[k2]) && l2.push(d2[k2]);
                return l2;
              },
              Nd: function(b2) {
                return "string" == typeof b2 && (b2 = a.a.Db(b2)) ? H && H.parse ? H.parse(b2) : new Function("return " + b2)() : null;
              },
              hc: function(b2, c2, d2) {
                if (!H || !H.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                return H.stringify(a.a.f(b2), c2, d2);
              },
              Od: function(c2, d2, e2) {
                e2 = e2 || {};
                var l2 = e2.params || {}, k2 = e2.includeFields || this.Jc, f2 = c2;
                if ("object" == typeof c2 && "form" === a.a.R(c2)) for (var f2 = c2.action, h2 = k2.length - 1; 0 <= h2; h2--) for (var g2 = a.a.Lc(c2, k2[h2]), m2 = g2.length - 1; 0 <= m2; m2--) l2[g2[m2].name] = g2[m2].value;
                d2 = a.a.f(d2);
                var p2 = w.createElement("form");
                p2.style.display = "none";
                p2.action = f2;
                p2.method = "post";
                for (var q2 in d2) c2 = w.createElement("input"), c2.type = "hidden", c2.name = q2, c2.value = a.a.hc(a.a.f(d2[q2])), p2.appendChild(c2);
                b(l2, function(a2, b2) {
                  var c3 = w.createElement("input");
                  c3.type = "hidden";
                  c3.name = a2;
                  c3.value = b2;
                  p2.appendChild(c3);
                });
                w.body.appendChild(p2);
                e2.submitter ? e2.submitter(p2) : p2.submit();
                setTimeout(function() {
                  p2.parentNode.removeChild(p2);
                }, 0);
              }
            };
          }();
          a.b("utils", a.a);
          a.b("utils.arrayForEach", a.a.D);
          a.b("utils.arrayFirst", a.a.Lb);
          a.b("utils.arrayFilter", a.a.jb);
          a.b("utils.arrayGetDistinctValues", a.a.wc);
          a.b("utils.arrayIndexOf", a.a.A);
          a.b("utils.arrayMap", a.a.Mb);
          a.b("utils.arrayPushAll", a.a.Nb);
          a.b("utils.arrayRemoveItem", a.a.Pa);
          a.b("utils.cloneNodes", a.a.Ca);
          a.b(
            "utils.createSymbolOrString",
            a.a.Da
          );
          a.b("utils.extend", a.a.extend);
          a.b("utils.fieldsIncludedWithJsonPost", a.a.Jc);
          a.b("utils.getFormFields", a.a.Lc);
          a.b("utils.objectMap", a.a.Ga);
          a.b("utils.peekObservable", a.a.bc);
          a.b("utils.postJson", a.a.Od);
          a.b("utils.parseJson", a.a.Nd);
          a.b("utils.registerEventHandler", a.a.B);
          a.b("utils.stringifyJson", a.a.hc);
          a.b("utils.range", a.a.Pd);
          a.b("utils.toggleDomNodeCssClass", a.a.Eb);
          a.b("utils.triggerEvent", a.a.Fb);
          a.b("utils.unwrapObservable", a.a.f);
          a.b("utils.objectForEach", a.a.P);
          a.b(
            "utils.addOrRemoveItem",
            a.a.Na
          );
          a.b("utils.setTextContent", a.a.Bb);
          a.b("unwrap", a.a.f);
          Function.prototype.bind || (Function.prototype.bind = function(a2) {
            var c = this;
            if (1 === arguments.length) return function() {
              return c.apply(a2, arguments);
            };
            var d = Array.prototype.slice.call(arguments, 1);
            return function() {
              var e = d.slice(0);
              e.push.apply(e, arguments);
              return c.apply(a2, e);
            };
          });
          a.a.g = new function() {
            var b = 0, c = "__ko__" + (/* @__PURE__ */ new Date()).getTime(), d = {}, e, f;
            a.a.W ? (e = function(a2, e2) {
              var f2 = a2[c];
              if (!f2 || "null" === f2 || !d[f2]) {
                if (!e2) return n;
                f2 = a2[c] = "ko" + b++;
                d[f2] = {};
              }
              return d[f2];
            }, f = function(a2) {
              var b2 = a2[c];
              return b2 ? (delete d[b2], a2[c] = null, true) : false;
            }) : (e = function(a2, b2) {
              var d2 = a2[c];
              !d2 && b2 && (d2 = a2[c] = {});
              return d2;
            }, f = function(a2) {
              return a2[c] ? (delete a2[c], true) : false;
            });
            return { get: function(a2, b2) {
              var c2 = e(a2, false);
              return c2 && c2[b2];
            }, set: function(a2, b2, c2) {
              (a2 = e(a2, c2 !== n)) && (a2[b2] = c2);
            }, Ub: function(a2, b2, c2) {
              a2 = e(a2, true);
              return a2[b2] || (a2[b2] = c2);
            }, clear: f, Z: function() {
              return b++ + c;
            } };
          }();
          a.b("utils.domData", a.a.g);
          a.b("utils.domData.clear", a.a.g.clear);
          a.a.K = new function() {
            function b(b2, c2) {
              var d2 = a.a.g.get(b2, e);
              d2 === n && c2 && (d2 = [], a.a.g.set(b2, e, d2));
              return d2;
            }
            function c(c2) {
              var e2 = b(c2, false);
              if (e2) for (var e2 = e2.slice(0), k = 0; k < e2.length; k++) e2[k](c2);
              a.a.g.clear(c2);
              a.a.K.cleanExternalData(c2);
              g[c2.nodeType] && d(c2.childNodes, true);
            }
            function d(b2, d2) {
              for (var e2 = [], l, f2 = 0; f2 < b2.length; f2++) if (!d2 || 8 === b2[f2].nodeType) {
                if (c(e2[e2.length] = l = b2[f2]), b2[f2] !== l) for (; f2-- && -1 == a.a.A(e2, b2[f2]); ) ;
              }
            }
            var e = a.a.g.Z(), f = { 1: true, 8: true, 9: true }, g = { 1: true, 9: true };
            return { za: function(a2, c2) {
              if ("function" != typeof c2) throw Error("Callback must be a function");
              b(a2, true).push(c2);
            }, yb: function(c2, d2) {
              var f2 = b(c2, false);
              f2 && (a.a.Pa(f2, d2), 0 == f2.length && a.a.g.set(c2, e, n));
            }, oa: function(b2) {
              a.u.G(function() {
                f[b2.nodeType] && (c(b2), g[b2.nodeType] && d(b2.getElementsByTagName("*")));
              });
              return b2;
            }, removeNode: function(b2) {
              a.oa(b2);
              b2.parentNode && b2.parentNode.removeChild(b2);
            }, cleanExternalData: function(a2) {
              v && "function" == typeof v.cleanData && v.cleanData([a2]);
            } };
          }();
          a.oa = a.a.K.oa;
          a.removeNode = a.a.K.removeNode;
          a.b("cleanNode", a.oa);
          a.b("removeNode", a.removeNode);
          a.b("utils.domNodeDisposal", a.a.K);
          a.b(
            "utils.domNodeDisposal.addDisposeCallback",
            a.a.K.za
          );
          a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.K.yb);
          (function() {
            var b = [0, "", ""], c = [1, "<table>", "</table>"], d = [3, "<table><tbody><tr>", "</tr></tbody></table>"], e = [1, "<select multiple='multiple'>", "</select>"], f = { thead: c, tbody: c, tfoot: c, tr: [2, "<table><tbody>", "</tbody></table>"], td: d, th: d, option: e, optgroup: e }, g = 8 >= a.a.W;
            a.a.ua = function(c2, d2) {
              var e2;
              if (v) if (v.parseHTML) e2 = v.parseHTML(c2, d2) || [];
              else {
                if ((e2 = v.clean([c2], d2)) && e2[0]) {
                  for (var l = e2[0]; l.parentNode && 11 !== l.parentNode.nodeType; ) l = l.parentNode;
                  l.parentNode && l.parentNode.removeChild(l);
                }
              }
              else {
                (e2 = d2) || (e2 = w);
                var l = e2.parentWindow || e2.defaultView || A, p = a.a.Db(c2).toLowerCase(), q = e2.createElement("div"), t;
                t = (p = p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && f[p[1]] || b;
                p = t[0];
                t = "ignored<div>" + t[1] + c2 + t[2] + "</div>";
                "function" == typeof l.innerShiv ? q.appendChild(l.innerShiv(t)) : (g && e2.body.appendChild(q), q.innerHTML = t, g && q.parentNode.removeChild(q));
                for (; p--; ) q = q.lastChild;
                e2 = a.a.la(q.lastChild.childNodes);
              }
              return e2;
            };
            a.a.Md = function(b2, c2) {
              var d2 = a.a.ua(
                b2,
                c2
              );
              return d2.length && d2[0].parentElement || a.a.Yb(d2);
            };
            a.a.fc = function(b2, c2) {
              a.a.Tb(b2);
              c2 = a.a.f(c2);
              if (null !== c2 && c2 !== n) if ("string" != typeof c2 && (c2 = c2.toString()), v) v(b2).html(c2);
              else for (var d2 = a.a.ua(c2, b2.ownerDocument), e2 = 0; e2 < d2.length; e2++) b2.appendChild(d2[e2]);
            };
          })();
          a.b("utils.parseHtmlFragment", a.a.ua);
          a.b("utils.setHtml", a.a.fc);
          a.aa = /* @__PURE__ */ function() {
            function b(c2, e) {
              if (c2) {
                if (8 == c2.nodeType) {
                  var f = a.aa.Uc(c2.nodeValue);
                  null != f && e.push({ ud: c2, Kd: f });
                } else if (1 == c2.nodeType) for (var f = 0, g = c2.childNodes, h = g.length; f < h; f++) b(
                  g[f],
                  e
                );
              }
            }
            var c = {};
            return { Xb: function(a2) {
              if ("function" != typeof a2) throw Error("You can only pass a function to ko.memoization.memoize()");
              var b2 = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
              c[b2] = a2;
              return "<!--[ko_memo:" + b2 + "]-->";
            }, bd: function(a2, b2) {
              var f = c[a2];
              if (f === n) throw Error("Couldn't find any memo with ID " + a2 + ". Perhaps it's already been unmemoized.");
              try {
                return f.apply(null, b2 || []), true;
              } finally {
                delete c[a2];
              }
            }, cd: function(c2, e) {
              var f = [];
              b(c2, f);
              for (var g = 0, h = f.length; g < h; g++) {
                var m = f[g].ud, k = [m];
                e && a.a.Nb(k, e);
                a.aa.bd(f[g].Kd, k);
                m.nodeValue = "";
                m.parentNode && m.parentNode.removeChild(m);
              }
            }, Uc: function(a2) {
              return (a2 = a2.match(/^\[ko_memo\:(.*?)\]$/)) ? a2[1] : null;
            } };
          }();
          a.b("memoization", a.aa);
          a.b("memoization.memoize", a.aa.Xb);
          a.b("memoization.unmemoize", a.aa.bd);
          a.b("memoization.parseMemoText", a.aa.Uc);
          a.b("memoization.unmemoizeDomNodeAndDescendants", a.aa.cd);
          a.na = function() {
            function b() {
              if (f) {
                for (var b2 = f, c2 = 0, d2; h < f; ) if (d2 = e[h++]) {
                  if (h > b2) {
                    if (5e3 <= ++c2) {
                      h = f;
                      a.a.Gc(Error("'Too much recursion' after processing " + c2 + " task groups."));
                      break;
                    }
                    b2 = f;
                  }
                  try {
                    d2();
                  } catch (p) {
                    a.a.Gc(p);
                  }
                }
              }
            }
            function c() {
              b();
              h = f = e.length = 0;
            }
            var d, e = [], f = 0, g = 1, h = 0;
            A.MutationObserver ? d = function(a2) {
              var b2 = w.createElement("div");
              new MutationObserver(a2).observe(b2, { attributes: true });
              return function() {
                b2.classList.toggle("foo");
              };
            }(c) : d = w && "onreadystatechange" in w.createElement("script") ? function(a2) {
              var b2 = w.createElement("script");
              b2.onreadystatechange = function() {
                b2.onreadystatechange = null;
                w.documentElement.removeChild(b2);
                b2 = null;
                a2();
              };
              w.documentElement.appendChild(b2);
            } : function(a2) {
              setTimeout(a2, 0);
            };
            return { scheduler: d, zb: function(b2) {
              f || a.na.scheduler(c);
              e[f++] = b2;
              return g++;
            }, cancel: function(a2) {
              a2 = a2 - (g - f);
              a2 >= h && a2 < f && (e[a2] = null);
            }, resetForTesting: function() {
              var a2 = f - h;
              h = f = e.length = 0;
              return a2;
            }, Sd: b };
          }();
          a.b("tasks", a.na);
          a.b("tasks.schedule", a.na.zb);
          a.b("tasks.runEarly", a.na.Sd);
          a.Ta = { throttle: function(b, c) {
            b.throttleEvaluation = c;
            var d = null;
            return a.$({ read: b, write: function(e) {
              clearTimeout(d);
              d = a.a.setTimeout(
                function() {
                  b(e);
                },
                c
              );
            } });
          }, rateLimit: function(a2, c) {
            var d, e, f;
            "number" == typeof c ? d = c : (d = c.timeout, e = c.method);
            a2.Hb = false;
            f = "function" == typeof e ? e : "notifyWhenChangesStop" == e ? Y : X;
            a2.ub(function(a3) {
              return f(a3, d, c);
            });
          }, deferred: function(b, c) {
            if (true !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
            b.Hb || (b.Hb = true, b.ub(function(c2) {
              var e, f = false;
              return function() {
                if (!f) {
                  a.na.cancel(e);
                  e = a.na.zb(c2);
                  try {
                    f = true, b.notifySubscribers(n, "dirty");
                  } finally {
                    f = false;
                  }
                }
              };
            }));
          }, notify: function(a2, c) {
            a2.equalityComparer = "always" == c ? null : K;
          } };
          var W = { undefined: 1, "boolean": 1, number: 1, string: 1 };
          a.b("extenders", a.Ta);
          a.ic = function(b, c, d) {
            this.da = b;
            this.lc = c;
            this.mc = d;
            this.Ib = false;
            this.fb = this.Jb = null;
            a.L(this, "dispose", this.s);
            a.L(this, "disposeWhenNodeIsRemoved", this.l);
          };
          a.ic.prototype.s = function() {
            this.Ib || (this.fb && a.a.K.yb(this.Jb, this.fb), this.Ib = true, this.mc(), this.da = this.lc = this.mc = this.Jb = this.fb = null);
          };
          a.ic.prototype.l = function(b) {
            this.Jb = b;
            a.a.K.za(b, this.fb = this.s.bind(this));
          };
          a.T = function() {
            a.a.Ab(this, D);
            D.qb(this);
          };
          var D = {
            qb: function(a2) {
              a2.U = { change: [] };
              a2.sc = 1;
            },
            subscribe: function(b, c, d) {
              var e = this;
              d = d || "change";
              var f = new a.ic(e, c ? b.bind(c) : b, function() {
                a.a.Pa(e.U[d], f);
                e.hb && e.hb(d);
              });
              e.Qa && e.Qa(d);
              e.U[d] || (e.U[d] = []);
              e.U[d].push(f);
              return f;
            },
            notifySubscribers: function(b, c) {
              c = c || "change";
              "change" === c && this.Gb();
              if (this.Wa(c)) {
                var d = "change" === c && this.ed || this.U[c].slice(0);
                try {
                  a.u.xc();
                  for (var e = 0, f; f = d[e]; ++e) f.Ib || f.lc(b);
                } finally {
                  a.u.end();
                }
              }
            },
            ob: function() {
              return this.sc;
            },
            Dd: function(a2) {
              return this.ob() !== a2;
            },
            Gb: function() {
              ++this.sc;
            },
            ub: function(b) {
              var c = this, d = a.O(c), e, f, g, h, m;
              c.gb || (c.gb = c.notifySubscribers, c.notifySubscribers = Z);
              var k = b(function() {
                c.Ja = false;
                d && h === c && (h = c.nc ? c.nc() : c());
                var a2 = f || m && c.sb(g, h);
                m = f = e = false;
                a2 && c.gb(g = h);
              });
              c.qc = function(a2, b2) {
                b2 && c.Ja || (m = !b2);
                c.ed = c.U.change.slice(0);
                c.Ja = e = true;
                h = a2;
                k();
              };
              c.pc = function(a2) {
                e || (g = a2, c.gb(a2, "beforeChange"));
              };
              c.rc = function() {
                m = true;
              };
              c.gd = function() {
                c.sb(g, c.v(true)) && (f = true);
              };
            },
            Wa: function(a2) {
              return this.U[a2] && this.U[a2].length;
            },
            Bd: function(b) {
              if (b) return this.U[b] && this.U[b].length || 0;
              var c = 0;
              a.a.P(this.U, function(a2, b2) {
                "dirty" !== a2 && (c += b2.length);
              });
              return c;
            },
            sb: function(a2, c) {
              return !this.equalityComparer || !this.equalityComparer(a2, c);
            },
            toString: function() {
              return "[object Object]";
            },
            extend: function(b) {
              var c = this;
              b && a.a.P(b, function(b2, e) {
                var f = a.Ta[b2];
                "function" == typeof f && (c = f(c, e) || c);
              });
              return c;
            }
          };
          a.L(D, "init", D.qb);
          a.L(D, "subscribe", D.subscribe);
          a.L(D, "extend", D.extend);
          a.L(D, "getSubscriptionsCount", D.Bd);
          a.a.Ba && a.a.setPrototypeOf(
            D,
            Function.prototype
          );
          a.T.fn = D;
          a.Qc = function(a2) {
            return null != a2 && "function" == typeof a2.subscribe && "function" == typeof a2.notifySubscribers;
          };
          a.b("subscribable", a.T);
          a.b("isSubscribable", a.Qc);
          a.S = a.u = /* @__PURE__ */ function() {
            function b(a2) {
              d.push(e);
              e = a2;
            }
            function c() {
              e = d.pop();
            }
            var d = [], e, f = 0;
            return {
              xc: b,
              end: c,
              cc: function(b2) {
                if (e) {
                  if (!a.Qc(b2)) throw Error("Only subscribable things can act as dependencies");
                  e.od.call(e.pd, b2, b2.fd || (b2.fd = ++f));
                }
              },
              G: function(a2, d2, e2) {
                try {
                  return b(), a2.apply(d2, e2 || []);
                } finally {
                  c();
                }
              },
              qa: function() {
                if (e) return e.o.qa();
              },
              Va: function() {
                if (e) return e.o.Va();
              },
              Ya: function() {
                if (e) return e.Ya;
              },
              o: function() {
                if (e) return e.o;
              }
            };
          }();
          a.b("computedContext", a.S);
          a.b("computedContext.getDependenciesCount", a.S.qa);
          a.b("computedContext.getDependencies", a.S.Va);
          a.b("computedContext.isInitial", a.S.Ya);
          a.b("computedContext.registerDependency", a.S.cc);
          a.b("ignoreDependencies", a.Yd = a.u.G);
          var I = a.a.Da("_latestValue");
          a.ta = function(b) {
            function c() {
              if (0 < arguments.length) return c.sb(c[I], arguments[0]) && (c.ya(), c[I] = arguments[0], c.xa()), this;
              a.u.cc(c);
              return c[I];
            }
            c[I] = b;
            a.a.Ba || a.a.extend(c, a.T.fn);
            a.T.fn.qb(c);
            a.a.Ab(c, F);
            a.options.deferUpdates && a.Ta.deferred(c, true);
            return c;
          };
          var F = { equalityComparer: K, v: function() {
            return this[I];
          }, xa: function() {
            this.notifySubscribers(this[I], "spectate");
            this.notifySubscribers(this[I]);
          }, ya: function() {
            this.notifySubscribers(this[I], "beforeChange");
          } };
          a.a.Ba && a.a.setPrototypeOf(F, a.T.fn);
          var G = a.ta.Ma = "__ko_proto__";
          F[G] = a.ta;
          a.O = function(b) {
            if ((b = "function" == typeof b && b[G]) && b !== F[G] && b !== a.o.fn[G]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
            return !!b;
          };
          a.Za = function(b) {
            return "function" == typeof b && (b[G] === F[G] || b[G] === a.o.fn[G] && b.Nc);
          };
          a.b("observable", a.ta);
          a.b("isObservable", a.O);
          a.b("isWriteableObservable", a.Za);
          a.b("isWritableObservable", a.Za);
          a.b("observable.fn", F);
          a.L(F, "peek", F.v);
          a.L(F, "valueHasMutated", F.xa);
          a.L(F, "valueWillMutate", F.ya);
          a.Ha = function(b) {
            b = b || [];
            if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
            b = a.ta(b);
            a.a.Ab(
              b,
              a.Ha.fn
            );
            return b.extend({ trackArrayChanges: true });
          };
          a.Ha.fn = { remove: function(b) {
            for (var c = this.v(), d = [], e = "function" != typeof b || a.O(b) ? function(a2) {
              return a2 === b;
            } : b, f = 0; f < c.length; f++) {
              var g = c[f];
              if (e(g)) {
                0 === d.length && this.ya();
                if (c[f] !== g) throw Error("Array modified during remove; cannot remove item");
                d.push(g);
                c.splice(f, 1);
                f--;
              }
            }
            d.length && this.xa();
            return d;
          }, removeAll: function(b) {
            if (b === n) {
              var c = this.v(), d = c.slice(0);
              this.ya();
              c.splice(0, c.length);
              this.xa();
              return d;
            }
            return b ? this.remove(function(c2) {
              return 0 <= a.a.A(b, c2);
            }) : [];
          }, destroy: function(b) {
            var c = this.v(), d = "function" != typeof b || a.O(b) ? function(a2) {
              return a2 === b;
            } : b;
            this.ya();
            for (var e = c.length - 1; 0 <= e; e--) {
              var f = c[e];
              d(f) && (f._destroy = true);
            }
            this.xa();
          }, destroyAll: function(b) {
            return b === n ? this.destroy(function() {
              return true;
            }) : b ? this.destroy(function(c) {
              return 0 <= a.a.A(b, c);
            }) : [];
          }, indexOf: function(b) {
            var c = this();
            return a.a.A(c, b);
          }, replace: function(a2, c) {
            var d = this.indexOf(a2);
            0 <= d && (this.ya(), this.v()[d] = c, this.xa());
          }, sorted: function(a2) {
            var c = this().slice(0);
            return a2 ? c.sort(a2) : c.sort();
          }, reversed: function() {
            return this().slice(0).reverse();
          } };
          a.a.Ba && a.a.setPrototypeOf(a.Ha.fn, a.ta.fn);
          a.a.D("pop push reverse shift sort splice unshift".split(" "), function(b) {
            a.Ha.fn[b] = function() {
              var a2 = this.v();
              this.ya();
              this.zc(a2, b, arguments);
              var d = a2[b].apply(a2, arguments);
              this.xa();
              return d === a2 ? this : d;
            };
          });
          a.a.D(["slice"], function(b) {
            a.Ha.fn[b] = function() {
              var a2 = this();
              return a2[b].apply(a2, arguments);
            };
          });
          a.Pc = function(b) {
            return a.O(b) && "function" == typeof b.remove && "function" == typeof b.push;
          };
          a.b("observableArray", a.Ha);
          a.b("isObservableArray", a.Pc);
          a.Ta.trackArrayChanges = function(b, c) {
            function d() {
              function c2() {
                if (m) {
                  var d2 = [].concat(b.v() || []), e2;
                  if (b.Wa("arrayChange")) {
                    if (!f || 1 < m) f = a.a.Pb(k, d2, b.Ob);
                    e2 = f;
                  }
                  k = d2;
                  f = null;
                  m = 0;
                  e2 && e2.length && b.notifySubscribers(e2, "arrayChange");
                }
              }
              e ? c2() : (e = true, h = b.subscribe(function() {
                ++m;
              }, null, "spectate"), k = [].concat(b.v() || []), f = null, g = b.subscribe(c2));
            }
            b.Ob = {};
            c && "object" == typeof c && a.a.extend(b.Ob, c);
            b.Ob.sparse = true;
            if (!b.zc) {
              var e = false, f = null, g, h, m = 0, k, l = b.Qa, p = b.hb;
              b.Qa = function(a2) {
                l && l.call(b, a2);
                "arrayChange" === a2 && d();
              };
              b.hb = function(a2) {
                p && p.call(b, a2);
                "arrayChange" !== a2 || b.Wa("arrayChange") || (g && g.s(), h && h.s(), h = g = null, e = false, k = n);
              };
              b.zc = function(b2, c2, d2) {
                function l2(a2, b3, c3) {
                  return k2[k2.length] = { status: a2, value: b3, index: c3 };
                }
                if (e && !m) {
                  var k2 = [], p2 = b2.length, g2 = d2.length, h2 = 0;
                  switch (c2) {
                    case "push":
                      h2 = p2;
                    case "unshift":
                      for (c2 = 0; c2 < g2; c2++) l2("added", d2[c2], h2 + c2);
                      break;
                    case "pop":
                      h2 = p2 - 1;
                    case "shift":
                      p2 && l2("deleted", b2[h2], h2);
                      break;
                    case "splice":
                      c2 = Math.min(Math.max(0, 0 > d2[0] ? p2 + d2[0] : d2[0]), p2);
                      for (var p2 = 1 === g2 ? p2 : Math.min(c2 + (d2[1] || 0), p2), g2 = c2 + g2 - 2, h2 = Math.max(p2, g2), U = [], L = [], n2 = 2; c2 < h2; ++c2, ++n2) c2 < p2 && L.push(l2("deleted", b2[c2], c2)), c2 < g2 && U.push(l2("added", d2[n2], c2));
                      a.a.Kc(L, U);
                      break;
                    default:
                      return;
                  }
                  f = k2;
                }
              };
            }
          };
          var r = a.a.Da("_state");
          a.o = a.$ = function(b, c, d) {
            function e() {
              if (0 < arguments.length) {
                if ("function" === typeof f) f.apply(g.nb, arguments);
                else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                return this;
              }
              g.ra || a.u.cc(e);
              (g.ka || g.J && e.Xa()) && e.ha();
              return g.X;
            }
            "object" === typeof b ? d = b : (d = d || {}, b && (d.read = b));
            if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed");
            var f = d.write, g = { X: n, sa: true, ka: true, rb: false, jc: false, ra: false, wb: false, J: false, Wc: d.read, nb: c || d.owner, l: d.disposeWhenNodeIsRemoved || d.l || null, Sa: d.disposeWhen || d.Sa, Rb: null, I: {}, V: 0, Ic: null };
            e[r] = g;
            e.Nc = "function" === typeof f;
            a.a.Ba || a.a.extend(e, a.T.fn);
            a.T.fn.qb(e);
            a.a.Ab(e, C);
            d.pure ? (g.wb = true, g.J = true, a.a.extend(e, da)) : d.deferEvaluation && a.a.extend(e, ea);
            a.options.deferUpdates && a.Ta.deferred(e, true);
            g.l && (g.jc = true, g.l.nodeType || (g.l = null));
            g.J || d.deferEvaluation || e.ha();
            g.l && e.ja() && a.a.K.za(g.l, g.Rb = function() {
              e.s();
            });
            return e;
          };
          var C = {
            equalityComparer: K,
            qa: function() {
              return this[r].V;
            },
            Va: function() {
              var b = [];
              a.a.P(this[r].I, function(a2, d) {
                b[d.Ka] = d.da;
              });
              return b;
            },
            Vb: function(b) {
              if (!this[r].V) return false;
              var c = this.Va();
              return -1 !== a.a.A(c, b) ? true : !!a.a.Lb(c, function(a2) {
                return a2.Vb && a2.Vb(b);
              });
            },
            uc: function(a2, c, d) {
              if (this[r].wb && c === this) throw Error("A 'pure' computed must not be called recursively");
              this[r].I[a2] = d;
              d.Ka = this[r].V++;
              d.La = c.ob();
            },
            Xa: function() {
              var a2, c, d = this[r].I;
              for (a2 in d) if (Object.prototype.hasOwnProperty.call(d, a2) && (c = d[a2], this.Ia && c.da.Ja || c.da.Dd(c.La))) return true;
            },
            Jd: function() {
              this.Ia && !this[r].rb && this.Ia(false);
            },
            ja: function() {
              var a2 = this[r];
              return a2.ka || 0 < a2.V;
            },
            Rd: function() {
              this.Ja ? this[r].ka && (this[r].sa = true) : this.Hc();
            },
            $c: function(a2) {
              if (a2.Hb) {
                var c = a2.subscribe(this.Jd, this, "dirty"), d = a2.subscribe(
                  this.Rd,
                  this
                );
                return { da: a2, s: function() {
                  c.s();
                  d.s();
                } };
              }
              return a2.subscribe(this.Hc, this);
            },
            Hc: function() {
              var b = this, c = b.throttleEvaluation;
              c && 0 <= c ? (clearTimeout(this[r].Ic), this[r].Ic = a.a.setTimeout(function() {
                b.ha(true);
              }, c)) : b.Ia ? b.Ia(true) : b.ha(true);
            },
            ha: function(b) {
              var c = this[r], d = c.Sa, e = false;
              if (!c.rb && !c.ra) {
                if (c.l && !a.a.Sb(c.l) || d && d()) {
                  if (!c.jc) {
                    this.s();
                    return;
                  }
                } else c.jc = false;
                c.rb = true;
                try {
                  e = this.zd(b);
                } finally {
                  c.rb = false;
                }
                return e;
              }
            },
            zd: function(b) {
              var c = this[r], d = false, e = c.wb ? n : !c.V, d = { qd: this, mb: c.I, Qb: c.V };
              a.u.xc({
                pd: d,
                od: ba,
                o: this,
                Ya: e
              });
              c.I = {};
              c.V = 0;
              var f = this.yd(c, d);
              c.V ? d = this.sb(c.X, f) : (this.s(), d = true);
              d && (c.J ? this.Gb() : this.notifySubscribers(c.X, "beforeChange"), c.X = f, this.notifySubscribers(c.X, "spectate"), !c.J && b && this.notifySubscribers(c.X), this.rc && this.rc());
              e && this.notifySubscribers(c.X, "awake");
              return d;
            },
            yd: function(b, c) {
              try {
                var d = b.Wc;
                return b.nb ? d.call(b.nb) : d();
              } finally {
                a.u.end(), c.Qb && !b.J && a.a.P(c.mb, aa), b.sa = b.ka = false;
              }
            },
            v: function(a2) {
              var c = this[r];
              (c.ka && (a2 || !c.V) || c.J && this.Xa()) && this.ha();
              return c.X;
            },
            ub: function(b) {
              a.T.fn.ub.call(this, b);
              this.nc = function() {
                this[r].J || (this[r].sa ? this.ha() : this[r].ka = false);
                return this[r].X;
              };
              this.Ia = function(a2) {
                this.pc(this[r].X);
                this[r].ka = true;
                a2 && (this[r].sa = true);
                this.qc(this, !a2);
              };
            },
            s: function() {
              var b = this[r];
              !b.J && b.I && a.a.P(b.I, function(a2, b2) {
                b2.s && b2.s();
              });
              b.l && b.Rb && a.a.K.yb(b.l, b.Rb);
              b.I = n;
              b.V = 0;
              b.ra = true;
              b.sa = false;
              b.ka = false;
              b.J = false;
              b.l = n;
              b.Sa = n;
              b.Wc = n;
              this.Nc || (b.nb = n);
            }
          }, da = { Qa: function(b) {
            var c = this, d = c[r];
            if (!d.ra && d.J && "change" == b) {
              d.J = false;
              if (d.sa || c.Xa()) d.I = null, d.V = 0, c.ha() && c.Gb();
              else {
                var e = [];
                a.a.P(d.I, function(a2, b2) {
                  e[b2.Ka] = a2;
                });
                a.a.D(e, function(a2, b2) {
                  var e2 = d.I[a2], m = c.$c(e2.da);
                  m.Ka = b2;
                  m.La = e2.La;
                  d.I[a2] = m;
                });
                c.Xa() && c.ha() && c.Gb();
              }
              d.ra || c.notifySubscribers(d.X, "awake");
            }
          }, hb: function(b) {
            var c = this[r];
            c.ra || "change" != b || this.Wa("change") || (a.a.P(c.I, function(a2, b2) {
              b2.s && (c.I[a2] = { da: b2.da, Ka: b2.Ka, La: b2.La }, b2.s());
            }), c.J = true, this.notifySubscribers(n, "asleep"));
          }, ob: function() {
            var b = this[r];
            b.J && (b.sa || this.Xa()) && this.ha();
            return a.T.fn.ob.call(this);
          } }, ea = { Qa: function(a2) {
            "change" != a2 && "beforeChange" != a2 || this.v();
          } };
          a.a.Ba && a.a.setPrototypeOf(C, a.T.fn);
          var N = a.ta.Ma;
          C[N] = a.o;
          a.Oc = function(a2) {
            return "function" == typeof a2 && a2[N] === C[N];
          };
          a.Fd = function(b) {
            return a.Oc(b) && b[r] && b[r].wb;
          };
          a.b("computed", a.o);
          a.b("dependentObservable", a.o);
          a.b("isComputed", a.Oc);
          a.b("isPureComputed", a.Fd);
          a.b("computed.fn", C);
          a.L(C, "peek", C.v);
          a.L(C, "dispose", C.s);
          a.L(C, "isActive", C.ja);
          a.L(C, "getDependenciesCount", C.qa);
          a.L(C, "getDependencies", C.Va);
          a.xb = function(b, c) {
            if ("function" === typeof b) return a.o(
              b,
              c,
              { pure: true }
            );
            b = a.a.extend({}, b);
            b.pure = true;
            return a.o(b, c);
          };
          a.b("pureComputed", a.xb);
          (function() {
            function b(a2, f, g) {
              g = g || new d();
              a2 = f(a2);
              if ("object" != typeof a2 || null === a2 || a2 === n || a2 instanceof RegExp || a2 instanceof Date || a2 instanceof String || a2 instanceof Number || a2 instanceof Boolean) return a2;
              var h = a2 instanceof Array ? [] : {};
              g.save(a2, h);
              c(a2, function(c2) {
                var d2 = f(a2[c2]);
                switch (typeof d2) {
                  case "boolean":
                  case "number":
                  case "string":
                  case "function":
                    h[c2] = d2;
                    break;
                  case "object":
                  case "undefined":
                    var l = g.get(d2);
                    h[c2] = l !== n ? l : b(d2, f, g);
                }
              });
              return h;
            }
            function c(a2, b2) {
              if (a2 instanceof Array) {
                for (var c2 = 0; c2 < a2.length; c2++) b2(c2);
                "function" == typeof a2.toJSON && b2("toJSON");
              } else for (c2 in a2) b2(c2);
            }
            function d() {
              this.keys = [];
              this.values = [];
            }
            a.ad = function(c2) {
              if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
              return b(c2, function(b2) {
                for (var c3 = 0; a.O(b2) && 10 > c3; c3++) b2 = b2();
                return b2;
              });
            };
            a.toJSON = function(b2, c2, d2) {
              b2 = a.ad(b2);
              return a.a.hc(b2, c2, d2);
            };
            d.prototype = { constructor: d, save: function(b2, c2) {
              var d2 = a.a.A(
                this.keys,
                b2
              );
              0 <= d2 ? this.values[d2] = c2 : (this.keys.push(b2), this.values.push(c2));
            }, get: function(b2) {
              b2 = a.a.A(this.keys, b2);
              return 0 <= b2 ? this.values[b2] : n;
            } };
          })();
          a.b("toJS", a.ad);
          a.b("toJSON", a.toJSON);
          a.Wd = function(b, c, d) {
            function e(c2) {
              var e2 = a.xb(b, d).extend({ ma: "always" }), h = e2.subscribe(function(a2) {
                a2 && (h.s(), c2(a2));
              });
              e2.notifySubscribers(e2.v());
              return h;
            }
            return "function" !== typeof Promise || c ? e(c.bind(d)) : new Promise(e);
          };
          a.b("when", a.Wd);
          (function() {
            a.w = { M: function(b) {
              switch (a.a.R(b)) {
                case "option":
                  return true === b.__ko__hasDomDataOptionValue__ ? a.a.g.get(b, a.c.options.$b) : 7 >= a.a.W ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                case "select":
                  return 0 <= b.selectedIndex ? a.w.M(b.options[b.selectedIndex]) : n;
                default:
                  return b.value;
              }
            }, cb: function(b, c, d) {
              switch (a.a.R(b)) {
                case "option":
                  "string" === typeof c ? (a.a.g.set(b, a.c.options.$b, n), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c) : (a.a.g.set(b, a.c.options.$b, c), b.__ko__hasDomDataOptionValue__ = true, b.value = "number" === typeof c ? c : "");
                  break;
                case "select":
                  if ("" === c || null === c) c = n;
                  for (var e = -1, f = 0, g = b.options.length, h; f < g; ++f) if (h = a.w.M(b.options[f]), h == c || "" === h && c === n) {
                    e = f;
                    break;
                  }
                  if (d || 0 <= e || c === n && 1 < b.size) b.selectedIndex = e, 6 === a.a.W && a.a.setTimeout(function() {
                    b.selectedIndex = e;
                  }, 0);
                  break;
                default:
                  if (null === c || c === n) c = "";
                  b.value = c;
              }
            } };
          })();
          a.b("selectExtensions", a.w);
          a.b("selectExtensions.readValue", a.w.M);
          a.b("selectExtensions.writeValue", a.w.cb);
          a.m = function() {
            function b(b2) {
              b2 = a.a.Db(b2);
              123 === b2.charCodeAt(0) && (b2 = b2.slice(
                1,
                -1
              ));
              b2 += "\n,";
              var c2 = [], d2 = b2.match(e), p, q = [], h2 = 0;
              if (1 < d2.length) {
                for (var x = 0, B; B = d2[x]; ++x) {
                  var u = B.charCodeAt(0);
                  if (44 === u) {
                    if (0 >= h2) {
                      c2.push(p && q.length ? { key: p, value: q.join("") } : { unknown: p || q.join("") });
                      p = h2 = 0;
                      q = [];
                      continue;
                    }
                  } else if (58 === u) {
                    if (!h2 && !p && 1 === q.length) {
                      p = q.pop();
                      continue;
                    }
                  } else if (47 === u && 1 < B.length && (47 === B.charCodeAt(1) || 42 === B.charCodeAt(1))) continue;
                  else 47 === u && x && 1 < B.length ? (u = d2[x - 1].match(f)) && !g[u[0]] && (b2 = b2.substr(b2.indexOf(B) + 1), d2 = b2.match(e), x = -1, B = "/") : 40 === u || 123 === u || 91 === u ? ++h2 : 41 === u || 125 === u || 93 === u ? --h2 : p || q.length || 34 !== u && 39 !== u || (B = B.slice(1, -1));
                  q.push(B);
                }
                if (0 < h2) throw Error("Unbalanced parentheses, braces, or brackets");
              }
              return c2;
            }
            var c = ["true", "false", "null", "undefined"], d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g"), f = /[\])"'A-Za-z0-9_$]+$/, g = { "in": 1, "return": 1, "typeof": 1 }, h = {};
            return { Ra: [], wa: h, ac: b, vb: function(e2, f2) {
              function l(b2, e3) {
                var f3;
                if (!x) {
                  var k = a.getBindingHandler(b2);
                  if (k && k.preprocess && !(e3 = k.preprocess(e3, b2, l))) return;
                  if (k = h[b2]) f3 = e3, 0 <= a.a.A(c, f3) ? f3 = false : (k = f3.match(d), f3 = null === k ? false : k[1] ? "Object(" + k[1] + ")" + k[2] : f3), k = f3;
                  k && q.push("'" + ("string" == typeof h[b2] ? h[b2] : b2) + "':function(_z){" + f3 + "=_z}");
                }
                g2 && (e3 = "function(){return " + e3 + " }");
                p.push("'" + b2 + "':" + e3);
              }
              f2 = f2 || {};
              var p = [], q = [], g2 = f2.valueAccessors, x = f2.bindingParams, B = "string" === typeof e2 ? b(e2) : e2;
              a.a.D(B, function(a2) {
                l(
                  a2.key || a2.unknown,
                  a2.value
                );
              });
              q.length && l("_ko_property_writers", "{" + q.join(",") + " }");
              return p.join(",");
            }, Id: function(a2, b2) {
              for (var c2 = 0; c2 < a2.length; c2++) if (a2[c2].key == b2) return true;
              return false;
            }, eb: function(b2, c2, d2, e2, f2) {
              if (b2 && a.O(b2)) !a.Za(b2) || f2 && b2.v() === e2 || b2(e2);
              else if ((b2 = c2.get("_ko_property_writers")) && b2[d2]) b2[d2](e2);
            } };
          }();
          a.b("expressionRewriting", a.m);
          a.b("expressionRewriting.bindingRewriteValidators", a.m.Ra);
          a.b("expressionRewriting.parseObjectLiteral", a.m.ac);
          a.b("expressionRewriting.preProcessBindings", a.m.vb);
          a.b(
            "expressionRewriting._twoWayBindings",
            a.m.wa
          );
          a.b("jsonExpressionRewriting", a.m);
          a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.m.vb);
          (function() {
            function b(a2) {
              return 8 == a2.nodeType && g.test(f ? a2.text : a2.nodeValue);
            }
            function c(a2) {
              return 8 == a2.nodeType && h.test(f ? a2.text : a2.nodeValue);
            }
            function d(d2, e2) {
              for (var f2 = d2, h2 = 1, g2 = []; f2 = f2.nextSibling; ) {
                if (c(f2) && (a.a.g.set(f2, k, true), h2--, 0 === h2)) return g2;
                g2.push(f2);
                b(f2) && h2++;
              }
              if (!e2) throw Error("Cannot find closing comment tag to match: " + d2.nodeValue);
              return null;
            }
            function e(a2, b2) {
              var c2 = d(a2, b2);
              return c2 ? 0 < c2.length ? c2[c2.length - 1].nextSibling : a2.nextSibling : null;
            }
            var f = w && "<!--test-->" === w.createComment("test").text, g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, m = { ul: true, ol: true }, k = "__ko_matchedEndComment__";
            a.h = { ea: {}, childNodes: function(a2) {
              return b(a2) ? d(a2) : a2.childNodes;
            }, Ea: function(c2) {
              if (b(c2)) {
                c2 = a.h.childNodes(c2);
                for (var d2 = 0, e2 = c2.length; d2 < e2; d2++) a.removeNode(c2[d2]);
              } else a.a.Tb(c2);
            }, va: function(c2, d2) {
              if (b(c2)) {
                a.h.Ea(c2);
                for (var e2 = c2.nextSibling, f2 = 0, k2 = d2.length; f2 < k2; f2++) e2.parentNode.insertBefore(d2[f2], e2);
              } else a.a.va(c2, d2);
            }, Vc: function(a2, c2) {
              var d2;
              b(a2) ? (d2 = a2.nextSibling, a2 = a2.parentNode) : d2 = a2.firstChild;
              d2 ? c2 !== d2 && a2.insertBefore(c2, d2) : a2.appendChild(c2);
            }, Wb: function(c2, d2, e2) {
              e2 ? (e2 = e2.nextSibling, b(c2) && (c2 = c2.parentNode), e2 ? d2 !== e2 && c2.insertBefore(d2, e2) : c2.appendChild(d2)) : a.h.Vc(c2, d2);
            }, firstChild: function(a2) {
              if (b(a2)) return !a2.nextSibling || c(a2.nextSibling) ? null : a2.nextSibling;
              if (a2.firstChild && c(a2.firstChild)) throw Error("Found invalid end comment, as the first child of " + a2);
              return a2.firstChild;
            }, nextSibling: function(d2) {
              b(d2) && (d2 = e(d2));
              if (d2.nextSibling && c(d2.nextSibling)) {
                var f2 = d2.nextSibling;
                if (c(f2) && !a.a.g.get(f2, k)) throw Error("Found end comment without a matching opening comment, as child of " + d2);
                return null;
              }
              return d2.nextSibling;
            }, Cd: b, Vd: function(a2) {
              return (a2 = (f ? a2.text : a2.nodeValue).match(g)) ? a2[1] : null;
            }, Sc: function(d2) {
              if (m[a.a.R(d2)]) {
                var f2 = d2.firstChild;
                if (f2) {
                  do
                    if (1 === f2.nodeType) {
                      var k2;
                      k2 = f2.firstChild;
                      var h2 = null;
                      if (k2) {
                        do
                          if (h2) h2.push(k2);
                          else if (b(k2)) {
                            var g2 = e(k2, true);
                            g2 ? k2 = g2 : h2 = [k2];
                          } else c(k2) && (h2 = [k2]);
                        while (k2 = k2.nextSibling);
                      }
                      if (k2 = h2) for (h2 = f2.nextSibling, g2 = 0; g2 < k2.length; g2++) h2 ? d2.insertBefore(k2[g2], h2) : d2.appendChild(k2[g2]);
                    }
                  while (f2 = f2.nextSibling);
                }
              }
            } };
          })();
          a.b("virtualElements", a.h);
          a.b("virtualElements.allowedBindings", a.h.ea);
          a.b("virtualElements.emptyNode", a.h.Ea);
          a.b("virtualElements.insertAfter", a.h.Wb);
          a.b("virtualElements.prepend", a.h.Vc);
          a.b("virtualElements.setDomNodeChildren", a.h.va);
          (function() {
            a.ga = function() {
              this.nd = {};
            };
            a.a.extend(a.ga.prototype, {
              nodeHasBindings: function(b) {
                switch (b.nodeType) {
                  case 1:
                    return null != b.getAttribute("data-bind") || a.j.getComponentNameForNode(b);
                  case 8:
                    return a.h.Cd(b);
                  default:
                    return false;
                }
              },
              getBindings: function(b, c) {
                var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b) : null;
                return a.j.tc(d, b, c, false);
              },
              getBindingAccessors: function(b, c) {
                var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b, { valueAccessors: true }) : null;
                return a.j.tc(d, b, c, true);
              },
              getBindingsString: function(b) {
                switch (b.nodeType) {
                  case 1:
                    return b.getAttribute("data-bind");
                  case 8:
                    return a.h.Vd(b);
                  default:
                    return null;
                }
              },
              parseBindingsString: function(b, c, d, e) {
                try {
                  var f = this.nd, g = b + (e && e.valueAccessors || ""), h;
                  if (!(h = f[g])) {
                    var m, k = "with($context){with($data||{}){return{" + a.m.vb(b, e) + "}}}";
                    m = new Function("$context", "$element", k);
                    h = f[g] = m;
                  }
                  return h(c, d);
                } catch (l) {
                  throw l.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + l.message, l;
                }
              }
            });
            a.ga.instance = new a.ga();
          })();
          a.b("bindingProvider", a.ga);
          (function() {
            function b(b2) {
              var c2 = (b2 = a.a.g.get(b2, z)) && b2.N;
              c2 && (b2.N = null, c2.Tc());
            }
            function c(c2, d2, e2) {
              this.node = c2;
              this.yc = d2;
              this.kb = [];
              this.H = false;
              d2.N || a.a.K.za(c2, b);
              e2 && e2.N && (e2.N.kb.push(c2), this.Kb = e2);
            }
            function d(a2) {
              return function() {
                return a2;
              };
            }
            function e(a2) {
              return a2();
            }
            function f(b2) {
              return a.a.Ga(a.u.G(b2), function(a2, c2) {
                return function() {
                  return b2()[c2];
                };
              });
            }
            function g(b2, c2, e2) {
              return "function" === typeof b2 ? f(b2.bind(null, c2, e2)) : a.a.Ga(b2, d);
            }
            function h(a2, b2) {
              return f(this.getBindings.bind(this, a2, b2));
            }
            function m(b2, c2) {
              var d2 = a.h.firstChild(c2);
              if (d2) {
                var e2, f2 = a.ga.instance, l2 = f2.preprocessNode;
                if (l2) {
                  for (; e2 = d2; ) d2 = a.h.nextSibling(e2), l2.call(f2, e2);
                  d2 = a.h.firstChild(c2);
                }
                for (; e2 = d2; ) d2 = a.h.nextSibling(e2), k(b2, e2);
              }
              a.i.ma(c2, a.i.H);
            }
            function k(b2, c2) {
              var d2 = b2, e2 = 1 === c2.nodeType;
              e2 && a.h.Sc(c2);
              if (e2 || a.ga.instance.nodeHasBindings(c2)) d2 = p(c2, null, b2).bindingContextForDescendants;
              d2 && !u[a.a.R(c2)] && m(d2, c2);
            }
            function l(b2) {
              var c2 = [], d2 = {}, e2 = [];
              a.a.P(b2, function ca(f2) {
                if (!d2[f2]) {
                  var k2 = a.getBindingHandler(f2);
                  k2 && (k2.after && (e2.push(f2), a.a.D(k2.after, function(c3) {
                    if (b2[c3]) {
                      if (-1 !== a.a.A(e2, c3)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e2.join(", "));
                      ca(c3);
                    }
                  }), e2.length--), c2.push({ key: f2, Mc: k2 }));
                  d2[f2] = true;
                }
              });
              return c2;
            }
            function p(b2, c2, d2) {
              var f2 = a.a.g.Ub(b2, z, {}), k2 = f2.hd;
              if (!c2) {
                if (k2) throw Error("You cannot apply bindings multiple times to the same element.");
                f2.hd = true;
              }
              k2 || (f2.context = d2);
              f2.Zb || (f2.Zb = {});
              var g2;
              if (c2 && "function" !== typeof c2) g2 = c2;
              else {
                var p2 = a.ga.instance, q2 = p2.getBindingAccessors || h, m2 = a.$(function() {
                  if (g2 = c2 ? c2(d2, b2) : q2.call(p2, b2, d2)) {
                    if (d2[t]) d2[t]();
                    if (d2[B]) d2[B]();
                  }
                  return g2;
                }, null, { l: b2 });
                g2 && m2.ja() || (m2 = null);
              }
              var x2 = d2, u2;
              if (g2) {
                var J2 = function() {
                  return a.a.Ga(m2 ? m2() : g2, e);
                }, r2 = m2 ? function(a2) {
                  return function() {
                    return e(m2()[a2]);
                  };
                } : function(a2) {
                  return g2[a2];
                };
                J2.get = function(a2) {
                  return g2[a2] && e(r2(a2));
                };
                J2.has = function(a2) {
                  return a2 in g2;
                };
                a.i.H in g2 && a.i.subscribe(b2, a.i.H, function() {
                  var c3 = (0, g2[a.i.H])();
                  if (c3) {
                    var d3 = a.h.childNodes(b2);
                    d3.length && c3(d3, a.Ec(d3[0]));
                  }
                });
                a.i.pa in g2 && (x2 = a.i.Cb(b2, d2), a.i.subscribe(b2, a.i.pa, function() {
                  var c3 = (0, g2[a.i.pa])();
                  c3 && a.h.firstChild(b2) && c3(b2);
                }));
                f2 = l(g2);
                a.a.D(f2, function(c3) {
                  var d3 = c3.Mc.init, e2 = c3.Mc.update, f3 = c3.key;
                  if (8 === b2.nodeType && !a.h.ea[f3]) throw Error("The binding '" + f3 + "' cannot be used with virtual elements");
                  try {
                    "function" == typeof d3 && a.u.G(function() {
                      var a2 = d3(b2, r2(f3), J2, x2.$data, x2);
                      if (a2 && a2.controlsDescendantBindings) {
                        if (u2 !== n) throw Error("Multiple bindings (" + u2 + " and " + f3 + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                        u2 = f3;
                      }
                    }), "function" == typeof e2 && a.$(function() {
                      e2(b2, r2(f3), J2, x2.$data, x2);
                    }, null, { l: b2 });
                  } catch (k3) {
                    throw k3.message = 'Unable to process binding "' + f3 + ": " + g2[f3] + '"\nMessage: ' + k3.message, k3;
                  }
                });
              }
              f2 = u2 === n;
              return { shouldBindDescendants: f2, bindingContextForDescendants: f2 && x2 };
            }
            function q(b2, c2) {
              return b2 && b2 instanceof a.fa ? b2 : new a.fa(b2, n, n, c2);
            }
            var t = a.a.Da("_subscribable"), x = a.a.Da("_ancestorBindingInfo"), B = a.a.Da("_dataDependency");
            a.c = {};
            var u = { script: true, textarea: true, template: true };
            a.getBindingHandler = function(b2) {
              return a.c[b2];
            };
            var J = {};
            a.fa = function(b2, c2, d2, e2, f2) {
              function k2() {
                var b3 = p2 ? h2() : h2, f3 = a.a.f(b3);
                c2 ? (a.a.extend(l2, c2), x in c2 && (l2[x] = c2[x])) : (l2.$parents = [], l2.$root = f3, l2.ko = a);
                l2[t] = q2;
                g2 ? f3 = l2.$data : (l2.$rawData = b3, l2.$data = f3);
                d2 && (l2[d2] = f3);
                e2 && e2(l2, c2, f3);
                if (c2 && c2[t] && !a.S.o().Vb(c2[t])) c2[t]();
                m2 && (l2[B] = m2);
                return l2.$data;
              }
              var l2 = this, g2 = b2 === J, h2 = g2 ? n : b2, p2 = "function" == typeof h2 && !a.O(h2), q2, m2 = f2 && f2.dataDependency;
              f2 && f2.exportDependencies ? k2() : (q2 = a.xb(k2), q2.v(), q2.ja() ? q2.equalityComparer = null : l2[t] = n);
            };
            a.fa.prototype.createChildContext = function(b2, c2, d2, e2) {
              !e2 && c2 && "object" == typeof c2 && (e2 = c2, c2 = e2.as, d2 = e2.extend);
              if (c2 && e2 && e2.noChildContext) {
                var f2 = "function" == typeof b2 && !a.O(b2);
                return new a.fa(J, this, null, function(a2) {
                  d2 && d2(a2);
                  a2[c2] = f2 ? b2() : b2;
                }, e2);
              }
              return new a.fa(
                b2,
                this,
                c2,
                function(a2, b3) {
                  a2.$parentContext = b3;
                  a2.$parent = b3.$data;
                  a2.$parents = (b3.$parents || []).slice(0);
                  a2.$parents.unshift(a2.$parent);
                  d2 && d2(a2);
                },
                e2
              );
            };
            a.fa.prototype.extend = function(b2, c2) {
              return new a.fa(J, this, null, function(c3) {
                a.a.extend(c3, "function" == typeof b2 ? b2(c3) : b2);
              }, c2);
            };
            var z = a.a.g.Z();
            c.prototype.Tc = function() {
              this.Kb && this.Kb.N && this.Kb.N.sd(this.node);
            };
            c.prototype.sd = function(b2) {
              a.a.Pa(this.kb, b2);
              !this.kb.length && this.H && this.Cc();
            };
            c.prototype.Cc = function() {
              this.H = true;
              this.yc.N && !this.kb.length && (this.yc.N = null, a.a.K.yb(this.node, b), a.i.ma(this.node, a.i.pa), this.Tc());
            };
            a.i = { H: "childrenComplete", pa: "descendantsComplete", subscribe: function(b2, c2, d2, e2, f2) {
              var k2 = a.a.g.Ub(b2, z, {});
              k2.Fa || (k2.Fa = new a.T());
              f2 && f2.notifyImmediately && k2.Zb[c2] && a.u.G(d2, e2, [b2]);
              return k2.Fa.subscribe(d2, e2, c2);
            }, ma: function(b2, c2) {
              var d2 = a.a.g.get(b2, z);
              if (d2 && (d2.Zb[c2] = true, d2.Fa && d2.Fa.notifySubscribers(b2, c2), c2 == a.i.H)) {
                if (d2.N) d2.N.Cc();
                else if (d2.N === n && d2.Fa && d2.Fa.Wa(a.i.pa)) throw Error("descendantsComplete event not supported for bindings on this node");
              }
            }, Cb: function(b2, d2) {
              var e2 = a.a.g.Ub(b2, z, {});
              e2.N || (e2.N = new c(b2, e2, d2[x]));
              return d2[x] == e2 ? d2 : d2.extend(function(a2) {
                a2[x] = e2;
              });
            } };
            a.Td = function(b2) {
              return (b2 = a.a.g.get(b2, z)) && b2.context;
            };
            a.ib = function(b2, c2, d2) {
              1 === b2.nodeType && a.h.Sc(b2);
              return p(b2, c2, q(d2));
            };
            a.ld = function(b2, c2, d2) {
              d2 = q(d2);
              return a.ib(b2, g(c2, d2, b2), d2);
            };
            a.Oa = function(a2, b2) {
              1 !== b2.nodeType && 8 !== b2.nodeType || m(q(a2), b2);
            };
            a.vc = function(a2, b2, c2) {
              !v && A.jQuery && (v = A.jQuery);
              if (2 > arguments.length) {
                if (b2 = w.body, !b2) throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
              } else if (!b2 || 1 !== b2.nodeType && 8 !== b2.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
              k(q(a2, c2), b2);
            };
            a.Dc = function(b2) {
              return !b2 || 1 !== b2.nodeType && 8 !== b2.nodeType ? n : a.Td(b2);
            };
            a.Ec = function(b2) {
              return (b2 = a.Dc(b2)) ? b2.$data : n;
            };
            a.b("bindingHandlers", a.c);
            a.b("bindingEvent", a.i);
            a.b("bindingEvent.subscribe", a.i.subscribe);
            a.b("bindingEvent.startPossiblyAsyncContentBinding", a.i.Cb);
            a.b("applyBindings", a.vc);
            a.b("applyBindingsToDescendants", a.Oa);
            a.b("applyBindingAccessorsToNode", a.ib);
            a.b("applyBindingsToNode", a.ld);
            a.b("contextFor", a.Dc);
            a.b("dataFor", a.Ec);
          })();
          (function(b) {
            function c(c2, e2) {
              var k = Object.prototype.hasOwnProperty.call(f, c2) ? f[c2] : b, l;
              k ? k.subscribe(e2) : (k = f[c2] = new a.T(), k.subscribe(e2), d(c2, function(b2, d2) {
                var e3 = !(!d2 || !d2.synchronous);
                g[c2] = { definition: b2, Gd: e3 };
                delete f[c2];
                l || e3 ? k.notifySubscribers(b2) : a.na.zb(function() {
                  k.notifySubscribers(b2);
                });
              }), l = true);
            }
            function d(a2, b2) {
              e("getConfig", [a2], function(c2) {
                c2 ? e("loadComponent", [a2, c2], function(a3) {
                  b2(
                    a3,
                    c2
                  );
                }) : b2(null, null);
              });
            }
            function e(c2, d2, f2, l) {
              l || (l = a.j.loaders.slice(0));
              var g2 = l.shift();
              if (g2) {
                var q = g2[c2];
                if (q) {
                  var t = false;
                  if (q.apply(g2, d2.concat(function(a2) {
                    t ? f2(null) : null !== a2 ? f2(a2) : e(c2, d2, f2, l);
                  })) !== b && (t = true, !g2.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                } else e(c2, d2, f2, l);
              } else f2(null);
            }
            var f = {}, g = {};
            a.j = { get: function(d2, e2) {
              var f2 = Object.prototype.hasOwnProperty.call(g, d2) ? g[d2] : b;
              f2 ? f2.Gd ? a.u.G(function() {
                e2(f2.definition);
              }) : a.na.zb(function() {
                e2(f2.definition);
              }) : c(d2, e2);
            }, Bc: function(a2) {
              delete g[a2];
            }, oc: e };
            a.j.loaders = [];
            a.b("components", a.j);
            a.b("components.get", a.j.get);
            a.b("components.clearCachedDefinition", a.j.Bc);
          })();
          (function() {
            function b(b2, c2, d2, e2) {
              function g2() {
                0 === --B && e2(h2);
              }
              var h2 = {}, B = 2, u = d2.template;
              d2 = d2.viewModel;
              u ? f(c2, u, function(c3) {
                a.j.oc("loadTemplate", [b2, c3], function(a2) {
                  h2.template = a2;
                  g2();
                });
              }) : g2();
              d2 ? f(c2, d2, function(c3) {
                a.j.oc("loadViewModel", [b2, c3], function(a2) {
                  h2[m] = a2;
                  g2();
                });
              }) : g2();
            }
            function c(a2, b2, d2) {
              if ("function" === typeof b2) d2(function(a3) {
                return new b2(a3);
              });
              else if ("function" === typeof b2[m]) d2(b2[m]);
              else if ("instance" in b2) {
                var e2 = b2.instance;
                d2(function() {
                  return e2;
                });
              } else "viewModel" in b2 ? c(a2, b2.viewModel, d2) : a2("Unknown viewModel value: " + b2);
            }
            function d(b2) {
              switch (a.a.R(b2)) {
                case "script":
                  return a.a.ua(b2.text);
                case "textarea":
                  return a.a.ua(b2.value);
                case "template":
                  if (e(b2.content)) return a.a.Ca(b2.content.childNodes);
              }
              return a.a.Ca(b2.childNodes);
            }
            function e(a2) {
              return A.DocumentFragment ? a2 instanceof DocumentFragment : a2 && 11 === a2.nodeType;
            }
            function f(a2, b2, c2) {
              "string" === typeof b2.require ? T || A.require ? (T || A.require)([b2.require], function(a3) {
                a3 && "object" === typeof a3 && a3.Xd && a3["default"] && (a3 = a3["default"]);
                c2(a3);
              }) : a2("Uses require, but no AMD loader is present") : c2(b2);
            }
            function g(a2) {
              return function(b2) {
                throw Error("Component '" + a2 + "': " + b2);
              };
            }
            var h = {};
            a.j.register = function(b2, c2) {
              if (!c2) throw Error("Invalid configuration for " + b2);
              if (a.j.tb(b2)) throw Error("Component " + b2 + " is already registered");
              h[b2] = c2;
            };
            a.j.tb = function(a2) {
              return Object.prototype.hasOwnProperty.call(h, a2);
            };
            a.j.unregister = function(b2) {
              delete h[b2];
              a.j.Bc(b2);
            };
            a.j.Fc = { getConfig: function(b2, c2) {
              c2(a.j.tb(b2) ? h[b2] : null);
            }, loadComponent: function(a2, c2, d2) {
              var e2 = g(a2);
              f(e2, c2, function(c3) {
                b(a2, e2, c3, d2);
              });
            }, loadTemplate: function(b2, c2, f2) {
              b2 = g(b2);
              if ("string" === typeof c2) f2(a.a.ua(c2));
              else if (c2 instanceof Array) f2(c2);
              else if (e(c2)) f2(a.a.la(c2.childNodes));
              else if (c2.element) if (c2 = c2.element, A.HTMLElement ? c2 instanceof HTMLElement : c2 && c2.tagName && 1 === c2.nodeType) f2(d(c2));
              else if ("string" === typeof c2) {
                var h2 = w.getElementById(c2);
                h2 ? f2(d(h2)) : b2("Cannot find element with ID " + c2);
              } else b2("Unknown element type: " + c2);
              else b2("Unknown template value: " + c2);
            }, loadViewModel: function(a2, b2, d2) {
              c(g(a2), b2, d2);
            } };
            var m = "createViewModel";
            a.b("components.register", a.j.register);
            a.b("components.isRegistered", a.j.tb);
            a.b("components.unregister", a.j.unregister);
            a.b("components.defaultLoader", a.j.Fc);
            a.j.loaders.push(a.j.Fc);
            a.j.dd = h;
          })();
          (function() {
            function b(b2, e) {
              var f = b2.getAttribute("params");
              if (f) {
                var f = c.parseBindingsString(f, e, b2, { valueAccessors: true, bindingParams: true }), f = a.a.Ga(f, function(c2) {
                  return a.o(c2, null, { l: b2 });
                }), g = a.a.Ga(
                  f,
                  function(c2) {
                    var e2 = c2.v();
                    return c2.ja() ? a.o({ read: function() {
                      return a.a.f(c2());
                    }, write: a.Za(e2) && function(a2) {
                      c2()(a2);
                    }, l: b2 }) : e2;
                  }
                );
                Object.prototype.hasOwnProperty.call(g, "$raw") || (g.$raw = f);
                return g;
              }
              return { $raw: {} };
            }
            a.j.getComponentNameForNode = function(b2) {
              var c2 = a.a.R(b2);
              if (a.j.tb(c2) && (-1 != c2.indexOf("-") || "[object HTMLUnknownElement]" == "" + b2 || 8 >= a.a.W && b2.tagName === c2)) return c2;
            };
            a.j.tc = function(c2, e, f, g) {
              if (1 === e.nodeType) {
                var h = a.j.getComponentNameForNode(e);
                if (h) {
                  c2 = c2 || {};
                  if (c2.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                  var m = { name: h, params: b(e, f) };
                  c2.component = g ? function() {
                    return m;
                  } : m;
                }
              }
              return c2;
            };
            var c = new a.ga();
            9 > a.a.W && (a.j.register = /* @__PURE__ */ function(a2) {
              return function(b2) {
                return a2.apply(this, arguments);
              };
            }(a.j.register), w.createDocumentFragment = /* @__PURE__ */ function(b2) {
              return function() {
                var c2 = b2(), f = a.j.dd, g;
                for (g in f) ;
                return c2;
              };
            }(w.createDocumentFragment));
          })();
          (function() {
            function b(b2, c2, d2) {
              c2 = c2.template;
              if (!c2) throw Error("Component '" + b2 + "' has no template");
              b2 = a.a.Ca(c2);
              a.h.va(d2, b2);
            }
            function c(a2, b2, c2) {
              var d2 = a2.createViewModel;
              return d2 ? d2.call(
                a2,
                b2,
                c2
              ) : b2;
            }
            var d = 0;
            a.c.component = { init: function(e, f, g, h, m) {
              function k() {
                var a2 = l && l.dispose;
                "function" === typeof a2 && a2.call(l);
                q && q.s();
                p = l = q = null;
              }
              var l, p, q, t = a.a.la(a.h.childNodes(e));
              a.h.Ea(e);
              a.a.K.za(e, k);
              a.o(function() {
                var g2 = a.a.f(f()), h2, u;
                "string" === typeof g2 ? h2 = g2 : (h2 = a.a.f(g2.name), u = a.a.f(g2.params));
                if (!h2) throw Error("No component name specified");
                var n2 = a.i.Cb(e, m), z = p = ++d;
                a.j.get(h2, function(d2) {
                  if (p === z) {
                    k();
                    if (!d2) throw Error("Unknown component '" + h2 + "'");
                    b(h2, d2, e);
                    var f2 = c(d2, u, { element: e, templateNodes: t });
                    d2 = n2.createChildContext(f2, { extend: function(a2) {
                      a2.$component = f2;
                      a2.$componentTemplateNodes = t;
                    } });
                    f2 && f2.koDescendantsComplete && (q = a.i.subscribe(e, a.i.pa, f2.koDescendantsComplete, f2));
                    l = f2;
                    a.Oa(d2, e);
                  }
                });
              }, null, { l: e });
              return { controlsDescendantBindings: true };
            } };
            a.h.ea.component = true;
          })();
          var V = { "class": "className", "for": "htmlFor" };
          a.c.attr = { update: function(b, c) {
            var d = a.a.f(c()) || {};
            a.a.P(d, function(c2, d2) {
              d2 = a.a.f(d2);
              var g = c2.indexOf(":"), g = "lookupNamespaceURI" in b && 0 < g && b.lookupNamespaceURI(c2.substr(0, g)), h = false === d2 || null === d2 || d2 === n;
              h ? g ? b.removeAttributeNS(g, c2) : b.removeAttribute(c2) : d2 = d2.toString();
              8 >= a.a.W && c2 in V ? (c2 = V[c2], h ? b.removeAttribute(c2) : b[c2] = d2) : h || (g ? b.setAttributeNS(g, c2, d2) : b.setAttribute(c2, d2));
              "name" === c2 && a.a.Yc(b, h ? "" : d2);
            });
          } };
          (function() {
            a.c.checked = { after: ["value", "attr"], init: function(b, c, d) {
              function e() {
                var e2 = b.checked, f2 = g();
                if (!a.S.Ya() && (e2 || !m && !a.S.qa())) {
                  var k2 = a.u.G(c);
                  if (l) {
                    var q2 = p ? k2.v() : k2, z = t;
                    t = f2;
                    z !== f2 ? e2 && (a.a.Na(q2, f2, true), a.a.Na(q2, z, false)) : a.a.Na(q2, f2, e2);
                    p && a.Za(k2) && k2(q2);
                  } else h && (f2 === n ? f2 = e2 : e2 || (f2 = n)), a.m.eb(
                    k2,
                    d,
                    "checked",
                    f2,
                    true
                  );
                }
              }
              function f() {
                var d2 = a.a.f(c()), e2 = g();
                l ? (b.checked = 0 <= a.a.A(d2, e2), t = e2) : b.checked = h && e2 === n ? !!d2 : g() === d2;
              }
              var g = a.xb(function() {
                if (d.has("checkedValue")) return a.a.f(d.get("checkedValue"));
                if (q) return d.has("value") ? a.a.f(d.get("value")) : b.value;
              }), h = "checkbox" == b.type, m = "radio" == b.type;
              if (h || m) {
                var k = c(), l = h && a.a.f(k) instanceof Array, p = !(l && k.push && k.splice), q = m || l, t = l ? g() : n;
                m && !b.name && a.c.uniqueName.init(b, function() {
                  return true;
                });
                a.o(e, null, { l: b });
                a.a.B(b, "click", e);
                a.o(f, null, { l: b });
                k = n;
              }
            } };
            a.m.wa.checked = true;
            a.c.checkedValue = { update: function(b, c) {
              b.value = a.a.f(c());
            } };
          })();
          a.c["class"] = { update: function(b, c) {
            var d = a.a.Db(a.a.f(c()));
            a.a.Eb(b, b.__ko__cssValue, false);
            b.__ko__cssValue = d;
            a.a.Eb(b, d, true);
          } };
          a.c.css = { update: function(b, c) {
            var d = a.a.f(c());
            null !== d && "object" == typeof d ? a.a.P(d, function(c2, d2) {
              d2 = a.a.f(d2);
              a.a.Eb(b, c2, d2);
            }) : a.c["class"].update(b, c);
          } };
          a.c.enable = { update: function(b, c) {
            var d = a.a.f(c());
            d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = true);
          } };
          a.c.disable = { update: function(b, c) {
            a.c.enable.update(b, function() {
              return !a.a.f(c());
            });
          } };
          a.c.event = { init: function(b, c, d, e, f) {
            var g = c() || {};
            a.a.P(g, function(g2) {
              "string" == typeof g2 && a.a.B(b, g2, function(b2) {
                var k, l = c()[g2];
                if (l) {
                  try {
                    var p = a.a.la(arguments);
                    e = f.$data;
                    p.unshift(e);
                    k = l.apply(e, p);
                  } finally {
                    true !== k && (b2.preventDefault ? b2.preventDefault() : b2.returnValue = false);
                  }
                  false === d.get(g2 + "Bubble") && (b2.cancelBubble = true, b2.stopPropagation && b2.stopPropagation());
                }
              });
            });
          } };
          a.c.foreach = { Rc: function(b) {
            return function() {
              var c = b(), d = a.a.bc(c);
              if (!d || "number" == typeof d.length) return { foreach: c, templateEngine: a.ba.Ma };
              a.a.f(c);
              return { foreach: d.data, as: d.as, noChildContext: d.noChildContext, includeDestroyed: d.includeDestroyed, afterAdd: d.afterAdd, beforeRemove: d.beforeRemove, afterRender: d.afterRender, beforeMove: d.beforeMove, afterMove: d.afterMove, templateEngine: a.ba.Ma };
            };
          }, init: function(b, c) {
            return a.c.template.init(b, a.c.foreach.Rc(c));
          }, update: function(b, c, d, e, f) {
            return a.c.template.update(b, a.c.foreach.Rc(c), d, e, f);
          } };
          a.m.Ra.foreach = false;
          a.h.ea.foreach = true;
          a.c.hasfocus = { init: function(b, c, d) {
            function e(e2) {
              b.__ko_hasfocusUpdating = true;
              var f2 = b.ownerDocument;
              if ("activeElement" in f2) {
                var g2;
                try {
                  g2 = f2.activeElement;
                } catch (l) {
                  g2 = f2.body;
                }
                e2 = g2 === b;
              }
              f2 = c();
              a.m.eb(f2, d, "hasfocus", e2, true);
              b.__ko_hasfocusLastValue = e2;
              b.__ko_hasfocusUpdating = false;
            }
            var f = e.bind(null, true), g = e.bind(null, false);
            a.a.B(b, "focus", f);
            a.a.B(b, "focusin", f);
            a.a.B(b, "blur", g);
            a.a.B(b, "focusout", g);
            b.__ko_hasfocusLastValue = false;
          }, update: function(b, c) {
            var d = !!a.a.f(c());
            b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), !d && b.__ko_hasfocusLastValue && b.ownerDocument.body.focus(), a.u.G(a.a.Fb, null, [b, d ? "focusin" : "focusout"]));
          } };
          a.m.wa.hasfocus = true;
          a.c.hasFocus = a.c.hasfocus;
          a.m.wa.hasFocus = "hasfocus";
          a.c.html = { init: function() {
            return { controlsDescendantBindings: true };
          }, update: function(b, c) {
            a.a.fc(b, c());
          } };
          (function() {
            function b(b2, d, e) {
              a.c[b2] = { init: function(b3, c, h, m, k) {
                var l, p, q = {}, t, x, n2;
                if (d) {
                  m = h.get("as");
                  var u = h.get("noChildContext");
                  n2 = !(m && u);
                  q = { as: m, noChildContext: u, exportDependencies: n2 };
                }
                x = (t = "render" == h.get("completeOn")) || h.has(a.i.pa);
                a.o(function() {
                  var h2 = a.a.f(c()), m2 = !e !== !h2, u2 = !p, r2;
                  if (n2 || m2 !== l) {
                    x && (k = a.i.Cb(b3, k));
                    if (m2) {
                      if (!d || n2) q.dataDependency = a.S.o();
                      r2 = d ? k.createChildContext("function" == typeof h2 ? h2 : c, q) : a.S.qa() ? k.extend(null, q) : k;
                    }
                    u2 && a.S.qa() && (p = a.a.Ca(a.h.childNodes(b3), true));
                    m2 ? (u2 || a.h.va(b3, a.a.Ca(p)), a.Oa(r2, b3)) : (a.h.Ea(b3), t || a.i.ma(b3, a.i.H));
                    l = m2;
                  }
                }, null, { l: b3 });
                return { controlsDescendantBindings: true };
              } };
              a.m.Ra[b2] = false;
              a.h.ea[b2] = true;
            }
            b("if");
            b("ifnot", false, true);
            b("with", true);
          })();
          a.c.let = { init: function(b, c, d, e, f) {
            c = f.extend(c);
            a.Oa(c, b);
            return { controlsDescendantBindings: true };
          } };
          a.h.ea.let = true;
          var Q = {};
          a.c.options = { init: function(b) {
            if ("select" !== a.a.R(b)) throw Error("options binding applies only to SELECT elements");
            for (; 0 < b.length; ) b.remove(0);
            return { controlsDescendantBindings: true };
          }, update: function(b, c, d) {
            function e() {
              return a.a.jb(b.options, function(a2) {
                return a2.selected;
              });
            }
            function f(a2, b2, c2) {
              var d2 = typeof b2;
              return "function" == d2 ? b2(a2) : "string" == d2 ? a2[b2] : c2;
            }
            function g(c2, d2) {
              if (x && l) a.i.ma(b, a.i.H);
              else if (t.length) {
                var e2 = 0 <= a.a.A(t, a.w.M(d2[0]));
                a.a.Zc(d2[0], e2);
                x && !e2 && a.u.G(a.a.Fb, null, [b, "change"]);
              }
            }
            var h = b.multiple, m = 0 != b.length && h ? b.scrollTop : null, k = a.a.f(c()), l = d.get("valueAllowUnset") && d.has("value"), p = d.get("optionsIncludeDestroyed");
            c = {};
            var q, t = [];
            l || (h ? t = a.a.Mb(e(), a.w.M) : 0 <= b.selectedIndex && t.push(a.w.M(b.options[b.selectedIndex])));
            k && ("undefined" == typeof k.length && (k = [k]), q = a.a.jb(k, function(b2) {
              return p || b2 === n || null === b2 || !a.a.f(b2._destroy);
            }), d.has("optionsCaption") && (k = a.a.f(d.get("optionsCaption")), null !== k && k !== n && q.unshift(Q)));
            var x = false;
            c.beforeRemove = function(a2) {
              b.removeChild(a2);
            };
            k = g;
            d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (k = function(b2, c2) {
              g(0, c2);
              a.u.G(d.get("optionsAfterRender"), null, [c2[0], b2 !== Q ? b2 : n]);
            });
            a.a.ec(b, q, function(c2, e2, g2) {
              g2.length && (t = !l && g2[0].selected ? [a.w.M(g2[0])] : [], x = true);
              e2 = b.ownerDocument.createElement("option");
              c2 === Q ? (a.a.Bb(e2, d.get("optionsCaption")), a.w.cb(e2, n)) : (g2 = f(c2, d.get("optionsValue"), c2), a.w.cb(e2, a.a.f(g2)), c2 = f(c2, d.get("optionsText"), g2), a.a.Bb(e2, c2));
              return [e2];
            }, c, k);
            if (!l) {
              var B;
              h ? B = t.length && e().length < t.length : B = t.length && 0 <= b.selectedIndex ? a.w.M(b.options[b.selectedIndex]) !== t[0] : t.length || 0 <= b.selectedIndex;
              B && a.u.G(a.a.Fb, null, [b, "change"]);
            }
            (l || a.S.Ya()) && a.i.ma(b, a.i.H);
            a.a.wd(b);
            m && 20 < Math.abs(m - b.scrollTop) && (b.scrollTop = m);
          } };
          a.c.options.$b = a.a.g.Z();
          a.c.selectedOptions = { init: function(b, c, d) {
            function e() {
              var e2 = c(), f2 = [];
              a.a.D(b.getElementsByTagName("option"), function(b2) {
                b2.selected && f2.push(a.w.M(b2));
              });
              a.m.eb(
                e2,
                d,
                "selectedOptions",
                f2
              );
            }
            function f() {
              var d2 = a.a.f(c()), e2 = b.scrollTop;
              d2 && "number" == typeof d2.length && a.a.D(b.getElementsByTagName("option"), function(b2) {
                var c2 = 0 <= a.a.A(d2, a.w.M(b2));
                b2.selected != c2 && a.a.Zc(b2, c2);
              });
              b.scrollTop = e2;
            }
            if ("select" != a.a.R(b)) throw Error("selectedOptions binding applies only to SELECT elements");
            var g;
            a.i.subscribe(b, a.i.H, function() {
              g ? e() : (a.a.B(b, "change", e), g = a.o(f, null, { l: b }));
            }, null, { notifyImmediately: true });
          }, update: function() {
          } };
          a.m.wa.selectedOptions = true;
          a.c.style = { update: function(b, c) {
            var d = a.a.f(c() || {});
            a.a.P(d, function(c2, d2) {
              d2 = a.a.f(d2);
              if (null === d2 || d2 === n || false === d2) d2 = "";
              if (v) v(b).css(c2, d2);
              else if (/^--/.test(c2)) b.style.setProperty(c2, d2);
              else {
                c2 = c2.replace(/-(\w)/g, function(a2, b2) {
                  return b2.toUpperCase();
                });
                var g = b.style[c2];
                b.style[c2] = d2;
                d2 === g || b.style[c2] != g || isNaN(d2) || (b.style[c2] = d2 + "px");
              }
            });
          } };
          a.c.submit = { init: function(b, c, d, e, f) {
            if ("function" != typeof c()) throw Error("The value for a submit binding must be a function");
            a.a.B(b, "submit", function(a2) {
              var d2, e2 = c();
              try {
                d2 = e2.call(f.$data, b);
              } finally {
                true !== d2 && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false);
              }
            });
          } };
          a.c.text = { init: function() {
            return { controlsDescendantBindings: true };
          }, update: function(b, c) {
            a.a.Bb(b, c());
          } };
          a.h.ea.text = true;
          (function() {
            if (A && A.navigator) {
              var b = function(a2) {
                if (a2) return parseFloat(a2[1]);
              }, c = A.navigator.userAgent, d, e, f, g, h;
              (d = A.opera && A.opera.version && parseInt(A.opera.version())) || (h = b(c.match(/Edge\/([^ ]+)$/))) || b(c.match(/Chrome\/([^ ]+)/)) || (e = b(c.match(/Version\/([^ ]+) Safari/))) || (f = b(c.match(/Firefox\/([^ ]+)/))) || (g = a.a.W || b(c.match(/MSIE ([^ ]+)/))) || (g = b(c.match(/rv:([^ )]+)/)));
            }
            if (8 <= g && 10 > g) var m = a.a.g.Z(), k = a.a.g.Z(), l = function(b2) {
              var c2 = this.activeElement;
              (c2 = c2 && a.a.g.get(c2, k)) && c2(b2);
            }, p = function(b2, c2) {
              var d2 = b2.ownerDocument;
              a.a.g.get(d2, m) || (a.a.g.set(d2, m, true), a.a.B(d2, "selectionchange", l));
              a.a.g.set(b2, k, c2);
            };
            a.c.textInput = { init: function(b2, c2, k2) {
              function l2(c3, d2) {
                a.a.B(b2, c3, d2);
              }
              function m2() {
                var d2 = a.a.f(c2());
                if (null === d2 || d2 === n) d2 = "";
                L !== n && d2 === L ? a.a.setTimeout(m2, 4) : b2.value !== d2 && (y = true, b2.value = d2, y = false, v2 = b2.value);
              }
              function r2() {
                w2 || (L = b2.value, w2 = a.a.setTimeout(
                  z,
                  4
                ));
              }
              function z() {
                clearTimeout(w2);
                L = w2 = n;
                var d2 = b2.value;
                v2 !== d2 && (v2 = d2, a.m.eb(c2(), k2, "textInput", d2));
              }
              var v2 = b2.value, w2, L, A2 = 9 == a.a.W ? r2 : z, y = false;
              g && l2("keypress", z);
              11 > g && l2("propertychange", function(a2) {
                y || "value" !== a2.propertyName || A2(a2);
              });
              8 == g && (l2("keyup", z), l2("keydown", z));
              p && (p(b2, A2), l2("dragend", r2));
              (!g || 9 <= g) && l2("input", A2);
              5 > e && "textarea" === a.a.R(b2) ? (l2("keydown", r2), l2("paste", r2), l2("cut", r2)) : 11 > d ? l2("keydown", r2) : 4 > f ? (l2("DOMAutoComplete", z), l2("dragdrop", z), l2("drop", z)) : h && "number" === b2.type && l2("keydown", r2);
              l2(
                "change",
                z
              );
              l2("blur", z);
              a.o(m2, null, { l: b2 });
            } };
            a.m.wa.textInput = true;
            a.c.textinput = { preprocess: function(a2, b2, c2) {
              c2("textInput", a2);
            } };
          })();
          a.c.uniqueName = { init: function(b, c) {
            if (c()) {
              var d = "ko_unique_" + ++a.c.uniqueName.rd;
              a.a.Yc(b, d);
            }
          } };
          a.c.uniqueName.rd = 0;
          a.c.using = { init: function(b, c, d, e, f) {
            var g;
            d.has("as") && (g = { as: d.get("as"), noChildContext: d.get("noChildContext") });
            c = f.createChildContext(c, g);
            a.Oa(c, b);
            return { controlsDescendantBindings: true };
          } };
          a.h.ea.using = true;
          a.c.value = { init: function(b, c, d) {
            var e = a.a.R(b), f = "input" == e;
            if (!f || "checkbox" != b.type && "radio" != b.type) {
              var g = [], h = d.get("valueUpdate"), m = false, k = null;
              h && ("string" == typeof h ? g = [h] : g = a.a.wc(h), a.a.Pa(g, "change"));
              var l = function() {
                k = null;
                m = false;
                var e2 = c(), f2 = a.w.M(b);
                a.m.eb(e2, d, "value", f2);
              };
              !a.a.W || !f || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.A(g, "propertychange") || (a.a.B(b, "propertychange", function() {
                m = true;
              }), a.a.B(b, "focus", function() {
                m = false;
              }), a.a.B(b, "blur", function() {
                m && l();
              }));
              a.a.D(g, function(c2) {
                var d2 = l;
                a.a.Ud(c2, "after") && (d2 = function() {
                  k = a.w.M(b);
                  a.a.setTimeout(l, 0);
                }, c2 = c2.substring(5));
                a.a.B(b, c2, d2);
              });
              var p;
              p = f && "file" == b.type ? function() {
                var d2 = a.a.f(c());
                null === d2 || d2 === n || "" === d2 ? b.value = "" : a.u.G(l);
              } : function() {
                var f2 = a.a.f(c()), g2 = a.w.M(b);
                if (null !== k && f2 === k) a.a.setTimeout(p, 0);
                else if (f2 !== g2 || g2 === n) "select" === e ? (g2 = d.get("valueAllowUnset"), a.w.cb(b, f2, g2), g2 || f2 === a.w.M(b) || a.u.G(l)) : a.w.cb(b, f2);
              };
              if ("select" === e) {
                var q;
                a.i.subscribe(
                  b,
                  a.i.H,
                  function() {
                    q ? d.get("valueAllowUnset") ? p() : l() : (a.a.B(b, "change", l), q = a.o(p, null, { l: b }));
                  },
                  null,
                  { notifyImmediately: true }
                );
              } else a.a.B(b, "change", l), a.o(p, null, { l: b });
            } else a.ib(b, { checkedValue: c });
          }, update: function() {
          } };
          a.m.wa.value = true;
          a.c.visible = { update: function(b, c) {
            var d = a.a.f(c()), e = "none" != b.style.display;
            d && !e ? b.style.display = "" : !d && e && (b.style.display = "none");
          } };
          a.c.hidden = { update: function(b, c) {
            a.c.visible.update(b, function() {
              return !a.a.f(c());
            });
          } };
          (function(b) {
            a.c[b] = { init: function(c, d, e, f, g) {
              return a.c.event.init.call(this, c, function() {
                var a2 = {};
                a2[b] = d();
                return a2;
              }, e, f, g);
            } };
          })("click");
          a.ca = function() {
          };
          a.ca.prototype.renderTemplateSource = function() {
            throw Error("Override renderTemplateSource");
          };
          a.ca.prototype.createJavaScriptEvaluatorBlock = function() {
            throw Error("Override createJavaScriptEvaluatorBlock");
          };
          a.ca.prototype.makeTemplateSource = function(b, c) {
            if ("string" == typeof b) {
              c = c || w;
              var d = c.getElementById(b);
              if (!d) throw Error("Cannot find template with ID " + b);
              return new a.C.F(d);
            }
            if (1 == b.nodeType || 8 == b.nodeType) return new a.C.ia(b);
            throw Error("Unknown template type: " + b);
          };
          a.ca.prototype.renderTemplate = function(a2, c, d, e) {
            a2 = this.makeTemplateSource(a2, e);
            return this.renderTemplateSource(a2, c, d, e);
          };
          a.ca.prototype.isTemplateRewritten = function(a2, c) {
            return false === this.allowTemplateRewriting ? true : this.makeTemplateSource(a2, c).data("isRewritten");
          };
          a.ca.prototype.rewriteTemplate = function(a2, c, d) {
            a2 = this.makeTemplateSource(a2, d);
            c = c(a2.text());
            a2.text(c);
            a2.data("isRewritten", true);
          };
          a.b("templateEngine", a.ca);
          a.kc = /* @__PURE__ */ function() {
            function b(b2, c2, d2, h) {
              b2 = a.m.ac(b2);
              for (var m = a.m.Ra, k = 0; k < b2.length; k++) {
                var l = b2[k].key;
                if (Object.prototype.hasOwnProperty.call(
                  m,
                  l
                )) {
                  var p = m[l];
                  if ("function" === typeof p) {
                    if (l = p(b2[k].value)) throw Error(l);
                  } else if (!p) throw Error("This template engine does not support the '" + l + "' binding within its templates");
                }
              }
              d2 = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.m.vb(b2, { valueAccessors: true }) + " } })()},'" + d2.toLowerCase() + "')";
              return h.createJavaScriptEvaluatorBlock(d2) + c2;
            }
            var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
            return { xd: function(b2, c2, d2) {
              c2.isTemplateRewritten(b2, d2) || c2.rewriteTemplate(b2, function(b3) {
                return a.kc.Ld(b3, c2);
              }, d2);
            }, Ld: function(a2, f) {
              return a2.replace(c, function(a3, c2, d2, e, l) {
                return b(l, c2, d2, f);
              }).replace(d, function(a3, c2) {
                return b(c2, "<!-- ko -->", "#comment", f);
              });
            }, md: function(b2, c2) {
              return a.aa.Xb(function(d2, h) {
                var m = d2.nextSibling;
                m && m.nodeName.toLowerCase() === c2 && a.ib(m, b2, h);
              });
            } };
          }();
          a.b("__tr_ambtns", a.kc.md);
          (function() {
            a.C = {};
            a.C.F = function(b2) {
              if (this.F = b2) {
                var c2 = a.a.R(b2);
                this.ab = "script" === c2 ? 1 : "textarea" === c2 ? 2 : "template" == c2 && b2.content && 11 === b2.content.nodeType ? 3 : 4;
              }
            };
            a.C.F.prototype.text = function() {
              var b2 = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
              if (0 == arguments.length) return this.F[b2];
              var c2 = arguments[0];
              "innerHTML" === b2 ? a.a.fc(this.F, c2) : this.F[b2] = c2;
            };
            var b = a.a.g.Z() + "_";
            a.C.F.prototype.data = function(c2) {
              if (1 === arguments.length) return a.a.g.get(this.F, b + c2);
              a.a.g.set(this.F, b + c2, arguments[1]);
            };
            var c = a.a.g.Z();
            a.C.F.prototype.nodes = function() {
              var b2 = this.F;
              if (0 == arguments.length) {
                var e = a.a.g.get(b2, c) || {}, f = e.lb || (3 === this.ab ? b2.content : 4 === this.ab ? b2 : n);
                if (!f || e.jd) {
                  var g = this.text();
                  g && g !== e.bb && (f = a.a.Md(g, b2.ownerDocument), a.a.g.set(b2, c, { lb: f, bb: g, jd: true }));
                }
                return f;
              }
              e = arguments[0];
              this.ab !== n && this.text("");
              a.a.g.set(b2, c, { lb: e });
            };
            a.C.ia = function(a2) {
              this.F = a2;
            };
            a.C.ia.prototype = new a.C.F();
            a.C.ia.prototype.constructor = a.C.ia;
            a.C.ia.prototype.text = function() {
              if (0 == arguments.length) {
                var b2 = a.a.g.get(this.F, c) || {};
                b2.bb === n && b2.lb && (b2.bb = b2.lb.innerHTML);
                return b2.bb;
              }
              a.a.g.set(
                this.F,
                c,
                { bb: arguments[0] }
              );
            };
            a.b("templateSources", a.C);
            a.b("templateSources.domElement", a.C.F);
            a.b("templateSources.anonymousTemplate", a.C.ia);
          })();
          (function() {
            function b(b2, c2, d2) {
              var e2;
              for (c2 = a.h.nextSibling(c2); b2 && (e2 = b2) !== c2; ) b2 = a.h.nextSibling(e2), d2(e2, b2);
            }
            function c(c2, d2) {
              if (c2.length) {
                var e2 = c2[0], f2 = c2[c2.length - 1], g2 = e2.parentNode, h2 = a.ga.instance, m2 = h2.preprocessNode;
                if (m2) {
                  b(e2, f2, function(a2, b2) {
                    var c3 = a2.previousSibling, d3 = m2.call(h2, a2);
                    d3 && (a2 === e2 && (e2 = d3[0] || b2), a2 === f2 && (f2 = d3[d3.length - 1] || c3));
                  });
                  c2.length = 0;
                  if (!e2) return;
                  e2 === f2 ? c2.push(e2) : (c2.push(e2, f2), a.a.Ua(c2, g2));
                }
                b(e2, f2, function(b2) {
                  1 !== b2.nodeType && 8 !== b2.nodeType || a.vc(d2, b2);
                });
                b(e2, f2, function(b2) {
                  1 !== b2.nodeType && 8 !== b2.nodeType || a.aa.cd(b2, [d2]);
                });
                a.a.Ua(c2, g2);
              }
            }
            function d(a2) {
              return a2.nodeType ? a2 : 0 < a2.length ? a2[0] : null;
            }
            function e(b2, e2, f2, h2, m2) {
              m2 = m2 || {};
              var n2 = (b2 && d(b2) || f2 || {}).ownerDocument, B = m2.templateEngine || g;
              a.kc.xd(f2, B, n2);
              f2 = B.renderTemplate(f2, h2, m2, n2);
              if ("number" != typeof f2.length || 0 < f2.length && "number" != typeof f2[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
              n2 = false;
              switch (e2) {
                case "replaceChildren":
                  a.h.va(
                    b2,
                    f2
                  );
                  n2 = true;
                  break;
                case "replaceNode":
                  a.a.Xc(b2, f2);
                  n2 = true;
                  break;
                case "ignoreTargetNode":
                  break;
                default:
                  throw Error("Unknown renderMode: " + e2);
              }
              n2 && (c(f2, h2), m2.afterRender && a.u.G(m2.afterRender, null, [f2, h2[m2.as || "$data"]]), "replaceChildren" == e2 && a.i.ma(b2, a.i.H));
              return f2;
            }
            function f(b2, c2, d2) {
              return a.O(b2) ? b2() : "function" === typeof b2 ? b2(c2, d2) : b2;
            }
            var g;
            a.gc = function(b2) {
              if (b2 != n && !(b2 instanceof a.ca)) throw Error("templateEngine must inherit from ko.templateEngine");
              g = b2;
            };
            a.dc = function(b2, c2, h2, m2, t) {
              h2 = h2 || {};
              if ((h2.templateEngine || g) == n) throw Error("Set a template engine before calling renderTemplate");
              t = t || "replaceChildren";
              if (m2) {
                var x = d(m2);
                return a.$(function() {
                  var g2 = c2 && c2 instanceof a.fa ? c2 : new a.fa(c2, null, null, null, { exportDependencies: true }), n2 = f(b2, g2.$data, g2), g2 = e(m2, t, n2, g2, h2);
                  "replaceNode" == t && (m2 = g2, x = d(m2));
                }, null, { Sa: function() {
                  return !x || !a.a.Sb(x);
                }, l: x && "replaceNode" == t ? x.parentNode : x });
              }
              return a.aa.Xb(function(d2) {
                a.dc(b2, c2, h2, d2, "replaceNode");
              });
            };
            a.Qd = function(b2, d2, g2, h2, m2) {
              function x(b3, c2) {
                a.u.G(a.a.ec, null, [h2, b3, u, g2, r2, c2]);
                a.i.ma(h2, a.i.H);
              }
              function r2(a2, b3) {
                c(b3, v2);
                g2.afterRender && g2.afterRender(b3, a2);
                v2 = null;
              }
              function u(a2, c2) {
                v2 = m2.createChildContext(a2, { as: z, noChildContext: g2.noChildContext, extend: function(a3) {
                  a3.$index = c2;
                  z && (a3[z + "Index"] = c2);
                } });
                var d3 = f(b2, a2, v2);
                return e(h2, "ignoreTargetNode", d3, v2, g2);
              }
              var v2, z = g2.as, w2 = false === g2.includeDestroyed || a.options.foreachHidesDestroyed && !g2.includeDestroyed;
              if (w2 || g2.beforeRemove || !a.Pc(d2)) return a.$(function() {
                var b3 = a.a.f(d2) || [];
                "undefined" == typeof b3.length && (b3 = [b3]);
                w2 && (b3 = a.a.jb(b3, function(b4) {
                  return b4 === n || null === b4 || !a.a.f(b4._destroy);
                }));
                x(b3);
              }, null, { l: h2 });
              x(d2.v());
              var A2 = d2.subscribe(function(a2) {
                x(d2(), a2);
              }, null, "arrayChange");
              A2.l(h2);
              return A2;
            };
            var h = a.a.g.Z(), m = a.a.g.Z();
            a.c.template = { init: function(b2, c2) {
              var d2 = a.a.f(c2());
              if ("string" == typeof d2 || "name" in d2) a.h.Ea(b2);
              else if ("nodes" in d2) {
                d2 = d2.nodes || [];
                if (a.O(d2)) throw Error('The "nodes" option must be a plain, non-observable array.');
                var e2 = d2[0] && d2[0].parentNode;
                e2 && a.a.g.get(e2, m) || (e2 = a.a.Yb(d2), a.a.g.set(e2, m, true));
                new a.C.ia(b2).nodes(e2);
              } else if (d2 = a.h.childNodes(b2), 0 < d2.length) e2 = a.a.Yb(d2), new a.C.ia(b2).nodes(e2);
              else throw Error("Anonymous template defined, but no template content was provided");
              return { controlsDescendantBindings: true };
            }, update: function(b2, c2, d2, e2, f2) {
              var g2 = c2();
              c2 = a.a.f(g2);
              d2 = true;
              e2 = null;
              "string" == typeof c2 ? c2 = {} : (g2 = "name" in c2 ? c2.name : b2, "if" in c2 && (d2 = a.a.f(c2["if"])), d2 && "ifnot" in c2 && (d2 = !a.a.f(c2.ifnot)), d2 && !g2 && (d2 = false));
              "foreach" in c2 ? e2 = a.Qd(g2, d2 && c2.foreach || [], c2, b2, f2) : d2 ? (d2 = f2, "data" in c2 && (d2 = f2.createChildContext(c2.data, { as: c2.as, noChildContext: c2.noChildContext, exportDependencies: true })), e2 = a.dc(g2, d2, c2, b2)) : a.h.Ea(b2);
              f2 = e2;
              (c2 = a.a.g.get(b2, h)) && "function" == typeof c2.s && c2.s();
              a.a.g.set(b2, h, !f2 || f2.ja && !f2.ja() ? n : f2);
            } };
            a.m.Ra.template = function(b2) {
              b2 = a.m.ac(b2);
              return 1 == b2.length && b2[0].unknown || a.m.Id(b2, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
            };
            a.h.ea.template = true;
          })();
          a.b("setTemplateEngine", a.gc);
          a.b("renderTemplate", a.dc);
          a.a.Kc = function(a2, c, d) {
            if (a2.length && c.length) {
              var e, f, g, h, m;
              for (e = f = 0; (!d || e < d) && (h = a2[f]); ++f) {
                for (g = 0; m = c[g]; ++g) if (h.value === m.value) {
                  h.moved = m.index;
                  m.moved = h.index;
                  c.splice(g, 1);
                  e = g = 0;
                  break;
                }
                e += g;
              }
            }
          };
          a.a.Pb = /* @__PURE__ */ function() {
            function b(b2, d, e, f, g) {
              var h = Math.min, m = Math.max, k = [], l, p = b2.length, q, n2 = d.length, r2 = n2 - p || 1, v2 = p + n2 + 1, u, w2, z;
              for (l = 0; l <= p; l++) for (w2 = u, k.push(u = []), z = h(n2, l + r2), q = m(0, l - 1); q <= z; q++) u[q] = q ? l ? b2[l - 1] === d[q - 1] ? w2[q - 1] : h(w2[q] || v2, u[q - 1] || v2) + 1 : q + 1 : l + 1;
              h = [];
              m = [];
              r2 = [];
              l = p;
              for (q = n2; l || q; ) n2 = k[l][q] - 1, q && n2 === k[l][q - 1] ? m.push(h[h.length] = { status: e, value: d[--q], index: q }) : l && n2 === k[l - 1][q] ? r2.push(h[h.length] = { status: f, value: b2[--l], index: l }) : (--q, --l, g.sparse || h.push({ status: "retained", value: d[q] }));
              a.a.Kc(r2, m, !g.dontLimitMoves && 10 * p);
              return h.reverse();
            }
            return function(a2, d, e) {
              e = "boolean" === typeof e ? { dontLimitMoves: e } : e || {};
              a2 = a2 || [];
              d = d || [];
              return a2.length < d.length ? b(a2, d, "added", "deleted", e) : b(d, a2, "deleted", "added", e);
            };
          }();
          a.b("utils.compareArrays", a.a.Pb);
          (function() {
            function b(b2, c2, d2, h, m) {
              var k = [], l = a.$(function() {
                var l2 = c2(d2, m, a.a.Ua(k, b2)) || [];
                0 < k.length && (a.a.Xc(k, l2), h && a.u.G(h, null, [d2, l2, m]));
                k.length = 0;
                a.a.Nb(k, l2);
              }, null, { l: b2, Sa: function() {
                return !a.a.kd(k);
              } });
              return { Y: k, $: l.ja() ? l : n };
            }
            var c = a.a.g.Z(), d = a.a.g.Z();
            a.a.ec = function(e, f, g, h, m, k) {
              function l(b2) {
                y = { Aa: b2, pb: a.ta(w2++) };
                v2.push(y);
                r2 || F2.push(y);
              }
              function p(b2) {
                y = t[b2];
                w2 !== y.pb.v() && D2.push(y);
                y.pb(w2++);
                a.a.Ua(y.Y, e);
                v2.push(y);
              }
              function q(b2, c2) {
                if (b2) for (var d2 = 0, e2 = c2.length; d2 < e2; d2++) a.a.D(c2[d2].Y, function(a2) {
                  b2(a2, d2, c2[d2].Aa);
                });
              }
              f = f || [];
              "undefined" == typeof f.length && (f = [f]);
              h = h || {};
              var t = a.a.g.get(e, c), r2 = !t, v2 = [], u = 0, w2 = 0, z = [], A2 = [], C2 = [], D2 = [], F2 = [], y, I2 = 0;
              if (r2) a.a.D(f, l);
              else {
                if (!k || t && t._countWaitingForRemove) {
                  var E = a.a.Mb(t, function(a2) {
                    return a2.Aa;
                  });
                  k = a.a.Pb(E, f, { dontLimitMoves: h.dontLimitMoves, sparse: true });
                }
                for (var E = 0, G2, H2, K2; G2 = k[E]; E++) switch (H2 = G2.moved, K2 = G2.index, G2.status) {
                  case "deleted":
                    for (; u < K2; ) p(u++);
                    H2 === n && (y = t[u], y.$ && (y.$.s(), y.$ = n), a.a.Ua(y.Y, e).length && (h.beforeRemove && (v2.push(y), I2++, y.Aa === d ? y = null : C2.push(y)), y && z.push.apply(z, y.Y)));
                    u++;
                    break;
                  case "added":
                    for (; w2 < K2; ) p(u++);
                    H2 !== n ? (A2.push(v2.length), p(H2)) : l(G2.value);
                }
                for (; w2 < f.length; ) p(u++);
                v2._countWaitingForRemove = I2;
              }
              a.a.g.set(e, c, v2);
              q(h.beforeMove, D2);
              a.a.D(
                z,
                h.beforeRemove ? a.oa : a.removeNode
              );
              var M, O, P;
              try {
                P = e.ownerDocument.activeElement;
              } catch (N2) {
              }
              if (A2.length) for (; (E = A2.shift()) != n; ) {
                y = v2[E];
                for (M = n; E; ) if ((O = v2[--E].Y) && O.length) {
                  M = O[O.length - 1];
                  break;
                }
                for (f = 0; u = y.Y[f]; M = u, f++) a.h.Wb(e, u, M);
              }
              for (E = 0; y = v2[E]; E++) {
                y.Y || a.a.extend(y, b(e, g, y.Aa, m, y.pb));
                for (f = 0; u = y.Y[f]; M = u, f++) a.h.Wb(e, u, M);
                !y.Ed && m && (m(y.Aa, y.Y, y.pb), y.Ed = true, M = y.Y[y.Y.length - 1]);
              }
              P && e.ownerDocument.activeElement != P && P.focus();
              q(h.beforeRemove, C2);
              for (E = 0; E < C2.length; ++E) C2[E].Aa = d;
              q(h.afterMove, D2);
              q(h.afterAdd, F2);
            };
          })();
          a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.ec);
          a.ba = function() {
            this.allowTemplateRewriting = false;
          };
          a.ba.prototype = new a.ca();
          a.ba.prototype.constructor = a.ba;
          a.ba.prototype.renderTemplateSource = function(b, c, d, e) {
            if (c = (9 > a.a.W ? 0 : b.nodes) ? b.nodes() : null) return a.a.la(c.cloneNode(true).childNodes);
            b = b.text();
            return a.a.ua(b, e);
          };
          a.ba.Ma = new a.ba();
          a.gc(a.ba.Ma);
          a.b("nativeTemplateEngine", a.ba);
          (function() {
            a.$a = function() {
              var a2 = this.Hd = function() {
                if (!v || !v.tmpl) return 0;
                try {
                  if (0 <= v.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
                } catch (a3) {
                }
                return 1;
              }();
              this.renderTemplateSource = function(b2, e, f, g) {
                g = g || w;
                f = f || {};
                if (2 > a2) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                var h = b2.data("precompiled");
                h || (h = b2.text() || "", h = v.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b2.data("precompiled", h));
                b2 = [e.$data];
                e = v.extend({ koBindingContext: e }, f.templateOptions);
                e = v.tmpl(h, b2, e);
                e.appendTo(g.createElement("div"));
                v.fragments = {};
                return e;
              };
              this.createJavaScriptEvaluatorBlock = function(a3) {
                return "{{ko_code ((function() { return " + a3 + " })()) }}";
              };
              this.addTemplate = function(a3, b2) {
                w.write("<script type='text/html' id='" + a3 + "'>" + b2 + "<\/script>");
              };
              0 < a2 && (v.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, v.tmpl.tag.ko_with = { open: "with($1) {", close: "} " });
            };
            a.$a.prototype = new a.ca();
            a.$a.prototype.constructor = a.$a;
            var b = new a.$a();
            0 < b.Hd && a.gc(b);
            a.b("jqueryTmplTemplateEngine", a.$a);
          })();
        });
      })();
    })();
  }
});

// src/infrastructure/store.js
var ko2, configurationsStore, auditOrganizationStore, allActionOfficesFilter, allRequestingOfficesFilter;
var init_store = __esm({
  "src/infrastructure/store.js"() {
    init_entities2();
    ko2 = __toESM(require_knockout_latest());
    configurationsStore = {};
    auditOrganizationStore = ko2.observableArray();
    allActionOfficesFilter = (org) => ORGROLES.ACTIONOFFICE == org.Role;
    allRequestingOfficesFilter = (org) => ORGROLES.REQUESTINGOFFICE == org.Role;
  }
});

// src/sal/primitives/validation_error.js
var ValidationError2;
var init_validation_error = __esm({
  "src/sal/primitives/validation_error.js"() {
    ValidationError2 = class {
      constructor(source, type, description) {
        this.source = source;
        this.type = type;
        this.description = description;
      }
    };
  }
});

// src/sal/primitives/entity.js
var ko3, Entity;
var init_entity = __esm({
  "src/sal/primitives/entity.js"() {
    ko3 = __toESM(require_knockout_latest());
    Entity = class {
      constructor(params) {
        if (params?.ID) this.ID = params.ID;
        if (params?.Title) this.Title = params.Title;
      }
      ObservableID = ko3.observable();
      ObservableTitle = ko3.observable();
      get id() {
        return this.ObservableID();
      }
      set id(val) {
        this.ObservableID(val);
      }
      get Title() {
        return this.ObservableTitle();
      }
      set Title(val) {
        this.ObservableTitle(val);
      }
    };
  }
});

// src/sal/primitives/index.js
var init_primitives = __esm({
  "src/sal/primitives/index.js"() {
    init_validation_error();
    init_entity();
    init_constrained_entity();
  }
});

// src/sal/fields/BaseField.js
function isRequiredValidationRequirement(field) {
  return {
    requirement: ko4.pureComputed(() => {
      const isRequired = ko4.unwrap(field.isRequired);
      if (!isRequired) return false;
      const value = ko4.unwrap(field.Value);
      if (value?.constructor == Array) return !value.length;
      return value === null || value === void 0;
    }),
    error: new ValidationError2(
      "text-field",
      "required-field",
      `${ko4.utils.unwrapObservable(field.displayName)} is required!`
    )
  };
}
var ko4, BaseField;
var init_BaseField = __esm({
  "src/sal/fields/BaseField.js"() {
    ko4 = __toESM(require_knockout_latest());
    init_validation_error();
    BaseField = class {
      constructor({
        displayName,
        systemName,
        instructions = null,
        isRequired = false,
        width,
        classList = [],
        Visible = ko4.pureComputed(() => true)
      }) {
        this.displayName = displayName;
        this.systemName = systemName;
        this.instructions = instructions;
        this.isRequired = isRequired;
        this.Visible = Visible;
        this.width = width ? "col-md-" + width : "col-md-6";
        this.classList = classList;
        this.addFieldRequirement(isRequiredValidationRequirement(this));
      }
      Value = ko4.observable();
      get = () => this.Value();
      set = (val) => this.Value(val);
      clear = () => {
        if (ko4.isObservableArray(this.Value)) this.Value([]);
        else this.Value(null);
      };
      toString = ko4.pureComputed(() => this.Value());
      toJSON = () => this.Value();
      fromJSON = (val) => this.Value(val);
      validate = (showErrors = true) => {
        this.ShowErrors(showErrors);
        return this.Errors();
      };
      _fieldValidationRequirements = ko4.observableArray();
      Errors = ko4.pureComputed(() => {
        if (!this.Visible()) return [];
        const errors = this._fieldValidationRequirements().filter((req) => req.requirement()).map((req) => req.error);
        return errors;
      });
      addFieldRequirement = (requirement) => this._fieldValidationRequirements.push(requirement);
      IsValid = ko4.pureComputed(() => !this.Errors().length);
      ShowErrors = ko4.observable(false);
      ValidationClass = ko4.pureComputed(() => {
        if (!this.ShowErrors()) return;
        return this.Errors().length ? "is-invalid" : "is-valid";
      });
    };
  }
});

// src/sal/components/fields/BaseFieldModule.js
function registerFieldComponents(constructor) {
  ko5.components.register(constructor.edit, {
    template: constructor.editTemplate,
    viewModel: constructor
  });
  ko5.components.register(constructor.view, {
    template: constructor.viewTemplate,
    viewModel: constructor
  });
}
var ko5, html, BaseFieldModule;
var init_BaseFieldModule = __esm({
  "src/sal/components/fields/BaseFieldModule.js"() {
    ko5 = __toESM(require_knockout_latest());
    html = String.raw;
    BaseFieldModule = class {
      constructor(params) {
        Object.assign(this, params);
      }
      _id;
      getUniqueId = () => {
        if (!this._id) {
          this._id = "field-" + Math.floor(Math.random() * 1e4);
        }
        return this._id;
      };
      Errors = ko5.pureComputed(() => {
        if (!this.ShowErrors()) return [];
        if (!this.isRequired) return [];
        return this.Value() ? [] : [
          new ValidationError(
            "text-field",
            "required-field",
            this.displayName + ` is required!`
          )
        ];
      });
      ShowErrors = ko5.observable(false);
      ValidationClass = ko5.pureComputed(() => {
        if (!this.ShowErrors()) return;
        return this.Errors().length ? "is-invalid" : "is-valid";
      });
      static viewTemplate = html`
    <div class="fw-semibold" data-bind="text: displayName"></div>
    <div data-bind="text: toString()"></div>
  `;
      static editTemplate = html`<div>Uh oh!</div>`;
    };
  }
});

// src/sal/components/fields/BlobModule.js
var ko6, editTemplate, viewTemplate, BlobModule;
var init_BlobModule = __esm({
  "src/sal/components/fields/BlobModule.js"() {
    ko6 = __toESM(require_knockout_latest());
    init_BaseFieldModule();
    editTemplate = html`
  <h5>
    <span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
  </h5>
  <!-- ko ifnot: entityType -->
  <div class="alert alert-danger">Missing entity type</div>
  <!-- /ko -->
  <!-- ko if: entityType -->
  <!-- ko ifnot: multiple -->
  <div
    data-bind="component: {name: Value()?.components.edit, params: {Entity: Value()}}"
  ></div>
  <!-- /ko -->
  <!-- ko if: multiple -->
  <table class="table">
    <thead>
      <tr data-bind="">
        <!-- ko foreach: Cols -->
        <th data-bind="text: displayName"></th>
        <!-- /ko -->
        <th>Actions</th>
      </tr>
    </thead>
    <tbody data-bind="">
      <!-- ko foreach: {data: Value, as: 'row'} -->
      <tr data-bind="">
        <!-- ko foreach: {data: row.FormFields, as: 'col'} -->
        <td data-bind="text: col.toString"></td>
        <!-- /ko -->
        <td>
          <i
            title="remove item"
            class="fa-solid fa-trash pointer"
            data-bind="click: $parent.remove.bind(row)"
          ></i>
        </td>
      </tr>
      <!-- /ko -->
      <tr>
        <!-- ko foreach: NewItem()?.FormFields -->
        <td>
          <div
            data-bind="component: {name: components.edit, params: $data}"
          ></div>
        </td>
        <!-- /ko -->
        <td class="align-bottom">
          <button
            title="add and new"
            type="button"
            data-bind="click: submit"
            class="btn btn-success"
          >
            Add +
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- /ko -->
  <!-- /ko -->
`;
    viewTemplate = html`
  <h5>
    <span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
  </h5>
  <!-- ko ifnot: entityType -->
  <div class="alert alert-danger">Missing entity type</div>
  <!-- /ko -->
  <!-- ko if: entityType -->
  <!-- ko ifnot: multiple -->
  <!-- ko if: Value -->
  <div
    data-bind="component: {name: Value().components.view, params: {Entity: Value()}}"
  ></div>
  <!-- /ko -->
  <!-- /ko -->
  <!-- ko if: multiple -->
  <table class="table">
    <thead>
      <tr data-bind="">
        <!-- ko foreach: Cols -->
        <th data-bind="text: displayName"></th>
        <!-- /ko -->
      </tr>
    </thead>
    <tbody data-bind="">
      <!-- ko foreach: {data: Value, as: 'row'} -->
      <tr data-bind="">
        <!-- ko foreach: {data: row.FormFields, as: 'col'} -->
        <td data-bind="text: col.toString()"></td>
        <!-- /ko -->
      </tr>
      <!-- /ko -->
    </tbody>
  </table>
  <!-- /ko -->
  <!-- /ko -->
`;
    BlobModule = class extends BaseFieldModule {
      constructor(params) {
        super(params);
      }
      static viewTemplate = viewTemplate;
      static editTemplate = editTemplate;
      static view = "blob-view";
      static edit = "blob-edit";
      static new = "blob-edit";
    };
    registerFieldComponents(BlobModule);
  }
});

// src/sal/components/fields/CheckboxModule.js
var editTemplate2, viewTemplate2, CheckboxModule;
var init_CheckboxModule = __esm({
  "src/sal/components/fields/CheckboxModule.js"() {
    init_BaseFieldModule();
    editTemplate2 = html`
  <div class="form-check form-switch">
    <label class="form-check-label"
      ><span class="fw-semibold" data-bind="text: displayName"></span>
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        data-bind="checked: Value"
      />
      <!-- ko if: instructions -->
      <div
        class="fw-lighter fst-italic text-secondary"
        data-bind="html: instructions"
      ></div>
      <!-- /ko -->
    </label>
  </div>
`;
    viewTemplate2 = html`
  <div class="form-check form-switch">
    <label class="form-check-label"
      ><span class="fw-semibold" data-bind="text: displayName"></span>
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        data-bind="checked: Value"
        disabled
      />
    </label>
  </div>
`;
    CheckboxModule = class extends BaseFieldModule {
      constructor(params) {
        super(params);
      }
      static viewTemplate = viewTemplate2;
      static editTemplate = editTemplate2;
      static view = "checkbox-view";
      static edit = "checkbox-edit";
      static new = "checkbox-edit";
    };
    registerFieldComponents(CheckboxModule);
  }
});

// src/sal/components/fields/DateModule.js
var ko7, dateFieldTypes, editTemplate3, DateModule;
var init_DateModule = __esm({
  "src/sal/components/fields/DateModule.js"() {
    ko7 = __toESM(require_knockout_latest());
    init_BaseFieldModule();
    dateFieldTypes = {
      date: "date",
      datetime: "datetime-local"
    };
    editTemplate3 = html`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <input
      class="form-control"
      data-bind="value: inputBinding, class: ValidationClass, attr: {'type': type}"
    />
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`;
    DateModule = class extends BaseFieldModule {
      constructor(params) {
        super(params);
      }
      toInputDateString = () => this.Value().format("yyyy-MM-dd");
      toInputDateTimeString = () => this.Value().format("yyyy-MM-ddThh:mm");
      inputBinding = ko7.pureComputed({
        read: () => {
          if (!this.Value()) return null;
          switch (this.type) {
            case dateFieldTypes.date:
              return this.toInputDateString();
            case dateFieldTypes.datetime:
              return this.toInputDateTimeString();
            default:
              return null;
          }
        },
        write: (val) => {
          if (!val) return;
          if (this.type == dateFieldTypes.datetime) {
            this.Value(new Date(val));
            return;
          }
          this.Value(/* @__PURE__ */ new Date(val + "T00:00"));
        }
      });
      static editTemplate = editTemplate3;
      static view = "date-view";
      static edit = "date-edit";
      static new = "date-edit";
    };
    registerFieldComponents(DateModule);
  }
});

// src/sal/components/fields/LookupModule.js
var ko8, editTemplate4, LookupModule;
var init_LookupModule = __esm({
  "src/sal/components/fields/LookupModule.js"() {
    ko8 = __toESM(require_knockout_latest());
    init_BaseFieldModule();
    editTemplate4 = html`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <!-- ko if: isSearch -->
    <div data-bind="text: toString()"></div>
    <input class="form-control" data-bind="" />
    <!-- /ko -->
    <!-- ko ifnot: isSearch -->
    <!-- ko if: Options().length -->
    <!-- ko if: multiple -->
    <select
      class="form-select"
      name=""
      id=""
      multiple="true"
      data-bind="options: Options, 
  selectedOptions: Value,
  optionsText: optionsText,
  class: ValidationClass"
    ></select>
    <div class="fw-light flex justify-between">
      <p class="fst-italic">Hold ctrl to select multiple</p>
      <button type="button" class="btn btn-link h-1" data-bind="click: clear">
        CLEAR
      </button>
    </div>
    <!-- /ko -->
    <!-- ko ifnot: multiple -->
    <select
      class="form-select"
      name=""
      id=""
      data-bind="options: Options, 
    optionsCaption: 'Select...', 
    value: Value,
    optionsText: optionsText,
    class: ValidationClass"
    ></select>
    <!-- /ko -->
    <!-- /ko -->
    <!-- /ko -->
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`;
    LookupModule = class extends BaseFieldModule {
      constructor(field) {
        super(field);
        this.onSearchInput = field.onSearchInput;
        this.multiple = field.multiple ?? false;
      }
      // selectedOptions = ko.pureComputed({
      //   read: () => {
      //     if (this.multiple) return this.Value();
      //     return ko.unwrap(this.Value) ? [ko.unwrap(this.Value)] : [];
      //   },
      //   write: (val) => {
      //     if (this.multiple) {
      //       this.Value(val);
      //       return;
      //     }
      //     if (val.length) {
      //       this.Value(val[0]);
      //       return;
      //     }
      //     this.Value(null);
      //   },
      // });
      static editTemplate = editTemplate4;
      static view = "lookup-view";
      static edit = "lookup-edit";
      static new = "lookup-edit";
    };
    registerFieldComponents(LookupModule);
  }
});

// src/sal/components/fields/PeopleModule.js
var ko9, editTemplate5, viewTemplate3, PeopleModule;
var init_PeopleModule = __esm({
  "src/sal/components/fields/PeopleModule.js"() {
    ko9 = __toESM(require_knockout_latest());
    init_BaseFieldModule();
    editTemplate5 = html`
  <label class="fw-semibold w-100"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <!-- ko ifnot: spGroupId -->
    <div
      data-bind="attr: {id: getUniqueId()}, 
      people: Value, 
      pickerOptions: pickerOptions,
      class: ValidationClass"
    ></div>
    <!-- /ko -->
    <!-- ko if: ShowUserSelect -->
    <select
      class="form-select"
      name=""
      id=""
      data-bind="options: userOpts, 
        optionsCaption: 'Select...', 
        optionsText: 'Title',
        value: ValueFunc,
        class: ValidationClass"
    ></select>
    <!-- /ko -->
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`;
    viewTemplate3 = html`
  <div class="fw-semibold" data-bind="text: displayName"></div>
  <!-- ko if: toString -->
  <!-- ko ifnot: multiple -->
  <div
    data-bind="text: toString, 
      attr: {title: Value()?.LoginName}"
  ></div>
  <!-- /ko -->
  <!-- ko if: multiple -->
  <ul data-bind="foreach: Value">
    <li data-bind="attr: {title: LoginName}, text: Title"></li>
  </ul>
  <!-- /ko -->
  <!-- /ko -->
  <!-- ko ifnot: toString -->
  <div class="fst-italic">Not provided.</div>
  <!-- /ko -->
`;
    PeopleModule = class extends BaseFieldModule {
      constructor(params) {
        super(params);
      }
      ValueFunc = ko9.pureComputed({
        read: () => {
          if (!this.Value()) return;
          const userOpts = ko9.unwrap(this.userOpts);
          return userOpts.find((opt) => opt.ID == this.Value().ID);
        },
        write: (opt) => {
          const userOpts = ko9.unwrap(this.userOpts);
          if (!userOpts) return;
          this.Value(opt);
        }
      });
      ShowUserSelect = ko9.pureComputed(() => {
        const groupName = this.spGroupName;
        if (!groupName) return false;
        const options = ko9.unwrap(this.userOpts);
        return options.length;
      });
      static viewTemplate = viewTemplate3;
      static editTemplate = editTemplate5;
      static view = "people-view";
      static edit = "people-edit";
      static new = "people-edit";
    };
    registerFieldComponents(PeopleModule);
  }
});

// src/sal/components/fields/SearchSelectModule.js
var ko10, editTemplate6, SearchSelectModule;
var init_SearchSelectModule = __esm({
  "src/sal/components/fields/SearchSelectModule.js"() {
    ko10 = __toESM(require_knockout_latest());
    init_BaseFieldModule();
    editTemplate6 = html`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
  </label>
  <search-select
    class="form-select"
    data-bind="searchSelect: { 
      options: Options, 
      selectedOptions: Value,
      optionsText: optionsText,
      onSearchInput: onSearchInput
    }"
  >
  </search-select>
  <div class="fw-light flex justify-between">
    <p class="fst-italic"></p>
    <button type="button" class="btn btn-link h-1" data-bind="click: clear">
      CLEAR
    </button>
  </div>
  <!-- ko if: instructions -->
  <div
    class="fw-lighter fst-italic text-secondary"
    data-bind="html: instructions"
  ></div>
  <!-- /ko -->
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`;
    SearchSelectModule = class extends BaseFieldModule {
      constructor(field) {
        super(field);
        this.Options = field.Options;
        this.Value = field.Value;
        this.optionsText = field.optionsText ?? ((val) => {
          return val;
        });
        this.multiple = field.multiple;
        this.OptionsCaption = field.OptionsCaption ?? "Select...";
        this.onSearchInput = field.onSearchInput;
      }
      GetSelectedOptions = ko10.pureComputed(() => {
        if (this.multiple) return this.Value();
        return this.Value() ? [this.Value()] : [];
      });
      InputGroupFocused = ko10.observable();
      setFocus = () => this.InputGroupFocused(true);
      FilterText = ko10.observable();
      FilteredOptions = ko10.pureComputed(
        () => this.Options().filter((option) => {
          if (this.GetSelectedOptions().indexOf(option) >= 0) return false;
          if (this.FilterText())
            return this.optionsText(option).toLowerCase().includes(this.FilterText().toLowerCase());
          return true;
        })
      );
      addSelection = (option, e) => {
        console.log("selected", option);
        if (e.target.nextElementSibling) {
          e.target.nextElementSibling.focus();
        }
        if (this.multiple) {
          this.Value.push(option);
        } else {
          this.Value(option);
        }
      };
      removeSelection = (option) => this.multiple ? this.Value.remove(option) : this.Value(null);
      setInputGroupFocus = () => {
        this.InputGroupFocused(true);
        clearTimeout(this.focusOutTimeout);
      };
      removeInputGroupFocus = (data2, e) => {
        this.focusOutTimeout = window.setTimeout(() => {
          this.InputGroupFocused(false);
        }, 0);
      };
      static editTemplate = editTemplate6;
      static view = "search-select-view";
      static edit = "search-select-edit";
      static new = "search-select-new";
    };
    registerFieldComponents(SearchSelectModule);
  }
});

// src/sal/components/fields/SelectModule.js
var ko11, editTemplate7, SelectModule;
var init_SelectModule = __esm({
  "src/sal/components/fields/SelectModule.js"() {
    ko11 = __toESM(require_knockout_latest());
    init_BaseFieldModule();
    editTemplate7 = html`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <!-- ko if: multiple -->
    <select
      class="form-select"
      name=""
      id=""
      multiple="true"
      data-bind="options: Options, 
        optionsCaption: 'Select...', 
        optionsText: optionsText,
        selectedOptions: Value,
        class: ValidationClass"
    ></select>
    <div class="fst-italic fw-light">Hold ctrl to select multiple.</div>
    <!-- /ko -->
    <!-- ko ifnot: multiple -->
    <select
      class="form-select"
      name=""
      id=""
      data-bind="options: Options, 
        optionsCaption: 'Select...', 
        optionsText: optionsText,
        value: Value,
        class: ValidationClass"
    ></select>
    <!-- /ko -->
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`;
    SelectModule = class extends BaseFieldModule {
      constructor(params) {
        super(params);
      }
      static editTemplate = editTemplate7;
      static view = "select-view";
      static edit = "select-edit";
      static new = "select-edit";
    };
    registerFieldComponents(SelectModule);
  }
});

// src/sal/components/fields/TextAreaModule.js
var ko12, editTemplate8, viewTemplate4, TextAreaModule;
var init_TextAreaModule = __esm({
  "src/sal/components/fields/TextAreaModule.js"() {
    ko12 = __toESM(require_knockout_latest());
    init_BaseFieldModule();
    editTemplate8 = html`
  <div class="component field">
    <!-- ko if: isRichText -->
    <label class="fw-semibold"
      ><span data-bind="text: displayName"></span
      ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span
      >:</label
    >
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
    <div
      class="richtext-field"
      data-bind="childrenComplete: childrenHaveLoaded"
    >
      <!-- Create the editor container -->
      <div
        class="form-control"
        data-bind="attr: {'id': getUniqueId()}, class: ValidationClass"
        style="height: 150px"
      >
        <div data-bind="html: Value"></div>
      </div>
    </div>
    <!-- /ko -->
    <!-- ko ifnot: isRichText -->
    <label class="fw-semibold"
      ><span data-bind="text: displayName"></span
      ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
      <!-- ko if: instructions -->
      <div
        class="fw-lighter fst-italic text-secondary"
        data-bind="html: instructions"
      ></div>
      <!-- /ko -->
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="form-control"
        data-bind="textInput: Value, class: ValidationClass, attr: attr"
      ></textarea>
    </label>
    <!-- /ko -->
    <!-- ko if: ShowErrors -->
    <!-- ko foreach: Errors -->
    <div class="fw-semibold text-danger" data-bind="text: description"></div>
    <!-- /ko -->
    <!-- /ko -->
  </div>
`;
    viewTemplate4 = html`
  <div class="fw-semibold" data-bind="text: displayName"></div>
  <!-- ko if: Value -->
  <!-- ko if: isRichText -->
  <div data-bind="html: Value"></div>
  <!-- /ko -->
  <!-- ko ifnot: isRichText -->
  <div data-bind="text: Value"></div>
  <!-- /ko -->
  <!-- /ko -->
  <!-- ko ifnot: Value -->
  <div class="fst-italic">Not provided.</div>
  <!-- /ko -->
`;
    TextAreaModule = class extends BaseFieldModule {
      constructor(params) {
        super(params);
      }
      childrenHaveLoaded = (nodes) => {
        this.initializeEditor();
      };
      getToolbarId = () => "toolbar-" + this.getUniqueId();
      initializeEditor() {
        const toolbarOptions = [
          ["bold", "italic", "underline", "strike"],
          // toggled buttons
          ["link"],
          ["blockquote", "code-block"],
          [{ header: 1 }, { header: 2 }],
          // custom button values
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          // superscript/subscript
          [{ indent: "-1" }, { indent: "+1" }],
          // outdent/indent
          [{ direction: "rtl" }],
          // text direction
          [{ size: ["small", false, "large", "huge"] }],
          // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],
          ["clean"]
          // remove formatting button
        ];
        var editor = new Quill("#" + this.getUniqueId(), {
          modules: { toolbar: toolbarOptions },
          theme: "snow"
        });
        const Value = this.Value;
        Value.subscribe((val) => {
          if (val == "") {
            editor.setText("");
          }
        });
        editor.on("text-change", function(delta, oldDelta, source) {
          Value(editor.root.textContent ? editor.root.innerHTML : "");
        });
      }
      static viewTemplate = viewTemplate4;
      static editTemplate = editTemplate8;
      static view = "text-area-view";
      static edit = "text-area-edit";
      static new = "text-area-edit";
    };
    registerFieldComponents(TextAreaModule);
  }
});

// src/sal/components/fields/TextModule.js
var editTemplate9, TextModule;
var init_TextModule = __esm({
  "src/sal/components/fields/TextModule.js"() {
    init_BaseFieldModule();
    editTemplate9 = html`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <input
      class="form-control"
      data-bind="textInput: Value, class: ValidationClass, attr: attr"
    />
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`;
    TextModule = class extends BaseFieldModule {
      constructor(params) {
        super(params);
      }
      static editTemplate = editTemplate9;
      static view = "text-view";
      static edit = "text-edit";
      static new = "text-edit";
    };
    registerFieldComponents(TextModule);
  }
});

// src/sal/components/fields/index.js
var init_fields = __esm({
  "src/sal/components/fields/index.js"() {
    init_BaseFieldModule();
    init_BlobModule();
    init_CheckboxModule();
    init_DateModule();
    init_LookupModule();
    init_PeopleModule();
    init_SearchSelectModule();
    init_SelectModule();
    init_TextAreaModule();
    init_TextModule();
  }
});

// src/sal/fields/BlobField.js
var ko13, BlobField;
var init_BlobField = __esm({
  "src/sal/fields/BlobField.js"() {
    ko13 = __toESM(require_knockout_latest());
    init_fields2();
    init_fields();
    BlobField = class _BlobField extends BaseField {
      constructor(params) {
        super(params);
        this.entityType = params.entityType;
        this.multiple = params.multiple;
        if (this.multiple) {
          this.Value = ko13.observableArray();
        }
        if (ko13.isObservable(this.entityType)) {
          this.entityType.subscribe(this.updateEntityTypeHandler);
        }
        this.updateEntityTypeHandler(ko13.unwrap(this.entityType));
      }
      toString = ko13.pureComputed(() => `${this.Value()?.length ?? "0"} items`);
      toJSON = ko13.pureComputed(() => {
        if (!this.multiple) return this.Value()?.toJSON();
        return this.Value().map((value) => value.toJSON());
      });
      fromJSON = (input) => {
        if (!input) return;
        if (!this.multiple) {
          this.Value()?.fromJSON(input);
          return;
        }
        this.Value.removeAll();
        input.map((obj) => {
          const newEntity = new this.entityConstructor();
          newEntity.fromJSON(obj);
          this.Value.push(newEntity);
        });
      };
      // TypedValues = ko.observableArray();
      // TypedValue = ko.observable();
      // Value = ko.pureComputed(() =>
      //   this.multiple ? this.TypedValues() : this.TypedValue()
      // );
      get = () => {
        return JSON.stringify(this.toJSON());
      };
      blob;
      set = (val) => {
        if (window.DEBUG) console.log(val);
        this.blob = val;
        if (val?.constructor == _BlobField) {
          return;
        }
        this.fromJSON(JSON.parse(val));
      };
      get entityConstructor() {
        return ko13.utils.unwrapObservable(this.entityType);
      }
      // use purecomputed for memoization, fields shouldn't change
      Cols = ko13.pureComputed(() => {
        const entityType = ko13.unwrap(this.entityType);
        if (!entityType) return [];
        const newEntity = new this.entityConstructor();
        return newEntity.FormFields();
      });
      // ColKeys = ko.pureComputed(() =>
      //   new this.entityConstructor()?.FormFieldKeys()
      // );
      // Support multiple items
      NewItem = ko13.observable();
      submit = () => {
        const errors = this.NewItem()?.validate();
        if (errors.length) return;
        this.Value.push(this.NewItem());
        this.NewItem(new this.entityConstructor());
      };
      add = (item) => this.Value.push(item);
      remove = (item) => this.Value.remove(item);
      updateEntityTypeHandler = (newType) => {
        if (!newType) return;
        if (!this.multiple) {
          this.Value(new this.entityConstructor());
        } else {
          this.NewItem(new this.entityConstructor());
        }
        if (this.blob) this.fromJSON(JSON.parse(this.blob));
      };
      applyValueToTypedValues = () => {
      };
      // Errors = ko.pureComputed(() => {
      //   if (!this.Visible()) return [];
      //   // const isRequired = ko.unwrap(this.isRequired);
      //   const isRequired =
      //     typeof this.isRequired == "function"
      //       ? this.isRequired()
      //       : this.isRequired;
      //   if (!isRequired) return [];
      //   const currentValue = this.multiple ? this.TypedValues() : this.TypedValue();
      //   return currentValue
      //     ? []
      //     : [
      //         new ValidationError(
      //           "text-field",
      //           "required-field",
      //           (typeof this.displayName == "function"
      //             ? this.displayName()
      //             : this.displayName) + ` is required!`
      //         ),
      //       ];
      // });
      components = BlobModule;
    };
  }
});

// src/sal/fields/CheckboxField.js
var CheckboxField;
var init_CheckboxField = __esm({
  "src/sal/fields/CheckboxField.js"() {
    init_fields2();
    init_fields();
    CheckboxField = class extends BaseField {
      constructor(params) {
        super(params);
      }
      components = CheckboxModule;
    };
  }
});

// src/sal/fields/DateField.js
var ko14, DateField;
var init_DateField = __esm({
  "src/sal/fields/DateField.js"() {
    ko14 = __toESM(require_knockout_latest());
    init_fields();
    init_fields2();
    init_fields();
    DateField = class extends BaseField {
      constructor(params) {
        super(params);
        this.type = params.type ?? dateFieldTypes.date;
      }
      toString = ko14.pureComputed(() => {
        switch (this.type) {
          case dateFieldTypes.date:
            return this.toLocaleDateString();
          case dateFieldTypes.datetime:
            return this.toLocaleString();
          default:
            return "";
        }
      });
      toSortableDateString = () => this.Value()?.format("yyyy-MM-dd");
      toLocaleDateString = () => this.Value()?.toLocaleDateString();
      toLocaleString = () => this.Value()?.toLocaleString();
      get = ko14.pureComputed(() => {
        if (!this.Value() || isNaN(this.Value().valueOf())) {
          return null;
        }
        return this.Value().toISOString();
      });
      set = (newDate) => {
        if (!newDate) return null;
        if (newDate.constructor.getName() != "Date") {
          newDate = new Date(newDate);
        }
        if (newDate.getTimezoneOffset()) {
        }
        this.Value(newDate);
      };
      components = DateModule;
    };
  }
});

// src/sal/fields/LookupField.js
function getEntityPropertyAsString(entity, column) {
  if (entity.FieldMap && entity.FieldMap[column]) {
    const field = entity.FieldMap[column];
    if (typeof field == "function") {
      return field();
    }
    if (field.toString && typeof field.toString == "function") {
      return field.toString();
    }
    if (field.get && typeof field.get == "function") {
      return field.get();
    }
    if (field.obs) {
      return field.obs();
    }
    return field;
  }
  return entity[column] ?? "";
}
var ko15, LookupField;
var init_LookupField = __esm({
  "src/sal/fields/LookupField.js"() {
    ko15 = __toESM(require_knockout_latest());
    init_fields();
    init_fields2();
    LookupField = class extends BaseField {
      constructor({
        displayName,
        type: entityType,
        isRequired = false,
        Visible,
        entitySet,
        options = ko15.observableArray(),
        optionsFilter = null,
        optionsText = null,
        multiple = false,
        lookupCol = null,
        instructions
      }) {
        super({ Visible, displayName, isRequired, instructions });
        if (!options) {
          this.isSearch = true;
        } else {
          this.isSearch = false;
          this.allOpts = options;
        }
        this.isSearch = !options;
        this.multiple = multiple;
        this.Value = multiple ? ko15.observableArray() : ko15.observable();
        this.entityType = entityType;
        this.entitySet = entitySet;
        this.lookupCol = lookupCol ?? "Title";
        this.optionsText = optionsText ?? ((item) => item[this.lookupCol]);
        if (optionsFilter) this.optionsFilter = optionsFilter;
        this.components = multiple ? SearchSelectModule : LookupModule;
      }
      isSearch = false;
      allOpts;
      optionsFilter = (val) => val;
      Options = ko15.pureComputed(() => {
        const optsFilter = ko15.unwrap(this.optionsFilter);
        const allOpts = ko15.unwrap(this.allOpts);
        return allOpts.filter(optsFilter);
      });
      IsLoading = ko15.observable(false);
      HasLoaded = ko15.observable(false);
      // TODO: Started this, should really go in the entity base class if we're doing active record
      // create = async () => {
      //   const newItems = this.multiple ? this.Value() : [this.Value()]
      //   newItems.map(item => this.entitySet.AddEntity(newItems))
      // }
      refresh = async () => {
        if (!!!this.Value()) {
          return;
        }
        this.IsLoading(true);
        if (!this.multiple) {
          await this.entitySet.LoadEntity(this.Value());
          this.IsLoading(false);
          this.HasLoaded(true);
          return;
        }
        await Promise.all(
          this.Value().map(
            async (entity) => await this.entitySet.LoadEntity(entity)
          )
        );
        this.IsLoading(false);
        this.HasLoaded(true);
      };
      ensure = async () => {
        if (this.HasLoaded()) return;
        if (this.IsLoading()) {
          return new Promise((resolve, reject2) => {
            const isLoadingSubscription = this.IsLoading.subscribe((isLoading) => {
              if (!isLoading) {
                isLoadingSubscription.dispose();
                resolve();
              }
            });
          });
        }
        await this.refresh();
      };
      toString = ko15.pureComputed(() => {
        if (!!!this.Value()) {
          return "";
        }
        if (this.multiple) {
          return this.Value().map((val) => getEntityPropertyAsString(val, this.lookupCol)).join(", ");
        }
        return getEntityPropertyAsString(this.Value(), this.lookupCol);
      });
      get = () => {
        if (!this.Value()) return;
        if (this.multiple) {
          return this.Value().map((entity2) => {
            return {
              ID: entity2.ID,
              LookupValue: entity2.LookupValue,
              Title: entity2.Title
            };
          });
        }
        const entity = this.Value();
        return {
          ID: entity.ID,
          LookupValue: entity.LookupValue,
          Title: entity.Title
        };
      };
      set = (val) => {
        if (!val) {
          this.Value(val);
          return;
        }
        if (this.multiple) {
          const valArr = Array.isArray(val) ? val : val.results ?? val.split("#;");
          this.Value(valArr.map((value) => this.findOrCreateNewEntity(value)));
          return;
        }
        this.Value(this.findOrCreateNewEntity(val));
        if (val && !this.toString()) {
        }
      };
      findOrCreateNewEntity = (val) => {
        if (this.entityType.FindInStore) {
          const foundEntity = this.entityType.FindInStore(val);
          if (foundEntity) return foundEntity;
          console.warn(
            `Could not find entity in store: ${this.entityType.name}`,
            val
          );
        }
        const optionEntity = this.allOpts().find((entity) => entity.ID == val.ID);
        if (optionEntity) return optionEntity;
        if (this.entityType.Create) {
          return this.entityType.Create(val);
        }
        const newEntity = new this.entityType();
        newEntity.ID = val.ID;
        this.entitySet.LoadEntity(newEntity);
        return newEntity;
      };
    };
  }
});

// src/sal/infrastructure/entity_utilities.js
var sortByTitle;
var init_entity_utilities = __esm({
  "src/sal/infrastructure/entity_utilities.js"() {
    sortByTitle = (a, b) => {
      if (a.Title > b.Title) {
        return 1;
      }
      if (a.Title < b.Title) {
        return -1;
      }
      return 0;
    };
  }
});

// src/sal/entities/People.js
var People2;
var init_People = __esm({
  "src/sal/entities/People.js"() {
    People2 = class _People {
      constructor({
        ID,
        Title,
        LoginName = null,
        IsGroup = null,
        IsEnsured = false
      }) {
        this.ID = ID;
        this.Title = Title;
        this.LookupValue = Title;
        this.LoginName = LoginName != "" ? LoginName : null;
        this.IsGroup = IsGroup;
        this.IsEnsured = IsEnsured;
      }
      ID = null;
      Title = null;
      LoginName = null;
      LookupValue = null;
      getKey = () => this.LoginName ?? this.Title;
      static Create = function(props) {
        if (!props || !props.ID && !(props.Title || props.LookupValue))
          return null;
        return new _People({
          ...props,
          Title: props.Title ?? props.LookupValue
        });
      };
    };
  }
});

// src/sal/entities/SitePage.js
var SitePage;
var init_SitePage = __esm({
  "src/sal/entities/SitePage.js"() {
    init_primitives();
    SitePage = class extends Entity {
      constructor(params) {
        super(params);
      }
      static Views = {
        All: ["ID", "Title", "Created", "Author", "Modified", "Editor"]
      };
      static ListDef = {
        name: "SitePages",
        title: "Site Pages"
      };
    };
  }
});

// src/sal/entities/index.js
var init_entities = __esm({
  "src/sal/entities/index.js"() {
    init_People();
    init_SitePage();
  }
});

// src/env.js
var assetsPath;
var init_env = __esm({
  "src/env.js"() {
    assetsPath = () => `${window.context.pageContext.serverRelativeUrl}/Style Library/apps/audit/src`;
  }
});

// src/sal/infrastructure/knockout_extensions.js
var ko16, fromPathTemplateLoader, fromPathViewModelLoader;
var init_knockout_extensions = __esm({
  "src/sal/infrastructure/knockout_extensions.js"() {
    ko16 = __toESM(require_knockout_latest());
    init_entities();
    init_infrastructure();
    init_env();
    ko16.subscribable.fn.subscribeChanged = function(callback) {
      var oldValue;
      this.subscribe(
        function(_oldValue) {
          oldValue = _oldValue;
        },
        this,
        "beforeChange"
      );
      this.subscribe(function(newValue) {
        callback(newValue, oldValue);
      });
    };
    ko16.observableArray.fn.subscribeAdded = function(callback) {
      this.subscribe(
        function(arrayChanges) {
          const addedValues = arrayChanges.filter((value) => value.status == "added").map((value) => value.value);
          callback(addedValues);
        },
        this,
        "arrayChange"
      );
    };
    ko16.bindingHandlers.searchSelect = {
      init: function(element, valueAccessor, allBindingsAccessor) {
        const { options, selectedOptions, optionsText, onSearchInput } = valueAccessor();
        function populateOpts() {
          const optionItems = ko16.unwrap(options);
          const selectedOpts = ko16.unwrap(selectedOptions) ?? [];
          const optionElements = optionItems.map((option) => {
            const optionElement = document.createElement("option");
            ko16.selectExtensions.writeValue(optionElement, ko16.unwrap(option));
            optionElement.innerText = optionsText(option);
            if (selectedOpts?.find((selectedOption) => {
              if (option.ID && selectedOption.ID == option.ID) return true;
              if (option == selectedOption) return true;
              return false;
            })) {
              optionElement.setAttribute("selected", "");
            }
            return optionElement;
          });
          element.append(...optionElements);
        }
        populateOpts();
        if (ko16.isObservable(options)) {
          options.subscribe(() => populateOpts(), this);
        }
        ko16.utils.registerEventHandler(element, "change", (e) => {
          selectedOptions(
            element.selectedOptions.map((opt) => ko16.selectExtensions.readValue(opt))
          );
        });
        if (onSearchInput) {
          ko16.utils.registerEventHandler(element, "input", (e) => {
            onSearchInput(e.originalEvent.target.searchInputElement.value);
          });
        }
      },
      update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        const { selectedOptions } = valueAccessor();
        const selectedUnwrapped = ko16.unwrap(selectedOptions);
        for (var i = 0; i < element.options.length; i++) {
          const o = element.options[i];
          o.toggleAttribute(
            "selected",
            selectedUnwrapped.includes(ko16.selectExtensions.readValue(o))
          );
        }
      }
    };
    ko16.bindingHandlers.people = {
      init: function(element, valueAccessor, allBindingsAccessor) {
        var schema = {};
        schema["PrincipalAccountType"] = "User";
        schema["SearchPrincipalSource"] = 15;
        schema["ShowUserPresence"] = true;
        schema["ResolvePrincipalSource"] = 15;
        schema["AllowEmailAddresses"] = true;
        schema["AllowMultipleValues"] = false;
        schema["MaximumEntitySuggestions"] = 50;
        schema["OnUserResolvedClientScript"] = async function(elemId, userKeys) {
          var pickerControl = SPClientPeoplePicker.SPClientPeoplePickerDict[elemId];
          var observable14 = valueAccessor();
          var userJSObject = pickerControl.GetControlValueAsJSObject()[0];
          if (!userJSObject) {
            observable14(null);
            return;
          }
          if (userJSObject.IsResolved) {
            if (userJSObject.Key == observable14()?.LoginName) return;
            var user = await ensureUserByKeyAsync(userJSObject.Key);
            var person = new People2(user);
            observable14(person);
          }
        };
        SPClientPeoplePicker_InitStandaloneControlWrapper(element.id, null, schema);
      },
      update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var pickerControl = SPClientPeoplePicker.SPClientPeoplePickerDict[element.id + "_TopSpan"];
        var userValue = ko16.utils.unwrapObservable(valueAccessor());
        if (!userValue) {
          pickerControl?.DeleteProcessedUser();
          return;
        }
        if (userValue && !pickerControl.GetAllUserInfo().find((pickerUser) => pickerUser.DisplayText == userValue.LookupValue)) {
          pickerControl.AddUserKeys(
            userValue.LoginName ?? userValue.LookupValue ?? userValue.Title
          );
        }
      }
    };
    ko16.bindingHandlers.dateField = {
      init: function(element, valueAccessor, allBindingsAccessor) {
      },
      update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      }
    };
    ko16.bindingHandlers.downloadLink = {
      update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var path = valueAccessor();
        var replaced = path.replace(/:([A-Za-z_]+)/g, function(_, token) {
          return ko16.unwrap(viewModel[token]);
        });
        element.href = replaced;
      }
    };
    ko16.bindingHandlers.files = {
      init: function(element, valueAccessor) {
        function addFiles(fileList) {
          var value = valueAccessor();
          if (!fileList.length) {
            value.removeAll();
            return;
          }
          const existingFiles = ko16.unwrap(value);
          const newFileList = [];
          for (let file of fileList) {
            if (!existingFiles.find((exFile) => exFile.name == file.name))
              newFileList.push(file);
          }
          ko16.utils.arrayPushAll(value, newFileList);
          return;
        }
        ko16.utils.registerEventHandler(element, "change", function() {
          addFiles(element.files);
        });
        const label = element.closest("label");
        if (!label) return;
        ko16.utils.registerEventHandler(label, "dragover", function(event) {
          event.preventDefault();
          event.stopPropagation();
        });
        ko16.utils.registerEventHandler(label, "dragenter", function(event) {
          event.preventDefault();
          event.stopPropagation();
          label.classList.add("dragging");
        });
        ko16.utils.registerEventHandler(label, "dragleave", function(event) {
          event.preventDefault();
          event.stopPropagation();
          label.classList.remove("dragging");
        });
        ko16.utils.registerEventHandler(label, "drop", function(event) {
          event.preventDefault();
          event.stopPropagation();
          let dt = event.originalEvent.dataTransfer;
          let files = dt.files;
          addFiles(files);
        });
      },
      update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        const value = valueAccessor();
        if (!value().length && element.files.length) {
          element.value = null;
          return;
        }
        return;
      }
    };
    ko16.bindingHandlers.toggleClick = {
      init: function(element, valueAccessor, allBindings) {
        var value = valueAccessor();
        ko16.utils.registerEventHandler(element, "click", function() {
          var classToToggle = allBindings.get("toggleClass");
          var classContainer = allBindings.get("classContainer");
          var containerType = allBindings.get("containerType");
          if (containerType && containerType == "sibling") {
            $(element).nextUntil(classContainer).each(function() {
              $(this).toggleClass(classToToggle);
            });
          } else if (containerType && containerType == "doc") {
            var curIcon = $(element).attr("src");
            if (curIcon == "/_layouts/images/minus.gif")
              $(element).attr("src", "/_layouts/images/plus.gif");
            else $(element).attr("src", "/_layouts/images/minus.gif");
            if ($(element).parent() && $(element).parent().parent()) {
              $(element).parent().parent().nextUntil(classContainer).each(function() {
                $(this).toggleClass(classToToggle);
              });
            }
          } else if (containerType && containerType == "any") {
            if ($("." + classToToggle).is(":visible"))
              $("." + classToToggle).hide();
            else $("." + classToToggle).show();
          } else $(element).find(classContainer).toggleClass(classToToggle);
        });
      }
    };
    ko16.bindingHandlers.toggles = {
      init: function(element, valueAccessor) {
        var value = valueAccessor();
        ko16.utils.registerEventHandler(element, "click", function() {
          value(!value());
        });
      }
    };
    fromPathTemplateLoader = {
      loadTemplate: function(name, templateConfig, callback) {
        if (templateConfig.fromPath) {
          fetch(assetsPath() + templateConfig.fromPath).then((response) => {
            if (!response.ok) {
              throw new Error(
                `Error Fetching HTML Template - ${response.statusText}`
              );
            }
            return response.text();
          }).catch((error) => {
            if (!templateConfig.fallback) return;
            console.warn(
              "Primary template not found, attempting fallback",
              templateConfig
            );
            fetch(assetsPath() + templateConfig.fallback).then((response) => {
              if (!response.ok) {
                throw new Error(
                  `Error Fetching fallback HTML Template - ${response.statusText}`
                );
              }
              return response.text();
            }).then(
              (text) => ko16.components.defaultLoader.loadTemplate(name, text, callback)
            );
          }).then(
            (text) => text ? ko16.components.defaultLoader.loadTemplate(name, text, callback) : null
          );
        } else {
          callback(null);
        }
      }
    };
    ko16.components.loaders.unshift(fromPathTemplateLoader);
    fromPathViewModelLoader = {
      loadViewModel: function(name, viewModelConfig, callback) {
        if (viewModelConfig.viaLoader) {
          const module2 = import(assetsPath() + viewModelConfig.viaLoader).then(
            (module3) => {
              const viewModelConstructor = module3.default;
              ko16.components.defaultLoader.loadViewModel(
                name,
                viewModelConstructor,
                callback
              );
            }
          );
        } else {
          callback(null);
        }
      }
    };
    ko16.components.loaders.unshift(fromPathViewModelLoader);
  }
});

// src/sal/infrastructure/register_components.js
function directRegisterComponent(name, { template, viewModel = null }) {
  ko17.components.register(name, {
    template,
    viewModel
  });
}
var ko17, html2;
var init_register_components = __esm({
  "src/sal/infrastructure/register_components.js"() {
    ko17 = __toESM(require_knockout_latest());
    html2 = String.raw;
  }
});

// src/sal/infrastructure/sal.js
function executeQuery(currCtx) {
  return new Promise(
    (resolve, reject2) => currCtx.executeQueryAsync(resolve, (sender, args) => {
      reject2({ sender, args });
    })
  );
}
function principalToPeople(oPrincipal, isGroup = null) {
  return {
    ID: oPrincipal.get_id(),
    Title: oPrincipal.get_title(),
    LoginName: oPrincipal.get_loginName(),
    IsEnsured: true,
    IsGroup: isGroup != null ? isGroup : oPrincipal.constructor.getName() == "SP.Group",
    oPrincipal
  };
}
function getDefaultGroups() {
  const defaultGroups = sal.globalConfig.defaultGroups;
  const result = {};
  Object.keys(defaultGroups).forEach((key) => {
    result[key] = principalToPeople(defaultGroups[key], true);
  });
  return result;
}
async function getGroupUsers(groupName) {
  if (siteGroups[groupName]?.Users?.constructor == Array) {
    return siteGroups[groupName].Users;
  }
  const url = `/web/sitegroups/GetByName('${groupName}')?$expand=Users`;
  const groupResult = await fetchSharePointData(url);
  const group = groupResult.d;
  group.Users = group.Users?.results;
  siteGroups[groupName] = group;
  return group.Users;
}
async function getUserPropsAsync(userId = window.context.pageContext.legacyPageContext.userId) {
  const userPropsUrl = `/sp.userprofiles.peoplemanager/getmyproperties`;
  const userInfoUrl = `/Web/GetUserById(${userId})/?$expand=Groups`;
  const userInfo = (await fetchSharePointData(userInfoUrl)).d;
  const userProps = (await fetchSharePointData(userPropsUrl))?.d.UserProfileProperties.results;
  function findPropValue(props, key) {
    return props.find((prop) => prop.Key == key)?.Value;
  }
  return {
    ID: userId,
    Title: userInfo.Title,
    LoginName: userInfo.LoginName,
    WorkPhone: findPropValue(userProps, "WorkPhone"),
    EMail: findPropValue(userProps, "WorkEmail"),
    // TODO: Do we still need this spelling?
    IsEnsured: true,
    IsGroup: false,
    Groups: userInfo.Groups?.results?.map((group) => {
      return {
        ...group,
        ID: group.Id,
        IsGroup: true,
        IsEnsured: true
      };
    })
  };
}
async function copyFileAsync(sourceFilePath, destFilePath) {
  const uri = `/web/getfilebyserverrelativeurl('${sourceFilePath}')/copyto('${destFilePath}')`;
  const result = await fetchSharePointData(uri, "POST");
  return result;
}
async function ensureUserByKeyAsync(userName) {
  return new Promise((resolve, reject2) => {
    var group = sal.globalConfig.siteGroups.find(function(group2) {
      return group2.LoginName == userName;
    });
    if (group) {
      resolve(group);
      return;
    }
    var context = new SP.ClientContext.get_current();
    var oUser = context.get_web().ensureUser(userName);
    function onEnsureUserSucceeded(sender, args) {
      const user = principalToPeople(oUser);
      resolve(user);
    }
    function onEnsureUserFailed(sender, args) {
      console.error(
        "Failed to ensure user :" + args.get_message() + "\n" + args.get_stackTrace()
      );
      reject2(args);
    }
    const data2 = { oUser, resolve, reject: reject2 };
    context.load(oUser);
    context.executeQueryAsync(
      Function.createDelegate(data2, onEnsureUserSucceeded),
      Function.createDelegate(data2, onEnsureUserFailed)
    );
  });
}
function getSPSiteGroupByName(groupName) {
  var userGroup = null;
  if (this.globalConfig.siteGroups != null) {
    userGroup = this.globalConfig.siteGroups.find(function(group) {
      return group.Title == groupName;
    });
  }
  return userGroup;
}
function SPList(listDef) {
  var self = this;
  self.config = {
    def: listDef
  };
  async function init() {
    if (!self.config.fieldSchema) {
      const listEndpoint = `/web/lists/GetByTitle('${self.config.def.title}')?$expand=Fields`;
      const list = await fetchSharePointData(listEndpoint);
      self.config.guid = list.d.Id;
      self.config.fieldSchema = list.d.Fields.results;
    }
  }
  init();
  async function setListPermissionsAsync(itemPermissions, reset) {
    const currCtx = new SP.ClientContext.get_current();
    const web = currCtx.get_web();
    const oList = web.get_lists().getByTitle(self.config.def.title);
    return setResourcePermissionsAsync(oList, itemPermissions, reset);
  }
  function setListPermissions(valuePairs, callback, reset) {
    reset = reset === void 0 ? false : reset;
    var users = new Array();
    var resolvedGroups = new Array();
    var currCtx = new SP.ClientContext.get_current();
    var web = currCtx.get_web();
    var oList = web.get_lists().getByTitle(self.config.def.title);
    valuePairs.forEach(function(vp) {
      var resolvedGroup = getSPSiteGroupByName(vp[0]);
      if (resolvedGroup) {
        resolvedGroups.push([resolvedGroup, vp[1]]);
      } else {
        users.push([currCtx.get_web().ensureUser(vp[0]), vp[1]]);
      }
    });
    function onFindItemSucceeded() {
      console.log("Successfully found item");
      var currCtx2 = new SP.ClientContext.get_current();
      var web2 = currCtx2.get_web();
      if (reset) {
        oList.resetRoleInheritance();
        oList.breakRoleInheritance(false, false);
        oList.get_roleAssignments().getByPrincipal(sal.globalConfig.currentUser).deleteObject();
      } else {
        oList.breakRoleInheritance(false, false);
      }
      this.resolvedGroups.forEach(function(groupPairs) {
        var roleDefBindingColl = SP.RoleDefinitionBindingCollection.newObject(currCtx2);
        roleDefBindingColl.add(
          web2.get_roleDefinitions().getByName(groupPairs[1])
        );
        oList.get_roleAssignments().add(groupPairs[0], roleDefBindingColl);
      });
      this.users.forEach(function(userPairs) {
        var roleDefBindingColl = SP.RoleDefinitionBindingCollection.newObject(currCtx2);
        roleDefBindingColl.add(
          web2.get_roleDefinitions().getByName(userPairs[1])
        );
        oList.get_roleAssignments().add(userPairs[0], roleDefBindingColl);
      });
      var data3 = { oList, callback };
      function onSetListPermissionsSuccess() {
        console.log("Successfully set permissions");
        callback(oList);
      }
      function onSetListPermissionsFailure(sender, args) {
        console.error(
          "Failed to update permissions on List: " + this.oList.get_title() + args.get_message() + "\n",
          args.get_stackTrace()
        );
      }
      currCtx2.load(oList);
      currCtx2.executeQueryAsync(
        Function.createDelegate(data3, onSetListPermissionsSuccess),
        Function.createDelegate(data3, onSetListPermissionsFailure)
      );
    }
    function onFindItemFailed(sender, args) {
      console.error(
        "Failed to find List: " + this.oList.get_title + args.get_message(),
        args.get_stackTrace()
      );
    }
    var data2 = {
      oList,
      users,
      resolvedGroups,
      callback
    };
    currCtx.load(oList);
    users.map(function(user) {
      currCtx.load(user[0]);
    });
    currCtx.executeQueryAsync(
      Function.createDelegate(data2, onFindItemSucceeded),
      Function.createDelegate(data2, onFindItemFailed)
    );
  }
  function mapObjectToListItem(val) {
    if (!val) {
      return val;
    }
    if (!Array.isArray(val)) {
      return mapItemToListItem(val);
    }
    return val.map((item) => {
      return mapItemToListItem(item);
    }).join(";#");
  }
  function mapItemToListItem(item) {
    if (item.ID) {
      return `${item.ID};#${item.LookupValue ?? ""}`;
    }
    if (item.LookupValue) {
      return item.LookupValue;
    }
    if (item.constructor.getName() == "Date") {
      return item.toISOString();
    }
    return item;
  }
  function createListItemAsync(entity, folderPath = null) {
    return new Promise((resolve, reject2) => {
      const currCtx = new SP.ClientContext.get_current();
      const web = currCtx.get_web();
      const oList = web.get_lists().getByTitle(self.config.def.title);
      const itemCreateInfo = new SP.ListItemCreationInformation();
      if (folderPath) {
        var folderUrl = sal.globalConfig.siteUrl + "/Lists/" + self.config.def.name + "/" + folderPath;
        itemCreateInfo.set_folderUrl(folderUrl);
      }
      const oListItem = oList.addItem(itemCreateInfo);
      const restrictedFields = [
        "ID",
        "Author",
        "Created",
        "Editor",
        "Modified"
      ];
      Object.keys(entity).filter((key) => !restrictedFields.includes(key)).forEach((key) => {
        oListItem.set_item(key, mapObjectToListItem(entity[key]));
      });
      oListItem.update();
      function onCreateListItemSucceeded() {
        resolve(oListItem.get_id());
      }
      function onCreateListItemFailed(sender, args) {
        console.error("Create Item Failed - List: " + self.config.def.name);
        console.error("ValuePairs", entity);
        console.error(sender, args);
        reject2(sender);
      }
      const data2 = { entity, oListItem, resolve, reject: reject2 };
      currCtx.load(oListItem);
      currCtx.executeQueryAsync(
        Function.createDelegate(data2, onCreateListItemSucceeded),
        Function.createDelegate(data2, onCreateListItemFailed)
      );
    });
  }
  function mapListItemToObject(val) {
    if (!val) {
      return val;
    }
    let out = {};
    switch (val.constructor.getName()) {
      case "SP.FieldUserValue":
        out.LoginName = val.get_email();
      case "SP.FieldLookupValue":
        out.ID = val.get_lookupId();
        out.LookupValue = val.get_lookupValue();
        out.Title = val.get_lookupValue();
        break;
      default:
        out = val;
    }
    return out;
  }
  function getListItems(caml, fields, callback) {
    var camlQuery = new SP.CamlQuery.createAllItemsQuery();
    camlQuery.set_viewXml(caml);
    var currCtx = new SP.ClientContext.get_current();
    var web = currCtx.get_web();
    var oList = web.get_lists().getByTitle(self.config.def.title);
    var collListItem = oList.getItems(camlQuery);
    function onGetListItemsSucceeded() {
      var self2 = this;
      var listItemEnumerator = self2.collListItem.getEnumerator();
      const foundObjects = [];
      while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        var listObj = {};
        fields.forEach((field) => {
          var colVal = oListItem.get_item(field);
          listObj[field] = Array.isArray(colVal) ? colVal.map((val) => mapListItemToObject(val)) : mapListItemToObject(colVal);
        });
        foundObjects.push(listObj);
      }
      callback(foundObjects);
    }
    function onGetListItemsFailed(sender, args) {
      console.log("unsuccessful read", sender);
      alert(
        "Request on list " + self.config.def.name + " failed, producing the following error: \n " + args.get_message() + "\nStackTrack: \n " + args.get_stackTrace()
      );
    }
    var data2 = {
      collListItem,
      callback,
      fields,
      camlQuery
    };
    currCtx.load(collListItem, `Include(${fields.join(", ")})`);
    currCtx.executeQueryAsync(
      Function.createDelegate(data2, onGetListItemsSucceeded),
      Function.createDelegate(data2, onGetListItemsFailed)
    );
  }
  function getListItemsAsync({ fields = null, caml = null }) {
    if (!caml) {
      var caml = '<View Scope="RecursiveAll"><Query><Where><Eq><FieldRef Name="FSObjType"/><Value Type="int">0</Value></Eq></Where></Query></View>';
    }
    return new Promise((resolve, reject2) => {
      getListItems(caml, fields, resolve);
    });
  }
  function findByIdAsync(id2, fields) {
    return new Promise((resolve, reject2) => {
      try {
        findById(id2, fields, resolve);
      } catch (e) {
        reject2(e);
      }
    });
  }
  async function getById(id2, fields) {
    const [queryFields, expandFields] = await getQueryFields(fields);
    const apiEndpoint = `/web/lists/GetByTitle('${self.config.def.title}')/items(${id2})?$Select=${queryFields}&$expand=${expandFields}`;
    const result = await fetchSharePointData(apiEndpoint);
    return result.d;
  }
  async function getListFields() {
    if (!self.config.fieldSchema) {
      const apiEndpoint = `/web/lists/GetByTitle('${self.config.def.title}')/Fields`;
      const fields = await fetchSharePointData(apiEndpoint);
      self.config.fieldSchema = fields.d.results;
    }
    return self.config.fieldSchema;
  }
  async function getQueryFields(fields) {
    const queryFields = [];
    const expandFields = [];
    const listFields = await getListFields();
    fields.map((f) => {
      if (f == "FileRef") {
        queryFields.push(f);
        return;
      }
      if (f.includes("/")) {
        queryFields.push(f);
        expandFields.push(f.split("/")[0]);
        return;
      }
      const fieldSchema = listFields.find((lf) => lf.StaticName == f);
      if (!fieldSchema) {
        alert(`Field '${f}' not found on list ${self.config.def.name}`);
        return;
      }
      const idString = f + "/ID";
      let titleString = f + "/Title";
      switch (fieldSchema.TypeAsString) {
        case "LookupMulti":
        case "Lookup":
          titleString = f + "/" + fieldSchema.LookupField;
        case "User":
          queryFields.push(idString);
          queryFields.push(titleString);
          expandFields.push(f);
          break;
        case "Choice":
        default:
          queryFields.push(f);
      }
    });
    return [queryFields, expandFields];
  }
  async function findByColumnValueAsync(columnFilters, { orderByColumn = null, sortAsc }, { count = null, includePermissions = false, includeFolders = false }, fields) {
    const [queryFields, expandFields] = await getQueryFields(fields);
    if (includePermissions) {
      queryFields.push("RoleAssignments");
      queryFields.push("HasUniqueRoleAssignments");
      expandFields.push("RoleAssignments");
    }
    const orderBy = orderByColumn ? `$orderby=${orderByColumn} ${sortAsc ? "asc" : "desc"}` : "";
    const colFilterArr = [];
    columnFilters.forEach(
      (colFilter) => colFilterArr.push(
        `${colFilter.column} ${colFilter.op ?? "eq"} '${colFilter.value}'`
      )
    );
    if (!includeFolders) colFilterArr.push(`FSObjType eq '0'`);
    const filter = "$filter=(" + colFilterArr.join(`) and (`) + ")";
    const include = "$select=" + queryFields;
    const expand = `$expand=` + expandFields;
    const page = count ? `$top=${count}` : "";
    const apiEndpoint = `/web/lists/GetByTitle('${self.config.def.title}')/items?${include}&${expand}&${orderBy}&${filter}&${page}`;
    const result = await fetchSharePointData(apiEndpoint);
    const cursor = {
      results: result?.d?.results,
      _next: result?.d?.__next
    };
    return cursor;
  }
  async function loadNextPage(cursor) {
    const result = await fetchSharePointData(cursor._next);
    return {
      results: result?.d?.results,
      _next: result?.d?.__next
    };
  }
  function findById(id2, fields, callback) {
    var currCtx = new SP.ClientContext.get_current();
    var web = currCtx.get_web();
    var oList = web.get_lists().getByTitle(self.config.def.title);
    var oListItem = oList.getItemById(id2);
    function onGetListItemSucceeded() {
      const listObj = {};
      fields.forEach((field) => {
        var colVal = oListItem.get_item(field);
        listObj[field] = Array.isArray(colVal) ? colVal.map((val) => mapListItemToObject(val)) : mapListItemToObject(colVal);
      });
      callback(listObj);
    }
    function onGetListItemFailed(sender, args) {
      console.error("SAL: findById - List: " + self.config.def.name);
      console.error("Fields", this);
      console.error(sender, args);
    }
    var data2 = {
      oListItem,
      callback,
      fields
    };
    currCtx.load(oListItem);
    currCtx.executeQueryAsync(
      Function.createDelegate(data2, onGetListItemSucceeded),
      Function.createDelegate(data2, onGetListItemFailed)
    );
  }
  function updateListItemAsync(entity) {
    if (!entity?.ID) {
      return false;
    }
    return new Promise((resolve, reject2) => {
      const currCtx = new SP.ClientContext.get_current();
      const web = currCtx.get_web();
      const oList = web.get_lists().getByTitle(self.config.def.title);
      const oListItem = oList.getItemById(entity.ID);
      const restrictedFields = [
        "ID",
        "Author",
        "Created",
        "Editor",
        "Modified"
      ];
      Object.keys(entity).filter((key) => !restrictedFields.includes(key)).forEach((key) => {
        oListItem.set_item(key, mapObjectToListItem(entity[key]));
      });
      oListItem.update();
      function onUpdateListItemsSucceeded() {
        console.log("Successfully updated " + this.oListItem.get_item("Title"));
        resolve();
      }
      function onUpdateListItemFailed(sender, args) {
        console.error("Update Failed - List: " + self.config.def.name);
        console.error("Item Id", this.oListItem.get_id() ?? "N/A");
        console.error(entity);
        console.error(sender, args);
        reject2(args);
      }
      const data2 = { oListItem, entity, resolve, reject: reject2 };
      currCtx.load(oListItem);
      currCtx.executeQueryAsync(
        Function.createDelegate(data2, onUpdateListItemsSucceeded),
        Function.createDelegate(data2, onUpdateListItemFailed)
      );
    });
  }
  function deleteListItem(id2, callback) {
    var currCtx = new SP.ClientContext.get_current();
    var web = currCtx.get_web();
    var oList = web.get_lists().getByTitle(self.config.def.title);
    var data2 = { callback };
    const oListItem = oList.getItemById(id2);
    oListItem.deleteObject();
    function onDeleteListItemsSucceeded(sender, args) {
      callback();
    }
    function onDeleteListItemsFailed(sender, args) {
      console.error(
        "sal.SPList.deleteListItem: Request on list " + self.config.def.name + " failed, producing the following error: \n " + args.get_message() + "\nStackTrack: \n " + args.get_stackTrace()
      );
    }
    currCtx.executeQueryAsync(
      Function.createDelegate(data2, onDeleteListItemsSucceeded),
      Function.createDelegate(data2, onDeleteListItemsFailed)
    );
  }
  async function deleteListItemAsync(id2) {
    const apiEndpoint = `/web/lists/GetByTitle('${self.config.def.title}')/items(${id2})`;
    return await fetchSharePointData(apiEndpoint, "DELETE", {
      "If-Match": "*"
    });
  }
  async function setItemPermissionsAsync(id2, itemPermissions, reset) {
    const currCtx = new SP.ClientContext.get_current();
    const web = currCtx.get_web();
    const oListItem = await getoListItemByIdAsync(id2);
    return setResourcePermissionsAsync(oListItem, itemPermissions, reset);
  }
  async function setResourcePermissionsAsync(oListItem, itemPermissions, reset) {
    if (reset) {
      oListItem.resetRoleInheritance();
      oListItem.breakRoleInheritance(false, false);
    }
    for (const role of itemPermissions.roles) {
      const ensuredPrincipalResult = await ensureUserByKeyAsync(
        role.principal.Title
      );
      if (!ensuredPrincipalResult) return;
      const currCtx2 = new SP.ClientContext.get_current();
      const web = currCtx2.get_web();
      const oPrincipal = ensuredPrincipalResult.oPrincipal;
      currCtx2.load(oPrincipal);
      role.roleDefs.map((roleDef) => {
        const roleDefBindingColl = SP.RoleDefinitionBindingCollection.newObject(currCtx2);
        roleDefBindingColl.add(
          web.get_roleDefinitions().getByName(roleDef.name)
        );
        oListItem.get_roleAssignments().add(oPrincipal, roleDefBindingColl);
      });
      const data2 = {};
      await executeQuery(currCtx2).catch(({ sender, args }) => {
        console.error(
          `Failed to set role permissions on item id ${id} for principal ${role.principal.Title} ` + args.get_message(),
          args
        );
      });
    }
    if (reset) {
      const currCtx = new SP.ClientContext.get_current();
      oListItem.get_roleAssignments().getByPrincipal(sal.globalConfig.currentUser).deleteObject();
      await executeQuery(currCtx).catch(({ sender, args }) => {
        console.error(
          `Failed to remove role permissions on item id ${id} for Current User ` + args.get_message(),
          args
        );
      });
    }
  }
  function getoListItemByIdAsync(id2) {
    return new Promise((resolve, reject2) => {
      const currCtx = new SP.ClientContext.get_current();
      const web = currCtx.get_web();
      const oList = web.get_lists().getByTitle(self.config.def.title);
      const oListItem = oList.getItemById(id2);
      currCtx.executeQueryAsync(
        () => {
          resolve(oListItem);
        },
        (sender, args) => {
          console.error(
            "Failed to find item: " + id2 + args.get_message(),
            args
          );
          reject2();
        }
      );
    });
  }
  function getItemPermissionsAsync(id2) {
    return new Promise((resolve, reject2) => {
      var currCtx = new SP.ClientContext.get_current();
      var web = currCtx.get_web();
      var oList = web.get_lists().getByTitle(self.config.def.title);
      var camlQuery = new SP.CamlQuery();
      camlQuery.set_viewXml(
        '<View><Query><Where><Eq><FieldRef Name="ID"/><Value Type="Text">' + id2 + "</Value></Eq></Where></Query></View>"
      );
      var oListItems = oList.getItems(camlQuery);
      currCtx.load(
        oListItems,
        "Include(ID, HasUniqueRoleAssignments, RoleAssignments, RoleAssignments.Include(Member, RoleDefinitionBindings))"
      );
      function onQuerySuccess() {
        var listItemEnumerator = oListItems.getEnumerator();
        while (listItemEnumerator.moveNext()) {
          var oListItem = listItemEnumerator.get_current();
          var itemPermissions = new ItemPermissions({
            hasUniqueRoleAssignments: oListItem.get_hasUniqueRoleAssignments(),
            roles: []
          });
          var roleEnumerator = oListItem.get_roleAssignments().getEnumerator();
          while (roleEnumerator.moveNext()) {
            var roleColl = roleEnumerator.get_current();
            const role = Role.fromJsomRole(roleColl);
            itemPermissions.roles.push(role);
          }
          resolve(itemPermissions);
          break;
        }
      }
      function onQueryFailed(sender, args) {
        reject2(args.get_message());
      }
      const data2 = {
        oListItems,
        resolve,
        reject: reject2
      };
      currCtx.executeQueryAsync(
        Function.createDelegate(data2, onQuerySuccess),
        Function.createDelegate(data2, onQueryFailed)
      );
    });
  }
  async function getListPermissions() {
    const url = `/web/lists/getByTitle('${self.config.def.name}')?$select=HasUniqueRoleAssignments,RoleAssignments&$expand=RoleAssignments/Member,RoleAssignments/RoleDefinitionBindings`;
    const headers = {
      "Cache-Control": "no-cache"
    };
    const result = await fetchSharePointData(url, "GET", headers);
    if (!result) return;
    return ItemPermissions.fromRestResult(result.d);
  }
  function getServerRelativeFolderPath(relFolderPath) {
    let builtPath = sal.globalConfig.siteUrl;
    builtPath += self.config.def.isLib ? "/" + self.config.def.name : "/Lists/" + self.config.def.name;
    if (relFolderPath) {
      builtPath += "/" + relFolderPath;
    }
    return builtPath;
  }
  function upsertFolderPathAsync(folderPath) {
    return new Promise(
      (resolve, reject2) => upsertListFolderByPath(folderPath, resolve)
    );
  }
  async function setFolderReadonlyAsync(folderPath) {
    try {
      const currentPerms = await getFolderPermissionsAsync(folderPath);
      const targetPerms = currentPerms.map((user) => {
        return [user.LoginName, sal.config.siteRoles.roles.RestrictedRead];
      });
      await setFolderPermissionsAsync(folderPath, targetPerms, true);
    } catch (e) {
      console.warn(e);
    }
    return;
  }
  async function ensureFolderPermissionsAsync(relFolderPath, targetPerms) {
    const serverRelFolderPath = getServerRelativeFolderPath(relFolderPath);
    const apiEndpoint = sal.globalConfig.siteUrl + `/_api/web/GetFolderByServerRelativeUrl('${serverRelFolderPath}')/ListItemAllFields/RoleAssignments?$expand=Member,Member/Users,RoleDefinitionBindings`;
    const response = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        Accept: "application/json; odata=verbose"
      }
    });
    if (!response.ok) {
      if (response.status == 404) {
        return;
      }
      console.error(response);
    }
    const result = await response.json();
    const permissionResults = result?.d?.results;
    if (!permissionResults) {
      console.warn("No results found", result);
      return;
    }
    const missingPerms = targetPerms.filter((targetPermPair) => {
      const targetLoginName = targetPermPair[0];
      const targetPerm = targetPermPair[1];
      const permExists = permissionResults.find((curPerm) => {
        if (curPerm.Member.LoginName != targetLoginName) {
          if (!curPerm.Member.Users?.results.find(
            (curUser) => curUser.LoginName == targetLoginName
          )) {
            return false;
          }
        }
        if (curPerm.RoleDefinitionBindings.results?.find(
          (curBinding) => sal.config.siteRoles.fulfillsRole(curBinding.Name, targetPerm)
        )) {
          return true;
        }
        return false;
      });
      return !permExists;
    });
    console.log("Adding missing permissions", missingPerms);
    if (missingPerms.length)
      await setFolderPermissionsAsync(relFolderPath, missingPerms, false);
    return;
  }
  function getFolderContentsAsync(relFolderPath, fields) {
    return new Promise((resolve, reject2) => {
      const currCtx = new SP.ClientContext.get_current();
      const web = currCtx.get_web();
      const oList = web.get_lists().getByTitle(self.config.def.title);
      const serverRelFolderPath = getServerRelativeFolderPath(relFolderPath);
      const camlQuery = SP.CamlQuery.createAllItemsQuery();
      camlQuery.set_folderServerRelativeUrl(serverRelFolderPath);
      const allItems = oList.getItems(camlQuery);
      currCtx.load(allItems, `Include(${fields.join(", ")})`);
      currCtx.executeQueryAsync(
        function() {
          const foundObjects = [];
          var listItemEnumerator = allItems.getEnumerator();
          while (listItemEnumerator.moveNext()) {
            var oListItem = listItemEnumerator.get_current();
            var listObj = {};
            fields.forEach((field) => {
              var colVal = oListItem.get_item(field);
              listObj[field] = Array.isArray(colVal) ? colVal.map((val) => mapListItemToObject(val)) : mapListItemToObject(colVal);
            });
            listObj.oListItem = oListItem;
            foundObjects.push(listObj);
          }
          resolve(foundObjects);
        },
        function(sender, args) {
          console.warn("Unable load list folder contents:");
          console.error(sender);
          console.error(args);
          reject2(args);
        }
      );
    });
  }
  async function getFolderPermissionsAsync(relFolderPath) {
    return new Promise(async (resolve, reject2) => {
      const oListItem = await getFolderItemByPath(relFolderPath);
      if (!oListItem) {
        reject2("Folder item does not exist");
        return;
      }
      const roles = oListItem.get_roleAssignments();
      const currCtx = new SP.ClientContext.get_current();
      currCtx.load(oListItem);
      currCtx.load(roles);
      currCtx.executeQueryAsync(
        function() {
          const currCtx2 = new SP.ClientContext.get_current();
          console.log(oListItem);
          const principals = [];
          const bindings = [];
          const roleEnumerator = roles.getEnumerator();
          while (roleEnumerator.moveNext()) {
            const role = roleEnumerator.get_current();
            const principal = role.get_member();
            const bindings2 = role.get_roleDefinitionBindings();
            currCtx2.load(bindings2);
            currCtx2.load(principal);
            principals.push({ principal, bindings: bindings2 });
          }
          currCtx2.executeQueryAsync(
            // success
            function(sender, args) {
              const logins = principals.map(function({ principal, bindings: bindings2 }) {
                const principalRoles = [];
                const bindingEnumerator = bindings2.getEnumerator();
                while (bindingEnumerator.moveNext()) {
                  const binding = bindingEnumerator.get_current();
                  principalRoles.push(binding.get_name());
                }
                return {
                  ID: principal.get_id(),
                  Title: principal.get_title(),
                  LoginName: principal.get_loginName(),
                  Roles: principalRoles
                };
              });
              resolve(logins);
            },
            // failure
            function(sender, args) {
              console.warn("Unable load folder principals permissions:");
              console.error(sender);
              console.error(args);
              reject2(args);
            }
          );
        },
        function(sender, args) {
          console.warn("Unable load folder permissions:");
          console.error(sender);
          console.error(args);
          reject2(args);
        }
      );
    });
  }
  async function getFolderItemByPath(relFolderPath) {
    return new Promise((resolve, reject2) => {
      const currCtx = new SP.ClientContext.get_current();
      const web = currCtx.get_web();
      const oList = web.get_lists().getByTitle(self.config.def.title);
      const camlQuery = SP.CamlQuery.createAllItemsQuery();
      const serverRelFolderPath = getServerRelativeFolderPath(relFolderPath);
      var camlq = '<View Scope="RecursiveAll"><Query><Where><And><Eq><FieldRef Name="FSObjType"/><Value Type="int">1</Value></Eq><Eq><FieldRef Name="FileRef"/><Value Type="Text">' + serverRelFolderPath + "</Value></Eq></And></Where></Query><RowLimit>1</RowLimit></View>";
      camlQuery.set_viewXml(camlq);
      const allFolders = oList.getItems(camlQuery);
      async function onFindItemSucceeded() {
        const foundObjects = [];
        var listItemEnumerator = allFolders.getEnumerator();
        while (listItemEnumerator.moveNext()) {
          const oListItem2 = listItemEnumerator.get_current();
          foundObjects.push(oListItem2);
        }
        if (!foundObjects) {
          console.warn("folder not found");
          resolve(foundObjects);
        }
        if (foundObjects.length > 1) {
          console.warn("Multiple folders found!");
          resolve(foundObjects);
        }
        const oListItem = foundObjects[0];
        resolve(oListItem);
      }
      function onFindItemFailed(sender, args) {
        console.warn("Unable load list folder contents:");
        console.error(sender);
        console.error(args);
        reject2(args);
      }
      const data2 = {
        allFolders,
        resolve,
        reject: reject2
      };
      currCtx.load(allFolders);
      currCtx.executeQueryAsync(
        Function.createDelegate(data2, onFindItemSucceeded),
        Function.createDelegate(data2, onFindItemFailed)
      );
    });
  }
  function upsertListFolderByPath(folderPath, callback) {
    var folderArr = folderPath.split("/");
    var idx = 0;
    var upsertListFolderInner = function(parentPath, folderArr2, idx2, success) {
      var folderName = folderArr2[idx2];
      idx2++;
      var curPath = folderArr2.slice(0, idx2).join("/");
      ensureListFolder(
        curPath,
        function(iFolder) {
          if (idx2 >= folderArr2.length) {
            success(iFolder.get_id());
          } else {
            upsertListFolderInner(curPath, folderArr2, idx2, success);
          }
        },
        function() {
          self.createListFolder(
            folderName,
            function(folderId) {
              if (idx2 >= folderArr2.length) {
                success(folderId);
              } else {
                upsertListFolderInner(curPath, folderArr2, idx2, success);
              }
            },
            parentPath
          );
        }
      );
    };
    upsertListFolderInner("", folderArr, idx, callback);
  }
  self.createListFolder = function(folderName, callback, path) {
    path = path === void 0 ? "" : path;
    const currCtx = new SP.ClientContext.get_current();
    const web = currCtx.get_web();
    const oList = web.get_lists().getByTitle(self.config.def.title);
    let folderUrl = "";
    const itemCreateInfo = new SP.ListItemCreationInformation();
    itemCreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder);
    itemCreateInfo.set_leafName(folderName);
    if (path) {
      folderUrl = sal.globalConfig.siteUrl + "/Lists/" + self.config.def.name + "/" + path;
      itemCreateInfo.set_folderUrl(folderUrl);
    }
    const newItem = oList.addItem(itemCreateInfo);
    newItem.set_item("Title", folderName);
    newItem.update();
    function onCreateFolderSucceeded(sender, args) {
      callback(this.newItem.get_id());
    }
    function onCreateFolderFailed(sender, args) {
      alert(
        "Request on list " + self.config.def.name + " failed, producing the following error: \n" + args.get_message() + "\nStackTrack: \n" + args.get_stackTrace()
      );
    }
    const data2 = {
      folderName,
      callback,
      newItem
    };
    currCtx.load(newItem);
    currCtx.executeQueryAsync(
      Function.createDelegate(data2, onCreateFolderSucceeded),
      Function.createDelegate(data2, onCreateFolderFailed)
    );
  };
  function ensureListFolder(path, onExists, onNonExists) {
    var folderUrl = sal.globalConfig.siteUrl + "/Lists/" + self.config.def.name + "/" + path;
    var ctx = SP.ClientContext.get_current();
    var folder = ctx.get_web().getFolderByServerRelativeUrl(folderUrl);
    folder.get_listItemAllFields();
    var data2 = {
      folder,
      path,
      onExists,
      onNonExists
    };
    ctx.load(folder, "Exists", "Name");
    function onQueryFolderSucceeded() {
      if (folder.get_exists()) {
        let onQueryFolderItemSuccess = function() {
          onExists(folderItem);
        }, onQueryFolderItemFailure = function(sender, args) {
          console.error("Failed to find folder at " + path, args);
        };
        console.log(
          "Folder " + folder.get_name() + " exists in " + self.config.def.name
        );
        var currCtx = new SP.ClientContext.get_current();
        var folderItem = folder.get_listItemAllFields();
        data2 = { folderItem, path, onExists };
        currCtx.load(folderItem);
        currCtx.executeQueryAsync(
          Function.createDelegate(data2, onQueryFolderItemSuccess),
          Function.createDelegate(data2, onQueryFolderItemFailure)
        );
      } else {
        console.warn("Folder exists but is hidden (security-trimmed) for us.");
      }
    }
    function onQueryFolderFailed(sender, args) {
      if (args.get_errorTypeName() === "System.IO.FileNotFoundException") {
        console.log(
          "SAL.SPList.ensureListFolder:           Folder " + path + " does not exist in " + self.config.def.name
        );
        onNonExists();
      } else {
        console.error("Error: " + args.get_message());
      }
    }
    ctx.executeQueryAsync(
      Function.createDelegate(data2, onQueryFolderSucceeded),
      Function.createDelegate(data2, onQueryFolderFailed)
    );
  }
  function setFolderPermissionsAsync(folderPath, valuePairs, reset) {
    return new Promise((resolve, reject2) => {
      setFolderPermissions(folderPath, valuePairs, resolve, reset);
    });
  }
  function setFolderPermissions(relFolderPath, valuePairs, callback, reset) {
    reset = reset === void 0 ? false : reset;
    var users = [];
    var resolvedGroups = [];
    const serverRelFolderPath = getServerRelativeFolderPath(relFolderPath);
    const currCtx = new SP.ClientContext.get_current();
    const web = currCtx.get_web();
    const folder = web.getFolderByServerRelativeUrl(serverRelFolderPath);
    valuePairs.forEach(function(vp) {
      var resolvedGroup = getSPSiteGroupByName(vp[0]);
      if (resolvedGroup?.oGroup) {
        resolvedGroups.push([resolvedGroup.oGroup, vp[1]]);
      } else {
        users.push([currCtx.get_web().ensureUser(vp[0]), vp[1]]);
      }
    });
    function onFindFolderSuccess() {
      var currCtx2 = new SP.ClientContext.get_current();
      var web2 = currCtx2.get_web();
      var folderItem = this.folder.get_listItemAllFields();
      if (reset) {
        folderItem.resetRoleInheritance();
        folderItem.breakRoleInheritance(false, false);
        folderItem.get_roleAssignments().getByPrincipal(sal.globalConfig.currentUser).deleteObject();
      } else {
        folderItem.breakRoleInheritance(false, false);
      }
      this.resolvedGroups.forEach(function(groupPairs) {
        var roleDefBindingColl = SP.RoleDefinitionBindingCollection.newObject(currCtx2);
        roleDefBindingColl.add(
          web2.get_roleDefinitions().getByName(groupPairs[1])
        );
        folderItem.get_roleAssignments().add(groupPairs[0], roleDefBindingColl);
      });
      this.users.forEach(function(userPairs) {
        var roleDefBindingColl = SP.RoleDefinitionBindingCollection.newObject(currCtx2);
        roleDefBindingColl.add(
          web2.get_roleDefinitions().getByName(userPairs[1])
        );
        folderItem.get_roleAssignments().add(userPairs[0], roleDefBindingColl);
      });
      var data3 = { folderItem, callback };
      function onSetFolderPermissionsSuccess() {
        console.log("Successfully set permissions");
        this.callback(folderItem);
      }
      function onSetFolderPermissionsFailure(sender, args) {
        console.error(
          "Failed to update permissions on item: " + this.folderItem.get_lookupValue() + args.get_message() + "\n" + args.get_stackTrace(),
          false
        );
      }
      currCtx2.load(folderItem);
      currCtx2.executeQueryAsync(
        Function.createDelegate(data3, onSetFolderPermissionsSuccess),
        Function.createDelegate(data3, onSetFolderPermissionsFailure)
      );
    }
    function onFindFolderFailure(sender, args) {
      console.error(
        "Something went wrong setting perms on library folder",
        args
      );
    }
    var data2 = {
      folder,
      users,
      callback,
      resolvedGroups,
      valuePairs,
      reset
    };
    users.map(function(user) {
      currCtx.load(user[0]);
    });
    currCtx.load(folder);
    currCtx.executeQueryAsync(
      Function.createDelegate(data2, onFindFolderSuccess),
      Function.createDelegate(data2, onFindFolderFailure)
    );
  }
  function showModal2(formName, title, args, callback) {
    var id2 = "";
    if (args.id) {
      id2 = args.id;
    }
    const options = SP.UI.$create_DialogOptions();
    var listPath = self.config.def.isLib ? "/" + self.config.def.name + "/" : "/Lists/" + self.config.def.name + "/";
    var rootFolder = "";
    if (args.rootFolder) {
      rootFolder = sal.globalConfig.siteUrl + listPath + args.rootFolder;
    }
    var formsPath = self.config.def.isLib ? "/" + self.config.def.name + "/forms/" : "/Lists/" + self.config.def.name + "/";
    Object.assign(options, {
      title,
      dialogReturnValueCallback: callback,
      args: JSON.stringify(args),
      height: 800,
      url: sal.globalConfig.siteUrl + formsPath + formName + "?ID=" + id2 + "&Source=" + location.pathname + "&RootFolder=" + rootFolder
    });
    SP.UI.ModalDialog.showModalDialog(options);
  }
  function showCheckinModal(fileRef, callback) {
    var options = SP.UI.$create_DialogOptions();
    options.title = "Check in Document";
    options.height = "600";
    options.dialogReturnValueCallback = callback;
    options.url = sal.globalConfig.siteUrl + "/_layouts/checkin.aspx?List={" + self.config.guid + "}&FileName=" + fileRef;
    SP.UI.ModalDialog.showModalDialog(options);
  }
  function checkinWithComment(fileRef, comment) {
    const url = `/web/GetFileByServerRelativeUrl('${fileRef}')/CheckIn(comment='${comment}',checkintype=0)`;
    return fetchSharePointData(url, "POST");
  }
  function showVersionHistoryModal(itemId) {
    return new Promise((resolve) => {
      var options = SP.UI.$create_DialogOptions();
      options.title = "Version History";
      options.height = "600";
      options.dialogReturnValueCallback = resolve;
      options.url = getVersionHistoryUrl(itemId);
      SP.UI.ModalDialog.showModalDialog(options);
    });
  }
  function getVersionHistoryUrl(itemId) {
    return sal.globalConfig.siteUrl + "/_layouts/15/versions.aspx?List={" + self.config.guid + "}&ID=" + itemId;
  }
  function uploadNewDocumentAsync(folderPath, title, args) {
    return new Promise((resolve, reject2) => {
      const currCtx = new SP.ClientContext.get_current();
      const web = currCtx.get_web();
      const oList = web.get_lists().getByTitle(self.config.def.title);
      currCtx.load(oList);
      currCtx.executeQueryAsync(
        function() {
          var siteString = sal.globalConfig.siteUrl == "/" ? "" : sal.globalConfig.siteUrl;
          const options = SP.UI.$create_DialogOptions();
          Object.assign(options, {
            title,
            dialogReturnValueCallback: resolve,
            args: JSON.stringify(args),
            url: siteString + "/_layouts/Upload.aspx?List=" + oList.get_id().toString() + "&RootFolder=" + siteString + "/" + self.config.def.name + "/" + encodeURI(folderPath) + "&Source=" + location.pathname + "&args=" + encodeURI(JSON.stringify(args))
          });
          SP.UI.ModalDialog.showModalDialog(options);
        },
        function(sender, args2) {
          console.error("Error showing file modal: ");
          console.error(sender);
          console.error(args2);
        }
      );
    });
  }
  const UPLOADCHUNKSIZE = 10485760;
  const uploadchunkActionTypes = {
    start: "startupload",
    continue: "continueupload",
    finish: "finishupload"
  };
  async function uploadFileRestChunking(file, relFolderPath, fileName, progress) {
    const blob = file;
    const chunkSize = UPLOADCHUNKSIZE;
    const fileSize = file.size;
    const totalBlocks = parseInt((fileSize / chunkSize).toString(), 10) + (fileSize % chunkSize === 0 ? 1 : 0);
    const fileRef = relFolderPath + "/" + fileName;
    const jobGuid = getGUID();
    let currentPointer;
    progress({ currentBlock: 0, totalBlocks });
    currentPointer = await startUpload(
      jobGuid,
      file.slice(0, chunkSize),
      fileRef,
      relFolderPath
    );
    for (let i = 2; i < totalBlocks; i++) {
      progress({ currentBlock: i, totalBlocks });
      currentPointer = await continueUpload(
        jobGuid,
        file.slice(currentPointer, currentPointer + chunkSize),
        currentPointer,
        fileRef
      );
    }
    progress({ currentBlock: totalBlocks - 1, totalBlocks });
    const result = await finishUpload(
      jobGuid,
      file.slice(currentPointer),
      currentPointer,
      fileRef
    );
    progress({ currentBlock: totalBlocks, totalBlocks });
    return result;
  }
  async function startUpload(uploadId, chunk, fileRef, relFolderPath) {
    const url = `/web/getFolderByServerRelativeUrl(@folder)/files/getByUrlOrAddStub(@file)/StartUpload(guid'${uploadId}')?&@folder='${relFolderPath}'&@file='${fileRef}'`;
    const headers = {
      "Content-Type": "application/octet-stream"
    };
    const opts = {
      body: chunk
    };
    const result = await fetchSharePointData(url, "POST", headers, opts);
    if (!result) {
      console.error("Error starting upload!");
      return;
    }
    return parseFloat(result.d.StartUpload);
  }
  async function continueUpload(uploadId, chunk, fileOffset, fileRef) {
    const url = `/web/getFileByServerRelativeUrl(@file)/ContinueUpload(uploadId=guid'${uploadId}',fileOffset=${fileOffset})?&@file='${fileRef}'`;
    const headers = {
      "Content-Type": "application/octet-stream"
    };
    const opts = {
      body: chunk
    };
    const result = await fetchSharePointData(url, "POST", headers, opts);
    if (!result) {
      console.error("Error starting upload!");
      return;
    }
    return parseFloat(result.d.ContinueUpload);
  }
  async function finishUpload(uploadId, chunk, fileOffset, fileRef) {
    const url = `/web/getFileByServerRelativeUrl(@file)/FinishUpload(uploadId=guid'${uploadId}',fileOffset=${fileOffset})?&@file='${fileRef}'`;
    const headers = {
      "Content-Type": "application/octet-stream"
    };
    const opts = {
      body: chunk
    };
    const result = await fetchSharePointData(url, "POST", headers, opts);
    if (!result) {
      console.error("Error starting upload!");
      return;
    }
    return result;
  }
  async function uploadFileRest(file, relFolderPath, fileName) {
    return await fetch(
      window.context.pageContext.legacyPageContext.webServerRelativeUrl + `/_api/web/GetFolderByServerRelativeUrl('${relFolderPath}')/Files/add(url='${fileName}',overwrite=true)`,
      {
        method: "POST",
        credentials: "same-origin",
        body: file,
        headers: {
          Accept: "application/json; odata=verbose",
          "Content-Type": "application/json;odata=nometadata",
          "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value
        }
      }
    ).then((response) => {
      if (!response.ok) {
        console.error("Error Uploading File", response);
        return;
      }
      return response.json();
    });
  }
  async function uploadFileToFolderAndUpdateMetadata(file, fileName, relFolderPath, payload, progress = null) {
    if (!progress) {
      progress = () => {
      };
    }
    const serverRelFolderPath = getServerRelativeFolderPath(relFolderPath);
    let result = null;
    if (file.size > UPLOADCHUNKSIZE) {
      const job = () => uploadFileRestChunking(file, serverRelFolderPath, fileName, progress);
      result = await uploadQueue.addJob(job);
    } else {
      progress({ currentBlock: 0, totalBlocks: 1 });
      result = await uploadFileRest(file, serverRelFolderPath, fileName);
      progress({ currentBlock: 1, totalBlocks: 1 });
    }
    await updateUploadedFileMetadata(result.d, payload);
    await checkinWithComment(serverRelFolderPath + "/" + fileName, "");
    let itemUri = result.d.ListItemAllFields.__deferred.uri + "?$select=ID";
    const listItem = await fetchSharePointData(itemUri);
    return listItem.d.ID;
  }
  async function updateUploadedFileMetadata(fileResult, payload) {
    var result = await fetch(fileResult.ListItemAllFields.__deferred.uri, {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json; odata=nometadata",
        "Content-Type": "application/json;odata=nometadata",
        "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
        "X-HTTP-Method": "MERGE",
        "If-Match": "*"
      }
    }).then((response) => {
      if (!response.ok) {
        console.error("Error Updating File", response);
        return;
      }
      return response;
    });
    return result;
  }
  function copyFiles(sourceFolderPath, destFolderPath, callback, onError) {
    const sourcePath = getServerRelativeFolderPath(sourceFolderPath);
    const destPath = getServerRelativeFolderPath(destFolderPath);
    var context = new SP.ClientContext.get_current();
    var web = context.get_web();
    var folderSrc = web.getFolderByServerRelativeUrl(sourcePath);
    context.load(folderSrc, "Files");
    context.executeQueryAsync(
      function() {
        var files = folderSrc.get_files();
        var e = files.getEnumerator();
        var dest = [];
        while (e.moveNext()) {
          var file = e.get_current();
          var destLibUrl = destPath + "/" + file.get_name();
          dest.push(destLibUrl);
          file.copyTo(destLibUrl, true);
        }
        console.log(dest);
        context.executeQueryAsync(
          function() {
            console.log("Files moved successfully!");
            callback();
          },
          function(sender, args) {
            console.log("error: ") + args.get_message();
            onError;
          }
        );
      },
      function(sender, args) {
        console.error("Unable to copy files: ", args.get_message());
        console.error(sender);
        console.error(args);
        reject(args);
      }
    );
  }
  function copyFilesAsync(sourceFolder, destFolder) {
    return new Promise((resolve, reject2) => {
      copyFiles(sourceFolder, destFolder, resolve, reject2);
    });
  }
  async function ensureList() {
    const listInfo = await fetchSharePointData(
      `/web/lists/GetByTitle('${self.config.def.title}')`
    );
  }
  const publicMembers = {
    findByIdAsync,
    getById,
    findByColumnValueAsync,
    loadNextPage,
    getListItemsAsync,
    createListItemAsync,
    updateListItemAsync,
    deleteListItemAsync,
    setItemPermissionsAsync,
    getItemPermissionsAsync,
    getListPermissions,
    setListPermissionsAsync,
    getFolderContentsAsync,
    upsertFolderPathAsync,
    getServerRelativeFolderPath,
    setFolderReadonlyAsync,
    setFolderPermissionsAsync,
    ensureFolderPermissionsAsync,
    uploadFileToFolderAndUpdateMetadata,
    uploadNewDocumentAsync,
    copyFilesAsync,
    showModal: showModal2,
    showCheckinModal,
    showVersionHistoryModal,
    getVersionHistoryUrl
  };
  return publicMembers;
}
async function fetchSharePointData(uri, method = "GET", headers = {}, opts = {}) {
  const siteEndpoint = uri.startsWith("http") ? uri : window.context.pageContext.legacyPageContext.webServerRelativeUrl + "/_api" + uri;
  const response = await fetch(siteEndpoint, {
    method,
    headers: {
      Accept: "application/json; odata=verbose",
      "X-RequestDigest": requestDigest,
      ...headers
    },
    ...opts
  });
  if (!response.ok) {
    if (response.status == 404) {
      return;
    }
    console.error(response);
  }
  try {
    const result = await response.json();
    return result;
  } catch (e) {
    return;
  }
}
async function getRequestDigest() {
  const response = await fetch(sal.globalConfig.siteUrl + "/_api/contextinfo", {
    method: "POST",
    headers: {
      Accept: "application/json; odata=verbose"
    }
  });
  if (!response.ok) {
    console.error("Cannot refresh token", response);
    return;
  }
  const result = await response.json();
  return result.d.GetContextWebInformation;
}
async function refreshDigestValue() {
  const result = await getRequestDigest();
  if (!result) return;
  requestDigest = result;
  window.setTimeout(refreshDigestValue, result.FormDigestTimeoutSeconds * 900);
}
function getGUID() {
  if (crypto.randomUUID) return crypto.randomUUID();
  let d = Date.now();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
}
var sal, siteGroups, ItemPermissions, Role, RoleDef, requestDigest, JobProcessor, uploadQueue;
var init_sal = __esm({
  "src/sal/infrastructure/sal.js"() {
    window.console = window.console || { log: function() {
    } };
    window.sal = window.sal ?? {};
    sal = window.sal;
    sal.globalConfig = sal.globalConfig || {
      siteGroups: [],
      siteUrl: "",
      listServices: "",
      defaultGroups: {}
    };
    sal.site = sal.site || {};
    window.DEBUG = true;
    siteGroups = {};
    sal.NewAppConfig = function() {
      var siteRoles = {};
      siteRoles.roles = {
        FullControl: "Full Control",
        Design: "Design",
        Edit: "Edit",
        Contribute: "Contribute",
        RestrictedContribute: "Restricted Contribute",
        InitialCreate: "Initial Create",
        Read: "Read",
        RestrictedRead: "Restricted Read",
        LimitedAccess: "Limited Access"
      };
      siteRoles.fulfillsRole = function(inputRole, targetRole) {
        const roles = Object.values(siteRoles.roles);
        if (!roles.includes(inputRole) || !roles.includes(targetRole)) return false;
        return roles.indexOf(inputRole) <= roles.indexOf(targetRole);
      };
      siteRoles.validate = function() {
        Object.keys(siteRoles.roles).forEach(function(role) {
          var roleName = siteRoles.roles[role];
          if (!sal.globalConfig.roles.includes(roleName)) {
            console.error(roleName + " is not in the global roles list");
          } else {
            console.log(roleName);
          }
        });
      };
      var siteGroups2 = {
        groups: {
          Owners: "workorder Owners",
          Members: "workorder Members",
          Visitors: "workorder Visitors",
          RestrictedReaders: "Restricted Readers"
        }
      };
      var publicMembers = {
        siteRoles,
        siteGroups: siteGroups2
      };
      return publicMembers;
    };
    sal.NewUtilities = function() {
      function createSiteGroup(groupName, permissions, callback) {
        callback = callback === void 0 ? null : callback;
        var currCtx = new SP.ClientContext.get_current();
        var web = currCtx.get_web();
        var groupCreationInfo = new SP.GroupCreationInformation();
        groupCreationInfo.set_title(groupName);
        this.oGroup = oWebsite.get_siteGroups().add(groupCreationInfo);
        oGroup.set_owner(oWebsite.get_associatedOwnerGroup());
        oGroup.update();
        var collRoleDefinitionBinding = SP.RoleDefinitionBindingCollection.newObject(clientContext);
        this.oRoleDefinitions = [];
        permissions.forEach(function(perm) {
          var oRoleDefinition2 = oWebsite.get_roleDefinitions().getByName(perm);
          this.oRoleDefinitions.push(oRoleDefinition2);
          collRoleDefinitionBinding.add(oRoleDefinition2);
        });
        var collRollAssignment = oWebsite.get_roleAssignments();
        collRollAssignment.add(oGroup, collRoleDefinitionBinding);
        function onCreateGroupSucceeded() {
          var roleInfo = oGroup.get_title() + " created and assigned to " + oRoleDefinitions.forEach(function(rd) {
            rd + ", ";
          });
          if (callback) {
            callback(oGroup.get_id());
          }
          console.log(roleInfo);
        }
        function onCreateGroupFailed(sender, args) {
          alert(
            groupnName + " - Create group failed. " + args.get_message() + "\n" + args.get_stackTrace()
          );
        }
        clientContext.load(oGroup, "Title");
        var data2 = {
          groupName,
          oGroup,
          oRoleDefinition,
          callback
        };
        clientContext.executeQueryAsync(
          Function.createDelegate(data2, onCreateGroupSucceeded),
          Function.createDelegate(data2, onCreateGroupFailed)
        );
      }
      function getUserGroups(user, callback) {
        var currCtx = new SP.ClientContext.get_current();
        var web = currCtx.get_web();
        var everyone = web.ensureUser(user);
        var oGroups = everyone.get_groups();
        function onQueryGroupsSucceeded() {
          var groups = new Array();
          var groupsInfo = new String();
          var groupsEnumerator = oGroups.getEnumerator();
          while (groupsEnumerator.moveNext()) {
            var oGroup2 = groupsEnumerator.get_current();
            var group = principalToPeople(oGroup2);
            groupsInfo += "\nGroup ID: " + oGroup2.get_id() + ", Title : " + oGroup2.get_title();
            groups.push(group);
          }
          console.log(groupsInfo.toString());
          callback(groups);
        }
        function onQueryGroupsFailed(sender, args) {
          console.error(
            " Everyone - Query Everyone group failed. " + args.get_message() + "\n" + args.get_stackTrace()
          );
        }
        currCtx.load(everyone);
        currCtx.load(oGroups);
        data = { everyone, oGroups, callback };
        currCtx.executeQueryAsync(
          Function.createDelegate(data, onQueryGroupsSucceeded),
          Function.createDelegate(data, onQueryGroupsFailed)
        );
      }
      function getUsersWithGroup(oGroup2, callback) {
        var context = new SP.ClientContext.get_current();
        var oUsers = oGroup2.get_users();
        function onGetUserSuccess() {
          var userObjs = [];
          var userEnumerator = oUsers.getEnumerator();
          while (userEnumerator.moveNext()) {
            var oUser = userEnumerator.get_current();
            var userObj = principalToPeople(oUser);
            userObjs.push(userObj);
          }
          callback(userObjs);
        }
        function onGetUserFailed(sender, args) {
        }
        var data2 = { oUsers, callback };
        context.load(oUsers);
        context.executeQueryAsync(
          Function.createDelegate(data2, onGetUserSuccess),
          Function.createDelegate(data2, onGetUserFailed)
        );
      }
      function copyFiles(sourceLib, destLib, callback, onError) {
        var context = new SP.ClientContext.get_current();
        var web = context.get_web();
        var folderSrc = web.getFolderByServerRelativeUrl(sourceLib);
        context.load(folderSrc, "Files");
        context.executeQueryAsync(
          function() {
            console.log("Got the source folder right here!");
            var files = folderSrc.get_files();
            var e = files.getEnumerator();
            var dest = [];
            while (e.moveNext()) {
              var file = e.get_current();
              var destLibUrl = destLib + "/" + file.get_name();
              dest.push(destLibUrl);
              file.copyTo(destLibUrl, true);
            }
            console.log(dest);
            context.executeQueryAsync(
              function() {
                console.log("Files moved successfully!");
                callback();
              },
              function(sender, args) {
                console.log("error: ") + args.get_message();
                onError;
              }
            );
          },
          function(sender, args) {
            console.log("Sorry, something messed up: " + args.get_message());
          }
        );
      }
      function copyFilesAsync(sourceFolder, destFolder) {
        return new Promise((resolve, reject2) => {
          copyFiles(sourceFolder, destFolder, resolve, reject2);
        });
      }
      var publicMembers = {
        copyFiles,
        copyFilesAsync,
        createSiteGroup,
        getUserGroups,
        getUsersWithGroup
      };
      return publicMembers;
    };
    ItemPermissions = class _ItemPermissions {
      constructor({ hasUniqueRoleAssignments, roles }) {
        this.hasUniqueRoleAssignments = hasUniqueRoleAssignments;
        this.roles = roles;
      }
      hasUniqueRoleAssignments;
      roles = [];
      addPrincipalRole(principal, roleName) {
        const newRoleDef = new RoleDef({ name: roleName });
        const principalRole = this.getPrincipalRole(principal);
        if (principalRole) {
          principalRole.addRoleDef(newRoleDef);
          return;
        }
        const newRole = new Role({ principal });
        newRole.addRoleDef(newRoleDef);
        this.roles.push(newRole);
      }
      getPrincipalRole(principal) {
        return this.roles.find((role) => role.principal.ID == principal.ID);
      }
      principalHasPermissionKind(principal, permission) {
        const role = this.getPrincipalRole(principal);
        return role?.roleDefs.find(
          (roleDef) => roleDef.basePermissions?.has(permission)
        ) ? true : false;
      }
      getValuePairs() {
        return this.roles.flatMap(
          (role) => role.roleDefs.map((roleDef) => [role.principal.Title, roleDef.name])
        );
      }
      static fromRestResult(result) {
        const roles = result.RoleAssignments.results.map(
          Role.fromRestRoleAssignment
        );
        return new _ItemPermissions({
          hasUniqueRoleAssignments: result.HasUniqueRoleAssignments,
          roles
        });
      }
    };
    Role = class _Role {
      constructor({ principal, roleDefs = [] }) {
        this.principal = principal;
        this.roleDefs = roleDefs;
      }
      principal;
      // People Entity
      roleDefs = [];
      addRoleDef(roleDef) {
        this.roleDefs.push(roleDef);
      }
      static fromRestRoleAssignment(role) {
        return new _Role({
          principal: { ...role.Member, ID: role.Member.Id },
          roleDefs: role.RoleDefinitionBindings.results.map(
            RoleDef.fromRestRoleDef
          )
        });
      }
      static fromJsomRole(role) {
        const newRole = new _Role({
          principal: principalToPeople(role.get_member())
        });
        var roleDefs = role.get_roleDefinitionBindings();
        if (roleDefs != null) {
          var roleDefsEnumerator = roleDefs.getEnumerator();
          while (roleDefsEnumerator.moveNext()) {
            var roleDef = roleDefsEnumerator.get_current();
            newRole.roleDefs.push(RoleDef.fromJsomRoleDef(roleDef));
          }
        }
        return newRole;
      }
    };
    RoleDef = class _RoleDef {
      constructor({ name, basePermissions = null }) {
        this.name = name;
        this.basePermissions = basePermissions;
      }
      name;
      basePermissions;
      static fromRestRoleDef(roleDef) {
        const newRoleDef = new _RoleDef({
          name: roleDef.Name,
          basePermissions: roleDef.BasePermissions
        });
        Object.assign(newRoleDef, roleDef);
        return newRoleDef;
      }
      static fromJsomRoleDef(roleDef) {
        const newRoleDef = new _RoleDef({ name: roleDef.get_name() });
        newRoleDef.basePermissions = roleDef.get_basePermissions();
        return newRoleDef;
      }
    };
    refreshDigestValue();
    window.fetchSharePointData = fetchSharePointData;
    JobProcessor = class {
      constructor(maxConcurrency) {
        this.maxConcurrency = maxConcurrency;
        this.runningJobs = 0;
        this.queue = [];
      }
      addJob(asyncFunction) {
        return new Promise((resolve, reject2) => {
          const job = async () => {
            try {
              const result = await asyncFunction();
              resolve(result);
            } catch (error) {
              reject2(error);
            } finally {
              this.runningJobs--;
              this.processQueue();
            }
          };
          this.queue.push(job);
          this.processQueue();
        });
      }
      processQueue() {
        while (this.runningJobs < this.maxConcurrency && this.queue.length > 0) {
          const job = this.queue.shift();
          this.runningJobs++;
          job();
        }
      }
    };
    uploadQueue = new JobProcessor(5);
  }
});

// src/sal/infrastructure/authorization.js
async function getUsersByGroupName(groupName) {
  const users = await getGroupUsers(groupName);
  if (!users) return [];
  return users.map((userProps) => new People(userProps));
}
var init_authorization = __esm({
  "src/sal/infrastructure/authorization.js"() {
    init_sal();
  }
});

// src/sal/infrastructure/index.js
var init_infrastructure = __esm({
  "src/sal/infrastructure/index.js"() {
    init_entity_utilities();
    init_knockout_extensions();
    init_register_components();
    init_sal();
    init_authorization();
  }
});

// src/sal/fields/PeopleField.js
var ko18, PeopleField;
var init_PeopleField = __esm({
  "src/sal/fields/PeopleField.js"() {
    ko18 = __toESM(require_knockout_latest());
    init_infrastructure();
    init_PeopleModule();
    init_People();
    init_infrastructure();
    init_sal();
    init_fields2();
    PeopleField = class extends BaseField {
      constructor(params) {
        super(params);
        this.spGroupName = params.spGroupName ?? null;
        this.multiple = params.multiple ?? false;
        this.Value = this.multiple ? ko18.observableArray() : ko18.observable();
        if (ko18.isObservable(this.spGroupName)) {
          this.spGroupName.subscribe(this.spGroupNameChangedHandler);
        }
        if (ko18.unwrap(this.spGroupName)) {
          this.spGroupNameChangedHandler(ko18.unwrap(this.spGroupName));
        }
      }
      spGroupId = ko18.observable();
      userOpts = ko18.observableArray();
      expandUsers = ko18.observable(false);
      spGroupNameChangedHandler = async (groupName) => {
        if (!groupName) {
          this.userOpts.removeAll();
          this.spGroupId(null);
        }
        const group = await ensureUserByKeyAsync(groupName);
        this.spGroupId(group.ID);
        const users = await getUsersByGroupName(groupName);
        this.userOpts(users.sort(sortByTitle));
      };
      pickerOptions = ko18.pureComputed(() => {
        const groupId = ko18.unwrap(this.spGroupId);
        const opts = {
          AllowMultipleValues: this.multiple
        };
        if (groupId) opts.SharePointGroupID = groupId;
        return opts;
      });
      toString = ko18.pureComputed(() => {
        if (!this.multiple) return this.Value()?.Title;
        return this.Value()?.map((user) => user.Title);
      });
      set = (val) => {
        if (!this.multiple) {
          this.Value(People2.Create(val));
          return;
        }
        if (!val) {
          this.Value.removeAll();
          return;
        }
        const vals = val.results ?? val;
        if (!vals.length) {
          this.Value.removeAll();
          return;
        }
        this.Value(vals.map((u) => People2.Create(u)));
      };
      components = PeopleModule;
    };
  }
});

// src/sal/fields/SelectField.js
var ko19, SelectField;
var init_SelectField = __esm({
  "src/sal/fields/SelectField.js"() {
    ko19 = __toESM(require_knockout_latest());
    init_fields();
    init_fields2();
    SelectField = class extends BaseField {
      constructor({
        displayName,
        isRequired = false,
        Visible,
        options,
        multiple = false,
        optionsText,
        instructions
      }) {
        super({ Visible, displayName, isRequired, instructions });
        this.Options(options);
        this.multiple = multiple;
        this.Value = multiple ? ko19.observableArray() : ko19.observable();
        this.optionsText = optionsText;
        this.components = this.multiple ? SearchSelectModule : SelectModule;
      }
      toString = ko19.pureComputed(
        () => this.multiple ? this.Value().join(", ") : this.Value()
      );
      get = () => this.Value();
      set = (val) => {
        if (val && this.multiple) {
          if (Array.isArray(val)) {
            this.Value(val);
          } else {
            this.Value(val.results ?? val.split(";#"));
          }
          return;
        }
        this.Value(val);
      };
      Options = ko19.observableArray();
    };
  }
});

// src/sal/fields/TextAreaField.js
var TextAreaField;
var init_TextAreaField = __esm({
  "src/sal/fields/TextAreaField.js"() {
    init_fields();
    init_fields2();
    TextAreaField = class extends BaseField {
      constructor(params) {
        super(params);
        this.isRichText = params.isRichText;
        this.attr = params.attr ?? {};
      }
      components = TextAreaModule;
    };
  }
});

// src/sal/fields/TextField.js
var TextField;
var init_TextField = __esm({
  "src/sal/fields/TextField.js"() {
    init_fields();
    init_fields2();
    TextField = class extends BaseField {
      constructor(params) {
        super(params);
        this.attr = params.attr ?? {};
        this.options = params.options ?? null;
      }
      components = TextModule;
    };
  }
});

// src/sal/fields/index.js
var init_fields2 = __esm({
  "src/sal/fields/index.js"() {
    init_BaseField();
    init_BlobField();
    init_CheckboxField();
    init_DateField();
    init_LookupField();
    init_PeopleField();
    init_SelectField();
    init_TextAreaField();
    init_TextField();
  }
});

// src/sal/primitives/constrained_entity.js
var ko20, ConstrainedEntity;
var init_constrained_entity = __esm({
  "src/sal/primitives/constrained_entity.js"() {
    ko20 = __toESM(require_knockout_latest());
    init_primitives();
    init_fields2();
    ConstrainedEntity = class extends Entity {
      constructor(params) {
        super(params);
      }
      toJSON = () => {
        const out = {};
        Object.keys(this.FieldMap).map(
          (key) => out[key] = this.FieldMap[key]?.get()
        );
        return out;
      };
      fromJSON(inputObj) {
        if (window.DEBUG)
          console.log("Setting constrained entity from JSON", inputObj);
        Object.keys(inputObj).map((key) => this.FieldMap[key]?.set(inputObj[key]));
      }
      get FieldMap() {
        const fieldMap = {};
        Object.entries(this).filter(([key, val]) => val instanceof BaseField).map(([key, val]) => {
          key = val.systemName ?? key;
          fieldMap[key] = val;
        });
        return fieldMap;
      }
      FormFields = () => Object.values(this.FieldMap);
      // Validate the entire entity
      validate = (showErrors = true) => {
        Object.values(this.FieldMap).map(
          (field) => field?.validate && field.validate(showErrors)
        );
        return this.Errors();
      };
      Errors = ko20.pureComputed(() => {
        return Object.values(this.FieldMap).filter((field) => field?.Errors && field.Errors()).flatMap((field) => field.Errors());
      });
      IsValid = ko20.pureComputed(() => !this.Errors().length);
      /**
       * Expose methods to generate default new, edit, and view forms
       * for a constrained entity. Uses the constrained
       * entity components.
       *
       * This could be broken into a separate service, but since it's
       * tightly coupled leave it here?
       */
      // static components = {
      //   new: (entity, view = null) =>
      //     new ConstrainedEntityComponent({
      //       entityView: new ConstrainedEntityView({ entity, view }),
      //       displayMode: "edit",
      //     }),
      //   edit: (entity, view = null) =>
      //     new ConstrainedEntityComponent({
      //       entityView: new ConstrainedEntityView({ entity, view }),
      //       displayMode: "edit",
      //     }),
      //   view: (entity, view = null) =>
      //     new ConstrainedEntityComponent({
      //       entityView: new ConstrainedEntityView({ entity, view }),
      //       displayMode: "view",
      //     }),
      // };
    };
  }
});

// src/entities/audit_coversheet.js
var ko21, AuditCoversheet;
var init_audit_coversheet = __esm({
  "src/entities/audit_coversheet.js"() {
    ko21 = __toESM(require_knockout_latest());
    init_entities2();
    init_store();
    init_constrained_entity();
    init_fields2();
    init_application_db_context();
    AuditCoversheet = class extends ConstrainedEntity {
      constructor(params) {
        super(params);
      }
      Title = new TextField({
        displayName: "Title",
        required: true
      });
      FileName = new TextField({
        displayName: "Name",
        systemName: "FileLeafRef",
        required: true
      });
      FileRef = new TextField({
        displayName: "File Link",
        systemName: "FileRef"
      });
      ReqNum = new LookupField({
        displayName: "Request Number",
        type: AuditRequest,
        lookupCol: "Title",
        required: true,
        entitySet: appContext.AuditRequests
      });
      ActionOffice = new LookupField({
        displayName: "Action Offices",
        type: AuditOrganization,
        options: auditOrganizationStore,
        optionsFilter: ko21.pureComputed(() => {
          const request2 = ko21.unwrap(this.ReqNum.Value);
          if (!request2) return (val) => val;
          const requestActionOffices = ko21.unwrap(request2.ActionOffice.Value);
          return (opt) => requestActionOffices.includes(opt);
        }),
        lookupCol: "Title",
        multiple: true,
        entitySet: appContext.AuditOrganizations
      });
      static Views = {
        All: ["ID", "Title", "FileLeafRef", "FileRef", "ReqNum", "ActionOffice"],
        AOCanUpdate: ["Title", "FileLeafRef", "ActionOffice"]
      };
      static ListDef = {
        title: "AuditCoversheets",
        name: "AuditCoversheets",
        isLib: true
      };
    };
  }
});

// src/entities/audit_email.js
var AuditEmail;
var init_audit_email = __esm({
  "src/entities/audit_email.js"() {
    init_constrained_entity();
    AuditEmail = class extends ConstrainedEntity {
      constructor(params) {
        super(params);
      }
      static Views = {
        All: ["ID", "Title", "To", "Body", "NotificationType", "ReqNum", "ResID"]
      };
      static ListDef = {
        name: "AuditEmails",
        title: "AuditEmails"
      };
    };
  }
});

// src/entities/audit_organization.js
var ORGROLES, AuditOrganization;
var init_audit_organization = __esm({
  "src/entities/audit_organization.js"() {
    init_constrained_entity();
    ORGROLES = {
      ACTIONOFFICE: "Action Office",
      REQUESTINGOFFICE: "Requesting Office",
      QUALITYASSURANCE: "Quality Assurance",
      SPECIALPERMISSIONS: "Special Permissions",
      RESTRICTEDREADERS: "Restricted Readers"
    };
    AuditOrganization = class extends ConstrainedEntity {
      constructor(params) {
        super(params);
      }
      static Views = {
        All: [
          "ID",
          "Title",
          "Country",
          "Organization_x0020_Description",
          "EmailGroup",
          "Org_Type",
          "Post_x0020_Code",
          "UserGroup",
          "Role"
        ]
      };
      static ListDef = {
        name: "AuditOrganizations",
        title: "AuditOrganizations"
      };
    };
  }
});

// src/entities/audit_request.js
var ko22, AUDITREQUESTSTATES, AUDITREQUESTTYPES, getRequestDefaultReminders, AuditRequest;
var init_audit_request = __esm({
  "src/entities/audit_request.js"() {
    ko22 = __toESM(require_knockout_latest());
    init_audit_organization();
    init_fields2();
    init_primitives();
    init_validation_error();
    init_store();
    init_application_db_context();
    AUDITREQUESTSTATES = {
      OPEN: "Open",
      CANCELLED: "Canceled",
      CLOSED: "Closed",
      REOPENED: "ReOpened"
    };
    AUDITREQUESTTYPES = {
      TASKER: "Tasker",
      REQUEST: "Request"
    };
    getRequestDefaultReminders = () => {
      let reminders = [
        "3 Days Before Due",
        "1 Day Before Due",
        "1 Day Past Due",
        "3 Days Past Due",
        "7 Days Past Due",
        "7 Days Recurring"
      ];
      const remindersText = configurationsStore["default-reminders"];
      if (remindersText) {
        try {
          reminders = JSON.parse(remindersText);
        } catch (e) {
          console.warn("Error parsing reminders default", remindersText);
        }
      }
      return reminders;
    };
    AuditRequest = class extends ConstrainedEntity {
      constructor(params) {
        super(params);
        this.InternalDueDate.addFieldRequirement({
          requirement: ko22.pureComputed(() => {
            return this.InternalDueDate.Value() > this.ReqDueDate.Value();
          }),
          error: new ValidationError2(
            "text-field",
            "required-field",
            "The Internal Due Date must be before the Request Due Date!"
          )
        });
      }
      ReqType = new SelectField({
        displayName: "Request Type",
        options: Object.values(AUDITREQUESTTYPES),
        isRequired: true,
        instructions: ko22.pureComputed(() => {
          switch (this.ReqType.Value()) {
            case AUDITREQUESTTYPES.TASKER:
              return "A request that doesn't require QA Approval.";
            case AUDITREQUESTTYPES.REQUEST:
              return "A request requiring QA Approval";
            case AUDITREQUESTTYPES.NOTIFICATION:
              return "A request that is closed after the email is sent";
            default:
          }
        })
      });
      isTasker = ko22.pureComputed(() => {
        return this.ReqType.Value() == AUDITREQUESTTYPES.TASKER;
      });
      isRequest = ko22.pureComputed(() => {
        return this.ReqType.Value() == AUDITREQUESTTYPES.REQUEST;
      });
      ReqNum = new TextField({
        displayName: "Request Number",
        systemName: "Title",
        isRequired: true
      });
      ReqSubject = new TextField({
        displayName: "Request Subject",
        isRequired: true
      });
      RequestingOffice = new LookupField({
        displayName: "Requesting Office",
        type: AuditOrganization,
        options: auditOrganizationStore,
        optionsFilter: allRequestingOfficesFilter,
        lookupCol: "Title",
        entitySet: appContext.AuditOrganizations,
        isRequired: true
      });
      FiscalYear = new TextField({
        displayName: "Fiscal Year",
        isRequired: true
      });
      InternalDueDate = new DateField({
        displayName: "Internal Due Date",
        type: dateFieldTypes.date,
        isRequired: true
      });
      ReqDueDate = new DateField({
        displayName: "Request Due Date",
        type: dateFieldTypes.date,
        isRequired: true
      });
      ReqStatus = new SelectField({
        displayName: "Request Status",
        options: Object.values(AUDITREQUESTSTATES),
        isRequired: true
      });
      IsSample = new CheckboxField({
        displayName: "Is Sample?"
      });
      ReceiptDate = new DateField({
        displayName: "Receipt Date",
        type: dateFieldTypes.date,
        isRequired: false
      });
      RelatedAudit = new TextField({
        displayName: "Related Audit",
        isRequired: false,
        instructions: "The Audit Request number of the similar audit performed in the previous FY"
      });
      ActionItems = new TextAreaField({
        displayName: "Action Items",
        instructions: "Items that have been requested by the Auditor",
        isRichText: true,
        isMinimalEditor: true,
        classList: ["min-w-full"]
      });
      Comments = new TextAreaField({
        displayName: "Comments",
        isRichText: true,
        isMinimalEditor: true,
        classList: ["min-w-full"]
      });
      Reminders = new SelectField({
        displayName: "Reminders",
        options: [
          "3 Days Before Due",
          "1 Day Before Due",
          "1 Day Past Due",
          "3 Days Past Due",
          "7 Days Past Due",
          "7 Days Recurring"
        ],
        multiple: true
      });
      EmailSent = new CheckboxField({
        displayName: "Email has been sent"
      });
      Sensitivity = new SelectField({
        displayName: "Sensitivity",
        options: ["None", "Official", "SBU", "PII_SBU"]
      });
      ActionOffice = new LookupField({
        displayName: "Action Offices",
        type: AuditOrganization,
        options: auditOrganizationStore,
        optionsFilter: allActionOfficesFilter,
        lookupCol: "Title",
        multiple: true,
        entitySet: appContext.AuditOrganizations
      });
      EmailActionOffice = new LookupField({
        displayName: "Email Action Offices",
        type: AuditOrganization,
        options: auditOrganizationStore,
        optionsFilter: allActionOfficesFilter,
        lookupCol: "Title",
        multiple: true,
        entitySet: appContext.AuditOrganizations
      });
      ClosedDate = new DateField({
        displayName: "Closed Date",
        isRequired: false
      });
      ClosedBy = new PeopleField({
        displayName: "Closed By",
        isRequired: false
      });
      static Views = {
        All: [
          "ID",
          "Title",
          "ReqType",
          "ReqSubject",
          "FiscalYear",
          "InternalDueDate",
          "ReqDueDate",
          "ReqStatus",
          "IsSample",
          "ReceiptDate",
          "RelatedAudit",
          "ActionItems",
          "Comments",
          "Reminders",
          "EmailSent",
          "Sensitivity",
          "ActionOffice",
          "EmailActionOffice",
          "RequestingOffice",
          "ClosedDate",
          "ClosedBy"
        ],
        New: [
          "Title",
          "ReqType",
          "ReqSubject",
          "RequestingOffice",
          "FiscalYear",
          "InternalDueDate",
          "ReqDueDate",
          "ReqStatus",
          "IsSample",
          "ReceiptDate",
          "RelatedAudit",
          "ActionItems",
          "Comments",
          "Reminders",
          "Sensitivity",
          "ActionOffice"
        ],
        IACanUpdate: [
          "ReqType",
          "ReqSubject",
          "FiscalYear",
          "RequestingOffice",
          "InternalDueDate",
          "ReqDueDate",
          "ReqStatus",
          "IsSample",
          "ReceiptDate",
          "RelatedAudit",
          "ActionItems",
          "Comments",
          "Reminders",
          "Sensitivity",
          "ActionOffice",
          "EmailActionOffice",
          "ClosedBy",
          "ClosedDate"
        ]
      };
      static ListDef = {
        name: "AuditRequests",
        title: "AuditRequests"
      };
    };
  }
});

// src/entities/audit_bulk_request.js
var AuditBulkRequest;
var init_audit_bulk_request = __esm({
  "src/entities/audit_bulk_request.js"() {
    init_store();
    init_audit_request();
    AuditBulkRequest = class extends AuditRequest {
      constructor(params) {
        super(params);
      }
      toNewRequest() {
        const newReq = new AuditRequest(this);
        newReq.fromJSON(this.toJSON());
        newReq.ReqStatus.Value(AUDITREQUESTSTATES.OPEN);
        const requestDefaultReminders = getRequestDefaultReminders();
        newReq.Reminders.Value(requestDefaultReminders);
        const requestDefaultType = configurationsStore["default-req-type"];
        if (requestDefaultType) newReq.ReqType.Value(requestDefaultType);
        const defaultFy = configurationsStore["current-fy"];
        if (defaultFy) newReq.FiscalYear.Value(defaultFy);
        return newReq;
      }
      static Views = {
        All: [
          "ID",
          "Title",
          "ReqSubject",
          "FiscalYear",
          "InternalDueDate",
          "ReqDueDate",
          "IsSample",
          "ReceiptDate",
          "RelatedAudit",
          "ActionItems",
          "Comments",
          "Reminders",
          "Sensitivity",
          "ActionOffice",
          "RequestingOffice"
        ]
      };
      static ListDef = {
        name: "AuditBulkRequests",
        title: "AuditBulkRequests"
      };
    };
  }
});

// src/value_objects/comment.js
var Comment;
var init_comment = __esm({
  "src/value_objects/comment.js"() {
    init_primitives();
    init_fields2();
    Comment = class _Comment extends ConstrainedEntity {
      constructor(params) {
        super(params);
      }
      id = new TextField({
        displayName: "ID"
      });
      text = new TextField({
        displayName: "Comment"
      });
      author = new TextField({
        displayName: "author"
      });
      timestamp = new TextField({
        displayName: "timestamp"
      });
      FieldMap = {
        id: this.id,
        text: this.text,
        author: this.author,
        timestamp: this.timestamp
      };
      static Create({ id: id2, text, author, timestamp }) {
        const newComment = new _Comment();
        newComment.id.Value(id2);
        newComment.text.Value(text);
        newComment.author.Value(author);
        newComment.timestamp.Value(timestamp);
        return newComment;
      }
      static Views = {
        All: ["id", "text", "author", "timestamp"]
      };
    };
  }
});

// src/value_objects/active_viewer.js
var ActiveViewer;
var init_active_viewer = __esm({
  "src/value_objects/active_viewer.js"() {
    init_primitives();
    init_fields2();
    ActiveViewer = class extends ConstrainedEntity {
      id = new TextField({
        displayName: "ID"
      });
      viewer = new TextField({
        displayName: "Viewer"
      });
      timestamp = new DateField({
        displayName: "Timestamp",
        type: dateFieldTypes.datetime
      });
      FieldMap = {
        id: this.id,
        viewer: this.viewer,
        timestamp: this.timestamp
      };
      static Views = {
        All: ["id", "viewer", "timestamp"]
      };
    };
  }
});

// src/components/active_viewers/active_viewers_module.js
var ko23, ActiveViewersComponent;
var init_active_viewers_module = __esm({
  "src/components/active_viewers/active_viewers_module.js"() {
    ko23 = __toESM(require_knockout_latest());
    init_active_viewer();
    init_application_db_context();
    ActiveViewersComponent = class {
      constructor({ entity, fieldName }) {
        this.entity = entity;
        this.blobField = entity[fieldName];
        this.fieldName = fieldName;
        this.viewers = this.blobField.TypedValues;
      }
      entity;
      blobField;
      fieldName;
      pushCurrentUser() {
        this.pushUser(window.context.pageContext.legacyPageContext.userLoginName);
      }
      pushUser(loginName) {
        var filteredViewers = this.viewers().filter(function(viewer2) {
          return viewer2.viewer != loginName;
        });
        this.viewers(filteredViewers);
        var viewer = new ActiveViewer();
        viewer.fromJSON({
          id: Math.ceil(Math.random() * 1e6).toString(16),
          viewer: loginName,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleString()
        });
        this.viewers.push(viewer);
        this.commitChanges();
      }
      removeUser(viewerToRemove) {
        this.viewers.remove(viewerToRemove);
        this.commitChanges();
      }
      removeCurrentuser() {
        this.removeUserByLogin(
          window.context.pageContext.legacyPageContext.userLoginName
        );
      }
      removeUserByLogin(loginName) {
        var viewerToRemove = this.viewers().find(function(viewer) {
          return viewer.viewer == loginName;
        });
        if (viewerToRemove) {
          this.removeUser(viewerToRemove);
        }
      }
      onRemove = (viewerToRemove) => {
        if (confirm("Are you sure you want to delete this item?")) {
          this.removeUser(viewerToRemove);
        }
      };
      async commitChanges() {
        const set = appContext.Set(this.entity.constructor);
        if (!set) {
          alert("Cannot find entity set", this.entity);
          return;
        }
        await set.UpdateEntity(this.entity, [this.fieldName]);
      }
    };
  }
});

// src/components/comment_chain/CommentChainTemplate.js
var commentChainTemplate;
var init_CommentChainTemplate = __esm({
  "src/components/comment_chain/CommentChainTemplate.js"() {
    init_infrastructure();
    commentChainTemplate = html2`
  <div>
    <!-- ko if: showHistoryBool -->
    <!-- ko foreach: comments -->
    <div class="comment">
      <div data-bind="text: text.Value"></div>
      <div>
        <span
          data-bind="text: author.Value() + ' @ ' + timestamp.Value()"
        ></span
        ><span class="remove" data-bind="click: $parent.onRemove">x</span>
      </div>
    </div>
    <!-- /ko -->
    <!-- /ko -->
    <!-- ko ifnot: showHistoryBool -->
    <div class="comment" data-bind="with: comments()[comments().length - 1]">
      <div data-bind="text: text.Value"></div>
      <div>
        <span
          data-bind="text: author.Value() + ' @ ' + timestamp.Value()"
        ></span
        ><span class="remove" data-bind="click: $parent.onRemove">x</span>
      </div>
    </div>
    <!-- /ko -->
    <a
      title="Show hidden comments"
      href="javascript:void(0)"
      data-bind="click: toggleShowHistory"
    >
      <span class="ui-icon ui-icon-comment"></span>
      Toggle Comment History (<span data-bind="text: comments().length"></span>
      Total)
    </a>
    <div class="newComment">
      <textarea cols="50" data-bind="value: newCommentText"></textarea>
      <button type="button" data-bind="click: onSubmit">Submit</button>
    </div>
  </div>
`;
  }
});

// src/components/comment_chain/comment_chain_module.js
var ko24, commentChainComponentName, CommentChainComponent, CommentChainModule;
var init_comment_chain_module = __esm({
  "src/components/comment_chain/comment_chain_module.js"() {
    ko24 = __toESM(require_knockout_latest());
    init_application_db_context();
    init_infrastructure();
    init_comment();
    init_CommentChainTemplate();
    commentChainComponentName = "commentChain";
    CommentChainComponent = class {
      constructor({ entity, fieldName }) {
        this.entity = entity;
        this.blobField = entity[fieldName];
        this.fieldName = fieldName;
      }
      entity;
      blobField;
      fieldName;
      componentName = commentChainComponentName;
    };
    CommentChainModule = class {
      constructor({ entity, fieldName, blobField }) {
        this.entity = entity;
        this.fieldName = fieldName;
        this.blobField = blobField;
        this.comments = blobField.TypedValues;
      }
      // comments = ko.observableArray();
      newCommentText = ko24.observable();
      showHistoryBool = ko24.observable(false);
      toggleShowHistory = function() {
        this.showHistoryBool(!this.showHistoryBool());
      };
      async onSubmit() {
        var comment = Comment.Create({
          id: Math.ceil(Math.random() * 1e6).toString(16),
          text: this.newCommentText(),
          author: window.context.pageContext.legacyPageContext.userLoginName,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleString()
        });
        this.blobField.add(comment);
        await this.commitChanges();
        this.newCommentText("");
      }
      onRemove = (commentToRemove) => {
        if (confirm("Are you sure you want to delete this item?")) {
          this.blobField.remove(commentToRemove);
          this.commitChanges();
        }
      };
      async commitChanges() {
        const set = appContext.Set(this.entity.constructor);
        if (!set) {
          alert("Cannot find entity set", this.entity);
          return;
        }
        await set.UpdateEntity(this.entity, [this.fieldName]);
      }
    };
    directRegisterComponent(commentChainComponentName, {
      template: commentChainTemplate,
      viewModel: CommentChainModule
    });
  }
});

// src/entities/audit_request_internal.js
var AuditRequestsInternal;
var init_audit_request_internal = __esm({
  "src/entities/audit_request_internal.js"() {
    init_fields2();
    init_constrained_entity();
    init_audit_request();
    init_comment();
    init_active_viewer();
    init_active_viewers_module();
    init_comment_chain_module();
    init_application_db_context();
    AuditRequestsInternal = class extends ConstrainedEntity {
      constructor(params) {
        super(params);
      }
      ActiveViewers = new BlobField({
        displayName: "Active Viewers",
        entityType: ActiveViewer,
        multiple: true
      });
      InternalStatus = new BlobField({
        displayName: "Internal Status",
        entityType: Comment,
        multiple: true
      });
      ReqNum = new LookupField({
        displayName: "Request",
        type: AuditRequest,
        lookupCol: "Title",
        entitySet: appContext.AuditRequests
      });
      commentChainComponent = new CommentChainComponent({
        entity: this,
        fieldName: "InternalStatus"
      });
      activeViewersComponent = new ActiveViewersComponent({
        entity: this,
        fieldName: "ActiveViewers"
      });
      static Views = {
        All: ["ID", "ActiveViewers", "InternalStatus", "ReqNum"]
      };
      static ListDef = {
        title: "AuditRequestsInternal",
        name: "AuditRequestsInternal"
      };
    };
  }
});

// src/services/people_manager.js
var ko25, User, currentUser;
var init_people_manager = __esm({
  "src/services/people_manager.js"() {
    ko25 = __toESM(require_knockout_latest());
    init_entities();
    init_infrastructure();
    User = class _User extends People2 {
      constructor({
        ID,
        Title,
        LoginName = null,
        LookupValue = null,
        WorkPhone = null,
        EMail = null,
        IsGroup = null,
        IsEnsured = false,
        Groups = null
      }) {
        super({ ID, Title, LookupValue, LoginName, IsGroup, IsEnsured });
        this.WorkPhone = WorkPhone;
        this.EMail = EMail;
        this.Groups = Groups;
      }
      Groups = [];
      isInGroup(group) {
        if (!group?.ID) return false;
        return this.getGroupIds().includes(group.ID);
      }
      getGroupIds() {
        return this.Groups.map((group) => group.ID);
      }
      IsSiteOwner = ko25.pureComputed(
        () => this.isInGroup(getDefaultGroups().owners)
      );
      hasSystemRole = (systemRole) => {
        const userIsOwner = this.IsSiteOwner();
        switch (systemRole) {
          case systemRoles.Admin:
            return userIsOwner;
            break;
          case systemRoles.ActionOffice:
            return userIsOwner || this.ActionOffices().length;
          default:
        }
      };
      static _user = null;
      static Create = async function() {
        if (_User._user) return _User._user;
        const userProps = await getUserPropsAsync();
        _User._user = new _User(userProps);
        return _User._user;
      };
    };
    currentUser = User.Create;
  }
});

// src/entities/audit_response.js
var ko26, AuditResponseStates, AuditResponse;
var init_audit_response = __esm({
  "src/entities/audit_response.js"() {
    ko26 = __toESM(require_knockout_latest());
    init_primitives();
    init_fields2();
    init_entities2();
    init_application_db_context();
    init_active_viewer();
    init_active_viewers_module();
    init_store();
    init_people_manager();
    AuditResponseStates = {
      Open: "1-Open",
      Submitted: "2-Submitted",
      ReturnedToAO: "3-Returned to Action Office",
      ApprovedForQA: "4-Approved for QA",
      ReturnedToGFS: "5-Returned to GFS",
      RepostedAfterRejection: "6-Reposted After Rejection",
      Closed: "7-Closed"
    };
    AuditResponse = class extends ConstrainedEntity {
      constructor(params) {
        super(params);
      }
      Title = new TextField({
        displayName: "Name"
      });
      ReqNum = new LookupField({
        displayName: "Request Number",
        type: AuditRequest,
        entitySet: appContext.AuditRequests
      });
      SampleNumber = new TextField({
        displayName: "Sample Number",
        isRequired: true
      });
      ResStatus = new SelectField({
        displayName: "Response Status",
        options: Object.values(AuditResponseStates)
      });
      ReturnReason = new TextField({
        displayName: "Return Reason",
        options: ["Incomplete Document", "Incorrect POC"]
      });
      Comments = new TextAreaField({
        displayName: "Comments",
        isRichText: true,
        isMinimalEditor: true,
        classList: ["min-w-full"]
      });
      ClosedDate = new DateField({
        displayName: "Closed Date",
        type: dateFieldTypes.date
      });
      ClosedBy = new PeopleField({
        displayName: "Closed By"
      });
      POC = new PeopleField({
        displayName: "POC"
      });
      POCCC = new PeopleField({
        displayName: "POCCC"
      });
      ActionOffice = new LookupField({
        displayName: "Action Office",
        type: AuditOrganization,
        options: auditOrganizationStore,
        optionsFilter: ko26.pureComputed(() => {
          const request2 = ko26.unwrap(this.ReqNum.Value);
          if (!request2) return (val) => val;
          const requestActionOffices = ko26.unwrap(request2.ActionOffice.Value);
          return (opt) => requestActionOffices.includes(opt);
        }),
        entitySet: appContext.AuditOrganizations,
        lookupCol: "Title",
        isRequired: true
      });
      ActiveViewers = new BlobField({
        displayName: "Active Viewers",
        entityType: ActiveViewer,
        multiple: true
      });
      activeViewersComponent = new ActiveViewersComponent({
        entity: this,
        fieldName: "ActiveViewers"
      });
      async uploadResponseDocFile(file) {
        const fileMetadata = {
          Title: file.name,
          ReqNumId: this.ReqNum.Value().ID,
          ResIDId: this.ID
        };
        const { appContext: appContext2 } = await Promise.resolve().then(() => (init_application_db_context(), application_db_context_exports));
        return await appContext2.AuditResponseDocs.UploadFileToFolderAndUpdateMetadata(
          file,
          file.name,
          this.Title.Value(),
          fileMetadata
        );
      }
      markClosed() {
        this.ResStatus.Value(AuditResponseStates.Closed);
        this.ClosedDate.set(/* @__PURE__ */ new Date());
        this.ClosedBy.set(currentUser());
      }
      static Views = {
        All: [
          "ID",
          "Title",
          "SampleNumber",
          "ResStatus",
          "ReturnReason",
          "Comments",
          "ClosedDate",
          "ClosedBy",
          "POC",
          "POCCC",
          "ReqNum",
          "ActionOffice",
          "ActiveViewers"
        ],
        NewForm: ["ReqNum", "ActionOffice", "SampleNumber", "Comments"],
        EditForm: [
          "ReqNum",
          "SampleNumber",
          "Title",
          "ActionOffice",
          "ResStatus",
          "ReturnReason",
          "Comments",
          "ClosedDate",
          "ClosedBy",
          "POC",
          "POCCC"
        ],
        IACanUpdate: [
          "Title",
          "ActionOffice",
          "ResStatus",
          "ReturnReason",
          "Comments",
          "ClosedDate",
          "ClosedBy",
          "POC",
          "POCCC"
        ],
        IAUpdateClosed: ["ResStatus", "ClosedDate", "ClosedBy"]
      };
      static ListDef = {
        name: "AuditResponses",
        title: "AuditResponses"
      };
    };
  }
});

// src/entities/audit_bulk_response.js
var AuditBulkResponse;
var init_audit_bulk_response = __esm({
  "src/entities/audit_bulk_response.js"() {
    init_fields2();
    init_primitives();
    init_entities2();
    init_application_db_context();
    init_entities2();
    init_store();
    AuditBulkResponse = class extends AuditResponse {
      constructor(params) {
        super(params);
      }
      // Title = new TextField({
      //   displayName: "Sample Number",
      // });
      // Comments = new TextAreaField({
      //   displayName: "Comments",
      // });
      // POC = new PeopleField({
      //   displayName: "POC",
      // });
      // POCCC = new PeopleField({
      //   displayName: "POCCC",
      // });
      // ActionOffice = new LookupField({
      //   displayName: "Action Office",
      //   type: AuditOrganization,
      //   options: auditOrganizationStore,
      //   entitySet: appContext.AuditOrganizations,
      // });
      toResponse(request2) {
        const response = new AuditResponse();
        response.fromJSON(this.toJSON());
        return response;
      }
      static Views = {
        All: [
          "ID",
          "Title",
          "SampleNumber",
          "Comments",
          "POC",
          "POCCC",
          "ActionOffice"
        ]
      };
      static ListDef = {
        name: "AuditBulkResponses",
        title: "AuditBulkResponses"
      };
    };
  }
});

// src/entities/audit_response_doc.js
var AuditResponseDocStates, AuditResponseDoc;
var init_audit_response_doc = __esm({
  "src/entities/audit_response_doc.js"() {
    init_primitives();
    init_fields2();
    init_audit_response();
    init_audit_request();
    init_application_db_context();
    AuditResponseDocStates = {
      Open: "Open",
      Submitted: "Submitted",
      SentToQA: "Sent to QA",
      Approved: "Approved",
      Rejected: "Rejected",
      Archived: "Archived",
      MarkedForDeletion: "Marked for Deletion"
    };
    AuditResponseDoc = class extends ConstrainedEntity {
      constructor(params) {
        super(params);
      }
      Title = new TextField({
        displayName: "Name"
      });
      ReceiptDate = new DateField({
        displayName: "Receipt Date",
        type: dateFieldTypes.date
      });
      DocumentStatus = new SelectField({
        displayName: "Document Status",
        options: Object.values(AuditResponseDocStates)
      });
      RejectReason = new TextAreaField({
        displayName: "Reject Reason"
      });
      ReqNum = new LookupField({
        displayName: "Request Number",
        type: AuditRequest,
        entitySet: appContext.AuditRequests
      });
      ResID = new LookupField({
        displayName: "Response ID",
        type: AuditResponse,
        entitySet: appContext.AuditResponses
      });
      FileName = new TextField({
        displayName: "Name",
        systemName: "FileLeafRef"
      });
      FileRef = new TextField({
        displayName: "File Link",
        systemName: "FileRef"
      });
      Modified = new DateField({
        displayName: "Modified",
        type: dateFieldTypes.datetime
      });
      Editor = new PeopleField({
        displayName: "Modified By"
      });
      Created = new DateField({
        displayName: "Created",
        type: dateFieldTypes.datetime
      });
      FileSizeDisplay = new TextField({
        displayName: "File"
      });
      File_x0020_Type = new TextField({
        displayName: "File Type",
        systemName: "File_x0020_Type"
      });
      CheckoutUser = new PeopleField({
        displayName: "Checked Out To"
      });
      markApprovedForRO(newFileName) {
        this.DocumentStatus.Value(AuditResponseDocStates.Approved);
        this.RejectReason.Value("");
        if (this.FileName.Value() != newFileName) this.FileName.Value(newFileName);
      }
      static Views = {
        All: [
          "ID",
          "Title",
          "ReceiptDate",
          "DocumentStatus",
          "RejectReason",
          "ReqNum",
          "ResID",
          "FileLeafRef",
          "FileRef",
          "FileSizeDisplay",
          "File_x0020_Type",
          "CheckoutUser",
          "Modified",
          "Editor",
          "Created"
        ],
        EditForm: [
          "FileLeafRef",
          "Title",
          "ReceiptDate",
          "DocumentStatus",
          "RejectReason",
          "ReqNum",
          "ResID"
        ],
        AOCanUpdate: [
          "Title",
          "ReceiptDate",
          "DocumentStatus",
          "RejectReason",
          "FileLeafRef"
        ],
        UpdateDocStatus: ["Title", "FileLeafRef", "DocumentStatus"]
      };
      static ListDef = {
        name: "AuditResponseDocs",
        title: "AuditResponseDocs",
        isLib: true
      };
    };
  }
});

// src/entities/audit_response_doc_ro.js
var AuditResponseDocRO;
var init_audit_response_doc_ro = __esm({
  "src/entities/audit_response_doc_ro.js"() {
    init_primitives();
    AuditResponseDocRO = class extends ConstrainedEntity {
      constructor(params) {
        super(params);
      }
      markApprovedForRO(request2, response) {
        this.ReqNum = request2.Title;
        this.ResID = response.Title.toString();
        this.FiscalYear = request2.FiscalYear.toString();
        this.ReqSubject = request2.ReqSubject.toString();
        this.RequestingOffice = request2.RequestingOffice.Value()?.UserGroup?.Title;
      }
      static Views = {
        All: [
          "ID",
          "Title",
          "ReqNum",
          "ResID",
          "FiscalYear",
          "RequestingOffice",
          "ReqSubject",
          "FileLeafRef",
          "FileRef"
        ],
        ApprovedForROUpdate: [
          "ReqNum",
          "ResID",
          "FiscalYear",
          "ReqSubject",
          "RequestingOffice"
        ]
      };
      static ListDef = {
        name: "AuditResponseDocsRO",
        title: "AuditResponseDocsRO"
      };
    };
  }
});

// src/entities/audit_ro_email_log.js
var AuditROEmailLog;
var init_audit_ro_email_log = __esm({
  "src/entities/audit_ro_email_log.js"() {
    init_primitives();
    AuditROEmailLog = class _AuditROEmailLog extends ConstrainedEntity {
      constructor(params) {
        super(params);
      }
      Responses = "";
      ResponseCount = 0;
      static Views = {
        All: [
          "ID",
          "Title",
          "RequestingOffice",
          "Responses",
          "ResponseCount",
          "SentEmail"
        ]
      };
      static ListDef = {
        name: "AuditROEmailLog",
        title: "AuditROEmailLog",
        fields: _AuditROEmailLog.Views.All
      };
    };
  }
});

// src/entities/config.js
var AuditConfiguration;
var init_config = __esm({
  "src/entities/config.js"() {
    init_primitives();
    AuditConfiguration = class extends ConstrainedEntity {
      constructor(params) {
        super(params);
      }
      key;
      value;
      FieldMap = {
        Title: {
          get: () => this.key,
          set: (val) => this.key = val
        },
        Value: {
          get: () => this.value,
          set: (val) => this.value = val
        }
      };
      static Views = {
        All: ["ID", "Title", "Value"]
      };
      static ListDef = {
        name: "Config",
        title: "Config"
      };
    };
  }
});

// src/entities/index.js
var init_entities2 = __esm({
  "src/entities/index.js"() {
    init_audit_coversheet();
    init_audit_email();
    init_audit_organization();
    init_audit_request();
    init_audit_bulk_request();
    init_audit_request_internal();
    init_audit_response();
    init_audit_bulk_response();
    init_audit_response_doc();
    init_audit_response_doc_ro();
    init_audit_ro_email_log();
    init_config();
  }
});

// src/sal/orm.js
function mapObjectToEntity(inputObject, targetEntity) {
  if (DEBUG)
    console.log(
      `ApplicationDBContext: ${targetEntity.constructor.name}: `,
      inputObject
    );
  if (!inputObject || !targetEntity) return;
  Object.keys(inputObject).forEach((key) => {
    mapValueToEntityProperty(key, inputObject[key], targetEntity);
  });
}
function mapValueToEntityProperty(propertyName, inputValue, targetEntity) {
  if (DEBUG)
    console.log(
      `ApplicationDBContext: ${targetEntity.constructor.name}.${propertyName} to ${inputValue}`
    );
  if (targetEntity.FieldMap && targetEntity.FieldMap[propertyName]) {
    mapObjectToViewField(inputValue, targetEntity.FieldMap[propertyName]);
    return;
  }
  if (targetEntity[propertyName] && typeof targetEntity[propertyName] == "function") {
    targetEntity[propertyName](inputValue);
    return;
  }
  targetEntity[propertyName] = inputValue;
  return;
}
function mapObjectToViewField(inVal, fieldMapping) {
  if (typeof fieldMapping == "function") {
    fieldMapping(inVal);
    return;
  }
  if (typeof fieldMapping != "object") {
    fieldMapping = inVal;
    return;
  }
  if (fieldMapping.set && typeof fieldMapping.set == "function") {
    fieldMapping.set(inVal);
    return;
  }
  if (fieldMapping.obs) {
    if (!inVal) {
      fieldMapping.obs(null);
      return;
    }
    const outVal = Array.isArray(inVal) ? inVal.map((item) => generateObject(item, fieldMapping)) : generateObject(inVal, fieldMapping);
    fieldMapping.obs(outVal);
    return;
  }
  fieldMapping = inVal;
}
function generateObject(inVal, fieldMap) {
  return fieldMap.factory ? fieldMap.factory(inVal) : inVal;
}
function mapEntityToObject(input, selectedFields = null) {
  const entity = {};
  const allWriteableFieldsSet = /* @__PURE__ */ new Set([]);
  if (this?.ListDef?.fields) {
    this.ListDef.fields.forEach((field) => allWriteableFieldsSet.add(field));
  }
  if (this?.AllDeclaredFields) {
    this.AllDeclaredFields.map((field) => allWriteableFieldsSet.add(field));
  }
  if (input.FieldMap) {
    Object.keys(input.FieldMap).forEach(
      (field) => allWriteableFieldsSet.add(field)
    );
  }
  const allWriteableFields = [...allWriteableFieldsSet];
  const fields = selectedFields ?? (input.FieldMap ? Object.keys(input.FieldMap) : null) ?? Object.keys(input);
  fields.filter((field) => allWriteableFields.includes(field)).map((field) => {
    if (input.FieldMap && input.FieldMap[field]) {
      const storedFieldKey = input.FieldMap[field].systemName ?? field;
      entity[storedFieldKey] = mapViewFieldToValue(input.FieldMap[field]);
      return;
    }
    entity[field] = input[field];
  });
  return entity;
}
function mapViewFieldToValue(fieldMap) {
  if (typeof fieldMap == "function") {
    return fieldMap();
  }
  if (fieldMap.get && typeof fieldMap.get == "function") {
    return fieldMap.get();
  }
  if (fieldMap.obs) {
    return fieldMap.obs();
  }
  return fieldMap;
}
var ko27, DEBUG, DbContext, EntitySet;
var init_orm = __esm({
  "src/sal/orm.js"() {
    ko27 = __toESM(require_knockout_latest());
    init_entities();
    init_infrastructure();
    DEBUG = false;
    DbContext = class {
      constructor() {
      }
      SitePages = new EntitySet(SitePage);
      utilities = {
        copyFileAsync
      };
      virtualSets = /* @__PURE__ */ new Map();
      Set = (entityType) => {
        const key = entityType.ListDef.name;
        const set = Object.values(this).filter((val) => val.constructor.name == EntitySet.name).find((set2) => set2.ListDef?.name == key);
        if (set) return set;
        if (!this.virtualSets.has(key)) {
          const newSet = new EntitySet(entityType);
          this.virtualSets.set(key, newSet);
          return newSet;
        }
        return this.virtualSets.get(key);
      };
    };
    EntitySet = class {
      constructor(entityType) {
        if (!entityType.ListDef) {
          console.error("Missing entityType listdef for", entityType);
          return;
        }
        this.entityType = entityType;
        try {
          const allFieldsSet = /* @__PURE__ */ new Set();
          entityType.Views?.All?.map((field) => allFieldsSet.add(field));
          this.AllDeclaredFields = [...allFieldsSet];
        } catch (e) {
          console.warn("Could not instantiate", entityType), console.warn(e);
          this.AllDeclaredFields = entityType.Views?.All ?? [];
        }
        this.ListDef = entityType.ListDef;
        this.Views = entityType.Views;
        this.Title = entityType.ListDef.title;
        this.Name = entityType.ListDef.name;
        this.ListRef = new SPList(entityType.ListDef);
        this.entityConstructor = this.entityType.FindInStore || this.entityType.Create || this.entityType;
      }
      // Queries
      FindById = async (id2, fields = this.AllDeclaredFields) => {
        const result = await this.ListRef.getById(id2, fields);
        if (!result) return null;
        const newEntity = new this.entityType(result);
        mapObjectToEntity(result, newEntity);
        return newEntity;
      };
      // TODO: Feature - Queries should return options to read e.g. toList, first, toCursor
      /**
       * Takes an array of columns and filter values with an optional comparison operator
       * @param {[{column, op?, value}]} columnFilters
       * @param {*} param1
       * @param {*} param2
       * @param {*} fields
       * @param {*} includeFolders
       * @returns
       */
      FindByColumnValue = async (columnFilters, { orderByColumn, sortAsc }, { count = null, includePermissions = false, includeFolders = false }, fields = this.AllDeclaredFields) => {
        const returnCursor = count != null;
        count = count ?? 5e3;
        const results = await this.ListRef.findByColumnValueAsync(
          columnFilters,
          { orderByColumn, sortAsc },
          { count, includePermissions, includeFolders },
          fields
        );
        let cursor = {
          _next: results._next,
          results: results.results.map((item) => {
            const newEntity = new this.entityConstructor(item);
            mapObjectToEntity(item, newEntity);
            return newEntity;
          })
        };
        if (returnCursor) {
          return cursor;
        }
        const resultObj = {
          results: cursor.results
        };
        while (cursor._next) {
          cursor = await this.LoadNextPage(cursor);
          resultObj.results = resultObj.results.concat(cursor.results);
        }
        return resultObj;
      };
      LoadNextPage = async (cursor) => {
        const results = await this.ListRef.loadNextPage(cursor);
        return {
          _next: results._next,
          results: results.results.map((item) => {
            const newEntity = new this.entityType(item);
            mapObjectToEntity(item, newEntity);
            return newEntity;
          })
        };
      };
      /**
       * Return all items in list
       */
      ToList = async (refresh = false) => {
        const fields = this.Views.All;
        const results = await this.ListRef.getListItemsAsync({ fields });
        const allItems = results.map((item) => {
          let entityToLoad = new this.entityType(item);
          mapObjectToEntity(item, entityToLoad);
          return entityToLoad;
        });
        return allItems;
      };
      LoadEntity = async function(entity, refresh = false) {
        if (!entity.ID) {
          console.error("entity missing Id", entity);
          return false;
        }
        const result = await this.ListRef.getById(
          entity.ID,
          this.AllDeclaredFields
        );
        if (!result) return null;
        mapObjectToEntity(result, entity);
        return entity;
      };
      // Mutators
      AddEntity = async function(entity, folderPath) {
        const creationfunc = mapEntityToObject.bind(this);
        const writeableEntity = creationfunc(entity, this.AllDeclaredFields);
        if (DEBUG) console.log(writeableEntity);
        const newId = await this.ListRef.createListItemAsync(
          writeableEntity,
          folderPath
        );
        mapObjectToEntity({ ID: newId }, entity);
        return;
      };
      UpdateEntity = async function(entity, fields = null) {
        const writeableEntity = mapEntityToObject.bind(this)(entity, fields);
        writeableEntity.ID = typeof entity.ID == "function" ? entity.ID() : entity.ID;
        if (DEBUG) console.log(writeableEntity);
        return this.ListRef.updateListItemAsync(writeableEntity);
      };
      RemoveEntity = async function(entity) {
        if (!entity.ID) return false;
        await this.ListRef.deleteListItemAsync(entity.ID);
        return true;
      };
      RemoveEntityById = function(entityId) {
        return this.ListRef.deleteListItemAsync(entityId);
      };
      // Permissions
      GetItemPermissions = function(entity) {
        return this.ListRef.getItemPermissionsAsync(entity.ID);
      };
      SetItemPermissions = async function(entity, valuePairs, reset = false) {
        return this.ListRef.setItemPermissionsAsync(entity.ID, valuePairs, reset);
      };
      GetRootPermissions = function() {
        return this.ListRef.getListPermissions();
      };
      SetRootPermissions = async function(itemPermissions, reset) {
        await this.ListRef.setListPermissionsAsync(itemPermissions, reset);
      };
      // Folder Methods
      GetFolderUrl = function(relFolderPath = "") {
        return this.ListRef.getServerRelativeFolderPath(relFolderPath);
      };
      GetItemsByFolderPath = async function(folderPath, fields = this.AllDeclaredFields) {
        const results = await this.ListRef.getFolderContentsAsync(
          folderPath,
          fields
        );
        return results.map((result) => {
          const newEntity = new this.entityType(result);
          mapObjectToEntity(result, newEntity);
          return newEntity;
        });
      };
      UpsertFolderPath = async function(folderPath) {
        return this.ListRef.upsertFolderPathAsync(folderPath);
      };
      RemoveFolderByPath = async function(folderPath) {
        const itemResults = await this.FindByColumnValue(
          [{ column: "FileLeafRef", value: folderPath }],
          {},
          {},
          ["ID", "Title", "FileLeafRef"],
          true
        );
        const entities = itemResults.results ?? [];
        for (const entity of entities) {
          await this.RemoveEntityById(entity.ID);
        }
      };
      // Permissions
      SetFolderReadOnly = async function(relFolderPath) {
        return this.ListRef.setFolderReadonlyAsync(relFolderPath);
      };
      SetFolderPermissions = async function(folderPath, valuePairs, reset = true) {
        const salValuePairs = valuePairs.filter((vp) => vp[0] && vp[1]).map((vp) => [vp[0].getKey(), vp[1]]);
        return this.ListRef.setFolderPermissionsAsync(
          folderPath,
          salValuePairs,
          reset
        );
      };
      EnsureFolderPermissions = async function(relFolderPath, valuePairs) {
        const salValuePairs = valuePairs.filter((vp) => vp[0] && vp[1]).map((vp) => [vp[0].LoginName ?? vp[0].Title, vp[1]]);
        return this.ListRef.ensureFolderPermissionsAsync(
          relFolderPath,
          salValuePairs
        );
      };
      // Other Functions
      // Upload file directly from browser "File" object e.g. from input field
      UploadFileToFolderAndUpdateMetadata = async function(file, filename, folderPath, updates, progress) {
        const itemId = await this.ListRef.uploadFileToFolderAndUpdateMetadata(
          file,
          filename,
          folderPath,
          updates,
          progress
        );
        const item = await this.ListRef.getById(itemId, this.AllDeclaredFields);
        const newEntity = new this.entityConstructor(item);
        mapObjectToEntity(item, newEntity);
        return newEntity;
      };
      // Open file upload Modal
      UploadNewDocument = async function(folderPath, args) {
        return this.ListRef.uploadNewDocumentAsync(
          folderPath,
          "Attach a New Document",
          args
        );
      };
      CopyFolderContents = async function(sourceFolder, targetFolder) {
        return this.ListRef.copyFilesAsync(sourceFolder, targetFolder);
      };
      // Form Methods
      ShowForm = async function(name, title, args) {
        return new Promise(
          (resolve, reject2) => this.ListRef.showModal(name, title, args, resolve)
        );
      };
      CheckInDocument = async function(fileRef) {
        return new Promise(
          (resolve) => this.ListRef.showCheckinModal(fileRef, resolve)
        );
      };
      EnsureList = async function() {
      };
    };
  }
});

// src/sal/index.js
var init_sal2 = __esm({
  "src/sal/index.js"() {
    init_orm();
  }
});

// src/infrastructure/application_db_context.js
var application_db_context_exports = {};
__export(application_db_context_exports, {
  ApplicationDbContext: () => ApplicationDbContext,
  appContext: () => appContext,
  initAppcontext: () => initAppcontext
});
function initAppcontext() {
  appContext = new ApplicationDbContext();
}
var ApplicationDbContext, appContext;
var init_application_db_context = __esm({
  "src/infrastructure/application_db_context.js"() {
    init_entities2();
    init_sal2();
    ApplicationDbContext = class extends DbContext {
      constructor() {
        super();
      }
      AuditBulkRequests = new EntitySet(AuditBulkRequest);
      AuditBulkResponses = new EntitySet(AuditBulkResponse);
      AuditConfigurations = new EntitySet(AuditConfiguration);
      AuditCoversheets = new EntitySet(AuditCoversheet);
      AuditEmails = new EntitySet(AuditEmail);
      AuditOrganizations = new EntitySet(AuditOrganization);
      AuditResponses = new EntitySet(AuditResponse);
      AuditResponseDocs = new EntitySet(AuditResponseDoc);
      AuditResponseDocsRO = new EntitySet(AuditResponseDocRO);
      AuditRequests = new EntitySet(AuditRequest);
      AuditRequestsInternals = new EntitySet(AuditRequestsInternal);
      AuditROEmailsLog = new EntitySet(AuditROEmailLog);
    };
  }
});

// src/pages/ao_db/ao_db.js
var ao_db_exports = {};
__export(ao_db_exports, {
  load: () => load
});
module.exports = __toCommonJS(ao_db_exports);
var ko31 = __toESM(require_knockout_latest());

// src/common/router.js
var state = {};
window.history.replaceState({}, "", document.location.href);
function setUrlParam(param, newVal) {
  if (getUrlParam(param) == newVal) return;
  const search = window.location.search;
  const regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
  const query = search.replace(regex, "$1").replace(/&$/, "");
  const urlParams = (query.length > 2 ? query + "&" : "?") + (newVal ? param + "=" + newVal : "");
  state[param] = newVal;
  window.history.pushState(state, "", urlParams.toString());
}
function getUrlParam(param) {
  const results = new RegExp("[?&]" + param + "=([^&#]*)").exec(
    window.location.href
  );
  if (results == null) {
    return null;
  } else {
    return decodeURI(results[1]) || 0;
  }
}

// src/common/utilities.js
function NewUtilities() {
  const commonUtilities = this;
  const loadStart = /* @__PURE__ */ new Date();
  var m_siteUrl = window.context.pageContext.serverRelativeUrl;
  var m_listTitleRequests = "AuditRequests";
  var m_listNameRequests = "AuditRequests";
  var m_listTitleRequestsInternal = "AuditRequestsInternal";
  var m_listNameRequestsInternal = "AuditRequestsInternal";
  var m_listTitleResponses = "AuditResponses";
  var m_listNameResponses = "AuditResponses";
  var m_libTitleRequestDocs = "AuditRequestDocs";
  var m_libNameRequestDocs = "AuditRequestDocs";
  var m_libTitleCoverSheet = "AuditCoverSheets";
  var m_libNameCoverSheet = "AuditCoverSheets";
  var m_libTitleResponseDocs = "AuditResponseDocs";
  var m_libNameResponseDocs = "AuditResponseDocs";
  var m_libTitleResponseDocsEA = "AuditResponseDocsRO";
  var m_libNameResponseDocsEA = "AuditResponseDocsRO";
  var m_listTitleActionOffices = "AuditOrganizations";
  var m_listNameActionOffices = "AuditOrganizations";
  var m_listTitleEmailHistory = "AuditEmails";
  var m_listNameEmailHistory = "AuditEmails";
  var m_listTitleBulkResponses = "AuditBulkResponses";
  var m_listNameBulkResponses = "AuditBulkResponses";
  var m_listTitleBulkPermissions = "AuditBulkPermissions";
  var m_listNameBulkPermissions = "AuditBulkPermissions";
  var m_groupNameSpecialPermName1 = "CGFS Special Access1";
  var m_groupNameSpecialPermName2 = "CGFS Special Access2";
  var m_groupNameQA = "Quality Assurance";
  var m_groupNameEA = "External Auditors";
  var m_libResponseDocsLibraryGUID = null;
  var m_arrSiteGroups = null;
  var m_arrAOs = null;
  function m_fnRefresh(hard = false) {
    if (hard) {
      location.href = location.pathname;
      return;
    }
    var curPath = location.pathname;
    if ($("#tabs").html() != null && $("#tabs").html() != "") {
      var tabIndex = 0;
      try {
        tabIndex = $("#tabs").tabs("option", "active");
      } catch (ex) {
      }
      curPath += "?Tab=" + tabIndex;
      if (tabIndex == 0 && $("#ddlResponseName").val() != "") {
        curPath += "&ResNum=" + $("#ddlResponseName").val();
      } else if (tabIndex == 1) {
        var responseNumOpen = $("#ddlResponsesOpen").val();
        var responseNumProcessed = $("#ddlResponsesProcessed").val();
        if (responseNumOpen != null && responseNumOpen != "")
          curPath += "&ResNum=" + responseNumOpen;
        else if (responseNumProcessed != null && responseNumProcessed != "")
          curPath += "&ResNum=" + responseNumProcessed;
      }
      location.href = curPath;
    } else {
      location.reload();
    }
  }
  function m_fnOnLoadDisplayTimeStamp() {
    var curDate = /* @__PURE__ */ new Date();
    const loadTime = (curDate - loadStart) / 1e3;
    document.getElementById(
      "divLoading"
    ).innerHTML = `Loaded at ${curDate.format("MM/dd/yyyy hh:mm tt")}<br/>
    Load time: ${loadTime + "s"}
    `;
  }
  function m_fnOnLoadDisplayTabAndResponse() {
    var paramTabIndex = getUrlParam("Tab");
    if (paramTabIndex != null && paramTabIndex != "") {
      $("#tabs").tabs("option", "active", paramTabIndex);
    }
    var bFiltered = false;
    var paramResponseNum = getUrlParam("ResNum");
    if (paramResponseNum != null && paramResponseNum != "") {
      if (paramTabIndex == 0) {
        if ($("#ddlResponseName option[value='" + paramResponseNum + "']").length > 0) {
          $("#ddlResponseName").val(paramResponseNum).change();
          bFiltered = true;
        }
      } else {
        if ($("#ddlResponsesOpen option[value='" + paramResponseNum + "']").length > 0) {
          $("#ddlResponsesOpen").val(paramResponseNum).change();
        } else if ($("#ddlResponsesProcessed option[value='" + paramResponseNum + "']").length > 0) {
          $("#ddlResponsesProcessed").val(paramResponseNum).change();
        }
      }
    }
    if (!bFiltered) {
      $(".sr-response-item").show();
    }
  }
  function m_fnOnLoadFilterResponses(responseStatus1, responseStatus2) {
    var count = 0;
    var cntOpen = 0;
    var cntReOpened = 0;
    var resStatus1 = 0;
    var resStatus2 = 0;
    var eacher = $(".sr-response-item");
    eacher.each(function() {
      var reqStatus = $.trim($(this).find(".sr-response-requestStatus").text());
      var resStatus = $.trim($(this).find(".sr-response-status").text());
      if ((resStatus == responseStatus1 || resStatus == responseStatus2) && (reqStatus == "Open" || reqStatus == "ReOpened")) {
        $(this).addClass("highlighted");
        count++;
        if (resStatus == responseStatus1) resStatus1++;
        else if (resStatus == responseStatus2) resStatus2++;
        if (reqStatus == "Open") cntOpen++;
        else if (reqStatus == "ReOpened") cntReOpened++;
      }
    });
    if (count > 0) {
      $("#lblStatusReportResponsesMsg").html(
        "<span class='ui-icon ui-icon-alert'></span>There are " + count + " Responses pending your review"
      );
      if (resStatus1 > 0 && resStatus2 == 0)
        $("#ddlResponseStatus").val(responseStatus1).change();
      else if (resStatus2 > 0 && resStatus1 == 0)
        $("#ddlResponseStatus").val(responseStatus2).change();
    } else
      $("#lblStatusReportResponsesMsg").html(
        "<span class='ui-icon ui-icon-circle-check'></span>There are 0 Responses pending your review"
      );
  }
  function m_fnLoadSiteGroups(itemColl) {
    m_arrSiteGroups = new Array();
    var listItemEnumerator = itemColl.getEnumerator();
    while (listItemEnumerator.moveNext()) {
      var oListItem = listItemEnumerator.get_current();
      var id2 = oListItem.get_id();
      var loginName = oListItem.get_loginName();
      var title = oListItem.get_title();
      var groupObject = new Object();
      groupObject["ID"] = id2;
      groupObject["loginName"] = loginName;
      groupObject["title"] = title;
      groupObject["group"] = oListItem;
      m_arrSiteGroups.push(groupObject);
    }
  }
  function m_fnGetSPSiteGroup(groupName) {
    var userGroup = null;
    if (m_arrSiteGroups != null) {
      for (var x = 0; x < m_arrSiteGroups.length; x++) {
        if (m_arrSiteGroups[x].title == groupName) {
          userGroup = m_arrSiteGroups[x].group;
          break;
        }
      }
    }
    return userGroup;
  }
  function m_fnLoadActionOffices(itemColl) {
    m_arrAOs = new Array();
    var listItemEnumerator = itemColl.getEnumerator();
    while (listItemEnumerator.moveNext()) {
      var oListItem = listItemEnumerator.get_current();
      var id2 = oListItem.get_item("ID");
      var title = oListItem.get_item("Title");
      var userGroup = oListItem.get_item("UserGroup");
      if (userGroup != null) {
        userGroup = userGroup.get_lookupValue();
      } else userGroup = "";
      var aoObject = new Object();
      aoObject["ID"] = id2;
      aoObject["title"] = title;
      aoObject["userGroup"] = userGroup;
      m_arrAOs.push(aoObject);
    }
  }
  function m_fnGetAOSPGroupName(groupName) {
    var userGroup = null;
    if (m_arrAOs != null) {
      for (var x = 0; x < m_arrAOs.length; x++) {
        var oGroup2 = m_arrAOs[x];
        if (oGroup2.title == groupName) {
          userGroup = oGroup2.userGroup;
          break;
        }
      }
    }
    return userGroup;
  }
  function m_fnCheckSPItemHasGroupPermission(item, groupName, permissionLevel) {
    if (item == null || groupName == "" || groupName == null || permissionLevel == null)
      return false;
    var match = false;
    var roleAssignments = item.get_roleAssignments();
    if (roleAssignments == null) {
      alert("Error retrieving role assignments");
      return false;
    }
    var rolesEnumerator = roleAssignments.getEnumerator();
    while (rolesEnumerator.moveNext()) {
      var role = rolesEnumerator.get_current();
      if (role != null) {
        var roleMember = role.get_member();
        if (roleMember.isPropertyAvailable("Title")) {
          var memberTitleName = roleMember.get_title();
          var roleDefs = role.get_roleDefinitionBindings();
          if (roleDefs != null) {
            var roleDefsEnumerator = roleDefs.getEnumerator();
            while (roleDefsEnumerator.moveNext()) {
              var rd = roleDefsEnumerator.get_current();
              var rdName = rd.get_name();
              if (memberTitleName == groupName && rd.get_basePermissions().has(permissionLevel)) {
                match = true;
                break;
              }
            }
          }
        }
      }
    }
    return match;
  }
  function m_fnGoToResponse(responseTitle, isIA) {
    if (!isIA) {
      var bFound = false;
      $("#ddlResponsesOpen > option").each(function() {
        if ($(this).text() == responseTitle) {
          bFound = true;
          notifyId = SP.UI.Notify.addNotification(
            "Displaying Response (" + responseTitle + ")",
            false
          );
          $("#ddlResponsesOpen").val(responseTitle).change();
          return false;
        }
      });
      if (!bFound) {
        $("#ddlResponsesProcessed > option").each(function() {
          if ($(this).text() == responseTitle) {
            bFound = true;
            notifyId = SP.UI.Notify.addNotification(
              "Displaying Response (" + responseTitle + ")",
              false
            );
            $("#ddlResponsesProcessed").val(responseTitle).change();
            return false;
          }
        });
      }
      $("#tabs").tabs({ active: 1 });
    }
  }
  function m_fnGetResponseDocStyleTag2(documentStatus) {
    var styleTag = {};
    if (documentStatus == "Archived")
      styleTag = { "background-color": "Gainsboro" };
    else if (documentStatus == "Approved")
      styleTag = { "background-color": "PaleGreen" };
    else if (documentStatus == "Rejected")
      styleTag = { "background-color": "LightSalmon" };
    else if (documentStatus == "Sent to QA")
      styleTag = { "background-color": "LightCyan" };
    else if (documentStatus == "Submitted")
      styleTag = { "background-color": "LemonChiffon" };
    else if (documentStatus == "Marked for Deletion")
      styleTag = {
        "background-color": "Gainsboro",
        "font-style": "italic"
      };
    return styleTag;
  }
  function m_fnGetResponseDocStyleTag(documentStatus) {
    var styleTag = "";
    if (documentStatus == "Archived")
      styleTag = " style='background-color:Gainsboro;' ";
    else if (documentStatus == "Approved")
      styleTag = " style='background-color:PaleGreen;' ";
    else if (documentStatus == "Rejected")
      styleTag = " style='background-color:LightSalmon;' ";
    else if (documentStatus == "Sent to QA")
      styleTag = " style='background-color:LightCyan;' ";
    else if (documentStatus == "Submitted")
      styleTag = " style='background-color:LemonChiffon;' ";
    else if (documentStatus == "Marked for Deletion")
      styleTag = " style='background-color:Gainsboro; font-style:italic' title='Marked for Deletion by the Action Office' ";
    return styleTag;
  }
  function m_fnCheckIfEmailFolderExists(items, requestNumber) {
    var bFolderExists = false;
    var listItemEnumerator = items.getEnumerator();
    while (listItemEnumerator.moveNext()) {
      var folderItem = listItemEnumerator.get_current();
      var itemName = folderItem.get_displayName();
      if (itemName == requestNumber) {
        var bFolderExists = true;
        break;
      }
    }
    return bFolderExists;
  }
  var m_cntAddToEmailFolder = 0;
  var m_cntAddedToEmailFolder = 0;
  function m_fnCreateEmailFolder(list, requestNumber, requestItem, OnComplete) {
    m_cntAddToEmailFolder = 0;
    m_cntAddedToEmailFolder = 0;
    var currCtx = new SP.ClientContext.get_current();
    var web = currCtx.get_web();
    var itemCreateInfo = new SP.ListItemCreationInformation();
    itemCreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder);
    itemCreateInfo.set_leafName(requestNumber);
    const oNewEmailFolder = list.addItem(itemCreateInfo);
    oNewEmailFolder.set_item("Title", requestNumber);
    oNewEmailFolder.update();
    const currentUser2 = web.get_currentUser();
    const ownerGroup = web.get_associatedOwnerGroup();
    const memberGroup = web.get_associatedMemberGroup();
    const visitorGroup = web.get_associatedVisitorGroup();
    oNewEmailFolder.resetRoleInheritance();
    oNewEmailFolder.breakRoleInheritance(false, false);
    var roleDefBindingCollAdmin = SP.RoleDefinitionBindingCollection.newObject(currCtx);
    roleDefBindingCollAdmin.add(
      web.get_roleDefinitions().getByType(SP.RoleType.administrator)
    );
    var roleDefBindingCollContribute = SP.RoleDefinitionBindingCollection.newObject(currCtx);
    roleDefBindingCollContribute.add(
      web.get_roleDefinitions().getByType(SP.RoleType.contributor)
    );
    var roleDefBindingCollRestrictedRead = SP.RoleDefinitionBindingCollection.newObject(currCtx);
    roleDefBindingCollRestrictedRead.add(
      web.get_roleDefinitions().getByName("Restricted Read")
    );
    var roleDefBindingCollRestrictedContribute = SP.RoleDefinitionBindingCollection.newObject(currCtx);
    roleDefBindingCollRestrictedContribute.add(
      web.get_roleDefinitions().getByName("Restricted Contribute")
    );
    oNewEmailFolder.get_roleAssignments().add(ownerGroup, roleDefBindingCollAdmin);
    oNewEmailFolder.get_roleAssignments().add(memberGroup, roleDefBindingCollContribute);
    oNewEmailFolder.get_roleAssignments().add(visitorGroup, roleDefBindingCollRestrictedRead);
    var spGroupQA = commonUtilities.GetSPSiteGroup(
      commonUtilities.GetGroupNameQA()
    );
    if (spGroupQA != null)
      oNewEmailFolder.get_roleAssignments().add(spGroupQA, roleDefBindingCollRestrictedContribute);
    oNewEmailFolder.get_roleAssignments().getByPrincipal(currentUser2).deleteObject();
    function onUpdatePermsSucceeded() {
      if (this.requestItem) {
        var arrActionOffice = this.requestItem.get_item("ActionOffice");
        if (arrActionOffice == null || arrActionOffice.length == 0) {
          if (this.OnComplete) this.OnComplete(true);
          return;
        }
        for (var x = 0; x < arrActionOffice.length; x++) {
          var actionOfficeName = arrActionOffice[x].get_lookupValue();
          var actionOfficeGroupName = commonUtilities.GetAOSPGroupName(actionOfficeName);
          var actionOfficeGroup = commonUtilities.GetSPSiteGroup(
            actionOfficeGroupName
          );
          if (actionOfficeGroup != null) {
            let onUpdateAOPermsSucceeded = function() {
              m_cntAddedToEmailFolder++;
              if (m_cntAddedToEmailFolder == m_cntAddToEmailFolder) {
                if (this.OnComplete) this.OnComplete(true);
              }
            }, onUpdateAOPermsFailed = function(sender, args) {
              m_cntAddedToEmailFolder++;
              if (m_cntAddedToEmailFolder == m_cntAddToEmailFolder) {
                if (this.OnComplete) this.OnComplete(true);
              }
            };
            m_cntAddToEmailFolder++;
            var currCtx2 = new SP.ClientContext.get_current();
            var web2 = currCtx2.get_web();
            var roleDefBindingCollRestrictedContribute2 = SP.RoleDefinitionBindingCollection.newObject(currCtx2);
            roleDefBindingCollRestrictedContribute2.add(
              web2.get_roleDefinitions().getByName("Restricted Contribute")
            );
            this.oNewEmailFolder.get_roleAssignments().add(actionOfficeGroup, roleDefBindingCollRestrictedContribute2);
            var data3 = { OnComplete: this.OnComplete };
            currCtx2.executeQueryAsync(
              Function.createDelegate(data3, onUpdateAOPermsSucceeded),
              Function.createDelegate(data3, onUpdateAOPermsFailed)
            );
          }
        }
      } else {
        if (this.OnComplete) this.OnComplete(true);
      }
    }
    function onUpdatePermsFailed(sender, args) {
      statusId = SP.UI.Status.addStatus(
        "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
      );
    }
    var data2 = {
      /*item: oListItem, */
      requestItem,
      oNewEmailFolder,
      OnComplete
    };
    currCtx.executeQueryAsync(
      Function.createDelegate(data2, onUpdatePermsSucceeded),
      Function.createDelegate(data2, onUpdatePermsFailed)
    );
  }
  function m_fnSortResponseTitleNoCase(a, b) {
    var aTitle = a;
    var bTitle = b;
    let newA, newB;
    if (aTitle == null) aTitle = "";
    if (bTitle == null) bTitle = "";
    var aIndex = aTitle.lastIndexOf("-");
    if (aIndex >= 0) {
      var subA = aTitle.substring(0, aIndex + 1);
      var lastA = aTitle.replace(subA, "");
      var intA = parseInt(lastA, 10);
      var newIntA = commonUtilities.PadDigits(intA, 5);
      newA = subA + newIntA;
    } else newA = aTitle;
    var bIndex = bTitle.lastIndexOf("-");
    if (bIndex >= 0) {
      var subB = bTitle.substring(0, bIndex + 1);
      var lastB = bTitle.replace(subB, "");
      var intB = parseInt(lastB, 10);
      var newIntB = commonUtilities.PadDigits(intB, 5);
      newB = subB + newIntB;
    } else newB = bTitle;
    return newA.toLowerCase().localeCompare(newB.toLowerCase());
  }
  function m_fnSortResponseObjectNoCase(a, b) {
    var aTitle = a.title;
    var bTitle = b.title;
    var newA;
    var newB;
    if (aTitle == null) aTitle = "";
    if (bTitle == null) bTitle = "";
    var aIndex = aTitle.lastIndexOf("-");
    if (aIndex >= 0) {
      var subA = aTitle.substring(0, aIndex + 1);
      var lastA = aTitle.replace(subA, "");
      var intA = parseInt(lastA, 10);
      var newIntA = commonUtilities.PadDigits(intA, 5);
      newA = subA + newIntA;
    } else newA = aTitle;
    var bIndex = bTitle.lastIndexOf("-");
    if (bIndex >= 0) {
      var subB = bTitle.substring(0, bIndex + 1);
      var lastB = bTitle.replace(subB, "");
      var intB = parseInt(lastB, 10);
      var newIntB = commonUtilities.PadDigits(intB, 5);
      newB = subB + newIntB;
    } else newB = bTitle;
    return newA.toLowerCase().localeCompare(newB.toLowerCase());
  }
  function m_fnSortNoCase(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }
  function m_fnSortDate(a, b) {
    if (a == "") return -1;
    if (b == "") return 1;
    return new Date(a).getTime() - new Date(b).getTime();
  }
  function m_fnAddOptions(arr, ddlID, dateSort, responseSort) {
    if (arr == null) return;
    if (responseSort) arr.sort(m_fnSortResponseTitleNoCase);
    else if (!dateSort) arr.sort(m_fnSortNoCase);
    else arr.sort(m_fnSortDate);
    var rOptions = new Array(), j = -1;
    rOptions[++j] = "<option value=''>-Select-</option>";
    var arrLength = arr.length;
    for (var x = 0; x < arrLength; x++) {
      var option = $.trim(arr[x]);
      rOptions[++j] = "<option value='" + option + "'>" + option + "</option>";
    }
    var thisDDL = $(ddlID);
    thisDDL.empty().append(rOptions.join(""));
  }
  function m_fnExistsInArr(arr, val) {
    if (arr == null) return false;
    var arrLength = arr.length;
    for (var x = 0; x < arrLength; x++) {
      if (arr[x] == val) return true;
    }
    return false;
  }
  function m_fnGetTrueFalseIcon(val) {
    if (val == true)
      return "<span class='ui-icon ui-icon-check'>" + val + "</span>";
    else return "<span class='ui-icon ui-icon-close'>" + val + "</span>";
  }
  function m_fnGetFriendlyDisplayName(oListItem, fieldName) {
    var user = oListItem.get_item(fieldName);
    if (user == null) return "";
    else return user.get_lookupValue();
  }
  function m_fnPadDigits(n, totalDigits) {
    n = n.toString();
    var pd = "";
    if (totalDigits > n.length) {
      for (let i = 0; i < totalDigits - n.length; i++) {
        pd += "0";
      }
    }
    return pd + n.toString();
  }
  function m_fnPreciseRound(num, decimals) {
    var sign = num >= 0 ? 1 : -1;
    return (Math.round(num * Math.pow(10, decimals) + sign * 1e-3) / Math.pow(10, decimals)).toFixed(decimals);
  }
  function m_fnGetFriendlyFileSize(fileSize) {
    if (fileSize == null || fileSize == "") return "";
    if (fileSize > 1048576) {
      fileSize = commonUtilities.PreciseRound(fileSize / 1048576, 2) + " MB";
    } else if (fileSize > 1024) {
      fileSize = commonUtilities.PreciseRound(fileSize / 1024, 2) + " KB";
    } else {
      fileSize += " B";
    }
    return fileSize;
  }
  function m_fnISODateString(d) {
    function pad(n) {
      return n < 10 ? "0" + n : n;
    }
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "Z";
  }
  function m_fnBindHandlerResponseDoc() {
    $(".requestInfo-response-doc img").click(function(event) {
      event.preventDefault();
      var curIcon = $(this).attr("src");
      if (curIcon == "/_layouts/images/minus.gif")
        $(this).attr("src", "/_layouts/images/plus.gif");
      else $(this).attr("src", "/_layouts/images/minus.gif");
      $(this).parent().parent().nextUntil("tr.requestInfo-response-doc").each(function() {
        $(this).toggleClass("collapsed");
      });
    });
  }
  function m_fnGetLookupFormField(fieldTitle) {
    if ($("select[title='" + fieldTitle + "']").html() !== null) {
      return $("select[title='" + fieldTitle + "']");
    } else {
      return $("input[title='" + fieldTitle + "']");
    }
  }
  function m_fnGetLookupDisplayText(fieldTitle) {
    if ($("select[title='" + fieldTitle + "']").html() !== null) {
      return $("select[title='" + fieldTitle + "'] option:selected").text();
    } else {
      return $("input[title='" + fieldTitle + "']").val();
    }
  }
  function m_fnSetLookupFromFieldNameByText(fieldName, text) {
    try {
      if (text == void 0) return;
      var theSelect = m_fnGetTagFromIdentifierAndTitle("select", "", fieldName);
      if (theSelect == null) {
        var theInput = m_fnGetTagFromIdentifierAndTitle("input", "", fieldName);
        ShowDropdown(theInput.id);
        var opt = document.getElementById(theInput.opt);
        m_fnSetSelectedOptionByText(opt, text);
        OptLoseFocus(opt);
      } else {
        m_fnSetSelectedOptionByText(theSelect, text);
      }
    } catch (ex) {
    }
  }
  function m_fnSetSelectedOptionByText(select, text) {
    var opts = select.options;
    var optLength = opts.length;
    if (select == null) return;
    for (var i = 0; i < optLength; i++) {
      if (opts[i].text == text) {
        select.selectedIndex = i;
        return true;
      }
    }
    return false;
  }
  function m_fnGetTagFromIdentifierAndTitle(tagName, identifier, title) {
    var idLength = identifier.length;
    var tags = document.getElementsByTagName(tagName);
    for (var i = 0; i < tags.length; i++) {
      var tagID = tags[i].id;
      if (tags[i].title == title && (identifier == "" || tagID.indexOf(identifier) == tagID.length - idLength)) {
        return tags[i];
      }
    }
    return null;
  }
  function m_fnViewUserManuals(docType) {
    var options = SP.UI.$create_DialogOptions();
    options.title = "User Manual";
    options.height = 250;
    if (docType != null)
      options.url = commonUtilities.GetSiteUrl() + "/SitePages/AuditUserManuals.aspx?FilterField1=DocType&FilterValue1=" + docType;
    else
      options.url = commonUtilities.GetSiteUrl() + "/SitePages/AuditUserManuals.aspx";
    SP.UI.ModalDialog.showModalDialog(options);
  }
  function m_fnPrintPage(pageTitle, divTbl) {
    var curDate = /* @__PURE__ */ new Date();
    var siteUrl = commonUtilities.GetSiteUrl();
    var cssLink1 = siteUrl + "/siteassets/css/tablesorter/style.css?v=" + curDate.format("MM_dd_yyyy");
    var cssLink2 = siteUrl + "/siteAssets/css/audit_styles.css?v=" + curDate.format("MM_dd_yyyy");
    var divOutput = $(divTbl).html();
    var updatedDivOutput = $("<div>").append(divOutput);
    updatedDivOutput.find(".sr-response-title a").each(function() {
      $(this).removeAttr("onclick");
      $(this).removeAttr("href");
    });
    divOutput = updatedDivOutput.html();
    var printDateString = curDate.format("MM/dd/yyyy hh:mm tt");
    printDateString = "<div style='padding-bottom:10px;'>" + printDateString + "</div>";
    divOutput = printDateString + divOutput;
    var cssFile1 = $("<div></div>");
    var cssFile2 = $("<div></div>");
    var def1 = $.Deferred();
    var def2 = $.Deferred();
    var cssFileText = "";
    cssFile1.load(cssLink1, function() {
      cssFileText += "<style>" + cssFile1.html() + "</style>";
      def1.resolve();
    });
    cssFile2.load(cssLink2, function() {
      cssFileText += "<style>" + cssFile2.html() + "</style>";
      def2.resolve();
    });
    $.when(def1, def2).done(function() {
      var html3 = "<HTML>\n<HEAD>\n\n<Title>" + pageTitle + "</Title>\n" + cssFileText + "\n<style>.hideOnPrint, .rowFilters {display:none}</style>\n</HEAD>\n<BODY>\n" + divOutput + "\n</BODY>\n</HTML>";
      var printWP = window.open("", "printWebPart");
      printWP.document.open();
      printWP.document.write(html3);
      printWP.document.close();
      printWP.print();
    });
  }
  function m_fnExportToCsv(fileName, tableName, removeHeader) {
    var data2 = m_fnGetCellValues(tableName);
    if (removeHeader == true) data2 = data2.slice(1);
    var csv = m_fnConvertToCsv(data2);
    if (navigator.userAgent.search("Trident") >= 0) {
      window.CsvExpFrame.document.open("text/html", "replace");
      window.CsvExpFrame.document.write(csv);
      window.CsvExpFrame.document.close();
      window.CsvExpFrame.focus();
      window.CsvExpFrame.document.execCommand(
        "SaveAs",
        true,
        fileName + ".csv"
      );
    } else {
      var uri = "data:text/csv;charset=utf-8," + escape(csv);
      var downloadLink = document.createElement("a");
      downloadLink.href = uri;
      downloadLink.download = fileName + ".csv";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }
  function m_fnGetCellValues(tableName) {
    var table = document.getElementById(tableName);
    if (table.innerHTML.indexOf("rowFilters") >= 0) {
      var deets = $("<div>").append(table.outerHTML);
      deets.find(".rowFilters").each(function() {
        $(this).remove();
      });
      table = deets.find("table")[0];
    }
    if (table.innerHTML.indexOf("footer") >= 0) {
      var deets = $("<div>").append(table.outerHTML);
      deets.find(".footer").each(function() {
        $(this).remove();
      });
      table = deets.find("table")[0];
    }
    var tableArray = [];
    for (var r = 0, n = table.rows.length; r < n; r++) {
      tableArray[r] = [];
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        var text = table.rows[r].cells[c].textContent || table.rows[r].cells[c].innerText;
        tableArray[r][c] = text.trim();
      }
    }
    return tableArray;
  }
  function m_fnConvertToCsv(objArray) {
    var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    var str = "sep=,\r\n";
    var line = "";
    var index;
    var value;
    for (var i = 0; i < array.length; i++) {
      line = "";
      var array1 = array[i];
      for (index in array1) {
        if (array1.hasOwnProperty(index)) {
          value = array1[index] + "";
          line += '"' + value.replace(/"/g, '""') + '",';
        }
      }
      line = line.slice(0, -1);
      str += line + "\r\n";
    }
    return str;
  }
  var publicMembers = {
    GetSiteUrl: function() {
      if (m_siteUrl == "/") return "";
      else return m_siteUrl;
    },
    GetListTitleRequests: function() {
      return m_listTitleRequests;
    },
    GetListNameRequests: function() {
      return m_listNameRequests;
    },
    GetListTitleRequestsInternal: function() {
      return m_listTitleRequestsInternal;
    },
    GetListNameRequestsInternal: function() {
      return m_listNameRequestsInternal;
    },
    GetListTitleResponses: function() {
      return m_listTitleResponses;
    },
    GetListNameResponses: function() {
      return m_listNameResponses;
    },
    GetLibTitleRequestDocs: function() {
      return m_libTitleRequestDocs;
    },
    GetLibNameRequestDocs: function() {
      return m_libNameRequestDocs;
    },
    GetLibTitleCoverSheets: function() {
      return m_libTitleCoverSheet;
    },
    GetLibNameCoverSheets: function() {
      return m_libNameCoverSheet;
    },
    GetLibTitleResponseDocs: function() {
      return m_libTitleResponseDocs;
    },
    GetLibNameResponseDocs: function() {
      return m_libNameResponseDocs;
    },
    GetLibTitleResponseDocsEA: function() {
      return m_libTitleResponseDocsEA;
    },
    GetLibNameResponseDocsEA: function() {
      return m_libNameResponseDocsEA;
    },
    GetListTitleActionOffices: function() {
      return m_listTitleActionOffices;
    },
    GetListNameActionOffices: function() {
      return m_listNameActionOffices;
    },
    GetListTitleEmailHistory: function() {
      return m_listTitleEmailHistory;
    },
    GetListNameEmailHistory: function() {
      return m_listNameEmailHistory;
    },
    GetListTitleBulkResponses: function() {
      return m_listTitleBulkResponses;
    },
    GetListNameBulkResponses: function() {
      return m_listNameBulkResponses;
    },
    GetListTitleBulkPermissions: function() {
      return m_listTitleBulkPermissions;
    },
    GetListNameBulkPermissions: function() {
      return m_listNameBulkPermissions;
    },
    GetGroupNameSpecialPerm1: function() {
      return m_groupNameSpecialPermName1;
    },
    GetGroupNameSpecialPerm2: function() {
      return m_groupNameSpecialPermName2;
    },
    GetGroupNameQA: function() {
      return m_groupNameQA;
    },
    GetGroupNameEA: function() {
      return m_groupNameEA;
    },
    Refresh: m_fnRefresh,
    OnLoadDisplayTimeStamp: m_fnOnLoadDisplayTimeStamp,
    OnLoadDisplayTabAndResponse: m_fnOnLoadDisplayTabAndResponse,
    OnLoadFilterResponses: function(responseStatus1, responseStatus2) {
      m_fnOnLoadFilterResponses(responseStatus1, responseStatus2);
    },
    SetResponseDocLibGUID: function(libGUID) {
      m_libResponseDocsLibraryGUID = libGUID;
    },
    GetResponseDocLibGUID: function() {
      return m_libResponseDocsLibraryGUID;
    },
    LoadSiteGroups: function(itemColl) {
      m_fnLoadSiteGroups(itemColl);
    },
    GetSPSiteGroup: function(groupName) {
      return m_fnGetSPSiteGroup(groupName);
    },
    LoadActionOffices: function(itemColl) {
      m_fnLoadActionOffices(itemColl);
    },
    GetActionOffices: function() {
      return m_arrAOs;
    },
    GetAOSPGroupName: function(groupName) {
      return m_fnGetAOSPGroupName(groupName);
    },
    CheckSPItemHasGroupPermission: function(item, groupName, permissionLevel) {
      return m_fnCheckSPItemHasGroupPermission(
        item,
        groupName,
        permissionLevel
      );
    },
    GoToResponse: function(responseTitle, isIA) {
      m_fnGoToResponse(responseTitle, isIA);
    },
    GetResponseDocStyleTag: function(documentStatus) {
      return m_fnGetResponseDocStyleTag(documentStatus);
    },
    GetResponseDocStyleTag2: function(documentStatus) {
      return m_fnGetResponseDocStyleTag2(documentStatus);
    },
    CheckIfEmailFolderExists: function(items, requestNumber) {
      return m_fnCheckIfEmailFolderExists(items, requestNumber);
    },
    CreateEmailFolder: function(list, requestNumber, requestItem, OnComplete) {
      return m_fnCreateEmailFolder(
        list,
        requestNumber,
        requestItem,
        OnComplete
      );
    },
    AddOptions: function(arr, ddlID, dateSort, responseSort) {
      m_fnAddOptions(arr, ddlID, dateSort, responseSort);
    },
    ExistsInArr: function(arr, val) {
      return m_fnExistsInArr(arr, val);
    },
    GetTrueFalseIcon: function(val) {
      return m_fnGetTrueFalseIcon(val);
    },
    PadDigits: function(n, totalDigits) {
      return m_fnPadDigits(n, totalDigits);
    },
    PreciseRound: function(num, decimals) {
      return m_fnPreciseRound(num, decimals);
    },
    GetFriendlyFileSize: function(fileSize) {
      return m_fnGetFriendlyFileSize(fileSize);
    },
    GetISODateString: function(d) {
      return m_fnISODateString(d);
    },
    GetFriendlyDisplayName: function(oListItem, fieldName) {
      return m_fnGetFriendlyDisplayName(oListItem, fieldName);
    },
    BindHandlerResponseDoc: m_fnBindHandlerResponseDoc,
    PrintStatusReport: function(pageTitle, divTbl) {
      m_fnPrintPage(pageTitle, divTbl);
    },
    ExportToCsv: function(fileName, tableName, removeHeader) {
      m_fnExportToCsv(fileName, tableName, removeHeader);
    },
    ViewUserManuals: function(docType) {
      m_fnViewUserManuals(docType);
    },
    //GetLookupFieldText: function( fieldName ){ return m_fnGetLookupFieldText( fieldName); },
    GetLookupDisplayText: function(fieldName) {
      return m_fnGetLookupDisplayText(fieldName);
    },
    GetLookupFormField: function(fieldName) {
      return m_fnGetLookupFormField(fieldName);
    },
    SetLookupFromFieldNameByText: function(fieldName, text) {
      return m_fnSetLookupFromFieldNameByText(fieldName, text);
    },
    SortResponseObjects: function(a, b) {
      return m_fnSortResponseObjectNoCase(a, b);
    },
    SortResponseTitles: m_fnSortResponseTitleNoCase
  };
  return publicMembers;
}

// src/pages/ao_db/ao_db.html
var import_meta_document = new DocumentFragment();
var htmlFrag = `<body><iframe id="CsvExpFrame" style="display: none"></iframe>\r
\r
<div 
  id="divCounter"\r
  style="display: none"\r
  title="used to auto refresh the page"\r
>\r
  600\r
</div>\r
\r
<div class="audit">\r
  \r
  <div class="tasks blocking dimmer" data-bind="css: {'active': $data.length}">\r
    <span class="loader"></span>\r
    <ul class="" data-bind="foreach: $data">\r
      <li data-bind="text: msg + '... ' + Status()"></li>\r
    </ul>\r
  </div>\r
  \r
\r
  \r
  <div class="tasks running">\r
    <ul class="" data-bind="foreach: $data">\r
      <li data-bind="text: msg + '... ' + Status()"></li>\r
    </ul>\r
  </div>\r
  \r
  <div id="divLoading" style="color: green; padding-bottom: 10px">\r
    Please Wait... Loading\r
    <span 
      data-bind="visible: arrResponses().length > 0 && debugMode, text: arrResponses().length"\r
    ></span>\r
  </div>\r
  <div id="divUsersGroups" style="color: green; padding-bottom: 10px"></div>\r
  <div class="audit-body">\r
    <div class="reports-container">\r
      <div id="divRefresh" class="quick-links" style="display: none">\r
        <div>\r
          <a 
            title="Refresh this page"\r
            href="javascript:void(0)"\r
            data-bind="click: refresh"\r
            ><span class="ui-icon ui-icon-refresh"></span>Refresh</a>\r
        </div>\r
        <div>\r
          <a 
            title="View User Manual"\r
            href="javascript:void(0)"\r
            onclick="Audit.Common.Utilities.ViewUserManuals('AO User Manual')"\r
            ><span class="ui-icon ui-icon-help"></span>User Manual</a>\r
        </div>\r
        <div>\r
          <a title="Help" href="mailto:cgfsauditrequests@state.gov"\r
            ><span class="ui-icon ui-icon-mail-closed"></span>Request Help</a>\r
        </div>\r
      </div>\r
      <div id="" style="margin-top: 20px">\r
        \r
        <ul class="ui-tabs-nav" data-bind="foreach: tabOpts">\r
          <li 
            data-bind="text: linkText, \r
            click: $parent.clickTabLink, \r
            css: {active: $parent.isSelected($data)}"\r
          ></li>\r
        </ul>\r
        \r
        <div 
          data-bind="template: {\r
              name: template.id,\r
              data: template.data\r
            },\r
            visible: $parent.isSelected($data)"\r
        ></div>\r
        \r
        \r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
\r
\r
\r
<div id="divTest"></div>\r
<div id="__REQUESTDIGEST" style="display: none"></div>\r
</body>`;
var fragment = new DOMParser().parseFromString(htmlFrag, "text/html");
import_meta_document.append(...fragment.body.childNodes);
var ao_db_default = import_meta_document;

// src/components/tabs/tabs_module.js
var ko = __toESM(require_knockout_latest());
var TabsModule = class {
  constructor(tabOpts, urlParam = "Tab") {
    this.urlParam = urlParam;
    ko.utils.arrayPushAll(this.tabOpts, tabOpts);
    this.selectedTab.subscribe(this.tabChangeHandler);
    window.addEventListener("popstate", this.popStateHandler);
  }
  tabOpts = ko.observableArray();
  selectedTab = ko.observable();
  isSelected = (tab) => {
    return tab.id == this.selectedTab()?.id;
  };
  clickTabLink = (tab) => {
    this.selectedTab(tab);
    console.log("selected: " + tab.id);
  };
  selectTab = (tab) => this.selectById(tab.id);
  selectById = (tabId) => {
    const tabById = this.tabOpts().find((tab) => tab.id == tabId) ?? this.getDefaultTab();
    this.selectedTab(tabById);
  };
  getDefaultTab = () => this.tabOpts()[0];
  tabChangeHandler = (newTab) => {
    if (newTab) setUrlParam(this.urlParam, newTab.id);
  };
  popStateHandler = (event) => {
    if (event.state) {
      if (event.state[this.urlParam])
        this.selectById(event.state[this.urlParam]);
    }
  };
};
var Tab = class {
  constructor(id2, linkText, template) {
    this.id = id2;
    this.linkText = linkText;
    this.template = template;
  }
};

// src/pages/ao_db/ao_db.js
init_application_db_context();

// src/services/approvals_service.js
init_entities2();
init_application_db_context();

// src/services/audit_email_service.js
init_application_db_context();

// src/services/permission_manager.js
init_entities2();
init_entities();
init_application_db_context();
init_store();
init_infrastructure();
init_people_manager();

// src/services/tasks.js
var ko29 = __toESM(require_knockout_latest());

// src/value_objects/task.js
var ko28 = __toESM(require_knockout_latest());
var taskStates = {
  pending: "Pending",
  aging: "Aging",
  completed: "Completed"
};
var Task = class {
  constructor({ msg, blocking }) {
    this.msg = msg;
    this.blocking = blocking;
    this.Status(taskStates.pending);
  }
  msg;
  blocking;
  Status = ko28.observable();
  timeout = window.setTimeout(() => {
    console.warn("this task is aging:", this);
    this.Status(taskStates.aging);
  }, 5e3);
  markComplete = () => {
    window.clearTimeout(this.timeout);
    this.Status(taskStates.completed);
  };
  // Should this task block user input?
  IsBlocking = ko28.pureComputed(
    () => this.blocking && this.Status() != taskStates.completed
  );
};
var ProgressTask = class _ProgressTask {
  constructor({ msg, blocking }) {
    this.msg = msg;
    this.blocking = blocking;
    this.Status(taskStates.pending);
  }
  msg;
  blocking;
  Status = ko28.observable();
  updateProgress = ({ percentDone }) => {
    this.Status(`${parseInt(percentDone * 100)}%`);
  };
  setTimeout = () => window.setTimeout(() => {
    console.warn("this task is aging:", this);
    this.Status(`${this.Status()} (${taskStates.aging})`);
  }, 5e4);
  resetTimeout = () => {
    window.clearTimeout(this.timeout);
    this.timeout = this.setTimeout();
  };
  timeout = this.setTimeout();
  markComplete = () => {
    window.clearTimeout(this.timeout);
    this.Status(taskStates.completed);
  };
  // Should this task block user input?
  IsBlocking = ko28.pureComputed(
    () => this.blocking && this.Status() != taskStates.completed
  );
  static Create(params) {
    return new _ProgressTask(params);
  }
};

// src/services/tasks.js
var runningTasks = ko29.observableArray();
var blockingTasks = ko29.pureComputed(() => {
  return runningTasks().filter((task) => task.IsBlocking()) ?? [];
});
var TaskDef = class {
  constructor(msg, blocking = false, type = null) {
    this.msg = msg;
    this.blocking = blocking;
    this.type = type;
  }
  msg;
  blocking;
  type;
};
var taskDefs = {
  init: { msg: "Initializing the Application", blocking: true },
  save: { msg: "Saving Request", blocking: true },
  newRequest: { msg: "Processing New Request", blocking: true },
  cancelAction: { msg: "Cancelling Action", blocking: true },
  view: { msg: "Viewing Request", blocking: false },
  refresh: { msg: "Refreshing Request", blocking: false },
  permissionsRequest: {
    msg: "Updating Request Item Permissions",
    blocking: true
  },
  permissionsResponse: (responseTitle) => {
    return {
      msg: "Updating Response Item Permissions: " + responseTitle,
      blocking: true
    };
  },
  permissionsResponseFolder: (responseTitle) => {
    return {
      msg: "Ensuring Response Folder Item Permissions: " + responseTitle,
      blocking: true
    };
  },
  ensureResponseDocFolder: (folderName) => {
    return {
      msg: "Ensuring Response Folder: " + folderName,
      blocking: true
    };
  },
  permissionsResponseAndFolder: (responseTitle) => {
    return {
      msg: "Updating Response and Folder Item Permissions: " + responseTitle,
      blocking: true
    };
  },
  permissionsEmailFolder: {
    msg: "Updating Email Folder Permissions",
    blocking: true
  },
  permissionsCoversheet: (coversheetName) => {
    return {
      msg: "Updating Coversheet Permissions: " + coversheetName,
      blocking: true
    };
  },
  ensurePagePermissions: (page) => new TaskDef("Ensuring Page Permissions: " + page),
  resetPagePermissions: (page) => new TaskDef("Resetting Page Permissions: " + page, true),
  ensureListPermissions: (entitySet) => new TaskDef("Ensuring List Permissions: " + entitySet.ListDef.title),
  resetListPermissions: (entitySet) => new TaskDef("Resetting List Permissions: " + entitySet.ListDef.title, true),
  deleteEmailFolder: { msg: "Deleting Email Folder", blocking: true },
  newResponse: (responseTitle) => {
    return {
      msg: "Submitting new Response: " + responseTitle,
      blocking: true
    };
  },
  updateResponse: (responseTitle) => {
    return {
      msg: "Updating Response: " + responseTitle,
      blocking: true
    };
  },
  deleteResponse: (responseTitle) => {
    return {
      msg: "Deleting Response: " + responseTitle,
      blocking: true
    };
  },
  closeResponse: (responseTitle) => {
    return {
      msg: "Closing Response: " + responseTitle,
      blocking: true
    };
  },
  uploadResponseDoc: (responseDocTitle) => {
    return {
      msg: "Uploading Response Document: " + responseDocTitle,
      blocking: true,
      type: ProgressTask
    };
  },
  updateResponseDoc: (responseDocTitle) => {
    return {
      msg: "Updating Response Document: " + responseDocTitle,
      blocking: true
    };
  },
  approveResponseDoc: (responseDocTitle) => {
    return {
      msg: "Approving Response Document: " + responseDocTitle,
      blocking: true
    };
  },
  deleteResponseDocFolder: (responseTitle) => {
    return {
      msg: "Deleting Response Document Folder: " + responseTitle,
      blocking: true
    };
  },
  uploadCoversheet: (coversheetName) => {
    return {
      msg: "Uploading Coversheet: " + coversheetName,
      blocking: true,
      type: ProgressTask
    };
  },
  updateCoversheet: (coversheetName) => {
    return {
      msg: "Updating Coversheet: " + coversheetName,
      blocking: true
    };
  },
  deleteCoversheet: (coversheetName) => {
    return {
      msg: "Deleting Coversheet: " + coversheetName,
      blocking: true
    };
  },
  deleteRequestInternalItem: {
    msg: "Deleting Request Internal Item",
    blocking: true
  },
  newComment: { msg: "Submitting Comment", blocking: false },
  refreshComments: { msg: "Refreshing Comments", blocking: false },
  notifyComment: { msg: "Sending Comment Email", blocking: false },
  removeComment: { msg: "Removing Comment", blocking: false },
  newAction: { msg: "Submitting Action", blocking: false },
  refreshActions: { msg: "Refreshing Actions", blocking: false },
  newAttachment: { msg: "Submitting Attachment", blocking: false },
  refreshAttachments: { msg: "Refreshing Attachments", blocking: false },
  approve: { msg: "Approving Request", blocking: true },
  lock: { msg: "Locking Request", blocking: true },
  closing: { msg: "Closing Request", blocking: true }
};
var addTask = (taskDef) => {
  let newTask;
  if (taskDef.type) {
    newTask = taskDef.type.Create(taskDef);
  } else {
    newTask = new Task(taskDef);
  }
  runningTasks.push(newTask);
  return newTask;
};
var finishTask = function(activeTask) {
  if (activeTask) {
    activeTask.markComplete();
    window.setTimeout(() => removeTask(activeTask), 3e3);
  }
};
var removeTask = function(taskToRemove) {
  runningTasks.remove(taskToRemove);
};

// src/services/audit_email_service.js
init_people_manager();
init_infrastructure();
init_audit_ro_email_log();

// src/services/audit_request_service.js
init_application_db_context();
init_people_manager();
init_infrastructure();
init_entities2();
init_entities();

// src/services/coversheet_manager.js
init_application_db_context();
init_people_manager();
init_infrastructure();
init_entities();
init_entities2();

// src/services/audit_request_service.js
init_store();

// src/services/audit_response_service.js
init_entities2();
init_application_db_context();

// src/sal/components/modal/modalDialog.js
var ko30 = __toESM(require_knockout_latest());
init_infrastructure();

// src/sal/components/modal/ModalDialogTemplate.js
init_infrastructure();
var modalDialogTemplate = html2`
  <dialog
    id=""
    class="card bg-dark draggable modal-dialog"
    data-bind="attr: {id: getUniqueId() }"
  >
    <!-- Can't use 'with: currentDialog' since we need to register our 
      javascript event listeners for grabbing and resizing -->
    <div class="card-header bg-dark grabber">
      <h2 class="card-title" data-bind="text: title"></h2>
      <h2 class="card-title">
        <i class="fa-solid fa-xmark pointer" data-bind="click: clickClose"></i>
      </h2>
    </div>
    <div class="dimmer" data-bind="css: {'active': form.saving }">
      <span class="loader"></span>
      <ul class="" data-bind="foreach: $root.blockingTasks">
        <li data-bind="text: msg + '...'"></li>
      </ul>
    </div>
    <div
      class="card-body"
      data-bind="component: { name: form.componentName, params: form.params }"
    ></div>
    <div class="card-actions">
      <button
        style
        type="button"
        class="btn btn-danger"
        data-bind="click: clickClose"
      >
        Cancel
      </button>
    </div>
  </dialog>
`;

// src/sal/components/modal/modalDialog.js
var componentName = "modal-dialog-component";
var currentDialogs = ko30.observableArray();
var toggle;
var ModalDialogModule = class {
  constructor(dialogOpts) {
    this.dialogOpts = dialogOpts;
    this.title = dialogOpts.title;
    this.dialogReturnValueCallback = dialogOpts.dialogReturnValueCallback;
    this.form = dialogOpts.form;
    if (this.form?.onComplete) {
      alert("Pass the form onComplete to the modal dialog!");
      return;
    }
    this.form.onComplete = this.close.bind(this);
    toggle = this.toggle;
  }
  toggle = (show = null) => {
    if (show == null) show = !this.dlgElement.hasAttribute("open");
    show ? this.showModal() : this.hide();
  };
  showModal = () => {
    this.dlgElement.showModal();
    this.dlgElement.classList.add("active");
  };
  clickClose = () => {
    this.close(false);
  };
  hide = () => {
    this.dlgElement.close();
    this.dlgElement.classList.remove("active");
  };
  close(result) {
    this.dlgElement.close();
    this.dlgElement.classList.remove("active");
    if (this.dialogReturnValueCallback) this.dialogReturnValueCallback(result);
    currentDialogs.remove(this.dialogOpts);
  }
  _id;
  getUniqueId = () => {
    if (!this._id) {
      this._id = "field-" + Math.floor(Math.random() * 1e4);
    }
    return this._id;
  };
  koDescendantsComplete = function(node) {
    this.dlgElement = node.querySelector("dialog");
    dragElement(this.dlgElement);
    resizeDialog(this.dlgElement);
    this.showModal();
  };
};
directRegisterComponent(componentName, {
  template: modalDialogTemplate,
  viewModel: ModalDialogModule
});
function resizeDialog(elmnt) {
  elmnt.style.width = "550px";
  elmnt.style.height = "";
  elmnt.style.top = "125px";
  elmnt.style.left = (window.GetViewportWidth() - 550) / 2 + "px";
}
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const dragger = elmnt.querySelector(".grabber");
  if (dragger) {
    dragger.onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// src/services/audit_response_service.js
init_sal();
init_validation_error();
init_people_manager();
async function uploadResponseDocFile(response, file) {
  const uploadResponseDocTask = addTask(taskDefs.uploadResponseDoc(file.name));
  const fileMetadata = {
    Title: file.name,
    ReqNumId: response.ReqNum.Value().ID,
    ResIDId: response.ID
  };
  await appContext.AuditResponseDocs.UploadFileToFolderAndUpdateMetadata(
    file,
    file.name,
    response.Title.Value(),
    fileMetadata,
    ({ currentBlock, totalBlocks }) => uploadResponseDocTask.updateProgress({
      percentDone: currentBlock / totalBlocks
    })
  );
  finishTask(uploadResponseDocTask);
}

// src/services/index.js
init_people_manager();

// src/services/legacy_helpers.js
init_infrastructure();
async function getAllItems(listTitle, fields = null) {
  let listItemsResults = [];
  let listItems;
  const currCtx = new SP.ClientContext.get_current();
  const web = currCtx.get_web();
  const list = web.get_lists().getByTitle(listTitle);
  const viewFields = viewFieldsStringBuilder(fields);
  const camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml(
    `<View Scope="RecursiveAll"><Query></Query><RowLimit>5000</RowLimit>${viewFields}</View>`
  );
  let position = new SP.ListItemCollectionPosition();
  position.set_pagingInfo("Paged=TRUE");
  while (position != null) {
    console.log("Legacy Helper - getAllItems", listTitle, position);
    camlQuery.set_listItemCollectionPosition(position);
    listItems = list.getItems(camlQuery);
    currCtx.load(listItems);
    await executeQuery(currCtx).catch((sender, args) => {
      console.warn(sender);
    });
    const listEnumerator = listItems.getEnumerator();
    while (listEnumerator.moveNext()) {
      listItemsResults.push(listEnumerator.get_current());
    }
    position = listItems.get_listItemCollectionPosition();
  }
  return listItemsResults;
}
function viewFieldsStringBuilder(fields) {
  if (!fields) return "";
  return `
  <ViewFields>${fields.map(
    (field) => `<FieldRef Name="${field}"></FieldRef>`
  )}</ViewFields>
  `;
}

// src/pages/ao_db/ao_db.js
init_knockout_extensions();
var Audit2 = window.Audit || {
  Common: {}
};
Audit2.AOReport = Audit2.AOReport || {};
var responseParam = "ResNum";
function NewReportPage() {
  var paramShowSiteActionsToAnyone = getUrlParam("ShowSiteActions");
  if (paramShowSiteActionsToAnyone != true) {
    $("#RibbonContainer-TabRowLeft").hide();
    $(".ms-siteactionsmenu").hide();
  }
  function SetTimer() {
    var intervalRefreshID = setInterval(function() {
      var divVal = $("#divCounter").text();
      var count = divVal * 1 - 1;
      $("#divCounter").text(count);
      if (count <= 0) {
        if (!Audit2.AOReport.Report.IsTransactionExecuting())
          Audit2.Common.Utilities.Refresh();
        else {
          clearInterval(intervalRefreshID);
          $("#divCounter").text("1200");
          SetTimer();
        }
      }
    }, 1e3);
  }
  SetTimer();
}
Audit2.AOReport.NewReportPage = function() {
  var m_bigMap = new Object();
  var m_arrRequests = new Array();
  var m_arrResponses = new Array();
  var m_arrPermissions = new Array();
  var m_IA_SPGroupName = null;
  var m_IA_ActionOffice = null;
  var ownerGroup, memberGroup, visitorGroup = null;
  var m_groupColl = null;
  var m_requestItems = null;
  var m_responseItems = null;
  var m_ResponseDocsItems = null;
  var m_aoItems = null;
  var m_responseDocsLibrary = null;
  var m_statusToFilterOn = "";
  var m_curResponseSelectedIsEditableByAO = false;
  var m_bIsTransactionExecuting = false;
  var m_responseStatus1 = "1-Open";
  var m_responseStatus2 = "3-Returned to Action Office";
  function ViewModel() {
    var self = this;
    self.debugMode = ko31.observable(false);
    self.siteUrl = Audit2.Common.Utilities.GetSiteUrl();
    self.tabOpts = {
      Responses: new Tab("response-report", "Status Report", {
        id: "responseStatusReportTemplate",
        data: self
      }),
      ResponseDetail: new Tab("response-detail", "Responses", {
        id: "responseDetailTemplate",
        data: self
      })
    };
    self.tabs = new TabsModule(Object.values(self.tabOpts));
    self.runningTasks = runningTasks;
    self.blockingTasks = blockingTasks;
    self.arrResponses = ko31.observableArray(null);
    self.arrFilteredResponsesCount = ko31.observable(0);
    self.cntPendingReview = ko31.observable(0);
    self.ddOptionsResponseTabRequestID = ko31.observableArray();
    self.ddOptionsResponseTabRequestStatus = ko31.observableArray();
    self.ddOptionsResponseTabRequestInternalDueDate = ko31.observableArray();
    self.ddOptionsResponseTabRequestSample = ko31.observableArray();
    self.ddOptionsResponseTabResponseTitle = ko31.observableArray();
    self.ddOptionsResponseTabResponseStatus = ko31.observableArray();
    self.filterResponseTabRequestIntDueDate = ko31.observable();
    self.filterResponseTabResponseName = ko31.observable();
    self.filterResponseTabResponseStatus = ko31.observable();
    self.doSort = ko31.observable(false);
    self.ddOptionsResponseInfoTabResponseNameOpen2 = ko31.observableArray();
    self.ddOptionsResponseInfoTabResponseNameProcessed2 = ko31.observableArray();
    self.filterResponseInfoTabResponseNameOpen2 = ko31.observable("");
    self.filterResponseInfoTabResponseNameProcessed2 = ko31.observable("");
    self.currentResponse = ko31.observable();
    self.arrCoverSheets = ko31.observableArray(null);
    self.arrResponseDocs = ko31.observable(null);
    self.cntResponseDocs = ko31.observable(0);
    self.responseDocFiles = ko31.observableArray();
    self.showUpload = ko31.observable(false);
    self.showSubmit = ko31.observable(false);
    self.refresh = () => window.location.reload();
    self.onNewResponseDocCallback = self.refresh;
    self.currentResponse.subscribe((newResponse) => {
      if (!newResponse) return;
      setUrlParam(responseParam, newResponse.title);
    });
    self.selectedFiltersResponseTab = ko31.computed(function() {
      var requestIntDueDate = self.filterResponseTabRequestIntDueDate();
      var responseName = self.filterResponseTabResponseName();
      var responseStatus = self.filterResponseTabResponseStatus();
      return requestIntDueDate + " " + responseName + " " + responseStatus;
    });
    self.ClearFiltersResponseTab = function() {
      self.filterResponseTabRequestIntDueDate("");
      self.filterResponseTabResponseName("");
      self.filterResponseTabResponseStatus("");
    };
    self.FilterChangedResponseTab = function() {
      document.body.style.cursor = "wait";
      setTimeout(function() {
        var requestIntDueDate = self.filterResponseTabRequestIntDueDate();
        var responseName = self.filterResponseTabResponseName();
        var responseStatus = self.filterResponseTabResponseStatus();
        if (!requestIntDueDate && !responseName && !responseStatus) {
          $(".sr-response-item").show();
          self.arrFilteredResponsesCount(self.arrResponses().length);
          document.body.style.cursor = "default";
          return;
        }
        requestIntDueDate = !requestIntDueDate ? "" : requestIntDueDate;
        responseName = !responseName ? "" : responseName;
        responseStatus = !responseStatus ? "" : responseStatus;
        var count = 0;
        var eacher = $(".sr-response-item");
        eacher.each(function() {
          var hide = false;
          if (!hide && requestIntDueDate != "" && $.trim($(this).find(".sr-response-internalDueDate").text()) != requestIntDueDate)
            hide = true;
          if (!hide && responseName != "" && $.trim($(this).find(".sr-response-title").text()) != responseName)
            hide = true;
          if (!hide && responseStatus != "" && $.trim($(this).find(".sr-response-status").text()) != responseStatus)
            hide = true;
          if (hide) $(this).hide();
          else {
            $(this).show();
            count++;
          }
        });
        self.arrFilteredResponsesCount(count);
        document.body.style.cursor = "default";
      }, 100);
    };
    self.ClickSubmitResponse = function() {
      m_fnSubmitPackage();
    };
    self.ClickUploadResponseDoc = function() {
      var oResponse = self.currentResponse();
      if (oResponse && oResponse.number && oResponse.title)
        m_fnUploadResponseDoc(oResponse.number, oResponse.title);
    };
    self.ClickMarkForDeletionResponseDoc = function(oResponseDoc) {
      if (oResponseDoc && oResponseDoc.ID)
        m_fnMarkForDeletionResponseDoc(oResponseDoc.ID);
    };
    self.selectedFiltersResponseTab.subscribe(function(value) {
      self.FilterChangedResponseTab();
    });
    self.doSort.subscribe(function(newValue) {
      Audit2.Common.Utilities.OnLoadDisplayTimeStamp();
      if (self.arrResponses().length > 0 && newValue) {
        self.arrFilteredResponsesCount(self.arrResponses().length);
        ko31.utils.arrayPushAll(
          self.ddOptionsResponseTabResponseStatus(),
          self.GetDDVals("status")
        );
        self.ddOptionsResponseTabResponseStatus.valueHasMutated();
        ko31.utils.arrayPushAll(
          self.ddOptionsResponseInfoTabResponseNameOpen2(),
          self.GetDDVals2("1", true)
        );
        self.ddOptionsResponseInfoTabResponseNameOpen2.valueHasMutated();
        ko31.utils.arrayPushAll(
          self.ddOptionsResponseInfoTabResponseNameProcessed2(),
          self.GetDDVals2("0", true)
        );
        self.ddOptionsResponseInfoTabResponseNameProcessed2.valueHasMutated();
        ko31.utils.arrayPushAll(
          self.ddOptionsResponseTabRequestInternalDueDate(),
          self.GetDDVals("internalDueDate")
        );
        self.ddOptionsResponseTabRequestInternalDueDate.valueHasMutated();
        ko31.utils.arrayPushAll(
          self.ddOptionsResponseTabResponseTitle(),
          self.GetDDVals("title", true)
        );
        self.ddOptionsResponseTabResponseTitle.valueHasMutated();
        setTimeout(function() {
          var paramTabIndex = getUrlParam("Tab");
          if (paramTabIndex != null && paramTabIndex != "") {
            self.tabs.selectById(paramTabIndex);
          } else {
            self.tabs.selectById(self.tabOpts.Responses.id);
          }
          if (paramTabIndex == null || paramTabIndex == "" || paramTabIndex == 0) {
            if (self.cntPendingReview() > 0) {
              SP.UI.Notify.addNotification(
                "<div style='text-align:left'>There are <b>" + self.cntPendingReview() + "</b> Responses pending your review/action. <br/> <br/> Please click on the links in the <b>Response Name</b> column of the <b>Status Report tab</b> <br/> to access each response and upload documents and submit the package.</div>",
                false
              );
            }
          }
          var paramResponseNum = getUrlParam("ResNum");
          if (paramResponseNum != null && paramResponseNum != "") {
            if (paramTabIndex == 0) {
              if ($("#ddlResponseName option[value='" + paramResponseNum + "']").length > 0)
                _myViewModel.filterResponseTabResponseName(paramResponseNum);
            } else {
              if ($("#ddlResponsesOpen option[value='" + paramResponseNum + "']").length > 0)
                _myViewModel.filterResponseInfoTabResponseNameOpen2(
                  paramResponseNum
                );
              else if ($(
                "#ddlResponsesProcessed option[value='" + paramResponseNum + "']"
              ).length > 0)
                _myViewModel.filterResponseInfoTabResponseNameProcessed2(
                  paramResponseNum
                );
            }
          }
          BindHandlersOnLoad();
          self.filterResponseTabResponseStatus(m_statusToFilterOn);
          $("#tblStatusReportResponses").tablesorter({
            sortList: [[2, 0]],
            selectorHeaders: ".sorter-true"
          });
        }, 200);
      }
    });
    self.filterResponseInfoTabResponseNameOpen2.subscribe(function(newValue) {
      self.filterResponseInfoTabResponseName(newValue, true);
    });
    self.filterResponseInfoTabResponseNameProcessed2.subscribe(function(newValue) {
      self.filterResponseInfoTabResponseName(newValue, false);
    });
    self.filterResponseInfoTabResponseName = function(newValue, bOpenResponses) {
      self.currentResponse(null);
      self.arrCoverSheets([]);
      self.arrResponseDocs(null);
      self.cntResponseDocs(0);
      m_curResponseSelectedIsEditableByAO = false;
      var oResponse = m_bigMap["response-" + newValue];
      if (oResponse) {
        if (bOpenResponses)
          self.filterResponseInfoTabResponseNameProcessed2("");
        else self.filterResponseInfoTabResponseNameOpen2("");
        self.currentResponse(oResponse);
        LoadTabResponseInfoCoverSheets(oResponse);
        LoadTabResponseInfoResponseDocs(oResponse);
        if (bOpenResponses) m_curResponseSelectedIsEditableByAO = true;
      }
    };
    self.responseDocFiles.subscribe(async function(files) {
      if (!files.length) return;
      const resId = self.currentResponse()?.ID;
      if (!resId) return;
      const response = await appContext.AuditResponses.FindById(resId);
      const promises = [];
      for (let file of files) {
        promises.push(
          new Promise(async (resolve) => {
            const newSheet = await uploadResponseDocFile(response, file);
            resolve();
          })
        );
      }
      await Promise.all(promises);
      self.responseDocFiles.removeAll();
      self.onNewResponseDocCallback();
    });
    self.GetDDVals = function(fieldName, sortAsResponse) {
      var types = ko31.utils.arrayMap(self.arrResponses(), function(item) {
        return item[fieldName];
      });
      var ddArr = ko31.utils.arrayGetDistinctValues(types).sort();
      if (sortAsResponse) ddArr.sort(Audit2.Common.Utilities.SortResponseTitles);
      if (ddArr[0] == "") ddArr.shift();
      return ddArr;
    };
    self.GetDDVals2 = function(responseStatusType, sortAsResponse) {
      var types = ko31.utils.arrayMap(self.arrResponses(), function(item) {
        var requestStatus = item.requestStatus;
        var responseStatus = item.status;
        if (responseStatusType == 0) {
          if (responseStatus != m_responseStatus1 && responseStatus != m_responseStatus2)
            return item["title"];
          else return "";
        } else if (responseStatusType == 1) {
          if ((responseStatus == m_responseStatus1 || responseStatus == m_responseStatus2) && (requestStatus == "Open" || requestStatus == "ReOpened"))
            return item["title"];
          else return "";
        }
      });
      var ddArr = ko31.utils.arrayGetDistinctValues(types).sort();
      if (sortAsResponse) ddArr.sort(Audit2.Common.Utilities.SortResponseTitles);
      if (ddArr[0] == "") ddArr.shift();
      return ddArr;
    };
  }
  var _myViewModel = new ViewModel();
  ko31.applyBindings(_myViewModel);
  LoadInfo();
  async function LoadInfo() {
    var currCtx = new SP.ClientContext.get_current();
    var web = currCtx.get_web();
    const m_currentUser = web.get_currentUser();
    currCtx.load(m_currentUser);
    var requestList = web.get_lists().getByTitle(Audit2.Common.Utilities.GetListTitleRequests());
    var requestQuery = new SP.CamlQuery();
    requestQuery.set_viewXml(
      '<View><Query><OrderBy><FieldRef Name="Title"/></OrderBy></Query></View>'
    );
    m_requestItems = requestList.getItems(requestQuery);
    currCtx.load(
      m_requestItems,
      "Include(ID, Title, ReqSubject, ReqStatus, InternalDueDate, ActionOffice, RelatedAudit, ActionItems, Comments, EmailSent, ClosedDate)"
    );
    await Promise.all([
      getAllItems(Audit2.Common.Utilities.GetListTitleResponses(), [
        "ID",
        "Title",
        "ReqNum",
        "ActionOffice",
        "ReturnReason",
        "SampleNumber",
        "ResStatus",
        "Comments",
        "Modified",
        "ClosedDate",
        "ClosedBy",
        "POC"
      ]).then((result) => m_responseItems = result),
      getAllItems(Audit2.Common.Utilities.GetLibTitleResponseDocs(), [
        "ID",
        "Title",
        "ReqNum",
        "ResID",
        "DocumentStatus",
        "ReceiptDate",
        "FileLeafRef",
        "FileDirRef",
        "File_x0020_Size",
        "Modified",
        "Editor"
      ]).then((result) => m_ResponseDocsItems = result)
    ]);
    var aoList = web.get_lists().getByTitle(Audit2.Common.Utilities.GetListTitleActionOffices());
    var aoQuery = new SP.CamlQuery();
    aoQuery.set_viewXml(
      '<View><Query><OrderBy><FieldRef Name="Title"/></OrderBy></Query></View>'
    );
    m_aoItems = aoList.getItems(aoQuery);
    currCtx.load(m_aoItems, "Include(ID, Title, UserGroup)");
    m_responseDocsLibrary = currCtx.get_web().get_lists().getByTitle(Audit2.Common.Utilities.GetLibTitleResponseDocs());
    currCtx.load(m_responseDocsLibrary, "Title", "Id");
    ownerGroup = web.get_associatedOwnerGroup();
    memberGroup = web.get_associatedMemberGroup();
    visitorGroup = web.get_associatedVisitorGroup();
    currCtx.load(ownerGroup);
    currCtx.load(memberGroup);
    currCtx.load(visitorGroup);
    m_groupColl = web.get_siteGroups();
    currCtx.load(m_groupColl);
    currCtx.executeQueryAsync(OnSuccess, OnFailure);
    function OnSuccess(sender, args) {
      $("#divRefresh").show();
      m_fnLoadData();
    }
    function OnFailure(sender, args) {
      $("#divRefresh").hide();
      $("#divLoading").hide();
      const statusId2 = SP.UI.Status.addStatus(
        "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
      );
      SP.UI.Status.setStatusPriColor(statusId2, "red");
    }
  }
  function m_fnLoadData() {
    Audit2.Common.Utilities.LoadSiteGroups(m_groupColl);
    LoadLibGUIDS();
    Audit2.Common.Utilities.LoadActionOffices(m_aoItems);
    if (memberGroup != null) m_IA_SPGroupName = memberGroup.get_title();
    if (m_IA_SPGroupName == null || m_IA_SPGroupName == "") {
      const statusId2 = SP.UI.Status.addStatus(
        "Unable to retrieve the IA SharePoint Group. Please contact the Administrator"
      );
      SP.UI.Status.setStatusPriColor(statusId2, "red");
      return;
    }
    m_IA_ActionOffice = Audit2.Common.Utilities.GetActionOffices()?.find(
      (ao) => ao.userGroup == m_IA_SPGroupName
    );
    LoadRequests();
    LoadResponses();
    LoadResponseDocs();
    LoadTabStatusReport(m_arrResponses, "fbody");
  }
  function LoadLibGUIDS() {
    Audit2.Common.Utilities.SetResponseDocLibGUID(
      m_responseDocsLibrary.get_id()
    );
  }
  function LoadRequests() {
    m_bigMap = new Object();
    m_arrRequests = new Array();
    var cnt = 0;
    var listItemEnumerator = m_requestItems.getEnumerator();
    while (listItemEnumerator.moveNext()) {
      var oListItem = listItemEnumerator.get_current();
      var emailSent = oListItem.get_item("EmailSent");
      if (!emailSent) continue;
      var id2 = oListItem.get_item("ID");
      var number = oListItem.get_item("Title");
      var status = oListItem.get_item("ReqStatus");
      var subject = oListItem.get_item("ReqSubject");
      if (subject == null) subject = "";
      var arrActionOffice = oListItem.get_item("ActionOffice");
      var actionOffice = "";
      for (var x = 0; x < arrActionOffice.length; x++) {
        actionOffice += "<div>" + arrActionOffice[x].get_lookupValue() + "</div>";
      }
      var comments = oListItem.get_item("Comments");
      var relatedAudit = oListItem.get_item("RelatedAudit");
      var actionItems = oListItem.get_item("ActionItems");
      if (comments == null) comments = "";
      if (relatedAudit == null) relatedAudit = "";
      if (actionItems == null) actionItems = "";
      var internalDueDate = oListItem.get_item("InternalDueDate");
      var closedDate = oListItem.get_item("ClosedDate");
      internalDueDate != null ? internalDueDate = internalDueDate.format("MM/dd/yyyy") : internalDueDate = "";
      closedDate != null ? closedDate = closedDate.format("MM/dd/yyyy") : closedDate = "";
      var requestObject = new Object();
      requestObject["ID"] = id2;
      requestObject["number"] = number;
      requestObject["subject"] = subject;
      requestObject["status"] = status;
      requestObject["internalDueDate"] = internalDueDate;
      requestObject["actionOffice"] = actionOffice;
      requestObject["comments"] = comments;
      requestObject["relatedAudit"] = relatedAudit;
      requestObject["actionItems"] = actionItems;
      requestObject["emailSent"] = emailSent;
      requestObject["closedDate"] = closedDate;
      requestObject["responses"] = new Array();
      requestObject["arrIndex"] = cnt;
      m_arrRequests.push(requestObject);
      m_bigMap["request-" + number] = requestObject;
      cnt++;
    }
  }
  function LoadResponses() {
    m_arrResponses = new Array();
    var cnt = 0;
    for (const oListItem of m_responseItems) {
      var number = oListItem.get_item("ReqNum");
      if (number != null) {
        number = number.get_lookupValue();
        var responseObject = new Object();
        responseObject["request"] = m_bigMap["request-" + number];
        if (!responseObject.request || !responseObject.request.emailSent)
          continue;
        responseObject["actionOffice"] = oListItem.get_item("ActionOffice");
        if (responseObject["actionOffice"] == null)
          responseObject["actionOffice"] = "";
        else
          responseObject["actionOffice"] = responseObject["actionOffice"].get_lookupValue();
        if (responseObject["actionOffice"] == "") continue;
        responseObject["poc"] = oListItem.get_item("POC");
        if (responseObject["poc"] == null) responseObject["poc"] = "";
        else responseObject["poc"] = responseObject["poc"].get_lookupValue();
        responseObject["ID"] = oListItem.get_item("ID");
        responseObject["number"] = number;
        var title = oListItem.get_item("Title");
        responseObject["title"] = title;
        responseObject["resStatus"] = oListItem.get_item("ResStatus");
        if (responseObject.request.status == "Closed" || responseObject.request.status == "Canceled")
          responseObject["resStatus"] = "7-Closed";
        var modifiedDate = oListItem.get_item("Modified");
        var closedDate = oListItem.get_item("ClosedDate");
        modifiedDate != null ? modifiedDate = modifiedDate.format("MM/dd/yyyy hh:mm tt") : modifiedDate = "";
        closedDate != null ? closedDate = closedDate.format("MM/dd/yyyy") : closedDate = "";
        responseObject["modified"] = modifiedDate;
        responseObject["closedDate"] = closedDate;
        responseObject["closedBy"] = Audit2.Common.Utilities.GetFriendlyDisplayName(oListItem, "ClosedBy");
        responseObject["sample"] = oListItem.get_item("SampleNumber");
        if (responseObject["sample"] == null) responseObject["sample"] = "";
        var comments = oListItem.get_item("Comments");
        if (comments == null) comments = "";
        responseObject["comments"] = comments;
        var returnReason = oListItem.get_item("ReturnReason");
        if (returnReason == null) returnReason = "";
        responseObject["returnReason"] = returnReason;
        responseObject["responseDocs"] = new Array();
        responseObject["coversheets"] = new Array();
        responseObject["arrIndex"] = cnt;
        m_arrResponses.push(responseObject);
        m_bigMap["response-" + title] = responseObject;
        cnt++;
      }
    }
  }
  function LoadResponseDocs() {
    for (var oListItem of m_ResponseDocsItems) {
      const responseDocID = oListItem.get_item("ID");
      var requestNumber = oListItem.get_item("ReqNum");
      if (requestNumber != null)
        requestNumber = requestNumber.get_lookupValue();
      var responseID = oListItem.get_item("ResID");
      if (responseID != null) responseID = responseID.get_lookupValue();
      if (requestNumber == null || responseID == null) continue;
      if (oListItem.get_item("DocumentStatus") == "Marked for Deletion") {
      } else {
        try {
          var bigMapItem = m_bigMap["response-" + responseID];
          var indexOfArrResponses = bigMapItem.arrIndex;
          var oResponse = m_arrResponses[indexOfArrResponses];
          if (oResponse) {
            var responseDocObject = new Object();
            responseDocObject["ID"] = oListItem.get_item("ID");
            responseDocObject["title"] = oListItem.get_item("Title");
            if (responseDocObject["title"] == null)
              responseDocObject["title"] = "";
            responseDocObject["fileName"] = oListItem.get_item("FileLeafRef");
            responseDocObject["folder"] = oListItem.get_item("FileDirRef");
            responseDocObject["documentStatus"] = oListItem.get_item("DocumentStatus");
            var fileSize = oListItem.get_item("File_x0020_Size");
            fileSize = Audit2.Common.Utilities.GetFriendlyFileSize(fileSize);
            responseDocObject["fileSize"] = fileSize;
            var receiptDate = "";
            if (oListItem.get_item("ReceiptDate") != null && oListItem.get_item("ReceiptDate") != "")
              receiptDate = oListItem.get_item("ReceiptDate").format("MM/dd/yyyy");
            responseDocObject["receiptDate"] = receiptDate;
            var modifiedDate = "";
            if (oListItem.get_item("Modified") != null && oListItem.get_item("Modified") != "")
              modifiedDate = oListItem.get_item("Modified").format("MM/dd/yyyy hh:mm tt");
            responseDocObject["modifiedDate"] = modifiedDate;
            responseDocObject["modifiedBy"] = Audit2.Common.Utilities.GetFriendlyDisplayName(
              oListItem,
              "Editor"
            );
            oResponse["responseDocs"].push(responseDocObject);
          }
        } catch (err) {
        }
      }
    }
  }
  function LoadTabStatusReport(arr, fbody) {
    if (arr == null) return;
    var responseArr = new Array();
    var arrResponseTitle = new Array();
    var arrResponseInternalDueDate = new Array();
    var arrResponseStatus = new Array();
    var count = 0;
    var resStatus1 = 0;
    var resStatus2 = 0;
    var arrlength = arr.length;
    while (arrlength--) {
      var oResponse = arr[arrlength];
      var responseTitle = oResponse.title;
      var highlight = false;
      var responseStatus = oResponse.resStatus;
      if (responseStatus == m_responseStatus1 || responseStatus == m_responseStatus2) {
        count++;
        if (responseStatus == m_responseStatus1) resStatus1++;
        else resStatus2++;
        highlight = true;
      }
      var aResponse = {
        title: responseTitle,
        requestSubject: oResponse.request.subject,
        requestStatus: oResponse.request.status,
        internalDueDate: oResponse.request.internalDueDate,
        status: responseStatus,
        docCount: oResponse.responseDocs.length,
        modified: oResponse.modified,
        highlight,
        visibleRow: ko31.observable(true)
      };
      responseArr.push(aResponse);
    }
    if (responseArr.length > 0) {
      m_statusToFilterOn = "";
      if (resStatus1 > 0 && resStatus2 == 0)
        m_statusToFilterOn = m_responseStatus1;
      else if (resStatus2 > 0 && resStatus1 == 0)
        m_statusToFilterOn = m_responseStatus2;
      _myViewModel.cntPendingReview(count);
      ko31.utils.arrayPushAll(_myViewModel.arrResponses, responseArr);
    }
    _myViewModel.doSort(true);
  }
  function LoadTabResponseInfoCoverSheets(oResponse) {
    _myViewModel.arrCoverSheets([]);
    var currCtx = new SP.ClientContext.get_current();
    var web = currCtx.get_web();
    var coverSheetLib = web.get_lists().getByTitle(Audit2.Common.Utilities.GetLibTitleCoverSheets());
    var coverSheetQuery = new SP.CamlQuery();
    coverSheetQuery.set_viewXml(
      '<View Scope="RecursiveAll"><Query><OrderBy><FieldRef Name="Title"/></OrderBy><Where><Eq><FieldRef Name="ReqNum"/><Value Type="Text">' + oResponse.request.number + "</Value></Eq></Where></Query></View>"
    );
    const m_subsetCoverSheetItems = coverSheetLib.getItems(coverSheetQuery);
    currCtx.load(
      m_subsetCoverSheetItems,
      "Include(ID, Title, ReqNum, ActionOffice, FileLeafRef, FileDirRef)"
    );
    var data2 = { oResponse };
    function OnSuccess(sender, args) {
      var arrCS = new Array();
      var listItemEnumerator = m_subsetCoverSheetItems.getEnumerator();
      while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        if (oListItem.get_item("ActionOffice") != null) {
          var arrActionOffice = oListItem.get_item("ActionOffice");
          if (arrActionOffice.length > 0) {
            for (var y = 0; y < arrActionOffice.length; y++) {
              var curActionOffice = arrActionOffice[y].get_lookupValue();
              if (curActionOffice == this.oResponse.actionOffice) {
                var csFolder = oListItem.get_item("FileDirRef");
                var csTitle = oListItem.get_item("FileLeafRef");
                var encodedTitle = csTitle.replace(/'/g, "&#39");
                arrCS.push({
                  folder: csFolder,
                  title: csTitle,
                  link: "STSNavigate('../_layouts/download.aspx?SourceUrl=" + csFolder + "/" + encodedTitle + "')"
                });
                break;
              }
            }
          }
        }
      }
      ko31.utils.arrayPushAll(_myViewModel.arrCoverSheets(), arrCS);
      _myViewModel.arrCoverSheets.valueHasMutated();
    }
    function OnFailure(sender, args) {
    }
    currCtx.executeQueryAsync(
      Function.createDelegate(data2, OnSuccess),
      Function.createDelegate(data2, OnFailure)
    );
  }
  function LoadTabResponseInfoResponseDocs(oResponse) {
    _myViewModel.arrResponseDocs(null);
    _myViewModel.cntResponseDocs(0);
    _myViewModel.showUpload(false);
    _myViewModel.showSubmit(false);
    var currCtx = new SP.ClientContext.get_current();
    var web = currCtx.get_web();
    for (var z = 0; z < oResponse.responseDocs.length; z++) {
      var oResponseDoc = oResponse.responseDocs[z];
      oResponseDoc["docIcon"] = web.mapToIcon(
        oResponseDoc.fileName,
        "",
        SP.Utilities.IconSize.Size16
      );
    }
    function OnSuccess(sender, args) {
      RenderResponses(oResponse);
    }
    function OnFailure(sender, args) {
      const statusId2 = SP.UI.Status.addStatus(
        "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
      );
      SP.UI.Status.setStatusPriColor(statusId2, "red");
    }
    currCtx.executeQueryAsync(OnSuccess, OnFailure);
    function RenderResponses(oResponse2) {
      var rowCount = 0;
      var cntAddedByAO = 0;
      var arrResponseDocs = new Array();
      for (var z2 = 0; z2 < oResponse2.responseDocs.length; z2++) {
        var oResponseDoc2 = oResponse2.responseDocs[z2];
        oResponseDoc2.docIcon = oResponseDoc2.docIcon.get_value();
        oResponseDoc2.styleTag = Audit2.Common.Utilities.GetResponseDocStyleTag2(
          oResponseDoc2.documentStatus
        );
        oResponseDoc2.responseTitle = oResponse2.title;
        if (oResponseDoc2.documentStatus == "Open" && (oResponse2.resStatus == m_responseStatus1 || oResponse2.resStatus == m_responseStatus2))
          cntAddedByAO++;
        arrResponseDocs.push(oResponseDoc2);
      }
      if (m_curResponseSelectedIsEditableByAO) {
        _myViewModel.showUpload(true);
        if (cntAddedByAO > 0) _myViewModel.showSubmit(true);
      }
      var arrResponseSummary = {
        responseTitle: oResponse2.title,
        responseDocs: arrResponseDocs,
        responseStatus: oResponse2.resStatus
      };
      _myViewModel.arrResponseDocs(arrResponseSummary);
      _myViewModel.arrResponseDocs.valueHasMutated();
      _myViewModel.cntResponseDocs(oResponse2.responseDocs.length);
      if (oResponse2.resStatus == m_responseStatus2 && oResponse2.returnReason != null && oResponse2.returnReason != "") {
        if (m_curResponseSelectedIsEditableByAO && cntAddedByAO == 0) {
          var waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(
            "Notice - Response Needs to be Updated",
            "<span style=''><span class='ui-icon ui-icon-alert'></span>Response Return Reason: <span style='font-weight:bold; color:red;'>" + oResponse2.returnReason + "</span></span>",
            100,
            500
          );
          setTimeout(function() {
            waitDialog.close();
          }, 5e3);
        }
      }
      if (oResponse2.resStatus == "1-Open" || oResponse2.resStatus == "3-Returned to Action Office") {
        if (m_curResponseSelectedIsEditableByAO && cntAddedByAO > 0) {
          let resetColor = function() {
            $(".btnSubmitPackage").parent().css({ "background-color": "inherit", "font-weight": "inherit" });
          };
          const notifyId2 = SP.UI.Notify.addNotification(
            "<div style='text-align:left'>Response documents have been added. <br/><br/>Your package <span style='font-weight:bold; color:red'>has not yet been submitted</span>. <br></br>Please review your documents and click on the link <b>SUBMIT this Response Package</b> below</div>",
            false
          );
          $(".btnSubmitPackage").parent().css({ "background-color": "yellow", "font-weight": "inherit" });
          $(".btnSubmitPackage").get(0).scrollIntoView();
          setTimeout(function() {
            resetColor();
          }, 2e3);
        } else if (m_curResponseSelectedIsEditableByAO && cntAddedByAO == 0) {
          const notifyId2 = SP.UI.Notify.addNotification(
            "<div style='text-align:left'>Please review the Response Information and any CoverSheets/Supplemental Documents. <br/><br/>Then, click the link to <span style='font-weight:bold; color:gree'>Upload Response Documents</span> pertaining to this Response</div>",
            false
          );
        }
      }
    }
  }
  function m_fnFormatEmailBodyToIAFromAO(oRequest, responseTitle) {
    var emailText = "<div>Audit Request Reference: <b>{REQUEST_NUMBER}</b></div><div>Audit Request Subject: <b>{REQUEST_SUBJECT}</b></div><div>Audit Request Due Date: <b>{REQUEST_DUEDATE}</b></div><br/><div>Below is the Response that was submitted: </div><div>{RESPONSE_TITLE}</div>";
    emailText = emailText.replace("{REQUEST_NUMBER}", oRequest.number);
    emailText = emailText.replace("{REQUEST_SUBJECT}", oRequest.subject);
    emailText = emailText.replace(
      "{REQUEST_DUEDATE}",
      oRequest.internalDueDate
    );
    var responseTitleBody = "<ul><li>" + responseTitle + "</li></ul>";
    emailText = emailText.replace("{RESPONSE_TITLE}", responseTitleBody);
    return emailText;
  }
  function m_fnUploadResponseDoc(requestID, responseID) {
    m_bIsTransactionExecuting = true;
    var waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(
      "Loading...",
      "<span style='font-size:11pt'><span class='ui-icon ui-icon-info'></span>If you are uploading <span style='font-weight:bold; color:green;text-decoration:underline'>multiple</span> documents, please <span style='font-weight:bold; color:green;text-decoration:underline'>zip </span> them.</span>",
      100,
      600
    );
    setTimeout(function() {
      waitDialog.close();
      var options = SP.UI.$create_DialogOptions();
      options.title = "Upload Response Document to: " + responseID;
      options.dialogReturnValueCallback = OnCallbackForm;
      var rootFolder = Audit2.Common.Utilities.GetSiteUrl() + "/" + Audit2.Common.Utilities.GetLibNameResponseDocs() + "/" + responseID;
      options.url = Audit2.Common.Utilities.GetSiteUrl() + "/_layouts/Upload.aspx?List={" + Audit2.Common.Utilities.GetResponseDocLibGUID() + "}&RootFolder=" + rootFolder + "&ReqNum=" + requestID + "&ResID=" + responseID;
      SP.UI.ModalDialog.showModalDialog(options);
    }, 3e3);
  }
  function OnCallbackForm(result, value) {
    if (result === SP.UI.DialogResult.OK) {
      Audit2.Common.Utilities.Refresh();
    } else m_bIsTransactionExecuting = false;
  }
  function m_fnSubmitPackage() {
    var responseToSubmit = $("#ddlResponsesOpen").val();
    if (confirm(
      "Are you sure you would like to submit these response documents? Note: You will NOT be able to make changes or upload any more documents after you submit this package."
    )) {
      let OnSuccessLoadedResponseDocs = function(sender, args) {
        var ctOpenResponseDocs = 0;
        if (responseDocOpenItems != null) {
          var listItemEnumerator = responseDocOpenItems.getEnumerator();
          while (listItemEnumerator.moveNext()) {
            var oListItem = listItemEnumerator.get_current();
            oListItem.set_item("DocumentStatus", "Submitted");
            oListItem.update();
            ctOpenResponseDocs++;
          }
        }
        if (ctOpenResponseDocs == 0) {
          const notifyId2 = SP.UI.Notify.addNotification(
            "Please upload a Response document.",
            false
          );
          m_waitDialog.close();
          return;
        }
        var oRequest = null;
        try {
          var bigMapItem = m_bigMap["response-" + responseToSubmit];
          var indexOfArrResponses = bigMapItem.arrIndex;
          const oResponse = m_arrResponses[indexOfArrResponses];
          if (oResponse) {
            oRequest = oResponse.request;
            var responseList = currCtx.get_web().get_lists().getByTitle(Audit2.Common.Utilities.GetListTitleResponses());
            const responseItem = responseList.getItemById(oResponse.ID);
            responseItem.set_item("ResStatus", "2-Submitted");
            responseItem.update();
          }
        } catch (err) {
          alert(err);
          Audit2.Common.Utilities.Refresh();
        }
        if (oRequest == null) {
          m_waitDialog.close();
          return;
        }
        var emailSubject = "A Response has been Submitted by an Action Office: " + oRequest.number;
        var emailText = m_fnFormatEmailBodyToIAFromAO(
          oRequest,
          responseToSubmit
        );
        var itemCreateInfo = new SP.ListItemCreationInformation();
        itemCreateInfo.set_folderUrl(
          location.protocol + "//" + location.host + Audit2.Common.Utilities.GetSiteUrl() + "/Lists/" + Audit2.Common.Utilities.GetListNameEmailHistory() + "/" + oRequest.number
        );
        oListItem = emailList.addItem(itemCreateInfo);
        oListItem.set_item("Title", emailSubject);
        oListItem.set_item("Body", emailText);
        oListItem.set_item("To", m_IA_ActionOffice.title);
        oListItem.set_item("ReqNum", oRequest.number);
        oListItem.set_item("ResID", responseToSubmit);
        oListItem.set_item("NotificationType", "IA Notification");
        oListItem.update();
        function OnSuccessUpdateResponse(sender2, args2) {
          document.body.style.cursor = "default";
          m_waitDialog.close();
          Audit2.Common.Utilities.Refresh();
        }
        function OnFailureUpdateResponse(sender2, args2) {
          m_waitDialog.close();
          const statusId2 = SP.UI.Status.addStatus(
            "Request failed: " + args2.get_message() + "\n" + args2.get_stackTrace()
          );
          SP.UI.Status.setStatusPriColor(statusId2, "red");
        }
        currCtx.executeQueryAsync(
          OnSuccessUpdateResponse,
          OnFailureUpdateResponse
        );
      }, OnFailureLoadedResponseDocs = function(sender, args) {
        m_waitDialog.close();
        const statusId2 = SP.UI.Status.addStatus(
          "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
        );
        SP.UI.Status.setStatusPriColor(statusId2, "red");
      };
      m_bIsTransactionExecuting = true;
      const m_waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(
        "Submitting Response",
        "Please wait... Submitting Response",
        200,
        400
      );
      var currCtx = new SP.ClientContext.get_current();
      var web = currCtx.get_web();
      var folderPath = Audit2.Common.Utilities.GetSiteUrl() + "/" + Audit2.Common.Utilities.GetLibNameResponseDocs() + "/" + responseToSubmit;
      var responseDocLib = web.get_lists().getByTitle(Audit2.Common.Utilities.GetLibTitleResponseDocs());
      var responseDocQuery = new SP.CamlQuery();
      responseDocQuery.set_viewXml(
        `<View Scope="RecursiveAll"><Query><Where><And><Eq><FieldRef Name='FileDirRef'/><Value Type='Text'>` + folderPath + "</Value></Eq><Eq><FieldRef Name='DocumentStatus'/><Value Type='Text'>Open</Value></Eq></And></Where></Query></View>"
      );
      const responseDocOpenItems = responseDocLib.getItems(responseDocQuery);
      currCtx.load(
        responseDocOpenItems,
        "Include(ID, DocumentStatus, FileDirRef)"
      );
      var emailList = web.get_lists().getByTitle(Audit2.Common.Utilities.GetListTitleEmailHistory());
      var emailListQuery = new SP.CamlQuery();
      emailListQuery.set_viewXml(
        '<View><Query><OrderBy><FieldRef Name="ID"/></OrderBy><Where><Eq><FieldRef Name="FSObjType"/><Value Type="Text">1</Value></Eq></Where></Query></View>'
      );
      const emailListFolderItems = emailList.getItems(emailListQuery);
      currCtx.load(emailListFolderItems, "Include(ID, Title, DisplayName)");
      currCtx.executeQueryAsync(
        OnSuccessLoadedResponseDocs,
        OnFailureLoadedResponseDocs
      );
    }
  }
  function m_fnMarkForDeletionResponseDoc(itemID) {
    if (confirm("Are you sure you would like to Delete this Response Document?")) {
      let OnSuccess = function(sender, args) {
        Audit2.Common.Utilities.Refresh();
      }, OnFailure = function(sender, args) {
        const statusId2 = SP.UI.Status.addStatus(
          "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
        );
        SP.UI.Status.setStatusPriColor(statusId2, "red");
      };
      var currCtx = new SP.ClientContext();
      var responseDocsLib = currCtx.get_web().get_lists().getByTitle(Audit2.Common.Utilities.GetLibNameResponseDocs());
      const oListItem = responseDocsLib.getItemById(itemID);
      oListItem.set_item("DocumentStatus", "Marked for Deletion");
      oListItem.update();
      currCtx.executeQueryAsync(OnSuccess, OnFailure);
    }
  }
  function BindHandlersOnLoad() {
    BindPrintButton(
      "#btnPrint1",
      "#divStatusReportRespones",
      "Action Office Response Status Report"
    );
    BindExportButton(
      ".export1",
      "AOResponseStatusReport_",
      "tblStatusReportResponses"
    );
  }
  function BindPrintButton(btnPrint, divTbl, pageTitle) {
    $(btnPrint).on("click", function() {
      Audit2.Common.Utilities.PrintStatusReport(pageTitle, divTbl);
    });
  }
  function BindExportButton(btnExport, fileNamePrefix, tbl) {
    $(btnExport).on("click", function(event) {
      var curDate = (/* @__PURE__ */ new Date()).format("yyyyMMdd_hhmmtt");
      Audit2.Common.Utilities.ExportToCsv(fileNamePrefix + curDate, tbl);
    });
  }
  function GoToResponse(response) {
    _myViewModel.tabs.selectById(_myViewModel.tabOpts.ResponseDetail.id);
    if (response) {
      response = m_bigMap["response-" + response];
      var requestStatus = response.request.status;
      var responseStatus = response.resStatus;
      if ((responseStatus == m_responseStatus1 || responseStatus == m_responseStatus2) && (requestStatus == "Open" || requestStatus == "ReOpened"))
        _myViewModel.filterResponseInfoTabResponseNameOpen2(response.title);
      else
        _myViewModel.filterResponseInfoTabResponseNameProcessed2(
          response.title
        );
    }
  }
  var publicMembers = {
    GoToResponse,
    IsTransactionExecuting: function() {
      return m_bIsTransactionExecuting;
    }
  };
  return publicMembers;
};
function load(element, context) {
  window.context = context;
  element.append(ao_db_default);
  initAppcontext();
  Audit2.Common.Utilities = new NewUtilities();
  Audit2.AOReport.Report = new NewReportPage();
  Audit2.AOReport.Init();
}
/*! Bundled license information:

knockout/build/output/knockout-latest.js:
  (*!
   * Knockout JavaScript library v3.5.1
   * (c) The Knockout.js team - http://knockoutjs.com/
   * License: MIT (http://www.opensource.org/licenses/mit-license.php)
   *)
*/

if(__exports != exports)module.exports = exports;return module.exports}));
//# sourceMappingURL=ao_db.js.map
