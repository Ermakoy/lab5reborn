<template>
  <Editor></Editor>
</template>

<script>
import Editor from '~/components/Editor.vue'
export default {
  components: {
    Editor
  },
  props: {
    // eslint-disable-next-line
    source: String
  },
  asyncData({ $axios }) {
    return $axios.get('/api/notes')
  }
}
</script>
