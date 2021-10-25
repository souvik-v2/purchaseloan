<template>
  <router-view/>
</template>
<script>
export default {
  name: 'App',
  beforeCreate() { 
    this.$store.commit('initialiseStore');
  },
}
</script>
<style>
.Template, .ltFormAppContainer {
  background-color: #101f30;
}
.ltFormCheckBoxControl.WhoDoYouBankWith label {
      padding-left: 23px;
}
.ltFormButtonBack {
    max-width: 80px;
    font-weight: 600;
    font-size: 60px;
    background-color: #101f30;
    color: #fff;
    border: 2px solid #101f30;
    cursor: pointer;
    margin: 20px 10px;
}
</style>
