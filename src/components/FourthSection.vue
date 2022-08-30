<template>
    <section class="fourth" ref="section">
        <div class="left" >
            <div class="left-w" ref="left">
                <div class="title">
                    <div>Hackathon</div> Roadmap</div>
                <div class="sub-title">#BUIDL for Web3 Hack 2022's roadmap is streamlined with a scheduled to help you stay up-to-date with the Hackathon journey.</div>
                <div class="s-btn" @click="registerNow">
                    <g-image class="outline" src="~/assets/fourth/btn-outline.svg"></g-image>
                    <g-image id="bg" ref="bg" class="bg" src="~/assets/fourth/btn.svg"/>
                    <a href="https://lu.ma/1bvd0pkf" target="_blank" rel="noopener noreferrer">
                    <div id="outline" ref="outline">
                    REGISTER NOW
                    <g-image style="width:9px;height:9px;margin-left:8px;" width="12" height="12" src="~/assets/arrows/purple-arrow.svg"/>
                    </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="right">
            <Steppers/>
        </div>
    </section>
</template>
<script>
import Steppers from '~/components/Steppers.vue'
export default {
    name:'FourthSection',
    components:{
        Steppers
    },
    methods:{
        registerNow(){
            document.getElementById('outline').style.transform = 'translate3d(0px, 0px, 0px) !important;'
            document.getElementById('bg').style.transform = 'translate3d(0px, 0px, 0px) !important;'
        }
    }
}
</script>
<style lang="scss" scoped>
    .fourth{
        min-height:100vh;
        width:100%;
        background: linear-gradient(180deg, #5B1D7E, #030027);
        display: flex;
        flex-wrap: wrap;
        .right{
            min-width: 300px;
        }
        .left-w{
            position: -webkit-sticky; /* Safari */
            position: sticky;
            top: 100px;
        }
        .left{
            min-width: 300px;
            max-width: 340px;
            width:100%;
            padding-left: 30px;
            position:relative;
            .title{
                font-family: 'Brinnan';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 145.9%;
                letter-spacing: -0.015em;
                color: #FFFFFF;
                margin-bottom:21px;
                margin-top: 103px;
            }
            .sub-title{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 145.9%;
                margin-bottom:51px;
                /* or 20px */


                color: rgba(255, 255, 255, 0.8);
            }
            .s-btn{
                position: relative;
                width:180px;
                height:50px;
                transition: all .3s ease-in-out;
                will-change: transform;
                cursor: pointer;
                font-family: 'Brinnan';
                font-style: normal;
                font-weight: 700;
                line-height: 145.9%;
                font-size: 12px;
                div{
                    position: absolute;
                    width:100%;
                    margin:0 auto;
                    height: 100%;
                    top:0;
                    left:0;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                }
                img{

                    object-fit: contain;
                }
                .outline{
                    width:100%;
                    height: 100%;
                    
                }
                .bg{
                    width:100%;
                    position: absolute;
                    top:0;
                    left:0;
                    height: 100%;
                    object-fit: cover;
                    font-family: 'Brinnan';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 11px;
                    line-height: 145.9%;
                    letter-spacing: 0.1em;
                    color: #36104C;
                }
            }
            .s-btn:hover{
                .bg{
                    transform: translate3d(-5.23px, -5.27px, -5.27px);
                }
                div{
                    transform: translate3d(-5.23px, -5.27px, -5.27px);
                }
            }
            .s-btn:active{
                .bg{
                    transform: translate3d(0px, 0px, 0px);
                }
                div{
                    transform: translate3d(0px, 0px, 0px);
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
    @media (min-width: 768px) {
        .fourth{
            display: flex;
            justify-content: center;
          .left{
            // margin-right: 100px;
            .title{
                font-size: 45px;
            }
            .sub-title{
                font-size: 15px;
            }
            // padding-left: 300px;
          }
          .right{
            width:50%;
            padding-top: 108px;
          }
        }
    }
</style>
