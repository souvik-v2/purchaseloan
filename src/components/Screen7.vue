<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer PurchasePrice PurchasePrice"
        >
          <div class="ltFormExplain PurchasePrice"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltRange PurchasePrice">
              <div class="ltFormQuestion PurchasePrice">
                <span>What is the estimated purchase price?</span>
              </div>
              <div class="ltFormGroupContentRange">
                <div class="ltFormControlRange PurchasePrice">
                  <div class="ltFormRangeFeedback PurchasePrice">
                    ${{min}} to ${{max}}
                  </div>
                  <div>
                    <input
                      type="range"
                      id="PurchasePrice"
                      class="ltFormRange PurchasePrice"
                      name="PurchasePrice"
                      min="0" max="32" step="1"
                      :style="style"
                      v-model="PurchasePrice"
                    />
                  </div>
                  <div class="ltFormRangeRange PurchasePrice">
                    <div class="lowerRange PurchasePrice">$0</div>
                    <div class="upperRange PurchasePrice">$2M+</div>
                    <div style="clear: both;"></div>
                  </div>
                </div>
                <div class="ltFormSubtext undefined"></div>
              </div>
            </div>
          </div>
          <div class="ltFormButtonContainer">
            <button
              type="submit"
              style="padding: 0px; height: 0px; width: 0px; float: left; border: none;"
            ></button
            ><a class="ltFormButton PurchasePrice" @click="this.$router.push('/8')"
              >
              <div class="ltFormActionText PurchasePrice">Continue</div></a
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
  name: "Screen7",
  computed: {
    PurchasePrice: {
      get() {
        return this.$store.state.PurchasePrice;
      },
      set(value) {
        this.$store.commit("setPurchasePrice", {
          PurchasePrice: value,
        });
      },
    },
    min() {
      return (this.$store.state.PurchasePrice*10000)+1;
    },
    max() {
      return (this.$store.state.PurchasePrice*10000)+10000;
    },
    style() {
      return `--min:0; --max:32; --val:${this.$store.state.PurchasePrice || 15}`;
    }
  },
};
</script>

<style></style>
