<script setup lang="ts">
import AppModal from './AppModal.vue';

const emit = defineEmits<{
  cancel: [];
  delete: [];
}>();

function handleCancel() {
  emit('cancel');
}

function handleDelete() {
  emit('delete');
}
</script>

<template>
  <AppModal>
    <template #header>
      <p class="heading">Delete Confirmation</p>
    </template>

    <template #body>
      Are you sure you want to delete this resource? This cannot be undone.
    </template>

    <template #footer>
      <div class="controls">
        <button @click="handleCancel" class="cancel">Cancel</button>

        <button @click="handleDelete" class="delete">Delete</button>
      </div>
    </template>
  </AppModal>
</template>


<style scoped>
.heading {
  font-weight: 600;
}

.controls {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.cancel,
.delete {
  border: none;
  background: none;
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 700;
}

.delete {
  background: red;
  color: #fff;
}
</style>