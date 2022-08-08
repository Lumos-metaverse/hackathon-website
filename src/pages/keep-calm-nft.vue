<template>
    <track-details :trackObj="trackObj"></track-details>
</template>
<script>
import TrackDetails from '~/components/TracksDetails.vue'
export default {
    components:{
        TrackDetails
    },
    data() {
        return {
         trackObj:{
                title:'Keep calm and NFT-ise it!',
                description:'NFTs are taking the world by storm and has taken the Web3 space closer and closer to consumer-facing adoption. We invite you to cook this storm up with your creativity and inventiveness. Here are some problem statements to get you started.',
                icon:require('~/assets/third/cards/logo4.png'),
                points:[
                    {
                        heading: 'Marketplace',
                        copy: 'One of the biggest probems statements in NFT marketplaces are Fake NFTs and plagiarism. Simply put, the marketplace issue is categorised into the sale of unauthorised copies of NFTs, NFTs sold by people who don’t actually own them, and finally, people selling NFTs is sets in the form of securities. Marketplaces can be rife with issues. We hope this inspires you to take up this problem statement and enable a free, secure and accountable marketplace for NFTs. '
                    },
                    {
                        heading: 'Loyalty points or rewards ',
                        copy: 'Incentivisation is always fun. It is a great way to create an impact and leave users with something to commemorate participation. Show us how best you can enable participation with incentivisation.'
                    },
                    {
                        heading:'Ownership of assets',
                        copy: 'With NFT marketplaces still wrapping their heads around the issue of ownership imbibed with duplicity and discord, we believe that this area could use a fresh pair of eyes.  Show us know you would leverage blockchains’ biggest strengths - immutability and decentralised identities to reshape the ownership of Assets.'
                    },
                ],      
            }   
        }
    },
}
</script>