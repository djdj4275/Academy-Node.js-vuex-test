<template>
  <div class="home">
    <label for="">유저이름</label> <br>
    <input type="text" v-model="user">
    <button @click="loginuser2">확인</button>
    <p>{{$store.state.user}}</p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      user : ""
    }
  },
  methods : {
    loginuser2() {
      this.$store.commit('loginuser', this.user); // data의 user 값을 들고 store의 loginuser로 감
      // list로 이동
      this.$router.push('/list');
    }
  }
}
</script>
