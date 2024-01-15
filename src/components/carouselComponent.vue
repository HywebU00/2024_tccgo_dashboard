<template>
  <!-- show-arrows="hover" -->
  <v-carousel
    class="carousel"
    cycle
    hide-delimiter-background
    show-arrows
    hide-delimiters
  >
    <template v-slot:prev="{ props }">
      <button @click="props.onClick">
        <span class="prev"></span>
      </button>
    </template>
    <template v-slot:next="{ props }">
      <button @click="props.onClick">
        <span class="next"></span>
      </button>
    </template>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :src="slide.img"
      cover
      :key="i"
    >
      <div class="carouselTitle">{{ slide.title }}</div>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [
        {
          title: "圖說1",
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          title: "圖說2",
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          title: "圖說3",
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          title: "圖說4",
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          title: "圖說5",
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
      ],
    };
  },
};
</script>
