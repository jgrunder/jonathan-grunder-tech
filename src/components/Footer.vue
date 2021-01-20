<template>
  <footer class="footer">
    <div class="copyright-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="copytext">&copy; MyProfile, All rights reserved | Design By: <a
              href="https://themehippo.com">themehippo</a> largement retravaillé par mes soins. Dernière modification : 08/01/2021</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer {
  padding : 30px 0;
  text-align : right;
  .copyright-section {
    font-size  : 13px;
    .copytext {
      font-size: 0.75em;
      font-weight : 400;
      display     : block;
    }
  }
}
@media (max-width : 768px) {
  .footer {
    text-align: left;
  }
}
@media (max-width : 600px){
  .footer {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
