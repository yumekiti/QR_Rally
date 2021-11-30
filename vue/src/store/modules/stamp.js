export default {
    namespaced:true,
    state: {
        done: window.sessionStorage.getItem(['done']),
        hash: [
            {
                name: 'hoge',
                state: window.sessionStorage.getItem(['stamp_hoge']),
                hash: 'hash1'
            },
            {
                name: 'piyo',
                state: window.sessionStorage.getItem(['stamp_piyo']),
                hash: 'hash2'
            },
            {
                name: 'fuga',
                state: window.sessionStorage.getItem(['stamp_fuga']),
                hash: 'hash3'
            },
        ],
    },
}