<template>
    <section class="about">
       <div class="bg-image">
            <g-image class="mb" src="~/assets/about/bg-mb.png"/>
            <g-image class="desktop" src="~/assets/about/bg.jpg"/>
       </div> 
       <div class="copy">
        <div class="title">
            About Lumos Metaverse
        </div>
        <div class="content">
            Lumos is a metaverse for builders to learn and flourish in the Web3 economy. We’re bringing builders a boundless canvas to showcase their career journey and aggregate their builder identity silos in one place. 
        </div>
        <form> <button class="learn-cta" type="submit" formaction="https://medium.com/lumos-labs/were-building-the-lumos-metaverse-to-elevate-builder-opportunities-in-web3-fadc7ea9e908" formtarget="_blank">LEARN MORE <g-image style="width:12px;height:12px;margin-left:14px;" width="12px" height="12px" src="~/assets/arrows/gold-arrow.svg"/></button>
      </form>
      <div class="content2"> To get whitelisted for Lumos Metaverse.</div>
        <form> <button class="learn-cta" type="submit" formaction="https://my.forms.app/lumoslabs/whitelist" formtarget="_blank"> Register Here<g-image style="width:12px;height:12px;margin-left:14px;" width="12px" height="12px" src="~/assets/arrows/gold-arrow.svg"/></button>
      </form>
       <div class="content2"> Are you interested in exploring full-time opportunities and internships in the web3 space? Reach out to us, today!</div>
        <form> <button class="learn-cta" type="submit" formaction="https://lumos-recruitment.super.site/" formtarget="_blank">Click Here<g-image style="width:12px;height:12px;margin-left:14px;" width="12px" height="12px" src="~/assets/arrows/gold-arrow.svg"/></button>
      </form>
      </div>
      

    </section>
</template>
<style lang="scss" scoped>
    .mb{
        display: block;
    }
    .desktop{
        display: none;
    }
    .about{
        position: relative;
        width: 100%;
        min-height: 667px;
        overflow: hidden;
        .copy{
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 1px;
           // margin-left: 150px;
            z-index: 2;
            height: 100%;
            width: 100%;
            background: linear-gradient(92.83deg, #36104C 29.49%, rgba(54, 16, 76, 0.5) 97.51%);
            .title{
                font-family: 'Brinnan';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 145.9%;
                letter-spacing: -0.015em;
                color: #FFFFFF;
                max-width: 289px;
                margin-bottom: 21px;
            }
            .content{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 145.9%;
                letter-spacing: -0.015em;
                color: rgba(255, 255, 255, 0.8);
                max-width: 289px;
                margin-bottom:69px;
            }
            .content2 {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 15px;
                line-height: 145.9%;
                letter-spacing: -0.015em;
                color: rgba(255, 255, 255, 0.8);
                max-width: 289px;
                margin-bottom:10px;
                padding-top: 20px;
                
            }
            .learn-cta{
                font-family: 'Brinnan';
                font-style: normal;
                font-weight: 700;
                font-size: 13px;
                line-height: 145.9%;
                letter-spacing: 0.1em;
                color: #FDC506;
                background: none;
                border: none;
                max-width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
            }
        }
        .bg-image{
            width: 592.89px;
            height: 667px;
            position: absolute;
            top: 0;
            left: -15px;
            z-index: 1;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
    @media (min-width: 786px) {
        .mb{
            display: none;
        }
        .desktop{
            display: block;
        }
        .about{
            width: 100%;
            position: relative;
            overflow: hidden;
            background: linear-gradient(92.83deg, #36104C 29.49%, rgba(54, 16, 76, 0) 97.51%);
            .copy{
                padding-left:300px;
                .title{
                    font-size: 45px;
                    margin-bottom: 32px;
                    max-width: 400px;
                }
                .content{
                    font-size: 16px;
                    margin-bottom: 77px;
                    max-width: 400px;
                }
                .learn-cta{
                 font-size: 14px;   
                }
            }
            .bg-image{
                width:50%;
                height: 100%;
                position: absolute;
                top:50%;
                transform: translateY(-50%);
                left: initial;
                right: 0px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
</style>
