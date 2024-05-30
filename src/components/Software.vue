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
  name: 'Software',
  data() {
    return {
      cards: [
        {
          img: 'https://i.pinimg.com/474x/d5/ed/ca/d5edcac92858f3b608ae5ba6e68a780d.jpg',
          title: 'Fl Studio',
          price: 'Rp 200.000'
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtl83uHcdp2-KhMaxHYw03tb8aEpPYmkTkTjwJ-QV6cGlW4g0NLTJDgdLvmp7ASvcgr_o&usqp=CAU',
          title: 'Adobe After Effects',
          price: 'Rp 8.000.000/tahun'
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
