<script setup lang="ts">
const state = reactive({
  size: 'md',
  text: false,
  avatar_url: 'https://images.unsplash.com/photo-1677519398334-809b9c38e07d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  username: 'Guillet Nathan',
  status: 'online',
  placeholder: false,
  editable: false,
})
</script>

<template>
  <Story title="User/Avatar" icon="material-symbols:person-3-rounded" :layout="{type: 'grid', width: 200}">

    <template #controls>
      <HstSelect v-model="state.size" title="Size" :options="['xs', 'sm', 'md', 'lg', 'xl', '2xl']"/>
    </template>

    <Variant title="With image">
      <UserAvatar :size="state.size" :text="state.text" :avatar_url="state.avatar_url" :username="state.username"
                  :placeholder="state.placeholder"/>
    </Variant>

    <Variant title="With placeholder">
      <UserAvatar :size="state.size" :text="state.text" :avatar_url="state.avatar_url" :username="state.username"
                  :placeholder="true"/>

    </Variant>

    <Variant title="With text">
      <UserAvatar :size="state.size" :text="true" :avatar_url="state.avatar_url" :username="state.username"
                  :placeholder="state.placeholder"/>

    </Variant>

    <Variant title="With hover">
      <UserAvatar :size="state.size" :text="state.text" :avatar_url="state.avatar_url" :username="state.username"
                  :placeholder="state.placeholder" :hover="true"/>

    </Variant>

    <Variant title="With status">
      <template #controls>
        <HstSelect v-model="state.size" title="Size" :options="['xs', 'sm', 'md', 'lg', 'xl', '2xl']"/>
        <HstSelect v-model="state.status" title="Status" :options="['online', 'offline', 'away', 'busy']"/>
      </template>

      <UserAvatar :size="state.size" :text="state.text" :avatar_url="state.avatar_url" :username="state.username"
                  :placeholder="state.placeholder">
        <StatusIndicator :status="state.status" :size="state.size"/>

      </UserAvatar>

    </Variant>

    <Variant title="With status and hover">
      <template #controls>
        <HstSelect v-model="state.size" title="Size" :options="['xs', 'sm', 'md', 'lg', 'xl', '2xl']"/>
        <HstSelect v-model="state.status" title="Status" :options="['online', 'offline', 'away', 'busy']"/>
      </template>

      <UserAvatar :size="state.size" :text="state.text" :avatar_url="state.avatar_url" :username="state.username"
                  :placeholder="state.placeholder" :hover="true">
        <StatusIndicator :status="state.status" :size="state.size"/>

      </UserAvatar>

    </Variant>

    <Variant title="Editable">
      <template #controls>
        <HstSelect v-model="state.size" title="Size" :options="['xs', 'sm', 'md', 'lg', 'xl', '2xl']"/>
      </template>

      <UserAvatar :size="state.size" :text="state.text" :avatar_url="state.avatar_url" :username="state.username"
                  :placeholder="state.placeholder" :editable="true"/>
    </Variant>

    <Variant title="Editable with status">
      <template #controls>
        <HstSelect v-model="state.size" title="Size" :options="['xs', 'sm', 'md', 'lg', 'xl', '2xl']"/>
        <HstSelect v-model="state.status" title="Status" :options="['online', 'offline', 'away', 'busy']"/>
      </template>

      <UserAvatar :size="state.size" :text="state.text" :avatar_url="state.avatar_url" :username="state.username"
                  :placeholder="state.placeholder" :editable="true">
        <StatusIndicator :status="state.status" :size="state.size"/>

      </UserAvatar>
    </Variant>

  </Story>
</template>
