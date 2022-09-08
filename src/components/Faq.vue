<template>
  <section v-show="faqModal" class="faq-modal">
    <div class="faq-container">
      <div class="faq-header">
        <h2>Developer Support (FAQ)</h2>
      </div>
      <div class="faq-main">
        <div v-for="faqItem in faqList" :key="faqItem.qus" class="faq-item" @click="faqdrop">
          <div class="accIcon">
            <div class="vertical" />
            <div class="horizontal" />
          </div>
          <h3 class="qus">
            {{ faqItem.qus }}
          </h3>
          <!-- <a class="copy" target="_blank" :href="faqItem.href"> -->
            <p class="ans">
              {{ faqItem.ans }}
            </p>
          <!-- </a> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SsupFaq',
  //   props: {
  //     faqList: {
  //       type: Array,
  //       default: () => [],
  //       required: false
  //     }
  //   },
  data() {
    return {
      faqModal: true,
      faqList: [
        {
          qus: 'How many people can be on a team?',
          ans: 'You can form teams of up to 5 people. You can team up with hackers of any country or experience level! Join the Lumos Metaverse Discord Server ',
          
        },
        {
          qus: "I'm new to Web3. Can I participate?",
          ans: "Yes, you can participate in the #BUIDL for Web3 Hack. We will be providing you with a Hackathon Kit, which will include all the necessary tools to participate in the Hackathon. You can also participate in the Hackathon by following the instructions in the Hackathon Kit."
        },
        {
          qus: "Is the #BUIDL for Web3 Hack (2022), a team hackathon or an individual one?",
          ans: "The #BUIDL for Web3 Hack is a team hackathon. You can form teams of up to 5 people. You can team up with hackers of any country or experience level! Join the Lumos Metaverse Discord Server."
        },
        {
          qus: "Can I make an individual submission?",
          ans: "Yes, you can submit your own project. You can also submit your project to the Lumos Metaverse Discord Server."
        },
        {
          qus: "Who owns the IP to my project?",
          ans: "You own the IP"
        },
        {
          qus: " What is the selection criteria for #BUIDL for Web3 Hack (2022)?",
          ans: `The selection criteria for #BUIDL for Web3 Hack (2022) is - Click here`,
          href: "https://www.notion.so/Judging-Criteria-Process-7c309cf9cb8a411ca0f666a5b5c678e0"
        },
        {
          qus: "Does #BUILD for Web3 Hack provide any Career Opportunities? ",
          ans: "Yes, #BUILD for Web3 Hack provides Career Opportunities for the participants."
        }
      ]
    }
  },
  methods: {
    showFaqs() {
      this.faqModal = true
    },
    faqdrop(e) {
      const children = e.currentTarget.children
      const qus = children[1]
      const vertical = children[0].querySelector('.vertical')
      qus.style.color = qus.style.color === 'rgb(54, 16, 76)' ? '#757575' : 'rgb(54, 16, 76)'
      children[2].style.display = children[2].style.display === 'block' ? 'none' : 'block'
      vertical.style.transform = children[2].style.display === 'none' ? 'none' : 'rotate(90deg)'
    }
  }
}
</script>


<style lang="scss" scoped>
.faq-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: white;
  backdrop-filter: blur(10px);
  z-index: 1000;

  >.faq-container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;

    >.faq-header {
      display: flex;
      justify-content: flex-start;
      align-self: center;
      //   width: 100%;
      padding: 16px 18px;

      // background: linear-gradient(130deg, #f7971e, #ffd200);
      >h2 {
        font-family: 'Brinnan';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 145.9%;
        /* or 90px */

        letter-spacing: -0.015em;

        color: #36104C;
      }
    }

    >.faq-main {
      padding: 12px 12px 24px;
      height: calc(100% - 64px - 24px);
      text-align: left;
      color: #fff;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      >.faq-item {
        position: relative;
        border-bottom: 0.673529px solid #9B9B9B;

        // border-top: 0.673529px solid #9B9B9B;
        &:first-child {
          //   border-bottom: none;
          border-top: 0.673529px solid #9B9B9B;
        }

        >.accIcon {
          position: absolute;
          cursor: pointer;
          //   top: 50%;
          //   transform: translateY(-50%);
          top: 16px;
          right: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;

          >.vertical,
          >.horizontal {
            content: '';
            position: absolute;
            background-color: rgba(53, 17, 74, 1);
            transition: ease 0.3s all;
          }

          >.vertical {
            width: 2px;
            height: 14px;
          }

          >.horizontal {
            width: 14px;
            height: 2px;
          }
        }

        >.qus {
          cursor: pointer;
          font-size: 14px;
          margin-top: auto;
          font-weight: 600;
          line-height: 24px;
          color: #757575;
          height: 100%;
          margin-bottom: auto;
          padding: 16px 32px;
        }

        >.ans {
          display: none;
          padding-left: 34px;
          margin-bottom: 12px;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          color: rgba(45, 45, 45, 0.8);
          overflow: hidden;
        }
      }
    }
  }

  >.close-btn {
    margin-top: 24px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    color: rgba(53, 17, 74, 1);
    cursor: pointer;
  }
}
</style>
<style lang="scss" scoped>
@media (min-width: 768px) {
  .faq-modal {
    >.faq-container {
      >.faq-header {
        >h2 {
          font-size: 45px;
        }
      }
    }

    .faq-main {
      >.faq-item {
        >.qus {
          font-size: 16x !important;
          line-height: 23px !important;
        }

        >.ans {
          font-size: 16px !important;
          line-height: 23px !important;
        }
      }
    }
  }
}
</style>