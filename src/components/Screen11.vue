<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer CoBorrowerRequiredIndicator CoBorrowerRequiredIndicator"
        >
          <div class="ltFormExplain CoBorrowerRequiredIndicator"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltRadio CoBorrowerRequiredIndicator">
              <div class="ltFormQuestion CoBorrowerRequiredIndicator">
                <span>Will you have a co-borrower?</span>
              </div>
              <div class="ltFormGroupContentRadio">
                <div
                  class="ltFormRadioControl ltFormRadioControltrue CoBorrowerRequiredIndicator"
                >
                  <div
                    class="ltFormRadioControlInner true CoBorrowerRequiredIndicator"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader true CoBorrowerRequiredIndicator"
                    ></div>
                    <label for="trueCoBorrowerRequiredIndicator" tabindex="0"
                    :class="{selected: 'true' == this.$store.state.CoBorrowerRequiredIndicator}"
                      ><input
                        type="radio"
                        name="CoBorrowerRequiredIndicator"
                        id="trueCoBorrowerRequiredIndicator"
                        class="ltFormRadioButton true CoBorrowerRequiredIndicator"
                        for="trueCoBorrowerRequiredIndicator"
                        value="true"
                        v-model="CoBorrowerRequiredIndicator"
                      /><i
                        class="ltFormRadioIcon CoBorrowerRequiredIndicator"
                      ></i>
                      <div>Yes</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlfalse CoBorrowerRequiredIndicator"
                >
                  <div
                    class="ltFormRadioControlInner false CoBorrowerRequiredIndicator"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader false CoBorrowerRequiredIndicator"
                    ></div>
                    <label for="falseCoBorrowerRequiredIndicator" tabindex="0"
                    :class="{selected: 'false' == this.$store.state.CoBorrowerRequiredIndicator}"
                      ><input
                        type="radio"
                        name="CoBorrowerRequiredIndicator"
                        id="falseCoBorrowerRequiredIndicator"
                        class="ltFormRadioButton false CoBorrowerRequiredIndicator"
                        for="falseCoBorrowerRequiredIndicator"
                        value="false"
                        v-model="CoBorrowerRequiredIndicator"
                      /><i
                        class="ltFormRadioIcon CoBorrowerRequiredIndicator"
                      ></i>
                      <div>No</div></label
                    >
                  </div>
                </div>
                <div class="ltFormSubtext CoBorrowerRequiredIndicator"></div>
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
  name: "Screen11",
  computed: {
    CoBorrowerRequiredIndicator: {
      get() {
        return this.$store.state.CoBorrowerRequiredIndicator;
      },
      set(value) {
        this.$store.commit("setCoBorrowerRequiredIndicator", {
          CoBorrowerRequiredIndicator: value,
        });
        this.$router.push("/12");
      },
    },
  },
};
</script>

<style></style>
