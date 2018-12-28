<template>
  <form @submit.prevent="handleSubmit">
    <input 
      v-model="username" 
      type="text" >
    <input 
      type="submit" 
      value="Submit" >
  </form>
</template>

<script>
export default {
  props: {
    onSubmit: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      username: null
    }
  },
  methods: {
    handleSubmit() {
      this.onSubmit(this.username)
    }
  }
}
</script>
