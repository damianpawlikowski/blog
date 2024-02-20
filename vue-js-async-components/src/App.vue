<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";

const DeleteConfirmationModal = defineAsyncComponent(() => import('./DeleteConfirmationModal.vue'));

const deleteModalOpen = ref(false);
const resourceExists = ref(true);

function handleDelete() {
  deleteModalOpen.value = true;
}

function handleCancel() {
  deleteModalOpen.value = false;
}

function handleDeleteConfirmation() {
  resourceExists.value = false;
  deleteModalOpen.value = false;
}
</script>

<template>
  <DeleteConfirmationModal @cancel="handleCancel" @delete="handleDeleteConfirmation" v-if="deleteModalOpen" />

  <div class="resources">
    <div v-if="resourceExists" class="resource">
      <p>Important resource</p>

      <button class="delete" @click="handleDelete">
        Delete
      </button>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style scoped>
.delete {
  border: none;
  background: none;
  cursor: pointer;
  background: red;
  color: #fff;
  padding: 8px 12px;
  border-radius: 10px;
  font-weight: 700;
}

.resources {
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.resource {
  display: flex;
  gap: 16px;
  align-items: center;
  font-weight: 500;
}
</style>

