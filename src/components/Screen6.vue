<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer PurchaseIntent PurchaseIntent"
        >
          <div class="ltFormExplain PurchaseIntent"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltRadio PurchaseIntent">
              <div class="ltFormQuestion PurchaseIntent">
                <span>When do you plan to buy a home?</span>
              </div>
              <div class="ltFormGroupContentRadio">
                <div
                  class="ltFormRadioControl ltFormRadioControlpurchase-under-contract PurchaseIntent"
                >
                  <div
                    class="ltFormRadioControlInner purchase-under-contract PurchaseIntent"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader purchase-under-contract PurchaseIntent"
                    ></div>
                    <label
                      for="purchase-under-contractPurchaseIntent"
                      tabindex="0"
                      :class="{selected: 'purchase-under-contract' === this.$store.state.PurchaseIntent}"
                      ><input
                        type="radio"
                        name="PurchaseIntent"
                        id="purchase-under-contractPurchaseIntent"
                        class="ltFormRadioButton purchase-under-contract PurchaseIntent"
                        for="purchase-under-contractPurchaseIntent"
                        value="purchase-under-contract"
                        v-model="PurchaseIntent"
                      /><i class="ltFormRadioIcon PurchaseIntent"></i>
                      <div>Already under contract</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlpurchase-making-offer PurchaseIntent"
                >
                  <div
                    class="ltFormRadioControlInner purchase-making-offer PurchaseIntent"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader purchase-making-offer PurchaseIntent"
                    ></div>
                    <label
                      :class="{selected: 'purchase-making-offer' === this.$store.state.PurchaseIntent}"
                      for="purchase-making-offerPurchaseIntent"
                      tabindex="0"
                      ><input
                        type="radio"
                        name="PurchaseIntent"
                        id="purchase-making-offerPurchaseIntent"
                        class="ltFormRadioButton purchase-making-offer PurchaseIntent"
                        for="purchase-making-offerPurchaseIntent"
                        value="purchase-making-offer"
                        v-model="PurchaseIntent"
                      /><i class="ltFormRadioIcon PurchaseIntent"></i>
                      <div>Immediately – I’m making an offer</div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlpurchase-shopping-now PurchaseIntent"
                >
                  <div
                    class="ltFormRadioControlInner purchase-shopping-now PurchaseIntent"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader purchase-shopping-now PurchaseIntent"
                    ></div>
                    <label
                      :class="{selected: 'purchase-shopping-now' === this.$store.state.PurchaseIntent}"
                      for="purchase-shopping-nowPurchaseIntent"
                      tabindex="0"
                      ><input
                        type="radio"
                        name="PurchaseIntent"
                        id="purchase-shopping-nowPurchaseIntent"
                        class="ltFormRadioButton purchase-shopping-now PurchaseIntent"
                        for="purchase-shopping-nowPurchaseIntent"
                        value="purchase-shopping-now"
                        v-model="PurchaseIntent"
                      /><i class="ltFormRadioIcon PurchaseIntent"></i>
                      <div>
                        I’m shopping &amp; am considering a few options
                      </div></label
                    >
                  </div>
                </div>
                <div
                  class="ltFormRadioControl ltFormRadioControlpurchase-within-two-months PurchaseIntent"
                >
                  <div
                    class="ltFormRadioControlInner purchase-within-two-months PurchaseIntent"
                  >
                    <div
                      class="ltFormRadioControlEnumHeader purchase-within-two-months PurchaseIntent"
                    ></div>
                    <label
                      :class="{selected: 'purchase-within-two-months' === this.$store.state.PurchaseIntent}"
                      for="purchase-within-two-monthsPurchaseIntent"
                      tabindex="0"
                      ><input
                        type="radio"
                        name="PurchaseIntent"
                        id="purchase-within-two-monthsPurchaseIntent"
                        class="ltFormRadioButton purchase-within-two-months PurchaseIntent"
                        for="purchase-within-two-monthsPurchaseIntent"
                        value="purchase-within-two-months"
                        v-model="PurchaseIntent"
                      /><i class="ltFormRadioIcon PurchaseIntent"></i>
                      <div>Within next couple months</div></label
                    >
                  </div>
                </div>
                <div class="ltFormSubtext PurchaseIntent"></div>
              </div>
            </div>
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
  name: "Screen6",
  computed: {
    PurchaseIntent: {
      get() {
        return this.$store.state.PurchaseIntent;
      },
      set(value) {
        this.$store.commit("setPurchaseIntent", {
          PurchaseIntent: value,
        });
        this.$router.push("/7");
      },
    },
  },
};
</script>

<style></style>
