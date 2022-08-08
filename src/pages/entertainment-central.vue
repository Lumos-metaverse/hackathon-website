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
                title:'Entertainment Central / Here we are now, entertain us!!',
                description:'Web3 has a strong entertainment offering when it comes to pushing the boundaries of its innovation index. With digital media consumption finding a perfect fit globally, it has opened up several avenues for innovation and problem-solving.',
                icon:require('~/assets/third/cards/logo3.png'),
                points:[
                    {
                        heading: 'Metaverses',
                        copy: 'Metaverses are the future of experiences. There are several areas that you can target in the metaverse value chain to draw you inspiration. Take it from the Lumos Labs Team, you are only limited by your imagination with this one!'
                    },
                    {
                        heading: 'P2E games',
                        copy: 'Play-to-Earn Games are an exciting area that we’re not strangers to. Other than the challenges of bringing novel ideas and incentivisation mechanisms, you’re in the clear to bring us the next big Web3 Candy Crush!'
                    },
                    {
                        heading:'In-game marketplaces',
                        copy: 'In-Game market places are a great way to elevate the user experience in a game. If it’s not already a no-brainer, bring us ideas that are bound to entertain users and keep them coming back for more with your very on invention. '
                    },
                ],      
            }   
        }
    },
}
</script>