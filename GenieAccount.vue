<template>
  <div>
    <h1 class="title">Genie Account</h1>
    <!--alert of 'out of stock, regular events, production deadline, etc'
        <button class="alert_button" @click="onClick">alert</button>
    -->
    <div class="inputForm">
      <!--revenue resistration button-->
      <form @submit.prevent="addData">
        <input ref="answer" v-model="inputData" placeholder="data">
        <input ref="answer" v-model="inputProduct" placeholder="product">
        <input ref="answer" v-model="inputRevenue" placeholder="revenue">
        <button type="submit">submit</button>
      </form>
    </div>
    <div>
      <account-component></account-component>
      <!--<stock-component></stock-component>-->
    </div>
  </div>
</template>

<script>
import AccountComponent from "./component/AccountComponent";
export default {
  data() {
    return {
      inputData: "",
      inputProduct: "",
      inputRevenue: ""
    };
  },
  methods: {
    addData() {
      var inputString =
        "[" +
        this.inputData +
        "," +
        this.inputProduct +
        "," +
        this.inputRevenue +
        "]";
      localStorage.setItem(this.inputData, inputString);
    }
  },
  components: {
    AccountComponent: AccountComponent
  }
};
</script>
<style scoped>
.title {
  width: "200px";
  background: "";
  height: "";
  display: "";
  text-align: center;
}
.inputForm {
  text-align: center;
}
</style>
