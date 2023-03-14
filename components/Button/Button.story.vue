<script setup lang="ts">
import {logEvent} from 'histoire/client'

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
  <Story title="Button/Button" icon="tabler:rectangle-filled" :layout="{type: 'grid', width: 250}">

    <template #controls>
      <HstSelect v-model="state.size" title="Size" :options="['sm', 'md', 'lg', 'xl', '2xl']"/>
      <HstSelect v-model="state.icon" title="Icon" :options="['leading' ,'trailing' , 'only']"/>
      <HstSelect v-model="state.hierarchy" title="Hierarchy"
                 :options="['primary' , 'secondary-color', 'secondary-gray','tertiary-gray' , 'tertiary-color' , 'link-color' , 'link-gray']"/>
    </template>

    <Variant title="Default">
      <Button :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="state.iconName"
              :full-width="state.fullWidth" :disabled="state.disabled" :loading="state.loading"
              :destructive="state.destructive" @action="logEvent('clicked', $event)">
        Default
      </Button>
    </Variant>

    <Variant title="Full width">
      <Button :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="state.iconName"
              :full-width="true" :disabled="state.disabled" :loading="state.loading"
              :destructive="state.destructive" @action="logEvent('clicked', $event)">
        Full width
      </Button>
    </Variant>

    <Variant title="Disabled">
      <Button :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="state.iconName"
              :full-width="state.fullWidth" :disabled="true" :loading="state.loading"
              :destructive="state.destructive" @action="logEvent('clicked', $event)">
        Disabled
      </Button>
    </Variant>

    <Variant title="Loading">
      <Button :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="state.iconName"
              :full-width="state.fullWidth" :disabled="state.disabled" :loading="true"
              :destructive="state.destructive" @action="logEvent('clicked', $event)">
        Loading
      </Button>
    </Variant>

    <Variant title="Destructive">
      <Button :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="'material-symbols:delete'"
              :full-width="state.fullWidth" :disabled="state.disabled" :loading="state.loading"
              :destructive="true" @action="logEvent('clicked', $event)">
        Destructive
      </Button>
    </Variant>

    <Variant title="Destructive disabled">

      <Button :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="'material-symbols:delete'"
              :full-width="state.fullWidth" :disabled="true" :loading="state.loading"
              :destructive="true" @action="logEvent('clicked', $event)">
        Destructive disabled
      </Button>

    </Variant>

    <Variant title="Destructive loading">
      <Button :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="'material-symbols:delete'"
              :full-width="state.fullWidth" :disabled="state.disabled" :loading="true"
              :destructive="true" @action="logEvent('clicked', $event)">
        Destructive loading
      </Button>
    </Variant>

    <Variant title="Destructive full width">
      <Button :size="state.size" :hierarchy="state.hierarchy" :icon="state.icon" :icon-name="'material-symbols:delete'"
              :full-width="true" :disabled="state.disabled" :loading="state.loading"
              :destructive="true" @action="logEvent('clicked', $event)">
        Destructive full width
      </Button>
    </Variant>


  </Story>
</template>
