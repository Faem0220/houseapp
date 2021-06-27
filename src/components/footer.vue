<template>
    <div class="footer">
        <div id="terms">
            <a href=""> Condiciones de uso </a>
        </div>
        <div class="redes-sociales-footer">
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
        <div id="copyright">
        <p> &copy; 2021 </p>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<style>
.footer{
    height:15px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 9;
    font-family:Inconsolata;
    font-size:1.3rem;
    padding:3%;
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
    box-shadow: 0 8px 32px 0 rgba(237, 239, 255, 0.37); 
    }
.redes-sociales-footer{
    width: 300px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

</style>