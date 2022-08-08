<template>
    <section class="reach">
        <div class="image">
            <g-image class="mb" src="~/assets/reach/bg.png"/>
            <g-image class="desktop" src="~/assets/reach/bg-desktop.png"/>
            <div class="blur"></div>
        </div>
        <div class="copy">
            <div class="heading">
                Stay updated with our journey
            </div>
            <div class="logos">
                <a :href="logo.link" target="_blank" v-for="(logo, idx) in social" :key="idx">
                    <img :src="logo.icon"/>
                </a>
            </div>
            <div class="sub-heading">
                SIGN UP TO OUR NEWSLETTER:
            </div>
            <div class="email">
                <div>
                    <input type="email" placeholder="Enter Email"/>
                    <button>
                        <g-image src="~/assets/reach/arrow.svg"/>
                    </button>
                </div>
                <div class="line"></div>
            </div>
            <div class="check">
                <div class="check-box">
                    <input type="checkbox"/>
                </div>
                <div class="text">
                    I have read and accept the <a>Terms & Privacy.</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'Reach',
    data:()=>{
        return{
            social:[
                {
                    link:'https://bit.ly/3oz6kjJ',
                    icon:require('~/assets/reach/logo/facebook.svg'),
                },
                {
                    link:'https://bit.ly/3Bs4qZQ',
                    icon:require('~/assets/reach/logo/twitter.svg'),
                },
                {
                    link:'https://bit.ly/3oE02j0',
                    icon:require('~/assets/reach/logo/linkedin.svg'),
                },
                {
                    link:'https://medium.com/lumos-labs',
                    icon:require('~/assets/reach/logo/medium.svg'),
                },
                {
                    link:'https://bit.ly/3zB3lxA',
                    icon:require('~/assets/reach/logo/instagram.svg'),

                },
                {
                    link:' https://discord.gg/XWj3ruPYsN',
                    icon:require('~/assets/reach/logo/discord.svg'),
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .mb{
        display:block;
    }
    .desktop{
        display:none;
    }
    .blur{
        height: 162.83px;
        width:100%;
        background: linear-gradient(180deg, rgba(35, 8, 52, 0) 0%, #230834 79.69%);
    }
    .reach{
        min-height: 100vh;
        width:100%;
        overflow: hidden;
        position: relative;
        .image{
            position: relative;
            min-height: 352px;
            img{
                width:100%;
                height:100%;
                height:352px;
                width:1017.88px;
                position:absolute;
                top: 0;
                left: -300px;
                object-fit:contain;
            }
            .blur{
                position: absolute;
                bottom:0;
                z-index: 4;
            }
        }
        .copy{
            .heading{
                font-family: 'Brinnan';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 145.9%;
                /* or 44px */

                text-align: center;
                letter-spacing: -0.015em;

                color: #FFFFFF;
                margin-bottom: 30px;
            }
            .logos{
                display: flex;
                width: 70%;
                margin: 0 auto;
                justify-content: space-between;
                a{
                    width:20px;
                    height: 20px;
                    img{
                        height: 100%;
                        width: 100%;
                        object-fit: contain;
                        
                    }
                }
            }
            .sub-heading{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                line-height: 145.9%;
                text-align: center;
                letter-spacing: -0.015em;
                color: #FFFFFF;
                margin-top: 111px;
                margin-bottom: 31px;
            }
            .email{
                width:80%;
                margin:0 auto;
                div{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    }
                input{
                    font-family: 'Brinnan';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 26px;
                    line-height: 145.9%;
                    letter-spacing: -0.015em;
                    background: none;
                    border: none;
                    color: #CCABE1;
                    width:80%;
                    outline: none;
                }
                button{
                    width:41.31px;
                    height:41.31px;
                    border-radius: 50%;
                    border:none;
                    background: #CCABE1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .line{
                    width: 100%;
                    height: 1px;
                    background: #6B68A6;       
                    margin-top: 16px;     
                }
            }
            .check{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 15px;
                padding-bottom: 100px;
                .text{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 145.9%;
                    letter-spacing: -0.015em;
                    color: rgba(255, 255, 255, 0.6);
                    a{
                        font-weight: 700;
                        text-decoration: underline;
                        color:white;
                    }
                }
            }
        }
    }
    @media (min-width: 786px) {
        .mb{
            display:none;
        }
        .desktop{
            display:block;
        }
        .reach{
            .image{
                min-height: 400px;
                width: 100%;
                // margin-block-end: 600px;
                img{
                    width:100%;
                    height:400px;
                    object-fit: cover;
                    left: 0;
                }
            }
            .copy{
                .heading{
                    font-size:70px;
                    width:40%;
                    margin:0 auto;
                    margin-bottom: 60px;
                }
                .logos{
                    width:40%;
                    a{
                        width:32px;
                        height: 32px; 
                    }
                }
                .sub-heading{
                    font-size:18px;
                    margin-top: 200px;
                }
                .email{
                    width:40%;
                    font-size: 80px;
                }
            }
        }
    }
</style>