"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[5072],{"./src/components/form/SliderRangeField/stories/SliderRangeField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SliderRangeFieldPlayground:()=>SliderRangeFieldPlayground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SliderRangeField_stories});__webpack_require__("./node_modules/react/index.js");var uid=__webpack_require__("./src/components/common/uid.ts"),Field=__webpack_require__("./src/components/Field/index.tsx"),SliderRange=__webpack_require__("./src/components/input/SliderRange/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SliderRangeField_Field=(0,styled_components_browser_esm.default)(Field.gN).withConfig({displayName:"SliderRangeField__Field",componentId:"sc-1qqwbba-0"})(["overflow:visible;"]),SliderRangeField=props=>{const{className,maxLength,displayInline,status,required,extraText,label,id=(0,uid.h)(),disabled,skeleton,...restProps}=props,fieldContainerProps={className,extraText,status,required,label,id,displayInline,disabled,maxLength,skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,splitDataAttributes.$l)(restProps,fieldContainerProps),(0,splitDataAttributes.Od)(restProps,fieldContainerProps);const componentProps={id,disabled,skeleton,...restProps};return(0,jsx_runtime.jsx)(SliderRangeField_Field,{...fieldContainerProps,children:(0,jsx_runtime.jsx)(SliderRange.i,{...componentProps})})};SliderRangeField.displayName="SliderRangeField",SliderRangeField.displayName="SliderRangeField";try{SliderRangeField.displayName="SliderRangeField",SliderRangeField.__docgenInfo={description:"",displayName:"SliderRangeField",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"value",required:!1,type:{name:"[string, string]"}},defaultValue:{defaultValue:null,description:"Дефолтное значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"defaultValue",required:!1,type:{name:"[string, string]"}},onChange:{defaultValue:null,description:"Колбек на изменение значений",name:"onChange",required:!1,type:{name:"((value: [{ str: string; num: number; }, { str: string; num: number; }]) => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},minValue:{defaultValue:null,description:"Минимальное значение слайдера",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"Максимальное значение слайдера",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"Шаг слайдера",name:"step",required:!1,type:{name:"number"}},precision:{defaultValue:null,description:"точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:null,description:"разделитель между тысячами",name:"thousand",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"префикс (строка, которая выводится перед числовым значением)",name:"prefix",required:!1,type:{name:"[string, string]"}},suffix:{defaultValue:null,description:"суффикс (строка, которая выводится после числового значения)",name:"suffix",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"плейсхолдеры инпутов",name:"placeholder",required:!1,type:{name:"[string, string]"}},input1:{defaultValue:null,description:"Опции, которые можно передать в первый инпут",name:"input1",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},input2:{defaultValue:null,description:"Опции, которые можно передать во второй инпут",name:"input2",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Режим readOnly компонента",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},required:{defaultValue:null,description:"Установка статуса поле обязательно для заполнения",name:"required",required:!1,type:{name:"boolean"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SliderRangeField/index.tsx#SliderRangeField"]={docgenInfo:SliderRangeField.__docgenInfo,name:"SliderRangeField",path:"src/components/form/SliderRangeField/index.tsx#SliderRangeField"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");const SliderRangeFieldPlaygroundTemplate=({label="Введите диапазон",...props})=>(0,jsx_runtime.jsx)(styled_components_browser_esm.ThemeProvider,{theme:function swapBorder(theme){return theme.shape.borderRadiusKind=props.themeBorderKind||theme.shape.borderRadiusKind,theme},children:(0,jsx_runtime.jsx)(SliderRangeField,{"data-container-id":"sliderRangeFieldIdOne",...props,label})});SliderRangeFieldPlaygroundTemplate.displayName="SliderRangeFieldPlaygroundTemplate";try{SliderRangeFieldPlaygroundTemplate.displayName="SliderRangeFieldPlaygroundTemplate",SliderRangeFieldPlaygroundTemplate.__docgenInfo={description:"",displayName:"SliderRangeFieldPlaygroundTemplate",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"value",required:!1,type:{name:"[string, string]"}},defaultValue:{defaultValue:null,description:"Дефолтное значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"defaultValue",required:!1,type:{name:"[string, string]"}},onChange:{defaultValue:null,description:"Колбек на изменение значений",name:"onChange",required:!1,type:{name:"((value: [{ str: string; num: number; }, { str: string; num: number; }]) => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},minValue:{defaultValue:null,description:"Минимальное значение слайдера",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"Максимальное значение слайдера",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"Шаг слайдера",name:"step",required:!1,type:{name:"number"}},precision:{defaultValue:null,description:"точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:null,description:"разделитель между тысячами",name:"thousand",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"префикс (строка, которая выводится перед числовым значением)",name:"prefix",required:!1,type:{name:"[string, string]"}},suffix:{defaultValue:null,description:"суффикс (строка, которая выводится после числового значения)",name:"suffix",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"плейсхолдеры инпутов",name:"placeholder",required:!1,type:{name:"[string, string]"}},input1:{defaultValue:null,description:"Опции, которые можно передать в первый инпут",name:"input1",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},input2:{defaultValue:null,description:"Опции, которые можно передать во второй инпут",name:"input2",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Режим readOnly компонента",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Введите диапазон"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},required:{defaultValue:null,description:"Установка статуса поле обязательно для заполнения",name:"required",required:!1,type:{name:"boolean"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SliderRangeField/stories/SliderRangeFieldPlayground.template.tsx#SliderRangeFieldPlaygroundTemplate"]={docgenInfo:SliderRangeFieldPlaygroundTemplate.__docgenInfo,name:"SliderRangeFieldPlaygroundTemplate",path:"src/components/form/SliderRangeField/stories/SliderRangeFieldPlayground.template.tsx#SliderRangeFieldPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");const SliderRangeField_stories={title:"Admiral-2.1/Form Field/SliderRangeField",component:SliderRangeField,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.t,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61377"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61446"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61513"}]},argTypes:{dimension:{options:types.q,control:{type:"radio"}},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}},displayCharacterCounter:{control:{type:"boolean"}},displayInline:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},extraText:{control:{type:"text"}},thousand:{control:{type:"text"}},suffix:{control:{type:"text"}},maxLength:{control:{type:"number"}},minValue:{control:{type:"number"}},maxValue:{control:{type:"number"}},step:{control:{type:"number"}},precision:{control:{type:"number"}},themeBorderKind:{options:borderRadius.g2,control:{type:"radio"}},skeleton:{control:{type:"boolean"}},name:{control:{type:"text"}},input1:{control:!1},input2:{control:!1},defaultValue:{control:!1},value:{control:!1},prefix:{control:!1},placeholder:{control:!1}}},SliderRangeFieldPlaygroundStory=props=>(0,jsx_runtime.jsx)(SliderRangeFieldPlaygroundTemplate,{...props});SliderRangeFieldPlaygroundStory.displayName="SliderRangeFieldPlaygroundStory";const SliderRangeFieldPlayground={render:SliderRangeFieldPlaygroundStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { ThemeProvider } from 'styled-components';\n\nimport { SliderRangeField } from '@admiral-ds/react-ui';\nimport type { SliderRangeFieldProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';\n\nexport const SliderRangeFieldPlaygroundTemplate = ({\n  label = 'Введите диапазон',\n  ...props\n}: SliderRangeFieldProps & { themeBorderKind?: BorderRadiusType }) => {\n  function swapBorder(theme: Theme): Theme {\n    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;\n    return theme;\n  }\n\n  return (\n    <ThemeProvider theme={swapBorder}>\n      <SliderRangeField data-container-id=\"sliderRangeFieldIdOne\" {...props} label={label} />\n    </ThemeProvider>\n  );\n};\n"}}},name:"SliderRangeField example"};SliderRangeFieldPlayground.parameters={...SliderRangeFieldPlayground.parameters,docs:{...SliderRangeFieldPlayground.parameters?.docs,source:{originalSource:"{\n  render: SliderRangeFieldPlaygroundStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SliderRangeFieldPlaygroundRaw\n      }\n    }\n  },\n  name: 'SliderRangeField example'\n}",...SliderRangeFieldPlayground.parameters?.docs?.source}}};const __namedExportsOrder=["SliderRangeFieldPlayground"]},"./src/components/Field/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bP:()=>ExtraTextContainer,gN:()=>Field});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Container=__webpack_require__("./src/components/input/Container.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CharacterCounter_Container=styled_components_browser_esm.default.div.withConfig({displayName:"CharacterCounter__Container",componentId:"sc-1sngjg6-0"})(["white-space:nowrap;"," color:",";transition:all 0.5s,color 0.5s;opacity:",";max-width:",";overflow:hidden;"],typography.c["Body/Body 2 Long"],(p=>p.error?p.theme.color["Error/Error 60 Main"]:p.theme.color["Neutral/Neutral 50"]),(p=>p.transparent&&!p.error?0:1),(p=>p.transparent&&!p.error?0:"none")),CharacterCounter=({maxLength,inputRef,...props})=>{const[currentCount,setCurrentCount]=react.useState(0);return react.useEffect((()=>{function oninput(){const{value}=this;setCurrentCount(value.length)}const node=inputRef.current;if(node)return node.addEventListener("input",oninput),oninput.call(node),()=>{node.removeEventListener("input",oninput)}}),[inputRef]),currentCount>.8*maxLength?(0,jsx_runtime.jsxs)(CharacterCounter_Container,{...props,error:currentCount>=maxLength,transparent:currentCount<.8*maxLength,children:[currentCount,"/",maxLength]}):null};try{CharacterCounter.displayName="CharacterCounter",CharacterCounter.__docgenInfo={description:"",displayName:"CharacterCounter",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!0,type:{name:"RefObject<HTMLInputElement | HTMLTextAreaElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"]={docgenInfo:CharacterCounter.__docgenInfo,name:"CharacterCounter",path:"src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"})}catch(__react_docgen_typescript_loader_error){}var Label=__webpack_require__("./src/components/Label/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts");const inlineMixin=(0,styled_components_browser_esm.css)(["flex-direction:row;justify-content:space-between;align-items:center;> *{flex:1 1 auto;}","{margin:0 8px 0 0;}"],Label._),Field_Container=styled_components_browser_esm.default.div.withConfig({displayName:"Field__Container",componentId:"sc-1wrg3lg-0"})(["display:flex;overflow:hidden;",""],(props=>props.displayInline?inlineMixin:"flex-direction: column;")),SkeletonLabel=styled_components_browser_esm.default.div.withConfig({displayName:"Field__SkeletonLabel",componentId:"sc-1wrg3lg-1"})(["position:absolute;top:0;left:0;height:16px;width:50%;margin-bottom:8px;",""],Container.c8),LabelContainer=styled_components_browser_esm.default.div.withConfig({displayName:"Field__LabelContainer",componentId:"sc-1wrg3lg-2"})(["position:relative;text-align:left;"]),textSkeletonMixin=(0,styled_components_browser_esm.css)(["color:transparent;"]),StyledLabel=(0,styled_components_browser_esm.default)(Label._).withConfig({displayName:"Field__StyledLabel",componentId:"sc-1wrg3lg-3"})(["",";"],(p=>p.skeleton&&textSkeletonMixin)),containerSkeletonMixin=(0,styled_components_browser_esm.css)(["visibility:hidden;"]),ExtrasContainer=styled_components_browser_esm.default.div.withConfig({displayName:"Field__ExtrasContainer",componentId:"sc-1wrg3lg-4"})(["display:flex;justify-content:space-between;",";"],(p=>p.skeleton&&containerSkeletonMixin)),ExtraTextContainer=styled_components_browser_esm.default.div.withConfig({displayName:"Field__ExtraTextContainer",componentId:"sc-1wrg3lg-5"})(["flex:1 1 auto;padding-top:8px;text-align:left;"," color:",";[data-disabled] &{color:",";}[data-status='error'] &{color:",";}[data-status='success'] &{color:",";}"],typography.c["Body/Body 2 Short"],(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.theme.color["Error/Error 60 Main"]),(props=>props.theme.color["Success/Success 50 Main"])),PositionedCharacterCounter=(0,styled_components_browser_esm.default)(CharacterCounter).withConfig({displayName:"Field__PositionedCharacterCounter",componentId:"sc-1wrg3lg-6"})(["flex:0 0 auto;padding:8px 0 0 8px;"]),Field=react.forwardRef((({children,maxLength,inputRef,displayCharacterCounter=!0,...props},ref)=>{const containerRef=react.useRef(null),[hasFocus,setFocus]=react.useState(!1),{className,style,displayInline,status,extraText,label,required,disabled,id=(0,uid.h)(),skeleton=!1,...restFieldProps}=props,fieldContainerProps={className,style,displayInline,...restFieldProps},labelProps={htmlFor:id,children:label,required,disabled};return react.useEffect((()=>{const onFocusIn=()=>{setFocus(!0)},onFocusOut=()=>{setFocus(!1)},containerNode=containerRef.current;return containerNode&&(containerNode.addEventListener("focusin",onFocusIn),containerNode.addEventListener("focusout",onFocusOut)),()=>{containerNode&&(containerNode.removeEventListener("focusin",onFocusIn),containerNode.removeEventListener("focusout",onFocusOut))}}),[]),(0,jsx_runtime.jsxs)(Field_Container,{...fieldContainerProps,"data-status":status,"data-focus-within":hasFocus?"":void 0,"data-required-within":required?"":void 0,"data-disabled":disabled?"":void 0,"data-read-only":!!props.readOnly||void 0,ref:(0,refSetter.O)(containerRef,ref),children:[labelProps.children&&(0,jsx_runtime.jsxs)(LabelContainer,{children:[skeleton&&(0,jsx_runtime.jsx)(SkeletonLabel,{}),(0,jsx_runtime.jsx)(StyledLabel,{skeleton,...labelProps})]}),(0,jsx_runtime.jsxs)("div",{children:[children,(0,jsx_runtime.jsxs)(ExtrasContainer,{skeleton,children:[extraText&&(0,jsx_runtime.jsx)(ExtraTextContainer,{children:extraText}),displayCharacterCounter&&inputRef&&void 0!==maxLength&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)(PositionedCharacterCounter,{maxLength,inputRef})]})]})]})]})}));Field.displayName="Field";try{ExtrasContainer.displayName="Field",ExtrasContainer.__docgenInfo={description:"",displayName:"Field",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Field/index.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"src/components/Field/index.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/typography.ts");const Label=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.label.withConfig({displayName:"Label",componentId:"sc-13m0084-0"})(["display:block;text-align:left;"," color:",";[data-disabled] &{color:",";}[data-focus-within] &{color:",";}[data-required-within] &:after{content:' *';color:",";}margin-bottom:8px;"],_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.c["Body/Body 2 Short"],(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.disabled?"":props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Error/Error 60 Main"]));Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLabelElement | null) => void) | RefObject<HTMLLabelElement> | null"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}__webpack_require__.d(__webpack_exports__,{h:()=>uid})},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$l:()=>passFormFieldDataAttributes,Od:()=>passFormFieldContainerDataAttributes,cP:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,wP:()=>passDropdownDataAttributes});const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container",FORM_FIELD_DATA_ATTRIBUTE="data-field",DROPDOWN_DATA_ATTRIBUTE="data-dropdown-container";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_ATTRIBUTE,!1)}function passDropdownDataAttributes(initialProps){const dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,DROPDOWN_DATA_ATTRIBUTE,!0),dropMenuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach((key=>{"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])}))}},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>DataAttributesDescription});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Desc=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({displayName:"common__Desc",componentId:"sc-1vhod0x-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),DataAttributesDescription=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.cP,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']});DataAttributesDescription.displayName="DataAttributesDescription"},"./src/components/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>INPUT_STATUS_VALUES,q:()=>INPUT_DIMENSIONS_VALUES});const INPUT_DIMENSIONS_VALUES=["xl","m","s"],INPUT_STATUS_VALUES=["error","success"]}}]);