<template>
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form
          id="phoenixform"
          class="ltFormContainer AnnualIncome AnnualIncome"
        >
          <div class="ltFormExplain AnnualIncome"></div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltText AnnualIncome">
              <div class="ltFormQuestion AnnualIncome">
                <span>Your home purchase search results</span>
              </div>
              <div class="ltFormGroupContentText">
                <div class="ltFormControlText AnnualIncome">
                  <ul>
                    <li v-for="(v, i) in $store.state" :key="i">
                      {{ i.replace(/([A-Z])/g, " $1").trim() }}:
                      <span>{{ Array.isArray(v) ? v.join(", ") : v }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="ltFormButtonContainer">
            <a
              class="ltFormButton AnnualIncome"
              @click="this.$router.push('/')"
            >
              <div class="ltFormActionText AnnualIncome">Back To Home</div></a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Screen20",
};
</script>

<style>
li {
  list-style: none;
  text-align: left;
  padding: 10px 0;
}
li span {
  margin: 10px;
}
</style>
