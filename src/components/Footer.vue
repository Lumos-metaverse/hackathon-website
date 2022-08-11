<template>
    <div class="footer">
        <div class="left">
            <div class="logo">
                <g-image src="~/assets/home/logo.svg"/>
                <div class="text">
                    Lumos Labs is building a metaverse for builders and Web3 ecosystem enablers to share opportunities to build and scale-up. 
                </div>
            </div>
            <div class="links">
                <div v-for="(l,idx) in links" :key="idx">
                    <a :href="l.link">
                        {{l.name}}
                    </a>
                </div>
            </div>
        </div>
        <div class="banner">
            <div>© 2022 by Lumos Metaverse</div>
            <div class="social">
                <a :href="logo.link" target="_blank" v-for="(logo, idx) in social" :key="idx">
                    <img :src="logo.icon"/>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Footer',
        data:function(){
            return{
                links:[
                    {
                        name:'About Us',
                        link:'/#about'
                    },
                    {
                        name:'How it Works',
                        link:'#how-it-works'
                    },
                    {
                        name:'What We Look For',
                        link:'#what-we-look-for'
                    },
                    {
                        name:'Contact Us',
                        link:'#contact-us'
                    },
                    {
                        name:'Careers',
                        link:'#careers'
                    },
                    {
                        name:'FAQs',
                        link:'/#faqs'
                    },

                ],
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
                    link:'  https://discord.gg/WyfmzJpzZd',
                    icon:require('~/assets/reach/logo/discord.svg'),
                }
            ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .footer{
        background: #230834;
        position: relative;
        overflow: hidden;
        padding-bottom: 100px;
        width:calc(100% - 32px);
        padding-left: 16px;
        padding-right: 16px;
        .left{
            min-width:320px;
            .text{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 145.9%;
                letter-spacing: -0.015em;
                color: rgba(255, 255, 255, 0.8);

            }
        }
        .links{
            margin-top: 55px;
            a{
                text-decoration: none;
                font-family: 'Brinnan';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 240.4%;
                letter-spacing: -0.015em;
                color: #FFFFFF;
            }
        }
        .social{
            display: none;
        }
        .banner{
            background: #2F1143;
            position: absolute;
            bottom: 0;
            width:110%;
            left:0;
            font-family: 'Brinnan';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 212.9%;
            letter-spacing: -0.015em;
            color: #FFFFFF;
            padding:19px;
        }
    }
</style>
<style lang="scss" scoped>
    @media (min-width: 768px){
        .left{
            display: flex;
            align-items: center;
            justify-content: space-around;
            .logo{
                width:300px;
            }
        }
        .banner{
            display: flex;
            justify-content: space-around;
        }
        .social{
            display: flex !important;
            justify-content: space-between;
            width:20%;
             a{
                 width:24px;
                 height: 24px; 
                img{
                    width:100%;
                    height: 100%;
                    object-fit: contain;
                }
             }
        }
         .logos{
            width:60%;
            justify-content: space-between;
        }
    }
</style>