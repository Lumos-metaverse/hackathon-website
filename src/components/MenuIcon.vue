<template>
    <button @click="updateIcon" class="btn-toggle" id="menu-toggle">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </button>
</template>
<script>
export default {
    name:'MenuIcon',
    props:{
        isDrawerOpen: {
            type: Boolean,
            default: false
        }
    },
    watch:{
        isDrawerOpen(newVal){
          const btn = document.getElementById("menu-toggle");
          const lines = btn.querySelectorAll(".line");
          const cls = { open: "open", close: "close" };
          let btnClass = cls.open;
            if(!newVal && btn.classList.contains(cls.open)){
                btn.classList.remove('open');
                btnClass = cls.close;
            }
            void btn.offsetWidth;
            // btn.classList.add(btnClass);
        }
    },
    methods:{
        updateIcon(){
            this.$emit('toggleDrawer')
            const btn = document.getElementById("menu-toggle");
            const lines = btn.querySelectorAll(".line");
            const cls = { open: "open", close: "close" };
            let btnClass = cls.open;
            if (btn.classList.contains(cls.open)) {
                btn.classList.remove('open');
                btnClass = cls.close;
            } else if (btn.classList.contains(cls.close)) {
                btn.classList.remove('close');
                btnClass = cls.open;
            }

            void btn.offsetWidth;
            btn.classList.add(btnClass);
        }
    }
}
</script>
<style lang="scss" scoped>
$toggle-size: 24px;
$toggle-line-color: white;
$toggle-line-focus-color: white;
$toggle-line-size: $toggle-size/6;
$toggle-line-angle: 405deg;
$toggle-anim-speed: 0.9s;
.btn-toggle {
  position: relative;
  margin-left: auto;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  background-color: transparent;
  border-color: transparent;
  outline: none;
  transform: translateZ(0);
  transition: transform 0.1s ease-out;
  
  &:active { transform: translateY(4px); }
  
  &:focus .line:after { 
    background-color: $toggle-line-focus-color;
  }
}

.line {
  display: block;
  width: $toggle-size;
  padding: $toggle-line-size/2;
  
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: $toggle-line-size;
    background-color: $toggle-line-color;
    transform: translateZ(0) rotate(0);
    transition: background-color 0.2s ease-out;
  }
    
  .open & {
    @for $i from 1 through 2 {
      &:nth-child(#{$i}) {
        animation: jump-#{$i} $toggle-anim-speed forwards ease;
        &:after {
          animation: line-#{$i} $toggle-anim-speed forwards ease-in-out;
        }
      }
    }
  }
  
  .close & {
    @for $i from 1 through 2 {
      &:nth-child(#{$i}) {
        animation: jump-#{$i} $toggle-anim-speed reverse ease;
        &:after {
          animation: line-#{$i} $toggle-anim-speed reverse ease-in-out;
        }
      }
    }
  }
  
  .open &,
  .close & {
    &:nth-child(3) {
      animation: jump-3 $toggle-anim-speed forwards ease-out;
    }
  }
}

@keyframes line-1 {
  10% { transform: translateZ(0) rotate(0) }
  80% { transform: translateZ(0) rotate($toggle-line-angle - 10) }
  90%, 100% { transform: translateZ(0) rotate($toggle-line-angle) }
}

@keyframes line-2 {
  10% { transform: translateZ(0) rotate(0) }
  20% { transform: translateZ(0) rotate(10deg) }
  90%, 100% { transform: translateZ(0) rotate(-$toggle-line-angle) }
}

@keyframes jump-1 {
  10% { transform: translateY(0) }
  50% { transform: translateY(-$toggle-line-size * 12) }
  90%, 100% { transform: translateY(-$toggle-line-size * 1) }
}

@keyframes jump-2 {
  10% { transform: translateY(0) }
  50% { transform: translateY(-$toggle-line-size * 10) }
  85%, 100% { transform: translateY(-$toggle-line-size * 3) }
}

@keyframes jump-3 {
  10% { transform: translateY(-$toggle-line-size*1) rotate(15deg) }
  30% { transform: translateY(-$toggle-line-size*4) rotate(-10deg) }
  50% { transform: translateY($toggle-line-size) rotate(5deg) }
  80% { transform: translateY(0) }
}

@keyframes glow {
  50% {
    box-shadow: rgba(lighten($toggle-line-color, 10%), 0.4) 0 0 2px 2px;
  }
}
</style>