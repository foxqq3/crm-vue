<script>
import AppInput from "./components/AppInput.vue";
import Btn from "./components/Btn.vue";
import RegistrForm from "./components/RegistrForm.vue";

export default {
  components: {
    AppInput,
    Btn,
    RegistrForm
  },

  methods: {
    inputValue(){
      console.log(this.inputValue)
    }
    
  },

  data() {
    return {
      inputValue: ''
    }
  },

  methods: {
    test(event) {
      console.log('test btn');
      console.log(event);
    },

    narek(event) {
      console.log(this.inputValue)
    }
  },


}
</script>

<template>
  <AppInput placeholder="das" label="BDSGBdjh" v-model="inputValue" @update:modelValue="narek">
    <template v-slot:append>
      {{ inputValue }}
    </template>
  </AppInput>
  <Btn disabled></Btn>
  <Btn title="test" @click="test"></Btn>
  <RegistrForm>

  </RegistrForm>
</template>

<style lang="scss">

</style>
