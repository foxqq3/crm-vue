<script>
export default {
  name: "AppInput",
  data() {
    return {
      test: false,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "Start typing...",
    },
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: null,
    },
    modelValue: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: Boolean,
      default: false,
    },
    minLength: {
      type: Number,
      default: null,
    },
    maxLength: {
      type: Number,
      default: null,
    },
    idFor: {
      type: String,
      default: "",
    },
    statInput: {
      type: String,
      default: "default",
      validator(value) {
        return ["success", "error", "active", "default"].includes(
          value
        );
      },
    },
  },

  computed: {},

  methods: {
    inputEventHandler(event) {
      this.$emit("update:modelValue", event.target.value);
    },

    focusEventHandler(event) {
      this.test = true;
    },

    invalidEventHandler(event){
      console.log(event)
    }
  },

  emits: ["update:modelValue", "focus"],
};
</script>

<template>
  <div :class="$style.container">
    <label :for="idFor" :class="$style.label">
      {{ label }}
    </label>
    <div
      :class="[
        [$style['input-container']],
        {
          [$style['input-container_active']]: test === true,
        },
      ]"
    >
      <div :class="$style['append-slot']">
        <slot name="append"></slot>
      </div>
      <input
        :class="$style.input"
        @invalid="invalidEventHandler"
        @focus="focusEventHandler"
        @blur="blurEventHandler"
        @input="inputEventHandler"
        :autocomplete="autocomplete"
        :id="idFor"
        :placeholder="placeholder"
        :type="type"
        :value="modelValue"
        :required="required"
        :minlength="minLength"
        :maxlength="maxLength"
      />
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
  color: color("waterloo");
}

.input-container {
  color: green;

  &_active {
    color: plum;
  }

  &_invalid {
    color: fuchsia;
  }
}

.append-slot {
}

.input {
}

.prepend-slot {
}

.error {
}
</style>
