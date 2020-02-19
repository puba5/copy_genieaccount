<template>
  <div>
    <h1 class="title">Genie Account</h1>
    <h2 class="title-message">입력하세요</h2>
    <div class="inputForm">
      <form @submit.prevent="addData">
        <input
          class="input"
          type="text"
          v-model="value.product"
          placeholder="Product"
          ref="answer"
        />
        <input
          class="input"
          type="number"
          v-model="value.price"
          placeholder="Price"
          ref="answer"
        />
        <input
          class="input"
          type="text"
          v-model="value.remarks"
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
          <template v-for="(record, i) in records">
            <tr-edit
              :key="i"
              :record="record"
              @delete-it="deleteRecord(i)"
              @edit-it="editRecord(i)"
            ></tr-edit>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TrEdit from './component/TrEdit';
export default {
  computed: { allRecords() {} },
  data() {
    return {
      records: [],
      value: {
        product: '',
        price: '',
        remarks: '',
      },
    };
  },
  methods: {
    addData() {
      //console.log('addData실행전');
      this.records.unshift({ ...this.value });
    },
    deleteRecord(i) {
      this.records.splice(i, 1);
    },
    editRecord() {},
  },

  components: {
    'tr-edit': TrEdit,
  },
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
