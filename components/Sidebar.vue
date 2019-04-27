<template>
  <div>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>
          <v-btn @click="createNote">Create</v-btn>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Contact</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list subheader>
      <v-subheader>Notes</v-subheader>
      <v-list-tile v-for="note in notes" :key="note.id" avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="note.id"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn :to="`/${note.id}`" :nuxt="true" :color="'teal'">Edit</v-btn>
        </v-list-tile-action>
        <v-list-tile-action>
          <v-btn :color="'teal'" @click="deletePost(note.id)">Delete</v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return { notes: [] }
  },
  mounted() {
    axios.get('/api/notes').then(notes => {
      this.notes = notes.data
    })
  },
  methods: {
    createNote() {
      axios.post('/api/notes')
    },
    deletePost(id) {
      axios.delete(`/api/notes/${id}`)
    }
  }
}
</script>
