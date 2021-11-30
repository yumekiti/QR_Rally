<template>
    <div>
        <p>
            {{this.$store.state.String}}
        </p>
        <p>
            {{this.$store.state.Hash}}
        </p>
    </div>
</template>

<script>
export default {
    name: 'Test',
}
</script>