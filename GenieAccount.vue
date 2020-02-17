<template>
  <div>
    <h1 class="title">Genie Account</h1>
    <div class="inputForm">
      <form @submit.prevent="addData">
        <input
          class="input"
          type="text"
          v-model="inputData"
          placeholder="Data"
          ref="answer"
        />
        <input
          class="input"
          type="text"
          v-model="inputProduct"
          placeholder="Product"
          ref="answer"
        />
        <input
          class="input"
          type="number"
          v-model="inputRevenue"
          placeholder="Revenue"
          ref="answer"
        />
        <button class="button" type="submit">submit</button>
      </form>
    </div>
    <div>
      <account-component v-bind="inputString"></account-component>
    </div>
  </div>
</template>

<script>
import AccountComponent from './component/AccountComponent';
export default {
  data() {
    return {
      inputData: '',
      inputProduct: '',
      inputRevenue: ''
    };
  },
  methods: {
    addData() {
      var inputString =
        '[' +
        this.inputData +
        ',' +
        this.inputProduct +
        ',' +
        this.inputRevenue +
        ']';
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
  width: '200px';
  background: '';
  height: '';
  display: '';
  text-align: center;
}
.inputForm {
  text-align: center;
}
</style>
