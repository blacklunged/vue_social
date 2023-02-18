<template>
    <v-navigation-drawer
        color="green"
        dark
        expand-on-hover
        permanent
        right
        app
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home-city</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link to="/" style="text-decoration: none; color: white;"><v-list-item-title>Home</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>

            <router-link to="/profile" v-if="isAuth" style="text-decoration: none; color: white;"><v-list-item-title>My Account</v-list-item-title></router-link>
            <router-link to="/login" v-else style="text-decoration: none; color: white;"><v-list-item-title>Login</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-group-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link to="/users" style="text-decoration: none; color: white;"><v-list-item-title>Users</v-list-item-title></router-link>

          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
  
<script>
  
export default {
name: 'NavBar',
props:{
  isAuth:Boolean
},
data () {
      return {
        drawer: true,
      }
    },
    
};
</script>
