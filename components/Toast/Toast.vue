<script setup lang="ts">
import type { ToastOptions } from 'vue3-toastify';

const props = defineProps<{
  toastProps?: ToastOptions;
}>();

</script>

<template>
  <div class="Toast">
    {{ props.toastProps?.data?.content}}
  </div>
</template>

<style lang="scss">
.Toast {
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 34px;
  border-radius: 5px;
  width: 100%;
  color: white;
  flex-direction: row;
  justify-content: center;
  padding: 5px 10px;
  gap: 10px;
  background: var(--primary);
}

.Toastify__toast {
  padding: 0;
}

.Toastify__toast-body {
  padding: 0;
}

.Toastify__toast {
  margin-bottom: .4rem;
  padding: 0;
  box-shadow: none;
}

:root {
  --toastify-toast-max-height: none;
  --toastify-toast-min-height: none;
}
</style>