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
                        heading: 'Blue Sky',
                        copy:  'Want to build the next-generation DeFi protocol? Or say a decentralized game that incorporates tokenization? Maybe a metaverse to sell online real estate as NFTs? Do not feel constrained by any category. Build any end-to-end application that incorporates tokenization on Internet Computer! '
                        

                    },
                    {
                        heading: 'Some resources to get you started!',
                        href: 'https://support.dfinity.org/hc/en-us/articles/4965948618772-Supernova-Hackathon-2022-Developer-Resources'
                    },
                    
                ],      
            }   
        }
    },
}
</script>
