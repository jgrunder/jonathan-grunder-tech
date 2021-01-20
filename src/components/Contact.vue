<template>
  <section class="section-wrapper section-contact">
    <div class="container">
      <div class="row">
        <div class="col-md-3 borders">
          <div class="section-title">
            <h2>Contact</h2>
          </div>
        </div>
        <div class="col-md-9 borders">
          <div class="feedback-form">
            <h3>ENVOYEZ-MOI UN MESSAGE</h3>
            <form id="contactForm">
              <div class="form-group">
                <input type="text" name="name" class="form-control required" id="InputName" placeholder="Votre nom" />
                <p class="missing-data text-danger hidden">Comment puis-je savoir qui vous êtes ?</p>
              </div>
              <div class="form-group">
                <input type="email" name="email" class="form-control required" id="InputEmail" placeholder="Votre adresse courriel" />
                <p class="missing-data text-danger hidden">Comment puis-je vous recontacter sans adresse courriel ?</p>
              </div>
              <div class="form-group">
                <textarea class="form-control required" rows="4" name="message" id="message-text" placeholder="Votre message"></textarea>
                <p class="missing-data text-danger hidden">Une prise de contact sans message ? Vraiment ?</p>
              </div>
              <vue-recaptcha sitekey="6Lf9O-IUAAAAACeYvU95LTlYaUNuHFhnvv_9TXh3" :loadRecaptchaScript="true" :class="'form-group'"></vue-recaptcha>
              <p class="missing-data missing-data-recaptcha text-danger hidden">Ne me dites pas que vous êtes un bot ? Quelle déception :(</p>
              <button type="submit" class="btn btn-primary" id="sendMessage">Envoyer</button>
            </form>
          </div>
          <div id="errorDiv" class="bg-danger text-danger">
            <p>
              Une erreur est survenue et votre message n'a pas été envoyé !<br/>
              <span id="errorMessage"></span><br/>
              <span id="errorCodes"></span>
            </p>
          </div>
          <div id="successDiv" class="bg-success text-success hidden">
            <span class="confirm-email"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;Votre message a bien été envoyé. Merci !</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
export default {
  name: 'Contact',
  components: {
    VueRecaptcha
  }
}
</script>

<style scoped lang="scss">
textarea {
  line-height: normal !important;
  padding: 10px;
  height: auto !important;
}
.section-contact address strong {
  font-size      : 13px;
  text-transform : uppercase;
}
.feedback-form {
  margin-top : 2px;
}
.form-group label {
  font-weight : normal;
  font-size   : 13px;
}
.form-control {
  height        : 46px;
  line-height   : 46px;
  padding       : 0 15px;
  color         : #969595;
  border-color  : #f8f8f8;
  border-radius : 0;
  box-shadow    : none;
  box-sizing    : border-box;
  background    : #eeeeee;
  &:focus, &:active {
    box-shadow   : none;
    background   : #ffffff;
    border-color : #ff5722;
  }
}
#successDiv, #errorDiv {
  padding: 20px 10px;
}
#contactForm textarea {
  line-height: normal;
  padding: 10px;
}
</style>
