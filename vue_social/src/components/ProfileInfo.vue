<template>
    <div>
        <v-row class="text-left">
            <v-col cols="10">
                <h1 class="green--text text--darken-2">
                    <v-icon large color="green darken-2">mdi-account-outline</v-icon>
                    {{info.name}}
                </h1>
            </v-col>
        </v-row>
        <v-row class="text-left">
            <v-col cols="2">
                <img src="https://randomuser.me/api/portraits/men/7.jpg" style="max-width: 100%">
            </v-col>
            <v-col cols="10" class="text-left">
                <p>
                    Веб-сайт: <a href="..." target="_blank">{{info.website}}</a>
                </p>
                <p>
                    E-mail: <a href="mailto:...">{{ info.email }}</a>
                </p>
                <p>
                    Город: {{info.address.city}}
                </p>
                <p>
                    Место работы:{{info.company.name}}
                </p>
            </v-col>
        </v-row>
    </div>
</template>
  
  <script>

  export default {
    name: 'ProfileInfo',
    props:{
        info:{
            type:Object
        }
    },
    data: () => ({
        
    }),
  };
  </script>
  