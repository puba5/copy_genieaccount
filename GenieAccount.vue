<template>
  <div>
    <h1 class="title">Genie Account</h1>
    <h2 class="title-message">입력하세요</h2>
    <div class="inputForm">
      <form @submit.prevent="addData">
        <input
          class="input"
          type="text"
          v-model="inputArray.product"
          placeholder="Product"
          ref="answer"
        />
        <input
          class="input"
          type="text"
          v-model="inputArray.price"
          placeholder="Price"
          ref="answer"
        />
        <input
          class="input"
          type="number"
          v-model="inputArray.remarks"
          placeholder="Remarks"
          ref="answer"
        />
        <button class="button" type="submit">submit</button>
      </form>
    </div>

    <!--content1-->
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>상품</th>
            <th>가격</th>
            <th>비고</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="value in allValues">
            <tr-edit :value="value" @delete-value="deleteValue()"></tr-edit>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
class array {
  constructor() {}
  data() {}
  create() {}
}
import TrEdit from './component/TrEdit';
export default {
  computed: { allValues() {} },
  data() {
    return {
      values: [],
      inputArray: new array({
        product: '',
        price: '',
        remarks: ''
      })
    };
  },
  methods: {
    addData() {
      localStorage.setItem('this.inputArray', this.inputArray);
      this.inputArray.create();
    }
  },

  components: {
    'tr-edit': TrEdit
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
.title-message {
  text-align: center;
}
.inputForm {
  text-align: center;
}
</style>
