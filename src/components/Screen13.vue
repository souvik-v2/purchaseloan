<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer EmploymentStatus EmploymentStatus"
        >
          <div class="ltFormExplain EmploymentStatus"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltRadio EmploymentStatus">
              <div class="ltFormQuestion EmploymentStatus">
                <span>Are you currently employed?</span>
              </div>
              <div class="ltFormGroupContentRadio">
                <div
                  class="ltFormRadioControl ltFormRadioControlFULLTIME EmploymentStatus"
                >
                  <div
                    class="ltFormRadioControlInner FULLTIME EmploymentStatus"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader FULLTIME EmploymentStatus"
                    ></div>
                    <label for="FULLTIMEEmploymentStatus" tabindex="0"
                    :class="{selected: 'FULLTIME' === this.$store.state.EmploymentStatus}"
                      ><input
                        type="radio"
                        name="EmploymentStatus"
                        id="FULLTIMEEmploymentStatus"
                        class="ltFormRadioButton FULLTIME EmploymentStatus"
                        for="FULLTIMEEmploymentStatus"
                        value="FULLTIME"
                        v-model="EmploymentStatus"
                      /><i class="ltFormRadioIcon EmploymentStatus"></i>
                      <div>Full-time</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlPARTTIME EmploymentStatus"
                >
                  <div
                    class="ltFormRadioControlInner PARTTIME EmploymentStatus"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader PARTTIME EmploymentStatus"
                    ></div>
                    <label for="PARTTIMEEmploymentStatus" tabindex="0"
                    :class="{selected: 'PARTTIME' === this.$store.state.EmploymentStatus}"
                      ><input
                        type="radio"
                        name="EmploymentStatus"
                        id="PARTTIMEEmploymentStatus"
                        class="ltFormRadioButton PARTTIME EmploymentStatus"
                        for="PARTTIMEEmploymentStatus"
                        value="PARTTIME"
                        v-model="EmploymentStatus"
                      /><i class="ltFormRadioIcon EmploymentStatus"></i>
                      <div>Part-time</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlSELFEMPLOYED EmploymentStatus"
                >
                  <div
                    class="ltFormRadioControlInner SELFEMPLOYED EmploymentStatus"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader SELFEMPLOYED EmploymentStatus"
                    ></div>
                    <label for="SELFEMPLOYEDEmploymentStatus" tabindex="0"
                    :class="{selected: 'SELFEMPLOYED' === this.$store.state.EmploymentStatus}"
                      ><input
                        type="radio"
                        name="EmploymentStatus"
                        id="SELFEMPLOYEDEmploymentStatus"
                        class="ltFormRadioButton SELFEMPLOYED EmploymentStatus"
                        for="SELFEMPLOYEDEmploymentStatus"
                        value="SELFEMPLOYED"
                        v-model="EmploymentStatus"
                      /><i class="ltFormRadioIcon EmploymentStatus"></i>
                      <div>Self-employed</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlUNEMPLOYED EmploymentStatus"
                >
                  <div
                    class="ltFormRadioControlInner UNEMPLOYED EmploymentStatus"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader UNEMPLOYED EmploymentStatus"
                    ></div>
                    <label for="UNEMPLOYEDEmploymentStatus" tabindex="0"
                    :class="{selected: 'UNEMPLOYED' === this.$store.state.EmploymentStatus}"
                      ><input
                        type="radio"
                        name="EmploymentStatus"
                        id="UNEMPLOYEDEmploymentStatus"
                        class="ltFormRadioButton UNEMPLOYED EmploymentStatus"
                        for="UNEMPLOYEDEmploymentStatus"
                        value="UNEMPLOYED"
                        v-model="EmploymentStatus"
                      /><i class="ltFormRadioIcon EmploymentStatus"></i>
                      <div>No, I'm not employed</div></label
                    >
                  </div>
                </div>
                <div class="ltFormSubtext EmploymentStatus"></div>
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
  name: "Screen13",
  computed: {
    EmploymentStatus: {
      get() {
        return this.$store.state.EmploymentStatus;
      },
      set(value) {
        this.$store.commit("setEmploymentStatus", {
          EmploymentStatus: value,
        });
        this.$router.push("/14");
      },
    },
  },
};
</script>

<style></style>
