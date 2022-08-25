<template>
<Layout :isMobile="isMobile" @scrollTo="scrollTo">
    <div class="landing">
      <FirstSection ref="first" :isMobile="isMobile"/>
      <SecondSection id="about" ref="second" :isMobile="isMobile"/>
      <ThirdSection  ref="third" :isMobile="isMobile"/>
      <FourthSection id="roadmap" ref="fourth" :isMobile="isMobile"/>
      <Sponsors :isMobile="isMobile"/>
       <Partners :isMobile="isMobile"/>
      <Mentors class="mb" :isMobile="isMobile"/>
      <MentorsDesktop class="desktop"/>
      <About/>
      <Faq id="faq"/>
      <Discord/>
      <Reach/>
      <Footer/>
    </div>
  </Layout>
</template>
<script>

import FirstSection from '~/components/FirstSection.vue'
import SecondSection from '~/components/SecondSection.vue'
import ThirdSection from '~/components/ThirdSection.vue'
import FourthSection from '~/components/FourthSection.vue'
import Sponsors from '~/components/Sponsors.vue'
import Partners from '~/components/Partners.vue'
import Mentors from '~/components/Mentors.vue'
import MentorsDesktop from '~/components/MentorsDesktop.vue'
import About from '~/components/About.vue'
import Faq from '~/components/Faq.vue'
import Discord from '~/components/Discord.vue'
import Reach from '~/components/Reach.vue'
import Footer from '~/components/Footer.vue'
import VueGtag from "vue-gtag";

// Vue.use(VueGtag, {
//   config: { id: "UA-238485203-1" }
// });
export default {
  name:'Index',
  components:{
    FirstSection,
    SecondSection,
    ThirdSection, 
    FourthSection,
    Sponsors,
    Partners,
    Mentors,
    MentorsDesktop,
    About,
    Faq,
    Discord,
    Reach,
    Footer
  },
  //<meta name="title" content="Lumos Hackathon">
// <meta name="description" content="The #BUIDL for Web3 Hack (2022) is designed to open up access to the Web3 space for #BUIDLers like you. Based on your skill level, we invite you to ch">
// <meta name="robots" content="index,follow">
// <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
// <meta name="language" content="English">
// <meta name="revisit-after" content="1 day">
// <meta name="author" content="Lumos Labs">
  metaInfo: {
    title:"", titleTemplate: "Lumos Hackathon",
    meta:[
      {
        name: 'description',
        content: 'The #BUIDL for Web3 Hack (2022) is designed to open up access to the Web3 space for #BUIDLers like you. Based on your skill level, we invite you to ch'
      },
      {
        name: 'robots',
        content: 'index,follow'
      },
      {
        name: 'Content-Type',
        content: 'text/html; charset=utf-8'
      },
      {
        name: 'language',
        content: 'English'
      },
      {
        name: 'revisit-after',
        content: '1 day'
      },
      {
        name: 'author',
        content: 'Lumos Labs'
      }
    ]
  },
  data(){
    return {
      isMobile: false
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.scrollTo('second')
    })
  },
  methods:{
    checkMobile(){
      if (window.innerWidth < 420) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    //function for smooth scrolling to anchor tags
    scrollTo(id) {
      var el = this.$refs[id]
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  },
  mounted(){
    window.addEventListener('resize', () => {
      this.checkMobile()
    })
    this.checkMobile()
  },
  beforeDestroy(){
    window.removeEventListener('resize')
  }
}
</script>

//google analytics code for vue



<style lang="scss" scoped>
.landing{
  height:100%;
  width:100%;
}
.mb{
  display:block;
}
.desktop{
  display:none;
}
@media (min-width: 786px) {
  .mb{
    display:none;
  }
  .desktop{
    display:block;
  }
}
</style>