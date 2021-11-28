<template>
    <div>
        <Header :title="'admin'" />
        <v-container>
            <v-row cols="12">
                <v-col cols="12">
                    <router-link :to="'/admin/user'">
                        <v-btn block color="primary">
                            UserList
                        </v-btn>
                    </router-link>
                </v-col>
                <v-col cols="12">
                    <router-link :to="'/admin/stamp'">
                        <v-btn block color="primary">
                            StampList
                        </v-btn>
                    </router-link>
                </v-col>
                <v-col cols="12">
                    <router-link :to="'/admin/achievement'">
                        <v-btn block color="primary">
                            AchievementList
                        </v-btn>
                    </router-link>
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
            user: null
        }
    },
    methods: {
        userGet() {
            this.user = this.$store.state.data.user;
        },
    },
    mounted(){
        this.$store.state.data.user = null
        new Promise((resolve) => {
            resolve(this.$store.dispatch('get', {url: 'user'}))
        }).then(() => {
            this.userGet()
            if(this.user.id != 1){
                this.$router.push('/')
            }
        })
    },
}
</script>