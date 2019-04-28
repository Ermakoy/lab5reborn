<template>
  <Editor :key="note ? note.id : 'unknown'" :note="note"></Editor>
</template>

<script>
import Editor from '~/components/Editor.vue'
import axios from 'axios'

export default {
  components: {
    Editor
  },
  data: function() {
    return { note: {} }
  },
  watch: {
    $route(from, to) {
      console.log('change route to ', this.$route, this.$route.params.id)
      axios.get(`/api/notes/${this.$route.params.id}`).then(({ data }) => {
        this.note = data
      })
    }
  },
  asyncData({ $axios, params }) {
    return $axios
      .get(`/api/notes/${params.id}`)
      .then(({ data }) => ({ note: data }))
  }
}
</script>
