import Vue from 'vue';
import Router from 'vue-router';
import NavBar from './components/navbar.vue';
import Footer from './components/footer.vue';
import home from './pages/home.vue';
import venta from './pages/venta.vue';
import casa1 from './houses/venta/casa1.vue'
import alquiler from './pages/alquiler.vue';
import contacto from './pages/contacto.vue';


Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      components: { default: home, header: NavBar, footer:Footer},
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/venta',
      name: 'venta',
      components: {default: venta, header: NavBar, footer:Footer },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
        {
          path: '/venta/casa1',
          name: 'casa1',
          components: {default: casa1, header: NavBar, footer:Footer },
          props: {
            header: { colorOnScroll: 400 }
          } 
        },
    {
      path: '/alquiler',
      name: 'alquiler',
      components: { default: alquiler, header: NavBar},
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: '/contacto',
      name: 'contacto',
      components: { default: contacto, header: NavBar},
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    


  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
