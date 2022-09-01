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
                title:'About Polygon',
                url: 'http://polygon.technology',
                description:'Polygon is the leading platform for Ethereum scaling and infrastructure development. Its growing suite of products offers developers easy access to all major scaling and infrastructure solutions: L2 solutions (ZK Rollups and Optimistic Rollups), sidechains, hybrid solutions, stand-alone and enterprise chains, data availability solutions, and more. Polygon’s scaling solutions have seen widespread adoption with 37000+ applications hosted, 1B+ total transactions processed, ~160M+ unique user addresses, and $5B+ in assets secured.',
                icon:require('~/assets/third/polygon-matic-logo.svg'),
                points:[
                    {
                        heading: 'Best DeFi App built on Polygon',
                        copy:  'The onset of DeFi is changing FinTech as we know it! Identify problem statements that are plaguing the DeFi space and leverage Polygon to change the way consumers transact.'
                    },
                    {
                        heading: 'Best NFT App built on Polygon',
                        copy: 'NFTs are taking digital assets to a whole new level by opening the proverbial Web3 doors to the general public. Show us how you will revolutionize this space with the support of Polygon and win big!'
                    },
                    {
                        heading:'Best Gaming/ Metaverse Track ',
                        copy: 'Web3 is raising the stakes for incentives within gaming experiences and providing gamers with a whole new experience. Double down and show us how you can elevate gaming experiences with the help of Polygon!'
                    },
                ],      
            }   
        }
    },
}
</script>
