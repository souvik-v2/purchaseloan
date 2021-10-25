<template>
  <div class="v2 bullseyeV2 top-pad60 darkgray">
    <div class="container-v2">
      <!-- begin single wide column -->
      <div class="flexRow fullwidth">
        <div class="flexCol col-span-12">
          <h1 class="h1 fullWidth text-center full">
            Personal Loans for 2021<br />Compare Rates and Offers From Top
            Lenders
          </h1>
        </div>
      </div>
      <!-- end header -->
      <!-- begin double column center width -->
      <form @submit.prevent="onSubmit()">
        <div class="flexRow center fullwidth">
          <div class="flexCol col-span-3-2 center">
            <div
              class="custom-select add-float-labels nomargin marginMobile active-float-labels"
            >
              <select name="loan-purpose" id="loan-purpose" v-model="LoanPurpose" required>
                <option value="" disabled="" selected="" hidden=""></option>
                <option value="DEBTCONSOLIDATION">Debt Consolidation</option>
                <option value="CCREFI">Credit Card Consolidation</option>
                <option value="HOMEIMP">Home Improvement</option>
                <option value="HOMEBUYING">Home Buying</option>
                <option value="MAJORPURCHASE">Major Purchase</option>
                <option value="CARFINANCING">Car Financing</option>
                <option value="BUSINESS">Business</option>
                <option value="MOVING">Moving and Relocation</option>
                <option value="MEDICAL">Medical Expenses</option>
                <option value="OTHER">Other</option>
              </select>
              <label for="loan-purpose">Loan Purpose</label>
            </div>
          </div>
          <div class="flexCol col-span-3-2 center">
            <button class="btn btn-orange full-width" @click="this.$router.push('/1')">
              See Personalized Rates
            </button>
            <div class="handwrittenCallOut">
              <div class="calloutWrapper singleRowMobile">
                <span class="desktopArrow"></span>
                <span class="mobileArrow"></span>
                <span> Only takes a couple minutes</span>
              </div>
            </div>
          </div>
          <div class="flexCol col-span-6 nested handwrittenCallOut singleRow">
            <div class="calloutWrapper singleRowDisplay">
              <span class="desktopArrow"></span>
              <span class="mobileArrow"></span>
              <span> Only takes a couple minutes</span>
            </div>
          </div>

          <input id="splitterid" name="id" type="hidden" value="wp-personal" />
        </div>
      </form>
      <div class="flexCol col-span-12"></div>
    </div>
    <div class="bullseye-bottom-border none top-marg60 disclosureV2 fs-12">
      <span class="lt4-Lock" aria-hidden="true">&nbsp;</span>Privacy
      Secured&nbsp;&nbsp;|&nbsp;&nbsp;<a
        class="disclosures-link white"
        id="promodisclosure"
        rel="nofollow"
        href="javascript:void(0)"
        >Advertising Disclosures</a
      >
    </div>
    <div class="bullseye-bottom-border none">&nbsp;</div>
  </div>
</template>

<script>
export default {
    name: 'Screen0',
    methods: {
        onSubmit() {
            console.log('i am here')
        }
    },
    computed: {
        LoanPurpose: {
            get() {
                return this.$store.state.LoanPurpose;
            },
            set(value) {
                this.$store.commit('setLoanPurpose', {LoanPurpose: value});
                //this.$router.push('/1');
            }
        }
    }
};
</script>

<style>
.handwrittenCallOut {
    font-family: "Caveat",sans-serif !important;
    font-size: 26px;
    color: #2187c1;
    font-weight: 400;
    position: relative;
}
.calloutWrapper span {
    font-style: italic;
}
</style>
