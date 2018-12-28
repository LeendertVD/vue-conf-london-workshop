<template>
  <ul v-if="items">
    <li 
      v-for="(item, i) in items"
      :key="`item-${i}`"
    >
      {{ item }}
    </li>
  </ul>
  <span v-else>No items</span>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: undefined
    }
  }
}
</script>
