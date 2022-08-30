<template>
  <section class="third">
    <!-- <g-image class="grid" src="~/assets/third/grid-min.png"/> -->
    <Prizes />
    <div id="tracks" class="content">
      <div class="title">
        <div>TRACKS</div>
        <div>
          <g-image v-if="isMobile" src="~/assets/third/bulb.svg" />
          <g-image v-else src="~/assets/third/bulb-desktop.svg" />
        </div>
      </div>
      <div class="sub-title">
        Choose a track based on your skill level and win exciting prizes
      </div>
      <!-- nav bar menu for sorting-->
      <!-- <div class="nav-container">
        <div class="nav-links">
          <a
            class="nav-button"
            v-for="nav in navs"
            :key="nav"
            :href="'/#' + nav"
          >
            {{ nav }}
          </a>
        </div>
      </div> -->
      <!-- Polygon Track-->
      <div>
        
         <div class="altttile">
             <div>
          <g-image v-if="isMobile" src="~/assets/third/polygon-matic-logo.svg" />
          <g-image v-else src="~/assets/third/polygon-matic-logo.svg" />
        </div>
        <div>Polygon Track</div>
       
      </div>
        <div class="tracks">
        <div class="card" v-for="(polygontrack, i) in polygontrack" :key="i">
          <div class="inner-card">
            <div class="name">
              <div class="icon">
                <div class="layer">
                  <img :src="polygontrack.icon" />
                </div>
              </div>
              <div class="t">{{ polygontrack.name }}</div>
            </div>
            <div class="details">
              {{ polygontrack.content }}
            </div>
            <div class="buttons">
              <g-link
                style="text-decoration: none; cursor: pointer"
                :to="polygontrack.url"
              >
                <button class="learn">
                  LEARN MORE
                  <g-image
                    style="width: 12px; height: 12px; margin-left: 8px"
                    width="12"
                    height="12"
                    src="~/assets/arrows/purple-arrow.svg"
                  />
                </button>
              </g-link>
              <div class="sponsor" v-if="track && track.sponsor">
                <div>Sponsors:</div>
                <div>
                  <img :src="track.sponsor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
     <!-- Associate Tracks -->
     
    <div class="title">Associate Track</div>


     <!-- Router Protocol-->
     <div>
        <div class="altttile"> Router Protocol Track</div>
        <div class="tracks">
        <div class="card" v-for="(RouterProtocol, i) in RouterProtocol" :key="i">
          <div class="inner-card">
            <div class="name">
              <div class="icon">
                <div class="layer">
                  <img :src="RouterProtocol.icon" />
                </div>
              </div>
              <div class="t">{{ RouterProtocol.name }}</div>
            </div>
            <div class="details">
              {{ RouterProtocol.content }}
            </div>
            <div class="buttons">
              <g-link
                style="text-decoration: none; cursor: pointer"
                :to="RouterProtocol.url"
              >
                <button class="learn">
                  LEARN MORE
                  <g-image
                    style="width: 12px; height: 12px; margin-left: 8px"
                    width="12"
                    height="12"
                    src="~/assets/arrows/purple-arrow.svg"
                  />
                </button>
              </g-link>
              <div class="sponsor" v-if="track && track.sponsor">
                <div>Sponsors:</div>
                <div>
                  <img :src="track.sponsor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <!-- Arcana Network Track-->
      <div>
        <div class="altttile"> Arcana Network Track</div>
        <div class="tracks">
        <div class="card" v-for="(ArcanaNetwork, i) in ArcanaNetwork" :key="i">
          <div class="inner-card">
            <div class="name">
              <div class="icon">
                <div class="layer">
                  <img :src="ArcanaNetwork.icon" />
                </div>
              </div>
              <div class="t">{{ ArcanaNetwork.name }}</div>
            </div>
            <div class="details">
              {{ ArcanaNetwork.content }}
            </div>
            <div class="buttons">
              <g-link
                style="text-decoration: none; cursor: pointer"
                :to="ArcanaNetwork.url"
              >
                <button class="learn">
                  LEARN MORE
                  <g-image
                    style="width: 12px; height: 12px; margin-left: 8px"
                    width="12"
                    height="12"
                    src="~/assets/arrows/purple-arrow.svg"
                  />
                </button>
              </g-link>
              <div class="sponsor" v-if="track && track.sponsor">
                <div>Sponsors:</div>
                <div>
                  <img :src="track.sponsor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <!-- All other Tracks-->

      <!--  <div class="altttile"> All Tracks</div> -->
     <!--   <div class="bounty"> -->
       <!-- <div class="cardforbounty" v-for="(track, i) in tracks" :key="i">   -->
       <!--   <div class="inner-card">   -->
        <!--    <div class="name">  -->
        <!--      <div class="icon">  -->
        <!--        <div class="layer">  -->
        <!--          <img :src="track.icon" />  -->
        <!--        </div>  -->
        <!--      </div>  -->
        <!--      <div class="t">{{ track.name }}</div>  -->
        <!--    </div>  -->
        <!--    <div class="details">  -->
        <!--      {{ track.content }}  -->
        <!--    </div>  -->
        <!--    <div class="buttons">  -->
        <!--      <g-link  -->
        <!--        style="text-decoration: none; cursor: pointer"  -->
        <!--        :to="track.url"  -->
        <!--      >  -->
        <!--        <button class="learn">  -->
        <!--          LEARN MORE  -->
        <!--          <g-image  -->
        <!--            style="width: 12px; height: 12px; margin-left: 8px"  -->
        <!--            width="12"  -->
        <!--            height="12"  -->
        <!--            src="~/assets/arrows/purple-arrow.svg"  -->
        <!--          />  -->
        <!--        </button>  -->
        <!--      </g-link>  -->
        <!--      <div class="sponsor" v-if="track && track.sponsor">  -->
        <!--        <div>Sponsors:</div>  -->
        <!--        <div>  -->
        <!--          <img :src="track.sponsor" />  -->
        <!--        </div>  -->
       <!--       </div>  -->
        <!--    </div>  -->
        <!--  </div>  -->
     <!--   </div>  -->
    <!--  </div>  -->
    <g-link :to=website.url> Click Here for tracks </g-link>
    <g-link
                style="text-decoration: none; cursor: pointer"
                :to="/alltracks/"
              >
      <button class="rotating-button">
        VIEW ALL
        <g-image
          style="width: 9px; height: 9px; margin-left: 8px"
          width="12"
          height="12"
          src="~/assets/arrows/gold-arrow.svg"
        />
      </button>
      </g-link>
    </div>
    <!-- <div class="content" style="margin-top: 30px">
      <div class="title">BOUNTIES</div>
      <div class="sub-title">
        Choose a Problem Statement based on your interest and win exciting
        prizes
      </div>
      <div class="bounty">
        <div class="cardforbounty" v-for="(bounty, i) in bounty" :key="i">
          <div class="inner-card">
            <div class="name">
              <div class="icon">
                <div class="layer">
                  <img :src="bounty.icon" />
                </div>
              </div>
              <div class="t">{{ bounty.name }}</div>
              <div class="prize">{{bounty.prize}}</div>
              <div class="levelbounty">{{bounty.level}}</div>
            </div>
            <div class="details">
              {{ bounty.content }}
            </div>
            <div class="buttons">
              <g-link
                style="text-decoration: none; cursor: pointer"
                :to="bounty.url"
              >
                <button class="learn">
                  LEARN MORE
                  <g-image
                    style="width: 12px; height: 12px; margin-left: 8px"
                    width="12"
                    height="12"
                    src="~/assets/arrows/purple-arrow.svg"
                  />
                </button>
              </g-link>
              <div class="sponsor" v-if="bounty && bounty.sponsor">
                <div>Sponsors:</div>
                <div>
                  <img :src="bounty.sponsor" />
                </div>
              </div>
            </div>
          </div>
          <div class="hr"> </div>
        </div>
      </div>
    </div> -->
  </section>
