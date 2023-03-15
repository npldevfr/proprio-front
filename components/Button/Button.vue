<script setup lang="ts">
import {Icon} from "@iconify/vue";


const props = withDefaults(defineProps<{
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  hierarchy: 'primary' | 'secondary-color' | 'secondary-gray' | 'tertiary-gray' | 'tertiary-color' | 'link-color' | 'link-gray';
  icon?: 'leading' | 'trailing' | 'only';
  iconName?: string;
  destructive?: boolean;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}>(), {size: 'md', hierarchy: 'primary'});

const emits = defineEmits(['action']);
const haveClicked = () => {
  if (!props.disabled || !props.loading) return emits('action');
};

const buttonClass = computed(() => {
  return {
    'ButtonSizeSm': props.size === 'sm',
    'ButtonSizeMd': props.size === 'md',
    'ButtonSizeLg': props.size === 'lg',
    'ButtonSizeXl': props.size === 'xl',
    'ButtonSize2xl': props.size === '2xl',
    'ButtonIconLeading': props.icon === 'leading',
    'ButtonIconTrailing': props.icon === 'trailing',
    'ButtonIconOnly': props.icon === 'only',
    'ButtonHierarchyPrimary': props.hierarchy === 'primary',
    'ButtonHierarchySecondaryColor': props.hierarchy === 'secondary-color',
    'ButtonHierarchySecondaryGray': props.hierarchy === 'secondary-gray',
    'ButtonHierarchyTertiaryColor': props.hierarchy === 'tertiary-color',
    'ButtonHierarchyTertiaryGray': props.hierarchy === 'tertiary-gray',
    'ButtonHierarchyLinkColor': props.hierarchy === 'link-color',
    'ButtonHierarchyLinkGray': props.hierarchy === 'link-gray',
    'ButtonDestructive': props.destructive,
    'ButtonDisabled': props.disabled,
    'ButtonLoading': props.loading,
    'ButtonFullWidth': props.fullWidth,
  };
});

</script>

<template>
  <button @click="haveClicked" :disabled="disabled" type="button" class="Button" :class="[buttonClass]">
    <Icon v-if="props.icon === 'leading'" :icon="iconName"/>
    <slot v-if="props.icon !== 'only'"/>
    <Icon v-if="props.icon === 'only'" :icon="iconName" class="ButtonIconOnly"/>
    <Icon v-if="props.icon === 'trailing'" :icon="iconName"/>
    <UtilsSpinnerIcon v-if="props.loading"/>
  </button>
</template>

<style lang="scss">
.ButtonDestructive.ButtonHierarchyTertiaryColor,
.ButtonDestructive.ButtonHierarchyTertiaryGray,
.ButtonDestructive.ButtonHierarchyLinkGray,
.ButtonDestructive.ButtonHierarchyLinkColor {
  color: #B42318;
  background: transparent;
  border: 1px solid transparent;
}

.ButtonDestructive.ButtonHierarchySecondaryGray {
  background: #FFFFFF;
  border: 1px solid #FDA29B;
  color: #B42318;
}

.ButtonDestructive.ButtonHierarchySecondaryColor {
  background: #FEF3F2;
  color: #B42318;
  border: 1px solid #FEF3F2;
}

.ButtonDestructive.ButtonHierarchyPrimary {
  &:hover {
    background: #B42318;
    color: #FFFFFF;
  }

  &:active {
    background: #B42318;
    color: #FFFFFF;
  }
}


.Button {
  box-sizing: border-box;
  transition: background-color, color 0.2s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  font-weight: 600;
  color: #FFFFFF;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &Icon {

    &Only {
      aspect-ratio: 1/1;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &Disabled {
    background: #E5E7EB !important;
    border: 1px solid #E5E7EB !important;
    color: #9CA3AF !important;
    cursor: not-allowed;
  }

  &Size {

    &Sm {
      padding: 8px 14px;
      font-size: 14px;
      line-height: 20px;
      height: 36px;
    }

    &Md {
      padding: 10px 16px;
      font-size: 14px;
      line-height: 20px;
      height: 40px;
    }

    &Lg {
      padding: 10px 18px;
      font-size: 16px;
      line-height: 24px;
      height: 44px;
    }

    &Xl {
      padding: 12px 20px;
      font-size: 16px;
      line-height: 24px;
      height: 48px;
    }

    &2xl {
      padding: 16px 28px;
      font-size: 18px;
      line-height: 28px;
      height: 56px;
    }

  }

  &FullWidth {
    width: 100%;
  }

  &Hierarchy {

    &Primary {
      background: var(--primary);
      border: 1px solid var(--primary);;
      color: var(--primary-color);

      &:active {
        background: var(--primary-hover);
        border: 1px solid var(--primary-hover);
      }

      &:focus {
        background: var(--primary-hover);
        border: 1px solid var(--primary-hover);
      }
    }

    &SecondaryColor {
      background: #F9F5FF;
      border: 1px solid #F9F5FF;
      color: var(--primary);

      &:hover {
        background: #EDE6FF;
        border: 1px solid #EDE6FF;
      }

      &:active {
        background: #E0D7FF;
        border: 1px solid #E0D7FF;
      }

      &:focus {
        background: #EDE6FF;
        border: 1px solid #EDE6FF;
      }

      .ButtonDestructive {
        background: #FEF3F2;
        border: 1px solid #FEF3F2;
        color: #B42318;

        &:hover {
          background: #FDE8E6;
          border: 1px solid #FDE8E6;
        }

        &:active {
          background: #FCDAD9;
          border: 1px solid #FCDAD9;
        }

        &:focus {
          background: #FDE8E6;
          border: 1px solid #FDE8E6;
        }

      }
    }

    &SecondaryGray {
      background: #FFFFFF;
      color: #344054;
      border: 1px solid #D0D5DD;

      &:hover {
        background: #F9FAFC;
        border: 1px solid #D0D5DD;
      }

      &:active {
        background: #F3F4F6;
        border: 1px solid #D0D5DD;
      }

      &:focus {
        background: #F9FAFC;
        border: 1px solid #D0D5DD;
      }
    }

    &TertiaryColor {
      background: transparent;
      border: 1px solid transparent;
      color: var(--primary);
    }

    &TertiaryGray {
      background: transparent;
      border: 1px solid transparent;
      color: #667085;
    }

    &LinkColor {
      padding: 0;
      height: auto;
      background: transparent;
      border: 1px solid transparent;
      color: var(--primary);
    }

    &LinkGray {
      padding: 0;
      height: auto;
      background: transparent;
      border: 1px solid transparent;
      color: #667085;
    }
  }

  &Destructive {
    background: #B42318;
    border: 1px solid #B42318;
    color: #FFFFFF;

    &:hover {
      background: #9D1E16;
      color: #FFFFFF;
      border: 1px solid #9D1E16;
    }

  }
}

</style>