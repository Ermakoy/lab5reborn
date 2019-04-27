<template>
  <div>
    <v-btn @click="sendNote">Save</v-btn>
    <Editor :note="note"></Editor>
  </div>
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
  asyncData({ $axios, params }) {
    return $axios
      .get(`/api/notes/${params.id}`)
      .then(({ data }) => ({ note: data }))
  },
  methods: {
    sendNote() {
      axios.put(`/api/notes/${this.$route.params.id}`, { note: this.note })
    }
  }
}
</script>
