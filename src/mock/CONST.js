/** 
 * mock 静态数据
*/

const NAV_LIST = [{
	title: '概览',
	name: 'home',
	url: '/home',
	icon: 'home',
	isFLIcon: false
}, {
	title: '布局',
	name: 'layout',
	url: '/layout',
	icon: 'layout',
	isFLIcon: true,
	children: [{
		title: 'Flex',
		name: 'flex',
		url: '/layout/flex',
		icon: 'leaf',
		isFLIcon: false
	}, {
		title: 'Rem',
		name: 'rem',
		url: '/layout/Rem',
		icon: 'leaf',
		isFLIcon: false
	}]
}];

const LAYOUT_VAR = {
	HEADER_H: 60,
	COLLAPSED_SIDER_W: 78
};


export {
	NAV_LIST,
	LAYOUT_VAR
};