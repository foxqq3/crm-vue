<script>
import AppInput from "@/components/AppInput.vue";
import Btn from "@/components/Btn.vue";
import CheckBox from "@/components/CheckBox.vue";

export default {
  name: "RegistrForm",
  components: {
    AppInput,
    Btn,
    CheckBox,
  },
  data() {
    return {
      inputValue: {
        name: "",
        email: "",
        password: "",
      },
      validWatch: false,
    };
  },
  computed: {},

  watch: {},

  methods: {
    sendForm(event) {
      event.preventDefault();
      alert(
        `Введенная почта:${this.inputValue.email} \nВведенный пароль:${this.inputValue.password} \nВведенное имя:${this.inputValue.name} `
      );
    },
    checkValid(event) {
      this.validWatch = !this.validWatch;
      console.log(event)
    },
  },
};
</script>

<template>
  <form @submit="sendForm" :class="$style['form-container']">
    <AppInput
      label="Full name"
      v-model:change="inputValue.name"
      :checkValid="validWatch"
      required
      :minLength="6"
      :maxLength="60"
      idFor="name"
    >
      <template v-slot:prepend>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8182 2C13.3163 2 11.9252 2.36932 10.6449 3.10795C9.38921 3.84659 8.39205 4.85607 7.6534 6.13636C6.91477 7.39205 6.54545 8.77084 6.54545 10.2727C6.54545 11.6761 6.86552 12.9811 7.50568 14.1875C8.17046 15.3939 9.06913 16.3788 10.2017 17.142C8.79831 17.7576 7.54261 18.607 6.43467 19.6903C5.35132 20.7737 4.5142 22.017 3.9233 23.4204C3.30776 24.8731 3 26.3997 3 28H5.36364C5.36364 26.3257 5.76989 24.7745 6.58239 23.3467C7.39489 21.9186 8.49053 20.786 9.86932 19.9489C10.2633 20.9337 10.9034 21.7339 11.7898 22.3494C12.7008 22.9649 13.7102 23.2727 14.8182 23.2727C15.9261 23.2727 16.9233 22.9649 17.8097 22.3494C18.7206 21.7339 19.3731 20.9337 19.767 19.9489C21.1458 20.786 22.2415 21.9186 23.054 23.3467C23.8664 24.7745 24.2727 26.3257 24.2727 28H26.6364C26.6364 26.3997 26.3286 24.8731 25.713 23.4204C25.1222 22.017 24.2727 20.7737 23.1648 19.6903C22.0814 18.607 20.8381 17.7576 19.4347 17.142C20.5672 16.3788 21.4536 15.3939 22.0937 14.1875C22.7585 12.9811 23.0909 11.6761 23.0909 10.2727C23.0909 8.77084 22.7216 7.39205 21.983 6.13636C21.2443 4.85607 20.2348 3.84659 18.9545 3.10795C17.6989 2.36932 16.3201 2 14.8182 2ZM14.8182 4.36364C15.9015 4.36364 16.8864 4.63448 17.7727 5.17614C18.6837 5.69318 19.3977 6.4072 19.9148 7.31818C20.4564 8.20454 20.7273 9.18938 20.7273 10.2727C20.7273 11.356 20.4564 12.3532 19.9148 13.2642C19.3977 14.1506 18.6837 14.8646 17.7727 15.4063C16.8864 15.9233 15.9015 16.1818 14.8182 16.1818C13.7349 16.1818 12.7377 15.9233 11.8267 15.4063C10.9403 14.8646 10.2263 14.1506 9.68466 13.2642C9.16762 12.3532 8.90909 11.356 8.90909 10.2727C8.90909 9.18938 9.16762 8.20454 9.68466 7.31818C10.2263 6.4072 10.9403 5.69318 11.8267 5.17614C12.7377 4.63448 13.7349 4.36364 14.8182 4.36364ZM14.8182 18.5455C15.7784 18.5455 16.7017 18.6809 17.5881 18.9517C17.3911 19.5426 17.0341 20.0227 16.517 20.3921C16.0246 20.7367 15.4583 20.9091 14.8182 20.9091C14.178 20.9091 13.5994 20.7367 13.0824 20.3921C12.59 20.0227 12.2453 19.5426 12.0483 18.9517C12.9347 18.6809 13.858 18.5455 14.8182 18.5455Z"
            fill="currentColor"
          />
        </svg>
      </template>
    </AppInput>
    <AppInput
      label="Email"
      v-model:change="inputValue.email"
      :checkValid="validWatch"
      type="email"
      required
      :minLength="6"
      :maxLength="40"
      idFor="email"
    >
      <template v-slot:prepend>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 2L14.4687 2.34375L2 10.4687V28H28V10.4687L15.5313 2.34375L15 2ZM15 4.375L25.1876 11L15 17.5937L4.8125 11L15 4.375ZM4 12.8438L14.4687 19.6251L15 19.9687L26 12.8438V26H4V12.8438Z"
            fill="currentColor"
          />
        </svg>
      </template>
    </AppInput>
    <AppInput
      label="Password"
      v-model:change="inputValue.password"
      :checkValid="validWatch"
      type="password"
      required
      :minLength="6"
      :maxLength="20"
      idFor="password"
    >
      <template v-slot:prepend>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 2C13.75 2 12.5833 2.32292 11.5 2.96875C10.4375 3.59374 9.58332 4.44791 8.93749 5.53125C8.3125 6.59374 8 7.75001 8 9V12H5V28H25V12H22V9C22 7.75001 21.6771 6.59374 21.0313 5.53125C20.4063 4.44791 19.5521 3.59374 18.4687 2.96875C17.4063 2.32292 16.25 2 15 2ZM15 4C15.8958 4 16.7292 4.22917 17.5 4.6875C18.2708 5.125 18.875 5.72917 19.3125 6.5C19.7708 7.27083 20 8.10416 20 9V12H10V9C10 8.10416 10.2188 7.27083 10.6562 6.5C11.1146 5.72917 11.7292 5.125 12.5 4.6875C13.2708 4.22917 14.1042 4 15 4ZM7 14H23V26H7V14Z"
            fill="currentColor"
          />
        </svg>
      </template>
    </AppInput>
    <div :class="$style['btns-container']">
      <Btn title="Sign up" type="submit" @click="checkValid"></Btn>
      <Btn title="Sign in" type="button"></Btn>
    </div>
  </form>
</template>

<style lang="scss" module>
.form-container {
  display: flex;
  flex-direction: column;
  gap: spacing(8);
}

.btns-container {
  display: flex;
  gap: spacing(3);
}

</style>
