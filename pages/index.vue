<script lang="ts" setup>
const userAvatar = reactive({
  username: "Nathan Guillet",
  avatar_url: "https://avatars.githubusercontent.com/u/10214025?v=4",
  text: true,
  size: "md",
});

const status = reactive({
  status: "online",
});
</script>

<template>
  <UserAvatar :username="userAvatar.username" :avatar_url="userAvatar.avatar_url"
              :text="userAvatar.text" :size="userAvatar.size">
    <StatusIndicator :status="status.status" :size="userAvatar.size"/>
  </UserAvatar>
</template>
