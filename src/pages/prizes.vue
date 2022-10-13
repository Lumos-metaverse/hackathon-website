<template>
    <main class="main">
        <Header />
        <div class="home">
            <h1 class="title">Prizes</h1>
            <p class="subtitle">It's time to ship your project! The best ones will win awards, prizes, and glory.</p>
            <div class="pedestal">
                <g-image src="../assets/prizes/podium.png"></g-image>
            </div>
            <div class="wrap">
                <div class="row" v-for="(row,idx) in prizes1" :key="idx">
                    <div class="cell" v-for="(cell,idx) in row" :key="idx">
                        <div v-if="cell && cell.icon" style="margin-right:18px">
                            <g-image :src="cell.icon" width="60px" height="89px" />
                        </div>
                        <div style="text-align:center">
                            <div class="name">{{cell.name}}</div>
                            <div class="cash">${{cell.cash}}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- tracks section -->
        <div class="tracks" v-for="(tracks, i) in tracks" :key="i">
            <div class="header">
                <div class="icon-title">
                    <div class="icon">
                        <g-image :src="tracks.icon"></g-image>
                    </div>
                    <div class="header-title">{{tracks.title}}</div>
                </div>

                <g-link style="text-decoration: none; cursor: pointer" :to="tracks.url">
                    <button class="register" style="text-decoration: none; cursor: pointer">
                        REGISTER NOW
                        <g-image style="width: 12px; height: 12px; margin-left: 8px" width="12" height="12"
                            src="~/assets/arrows/purple-arrow.svg" />
                    </button>
                </g-link>
            </div>

            <div class="headingSection">
                <p class="totalPrizeHead">TOTAL PRIZE REWARDS</p>
                <h1 class="totalPrize">{{tracks.totalPrize}}</h1>
                <h2 class="cardHead" v-if="tracks.card">PRIZE REWARD:</h2>
            </div>

            <div v-if="tracks.card" class="card-container">

                <div class="card-layer" v-for="(card, i) in tracks.card" :key="i">
                    <div class="card">
                        <h3 class="card-title">{{card.cardTitle}}</h3>
                        <p class="card-prize">{{card.prize1}}</p>
                        <p class="card-prize">{{card.prize2}}</p>
                        <p class="card-prize">{{card.prize3}}</p>
                        <g-link style="text-decoration: none; cursor: pointer" :to="tracks.url">
                            <div class="arrow">
                                <g-image src="~/assets/prizes/arrow.png" />
                            </div>
                        </g-link>
                    </div>
                </div>
            </div>

            <div class="otherPrize" v-if="tracks.otherPrize">
                <p class="otherPrizeContent">{{tracks.otherPrize}}</p>
            </div>
            <hr />
        </div>
    </main>
</template>

