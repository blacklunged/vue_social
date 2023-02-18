<template>
<div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Регистрация
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

            <v-text-field
                label="Имя"
                v-model="name"
                outlined
            ></v-text-field>

            <v-text-field
                label="Фамилия"
                v-model="surname"
                outlined
            ></v-text-field>
            <router-link to="/login">Уже есть аккаунт?</router-link>
            <v-btn @click="register">
                Зарегестрироваться
            </v-btn>
        </v-card>
    </div>


</template>

<script>
    import {registration} from '@/http/authAPI.js' 
    export default {
    name: 'registration.vue',
    methods:{
        register : async () =>{
            try {
            const data = await register(nickname, password, name, surname)
            this.$router.push('/')
            }
            catch(e){
            alert(`${e}`)
            }
        }
    },    
    data: () => ({
        nickname:'',
        password:'',
        name:'',
        surname:'',
    }),
    };
</script>