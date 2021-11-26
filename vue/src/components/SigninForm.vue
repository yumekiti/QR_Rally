<template>
    <div>
        <v-container cols="12">
            <v-card>
                <v-row class="my-auto">
                    <v-col cols="10" class="mx-auto">
                        <v-text-field
                            label="email"
                            clearable
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="my-auto">
                    <v-col cols="10" class="mx-auto">
                        <v-text-field
                            label="password"
                            clearable
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="8" />
                    <v-col cols="3">
                        <v-btn>Signin</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'SigninForm',
}
</script>