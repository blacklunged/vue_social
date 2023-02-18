<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Войдите в аккаунт
            </v-card-title>

            <v-text-field
                label="Введите логин"
                v-model="nickname"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
            ></v-text-field>
            <router-link to="/registration">Нет аккаунта?</router-link>
            <v-btn @click="authenticate">
                Войти
            </v-btn>
        </v-card>
    </div>

</template>

<script>
    import { login } from '@/http/authAPI.js';
    export default {
    name: 'login.vue',
    methods:{
        authenticate : async () =>{
            try {
            const data = await login(nickname, password)
            this.$router.push('/')
            }
            catch(e){
            alert(`${e}`)
            }
        }
    },
    data: () => ({
        nickname:'',
        password:''
    }),
    };
</script>