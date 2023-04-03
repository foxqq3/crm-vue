<script>
export default {
  name: 'AppInput',
  props: {
    placeholder: {
      type: String,
      default: 'Start typing...'
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: null
    },
    modelValue: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    minLength: {
      type: Number,
      default: null
    },
    maxLength: {
      type: Number,
      default: null
    },
    idFor: {
      type: String,
      default: ''
    },
    statInput: {
      type: String,
      default: 'default',
      validator(value) {
        return ['success', 'error', 'active', 'disabled'].includes(value)
      }
    }
  },

  methods: {
    inputEventHandler(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  },

  emits: ['update:modelValue'],

  computed: {
    inputStyle(){

    }
  },


}
</script>

<template>
  <div :class="$style.container">
    <label :for="idFor" :class="$style.label">
      {{ label }}
    </label>
    <div :class="{ [$style['input-container']]: statInput }">
      <div :class="$style['append-slot']">
        <slot name="append"></slot>
      </div>
      <input :class="$style.input" :id="idFor" :placeholder="placeholder" :type="type" :value="modelValue"
        :required="required" :minlength="minLength" :maxlength="maxLength" @input="inputEventHandler">
      <div :class="$style['prepend-slot']">
        <slot name="prepend"></slot>
      </div>
    </div>
    <div v-if="error" :class="$style.error">
      {{ error }}
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  color: blue;
}

.label {
  color: color('waterloo');
}

.input-container {
  color: yellow;

  &_active {
    color: plum;
  }

  &_error {
    color: fuchsia;
  }

}

.append-slot {}

.input {}

.prepend-slot {}

.error {}
</style>
