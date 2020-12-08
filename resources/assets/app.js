import Vue from 'vue';
import VueRouter from 'vue-router';
import NoteApp from './components/NoteApp.vue';
import routes from './routes';
import noteStore from './store/notesStore';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    el: "#app",
    render: h => h(NoteApp),
    router,
    store: noteStore,
});