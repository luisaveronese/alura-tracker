<template>
    <FormularioTela @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <TarefaList v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <BoxMessage v-if="listaEstaVazia">
            Você ainda não realizou nenhuma tarefa hoje.
        </BoxMessage>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTela from '../components/FormularioTela.vue';
import TarefaList from '../components/TarefaList.vue';
import ITarefa from '../interfaces/ITarefa';
import BoxMessage from '../components/BoxMessage.vue';

export default defineComponent({
    name: 'App',
    components: {
        FormularioTela,
        TarefaList,
        BoxMessage
    },
    data() {
        return {
            tarefas: [] as ITarefa[]
        }
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa)
        }
    }
});
</script>
