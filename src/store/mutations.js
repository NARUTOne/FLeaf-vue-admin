/**
 * vuex mutations
 */

import {APP_TYPES} from '@/store/mutations-type';

export default {
	[APP_TYPES.APP_SET_THEME](state,  payload) {
		state.theme = payload.theme || 'drak'; 
	},
	[APP_TYPES.APP_SET_LAYOUT](state,  payload) {
		state.layout = payload.layout || 'left'; 
	},
	[APP_TYPES.APP_SET_LAYOUT_FIX](state, payload) {
		state.isFix = payload.isFix || false;
	},
	handleCollapsedSider(state, payload) {
		state.isCollapsed = payload.isCollapsed || false;
	}
};