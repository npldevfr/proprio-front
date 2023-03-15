<script lang="ts" setup>
const {toast} = useToast()
</script>

<template>
  <Button @action="toast('hello my friend', 2000)">
    click me
  </Button>
</template>
