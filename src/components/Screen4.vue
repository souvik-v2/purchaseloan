<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer HomeFoundIndicator HomeFoundIndicator"
        >
          <div class="ltFormExplain HomeFoundIndicator"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltRadio HomeFoundIndicator">
              <div class="ltFormQuestion HomeFoundIndicator">
                <span>Have you already found your new home?</span>
              </div>
              <div class="ltFormGroupContentRadio">
                <div
                  class="ltFormRadioControl ltFormRadioControltrue HomeFoundIndicator"
                >
                  <div class="ltFormRadioControlInner true HomeFoundIndicator">
                    <div
                      class="ltFormRadioControlEnumHeader true HomeFoundIndicator"
                    ></div>
                    <label for="trueHomeFoundIndicator" tabindex="0"
                    :class="{selected: 'true' === this.$store.state.HomeFoundIndicator}"
                      ><input
                        type="radio"
                        name="HomeFoundIndicator"
                        id="trueHomeFoundIndicator"
                        class="ltFormRadioButton true HomeFoundIndicator"
                        for="trueHomeFoundIndicator"
                        value="true"
                        v-model="HomeFoundIndicator"
                      /><i class="ltFormRadioIcon HomeFoundIndicator"></i>
                      <div>Yes</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlfalse HomeFoundIndicator"
                >
                  <div class="ltFormRadioControlInner false HomeFoundIndicator">
                    <div
                      class="ltFormRadioControlEnumHeader false HomeFoundIndicator"
                    ></div>
                    <label for="falseHomeFoundIndicator" tabindex="0"
                    :class="{selected: 'false' === this.$store.state.HomeFoundIndicator}"
                      ><input
                        type="radio"
                        name="HomeFoundIndicator"
                        id="falseHomeFoundIndicator"
                        class="ltFormRadioButton false HomeFoundIndicator"
                        for="falseHomeFoundIndicator"
                        value="false"
                        v-model="HomeFoundIndicator"
                      /><i class="ltFormRadioIcon HomeFoundIndicator"></i>
                      <div>No</div></label
                    >
                  </div>
                </div>
                <div class="ltFormSubtext HomeFoundIndicator"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
  components: { Navigation },
  name: "Screen4",
  computed: {
        HomeFoundIndicator: {
            get() {
                return this.$store.state.HomeFoundIndicator;
            },
            set(value) {
                this.$store.commit('setHomeFoundIndicator', {HomeFoundIndicator: value});
                this.$router.push('/5');
            }
        }
    }
};
</script>

<style></style>