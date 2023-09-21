(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    9128: function (e, n, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return o(3709);
        },
      ]);
    },
    3709: function (e, n, o) {
      "use strict";
      o.r(n),
        o.d(n, {
          default: function () {
            return p;
          },
        });
      var t = o(1527),
        i = o(3239),
        s = o(6749);
      o(959);
      let r = {
        footer: (0, t.jsx)("code", {
          children: "~|Kibr.Uz|~",
        }),
      };
      o(5377);
      var a = o(6736);
      o(6484);
      var d = o(6928);
      function c() {
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsx)("audio", {
              id: "audio-element",
              controls: !0,
              autoPlay: !0,
              loop: !0,
              children: (0, t.jsx)("source", {
                src: "/assets/kibr.mp3",
                type: "audio/mpeg",
              }),
            }),
            (0, t.jsx)(d.Z, {
              id: "audio-canvas",
              height: 200,
              width: 600,
              audioId: "audio-element",
              capColor: "red",
              capHeight: 2,
              meterWidth: 2,
              meterCount: 512,
              meterColor: [
                { stop: 0, color: "#f00" },
                { stop: 0.5, color: "#0CD7FD" },
                { stop: 1, color: "red" },
              ],
              gap: 4,
            }),
          ],
        });
      }
      let l = {
        MDXContent: function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { wrapper: n } = Object.assign({}, (0, a.ah)(), e.components);
          return n
            ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) })
            : h(e);
        },
        pageOpts: {
          filePath: "pages/index.mdx",
          route: "/",
          headings: [{ depth: 1, value: "Kibr.Uz", id: "no-svoy" }],
          pageMap: [
            { kind: "MdxPage", name: "index", route: "/" },
            { kind: "Meta", data: { index: "Index" } },
          ],
          flexsearch: { codeblocks: !0 },
          title: "Kibr.Uz",
        },
        pageNextRoute: "/",
        nextraLayout: s.ZP,
        themeConfig: r,
      };
      function h(e) {
        let n = Object.assign(
          { h1: "h1", p: "p", code: "code", a: "a" },
          (0, a.ah)(),
          e.components
        );
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.h1, { children: "Kibr.Uz" }),
            "\n",
            (0, t.jsx)(n.p, {
              children: (0, t.jsx)(n.code, {
                children: "G'ururlanma Ojiz Banda ...",
              }),
            }),
            "\n",
            "\n",
            (0, t.jsx)(n.p, { children: "" }),
            "\n",
            (0, t.jsx)(n.p, {
              children: `Maqsadimiz Kibr boʻlmaslikka targʻib qilishdir 🤝
Kibrlik inson doʻzaxiydir 🌙`,
            }),
            "\n",
            (0, t.jsx)(c, {}),
            "\n",

            (0, t.jsxs)(n.p, {
              children: [
                "\nTelegramda biz  : ",
                (0, t.jsx)(n.a, {
                  href: "https://t.me/KibrUz",
                  children: "KibrUz",
                }),
              ],
            }),
            (0, t.jsxs)(n.p, {
              children: [
                "\n Instagramda biz  : ",
                (0, t.jsx)(n.a, {
                  href: "https://t.me/KibrUz",
                  children: "KibrUz",
                }),
              ],
            }),
            `
            
            ---------------------

          
            `,

            (0, t.jsxs)(n.p, {
              children: [
                "\nG'oya Muallifi  : ",
                (0, t.jsx)(n.a, {
                  href: "https://www.instagram.com/realcoder.uz",
                  children: "Saidqodirxon Rahimov",
                }),
              ],
            }),

            (0, t.jsxs)(n.p, {
              children: ["Ovoz Muallifi : Abror Muxtor Aliy "],
            }),
          ],
        });
      }
      var p = (0, i.j)(l);
    },
  },
  function (e) {
    e.O(0, [774, 717, 553, 888, 179], function () {
      return e((e.s = 9128));
    }),
      (_N_E = e.O());
  },
]);
