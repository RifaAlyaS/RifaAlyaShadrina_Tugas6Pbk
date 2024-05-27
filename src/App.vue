<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 700px" class="shadow-2 rounded-borders">
      <q-header class="custom-header" elevated>
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" />

          <q-toolbar-title class="custom-title">All Online Stuff</q-toolbar-title>

          <q-btn flat icon="shopping_cart" @click="switchToCart" />
        </q-toolbar>

        <q-tabs v-model="tab">
          <q-tab name="Home" label="Home" />
          <q-tab name="Account" label="Account" />
          <q-tab name="Software" label="Software" />
        </q-tabs>
      </q-header>

      <q-footer class="custom-footer" elevated>
        <q-toolbar>
          <q-toolbar-title class="footer-title"> All You Need Is Here</q-toolbar-title>
        </q-toolbar>
      </q-footer>

      <q-page-container>
        <q-page class="q-pa-md">
          <Home v-if="tab === 'Home'" />
          <Account v-if="tab === 'Account'" />
          <Software v-if="tab === 'Software'" />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue';
import Home from './components/Home.vue';
import Software from './components/Software.vue';
import Account from './components/Account.vue';

export default {
  components: {
    Home,
    Account,
    Software
  },
  setup() {
    const tab = ref('Home');
    return {
      tab
    };
  }
}
</script>

<style>
.custom-header {
  background-color: #000205;
}
.custom-title {
  font-size: 24px; 
  font-weight: bold;
}
.custom-avatar {
  margin-top: 1px;
}
.custom-footer {
  background-color: #000000; 
  text-align: center; 
}
.footer-title {
  color: rgb(255, 255, 255); 
}
.bg-sky-blue {
  background-color: skyblue;
}
</style>
