<template>
    <div>
        <Header :title="'admin'" />
        <v-container>
            <v-row cols="12">
                <v-col cols="12">
                    <v-btn @click="showUsers = !showUsers" block color="primary">
                        UserList
                    </v-btn>
                </v-col>
                <v-col v-show="this.showUsers" cols="12">
                    <v-text-field
                        v-model="usersSearch"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                    <v-data-table
                        :headers="usersHeaders"
                        :items="users"
                        :search="usersSearch"
                    ></v-data-table>
                </v-col>
                <v-col cols="12">
                    <v-btn @click="showStamp = !showStamp" block color="primary">
                        StampList
                    </v-btn>
                </v-col>
                <v-col v-show="this.showStamp" cols="12">
                    <v-text-field
                        v-model="stampSearch"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                    <v-data-table
                        :headers="stampHeaders"
                        :items="stamp"
                        :search="stampSearch"
                    ></v-data-table>
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
            showUsers: false,
            stampSearch: '',
            usersSearch: '',
            stampHeaders: [
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
            usersHeaders: [
                {
                    text: 'id',
                    align: 'start',
                    value: 'id',
                },
                { text: 'name', value: 'name' },
                { text: 'stamp', value: 'stamp' },
                { text: 'email', value: 'email' },
                { text: 'email_verified_at', value: 'email_verified_at' },
                { text: 'created_at', value: 'created_at' },
                { text: 'updated_at', value: 'updated_at' },
            ],
            stamp: [],
            users: [],
        }
    },
    methods: {
        userGet() {
            this.user = this.$store.state.data.user;
        },
        stampGet() {
            this.stamp = this.$store.state.data.stamp;
        },
        usersGet() {
            this.users = this.$store.state.data.users;
        },
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
        new Promise((resolve) => {
            resolve(this.$store.dispatch('get', {url: 'users'}))
        }).then(() => {
            this.usersGet()
        })
    },
}
</script>