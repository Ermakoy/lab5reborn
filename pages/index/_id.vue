<template>
  <Editor :key="note ? note.id : 1337" :note="note"></Editor>
</template>

<script>
import Editor from '~/components/Editor.vue'
import axios from 'axios'

export default {
  components: {
    Editor
  },
  props: {
    // eslint-disable-next-line
    source: String
  },
  data: function() {
    return { note: {} }
  },
  watch: {
    $route(from, to) {
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
