<template>
    <div class="prizes">
        <div class="head">
            <div class="title">
                Prizes
            </div>
            <div class="sub-title">
                It's time to ship your project! <br/>The best ones will win awards, prizes, and glory.
            </div>
        </div>
        <div class="wrap">
            <div class="row" v-for="(row,idx) in prizes1" :key="idx">
                <div class="cell" v-for="(cell,idx) in row" :key="idx">
                    <div v-if="cell && cell.icon" style="margin-right:18px">
                        <g-image :src="cell.icon" width="60px" height="89px"/>
                    </div>
                    <div style="text-align:center">
                        <div class="name">{{cell.name}}</div>
                        <div class="cash">${{cell.cash}}</div>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="wrap">
            <div class="row" v-for="(row,idx) in prizes2" :key="idx">
                <div class="cell" v-for="(cell,idx) in row" :key="idx">
                    <div v-if="cell && cell.icon" style="margin-right:12px">
                        <g-image :src="cell.icon" width="60px" height="50px"/>
                    </div>
                    <div style="text-align:center">
                        <div class="name">{{cell.name}}</div>
                        <div class="cash1">${{cell.cash}}</div>
                        <div class="description">EACH IN CONVERTIBLE GRANTS FROM BUILDERSTRIBE</div>
                        <div class="disclamer">*Startups with traction</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="wrap">
            <div class="row" v-for="(row,idx) in prizes3" :key="idx">
                <div class="cell" v-for="(cell,idx) in row" :key="idx">
                    <div v-if="cell && cell.icon" style="padding-right:-5px; object-fit:cover;">
                        <g-image :src="cell.icon" width="60px" height="50px"/>
                    </div>
                    <div style="text-align:center">
                        <div class="name">{{cell.name}}</div>
                        <div class="cash1">{{cell.cash}}</div>
                        <div class="disclamer">*Distributed among top Participants & Winners</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Prizes',
        data:function(){
            return{
                prizes1:[
                    [
                        {
                            name:'WIN FROM A LARGE PRIZE POOL OF',
                            cash:'100,000+',
                            icon:require('~/assets/third/medal.png'),
                        },

                    ],
                ],
                prizes2:[
                    [
                        {
                            name:'WIN UPTO',
                            cash:'25,000*',
                            icon:require('~/assets/third/bd.png'),
                            //description: "each in Convertible Grants from BuildersTribe"
                        },
                        
                    ],
                ],
                prizes3:[
                    [
                        {
                            name:'DOMAIN CREDITS WORTH',
                            cash:'$150,000*',
                            icon:require('~/assets/third/unstoppable.png'),
                        },

                    ],
                ],
            }
        }
    }
</script>
<style lang="scss" scoped>
    .prizes{
        .head{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            .title{
                font-family: 'Brinnan';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                letter-spacing: -0.015em;
                color: white;
            }
            .sub-title{
                width: 80%;
                margin: 0 auto;
                margin-bottom: 53px;
                font-family: "Inter";
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 145.9%;
                text-align: center;
                letter-spacing: -0.015em;
                color: rgba(255, 255, 255, 0.8);
                margin-top: 10px;
            }
        }
        .wrap{
            max-width: 1200px;
            margin: 0 auto;
            .row{
                display: flex;
                flex-wrap: wrap;
                .cell{
                    background: #633180;
                    backdrop-filter: blur(9.75104px);
                    border-radius: 9.75104px;
                    min-width: 300px;
                    height:160px;
                    flex:1;
                    border:0.5px solid hsla(0, 0%, 97%, 0.428);
                    margin-bottom:20px;
                    margin-left: 16px;
                    margin-right:16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .name{
                        font-family: 'Brinnan';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 16px;
                        letter-spacing: -0.015em;
                        color: #FFFFFF;
                    }
                    .cash{
                        font-family: 'Brinnan';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 40px;
                        letter-spacing: -0.015em;
                        color: #FDC506;
                    }
                    .cash1{
                        font-family: 'Brinnan';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 26px;
                        letter-spacing: -0.015em;
                        color: #B4E32D;
                    }
                    .description{
                        font-family: 'Brinnan';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 10px;
                        letter-spacing: -0.015em;
                        color: #FFFFFF;
                    }
                    .disclamer{
                        font-family: 'Brinnan';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 12px;
                        letter-spacing: -0.015em;
                        color: #FFFFFF;
                        padding-left: 5px;
                    }
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
    @media (max-width: 768px) {
        .prizes{
            .head{
                .title{
                    font-size: 36px;
                    letter-spacing: -0.015em;
                }
                .sub-title{
                    max-width: 370px;
                    font-size: 12px;
                    margin-bottom: 64px;
                }
            }
            .wrap{
                .row{
                    .cell{
                        min-width: 300px;
                        max-height:165.14px;
                        margin-bottom: 29px;
                        .name{
                            font-size: 12px;
                        }
                        .cash{
                            font-size: 32.88px;
                        }
                    }
                }
            }
        }
    }
</style>