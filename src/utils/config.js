/**
 * some config of project
 */
var apiBaseUrl = '/';
const ghPath = "https://narutone.github.io/FLeaf-vue-admin/";
const PROJECT_NAME = 'FLeaf-vue-admin';
var resourcePath = '/' + PROJECT_NAME;

if(process.env.NODE_ENV == 'development') {
  apiBaseUrl = 'https://easy-mock.com/mock/5abcaca669ca000c0358d08a/FLVAdmin/';
} else {
  resourcePath = ghPath + PROJECT_NAME;
}

module.exports = {
  apiBaseUrl,
  systemName: 'FLV ADMIN',
  PName: '/' + PROJECT_NAME,
  resourcePath
};
