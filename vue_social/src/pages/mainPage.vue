<template>
    <v-container>
        <PostCard
            v-for="post in Posts"
            :card="post"
        />

    </v-container>
  </template>
  
  <script>
  import { fetchPosts } from '@/http/usersAPI';
  import PostCard from '@/components/PostCard.vue';
  export default {
    components:{
        PostCard
    },
    name: 'MainPage',
    mounted(){
      fetchPosts().then(data => this.Posts = data)
    },

    data: () => ({
      Posts:[]
    }),
  };
  </script>
  