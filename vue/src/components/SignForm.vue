<template>
    <div>
        <v-container style="display: flex; margin-top: 130px">
            <v-row style="align-items: center; justify-content: center;">
                <v-col cols="12" md="6">

                    <v-card>
                        <v-card-title>
                            <h1 class="display-1">{{this.signupCheck?'Signup':'Signin'}}</h1>
                        </v-card-title>
                        
                        <v-card-text>
                            <v-form>
                                
                                <div v-show="this.signupCheck">
                                    <v-text-field
                                        prepend-icon="mdi-account-circle"
                                        label="Name"
                                        v-model="name"
                                    />
                                    <span v-if="this.errors.name">{{this.errors.name[0]}}</span>
                                </div>

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

                                <v-card-actions v-show="!this.signupCheck">
                                    <router-link to="/Signup">
                                        <v-btn class="mr-3" style="font-size: 10px;">
                                            Signup
                                        </v-btn>
                                    </router-link>
                                    <v-spacer></v-spacer>
                                    <v-btn class="info" @click="this.signin">Signin</v-btn>
                                </v-card-actions>
                                    
                                <v-card-actions v-show="this.signupCheck">
                                    <v-spacer></v-spacer>
                                    <v-btn class="info" @click="this.signup">Signup</v-btn>
                                </v-card-actions>

                            </v-form>
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'SignFrom',
    props:{
        signupCheck: Boolean,
    },
    data: () => {
        return {
            showPassword: false,
            email: '',
            password: '',
            name: '',
            errors: {
                email: null,
                password: null,
                name: null,
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
        },
        signup(){
            const formData = {
                name: this.name,
                email: this.email,
                password: this.password,
            }
            axios.get('/api/csrf-cookie').then(() => {
                axios
                    .post('/api/signup', formData)
                    .then(() => {
                        this.signin()
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.errors = error.response.data.errors;
                        } else {
                            console.log("Error", error.response);
                        }
                    })
            });
        },
        guest(){
            axios.get('/api/csrf-cookie').then(() => {
                axios
                    .get('/api/guest')
                    .then(() => this.$router.push('/'))
                    .catch(error => {
                        console.log(error);
                    })
            })
        },
    },
}
</script>