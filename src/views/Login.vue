<template>
  <div class="login">
    <b-form @submit.prevent="loginUser">
      <b-overlay :show="showOverlay" variant="dark" rounded="sm" :opacity="0.3" class="full-height">
        <b-form-group id="input-group-1" label="Usuário:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user.email"
            type="text"
            required
            placeholder="Usuário"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Senha:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="user.password"
            required
            placeholder="Senha"
            type="password"
          ></b-form-input>
        </b-form-group>
        <div style="text-align:center; margin: 10px 0">
          <b-badge variant="danger" v-if="message" v-text="message" style="font-size: 0.8em"></b-badge>
        </div>

        <b-button pill variant="primary" type="submit">Login</b-button>
      </b-overlay>
    </b-form>
  </div>
</template>


<script>
import UserService from "../UserService";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      showOverlay: false
    };
  },
  props: {
    message: {
      default: "",
      type: String,
      required: false
    }
  },
  methods: {
    async loginUser() {
      this.showOverlay = true;
      await UserService.loginUser(this.user)
        .then(response => {
          console.log(response);
          if (response == 200) {
            this.message = "";
            this.$router.push("admin");
          } else this.message = "Login ou senha incorretos.";
          this.showOverlay = false;
        })
        .catch(() => console.log("error"));
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  min-height: 75vh;
  margin: 50px;
}
.b-overlay-wrap {
  padding: 20px;
}
form {
  margin: auto;
  max-width: 400px;

  .btn {
    width: 80%;
    margin-left: 10%;
  }
}
</style>