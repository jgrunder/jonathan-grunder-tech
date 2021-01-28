<template>
  <section class="section-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-3 borders">
          <div class="section-title">
            <h2>Expérience professionnelle</h2>
          </div>
        </div>
        <div class="col-md-9 borders">
          <div class="row">
            <ul class="timeline">
              <li class="timeline-inverted">
                <div class="timeline-badge primary">
                  <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                  <span class="cat-year">{{ lastExpYear }}</span>
                  <span class="cat-year sub">2019</span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <a href="https://france.comdatagroup.com/fr">
                      <div>
                        <img class="img-responsive" src="~@/assets/comdata.png" />
                        <div class="job-desc">
                          <small>{{ lastExpDate.format("MMMM YYYY") }} à aujourd'hui ({{ lastExpDuration }})</small>
                          <h3>TECHNICIEN INFORMATIQUE</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="timeline-body">
                    <ul class="fa-ul fa-ul-code">
                      <li>Répondre aux appels, e-mails et <span>tickets d’assistance</span>, aider les employés et les clients finaux à résoudre leurs problèmes informatiques –
                        <a href="https://glpi-project.org/fr/"><span>GLPI</span></a>,
                        <a href="https://otrs.com/"><span>OTRS</span></a>
                      </li>
                      <li>Développer et implémenter des <span>applications</span> Internet et Intranet sur plusieurs plates-formes (<span>IIS</span> et <span>Apache</span>) et assurer leur <span>maintenance</span> et leur <span>amélioration</span> régulières -
                        <a href="https://www.php.net/"><span>PHP7</span></a>,
                        <a href="https://www.w3schools.com/css/"><span>CSS3</span></a>,
                        <a href="https://www.w3schools.com/html/"><span>HTML5</span></a>,
                        <a href="https://jquery.com/"><span>JQuery</span></a>,
                        <a href="https://vuejs.org/"><span>Vue.js</span></a>,
                        <a href="https://nodejs.org/en/"><span>Node.js</span></a>,
                        <a href="https://laravel.com/"><span>Laravel</span></a> sous
                        <a href="https://www.eclipse.org/"><span>Eclipse</span></a>
                      </li>
                      <li>Gérer un domaine <span>Active Directory</span>, contrôler et sécuriser le matériel et les logiciels grâce à des déploiements de <span>GPO</span>.</li>
                      <li>Assurer la <span>disponibilité</span> et <span>l’intégrité</span> du réseau, des systèmes et des données – Administration
                        <span>WSUS</span>,
                        <span>Windows Server</span>,
                        <span>SQL Server</span>,
                        <span>Debian</span>
                      </li>
                      <li>Gérer la <span>sécurité</span>, surveillance du <span>réseau</span> et des serveurs sur site et hors site -
                        <a href="https://www.zabbix.com/"><span>ZABBIX</span></a>,
                        <a href="https://www.realvnc.com/fr/connect/download/viewer/"><span>VNC</span></a> et
                        <a href="https://www.teamviewer.com/fr/"><span>TeamViewer</span></a>,
                        <a href="https://www.kaspersky.fr/enterprise-security"><span>Kaspersky</span></a>
                      </li>
                      <li>Développer des <span>applications</span> en <span>VB.NET</span> et mettre en place un système de déploiement et de mise à jour contrôlées via un <span>dépôt collaboratif</span> avec
                        <a href="https://git-scm.com/"><span>Git</span></a>
                      </li>
                      <li><span>Virtualiser</span> un parc informatique et maintenir les Masters sous
                        <a href="https://www.vmware.com/fr/products/vsphere.html"><span>VMWare</span></a>
                      </li>
                      <li>Connaissance des systèmes <span>VoIP</span> –
                        <a href="https://www.avaya.com/fr/produits/contact-center/"><span>Avaya</span></a> (admin),
                        <a href="https://www.xivo.solutions/xivo-grande-entreprise/"><span>XiVO/Wazo</span></a>
                      </li>
                      <li>Intégrer des ordinateurs <span>Windows 10</span> et leurs équipements au <span>réseau</span> d’entreprise et <span>VoIP</span>, déploiement d’applications à l’aide de <span>KSC</span>.</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-badge primary">
                  <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                  <span class="cat-year">2019</span>
                  <span class="cat-year sub">2013</span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <a href="https://www.boschservicesolutions.com/fr/">
                      <div>
                        <img class="img-responsive" src="~@/assets/bosch.png" />
                        <div class="job-desc">
                          <small>septembre 2013 à juin 2019 <span>(5 ans et 9 mois)</span></small>
                          <h3>TECHNICIEN INFORMATIQUE</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="timeline-body">
                    <ul class="fa-ul fa-ul-code">
                      <li>Répondre aux appels, e-mails et <span>tickets d’assistance</span>, aider les employés et les clients finaux à résoudre leurs problèmes informatiques –
                        <a href="https://www.bmc.com/it-solutions/remedy-itsm.html"><span>Remedy SMT</span></a>,
                        <a href="https://otrs.com/"><span>OTRS</span></a>
                      </li>
                      <li>Développer et implémenter des <span>applications</span> Internet et Intranet sur plusieurs plates-formes (<span>IIS</span> et <span>Apache</span>) et assurer leur <span>maintenance</span> et leur <span>amélioration</span> régulières -
                        <a href="https://www.php.net/"><span>PHP7</span></a>,
                        <a href="https://www.w3schools.com/css/"><span>CSS3</span></a>,
                        <a href="https://www.w3schools.com/html/"><span>HTML5</span></a>,
                        <a href="https://jquery.com/"><span>JQuery</span></a>,
                        <a href="https://laravel.com/"><span>Laravel</span></a> sous
                        <a href="https://www.eclipse.org/"><span>Eclipse</span></a>
                      </li>
                      <li>Gérer un domaine <span>Active Directory</span>, contrôler et sécuriser le matériel et les logiciels grâce à des déploiements de <span>GPO</span>.</li>
                      <li>Assurer la <span>disponibilité</span> et <span>l’intégrité</span> du réseau, des systèmes et des données – Administration
                        <span>WSUS</span>,
                        <span>Windows Server</span>,
                        <span>SQL Server</span>,
                        <span>Debian</span>
                      </li>
                      <li>Gérer la <span>sécurité</span>, surveillance du <span>réseau</span> et des serveurs sur site et hors site -
                        <a href="https://www.fr.paessler.com/prtg"><span>PRTG</span></a>,
                        <a href="https://www.realvnc.com/fr/connect/download/viewer/"><span>VNC</span></a> et
                        <a href="https://www.teamviewer.com/fr/"><span>TeamViewer</span></a>,
                        <a href="https://www.broadcom.com/products/cyber-security/endpoint"><span>Symantec</span></a>
                      </li>
                      <li>Développer des <span>applications</span> en <span>VB.NET</span> et mettre en place un système de déploiement et de mise à jour contrôlées via un <span>dépôt collaboratif</span> avec
                        <a href="https://git-scm.com/"><span>Git</span></a> et
                        <a href="https://subversion.apache.org/"><span>Subversion</span></a>
                      </li>
                      <li><span>Virtualiser</span> un parc informatique et maintenir les Masters sous
                        <a href="https://www.citrix.com/fr-fr/products/citrix-virtual-apps-and-desktops/"><span>Citrix</span></a> et
                        <a href="https://www.vmware.com/fr/products/vsphere.html"><span>VMWare</span></a>
                      </li>
                      <li>Concevoir des <span>rapports statistiques</span> sous
                        <a href="https://www.genesys.com/collateral/genesys-interactive-insights"><span>Interactive Insights</span></a> depuis un entrepôt de données
                      </li>
                      <li>Connaissance des systèmes <span>VoIP</span> –
                        <a href="https://www.genesys.com/fr-fr/solutions/customer-service"><span>Genesys</span></a> et
                        <a href="https://www.avaya.com/fr/produits/contact-center/"><span>Avaya</span></a> (admin)
                      </li>
                      <li>Intégrer des ordinateurs <span>Windows 10</span> et leurs équipements au <span>réseau</span> d’entreprise et <span>VoIP</span>, déploiement d’applications à l’aide de <span>KSC</span>.</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-badge primary">
                  <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                  <span class="cat-year">2013</span>
                  <span class="cat-year sub">2010</span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <a href="https://www.boschservicesolutions.com/fr/">
                      <div>
                        <img class="img-responsive" src="~@/assets/bosch.png" />
                        <div class="job-desc">
                          <small>avril 2010 à septembre 2013 <span>(3 ans et 5 mois)</span></small>
                          <h3>MANAGER DE PROXIMITÉ</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="timeline-body">
                    <ul class="fa-ul fa-ul-code">
                      <li>Traiter les <span>problèmes relationnels</span> avec les clients de manière professionnelle et conformément à la <span>politique de l’entreprise</span></li>
                      <li><span>Gérer</span> une équipe de douze agents et organiser la moitié d’entre eux en postes <span>3/8 24/7</span></li>
                      <li><span>Assurer</span> en moyenne 10 appels par jour transférés par les collaborateurs afin de <span>garantir</span> une réponse adaptée à la requête complexe du client</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-badge primary">
                  <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                  <span class="cat-year">2010</span>
                  <span class="cat-year sub">2008</span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <a href="https://www.boschservicesolutions.com/fr/">
                      <div>
                        <img class="img-responsive" src="~@/assets/bosch.png" />
                        <div class="job-desc">
                          <small>avril 2008 à avril 2010 <span>(2 ans)</span></small>
                          <h3>TÉLÉCONSEILLER TECHNIQUE</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="timeline-body">
                    <ul class="fa-ul fa-ul-code">
                      <li><span>Assistance technique</span> aux utilisateurs de <span>premier</span> et <span>second</span> niveau</li>
                      <li><span>Autodidacte</span> des <span>nouvelles technologies</span> pour faciliter les tâches quotidiennes</li>
                      <li>Travail de nuit et le Week-end <span>24/7</span> aux <span>3/8</span></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-badge primary">
                  <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                  <span class="cat-year">2007</span>
                  <span class="cat-year sub">2005</span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <a href="https://www.cetelem.fr/fr/qui-sommes-nous">
                      <div>
                        <img class="img-responsive" src="~@/assets/cetelem.png" />
                        <div class="job-desc">
                          <small>de 2005 à 2007, auxiliaire vacances <span>(9 mois)</span></small>
                          <h3>AGENT DE RECOUVREMENT</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="timeline-body">
                    <ul class="fa-ul fa-ul-code">
                      <li><span>Négociations</span> téléphoniques avec les débiteurs</li>
                      <li>Mise en place de <span>solutions adaptées</span> à la nouvelle situation du client</li>
                      <li>Participation aux réunions quotidiennes, <span>compte rendu</span> des résultats</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="clearfix"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
