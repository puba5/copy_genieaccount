<template>
  <div>
    <tr>
      <td>{{ record.product }}</td>
      <td>{{ record.price }}</td>
      <td>{{ record.remarks }}</td>
      <td>
        <button class="delete-button" @click="deleteIt">delete</button>
      </td>
      <td>
        <button class="edit-button" @click="editIt">edit</button>
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
    deleteIt: function() {
      this.$emit('delete-it');
    },
    editIt: function() {
      this.$emit('edit-it');
    },
  },
};
</script>
<style scoped></style>
