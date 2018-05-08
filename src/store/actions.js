/**
 * vuex actions
 */

import {APP_TYPES} from '@/store/mutations-type';

export default {
	handleThemeChange({commit, state}, payload) {
		return new Promise((resolve, reject) => {
			if('theme' in payload) {
				setTimeout(() => {
					commit(APP_TYPES.APP_SET_THEME, payload);
					resolve();
				}, 500);
			}
			else {
				commit(APP_TYPES.APP_SET_THEME, state.theme);
				reject();
			}
		});
	},
	handleLayoutChange({commit, state}, payload) {
		return new Promise((resolve, reject) => {
			if('layout' in payload) {
				setTimeout(() => {
					commit(APP_TYPES.APP_SET_LAYOUT, payload);
					resolve();
				}, 500);        
			}
			else {
				commit(APP_TYPES.APP_SET_LAYOUT, state.layout);
				reject();
			}
		});
	}
};