<template>
<v-container>
    <UserCard
    v-for="user in usersList"
    v-bind:user="user"
    />
</v-container>

  </template>
  
  <script>
import UserCard from '@/components/UserCard.vue';
import { fetchUsers } from '@/http/usersAPI';
  export default {
    name: 'UsersPage',
    components:{
        UserCard
    },
    mounted(){
        fetchUsers().then(data => this.usersList = data)
    },
    data: () => ({
        usersList:[]
    }),
  };
  </script>