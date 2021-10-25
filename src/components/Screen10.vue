<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer FirstTimeBuyer FirstTimeBuyer"
        >
          <div class="ltFormExplain FirstTimeBuyer"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltRadio FirstTimeBuyer">
              <div class="ltFormQuestion FirstTimeBuyer">
                <span>Is this your first time buying a home?</span>
              </div>
              <div class="ltFormGroupContentRadio">
                <div
                  class="ltFormRadioControl ltFormRadioControlyes FirstTimeBuyer"
                >
                  <div class="ltFormRadioControlInner yes FirstTimeBuyer">
                    <div
                      class="ltFormRadioControlEnumHeader yes FirstTimeBuyer"
                    ></div>
                    <label for="yesFirstTimeBuyer" tabindex="0"
                    :class="{selected: 'yes' == this.$store.state.FirstTimeBuyer}"
                      ><input
                        type="radio"
                        name="FirstTimeBuyer"
                        id="yesFirstTimeBuyer"
                        class="ltFormRadioButton yes FirstTimeBuyer"
                        for="yesFirstTimeBuyer"
                        value="yes"
                        v-model="FirstTimeBuyer"
                      /><i class="ltFormRadioIcon FirstTimeBuyer"></i>
                      <div>Yes</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlno FirstTimeBuyer"
                >
                  <div class="ltFormRadioControlInner no FirstTimeBuyer">
                    <div
                      class="ltFormRadioControlEnumHeader no FirstTimeBuyer"
                    ></div>
                    <label for="noFirstTimeBuyer" tabindex="0"
                    :class="{selected: 'no' == this.$store.state.FirstTimeBuyer}"
                      ><input
                        type="radio"
                        name="FirstTimeBuyer"
                        id="noFirstTimeBuyer"
                        class="ltFormRadioButton no FirstTimeBuyer"
                        for="noFirstTimeBuyer"
                        value="no"
                        v-model="FirstTimeBuyer"
                      /><i class="ltFormRadioIcon FirstTimeBuyer"></i>
                      <div>No</div></label
                    >
                  </div>
                </div>
                <div class="ltFormSubtext FirstTimeBuyer"></div>
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
  name: "Screen10",
  computed: {
    FirstTimeBuyer: {
      get() {
        return this.$store.state.FirstTimeBuyer;
      },
      set(value) {
        this.$store.commit("setFirstTimeBuyer", {
          FirstTimeBuyer: value,
        });
        this.$router.push("/11");
      },
    },
  },
};
</script>

<style></style>
