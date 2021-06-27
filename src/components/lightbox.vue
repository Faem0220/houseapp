<template>
  <div id="app">
    <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      items: [
        'https://cdn.pixabay.com/photo/2021/02/02/18/46/city-5974876_960_720.jpg',
        '/img/casa2/3.jpg',
      ],
      index: null
    };
  },
};
</script>