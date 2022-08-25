<template>
    <div class="header">
        <g-link to="/" class="center">
            <g-image width="114px" src="~/assets/home/logo.svg"/>
        </g-link>
        <FadeLine/>
        <DesktopNav class="desktop-nav" v-if="!isMobile"/>
        <MenuIcon class="mobile-nav" v-if="isMobile" :isDrawerOpen="isDrawerOpen" @toggleDrawer="sendEvent"/>
        <a
            href=" https://discord.gg/WyfmzJpzZd" target="_blank"
            v-if="!isMobile"
            class="nav-button center"
        >
            JOIN OUR DISCORD COMMUNITY
            <g-image width="9px" height="9px" src="~/assets/home/diagonal-right-arrow.svg"/>
        </a>
    </div>    
</template>
<script>

import FadeLine from '~/components/FadeLine.vue'
import MenuIcon from '~/components/MenuIcon.vue'
import DesktopNav from '~/components/DesktopNav.vue'
export default {
    name:'Header',
    components:{
    FadeLine,
    MenuIcon,
    DesktopNav,
    },
    methods:{
        sendEvent(){
            this.$emit('toggleDrawer')
        }
    },
    props:{
        isMobile: {
            type: Boolean,
            default: false
        },
        isDrawerOpen: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<!-- Google tag (gtag.js) - Google Analytics -->

<style lang="scss" scoped>
@font-face {
    font-family: Inter;
    src: url('../assets/fonts/inter/Inter-Light.ttf');
    font-weight: 200;
}
@font-face {
    font-family: Inter;
    src: url('../assets/fonts/inter/Inter-Regular.ttf');
    font-weight: 400;
}
@font-face {
    font-family: Inter;
    src: url('../assets/fonts/inter/Inter-Medium.ttf');
    font-weight: 600;
}
@font-face {
    font-family: Inter;
    src: url('../assets/fonts/inter/Inter-Bold.ttf');
    font-weight: 700;
}
@font-face {
    font-family: Brinnan;
    src: url('../assets/fonts/brinnan/Brinnan_Thin.otf');
    font-weight: 100;
  }
  @font-face {
    font-family: Brinnan;
    src: url('../assets/fonts/brinnan/Brinnan_Light.otf');
    font-weight: 200;
  }
@font-face {
    font-family: Brinnan;
    src: url('../assets/fonts/brinnan/Brinnan_Regular.otf');
    font-weight: 400;
}
@font-face {
    font-family: Brinnan;
    src: url('../assets/fonts/brinnan/Brinnan_Bold.otf');
    font-weight: 700;
  }
.center{
    display: flex;
    align-items: center;
    justify-content: center;
    width:157px;
}
.header {
  position:fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  top: 0;
  left: 0;
  height: 59px;
  background: rgba(54, 16, 76, 0.7);
  backdrop-filter: blur(25px);
  z-index: 99;
  .nav-button{
    font-family: 'Brinnan';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 1.09146px;
    color: #FFFFFF;
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
    background: none;
    border:none;
    padding: 0;
    text-decoration: none;
    min-width: 240px;
    // margin-right: 6vw;
    
    height: 45px;
    img{
        margin-left: 16px;
    }
  }
}
</style>
<style scoped>
.desktop-nav{
    display: none;
}
@media (min-width: 768px){
    .desktop-nav{
        display: flex;
    }
}
</style>