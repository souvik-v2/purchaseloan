<template>
  <div id="ltPhoenixApp" class="ltFormAppContainer">
  <Navigation />
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form id="phoenixform" class="ltFormContainer PropertyUse PropertyUse">
          <div class="ltFormExplain PropertyUse"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltRadio PropertyUse">
              <div class="ltFormQuestion PropertyUse">
                <span>How will this property be used?</span>
              </div>
              <div class="ltFormGroupContentRadio">
                <div
                  class="ltFormRadioControl ltFormRadioControlOWNEROCCUPIED PropertyUse"
                >
                  <div
                    class="ltFormRadioControlInner OWNEROCCUPIED PropertyUse"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader OWNEROCCUPIED PropertyUse"
                    ></div>
                    <label
                      for="OWNEROCCUPIEDPropertyUse"
                      tabindex="0"
                      :class="{selected: 'OWNEROCCUPIED' === this.$store.state.PropertyUse}"
                      ><input
                        type="radio"
                        name="PropertyUse"
                        id="OWNEROCCUPIEDPropertyUse"
                        class="ltFormRadioButton OWNEROCCUPIED PropertyUse"
                        for="OWNEROCCUPIEDPropertyUse"
                        value="OWNEROCCUPIED"
                        v-model="PropertyUse"
                      /><i class="ltFormRadioIcon PropertyUse"></i>
                      <div>Primary Home</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlSECONDHOME PropertyUse"
                >
                  <div class="ltFormRadioControlInner SECONDHOME PropertyUse">
                    <div
                      class="ltFormRadioControlEnumHeader SECONDHOME PropertyUse"
                    ></div>
                    <label for="SECONDHOMEPropertyUse" tabindex="0"
                    :class="{selected: 'SECONDHOME' === this.$store.state.PropertyUse}"
                      ><input
                        type="radio"
                        name="PropertyUse"
                        id="SECONDHOMEPropertyUse"
                        class="ltFormRadioButton SECONDHOME PropertyUse"
                        for="SECONDHOMEPropertyUse"
                        value="SECONDHOME"
                        v-model="PropertyUse"
                      /><i class="ltFormRadioIcon PropertyUse"></i>
                      <div>Secondary Home</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlINVESTMENTPROPERTY PropertyUse"
                >
                  <div
                    class="ltFormRadioControlInner INVESTMENTPROPERTY PropertyUse"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader INVESTMENTPROPERTY PropertyUse"
                    ></div>
                    <label for="INVESTMENTPROPERTYPropertyUse" tabindex="0"
                    :class="{selected: 'INVESTMENTPROPERTY' === this.$store.state.PropertyUse}"
                      ><input
                        type="radio"
                        name="PropertyUse"
                        id="INVESTMENTPROPERTYPropertyUse"
                        class="ltFormRadioButton INVESTMENTPROPERTY PropertyUse"
                        for="INVESTMENTPROPERTYPropertyUse"
                        value="INVESTMENTPROPERTY"
                        v-model="PropertyUse"
                      /><i class="ltFormRadioIcon PropertyUse"></i>
                      <div>Rental Property</div></label
                    >
                  </div>
                </div>
                <div class="ltFormSubtext PropertyUse"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
export default {
  name: 'Screen2',
  components: { Navigation },
  computed: {
        PropertyUse: {
            get() {
                return this.$store.state.PropertyUse;
            },
            set(value) {
                this.$store.commit('setPropertyUse', {PropertyUse: value});
                this.$router.push('/3');
            }
        }
    }
};
</script>

<style></style>
