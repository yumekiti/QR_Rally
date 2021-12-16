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
                hash: 'cdea2fd69348d3ba5e37da7f4cc6cfdb'
            },
            {
                name: 'Building_2_3nd_floor_QAR',
                icon: 'mdi-emoticon-outline',
                color: '#ffde34',
                status: Cookies.get('stamp_Building_2_3nd_floor_QAR'),
                hash: '2f60de262ded131ff925a39bd2b75477'
            },
            {
                name: 'Building_2_6nd_floor_ZPE',
                icon: 'mdi-linux',
                color: '',
                status: Cookies.get('stamp_Building_2_6nd_floor_ZPE'),
                hash: '35b12a59a81410e9836c30a2d3eefc8f'
            },
            {
                name: 'Building_1_1nd_floor_pYs',
                icon: 'mdi-google-controller',
                color: 'red',
                status: Cookies.get('stamp_Building_1_1nd_floor_pYs'),
                hash: 'ca8586b79f10e37105878f3dc10a82f0'
            },
            {
                name: 'Building_1_2nd_floor_XVs',
                icon: 'mdi-balloon',
                color: '#EF93C8',
                status: Cookies.get('stamp_Building_1_2nd_floor_XVs'),
                hash: 'c8107fd506eff94f20a0aea6813c2146'
            },
            {
                name: 'Building_1_3nd_floor_dcF',
                icon: 'mdi-dog',
                color: '#fddea5',
                status: Cookies.get('stamp_Building_1_3nd_floor_dcF'),
                hash: 'b79634b02edc1f0c509da3e624205516'
            },
            {
                name: 'Building_1_4nd_floor_ULr',
                icon: 'mdi-emoticon-cool-outline',
                color: '#6A51B1',
                status: Cookies.get('stamp_Building_1_4nd_floor_ULr'),
                hash: '47b568b8f739a5948ac08884f5f00f9d'
            },
            {
                name: 'Building_3_2nd_floor_wRX',
                icon: 'mdi-web',
                color: '#9DCCE0',
                status: Cookies.get('stamp_Building_3_2nd_floor_wRX'),
                hash: '868bf11e6ca593828fcabc55f23e9ccb'
            },
            {
                name: 'Building_3_3nd_floor_NJH',
                icon: 'mdi-cat',
                color: 'black',
                status: Cookies.get('stamp_Building_3_3nd_floor_NJH'),
                hash: 'efa3f676e48ba3c5ea9bec28a2010779'
            },
        ],
    },
}