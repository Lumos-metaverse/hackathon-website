<template>
  <div class="layout">
    <Header :isMobile="isMobile" :isDrawerOpen="isDrawerOpen" @toggleDrawer="isDrawerOpen=!isDrawerOpen"/>
    <SideDrawer @closeDrawer="isDrawerOpen = false" :isDrawerOpen="isDrawerOpen" v-if="isMobile"/>
    <slot/>
  </div>
</template>
<script>
import Header from '~/components/Header.vue'
import SideDrawer from '~/components/SideDrawer.vue'
import VueGtag from "vue-gtag";

export default {
  components:{
    SideDrawer,
    Header
  },
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
  name:'Layout',
  data(){
    return{
      isDrawerOpen: false,
      isMobile: false
    }
  },
   methods:{
    checkMobile(){
      if (window.innerWidth < 420) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
html{
 margin: 0;
 padding: 0;
 scroll-behavior: smooth;
}
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background:#230834;
}
body,html,.layout{
  height: 100%;
  width: 100%;  
}
</style>
