<template>
  <v-layout>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 md6>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Contact form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="email"
                  name="email"
                  label="Email"
                  type="text"
                ></v-text-field>
                <v-textarea
                  id="message"
                  prepend-icon="message"
                  name="message"
                  label="Message"
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="snackbar = true">Send</v-btn>
            </v-card-actions>
          </v-card>
          <v-snackbar
            v-model="snackbar"
            :timeout="6000"
            :top="true"
            :vertical="true"
          >
            Not Yet Implemented. Contact me in my email. paulcruz069@gmail.com
            <v-btn color="pink" flat @click="snackbar = false"></v-btn>
          </v-snackbar>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false
    }
  }
}
</script>
