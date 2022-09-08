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
                        heading: 'DeFi on steroids!',
                        copy:  'Explore the power of æternity core features and show the world how powerful State Channels and the native Oracle system are. Build meaningful applications around our AEX-9 Fungible Token Standard that interface with our Superhero DEX.'
                    },
                    {
                        heading: 'DAO - power to the community!',
                        copy: 'The future of society will be powered by community driven DAOs running on public blockchains. With the Governance æpp and Superhero.com we kickstarted this shift in society. These examples should inspire you to come up with a cool solution that empowers communities!'
                    },
                    {
                        heading:'AENS & NFTs - claim, collect & trade!',
                        copy: 'The æternity naming system (AENS) is very powerful. The community deserves an AENS marketplace to trade the names and we are waiting for you to build it! You can also check out the brand new AEX-141 NFT Standard - be among the first to use it!'
            
                    },
                    {
                        heading:'Some Tools and Resources to get you started',
                        href: 'https://github.com/aeternity',
                        href2: 'https://github.com/aeternity/.github/blob/master/profile/README.md'
            
                    }
                        
                ]      
            }   
        }
    }
}
</script>
