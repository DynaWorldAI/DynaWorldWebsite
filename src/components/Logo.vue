<template>
  <div class="logo">
    <div class="logo-container">
      <div class="cash-body">
        <div class="cash-head">
          <div class="cash-face">
            <div class="cash-eye left"></div>
            <div class="cash-eye right"></div>
            <div class="cash-mouth"></div>
          </div>
        </div>
        <div class="cash-tail">
          <div class="tail-curve"></div>
          <div class="tail-end"></div>
        </div>
      </div>
      <div class="dollar-sign">$</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-container {
  position: relative;
  width: 80px;
  height: 80px;
}

.cash-body {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ffd700, #ffa500);
  border-radius: 50%;
  transform: rotate(-45deg);
}

.cash-head {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;
  background: linear-gradient(135deg, #ffd700, #ffa500);
  border-radius: 50%;
}

.cash-face {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
}

.cash-eye {
  position: absolute;
  width: 15px;
  height: 15px;
  background: #000080;
  border-radius: 50%;
}

.cash-eye.left {
  top: 20%;
  left: 20%;
}

.cash-eye.right {
  top: 20%;
  right: 20%;
}

.cash-mouth {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 10px;
  background: #000080;
  border-radius: 0 0 10px 10px;
}

.cash-tail {
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 40%;
  height: 20%;
}

.tail-curve {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 8px solid transparent;
  border-right-color: #ffd700;
  border-bottom-color: #ffd700;
  border-radius: 0 0 100% 0;
}

.tail-end {
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 15px;
  height: 15px;
  background: #ffd700;
  border-radius: 50%;
}

.dollar-sign {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  font-size: 2.5rem;
  font-weight: bold;
  color: #000080;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .logo-container {
    width: 60px;
    height: 60px;
  }
  
  .dollar-sign {
    font-size: 2rem;
  }
}
</style> 