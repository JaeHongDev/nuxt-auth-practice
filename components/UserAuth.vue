<template>
  <form @submit="handleLogin">
    <label>ID:</label><input v-model="user.id" type="text" required minlength="2" maxlength="8"> <br>
    <label>PW:</label><input v-model="user.password" type="password" required minlength="2" maxlength="8"><br>
    <div>
      {{errors}}
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
export default {
  name: "UserAuth",
  data() {
    return {
      errors:"",

      user: {
        id: "",
        password: "",
      }
    }
  },

  methods: {
    async handleLogin(event) {
      event.preventDefault();

      this.errors = "";
      this.errors = await this.$store.dispatch("auth/requestUserLogin", this.user);
      this.$router.push("/home");
    }
  }
}
</script>

<style scoped>

</style>
