<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer EstimatedCreditRating EstimatedCreditRating"
        >
          <div class="ltFormExplain EstimatedCreditRating"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltRadio EstimatedCreditRating">
              <div class="ltFormQuestion EstimatedCreditRating">
                <span>Estimate your credit score</span>
              </div>
              <div class="ltFormGroupContentRadio">
                <div
                  class="ltFormRadioControl ltFormRadioControlEXCELLENT EstimatedCreditRating"
                >
                  <div
                    class="ltFormRadioControlInner EXCELLENT EstimatedCreditRating"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader EXCELLENT EstimatedCreditRating"
                    ></div>
                    <label for="EXCELLENTEstimatedCreditRating" tabindex="0"
                    :class="{selected: 'EXCELLENT' === this.$store.state.EstimatedCreditRating}"
                      ><input
                        type="radio"
                        name="EstimatedCreditRating"
                        id="EXCELLENTEstimatedCreditRating"
                        class="ltFormRadioButton EXCELLENT EstimatedCreditRating"
                        for="EXCELLENTEstimatedCreditRating"
                        value="EXCELLENT"
                        v-model="EstimatedCreditRating"
                      /><i class="ltFormRadioIcon EstimatedCreditRating"></i>
                      <div>Excellent ≥720</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlSOMECREDITPROBLEMS EstimatedCreditRating"
                >
                  <div
                    class="ltFormRadioControlInner SOMECREDITPROBLEMS EstimatedCreditRating"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader SOMECREDITPROBLEMS EstimatedCreditRating"
                    ></div>
                    <label
                      for="SOMECREDITPROBLEMSEstimatedCreditRating"
                      tabindex="0"
                      :class="{selected: 'SOMECREDITPROBLEMS' === this.$store.state.EstimatedCreditRating}"
                      ><input
                        type="radio"
                        name="EstimatedCreditRating"
                        id="SOMECREDITPROBLEMSEstimatedCreditRating"
                        class="ltFormRadioButton SOMECREDITPROBLEMS EstimatedCreditRating"
                        for="SOMECREDITPROBLEMSEstimatedCreditRating"
                        value="SOMECREDITPROBLEMS"
                        v-model="EstimatedCreditRating"
                      /><i class="ltFormRadioIcon EstimatedCreditRating"></i>
                      <div>Good 680 - 719</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlMAJORCREDITPROBLEMS EstimatedCreditRating"
                >
                  <div
                    class="ltFormRadioControlInner MAJORCREDITPROBLEMS EstimatedCreditRating"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader MAJORCREDITPROBLEMS EstimatedCreditRating"
                    ></div>
                    <label
                      for="MAJORCREDITPROBLEMSEstimatedCreditRating"
                      tabindex="0"
                      :class="{selected: 'MAJORCREDITPROBLEMS' === this.$store.state.EstimatedCreditRating}"
                      ><input
                        type="radio"
                        name="EstimatedCreditRating"
                        id="MAJORCREDITPROBLEMSEstimatedCreditRating"
                        class="ltFormRadioButton MAJORCREDITPROBLEMS EstimatedCreditRating"
                        for="MAJORCREDITPROBLEMSEstimatedCreditRating"
                        value="MAJORCREDITPROBLEMS"
                        v-model="EstimatedCreditRating"
                      /><i class="ltFormRadioIcon EstimatedCreditRating"></i>
                      <div>Fair 640-679</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlLITTLEORNOCREDITHISTORY EstimatedCreditRating"
                >
                  <div
                    class="ltFormRadioControlInner LITTLEORNOCREDITHISTORY EstimatedCreditRating"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader LITTLEORNOCREDITHISTORY EstimatedCreditRating"
                    ></div>
                    <label
                      for="LITTLEORNOCREDITHISTORYEstimatedCreditRating"
                      tabindex="0"
                      :class="{selected: 'LITTLEORNOCREDITHISTORY' === this.$store.state.EstimatedCreditRating}"
                      ><input
                        type="radio"
                        name="EstimatedCreditRating"
                        id="LITTLEORNOCREDITHISTORYEstimatedCreditRating"
                        class="ltFormRadioButton LITTLEORNOCREDITHISTORY EstimatedCreditRating"
                        for="LITTLEORNOCREDITHISTORYEstimatedCreditRating"
                        value="LITTLEORNOCREDITHISTORY"
                        v-model="EstimatedCreditRating"
                      /><i class="ltFormRadioIcon EstimatedCreditRating"></i>
                      <div>Poor ≤639</div></label
                    >
                  </div>
                </div>
                <div class="ltFormSubtext EstimatedCreditRating"></div>
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
  name: "Screen14",
  computed: {
    EstimatedCreditRating: {
      get() {
        return this.$store.state.EstimatedCreditRating;
      },
      set(value) {
        this.$store.commit("setEstimatedCreditRating", {
          EstimatedCreditRating: value,
        });
        this.$router.push("/15");
      },
    },
  },
};
</script>

<style></style>
