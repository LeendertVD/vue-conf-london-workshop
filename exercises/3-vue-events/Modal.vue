<template>
  <div>
    <slot />
    <button 
      aria-label="close" 
      @click="$emit('close-modal')"
    >
      Close modal
    </button>
  </div>
</template>
