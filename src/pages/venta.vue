<template>
<div class="house-gallery">
  <h1 class="catalog">Condominio Campestre El Peñon</h1>
  <h2 class="catalog-casas">Casas</h2>
   <div class="gallery-house-venta">
              <div class="gallery-house-venta item">
                 <router-link
                  v-popover:popover1
                    to="/venta/casa1" >
                      <img
                          class="gallery-house-img" 
                          src="/img/casa1/5.jpg"
                          >
                          <h2 class="title-house">CASA 1</h2>  
                </router-link>
              
              
            </div>
            <div class="gallery-house-venta item">
            
              <router-link
                  v-popover:popover1
                    to="/venta/casa2" >
                      <img
                          class="gallery-house-img" 
                          src="/img/casa2/6.jpg"
                          >
                          <h2 class="title-house">CASA 2</h2>  
                </router-link>
      
                   
            </div>
            <div class="gallery-house-venta item">
              <router-link
                  v-popover:popover1
                    to="/venta/casa3" >
                      <img
                          class="gallery-house-img" 
                          src="/img/casa3/2.jpg"
                          >
                          <h2 class="title-house">CASA 3</h2>  
                </router-link>
                   
            </div>
            <div class="gallery-house-venta item">
             <router-link
                  v-popover:popover1
                    to="/venta/casa1" >
                      <img
                          class="gallery-house-img" 
                          src="/img/casa4/1.jpg"
                          >
                          <h2 class="title-house">CASA 4</h2>  
                </router-link>
            </div>
            <div class="gallery-house-venta item">
             <router-link
                  v-popover:popover1
                    to="/venta/casa5" >
                      <img
                          class="gallery-house-img" 
                          src="/img/casa5/19.jpg"
                          >
                          <h2 class="title-house">CASA 5</h2>  
                </router-link>
            </div>
            <div class="gallery-house-venta item">
             <router-link
                  v-popover:popover1
                    to="/venta/casa6" >
                      <img
                          class="gallery-house-img" 
                          src="/img/casa6/6.jpg"
                          >
                          <h2 class="title-house">CASA 6</h2>  
                </router-link>
            </div>
           
   </div>
 
</div>
 
</template>
<style>
.house-gallery{
  background-color: #000000;
  background-image: linear-gradient(315deg, #00000051 0%, #373737 74%);
  padding-top:10%;
  height: 100%;
  width: 100vw;
}
.catalog{
  color:rgb(169, 169, 169);
  text-align: center;
  font-family: Share;
  font-size:2rem;
}
.catalog-casas{
  color:rgb(169, 169, 169);
  text-align: center;
  font-family: Share;
  font-weight: lighter;
  font-size:2rem;
  padding:3%;
}
  .gallery-house-venta {
    
    display:grid;
    grid-template-columns:33% 33% 33%;
    grid-gap:10px;
    padding:3%;
    
}
@media (max-width: 800px){
  .gallery-house-venta{
    display:flex;
    flex-direction: column;
    padding:7%;
  }
}
.item{
  display:flex;
  justify-content: center;
  align-items: center;
  position:relative;
  text-align: center;
  filter:brightness(100%);
  transition-duration: 2s;
 
}
.title-house{
  position:absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-family: Raleway;
  z-index:10;
  color:#FFF;
}
.gallery-house-img {
  max-width: 100%;
  max-height: auto;
  object-fit:cover;
  border-radius: 5%;
  z-index: 1;
  

}
 .item:hover{
  transform:scale(1.1);
  cursor:pointer;
  filter:brightness(40%);
  color:white;
  }

</style>