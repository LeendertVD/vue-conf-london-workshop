<template>
  <div>
    <modal 
      v-if="showModal" 
      @close-modal="showModal = false"/>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: true
    }
  }
}
</script>
