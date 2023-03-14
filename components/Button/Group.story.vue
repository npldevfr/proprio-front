<script setup lang="ts">


</script>

<template>
  <Story title="Button/Group" icon="fluent:dual-screen-group-20-filled" :layout="{type: 'grid', width: 500}">
    <Variant title="Default">
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </Variant>

    <Variant title="Space between">
      <ButtonGroup :separator-between-slots="true">
        <Button hierarchy="secondary-color">Button 1</Button>
        <Button hierarchy="secondary-color">Button 2</Button>
        <Button hierarchy="secondary-color" icon="only" icon-name="material-symbols:add-sharp" />
      </ButtonGroup>
    </Variant>
  </Story>
</template>
