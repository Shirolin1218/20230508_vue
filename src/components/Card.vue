<script>
export default {
    props: [//設定變數給其他vue做v-bind
        "cardTitle",
        "localImg",
        "message",
        "buttonTitle"
    ]
}
</script>
<template >
    <div>
        <div class="card">
            <h3>{{ cardTitle }}</h3>
            <img :src="localImg">
            <p>{{ message }}</p>
            <button type="button">{{ buttonTitle }}</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    border: 1px solid black;
    border-radius: 5px;
    padding: 12px;
    margin: 12px;
    max-width: 250px;
    min-width: 150px;

    img {
        width: 100%;
        height: 100px;
        object-fit: cover;
    }
}
</style>