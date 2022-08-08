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
                title:'Operation Sustainability',
                description:'One of the biggest problem statements in human history is solving for sustainability in today’s world. Web3’s circular, participatory economy that is decentralised and incentivised, hosts a treasure trove of potential to make some serious strides in Sustainability! Show us how you can revolutionise sustainability-based solutions by picking one of the problem statements shared.',
                icon:require('~/assets/third/cards/logo6.png'),
                points:[
                    {
                        heading: 'Fractional ownership of power generation',
                        copy: 'As energy consumption is putting life as we know it on risk at breath-taking threat levels, there is a clarion call for innovators to create energy management systems that will engage the general public to participate and get incentives to potentially reduce dependency to the unsustainable energy generation habits.'
                    },
                    {
                        heading: 'Token incentivised circular economies',
                        copy: 'Token-incentivised circular economies are a great inventive method to create sustainable models across various use cases in various technology verticals; be it waste management, agriculture,  e-waste, etc. There is also room to involve and connect various stakeholders in the value chain. Get your thinking caps on show us your best version of token incentivised circular economies.'
                    },
                    {
                        heading:'Carbon credit tokenisation',
                        copy: 'Carbon Credit tokenisation is a very relevant usecase in the Web3 space that several platforms are adopting to ensure that there is accountability for energy consumption. The task lies in creating a circular economy, creating fluid networks and engaging incentivises. Show us how you would make the world a better place!'
                    },
                ],      
            }   
        }
    },
}
</script>