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
        const err = 'There is no theme in the object';
        commit(APP_TYPES.APP_SET_THEME, state.theme);
        reject(err);
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
        const err = 'There is no layout in the object';
        commit(APP_TYPES.APP_SET_LAYOUT, state.layout);
        reject(err);
      }
    });
  },
  handleLayoutFixChange({commit, state}, payload) {
    return new Promise((resolve, reject) => {
      if('isFix' in payload) {
        setTimeout(() => {
          commit(APP_TYPES.APP_SET_LAYOUT_FIX, payload);
          resolve();
        }, 500);        
      }
      else {
        const err = 'There is no isFix in the object';
        commit(APP_TYPES.APP_SET_LAYOUT_FIX, state.isFix);
        reject(err);
      }
    });
  }
};