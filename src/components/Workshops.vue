<template>
    <section class="workshops" id="workshops">
        <div class="title">
            Upcoming Workshops
        </div>

        <div class="wrap" style="height:fit-content;width:100%;margin:0 auto;padding-left: 1rem;">
            <hooper ref="carousel" style="width:100%;height:fit-content;" :settings="hopperSettings">
                <slide v-for="(item,index) in mentors" :key="index" :style="item.style">
                    <!-- <div
                                style="width: 100%; max-width: 320px; margin: 0 auto;background-color: aqua;">
                            >
                                    card
                            </div> -->
                    <!-- <div class="slider-hooper">
                                <div class="image">
                                    <g-image :src="item.image"></g-image>
                                </div>
                                <div class="copy">
                                    <div>
                                        <div class="name">{{item.name}}</div>
                                        <div class="position">{{item.position}}</div>
                                    </div>
                                    <div class="logo">
                                        <g-image :src="item.companyLogo"></g-image>
                                    </div>
                                </div>
                            </div> -->
                    <div class="card">
                        <div class="card-header">
                            <div class="banner">
                                <g-image :src="item.image" fit="contain"></g-image>
                            </div>
                            <div class="header">
                                <div class="title-header">{{item.title}}</div>
                                <div class="subtitle">{{item.subtitle}}</div>
                            </div>
                            <div class="date-time">
                                <div class="date">Date: {{item.date}}</div>
                                <div class="time">Time: {{item.time}}</div>
                            </div>
                        </div>
                        <div class="footer">
                            <div class="platform">
                                <div class="platform-title">Platform</div>
                                <div class="platform-img">
                                    <g-image :src="item.platform" fit="contain"></g-image>
                                </div>
                            </div>
                            <g-link v-if="item.registerUrl" style="text-decoration: none; cursor: pointer"
                                :to="item.registerUrl">
                                <button class="button-link">Register</button>
                            </g-link>
                            <g-link v-if="item.watchUrl" style="text-decoration: none; cursor: pointer"
                                :to="item.watchUrl">
                                <button class="button-link watch-link">Watch Here</button>
                            </g-link>
                        </div>
                    </div>
                </slide>
            </hooper>
        </div>
        <div class="button-holder">
            <button @click="slide">
                <g-image src="~/assets/mentors/arrow-left.svg" />
            </button>
            <button @click="slideNext">
                <g-image src="~/assets/mentors/arrow-right.svg" />
            </button>
        </div>
    </section>
</template>
<script>
// import slider components
// import { slider, slideritem } from 'vue-concise-slider'
// import Vue from 'vue';
// import { slider, slideritem } from 'vue-concise-slider';
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

