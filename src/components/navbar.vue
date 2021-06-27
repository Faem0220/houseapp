<template>
<div class='nav-bar'>
    <div class='logo'>
        <img src="/img/logo.gif">
    </div>
    <div class='nav-link'>
         <div class="nav-item">
        <router-link
          v-popover:popover1
          class="nav-link"
          to="/"
        >
          <p>Home</p>
        
        </router-link>
        </div>
        <div class="nav-item">
        <router-link
          v-popover:popover1
          class="nav-link"
          to="/venta"
        >
          <p>Venta</p>
        
        
        </router-link>
        </div>
        <div class="nav-item">
        <router-link
          v-popover:popover1
          class="nav-link"
          to="/alquiler"
        >
          <p>Alquiler</p>
        
        
        </router-link>
        </div>
        <div class="nav-item">
        <router-link
          v-popover:popover1
          class="nav-link"
          to="/contacto"
        >
          <p>Contacto</p>
        </router-link>
        </div>


    </div>
</div>
</template>
<script>
export default {
    name:'NavBar'
}
</script>
<style>
.nav-bar{  
    position:fixed;
    z-index: 10;
    width: 100%;
    height: 10%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    padding:1%;
    background: rgba( 255, 255, 255, 0.05 );
    box-shadow: 0 8px 32px 0 rgba(237, 239, 255, 0.37);
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
    .nav-link{
        display:flex;
        align-items: center;
        justify-content: space-between;
        width: 35%;
        margin-right: 7%;
        font-size:1.5rem;
        font-family: Share;
        
        }
        a{
            text-decoration: none;
            color:rgb(112, 112, 112);
            
            }
    a:hover{
        color:rgb(204, 204, 204);
    }
    .logo > img{
      height: 90px;
      border-radius: 50%;
      margin-top:-10px;
      position: fixed;
      }

    

</style>