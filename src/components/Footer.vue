<template>
  <footer class="footer">
    <div class="copyright-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="copytext">&copy; Jonathan GRUNDER | Design réalisé par <a href="https://themehippo.com" target="_blank">themehippo</a> largement retravaillé par mes soins. Dernières modifications : {{ lastModifDate }}</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import moment from 'moment'
import json from '../store/lastupdate.json'
export default {
  name: 'Footer',
  computed: {
    lastModifDate() {
      return moment(json.dateUpdate).format('DD/MM/YYYY')
    }
  }
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
