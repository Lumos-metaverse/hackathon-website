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
                title:'About æternity ',
                url: 'https://aeternity.com/',
                description:'A Blockchain for the Masses: Engineered to scale and last, æternity is an easily accessible blockchain platform for the global public. With numerous innovative functionalities and performance far ahead of earlier blockchains, æternity allows its users and community to seamlessly venture into the new era of society, economy, and digital interactions.',
                icon:require('~/assets/third/aeternity-ae-logo.svg'),
                points:[
                    {
                        heading: 'DeFi powered by Oracles',
                        copy:  'By using the native Oracle system we want you to build a powerful price feed alternative to ChainLink that can power all DeFi æpps built on æternity in a decentralized and efficient way!'
                    },
                    {
                        heading: 'DAOs - the future of our society!',
                        copy: 'The future of society will be powered by DAOs. Think about innovative solutions that empower our future society to fundraise, to make the right decisions & to empower the people!'
                    },
                    {
                        heading:'NFTs everywhere!',
                        copy: 'Take the unique opportunity to build one of the first NFT solutions that are built around our brand new AEX-141 NFT standard. Were looking for minting solutions, launchpads, auction platforms and marketplaces. Check out our Graffiti æpp and think of innovative ways to NFT-ise the artworks!'
            
                    },
                    {
                        heading:'Some Tools and Resources to get you started',
                        href: 'https://github.com/aeternity'
            
                    }
                        
                ]      
            }   
        }
    }
}
</script>
