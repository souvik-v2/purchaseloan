<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form id="phoenixform" class="ltFormContainer SSN SSN9">
          <div class="ltFormExplain SSN"></div>
          <div class="ltFormQuestionHeader SSN">
            <div class="ltFormQuestion SSN">Social Security #</div>
            <div class="step-message ssn-info">
              Providing your SSN is optional, but it will allow us to get more
              personalized rates.
            </div>
          </div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltText SSN">
              <div class="ltFormGroupContentText">
                <div class="ltFormControlText SSN">
                  <input
                    id="SSN"
                    name="SSN"
                    type="tel"
                    class="ltFormControl SSN"
                    v-model="SSN"
                    required
                  />
                </div>
                <div class="ltFormValidating SSN"></div>
                <div class="ltFormSubtext SSN">
                  (This will NOT affect your credit. Your SSN is used to verify
                  your identity.)
                </div>
              </div>
            </div>
          </div>
          <div class="ltFormButtonContainer">
            <a class="ltFormButton SSN" @click="this.$router.push('/24')"
              >
              <div class="ltFormActionText SSN">Continue</div></a
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
  name: "Screen23",
  computed: {
    SSN: {
      get() {
        return this.$store.state.SSN;
      },
      set(value) {
        this.$store.commit("setSSN", {
          SSN: value,
        });
      },
    },
  },
};
</script>

<style></style>
