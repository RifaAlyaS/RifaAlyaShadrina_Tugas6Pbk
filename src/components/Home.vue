<template>
  <div>
    <q-carousel
      v-model="slide"
      swipeable
      animated
      infinite
      class="bg-grey-2"
      height="400px"
      arrows
    >
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :name="index"
        :img-src="slide.img"
      >
        <div class="absolute-bottom text-center text-white q-pa-md overlay-text">
          <h4>{{ slide.title }}</h4>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="row q-pa-md">
      <div class="card-list">
        <q-card v-for="product in products" :key="product.id" class="q-mb-md product-card">
          <q-img :src="product.img" :alt="product.name" />
          <q-card-section>
            <q-card-title>{{ product.name }}</q-card-title>
            <q-card-subtitle>{{ product.price }}</q-card-subtitle>
            <q-rating size="20px" value="4" readonly class="q-mb-sm" />
            <div class="row justify-between">
              <q-btn outline color="black" label="Wish List" />
              <q-btn flat color="black" label="Detail" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      slides: [
        {
          img: 'https://shotkit.com/wp-content/uploads/2023/03/add_app_homescreen_ilgmyzin.jpg',
          title: 'Akun Premium dan Aplikasi Berbayar Murah'
        },
        {
          img: 'https://preview.redd.it/r0zy586loz861.png?width=640&crop=smart&auto=webp&s=4992253b5d69d59220513c038148d9ccdc8601ab',
          title: 'Akun Premium dan Aplikasi Berbayar Murah'
        },
        {
          img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/131772984/original/73339e8132592d1bb55b5471fa0f2fbefa6b9d22/upload-your-music-to-all-streaming-platforms.jpg',
          title: 'Akun Premium dan Aplikasi Berbayar Murah'
        }
      ],
      products: [
        {
          id: 1,
          name: 'Spotify Premium',
          price: ' Rp 30.000/bulan',
          img: 'https://img.freepik.com/premium-vector/spotify-icon-paper-cut-style-social-media-icons_505135-254.jpg?w=740',
        },
        {
          id: 2,
          name: 'Youtube Premium',
          price: ' Rp 10.000',
          img: 'https://static-00.iconduck.com/assets.00/youtube-icon-2048x2048-wiwalbpx.png',
        },
        {
          id: 3,
          name: 'Adobe Photoshop Teams',
          price: ' Rp 6.000.000',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/788px-Adobe_Photoshop_CC_icon.svg.png',
        },
      ],
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.q-pa-md {
  padding: 16px;
}
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
.product-card {
  width: calc(33% - 16px);
  min-width: 250px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}
.overlay-text {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
}
.bg-sky-blue {
  background-color: skyblue;
}
</style>
