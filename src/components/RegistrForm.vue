<script>
import AppInput from "./AppInput.vue";
import Btn from "./Btn.vue";

export default {
  components: {
    AppInput,
    Btn
  },
  data() {
    return {
      inputEmail: '',
      inputPassword: '',
      inputText: ''
    }
  },

  methods: {
    sendForm(event){
      event.preventDefault();
      alert(`Введенная почта:${this.inputEmail} \nВведенный пароль:${this.inputPassword} \nВведенное имя:${this.inputText} `)
      console.log(this.inputEmail);
      console.log(this.inputPassword);
      console.log(this.inputText);

    },
  }
}

</script>

<template>
  <form @submit="sendForm">
    <AppInput label="1" v-model="inputEmail" type="email">
      <template v-slot:append>
      </template>
    </AppInput>
    <AppInput label="2" v-model="inputPassword" type="password">
      <template v-slot:append>
      </template>
    </AppInput>
    <AppInput label="3" v-model="inputText">
      <template v-slot:append>
      </template>
    </AppInput>
    <Btn narek title="Send" type="submit"></Btn>
  </form>
</template>

<style lang="scss" module></style>