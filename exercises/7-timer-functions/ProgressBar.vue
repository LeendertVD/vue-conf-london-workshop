<template>
  <div 
    :style="{
      'width': `${percent}%`
    }"
  />
</template>

<script>
export default {
  data() {
    return {
      percent: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.percent++
    }, 100)
  }
}
</script>
