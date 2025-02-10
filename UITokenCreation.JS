(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[332], {
    17965: (e, t, s) => {
        "use strict";
        var a = s(16426)
          , i = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
        e.exports = function(e, t) {
            var s, r, n, l, o, c, d, h, u = !1;
            t || (t = {}),
            n = t.debug || !1;
            try {
                if (o = a(),
                c = document.createRange(),
                d = document.getSelection(),
                (h = document.createElement("span")).textContent = e,
                h.ariaHidden = "true",
                h.style.all = "unset",
                h.style.position = "fixed",
                h.style.top = 0,
                h.style.clip = "rect(0, 0, 0, 0)",
                h.style.whiteSpace = "pre",
                h.style.webkitUserSelect = "text",
                h.style.MozUserSelect = "text",
                h.style.msUserSelect = "text",
                h.style.userSelect = "text",
                h.addEventListener("copy", function(s) {
                    if (s.stopPropagation(),
                    t.format) {
                        if (s.preventDefault(),
                        void 0 === s.clipboardData) {
                            n && console.warn("unable to use e.clipboardData"),
                            n && console.warn("trying IE specific stuff"),
                            window.clipboardData.clearData();
                            var a = i[t.format] || i.default;
                            window.clipboardData.setData(a, e)
                        } else
                            s.clipboardData.clearData(),
                            s.clipboardData.setData(t.format, e)
                    }
                    t.onCopy && (s.preventDefault(),
                    t.onCopy(s.clipboardData))
                }),
                document.body.appendChild(h),
                c.selectNodeContents(h),
                d.addRange(c),
                !document.execCommand("copy"))
                    throw Error("copy command was unsuccessful");
                u = !0
            } catch (a) {
                n && console.error("unable to copy using execCommand: ", a),
                n && console.warn("trying IE specific stuff");
                try {
                    window.clipboardData.setData(t.format || "text", e),
                    t.onCopy && t.onCopy(window.clipboardData),
                    u = !0
                } catch (a) {
                    n && console.error("unable to copy using clipboardData: ", a),
                    n && console.error("falling back to prompt"),
                    s = "message"in t ? t.message : "Copy to clipboard: #{key}, Enter",
                    r = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C",
                    l = s.replace(/#{\s*key\s*}/g, r),
                    window.prompt(l, e)
                }
            } finally {
                d && ("function" == typeof d.removeRange ? d.removeRange(c) : d.removeAllRanges()),
                h && document.body.removeChild(h),
                o()
            }
            return u
        }
    }
    ,
    92022: (e, t, s) => {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return s(25250)
        }
        ])
    }
    ,
    25250: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            __N_SSP: () => M,
            default: () => W
        });
        var a = s(74848)
          , i = s(96540)
          , r = s(70247)
          , n = s(38153)
          , l = s(92169)
          , o = s(51145)
          , c = s(45409)
          , d = s(17965)
          , h = s.n(d);
        let u = e => {
            let {text: t} = e
              , [s,r] = (0,
            i.useState)(!1);
            return (0,
            a.jsxs)("div", {
                className: "notification is-primary",
                children: [(0,
                a.jsx)("div", {
                    className: "label",
                    children: "Awaiting funds"
                }), (0,
                a.jsx)("p", {
                    children: "Confirming the transaction in your wallet or sending funds to this address will finalize your token creation!"
                }), (0,
                a.jsxs)("div", {
                    className: "is-flex has-check-icon  mt mt-2 is-active",
                    children: [(0,
                    a.jsx)("div", {
                        className: "tag is-clickable",
                        onClick: () => {
                            h()(t),
                            r(!0),
                            setTimeout( () => r(!1), 1500)
                        }
                        ,
                        children: t
                    }), s ? (0,
                    a.jsx)("svg", {
                        className: "check-icon",
                        width: "10",
                        height: "10",
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        a.jsx)("path", {
                            d: "M1.31818 5.96886L4.08959 8.49947L8.89 1.97178",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    }) : (0,
                    a.jsx)(a.Fragment, {})]
                })]
            })
        }
        ;
        var m = s(5898)
          , p = s(86715)
          , x = s(62636);
        let g = {
            handle: "",
            isValid: !1,
            error: null
        }
          , j = e => {
            let t = (0,
            p.useRouter)()
              , [r,d] = (0,
            i.useState)(null)
              , [h,j] = (0,
            i.useState)("100")
              , [v,f] = (0,
            i.useState)("10000")
              , [w,b] = (0,
            i.useState)(0)
              , [k,y] = (0,
            i.useState)(0)
              , [N,C] = (0,
            i.useState)("")
              , [L,_] = (0,
            i.useState)("")
              , [S,M] = (0,
            i.useState)("")
              , [W,F] = (0,
            i.useState)("")
              , [T,I] = (0,
            i.useState)(g)
              , [R,D] = (0,
            i.useState)(g)
              , [P,E] = (0,
            i.useState)(g)
              , [B,A] = (0,
            i.useState)(null)
              , [O,$] = (0,
            i.useState)(!1)
              , [V,X] = (0,
            i.useState)(!1)
              , [z,H] = (0,
            i.useState)(!1)
              , [Z,U] = (0,
            i.useState)(!1)
              , [q,Q] = (0,
            i.useState)(!1)
              , [G,J] = (0,
            i.useState)("")
              , [Y,K] = (0,
            i.useState)("")
              , [ee,et] = (0,
            i.useState)("")
              , [es,ea] = (0,
            i.useState)("")
              , [ei,er] = (0,
            i.useState)("")
              , [en,el] = (0,
            i.useState)(!0)
              , eo = (0,
            i.useRef)("")
              , ec = (0,
            i.useRef)("")
              , [ed,eh] = (0,
            i.useState)("")
              , eu = (0,
            i.useRef)(null)
              , em = new o.A
              , ep = (0,
            i.useRef)(null)
              , [ex,eg] = (0,
            i.useState)(!0)
              , ej = (0,
            i.useRef)(null)
              , [ev,ef] = (0,
            i.useState)(0)
              , ew = e => new Promise(t => setTimeout(t, e));
            (0,
            i.useEffect)( () => {
                let e = async e => {
                    "https://firstledger.net" === e.origin && (e.data.type && "closeWallet" === e.data.type && (ea(""),
                    H(!1)),
                    e.data.type && "confirmTransactionMessage" === e.data.type ? (ea(""),
                    H(!1),
                    void 0 != e.data.result && null != e.data.result && !0 == e.data.result.Result ? (X(!0),
                    J("Transaction succeeded. Please wait..."),
                    await ew(5e3),
                    ep.current = setInterval(async () => {
                        try {
                            let e = em.get("userToken")
                              , t = await l.Z.getTokenCreationStatus(e, eo.current, ec.current);
                            try {
                                t.success && void 0 != t.data && (t.data.processed && (1 == t.data.processed || !0 == t.data.processed) ? (clearInterval(ep.current),
                                ep.current = null,
                                null != t.data.check_id && (eh(t.data.check_id),
                                el(!1)),
                                J(t.data.processed_msg),
                                Q(!0)) : t.data.processed_msg && null != t.data.processed_msg && "" != t.data.processed_msg && J(t.data.processed_msg))
                            } catch (e) {}
                        } catch (e) {
                            console.error("Error fetching API:", e),
                            J("Error fetching status")
                        }
                    }
                    , 3e3)) : void 0 != e.data.result && null != e.data.result && !1 == e.data.result.Result && J("Error: " + e.data.result.Error)) : e.data.type && "cashcheckconfirmation" === e.data.type && (void 0 != e.data.result && null != e.data.result && !0 == e.data.result.Result ? (ea(""),
                    H(!1),
                    (0,
                    x.Ay)("Tokens claimed successfully!"),
                    eh("")) : (0,
                    x.Ay)("Error claiming tokens!")))
                }
                ;
                return window.addEventListener("message", e),
                () => {
                    window.removeEventListener("message", e),
                    ep.current && clearInterval(ep.current)
                }
            }
            , []),
            (0,
            i.useEffect)( () => {
                let e = e => {
                    eu.current && !eu.current.contains(e.target) && eL()
                }
                ;
                return z ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e)
                }
            }
            , [z]);
            let eb = () => Number((parseInt(h) || 0) + 22.84).toString()
              , ek = () => {
                let e = k / 100;
                return Math.floor(Number(v) * e)
            }
              , ey = async () => {
                if (!r) {
                    F("No image selected"),
                    console.error("No file selected");
                    return
                }
                if (function() {
                    try {
                        if (S.length < 3)
                            return K("Token name required."),
                            !1;
                        if (L.length < 3)
                            return K("Ticker minimum length is 3 characters."),
                            !1;
                        try {
                            if ((0,
                            m.convertStringToHex)(L).length > 40)
                                return K("Ticker is too long."),
                                !1
                        } catch (e) {}
                        if ("" == v || 1 > Number(v))
                            return K("Supply must be greater than zero"),
                            !1;
                        if ("" == h || 1 > Number(h))
                            return K("LP must be greater than zero"),
                            !1;
                        if (100 > Number(h))
                            return K("Minimum LP is 100 XRP"),
                            !1;
                        if (Number(k) > 30)
                            return K("Dev allocation maximum is 30% of the supply"),
                            !1;
                        if (500 > Number(h) && Number(k) > 10)
                            return K("Token allocation too high for LP allocation. Max allocation is 10% for this LP Amount."),
                            !1;
                        if (1e3 > Number(h) && Number(k) > 20)
                            return K("Token allocation too high for LP allocation. Max allocation is 20% for this LP Amount."),
                            !1;
                        return K(""),
                        !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                    $(!0);
                    try {
                        let e = em.get("userToken")
                          , t = new FormData;
                        t.append("token_name", S),
                        t.append("ticker", L),
                        t.append("description", N),
                        t.append("supply", v.toString()),
                        t.append("devAllocation", k.toString()),
                        t.append("totalLP", h.toString()),
                        t.append("twitter", T.handle),
                        t.append("telegram", R.handle),
                        t.append("website", P.handle),
                        t.append("token_name", S),
                        t.append("image", r, r.name),
                        t.append("poolFee", w.toString()),
                        er(eb());
                        let a = await l.Z.createToken(e, t);
                        if (a.success && void 0 != a.data && !1 == a.data.error) {
                            et(a.data.deposit_address),
                            eo.current = a.data.deposit_address,
                            ec.current = L.length > 3 ? (0,
                            n.rs)((0,
                            m.convertStringToHex)(L)) : L,
                            U(!0),
                            J("Awaiting funds...");
                            let {getActiveItem: t} = await s.e(490).then(s.bind(s, 97490))
                              , i = (await t()).xrp_address
                              , r = await (0,
                            c.MF)(e, "transfer_xrp", "XRP", "XRP", "XRP", eb(), i, a.data.deposit_address);
                            ea(r || ""),
                            H(!0)
                        } else {
                            J("Error: " + a.data.status),
                            $(!1);
                            return
                        }
                    } catch (e) {}
                }
            }
              , eN = (e, t) => s => {
                e(t(s.target.value))
            }
            ;
            async function eC() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                d(null),
                j("100"),
                f("10000"),
                y(0),
                C(""),
                _(""),
                M(""),
                F(""),
                I(g),
                D(g),
                E(g),
                A(null),
                $(!1),
                H(!1),
                U(!1),
                X(!1),
                J(""),
                et(""),
                ea(""),
                er(""),
                K(""),
                eh(""),
                eo.current = "",
                ec.current = "",
                e.closeModel(),
                t && window.location.reload()
            }
            async function eL() {
                H(!1),
                ea(""),
                eg(!0),
                ef(e => e + 1)
            }
            async function e_() {
                let e = em.get("userToken")
                  , {getActiveItem: t} = await s.e(490).then(s.bind(s, 97490))
                  , a = (await t()).xrp_address;
                ea(await (0,
                c.MF)(e, "transfer_xrp", "XRP", "XRP", "XRP", ei, a, ee) || ""),
                H(!0)
            }
            async function eS() {
                let e = em.get("userToken")
                  , {getActiveItem: t} = await s.e(490).then(s.bind(s, 97490))
                  , a = await t();
                a.xrp_address,
                ea(await (0,
                c.aL)(e, "cash_check", eo.current, ec.current, (0,
                n.Te)(ec.current), ek().toString(), a.xrp_address, a.xrp_address, ed) || ""),
                H(!0)
            }
            async function eM() {
                t.push("/token/" + encodeURIComponent(ee) + "/" + encodeURIComponent(ec.current))
            }
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(x.l$, {}), (0,
                a.jsx)("div", {
                    id: "modal_cookie",
                    className: "modal ".concat(!1 == en ? "is-active" : ""),
                    style: {
                        zIndex: 9999
                    },
                    children: (0,
                    a.jsx)("div", {
                        className: "modal-content",
                        children: (0,
                        a.jsxs)("div", {
                            className: "modal-card-body content",
                            style: {
                                background: "red"
                            },
                            children: [(0,
                            a.jsx)("h3", {
                                className: "mb mb-2",
                                children: "Token claim notice!"
                            }), (0,
                            a.jsx)("p", {
                                children: "Your token has been created. please scroll to the bottom of the panel to claim your tokens!"
                            }), (0,
                            a.jsx)("button", {
                                className: "button is-white",
                                onClick: () => el(!0),
                                children: "Got it"
                            })]
                        })
                    })
                }), (0,
                a.jsxs)("div", {
                    style: {
                        zIndex: 9999
                    },
                    id: "modal_buy_summary",
                    className: z ? "modal is-local is-wallet is-active" : "modal is-local is-wallet",
                    children: [(0,
                    a.jsx)("div", {
                        className: "modal-background",
                        onClick: eL
                    }), (0,
                    a.jsx)("div", {
                        className: "modal-card",
                        ref: eu,
                        style: {
                            height: "100%"
                        },
                        children: (0,
                        a.jsx)("iframe", {
                            src: es,
                            width: "100%",
                            height: "100%",
                            ref: ej,
                            onLoad: () => {
                                eg(!1)
                            }
                            ,
                            style: {
                                border: "none"
                            }
                        }, ev)
                    })]
                }), (0,
                a.jsxs)("div", {
                    id: "modal_create_token",
                    className: "modal is-spaced is-active",
                    children: [(0,
                    a.jsx)("div", {
                        className: "modal-background",
                        onClick: () => eC(!1)
                    }), (0,
                    a.jsx)("div", {
                        className: "modal-card",
                        children: (0,
                        a.jsxs)("section", {
                            className: "modal-card-body form-grid",
                            children: [(0,
                            a.jsx)("div", {
                                className: "title is-3",
                                children: "Create a token"
                            }), (0,
                            a.jsxs)("div", {
                                className: "field",
                                children: [(0,
                                a.jsx)("label", {
                                    className: "label",
                                    children: "Token name"
                                }), (0,
                                a.jsx)("div", {
                                    className: "control",
                                    children: (0,
                                    a.jsx)("input", {
                                        className: "input",
                                        maxLength: 50,
                                        minLength: 3,
                                        type: "text",
                                        value: S,
                                        onChange: e => {
                                            try {
                                                let t = e.target.value;
                                                M(t)
                                            } catch (e) {}
                                        }
                                    })
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "field",
                                children: [(0,
                                a.jsx)("label", {
                                    className: "label",
                                    children: "Ticker"
                                }), (0,
                                a.jsx)("div", {
                                    className: "control",
                                    children: (0,
                                    a.jsx)("input", {
                                        className: "input is-short",
                                        maxLength: 28,
                                        minLength: 3,
                                        type: "text",
                                        value: L,
                                        onChange: e => {
                                            try {
                                                let t = e.target.value;
                                                t = t.replace(/\s+/g, ""),
                                                _(t)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                        }
                                    })
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "field",
                                children: [(0,
                                a.jsx)("label", {
                                    className: "label",
                                    children: "Description"
                                }), (0,
                                a.jsx)("div", {
                                    className: "control",
                                    children: (0,
                                    a.jsx)("textarea", {
                                        className: "textarea",
                                        maxLength: 500,
                                        value: N,
                                        onChange: e => {
                                            try {
                                                let t = e.target.value;
                                                C(t)
                                            } catch (e) {}
                                        }
                                    })
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "field",
                                children: [(0,
                                a.jsx)("label", {
                                    className: "label",
                                    children: "Supply"
                                }), (0,
                                a.jsx)("div", {
                                    className: "control",
                                    children: (0,
                                    a.jsx)("input", {
                                        className: "input",
                                        type: "number",
                                        value: v,
                                        onChange: e => {
                                            try {
                                                let t = e.target.value
                                                  , s = Number(e.target.value);
                                                !isNaN(s) && s >= 1 && s <= 1e15 ? f(t) : "" === e.target.value && f("")
                                            } catch (e) {}
                                        }
                                    })
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "field",
                                children: [(0,
                                a.jsx)("label", {
                                    className: "label",
                                    children: "Token image"
                                }), (0,
                                a.jsx)("div", {
                                    className: "control",
                                    children: (0,
                                    a.jsx)("div", {
                                        className: "file has-name",
                                        children: (0,
                                        a.jsxs)("label", {
                                            className: "file-label",
                                            children: [(0,
                                            a.jsx)("input", {
                                                className: "file-input",
                                                type: "file",
                                                name: "tokenImage",
                                                onChange: e => {
                                                    var t;
                                                    let s = null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
                                                    if (s) {
                                                        let e = s.type.startsWith("image/")
                                                          , t = s.size <= 2097152;
                                                        if (!e) {
                                                            F("Please select an image file."),
                                                            d(null);
                                                            return
                                                        }
                                                        if (!t) {
                                                            F("Image must be less than 2MB."),
                                                            d(null);
                                                            return
                                                        }
                                                        d(s);
                                                        let a = new FileReader;
                                                        a.onloadend = () => {
                                                            A(a.result)
                                                        }
                                                        ,
                                                        a.readAsDataURL(s)
                                                    } else
                                                        d(null),
                                                        A(null)
                                                }
                                            }), (0,
                                            a.jsxs)("span", {
                                                className: "file-cta",
                                                children: [(0,
                                                a.jsx)("span", {
                                                    className: "file-icon",
                                                    children: (0,
                                                    a.jsx)("i", {
                                                        className: "fas fa-upload"
                                                    })
                                                }), r ? (0,
                                                a.jsx)(a.Fragment, {}) : (0,
                                                a.jsx)("span", {
                                                    className: "file-label",
                                                    children: " Choose a file… "
                                                })]
                                            }), (0,
                                            a.jsxs)("span", {
                                                className: "file-name",
                                                children: [" ", r ? r.name : "No file chosen", " "]
                                            })]
                                        })
                                    })
                                }), (0,
                                a.jsx)("div", {
                                    className: "image is-96x96 mt mt-4 has-rounded-corners",
                                    children: B ? (0,
                                    a.jsx)("img", {
                                        src: B,
                                        alt: "Token preview"
                                    }) : (0,
                                    a.jsx)(a.Fragment, {})
                                }), W && (0,
                                a.jsx)("p", {
                                    style: {
                                        color: "red"
                                    },
                                    children: W
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "field",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "is-flex is-justify-content-space-between",
                                    children: [(0,
                                    a.jsx)("label", {
                                        className: "label",
                                        children: "Dev token allocation"
                                    }), (0,
                                    a.jsxs)("label", {
                                        className: "label",
                                        children: [k, " %"]
                                    })]
                                }), (0,
                                a.jsx)("div", {
                                    className: "control",
                                    children: (0,
                                    a.jsx)("div", {
                                        className: "flex",
                                        children: (0,
                                        a.jsx)("input", {
                                            type: "range",
                                            className: "slider",
                                            id: "DevAllocationRange",
                                            min: "0",
                                            value: k,
                                            onChange: e => {
                                                let t = Number(e.target.value);
                                                500 > Number(h) && t > 10 && (t = 10),
                                                1e3 > Number(h) && t > 20 && (t = 20),
                                                y(Number(t))
                                            }
                                            ,
                                            max: "30"
                                        })
                                    })
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "field",
                                children: [(0,
                                a.jsx)("label", {
                                    className: "label",
                                    children: "Total XRP LP"
                                }), (0,
                                a.jsx)("div", {
                                    className: "control",
                                    children: (0,
                                    a.jsx)("input", {
                                        min: 100,
                                        max: 1e6,
                                        className: "input",
                                        type: "number",
                                        value: h,
                                        onChange: e => {
                                            try {
                                                let t = e.target.value
                                                  , s = parseInt(t, 10);
                                                !isNaN(s) && s >= 1 && s <= 1e6 ? j(Math.floor(s).toString()) : "" === t && j("")
                                            } catch (e) {
                                                console.error("Error in handleSliderChange:", e)
                                            }
                                        }
                                    })
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "field",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "is-flex is-justify-content-space-between",
                                    children: [(0,
                                    a.jsx)("label", {
                                        className: "label",
                                        children: "Initial AMM pool fee"
                                    }), (0,
                                    a.jsxs)("label", {
                                        className: "label",
                                        children: [0 == w ? w : w / 1e3, " %"]
                                    })]
                                }), (0,
                                a.jsx)("div", {
                                    className: "control",
                                    children: (0,
                                    a.jsx)("div", {
                                        className: "flex",
                                        children: (0,
                                        a.jsx)("input", {
                                            type: "range",
                                            className: "slider",
                                            id: "PoolFeeRange",
                                            min: "0",
                                            value: w,
                                            onChange: e => {
                                                b(Number(e.target.value))
                                            }
                                            ,
                                            max: "1000"
                                        })
                                    })
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "field",
                                children: [(0,
                                a.jsx)("label", {
                                    className: "label",
                                    children: "Twitter/X"
                                }), (0,
                                a.jsx)("div", {
                                    className: "control",
                                    children: (0,
                                    a.jsx)("input", {
                                        className: "input",
                                        type: "text",
                                        value: T.handle ? "@" + T.handle : "",
                                        onChange: eN(I, e => {
                                            let t = e.startsWith("@") ? e.slice(1) : e;
                                            return 0 === t.length ? {
                                                ...g,
                                                error: "Twitter handle cannot be empty."
                                            } : /^[a-zA-Z0-9_]{1,50}$/.test(t) ? {
                                                handle: t,
                                                isValid: !0,
                                                error: null
                                            } : {
                                                handle: t,
                                                isValid: !1,
                                                error: "Invalid Twitter handle. Use 1-50 characters: letters, numbers, or underscores."
                                            }
                                        }
                                        ),
                                        placeholder: "@Twitter"
                                    })
                                }), T.error && (0,
                                a.jsx)("p", {
                                    style: {
                                        color: "red"
                                    },
                                    children: T.error
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "field",
                                children: [(0,
                                a.jsx)("label", {
                                    className: "label",
                                    children: "Telegram"
                                }), (0,
                                a.jsx)("div", {
                                    className: "control",
                                    children: (0,
                                    a.jsx)("input", {
                                        className: "input",
                                        type: "text",
                                        value: R.handle ? "@" + R.handle : "",
                                        onChange: eN(D, e => {
                                            let t = e.startsWith("@") ? e.slice(1) : e;
                                            return /^[a-zA-Z0-9_]{5,32}$/.test(t) ? {
                                                handle: t,
                                                isValid: !0,
                                                error: null
                                            } : {
                                                handle: t,
                                                isValid: !1,
                                                error: "Invalid Telegram handle. Must be 5-32 characters."
                                            }
                                        }
                                        ),
                                        placeholder: "@Telegram"
                                    })
                                }), R.error && (0,
                                a.jsx)("p", {
                                    style: {
                                        color: "red"
                                    },
                                    children: R.error
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "field",
                                children: [(0,
                                a.jsx)("label", {
                                    className: "label",
                                    children: "Website"
                                }), (0,
                                a.jsx)("div", {
                                    className: "control",
                                    children: (0,
                                    a.jsx)("input", {
                                        className: "input",
                                        type: "url",
                                        value: P.handle,
                                        onChange: eN(E, e => {
                                            let t;
                                            try {
                                                t = new URL(e)
                                            } catch (t) {
                                                return {
                                                    handle: e,
                                                    isValid: !1,
                                                    error: "Invalid URL."
                                                }
                                            }
                                            return ["http:", "https:"].includes(t.protocol) ? {
                                                handle: e,
                                                isValid: !0,
                                                error: null
                                            } : {
                                                handle: e,
                                                isValid: !1,
                                                error: "URL must start with http:// or https://"
                                            }
                                        }
                                        ),
                                        placeholder: "Website URL"
                                    })
                                }), P.error && (0,
                                a.jsx)("p", {
                                    style: {
                                        color: "red"
                                    },
                                    children: P.error
                                })]
                            }), (0,
                            a.jsx)("div", {
                                className: "notification",
                                children: (0,
                                a.jsxs)("ul", {
                                    className: "breakdown-list",
                                    children: [(0,
                                    a.jsxs)("li", {
                                        children: [(0,
                                        a.jsx)("span", {
                                            children: "Token LP"
                                        }), (0,
                                        a.jsxs)("span", {
                                            children: [h.toString(), " XRP"]
                                        })]
                                    }), (0,
                                    a.jsxs)("li", {
                                        children: [(0,
                                        a.jsx)("span", {
                                            children: "Account reserves & protocol fees"
                                        }), (0,
                                        a.jsx)("span", {
                                            children: "2.84 XRP"
                                        })]
                                    }), (0,
                                    a.jsxs)("li", {
                                        children: [(0,
                                        a.jsx)("span", {
                                            children: "First Ledger fee"
                                        }), (0,
                                        a.jsx)("span", {
                                            children: "20 XRP"
                                        })]
                                    }), (0,
                                    a.jsxs)("li", {
                                        children: [(0,
                                        a.jsx)("span", {
                                            children: "Total cost"
                                        }), (0,
                                        a.jsxs)("span", {
                                            children: [eb(), " XRP"]
                                        })]
                                    })]
                                })
                            }), (0,
                            a.jsx)("div", {
                                children: Z && !q ? (0,
                                a.jsx)(a.Fragment, {
                                    children: (0,
                                    a.jsx)(u, {
                                        text: ee
                                    })
                                }) : (0,
                                a.jsx)(a.Fragment, {})
                            }), (0,
                            a.jsxs)("div", {
                                className: "buttons",
                                children: [q ? (0,
                                a.jsx)(a.Fragment, {}) : (0,
                                a.jsx)("button", {
                                    className: O ? "button is-medium is-primary is-loading" : "button is-medium is-primary",
                                    onClick: ey,
                                    children: "Submit"
                                }), !O || "firstledger" != em.get("walletType") || V || q ? (0,
                                a.jsx)(a.Fragment, {}) : (0,
                                a.jsx)("button", {
                                    className: "button is-medium",
                                    onClick: e_,
                                    children: "Re-open FL wallet"
                                }), O || q || V ? (0,
                                a.jsx)(a.Fragment, {}) : (0,
                                a.jsx)("button", {
                                    className: "button is-medium",
                                    onClick: () => eC(!1),
                                    children: "Cancel"
                                }), q && "" == ed ? (0,
                                a.jsx)("button", {
                                    className: "button is-medium",
                                    onClick: () => eC(!0),
                                    children: "Close"
                                }) : (0,
                                a.jsx)(a.Fragment, {}), q && "" != ed ? (0,
                                a.jsx)("button", {
                                    className: "button is-medium is-primary",
                                    onClick: () => eS(),
                                    children: "Claim tokens"
                                }) : (0,
                                a.jsx)(a.Fragment, {}), q ? (0,
                                a.jsx)("button", {
                                    className: "button is-medium",
                                    onClick: () => eM(),
                                    children: "View token"
                                }) : (0,
                                a.jsx)(a.Fragment, {}), (0,
                                a.jsx)("div", {
                                    children: G
                                })]
                            }), "" != Y ? (0,
                            a.jsx)("p", {
                                style: {
                                    color: "red"
                                },
                                children: Y
                            }) : (0,
                            a.jsx)(a.Fragment, {})]
                        })
                    }), (0,
                    a.jsx)("button", {
                        className: "modal-close is-large",
                        "aria-label": "close",
                        onClick: () => eC(!1)
                    })]
                })]
            })
        }
          , v = () => {
            let e = (0,
            i.useContext)(r.A)
              , [t,s] = (0,
            i.useState)(!1)
              , [n,l] = (0,
            i.useState)("");
            async function o() {
                s(!1)
            }
            async function c() {
                void 0 != e.token && null != e.token && "" != e.token ? s(!0) : l("Connect a wallet to create a token.")
            }
            return (0,
            a.jsxs)(a.Fragment, {
                children: [t ? (0,
                a.jsx)(j, {
                    closeModel: o
                }) : (0,
                a.jsx)(a.Fragment, {}), (0,
                a.jsx)("section", {
                    className: "section is-medium home-intro",
                    children: (0,
                    a.jsx)("div", {
                        className: "container",
                        children: (0,
                        a.jsxs)("div", {
                            className: "columns",
                            children: [(0,
                            a.jsx)("div", {
                                className: "column is-4",
                                children: (0,
                                a.jsxs)("div", {
                                    className: "fl-reveal",
                                    children: [(0,
                                    a.jsx)("div", {
                                        children: (0,
                                        a.jsx)("img", {
                                            src: "/images/fl-reveal-1.webp",
                                            width: "240",
                                            alt: ""
                                        })
                                    }), (0,
                                    a.jsx)("div", {
                                        children: (0,
                                        a.jsx)("img", {
                                            src: "/images/fl-reveal-2.webp",
                                            width: "240",
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "column is-flex is-align-items-center",
                                children: (0,
                                a.jsxs)("div", {
                                    children: [(0,
                                    a.jsx)("h1", {
                                        className: "title is-1 is-spaced",
                                        children: "Welcome to First Ledger"
                                    }), (0,
                                    a.jsx)("h2", {
                                        className: "subtitle is-4 is-spaced",
                                        children: "The fastest way to trade assets on the XRP Ledger. You will just need a Telegram account to get started. Click connect to create your first wallet."
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "buttons mt mt-6",
                                        children: [(0,
                                        a.jsx)("a", {
                                            href: "#video_intro",
                                            className: "button is-medium",
                                            children: "Video"
                                        }), (0,
                                        a.jsx)("a", {
                                            href: "https://docs.firstledger.net/",
                                            className: "button is-medium",
                                            target: "_blank",
                                            children: "Documentation"
                                        }), (0,
                                        a.jsx)("button", {
                                            className: "button is-medium",
                                            onClick: c,
                                            children: "Create a Token"
                                        })]
                                    }), (0,
                                    a.jsx)("h2", {
                                        className: "subtitle is-4 is-spaced",
                                        children: n
                                    })]
                                })
                            })]
                        })
                    })
                })]
            })
        }
        ;
        var f = s(89887)
          , w = s(91106)
          , b = s.n(w)
          , k = s(7198)
          , y = s(92953)
          , N = s(65489);
        let C = [{
            value: "",
            label: "All"
        }, {
            value: "top",
            label: "Top"
        }, {
            value: "gainers",
            label: "Gainers"
        }]
          , L = {
            sortDir: 1,
            sort: "market_cap",
            selectedOption: "",
            gainer_timeperiod: "5m",
            top_timeperiod: "5m",
            top_type: "volume",
            blackholedIndicator: !0,
            burnedIndicator: !1,
            whaleIndicator: !1,
            verifiedIndicator: !1,
            launchStyleFirstLedger: !0,
            launchStyleBondingCurve: !0,
            launchStyleStandard: !0
        };
        function _(e) {
            let t = (0,
            i.useRef)(!1)
              , [s,r] = (0,
            i.useState)(L)
              , [o,c] = (0,
            i.useState)("")
              , [d,h] = (0,
            i.useState)(!1)
              , [u,m] = (0,
            i.useState)(e.frontPanelData)
              , [p,x] = (0,
            i.useState)("market_cap")
              , [g,j] = (0,
            i.useState)(C[0].value)
              , [v,w] = (0,
            i.useState)("5m")
              , [_,S] = (0,
            i.useState)("5m")
              , [M,W] = (0,
            i.useState)("volume")
              , [F,T] = (0,
            i.useState)(!0)
              , [I,R] = (0,
            i.useState)(!1)
              , [D,P] = (0,
            i.useState)(!1)
              , [E,B] = (0,
            i.useState)(!1)
              , [A,O] = (0,
            i.useState)(!1)
              , [$,V] = (0,
            i.useState)(!0)
              , [X,z] = (0,
            i.useState)(!0)
              , [H,Z] = (0,
            i.useState)(!0)
              , [U,q] = (0,
            i.useState)(!1)
              , [Q,G] = (0,
            i.useState)(1)
              , J = (0,
            i.useMemo)( () => s, [s])
              , Y = e => {
                x(e.sort),
                G(e.sortDir),
                j(e.selectedOption),
                w(e.gainer_timeperiod),
                W(e.top_type),
                S(e.top_timeperiod),
                T(e.blackholedIndicator),
                R(e.burnedIndicator),
                P(e.whaleIndicator),
                B(e.verifiedIndicator),
                V(e.launchStyleFirstLedger),
                z(e.launchStyleBondingCurve),
                Z(e.launchStyleStandard)
            }
            ;
            (0,
            i.useEffect)( () => {
                {
                    let e = localStorage.getItem("filters_front");
                    e ? (JSON.parse(e),
                    r(JSON.parse(e)),
                    Y(JSON.parse(e))) : ee(s.sort, s.sortDir, o, s.selectedOption, s.top_type, s.blackholedIndicator, s.burnedIndicator, s.whaleIndicator, s.verifiedIndicator, s.launchStyleFirstLedger, s.launchStyleBondingCurve, s.launchStyleStandard)
                }
            }
            , []),
            (0,
            i.useEffect)( () => {
                localStorage.setItem("filters_front", JSON.stringify(s)),
                t.current ? ee(s.sort, s.sortDir, o, s.selectedOption, s.top_type, s.blackholedIndicator, s.burnedIndicator, s.whaleIndicator, s.verifiedIndicator, s.launchStyleFirstLedger, s.launchStyleBondingCurve, s.launchStyleStandard) : t.current = !0
            }
            , [J]);
            let K = (0,
            i.useRef)(null)
              , ee = async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "market_cap"
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                  , s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                  , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : C[0].value
                  , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "volume"
                  , r = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5]
                  , n = arguments.length > 6 && void 0 !== arguments[6] && arguments[6]
                  , o = arguments.length > 7 && void 0 !== arguments[7] && arguments[7]
                  , c = arguments.length > 8 && void 0 !== arguments[8] && arguments[8]
                  , d = !(arguments.length > 9) || void 0 === arguments[9] || arguments[9]
                  , u = !(arguments.length > 10) || void 0 === arguments[10] || arguments[10]
                  , p = !(arguments.length > 11) || void 0 === arguments[11] || arguments[11];
                h(!0);
                try {
                    let h = "";
                    "" != a && (h = "top" == a ? _ : v);
                    let x = await l.Z.frontPanel(e, t, s, a, i, h, r, n, o, c, d, u, p, "");
                    x.success && void 0 != x.data && m(x.data)
                } catch (e) {} finally {
                    h(!1)
                }
            }
              , et = async () => {
                j(C[0].value),
                w("5m"),
                S("5m"),
                W("volume"),
                r(e => ({
                    ...e,
                    selectedOption: C[0].value,
                    gainer_timeperiod: "5m",
                    top_timeperiod: "5m",
                    top_type: "volume"
                }))
            }
              , es = async () => {
                et(),
                T(!0),
                R(!1),
                P(!1),
                B(!1),
                z(!0),
                V(!0),
                Z(!0),
                c(""),
                x("market_cap"),
                r(e => ({
                    ...e,
                    selectedOption: C[0].value,
                    gainer_timeperiod: "5m",
                    top_timeperiod: "5m",
                    top_type: "volume",
                    blackholedIndicator: !0,
                    burnedIndicator: !1,
                    whaleIndicator: !1,
                    verifiedIndicator: !1,
                    launchStyleBondingCurve: !0,
                    launchStyleFirstLedger: !0,
                    launchStyleStandard: !0,
                    sort: "market_cap"
                }))
            }
              , ea = e => {
                p === e ? (r(e => ({
                    ...e,
                    selectedOption: C[0].value,
                    gainer_timeperiod: "5m",
                    top_timeperiod: "5m",
                    top_type: "volume",
                    sortDir: 0 === Q ? 1 : 0
                })),
                G(e => 0 === e ? 1 : 0)) : (x(e),
                G(0),
                r(t => ({
                    ...t,
                    selectedOption: C[0].value,
                    gainer_timeperiod: "5m",
                    top_timeperiod: "5m",
                    top_type: "volume",
                    sortDir: 0,
                    sort: e
                }))),
                et()
            }
              , ei = e => p === e ? 0 === Q ? (0,
            a.jsx)("span", {
                className: "chevron-up"
            }) : (0,
            a.jsx)("span", {
                className: "chevron-down"
            }) : null
              , er = (e, t) => {
                t(e)
            }
              , en = (e, t, s) => {
                er(t, s),
                r(s => ({
                    ...s,
                    [e]: t
                }))
            }
            ;
            return (0,
            a.jsxs)("section", {
                className: "section",
                children: [(0,
                a.jsxs)("div", {
                    id: "modal_launch_info",
                    className: !0 == U ? "modal is-active" : "modal",
                    children: [(0,
                    a.jsx)("div", {
                        className: "modal-background",
                        onClick: () => q(!1)
                    }), (0,
                    a.jsx)("div", {
                        className: "modal-card",
                        children: (0,
                        a.jsx)("section", {
                            className: "modal-card-body",
                            children: (0,
                            a.jsxs)("ul", {
                                className: "info-content",
                                children: [(0,
                                a.jsxs)("li", {
                                    children: [(0,
                                    a.jsxs)("svg", {
                                        width: "24",
                                        height: "22",
                                        viewBox: "0 0 24 22",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0,
                                        a.jsx)("rect", {
                                            x: "2",
                                            y: "6",
                                            width: "13",
                                            height: "13",
                                            strokeWidth: "3"
                                        }), (0,
                                        a.jsx)("path", {
                                            className: "icon-check",
                                            d: "M15 4.99708L17.7714 7.5277L22.5718 1",
                                            stroke: "#21D084",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0,
                                        a.jsx)("line", {
                                            x1: "3.06066",
                                            y1: "6.93934",
                                            x2: "9.06066",
                                            y2: "12.9393",
                                            strokeWidth: "3",
                                            strokeLinecap: "round"
                                        })]
                                    }), (0,
                                    a.jsxs)("p", {
                                        children: [(0,
                                        a.jsx)("strong", {
                                            children: "First Ledger launch"
                                        }), " token launched on first ledger, fair launch, blackholed issuer, LP burn."]
                                    })]
                                }), (0,
                                a.jsxs)("li", {
                                    children: [(0,
                                    a.jsxs)("svg", {
                                        width: "24",
                                        height: "23",
                                        viewBox: "0 0 24 23",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0,
                                        a.jsx)("path", {
                                            d: "M17 5C17 13.2843 10.2843 20 2 20",
                                            strokeWidth: "3",
                                            strokeLinecap: "round"
                                        }), (0,
                                        a.jsx)("path", {
                                            className: "icon-check",
                                            d: "M15 4.99708L17.7714 7.5277L22.5718 1",
                                            stroke: "#21D084",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })]
                                    }), (0,
                                    a.jsxs)("p", {
                                        children: [(0,
                                        a.jsx)("strong", {
                                            children: "Bonding Curve launch"
                                        }), " once the token reaches a certain TVL LP tokens will be burned"]
                                    })]
                                }), (0,
                                a.jsxs)("li", {
                                    children: [(0,
                                    a.jsxs)("svg", {
                                        width: "24",
                                        height: "23",
                                        viewBox: "0 0 24 23",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0,
                                        a.jsx)("rect", {
                                            x: "1",
                                            y: "6",
                                            width: "16",
                                            height: "16",
                                            strokeWidth: "2"
                                        }), (0,
                                        a.jsx)("path", {
                                            className: "icon-check",
                                            d: "M15 4.99708L17.7714 7.5277L22.5718 1",
                                            stroke: "#21D084",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })]
                                    }), (0,
                                    a.jsxs)("p", {
                                        children: [(0,
                                        a.jsx)("strong", {
                                            children: "Standard launch"
                                        }), " includes manual token launches and launches that do not fit any other category"]
                                    })]
                                })]
                            })
                        })
                    }), (0,
                    a.jsx)("button", {
                        className: "modal-close is-large",
                        "aria-label": "close",
                        onClick: () => q(!1)
                    })]
                }), (0,
                a.jsxs)("div", {
                    id: "modal_audit_info",
                    className: !0 == A ? "modal is-active" : "modal",
                    children: [(0,
                    a.jsx)("div", {
                        className: "modal-background",
                        onClick: () => O(!1)
                    }), (0,
                    a.jsx)("div", {
                        className: "modal-card",
                        children: (0,
                        a.jsx)("section", {
                            className: "modal-card-body",
                            children: (0,
                            a.jsxs)("ul", {
                                className: "info-content",
                                children: [(0,
                                a.jsxs)("li", {
                                    children: [(0,
                                    a.jsxs)("svg", {
                                        width: "25",
                                        height: "23",
                                        viewBox: "0 0 25 23",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0,
                                        a.jsx)("ellipse", {
                                            cx: "12",
                                            cy: "16.5",
                                            rx: "11",
                                            ry: "5.5",
                                            strokeWidth: "1.5"
                                        }), (0,
                                        a.jsx)("path", {
                                            d: "M22.0032 18.7918C20.2652 16.8984 16.44 15.5835 12.0006 15.5835C7.56123 15.5835 3.73606 16.8984 1.99805 18.7918",
                                            strokeWidth: "1.5"
                                        }), (0,
                                        a.jsx)("path", {
                                            d: "M16 4.99708L18.7714 7.5277L23.5718 1",
                                            stroke: "#21D084",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })]
                                    }), (0,
                                    a.jsxs)("p", {
                                        children: [(0,
                                        a.jsx)("strong", {
                                            children: "Black-holed"
                                        }), " This token is black-holed, ensuring that no new supply can be minted."]
                                    })]
                                }), (0,
                                a.jsxs)("li", {
                                    children: [(0,
                                    a.jsxs)("svg", {
                                        width: "25",
                                        height: "23",
                                        viewBox: "0 0 25 23",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0,
                                        a.jsx)("path", {
                                            d: "M16 4.99708L18.7714 7.5277L23.5718 1",
                                            stroke: "#21D084",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0,
                                        a.jsx)("path", {
                                            d: "M15 15.0555C15 18.8909 11.866 22 8 22C4.13401 22 1 18.8909 1 15.0555C1 13.813 1.53016 11.5589 2.10634 9.92683L3.26799 12.3963C4.48497 8.33537 5.64662 6.16768 8.74437 4C9.60178 8.66463 15 11.2202 15 15.0555Z",
                                            strokeWidth: "1.5",
                                            strokeLinejoin: "round"
                                        }), (0,
                                        a.jsx)("path", {
                                            d: "M10.7184 19.215C10.7184 20.7532 9.46149 22 7.91107 22C6.36064 22 5.28125 20.7532 5.28125 19.215C5.28125 16.8281 6.92289 14.7813 8.16522 13.5488C8.50908 15.4195 10.7184 17.6769 10.7184 19.215Z",
                                            strokeWidth: "1.5",
                                            strokeLinejoin: "round"
                                        })]
                                    }), (0,
                                    a.jsxs)("p", {
                                        children: [(0,
                                        a.jsx)("strong", {
                                            children: "Initial liquidity burned"
                                        }), " The project's initial liquidity has been permanently burned. "]
                                    })]
                                }), (0,
                                a.jsxs)("li", {
                                    children: [(0,
                                    a.jsxs)("svg", {
                                        viewBox: "0 0 24 23",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0,
                                        a.jsx)("path", {
                                            d: "M10.3812 13.3455C11.2641 14.2356 10.0133 16.8691 9.27754 18.3527C9.64543 18.5382 10.7123 18.9091 12.0367 18.9091C13.3611 18.9091 14.0601 18.5382 14.2441 18.3527C13.8762 17.4255 13.1404 15.7935 13.1404 14.4582C13.1404 13.1229 14.2441 12.4182 14.7959 12.2327C16.4514 12.2327 17.831 11.6764 19.2106 10.5636C21.4179 8.78327 21.234 6.11273 20.8661 5C20.6821 5.37091 20.1471 6.35436 19.2106 6.66909C17.5551 7.22545 17.0032 6.11273 14.7959 6.66909C13.511 6.99294 11.8528 8.89455 11.4849 10.0073C10.933 9.08 10.0501 7.55927 8.7257 6.66909C7.07019 5.55636 5.41469 6.66909 3.75918 6.66909C2.87624 6.66909 1.36789 5.92727 1 5.55636C1.36789 7.04 2.76587 10.3411 5.41469 11.6764C8.7257 13.3455 9.27754 12.2327 10.3812 13.3455Z",
                                            strokeWidth: "1.5",
                                            strokeLinejoin: "round"
                                        }), (0,
                                        a.jsx)("path", {
                                            d: "M10.5138 15.8486C7.29625 16.121 4.86328 17.3823 4.86328 18.8971C4.86328 20.6108 7.97694 22 11.8178 22C15.6587 22 18.7724 20.6108 18.7724 18.8971C18.7724 17.4204 16.4604 16.1846 13.3633 15.8711",
                                            strokeWidth: "1.5"
                                        }), (0,
                                        a.jsx)("path", {
                                            d: "M15 4.99708L17.7714 7.5277L22.5718 1",
                                            stroke: "#21D084",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })]
                                    }), (0,
                                    a.jsxs)("p", {
                                        children: [(0,
                                        a.jsx)("strong", {
                                            children: "Whale filter"
                                        }), " This means the top 10 holders control less than 20% of the supply and no single wallet holds more than 5%."]
                                    })]
                                }), (0,
                                a.jsxs)("li", {
                                    children: [(0,
                                    a.jsxs)("svg", {
                                        width: "25",
                                        height: "23",
                                        viewBox: "0 0 25 23",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0,
                                        a.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M22 5.49057L9.85245 22L1 13.9211L3.98443 10.8027L9.20416 15.5663L18.4504 3L22 5.49057Z",
                                            strokeWidth: "2",
                                            strokeLinecap: "square",
                                            strokeLinejoin: "round"
                                        }), (0,
                                        a.jsx)("path", {
                                            d: "M16 4.99708L18.7714 7.5277L23.5718 1",
                                            stroke: "#21D084",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })]
                                    }), (0,
                                    a.jsxs)("p", {
                                        children: [(0,
                                        a.jsx)("strong", {
                                            children: "Verified token"
                                        }), " This token has verified X socials and/or website."]
                                    })]
                                })]
                            })
                        })
                    }), (0,
                    a.jsx)("button", {
                        className: "modal-close is-large",
                        "aria-label": "close",
                        onClick: () => O(!1)
                    })]
                }), d && (0,
                a.jsx)(k.A, {}), (0,
                a.jsxs)("div", {
                    className: "token-grid-actionbar",
                    children: ["gainers" != g && "" != g ? (0,
                    a.jsx)("div", {
                        className: "select",
                        children: (0,
                        a.jsxs)("select", {
                            id: "grid_actionbar_timeframe",
                            onChange: e => {
                                S(e.target.value),
                                x(""),
                                r(t => ({
                                    ...t,
                                    sort: "",
                                    top_timeperiod: e.target.value
                                }))
                            }
                            ,
                            value: _,
                            children: [(0,
                            a.jsx)("option", {
                                value: "5m",
                                children: "Last 5 minutes"
                            }), (0,
                            a.jsx)("option", {
                                value: "1h",
                                children: "Last hour"
                            }), (0,
                            a.jsx)("option", {
                                value: "6h",
                                children: "Last 6 hours"
                            }), (0,
                            a.jsx)("option", {
                                value: "24h",
                                children: "Last 24 hours"
                            })]
                        })
                    }) : (0,
                    a.jsx)(a.Fragment, {}), (0,
                    a.jsxs)("div", {
                        className: "grid-actionbar-type",
                        children: [(0,
                        a.jsx)("div", {
                            className: "select",
                            children: (0,
                            a.jsx)("select", {
                                id: "grid_options_select",
                                value: g,
                                onChange: e => {
                                    j(e.target.value),
                                    x(""),
                                    r(t => ({
                                        ...t,
                                        selectedOption: e.target.value,
                                        sort: ""
                                    }))
                                }
                                ,
                                children: C.map(e => (0,
                                a.jsx)("option", {
                                    value: e.value,
                                    children: e.label
                                }, e.value))
                            })
                        }), (0,
                        a.jsxs)("div", {
                            id: "top-options",
                            className: "top" == g ? "options is-active" : "options",
                            children: [(0,
                            a.jsx)("button", {
                                className: "volume" == M ? "button is-small is-active" : "button is-small",
                                title: "Highest volume",
                                onClick: () => en("top_type", "volume", W),
                                children: "Volume"
                            }), (0,
                            a.jsx)("button", {
                                style: {
                                    marginLeft: "5px"
                                },
                                className: "txns" == M ? "button is-small is-active" : "button is-small",
                                title: "Most transactions",
                                onClick: () => en("top_type", "txns", W),
                                children: "Txns"
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            id: "gainers-options",
                            className: "gainers" == g ? "options is-active" : "options",
                            children: [(0,
                            a.jsx)("button", {
                                className: "5m" == v ? "button is-small is-active" : "button is-small",
                                title: "Past 5 minutes",
                                onClick: () => en("gainer_timeperiod", "5m", w),
                                children: "5m"
                            }), (0,
                            a.jsx)("button", {
                                style: {
                                    marginLeft: "5px"
                                },
                                className: "1h" == v ? "button is-small is-active" : "button is-small",
                                title: "Past hour",
                                onClick: () => en("gainer_timeperiod", "1h", w),
                                children: "1h"
                            }), (0,
                            a.jsx)("button", {
                                style: {
                                    marginLeft: "5px"
                                },
                                className: "24h" == v ? "button is-small is-active" : "button is-small",
                                title: "Past 24 hours",
                                onClick: () => en("gainer_timeperiod", "24h", w),
                                children: "24h"
                            }), (0,
                            a.jsx)("button", {
                                style: {
                                    marginLeft: "5px"
                                },
                                className: "7d" == v ? "button is-small is-active" : "button is-small",
                                title: "Past 7 days",
                                onClick: () => en("gainer_timeperiod", "7d", w),
                                children: "7d"
                            })]
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        id: "grid_actionbar_audit",
                        className: "grid-actionbar-audit",
                        children: [(0,
                        a.jsx)("p", {
                            children: "Features"
                        }), (0,
                        a.jsx)("a", {
                            id: "audit_blackhole",
                            role: "button",
                            title: "Black-holed",
                            className: !0 == F ? "is-active" : "",
                            onClick: () => en("blackholedIndicator", !F, T),
                            children: (0,
                            a.jsxs)("svg", {
                                width: "25",
                                height: "23",
                                viewBox: "0 0 25 23",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0,
                                a.jsx)("ellipse", {
                                    cx: "12",
                                    cy: "16.5",
                                    rx: "11",
                                    ry: "5.5",
                                    strokeWidth: "2"
                                }), (0,
                                a.jsx)("path", {
                                    d: "M22.0032 18.7918C20.2652 16.8984 16.44 15.5835 12.0006 15.5835C7.56123 15.5835 3.73606 16.8984 1.99805 18.7918",
                                    strokeWidth: "2"
                                }), (0,
                                a.jsx)("path", {
                                    className: "icon-check",
                                    d: "M16 4.99708L18.7714 7.5277L23.5718 1",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            })
                        }), (0,
                        a.jsx)("a", {
                            id: "audit_burned",
                            role: "button",
                            title: "Initial liquidity burned",
                            className: !0 == I ? "is-active" : "",
                            onClick: () => en("burnedIndicator", !I, R),
                            children: (0,
                            a.jsxs)("svg", {
                                width: "25",
                                height: "23",
                                viewBox: "0 0 25 23",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0,
                                a.jsx)("path", {
                                    className: "icon-check",
                                    d: "M16 4.99708L18.7714 7.5277L23.5718 1",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), (0,
                                a.jsx)("path", {
                                    d: "M15 15.0555C15 18.8909 11.866 22 8 22C4.13401 22 1 18.8909 1 15.0555C1 13.813 1.53016 11.5589 2.10634 9.92683L3.26799 12.3963C4.48497 8.33537 5.64662 6.16768 8.74437 4C9.60178 8.66463 15 11.2202 15 15.0555Z",
                                    strokeWidth: "2",
                                    strokeLinejoin: "round"
                                }), (0,
                                a.jsx)("path", {
                                    d: "M10.7184 19.215C10.7184 20.7532 9.46149 22 7.91107 22C6.36064 22 5.28125 20.7532 5.28125 19.215C5.28125 16.8281 6.92289 14.7813 8.16522 13.5488C8.50908 15.4195 10.7184 17.6769 10.7184 19.215Z",
                                    strokeWidth: "2",
                                    strokeLinejoin: "round"
                                })]
                            })
                        }), (0,
                        a.jsx)("a", {
                            id: "audit_whale",
                            role: "button",
                            title: "Whale filter",
                            className: !0 == D ? "is-active" : "",
                            onClick: () => en("whaleIndicator", !D, P),
                            children: (0,
                            a.jsxs)("svg", {
                                width: "24",
                                height: "23",
                                viewBox: "0 0 24 23",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0,
                                a.jsx)("path", {
                                    d: "M10.3812 13.3455C11.2641 14.2356 10.0133 16.8691 9.27754 18.3527C9.64543 18.5382 10.7123 18.9091 12.0367 18.9091C13.3611 18.9091 14.0601 18.5382 14.2441 18.3527C13.8762 17.4255 13.1404 15.7935 13.1404 14.4582C13.1404 13.1229 14.2441 12.4182 14.7959 12.2327C16.4514 12.2327 17.831 11.6764 19.2106 10.5636C21.4179 8.78327 21.234 6.11273 20.8661 5C20.6821 5.37091 20.1471 6.35436 19.2106 6.66909C17.5551 7.22545 17.0032 6.11273 14.7959 6.66909C13.511 6.99294 11.8528 8.89455 11.4849 10.0073C10.933 9.08 10.0501 7.55927 8.7257 6.66909C7.07019 5.55636 5.41469 6.66909 3.75918 6.66909C2.87624 6.66909 1.36789 5.92727 1 5.55636C1.36789 7.04 2.76587 10.3411 5.41469 11.6764C8.7257 13.3455 9.27754 12.2327 10.3812 13.3455Z",
                                    strokeWidth: "2",
                                    strokeLinejoin: "round"
                                }), (0,
                                a.jsx)("path", {
                                    d: "M10.5138 15.8486C7.29625 16.121 4.86328 17.3823 4.86328 18.8971C4.86328 20.6108 7.97694 22 11.8178 22C15.6587 22 18.7724 20.6108 18.7724 18.8971C18.7724 17.4204 16.4604 16.1846 13.3633 15.8711",
                                    strokeWidth: "2"
                                }), (0,
                                a.jsx)("path", {
                                    className: "icon-check",
                                    d: "M15 4.99708L17.7714 7.5277L22.5718 1",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            })
                        }), (0,
                        a.jsx)("a", {
                            id: "audit_verified",
                            role: "button",
                            title: "Verified token",
                            className: !0 == E ? "is-active" : "",
                            onClick: () => en("verifiedIndicator", !E, B),
                            children: (0,
                            a.jsxs)("svg", {
                                width: "25",
                                height: "23",
                                viewBox: "0 0 25 23",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0,
                                a.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M22 5.49057L9.85245 22L1 13.9211L3.98443 10.8027L9.20416 15.5663L18.4504 3L22 5.49057Z",
                                    strokeWidth: "2",
                                    strokeLinecap: "square",
                                    strokeLinejoin: "round"
                                }), (0,
                                a.jsx)("path", {
                                    className: "icon-check",
                                    d: "M16 4.99708L18.7714 7.5277L23.5718 1",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            })
                        }), (0,
                        a.jsx)("a", {
                            role: "button",
                            className: "info-button",
                            title: "More info",
                            onClick: () => O(!0),
                            children: (0,
                            a.jsxs)("svg", {
                                width: "13",
                                height: "13",
                                viewBox: "0 0 13 13",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0,
                                a.jsx)("circle", {
                                    cx: "6.40897",
                                    cy: "6.59103",
                                    r: "5.40897",
                                    strokeWidth: "1.5"
                                }), (0,
                                a.jsx)("path", {
                                    d: "M6.40897 6.36405V9.6686M6.40897 3.51347L6.40897 3.59896",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round"
                                })]
                            })
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        id: "grid_actionbar_launch",
                        className: "grid-actionbar-audit",
                        children: [(0,
                        a.jsx)("p", {
                            children: "Launch style"
                        }), (0,
                        a.jsx)("a", {
                            id: "launch_fl",
                            role: "button",
                            title: "First Ledger launch",
                            className: !0 == $ ? "is-active" : "",
                            onClick: () => en("launchStyleFirstLedger", !$, V),
                            children: (0,
                            a.jsxs)("svg", {
                                width: "24",
                                height: "22",
                                viewBox: "0 0 24 22",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0,
                                a.jsx)("rect", {
                                    x: "2",
                                    y: "6",
                                    width: "13",
                                    height: "13",
                                    strokeWidth: "3"
                                }), (0,
                                a.jsx)("path", {
                                    className: "icon-check",
                                    d: "M15 4.99708L17.7714 7.5277L22.5718 1",
                                    stroke: "#21D084",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), (0,
                                a.jsx)("line", {
                                    x1: "3.06066",
                                    y1: "6.93934",
                                    x2: "9.06066",
                                    y2: "12.9393",
                                    strokeWidth: "3",
                                    strokeLinecap: "round"
                                })]
                            })
                        }), (0,
                        a.jsx)("a", {
                            id: "launch_bond",
                            role: "button",
                            title: "Bonding Curve launch",
                            className: !0 == X ? "is-active" : "",
                            onClick: () => en("launchStyleBondingCurve", !X, z),
                            children: (0,
                            a.jsxs)("svg", {
                                width: "24",
                                height: "23",
                                viewBox: "0 0 24 23",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0,
                                a.jsx)("path", {
                                    d: "M17 5C17 13.2843 10.2843 20 2 20",
                                    strokeWidth: "3",
                                    strokeLinecap: "round"
                                }), (0,
                                a.jsx)("path", {
                                    className: "icon-check",
                                    d: "M15 4.99708L17.7714 7.5277L22.5718 1",
                                    stroke: "#21D084",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            })
                        }), (0,
                        a.jsx)("a", {
                            id: "launch_standard",
                            role: "button",
                            title: "Standard launch",
                            className: !0 == H ? "is-active" : "",
                            onClick: () => en("launchStyleStandard", !H, Z),
                            children: (0,
                            a.jsxs)("svg", {
                                width: "24",
                                height: "23",
                                viewBox: "0 0 24 23",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0,
                                a.jsx)("rect", {
                                    x: "1",
                                    y: "6",
                                    width: "16",
                                    height: "16",
                                    strokeWidth: "2"
                                }), (0,
                                a.jsx)("path", {
                                    className: "icon-check",
                                    d: "M15 4.99708L17.7714 7.5277L22.5718 1",
                                    stroke: "#21D084",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            })
                        }), (0,
                        a.jsx)("a", {
                            role: "button",
                            className: "info-button is-active",
                            title: "More info",
                            onClick: () => q(!0),
                            children: (0,
                            a.jsxs)("svg", {
                                width: "13",
                                height: "13",
                                viewBox: "0 0 13 13",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0,
                                a.jsx)("circle", {
                                    cx: "6.40897",
                                    cy: "6.59103",
                                    r: "5.40897",
                                    strokeWidth: "1.5"
                                }), (0,
                                a.jsx)("path", {
                                    d: "M6.40897 6.36405V9.6686M6.40897 3.51347L6.40897 3.59896",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round"
                                })]
                            })
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "control",
                        children: [(0,
                        a.jsx)("input", {
                            className: "input",
                            type: "text",
                            id: "find_token_input",
                            placeholder: "Find token",
                            value: o,
                            onChange: e => {
                                let t = e.target.value;
                                c(t),
                                K.current && clearTimeout(K.current),
                                K.current = setTimeout( () => {
                                    (t.length >= 3 || "" == t) && ee(s.sort, s.sortDir, t, s.selectedOption, s.top_type, s.blackholedIndicator, s.burnedIndicator, s.whaleIndicator, s.verifiedIndicator, s.launchStyleFirstLedger, s.launchStyleBondingCurve, s.launchStyleStandard),
                                    K.current = null
                                }
                                , 1e3)
                            }
                        }), (0,
                        a.jsx)("button", {
                            id: "find_token_input_clear",
                            className: "delete",
                            "aria-label": "close"
                        })]
                    }), (0,
                    a.jsx)("button", {
                        className: "button",
                        onClick: () => es(),
                        children: "Reset"
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "token-grid-wrap",
                    children: (0,
                    a.jsxs)("div", {
                        className: "token-grid",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "grid sticky",
                            children: [(0,
                            a.jsx)("div", {
                                className: "grid-header fixed-left"
                            }), (0,
                            a.jsxs)("div", {
                                className: "grid-header",
                                onClick: () => ea("price"),
                                children: ["Price ", ei("price")]
                            }), (0,
                            a.jsxs)("div", {
                                className: "grid-header cursor-pointer",
                                onClick: () => ea("change_5m"),
                                children: ["5m ", ei("change_5m")]
                            }), (0,
                            a.jsxs)("div", {
                                className: "grid-header cursor-pointer",
                                onClick: () => ea("change_1h"),
                                children: ["1h ", ei("change_1h")]
                            }), (0,
                            a.jsxs)("div", {
                                className: "grid-header cursor-pointer",
                                onClick: () => ea("change_24h"),
                                children: ["24h ", ei("change_24h")]
                            }), (0,
                            a.jsxs)("div", {
                                className: "grid-header cursor-pointer",
                                onClick: () => ea("change_7d"),
                                children: ["7d ", ei("change_7d")]
                            }), (0,
                            a.jsxs)("div", {
                                className: "grid-header cursor-pointer",
                                onClick: () => ea("volume_24h"),
                                children: ["24h Vol ", ei("volume_24h")]
                            }), (0,
                            a.jsxs)("div", {
                                className: "grid-header cursor-pointer",
                                onClick: () => ea("volume_change24h"),
                                children: ["24h vol chg ", ei("volume_change24h")]
                            }), (0,
                            a.jsxs)("div", {
                                className: "grid-header cursor-pointer",
                                onClick: () => ea("volume_total"),
                                children: ["Total vol ", ei("volume_total")]
                            }), (0,
                            a.jsxs)("div", {
                                className: "grid-header cursor-pointer",
                                onClick: () => ea("created"),
                                children: ["Created ", ei("created")]
                            }), (0,
                            a.jsxs)("div", {
                                className: "grid-header cursor-pointer",
                                onClick: () => ea("tvl"),
                                children: ["TVL ", ei("tvl")]
                            }), (0,
                            a.jsxs)("div", {
                                className: "grid-header cursor-pointer",
                                onClick: () => ea("market_cap"),
                                children: ["Market cap ", ei("market_cap")]
                            }), (0,
                            a.jsxs)("div", {
                                className: "grid-header cursor-pointer",
                                onClick: () => ea("holders"),
                                children: ["Holders ", ei("holders")]
                            }), (0,
                            a.jsx)("div", {
                                className: "grid-header",
                                children: "Details"
                            }), (0,
                            a.jsx)("div", {
                                className: "grid-header",
                                children: "Links"
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "grid-links",
                            children: u.map( (e, t) => (0,
                            a.jsxs)("a", {
                                className: "grid",
                                href: "/token/" + e.issuer + "/" + encodeURIComponent(e.currency),
                                children: [(0,
                                a.jsx)("div", {
                                    className: "grid-entry fixed-left token-info",
                                    children: (0,
                                    a.jsxs)("div", {
                                        className: "is-flex",
                                        children: [(0,
                                        a.jsxs)("div", {
                                            className: "image",
                                            children: [e.verified ? (0,
                                            a.jsx)("div", {
                                                className: "verified",
                                                title: "Verified socials"
                                            }) : (0,
                                            a.jsx)(a.Fragment, {}), null != e.image_ref && "" != e.image_ref ? (0,
                                            a.jsx)("img", {
                                                src: e.image_ref,
                                                alt: ""
                                            }) : (0,
                                            a.jsx)("img", {
                                                src: "/images/tokens/placeholder.png",
                                                alt: ""
                                            })]
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "description",
                                            children: [(0,
                                            a.jsxs)("div", {
                                                className: "title",
                                                children: ["$", e.currency_normalized]
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "issuer",
                                                children: e.issuer
                                            })]
                                        })]
                                    })
                                }), (0,
                                a.jsx)(y.A, {
                                    data: e.price_xrp
                                }), (0,
                                a.jsx)(N.A, {
                                    data: null,
                                    data2: e.change_5m
                                }), (0,
                                a.jsx)(N.A, {
                                    data: null,
                                    data2: e.change_1h
                                }), (0,
                                a.jsx)(N.A, {
                                    data: null,
                                    data2: e.change_24h
                                }), (0,
                                a.jsx)(N.A, {
                                    data: null,
                                    data2: e.change_7d
                                }), (0,
                                a.jsxs)("div", {
                                    className: "grid-entry",
                                    children: [(0,
                                    n.m4)(e.volume_24h, 2), " XRP"]
                                }), (0,
                                a.jsx)(y.A, {
                                    data: null,
                                    data2: e.volume_change24h
                                }), (0,
                                a.jsxs)("div", {
                                    className: "grid-entry",
                                    children: [(0,
                                    n.mW)((0,
                                    n.$1)(e.total_volume)), " XRP"]
                                }), (0,
                                a.jsx)("div", {
                                    className: "grid-entry",
                                    children: (0,
                                    n.fF)(e.created)
                                }), (0,
                                a.jsxs)("div", {
                                    className: "grid-entry",
                                    children: ["$", (0,
                                    n.$1)(e.TVL)]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "grid-entry",
                                    children: ["$", (0,
                                    n.$1)(e.market_cap)]
                                }), (0,
                                a.jsx)("div", {
                                    className: "grid-entry",
                                    children: e.holders
                                }), (0,
                                a.jsxs)("div", {
                                    className: "grid-entry",
                                    children: [1 == e.renounced ? (0,
                                    a.jsx)("div", {
                                        className: "audit-icon",
                                        children: (0,
                                        a.jsx)("span", {
                                            className: "icon",
                                            children: (0,
                                            a.jsxs)("svg", {
                                                width: "23",
                                                height: "27",
                                                viewBox: "0 0 23 27",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0,
                                                a.jsx)("path", {
                                                    d: "M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055",
                                                    stroke: "#00D079",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }), (0,
                                                a.jsx)("ellipse", {
                                                    cx: "11.5",
                                                    cy: "20.75",
                                                    rx: "10.5",
                                                    ry: "5.25",
                                                    fill: "#00D079",
                                                    stroke: "#00D079",
                                                    strokeWidth: "2"
                                                }), (0,
                                                a.jsx)("ellipse", {
                                                    cx: "11.5",
                                                    cy: "22.5",
                                                    rx: "5.83333",
                                                    ry: "2.33333",
                                                    fill: "#00D079",
                                                    stroke: "#00D079",
                                                    strokeWidth: "2"
                                                })]
                                            })
                                        })
                                    }) : (0,
                                    a.jsx)(a.Fragment, {}), 1 == e.lp_burnt ? (0,
                                    a.jsx)("div", {
                                        className: "audit-icon",
                                        children: (0,
                                        a.jsx)("span", {
                                            className: "icon",
                                            children: (0,
                                            a.jsxs)("svg", {
                                                width: "18",
                                                height: "23",
                                                viewBox: "0 0 18 23",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0,
                                                a.jsx)("path", {
                                                    d: "M16.8179 13.591C16.8179 17.959 13.277 21.5 8.90897 21.5C4.54097 21.5 1 17.959 1 13.591C1 12.1759 1.599 9.60873 2.25 7.75L3.5625 10.5625C4.9375 5.9375 6.25 3.46875 9.75 1C10.7188 6.3125 16.8179 9.22302 16.8179 13.591Z",
                                                    stroke: "#4BC68F",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round"
                                                }), (0,
                                                a.jsx)("path", {
                                                    d: "M11.9805 18.3282C11.9805 20.0799 10.5605 21.5 8.80871 21.5C7.05696 21.5 5.8374 20.0799 5.8374 18.3282C5.8374 15.6097 7.69222 13.2786 9.09587 11.875C9.48437 14.0055 11.9805 16.5764 11.9805 18.3282Z",
                                                    stroke: "#4BC68F",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round"
                                                })]
                                            })
                                        })
                                    }) : (0,
                                    a.jsx)(a.Fragment, {}), 1 == e.whale_indicator ? (0,
                                    a.jsx)("div", {
                                        className: "audit-icon",
                                        children: (0,
                                        a.jsx)("span", {
                                            className: "icon",
                                            children: (0,
                                            a.jsxs)("svg", {
                                                width: "31",
                                                height: "25",
                                                viewBox: "0 0 31 25",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0,
                                                a.jsx)("path", {
                                                    d: "M14.2441 12.7818C15.4906 14.0385 13.7247 17.7564 12.6859 19.8509C13.2053 20.1127 14.7115 20.6364 16.5812 20.6364C18.451 20.6364 19.4378 20.1127 19.6975 19.8509C19.1781 18.5418 18.1394 16.2378 18.1394 14.3527C18.1394 12.4676 19.6975 11.4727 20.4766 11.2109C22.8137 11.2109 24.7614 10.4255 26.7091 8.85455C29.8253 6.34109 29.5656 2.57091 29.0462 1C28.7866 1.52364 28.0312 2.91204 26.7091 3.35636C24.3719 4.14182 23.5928 2.57091 20.4766 3.35636C18.6626 3.81357 16.3216 6.49818 15.8022 8.06909C15.0231 6.76 13.7766 4.61309 11.9069 3.35636C9.56968 1.78545 7.2325 3.35636 4.89531 3.35636C3.64881 3.35636 1.51937 2.30909 1 1.78545C1.51937 3.88 3.493 8.54036 7.2325 10.4255C11.9069 12.7818 12.6859 11.2109 14.2441 12.7818Z",
                                                    stroke: "#4BC68F",
                                                    strokeWidth: "1.5",
                                                    strokeLinejoin: "round"
                                                }), (0,
                                                a.jsx)("path", {
                                                    d: "M16.2727 25C21.6952 25 26.0909 23.0387 26.0909 20.6194C26.0909 18.5347 22.8269 16.79 18.4545 16.3474L20.0909 20.0909L18.4545 21.1818L12.4545 20.6364L13 17.9091L14.4318 16.3157C9.88932 16.7002 6.45454 18.4808 6.45454 20.6194C6.45454 23.0387 10.8503 25 16.2727 25Z",
                                                    fill: "#4BC68F"
                                                })]
                                            })
                                        })
                                    }) : (0,
                                    a.jsx)(a.Fragment, {}), 0 == e.origin ? (0,
                                    a.jsx)("div", {
                                        className: "audit-icon",
                                        title: "First Ledger launch",
                                        children: (0,
                                        a.jsx)("span", {
                                            className: "icon",
                                            children: (0,
                                            a.jsxs)("svg", {
                                                width: "19",
                                                height: "19",
                                                viewBox: "0 0 19 19",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0,
                                                a.jsx)("path", {
                                                    d: "M2 1.50821H17.4918V17H2V1.50821Z",
                                                    stroke: "#4BC68F",
                                                    strokeWidth: "3"
                                                }), (0,
                                                a.jsx)("path", {
                                                    d: "M3.10655 2.61478L10.8525 9.25412",
                                                    stroke: "#4BC68F",
                                                    strokeWidth: "3",
                                                    strokeLinecap: "round"
                                                })]
                                            })
                                        })
                                    }) : (0,
                                    a.jsx)(a.Fragment, {}), 1 == e.origin ? (0,
                                    a.jsx)("div", {
                                        className: "audit-icon",
                                        title: "Bonding curve launch",
                                        children: (0,
                                        a.jsx)("span", {
                                            className: "icon",
                                            children: (0,
                                            a.jsx)("svg", {
                                                width: "17",
                                                height: "18",
                                                viewBox: "0 0 17 18",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: (0,
                                                a.jsx)("path", {
                                                    d: "M16 1C16 9.83656 9.28427 17 1 17",
                                                    stroke: "#4BC68F",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round"
                                                })
                                            })
                                        })
                                    }) : (0,
                                    a.jsx)(a.Fragment, {}), 2 == e.origin ? (0,
                                    a.jsx)("div", {
                                        className: "audit-icon",
                                        title: "Standard launch",
                                        children: (0,
                                        a.jsx)("span", {
                                            className: "icon",
                                            children: (0,
                                            a.jsx)("svg", {
                                                width: "19",
                                                height: "19",
                                                viewBox: "0 0 19 19",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: (0,
                                                a.jsx)("path", {
                                                    d: "M2 1.50821H17.4918V17H2V1.50821Z",
                                                    stroke: "#4BC68F",
                                                    strokeWidth: "3"
                                                })
                                            })
                                        })
                                    }) : (0,
                                    a.jsx)(a.Fragment, {})]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "grid-entry",
                                    children: [null != e.twitter && "" != e.twitter ? (0,
                                    a.jsx)("button", {
                                        className: "button social-link",
                                        onClick: t => (0,
                                        f.o)("https://x.com/" + e.twitter, !0, t),
                                        children: (0,
                                        a.jsx)("span", {
                                            className: "icon",
                                            children: (0,
                                            a.jsxs)("svg", {
                                                width: "15",
                                                height: "15",
                                                viewBox: "0 0 15 15",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0,
                                                a.jsx)("g", {
                                                    children: (0,
                                                    a.jsx)("path", {
                                                        d: "M8.92704 6.34822L14.5111 0H13.1879L8.33921 5.51207L4.4666 0H0L5.85615 8.33522L0 14.9923H1.32332L6.44364 9.17137L10.5334 14.9923H15L8.92671 6.34822H8.92704ZM7.11456 8.40866L6.52121 7.57866L1.80014 0.974259H3.83269L7.64265 6.30422L8.236 7.13422L13.1885 14.0623H11.156L7.11456 8.40897V8.40866Z",
                                                        fill: "var(--neutral-darkest)"
                                                    })
                                                }), (0,
                                                a.jsx)("defs", {})]
                                            })
                                        })
                                    }) : (0,
                                    a.jsx)(a.Fragment, {}), null != e.website && "" != e.website ? (0,
                                    a.jsx)("button", {
                                        className: "button social-link",
                                        onClick: t => (0,
                                        f.o)(e.website, !0, t),
                                        children: (0,
                                        a.jsx)("span", {
                                            className: "icon",
                                            children: (0,
                                            a.jsxs)("svg", {
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 18 18",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0,
                                                a.jsx)("circle", {
                                                    cx: "9.15897",
                                                    cy: "8.90897",
                                                    r: "7.90897",
                                                    stroke: "var(--neutral-darkest)",
                                                    strokeWidth: "1.5"
                                                }), (0,
                                                a.jsx)("ellipse", {
                                                    cx: "9",
                                                    cy: "9",
                                                    rx: "3",
                                                    ry: "8",
                                                    stroke: "var(--neutral-darkest)",
                                                    strokeWidth: "1.5"
                                                }), (0,
                                                a.jsx)("line", {
                                                    x1: "1",
                                                    y1: "9.25",
                                                    x2: "17",
                                                    y2: "9.25",
                                                    stroke: "var(--neutral-darkest)",
                                                    strokeWidth: "1.5"
                                                })]
                                            })
                                        })
                                    }) : (0,
                                    a.jsx)(a.Fragment, {})]
                                })]
                            }, t))
                        })]
                    })
                }), (0,
                a.jsx)("div", {
                    className: "buttons",
                    children: (0,
                    a.jsx)(b(), {
                        className: "button is-primary",
                        href: "/tokens",
                        children: "More tokens"
                    })
                })]
            })
        }
        let S = () => {
            (0,
            i.useContext)(r.A);
            let[e,t] = (0,
            i.useState)(!1)
              , [s,n] = (0,
            i.useState)("")
              , [l,o] = (0,
            i.useState)(!1)
              , [c,d] = (0,
            i.useState)(!1);
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("div", {
                    id: "modal_resources",
                    className: "modal is-spaced ".concat(l ? "is-active" : ""),
                    children: [(0,
                    a.jsx)("div", {
                        className: "modal-background",
                        onClick: () => o(!1)
                    }), (0,
                    a.jsx)("div", {
                        className: "modal-card",
                        children: (0,
                        a.jsxs)("section", {
                            className: "modal-card-body content",
                            children: [(0,
                            a.jsx)("h3", {
                                children: "Resources for new traders"
                            }), (0,
                            a.jsxs)("ul", {
                                children: [(0,
                                a.jsx)("li", {
                                    children: (0,
                                    a.jsx)("a", {
                                        href: "https://docs.firstledger.net/",
                                        target: "_blank",
                                        children: "First Ledger docs"
                                    })
                                }), (0,
                                a.jsx)("li", {
                                    children: (0,
                                    a.jsx)("a", {
                                        href: "https://www.mayoclinic.org/diseases-conditions/compulsive-gambling/symptoms-causes/syc-20355178",
                                        target: "_blank",
                                        children: "Compulsive gambling - Symptoms & causes"
                                    })
                                })]
                            })]
                        })
                    })]
                }), (0,
                a.jsxs)("div", {
                    id: "modal_trolls",
                    className: "modal is-spaced ".concat(c ? "is-active" : ""),
                    children: [(0,
                    a.jsx)("div", {
                        className: "modal-background",
                        onClick: () => d(!1)
                    }), (0,
                    a.jsx)("div", {
                        className: "modal-card",
                        children: (0,
                        a.jsxs)("section", {
                            className: "modal-card-body content",
                            children: [(0,
                            a.jsx)("h3", {
                                children: "Resources for shitheads"
                            }), (0,
                            a.jsxs)("ul", {
                                children: [(0,
                                a.jsx)("li", {
                                    children: (0,
                                    a.jsx)("a", {
                                        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                        target: "_blank",
                                        children: "How to be a good person"
                                    })
                                }), (0,
                                a.jsx)("li", {
                                    children: (0,
                                    a.jsx)("a", {
                                        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                        target: "_blank",
                                        children: "ACLU"
                                    })
                                }), (0,
                                a.jsx)("li", {
                                    children: (0,
                                    a.jsx)("a", {
                                        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                        target: "_blank",
                                        children: "Complain here"
                                    })
                                })]
                            })]
                        })
                    })]
                }), (0,
                a.jsx)("section", {
                    id: "video_intro",
                    className: "section is-medium",
                    children: (0,
                    a.jsxs)("div", {
                        className: "container",
                        children: [(0,
                        a.jsx)("h2", {
                            className: "title is-3 has-text-centered is-spaced",
                            children: "First Ledger quick start"
                        }), (0,
                        a.jsx)("div", {
                            id: "short_intro",
                            className: "tabcontent my my-6",
                            children: (0,
                            a.jsx)("iframe", {
                                width: "560",
                                src: "https://www.youtube.com/embed/PNyIAbZiGqM?si=YyPFxqglGv03BLf6",
                                title: "YouTube video player",
                                frameBorder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                referrerPolicy: "strict-origin-when-cross-origin"
                            })
                        })]
                    })
                }), (0,
                a.jsx)("section", {
                    id: "imposters",
                    className: "section is-medium",
                    children: (0,
                    a.jsx)("div", {
                        className: "container",
                        children: (0,
                        a.jsxs)("div", {
                            className: "columns",
                            children: [(0,
                            a.jsx)("div", {
                                className: "column is-3",
                                children: (0,
                                a.jsx)("img", {
                                    src: "/images/firstledger_imposter.webp",
                                    width: "280",
                                    alt: ""
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "column is-flex is-align-items-center is-size-4",
                                children: (0,
                                a.jsxs)("div", {
                                    className: "content",
                                    children: [(0,
                                    a.jsx)("h2", {
                                        className: "title is-2 is-spaced",
                                        children: "Beware of imposters"
                                    }), (0,
                                    a.jsx)("p", {
                                        children: "There is only one place for official First Ledger support, watch out for imposters trying to steal from you. We will never DM you or ask for your keys."
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "buttons mt mt-6",
                                        children: (0,
                                        a.jsxs)("a", {
                                            href: "https://t.me/FirstLedgerHome",
                                            className: "button is-medium",
                                            target: "_blank",
                                            children: ["Get support here", (0,
                                            a.jsx)("svg", {
                                                className: "ml ml-3",
                                                width: "9",
                                                height: "10",
                                                viewBox: "0 0 9 10",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: (0,
                                                a.jsx)("path", {
                                                    d: "M1.90501 8.13717L7.98607 2.0561M7.98607 2.0561L2.24284 1.71826M7.98607 2.0561L7.98607 7.4615",
                                                    stroke: "var(--neutral-darker)",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                }), (0,
                a.jsx)("section", {
                    id: "chads",
                    className: "section is-medium",
                    children: (0,
                    a.jsx)("div", {
                        className: "container",
                        children: (0,
                        a.jsxs)("div", {
                            className: "columns",
                            children: [(0,
                            a.jsx)("div", {
                                className: "column is-3",
                                children: (0,
                                a.jsx)("img", {
                                    src: "/images/firstledger_chad.svg",
                                    width: "280",
                                    alt: ""
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "column is-flex is-align-items-center is-size-4",
                                children: (0,
                                a.jsxs)("div", {
                                    className: "content",
                                    children: [(0,
                                    a.jsx)("h2", {
                                        className: "title is-2 is-spaced",
                                        children: "Meme coins are not investments"
                                    }), (0,
                                    a.jsx)("p", {
                                        children: "There will always be sophisticated players trying to take your XRP. This is why having fun with small bags is the best strategy."
                                    }), (0,
                                    a.jsx)("p", {
                                        children: "Seriously, many of these tokens go to zero in an instant."
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "buttons mt mt-6",
                                        children: (0,
                                        a.jsx)("button", {
                                            className: "button is-medium",
                                            onClick: () => o(!0),
                                            children: "Resources"
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                }), (0,
                a.jsx)("section", {
                    id: "trolls",
                    className: "section is-medium",
                    children: (0,
                    a.jsx)("div", {
                        className: "container",
                        children: (0,
                        a.jsxs)("div", {
                            className: "columns",
                            children: [(0,
                            a.jsx)("div", {
                                className: "column is-3",
                                children: (0,
                                a.jsx)("img", {
                                    src: "/images/firstledger_wojak.webp",
                                    width: "240",
                                    alt: ""
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "column is-flex is-align-items-center is-size-4",
                                children: (0,
                                a.jsxs)("div", {
                                    className: "content",
                                    children: [(0,
                                    a.jsx)("h2", {
                                        className: "title is-2 is-spaced",
                                        children: "Hello sh*theads"
                                    }), (0,
                                    a.jsx)("p", {
                                        children: "First Ledger does not censor garbage, but that does not mean we will promote it. If you are creating copyrighted or excessively graphic meme coins, we will hide them from the token list."
                                    }), (0,
                                    a.jsx)("p", {
                                        children: "Just be cool, have fun, and everyone is happy."
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "buttons mt mt-6",
                                        children: (0,
                                        a.jsx)("button", {
                                            className: "button is-medium",
                                            onClick: () => d(!0),
                                            children: "Resources"
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                })]
            })
        }
        ;
        var M = !0;
        let W = e => {
            let {frontPanelData: t} = e;
            (0,
            i.useContext)(r.A);
            let[s,n] = (0,
            i.useState)(!0);
            return (0,
            i.useEffect)( () => {
                let e = localStorage.getItem("cookiesconfirmation");
                void 0 != e && "true" == e || n(!1)
            }
            , []),
            (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("div", {
                    id: "modal_cookie",
                    className: "modal ".concat(!1 == s ? "is-active" : ""),
                    children: (0,
                    a.jsx)("div", {
                        className: "modal-content",
                        children: (0,
                        a.jsxs)("div", {
                            className: "modal-card-body content",
                            children: [(0,
                            a.jsx)("h3", {
                                className: "mb mb-2",
                                children: "Cookie notice"
                            }), (0,
                            a.jsx)("p", {
                                children: "We use cookies to deliver a better user experience."
                            }), (0,
                            a.jsx)("p", {
                                children: (0,
                                a.jsx)("b", {
                                    children: "our site will NOT work in incognito or privacy mode on any browser"
                                })
                            }), (0,
                            a.jsx)("button", {
                                className: "button is-white",
                                onClick: function() {
                                    localStorage.setItem("cookiesconfirmation", "true"),
                                    n(!0),
                                    navigator.storage.persist().then(e => {
                                        e ? console.log("Storage is successfully persisted.") : console.log("Storage is not persisted.")
                                    }
                                    )
                                },
                                children: "Accept"
                            }), "\xa0\xa0\xa0", (0,
                            a.jsx)("button", {
                                className: "button is-red",
                                onClick: function() {
                                    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                },
                                children: "Reject"
                            })]
                        })
                    })
                }), (0,
                a.jsx)(v, {}), (0,
                a.jsx)(_, {
                    frontPanelData: t
                }), (0,
                a.jsx)(S, {})]
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
            for (var t = document.activeElement, s = [], a = 0; a < e.rangeCount; a++)
                s.push(e.getRangeAt(a));
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
                e.rangeCount || s.forEach(function(t) {
                    e.addRange(t)
                }),
                t && t.focus()
            }
        }
    }
    ,
    62636: (e, t, s) => {
        "use strict";
        s.d(t, {
            l$: () => ec,
            Ay: () => ed
        });
        var a, i = s(96540);
        let r = {
            data: ""
        }
          , n = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
            innerHTML: " ",
            id: "_goober"
        })).firstChild : e || r
          , l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g
          , o = /\/\*[^]*?\*\/|  +/g
          , c = /\n+/g
          , d = (e, t) => {
            let s = ""
              , a = ""
              , i = "";
            for (let r in e) {
                let n = e[r];
                "@" == r[0] ? "i" == r[1] ? s = r + " " + n + ";" : a += "f" == r[1] ? d(n, r) : r + "{" + d(n, "k" == r[1] ? "" : t) + "}" : "object" == typeof n ? a += d(n, t ? t.replace(/([^,])+/g, e => r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : r) : null != n && (r = /^--/.test(r) ? r : r.replace(/[A-Z]/g, "-$&").toLowerCase(),
                i += d.p ? d.p(r, n) : r + ":" + n + ";")
            }
            return s + (t && i ? t + "{" + i + "}" : i) + a
        }
          , h = {}
          , u = e => {
            if ("object" == typeof e) {
                let t = "";
                for (let s in e)
                    t += s + u(e[s]);
                return t
            }
            return e
        }
          , m = (e, t, s, a, i) => {
            let r = u(e)
              , n = h[r] || (h[r] = (e => {
                let t = 0
                  , s = 11;
                for (; t < e.length; )
                    s = 101 * s + e.charCodeAt(t++) >>> 0;
                return "go" + s
            }
            )(r));
            if (!h[n]) {
                let t = r !== e ? e : (e => {
                    let t, s, a = [{}];
                    for (; t = l.exec(e.replace(o, "")); )
                        t[4] ? a.shift() : t[3] ? (s = t[3].replace(c, " ").trim(),
                        a.unshift(a[0][s] = a[0][s] || {})) : a[0][t[1]] = t[2].replace(c, " ").trim();
                    return a[0]
                }
                )(e);
                h[n] = d(i ? {
                    ["@keyframes " + n]: t
                } : t, s ? "" : "." + n)
            }
            let m = s && h.g ? h.g : null;
            return s && (h.g = h[n]),
            ( (e, t, s, a) => {
                a ? t.data = t.data.replace(a, e) : -1 === t.data.indexOf(e) && (t.data = s ? e + t.data : t.data + e)
            }
            )(h[n], t, a, m),
            n
        }
          , p = (e, t, s) => e.reduce( (e, a, i) => {
            let r = t[i];
            if (r && r.call) {
                let e = r(s)
                  , t = e && e.props && e.props.className || /^go/.test(e) && e;
                r = t ? "." + t : e && "object" == typeof e ? e.props ? "" : d(e, "") : !1 === e ? "" : e
            }
            return e + a + (null == r ? "" : r)
        }
        , "");
        function x(e) {
            let t = this || {}
              , s = e.call ? e(t.p) : e;
            return m(s.unshift ? s.raw ? p(s, [].slice.call(arguments, 1), t.p) : s.reduce( (e, s) => Object.assign(e, s && s.call ? s(t.p) : s), {}) : s, n(t.target), t.g, t.o, t.k)
        }
        x.bind({
            g: 1
        });
        let g, j, v, f = x.bind({
            k: 1
        });
        function w(e, t) {
            let s = this || {};
            return function() {
                let a = arguments;
                function i(r, n) {
                    let l = Object.assign({}, r)
                      , o = l.className || i.className;
                    s.p = Object.assign({
                        theme: j && j()
                    }, l),
                    s.o = / *go\d+/.test(o),
                    l.className = x.apply(s, a) + (o ? " " + o : ""),
                    t && (l.ref = n);
                    let c = e;
                    return e[0] && (c = l.as || e,
                    delete l.as),
                    v && c[0] && v(l),
                    g(c, l)
                }
                return t ? t(i) : i
            }
        }
        var b = e => "function" == typeof e
          , k = (e, t) => b(e) ? e(t) : e
          , y = ( () => {
            let e = 0;
            return () => (++e).toString()
        }
        )()
          , N = ( () => {
            let e;
            return () => {
                if (void 0 === e && "u" > typeof window) {
                    let t = matchMedia("(prefers-reduced-motion: reduce)");
                    e = !t || t.matches
                }
                return e
            }
        }
        )()
          , C = new Map
          , L = e => {
            if (C.has(e))
                return;
            let t = setTimeout( () => {
                C.delete(e),
                F({
                    type: 4,
                    toastId: e
                })
            }
            , 1e3);
            C.set(e, t)
        }
          , _ = e => {
            let t = C.get(e);
            t && clearTimeout(t)
        }
          , S = (e, t) => {
            switch (t.type) {
            case 0:
                return {
                    ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, 20)
                };
            case 1:
                return t.toast.id && _(t.toast.id),
                {
                    ...e,
                    toasts: e.toasts.map(e => e.id === t.toast.id ? {
                        ...e,
                        ...t.toast
                    } : e)
                };
            case 2:
                let {toast: s} = t;
                return e.toasts.find(e => e.id === s.id) ? S(e, {
                    type: 1,
                    toast: s
                }) : S(e, {
                    type: 0,
                    toast: s
                });
            case 3:
                let {toastId: a} = t;
                return a ? L(a) : e.toasts.forEach(e => {
                    L(e.id)
                }
                ),
                {
                    ...e,
                    toasts: e.toasts.map(e => e.id === a || void 0 === a ? {
                        ...e,
                        visible: !1
                    } : e)
                };
            case 4:
                return void 0 === t.toastId ? {
                    ...e,
                    toasts: []
                } : {
                    ...e,
                    toasts: e.toasts.filter(e => e.id !== t.toastId)
                };
            case 5:
                return {
                    ...e,
                    pausedAt: t.time
                };
            case 6:
                let i = t.time - (e.pausedAt || 0);
                return {
                    ...e,
                    pausedAt: void 0,
                    toasts: e.toasts.map(e => ({
                        ...e,
                        pauseDuration: e.pauseDuration + i
                    }))
                }
            }
        }
          , M = []
          , W = {
            toasts: [],
            pausedAt: void 0
        }
          , F = e => {
            W = S(W, e),
            M.forEach(e => {
                e(W)
            }
            )
        }
          , T = {
            blank: 4e3,
            error: 4e3,
            success: 2e3,
            loading: 1 / 0,
            custom: 4e3
        }
          , I = (e={}) => {
            let[t,s] = (0,
            i.useState)(W);
            (0,
            i.useEffect)( () => (M.push(s),
            () => {
                let e = M.indexOf(s);
                e > -1 && M.splice(e, 1)
            }
            ), [t]);
            let a = t.toasts.map(t => {
                var s, a;
                return {
                    ...e,
                    ...e[t.type],
                    ...t,
                    duration: t.duration || (null == (s = e[t.type]) ? void 0 : s.duration) || (null == e ? void 0 : e.duration) || T[t.type],
                    style: {
                        ...e.style,
                        ...null == (a = e[t.type]) ? void 0 : a.style,
                        ...t.style
                    }
                }
            }
            );
            return {
                ...t,
                toasts: a
            }
        }
          , R = (e, t="blank", s) => ({
            createdAt: Date.now(),
            visible: !0,
            type: t,
            ariaProps: {
                role: "status",
                "aria-live": "polite"
            },
            message: e,
            pauseDuration: 0,
            ...s,
            id: (null == s ? void 0 : s.id) || y()
        })
          , D = e => (t, s) => {
            let a = R(t, e, s);
            return F({
                type: 2,
                toast: a
            }),
            a.id
        }
          , P = (e, t) => D("blank")(e, t);
        P.error = D("error"),
        P.success = D("success"),
        P.loading = D("loading"),
        P.custom = D("custom"),
        P.dismiss = e => {
            F({
                type: 3,
                toastId: e
            })
        }
        ,
        P.remove = e => F({
            type: 4,
            toastId: e
        }),
        P.promise = (e, t, s) => {
            let a = P.loading(t.loading, {
                ...s,
                ...null == s ? void 0 : s.loading
            });
            return e.then(e => (P.success(k(t.success, e), {
                id: a,
                ...s,
                ...null == s ? void 0 : s.success
            }),
            e)).catch(e => {
                P.error(k(t.error, e), {
                    id: a,
                    ...s,
                    ...null == s ? void 0 : s.error
                })
            }
            ),
            e
        }
        ;
        var E = (e, t) => {
            F({
                type: 1,
                toast: {
                    id: e,
                    height: t
                }
            })
        }
          , B = () => {
            F({
                type: 5,
                time: Date.now()
            })
        }
          , A = e => {
            let {toasts: t, pausedAt: s} = I(e);
            (0,
            i.useEffect)( () => {
                if (s)
                    return;
                let e = Date.now()
                  , a = t.map(t => {
                    if (t.duration === 1 / 0)
                        return;
                    let s = (t.duration || 0) + t.pauseDuration - (e - t.createdAt);
                    if (s < 0) {
                        t.visible && P.dismiss(t.id);
                        return
                    }
                    return setTimeout( () => P.dismiss(t.id), s)
                }
                );
                return () => {
                    a.forEach(e => e && clearTimeout(e))
                }
            }
            , [t, s]);
            let a = (0,
            i.useCallback)( () => {
                s && F({
                    type: 6,
                    time: Date.now()
                })
            }
            , [s])
              , r = (0,
            i.useCallback)( (e, s) => {
                let {reverseOrder: a=!1, gutter: i=8, defaultPosition: r} = s || {}
                  , n = t.filter(t => (t.position || r) === (e.position || r) && t.height)
                  , l = n.findIndex(t => t.id === e.id)
                  , o = n.filter( (e, t) => t < l && e.visible).length;
                return n.filter(e => e.visible).slice(...a ? [o + 1] : [0, o]).reduce( (e, t) => e + (t.height || 0) + i, 0)
            }
            , [t]);
            return {
                toasts: t,
                handlers: {
                    updateHeight: E,
                    startPause: B,
                    endPause: a,
                    calculateOffset: r
                }
            }
        }
          , O = f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`
          , $ = f`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`
          , V = f`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`
          , X = w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${$} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${V} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`
          , z = f`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
          , H = w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || "#e0e0e0"};
  border-right-color: ${e => e.primary || "#616161"};
  animation: ${z} 1s linear infinite;
`
          , Z = f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`
          , U = f`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`
          , q = w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`
          , Q = w("div")`
  position: absolute;
`
          , G = w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`
          , J = f`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`
          , Y = w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${J} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`
          , K = ({toast: e}) => {
            let {icon: t, type: s, iconTheme: a} = e;
            return void 0 !== t ? "string" == typeof t ? i.createElement(Y, null, t) : t : "blank" === s ? null : i.createElement(G, null, i.createElement(H, {
                ...a
            }), "loading" !== s && i.createElement(Q, null, "error" === s ? i.createElement(X, {
                ...a
            }) : i.createElement(q, {
                ...a
            })))
        }
          , ee = e => `
0% {transform: translate3d(0,${-200 * e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`
          , et = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150 * e}%,-1px) scale(.6); opacity:0;}
`
          , es = w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`
          , ea = w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`
          , ei = (e, t) => {
            let s = e.includes("top") ? 1 : -1
              , [a,i] = N() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [ee(s), et(s)];
            return {
                animation: t ? `${f(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${f(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
            }
        }
          , er = i.memo( ({toast: e, position: t, style: s, children: a}) => {
            let r = e.height ? ei(e.position || t || "top-center", e.visible) : {
                opacity: 0
            }
              , n = i.createElement(K, {
                toast: e
            })
              , l = i.createElement(ea, {
                ...e.ariaProps
            }, k(e.message, e));
            return i.createElement(es, {
                className: e.className,
                style: {
                    ...r,
                    ...s,
                    ...e.style
                }
            }, "function" == typeof a ? a({
                icon: n,
                message: l
            }) : i.createElement(i.Fragment, null, n, l))
        }
        );
        a = i.createElement,
        d.p = void 0,
        g = a,
        j = void 0,
        v = void 0;
        var en = ({id: e, className: t, style: s, onHeightUpdate: a, children: r}) => {
            let n = i.useCallback(t => {
                if (t) {
                    let s = () => {
                        a(e, t.getBoundingClientRect().height)
                    }
                    ;
                    s(),
                    new MutationObserver(s).observe(t, {
                        subtree: !0,
                        childList: !0,
                        characterData: !0
                    })
                }
            }
            , [e, a]);
            return i.createElement("div", {
                ref: n,
                className: t,
                style: s
            }, r)
        }
          , el = (e, t) => {
            let s = e.includes("top")
              , a = e.includes("center") ? {
                justifyContent: "center"
            } : e.includes("right") ? {
                justifyContent: "flex-end"
            } : {};
            return {
                left: 0,
                right: 0,
                display: "flex",
                position: "absolute",
                transition: N() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
                transform: `translateY(${t * (s ? 1 : -1)}px)`,
                ...s ? {
                    top: 0
                } : {
                    bottom: 0
                },
                ...a
            }
        }
          , eo = x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`
          , ec = ({reverseOrder: e, position: t="top-center", toastOptions: s, gutter: a, children: r, containerStyle: n, containerClassName: l}) => {
            let {toasts: o, handlers: c} = A(s);
            return i.createElement("div", {
                style: {
                    position: "fixed",
                    zIndex: 9999,
                    top: 16,
                    left: 16,
                    right: 16,
                    bottom: 16,
                    pointerEvents: "none",
                    ...n
                },
                className: l,
                onMouseEnter: c.startPause,
                onMouseLeave: c.endPause
            }, o.map(s => {
                let n = s.position || t
                  , l = el(n, c.calculateOffset(s, {
                    reverseOrder: e,
                    gutter: a,
                    defaultPosition: t
                }));
                return i.createElement(en, {
                    id: s.id,
                    key: s.id,
                    onHeightUpdate: c.updateHeight,
                    className: s.visible ? eo : "",
                    style: l
                }, "custom" === s.type ? k(s.message, s) : r ? r(s) : i.createElement(er, {
                    toast: s,
                    position: n
                }))
            }
            ))
        }
          , ed = P
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [40, 636, 593, 792], () => t(92022)),
    _N_E = e.O()
}
]);
