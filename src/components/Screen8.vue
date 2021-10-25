<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer DownPaymentPercent DownPaymentPercent"
        >
          <div class="ltFormExplain DownPaymentPercent"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltRange DownPaymentPercent">
              <div class="ltFormQuestion DownPaymentPercent">
                <span>How much are you putting down as a down payment?</span>
              </div>
              <div class="ltFormGroupContentRange">
                <div class="ltFormControlRange DownPaymentPercent">
                  <div class="ltFormRangeFeedback DownPaymentPercent">
                    {{min}} to {{max}}%
                  </div>
                  <div>
                    <input
                      type="range"
                      id="DownPaymentPercent"
                      class="ltFormRange DownPaymentPercent"
                      min="0"
                      max="11"
                      step="1"
                      name="DownPaymentPercent"
                      :style="style"
                      v-model="DownPaymentPercent"
                    />
                  </div>
                  <div class="ltFormRangeRange DownPaymentPercent">
                    <div class="lowerRange DownPaymentPercent">0%</div>
                    <div class="upperRange DownPaymentPercent">90%</div>
                    <div style="clear: both;"></div>
                  </div>
                </div>
                <div class="ltFormSubtext undefined"></div>
              </div>
            </div>
          </div>
          <div class="ltFormButtonContainer">
            <button
              type="submit"
              style="padding: 0px; height: 0px; width: 0px; float: left; border: none;"
            ></button
            ><a
              class="ltFormButton DownPaymentPercent" @click="this.$router.push('/9')"
              >
              <div class="ltFormActionText DownPaymentPercent">Continue</div></a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  components: { Navigation },
  name: "Screen8",
  computed: {
    DownPaymentPercent: {
      get() {
        return this.$store.state.DownPaymentPercent;
      },
      set(value) {
        this.$store.commit("setDownPaymentPercent", {
          DownPaymentPercent: value,
        });
      },
    },
    min() {
      return (this.$store.state.DownPaymentPercent*5)+1;
    },
    max() {
      return (this.$store.state.DownPaymentPercent*5)+5;
    },
    style() {
      return `--min:0; --max:11; --val:${this.$store.state.DownPaymentPercent || 6}`;
    }
  },
};
</script>

<style></style>
