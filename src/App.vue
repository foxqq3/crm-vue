<script>
// import HelloWorld from './components/HelloWorld.vue'
import RegistrForm from './components/RegistrForm.vue';
import InputForm from './components/InputForm.vue';


export default {
  components: {
    RegistrForm,
    InputForm,
},
}
</script>

<template>
  <div class="content">
    <registr-form>вот это вот</registr-form>
    <input-form></input-form>
    <btn title="Sign in"></btn>
    <ul>
      <li>dsada</li>
      <li>dsada</li>
      <input-field placeholder="vot on"></input-field>
    </ul>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped lang="scss">



</style>
