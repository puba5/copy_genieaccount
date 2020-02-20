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
          type="text"
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

    <!--table-->
    <div>
      <table class="table">
        <thead class="tr-head">
          <tr>
            <th>시간</th>
            <th>상품</th>
            <th>가격</th>
            <th>비고</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody class="tr-body">
          <template v-for="(record, i) in records">
            <tr-edit
              class="tr-eli"
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
.table {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  table-layout: fixed;
  word-break: break-all;
  width: 600px;
}
.tr-head {
  padding: 20px;
  font-size: 1.3em;
  background-color: #1d9fe6;
  margin-bottom: 2px;
  color: #3e5252;
}
.tr-body {
  padding: 20px;
  font-size: 1.3em;
  background-color: #aa20816e;
  margin-bottom: 2px;
  color: #3e5252;
}
</style>
