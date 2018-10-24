<template>
  <div>
    <h1>Login</h1>
    <div v-for="err in errors">
      <h3 variant=error>{{err}}</h3>
    </div>
    <div>
      <h3 variant=error>Token: {{remote}}</h3>
    </div>
    <b-form @submit="onSubmit">
      <b-form-group id="email" label="Email:" label-for="emailinput">
        <b-form-input id="emailinput" type="email" v-model="form.email" required placeholder="Enter Email"></b-form-input>
      </b-form-group>
      <b-form-group id="password" label="Password:" label-for="passwordinput">
        <b-form-input id="passwordinput" type="password" v-model="form.password" required placeholder="Enter Password"></b-form-input>
      </b-form-group>
      <b-form-group id="rememberGroup">
        <b-form-checkbox-group v-model="form.rememberme" id="rememberinput">
          <b-form-checkbox value="rememberme">Remember Me</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
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
        rememberme: false
      },
      errors: [],
      remote: ''
    }
  },
  methods: {
    onSubmit(ev) {
    // TODO: Move to https asap
      axios.post('http://hoppinworld.net:27015/login',
        {
          email: this.form.email,
          password: this.form.password
        }
      ).then(response => {
        this.remote = response.data
        globalStore.auth_token = response.data.token
        this.$router.push('/')
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
