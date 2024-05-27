<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-img src="data:image/png;base64,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">
        <div class="absolute-bottom">
          <div class="text-h6">Netflix</div>
          <div class="Price">Rp 25.000/bulan</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn outline color="black" label="Wish List" />
        <q-btn flat color="black" label="Detail" />
      </q-card-actions>                 
    </q-card>

    <q-card class="my-card">
      <q-img src="https://asset.kompas.com/crops/RZM2N2pRNhfwwQFjCb8nAFaCmv0=/141x40:623x361/750x500/data/photo/2022/12/02/638974d5aa23b.png">
        <div class="absolute-bottom">
          <div class="text-h6">Viu</div>
          <div class="Price">Rp 15.000/bulan</div>
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
  name: 'Account'
}
</script>

<style scoped>
.my-card {
  width: 250px;
  height: 350px;
}
</style>