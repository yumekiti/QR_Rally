<template>
    <div>
        <Header :title="'Signin'" />
            <div>
                <v-container style="display: flex; margin-top: 130px">
                    <v-row style="align-items: center; justify-content: center;">
                        <v-col cols="12" md="6">

                            <v-card>
                                <v-card-title>
                                    <h1 class="display-1">Signin</h1>
                                </v-card-title>
                                
                                <v-card-text>
                                    <v-form>

                                        <v-text-field
                                            prepend-icon="mdi-account-circle"
                                            label="Email"
                                            v-model="email"
                                        />
                                        <span v-if="this.errors.email">{{this.errors.email[0]}}</span>

                                        <v-text-field
                                            v-bind:type="showPassword ? 'text' : 'password'"
                                            @click:append="showPassword = !showPassword"
                                            prepend-icon="mdi-lock" 
                                            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                            label="Password"
                                            v-model="password"
                                        />
                                        <span v-if="this.errors.password">{{this.errors.password[0]}}</span>

                                        <v-card-actions>
                                            <v-card to="/Signup">
                                                <v-btn style="font-size: 10px;">
                                                    Signup
                                                </v-btn>
                                            </v-card>
                                            <v-spacer></v-spacer>
                                            <v-btn class="info" @click="this.signin">Signin</v-btn>
                                        </v-card-actions>

                                    </v-form>
                                </v-card-text>
                            </v-card>

                        </v-col>
                    </v-row>
                </v-container>
            </div>
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
    name: 'Signin',
    components: {
        Header,
        Footer,
    },
    data: () => {
        return {
            showPassword: false,
            email: '',
            password: '',
            errors: {
                email: null,
                password: null,
            },
        }
    },
    methods: {
        signin(){
            const formData = {
                email: this.email,
                password: this.password,
            }
            axios.get('/api/csrf-cookie').then(() => {
                axios
                    .post('/api/signin', formData)
                    .then(() => this.$router.push('/'))
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.errors = error.response.data.errors;
                        } else {
                            console.log("Error", error.response);
                        }
                    })
            });
        }
    }
}
</script>