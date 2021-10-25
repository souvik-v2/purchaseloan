<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer StreetAddress OopsStreetAddress"
        >
          <div class="ltFormExplain StreetAddress"></div>
          <div class="ltFormQuestionHeader StreetAddress">
            <p>Oops!</p>
            Your personal information doesn't seem to match up.
          </div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltText StreetAddress">
              <div class="ltFormQuestion StreetAddress"><span></span></div>
              <div class="ltFormGroupContentText">
                <div class="ltFormControlText StreetAddress">
                  <input
                    type="default"
                    id="formData.StreetAddress"
                    placeholder="Street Address"
                    name="StreetAddress"
                    class="ltFormControl StreetAddress"
                    maxlength="64"
                    v-model="StreetAddress"
                    @input="createOops('StreetAddress')"
                  />
                </div>
                <div class="ltFormValidating StreetAddress"></div>
                <div class="ltFormSubtext StreetAddress"></div>
              </div>
            </div>
            <div class="ltFormGroup ltText ZipCode">
              <div class="ltFormGroupContentText">
                <div class="ltFormControlText ZipCode">
                  <input
                    type="tel"
                    id="formData.ZipCode"
                    autocomplete="postal-code"
                    placeholder="ZipCode"
                    name="ZipCode"
                    class="ltFormControl ZipCode"
                    maxlength="5"
                    v-model="ZipCode"
                    @input="createOops('ZipCode')"
                  />
                </div>
                <div class="ltFormValidating ZipCode"></div>
                <div class="ltFormSubtext ZipCode"></div>
              </div>
            </div>
            <div class="ltFormGroup ltText FirstName">
              <div class="ltFormGroupContentText">
                <div class="ltFormControlText FirstName">
                   <input
                    id="formData.PhoneNumber"
                    placeholder="PhoneNumber"
                    name="PhoneNumber"
                    type="tel"
                    autocomplete="tel"
                    class="ltFormControl PhoneNumber"
                    v-model="PhoneNumber"
                    @input="createOops('PhoneNumber')"
                  />
                </div>
              </div>
            </div>
            
          </div>
          <div class="ltFormButtonContainer">
            <a class="ltFormButton StreetAddress" @click="this.$router.push('/25')"
            >
              <div class="ltFormActionText StreetAddress">Continue</div></a
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
  name: "Screen24",
  data() {
    return {
      StreetAddress: this.$store.state.Address[0],
      ZipCode: this.$store.state.Address[1],
      PhoneNumber: this.$store.state.PhoneNumber,
      oops: [],
    };
  },
  methods: {
    createOops(val) {
      if (val == "StreetAddress") this.$store.state.Address[0] = this.StreetAddress;
      if (val == "ZipCode") this.$store.state.Address[1] = this.ZipCode;
      if (val == "PhoneNumber") this.$store.state.PhoneNumber = this.PhoneNumber;
    },
  },
  computed: {
    FullName: {
      get() {
        return this.$store.state.FullName;
      },
      set(value) {
        this.$store.commit("setFullName", {
          FullName: value,
        });
      },
    },
  },
};
</script>

<style></style>
