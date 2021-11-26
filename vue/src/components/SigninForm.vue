<template>
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
                                />

                                <v-text-field
                                    v-bind:type="showPassword ? 'text' : 'password'"
                                    @click:append="showPassword = !showPassword"
                                    prepend-icon="mdi-lock" 
                                    v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    label="Password"
                                />

                                <v-card-actions>
                                    <v-card to="/Signup">
                                        <v-btn style="font-size: 10px;">
                                            Signup
                                        </v-btn>
                                    </v-card>
                                    <v-spacer></v-spacer>
                                    <v-btn class="info">Signup</v-btn>
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
export default {
    name: 'SigninForm',
    data: () => {
        return {
            showPassword: false,
        }
    },
}
</script>