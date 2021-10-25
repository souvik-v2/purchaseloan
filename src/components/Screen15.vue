<template>
  <Navigation />
  <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
      <div class="ltFormNavWrapper">
        <form id="phoenixform" class="ltFormContainer DOB DOB">
          <div class="ltFormExplain DOB">
            <a
              ><span class="ltFormExplainIcon"><i></i></span
            ></a>
          </div>
          <div class="ltEditableFormGroupContainer ">
            <div class="ltFormGroup ltMultipart DOB">
              <div class="ltFormQuestion DOB">
                <span>When were you born?</span>
              </div>
              <div>
                <div class="ltFormGroupContentMultipart">
                  <span class="ltFormControlMultiWrapper DOB"
                    ><select class="ltFormControlMulti DOB box1" name="DOB[]" v-model="month" @change="createDOB('month')"
                      ><option value="">Month</option
                      ><option v-for="index in 12" :key="index" :value="index"
                      >{{index}}</option></select
                    ></span
                  ><span class="ltFormControlMultiWrapper DOB"
                    ><select class="ltFormControlMulti DOB box2" name="DOB[]" v-model="day" @change="createDOB('day')"
                      ><option value="">Day</option
                      ><option  v-for="index in 31" :key="index" :value="index"
                      >{{index}}</option
                      ></select
                    ></span
                  ><span class="ltFormControlMultiWrapper DOB box3"
                    ><select class="ltFormControlMulti DOB box3" name="DOB[]" v-model="year" @change="createDOB('year')"
                      ><option value="">Year</option
                      >
                      <option 
                      v-for="index in 82" 
                      :key="index" 
                      :value="(index+1921)"
                      >{{(index+1921)}}
                      </option>
                      </select
                    ></span
                  >
                </div>
                <div class="ltFormValidating DOB"></div>
                <div class="ltFormSubtext DOB"></div>
              </div>
            </div>
          </div>
          <div class="ltFormButtonContainer">
            <input type="text" v-model="DOB" style="visibility: hidden;" />
            <a class="ltFormButton DOB" @click="this.$router.push('/16')"
              >
              <div class="ltFormActionText DOB">Continue</div></a
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
  name: "Screen15",
  data() {
    return {
      day: this.$store.state.DOB[0],
      month: this.$store.state.DOB[1],
      year: this.$store.state.DOB[2],
      db: [],
    }
  },
  methods: {
    createDOB(val) {
      if (val == 'day')
        this.db[0] = this.day;
      if (val == 'month')
        this.db[1] = this.month;
      if (val == 'year')
        this.db[2] = this.year;
      
      console.log(this.db);

      this.$store.commit("setDOB", {
          DOB: this.db,
        });
    }
  },
  computed: {
    DOB: {
      get() {
        return this.$store.state.DOB;
      },
      set(value) {
        this.$store.commit("setDOB", {
          DOB: value,
        });
      },
    },
  },
};
</script>

<style></style>
