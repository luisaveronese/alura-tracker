<template>
    <section class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroForm :tempoEmSegundos="tempoEmSegundos" />
        <BotaoTemp @clicado="iniciar" icone="fas fa-play" texto="início" :desabilitado="cronometroRodando" />
        <BotaoTemp @clicado="finalizar" icone="fas fa-stop" texto="fim" :desabilitado="!cronometroRodando" />
    </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import CronometroForm from './CronometroForm.vue';
import BotaoTemp from './BotaoTemp.vue';

export default defineComponent({
    name: 'TemporizadorForm',
    emits: ['aoTemporizadorFinalizado'],
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        };
    },
    methods: {
        iniciar() {
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000);
        },
        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    },
    components: { 
        CronometroForm,
        BotaoTemp 
    }
})

</script>