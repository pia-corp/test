(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        8312: function (e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/',
                function () {
                    return r(6209);
                },
            ]);
        },
        1268: function (e, n, r) {
            'use strict';
            var _ = r(5893),
                t = r(9008),
                c = r.n(t);
            n.Z = (e) => {
                let {title: n} = e;
                return (0, _.jsx)(_.Fragment, {
                    children: (0, _.jsx)(c(), {children: (0, _.jsxs)('title', {children: [n, ' | サイト名']})}),
                });
            };
        },
        6209: function (e, n, r) {
            'use strict';
            r.r(n),
                r.d(n, {
                    __N_SSG: function () {
                        return u;
                    },
                    default: function () {
                        return d;
                    },
                });
            var _ = r(5893),
                t = r(1664),
                c = r.n(t),
                i = r(1268),
                o = r(5291),
                s = r.n(o),
                u = !0;
            function d(e) {
                let {news: n} = e;
                return (0, _.jsxs)(_.Fragment, {
                    children: [
                        (0, _.jsx)(i.Z, {title: 'これはWebページのタイトル'}),
                        (0, _.jsxs)('main', {
                            className: s().main,
                            children: [
                                (0, _.jsx)('div', {
                                    children: (0, _.jsx)('ul', {
                                        children: n.map((e) =>
                                            (0, _.jsx)(
                                                'li',
                                                {
                                                    children: (0, _.jsx)(c(), {
                                                        href: 'news/'.concat(e.id),
                                                        children: e.title,
                                                    }),
                                                },
                                                e.id
                                            )
                                        ),
                                    }),
                                }),
                                (0, _.jsx)(c(), {href: 'news/page/1', children: '一覧'}),
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
    },
    function (e) {
        e.O(0, [996, 888, 774, 179], function () {
            return e((e.s = 8312));
        }),
            (_N_E = e.O());
    },
]);