// Vue.component('Slider', slider);
// Vue.component('SliderItem', slideritem);
export default {
    props: {
        isMobile: {
            type: Boolean,
            default: false
        },
    },
    components: {
        Hooper,
        Slide
    },
    data() {
        return {
            hopperSettings: {
                centerMode: false,
                itemsToShow: 1.25,
                wheelControl: false,
                infiniteScroll: true,
                pagination: 'yes',
                breakpoints: {
                    500: {
                        centerMode: false,
                        itemsToShow: 3.5,
                        wheelControl: false,
                        infiniteScroll: true,
                        pagination: 'yes',
                    }
                }
            },
            //data list [array]
            mentors: [
                // {
                //     image: require('~/assets/workshops/tatumYoutube.png'),
                //     title: "Tatum Framework helps build Web 3 Apps faster",
                //     subtitle: "Speaker: Sean Kahovec, Blockchain Development and Architecture",
                //     date: "20th September",
                //     time: "7 - 8 PM IST",
                //     platform: require('~/assets/workshops/platform.png'),
                //     registerUrl: 'https://us06web.zoom.us/webinar/register/3816631573578/WN_78tyNkRSTDiwNaHg3yqR3w',
                //     watchUrl: ""
                // },
                
                {
                    image: require('~/assets/workshops/kometYoutube.png'),
                    title: "Intro to Everything NFTs with Komet",
                    subtitle: "Speaker: Vedant Pawar, Co-founder, CTO \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
                    date: "7th October",
                    time: "8 - 9 PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    registerUrl: "https://us06web.zoom.us/webinar/register/2516631576772/WN_ZITkOwN4SWaE1xuijOf-ug",
                    watchUrl: ""
                },
                {
                    image: require('~/assets/workshops/ic1.png'),
                    title: "Intro to Building on the Internet Computer",
                    subtitle: "Speaker: Dominic Wörner, Senior Solutions Architect, Dfinity",
                    date: "14th September",
                    time: "7:30 - 8:30 PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    registerUrl: "",
                    watchUrl: "https://www.youtube.com/watch?v=VA9fV24-IBg",
                },
                {
                    image: require('~/assets/workshops/polygon1.png'),
                    title: "Building a Full Stack dApp on Polygon",
                    subtitle: "Speaker: Rahat Chowdhury, Lead Developer Relations Engineer",
                    date: "16th September",
                    time: "8 - 9 PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    registerUrl: "",
                    watchUrl: "https://www.youtube.com/watch?v=g782ry2xXFM"
                },
                {
                    image: require('~/assets/workshops/arcanaBanner.png'),
                    title: "Build secure & privacy preserving apps using Arcana",
                    subtitle: "Speaker: Etisha Garg, Developer Relations \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
                    date: "19th September",
                    time: "7 - 8 PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    registerUrl: "",
                    watchUrl: "https://www.youtube.com/watch?v=YWlahAmDbbA"
                },
                {
                    image: require('~/assets/workshops/fluenceYoutube.png'),
                    title: "Run peer-to-peer applications and protocols using Fluence",
                    subtitle: "Speaker: Alexey Pyshnenko, Scala Developer \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
                    date: "21st September",
                    time: "7 - 8 PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    registerUrl: "",
                    watchUrl: "https://www.youtube.com/watch?v=QiFhyQpUTF0"
                },
                {
                    image: require('~/assets/workshops/tezosYoutube.png'),
                    title: "Build Scalable solution using Tezos Network",
                    subtitle: "Speaker: Anshu Jalan, Smart Contract & Backend Engineer",
                    date: "23rd September",
                    time: "8 - 9 PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    registerUrl: "",
                    watchUrl: "https://www.youtube.com/watch?v=INi4GRvVonU"
                },
                {
                    image: require('~/assets/workshops/routerYoutube.png'),
                    title: "Build Cross Chain Solution using Router Protocol",
                    subtitle: "Speaker: Lakshika Kothari, VP \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
                    date: "26th September",
                    time: "7 - 8 PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    registerUrl: "",
                    watchUrl: "https://www.youtube.com/watch?v=ylg3RkfCTkQ"
                },
                {
                    image: require('~/assets/workshops/workshops1.png'),
                    title: "Build Web3 Solutions for scale using Aeternity",
                    subtitle: "Speaker: Marco Walz, Lead Developer Relations, æternity",
                    date: "28th September",
                    time: "7 - 8 PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    registerUrl: "",
                    watchUrl: "https://www.youtube.com/watch?v=AnRBlbIykaI"
                },
                {
                    image: require('~/assets/workshops/assetmantleYoutube.png'),
                    title: "Everything a BUIDLer needs to know about NFTs",
                    subtitle: "Speaker: Kamlesh Parikarath Marar, Core, Product Development & Growth",
                    date: "30th September",
                    time: "8 - 9 PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    registerUrl: "",
                    watchUrl: "https://www.youtube.com/watch?v=vwRAWll2jKk"
                },
                {
                    image: require('~/assets/workshops/reviseYoutube.png'),
                    title: "Build More Than JPEGs with Revise Network ",
                    subtitle: "Speaker: Akash Mokashi, Developer Relations Manager \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
                    date: "3rd October",
                    time: "8 - 9 PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    registerUrl: "",
                    watchUrl: "https://www.youtube.com/watch?v=qR-J7g2QE94"
                },
            ],
            //Slider configuration [obj]
            options: {
                currentPage: 0,
                speed: 300,
                itemAnimation: true,
                centeredSlides: true,
                thresholdDistance: 100,
                thresholdTime: 300,
                loopedSlides: 2,
                slidesToScroll: 1,
                pagination: false,
                loop: true
            }
        }
    },
    methods: {
        slideNext() {
            this.$refs.carousel.slideNext();
        },
        slide() {
            this.$refs.carousel.slidePrev();
        }
    }
}
</script>
<style lang="scss" scoped>
.workshops {
    background: #030027;
    overflow: hidden;

    .title {
        font-family: 'Brinnan';
        font-style: normal;
        font-weight: 700;
        font-size: 62px;
        line-height: 145.9%;
        letter-spacing: -0.015em;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        padding: 6rem 0;
    }

}

