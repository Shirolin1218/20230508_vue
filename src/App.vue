<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    

}
</script>
<template>
    <header>
        <h1>這裡是APP.vue</h1>
        <div class="container">
            <RouterLink to="/home" class="link">前往Home.vue</RouterLink>
            <RouterLink to="/v-bind" class="link">前往VBind.vue</RouterLink>
            <RouterLink to="/about" class="link">前往About.vue</RouterLink>
            <RouterLink to="/v-for" class="link">前往VFor.vue</RouterLink>
            <RouterLink to="/props" class="link">前往Props.vue</RouterLink>

        </div>
    </header>

    <RouterView />
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
}
</style>