<script>
import Card from "../components/Card.vue"
export default {
    components: {
        Card,
    },
    data() {
        return {
           
        }
    },
}
</script>
<template >
    <div>
        <h2>這裡是Props</h2>
    </div>
    <div class="props">
        <Card :cardTitle="'title'" />
        <Card :cardTitle="'title2'" />
        <Card :cardTitle="'title3'" />

    </div>
</template>

<style lang="scss" scoped>
.props {
    display: flex;
}
</style>