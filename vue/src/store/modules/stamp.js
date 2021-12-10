import Cookies from 'js-cookie';

export default {
    namespaced:true,
    mutations: {
        getStamp(state, {hash, ga}){
            const getHash = this.state.Stamp.hash.find(item => item.hash === hash)
            if(getHash && Boolean(!getHash.status)){
                Cookies.set('stamp_' + getHash.name, 1)
                getHash.status = true
                this.state.Stamp.done ? Cookies.set('done', Number(this.state.Stamp.done)+1) : Cookies.set('done', 1)
                this.state.Stamp.done = Cookies.get('done')
                if(this.state.Stamp.done >= 9){
                    this.state.Stamp.completed = true
                    ga.event('スタンプ', '全部', '', 1);
                }
            }
        }
    },
    state: {
        done: Cookies.get('done'),
        completed: false,
        hash: [
            {
                name: 'hoge',
                icon: 'mdi-earth',
                color: 'blue',
                status: Cookies.get('stamp_hoge'),
                hash: 'hash1'
            },
            {
                name: 'piyo',
                icon: 'mdi-earth',
                color: 'blue',
                status: Cookies.get('stamp_piyo'),
                hash: 'hash2'
            },
            {
                name: 'fuga',
                icon: 'mdi-earth',
                color: 'blue',
                status: Cookies.get('stamp_fuga'),
                hash: 'hash3'
            },
            {
                name: 'hogehoge',
                icon: 'mdi-earth',
                color: 'blue',
                status: Cookies.get('stamp_hogehoge'),
                hash: 'hash4'
            },
            {
                name: 'piyopiyo',
                icon: 'mdi-earth',
                color: 'blue',
                status: Cookies.get('stamp_piyopiyo'),
                hash: 'hash5'
            },
            {
                name: 'fugafuga',
                icon: 'mdi-earth',
                color: 'blue',
                status: Cookies.get('stamp_fugafuga'),
                hash: 'hash6'
            },
            {
                name: 'hogehogehoge',
                icon: 'mdi-earth',
                color: 'blue',
                status: Cookies.get('stamp_hogehogehoge'),
                hash: 'hash7'
            },
            {
                name: 'piyopiyopiyo',
                icon: 'mdi-earth',
                color: 'blue',
                status: Cookies.get('stamp_piyopiyopiyo'),
                hash: 'hash8'
            },
            {
                name: 'fugafugafuga',
                icon: 'mdi-earth',
                color: 'blue',
                status: Cookies.get('stamp_fugafugafuga'),
                hash: 'hash9'
            },
        ],
    },
}