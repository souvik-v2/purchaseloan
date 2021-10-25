<template>
    <button class="ltFormButtonBack" @click="navigatePrev()" v-show="!isFirst()">&lt;</button>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    isFirst() {
      return this.$route.name === "Screen0";
    },
    navigatePrev() {
      if (this.$route.name != "Screen0") 
        this.$router.back();
    },
  },
};
</script>

<style>
.ltFormButtonBack {
  max-width: 110px;
}
</style>
