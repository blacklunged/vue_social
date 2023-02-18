<template>
    <v-container>
     <div>
        <ProfileInfo
        :info="userInfo"
        />
    </div>
    <v-container>
        <PostCard
            v-for="post in userPosts"
            :card="post"
        />

    </v-container>

    </v-container>
</template>

<script>
import ProfileInfo from '@/components/ProfileInfo.vue'
import PostCard from '@/components/PostCard.vue';
import { fetchOneUser, fetchPosts } from '@/http/usersAPI';
export default {
    name: 'ProfilePage',
    components:{
        PostCard, ProfileInfo
    },
    mounted(){
        fetchOneUser(this.$route.params.id).then(data => this.userInfo = data),
        fetchPosts().then(data => {
            const {username} = this.userInfo
            for(let post of data){
                if (post.userId == this.$route.params.id) {
                    this.userPosts.push({...post, username })
                }
            }
        })
    },
    data: () => ({
        userInfo:{},
        userPosts:[]
    }),
    };
</script>
