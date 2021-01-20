<template>
  <label id="switch" class="switch">
    <input type="checkbox" id="slider">
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: 'Switcher'
}
</script>

<style scoped lang="scss">
/* The switch */
.switch {
  position: fixed;
  top: 20px;
  right: 20px;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}
@media (max-width: 1023px) {
  #switch {
    display: none;
  }
}
/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: "";
    height: 40px;
    width: 40px;
    left: 0px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 0px 15px #2020203d;
    background: white url('~@/assets/moon.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  /* Rounded sliders */
  &.round {
    border-radius: 34px;
    &:before {
      border-radius: 50%;
    }
  }
}
input:checked + .slider {
  background-color: #2196f3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
  background: white url('~@/assets/sun.png');
  background-repeat: no-repeat;
  background-position: center;
}
</style>
