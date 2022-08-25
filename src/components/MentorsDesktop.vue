<template>
<section class="mentors">
        <div class="title">
            Meet the Mentors
        </div>
        <div class="sub-title">
            Get the support of experts from leading blockchain experts!
        </div>
        <div class="grid">
            <div class="card" v-for="(item,index) in mentors" :key="index">
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
            </div>
        </div>
    </section>
</template>
<script>
export default {
name: 'MentorsDesktop',
props:{
    isMobile: {
        type: Boolean,
        default: false
    },
},
data () {
   return {
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
         
       },
        {
        name: 'Gnana Lakshmi T C',
        position: 'Founder, The Phoenix Guild', 
        image: require('~/assets/mentors/final/gyan.png'),
         companyLogo: require('~/assets/mentors/logo/pguild.png'),
         
       }
     ],
   }
 }
}
</script>
<style lang="scss" scoped>
.mentors{
 background:#220832;   
 min-height: 100vh;
 width: 100%;
 padding-bottom: 128px;
 padding-top: 100px;
 .title{
    font-family: 'Brinnan';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 145.9%;
    /* or 44px */
    padding-left: 32px;

    letter-spacing: -0.015em;
    padding-top: 48px;
    padding-bottom:16px;
    color: #FFFFFF;
    margin-left: 305px;
    padding-bottom: 5px;
 }
 .sub-title{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 145.9%;
    padding-bottom:56px;
    padding-left: 32px;
    margin-left: 305px;
    /* or 20px */


    color: rgba(255, 255, 255, 0.8);  
 }
 .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 26px;
    /* max-width: 1000px; */
    margin: 0 auto;
    row-gap: 26px;
    justify-items: center;
    max-width: 950px;
    .card{
        width: 216px;
        margin-bottom: 26px;
    }
 }
}
.slider-hooper {
    // margin:0 7px;
    background:#572873;
    border-radius: 9.21867px;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;                        
    padding:8px 15px;
    .image{
        height:231px;
        width:100%;
        img{
            width:100%;
            height:100%;
            object-fit: contain;
        }
    }
    .copy{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
        width:100%;
        margin-bottom: 16px;;
        .name{
            font-family: 'Brinnan';
            font-style: normal;
            font-weight: 700;
            font-size: 12.91px;
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
            font-size: 9.5px;
            line-height: 145.9%;
            /* or 18px */
            word-break:break-all;
            letter-spacing: -0.015em;
            max-width:150px;
            color: #21E7FC;
        }
        .logo{
            width:30px;
            border-radius: 2px;
            img{
                width:100%;
                object-fit: cover;
                border-radius: 2px;
            }
        }
    }
}
</style>