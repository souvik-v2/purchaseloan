<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form id="phoenixform" class="ltFormContainer CityState CityState">
          <div class="ltFormExplain CityState"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltCombobox CityState">
              <div class="ltFormQuestion CityState">
                <span>In what city will the property be located?</span>
              </div>
              <div class="ltFormGroupContentCombobox">
                <div
                  role="combobox"
                  aria-haspopup="listbox"
                  aria-owns="react-autowhatever-formData.CityState"
                  aria-expanded="false"
                  class="ltFormComboBox"
                >
                  <input
                    type="text"
                    autocomplete="off"
                    aria-autocomplete="list"
                    aria-controls="react-autowhatever-formData.CityState"
                    class="ltFormControl"
                    placeholder="City, State"
                    id="formData.CityState"
                    name="CityState"
                    v-model="CityState"
                  />
                  <div
                    id="react-autowhatever-formData.CityState"
                    role="listbox"
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ltFormButtonContainer">
            <a class="ltFormButton CityState" @click="this.$router.push('/4');"
              >
              <div class="ltFormActionText CityState">Continue</div></a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
  components: { Navigation },
  name: "Screen3",
  computed: {
        CityState: {
            get() {
                return this.$store.state.CityState;
            },
            set(value) {
                this.$store.commit('setCityState', {CityState: value});
            }
        }
    }
};
</script>

<style></style>
