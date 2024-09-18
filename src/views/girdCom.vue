<template>
  <div>
    <v-form-render
      :form-json="formJson"
      :form-data="formData"
      :option-data="optionData"
      ref="vFormRef"
    >
    </v-form-render>
    <div style="margin-bottom: 10px">
      <el-button type="primary" @click="addNew">增加</el-button>
    </div>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
</template>
<script>
  import myJson from './123.js';
  export default {
    data() {
      return {
        formJson: myJson,
        formData: {},
        optionData: {},
      };
    },
    methods: {
      addNew() {
        console.log(1);
        let curTab = 0;

        console.log(this.$refs.vFormRef.$data.widgetRefList);

        this.formJson.widgetList[0].tabs.forEach((ele, i) => {
          if (
            ele.id == this.$refs.vFormRef.$data.widgetRefList.tab.activeTabName
          ) {
            curTab = i;
          }
        });

        this.formJson.widgetList[0].tabs[curTab].widgetList.push({
          type: 'grid',
          category: 'container',
          icon: 'grid',
          cols: [
            {
              type: 'grid-col',
              category: 'container',
              icon: 'grid-col',
              internal: true,
              widgetList: [
                {
                  type: 'input',
                  icon: 'text-field',
                  formItemFlag: true,
                  options: {
                    name: 'input96282',
                    label: '',
                    labelAlign: '',
                    type: 'text',
                    defaultValue: '请输入',
                    placeholder: '',
                    columnWidth: '200px',
                    size: '',
                    labelWidth: '0',
                    labelHidden: false,
                    readonly: false,
                    disabled: false,
                    hidden: false,
                    clearable: true,
                    showPassword: false,
                    required: false,
                    requiredHint: '',
                    validation: '',
                    validationHint: '',
                    customClass: '',
                    labelIconClass: null,
                    labelIconPosition: 'rear',
                    labelTooltip: null,
                    minLength: null,
                    maxLength: null,
                    showWordLimit: false,
                    prefixIcon: '',
                    suffixIcon: '',
                    appendButton: false,
                    appendButtonDisabled: false,
                    buttonIcon: 'el-icon-search',
                    onCreated: '',
                    onMounted: '',
                    onInput: '',
                    onChange: '',
                    onFocus: '',
                    onBlur: '',
                    onValidate: '',
                    onAppendButtonClick: '',
                  },
                  id: 'input96282',
                },
              ],
              options: {
                name: 'gridCol22887',
                hidden: false,
                span: 16,
                offset: 0,
                push: 0,
                pull: 0,
                responsive: false,
                md: 12,
                sm: 12,
                xs: 12,
                customClass: '',
              },
              id: 'grid-col-22887',
            },
            {
              type: 'grid-col',
              category: 'container',
              icon: 'grid-col',
              internal: true,
              widgetList: [
                {
                  type: 'select',
                  icon: 'select-field',
                  formItemFlag: true,
                  options: {
                    name: 'select77598',
                    label: '',
                    labelAlign: '',
                    defaultValue: '',
                    placeholder: '',
                    columnWidth: '200px',
                    size: '',
                    labelWidth: '0',
                    labelHidden: false,
                    disabled: false,
                    hidden: false,
                    clearable: true,
                    filterable: false,
                    allowCreate: false,
                    remote: false,
                    automaticDropdown: false,
                    multiple: false,
                    multipleLimit: 0,
                    optionItems: [
                      {
                        value: '一级',
                        label: '一级',
                      },
                      {
                        value: '二级',
                        label: '二级',
                      },
                      {
                        value: '三级',
                        label: '三级',
                      },
                      {
                        value: '四级',
                        label: '四级',
                      },
                      {
                        value: '五级',
                        label: '五级',
                      },
                    ],
                    required: false,
                    requiredHint: '',
                    validation: '',
                    validationHint: '',
                    customClass: '',
                    labelIconClass: null,
                    labelIconPosition: 'rear',
                    labelTooltip: null,
                    onCreated: '',
                    onMounted: '',
                    onRemoteQuery: '',
                    onChange: '',
                    onFocus: '',
                    onBlur: '',
                    onValidate: '',
                  },
                  id: 'select77598',
                },
              ],
              options: {
                name: 'gridCol114722',
                hidden: false,
                span: 8,
                offset: 0,
                push: 0,
                pull: 0,
                responsive: false,
                md: 12,
                sm: 12,
                xs: 12,
                customClass: '',
              },
              id: 'grid-col-114722',
            },
          ],
          options: {
            name: 'grid84809',
            hidden: false,
            gutter: 12,
            colHeight: null,
            customClass: [],
          },
          id: 'grid84809',
        });
      },
      submitForm() {
        // this.formJson.widgetList[0].tabs[0].widgetList.push({
        //   type: 'select',
        //   icon: 'select-field',
        //   formItemFlag: true,
        //   options: {
        //     name: 'select12966',
        //     label: 'select',
        //     labelAlign: '',
        //     defaultValue: '',
        //     placeholder: '',
        //     columnWidth: '200px',
        //     size: '',
        //     labelWidth: null,
        //     labelHidden: false,
        //     disabled: false,
        //     hidden: false,
        //     clearable: true,
        //     filterable: false,
        //     allowCreate: false,
        //     remote: false,
        //     automaticDropdown: false,
        //     multiple: false,
        //     multipleLimit: 0,
        //     optionItems: [
        //       {
        //         value: '一级',
        //         label: '一级',
        //       },
        //       {
        //         value: '二级',
        //         label: '二级',
        //       },
        //       {
        //         value: '三级',
        //         label: '三级',
        //       },
        //     ],
        //     required: false,
        //     requiredHint: '',
        //     validation: '',
        //     validationHint: '',
        //     customClass: [],
        //     labelIconClass: null,
        //     labelIconPosition: 'rear',
        //     labelTooltip: null,
        //     onCreated: '',
        //     onMounted: '',
        //     onRemoteQuery: '',
        //     onChange: '',
        //     onFocus: '',
        //     onBlur: '',
        //     onValidate: '',
        //   },
        //   id: 'select12966',
        // });
        // console.log(this.$refs.vFormRef.$data.widgetRefList.tab.activeTabName);
        // this.$refs.vFormRef
        //   .getFormData()
        //   .then((formData) => {
        //     // Form Validation OK
        //     alert(JSON.stringify(formData));
        //   })
        //   .catch((error) => {
        //     // Form Validation failed
        //     this.$message.error(error);
        //   });
      },
    },
  };
</script>

<style>
  .el-form-item__content {
    display: flex;
  }
  .el-radio {
    margin-right: 30px !important;
    display: flex !important;
    align-items: center;
  }
  
  .el-checkbox-group {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
</style>
