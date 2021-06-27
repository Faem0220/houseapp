<template>
  <div>
    <h1 class="titulo">Hola</h1>
    <div v-bind:key="casas">
      <h2>{{casas[0].nombre}}</h2>
      <h2>{{casas[0].ubicacion}}</h2>
      <h2>{{casas[0].area_lote}}mts²</h2>
    </div>
  </div>
</template>
<script>

import axios from 'axios'
export default{
  name:'alquiler',
  data(){
    return{
     casas:[] 
    }
  },
  methods:{

  },
  created(){
    axios.get('http://localhost:8000/venta/casas/')
    .then(response =>{
    this.casas = response.data
    })
    .catch(error=>{
      console.log(error)
    })
  },
}
</script>


<style>
.titulo{
  padding:30%;
}
</style>