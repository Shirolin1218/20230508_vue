<script>
export default {
    data() {
        return {
            formText:"123"
        }
    },
    methods: {
        push(){
            this.$emit("emitPush",this.formText)
        }
    },
}
</script>
<template>
    <div class="form">
        <p>{{ formText }}</p>
        <input type="text" v-model="formText" >
        <button type="button" @click="push">button</button>
    </div>
</template>
<style lang="scss" scoped>
.form {
    border: 1px solid black;
    border-radius: 12px;
    padding: 16px;
    margin: 16px;
}
</style>