moment.locale('fr')
export default {
  name: 'Experience',
  data() {
    return {
      lastExpDate: moment("2019-07-01")
    }
  },
  computed: {
    lastExpDuration() {
      let dateDiff = moment.duration(moment().diff(this.lastExpDate))
      let dateDiffMonth = ''
      if(dateDiff.months() > 0) { dateDiffMonth = ' et ' + dateDiff.months() + ' mois'; }
      return dateDiff.years() + ' ans' + dateDiffMonth
    },
    lastExpYear() {
      return moment().year()
    }
  }
}
</script>

<style scoped lang="scss">
.showDetails {
  cursor: pointer;
  border-bottom: 1px dotted #777;
  &:after {
    font-family: "FontAwesome"; content: " \f078";
    font-size: 0.7em;
    font-weight: 200;
  }
  &.collapsed:after {
    font-family: "FontAwesome"; content: " \f054";
    font-size: 0.7em;
    font-weight: 200;
  }
}
li > span {
  color: #ff5722;
  font-weight: 400;
}
li > a::after {
  font-family: "FontAwesome"; content: " \f08e";
  font-size: 0.7em;
}
.job-desc {
  position:absolute;
  margin-top: -90px;
  left: 10px;
  background-color: rgba(40,40,40,0.5);
  padding: 10px 10px 0 10px;
  small {
    color: #d0ccc5;
  }
  h3 {
    color: #d0ccc5 !important;
  }
}
/**
 * Timeline
 */
