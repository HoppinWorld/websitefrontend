<template>
  <div>
    <h1>Register</h1>
    <div v-for="err in errors">
      <h3 variant=error>{{err}}</h3>
    </div>
    <b-form @submit="onSubmit">
      <b-form-group id="username" label="Username:" label-for="usernameinput">
        <b-form-input id="usernameinput" type="text" v-model="form.username" required placeholder="Enter Username"></b-form-input>
      </b-form-group>
      <b-form-group id="email" label="Email:" label-for="emailinput">
        <b-form-input id="emailinput" type="email" v-model="form.email" required placeholder="Enter Email"></b-form-input>
      </b-form-group>
      <b-form-group id="rememberGroup">
        <b-form-checkbox-group v-model="form.eula" id="eulainput">
          <b-form-checkbox required value="eula">Accept <a href="#">Terms and conditions</a></b-form-checkbox>
        </b-form-checkbox-group>
        <b-form-checkbox-group v-model="form.emails" id="emailsinput">
          <b-form-checkbox required value="emails">Receive informational emails</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'
import {globalStore} from '../main.js'

export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: '',
        eula: false,
        emails: false,
      },
      errors: [],
      remote: ''
    }
  },
  methods: {
    onSubmit(ev) {
    // TODO: Move to https asap
      axios.post('https://hoppinworld.net:27015/register',
        {
          username: this.form.username,
          email: this.form.email
        }
      ).then(response => {
        // TODO: Show "a confirmation email was sent to your inbox"
        this.errors = []
      }).catch(e => {
	      this.errors.push(e)
	      //errors foreach .response.{status,statusText}
      })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  vertical-align: center;
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
