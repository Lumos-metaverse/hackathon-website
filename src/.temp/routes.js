const c1 = () => import(/* webpackChunkName: "page--src--pages--pillar-of-governance-vue" */ "/Users/thecoderpanda/Desktop/lumos/hackathon-website/src/pages/pillar-of-governance.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--operation-sustainability-vue" */ "/Users/thecoderpanda/Desktop/lumos/hackathon-website/src/pages/operation-sustainability.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--polygon-vue" */ "/Users/thecoderpanda/Desktop/lumos/hackathon-website/src/pages/polygon.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--keep-calm-nft-vue" */ "/Users/thecoderpanda/Desktop/lumos/hackathon-website/src/pages/keep-calm-nft.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--can-you-dao-it-vue" */ "/Users/thecoderpanda/Desktop/lumos/hackathon-website/src/pages/can-you-dao-it.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--defi-the-odds-vue" */ "/Users/thecoderpanda/Desktop/lumos/hackathon-website/src/pages/defi-the-odds.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--entertainment-central-vue" */ "/Users/thecoderpanda/Desktop/lumos/hackathon-website/src/pages/entertainment-central.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--dfinity-vue" */ "/Users/thecoderpanda/Desktop/lumos/hackathon-website/src/pages/Dfinity.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--builders-toolbox-vue" */ "/Users/thecoderpanda/Desktop/lumos/hackathon-website/src/pages/builders-toolbox.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--all-tracks-vue" */ "/Users/thecoderpanda/Desktop/lumos/hackathon-website/src/pages/all-tracks.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--aternity-vue" */ "/Users/thecoderpanda/Desktop/lumos/hackathon-website/src/pages/aternity.vue")
const c12 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/thecoderpanda/Desktop/lumos/hackathon-website/node_modules/gridsome/app/pages/404.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/thecoderpanda/Desktop/lumos/hackathon-website/src/pages/Index.vue")

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
    path: "/keep-calm-nft/",
    component: c4
  },
  {
    path: "/can-you-dao-it/",
    component: c5
  },
  {
    path: "/defi-the-odds/",
    component: c6
  },
  {
    path: "/entertainment-central/",
    component: c7
  },
  {
    path: "/dfinity/",
    component: c8
  },
  {
    path: "/builders-toolbox/",
    component: c9
  },
  {
    path: "/all-tracks/",
    component: c10
  },
  {
    path: "/aternity/",
    component: c11
  },
  {
    name: "404",
    path: "/404/",
    component: c12
  },
  {
    name: "home",
    path: "/",
    component: c13
  },
  {
    name: "*",
    path: "*",
    component: c12
  }
]
