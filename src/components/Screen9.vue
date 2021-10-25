<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer WhoDoYouBankWith WhoDoYouBankWith"
        >
          <div class="ltFormExplain WhoDoYouBankWith"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltCheckboxes WhoDoYouBankWith">
              <div class="ltFormQuestion WhoDoYouBankWith">
                <span
                  >Do You Currently Have Accounts With Any Of The Following
                  Banks?</span
                >
              </div>
              <div class="ltFormGroupContentCheckboxes">
                <div
                  class="ltFormCheckBoxControl ltFormCheckBoxControl1372545 WhoDoYouBankWith"
                >
                  <label tabindex="0"
                  :class="{selected: (this.$store.state.PurchaseIntent.indexOf('1372545') !== -1)}"
                    ><input
                      type="checkbox"
                      name="WhoDoYouBankWith[]"
                      value="1372545"
                      v-model="WhoDoYouBankWith"
                    /><i class="ltFormCheckBoxIcon WhoDoYouBankWith"></i>
                    <div>Wells Fargo</div></label
                  >
                </div>
                <div
                  class="ltFormCheckBoxControl ltFormCheckBoxControl30990 WhoDoYouBankWith"
                >
                  <label tabindex="0"
                  :class="{selected: (this.$store.state.PurchaseIntent.indexOf('30990') !== -1)}"
                    ><input
                      type="checkbox"
                      name="WhoDoYouBankWith[]"
                      value="30990"
                      v-model="WhoDoYouBankWith"
                    /><i class="ltFormCheckBoxIcon WhoDoYouBankWith"></i>
                    <div>Bank Of America</div></label
                  >
                </div>
                <div
                  class="ltFormCheckBoxControl ltFormCheckBoxControl22490 WhoDoYouBankWith"
                >
                  <label tabindex="0"
                  :class="{selected: (this.$store.state.PurchaseIntent.indexOf('22490') !== -1)}"
                    ><input
                      type="checkbox"
                      name="WhoDoYouBankWith[]"
                      value="22490"
                      v-model="WhoDoYouBankWith"
                    /><i class="ltFormCheckBoxIcon WhoDoYouBankWith"></i>
                    <div>Citibank, N.A.</div></label
                  >
                </div>
                <div
                  class="ltFormCheckBoxControl ltFormCheckBoxControl32260 WhoDoYouBankWith"
                >
                  <label tabindex="0"
                  :class="{selected: (this.$store.state.PurchaseIntent.indexOf('32260') !== -1)}"
                    ><input
                      type="checkbox"
                      name="formData.WhoDoYouBankWith[]"
                      value="32260"
                      v-model="WhoDoYouBankWith"
                    /><i class="ltFormCheckBoxIcon WhoDoYouBankWith"></i>
                    <div>US Bank</div></label
                  >
                </div>
                <div
                  class="ltFormCheckBoxControl ltFormCheckBoxControlGS105669 WhoDoYouBankWith"
                >
                  <label tabindex="0"
                  :class="{selected: (this.$store.state.PurchaseIntent.indexOf('GS105669') !== -1)}"
                    ><input
                      type="checkbox"
                      name="WhoDoYouBankWith[]"
                      value="GS105669"
                      v-model="WhoDoYouBankWith"
                    /><i class="ltFormCheckBoxIcon WhoDoYouBankWith"></i>
                    <div>Chase</div></label
                  >
                </div>
                <div
                  class="ltFormCheckBoxControl ltFormCheckBoxControl20445 WhoDoYouBankWith"
                >
                  <label tabindex="0"
                  :class="{selected: (this.$store.state.PurchaseIntent.indexOf('20445') !== -1)}"
                    ><input
                      type="checkbox"
                      name="WhoDoYouBankWith[]"
                      value="20445"
                      v-model="WhoDoYouBankWith"
                    /><i class="ltFormCheckBoxIcon WhoDoYouBankWith"></i>
                    <div>USAA</div></label
                  >
                </div>
                <div
                  class="ltFormCheckBoxControl ltFormCheckBoxControlGS107192 WhoDoYouBankWith"
                >
                  <label tabindex="0"
                  :class="{selected: (this.$store.state.PurchaseIntent.indexOf('GS107192') !== -1)}"
                    ><input
                      type="checkbox"
                      name="WhoDoYouBankWith[]"
                      value="GS107192"
                      v-model="WhoDoYouBankWith"
                    /><i class="ltFormCheckBoxIcon WhoDoYouBankWith"></i>
                    <div>Ally Bank</div></label
                  >
                </div>
                <div
                  class="ltFormCheckBoxControl ltFormCheckBoxControl0 WhoDoYouBankWith"
                >
                  <label tabindex="0"
                  :class="{selected: (this.$store.state.PurchaseIntent.indexOf('0') !== -1)}"
                    ><input
                      type="checkbox"
                      name="WhoDoYouBankWith[]"
                      value="0"
                      v-model="WhoDoYouBankWith"
                    /><i class="ltFormCheckBoxIcon WhoDoYouBankWith"></i>
                    <div>None of the above</div></label
                  >
                </div>
                <div class="ltFormSubtext WhoDoYouBankWith"></div>
              </div>
            </div>
          </div>
          <div class="ltFormButtonContainer">
            <button
              type="submit"
              style="padding: 0px; height: 0px; width: 0px; float: left; border: none;"
            ></button
            ><a
              class="ltFormButton WhoDoYouBankWith"
              @click="this.$router.push('/10')"
            >
              <div class="ltFormActionText WhoDoYouBankWith">Continue</div></a
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
  name: "Screen9",
  computed: {
    WhoDoYouBankWith: {
      get() {
        return this.$store.state.WhoDoYouBankWith;
      },
      set(value) {
        this.$store.commit("setWhoDoYouBankWith", {
          WhoDoYouBankWith: value,
        });
      },
    },
  },
};
</script>

<style>
.skip-step {
  cursor: pointer;
  top: 1px;
  color: #337ab7;
}
.ltFormCheckBoxControl.WhoDoYouBankWith label input[type="checkbox"] {
  display: block;
}
[type=checkbox], [type=radio] {
    z-index: 1;
    opacity: 1;
}
</style>
