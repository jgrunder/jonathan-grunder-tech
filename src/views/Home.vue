<template>
  <div id="main-wrapper">
    <PreLoader />
    <Header />
    <Expertise />
    <Skills />
    <Experience />
    <Education />
    <Creations />
    <Other />
    <Contribution />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import PreLoader from '@/components/PreLoader.vue'
import Header from '@/components/Header.vue'
import Expertise from '@/components/Expertise.vue'
import Skills from '@/components/Skills.vue'
import Experience from '@/components/Experience.vue'
import Education from '@/components/Education.vue'
import Creations from '@/components/Creations.vue'
import Other from '@/components/Other.vue'
import Contribution from '@/components/Contribution.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

import jQuery from 'jquery'
import moment from 'moment'

jQuery(function ($) {
  (function () {
    // Immediately invoked function to set the theme on initial load
    if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-light');
      $('#slider').prop('checked', true);
    } else {
      setTheme('theme-dark');
      $('#slider').prop('checked', false);
    }
    // Automatic age calculation
    $('#age').html(moment().diff(moment("1987-04-06"), 'years'));
    // Current experience duration
    let dateDiff = moment.duration(moment().diff(moment("2019-07-01")));
    let dateDiffMonth = '';
    if(dateDiff.months() > 0) { dateDiffMonth = ' et ' + dateDiff.months() + ' mois'; }
    $('#lastExpDuration').html(dateDiff.years() + ' ans' + dateDiffMonth);
    // Modify default ul lists style with Fontawesome4
    $("ul.fa-ul-code").find("li").prepend('<i class="fa-li fa fa-code"></i>');
    $("ul.fa-ul-pen").find("li").prepend('<i class="fa-li fa fa-github"></i>');
    // All external links should open a new tab
    $("a[href^='http']").attr('target', '_blank');
    // Hide contact error div
    $('#errorDiv').hide();
    loadTech();
    // Events
    // Click on theme switcher
    $('#slider').on('click', function() {
      toggleTheme();
    });
    // Send message form
		$("#sendMessage").click(function(e){
			e.preventDefault();
      if(!isFormValid()) return;

      let button = $(this);
			let formData = $('#contactForm').serialize();
      button.html('<i class="fa fa-refresh fa-spin fa-2x fa-fw"></i>');
      button.prop("disabled", true);

			$.ajax({
				type: 'POST',
				url: 'sendemail.php',
				data: formData
			})
			.done(function(callback) {
        button.html('Envoyer');
        button.prop("disabled", false);
				console.log(callback);
				if(callback.response == 'success') {
          $('#errorDiv').hide();
          $('#successDiv').removeClass('hidden');
          $('#contactForm').trigger("reset");
          $('#contactForm').hide();
				}
        else {
          $('#errorDiv').show();
          $('#errorMessage').html(callback.message);
          $('#errorCodes').html(callback.codes);
        }
			})
			.fail(function(callback) {
				$('#errorDiv').show();
				if (callback.responseText !== '') {
					$('#errorMessage').html(callback.responseText);
				} else {
					$('#errorMessage').html('Oops! An error occured and your message could not be sent.');
				}
			});
		});
    // Loading Data
    console.log("AbuseIPDB data loading...");
    $('#aAbuseIP').prepend('<img src="https://www.abuseipdb.com/contributor/40338.svg" id="imgAbuseIpDB">');
    console.log("AbuseIPDB data loaded!");
    // Folding@Home score calculation
    console.log("Folding@Home data loading...");
    $.ajax({
      url: 'https://apps.foldingathome.org/stats.py',
      type: 'GET',
      data: {'user': 'Sipherion', 'team': '250938', 'passkey': '700e0cdf412de3ff700e0cdf412de3ff', 'version': '7.5.1'},
      cache: false,
      dataType: 'jsonp',
      success: dispatch
    });
    function dispatch(data) {
      if (data == null) return;
      $.each(data, function(i, cmd) {
        try {
          // debug('Command: ' + JSON.stringify(cmd));
          var data = cmd[1];
          $('#contribFAH').html('<a href="' + data.url + '" target="_blank">' + number_with_spaces(data.earned) + '</a>');
          $('#teamFAH').html('<a href="' + data.team_url + '" target="_blank">' + data.team_name + '</a>');
          $('#contribTeamFAH').html(number_with_spaces(data.team_total));
          console.log("Folding@Home data loaded!");
        } catch (err) {
          console.log("Folding@Home data error!");
          debug('Command "' + cmd + '": ' + err);
        }
      });
    }
    /**
     * Log into console a debug message
     * @param  {mix} msg Message to show
     * @return {void}
     */
    function debug(msg) {
      if (typeof console == 'undefined' || typeof console.log == 'undefined') return;
      if (typeof msg !== 'string' && typeof JSON !== 'undefined') msg = JSON.stringify(msg);
      console.log('DEBUG: ' + msg);
    }
  }());

  /**
   * French number format
   * @param  {integer} x The number to transform
   * @return {string}    The transformed number
   */
  function number_with_spaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }
  /**
   * Load all tech skills
   * TODO: use VueJS template
   * @return {void}
   */
  function loadTech() {
    $.getJSON("experience.json", function( data ) {
      var languages = data.languages;
      var tools = data.tools;
      var oldestLanguage = moment().diff(moment('2012-06-01'), 'years');
      var oldestTool = moment().diff(moment('2013-09-01'), 'years');
      $.each( languages, function( key, val ) {
        var years = getYears(val.start_date);
        var percent = Math.round(years / oldestLanguage * 100);
        $('#tech_languages').append('<div class="progress-item"><span class="progress-title">' + val.name_fr + '</span><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="' + years + '" aria-valuemin="0" aria-valuemax="' + oldestLanguage + '" style="width: ' + percent + '%"><span class="progress-percent">' + years + '</span></div></div></div>');
      });
      $.each( tools, function( key, val ) {
        var years = getYears(val.start_date);
        var percent = Math.round(years / oldestTool * 100);
        $('#tech_tools').append('<div class="progress-item"><span class="progress-title">' + val.name_fr + '</span><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="' + years + '" aria-valuemin="0" aria-valuemax="' + oldestTool + '" style="width: ' + percent + '%"><span class="progress-percent">' + years + '</span></div></div></div>');
      });
    });
  }
  /**
   * Get years for a date interval
   * @param  {mixed} val The start date
   * @return {integer}   Number of years
   */
  function getYears(val) {
    if($.isNumeric(val)) return val;
    var years = moment().diff(moment(val), 'years');
    if(years > 0) return years;
    return 1;
  }
  /**
   * Check if the contact form is valid with all required data
   * @return {Boolean} [description]
   */
  function isFormValid() {
    let isValid = true;
    // Check that all required fields are filled
    $('.required').each(function() {
      var input = $(this);
      var value = input.val();
      if(value == "") {
        isValid = false;
        input.css('border-color', '#a94442');
        input.next('p').removeClass("hidden");
      }
    });
    // Check that email is correct format
    if(!isEmail($('#InputEmail').val())) {
      isValid = false;
      $('#InputEmail').next('p').removeClass("hidden");
    }
    // Check that reCaptcha is valid
    if(window.grecaptcha.getResponse() == '') {
      isValid = true;
      $('.missing-data-recaptcha').removeClass("hidden");
    }
    return isValid;
  }
  /**
   * Check if the specified string is a valid email format
   * @param  {string}  email The string to check
   * @return {Boolean}
   */
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  /**
   * Function to toggle between light and dark theme
   * @return {Void}
   */
  function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
    } else {
      setTheme('theme-dark');
    }
  }
  /**
   * Function to set a given theme/color-scheme
   * @param {string} themeName The theme name to apply
   */
  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    switch (themeName) {
      case 'theme-dark':
        $('body').addClass('dark-mode');
        break;
      case 'theme-light':
        $('body').removeClass('dark-mode');
        break;
    }
  }
});

