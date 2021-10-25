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
        <form id="phoenixform" class="ltFormContainer FirstName FirstName">
          <div class="ltFormExplain FirstName"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltText FirstName">
              <div class="ltFormQuestion FirstName">
                <span>What is your name?</span>
              </div>
              <div class="ltFormGroupContentText">
                <div class="ltFormControlText FirstName">
                  <input
                    type="default"
                    id="formData.FirstName"
                    autocomplete="given-name"
                    placeholder="First Name"
                    name="FirstName"
                    class="ltFormControl FirstName"
                    maxlength="50"
                    v-model="FirstName"
                    @input="createNM('FirstName')"
                  />
                </div>
                <div class="ltFormValidating FirstName"></div>
                <div class="ltFormSubtext FirstName"></div>
              </div>
            </div>
            <div class="ltFormGroup ltText LastName">
              <div class="ltFormQuestion LastName"><span></span></div>
              <div class="ltFormGroupContentText">
                <div class="ltFormControlText LastName">
                  <input
                    type="default"
                    id="formData.LastName"
                    autocomplete="family-name"
                    placeholder="Last Name"
                    name="LastName"
                    class="ltFormControl LastName"
                    maxlength="50"
                    v-model="LastName"
                    @input="createNM('LastName')"
                  />
                </div>
                <div class="ltFormValidating LastName"></div>
                <div class="ltFormSubtext LastName"></div>
              </div>
            </div>
          </div>
          <div class="ltFormButtonContainer">
            <a class="ltFormButton FirstName" @click="this.$router.push('/21')"
              >
              <div class="ltFormActionText FirstName">Continue</div></a
            >
          </div>
          <input type="text" v-model="FullName" style="visibility: hidden;" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  components: { Navigation },
  name: "Screen20",
  data() {
    return {
      FirstName: this.$store.state.FullName[0],
      LastName: this.$store.state.FullName[1],
      name: [],
    }
  },
  methods: {
    createNM(val) {
      if (val == 'FirstName')
        this.name[0] = this.FirstName;
      if (val == 'LastName')
        this.name[1] = this.LastName;
      
      //console.log(this.dba);

      this.$store.commit("setFullName", {
          FullName: this.name,
        });
    }
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
