<template>
  <button type="button" class="btn" :class="classes" @click="onClick">
    <i v-if="icon_position === 'left' && icon" class="button__icon" :class="icon_classes"></i>
    {{ label }}
    <i v-if="icon_position === 'right' && icon" class="button__icon" :class="icon_classes"></i>
  </button>
</template>

<script>

export default {
  name: 'phx-button',
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'danger', 'warning', 'info'].indexOf(value) !== -1;
      },
    },
    icon: {
      type: String,
    },
    icon_position: {
      type: String,
      default: 'right',
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    classes() {
      return {
        [`btn--${this.type}`]: true,
        [`btn--${this.size}`]: true,
      };
    },
    icon_classes() {
      return {
        [`btn__icon--${this.icon_position}`]: true,
        [this.icon]: true
      }
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>

<style lang="scss">
  .btn {
    cursor: pointer;
    -webkit-touch-callout: none;
    -ms-user-select: none;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,.16);
    padding: 10px 15px;
    display: inline-flex;
    color: #fff;
    outline: 0;
    border: none;
    transition: all 0.2s ease-in-out;
    &:hover, &:focus {
      filter: brightness(110%);
      transform: scale(1.03);
    }
    &--primary {
      background-color: $primary;
    }
    &--danger {
      background-color: $danger;
    }
    &--warning {
      background-color: $warning;
    }
    &--info {
      background-color: $info;
    }
    &--small {
      font-size: 14px;
    }
    &--medium {
      font-size: 16px;
    }
    &--large {
      font-size: 18px;
    }
    &__icon {
      font-size: 0.9em;
      &--left {
        margin-right: 10px;
      }
      &--right {
        margin-left: 10px;
      }
    }
  }

</style>
