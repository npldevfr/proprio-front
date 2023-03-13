<script lang="ts" setup>
import {Icon} from "@iconify/vue";

const props = defineProps<{
  username: string;
  avatar_url?: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  placeholder?: boolean;
  text?: boolean;
  hover?: boolean;
  editable?: boolean;
}>();

const avatarClass = computed(() => {
  return {
    'AvatarSizeXs': props.size === 'xs',
    'AvatarSizeSm': props.size === 'sm',
    'AvatarSizeMd': props.size === 'md',
    'AvatarSizeLg': props.size === 'lg',
    'AvatarSizeXl': props.size === 'xl',
    'AvatarSize2xl': props.size === '2xl',
    'AvatarHover': props.hover,
  };
});

const color = computed(() => useGenerateColor(props.username));

const isHoverAvatar = ref(false);


</script>

<template>
  <div class="Avatar" :class="[avatarClass]" :style="{ backgroundColor: color }" @mouseenter="isHoverAvatar = true"
       @mouseleave="isHoverAvatar = false">
    <Transition>
      <div v-if="isHoverAvatar && editable" class="AvatarEditable">
        <Icon icon="uil:pen"/>
      </div>
    </Transition>
    <img v-if="avatar_url && !placeholder && !text" :src="avatar_url" :alt="username"/>
    <div v-else-if="text" v-text="username[0]"/>
    <Icon icon="uil:user" v-else-if="placeholder"/>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.Avatar {
  border-radius: 200px;
  font-weight: 500;
  line-height: 28px;
  word-break: keep-all;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-transform: uppercase;

  &Hover {
    cursor: pointer;
  }

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

  &Editable {
    position: absolute;
    z-index: 1;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
  }

  &Size {
    &Xs {
      width: 24px;
      height: 24px;
      font-size: 12px;
    }

    &Sm {
      width: 32px;
      height: 32px;
      font-size: 14px;
    }

    &Md {
      width: 40px;
      height: 40px;
      font-size: 16px;
    }

    &Lg {
      width: 48px;
      height: 48px;
      font-size: 18px;
    }

    &Xl {
      width: 56px;
      height: 56px;
      font-size: 20px;
    }

    &2xl {
      width: 64px;
      height: 64px;
      font-size: 22px;
    }

  }
}
</style>