const c1 = () => import(/* webpackChunkName: "page--src--pages--pillar-of-governance-vue" */ "/Users/quiph/Documents/side/hackthon/src/pages/pillar-of-governance.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--operation-sustainability-vue" */ "/Users/quiph/Documents/side/hackthon/src/pages/operation-sustainability.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--keep-calm-nft-vue" */ "/Users/quiph/Documents/side/hackthon/src/pages/keep-calm-nft.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--can-you-dao-it-vue" */ "/Users/quiph/Documents/side/hackthon/src/pages/can-you-dao-it.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--defi-the-odds-vue" */ "/Users/quiph/Documents/side/hackthon/src/pages/defi-the-odds.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--entertainment-central-vue" */ "/Users/quiph/Documents/side/hackthon/src/pages/entertainment-central.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--builders-toolbox-vue" */ "/Users/quiph/Documents/side/hackthon/src/pages/builders-toolbox.vue")
const c8 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/quiph/Documents/side/hackthon/node_modules/gridsome/app/pages/404.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/quiph/Documents/side/hackthon/src/pages/Index.vue")

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
    path: "/keep-calm-nft/",
    component: c3
  },
  {
    path: "/can-you-dao-it/",
    component: c4
  },
  {
    path: "/defi-the-odds/",
    component: c5
  },
  {
    path: "/entertainment-central/",
    component: c6
  },
  {
    path: "/builders-toolbox/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
