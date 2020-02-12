<template>
  <div>
    <section>
      <h2>AccountTable</h2>
      <table>
        <caption>
          AccountTable
        </caption>
        <thead>
          <tr>
            <th>date</th>
            <!--change 'product' to 'client' OR add a subitem 'client'-->
            <th>product</th>
            <th>revenue</th>
          </tr>
        </thead>
        <tbody>
          <!--v-for사용할 계획-->
          <tr>
            <td>{{ inputData.date }}</td>
            <td>{{ inputData.product }}</td>
            <td>{{ inputData.revenue }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AccountComponent',
  data() {
    return {
      inputData: {
        date: [],
        product: [],
        revenue: []
      }
    };
  },
  methods: {
    bindData() {
      /*    
      최상위 컴포넌트에서 props를 통해 내려온 데이터들을 this.inputData에 입력해서 저장된 값들을 화면에 표시되는 값 this.inputData.xxxx에 맞게 바인딩
      */
    }
  },
  mounted() {
    this.bindData();
  }
};
</script>
<style scoped></style>
