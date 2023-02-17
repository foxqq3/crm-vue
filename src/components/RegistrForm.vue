<script setup>
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <div class="content">
    <p>first slot
      <slot></slot>
    </p>
    <p>second slot
      <slot></slot>
    </p>
  </div>
  

  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped lang="scss">

</style>