<script setup lang="ts">
const props = defineProps<{
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  status: 'online' | 'offline' | 'away' | 'busy';
}>();

const indicatorClass = computed(() => {
  return {
    'IndicatorSizeXs': props.size === 'xs',
    'IndicatorSizeSm': props.size === 'sm',
    'IndicatorSizeMd': props.size === 'md',
    'IndicatorSizeLg': props.size === 'lg',
    'IndicatorSizeXl': props.size === 'xl',
    'IndicatorSize2xl': props.size === '2xl',
  };
});

const indicatorStatus = computed(() => {
  return {
    'IndicatorStatusOnline': props.status === 'online',
    'IndicatorStatusOffline': props.status === 'offline',
    'IndicatorStatusAway': props.status === 'away',
    'IndicatorStatusBusy': props.status === 'busy',
  };
});

</script>

<template>
  <div class="Indicator" :class="[indicatorClass, indicatorStatus]"></div>
</template>

<style lang="scss" scoped>
.Indicator {
  position: absolute;
  z-index: 10;
  right: 0;
  bottom: 0;
  background: #12B76A;
  border: 1.5px solid #FFFFFF;
  border-radius: 50px;

  &Status {
    &Online {
      background: #12B76A;
    }
    &Offline {
      background: #E5E7F2;
    }
    &Away {
      background: #FBBF24;
    }
    &Busy {
      background: #EF4444;
    }
  }

  &Size {
    &Xs {
      width: 8px;
      height: 8px;
    }

    &Sm {
      width: 10px;
      height: 10px;
    }

    &Md {
      width: 12px;
      height: 12px;
    }

    &Lg {
      width: 14px;
      height: 14px;
    }

    &Xl {
      width: 16px;
      height: 16px;
    }

    &2xl {
      width: 18px;
      height: 18px;
    }
  }
}
</style>