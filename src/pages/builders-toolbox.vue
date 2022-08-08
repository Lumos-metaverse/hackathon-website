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
                title:'Upgrade the #BUIDLer’s Toolbox!',
                description:'One the most popular problem statements that #BUIDLers are solving for in the Web3 space Developer Tooling and infrastructure. Make the work a better place for developers and solve for one of the problem statements shared below:',
                icon:require('~/assets/third/cards/logo5.png'),
                points:[
                    {
                        heading: 'Layer 1 or 2 scaling solutions',
                        copy: 'The blockchain scalability trilemma might seem like three elements that are still finding a right fit in the infrastructure. But there are several areas where the best fit comes from additional plug-and-play models filling in the gaps, making it smoother for #BUIDLers to do what they do best. Show us what areas you find solve-worthy for a heft reward. '
                    },
                    {
                        heading: 'Developer tools',
                        copy: 'You can never have too many options for Developer tooling. Blockchain infrastructure can always use inspired solutions to enable better #BUIDLing to further solve more problems. Take up the mantle and show us how you would do it!'
                    },
                    {
                        heading:'DWeb (Decentralised storage, compute etc)',
                        copy: 'The Decentralised Web (DWeb) holds a plethora of opportunities and potential to truly give shape and form to Web3 itself. The Web aims to transform the internet and DNS (Domain Name System), decentralised storage, decentralised computing, privacy, security and more to push the boundaries of decentralisation. Show how you aim to push the boundaries at the Hackathon with DWeb.'
                    },
                ],      
            }   
        }
    },
}
</script>