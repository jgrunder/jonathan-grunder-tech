<template>
  <section class="section-wrapper skills-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-3 borders">
          <div class="section-title">
            <h2>Technologies</h2>
            <p class="mb-0">En années d'expérience</p>
          </div>
        </div>
        <div class="col-md-9 borders">
          <div class="row">
            <div class="col-md-6">
              <div class="progress-wrapper" id="tech_languages">
                <h3>LANGAGES</h3>
              </div>
            </div>
            <div class="col-md-6">
              <div class="progress-wrapper" id="tech_tools">
                <h3>OUTILS</h3>
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
  name: 'Skills'
}
</script>

<style lang="scss">
.progress-item {
  position : relative;
  .progress-title {
    font-size     : 12px;
    font-weight   : 400;
    display       : inline-block;
    margin-bottom : 5px;
  }
  .progress {
    height        : 2px;
    box-shadow    : none;
    border-radius : 0;
    background    : transparent;
  }
  .progress-bar {
    background-color : #ff5722;
    box-shadow       : none;
    text-align       : right;
  }
  .progress-percent {
    font-size        : 10px;
    background-color : #313131;
    position         : absolute;
    top              : 5px;
    padding          : 0 8px;
    border-radius    : 3px;
    &::before {
      content      : "";
      position     : absolute;
      left         : 0;
      bottom       : -4px;
      border-top   : 6px solid #313131;
      border-right : 8px solid transparent;
    }
  }
}
@media (max-width: 768px) {
  .progress-wrapper{
      margin-bottom: 50px;
    }
  }
</style>