<script>
import Header from '../components/Header.vue';
export default {
    name: "Prizes",
    data: function () {
        return {
            prizes1: [
                [
                    {
                        name: "WIN FROM A LARGE PRIZE POOL OF",
                        cash: "100,000+",
                        icon: require("~/assets/third/medal.png"),
                    },
                ],
            ],
            tracks: [
                {
                    title: "Polygon",
                    icon: require("~/assets/prizes/polygon.png"),
                    totalPrize: "$20,000",
                    card: [
                        {
                            cardTitle: "Best DeFi App built on Polygon",
                            prize1: "1st Prize - $2,500",
                            prize2: "2nd Prize - $1,500",
                            prize3: "3rd Prize - $1,000"
                        },
                        {
                            cardTitle: "Best NFT App built on Polygon",
                            prize1: "1st Prize - $2,500",
                            prize2: "2nd Prize - $1,500",
                            prize3: "3rd Prize - $1,000"
                        },
                        {
                            cardTitle: "Best Gaming/ Metaverse Track",
                            prize1: "1st Prize - $2,500",
                            prize2: "2nd Prize - $1,500",
                            prize3: "3rd Prize - $1,000"
                        },
                    ],
                    otherPrize: "10 projects get $500 each",
                    url: "https://hack2skill.com/hack/lumos",
                },
                {
                    title: "æternity",
                    icon: require("~/assets/prizes/eternity.png"),
                    totalPrize: "$27,000",
                    card: [
                        {
                            cardTitle: "DeFi on Steroids",
                            prize1: "Prize Rewards - $ 15,000",
                        },
                        {
                            cardTitle: "DAO - Power to the Community!",
                            prize1: "Prize Rewards - $7,000",
                        },
                        {
                            cardTitle: "AENS & NFTs!",
                            prize1: "Prize Rewards - $5,000",
                        },
                    ],
                    url: "https://hack2skill.com/hack/lumos",
                },
                {
                    title: "Internet Computer",
                    icon: require("~/assets/prizes/internet_computer.png"),
                    totalPrize: "$10,000",
                    card: [
                        {
                            cardTitle: "Bluesky",
                            prize1: "Prize Rewards - $ 10,000",
                        },
                    ],
                    url: "https://hack2skill.com/hack/lumos",
                },
                {
                    title: "Tatum",
                    icon: require("~/assets/prizes/tatum.png"),
                    totalPrize: "$10,000",
                    url: "https://hack2skill.com/hack/lumos",
                },
                {
                    title: "Tezos",
                    icon: require("~/assets/prizes/tezos.png"),
                    totalPrize: "$2,000",
                    url: "https://hack2skill.com/hack/lumos",
                },
                {
                    title: "Router Protocol",
                    icon: require("~/assets/prizes/router.png"),
                    totalPrize: "$5,000",
                    url: "https://hack2skill.com/hack/lumos",
                },
                {
                    title: "Arcana Network",
                    icon: require("~/assets/prizes/arcana.png"),
                    totalPrize: "$5,000",
                    url: "https://hack2skill.com/hack/lumos",
                },
                {
                    title: "Fluence Network",
                    icon: require("~/assets/prizes/fluence.png"),
                    totalPrize: "$5,000",
                    card: [
                        {
                            cardTitle: "",
                            prize1: "1st Prize - $3,500",
                            prize2: "2nd Prize - $1,500",
                        },
                    ],
                    url: "https://hack2skill.com/hack/lumos",
                },
                {
                    title: "Komet",
                    icon: require("~/assets/prizes/komet.png"),
                    totalPrize: "$5,000",
                    card: [
                        {
                            cardTitle: "",
                            prize1: "1st Prize - $3,500",
                            prize2: "2nd Prize - $1,500",
                        },
                    ],
                    url: "https://hack2skill.com/hack/lumos",
                },
                {
                    title: "AssetMantle",
                    icon: require("~/assets/prizes/asset.svg"),
                    totalPrize: "$7,777",
                    url: "https://hack2skill.com/hack/lumos",
                },
                {
                    title: "Revise Network",
                    icon: require("~/assets/prizes/revise.svg"),
                    totalPrize: "$5,000",
                    url: "https://hack2skill.com/hack/lumos",
                },
            ]
        };
    },
    components: { Header }
}
</script>

