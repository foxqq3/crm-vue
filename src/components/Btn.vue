<script>
export default {
  name: 'Btn',

  props: {
    title: {
      type: String,
      default: 'btn'
    },
  },

  methods: {

  },

  emits: ['click'],

  computed: {
    classes() {
      return{
        [this.$style.btn]: true
      }
    }
  }
}
</script>

<template>
  <button :class="classes" @click="$emit('click')">{{ title }}</button>
</template>

<style lang="scss" module>
.btn {
  @include text-ellipsis();
  @include font-size-quarter('small');
  display: inline-flex;
  justify-content: center;
  width: 100%;
  padding: spacing(4) 0;
  font-family: inherit;
  font-weight: f-weight('bold');
  text-align: center;
  color: color('cornflower-blue');
  background-color: color('howkes-blue');
  border: none;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    color: color('white');
    background-color: color('san-marino');
  }

  &:focus {
    //need add another color
    color: color('white');
    background-color: color('cornflower-blue');
  }

  &:active {
    color: color('white');
    background-color: color('cornflower-blue');
  }

  &:disabled {
    color: color('waterloo');
    background-color: color('wild-sand');
  }
}
</style>
