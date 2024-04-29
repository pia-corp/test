(self.__BUILD_MANIFEST = (function (s, e) {
    return {
        __rewrites: {afterFiles: [], beforeFiles: [], fallback: []},
        '/': [s, e, 'static/chunks/pages/index-19d93f5f48aeb4a2.js'],
        '/404': ['static/chunks/pages/404-6f357f96308ea583.js'],
        '/_error': ['static/chunks/pages/_error-77823ddac6993d35.js'],
        '/news/page/[id]': [
            s,
            'static/css/b3ccb6f17ab7a77f.css',
            'static/chunks/pages/news/page/[id]-5637642952733844.js',
        ],
        '/news/[id]': ['static/chunks/578-68e95e7d14f89096.js', e, 'static/chunks/pages/news/[id]-ba21fa7eff601733.js'],
        sortedPages: ['/', '/404', '/_app', '/_error', '/news/page/[id]', '/news/[id]'],
    };
})('static/chunks/996-0c3b85cea13847a4.js', 'static/css/f204a6ed3058548f.css')),
    self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
