
<template>
  <div id="app">
    <router-view name="header" />

    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>
<script>
export default {};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&family=Karla:wght@300&family=Noto+Sans+JP:wght@100&family=Share&family=Raleway:wght@100&display=swap');
* {
    margin: 0;
    padding: 0;
    }
    
</style>
