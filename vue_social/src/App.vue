<template>
  <v-app>
    <NavBar
    :isAuth="isAuth"
    />
    <router-view/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import { check } from './http/authAPI';
export default {
  name: 'App',

  components: {
    NavBar
  },
  mounted(){
      check().then(data => {
        this.isAuth = true
        this.user = data.user
      })
  },
  data: () => ({
    user:{},
    isAuth:false
  }),
};
</script>
