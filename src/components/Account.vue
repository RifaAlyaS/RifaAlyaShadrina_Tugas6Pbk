<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="(card, index) in cards" :key="index" class="my-card">
      <q-img :src="card.img">
        <div class="absolute-bottom">
          <div class="text-h6">{{ card.title }}</div>
          <div class="Price">{{ card.price }}</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn outline color="black" label="Wish List" />
        <q-btn flat color="black" label="Detail" />
        <q-btn flat color="red" label="Remove" @click="removeCard(index)" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data() {
    return {
      cards: [
        {
          img: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/netflix_macos_bigsur_icon_189917.png',
          title: 'Netflix',
          price: 'Rp 25.000/bulan'
        },
        {
          img: 'https://asset.kompas.com/crops/RZM2N2pRNhfwwQFjCb8nAFaCmv0=/141x40:623x361/750x500/data/photo/2022/12/02/638974d5aa23b.png',
          title: 'Viu',
          price: 'Rp 15.000/bulan'
        }
      ]
    };
  },
  methods: {
    removeCard(index) {
      this.cards.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 250px;
  height: 350px;
}
</style>
