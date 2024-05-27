<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-img src="https://i.pinimg.com/474x/d5/ed/ca/d5edcac92858f3b608ae5ba6e68a780d.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">Fl Studio</div>
          <div class="Price">200.000</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn outline color="black" label="Wish List" />
        <q-btn flat color="black" label="Detail" />
      </q-card-actions>                 
    </q-card>

    <q-card class="my-card">
      <q-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtl83uHcdp2-KhMaxHYw03tb8aEpPYmkTkTjwJ-QV6cGlW4g0NLTJDgdLvmp7ASvcgr_o&usqp=CAU">
        <div class="absolute-bottom">
          <div class="text-h6">Adobe After Effects</div>
          <div class="Price">Rp 8.000.000/tahun</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn outline color="black" label="Wish List" />
        <q-btn flat color="black" label="Detail" />
      </q-card-actions>                 
    </q-card>

  </div>
</template>

<script>
export default {
  name: 'Software'
}
</script>

<style scoped>
.my-card {
  width: 250px;
  height: 350px;
}
</style>