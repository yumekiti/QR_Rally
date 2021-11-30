import Cookies from 'js-cookie';

export default {
    namespaced:true,
    mutations: {
        getStamp(modules, hash){
            const getHash = this.state.Stamp.hash.find(item => item.hash === hash)
            if(getHash && Boolean(!getHash.status)){
                Cookies.set('stamp_' + getHash.name, 1)
                if(this.state.Stamp.done){
                    Cookies.set('done', Number(this.state.Stamp.done)+1)
                }else{
                    Cookies.set('done', 1)
                }
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
        ],
    },
}