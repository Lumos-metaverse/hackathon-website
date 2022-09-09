<template>
    <section class="mentors">
        <div class="title">
            Upcoming Workshops
        </div>

        <div class="wrap" style="height:620px;width:100%;margin:0 auto;padding-left: 1rem;">
            <hooper ref="carousel" style="width:100%;height:610px;" :settings="hopperSettings">
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
                        <div class="footer">
                            <div class="platform">
                                <div class="platform-title">Platform</div>
                                <div>
                                    <g-image :src="item.platform" fit="contain"></g-image>
                                </div>
                            </div>
                            <button class="button-link">Add Reminder</button>
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
                itemsToShow: 3.5,
                wheelControl: false,
                infiniteScroll: false,
                pagination: 'yes',
            },
            //data list [array]
            mentors: [
                {
                    image: require('~/assets/workshops/workshops1.png'),
                    title: "Buidl for Web 3 hackathon",
                    subtitle: "Speaker: Marco Walz, Lead Developer Relations, æternity",
                    date: "12th September",
                    time: "7PM IST - 8PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    url: ""
                },
                {
                    image: require('~/assets/workshops/workshops1.png'),
                    title: "Buidl for Web 3 hackathon",
                    subtitle: "Speaker: Marco Walz, Lead Developer Relations, æternity",
                    date: "12th September",
                    time: "7PM IST - 8PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    url: ""
                },
                {
                    image: require('~/assets/workshops/workshops1.png'),
                    title: "Buidl for Web 3 hackathon",
                    subtitle: "Speaker: Marco Walz, Lead Developer Relations, æternity",
                    date: "12th September",
                    time: "7PM IST - 8PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    url: ""
                },
                {
                    image: require('~/assets/workshops/workshops1.png'),
                    title: "Buidl for Web 3 hackathon",
                    subtitle: "Speaker: Marco Walz, Lead Developer Relations, æternity",
                    date: "12th September",
                    time: "7PM IST - 8PM IST",
                    platform: require('~/assets/workshops/platform.png'),
                    url: ""
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
.mentors {
    background: #030027;

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
    margin-top: 55px;
    margin-right: 28px;
    padding-bottom: 65px;

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }
}

/* .slider-hooper {
        margin:0 7px;
        background:#572873;
        border-radius: 9.21867px;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;                        
        padding:0 8px;
        .image{
            height:280px;
            width: 94%;
            img{
                width:100%;
                height:100%;
                object-fit: contain;
            }
        }
        .copy{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 16px;
            width:100%;
            .name{
                font-family: 'Brinnan';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 145.9%;
                text-align: left;
                letter-spacing: -0.015em;
                max-width:180px;
    
                color: #FFFFFF;
            }
            .position{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 145.9%;
                word-break:break-all;
                letter-spacing: -0.015em;
                max-width:115px;
                color: #21E7FC;
            }
            .logo{
                width:32px;
                img{
                    width:100%;
                    object-fit: cover;
                }
            }
        }
    } */

.card {
    color: #FFFFFF;
    background: linear-gradient(180deg, rgba(90, 62, 158, 0.9) 0%, rgba(60, 41, 116, 0.9) 0.01%, rgba(111, 47, 153, 0.9) 100%);
    padding: 2rem;
    border: 2px solid gray;
    margin: 0 10px;
    border-radius: 9.21867px;

    .banner {
        width: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .footer {
        display: flex;
        justify-content: space-between;
        border-top: 2px solid white;
        padding-top: 2rem;
        margin-top: 2rem;

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
        }

    }
}
</style>
    