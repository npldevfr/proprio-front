<script setup lang="ts">
const props = defineProps<{
  separatorBetweenSlots?: boolean;
}>();

const groupClasses = computed(() => ({
  'ButtonGroupSeparatorBetweenSlots': props.separatorBetweenSlots,
}));

</script>

<template>
  <div class="ButtonGroup" :class="groupClasses">
    <slot />
  </div>
</template>

<style lang="scss" >
.ButtonGroup {
  background: #D0D5DD;
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  border-radius: 9px;

  &SeparatorBetweenSlots {
    padding: 1px;

    > * {
      margin-right: 1px;
    }

    > *:last-child {
      margin-right: 0;
    }
  }

  > * {
    border-radius: 0;
  }

  > *:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  > *:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
}
</style>