<template>
  <div>
    <h1>Set Password</h1>
    <div v-for="err in errors">
      <h3 variant=error>{{err}}</h3>
    </div>
    <b-form @submit="onSubmit">
      <b-form-group id="pass1g" label="New Password:" label-for="pass1">
        <b-form-input id="pass1" type="password" v-model="form.pass1" required placeholder="Password"></b-form-input>
      </b-form-group>
      <b-form-group id="pass2g" label="Repeat Password:" label-for="pass2">
        <b-form-input id="pass2" type="password" v-model="form.pass2" required placeholder="Repeat"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Set Password</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'setpassword',
  data() {
    return {
      form: {
        pass1: '',
        pass2: '',
      },
      errors: [],
      token: ''
    }
  },
  mounted: function () {
    if (this.$route.params.token == undefined) {
      this.errors.push('Password Change token is invalid! Please create a new one.')
      return;
    }
    this.token = this.$route.params.token
  },
  methods: {
    onSubmit(ev) {
      ev.preventDefault();

      this.errors = []
      if(this.form.pass1 !== this.form.pass1) {
        this.errors.push('Passwords are not equal.')
        return;
      } else if (this.form.pass1.length < 8) {
        this.errors.push('Your password needs to be at least 8 characters.')
        return;
      } else if (this.form.pass1.length > 64) {
        this.errors.push('Your password needs to be at most 64 characters.')
        return;
      }

      axios.post('https://hoppinworld.net:27015/changepassword',
        {
          token: this.token,
          password: this.form.pass1
        }
      ).then(response => {
        this.$router.push('/login')
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
