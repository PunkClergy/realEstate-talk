const parserJS = () => {
  var parser = (function (t) {
    var e = {};
    function r(a) {
      if (e[a]) return e[a].exports;
      var i = (e[a] = { i: a, l: !1, exports: {} });
      return t[a].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, a) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (
          (r.r(a),
          Object.defineProperty(a, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var i in t)
            r.d(
              a,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return a;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ""),
      r((r.s = 2))
    );
  })([
    function (t, e, r) {
      "use strict";
      var a = function (t, e) {
        var r = e.exec(t);
        return !(null == r);
      };
      (e.isExist = function (t) {
        return void 0 !== t;
      }),
        (e.isEmptyObject = function (t) {
          return 0 === Object.keys(t).length;
        }),
        (e.merge = function (t, e) {
          if (e)
            for (var r = Object.keys(e), a = r.length, i = 0; i < a; i++)
              t[r[i]] = e[r[i]];
        }),
        (e.getValue = function (t) {
          return e.isExist(t) ? t : "";
        }),
        (e.buildOptions = function (t, e, r) {
          var a = {};
          if (!t) return e;
          for (var i = 0; i < r.length; i++)
            void 0 !== t[r[i]] ? (a[r[i]] = t[r[i]]) : (a[r[i]] = e[r[i]]);
          return a;
        }),
        (e.doesMatch = a),
        (e.doesNotMatch = function (t, e) {
          return !a(t, e);
        }),
        (e.getAllMatches = function (t, e) {
          for (var r = [], a = e.exec(t); a; ) {
            for (var i = [], n = a.length, s = 0; s < n; s++) i.push(a[s]);
            r.push(i), (a = e.exec(t));
          }
          return r;
        });
    },
    function (t, e, r) {
      "use strict";
      var a = r(0),
        i = r(0).buildOptions,
        n = r(4),
        s = { OPENING: 1, CLOSING: 2, SELF: 3, CDATA: 4 },
        o =
          "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|(([\\w:\\-._]*:)?([\\w:\\-._]+))([^>]*)>|((\\/)(([\\w:\\-._]*:)?([\\w:\\-._]+))\\s*>))([^<]*)";
      !Number.parseInt &&
        window.parseInt &&
        (Number.parseInt = window.parseInt),
        !Number.parseFloat &&
          window.parseFloat &&
          (Number.parseFloat = window.parseFloat);
      var l = {
        attributeNamePrefix: "@_",
        attrNodeName: !1,
        textNodeName: "#text",
        ignoreAttributes: !0,
        ignoreNameSpace: !1,
        allowBooleanAttributes: !1,
        parseNodeValue: !0,
        parseAttributeValue: !1,
        arrayMode: !1,
        trimValues: !0,
        cdataTagName: !1,
        cdataPositionChar: "\\c",
        localeRange: "",
        tagValueProcessor: function (t) {
          return t;
        },
        attrValueProcessor: function (t) {
          return t;
        },
        stopNodes: [],
      };
      e.defaultOptions = l;
      var u = [
        "attributeNamePrefix",
        "attrNodeName",
        "textNodeName",
        "ignoreAttributes",
        "ignoreNameSpace",
        "allowBooleanAttributes",
        "parseNodeValue",
        "parseAttributeValue",
        "arrayMode",
        "trimValues",
        "cdataTagName",
        "cdataPositionChar",
        "localeRange",
        "tagValueProcessor",
        "attrValueProcessor",
        "parseTrueNumberOnly",
        "stopNodes",
      ];
      e.props = u;
      function c(t, e) {
        return (
          t &&
            (e.trimValues && (t = t.trim()),
            (t = h(
              (t = e.tagValueProcessor(t)),
              e.parseNodeValue,
              e.parseTrueNumberOnly
            ))),
          t
        );
      }
      function d(t, e) {
        if (e.ignoreNameSpace) {
          var r = t.split(":"),
            a = "/" === t.charAt(0) ? "/" : "";
          if ("xmlns" === r[0]) return "";
          2 === r.length && (t = a + r[1]);
        }
        return t;
      }
      function h(t, e, r) {
        var i;
        return e && "string" == typeof t
          ? ("" === t.trim() || isNaN(t)
              ? (i = "true" === t || ("false" !== t && t))
              : ((i =
                  -1 !== t.indexOf("0x")
                    ? Number.parseInt(t, 16)
                    : -1 !== t.indexOf(".")
                    ? Number.parseFloat(t)
                    : Number.parseInt(t, 10)),
                r && (i = String(i) === t ? i : t)),
            i)
          : a.isExist(t)
          ? t
          : "";
      }
      var f = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?", "g");
      function p(t, e) {
        if (!e.ignoreAttributes && "string" == typeof t) {
          t = t.replace(/\r?\n/g, " ");
          for (
            var r = a.getAllMatches(t, f), i = r.length, n = {}, s = 0;
            s < i;
            s++
          ) {
            var o = d(r[s][1], e);
            o.length &&
              (void 0 !== r[s][4]
                ? (e.trimValues && (r[s][4] = r[s][4].trim()),
                  (r[s][4] = e.attrValueProcessor(r[s][4])),
                  (n[e.attributeNamePrefix + o] = h(
                    r[s][4],
                    e.parseAttributeValue,
                    e.parseTrueNumberOnly
                  )))
                : e.allowBooleanAttributes &&
                  (n[e.attributeNamePrefix + o] = !0));
          }
          if (!Object.keys(n).length) return;
          if (e.attrNodeName) {
            var l = {};
            return (l[e.attrNodeName] = n), l;
          }
          return n;
        }
      }
      e.getTraversalObj = function (t, e) {
        (e = i(e, l, u)), (t = t.replace(/<!--[\s\S]*?-->/g, ""));
        var r = new n("!xml"),
          d = r;
        o = o.replace(/\[\\w/g, "[" + e.localeRange + "\\w");
        for (var h = new RegExp(o, "g"), f = h.exec(t), g = h.exec(t); f; ) {
          var v =
            "]]>" === (A = f)[4]
              ? s.CDATA
              : "/" === A[10]
              ? s.CLOSING
              : void 0 !== A[8] && "/" === A[8].substr(A[8].length - 1)
              ? s.SELF
              : s.OPENING;
          if (v === s.CLOSING)
            d.parent &&
              f[14] &&
              (d.parent.val = a.getValue(d.parent.val) + "" + c(f[14], e)),
              e.stopNodes.length &&
                e.stopNodes.includes(d.tagname) &&
                ((d.child = []),
                null == d.attrsMap && (d.attrsMap = {}),
                (d.val = t.substr(
                  d.startIndex + 1,
                  f.index - d.startIndex - 1
                ))),
              (d = d.parent);
          else if (v === s.CDATA)
            if (e.cdataTagName) {
              var m = new n(e.cdataTagName, d, f[3]);
              (m.attrsMap = p(f[8], e)),
                d.addChild(m),
                (d.val = a.getValue(d.val) + e.cdataPositionChar),
                f[14] && (d.val += c(f[14], e));
            } else d.val = (d.val || "") + (f[3] || "") + c(f[14], e);
          else if (v === s.SELF) {
            d && f[14] && (d.val = a.getValue(d.val) + "" + c(f[14], e));
            var b = new n(e.ignoreNameSpace ? f[7] : f[5], d, "");
            f[8] && f[8].length > 0 && (f[8] = f[8].substr(0, f[8].length - 1)),
              (b.attrsMap = p(f[8], e)),
              d.addChild(b);
          } else {
            var N = new n(e.ignoreNameSpace ? f[7] : f[5], d, c(f[14], e));
            e.stopNodes.length &&
              e.stopNodes.includes(N.tagname) &&
              (N.startIndex = f.index + f[1].length),
              (N.attrsMap = p(f[8], e)),
              d.addChild(N),
              (d = N);
          }
          (f = g), (g = h.exec(t));
        }
        var A;
        return r;
      };
    },
    function (t, e, r) {
      "use strict";
      var a = r(3),
        i = r(1),
        n = r(1),
        s = r(0).buildOptions;
      (e.parse = function (t, e) {
        return (
          (e = s(e, n.defaultOptions, n.props)),
          a.convertToJson(i.getTraversalObj(t, e), e)
        );
      }),
        (e.convertTonimn = r(5).convert2nimn),
        (e.getTraversalObj = i.getTraversalObj),
        (e.convertToJson = a.convertToJson),
        (e.convertToJsonString = r(6).convertToJsonString),
        (e.validate = r(7).validate),
        (e.j2xParser = r(8)),
        (e.parseToNimn = function (t, r, a) {
          return e.convertTonimn(e.getTraversalObj(t, a), r, a);
        });
    },
    function (t, e, r) {
      "use strict";
      var a = r(0);
      e.convertToJson = function t(e, r) {
        var i = {};
        if (
          !(
            (e.child && !a.isEmptyObject(e.child)) ||
            (e.attrsMap && !a.isEmptyObject(e.attrsMap))
          )
        )
          return a.isExist(e.val) ? e.val : "";
        a.isExist(e.val) &&
          ("string" != typeof e.val ||
            ("" !== e.val && e.val !== r.cdataPositionChar)) &&
          (i[r.textNodeName] = e.val),
          a.merge(i, e.attrsMap);
        for (var n = Object.keys(e.child), s = 0; s < n.length; s++) {
          var o = n[s];
          if (e.child[o] && e.child[o].length > 1)
            for (var l in ((i[o] = []), e.child[o]))
              i[o].push(t(e.child[o][l], r));
          else i[o] = t(e.child[o][0], r);
        }
        return i;
      };
    },
    function (t, e, r) {
      "use strict";
      t.exports = function (t, e, r) {
        (this.tagname = t),
          (this.parent = e),
          (this.child = {}),
          (this.attrsMap = {}),
          (this.val = r),
          (this.addChild = function (t) {
            Array.isArray(this.child[t.tagname])
              ? this.child[t.tagname].push(t)
              : (this.child[t.tagname] = [t]);
          });
      };
    },
    function (t, e, r) {
      "use strict";
      var a = function (t) {
          return String.fromCharCode(t);
        },
        i = {
          nilChar: a(176),
          missingChar: a(201),
          nilPremitive: a(175),
          missingPremitive: a(200),
          emptyChar: a(178),
          emptyValue: a(177),
          boundryChar: a(179),
          objStart: a(198),
          arrStart: a(204),
          arrayEnd: a(185),
        },
        n = [
          i.nilChar,
          i.nilPremitive,
          i.missingChar,
          i.missingPremitive,
          i.boundryChar,
          i.emptyChar,
          i.emptyValue,
          i.arrayEnd,
          i.objStart,
          i.arrStart,
        ],
        s = function t(e, r, a) {
          if ("string" == typeof r)
            return e && e[0] && void 0 !== e[0].val ? o(e[0].val, r) : o(e, r);
          var n,
            s =
              void 0 === (n = e)
                ? i.missingChar
                : null === n
                ? i.nilChar
                : !(
                    n.child &&
                    0 === Object.keys(n.child).length &&
                    (!n.attrsMap || 0 === Object.keys(n.attrsMap).length)
                  ) || i.emptyChar;
          if (!0 === s) {
            var u = "";
            if (Array.isArray(r)) {
              u += i.arrStart;
              var c = r[0],
                d = e.length;
              if ("string" == typeof c)
                for (var h = 0; h < d; h++) {
                  var f = o(e[h].val, c);
                  u = l(u, f);
                }
              else
                for (var p = 0; p < d; p++) {
                  var g = t(e[p], c, a);
                  u = l(u, g);
                }
              u += i.arrayEnd;
            } else {
              u += i.objStart;
              var v = Object.keys(r);
              for (var m in (Array.isArray(e) && (e = e[0]), v)) {
                var b = v[m],
                  N = void 0;
                (N =
                  !a.ignoreAttributes && e.attrsMap && e.attrsMap[b]
                    ? t(e.attrsMap[b], r[b], a)
                    : b === a.textNodeName
                    ? t(e.val, r[b], a)
                    : t(e.child[b], r[b], a)),
                  (u = l(u, N));
              }
            }
            return u;
          }
          return s;
        },
        o = function (t) {
          switch (t) {
            case void 0:
              return i.missingPremitive;
            case null:
              return i.nilPremitive;
            case "":
              return i.emptyValue;
            default:
              return t;
          }
        },
        l = function (t, e) {
          return u(e[0]) || u(t[t.length - 1]) || (t += i.boundryChar), t + e;
        },
        u = function (t) {
          return -1 !== n.indexOf(t);
        };
      var c = r(1),
        d = r(0).buildOptions;
      e.convert2nimn = function (t, e, r) {
        return (r = d(r, c.defaultOptions, c.props)), s(t, e, r);
      };
    },
    function (t, e, r) {
      "use strict";
      var a = r(0),
        i = r(0).buildOptions,
        n = r(1),
        s = function t(e, r, i) {
          for (
            var n, s = "{", o = Object.keys(e.child), l = 0;
            l < o.length;
            l++
          ) {
            var u = o[l];
            if (e.child[u] && e.child[u].length > 1) {
              for (var c in ((s += '"' + u + '" : [ '), e.child[u]))
                s += t(e.child[u][c], r) + " , ";
              s = s.substr(0, s.length - 1) + " ] ";
            } else s += '"' + u + '" : ' + t(e.child[u][0], r) + " ,";
          }
          return (
            a.merge(s, e.attrsMap),
            a.isEmptyObject(s)
              ? a.isExist(e.val)
                ? e.val
                : ""
              : (a.isExist(e.val) &&
                  ("string" != typeof e.val ||
                    ("" !== e.val && e.val !== r.cdataPositionChar)) &&
                  (s +=
                    '"' +
                    r.textNodeName +
                    '" : ' +
                    (!0 !== (n = e.val) && !1 !== n && isNaN(n)
                      ? '"' + n + '"'
                      : n)),
                "," === s[s.length - 1] && (s = s.substr(0, s.length - 2)),
                s + "}")
          );
        };
      e.convertToJsonString = function (t, e) {
        return (
          ((e = i(e, n.defaultOptions, n.props)).indentBy = e.indentBy || ""),
          s(t, e, 0)
        );
      };
    },
    function (t, e, r) {
      "use strict";
      var a = r(0),
        i = { allowBooleanAttributes: !1, localeRange: "a-zA-Z" },
        n = ["allowBooleanAttributes", "localeRange"];
      function s(t, e) {
        for (var r = e; e < t.length; e++)
          if ("?" != t[e] && " " != t[e]);
          else {
            var a = t.substr(r, e - r);
            if (e > 5 && "xml" === a)
              return {
                err: {
                  code: "InvalidXml",
                  msg: "XML declaration allowed only at the start of the document.",
                },
              };
            if ("?" == t[e] && ">" == t[e + 1]) {
              e++;
              break;
            }
          }
        return e;
      }
      function o(t, e) {
        if (t.length > e + 5 && "-" === t[e + 1] && "-" === t[e + 2]) {
          for (e += 3; e < t.length; e++)
            if ("-" === t[e] && "-" === t[e + 1] && ">" === t[e + 2]) {
              e += 2;
              break;
            }
        } else if (
          t.length > e + 8 &&
          "D" === t[e + 1] &&
          "O" === t[e + 2] &&
          "C" === t[e + 3] &&
          "T" === t[e + 4] &&
          "Y" === t[e + 5] &&
          "P" === t[e + 6] &&
          "E" === t[e + 7]
        ) {
          var r = 1;
          for (e += 8; e < t.length; e++)
            if ("<" === t[e]) r++;
            else if (">" === t[e] && 0 === --r) break;
        } else if (
          t.length > e + 9 &&
          "[" === t[e + 1] &&
          "C" === t[e + 2] &&
          "D" === t[e + 3] &&
          "A" === t[e + 4] &&
          "T" === t[e + 5] &&
          "A" === t[e + 6] &&
          "[" === t[e + 7]
        )
          for (e += 8; e < t.length; e++)
            if ("]" === t[e] && "]" === t[e + 1] && ">" === t[e + 2]) {
              e += 2;
              break;
            }
        return e;
      }
      e.validate = function (t, e) {
        e = a.buildOptions(e, i, n);
        var r = [],
          l = !1;
        "\ufeff" === t[0] && (t = t.substr(1));
        for (
          var u = new RegExp(
              "^[_w][\\w\\-.:]*$".replace("_w", "_" + e.localeRange)
            ),
            d = new RegExp(
              "^([w]|_)[\\w.\\-_:]*".replace("([w", "([" + e.localeRange)
            ),
            f = 0;
          f < t.length;
          f++
        ) {
          if ("<" !== t[f]) {
            if (" " === t[f] || "\t" === t[f] || "\n" === t[f] || "\r" === t[f])
              continue;
            return {
              err: {
                code: "InvalidChar",
                msg: "char " + t[f] + " is not expected .",
              },
            };
          }
          if ("?" === t[++f]) {
            if ((f = s(t, ++f)).err) return f;
          } else {
            if ("!" === t[f]) {
              f = o(t, f);
              continue;
            }
            var g = !1;
            "/" === t[f] && ((g = !0), f++);
            for (
              var v = "";
              f < t.length && ">" !== t[f] && " " !== t[f] && "\t" !== t[f];
              f++
            )
              v += t[f];
            if ("/" === (v = v.trim())[v.length - 1]) {
              v = v.substring(0, v.length - 1);
              continue;
            }
            if (!p(v, d))
              return {
                err: {
                  code: "InvalidTag",
                  msg: "Tag " + v + " is an invalid name.",
                },
              };
            var m = c(t, f);
            if (!1 === m)
              return {
                err: {
                  code: "InvalidAttr",
                  msg: "Attributes for " + v + " have open quote",
                },
              };
            var b = m.value;
            if (((f = m.index), "/" === b[b.length - 1])) {
              var N = h((b = b.substring(0, b.length - 1)), e, u);
              if (!0 !== N) return N;
              l = !0;
            } else if (g) {
              if (b.trim().length > 0)
                return {
                  err: {
                    code: "InvalidTag",
                    msg:
                      "closing tag " +
                      v +
                      " can't have attributes or invalid starting.",
                  },
                };
              var A = r.pop();
              if (v !== A)
                return {
                  err: {
                    code: "InvalidTag",
                    msg:
                      "closing tag " + A + " is expected inplace of " + v + ".",
                  },
                };
            } else {
              var x = h(b, e, u);
              if (!0 !== x) return x;
              r.push(v), (l = !0);
            }
            for (f++; f < t.length; f++)
              if ("<" === t[f]) {
                if ("!" === t[f + 1]) {
                  f = o(t, ++f);
                  continue;
                }
                break;
              }
            "<" === t[f] && f--;
          }
        }
        return l
          ? !(r.length > 0) || {
              err: {
                code: "InvalidXml",
                msg:
                  "Invalid " +
                  JSON.stringify(r, null, 4).replace(/\r?\n/g, "") +
                  " found.",
              },
            }
          : { err: { code: "InvalidXml", msg: "Start tag expected." } };
      };
      var l = '"',
        u = "'";
      function c(t, e) {
        for (var r = "", a = ""; e < t.length; e++) {
          if (t[e] === l || t[e] === u)
            if ("" === a) a = t[e];
            else {
              if (a !== t[e]) continue;
              a = "";
            }
          else if (">" === t[e] && "" === a) break;
          r += t[e];
        }
        return "" === a && { value: r, index: e };
      }
      var d = new RegExp(
        "(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?",
        "g"
      );
      function h(t, e, r) {
        for (var i = a.getAllMatches(t, d), n = {}, s = 0; s < i.length; s++) {
          if (0 === i[s][1].length)
            return {
              err: {
                code: "InvalidAttr",
                msg: "attribute " + i[s][2] + " has no space in starting.",
              },
            };
          if (void 0 === i[s][3] && !e.allowBooleanAttributes)
            return {
              err: {
                code: "InvalidAttr",
                msg: "boolean attribute " + i[s][2] + " is not allowed.",
              },
            };
          var o = i[s][2];
          if (!f(o, r))
            return {
              err: {
                code: "InvalidAttr",
                msg: "attribute " + o + " is an invalid name.",
              },
            };
          if (n.hasOwnProperty(o))
            return {
              err: {
                code: "InvalidAttr",
                msg: "attribute " + o + " is repeated.",
              },
            };
          n[o] = 1;
        }
        return !0;
      }
      function f(t, e) {
        return a.doesMatch(t, e);
      }
      function p(t, e) {
        return !a.doesNotMatch(t, e);
      }
    },
    function (t, e, r) {
      "use strict";
      var a = r(0).buildOptions,
        i = {
          attributeNamePrefix: "@_",
          attrNodeName: !1,
          textNodeName: "#text",
          ignoreAttributes: !0,
          cdataTagName: !1,
          cdataPositionChar: "\\c",
          format: !1,
          indentBy: "  ",
          supressEmptyNode: !1,
          tagValueProcessor: function (t) {
            return t;
          },
          attrValueProcessor: function (t) {
            return t;
          },
        },
        n = [
          "attributeNamePrefix",
          "attrNodeName",
          "textNodeName",
          "ignoreAttributes",
          "cdataTagName",
          "cdataPositionChar",
          "format",
          "indentBy",
          "supressEmptyNode",
          "tagValueProcessor",
          "attrValueProcessor",
        ];
      function s(t) {
        (this.options = a(t, i, n)),
          this.options.ignoreAttributes || this.options.attrNodeName
            ? (this.isAttribute = function () {
                return !1;
              })
            : ((this.attrPrefixLen = this.options.attributeNamePrefix.length),
              (this.isAttribute = p)),
          this.options.cdataTagName
            ? (this.isCDATA = g)
            : (this.isCDATA = function () {
                return !1;
              }),
          (this.replaceCDATAstr = o),
          (this.replaceCDATAarr = l),
          this.options.format
            ? ((this.indentate = f),
              (this.tagEndChar = ">\n"),
              (this.newLine = "\n"))
            : ((this.indentate = function () {
                return "";
              }),
              (this.tagEndChar = ">"),
              (this.newLine = "")),
          this.options.supressEmptyNode
            ? ((this.buildTextNode = h), (this.buildObjNode = c))
            : ((this.buildTextNode = d), (this.buildObjNode = u)),
          (this.buildTextValNode = d),
          (this.buildObjectNode = u);
      }
      function o(t, e) {
        return (
          (t = this.options.tagValueProcessor("" + t)),
          "" === this.options.cdataPositionChar || "" === t
            ? t + "<![CDATA[" + e + "]]" + this.tagEndChar
            : t.replace(
                this.options.cdataPositionChar,
                "<![CDATA[" + e + "]]" + this.tagEndChar
              )
        );
      }
      function l(t, e) {
        if (
          ((t = this.options.tagValueProcessor("" + t)),
          "" === this.options.cdataPositionChar || "" === t)
        )
          return (
            t + "<![CDATA[" + e.join("]]><![CDATA[") + "]]" + this.tagEndChar
          );
        for (var r in e)
          t = t.replace(
            this.options.cdataPositionChar,
            "<![CDATA[" + e[r] + "]]>"
          );
        return t + this.newLine;
      }
      function u(t, e, r, a) {
        return r && !t.includes("<")
          ? this.indentate(a) +
              "<" +
              e +
              r +
              ">" +
              t +
              "</" +
              e +
              this.tagEndChar
          : this.indentate(a) +
              "<" +
              e +
              r +
              this.tagEndChar +
              t +
              this.indentate(a) +
              "</" +
              e +
              this.tagEndChar;
      }
      function c(t, e, r, a) {
        return "" !== t
          ? this.buildObjectNode(t, e, r, a)
          : this.indentate(a) + "<" + e + r + "/" + this.tagEndChar;
      }
      function d(t, e, r, a) {
        return (
          this.indentate(a) +
          "<" +
          e +
          r +
          ">" +
          this.options.tagValueProcessor("" + t) +
          "</" +
          e +
          this.tagEndChar
        );
      }
      function h(t, e, r, a) {
        return "" !== t
          ? this.buildTextValNode(t, e, r, a)
          : this.indentate(a) + "<" + e + r + "/" + this.tagEndChar;
      }
      function f(t) {
        return this.options.indentBy.repeat(t);
      }
      function p(t) {
        return (
          !!t.startsWith(this.options.attributeNamePrefix) &&
          t.substr(this.attrPrefixLen)
        );
      }
      function g(t) {
        return t === this.options.cdataTagName;
      }
      (s.prototype.parse = function (t) {
        return this.j2x(t, 0).val;
      }),
        (s.prototype.j2x = function (t, e) {
          for (
            var r = "", a = "", i = Object.keys(t), n = i.length, s = 0;
            s < n;
            s++
          ) {
            var o = i[s];
            if (void 0 === t[o]);
            else if (null === t[o])
              a += this.indentate(e) + "<" + o + "/" + this.tagEndChar;
            else if ("object" != typeof t[o]) {
              var l = this.isAttribute(o);
              l
                ? (r +=
                    " " +
                    l +
                    '="' +
                    this.options.attrValueProcessor("" + t[o]) +
                    '"')
                : this.isCDATA(o)
                ? t[this.options.textNodeName]
                  ? (a += this.replaceCDATAstr(
                      t[this.options.textNodeName],
                      t[o]
                    ))
                  : (a += this.replaceCDATAstr("", t[o]))
                : o === this.options.textNodeName
                ? t[this.options.cdataTagName] ||
                  (a += this.options.tagValueProcessor("" + t[o]))
                : (a += this.buildTextNode(t[o], o, "", e));
            } else if (Array.isArray(t[o]))
              if (this.isCDATA(o))
                (a += this.indentate(e)),
                  t[this.options.textNodeName]
                    ? (a += this.replaceCDATAarr(
                        t[this.options.textNodeName],
                        t[o]
                      ))
                    : (a += this.replaceCDATAarr("", t[o]));
              else
                for (var u = t[o].length, c = 0; c < u; c++) {
                  var d = t[o][c];
                  if (void 0 === d);
                  else if (null === d)
                    a += this.indentate(e) + "<" + o + "/" + this.tagEndChar;
                  else if ("object" == typeof d) {
                    var h = this.j2x(d, e + 1);
                    a += this.buildObjNode(h.val, o, h.attrStr, e);
                  } else a += this.buildTextNode(d, o, "", e);
                }
            else if (
              this.options.attrNodeName &&
              o === this.options.attrNodeName
            )
              for (var f = Object.keys(t[o]), p = f.length, g = 0; g < p; g++)
                r +=
                  " " +
                  f[g] +
                  '="' +
                  this.options.attrValueProcessor("" + t[o][f[g]]) +
                  '"';
            else {
              var v = this.j2x(t[o], e + 1);
              a += this.buildObjNode(v.val, o, v.attrStr, e);
            }
          }
          return { attrStr: r, val: a };
        }),
        (t.exports = s);
    },
  ]);
  return parser;
  //# sourceMappingURL=parser.min.js.map
};

const cryptoJS = () => {
  (function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined"
      ? (module.exports = factory(require("crypto")))
      : typeof define === "function" && define.amd
      ? define(["crypto"], factory)
      : ((global =
          typeof globalThis !== "undefined" ? globalThis : global || self),
        (global.CryptoJS = factory(global.require$$0)));
  })(this, function (require$$0) {
    "use strict";

    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { default: e };
    }

    var require$$0__default = /*#__PURE__*/ _interopDefaultLegacy(require$$0);

    var commonjsGlobal =
      typeof globalThis !== "undefined"
        ? globalThis
        : typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof self !== "undefined"
        ? self
        : {};

    function createCommonjsModule(fn, basedir, module) {
      return (
        (module = {
          path: basedir,
          exports: {},
          require: function (path, base) {
            return commonjsRequire(
              path,
              base === undefined || base === null ? module.path : base
            );
          },
        }),
        fn(module, module.exports),
        module.exports
      );
    }

    function commonjsRequire() {
      throw new Error(
        "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
      );
    }

    var core = createCommonjsModule(function (module, exports) {
      (function (root, factory) {
        {
          // CommonJS
          module.exports = factory();
        }
      })(commonjsGlobal, function () {
        /*globals window, global, require*/ /**
         * CryptoJS core components.
         */ var CryptoJS =
          CryptoJS ||
          (function (Math1, undefined1) {
            var crypto;
            // Native crypto from window (Browser)
            if (typeof window !== "undefined" && window.crypto) {
              crypto = window.crypto;
            }
            // Native crypto in web worker (Browser)
            if (typeof self !== "undefined" && self.crypto) {
              crypto = self.crypto;
            }
            // Native crypto from worker
            if (typeof globalThis !== "undefined" && globalThis.crypto) {
              crypto = globalThis.crypto;
            }
            // Native (experimental IE 11) crypto from window (Browser)
            if (!crypto && typeof window !== "undefined" && window.msCrypto) {
              crypto = window.msCrypto;
            }
            // Native crypto from global (NodeJS)
            if (
              !crypto &&
              typeof commonjsGlobal !== "undefined" &&
              commonjsGlobal.crypto
            ) {
              crypto = commonjsGlobal.crypto;
            }
            // Native crypto import via require (NodeJS)
            if (!crypto && typeof commonjsRequire === "function") {
              try {
                crypto = require$$0__default["default"];
              } catch (err) {}
            }
            /*
             * Cryptographically secure pseudorandom number generator
             *
             * As Math.random() is cryptographically not safe to use
             */ var cryptoSecureRandomInt = function cryptoSecureRandomInt() {
              if (crypto) {
                // Use getRandomValues method (Browser)
                if (typeof crypto.getRandomValues === "function") {
                  try {
                    return crypto.getRandomValues(new Uint32Array(1))[0];
                  } catch (err) {}
                }
                // Use randomBytes method (NodeJS)
                if (typeof crypto.randomBytes === "function") {
                  try {
                    return crypto.randomBytes(4).readInt32LE();
                  } catch (err) {}
                }
              }
              throw new Error(
                "Native crypto module could not be used to get secure random number."
              );
            };
            /*
		     * Local polyfill of Object.create

		     */ var create =
              Object.create ||
              (function () {
                var F = function F() {};
                return function (obj) {
                  var subtype;
                  F.prototype = obj;
                  subtype = new F();
                  F.prototype = null;
                  return subtype;
                };
              })();
            /**
             * CryptoJS namespace.
             */ var C = {};
            /**
             * Library namespace.
             */ var C_lib = (C.lib = {});
            /**
             * Base object for prototypal inheritance.
             */ var Base = (C_lib.Base = (function () {
              return {
                /**
                 * Creates a new object that inherits from this object.
                 *
                 * @param {Object} overrides Properties to copy into the new object.
                 *
                 * @return {Object} The new object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var MyType = CryptoJS.lib.Base.extend({
                 *         field: 'value',
                 *
                 *         method: function () {
                 *         }
                 *     });
                 */ extend: function extend(overrides) {
                  // Spawn
                  var subtype = create(this);
                  // Augment
                  if (overrides) {
                    subtype.mixIn(overrides);
                  }
                  // Create default initializer
                  if (
                    !subtype.hasOwnProperty("init") ||
                    this.init === subtype.init
                  ) {
                    subtype.init = function () {
                      subtype.$super.init.apply(this, arguments);
                    };
                  }
                  // Initializer's prototype is the subtype object
                  subtype.init.prototype = subtype;
                  // Reference supertype
                  subtype.$super = this;
                  return subtype;
                },
                /**
                 * Extends this object and runs the init method.
                 * Arguments to create() will be passed to init().
                 *
                 * @return {Object} The new object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var instance = MyType.create();
                 */ create: function create() {
                  var instance = this.extend();
                  instance.init.apply(instance, arguments);
                  return instance;
                },
                /**
                 * Initializes a newly created object.
                 * Override this method to add some logic when your objects are created.
                 *
                 * @example
                 *
                 *     var MyType = CryptoJS.lib.Base.extend({
                 *         init: function () {
                 *             // ...
                 *         }
                 *     });
                 */ init: function init() {},
                /**
                 * Copies properties into this object.
                 *
                 * @param {Object} properties The properties to mix in.
                 *
                 * @example
                 *
                 *     MyType.mixIn({
                 *         field: 'value'
                 *     });
                 */ mixIn: function mixIn(properties) {
                  for (var propertyName in properties) {
                    if (properties.hasOwnProperty(propertyName)) {
                      this[propertyName] = properties[propertyName];
                    }
                  }
                  // IE won't copy toString using the loop above
                  if (properties.hasOwnProperty("toString")) {
                    this.toString = properties.toString;
                  }
                },
                /**
                 * Creates a copy of this object.
                 *
                 * @return {Object} The clone.
                 *
                 * @example
                 *
                 *     var clone = instance.clone();
                 */ clone: function clone() {
                  return this.init.prototype.extend(this);
                },
              };
            })());
            /**
             * An array of 32-bit words.
             *
             * @property {Array} words The array of 32-bit words.
             * @property {number} sigBytes The number of significant bytes in this word array.
             */ var WordArray = (C_lib.WordArray = Base.extend({
              /**
               * Initializes a newly created word array.
               *
               * @param {Array} words (Optional) An array of 32-bit words.
               * @param {number} sigBytes (Optional) The number of significant bytes in the words.
               *
               * @example
               *
               *     var wordArray = CryptoJS.lib.WordArray.create();
               *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
               *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
               */ init: function init(words, sigBytes) {
                words = this.words = words || [];
                if (sigBytes != undefined1) {
                  this.sigBytes = sigBytes;
                } else {
                  this.sigBytes = words.length * 4;
                }
              },
              /**
               * Converts this word array to a string.
               *
               * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
               *
               * @return {string} The stringified word array.
               *
               * @example
               *
               *     var string = wordArray + '';
               *     var string = wordArray.toString();
               *     var string = wordArray.toString(CryptoJS.enc.Utf8);
               */ toString: function toString(encoder) {
                return (encoder || Hex).stringify(this);
              },
              /**
               * Concatenates a word array to this word array.
               *
               * @param {WordArray} wordArray The word array to append.
               *
               * @return {WordArray} This word array.
               *
               * @example
               *
               *     wordArray1.concat(wordArray2);
               */ concat: function concat(wordArray) {
                // Shortcuts
                var thisWords = this.words;
                var thatWords = wordArray.words;
                var thisSigBytes = this.sigBytes;
                var thatSigBytes = wordArray.sigBytes;
                // Clamp excess bits
                this.clamp();
                // Concat
                if (thisSigBytes % 4) {
                  // Copy one byte at a time
                  for (var i = 0; i < thatSigBytes; i++) {
                    var thatByte =
                      (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    thisWords[(thisSigBytes + i) >>> 2] |=
                      thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
                  }
                } else {
                  // Copy one word at a time
                  for (var j = 0; j < thatSigBytes; j += 4) {
                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
                  }
                }
                this.sigBytes += thatSigBytes;
                // Chainable
                return this;
              },
              /**
               * Removes insignificant bits.
               *
               * @example
               *
               *     wordArray.clamp();
               */ clamp: function clamp() {
                // Shortcuts
                var words = this.words;
                var sigBytes = this.sigBytes;
                // Clamp
                words[sigBytes >>> 2] &=
                  0xffffffff << (32 - (sigBytes % 4) * 8);
                words.length = Math1.ceil(sigBytes / 4);
              },
              /**
               * Creates a copy of this word array.
               *
               * @return {WordArray} The clone.
               *
               * @example
               *
               *     var clone = wordArray.clone();
               */ clone: function clone() {
                var clone = Base.clone.call(this);
                clone.words = this.words.slice(0);
                return clone;
              },
              /**
               * Creates a word array filled with random bytes.
               *
               * @param {number} nBytes The number of random bytes to generate.
               *
               * @return {WordArray} The random word array.
               *
               * @static
               *
               * @example
               *
               *     var wordArray = CryptoJS.lib.WordArray.random(16);
               */ random: function random(nBytes) {
                var words = [];
                for (var i = 0; i < nBytes; i += 4) {
                  words.push(cryptoSecureRandomInt());
                }
                return new WordArray.init(words, nBytes);
              },
            }));
            /**
             * Encoder namespace.
             */ var C_enc = (C.enc = {});
            /**
             * Hex encoding strategy.
             */ var Hex = (C_enc.Hex = {
              /**
               * Converts a word array to a hex string.
               *
               * @param {WordArray} wordArray The word array.
               *
               * @return {string} The hex string.
               *
               * @static
               *
               * @example
               *
               *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
               */ stringify: function stringify(wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                // Convert
                var hexChars = [];
                for (var i = 0; i < sigBytes; i++) {
                  var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                  hexChars.push((bite >>> 4).toString(16));
                  hexChars.push((bite & 0x0f).toString(16));
                }
                return hexChars.join("");
              },
              /**
               * Converts a hex string to a word array.
               *
               * @param {string} hexStr The hex string.
               *
               * @return {WordArray} The word array.
               *
               * @static
               *
               * @example
               *
               *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
               */ parse: function parse(hexStr) {
                // Shortcut
                var hexStrLength = hexStr.length;
                // Convert
                var words = [];
                for (var i = 0; i < hexStrLength; i += 2) {
                  words[i >>> 3] |=
                    parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
                }
                return new WordArray.init(words, hexStrLength / 2);
              },
            });
            /**
             * Latin1 encoding strategy.
             */ var Latin1 = (C_enc.Latin1 = {
              /**
               * Converts a word array to a Latin1 string.
               *
               * @param {WordArray} wordArray The word array.
               *
               * @return {string} The Latin1 string.
               *
               * @static
               *
               * @example
               *
               *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
               */ stringify: function stringify(wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                // Convert
                var latin1Chars = [];
                for (var i = 0; i < sigBytes; i++) {
                  var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                  latin1Chars.push(String.fromCharCode(bite));
                }
                return latin1Chars.join("");
              },
              /**
               * Converts a Latin1 string to a word array.
               *
               * @param {string} latin1Str The Latin1 string.
               *
               * @return {WordArray} The word array.
               *
               * @static
               *
               * @example
               *
               *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
               */ parse: function parse(latin1Str) {
                // Shortcut
                var latin1StrLength = latin1Str.length;
                // Convert
                var words = [];
                for (var i = 0; i < latin1StrLength; i++) {
                  words[i >>> 2] |=
                    (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
                }
                return new WordArray.init(words, latin1StrLength);
              },
            });
            /**
             * UTF-8 encoding strategy.
             */ var Utf8 = (C_enc.Utf8 = {
              /**
               * Converts a word array to a UTF-8 string.
               *
               * @param {WordArray} wordArray The word array.
               *
               * @return {string} The UTF-8 string.
               *
               * @static
               *
               * @example
               *
               *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
               */ stringify: function stringify(wordArray) {
                try {
                  return decodeURIComponent(
                    escape(Latin1.stringify(wordArray))
                  );
                } catch (e) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              /**
               * Converts a UTF-8 string to a word array.
               *
               * @param {string} utf8Str The UTF-8 string.
               *
               * @return {WordArray} The word array.
               *
               * @static
               *
               * @example
               *
               *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
               */ parse: function parse(utf8Str) {
                return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
              },
            });
            /**
             * Abstract buffered block algorithm template.
             *
             * The property blockSize must be implemented in a concrete subtype.
             *
             * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
             */ var BufferedBlockAlgorithm = (C_lib.BufferedBlockAlgorithm =
              Base.extend({
                /**
                 * Resets this block algorithm's data buffer to its initial state.
                 *
                 * @example
                 *
                 *     bufferedBlockAlgorithm.reset();
                 */ reset: function reset() {
                  // Initial values
                  this._data = new WordArray.init();
                  this._nDataBytes = 0;
                },
                /**
                 * Adds new data to this block algorithm's buffer.
                 *
                 * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
                 *
                 * @example
                 *
                 *     bufferedBlockAlgorithm._append('data');
                 *     bufferedBlockAlgorithm._append(wordArray);
                 */ _append: function _append(data) {
                  // Convert string to WordArray, else assume WordArray already
                  if (typeof data == "string") {
                    data = Utf8.parse(data);
                  }
                  // Append
                  this._data.concat(data);
                  this._nDataBytes += data.sigBytes;
                },
                /**
                 * Processes available data blocks.
                 *
                 * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
                 *
                 * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
                 *
                 * @return {WordArray} The processed data.
                 *
                 * @example
                 *
                 *     var processedData = bufferedBlockAlgorithm._process();
                 *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
                 */ _process: function _process(doFlush) {
                  var processedWords;
                  // Shortcuts
                  var data = this._data;
                  var dataWords = data.words;
                  var dataSigBytes = data.sigBytes;
                  var blockSize = this.blockSize;
                  var blockSizeBytes = blockSize * 4;
                  // Count blocks ready
                  var nBlocksReady = dataSigBytes / blockSizeBytes;
                  if (doFlush) {
                    // Round up to include partial blocks
                    nBlocksReady = Math1.ceil(nBlocksReady);
                  } else {
                    // Round down to include only full blocks,
                    // less the number of blocks that must remain in the buffer
                    nBlocksReady = Math1.max(
                      (nBlocksReady | 0) - this._minBufferSize,
                      0
                    );
                  }
                  // Count words ready
                  var nWordsReady = nBlocksReady * blockSize;
                  // Count bytes ready
                  var nBytesReady = Math1.min(nWordsReady * 4, dataSigBytes);
                  // Process blocks
                  if (nWordsReady) {
                    for (
                      var offset = 0;
                      offset < nWordsReady;
                      offset += blockSize
                    ) {
                      // Perform concrete-algorithm logic
                      this._doProcessBlock(dataWords, offset);
                    }
                    // Remove processed words
                    processedWords = dataWords.splice(0, nWordsReady);
                    data.sigBytes -= nBytesReady;
                  }
                  // Return processed words
                  return new WordArray.init(processedWords, nBytesReady);
                },
                /**
                 * Creates a copy of this object.
                 *
                 * @return {Object} The clone.
                 *
                 * @example
                 *
                 *     var clone = bufferedBlockAlgorithm.clone();
                 */ clone: function clone() {
                  var clone = Base.clone.call(this);
                  clone._data = this._data.clone();
                  return clone;
                },
                _minBufferSize: 0,
              }));
            /**
             * Abstract hasher template.
             *
             * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
             */ C_lib.Hasher = BufferedBlockAlgorithm.extend({
              /**
               * Configuration options.
               */ cfg: Base.extend(),
              /**
               * Initializes a newly created hasher.
               *
               * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
               *
               * @example
               *
               *     var hasher = CryptoJS.algo.SHA256.create();
               */ init: function init(cfg) {
                // Apply config defaults
                this.cfg = this.cfg.extend(cfg);
                // Set initial values
                this.reset();
              },
              /**
               * Resets this hasher to its initial state.
               *
               * @example
               *
               *     hasher.reset();
               */ reset: function reset() {
                // Reset data buffer
                BufferedBlockAlgorithm.reset.call(this);
                // Perform concrete-hasher logic
                this._doReset();
              },
              /**
               * Updates this hasher with a message.
               *
               * @param {WordArray|string} messageUpdate The message to append.
               *
               * @return {Hasher} This hasher.
               *
               * @example
               *
               *     hasher.update('message');
               *     hasher.update(wordArray);
               */ update: function update(messageUpdate) {
                // Append
                this._append(messageUpdate);
                // Update the hash
                this._process();
                // Chainable
                return this;
              },
              /**
               * Finalizes the hash computation.
               * Note that the finalize operation is effectively a destructive, read-once operation.
               *
               * @param {WordArray|string} messageUpdate (Optional) A final message update.
               *
               * @return {WordArray} The hash.
               *
               * @example
               *
               *     var hash = hasher.finalize();
               *     var hash = hasher.finalize('message');
               *     var hash = hasher.finalize(wordArray);
               */ finalize: function finalize(messageUpdate) {
                // Final message update
                if (messageUpdate) {
                  this._append(messageUpdate);
                }
                // Perform concrete-hasher logic
                var hash = this._doFinalize();
                return hash;
              },
              blockSize: 512 / 32,
              /**
               * Creates a shortcut function to a hasher's object interface.
               *
               * @param {Hasher} hasher The hasher to create a helper for.
               *
               * @return {Function} The shortcut function.
               *
               * @static
               *
               * @example
               *
               *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
               */ _createHelper: function _createHelper(hasher) {
                return function (message, cfg) {
                  return new hasher.init(cfg).finalize(message);
                };
              },
              /**
               * Creates a shortcut function to the HMAC's object interface.
               *
               * @param {Hasher} hasher The hasher to use in this HMAC helper.
               *
               * @return {Function} The shortcut function.
               *
               * @static
               *
               * @example
               *
               *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
               */ _createHmacHelper: function _createHmacHelper(hasher) {
                return function (message, key) {
                  return new C_algo.HMAC.init(hasher, key).finalize(message);
                };
              },
            });
            /**
             * Algorithm namespace.
             */ var C_algo = (C.algo = {});
            return C;
          })(Math);
        return CryptoJS;
      });
    });

    var x64Core = createCommonjsModule(function (module, exports) {
      (function (root, factory) {
        {
          // CommonJS
          module.exports = factory(core);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function (undefined1) {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var X32WordArray = C_lib.WordArray;
          /**
           * x64 namespace.
           */ var C_x64 = (C.x64 = {});
          /**
           * A 64-bit word.
           */ C_x64.Word = Base.extend({
            /**
             * Initializes a newly created 64-bit word.
             *
             * @param {number} high The high 32 bits.
             * @param {number} low The low 32 bits.
             *
             * @example
             *
             *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
             */ init: function init(high, low) {
              this.high = high;
              this.low = low;
            },
          });
          /**
           * An array of 64-bit words.
           *
           * @property {Array} words The array of CryptoJS.x64.Word objects.
           * @property {number} sigBytes The number of significant bytes in this word array.
           */ C_x64.WordArray = Base.extend({
            /**
             * Initializes a newly created word array.
             *
             * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
             * @param {number} sigBytes (Optional) The number of significant bytes in the words.
             *
             * @example
             *
             *     var wordArray = CryptoJS.x64.WordArray.create();
             *
             *     var wordArray = CryptoJS.x64.WordArray.create([
             *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
             *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
             *     ]);
             *
             *     var wordArray = CryptoJS.x64.WordArray.create([
             *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
             *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
             *     ], 10);
             */ init: function init(words, sigBytes) {
              words = this.words = words || [];
              if (sigBytes != undefined1) {
                this.sigBytes = sigBytes;
              } else {
                this.sigBytes = words.length * 8;
              }
            },
            /**
             * Converts this 64-bit word array to a 32-bit word array.
             *
             * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
             *
             * @example
             *
             *     var x32WordArray = x64WordArray.toX32();
             */ toX32: function toX32() {
              // Shortcuts
              var x64Words = this.words;
              var x64WordsLength = x64Words.length;
              // Convert
              var x32Words = [];
              for (var i = 0; i < x64WordsLength; i++) {
                var x64Word = x64Words[i];
                x32Words.push(x64Word.high);
                x32Words.push(x64Word.low);
              }
              return X32WordArray.create(x32Words, this.sigBytes);
            },
            /**
             * Creates a copy of this word array.
             *
             * @return {X64WordArray} The clone.
             *
             * @example
             *
             *     var clone = x64WordArray.clone();
             */ clone: function clone() {
              var clone = Base.clone.call(this);
              // Clone "words" array
              var words = (clone.words = this.words.slice(0));
              // Clone each X64Word object
              var wordsLength = words.length;
              for (var i = 0; i < wordsLength; i++) {
                words[i] = words[i].clone();
              }
              return clone;
            },
          });
        })();
        return CryptoJS;
      });
    });

    function _instanceof(left, right) {
      if (
        right != null &&
        typeof Symbol !== "undefined" &&
        right[Symbol.hasInstance]
      ) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    var libTypedarrays = createCommonjsModule(function (module, exports) {
      (function (root, factory) {
        {
          // CommonJS
          module.exports = factory(core);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          // Check if typed arrays are supported
          if (typeof ArrayBuffer != "function") {
            return;
          }
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          // Reference original init
          var superInit = WordArray.init;
          // Augment WordArray.init to handle typed arrays
          var subInit = (WordArray.init = function subInit(typedArray) {
            // Convert buffers to uint8
            if (_instanceof(typedArray, ArrayBuffer)) {
              typedArray = new Uint8Array(typedArray);
            }
            // Convert other array views to uint8
            if (
              _instanceof(typedArray, Int8Array) ||
              (typeof Uint8ClampedArray !== "undefined" &&
                _instanceof(typedArray, Uint8ClampedArray)) ||
              _instanceof(typedArray, Int16Array) ||
              _instanceof(typedArray, Uint16Array) ||
              _instanceof(typedArray, Int32Array) ||
              _instanceof(typedArray, Uint32Array) ||
              _instanceof(typedArray, Float32Array) ||
              _instanceof(typedArray, Float64Array)
            ) {
              typedArray = new Uint8Array(
                typedArray.buffer,
                typedArray.byteOffset,
                typedArray.byteLength
              );
            }
            // Handle Uint8Array
            if (_instanceof(typedArray, Uint8Array)) {
              // Shortcut
              var typedArrayByteLength = typedArray.byteLength;
              // Extract bytes
              var words = [];
              for (var i = 0; i < typedArrayByteLength; i++) {
                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
              }
              // Initialize this word array
              superInit.call(this, words, typedArrayByteLength);
            } else {
              // Else call normal init
              superInit.apply(this, arguments);
            }
          });
          subInit.prototype = WordArray;
        })();
        return CryptoJS.lib.WordArray;
      });
    });

    var encUtf16 = createCommonjsModule(function (module, exports) {
      (function (root, factory) {
        {
          // CommonJS
          module.exports = factory(core);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          var swapEndian = function swapEndian(word) {
            return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
          };
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C.enc;
          /**
           * UTF-16 BE encoding strategy.
           */ C_enc.Utf16 = C_enc.Utf16BE = {
            /**
             * Converts a word array to a UTF-16 BE string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-16 BE string.
             *
             * @static
             *
             * @example
             *
             *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
             */ stringify: function stringify(wordArray) {
              // Shortcuts
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              // Convert
              var utf16Chars = [];
              for (var i = 0; i < sigBytes; i += 2) {
                var codePoint =
                  (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
                utf16Chars.push(String.fromCharCode(codePoint));
              }
              return utf16Chars.join("");
            },
            /**
             * Converts a UTF-16 BE string to a word array.
             *
             * @param {string} utf16Str The UTF-16 BE string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
             */ parse: function parse(utf16Str) {
              // Shortcut
              var utf16StrLength = utf16Str.length;
              // Convert
              var words = [];
              for (var i = 0; i < utf16StrLength; i++) {
                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
              }
              return WordArray.create(words, utf16StrLength * 2);
            },
          };
          /**
           * UTF-16 LE encoding strategy.
           */ C_enc.Utf16LE = {
            /**
             * Converts a word array to a UTF-16 LE string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-16 LE string.
             *
             * @static
             *
             * @example
             *
             *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
             */ stringify: function stringify(wordArray) {
              // Shortcuts
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              // Convert
              var utf16Chars = [];
              for (var i = 0; i < sigBytes; i += 2) {
                var codePoint = swapEndian(
                  (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff
                );
                utf16Chars.push(String.fromCharCode(codePoint));
              }
              return utf16Chars.join("");
            },
            /**
             * Converts a UTF-16 LE string to a word array.
             *
             * @param {string} utf16Str The UTF-16 LE string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
             */ parse: function parse(utf16Str) {
              // Shortcut
              var utf16StrLength = utf16Str.length;
              // Convert
              var words = [];
              for (var i = 0; i < utf16StrLength; i++) {
                words[i >>> 1] |= swapEndian(
                  utf16Str.charCodeAt(i) << (16 - (i % 2) * 16)
                );
              }
              return WordArray.create(words, utf16StrLength * 2);
            },
          };
        })();
        return CryptoJS.enc.Utf16;
      });
    });

    var encBase64 = createCommonjsModule(function (module, exports) {
      (function (root, factory) {
        {
          // CommonJS
          module.exports = factory(core);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          var parseLoop = function parseLoop(
            base64Str,
            base64StrLength,
            reverseMap
          ) {
            var words = [];
            var nBytes = 0;
            for (var i = 0; i < base64StrLength; i++) {
              if (i % 4) {
                var bits1 =
                  reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
                var bits2 =
                  reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
                var bitsCombined = bits1 | bits2;
                words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
                nBytes++;
              }
            }
            return WordArray.create(words, nBytes);
          };
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C.enc;
          /**
           * Base64 encoding strategy.
           */ C_enc.Base64 = {
            /**
             * Converts a word array to a Base64 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The Base64 string.
             *
             * @static
             *
             * @example
             *
             *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
             */ stringify: function stringify(wordArray) {
              // Shortcuts
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var map = this._map;
              // Clamp excess bits
              wordArray.clamp();
              // Convert
              var base64Chars = [];
              for (var i = 0; i < sigBytes; i += 3) {
                var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                var byte2 =
                  (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
                var byte3 =
                  (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;
                for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                  base64Chars.push(
                    map.charAt((triplet >>> (6 * (3 - j))) & 0x3f)
                  );
                }
              }
              // Add padding
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                while (base64Chars.length % 4) {
                  base64Chars.push(paddingChar);
                }
              }
              return base64Chars.join("");
            },
            /**
             * Converts a Base64 string to a word array.
             *
             * @param {string} base64Str The Base64 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
             */ parse: function parse(base64Str) {
              // Shortcuts
              var base64StrLength = base64Str.length;
              var map = this._map;
              var reverseMap = this._reverseMap;
              if (!reverseMap) {
                reverseMap = this._reverseMap = [];
                for (var j = 0; j < map.length; j++) {
                  reverseMap[map.charCodeAt(j)] = j;
                }
              }
              // Ignore padding
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex !== -1) {
                  base64StrLength = paddingIndex;
                }
              }
              // Convert
              return parseLoop(base64Str, base64StrLength, reverseMap);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          };
        })();
        return CryptoJS.enc.Base64;
      });
    });

    var encBase64url = createCommonjsModule(function (module, exports) {
      (function (root, factory) {
        {
          // CommonJS
          module.exports = factory(core);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          var parseLoop = function parseLoop(
            base64Str,
            base64StrLength,
            reverseMap
          ) {
            var words = [];
            var nBytes = 0;
            for (var i = 0; i < base64StrLength; i++) {
              if (i % 4) {
                var bits1 =
                  reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
                var bits2 =
                  reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
                var bitsCombined = bits1 | bits2;
                words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
                nBytes++;
              }
            }
            return WordArray.create(words, nBytes);
          };
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C.enc;
          /**
           * Base64url encoding strategy.
           */ C_enc.Base64url = {
            /**
             * Converts a word array to a Base64url string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @param {boolean} urlSafe Whether to use url safe
             *
             * @return {string} The Base64url string.
             *
             * @static
             *
             * @example
             *
             *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
             */ stringify: function stringify(wordArray) {
              var urlSafe =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : true;
              // Shortcuts
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var map = urlSafe ? this._safe_map : this._map;
              // Clamp excess bits
              wordArray.clamp();
              // Convert
              var base64Chars = [];
              for (var i = 0; i < sigBytes; i += 3) {
                var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                var byte2 =
                  (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
                var byte3 =
                  (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;
                for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                  base64Chars.push(
                    map.charAt((triplet >>> (6 * (3 - j))) & 0x3f)
                  );
                }
              }
              // Add padding
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                while (base64Chars.length % 4) {
                  base64Chars.push(paddingChar);
                }
              }
              return base64Chars.join("");
            },
            /**
             * Converts a Base64url string to a word array.
             *
             * @param {string} base64Str The Base64url string.
             *
             * @param {boolean} urlSafe Whether to use url safe
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
             */ parse: function parse(base64Str) {
              var urlSafe =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : true;
              // Shortcuts
              var base64StrLength = base64Str.length;
              var map = urlSafe ? this._safe_map : this._map;
              var reverseMap = this._reverseMap;
              if (!reverseMap) {
                reverseMap = this._reverseMap = [];
                for (var j = 0; j < map.length; j++) {
                  reverseMap[map.charCodeAt(j)] = j;
                }
              }
              // Ignore padding
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex !== -1) {
                  base64StrLength = paddingIndex;
                }
              }
              // Convert
              return parseLoop(base64Str, base64StrLength, reverseMap);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            _safe_map:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          };
        })();
        return CryptoJS.enc.Base64url;
      });
    });

    var md5 = createCommonjsModule(function (module, exports) {
      (function (root, factory) {
        {
          // CommonJS
          module.exports = factory(core);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function (Math1) {
          var FF = function FF(a, b, c, d, x, s, t) {
            var n = a + ((b & c) | (~b & d)) + x + t;
            return ((n << s) | (n >>> (32 - s))) + b;
          };
          var GG = function GG(a, b, c, d, x, s, t) {
            var n = a + ((b & d) | (c & ~d)) + x + t;
            return ((n << s) | (n >>> (32 - s))) + b;
          };
          var HH = function HH(a, b, c, d, x, s, t) {
            var n = a + (b ^ c ^ d) + x + t;
            return ((n << s) | (n >>> (32 - s))) + b;
          };
          var II = function II(a, b, c, d, x, s, t) {
            var n = a + (c ^ (b | ~d)) + x + t;
            return ((n << s) | (n >>> (32 - s))) + b;
          };
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo;
          // Constants table
          var T = [];
          // Compute constants
          (function () {
            for (var i = 0; i < 64; i++) {
              T[i] = (Math1.abs(Math1.sin(i + 1)) * 0x100000000) | 0;
            }
          })();
          /**
           * MD5 hash algorithm.
           */ var MD5 = (C_algo.MD5 = Hasher.extend({
            _doReset: function _doReset() {
              this._hash = new WordArray.init([
                0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476,
              ]);
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Swap endian
              for (var i = 0; i < 16; i++) {
                // Shortcuts
                var offset_i = offset + i;
                var M_offset_i = M[offset_i];
                M[offset_i] =
                  (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) |
                  (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00);
              }
              // Shortcuts
              var H = this._hash.words;
              var M_offset_0 = M[offset + 0];
              var M_offset_1 = M[offset + 1];
              var M_offset_2 = M[offset + 2];
              var M_offset_3 = M[offset + 3];
              var M_offset_4 = M[offset + 4];
              var M_offset_5 = M[offset + 5];
              var M_offset_6 = M[offset + 6];
              var M_offset_7 = M[offset + 7];
              var M_offset_8 = M[offset + 8];
              var M_offset_9 = M[offset + 9];
              var M_offset_10 = M[offset + 10];
              var M_offset_11 = M[offset + 11];
              var M_offset_12 = M[offset + 12];
              var M_offset_13 = M[offset + 13];
              var M_offset_14 = M[offset + 14];
              var M_offset_15 = M[offset + 15];
              // Working varialbes
              var a = H[0];
              var b = H[1];
              var c = H[2];
              var d = H[3];
              // Computation
              a = FF(a, b, c, d, M_offset_0, 7, T[0]);
              d = FF(d, a, b, c, M_offset_1, 12, T[1]);
              c = FF(c, d, a, b, M_offset_2, 17, T[2]);
              b = FF(b, c, d, a, M_offset_3, 22, T[3]);
              a = FF(a, b, c, d, M_offset_4, 7, T[4]);
              d = FF(d, a, b, c, M_offset_5, 12, T[5]);
              c = FF(c, d, a, b, M_offset_6, 17, T[6]);
              b = FF(b, c, d, a, M_offset_7, 22, T[7]);
              a = FF(a, b, c, d, M_offset_8, 7, T[8]);
              d = FF(d, a, b, c, M_offset_9, 12, T[9]);
              c = FF(c, d, a, b, M_offset_10, 17, T[10]);
              b = FF(b, c, d, a, M_offset_11, 22, T[11]);
              a = FF(a, b, c, d, M_offset_12, 7, T[12]);
              d = FF(d, a, b, c, M_offset_13, 12, T[13]);
              c = FF(c, d, a, b, M_offset_14, 17, T[14]);
              b = FF(b, c, d, a, M_offset_15, 22, T[15]);
              a = GG(a, b, c, d, M_offset_1, 5, T[16]);
              d = GG(d, a, b, c, M_offset_6, 9, T[17]);
              c = GG(c, d, a, b, M_offset_11, 14, T[18]);
              b = GG(b, c, d, a, M_offset_0, 20, T[19]);
              a = GG(a, b, c, d, M_offset_5, 5, T[20]);
              d = GG(d, a, b, c, M_offset_10, 9, T[21]);
              c = GG(c, d, a, b, M_offset_15, 14, T[22]);
              b = GG(b, c, d, a, M_offset_4, 20, T[23]);
              a = GG(a, b, c, d, M_offset_9, 5, T[24]);
              d = GG(d, a, b, c, M_offset_14, 9, T[25]);
              c = GG(c, d, a, b, M_offset_3, 14, T[26]);
              b = GG(b, c, d, a, M_offset_8, 20, T[27]);
              a = GG(a, b, c, d, M_offset_13, 5, T[28]);
              d = GG(d, a, b, c, M_offset_2, 9, T[29]);
              c = GG(c, d, a, b, M_offset_7, 14, T[30]);
              b = GG(b, c, d, a, M_offset_12, 20, T[31]);
              a = HH(a, b, c, d, M_offset_5, 4, T[32]);
              d = HH(d, a, b, c, M_offset_8, 11, T[33]);
              c = HH(c, d, a, b, M_offset_11, 16, T[34]);
              b = HH(b, c, d, a, M_offset_14, 23, T[35]);
              a = HH(a, b, c, d, M_offset_1, 4, T[36]);
              d = HH(d, a, b, c, M_offset_4, 11, T[37]);
              c = HH(c, d, a, b, M_offset_7, 16, T[38]);
              b = HH(b, c, d, a, M_offset_10, 23, T[39]);
              a = HH(a, b, c, d, M_offset_13, 4, T[40]);
              d = HH(d, a, b, c, M_offset_0, 11, T[41]);
              c = HH(c, d, a, b, M_offset_3, 16, T[42]);
              b = HH(b, c, d, a, M_offset_6, 23, T[43]);
              a = HH(a, b, c, d, M_offset_9, 4, T[44]);
              d = HH(d, a, b, c, M_offset_12, 11, T[45]);
              c = HH(c, d, a, b, M_offset_15, 16, T[46]);
              b = HH(b, c, d, a, M_offset_2, 23, T[47]);
              a = II(a, b, c, d, M_offset_0, 6, T[48]);
              d = II(d, a, b, c, M_offset_7, 10, T[49]);
              c = II(c, d, a, b, M_offset_14, 15, T[50]);
              b = II(b, c, d, a, M_offset_5, 21, T[51]);
              a = II(a, b, c, d, M_offset_12, 6, T[52]);
              d = II(d, a, b, c, M_offset_3, 10, T[53]);
              c = II(c, d, a, b, M_offset_10, 15, T[54]);
              b = II(b, c, d, a, M_offset_1, 21, T[55]);
              a = II(a, b, c, d, M_offset_8, 6, T[56]);
              d = II(d, a, b, c, M_offset_15, 10, T[57]);
              c = II(c, d, a, b, M_offset_6, 15, T[58]);
              b = II(b, c, d, a, M_offset_13, 21, T[59]);
              a = II(a, b, c, d, M_offset_4, 6, T[60]);
              d = II(d, a, b, c, M_offset_11, 10, T[61]);
              c = II(c, d, a, b, M_offset_2, 15, T[62]);
              b = II(b, c, d, a, M_offset_9, 21, T[63]);
              // Intermediate hash value
              H[0] = (H[0] + a) | 0;
              H[1] = (H[1] + b) | 0;
              H[2] = (H[2] + c) | 0;
              H[3] = (H[3] + d) | 0;
            },
            _doFinalize: function _doFinalize() {
              // Shortcuts
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              // Add padding
              dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
              var nBitsTotalH = Math1.floor(nBitsTotal / 0x100000000);
              var nBitsTotalL = nBitsTotal;
              dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] =
                (((nBitsTotalH << 8) | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8)) & 0xff00ff00);
              dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] =
                (((nBitsTotalL << 8) | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8)) & 0xff00ff00);
              data.sigBytes = (dataWords.length + 1) * 4;
              // Hash final blocks
              this._process();
              // Shortcuts
              var hash = this._hash;
              var H = hash.words;
              // Swap endian
              for (var i = 0; i < 4; i++) {
                // Shortcut
                var H_i = H[i];
                H[i] =
                  (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) |
                  (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
              }
              // Return final computed hash
              return hash;
            },
            clone: function clone() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            },
          }));
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.MD5('message');
           *     var hash = CryptoJS.MD5(wordArray);
           */ C.MD5 = Hasher._createHelper(MD5);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacMD5(message, key);
           */ C.HmacMD5 = Hasher._createHmacHelper(MD5);
        })(Math);
        return CryptoJS.MD5;
      });
    });

    var sha1 = createCommonjsModule(function (module, exports) {
      (function (root, factory) {
        {
          // CommonJS
          module.exports = factory(core);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo;
          // Reusable object
          var W = [];
          /**
           * SHA-1 hash algorithm.
           */ var SHA1 = (C_algo.SHA1 = Hasher.extend({
            _doReset: function _doReset() {
              this._hash = new WordArray.init([
                0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
              ]);
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Shortcut
              var H = this._hash.words;
              // Working variables
              var a = H[0];
              var b = H[1];
              var c = H[2];
              var d = H[3];
              var e = H[4];
              // Computation
              for (var i = 0; i < 80; i++) {
                if (i < 16) {
                  W[i] = M[offset + i] | 0;
                } else {
                  var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                  W[i] = (n << 1) | (n >>> 31);
                }
                var t = ((a << 5) | (a >>> 27)) + e + W[i];
                if (i < 20) {
                  t += ((b & c) | (~b & d)) + 0x5a827999;
                } else if (i < 40) {
                  t += (b ^ c ^ d) + 0x6ed9eba1;
                } else if (i < 60) {
                  t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
                } /* if (i < 80) */ else {
                  t += (b ^ c ^ d) - 0x359d3e2a;
                }
                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
              }
              // Intermediate hash value
              H[0] = (H[0] + a) | 0;
              H[1] = (H[1] + b) | 0;
              H[2] = (H[2] + c) | 0;
              H[3] = (H[3] + d) | 0;
              H[4] = (H[4] + e) | 0;
            },
            _doFinalize: function _doFinalize() {
              // Shortcuts
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              // Add padding
              dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
              dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(
                nBitsTotal / 0x100000000
              );
              dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
              data.sigBytes = dataWords.length * 4;
              // Hash final blocks
              this._process();
              // Return final computed hash
              return this._hash;
            },
            clone: function clone() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            },
          }));
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.SHA1('message');
           *     var hash = CryptoJS.SHA1(wordArray);
           */ C.SHA1 = Hasher._createHelper(SHA1);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacSHA1(message, key);
           */ C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
        })();
        return CryptoJS.SHA1;
      });
    });

    var sha256 = createCommonjsModule(function (module, exports) {
      (function (root, factory) {
        {
          // CommonJS
          module.exports = factory(core);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function (Math1) {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo;
          // Initialization and round constants tables
          var H = [];
          var K = [];
          // Compute constants
          (function () {
            var isPrime = function isPrime(n) {
              var sqrtN = Math1.sqrt(n);
              for (var factor = 2; factor <= sqrtN; factor++) {
                if (!(n % factor)) {
                  return false;
                }
              }
              return true;
            };
            var getFractionalBits = function getFractionalBits(n) {
              return ((n - (n | 0)) * 0x100000000) | 0;
            };
            var n = 2;
            var nPrime = 0;
            while (nPrime < 64) {
              if (isPrime(n)) {
                if (nPrime < 8) {
                  H[nPrime] = getFractionalBits(Math1.pow(n, 1 / 2));
                }
                K[nPrime] = getFractionalBits(Math1.pow(n, 1 / 3));
                nPrime++;
              }
              n++;
            }
          })();
          // Reusable object
          var W = [];
          /**
           * SHA-256 hash algorithm.
           */ var SHA256 = (C_algo.SHA256 = Hasher.extend({
            _doReset: function _doReset() {
              this._hash = new WordArray.init(H.slice(0));
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Shortcut
              var H = this._hash.words;
              // Working variables
              var a = H[0];
              var b = H[1];
              var c = H[2];
              var d = H[3];
              var e = H[4];
              var f = H[5];
              var g = H[6];
              var h = H[7];
              // Computation
              for (var i = 0; i < 64; i++) {
                if (i < 16) {
                  W[i] = M[offset + i] | 0;
                } else {
                  var gamma0x = W[i - 15];
                  var gamma0 =
                    ((gamma0x << 25) | (gamma0x >>> 7)) ^
                    ((gamma0x << 14) | (gamma0x >>> 18)) ^
                    (gamma0x >>> 3);
                  var gamma1x = W[i - 2];
                  var gamma1 =
                    ((gamma1x << 15) | (gamma1x >>> 17)) ^
                    ((gamma1x << 13) | (gamma1x >>> 19)) ^
                    (gamma1x >>> 10);
                  W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                }
                var ch = (e & f) ^ (~e & g);
                var maj = (a & b) ^ (a & c) ^ (b & c);
                var sigma0 =
                  ((a << 30) | (a >>> 2)) ^
                  ((a << 19) | (a >>> 13)) ^
                  ((a << 10) | (a >>> 22));
                var sigma1 =
                  ((e << 26) | (e >>> 6)) ^
                  ((e << 21) | (e >>> 11)) ^
                  ((e << 7) | (e >>> 25));
                var t1 = h + sigma1 + ch + K[i] + W[i];
                var t2 = sigma0 + maj;
                h = g;
                g = f;
                f = e;
                e = (d + t1) | 0;
                d = c;
                c = b;
                b = a;
                a = (t1 + t2) | 0;
              }
              // Intermediate hash value
              H[0] = (H[0] + a) | 0;
              H[1] = (H[1] + b) | 0;
              H[2] = (H[2] + c) | 0;
              H[3] = (H[3] + d) | 0;
              H[4] = (H[4] + e) | 0;
              H[5] = (H[5] + f) | 0;
              H[6] = (H[6] + g) | 0;
              H[7] = (H[7] + h) | 0;
            },
            _doFinalize: function _doFinalize() {
              // Shortcuts
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              // Add padding
              dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
              dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math1.floor(
                nBitsTotal / 0x100000000
              );
              dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
              data.sigBytes = dataWords.length * 4;
              // Hash final blocks
              this._process();
              // Return final computed hash
              return this._hash;
            },
            clone: function clone() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            },
          }));
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.SHA256('message');
           *     var hash = CryptoJS.SHA256(wordArray);
           */ C.SHA256 = Hasher._createHelper(SHA256);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacSHA256(message, key);
           */ C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
        })(Math);
        return CryptoJS.SHA256;
      });
    });

    var sha224 = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, sha256);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_algo = C.algo;
          var SHA256 = C_algo.SHA256;
          /**
           * SHA-224 hash algorithm.
           */ var SHA224 = (C_algo.SHA224 = SHA256.extend({
            _doReset: function _doReset() {
              this._hash = new WordArray.init([
                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31,
                0x68581511, 0x64f98fa7, 0xbefa4fa4,
              ]);
            },
            _doFinalize: function _doFinalize() {
              var hash = SHA256._doFinalize.call(this);
              hash.sigBytes -= 4;
              return hash;
            },
          }));
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.SHA224('message');
           *     var hash = CryptoJS.SHA224(wordArray);
           */ C.SHA224 = SHA256._createHelper(SHA224);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacSHA224(message, key);
           */ C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
        })();
        return CryptoJS.SHA224;
      });
    });

    var sha512 = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, x64Core);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          var X64Word_create = function X64Word_create() {
            return X64Word.create.apply(X64Word, arguments);
          };
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var Hasher = C_lib.Hasher;
          var C_x64 = C.x64;
          var X64Word = C_x64.Word;
          var X64WordArray = C_x64.WordArray;
          var C_algo = C.algo;
          // Constants
          var K = [
            X64Word_create(0x428a2f98, 0xd728ae22),
            X64Word_create(0x71374491, 0x23ef65cd),
            X64Word_create(0xb5c0fbcf, 0xec4d3b2f),
            X64Word_create(0xe9b5dba5, 0x8189dbbc),
            X64Word_create(0x3956c25b, 0xf348b538),
            X64Word_create(0x59f111f1, 0xb605d019),
            X64Word_create(0x923f82a4, 0xaf194f9b),
            X64Word_create(0xab1c5ed5, 0xda6d8118),
            X64Word_create(0xd807aa98, 0xa3030242),
            X64Word_create(0x12835b01, 0x45706fbe),
            X64Word_create(0x243185be, 0x4ee4b28c),
            X64Word_create(0x550c7dc3, 0xd5ffb4e2),
            X64Word_create(0x72be5d74, 0xf27b896f),
            X64Word_create(0x80deb1fe, 0x3b1696b1),
            X64Word_create(0x9bdc06a7, 0x25c71235),
            X64Word_create(0xc19bf174, 0xcf692694),
            X64Word_create(0xe49b69c1, 0x9ef14ad2),
            X64Word_create(0xefbe4786, 0x384f25e3),
            X64Word_create(0x0fc19dc6, 0x8b8cd5b5),
            X64Word_create(0x240ca1cc, 0x77ac9c65),
            X64Word_create(0x2de92c6f, 0x592b0275),
            X64Word_create(0x4a7484aa, 0x6ea6e483),
            X64Word_create(0x5cb0a9dc, 0xbd41fbd4),
            X64Word_create(0x76f988da, 0x831153b5),
            X64Word_create(0x983e5152, 0xee66dfab),
            X64Word_create(0xa831c66d, 0x2db43210),
            X64Word_create(0xb00327c8, 0x98fb213f),
            X64Word_create(0xbf597fc7, 0xbeef0ee4),
            X64Word_create(0xc6e00bf3, 0x3da88fc2),
            X64Word_create(0xd5a79147, 0x930aa725),
            X64Word_create(0x06ca6351, 0xe003826f),
            X64Word_create(0x14292967, 0x0a0e6e70),
            X64Word_create(0x27b70a85, 0x46d22ffc),
            X64Word_create(0x2e1b2138, 0x5c26c926),
            X64Word_create(0x4d2c6dfc, 0x5ac42aed),
            X64Word_create(0x53380d13, 0x9d95b3df),
            X64Word_create(0x650a7354, 0x8baf63de),
            X64Word_create(0x766a0abb, 0x3c77b2a8),
            X64Word_create(0x81c2c92e, 0x47edaee6),
            X64Word_create(0x92722c85, 0x1482353b),
            X64Word_create(0xa2bfe8a1, 0x4cf10364),
            X64Word_create(0xa81a664b, 0xbc423001),
            X64Word_create(0xc24b8b70, 0xd0f89791),
            X64Word_create(0xc76c51a3, 0x0654be30),
            X64Word_create(0xd192e819, 0xd6ef5218),
            X64Word_create(0xd6990624, 0x5565a910),
            X64Word_create(0xf40e3585, 0x5771202a),
            X64Word_create(0x106aa070, 0x32bbd1b8),
            X64Word_create(0x19a4c116, 0xb8d2d0c8),
            X64Word_create(0x1e376c08, 0x5141ab53),
            X64Word_create(0x2748774c, 0xdf8eeb99),
            X64Word_create(0x34b0bcb5, 0xe19b48a8),
            X64Word_create(0x391c0cb3, 0xc5c95a63),
            X64Word_create(0x4ed8aa4a, 0xe3418acb),
            X64Word_create(0x5b9cca4f, 0x7763e373),
            X64Word_create(0x682e6ff3, 0xd6b2b8a3),
            X64Word_create(0x748f82ee, 0x5defb2fc),
            X64Word_create(0x78a5636f, 0x43172f60),
            X64Word_create(0x84c87814, 0xa1f0ab72),
            X64Word_create(0x8cc70208, 0x1a6439ec),
            X64Word_create(0x90befffa, 0x23631e28),
            X64Word_create(0xa4506ceb, 0xde82bde9),
            X64Word_create(0xbef9a3f7, 0xb2c67915),
            X64Word_create(0xc67178f2, 0xe372532b),
            X64Word_create(0xca273ece, 0xea26619c),
            X64Word_create(0xd186b8c7, 0x21c0c207),
            X64Word_create(0xeada7dd6, 0xcde0eb1e),
            X64Word_create(0xf57d4f7f, 0xee6ed178),
            X64Word_create(0x06f067aa, 0x72176fba),
            X64Word_create(0x0a637dc5, 0xa2c898a6),
            X64Word_create(0x113f9804, 0xbef90dae),
            X64Word_create(0x1b710b35, 0x131c471b),
            X64Word_create(0x28db77f5, 0x23047d84),
            X64Word_create(0x32caab7b, 0x40c72493),
            X64Word_create(0x3c9ebe0a, 0x15c9bebc),
            X64Word_create(0x431d67c4, 0x9c100d4c),
            X64Word_create(0x4cc5d4be, 0xcb3e42b6),
            X64Word_create(0x597f299c, 0xfc657e2a),
            X64Word_create(0x5fcb6fab, 0x3ad6faec),
            X64Word_create(0x6c44198c, 0x4a475817),
          ];
          // Reusable objects
          var W = [];
          (function () {
            for (var i = 0; i < 80; i++) {
              W[i] = X64Word_create();
            }
          })();
          /**
           * SHA-512 hash algorithm.
           */ var SHA512 = (C_algo.SHA512 = Hasher.extend({
            _doReset: function _doReset() {
              this._hash = new X64WordArray.init([
                new X64Word.init(0x6a09e667, 0xf3bcc908),
                new X64Word.init(0xbb67ae85, 0x84caa73b),
                new X64Word.init(0x3c6ef372, 0xfe94f82b),
                new X64Word.init(0xa54ff53a, 0x5f1d36f1),
                new X64Word.init(0x510e527f, 0xade682d1),
                new X64Word.init(0x9b05688c, 0x2b3e6c1f),
                new X64Word.init(0x1f83d9ab, 0xfb41bd6b),
                new X64Word.init(0x5be0cd19, 0x137e2179),
              ]);
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Shortcuts
              var H = this._hash.words;
              var H0 = H[0];
              var H1 = H[1];
              var H2 = H[2];
              var H3 = H[3];
              var H4 = H[4];
              var H5 = H[5];
              var H6 = H[6];
              var H7 = H[7];
              var H0h = H0.high;
              var H0l = H0.low;
              var H1h = H1.high;
              var H1l = H1.low;
              var H2h = H2.high;
              var H2l = H2.low;
              var H3h = H3.high;
              var H3l = H3.low;
              var H4h = H4.high;
              var H4l = H4.low;
              var H5h = H5.high;
              var H5l = H5.low;
              var H6h = H6.high;
              var H6l = H6.low;
              var H7h = H7.high;
              var H7l = H7.low;
              // Working variables
              var ah = H0h;
              var al = H0l;
              var bh = H1h;
              var bl = H1l;
              var ch = H2h;
              var cl = H2l;
              var dh = H3h;
              var dl = H3l;
              var eh = H4h;
              var el = H4l;
              var fh = H5h;
              var fl = H5l;
              var gh = H6h;
              var gl = H6l;
              var hh = H7h;
              var hl = H7l;
              // Rounds
              for (var i = 0; i < 80; i++) {
                var Wil;
                var Wih;
                // Shortcut
                var Wi = W[i];
                // Extend message
                if (i < 16) {
                  Wih = Wi.high = M[offset + i * 2] | 0;
                  Wil = Wi.low = M[offset + i * 2 + 1] | 0;
                } else {
                  // Gamma0
                  var gamma0x = W[i - 15];
                  var gamma0xh = gamma0x.high;
                  var gamma0xl = gamma0x.low;
                  var gamma0h =
                    ((gamma0xh >>> 1) | (gamma0xl << 31)) ^
                    ((gamma0xh >>> 8) | (gamma0xl << 24)) ^
                    (gamma0xh >>> 7);
                  var gamma0l =
                    ((gamma0xl >>> 1) | (gamma0xh << 31)) ^
                    ((gamma0xl >>> 8) | (gamma0xh << 24)) ^
                    ((gamma0xl >>> 7) | (gamma0xh << 25));
                  // Gamma1
                  var gamma1x = W[i - 2];
                  var gamma1xh = gamma1x.high;
                  var gamma1xl = gamma1x.low;
                  var gamma1h =
                    ((gamma1xh >>> 19) | (gamma1xl << 13)) ^
                    ((gamma1xh << 3) | (gamma1xl >>> 29)) ^
                    (gamma1xh >>> 6);
                  var gamma1l =
                    ((gamma1xl >>> 19) | (gamma1xh << 13)) ^
                    ((gamma1xl << 3) | (gamma1xh >>> 29)) ^
                    ((gamma1xl >>> 6) | (gamma1xh << 26));
                  // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
                  var Wi7 = W[i - 7];
                  var Wi7h = Wi7.high;
                  var Wi7l = Wi7.low;
                  var Wi16 = W[i - 16];
                  var Wi16h = Wi16.high;
                  var Wi16l = Wi16.low;
                  Wil = gamma0l + Wi7l;
                  Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                  Wil = Wil + gamma1l;
                  Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                  Wil = Wil + Wi16l;
                  Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                  Wi.high = Wih;
                  Wi.low = Wil;
                }
                var chh = (eh & fh) ^ (~eh & gh);
                var chl = (el & fl) ^ (~el & gl);
                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);
                var sigma0h =
                  ((ah >>> 28) | (al << 4)) ^
                  ((ah << 30) | (al >>> 2)) ^
                  ((ah << 25) | (al >>> 7));
                var sigma0l =
                  ((al >>> 28) | (ah << 4)) ^
                  ((al << 30) | (ah >>> 2)) ^
                  ((al << 25) | (ah >>> 7));
                var sigma1h =
                  ((eh >>> 14) | (el << 18)) ^
                  ((eh >>> 18) | (el << 14)) ^
                  ((eh << 23) | (el >>> 9));
                var sigma1l =
                  ((el >>> 14) | (eh << 18)) ^
                  ((el >>> 18) | (eh << 14)) ^
                  ((el << 23) | (eh >>> 9));
                // t1 = h + sigma1 + ch + K[i] + W[i]
                var Ki = K[i];
                var Kih = Ki.high;
                var Kil = Ki.low;
                var t1l = hl + sigma1l;
                var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
                var t1l = t1l + chl;
                var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
                var t1l = t1l + Kil;
                var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
                var t1l = t1l + Wil;
                var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
                // t2 = sigma0 + maj
                var t2l = sigma0l + majl;
                var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
                // Update working variables
                hh = gh;
                hl = gl;
                gh = fh;
                gl = fl;
                fh = eh;
                fl = el;
                el = (dl + t1l) | 0;
                eh = (dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0)) | 0;
                dh = ch;
                dl = cl;
                ch = bh;
                cl = bl;
                bh = ah;
                bl = al;
                al = (t1l + t2l) | 0;
                ah = (t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0)) | 0;
              }
              // Intermediate hash value
              H0l = H0.low = H0l + al;
              H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
              H1l = H1.low = H1l + bl;
              H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
              H2l = H2.low = H2l + cl;
              H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
              H3l = H3.low = H3l + dl;
              H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
              H4l = H4.low = H4l + el;
              H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
              H5l = H5.low = H5l + fl;
              H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
              H6l = H6.low = H6l + gl;
              H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
              H7l = H7.low = H7l + hl;
              H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
            },
            _doFinalize: function _doFinalize() {
              // Shortcuts
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              // Add padding
              dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
              dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(
                nBitsTotal / 0x100000000
              );
              dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
              data.sigBytes = dataWords.length * 4;
              // Hash final blocks
              this._process();
              // Convert hash to 32-bit word array before returning
              var hash = this._hash.toX32();
              // Return final computed hash
              return hash;
            },
            clone: function clone() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            },
            blockSize: 1024 / 32,
          }));
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.SHA512('message');
           *     var hash = CryptoJS.SHA512(wordArray);
           */ C.SHA512 = Hasher._createHelper(SHA512);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacSHA512(message, key);
           */ C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
        })();
        return CryptoJS.SHA512;
      });
    });

    var sha384 = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, x64Core, sha512);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_x64 = C.x64;
          var X64Word = C_x64.Word;
          var X64WordArray = C_x64.WordArray;
          var C_algo = C.algo;
          var SHA512 = C_algo.SHA512;
          /**
           * SHA-384 hash algorithm.
           */ var SHA384 = (C_algo.SHA384 = SHA512.extend({
            _doReset: function _doReset() {
              this._hash = new X64WordArray.init([
                new X64Word.init(0xcbbb9d5d, 0xc1059ed8),
                new X64Word.init(0x629a292a, 0x367cd507),
                new X64Word.init(0x9159015a, 0x3070dd17),
                new X64Word.init(0x152fecd8, 0xf70e5939),
                new X64Word.init(0x67332667, 0xffc00b31),
                new X64Word.init(0x8eb44a87, 0x68581511),
                new X64Word.init(0xdb0c2e0d, 0x64f98fa7),
                new X64Word.init(0x47b5481d, 0xbefa4fa4),
              ]);
            },
            _doFinalize: function _doFinalize() {
              var hash = SHA512._doFinalize.call(this);
              hash.sigBytes -= 16;
              return hash;
            },
          }));
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.SHA384('message');
           *     var hash = CryptoJS.SHA384(wordArray);
           */ C.SHA384 = SHA512._createHelper(SHA384);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacSHA384(message, key);
           */ C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
        })();
        return CryptoJS.SHA384;
      });
    });

    var sha3 = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, x64Core);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function (Math1) {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_x64 = C.x64;
          var X64Word = C_x64.Word;
          var C_algo = C.algo;
          // Constants tables
          var RHO_OFFSETS = [];
          var PI_INDEXES = [];
          var ROUND_CONSTANTS = [];
          // Compute Constants
          (function () {
            // Compute rho offset constants
            var x = 1,
              y = 0;
            for (var t = 0; t < 24; t++) {
              RHO_OFFSETS[x + 5 * y] = (((t + 1) * (t + 2)) / 2) % 64;
              var newX = y % 5;
              var newY = (2 * x + 3 * y) % 5;
              x = newX;
              y = newY;
            }
            // Compute pi index constants
            for (var x = 0; x < 5; x++) {
              for (var y = 0; y < 5; y++) {
                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
              }
            }
            // Compute round constants
            var LFSR = 0x01;
            for (var i = 0; i < 24; i++) {
              var roundConstantMsw = 0;
              var roundConstantLsw = 0;
              for (var j = 0; j < 7; j++) {
                if (LFSR & 0x01) {
                  var bitPosition = (1 << j) - 1;
                  if (bitPosition < 32) {
                    roundConstantLsw ^= 1 << bitPosition;
                  } /* if (bitPosition >= 32) */ else {
                    roundConstantMsw ^= 1 << (bitPosition - 32);
                  }
                }
                // Compute next LFSR
                if (LFSR & 0x80) {
                  // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
                  LFSR = (LFSR << 1) ^ 0x71;
                } else {
                  LFSR <<= 1;
                }
              }
              ROUND_CONSTANTS[i] = X64Word.create(
                roundConstantMsw,
                roundConstantLsw
              );
            }
          })();
          // Reusable objects for temporary values
          var T = [];
          (function () {
            for (var i = 0; i < 25; i++) {
              T[i] = X64Word.create();
            }
          })();
          /**
           * SHA-3 hash algorithm.
           */ var SHA3 = (C_algo.SHA3 = Hasher.extend({
            /**
             * Configuration options.
             *
             * @property {number} outputLength
             *   The desired number of bits in the output hash.
             *   Only values permitted are: 224, 256, 384, 512.
             *   Default: 512
             */ cfg: Hasher.cfg.extend({
              outputLength: 512,
            }),
            _doReset: function _doReset() {
              var state = (this._state = []);
              for (var i = 0; i < 25; i++) {
                state[i] = new X64Word.init();
              }
              this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Shortcuts
              var state = this._state;
              var nBlockSizeLanes = this.blockSize / 2;
              // Absorb
              for (var i = 0; i < nBlockSizeLanes; i++) {
                // Shortcuts
                var M2i = M[offset + 2 * i];
                var M2i1 = M[offset + 2 * i + 1];
                // Swap endian
                M2i =
                  (((M2i << 8) | (M2i >>> 24)) & 0x00ff00ff) |
                  (((M2i << 24) | (M2i >>> 8)) & 0xff00ff00);
                M2i1 =
                  (((M2i1 << 8) | (M2i1 >>> 24)) & 0x00ff00ff) |
                  (((M2i1 << 24) | (M2i1 >>> 8)) & 0xff00ff00);
                // Absorb message into state
                var lane = state[i];
                lane.high ^= M2i1;
                lane.low ^= M2i;
              }
              // Rounds
              for (var round = 0; round < 24; round++) {
                // Theta
                for (var x = 0; x < 5; x++) {
                  // Mix column lanes
                  var tMsw = 0,
                    tLsw = 0;
                  for (var y = 0; y < 5; y++) {
                    var lane = state[x + 5 * y];
                    tMsw ^= lane.high;
                    tLsw ^= lane.low;
                  }
                  // Temporary values
                  var Tx = T[x];
                  Tx.high = tMsw;
                  Tx.low = tLsw;
                }
                for (var x = 0; x < 5; x++) {
                  // Shortcuts
                  var Tx4 = T[(x + 4) % 5];
                  var Tx1 = T[(x + 1) % 5];
                  var Tx1Msw = Tx1.high;
                  var Tx1Lsw = Tx1.low;
                  // Mix surrounding columns
                  var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
                  var tLsw = Tx4.low ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
                  for (var y = 0; y < 5; y++) {
                    var lane = state[x + 5 * y];
                    lane.high ^= tMsw;
                    lane.low ^= tLsw;
                  }
                }
                // Rho Pi
                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                  var tMsw;
                  var tLsw;
                  // Shortcuts
                  var lane = state[laneIndex];
                  var laneMsw = lane.high;
                  var laneLsw = lane.low;
                  var rhoOffset = RHO_OFFSETS[laneIndex];
                  // Rotate lanes
                  if (rhoOffset < 32) {
                    tMsw =
                      (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
                    tLsw =
                      (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
                  } /* if (rhoOffset >= 32) */ else {
                    tMsw =
                      (laneLsw << (rhoOffset - 32)) |
                      (laneMsw >>> (64 - rhoOffset));
                    tLsw =
                      (laneMsw << (rhoOffset - 32)) |
                      (laneLsw >>> (64 - rhoOffset));
                  }
                  // Transpose lanes
                  var TPiLane = T[PI_INDEXES[laneIndex]];
                  TPiLane.high = tMsw;
                  TPiLane.low = tLsw;
                }
                // Rho pi at x = y = 0
                var T0 = T[0];
                var state0 = state[0];
                T0.high = state0.high;
                T0.low = state0.low;
                // Chi
                for (var x = 0; x < 5; x++) {
                  for (var y = 0; y < 5; y++) {
                    // Shortcuts
                    var laneIndex = x + 5 * y;
                    var lane = state[laneIndex];
                    var TLane = T[laneIndex];
                    var Tx1Lane = T[((x + 1) % 5) + 5 * y];
                    var Tx2Lane = T[((x + 2) % 5) + 5 * y];
                    // Mix rows
                    lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
                    lane.low = TLane.low ^ (~Tx1Lane.low & Tx2Lane.low);
                  }
                }
                // Iota
                var lane = state[0];
                var roundConstant = ROUND_CONSTANTS[round];
                lane.high ^= roundConstant.high;
                lane.low ^= roundConstant.low;
              }
            },
            _doFinalize: function _doFinalize() {
              // Shortcuts
              var data = this._data;
              var dataWords = data.words;
              this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              var blockSizeBits = this.blockSize * 32;
              // Add padding
              dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - (nBitsLeft % 32));
              dataWords[
                ((Math1.ceil((nBitsLeft + 1) / blockSizeBits) *
                  blockSizeBits) >>>
                  5) -
                  1
              ] |= 0x80;
              data.sigBytes = dataWords.length * 4;
              // Hash final blocks
              this._process();
              // Shortcuts
              var state = this._state;
              var outputLengthBytes = this.cfg.outputLength / 8;
              var outputLengthLanes = outputLengthBytes / 8;
              // Squeeze
              var hashWords = [];
              for (var i = 0; i < outputLengthLanes; i++) {
                // Shortcuts
                var lane = state[i];
                var laneMsw = lane.high;
                var laneLsw = lane.low;
                // Swap endian
                laneMsw =
                  (((laneMsw << 8) | (laneMsw >>> 24)) & 0x00ff00ff) |
                  (((laneMsw << 24) | (laneMsw >>> 8)) & 0xff00ff00);
                laneLsw =
                  (((laneLsw << 8) | (laneLsw >>> 24)) & 0x00ff00ff) |
                  (((laneLsw << 24) | (laneLsw >>> 8)) & 0xff00ff00);
                // Squeeze state to retrieve hash
                hashWords.push(laneLsw);
                hashWords.push(laneMsw);
              }
              // Return final computed hash
              return new WordArray.init(hashWords, outputLengthBytes);
            },
            clone: function clone() {
              var clone = Hasher.clone.call(this);
              var state = (clone._state = this._state.slice(0));
              for (var i = 0; i < 25; i++) {
                state[i] = state[i].clone();
              }
              return clone;
            },
          }));
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.SHA3('message');
           *     var hash = CryptoJS.SHA3(wordArray);
           */ C.SHA3 = Hasher._createHelper(SHA3);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacSHA3(message, key);
           */ C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
        })(Math);
        return CryptoJS.SHA3;
      });
    });

    var ripemd160 = createCommonjsModule(function (module, exports) {
      (function (root, factory) {
        {
          // CommonJS
          module.exports = factory(core);
        }
      })(commonjsGlobal, function (CryptoJS) {
        /** @preserve
		(c) 2012 by Cédric Mesnil. All rights reserved.

		Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

		    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
		    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

		THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		*/ (function (Math1) {
          var f1 = function f1(x, y, z) {
            return x ^ y ^ z;
          };
          var f2 = function f2(x, y, z) {
            return (x & y) | (~x & z);
          };
          var f3 = function f3(x, y, z) {
            return (x | ~y) ^ z;
          };
          var f4 = function f4(x, y, z) {
            return (x & z) | (y & ~z);
          };
          var f5 = function f5(x, y, z) {
            return x ^ (y | ~z);
          };
          var rotl = function rotl(x, n) {
            return (x << n) | (x >>> (32 - n));
          };
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo;
          // Constants table
          var _zl = WordArray.create([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1,
            10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1,
            2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15,
            14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
          ]);
          var _zr = WordArray.create([
            5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7,
            0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9,
            11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13,
            9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
          ]);
          var _sl = WordArray.create([
            11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
            11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
            15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14,
            5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8,
            5, 6,
          ]);
          var _sr = WordArray.create([
            8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15,
            7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6,
            14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9,
            12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13,
            11, 11,
          ]);
          var _hl = WordArray.create([
            0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e,
          ]);
          var _hr = WordArray.create([
            0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x00000000,
          ]);
          /**
           * RIPEMD160 hash algorithm.
           */ var RIPEMD160 = (C_algo.RIPEMD160 = Hasher.extend({
            _doReset: function _doReset() {
              this._hash = WordArray.create([
                0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
              ]);
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Swap endian
              for (var i = 0; i < 16; i++) {
                // Shortcuts
                var offset_i = offset + i;
                var M_offset_i = M[offset_i];
                // Swap
                M[offset_i] =
                  (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) |
                  (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00);
              }
              // Shortcut
              var H = this._hash.words;
              var hl = _hl.words;
              var hr = _hr.words;
              var zl = _zl.words;
              var zr = _zr.words;
              var sl = _sl.words;
              var sr = _sr.words;
              // Working variables
              var al, bl, cl, dl, el;
              var ar, br, cr, dr, er;
              ar = al = H[0];
              br = bl = H[1];
              cr = cl = H[2];
              dr = dl = H[3];
              er = el = H[4];
              // Computation
              var t;
              for (var i = 0; i < 80; i += 1) {
                t = (al + M[offset + zl[i]]) | 0;
                if (i < 16) {
                  t += f1(bl, cl, dl) + hl[0];
                } else if (i < 32) {
                  t += f2(bl, cl, dl) + hl[1];
                } else if (i < 48) {
                  t += f3(bl, cl, dl) + hl[2];
                } else if (i < 64) {
                  t += f4(bl, cl, dl) + hl[3];
                } else {
                  t += f5(bl, cl, dl) + hl[4];
                }
                t = t | 0;
                t = rotl(t, sl[i]);
                t = (t + el) | 0;
                al = el;
                el = dl;
                dl = rotl(cl, 10);
                cl = bl;
                bl = t;
                t = (ar + M[offset + zr[i]]) | 0;
                if (i < 16) {
                  t += f5(br, cr, dr) + hr[0];
                } else if (i < 32) {
                  t += f4(br, cr, dr) + hr[1];
                } else if (i < 48) {
                  t += f3(br, cr, dr) + hr[2];
                } else if (i < 64) {
                  t += f2(br, cr, dr) + hr[3];
                } else {
                  t += f1(br, cr, dr) + hr[4];
                }
                t = t | 0;
                t = rotl(t, sr[i]);
                t = (t + er) | 0;
                ar = er;
                er = dr;
                dr = rotl(cr, 10);
                cr = br;
                br = t;
              }
              // Intermediate hash value
              t = (H[1] + cl + dr) | 0;
              H[1] = (H[2] + dl + er) | 0;
              H[2] = (H[3] + el + ar) | 0;
              H[3] = (H[4] + al + br) | 0;
              H[4] = (H[0] + bl + cr) | 0;
              H[0] = t;
            },
            _doFinalize: function _doFinalize() {
              // Shortcuts
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              // Add padding
              dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
              dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] =
                (((nBitsTotal << 8) | (nBitsTotal >>> 24)) & 0x00ff00ff) |
                (((nBitsTotal << 24) | (nBitsTotal >>> 8)) & 0xff00ff00);
              data.sigBytes = (dataWords.length + 1) * 4;
              // Hash final blocks
              this._process();
              // Shortcuts
              var hash = this._hash;
              var H = hash.words;
              // Swap endian
              for (var i = 0; i < 5; i++) {
                // Shortcut
                var H_i = H[i];
                // Swap
                H[i] =
                  (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) |
                  (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
              }
              // Return final computed hash
              return hash;
            },
            clone: function clone() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            },
          }));
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.RIPEMD160('message');
           *     var hash = CryptoJS.RIPEMD160(wordArray);
           */ C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
           */ C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
        })();
        return CryptoJS.RIPEMD160;
      });
    });

    var hmac = createCommonjsModule(function (module, exports) {
      (function (root, factory) {
        {
          // CommonJS
          module.exports = factory(core);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var C_enc = C.enc;
          var Utf8 = C_enc.Utf8;
          var C_algo = C.algo;
          /**
           * HMAC algorithm.
           */ C_algo.HMAC = Base.extend({
            /**
             * Initializes a newly created HMAC.
             *
             * @param {Hasher} hasher The hash algorithm to use.
             * @param {WordArray|string} key The secret key.
             *
             * @example
             *
             *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
             */ init: function init(hasher, key) {
              // Init hasher
              hasher = this._hasher = new hasher.init();
              // Convert string to WordArray, else assume WordArray already
              if (typeof key == "string") {
                key = Utf8.parse(key);
              }
              // Shortcuts
              var hasherBlockSize = hasher.blockSize;
              var hasherBlockSizeBytes = hasherBlockSize * 4;
              // Allow arbitrary length keys
              if (key.sigBytes > hasherBlockSizeBytes) {
                key = hasher.finalize(key);
              }
              // Clamp excess bits
              key.clamp();
              // Clone key for inner and outer pads
              var oKey = (this._oKey = key.clone());
              var iKey = (this._iKey = key.clone());
              // Shortcuts
              var oKeyWords = oKey.words;
              var iKeyWords = iKey.words;
              // XOR keys with pad constants
              for (var i = 0; i < hasherBlockSize; i++) {
                oKeyWords[i] ^= 0x5c5c5c5c;
                iKeyWords[i] ^= 0x36363636;
              }
              oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
              // Set initial values
              this.reset();
            },
            /**
             * Resets this HMAC to its initial state.
             *
             * @example
             *
             *     hmacHasher.reset();
             */ reset: function reset() {
              // Shortcut
              var hasher = this._hasher;
              // Reset
              hasher.reset();
              hasher.update(this._iKey);
            },
            /**
             * Updates this HMAC with a message.
             *
             * @param {WordArray|string} messageUpdate The message to append.
             *
             * @return {HMAC} This HMAC instance.
             *
             * @example
             *
             *     hmacHasher.update('message');
             *     hmacHasher.update(wordArray);
             */ update: function update(messageUpdate) {
              this._hasher.update(messageUpdate);
              // Chainable
              return this;
            },
            /**
             * Finalizes the HMAC computation.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} messageUpdate (Optional) A final message update.
             *
             * @return {WordArray} The HMAC.
             *
             * @example
             *
             *     var hmac = hmacHasher.finalize();
             *     var hmac = hmacHasher.finalize('message');
             *     var hmac = hmacHasher.finalize(wordArray);
             */ finalize: function finalize(messageUpdate) {
              // Shortcut
              var hasher = this._hasher;
              // Compute HMAC
              var innerHash = hasher.finalize(messageUpdate);
              hasher.reset();
              var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
              return hmac;
            },
          });
        })();
      });
    });

    var pbkdf2 = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, sha1, hmac);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var WordArray = C_lib.WordArray;
          var C_algo = C.algo;
          var SHA1 = C_algo.SHA1;
          var HMAC = C_algo.HMAC;
          /**
           * Password-Based Key Derivation Function 2 algorithm.
           */ var PBKDF2 = (C_algo.PBKDF2 = Base.extend({
            /**
             * Configuration options.
             *
             * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
             * @property {Hasher} hasher The hasher to use. Default: SHA1
             * @property {number} iterations The number of iterations to perform. Default: 1
             */ cfg: Base.extend({
              keySize: 128 / 32,
              hasher: SHA1,
              iterations: 1,
            }),
            /**
             * Initializes a newly created key derivation function.
             *
             * @param {Object} cfg (Optional) The configuration options to use for the derivation.
             *
             * @example
             *
             *     var kdf = CryptoJS.algo.PBKDF2.create();
             *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
             *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
             */ init: function init(cfg) {
              this.cfg = this.cfg.extend(cfg);
            },
            /**
             * Computes the Password-Based Key Derivation Function 2.
             *
             * @param {WordArray|string} password The password.
             * @param {WordArray|string} salt A salt.
             *
             * @return {WordArray} The derived key.
             *
             * @example
             *
             *     var key = kdf.compute(password, salt);
             */ compute: function compute(password, salt) {
              // Shortcut
              var cfg = this.cfg;
              // Init HMAC
              var hmac = HMAC.create(cfg.hasher, password);
              // Initial values
              var derivedKey = WordArray.create();
              var blockIndex = WordArray.create([0x00000001]);
              // Shortcuts
              var derivedKeyWords = derivedKey.words;
              var blockIndexWords = blockIndex.words;
              var keySize = cfg.keySize;
              var iterations = cfg.iterations;
              // Generate key
              while (derivedKeyWords.length < keySize) {
                var block = hmac.update(salt).finalize(blockIndex);
                hmac.reset();
                // Shortcuts
                var blockWords = block.words;
                var blockWordsLength = blockWords.length;
                // Iterations
                var intermediate = block;
                for (var i = 1; i < iterations; i++) {
                  intermediate = hmac.finalize(intermediate);
                  hmac.reset();
                  // Shortcut
                  var intermediateWords = intermediate.words;
                  // XOR intermediate with block
                  for (var j = 0; j < blockWordsLength; j++) {
                    blockWords[j] ^= intermediateWords[j];
                  }
                }
                derivedKey.concat(block);
                blockIndexWords[0]++;
              }
              derivedKey.sigBytes = keySize * 4;
              return derivedKey;
            },
          }));
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           * @param {Object} cfg (Optional) The configuration options to use for this computation.
           *
           * @return {WordArray} The derived key.
           *
           * @static
           *
           * @example
           *
           *     var key = CryptoJS.PBKDF2(password, salt);
           *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
           *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
           */ C.PBKDF2 = function (password, salt, cfg) {
            return PBKDF2.create(cfg).compute(password, salt);
          };
        })();
        return CryptoJS.PBKDF2;
      });
    });

    var evpkdf = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, sha1, hmac);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var WordArray = C_lib.WordArray;
          var C_algo = C.algo;
          var MD5 = C_algo.MD5;
          /**
           * This key derivation function is meant to conform with EVP_BytesToKey.
           * www.openssl.org/docs/crypto/EVP_BytesToKey.html
           */ var EvpKDF = (C_algo.EvpKDF = Base.extend({
            /**
             * Configuration options.
             *
             * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
             * @property {Hasher} hasher The hash algorithm to use. Default: MD5
             * @property {number} iterations The number of iterations to perform. Default: 1
             */ cfg: Base.extend({
              keySize: 128 / 32,
              hasher: MD5,
              iterations: 1,
            }),
            /**
             * Initializes a newly created key derivation function.
             *
             * @param {Object} cfg (Optional) The configuration options to use for the derivation.
             *
             * @example
             *
             *     var kdf = CryptoJS.algo.EvpKDF.create();
             *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
             *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
             */ init: function init(cfg) {
              this.cfg = this.cfg.extend(cfg);
            },
            /**
             * Derives a key from a password.
             *
             * @param {WordArray|string} password The password.
             * @param {WordArray|string} salt A salt.
             *
             * @return {WordArray} The derived key.
             *
             * @example
             *
             *     var key = kdf.compute(password, salt);
             */ compute: function compute(password, salt) {
              var block;
              // Shortcut
              var cfg = this.cfg;
              // Init hasher
              var hasher = cfg.hasher.create();
              // Initial values
              var derivedKey = WordArray.create();
              // Shortcuts
              var derivedKeyWords = derivedKey.words;
              var keySize = cfg.keySize;
              var iterations = cfg.iterations;
              // Generate key
              while (derivedKeyWords.length < keySize) {
                if (block) {
                  hasher.update(block);
                }
                block = hasher.update(password).finalize(salt);
                hasher.reset();
                // Iterations
                for (var i = 1; i < iterations; i++) {
                  block = hasher.finalize(block);
                  hasher.reset();
                }
                derivedKey.concat(block);
              }
              derivedKey.sigBytes = keySize * 4;
              return derivedKey;
            },
          }));
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           * @param {Object} cfg (Optional) The configuration options to use for this computation.
           *
           * @return {WordArray} The derived key.
           *
           * @static
           *
           * @example
           *
           *     var key = CryptoJS.EvpKDF(password, salt);
           *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
           *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
           */ C.EvpKDF = function (password, salt, cfg) {
            return EvpKDF.create(cfg).compute(password, salt);
          };
        })();
        return CryptoJS.EvpKDF;
      });
    });

    var cipherCore = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, evpkdf);
        }
      })(commonjsGlobal, function (CryptoJS) {
        /**
         * Cipher core components.
         */ CryptoJS.lib.Cipher ||
          (function (undefined1) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var Base = C_lib.Base;
            var WordArray = C_lib.WordArray;
            var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
            var C_enc = C.enc;
            C_enc.Utf8;
            var Base64 = C_enc.Base64;
            var C_algo = C.algo;
            var EvpKDF = C_algo.EvpKDF;
            /**
             * Abstract base cipher template.
             *
             * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
             * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
             * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
             * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
             */ var Cipher = (C_lib.Cipher = BufferedBlockAlgorithm.extend({
              /**
               * Configuration options.
               *
               * @property {WordArray} iv The IV to use for this operation.
               */ cfg: Base.extend(),
              /**
               * Creates this cipher in encryption mode.
               *
               * @param {WordArray} key The key.
               * @param {Object} cfg (Optional) The configuration options to use for this operation.
               *
               * @return {Cipher} A cipher instance.
               *
               * @static
               *
               * @example
               *
               *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
               */ createEncryptor: function createEncryptor(key, cfg) {
                return this.create(this._ENC_XFORM_MODE, key, cfg);
              },
              /**
               * Creates this cipher in decryption mode.
               *
               * @param {WordArray} key The key.
               * @param {Object} cfg (Optional) The configuration options to use for this operation.
               *
               * @return {Cipher} A cipher instance.
               *
               * @static
               *
               * @example
               *
               *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
               */ createDecryptor: function createDecryptor(key, cfg) {
                return this.create(this._DEC_XFORM_MODE, key, cfg);
              },
              /**
               * Initializes a newly created cipher.
               *
               * @param {number} xformMode Either the encryption or decryption transormation mode constant.
               * @param {WordArray} key The key.
               * @param {Object} cfg (Optional) The configuration options to use for this operation.
               *
               * @example
               *
               *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
               */ init: function init(xformMode, key, cfg) {
                // Apply config defaults
                this.cfg = this.cfg.extend(cfg);
                // Store transform mode and key
                this._xformMode = xformMode;
                this._key = key;
                // Set initial values
                this.reset();
              },
              /**
               * Resets this cipher to its initial state.
               *
               * @example
               *
               *     cipher.reset();
               */ reset: function reset() {
                // Reset data buffer
                BufferedBlockAlgorithm.reset.call(this);
                // Perform concrete-cipher logic
                this._doReset();
              },
              /**
               * Adds data to be encrypted or decrypted.
               *
               * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
               *
               * @return {WordArray} The data after processing.
               *
               * @example
               *
               *     var encrypted = cipher.process('data');
               *     var encrypted = cipher.process(wordArray);
               */ process: function process(dataUpdate) {
                // Append
                this._append(dataUpdate);
                // Process available blocks
                return this._process();
              },
              /**
               * Finalizes the encryption or decryption process.
               * Note that the finalize operation is effectively a destructive, read-once operation.
               *
               * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
               *
               * @return {WordArray} The data after final processing.
               *
               * @example
               *
               *     var encrypted = cipher.finalize();
               *     var encrypted = cipher.finalize('data');
               *     var encrypted = cipher.finalize(wordArray);
               */ finalize: function finalize(dataUpdate) {
                // Final data update
                if (dataUpdate) {
                  this._append(dataUpdate);
                }
                // Perform concrete-cipher logic
                var finalProcessedData = this._doFinalize();
                return finalProcessedData;
              },
              keySize: 128 / 32,
              ivSize: 128 / 32,
              _ENC_XFORM_MODE: 1,
              _DEC_XFORM_MODE: 2,
              /**
               * Creates shortcut functions to a cipher's object interface.
               *
               * @param {Cipher} cipher The cipher to create a helper for.
               *
               * @return {Object} An object with encrypt and decrypt shortcut functions.
               *
               * @static
               *
               * @example
               *
               *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
               */ _createHelper: (function () {
                var selectCipherStrategy = function selectCipherStrategy(key) {
                  if (typeof key == "string") {
                    return PasswordBasedCipher;
                  } else {
                    return SerializableCipher;
                  }
                };
                return function (cipher) {
                  return {
                    encrypt: function encrypt(message, key, cfg) {
                      return selectCipherStrategy(key).encrypt(
                        cipher,
                        message,
                        key,
                        cfg
                      );
                    },
                    decrypt: function decrypt(ciphertext, key, cfg) {
                      return selectCipherStrategy(key).decrypt(
                        cipher,
                        ciphertext,
                        key,
                        cfg
                      );
                    },
                  };
                };
              })(),
            }));
            /**
             * Abstract base stream cipher template.
             *
             * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
             */ C_lib.StreamCipher = Cipher.extend({
              _doFinalize: function _doFinalize() {
                // Process partial blocks
                var finalProcessedBlocks = this._process(!!"flush");
                return finalProcessedBlocks;
              },
              blockSize: 1,
            });
            /**
             * Mode namespace.
             */ var C_mode = (C.mode = {});
            /**
             * Abstract base block cipher mode template.
             */ var BlockCipherMode = (C_lib.BlockCipherMode = Base.extend({
              /**
               * Creates this mode for encryption.
               *
               * @param {Cipher} cipher A block cipher instance.
               * @param {Array} iv The IV words.
               *
               * @static
               *
               * @example
               *
               *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
               */ createEncryptor: function createEncryptor(cipher, iv) {
                return this.Encryptor.create(cipher, iv);
              },
              /**
               * Creates this mode for decryption.
               *
               * @param {Cipher} cipher A block cipher instance.
               * @param {Array} iv The IV words.
               *
               * @static
               *
               * @example
               *
               *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
               */ createDecryptor: function createDecryptor(cipher, iv) {
                return this.Decryptor.create(cipher, iv);
              },
              /**
               * Initializes a newly created mode.
               *
               * @param {Cipher} cipher A block cipher instance.
               * @param {Array} iv The IV words.
               *
               * @example
               *
               *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
               */ init: function init(cipher, iv) {
                this._cipher = cipher;
                this._iv = iv;
              },
            }));
            /**
             * Cipher Block Chaining mode.
             */ var CBC = (C_mode.CBC = (function () {
              var xorBlock = function xorBlock(words, offset, blockSize) {
                var block;
                // Shortcut
                var iv = this._iv;
                // Choose mixing block
                if (iv) {
                  block = iv;
                  // Remove IV for subsequent blocks
                  this._iv = undefined1;
                } else {
                  block = this._prevBlock;
                }
                // XOR blocks
                for (var i = 0; i < blockSize; i++) {
                  words[offset + i] ^= block[i];
                }
              };
              /**
               * Abstract base CBC mode.
               */ var CBC = BlockCipherMode.extend();
              /**
               * CBC encryptor.
               */ CBC.Encryptor = CBC.extend({
                /**
                 * Processes the data block at offset.
                 *
                 * @param {Array} words The data words to operate on.
                 * @param {number} offset The offset where the block starts.
                 *
                 * @example
                 *
                 *     mode.processBlock(data.words, offset);
                 */ processBlock: function processBlock(words, offset) {
                  // Shortcuts
                  var cipher = this._cipher;
                  var blockSize = cipher.blockSize;
                  // XOR and encrypt
                  xorBlock.call(this, words, offset, blockSize);
                  cipher.encryptBlock(words, offset);
                  // Remember this block to use with next block
                  this._prevBlock = words.slice(offset, offset + blockSize);
                },
              });
              /**
               * CBC decryptor.
               */ CBC.Decryptor = CBC.extend({
                /**
                 * Processes the data block at offset.
                 *
                 * @param {Array} words The data words to operate on.
                 * @param {number} offset The offset where the block starts.
                 *
                 * @example
                 *
                 *     mode.processBlock(data.words, offset);
                 */ processBlock: function processBlock(words, offset) {
                  // Shortcuts
                  var cipher = this._cipher;
                  var blockSize = cipher.blockSize;
                  // Remember this block to use with next block
                  var thisBlock = words.slice(offset, offset + blockSize);
                  // Decrypt and XOR
                  cipher.decryptBlock(words, offset);
                  xorBlock.call(this, words, offset, blockSize);
                  // This block becomes the previous block
                  this._prevBlock = thisBlock;
                },
              });
              return CBC;
            })());
            /**
             * Padding namespace.
             */ var C_pad = (C.pad = {});
            /**
             * PKCS #5/7 padding strategy.
             */ var Pkcs7 = (C_pad.Pkcs7 = {
              /**
               * Pads data using the algorithm defined in PKCS #5/7.
               *
               * @param {WordArray} data The data to pad.
               * @param {number} blockSize The multiple that the data should be padded to.
               *
               * @static
               *
               * @example
               *
               *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
               */ pad: function pad(data, blockSize) {
                // Shortcut
                var blockSizeBytes = blockSize * 4;
                // Count padding bytes
                var nPaddingBytes =
                  blockSizeBytes - (data.sigBytes % blockSizeBytes);
                // Create padding word
                var paddingWord =
                  (nPaddingBytes << 24) |
                  (nPaddingBytes << 16) |
                  (nPaddingBytes << 8) |
                  nPaddingBytes;
                // Create padding
                var paddingWords = [];
                for (var i = 0; i < nPaddingBytes; i += 4) {
                  paddingWords.push(paddingWord);
                }
                var padding = WordArray.create(paddingWords, nPaddingBytes);
                // Add padding
                data.concat(padding);
              },
              /**
               * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
               *
               * @param {WordArray} data The data to unpad.
               *
               * @static
               *
               * @example
               *
               *     CryptoJS.pad.Pkcs7.unpad(wordArray);
               */ unpad: function unpad(data) {
                // Get number of padding bytes from last byte
                var nPaddingBytes =
                  data.words[(data.sigBytes - 1) >>> 2] & 0xff;
                // Remove padding
                data.sigBytes -= nPaddingBytes;
              },
            });
            /**
             * Abstract base block cipher template.
             *
             * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
             */ C_lib.BlockCipher = Cipher.extend({
              /**
               * Configuration options.
               *
               * @property {Mode} mode The block mode to use. Default: CBC
               * @property {Padding} padding The padding strategy to use. Default: Pkcs7
               */ cfg: Cipher.cfg.extend({
                mode: CBC,
                padding: Pkcs7,
              }),
              reset: function reset() {
                var modeCreator;
                // Reset cipher
                Cipher.reset.call(this);
                // Shortcuts
                var cfg = this.cfg;
                var iv = cfg.iv;
                var mode = cfg.mode;
                // Reset block mode
                if (this._xformMode == this._ENC_XFORM_MODE) {
                  modeCreator = mode.createEncryptor;
                } /* if (this._xformMode == this._DEC_XFORM_MODE) */ else {
                  modeCreator = mode.createDecryptor;
                  // Keep at least one block in the buffer for unpadding
                  this._minBufferSize = 1;
                }
                if (this._mode && this._mode.__creator == modeCreator) {
                  this._mode.init(this, iv && iv.words);
                } else {
                  this._mode = modeCreator.call(mode, this, iv && iv.words);
                  this._mode.__creator = modeCreator;
                }
              },
              _doProcessBlock: function _doProcessBlock(words, offset) {
                this._mode.processBlock(words, offset);
              },
              _doFinalize: function _doFinalize() {
                var finalProcessedBlocks;
                // Shortcut
                var padding = this.cfg.padding;
                // Finalize
                if (this._xformMode == this._ENC_XFORM_MODE) {
                  // Pad data
                  padding.pad(this._data, this.blockSize);
                  // Process final blocks
                  finalProcessedBlocks = this._process(!!"flush");
                } /* if (this._xformMode == this._DEC_XFORM_MODE) */ else {
                  // Process final blocks
                  finalProcessedBlocks = this._process(!!"flush");
                  // Unpad data
                  padding.unpad(finalProcessedBlocks);
                }
                return finalProcessedBlocks;
              },
              blockSize: 128 / 32,
            });
            /**
             * A collection of cipher parameters.
             *
             * @property {WordArray} ciphertext The raw ciphertext.
             * @property {WordArray} key The key to this ciphertext.
             * @property {WordArray} iv The IV used in the ciphering operation.
             * @property {WordArray} salt The salt used with a key derivation function.
             * @property {Cipher} algorithm The cipher algorithm.
             * @property {Mode} mode The block mode used in the ciphering operation.
             * @property {Padding} padding The padding scheme used in the ciphering operation.
             * @property {number} blockSize The block size of the cipher.
             * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
             */ var CipherParams = (C_lib.CipherParams = Base.extend({
              /**
               * Initializes a newly created cipher params object.
               *
               * @param {Object} cipherParams An object with any of the possible cipher parameters.
               *
               * @example
               *
               *     var cipherParams = CryptoJS.lib.CipherParams.create({
               *         ciphertext: ciphertextWordArray,
               *         key: keyWordArray,
               *         iv: ivWordArray,
               *         salt: saltWordArray,
               *         algorithm: CryptoJS.algo.AES,
               *         mode: CryptoJS.mode.CBC,
               *         padding: CryptoJS.pad.PKCS7,
               *         blockSize: 4,
               *         formatter: CryptoJS.format.OpenSSL
               *     });
               */ init: function init(cipherParams) {
                this.mixIn(cipherParams);
              },
              /**
               * Converts this cipher params object to a string.
               *
               * @param {Format} formatter (Optional) The formatting strategy to use.
               *
               * @return {string} The stringified cipher params.
               *
               * @throws Error If neither the formatter nor the default formatter is set.
               *
               * @example
               *
               *     var string = cipherParams + '';
               *     var string = cipherParams.toString();
               *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
               */ toString: function toString(formatter) {
                return (formatter || this.formatter).stringify(this);
              },
            }));
            /**
             * Format namespace.
             */ var C_format = (C.format = {});
            /**
             * OpenSSL formatting strategy.
             */ var OpenSSLFormatter = (C_format.OpenSSL = {
              /**
               * Converts a cipher params object to an OpenSSL-compatible string.
               *
               * @param {CipherParams} cipherParams The cipher params object.
               *
               * @return {string} The OpenSSL-compatible string.
               *
               * @static
               *
               * @example
               *
               *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
               */ stringify: function stringify(cipherParams) {
                var wordArray;
                // Shortcuts
                var ciphertext = cipherParams.ciphertext;
                var salt = cipherParams.salt;
                // Format
                if (salt) {
                  wordArray = WordArray.create([0x53616c74, 0x65645f5f])
                    .concat(salt)
                    .concat(ciphertext);
                } else {
                  wordArray = ciphertext;
                }
                return wordArray.toString(Base64);
              },
              /**
               * Converts an OpenSSL-compatible string to a cipher params object.
               *
               * @param {string} openSSLStr The OpenSSL-compatible string.
               *
               * @return {CipherParams} The cipher params object.
               *
               * @static
               *
               * @example
               *
               *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
               */ parse: function parse(openSSLStr) {
                var salt;
                // Parse base64
                var ciphertext = Base64.parse(openSSLStr);
                // Shortcut
                var ciphertextWords = ciphertext.words;
                // Test for salt
                if (
                  ciphertextWords[0] == 0x53616c74 &&
                  ciphertextWords[1] == 0x65645f5f
                ) {
                  // Extract salt
                  salt = WordArray.create(ciphertextWords.slice(2, 4));
                  // Remove salt from ciphertext
                  ciphertextWords.splice(0, 4);
                  ciphertext.sigBytes -= 16;
                }
                return CipherParams.create({
                  ciphertext: ciphertext,
                  salt: salt,
                });
              },
            });
            /**
             * A cipher wrapper that returns ciphertext as a serializable cipher params object.
             */ var SerializableCipher = (C_lib.SerializableCipher =
              Base.extend({
                /**
                 * Configuration options.
                 *
                 * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
                 */ cfg: Base.extend({
                  format: OpenSSLFormatter,
                }),
                /**
                 * Encrypts a message.
                 *
                 * @param {Cipher} cipher The cipher algorithm to use.
                 * @param {WordArray|string} message The message to encrypt.
                 * @param {WordArray} key The key.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {CipherParams} A cipher params object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 */ encrypt: function encrypt(cipher, message, key, cfg) {
                  // Apply config defaults
                  cfg = this.cfg.extend(cfg);
                  // Encrypt
                  var encryptor = cipher.createEncryptor(key, cfg);
                  var ciphertext = encryptor.finalize(message);
                  // Shortcut
                  var cipherCfg = encryptor.cfg;
                  // Create and return serializable cipher params
                  return CipherParams.create({
                    ciphertext: ciphertext,
                    key: key,
                    iv: cipherCfg.iv,
                    algorithm: cipher,
                    mode: cipherCfg.mode,
                    padding: cipherCfg.padding,
                    blockSize: cipher.blockSize,
                    formatter: cfg.format,
                  });
                },
                /**
                 * Decrypts serialized ciphertext.
                 *
                 * @param {Cipher} cipher The cipher algorithm to use.
                 * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
                 * @param {WordArray} key The key.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {WordArray} The plaintext.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 */ decrypt: function decrypt(cipher, ciphertext, key, cfg) {
                  // Apply config defaults
                  cfg = this.cfg.extend(cfg);
                  // Convert string to CipherParams
                  ciphertext = this._parse(ciphertext, cfg.format);
                  // Decrypt
                  var plaintext = cipher
                    .createDecryptor(key, cfg)
                    .finalize(ciphertext.ciphertext);
                  return plaintext;
                },
                /**
                 * Converts serialized ciphertext to CipherParams,
                 * else assumed CipherParams already and returns ciphertext unchanged.
                 *
                 * @param {CipherParams|string} ciphertext The ciphertext.
                 * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
                 *
                 * @return {CipherParams} The unserialized ciphertext.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
                 */ _parse: function _parse(ciphertext, format) {
                  if (typeof ciphertext == "string") {
                    return format.parse(ciphertext, this);
                  } else {
                    return ciphertext;
                  }
                },
              }));
            /**
             * Key derivation function namespace.
             */ var C_kdf = (C.kdf = {});
            /**
             * OpenSSL key derivation function.
             */ var OpenSSLKdf = (C_kdf.OpenSSL = {
              /**
               * Derives a key and IV from a password.
               *
               * @param {string} password The password to derive from.
               * @param {number} keySize The size in words of the key to generate.
               * @param {number} ivSize The size in words of the IV to generate.
               * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
               *
               * @return {CipherParams} A cipher params object with the key, IV, and salt.
               *
               * @static
               *
               * @example
               *
               *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
               *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
               */ execute: function execute(password, keySize, ivSize, salt) {
                // Generate random salt
                if (!salt) {
                  salt = WordArray.random(64 / 8);
                }
                // Derive key and IV
                var key = EvpKDF.create({
                  keySize: keySize + ivSize,
                }).compute(password, salt);
                // Separate key and IV
                var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
                key.sigBytes = keySize * 4;
                // Return params
                return CipherParams.create({
                  key: key,
                  iv: iv,
                  salt: salt,
                });
              },
            });
            /**
             * A serializable cipher wrapper that derives the key from a password,
             * and returns ciphertext as a serializable cipher params object.
             */ var PasswordBasedCipher = (C_lib.PasswordBasedCipher =
              SerializableCipher.extend({
                /**
                 * Configuration options.
                 *
                 * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
                 */ cfg: SerializableCipher.cfg.extend({
                  kdf: OpenSSLKdf,
                }),
                /**
                 * Encrypts a message using a password.
                 *
                 * @param {Cipher} cipher The cipher algorithm to use.
                 * @param {WordArray|string} message The message to encrypt.
                 * @param {string} password The password.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {CipherParams} A cipher params object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
                 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
                 */ encrypt: function encrypt(cipher, message, password, cfg) {
                  // Apply config defaults
                  cfg = this.cfg.extend(cfg);
                  // Derive key and other params
                  var derivedParams = cfg.kdf.execute(
                    password,
                    cipher.keySize,
                    cipher.ivSize
                  );
                  // Add IV to config
                  cfg.iv = derivedParams.iv;
                  // Encrypt
                  var ciphertext = SerializableCipher.encrypt.call(
                    this,
                    cipher,
                    message,
                    derivedParams.key,
                    cfg
                  );
                  // Mix in derived params
                  ciphertext.mixIn(derivedParams);
                  return ciphertext;
                },
                /**
                 * Decrypts serialized ciphertext using a password.
                 *
                 * @param {Cipher} cipher The cipher algorithm to use.
                 * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
                 * @param {string} password The password.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {WordArray} The plaintext.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
                 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
                 */ decrypt: function decrypt(
                  cipher,
                  ciphertext,
                  password,
                  cfg
                ) {
                  // Apply config defaults
                  cfg = this.cfg.extend(cfg);
                  // Convert string to CipherParams
                  ciphertext = this._parse(ciphertext, cfg.format);
                  // Derive key and other params
                  var derivedParams = cfg.kdf.execute(
                    password,
                    cipher.keySize,
                    cipher.ivSize,
                    ciphertext.salt
                  );
                  // Add IV to config
                  cfg.iv = derivedParams.iv;
                  // Decrypt
                  var plaintext = SerializableCipher.decrypt.call(
                    this,
                    cipher,
                    ciphertext,
                    derivedParams.key,
                    cfg
                  );
                  return plaintext;
                },
              }));
          })();
      });
    });

    var modeCfb = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        /**
         * Cipher Feedback block mode.
         */ CryptoJS.mode.CFB = (function () {
          var generateKeystreamAndEncrypt =
            function generateKeystreamAndEncrypt(
              words,
              offset,
              blockSize,
              cipher
            ) {
              var keystream;
              // Shortcut
              var iv = this._iv;
              // Generate keystream
              if (iv) {
                keystream = iv.slice(0);
                // Remove IV for subsequent blocks
                this._iv = undefined;
              } else {
                keystream = this._prevBlock;
              }
              cipher.encryptBlock(keystream, 0);
              // Encrypt
              for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= keystream[i];
              }
            };
          var CFB = CryptoJS.lib.BlockCipherMode.extend();
          CFB.Encryptor = CFB.extend({
            processBlock: function processBlock(words, offset) {
              // Shortcuts
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              generateKeystreamAndEncrypt.call(
                this,
                words,
                offset,
                blockSize,
                cipher
              );
              // Remember this block to use with next block
              this._prevBlock = words.slice(offset, offset + blockSize);
            },
          });
          CFB.Decryptor = CFB.extend({
            processBlock: function processBlock(words, offset) {
              // Shortcuts
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              // Remember this block to use with next block
              var thisBlock = words.slice(offset, offset + blockSize);
              generateKeystreamAndEncrypt.call(
                this,
                words,
                offset,
                blockSize,
                cipher
              );
              // This block becomes the previous block
              this._prevBlock = thisBlock;
            },
          });
          return CFB;
        })();
        return CryptoJS.mode.CFB;
      });
    });

    var modeCtr = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        /**
         * Counter block mode.
         */ CryptoJS.mode.CTR = (function () {
          var CTR = CryptoJS.lib.BlockCipherMode.extend();
          var Encryptor = (CTR.Encryptor = CTR.extend({
            processBlock: function processBlock(words, offset) {
              // Shortcuts
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var iv = this._iv;
              var counter = this._counter;
              // Generate keystream
              if (iv) {
                counter = this._counter = iv.slice(0);
                // Remove IV for subsequent blocks
                this._iv = undefined;
              }
              var keystream = counter.slice(0);
              cipher.encryptBlock(keystream, 0);
              // Increment counter
              counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0;
              // Encrypt
              for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= keystream[i];
              }
            },
          }));
          CTR.Decryptor = Encryptor;
          return CTR;
        })();
        return CryptoJS.mode.CTR;
      });
    });

    var modeCtrGladman = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        /** @preserve
         * Counter block mode compatible with  Dr Brian Gladman fileenc.c
         * derived from CryptoJS.mode.CTR
         * Jan Hruby jhruby.web@gmail.com
         */ CryptoJS.mode.CTRGladman = (function () {
          var incWord = function incWord(word) {
            if (((word >> 24) & 0xff) === 0xff) {
              var b1 = (word >> 16) & 0xff;
              var b2 = (word >> 8) & 0xff;
              var b3 = word & 0xff;
              if (b1 === 0xff) {
                b1 = 0;
                if (b2 === 0xff) {
                  b2 = 0;
                  if (b3 === 0xff) {
                    b3 = 0;
                  } else {
                    ++b3;
                  }
                } else {
                  ++b2;
                }
              } else {
                ++b1;
              }
              word = 0;
              word += b1 << 16;
              word += b2 << 8;
              word += b3;
            } else {
              word += 0x01 << 24;
            }
            return word;
          };
          var incCounter = function incCounter(counter) {
            if ((counter[0] = incWord(counter[0])) === 0) {
              // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
              counter[1] = incWord(counter[1]);
            }
            return counter;
          };
          var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
          var Encryptor = (CTRGladman.Encryptor = CTRGladman.extend({
            processBlock: function processBlock(words, offset) {
              // Shortcuts
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var iv = this._iv;
              var counter = this._counter;
              // Generate keystream
              if (iv) {
                counter = this._counter = iv.slice(0);
                // Remove IV for subsequent blocks
                this._iv = undefined;
              }
              incCounter(counter);
              var keystream = counter.slice(0);
              cipher.encryptBlock(keystream, 0);
              // Encrypt
              for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= keystream[i];
              }
            },
          }));
          CTRGladman.Decryptor = Encryptor;
          return CTRGladman;
        })();
        return CryptoJS.mode.CTRGladman;
      });
    });

    var modeOfb = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        /**
         * Output Feedback block mode.
         */ CryptoJS.mode.OFB = (function () {
          var OFB = CryptoJS.lib.BlockCipherMode.extend();
          var Encryptor = (OFB.Encryptor = OFB.extend({
            processBlock: function processBlock(words, offset) {
              // Shortcuts
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var iv = this._iv;
              var keystream = this._keystream;
              // Generate keystream
              if (iv) {
                keystream = this._keystream = iv.slice(0);
                // Remove IV for subsequent blocks
                this._iv = undefined;
              }
              cipher.encryptBlock(keystream, 0);
              // Encrypt
              for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= keystream[i];
              }
            },
          }));
          OFB.Decryptor = Encryptor;
          return OFB;
        })();
        return CryptoJS.mode.OFB;
      });
    });

    var modeEcb = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        /**
         * Electronic Codebook block mode.
         */ CryptoJS.mode.ECB = (function () {
          var ECB = CryptoJS.lib.BlockCipherMode.extend();
          ECB.Encryptor = ECB.extend({
            processBlock: function processBlock(words, offset) {
              this._cipher.encryptBlock(words, offset);
            },
          });
          ECB.Decryptor = ECB.extend({
            processBlock: function processBlock(words, offset) {
              this._cipher.decryptBlock(words, offset);
            },
          });
          return ECB;
        })();
        return CryptoJS.mode.ECB;
      });
    });

    var padAnsix923 = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        /**
         * ANSI X.923 padding strategy.
         */ CryptoJS.pad.AnsiX923 = {
          pad: function pad(data, blockSize) {
            // Shortcuts
            var dataSigBytes = data.sigBytes;
            var blockSizeBytes = blockSize * 4;
            // Count padding bytes
            var nPaddingBytes =
              blockSizeBytes - (dataSigBytes % blockSizeBytes);
            // Compute last byte position
            var lastBytePos = dataSigBytes + nPaddingBytes - 1;
            // Pad
            data.clamp();
            data.words[lastBytePos >>> 2] |=
              nPaddingBytes << (24 - (lastBytePos % 4) * 8);
            data.sigBytes += nPaddingBytes;
          },
          unpad: function unpad(data) {
            // Get number of padding bytes from last byte
            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
            // Remove padding
            data.sigBytes -= nPaddingBytes;
          },
        };
        return CryptoJS.pad.Ansix923;
      });
    });

    var padIso10126 = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        /**
         * ISO 10126 padding strategy.
         */ CryptoJS.pad.Iso10126 = {
          pad: function pad(data, blockSize) {
            // Shortcut
            var blockSizeBytes = blockSize * 4;
            // Count padding bytes
            var nPaddingBytes =
              blockSizeBytes - (data.sigBytes % blockSizeBytes);
            // Pad
            data
              .concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1))
              .concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
          },
          unpad: function unpad(data) {
            // Get number of padding bytes from last byte
            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
            // Remove padding
            data.sigBytes -= nPaddingBytes;
          },
        };
        return CryptoJS.pad.Iso10126;
      });
    });

    var padIso97971 = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        /**
         * ISO/IEC 9797-1 Padding Method 2.
         */ CryptoJS.pad.Iso97971 = {
          pad: function pad(data, blockSize) {
            // Add 0x80 byte
            data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));
            // Zero pad the rest
            CryptoJS.pad.ZeroPadding.pad(data, blockSize);
          },
          unpad: function unpad(data) {
            // Remove zero padding
            CryptoJS.pad.ZeroPadding.unpad(data);
            // Remove one more byte -- the 0x80 byte
            data.sigBytes--;
          },
        };
        return CryptoJS.pad.Iso97971;
      });
    });

    var padZeropadding = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        /**
         * Zero padding strategy.
         */ CryptoJS.pad.ZeroPadding = {
          pad: function pad(data, blockSize) {
            // Shortcut
            var blockSizeBytes = blockSize * 4;
            // Pad
            data.clamp();
            data.sigBytes +=
              blockSizeBytes -
              (data.sigBytes % blockSizeBytes || blockSizeBytes);
          },
          unpad: function unpad(data) {
            // Shortcut
            var dataWords = data.words;
            // Unpad
            var i = data.sigBytes - 1;
            for (var i = data.sigBytes - 1; i >= 0; i--) {
              if ((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff) {
                data.sigBytes = i + 1;
                break;
              }
            }
          },
        };
        return CryptoJS.pad.ZeroPadding;
      });
    });

    var padNopadding = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        /**
         * A noop padding strategy.
         */ CryptoJS.pad.NoPadding = {
          pad: function pad() {},
          unpad: function unpad() {},
        };
        return CryptoJS.pad.NoPadding;
      });
    });

    var formatHex = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function (undefined1) {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var CipherParams = C_lib.CipherParams;
          var C_enc = C.enc;
          var Hex = C_enc.Hex;
          var C_format = C.format;
          C_format.Hex = {
            /**
             * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
             *
             * @param {CipherParams} cipherParams The cipher params object.
             *
             * @return {string} The hexadecimally encoded string.
             *
             * @static
             *
             * @example
             *
             *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
             */ stringify: function stringify(cipherParams) {
              return cipherParams.ciphertext.toString(Hex);
            },
            /**
             * Converts a hexadecimally encoded ciphertext string to a cipher params object.
             *
             * @param {string} input The hexadecimally encoded string.
             *
             * @return {CipherParams} The cipher params object.
             *
             * @static
             *
             * @example
             *
             *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
             */ parse: function parse(input) {
              var ciphertext = Hex.parse(input);
              return CipherParams.create({
                ciphertext: ciphertext,
              });
            },
          };
        })();
        return CryptoJS.format.Hex;
      });
    });

    var aes = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, encBase64, md5, evpkdf, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var BlockCipher = C_lib.BlockCipher;
          var C_algo = C.algo;
          // Lookup tables
          var SBOX = [];
          var INV_SBOX = [];
          var SUB_MIX_0 = [];
          var SUB_MIX_1 = [];
          var SUB_MIX_2 = [];
          var SUB_MIX_3 = [];
          var INV_SUB_MIX_0 = [];
          var INV_SUB_MIX_1 = [];
          var INV_SUB_MIX_2 = [];
          var INV_SUB_MIX_3 = [];
          // Compute lookup tables
          (function () {
            // Compute double table
            var d = [];
            for (var i = 0; i < 256; i++) {
              if (i < 128) {
                d[i] = i << 1;
              } else {
                d[i] = (i << 1) ^ 0x11b;
              }
            }
            // Walk GF(2^8)
            var x = 0;
            var xi = 0;
            for (var i = 0; i < 256; i++) {
              // Compute sbox
              var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
              sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
              SBOX[x] = sx;
              INV_SBOX[sx] = x;
              // Compute multiplication
              var x2 = d[x];
              var x4 = d[x2];
              var x8 = d[x4];
              // Compute sub bytes, mix columns tables
              var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
              SUB_MIX_0[x] = (t << 24) | (t >>> 8);
              SUB_MIX_1[x] = (t << 16) | (t >>> 16);
              SUB_MIX_2[x] = (t << 8) | (t >>> 24);
              SUB_MIX_3[x] = t;
              // Compute inv sub bytes, inv mix columns tables
              var t =
                (x8 * 0x1010101) ^
                (x4 * 0x10001) ^
                (x2 * 0x101) ^
                (x * 0x1010100);
              INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
              INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
              INV_SUB_MIX_2[sx] = (t << 8) | (t >>> 24);
              INV_SUB_MIX_3[sx] = t;
              // Compute next counter
              if (!x) {
                x = xi = 1;
              } else {
                x = x2 ^ d[d[d[x8 ^ x2]]];
                xi ^= d[d[xi]];
              }
            }
          })();
          // Precomputed Rcon lookup
          var RCON = [
            0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36,
          ];
          /**
           * AES block cipher algorithm.
           */ var AES = (C_algo.AES = BlockCipher.extend({
            _doReset: function _doReset() {
              var t;
              // Skip reset of nRounds has been set before and key did not change
              if (this._nRounds && this._keyPriorReset === this._key) {
                return;
              }
              // Shortcuts
              var key = (this._keyPriorReset = this._key);
              var keyWords = key.words;
              var keySize = key.sigBytes / 4;
              // Compute number of rounds
              var nRounds = (this._nRounds = keySize + 6);
              // Compute number of key schedule rows
              var ksRows = (nRounds + 1) * 4;
              // Compute key schedule
              var keySchedule = (this._keySchedule = []);
              for (var ksRow = 0; ksRow < ksRows; ksRow++) {
                if (ksRow < keySize) {
                  keySchedule[ksRow] = keyWords[ksRow];
                } else {
                  t = keySchedule[ksRow - 1];
                  if (!(ksRow % keySize)) {
                    // Rot word
                    t = (t << 8) | (t >>> 24);
                    // Sub word
                    t =
                      (SBOX[t >>> 24] << 24) |
                      (SBOX[(t >>> 16) & 0xff] << 16) |
                      (SBOX[(t >>> 8) & 0xff] << 8) |
                      SBOX[t & 0xff];
                    // Mix Rcon
                    t ^= RCON[(ksRow / keySize) | 0] << 24;
                  } else if (keySize > 6 && ksRow % keySize == 4) {
                    // Sub word
                    t =
                      (SBOX[t >>> 24] << 24) |
                      (SBOX[(t >>> 16) & 0xff] << 16) |
                      (SBOX[(t >>> 8) & 0xff] << 8) |
                      SBOX[t & 0xff];
                  }
                  keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
                }
              }
              // Compute inv key schedule
              var invKeySchedule = (this._invKeySchedule = []);
              for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
                var ksRow = ksRows - invKsRow;
                if (invKsRow % 4) {
                  var t = keySchedule[ksRow];
                } else {
                  var t = keySchedule[ksRow - 4];
                }
                if (invKsRow < 4 || ksRow <= 4) {
                  invKeySchedule[invKsRow] = t;
                } else {
                  invKeySchedule[invKsRow] =
                    INV_SUB_MIX_0[SBOX[t >>> 24]] ^
                    INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
                    INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^
                    INV_SUB_MIX_3[SBOX[t & 0xff]];
                }
              }
            },
            encryptBlock: function encryptBlock(M, offset) {
              this._doCryptBlock(
                M,
                offset,
                this._keySchedule,
                SUB_MIX_0,
                SUB_MIX_1,
                SUB_MIX_2,
                SUB_MIX_3,
                SBOX
              );
            },
            decryptBlock: function decryptBlock(M, offset) {
              // Swap 2nd and 4th rows
              var t = M[offset + 1];
              M[offset + 1] = M[offset + 3];
              M[offset + 3] = t;
              this._doCryptBlock(
                M,
                offset,
                this._invKeySchedule,
                INV_SUB_MIX_0,
                INV_SUB_MIX_1,
                INV_SUB_MIX_2,
                INV_SUB_MIX_3,
                INV_SBOX
              );
              // Inv swap 2nd and 4th rows
              var t = M[offset + 1];
              M[offset + 1] = M[offset + 3];
              M[offset + 3] = t;
            },
            _doCryptBlock: function _doCryptBlock(
              M,
              offset,
              keySchedule,
              SUB_MIX_0,
              SUB_MIX_1,
              SUB_MIX_2,
              SUB_MIX_3,
              SBOX
            ) {
              // Shortcut
              var nRounds = this._nRounds;
              // Get input, add round key
              var s0 = M[offset] ^ keySchedule[0];
              var s1 = M[offset + 1] ^ keySchedule[1];
              var s2 = M[offset + 2] ^ keySchedule[2];
              var s3 = M[offset + 3] ^ keySchedule[3];
              // Key schedule row counter
              var ksRow = 4;
              // Rounds
              for (var round = 1; round < nRounds; round++) {
                // Shift rows, sub bytes, mix columns, add round key
                var t0 =
                  SUB_MIX_0[s0 >>> 24] ^
                  SUB_MIX_1[(s1 >>> 16) & 0xff] ^
                  SUB_MIX_2[(s2 >>> 8) & 0xff] ^
                  SUB_MIX_3[s3 & 0xff] ^
                  keySchedule[ksRow++];
                var t1 =
                  SUB_MIX_0[s1 >>> 24] ^
                  SUB_MIX_1[(s2 >>> 16) & 0xff] ^
                  SUB_MIX_2[(s3 >>> 8) & 0xff] ^
                  SUB_MIX_3[s0 & 0xff] ^
                  keySchedule[ksRow++];
                var t2 =
                  SUB_MIX_0[s2 >>> 24] ^
                  SUB_MIX_1[(s3 >>> 16) & 0xff] ^
                  SUB_MIX_2[(s0 >>> 8) & 0xff] ^
                  SUB_MIX_3[s1 & 0xff] ^
                  keySchedule[ksRow++];
                var t3 =
                  SUB_MIX_0[s3 >>> 24] ^
                  SUB_MIX_1[(s0 >>> 16) & 0xff] ^
                  SUB_MIX_2[(s1 >>> 8) & 0xff] ^
                  SUB_MIX_3[s2 & 0xff] ^
                  keySchedule[ksRow++];
                // Update state
                s0 = t0;
                s1 = t1;
                s2 = t2;
                s3 = t3;
              }
              // Shift rows, sub bytes, add round key
              var t0 =
                ((SBOX[s0 >>> 24] << 24) |
                  (SBOX[(s1 >>> 16) & 0xff] << 16) |
                  (SBOX[(s2 >>> 8) & 0xff] << 8) |
                  SBOX[s3 & 0xff]) ^
                keySchedule[ksRow++];
              var t1 =
                ((SBOX[s1 >>> 24] << 24) |
                  (SBOX[(s2 >>> 16) & 0xff] << 16) |
                  (SBOX[(s3 >>> 8) & 0xff] << 8) |
                  SBOX[s0 & 0xff]) ^
                keySchedule[ksRow++];
              var t2 =
                ((SBOX[s2 >>> 24] << 24) |
                  (SBOX[(s3 >>> 16) & 0xff] << 16) |
                  (SBOX[(s0 >>> 8) & 0xff] << 8) |
                  SBOX[s1 & 0xff]) ^
                keySchedule[ksRow++];
              var t3 =
                ((SBOX[s3 >>> 24] << 24) |
                  (SBOX[(s0 >>> 16) & 0xff] << 16) |
                  (SBOX[(s1 >>> 8) & 0xff] << 8) |
                  SBOX[s2 & 0xff]) ^
                keySchedule[ksRow++];
              // Set output
              M[offset] = t0;
              M[offset + 1] = t1;
              M[offset + 2] = t2;
              M[offset + 3] = t3;
            },
            keySize: 256 / 32,
          }));
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
           */ C.AES = BlockCipher._createHelper(AES);
        })();
        return CryptoJS.AES;
      });
    });

    var tripledes = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, encBase64, md5, evpkdf, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          var exchangeLR = // Swap bits across the left and right words
            function exchangeLR(offset, mask) {
              var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
              this._rBlock ^= t;
              this._lBlock ^= t << offset;
            };
          var exchangeRL = function exchangeRL(offset, mask) {
            var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
            this._lBlock ^= t;
            this._rBlock ^= t << offset;
          };
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var BlockCipher = C_lib.BlockCipher;
          var C_algo = C.algo;
          // Permuted Choice 1 constants
          var PC1 = [
            57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51,
            43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15,
            7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28,
            20, 12, 4,
          ];
          // Permuted Choice 2 constants
          var PC2 = [
            14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8,
            16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33,
            48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
          ];
          // Cumulative bit shift constants
          var BIT_SHIFTS = [
            1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28,
          ];
          // SBOXes and round permutation constants
          var SBOX_P = [
            {
              0x0: 0x808200,
              0x10000000: 0x8000,
              0x20000000: 0x808002,
              0x30000000: 0x2,
              0x40000000: 0x200,
              0x50000000: 0x808202,
              0x60000000: 0x800202,
              0x70000000: 0x800000,
              0x80000000: 0x202,
              0x90000000: 0x800200,
              0xa0000000: 0x8200,
              0xb0000000: 0x808000,
              0xc0000000: 0x8002,
              0xd0000000: 0x800002,
              0xe0000000: 0x0,
              0xf0000000: 0x8202,
              0x8000000: 0x0,
              0x18000000: 0x808202,
              0x28000000: 0x8202,
              0x38000000: 0x8000,
              0x48000000: 0x808200,
              0x58000000: 0x200,
              0x68000000: 0x808002,
              0x78000000: 0x2,
              0x88000000: 0x800200,
              0x98000000: 0x8200,
              0xa8000000: 0x808000,
              0xb8000000: 0x800202,
              0xc8000000: 0x800002,
              0xd8000000: 0x8002,
              0xe8000000: 0x202,
              0xf8000000: 0x800000,
              0x1: 0x8000,
              0x10000001: 0x2,
              0x20000001: 0x808200,
              0x30000001: 0x800000,
              0x40000001: 0x808002,
              0x50000001: 0x8200,
              0x60000001: 0x200,
              0x70000001: 0x800202,
              0x80000001: 0x808202,
              0x90000001: 0x808000,
              0xa0000001: 0x800002,
              0xb0000001: 0x8202,
              0xc0000001: 0x202,
              0xd0000001: 0x800200,
              0xe0000001: 0x8002,
              0xf0000001: 0x0,
              0x8000001: 0x808202,
              0x18000001: 0x808000,
              0x28000001: 0x800000,
              0x38000001: 0x200,
              0x48000001: 0x8000,
              0x58000001: 0x800002,
              0x68000001: 0x2,
              0x78000001: 0x8202,
              0x88000001: 0x8002,
              0x98000001: 0x800202,
              0xa8000001: 0x202,
              0xb8000001: 0x808200,
              0xc8000001: 0x800200,
              0xd8000001: 0x0,
              0xe8000001: 0x8200,
              0xf8000001: 0x808002,
            },
            {
              0x0: 0x40084010,
              0x1000000: 0x4000,
              0x2000000: 0x80000,
              0x3000000: 0x40080010,
              0x4000000: 0x40000010,
              0x5000000: 0x40084000,
              0x6000000: 0x40004000,
              0x7000000: 0x10,
              0x8000000: 0x84000,
              0x9000000: 0x40004010,
              0xa000000: 0x40000000,
              0xb000000: 0x84010,
              0xc000000: 0x80010,
              0xd000000: 0x0,
              0xe000000: 0x4010,
              0xf000000: 0x40080000,
              0x800000: 0x40004000,
              0x1800000: 0x84010,
              0x2800000: 0x10,
              0x3800000: 0x40004010,
              0x4800000: 0x40084010,
              0x5800000: 0x40000000,
              0x6800000: 0x80000,
              0x7800000: 0x40080010,
              0x8800000: 0x80010,
              0x9800000: 0x0,
              0xa800000: 0x4000,
              0xb800000: 0x40080000,
              0xc800000: 0x40000010,
              0xd800000: 0x84000,
              0xe800000: 0x40084000,
              0xf800000: 0x4010,
              0x10000000: 0x0,
              0x11000000: 0x40080010,
              0x12000000: 0x40004010,
              0x13000000: 0x40084000,
              0x14000000: 0x40080000,
              0x15000000: 0x10,
              0x16000000: 0x84010,
              0x17000000: 0x4000,
              0x18000000: 0x4010,
              0x19000000: 0x80000,
              0x1a000000: 0x80010,
              0x1b000000: 0x40000010,
              0x1c000000: 0x84000,
              0x1d000000: 0x40004000,
              0x1e000000: 0x40000000,
              0x1f000000: 0x40084010,
              0x10800000: 0x84010,
              0x11800000: 0x80000,
              0x12800000: 0x40080000,
              0x13800000: 0x4000,
              0x14800000: 0x40004000,
              0x15800000: 0x40084010,
              0x16800000: 0x10,
              0x17800000: 0x40000000,
              0x18800000: 0x40084000,
              0x19800000: 0x40000010,
              0x1a800000: 0x40004010,
              0x1b800000: 0x80010,
              0x1c800000: 0x0,
              0x1d800000: 0x4010,
              0x1e800000: 0x40080010,
              0x1f800000: 0x84000,
            },
            {
              0x0: 0x104,
              0x100000: 0x0,
              0x200000: 0x4000100,
              0x300000: 0x10104,
              0x400000: 0x10004,
              0x500000: 0x4000004,
              0x600000: 0x4010104,
              0x700000: 0x4010000,
              0x800000: 0x4000000,
              0x900000: 0x4010100,
              0xa00000: 0x10100,
              0xb00000: 0x4010004,
              0xc00000: 0x4000104,
              0xd00000: 0x10000,
              0xe00000: 0x4,
              0xf00000: 0x100,
              0x80000: 0x4010100,
              0x180000: 0x4010004,
              0x280000: 0x0,
              0x380000: 0x4000100,
              0x480000: 0x4000004,
              0x580000: 0x10000,
              0x680000: 0x10004,
              0x780000: 0x104,
              0x880000: 0x4,
              0x980000: 0x100,
              0xa80000: 0x4010000,
              0xb80000: 0x10104,
              0xc80000: 0x10100,
              0xd80000: 0x4000104,
              0xe80000: 0x4010104,
              0xf80000: 0x4000000,
              0x1000000: 0x4010100,
              0x1100000: 0x10004,
              0x1200000: 0x10000,
              0x1300000: 0x4000100,
              0x1400000: 0x100,
              0x1500000: 0x4010104,
              0x1600000: 0x4000004,
              0x1700000: 0x0,
              0x1800000: 0x4000104,
              0x1900000: 0x4000000,
              0x1a00000: 0x4,
              0x1b00000: 0x10100,
              0x1c00000: 0x4010000,
              0x1d00000: 0x104,
              0x1e00000: 0x10104,
              0x1f00000: 0x4010004,
              0x1080000: 0x4000000,
              0x1180000: 0x104,
              0x1280000: 0x4010100,
              0x1380000: 0x0,
              0x1480000: 0x10004,
              0x1580000: 0x4000100,
              0x1680000: 0x100,
              0x1780000: 0x4010004,
              0x1880000: 0x10000,
              0x1980000: 0x4010104,
              0x1a80000: 0x10104,
              0x1b80000: 0x4000004,
              0x1c80000: 0x4000104,
              0x1d80000: 0x4010000,
              0x1e80000: 0x4,
              0x1f80000: 0x10100,
            },
            {
              0x0: 0x80401000,
              0x10000: 0x80001040,
              0x20000: 0x401040,
              0x30000: 0x80400000,
              0x40000: 0x0,
              0x50000: 0x401000,
              0x60000: 0x80000040,
              0x70000: 0x400040,
              0x80000: 0x80000000,
              0x90000: 0x400000,
              0xa0000: 0x40,
              0xb0000: 0x80001000,
              0xc0000: 0x80400040,
              0xd0000: 0x1040,
              0xe0000: 0x1000,
              0xf0000: 0x80401040,
              0x8000: 0x80001040,
              0x18000: 0x40,
              0x28000: 0x80400040,
              0x38000: 0x80001000,
              0x48000: 0x401000,
              0x58000: 0x80401040,
              0x68000: 0x0,
              0x78000: 0x80400000,
              0x88000: 0x1000,
              0x98000: 0x80401000,
              0xa8000: 0x400000,
              0xb8000: 0x1040,
              0xc8000: 0x80000000,
              0xd8000: 0x400040,
              0xe8000: 0x401040,
              0xf8000: 0x80000040,
              0x100000: 0x400040,
              0x110000: 0x401000,
              0x120000: 0x80000040,
              0x130000: 0x0,
              0x140000: 0x1040,
              0x150000: 0x80400040,
              0x160000: 0x80401000,
              0x170000: 0x80001040,
              0x180000: 0x80401040,
              0x190000: 0x80000000,
              0x1a0000: 0x80400000,
              0x1b0000: 0x401040,
              0x1c0000: 0x80001000,
              0x1d0000: 0x400000,
              0x1e0000: 0x40,
              0x1f0000: 0x1000,
              0x108000: 0x80400000,
              0x118000: 0x80401040,
              0x128000: 0x0,
              0x138000: 0x401000,
              0x148000: 0x400040,
              0x158000: 0x80000000,
              0x168000: 0x80001040,
              0x178000: 0x40,
              0x188000: 0x80000040,
              0x198000: 0x1000,
              0x1a8000: 0x80001000,
              0x1b8000: 0x80400040,
              0x1c8000: 0x1040,
              0x1d8000: 0x80401000,
              0x1e8000: 0x400000,
              0x1f8000: 0x401040,
            },
            {
              0x0: 0x80,
              0x1000: 0x1040000,
              0x2000: 0x40000,
              0x3000: 0x20000000,
              0x4000: 0x20040080,
              0x5000: 0x1000080,
              0x6000: 0x21000080,
              0x7000: 0x40080,
              0x8000: 0x1000000,
              0x9000: 0x20040000,
              0xa000: 0x20000080,
              0xb000: 0x21040080,
              0xc000: 0x21040000,
              0xd000: 0x0,
              0xe000: 0x1040080,
              0xf000: 0x21000000,
              0x800: 0x1040080,
              0x1800: 0x21000080,
              0x2800: 0x80,
              0x3800: 0x1040000,
              0x4800: 0x40000,
              0x5800: 0x20040080,
              0x6800: 0x21040000,
              0x7800: 0x20000000,
              0x8800: 0x20040000,
              0x9800: 0x0,
              0xa800: 0x21040080,
              0xb800: 0x1000080,
              0xc800: 0x20000080,
              0xd800: 0x21000000,
              0xe800: 0x1000000,
              0xf800: 0x40080,
              0x10000: 0x40000,
              0x11000: 0x80,
              0x12000: 0x20000000,
              0x13000: 0x21000080,
              0x14000: 0x1000080,
              0x15000: 0x21040000,
              0x16000: 0x20040080,
              0x17000: 0x1000000,
              0x18000: 0x21040080,
              0x19000: 0x21000000,
              0x1a000: 0x1040000,
              0x1b000: 0x20040000,
              0x1c000: 0x40080,
              0x1d000: 0x20000080,
              0x1e000: 0x0,
              0x1f000: 0x1040080,
              0x10800: 0x21000080,
              0x11800: 0x1000000,
              0x12800: 0x1040000,
              0x13800: 0x20040080,
              0x14800: 0x20000000,
              0x15800: 0x1040080,
              0x16800: 0x80,
              0x17800: 0x21040000,
              0x18800: 0x40080,
              0x19800: 0x21040080,
              0x1a800: 0x0,
              0x1b800: 0x21000000,
              0x1c800: 0x1000080,
              0x1d800: 0x40000,
              0x1e800: 0x20040000,
              0x1f800: 0x20000080,
            },
            {
              0x0: 0x10000008,
              0x100: 0x2000,
              0x200: 0x10200000,
              0x300: 0x10202008,
              0x400: 0x10002000,
              0x500: 0x200000,
              0x600: 0x200008,
              0x700: 0x10000000,
              0x800: 0x0,
              0x900: 0x10002008,
              0xa00: 0x202000,
              0xb00: 0x8,
              0xc00: 0x10200008,
              0xd00: 0x202008,
              0xe00: 0x2008,
              0xf00: 0x10202000,
              0x80: 0x10200000,
              0x180: 0x10202008,
              0x280: 0x8,
              0x380: 0x200000,
              0x480: 0x202008,
              0x580: 0x10000008,
              0x680: 0x10002000,
              0x780: 0x2008,
              0x880: 0x200008,
              0x980: 0x2000,
              0xa80: 0x10002008,
              0xb80: 0x10200008,
              0xc80: 0x0,
              0xd80: 0x10202000,
              0xe80: 0x202000,
              0xf80: 0x10000000,
              0x1000: 0x10002000,
              0x1100: 0x10200008,
              0x1200: 0x10202008,
              0x1300: 0x2008,
              0x1400: 0x200000,
              0x1500: 0x10000000,
              0x1600: 0x10000008,
              0x1700: 0x202000,
              0x1800: 0x202008,
              0x1900: 0x0,
              0x1a00: 0x8,
              0x1b00: 0x10200000,
              0x1c00: 0x2000,
              0x1d00: 0x10002008,
              0x1e00: 0x10202000,
              0x1f00: 0x200008,
              0x1080: 0x8,
              0x1180: 0x202000,
              0x1280: 0x200000,
              0x1380: 0x10000008,
              0x1480: 0x10002000,
              0x1580: 0x2008,
              0x1680: 0x10202008,
              0x1780: 0x10200000,
              0x1880: 0x10202000,
              0x1980: 0x10200008,
              0x1a80: 0x2000,
              0x1b80: 0x202008,
              0x1c80: 0x200008,
              0x1d80: 0x0,
              0x1e80: 0x10000000,
              0x1f80: 0x10002008,
            },
            {
              0x0: 0x100000,
              0x10: 0x2000401,
              0x20: 0x400,
              0x30: 0x100401,
              0x40: 0x2100401,
              0x50: 0x0,
              0x60: 0x1,
              0x70: 0x2100001,
              0x80: 0x2000400,
              0x90: 0x100001,
              0xa0: 0x2000001,
              0xb0: 0x2100400,
              0xc0: 0x2100000,
              0xd0: 0x401,
              0xe0: 0x100400,
              0xf0: 0x2000000,
              0x8: 0x2100001,
              0x18: 0x0,
              0x28: 0x2000401,
              0x38: 0x2100400,
              0x48: 0x100000,
              0x58: 0x2000001,
              0x68: 0x2000000,
              0x78: 0x401,
              0x88: 0x100401,
              0x98: 0x2000400,
              0xa8: 0x2100000,
              0xb8: 0x100001,
              0xc8: 0x400,
              0xd8: 0x2100401,
              0xe8: 0x1,
              0xf8: 0x100400,
              0x100: 0x2000000,
              0x110: 0x100000,
              0x120: 0x2000401,
              0x130: 0x2100001,
              0x140: 0x100001,
              0x150: 0x2000400,
              0x160: 0x2100400,
              0x170: 0x100401,
              0x180: 0x401,
              0x190: 0x2100401,
              0x1a0: 0x100400,
              0x1b0: 0x1,
              0x1c0: 0x0,
              0x1d0: 0x2100000,
              0x1e0: 0x2000001,
              0x1f0: 0x400,
              0x108: 0x100400,
              0x118: 0x2000401,
              0x128: 0x2100001,
              0x138: 0x1,
              0x148: 0x2000000,
              0x158: 0x100000,
              0x168: 0x401,
              0x178: 0x2100400,
              0x188: 0x2000001,
              0x198: 0x2100000,
              0x1a8: 0x0,
              0x1b8: 0x2100401,
              0x1c8: 0x100401,
              0x1d8: 0x400,
              0x1e8: 0x2000400,
              0x1f8: 0x100001,
            },
            {
              0x0: 0x8000820,
              0x1: 0x20000,
              0x2: 0x8000000,
              0x3: 0x20,
              0x4: 0x20020,
              0x5: 0x8020820,
              0x6: 0x8020800,
              0x7: 0x800,
              0x8: 0x8020000,
              0x9: 0x8000800,
              0xa: 0x20800,
              0xb: 0x8020020,
              0xc: 0x820,
              0xd: 0x0,
              0xe: 0x8000020,
              0xf: 0x20820,
              0x80000000: 0x800,
              0x80000001: 0x8020820,
              0x80000002: 0x8000820,
              0x80000003: 0x8000000,
              0x80000004: 0x8020000,
              0x80000005: 0x20800,
              0x80000006: 0x20820,
              0x80000007: 0x20,
              0x80000008: 0x8000020,
              0x80000009: 0x820,
              0x8000000a: 0x20020,
              0x8000000b: 0x8020800,
              0x8000000c: 0x0,
              0x8000000d: 0x8020020,
              0x8000000e: 0x8000800,
              0x8000000f: 0x20000,
              0x10: 0x20820,
              0x11: 0x8020800,
              0x12: 0x20,
              0x13: 0x800,
              0x14: 0x8000800,
              0x15: 0x8000020,
              0x16: 0x8020020,
              0x17: 0x20000,
              0x18: 0x0,
              0x19: 0x20020,
              0x1a: 0x8020000,
              0x1b: 0x8000820,
              0x1c: 0x8020820,
              0x1d: 0x20800,
              0x1e: 0x820,
              0x1f: 0x8000000,
              0x80000010: 0x20000,
              0x80000011: 0x800,
              0x80000012: 0x8020020,
              0x80000013: 0x20820,
              0x80000014: 0x20,
              0x80000015: 0x8020000,
              0x80000016: 0x8000000,
              0x80000017: 0x8000820,
              0x80000018: 0x8020820,
              0x80000019: 0x8000020,
              0x8000001a: 0x8000800,
              0x8000001b: 0x0,
              0x8000001c: 0x20800,
              0x8000001d: 0x820,
              0x8000001e: 0x20020,
              0x8000001f: 0x8020800,
            },
          ];
          // Masks that select the SBOX input
          var SBOX_MASK = [
            0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000, 0x0001f800,
            0x00001f80, 0x000001f8, 0x8000001f,
          ];
          /**
           * DES block cipher algorithm.
           */ var DES = (C_algo.DES = BlockCipher.extend({
            _doReset: function _doReset() {
              // Shortcuts
              var key = this._key;
              var keyWords = key.words;
              // Select 56 bits according to PC1
              var keyBits = [];
              for (var i = 0; i < 56; i++) {
                var keyBitPos = PC1[i] - 1;
                keyBits[i] =
                  (keyWords[keyBitPos >>> 5] >>> (31 - (keyBitPos % 32))) & 1;
              }
              // Assemble 16 subkeys
              var subKeys = (this._subKeys = []);
              for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
                // Create subkey
                var subKey = (subKeys[nSubKey] = []);
                // Shortcut
                var bitShift = BIT_SHIFTS[nSubKey];
                // Select 48 bits according to PC2
                for (var i = 0; i < 24; i++) {
                  // Select from the left 28 key bits
                  subKey[(i / 6) | 0] |=
                    keyBits[(PC2[i] - 1 + bitShift) % 28] << (31 - (i % 6));
                  // Select from the right 28 key bits
                  subKey[4 + ((i / 6) | 0)] |=
                    keyBits[28 + ((PC2[i + 24] - 1 + bitShift) % 28)] <<
                    (31 - (i % 6));
                }
                // Since each subkey is applied to an expanded 32-bit input,
                // the subkey can be broken into 8 values scaled to 32-bits,
                // which allows the key to be used without expansion
                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
                for (var i = 1; i < 7; i++) {
                  subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
                }
                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
              }
              // Compute inverse subkeys
              var invSubKeys = (this._invSubKeys = []);
              for (var i = 0; i < 16; i++) {
                invSubKeys[i] = subKeys[15 - i];
              }
            },
            encryptBlock: function encryptBlock(M, offset) {
              this._doCryptBlock(M, offset, this._subKeys);
            },
            decryptBlock: function decryptBlock(M, offset) {
              this._doCryptBlock(M, offset, this._invSubKeys);
            },
            _doCryptBlock: function _doCryptBlock(M, offset, subKeys) {
              // Get input
              this._lBlock = M[offset];
              this._rBlock = M[offset + 1];
              // Initial permutation
              exchangeLR.call(this, 4, 0x0f0f0f0f);
              exchangeLR.call(this, 16, 0x0000ffff);
              exchangeRL.call(this, 2, 0x33333333);
              exchangeRL.call(this, 8, 0x00ff00ff);
              exchangeLR.call(this, 1, 0x55555555);
              // Rounds
              for (var round = 0; round < 16; round++) {
                // Shortcuts
                var subKey = subKeys[round];
                var lBlock = this._lBlock;
                var rBlock = this._rBlock;
                // Feistel function
                var f = 0;
                for (var i = 0; i < 8; i++) {
                  f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
                }
                this._lBlock = rBlock;
                this._rBlock = lBlock ^ f;
              }
              // Undo swap from last round
              var t = this._lBlock;
              this._lBlock = this._rBlock;
              this._rBlock = t;
              // Final permutation
              exchangeLR.call(this, 1, 0x55555555);
              exchangeRL.call(this, 8, 0x00ff00ff);
              exchangeRL.call(this, 2, 0x33333333);
              exchangeLR.call(this, 16, 0x0000ffff);
              exchangeLR.call(this, 4, 0x0f0f0f0f);
              // Set output
              M[offset] = this._lBlock;
              M[offset + 1] = this._rBlock;
            },
            keySize: 64 / 32,
            ivSize: 64 / 32,
            blockSize: 64 / 32,
          }));
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
           */ C.DES = BlockCipher._createHelper(DES);
          /**
           * Triple-DES block cipher algorithm.
           */ var TripleDES = (C_algo.TripleDES = BlockCipher.extend({
            _doReset: function _doReset() {
              // Shortcuts
              var key = this._key;
              var keyWords = key.words;
              // Make sure the key length is valid (64, 128 or >= 192 bit)
              if (
                keyWords.length !== 2 &&
                keyWords.length !== 4 &&
                keyWords.length < 6
              ) {
                throw new Error(
                  "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192."
                );
              }
              // Extend the key according to the keying options defined in 3DES standard
              var key1 = keyWords.slice(0, 2);
              var key2 =
                keyWords.length < 4
                  ? keyWords.slice(0, 2)
                  : keyWords.slice(2, 4);
              var key3 =
                keyWords.length < 6
                  ? keyWords.slice(0, 2)
                  : keyWords.slice(4, 6);
              // Create DES instances
              this._des1 = DES.createEncryptor(WordArray.create(key1));
              this._des2 = DES.createEncryptor(WordArray.create(key2));
              this._des3 = DES.createEncryptor(WordArray.create(key3));
            },
            encryptBlock: function encryptBlock(M, offset) {
              this._des1.encryptBlock(M, offset);
              this._des2.decryptBlock(M, offset);
              this._des3.encryptBlock(M, offset);
            },
            decryptBlock: function decryptBlock(M, offset) {
              this._des3.decryptBlock(M, offset);
              this._des2.encryptBlock(M, offset);
              this._des1.decryptBlock(M, offset);
            },
            keySize: 192 / 32,
            ivSize: 64 / 32,
            blockSize: 64 / 32,
          }));
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
           */ C.TripleDES = BlockCipher._createHelper(TripleDES);
        })();
        return CryptoJS.TripleDES;
      });
    });

    var rc4 = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, encBase64, md5, evpkdf, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          var generateKeystreamWord = function generateKeystreamWord() {
            // Shortcuts
            var S = this._S;
            var i = this._i;
            var j = this._j;
            // Generate keystream word
            var keystreamWord = 0;
            for (var n = 0; n < 4; n++) {
              i = (i + 1) % 256;
              j = (j + S[i]) % 256;
              // Swap
              var t = S[i];
              S[i] = S[j];
              S[j] = t;
              keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
            }
            // Update counters
            this._i = i;
            this._j = j;
            return keystreamWord;
          };
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var StreamCipher = C_lib.StreamCipher;
          var C_algo = C.algo;
          /**
           * RC4 stream cipher algorithm.
           */ var RC4 = (C_algo.RC4 = StreamCipher.extend({
            _doReset: function _doReset() {
              // Shortcuts
              var key = this._key;
              var keyWords = key.words;
              var keySigBytes = key.sigBytes;
              // Init sbox
              var S = (this._S = []);
              for (var i = 0; i < 256; i++) {
                S[i] = i;
              }
              // Key setup
              for (var i = 0, j = 0; i < 256; i++) {
                var keyByteIndex = i % keySigBytes;
                var keyByte =
                  (keyWords[keyByteIndex >>> 2] >>>
                    (24 - (keyByteIndex % 4) * 8)) &
                  0xff;
                j = (j + S[i] + keyByte) % 256;
                // Swap
                var t = S[i];
                S[i] = S[j];
                S[j] = t;
              }
              // Counters
              this._i = this._j = 0;
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              M[offset] ^= generateKeystreamWord.call(this);
            },
            keySize: 256 / 32,
            ivSize: 0,
          }));
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
           */ C.RC4 = StreamCipher._createHelper(RC4);
          /**
           * Modified RC4 stream cipher algorithm.
           */ var RC4Drop = (C_algo.RC4Drop = RC4.extend({
            /**
             * Configuration options.
             *
             * @property {number} drop The number of keystream words to drop. Default 192
             */ cfg: RC4.cfg.extend({
              drop: 192,
            }),
            _doReset: function _doReset() {
              RC4._doReset.call(this);
              // Drop
              for (var i = this.cfg.drop; i > 0; i--) {
                generateKeystreamWord.call(this);
              }
            },
          }));
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
           */ C.RC4Drop = StreamCipher._createHelper(RC4Drop);
        })();
        return CryptoJS.RC4;
      });
    });

    var rabbit = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, encBase64, md5, evpkdf, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          var nextState = function nextState() {
            // Shortcuts
            var X = this._X;
            var C = this._C;
            // Save old counter values
            for (var i = 0; i < 8; i++) {
              C_[i] = C[i];
            }
            // Calculate new counter values
            C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
            C[1] = (C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0)) | 0;
            C[2] = (C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0)) | 0;
            C[3] = (C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0)) | 0;
            C[4] = (C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0)) | 0;
            C[5] = (C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0)) | 0;
            C[6] = (C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0)) | 0;
            C[7] = (C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0)) | 0;
            this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
            // Calculate the g-values
            for (var i = 0; i < 8; i++) {
              var gx = X[i] + C[i];
              // Construct high and low argument for squaring
              var ga = gx & 0xffff;
              var gb = gx >>> 16;
              // Calculate high and low result of squaring
              var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
              var gl =
                (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);
              // High XOR low
              G[i] = gh ^ gl;
            }
            // Calculate new state values
            X[0] =
              (G[0] +
                ((G[7] << 16) | (G[7] >>> 16)) +
                ((G[6] << 16) | (G[6] >>> 16))) |
              0;
            X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
            X[2] =
              (G[2] +
                ((G[1] << 16) | (G[1] >>> 16)) +
                ((G[0] << 16) | (G[0] >>> 16))) |
              0;
            X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
            X[4] =
              (G[4] +
                ((G[3] << 16) | (G[3] >>> 16)) +
                ((G[2] << 16) | (G[2] >>> 16))) |
              0;
            X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
            X[6] =
              (G[6] +
                ((G[5] << 16) | (G[5] >>> 16)) +
                ((G[4] << 16) | (G[4] >>> 16))) |
              0;
            X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
          };
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var StreamCipher = C_lib.StreamCipher;
          var C_algo = C.algo;
          // Reusable objects
          var S = [];
          var C_ = [];
          var G = [];
          /**
           * Rabbit stream cipher algorithm
           */ var Rabbit = (C_algo.Rabbit = StreamCipher.extend({
            _doReset: function _doReset() {
              // Shortcuts
              var K = this._key.words;
              var iv = this.cfg.iv;
              // Swap endian
              for (var i = 0; i < 4; i++) {
                K[i] =
                  (((K[i] << 8) | (K[i] >>> 24)) & 0x00ff00ff) |
                  (((K[i] << 24) | (K[i] >>> 8)) & 0xff00ff00);
              }
              // Generate initial state values
              var X = (this._X = [
                K[0],
                (K[3] << 16) | (K[2] >>> 16),
                K[1],
                (K[0] << 16) | (K[3] >>> 16),
                K[2],
                (K[1] << 16) | (K[0] >>> 16),
                K[3],
                (K[2] << 16) | (K[1] >>> 16),
              ]);
              // Generate initial counter values
              var C = (this._C = [
                (K[2] << 16) | (K[2] >>> 16),
                (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
                (K[3] << 16) | (K[3] >>> 16),
                (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
                (K[0] << 16) | (K[0] >>> 16),
                (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
                (K[1] << 16) | (K[1] >>> 16),
                (K[3] & 0xffff0000) | (K[0] & 0x0000ffff),
              ]);
              // Carry bit
              this._b = 0;
              // Iterate the system four times
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
              // Modify the counters
              for (var i = 0; i < 8; i++) {
                C[i] ^= X[(i + 4) & 7];
              }
              // IV setup
              if (iv) {
                // Shortcuts
                var IV = iv.words;
                var IV_0 = IV[0];
                var IV_1 = IV[1];
                // Generate four subvectors
                var i0 =
                  (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) |
                  (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
                var i2 =
                  (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) |
                  (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
                var i3 = (i2 << 16) | (i0 & 0x0000ffff);
                // Modify counter values
                C[0] ^= i0;
                C[1] ^= i1;
                C[2] ^= i2;
                C[3] ^= i3;
                C[4] ^= i0;
                C[5] ^= i1;
                C[6] ^= i2;
                C[7] ^= i3;
                // Iterate the system four times
                for (var i = 0; i < 4; i++) {
                  nextState.call(this);
                }
              }
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Shortcut
              var X = this._X;
              // Iterate the system
              nextState.call(this);
              // Generate four keystream words
              S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
              S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
              S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
              S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);
              for (var i = 0; i < 4; i++) {
                // Swap endian
                S[i] =
                  (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff) |
                  (((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);
                // Encrypt
                M[offset + i] ^= S[i];
              }
            },
            blockSize: 128 / 32,
            ivSize: 64 / 32,
          }));
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
           */ C.Rabbit = StreamCipher._createHelper(Rabbit);
        })();
        return CryptoJS.Rabbit;
      });
    });

    var rabbitLegacy = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(core, encBase64, md5, evpkdf, cipherCore);
        }
      })(commonjsGlobal, function (CryptoJS) {
        (function () {
          var nextState = function nextState() {
            // Shortcuts
            var X = this._X;
            var C = this._C;
            // Save old counter values
            for (var i = 0; i < 8; i++) {
              C_[i] = C[i];
            }
            // Calculate new counter values
            C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
            C[1] = (C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0)) | 0;
            C[2] = (C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0)) | 0;
            C[3] = (C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0)) | 0;
            C[4] = (C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0)) | 0;
            C[5] = (C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0)) | 0;
            C[6] = (C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0)) | 0;
            C[7] = (C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0)) | 0;
            this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
            // Calculate the g-values
            for (var i = 0; i < 8; i++) {
              var gx = X[i] + C[i];
              // Construct high and low argument for squaring
              var ga = gx & 0xffff;
              var gb = gx >>> 16;
              // Calculate high and low result of squaring
              var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
              var gl =
                (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);
              // High XOR low
              G[i] = gh ^ gl;
            }
            // Calculate new state values
            X[0] =
              (G[0] +
                ((G[7] << 16) | (G[7] >>> 16)) +
                ((G[6] << 16) | (G[6] >>> 16))) |
              0;
            X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
            X[2] =
              (G[2] +
                ((G[1] << 16) | (G[1] >>> 16)) +
                ((G[0] << 16) | (G[0] >>> 16))) |
              0;
            X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
            X[4] =
              (G[4] +
                ((G[3] << 16) | (G[3] >>> 16)) +
                ((G[2] << 16) | (G[2] >>> 16))) |
              0;
            X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
            X[6] =
              (G[6] +
                ((G[5] << 16) | (G[5] >>> 16)) +
                ((G[4] << 16) | (G[4] >>> 16))) |
              0;
            X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
          };
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var StreamCipher = C_lib.StreamCipher;
          var C_algo = C.algo;
          // Reusable objects
          var S = [];
          var C_ = [];
          var G = [];
          /**
           * Rabbit stream cipher algorithm.
           *
           * This is a legacy version that neglected to convert the key to little-endian.
           * This error doesn't affect the cipher's security,
           * but it does affect its compatibility with other implementations.
           */ var RabbitLegacy = (C_algo.RabbitLegacy = StreamCipher.extend({
            _doReset: function _doReset() {
              // Shortcuts
              var K = this._key.words;
              var iv = this.cfg.iv;
              // Generate initial state values
              var X = (this._X = [
                K[0],
                (K[3] << 16) | (K[2] >>> 16),
                K[1],
                (K[0] << 16) | (K[3] >>> 16),
                K[2],
                (K[1] << 16) | (K[0] >>> 16),
                K[3],
                (K[2] << 16) | (K[1] >>> 16),
              ]);
              // Generate initial counter values
              var C = (this._C = [
                (K[2] << 16) | (K[2] >>> 16),
                (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
                (K[3] << 16) | (K[3] >>> 16),
                (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
                (K[0] << 16) | (K[0] >>> 16),
                (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
                (K[1] << 16) | (K[1] >>> 16),
                (K[3] & 0xffff0000) | (K[0] & 0x0000ffff),
              ]);
              // Carry bit
              this._b = 0;
              // Iterate the system four times
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
              // Modify the counters
              for (var i = 0; i < 8; i++) {
                C[i] ^= X[(i + 4) & 7];
              }
              // IV setup
              if (iv) {
                // Shortcuts
                var IV = iv.words;
                var IV_0 = IV[0];
                var IV_1 = IV[1];
                // Generate four subvectors
                var i0 =
                  (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) |
                  (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
                var i2 =
                  (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) |
                  (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
                var i3 = (i2 << 16) | (i0 & 0x0000ffff);
                // Modify counter values
                C[0] ^= i0;
                C[1] ^= i1;
                C[2] ^= i2;
                C[3] ^= i3;
                C[4] ^= i0;
                C[5] ^= i1;
                C[6] ^= i2;
                C[7] ^= i3;
                // Iterate the system four times
                for (var i = 0; i < 4; i++) {
                  nextState.call(this);
                }
              }
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Shortcut
              var X = this._X;
              // Iterate the system
              nextState.call(this);
              // Generate four keystream words
              S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
              S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
              S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
              S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);
              for (var i = 0; i < 4; i++) {
                // Swap endian
                S[i] =
                  (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff) |
                  (((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);
                // Encrypt
                M[offset + i] ^= S[i];
              }
            },
            blockSize: 128 / 32,
            ivSize: 64 / 32,
          }));
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
           */ C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
        })();
        return CryptoJS.RabbitLegacy;
      });
    });

    var cryptoJs = createCommonjsModule(function (module, exports) {
      (function (root, factory, undef) {
        {
          // CommonJS
          module.exports = factory(
            core,
            x64Core,
            libTypedarrays,
            encUtf16,
            encBase64,
            encBase64url,
            md5,
            sha1,
            sha256,
            sha224,
            sha512,
            sha384,
            sha3,
            ripemd160,
            hmac,
            pbkdf2,
            evpkdf,
            cipherCore,
            modeCfb,
            modeCtr,
            modeCtrGladman,
            modeOfb,
            modeEcb,
            padAnsix923,
            padIso10126,
            padIso97971,
            padZeropadding,
            padNopadding,
            formatHex,
            aes,
            tripledes,
            rc4,
            rabbit,
            rabbitLegacy
          );
        }
      })(commonjsGlobal, function (CryptoJS) {
        return CryptoJS;
      });
    });

    return cryptoJs;
  });
};

