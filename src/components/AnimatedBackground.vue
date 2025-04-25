<template>
  <div class="background">
    <div class="arrow-pattern"></div>
    <div class="flying-currencies">
      <div class="currency" style="--delay: 0s; --duration: 20s; --start: 20%;">
        <div class="currency-body">$</div>
        <div class="wings">
          <div class="wing left"></div>
          <div class="wing right"></div>
        </div>
      </div>
      <div class="currency" style="--delay: 2s; --duration: 18s; --start: 40%;">
        <div class="currency-body">₹</div>
        <div class="wings">
          <div class="wing left"></div>
          <div class="wing right"></div>
        </div>
      </div>
      <div class="currency" style="--delay: 4s; --duration: 22s; --start: 60%;">
        <div class="currency-body">£</div>
        <div class="wings">
          <div class="wing left"></div>
          <div class="wing right"></div>
        </div>
      </div>
      <div class="currency" style="--delay: 6s; --duration: 19s; --start: 80%;">
        <div class="currency-body">¥</div>
        <div class="wings">
          <div class="wing left"></div>
          <div class="wing right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedBackground'
}
</script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #008080, #006666);
  overflow: hidden;
}

.arrow-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(45deg, rgba(0, 128, 128, 0.1) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(0, 128, 128, 0.1) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(0, 128, 128, 0.1) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(0, 128, 128, 0.1) 75%);
  background-size: 100px 100px;
  background-position: 0 0, 0 50px, 50px -50px, -50px 0px;
  opacity: 0.5;
}

.flying-currencies {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.currency {
  position: absolute;
  top: var(--start);
  left: 0;
  transform: translateX(-100%);
  animation: fly var(--duration) linear infinite;
  animation-delay: var(--delay);
  z-index: 1;
}

.currency-body {
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #008080;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
}

.wings {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 40px;
  z-index: 1;
}

.wing {
  position: absolute;
  width: 50px;
  height: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50% 50% 0 50%;
  animation: flap 0.5s ease-in-out infinite alternate;
}

.wing.left {
  left: 0;
  transform-origin: right center;
}

.wing.right {
  right: 0;
  transform-origin: left center;
  transform: scaleX(-1);
}

@keyframes fly {
  0% {
    transform: translateX(-100%) translateY(0);
  }
  50% {
    transform: translateX(50vw) translateY(-20px);
  }
  100% {
    transform: translateX(100vw) translateY(0);
  }
}

@keyframes flap {
  0% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
}

@media (max-width: 768px) {
  .currency-body {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  
  .wings {
    width: 80px;
    height: 32px;
  }
}
</style> 