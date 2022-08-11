<template>
    <section class="sponsors">
        <div class="title">
            Partners
        </div>

        <div class="wrapper">
            <div style="cursor:pointer" class="tile" v-for="(sponsor,i) in sponsors" :key="i" @click="openPage(sponsor.url)">
                <g-image class="bg" src="~/assets/sponsors/tile.svg"></g-image>
                <div class="sponsor">
                    <g-image :src="sponsor.logo"></g-image>
                </div>
            </div>
        </div>
        <div class="wrapper-desktop">
            <div style="cursor:pointer" class="tile" v-for="(sponsor,i) in sponsors" :key="i" @click="openPage(sponsor.url)">
                <g-image class="bg" src="~/assets/sponsors/tile-desktop.svg"></g-image>
                <div class="sponsor">
                    <g-image :src="sponsor.logo"></g-image>
                    <div>{{sponsor.name}}</div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default{
        name:'Sponsors',
        props:{
            isMobile: {
                type: Boolean,
                default: false
            }
        },
        methods:{
            openPage(url){
                if(url){
                    window.open(url, '_blank')
                }
            }
        },
        data(){
            return{
                sponsors:[
                    {
                        name: 'IEEE Blockchain',
                        logo: require('~/assets/sponsors/logos/ieee-blockchain.png'),
                        url:'https://www.ieee.org/'
                    },
                    {
                        name: 'IEEE SA Standards Association',
                        logo: require('~/assets/sponsors/logos/ieee-sa.png'),
                        url:'https://www.ieee.org/'
                    },
                    {
                        name: 'Buildspace',
                        logo: require('~/assets/sponsors/logos/buildspace.jpeg'),
                        url:'https://buildspace.so/'
                    },
                 
                    {
                        name:'Buidlers Tribe',
                        logo: require('~/assets/sponsors/logos/builders.png'),
                        url:'https://buidlerstribe.com/'
                    },
                    {
                        name: 'The Product House',
                        logo: require('~/assets/sponsors/logos/product.png'),
                        url:'https://www.theproduct.house/'
                    },
            
                    {
                        name: 'CryptoDevHub',
                        logo: require('~/assets/sponsors/logos/hub.png'),
                        url:'https://cryptodevhub.io/'
                    },
                    {
                        name: 'Vanderbilt University',
                        logo: require('~/assets/sponsors/logos/vanderbilt.png'),
                        url:'https://www.vanderbilt.edu/'
                    },
 
                    {
                        name: 'States DAO',
                        logo: require('~/assets/sponsors/logos/states.png'),
                        url:'https://statesdao.club/'
                    },
                    {
                        name: 'Blockchain San Diago',
                        logo: require('~/assets/sponsors/logos/san.png'),
                        url:'https://blockchain.ucsd.edu/'
                    },
                    {
                        name: 'WebX DAO',
                        logo: require('~/assets/sponsors/logos/webx.png'),
                        url:'https://bio.link/webxdao'
                    },
                    {
                        name: 'Web3 Conf',
                        logo: require('~/assets/sponsors/logos/web3.png'),
                        url:'https://web3confindia.xyz/#home'
                    },
                    {
                        name: 'Web3 Bharat',
                        logo: require('~/assets/sponsors/logos/bharat.png'),
                        url:'https://web3bharat.xyz/'
                    },
                    {
                        name: 'Truts',
                        logo: require('~/assets/sponsors/logos/truts.png'),
                        url:'https://www.truts.xyz/'
                    },
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
.sponsors{
    background-color: linear-gradient(180deg, #030027 0%, #030027 40.05%);
    min-height: 400px;
    width:calc(100% - 32px);
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    position: relative;
    //background-image: url('../../static/bg-building-mobile.png'),linear-gradient(180deg, #030027 0%, #030027 40.05%);;
    background-position: center bottom;
    // background-size: 100% 600px;
    background-repeat: no-repeat;
        .title{
            font-family: 'Brinnan';
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 145.9%;
            letter-spacing: -0.015em;
            color: #FFFFFF;
            padding-left:32px;
            margin-bottom: 25px;
        }
        .wrapper{ 
                display: grid;
                row-gap: 12px;
                column-count: 4;
                width: 100%;
                column-gap: 12px;
                grid-template-columns: auto auto auto auto;
                padding-bottom: 100px;

            .tile{
                position: relative;
                width: 77px;
                height: 75px;
                margin: 0 auto;
                .bg{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                .sponsor{
                    position: absolute;
                    width:36px;
                    height: 36px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
            .img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
        .wrapper-desktop{ 
                display: none;
                column-count: 3;
                width: 100%;
                grid-template-columns: auto auto auto;
                padding-bottom: 5px;

            .tile{
                position: relative;
                width: 301px;
                height: 108px;
                margin-bottom: 25px;
                .bg{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                .sponsor{
                    position: absolute;
                    width:100%;
                    height: 100%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    font-family: 'Brinnan';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 145.9%;
                    color: #FFFFFF;
                    img{
                        width:70px !important;
                        height:70px !important;
                        object-fit: contain;
                        margin-left: 16px;
                    }
                    div{
                        margin-left: 16px;

                        // margin-left: auto;
                        // margin-right: 16px;
                    }

                }
            }
            .img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
        .buildings{
            width: 100%;
            margin-top: auto;
            position: absolute;
            bottom: 0;
            left: 0;
        }
        .buildings-desktop{
            display: none;
            position: absolute;
            bottom: 0;
            left: 0;
            // max-height: 200px;
        }
                
    }

</style>
<style lang="scss" scoped>
    @media (min-width: 786px) {
            .sponsors{
            padding-top: 100px;
            min-height: 100vh;
            position: relative;
            padding-top: 0;
            //background-image: url('../../static/bg-building.png'),linear-gradient(180deg, #030027 0%, #030027 40.05%);
            background-position: center bottom;
            background-repeat: no-repeat;
            .title{
                font-family: 'Brinnan';
                font-style: normal;
                font-weight: 700;
                font-size: 45px;
                line-height: 145.9%;
                padding-top:176px;
                margin-left: 305px;
                padding-bottom: 50px;
                /* or 90px */

                letter-spacing: -0.015em;

                color: #FFFFFF;
            }
            .wrapper{
                display:none;
                // position: absolute;
                // top:0;
            }
            .wrapper-desktop{
                display:grid;
                max-width: 1000px;
                margin: 0 auto;
            }
            .buildings{
                display: none;
            }
            .buildings-desktop{
                width: 100%;
                margin-top: auto;
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                max-height: 600px;
                z-index: 1;
            }
        }
    }
</style>