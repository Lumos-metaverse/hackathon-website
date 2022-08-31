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
                title:'All Tracks',
                url: 'https://dfinity.org/',
                //description:'Our mission is to develop and contribute technology that enables the Internet Computer (IC) blockchain and its ecosystem. It is powered by new "chain key cryptography" that allows it to run at web speed with an efficiency that is many orders of magnitude improved, for smart contracts to serve the web directly to end users, and for on-chain compute to scale without bound-allowing mass market web3 services to run entirely on-chain, and for blockchain to become an alternative to traditional IT, such as cloud services. The IC is governed and updated by the Network Nervous System (NNS), a protocol-integrated DAO that decides to use liquid democracy. ',
                icon:require('~/assets/third/cards/logo3.png'),
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