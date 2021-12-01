import Cookies from 'js-cookie';

export default {
    namespaced:true,
    state: {
        jp: {
            rule: {
                title: 'ルール説明',
                detail: '特定のQRコードを読み取り、スタンプを集めよう！',
            },
            card: {
                title: 'スタンプカード',
            },
            footer: {
                title: '2021学生会 — 地球祭',
                language: 'Language setting',
            },
        },
        enStatus: Cookies.get('en'),
        en: {},
    },
}