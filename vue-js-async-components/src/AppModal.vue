<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots();
</script>

<template>
  <div class="backdrop">
    <div class="modal">
      <div v-if="slots.header" class="header">
        <slot name="header" />
      </div>

      <div v-if="slots.body" class="body">
        <slot name="body" />
      </div>


      <div v-if="slots.footer" class="footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.03);
  z-index: 10;
}

.modal {
  width: 100%;
  width: 320px;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 16px;
}

.header {
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid #e6e6e6;
  background: #fafafa;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.body {
  width: 100%;
  padding: 16px 24px;
}

.footer {
  width: 100%;
  padding: 16px 24px;
}
</style>
