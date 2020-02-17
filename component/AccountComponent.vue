<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>date</th>
          <th>product</th>
          <th>revenue</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="data in inputData">
          <tr>
            <td>{{ data.date }}</td>
            <td>{{ data.product }}</td>
            <td>{{ data.revenue }}</td>
            <td><button>delete</button></td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AccountComponent',
  props: ['inputString'],
  data() {
    return {
      inputData: [(date = ''), (product = ''), (revenue = 0)]
    };
  },
  methods: {
    bindData() {}
  },
  mounted() {
    this.bindData();
  }
};
</script>
<style scoped></style>
