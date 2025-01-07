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
  "node_modules/knockout/build/output/knockout-latest.js"(exports2, module2) {
    (function() {
      (function(n) {
        var A = this || (0, eval)("this"), w = A.document, R = A.navigator, v = A.jQuery, H = A.JSON;
        v || "undefined" === typeof jQuery || (v = jQuery);
        (function(n2) {
          "function" === typeof define && define.amd ? define(["exports", "require"], n2) : "object" === typeof exports2 && "object" === typeof module2 ? n2(module2.exports || exports2) : n2(A.ko = {});
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

// src/sal/primitives/entity.js
var ko2, Entity;
var init_entity = __esm({
  "src/sal/primitives/entity.js"() {
    ko2 = __toESM(require_knockout_latest());
    Entity = class {
      constructor(params) {
        if (params?.ID) this.ID = params.ID;
        if (params?.Title) this.Title = params.Title;
      }
      ObservableID = ko2.observable();
      ObservableTitle = ko2.observable();
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

// src/sal/fields/BaseField.js
function isRequiredValidationRequirement(field) {
  return {
    requirement: ko3.pureComputed(() => {
      const isRequired = ko3.unwrap(field.isRequired);
      if (!isRequired) return false;
      const value = ko3.unwrap(field.Value);
      if (value?.constructor == Array) return !value.length;
      return value === null || value === void 0;
    }),
    error: new ValidationError2(
      "text-field",
      "required-field",
      `${ko3.utils.unwrapObservable(field.displayName)} is required!`
    )
  };
}
var ko3, BaseField;
var init_BaseField = __esm({
  "src/sal/fields/BaseField.js"() {
    ko3 = __toESM(require_knockout_latest());
    init_validation_error();
    BaseField = class {
      constructor({
        displayName,
        systemName,
        instructions = null,
        isRequired = false,
        width,
        classList = [],
        Visible = ko3.pureComputed(() => true)
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
      Value = ko3.observable();
      get = () => this.Value();
      set = (val) => this.Value(val);
      clear = () => {
        if (ko3.isObservableArray(this.Value)) this.Value([]);
        else this.Value(null);
      };
      toString = ko3.pureComputed(() => this.Value());
      toJSON = () => this.Value();
      fromJSON = (val) => this.Value(val);
      validate = (showErrors = true) => {
        this.ShowErrors(showErrors);
        return this.Errors();
      };
      _fieldValidationRequirements = ko3.observableArray();
      Errors = ko3.pureComputed(() => {
        if (!this.Visible()) return [];
        const errors = this._fieldValidationRequirements().filter((req) => req.requirement()).map((req) => req.error);
        return errors;
      });
      addFieldRequirement = (requirement) => this._fieldValidationRequirements.push(requirement);
      IsValid = ko3.pureComputed(() => !this.Errors().length);
      ShowErrors = ko3.observable(false);
      ValidationClass = ko3.pureComputed(() => {
        if (!this.ShowErrors()) return;
        return this.Errors().length ? "is-invalid" : "is-valid";
      });
    };
  }
});

// src/sal/components/fields/BaseFieldModule.js
function registerFieldComponents(constructor) {
  ko4.components.register(constructor.edit, {
    template: constructor.editTemplate,
    viewModel: constructor
  });
  ko4.components.register(constructor.view, {
    template: constructor.viewTemplate,
    viewModel: constructor
  });
}
var ko4, html, BaseFieldModule;
var init_BaseFieldModule = __esm({
  "src/sal/components/fields/BaseFieldModule.js"() {
    ko4 = __toESM(require_knockout_latest());
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
      Errors = ko4.pureComputed(() => {
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
      ShowErrors = ko4.observable(false);
      ValidationClass = ko4.pureComputed(() => {
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
var ko5, editTemplate, viewTemplate, BlobModule;
var init_BlobModule = __esm({
  "src/sal/components/fields/BlobModule.js"() {
    ko5 = __toESM(require_knockout_latest());
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
var ko6, dateFieldTypes, editTemplate3, DateModule;
var init_DateModule = __esm({
  "src/sal/components/fields/DateModule.js"() {
    ko6 = __toESM(require_knockout_latest());
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
      inputBinding = ko6.pureComputed({
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
var ko7, editTemplate4, LookupModule;
var init_LookupModule = __esm({
  "src/sal/components/fields/LookupModule.js"() {
    ko7 = __toESM(require_knockout_latest());
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

// src/sal/components/fields/people/PeopleView.html
var import_meta_document2, htmlFrag2, fragment2, PeopleView_default;
var init_PeopleView = __esm({
  "src/sal/components/fields/people/PeopleView.html"() {
    import_meta_document2 = new DocumentFragment();
    htmlFrag2 = '<body><div class="fw-semibold" data-bind="text: displayName"></div>\r\n\r\n\r\n<div \n  data-bind="text: toString, \r\n    attr: {title: Value()?.LoginName}"\r\n></div>\r\n\r\n\r\n<ul data-bind="foreach: Value">\r\n  <li data-bind="attr: {title: LoginName}, text: Title"></li>\r\n</ul>\r\n\r\n\r\n\r\n<div class="fst-italic">Not provided.</div>\r\n\r\n</body>';
    fragment2 = new DOMParser().parseFromString(htmlFrag2, "text/html");
    import_meta_document2.append(...fragment2.body.childNodes);
    PeopleView_default = import_meta_document2;
  }
});

// src/sal/components/fields/people/PeopleEdit.html
var import_meta_document3, htmlFrag3, fragment3, PeopleEdit_default;
var init_PeopleEdit = __esm({
  "src/sal/components/fields/people/PeopleEdit.html"() {
    import_meta_document3 = new DocumentFragment();
    htmlFrag3 = '<body><div>\r\n  <label class="fw-semibold w-100"\r\n    ><span data-bind="text: displayName"></span><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:\r\n    <div \n      class="people-picker"\r\n      tabindex="0"\r\n      data-bind="css: { focused }, event: { focusin, focusout }"\r\n    >\r\n      <div \n        class="search-group form-select"\r\n        data-bind="event: { keydown },\r\n      class: ValidationClass"\r\n      >\r\n        <div class="selected-people" data-bind="foreach: selectedUsers">\r\n          <div class="selected-person">\r\n            \r\n            <div \n              class="status"\r\n              data-bind="attr: {title: ID}, class: resolutionStatus"\r\n            >\r\n              \r\n              <span class="small loader"></span>\r\n              \r\n              \r\n              <i \n                class="fa-solid fa-triangle-exclamation"\r\n                data-bind="attr: {title: resolutionMessage}"\r\n              ></i>\r\n              \r\n            </div>\r\n            \r\n            \r\n            <div class="status resolved" data-bind="attr: {title: ID}">\r\n              <span data-bind="text: Initials()"></span>\r\n            </div>\r\n            \r\n            <div \n              class="display-name"\r\n              data-bind="text: Title, attr: {title: LoginName}"\r\n            ></div>\r\n            <div \n              class="remove"\r\n              title="Remove User"\r\n              data-bind="click: $parent.removeUser"\r\n            >\r\n              <i class="fa-solid fa-xmark"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <input \n          type="text"\r\n          class=""\r\n          placeholder="Search..."\r\n          data-bind="textInput: searchTerm, event: { focusin }"\r\n        >\r\n      </div>\r\n      <ul \n        class="search-opts"\r\n        data-bind="foreach: userOpts, \r\n          visible: focused() && userOpts().length"\r\n      >\r\n        <li \n          class="search-opt"\r\n          data-bind="click: $parent.selectUser, css: { active }"\r\n        >\r\n          <span data-bind="text: Title, attr: {title: LoginName}"></span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    \r\n    <div \n      class="fw-lighter fst-italic text-secondary"\r\n      data-bind="html: instructions"\r\n    ></div>\r\n    \r\n  </label>\r\n  \r\n  \r\n  <div class="fw-semibold text-danger" data-bind="text: description"></div>\r\n  \r\n  \r\n</div>\r\n\r\n<style>\r\n  .people-picker {\r\n    /* background-color: white; */\r\n    position: relative;\r\n    outline: none;\r\n  }\r\n\r\n  .search-group {\r\n    background-color: white;\r\n    border: 1px solid var(--primary-muted-color);\r\n    border-radius: 6px;\r\n  }\r\n\r\n  .people-picker.focused .search-group {\r\n    border-color: var(--primary-color);\r\n  }\r\n\r\n  .search-group > input {\r\n    width: 100%;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 1rem;\r\n    /* margin: 0.1rem; */\r\n    border-radius: 4px;\r\n  }\r\n\r\n  .search-opts {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0.1rem 0 0 0;\r\n    width: 100%;\r\n    position: absolute;\r\n    z-index: 5;\r\n    background-color: white;\r\n    border: 1px solid var(--secondary-color);\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .search-opts .search-opt:nth-child(even) {\r\n    background-color: var(--bg-very-light-color);\r\n  }\r\n\r\n  .search-opts .search-opt {\r\n    cursor: pointer;\r\n    padding: 4px;\r\n    font-size: 1rem;\r\n    color: var(--text-primary);\r\n    font-weight: normal;\r\n  }\r\n\r\n  .search-opts .search-opt:hover,\r\n  .search-opts .search-opt.active {\r\n    background-color: var(--bg-light-color);\r\n  }\r\n\r\n  .selected-people {\r\n    display: flex;\r\n    gap: 0.4rem;\r\n  }\r\n\r\n  .selected-person {\r\n    display: flex;\r\n    align-items: stretch;\r\n    border: 1px solid var(--primary-color);\r\n    border-radius: 2rem;\r\n    gap: 0.4rem;\r\n    height: 2rem;\r\n    margin: 0.4rem 0;\r\n    cursor: default;\r\n  }\r\n\r\n  .selected-person .status {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 2rem;\r\n    border-radius: 1rem;\r\n    color: white;\r\n  }\r\n\r\n  .selected-person .status.resolved {\r\n    background-color: var(--primary-color);\r\n    color: white !important;\r\n  }\r\n\r\n  .selected-person .status.fail {\r\n    background-color: var(--warn-color);\r\n    color: white !important;\r\n  }\r\n\r\n  .selected-person .display-name {\r\n    align-content: center;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .selected-person .remove {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 1rem;\r\n    width: 2rem;\r\n    color: var(--bg-dark-secondary-color);\r\n  }\r\n\r\n  .selected-person .remove:hover {\r\n    background-color: var(--bg-very-light-color);\r\n    cursor: pointer;\r\n  }\r\n</style>\r\n</body>';
    fragment3 = new DOMParser().parseFromString(htmlFrag3, "text/html");
    import_meta_document3.append(...fragment3.body.childNodes);
    PeopleEdit_default = import_meta_document3;
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
async function InitSal() {
  if (sal.utilities) return;
  console.log("Init Sal");
  var currCtx = SP.ClientContext.get_current();
  var web = currCtx.get_web();
  const serverRelativeUrl = window.context.pageContext.legacyPageContext.webServerRelativeUrl == "/" ? "" : window.context.pageContext.legacyPageContext.webServerRelativeUrl;
  sal.globalConfig.siteUrl = serverRelativeUrl;
  sal.globalConfig.listServices = serverRelativeUrl + "/_vti_bin/ListData.svc/";
  sal.globalConfig.defaultGroups = {
    owners: web.get_associatedOwnerGroup(),
    members: web.get_associatedMemberGroup(),
    visitors: web.get_associatedVisitorGroup()
  };
  currCtx.load(sal.globalConfig.defaultGroups.owners);
  currCtx.load(sal.globalConfig.defaultGroups.members);
  currCtx.load(sal.globalConfig.defaultGroups.visitors);
  var user = web.get_currentUser();
  currCtx.load(user);
  var siteGroupCollection = web.get_siteGroups();
  currCtx.load(siteGroupCollection);
  sal.globalConfig.roles = [];
  var oRoleDefinitions2 = currCtx.get_web().get_roleDefinitions();
  currCtx.load(oRoleDefinitions2);
  return new Promise((resolve, reject2) => {
    currCtx.executeQueryAsync(
      function() {
        sal.globalConfig.currentUser = user;
        var listItemEnumerator = siteGroupCollection.getEnumerator();
        while (listItemEnumerator.moveNext()) {
          var oListItem = listItemEnumerator.get_current();
          sal.globalConfig.siteGroups.push(principalToPeople(oListItem));
        }
        var oEnumerator = oRoleDefinitions2.getEnumerator();
        while (oEnumerator.moveNext()) {
          var oRoleDefinition2 = oEnumerator.get_current();
          sal.globalConfig.roles.push(oRoleDefinition2.get_name());
        }
        sal.config = new sal.NewAppConfig();
        sal.utilities = new sal.NewUtilities();
        resolve();
      },
      function(sender, args) {
        alert("Error initializing SAL");
        reject2();
      }
    );
  });
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
  const uri = `/web/getfilebyserverrelativeurl(@source)/copyto(@dest)?@source='${sourceFilePath}'&@dest='${destFilePath}'`;
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
  var self2 = this;
  self2.config = {
    def: listDef
  };
  async function init() {
    if (!self2.config.fieldSchema) {
      const listEndpoint = `/web/lists/GetByTitle('${self2.config.def.title}')?$expand=Fields`;
      const list = await fetchSharePointData(listEndpoint);
      self2.config.guid = list.d.Id;
      self2.config.fieldSchema = list.d.Fields.results;
    }
  }
  init();
  async function setListPermissionsAsync(itemPermissions, reset) {
    const currCtx = new SP.ClientContext.get_current();
    const web = currCtx.get_web();
    const oList = web.get_lists().getByTitle(self2.config.def.title);
    return setResourcePermissionsAsync(oList, itemPermissions, reset);
  }
  function setListPermissions(valuePairs, callback, reset) {
    reset = reset === void 0 ? false : reset;
    var users = new Array();
    var resolvedGroups = new Array();
    var currCtx = new SP.ClientContext.get_current();
    var web = currCtx.get_web();
    var oList = web.get_lists().getByTitle(self2.config.def.title);
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
      const oList = web.get_lists().getByTitle(self2.config.def.title);
      const itemCreateInfo = new SP.ListItemCreationInformation();
      if (folderPath) {
        var folderUrl = sal.globalConfig.siteUrl + "/Lists/" + self2.config.def.name + "/" + folderPath;
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
        console.error("Create Item Failed - List: " + self2.config.def.name);
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
    var oList = web.get_lists().getByTitle(self2.config.def.title);
    var collListItem = oList.getItems(camlQuery);
    function onGetListItemsSucceeded() {
      var self3 = this;
      var listItemEnumerator = self3.collListItem.getEnumerator();
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
        "Request on list " + self2.config.def.name + " failed, producing the following error: \n " + args.get_message() + "\nStackTrack: \n " + args.get_stackTrace()
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
    const apiEndpoint = `/web/lists/GetByTitle('${self2.config.def.title}')/items(${id2})?$Select=${queryFields}&$expand=${expandFields}`;
    const result = await fetchSharePointData(apiEndpoint);
    return result.d;
  }
  async function getListFields() {
    if (!self2.config.fieldSchema) {
      const apiEndpoint = `/web/lists/GetByTitle('${self2.config.def.title}')/Fields`;
      const fields = await fetchSharePointData(apiEndpoint);
      self2.config.fieldSchema = fields.d.results;
    }
    return self2.config.fieldSchema;
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
        alert(`Field '${f}' not found on list ${self2.config.def.name}`);
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
    const apiEndpoint = `/web/lists/GetByTitle('${self2.config.def.title}')/items?${include}&${expand}&${orderBy}&${filter}&${page}`;
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
    var oList = web.get_lists().getByTitle(self2.config.def.title);
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
      console.error("SAL: findById - List: " + self2.config.def.name);
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
      const oList = web.get_lists().getByTitle(self2.config.def.title);
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
        console.error("Update Failed - List: " + self2.config.def.name);
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
    var oList = web.get_lists().getByTitle(self2.config.def.title);
    var data2 = { callback };
    const oListItem = oList.getItemById(id2);
    oListItem.deleteObject();
    function onDeleteListItemsSucceeded(sender, args) {
      callback();
    }
    function onDeleteListItemsFailed(sender, args) {
      console.error(
        "sal.SPList.deleteListItem: Request on list " + self2.config.def.name + " failed, producing the following error: \n " + args.get_message() + "\nStackTrack: \n " + args.get_stackTrace()
      );
    }
    currCtx.executeQueryAsync(
      Function.createDelegate(data2, onDeleteListItemsSucceeded),
      Function.createDelegate(data2, onDeleteListItemsFailed)
    );
  }
  async function deleteListItemAsync(id2) {
    const apiEndpoint = `/web/lists/GetByTitle('${self2.config.def.title}')/items(${id2})`;
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
      const oList = web.get_lists().getByTitle(self2.config.def.title);
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
      var oList = web.get_lists().getByTitle(self2.config.def.title);
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
    const url = `/web/lists/getByTitle('${self2.config.def.name}')?$select=HasUniqueRoleAssignments,RoleAssignments&$expand=RoleAssignments/Member,RoleAssignments/RoleDefinitionBindings`;
    const headers = {
      "Cache-Control": "no-cache"
    };
    const result = await fetchSharePointData(url, "GET", headers);
    if (!result) return;
    return ItemPermissions.fromRestResult(result.d);
  }
  function getServerRelativeFolderPath(relFolderPath) {
    let builtPath = sal.globalConfig.siteUrl;
    builtPath += self2.config.def.isLib ? "/" + self2.config.def.name : "/Lists/" + self2.config.def.name;
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
      const oList = web.get_lists().getByTitle(self2.config.def.title);
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
      const oList = web.get_lists().getByTitle(self2.config.def.title);
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
          self2.createListFolder(
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
  self2.createListFolder = function(folderName, callback, path) {
    path = path === void 0 ? "" : path;
    const currCtx = new SP.ClientContext.get_current();
    const web = currCtx.get_web();
    const oList = web.get_lists().getByTitle(self2.config.def.title);
    let folderUrl = "";
    const itemCreateInfo = new SP.ListItemCreationInformation();
    itemCreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder);
    itemCreateInfo.set_leafName(folderName);
    if (path) {
      folderUrl = sal.globalConfig.siteUrl + "/Lists/" + self2.config.def.name + "/" + path;
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
        "Request on list " + self2.config.def.name + " failed, producing the following error: \n" + args.get_message() + "\nStackTrack: \n" + args.get_stackTrace()
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
    var folderUrl = sal.globalConfig.siteUrl + "/Lists/" + self2.config.def.name + "/" + path;
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
          "Folder " + folder.get_name() + " exists in " + self2.config.def.name
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
          "SAL.SPList.ensureListFolder:           Folder " + path + " does not exist in " + self2.config.def.name
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
    var listPath = self2.config.def.isLib ? "/" + self2.config.def.name + "/" : "/Lists/" + self2.config.def.name + "/";
    var rootFolder = "";
    if (args.rootFolder) {
      rootFolder = sal.globalConfig.siteUrl + listPath + args.rootFolder;
    }
    var formsPath = self2.config.def.isLib ? "/" + self2.config.def.name + "/forms/" : "/Lists/" + self2.config.def.name + "/";
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
    options.url = sal.globalConfig.siteUrl + "/_layouts/checkin.aspx?List={" + self2.config.guid + "}&FileName=" + fileRef;
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
    return sal.globalConfig.siteUrl + "/_layouts/15/versions.aspx?List={" + self2.config.guid + "}&ID=" + itemId;
  }
  function uploadNewDocumentAsync(folderPath, title, args) {
    return new Promise((resolve, reject2) => {
      const currCtx = new SP.ClientContext.get_current();
      const web = currCtx.get_web();
      const oList = web.get_lists().getByTitle(self2.config.def.title);
      currCtx.load(oList);
      currCtx.executeQueryAsync(
        function() {
          var siteString = sal.globalConfig.siteUrl == "/" ? "" : sal.globalConfig.siteUrl;
          const options = SP.UI.$create_DialogOptions();
          Object.assign(options, {
            title,
            dialogReturnValueCallback: resolve,
            args: JSON.stringify(args),
            url: siteString + "/_layouts/Upload.aspx?List=" + oList.get_id().toString() + "&RootFolder=" + siteString + "/" + self2.config.def.name + "/" + encodeURI(folderPath) + "&Source=" + location.pathname + "&args=" + encodeURI(JSON.stringify(args))
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
    return await fetchSharePointData(
      `/web/GetFolderByServerRelativeUrl('${relFolderPath}')/Files/add(url='${fileName}',overwrite=true)`,
      "POST",
      {
        "Content-Type": "application/json;odata=nometadata"
      },
      {
        body: file
      }
    );
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
    var result = await fetchSharePointData(
      fileResult.ListItemAllFields.__deferred.uri,
      "POST",
      {
        "X-HTTP-Method": "MERGE",
        "If-Match": "*"
      },
      {
        credentials: "same-origin",
        body: JSON.stringify(payload)
      }
    );
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
      `/web/lists/GetByTitle('${self2.config.def.title}')`
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
      "Content-Type": "application/json;odata=nometadata",
      "X-RequestDigest": requestDigest,
      ...headers
    },
    credentials: "same-origin",
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
  const response = await fetch(
    //window.context.pageContext.legacyPageContext.webServerRelativeUrl +
    "../_api/contextinfo",
    {
      method: "POST",
      headers: {
        Accept: "application/json; odata=verbose"
      }
    }
  );
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
  requestDigest = result.FormDigestValue;
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
      Initials = () => {
        if (!this.Title) return "";
        return this.Title.split(" ").slice(0, 2).map((name) => name[0]).join("");
      };
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
    init_entity();
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

// src/sal/components/fields/people/PeopleModule.js
var ko8, PeopleModule;
var init_PeopleModule = __esm({
  "src/sal/components/fields/people/PeopleModule.js"() {
    ko8 = __toESM(require_knockout_latest());
    init_BaseFieldModule();
    init_PeopleView();
    init_PeopleEdit();
    init_sal();
    init_entities();
    PeopleModule = class extends BaseFieldModule {
      constructor(params) {
        super(params);
        this.searchTerm.subscribe(this.onSearch);
      }
      ValueFunc = ko8.pureComputed({
        read: () => {
          if (!this.Value()) return;
          const userOpts = ko8.unwrap(this.userOpts);
          return userOpts.find((opt) => opt.ID == this.Value().ID);
        },
        write: (opt) => {
          const userOpts = ko8.unwrap(this.userOpts);
          if (!userOpts) return;
          this.Value(opt);
        }
      });
      ShowUserSelect = ko8.pureComputed(() => {
        const groupName = this.spGroupName;
        if (!groupName) return false;
        const options = ko8.unwrap(this.userOpts);
        return options.length;
      });
      focused = ko8.observable();
      focusin = () => this.focused(true);
      focusout = () => this.focused(false);
      keydown = (self2, e) => {
        switch (e.code) {
          case "Escape":
            this.focusout();
            break;
          case "ArrowDown":
            this.updateActiveFilteredItem(1);
            break;
          case "ArrowUp":
            this.updateActiveFilteredItem(-1);
            break;
          case "Enter":
            this.selectActiveFilteredItem();
            break;
          default:
            return true;
        }
        return true;
      };
      updateActiveFilteredItem = (keyDirection) => {
        const opts = ko8.unwrap(this.userOpts);
        if (!opts.length) return;
        const activeItemIndex = opts.findIndex((opt) => opt.active());
        let nextIndex = (activeItemIndex + keyDirection + opts.length) % opts.length;
        if (activeItemIndex >= 0) {
          opts[activeItemIndex]?.active(false);
        } else if (keyDirection <= 0) {
          nextIndex = opts.length - 1;
        }
        opts[nextIndex]?.active(true);
      };
      selectActiveFilteredItem = () => {
        const opts = ko8.unwrap(this.userOpts);
        if (!opts.length) return;
        const activeItemIndex = opts.findIndex((opt) => opt.active());
        if (activeItemIndex >= 0) {
          opts[activeItemIndex]?.active(false);
        }
        this.selectUser(opts[activeItemIndex]);
        opts[(activeItemIndex + 1) % opts.length]?.active(true);
      };
      searchTerm = ko8.observable();
      searchResults = ko8.observableArray();
      stagedUsers = ko8.observableArray();
      selectedUsers = ko8.pureComputed(() => {
        const staged = ko8.unwrap(this.stagedUsers);
        const value = ko8.unwrap(this.Value);
        const valueArr = [];
        if (value) {
          if (ko8.isObservableArray(this.Value)) {
            valueArr.push(...value);
          } else {
            valueArr.push(value);
          }
        }
        return [...staged, ...valueArr];
      });
      userOpts = ko8.pureComputed(() => {
        const selectedPrincipals = this.selectedUsers().map(
          (user) => user.LoginName
        );
        return this.searchResults().filter(
          (result) => !selectedPrincipals.includes(result.LoginName.toLocaleLowerCase())
        );
      });
      onSearch = async (searchTerm) => {
        if (!searchTerm) {
          this.searchResults.removeAll();
          return;
        }
        if (searchTerm.length < 3) return;
        const encodedSearchTerm = encodeURIComponent(searchTerm);
        const result = await window.context.aadHttpClientFactory.getClient("https://graph.microsoft.com").then((client) => {
          return client.get(
            `https://graph.microsoft.com/v1.0/users?$select=givenName,surname,displayName,mail,userPrincipalName&$filter=startsWith(givenName, '${encodedSearchTerm}') or startsWith(surname, '${encodedSearchTerm}') or startsWith(displayName, '${encodedSearchTerm}')`,
            client.constructor.configurations.v1
          );
        }).then((response) => {
          if (ko8.unwrap(searchTerm) != searchTerm) return;
          return response.json();
        });
        if (ko8.unwrap(searchTerm) != searchTerm) return;
        if (result?.value) {
          const mappedResults = result.value.map((user) => {
            return {
              ...new People2({
                Title: user.displayName,
                LoginName: "i:0#.f|membership|" + user.userPrincipalName.toLocaleLowerCase()
              }),
              active: ko8.observable()
            };
          });
          this.searchResults(mappedResults);
        }
      };
      selectUser = async (user) => {
        if (user.active()) user.active(false);
        const stagedUser = {
          resolutionStatus: ko8.observable("searching"),
          resolutionMessage: ko8.observable(),
          ...user
        };
        this.stagedUsers.push(stagedUser);
        const result = await ensureUserByKeyAsync(user.LoginName);
        if (!result) {
          stagedUser.resolutionStatus("fail");
          stagedUser.resolutionMessage("Could not ensure user!");
          return;
        }
        this.stagedUsers.remove(stagedUser);
        const people = new People2(result);
        if (ko8.isObservableArray(this.Value)) {
          this.Value.push(people);
        } else {
          this.Value(people);
        }
      };
      storePeople = (people) => {
      };
      removeUser = (user) => {
        if (this.stagedUsers.remove(user).length) return;
        if (ko8.isObservableArray(this.Value)) {
          this.Value.remove(user);
          return;
        }
        if (this.Value() == user) {
          this.Value(null);
        }
      };
      static viewTemplate = PeopleView_default;
      static editTemplate = PeopleEdit_default;
      static view = "people-view";
      static edit = "people-edit";
      static new = "people-edit";
    };
    registerFieldComponents(PeopleModule);
  }
});

// src/sal/components/fields/SearchSelectModule.js
var ko9, editTemplate5, SearchSelectModule;
var init_SearchSelectModule = __esm({
  "src/sal/components/fields/SearchSelectModule.js"() {
    ko9 = __toESM(require_knockout_latest());
    init_BaseFieldModule();
    editTemplate5 = html`
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
      GetSelectedOptions = ko9.pureComputed(() => {
        if (this.multiple) return this.Value();
        return this.Value() ? [this.Value()] : [];
      });
      InputGroupFocused = ko9.observable();
      setFocus = () => this.InputGroupFocused(true);
      FilterText = ko9.observable();
      FilteredOptions = ko9.pureComputed(
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
      static editTemplate = editTemplate5;
      static view = "search-select-view";
      static edit = "search-select-edit";
      static new = "search-select-new";
    };
    registerFieldComponents(SearchSelectModule);
  }
});

// src/sal/components/fields/SelectModule.js
var ko10, editTemplate6, SelectModule;
var init_SelectModule = __esm({
  "src/sal/components/fields/SelectModule.js"() {
    ko10 = __toESM(require_knockout_latest());
    init_BaseFieldModule();
    editTemplate6 = html`
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
      static editTemplate = editTemplate6;
      static view = "select-view";
      static edit = "select-edit";
      static new = "select-edit";
    };
    registerFieldComponents(SelectModule);
  }
});

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal, freeGlobal_default;
var init_freeGlobal = __esm({
  "node_modules/lodash-es/_freeGlobal.js"() {
    freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    freeGlobal_default = freeGlobal;
  }
});

// node_modules/lodash-es/_root.js
var freeSelf, root, root_default;
var init_root = __esm({
  "node_modules/lodash-es/_root.js"() {
    init_freeGlobal();
    freeSelf = typeof self == "object" && self && self.Object === Object && self;
    root = freeGlobal_default || freeSelf || Function("return this")();
    root_default = root;
  }
});

// node_modules/lodash-es/_Symbol.js
var Symbol2, Symbol_default;
var init_Symbol = __esm({
  "node_modules/lodash-es/_Symbol.js"() {
    init_root();
    Symbol2 = root_default.Symbol;
    Symbol_default = Symbol2;
  }
});

// node_modules/lodash-es/_getRawTag.js
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var objectProto, hasOwnProperty, nativeObjectToString, symToStringTag, getRawTag_default;
var init_getRawTag = __esm({
  "node_modules/lodash-es/_getRawTag.js"() {
    init_Symbol();
    objectProto = Object.prototype;
    hasOwnProperty = objectProto.hasOwnProperty;
    nativeObjectToString = objectProto.toString;
    symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
    getRawTag_default = getRawTag;
  }
});

// node_modules/lodash-es/_objectToString.js
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectProto2, nativeObjectToString2, objectToString_default;
var init_objectToString = __esm({
  "node_modules/lodash-es/_objectToString.js"() {
    objectProto2 = Object.prototype;
    nativeObjectToString2 = objectProto2.toString;
    objectToString_default = objectToString;
  }
});

// node_modules/lodash-es/_baseGetTag.js
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var nullTag, undefinedTag, symToStringTag2, baseGetTag_default;
var init_baseGetTag = __esm({
  "node_modules/lodash-es/_baseGetTag.js"() {
    init_Symbol();
    init_getRawTag();
    init_objectToString();
    nullTag = "[object Null]";
    undefinedTag = "[object Undefined]";
    symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
    baseGetTag_default = baseGetTag;
  }
});

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default;
var init_isObjectLike = __esm({
  "node_modules/lodash-es/isObjectLike.js"() {
    isObjectLike_default = isObjectLike;
  }
});

// node_modules/lodash-es/isArray.js
var isArray, isArray_default;
var init_isArray = __esm({
  "node_modules/lodash-es/isArray.js"() {
    isArray = Array.isArray;
    isArray_default = isArray;
  }
});

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default;
var init_isObject = __esm({
  "node_modules/lodash-es/isObject.js"() {
    isObject_default = isObject;
  }
});

// node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default;
var init_identity = __esm({
  "node_modules/lodash-es/identity.js"() {
    identity_default = identity;
  }
});

// node_modules/lodash-es/isFunction.js
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var asyncTag, funcTag, genTag, proxyTag, isFunction_default;
var init_isFunction = __esm({
  "node_modules/lodash-es/isFunction.js"() {
    init_baseGetTag();
    init_isObject();
    asyncTag = "[object AsyncFunction]";
    funcTag = "[object Function]";
    genTag = "[object GeneratorFunction]";
    proxyTag = "[object Proxy]";
    isFunction_default = isFunction;
  }
});

// node_modules/lodash-es/_coreJsData.js
var coreJsData, coreJsData_default;
var init_coreJsData = __esm({
  "node_modules/lodash-es/_coreJsData.js"() {
    init_root();
    coreJsData = root_default["__core-js_shared__"];
    coreJsData_default = coreJsData;
  }
});

// node_modules/lodash-es/_isMasked.js
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var maskSrcKey, isMasked_default;
var init_isMasked = __esm({
  "node_modules/lodash-es/_isMasked.js"() {
    init_coreJsData();
    maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    isMasked_default = isMasked;
  }
});

// node_modules/lodash-es/_toSource.js
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var funcProto, funcToString, toSource_default;
var init_toSource = __esm({
  "node_modules/lodash-es/_toSource.js"() {
    funcProto = Function.prototype;
    funcToString = funcProto.toString;
    toSource_default = toSource;
  }
});

// node_modules/lodash-es/_baseIsNative.js
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var reRegExpChar, reIsHostCtor, funcProto2, objectProto3, funcToString2, hasOwnProperty2, reIsNative, baseIsNative_default;
var init_baseIsNative = __esm({
  "node_modules/lodash-es/_baseIsNative.js"() {
    init_isFunction();
    init_isMasked();
    init_isObject();
    init_toSource();
    reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    reIsHostCtor = /^\[object .+?Constructor\]$/;
    funcProto2 = Function.prototype;
    objectProto3 = Object.prototype;
    funcToString2 = funcProto2.toString;
    hasOwnProperty2 = objectProto3.hasOwnProperty;
    reIsNative = RegExp(
      "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    baseIsNative_default = baseIsNative;
  }
});

// node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default;
var init_getValue = __esm({
  "node_modules/lodash-es/_getValue.js"() {
    getValue_default = getValue;
  }
});

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default;
var init_getNative = __esm({
  "node_modules/lodash-es/_getNative.js"() {
    init_baseIsNative();
    init_getValue();
    getNative_default = getNative;
  }
});

// node_modules/lodash-es/_WeakMap.js
var WeakMap2, WeakMap_default;
var init_WeakMap = __esm({
  "node_modules/lodash-es/_WeakMap.js"() {
    init_getNative();
    init_root();
    WeakMap2 = getNative_default(root_default, "WeakMap");
    WeakMap_default = WeakMap2;
  }
});

// node_modules/lodash-es/_baseCreate.js
var objectCreate, baseCreate, baseCreate_default;
var init_baseCreate = __esm({
  "node_modules/lodash-es/_baseCreate.js"() {
    init_isObject();
    objectCreate = Object.create;
    baseCreate = /* @__PURE__ */ function() {
      function object() {
      }
      return function(proto) {
        if (!isObject_default(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    baseCreate_default = baseCreate;
  }
});

// node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default;
var init_apply = __esm({
  "node_modules/lodash-es/_apply.js"() {
    apply_default = apply;
  }
});

// node_modules/lodash-es/_copyArray.js
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var copyArray_default;
var init_copyArray = __esm({
  "node_modules/lodash-es/_copyArray.js"() {
    copyArray_default = copyArray;
  }
});

// node_modules/lodash-es/_shortOut.js
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var HOT_COUNT, HOT_SPAN, nativeNow, shortOut_default;
var init_shortOut = __esm({
  "node_modules/lodash-es/_shortOut.js"() {
    HOT_COUNT = 800;
    HOT_SPAN = 16;
    nativeNow = Date.now;
    shortOut_default = shortOut;
  }
});

// node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default;
var init_constant = __esm({
  "node_modules/lodash-es/constant.js"() {
    constant_default = constant;
  }
});

// node_modules/lodash-es/_defineProperty.js
var defineProperty, defineProperty_default;
var init_defineProperty = __esm({
  "node_modules/lodash-es/_defineProperty.js"() {
    init_getNative();
    defineProperty = function() {
      try {
        var func = getNative_default(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    defineProperty_default = defineProperty;
  }
});

// node_modules/lodash-es/_baseSetToString.js
var baseSetToString, baseSetToString_default;
var init_baseSetToString = __esm({
  "node_modules/lodash-es/_baseSetToString.js"() {
    init_constant();
    init_defineProperty();
    init_identity();
    baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
      return defineProperty_default(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant_default(string),
        "writable": true
      });
    };
    baseSetToString_default = baseSetToString;
  }
});

// node_modules/lodash-es/_setToString.js
var setToString, setToString_default;
var init_setToString = __esm({
  "node_modules/lodash-es/_setToString.js"() {
    init_baseSetToString();
    init_shortOut();
    setToString = shortOut_default(baseSetToString_default);
    setToString_default = setToString;
  }
});

// node_modules/lodash-es/_arrayEach.js
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var arrayEach_default;
var init_arrayEach = __esm({
  "node_modules/lodash-es/_arrayEach.js"() {
    arrayEach_default = arrayEach;
  }
});

// node_modules/lodash-es/_isIndex.js
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var MAX_SAFE_INTEGER, reIsUint, isIndex_default;
var init_isIndex = __esm({
  "node_modules/lodash-es/_isIndex.js"() {
    MAX_SAFE_INTEGER = 9007199254740991;
    reIsUint = /^(?:0|[1-9]\d*)$/;
    isIndex_default = isIndex;
  }
});

// node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default;
var init_baseAssignValue = __esm({
  "node_modules/lodash-es/_baseAssignValue.js"() {
    init_defineProperty();
    baseAssignValue_default = baseAssignValue;
  }
});

// node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default;
var init_eq = __esm({
  "node_modules/lodash-es/eq.js"() {
    eq_default = eq;
  }
});

// node_modules/lodash-es/_assignValue.js
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty3.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var objectProto4, hasOwnProperty3, assignValue_default;
var init_assignValue = __esm({
  "node_modules/lodash-es/_assignValue.js"() {
    init_baseAssignValue();
    init_eq();
    objectProto4 = Object.prototype;
    hasOwnProperty3 = objectProto4.hasOwnProperty;
    assignValue_default = assignValue;
  }
});

// node_modules/lodash-es/_copyObject.js
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue_default(object, key, newValue);
    } else {
      assignValue_default(object, key, newValue);
    }
  }
  return object;
}
var copyObject_default;
var init_copyObject = __esm({
  "node_modules/lodash-es/_copyObject.js"() {
    init_assignValue();
    init_baseAssignValue();
    copyObject_default = copyObject;
  }
});

// node_modules/lodash-es/_overRest.js
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply_default(func, this, otherArgs);
  };
}
var nativeMax, overRest_default;
var init_overRest = __esm({
  "node_modules/lodash-es/_overRest.js"() {
    init_apply();
    nativeMax = Math.max;
    overRest_default = overRest;
  }
});

// node_modules/lodash-es/_baseRest.js
function baseRest(func, start) {
  return setToString_default(overRest_default(func, start, identity_default), func + "");
}
var baseRest_default;
var init_baseRest = __esm({
  "node_modules/lodash-es/_baseRest.js"() {
    init_identity();
    init_overRest();
    init_setToString();
    baseRest_default = baseRest;
  }
});

// node_modules/lodash-es/isLength.js
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var MAX_SAFE_INTEGER2, isLength_default;
var init_isLength = __esm({
  "node_modules/lodash-es/isLength.js"() {
    MAX_SAFE_INTEGER2 = 9007199254740991;
    isLength_default = isLength;
  }
});

// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default;
var init_isArrayLike = __esm({
  "node_modules/lodash-es/isArrayLike.js"() {
    init_isFunction();
    init_isLength();
    isArrayLike_default = isArrayLike;
  }
});

// node_modules/lodash-es/_isIterateeCall.js
function isIterateeCall(value, index, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
    return eq_default(object[index], value);
  }
  return false;
}
var isIterateeCall_default;
var init_isIterateeCall = __esm({
  "node_modules/lodash-es/_isIterateeCall.js"() {
    init_eq();
    init_isArrayLike();
    init_isIndex();
    init_isObject();
    isIterateeCall_default = isIterateeCall;
  }
});

// node_modules/lodash-es/_createAssigner.js
function createAssigner(assigner) {
  return baseRest_default(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var createAssigner_default;
var init_createAssigner = __esm({
  "node_modules/lodash-es/_createAssigner.js"() {
    init_baseRest();
    init_isIterateeCall();
    createAssigner_default = createAssigner;
  }
});

// node_modules/lodash-es/_isPrototype.js
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto5;
  return value === proto;
}
var objectProto5, isPrototype_default;
var init_isPrototype = __esm({
  "node_modules/lodash-es/_isPrototype.js"() {
    objectProto5 = Object.prototype;
    isPrototype_default = isPrototype;
  }
});

// node_modules/lodash-es/_baseTimes.js
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default;
var init_baseTimes = __esm({
  "node_modules/lodash-es/_baseTimes.js"() {
    baseTimes_default = baseTimes;
  }
});

// node_modules/lodash-es/_baseIsArguments.js
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var argsTag, baseIsArguments_default;
var init_baseIsArguments = __esm({
  "node_modules/lodash-es/_baseIsArguments.js"() {
    init_baseGetTag();
    init_isObjectLike();
    argsTag = "[object Arguments]";
    baseIsArguments_default = baseIsArguments;
  }
});

// node_modules/lodash-es/isArguments.js
var objectProto6, hasOwnProperty4, propertyIsEnumerable, isArguments, isArguments_default;
var init_isArguments = __esm({
  "node_modules/lodash-es/isArguments.js"() {
    init_baseIsArguments();
    init_isObjectLike();
    objectProto6 = Object.prototype;
    hasOwnProperty4 = objectProto6.hasOwnProperty;
    propertyIsEnumerable = objectProto6.propertyIsEnumerable;
    isArguments = baseIsArguments_default(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments_default : function(value) {
      return isObjectLike_default(value) && hasOwnProperty4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    isArguments_default = isArguments;
  }
});

// node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default;
var init_stubFalse = __esm({
  "node_modules/lodash-es/stubFalse.js"() {
    stubFalse_default = stubFalse;
  }
});

// node_modules/lodash-es/isBuffer.js
var freeExports, freeModule, moduleExports, Buffer2, nativeIsBuffer, isBuffer, isBuffer_default;
var init_isBuffer = __esm({
  "node_modules/lodash-es/isBuffer.js"() {
    init_root();
    init_stubFalse();
    freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    moduleExports = freeModule && freeModule.exports === freeExports;
    Buffer2 = moduleExports ? root_default.Buffer : void 0;
    nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    isBuffer = nativeIsBuffer || stubFalse_default;
    isBuffer_default = isBuffer;
  }
});

// node_modules/lodash-es/_baseIsTypedArray.js
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var argsTag2, arrayTag, boolTag, dateTag, errorTag, funcTag2, mapTag, numberTag, objectTag, regexpTag, setTag, stringTag, weakMapTag, arrayBufferTag, dataViewTag, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, typedArrayTags, baseIsTypedArray_default;
var init_baseIsTypedArray = __esm({
  "node_modules/lodash-es/_baseIsTypedArray.js"() {
    init_baseGetTag();
    init_isLength();
    init_isObjectLike();
    argsTag2 = "[object Arguments]";
    arrayTag = "[object Array]";
    boolTag = "[object Boolean]";
    dateTag = "[object Date]";
    errorTag = "[object Error]";
    funcTag2 = "[object Function]";
    mapTag = "[object Map]";
    numberTag = "[object Number]";
    objectTag = "[object Object]";
    regexpTag = "[object RegExp]";
    setTag = "[object Set]";
    stringTag = "[object String]";
    weakMapTag = "[object WeakMap]";
    arrayBufferTag = "[object ArrayBuffer]";
    dataViewTag = "[object DataView]";
    float32Tag = "[object Float32Array]";
    float64Tag = "[object Float64Array]";
    int8Tag = "[object Int8Array]";
    int16Tag = "[object Int16Array]";
    int32Tag = "[object Int32Array]";
    uint8Tag = "[object Uint8Array]";
    uint8ClampedTag = "[object Uint8ClampedArray]";
    uint16Tag = "[object Uint16Array]";
    uint32Tag = "[object Uint32Array]";
    typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    baseIsTypedArray_default = baseIsTypedArray;
  }
});

// node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default;
var init_baseUnary = __esm({
  "node_modules/lodash-es/_baseUnary.js"() {
    baseUnary_default = baseUnary;
  }
});

// node_modules/lodash-es/_nodeUtil.js
var freeExports2, freeModule2, moduleExports2, freeProcess, nodeUtil, nodeUtil_default;
var init_nodeUtil = __esm({
  "node_modules/lodash-es/_nodeUtil.js"() {
    init_freeGlobal();
    freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
    freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
    moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
    freeProcess = moduleExports2 && freeGlobal_default.process;
    nodeUtil = function() {
      try {
        var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    nodeUtil_default = nodeUtil;
  }
});

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray, isTypedArray, isTypedArray_default;
var init_isTypedArray = __esm({
  "node_modules/lodash-es/isTypedArray.js"() {
    init_baseIsTypedArray();
    init_baseUnary();
    init_nodeUtil();
    nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
    isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
    isTypedArray_default = isTypedArray;
  }
});

// node_modules/lodash-es/_arrayLikeKeys.js
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty5.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var objectProto7, hasOwnProperty5, arrayLikeKeys_default;
var init_arrayLikeKeys = __esm({
  "node_modules/lodash-es/_arrayLikeKeys.js"() {
    init_baseTimes();
    init_isArguments();
    init_isArray();
    init_isBuffer();
    init_isIndex();
    init_isTypedArray();
    objectProto7 = Object.prototype;
    hasOwnProperty5 = objectProto7.hasOwnProperty;
    arrayLikeKeys_default = arrayLikeKeys;
  }
});

// node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default;
var init_overArg = __esm({
  "node_modules/lodash-es/_overArg.js"() {
    overArg_default = overArg;
  }
});

// node_modules/lodash-es/_nativeKeys.js
var nativeKeys, nativeKeys_default;
var init_nativeKeys = __esm({
  "node_modules/lodash-es/_nativeKeys.js"() {
    init_overArg();
    nativeKeys = overArg_default(Object.keys, Object);
    nativeKeys_default = nativeKeys;
  }
});

// node_modules/lodash-es/_baseKeys.js
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty6.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var objectProto8, hasOwnProperty6, baseKeys_default;
var init_baseKeys = __esm({
  "node_modules/lodash-es/_baseKeys.js"() {
    init_isPrototype();
    init_nativeKeys();
    objectProto8 = Object.prototype;
    hasOwnProperty6 = objectProto8.hasOwnProperty;
    baseKeys_default = baseKeys;
  }
});

// node_modules/lodash-es/keys.js
function keys(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default;
var init_keys = __esm({
  "node_modules/lodash-es/keys.js"() {
    init_arrayLikeKeys();
    init_baseKeys();
    init_isArrayLike();
    keys_default = keys;
  }
});

// node_modules/lodash-es/_nativeKeysIn.js
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var nativeKeysIn_default;
var init_nativeKeysIn = __esm({
  "node_modules/lodash-es/_nativeKeysIn.js"() {
    nativeKeysIn_default = nativeKeysIn;
  }
});

// node_modules/lodash-es/_baseKeysIn.js
function baseKeysIn(object) {
  if (!isObject_default(object)) {
    return nativeKeysIn_default(object);
  }
  var isProto = isPrototype_default(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty7.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var objectProto9, hasOwnProperty7, baseKeysIn_default;
var init_baseKeysIn = __esm({
  "node_modules/lodash-es/_baseKeysIn.js"() {
    init_isObject();
    init_isPrototype();
    init_nativeKeysIn();
    objectProto9 = Object.prototype;
    hasOwnProperty7 = objectProto9.hasOwnProperty;
    baseKeysIn_default = baseKeysIn;
  }
});

// node_modules/lodash-es/keysIn.js
function keysIn(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
}
var keysIn_default;
var init_keysIn = __esm({
  "node_modules/lodash-es/keysIn.js"() {
    init_arrayLikeKeys();
    init_baseKeysIn();
    init_isArrayLike();
    keysIn_default = keysIn;
  }
});

// node_modules/lodash-es/_nativeCreate.js
var nativeCreate, nativeCreate_default;
var init_nativeCreate = __esm({
  "node_modules/lodash-es/_nativeCreate.js"() {
    init_getNative();
    nativeCreate = getNative_default(Object, "create");
    nativeCreate_default = nativeCreate;
  }
});

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default;
var init_hashClear = __esm({
  "node_modules/lodash-es/_hashClear.js"() {
    init_nativeCreate();
    hashClear_default = hashClear;
  }
});

// node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default;
var init_hashDelete = __esm({
  "node_modules/lodash-es/_hashDelete.js"() {
    hashDelete_default = hashDelete;
  }
});

// node_modules/lodash-es/_hashGet.js
function hashGet(key) {
  var data2 = this.__data__;
  if (nativeCreate_default) {
    var result = data2[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty8.call(data2, key) ? data2[key] : void 0;
}
var HASH_UNDEFINED, objectProto10, hasOwnProperty8, hashGet_default;
var init_hashGet = __esm({
  "node_modules/lodash-es/_hashGet.js"() {
    init_nativeCreate();
    HASH_UNDEFINED = "__lodash_hash_undefined__";
    objectProto10 = Object.prototype;
    hasOwnProperty8 = objectProto10.hasOwnProperty;
    hashGet_default = hashGet;
  }
});

// node_modules/lodash-es/_hashHas.js
function hashHas(key) {
  var data2 = this.__data__;
  return nativeCreate_default ? data2[key] !== void 0 : hasOwnProperty9.call(data2, key);
}
var objectProto11, hasOwnProperty9, hashHas_default;
var init_hashHas = __esm({
  "node_modules/lodash-es/_hashHas.js"() {
    init_nativeCreate();
    objectProto11 = Object.prototype;
    hasOwnProperty9 = objectProto11.hasOwnProperty;
    hashHas_default = hashHas;
  }
});

// node_modules/lodash-es/_hashSet.js
function hashSet(key, value) {
  var data2 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data2[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var HASH_UNDEFINED2, hashSet_default;
var init_hashSet = __esm({
  "node_modules/lodash-es/_hashSet.js"() {
    init_nativeCreate();
    HASH_UNDEFINED2 = "__lodash_hash_undefined__";
    hashSet_default = hashSet;
  }
});

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
var Hash_default;
var init_Hash = __esm({
  "node_modules/lodash-es/_Hash.js"() {
    init_hashClear();
    init_hashDelete();
    init_hashGet();
    init_hashHas();
    init_hashSet();
    Hash.prototype.clear = hashClear_default;
    Hash.prototype["delete"] = hashDelete_default;
    Hash.prototype.get = hashGet_default;
    Hash.prototype.has = hashHas_default;
    Hash.prototype.set = hashSet_default;
    Hash_default = Hash;
  }
});

// node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default;
var init_listCacheClear = __esm({
  "node_modules/lodash-es/_listCacheClear.js"() {
    listCacheClear_default = listCacheClear;
  }
});

// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default;
var init_assocIndexOf = __esm({
  "node_modules/lodash-es/_assocIndexOf.js"() {
    init_eq();
    assocIndexOf_default = assocIndexOf;
  }
});

// node_modules/lodash-es/_listCacheDelete.js
function listCacheDelete(key) {
  var data2 = this.__data__, index = assocIndexOf_default(data2, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index, 1);
  }
  --this.size;
  return true;
}
var arrayProto, splice, listCacheDelete_default;
var init_listCacheDelete = __esm({
  "node_modules/lodash-es/_listCacheDelete.js"() {
    init_assocIndexOf();
    arrayProto = Array.prototype;
    splice = arrayProto.splice;
    listCacheDelete_default = listCacheDelete;
  }
});

// node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data2 = this.__data__, index = assocIndexOf_default(data2, key);
  return index < 0 ? void 0 : data2[index][1];
}
var listCacheGet_default;
var init_listCacheGet = __esm({
  "node_modules/lodash-es/_listCacheGet.js"() {
    init_assocIndexOf();
    listCacheGet_default = listCacheGet;
  }
});

// node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default;
var init_listCacheHas = __esm({
  "node_modules/lodash-es/_listCacheHas.js"() {
    init_assocIndexOf();
    listCacheHas_default = listCacheHas;
  }
});

// node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data2 = this.__data__, index = assocIndexOf_default(data2, key);
  if (index < 0) {
    ++this.size;
    data2.push([key, value]);
  } else {
    data2[index][1] = value;
  }
  return this;
}
var listCacheSet_default;
var init_listCacheSet = __esm({
  "node_modules/lodash-es/_listCacheSet.js"() {
    init_assocIndexOf();
    listCacheSet_default = listCacheSet;
  }
});

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
var ListCache_default;
var init_ListCache = __esm({
  "node_modules/lodash-es/_ListCache.js"() {
    init_listCacheClear();
    init_listCacheDelete();
    init_listCacheGet();
    init_listCacheHas();
    init_listCacheSet();
    ListCache.prototype.clear = listCacheClear_default;
    ListCache.prototype["delete"] = listCacheDelete_default;
    ListCache.prototype.get = listCacheGet_default;
    ListCache.prototype.has = listCacheHas_default;
    ListCache.prototype.set = listCacheSet_default;
    ListCache_default = ListCache;
  }
});

// node_modules/lodash-es/_Map.js
var Map2, Map_default;
var init_Map = __esm({
  "node_modules/lodash-es/_Map.js"() {
    init_getNative();
    init_root();
    Map2 = getNative_default(root_default, "Map");
    Map_default = Map2;
  }
});

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default;
var init_mapCacheClear = __esm({
  "node_modules/lodash-es/_mapCacheClear.js"() {
    init_Hash();
    init_ListCache();
    init_Map();
    mapCacheClear_default = mapCacheClear;
  }
});

// node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default;
var init_isKeyable = __esm({
  "node_modules/lodash-es/_isKeyable.js"() {
    isKeyable_default = isKeyable;
  }
});

// node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data2 = map.__data__;
  return isKeyable_default(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
}
var getMapData_default;
var init_getMapData = __esm({
  "node_modules/lodash-es/_getMapData.js"() {
    init_isKeyable();
    getMapData_default = getMapData;
  }
});

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default;
var init_mapCacheDelete = __esm({
  "node_modules/lodash-es/_mapCacheDelete.js"() {
    init_getMapData();
    mapCacheDelete_default = mapCacheDelete;
  }
});

// node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default;
var init_mapCacheGet = __esm({
  "node_modules/lodash-es/_mapCacheGet.js"() {
    init_getMapData();
    mapCacheGet_default = mapCacheGet;
  }
});

// node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default;
var init_mapCacheHas = __esm({
  "node_modules/lodash-es/_mapCacheHas.js"() {
    init_getMapData();
    mapCacheHas_default = mapCacheHas;
  }
});

// node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data2 = getMapData_default(this, key), size = data2.size;
  data2.set(key, value);
  this.size += data2.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default;
var init_mapCacheSet = __esm({
  "node_modules/lodash-es/_mapCacheSet.js"() {
    init_getMapData();
    mapCacheSet_default = mapCacheSet;
  }
});

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
var MapCache_default;
var init_MapCache = __esm({
  "node_modules/lodash-es/_MapCache.js"() {
    init_mapCacheClear();
    init_mapCacheDelete();
    init_mapCacheGet();
    init_mapCacheHas();
    init_mapCacheSet();
    MapCache.prototype.clear = mapCacheClear_default;
    MapCache.prototype["delete"] = mapCacheDelete_default;
    MapCache.prototype.get = mapCacheGet_default;
    MapCache.prototype.has = mapCacheHas_default;
    MapCache.prototype.set = mapCacheSet_default;
    MapCache_default = MapCache;
  }
});

// node_modules/lodash-es/_arrayPush.js
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var arrayPush_default;
var init_arrayPush = __esm({
  "node_modules/lodash-es/_arrayPush.js"() {
    arrayPush_default = arrayPush;
  }
});

// node_modules/lodash-es/_getPrototype.js
var getPrototype, getPrototype_default;
var init_getPrototype = __esm({
  "node_modules/lodash-es/_getPrototype.js"() {
    init_overArg();
    getPrototype = overArg_default(Object.getPrototypeOf, Object);
    getPrototype_default = getPrototype;
  }
});

// node_modules/lodash-es/isPlainObject.js
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag2) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty10.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
}
var objectTag2, funcProto3, objectProto12, funcToString3, hasOwnProperty10, objectCtorString, isPlainObject_default;
var init_isPlainObject = __esm({
  "node_modules/lodash-es/isPlainObject.js"() {
    init_baseGetTag();
    init_getPrototype();
    init_isObjectLike();
    objectTag2 = "[object Object]";
    funcProto3 = Function.prototype;
    objectProto12 = Object.prototype;
    funcToString3 = funcProto3.toString;
    hasOwnProperty10 = objectProto12.hasOwnProperty;
    objectCtorString = funcToString3.call(Object);
    isPlainObject_default = isPlainObject;
  }
});

// node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default;
var init_stackClear = __esm({
  "node_modules/lodash-es/_stackClear.js"() {
    init_ListCache();
    stackClear_default = stackClear;
  }
});

// node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data2 = this.__data__, result = data2["delete"](key);
  this.size = data2.size;
  return result;
}
var stackDelete_default;
var init_stackDelete = __esm({
  "node_modules/lodash-es/_stackDelete.js"() {
    stackDelete_default = stackDelete;
  }
});

// node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default;
var init_stackGet = __esm({
  "node_modules/lodash-es/_stackGet.js"() {
    stackGet_default = stackGet;
  }
});

// node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default;
var init_stackHas = __esm({
  "node_modules/lodash-es/_stackHas.js"() {
    stackHas_default = stackHas;
  }
});

// node_modules/lodash-es/_stackSet.js
function stackSet(key, value) {
  var data2 = this.__data__;
  if (data2 instanceof ListCache_default) {
    var pairs = data2.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data2.size;
      return this;
    }
    data2 = this.__data__ = new MapCache_default(pairs);
  }
  data2.set(key, value);
  this.size = data2.size;
  return this;
}
var LARGE_ARRAY_SIZE, stackSet_default;
var init_stackSet = __esm({
  "node_modules/lodash-es/_stackSet.js"() {
    init_ListCache();
    init_Map();
    init_MapCache();
    LARGE_ARRAY_SIZE = 200;
    stackSet_default = stackSet;
  }
});

// node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data2 = this.__data__ = new ListCache_default(entries);
  this.size = data2.size;
}
var Stack_default;
var init_Stack = __esm({
  "node_modules/lodash-es/_Stack.js"() {
    init_ListCache();
    init_stackClear();
    init_stackDelete();
    init_stackGet();
    init_stackHas();
    init_stackSet();
    Stack.prototype.clear = stackClear_default;
    Stack.prototype["delete"] = stackDelete_default;
    Stack.prototype.get = stackGet_default;
    Stack.prototype.has = stackHas_default;
    Stack.prototype.set = stackSet_default;
    Stack_default = Stack;
  }
});

// node_modules/lodash-es/_baseAssign.js
function baseAssign(object, source) {
  return object && copyObject_default(source, keys_default(source), object);
}
var baseAssign_default;
var init_baseAssign = __esm({
  "node_modules/lodash-es/_baseAssign.js"() {
    init_copyObject();
    init_keys();
    baseAssign_default = baseAssign;
  }
});

// node_modules/lodash-es/_baseAssignIn.js
function baseAssignIn(object, source) {
  return object && copyObject_default(source, keysIn_default(source), object);
}
var baseAssignIn_default;
var init_baseAssignIn = __esm({
  "node_modules/lodash-es/_baseAssignIn.js"() {
    init_copyObject();
    init_keysIn();
    baseAssignIn_default = baseAssignIn;
  }
});

// node_modules/lodash-es/_cloneBuffer.js
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var freeExports3, freeModule3, moduleExports3, Buffer3, allocUnsafe, cloneBuffer_default;
var init_cloneBuffer = __esm({
  "node_modules/lodash-es/_cloneBuffer.js"() {
    init_root();
    freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
    freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
    moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
    Buffer3 = moduleExports3 ? root_default.Buffer : void 0;
    allocUnsafe = Buffer3 ? Buffer3.allocUnsafe : void 0;
    cloneBuffer_default = cloneBuffer;
  }
});

// node_modules/lodash-es/_arrayFilter.js
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var arrayFilter_default;
var init_arrayFilter = __esm({
  "node_modules/lodash-es/_arrayFilter.js"() {
    arrayFilter_default = arrayFilter;
  }
});

// node_modules/lodash-es/stubArray.js
function stubArray() {
  return [];
}
var stubArray_default;
var init_stubArray = __esm({
  "node_modules/lodash-es/stubArray.js"() {
    stubArray_default = stubArray;
  }
});

// node_modules/lodash-es/_getSymbols.js
var objectProto13, propertyIsEnumerable2, nativeGetSymbols, getSymbols, getSymbols_default;
var init_getSymbols = __esm({
  "node_modules/lodash-es/_getSymbols.js"() {
    init_arrayFilter();
    init_stubArray();
    objectProto13 = Object.prototype;
    propertyIsEnumerable2 = objectProto13.propertyIsEnumerable;
    nativeGetSymbols = Object.getOwnPropertySymbols;
    getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable2.call(object, symbol);
      });
    };
    getSymbols_default = getSymbols;
  }
});

// node_modules/lodash-es/_copySymbols.js
function copySymbols(source, object) {
  return copyObject_default(source, getSymbols_default(source), object);
}
var copySymbols_default;
var init_copySymbols = __esm({
  "node_modules/lodash-es/_copySymbols.js"() {
    init_copyObject();
    init_getSymbols();
    copySymbols_default = copySymbols;
  }
});

// node_modules/lodash-es/_getSymbolsIn.js
var nativeGetSymbols2, getSymbolsIn, getSymbolsIn_default;
var init_getSymbolsIn = __esm({
  "node_modules/lodash-es/_getSymbolsIn.js"() {
    init_arrayPush();
    init_getPrototype();
    init_getSymbols();
    init_stubArray();
    nativeGetSymbols2 = Object.getOwnPropertySymbols;
    getSymbolsIn = !nativeGetSymbols2 ? stubArray_default : function(object) {
      var result = [];
      while (object) {
        arrayPush_default(result, getSymbols_default(object));
        object = getPrototype_default(object);
      }
      return result;
    };
    getSymbolsIn_default = getSymbolsIn;
  }
});

// node_modules/lodash-es/_copySymbolsIn.js
function copySymbolsIn(source, object) {
  return copyObject_default(source, getSymbolsIn_default(source), object);
}
var copySymbolsIn_default;
var init_copySymbolsIn = __esm({
  "node_modules/lodash-es/_copySymbolsIn.js"() {
    init_copyObject();
    init_getSymbolsIn();
    copySymbolsIn_default = copySymbolsIn;
  }
});

// node_modules/lodash-es/_baseGetAllKeys.js
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
}
var baseGetAllKeys_default;
var init_baseGetAllKeys = __esm({
  "node_modules/lodash-es/_baseGetAllKeys.js"() {
    init_arrayPush();
    init_isArray();
    baseGetAllKeys_default = baseGetAllKeys;
  }
});

// node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
  return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
var getAllKeys_default;
var init_getAllKeys = __esm({
  "node_modules/lodash-es/_getAllKeys.js"() {
    init_baseGetAllKeys();
    init_getSymbols();
    init_keys();
    getAllKeys_default = getAllKeys;
  }
});

// node_modules/lodash-es/_getAllKeysIn.js
function getAllKeysIn(object) {
  return baseGetAllKeys_default(object, keysIn_default, getSymbolsIn_default);
}
var getAllKeysIn_default;
var init_getAllKeysIn = __esm({
  "node_modules/lodash-es/_getAllKeysIn.js"() {
    init_baseGetAllKeys();
    init_getSymbolsIn();
    init_keysIn();
    getAllKeysIn_default = getAllKeysIn;
  }
});

// node_modules/lodash-es/_DataView.js
var DataView, DataView_default;
var init_DataView = __esm({
  "node_modules/lodash-es/_DataView.js"() {
    init_getNative();
    init_root();
    DataView = getNative_default(root_default, "DataView");
    DataView_default = DataView;
  }
});

// node_modules/lodash-es/_Promise.js
var Promise2, Promise_default;
var init_Promise = __esm({
  "node_modules/lodash-es/_Promise.js"() {
    init_getNative();
    init_root();
    Promise2 = getNative_default(root_default, "Promise");
    Promise_default = Promise2;
  }
});

// node_modules/lodash-es/_Set.js
var Set2, Set_default;
var init_Set = __esm({
  "node_modules/lodash-es/_Set.js"() {
    init_getNative();
    init_root();
    Set2 = getNative_default(root_default, "Set");
    Set_default = Set2;
  }
});

// node_modules/lodash-es/_getTag.js
var mapTag2, objectTag3, promiseTag, setTag2, weakMapTag2, dataViewTag2, dataViewCtorString, mapCtorString, promiseCtorString, setCtorString, weakMapCtorString, getTag, getTag_default;
var init_getTag = __esm({
  "node_modules/lodash-es/_getTag.js"() {
    init_DataView();
    init_Map();
    init_Promise();
    init_Set();
    init_WeakMap();
    init_baseGetTag();
    init_toSource();
    mapTag2 = "[object Map]";
    objectTag3 = "[object Object]";
    promiseTag = "[object Promise]";
    setTag2 = "[object Set]";
    weakMapTag2 = "[object WeakMap]";
    dataViewTag2 = "[object DataView]";
    dataViewCtorString = toSource_default(DataView_default);
    mapCtorString = toSource_default(Map_default);
    promiseCtorString = toSource_default(Promise_default);
    setCtorString = toSource_default(Set_default);
    weakMapCtorString = toSource_default(WeakMap_default);
    getTag = baseGetTag_default;
    if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
      getTag = function(value) {
        var result = baseGetTag_default(value), Ctor = result == objectTag3 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag2;
            case mapCtorString:
              return mapTag2;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag2;
            case weakMapCtorString:
              return weakMapTag2;
          }
        }
        return result;
      };
    }
    getTag_default = getTag;
  }
});

// node_modules/lodash-es/_initCloneArray.js
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty11.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var objectProto14, hasOwnProperty11, initCloneArray_default;
var init_initCloneArray = __esm({
  "node_modules/lodash-es/_initCloneArray.js"() {
    objectProto14 = Object.prototype;
    hasOwnProperty11 = objectProto14.hasOwnProperty;
    initCloneArray_default = initCloneArray;
  }
});

// node_modules/lodash-es/_Uint8Array.js
var Uint8Array2, Uint8Array_default;
var init_Uint8Array = __esm({
  "node_modules/lodash-es/_Uint8Array.js"() {
    init_root();
    Uint8Array2 = root_default.Uint8Array;
    Uint8Array_default = Uint8Array2;
  }
});

// node_modules/lodash-es/_cloneArrayBuffer.js
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
  return result;
}
var cloneArrayBuffer_default;
var init_cloneArrayBuffer = __esm({
  "node_modules/lodash-es/_cloneArrayBuffer.js"() {
    init_Uint8Array();
    cloneArrayBuffer_default = cloneArrayBuffer;
  }
});

// node_modules/lodash-es/_cloneDataView.js
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var cloneDataView_default;
var init_cloneDataView = __esm({
  "node_modules/lodash-es/_cloneDataView.js"() {
    init_cloneArrayBuffer();
    cloneDataView_default = cloneDataView;
  }
});

// node_modules/lodash-es/_cloneRegExp.js
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var reFlags, cloneRegExp_default;
var init_cloneRegExp = __esm({
  "node_modules/lodash-es/_cloneRegExp.js"() {
    reFlags = /\w*$/;
    cloneRegExp_default = cloneRegExp;
  }
});

// node_modules/lodash-es/_cloneSymbol.js
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var symbolProto, symbolValueOf, cloneSymbol_default;
var init_cloneSymbol = __esm({
  "node_modules/lodash-es/_cloneSymbol.js"() {
    init_Symbol();
    symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
    symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    cloneSymbol_default = cloneSymbol;
  }
});

// node_modules/lodash-es/_cloneTypedArray.js
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var cloneTypedArray_default;
var init_cloneTypedArray = __esm({
  "node_modules/lodash-es/_cloneTypedArray.js"() {
    init_cloneArrayBuffer();
    cloneTypedArray_default = cloneTypedArray;
  }
});

// node_modules/lodash-es/_initCloneByTag.js
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag2:
      return cloneArrayBuffer_default(object);
    case boolTag2:
    case dateTag2:
      return new Ctor(+object);
    case dataViewTag3:
      return cloneDataView_default(object, isDeep);
    case float32Tag2:
    case float64Tag2:
    case int8Tag2:
    case int16Tag2:
    case int32Tag2:
    case uint8Tag2:
    case uint8ClampedTag2:
    case uint16Tag2:
    case uint32Tag2:
      return cloneTypedArray_default(object, isDeep);
    case mapTag3:
      return new Ctor();
    case numberTag2:
    case stringTag2:
      return new Ctor(object);
    case regexpTag2:
      return cloneRegExp_default(object);
    case setTag3:
      return new Ctor();
    case symbolTag:
      return cloneSymbol_default(object);
  }
}
var boolTag2, dateTag2, mapTag3, numberTag2, regexpTag2, setTag3, stringTag2, symbolTag, arrayBufferTag2, dataViewTag3, float32Tag2, float64Tag2, int8Tag2, int16Tag2, int32Tag2, uint8Tag2, uint8ClampedTag2, uint16Tag2, uint32Tag2, initCloneByTag_default;
var init_initCloneByTag = __esm({
  "node_modules/lodash-es/_initCloneByTag.js"() {
    init_cloneArrayBuffer();
    init_cloneDataView();
    init_cloneRegExp();
    init_cloneSymbol();
    init_cloneTypedArray();
    boolTag2 = "[object Boolean]";
    dateTag2 = "[object Date]";
    mapTag3 = "[object Map]";
    numberTag2 = "[object Number]";
    regexpTag2 = "[object RegExp]";
    setTag3 = "[object Set]";
    stringTag2 = "[object String]";
    symbolTag = "[object Symbol]";
    arrayBufferTag2 = "[object ArrayBuffer]";
    dataViewTag3 = "[object DataView]";
    float32Tag2 = "[object Float32Array]";
    float64Tag2 = "[object Float64Array]";
    int8Tag2 = "[object Int8Array]";
    int16Tag2 = "[object Int16Array]";
    int32Tag2 = "[object Int32Array]";
    uint8Tag2 = "[object Uint8Array]";
    uint8ClampedTag2 = "[object Uint8ClampedArray]";
    uint16Tag2 = "[object Uint16Array]";
    uint32Tag2 = "[object Uint32Array]";
    initCloneByTag_default = initCloneByTag;
  }
});

// node_modules/lodash-es/_initCloneObject.js
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
}
var initCloneObject_default;
var init_initCloneObject = __esm({
  "node_modules/lodash-es/_initCloneObject.js"() {
    init_baseCreate();
    init_getPrototype();
    init_isPrototype();
    initCloneObject_default = initCloneObject;
  }
});

// node_modules/lodash-es/_baseIsMap.js
function baseIsMap(value) {
  return isObjectLike_default(value) && getTag_default(value) == mapTag4;
}
var mapTag4, baseIsMap_default;
var init_baseIsMap = __esm({
  "node_modules/lodash-es/_baseIsMap.js"() {
    init_getTag();
    init_isObjectLike();
    mapTag4 = "[object Map]";
    baseIsMap_default = baseIsMap;
  }
});

// node_modules/lodash-es/isMap.js
var nodeIsMap, isMap, isMap_default;
var init_isMap = __esm({
  "node_modules/lodash-es/isMap.js"() {
    init_baseIsMap();
    init_baseUnary();
    init_nodeUtil();
    nodeIsMap = nodeUtil_default && nodeUtil_default.isMap;
    isMap = nodeIsMap ? baseUnary_default(nodeIsMap) : baseIsMap_default;
    isMap_default = isMap;
  }
});

// node_modules/lodash-es/_baseIsSet.js
function baseIsSet(value) {
  return isObjectLike_default(value) && getTag_default(value) == setTag4;
}
var setTag4, baseIsSet_default;
var init_baseIsSet = __esm({
  "node_modules/lodash-es/_baseIsSet.js"() {
    init_getTag();
    init_isObjectLike();
    setTag4 = "[object Set]";
    baseIsSet_default = baseIsSet;
  }
});

// node_modules/lodash-es/isSet.js
var nodeIsSet, isSet, isSet_default;
var init_isSet = __esm({
  "node_modules/lodash-es/isSet.js"() {
    init_baseIsSet();
    init_baseUnary();
    init_nodeUtil();
    nodeIsSet = nodeUtil_default && nodeUtil_default.isSet;
    isSet = nodeIsSet ? baseUnary_default(nodeIsSet) : baseIsSet_default;
    isSet_default = isSet;
  }
});

// node_modules/lodash-es/_baseClone.js
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject_default(value)) {
    return value;
  }
  var isArr = isArray_default(value);
  if (isArr) {
    result = initCloneArray_default(value);
    if (!isDeep) {
      return copyArray_default(value, result);
    }
  } else {
    var tag = getTag_default(value), isFunc = tag == funcTag3 || tag == genTag2;
    if (isBuffer_default(value)) {
      return cloneBuffer_default(value, isDeep);
    }
    if (tag == objectTag4 || tag == argsTag3 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject_default(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn_default(value, baseAssignIn_default(result, value)) : copySymbols_default(value, baseAssign_default(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag_default(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack_default());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet_default(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_default(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn_default : getAllKeys_default : isFlat ? keysIn_default : keys_default;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach_default(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue_default(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG, CLONE_FLAT_FLAG, CLONE_SYMBOLS_FLAG, argsTag3, arrayTag2, boolTag3, dateTag3, errorTag2, funcTag3, genTag2, mapTag5, numberTag3, objectTag4, regexpTag3, setTag5, stringTag3, symbolTag2, weakMapTag3, arrayBufferTag3, dataViewTag4, float32Tag3, float64Tag3, int8Tag3, int16Tag3, int32Tag3, uint8Tag3, uint8ClampedTag3, uint16Tag3, uint32Tag3, cloneableTags, baseClone_default;
var init_baseClone = __esm({
  "node_modules/lodash-es/_baseClone.js"() {
    init_Stack();
    init_arrayEach();
    init_assignValue();
    init_baseAssign();
    init_baseAssignIn();
    init_cloneBuffer();
    init_copyArray();
    init_copySymbols();
    init_copySymbolsIn();
    init_getAllKeys();
    init_getAllKeysIn();
    init_getTag();
    init_initCloneArray();
    init_initCloneByTag();
    init_initCloneObject();
    init_isArray();
    init_isBuffer();
    init_isMap();
    init_isObject();
    init_isSet();
    init_keys();
    init_keysIn();
    CLONE_DEEP_FLAG = 1;
    CLONE_FLAT_FLAG = 2;
    CLONE_SYMBOLS_FLAG = 4;
    argsTag3 = "[object Arguments]";
    arrayTag2 = "[object Array]";
    boolTag3 = "[object Boolean]";
    dateTag3 = "[object Date]";
    errorTag2 = "[object Error]";
    funcTag3 = "[object Function]";
    genTag2 = "[object GeneratorFunction]";
    mapTag5 = "[object Map]";
    numberTag3 = "[object Number]";
    objectTag4 = "[object Object]";
    regexpTag3 = "[object RegExp]";
    setTag5 = "[object Set]";
    stringTag3 = "[object String]";
    symbolTag2 = "[object Symbol]";
    weakMapTag3 = "[object WeakMap]";
    arrayBufferTag3 = "[object ArrayBuffer]";
    dataViewTag4 = "[object DataView]";
    float32Tag3 = "[object Float32Array]";
    float64Tag3 = "[object Float64Array]";
    int8Tag3 = "[object Int8Array]";
    int16Tag3 = "[object Int16Array]";
    int32Tag3 = "[object Int32Array]";
    uint8Tag3 = "[object Uint8Array]";
    uint8ClampedTag3 = "[object Uint8ClampedArray]";
    uint16Tag3 = "[object Uint16Array]";
    uint32Tag3 = "[object Uint32Array]";
    cloneableTags = {};
    cloneableTags[argsTag3] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag3] = cloneableTags[dataViewTag4] = cloneableTags[boolTag3] = cloneableTags[dateTag3] = cloneableTags[float32Tag3] = cloneableTags[float64Tag3] = cloneableTags[int8Tag3] = cloneableTags[int16Tag3] = cloneableTags[int32Tag3] = cloneableTags[mapTag5] = cloneableTags[numberTag3] = cloneableTags[objectTag4] = cloneableTags[regexpTag3] = cloneableTags[setTag5] = cloneableTags[stringTag3] = cloneableTags[symbolTag2] = cloneableTags[uint8Tag3] = cloneableTags[uint8ClampedTag3] = cloneableTags[uint16Tag3] = cloneableTags[uint32Tag3] = true;
    cloneableTags[errorTag2] = cloneableTags[funcTag3] = cloneableTags[weakMapTag3] = false;
    baseClone_default = baseClone;
  }
});

// node_modules/lodash-es/cloneDeep.js
function cloneDeep(value) {
  return baseClone_default(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG2);
}
var CLONE_DEEP_FLAG2, CLONE_SYMBOLS_FLAG2, cloneDeep_default;
var init_cloneDeep = __esm({
  "node_modules/lodash-es/cloneDeep.js"() {
    init_baseClone();
    CLONE_DEEP_FLAG2 = 1;
    CLONE_SYMBOLS_FLAG2 = 4;
    cloneDeep_default = cloneDeep;
  }
});

// node_modules/lodash-es/_setCacheAdd.js
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED3);
  return this;
}
var HASH_UNDEFINED3, setCacheAdd_default;
var init_setCacheAdd = __esm({
  "node_modules/lodash-es/_setCacheAdd.js"() {
    HASH_UNDEFINED3 = "__lodash_hash_undefined__";
    setCacheAdd_default = setCacheAdd;
  }
});

// node_modules/lodash-es/_setCacheHas.js
function setCacheHas(value) {
  return this.__data__.has(value);
}
var setCacheHas_default;
var init_setCacheHas = __esm({
  "node_modules/lodash-es/_setCacheHas.js"() {
    setCacheHas_default = setCacheHas;
  }
});

// node_modules/lodash-es/_SetCache.js
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache_default();
  while (++index < length) {
    this.add(values[index]);
  }
}
var SetCache_default;
var init_SetCache = __esm({
  "node_modules/lodash-es/_SetCache.js"() {
    init_MapCache();
    init_setCacheAdd();
    init_setCacheHas();
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
    SetCache.prototype.has = setCacheHas_default;
    SetCache_default = SetCache;
  }
});

// node_modules/lodash-es/_arraySome.js
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var arraySome_default;
var init_arraySome = __esm({
  "node_modules/lodash-es/_arraySome.js"() {
    arraySome_default = arraySome;
  }
});

// node_modules/lodash-es/_cacheHas.js
function cacheHas(cache, key) {
  return cache.has(key);
}
var cacheHas_default;
var init_cacheHas = __esm({
  "node_modules/lodash-es/_cacheHas.js"() {
    cacheHas_default = cacheHas;
  }
});

// node_modules/lodash-es/_equalArrays.js
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome_default(other, function(othValue2, othIndex) {
        if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG, COMPARE_UNORDERED_FLAG, equalArrays_default;
var init_equalArrays = __esm({
  "node_modules/lodash-es/_equalArrays.js"() {
    init_SetCache();
    init_arraySome();
    init_cacheHas();
    COMPARE_PARTIAL_FLAG = 1;
    COMPARE_UNORDERED_FLAG = 2;
    equalArrays_default = equalArrays;
  }
});

// node_modules/lodash-es/_mapToArray.js
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var mapToArray_default;
var init_mapToArray = __esm({
  "node_modules/lodash-es/_mapToArray.js"() {
    mapToArray_default = mapToArray;
  }
});

// node_modules/lodash-es/_setToArray.js
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var setToArray_default;
var init_setToArray = __esm({
  "node_modules/lodash-es/_setToArray.js"() {
    setToArray_default = setToArray;
  }
});

// node_modules/lodash-es/_equalByTag.js
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag5:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag4:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
        return false;
      }
      return true;
    case boolTag4:
    case dateTag4:
    case numberTag4:
      return eq_default(+object, +other);
    case errorTag3:
      return object.name == other.name && object.message == other.message;
    case regexpTag4:
    case stringTag4:
      return object == other + "";
    case mapTag6:
      var convert = mapToArray_default;
    case setTag6:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
      convert || (convert = setToArray_default);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG2;
      stack.set(object, other);
      var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag3:
      if (symbolValueOf2) {
        return symbolValueOf2.call(object) == symbolValueOf2.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG2, COMPARE_UNORDERED_FLAG2, boolTag4, dateTag4, errorTag3, mapTag6, numberTag4, regexpTag4, setTag6, stringTag4, symbolTag3, arrayBufferTag4, dataViewTag5, symbolProto2, symbolValueOf2, equalByTag_default;
var init_equalByTag = __esm({
  "node_modules/lodash-es/_equalByTag.js"() {
    init_Symbol();
    init_Uint8Array();
    init_eq();
    init_equalArrays();
    init_mapToArray();
    init_setToArray();
    COMPARE_PARTIAL_FLAG2 = 1;
    COMPARE_UNORDERED_FLAG2 = 2;
    boolTag4 = "[object Boolean]";
    dateTag4 = "[object Date]";
    errorTag3 = "[object Error]";
    mapTag6 = "[object Map]";
    numberTag4 = "[object Number]";
    regexpTag4 = "[object RegExp]";
    setTag6 = "[object Set]";
    stringTag4 = "[object String]";
    symbolTag3 = "[object Symbol]";
    arrayBufferTag4 = "[object ArrayBuffer]";
    dataViewTag5 = "[object DataView]";
    symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
    symbolValueOf2 = symbolProto2 ? symbolProto2.valueOf : void 0;
    equalByTag_default = equalByTag;
  }
});

// node_modules/lodash-es/_equalObjects.js
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty12.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG3, objectProto15, hasOwnProperty12, equalObjects_default;
var init_equalObjects = __esm({
  "node_modules/lodash-es/_equalObjects.js"() {
    init_getAllKeys();
    COMPARE_PARTIAL_FLAG3 = 1;
    objectProto15 = Object.prototype;
    hasOwnProperty12 = objectProto15.hasOwnProperty;
    equalObjects_default = equalObjects;
  }
});

// node_modules/lodash-es/_baseIsEqualDeep.js
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag3 : getTag_default(object), othTag = othIsArr ? arrayTag3 : getTag_default(other);
  objTag = objTag == argsTag4 ? objectTag5 : objTag;
  othTag = othTag == argsTag4 ? objectTag5 : othTag;
  var objIsObj = objTag == objectTag5, othIsObj = othTag == objectTag5, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_default(object)) {
    if (!isBuffer_default(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack_default());
    return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
    var objIsWrapped = objIsObj && hasOwnProperty13.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty13.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack_default());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack_default());
  return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
}
var COMPARE_PARTIAL_FLAG4, argsTag4, arrayTag3, objectTag5, objectProto16, hasOwnProperty13, baseIsEqualDeep_default;
var init_baseIsEqualDeep = __esm({
  "node_modules/lodash-es/_baseIsEqualDeep.js"() {
    init_Stack();
    init_equalArrays();
    init_equalByTag();
    init_equalObjects();
    init_getTag();
    init_isArray();
    init_isBuffer();
    init_isTypedArray();
    COMPARE_PARTIAL_FLAG4 = 1;
    argsTag4 = "[object Arguments]";
    arrayTag3 = "[object Array]";
    objectTag5 = "[object Object]";
    objectProto16 = Object.prototype;
    hasOwnProperty13 = objectProto16.hasOwnProperty;
    baseIsEqualDeep_default = baseIsEqualDeep;
  }
});

// node_modules/lodash-es/_baseIsEqual.js
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
}
var baseIsEqual_default;
var init_baseIsEqual = __esm({
  "node_modules/lodash-es/_baseIsEqual.js"() {
    init_baseIsEqualDeep();
    init_isObjectLike();
    baseIsEqual_default = baseIsEqual;
  }
});

// node_modules/lodash-es/_createBaseFor.js
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var createBaseFor_default;
var init_createBaseFor = __esm({
  "node_modules/lodash-es/_createBaseFor.js"() {
    createBaseFor_default = createBaseFor;
  }
});

// node_modules/lodash-es/_baseFor.js
var baseFor, baseFor_default;
var init_baseFor = __esm({
  "node_modules/lodash-es/_baseFor.js"() {
    init_createBaseFor();
    baseFor = createBaseFor_default();
    baseFor_default = baseFor;
  }
});

// node_modules/lodash-es/_assignMergeValue.js
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq_default(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignMergeValue_default;
var init_assignMergeValue = __esm({
  "node_modules/lodash-es/_assignMergeValue.js"() {
    init_baseAssignValue();
    init_eq();
    assignMergeValue_default = assignMergeValue;
  }
});

// node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default;
var init_isArrayLikeObject = __esm({
  "node_modules/lodash-es/isArrayLikeObject.js"() {
    init_isArrayLike();
    init_isObjectLike();
    isArrayLikeObject_default = isArrayLikeObject;
  }
});

// node_modules/lodash-es/_safeGet.js
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var safeGet_default;
var init_safeGet = __esm({
  "node_modules/lodash-es/_safeGet.js"() {
    safeGet_default = safeGet;
  }
});

// node_modules/lodash-es/toPlainObject.js
function toPlainObject(value) {
  return copyObject_default(value, keysIn_default(value));
}
var toPlainObject_default;
var init_toPlainObject = __esm({
  "node_modules/lodash-es/toPlainObject.js"() {
    init_copyObject();
    init_keysIn();
    toPlainObject_default = toPlainObject;
  }
});

// node_modules/lodash-es/_baseMergeDeep.js
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet_default(object, key), srcValue = safeGet_default(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue_default(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_default(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject_default(objValue)) {
        newValue = copyArray_default(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer_default(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray_default(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
      newValue = objValue;
      if (isArguments_default(objValue)) {
        newValue = toPlainObject_default(objValue);
      } else if (!isObject_default(objValue) || isFunction_default(objValue)) {
        newValue = initCloneObject_default(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue_default(object, key, newValue);
}
var baseMergeDeep_default;
var init_baseMergeDeep = __esm({
  "node_modules/lodash-es/_baseMergeDeep.js"() {
    init_assignMergeValue();
    init_cloneBuffer();
    init_cloneTypedArray();
    init_copyArray();
    init_initCloneObject();
    init_isArguments();
    init_isArray();
    init_isArrayLikeObject();
    init_isBuffer();
    init_isFunction();
    init_isObject();
    init_isPlainObject();
    init_isTypedArray();
    init_safeGet();
    init_toPlainObject();
    baseMergeDeep_default = baseMergeDeep;
  }
});

// node_modules/lodash-es/_baseMerge.js
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor_default(source, function(srcValue, key) {
    stack || (stack = new Stack_default());
    if (isObject_default(srcValue)) {
      baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet_default(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue_default(object, key, newValue);
    }
  }, keysIn_default);
}
var baseMerge_default;
var init_baseMerge = __esm({
  "node_modules/lodash-es/_baseMerge.js"() {
    init_Stack();
    init_assignMergeValue();
    init_baseFor();
    init_baseMergeDeep();
    init_isObject();
    init_keysIn();
    init_safeGet();
    baseMerge_default = baseMerge;
  }
});

// node_modules/lodash-es/isEqual.js
function isEqual(value, other) {
  return baseIsEqual_default(value, other);
}
var isEqual_default;
var init_isEqual = __esm({
  "node_modules/lodash-es/isEqual.js"() {
    init_baseIsEqual();
    isEqual_default = isEqual;
  }
});

// node_modules/lodash-es/merge.js
var merge, merge_default;
var init_merge = __esm({
  "node_modules/lodash-es/merge.js"() {
    init_baseMerge();
    init_createAssigner();
    merge = createAssigner_default(function(object, source, srcIndex) {
      baseMerge_default(object, source, srcIndex);
    });
    merge_default = merge;
  }
});

// node_modules/lodash-es/lodash.js
var init_lodash = __esm({
  "node_modules/lodash-es/lodash.js"() {
    init_cloneDeep();
    init_isEqual();
    init_merge();
  }
});

// node_modules/parchment/dist/parchment.js
var parchment_exports = {};
__export(parchment_exports, {
  Attributor: () => Attributor,
  AttributorStore: () => AttributorStore$1,
  BlockBlot: () => BlockBlot$1,
  ClassAttributor: () => ClassAttributor$1,
  ContainerBlot: () => ContainerBlot$1,
  EmbedBlot: () => EmbedBlot$1,
  InlineBlot: () => InlineBlot$1,
  LeafBlot: () => LeafBlot$1,
  ParentBlot: () => ParentBlot$1,
  Registry: () => Registry,
  Scope: () => Scope,
  ScrollBlot: () => ScrollBlot$1,
  StyleAttributor: () => StyleAttributor$1,
  TextBlot: () => TextBlot$1
});
function match(node, prefix) {
  return (node.getAttribute("class") || "").split(/\s+/).filter((name) => name.indexOf(`${prefix}-`) === 0);
}
function camelize(name) {
  const parts = name.split("-"), rest = parts.slice(1).map((part) => part[0].toUpperCase() + part.slice(1)).join("");
  return parts[0] + rest;
}
function makeAttachedBlot(node, scroll) {
  const found = scroll.find(node);
  if (found)
    return found;
  try {
    return scroll.create(node);
  } catch {
    const blot = scroll.create(Scope.INLINE);
    return Array.from(node.childNodes).forEach((child) => {
      blot.domNode.appendChild(child);
    }), node.parentNode && node.parentNode.replaceChild(blot.domNode, node), blot.attach(), blot;
  }
}
function isEqual2(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length)
    return false;
  for (const prop in obj1)
    if (obj1[prop] !== obj2[prop])
      return false;
  return true;
}
var Scope, Attributor, ParchmentError, _Registry, Registry, ClassAttributor, ClassAttributor$1, StyleAttributor, StyleAttributor$1, AttributorStore, AttributorStore$1, _ShadowBlot, ShadowBlot, _LeafBlot, LeafBlot, LeafBlot$1, LinkedList, _ParentBlot, ParentBlot, ParentBlot$1, _InlineBlot, InlineBlot, InlineBlot$1, _BlockBlot, BlockBlot, BlockBlot$1, _ContainerBlot, ContainerBlot, ContainerBlot$1, EmbedBlot, EmbedBlot$1, OBSERVER_CONFIG, MAX_OPTIMIZE_ITERATIONS, _ScrollBlot, ScrollBlot, ScrollBlot$1, _TextBlot, TextBlot, TextBlot$1;
var init_parchment = __esm({
  "node_modules/parchment/dist/parchment.js"() {
    Scope = /* @__PURE__ */ ((Scope2) => (Scope2[Scope2.TYPE = 3] = "TYPE", Scope2[Scope2.LEVEL = 12] = "LEVEL", Scope2[Scope2.ATTRIBUTE = 13] = "ATTRIBUTE", Scope2[Scope2.BLOT = 14] = "BLOT", Scope2[Scope2.INLINE = 7] = "INLINE", Scope2[Scope2.BLOCK = 11] = "BLOCK", Scope2[Scope2.BLOCK_BLOT = 10] = "BLOCK_BLOT", Scope2[Scope2.INLINE_BLOT = 6] = "INLINE_BLOT", Scope2[Scope2.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", Scope2[Scope2.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", Scope2[Scope2.ANY = 15] = "ANY", Scope2))(Scope || {});
    Attributor = class {
      constructor(attrName, keyName, options = {}) {
        this.attrName = attrName, this.keyName = keyName;
        const attributeBit = Scope.TYPE & Scope.ATTRIBUTE;
        this.scope = options.scope != null ? (
          // Ignore type bits, force attribute bit
          options.scope & Scope.LEVEL | attributeBit
        ) : Scope.ATTRIBUTE, options.whitelist != null && (this.whitelist = options.whitelist);
      }
      static keys(node) {
        return Array.from(node.attributes).map((item) => item.name);
      }
      add(node, value) {
        return this.canAdd(node, value) ? (node.setAttribute(this.keyName, value), true) : false;
      }
      canAdd(_node, value) {
        return this.whitelist == null ? true : typeof value == "string" ? this.whitelist.indexOf(value.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(value) > -1;
      }
      remove(node) {
        node.removeAttribute(this.keyName);
      }
      value(node) {
        const value = node.getAttribute(this.keyName);
        return this.canAdd(node, value) && value ? value : "";
      }
    };
    ParchmentError = class extends Error {
      constructor(message) {
        message = "[Parchment] " + message, super(message), this.message = message, this.name = this.constructor.name;
      }
    };
    _Registry = class _Registry2 {
      constructor() {
        this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
      }
      static find(node, bubble = false) {
        if (node == null)
          return null;
        if (this.blots.has(node))
          return this.blots.get(node) || null;
        if (bubble) {
          let parentNode = null;
          try {
            parentNode = node.parentNode;
          } catch {
            return null;
          }
          return this.find(parentNode, bubble);
        }
        return null;
      }
      create(scroll, input, value) {
        const match2 = this.query(input);
        if (match2 == null)
          throw new ParchmentError(`Unable to create ${input} blot`);
        const blotClass = match2, node = (
          // @ts-expect-error Fix me later
          input instanceof Node || input.nodeType === Node.TEXT_NODE ? input : blotClass.create(value)
        ), blot = new blotClass(scroll, node, value);
        return _Registry2.blots.set(blot.domNode, blot), blot;
      }
      find(node, bubble = false) {
        return _Registry2.find(node, bubble);
      }
      query(query, scope = Scope.ANY) {
        let match2;
        return typeof query == "string" ? match2 = this.types[query] || this.attributes[query] : query instanceof Text || query.nodeType === Node.TEXT_NODE ? match2 = this.types.text : typeof query == "number" ? query & Scope.LEVEL & Scope.BLOCK ? match2 = this.types.block : query & Scope.LEVEL & Scope.INLINE && (match2 = this.types.inline) : query instanceof Element && ((query.getAttribute("class") || "").split(/\s+/).some((name) => (match2 = this.classes[name], !!match2)), match2 = match2 || this.tags[query.tagName]), match2 == null ? null : "scope" in match2 && scope & Scope.LEVEL & match2.scope && scope & Scope.TYPE & match2.scope ? match2 : null;
      }
      register(...definitions) {
        return definitions.map((definition) => {
          const isBlot = "blotName" in definition, isAttr = "attrName" in definition;
          if (!isBlot && !isAttr)
            throw new ParchmentError("Invalid definition");
          if (isBlot && definition.blotName === "abstract")
            throw new ParchmentError("Cannot register abstract class");
          const key = isBlot ? definition.blotName : isAttr ? definition.attrName : void 0;
          return this.types[key] = definition, isAttr ? typeof definition.keyName == "string" && (this.attributes[definition.keyName] = definition) : isBlot && (definition.className && (this.classes[definition.className] = definition), definition.tagName && (Array.isArray(definition.tagName) ? definition.tagName = definition.tagName.map((tagName) => tagName.toUpperCase()) : definition.tagName = definition.tagName.toUpperCase(), (Array.isArray(definition.tagName) ? definition.tagName : [definition.tagName]).forEach((tag) => {
            (this.tags[tag] == null || definition.className == null) && (this.tags[tag] = definition);
          }))), definition;
        });
      }
    };
    _Registry.blots = /* @__PURE__ */ new WeakMap();
    Registry = _Registry;
    ClassAttributor = class extends Attributor {
      static keys(node) {
        return (node.getAttribute("class") || "").split(/\s+/).map((name) => name.split("-").slice(0, -1).join("-"));
      }
      add(node, value) {
        return this.canAdd(node, value) ? (this.remove(node), node.classList.add(`${this.keyName}-${value}`), true) : false;
      }
      remove(node) {
        match(node, this.keyName).forEach((name) => {
          node.classList.remove(name);
        }), node.classList.length === 0 && node.removeAttribute("class");
      }
      value(node) {
        const value = (match(node, this.keyName)[0] || "").slice(this.keyName.length + 1);
        return this.canAdd(node, value) ? value : "";
      }
    };
    ClassAttributor$1 = ClassAttributor;
    StyleAttributor = class extends Attributor {
      static keys(node) {
        return (node.getAttribute("style") || "").split(";").map((value) => value.split(":")[0].trim());
      }
      add(node, value) {
        return this.canAdd(node, value) ? (node.style[camelize(this.keyName)] = value, true) : false;
      }
      remove(node) {
        node.style[camelize(this.keyName)] = "", node.getAttribute("style") || node.removeAttribute("style");
      }
      value(node) {
        const value = node.style[camelize(this.keyName)];
        return this.canAdd(node, value) ? value : "";
      }
    };
    StyleAttributor$1 = StyleAttributor;
    AttributorStore = class {
      constructor(domNode) {
        this.attributes = {}, this.domNode = domNode, this.build();
      }
      attribute(attribute, value) {
        value ? attribute.add(this.domNode, value) && (attribute.value(this.domNode) != null ? this.attributes[attribute.attrName] = attribute : delete this.attributes[attribute.attrName]) : (attribute.remove(this.domNode), delete this.attributes[attribute.attrName]);
      }
      build() {
        this.attributes = {};
        const blot = Registry.find(this.domNode);
        if (blot == null)
          return;
        const attributes = Attributor.keys(this.domNode), classes = ClassAttributor$1.keys(this.domNode), styles = StyleAttributor$1.keys(this.domNode);
        attributes.concat(classes).concat(styles).forEach((name) => {
          const attr = blot.scroll.query(name, Scope.ATTRIBUTE);
          attr instanceof Attributor && (this.attributes[attr.attrName] = attr);
        });
      }
      copy(target) {
        Object.keys(this.attributes).forEach((key) => {
          const value = this.attributes[key].value(this.domNode);
          target.format(key, value);
        });
      }
      move(target) {
        this.copy(target), Object.keys(this.attributes).forEach((key) => {
          this.attributes[key].remove(this.domNode);
        }), this.attributes = {};
      }
      values() {
        return Object.keys(this.attributes).reduce(
          (attributes, name) => (attributes[name] = this.attributes[name].value(this.domNode), attributes),
          {}
        );
      }
    };
    AttributorStore$1 = AttributorStore;
    _ShadowBlot = class _ShadowBlot2 {
      constructor(scroll, domNode) {
        this.scroll = scroll, this.domNode = domNode, Registry.blots.set(domNode, this), this.prev = null, this.next = null;
      }
      static create(rawValue) {
        if (this.tagName == null)
          throw new ParchmentError("Blot definition missing tagName");
        let node, value;
        return Array.isArray(this.tagName) ? (typeof rawValue == "string" ? (value = rawValue.toUpperCase(), parseInt(value, 10).toString() === value && (value = parseInt(value, 10))) : typeof rawValue == "number" && (value = rawValue), typeof value == "number" ? node = document.createElement(this.tagName[value - 1]) : value && this.tagName.indexOf(value) > -1 ? node = document.createElement(value) : node = document.createElement(this.tagName[0])) : node = document.createElement(this.tagName), this.className && node.classList.add(this.className), node;
      }
      // Hack for accessing inherited static methods
      get statics() {
        return this.constructor;
      }
      attach() {
      }
      clone() {
        const domNode = this.domNode.cloneNode(false);
        return this.scroll.create(domNode);
      }
      detach() {
        this.parent != null && this.parent.removeChild(this), Registry.blots.delete(this.domNode);
      }
      deleteAt(index, length) {
        this.isolate(index, length).remove();
      }
      formatAt(index, length, name, value) {
        const blot = this.isolate(index, length);
        if (this.scroll.query(name, Scope.BLOT) != null && value)
          blot.wrap(name, value);
        else if (this.scroll.query(name, Scope.ATTRIBUTE) != null) {
          const parent = this.scroll.create(this.statics.scope);
          blot.wrap(parent), parent.format(name, value);
        }
      }
      insertAt(index, value, def) {
        const blot = def == null ? this.scroll.create("text", value) : this.scroll.create(value, def), ref = this.split(index);
        this.parent.insertBefore(blot, ref || void 0);
      }
      isolate(index, length) {
        const target = this.split(index);
        if (target == null)
          throw new Error("Attempt to isolate at end");
        return target.split(length), target;
      }
      length() {
        return 1;
      }
      offset(root2 = this.parent) {
        return this.parent == null || this === root2 ? 0 : this.parent.children.offset(this) + this.parent.offset(root2);
      }
      optimize(_context) {
        this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
      }
      remove() {
        this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
      }
      replaceWith(name, value) {
        const replacement = typeof name == "string" ? this.scroll.create(name, value) : name;
        return this.parent != null && (this.parent.insertBefore(replacement, this.next || void 0), this.remove()), replacement;
      }
      split(index, _force) {
        return index === 0 ? this : this.next;
      }
      update(_mutations, _context) {
      }
      wrap(name, value) {
        const wrapper = typeof name == "string" ? this.scroll.create(name, value) : name;
        if (this.parent != null && this.parent.insertBefore(wrapper, this.next || void 0), typeof wrapper.appendChild != "function")
          throw new ParchmentError(`Cannot wrap ${name}`);
        return wrapper.appendChild(this), wrapper;
      }
    };
    _ShadowBlot.blotName = "abstract";
    ShadowBlot = _ShadowBlot;
    _LeafBlot = class _LeafBlot2 extends ShadowBlot {
      /**
       * Returns the value represented by domNode if it is this Blot's type
       * No checking that domNode can represent this Blot type is required so
       * applications needing it should check externally before calling.
       */
      static value(_domNode) {
        return true;
      }
      /**
       * Given location represented by node and offset from DOM Selection Range,
       * return index to that location.
       */
      index(node, offset) {
        return this.domNode === node || this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(offset, 1) : -1;
      }
      /**
       * Given index to location within blot, return node and offset representing
       * that location, consumable by DOM Selection Range
       */
      position(index, _inclusive) {
        let offset = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
        return index > 0 && (offset += 1), [this.parent.domNode, offset];
      }
      /**
       * Return value represented by this blot
       * Should not change without interaction from API or
       * user change detectable by update()
       */
      value() {
        return {
          [this.statics.blotName]: this.statics.value(this.domNode) || true
        };
      }
    };
    _LeafBlot.scope = Scope.INLINE_BLOT;
    LeafBlot = _LeafBlot;
    LeafBlot$1 = LeafBlot;
    LinkedList = class {
      constructor() {
        this.head = null, this.tail = null, this.length = 0;
      }
      append(...nodes) {
        if (this.insertBefore(nodes[0], null), nodes.length > 1) {
          const rest = nodes.slice(1);
          this.append(...rest);
        }
      }
      at(index) {
        const next = this.iterator();
        let cur = next();
        for (; cur && index > 0; )
          index -= 1, cur = next();
        return cur;
      }
      contains(node) {
        const next = this.iterator();
        let cur = next();
        for (; cur; ) {
          if (cur === node)
            return true;
          cur = next();
        }
        return false;
      }
      indexOf(node) {
        const next = this.iterator();
        let cur = next(), index = 0;
        for (; cur; ) {
          if (cur === node)
            return index;
          index += 1, cur = next();
        }
        return -1;
      }
      insertBefore(node, refNode) {
        node != null && (this.remove(node), node.next = refNode, refNode != null ? (node.prev = refNode.prev, refNode.prev != null && (refNode.prev.next = node), refNode.prev = node, refNode === this.head && (this.head = node)) : this.tail != null ? (this.tail.next = node, node.prev = this.tail, this.tail = node) : (node.prev = null, this.head = this.tail = node), this.length += 1);
      }
      offset(target) {
        let index = 0, cur = this.head;
        for (; cur != null; ) {
          if (cur === target)
            return index;
          index += cur.length(), cur = cur.next;
        }
        return -1;
      }
      remove(node) {
        this.contains(node) && (node.prev != null && (node.prev.next = node.next), node.next != null && (node.next.prev = node.prev), node === this.head && (this.head = node.next), node === this.tail && (this.tail = node.prev), this.length -= 1);
      }
      iterator(curNode = this.head) {
        return () => {
          const ret = curNode;
          return curNode != null && (curNode = curNode.next), ret;
        };
      }
      find(index, inclusive = false) {
        const next = this.iterator();
        let cur = next();
        for (; cur; ) {
          const length = cur.length();
          if (index < length || inclusive && index === length && (cur.next == null || cur.next.length() !== 0))
            return [cur, index];
          index -= length, cur = next();
        }
        return [null, 0];
      }
      forEach(callback) {
        const next = this.iterator();
        let cur = next();
        for (; cur; )
          callback(cur), cur = next();
      }
      forEachAt(index, length, callback) {
        if (length <= 0)
          return;
        const [startNode, offset] = this.find(index);
        let curIndex = index - offset;
        const next = this.iterator(startNode);
        let cur = next();
        for (; cur && curIndex < index + length; ) {
          const curLength = cur.length();
          index > curIndex ? callback(
            cur,
            index - curIndex,
            Math.min(length, curIndex + curLength - index)
          ) : callback(cur, 0, Math.min(curLength, index + length - curIndex)), curIndex += curLength, cur = next();
        }
      }
      map(callback) {
        return this.reduce((memo, cur) => (memo.push(callback(cur)), memo), []);
      }
      reduce(callback, memo) {
        const next = this.iterator();
        let cur = next();
        for (; cur; )
          memo = callback(memo, cur), cur = next();
        return memo;
      }
    };
    _ParentBlot = class _ParentBlot2 extends ShadowBlot {
      constructor(scroll, domNode) {
        super(scroll, domNode), this.uiNode = null, this.build();
      }
      appendChild(other) {
        this.insertBefore(other);
      }
      attach() {
        super.attach(), this.children.forEach((child) => {
          child.attach();
        });
      }
      attachUI(node) {
        this.uiNode != null && this.uiNode.remove(), this.uiNode = node, _ParentBlot2.uiClass && this.uiNode.classList.add(_ParentBlot2.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
      }
      /**
       * Called during construction, should fill its own children LinkedList.
       */
      build() {
        this.children = new LinkedList(), Array.from(this.domNode.childNodes).filter((node) => node !== this.uiNode).reverse().forEach((node) => {
          try {
            const child = makeAttachedBlot(node, this.scroll);
            this.insertBefore(child, this.children.head || void 0);
          } catch (err) {
            if (err instanceof ParchmentError)
              return;
            throw err;
          }
        });
      }
      deleteAt(index, length) {
        if (index === 0 && length === this.length())
          return this.remove();
        this.children.forEachAt(index, length, (child, offset, childLength) => {
          child.deleteAt(offset, childLength);
        });
      }
      descendant(criteria, index = 0) {
        const [child, offset] = this.children.find(index);
        return criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria ? [child, offset] : child instanceof _ParentBlot2 ? child.descendant(criteria, offset) : [null, -1];
      }
      descendants(criteria, index = 0, length = Number.MAX_VALUE) {
        let descendants = [], lengthLeft = length;
        return this.children.forEachAt(
          index,
          length,
          (child, childIndex, childLength) => {
            (criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria) && descendants.push(child), child instanceof _ParentBlot2 && (descendants = descendants.concat(
              child.descendants(criteria, childIndex, lengthLeft)
            )), lengthLeft -= childLength;
          }
        ), descendants;
      }
      detach() {
        this.children.forEach((child) => {
          child.detach();
        }), super.detach();
      }
      enforceAllowedChildren() {
        let done = false;
        this.children.forEach((child) => {
          done || this.statics.allowedChildren.some(
            (def) => child instanceof def
          ) || (child.statics.scope === Scope.BLOCK_BLOT ? (child.next != null && this.splitAfter(child), child.prev != null && this.splitAfter(child.prev), child.parent.unwrap(), done = true) : child instanceof _ParentBlot2 ? child.unwrap() : child.remove());
        });
      }
      formatAt(index, length, name, value) {
        this.children.forEachAt(index, length, (child, offset, childLength) => {
          child.formatAt(offset, childLength, name, value);
        });
      }
      insertAt(index, value, def) {
        const [child, offset] = this.children.find(index);
        if (child)
          child.insertAt(offset, value, def);
        else {
          const blot = def == null ? this.scroll.create("text", value) : this.scroll.create(value, def);
          this.appendChild(blot);
        }
      }
      insertBefore(childBlot, refBlot) {
        childBlot.parent != null && childBlot.parent.children.remove(childBlot);
        let refDomNode = null;
        this.children.insertBefore(childBlot, refBlot || null), childBlot.parent = this, refBlot != null && (refDomNode = refBlot.domNode), (this.domNode.parentNode !== childBlot.domNode || this.domNode.nextSibling !== refDomNode) && this.domNode.insertBefore(childBlot.domNode, refDomNode), childBlot.attach();
      }
      length() {
        return this.children.reduce((memo, child) => memo + child.length(), 0);
      }
      moveChildren(targetParent, refNode) {
        this.children.forEach((child) => {
          targetParent.insertBefore(child, refNode);
        });
      }
      optimize(context) {
        if (super.optimize(context), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
          if (this.statics.defaultChild != null) {
            const child = this.scroll.create(this.statics.defaultChild.blotName);
            this.appendChild(child);
          } else
            this.remove();
      }
      path(index, inclusive = false) {
        const [child, offset] = this.children.find(index, inclusive), position = [[this, index]];
        return child instanceof _ParentBlot2 ? position.concat(child.path(offset, inclusive)) : (child != null && position.push([child, offset]), position);
      }
      removeChild(child) {
        this.children.remove(child);
      }
      replaceWith(name, value) {
        const replacement = typeof name == "string" ? this.scroll.create(name, value) : name;
        return replacement instanceof _ParentBlot2 && this.moveChildren(replacement), super.replaceWith(replacement);
      }
      split(index, force = false) {
        if (!force) {
          if (index === 0)
            return this;
          if (index === this.length())
            return this.next;
        }
        const after = this.clone();
        return this.parent && this.parent.insertBefore(after, this.next || void 0), this.children.forEachAt(index, this.length(), (child, offset, _length) => {
          const split = child.split(offset, force);
          split != null && after.appendChild(split);
        }), after;
      }
      splitAfter(child) {
        const after = this.clone();
        for (; child.next != null; )
          after.appendChild(child.next);
        return this.parent && this.parent.insertBefore(after, this.next || void 0), after;
      }
      unwrap() {
        this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
      }
      update(mutations, _context) {
        const addedNodes = [], removedNodes = [];
        mutations.forEach((mutation) => {
          mutation.target === this.domNode && mutation.type === "childList" && (addedNodes.push(...mutation.addedNodes), removedNodes.push(...mutation.removedNodes));
        }), removedNodes.forEach((node) => {
          if (node.parentNode != null && // @ts-expect-error Fix me later
          node.tagName !== "IFRAME" && document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY)
            return;
          const blot = this.scroll.find(node);
          blot != null && (blot.domNode.parentNode == null || blot.domNode.parentNode === this.domNode) && blot.detach();
        }), addedNodes.filter((node) => node.parentNode === this.domNode && node !== this.uiNode).sort((a, b) => a === b ? 0 : a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((node) => {
          let refBlot = null;
          node.nextSibling != null && (refBlot = this.scroll.find(node.nextSibling));
          const blot = makeAttachedBlot(node, this.scroll);
          (blot.next !== refBlot || blot.next == null) && (blot.parent != null && blot.parent.removeChild(this), this.insertBefore(blot, refBlot || void 0));
        }), this.enforceAllowedChildren();
      }
    };
    _ParentBlot.uiClass = "";
    ParentBlot = _ParentBlot;
    ParentBlot$1 = ParentBlot;
    _InlineBlot = class _InlineBlot2 extends ParentBlot$1 {
      static create(value) {
        return super.create(value);
      }
      static formats(domNode, scroll) {
        const match2 = scroll.query(_InlineBlot2.blotName);
        if (!(match2 != null && domNode.tagName === match2.tagName)) {
          if (typeof this.tagName == "string")
            return true;
          if (Array.isArray(this.tagName))
            return domNode.tagName.toLowerCase();
        }
      }
      constructor(scroll, domNode) {
        super(scroll, domNode), this.attributes = new AttributorStore$1(this.domNode);
      }
      format(name, value) {
        if (name === this.statics.blotName && !value)
          this.children.forEach((child) => {
            child instanceof _InlineBlot2 || (child = child.wrap(_InlineBlot2.blotName, true)), this.attributes.copy(child);
          }), this.unwrap();
        else {
          const format = this.scroll.query(name, Scope.INLINE);
          if (format == null)
            return;
          format instanceof Attributor ? this.attributes.attribute(format, value) : value && (name !== this.statics.blotName || this.formats()[name] !== value) && this.replaceWith(name, value);
        }
      }
      formats() {
        const formats = this.attributes.values(), format = this.statics.formats(this.domNode, this.scroll);
        return format != null && (formats[this.statics.blotName] = format), formats;
      }
      formatAt(index, length, name, value) {
        this.formats()[name] != null || this.scroll.query(name, Scope.ATTRIBUTE) ? this.isolate(index, length).format(name, value) : super.formatAt(index, length, name, value);
      }
      optimize(context) {
        super.optimize(context);
        const formats = this.formats();
        if (Object.keys(formats).length === 0)
          return this.unwrap();
        const next = this.next;
        next instanceof _InlineBlot2 && next.prev === this && isEqual2(formats, next.formats()) && (next.moveChildren(this), next.remove());
      }
      replaceWith(name, value) {
        const replacement = super.replaceWith(name, value);
        return this.attributes.copy(replacement), replacement;
      }
      update(mutations, context) {
        super.update(mutations, context), mutations.some(
          (mutation) => mutation.target === this.domNode && mutation.type === "attributes"
        ) && this.attributes.build();
      }
      wrap(name, value) {
        const wrapper = super.wrap(name, value);
        return wrapper instanceof _InlineBlot2 && this.attributes.move(wrapper), wrapper;
      }
    };
    _InlineBlot.allowedChildren = [_InlineBlot, LeafBlot$1], _InlineBlot.blotName = "inline", _InlineBlot.scope = Scope.INLINE_BLOT, _InlineBlot.tagName = "SPAN";
    InlineBlot = _InlineBlot;
    InlineBlot$1 = InlineBlot;
    _BlockBlot = class _BlockBlot2 extends ParentBlot$1 {
      static create(value) {
        return super.create(value);
      }
      static formats(domNode, scroll) {
        const match2 = scroll.query(_BlockBlot2.blotName);
        if (!(match2 != null && domNode.tagName === match2.tagName)) {
          if (typeof this.tagName == "string")
            return true;
          if (Array.isArray(this.tagName))
            return domNode.tagName.toLowerCase();
        }
      }
      constructor(scroll, domNode) {
        super(scroll, domNode), this.attributes = new AttributorStore$1(this.domNode);
      }
      format(name, value) {
        const format = this.scroll.query(name, Scope.BLOCK);
        format != null && (format instanceof Attributor ? this.attributes.attribute(format, value) : name === this.statics.blotName && !value ? this.replaceWith(_BlockBlot2.blotName) : value && (name !== this.statics.blotName || this.formats()[name] !== value) && this.replaceWith(name, value));
      }
      formats() {
        const formats = this.attributes.values(), format = this.statics.formats(this.domNode, this.scroll);
        return format != null && (formats[this.statics.blotName] = format), formats;
      }
      formatAt(index, length, name, value) {
        this.scroll.query(name, Scope.BLOCK) != null ? this.format(name, value) : super.formatAt(index, length, name, value);
      }
      insertAt(index, value, def) {
        if (def == null || this.scroll.query(value, Scope.INLINE) != null)
          super.insertAt(index, value, def);
        else {
          const after = this.split(index);
          if (after != null) {
            const blot = this.scroll.create(value, def);
            after.parent.insertBefore(blot, after);
          } else
            throw new Error("Attempt to insertAt after block boundaries");
        }
      }
      replaceWith(name, value) {
        const replacement = super.replaceWith(name, value);
        return this.attributes.copy(replacement), replacement;
      }
      update(mutations, context) {
        super.update(mutations, context), mutations.some(
          (mutation) => mutation.target === this.domNode && mutation.type === "attributes"
        ) && this.attributes.build();
      }
    };
    _BlockBlot.blotName = "block", _BlockBlot.scope = Scope.BLOCK_BLOT, _BlockBlot.tagName = "P", _BlockBlot.allowedChildren = [
      InlineBlot$1,
      _BlockBlot,
      LeafBlot$1
    ];
    BlockBlot = _BlockBlot;
    BlockBlot$1 = BlockBlot;
    _ContainerBlot = class _ContainerBlot2 extends ParentBlot$1 {
      checkMerge() {
        return this.next !== null && this.next.statics.blotName === this.statics.blotName;
      }
      deleteAt(index, length) {
        super.deleteAt(index, length), this.enforceAllowedChildren();
      }
      formatAt(index, length, name, value) {
        super.formatAt(index, length, name, value), this.enforceAllowedChildren();
      }
      insertAt(index, value, def) {
        super.insertAt(index, value, def), this.enforceAllowedChildren();
      }
      optimize(context) {
        super.optimize(context), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
      }
    };
    _ContainerBlot.blotName = "container", _ContainerBlot.scope = Scope.BLOCK_BLOT;
    ContainerBlot = _ContainerBlot;
    ContainerBlot$1 = ContainerBlot;
    EmbedBlot = class extends LeafBlot$1 {
      static formats(_domNode, _scroll) {
      }
      format(name, value) {
        super.formatAt(0, this.length(), name, value);
      }
      formatAt(index, length, name, value) {
        index === 0 && length === this.length() ? this.format(name, value) : super.formatAt(index, length, name, value);
      }
      formats() {
        return this.statics.formats(this.domNode, this.scroll);
      }
    };
    EmbedBlot$1 = EmbedBlot;
    OBSERVER_CONFIG = {
      attributes: true,
      characterData: true,
      characterDataOldValue: true,
      childList: true,
      subtree: true
    };
    MAX_OPTIMIZE_ITERATIONS = 100;
    _ScrollBlot = class _ScrollBlot2 extends ParentBlot$1 {
      constructor(registry, node) {
        super(null, node), this.registry = registry, this.scroll = this, this.build(), this.observer = new MutationObserver((mutations) => {
          this.update(mutations);
        }), this.observer.observe(this.domNode, OBSERVER_CONFIG), this.attach();
      }
      create(input, value) {
        return this.registry.create(this, input, value);
      }
      find(node, bubble = false) {
        const blot = this.registry.find(node, bubble);
        return blot ? blot.scroll === this ? blot : bubble ? this.find(blot.scroll.domNode.parentNode, true) : null : null;
      }
      query(query, scope = Scope.ANY) {
        return this.registry.query(query, scope);
      }
      register(...definitions) {
        return this.registry.register(...definitions);
      }
      build() {
        this.scroll != null && super.build();
      }
      detach() {
        super.detach(), this.observer.disconnect();
      }
      deleteAt(index, length) {
        this.update(), index === 0 && length === this.length() ? this.children.forEach((child) => {
          child.remove();
        }) : super.deleteAt(index, length);
      }
      formatAt(index, length, name, value) {
        this.update(), super.formatAt(index, length, name, value);
      }
      insertAt(index, value, def) {
        this.update(), super.insertAt(index, value, def);
      }
      optimize(mutations = [], context = {}) {
        super.optimize(context);
        const mutationsMap = context.mutationsMap || /* @__PURE__ */ new WeakMap();
        let records = Array.from(this.observer.takeRecords());
        for (; records.length > 0; )
          mutations.push(records.pop());
        const mark = (blot, markParent = true) => {
          blot == null || blot === this || blot.domNode.parentNode != null && (mutationsMap.has(blot.domNode) || mutationsMap.set(blot.domNode, []), markParent && mark(blot.parent));
        }, optimize = (blot) => {
          mutationsMap.has(blot.domNode) && (blot instanceof ParentBlot$1 && blot.children.forEach(optimize), mutationsMap.delete(blot.domNode), blot.optimize(context));
        };
        let remaining = mutations;
        for (let i = 0; remaining.length > 0; i += 1) {
          if (i >= MAX_OPTIMIZE_ITERATIONS)
            throw new Error("[Parchment] Maximum optimize iterations reached");
          for (remaining.forEach((mutation) => {
            const blot = this.find(mutation.target, true);
            blot != null && (blot.domNode === mutation.target && (mutation.type === "childList" ? (mark(this.find(mutation.previousSibling, false)), Array.from(mutation.addedNodes).forEach((node) => {
              const child = this.find(node, false);
              mark(child, false), child instanceof ParentBlot$1 && child.children.forEach((grandChild) => {
                mark(grandChild, false);
              });
            })) : mutation.type === "attributes" && mark(blot.prev)), mark(blot));
          }), this.children.forEach(optimize), remaining = Array.from(this.observer.takeRecords()), records = remaining.slice(); records.length > 0; )
            mutations.push(records.pop());
        }
      }
      update(mutations, context = {}) {
        mutations = mutations || this.observer.takeRecords();
        const mutationsMap = /* @__PURE__ */ new WeakMap();
        mutations.map((mutation) => {
          const blot = this.find(mutation.target, true);
          return blot == null ? null : mutationsMap.has(blot.domNode) ? (mutationsMap.get(blot.domNode).push(mutation), null) : (mutationsMap.set(blot.domNode, [mutation]), blot);
        }).forEach((blot) => {
          blot != null && blot !== this && mutationsMap.has(blot.domNode) && blot.update(mutationsMap.get(blot.domNode) || [], context);
        }), context.mutationsMap = mutationsMap, mutationsMap.has(this.domNode) && super.update(mutationsMap.get(this.domNode), context), this.optimize(mutations, context);
      }
    };
    _ScrollBlot.blotName = "scroll", _ScrollBlot.defaultChild = BlockBlot$1, _ScrollBlot.allowedChildren = [BlockBlot$1, ContainerBlot$1], _ScrollBlot.scope = Scope.BLOCK_BLOT, _ScrollBlot.tagName = "DIV";
    ScrollBlot = _ScrollBlot;
    ScrollBlot$1 = ScrollBlot;
    _TextBlot = class _TextBlot2 extends LeafBlot$1 {
      static create(value) {
        return document.createTextNode(value);
      }
      static value(domNode) {
        return domNode.data;
      }
      constructor(scroll, node) {
        super(scroll, node), this.text = this.statics.value(this.domNode);
      }
      deleteAt(index, length) {
        this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
      }
      index(node, offset) {
        return this.domNode === node ? offset : -1;
      }
      insertAt(index, value, def) {
        def == null ? (this.text = this.text.slice(0, index) + value + this.text.slice(index), this.domNode.data = this.text) : super.insertAt(index, value, def);
      }
      length() {
        return this.text.length;
      }
      optimize(context) {
        super.optimize(context), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof _TextBlot2 && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
      }
      position(index, _inclusive = false) {
        return [this.domNode, index];
      }
      split(index, force = false) {
        if (!force) {
          if (index === 0)
            return this;
          if (index === this.length())
            return this.next;
        }
        const after = this.scroll.create(this.domNode.splitText(index));
        return this.parent.insertBefore(after, this.next || void 0), this.text = this.statics.value(this.domNode), after;
      }
      update(mutations, _context) {
        mutations.some((mutation) => mutation.type === "characterData" && mutation.target === this.domNode) && (this.text = this.statics.value(this.domNode));
      }
      value() {
        return this.text;
      }
    };
    _TextBlot.blotName = "text", _TextBlot.scope = Scope.INLINE_BLOT;
    TextBlot = _TextBlot;
    TextBlot$1 = TextBlot;
  }
});

// node_modules/fast-diff/diff.js
var require_diff = __commonJS({
  "node_modules/fast-diff/diff.js"(exports2, module2) {
    var DIFF_DELETE = -1;
    var DIFF_INSERT = 1;
    var DIFF_EQUAL = 0;
    function diff_main(text1, text2, cursor_pos, cleanup, _fix_unicode) {
      if (text1 === text2) {
        if (text1) {
          return [[DIFF_EQUAL, text1]];
        }
        return [];
      }
      if (cursor_pos != null) {
        var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);
        if (editdiff) {
          return editdiff;
        }
      }
      var commonlength = diff_commonPrefix(text1, text2);
      var commonprefix = text1.substring(0, commonlength);
      text1 = text1.substring(commonlength);
      text2 = text2.substring(commonlength);
      commonlength = diff_commonSuffix(text1, text2);
      var commonsuffix = text1.substring(text1.length - commonlength);
      text1 = text1.substring(0, text1.length - commonlength);
      text2 = text2.substring(0, text2.length - commonlength);
      var diffs = diff_compute_(text1, text2);
      if (commonprefix) {
        diffs.unshift([DIFF_EQUAL, commonprefix]);
      }
      if (commonsuffix) {
        diffs.push([DIFF_EQUAL, commonsuffix]);
      }
      diff_cleanupMerge(diffs, _fix_unicode);
      if (cleanup) {
        diff_cleanupSemantic(diffs);
      }
      return diffs;
    }
    function diff_compute_(text1, text2) {
      var diffs;
      if (!text1) {
        return [[DIFF_INSERT, text2]];
      }
      if (!text2) {
        return [[DIFF_DELETE, text1]];
      }
      var longtext = text1.length > text2.length ? text1 : text2;
      var shorttext = text1.length > text2.length ? text2 : text1;
      var i = longtext.indexOf(shorttext);
      if (i !== -1) {
        diffs = [
          [DIFF_INSERT, longtext.substring(0, i)],
          [DIFF_EQUAL, shorttext],
          [DIFF_INSERT, longtext.substring(i + shorttext.length)]
        ];
        if (text1.length > text2.length) {
          diffs[0][0] = diffs[2][0] = DIFF_DELETE;
        }
        return diffs;
      }
      if (shorttext.length === 1) {
        return [
          [DIFF_DELETE, text1],
          [DIFF_INSERT, text2]
        ];
      }
      var hm = diff_halfMatch_(text1, text2);
      if (hm) {
        var text1_a = hm[0];
        var text1_b = hm[1];
        var text2_a = hm[2];
        var text2_b = hm[3];
        var mid_common = hm[4];
        var diffs_a = diff_main(text1_a, text2_a);
        var diffs_b = diff_main(text1_b, text2_b);
        return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
      }
      return diff_bisect_(text1, text2);
    }
    function diff_bisect_(text1, text2) {
      var text1_length = text1.length;
      var text2_length = text2.length;
      var max_d = Math.ceil((text1_length + text2_length) / 2);
      var v_offset = max_d;
      var v_length = 2 * max_d;
      var v1 = new Array(v_length);
      var v2 = new Array(v_length);
      for (var x = 0; x < v_length; x++) {
        v1[x] = -1;
        v2[x] = -1;
      }
      v1[v_offset + 1] = 0;
      v2[v_offset + 1] = 0;
      var delta = text1_length - text2_length;
      var front = delta % 2 !== 0;
      var k1start = 0;
      var k1end = 0;
      var k2start = 0;
      var k2end = 0;
      for (var d = 0; d < max_d; d++) {
        for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
          var k1_offset = v_offset + k1;
          var x1;
          if (k1 === -d || k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
            x1 = v1[k1_offset + 1];
          } else {
            x1 = v1[k1_offset - 1] + 1;
          }
          var y1 = x1 - k1;
          while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) === text2.charAt(y1)) {
            x1++;
            y1++;
          }
          v1[k1_offset] = x1;
          if (x1 > text1_length) {
            k1end += 2;
          } else if (y1 > text2_length) {
            k1start += 2;
          } else if (front) {
            var k2_offset = v_offset + delta - k1;
            if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {
              var x2 = text1_length - v2[k2_offset];
              if (x1 >= x2) {
                return diff_bisectSplit_(text1, text2, x1, y1);
              }
            }
          }
        }
        for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
          var k2_offset = v_offset + k2;
          var x2;
          if (k2 === -d || k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
            x2 = v2[k2_offset + 1];
          } else {
            x2 = v2[k2_offset - 1] + 1;
          }
          var y2 = x2 - k2;
          while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)) {
            x2++;
            y2++;
          }
          v2[k2_offset] = x2;
          if (x2 > text1_length) {
            k2end += 2;
          } else if (y2 > text2_length) {
            k2start += 2;
          } else if (!front) {
            var k1_offset = v_offset + delta - k2;
            if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {
              var x1 = v1[k1_offset];
              var y1 = v_offset + x1 - k1_offset;
              x2 = text1_length - x2;
              if (x1 >= x2) {
                return diff_bisectSplit_(text1, text2, x1, y1);
              }
            }
          }
        }
      }
      return [
        [DIFF_DELETE, text1],
        [DIFF_INSERT, text2]
      ];
    }
    function diff_bisectSplit_(text1, text2, x, y) {
      var text1a = text1.substring(0, x);
      var text2a = text2.substring(0, y);
      var text1b = text1.substring(x);
      var text2b = text2.substring(y);
      var diffs = diff_main(text1a, text2a);
      var diffsb = diff_main(text1b, text2b);
      return diffs.concat(diffsb);
    }
    function diff_commonPrefix(text1, text2) {
      if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
        return 0;
      }
      var pointermin = 0;
      var pointermax = Math.min(text1.length, text2.length);
      var pointermid = pointermax;
      var pointerstart = 0;
      while (pointermin < pointermid) {
        if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
          pointermin = pointermid;
          pointerstart = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {
        pointermid--;
      }
      return pointermid;
    }
    function diff_commonOverlap_(text1, text2) {
      var text1_length = text1.length;
      var text2_length = text2.length;
      if (text1_length == 0 || text2_length == 0) {
        return 0;
      }
      if (text1_length > text2_length) {
        text1 = text1.substring(text1_length - text2_length);
      } else if (text1_length < text2_length) {
        text2 = text2.substring(0, text1_length);
      }
      var text_length = Math.min(text1_length, text2_length);
      if (text1 == text2) {
        return text_length;
      }
      var best = 0;
      var length = 1;
      while (true) {
        var pattern = text1.substring(text_length - length);
        var found = text2.indexOf(pattern);
        if (found == -1) {
          return best;
        }
        length += found;
        if (found == 0 || text1.substring(text_length - length) == text2.substring(0, length)) {
          best = length;
          length++;
        }
      }
    }
    function diff_commonSuffix(text1, text2) {
      if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {
        return 0;
      }
      var pointermin = 0;
      var pointermax = Math.min(text1.length, text2.length);
      var pointermid = pointermax;
      var pointerend = 0;
      while (pointermin < pointermid) {
        if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
          pointermin = pointermid;
          pointerend = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {
        pointermid--;
      }
      return pointermid;
    }
    function diff_halfMatch_(text1, text2) {
      var longtext = text1.length > text2.length ? text1 : text2;
      var shorttext = text1.length > text2.length ? text2 : text1;
      if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
        return null;
      }
      function diff_halfMatchI_(longtext2, shorttext2, i) {
        var seed = longtext2.substring(i, i + Math.floor(longtext2.length / 4));
        var j = -1;
        var best_common = "";
        var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
        while ((j = shorttext2.indexOf(seed, j + 1)) !== -1) {
          var prefixLength = diff_commonPrefix(
            longtext2.substring(i),
            shorttext2.substring(j)
          );
          var suffixLength = diff_commonSuffix(
            longtext2.substring(0, i),
            shorttext2.substring(0, j)
          );
          if (best_common.length < suffixLength + prefixLength) {
            best_common = shorttext2.substring(j - suffixLength, j) + shorttext2.substring(j, j + prefixLength);
            best_longtext_a = longtext2.substring(0, i - suffixLength);
            best_longtext_b = longtext2.substring(i + prefixLength);
            best_shorttext_a = shorttext2.substring(0, j - suffixLength);
            best_shorttext_b = shorttext2.substring(j + prefixLength);
          }
        }
        if (best_common.length * 2 >= longtext2.length) {
          return [
            best_longtext_a,
            best_longtext_b,
            best_shorttext_a,
            best_shorttext_b,
            best_common
          ];
        } else {
          return null;
        }
      }
      var hm1 = diff_halfMatchI_(
        longtext,
        shorttext,
        Math.ceil(longtext.length / 4)
      );
      var hm2 = diff_halfMatchI_(
        longtext,
        shorttext,
        Math.ceil(longtext.length / 2)
      );
      var hm;
      if (!hm1 && !hm2) {
        return null;
      } else if (!hm2) {
        hm = hm1;
      } else if (!hm1) {
        hm = hm2;
      } else {
        hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
      }
      var text1_a, text1_b, text2_a, text2_b;
      if (text1.length > text2.length) {
        text1_a = hm[0];
        text1_b = hm[1];
        text2_a = hm[2];
        text2_b = hm[3];
      } else {
        text2_a = hm[0];
        text2_b = hm[1];
        text1_a = hm[2];
        text1_b = hm[3];
      }
      var mid_common = hm[4];
      return [text1_a, text1_b, text2_a, text2_b, mid_common];
    }
    function diff_cleanupSemantic(diffs) {
      var changes = false;
      var equalities = [];
      var equalitiesLength = 0;
      var lastequality = null;
      var pointer = 0;
      var length_insertions1 = 0;
      var length_deletions1 = 0;
      var length_insertions2 = 0;
      var length_deletions2 = 0;
      while (pointer < diffs.length) {
        if (diffs[pointer][0] == DIFF_EQUAL) {
          equalities[equalitiesLength++] = pointer;
          length_insertions1 = length_insertions2;
          length_deletions1 = length_deletions2;
          length_insertions2 = 0;
          length_deletions2 = 0;
          lastequality = diffs[pointer][1];
        } else {
          if (diffs[pointer][0] == DIFF_INSERT) {
            length_insertions2 += diffs[pointer][1].length;
          } else {
            length_deletions2 += diffs[pointer][1].length;
          }
          if (lastequality && lastequality.length <= Math.max(length_insertions1, length_deletions1) && lastequality.length <= Math.max(length_insertions2, length_deletions2)) {
            diffs.splice(equalities[equalitiesLength - 1], 0, [
              DIFF_DELETE,
              lastequality
            ]);
            diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
            equalitiesLength--;
            equalitiesLength--;
            pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
            length_insertions1 = 0;
            length_deletions1 = 0;
            length_insertions2 = 0;
            length_deletions2 = 0;
            lastequality = null;
            changes = true;
          }
        }
        pointer++;
      }
      if (changes) {
        diff_cleanupMerge(diffs);
      }
      diff_cleanupSemanticLossless(diffs);
      pointer = 1;
      while (pointer < diffs.length) {
        if (diffs[pointer - 1][0] == DIFF_DELETE && diffs[pointer][0] == DIFF_INSERT) {
          var deletion = diffs[pointer - 1][1];
          var insertion = diffs[pointer][1];
          var overlap_length1 = diff_commonOverlap_(deletion, insertion);
          var overlap_length2 = diff_commonOverlap_(insertion, deletion);
          if (overlap_length1 >= overlap_length2) {
            if (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) {
              diffs.splice(pointer, 0, [
                DIFF_EQUAL,
                insertion.substring(0, overlap_length1)
              ]);
              diffs[pointer - 1][1] = deletion.substring(
                0,
                deletion.length - overlap_length1
              );
              diffs[pointer + 1][1] = insertion.substring(overlap_length1);
              pointer++;
            }
          } else {
            if (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) {
              diffs.splice(pointer, 0, [
                DIFF_EQUAL,
                deletion.substring(0, overlap_length2)
              ]);
              diffs[pointer - 1][0] = DIFF_INSERT;
              diffs[pointer - 1][1] = insertion.substring(
                0,
                insertion.length - overlap_length2
              );
              diffs[pointer + 1][0] = DIFF_DELETE;
              diffs[pointer + 1][1] = deletion.substring(overlap_length2);
              pointer++;
            }
          }
          pointer++;
        }
        pointer++;
      }
    }
    var nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
    var whitespaceRegex_ = /\s/;
    var linebreakRegex_ = /[\r\n]/;
    var blanklineEndRegex_ = /\n\r?\n$/;
    var blanklineStartRegex_ = /^\r?\n\r?\n/;
    function diff_cleanupSemanticLossless(diffs) {
      function diff_cleanupSemanticScore_(one, two) {
        if (!one || !two) {
          return 6;
        }
        var char1 = one.charAt(one.length - 1);
        var char2 = two.charAt(0);
        var nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex_);
        var nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex_);
        var whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex_);
        var whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex_);
        var lineBreak1 = whitespace1 && char1.match(linebreakRegex_);
        var lineBreak2 = whitespace2 && char2.match(linebreakRegex_);
        var blankLine1 = lineBreak1 && one.match(blanklineEndRegex_);
        var blankLine2 = lineBreak2 && two.match(blanklineStartRegex_);
        if (blankLine1 || blankLine2) {
          return 5;
        } else if (lineBreak1 || lineBreak2) {
          return 4;
        } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
          return 3;
        } else if (whitespace1 || whitespace2) {
          return 2;
        } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
          return 1;
        }
        return 0;
      }
      var pointer = 1;
      while (pointer < diffs.length - 1) {
        if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
          var equality1 = diffs[pointer - 1][1];
          var edit = diffs[pointer][1];
          var equality2 = diffs[pointer + 1][1];
          var commonOffset = diff_commonSuffix(equality1, edit);
          if (commonOffset) {
            var commonString = edit.substring(edit.length - commonOffset);
            equality1 = equality1.substring(0, equality1.length - commonOffset);
            edit = commonString + edit.substring(0, edit.length - commonOffset);
            equality2 = commonString + equality2;
          }
          var bestEquality1 = equality1;
          var bestEdit = edit;
          var bestEquality2 = equality2;
          var bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
          while (edit.charAt(0) === equality2.charAt(0)) {
            equality1 += edit.charAt(0);
            edit = edit.substring(1) + equality2.charAt(0);
            equality2 = equality2.substring(1);
            var score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
            if (score >= bestScore) {
              bestScore = score;
              bestEquality1 = equality1;
              bestEdit = edit;
              bestEquality2 = equality2;
            }
          }
          if (diffs[pointer - 1][1] != bestEquality1) {
            if (bestEquality1) {
              diffs[pointer - 1][1] = bestEquality1;
            } else {
              diffs.splice(pointer - 1, 1);
              pointer--;
            }
            diffs[pointer][1] = bestEdit;
            if (bestEquality2) {
              diffs[pointer + 1][1] = bestEquality2;
            } else {
              diffs.splice(pointer + 1, 1);
              pointer--;
            }
          }
        }
        pointer++;
      }
    }
    function diff_cleanupMerge(diffs, fix_unicode) {
      diffs.push([DIFF_EQUAL, ""]);
      var pointer = 0;
      var count_delete = 0;
      var count_insert = 0;
      var text_delete = "";
      var text_insert = "";
      var commonlength;
      while (pointer < diffs.length) {
        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
          diffs.splice(pointer, 1);
          continue;
        }
        switch (diffs[pointer][0]) {
          case DIFF_INSERT:
            count_insert++;
            text_insert += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_DELETE:
            count_delete++;
            text_delete += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_EQUAL:
            var previous_equality = pointer - count_insert - count_delete - 1;
            if (fix_unicode) {
              if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {
                var stray = diffs[previous_equality][1].slice(-1);
                diffs[previous_equality][1] = diffs[previous_equality][1].slice(
                  0,
                  -1
                );
                text_delete = stray + text_delete;
                text_insert = stray + text_insert;
                if (!diffs[previous_equality][1]) {
                  diffs.splice(previous_equality, 1);
                  pointer--;
                  var k = previous_equality - 1;
                  if (diffs[k] && diffs[k][0] === DIFF_INSERT) {
                    count_insert++;
                    text_insert = diffs[k][1] + text_insert;
                    k--;
                  }
                  if (diffs[k] && diffs[k][0] === DIFF_DELETE) {
                    count_delete++;
                    text_delete = diffs[k][1] + text_delete;
                    k--;
                  }
                  previous_equality = k;
                }
              }
              if (starts_with_pair_end(diffs[pointer][1])) {
                var stray = diffs[pointer][1].charAt(0);
                diffs[pointer][1] = diffs[pointer][1].slice(1);
                text_delete += stray;
                text_insert += stray;
              }
            }
            if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
              diffs.splice(pointer, 1);
              break;
            }
            if (text_delete.length > 0 || text_insert.length > 0) {
              if (text_delete.length > 0 && text_insert.length > 0) {
                commonlength = diff_commonPrefix(text_insert, text_delete);
                if (commonlength !== 0) {
                  if (previous_equality >= 0) {
                    diffs[previous_equality][1] += text_insert.substring(
                      0,
                      commonlength
                    );
                  } else {
                    diffs.splice(0, 0, [
                      DIFF_EQUAL,
                      text_insert.substring(0, commonlength)
                    ]);
                    pointer++;
                  }
                  text_insert = text_insert.substring(commonlength);
                  text_delete = text_delete.substring(commonlength);
                }
                commonlength = diff_commonSuffix(text_insert, text_delete);
                if (commonlength !== 0) {
                  diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                  text_insert = text_insert.substring(
                    0,
                    text_insert.length - commonlength
                  );
                  text_delete = text_delete.substring(
                    0,
                    text_delete.length - commonlength
                  );
                }
              }
              var n = count_insert + count_delete;
              if (text_delete.length === 0 && text_insert.length === 0) {
                diffs.splice(pointer - n, n);
                pointer = pointer - n;
              } else if (text_delete.length === 0) {
                diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);
                pointer = pointer - n + 1;
              } else if (text_insert.length === 0) {
                diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);
                pointer = pointer - n + 1;
              } else {
                diffs.splice(
                  pointer - n,
                  n,
                  [DIFF_DELETE, text_delete],
                  [DIFF_INSERT, text_insert]
                );
                pointer = pointer - n + 2;
              }
            }
            if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
              diffs[pointer - 1][1] += diffs[pointer][1];
              diffs.splice(pointer, 1);
            } else {
              pointer++;
            }
            count_insert = 0;
            count_delete = 0;
            text_delete = "";
            text_insert = "";
            break;
        }
      }
      if (diffs[diffs.length - 1][1] === "") {
        diffs.pop();
      }
      var changes = false;
      pointer = 1;
      while (pointer < diffs.length - 1) {
        if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
          if (diffs[pointer][1].substring(
            diffs[pointer][1].length - diffs[pointer - 1][1].length
          ) === diffs[pointer - 1][1]) {
            diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(
              0,
              diffs[pointer][1].length - diffs[pointer - 1][1].length
            );
            diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
            diffs.splice(pointer - 1, 1);
            changes = true;
          } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
            diffs[pointer - 1][1] += diffs[pointer + 1][1];
            diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
            diffs.splice(pointer + 1, 1);
            changes = true;
          }
        }
        pointer++;
      }
      if (changes) {
        diff_cleanupMerge(diffs, fix_unicode);
      }
    }
    function is_surrogate_pair_start(charCode) {
      return charCode >= 55296 && charCode <= 56319;
    }
    function is_surrogate_pair_end(charCode) {
      return charCode >= 56320 && charCode <= 57343;
    }
    function starts_with_pair_end(str) {
      return is_surrogate_pair_end(str.charCodeAt(0));
    }
    function ends_with_pair_start(str) {
      return is_surrogate_pair_start(str.charCodeAt(str.length - 1));
    }
    function remove_empty_tuples(tuples) {
      var ret = [];
      for (var i = 0; i < tuples.length; i++) {
        if (tuples[i][1].length > 0) {
          ret.push(tuples[i]);
        }
      }
      return ret;
    }
    function make_edit_splice(before, oldMiddle, newMiddle, after) {
      if (ends_with_pair_start(before) || starts_with_pair_end(after)) {
        return null;
      }
      return remove_empty_tuples([
        [DIFF_EQUAL, before],
        [DIFF_DELETE, oldMiddle],
        [DIFF_INSERT, newMiddle],
        [DIFF_EQUAL, after]
      ]);
    }
    function find_cursor_edit_diff(oldText, newText, cursor_pos) {
      var oldRange = typeof cursor_pos === "number" ? { index: cursor_pos, length: 0 } : cursor_pos.oldRange;
      var newRange = typeof cursor_pos === "number" ? null : cursor_pos.newRange;
      var oldLength = oldText.length;
      var newLength = newText.length;
      if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {
        var oldCursor = oldRange.index;
        var oldBefore = oldText.slice(0, oldCursor);
        var oldAfter = oldText.slice(oldCursor);
        var maybeNewCursor = newRange ? newRange.index : null;
        editBefore: {
          var newCursor = oldCursor + newLength - oldLength;
          if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {
            break editBefore;
          }
          if (newCursor < 0 || newCursor > newLength) {
            break editBefore;
          }
          var newBefore = newText.slice(0, newCursor);
          var newAfter = newText.slice(newCursor);
          if (newAfter !== oldAfter) {
            break editBefore;
          }
          var prefixLength = Math.min(oldCursor, newCursor);
          var oldPrefix = oldBefore.slice(0, prefixLength);
          var newPrefix = newBefore.slice(0, prefixLength);
          if (oldPrefix !== newPrefix) {
            break editBefore;
          }
          var oldMiddle = oldBefore.slice(prefixLength);
          var newMiddle = newBefore.slice(prefixLength);
          return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);
        }
        editAfter: {
          if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {
            break editAfter;
          }
          var cursor = oldCursor;
          var newBefore = newText.slice(0, cursor);
          var newAfter = newText.slice(cursor);
          if (newBefore !== oldBefore) {
            break editAfter;
          }
          var suffixLength = Math.min(oldLength - cursor, newLength - cursor);
          var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);
          var newSuffix = newAfter.slice(newAfter.length - suffixLength);
          if (oldSuffix !== newSuffix) {
            break editAfter;
          }
          var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);
          var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);
          return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);
        }
      }
      if (oldRange.length > 0 && newRange && newRange.length === 0) {
        replaceRange: {
          var oldPrefix = oldText.slice(0, oldRange.index);
          var oldSuffix = oldText.slice(oldRange.index + oldRange.length);
          var prefixLength = oldPrefix.length;
          var suffixLength = oldSuffix.length;
          if (newLength < prefixLength + suffixLength) {
            break replaceRange;
          }
          var newPrefix = newText.slice(0, prefixLength);
          var newSuffix = newText.slice(newLength - suffixLength);
          if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {
            break replaceRange;
          }
          var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);
          var newMiddle = newText.slice(prefixLength, newLength - suffixLength);
          return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);
        }
      }
      return null;
    }
    function diff(text1, text2, cursor_pos, cleanup) {
      return diff_main(text1, text2, cursor_pos, cleanup, true);
    }
    diff.INSERT = DIFF_INSERT;
    diff.DELETE = DIFF_DELETE;
    diff.EQUAL = DIFF_EQUAL;
    module2.exports = diff;
  }
});

// node_modules/lodash.clonedeep/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.clonedeep/index.js"(exports2, module2) {
    var LARGE_ARRAY_SIZE2 = 200;
    var HASH_UNDEFINED4 = "__lodash_hash_undefined__";
    var MAX_SAFE_INTEGER3 = 9007199254740991;
    var argsTag5 = "[object Arguments]";
    var arrayTag4 = "[object Array]";
    var boolTag5 = "[object Boolean]";
    var dateTag5 = "[object Date]";
    var errorTag4 = "[object Error]";
    var funcTag4 = "[object Function]";
    var genTag3 = "[object GeneratorFunction]";
    var mapTag7 = "[object Map]";
    var numberTag5 = "[object Number]";
    var objectTag6 = "[object Object]";
    var promiseTag2 = "[object Promise]";
    var regexpTag5 = "[object RegExp]";
    var setTag7 = "[object Set]";
    var stringTag5 = "[object String]";
    var symbolTag4 = "[object Symbol]";
    var weakMapTag4 = "[object WeakMap]";
    var arrayBufferTag5 = "[object ArrayBuffer]";
    var dataViewTag6 = "[object DataView]";
    var float32Tag4 = "[object Float32Array]";
    var float64Tag4 = "[object Float64Array]";
    var int8Tag4 = "[object Int8Array]";
    var int16Tag4 = "[object Int16Array]";
    var int32Tag4 = "[object Int32Array]";
    var uint8Tag4 = "[object Uint8Array]";
    var uint8ClampedTag4 = "[object Uint8ClampedArray]";
    var uint16Tag4 = "[object Uint16Array]";
    var uint32Tag4 = "[object Uint32Array]";
    var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
    var reFlags2 = /\w*$/;
    var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
    var reIsUint2 = /^(?:0|[1-9]\d*)$/;
    var cloneableTags2 = {};
    cloneableTags2[argsTag5] = cloneableTags2[arrayTag4] = cloneableTags2[arrayBufferTag5] = cloneableTags2[dataViewTag6] = cloneableTags2[boolTag5] = cloneableTags2[dateTag5] = cloneableTags2[float32Tag4] = cloneableTags2[float64Tag4] = cloneableTags2[int8Tag4] = cloneableTags2[int16Tag4] = cloneableTags2[int32Tag4] = cloneableTags2[mapTag7] = cloneableTags2[numberTag5] = cloneableTags2[objectTag6] = cloneableTags2[regexpTag5] = cloneableTags2[setTag7] = cloneableTags2[stringTag5] = cloneableTags2[symbolTag4] = cloneableTags2[uint8Tag4] = cloneableTags2[uint8ClampedTag4] = cloneableTags2[uint16Tag4] = cloneableTags2[uint32Tag4] = true;
    cloneableTags2[errorTag4] = cloneableTags2[funcTag4] = cloneableTags2[weakMapTag4] = false;
    var freeGlobal2 = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
    var freeExports4 = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
    var freeModule4 = freeExports4 && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports4 = freeModule4 && freeModule4.exports === freeExports4;
    function addMapEntry(map, pair) {
      map.set(pair[0], pair[1]);
      return map;
    }
    function addSetEntry(set, value) {
      set.add(value);
      return set;
    }
    function arrayEach2(array, iteratee) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayPush2(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array ? array.length : 0;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function baseTimes2(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function getValue2(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function mapToArray2(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg2(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray2(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto2 = Array.prototype;
    var funcProto4 = Function.prototype;
    var objectProto17 = Object.prototype;
    var coreJsData2 = root2["__core-js_shared__"];
    var maskSrcKey2 = function() {
      var uid = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString4 = funcProto4.toString;
    var hasOwnProperty14 = objectProto17.hasOwnProperty;
    var objectToString2 = objectProto17.toString;
    var reIsNative2 = RegExp(
      "^" + funcToString4.call(hasOwnProperty14).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer4 = moduleExports4 ? root2.Buffer : void 0;
    var Symbol3 = root2.Symbol;
    var Uint8Array3 = root2.Uint8Array;
    var getPrototype2 = overArg2(Object.getPrototypeOf, Object);
    var objectCreate2 = Object.create;
    var propertyIsEnumerable3 = objectProto17.propertyIsEnumerable;
    var splice2 = arrayProto2.splice;
    var nativeGetSymbols3 = Object.getOwnPropertySymbols;
    var nativeIsBuffer2 = Buffer4 ? Buffer4.isBuffer : void 0;
    var nativeKeys2 = overArg2(Object.keys, Object);
    var DataView2 = getNative2(root2, "DataView");
    var Map3 = getNative2(root2, "Map");
    var Promise3 = getNative2(root2, "Promise");
    var Set3 = getNative2(root2, "Set");
    var WeakMap3 = getNative2(root2, "WeakMap");
    var nativeCreate2 = getNative2(Object, "create");
    var dataViewCtorString2 = toSource2(DataView2);
    var mapCtorString2 = toSource2(Map3);
    var promiseCtorString2 = toSource2(Promise3);
    var setCtorString2 = toSource2(Set3);
    var weakMapCtorString2 = toSource2(WeakMap3);
    var symbolProto3 = Symbol3 ? Symbol3.prototype : void 0;
    var symbolValueOf3 = symbolProto3 ? symbolProto3.valueOf : void 0;
    function Hash2(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear2() {
      this.__data__ = nativeCreate2 ? nativeCreate2(null) : {};
    }
    function hashDelete2(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet2(key) {
      var data2 = this.__data__;
      if (nativeCreate2) {
        var result = data2[key];
        return result === HASH_UNDEFINED4 ? void 0 : result;
      }
      return hasOwnProperty14.call(data2, key) ? data2[key] : void 0;
    }
    function hashHas2(key) {
      var data2 = this.__data__;
      return nativeCreate2 ? data2[key] !== void 0 : hasOwnProperty14.call(data2, key);
    }
    function hashSet2(key, value) {
      var data2 = this.__data__;
      data2[key] = nativeCreate2 && value === void 0 ? HASH_UNDEFINED4 : value;
      return this;
    }
    Hash2.prototype.clear = hashClear2;
    Hash2.prototype["delete"] = hashDelete2;
    Hash2.prototype.get = hashGet2;
    Hash2.prototype.has = hashHas2;
    Hash2.prototype.set = hashSet2;
    function ListCache2(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear2() {
      this.__data__ = [];
    }
    function listCacheDelete2(key) {
      var data2 = this.__data__, index = assocIndexOf2(data2, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data2.length - 1;
      if (index == lastIndex) {
        data2.pop();
      } else {
        splice2.call(data2, index, 1);
      }
      return true;
    }
    function listCacheGet2(key) {
      var data2 = this.__data__, index = assocIndexOf2(data2, key);
      return index < 0 ? void 0 : data2[index][1];
    }
    function listCacheHas2(key) {
      return assocIndexOf2(this.__data__, key) > -1;
    }
    function listCacheSet2(key, value) {
      var data2 = this.__data__, index = assocIndexOf2(data2, key);
      if (index < 0) {
        data2.push([key, value]);
      } else {
        data2[index][1] = value;
      }
      return this;
    }
    ListCache2.prototype.clear = listCacheClear2;
    ListCache2.prototype["delete"] = listCacheDelete2;
    ListCache2.prototype.get = listCacheGet2;
    ListCache2.prototype.has = listCacheHas2;
    ListCache2.prototype.set = listCacheSet2;
    function MapCache2(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear2() {
      this.__data__ = {
        "hash": new Hash2(),
        "map": new (Map3 || ListCache2)(),
        "string": new Hash2()
      };
    }
    function mapCacheDelete2(key) {
      return getMapData2(this, key)["delete"](key);
    }
    function mapCacheGet2(key) {
      return getMapData2(this, key).get(key);
    }
    function mapCacheHas2(key) {
      return getMapData2(this, key).has(key);
    }
    function mapCacheSet2(key, value) {
      getMapData2(this, key).set(key, value);
      return this;
    }
    MapCache2.prototype.clear = mapCacheClear2;
    MapCache2.prototype["delete"] = mapCacheDelete2;
    MapCache2.prototype.get = mapCacheGet2;
    MapCache2.prototype.has = mapCacheHas2;
    MapCache2.prototype.set = mapCacheSet2;
    function Stack2(entries) {
      this.__data__ = new ListCache2(entries);
    }
    function stackClear2() {
      this.__data__ = new ListCache2();
    }
    function stackDelete2(key) {
      return this.__data__["delete"](key);
    }
    function stackGet2(key) {
      return this.__data__.get(key);
    }
    function stackHas2(key) {
      return this.__data__.has(key);
    }
    function stackSet2(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache2) {
        var pairs = cache.__data__;
        if (!Map3 || pairs.length < LARGE_ARRAY_SIZE2 - 1) {
          pairs.push([key, value]);
          return this;
        }
        cache = this.__data__ = new MapCache2(pairs);
      }
      cache.set(key, value);
      return this;
    }
    Stack2.prototype.clear = stackClear2;
    Stack2.prototype["delete"] = stackDelete2;
    Stack2.prototype.get = stackGet2;
    Stack2.prototype.has = stackHas2;
    Stack2.prototype.set = stackSet2;
    function arrayLikeKeys2(value, inherited) {
      var result = isArray2(value) || isArguments2(value) ? baseTimes2(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if ((inherited || hasOwnProperty14.call(value, key)) && !(skipIndexes && (key == "length" || isIndex2(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignValue2(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty14.call(object, key) && eq2(objValue, value)) || value === void 0 && !(key in object)) {
        object[key] = value;
      }
    }
    function assocIndexOf2(array, key) {
      var length = array.length;
      while (length--) {
        if (eq2(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssign2(object, source) {
      return object && copyObject2(source, keys2(source), object);
    }
    function baseClone2(value, isDeep, isFull, customizer, key, object, stack) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject2(value)) {
        return value;
      }
      var isArr = isArray2(value);
      if (isArr) {
        result = initCloneArray2(value);
        if (!isDeep) {
          return copyArray2(value, result);
        }
      } else {
        var tag = getTag2(value), isFunc = tag == funcTag4 || tag == genTag3;
        if (isBuffer2(value)) {
          return cloneBuffer2(value, isDeep);
        }
        if (tag == objectTag6 || tag == argsTag5 || isFunc && !object) {
          if (isHostObject(value)) {
            return object ? value : {};
          }
          result = initCloneObject2(isFunc ? {} : value);
          if (!isDeep) {
            return copySymbols2(value, baseAssign2(result, value));
          }
        } else {
          if (!cloneableTags2[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag2(value, tag, baseClone2, isDeep);
        }
      }
      stack || (stack = new Stack2());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (!isArr) {
        var props = isFull ? getAllKeys2(value) : keys2(value);
      }
      arrayEach2(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue2(result, key2, baseClone2(subValue, isDeep, isFull, customizer, key2, value, stack));
      });
      return result;
    }
    function baseCreate2(proto) {
      return isObject2(proto) ? objectCreate2(proto) : {};
    }
    function baseGetAllKeys2(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray2(object) ? result : arrayPush2(result, symbolsFunc(object));
    }
    function baseGetTag2(value) {
      return objectToString2.call(value);
    }
    function baseIsNative2(value) {
      if (!isObject2(value) || isMasked2(value)) {
        return false;
      }
      var pattern = isFunction2(value) || isHostObject(value) ? reIsNative2 : reIsHostCtor2;
      return pattern.test(toSource2(value));
    }
    function baseKeys2(object) {
      if (!isPrototype2(object)) {
        return nativeKeys2(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty14.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function cloneBuffer2(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var result = new buffer.constructor(buffer.length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer2(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array3(result).set(new Uint8Array3(arrayBuffer));
      return result;
    }
    function cloneDataView2(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer2(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray2(map), true) : mapToArray2(map);
      return arrayReduce(array, addMapEntry, new map.constructor());
    }
    function cloneRegExp2(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags2.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray2(set), true) : setToArray2(set);
      return arrayReduce(array, addSetEntry, new set.constructor());
    }
    function cloneSymbol2(symbol) {
      return symbolValueOf3 ? Object(symbolValueOf3.call(symbol)) : {};
    }
    function cloneTypedArray2(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer2(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray2(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject2(source, props, object, customizer) {
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        assignValue2(object, key, newValue === void 0 ? source[key] : newValue);
      }
      return object;
    }
    function copySymbols2(source, object) {
      return copyObject2(source, getSymbols2(source), object);
    }
    function getAllKeys2(object) {
      return baseGetAllKeys2(object, keys2, getSymbols2);
    }
    function getMapData2(map, key) {
      var data2 = map.__data__;
      return isKeyable2(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
    }
    function getNative2(object, key) {
      var value = getValue2(object, key);
      return baseIsNative2(value) ? value : void 0;
    }
    var getSymbols2 = nativeGetSymbols3 ? overArg2(nativeGetSymbols3, Object) : stubArray2;
    var getTag2 = baseGetTag2;
    if (DataView2 && getTag2(new DataView2(new ArrayBuffer(1))) != dataViewTag6 || Map3 && getTag2(new Map3()) != mapTag7 || Promise3 && getTag2(Promise3.resolve()) != promiseTag2 || Set3 && getTag2(new Set3()) != setTag7 || WeakMap3 && getTag2(new WeakMap3()) != weakMapTag4) {
      getTag2 = function(value) {
        var result = objectToString2.call(value), Ctor = result == objectTag6 ? value.constructor : void 0, ctorString = Ctor ? toSource2(Ctor) : void 0;
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString2:
              return dataViewTag6;
            case mapCtorString2:
              return mapTag7;
            case promiseCtorString2:
              return promiseTag2;
            case setCtorString2:
              return setTag7;
            case weakMapCtorString2:
              return weakMapTag4;
          }
        }
        return result;
      };
    }
    function initCloneArray2(array) {
      var length = array.length, result = array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty14.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    function initCloneObject2(object) {
      return typeof object.constructor == "function" && !isPrototype2(object) ? baseCreate2(getPrototype2(object)) : {};
    }
    function initCloneByTag2(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag5:
          return cloneArrayBuffer2(object);
        case boolTag5:
        case dateTag5:
          return new Ctor(+object);
        case dataViewTag6:
          return cloneDataView2(object, isDeep);
        case float32Tag4:
        case float64Tag4:
        case int8Tag4:
        case int16Tag4:
        case int32Tag4:
        case uint8Tag4:
        case uint8ClampedTag4:
        case uint16Tag4:
        case uint32Tag4:
          return cloneTypedArray2(object, isDeep);
        case mapTag7:
          return cloneMap(object, isDeep, cloneFunc);
        case numberTag5:
        case stringTag5:
          return new Ctor(object);
        case regexpTag5:
          return cloneRegExp2(object);
        case setTag7:
          return cloneSet(object, isDeep, cloneFunc);
        case symbolTag4:
          return cloneSymbol2(object);
      }
    }
    function isIndex2(value, length) {
      length = length == null ? MAX_SAFE_INTEGER3 : length;
      return !!length && (typeof value == "number" || reIsUint2.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable2(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked2(func) {
      return !!maskSrcKey2 && maskSrcKey2 in func;
    }
    function isPrototype2(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto17;
      return value === proto;
    }
    function toSource2(func) {
      if (func != null) {
        try {
          return funcToString4.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function cloneDeep2(value) {
      return baseClone2(value, true, true);
    }
    function eq2(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments2(value) {
      return isArrayLikeObject2(value) && hasOwnProperty14.call(value, "callee") && (!propertyIsEnumerable3.call(value, "callee") || objectToString2.call(value) == argsTag5);
    }
    var isArray2 = Array.isArray;
    function isArrayLike2(value) {
      return value != null && isLength2(value.length) && !isFunction2(value);
    }
    function isArrayLikeObject2(value) {
      return isObjectLike2(value) && isArrayLike2(value);
    }
    var isBuffer2 = nativeIsBuffer2 || stubFalse2;
    function isFunction2(value) {
      var tag = isObject2(value) ? objectToString2.call(value) : "";
      return tag == funcTag4 || tag == genTag3;
    }
    function isLength2(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER3;
    }
    function isObject2(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike2(value) {
      return !!value && typeof value == "object";
    }
    function keys2(object) {
      return isArrayLike2(object) ? arrayLikeKeys2(object) : baseKeys2(object);
    }
    function stubArray2() {
      return [];
    }
    function stubFalse2() {
      return false;
    }
    module2.exports = cloneDeep2;
  }
});

// node_modules/lodash.isequal/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.isequal/index.js"(exports2, module2) {
    var LARGE_ARRAY_SIZE2 = 200;
    var HASH_UNDEFINED4 = "__lodash_hash_undefined__";
    var COMPARE_PARTIAL_FLAG5 = 1;
    var COMPARE_UNORDERED_FLAG3 = 2;
    var MAX_SAFE_INTEGER3 = 9007199254740991;
    var argsTag5 = "[object Arguments]";
    var arrayTag4 = "[object Array]";
    var asyncTag2 = "[object AsyncFunction]";
    var boolTag5 = "[object Boolean]";
    var dateTag5 = "[object Date]";
    var errorTag4 = "[object Error]";
    var funcTag4 = "[object Function]";
    var genTag3 = "[object GeneratorFunction]";
    var mapTag7 = "[object Map]";
    var numberTag5 = "[object Number]";
    var nullTag2 = "[object Null]";
    var objectTag6 = "[object Object]";
    var promiseTag2 = "[object Promise]";
    var proxyTag2 = "[object Proxy]";
    var regexpTag5 = "[object RegExp]";
    var setTag7 = "[object Set]";
    var stringTag5 = "[object String]";
    var symbolTag4 = "[object Symbol]";
    var undefinedTag2 = "[object Undefined]";
    var weakMapTag4 = "[object WeakMap]";
    var arrayBufferTag5 = "[object ArrayBuffer]";
    var dataViewTag6 = "[object DataView]";
    var float32Tag4 = "[object Float32Array]";
    var float64Tag4 = "[object Float64Array]";
    var int8Tag4 = "[object Int8Array]";
    var int16Tag4 = "[object Int16Array]";
    var int32Tag4 = "[object Int32Array]";
    var uint8Tag4 = "[object Uint8Array]";
    var uint8ClampedTag4 = "[object Uint8ClampedArray]";
    var uint16Tag4 = "[object Uint16Array]";
    var uint32Tag4 = "[object Uint32Array]";
    var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
    var reIsUint2 = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags2 = {};
    typedArrayTags2[float32Tag4] = typedArrayTags2[float64Tag4] = typedArrayTags2[int8Tag4] = typedArrayTags2[int16Tag4] = typedArrayTags2[int32Tag4] = typedArrayTags2[uint8Tag4] = typedArrayTags2[uint8ClampedTag4] = typedArrayTags2[uint16Tag4] = typedArrayTags2[uint32Tag4] = true;
    typedArrayTags2[argsTag5] = typedArrayTags2[arrayTag4] = typedArrayTags2[arrayBufferTag5] = typedArrayTags2[boolTag5] = typedArrayTags2[dataViewTag6] = typedArrayTags2[dateTag5] = typedArrayTags2[errorTag4] = typedArrayTags2[funcTag4] = typedArrayTags2[mapTag7] = typedArrayTags2[numberTag5] = typedArrayTags2[objectTag6] = typedArrayTags2[regexpTag5] = typedArrayTags2[setTag7] = typedArrayTags2[stringTag5] = typedArrayTags2[weakMapTag4] = false;
    var freeGlobal2 = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
    var freeExports4 = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
    var freeModule4 = freeExports4 && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports4 = freeModule4 && freeModule4.exports === freeExports4;
    var freeProcess2 = moduleExports4 && freeGlobal2.process;
    var nodeUtil2 = function() {
      try {
        return freeProcess2 && freeProcess2.binding && freeProcess2.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray2 = nodeUtil2 && nodeUtil2.isTypedArray;
    function arrayFilter2(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayPush2(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arraySome2(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseTimes2(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary2(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas2(cache, key) {
      return cache.has(key);
    }
    function getValue2(object, key) {
      return object == null ? void 0 : object[key];
    }
    function mapToArray2(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg2(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray2(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto2 = Array.prototype;
    var funcProto4 = Function.prototype;
    var objectProto17 = Object.prototype;
    var coreJsData2 = root2["__core-js_shared__"];
    var funcToString4 = funcProto4.toString;
    var hasOwnProperty14 = objectProto17.hasOwnProperty;
    var maskSrcKey2 = function() {
      var uid = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString3 = objectProto17.toString;
    var reIsNative2 = RegExp(
      "^" + funcToString4.call(hasOwnProperty14).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer4 = moduleExports4 ? root2.Buffer : void 0;
    var Symbol3 = root2.Symbol;
    var Uint8Array3 = root2.Uint8Array;
    var propertyIsEnumerable3 = objectProto17.propertyIsEnumerable;
    var splice2 = arrayProto2.splice;
    var symToStringTag3 = Symbol3 ? Symbol3.toStringTag : void 0;
    var nativeGetSymbols3 = Object.getOwnPropertySymbols;
    var nativeIsBuffer2 = Buffer4 ? Buffer4.isBuffer : void 0;
    var nativeKeys2 = overArg2(Object.keys, Object);
    var DataView2 = getNative2(root2, "DataView");
    var Map3 = getNative2(root2, "Map");
    var Promise3 = getNative2(root2, "Promise");
    var Set3 = getNative2(root2, "Set");
    var WeakMap3 = getNative2(root2, "WeakMap");
    var nativeCreate2 = getNative2(Object, "create");
    var dataViewCtorString2 = toSource2(DataView2);
    var mapCtorString2 = toSource2(Map3);
    var promiseCtorString2 = toSource2(Promise3);
    var setCtorString2 = toSource2(Set3);
    var weakMapCtorString2 = toSource2(WeakMap3);
    var symbolProto3 = Symbol3 ? Symbol3.prototype : void 0;
    var symbolValueOf3 = symbolProto3 ? symbolProto3.valueOf : void 0;
    function Hash2(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear2() {
      this.__data__ = nativeCreate2 ? nativeCreate2(null) : {};
      this.size = 0;
    }
    function hashDelete2(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet2(key) {
      var data2 = this.__data__;
      if (nativeCreate2) {
        var result = data2[key];
        return result === HASH_UNDEFINED4 ? void 0 : result;
      }
      return hasOwnProperty14.call(data2, key) ? data2[key] : void 0;
    }
    function hashHas2(key) {
      var data2 = this.__data__;
      return nativeCreate2 ? data2[key] !== void 0 : hasOwnProperty14.call(data2, key);
    }
    function hashSet2(key, value) {
      var data2 = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data2[key] = nativeCreate2 && value === void 0 ? HASH_UNDEFINED4 : value;
      return this;
    }
    Hash2.prototype.clear = hashClear2;
    Hash2.prototype["delete"] = hashDelete2;
    Hash2.prototype.get = hashGet2;
    Hash2.prototype.has = hashHas2;
    Hash2.prototype.set = hashSet2;
    function ListCache2(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear2() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete2(key) {
      var data2 = this.__data__, index = assocIndexOf2(data2, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data2.length - 1;
      if (index == lastIndex) {
        data2.pop();
      } else {
        splice2.call(data2, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet2(key) {
      var data2 = this.__data__, index = assocIndexOf2(data2, key);
      return index < 0 ? void 0 : data2[index][1];
    }
    function listCacheHas2(key) {
      return assocIndexOf2(this.__data__, key) > -1;
    }
    function listCacheSet2(key, value) {
      var data2 = this.__data__, index = assocIndexOf2(data2, key);
      if (index < 0) {
        ++this.size;
        data2.push([key, value]);
      } else {
        data2[index][1] = value;
      }
      return this;
    }
    ListCache2.prototype.clear = listCacheClear2;
    ListCache2.prototype["delete"] = listCacheDelete2;
    ListCache2.prototype.get = listCacheGet2;
    ListCache2.prototype.has = listCacheHas2;
    ListCache2.prototype.set = listCacheSet2;
    function MapCache2(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear2() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash2(),
        "map": new (Map3 || ListCache2)(),
        "string": new Hash2()
      };
    }
    function mapCacheDelete2(key) {
      var result = getMapData2(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet2(key) {
      return getMapData2(this, key).get(key);
    }
    function mapCacheHas2(key) {
      return getMapData2(this, key).has(key);
    }
    function mapCacheSet2(key, value) {
      var data2 = getMapData2(this, key), size = data2.size;
      data2.set(key, value);
      this.size += data2.size == size ? 0 : 1;
      return this;
    }
    MapCache2.prototype.clear = mapCacheClear2;
    MapCache2.prototype["delete"] = mapCacheDelete2;
    MapCache2.prototype.get = mapCacheGet2;
    MapCache2.prototype.has = mapCacheHas2;
    MapCache2.prototype.set = mapCacheSet2;
    function SetCache2(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache2();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd2(value) {
      this.__data__.set(value, HASH_UNDEFINED4);
      return this;
    }
    function setCacheHas2(value) {
      return this.__data__.has(value);
    }
    SetCache2.prototype.add = SetCache2.prototype.push = setCacheAdd2;
    SetCache2.prototype.has = setCacheHas2;
    function Stack2(entries) {
      var data2 = this.__data__ = new ListCache2(entries);
      this.size = data2.size;
    }
    function stackClear2() {
      this.__data__ = new ListCache2();
      this.size = 0;
    }
    function stackDelete2(key) {
      var data2 = this.__data__, result = data2["delete"](key);
      this.size = data2.size;
      return result;
    }
    function stackGet2(key) {
      return this.__data__.get(key);
    }
    function stackHas2(key) {
      return this.__data__.has(key);
    }
    function stackSet2(key, value) {
      var data2 = this.__data__;
      if (data2 instanceof ListCache2) {
        var pairs = data2.__data__;
        if (!Map3 || pairs.length < LARGE_ARRAY_SIZE2 - 1) {
          pairs.push([key, value]);
          this.size = ++data2.size;
          return this;
        }
        data2 = this.__data__ = new MapCache2(pairs);
      }
      data2.set(key, value);
      this.size = data2.size;
      return this;
    }
    Stack2.prototype.clear = stackClear2;
    Stack2.prototype["delete"] = stackDelete2;
    Stack2.prototype.get = stackGet2;
    Stack2.prototype.has = stackHas2;
    Stack2.prototype.set = stackSet2;
    function arrayLikeKeys2(value, inherited) {
      var isArr = isArray2(value), isArg = !isArr && isArguments2(value), isBuff = !isArr && !isArg && isBuffer2(value), isType = !isArr && !isArg && !isBuff && isTypedArray2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes2(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty14.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex2(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf2(array, key) {
      var length = array.length;
      while (length--) {
        if (eq2(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGetAllKeys2(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray2(object) ? result : arrayPush2(result, symbolsFunc(object));
    }
    function baseGetTag2(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag2 : nullTag2;
      }
      return symToStringTag3 && symToStringTag3 in Object(value) ? getRawTag2(value) : objectToString2(value);
    }
    function baseIsArguments2(value) {
      return isObjectLike2(value) && baseGetTag2(value) == argsTag5;
    }
    function baseIsEqual2(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike2(value) && !isObjectLike2(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep2(value, other, bitmask, customizer, baseIsEqual2, stack);
    }
    function baseIsEqualDeep2(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag4 : getTag2(object), othTag = othIsArr ? arrayTag4 : getTag2(other);
      objTag = objTag == argsTag5 ? objectTag6 : objTag;
      othTag = othTag == argsTag5 ? objectTag6 : othTag;
      var objIsObj = objTag == objectTag6, othIsObj = othTag == objectTag6, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer2(object)) {
        if (!isBuffer2(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack2());
        return objIsArr || isTypedArray2(object) ? equalArrays2(object, other, bitmask, customizer, equalFunc, stack) : equalByTag2(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG5)) {
        var objIsWrapped = objIsObj && hasOwnProperty14.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty14.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack2());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack2());
      return equalObjects2(object, other, bitmask, customizer, equalFunc, stack);
    }
    function baseIsNative2(value) {
      if (!isObject2(value) || isMasked2(value)) {
        return false;
      }
      var pattern = isFunction2(value) ? reIsNative2 : reIsHostCtor2;
      return pattern.test(toSource2(value));
    }
    function baseIsTypedArray2(value) {
      return isObjectLike2(value) && isLength2(value.length) && !!typedArrayTags2[baseGetTag2(value)];
    }
    function baseKeys2(object) {
      if (!isPrototype2(object)) {
        return nativeKeys2(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty14.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function equalArrays2(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG5, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG3 ? new SetCache2() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome2(other, function(othValue2, othIndex) {
            if (!cacheHas2(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    function equalByTag2(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag6:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag5:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array3(object), new Uint8Array3(other))) {
            return false;
          }
          return true;
        case boolTag5:
        case dateTag5:
        case numberTag5:
          return eq2(+object, +other);
        case errorTag4:
          return object.name == other.name && object.message == other.message;
        case regexpTag5:
        case stringTag5:
          return object == other + "";
        case mapTag7:
          var convert = mapToArray2;
        case setTag7:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG5;
          convert || (convert = setToArray2);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG3;
          stack.set(object, other);
          var result = equalArrays2(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag4:
          if (symbolValueOf3) {
            return symbolValueOf3.call(object) == symbolValueOf3.call(other);
          }
      }
      return false;
    }
    function equalObjects2(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG5, objProps = getAllKeys2(object), objLength = objProps.length, othProps = getAllKeys2(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty14.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    function getAllKeys2(object) {
      return baseGetAllKeys2(object, keys2, getSymbols2);
    }
    function getMapData2(map, key) {
      var data2 = map.__data__;
      return isKeyable2(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
    }
    function getNative2(object, key) {
      var value = getValue2(object, key);
      return baseIsNative2(value) ? value : void 0;
    }
    function getRawTag2(value) {
      var isOwn = hasOwnProperty14.call(value, symToStringTag3), tag = value[symToStringTag3];
      try {
        value[symToStringTag3] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString3.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag3] = tag;
        } else {
          delete value[symToStringTag3];
        }
      }
      return result;
    }
    var getSymbols2 = !nativeGetSymbols3 ? stubArray2 : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter2(nativeGetSymbols3(object), function(symbol) {
        return propertyIsEnumerable3.call(object, symbol);
      });
    };
    var getTag2 = baseGetTag2;
    if (DataView2 && getTag2(new DataView2(new ArrayBuffer(1))) != dataViewTag6 || Map3 && getTag2(new Map3()) != mapTag7 || Promise3 && getTag2(Promise3.resolve()) != promiseTag2 || Set3 && getTag2(new Set3()) != setTag7 || WeakMap3 && getTag2(new WeakMap3()) != weakMapTag4) {
      getTag2 = function(value) {
        var result = baseGetTag2(value), Ctor = result == objectTag6 ? value.constructor : void 0, ctorString = Ctor ? toSource2(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString2:
              return dataViewTag6;
            case mapCtorString2:
              return mapTag7;
            case promiseCtorString2:
              return promiseTag2;
            case setCtorString2:
              return setTag7;
            case weakMapCtorString2:
              return weakMapTag4;
          }
        }
        return result;
      };
    }
    function isIndex2(value, length) {
      length = length == null ? MAX_SAFE_INTEGER3 : length;
      return !!length && (typeof value == "number" || reIsUint2.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable2(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked2(func) {
      return !!maskSrcKey2 && maskSrcKey2 in func;
    }
    function isPrototype2(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto17;
      return value === proto;
    }
    function objectToString2(value) {
      return nativeObjectToString3.call(value);
    }
    function toSource2(func) {
      if (func != null) {
        try {
          return funcToString4.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq2(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments2 = baseIsArguments2(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments2 : function(value) {
      return isObjectLike2(value) && hasOwnProperty14.call(value, "callee") && !propertyIsEnumerable3.call(value, "callee");
    };
    var isArray2 = Array.isArray;
    function isArrayLike2(value) {
      return value != null && isLength2(value.length) && !isFunction2(value);
    }
    var isBuffer2 = nativeIsBuffer2 || stubFalse2;
    function isEqual3(value, other) {
      return baseIsEqual2(value, other);
    }
    function isFunction2(value) {
      if (!isObject2(value)) {
        return false;
      }
      var tag = baseGetTag2(value);
      return tag == funcTag4 || tag == genTag3 || tag == asyncTag2 || tag == proxyTag2;
    }
    function isLength2(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER3;
    }
    function isObject2(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike2(value) {
      return value != null && typeof value == "object";
    }
    var isTypedArray2 = nodeIsTypedArray2 ? baseUnary2(nodeIsTypedArray2) : baseIsTypedArray2;
    function keys2(object) {
      return isArrayLike2(object) ? arrayLikeKeys2(object) : baseKeys2(object);
    }
    function stubArray2() {
      return [];
    }
    function stubFalse2() {
      return false;
    }
    module2.exports = isEqual3;
  }
});

// node_modules/quill-delta/dist/AttributeMap.js
var require_AttributeMap = __commonJS({
  "node_modules/quill-delta/dist/AttributeMap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var cloneDeep2 = require_lodash();
    var isEqual3 = require_lodash2();
    var AttributeMap5;
    (function(AttributeMap6) {
      function compose(a = {}, b = {}, keepNull = false) {
        if (typeof a !== "object") {
          a = {};
        }
        if (typeof b !== "object") {
          b = {};
        }
        let attributes = cloneDeep2(b);
        if (!keepNull) {
          attributes = Object.keys(attributes).reduce((copy, key) => {
            if (attributes[key] != null) {
              copy[key] = attributes[key];
            }
            return copy;
          }, {});
        }
        for (const key in a) {
          if (a[key] !== void 0 && b[key] === void 0) {
            attributes[key] = a[key];
          }
        }
        return Object.keys(attributes).length > 0 ? attributes : void 0;
      }
      AttributeMap6.compose = compose;
      function diff(a = {}, b = {}) {
        if (typeof a !== "object") {
          a = {};
        }
        if (typeof b !== "object") {
          b = {};
        }
        const attributes = Object.keys(a).concat(Object.keys(b)).reduce((attrs, key) => {
          if (!isEqual3(a[key], b[key])) {
            attrs[key] = b[key] === void 0 ? null : b[key];
          }
          return attrs;
        }, {});
        return Object.keys(attributes).length > 0 ? attributes : void 0;
      }
      AttributeMap6.diff = diff;
      function invert(attr = {}, base = {}) {
        attr = attr || {};
        const baseInverted = Object.keys(base).reduce((memo, key) => {
          if (base[key] !== attr[key] && attr[key] !== void 0) {
            memo[key] = base[key];
          }
          return memo;
        }, {});
        return Object.keys(attr).reduce((memo, key) => {
          if (attr[key] !== base[key] && base[key] === void 0) {
            memo[key] = null;
          }
          return memo;
        }, baseInverted);
      }
      AttributeMap6.invert = invert;
      function transform(a, b, priority = false) {
        if (typeof a !== "object") {
          return b;
        }
        if (typeof b !== "object") {
          return void 0;
        }
        if (!priority) {
          return b;
        }
        const attributes = Object.keys(b).reduce((attrs, key) => {
          if (a[key] === void 0) {
            attrs[key] = b[key];
          }
          return attrs;
        }, {});
        return Object.keys(attributes).length > 0 ? attributes : void 0;
      }
      AttributeMap6.transform = transform;
    })(AttributeMap5 || (AttributeMap5 = {}));
    exports2.default = AttributeMap5;
  }
});

// node_modules/quill-delta/dist/Op.js
var require_Op = __commonJS({
  "node_modules/quill-delta/dist/Op.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Op4;
    (function(Op5) {
      function length(op) {
        if (typeof op.delete === "number") {
          return op.delete;
        } else if (typeof op.retain === "number") {
          return op.retain;
        } else if (typeof op.retain === "object" && op.retain !== null) {
          return 1;
        } else {
          return typeof op.insert === "string" ? op.insert.length : 1;
        }
      }
      Op5.length = length;
    })(Op4 || (Op4 = {}));
    exports2.default = Op4;
  }
});

// node_modules/quill-delta/dist/OpIterator.js
var require_OpIterator = __commonJS({
  "node_modules/quill-delta/dist/OpIterator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Op_1 = require_Op();
    var Iterator = class {
      constructor(ops) {
        this.ops = ops;
        this.index = 0;
        this.offset = 0;
      }
      hasNext() {
        return this.peekLength() < Infinity;
      }
      next(length) {
        if (!length) {
          length = Infinity;
        }
        const nextOp = this.ops[this.index];
        if (nextOp) {
          const offset = this.offset;
          const opLength = Op_1.default.length(nextOp);
          if (length >= opLength - offset) {
            length = opLength - offset;
            this.index += 1;
            this.offset = 0;
          } else {
            this.offset += length;
          }
          if (typeof nextOp.delete === "number") {
            return { delete: length };
          } else {
            const retOp = {};
            if (nextOp.attributes) {
              retOp.attributes = nextOp.attributes;
            }
            if (typeof nextOp.retain === "number") {
              retOp.retain = length;
            } else if (typeof nextOp.retain === "object" && nextOp.retain !== null) {
              retOp.retain = nextOp.retain;
            } else if (typeof nextOp.insert === "string") {
              retOp.insert = nextOp.insert.substr(offset, length);
            } else {
              retOp.insert = nextOp.insert;
            }
            return retOp;
          }
        } else {
          return { retain: Infinity };
        }
      }
      peek() {
        return this.ops[this.index];
      }
      peekLength() {
        if (this.ops[this.index]) {
          return Op_1.default.length(this.ops[this.index]) - this.offset;
        } else {
          return Infinity;
        }
      }
      peekType() {
        const op = this.ops[this.index];
        if (op) {
          if (typeof op.delete === "number") {
            return "delete";
          } else if (typeof op.retain === "number" || typeof op.retain === "object" && op.retain !== null) {
            return "retain";
          } else {
            return "insert";
          }
        }
        return "retain";
      }
      rest() {
        if (!this.hasNext()) {
          return [];
        } else if (this.offset === 0) {
          return this.ops.slice(this.index);
        } else {
          const offset = this.offset;
          const index = this.index;
          const next = this.next();
          const rest = this.ops.slice(this.index);
          this.offset = offset;
          this.index = index;
          return [next].concat(rest);
        }
      }
    };
    exports2.default = Iterator;
  }
});

// node_modules/quill-delta/dist/Delta.js
var require_Delta = __commonJS({
  "node_modules/quill-delta/dist/Delta.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AttributeMap = exports2.OpIterator = exports2.Op = void 0;
    var diff = require_diff();
    var cloneDeep2 = require_lodash();
    var isEqual3 = require_lodash2();
    var AttributeMap_1 = require_AttributeMap();
    exports2.AttributeMap = AttributeMap_1.default;
    var Op_1 = require_Op();
    exports2.Op = Op_1.default;
    var OpIterator_1 = require_OpIterator();
    exports2.OpIterator = OpIterator_1.default;
    var NULL_CHARACTER = String.fromCharCode(0);
    var getEmbedTypeAndData = (a, b) => {
      if (typeof a !== "object" || a === null) {
        throw new Error(`cannot retain a ${typeof a}`);
      }
      if (typeof b !== "object" || b === null) {
        throw new Error(`cannot retain a ${typeof b}`);
      }
      const embedType = Object.keys(a)[0];
      if (!embedType || embedType !== Object.keys(b)[0]) {
        throw new Error(`embed types not matched: ${embedType} != ${Object.keys(b)[0]}`);
      }
      return [embedType, a[embedType], b[embedType]];
    };
    var Delta13 = class _Delta {
      constructor(ops) {
        if (Array.isArray(ops)) {
          this.ops = ops;
        } else if (ops != null && Array.isArray(ops.ops)) {
          this.ops = ops.ops;
        } else {
          this.ops = [];
        }
      }
      static registerEmbed(embedType, handler) {
        this.handlers[embedType] = handler;
      }
      static unregisterEmbed(embedType) {
        delete this.handlers[embedType];
      }
      static getHandler(embedType) {
        const handler = this.handlers[embedType];
        if (!handler) {
          throw new Error(`no handlers for embed type "${embedType}"`);
        }
        return handler;
      }
      insert(arg, attributes) {
        const newOp = {};
        if (typeof arg === "string" && arg.length === 0) {
          return this;
        }
        newOp.insert = arg;
        if (attributes != null && typeof attributes === "object" && Object.keys(attributes).length > 0) {
          newOp.attributes = attributes;
        }
        return this.push(newOp);
      }
      delete(length) {
        if (length <= 0) {
          return this;
        }
        return this.push({ delete: length });
      }
      retain(length, attributes) {
        if (typeof length === "number" && length <= 0) {
          return this;
        }
        const newOp = { retain: length };
        if (attributes != null && typeof attributes === "object" && Object.keys(attributes).length > 0) {
          newOp.attributes = attributes;
        }
        return this.push(newOp);
      }
      push(newOp) {
        let index = this.ops.length;
        let lastOp = this.ops[index - 1];
        newOp = cloneDeep2(newOp);
        if (typeof lastOp === "object") {
          if (typeof newOp.delete === "number" && typeof lastOp.delete === "number") {
            this.ops[index - 1] = { delete: lastOp.delete + newOp.delete };
            return this;
          }
          if (typeof lastOp.delete === "number" && newOp.insert != null) {
            index -= 1;
            lastOp = this.ops[index - 1];
            if (typeof lastOp !== "object") {
              this.ops.unshift(newOp);
              return this;
            }
          }
          if (isEqual3(newOp.attributes, lastOp.attributes)) {
            if (typeof newOp.insert === "string" && typeof lastOp.insert === "string") {
              this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
              if (typeof newOp.attributes === "object") {
                this.ops[index - 1].attributes = newOp.attributes;
              }
              return this;
            } else if (typeof newOp.retain === "number" && typeof lastOp.retain === "number") {
              this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
              if (typeof newOp.attributes === "object") {
                this.ops[index - 1].attributes = newOp.attributes;
              }
              return this;
            }
          }
        }
        if (index === this.ops.length) {
          this.ops.push(newOp);
        } else {
          this.ops.splice(index, 0, newOp);
        }
        return this;
      }
      chop() {
        const lastOp = this.ops[this.ops.length - 1];
        if (lastOp && typeof lastOp.retain === "number" && !lastOp.attributes) {
          this.ops.pop();
        }
        return this;
      }
      filter(predicate) {
        return this.ops.filter(predicate);
      }
      forEach(predicate) {
        this.ops.forEach(predicate);
      }
      map(predicate) {
        return this.ops.map(predicate);
      }
      partition(predicate) {
        const passed = [];
        const failed = [];
        this.forEach((op) => {
          const target = predicate(op) ? passed : failed;
          target.push(op);
        });
        return [passed, failed];
      }
      reduce(predicate, initialValue) {
        return this.ops.reduce(predicate, initialValue);
      }
      changeLength() {
        return this.reduce((length, elem) => {
          if (elem.insert) {
            return length + Op_1.default.length(elem);
          } else if (elem.delete) {
            return length - elem.delete;
          }
          return length;
        }, 0);
      }
      length() {
        return this.reduce((length, elem) => {
          return length + Op_1.default.length(elem);
        }, 0);
      }
      slice(start = 0, end = Infinity) {
        const ops = [];
        const iter = new OpIterator_1.default(this.ops);
        let index = 0;
        while (index < end && iter.hasNext()) {
          let nextOp;
          if (index < start) {
            nextOp = iter.next(start - index);
          } else {
            nextOp = iter.next(end - index);
            ops.push(nextOp);
          }
          index += Op_1.default.length(nextOp);
        }
        return new _Delta(ops);
      }
      compose(other) {
        const thisIter = new OpIterator_1.default(this.ops);
        const otherIter = new OpIterator_1.default(other.ops);
        const ops = [];
        const firstOther = otherIter.peek();
        if (firstOther != null && typeof firstOther.retain === "number" && firstOther.attributes == null) {
          let firstLeft = firstOther.retain;
          while (thisIter.peekType() === "insert" && thisIter.peekLength() <= firstLeft) {
            firstLeft -= thisIter.peekLength();
            ops.push(thisIter.next());
          }
          if (firstOther.retain - firstLeft > 0) {
            otherIter.next(firstOther.retain - firstLeft);
          }
        }
        const delta = new _Delta(ops);
        while (thisIter.hasNext() || otherIter.hasNext()) {
          if (otherIter.peekType() === "insert") {
            delta.push(otherIter.next());
          } else if (thisIter.peekType() === "delete") {
            delta.push(thisIter.next());
          } else {
            const length = Math.min(thisIter.peekLength(), otherIter.peekLength());
            const thisOp = thisIter.next(length);
            const otherOp = otherIter.next(length);
            if (otherOp.retain) {
              const newOp = {};
              if (typeof thisOp.retain === "number") {
                newOp.retain = typeof otherOp.retain === "number" ? length : otherOp.retain;
              } else {
                if (typeof otherOp.retain === "number") {
                  if (thisOp.retain == null) {
                    newOp.insert = thisOp.insert;
                  } else {
                    newOp.retain = thisOp.retain;
                  }
                } else {
                  const action = thisOp.retain == null ? "insert" : "retain";
                  const [embedType, thisData, otherData] = getEmbedTypeAndData(thisOp[action], otherOp.retain);
                  const handler = _Delta.getHandler(embedType);
                  newOp[action] = {
                    [embedType]: handler.compose(thisData, otherData, action === "retain")
                  };
                }
              }
              const attributes = AttributeMap_1.default.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === "number");
              if (attributes) {
                newOp.attributes = attributes;
              }
              delta.push(newOp);
              if (!otherIter.hasNext() && isEqual3(delta.ops[delta.ops.length - 1], newOp)) {
                const rest = new _Delta(thisIter.rest());
                return delta.concat(rest).chop();
              }
            } else if (typeof otherOp.delete === "number" && (typeof thisOp.retain === "number" || typeof thisOp.retain === "object" && thisOp.retain !== null)) {
              delta.push(otherOp);
            }
          }
        }
        return delta.chop();
      }
      concat(other) {
        const delta = new _Delta(this.ops.slice());
        if (other.ops.length > 0) {
          delta.push(other.ops[0]);
          delta.ops = delta.ops.concat(other.ops.slice(1));
        }
        return delta;
      }
      diff(other, cursor) {
        if (this.ops === other.ops) {
          return new _Delta();
        }
        const strings = [this, other].map((delta) => {
          return delta.map((op) => {
            if (op.insert != null) {
              return typeof op.insert === "string" ? op.insert : NULL_CHARACTER;
            }
            const prep = delta === other ? "on" : "with";
            throw new Error("diff() called " + prep + " non-document");
          }).join("");
        });
        const retDelta = new _Delta();
        const diffResult = diff(strings[0], strings[1], cursor, true);
        const thisIter = new OpIterator_1.default(this.ops);
        const otherIter = new OpIterator_1.default(other.ops);
        diffResult.forEach((component) => {
          let length = component[1].length;
          while (length > 0) {
            let opLength = 0;
            switch (component[0]) {
              case diff.INSERT:
                opLength = Math.min(otherIter.peekLength(), length);
                retDelta.push(otherIter.next(opLength));
                break;
              case diff.DELETE:
                opLength = Math.min(length, thisIter.peekLength());
                thisIter.next(opLength);
                retDelta.delete(opLength);
                break;
              case diff.EQUAL:
                opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
                const thisOp = thisIter.next(opLength);
                const otherOp = otherIter.next(opLength);
                if (isEqual3(thisOp.insert, otherOp.insert)) {
                  retDelta.retain(opLength, AttributeMap_1.default.diff(thisOp.attributes, otherOp.attributes));
                } else {
                  retDelta.push(otherOp).delete(opLength);
                }
                break;
            }
            length -= opLength;
          }
        });
        return retDelta.chop();
      }
      eachLine(predicate, newline = "\n") {
        const iter = new OpIterator_1.default(this.ops);
        let line = new _Delta();
        let i = 0;
        while (iter.hasNext()) {
          if (iter.peekType() !== "insert") {
            return;
          }
          const thisOp = iter.peek();
          const start = Op_1.default.length(thisOp) - iter.peekLength();
          const index = typeof thisOp.insert === "string" ? thisOp.insert.indexOf(newline, start) - start : -1;
          if (index < 0) {
            line.push(iter.next());
          } else if (index > 0) {
            line.push(iter.next(index));
          } else {
            if (predicate(line, iter.next(1).attributes || {}, i) === false) {
              return;
            }
            i += 1;
            line = new _Delta();
          }
        }
        if (line.length() > 0) {
          predicate(line, {}, i);
        }
      }
      invert(base) {
        const inverted = new _Delta();
        this.reduce((baseIndex, op) => {
          if (op.insert) {
            inverted.delete(Op_1.default.length(op));
          } else if (typeof op.retain === "number" && op.attributes == null) {
            inverted.retain(op.retain);
            return baseIndex + op.retain;
          } else if (op.delete || typeof op.retain === "number") {
            const length = op.delete || op.retain;
            const slice = base.slice(baseIndex, baseIndex + length);
            slice.forEach((baseOp) => {
              if (op.delete) {
                inverted.push(baseOp);
              } else if (op.retain && op.attributes) {
                inverted.retain(Op_1.default.length(baseOp), AttributeMap_1.default.invert(op.attributes, baseOp.attributes));
              }
            });
            return baseIndex + length;
          } else if (typeof op.retain === "object" && op.retain !== null) {
            const slice = base.slice(baseIndex, baseIndex + 1);
            const baseOp = new OpIterator_1.default(slice.ops).next();
            const [embedType, opData, baseOpData] = getEmbedTypeAndData(op.retain, baseOp.insert);
            const handler = _Delta.getHandler(embedType);
            inverted.retain({ [embedType]: handler.invert(opData, baseOpData) }, AttributeMap_1.default.invert(op.attributes, baseOp.attributes));
            return baseIndex + 1;
          }
          return baseIndex;
        }, 0);
        return inverted.chop();
      }
      transform(arg, priority = false) {
        priority = !!priority;
        if (typeof arg === "number") {
          return this.transformPosition(arg, priority);
        }
        const other = arg;
        const thisIter = new OpIterator_1.default(this.ops);
        const otherIter = new OpIterator_1.default(other.ops);
        const delta = new _Delta();
        while (thisIter.hasNext() || otherIter.hasNext()) {
          if (thisIter.peekType() === "insert" && (priority || otherIter.peekType() !== "insert")) {
            delta.retain(Op_1.default.length(thisIter.next()));
          } else if (otherIter.peekType() === "insert") {
            delta.push(otherIter.next());
          } else {
            const length = Math.min(thisIter.peekLength(), otherIter.peekLength());
            const thisOp = thisIter.next(length);
            const otherOp = otherIter.next(length);
            if (thisOp.delete) {
              continue;
            } else if (otherOp.delete) {
              delta.push(otherOp);
            } else {
              const thisData = thisOp.retain;
              const otherData = otherOp.retain;
              let transformedData = typeof otherData === "object" && otherData !== null ? otherData : length;
              if (typeof thisData === "object" && thisData !== null && typeof otherData === "object" && otherData !== null) {
                const embedType = Object.keys(thisData)[0];
                if (embedType === Object.keys(otherData)[0]) {
                  const handler = _Delta.getHandler(embedType);
                  if (handler) {
                    transformedData = {
                      [embedType]: handler.transform(thisData[embedType], otherData[embedType], priority)
                    };
                  }
                }
              }
              delta.retain(transformedData, AttributeMap_1.default.transform(thisOp.attributes, otherOp.attributes, priority));
            }
          }
        }
        return delta.chop();
      }
      transformPosition(index, priority = false) {
        priority = !!priority;
        const thisIter = new OpIterator_1.default(this.ops);
        let offset = 0;
        while (thisIter.hasNext() && offset <= index) {
          const length = thisIter.peekLength();
          const nextType = thisIter.peekType();
          thisIter.next();
          if (nextType === "delete") {
            index -= Math.min(length, index - offset);
            continue;
          } else if (nextType === "insert" && (offset < index || !priority)) {
            index += length;
          }
          offset += length;
        }
        return index;
      }
    };
    Delta13.Op = Op_1.default;
    Delta13.OpIterator = OpIterator_1.default;
    Delta13.AttributeMap = AttributeMap_1.default;
    Delta13.handlers = {};
    exports2.default = Delta13;
    if (typeof module2 === "object") {
      module2.exports = Delta13;
      module2.exports.default = Delta13;
    }
  }
});

// node_modules/quill/blots/break.js
var Break, break_default;
var init_break = __esm({
  "node_modules/quill/blots/break.js"() {
    init_parchment();
    Break = class extends EmbedBlot$1 {
      static value() {
        return void 0;
      }
      optimize() {
        if (this.prev || this.next) {
          this.remove();
        }
      }
      length() {
        return 0;
      }
      value() {
        return "";
      }
    };
    Break.blotName = "break";
    Break.tagName = "BR";
    break_default = Break;
  }
});

// node_modules/quill/blots/text.js
function escapeText(text) {
  return text.replace(/[&<>"']/g, (s) => entityMap[s]);
}
var Text2, entityMap;
var init_text = __esm({
  "node_modules/quill/blots/text.js"() {
    init_parchment();
    Text2 = class extends TextBlot$1 {
    };
    entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
  }
});

// node_modules/quill/blots/inline.js
var Inline, inline_default;
var init_inline = __esm({
  "node_modules/quill/blots/inline.js"() {
    init_parchment();
    init_break();
    init_text();
    Inline = class _Inline extends InlineBlot$1 {
      static allowedChildren = [_Inline, break_default, EmbedBlot$1, Text2];
      // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
      static order = [
        "cursor",
        "inline",
        // Must be lower
        "link",
        // Chrome wants <a> to be lower
        "underline",
        "strike",
        "italic",
        "bold",
        "script",
        "code"
        // Must be higher
      ];
      static compare(self2, other) {
        const selfIndex = _Inline.order.indexOf(self2);
        const otherIndex = _Inline.order.indexOf(other);
        if (selfIndex >= 0 || otherIndex >= 0) {
          return selfIndex - otherIndex;
        }
        if (self2 === other) {
          return 0;
        }
        if (self2 < other) {
          return -1;
        }
        return 1;
      }
      formatAt(index, length, name, value) {
        if (_Inline.compare(this.statics.blotName, name) < 0 && this.scroll.query(name, Scope.BLOT)) {
          const blot = this.isolate(index, length);
          if (value) {
            blot.wrap(name, value);
          }
        } else {
          super.formatAt(index, length, name, value);
        }
      }
      optimize(context) {
        super.optimize(context);
        if (this.parent instanceof _Inline && _Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
          const parent = this.parent.isolate(this.offset(), this.length());
          this.moveChildren(parent);
          parent.wrap(this);
        }
      }
    };
    inline_default = Inline;
  }
});

// node_modules/quill/blots/block.js
function blockDelta(blot) {
  let filter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return blot.descendants(LeafBlot$1).reduce((delta, leaf) => {
    if (leaf.length() === 0) {
      return delta;
    }
    return delta.insert(leaf.value(), bubbleFormats(leaf, {}, filter));
  }, new import_quill_delta.default()).insert("\n", bubbleFormats(blot));
}
function bubbleFormats(blot) {
  let formats = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let filter = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (blot == null) return formats;
  if ("formats" in blot && typeof blot.formats === "function") {
    formats = {
      ...formats,
      ...blot.formats()
    };
    if (filter) {
      delete formats["code-token"];
    }
  }
  if (blot.parent == null || blot.parent.statics.blotName === "scroll" || blot.parent.statics.scope !== blot.statics.scope) {
    return formats;
  }
  return bubbleFormats(blot.parent, formats, filter);
}
var import_quill_delta, NEWLINE_LENGTH, Block, BlockEmbed;
var init_block = __esm({
  "node_modules/quill/blots/block.js"() {
    init_parchment();
    import_quill_delta = __toESM(require_Delta(), 1);
    init_break();
    init_inline();
    init_text();
    NEWLINE_LENGTH = 1;
    Block = class extends BlockBlot$1 {
      cache = {};
      delta() {
        if (this.cache.delta == null) {
          this.cache.delta = blockDelta(this);
        }
        return this.cache.delta;
      }
      deleteAt(index, length) {
        super.deleteAt(index, length);
        this.cache = {};
      }
      formatAt(index, length, name, value) {
        if (length <= 0) return;
        if (this.scroll.query(name, Scope.BLOCK)) {
          if (index + length === this.length()) {
            this.format(name, value);
          }
        } else {
          super.formatAt(index, Math.min(length, this.length() - index - 1), name, value);
        }
        this.cache = {};
      }
      insertAt(index, value, def) {
        if (def != null) {
          super.insertAt(index, value, def);
          this.cache = {};
          return;
        }
        if (value.length === 0) return;
        const lines = value.split("\n");
        const text = lines.shift();
        if (text.length > 0) {
          if (index < this.length() - 1 || this.children.tail == null) {
            super.insertAt(Math.min(index, this.length() - 1), text);
          } else {
            this.children.tail.insertAt(this.children.tail.length(), text);
          }
          this.cache = {};
        }
        let block = this;
        lines.reduce((lineIndex, line) => {
          block = block.split(lineIndex, true);
          block.insertAt(0, line);
          return line.length;
        }, index + text.length);
      }
      insertBefore(blot, ref) {
        const {
          head
        } = this.children;
        super.insertBefore(blot, ref);
        if (head instanceof break_default) {
          head.remove();
        }
        this.cache = {};
      }
      length() {
        if (this.cache.length == null) {
          this.cache.length = super.length() + NEWLINE_LENGTH;
        }
        return this.cache.length;
      }
      moveChildren(target, ref) {
        super.moveChildren(target, ref);
        this.cache = {};
      }
      optimize(context) {
        super.optimize(context);
        this.cache = {};
      }
      path(index) {
        return super.path(index, true);
      }
      removeChild(child) {
        super.removeChild(child);
        this.cache = {};
      }
      split(index) {
        let force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
          const clone = this.clone();
          if (index === 0) {
            this.parent.insertBefore(clone, this);
            return this;
          }
          this.parent.insertBefore(clone, this.next);
          return clone;
        }
        const next = super.split(index, force);
        this.cache = {};
        return next;
      }
    };
    Block.blotName = "block";
    Block.tagName = "P";
    Block.defaultChild = break_default;
    Block.allowedChildren = [break_default, inline_default, EmbedBlot$1, Text2];
    BlockEmbed = class extends EmbedBlot$1 {
      attach() {
        super.attach();
        this.attributes = new AttributorStore$1(this.domNode);
      }
      delta() {
        return new import_quill_delta.default().insert(this.value(), {
          ...this.formats(),
          ...this.attributes.values()
        });
      }
      format(name, value) {
        const attribute = this.scroll.query(name, Scope.BLOCK_ATTRIBUTE);
        if (attribute != null) {
          this.attributes.attribute(attribute, value);
        }
      }
      formatAt(index, length, name, value) {
        this.format(name, value);
      }
      insertAt(index, value, def) {
        if (def != null) {
          super.insertAt(index, value, def);
          return;
        }
        const lines = value.split("\n");
        const text = lines.pop();
        const blocks = lines.map((line) => {
          const block = this.scroll.create(Block.blotName);
          block.insertAt(0, line);
          return block;
        });
        const ref = this.split(index);
        blocks.forEach((block) => {
          this.parent.insertBefore(block, ref);
        });
        if (text) {
          this.parent.insertBefore(this.scroll.create("text", text), ref);
        }
      }
    };
    BlockEmbed.scope = Scope.BLOCK_BLOT;
  }
});

// node_modules/quill/blots/cursor.js
var Cursor, cursor_default;
var init_cursor = __esm({
  "node_modules/quill/blots/cursor.js"() {
    init_parchment();
    init_text();
    Cursor = class _Cursor extends EmbedBlot$1 {
      static blotName = "cursor";
      static className = "ql-cursor";
      static tagName = "span";
      static CONTENTS = "\uFEFF";
      // Zero width no break space
      static value() {
        return void 0;
      }
      constructor(scroll, domNode, selection) {
        super(scroll, domNode);
        this.selection = selection;
        this.textNode = document.createTextNode(_Cursor.CONTENTS);
        this.domNode.appendChild(this.textNode);
        this.savedLength = 0;
      }
      detach() {
        if (this.parent != null) this.parent.removeChild(this);
      }
      format(name, value) {
        if (this.savedLength !== 0) {
          super.format(name, value);
          return;
        }
        let target = this;
        let index = 0;
        while (target != null && target.statics.scope !== Scope.BLOCK_BLOT) {
          index += target.offset(target.parent);
          target = target.parent;
        }
        if (target != null) {
          this.savedLength = _Cursor.CONTENTS.length;
          target.optimize();
          target.formatAt(index, _Cursor.CONTENTS.length, name, value);
          this.savedLength = 0;
        }
      }
      index(node, offset) {
        if (node === this.textNode) return 0;
        return super.index(node, offset);
      }
      length() {
        return this.savedLength;
      }
      position() {
        return [this.textNode, this.textNode.data.length];
      }
      remove() {
        super.remove();
        this.parent = null;
      }
      restore() {
        if (this.selection.composing || this.parent == null) return null;
        const range = this.selection.getNativeRange();
        while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
          this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
        }
        const prevTextBlot = this.prev instanceof Text2 ? this.prev : null;
        const prevTextLength = prevTextBlot ? prevTextBlot.length() : 0;
        const nextTextBlot = this.next instanceof Text2 ? this.next : null;
        const nextText = nextTextBlot ? nextTextBlot.text : "";
        const {
          textNode
        } = this;
        const newText = textNode.data.split(_Cursor.CONTENTS).join("");
        textNode.data = _Cursor.CONTENTS;
        let mergedTextBlot;
        if (prevTextBlot) {
          mergedTextBlot = prevTextBlot;
          if (newText || nextTextBlot) {
            prevTextBlot.insertAt(prevTextBlot.length(), newText + nextText);
            if (nextTextBlot) {
              nextTextBlot.remove();
            }
          }
        } else if (nextTextBlot) {
          mergedTextBlot = nextTextBlot;
          nextTextBlot.insertAt(0, newText);
        } else {
          const newTextNode = document.createTextNode(newText);
          mergedTextBlot = this.scroll.create(newTextNode);
          this.parent.insertBefore(mergedTextBlot, this);
        }
        this.remove();
        if (range) {
          const remapOffset = (node, offset) => {
            if (prevTextBlot && node === prevTextBlot.domNode) {
              return offset;
            }
            if (node === textNode) {
              return prevTextLength + offset - 1;
            }
            if (nextTextBlot && node === nextTextBlot.domNode) {
              return prevTextLength + newText.length + offset;
            }
            return null;
          };
          const start = remapOffset(range.start.node, range.start.offset);
          const end = remapOffset(range.end.node, range.end.offset);
          if (start !== null && end !== null) {
            return {
              startNode: mergedTextBlot.domNode,
              startOffset: start,
              endNode: mergedTextBlot.domNode,
              endOffset: end
            };
          }
        }
        return null;
      }
      update(mutations, context) {
        if (mutations.some((mutation) => {
          return mutation.type === "characterData" && mutation.target === this.textNode;
        })) {
          const range = this.restore();
          if (range) context.range = range;
        }
      }
      // Avoid .ql-cursor being a descendant of `<a/>`.
      // The reason is Safari pushes down `<a/>` on text insertion.
      // That will cause DOM nodes not sync with the model.
      //
      // For example ({I} is the caret), given the markup:
      //    <a><span class="ql-cursor">\uFEFF{I}</span></a>
      // When typing a char "x", `<a/>` will be pushed down inside the `<span>` first:
      //    <span class="ql-cursor"><a>\uFEFF{I}</a></span>
      // And then "x" will be inserted after `<a/>`:
      //    <span class="ql-cursor"><a>\uFEFF</a>d{I}</span>
      optimize(context) {
        super.optimize(context);
        let {
          parent
        } = this;
        while (parent) {
          if (parent.domNode.tagName === "A") {
            this.savedLength = _Cursor.CONTENTS.length;
            parent.isolate(this.offset(parent), this.length()).unwrap();
            this.savedLength = 0;
            break;
          }
          parent = parent.parent;
        }
      }
      value() {
        return "";
      }
    };
    cursor_default = Cursor;
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports2, module2) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module2) {
      module2.exports = EventEmitter2;
    }
  }
});

// node_modules/eventemitter3/index.mjs
var import_index;
var init_eventemitter3 = __esm({
  "node_modules/eventemitter3/index.mjs"() {
    import_index = __toESM(require_eventemitter3(), 1);
  }
});

// node_modules/quill/core/instances.js
var instances_default;
var init_instances = __esm({
  "node_modules/quill/core/instances.js"() {
    instances_default = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/quill/core/logger.js
function debug(method) {
  if (level) {
    if (levels.indexOf(method) <= levels.indexOf(level)) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      console[method](...args);
    }
  }
}
function namespace(ns) {
  return levels.reduce((logger, method) => {
    logger[method] = debug.bind(console, method, ns);
    return logger;
  }, {});
}
var levels, level, logger_default;
var init_logger = __esm({
  "node_modules/quill/core/logger.js"() {
    levels = ["error", "warn", "log", "info"];
    level = "warn";
    namespace.level = (newLevel) => {
      level = newLevel;
    };
    debug.level = namespace.level;
    logger_default = namespace;
  }
});

// node_modules/quill/core/emitter.js
var debug2, EVENTS, Emitter, emitter_default;
var init_emitter = __esm({
  "node_modules/quill/core/emitter.js"() {
    init_eventemitter3();
    init_instances();
    init_logger();
    debug2 = logger_default("quill:events");
    EVENTS = ["selectionchange", "mousedown", "mouseup", "click"];
    EVENTS.forEach((eventName) => {
      document.addEventListener(eventName, function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        Array.from(document.querySelectorAll(".ql-container")).forEach((node) => {
          const quill = instances_default.get(node);
          if (quill && quill.emitter) {
            quill.emitter.handleDOM(...args);
          }
        });
      });
    });
    Emitter = class extends import_index.default {
      static events = {
        EDITOR_CHANGE: "editor-change",
        SCROLL_BEFORE_UPDATE: "scroll-before-update",
        SCROLL_BLOT_MOUNT: "scroll-blot-mount",
        SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
        SCROLL_OPTIMIZE: "scroll-optimize",
        SCROLL_UPDATE: "scroll-update",
        SCROLL_EMBED_UPDATE: "scroll-embed-update",
        SELECTION_CHANGE: "selection-change",
        TEXT_CHANGE: "text-change",
        COMPOSITION_BEFORE_START: "composition-before-start",
        COMPOSITION_START: "composition-start",
        COMPOSITION_BEFORE_END: "composition-before-end",
        COMPOSITION_END: "composition-end"
      };
      static sources = {
        API: "api",
        SILENT: "silent",
        USER: "user"
      };
      constructor() {
        super();
        this.domListeners = {};
        this.on("error", debug2.error);
      }
      emit() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        debug2.log.call(debug2, ...args);
        return super.emit(...args);
      }
      handleDOM(event) {
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        (this.domListeners[event.type] || []).forEach((_ref) => {
          let {
            node,
            handler
          } = _ref;
          if (event.target === node || node.contains(event.target)) {
            handler(event, ...args);
          }
        });
      }
      listenDOM(eventName, node, handler) {
        if (!this.domListeners[eventName]) {
          this.domListeners[eventName] = [];
        }
        this.domListeners[eventName].push({
          node,
          handler
        });
      }
    };
    emitter_default = Emitter;
  }
});

// node_modules/quill/core/selection.js
function contains(parent, descendant) {
  try {
    descendant.parentNode;
  } catch (e) {
    return false;
  }
  return parent.contains(descendant);
}
var debug3, Range, Selection, selection_default;
var init_selection = __esm({
  "node_modules/quill/core/selection.js"() {
    init_parchment();
    init_lodash();
    init_emitter();
    init_logger();
    debug3 = logger_default("quill:selection");
    Range = class {
      constructor(index) {
        let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        this.index = index;
        this.length = length;
      }
    };
    Selection = class {
      constructor(scroll, emitter) {
        this.emitter = emitter;
        this.scroll = scroll;
        this.composing = false;
        this.mouseDown = false;
        this.root = this.scroll.domNode;
        this.cursor = this.scroll.create("cursor", this);
        this.savedRange = new Range(0, 0);
        this.lastRange = this.savedRange;
        this.lastNative = null;
        this.handleComposition();
        this.handleDragging();
        this.emitter.listenDOM("selectionchange", document, () => {
          if (!this.mouseDown && !this.composing) {
            setTimeout(this.update.bind(this, emitter_default.sources.USER), 1);
          }
        });
        this.emitter.on(emitter_default.events.SCROLL_BEFORE_UPDATE, () => {
          if (!this.hasFocus()) return;
          const native = this.getNativeRange();
          if (native == null) return;
          if (native.start.node === this.cursor.textNode) return;
          this.emitter.once(emitter_default.events.SCROLL_UPDATE, (source, mutations) => {
            try {
              if (this.root.contains(native.start.node) && this.root.contains(native.end.node)) {
                this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
              }
              const triggeredByTyping = mutations.some((mutation) => mutation.type === "characterData" || mutation.type === "childList" || mutation.type === "attributes" && mutation.target === this.root);
              this.update(triggeredByTyping ? emitter_default.sources.SILENT : source);
            } catch (ignored) {
            }
          });
        });
        this.emitter.on(emitter_default.events.SCROLL_OPTIMIZE, (mutations, context) => {
          if (context.range) {
            const {
              startNode,
              startOffset,
              endNode,
              endOffset
            } = context.range;
            this.setNativeRange(startNode, startOffset, endNode, endOffset);
            this.update(emitter_default.sources.SILENT);
          }
        });
        this.update(emitter_default.sources.SILENT);
      }
      handleComposition() {
        this.emitter.on(emitter_default.events.COMPOSITION_BEFORE_START, () => {
          this.composing = true;
        });
        this.emitter.on(emitter_default.events.COMPOSITION_END, () => {
          this.composing = false;
          if (this.cursor.parent) {
            const range = this.cursor.restore();
            if (!range) return;
            setTimeout(() => {
              this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
            }, 1);
          }
        });
      }
      handleDragging() {
        this.emitter.listenDOM("mousedown", document.body, () => {
          this.mouseDown = true;
        });
        this.emitter.listenDOM("mouseup", document.body, () => {
          this.mouseDown = false;
          this.update(emitter_default.sources.USER);
        });
      }
      focus() {
        if (this.hasFocus()) return;
        this.root.focus({
          preventScroll: true
        });
        this.setRange(this.savedRange);
      }
      format(format, value) {
        this.scroll.update();
        const nativeRange = this.getNativeRange();
        if (nativeRange == null || !nativeRange.native.collapsed || this.scroll.query(format, Scope.BLOCK)) return;
        if (nativeRange.start.node !== this.cursor.textNode) {
          const blot = this.scroll.find(nativeRange.start.node, false);
          if (blot == null) return;
          if (blot instanceof LeafBlot$1) {
            const after = blot.split(nativeRange.start.offset);
            blot.parent.insertBefore(this.cursor, after);
          } else {
            blot.insertBefore(this.cursor, nativeRange.start.node);
          }
          this.cursor.attach();
        }
        this.cursor.format(format, value);
        this.scroll.optimize();
        this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
        this.update();
      }
      getBounds(index) {
        let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        const scrollLength = this.scroll.length();
        index = Math.min(index, scrollLength - 1);
        length = Math.min(index + length, scrollLength - 1) - index;
        let node;
        let [leaf, offset] = this.scroll.leaf(index);
        if (leaf == null) return null;
        if (length > 0 && offset === leaf.length()) {
          const [next] = this.scroll.leaf(index + 1);
          if (next) {
            const [line] = this.scroll.line(index);
            const [nextLine] = this.scroll.line(index + 1);
            if (line === nextLine) {
              leaf = next;
              offset = 0;
            }
          }
        }
        [node, offset] = leaf.position(offset, true);
        const range = document.createRange();
        if (length > 0) {
          range.setStart(node, offset);
          [leaf, offset] = this.scroll.leaf(index + length);
          if (leaf == null) return null;
          [node, offset] = leaf.position(offset, true);
          range.setEnd(node, offset);
          return range.getBoundingClientRect();
        }
        let side = "left";
        let rect;
        if (node instanceof Text) {
          if (!node.data.length) {
            return null;
          }
          if (offset < node.data.length) {
            range.setStart(node, offset);
            range.setEnd(node, offset + 1);
          } else {
            range.setStart(node, offset - 1);
            range.setEnd(node, offset);
            side = "right";
          }
          rect = range.getBoundingClientRect();
        } else {
          if (!(leaf.domNode instanceof Element)) return null;
          rect = leaf.domNode.getBoundingClientRect();
          if (offset > 0) side = "right";
        }
        return {
          bottom: rect.top + rect.height,
          height: rect.height,
          left: rect[side],
          right: rect[side],
          top: rect.top,
          width: 0
        };
      }
      getNativeRange() {
        const selection = document.getSelection();
        if (selection == null || selection.rangeCount <= 0) return null;
        const nativeRange = selection.getRangeAt(0);
        if (nativeRange == null) return null;
        const range = this.normalizeNative(nativeRange);
        debug3.info("getNativeRange", range);
        return range;
      }
      getRange() {
        const root2 = this.scroll.domNode;
        if ("isConnected" in root2 && !root2.isConnected) {
          return [null, null];
        }
        const normalized = this.getNativeRange();
        if (normalized == null) return [null, null];
        const range = this.normalizedToRange(normalized);
        return [range, normalized];
      }
      hasFocus() {
        return document.activeElement === this.root || document.activeElement != null && contains(this.root, document.activeElement);
      }
      normalizedToRange(range) {
        const positions = [[range.start.node, range.start.offset]];
        if (!range.native.collapsed) {
          positions.push([range.end.node, range.end.offset]);
        }
        const indexes = positions.map((position) => {
          const [node, offset] = position;
          const blot = this.scroll.find(node, true);
          const index = blot.offset(this.scroll);
          if (offset === 0) {
            return index;
          }
          if (blot instanceof LeafBlot$1) {
            return index + blot.index(node, offset);
          }
          return index + blot.length();
        });
        const end = Math.min(Math.max(...indexes), this.scroll.length() - 1);
        const start = Math.min(end, ...indexes);
        return new Range(start, end - start);
      }
      normalizeNative(nativeRange) {
        if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
          return null;
        }
        const range = {
          start: {
            node: nativeRange.startContainer,
            offset: nativeRange.startOffset
          },
          end: {
            node: nativeRange.endContainer,
            offset: nativeRange.endOffset
          },
          native: nativeRange
        };
        [range.start, range.end].forEach((position) => {
          let {
            node,
            offset
          } = position;
          while (!(node instanceof Text) && node.childNodes.length > 0) {
            if (node.childNodes.length > offset) {
              node = node.childNodes[offset];
              offset = 0;
            } else if (node.childNodes.length === offset) {
              node = node.lastChild;
              if (node instanceof Text) {
                offset = node.data.length;
              } else if (node.childNodes.length > 0) {
                offset = node.childNodes.length;
              } else {
                offset = node.childNodes.length + 1;
              }
            } else {
              break;
            }
          }
          position.node = node;
          position.offset = offset;
        });
        return range;
      }
      rangeToNative(range) {
        const scrollLength = this.scroll.length();
        const getPosition = (index, inclusive) => {
          index = Math.min(scrollLength - 1, index);
          const [leaf, leafOffset] = this.scroll.leaf(index);
          return leaf ? leaf.position(leafOffset, inclusive) : [null, -1];
        };
        return [...getPosition(range.index, false), ...getPosition(range.index + range.length, true)];
      }
      setNativeRange(startNode, startOffset) {
        let endNode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : startNode;
        let endOffset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : startOffset;
        let force = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
        debug3.info("setNativeRange", startNode, startOffset, endNode, endOffset);
        if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || // @ts-expect-error Fix me later
        endNode.parentNode == null)) {
          return;
        }
        const selection = document.getSelection();
        if (selection == null) return;
        if (startNode != null) {
          if (!this.hasFocus()) this.root.focus({
            preventScroll: true
          });
          const {
            native
          } = this.getNativeRange() || {};
          if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {
            if (startNode instanceof Element && startNode.tagName === "BR") {
              startOffset = Array.from(startNode.parentNode.childNodes).indexOf(startNode);
              startNode = startNode.parentNode;
            }
            if (endNode instanceof Element && endNode.tagName === "BR") {
              endOffset = Array.from(endNode.parentNode.childNodes).indexOf(endNode);
              endNode = endNode.parentNode;
            }
            const range = document.createRange();
            range.setStart(startNode, startOffset);
            range.setEnd(endNode, endOffset);
            selection.removeAllRanges();
            selection.addRange(range);
          }
        } else {
          selection.removeAllRanges();
          this.root.blur();
        }
      }
      setRange(range) {
        let force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        let source = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : emitter_default.sources.API;
        if (typeof force === "string") {
          source = force;
          force = false;
        }
        debug3.info("setRange", range);
        if (range != null) {
          const args = this.rangeToNative(range);
          this.setNativeRange(...args, force);
        } else {
          this.setNativeRange(null);
        }
        this.update(source);
      }
      update() {
        let source = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : emitter_default.sources.USER;
        const oldRange = this.lastRange;
        const [lastRange, nativeRange] = this.getRange();
        this.lastRange = lastRange;
        this.lastNative = nativeRange;
        if (this.lastRange != null) {
          this.savedRange = this.lastRange;
        }
        if (!isEqual_default(oldRange, this.lastRange)) {
          if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
            const range = this.cursor.restore();
            if (range) {
              this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
            }
          }
          const args = [emitter_default.events.SELECTION_CHANGE, cloneDeep_default(this.lastRange), cloneDeep_default(oldRange), source];
          this.emitter.emit(emitter_default.events.EDITOR_CHANGE, ...args);
          if (source !== emitter_default.sources.SILENT) {
            this.emitter.emit(...args);
          }
        }
      }
    };
    selection_default = Selection;
  }
});

// node_modules/quill/core/editor.js
function convertListHTML(items, lastIndent, types) {
  if (items.length === 0) {
    const [endTag2] = getListType(types.pop());
    if (lastIndent <= 0) {
      return `</li></${endTag2}>`;
    }
    return `</li></${endTag2}>${convertListHTML([], lastIndent - 1, types)}`;
  }
  const [{
    child,
    offset,
    length,
    indent,
    type
  }, ...rest] = items;
  const [tag, attribute] = getListType(type);
  if (indent > lastIndent) {
    types.push(type);
    if (indent === lastIndent + 1) {
      return `<${tag}><li${attribute}>${convertHTML(child, offset, length)}${convertListHTML(rest, indent, types)}`;
    }
    return `<${tag}><li>${convertListHTML(items, lastIndent + 1, types)}`;
  }
  const previousType = types[types.length - 1];
  if (indent === lastIndent && type === previousType) {
    return `</li><li${attribute}>${convertHTML(child, offset, length)}${convertListHTML(rest, indent, types)}`;
  }
  const [endTag] = getListType(types.pop());
  return `</li></${endTag}>${convertListHTML(items, lastIndent - 1, types)}`;
}
function convertHTML(blot, index, length) {
  let isRoot = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if ("html" in blot && typeof blot.html === "function") {
    return blot.html(index, length);
  }
  if (blot instanceof Text2) {
    const escapedText = escapeText(blot.value().slice(index, index + length));
    return escapedText.replaceAll(" ", "&nbsp;");
  }
  if (blot instanceof ParentBlot$1) {
    if (blot.statics.blotName === "list-container") {
      const items = [];
      blot.children.forEachAt(index, length, (child, offset, childLength) => {
        const formats = "formats" in child && typeof child.formats === "function" ? child.formats() : {};
        items.push({
          child,
          offset,
          length: childLength,
          indent: formats.indent || 0,
          type: formats.list
        });
      });
      return convertListHTML(items, -1, []);
    }
    const parts = [];
    blot.children.forEachAt(index, length, (child, offset, childLength) => {
      parts.push(convertHTML(child, offset, childLength));
    });
    if (isRoot || blot.statics.blotName === "list") {
      return parts.join("");
    }
    const {
      outerHTML,
      innerHTML
    } = blot.domNode;
    const [start, end] = outerHTML.split(`>${innerHTML}<`);
    if (start === "<table") {
      return `<table style="border: 1px solid #000;">${parts.join("")}<${end}`;
    }
    return `${start}>${parts.join("")}<${end}`;
  }
  return blot.domNode instanceof Element ? blot.domNode.outerHTML : "";
}
function combineFormats(formats, combined) {
  return Object.keys(combined).reduce((merged, name) => {
    if (formats[name] == null) return merged;
    const combinedValue = combined[name];
    if (combinedValue === formats[name]) {
      merged[name] = combinedValue;
    } else if (Array.isArray(combinedValue)) {
      if (combinedValue.indexOf(formats[name]) < 0) {
        merged[name] = combinedValue.concat([formats[name]]);
      } else {
        merged[name] = combinedValue;
      }
    } else {
      merged[name] = [combinedValue, formats[name]];
    }
    return merged;
  }, {});
}
function getListType(type) {
  const tag = type === "ordered" ? "ol" : "ul";
  switch (type) {
    case "checked":
      return [tag, ' data-list="checked"'];
    case "unchecked":
      return [tag, ' data-list="unchecked"'];
    default:
      return [tag, ""];
  }
}
function normalizeDelta(delta) {
  return delta.reduce((normalizedDelta, op) => {
    if (typeof op.insert === "string") {
      const text = op.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
      return normalizedDelta.insert(text, op.attributes);
    }
    return normalizedDelta.push(op);
  }, new import_quill_delta2.default());
}
function shiftRange(_ref, amount) {
  let {
    index,
    length
  } = _ref;
  return new Range(index + amount, length);
}
function splitOpLines(ops) {
  const split = [];
  ops.forEach((op) => {
    if (typeof op.insert === "string") {
      const lines = op.insert.split("\n");
      lines.forEach((line, index) => {
        if (index) split.push({
          insert: "\n",
          attributes: op.attributes
        });
        if (line) split.push({
          insert: line,
          attributes: op.attributes
        });
      });
    } else {
      split.push(op);
    }
  });
  return split;
}
var import_quill_delta2, ASCII, Editor, editor_default;
var init_editor = __esm({
  "node_modules/quill/core/editor.js"() {
    init_lodash();
    init_parchment();
    import_quill_delta2 = __toESM(require_Delta(), 1);
    init_block();
    init_break();
    init_cursor();
    init_text();
    init_selection();
    ASCII = /^[ -~]*$/;
    Editor = class {
      constructor(scroll) {
        this.scroll = scroll;
        this.delta = this.getDelta();
      }
      applyDelta(delta) {
        this.scroll.update();
        let scrollLength = this.scroll.length();
        this.scroll.batchStart();
        const normalizedDelta = normalizeDelta(delta);
        const deleteDelta = new import_quill_delta2.default();
        const normalizedOps = splitOpLines(normalizedDelta.ops.slice());
        normalizedOps.reduce((index, op) => {
          const length = import_quill_delta2.Op.length(op);
          let attributes = op.attributes || {};
          let isImplicitNewlinePrepended = false;
          let isImplicitNewlineAppended = false;
          if (op.insert != null) {
            deleteDelta.retain(length);
            if (typeof op.insert === "string") {
              const text = op.insert;
              isImplicitNewlineAppended = !text.endsWith("\n") && (scrollLength <= index || !!this.scroll.descendant(BlockEmbed, index)[0]);
              this.scroll.insertAt(index, text);
              const [line, offset] = this.scroll.line(index);
              let formats = merge_default({}, bubbleFormats(line));
              if (line instanceof Block) {
                const [leaf] = line.descendant(LeafBlot$1, offset);
                if (leaf) {
                  formats = merge_default(formats, bubbleFormats(leaf));
                }
              }
              attributes = import_quill_delta2.AttributeMap.diff(formats, attributes) || {};
            } else if (typeof op.insert === "object") {
              const key = Object.keys(op.insert)[0];
              if (key == null) return index;
              const isInlineEmbed = this.scroll.query(key, Scope.INLINE) != null;
              if (isInlineEmbed) {
                if (scrollLength <= index || !!this.scroll.descendant(BlockEmbed, index)[0]) {
                  isImplicitNewlineAppended = true;
                }
              } else if (index > 0) {
                const [leaf, offset] = this.scroll.descendant(LeafBlot$1, index - 1);
                if (leaf instanceof Text2) {
                  const text = leaf.value();
                  if (text[offset] !== "\n") {
                    isImplicitNewlinePrepended = true;
                  }
                } else if (leaf instanceof EmbedBlot$1 && leaf.statics.scope === Scope.INLINE_BLOT) {
                  isImplicitNewlinePrepended = true;
                }
              }
              this.scroll.insertAt(index, key, op.insert[key]);
              if (isInlineEmbed) {
                const [leaf] = this.scroll.descendant(LeafBlot$1, index);
                if (leaf) {
                  const formats = merge_default({}, bubbleFormats(leaf));
                  attributes = import_quill_delta2.AttributeMap.diff(formats, attributes) || {};
                }
              }
            }
            scrollLength += length;
          } else {
            deleteDelta.push(op);
            if (op.retain !== null && typeof op.retain === "object") {
              const key = Object.keys(op.retain)[0];
              if (key == null) return index;
              this.scroll.updateEmbedAt(index, key, op.retain[key]);
            }
          }
          Object.keys(attributes).forEach((name) => {
            this.scroll.formatAt(index, length, name, attributes[name]);
          });
          const prependedLength = isImplicitNewlinePrepended ? 1 : 0;
          const addedLength = isImplicitNewlineAppended ? 1 : 0;
          scrollLength += prependedLength + addedLength;
          deleteDelta.retain(prependedLength);
          deleteDelta.delete(addedLength);
          return index + length + prependedLength + addedLength;
        }, 0);
        deleteDelta.reduce((index, op) => {
          if (typeof op.delete === "number") {
            this.scroll.deleteAt(index, op.delete);
            return index;
          }
          return index + import_quill_delta2.Op.length(op);
        }, 0);
        this.scroll.batchEnd();
        this.scroll.optimize();
        return this.update(normalizedDelta);
      }
      deleteText(index, length) {
        this.scroll.deleteAt(index, length);
        return this.update(new import_quill_delta2.default().retain(index).delete(length));
      }
      formatLine(index, length) {
        let formats = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        this.scroll.update();
        Object.keys(formats).forEach((format) => {
          this.scroll.lines(index, Math.max(length, 1)).forEach((line) => {
            line.format(format, formats[format]);
          });
        });
        this.scroll.optimize();
        const delta = new import_quill_delta2.default().retain(index).retain(length, cloneDeep_default(formats));
        return this.update(delta);
      }
      formatText(index, length) {
        let formats = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        Object.keys(formats).forEach((format) => {
          this.scroll.formatAt(index, length, format, formats[format]);
        });
        const delta = new import_quill_delta2.default().retain(index).retain(length, cloneDeep_default(formats));
        return this.update(delta);
      }
      getContents(index, length) {
        return this.delta.slice(index, index + length);
      }
      getDelta() {
        return this.scroll.lines().reduce((delta, line) => {
          return delta.concat(line.delta());
        }, new import_quill_delta2.default());
      }
      getFormat(index) {
        let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        let lines = [];
        let leaves = [];
        if (length === 0) {
          this.scroll.path(index).forEach((path) => {
            const [blot] = path;
            if (blot instanceof Block) {
              lines.push(blot);
            } else if (blot instanceof LeafBlot$1) {
              leaves.push(blot);
            }
          });
        } else {
          lines = this.scroll.lines(index, length);
          leaves = this.scroll.descendants(LeafBlot$1, index, length);
        }
        const [lineFormats, leafFormats] = [lines, leaves].map((blots) => {
          const blot = blots.shift();
          if (blot == null) return {};
          let formats = bubbleFormats(blot);
          while (Object.keys(formats).length > 0) {
            const blot2 = blots.shift();
            if (blot2 == null) return formats;
            formats = combineFormats(bubbleFormats(blot2), formats);
          }
          return formats;
        });
        return {
          ...lineFormats,
          ...leafFormats
        };
      }
      getHTML(index, length) {
        const [line, lineOffset] = this.scroll.line(index);
        if (line) {
          const lineLength = line.length();
          const isWithinLine = line.length() >= lineOffset + length;
          if (isWithinLine && !(lineOffset === 0 && length === lineLength)) {
            return convertHTML(line, lineOffset, length, true);
          }
          return convertHTML(this.scroll, index, length, true);
        }
        return "";
      }
      getText(index, length) {
        return this.getContents(index, length).filter((op) => typeof op.insert === "string").map((op) => op.insert).join("");
      }
      insertContents(index, contents) {
        const normalizedDelta = normalizeDelta(contents);
        const change = new import_quill_delta2.default().retain(index).concat(normalizedDelta);
        this.scroll.insertContents(index, normalizedDelta);
        return this.update(change);
      }
      insertEmbed(index, embed, value) {
        this.scroll.insertAt(index, embed, value);
        return this.update(new import_quill_delta2.default().retain(index).insert({
          [embed]: value
        }));
      }
      insertText(index, text) {
        let formats = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        this.scroll.insertAt(index, text);
        Object.keys(formats).forEach((format) => {
          this.scroll.formatAt(index, text.length, format, formats[format]);
        });
        return this.update(new import_quill_delta2.default().retain(index).insert(text, cloneDeep_default(formats)));
      }
      isBlank() {
        if (this.scroll.children.length === 0) return true;
        if (this.scroll.children.length > 1) return false;
        const blot = this.scroll.children.head;
        if (blot?.statics.blotName !== Block.blotName) return false;
        const block = blot;
        if (block.children.length > 1) return false;
        return block.children.head instanceof break_default;
      }
      removeFormat(index, length) {
        const text = this.getText(index, length);
        const [line, offset] = this.scroll.line(index + length);
        let suffixLength = 0;
        let suffix = new import_quill_delta2.default();
        if (line != null) {
          suffixLength = line.length() - offset;
          suffix = line.delta().slice(offset, offset + suffixLength - 1).insert("\n");
        }
        const contents = this.getContents(index, length + suffixLength);
        const diff = contents.diff(new import_quill_delta2.default().insert(text).concat(suffix));
        const delta = new import_quill_delta2.default().retain(index).concat(diff);
        return this.applyDelta(delta);
      }
      update(change) {
        let mutations = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        let selectionInfo = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
        const oldDelta = this.delta;
        if (mutations.length === 1 && mutations[0].type === "characterData" && // @ts-expect-error Fix me later
        mutations[0].target.data.match(ASCII) && this.scroll.find(mutations[0].target)) {
          const textBlot = this.scroll.find(mutations[0].target);
          const formats = bubbleFormats(textBlot);
          const index = textBlot.offset(this.scroll);
          const oldValue = mutations[0].oldValue.replace(cursor_default.CONTENTS, "");
          const oldText = new import_quill_delta2.default().insert(oldValue);
          const newText = new import_quill_delta2.default().insert(textBlot.value());
          const relativeSelectionInfo = selectionInfo && {
            oldRange: shiftRange(selectionInfo.oldRange, -index),
            newRange: shiftRange(selectionInfo.newRange, -index)
          };
          const diffDelta = new import_quill_delta2.default().retain(index).concat(oldText.diff(newText, relativeSelectionInfo));
          change = diffDelta.reduce((delta, op) => {
            if (op.insert) {
              return delta.insert(op.insert, formats);
            }
            return delta.push(op);
          }, new import_quill_delta2.default());
          this.delta = oldDelta.compose(change);
        } else {
          this.delta = this.getDelta();
          if (!change || !isEqual_default(oldDelta.compose(change), this.delta)) {
            change = oldDelta.diff(this.delta, selectionInfo);
          }
        }
        return change;
      }
    };
    editor_default = Editor;
  }
});

// node_modules/quill/core/module.js
var Module, module_default;
var init_module = __esm({
  "node_modules/quill/core/module.js"() {
    Module = class {
      static DEFAULTS = {};
      constructor(quill) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.quill = quill;
        this.options = options;
      }
    };
    module_default = Module;
  }
});

// node_modules/quill/blots/embed.js
var GUARD_TEXT, Embed, embed_default;
var init_embed = __esm({
  "node_modules/quill/blots/embed.js"() {
    init_parchment();
    init_text();
    GUARD_TEXT = "\uFEFF";
    Embed = class extends EmbedBlot$1 {
      constructor(scroll, node) {
        super(scroll, node);
        this.contentNode = document.createElement("span");
        this.contentNode.setAttribute("contenteditable", "false");
        Array.from(this.domNode.childNodes).forEach((childNode) => {
          this.contentNode.appendChild(childNode);
        });
        this.leftGuard = document.createTextNode(GUARD_TEXT);
        this.rightGuard = document.createTextNode(GUARD_TEXT);
        this.domNode.appendChild(this.leftGuard);
        this.domNode.appendChild(this.contentNode);
        this.domNode.appendChild(this.rightGuard);
      }
      index(node, offset) {
        if (node === this.leftGuard) return 0;
        if (node === this.rightGuard) return 1;
        return super.index(node, offset);
      }
      restore(node) {
        let range = null;
        let textNode;
        const text = node.data.split(GUARD_TEXT).join("");
        if (node === this.leftGuard) {
          if (this.prev instanceof Text2) {
            const prevLength = this.prev.length();
            this.prev.insertAt(prevLength, text);
            range = {
              startNode: this.prev.domNode,
              startOffset: prevLength + text.length
            };
          } else {
            textNode = document.createTextNode(text);
            this.parent.insertBefore(this.scroll.create(textNode), this);
            range = {
              startNode: textNode,
              startOffset: text.length
            };
          }
        } else if (node === this.rightGuard) {
          if (this.next instanceof Text2) {
            this.next.insertAt(0, text);
            range = {
              startNode: this.next.domNode,
              startOffset: text.length
            };
          } else {
            textNode = document.createTextNode(text);
            this.parent.insertBefore(this.scroll.create(textNode), this.next);
            range = {
              startNode: textNode,
              startOffset: text.length
            };
          }
        }
        node.data = GUARD_TEXT;
        return range;
      }
      update(mutations, context) {
        mutations.forEach((mutation) => {
          if (mutation.type === "characterData" && (mutation.target === this.leftGuard || mutation.target === this.rightGuard)) {
            const range = this.restore(mutation.target);
            if (range) context.range = range;
          }
        });
      }
    };
    embed_default = Embed;
  }
});

// node_modules/quill/core/composition.js
var Composition, composition_default;
var init_composition = __esm({
  "node_modules/quill/core/composition.js"() {
    init_embed();
    init_emitter();
    Composition = class {
      isComposing = false;
      constructor(scroll, emitter) {
        this.scroll = scroll;
        this.emitter = emitter;
        this.setupListeners();
      }
      setupListeners() {
        this.scroll.domNode.addEventListener("compositionstart", (event) => {
          if (!this.isComposing) {
            this.handleCompositionStart(event);
          }
        });
        this.scroll.domNode.addEventListener("compositionend", (event) => {
          if (this.isComposing) {
            queueMicrotask(() => {
              this.handleCompositionEnd(event);
            });
          }
        });
      }
      handleCompositionStart(event) {
        const blot = event.target instanceof Node ? this.scroll.find(event.target, true) : null;
        if (blot && !(blot instanceof embed_default)) {
          this.emitter.emit(emitter_default.events.COMPOSITION_BEFORE_START, event);
          this.scroll.batchStart();
          this.emitter.emit(emitter_default.events.COMPOSITION_START, event);
          this.isComposing = true;
        }
      }
      handleCompositionEnd(event) {
        this.emitter.emit(emitter_default.events.COMPOSITION_BEFORE_END, event);
        this.scroll.batchEnd();
        this.emitter.emit(emitter_default.events.COMPOSITION_END, event);
        this.isComposing = false;
      }
    };
    composition_default = Composition;
  }
});

// node_modules/quill/core/theme.js
var Theme, theme_default;
var init_theme = __esm({
  "node_modules/quill/core/theme.js"() {
    Theme = class _Theme {
      static DEFAULTS = {
        modules: {}
      };
      static themes = {
        default: _Theme
      };
      modules = {};
      constructor(quill, options) {
        this.quill = quill;
        this.options = options;
      }
      init() {
        Object.keys(this.options.modules).forEach((name) => {
          if (this.modules[name] == null) {
            this.addModule(name);
          }
        });
      }
      addModule(name) {
        const ModuleClass = this.quill.constructor.import(`modules/${name}`);
        this.modules[name] = new ModuleClass(this.quill, this.options.modules[name] || {});
        return this.modules[name];
      }
    };
    theme_default = Theme;
  }
});

// node_modules/quill/core/utils/scrollRectIntoView.js
var getParentElement, getElementRect, paddingValueToInt, getScrollDistance, scrollRectIntoView, scrollRectIntoView_default;
var init_scrollRectIntoView = __esm({
  "node_modules/quill/core/utils/scrollRectIntoView.js"() {
    getParentElement = (element) => element.parentElement || element.getRootNode().host || null;
    getElementRect = (element) => {
      const rect = element.getBoundingClientRect();
      const scaleX = "offsetWidth" in element && Math.abs(rect.width) / element.offsetWidth || 1;
      const scaleY = "offsetHeight" in element && Math.abs(rect.height) / element.offsetHeight || 1;
      return {
        top: rect.top,
        right: rect.left + element.clientWidth * scaleX,
        bottom: rect.top + element.clientHeight * scaleY,
        left: rect.left
      };
    };
    paddingValueToInt = (value) => {
      const number = parseInt(value, 10);
      return Number.isNaN(number) ? 0 : number;
    };
    getScrollDistance = (targetStart, targetEnd, scrollStart, scrollEnd, scrollPaddingStart, scrollPaddingEnd) => {
      if (targetStart < scrollStart && targetEnd > scrollEnd) {
        return 0;
      }
      if (targetStart < scrollStart) {
        return -(scrollStart - targetStart + scrollPaddingStart);
      }
      if (targetEnd > scrollEnd) {
        return targetEnd - targetStart > scrollEnd - scrollStart ? targetStart + scrollPaddingStart - scrollStart : targetEnd - scrollEnd + scrollPaddingEnd;
      }
      return 0;
    };
    scrollRectIntoView = (root2, targetRect) => {
      const document2 = root2.ownerDocument;
      let rect = targetRect;
      let current = root2;
      while (current) {
        const isDocumentBody = current === document2.body;
        const bounding = isDocumentBody ? {
          top: 0,
          right: window.visualViewport?.width ?? document2.documentElement.clientWidth,
          bottom: window.visualViewport?.height ?? document2.documentElement.clientHeight,
          left: 0
        } : getElementRect(current);
        const style = getComputedStyle(current);
        const scrollDistanceX = getScrollDistance(rect.left, rect.right, bounding.left, bounding.right, paddingValueToInt(style.scrollPaddingLeft), paddingValueToInt(style.scrollPaddingRight));
        const scrollDistanceY = getScrollDistance(rect.top, rect.bottom, bounding.top, bounding.bottom, paddingValueToInt(style.scrollPaddingTop), paddingValueToInt(style.scrollPaddingBottom));
        if (scrollDistanceX || scrollDistanceY) {
          if (isDocumentBody) {
            document2.defaultView?.scrollBy(scrollDistanceX, scrollDistanceY);
          } else {
            const {
              scrollLeft,
              scrollTop
            } = current;
            if (scrollDistanceY) {
              current.scrollTop += scrollDistanceY;
            }
            if (scrollDistanceX) {
              current.scrollLeft += scrollDistanceX;
            }
            const scrolledLeft = current.scrollLeft - scrollLeft;
            const scrolledTop = current.scrollTop - scrollTop;
            rect = {
              left: rect.left - scrolledLeft,
              top: rect.top - scrolledTop,
              right: rect.right - scrolledLeft,
              bottom: rect.bottom - scrolledTop
            };
          }
        }
        current = isDocumentBody || style.position === "fixed" ? null : getParentElement(current);
      }
    };
    scrollRectIntoView_default = scrollRectIntoView;
  }
});

// node_modules/quill/core/utils/createRegistryWithFormats.js
var MAX_REGISTER_ITERATIONS, CORE_FORMATS, createRegistryWithFormats, createRegistryWithFormats_default;
var init_createRegistryWithFormats = __esm({
  "node_modules/quill/core/utils/createRegistryWithFormats.js"() {
    init_parchment();
    MAX_REGISTER_ITERATIONS = 100;
    CORE_FORMATS = ["block", "break", "cursor", "inline", "scroll", "text"];
    createRegistryWithFormats = (formats, sourceRegistry, debug8) => {
      const registry = new Registry();
      CORE_FORMATS.forEach((name) => {
        const coreBlot = sourceRegistry.query(name);
        if (coreBlot) registry.register(coreBlot);
      });
      formats.forEach((name) => {
        let format = sourceRegistry.query(name);
        if (!format) {
          debug8.error(`Cannot register "${name}" specified in "formats" config. Are you sure it was registered?`);
        }
        let iterations = 0;
        while (format) {
          registry.register(format);
          format = "blotName" in format ? format.requiredContainer ?? null : null;
          iterations += 1;
          if (iterations > MAX_REGISTER_ITERATIONS) {
            debug8.error(`Cycle detected in registering blot requiredContainer: "${name}"`);
            break;
          }
        }
      });
      return registry;
    };
    createRegistryWithFormats_default = createRegistryWithFormats;
  }
});

// node_modules/quill/core/quill.js
function resolveSelector(selector) {
  return typeof selector === "string" ? document.querySelector(selector) : selector;
}
function expandModuleConfig(config4) {
  return Object.entries(config4 ?? {}).reduce((expanded, _ref) => {
    let [key, value] = _ref;
    return {
      ...expanded,
      [key]: value === true ? {} : value
    };
  }, {});
}
function omitUndefinedValuesFromOptions(obj) {
  return Object.fromEntries(Object.entries(obj).filter((entry) => entry[1] !== void 0));
}
function expandConfig(containerOrSelector, options) {
  const container = resolveSelector(containerOrSelector);
  if (!container) {
    throw new Error("Invalid Quill container");
  }
  const shouldUseDefaultTheme = !options.theme || options.theme === Quill.DEFAULTS.theme;
  const theme = shouldUseDefaultTheme ? theme_default : Quill.import(`themes/${options.theme}`);
  if (!theme) {
    throw new Error(`Invalid theme ${options.theme}. Did you register it?`);
  }
  const {
    modules: quillModuleDefaults,
    ...quillDefaults
  } = Quill.DEFAULTS;
  const {
    modules: themeModuleDefaults,
    ...themeDefaults
  } = theme.DEFAULTS;
  let userModuleOptions = expandModuleConfig(options.modules);
  if (userModuleOptions != null && userModuleOptions.toolbar && userModuleOptions.toolbar.constructor !== Object) {
    userModuleOptions = {
      ...userModuleOptions,
      toolbar: {
        container: userModuleOptions.toolbar
      }
    };
  }
  const modules = merge_default({}, expandModuleConfig(quillModuleDefaults), expandModuleConfig(themeModuleDefaults), userModuleOptions);
  const config4 = {
    ...quillDefaults,
    ...omitUndefinedValuesFromOptions(themeDefaults),
    ...omitUndefinedValuesFromOptions(options)
  };
  let registry = options.registry;
  if (registry) {
    if (options.formats) {
      debug4.warn('Ignoring "formats" option because "registry" is specified');
    }
  } else {
    registry = options.formats ? createRegistryWithFormats_default(options.formats, config4.registry, debug4) : config4.registry;
  }
  return {
    ...config4,
    registry,
    container,
    theme,
    modules: Object.entries(modules).reduce((modulesWithDefaults, _ref2) => {
      let [name, value] = _ref2;
      if (!value) return modulesWithDefaults;
      const moduleClass = Quill.import(`modules/${name}`);
      if (moduleClass == null) {
        debug4.error(`Cannot load ${name} module. Are you sure you registered it?`);
        return modulesWithDefaults;
      }
      return {
        ...modulesWithDefaults,
        // @ts-expect-error
        [name]: merge_default({}, moduleClass.DEFAULTS || {}, value)
      };
    }, {}),
    bounds: resolveSelector(config4.bounds)
  };
}
function modify(modifier, source, index, shift) {
  if (!this.isEnabled() && source === emitter_default.sources.USER && !this.allowReadOnlyEdits) {
    return new import_quill_delta3.default();
  }
  let range = index == null ? null : this.getSelection();
  const oldDelta = this.editor.delta;
  const change = modifier();
  if (range != null) {
    if (index === true) {
      index = range.index;
    }
    if (shift == null) {
      range = shiftRange2(range, change, source);
    } else if (shift !== 0) {
      range = shiftRange2(range, index, shift, source);
    }
    this.setSelection(range, emitter_default.sources.SILENT);
  }
  if (change.length() > 0) {
    const args = [emitter_default.events.TEXT_CHANGE, change, oldDelta, source];
    this.emitter.emit(emitter_default.events.EDITOR_CHANGE, ...args);
    if (source !== emitter_default.sources.SILENT) {
      this.emitter.emit(...args);
    }
  }
  return change;
}
function overload(index, length, name, value, source) {
  let formats = {};
  if (typeof index.index === "number" && typeof index.length === "number") {
    if (typeof length !== "number") {
      source = value;
      value = name;
      name = length;
      length = index.length;
      index = index.index;
    } else {
      length = index.length;
      index = index.index;
    }
  } else if (typeof length !== "number") {
    source = value;
    value = name;
    name = length;
    length = 0;
  }
  if (typeof name === "object") {
    formats = name;
    source = value;
  } else if (typeof name === "string") {
    if (value != null) {
      formats[name] = value;
    } else {
      source = name;
    }
  }
  source = source || emitter_default.sources.API;
  return [index, length, formats, source];
}
function shiftRange2(range, index, lengthOrSource, source) {
  const length = typeof lengthOrSource === "number" ? lengthOrSource : 0;
  if (range == null) return null;
  let start;
  let end;
  if (index && typeof index.transformPosition === "function") {
    [start, end] = [range.index, range.index + range.length].map((pos) => (
      // @ts-expect-error -- TODO: add a better type guard around `index`
      index.transformPosition(pos, source !== emitter_default.sources.USER)
    ));
  } else {
    [start, end] = [range.index, range.index + range.length].map((pos) => {
      if (pos < index || pos === index && source === emitter_default.sources.USER) return pos;
      if (length >= 0) {
        return pos + length;
      }
      return Math.max(index, pos + length);
    });
  }
  return new Range(start, end - start);
}
var import_quill_delta3, debug4, globalRegistry, Quill;
var init_quill = __esm({
  "node_modules/quill/core/quill.js"() {
    init_lodash();
    init_parchment();
    import_quill_delta3 = __toESM(require_Delta(), 1);
    init_editor();
    init_emitter();
    init_instances();
    init_logger();
    init_module();
    init_selection();
    init_composition();
    init_theme();
    init_scrollRectIntoView();
    init_createRegistryWithFormats();
    debug4 = logger_default("quill");
    globalRegistry = new Registry();
    ParentBlot$1.uiClass = "ql-ui";
    Quill = class _Quill {
      static DEFAULTS = {
        bounds: null,
        modules: {
          clipboard: true,
          keyboard: true,
          history: true,
          uploader: true
        },
        placeholder: "",
        readOnly: false,
        registry: globalRegistry,
        theme: "default"
      };
      static events = emitter_default.events;
      static sources = emitter_default.sources;
      static version = false ? "dev" : "2.0.3";
      static imports = {
        delta: import_quill_delta3.default,
        parchment: parchment_exports,
        "core/module": module_default,
        "core/theme": theme_default
      };
      static debug(limit) {
        if (limit === true) {
          limit = "log";
        }
        logger_default.level(limit);
      }
      static find(node) {
        let bubble = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        return instances_default.get(node) || globalRegistry.find(node, bubble);
      }
      static import(name) {
        if (this.imports[name] == null) {
          debug4.error(`Cannot import ${name}. Are you sure it was registered?`);
        }
        return this.imports[name];
      }
      static register() {
        if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) !== "string") {
          const target = arguments.length <= 0 ? void 0 : arguments[0];
          const overwrite = !!(arguments.length <= 1 ? void 0 : arguments[1]);
          const name = "attrName" in target ? target.attrName : target.blotName;
          if (typeof name === "string") {
            this.register(`formats/${name}`, target, overwrite);
          } else {
            Object.keys(target).forEach((key) => {
              this.register(key, target[key], overwrite);
            });
          }
        } else {
          const path = arguments.length <= 0 ? void 0 : arguments[0];
          const target = arguments.length <= 1 ? void 0 : arguments[1];
          const overwrite = !!(arguments.length <= 2 ? void 0 : arguments[2]);
          if (this.imports[path] != null && !overwrite) {
            debug4.warn(`Overwriting ${path} with`, target);
          }
          this.imports[path] = target;
          if ((path.startsWith("blots/") || path.startsWith("formats/")) && target && typeof target !== "boolean" && target.blotName !== "abstract") {
            globalRegistry.register(target);
          }
          if (typeof target.register === "function") {
            target.register(globalRegistry);
          }
        }
      }
      constructor(container) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.options = expandConfig(container, options);
        this.container = this.options.container;
        if (this.container == null) {
          debug4.error("Invalid Quill container", container);
          return;
        }
        if (this.options.debug) {
          _Quill.debug(this.options.debug);
        }
        const html3 = this.container.innerHTML.trim();
        this.container.classList.add("ql-container");
        this.container.innerHTML = "";
        instances_default.set(this.container, this);
        this.root = this.addContainer("ql-editor");
        this.root.classList.add("ql-blank");
        this.emitter = new emitter_default();
        const scrollBlotName = ScrollBlot$1.blotName;
        const ScrollBlot2 = this.options.registry.query(scrollBlotName);
        if (!ScrollBlot2 || !("blotName" in ScrollBlot2)) {
          throw new Error(`Cannot initialize Quill without "${scrollBlotName}" blot`);
        }
        this.scroll = new ScrollBlot2(this.options.registry, this.root, {
          emitter: this.emitter
        });
        this.editor = new editor_default(this.scroll);
        this.selection = new selection_default(this.scroll, this.emitter);
        this.composition = new composition_default(this.scroll, this.emitter);
        this.theme = new this.options.theme(this, this.options);
        this.keyboard = this.theme.addModule("keyboard");
        this.clipboard = this.theme.addModule("clipboard");
        this.history = this.theme.addModule("history");
        this.uploader = this.theme.addModule("uploader");
        this.theme.addModule("input");
        this.theme.addModule("uiNode");
        this.theme.init();
        this.emitter.on(emitter_default.events.EDITOR_CHANGE, (type) => {
          if (type === emitter_default.events.TEXT_CHANGE) {
            this.root.classList.toggle("ql-blank", this.editor.isBlank());
          }
        });
        this.emitter.on(emitter_default.events.SCROLL_UPDATE, (source, mutations) => {
          const oldRange = this.selection.lastRange;
          const [newRange] = this.selection.getRange();
          const selectionInfo = oldRange && newRange ? {
            oldRange,
            newRange
          } : void 0;
          modify.call(this, () => this.editor.update(null, mutations, selectionInfo), source);
        });
        this.emitter.on(emitter_default.events.SCROLL_EMBED_UPDATE, (blot, delta) => {
          const oldRange = this.selection.lastRange;
          const [newRange] = this.selection.getRange();
          const selectionInfo = oldRange && newRange ? {
            oldRange,
            newRange
          } : void 0;
          modify.call(this, () => {
            const change = new import_quill_delta3.default().retain(blot.offset(this)).retain({
              [blot.statics.blotName]: delta
            });
            return this.editor.update(change, [], selectionInfo);
          }, _Quill.sources.USER);
        });
        if (html3) {
          const contents = this.clipboard.convert({
            html: `${html3}<p><br></p>`,
            text: "\n"
          });
          this.setContents(contents);
        }
        this.history.clear();
        if (this.options.placeholder) {
          this.root.setAttribute("data-placeholder", this.options.placeholder);
        }
        if (this.options.readOnly) {
          this.disable();
        }
        this.allowReadOnlyEdits = false;
      }
      addContainer(container) {
        let refNode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        if (typeof container === "string") {
          const className = container;
          container = document.createElement("div");
          container.classList.add(className);
        }
        this.container.insertBefore(container, refNode);
        return container;
      }
      blur() {
        this.selection.setRange(null);
      }
      deleteText(index, length, source) {
        [index, length, , source] = overload(index, length, source);
        return modify.call(this, () => {
          return this.editor.deleteText(index, length);
        }, source, index, -1 * length);
      }
      disable() {
        this.enable(false);
      }
      editReadOnly(modifier) {
        this.allowReadOnlyEdits = true;
        const value = modifier();
        this.allowReadOnlyEdits = false;
        return value;
      }
      enable() {
        let enabled = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        this.scroll.enable(enabled);
        this.container.classList.toggle("ql-disabled", !enabled);
      }
      focus() {
        let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.selection.focus();
        if (!options.preventScroll) {
          this.scrollSelectionIntoView();
        }
      }
      format(name, value) {
        let source = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : emitter_default.sources.API;
        return modify.call(this, () => {
          const range = this.getSelection(true);
          let change = new import_quill_delta3.default();
          if (range == null) return change;
          if (this.scroll.query(name, Scope.BLOCK)) {
            change = this.editor.formatLine(range.index, range.length, {
              [name]: value
            });
          } else if (range.length === 0) {
            this.selection.format(name, value);
            return change;
          } else {
            change = this.editor.formatText(range.index, range.length, {
              [name]: value
            });
          }
          this.setSelection(range, emitter_default.sources.SILENT);
          return change;
        }, source);
      }
      formatLine(index, length, name, value, source) {
        let formats;
        [index, length, formats, source] = overload(
          index,
          length,
          // @ts-expect-error
          name,
          value,
          source
        );
        return modify.call(this, () => {
          return this.editor.formatLine(index, length, formats);
        }, source, index, 0);
      }
      formatText(index, length, name, value, source) {
        let formats;
        [index, length, formats, source] = overload(
          // @ts-expect-error
          index,
          length,
          name,
          value,
          source
        );
        return modify.call(this, () => {
          return this.editor.formatText(index, length, formats);
        }, source, index, 0);
      }
      getBounds(index) {
        let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        let bounds = null;
        if (typeof index === "number") {
          bounds = this.selection.getBounds(index, length);
        } else {
          bounds = this.selection.getBounds(index.index, index.length);
        }
        if (!bounds) return null;
        const containerBounds = this.container.getBoundingClientRect();
        return {
          bottom: bounds.bottom - containerBounds.top,
          height: bounds.height,
          left: bounds.left - containerBounds.left,
          right: bounds.right - containerBounds.left,
          top: bounds.top - containerBounds.top,
          width: bounds.width
        };
      }
      getContents() {
        let index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - index;
        [index, length] = overload(index, length);
        return this.editor.getContents(index, length);
      }
      getFormat() {
        let index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(true);
        let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (typeof index === "number") {
          return this.editor.getFormat(index, length);
        }
        return this.editor.getFormat(index.index, index.length);
      }
      getIndex(blot) {
        return blot.offset(this.scroll);
      }
      getLength() {
        return this.scroll.length();
      }
      getLeaf(index) {
        return this.scroll.leaf(index);
      }
      getLine(index) {
        return this.scroll.line(index);
      }
      getLines() {
        let index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
        if (typeof index !== "number") {
          return this.scroll.lines(index.index, index.length);
        }
        return this.scroll.lines(index, length);
      }
      getModule(name) {
        return this.theme.modules[name];
      }
      getSelection() {
        let focus = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (focus) this.focus();
        this.update();
        return this.selection.getRange()[0];
      }
      getSemanticHTML() {
        let index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        let length = arguments.length > 1 ? arguments[1] : void 0;
        if (typeof index === "number") {
          length = length ?? this.getLength() - index;
        }
        [index, length] = overload(index, length);
        return this.editor.getHTML(index, length);
      }
      getText() {
        let index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        let length = arguments.length > 1 ? arguments[1] : void 0;
        if (typeof index === "number") {
          length = length ?? this.getLength() - index;
        }
        [index, length] = overload(index, length);
        return this.editor.getText(index, length);
      }
      hasFocus() {
        return this.selection.hasFocus();
      }
      insertEmbed(index, embed, value) {
        let source = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _Quill.sources.API;
        return modify.call(this, () => {
          return this.editor.insertEmbed(index, embed, value);
        }, source, index);
      }
      insertText(index, text, name, value, source) {
        let formats;
        [index, , formats, source] = overload(index, 0, name, value, source);
        return modify.call(this, () => {
          return this.editor.insertText(index, text, formats);
        }, source, index, text.length);
      }
      isEnabled() {
        return this.scroll.isEnabled();
      }
      off() {
        return this.emitter.off(...arguments);
      }
      on() {
        return this.emitter.on(...arguments);
      }
      once() {
        return this.emitter.once(...arguments);
      }
      removeFormat(index, length, source) {
        [index, length, , source] = overload(index, length, source);
        return modify.call(this, () => {
          return this.editor.removeFormat(index, length);
        }, source, index);
      }
      scrollRectIntoView(rect) {
        scrollRectIntoView_default(this.root, rect);
      }
      /**
       * @deprecated Use Quill#scrollSelectionIntoView() instead.
       */
      scrollIntoView() {
        console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead.");
        this.scrollSelectionIntoView();
      }
      /**
       * Scroll the current selection into the visible area.
       * If the selection is already visible, no scrolling will occur.
       */
      scrollSelectionIntoView() {
        const range = this.selection.lastRange;
        const bounds = range && this.selection.getBounds(range.index, range.length);
        if (bounds) {
          this.scrollRectIntoView(bounds);
        }
      }
      setContents(delta) {
        let source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : emitter_default.sources.API;
        return modify.call(this, () => {
          delta = new import_quill_delta3.default(delta);
          const length = this.getLength();
          const delete1 = this.editor.deleteText(0, length);
          const applied = this.editor.insertContents(0, delta);
          const delete2 = this.editor.deleteText(this.getLength() - 1, 1);
          return delete1.compose(applied).compose(delete2);
        }, source);
      }
      setSelection(index, length, source) {
        if (index == null) {
          this.selection.setRange(null, length || _Quill.sources.API);
        } else {
          [index, length, , source] = overload(index, length, source);
          this.selection.setRange(new Range(Math.max(0, index), length), source);
          if (source !== emitter_default.sources.SILENT) {
            this.scrollSelectionIntoView();
          }
        }
      }
      setText(text) {
        let source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : emitter_default.sources.API;
        const delta = new import_quill_delta3.default().insert(text);
        return this.setContents(delta, source);
      }
      update() {
        let source = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : emitter_default.sources.USER;
        const change = this.scroll.update(source);
        this.selection.update(source);
        return change;
      }
      updateContents(delta) {
        let source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : emitter_default.sources.API;
        return modify.call(this, () => {
          delta = new import_quill_delta3.default(delta);
          return this.editor.applyDelta(delta);
        }, source, true);
      }
    };
  }
});

// node_modules/quill/blots/container.js
var Container, container_default;
var init_container = __esm({
  "node_modules/quill/blots/container.js"() {
    init_parchment();
    Container = class extends ContainerBlot$1 {
    };
    container_default = Container;
  }
});

// node_modules/quill/blots/scroll.js
function isLine(blot) {
  return blot instanceof Block || blot instanceof BlockEmbed;
}
function isUpdatable(blot) {
  return typeof blot.updateContent === "function";
}
function insertInlineContents(parent, index, inlineContents) {
  inlineContents.reduce((index2, op) => {
    const length = import_quill_delta4.Op.length(op);
    let attributes = op.attributes || {};
    if (op.insert != null) {
      if (typeof op.insert === "string") {
        const text = op.insert;
        parent.insertAt(index2, text);
        const [leaf] = parent.descendant(LeafBlot$1, index2);
        const formats = bubbleFormats(leaf);
        attributes = import_quill_delta4.AttributeMap.diff(formats, attributes) || {};
      } else if (typeof op.insert === "object") {
        const key = Object.keys(op.insert)[0];
        if (key == null) return index2;
        parent.insertAt(index2, key, op.insert[key]);
        const isInlineEmbed = parent.scroll.query(key, Scope.INLINE) != null;
        if (isInlineEmbed) {
          const [leaf] = parent.descendant(LeafBlot$1, index2);
          const formats = bubbleFormats(leaf);
          attributes = import_quill_delta4.AttributeMap.diff(formats, attributes) || {};
        }
      }
    }
    Object.keys(attributes).forEach((key) => {
      parent.formatAt(index2, length, key, attributes[key]);
    });
    return index2 + length;
  }, index);
}
var import_quill_delta4, Scroll, scroll_default;
var init_scroll = __esm({
  "node_modules/quill/blots/scroll.js"() {
    init_parchment();
    import_quill_delta4 = __toESM(require_Delta(), 1);
    init_emitter();
    init_block();
    init_break();
    init_container();
    Scroll = class extends ScrollBlot$1 {
      static blotName = "scroll";
      static className = "ql-editor";
      static tagName = "DIV";
      static defaultChild = Block;
      static allowedChildren = [Block, BlockEmbed, container_default];
      constructor(registry, domNode, _ref) {
        let {
          emitter
        } = _ref;
        super(registry, domNode);
        this.emitter = emitter;
        this.batch = false;
        this.optimize();
        this.enable();
        this.domNode.addEventListener("dragstart", (e) => this.handleDragStart(e));
      }
      batchStart() {
        if (!Array.isArray(this.batch)) {
          this.batch = [];
        }
      }
      batchEnd() {
        if (!this.batch) return;
        const mutations = this.batch;
        this.batch = false;
        this.update(mutations);
      }
      emitMount(blot) {
        this.emitter.emit(emitter_default.events.SCROLL_BLOT_MOUNT, blot);
      }
      emitUnmount(blot) {
        this.emitter.emit(emitter_default.events.SCROLL_BLOT_UNMOUNT, blot);
      }
      emitEmbedUpdate(blot, change) {
        this.emitter.emit(emitter_default.events.SCROLL_EMBED_UPDATE, blot, change);
      }
      deleteAt(index, length) {
        const [first, offset] = this.line(index);
        const [last] = this.line(index + length);
        super.deleteAt(index, length);
        if (last != null && first !== last && offset > 0) {
          if (first instanceof BlockEmbed || last instanceof BlockEmbed) {
            this.optimize();
            return;
          }
          const ref = last.children.head instanceof break_default ? null : last.children.head;
          first.moveChildren(last, ref);
          first.remove();
        }
        this.optimize();
      }
      enable() {
        let enabled = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        this.domNode.setAttribute("contenteditable", enabled ? "true" : "false");
      }
      formatAt(index, length, format, value) {
        super.formatAt(index, length, format, value);
        this.optimize();
      }
      insertAt(index, value, def) {
        if (index >= this.length()) {
          if (def == null || this.scroll.query(value, Scope.BLOCK) == null) {
            const blot = this.scroll.create(this.statics.defaultChild.blotName);
            this.appendChild(blot);
            if (def == null && value.endsWith("\n")) {
              blot.insertAt(0, value.slice(0, -1), def);
            } else {
              blot.insertAt(0, value, def);
            }
          } else {
            const embed = this.scroll.create(value, def);
            this.appendChild(embed);
          }
        } else {
          super.insertAt(index, value, def);
        }
        this.optimize();
      }
      insertBefore(blot, ref) {
        if (blot.statics.scope === Scope.INLINE_BLOT) {
          const wrapper = this.scroll.create(this.statics.defaultChild.blotName);
          wrapper.appendChild(blot);
          super.insertBefore(wrapper, ref);
        } else {
          super.insertBefore(blot, ref);
        }
      }
      insertContents(index, delta) {
        const renderBlocks = this.deltaToRenderBlocks(delta.concat(new import_quill_delta4.default().insert("\n")));
        const last = renderBlocks.pop();
        if (last == null) return;
        this.batchStart();
        const first = renderBlocks.shift();
        if (first) {
          const shouldInsertNewlineChar = first.type === "block" && (first.delta.length() === 0 || !this.descendant(BlockEmbed, index)[0] && index < this.length());
          const delta2 = first.type === "block" ? first.delta : new import_quill_delta4.default().insert({
            [first.key]: first.value
          });
          insertInlineContents(this, index, delta2);
          const newlineCharLength = first.type === "block" ? 1 : 0;
          const lineEndIndex = index + delta2.length() + newlineCharLength;
          if (shouldInsertNewlineChar) {
            this.insertAt(lineEndIndex - 1, "\n");
          }
          const formats = bubbleFormats(this.line(index)[0]);
          const attributes = import_quill_delta4.AttributeMap.diff(formats, first.attributes) || {};
          Object.keys(attributes).forEach((name) => {
            this.formatAt(lineEndIndex - 1, 1, name, attributes[name]);
          });
          index = lineEndIndex;
        }
        let [refBlot, refBlotOffset] = this.children.find(index);
        if (renderBlocks.length) {
          if (refBlot) {
            refBlot = refBlot.split(refBlotOffset);
            refBlotOffset = 0;
          }
          renderBlocks.forEach((renderBlock) => {
            if (renderBlock.type === "block") {
              const block = this.createBlock(renderBlock.attributes, refBlot || void 0);
              insertInlineContents(block, 0, renderBlock.delta);
            } else {
              const blockEmbed = this.create(renderBlock.key, renderBlock.value);
              this.insertBefore(blockEmbed, refBlot || void 0);
              Object.keys(renderBlock.attributes).forEach((name) => {
                blockEmbed.format(name, renderBlock.attributes[name]);
              });
            }
          });
        }
        if (last.type === "block" && last.delta.length()) {
          const offset = refBlot ? refBlot.offset(refBlot.scroll) + refBlotOffset : this.length();
          insertInlineContents(this, offset, last.delta);
        }
        this.batchEnd();
        this.optimize();
      }
      isEnabled() {
        return this.domNode.getAttribute("contenteditable") === "true";
      }
      leaf(index) {
        const last = this.path(index).pop();
        if (!last) {
          return [null, -1];
        }
        const [blot, offset] = last;
        return blot instanceof LeafBlot$1 ? [blot, offset] : [null, -1];
      }
      line(index) {
        if (index === this.length()) {
          return this.line(index - 1);
        }
        return this.descendant(isLine, index);
      }
      lines() {
        let index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
        const getLines = (blot, blotIndex, blotLength) => {
          let lines = [];
          let lengthLeft = blotLength;
          blot.children.forEachAt(blotIndex, blotLength, (child, childIndex, childLength) => {
            if (isLine(child)) {
              lines.push(child);
            } else if (child instanceof ContainerBlot$1) {
              lines = lines.concat(getLines(child, childIndex, lengthLeft));
            }
            lengthLeft -= childLength;
          });
          return lines;
        };
        return getLines(this, index, length);
      }
      optimize() {
        let mutations = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        let context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this.batch) return;
        super.optimize(mutations, context);
        if (mutations.length > 0) {
          this.emitter.emit(emitter_default.events.SCROLL_OPTIMIZE, mutations, context);
        }
      }
      path(index) {
        return super.path(index).slice(1);
      }
      remove() {
      }
      update(mutations) {
        if (this.batch) {
          if (Array.isArray(mutations)) {
            this.batch = this.batch.concat(mutations);
          }
          return;
        }
        let source = emitter_default.sources.USER;
        if (typeof mutations === "string") {
          source = mutations;
        }
        if (!Array.isArray(mutations)) {
          mutations = this.observer.takeRecords();
        }
        mutations = mutations.filter((_ref2) => {
          let {
            target
          } = _ref2;
          const blot = this.find(target, true);
          return blot && !isUpdatable(blot);
        });
        if (mutations.length > 0) {
          this.emitter.emit(emitter_default.events.SCROLL_BEFORE_UPDATE, source, mutations);
        }
        super.update(mutations.concat([]));
        if (mutations.length > 0) {
          this.emitter.emit(emitter_default.events.SCROLL_UPDATE, source, mutations);
        }
      }
      updateEmbedAt(index, key, change) {
        const [blot] = this.descendant((b) => b instanceof BlockEmbed, index);
        if (blot && blot.statics.blotName === key && isUpdatable(blot)) {
          blot.updateContent(change);
        }
      }
      handleDragStart(event) {
        event.preventDefault();
      }
      deltaToRenderBlocks(delta) {
        const renderBlocks = [];
        let currentBlockDelta = new import_quill_delta4.default();
        delta.forEach((op) => {
          const insert = op?.insert;
          if (!insert) return;
          if (typeof insert === "string") {
            const splitted = insert.split("\n");
            splitted.slice(0, -1).forEach((text) => {
              currentBlockDelta.insert(text, op.attributes);
              renderBlocks.push({
                type: "block",
                delta: currentBlockDelta,
                attributes: op.attributes ?? {}
              });
              currentBlockDelta = new import_quill_delta4.default();
            });
            const last = splitted[splitted.length - 1];
            if (last) {
              currentBlockDelta.insert(last, op.attributes);
            }
          } else {
            const key = Object.keys(insert)[0];
            if (!key) return;
            if (this.query(key, Scope.INLINE)) {
              currentBlockDelta.push(op);
            } else {
              if (currentBlockDelta.length()) {
                renderBlocks.push({
                  type: "block",
                  delta: currentBlockDelta,
                  attributes: {}
                });
              }
              currentBlockDelta = new import_quill_delta4.default();
              renderBlocks.push({
                type: "blockEmbed",
                key,
                value: insert[key],
                attributes: op.attributes ?? {}
              });
            }
          }
        });
        if (currentBlockDelta.length()) {
          renderBlocks.push({
            type: "block",
            delta: currentBlockDelta,
            attributes: {}
          });
        }
        return renderBlocks;
      }
      createBlock(attributes, refBlot) {
        let blotName;
        const formats = {};
        Object.entries(attributes).forEach((_ref3) => {
          let [key, value] = _ref3;
          const isBlockBlot = this.query(key, Scope.BLOCK & Scope.BLOT) != null;
          if (isBlockBlot) {
            blotName = key;
          } else {
            formats[key] = value;
          }
        });
        const block = this.create(blotName || this.statics.defaultChild.blotName, blotName ? attributes[blotName] : void 0);
        this.insertBefore(block, refBlot || void 0);
        const length = block.length();
        Object.entries(formats).forEach((_ref4) => {
          let [key, value] = _ref4;
          block.formatAt(0, length, key, value);
        });
        return block;
      }
    };
    scroll_default = Scroll;
  }
});

// node_modules/quill/formats/align.js
var config, AlignAttribute, AlignClass, AlignStyle;
var init_align = __esm({
  "node_modules/quill/formats/align.js"() {
    init_parchment();
    config = {
      scope: Scope.BLOCK,
      whitelist: ["right", "center", "justify"]
    };
    AlignAttribute = new Attributor("align", "align", config);
    AlignClass = new ClassAttributor$1("align", "ql-align", config);
    AlignStyle = new StyleAttributor$1("align", "text-align", config);
  }
});

// node_modules/quill/formats/color.js
var ColorAttributor, ColorClass, ColorStyle;
var init_color = __esm({
  "node_modules/quill/formats/color.js"() {
    init_parchment();
    ColorAttributor = class extends StyleAttributor$1 {
      value(domNode) {
        let value = super.value(domNode);
        if (!value.startsWith("rgb(")) return value;
        value = value.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "");
        const hex = value.split(",").map((component) => `00${parseInt(component, 10).toString(16)}`.slice(-2)).join("");
        return `#${hex}`;
      }
    };
    ColorClass = new ClassAttributor$1("color", "ql-color", {
      scope: Scope.INLINE
    });
    ColorStyle = new ColorAttributor("color", "color", {
      scope: Scope.INLINE
    });
  }
});

// node_modules/quill/formats/background.js
var BackgroundClass, BackgroundStyle;
var init_background = __esm({
  "node_modules/quill/formats/background.js"() {
    init_parchment();
    init_color();
    BackgroundClass = new ClassAttributor$1("background", "ql-bg", {
      scope: Scope.INLINE
    });
    BackgroundStyle = new ColorAttributor("background", "background-color", {
      scope: Scope.INLINE
    });
  }
});

// node_modules/quill/formats/code.js
var CodeBlockContainer, CodeBlock, Code;
var init_code = __esm({
  "node_modules/quill/formats/code.js"() {
    init_block();
    init_break();
    init_cursor();
    init_inline();
    init_text();
    init_container();
    init_quill();
    CodeBlockContainer = class extends container_default {
      static create(value) {
        const domNode = super.create(value);
        domNode.setAttribute("spellcheck", "false");
        return domNode;
      }
      code(index, length) {
        return this.children.map((child) => child.length() <= 1 ? "" : child.domNode.innerText).join("\n").slice(index, index + length);
      }
      html(index, length) {
        return `<pre>
${escapeText(this.code(index, length))}
</pre>`;
      }
    };
    CodeBlock = class extends Block {
      static TAB = "  ";
      static register() {
        Quill.register(CodeBlockContainer);
      }
    };
    Code = class extends inline_default {
    };
    Code.blotName = "code";
    Code.tagName = "CODE";
    CodeBlock.blotName = "code-block";
    CodeBlock.className = "ql-code-block";
    CodeBlock.tagName = "DIV";
    CodeBlockContainer.blotName = "code-block-container";
    CodeBlockContainer.className = "ql-code-block-container";
    CodeBlockContainer.tagName = "DIV";
    CodeBlockContainer.allowedChildren = [CodeBlock];
    CodeBlock.allowedChildren = [Text2, break_default, cursor_default];
    CodeBlock.requiredContainer = CodeBlockContainer;
  }
});

// node_modules/quill/formats/direction.js
var config2, DirectionAttribute, DirectionClass, DirectionStyle;
var init_direction = __esm({
  "node_modules/quill/formats/direction.js"() {
    init_parchment();
    config2 = {
      scope: Scope.BLOCK,
      whitelist: ["rtl"]
    };
    DirectionAttribute = new Attributor("direction", "dir", config2);
    DirectionClass = new ClassAttributor$1("direction", "ql-direction", config2);
    DirectionStyle = new StyleAttributor$1("direction", "direction", config2);
  }
});

// node_modules/quill/formats/font.js
var config3, FontClass, FontStyleAttributor, FontStyle;
var init_font = __esm({
  "node_modules/quill/formats/font.js"() {
    init_parchment();
    config3 = {
      scope: Scope.INLINE,
      whitelist: ["serif", "monospace"]
    };
    FontClass = new ClassAttributor$1("font", "ql-font", config3);
    FontStyleAttributor = class extends StyleAttributor$1 {
      value(node) {
        return super.value(node).replace(/["']/g, "");
      }
    };
    FontStyle = new FontStyleAttributor("font", "font-family", config3);
  }
});

// node_modules/quill/formats/size.js
var SizeClass, SizeStyle;
var init_size = __esm({
  "node_modules/quill/formats/size.js"() {
    init_parchment();
    SizeClass = new ClassAttributor$1("size", "ql-size", {
      scope: Scope.INLINE,
      whitelist: ["small", "large", "huge"]
    });
    SizeStyle = new StyleAttributor$1("size", "font-size", {
      scope: Scope.INLINE,
      whitelist: ["10px", "18px", "32px"]
    });
  }
});

// node_modules/quill/modules/keyboard.js
function makeCodeBlockHandler(indent) {
  return {
    key: "Tab",
    shiftKey: !indent,
    format: {
      "code-block": true
    },
    handler(range, _ref) {
      let {
        event
      } = _ref;
      const CodeBlock2 = this.quill.scroll.query("code-block");
      const {
        TAB
      } = CodeBlock2;
      if (range.length === 0 && !event.shiftKey) {
        this.quill.insertText(range.index, TAB, Quill.sources.USER);
        this.quill.setSelection(range.index + TAB.length, Quill.sources.SILENT);
        return;
      }
      const lines = range.length === 0 ? this.quill.getLines(range.index, 1) : this.quill.getLines(range);
      let {
        index,
        length
      } = range;
      lines.forEach((line, i) => {
        if (indent) {
          line.insertAt(0, TAB);
          if (i === 0) {
            index += TAB.length;
          } else {
            length += TAB.length;
          }
        } else if (line.domNode.textContent.startsWith(TAB)) {
          line.deleteAt(0, TAB.length);
          if (i === 0) {
            index -= TAB.length;
          } else {
            length -= TAB.length;
          }
        }
      });
      this.quill.update(Quill.sources.USER);
      this.quill.setSelection(index, length, Quill.sources.SILENT);
    }
  };
}
function makeEmbedArrowHandler(key, shiftKey) {
  const where = key === "ArrowLeft" ? "prefix" : "suffix";
  return {
    key,
    shiftKey,
    altKey: null,
    [where]: /^$/,
    handler(range) {
      let {
        index
      } = range;
      if (key === "ArrowRight") {
        index += range.length + 1;
      }
      const [leaf] = this.quill.getLeaf(index);
      if (!(leaf instanceof EmbedBlot$1)) return true;
      if (key === "ArrowLeft") {
        if (shiftKey) {
          this.quill.setSelection(range.index - 1, range.length + 1, Quill.sources.USER);
        } else {
          this.quill.setSelection(range.index - 1, Quill.sources.USER);
        }
      } else if (shiftKey) {
        this.quill.setSelection(range.index, range.length + 1, Quill.sources.USER);
      } else {
        this.quill.setSelection(range.index + range.length + 1, Quill.sources.USER);
      }
      return false;
    }
  };
}
function makeFormatHandler(format) {
  return {
    key: format[0],
    shortKey: true,
    handler(range, context) {
      this.quill.format(format, !context.format[format], Quill.sources.USER);
    }
  };
}
function makeTableArrowHandler(up) {
  return {
    key: up ? "ArrowUp" : "ArrowDown",
    collapsed: true,
    format: ["table"],
    handler(range, context) {
      const key = up ? "prev" : "next";
      const cell = context.line;
      const targetRow = cell.parent[key];
      if (targetRow != null) {
        if (targetRow.statics.blotName === "table-row") {
          let targetCell = targetRow.children.head;
          let cur = cell;
          while (cur.prev != null) {
            cur = cur.prev;
            targetCell = targetCell.next;
          }
          const index = targetCell.offset(this.quill.scroll) + Math.min(context.offset, targetCell.length() - 1);
          this.quill.setSelection(index, 0, Quill.sources.USER);
        }
      } else {
        const targetLine = cell.table()[key];
        if (targetLine != null) {
          if (up) {
            this.quill.setSelection(targetLine.offset(this.quill.scroll) + targetLine.length() - 1, 0, Quill.sources.USER);
          } else {
            this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, Quill.sources.USER);
          }
        }
      }
      return false;
    }
  };
}
function normalize(binding) {
  if (typeof binding === "string" || typeof binding === "number") {
    binding = {
      key: binding
    };
  } else if (typeof binding === "object") {
    binding = cloneDeep_default(binding);
  } else {
    return null;
  }
  if (binding.shortKey) {
    binding[SHORTKEY] = binding.shortKey;
    delete binding.shortKey;
  }
  return binding;
}
function deleteRange(_ref2) {
  let {
    quill,
    range
  } = _ref2;
  const lines = quill.getLines(range);
  let formats = {};
  if (lines.length > 1) {
    const firstFormats = lines[0].formats();
    const lastFormats = lines[lines.length - 1].formats();
    formats = import_quill_delta5.AttributeMap.diff(lastFormats, firstFormats) || {};
  }
  quill.deleteText(range, Quill.sources.USER);
  if (Object.keys(formats).length > 0) {
    quill.formatLine(range.index, 1, formats, Quill.sources.USER);
  }
  quill.setSelection(range.index, Quill.sources.SILENT);
}
function tableSide(_table, row, cell, offset) {
  if (row.prev == null && row.next == null) {
    if (cell.prev == null && cell.next == null) {
      return offset === 0 ? -1 : 1;
    }
    return cell.prev == null ? -1 : 1;
  }
  if (row.prev == null) {
    return -1;
  }
  if (row.next == null) {
    return 1;
  }
  return null;
}
var import_quill_delta5, debug5, SHORTKEY, Keyboard, defaultOptions;
var init_keyboard = __esm({
  "node_modules/quill/modules/keyboard.js"() {
    init_lodash();
    import_quill_delta5 = __toESM(require_Delta(), 1);
    init_parchment();
    init_quill();
    init_logger();
    init_module();
    debug5 = logger_default("quill:keyboard");
    SHORTKEY = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
    Keyboard = class _Keyboard extends module_default {
      static match(evt, binding) {
        if (["altKey", "ctrlKey", "metaKey", "shiftKey"].some((key) => {
          return !!binding[key] !== evt[key] && binding[key] !== null;
        })) {
          return false;
        }
        return binding.key === evt.key || binding.key === evt.which;
      }
      constructor(quill, options) {
        super(quill, options);
        this.bindings = {};
        Object.keys(this.options.bindings).forEach((name) => {
          if (this.options.bindings[name]) {
            this.addBinding(this.options.bindings[name]);
          }
        });
        this.addBinding({
          key: "Enter",
          shiftKey: null
        }, this.handleEnter);
        this.addBinding({
          key: "Enter",
          metaKey: null,
          ctrlKey: null,
          altKey: null
        }, () => {
        });
        if (/Firefox/i.test(navigator.userAgent)) {
          this.addBinding({
            key: "Backspace"
          }, {
            collapsed: true
          }, this.handleBackspace);
          this.addBinding({
            key: "Delete"
          }, {
            collapsed: true
          }, this.handleDelete);
        } else {
          this.addBinding({
            key: "Backspace"
          }, {
            collapsed: true,
            prefix: /^.?$/
          }, this.handleBackspace);
          this.addBinding({
            key: "Delete"
          }, {
            collapsed: true,
            suffix: /^.?$/
          }, this.handleDelete);
        }
        this.addBinding({
          key: "Backspace"
        }, {
          collapsed: false
        }, this.handleDeleteRange);
        this.addBinding({
          key: "Delete"
        }, {
          collapsed: false
        }, this.handleDeleteRange);
        this.addBinding({
          key: "Backspace",
          altKey: null,
          ctrlKey: null,
          metaKey: null,
          shiftKey: null
        }, {
          collapsed: true,
          offset: 0
        }, this.handleBackspace);
        this.listen();
      }
      addBinding(keyBinding) {
        let context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        let handler = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const binding = normalize(keyBinding);
        if (binding == null) {
          debug5.warn("Attempted to add invalid keyboard binding", binding);
          return;
        }
        if (typeof context === "function") {
          context = {
            handler: context
          };
        }
        if (typeof handler === "function") {
          handler = {
            handler
          };
        }
        const keys2 = Array.isArray(binding.key) ? binding.key : [binding.key];
        keys2.forEach((key) => {
          const singleBinding = {
            ...binding,
            key,
            ...context,
            ...handler
          };
          this.bindings[singleBinding.key] = this.bindings[singleBinding.key] || [];
          this.bindings[singleBinding.key].push(singleBinding);
        });
      }
      listen() {
        this.quill.root.addEventListener("keydown", (evt) => {
          if (evt.defaultPrevented || evt.isComposing) return;
          const isComposing = evt.keyCode === 229 && (evt.key === "Enter" || evt.key === "Backspace");
          if (isComposing) return;
          const bindings = (this.bindings[evt.key] || []).concat(this.bindings[evt.which] || []);
          const matches = bindings.filter((binding) => _Keyboard.match(evt, binding));
          if (matches.length === 0) return;
          const blot = Quill.find(evt.target, true);
          if (blot && blot.scroll !== this.quill.scroll) return;
          const range = this.quill.getSelection();
          if (range == null || !this.quill.hasFocus()) return;
          const [line, offset] = this.quill.getLine(range.index);
          const [leafStart, offsetStart] = this.quill.getLeaf(range.index);
          const [leafEnd, offsetEnd] = range.length === 0 ? [leafStart, offsetStart] : this.quill.getLeaf(range.index + range.length);
          const prefixText = leafStart instanceof TextBlot$1 ? leafStart.value().slice(0, offsetStart) : "";
          const suffixText = leafEnd instanceof TextBlot$1 ? leafEnd.value().slice(offsetEnd) : "";
          const curContext = {
            collapsed: range.length === 0,
            // @ts-expect-error Fix me later
            empty: range.length === 0 && line.length() <= 1,
            format: this.quill.getFormat(range),
            line,
            offset,
            prefix: prefixText,
            suffix: suffixText,
            event: evt
          };
          const prevented = matches.some((binding) => {
            if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) {
              return false;
            }
            if (binding.empty != null && binding.empty !== curContext.empty) {
              return false;
            }
            if (binding.offset != null && binding.offset !== curContext.offset) {
              return false;
            }
            if (Array.isArray(binding.format)) {
              if (binding.format.every((name) => curContext.format[name] == null)) {
                return false;
              }
            } else if (typeof binding.format === "object") {
              if (!Object.keys(binding.format).every((name) => {
                if (binding.format[name] === true) return curContext.format[name] != null;
                if (binding.format[name] === false) return curContext.format[name] == null;
                return isEqual_default(binding.format[name], curContext.format[name]);
              })) {
                return false;
              }
            }
            if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) {
              return false;
            }
            if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) {
              return false;
            }
            return binding.handler.call(this, range, curContext, binding) !== true;
          });
          if (prevented) {
            evt.preventDefault();
          }
        });
      }
      handleBackspace(range, context) {
        const length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
        if (range.index === 0 || this.quill.getLength() <= 1) return;
        let formats = {};
        const [line] = this.quill.getLine(range.index);
        let delta = new import_quill_delta5.default().retain(range.index - length).delete(length);
        if (context.offset === 0) {
          const [prev] = this.quill.getLine(range.index - 1);
          if (prev) {
            const isPrevLineEmpty = prev.statics.blotName === "block" && prev.length() <= 1;
            if (!isPrevLineEmpty) {
              const curFormats = line.formats();
              const prevFormats = this.quill.getFormat(range.index - 1, 1);
              formats = import_quill_delta5.AttributeMap.diff(curFormats, prevFormats) || {};
              if (Object.keys(formats).length > 0) {
                const formatDelta = new import_quill_delta5.default().retain(range.index + line.length() - 2).retain(1, formats);
                delta = delta.compose(formatDelta);
              }
            }
          }
        }
        this.quill.updateContents(delta, Quill.sources.USER);
        this.quill.focus();
      }
      handleDelete(range, context) {
        const length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
        if (range.index >= this.quill.getLength() - length) return;
        let formats = {};
        const [line] = this.quill.getLine(range.index);
        let delta = new import_quill_delta5.default().retain(range.index).delete(length);
        if (context.offset >= line.length() - 1) {
          const [next] = this.quill.getLine(range.index + 1);
          if (next) {
            const curFormats = line.formats();
            const nextFormats = this.quill.getFormat(range.index, 1);
            formats = import_quill_delta5.AttributeMap.diff(curFormats, nextFormats) || {};
            if (Object.keys(formats).length > 0) {
              delta = delta.retain(next.length() - 1).retain(1, formats);
            }
          }
        }
        this.quill.updateContents(delta, Quill.sources.USER);
        this.quill.focus();
      }
      handleDeleteRange(range) {
        deleteRange({
          range,
          quill: this.quill
        });
        this.quill.focus();
      }
      handleEnter(range, context) {
        const lineFormats = Object.keys(context.format).reduce((formats, format) => {
          if (this.quill.scroll.query(format, Scope.BLOCK) && !Array.isArray(context.format[format])) {
            formats[format] = context.format[format];
          }
          return formats;
        }, {});
        const delta = new import_quill_delta5.default().retain(range.index).delete(range.length).insert("\n", lineFormats);
        this.quill.updateContents(delta, Quill.sources.USER);
        this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
        this.quill.focus();
      }
    };
    defaultOptions = {
      bindings: {
        bold: makeFormatHandler("bold"),
        italic: makeFormatHandler("italic"),
        underline: makeFormatHandler("underline"),
        indent: {
          // highlight tab or tab at beginning of list, indent or blockquote
          key: "Tab",
          format: ["blockquote", "indent", "list"],
          handler(range, context) {
            if (context.collapsed && context.offset !== 0) return true;
            this.quill.format("indent", "+1", Quill.sources.USER);
            return false;
          }
        },
        outdent: {
          key: "Tab",
          shiftKey: true,
          format: ["blockquote", "indent", "list"],
          // highlight tab or tab at beginning of list, indent or blockquote
          handler(range, context) {
            if (context.collapsed && context.offset !== 0) return true;
            this.quill.format("indent", "-1", Quill.sources.USER);
            return false;
          }
        },
        "outdent backspace": {
          key: "Backspace",
          collapsed: true,
          shiftKey: null,
          metaKey: null,
          ctrlKey: null,
          altKey: null,
          format: ["indent", "list"],
          offset: 0,
          handler(range, context) {
            if (context.format.indent != null) {
              this.quill.format("indent", "-1", Quill.sources.USER);
            } else if (context.format.list != null) {
              this.quill.format("list", false, Quill.sources.USER);
            }
          }
        },
        "indent code-block": makeCodeBlockHandler(true),
        "outdent code-block": makeCodeBlockHandler(false),
        "remove tab": {
          key: "Tab",
          shiftKey: true,
          collapsed: true,
          prefix: /\t$/,
          handler(range) {
            this.quill.deleteText(range.index - 1, 1, Quill.sources.USER);
          }
        },
        tab: {
          key: "Tab",
          handler(range, context) {
            if (context.format.table) return true;
            this.quill.history.cutoff();
            const delta = new import_quill_delta5.default().retain(range.index).delete(range.length).insert("	");
            this.quill.updateContents(delta, Quill.sources.USER);
            this.quill.history.cutoff();
            this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
            return false;
          }
        },
        "blockquote empty enter": {
          key: "Enter",
          collapsed: true,
          format: ["blockquote"],
          empty: true,
          handler() {
            this.quill.format("blockquote", false, Quill.sources.USER);
          }
        },
        "list empty enter": {
          key: "Enter",
          collapsed: true,
          format: ["list"],
          empty: true,
          handler(range, context) {
            const formats = {
              list: false
            };
            if (context.format.indent) {
              formats.indent = false;
            }
            this.quill.formatLine(range.index, range.length, formats, Quill.sources.USER);
          }
        },
        "checklist enter": {
          key: "Enter",
          collapsed: true,
          format: {
            list: "checked"
          },
          handler(range) {
            const [line, offset] = this.quill.getLine(range.index);
            const formats = {
              // @ts-expect-error Fix me later
              ...line.formats(),
              list: "checked"
            };
            const delta = new import_quill_delta5.default().retain(range.index).insert("\n", formats).retain(line.length() - offset - 1).retain(1, {
              list: "unchecked"
            });
            this.quill.updateContents(delta, Quill.sources.USER);
            this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
            this.quill.scrollSelectionIntoView();
          }
        },
        "header enter": {
          key: "Enter",
          collapsed: true,
          format: ["header"],
          suffix: /^$/,
          handler(range, context) {
            const [line, offset] = this.quill.getLine(range.index);
            const delta = new import_quill_delta5.default().retain(range.index).insert("\n", context.format).retain(line.length() - offset - 1).retain(1, {
              header: null
            });
            this.quill.updateContents(delta, Quill.sources.USER);
            this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
            this.quill.scrollSelectionIntoView();
          }
        },
        "table backspace": {
          key: "Backspace",
          format: ["table"],
          collapsed: true,
          offset: 0,
          handler() {
          }
        },
        "table delete": {
          key: "Delete",
          format: ["table"],
          collapsed: true,
          suffix: /^$/,
          handler() {
          }
        },
        "table enter": {
          key: "Enter",
          shiftKey: null,
          format: ["table"],
          handler(range) {
            const module2 = this.quill.getModule("table");
            if (module2) {
              const [table, row, cell, offset] = module2.getTable(range);
              const shift = tableSide(table, row, cell, offset);
              if (shift == null) return;
              let index = table.offset();
              if (shift < 0) {
                const delta = new import_quill_delta5.default().retain(index).insert("\n");
                this.quill.updateContents(delta, Quill.sources.USER);
                this.quill.setSelection(range.index + 1, range.length, Quill.sources.SILENT);
              } else if (shift > 0) {
                index += table.length();
                const delta = new import_quill_delta5.default().retain(index).insert("\n");
                this.quill.updateContents(delta, Quill.sources.USER);
                this.quill.setSelection(index, Quill.sources.USER);
              }
            }
          }
        },
        "table tab": {
          key: "Tab",
          shiftKey: null,
          format: ["table"],
          handler(range, context) {
            const {
              event,
              line: cell
            } = context;
            const offset = cell.offset(this.quill.scroll);
            if (event.shiftKey) {
              this.quill.setSelection(offset - 1, Quill.sources.USER);
            } else {
              this.quill.setSelection(offset + cell.length(), Quill.sources.USER);
            }
          }
        },
        "list autofill": {
          key: " ",
          shiftKey: null,
          collapsed: true,
          format: {
            "code-block": false,
            blockquote: false,
            table: false
          },
          prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
          handler(range, context) {
            if (this.quill.scroll.query("list") == null) return true;
            const {
              length
            } = context.prefix;
            const [line, offset] = this.quill.getLine(range.index);
            if (offset > length) return true;
            let value;
            switch (context.prefix.trim()) {
              case "[]":
              case "[ ]":
                value = "unchecked";
                break;
              case "[x]":
                value = "checked";
                break;
              case "-":
              case "*":
                value = "bullet";
                break;
              default:
                value = "ordered";
            }
            this.quill.insertText(range.index, " ", Quill.sources.USER);
            this.quill.history.cutoff();
            const delta = new import_quill_delta5.default().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, {
              list: value
            });
            this.quill.updateContents(delta, Quill.sources.USER);
            this.quill.history.cutoff();
            this.quill.setSelection(range.index - length, Quill.sources.SILENT);
            return false;
          }
        },
        "code exit": {
          key: "Enter",
          collapsed: true,
          format: ["code-block"],
          prefix: /^$/,
          suffix: /^\s*$/,
          handler(range) {
            const [line, offset] = this.quill.getLine(range.index);
            let numLines = 2;
            let cur = line;
            while (cur != null && cur.length() <= 1 && cur.formats()["code-block"]) {
              cur = cur.prev;
              numLines -= 1;
              if (numLines <= 0) {
                const delta = new import_quill_delta5.default().retain(range.index + line.length() - offset - 2).retain(1, {
                  "code-block": null
                }).delete(1);
                this.quill.updateContents(delta, Quill.sources.USER);
                this.quill.setSelection(range.index - 1, Quill.sources.SILENT);
                return false;
              }
            }
            return true;
          }
        },
        "embed left": makeEmbedArrowHandler("ArrowLeft", false),
        "embed left shift": makeEmbedArrowHandler("ArrowLeft", true),
        "embed right": makeEmbedArrowHandler("ArrowRight", false),
        "embed right shift": makeEmbedArrowHandler("ArrowRight", true),
        "table down": makeTableArrowHandler(false),
        "table up": makeTableArrowHandler(true)
      }
    };
    Keyboard.DEFAULTS = defaultOptions;
  }
});

// node_modules/quill/modules/normalizeExternalHTML/normalizers/googleDocs.js
function normalize2(doc) {
  if (doc.querySelector('[id^="docs-internal-guid-"]')) {
    normalizeFontWeight(doc);
    normalizeEmptyLines(doc);
  }
}
var normalWeightRegexp, blockTagNames, isBlockElement, normalizeEmptyLines, normalizeFontWeight;
var init_googleDocs = __esm({
  "node_modules/quill/modules/normalizeExternalHTML/normalizers/googleDocs.js"() {
    normalWeightRegexp = /font-weight:\s*normal/;
    blockTagNames = ["P", "OL", "UL"];
    isBlockElement = (element) => {
      return element && blockTagNames.includes(element.tagName);
    };
    normalizeEmptyLines = (doc) => {
      Array.from(doc.querySelectorAll("br")).filter((br) => isBlockElement(br.previousElementSibling) && isBlockElement(br.nextElementSibling)).forEach((br) => {
        br.parentNode?.removeChild(br);
      });
    };
    normalizeFontWeight = (doc) => {
      Array.from(doc.querySelectorAll('b[style*="font-weight"]')).filter((node) => node.getAttribute("style")?.match(normalWeightRegexp)).forEach((node) => {
        const fragment5 = doc.createDocumentFragment();
        fragment5.append(...node.childNodes);
        node.parentNode?.replaceChild(fragment5, node);
      });
    };
  }
});

// node_modules/quill/modules/normalizeExternalHTML/normalizers/msWord.js
function normalize3(doc) {
  if (doc.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word") {
    normalizeListItem(doc);
  }
}
var ignoreRegexp, idRegexp, indentRegexp, parseListItem, normalizeListItem;
var init_msWord = __esm({
  "node_modules/quill/modules/normalizeExternalHTML/normalizers/msWord.js"() {
    ignoreRegexp = /\bmso-list:[^;]*ignore/i;
    idRegexp = /\bmso-list:[^;]*\bl(\d+)/i;
    indentRegexp = /\bmso-list:[^;]*\blevel(\d+)/i;
    parseListItem = (element, html3) => {
      const style = element.getAttribute("style");
      const idMatch = style?.match(idRegexp);
      if (!idMatch) {
        return null;
      }
      const id2 = Number(idMatch[1]);
      const indentMatch = style?.match(indentRegexp);
      const indent = indentMatch ? Number(indentMatch[1]) : 1;
      const typeRegexp = new RegExp(`@list l${id2}:level${indent}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i");
      const typeMatch = html3.match(typeRegexp);
      const type = typeMatch && typeMatch[1] === "bullet" ? "bullet" : "ordered";
      return {
        id: id2,
        indent,
        type,
        element
      };
    };
    normalizeListItem = (doc) => {
      const msoList = Array.from(doc.querySelectorAll("[style*=mso-list]"));
      const ignored = [];
      const others = [];
      msoList.forEach((node) => {
        const shouldIgnore = (node.getAttribute("style") || "").match(ignoreRegexp);
        if (shouldIgnore) {
          ignored.push(node);
        } else {
          others.push(node);
        }
      });
      ignored.forEach((node) => node.parentNode?.removeChild(node));
      const html3 = doc.documentElement.innerHTML;
      const listItems = others.map((element) => parseListItem(element, html3)).filter((parsed) => parsed);
      while (listItems.length) {
        const childListItems = [];
        let current = listItems.shift();
        while (current) {
          childListItems.push(current);
          current = listItems.length && listItems[0]?.element === current.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
          listItems[0].id === current.id ? listItems.shift() : null;
        }
        const ul = document.createElement("ul");
        childListItems.forEach((listItem) => {
          const li = document.createElement("li");
          li.setAttribute("data-list", listItem.type);
          if (listItem.indent > 1) {
            li.setAttribute("class", `ql-indent-${listItem.indent - 1}`);
          }
          li.innerHTML = listItem.element.innerHTML;
          ul.appendChild(li);
        });
        const element = childListItems[0]?.element;
        const {
          parentNode
        } = element ?? {};
        if (element) {
          parentNode?.replaceChild(ul, element);
        }
        childListItems.slice(1).forEach((_ref) => {
          let {
            element: e
          } = _ref;
          parentNode?.removeChild(e);
        });
      }
    };
  }
});

// node_modules/quill/modules/normalizeExternalHTML/index.js
var NORMALIZERS, normalizeExternalHTML, normalizeExternalHTML_default;
var init_normalizeExternalHTML = __esm({
  "node_modules/quill/modules/normalizeExternalHTML/index.js"() {
    init_googleDocs();
    init_msWord();
    NORMALIZERS = [normalize3, normalize2];
    normalizeExternalHTML = (doc) => {
      if (doc.documentElement) {
        NORMALIZERS.forEach((normalize4) => {
          normalize4(doc);
        });
      }
    };
    normalizeExternalHTML_default = normalizeExternalHTML;
  }
});

// node_modules/quill/modules/clipboard.js
function applyFormat(delta, format, value, scroll) {
  if (!scroll.query(format)) {
    return delta;
  }
  return delta.reduce((newDelta, op) => {
    if (!op.insert) return newDelta;
    if (op.attributes && op.attributes[format]) {
      return newDelta.push(op);
    }
    const formats = value ? {
      [format]: value
    } : {};
    return newDelta.insert(op.insert, {
      ...formats,
      ...op.attributes
    });
  }, new import_quill_delta6.default());
}
function deltaEndsWith(delta, text) {
  let endText = "";
  for (let i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
    const op = delta.ops[i];
    if (typeof op.insert !== "string") break;
    endText = op.insert + endText;
  }
  return endText.slice(-1 * text.length) === text;
}
function isLine2(node, scroll) {
  if (!(node instanceof Element)) return false;
  const match2 = scroll.query(node);
  if (match2 && match2.prototype instanceof EmbedBlot$1) return false;
  return ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(node.tagName.toLowerCase());
}
function isBetweenInlineElements(node, scroll) {
  return node.previousElementSibling && node.nextElementSibling && !isLine2(node.previousElementSibling, scroll) && !isLine2(node.nextElementSibling, scroll);
}
function isPre(node) {
  if (node == null) return false;
  if (!preNodes.has(node)) {
    if (node.tagName === "PRE") {
      preNodes.set(node, true);
    } else {
      preNodes.set(node, isPre(node.parentNode));
    }
  }
  return preNodes.get(node);
}
function traverse(scroll, node, elementMatchers, textMatchers, nodeMatches) {
  if (node.nodeType === node.TEXT_NODE) {
    return textMatchers.reduce((delta, matcher) => {
      return matcher(node, delta, scroll);
    }, new import_quill_delta6.default());
  }
  if (node.nodeType === node.ELEMENT_NODE) {
    return Array.from(node.childNodes || []).reduce((delta, childNode) => {
      let childrenDelta = traverse(scroll, childNode, elementMatchers, textMatchers, nodeMatches);
      if (childNode.nodeType === node.ELEMENT_NODE) {
        childrenDelta = elementMatchers.reduce((reducedDelta, matcher) => {
          return matcher(childNode, reducedDelta, scroll);
        }, childrenDelta);
        childrenDelta = (nodeMatches.get(childNode) || []).reduce((reducedDelta, matcher) => {
          return matcher(childNode, reducedDelta, scroll);
        }, childrenDelta);
      }
      return delta.concat(childrenDelta);
    }, new import_quill_delta6.default());
  }
  return new import_quill_delta6.default();
}
function createMatchAlias(format) {
  return (_node, delta, scroll) => {
    return applyFormat(delta, format, true, scroll);
  };
}
function matchAttributor(node, delta, scroll) {
  const attributes = Attributor.keys(node);
  const classes = ClassAttributor$1.keys(node);
  const styles = StyleAttributor$1.keys(node);
  const formats = {};
  attributes.concat(classes).concat(styles).forEach((name) => {
    let attr = scroll.query(name, Scope.ATTRIBUTE);
    if (attr != null) {
      formats[attr.attrName] = attr.value(node);
      if (formats[attr.attrName]) return;
    }
    attr = ATTRIBUTE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      formats[attr.attrName] = attr.value(node) || void 0;
    }
    attr = STYLE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      attr = STYLE_ATTRIBUTORS[name];
      formats[attr.attrName] = attr.value(node) || void 0;
    }
  });
  return Object.entries(formats).reduce((newDelta, _ref4) => {
    let [name, value] = _ref4;
    return applyFormat(newDelta, name, value, scroll);
  }, delta);
}
function matchBlot(node, delta, scroll) {
  const match2 = scroll.query(node);
  if (match2 == null) return delta;
  if (match2.prototype instanceof EmbedBlot$1) {
    const embed = {};
    const value = match2.value(node);
    if (value != null) {
      embed[match2.blotName] = value;
      return new import_quill_delta6.default().insert(embed, match2.formats(node, scroll));
    }
  } else {
    if (match2.prototype instanceof BlockBlot$1 && !deltaEndsWith(delta, "\n")) {
      delta.insert("\n");
    }
    if ("blotName" in match2 && "formats" in match2 && typeof match2.formats === "function") {
      return applyFormat(delta, match2.blotName, match2.formats(node, scroll), scroll);
    }
  }
  return delta;
}
function matchBreak(node, delta) {
  if (!deltaEndsWith(delta, "\n")) {
    delta.insert("\n");
  }
  return delta;
}
function matchCodeBlock(node, delta, scroll) {
  const match2 = scroll.query("code-block");
  const language = match2 && "formats" in match2 && typeof match2.formats === "function" ? match2.formats(node, scroll) : true;
  return applyFormat(delta, "code-block", language, scroll);
}
function matchIgnore() {
  return new import_quill_delta6.default();
}
function matchIndent(node, delta, scroll) {
  const match2 = scroll.query(node);
  if (match2 == null || // @ts-expect-error
  match2.blotName !== "list" || !deltaEndsWith(delta, "\n")) {
    return delta;
  }
  let indent = -1;
  let parent = node.parentNode;
  while (parent != null) {
    if (["OL", "UL"].includes(parent.tagName)) {
      indent += 1;
    }
    parent = parent.parentNode;
  }
  if (indent <= 0) return delta;
  return delta.reduce((composed, op) => {
    if (!op.insert) return composed;
    if (op.attributes && typeof op.attributes.indent === "number") {
      return composed.push(op);
    }
    return composed.insert(op.insert, {
      indent,
      ...op.attributes || {}
    });
  }, new import_quill_delta6.default());
}
function matchList(node, delta, scroll) {
  const element = node;
  let list = element.tagName === "OL" ? "ordered" : "bullet";
  const checkedAttr = element.getAttribute("data-checked");
  if (checkedAttr) {
    list = checkedAttr === "true" ? "checked" : "unchecked";
  }
  return applyFormat(delta, "list", list, scroll);
}
function matchNewline(node, delta, scroll) {
  if (!deltaEndsWith(delta, "\n")) {
    if (isLine2(node, scroll) && (node.childNodes.length > 0 || node instanceof HTMLParagraphElement)) {
      return delta.insert("\n");
    }
    if (delta.length() > 0 && node.nextSibling) {
      let nextSibling = node.nextSibling;
      while (nextSibling != null) {
        if (isLine2(nextSibling, scroll)) {
          return delta.insert("\n");
        }
        const match2 = scroll.query(nextSibling);
        if (match2 && match2.prototype instanceof BlockEmbed) {
          return delta.insert("\n");
        }
        nextSibling = nextSibling.firstChild;
      }
    }
  }
  return delta;
}
function matchStyles(node, delta, scroll) {
  const formats = {};
  const style = node.style || {};
  if (style.fontStyle === "italic") {
    formats.italic = true;
  }
  if (style.textDecoration === "underline") {
    formats.underline = true;
  }
  if (style.textDecoration === "line-through") {
    formats.strike = true;
  }
  if (style.fontWeight?.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(style.fontWeight, 10) >= 700) {
    formats.bold = true;
  }
  delta = Object.entries(formats).reduce((newDelta, _ref5) => {
    let [name, value] = _ref5;
    return applyFormat(newDelta, name, value, scroll);
  }, delta);
  if (parseFloat(style.textIndent || 0) > 0) {
    return new import_quill_delta6.default().insert("	").concat(delta);
  }
  return delta;
}
function matchTable(node, delta, scroll) {
  const table = node.parentElement?.tagName === "TABLE" ? node.parentElement : node.parentElement?.parentElement;
  if (table != null) {
    const rows = Array.from(table.querySelectorAll("tr"));
    const row = rows.indexOf(node) + 1;
    return applyFormat(delta, "table", row, scroll);
  }
  return delta;
}
function matchText(node, delta, scroll) {
  let text = node.data;
  if (node.parentElement?.tagName === "O:P") {
    return delta.insert(text.trim());
  }
  if (!isPre(node)) {
    if (text.trim().length === 0 && text.includes("\n") && !isBetweenInlineElements(node, scroll)) {
      return delta;
    }
    text = text.replace(/[^\S\u00a0]/g, " ");
    text = text.replace(/ {2,}/g, " ");
    if (node.previousSibling == null && node.parentElement != null && isLine2(node.parentElement, scroll) || node.previousSibling instanceof Element && isLine2(node.previousSibling, scroll)) {
      text = text.replace(/^ /, "");
    }
    if (node.nextSibling == null && node.parentElement != null && isLine2(node.parentElement, scroll) || node.nextSibling instanceof Element && isLine2(node.nextSibling, scroll)) {
      text = text.replace(/ $/, "");
    }
    text = text.replaceAll("\xA0", " ");
  }
  return delta.insert(text);
}
var import_quill_delta6, debug6, CLIPBOARD_CONFIG, ATTRIBUTE_ATTRIBUTORS, STYLE_ATTRIBUTORS, Clipboard, preNodes;
var init_clipboard = __esm({
  "node_modules/quill/modules/clipboard.js"() {
    init_parchment();
    import_quill_delta6 = __toESM(require_Delta(), 1);
    init_block();
    init_logger();
    init_module();
    init_quill();
    init_align();
    init_background();
    init_code();
    init_color();
    init_direction();
    init_font();
    init_size();
    init_keyboard();
    init_normalizeExternalHTML();
    debug6 = logger_default("quill:clipboard");
    CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ["br", matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ["li", matchIndent], ["ol, ul", matchList], ["pre", matchCodeBlock], ["tr", matchTable], ["b", createMatchAlias("bold")], ["i", createMatchAlias("italic")], ["strike", createMatchAlias("strike")], ["style", matchIgnore]];
    ATTRIBUTE_ATTRIBUTORS = [AlignAttribute, DirectionAttribute].reduce((memo, attr) => {
      memo[attr.keyName] = attr;
      return memo;
    }, {});
    STYLE_ATTRIBUTORS = [AlignStyle, BackgroundStyle, ColorStyle, DirectionStyle, FontStyle, SizeStyle].reduce((memo, attr) => {
      memo[attr.keyName] = attr;
      return memo;
    }, {});
    Clipboard = class extends module_default {
      static DEFAULTS = {
        matchers: []
      };
      constructor(quill, options) {
        super(quill, options);
        this.quill.root.addEventListener("copy", (e) => this.onCaptureCopy(e, false));
        this.quill.root.addEventListener("cut", (e) => this.onCaptureCopy(e, true));
        this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this));
        this.matchers = [];
        CLIPBOARD_CONFIG.concat(this.options.matchers ?? []).forEach((_ref) => {
          let [selector, matcher] = _ref;
          this.addMatcher(selector, matcher);
        });
      }
      addMatcher(selector, matcher) {
        this.matchers.push([selector, matcher]);
      }
      convert(_ref2) {
        let {
          html: html3,
          text
        } = _ref2;
        let formats = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (formats[CodeBlock.blotName]) {
          return new import_quill_delta6.default().insert(text || "", {
            [CodeBlock.blotName]: formats[CodeBlock.blotName]
          });
        }
        if (!html3) {
          return new import_quill_delta6.default().insert(text || "", formats);
        }
        const delta = this.convertHTML(html3);
        if (deltaEndsWith(delta, "\n") && (delta.ops[delta.ops.length - 1].attributes == null || formats.table)) {
          return delta.compose(new import_quill_delta6.default().retain(delta.length() - 1).delete(1));
        }
        return delta;
      }
      normalizeHTML(doc) {
        normalizeExternalHTML_default(doc);
      }
      convertHTML(html3) {
        const doc = new DOMParser().parseFromString(html3, "text/html");
        this.normalizeHTML(doc);
        const container = doc.body;
        const nodeMatches = /* @__PURE__ */ new WeakMap();
        const [elementMatchers, textMatchers] = this.prepareMatching(container, nodeMatches);
        return traverse(this.quill.scroll, container, elementMatchers, textMatchers, nodeMatches);
      }
      dangerouslyPasteHTML(index, html3) {
        let source = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Quill.sources.API;
        if (typeof index === "string") {
          const delta = this.convert({
            html: index,
            text: ""
          });
          this.quill.setContents(delta, html3);
          this.quill.setSelection(0, Quill.sources.SILENT);
        } else {
          const paste = this.convert({
            html: html3,
            text: ""
          });
          this.quill.updateContents(new import_quill_delta6.default().retain(index).concat(paste), source);
          this.quill.setSelection(index + paste.length(), Quill.sources.SILENT);
        }
      }
      onCaptureCopy(e) {
        let isCut = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (e.defaultPrevented) return;
        e.preventDefault();
        const [range] = this.quill.selection.getRange();
        if (range == null) return;
        const {
          html: html3,
          text
        } = this.onCopy(range, isCut);
        e.clipboardData?.setData("text/plain", text);
        e.clipboardData?.setData("text/html", html3);
        if (isCut) {
          deleteRange({
            range,
            quill: this.quill
          });
        }
      }
      /*
       * https://www.iana.org/assignments/media-types/text/uri-list
       */
      normalizeURIList(urlList) {
        return urlList.split(/\r?\n/).filter((url) => url[0] !== "#").join("\n");
      }
      onCapturePaste(e) {
        if (e.defaultPrevented || !this.quill.isEnabled()) return;
        e.preventDefault();
        const range = this.quill.getSelection(true);
        if (range == null) return;
        const html3 = e.clipboardData?.getData("text/html");
        let text = e.clipboardData?.getData("text/plain");
        if (!html3 && !text) {
          const urlList = e.clipboardData?.getData("text/uri-list");
          if (urlList) {
            text = this.normalizeURIList(urlList);
          }
        }
        const files = Array.from(e.clipboardData?.files || []);
        if (!html3 && files.length > 0) {
          this.quill.uploader.upload(range, files);
          return;
        }
        if (html3 && files.length > 0) {
          const doc = new DOMParser().parseFromString(html3, "text/html");
          if (doc.body.childElementCount === 1 && doc.body.firstElementChild?.tagName === "IMG") {
            this.quill.uploader.upload(range, files);
            return;
          }
        }
        this.onPaste(range, {
          html: html3,
          text
        });
      }
      onCopy(range) {
        const text = this.quill.getText(range);
        const html3 = this.quill.getSemanticHTML(range);
        return {
          html: html3,
          text
        };
      }
      onPaste(range, _ref3) {
        let {
          text,
          html: html3
        } = _ref3;
        const formats = this.quill.getFormat(range.index);
        const pastedDelta = this.convert({
          text,
          html: html3
        }, formats);
        debug6.log("onPaste", pastedDelta, {
          text,
          html: html3
        });
        const delta = new import_quill_delta6.default().retain(range.index).delete(range.length).concat(pastedDelta);
        this.quill.updateContents(delta, Quill.sources.USER);
        this.quill.setSelection(delta.length() - range.length, Quill.sources.SILENT);
        this.quill.scrollSelectionIntoView();
      }
      prepareMatching(container, nodeMatches) {
        const elementMatchers = [];
        const textMatchers = [];
        this.matchers.forEach((pair) => {
          const [selector, matcher] = pair;
          switch (selector) {
            case Node.TEXT_NODE:
              textMatchers.push(matcher);
              break;
            case Node.ELEMENT_NODE:
              elementMatchers.push(matcher);
              break;
            default:
              Array.from(container.querySelectorAll(selector)).forEach((node) => {
                if (nodeMatches.has(node)) {
                  const matches = nodeMatches.get(node);
                  matches?.push(matcher);
                } else {
                  nodeMatches.set(node, [matcher]);
                }
              });
              break;
          }
        });
        return [elementMatchers, textMatchers];
      }
    };
    preNodes = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/quill/modules/history.js
function transformStack(stack, delta) {
  let remoteDelta = delta;
  for (let i = stack.length - 1; i >= 0; i -= 1) {
    const oldItem = stack[i];
    stack[i] = {
      delta: remoteDelta.transform(oldItem.delta, true),
      range: oldItem.range && transformRange(oldItem.range, remoteDelta)
    };
    remoteDelta = oldItem.delta.transform(remoteDelta);
    if (stack[i].delta.length() === 0) {
      stack.splice(i, 1);
    }
  }
}
function endsWithNewlineChange(scroll, delta) {
  const lastOp = delta.ops[delta.ops.length - 1];
  if (lastOp == null) return false;
  if (lastOp.insert != null) {
    return typeof lastOp.insert === "string" && lastOp.insert.endsWith("\n");
  }
  if (lastOp.attributes != null) {
    return Object.keys(lastOp.attributes).some((attr) => {
      return scroll.query(attr, Scope.BLOCK) != null;
    });
  }
  return false;
}
function getLastChangeIndex(scroll, delta) {
  const deleteLength = delta.reduce((length, op) => {
    return length + (op.delete || 0);
  }, 0);
  let changeIndex = delta.length() - deleteLength;
  if (endsWithNewlineChange(scroll, delta)) {
    changeIndex -= 1;
  }
  return changeIndex;
}
function transformRange(range, delta) {
  if (!range) return range;
  const start = delta.transformPosition(range.index);
  const end = delta.transformPosition(range.index + range.length);
  return {
    index: start,
    length: end - start
  };
}
var History;
var init_history = __esm({
  "node_modules/quill/modules/history.js"() {
    init_parchment();
    init_module();
    init_quill();
    History = class extends module_default {
      static DEFAULTS = {
        delay: 1e3,
        maxStack: 100,
        userOnly: false
      };
      lastRecorded = 0;
      ignoreChange = false;
      stack = {
        undo: [],
        redo: []
      };
      currentRange = null;
      constructor(quill, options) {
        super(quill, options);
        this.quill.on(Quill.events.EDITOR_CHANGE, (eventName, value, oldValue, source) => {
          if (eventName === Quill.events.SELECTION_CHANGE) {
            if (value && source !== Quill.sources.SILENT) {
              this.currentRange = value;
            }
          } else if (eventName === Quill.events.TEXT_CHANGE) {
            if (!this.ignoreChange) {
              if (!this.options.userOnly || source === Quill.sources.USER) {
                this.record(value, oldValue);
              } else {
                this.transform(value);
              }
            }
            this.currentRange = transformRange(this.currentRange, value);
          }
        });
        this.quill.keyboard.addBinding({
          key: "z",
          shortKey: true
        }, this.undo.bind(this));
        this.quill.keyboard.addBinding({
          key: ["z", "Z"],
          shortKey: true,
          shiftKey: true
        }, this.redo.bind(this));
        if (/Win/i.test(navigator.platform)) {
          this.quill.keyboard.addBinding({
            key: "y",
            shortKey: true
          }, this.redo.bind(this));
        }
        this.quill.root.addEventListener("beforeinput", (event) => {
          if (event.inputType === "historyUndo") {
            this.undo();
            event.preventDefault();
          } else if (event.inputType === "historyRedo") {
            this.redo();
            event.preventDefault();
          }
        });
      }
      change(source, dest) {
        if (this.stack[source].length === 0) return;
        const item = this.stack[source].pop();
        if (!item) return;
        const base = this.quill.getContents();
        const inverseDelta = item.delta.invert(base);
        this.stack[dest].push({
          delta: inverseDelta,
          range: transformRange(item.range, inverseDelta)
        });
        this.lastRecorded = 0;
        this.ignoreChange = true;
        this.quill.updateContents(item.delta, Quill.sources.USER);
        this.ignoreChange = false;
        this.restoreSelection(item);
      }
      clear() {
        this.stack = {
          undo: [],
          redo: []
        };
      }
      cutoff() {
        this.lastRecorded = 0;
      }
      record(changeDelta, oldDelta) {
        if (changeDelta.ops.length === 0) return;
        this.stack.redo = [];
        let undoDelta = changeDelta.invert(oldDelta);
        let undoRange = this.currentRange;
        const timestamp = Date.now();
        if (
          // @ts-expect-error Fix me later
          this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0
        ) {
          const item = this.stack.undo.pop();
          if (item) {
            undoDelta = undoDelta.compose(item.delta);
            undoRange = item.range;
          }
        } else {
          this.lastRecorded = timestamp;
        }
        if (undoDelta.length() === 0) return;
        this.stack.undo.push({
          delta: undoDelta,
          range: undoRange
        });
        if (this.stack.undo.length > this.options.maxStack) {
          this.stack.undo.shift();
        }
      }
      redo() {
        this.change("redo", "undo");
      }
      transform(delta) {
        transformStack(this.stack.undo, delta);
        transformStack(this.stack.redo, delta);
      }
      undo() {
        this.change("undo", "redo");
      }
      restoreSelection(stackItem) {
        if (stackItem.range) {
          this.quill.setSelection(stackItem.range, Quill.sources.USER);
        } else {
          const index = getLastChangeIndex(this.quill.scroll, stackItem.delta);
          this.quill.setSelection(index, Quill.sources.USER);
        }
      }
    };
  }
});

// node_modules/quill/modules/uploader.js
var import_quill_delta7, Uploader, uploader_default;
var init_uploader = __esm({
  "node_modules/quill/modules/uploader.js"() {
    import_quill_delta7 = __toESM(require_Delta(), 1);
    init_emitter();
    init_module();
    Uploader = class extends module_default {
      constructor(quill, options) {
        super(quill, options);
        quill.root.addEventListener("drop", (e) => {
          e.preventDefault();
          let native = null;
          if (document.caretRangeFromPoint) {
            native = document.caretRangeFromPoint(e.clientX, e.clientY);
          } else if (document.caretPositionFromPoint) {
            const position = document.caretPositionFromPoint(e.clientX, e.clientY);
            native = document.createRange();
            native.setStart(position.offsetNode, position.offset);
            native.setEnd(position.offsetNode, position.offset);
          }
          const normalized = native && quill.selection.normalizeNative(native);
          if (normalized) {
            const range = quill.selection.normalizedToRange(normalized);
            if (e.dataTransfer?.files) {
              this.upload(range, e.dataTransfer.files);
            }
          }
        });
      }
      upload(range, files) {
        const uploads = [];
        Array.from(files).forEach((file) => {
          if (file && this.options.mimetypes?.includes(file.type)) {
            uploads.push(file);
          }
        });
        if (uploads.length > 0) {
          this.options.handler.call(this, range, uploads);
        }
      }
    };
    Uploader.DEFAULTS = {
      mimetypes: ["image/png", "image/jpeg"],
      handler(range, files) {
        if (!this.quill.scroll.query("image")) {
          return;
        }
        const promises = files.map((file) => {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
              resolve(reader.result);
            };
            reader.readAsDataURL(file);
          });
        });
        Promise.all(promises).then((images) => {
          const update = images.reduce((delta, image) => {
            return delta.insert({
              image
            });
          }, new import_quill_delta7.default().retain(range.index).delete(range.length));
          this.quill.updateContents(update, emitter_default.sources.USER);
          this.quill.setSelection(range.index + images.length, emitter_default.sources.SILENT);
        });
      }
    };
    uploader_default = Uploader;
  }
});

// node_modules/quill/modules/input.js
function getPlainTextFromInputEvent(event) {
  if (typeof event.data === "string") {
    return event.data;
  }
  if (event.dataTransfer?.types.includes("text/plain")) {
    return event.dataTransfer.getData("text/plain");
  }
  return null;
}
var import_quill_delta8, INSERT_TYPES, Input, input_default;
var init_input = __esm({
  "node_modules/quill/modules/input.js"() {
    import_quill_delta8 = __toESM(require_Delta(), 1);
    init_module();
    init_quill();
    init_keyboard();
    INSERT_TYPES = ["insertText", "insertReplacementText"];
    Input = class extends module_default {
      constructor(quill, options) {
        super(quill, options);
        quill.root.addEventListener("beforeinput", (event) => {
          this.handleBeforeInput(event);
        });
        if (!/Android/i.test(navigator.userAgent)) {
          quill.on(Quill.events.COMPOSITION_BEFORE_START, () => {
            this.handleCompositionStart();
          });
        }
      }
      deleteRange(range) {
        deleteRange({
          range,
          quill: this.quill
        });
      }
      replaceText(range) {
        let text = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        if (range.length === 0) return false;
        if (text) {
          const formats = this.quill.getFormat(range.index, 1);
          this.deleteRange(range);
          this.quill.updateContents(new import_quill_delta8.default().retain(range.index).insert(text, formats), Quill.sources.USER);
        } else {
          this.deleteRange(range);
        }
        this.quill.setSelection(range.index + text.length, 0, Quill.sources.SILENT);
        return true;
      }
      handleBeforeInput(event) {
        if (this.quill.composition.isComposing || event.defaultPrevented || !INSERT_TYPES.includes(event.inputType)) {
          return;
        }
        const staticRange = event.getTargetRanges ? event.getTargetRanges()[0] : null;
        if (!staticRange || staticRange.collapsed === true) {
          return;
        }
        const text = getPlainTextFromInputEvent(event);
        if (text == null) {
          return;
        }
        const normalized = this.quill.selection.normalizeNative(staticRange);
        const range = normalized ? this.quill.selection.normalizedToRange(normalized) : null;
        if (range && this.replaceText(range, text)) {
          event.preventDefault();
        }
      }
      handleCompositionStart() {
        const range = this.quill.getSelection();
        if (range) {
          this.replaceText(range);
        }
      }
    };
    input_default = Input;
  }
});

// node_modules/quill/modules/uiNode.js
var isMac, TTL_FOR_VALID_SELECTION_CHANGE, canMoveCaretBeforeUINode, UINode, uiNode_default;
var init_uiNode = __esm({
  "node_modules/quill/modules/uiNode.js"() {
    init_parchment();
    init_module();
    init_quill();
    isMac = /Mac/i.test(navigator.platform);
    TTL_FOR_VALID_SELECTION_CHANGE = 100;
    canMoveCaretBeforeUINode = (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
      event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "Home") {
        return true;
      }
      if (isMac && event.key === "a" && event.ctrlKey === true) {
        return true;
      }
      return false;
    };
    UINode = class extends module_default {
      isListening = false;
      selectionChangeDeadline = 0;
      constructor(quill, options) {
        super(quill, options);
        this.handleArrowKeys();
        this.handleNavigationShortcuts();
      }
      handleArrowKeys() {
        this.quill.keyboard.addBinding({
          key: ["ArrowLeft", "ArrowRight"],
          offset: 0,
          shiftKey: null,
          handler(range, _ref) {
            let {
              line,
              event
            } = _ref;
            if (!(line instanceof ParentBlot$1) || !line.uiNode) {
              return true;
            }
            const isRTL = getComputedStyle(line.domNode)["direction"] === "rtl";
            if (isRTL && event.key !== "ArrowRight" || !isRTL && event.key !== "ArrowLeft") {
              return true;
            }
            this.quill.setSelection(range.index - 1, range.length + (event.shiftKey ? 1 : 0), Quill.sources.USER);
            return false;
          }
        });
      }
      handleNavigationShortcuts() {
        this.quill.root.addEventListener("keydown", (event) => {
          if (!event.defaultPrevented && canMoveCaretBeforeUINode(event)) {
            this.ensureListeningToSelectionChange();
          }
        });
      }
      /**
       * We only listen to the `selectionchange` event when
       * there is an intention of moving the caret to the beginning using shortcuts.
       * This is primarily implemented to prevent infinite loops, as we are changing
       * the selection within the handler of a `selectionchange` event.
       */
      ensureListeningToSelectionChange() {
        this.selectionChangeDeadline = Date.now() + TTL_FOR_VALID_SELECTION_CHANGE;
        if (this.isListening) return;
        this.isListening = true;
        const listener = () => {
          this.isListening = false;
          if (Date.now() <= this.selectionChangeDeadline) {
            this.handleSelectionChange();
          }
        };
        document.addEventListener("selectionchange", listener, {
          once: true
        });
      }
      handleSelectionChange() {
        const selection = document.getSelection();
        if (!selection) return;
        const range = selection.getRangeAt(0);
        if (range.collapsed !== true || range.startOffset !== 0) return;
        const line = this.quill.scroll.find(range.startContainer);
        if (!(line instanceof ParentBlot$1) || !line.uiNode) return;
        const newRange = document.createRange();
        newRange.setStartAfter(line.uiNode);
        newRange.setEndAfter(line.uiNode);
        selection.removeAllRanges();
        selection.addRange(newRange);
      }
    };
    uiNode_default = UINode;
  }
});

// node_modules/quill/core.js
var import_quill_delta9, core_default;
var init_core = __esm({
  "node_modules/quill/core.js"() {
    init_quill();
    init_block();
    init_break();
    init_container();
    init_cursor();
    init_embed();
    init_inline();
    init_scroll();
    init_text();
    init_clipboard();
    init_history();
    init_keyboard();
    init_uploader();
    import_quill_delta9 = __toESM(require_Delta(), 1);
    init_input();
    init_uiNode();
    init_module();
    Quill.register({
      "blots/block": Block,
      "blots/block/embed": BlockEmbed,
      "blots/break": break_default,
      "blots/container": container_default,
      "blots/cursor": cursor_default,
      "blots/embed": embed_default,
      "blots/inline": inline_default,
      "blots/scroll": scroll_default,
      "blots/text": Text2,
      "modules/clipboard": Clipboard,
      "modules/history": History,
      "modules/keyboard": Keyboard,
      "modules/uploader": uploader_default,
      "modules/input": input_default,
      "modules/uiNode": uiNode_default
    });
    core_default = Quill;
  }
});

// node_modules/quill/formats/indent.js
var IndentAttributor, IndentClass, indent_default;
var init_indent = __esm({
  "node_modules/quill/formats/indent.js"() {
    init_parchment();
    IndentAttributor = class extends ClassAttributor$1 {
      add(node, value) {
        let normalizedValue = 0;
        if (value === "+1" || value === "-1") {
          const indent = this.value(node) || 0;
          normalizedValue = value === "+1" ? indent + 1 : indent - 1;
        } else if (typeof value === "number") {
          normalizedValue = value;
        }
        if (normalizedValue === 0) {
          this.remove(node);
          return true;
        }
        return super.add(node, normalizedValue.toString());
      }
      canAdd(node, value) {
        return super.canAdd(node, value) || super.canAdd(node, parseInt(value, 10));
      }
      value(node) {
        return parseInt(super.value(node), 10) || void 0;
      }
    };
    IndentClass = new IndentAttributor("indent", "ql-indent", {
      scope: Scope.BLOCK,
      // @ts-expect-error
      whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
    });
    indent_default = IndentClass;
  }
});

// node_modules/quill/formats/blockquote.js
var Blockquote, blockquote_default;
var init_blockquote = __esm({
  "node_modules/quill/formats/blockquote.js"() {
    init_block();
    Blockquote = class extends Block {
      static blotName = "blockquote";
      static tagName = "blockquote";
    };
    blockquote_default = Blockquote;
  }
});

// node_modules/quill/formats/header.js
var Header, header_default;
var init_header = __esm({
  "node_modules/quill/formats/header.js"() {
    init_block();
    Header = class extends Block {
      static blotName = "header";
      static tagName = ["H1", "H2", "H3", "H4", "H5", "H6"];
      static formats(domNode) {
        return this.tagName.indexOf(domNode.tagName) + 1;
      }
    };
    header_default = Header;
  }
});

// node_modules/quill/formats/list.js
var ListContainer, ListItem;
var init_list = __esm({
  "node_modules/quill/formats/list.js"() {
    init_block();
    init_container();
    init_quill();
    ListContainer = class extends container_default {
    };
    ListContainer.blotName = "list-container";
    ListContainer.tagName = "OL";
    ListItem = class extends Block {
      static create(value) {
        const node = super.create();
        node.setAttribute("data-list", value);
        return node;
      }
      static formats(domNode) {
        return domNode.getAttribute("data-list") || void 0;
      }
      static register() {
        Quill.register(ListContainer);
      }
      constructor(scroll, domNode) {
        super(scroll, domNode);
        const ui = domNode.ownerDocument.createElement("span");
        const listEventHandler = (e) => {
          if (!scroll.isEnabled()) return;
          const format = this.statics.formats(domNode, scroll);
          if (format === "checked") {
            this.format("list", "unchecked");
            e.preventDefault();
          } else if (format === "unchecked") {
            this.format("list", "checked");
            e.preventDefault();
          }
        };
        ui.addEventListener("mousedown", listEventHandler);
        ui.addEventListener("touchstart", listEventHandler);
        this.attachUI(ui);
      }
      format(name, value) {
        if (name === this.statics.blotName && value) {
          this.domNode.setAttribute("data-list", value);
        } else {
          super.format(name, value);
        }
      }
    };
    ListItem.blotName = "list";
    ListItem.tagName = "LI";
    ListContainer.allowedChildren = [ListItem];
    ListItem.requiredContainer = ListContainer;
  }
});

// node_modules/quill/formats/bold.js
var Bold, bold_default;
var init_bold = __esm({
  "node_modules/quill/formats/bold.js"() {
    init_inline();
    Bold = class extends inline_default {
      static blotName = "bold";
      static tagName = ["STRONG", "B"];
      static create() {
        return super.create();
      }
      static formats() {
        return true;
      }
      optimize(context) {
        super.optimize(context);
        if (this.domNode.tagName !== this.statics.tagName[0]) {
          this.replaceWith(this.statics.blotName);
        }
      }
    };
    bold_default = Bold;
  }
});

// node_modules/quill/formats/italic.js
var Italic, italic_default;
var init_italic = __esm({
  "node_modules/quill/formats/italic.js"() {
    init_bold();
    Italic = class extends bold_default {
      static blotName = "italic";
      static tagName = ["EM", "I"];
    };
    italic_default = Italic;
  }
});

// node_modules/quill/formats/link.js
function sanitize(url, protocols) {
  const anchor = document.createElement("a");
  anchor.href = url;
  const protocol = anchor.href.slice(0, anchor.href.indexOf(":"));
  return protocols.indexOf(protocol) > -1;
}
var Link;
var init_link = __esm({
  "node_modules/quill/formats/link.js"() {
    init_inline();
    Link = class extends inline_default {
      static blotName = "link";
      static tagName = "A";
      static SANITIZED_URL = "about:blank";
      static PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel", "sms"];
      static create(value) {
        const node = super.create(value);
        node.setAttribute("href", this.sanitize(value));
        node.setAttribute("rel", "noopener noreferrer");
        node.setAttribute("target", "_blank");
        return node;
      }
      static formats(domNode) {
        return domNode.getAttribute("href");
      }
      static sanitize(url) {
        return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
      }
      format(name, value) {
        if (name !== this.statics.blotName || !value) {
          super.format(name, value);
        } else {
          this.domNode.setAttribute("href", this.constructor.sanitize(value));
        }
      }
    };
  }
});

// node_modules/quill/formats/script.js
var Script, script_default;
var init_script = __esm({
  "node_modules/quill/formats/script.js"() {
    init_inline();
    Script = class extends inline_default {
      static blotName = "script";
      static tagName = ["SUB", "SUP"];
      static create(value) {
        if (value === "super") {
          return document.createElement("sup");
        }
        if (value === "sub") {
          return document.createElement("sub");
        }
        return super.create(value);
      }
      static formats(domNode) {
        if (domNode.tagName === "SUB") return "sub";
        if (domNode.tagName === "SUP") return "super";
        return void 0;
      }
    };
    script_default = Script;
  }
});

// node_modules/quill/formats/strike.js
var Strike, strike_default;
var init_strike = __esm({
  "node_modules/quill/formats/strike.js"() {
    init_bold();
    Strike = class extends bold_default {
      static blotName = "strike";
      static tagName = ["S", "STRIKE"];
    };
    strike_default = Strike;
  }
});

// node_modules/quill/formats/underline.js
var Underline, underline_default;
var init_underline = __esm({
  "node_modules/quill/formats/underline.js"() {
    init_inline();
    Underline = class extends inline_default {
      static blotName = "underline";
      static tagName = "U";
    };
    underline_default = Underline;
  }
});

// node_modules/quill/formats/formula.js
var Formula, formula_default;
var init_formula = __esm({
  "node_modules/quill/formats/formula.js"() {
    init_embed();
    Formula = class extends embed_default {
      static blotName = "formula";
      static className = "ql-formula";
      static tagName = "SPAN";
      static create(value) {
        if (window.katex == null) {
          throw new Error("Formula module requires KaTeX.");
        }
        const node = super.create(value);
        if (typeof value === "string") {
          window.katex.render(value, node, {
            throwOnError: false,
            errorColor: "#f00"
          });
          node.setAttribute("data-value", value);
        }
        return node;
      }
      static value(domNode) {
        return domNode.getAttribute("data-value");
      }
      html() {
        const {
          formula
        } = this.value();
        return `<span>${formula}</span>`;
      }
    };
    formula_default = Formula;
  }
});

// node_modules/quill/formats/image.js
var ATTRIBUTES, Image, image_default;
var init_image = __esm({
  "node_modules/quill/formats/image.js"() {
    init_parchment();
    init_link();
    ATTRIBUTES = ["alt", "height", "width"];
    Image = class extends EmbedBlot$1 {
      static blotName = "image";
      static tagName = "IMG";
      static create(value) {
        const node = super.create(value);
        if (typeof value === "string") {
          node.setAttribute("src", this.sanitize(value));
        }
        return node;
      }
      static formats(domNode) {
        return ATTRIBUTES.reduce((formats, attribute) => {
          if (domNode.hasAttribute(attribute)) {
            formats[attribute] = domNode.getAttribute(attribute);
          }
          return formats;
        }, {});
      }
      static match(url) {
        return /\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url);
      }
      static sanitize(url) {
        return sanitize(url, ["http", "https", "data"]) ? url : "//:0";
      }
      static value(domNode) {
        return domNode.getAttribute("src");
      }
      format(name, value) {
        if (ATTRIBUTES.indexOf(name) > -1) {
          if (value) {
            this.domNode.setAttribute(name, value);
          } else {
            this.domNode.removeAttribute(name);
          }
        } else {
          super.format(name, value);
        }
      }
    };
    image_default = Image;
  }
});

// node_modules/quill/formats/video.js
var ATTRIBUTES2, Video, video_default;
var init_video = __esm({
  "node_modules/quill/formats/video.js"() {
    init_block();
    init_link();
    ATTRIBUTES2 = ["height", "width"];
    Video = class extends BlockEmbed {
      static blotName = "video";
      static className = "ql-video";
      static tagName = "IFRAME";
      static create(value) {
        const node = super.create(value);
        node.setAttribute("frameborder", "0");
        node.setAttribute("allowfullscreen", "true");
        node.setAttribute("src", this.sanitize(value));
        return node;
      }
      static formats(domNode) {
        return ATTRIBUTES2.reduce((formats, attribute) => {
          if (domNode.hasAttribute(attribute)) {
            formats[attribute] = domNode.getAttribute(attribute);
          }
          return formats;
        }, {});
      }
      static sanitize(url) {
        return Link.sanitize(url);
      }
      static value(domNode) {
        return domNode.getAttribute("src");
      }
      format(name, value) {
        if (ATTRIBUTES2.indexOf(name) > -1) {
          if (value) {
            this.domNode.setAttribute(name, value);
          } else {
            this.domNode.removeAttribute(name);
          }
        } else {
          super.format(name, value);
        }
      }
      html() {
        const {
          video
        } = this.value();
        return `<a href="${video}">${video}</a>`;
      }
    };
    video_default = Video;
  }
});

// node_modules/quill/modules/syntax.js
var import_quill_delta10, TokenAttributor, CodeToken, SyntaxCodeBlock, SyntaxCodeBlockContainer, highlight, Syntax;
var init_syntax = __esm({
  "node_modules/quill/modules/syntax.js"() {
    import_quill_delta10 = __toESM(require_Delta(), 1);
    init_parchment();
    init_inline();
    init_quill();
    init_module();
    init_block();
    init_break();
    init_cursor();
    init_text();
    init_code();
    init_clipboard();
    TokenAttributor = new ClassAttributor$1("code-token", "hljs", {
      scope: Scope.INLINE
    });
    CodeToken = class _CodeToken extends inline_default {
      static formats(node, scroll) {
        while (node != null && node !== scroll.domNode) {
          if (node.classList && node.classList.contains(CodeBlock.className)) {
            return super.formats(node, scroll);
          }
          node = node.parentNode;
        }
        return void 0;
      }
      constructor(scroll, domNode, value) {
        super(scroll, domNode, value);
        TokenAttributor.add(this.domNode, value);
      }
      format(format, value) {
        if (format !== _CodeToken.blotName) {
          super.format(format, value);
        } else if (value) {
          TokenAttributor.add(this.domNode, value);
        } else {
          TokenAttributor.remove(this.domNode);
          this.domNode.classList.remove(this.statics.className);
        }
      }
      optimize() {
        super.optimize(...arguments);
        if (!TokenAttributor.value(this.domNode)) {
          this.unwrap();
        }
      }
    };
    CodeToken.blotName = "code-token";
    CodeToken.className = "ql-token";
    SyntaxCodeBlock = class extends CodeBlock {
      static create(value) {
        const domNode = super.create(value);
        if (typeof value === "string") {
          domNode.setAttribute("data-language", value);
        }
        return domNode;
      }
      static formats(domNode) {
        return domNode.getAttribute("data-language") || "plain";
      }
      static register() {
      }
      // Syntax module will register
      format(name, value) {
        if (name === this.statics.blotName && value) {
          this.domNode.setAttribute("data-language", value);
        } else {
          super.format(name, value);
        }
      }
      replaceWith(name, value) {
        this.formatAt(0, this.length(), CodeToken.blotName, false);
        return super.replaceWith(name, value);
      }
    };
    SyntaxCodeBlockContainer = class extends CodeBlockContainer {
      attach() {
        super.attach();
        this.forceNext = false;
        this.scroll.emitMount(this);
      }
      format(name, value) {
        if (name === SyntaxCodeBlock.blotName) {
          this.forceNext = true;
          this.children.forEach((child) => {
            child.format(name, value);
          });
        }
      }
      formatAt(index, length, name, value) {
        if (name === SyntaxCodeBlock.blotName) {
          this.forceNext = true;
        }
        super.formatAt(index, length, name, value);
      }
      highlight(highlight2) {
        let forced = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (this.children.head == null) return;
        const nodes = Array.from(this.domNode.childNodes).filter((node) => node !== this.uiNode);
        const text = `${nodes.map((node) => node.textContent).join("\n")}
`;
        const language = SyntaxCodeBlock.formats(this.children.head.domNode);
        if (forced || this.forceNext || this.cachedText !== text) {
          if (text.trim().length > 0 || this.cachedText == null) {
            const oldDelta = this.children.reduce((delta2, child) => {
              return delta2.concat(blockDelta(child, false));
            }, new import_quill_delta10.default());
            const delta = highlight2(text, language);
            oldDelta.diff(delta).reduce((index, _ref) => {
              let {
                retain,
                attributes
              } = _ref;
              if (!retain) return index;
              if (attributes) {
                Object.keys(attributes).forEach((format) => {
                  if ([SyntaxCodeBlock.blotName, CodeToken.blotName].includes(format)) {
                    this.formatAt(index, retain, format, attributes[format]);
                  }
                });
              }
              return index + retain;
            }, 0);
          }
          this.cachedText = text;
          this.forceNext = false;
        }
      }
      html(index, length) {
        const [codeBlock] = this.children.find(index);
        const language = codeBlock ? SyntaxCodeBlock.formats(codeBlock.domNode) : "plain";
        return `<pre data-language="${language}">
${escapeText(this.code(index, length))}
</pre>`;
      }
      optimize(context) {
        super.optimize(context);
        if (this.parent != null && this.children.head != null && this.uiNode != null) {
          const language = SyntaxCodeBlock.formats(this.children.head.domNode);
          if (language !== this.uiNode.value) {
            this.uiNode.value = language;
          }
        }
      }
    };
    SyntaxCodeBlockContainer.allowedChildren = [SyntaxCodeBlock];
    SyntaxCodeBlock.requiredContainer = SyntaxCodeBlockContainer;
    SyntaxCodeBlock.allowedChildren = [CodeToken, cursor_default, Text2, break_default];
    highlight = (lib, language, text) => {
      if (typeof lib.versionString === "string") {
        const majorVersion = lib.versionString.split(".")[0];
        if (parseInt(majorVersion, 10) >= 11) {
          return lib.highlight(text, {
            language
          }).value;
        }
      }
      return lib.highlight(language, text).value;
    };
    Syntax = class extends module_default {
      static register() {
        Quill.register(CodeToken, true);
        Quill.register(SyntaxCodeBlock, true);
        Quill.register(SyntaxCodeBlockContainer, true);
      }
      constructor(quill, options) {
        super(quill, options);
        if (this.options.hljs == null) {
          throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
        }
        this.languages = this.options.languages.reduce((memo, _ref2) => {
          let {
            key
          } = _ref2;
          memo[key] = true;
          return memo;
        }, {});
        this.highlightBlot = this.highlightBlot.bind(this);
        this.initListener();
        this.initTimer();
      }
      initListener() {
        this.quill.on(Quill.events.SCROLL_BLOT_MOUNT, (blot) => {
          if (!(blot instanceof SyntaxCodeBlockContainer)) return;
          const select = this.quill.root.ownerDocument.createElement("select");
          this.options.languages.forEach((_ref3) => {
            let {
              key,
              label
            } = _ref3;
            const option = select.ownerDocument.createElement("option");
            option.textContent = label;
            option.setAttribute("value", key);
            select.appendChild(option);
          });
          select.addEventListener("change", () => {
            blot.format(SyntaxCodeBlock.blotName, select.value);
            this.quill.root.focus();
            this.highlight(blot, true);
          });
          if (blot.uiNode == null) {
            blot.attachUI(select);
            if (blot.children.head) {
              select.value = SyntaxCodeBlock.formats(blot.children.head.domNode);
            }
          }
        });
      }
      initTimer() {
        let timer = null;
        this.quill.on(Quill.events.SCROLL_OPTIMIZE, () => {
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            this.highlight();
            timer = null;
          }, this.options.interval);
        });
      }
      highlight() {
        let blot = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        let force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (this.quill.selection.composing) return;
        this.quill.update(Quill.sources.USER);
        const range = this.quill.getSelection();
        const blots = blot == null ? this.quill.scroll.descendants(SyntaxCodeBlockContainer) : [blot];
        blots.forEach((container) => {
          container.highlight(this.highlightBlot, force);
        });
        this.quill.update(Quill.sources.SILENT);
        if (range != null) {
          this.quill.setSelection(range, Quill.sources.SILENT);
        }
      }
      highlightBlot(text) {
        let language = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
        language = this.languages[language] ? language : "plain";
        if (language === "plain") {
          return escapeText(text).split("\n").reduce((delta, line, i) => {
            if (i !== 0) {
              delta.insert("\n", {
                [CodeBlock.blotName]: language
              });
            }
            return delta.insert(line);
          }, new import_quill_delta10.default());
        }
        const container = this.quill.root.ownerDocument.createElement("div");
        container.classList.add(CodeBlock.className);
        container.innerHTML = highlight(this.options.hljs, language, text);
        return traverse(this.quill.scroll, container, [(node, delta) => {
          const value = TokenAttributor.value(node);
          if (value) {
            return delta.compose(new import_quill_delta10.default().retain(delta.length(), {
              [CodeToken.blotName]: value
            }));
          }
          return delta;
        }], [(node, delta) => {
          return node.data.split("\n").reduce((memo, nodeText, i) => {
            if (i !== 0) memo.insert("\n", {
              [CodeBlock.blotName]: language
            });
            return memo.insert(nodeText);
          }, delta);
        }], /* @__PURE__ */ new WeakMap());
      }
    };
    Syntax.DEFAULTS = {
      hljs: (() => {
        return window.hljs;
      })(),
      interval: 1e3,
      languages: [{
        key: "plain",
        label: "Plain"
      }, {
        key: "bash",
        label: "Bash"
      }, {
        key: "cpp",
        label: "C++"
      }, {
        key: "cs",
        label: "C#"
      }, {
        key: "css",
        label: "CSS"
      }, {
        key: "diff",
        label: "Diff"
      }, {
        key: "xml",
        label: "HTML/XML"
      }, {
        key: "java",
        label: "Java"
      }, {
        key: "javascript",
        label: "JavaScript"
      }, {
        key: "markdown",
        label: "Markdown"
      }, {
        key: "php",
        label: "PHP"
      }, {
        key: "python",
        label: "Python"
      }, {
        key: "ruby",
        label: "Ruby"
      }, {
        key: "sql",
        label: "SQL"
      }]
    };
  }
});

// node_modules/quill/formats/table.js
function tableId() {
  const id2 = Math.random().toString(36).slice(2, 6);
  return `row-${id2}`;
}
var TableCell, TableRow, TableBody, TableContainer;
var init_table = __esm({
  "node_modules/quill/formats/table.js"() {
    init_block();
    init_container();
    TableCell = class _TableCell extends Block {
      static blotName = "table";
      static tagName = "TD";
      static create(value) {
        const node = super.create();
        if (value) {
          node.setAttribute("data-row", value);
        } else {
          node.setAttribute("data-row", tableId());
        }
        return node;
      }
      static formats(domNode) {
        if (domNode.hasAttribute("data-row")) {
          return domNode.getAttribute("data-row");
        }
        return void 0;
      }
      cellOffset() {
        if (this.parent) {
          return this.parent.children.indexOf(this);
        }
        return -1;
      }
      format(name, value) {
        if (name === _TableCell.blotName && value) {
          this.domNode.setAttribute("data-row", value);
        } else {
          super.format(name, value);
        }
      }
      row() {
        return this.parent;
      }
      rowOffset() {
        if (this.row()) {
          return this.row().rowOffset();
        }
        return -1;
      }
      table() {
        return this.row() && this.row().table();
      }
    };
    TableRow = class extends container_default {
      static blotName = "table-row";
      static tagName = "TR";
      checkMerge() {
        if (super.checkMerge() && this.next.children.head != null) {
          const thisHead = this.children.head.formats();
          const thisTail = this.children.tail.formats();
          const nextHead = this.next.children.head.formats();
          const nextTail = this.next.children.tail.formats();
          return thisHead.table === thisTail.table && thisHead.table === nextHead.table && thisHead.table === nextTail.table;
        }
        return false;
      }
      optimize(context) {
        super.optimize(context);
        this.children.forEach((child) => {
          if (child.next == null) return;
          const childFormats = child.formats();
          const nextFormats = child.next.formats();
          if (childFormats.table !== nextFormats.table) {
            const next = this.splitAfter(child);
            if (next) {
              next.optimize();
            }
            if (this.prev) {
              this.prev.optimize();
            }
          }
        });
      }
      rowOffset() {
        if (this.parent) {
          return this.parent.children.indexOf(this);
        }
        return -1;
      }
      table() {
        return this.parent && this.parent.parent;
      }
    };
    TableBody = class extends container_default {
      static blotName = "table-body";
      static tagName = "TBODY";
    };
    TableContainer = class extends container_default {
      static blotName = "table-container";
      static tagName = "TABLE";
      balanceCells() {
        const rows = this.descendants(TableRow);
        const maxColumns = rows.reduce((max, row) => {
          return Math.max(row.children.length, max);
        }, 0);
        rows.forEach((row) => {
          new Array(maxColumns - row.children.length).fill(0).forEach(() => {
            let value;
            if (row.children.head != null) {
              value = TableCell.formats(row.children.head.domNode);
            }
            const blot = this.scroll.create(TableCell.blotName, value);
            row.appendChild(blot);
            blot.optimize();
          });
        });
      }
      cells(column) {
        return this.rows().map((row) => row.children.at(column));
      }
      deleteColumn(index) {
        const [body] = this.descendant(TableBody);
        if (body == null || body.children.head == null) return;
        body.children.forEach((row) => {
          const cell = row.children.at(index);
          if (cell != null) {
            cell.remove();
          }
        });
      }
      insertColumn(index) {
        const [body] = this.descendant(TableBody);
        if (body == null || body.children.head == null) return;
        body.children.forEach((row) => {
          const ref = row.children.at(index);
          const value = TableCell.formats(row.children.head.domNode);
          const cell = this.scroll.create(TableCell.blotName, value);
          row.insertBefore(cell, ref);
        });
      }
      insertRow(index) {
        const [body] = this.descendant(TableBody);
        if (body == null || body.children.head == null) return;
        const id2 = tableId();
        const row = this.scroll.create(TableRow.blotName);
        body.children.head.children.forEach(() => {
          const cell = this.scroll.create(TableCell.blotName, id2);
          row.appendChild(cell);
        });
        const ref = body.children.at(index);
        body.insertBefore(row, ref);
      }
      rows() {
        const body = this.children.head;
        if (body == null) return [];
        return body.children.map((row) => row);
      }
    };
    TableContainer.allowedChildren = [TableBody];
    TableBody.requiredContainer = TableContainer;
    TableBody.allowedChildren = [TableRow];
    TableRow.requiredContainer = TableBody;
    TableRow.allowedChildren = [TableCell];
    TableCell.requiredContainer = TableRow;
  }
});

// node_modules/quill/modules/table.js
var import_quill_delta11, Table, table_default;
var init_table2 = __esm({
  "node_modules/quill/modules/table.js"() {
    import_quill_delta11 = __toESM(require_Delta(), 1);
    init_quill();
    init_module();
    init_table();
    Table = class extends module_default {
      static register() {
        Quill.register(TableCell);
        Quill.register(TableRow);
        Quill.register(TableBody);
        Quill.register(TableContainer);
      }
      constructor() {
        super(...arguments);
        this.listenBalanceCells();
      }
      balanceTables() {
        this.quill.scroll.descendants(TableContainer).forEach((table) => {
          table.balanceCells();
        });
      }
      deleteColumn() {
        const [table, , cell] = this.getTable();
        if (cell == null) return;
        table.deleteColumn(cell.cellOffset());
        this.quill.update(Quill.sources.USER);
      }
      deleteRow() {
        const [, row] = this.getTable();
        if (row == null) return;
        row.remove();
        this.quill.update(Quill.sources.USER);
      }
      deleteTable() {
        const [table] = this.getTable();
        if (table == null) return;
        const offset = table.offset();
        table.remove();
        this.quill.update(Quill.sources.USER);
        this.quill.setSelection(offset, Quill.sources.SILENT);
      }
      getTable() {
        let range = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
        if (range == null) return [null, null, null, -1];
        const [cell, offset] = this.quill.getLine(range.index);
        if (cell == null || cell.statics.blotName !== TableCell.blotName) {
          return [null, null, null, -1];
        }
        const row = cell.parent;
        const table = row.parent.parent;
        return [table, row, cell, offset];
      }
      insertColumn(offset) {
        const range = this.quill.getSelection();
        if (!range) return;
        const [table, row, cell] = this.getTable(range);
        if (cell == null) return;
        const column = cell.cellOffset();
        table.insertColumn(column + offset);
        this.quill.update(Quill.sources.USER);
        let shift = row.rowOffset();
        if (offset === 0) {
          shift += 1;
        }
        this.quill.setSelection(range.index + shift, range.length, Quill.sources.SILENT);
      }
      insertColumnLeft() {
        this.insertColumn(0);
      }
      insertColumnRight() {
        this.insertColumn(1);
      }
      insertRow(offset) {
        const range = this.quill.getSelection();
        if (!range) return;
        const [table, row, cell] = this.getTable(range);
        if (cell == null) return;
        const index = row.rowOffset();
        table.insertRow(index + offset);
        this.quill.update(Quill.sources.USER);
        if (offset > 0) {
          this.quill.setSelection(range, Quill.sources.SILENT);
        } else {
          this.quill.setSelection(range.index + row.children.length, range.length, Quill.sources.SILENT);
        }
      }
      insertRowAbove() {
        this.insertRow(0);
      }
      insertRowBelow() {
        this.insertRow(1);
      }
      insertTable(rows, columns) {
        const range = this.quill.getSelection();
        if (range == null) return;
        const delta = new Array(rows).fill(0).reduce((memo) => {
          const text = new Array(columns).fill("\n").join("");
          return memo.insert(text, {
            table: tableId()
          });
        }, new import_quill_delta11.default().retain(range.index));
        this.quill.updateContents(delta, Quill.sources.USER);
        this.quill.setSelection(range.index, Quill.sources.SILENT);
        this.balanceTables();
      }
      listenBalanceCells() {
        this.quill.on(Quill.events.SCROLL_OPTIMIZE, (mutations) => {
          mutations.some((mutation) => {
            if (["TD", "TR", "TBODY", "TABLE"].includes(mutation.target.tagName)) {
              this.quill.once(Quill.events.TEXT_CHANGE, (delta, old, source) => {
                if (source !== Quill.sources.USER) return;
                this.balanceTables();
              });
              return true;
            }
            return false;
          });
        });
      }
    };
    table_default = Table;
  }
});

// node_modules/quill/modules/toolbar.js
function addButton(container, format, value) {
  const input = document.createElement("button");
  input.setAttribute("type", "button");
  input.classList.add(`ql-${format}`);
  input.setAttribute("aria-pressed", "false");
  if (value != null) {
    input.value = value;
    input.setAttribute("aria-label", `${format}: ${value}`);
  } else {
    input.setAttribute("aria-label", format);
  }
  container.appendChild(input);
}
function addControls(container, groups) {
  if (!Array.isArray(groups[0])) {
    groups = [groups];
  }
  groups.forEach((controls) => {
    const group = document.createElement("span");
    group.classList.add("ql-formats");
    controls.forEach((control) => {
      if (typeof control === "string") {
        addButton(group, control);
      } else {
        const format = Object.keys(control)[0];
        const value = control[format];
        if (Array.isArray(value)) {
          addSelect(group, format, value);
        } else {
          addButton(group, format, value);
        }
      }
    });
    container.appendChild(group);
  });
}
function addSelect(container, format, values) {
  const input = document.createElement("select");
  input.classList.add(`ql-${format}`);
  values.forEach((value) => {
    const option = document.createElement("option");
    if (value !== false) {
      option.setAttribute("value", String(value));
    } else {
      option.setAttribute("selected", "selected");
    }
    input.appendChild(option);
  });
  container.appendChild(input);
}
var import_quill_delta12, debug7, Toolbar;
var init_toolbar = __esm({
  "node_modules/quill/modules/toolbar.js"() {
    import_quill_delta12 = __toESM(require_Delta(), 1);
    init_parchment();
    init_quill();
    init_logger();
    init_module();
    debug7 = logger_default("quill:toolbar");
    Toolbar = class extends module_default {
      constructor(quill, options) {
        super(quill, options);
        if (Array.isArray(this.options.container)) {
          const container = document.createElement("div");
          container.setAttribute("role", "toolbar");
          addControls(container, this.options.container);
          quill.container?.parentNode?.insertBefore(container, quill.container);
          this.container = container;
        } else if (typeof this.options.container === "string") {
          this.container = document.querySelector(this.options.container);
        } else {
          this.container = this.options.container;
        }
        if (!(this.container instanceof HTMLElement)) {
          debug7.error("Container required for toolbar", this.options);
          return;
        }
        this.container.classList.add("ql-toolbar");
        this.controls = [];
        this.handlers = {};
        if (this.options.handlers) {
          Object.keys(this.options.handlers).forEach((format) => {
            const handler = this.options.handlers?.[format];
            if (handler) {
              this.addHandler(format, handler);
            }
          });
        }
        Array.from(this.container.querySelectorAll("button, select")).forEach((input) => {
          this.attach(input);
        });
        this.quill.on(Quill.events.EDITOR_CHANGE, () => {
          const [range] = this.quill.selection.getRange();
          this.update(range);
        });
      }
      addHandler(format, handler) {
        this.handlers[format] = handler;
      }
      attach(input) {
        let format = Array.from(input.classList).find((className) => {
          return className.indexOf("ql-") === 0;
        });
        if (!format) return;
        format = format.slice("ql-".length);
        if (input.tagName === "BUTTON") {
          input.setAttribute("type", "button");
        }
        if (this.handlers[format] == null && this.quill.scroll.query(format) == null) {
          debug7.warn("ignoring attaching to nonexistent format", format, input);
          return;
        }
        const eventName = input.tagName === "SELECT" ? "change" : "click";
        input.addEventListener(eventName, (e) => {
          let value;
          if (input.tagName === "SELECT") {
            if (input.selectedIndex < 0) return;
            const selected = input.options[input.selectedIndex];
            if (selected.hasAttribute("selected")) {
              value = false;
            } else {
              value = selected.value || false;
            }
          } else {
            if (input.classList.contains("ql-active")) {
              value = false;
            } else {
              value = input.value || !input.hasAttribute("value");
            }
            e.preventDefault();
          }
          this.quill.focus();
          const [range] = this.quill.selection.getRange();
          if (this.handlers[format] != null) {
            this.handlers[format].call(this, value);
          } else if (
            // @ts-expect-error
            this.quill.scroll.query(format).prototype instanceof EmbedBlot$1
          ) {
            value = prompt(`Enter ${format}`);
            if (!value) return;
            this.quill.updateContents(new import_quill_delta12.default().retain(range.index).delete(range.length).insert({
              [format]: value
            }), Quill.sources.USER);
          } else {
            this.quill.format(format, value, Quill.sources.USER);
          }
          this.update(range);
        });
        this.controls.push([format, input]);
      }
      update(range) {
        const formats = range == null ? {} : this.quill.getFormat(range);
        this.controls.forEach((pair) => {
          const [format, input] = pair;
          if (input.tagName === "SELECT") {
            let option = null;
            if (range == null) {
              option = null;
            } else if (formats[format] == null) {
              option = input.querySelector("option[selected]");
            } else if (!Array.isArray(formats[format])) {
              let value = formats[format];
              if (typeof value === "string") {
                value = value.replace(/"/g, '\\"');
              }
              option = input.querySelector(`option[value="${value}"]`);
            }
            if (option == null) {
              input.value = "";
              input.selectedIndex = -1;
            } else {
              option.selected = true;
            }
          } else if (range == null) {
            input.classList.remove("ql-active");
            input.setAttribute("aria-pressed", "false");
          } else if (input.hasAttribute("value")) {
            const value = formats[format];
            const isActive = value === input.getAttribute("value") || value != null && value.toString() === input.getAttribute("value") || value == null && !input.getAttribute("value");
            input.classList.toggle("ql-active", isActive);
            input.setAttribute("aria-pressed", isActive.toString());
          } else {
            const isActive = formats[format] != null;
            input.classList.toggle("ql-active", isActive);
            input.setAttribute("aria-pressed", isActive.toString());
          }
        });
      }
    };
    Toolbar.DEFAULTS = {};
    Toolbar.DEFAULTS = {
      container: null,
      handlers: {
        clean() {
          const range = this.quill.getSelection();
          if (range == null) return;
          if (range.length === 0) {
            const formats = this.quill.getFormat();
            Object.keys(formats).forEach((name) => {
              if (this.quill.scroll.query(name, Scope.INLINE) != null) {
                this.quill.format(name, false, Quill.sources.USER);
              }
            });
          } else {
            this.quill.removeFormat(range.index, range.length, Quill.sources.USER);
          }
        },
        direction(value) {
          const {
            align
          } = this.quill.getFormat();
          if (value === "rtl" && align == null) {
            this.quill.format("align", "right", Quill.sources.USER);
          } else if (!value && align === "right") {
            this.quill.format("align", false, Quill.sources.USER);
          }
          this.quill.format("direction", value, Quill.sources.USER);
        },
        indent(value) {
          const range = this.quill.getSelection();
          const formats = this.quill.getFormat(range);
          const indent = parseInt(formats.indent || 0, 10);
          if (value === "+1" || value === "-1") {
            let modifier = value === "+1" ? 1 : -1;
            if (formats.direction === "rtl") modifier *= -1;
            this.quill.format("indent", indent + modifier, Quill.sources.USER);
          }
        },
        link(value) {
          if (value === true) {
            value = prompt("Enter link URL:");
          }
          this.quill.format("link", value, Quill.sources.USER);
        },
        list(value) {
          const range = this.quill.getSelection();
          const formats = this.quill.getFormat(range);
          if (value === "check") {
            if (formats.list === "checked" || formats.list === "unchecked") {
              this.quill.format("list", false, Quill.sources.USER);
            } else {
              this.quill.format("list", "unchecked", Quill.sources.USER);
            }
          } else {
            this.quill.format("list", value, Quill.sources.USER);
          }
        }
      }
    };
  }
});

// node_modules/quill/ui/icons.js
var alignLeftIcon, alignCenterIcon, alignRightIcon, alignJustifyIcon, backgroundIcon, blockquoteIcon, boldIcon, cleanIcon, codeIcon, colorIcon, directionLeftToRightIcon, directionRightToLeftIcon, formulaIcon, headerIcon, header2Icon, header3Icon, header4Icon, header5Icon, header6Icon, italicIcon, imageIcon, indentIcon, outdentIcon, linkIcon, listBulletIcon, listCheckIcon, listOrderedIcon, subscriptIcon, superscriptIcon, strikeIcon, tableIcon, underlineIcon, videoIcon, icons_default;
var init_icons = __esm({
  "node_modules/quill/ui/icons.js"() {
    alignLeftIcon = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>';
    alignCenterIcon = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>';
    alignRightIcon = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>';
    alignJustifyIcon = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>';
    backgroundIcon = '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>';
    blockquoteIcon = '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>';
    boldIcon = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>';
    cleanIcon = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>';
    codeIcon = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>';
    colorIcon = '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>';
    directionLeftToRightIcon = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>';
    directionRightToLeftIcon = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>';
    formulaIcon = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>';
    headerIcon = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>';
    header2Icon = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>';
    header3Icon = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>';
    header4Icon = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>';
    header5Icon = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>';
    header6Icon = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>';
    italicIcon = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>';
    imageIcon = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>';
    indentIcon = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>';
    outdentIcon = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>';
    linkIcon = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>';
    listBulletIcon = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>';
    listCheckIcon = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>';
    listOrderedIcon = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>';
    subscriptIcon = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>';
    superscriptIcon = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>';
    strikeIcon = '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>';
    tableIcon = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>';
    underlineIcon = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>';
    videoIcon = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>';
    icons_default = {
      align: {
        "": alignLeftIcon,
        center: alignCenterIcon,
        right: alignRightIcon,
        justify: alignJustifyIcon
      },
      background: backgroundIcon,
      blockquote: blockquoteIcon,
      bold: boldIcon,
      clean: cleanIcon,
      code: codeIcon,
      "code-block": codeIcon,
      color: colorIcon,
      direction: {
        "": directionLeftToRightIcon,
        rtl: directionRightToLeftIcon
      },
      formula: formulaIcon,
      header: {
        "1": headerIcon,
        "2": header2Icon,
        "3": header3Icon,
        "4": header4Icon,
        "5": header5Icon,
        "6": header6Icon
      },
      italic: italicIcon,
      image: imageIcon,
      indent: {
        "+1": indentIcon,
        "-1": outdentIcon
      },
      link: linkIcon,
      list: {
        bullet: listBulletIcon,
        check: listCheckIcon,
        ordered: listOrderedIcon
      },
      script: {
        sub: subscriptIcon,
        super: superscriptIcon
      },
      strike: strikeIcon,
      table: tableIcon,
      underline: underlineIcon,
      video: videoIcon
    };
  }
});

// node_modules/quill/ui/picker.js
function toggleAriaAttribute(element, attribute) {
  element.setAttribute(attribute, `${!(element.getAttribute(attribute) === "true")}`);
}
var DropdownIcon, optionsCounter, Picker, picker_default;
var init_picker = __esm({
  "node_modules/quill/ui/picker.js"() {
    DropdownIcon = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
    optionsCounter = 0;
    Picker = class {
      constructor(select) {
        this.select = select;
        this.container = document.createElement("span");
        this.buildPicker();
        this.select.style.display = "none";
        this.select.parentNode.insertBefore(this.container, this.select);
        this.label.addEventListener("mousedown", () => {
          this.togglePicker();
        });
        this.label.addEventListener("keydown", (event) => {
          switch (event.key) {
            case "Enter":
              this.togglePicker();
              break;
            case "Escape":
              this.escape();
              event.preventDefault();
              break;
            default:
          }
        });
        this.select.addEventListener("change", this.update.bind(this));
      }
      togglePicker() {
        this.container.classList.toggle("ql-expanded");
        toggleAriaAttribute(this.label, "aria-expanded");
        toggleAriaAttribute(this.options, "aria-hidden");
      }
      buildItem(option) {
        const item = document.createElement("span");
        item.tabIndex = "0";
        item.setAttribute("role", "button");
        item.classList.add("ql-picker-item");
        const value = option.getAttribute("value");
        if (value) {
          item.setAttribute("data-value", value);
        }
        if (option.textContent) {
          item.setAttribute("data-label", option.textContent);
        }
        item.addEventListener("click", () => {
          this.selectItem(item, true);
        });
        item.addEventListener("keydown", (event) => {
          switch (event.key) {
            case "Enter":
              this.selectItem(item, true);
              event.preventDefault();
              break;
            case "Escape":
              this.escape();
              event.preventDefault();
              break;
            default:
          }
        });
        return item;
      }
      buildLabel() {
        const label = document.createElement("span");
        label.classList.add("ql-picker-label");
        label.innerHTML = DropdownIcon;
        label.tabIndex = "0";
        label.setAttribute("role", "button");
        label.setAttribute("aria-expanded", "false");
        this.container.appendChild(label);
        return label;
      }
      buildOptions() {
        const options = document.createElement("span");
        options.classList.add("ql-picker-options");
        options.setAttribute("aria-hidden", "true");
        options.tabIndex = "-1";
        options.id = `ql-picker-options-${optionsCounter}`;
        optionsCounter += 1;
        this.label.setAttribute("aria-controls", options.id);
        this.options = options;
        Array.from(this.select.options).forEach((option) => {
          const item = this.buildItem(option);
          options.appendChild(item);
          if (option.selected === true) {
            this.selectItem(item);
          }
        });
        this.container.appendChild(options);
      }
      buildPicker() {
        Array.from(this.select.attributes).forEach((item) => {
          this.container.setAttribute(item.name, item.value);
        });
        this.container.classList.add("ql-picker");
        this.label = this.buildLabel();
        this.buildOptions();
      }
      escape() {
        this.close();
        setTimeout(() => this.label.focus(), 1);
      }
      close() {
        this.container.classList.remove("ql-expanded");
        this.label.setAttribute("aria-expanded", "false");
        this.options.setAttribute("aria-hidden", "true");
      }
      selectItem(item) {
        let trigger = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        const selected = this.container.querySelector(".ql-selected");
        if (item === selected) return;
        if (selected != null) {
          selected.classList.remove("ql-selected");
        }
        if (item == null) return;
        item.classList.add("ql-selected");
        this.select.selectedIndex = Array.from(item.parentNode.children).indexOf(item);
        if (item.hasAttribute("data-value")) {
          this.label.setAttribute("data-value", item.getAttribute("data-value"));
        } else {
          this.label.removeAttribute("data-value");
        }
        if (item.hasAttribute("data-label")) {
          this.label.setAttribute("data-label", item.getAttribute("data-label"));
        } else {
          this.label.removeAttribute("data-label");
        }
        if (trigger) {
          this.select.dispatchEvent(new Event("change"));
          this.close();
        }
      }
      update() {
        let option;
        if (this.select.selectedIndex > -1) {
          const item = (
            // @ts-expect-error Fix me later
            this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex]
          );
          option = this.select.options[this.select.selectedIndex];
          this.selectItem(item);
        } else {
          this.selectItem(null);
        }
        const isActive = option != null && option !== this.select.querySelector("option[selected]");
        this.label.classList.toggle("ql-active", isActive);
      }
    };
    picker_default = Picker;
  }
});

// node_modules/quill/ui/color-picker.js
var ColorPicker, color_picker_default;
var init_color_picker = __esm({
  "node_modules/quill/ui/color-picker.js"() {
    init_picker();
    ColorPicker = class extends picker_default {
      constructor(select, label) {
        super(select);
        this.label.innerHTML = label;
        this.container.classList.add("ql-color-picker");
        Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((item) => {
          item.classList.add("ql-primary");
        });
      }
      buildItem(option) {
        const item = super.buildItem(option);
        item.style.backgroundColor = option.getAttribute("value") || "";
        return item;
      }
      selectItem(item, trigger) {
        super.selectItem(item, trigger);
        const colorLabel = this.label.querySelector(".ql-color-label");
        const value = item ? item.getAttribute("data-value") || "" : "";
        if (colorLabel) {
          if (colorLabel.tagName === "line") {
            colorLabel.style.stroke = value;
          } else {
            colorLabel.style.fill = value;
          }
        }
      }
    };
    color_picker_default = ColorPicker;
  }
});

// node_modules/quill/ui/icon-picker.js
var IconPicker, icon_picker_default;
var init_icon_picker = __esm({
  "node_modules/quill/ui/icon-picker.js"() {
    init_picker();
    IconPicker = class extends picker_default {
      constructor(select, icons) {
        super(select);
        this.container.classList.add("ql-icon-picker");
        Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((item) => {
          item.innerHTML = icons[item.getAttribute("data-value") || ""];
        });
        this.defaultItem = this.container.querySelector(".ql-selected");
        this.selectItem(this.defaultItem);
      }
      selectItem(target, trigger) {
        super.selectItem(target, trigger);
        const item = target || this.defaultItem;
        if (item != null) {
          if (this.label.innerHTML === item.innerHTML) return;
          this.label.innerHTML = item.innerHTML;
        }
      }
    };
    icon_picker_default = IconPicker;
  }
});

// node_modules/quill/ui/tooltip.js
var isScrollable, Tooltip, tooltip_default;
var init_tooltip = __esm({
  "node_modules/quill/ui/tooltip.js"() {
    isScrollable = (el) => {
      const {
        overflowY
      } = getComputedStyle(el, null);
      return overflowY !== "visible" && overflowY !== "clip";
    };
    Tooltip = class {
      constructor(quill, boundsContainer) {
        this.quill = quill;
        this.boundsContainer = boundsContainer || document.body;
        this.root = quill.addContainer("ql-tooltip");
        this.root.innerHTML = this.constructor.TEMPLATE;
        if (isScrollable(this.quill.root)) {
          this.quill.root.addEventListener("scroll", () => {
            this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
          });
        }
        this.hide();
      }
      hide() {
        this.root.classList.add("ql-hidden");
      }
      position(reference) {
        const left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
        const top = reference.bottom + this.quill.root.scrollTop;
        this.root.style.left = `${left}px`;
        this.root.style.top = `${top}px`;
        this.root.classList.remove("ql-flip");
        const containerBounds = this.boundsContainer.getBoundingClientRect();
        const rootBounds = this.root.getBoundingClientRect();
        let shift = 0;
        if (rootBounds.right > containerBounds.right) {
          shift = containerBounds.right - rootBounds.right;
          this.root.style.left = `${left + shift}px`;
        }
        if (rootBounds.left < containerBounds.left) {
          shift = containerBounds.left - rootBounds.left;
          this.root.style.left = `${left + shift}px`;
        }
        if (rootBounds.bottom > containerBounds.bottom) {
          const height = rootBounds.bottom - rootBounds.top;
          const verticalShift = reference.bottom - reference.top + height;
          this.root.style.top = `${top - verticalShift}px`;
          this.root.classList.add("ql-flip");
        }
        return shift;
      }
      show() {
        this.root.classList.remove("ql-editing");
        this.root.classList.remove("ql-hidden");
      }
    };
    tooltip_default = Tooltip;
  }
});

// node_modules/quill/themes/base.js
function extractVideoUrl(url) {
  let match2 = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (match2) {
    return `${match2[1] || "https"}://www.youtube.com/embed/${match2[2]}?showinfo=0`;
  }
  if (match2 = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) {
    return `${match2[1] || "https"}://player.vimeo.com/video/${match2[2]}/`;
  }
  return url;
}
function fillSelect(select, values) {
  let defaultValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  values.forEach((value) => {
    const option = document.createElement("option");
    if (value === defaultValue) {
      option.setAttribute("selected", "selected");
    } else {
      option.setAttribute("value", String(value));
    }
    select.appendChild(option);
  });
}
var ALIGNS, COLORS, FONTS, HEADERS, SIZES, BaseTheme, BaseTooltip;
var init_base = __esm({
  "node_modules/quill/themes/base.js"() {
    init_lodash();
    init_emitter();
    init_theme();
    init_color_picker();
    init_icon_picker();
    init_picker();
    init_tooltip();
    ALIGNS = [false, "center", "right", "justify"];
    COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];
    FONTS = [false, "serif", "monospace"];
    HEADERS = ["1", "2", "3", false];
    SIZES = ["small", false, "large", "huge"];
    BaseTheme = class extends theme_default {
      constructor(quill, options) {
        super(quill, options);
        const listener = (e) => {
          if (!document.body.contains(quill.root)) {
            document.body.removeEventListener("click", listener);
            return;
          }
          if (this.tooltip != null && // @ts-expect-error
          !this.tooltip.root.contains(e.target) && // @ts-expect-error
          document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus()) {
            this.tooltip.hide();
          }
          if (this.pickers != null) {
            this.pickers.forEach((picker) => {
              if (!picker.container.contains(e.target)) {
                picker.close();
              }
            });
          }
        };
        quill.emitter.listenDOM("click", document.body, listener);
      }
      addModule(name) {
        const module2 = super.addModule(name);
        if (name === "toolbar") {
          this.extendToolbar(module2);
        }
        return module2;
      }
      buildButtons(buttons, icons) {
        Array.from(buttons).forEach((button) => {
          const className = button.getAttribute("class") || "";
          className.split(/\s+/).forEach((name) => {
            if (!name.startsWith("ql-")) return;
            name = name.slice("ql-".length);
            if (icons[name] == null) return;
            if (name === "direction") {
              button.innerHTML = icons[name][""] + icons[name].rtl;
            } else if (typeof icons[name] === "string") {
              button.innerHTML = icons[name];
            } else {
              const value = button.value || "";
              if (value != null && icons[name][value]) {
                button.innerHTML = icons[name][value];
              }
            }
          });
        });
      }
      buildPickers(selects, icons) {
        this.pickers = Array.from(selects).map((select) => {
          if (select.classList.contains("ql-align")) {
            if (select.querySelector("option") == null) {
              fillSelect(select, ALIGNS);
            }
            if (typeof icons.align === "object") {
              return new icon_picker_default(select, icons.align);
            }
          }
          if (select.classList.contains("ql-background") || select.classList.contains("ql-color")) {
            const format = select.classList.contains("ql-background") ? "background" : "color";
            if (select.querySelector("option") == null) {
              fillSelect(select, COLORS, format === "background" ? "#ffffff" : "#000000");
            }
            return new color_picker_default(select, icons[format]);
          }
          if (select.querySelector("option") == null) {
            if (select.classList.contains("ql-font")) {
              fillSelect(select, FONTS);
            } else if (select.classList.contains("ql-header")) {
              fillSelect(select, HEADERS);
            } else if (select.classList.contains("ql-size")) {
              fillSelect(select, SIZES);
            }
          }
          return new picker_default(select);
        });
        const update = () => {
          this.pickers.forEach((picker) => {
            picker.update();
          });
        };
        this.quill.on(emitter_default.events.EDITOR_CHANGE, update);
      }
    };
    BaseTheme.DEFAULTS = merge_default({}, theme_default.DEFAULTS, {
      modules: {
        toolbar: {
          handlers: {
            formula() {
              this.quill.theme.tooltip.edit("formula");
            },
            image() {
              let fileInput = this.container.querySelector("input.ql-image[type=file]");
              if (fileInput == null) {
                fileInput = document.createElement("input");
                fileInput.setAttribute("type", "file");
                fileInput.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", "));
                fileInput.classList.add("ql-image");
                fileInput.addEventListener("change", () => {
                  const range = this.quill.getSelection(true);
                  this.quill.uploader.upload(range, fileInput.files);
                  fileInput.value = "";
                });
                this.container.appendChild(fileInput);
              }
              fileInput.click();
            },
            video() {
              this.quill.theme.tooltip.edit("video");
            }
          }
        }
      }
    });
    BaseTooltip = class extends tooltip_default {
      constructor(quill, boundsContainer) {
        super(quill, boundsContainer);
        this.textbox = this.root.querySelector('input[type="text"]');
        this.listen();
      }
      listen() {
        this.textbox.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            this.save();
            event.preventDefault();
          } else if (event.key === "Escape") {
            this.cancel();
            event.preventDefault();
          }
        });
      }
      cancel() {
        this.hide();
        this.restoreFocus();
      }
      edit() {
        let mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link";
        let preview = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        this.root.classList.remove("ql-hidden");
        this.root.classList.add("ql-editing");
        if (this.textbox == null) return;
        if (preview != null) {
          this.textbox.value = preview;
        } else if (mode !== this.root.getAttribute("data-mode")) {
          this.textbox.value = "";
        }
        const bounds = this.quill.getBounds(this.quill.selection.savedRange);
        if (bounds != null) {
          this.position(bounds);
        }
        this.textbox.select();
        this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${mode}`) || "");
        this.root.setAttribute("data-mode", mode);
      }
      restoreFocus() {
        this.quill.focus({
          preventScroll: true
        });
      }
      save() {
        let {
          value
        } = this.textbox;
        switch (this.root.getAttribute("data-mode")) {
          case "link": {
            const {
              scrollTop
            } = this.quill.root;
            if (this.linkRange) {
              this.quill.formatText(this.linkRange, "link", value, emitter_default.sources.USER);
              delete this.linkRange;
            } else {
              this.restoreFocus();
              this.quill.format("link", value, emitter_default.sources.USER);
            }
            this.quill.root.scrollTop = scrollTop;
            break;
          }
          case "video": {
            value = extractVideoUrl(value);
          }
          // eslint-disable-next-line no-fallthrough
          case "formula": {
            if (!value) break;
            const range = this.quill.getSelection(true);
            if (range != null) {
              const index = range.index + range.length;
              this.quill.insertEmbed(
                index,
                // @ts-expect-error Fix me later
                this.root.getAttribute("data-mode"),
                value,
                emitter_default.sources.USER
              );
              if (this.root.getAttribute("data-mode") === "formula") {
                this.quill.insertText(index + 1, " ", emitter_default.sources.USER);
              }
              this.quill.setSelection(index + 2, emitter_default.sources.USER);
            }
            break;
          }
          default:
        }
        this.textbox.value = "";
        this.hide();
      }
    };
  }
});

// node_modules/quill/themes/bubble.js
var TOOLBAR_CONFIG, BubbleTooltip, BubbleTheme;
var init_bubble = __esm({
  "node_modules/quill/themes/bubble.js"() {
    init_lodash();
    init_emitter();
    init_base();
    init_selection();
    init_icons();
    init_quill();
    TOOLBAR_CONFIG = [["bold", "italic", "link"], [{
      header: 1
    }, {
      header: 2
    }, "blockquote"]];
    BubbleTooltip = class extends BaseTooltip {
      static TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join("");
      constructor(quill, bounds) {
        super(quill, bounds);
        this.quill.on(emitter_default.events.EDITOR_CHANGE, (type, range, oldRange, source) => {
          if (type !== emitter_default.events.SELECTION_CHANGE) return;
          if (range != null && range.length > 0 && source === emitter_default.sources.USER) {
            this.show();
            this.root.style.left = "0px";
            this.root.style.width = "";
            this.root.style.width = `${this.root.offsetWidth}px`;
            const lines = this.quill.getLines(range.index, range.length);
            if (lines.length === 1) {
              const bounds2 = this.quill.getBounds(range);
              if (bounds2 != null) {
                this.position(bounds2);
              }
            } else {
              const lastLine = lines[lines.length - 1];
              const index = this.quill.getIndex(lastLine);
              const length = Math.min(lastLine.length() - 1, range.index + range.length - index);
              const indexBounds = this.quill.getBounds(new Range(index, length));
              if (indexBounds != null) {
                this.position(indexBounds);
              }
            }
          } else if (document.activeElement !== this.textbox && this.quill.hasFocus()) {
            this.hide();
          }
        });
      }
      listen() {
        super.listen();
        this.root.querySelector(".ql-close").addEventListener("click", () => {
          this.root.classList.remove("ql-editing");
        });
        this.quill.on(emitter_default.events.SCROLL_OPTIMIZE, () => {
          setTimeout(() => {
            if (this.root.classList.contains("ql-hidden")) return;
            const range = this.quill.getSelection();
            if (range != null) {
              const bounds = this.quill.getBounds(range);
              if (bounds != null) {
                this.position(bounds);
              }
            }
          }, 1);
        });
      }
      cancel() {
        this.show();
      }
      position(reference) {
        const shift = super.position(reference);
        const arrow = this.root.querySelector(".ql-tooltip-arrow");
        arrow.style.marginLeft = "";
        if (shift !== 0) {
          arrow.style.marginLeft = `${-1 * shift - arrow.offsetWidth / 2}px`;
        }
        return shift;
      }
    };
    BubbleTheme = class extends BaseTheme {
      constructor(quill, options) {
        if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
          options.modules.toolbar.container = TOOLBAR_CONFIG;
        }
        super(quill, options);
        this.quill.container.classList.add("ql-bubble");
      }
      extendToolbar(toolbar) {
        this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
        if (toolbar.container != null) {
          this.tooltip.root.appendChild(toolbar.container);
          this.buildButtons(toolbar.container.querySelectorAll("button"), icons_default);
          this.buildPickers(toolbar.container.querySelectorAll("select"), icons_default);
        }
      }
    };
    BubbleTheme.DEFAULTS = merge_default({}, BaseTheme.DEFAULTS, {
      modules: {
        toolbar: {
          handlers: {
            link(value) {
              if (!value) {
                this.quill.format("link", false, Quill.sources.USER);
              } else {
                this.quill.theme.tooltip.edit();
              }
            }
          }
        }
      }
    });
  }
});

// node_modules/quill/themes/snow.js
var TOOLBAR_CONFIG2, SnowTooltip, SnowTheme, snow_default;
var init_snow = __esm({
  "node_modules/quill/themes/snow.js"() {
    init_lodash();
    init_emitter();
    init_base();
    init_link();
    init_selection();
    init_icons();
    init_quill();
    TOOLBAR_CONFIG2 = [[{
      header: ["1", "2", "3", false]
    }], ["bold", "italic", "underline", "link"], [{
      list: "ordered"
    }, {
      list: "bullet"
    }], ["clean"]];
    SnowTooltip = class extends BaseTooltip {
      static TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join("");
      preview = this.root.querySelector("a.ql-preview");
      listen() {
        super.listen();
        this.root.querySelector("a.ql-action").addEventListener("click", (event) => {
          if (this.root.classList.contains("ql-editing")) {
            this.save();
          } else {
            this.edit("link", this.preview.textContent);
          }
          event.preventDefault();
        });
        this.root.querySelector("a.ql-remove").addEventListener("click", (event) => {
          if (this.linkRange != null) {
            const range = this.linkRange;
            this.restoreFocus();
            this.quill.formatText(range, "link", false, emitter_default.sources.USER);
            delete this.linkRange;
          }
          event.preventDefault();
          this.hide();
        });
        this.quill.on(emitter_default.events.SELECTION_CHANGE, (range, oldRange, source) => {
          if (range == null) return;
          if (range.length === 0 && source === emitter_default.sources.USER) {
            const [link, offset] = this.quill.scroll.descendant(Link, range.index);
            if (link != null) {
              this.linkRange = new Range(range.index - offset, link.length());
              const preview = Link.formats(link.domNode);
              this.preview.textContent = preview;
              this.preview.setAttribute("href", preview);
              this.show();
              const bounds = this.quill.getBounds(this.linkRange);
              if (bounds != null) {
                this.position(bounds);
              }
              return;
            }
          } else {
            delete this.linkRange;
          }
          this.hide();
        });
      }
      show() {
        super.show();
        this.root.removeAttribute("data-mode");
      }
    };
    SnowTheme = class extends BaseTheme {
      constructor(quill, options) {
        if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
          options.modules.toolbar.container = TOOLBAR_CONFIG2;
        }
        super(quill, options);
        this.quill.container.classList.add("ql-snow");
      }
      extendToolbar(toolbar) {
        if (toolbar.container != null) {
          toolbar.container.classList.add("ql-snow");
          this.buildButtons(toolbar.container.querySelectorAll("button"), icons_default);
          this.buildPickers(toolbar.container.querySelectorAll("select"), icons_default);
          this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
          if (toolbar.container.querySelector(".ql-link")) {
            this.quill.keyboard.addBinding({
              key: "k",
              shortKey: true
            }, (_range, context) => {
              toolbar.handlers.link.call(toolbar, !context.format.link);
            });
          }
        }
      }
    };
    SnowTheme.DEFAULTS = merge_default({}, BaseTheme.DEFAULTS, {
      modules: {
        toolbar: {
          handlers: {
            link(value) {
              if (value) {
                const range = this.quill.getSelection();
                if (range == null || range.length === 0) return;
                let preview = this.quill.getText(range);
                if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf("mailto:") !== 0) {
                  preview = `mailto:${preview}`;
                }
                const {
                  tooltip
                } = this.quill.theme;
                tooltip.edit("link", preview);
              } else {
                this.quill.format("link", false, Quill.sources.USER);
              }
            }
          }
        }
      }
    });
    snow_default = SnowTheme;
  }
});

// node_modules/quill/quill.js
var quill_default;
var init_quill2 = __esm({
  "node_modules/quill/quill.js"() {
    init_core();
    init_align();
    init_direction();
    init_indent();
    init_blockquote();
    init_header();
    init_list();
    init_background();
    init_color();
    init_font();
    init_size();
    init_bold();
    init_italic();
    init_link();
    init_script();
    init_strike();
    init_underline();
    init_formula();
    init_image();
    init_video();
    init_code();
    init_syntax();
    init_table2();
    init_toolbar();
    init_icons();
    init_picker();
    init_color_picker();
    init_icon_picker();
    init_tooltip();
    init_bubble();
    init_snow();
    init_core();
    core_default.register({
      "attributors/attribute/direction": DirectionAttribute,
      "attributors/class/align": AlignClass,
      "attributors/class/background": BackgroundClass,
      "attributors/class/color": ColorClass,
      "attributors/class/direction": DirectionClass,
      "attributors/class/font": FontClass,
      "attributors/class/size": SizeClass,
      "attributors/style/align": AlignStyle,
      "attributors/style/background": BackgroundStyle,
      "attributors/style/color": ColorStyle,
      "attributors/style/direction": DirectionStyle,
      "attributors/style/font": FontStyle,
      "attributors/style/size": SizeStyle
    }, true);
    core_default.register({
      "formats/align": AlignClass,
      "formats/direction": DirectionClass,
      "formats/indent": indent_default,
      "formats/background": BackgroundStyle,
      "formats/color": ColorStyle,
      "formats/font": FontClass,
      "formats/size": SizeClass,
      "formats/blockquote": blockquote_default,
      "formats/code-block": CodeBlock,
      "formats/header": header_default,
      "formats/list": ListItem,
      "formats/bold": bold_default,
      "formats/code": Code,
      "formats/italic": italic_default,
      "formats/link": Link,
      "formats/script": script_default,
      "formats/strike": strike_default,
      "formats/underline": underline_default,
      "formats/formula": formula_default,
      "formats/image": image_default,
      "formats/video": video_default,
      "modules/syntax": Syntax,
      "modules/table": table_default,
      "modules/toolbar": Toolbar,
      "themes/bubble": BubbleTheme,
      "themes/snow": snow_default,
      "ui/icons": icons_default,
      "ui/picker": picker_default,
      "ui/icon-picker": icon_picker_default,
      "ui/color-picker": color_picker_default,
      "ui/tooltip": tooltip_default
    }, true);
    quill_default = core_default;
  }
});

// src/sal/components/fields/TextAreaModule.js
var ko11, editTemplate7, viewTemplate3, TextAreaModule;
var init_TextAreaModule = __esm({
  "src/sal/components/fields/TextAreaModule.js"() {
    ko11 = __toESM(require_knockout_latest());
    init_quill2();
    init_BaseFieldModule();
    editTemplate7 = html`
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
    viewTemplate3 = html`
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
        var editor = new quill_default("#" + this.getUniqueId(), {
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
      static viewTemplate = viewTemplate3;
      static editTemplate = editTemplate7;
      static view = "text-area-view";
      static edit = "text-area-edit";
      static new = "text-area-edit";
    };
    registerFieldComponents(TextAreaModule);
  }
});

// src/sal/components/fields/TextModule.js
var editTemplate8, TextModule;
var init_TextModule = __esm({
  "src/sal/components/fields/TextModule.js"() {
    init_BaseFieldModule();
    editTemplate8 = html`
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
      static editTemplate = editTemplate8;
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
var ko12, BlobField;
var init_BlobField = __esm({
  "src/sal/fields/BlobField.js"() {
    ko12 = __toESM(require_knockout_latest());
    init_BaseField();
    init_fields();
    BlobField = class _BlobField extends BaseField {
      constructor(params) {
        super(params);
        this.entityType = params.entityType;
        this.multiple = params.multiple;
        if (this.multiple) {
          this.Value = ko12.observableArray();
        }
        if (ko12.isObservable(this.entityType)) {
          this.entityType.subscribe(this.updateEntityTypeHandler);
        }
        this.updateEntityTypeHandler(ko12.unwrap(this.entityType));
      }
      toString = ko12.pureComputed(() => `${this.Value()?.length ?? "0"} items`);
      toJSON = ko12.pureComputed(() => {
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
        return ko12.utils.unwrapObservable(this.entityType);
      }
      // use purecomputed for memoization, fields shouldn't change
      Cols = ko12.pureComputed(() => {
        const entityType = ko12.unwrap(this.entityType);
        if (!entityType) return [];
        const newEntity = new this.entityConstructor();
        return newEntity.FormFields();
      });
      // ColKeys = ko.pureComputed(() =>
      //   new this.entityConstructor()?.FormFieldKeys()
      // );
      // Support multiple items
      NewItem = ko12.observable();
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
    init_BaseField();
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
var ko13, DateField;
var init_DateField = __esm({
  "src/sal/fields/DateField.js"() {
    ko13 = __toESM(require_knockout_latest());
    init_fields();
    init_BaseField();
    init_fields();
    DateField = class extends BaseField {
      constructor(params) {
        super(params);
        this.type = params.type ?? dateFieldTypes.date;
      }
      toString = ko13.pureComputed(() => {
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
      get = ko13.pureComputed(() => {
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
var ko14, LookupField;
var init_LookupField = __esm({
  "src/sal/fields/LookupField.js"() {
    ko14 = __toESM(require_knockout_latest());
    init_fields();
    init_BaseField();
    LookupField = class extends BaseField {
      constructor({
        displayName,
        type: entityType,
        isRequired = false,
        Visible,
        entitySet,
        options = ko14.observableArray(),
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
        this.Value = multiple ? ko14.observableArray() : ko14.observable();
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
      Options = ko14.pureComputed(() => {
        const optsFilter = ko14.unwrap(this.optionsFilter);
        const allOpts = ko14.unwrap(this.allOpts);
        return allOpts.filter(optsFilter);
      });
      IsLoading = ko14.observable(false);
      HasLoaded = ko14.observable(false);
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
      toString = ko14.pureComputed(() => {
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

// src/env.js
var assetsPath;
var init_env = __esm({
  "src/env.js"() {
    assetsPath = () => `${window.context.pageContext.serverRelativeUrl}/Style Library/apps/audit/src`;
  }
});

// src/sal/infrastructure/knockout_extensions.js
var ko15, fromPathTemplateLoader, fromPathViewModelLoader;
var init_knockout_extensions = __esm({
  "src/sal/infrastructure/knockout_extensions.js"() {
    ko15 = __toESM(require_knockout_latest());
    init_entities();
    init_sal();
    init_env();
    ko15.subscribable.fn.subscribeChanged = function(callback) {
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
    ko15.observableArray.fn.subscribeAdded = function(callback) {
      this.subscribe(
        function(arrayChanges) {
          const addedValues = arrayChanges.filter((value) => value.status == "added").map((value) => value.value);
          callback(addedValues);
        },
        this,
        "arrayChange"
      );
    };
    ko15.bindingHandlers.searchSelect = {
      init: function(element, valueAccessor, allBindingsAccessor) {
        const { options, selectedOptions, optionsText, onSearchInput } = valueAccessor();
        function populateOpts() {
          const optionItems = ko15.unwrap(options);
          const selectedOpts = ko15.unwrap(selectedOptions) ?? [];
          const optionElements = optionItems.map((option) => {
            const optionElement = document.createElement("option");
            ko15.selectExtensions.writeValue(optionElement, ko15.unwrap(option));
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
        if (ko15.isObservable(options)) {
          options.subscribe(() => populateOpts(), this);
        }
        ko15.utils.registerEventHandler(element, "change", (e) => {
          selectedOptions(
            element.selectedOptions.map((opt) => ko15.selectExtensions.readValue(opt))
          );
        });
        if (onSearchInput) {
          ko15.utils.registerEventHandler(element, "input", (e) => {
            onSearchInput(e.originalEvent.target.searchInputElement.value);
          });
        }
      },
      update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        const { selectedOptions } = valueAccessor();
        const selectedUnwrapped = ko15.unwrap(selectedOptions);
        for (var i = 0; i < element.options.length; i++) {
          const o = element.options[i];
          o.toggleAttribute(
            "selected",
            selectedUnwrapped.includes(ko15.selectExtensions.readValue(o))
          );
        }
      }
    };
    ko15.bindingHandlers.people = {
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
          var observable15 = valueAccessor();
          var userJSObject = pickerControl.GetControlValueAsJSObject()[0];
          if (!userJSObject) {
            observable15(null);
            return;
          }
          if (userJSObject.IsResolved) {
            if (userJSObject.Key == observable15()?.LoginName) return;
            var user = await ensureUserByKeyAsync(userJSObject.Key);
            var person = new People2(user);
            observable15(person);
          }
        };
        SPClientPeoplePicker_InitStandaloneControlWrapper(element.id, null, schema);
      },
      update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var pickerControl = SPClientPeoplePicker.SPClientPeoplePickerDict[element.id + "_TopSpan"];
        var userValue = ko15.utils.unwrapObservable(valueAccessor());
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
    ko15.bindingHandlers.dateField = {
      init: function(element, valueAccessor, allBindingsAccessor) {
      },
      update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      }
    };
    ko15.bindingHandlers.downloadLink = {
      update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var path = valueAccessor();
        var replaced = path.replace(/:([A-Za-z_]+)/g, function(_, token) {
          return ko15.unwrap(viewModel[token]);
        });
        element.href = replaced;
      }
    };
    ko15.bindingHandlers.files = {
      init: function(element, valueAccessor) {
        function addFiles(fileList) {
          var value = valueAccessor();
          if (!fileList.length) {
            value.removeAll();
            return;
          }
          const existingFiles = ko15.unwrap(value);
          const newFileList = [];
          for (let file of fileList) {
            if (!existingFiles.find((exFile) => exFile.name == file.name))
              newFileList.push(file);
          }
          ko15.utils.arrayPushAll(value, newFileList);
          return;
        }
        ko15.utils.registerEventHandler(element, "change", function() {
          addFiles(element.files);
        });
        const label = element.closest("label");
        if (!label) return;
        ko15.utils.registerEventHandler(label, "dragover", function(event) {
          event.preventDefault();
          event.stopPropagation();
        });
        ko15.utils.registerEventHandler(label, "dragenter", function(event) {
          event.preventDefault();
          event.stopPropagation();
          label.classList.add("dragging");
        });
        ko15.utils.registerEventHandler(label, "dragleave", function(event) {
          event.preventDefault();
          event.stopPropagation();
          label.classList.remove("dragging");
        });
        ko15.utils.registerEventHandler(label, "drop", function(event) {
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
    ko15.bindingHandlers.toggleClick = {
      init: function(element, valueAccessor, allBindings) {
        var value = valueAccessor();
        ko15.utils.registerEventHandler(element, "click", function() {
          var classToToggle = allBindings.get("toggleClass");
          var classContainer = allBindings.get("classContainer");
          var containerType = allBindings.get("containerType");
          if (containerType && containerType == "sibling") {
            let sibling = element.nextElementSibling;
            while (sibling && !sibling.matches(classContainer)) {
              sibling.classList.toggle(classToToggle);
              sibling = sibling.nextElementSibling;
            }
          } else if (containerType && containerType == "doc") {
            var curIcon = element.getAttribute("src");
            if (curIcon == "/_layouts/images/minus.gif") {
              element.setAttribute("src", "/_layouts/images/plus.gif");
            } else {
              element.setAttribute("src", "/_layouts/images/minus.gif");
            }
            if (element.parentElement && element.parentElement.parentElement) {
              let sibling = element.parentElement.parentElement.nextElementSibling;
              while (sibling && !sibling.matches(classContainer)) {
                sibling.classList.toggle(classToToggle);
                sibling = sibling.nextElementSibling;
              }
            }
          } else if (containerType && containerType == "any") {
            const elements = document.querySelectorAll("." + classToToggle);
            elements.forEach(function(element2) {
              if (element2.style.display === "none") {
                element2.style.display = "";
              } else {
                element2.style.display = "none";
              }
            });
          } else {
            const containers = element.querySelectorAll(classContainer);
            containers.forEach(function(container) {
              container.classList.toggle(classToToggle);
            });
          }
        });
      }
    };
    ko15.bindingHandlers.toggles = {
      init: function(element, valueAccessor) {
        var value = valueAccessor();
        ko15.utils.registerEventHandler(element, "click", function() {
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
              (text) => ko15.components.defaultLoader.loadTemplate(name, text, callback)
            );
          }).then(
            (text) => text ? ko15.components.defaultLoader.loadTemplate(name, text, callback) : null
          );
        } else {
          callback(null);
        }
      }
    };
    ko15.components.loaders.unshift(fromPathTemplateLoader);
    fromPathViewModelLoader = {
      loadViewModel: function(name, viewModelConfig, callback) {
        if (viewModelConfig.viaLoader) {
          const module2 = import(assetsPath() + viewModelConfig.viaLoader).then(
            (module3) => {
              const viewModelConstructor = module3.default;
              ko15.components.defaultLoader.loadViewModel(
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
    ko15.components.loaders.unshift(fromPathViewModelLoader);
  }
});

// src/sal/infrastructure/register_components.js
function directRegisterComponent(name, { template, viewModel = null }) {
  ko16.components.register(name, {
    template,
    viewModel
  });
}
var ko16, html2;
var init_register_components = __esm({
  "src/sal/infrastructure/register_components.js"() {
    ko16 = __toESM(require_knockout_latest());
    html2 = String.raw;
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
var ko17, PeopleField;
var init_PeopleField = __esm({
  "src/sal/fields/PeopleField.js"() {
    ko17 = __toESM(require_knockout_latest());
    init_infrastructure();
    init_fields();
    init_entities();
    init_infrastructure();
    init_sal();
    init_BaseField();
    PeopleField = class extends BaseField {
      constructor(params) {
        super(params);
        this.spGroupName = params.spGroupName ?? null;
        this.multiple = params.multiple ?? false;
        this.Value = this.multiple ? ko17.observableArray() : ko17.observable();
        if (ko17.isObservable(this.spGroupName)) {
          this.spGroupName.subscribe(this.spGroupNameChangedHandler);
        }
        if (ko17.unwrap(this.spGroupName)) {
          this.spGroupNameChangedHandler(ko17.unwrap(this.spGroupName));
        }
      }
      spGroupId = ko17.observable();
      userOpts = ko17.observableArray();
      expandUsers = ko17.observable(false);
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
      pickerOptions = ko17.pureComputed(() => {
        const groupId = ko17.unwrap(this.spGroupId);
        const opts = {
          AllowMultipleValues: this.multiple
        };
        if (groupId) opts.SharePointGroupID = groupId;
        return opts;
      });
      toString = ko17.pureComputed(() => {
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
var ko18, SelectField;
var init_SelectField = __esm({
  "src/sal/fields/SelectField.js"() {
    ko18 = __toESM(require_knockout_latest());
    init_fields();
    init_BaseField();
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
        this.Value = multiple ? ko18.observableArray() : ko18.observable();
        this.optionsText = optionsText;
        this.components = this.multiple ? SearchSelectModule : SelectModule;
      }
      toString = ko18.pureComputed(
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
      Options = ko18.observableArray();
    };
  }
});

// src/sal/fields/TextAreaField.js
var TextAreaField;
var init_TextAreaField = __esm({
  "src/sal/fields/TextAreaField.js"() {
    init_fields();
    init_BaseField();
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
    init_BaseField();
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
var ko19, ConstrainedEntity;
var init_constrained_entity = __esm({
  "src/sal/primitives/constrained_entity.js"() {
    ko19 = __toESM(require_knockout_latest());
    init_entity();
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
      Errors = ko19.pureComputed(() => {
        return Object.values(this.FieldMap).filter((field) => field?.Errors && field.Errors()).flatMap((field) => field.Errors());
      });
      IsValid = ko19.pureComputed(() => !this.Errors().length);
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
          "Description",
          "EmailGroup",
          "OrgType",
          "PostCode",
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

// src/sal/primitives/index.js
var init_primitives = __esm({
  "src/sal/primitives/index.js"() {
    init_validation_error();
    init_entity();
    init_constrained_entity();
  }
});

// src/infrastructure/store.js
var ko20, configurationsStore, auditOrganizationStore, allActionOfficesFilter, allRequestingOfficesFilter;
var init_store = __esm({
  "src/infrastructure/store.js"() {
    init_entities2();
    ko20 = __toESM(require_knockout_latest());
    configurationsStore = {};
    auditOrganizationStore = ko20.observableArray();
    allActionOfficesFilter = (org) => ORGROLES.ACTIONOFFICE == org.Role;
    allRequestingOfficesFilter = (org) => ORGROLES.REQUESTINGOFFICE == org.Role;
  }
});

// src/entities/audit_request.js
var ko21, AUDITREQUESTSTATES, AUDITREQUESTTYPES, getRequestDefaultReminders, AuditRequest;
var init_audit_request = __esm({
  "src/entities/audit_request.js"() {
    ko21 = __toESM(require_knockout_latest());
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
          requirement: ko21.pureComputed(() => {
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
        instructions: ko21.pureComputed(() => {
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
      isTasker = ko21.pureComputed(() => {
        return this.ReqType.Value() == AUDITREQUESTTYPES.TASKER;
      });
      isRequest = ko21.pureComputed(() => {
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

// src/entities/audit_coversheet.js
var ko22, AuditCoversheet;
var init_audit_coversheet = __esm({
  "src/entities/audit_coversheet.js"() {
    ko22 = __toESM(require_knockout_latest());
    init_audit_request();
    init_audit_organization();
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
        optionsFilter: ko22.pureComputed(() => {
          const request2 = ko22.unwrap(this.ReqNum.Value);
          if (!request2) return (val) => val;
          const requestActionOffices = ko22.unwrap(request2.ActionOffice.Value);
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
var ko32 = __toESM(require_knockout_latest());

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
  var m_siteUrl = window.context.pageContext.web.serverRelativeUrl;
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
      var ID = oListItem.get_item("ID");
      var title = oListItem.get_item("Title");
      var userGroup = oListItem.get_item("UserGroup");
      if (userGroup != null) {
        userGroup = userGroup.get_lookupValue();
      } else userGroup = "";
      let role = oListItem.get_item("Role");
      var aoObject = {
        ID,
        title,
        userGroup,
        role
      };
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
    var match2 = false;
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
                match2 = true;
                break;
              }
            }
          }
        }
      }
    }
    return match2;
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
    var spGroupQA = m_fnGetSPSiteGroup(m_groupNameQA);
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
          var actionOfficeGroupName = m_fnGetAOSPGroupName(actionOfficeName);
          var actionOfficeGroup = m_fnGetSPSiteGroup(actionOfficeGroupName);
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
      var newIntA = m_fnPadDigits(intA, 5);
      newA = subA + newIntA;
    } else newA = aTitle;
    var bIndex = bTitle.lastIndexOf("-");
    if (bIndex >= 0) {
      var subB = bTitle.substring(0, bIndex + 1);
      var lastB = bTitle.replace(subB, "");
      var intB = parseInt(lastB, 10);
      var newIntB = m_fnPadDigits(intB, 5);
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
      var newIntA = m_fnPadDigits(intA, 5);
      newA = subA + newIntA;
    } else newA = aTitle;
    var bIndex = bTitle.lastIndexOf("-");
    if (bIndex >= 0) {
      var subB = bTitle.substring(0, bIndex + 1);
      var lastB = bTitle.replace(subB, "");
      var intB = parseInt(lastB, 10);
      var newIntB = m_fnPadDigits(intB, 5);
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
      fileSize = m_fnPreciseRound(fileSize / 1048576, 2) + " MB";
    } else if (fileSize > 1024) {
      fileSize = m_fnPreciseRound(fileSize / 1024, 2) + " KB";
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
      options.url = m_fnGetSiteUrl() + "/SitePages/AuditUserManuals.aspx?FilterField1=DocType&FilterValue1=" + docType;
    else options.url = m_fnGetSiteUrl() + "/SitePages/AuditUserManuals.aspx";
    SP.UI.ModalDialog.showModalDialog(options);
  }
  function m_fnPrintPage(pageTitle, divTbl) {
    var curDate = /* @__PURE__ */ new Date();
    var siteUrl = commonUtilities.publicMembers.GetSiteUrl();
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
  function m_fnGetSiteUrl() {
    if (m_siteUrl == "/") return "";
    else return m_siteUrl;
  }
  var publicMembers = {
    GetSiteUrl: m_fnGetSiteUrl,
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
var htmlFrag = `<body><link 
  rel="stylesheet"\r
  href="https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool@latest/lib/fontawesome-6.5.1/css/fontawesome.min.css"\r
>\r
<link 
  rel="stylesheet"\r
  href="https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool@latest/lib/fontawesome-6.5.1/css/solid.min.css"\r
>\r
\r
<iframe id="CsvExpFrame" style="display: none"></iframe>\r
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
  <div class="tasks running" data-bind="if: $data.length">\r
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
  <div class="audit-body" style="display: none" data-bind="visible: loadedAt">\r
    <div class="reports-container">\r
      <div id="divRefresh" class="quick-links" style="display: none">\r
        <div>\r
          <a 
            title="Refresh this page"\r
            href="javascript:void(0)"\r
            data-bind="click: refresh"\r
            ><span class="fa-solid fa-arrows-rotate"></span>Refresh</a>\r
        </div>\r
        <div>\r
          <a 
            title="View User Manual"\r
            href="javascript:void(0)"\r
            onclick="Audit.Common.Utilities.ViewUserManuals('AO User Manual')"\r
            ><span class="fa-solid fa-question"></span>User Manual</a>\r
        </div>\r
        <div>\r
          <a title="Help" href="mailto:cgfsauditrequests@state.gov"\r
            ><span class="fa-regular fa-envelope"></span>Request Help</a>\r
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
\r
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
  addStatus = (status) => {
    this.Status(status);
    window.clearTimeout(this.timeout);
  };
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
  permissionsRequestAOSpecialPerms: (actionOfficeName) => {
    return {
      msg: `Ensuring ${actionOfficeName} Permissions on Request`,
      blocking: true
    };
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

// src/sal/components/modal/ModalDialogTemplate.html
var import_meta_document4 = new DocumentFragment();
var htmlFrag4 = `<body><dialog 
  id=""\r
  class="card bg-dark draggable modal-dialog"\r
  data-bind="attr: {id: getUniqueId() }"\r
>\r
  \r
  <div class="card-header bg-dark grabber">\r
    <h2 class="card-title" data-bind="text: title"></h2>\r
    <h2 class="card-title">\r
      <i class="fa-solid fa-xmark pointer" data-bind="click: clickClose"></i>\r
    </h2>\r
  </div>\r
  \r
  <div class="dimmer" data-bind="css: {'active': form.saving }">\r
    <span class="loader"></span>\r
    <ul class="" data-bind="foreach: $root.blockingTasks">\r
      <li data-bind="text: msg + '...'"></li>\r
    </ul>\r
  </div>\r
  <div 
    class="card-body"\r
    data-bind="component: { name: form.componentName, params: form.params }"\r
  ></div>\r
  \r
  \r
  <div class="card-body">\r
    <iframe frameborder="0" data-bind="attr: {src: url}"></iframe>\r
  </div>\r
  \r
  \r
  <div class="card-body" data-bind="html: html"></div>\r
  \r
  <div class="card-actions">\r
    <button 
      style\r
      type="button"\r
      class="btn btn-danger"\r
      data-bind="click: clickClose"\r
    >\r
      Cancel\r
    </button>\r
    \r
    <button 
      type="button"\r
      class="btn btn-success"\r
      data-bind="click: clickSubmit"\r
    >\r
      Ok\r
    </button>\r
    \r
  </div>\r
</dialog>\r
</body>`;
var fragment4 = new DOMParser().parseFromString(htmlFrag4, "text/html");
import_meta_document4.append(...fragment4.body.childNodes);
var ModalDialogTemplate_default = import_meta_document4;

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
    if (this.form) {
      if (this.form?.onComplete) {
        alert("Pass the form onComplete to the modal dialog!");
        return;
      }
      this.form.onComplete = this.close.bind(this);
    }
    if (dialogOpts.url) {
      const parsedUrl = new URL(
        dialogOpts.url.startsWith("http") ? dialogOpts.url : window.location.origin + dialogOpts.url
      );
      parsedUrl.searchParams.set("env", "WebView");
      this.url = parsedUrl.href;
    }
    if (dialogOpts.html) {
      this.html = dialogOpts.html;
    }
    toggle = this.toggle;
  }
  url = null;
  html = null;
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
  clickSubmit = () => {
    this.close(true);
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
    resizeDialog(this.dlgElement, this.dialogOpts);
    this.showModal();
  };
};
directRegisterComponent(componentName, {
  template: ModalDialogTemplate_default,
  viewModel: ModalDialogModule
});
function resizeDialog(elmnt, options) {
  if (options.autoSize) {
  }
  const autoWidth = options.autoSize ? Math.max(window.visualViewport.width - 200, 550) : 550;
  const autoHeight = options.autoSize ? Math.max(window.visualViewport.height - 200, 750) : null;
  const width = options.width ?? autoWidth;
  const height = options.height ?? autoHeight;
  elmnt.style.width = width + "px";
  if (height) elmnt.style.height = height + "px";
  elmnt.style.top = "125px";
  elmnt.style.left = (window.GetViewportWidth() - width) / 2 + "px";
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
    ResIDId: response.ID,
    DocumentStatus: AuditResponseDocStates.Open
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

// src/styles.css
var styles_default = {};

// node_modules/quill/dist/quill.snow.css
var quill_snow_default = {};

// src/infrastructure/register_styles.js
function registerStyles(element) {
  [styles_default, quill_snow_default].forEach((stylesheet) => {
    const styles = document.createElement("style");
    styles.innerHTML = stylesheet;
    document.head.append(styles);
  });
  const s = document.querySelector('[data-is-scrollable="true"]');
  if (s) s.style.overflowY = "auto";
}

// src/pages/ao_db/ao_db.js
init_sal();

// src/services/notifications.js
var ko31 = __toESM(require_knockout_latest());
var Notification = class {
  constructor(message) {
    this.message = message;
  }
};
var notifications = ko31.observableArray();
function addNotification(message, blockTimeout) {
  const newNotification = new Notification(message);
  notifications.push(newNotification);
  if (!blockTimeout) {
    window.setTimeout(() => notifications.remove(newNotification), 3e3);
  }
  return newNotification;
}

// src/tasks/db_tasks.js
var loadingRemainder = new TaskDef("Loading Remainder Data", true);
var loadInfo = new TaskDef("Loading Initial Data");
var loadData = new TaskDef("Building Dashboard");
var submitPackageTaskDef = new TaskDef(
  "Submitting Response Package",
  true
);

// src/tasks/request_view_tasks.js
var loadingResponses = new TaskDef("Loading Responses");
var loadingResponseDocs = new TaskDef("Loading Response Docs");

// src/pages/ao_db/ao_db.js
var Audit2 = window.Audit || {
  Common: {},
  AOReport: {}
};
var responseParam = "ResNum";
async function load(element, context) {
  window.context = context;
  element.innerHTML = ao_db_default;
  registerStyles(element);
  initAppcontext();
  await InitSal();
  Audit2.Common.Utilities = new NewUtilities();
  Audit2.AOReport.Report = new Audit2.AOReport.NewReportPage();
  Audit2.AOReport.Init();
}
Audit2.AOReport.Init = function() {
  var paramShowSiteActionsToAnyone = getUrlParam("ShowSiteActions");
  if (paramShowSiteActionsToAnyone != true) {
    $("#RibbonContainer-TabRowLeft").hide();
    $(".ms-siteactionsmenu").hide();
  }
  function SetTimer() {
    var intervalRefreshID = setInterval(function() {
      var divVal = document.getElementById("divCounter").innerText;
      var count = divVal * 1 - 1;
      document.getElementById("divCounter").innerText = count;
      if (count <= 0) {
        if (!Audit2.AOReport.Report.IsTransactionExecuting())
          Audit2.AOReport.Report.Refresh();
        else {
          clearInterval(intervalRefreshID);
          document.getElementById("divCounter").innerText = "1200";
          SetTimer();
        }
      }
    }, 1e3);
  }
  SetTimer();
};
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
    var self2 = this;
    self2.debugMode = ko32.observable(false);
    self2.siteUrl = Audit2.Common.Utilities.GetSiteUrl();
    self2.loadedAt = ko32.observable();
    self2.tabOpts = {
      Responses: new Tab("response-report", "Status Report", {
        id: "responseStatusReportTemplate",
        data: self2
      }),
      ResponseDetail: new Tab("response-detail", "Responses", {
        id: "responseDetailTemplate",
        data: self2
      })
    };
    self2.tabs = new TabsModule(Object.values(self2.tabOpts));
    self2.runningTasks = runningTasks;
    self2.blockingTasks = blockingTasks;
    self2.arrResponses = ko32.observableArray(null);
    self2.arrFilteredResponsesCount = ko32.observable(0);
    self2.cntPendingReview = ko32.observable(0);
    self2.ddOptionsResponseTabRequestID = ko32.observableArray();
    self2.ddOptionsResponseTabRequestStatus = ko32.observableArray();
    self2.ddOptionsResponseTabRequestInternalDueDate = ko32.observableArray();
    self2.ddOptionsResponseTabRequestSample = ko32.observableArray();
    self2.ddOptionsResponseTabResponseTitle = ko32.observableArray();
    self2.ddOptionsResponseTabResponseStatus = ko32.observableArray();
    self2.filterResponseTabRequestIntDueDate = ko32.observable();
    self2.filterResponseTabResponseName = ko32.observable();
    self2.filterResponseTabResponseStatus = ko32.observable();
    self2.doSort = ko32.observable(false);
    self2.ddOptionsResponseInfoTabResponseNameOpen2 = ko32.observableArray();
    self2.ddOptionsResponseInfoTabResponseNameProcessed2 = ko32.observableArray();
    self2.filterResponseInfoTabResponseNameOpen2 = ko32.observable("");
    self2.filterResponseInfoTabResponseNameProcessed2 = ko32.observable("");
    self2.currentResponse = ko32.observable();
    self2.arrCoverSheets = ko32.observableArray(null);
    self2.arrResponseDocs = ko32.observable(null);
    self2.cntResponseDocs = ko32.observable(0);
    self2.responseDocFiles = ko32.observableArray();
    self2.showUpload = ko32.observable(false);
    self2.showSubmit = ko32.observable(false);
    self2.showReturned = ko32.pureComputed(() => {
      const oResponse = ko32.unwrap(self2.currentResponse);
      if (!oResponse) return false;
      return oResponse.resStatus == m_responseStatus2 && oResponse.returnReason != null && oResponse.returnReason != "";
    });
    self2.refresh = () => window.location.reload();
    self2.onNewResponseDocCallback = self2.refresh;
    self2.currentResponse.subscribe((newResponse) => {
      if (!newResponse) return;
      setUrlParam(responseParam, newResponse.title);
    });
    self2.selectedFiltersResponseTab = ko32.computed(function() {
      var requestIntDueDate = self2.filterResponseTabRequestIntDueDate();
      var responseName = self2.filterResponseTabResponseName();
      var responseStatus = self2.filterResponseTabResponseStatus();
      return requestIntDueDate + " " + responseName + " " + responseStatus;
    });
    self2.ClearFiltersResponseTab = function() {
      self2.filterResponseTabRequestIntDueDate("");
      self2.filterResponseTabResponseName("");
      self2.filterResponseTabResponseStatus("");
    };
    self2.FilterChangedResponseTab = function() {
      document.body.style.cursor = "wait";
      setTimeout(function() {
        var requestIntDueDate = self2.filterResponseTabRequestIntDueDate();
        var responseName = self2.filterResponseTabResponseName();
        var responseStatus = self2.filterResponseTabResponseStatus();
        if (!requestIntDueDate && !responseName && !responseStatus) {
          $(".sr-response-item").show();
          self2.arrFilteredResponsesCount(self2.arrResponses().length);
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
        self2.arrFilteredResponsesCount(count);
        document.body.style.cursor = "default";
      }, 100);
    };
    self2.ClickGoToResponse = function(response) {
      GoToResponse(response);
    };
    self2.ClickSubmitResponse = function() {
      m_fnSubmitPackage();
    };
    self2.ClickMarkForDeletionResponseDoc = function(oResponseDoc) {
      if (oResponseDoc && oResponseDoc.ID)
        m_fnMarkForDeletionResponseDoc(oResponseDoc.ID);
    };
    self2.selectedFiltersResponseTab.subscribe(function(value) {
      self2.FilterChangedResponseTab();
    });
    self2.doSort.subscribe(function(newValue) {
      Audit2.Common.Utilities.OnLoadDisplayTimeStamp();
      if (self2.arrResponses().length > 0 && newValue) {
        self2.arrFilteredResponsesCount(self2.arrResponses().length);
        ko32.utils.arrayPushAll(
          self2.ddOptionsResponseTabResponseStatus(),
          self2.GetDDVals("status")
        );
        self2.ddOptionsResponseTabResponseStatus.valueHasMutated();
        ko32.utils.arrayPushAll(
          self2.ddOptionsResponseInfoTabResponseNameOpen2(),
          self2.GetDDVals2("1", true)
        );
        self2.ddOptionsResponseInfoTabResponseNameOpen2.valueHasMutated();
        ko32.utils.arrayPushAll(
          self2.ddOptionsResponseInfoTabResponseNameProcessed2(),
          self2.GetDDVals2("0", true)
        );
        self2.ddOptionsResponseInfoTabResponseNameProcessed2.valueHasMutated();
        ko32.utils.arrayPushAll(
          self2.ddOptionsResponseTabRequestInternalDueDate(),
          self2.GetDDVals("internalDueDate")
        );
        self2.ddOptionsResponseTabRequestInternalDueDate.valueHasMutated();
        ko32.utils.arrayPushAll(
          self2.ddOptionsResponseTabResponseTitle(),
          self2.GetDDVals("title", true)
        );
        self2.ddOptionsResponseTabResponseTitle.valueHasMutated();
        setTimeout(function() {
          var paramTabIndex = getUrlParam("Tab");
          if (paramTabIndex != null && paramTabIndex != "") {
            self2.tabs.selectById(paramTabIndex);
          } else {
            self2.tabs.selectById(self2.tabOpts.Responses.id);
          }
          if (paramTabIndex == null || paramTabIndex == "" || paramTabIndex == 0) {
            if (self2.cntPendingReview() > 0) {
              addNotification(
                "<div style='text-align:left'>There are <b>" + self2.cntPendingReview() + "</b> Responses pending your review/action. <br/> <br/> Please click on the links in the <b>Response Name</b> column of the <b>Status Report tab</b> <br/> to access each response and upload documents and submit the package.</div>",
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
          self2.filterResponseTabResponseStatus(m_statusToFilterOn);
        }, 200);
      }
    });
    self2.filterResponseInfoTabResponseNameOpen2.subscribe(function(newValue) {
      self2.filterResponseInfoTabResponseName(newValue, true);
    });
    self2.filterResponseInfoTabResponseNameProcessed2.subscribe(function(newValue) {
      self2.filterResponseInfoTabResponseName(newValue, false);
    });
    self2.filterResponseInfoTabResponseName = function(newValue, bOpenResponses) {
      self2.currentResponse(null);
      self2.arrCoverSheets([]);
      self2.arrResponseDocs(null);
      self2.cntResponseDocs(0);
      m_curResponseSelectedIsEditableByAO = false;
      var oResponse = m_bigMap["response-" + newValue];
      if (oResponse) {
        if (bOpenResponses)
          self2.filterResponseInfoTabResponseNameProcessed2("");
        else self2.filterResponseInfoTabResponseNameOpen2("");
        self2.currentResponse(oResponse);
        LoadTabResponseInfoCoverSheets(oResponse);
        LoadTabResponseInfoResponseDocs(oResponse);
        if (bOpenResponses) m_curResponseSelectedIsEditableByAO = true;
      }
    };
    self2.responseDocFiles.subscribe(async function(files) {
      if (!files.length) return;
      const resId = self2.currentResponse()?.ID;
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
      self2.responseDocFiles.removeAll();
      self2.onNewResponseDocCallback();
    });
    self2.GetDDVals = function(fieldName, sortAsResponse) {
      var types = ko32.utils.arrayMap(self2.arrResponses(), function(item) {
        return item[fieldName];
      });
      var ddArr = ko32.utils.arrayGetDistinctValues(types).sort();
      if (sortAsResponse) ddArr.sort(Audit2.Common.Utilities.SortResponseTitles);
      if (ddArr[0] == "") ddArr.shift();
      return ddArr;
    };
    self2.GetDDVals2 = function(responseStatusType, sortAsResponse) {
      var types = ko32.utils.arrayMap(self2.arrResponses(), function(item) {
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
      var ddArr = ko32.utils.arrayGetDistinctValues(types).sort();
      if (sortAsResponse) ddArr.sort(Audit2.Common.Utilities.SortResponseTitles);
      if (ddArr[0] == "") ddArr.shift();
      return ddArr;
    };
  }
  var _myViewModel = new ViewModel();
  ko32.applyBindings(_myViewModel);
  LoadInfo();
  async function LoadInfo() {
    const loadInfoTask = addTask(loadInfo);
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
    currCtx.load(m_aoItems, "Include(ID, Title, UserGroup, Role)");
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
      finishTask(loadInfoTask);
    }
    function OnFailure(sender, args) {
      $("#divRefresh").hide();
      $("#divLoading").hide();
      loadInfoTask.addStatus(
        "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
      );
    }
  }
  function m_fnLoadData() {
    const loadDataTask = addTask(loadData);
    _myViewModel.loadedAt(/* @__PURE__ */ new Date());
    Audit2.Common.Utilities.LoadSiteGroups(m_groupColl);
    LoadLibGUIDS();
    Audit2.Common.Utilities.LoadActionOffices(m_aoItems);
    if (memberGroup != null) m_IA_SPGroupName = memberGroup.get_title();
    if (m_IA_SPGroupName == null || m_IA_SPGroupName == "") {
      loadDataTask.addStatus(
        "Unable to retrieve the IA SharePoint Group. Please contact the Administrator"
      );
      return;
    }
    m_IA_ActionOffice = Audit2.Common.Utilities.GetActionOffices()?.find(
      (ao) => ao.userGroup == m_IA_SPGroupName
    );
    LoadRequests();
    LoadResponses();
    LoadResponseDocs();
    LoadTabStatusReport(m_arrResponses, "fbody");
    finishTask(loadDataTask);
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
      var highlight2 = false;
      var responseStatus = oResponse.resStatus;
      if (responseStatus == m_responseStatus1 || responseStatus == m_responseStatus2) {
        count++;
        if (responseStatus == m_responseStatus1) resStatus1++;
        else resStatus2++;
        highlight2 = true;
      }
      var aResponse = {
        title: responseTitle,
        requestSubject: oResponse.request.subject,
        requestStatus: oResponse.request.status,
        internalDueDate: oResponse.request.internalDueDate,
        status: responseStatus,
        docCount: oResponse.responseDocs.length,
        modified: oResponse.modified,
        highlight: highlight2,
        visibleRow: ko32.observable(true)
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
      ko32.utils.arrayPushAll(_myViewModel.arrResponses, responseArr);
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
      ko32.utils.arrayPushAll(_myViewModel.arrCoverSheets(), arrCS);
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
      alert(
        "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
      );
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
      if (oResponse2.resStatus == "1-Open" || oResponse2.resStatus == "3-Returned to Action Office") {
        if (m_curResponseSelectedIsEditableByAO && cntAddedByAO > 0) {
          let resetColor = function() {
            $(".btnSubmitPackage").parent().css({ "background-color": "inherit", "font-weight": "inherit" });
          };
          addNotification(
            "<div style='text-align:left'>Response documents have been added. <br/><br/>Your package <span style='font-weight:bold; color:red'>has not yet been submitted</span>. <br></br>Please review your documents and click on the link <b>SUBMIT this Response Package</b> below</div>",
            false
          );
          $(".btnSubmitPackage").parent().css({ "background-color": "yellow", "font-weight": "inherit" });
          $(".btnSubmitPackage").get(0).scrollIntoView();
          setTimeout(function() {
            resetColor();
          }, 2e3);
        } else if (m_curResponseSelectedIsEditableByAO && cntAddedByAO == 0) {
          addNotification(
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
  function OnCallbackForm(result, value) {
    if (result === true) {
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
          alert("Please upload a Response document.");
          submitPackageTask.addStatus(
            "Please upload a Response document.",
            false
          );
          finishTask(submitPackageTask);
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
          finishTask(submitPackageTask);
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
          finishTask(submitPackageTask);
          Audit2.Common.Utilities.Refresh();
        }
        function OnFailureUpdateResponse(sender2, args2) {
          submitPackageTask.addStatus(
            "Request failed: " + args2.get_message() + "\n" + args2.get_stackTrace()
          );
          finishTask(submitPackageTask);
        }
        currCtx.executeQueryAsync(
          OnSuccessUpdateResponse,
          OnFailureUpdateResponse
        );
      }, OnFailureLoadedResponseDocs = function(sender, args) {
        submitPackageTask.addStatus(
          "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
        );
      };
      const submitPackageTask = addTask(submitPackageTaskDef);
      m_bIsTransactionExecuting = true;
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
        alert(
          "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
        );
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
/*! Bundled license information:

knockout/build/output/knockout-latest.js:
  (*!
   * Knockout JavaScript library v3.5.1
   * (c) The Knockout.js team - http://knockoutjs.com/
   * License: MIT (http://www.opensource.org/licenses/mit-license.php)
   *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/

if(__exports != exports)module.exports = exports;return module.exports}));
//# sourceMappingURL=ao_db.js.map
