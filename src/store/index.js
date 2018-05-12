import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import modules from './modules/';

Vue.use(Vuex);

const initState = {
	theme: 'dark',
	layout: 'left',
	isCollapsed: false,
	isFix: false
};

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state: initState,
	getters,
	mutations,
	actions, 
	modules
});

export default store;