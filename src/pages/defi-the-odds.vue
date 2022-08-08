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
                title:'DeFi the odds!',
                description:'DeFi elevates the strides that we’ve seen in FinTech innovation. Here are some areas to inspire you.',
                icon:require('~/assets/third/cards/logo2.png'),
                points:[
                    {
                        heading: 'Prediction Market',
                        copy: 'Prediction markets that go by the “wisdom of the crowd,” enable open participation, without intermediaries in a free market, and they aim for zero friction. Show us how you would envision prediction markets with efficiency and inventiveness.'
                    },
                    {
                        heading: 'P2P lending and borrowing',
                        copy: 'P2P lending and borrowing are the eye of the revolutionary storm that cooked up the crypto revolution. However, there are few areas that are thirsty for innovation and there are areas of need that include credit risks, no insurance or Govt protection and matters of legislation.'
                    },
                    {
                        heading:'Digital identity',
                        copy: ' Digital identities can enable secured, private identities for consumers without succumbing to single-points-of-failure, security risks and threats in the decentralised space. They can be utilised to better user experiences and enrich the lives of consumers to transact without worrying about the risks as much. What problems would you solve by employing digital identities.'
                    },
                ],      
            }   
        }
    },
}
</script>