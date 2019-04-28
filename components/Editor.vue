<template>
  <div style="height: 100%">
    <v-btn @click="sendNote">Save</v-btn>
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div style="height: 100%" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
import axios from 'axios'
import { debounce } from 'lodash-es'

export default {
  props: ['note'],
  data() {
    console.log('in data')
    return {
      input: (this.note && this.note.note) || ''
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: debounce(function(e) {
      this.input = e.target.value
    }, 300),
    sendNote() {
      axios.put(`/api/notes/${this.$route.params.id}`, { note: this.input })
    }
  }
}
</script>
<style scoped>
#editor {
  width: 100%;
  height: 100%;
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
