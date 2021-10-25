<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <div class="ltFormBack">
          <div class="ltFormNavigation back">
            <span class="ltFormNavigationIcon"></span
            ><span class="ltFormNavigationText"></span>
          </div>
        </div>
        <form id="phoenixform" class="ltFormContainer PhoneNumber PhoneNumber">
          <div class="ltFormExplain PhoneNumber">
            <a
              ><span class="ltFormExplainIcon"><i></i></span
            ></a>
          </div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltText PhoneNumber">
              <div class="ltFormQuestion PhoneNumber">
                <span>Mobile or home phone number</span>
              </div>
              <div class="ltFormGroupContentText">
                <div class="ltFormControlText PhoneNumber">
                  <input
                    id="formData.PhoneNumber"
                    name="PhoneNumber"
                    type="tel"
                    autocomplete="tel"
                    class="ltFormControl PhoneNumber"
                    v-model="PhoneNumber"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="ltFormButtonContainer">
            <a class="ltFormButton PhoneNumber" @click="this.$router.push('/23')"
              >
              <div class="ltFormActionText PhoneNumber">View My Rates</div></a
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
  name: "Screen22",
  computed: {
    PhoneNumber: {
      get() {
        return this.$store.state.PhoneNumber;
      },
      set(value) {
        this.$store.commit("setPhoneNumber", {
          PhoneNumber: value,
        });
      },
    },
  },
};
</script>

<style></style>
