<template>
  <header class="header">
    <div class="container">
      <Switcher />
      <a href="./Jonathan-GRUNDER-CV-FRENCH.pdf" class="toPdf"><img src="~@/assets/download-pdf.png" alt="Download as PDF"/></a>
      <div class="row">
        <div id="div-profile" class="col-md-3">
          <div class="profile-img">
            <img src="~@/assets/img-profile.jpg" class="img-responsive" alt=""/>
          </div>
          <blockquote class="blockquote text-left">
            <p class="mb-0">Il vaut mieux savoir tout chercher que chercher à tout savoir</p>
            <footer class="blockquote-footer">P. Mendelson</footer>
          </blockquote>
        </div>
        <div class="col-md-9">
          <div class="name-wrapper">
            <h1 class="name">Jonathan GRUNDER</h1>
            <span>Technicien Helpdesk ~ Développeur Full-stack</span>
          </div>
          <p>
            Développeur expérimenté dans l'environnement HelpDesk omnicanal, j'ai acquis une certaine expertise
            dans l'étude et le développement de solutions informatiques multiplateforme. Acteur sur des projets
            internationaux, j'échange au quotidien en anglais avec les équipes centrales et je participe activement
            à l'étude et la mise en place de solutions, autant pour nos clients que pour nos collaborateurs. Doté d'un
            bon esprit d'analyse et d'un idéal de perfection, je cherche toujours à approfondir mes connaissances
            en autonomie et à apporter des réponses adaptées à toutes les situations, même inattendues, de nos missions.
          </p>
          <div class="row personal-data">
            <div class="col-md-4 col-lg-3">
              <div class="personal-details">
                <strong>6 AVRIL 1987</strong>
                <small><span id="age"></span>&nbsp;ANS</small>
              </div>
            </div>
            <div class="col-md-4 col-lg-3">
              <div class="personal-details">
                <strong>SAINT-AVOLD</strong>
                <small>FRANCE</small>
              </div>
            </div>
            <div class="col-md-4 col-lg-3">
              <div class="personal-details">
                <strong>PERMIS B</strong>
                <small>MOBILE</small>
              </div>
            </div>
          </div>
          <ul class="social-icon">
            <li><a href="https://www.linkedin.com/in/jonathan-grunder-bab717b6/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            <li><a href="https://github.com/jgrunder"><i class="fa fa-github" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Switcher from '@/components/Switcher.vue'
export default {
  name: 'Header',
  components: {
    Switcher
  }
}
</script>

<style scoped lang="scss">
.header {
  padding    : 50px 0;
  margin     : 0;
  position   : relative;
  border-top : 5px solid #ff5722;
  .profile-img {
    margin-right : 30px;
    overflow:hidden;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    border-radius:50%;
    width:100%;
    max-width: 260px;
    height:auto;
  }
  .name-wrapper {
    margin-bottom : 30px;
    h1 {
      text-transform : uppercase;
      line-height    : 1;
      margin         : 0 0 5px;
    }
    span {
      font-size : 24px;
      color     : #ff5722;
    }
  }
  .personal-details {
    margin : 10px 0;
    strong {
      font-size   : 13px;
      color       : #444444;
      display     : block;
      line-height : 1;
    }
    small {
      font-size : 12px;
    }
    span {
      color : #989898;
    }
  }
}
@media (max-width : 768px) {
  .header {
    padding    : 20px 0;
    .profile-img {
      margin: 0 0 30px;
    }
  }
}
@media (max-width : 600px){
  .header {
    padding: 20px;
  }
}
/* To PDF button */
.toPdf {
  position: fixed;
  top: 80px;
  right: 10px;
  img {
    width: 80px;
    height: 56px;
  }
}
/*-------------------
 * Social Icon
 *-------------------*/
.social-icon {
  margin  : 20px 0;
  padding : 0;
  display : block;
  li {
    display : inline-block;
    margin  : 0 2px;
    a {
      display       : block;
      font-size     : 12px;
      color         : #333333;
      width         : 34px;
      height        : 34px;
      line-height   : 33px;
      text-align    : center;
      border-radius : 2px;
      border        : 2px solid #eeeeee;
      &:hover {
        border-color : #ff5722;
      }
    }
  }
}
</style>
