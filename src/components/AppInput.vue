<script>
export default {
  name: "AppInput",
  data() {
    return {
      state: "",
      valid: false,
      submitStateSave: "",
    };
  },
  props: {
    change: {
      type: String,
      default: null,
    },
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
    checkValid: {
      type: Boolean,
      default: false,
    },
  },

  computed: {},

  methods: {
    inputEventHandler(event) {
      this.$emit("update:change", event.target.value);
      this.valid = event.target.validity.valid;
      this.submitStateSave = "filled";
    },

    focusEventHandler() {
      this.submitStateSave = this.state;
      this.state = "active";
    },

    blurEventHandler(event) {
      console.log(event.target.value);
      event.target.value === ""
        ? (this.state = "")
        : (this.state = this.submitStateSave);
    },
  },

  watch: {
    checkValid() {
      console.log(this.valid);
      this.valid === true
        ? (this.state = "success")
        : (this.state = "invalid");
    },
  },

  emits: ["update:change", "update:valid"],
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
          [$style.active]: state === 'active',
          [$style.disable]: state === 'disable',
          [$style.invalid]: state === 'invalid',
          [$style.success]: state === 'success',
          [$style.filled]: state === 'filled',
        },
      ]"
    >
      <div :class="$style['append-slot']">
        <slot name="append"></slot>
      </div>
      <input
        :class="$style.input"
        @focus="focusEventHandler"
        @blur="blurEventHandler"
        @input="inputEventHandler"
        :value="change"
        :autocomplete="autocomplete"
        :id="idFor"
        :placeholder="placeholder"
        :type="type"
        :required="required"
        :minlength="minLength"
        :maxlength="maxLength"
      />
      <div :class="$style['prepend-slot']">
        <slot name="prepend"></slot>
      </div>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<style lang="scss" module>
// .container {
//   // color: blue;
// }

.label {
  color: color("waterloo");
}
.input-container {
  display: flex;
  align-items: center;
  color: color("waterloo");
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
}
.active {
  color: color("shark");
  border-color: color("shark");
}

.filled {
  color: color("cornflower-blue");
  border-color: color("cornflower-blue");
}
// .disable {
// }
.success {
  color: color("magic-mint");
  border-color: color("magic-mint");
}
.invalid {
  color: color("gareldine");
  border-color: color("gareldine");
}

// .append-slot {
// }

.input {
  @include font-size-quarter("small");
  width: 100%;
  font-weight: f-weight("bold");
  color: color("shark");
  outline: none;
  border: none;

  &::placeholder {
    color: color("waterloo");
  }
}
</style>
