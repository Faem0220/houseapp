<template>
<div class="container-home">
   
    <div class="title">
         <video autoplay muted loop id="myVideo">
        <source src="/img/peñon2min.mp4" type="video/mp4">
        </video>
    </div>
    <div class="description">
        <h1>Bienvenidos a alquiler y venta de casas campestres</h1>
        <p>Somos un servicio de alquiler y venta de las más exclusivas casas campestres en Colombia. Contamos con un catalogo de casas ubicadas en los mejores condominios de cada región.</p>
    </div>
    <div class="places">
        <div id="elpeñon">
        <h2>Condominio Campestre 
            <br>
            El Peñon</h2>
        </div>
        <div id="anapoima">
        <h2> Anapoima
        </h2>
        </div>
        </div>
</div>
        
    
</template>
<script>
export default {
    name:'home'
}
</script>
<style>
.container-home{
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
}
.title{
    display:flex;
    font-size:3rem;
    font-family: Share;
    text-align: center;
    justify-content: center;
    color:white;
    align-items: center;
    height:900px;
    text-shadow: -1px 0 rgb(46, 46, 46), 0 1px rgb(94, 94, 94), 1px 0 rgb(17, 17, 17), 0 -1px rgb(56, 56, 56);
}
video{
    margin-top:-70px;
    position: absolute;
    width:100%;
    height:900px;
    z-index:1;
}
    
.description{
    
    width:30%;
    margin:20px auto; 
    padding:5%;
    color:rgb(160, 157, 157);
    font-size: 1.2rem;
   
    background:transparent;
    border-radius: 5%;
    box-shadow: rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.description > h1{
    text-align: center;
    font-family:Share; 
}
.description > p{
    padding:5%;
    font-family:Raleway;
    font-weight: bolder; 
    text-align: justify;
}

.places{
    height:400px;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    grid-auto-rows: minmax(200px, auto);
    padding:5%;
    }
#elpeñon{
    background:url('https://i.pinimg.com/originals/c0/f4/31/c0f431be504f5e6ae465b0704f45979b.jpg');
    display:flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-size:2rem;
    text-align: center;
    font-family:Share; 
    border-radius: 2%;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    transition-duration: 1s;
    }
    #elpeñon:hover{
    filter:saturate(150%)contrast(0.8);
    cursor:pointer;
    }
#anapoima{
    background:url('https://www.cundinamarcaenlinea.com/wp-content/uploads/2020/05/mesa-de-yeguas-coronavirus.jpg');
    display:flex;
    align-items: center;
    justify-content: center;
    color:white;
    border-radius: 2%;
    font-size:2rem;
    font-family: Share; 
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    transition-duration: 1s;
    }
    #anapoima:hover{
    filter:saturate(150%)contrast(0.8);
     cursor:pointer;
    }



</style>