const recorderManager = () => {
  !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).RecorderManager = t());
  })(this, function () {
    "use strict";
    function e(e, t, r, o) {
      return new (r || (r = Promise))(function (n, a) {
        function i(e) {
          try {
            u(o.next(e));
          } catch (e) {
            a(e);
          }
        }
        function s(e) {
          try {
            u(o.throw(e));
          } catch (e) {
            a(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(i, s);
        }
        u((o = o.apply(e, t || [])).next());
      });
    }
    function t(e, t) {
      var r,
        o,
        n,
        a,
        i = {
          label: 0,
          sent: function () {
            if (1 & n[0]) throw n[1];
            return n[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (a = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function s(s) {
        return function (u) {
          return (function (s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; a && ((a = 0), s[0] && (i = 0)), i; )
              try {
                if (
                  ((r = 1),
                  o &&
                    (n =
                      2 & s[0]
                        ? o.return
                        : s[0]
                        ? o.throw || ((n = o.return) && n.call(o), 0)
                        : o.next) &&
                    !(n = n.call(o, s[1])).done)
                )
                  return n;
                switch (((o = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                  case 0:
                  case 1:
                    n = s;
                    break;
                  case 4:
                    return i.label++, { value: s[1], done: !1 };
                  case 5:
                    i.label++, (o = s[1]), (s = [0]);
                    continue;
                  case 7:
                    (s = i.ops.pop()), i.trys.pop();
                    continue;
                  default:
                    if (
                      !((n = i.trys),
                      (n = n.length > 0 && n[n.length - 1]) ||
                        (6 !== s[0] && 2 !== s[0]))
                    ) {
                      i = 0;
                      continue;
                    }
                    if (3 === s[0] && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                      i.label = s[1];
                      break;
                    }
                    if (6 === s[0] && i.label < n[1]) {
                      (i.label = n[1]), (n = s);
                      break;
                    }
                    if (n && i.label < n[2]) {
                      (i.label = n[2]), i.ops.push(s);
                      break;
                    }
                    n[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }
                s = t.call(e, i);
              } catch (e) {
                (s = [6, e]), (o = 0);
              } finally {
                r = n = 0;
              }
            if (5 & s[0]) throw s[1];
            return { value: s[0] ? s[1] : void 0, done: !0 };
          })([s, u]);
        };
      }
    }
    function r() {
      var e,
        t = navigator,
        r = t.getUserMedia || t.webkitGetUserMedia || t.mozGetUserMedia;
      return (
        null === (e = t.mediaDevices) || void 0 === e ? void 0 : e.getUserMedia
      )
        ? t.mediaDevices.getUserMedia({ audio: !0, video: !1 })
        : r
        ? new Promise(function (e, t) {
            r.call(
              navigator,
              { audio: !0, video: !1 },
              function (t) {
                e(t);
              },
              function (e) {
                t(e);
              }
            );
          })
        : Promise.reject(new Error("不支持录音"));
    }
    var o;
    function n(r, n) {
      return e(this, void 0, void 0, function () {
        var e;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return [3, 2];
            case 1:
              return (
                t.sent(), [2, new AudioWorkletNode(r, "processor-worklet")]
              );
            case 2:
              return (e = o)
                ? [3, 4]
                : [4, new Worker("".concat(n, "/processor.worker.js"))];
            case 3:
              (e = t.sent()), (t.label = 4);
            case 4:
              return [2, { port: (o = e) }];
          }
        });
      });
    }
    return (function () {
      function o(e) {
        (this.processorPath = e), (this.audioBuffers = []);
      }
      return (
        (o.prototype.start = function (o) {
          var a,
            i = o.sampleRate,
            s = o.frameSize,
            u = o.arrayBufferType;
          return e(this, void 0, void 0, function () {
            var e, o, c, l, f, d, p;
            return t(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    t.trys.push([0, 3, , 4]),
                    ((e = this).audioBuffers = []),
                    [4, r()]
                  );
                case 1:
                  return (
                    (o = t.sent()),
                    (this.audioTracks = o.getAudioTracks()),
                    (c = (function (e, t) {
                      var r;
                      try {
                        (r = new (window.AudioContext ||
                          window.webkitAudioContext)({
                          sampleRate: t,
                        })).createMediaStreamSource(e);
                      } catch (t) {
                        null == r || r.close(),
                          (r = new (window.AudioContext ||
                            window.webkitAudioContext)()).createMediaStreamSource(
                            e
                          );
                      }
                      return r;
                    })(o, i)),
                    (this.audioContext = c),
                    (l = c.createMediaStreamSource(o)),
                    [4, n(c, this.processorPath)]
                  );
                case 2:
                  return (
                    (f = t.sent()),
                    (this.audioWorklet = f),
                    f.port.postMessage({
                      type: "init",
                      data: {
                        frameSize: s,
                        toSampleRate: i || c.sampleRate,
                        fromSampleRate: c.sampleRate,
                        arrayBufferType: u || "short16",
                      },
                    }),
                    (f.port.onmessage = function (t) {
                      var r = t.data,
                        o = r.frameBuffer,
                        n = r.isLastFrame;
                      if (s && e.onFrameRecorded)
                        if (null == o ? void 0 : o.byteLength)
                          for (var a = 0; a < o.byteLength; )
                            e.onFrameRecorded({
                              isLastFrame: n && a + s >= o.byteLength,
                              frameBuffer: t.data.frameBuffer.slice(a, a + s),
                            }),
                              (a += s);
                        else e.onFrameRecorded(t.data);
                      e.onStop &&
                        (o && e.audioBuffers.push(o),
                        n && e.onStop(e.audioBuffers));
                    }),
                    ((d = c.createScriptProcessor(0, 1, 1)).onaudioprocess =
                      function (e) {
                        f.port.postMessage({
                          type: "message",
                          data: e.inputBuffer.getChannelData(0),
                        });
                      }),
                    l.connect(d),
                    d.connect(c.destination),
                    c.resume(),
                    null === (a = this.onStart) || void 0 === a || a.call(this),
                    [3, 4]
                  );
                case 3:
                  return (p = t.sent()), console.error(p), [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (o.prototype.stop = function () {
          var e, t, r, o;
          null === (e = this.audioWorklet) ||
            void 0 === e ||
            e.port.postMessage({ type: "stop" }),
            null === (t = this.audioTracks) || void 0 === t || t[0].stop(),
            "running" ===
              (null === (r = this.audioContext) || void 0 === r
                ? void 0
                : r.state) &&
              (null === (o = this.audioContext) || void 0 === o || o.close());
        }),
        o
      );
    })();
  });
};

const base64 = () => {
  (function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined"
      ? (module.exports = factory())
      : typeof define === "function" && define.amd
      ? define(factory)
      : // cf. https://github.com/dankogai/js-base64/issues/119
        (function () {
          // existing version for noConflict()
          var _Base64 = global.Base64;
          var gBase64 = factory();
          gBase64.noConflict = function () {
            global.Base64 = _Base64;
            return gBase64;
          };
          if (global.Meteor) {
            // Meteor.js
            Base64 = gBase64;
          }
          global.Base64 = gBase64;
        })();
  })(
    typeof self !== "undefined"
      ? self
      : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
      ? global
      : this,
    function () {
      "use strict";
      /**
       *  base64.ts
       *
       *  Licensed under the BSD 3-Clause License.
       *    http://opensource.org/licenses/BSD-3-Clause
       *
       *  References:
       *    http://en.wikipedia.org/wiki/Base64
       *
       * @author Dan Kogai (https://github.com/dankogai)
       */
      var version = "3.7.5";
      /**
       * @deprecated use lowercase `version`.
       */
      var VERSION = version;
      var _hasatob = typeof atob === "function";
      var _hasbtoa = typeof btoa === "function";
      var _hasBuffer = typeof Buffer === "function";
      var _TD =
        typeof TextDecoder === "function" ? new TextDecoder() : undefined;
      var _TE =
        typeof TextEncoder === "function" ? new TextEncoder() : undefined;
      var b64ch =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var b64chs = Array.prototype.slice.call(b64ch);
      var b64tab = (function (a) {
        var tab = {};
        a.forEach(function (c, i) {
          return (tab[c] = i);
        });
        return tab;
      })(b64chs);
      var b64re =
        /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
      var _fromCC = String.fromCharCode.bind(String);
      var _U8Afrom =
        typeof Uint8Array.from === "function"
          ? Uint8Array.from.bind(Uint8Array)
          : function (it) {
              return new Uint8Array(Array.prototype.slice.call(it, 0));
            };
      var _mkUriSafe = function (src) {
        return src.replace(/=/g, "").replace(/[+\/]/g, function (m0) {
          return m0 == "+" ? "-" : "_";
        });
      };
      var _tidyB64 = function (s) {
        return s.replace(/[^A-Za-z0-9\+\/]/g, "");
      };
      /**
       * polyfill version of `btoa`
       */
      var btoaPolyfill = function (bin) {
        // console.log('polyfilled');
        var u32,
          c0,
          c1,
          c2,
          asc = "";
        var pad = bin.length % 3;
        for (var i = 0; i < bin.length; ) {
          if (
            (c0 = bin.charCodeAt(i++)) > 255 ||
            (c1 = bin.charCodeAt(i++)) > 255 ||
            (c2 = bin.charCodeAt(i++)) > 255
          )
            throw new TypeError("invalid character found");
          u32 = (c0 << 16) | (c1 << 8) | c2;
          asc +=
            b64chs[(u32 >> 18) & 63] +
            b64chs[(u32 >> 12) & 63] +
            b64chs[(u32 >> 6) & 63] +
            b64chs[u32 & 63];
        }
        return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
      };
      /**
       * does what `window.btoa` of web browsers do.
       * @param {String} bin binary string
       * @returns {string} Base64-encoded string
       */
      var _btoa = _hasbtoa
        ? function (bin) {
            return btoa(bin);
          }
        : _hasBuffer
        ? function (bin) {
            return Buffer.from(bin, "binary").toString("base64");
          }
        : btoaPolyfill;
      var _fromUint8Array = _hasBuffer
        ? function (u8a) {
            return Buffer.from(u8a).toString("base64");
          }
        : function (u8a) {
            // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
            var maxargs = 0x1000;
            var strs = [];
            for (var i = 0, l = u8a.length; i < l; i += maxargs) {
              strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
            }
            return _btoa(strs.join(""));
          };
      /**
       * converts a Uint8Array to a Base64 string.
       * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
       * @returns {string} Base64 string
       */
      var fromUint8Array = function (u8a, urlsafe) {
        if (urlsafe === void 0) {
          urlsafe = false;
        }
        return urlsafe
          ? _mkUriSafe(_fromUint8Array(u8a))
          : _fromUint8Array(u8a);
      };
      // This trick is found broken https://github.com/dankogai/js-base64/issues/130
      // const utob = (src: string) => unescape(encodeURIComponent(src));
      // reverting good old fationed regexp
      var cb_utob = function (c) {
        if (c.length < 2) {
          var cc = c.charCodeAt(0);
          return cc < 0x80
            ? c
            : cc < 0x800
            ? _fromCC(0xc0 | (cc >>> 6)) + _fromCC(0x80 | (cc & 0x3f))
            : _fromCC(0xe0 | ((cc >>> 12) & 0x0f)) +
              _fromCC(0x80 | ((cc >>> 6) & 0x3f)) +
              _fromCC(0x80 | (cc & 0x3f));
        } else {
          var cc =
            0x10000 +
            (c.charCodeAt(0) - 0xd800) * 0x400 +
            (c.charCodeAt(1) - 0xdc00);
          return (
            _fromCC(0xf0 | ((cc >>> 18) & 0x07)) +
            _fromCC(0x80 | ((cc >>> 12) & 0x3f)) +
            _fromCC(0x80 | ((cc >>> 6) & 0x3f)) +
            _fromCC(0x80 | (cc & 0x3f))
          );
        }
      };
      var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
      /**
       * @deprecated should have been internal use only.
       * @param {string} src UTF-8 string
       * @returns {string} UTF-16 string
       */
      var utob = function (u) {
        return u.replace(re_utob, cb_utob);
      };
      //
      var _encode = _hasBuffer
        ? function (s) {
            return Buffer.from(s, "utf8").toString("base64");
          }
        : _TE
        ? function (s) {
            return _fromUint8Array(_TE.encode(s));
          }
        : function (s) {
            return _btoa(utob(s));
          };
      /**
       * converts a UTF-8-encoded string to a Base64 string.
       * @param {boolean} [urlsafe] if `true` make the result URL-safe
       * @returns {string} Base64 string
       */
      var encode = function (src, urlsafe) {
        if (urlsafe === void 0) {
          urlsafe = false;
        }
        return urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
      };
      /**
       * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
       * @returns {string} Base64 string
       */
      var encodeURI = function (src) {
        return encode(src, true);
      };
      // This trick is found broken https://github.com/dankogai/js-base64/issues/130
      // const btou = (src: string) => decodeURIComponent(escape(src));
      // reverting good old fationed regexp
      var re_btou =
        /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
      var cb_btou = function (cccc) {
        switch (cccc.length) {
          case 4:
            var cp =
                ((0x07 & cccc.charCodeAt(0)) << 18) |
                ((0x3f & cccc.charCodeAt(1)) << 12) |
                ((0x3f & cccc.charCodeAt(2)) << 6) |
                (0x3f & cccc.charCodeAt(3)),
              offset = cp - 0x10000;
            return (
              _fromCC((offset >>> 10) + 0xd800) +
              _fromCC((offset & 0x3ff) + 0xdc00)
            );
          case 3:
            return _fromCC(
              ((0x0f & cccc.charCodeAt(0)) << 12) |
                ((0x3f & cccc.charCodeAt(1)) << 6) |
                (0x3f & cccc.charCodeAt(2))
            );
          default:
            return _fromCC(
              ((0x1f & cccc.charCodeAt(0)) << 6) | (0x3f & cccc.charCodeAt(1))
            );
        }
      };
      /**
       * @deprecated should have been internal use only.
       * @param {string} src UTF-16 string
       * @returns {string} UTF-8 string
       */
      var btou = function (b) {
        return b.replace(re_btou, cb_btou);
      };
      /**
       * polyfill version of `atob`
       */
      var atobPolyfill = function (asc) {
        // console.log('polyfilled');
        asc = asc.replace(/\s+/g, "");
        if (!b64re.test(asc)) throw new TypeError("malformed base64.");
        asc += "==".slice(2 - (asc.length & 3));
        var u24,
          bin = "",
          r1,
          r2;
        for (var i = 0; i < asc.length; ) {
          u24 =
            (b64tab[asc.charAt(i++)] << 18) |
            (b64tab[asc.charAt(i++)] << 12) |
            ((r1 = b64tab[asc.charAt(i++)]) << 6) |
            (r2 = b64tab[asc.charAt(i++)]);
          bin +=
            r1 === 64
              ? _fromCC((u24 >> 16) & 255)
              : r2 === 64
              ? _fromCC((u24 >> 16) & 255, (u24 >> 8) & 255)
              : _fromCC((u24 >> 16) & 255, (u24 >> 8) & 255, u24 & 255);
        }
        return bin;
      };
      /**
       * does what `window.atob` of web browsers do.
       * @param {String} asc Base64-encoded string
       * @returns {string} binary string
       */
      var _atob = _hasatob
        ? function (asc) {
            return atob(_tidyB64(asc));
          }
        : _hasBuffer
        ? function (asc) {
            return Buffer.from(asc, "base64").toString("binary");
          }
        : atobPolyfill;
      //
      var _toUint8Array = _hasBuffer
        ? function (a) {
            return _U8Afrom(Buffer.from(a, "base64"));
          }
        : function (a) {
            return _U8Afrom(
              _atob(a)
                .split("")
                .map(function (c) {
                  return c.charCodeAt(0);
                })
            );
          };
      /**
       * converts a Base64 string to a Uint8Array.
       */
      var toUint8Array = function (a) {
        return _toUint8Array(_unURI(a));
      };
      //
      var _decode = _hasBuffer
        ? function (a) {
            return Buffer.from(a, "base64").toString("utf8");
          }
        : _TD
        ? function (a) {
            return _TD.decode(_toUint8Array(a));
          }
        : function (a) {
            return btou(_atob(a));
          };
      var _unURI = function (a) {
        return _tidyB64(
          a.replace(/[-_]/g, function (m0) {
            return m0 == "-" ? "+" : "/";
          })
        );
      };
      /**
       * converts a Base64 string to a UTF-8 string.
       * @param {String} src Base64 string.  Both normal and URL-safe are supported
       * @returns {string} UTF-8 string
       */
      var decode = function (src) {
        return _decode(_unURI(src));
      };
      /**
       * check if a value is a valid Base64 string
       * @param {String} src a value to check
       */
      var isValid = function (src) {
        if (typeof src !== "string") return false;
        var s = src.replace(/\s+/g, "").replace(/={0,2}$/, "");
        return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
      };
      //
      var _noEnum = function (v) {
        return {
          value: v,
          enumerable: false,
          writable: true,
          configurable: true,
        };
      };
      /**
       * extend String.prototype with relevant methods
       */
      var extendString = function () {
        var _add = function (name, body) {
          return Object.defineProperty(String.prototype, name, _noEnum(body));
        };
        _add("fromBase64", function () {
          return decode(this);
        });
        _add("toBase64", function (urlsafe) {
          return encode(this, urlsafe);
        });
        _add("toBase64URI", function () {
          return encode(this, true);
        });
        _add("toBase64URL", function () {
          return encode(this, true);
        });
        _add("toUint8Array", function () {
          return toUint8Array(this);
        });
      };
      /**
       * extend Uint8Array.prototype with relevant methods
       */
      var extendUint8Array = function () {
        var _add = function (name, body) {
          return Object.defineProperty(
            Uint8Array.prototype,
            name,
            _noEnum(body)
          );
        };
        _add("toBase64", function (urlsafe) {
          return fromUint8Array(this, urlsafe);
        });
        _add("toBase64URI", function () {
          return fromUint8Array(this, true);
        });
        _add("toBase64URL", function () {
          return fromUint8Array(this, true);
        });
      };
      /**
       * extend Builtin prototypes with relevant methods
       */
      var extendBuiltins = function () {
        extendString();
        extendUint8Array();
      };
      var gBase64 = {
        version: version,
        VERSION: VERSION,
        atob: _atob,
        atobPolyfill: atobPolyfill,
        btoa: _btoa,
        btoaPolyfill: btoaPolyfill,
        fromBase64: decode,
        toBase64: encode,
        encode: encode,
        encodeURI: encodeURI,
        encodeURL: encodeURI,
        utob: utob,
        btou: btou,
        decode: decode,
        isValid: isValid,
        fromUint8Array: fromUint8Array,
        toUint8Array: toUint8Array,
        extendString: extendString,
        extendUint8Array: extendUint8Array,
        extendBuiltins: extendBuiltins,
      };
      //
      // export Base64 to the namespace
      //
      // ES5 is yet to have Object.assign() that may make transpilers unhappy.
      // gBase64.Base64 = Object.assign({}, gBase64);
      gBase64.Base64 = {};
      Object.keys(gBase64).forEach(function (k) {
        return (gBase64.Base64[k] = gBase64[k]);
      });
      return gBase64;
    }
  );
};

const audioPlayer = () => {
  !(function (t, i) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = i())
      : "function" == typeof define && define.amd
      ? define(i)
      : ((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).AudioPlayer = i());
  })(this, function () {
    "use strict";
    function t(t, i, a) {
      for (var e = 0; e < a.length; e++) t.setUint8(i + e, a.charCodeAt(e));
    }
    function i(i, a, e) {
      var o = (function (i, a, e, o, s) {
        var n = i.reduce(function (t, i) {
            return t + i.byteLength;
          }, 0),
          u = new ArrayBuffer(44 + n),
          r = new DataView(u),
          d = e,
          h = 0;
        return (
          t(r, h, "RIFF"),
          (h += 4),
          r.setUint32(h, 36 + n, !0),
          t(r, (h += 4), "WAVE"),
          t(r, (h += 4), "fmt "),
          (h += 4),
          r.setUint32(h, 16, !0),
          (h += 4),
          r.setUint16(h, 1, !0),
          (h += 2),
          r.setUint16(h, d, !0),
          (h += 2),
          r.setUint32(h, a, !0),
          (h += 4),
          r.setUint32(h, d * a * (o / 8), !0),
          (h += 4),
          r.setUint16(h, d * (o / 8), !0),
          (h += 2),
          r.setUint16(h, o, !0),
          t(r, (h += 2), "data"),
          (h += 4),
          r.setUint32(h, n, !0),
          (h += 4),
          i.forEach(function (t) {
            for (var i = new DataView(t.buffer), a = 0; a < t.byteLength; )
              r.setUint8(h, i.getUint8(a)), h++, a++;
          }),
          r
        );
      })(i, a || 16e3, 1, e || 16);
      return new Blob([o], { type: "audio/wav" });
    }
    return (function () {
      function t(t) {
        (this.toSampleRate = 22050),
          (this.resumePlayDuration = 1e3),
          (this.fromSampleRate = 16e3),
          (this.isAudioDataEnded = !1),
          (this.status = "uninit"),
          (this.audioDatas = []),
          (this.pcmAudioDatas = []),
          (this.audioDataOffset = 0),
          (this.processor = new Worker("".concat(t, "/processor.worker.js")));
      }
      return (
        (t.prototype.postMessage = function (t) {
          var i = t.type,
            a = t.data,
            e = t.isLastData;
          "uninit" !== this.status &&
            (this.processor.postMessage({ type: i, data: a }),
            (this.isAudioDataEnded = e));
        }),
        (t.prototype.playAudio = function () {
          var t = this;
          if ((clearTimeout(this.playAudioTime), this.audioContext)) {
            for (
              var i = 0, a = this.audioDataOffset;
              a < this.audioDatas.length;
              a++
            )
              i += this.audioDatas[a].length;
            if (!i)
              return void (
                "play" === this.status &&
                (this.isAudioDataEnded || this.resumePlayDuration <= 0
                  ? this.stop()
                  : (this.playAudioTime = setTimeout(function () {
                      t.playAudio();
                    }, this.resumePlayDuration)))
              );
            for (
              var e = this.audioContext.createBuffer(1, i, this.toSampleRate),
                o = e.getChannelData(0),
                s = this.audioDatas[this.audioDataOffset],
                n = 0;
              s;

            ) {
              if (((this.audioDataOffset += 1), e.copyToChannel))
                e.copyToChannel(s, 0, n), (n += s.length);
              else for (a = 0; a < s.length; a++) o[a] = s[a];
              s = this.audioDatas[this.audioDataOffset];
            }
            var u = this.audioContext.createBufferSource();
            (this.bufferSource = u),
              (u.buffer = e),
              u.connect(this.audioContext.destination),
              u.start(),
              (u.onended = function (i) {
                "play" === t.status &&
                  (t.audioDatas.length
                    ? t.playAudio()
                    : t.isAudioDataEnded || t.resumePlayDuration <= 0
                    ? t.stop()
                    : (t.playAudioTime = setTimeout(function () {
                        t.playAudio();
                      }, t.resumePlayDuration)));
              });
          }
        }),
        (t.prototype.reset = function () {
          var t;
          (this.processor.onmessage = null),
            (this.audioDataOffset = 0),
            (this.audioDatas = []),
            (this.pcmAudioDatas = []),
            (this.status = "uninit"),
            (this.isAudioDataEnded = !1),
            clearTimeout(this.playAudioTime);
          try {
            null === (t = this.bufferSource) || void 0 === t || t.stop();
          } catch (t) {
            console.log(t);
          }
        }),
        (t.prototype.start = function (t) {
          var i = this,
            a = void 0 === t ? {} : t,
            e = a.autoPlay,
            o = void 0 === e || e,
            s = a.sampleRate,
            n = void 0 === s ? 16e3 : s,
            u = a.resumePlayDuration,
            r = void 0 === u ? 1e3 : u;
          this.reset(), (this.status = "init"), (this.resumePlayDuration = r);
          var d = n,
            h = Math.max(d, 22050);
          (h = Math.min(h, 96e3)),
            (this.fromSampleRate = d),
            (this.toSampleRate = h),
            this.processor.postMessage({
              type: "init",
              data: { fromSampleRate: d, toSampleRate: h },
            }),
            (this.processor.onmessage = function (t) {
              var a = t.data,
                e = a.audioData,
                s = a.pcmAudioData;
              i.audioDatas.push(e),
                i.pcmAudioDatas.push(s),
                1 === i.audioDatas.length &&
                  o &&
                  "init" === i.status &&
                  i.play();
            });
        }),
        (t.prototype.play = function () {
          var t;
          this.audioContext ||
            ((this.audioContext = new (window.AudioContext ||
              window.webkitAudioContext)()),
            this.audioContext.resume()),
            this.audioContext &&
              ((this.status = "play"),
              null === (t = this.onPlay) || void 0 === t || t.call(this),
              this.playAudio());
        }),
        (t.prototype.stop = function () {
          var t, i;
          (this.audioDataOffset = 0),
            (this.status = "stop"),
            clearTimeout(this.playAudioTime);
          try {
            null === (t = this.bufferSource) || void 0 === t || t.stop(),
              null === (i = this.onStop) ||
                void 0 === i ||
                i.call(this, this.audioDatas);
          } catch (t) {
            console.log(t);
          }
        }),
        (t.prototype.getAudioDataBlob = function (t) {
          var a, e;
          if (
            null === (a = this.pcmAudioDatas) || void 0 === a
              ? void 0
              : a.length
          )
            return "wav" === t
              ? i(this.pcmAudioDatas, this.fromSampleRate, 16)
              : ((e = this.pcmAudioDatas), new Blob(e, { type: "audio/pcm" }));
        }),
        t
      );
    })();
  });
};
const debounce = (fn, wait) => {
  let timer = null;
  return function (...args) {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(args);
      timer = null;
    }, wait);
  };
};
export { parserJS, cryptoJS, recorderManager, base64, audioPlayer,debounce };
