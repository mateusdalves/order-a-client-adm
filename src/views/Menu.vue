<template>
  <b-container>
    <Meals></Meals>
  </b-container>
</template>

<script>
import Meals from '@/components/menu/Meals.vue'

export default {
  name: 'item-menu',
  components: {
    Meals
  }
}
</script>
