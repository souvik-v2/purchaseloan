<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer hasForeclosureOrBankruptcy hasForeclosureOrBankruptcy"
        >
          <div class="ltFormExplain hasForeclosureOrBankruptcy">
            <a
              ><span class="ltFormExplainIcon"><i></i></span
            ></a>
          </div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltRadio hasForeclosureOrBankruptcy">
              <div class="ltFormQuestion hasForeclosureOrBankruptcy">
                <span
                  >Have you had a bankruptcy or foreclosure in the last 7
                  years?</span
                >
              </div>
              <div class="ltFormGroupContentRadio">
                <div
                  class="ltFormRadioControl ltFormRadioControlisNo hasForeclosureOrBankruptcy"
                >
                  <div
                    class="ltFormRadioControlInner isNo hasForeclosureOrBankruptcy"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader isNo hasForeclosureOrBankruptcy"
                    ></div>
                    <label for="isNohasForeclosureOrBankruptcy" tabindex="0"
                    :class="{selected: 'isNo' == this.$store.state.hasForeclosureOrBankruptcy}"
                      ><input
                        type="radio"
                        name="hasForeclosureOrBankruptcy"
                        id="isNohasForeclosureOrBankruptcy"
                        class="ltFormRadioButton isNo hasForeclosureOrBankruptcy"
                        for="isNohasForeclosureOrBankruptcy"
                        value="isNo"
                        v-model="hasForeclosureOrBankruptcy"
                      /><i
                        class="ltFormRadioIcon hasForeclosureOrBankruptcy"
                      ></i>
                      <div>No</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlhasBankruptcy hasForeclosureOrBankruptcy"
                >
                  <div
                    class="ltFormRadioControlInner hasBankruptcy hasForeclosureOrBankruptcy"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader hasBankruptcy hasForeclosureOrBankruptcy"
                    ></div>
                    <label
                      for="hasBankruptcyhasForeclosureOrBankruptcy"
                      tabindex="0"
                      :class="{selected: 'hasBankruptcy' == this.$store.state.hasForeclosureOrBankruptcy}"
                      ><input
                        type="radio"
                        name="hasForeclosureOrBankruptcy"
                        id="hasBankruptcyhasForeclosureOrBankruptcy"
                        class="ltFormRadioButton hasBankruptcy hasForeclosureOrBankruptcy"
                        for="hasBankruptcyhasForeclosureOrBankruptcy"
                        value="hasBankruptcy"
                        v-model="hasForeclosureOrBankruptcy"
                      /><i
                        class="ltFormRadioIcon hasForeclosureOrBankruptcy"
                      ></i>
                      <div>Bankruptcy</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlhasForeclosure hasForeclosureOrBankruptcy"
                >
                  <div
                    class="ltFormRadioControlInner hasForeclosure hasForeclosureOrBankruptcy"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader hasForeclosure hasForeclosureOrBankruptcy"
                    ></div>
                    <label
                      for="hasForeclosurehasForeclosureOrBankruptcy"
                      tabindex="0"
                      :class="{selected: 'hasForeclosure' == this.$store.state.hasForeclosureOrBankruptcy}"
                      ><input
                        type="radio"
                        name="hasForeclosureOrBankruptcy"
                        id="hasForeclosurehasForeclosureOrBankruptcy"
                        class="ltFormRadioButton hasForeclosure hasForeclosureOrBankruptcy"
                        for="hasForeclosurehasForeclosureOrBankruptcy"
                        value="hasForeclosure"
                        v-model="hasForeclosureOrBankruptcy"
                      /><i
                        class="ltFormRadioIcon hasForeclosureOrBankruptcy"
                      ></i>
                      <div>Foreclosure</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlisBoth hasForeclosureOrBankruptcy"
                >
                  <div
                    class="ltFormRadioControlInner isBoth hasForeclosureOrBankruptcy"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader isBoth hasForeclosureOrBankruptcy"
                    ></div>
                    <label for="isBothhasForeclosureOrBankruptcy" tabindex="0"
                    :class="{selected: 'isBoth' == this.$store.state.hasForeclosureOrBankruptcy}"
                      ><input
                        type="radio"
                        name="hasForeclosureOrBankruptcy"
                        id="isBothhasForeclosureOrBankruptcy"
                        class="ltFormRadioButton isBoth hasForeclosureOrBankruptcy"
                        for="isBothhasForeclosureOrBankruptcy"
                        value="isBoth"
                        v-model="hasForeclosureOrBankruptcy"
                      /><i
                        class="ltFormRadioIcon hasForeclosureOrBankruptcy"
                      ></i>
                      <div>Both</div></label
                    >
                  </div>
                </div>
                <div class="ltFormSubtext hasForeclosureOrBankruptcy"></div>
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
  name: "Screen17",
  computed: {
    hasForeclosureOrBankruptcy: {
      get() {
        return this.$store.state.hasForeclosureOrBankruptcy;
      },
      set(value) {
        this.$store.commit("sethasForeclosureOrBankruptcy", {
          hasForeclosureOrBankruptcy: value,
        });
        this.$router.push("/18");
      },
    },
  },
};
</script>

<style></style>
