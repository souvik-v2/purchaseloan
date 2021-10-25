<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer StreetAddress StreetAddress"
        >
          <div class="ltFormExplain StreetAddress">
            <a
              ><span class="ltFormExplainIcon"><i></i></span
            ></a>
          </div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltText StreetAddress">
              <div class="ltFormQuestion StreetAddress">
                <span>What is your current street address?</span>
              </div>
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
                    @keyup="createDB('StreetAddress')"
                  />
                </div>
                <div class="ltFormValidating StreetAddress"></div>
                <div class="ltFormSubtext StreetAddress"></div>
              </div>
            </div>
            <div class="ltFormGroup ltText ZipCode">
              <div class="ltFormQuestion ZipCode"><span></span></div>
              <div class="ltFormGroupContentText">
                <div class="ltFormControlText ZipCode">
                  <input
                    type="tel"
                    id="formData.ZipCode"
                    autocomplete="postal-code"
                    placeholder="Enter Zip"
                    name="ZipCode"
                    class="ltFormControl ZipCode"
                    maxlength="5"
                    v-model="ZipCode"
                    @input="createDB('ZipCode')"
                  />
                </div>
                <div class="ltFormValidating ZipCode"></div>
                <div class="ltFormSubtext ZipCode"></div>
              </div>
            </div>
            <div class="ltFormGroup ltText City">
              <div class="ltFormQuestion City"><span></span></div>
              <div class="ltFormGroupContentText">
                <div class="ltFormControlText City">
                  <input
                    type="default"
                    id="formData.City"
                    autocomplete="address-level2"
                    placeholder="City"
                    name="City"
                    class="ltFormControl City"
                    maxlength="64"
                    v-model="City"
                    @keyup="createDB('City')"
                  />
                </div>
                <div class="ltFormValidating City"></div>
                <div class="ltFormSubtext City"></div>
              </div>
            </div>
          </div>
          <div class="ltFormButtonContainer">
            <a class="ltFormButton StreetAddress" @click="this.$router.push('/20')"
              >
              <div class="ltFormActionText StreetAddress">Continue</div></a
            >
          </div>
          <input type="text" v-model="Address" style="visibility: hidden;" />
        </form>
        
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  components: { Navigation },
  name: "Screen19",
  data() {
    return {
      StreetAddress: this.$store.state.Address[0],
      ZipCode: this.$store.state.Address[1],
      City: this.$store.state.Address[2],
      dba: [],
    }
  },
  methods: {
    createDB(val) {
      if (val == 'StreetAddress')
        this.dba[0] = this.StreetAddress;
      if (val == 'ZipCode')
        this.dba[1] = this.ZipCode;
      if (val == 'City')
        this.dba[2] = this.City;
      
      //console.log(this.dba);

      this.$store.commit("setAddress", {
          Address: this.dba,
        });
    }
  },
  computed: {
    Address: {
      get() {
        return this.$store.state.Address;
      },
      set(value) {
        this.$store.commit("setAddress", {
          Address: value,
        });
      },
    },
  },
};
</script>

<style></style>
