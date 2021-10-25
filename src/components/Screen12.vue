<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer AnnualIncome AnnualIncome"
        >
          <div class="ltFormExplain AnnualIncome"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltText AnnualIncome">
              <div class="ltFormQuestion AnnualIncome">
                <span>What is your annual income?</span>
              </div>
              <div class="ltFormGroupContentText">
                <div class="ltFormControlText AnnualIncome">
                  <input
                    type="tel"
                    name="AnnualIncome"
                    class="ltFormControl AnnualIncome"
                    maxlength="11"
                    v-model="AnnualIncome"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="ltFormButtonContainer">
            <a class="ltFormButton AnnualIncome" @click="this.$router.push('/13')"
              >
              <div class="ltFormActionText AnnualIncome">Continue</div></a
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
  name: "Screen12",
  computed: {
    AnnualIncome: {
      get() {
        return this.$store.state.AnnualIncome;
      },
      set(value) {
        this.$store.commit("setAnnualIncome", {
          AnnualIncome: value,
        });
        
      },
    },
  },
};
</script>

<style></style>
