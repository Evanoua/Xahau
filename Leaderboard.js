(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[861], {
    17965: (e, t, a) => {
        "use strict";
        var r = a(16426)
          , n = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
        e.exports = function(e, t) {
            var a, s, i, l, o, c, d, u, h = !1;
            t || (t = {}),
            i = t.debug || !1;
            try {
                if (o = r(),
                c = document.createRange(),
                d = document.getSelection(),
                (u = document.createElement("span")).textContent = e,
                u.ariaHidden = "true",
                u.style.all = "unset",
                u.style.position = "fixed",
                u.style.top = 0,
                u.style.clip = "rect(0, 0, 0, 0)",
                u.style.whiteSpace = "pre",
                u.style.webkitUserSelect = "text",
                u.style.MozUserSelect = "text",
                u.style.msUserSelect = "text",
                u.style.userSelect = "text",
                u.addEventListener("copy", function(a) {
                    if (a.stopPropagation(),
                    t.format) {
                        if (a.preventDefault(),
                        void 0 === a.clipboardData) {
                            i && console.warn("unable to use e.clipboardData"),
                            i && console.warn("trying IE specific stuff"),
                            window.clipboardData.clearData();
                            var r = n[t.format] || n.default;
                            window.clipboardData.setData(r, e)
                        } else
                            a.clipboardData.clearData(),
                            a.clipboardData.setData(t.format, e)
                    }
                    t.onCopy && (a.preventDefault(),
                    t.onCopy(a.clipboardData))
                }),
                document.body.appendChild(u),
                c.selectNodeContents(u),
                d.addRange(c),
                !document.execCommand("copy"))
                    throw Error("copy command was unsuccessful");
                h = !0
            } catch (r) {
                i && console.error("unable to copy using execCommand: ", r),
                i && console.warn("trying IE specific stuff");
                try {
                    window.clipboardData.setData(t.format || "text", e),
                    t.onCopy && t.onCopy(window.clipboardData),
                    h = !0
                } catch (r) {
                    i && console.error("unable to copy using clipboardData: ", r),
                    i && console.error("falling back to prompt"),
                    a = "message"in t ? t.message : "Copy to clipboard: #{key}, Enter",
                    s = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C",
                    l = a.replace(/#{\s*key\s*}/g, s),
                    window.prompt(l, e)
                }
            } finally {
                d && ("function" == typeof d.removeRange ? d.removeRange(c) : d.removeAllRanges()),
                u && document.body.removeChild(u),
                o()
            }
            return h
        }
    }
    ,
    64280: (e, t, a) => {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/leaderboard", function() {
            return a(62322)
        }
        ])
    }
    ,
    38153: (e, t, a) => {
        "use strict";
        a.d(t, {
            $1: () => l,
            Dh: () => c,
            Fx: () => p,
            Jo: () => o,
            KD: () => x,
            Te: () => n,
            VV: () => f,
            Vg: () => u,
            WM: () => h,
            Yq: () => g,
            fF: () => m,
            m4: () => d,
            mW: () => i,
            rs: () => s
        });
        let r = a(5898);
        function n(e) {
            return e.length > 3 ? r.convertHexToString(e).replace(/\x00/g, "") : e
        }
        function s(e) {
            for (; e.length < 40; )
                e += "0";
            return e
        }
        function i(e) {
            let t = e.toString();
            return t.includes(".") && (t = t.replace(/\.?0+$/, "")),
            t
        }
        function l(e) {
            if (!e || null == e)
                return "0";
            if ((e = parseFloat(e)) >= 1e12)
                return (Math.floor(e / 1e12 * 100) / 100).toFixed(2) + "T";
            if (e >= 1e9)
                return (Math.floor(e / 1e9 * 100) / 100).toFixed(2) + "B";
            if (e >= 1e8)
                return Math.floor(e / 1e6).toFixed(0) + "M";
            if (e >= 1e7)
                return (Math.floor(e / 1e6 * 10) / 10).toFixed(1) + "M";
            if (e >= 1e6)
                return (Math.floor(e / 1e6 * 100) / 100).toFixed(2) + "M";
            if (e >= 1e5)
                return Math.floor(e / 1e3).toFixed(0) + "k";
            else if (e >= 1e4)
                return (Math.floor(e / 1e3 * 100) / 100).toFixed(2) + "k";
            else if (e >= 1e3)
                return (Math.floor(e / 1e3 * 100) / 100).toFixed(2) + "k";
            else
                return parseFloat(e).toFixed(0).toString()
        }
        function o(e) {
            if (!e || null == e)
                return "0";
            if (e >= 1e12)
                return (e / 1e12).toFixed(2) + "T";
            if (e >= 1e9)
                return (e / 1e9).toFixed(2) + "B";
            if (e >= 1e8)
                return (e / 1e6).toFixed(0) + "M";
            if (e >= 1e7)
                return (e / 1e6).toFixed(1) + "M";
            if (e >= 1e6)
                return (e / 1e6).toFixed(2) + "M";
            if (e >= 1e5)
                return (e / 1e3).toFixed(0) + "k";
            else if (e >= 1e4)
                return (e / 1e3).toFixed(1) + "k";
            else if (e >= 1e3)
                return (e / 1e3).toFixed(2) + "k";
            else
                return parseFloat(e).toFixed(8).toString()
        }
        function c(e) {
            try {
                let t;
                if (!(t = !function(e) {
                    try {
                        let t = "number" == typeof e ? e.toString() : e;
                        return /[eE][+-]?\d+$/.test(t)
                    } catch (e) {
                        return !1
                    }
                }(e) ? e.toString() : e.toFixed(30).toString()).includes("."))
                    return 0;
                let[,a] = t.split(".")
                  , r = 0;
                for (let e of a)
                    if ("0" === e)
                        r++;
                    else
                        break;
                return r
            } catch (e) {
                return console.log(e),
                2
            }
        }
        function d(e, t) {
            return e && null != e ? e >= 1e12 ? (e / 1e12).toFixed(t) + "T" : e >= 1e9 ? (e / 1e9).toFixed(t) + "B" : e >= 1e6 ? (e / 1e6).toFixed(t) + "M" : e >= 1e3 ? (e / 1e3).toFixed(t) + "k" : parseFloat(e).toFixed(t).toString() : "0"
        }
        function u(e, t) {
            if ("number" != typeof e || "number" != typeof t)
                throw TypeError("Both arguments must be numbers.");
            if (0 === e)
                throw Error("Cannot calculate percentage difference because the original number is zero.");
            return (t - e) / Math.abs(e) * 100
        }
        function h(e) {
            return e && null != e ? parseFloat(e) > 0 ? {
                change: "positive",
                number: parseFloat(e).toFixed(2)
            } : 0 > parseFloat(e) ? {
                change: "negative",
                number: parseFloat(e).toFixed(2)
            } : 0 == parseFloat(e) ? {
                change: "none",
                number: parseFloat(e).toFixed(2)
            } : void 0 : {
                change: "none",
                number: "0"
            }
        }
        function x(e, t) {
            return e && null != e ? parseFloat(e) > 0 ? {
                change: "positive",
                number: d(parseFloat(e), t)
            } : 0 > parseFloat(e) ? {
                change: "negative",
                number: d(parseFloat(e), t)
            } : 0 == parseFloat(e) ? {
                change: "none",
                number: d(parseFloat(e), t)
            } : void 0 : {
                change: "none",
                number: "0"
            }
        }
        function m(e) {
            let t = new Date
              , a = new Date(e)
              , r = Math.floor((t.getTime() - a.getTime()) / 1e3)
              , n = Math.floor(r / 86400)
              , s = Math.floor(r % 86400 / 3600)
              , i = Math.floor(r % 3600 / 60);
            return n > 0 ? "".concat(n, "d ").concat(s, "h") : s > 0 ? "".concat(s, "h ").concat(i, "m") : i > 0 ? "".concat(i, "m") : "".concat(r % 60, "s")
        }
        function f(e) {
            let t = h(e).change;
            return "none" == t ? "change" : "positive" == t ? "change is-up" : "negative" == t ? "change is-down" : "change"
        }
        function p(e) {
            let t = h(e).change;
            return "none" == t ? "" : "positive" == t ? "is-up" : "negative" == t ? "is-down" : ""
        }
        function g(e) {
            let t = new Date(e)
              , a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][t.getUTCMonth()]
              , r = t.getUTCDate()
              , n = t.getUTCHours().toString().padStart(2, "0")
              , s = t.getUTCMinutes().toString().padStart(2, "0")
              , i = t.getUTCSeconds().toString().padStart(2, "0");
            return "".concat(a, " ").concat(r, " ").concat(n, ":").concat(s, ":").concat(i)
        }
        a(61594)
    }
    ,
    62322: (e, t, a) => {
        "use strict";
        a.r(t),
        a.d(t, {
            default: () => u
        });
        var r = a(74848)
          , n = a(96540)
          , s = a(70247)
          , i = a(17965)
          , l = a.n(i)
          , o = a(92169)
          , c = a(38153)
          , d = a(51145);
        let u = () => {
            let e = (0,
            n.useContext)(s.A)
              , [t,i] = (0,
            n.useState)("points")
              , [u,h] = (0,
            n.useState)([])
              , [x,m] = (0,
            n.useState)([])
              , [f,p] = (0,
            n.useState)(null)
              , [g,v] = (0,
            n.useState)(null)
              , [j,b] = (0,
            n.useState)(0)
              , [F,w] = (0,
            n.useState)(0)
              , y = new d.A
              , N = e => {
                l()(e)
            }
            ;
            return (0,
            n.useEffect)( () => {
                (async function() {
                    try {
                        let {getActiveItem: t} = await a.e(490).then(a.bind(a, 97490))
                          , r = await t()
                          , n = await o.Z.getLeaderboard(null != r ? r.xrp_address : "");
                        if (n.success && void 0 != n.data && (h(n.data.leaderboard),
                        m(n.data.referrals),
                        null != n.data.individual_stats && p(n.data.individual_stats),
                        null != n.data.individual_referral_code && v(n.data.individual_referral_code)),
                        void 0 != e.token && null != e.token && "" != e.token)
                            try {
                                let e = y.get("userToken")
                                  , t = await o.Z.getRefAccrual(e);
                                t.success && void 0 != t.data && (w(t.data.snapshot_amount),
                                b(t.data.total_paid))
                            } catch (e) {}
                    } catch (e) {
                        console.log(e)
                    }
                }
                )()
            }
            , []),
            (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)("section", {
                    id: "leaderboard",
                    className: "section",
                    children: (0,
                    r.jsxs)("div", {
                        className: "container",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "columns",
                            children: [(0,
                            r.jsx)("div", {
                                className: "column is-2",
                                children: (0,
                                r.jsx)("img", {
                                    src: "/images/referral-img-01.webp",
                                    width: "160",
                                    alt: ""
                                })
                            }), (0,
                            r.jsxs)("div", {
                                className: "column is-align-content-center",
                                children: [(0,
                                r.jsx)("h1", {
                                    className: "title is-2 is-spaced",
                                    children: "Spread the Meme challenge"
                                }), (0,
                                r.jsx)("p", {
                                    className: "subtitle is-4",
                                    children: "Invite your friends to create their own meme coins and earn rewards! The more you spread, the more you win."
                                })]
                            })]
                        }), null != f ? (0,
                        r.jsx)(r.Fragment, {
                            children: (0,
                            r.jsx)("div", {
                                className: "box is-flat my-stats",
                                children: (0,
                                r.jsxs)("div", {
                                    className: "grid is-col-min-5",
                                    children: [null != f ? (0,
                                    r.jsxs)("div", {
                                        className: "cell is-span-all",
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "truncate",
                                            children: f.xrp_address
                                        }), (0,
                                        r.jsxs)("button", {
                                            className: "button is-small mt mt-3 is-active",
                                            onClick: () => N("https://firstledger.net?ref=" + g),
                                            children: [(0,
                                            r.jsx)("span", {
                                                children: "Copy referral link"
                                            }), (0,
                                            r.jsxs)("svg", {
                                                className: "",
                                                width: "15",
                                                height: "15",
                                                viewBox: "0 0 15 15",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0,
                                                r.jsx)("rect", {
                                                    x: "4",
                                                    y: "4",
                                                    width: "9.33333",
                                                    height: "9.33333",
                                                    rx: "2",
                                                    strokeWidth: "2"
                                                }), (0,
                                                r.jsx)("rect", {
                                                    x: "1",
                                                    y: "1",
                                                    width: "9.33333",
                                                    height: "9.33333",
                                                    rx: "2",
                                                    strokeWidth: "2"
                                                })]
                                            })]
                                        })]
                                    }) : (0,
                                    r.jsx)(r.Fragment, {}), (0,
                                    r.jsxs)("div", {
                                        className: "cell",
                                        children: [(0,
                                        r.jsx)("small", {
                                            children: "Your rank"
                                        }), (0,
                                        r.jsx)("div", {
                                            children: f.ranking
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "cell",
                                        children: [(0,
                                        r.jsx)("small", {
                                            children: "Total points"
                                        }), (0,
                                        r.jsx)("div", {
                                            children: (0,
                                            c.m4)(f.total_points, 2)
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "cell",
                                        children: [(0,
                                        r.jsx)("small", {
                                            children: "Volume"
                                        }), (0,
                                        r.jsxs)("div", {
                                            children: [(0,
                                            c.m4)(f.total_volume, 2), " ", (0,
                                            r.jsx)("small", {
                                                children: "XRP"
                                            })]
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "cell",
                                        children: [(0,
                                        r.jsx)("small", {
                                            children: "Referrals"
                                        }), (0,
                                        r.jsx)("div", {
                                            children: f.referrals
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "cell",
                                        children: [(0,
                                        r.jsx)("small", {
                                            children: "Referral total paid"
                                        }), (0,
                                        r.jsxs)("div", {
                                            children: [j, " XRP"]
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "cell",
                                        children: [(0,
                                        r.jsx)("small", {
                                            children: "Referral pending"
                                        }), (0,
                                        r.jsxs)("div", {
                                            children: [F, " XRP"]
                                        })]
                                    })]
                                })
                            })
                        }) : (0,
                        r.jsx)(r.Fragment, {}), (0,
                        r.jsx)("div", {
                            className: "tab tabs is-toggle",
                            children: (0,
                            r.jsxs)("ul", {
                                children: [(0,
                                r.jsx)("li", {
                                    className: "refferal" == t ? "tablinks is-active" : "tablinks",
                                    children: (0,
                                    r.jsx)("a", {
                                        onClick: () => i("refferal"),
                                        role: "button",
                                        children: "Referral leaderboard"
                                    })
                                }), (0,
                                r.jsx)("li", {
                                    className: "points" == t ? "tablinks is-active" : "tablinks",
                                    children: (0,
                                    r.jsx)("a", {
                                        onClick: () => i("points"),
                                        role: "button",
                                        children: "Points leaderboard"
                                    })
                                })]
                            })
                        }), "refferal" == t ? (0,
                        r.jsx)("div", {
                            id: "referral_leaders",
                            className: "tabcontent",
                            children: (0,
                            r.jsxs)("div", {
                                className: "grid-scroller",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "grid has-text-weight-semibold",
                                    children: [(0,
                                    r.jsx)("div", {
                                        children: "Rank"
                                    }), (0,
                                    r.jsx)("div", {
                                        children: "Referrals"
                                    }), (0,
                                    r.jsx)("div", {
                                        children: "Wallet"
                                    })]
                                }), x.map( (e, t) => (0,
                                r.jsxs)("div", {
                                    className: "grid",
                                    children: [(0,
                                    r.jsx)("div", {
                                        children: e.ranking
                                    }), (0,
                                    r.jsx)("div", {
                                        children: e.referrals
                                    }), (0,
                                    r.jsx)("div", {
                                        children: (0,
                                        r.jsx)("span", {
                                            className: "truncate",
                                            children: e.xrp_address
                                        })
                                    })]
                                }, t))]
                            })
                        }) : (0,
                        r.jsx)(r.Fragment, {}), "points" == t ? (0,
                        r.jsx)("div", {
                            id: "point_leaders",
                            className: "tabcontent",
                            children: (0,
                            r.jsxs)("div", {
                                className: "grid-scroller",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "grid has-text-weight-semibold",
                                    children: [(0,
                                    r.jsx)("div", {
                                        children: "Rank"
                                    }), (0,
                                    r.jsx)("div", {
                                        children: "Points"
                                    }), (0,
                                    r.jsx)("div", {
                                        children: "Wallet"
                                    })]
                                }), u.map( (e, t) => (0,
                                r.jsxs)("div", {
                                    className: "grid",
                                    children: [(0,
                                    r.jsx)("div", {
                                        children: e.ranking
                                    }), (0,
                                    r.jsx)("div", {
                                        children: (0,
                                        c.m4)(e.total_points, 2)
                                    }), (0,
                                    r.jsx)("div", {
                                        children: (0,
                                        r.jsx)("span", {
                                            className: "truncate",
                                            children: e.xrp_address
                                        })
                                    })]
                                }, t))]
                            })
                        }) : (0,
                        r.jsx)(r.Fragment, {})]
                    })
                })
            })
        }
    }
    ,
    16426: e => {
        e.exports = function() {
            var e = document.getSelection();
            if (!e.rangeCount)
                return function() {}
                ;
            for (var t = document.activeElement, a = [], r = 0; r < e.rangeCount; r++)
                a.push(e.getRangeAt(r));
            switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                t.blur();
                break;
            default:
                t = null
            }
            return e.removeAllRanges(),
            function() {
                "Caret" === e.type && e.removeAllRanges(),
                e.rangeCount || a.forEach(function(t) {
                    e.addRange(t)
                }),
                t && t.focus()
            }
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [636, 593, 792], () => t(64280)),
    _N_E = e.O()
}
]);
