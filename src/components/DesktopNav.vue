<template>
    <div class="nav-container">
        <div class="nav-links">
            <a
                class="nav-button"
                v-for="nav in navs"
                :key="nav"
                :href="'/#'+nav"
            >
                {{ nav }}
            </a>
            <g-link to="https://unstop.com/p/buidl-for-web3-hackathon-2022-lumos-labs-413149"> <a class="nav-button"> Register </a></g-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'DesktopNav',
    data(){
        return{
           navs:['tracks','sponsors', 'partners','about','faq'] 
        }
    }
}
</script>
<style lang="scss" scoped>
  .nav-button{
    font-family: 'Brinnan';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 1.09146px;
    color: #FFFFFF;
    text-decoration: none;
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
    background: none;
    border:none;
    padding: 0;
    margin-right: 6vw;
    height: 45px;
    text-transform: uppercase;
  }
</style>