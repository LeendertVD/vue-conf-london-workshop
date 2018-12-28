<template>
  <div>
    <item 
      v-for="(item, i) in items" 
      :key="`item-${i}`" />
    <span v-if="error">
      Error loading items
    </span>
  </div>
</template>

<script>
import { fetchItems } from './api'
import Item from './Item.vue'

export default {
  components: {
    Item
  },
  data() {
    return {
      items: null,
      error: false
    }
  },
  beforeCreate() {
    fetchItems()
      .then(items => {
        this.items = items
      })
      .catch(() => {
        this.error = true
      })
  }
}
</script>
