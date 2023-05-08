<script>
export default {
    data() {
        return {
            isRounded: false,
            move: false,
            imgArr: [
                "https://stickershop.line-scdn.net/stickershop/v1/product/8804885/IOS/main_animation@2x.png",
                "https://stickershop.line-scdn.net/stickershop/v1/product/7028/LINEStorePC/main.png",
                "https://stickershop.line-scdn.net/stickershop/v1/product/1043153/LINEStorePC/main.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKZi1Z0FZf4KTZJeG24fyI4jjPIEZKmdAyQ&usqp=CAU",
                "https://stickershop.line-scdn.net/stickershop/v1/product/7834/LINEStorePC/main.png?v=10",
                "https://stickershop.line-scdn.net/stickershop/v1/product/20931451/LINEStorePC/main.png",
                "https://stickershop.line-scdn.net/stickershop/v1/product/13279602/LINEStorePC/main.png",
            ],
            imgNum: 0,
            localImgArr: [//因路徑問題，本地檔案必須放在public資料夾才能取到
                "../../public/img/area2_img1.png",
                "../../public/img/area2_img2.png",
                "../../public/img/area2_img3.png",
                "../../public/img/area3_img1.png",
                "../../public/img/area3_img2.png",
                "../../public/img/area3_img3.png",
                "../../public/img/area4_img1.png",
            ],
            localImgNum: 0,
        }
    },
    methods: {
        changeRound() {
            this.isRounded = !this.isRounded;
            this.move = !this.move;
        },
        changeImg() {
            this.imgNum++;
            if (this.imgNum >= this.imgArr.length) {
                this.imgNum = 0;
            }
        },
        changeLocalImg() {
            this.localImgNum++;
            if (this.localImgNum >= this.localImgArr.length) {
                this.localImgNum = 0;
            }
        },

    },
}
</script>
<template>
    <div>
        <h2>這裡是VBind</h2>
        <button type="button" @click="changeImg">Change!</button>
        <button type="button" @click="changeLocalImg">Change Local!!</button>
    </div>
    <!-- <div class="container">
        <div class="box" v-bind:class="{
            rounded: isRounded,
            'to-right': move,
        }"></div>

    </div> -->
    <div class="img-area">
        <img :src="imgArr[imgNum]">
        <img :src="localImgArr[localImgNum]" alt="">
        <img src="../" alt="">
    </div>
</template>
<style lang="scss">
.container {
    position: relative;

    .box {
        width: 300px;
        height: 300px;
        background-color: blue;
        position: absolute;
        transition: 0.8s;
        right: 0;
    }

    .rounded {
        border-radius: 100%;
    }

    .to-right {
        right: 300px;
    }

}
</style>