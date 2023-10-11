<template>
    <div class="projetos">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'ProjetosView'
})

</script>
<style>
    .projetos {
        padding: 1.25rem;
    }
    .title {
        color: var(--bg-primario);

    }
</style>
