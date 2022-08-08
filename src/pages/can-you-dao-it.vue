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
                title:'Can you DAO it?',
                description:'DAOs are the potential future of organisations led by a community and you’re tasked with innovating the following aspects. Here are some areas to inspire you.',
                icon:require('~/assets/third/cards/logo1.png'),
                points:[
                    {
                        heading: 'Community Proposal Execution ',
                        copy: 'Find Innovative ways to engage communities on DAOs to strengthen the proposal execution process.'
                    },
                    {
                        heading: 'Community funding ',
                        copy: 'DAOs being community-led initiatives need to have funding mechanisms that are seamless and intricate considering voting for consensus and the following execution. Show us how you’d do it inventively.'
                    },
                    {
                        heading:'DApp governance',
                        copy: 'DApp Governance similar to community proposal execution and funding, needs increasing governance participation. Governance, not only needs to be methodical and functional in the long term, but it needs to inspire participation. How would you see this through in a DAO.'
                    },
                ],      
            }   
        }
    },
}
</script>