<template>
<div class="wrapper">
    <div class="step" v-for="(step, i) in roadmap" :key="i">
        <div>
            <div class="date" :style="checkDate(step.endDate)">{{step.date}}</div>
        </div>
        <div>
            <div class="circle"></div>
        </div>
        <div>
            <div class="title">{{step.title}}</div>
        </div>
    </div>
</div>
</template>
<script>
    export default{
        name:'Steppers',
        data:function(){
            return{
                roadmap:[
                    {
                        date:'Aug - 16th',
                        title:'Hackathon Pre Registration Start',
                        endDate:'2022-08-16'
                    },
                    {
                        date:'Aug - 30th',
                        title:'Sponsors & Track Onboarding Deadline',
                        endDate:'2022-08-30'
                    },
                    {
                        date:'Sept - 1st',
                        title:'Hackathon Official launch- Registration Start',
                        endDate:'2022-09-01'
                    },
                    {
                        date:'Sept - 30th',
                        title:'Registration Close',
                        endDate:'2022-09-30'
                    },
                    {
                        date:'Sept - Oct',
                        title:'Build phase + Sponsor interactions',
                        endDate:'2022-10-31'
                    },
                    {
                        date:'Oct 31st',
                        title:'Submission Deadline',
                        endDate:'2022-10-31'
                    },
                    {
                        date:'Nov 1st week',
                        title:'Evaluation',
                        endDate:'2022-11-07'
                    },
                    {
                        date:'Nov 2nd week',
                        title:'Finale/Demo Day',
                        endDate:'2022-11-14'
                    }
                ]
            }
        },
        methods:{
            checkDate(date){
              console.log(new Date('2022-01-25')); 
                //check if date is in the past
                if(date.includes('TBD')){
                    return {
                        color:'#CCABE1',

                    }
                }else{
                    //check if date is past compared to current date
                    //dummy date

                    var today = new Date();
                    var date = new Date(date);
                    // console.log(date)
                    // console.log(today)
                    if(date < today){
                        return {
                            color:'#9FFE00',
                        }
                    }
                    else{
                        return {
                            color:'#CCABE1',
                        }
                    }
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
.wrapper{
    // padding-left: 28px;
    padding-top: 100px;
}
.step {
  position: relative;
  min-height: 118px;
  color: grey;
  max-width: 100%;
  display: flex;
}
.step + .step {
  margin-top:-10px;
  display: flex;
}
.step > div:first-child {
  position: static;
  height: 0;
}
.step > div:not(:first-child) {
  margin-left: 32px;
}
.step.step-active {
  color: #4285f4
}
.step.step-active .circle {
  background-color: #0069B4;
}
.date{
    margin-right:-17px;
}
/* Circle */
.circle {
  background: #fff;
  position: relative;
  width: 12.06px;
  height: 12.06px;
  border-radius: 100%;
  color: #fff;
  text-align: center;
}

/* Vertical Line */
.circle:after {
  content: ' ';
  display: block;
  bottom: 1px;
  height: 114px;
  width: 2px;
  background-color: #fff;
  z-index: 3;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
}
.step:last-child .circle:after {
  display: none
}


/* Stepper Titles */
.title {
    font-family: 'Brinnan';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 145.9%;
    letter-spacing: -0.015em;
    color: #FFFFFF;
    width: 180px;
}
.date{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 145.9%;
    text-align: right;
    letter-spacing: -0.015em;
    color: #9FFE00;
    width: 80px;
}
.caption {
  font-size: 0.8em;
}
</style>
<style lang="scss" scoped>
@media (min-width: 768px) {
    .wrapper{
        width:70%;
        margin: 0 auto;
    }
    .step {
  position: relative;
  min-height: 168px;
  color: grey;
  max-width: 100%;
  display: flex;
  width: 100%;
}
.step + .step {
  margin-top:-10px;
  display: flex;
}
.step > div:first-child {
  position: static;
  height: 0;
}
.step > div:not(:first-child) {
  margin-left: 32px;
}
.step.step-active {
  color: #4285f4
}
.step.step-active .circle {
  background-color: #0069B4;
}
.date{
    margin-right:-17px;
    font-size: 15px;
}
/* Circle */
.circle {
  background: #fff;
  position: relative;
  width: 18.06px;
  height: 18.06px;
  border-radius: 100%;
  color: #fff;
  text-align: center;
}

/* Vertical Line */
.circle:after {
  content: ' ';
  display: block;
  bottom: 1px;
  height: 164px;
  width: 2px;
  background-color: #fff;
  z-index: 3;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
}
.step:last-child .circle:after {
  display: none
}
    .title{
        font-family: 'Brinnan';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 145.9%;
        max-width: 420px;
        /* or 61px */
        width: 100%;
        letter-spacing: -0.015em;
        color: rgba(255, 255, 255, 0.8);

    }
}
</style>