<template>
  <div id="preloader">
    <div id="status">
      <div class="status-mes"></div>
    </div>
  </div>
</template>

<script>
import jQuery from 'jquery';
jQuery(function ($) {
  (function () {
    $('#preloader').delay(200).fadeOut('slow');
  }());
});
export default {
  name: 'PreLoader'
}
</script>

<style scoped lang="scss">
#preloader {
  background : #ccc;
  bottom     : 0;
  left       : 0;
  position   : fixed;
  right      : 0;
  top        : 0;
  z-index    : 9999;
}
#status, .status-mes {
  background-image    : url('~@/assets/puff.svg');
  background-position : center;
  background-repeat   : no-repeat;
  height              : 200px;
  left                : 50%;
  margin              : -100px 0 0 -100px;
  position            : absolute;
  top                 : 50%;
  width               : 200px;
}
.status-mes {
  background : none;
  left       : 0;
  margin     : 0;
  text-align : center;
  top        : 65%;
}
</style>
