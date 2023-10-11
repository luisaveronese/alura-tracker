<template>
    <section>
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeProjeto" class="label">
                    Nome do Projeto
                </label>
                <input type="text" class="input" v-model="nomeProjeto" id="nomeProjeto">
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
        <br>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from "@/store";
import { ALTERA_PROJETO, ADICIONA_PROJETO } from '@/store/tipo-mutacoes';
import { TipoNotificacao } from "@/interfaces/INotificacao";
import useNotificador from "@/hooks/notificador";


export default defineComponent({
    name: "FormularioView",
    props:{
        id: {
            type: String
        }
    },
    mounted () {
        if(this.id){
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
            this.nomeProjeto = projeto?.nome || ""
        }
    },
    data () {
        return {
            nomeProjeto: ""
        };
    },
    methods: {
        salvar () {
            if (this.id) {
                this.store.commit(ALTERA_PROJETO, {
                    id: this.id,
                    nome: this.nomeProjeto
                })
            } else {
            this.store.commit(ADICIONA_PROJETO, this.nomeProjeto)
            }
            this.nomeProjeto = ""
            this.notificar(TipoNotificacao.SUCESSO, 'Tudo OK!', 'O projeto foi cadastrado com sucesso.')
            this.$router.push('/projetos')
        },  
    },
    setup () {
        const store = useStore()
        const { notificar } = useNotificador()
        return {
            store,
            notificar
        }
    }
})
</script>

<style scoped>
    .title{
        color: var(--texto-primario);
        background-color: var(--bg-primario);
    }
    .label{
        color: var(--texto-primario);
        background-color: var(--bg-primario);
    }

</style>
