<template>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 1px 1px 2px #333"
    :interval="4000"
    fade
    indicators
    img-width="1280"
    img-height="480"
    background="#ababab"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
    class=".d-none .d-sm-block"
  >
    <b-carousel-slide
    v-for="banner in banners"
    :key="banner.id"
    :caption="banner.description"
    :img-src="banner.imgPath"
    >
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  data: () => {
    return {
      'model': 0,
      'cycle': true,
      'banners': [
        {
          'id': 0,
          'name': 'Burguer',
          'imgPath': require('@/assets/banners/burger-banner.jpeg'),
          'description': 'Delicious meals from everywhere'
        },
        {
          'id': 1,
          'name': 'Veggie',
          'imgPath': require('@/assets/banners/veggie-banner.jpg'),
          'description': 'We serve for all kinds of tastes'
        },
        {
          'id': 2,
          'name': 'Tacos',
          'imgPath': require('@/assets/banners/tacos-banner.png'),
          'description': 'We might have something for you too!'
        }
      ]
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
</style>
