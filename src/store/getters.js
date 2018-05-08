/**
 * store getters
 */

export default {
	theme(state) {
		return state.theme;
	},
	layout: state => state.layout,
	isCollapsed: state => state.isCollapsed
};