export default {
  name: 'Home',
  components: {
    PreLoader,
    Header,
    Expertise,
    Skills,
    Experience,
    Education,
    Creations,
    Other,
    Contribution,
    Contact,
    Footer
  }
}
</script>

<style lang="scss">
$text-color: #989898;
$background: #f8f8f8;
$link-color: #ff5722;
body {
  font-family : 'Hind', sans-serif;
  font-size   : 15px;
  line-height : 1.8em;
  color       : $text-color;
  font-weight : 300;
  background  : $background;
}
h1, h2, h3, h4, h5, h6 {
  margin : 0 0 15px;
  color  : #444444;
}
h1 {
  font-size   : 36px;
  line-height : 1.8em;
  font-weight : 700;
}
h2 {
  font-size   : 18px;
  line-height : 1.8em;
  font-weight : 700;
}
h3 {
  font-size   : 13px;
  line-height : 1.8em;
  font-weight : 700;
}
h4 {
  font-size   : 15px;
  line-height : 1.8em;
  font-weight : 500;
}
h5 {
  font-size   : 15px;
  line-height : 1.5em;
  font-weight : 500;
}
h6 {
  font-size   : 15px;
  line-height : 1.5em;
}
a {
  color              : $link-color;
  text-decoration    : none;
  -webkit-transition : all 0.3s ease 0s;
  -moz-transition    : all 0.3s ease 0s;
  -o-transition      : all 0.3s ease 0s;
  transition         : all 0.3s ease 0s;
  outline         : none;
  &:active {
    outline       : none;
  }
  &:hover, &:focus {
    text-decoration : none;
    color           : $link-color;
  }
}
p {
  margin-bottom : 20px;
}
strong {
  color : #444444;
}
ul {
  margin     : 0;
  padding    : 0;
}
.col-md-3.borders {
  border-top: solid 7px;
  border-color: #ff5722;
}
.col-md-9.borders {
  border-top: solid 2px;
  border-color: #ff5722;
  padding-top: 6px;
}
/*-------------------
 * Section Wrapper
 *-------------------*/
