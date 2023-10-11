import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import TarefasView from "../views/TarefasView.vue";
import ProjetosView from "../views/ProjetosView.vue";
import FormularioView from "../views/Projetos/FormularioView.vue";
import ListaView from "../views/Projetos/ListaView.vue";
const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'TarefasView',
        component: TarefasView
    },
    {
        path: '/projetos',
        component: ProjetosView,
        children: [
            {
                path: '',
                name: 'ProjetosView',
                component: ListaView
            },{
                path: 'novo',
                name: 'Novo projeto',
                component: FormularioView
            },
            {
                path: ':id',
                name: 'Editar Projeto',
                component: FormularioView,
                props: true
            },
        ]
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;
