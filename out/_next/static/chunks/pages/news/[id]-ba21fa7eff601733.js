(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [232],
    {
        3578: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/news/[id]',
                function () {
                    return t(6106);
                },
            ]);
        },
        1268: function (e, n, t) {
            'use strict';
            var _ = t(5893),
                o = t(9008),
                r = t.n(o);
            n.Z = (e) => {
                let {title: n} = e;
                return (0, _.jsx)(_.Fragment, {
                    children: (0, _.jsx)(r(), {children: (0, _.jsxs)('title', {children: [n, ' | サイト名']})}),
                });
            };
        },
        6106: function (e, n, t) {
            'use strict';
            t.r(n),
                t.d(n, {
                    __N_SSG: function () {
                        return u;
                    },
                    default: function () {
                        return l;
                    },
                });
            var _ = t(5893),
                o = t(1268),
                r = t(1036),
                c = t.n(r),
                i = t(5291),
                s = t.n(i),
                u = !0;
            function l(e) {
                let {news: n} = e,
                    t = c()(n.body);
                return (0, _.jsxs)(_.Fragment, {
                    children: [
                        (0, _.jsx)(o.Z, {title: 'これはWebページのタイトル'}),
                        (0, _.jsxs)('main', {
                            className: s().main,
                            children: [
                                (0, _.jsx)('h1', {className: s().title, children: n.title}),
                                (0, _.jsx)('p', {className: s().publishedAt, children: n.publishedAt}),
                                (0, _.jsx)('div', {className: s().body, dangerouslySetInnerHTML: {__html: t}}),
                            ],
                        }),
                    ],
                });
            }
        },
        5291: function (e) {
            e.exports = {
                main: 'Home_main__VkIEL',
                description: 'Home_description__uXNdx',
                code: 'Home_code__VVrIr',
                grid: 'Home_grid__AVljO',
                card: 'Home_card__E5spL',
                center: 'Home_center__O_TIN',
                logo: 'Home_logo__IOQAX',
                content: 'Home_content__tkQPU',
                vercelLogo: 'Home_vercelLogo___BVuc',
                rotate: 'Home_rotate__c5eru',
            };
        },
        2868: function () {},
        4777: function () {},
        9830: function () {},
        209: function () {},
    },
    function (e) {
        e.O(0, [578, 888, 774, 179], function () {
            return e((e.s = 3578));
        }),
            (_N_E = e.O());
    },
]);
