<script>
export default {
  name: "AppInput",
  data() {
    return {
      inputValidStatus: false,
      active: false,
      invalid: false,
      disable: false,
      success: false,
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
    checkSuccess: {
      type: Boolean,
      default: false,
    },
    change: {
      type: String,
      default: null,
    },
  },

  computed: {},

  methods: {
    inputEventHandler(event) {
      this.$emit("update:change", event.target.value);
      this.inputValidStatus = event.target.validity.valid;
      this.normal === true ? (this.normal = false) : "";
      this.invalid === true ? (this.invalid = false) : "";
      this.success === true ? (this.success = false) : "";
      this.active = event.target.value === "" ? false : true;
    },

    focusEventHandler() {},

    blurEventHandler(event) {},
  },

  watch: {
    checkSuccess() {
      this.active = false;
      this.inputValidStatus === true
        ? (this.success = true)
        : (this.invalid = true);
    },
  },

  emits: ["update:change", "focus"],
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
          [$style.active]: active === true,
          [$style.disable]: disable === true,
          [$style.success]: success === true,
          [$style.invalid]: invalid === true,
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
        @submit="validEventHandler"
        :autocomplete="autocomplete"
        :id="idFor"
        :placeholder="placeholder"
        :type="type"
        :value="change"
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
  color: color("cornflower-blue");
  border-color: color("cornflower-blue");
}
// .disable {
// }
.success {
  color: color('magic-mint');
  border-color: color('magic-mint');
}
.invalid {
  color: color('gareldine');
  border-color: color('gareldine');
}
.normal {
  color: blue;
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

// .prepend-slot {
// }

// .error {
// }
</style>
