<script>
import FormView from "../components/Form.vue"
export default {
    components: {
        FormView,
    },
    data() {
        return {
            inputText: "456",
        }
    },
    methods: {
        getForm(data) {
            this.inputText = data;
        }
    },
}
</script>
<template>
    <div>
        <h2>這裡是Emit</h2>
    </div>
    <h4>{{ inputText }}</h4>
    <div class="emit">
        <FormView @emitPush="getForm" />
    </div>
</template>
<style lang="scss" scoped></style>