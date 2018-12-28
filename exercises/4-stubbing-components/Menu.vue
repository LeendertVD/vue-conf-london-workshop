<template>
  <a 
    v-if="signedIn" 
    @click="signOut">
    Sign out
  </a>
  <router-link 
    v-else 
    to="/login" >
    Sign in
  </router-link>
</template>

<script>
export default {
  props: {
    signedIn: {
      type: Boolean,
      default: false
    },
    signOut: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
