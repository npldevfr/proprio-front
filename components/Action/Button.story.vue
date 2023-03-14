<script setup lang="ts">
import { logEvent } from 'histoire/client'

const state = reactive({
  fullWidth: false,
  size: 'md',
  hierarchy: 'primary',
  icon: 'leading',
  iconName: 'material-symbols:person-3-rounded',
  disabled: false,
  loading: false,
  destructive: false,
})
</script>

<template>
  <Story title="Button" icon="tabler:rectangle-filled" :layout="{type: 'grid', width: 250}">

    <template #controls>
      <HstSelect v-model="state.size" title="Size" :options="['sm', 'md', 'lg', 'xl', '2xl']"/>
      <HstSelect v-model="state.icon" title="Icon" :options="['leading' ,'trailing' , 'only']"/>
      <HstSelect v-model="state.hierarchy" title="Hierarchy"
                 :options="['primary' , 'secondary-color', 'secondary-gray','tertiary-gray' , 'tertiary-color' , 'link-color' , 'link-gray']"/>
    </template>

    <Variant title="Default" >
      <ActionButton :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="state.iconName"
                    :full-width="state.fullWidth" :disabled="state.disabled" :loading="state.loading"
                    :destructive="state.destructive" @action="logEvent('clicked', $event)">
        Default
      </ActionButton>
    </Variant>

    <Variant title="Full width">
      <ActionButton :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="state.iconName"
                    :full-width="true" :disabled="state.disabled" :loading="state.loading"
                    :destructive="state.destructive" @action="logEvent('clicked', $event)">
        Full width
      </ActionButton>
    </Variant>

    <Variant title="Disabled">
      <ActionButton :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="state.iconName"
                    :full-width="state.fullWidth" :disabled="true" :loading="state.loading"
                    :destructive="state.destructive" @action="logEvent('clicked', $event)">
        Disabled
      </ActionButton>
    </Variant>

    <Variant title="Loading">
      <ActionButton :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="state.iconName"
                    :full-width="state.fullWidth" :disabled="state.disabled" :loading="true"
                    :destructive="state.destructive" @action="logEvent('clicked', $event)">
        Loading
      </ActionButton>
    </Variant>

    <Variant title="Destructive">
      <ActionButton :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="'material-symbols:delete'"
                    :full-width="state.fullWidth" :disabled="state.disabled" :loading="state.loading"
                    :destructive="true" @action="logEvent('clicked', $event)">
        Destructive
      </ActionButton>
    </Variant>

    <Variant title="Destructive disabled">
      <ActionButton :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="'material-symbols:delete'"
                    :full-width="state.fullWidth" :disabled="true" :loading="state.loading"
                    :destructive="true" @action="logEvent('clicked', $event)">
        Destructive disabled
      </ActionButton>

    </Variant>

    <Variant title="Destructive loading">
      <ActionButton :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="'material-symbols:delete'"
                    :full-width="state.fullWidth" :disabled="state.disabled" :loading="true"
                    :destructive="true" @action="logEvent('clicked', $event)">
        Destructive loading
      </ActionButton>
    </Variant>

    <Variant title="Destructive full width">
      <ActionButton :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="'material-symbols:delete'"
                    :full-width="true" :disabled="state.disabled" :loading="state.loading"
                    :destructive="true" @action="logEvent('clicked', $event)">
        Destructive full width
      </ActionButton>
    </Variant>




  </Story>
</template>
