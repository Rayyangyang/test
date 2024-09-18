import NaTable from './src/table';

/* istanbul ignore next */
NaTable.install = function(Vue) {
  Vue.component(NaTable.name, NaTable);
};

export default NaTable;
