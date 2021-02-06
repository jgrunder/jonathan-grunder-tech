<template>
  <section class="section-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="section-title">
            <h2>Contributions</h2>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row include">
            <div class="col-md-4">
              <div class="content-item">
                <a id="aAbuseIP" href="https://www.abuseipdb.com/user/40338" title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks" alt="AbuseIPDB Contributor Badge"></a>
              </div>
            </div>
            <div class="col-md-8">
              <div class="content-item">
                <p id="pFAH">
                  <img src="~@/assets/FAH-original.png" style="width: 150px; float: left">
                  <strong>Contribution totale</strong> : <span id="contribFAH">0</span><br/>
                  <strong>Team support</strong> : <span id="teamFAH"></span><br/>
                  <strong>Team points</strong> : <span id="contribTeamFAH">0</span>
                </p>
              </div>
            </div>
          </div>
          <div class="row include">
            <div class="col-md-4">
              <div class="content-item">
                <a href="https://www.signal-spam.fr/membres-de-lassociation/internautes/">
                  <img src="~@/assets/spam.png">
                </a>
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
  name: 'Contribution'
}
</script>

<style scoped lang="scss">
.content-item {
  padding: 10px;
  margin-bottom: 0;
}
.include {
  background-color: #d0ccc5;
  color: #444;
}
</style>
