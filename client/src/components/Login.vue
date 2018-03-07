<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>
          Login
          </v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
          name="email"
          label="Email"
          v-model="email"
          id="email"
        ></v-text-field>
          <br>
            <v-text-field
              single-line
              label="password"
              name="password"
              v-model="password"
              placeholder="password"
              min="8"
              hint="At least 8 characters"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              counter
          ></v-text-field>
          <br>
          <div v-html="error" class="error" />
          <br>
          <v-btn class="cyan" dark
            @click="login">
            Login
            </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      e1: false,
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        console.log(response.data);
        this.error = null;
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  watch: {
    email(value) {
      console.log('email has changed', value);
    }
  },
  mounted() {
    setTimeout(function() {
      this.email = 'hello world';
    }, 1000);
  }
};
</script>

<style scoped>
</style>
