<template>
    <div class="nav-container">
        <div class="nav-links">
            <a
                class="nav-button"
                v-for="nav in navs"
                :key="nav.name"
                :href="'/'+nav.url"
            >
                {{ nav.name }}                
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'tracksortingnav',
    data(){
        return{
            navs:[
            {
                name: 'tracks',
                url: '#tracks'
            },
            {
                name: 'workshops',
                url: '#workshops'
            },
            {
                name: 'sponsors',
                url: '#sponsors'
            },
            {
                name: 'partners',
                url: '#partners'
            },
            {
                name: 'prizes',
                url: 'prizes'
            },
           ] 
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