<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form id="phoenixform" class="ltFormContainer Foreclosure Foreclosure">
          <div class="ltFormExplain Foreclosure"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltRange Foreclosure">
              <div class="ltFormQuestion Foreclosure">
                <span>How long ago was the foreclosure?</span>
              </div>
              <div class="ltFormGroupContentRange">
                <div class="ltFormControlRange Foreclosure">
                  <div class="ltFormRangeFeedback Foreclosure">{{Foreclosure || 4}} Years</div>
                  <div>
                    <input
                      type="range"
                      id="Foreclosure"
                      class="ltFormRange Foreclosure"
                      min="0"
                      max="7"
                      step="1"
                      name="Foreclosure"
                      :style="style"
                      v-model="Foreclosure"
                    />
                  </div>
                  <div class="ltFormRangeRange Foreclosure">
                    <div class="lowerRange Foreclosure">0</div>
                    <div class="upperRange Foreclosure">7+ Years</div>
                    <div style="clear: both;"></div>
                  </div>
                </div>
                <div class="ltFormSubtext undefined"></div>
              </div>
            </div>
          </div>
          <div class="ltFormButtonContainer">
            <a class="ltFormButton Foreclosure" @click="this.$router.push('/19')"
              >
              <div class="ltFormActionText Foreclosure">Continue</div></a
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
  name: "Screen18",
  computed: {
    Foreclosure: {
      get() {
        return this.$store.state.Foreclosure;
      },
      set(value) {
        this.$store.commit("setForeclosure", {
          Foreclosure: value,
        });
      },
    },
    style() {
      return `--min:0; --max:7; --val:${this.$store.state.Foreclosure || 4}`;
    }
  },
};
</script>

<style></style>
