<template>
    <Layout>
        <div class="wrapper">
            <section class="hero">
                <!-- <g-image class="img" src="~/assets/details/grid.png"></g-image> -->
                <div class="left">
                    <div class="icon">
                        <div class="layer">
                            <img :src="trackObj.icon"/>
                        </div>
                    </div>
                    <div class="title">{{trackObj.title}}</div>
                    <div class="description">{{trackObj.description}}</div>
                    <div class="buttons">
                        <g-link to="https://unstop.com/p/buidl-for-web3-hackathon-2022-lumos-labs-413149">
                        <button class="register-now">
                            REGISTER NOW <g-image style="width:9px;height:9px;margin-left:18px;" width="12" height="12" src="~/assets/arrows/purple-arrow.svg"/>
                        </button>
                        </g-link>
                        <g-link to="https://discord.gg/WyfmzJpzZd">
                        <button class="discord">
                            JOIN DISCORD
                        </button>
                        </g-link>
                    </div>
                </div>
                <div class="right">
                    <div class="her">
                        <g-image src="~/assets/details/man.png"/>
                    </div>
                </div>
            </section>
            <section class="problem">
                <div class="head">Some problem statements to get you started.</div>
                <div class="holder">
                    <div v-for="(point,idx) in trackObj.points" :key="idx" class="row">
                        <g-image src="~/assets/details/diamond.svg"></g-image>
                        <div class="point">
                            <div class="heading">{{point.heading}}</div>
                            <div class="copy">{{point.copy}}</div>
                        </div>
                    </div>
                </div>
            </section>
            <Prizes style="margin-top:100px;"/>
        </div>
    </Layout>
</template>
<script>
import Prizes from '../components/Prizes.vue'
export default {
    name:'TracksDetails',
    components:{
        Prizes
    },
    props:{
        trackObj: {
            type: Object,
            default: () => ({})
        },
    }
}
</script>
<style lang="scss" scoped>
    .wrapper{
        padding-top: 75px;
        .img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        position: relative;
        min-height: 100vh;
        width: 100%;    
        background: linear-gradient(180deg, #9F04A4, #3C1051);
        .hero{
            padding: 53px 16px 0px;
            display: flex;
            flex-wrap: wrap;
            background-image: url('../assets/details/grid.png');
            background-position: inherit;
            background-repeat: repeat;
            background-size: contain;
            .right{
                overflow: hidden;
                width: 100%;
                max-width: 300px;
                margin: 0 auto;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            .left{
                min-width: 320px;
                .icon{
                            width: 64.39px;
                            height: 64.39px;
                            border: 0.60263px solid #FFFFFF;
                            border-radius: 6.0263px;                            
                            margin-right: 23.59px;
                            margin-bottom: 16px;
                            .layer{
                                width: 100%;
                                height: 100%;
                                border-radius: 6.0263px;
                                background:white;
                                transform: translate3d(-3.59px,-3.59px,-3.59px);
                                img{
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                }
                            }
                        }
                .title{
                    font-family: 'Brinnan';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 145.9%;
                    /* or 35px */
                    color:#fff;
                    letter-spacing: -0.015em;
                    margin-bottom: 36px;
                }
                .description{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12.4893px;
                    line-height: 145.9%;
                    /* or 18px */

                    letter-spacing: -0.015em;

                    color: rgba(255, 255, 255, 0.8);
                }
                .buttons{
                    margin-top: 64px;
                    display: flex;
                    justify-content: space-between;
                    .register-now{
                        background: linear-gradient(95.7deg, #2BF2FF 0.32%, #01C3F1 100.26%);
                        box-shadow: 0px 0px 11.02px rgba(43, 217, 255, 0.55);
                        border-radius: 4.40799px;
                        border:none;
                        font-family: 'Brinnan';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 10.2853px;
                        line-height: 145.9%;
                        display: flex;
                        align-items: center;
                        letter-spacing: 0.1em;
                        color: #36104C;
                        padding:15px 20px;
                        flex:1;
                        cursor: pointer;
                    }
                    .discord{
                        border: 0.734665px solid #F0F0F0;
                        filter: drop-shadow(0px 0px 11.02px rgba(43, 217, 255, 0.55));
                        border-radius: 4.40799px;
                        font-family: 'Brinnan';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 10.2853px;
                        line-height: 145.9%;
                        display: flex;
                        align-items: center;
                        letter-spacing: 0.1em;
                        color:#fff;
                        background: none;
                        padding:15px 20px;
                        flex:1;
                        margin-left: 25px;
                        text-align: center;
                        justify-content: center;
                        cursor: pointer;
                    }
                }
            }
            .right{
                min-width: 320px;
            }
           
        }
         .problem{
                width:80%;
                max-width: 950px;
                margin:0 auto;
                background: #633181;
                backdrop-filter: blur(5.29285px);
                border-radius: 3.81085px;
                margin-top: 64px;
                padding:16px;
                .head{
                    font-family: 'Brinnan';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 145.9%;
                    letter-spacing: -0.015em;
                    color: #FFFFFF;
                    margin-bottom: 16px;
                }
                .holder{
                    .row{
                        display:flex;
                        align-items: flex-start;
                        margin-bottom: 24px;
                        img{
                            width:28px;
                            margin-right: 8px;
                        }
                        .heading{
                            font-family: 'Brinnan';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 16px;
                            line-height: 145.9%;
                            letter-spacing: -0.015em;
                            color: #FFFFFF;
                            margin-bottom: 16px;
                        }
                        .copy{
                            font-family: 'Brinnan';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 13.4893px;
                            line-height: 145.9%;
                            letter-spacing: -0.015em;
                            color: #FFFFFF;
                        }
                    }
                }
            }
    }
    @media (min-width: 768px) {
        .wrapper{
            padding-bottom: 80px;
            .problem{
                margin-top: 16px;
                padding: 49px 56px 28px;
                .head{
                    font-size:35px;                    
                }
                .holder{
                    .row{
                        img{
                            width:51px;
                            margin-right: 51px;
                        }
                        .heading{
                            font-size:25px;
                        }
                        .copy{
                            font-size:14px;
                        }
                    }
                }
            }
            .hero{
                min-height: 70vh;
                display: flex;
                padding-top: 100px;
                .left{
                    margin: 0 auto;
                    max-width: 425px;
                    justify-content: center;
                    .icon{
                        width:92px;
                        height: 92px;
                    }
                    .title{
                        font-size: 30px;
                    }
                    .description{
                        font-size: 16px;
                    }
                    .buttons{
                        .register-now,.discord{

                            font-size: 12px !important;
                        }
                    }
                }
                .right{
                    margin: 0 auto;
                    max-width: 425px;
                    .her{
                        max-width: 300px !important;
                    }
                }
            }
        }
    }
</style>