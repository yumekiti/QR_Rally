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
                ga.event('スタンプ', getHash.name, '', 1);
            }
        }
    },
    state: {
        done: Cookies.get('done'),
        completed: false,
        hash: [
            {
                name: 'Building_2_1nd_floor_nBK',
                icon: 'mdi-earth',
                color: 'blue',
                status: Cookies.get('stamp_Building_2_1nd_floor_nBK'),
                hash: '11a31f51b52c4edf8eb6b28e840ad7fe4b9d6c8e7afeab61f44799ec9312ce1c539c6375596d62327c3535e15b03350eadfeaa78212ccfff9b133f0a6d7616d9'
            },
            {
                name: 'Building_2_3nd_floor_QAR',
                icon: 'mdi-emoticon-outline',
                color: '#ffde34',
                status: Cookies.get('stamp_Building_2_3nd_floor_QAR'),
                hash: 'ad521b70baf92ed75d636b0094f0096d777bd23a77f88d5ddebf307b9ca461f774c7d66dd5bf047ad6a329f9b3660326d2784d9b81dd0addf5077413dee25bbe'
            },
            {
                name: 'Building_2_6nd_floor_ZPE',
                icon: 'mdi-linux',
                color: '',
                status: Cookies.get('stamp_Building_2_6nd_floor_ZPE'),
                hash: 'c6bd6fd317777a6fffce32fc7aa58783bc4e839d0732744c2b1cc3b0d5662cbc6125e9195ab4f1ab9ebaa6f13929ef54df93798a4afe0e771ffe7f9cf156e1cb'
            },
            {
                name: 'Building_1_1nd_floor_pYs',
                icon: 'mdi-google-controller',
                color: 'red',
                status: Cookies.get('stamp_Building_1_1nd_floor_pYs'),
                hash: 'a7dd84a5075301fd67a144b1a77ae2b0d2129f174770ea4f5fd940e84b3c0e68dde921c4e1315468dde1a74ac12c02925e5a21a0c2779a99ad3aee65b3b3bede'
            },
            {
                name: 'Building_1_2nd_floor_XVs',
                icon: 'mdi-balloon',
                color: '#EF93C8',
                status: Cookies.get('stamp_Building_1_2nd_floor_XVs'),
                hash: 'dc30033750e9f81c64bbfda714154dc610fd0890c37971a5af21cc222ab2c2f30e94852882e5ac0101719aef938684e3fbc27a33595e8aa45186dc9ad5568658'
            },
            {
                name: 'Building_1_3nd_floor_dcF',
                icon: 'mdi-dog',
                color: '#fddea5',
                status: Cookies.get('stamp_Building_1_3nd_floor_dcF'),
                hash: '370e1ec0c3271555953d0868968565093aa5c11e67527382b0eebcf21c6f7508d26b7da704543c7532cea8c2cab0ea0e32a388060a913a6e683ed29d94b51632'
            },
            {
                name: 'Building_1_4nd_floor_ULr',
                icon: 'mdi-emoticon-cool-outline',
                color: '#6A51B1',
                status: Cookies.get('stamp_Building_1_4nd_floor_ULr'),
                hash: '567d239a4afc49951ef7a9094f2afaf80d3441805aa342c12acbe1e06d58c2b2ea96147246fa05c414150d54cf61da9085646e3db465b05c43bfac72e665556c'
            },
            {
                name: 'Building_3_2nd_floor_wRX',
                icon: 'mdi-web',
                color: '#9DCCE0',
                status: Cookies.get('stamp_Building_3_2nd_floor_wRX'),
                hash: 'aa0da7fee792cd7ff0f54f6d79364440815bf0de70a29f1883bc87c581fa6afebc1e0f312febc72fcd0f8a9259b54bef994ddbee77b3efa936e569c5803c0588'
            },
            {
                name: 'Building_3_3nd_floor_NJH',
                icon: 'mdi-cat',
                color: 'black',
                status: Cookies.get('stamp_Building_3_3nd_floor_NJH'),
                hash: '67296a6abf5fa912465c12bdeee144a383702a2b1f3df1013e8960f6d50a817077eb9922e92a71c322977b658d0de88b33566de0338f5fbe8b8afc473ba2a799'
            },
        ],
    },
}