.button-holder {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    margin-right: 112px;
    /* padding-bottom: 65px; */

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }
}


.card {
    color: #FFFFFF;
    background: linear-gradient(180deg, rgba(90, 62, 158, 0.9) 0%, rgba(60, 41, 116, 0.9) 0.01%, rgba(111, 47, 153, 0.9) 100%);
    padding: 1rem;
    border: 2px solid gray;
    margin: 0 10px;
    border-radius: 9.21867px;


    .banner {
        width: 100%;

        img {
            width: 100%;
            height: 100%;
            border-radius: 9.21867px;
            object-fit: cover;
        }
    }

    .header {

        padding-top: 1rem;

        .title-header {
            font-family: 'Brinnan';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 145.9%;

            letter-spacing: -0.015em;
        }

        .subtitle {
            font-family: 'Brinnan';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 145.9%;

            letter-spacing: -0.015em;
        }
    }

    .date-time {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 200%;

        letter-spacing: -0.015em;
        padding-top: 1rem;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid whitesmoke;
        padding-top: 1rem;
        margin-top: 1rem;

        .platform {

            .platform-title {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 160%;
                letter-spacing: -0.015em;
                margin-bottom: 8px;
            }

            .platform-img {
                width: 100%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }

        .button-link {
            background: linear-gradient(95.7deg,
                    #2bf2ff 0.32%,
                    #01c3f1 100.26%);
            font-size: 14px;
            font-family: "Brinnan";
            font-weight: 700;
            border-radius: 6px;
            padding: 18px 32px;
            color: rgba(54, 16, 76, 1);
            border: none;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.1em;
            cursor: pointer;
        }
    }
}

@media screen and (max-width: 600px) {

    .workshops {
        .title {
            font-size: 32px;
            padding: 2rem 0;
        }

        .button-holder {
            margin-right: 24px;
            margin-bottom: 24px;
        }

        .card {
            .title-header {
                font-size: 18px;
            }

            .subtitle {
                font-size: 12px;
            }

            .date-time {
                font-size: 12px;
            }

            .footer {
                .platform {
                    .platform-title {
                        font-size: 12px;
                    }

                    .platform-img {
                        img {
                            width: 90%;
                            height: 90%;
                        }
                    }
                }

                .button-link {
                    padding: 14px 20px;
                }
            }
        }
    }
}

@media screen and (min-width:600px) and (max-width: 1024px) {
    .workshops {
        .card {
            .footer {
                align-items: center;

                .platform {
                    .platform-title {
                        font-size: 12px;
                    }

                    .platform-img {
                        img {
                            width: 80%;
                            height: 80%;
                        }
                    }
                }

                .button-link {
                    padding: 1em 1em;
                    font-size: .8em;
                }

                .watch-link {
                    font-size: 12px;
                    padding: 1em 1em;
                }
            }
        }
    }
}
</style>
    