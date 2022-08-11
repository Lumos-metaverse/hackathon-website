<template>
<section class="mentors">
        <div class="title">
            Meet the Mentors
        </div>
        <div class="sub-title">
            Get the support of experts from leading blockchain experts!
        </div>
        <div class="wrap" style="height:381px;width:360px;margin:0 auto"  >
            <hooper ref="carousel" style="width:100%;height:400px;" :settings="hopperSettings">
                <slide  v-for="(item,index) in mentors" :key="index" :style="item.style">
                        <!-- <div
                            style="width: 100%; max-width: 320px; margin: 0 auto;background-color: aqua;">
                        >
                                card
                        </div> -->
                        <div class="slider-hooper">
                            <div class="image">
                                <g-image :src="item.image"></g-image>
                            </div>
                            <div class="copy">
                                <div>
                                    <div class="name">{{item.name}}</div>
                                    <div class="position">{{item.position}}</div>
                                </div>
                                <div class="logo">
                                    <g-image :src="item.companyLogo"></g-image>
                                </div>
                            </div>
                        </div>
                </slide>
            </hooper>
        </div>
        <div class="button-holder">
            <button @click="slide">
                <g-image src="~/assets/mentors/arrow-left.svg"/>
            </button>
            <button @click="slideNext"><g-image src="~/assets/mentors/arrow-right.svg"/></button>
        </div>
    </section>
</template>
<script>
// import slider components
// import { slider, slideritem } from 'vue-concise-slider'
// import Vue from 'vue';
// import { slider, slideritem } from 'vue-concise-slider';
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

// Vue.component('Slider', slider);
// Vue.component('SliderItem', slideritem);
export default {
props:{
    isMobile: {
        type: Boolean,
        default: false
    },
},
components:{
    Hooper,
    Slide
},
data () {
   return {
    hopperSettings:{
        centerMode:true,
        itemsToShow:1.5,
        wheelControl:false,
        infiniteScroll:true,
        pagination:'yes',
    },
     //data list [array]
      mentors:[
       {
         name:'Kaavya Prasad',
         position:'Founder, Lumos Labs',
         image: require('~/assets/mentors/final/kavya.png'),
         companyLogo: require('~/assets/mentors/logo/lumos.png'),
       },
       {
         name:'Raghu Mohan',
         position:'Founder, Buidlers Tribe',
         image: require('~/assets/mentors/final/raghu.png'),
         companyLogo: require('~/assets/mentors/logo/builders.png'),
       },
       {
         name:'Pareen Lathia',
         position:'Co-Founder, Buidlers Tribe',
         image: require('~/assets/mentors/final/pareen.png'),
         companyLogo: require('~/assets/mentors/logo/builders.png'),
       },
       {
         name:'Shreyas Narayana',
         position:'Head of Guilds, Near Protocol',
         image: require('~/assets/mentors/final/shreyas.png'),
         companyLogo: require('~/assets/mentors/logo/near.png'),
       },
       {
         name:'Luis Fausto',
         position:'Founder, Lirn.io',
         image: require('~/assets/mentors/final/luis.png'),
         companyLogo: require('~/assets/mentors/logo/lirn.png'),
       },
       {
         name:'Philipp Muens',
         position:'Founder, CryptoDevHub',
         image: require('~/assets/mentors/final/philipp.png'),
         companyLogo: require('~/assets/mentors/logo/hub.png'),
       },
       {
         name:'Suhas Motwani',
         position:'Founder, The Product House',
         image: require('~/assets/mentors/final/suhas.png'),
         companyLogo: require('~/assets/mentors/logo/product.png'),
       },
       {
         name:'Raj Karia',
         position:'Founder, Truts',
         image: require('~/assets/mentors/final/raj.png'),
         companyLogo: require('~/assets/mentors/logo/truts.png'),
       },
       {
         name:'Muneer Mohammed',
         position:'Senior Program Manager, IEEE',
         image: require('~/assets/mentors/final/muneer.png'),
         companyLogo: require('~/assets/mentors/logo/ieee.png'),
       },
       {
         name:'Anshul Rustaggi',
         position:'Founder, Zionverse',
         image: require('~/assets/mentors/final/anshul.png'),
         companyLogo: require('~/assets/mentors/logo/zion.png'),
       },
       {
         name:'Tingyan Deng',
         position:'Founder, Vanderbilt University',
         image: require('~/assets/mentors/final/tingyan.png'),
         companyLogo: require('~/assets/mentors/logo/vanderbilt.png'),
       },
       {
         name:'Chunda McCain',
         position:'Founder, Pen Blockchain',
         image: require('~/assets/mentors/final/chundan.png'),
         companyLogo: require('~/assets/mentors/logo/pen.png'),
       },
       {
         name:'Kunal Arora',
         position:'Founder, Blockchain San Diago',
         image: require('~/assets/mentors/final/kunal.png'),
         companyLogo: require('~/assets/mentors/logo/san.png'),
       },
       {
         name:'Ingi Kim',
         position:'Founder, States DAO',
         image: require('~/assets/mentors/final/ingi.png'),
         companyLogo: require('~/assets/mentors/logo/states.png'),
       },
       {
        name: 'Ramesh Ramdoss',
        position: 'Co-Chair, IEEE Blockchain', 
        image: require('~/assets/mentors/final/ramesh.png'),
         companyLogo: require('~/assets/mentors/logo/ieee-blockchain.png'),
         
       }
     ],
     //Slider configuration [obj]
     options: {
       currentPage: 0,
       speed: 300,
       itemAnimation: true,
       centeredSlides: true,
       thresholdDistance: 100,
       thresholdTime: 300,
       loopedSlides: 2,
       slidesToScroll: 1,
       pagination:false,
       loop: true
     }
   }
 },
 methods:{
    slideNext () {
    this.$refs.carousel.slideNext();
  },
    slide () {
    this.$refs.carousel.slidePrev();
  }
 }
}
</script>
<style lang="scss" scoped>
.mentors{
 background:#220832;   
 .title{
    font-family: 'Brinnan';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 145.9%;
    /* or 44px */
    padding-left: 32px;

    letter-spacing: -0.015em;
    padding-top: 48px;
    padding-bottom:16px;
    color: #FFFFFF;
 }
 .sub-title{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 145.9%;
    padding-bottom:24px;
    padding-left: 32px;
    /* or 20px */


    color: rgba(255, 255, 255, 0.8);  
 }
}
.button-holder{
    display: flex;
    justify-content: flex-end;
    margin-top:55px;
    margin-right:28px;
    padding-bottom: 65px;
    button{
        background: none;
        border: none;
        outline: none;
        cursor: pointer;

    }
}
.slider-hooper {
    margin:0 7px;
    background:#572873;
    border-radius: 9.21867px;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;                        
    padding:0 8px;
    .image{
        height:280px;
        width: 94%;
        img{
            width:100%;
            height:100%;
            object-fit: contain;
        }
    }
    .copy{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 16px;
        width:100%;
        .name{
            font-family: 'Brinnan';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 145.9%;
            /* or 23px */
            text-align: left;
            letter-spacing: -0.015em;
            max-width:180px;

            color: #FFFFFF;
        }
        .position{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 145.9%;
            /* or 18px */
            word-break:break-all;
            letter-spacing: -0.015em;
            max-width:115px;
            color: #21E7FC;
        }
        .logo{
            width:32px;
            img{
                width:100%;
                object-fit: cover;
            }
        }
    }
}
</style>