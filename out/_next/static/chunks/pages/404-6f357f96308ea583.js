(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [197],
    {
        6141: function (n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/404',
                function () {
                    return e(6767);
                },
            ]);
        },
        1268: function (n, t, e) {
            'use strict';
            var r = e(5893),
                u = e(9008),
                i = e.n(u);
            t.Z = (n) => {
                let {title: t} = n;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(i(), {children: (0, r.jsxs)('title', {children: [t, ' | サイト名']})}),
                });
            };
        },
        6767: function (n, t, e) {
            'use strict';
            e.r(t),
                e.d(t, {
                    default: function () {
                        return i;
                    },
                });
            var r = e(5893),
                u = e(1268);
            function i() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.Z, {title: 'これはWebページのタイトル'}),
                        (0, r.jsx)('h1', {children: '404 - Page Not Found'}),
                    ],
                });
            }
        },
        9008: function (n, t, e) {
            n.exports = e(7828);
        },
    },
    function (n) {
        n.O(0, [888, 774, 179], function () {
            return n((n.s = 6141));
        }),
            (_N_E = n.O());
    },
]);