.section-wrapper {
  padding : 50px 0;
}
@media (max-width : 768px) {
  .section-wrapper {
    padding : 20px 0;
  }
}
@media (max-width : 600px) {
  .section-wrapper {
    padding : 20px;
  }
}
/*---------------------------
 * Section Title
 *---------------------------*/
.section-title {
  margin-right : 30px;
  text-align   : right;
  h2 {
    font-size      : 14px;
    margin-bottom  : 5px;
    color          : #bbbbbb;
    text-transform : uppercase;
    }
}
@media (max-width: 768px) {
  .section-title {
    text-align: left;
    h2 {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
}
/*-------------------
 * Content Item
 *-------------------*/
.content-item {
  margin-bottom : 40px;
  h3 {
    margin         : 0 0 10px;
    line-height    : 1;
    font-weight    : bold;
    text-transform : uppercase;
  }
  h4 {
    margin      : 0;
    line-height : 1;
  }
  small {
    color : #888888;
  }
}
/*------------------
 * Button Style
 *------------------*/
.btn {
  padding        : 14px 30px 11px;
  margin-bottom  : 0;
  font-size      : 14px;
  font-weight    : 500;
  border-radius  : 0;
  border         : 0;
  text-transform : uppercase;
  transition     : all .3s;
  &:focus, &:active:focus {
    outline : none;
  }
  &-lg {
    font-weight : 700;
    font-size   : 24px;
    padding     : 15px 30px;
  }
  &-primary {
    background-color : #ff5722;
    &:hover, &:focus, &:active:focus {
      background : #de4718;
    }
  }
  &-default {
    color            : #2a54f5;
    background-color : transparent;
    border           : 2px solid #2a54f5;
    &:hover, &:focus, &:active:focus {
      background   : #2a54f5;
      color        : #ffffff;
      border-color : #2a54f5;
    }
  }
}
/*------------------
 * Dark Mode
 *------------------*/
body.dark-mode {
  color       : rgb(178, 174, 167);
  background  : rgb(26, 28, 29);

  h1, h2, h3, h4, h5, h6 {
    color       : rgb(208, 204, 197);
  }

  .header .personal-details strong {
    color: rgb(208, 204, 197);
  }

  .social-icon li a {
    color: rgb(208, 204, 197);
  }

  img {
    background-color: rgb(208, 204, 197);
  }

  .timeline {
    &:before {
      background-color: #eee;
    }
    & > li {
      & > .timeline-badge {
        color: #ddd;
      }
    }
  }
}


</style>
