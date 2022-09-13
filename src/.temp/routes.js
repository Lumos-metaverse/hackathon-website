const c1 = () => import(/* webpackChunkName: "page--src--pages--pillar-of-governance-vue" */ "/Users/akashsachan/Lumos/hackathon-website/src/pages/pillar-of-governance.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--operation-sustainability-vue" */ "/Users/akashsachan/Lumos/hackathon-website/src/pages/operation-sustainability.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--polygon-vue" */ "/Users/akashsachan/Lumos/hackathon-website/src/pages/polygon.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--prizes-vue" */ "/Users/akashsachan/Lumos/hackathon-website/src/pages/prizes.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--keep-calm-nft-vue" */ "/Users/akashsachan/Lumos/hackathon-website/src/pages/keep-calm-nft.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--internetcomputer-vue" */ "/Users/akashsachan/Lumos/hackathon-website/src/pages/internetcomputer.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--can-you-dao-it-vue" */ "/Users/akashsachan/Lumos/hackathon-website/src/pages/can-you-dao-it.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--defi-the-odds-vue" */ "/Users/akashsachan/Lumos/hackathon-website/src/pages/defi-the-odds.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--entertainment-central-vue" */ "/Users/akashsachan/Lumos/hackathon-website/src/pages/entertainment-central.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--builders-toolbox-vue" */ "/Users/akashsachan/Lumos/hackathon-website/src/pages/builders-toolbox.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--all-tracks-vue" */ "/Users/akashsachan/Lumos/hackathon-website/src/pages/all-tracks.vue")
const c12 = () => import(/* webpackChunkName: "page--src--pages--aeternity-vue" */ "/Users/akashsachan/Lumos/hackathon-website/src/pages/aeternity.vue")
const c13 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/akashsachan/Lumos/hackathon-website/node_modules/gridsome/app/pages/404.vue")
const c14 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/akashsachan/Lumos/hackathon-website/src/pages/Index.vue")

export default [
  {
    path: "/pillar-of-governance/",
    component: c1
  },
  {
    path: "/operation-sustainability/",
    component: c2
  },
  {
    path: "/polygon/",
    component: c3
  },
  {
    path: "/prizes/",
    component: c4
  },
  {
    path: "/keep-calm-nft/",
    component: c5
  },
  {
    path: "/internetcomputer/",
    component: c6
  },
  {
    path: "/can-you-dao-it/",
    component: c7
  },
  {
    path: "/defi-the-odds/",
    component: c8
  },
  {
    path: "/entertainment-central/",
    component: c9
  },
  {
    path: "/builders-toolbox/",
    component: c10
  },
  {
    path: "/all-tracks/",
    component: c11
  },
  {
    path: "/aeternity/",
    component: c12
  },
  {
    name: "404",
    path: "/404/",
    component: c13
  },
  {
    name: "home",
    path: "/",
    component: c14
  },
  {
    name: "*",
    path: "*",
    component: c13
  }
]
