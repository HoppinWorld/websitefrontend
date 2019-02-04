<template>
  <div>
    <h1 class="text-light">Register</h1>
    <div class="text-light" v-for="err in errors">
      <h3 variant=error>{{err}}</h3>
    </div>
    <b-form class="text-light" @submit.prevent="submit">
      <br/>
      <!-- <b-form-group id="username" label="Username:" label-for="usernameinput"> -->
        <b-form-input id="usernameinput" type="text" v-model="form.username" required placeholder="Enter Username"></b-form-input>
      <!--</b-form-group> -->
      <br/>
      <!--<b-form-group id="email" label="Email:" label-for="emailinput"> -->
        <b-form-input id="emailinput" type="email" v-model="form.email" required placeholder="Enter Email"></b-form-input>
      <!--</b-form-group> -->
      <br/>
      <b-form-group id="rememberGroup">
        <b-form-checkbox-group v-model="form.eula" id="eulainput">
          <b-form-checkbox required value="eula">Accept <a href="#">Terms and conditions</a></b-form-checkbox>
        </b-form-checkbox-group>
        <b-form-checkbox-group v-model="form.emails" id="emailsinput">
          <b-form-checkbox required value="emails">Receive informational emails</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <vue-recaptcha
        ref="recaptcha"
        @verify="onCaptchaVerified"
        @expired="onCaptchaExpired"
        size="invisible"
        sitekey="6Ld2V4oUAAAAAE9QcFt88mUWWAcQ6efoYhA3fOSF">
      </vue-recaptcha>
      <b-button :disabled="status==='submitting'" type="submit" variant="primary">Register</b-button>
    </b-form>
  </div>
</template>
<script>
import axios from 'axios'
import {globalStore} from '../main.js'
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: 'login',
  components: {
    'vue-recaptcha': VueRecaptcha
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        eula: false,
        emails: false,
      },
      errors: [],
      remote: '',
      status: ''
    }
  },
  methods: {
    submit(ev) {
      console.log("submit");
      this.$refs.recaptcha.execute();
    },
    onCaptchaVerified: function (recaptchaToken) {
      console.log("onCaptchaVerified");
      this.status = "submitting";
      this.$refs.recaptcha.reset();

      axios.post('https://hoppinworld.net:27015/register',
        {
          username: this.form.username,
          email: this.form.email,
          recaptcha: recaptchaToken
        }
      ).then(response => {
        // TODO: Show "a confirmation email was sent to your inbox"
        this.errors = ['A Confirmation Email was sent to your Inbox.']
      }).catch(e => {
        this.errors.push(e)
        //errors foreach .response.{status,statusText}
      }).then(() => {
        self.status = "";
      })
    },
    onCaptchaExpired: function () {
      console.log("onCaptchaExpired");
      this.$refs.recaptcha.reset();
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