<style lang="scss" scoped>
main {
    color: white;
    background: #36104C;
    padding-bottom: 4em;

    .home {
        background-image: url("../assets/prizes/blurprizes.png");
        background-position: top;
        padding-bottom: 1em;
        padding-top: 3em;
    }

    .title {
        font-family: 'Brinnan';
        font-style: normal;
        font-weight: 700;
        font-size: 3em;
        line-height: 145.9%;
        text-align: center;
        letter-spacing: -0.015em;
    }

    .subtitle {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 1.2em;
        line-height: 145.9%;
        text-align: center;
        letter-spacing: -0.015em;
        margin-top: -1em;
        padding-bottom: 2em;
    }

    .pedestal {
        text-align: center;
        padding-bottom: 2em;
        object-fit: contain;

        img {
            width: 30%;
        }
    }

    .wrap {
        max-width: 80%;
        margin: 0 auto;
        padding-bottom: 4em;

        .row {
            display: flex;
            flex-wrap: wrap;

            .cell {
                background: #633180;
                backdrop-filter: blur(9.75104px);
                border-radius: 9.75104px;
                min-width: 300px;
                height: 160px;
                flex: 1;
                border: 0.5px solid hsla(0, 0%, 97%, 0.428);
                margin-bottom: 20px;
                margin-left: 16px;
                margin-right: 16px;
                display: flex;
                justify-content: center;
                align-items: center;

                .name {
                    font-family: 'Brinnan';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    letter-spacing: -0.015em;
                    color: #FFFFFF;
                }

                .cash {
                    font-family: 'Brinnan';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 40px;
                    letter-spacing: -0.015em;
                    color: #FDC506;
                }

            }
        }
    }

    .tracks {
        max-width: 50%;
        margin: 0 auto;

        hr {
            margin: 1em 1em;
        }

        .header {
            padding: 1em 1em;

            .icon-title {
                display: flex;

                .icon {
                    object-fit: contain;

                    img {
                        width: 80%;
                    }
                }

                .header-title {
                    font-family: 'Brinnan';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 2em;
                    line-height: 145.9%;
                    /* padding-left: 1em; */

                    letter-spacing: -0.015em;

                }
            }

            display: flex;
            justify-content: space-between;

        }

        .register {
            background: linear-gradient(95.7deg, #2BF2FF 0.32%, #01C3F1 100.26%);
            box-shadow: 0px 0px 15px rgba(43, 217, 255, 0.55);
            border-radius: 6px;
            font-family: 'Brinnan';
            font-style: normal;
            font-weight: 700;
            font-size: 1em;
            line-height: 145.9%;
            padding: 1.2em;
            border: none;
            display: flex;
            align-items: center;
            letter-spacing: 0.1em;
            color: #36104C;
        }

        .headingSection {
            margin-top: -1em;

            .totalPrizeHead {
                font-family: 'Brinnan';
                font-style: normal;
                font-weight: 700;
                font-size: .8em;
                line-height: 145.9%;
                display: flex;
                align-items: center;
                letter-spacing: -0.015em;
                padding: 0 1em;
            }

            .totalPrize {
                font-family: 'Brinnan';
                font-style: normal;
                font-weight: 700;
                font-size: 2em;
                line-height: 145.9%;
                letter-spacing: -0.015em;
                color: #FDC506;
                margin-top: -16px;
                padding: 0 .4em;
            }

            .cardHead {
                font-family: 'Brinnan';
                font-style: normal;
                font-weight: 700;
                font-size: 1em;
                line-height: 145.9%;

                display: flex;
                align-items: center;
                letter-spacing: -0.015em;
                padding: 0 1em;
                margin-top: -1em;
            }
        }

        .card-container {
            display: flex;
            justify-content: space-between;
            padding: 1em;
            width: 100%;

            .card-layer {
                background: linear-gradient(to right bottom, rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99));
                padding: 1px;
                border-radius: 9.75104px;
                margin-right: 16px;
                height: max-content;
                /* width: max-content; */

                .card {
                    background: linear-gradient(180deg, rgba(90, 62, 158, 0.9) 0%, rgba(60, 41, 116, 0.9) 0.01%, rgba(111, 47, 153, 0.9) 100%);
                    border-radius: 9.75104px;
                    max-width: 264px;
                    padding: .5em 1em;

                    .card-title {
                        font-family: 'Brinnan';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 1em;
                        line-height: 145.9%;

                        display: flex;
                        align-items: center;
                        letter-spacing: -0.015em;
                    }

                    .card-prize {
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 600;
                        font-size: .8em;
                        line-height: 145.9%;

                        display: flex;
                        align-items: center;
                        letter-spacing: -0.015em;
                    }

                    .arrow {
                        object-fit: contain;
                        display: flex;
                        justify-content: flex-end;
                        margin-bottom: .5em;
                        cursor: pointer;

                        :hover {
                            scale: 1.2;
                        }
                    }

                }
            }
        }


        .otherPrize {
            margin: 1em 1em;
            background: #5A2877;
            padding: .1em 0;
            display: flex;
            justify-content: center;

            .otherPrizeContent {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: .9em;
                line-height: 145.9%;

                display: flex;
                align-items: center;
                text-align: center;
                letter-spacing: -0.015em;

            }

        }
    }
}
</style>

<style lang="scss" scoped>
@media (max-width: 500px) {
    main {

        margin: 0 auto;

        .title {
            font-size: 32px;
        }

        .subtitle {
            font-size: 16px;
            padding: 0 1em;
        }

        .pedestal {
            img {
                width: 80%;
            }
        }

        .wrap {
            .row {
                .cell {
                    min-width: 300px;
                    max-height: 165.14px;
                    margin: 0 auto;
                    margin-bottom: 29px;

                    .name {
                        font-size: 12px;
                    }

                    .cash {
                        font-size: 28.88px;
                    }

                    img {
                        width: 80%;
                    }
                }
            }
        }

        .tracks {
            width: 90%;

            hr {
                margin: .5em 0;
            }

            .header {
                display: flex;
                flex-direction: column;
                align-items: center;

                .icon-title {
                    display: flex;
                    align-items: center;

                    .icon {
                        object-fit: contain;
                        width: 100%;
                        img {
                            width: fit-content;
                        }
                    }

                    .header-title {
                        font-size: 1.5em;
                        padding-left: .3em;
                    }
                }

                .register {
                    margin-top: 3em;
                    font-size: .8em;
                }

            }

            .headingSection {
                display: flex;
                flex-direction: column;
                align-items: center;

                .totalPrizeHead {
                    font-size: .8em;
                }

                .totalPrize {
                    font-size: 2em;
                }

                .cardHead {
                    font-size: 1em;
                }
            }

            .card-container {
                flex-direction: column;
                padding: 1em;
                width: 90%;
                margin: 0 auto;

                .card-layer {
                    margin-top: .5em;
                    /* margin-right: 0; */
                    width: 100%;

                    .card {
                        padding: 1em;
                        width: 81%;

                        .card-title {
                            font-size: 1em;
                        }

                        .card-prize {
                            font-size: .8em;
                        }
                    }
                }
            }

            .otherPrize {
                .otherPrizeContent {
                    font-size: 18px;
                }
            }
        }
    }
}
</style>
