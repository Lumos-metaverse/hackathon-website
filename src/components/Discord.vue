<template>
    <section class="discord">
        <div class="copy">
            To access ongoing work <span>Opportunities</span>, Join our recruitment channel
        </div>
        <div class="cta">
            <div id="container">
                <div id="circle">
                    <g-image class="img" src="~/assets/discord/circle.svg"/>
                    <div>
                        <a href=" https://discord.gg/WyfmzJpzZd" target="_blank">
                            <g-image src="~/assets/discord/discord.png"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid">
            <g-image class="mb" src="~/assets/discord/grid.png"/>
             <g-image class="desktop" src="~/assets/discord/grid-desktop.png"/>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.mb{
        display: block;
    }
    .desktop{
        display: none;
    }
#container { margin: 0%; max-width: 205px; margin:0 auto;}

#circle { position: relative; width: 100%; padding-bottom: 100%; overflow: hidden; }
#circle div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:64px;
}

#circle text { font-family: 'Brinnan', Arial; color:'white'; font-size: 14px; font-weight: bold; }

#circle .img { position: absolute; left: 0; top: 0; width: 100%; height: 205px;

  -webkit-animation-name: rotate;
     -moz-animation-name: rotate;
      -ms-animation-name: rotate;
       -o-animation-name: rotate;
          animation-name: rotate;
  -webkit-animation-duration: 20s;
     -moz-animation-duration: 20s;
      -ms-animation-duration: 20s;
       -o-animation-duration: 20s;
          animation-duration: 20s;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
       -o-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
       -o-animation-timing-function: linear;
          animation-timing-function: linear;

}
//on hover pause the animation
#circle:hover {
    .img{
  -webkit-animation-play-state: paused;
     -moz-animation-play-state: paused;
      -ms-animation-play-state: paused;
       -o-animation-play-state: paused;
          animation-play-state: paused;
 }
}

@-webkit-keyframes rotate {
    from { -webkit-transform: rotate(-360deg); }
    to { -webkit-transform: rotate(0); }
}
@-moz-keyframes rotate {
    from { -moz-transform: rotate(-360deg); }
    to { -moz-transform: rotate(0); }
}
@-ms-keyframes rotate {
    from { -ms-transform: rotate(-360deg); }
    to { -ms-transform: rotate(0); }
}
@-o-keyframes rotate {
    from { -o-transform: rotate(-360deg); }
    to { -o-transform: rotate(0); }
}
@keyframes rotate {
    from { transform: rotate(-360deg); }
    to { transform: rotate(0); }
}


</style>
<style scoped lang="scss">
.discord{
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.cta{
    overflow: hidden;
    margin-top: 100px;
    // position:absolute;
    // top:50%;
    // left:50%;
    // transform: translate(-50%, -50%);
}
.grid{
    max-height: 216px;
    position: absolute;
    bottom: 0;
}
.copy{
    font-family: 'Brinnan';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 145.9%;
    /* or 44px */
    margin-top: 133px;
    max-width: 600px;
    margin:0 auto;

    text-align: center;
    letter-spacing: -0.015em;
    color: #FFFFFF;
    span{
        color:rgba(1, 195, 241, 1)
    }

}
    #container { margin: 0%; max-width: 155px; margin:0 auto;}
    #circle text { font-family: 'Brinnan', Arial; color:'white'; font-size: 14px; font-weight: bold; }
    #circle .img { position: absolute; left: 0; top: 0; width: 100%; height: 155px;}
    #circle div {
        width:82px;
    }
    @media (min-width: 768px) {
    .mb{
        display: none;
    }
    .desktop{
        display: block;
    }
    }
</style>