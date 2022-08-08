<template>
    <section class="second">
        <div class="copy">
            <div class="title">
              About the Hackathon  
            </div>
            <div class="content">
                <div>#BUIDL your own path, Shape your own Web3 Journey!</div>
                <div>The #BUIDL for Web3 Hack (2022) is designed to open up access to the Web3 space for #BUIDLers like you. Based on your skill level, we invite you to choose a track featured by a Web3 platform that best suits your project.</div>
                <div class="green">#BUIDL & Win Big! </div>
            </div>
        </div>
        <div class="image">
            <g-image v-if="isMobile" src="~/assets/second/clip-art.png"/>
            <g-image v-else src="~/assets/second/clip-art-desktop.png"/>
        </div>
    </section>
</template>
<script>
export default {
    name:'SecondSection',
    props:{
        isMobile: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
    .second{
        width:100%;
        height: 100vh;
        background: linear-gradient(52.35deg, #240834 54.6%, #5B1D7E 93.32%);
        box-shadow: 0px -20px 43px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        .copy{
            padding-left: 28px;
            padding-right: 28px;
            padding-top: 128px;
            .title{
                font-family: 'Brinnan';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                letter-spacing: -0.015em;
                color: #FFFFFF;
                margin-bottom: 12.84px;
            }
            .content{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                letter-spacing: -0.015em;
                color: rgba(255, 255, 255, 0.8);
                div:nth-child(0){
                    margin-bottom: 12.84px;
                }
                div:nth-child(1){
                    margin-bottom: 24.84px;
                }
                div:nth-child(2){
                    margin-bottom: 35.16px;
                }
                .green{
                    font-family: 'Inter';
                    font-style: italic;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 145.9%;
                    letter-spacing: -0.015em;
                    color: #B4E32D;
                }
            }
        }
        .image{
            width:100%;
            margin-top: auto;
            img{
                width:100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
    @media (min-width: 768px) {
        .second{
           flex-direction: row-reverse;
           align-items: flex-end;
           .copy{
                padding-bottom: 151px;
                margin-right: auto;
                width: 100%;
                padding-left: 73px;

                .title{
                    font-size: 45px;
                    max-width: 400px;
                    margin-bottom: 32px;
                }
                .content{
                    max-width: 400px;
                    div:nth-child(1){
                        margin-bottom: 24.84px;
                        font-size: 20px;
                    }
                    div:nth-child(2){
                        margin-bottom: 24.84px;
                        font-size: 16px;
                        font-weight: 400;
                    }
                    .green{
                        font-size: 30px;
                        margin-top: 52px;
                    }
                }
           }
            .image{
                height: 576px;
                padding-left: 199px;
                min-width: 472px;
            }
        }
    }
</style>