/**
* 解析url参数
* @param {String} name 参数名
* @return {String} 值
*/
export function getValueFromLocationSearch(name: string) {
 const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
 const r = window.location.search.substr(1).match(reg);
 if (r != null) return window.decodeURI(r[2]);

 return null;
}
