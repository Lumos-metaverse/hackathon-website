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
                title:'About Aternity',
                url: 'https://aeternity.com/',
                description:'A Blockchain for the Masses: Engineered to scale and last, æternity is an easily accessible blockchain platform for the global public. With numerous innovative functionalities and performance far ahead of earlier blockchains, æternity allows its users and community to seamlessly venture into the new era of society, economy, and digital interactions.',
                icon:require('~/assets/third/cards/logo3.png'),
                points:[
                    {
                        heading: 'DeFi the odds!',
                        copy:  'Can you build a reliable and useful price feed alternative to ChainLink on æternity?'
                    },
                    {
                        heading: 'Keep calm and NFT-ise it!',
                        copy: 'We are searching for innovative minting solutions / NFT launchpad. Can æternity Oracles be used to host social NFT giveaway campaigns to verify participation and entries. How creative is the community. Check out the Graffiti dApp on æternity and think of ways to NFT-ise the artworks!'
                    },
                    {
                        heading:'Can you DAO it?',
                        copy: 'DAOs are the potential future of organizations led by a community and you’re tasked with building solutions for DAOS. Show us how you can solve problems of governance and community and reap the rewards!'
                    },
                ],      
            }   
        }
    },
}
</script>