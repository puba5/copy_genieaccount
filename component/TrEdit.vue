<template>
  <div>
    <tr>
      <td>{{ value.product }}</td>
      <td>{{ value.price }}</td>
      <td>{{ value.remarks }}</td>
      <td>
        <button class="delete-button" @click="deleteValue">delete</button>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  name: 'TrEdit',
  props: ['value'],
  data() {
    return {};
  },
  methods: {
    deleteRecord() {}
  }
};
</script>
<style scoped></style>
