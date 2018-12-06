<template>
  <transition name="fade-transform" mode="out-in">
    <router-view :key="key"/>
  </transition>
</template>

<script>
export default {
  name: 'MainTemp',
  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>

</style>
