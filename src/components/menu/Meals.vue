<template>
  <b-containter>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Meal Name:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="meal.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Price:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="meal.price"
            type="number"
            required
            placeholder="0.0"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Description:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="meal.description"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4" label="Composition:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="meal.composition"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-5" label="Restaurant ID:" label-for="input-5">
          <b-form-input
            id="input-5"
            v-model="meal.restaurant.id"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ meal }}</pre>
      </b-card>
    </div>
  </b-containter>
</template>

<script>
const axios = require('axios')

export default {
  data () {
    return {
      meal: {
        name: '',
        price: 0,
        composition: '',
        description: '',
        restaurant: {
          id: null
        }
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post('http://localhost:8889/', this.meal, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log(response)
      })
        .catch(error => {
          console.log(error)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.meal.price = 0
      this.meal.name = ''
      this.meal.description = ''
      this.meal.composition = ''
      this.meal.restaurant.id = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
