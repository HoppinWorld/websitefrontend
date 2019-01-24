<template>
  <div>
    <h1>Reset Password</h1>
    <div v-for="err in errors">
      <h3 variant=error>{{err}}</h3>
    </div>
    <b-form @submit.prevent="submit">
      <br/>
      <b-form-input id="emailinput" type="email" v-model="form.email" required placeholder="Enter Email"></b-form-input>
      <br/>
      <vue-recaptcha
        ref="recaptcha"
        @verify="onCaptchaVerified"
        @expired="onCaptchaExpired"
        size="invisible"
        sitekey="6Ld2V4oUAAAAAE9QcFt88mUWWAcQ6efoYhA3fOSF">
      </vue-recaptcha>
      <b-button :disabled="status==='submitting'" type="submit" variant="primary">Send Reset Email</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: 'resetpassword',
  components: {
    'vue-recaptcha': VueRecaptcha
  },
  data() {
    return {
      form: {
        email: '',
      },
      errors: [],
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

      axios.post('https://hoppinworld.net:27015/passreset',
        {
          email: this.form.email,
          recaptcha: recaptchaToken
        }
      ).then(response => {
        // TODO: Show "a confirmation email was sent to your inbox"
        this.errors = ['An email was sent to your Inbox.']
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
