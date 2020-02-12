<template>
  <div>
    <h1 class="title">title</h1>
    <!--alert of 'out of stock, regular events, production deadline, etc'
        <button class="alert_button" @click="onClick">alert</button>
      -->
    <div>
      <!--revenue resistration button-->
      <form @submit.prevent="onsubmitForm">
        <input ref="answer" v-model="inputData" />
        <button type="submit">submit</button>
      </form>
    </div>
    <div>
      표
      <account-componet></account-componet>
      <!--<stock-component></stock-component>-->
    </div>
  </div>
</template>

<script>
import AccountComponent from './AccountComponent';
export default {
  data() {
    return {
      inputData: ''
    };
  },
  methods: {}
};
</script>
<style scoped>
.title {
  width: '';
  background: '';
  height: '';
  display: '';
}
</style>
