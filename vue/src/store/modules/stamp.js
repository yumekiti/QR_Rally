export default {
    namespaced:true,
    state: {
        done: window.sessionStorage.getItem(['done']),
        hash: [
            {
                name: 'hoge',
                state: window.sessionStorage.getItem(['stamp_hoge']),
                hash: 'hash'
            },
        ],
    },
}