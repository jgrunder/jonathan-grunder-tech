<template>
  <section class="section-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-3 borders">
          <div class="section-title">
            <h2>Compétences</h2>
          </div>
        </div>
        <div class="col-md-9 borders">
          <div class="row">
            <div class="col-md-6">
              <div class="expertise-item">
                <h3>Autonome et autodidacte</h3>
                <p>
                  Définir un plan de travail, faire preuve de curiosité et anticiper les besoins.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="expertise-item">
                <h3>Rigoureux et idéaliste</h3>
                <p>
                  Travailler sur l'essentiel avec précision et faire preuve de persévérance sur les obstacles du quotidien.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="expertise-item">
                <h3>Esprit d'équipe</h3>
                <p>
                  Travailler avec plusieurs têtes brûlées et collaborer avec les différents services pour redorer l’image IT.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="expertise-item">
                <h3>Polyvalent</h3>
                <p>
                  Ne pas se limiter à une vision unidirectionnelle et faire part de conseils et suggestions sur les projets et méthodologies de travail.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="expertise-item">
                <h3>Googlage heuristique</h3>
                <p>
                  Discuter ouvertement avec Google et trouver au moins deux solutions à un problème.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="expertise-item">
                <h3>Veille technologique</h3>
                <p>
                  0 0 * * * apt update >> knowledge.db
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Expertise'
}
</script>

<style scoped lang="scss">
/*-------------------
* Expertise
*-------------------*/
.expertise-item {
  margin-bottom : 20px;
  h3 {
    text-transform : uppercase;
    margin-bottom  : 5px;
  }
}
</style>
