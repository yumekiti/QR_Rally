<template>
    <div>
        <v-text-field
            v-model="url"
            filled
            label="url"
            clearable
        ></v-text-field>
        <p>url is -> localhost:8080/api/{{this.url}}</p>

        <h3>user</h3>
        <span>
            <v-text-field
                v-model="name"
                filled
                label="name"
                clearable
            ></v-text-field>
            <v-text-field
                v-model="email"
                filled
                label="email"
                clearable
            ></v-text-field>
            <v-text-field
                v-model="password"
                filled
                label="password"
                clearable
            ></v-text-field>
        </span><br>

        <v-btn @click="this.get">get</v-btn>
        <v-btn @click="this.post">post</v-btn>
        <v-btn @click="this.put">put</v-btn>
        <v-btn @click="this.delete">delete</v-btn>
        <v-btn @click="this.login">login</v-btn>

        <div>{{this.data}}</div>
        <div>{{this.errors}}</div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Test',
    data: () => {
        return {
            url: '',
            data: null,
            name: '',
            email: '',
            password: '',
            errors: null
        }
    },
    methods: {
        get() {
            axios
                .get('/api/' + this.url)
                .then(res => (this.data = res.data))
        },
        delete() {
            axios
                .delete('/api/' + this.url)
                .then(res => (this.data = res.data))
        },
        post() {
            const formData = {
                name: this.name,
                email: this.email,
                password: this.password,
            }
            axios
                .post('/api/' + this.url, formData)
                .then(res => (this.data = res.data))
                .catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    } else {
                        console.log("Error", error.response);
                    }
                })
        },
        put() {
            const formData = {
                name: this.name,
                email: this.email,
                password: this.password,
            }
            axios
                .put('/api/' + this.url, formData)
                .then(res => (this.data = res.data))
        },
        login() {
            const postData = {
                email: this.email,
                password: this.password,
            }
            axios.get('/api/csrf-cookie').then(() => {
                axios
                    .post('/api/' + this.url, postData)
                    .then(res => (this.data = res.data))
            });
        }
    },
}
</script>