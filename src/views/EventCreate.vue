<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect
        v-model="event.category "
        label="Select a category"
        :options="categories"
        class="field"
      />

      <h3>Name & describe your event</h3>
      <BaseInput
        v-model="event.title"
        label="Title"
        type="text"
        placeholder="Title"
        class="field"
      />

      <BaseInput
        v-model="event.description"
        label="Description"
        type="text"
        placeholder="add a description"
        class="field"
      />

      <h3>Where is your event?</h3>
      <BaseInput
        v-model="event.location"
        label="Location"
        type="text"
        placeholder="add a location"
        class="field"
      />

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker
          v-model="event.date"
          placeholder="Select a date"
        />
      </div>

      <BaseSelect
        v-model="event.time "
        label="Select time"
        :options="times"
        class="field"
      />
      <BaseButton
        type="submit"
        buttonClass="-fill-gradient"
      > 
        Submit
      </BaseButton>
      <!-- <input
        type="submit"
        class="button -fill-gradient"
        value="Submit"
      > -->
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject(),
    }
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch('createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id },
          })
          this.event = this.createFreshEventObject()
        })
        .catch(() => {
          console.log('There was a problem creating your event')
        })
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: [],
      }
    },
  },
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
