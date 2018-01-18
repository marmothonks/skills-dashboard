// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
import Vuex from 'vuex'
//import the vue router
import VueRouter from 'vue-router'
//import the App component
import App from './App.vue'

import store from './store'

import LoginForm from './components/LoginForm.vue'
import SkillsList from './components/SkillsList.vue'

Vue.use(Vuex)


//tell vue to use the router
Vue.use(VueRouter)
const routes = [
  { path: '/skills', name: 'Skills', component: SkillsList },
  { path: '/login', name: 'Login', component: LoginForm }];

const router = new VueRouter({
  routes,
  mode: 'history'
})

// <!-- put this ABOVE your new Vue() declaration -->
Vue.component('skill-range', {
  template: `<div>
                <h6>{{skill.name}}</h6>
                 <input v-model="skillLevel" type="range" min="1" max="10" class="slider">
                </div>`,
  props: {
    skill: {
      type: Object,
      required: true,
      validator: function (value) {
        return (
          ["syncing", "synced", "version-conflict", "error"].indexOf(value) !== -1
        );
      }
    }
  },
  computed: {
    skillName: function () {
      return this.skill.name.trim().toUpperCase()
    },
    skillLevel: {
      // getter
      get: function () {
        return this.skill.level
      },
      // setter
      set: function (newValue) {
        const updatedSkill = { name: this.skill.name, level: newValue, id:  this.skill.id };

        this.$store.commit('changeLevel', updatedSkill)
      }
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})