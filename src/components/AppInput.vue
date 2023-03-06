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
        }
    },

    methods: {
        inputEventHandler(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    },

    emits: ['update:modelValue'],

}
</script>

<template>
    <div :class="$style.input">
        <label for="" class="label">
            {{ label }}
        </label>
        <div class="input-container">
            <div class="append-slot">
                <slot name="append"></slot>
            </div>
            <input :placeholder="placeholder" :type="type" :value="modelValue" class="input" @input="inputEventHandler">
            <div class="prepend-slot">
                <slot name="prepend"></slot>
            </div>
        </div>
        <div v-if="error" class="error">
            {{ error }}
        </div>
    </div>
</template>

<style lang="scss" module>
.input {
    color: blue;
}
</style>