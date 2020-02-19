<template>
  <div>
    <tr>
      <td>{{ record.product }}</td>
      <td>{{ record.price }}</td>
      <td>{{ record.remarks }}</td>
      <td>
        <button class="delete-button" @click="deleterecord">delete</button>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  name: 'TrEdit',
  props: ['record'],
  data() {
    return {};
  },
  methods: {
    deleterecord() {
      this.$emit('delete-record');
    },
  },
};
</script>
<style scoped></style>
