<script lang="ts" setup>

function initState() {
  return {
    username: "Nathan Guillet",
    avatar_url: "https://avatars.githubusercontent.com/u/10214025?v=4",
    text: true,
    size: "md",
    status: "online",
  }
}

const statusOptions = {
  online: "online",
  offline: "offline",
  away: "away",
  busy: "busy",
}

const sizeOptions = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
}


</script>

<template>
  <Story>
    <Variant title="test" :init-state="initState" auto-props-disabled>

      <template #controls="{ state }">
        <HstSelect v-model="state.status" title="Status" :options="statusOptions"/>
        <HstSelect v-model="state.size" title="Size" :options="sizeOptions"/>
        <HstCheckbox v-model="state.text" title="Text"/>

      </template>

      <template #default="{ state }">
        <UserAvatar :username="state.username" :avatar_url="state.avatar_url"
                    :text="state.text" :size="state.size">
          <StatusIndicator :status="state.status" :size="state.size"/>
        </UserAvatar>
      </template>

    </Variant>
  </Story>
</template>
