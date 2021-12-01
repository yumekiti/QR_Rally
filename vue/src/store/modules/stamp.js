import Cookies from 'js-cookie';

export default {
    namespaced:true,
    mutations: {
        getStamp(state, hash){
            const getHash = this.state.Stamp.hash.find(item => item.hash === hash)
            if(getHash && Boolean(!getHash.status)){
                Cookies.set('stamp_' + getHash.name, 1)
                this.state.Stamp.done ? Cookies.set('done', Number(this.state.Stamp.done)+1) : Cookies.set('done', 1)
                this.state.Stamp.done = Cookies.get('done')
            }
        }
    },
    state: {
        done: Cookies.get('done'),
        hash: [
            {
                name: 'hoge',
                status: Cookies.get('stamp_hoge'),
                hash: 'hash1'
            },
            {
                name: 'piyo',
                status: Cookies.get('stamp_piyo'),
                hash: 'hash2'
            },
            {
                name: 'fuga',
                status: Cookies.get('stamp_fuga'),
                hash: 'hash3'
            },
            {
                name: 'hogehoge',
                status: Cookies.get('stamp_hogehoge'),
                hash: 'hash4'
            },
            {
                name: 'piyopiyo',
                status: Cookies.get('stamp_piyopiyo'),
                hash: 'hash5'
            },
            {
                name: 'fugafuga',
                status: Cookies.get('stamp_fugafuga'),
                hash: 'hash6'
            },
            {
                name: 'hogehogehoge',
                status: Cookies.get('stamp_hogehogehoge'),
                hash: 'hash7'
            },
            {
                name: 'piyopiyopiyo',
                status: Cookies.get('stamp_piyopiyopiyo'),
                hash: 'hash8'
            },
            {
                name: 'fugafugafuga',
                status: Cookies.get('stamp_fugafugafuga'),
                hash: 'hash9'
            },
        ],
    },
}