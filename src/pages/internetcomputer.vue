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
                title:'About Internet Computer',
                url: 'https://internetcomputer.org/',
                description:'Internet Computer (ICP) enables developers to completely reimagine the potential of smart contracts. The "canister smart contracts" on the Internet Computer are expressive enough to build any web application directly on chain and powerful enough to serve these apps at web speed. The end users interact with the application in a browser very similar to how they would browse any traditional website without any intermediary centralized cloud infrastructure. The Internet Computer community is redesigning everything from web3 social media dapps, metaverses, and video streaming dapps to powerful games all built end-to-end (front end, backend, asset storage) that are served from the blockchain. Since every aspect of your dapp is on-chain you can imagine things like minting your gameplay instance as an NFT or building a DEX bot inside your p2p chat app. Check out some code inspirations that can help you get started.',
                icon:require('~/assets/third/dfinity-logo-vector.png'),
                points:[
                    {
                        heading: 'Coming Soon!!',
                       // copy:  'Can you build a reliable and useful price feed alternative to ChainLink on æternity?'
                    },
                    {
                        heading: 'Coming Soon!!',
                        //copy: 'We are searching for innovative minting solutions / NFT launchpad. Can æternity Oracles be used to host social NFT giveaway campaigns to verify participation and entries. How creative is the community. Check out the Graffiti dApp on æternity and think of ways to NFT-ise the artworks!'
                    },
                    {
                        heading:'Coming Soon!!',
                        //copy: 'DAOs are the potential future of organizations led by a community and you’re tasked with building solutions for DAOS. Show us how you can solve problems of governance and community and reap the rewards!'
                    },
                ],      
            }   
        }
    },
}
</script>
