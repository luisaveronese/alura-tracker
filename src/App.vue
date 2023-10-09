<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro' : modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioTela @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <TarefaList v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <BoxMessage v-if="listaEstaVazia">
          Você ainda não realizou nenhuma tarefa hoje.
        </BoxMessage>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTela from './components/FormularioTela.vue';
import TarefaList from './components/TarefaList.vue';
import ITarefa from './interfaces/ITarefa';
import BoxMessage from './components/BoxMessage.vue';

export default defineComponent({
    name: 'App',
    components: {
    BarraLateral,
    FormularioTela,
    TarefaList,
    BoxMessage
},
    data () {
      return {
        tarefas: [] as ITarefa[],
        modoEscuroAtivo: false
      }
    },
    computed: {
      listaEstaVazia (): boolean{
        return this.tarefas.length === 0
      }
    },
    methods: {
      salvarTarefa (tarefa: ITarefa){
        this.tarefas.push(tarefa)
      },
      trocarTema (modoEscuroAtivo: boolean) {
        this.modoEscuroAtivo = modoEscuroAtivo
      }
    }
});
</script>

<style>
  .lista {
    padding: 1.25rem;
  }
  main {
    --bg-primario: #fff;
    --texto-primario: #000;
  }
  main.modo-escuro {
    --bg-primario: #2b2d42;
    --texto-primario: #ddd;
  }
  .conteudo {
    background-color: var(--bg-primario);
  }
</style>
