<template>
    <div :class="isDrawerOpen ? 'open' : ''" class="side-drawer">
        <div class="nav-links">
            <a
                class="nav-button"
                v-for="nav in navs"
                :key="nav.name"
                :href="'/'+nav.url"
                @click="closeDrawer"
            >
                {{ nav.name }}                
            </a>
            <a
                href=" https://discord.gg/WyfmzJpzZd" target="_blank"
                class="nav-button mg"
            >
            JOIN OUR DISCORD COMMUNITY
            <g-image src="~/assets/home/diagonal-right-arrow.svg"/>
        </a>
        </div>
    </div>
</template>
<script>
    export default{
        name:'SideDrawer',
        props:{
            isDrawerOpen: {
                type: Boolean,
                default: false
            }
        },
        methods:{
            closeDrawer(){
                this.$emit('closeDrawer')
            }
        },
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
    .side-drawer{
        background: rgb(54, 16, 76);
        height: 60vh;
        right: -330px;
        position: fixed;
        top: 59px;
        transition: -webkit-transform .5s ease;
        transition: transform .5s ease;
        -webkit-transform: translateX(110%);
        -ms-transform: translateX(110%);
        transform: translateX(110%);
        width: 75%;
        z-index: 999;
    }
    .open{
         -webkit-transform: translateX(-330px);
        -ms-transform: translateX(-330px);
        transform: translateX(-330px)
    }
    .nav-links{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        height: 100%;
        padding: 32px;
    }
    .nav-button{
        font-family: "Brinnan";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 17px;
        letter-spacing: 1.5px;
        color: #FFFFFF;
        text-shadow: 0px 0px 4px rgb(255 255 255 / 25%);
        background: none;
        border: none;
        padding: 0;
        text-transform: uppercase;
        height: 45px;
        margin-bottom: 5vw;
        text-decoration: none;
    }
    .mg{
        margin-top: auto;
        margin-bottom: 24vw
    }
</style>