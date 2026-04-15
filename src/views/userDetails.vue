<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

    const router = useRoute()
    const user = ref(null)
    const loading = ref(true)
    const error = ref(null)

    async function fetchUser() {
        try {
            loading.value = true
            const username = router.params.username
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
            const data = await response.json()
            user.value = data[0]
        } catch (err) {
            console.log(err)
            error.value = 'Erro ao carregor o user'
        } finally{
            loading.value = false
        }

    }
    onMounted(() => {
        fetchUser()
    })
</script>
<template>
    <RouterLink :to="{name: 'users'}">
    </RouterLink>

    <h2>Detalhes do usuario</h2>
    <p v-if="loading">Carregando</p>
    <p v-else-if="error">{{error}}</p>

    <div v-else-if="user">
        <p> Email: {{user.email}}</p>
        <p> Fone: {{user.phone}}</p>
        <p> Website: {{user.website}}</p>
    </div>

</template>