.cat-year {
  position: absolute;
  left: -80px;
  color: rgba(180, 180, 180, 0.4);
  font: italic 1.5em fantasy;
  text-shadow: 5px 0 10px rgba(180, 180, 180, 0.5);
  &.sub {
    top: 50px;
    font-size: 0.9em;
    text-shadow: 2px 0 10px rgba(120, 120, 120, 0.7);
  }
}
.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
  &:before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 3px;
    background-color: #ccc;
    left: 10%;
    margin-left: -1.5px;
  }
  & > li {
    margin-bottom: 20px;
    position: relative;
    width: 90%;
    float: left;
    clear: left;
    &:before, &:after {
      content: " ";
      display: table;
    }
    &:after {
      clear: both;
    }
    & > .timeline-panel {
      width: 95%;
      float: left;
      border: 1px solid #d4d4d4;
      /*border-radius: 2px;*/
      /*padding: 20px;*/
      position: relative;
      -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
      &:before {
        position: absolute;
        top: 26px;
        right: -15px;
        display: inline-block;
        border-top: 15px solid transparent;
        border-left: 15px solid #ccc;
        border-right: 0 solid #ccc;
        border-bottom: 15px solid transparent;
        content: " ";
      }
      &:after {
        position: absolute;
        top: 27px;
        right: -14px;
        display: inline-block;
        border-top: 14px solid transparent;
        border-left: 14px solid #fff;
        border-right: 0 solid #fff;
        border-bottom: 14px solid transparent;
        content: " ";
      }
    }
    & > .timeline-badge {
      color: #aaa;
      width: 24px;
      height: 24px;
      line-height: 50px;
      font-size: 1.4em;
      text-align: center;
      position: absolute;
      top: 16px;
      right: -12px;
      z-index: 100;
    }
    &.timeline-inverted > .timeline-panel {
      float: right;
      &:before {
        border-left-width: 0;
        border-right-width: 15px;
        left: -15px;
        right: auto;
      }
      &:after {
        border-left-width: 0;
        border-right-width: 14px;
        left: -14px;
        right: auto;
      }
    }
    &.timeline-inverted {
      float: right;
      clear: right;
      margin-top: 30px;
      margin-bottom: 30px;
      & > .timeline-badge {
        left: -12px;
      }
    }
    &:nth-child(2) {
      margin-top: 60px;
    }
  }
  &-badge > a {
    color: #C5C7C5 !important;
  }
  &-badge a:hover {
    color: #000 !important;
  }
  &-title {
    margin-top: 0;
    color: inherit;
  }
  &-body > p, &-body > ul {
    padding:20px;
    margin-bottom: 0;
  }
  &-body > p + p {
    margin-top: 5px;
  }
&-footer {
    padding:20px;
    background-color:#f4f4f4;
    & > a {
      cursor: pointer;
      text-decoration: none;
    }
  }
}
.clearfix {
  float: none !important;
  width: 10% !important;
}
@media (max-width: 767px) {
  ul.timeline {
    &:before {
      left: 40px;
    }
    & > li {
      margin-bottom: 20px;
      position: relative;
      width:100%;
      float: left;
      clear: left;
      & > .timeline-panel {
        width: calc(100% - 90px);
        width: -moz-calc(100% - 90px);
        width: -webkit-calc(100% - 90px);
        float: right;
        &:before {
          border-left-width: 0;
          border-right-width: 15px;
          left: -15px;
          right: auto;
        }
        &:after {
          border-left-width: 0;
          border-right-width: 14px;
          left: -14px;
          right: auto;
        }
      }
      & > .timeline-badge {
        left: 28px;
        margin-left: 0;
        top: 16px;
      }
      &.timeline-inverted {
        float: left;
        clear: left;
        margin-top: 30px;
        margin-bottom: 30px;
        & > .timeline-badge{
          left: 28px;
        }
      }
    }
  }
}
</style>
