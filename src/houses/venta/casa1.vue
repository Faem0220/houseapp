<template>
    <div class="container-venta"  v-bind:key="casas">
    
        <div class="container-casa1">
          <div class="left">
            <div class="gallery2">
              <div class="gallery__item gallery__item--1">
              <img
                  class="gallery__img" 
                  src="/img/casa1/1.jpg"
                  >
            </div>
            <div class="gallery__item gallery__item--2">
              <img
                  class="gallery__img" 
                  src="/img/casa1/2.jpg"
                  >
            </div>
            <div class="gallery__item gallery__item--3">
              <img
                  class="gallery__img" 
                  src="/img/casa1/4.jpg"
                  >
            </div>
            <div class="gallery__item gallery__item--4">
              <img
                  class="gallery__img" 
                  src="/img/casa1/5.jpg"
                  >
            </div>
            <div class="gallery__item gallery__item--5">
              <img
                  class="gallery__img" 
                  src="/img/casa1/6.jpg"
                  >
            </div>
           
            </div>
            <div class="description">
              <p>{{casas[0].descripcion}}</p>
            </div> 
          </div>
          <div class="right">
            <div class="information" >
              <h1> {{casas[0].nombre}} </h1>
              
             <div class="info-item">
              <h3>Habitaciones</h3>
                    <p>{{casas[0].habitaciones}}</p>
                    </div>
                    
                  <div class="info-item">
                    <h3>Baños</h3>
                    <p>{{casas[0].baños}}</p>
                    </div>
                  
                  <div class="info-item">
                    <h3>Area Lote</h3>
                    <p>{{casas[0].area_lote}}</p>
                    </div>
      
                  <div class="info-item">
                  <h3>Area Construida</h3>
                  <p>{{casas[0].area_construida}}</p>
                  </div>

                  <div class="info-item">
                  <h2>Valor 2021</h2>
                  <p>${{casas[0].valor}}USD</p>
                  </div>
                  <button id='consultar'> Consultar </button>
            </div>
          </div>
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
.container-venta{
    background-color: #000000;
    background-image: linear-gradient(315deg, #a1a1a1 0%, #000000 74%);
    height: 100%;
    font-family: Share;
}
.container-casa1{

 display:flex;   
 flex-direction:row;
 padding:10% 5% 5% 5%;
}


.right{
    position:relative;
    width: 30%;
    background: rgba(173, 173, 173, 0.144);
    box-shadow: 0 8px 32px 0 rgba(173, 175, 204, 0.37);
    backdrop-filter: blur( 10.0px );
    -webkit-backdrop-filter: blur( 10.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    transition-duration: 1s;
    
}   
        .right:hover{
              width: 60%;
              font-size:1.2rem;
              padding:5%;
              background: rgba(99, 108, 118, 0.981);
              } 
.information{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding:5%;
    color:rgb(141, 141, 141);
    height:95%;
    
    

  
}
    
    .information > h1{
      color:rgb(241, 241, 241);
     
    }
    .info-item{
        text-align: center;
        font-family:Inconsolata;
        background:transparent;
        
    }
    .info-item > h3{
      font-family: Karla;
      color:rgb(141, 141, 141);
    }
    .info-item > p{
      color:rgb(221, 221, 221);
    } 
    #consultar{
      background:rgb(189, 189, 189);
      font-size:1.2rem;
      padding:10px;
}
.left{
    position:relative;
    width: 80%;
    padding: 2%;
   
}
 
    .gallery__img{
      transition-duration: 1s;
    }
  
    .gallery__img:hover{
  transform:scale(1.025);
  cursor:pointer;
  filter:brightness(120%);
  }

  


  .gallery2 {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(9, 5vw);
    grid-gap: 15px;
    height:70%;

    
}
.gallery__img {
    width: 100%;
    height: 100%;
    border-radius: 5%;
    object-fit:cover;

}
.gallery__item--1 {
  grid-column-start: 1;
  grid-column-end:5;
  grid-row-start: 1;
  grid-row-end: 3;
 

  /** Alternative Syntax **/
  /* grid-column: 1 / span 2;  */
  /* grid-row: 1 / span 2; */
}



.gallery__item--2 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 5;

  /** Alternative Syntax **/
  /* grid-column: 5 / span 4;
  grid-row: 1 / span 5; */
}

.gallery__item--3 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 5;

  /** Alternative Syntax **/
  /* grid-column: 1 / span 4;  */
  /* grid-row: 3 / span 3; */
}

.gallery__item--4 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 5;
  grid-row-end: 9;

  /** Alternative Syntax **/
  /* grid-column: 1 / span 4; */
  /* grid-row: 6 / span 3; */
}

.gallery__item--5 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 5;
  grid-row-end: 9;
   
}
.description{
  width:60%;
}

</style>



