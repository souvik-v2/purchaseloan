<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer VeteranIndicator VeteranIndicator"
        >
          <div class="ltFormExplain VeteranIndicator"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltRadio VeteranIndicator">
              <div class="ltFormQuestion VeteranIndicator">
                <span>Have you or your spouse served in the military?</span>
              </div>
              <div class="ltFormGroupContentRadio">
                <div
                  class="ltFormRadioControl ltFormRadioControltrue VeteranIndicator"
                >
                  <div class="ltFormRadioControlInner true VeteranIndicator">
                    <div
                      class="ltFormRadioControlEnumHeader true VeteranIndicator"
                    ></div>
                    <label for="trueVeteranIndicator" tabindex="0"
                    :class="{selected: 'true' == this.$store.state.VeteranIndicator}"
                      ><input
                        type="radio"
                        name="VeteranIndicator"
                        id="trueVeteranIndicator"
                        class="ltFormRadioButton true VeteranIndicator"
                        for="trueVeteranIndicator"
                        value="true"
                        v-model="VeteranIndicator"
                      /><i class="ltFormRadioIcon VeteranIndicator"></i>
                      <div>Yes</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlfalse VeteranIndicator"
                >
                  <div class="ltFormRadioControlInner false VeteranIndicator">
                    <div
                      class="ltFormRadioControlEnumHeader false VeteranIndicator"
                    ></div>
                    <label
                      for="falseVeteranIndicator"
                      tabindex="0"
                      :class="{selected: 'false' == this.$store.state.VeteranIndicator}"
                      ><input
                        type="radio"
                        name="VeteranIndicator"
                        id="falseVeteranIndicator"
                        class="ltFormRadioButton false VeteranIndicator"
                        for="falseVeteranIndicator"
                        value="false"
                        v-model="VeteranIndicator"
                      /><i class="ltFormRadioIcon VeteranIndicator"></i>
                      <div>No</div></label
                    >
                  </div>
                </div>
                <div class="ltFormSubtext VeteranIndicator"></div>
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
  name: "Screen16",
  computed: {
    VeteranIndicator: {
      get() {
        return this.$store.state.VeteranIndicator;
      },
      set(value) {
        this.$store.commit("setVeteranIndicator", {
          VeteranIndicator: value,
        });
        this.$router.push("/17");
      },
    },
  },
};
</script>

<style></style>
