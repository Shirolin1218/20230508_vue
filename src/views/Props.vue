<script>
import Card from "../components/Card.vue"
export default {
    components: {
        Card,
    },
    data() {
        return {
            localImgArr: [
                {
                    img: "../../public/img/area2_img1.png",
                    title: "A2圖1",
                    message: "msg1",
                    buttonTitle: "Go",
                },
                {
                    img: "../../public/img/area2_img2.png",
                    title: "A2圖2",
                    message: "msg2",
                    buttonTitle: "Go",
                },
                {
                    img: "../../public/img/area2_img3.png",
                    title: "A2圖3",
                    message: "msg3",
                    buttonTitle: "Go",
                },
                {
                    img: "../../public/img/area3_img1.png",
                    title: "A3圖1",
                    message: "msg4",
                    buttonTitle: "Go",
                },
                {
                    img: "../../public/img/area3_img2.png",
                    title: "A3圖2",
                    message: "msg5",
                    buttonTitle: "Go",
                },
                {
                    img: "../../public/img/area3_img3.png",
                    title: "A3圖3",
                    message: "msg6",
                    buttonTitle: "Go",
                },
            ],
        }
    },
}
</script>
<template >
    <div>
        <h2>這裡是Props</h2>
    </div>
    <div class="props">
        <Card v-for="data in localImgArr" :cardTitle="data.title" :localImg="data.img" :message="data.message"
            :buttonTitle="data.buttonTitle" />

    </div>
</template>

<style lang="scss" scoped>
.props {
    display: flex;
}
</style>