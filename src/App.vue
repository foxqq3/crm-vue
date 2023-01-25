<script>
// import HelloWorld from './components/HelloWorld.vue'
import RegistrForm from './components/RegistrForm.vue';
import InputForm from './components/InputForm.vue';


export default {
  components: {
    RegistrForm,
    InputForm
  },



}
</script>

<template>
  <div class="content">
    <registr-form></registr-form>
    <registr-form></registr-form>
    <input-form></input-form>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style lang="scss">

</style>
