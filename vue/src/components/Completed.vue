<template>
    <v-dialog
        v-model="$store.state.Stamp.completed"
    >
        <v-card>
            <v-card-title>
                {{$t('completed.title')}}
            </v-card-title>
            
            <v-img src="/img/confetti-outline.gif"></v-img>

            <v-card-text class="text-center">
                {{$t('completed.detail')}}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="primary"
                text
                @click="$store.state.Stamp.completed = false"
                >
                    {{$t('completed.back')}}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'Completed',
}
</script>