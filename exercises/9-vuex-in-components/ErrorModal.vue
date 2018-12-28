<template>
  <div :class="{ 'is-active': $store.state.error }">
    <button 
      aria-label="close" 
      @click="$store.commit('setError', null)">Close modal</button>
  </div>
</template>
