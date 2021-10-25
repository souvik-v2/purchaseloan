<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer EmailAddress EmailAddress"
        >
          <div class="ltFormExplain EmailAddress"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltText EmailAddress">
              <div class="ltFormQuestion EmailAddress">
                <span>What is your email?</span>
              </div>
              <div class="ltFormGroupContentText">
                <div class="ltFormControlText EmailAddress">
                  <input
                    type="email"
                    id="formData.EmailAddress"
                    autocomplete="email"
                    placeholder="you@example.com"
                    name="EmailAddress"
                    class="ltFormControl EmailAddress"
                    maxlength="150"
                    v-model="EmailAddress"
                  />
                </div>
                <div class="ltFormValidating EmailAddress"></div>
                <div class="ltFormSubtext EmailAddress">
                  We take your privacy seriously
                </div>
              </div>
            </div>
          </div>
          <div class="ltFormButtonContainer">
           <a class="ltFormButton EmailAddress" @click="this.$router.push('/22')"
              >
              <div class="ltFormActionText EmailAddress">Continue</div></a
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
  name: "Screen21",
  computed: {
    EmailAddress: {
      get() {
        return this.$store.state.EmailAddress;
      },
      set(value) {
        this.$store.commit("setEmailAddress", {
          EmailAddress: value,
        });
      },
    },
  },
};
</script>

<style></style>
