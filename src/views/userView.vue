<script setup>
import { ref, onMounted } from "vue";
import UserCard from '@/components/UserCard.vue'

const users = ref([]);
const loading = ref(true);
const error = ref(false);

async function fetchUsers() {
    console.log("HEllo")
    try {
        loading.value = true;
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        users.value = await response.json()
        console.log(users.value)
  } catch (err) {
    console.log(err)
    error.value = "Erro ao carregor o user";
  } finally {
    loading.value = false;
  }
}
onMounted(() => {
  fetchUsers();
});
</script>
<template>
  <h1>Lista de usuários</h1>
  <p v-if="loading">Carregando</p>
  <p v-else-if="error">{{ error }}</p>
  <ul v-else>
    <li v-for="user in users" :key="user.id">
      <UserCard :user="user" />
    </li>
  </ul>
</template>
