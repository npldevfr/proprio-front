<script lang="ts" setup>

</script>

<template>
  <Story title="Toast" :layout="{type: 'grid', width: '40%'}" icon="mdi:toaster">

    <Variant title="Default">
      <Toast :toast-props="{data: { content: 'hello world' }}"/>
    </Variant>
  </Story>
</template>
