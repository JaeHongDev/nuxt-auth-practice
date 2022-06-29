<template>
  <div>
    로그인 사용자
    <button @click="handleLogout">로그아웃</button>

  </div>
</template>

<script>
export default {
  name: "home",
  methods:{
    handleLogout(){
      localStorage.removeItem("authId");
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

</style>
