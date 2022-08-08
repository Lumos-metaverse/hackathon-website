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
                title:'#BUIDL the Pillars of Governance',
                description:'The offerings that Web3 brings through Governance as a use case is tremendous. We challenge you to be inspired by Participation, Transparency, Consensus, Equity and Inclusiveness, Effectiveness and Efficiency, and Accountability. Here are some use cases to inspire you.',
                icon:require('~/assets/third/cards/logo7.png'),
                points:[
                    {
                        heading: 'Voting',
                        copy: 'Voting Systems are so terribly flawed that we’re sure an ironclad system that records votes with immutability will enable better democracies in any shape and form. It goes without saying that this could really back up the common human being with privacy, security, and freedom to choose without their votes succumbing to malpractices. Let’s see what your innovativeness brings us.'
                    },
                    {
                        heading: 'Registries',
                        copy: 'In the digital era, a paperless environment is the norm, however, there are several public and private organisations and entities that are still coping with the change and the whiplash from the pack of efficiency. If anything, we know that DLTs are built to change this and one-up it with irrevocable immutability. '
                    },
                    {
                        heading:'Healthcare',
                        copy: 'healthcare holds a lot of potential as a usecase for decentralisation. We’re absolutely certain that you cannot go wrong with choosing to build decentralised, digital structures to support health data. Bring your ideas to life at the Hackathon to elevate offerings in the healthcare space.'
                    },
                ],      
            }   
        }
    },
}
</script>