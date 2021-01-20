<template>
  <section class="section-wrapper portfolio-section">
    <div class="container">
      <div class="row">
        <div class="col-md-3 borders">
          <div class="section-title">
            <h2>Créations</h2>
          </div>
        </div>
        <div class="col-md-9 borders">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <a class="portfolio-item" href="https://aiondatabase.info/fr/">
                <div class="portfolio-thumb">
                  <img src="~@/assets/aion-db.png" alt="Aperçu aiondatabase.info">
                </div>
                <div class="portfolio-info">
                  <h3>AionDatabase.info</h3>
                  <small>Database pour Aion 2.7</small>
                </div>
              </a>
            </div>
            <div class="col-md-4 col-sm-6">
              <a class="portfolio-item" href="http://lapalanquee.com/v2/">
                <div class="portfolio-thumb">
                  <img src="~@/assets/palanquee.png" alt="Aperçu lapalanquee.com">
                </div>
                <div class="portfolio-info">
                  <h3>LaPalanquee.com</h3>
                  <small>Club de plongée</small>
                </div>
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <ul class="fa-ul fa-ul-pen">
                <li><a href="https://github.com/jgrunder/kimsufi-alert">Kimsufi Alert</a>, outil permettant de surveiller la disponibilité des serveurs Kimsufi</li>
                <li><a href="https://github.com/jgrunder/mobro-monitoring-cs">MoBro Monitoring C#</a>, intégration d'un monitoring PC sur bibliothèques Chromium</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Creations'
}
</script>

<style scoped lang="scss">
.portfolio-item {
  position      : relative;
  display       : block;
  margin-bottom : 30px;
  .portfolio-thumb img {
    height    : auto;
    display   : block;
    max-width : 100%;
  }
  .portfolio-info {
    position   : absolute;
    padding    : 15px 15px 5px;
    bottom     : 0;
    width      : 100%;
    z-index    : 1;
    background : -webkit-linear-gradient(
      top,
      transparent 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    h3 {
      margin         : 0;
      line-height    : 1;
      color          : #ffffff;
      font-weight    : 500;
      text-transform : uppercase;
    }
    small {
      color : rgba(255, 255, 255, .5);
    }
  }
  &::after {
    content    : "";
    position   : absolute;
    bottom     : 0;
    top        : 100%;
    left       : 0;
    right      : 0;
    background : -webkit-linear-gradient(
            top,
            transparent 0%,
            #000 100%
    );
    transition : all .2s linear;
  }
  &:hover::after {
    top : 0;
  }
}
</style>
