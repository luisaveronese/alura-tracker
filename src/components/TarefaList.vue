<template>
    <BoxMessage>
        <div class="columns">
            <div class="column is-4">{{ tarefa.descricao || 'Tarefa sem descrição'}}</div>
            <div class="column is-3">{{ tarefa.projeto?.nome || 'N/D' }}</div>
            <div class="column"><CronometroForm :tempoEmSegundos="tarefa.duracaoEmSegundos" /></div>
        </div>
    </BoxMessage>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';
import CronometroForm from './CronometroForm.vue';
import ITarefa from '../interfaces/ITarefa'
import BoxMessage from './BoxMessage.vue';

export default defineComponent({
    name: 'TarefaList',
    components: {
    CronometroForm,
    BoxMessage
},
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    }
})

</script>

