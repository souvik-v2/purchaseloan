<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer CurrentRealEstateAgentIndicator CurrentRealEstateAgentIndicator"
        >
          <div class="ltFormExplain CurrentRealEstateAgentIndicator"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltRadio CurrentRealEstateAgentIndicator">
              <div class="ltFormQuestion CurrentRealEstateAgentIndicator">
                <span>Are you currently working with a real estate agent?</span>
              </div>
              <div class="ltFormGroupContentRadio">
                <div
                  class="ltFormRadioControl ltFormRadioControltrue CurrentRealEstateAgentIndicator"
                >
                  <div
                    class="ltFormRadioControlInner true CurrentRealEstateAgentIndicator"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader true CurrentRealEstateAgentIndicator"
                    ></div>
                    <label
                      for="trueCurrentRealEstateAgentIndicator"
                      tabindex="0"
                      :class="{selected: 'true' == this.$store.state.CurrentRealEstateAgentIndicator}"
                      ><input
                        type="radio"
                        name="CurrentRealEstateAgentIndicator"
                        id="trueCurrentRealEstateAgentIndicator"
                        class="ltFormRadioButton true CurrentRealEstateAgentIndicator"
                        for="trueCurrentRealEstateAgentIndicator"
                        value="true"
                        v-model="CurrentRealEstateAgentIndicator"
                      /><i
                        class="ltFormRadioIcon CurrentRealEstateAgentIndicator"
                      ></i>
                      <div>Yes</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlfalse CurrentRealEstateAgentIndicator"
                >
                  <div
                    class="ltFormRadioControlInner false CurrentRealEstateAgentIndicator"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader false CurrentRealEstateAgentIndicator"
                    ></div>
                    <label
                      for="falseCurrentRealEstateAgentIndicator"
                      tabindex="0"
                      :class="{selected: 'false' == this.$store.state.CurrentRealEstateAgentIndicator}"
                      ><input
                        type="radio"
                        name="CurrentRealEstateAgentIndicator"
                        id="falseCurrentRealEstateAgentIndicator"
                        class="ltFormRadioButton false CurrentRealEstateAgentIndicator"
                        for="falseCurrentRealEstateAgentIndicator"
                        value="false"
                        v-model="CurrentRealEstateAgentIndicator"
                      /><i
                        class="ltFormRadioIcon CurrentRealEstateAgentIndicator"
                      ></i>
                      <div>No</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormSubtext CurrentRealEstateAgentIndicator"
                ></div>
              </div>
            </div>
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
  name: "Screen5",
  computed: {
    CurrentRealEstateAgentIndicator: {
      get() {
        return this.$store.state.CurrentRealEstateAgentIndicator;
      },
      set(value) {
        this.$store.commit("setCurrentRealEstateAgentIndicator", {
          CurrentRealEstateAgentIndicator: value,
        });
        this.$router.push('/6');
      },
    },
  },
};
</script>

<style></style>
