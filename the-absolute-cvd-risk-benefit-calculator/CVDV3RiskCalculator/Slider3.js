(function() {
    function l() {
        c();
        (new MutationObserver(function(e) {
            e.forEach(function(e) {
                e.addedNodes && Array.forEach(e.addedNodes, function(e) {
                    e instanceof Element && (e.childElementCount ? Array.forEach(e.querySelectorAll("input[type=range]"), h) : e.mozMatchesSelector("input[type=range]") && h(e))
                })
            })
        })).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function c() {
        Array.forEach(document.querySelectorAll("input[type=range]"), h)
    }

    function h(e) {
        e.type != "range" && p(e)
    }

    function p(e) {
        function T(e) {
            h = !0;
            setTimeout(function() {
                h = !1
            }, 0);
            if (e.button || !w) return;
            var t = parseFloat(getComputedStyle(this).width),
                n = (t - i.width) / w;
            if (!n) return;
            var r = e.clientX - this.getBoundingClientRect().left - i.width / 2 - (E - g) * n;
            if (Math.abs(r) > i.radius) {
                c = !0;
                this.value -= -r / n
            }
            v = E;
            m = e.clientX;
            this.addEventListener("mousemove", N, !0);
            this.addEventListener("mouseup", C, !0)
        }

        function N(e) {
            var t = parseFloat(getComputedStyle(this).width),
                n = (t - i.width) / w;
            if (!n) return;
            v += (e.clientX - m) / n;
            m = e.clientX;
            c = !0;
            this.value = v
        }

        function C() {
            this.removeEventListener("mousemove", N, !0);
            this.removeEventListener("mouseup", C, !0);
            e.dispatchEvent(a);
            e.dispatchEvent(f)
        }

        function k(e) {
            if (e.keyCode > 36 && e.keyCode < 41) {
                L.call(this);
                c = !0;
                this.value = E + (e.keyCode == 38 || e.keyCode == 39 ? b : -b)
            }
        }

        function L() {
            h || (this.style.boxShadow = r ? "inset 0 0 20px rgba(0,127,255,.1), 0 0 1px rgba(0,127,255,.4)" : "0 0 0 2px #fb0")
        }

        function A() {
            this.style.boxShadow = ""
        }

        function O(e) {
            return !isNaN(e) && +e == parseFloat(e)
        }

        function M() {
            g = O(e.min) ? +e.min : 0;
            y = O(e.max) ? +e.max : 100;
            y < g && (y = g > 100 ? g : 100);
            b = O(e.step) && e.step > 0 ? +e.step : 1;
            w = y - g;
            D(!0)
        }

        function _() {
            !t && !l && (E = e.getAttribute("value"));
            O(E) || (E = (g + y) / 2);
            E = Math.round((E - g) / b) * b + g;
            E < g ? E = g : E > y && (E = g + ~~(w / b) * b)
        }

        function D(t) {
            _();
            var n = c;
            c = !1;
            n && E != p && e.dispatchEvent(a);
            if (!t && E == p) return;
            p = E;
            var r = w ? (E - g) / w * 100 : 0,
                i = "-moz-element(#__sliderthumb__) " + r + "% no-repeat, ";
            d(e, {
                background: i + s
            })
        }
        var t, l, c, h, p, v, m, g, y, b, w, E = e.value;
        if (!n) {
            n = document.body.appendChild(document.createElement("hr"));
            d(n, {
                "-moz-appearance": r ? "scale-horizontal" : "scalethumb-horizontal",
                display: "block",
                visibility: "visible",
                opacity: 1,
                position: "fixed",
                top: "-999999px"
            });
            document.mozSetImageElement("__sliderthumb__", n)
        }
        var S = function() {
                return "" + E
            },
            x = function P(n) {
                E = "" + n;
                t = !0;
                D();
                delete e.value;
                e.value = E;
                e.__defineGetter__("value", S);
                e.__defineSetter__("value", P)
            };
        e.__defineGetter__("value", S);
        e.__defineSetter__("value", x);
        Object.defineProperty(e, "type", {
            get: function() {
                return "range"
            }
        });
        ["min", "max", "step"].forEach(function(t) {
            e.hasAttribute(t) && (l = !0);
            Object.defineProperty(e, t, {
                get: function() {
                    return this.hasAttribute(t) ? this.getAttribute(t) : ""
                },
                set: function(e) {
                    e === null ? this.removeAttribute(t) : this.setAttribute(t, e)
                }
            })
        });
        e.readOnly = !0;
        d(e, o);
        M();
        (new MutationObserver(function(n) {
            n.forEach(function(n) {
                if (n.attributeName != "value") {
                    M();
                    l = !0
                } else if (!t) {
                    E = e.getAttribute("value");
                    D()
                }
            })
        })).observe(e, u);
        e.addEventListener("mousedown", T, !0);
        e.addEventListener("keydown", k, !0);
        e.addEventListener("focus", L, !0);
        e.addEventListener("blur", A, !0)
    }

    function d(e, t) {
        for (var n in t) e.style.setProperty(n, t[n], "important")
    }
    var e = document.createElement("input");
    try {
        e.type = "range";
        if (e.type == "range") return
    } catch (t) {
        return
    }
    e.style.background = "linear-gradient(red, red)";
    if (!e.style.backgroundImage || !("MozAppearance" in e.style)) return;
    var n, r = navigator.platform == "MacIntel",
        i = {
            radius: r ? 9 : 6,
            width: r ? 22 : 12,
            height: r ? 16 : 20
        },
        s = "linear-gradient(transparent " + (r ? "6px, #999 6px, #999 7px, #ccc 8px, #bbb 9px, #bbb 10px, transparent 10px" : "9px, #999 9px, #bbb 10px, #fff 11px, transparent 11px") + ", transparent)",
        o = {
            "min-width": i.width + "px",
            "min-height": i.height + "px",
            "max-height": i.height + "px",
            padding: "0 0 " + (r ? "2px" : "1px"),
            border: 0,
            "border-radius": 0,
            cursor: "default",
            "text-indent": "-999999px"
        },
        u = {
            attributes: !0,
            attributeFilter: ["min", "max", "step", "value"]
        },
        a = document.createEvent("HTMLEvents");
    a.initEvent("input", !0, !1);
    var f = document.createEvent("HTMLEvents");
    f.initEvent("change", !0, !1);
    document.readyState == "loading" ? document.addEventListener("DOMContentLoaded", l, !0) : l();
    addEventListener("pageshow", c, !0)
})();