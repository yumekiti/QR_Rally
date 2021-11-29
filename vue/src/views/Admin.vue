<template>
    <div>
        <Header :title="'admin'" />
        <v-container>
            <v-row cols="12">
                <v-col cols="12">
                    <v-btn block color="primary">
                        UserList
                    </v-btn>
                </v-col>
                <v-col cols="12">
                    <v-btn @click="showStamp = !showStamp" block color="primary">
                        StampList
                    </v-btn>
                </v-col>
                <v-col v-if="this.showStamp" cols="12">
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                    <v-data-table
                        :headers="headers"
                        :items="stamp"
                        :search="search"
                    ></v-data-table>
                </v-col>
                <v-col cols="12">
                    <v-btn block color="primary">
                        AchievementList
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'

export default {
    name: 'Admin',
    components: {
        Header,
    },
    data: () => {
        return {
            user: null,
            showStamp: false,
            search: '',
            headers: [
                {
                    text: 'id',
                    align: 'start',
                    value: 'id',
                },
                { text: 'name', value: 'name' },
                { text: 'created_at', value: 'created_at' },
                { text: 'updated_at', value: 'updated_at' },
                { text: 'hash', value: 'hash' },
            ],
            stamp: [],
        }
    },
    methods: {
        userGet() {
            this.user = this.$store.state.data.user;
        },
        stampGet() {
            this.stamp = this.$store.state.data.stamp
        }
    },
    mounted(){
        this.$store.state.data.user = null
        new Promise((resolve) => {
            resolve(this.$store.dispatch('get', {url: 'user'}))
            this.$store.dispatch('get', {url: 'stamp'})
        }).then(() => {
            this.userGet()
            this.stampGet()
            if(this.user.id != 1){
                this.$router.push('/')
            }
        })
        new Promise((resolve) => {
            resolve(this.$store.dispatch('get', {url: 'stamp'}))
        }).then(() => {
            this.stampGet()
        })
    },
}
</script>