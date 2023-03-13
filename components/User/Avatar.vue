<script lang="ts" setup>
const {username, avatar_url, text, size = "md", placeholder} = defineProps<{
  username: string;
  avatar_url?: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  placeholder?: boolean;
  text?: boolean;
}>();

const avatarClass = computed(() => {
  return {
    'AvatarSizeXs': size === 'xs',
    'AvatarSizeSm': size === 'sm',
    'AvatarSizeMd': size === 'md',
    'AvatarSizeLg': size === 'lg',
    'AvatarSizeXl': size === 'xl',
    'AvatarSize2xl': size === '2xl',
  };
});

const makeInitials = computed(() => {
  if (!username) return '';

  // Split the string into words and reduce it to one word
  const initials = username.match(/\b\w/g) || [];
  return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
});


</script>

<template>
  <div class="Avatar" :class="avatarClass">
    {{ makeInitials }}
    <img v-if="avatar_url && !text" :src="avatar_url" :alt="username" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.Avatar {
  background: #F9F5FF;
  border-radius: 200px;
  font-weight: 500;
  line-height: 28px;
  color: #6E7191;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 1rem;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }

  :focus {
    outline: none;
  }

  &Size {
    &Xs {
      width: 24px;
      height: 24px;
    }

    &Sm {
      width: 32px;
      height: 32px;
    }

    &Md {
      width: 40px;
      height: 40px;
    }

    &Lg {
      width: 48px;
      height: 48px;
    }

    &Xl {
      width: 56px;
      height: 56px;
    }

    &2xl {
      width: 64px;
      height: 64px;
    }

  }
}
</style>