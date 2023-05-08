<script>
export default {
    props: [
        "cardTitle",
    ]
}
</script>
<template >
    <div>
        <div class="card">
            <h3>{{ cardTitle }}</h3>
            <img src="" alt="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button type="button">Go</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .card{
        border:1px solid black;
        border-radius: 5px;
        padding: 12px;
        margin: 12px;
        max-width: 250px;
        min-width: 150px;
        img{
            width: 100%;
            height: 100px;
        }
    }
</style>