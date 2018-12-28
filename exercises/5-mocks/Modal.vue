<template>
  <div>
    <button
      aria-label="close"
      @click="onClose"
    />
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    onClose: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
