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
                <button class="learn" style="text-decoration: none; cursor: pointer">
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
              <div class="prize">
            <div class="prizeAndMedal">
                <div>
                {{polygontrack.prize}}
                </div>
                <div>
                <g-image
                    style="width: 15px; height: 15px; margin-left: 8px"
                    width="12"
                    height="12"
                    src="~/assets/third/medal.png" />
                </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <!--AeternityTrack-->
      <div>
        
         <div class="altttile">
             <div>
          <g-image v-if="isMobile" src="~/assets/third/aeternity-ae-logo.svg" />
          <g-image v-else src="~/assets/third/aeternity-ae-logo.svg" />
        </div>
        <div>æternity Track</div>
       
      </div>
        <div class="tracks">
        <div class="card" v-for="(AeternityTrack, i) in AeternityTrack" :key="i">
          <div class="inner-card">
            <div class="name">
              <div class="icon">
                <div class="layer">
                  <img :src="AeternityTrack.icon" />
                </div>
              </div>
              <div class="t">{{ AeternityTrack.name }}</div>
            </div>
            <div class="details">
              {{ AeternityTrack.content }}
            </div>
            
            <div class="buttons">
              <g-link
                style="text-decoration: none; cursor: pointer"
                :to="AeternityTrack.url"
              >
                <button class="learn" style="text-decoration: none; cursor: pointer">
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
              <div class="prize">
            <div class="prizeAndMedal">
                <div>
                {{AeternityTrack.prize}}
                </div>
                <div>
                <g-image
                    style="width: 15px; height: 15px; margin-left: 8px"
                    width="12"
                    height="12"
                    src="~/assets/third/medal.png" />
                </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <!-- Dfinity Tracks -->

      <!--AeternityTrack-->
      <div>
        
         <div class="altttile">
             <div>
          <g-image v-if="isMobile" src="~/assets/third/dfinity-logo-vector.png" />
          <g-image v-else src="~/assets/third/dfinity-logo-vector.png" />
        </div>
        <div>Dfinity Track</div>
       
      </div>
        <div class="tracks">
        <div class="card" v-for="(Dfinity, i) in Dfinity" :key="i">
          <div class="inner-card">
            <div class="name">
              <div class="icon">
                <div class="layer">
                  <img :src="Dfinity.icon" />
                </div>
              </div>
              <div class="t">{{ Dfinity.name }}</div>
            </div>
            <div class="details">
              {{ Dfinity.content }}
            </div>
            
            <div class="buttons">
              <g-link
                style="text-decoration: none; cursor: pointer"
                :to="Dfinity.url"
              >
                <button class="learn" style="text-decoration: none; cursor: pointer">
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
              <div class="prize">
            <div class="prizeAndMedal">
                <div>
                {{Dfinity.prize}}
                </div>
                <div>
                <g-image
                    style="width: 15px; height: 15px; margin-left: 8px"
                    width="12"
                    height="12"
                    src="~/assets/third/medal.png" />
                </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>


     <!-- Associate Tracks -->
     
    <div class="title">Associate Tracks</div>


     <!-- Router Protocol-->
     <div>
        <div class="bounty">
        <div class="cardforbounty" v-for="(RouterProtocol, i) in RouterProtocol" :key="i">
          <div class="inner-card">
            <div class="name">
              <div class="icon">
                <div class="layer">
                  <img :src="RouterProtocol.icon" />
                </div>
              </div>
              <div class="t">{{ RouterProtocol.name }}</div>
              <div class="prize">
            <div class="prizeAndMedal">
                <div>
                {{RouterProtocol.prize}}
                </div>
                <div>
                <g-image
                    style="width: 15px; height: 15px; margin-left: 8px"
                    width="12"
                    height="12"
                    src="~/assets/third/medal.png" />
                </div>
                </div>
            </div>
            </div>
            <div class="details">
              {{ RouterProtocol.content }}
            </div>
            <div class="buttons">
              
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <!-- Arcana Network Track-->
      <div>
        <div class="bounty">
        <div class="cardforbounty" v-for="(ArcanaNetwork, i) in ArcanaNetwork" :key="i">
          <div class="inner-card">
            <div class="name">
              <div class="icon">
                <div class="layer">
                  <img :src="ArcanaNetwork.icon" />
                </div>
              </div>
              <div class="t">{{ ArcanaNetwork.name }}</div>
              <div class="prize">
            <div class="prizeAndMedal">
                <div>
                {{ArcanaNetwork.prize}}
                </div>
                <div>
                <g-image
                    style="width: 15px; height: 15px; margin-left: 8px"
                    width="12"
                    height="12"
                    src="~/assets/third/medal.png" />
                </div>
                </div>
            </div>
            </div>
            <div class="details">
              {{ ArcanaNetwork.content }}
            </div>
            <div class="buttons">
            </div>
             <!-- <div class="prize"> -->
                <!-- {{ArcanaNetwork.prize}} -->
            <!-- </div> -->
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
    <div>
    <!-- <g-link to="/all-tracks/">
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
      </g-link> -->
      </div>
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
              <div class="t">{{ bounty.name }} {{bounty.prize}}</div>
              
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
export default {
  name: "ThirdSection",
  components: {
    Prizes,
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {

        polygontrack: [
            {
          name: "Best DeFi App built on Polygon ",
          prize: "$5000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "The onset of DeFi is changing FinTech as we know it! Identify problem statements that are plaguing the DeFi space and leverage Polygon to change the way consumers transact. ",
          icon: require("~/assets/third/cards/logo1.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/polygon/",
        },
        {
            name: "Best NFT App built on Polygon ",
          prize: "$5000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "NFTs are taking digital assets to a whole new level by opening the proverbial Web3 doors to the general public. Show us how you will revolutionize this space with the support of Polygon and win big!",
          icon: require("~/assets/third/cards/logo1.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/polygon/",

        },
        {
                name: "Best Gaming/ Metaverse Track ",
          prize: "$5000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "Web3 is raising the stakes for incentives within gaming experiences and providing gamers with a whole new experience. Double down and show us how you can elevate gaming experiences with the help of Polygon!",
          icon: require("~/assets/third/cards/logo1.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/polygon/",
        }
        ],
        AeternityTrack: [
             {
          name: "DeFi powered by Oracles",
          prize: "$8000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "By using the native Oracle system we want you to build a powerful price feed alternative to ChainLink that can power all DeFi æpps built on æternity in a decentralized and efficient way!",
          icon: require("~/assets/third/cards/logo1.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/aternity/",
        },
        {
            name: "NFTs everywhere!",
          prize: "$5000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "Take the unique opportunity to build one of the first NFT solutions that are built around our brand new AEX-141 NFT standard. We're looking for minting solutions, launchpads, auction platforms and marketplaces. Check out our Graffiti æpp and think of innovative ways to NFT-ise the artworks!",
          icon: require("~/assets/third/cards/logo1.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/aternity/",

        },
        {
                name: "DAOs - the future of our society!",
          prize: "$7000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "The future of society will be powered by DAOs. Think about innovative solutions that empower our future society to fundraise, to make the right decisions & to empower the people!",
          icon: require("~/assets/third/cards/logo1.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/aternity",
        }] ,
        Dfinity: [{
                   name: "Coming Soon! ",
          prize: "$10,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          //content: "Our mission is to develop and contribute technology that enables the Internet Computer (IC) blockchain and its ecosystem. It is powered by new chain key cryptography that allows it to run at web speed with an efficiency that is many orders of magnitude improved, for smart contracts to serve the web directly to end users, and for on-chain compute to scale without bound-allowing mass market web3 services to run entirely on-chain, and for blockchain to become an alternative to traditional IT, such as cloud services. The IC is governed and updated by the Network Nervous System (NNS), a protocol-integrated DAO that decides to use liquid democracy.",
          icon: require("~/assets/third/cards/logo1.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/Dfinity/",

        }
        ] ,

        RouterProtocol: [
            {
            name: "Create a Cross chain Yield Aggregator using Router CrossTalk Library. ",
          prize: "$5,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "",
          icon: require("~/assets/sponsors/logos/router.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/",
        }

        ],
        
        ArcanaNetwork: [
          {
            name: "BUIDL Privacy Preserving Apps. ",
          prize: "$5,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "Use your imagination and feel free to build any DApp that excites you! Show us how best you can leverage Arcana’s access control feature to store data and Social/Magic links to create wallets. We do not want to limit your imagination but here are some topics for your team to consider as reference: Marketplaces, Games, social apps, NFT based apps.",
          icon: require("~/assets/sponsors/logos/arcana.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/",
        },
          {
            name: "Upgrade the Buidlers Toolbox",
          prize: "$5,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "Build Best tooling, API, SDK, services, or patterns that make it easier for Web3 devs to build with Fluence and Aqua. The easiest way to get started is to go swing by the developer's docs and then build a small Fluence project or try one of the examples, identify tooling deficits, and kick off your hackathon project.",
          icon: require("~/assets/sponsors/logos/fluence.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/",
        },
          {
            name: "Fight climate change with NFTs",
          prize: "$5,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "Climate change is a reality - and *the time to act is now.* The first step of action is Awareness. We rely on you to make your fellow citizens aware of it. Create an NFT using Revise SDK and climate/weather data to showcase the impact it has on humanity.",
          icon: require("~/assets/sponsors/logos/revise.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/",
        },
          {
            name: "Build on Tezos tokens and solve real world problems",
          prize: "$2,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "Build a platform using which users can go long and short on Tezos based tokens, or Tokens bridged to Tezos. The project should use https://kolibri.finance/ (for borrowing against Tez) and a Dex like PlentyDeFi.com (for trading tokens).",
          icon: require("~/assets/sponsors/logos/tezoz.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/",
        },
          {
            name: "Coming Soon!",
          prize: "$5,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "",
          icon: require("~/assets/sponsors/logos/tatum.png"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/",
        },
          {
            name: " Design a cross-chain identity aggregator for Web3:",
          prize: "$5,000",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "User1 can send assets to User2 by knowing their DID (It could be Vedant.Komet or KID Vedant)",
          icon: require("~/assets/sponsors/logos/komet.svg"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/",
        },
          {
            name: "Keep Calm and NFT-ise!",
          prize: "$ 7,777 worth $MNTL tokens",
          level: "Intermediate",
          participants: "324",
          deadline: "Jul 10, 2020",
          content: "NFT based event ticketing platform, that facilitates easy NFT event ticket issuing and easy check-ins using AssetMantle blockchain and MantleWallet. The process should be abstract user friendly such that the tickets should be verifiable by scanning a QR code on mobile. A mobile application with a simple username-based SignUp mechanism would be interesting.",
          icon: require("~/assets/sponsors/logos/assetmantle.svg"),
          // sponsor: require('~/assets/third/sponsors/solana.png'),
          url: "/",
        },
        ],

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
.prizeAndMedal{
  display: flex;
  flex-direction: row;
}
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
    padding-bottom: 10px;
    max-width: 1200px;
     margin: 0 auto;
      display: flex;
     flex-wrap: wrap;
}
.bountyHeader{
  display: flex;
  flex-direction: row;
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
        width: 50%;
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
          flex-direction: row;
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 145.9%;
          letter-spacing: -0.015em;
          
          justify-content: space-between;
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
              background-color:none;
              transform: translate3d(-3.59px, -3.59px, -3.59px);
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
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
          align-items: right;
          font-family: "Inter";
          font-style: normal;
          font-weight: 800;
          font-size: 22px;
          line-height: 145.9%;
          letter-spacing: -0.015em;
          color: rgb(255, 255, 255);
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
      min-height: 200px;
      width: 70%;
      // margin:0 auto;
      margin-right: auto;
      margin-left: auto;
      //max-width: 448px;
      margin-bottom: 10px;
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
          flex-direction: row;
          font-weight: 400;
          font-size: 15px;
          line-height: 145.9%;
          letter-spacing: -0.015em;
          color: #ffffff;
          margin-bottom: 23px;
          justify-content:space-between;
          .t {
            max-width: 80%;
            font-family: "Brinnan";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 145.9%;
            letter-spacing: -0.015em;
            color: #ffffff;
            margin-right: 30px;
          }
          .prize {
            font-family: 'Inter';
            margin-top:0.9375rem;
            padding-top: 0.3rem;
            height: 20px;
      //text-align: center;
            font-style: normal;
            
            font-weight: 400;
         
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
            width: 150px;
            height: 70px;
            border: 0.60263px solid #ffffff63;
            border-radius: 6.0263px;
            margin-right: 23.59px;
            .layer {
              width: 80%;
              height: 80%;
              padding:5px;
              border-radius: 6.0263px;
              // background: white;
             // transform: translate3d(-3.59px, -3.59px, -3.59px);
              img {
                width: 100%;
                height: 100%;
                object-fit: scale-down;
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
          //padding-left: 3.125rem;
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 21px;
          line-height: 145.9%;
          letter-spacing: -0.015em;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 28px;
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
        width: 50%;
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