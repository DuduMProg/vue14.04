<script setup>

import { RouterLink } from 'vue-router';

defineProps({
    user:{
        type: Object,
        requiered: true
    }
})

</script>

<template>
    <RouterLink :to="{name: 'user-detail', params: {username: user.username}}">
        {{user.name}}
    </RouterLink>
        {{user.email}}
</template>







