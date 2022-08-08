<template>
    <section class="hero">
        <g-image v-if="isMobile" src="~/assets/home/hero-bg-mb.jpg"/>
        <g-image v-else src="~/assets/home/hero-bg.jpg"/>
        <div class="content">
          <div class="title">
            <!-- <div><span>#BUIDL</span> for Web3</div>
            <div>Hack 2022</div> -->
            <g-image v-if="isMobile" class="home-hero" src="~/assets/home/build_logo.png"/>
            <g-image v-else class="home-hero" src="~/assets/home/buidl_logo_mb.png"/>
          </div>
          <div class="sub-title">
            Push the boundaries of the innovation in Web3 and win exciting prizes!
          </div>
          <button class="r-btn">
              REGISTER
              <g-image style="width:9px;height:9px;margin-left:17px;" width="12" height="12" src="~/assets/arrows/purple-arrow.svg"/>
            </button>
          <!-- <div class="or">or</div> -->
          <a href="https://discord.gg/XWj3ruPYsN" target="_blank" class="j-btn">JOIN OUR DISCORD COMMUNITY</a>
        </div>
      </section>
</template>
<script>
export default {
    name:'FirstSection',
    props:{
        isMobile: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
.hero{
    width:100%;
    height: 100vh;
    img{
      width:100%;
      height:100%;
      object-fit: cover;
    }
    .home-hero{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .content{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100% - 128px);
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 128px;
      .title{
        // font-family: 'Brinnan';
        // font-style: normal;
        // font-weight: 700;
        // font-size: 80px;
        // line-height: 145.9%;
        // text-align: center;
        // letter-spacing: -0.015em;
        // color:white;
        width:500px;
        height: 300px;
      
        span{
          color: #01C3F1;
        }
      }
      .sub-title{
        margin-top:14px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 145.9%;
        text-align: center;
        letter-spacing: -0.015em;
        color: rgba(255, 255, 255, 0.8); 
        max-width: 450px;
      }
      .r-btn{
       font-family: 'Brinnan';
        background: linear-gradient(95.7deg, #2BF2FF 0.32%, #01C3F1 100.26%);
        box-shadow: 0px 0px 12.1492px rgba(43, 217, 255, 0.55);
        border-radius: 4.85967px;
        margin-top: 42.6px;
        width: 172px;
        height: 51px;
        border:none;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.1em;
        color: #36104C;
      }
      .or{
        font-family: 'Brinnan';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 145.9%;
        text-align: center;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 28px;
        margin-bottom:29px;
      }
      .j-btn{
       font-family: 'Brinnan';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 145.9%;
        margin-top: 60px;
        /* or 23px */

        text-align: center;
        letter-spacing: 0.1em;
        text-decoration-line: underline;
        background: none;
        border:none;
        color: #FFFFFF; 
      }
    }
  }
 @media (max-width: 768px) {
  .landing{
    .hero{
      .content{
        .title{
          width:400px;
        }
        .sub-title{
          font-size: 16px;
        }
        .r-btn{
          width: 120px;
          height: 40px;
        }
        .or{
          font-size: 12px;
          margin-top: 8px;
          margin-bottom:9px;
        }
        .j-btn{
          font-size: 12px;
        }
      }
    }
  }
  @media (max-width: 420px) {
    .landing{
      .hero{
        .content{
          .title{
            width:300px;
            height:200px;
            .span{
              font-size:40px;
            }
          }
          .sub-title{
            font-size: 14px;
            max-width: 68%;
            text-align: center;
          }
          .r-btn{
            width: 173.59px;
            height: 55px;
          }
          .or{
            font-size: 13px;
          }
          .j-btn{
            font-size: 12px;
          }
        }
      }
    }
  }
 }
</style>
