<template>
  <div class="container">
    <form @submit.prevent="save" class="form-container">
      <q-input v-model="form.title" label="Title" outlined></q-input>
      <q-input v-model="form.content" label="Content" outlined type="textarea" autogrow></q-input>
      <q-btn type="submit" glossy label="Save" color="deep-purple" class="save-button"></q-btn>
    </form>

    <q-table :rows="articles" :columns="columns" row-key="id" flat bordered class="table-container">
      <template v-slot:body-cell-title="props">
        <q-td :props="props" class="light-grey-text">
          <strong>{{ props.row.title }}</strong>
        </q-td>
      </template>
      <template v-slot:body-cell-content="props">
        <q-td :props="props" class="deep-gray-text">
          <span>{{ props.row.content }}</span>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn @click="edit(props.row)" icon="edit" flat color="purple" dense></q-btn>
          <q-btn @click="deleteArticle(props.row.id)" icon="delete" flat color="red" dense></q-btn>
        </q-td>
      </template>
    </q-table>

    <q-btn @click="load" glossy label="Load" color="deep-purple" class="load-button"></q-btn>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';
import { QInput, QBtn, QTable, QTd } from 'quasar';
import { v4 as uuidv4 } from 'uuid';

export default {
  components: { QInput, QBtn, QTable, QTd },
  setup() {
    const form = reactive({
      id: null,
      title: '',
      content: '',
    });
    const articles = ref([]);
    const columns = [
      { name: 'title', required: true, label: 'Title', align: 'left', field: row => row.title },
      { name: 'content', required: true, label: 'Content', align: 'left', field: row => row.content },
      { name: 'actions', required: true, label: 'Actions', align: 'left' }
    ];

    async function load() {
      try {
        const response = await axios.get('http://localhost:3000/articles');
        articles.value = response.data;
      } catch (error) {
        console.error('Error loading articles:', error);
      }
    }

    async function save() {
      try {
        const isNewArticle = !form.id;

        if (isNewArticle) {
          form.id = uuidv4();
          const response = await axios.post('http://localhost:3000/articles', form);
          articles.value.push(response.data);
        } else {
          const response = await axios.put(`http://localhost:3000/articles/${form.id}`, form);
          articles.value = articles.value.map(article => article.id === response.data.id ? response.data : article);
        }

        resetForm();
      } catch (error) {
        console.error('Error saving article:', error);
      }
    }

    function resetForm() {
      form.id = null;
      form.title = '';
      form.content = '';
    }

    async function deleteArticle(id) {
      try {
        await axios.delete(`http://localhost:3000/articles/${id}`);
        articles.value = articles.value.filter(article => article.id !== id);
      } catch (error) {
        console.error('Error deleting article:', error);
      }
    }

    function edit(article) {
      form.id = article.id;
      form.title = article.title;
      form.content = article.content;
    }

    onMounted(load);

    return { form, articles, columns, save, edit, load, deleteArticle };
  }
};
</script>


<style>
.container {
  background-color: #f0f0f0;
  padding: 20px;
}

.form-container {
  background-color: #dee1e7;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.input-field {
  margin-bottom: 10px;
}

.table-container {
  background-color: #917392;
}

.table-container .q-td {
  background-color: #dee1e7; /* Light gray for table rows */
}

</style>