</template>
<script>
import Prizes from "../components/Prizes.vue";
import alltracks from "../pages/alltracks.vue";
export default {
  name: "ThirdSection",
  components: {
    Prizes,
    alltracks
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
               website: [ {
        url: "/alltracks",
       }

       ],
        polygontrack: [
            {
          name: "Best DeFi App built on Polygon ",
          prize: "$$$",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "",
          icon: require("~/assets/third/cards/logo1.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/can-you-dao-it",
        },
        {
            name: "Best NFT App built on Polygon ",
          prize: "$$$",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "",
          icon: require("~/assets/third/cards/logo1.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/can-you-dao-it",

        },
        {
                name: "Best Gaming/ Metaverse Track ",
          prize: "$$$",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "",
          icon: require("~/assets/third/cards/logo1.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/can-you-dao-it",
        }
        ],
        AeternityTrack: [{

        }] ,
        DfinityTrack: [{
        }] ,

        RouterProtocol: [
            {
            name: "Create a Cross chain Yield Aggregator using Router CrossTalk Library. ",
          prize: "$$$",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "",
          icon: require("~/assets/third/cards/logo1.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/can-you-dao-it",
        }

        ],
        
        ArcanaNetwork: [{
            name: "BUIDL Privacy Preserving Apps. ",
          prize: "$$$",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "Use your imagination and feel free to build any DApp that excites you! Show us how best you can leverage Arcana’s access control feature to store data and Social/Magic links to create wallets. We do not want to limit your imagination but here are some topics for your team to consider as reference: Marketplaces, Games, social apps, NFT based apps.",
          icon: require("~/assets/third/cards/logo1.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/can-you-dao-it",
        }],

      tracks: [
        {
          name: "Can you DAO it? ",
          prize: "$10,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content:
            "DAOs are the potential future of organisations led by a community and you’re tasked with innovating the following aspects. Here are some areas to inspire you. ",
          icon: require("~/assets/third/cards/logo1.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/can-you-dao-it",
        },
        {
          name: "DeFi the odds!",
          prize: "$10,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content:
            "DeFi elevates the strides that we’ve seen in FinTech innovation. Here are some areas to inspire you. ",
          icon: require("~/assets/third/cards/logo2.png"),
          url: "/defi-the-odds",
        },
        {
          name: "Entertainment Central",
          prize: "$10,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content:
            "Web3 has a strong entertainment offering when it comes to pushing the boundaries of its innovation index. With digital media consumption finding a perfect fit globally, it has opened up several avenues for innovation and ...",
          icon: require("~/assets/third/cards/logo3.png"),
          url: "/entertainment-central",
        },
        {
          name: "Keep calm and NFT-ise it!",
          prize: "$10,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content:
            "NFTs are taking the world by storm and has taken the Web3 space closer and closer to consumer-facing adoption. We invite you to cook this storm up with your creativity and inventiveness. Here are some proble...",
          icon: require("~/assets/third/cards/logo4.png"),
          url: "/keep-calm-nft",
        },
        {
          name: "Upgrade the #BUIDLer’s Toolbox!",
          prize: "$10,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content:
            "One the most popular problem statements that #BUIDLers are solving for in the Web3 space - Developer Tooling and infrastructure. Make the work a better place for developers and solve for one of the problem s...",
          icon: require("~/assets/third/cards/logo5.png"),
          url: "/builders-toolbox",
        },
        {
          name: "Operation Sustainability ",
          prize: "$10,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content:
            "One of the biggest problem statements in human history is solving for sustainability in today’s world. Web3’s circular, participatory economy that is decentralised and incentivised, hosts a treasure trove of potential to ma...",
          icon: require("~/assets/third/cards/logo6.png"),
          url: "/operation-sustainability",
        },
        {
          name: "#BUIDL the Pillars of Governance",
          prize: "$10,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content:
            "The offerings that Web3 brings through Governance as a use case is tremendous. We challenge you to be inspired by Participation, Transparency, Consensus, Equity and Inclusiveness, Effectiveness and Efficiency, and Ac...",
          icon: require("~/assets/third/cards/logo7.png"),
          url: "/pillar-of-governance",
        },

        // {
        //     name:'Streaming Payments',
        //     prize:'$10,000',
        //     level:'Intermediate',
        //     participants:'324',
        //     deadline:'Jul 10, 2020',
        //     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
        // }
      ],

      navs: [
        "All TRACKS",
        "Polygon",
        "Aeternity",
        "Associate Tracks",
        "Open Tracks",
      ],

      //bounty for the hackathon
      bounty: [
      //   {
      //   name: "Arcana",
      //     prize: "200000 USD",
      //     level: "Beginner",
      //     participants: "324",
      //     //deadline: "Jul 10, 2020",
      //     content:
      //       "One the most popular problem statements that #BUIDLers are solving for in the Web3 space - Developer Tooling and infrastructure. Make the work a better place for developers and solve for one of the problem s...",
      //     icon: require("~/assets/third/cards/arcana.png"),
      //     url: "/builders-toolbox",

      // },
      // {
      //     name: "Arcana",
      //     prize: "200000 USD",
      //     level: "Beginner",
      //     participants: "324",
      //     //deadline: "Jul 10, 2020",
      //     content:
      //       "One the most popular problem statements that #BUIDLers are solving for in the Web3 space - Developer Tooling and infrastructure. Make the work a better place for developers and solve for one of the problem s...",
      //     icon: require("~/assets/third/cards/arcana.png"),
      //     url: "/builders-toolbox",
      // }
      
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.sponsor {
  font-family: "Brinnan";
  font-style: normal;
  font-weight: 400;
  font-size: 11.4966px;
  line-height: 145.9%;
  /* identical to box height, or 17px */

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  letter-spacing: 0.1em;
  color: #ffffff;
  div:nth-child(1) {
    margin-bottom: 10px;
  }
}
.nav-button {
  font-family: "Brinnan";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 1.09146px;
  color: #ffffff;
  text-decoration: none;
  text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
  background: none;
  border: none;
  padding: 0;
  margin-right: 6vw;
  height: 45px;
  text-transform: uppercase;
}
.nav-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
  padding-bottom: 30px;
}
.bounty {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 10px;
    padding-bottom: 30px;
    max-width: 1200px;
     margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
}
.third {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url("../assets/third/grid-min.png");
  background-position: inherit;
  background-repeat: repeat;
  background-size: contain;
  padding-top: 70px;
  .grid {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .content {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 64px;
    // display:flex;
    // flex-direction:column;
    // align-items:center;
    // justify-content:center;
    z-index: 1;
    .tracks {
      display: flex;
      flex-direction: row;
      gap: 9px;
      justify-content:center;

    }

    .rotating-button {
      width: 145px;
      height: 145px;
      background: #531975;
      border: 1px solid #fdc506;
      font-family: "Brinnan";
      font-style: normal;
      font-weight: 700;
      font-size: 12.6519px;
      line-height: 145.9%;
      letter-spacing: 0.1em;
      color: #fdc506;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      margin-top: 100px;
      cursor: pointer;
      transition: transform 2s ease-in-out;
      display:flex;
    }
    .rotating-button:hover {
      transform: rotate(-360deg);
    }
    .card {
        //place three cards in a row
        display: flex;
        flex-direction: row;
        gap: 7px;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
      
      min-height: 250px;
      width: 70%;
      // margin:0 auto;
     
      max-width: 440px;
      
      align-items: center;
      justify-content: center;
      // background: linear-gradient(180deg, rgba(90, 62, 158, 0.9) 0%, rgba(60, 41, 116, 0.9) 0.01%, rgba(111, 47, 153, 0.9) 100%);
      background: none;
      opacity: 1;
      border: 0.5px solid white;
      // backdrop-filter: blur(9.75104px);
      border-radius: 9.75104px;
      cursor: pointer;
      .inner-card {
        display: flex;
        flex-direction: column;
        padding: 41px 24px;
        width: calc(100%);
        height: calc(100% - 84px);
        background: linear-gradient(
          180deg,
          rgba(90, 62, 158, 0.9) 0%,
          rgba(60, 41, 116, 0.9) 0.01%,
          rgba(111, 47, 153, 0.9) 100%
        );
        backdrop-filter: blur(9.75104px);
        border-radius: 9.75104px;
        transition: all 0.3s ease-in-out;
        will-change: transform;
        .name {
          display: flex;
          align-items: center;
          font-family: "Brinnan";
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 145.9%;
          letter-spacing: -0.015em;
          color: #ffffff;
          margin-bottom: 23px;
          .t {
            max-width: 300px;
            font-family: "Brinnan";
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 145.9%;
            letter-spacing: -0.015em;
            color: #ffffff;
          }
          .icon {
            min-width: 64.39px;
            height: 64.39px;
            border: 0.60263px solid #ffffff;
            border-radius: 6.0263px;
            margin-right: 23.59px;
            .layer {
              width: 100%;
              height: 100%;
              border-radius: 6.0263px;
              background: white;
              transform: translate3d(-3.59px, -3.59px, -3.59px);
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
        .details {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 145.9%;
          letter-spacing: -0.015em;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 28px;
        }
        .prize {
          margin-bottom: 18px;
          .head {
            font-family: "Inter";
            font-style: italic;
            font-weight: 500;
            font-size: 15.4113px;
            line-height: 145.9%;
            letter-spacing: -0.015em;
            color: #ffffff;
          }
          .amount {
            font-family: "Brinnan";
            font-style: normal;
            font-weight: 700;
            font-size: 45.0484px;
            line-height: 145.9%;
            letter-spacing: -0.015em;
            background: linear-gradient(
              89.97deg,
              #fdc506 1.39%,
              #fd9a06 86.07%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
        }
        .buttons {
          font-family: "Brinnan";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
          margin-top: auto;
          .learn {
            background: linear-gradient(
              95.7deg,
              #2bf2ff 0.32%,
              #01c3f1 100.26%
            );
            border-radius: 6px;
            height: 40px;
            width: 100%;
            max-width: 235px;
            border: none;
            padding: 16px 8px;
            color: rgba(54, 16, 76, 1);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .discord {
            background: none;
            border-radius: 6px;
            height: 64px;
            width: 45%;
            max-width: 235px;
            border: 1px solid #f0f0f0;
            filter: drop-shadow(0px 0px 15px rgba(43, 217, 255, 0.55));
            padding: 16px 25px;
            color: rgba(255, 255, 255, 1);
          }
        }
        .level {
          height: 36.68px;
          background: rgba(163, 94, 255, 0.6);
          border: 0.916923px solid rgba(255, 255, 255, 0.4);
          border-radius: 3.66769px;
          padding: 6.42px 7.12px;
          font-family: "Brinnan";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 145.9%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 23px;
        }
        .action {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 13px;
          line-height: 145.9%;
          letter-spacing: -0.015em;
          color: #ffffff;
          display: flex;
          margin-bottom: 21px;
          img {
            margin-right: 9px;
          }
          .participants {
            display: flex;
            align-items: center;
            margin-right: 23px;
          }
          .deadline {
            display: flex;
            align-items: center;
          }
        }
        .cta {
          width: 100%;
          max-width: 322px;
          height: 55px;
          padding: 19px;
          border-radius: 6px;
          border: 0.5px solid rgba(3, 197, 242, 1);
          background: none;
          font-family: "Brinnan";
          font-style: normal;
          font-weight: 700;
          font-size: 15.2831px;
          line-height: 145.9%;
          letter-spacing: 0.1em;
          color: #2bf1ff;
        }
      }
      .inner-card:hover {
        transform: translate3d(-15px, -17.52px, -16.69px);
        background: #882eff;
        backdrop-filter: blur(11.5597px);
        -webkit-transition: background backdrop-filter 300ms linear;
        -ms-transition: background backdrop-filter 300ms linear;
        transition: background backdrop-filter 300ms linear;
        .cta {
          background: linear-gradient(91.86deg, #2bf1ff 0.22%, #03c5f3 99.78%);
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
          color: #36104c;
        }
      }
    }
    .cardforbounty{
      min-height: 329px;
      width: 70%;
      // margin:0 auto;
      margin-right: auto;
      margin-left: auto;
      //max-width: 448px;
      margin-bottom: 19px;
      display: flex;
      align-items: center;
      justify-content: center;
      // background: linear-gradient(180deg, rgba(90, 62, 158, 0.9) 0%, rgba(60, 41, 116, 0.9) 0.01%, rgba(111, 47, 153, 0.9) 100%);
      background: none;
      opacity: 1;
      //border: 0.5px solid white;
      // backdrop-filter: blur(9.75104px);
      border-radius: 9.75104px;
      cursor: pointer;
      .inner-card {
        display: flex;
        flex-direction: column;
        padding: 41px 24px;
        width: calc(100%);
        height: calc(100% - 84px);
        // background: linear-gradient(
        //   180deg,
        //   rgba(90, 62, 158, 0.9) 0%,
        //   rgba(60, 41, 116, 0.9) 0.01%,
        //   rgba(111, 47, 153, 0.9) 100%
        // );
        backdrop-filter: blur(9.75104px);
        border-radius: 9.75104px;
        //transition: all 0.3s ease-in-out;
        will-change: transform;
        .name {
          display: flex;
          align-items: center;
          font-family: "Brinnan";
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 145.9%;
          letter-spacing: -0.015em;
          color: #ffffff;
          margin-bottom: 23px;
          .t {
            max-width: 300px;
            font-family: "Brinnan";
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 145.9%;
            letter-spacing: -0.015em;
            color: #ffffff;
            margin-right: 30px;
          }
          .prize {
            font-family: 'Inter';
            width: 126px;
            margin-top:0.9375rem;
            padding-top: 0.3rem;
            height: 20px;
      text-align: center;
            font-style: normal;
            background: #7506ac;
            font-weight: 400;
            font-size: 13px;
            line-height: 145.9%;
            letter-spacing: -0.015em;
            color: #ffffff;
          }
          .levelbounty {
            font-family: 'Inter';
            width: 126px;
            //margin-top:0.1375rem;
            //padding-top: 0.3rem;
            height: 20px;
      text-align: center;
            font-style: normal;
            //background: #7506ac;
            font-weight: 400;
            font-size: 13px;
            line-height: 145.9%;
            letter-spacing: -0.015em;
            color: #ffffff;
          }
          .hr {
            border: 0.773455px solid #8650A6;
          }
          .icon {
            min-width: 70px;
            height: 70px;
            border: 0.60263px solid #ffffff;
            border-radius: 6.0263px;
            margin-right: 23.59px;
            .layer {
              width: 100%;
              height: 100%;
              border-radius: 6.0263px;
              background: white;
              transform: translate3d(-3.59px, -3.59px, -3.59px);
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
        .details {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 145.9%;
          letter-spacing: -0.015em;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 28px;
        }
        .prize {
          margin-bottom: 18px;
          .head {
            font-family: "Inter";
            font-style: italic;
            font-weight: 500;
            font-size: 15.4113px;
            line-height: 145.9%;
            letter-spacing: -0.015em;
            color: #ffffff;
          }
          .amount {
            font-family: "Brinnan";
            font-style: normal;
            font-weight: 700;
            font-size: 45.0484px;
            line-height: 145.9%;
            letter-spacing: -0.015em;
            background: linear-gradient(
              89.97deg,
              #fdc506 1.39%,
              #fd9a06 86.07%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
        }
        .buttons {
          font-family: "Brinnan";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
          margin-top: auto;
          .learn {
            background: linear-gradient(
              95.7deg,
              #2bf2ff 0.32%,
              #01c3f1 100.26%
            );
            border-radius: 6px;
            height: 40px;
            width: 100%;
            max-width: 235px;
            border: none;
            padding: 16px 8px;
            color: rgba(54, 16, 76, 1);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .discord {
            background: none;
            border-radius: 6px;
            height: 64px;
            width: 45%;
            max-width: 235px;
            border: 1px solid #f0f0f0;
            filter: drop-shadow(0px 0px 15px rgba(43, 217, 255, 0.55));
            padding: 16px 25px;
            color: rgba(255, 255, 255, 1);
          }
        }
        .level {
          height: 36.68px;
          background: rgba(163, 94, 255, 0.6);
          border: 0.916923px solid rgba(255, 255, 255, 0.4);
          border-radius: 3.66769px;
          padding: 6.42px 7.12px;
          font-family: "Brinnan";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 145.9%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 23px;
        }
        .action {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 13px;
          line-height: 145.9%;
          letter-spacing: -0.015em;
          color: #ffffff;
          display: flex;
          margin-bottom: 21px;
          img {
            margin-right: 9px;
          }
          .participants {
            display: flex;
            align-items: center;
            margin-right: 23px;
          }
          .deadline {
            display: flex;
            align-items: center;
          }
        }
        .cta {
          width: 100%;
          max-width: 322px;
          height: 55px;
          padding: 19px;
          border-radius: 6px;
          border: 0.5px solid rgba(3, 197, 242, 1);
          background: none;
          font-family: "Brinnan";
          font-style: normal;
          font-weight: 700;
          font-size: 15.2831px;
          line-height: 145.9%;
          letter-spacing: 0.1em;
          color: #2bf1ff;
        }
      }
      .inner-card:hover {
        //transform: translate3d(-15px, -17.52px, -16.69px);
        background: #882eff;
        backdrop-filter: blur(11.5597px);
        -webkit-transition: background backdrop-filter 300ms linear;
        -ms-transition: background backdrop-filter 300ms linear;
        transition: background backdrop-filter 300ms linear;
        .cta {
          background: linear-gradient(91.86deg, #2bf1ff 0.22%, #03c5f3 99.78%);
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
          color: #36104c;
        }
      }
    }


    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-top: 10px;
      font-family: "Brinnan";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 145.9%;
      letter-spacing: -0.015em;
      color: #ffffff;
      img {
        margin-left: 5px;
      }
    }
    .altttile {
     display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-top: 20px;
      padding-bottom: 30px;
      font-family: "Brinnan";
      font-style: normal;
      font-weight: 700;
      font-size: 27px;
      line-height: 145.9%;
      letter-spacing: -0.015em;
      color: #ffffff;
      img {
        margin-left: 5px;
        padding-right: 10px;
      }
    }
    
    .sub-title {
      width: 80%;
      margin: 0 auto;
      margin-bottom: 53px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 145.9%;
      padding-bottom: 30px;
      /* or 20px */

      text-align: center;
      letter-spacing: -0.015em;

      color: rgba(255, 255, 255, 0.8);
      margin-top: 10px;
    }
    .nav-sub {
      width: 80%;
      margin: 0 auto;
      margin-bottom: 53px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 145.9%;
      /* or 20px */

      text-align: center;
      letter-spacing: -0.015em;

      color: rgba(255, 255, 255, 0.8);
      margin-top: 10px;
    }
  }
}
</style>
<style lang="scss" scoped>
@media (max-width: 750px) {
  .third {
    .content {
      .rotating-button {
        display: flex;
      }
      .tracks {
        margin: 0 0;
        //max-width: 1200px;
        justify-content:center;
        flex-direction:column;
        align-content: center;
        
      }
      .card {
        margin-right: 0px;
        margin-bottom: 40px;
        margin-left: 0;
        .inner-card {
          .name {
            .t {
              font-size: 21px;
            }
          }
        }
      }
     
      .title {
        font-size: 20px;
        margin-top: 169px;
      }
      .sub-title {
        font-size: 16px;
        margin-top: 8px;
        margin-bottom: 68px;
      }
    }
    .buttons {
      .learn {
        height: 45px !important;
        width: 168px !important;
        padding: 16px 28px !important;
        width: 45%;
      }
    }
  }
}

@media screen and (max-width: 361px) {
  .tracks {
    flex-direction: column;
    align-items: center;
  }
}
</style>
