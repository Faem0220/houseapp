<template>
<div class="container">
  <div class="formulario">
    <h1>Más información</h1>
    <form id="contact-form">
		<div class="form-group">
      <label id="name-label" for="name">Nombre</label>
      <br>
      <input
        type="text"
        name="name"
        id="name"
        class="form-control"
        placeholder="Ingresa tu nombre"
        required
      />
    </div>
    <div class="form-group">
      <label id="email-label" for="email">Email</label>
      <br>
      <input
        type="email"
        name="email"
        id="email"
        class="form-control"
        placeholder="Ingresa tu email"
        required
      />
    </div>
      <div class="form-group">
      <label id="number-label" for="number"
        >Teléfono</label>
      <br>
      <input
        type="tel"
        name="phone"
        id="number"
        class="form-control"
        placeholder="Ingresa tu número"
        pattern="[0-9]{3}-[0-9]{7}"
        required
      />
      <br>
      <small>Formato:3xx-xxxxxxx</small>
    </div>
    <div class="form-group">
      <p>Mensaje</p>
      <textarea
        class="input-textarea"
        name="comment"
        placeholder="Cuentanos qué te interesa"
      ></textarea>
    </div>

    <div class="form-group">
      <button type="submit" id="submit" class="submit-button">
        Enviar
      </button>
    </div>
    </form>
  </div>

  <div class="redes-sociales">
      <a href="https://www.facebook.com/groups/873473186016414"
         placeholder="Grupo de Facebook">
        <img
        class="social-icon"
        id="facebook" 
        src="/icon/facebook-icon.png"
        height="50">
      </a>

      <a href="https://www.instagram.com/condominio_campestre_el_penon/">
        <img
        class="social-icon"
        id="instagram" 
        src="/icon/instagram-icon.png"
        height="50">
      </a>

      <a href="https://wa.me/+573213583161">
        <img
        class="social-icon"
        id="whatsapp" 
        src="/icon/whatsapp-icon.png"
        height="50">
      </a>
      
  </div> 
</div>
        
    
</template>
<script>
export default {
    name:'contacto'
}
</script>
<style>
.container{
    background-image:url("/img/swim3.jpg");
    background-repeat: round;
    height: 770px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.formulario {
    display:flex;
    font-family: Raleway;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:10%;
    width: 400px;
    height: 440px;
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.3px );
    -webkit-backdrop-filter: blur( 2.3px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
}
#contact-form{
    text-align: center;
}
.form-group{
    padding-top:5%;
    padding-bottom:5%;
    font-size:1.3rem;
    font-weight: bolder;
}
.submit-button{
  width:100%;
  font-size:1.2rem;
}
.form-group > input{
  padding:5px;
  border-radius: 5px;
  }
.form-group > textarea{
  padding:5px;
  border-radius: 5px;
  }

.redes-sociales{
    width: 300px;
    margin-top:3%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
}
.social-icon:hover{
  transform:scale(1.5)
}

</style>