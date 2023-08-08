"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[9479],{"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 0 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08 6.41 5.49Z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgInfoSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm9-4.75a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7ZM14.1 16a.75.75 0 0 1-.75.75h-.05a2.05 2.05 0 0 1-2.05-2.05v-3.75a.75.75 0 0 1 1.5 0v3.75c0 .304.246.55.55.55h.05a.75.75 0 0 1 .75.75Z",clipRule:"evenodd"})))};__webpack_require__.p},"./src/components/form/CheckboxField/stories/CheckboxField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxFieldBase:()=>CheckboxFieldBase,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CheckboxField_stories});var react=__webpack_require__("./node_modules/react/index.js"),CheckboxField=__webpack_require__("./src/components/form/CheckboxField/index.tsx"),CheckboxDimension=__webpack_require__("./src/components/Checkbox/CheckboxDimension.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Hint=__webpack_require__("./src/components/Hint/index.tsx"),InfoSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=styled_components_browser_esm.default.div.withConfig({displayName:"CheckboxFieldBasetemplate__Container",componentId:"sc-48edip-0"})(["display:flex;flex-direction:column;> *{margin-top:16px;}"]),CheckboxFieldBase_template_InfoSolid=(0,styled_components_browser_esm.default)(InfoSolid.r).withConfig({displayName:"CheckboxFieldBasetemplate__InfoSolid",componentId:"sc-48edip-1"})(["margin-left:5px;width:",";& *[fill^='#']{fill:",";}[data-focus-within] & *[fill^='#']{fill:",";}&:hover *[fill^='#']{fill:",";}"],(props=>"m"===props.dimension?"24px":"20px"),(p=>p.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Primary/Primary 70"]),(props=>props.theme.color["Primary/Primary 70"])),CheckboxWithInformer=styled_components_browser_esm.default.div.withConfig({displayName:"CheckboxFieldBasetemplate__CheckboxWithInformer",componentId:"sc-48edip-2"})(["display:flex;align-items:flex-start;"]),CheckboxFieldBaseTemplate=props=>{const[checked,setChecked]=react.useState(props.checked??!1),[visible1,setVisible1]=react.useState(!1),[visible2,setVisible2]=react.useState(!1);return react.useEffect((()=>{setChecked(Boolean(props.checked))}),[props.checked]),(0,jsx_runtime.jsx)(styled_components_browser_esm.ThemeProvider,{theme:function swapBorder(theme){return theme.shape.borderRadiusKind=props.themeBorderKind||theme.shape.borderRadiusKind,theme},children:(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(CheckboxField.ji,{...props,checked,onChange:e=>{setChecked(e.target.checked)},"data-container-id":"checkboxFieldIdOne",id:"checkboxFieldId",name:"checkboxFieldName",children:"Управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.ji,{dimension:"s","data-container-id":"checkboxFieldIdTwo",children:"Не управляемый маленький чекбокс"}),(0,jsx_runtime.jsxs)(CheckboxField.ji,{dimension:"m","data-container-id":"checkboxFieldIdThree",children:["Двойная",(0,jsx_runtime.jsx)("br",{}),"строка"]}),(0,jsx_runtime.jsx)(CheckboxField.ji,{disabled:!0,defaultChecked:!0,extraText:"Дополнительный текст. Additional text","data-container-id":"checkboxFieldIdFour",children:"Disabled не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.ji,{disabled:!0,"data-container-id":"checkboxFieldIdFive",children:"Disabled не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.ji,{readOnly:!0,defaultChecked:!0,"data-container-id":"checkboxFieldIdSix",children:"Readonly не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.ji,{readOnly:!0,extraText:"Дополнительный текст. Additional text","data-container-id":"checkboxFieldIdSeven",children:"Readonly не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.ji,{error:!0,extraText:(0,jsx_runtime.jsxs)("span",{children:["Вариация с ",(0,jsx_runtime.jsx)("i",{children:"дополнительно"})," декорированным ",(0,jsx_runtime.jsx)("b",{children:"текстом"})]}),"data-container-id":"checkboxFieldIdEight",children:"Error не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.ji,{dimension:"s",indeterminate:!0,extraText:"Вариация с дополнительным текстом","data-container-id":"checkboxFieldIdNine",children:"Не управляемый маленький чекбокс indeterminate"}),(0,jsx_runtime.jsxs)(CheckboxWithInformer,{children:[(0,jsx_runtime.jsx)(CheckboxField.ji,{dimension:"m",extraText:"Вариация с информером","data-container-id":"checkboxFieldIdTen",children:"Чекбокс с информером"}),(0,jsx_runtime.jsx)(Hint.k,{...props,visible:visible1,onVisibilityChange:visible=>setVisible1(visible),renderContent:()=>"At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.",children:(0,jsx_runtime.jsx)(CheckboxFieldBase_template_InfoSolid,{dimension:"m","aria-hidden":!0})})]}),(0,jsx_runtime.jsxs)(CheckboxWithInformer,{children:[(0,jsx_runtime.jsx)(CheckboxField.ji,{dimension:"s",extraText:"Вариация с информером","data-container-id":"checkboxFieldIdEleven",children:"Маленький чекбокс с информером"}),(0,jsx_runtime.jsx)(Hint.k,{...props,visible:visible2,onVisibilityChange:visible=>setVisible2(visible),renderContent:()=>"At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.",children:(0,jsx_runtime.jsx)(CheckboxFieldBase_template_InfoSolid,{dimension:"s","aria-hidden":!0})})]})]})})};CheckboxFieldBaseTemplate.displayName="CheckboxFieldBaseTemplate";try{CheckboxFieldBaseTemplate.displayName="CheckboxFieldBaseTemplate",CheckboxFieldBaseTemplate.__docgenInfo={description:"",displayName:"CheckboxFieldBaseTemplate",props:{extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Текст или компонент для рендеринга лейбла",name:"children",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"",name:"hovered",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/CheckboxField/stories/CheckboxFieldBase.template.tsx#CheckboxFieldBaseTemplate"]={docgenInfo:CheckboxFieldBaseTemplate.__docgenInfo,name:"CheckboxFieldBaseTemplate",path:"src/components/form/CheckboxField/stories/CheckboxFieldBase.template.tsx#CheckboxFieldBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}const CheckboxField_stories={title:"Admiral-2.1/Form Field/CheckboxField",decorators:void 0,component:CheckboxField.ji,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21143"}]},argTypes:{dimension:{options:CheckboxDimension.F,control:{type:"radio"}},indeterminate:{control:{type:"boolean"}},checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},hovered:{control:{type:"boolean"}},extraText:{control:{type:"text"}},themeBorderKind:{options:borderRadius.g2,control:{type:"radio"}},children:{control:!1}}},CheckboxFieldBaseStory=props=>(0,jsx_runtime.jsx)(CheckboxFieldBaseTemplate,{...props});CheckboxFieldBaseStory.displayName="CheckboxFieldBaseStory";const CheckboxFieldBase={render:CheckboxFieldBaseStory,parameters:{docs:{source:{code:'import * as React from \'react\';\nimport styled, { ThemeProvider } from \'styled-components\';\n\nimport { CheckboxField, Hint } from \'@admiral-ds/react-ui\';\nimport type { CheckboxFieldProps, Theme, CheckboxDimension, BorderRadiusType } from \'@admiral-ds/react-ui\';\nimport { ReactComponent as InfoSolidSVG } from \'@admiral-ds/icons/build/service/InfoSolid.svg\';\n\nconst Container = styled.div`\n  display: flex;\n  flex-direction: column;\n\n  > * {\n    margin-top: 16px;\n  }\n`;\n\nconst InfoSolid = styled(InfoSolidSVG)<{ dimension: CheckboxDimension }>`\n  margin-left: 5px;\n  width: ${(props) => (props.dimension === \'m\' ? \'24px\' : \'20px\')};\n\n  & *[fill^=\'#\'] {\n    fill: ${(p) => p.theme.color[\'Neutral/Neutral 50\']};\n  }\n  [data-focus-within] & *[fill^=\'#\'] {\n    fill: ${(props) => props.theme.color[\'Primary/Primary 70\']};\n  }\n  &:hover *[fill^=\'#\'] {\n    fill: ${(props) => props.theme.color[\'Primary/Primary 70\']};\n  }\n`;\n\nconst CheckboxWithInformer = styled.div`\n  display: flex;\n  align-items: flex-start;\n`;\n\nexport const CheckboxFieldBaseTemplate = (props: CheckboxFieldProps & { themeBorderKind?: BorderRadiusType }) => {\n  const [checked, setChecked] = React.useState<boolean>(props.checked ?? false);\n\n  const [visible1, setVisible1] = React.useState(false);\n  const [visible2, setVisible2] = React.useState(false);\n  const handleHintChange1 = (visible: boolean) => setVisible1(visible);\n  const handleHintChange2 = (visible: boolean) => setVisible2(visible);\n\n  React.useEffect(() => {\n    setChecked(Boolean(props.checked));\n  }, [props.checked]);\n\n  function swapBorder(theme: Theme): Theme {\n    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;\n    return theme;\n  }\n\n  return (\n    <ThemeProvider theme={swapBorder}>\n      <Container>\n        <CheckboxField\n          {...props}\n          checked={checked}\n          onChange={(e) => {\n            setChecked(e.target.checked);\n          }}\n          data-container-id="checkboxFieldIdOne"\n          id="checkboxFieldId"\n          name="checkboxFieldName"\n        >\n          Управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField dimension="s" data-container-id="checkboxFieldIdTwo">\n          Не управляемый маленький чекбокс\n        </CheckboxField>\n        <CheckboxField dimension="m" data-container-id="checkboxFieldIdThree">\n          Двойная\n          <br />\n          строка\n        </CheckboxField>\n        <CheckboxField\n          disabled\n          defaultChecked\n          extraText="Дополнительный текст. Additional text"\n          data-container-id="checkboxFieldIdFour"\n        >\n          Disabled не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField disabled data-container-id="checkboxFieldIdFive">\n          Disabled не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField readOnly defaultChecked data-container-id="checkboxFieldIdSix">\n          Readonly не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField\n          readOnly\n          extraText="Дополнительный текст. Additional text"\n          data-container-id="checkboxFieldIdSeven"\n        >\n          Readonly не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField\n          error\n          extraText={\n            <span>\n              Вариация с <i>дополнительно</i> декорированным <b>текстом</b>\n            </span>\n          }\n          data-container-id="checkboxFieldIdEight"\n        >\n          Error не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField\n          dimension="s"\n          indeterminate\n          extraText="Вариация с дополнительным текстом"\n          data-container-id="checkboxFieldIdNine"\n        >\n          Не управляемый маленький чекбокс indeterminate\n        </CheckboxField>\n        <CheckboxWithInformer>\n          <CheckboxField dimension="m" extraText="Вариация с информером" data-container-id="checkboxFieldIdTen">\n            Чекбокс с информером\n          </CheckboxField>\n          <Hint\n            {...props}\n            visible={visible1}\n            onVisibilityChange={handleHintChange1}\n            renderContent={() =>\n              \'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.\'\n            }\n          >\n            <InfoSolid dimension="m" aria-hidden />\n          </Hint>\n        </CheckboxWithInformer>\n        <CheckboxWithInformer>\n          <CheckboxField dimension="s" extraText="Вариация с информером" data-container-id="checkboxFieldIdEleven">\n            Маленький чекбокс с информером\n          </CheckboxField>\n          <Hint\n            {...props}\n            visible={visible2}\n            onVisibilityChange={handleHintChange2}\n            renderContent={() =>\n              \'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.\'\n            }\n          >\n            <InfoSolid dimension="s" aria-hidden />\n          </Hint>\n        </CheckboxWithInformer>\n      </Container>\n    </ThemeProvider>\n  );\n};\n'}}},name:"CheckboxField example"};CheckboxFieldBase.parameters={...CheckboxFieldBase.parameters,docs:{...CheckboxFieldBase.parameters?.docs,source:{originalSource:"{\n  render: CheckboxFieldBaseStory,\n  parameters: {\n    docs: {\n      source: {\n        code: CheckboxFieldBaseRaw\n      }\n    }\n  },\n  name: 'CheckboxField example'\n}",...CheckboxFieldBase.parameters?.docs?.source}}};const __namedExportsOrder=["CheckboxFieldBase"]},"./src/components/Checkbox/CheckboxDimension.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>ALL_DIMENSIONS_VALUES});const ALL_DIMENSIONS_VALUES=["m","s"]},"./src/components/PositionInPortal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>PositionInPortal});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/observeRect.ts"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PositionedPortalContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({displayName:"PositionInPortal__PositionedPortalContainer",componentId:"sc-e6ntdu-0"})(["pointer-events:none;position:fixed;overflow:visible;z-index:",";"],(({theme})=>theme.zIndex.dropdown)),PositionInPortal=({targetRef,targetElement,rootRef,fullContainerWidth,...props})=>{const positionedPortalContainerRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const node=positionedPortalContainerRef.current,targetNode=targetRef.current??targetElement;if(node&&targetNode){const observer=(0,_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_4__.Z)(targetNode,(rect=>{if(rect){const{x,y,height,width}=rect,{style}=node;style.top=`${y}px`,style.left=fullContainerWidth?"0px":`${x}px`,style.height=`${height}px`,style.width=fullContainerWidth?"100%":`${width}px`}}));return observer.observe(),()=>{observer.unobserve()}}}),[targetRef,targetElement,fullContainerWidth]),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PositionedPortalContainer,{ref:positionedPortalContainerRef,...props}),rootRef?.current||document.body)};try{PositionedPortalContainer.displayName="PositionedPortalContainer",PositionedPortalContainer.__docgenInfo={description:"",displayName:"PositionedPortalContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionedPortalContainer"]={docgenInfo:PositionedPortalContainer.__docgenInfo,name:"PositionedPortalContainer",path:"src/components/PositionInPortal.tsx#PositionedPortalContainer"})}catch(__react_docgen_typescript_loader_error){}try{PositionInPortal.displayName="PositionInPortal",PositionInPortal.__docgenInfo={description:"При фиксированном позиционировании (как у PositionedPortalContainer) элемент позиционируется\nвсегда относительно исходного содержащего блока (окна браузера).\nИсключение, когда один из его предков имеет свойство transform, perspective, или filter,\nустановленное на что-то иное, кроме none, в этом случае этот предок ведет\nсебя как содержащий блок. Тогда top, right, bottom и left элемента рассчитываются относительно этого содержащего блока.\nЕсли у такого предка кроме transform задано свойство overflow: hidden, то элемент будет обрезаться по его краям.\n\nВ связи с вышеописанным в качестве контейнера для портала рекомендуется выбирать элемент, у предков которого нет свойств\ntransform, perspective, или filter отличных от none. Также рекомендуется размещать контейнер портала в самом низу dom-дерева,\nчтобы избежать возможных конфликтов стилей.",displayName:"PositionInPortal",props:{targetRef:{defaultValue:null,description:"Ref на элемент, относительно которого позиционируется портал",name:"targetRef",required:!0,type:{name:"RefObject<HTMLElement>"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!1,type:{name:"Element"}},rootRef:{defaultValue:null,description:"Контейнер, внутри которого будет отрисован портал, по умолчанию портал рендерится в document.body",name:"rootRef",required:!1,type:{name:"RefObject<HTMLElement>"}},fullContainerWidth:{defaultValue:null,description:"Отрисовка портала на всю ширину контейнера",name:"fullContainerWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionInPortal"]={docgenInfo:PositionInPortal.__docgenInfo,name:"PositionInPortal",path:"src/components/PositionInPortal.tsx#PositionInPortal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/hooks/useClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>useClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useClickOutside=(elements,handler)=>{const listener=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{elements.every((element=>element.current&&!element.current.contains(e.target)))&&handler(e)}),[handler,elements]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(document.addEventListener("mousedown",listener,!0),document.addEventListener("touchstart",listener),()=>{document.removeEventListener("mousedown",listener,!0),document.removeEventListener("touchstart",listener)})),[listener])}},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>observeRect});const props=["bottom","height","left","right","top","width"],rectChanged=(a={},b={})=>props.some((prop=>a[prop]!==b[prop]));function observeRect(node,cb){const state={};return{observe(){state.rafId&&cancelAnimationFrame(state.rafId);const run=()=>{if(state.isObserving){const{bottom,height,left,right,top,width,x,y}=node.getBoundingClientRect(),newRect={bottom,height,left,right,top,width,x:x||left,y:y||top};rectChanged(newRect,state.rect)&&(state.rect=newRect,cb(state.rect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/utils/throttle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>throttle});const throttle=(fn,delay)=>{let timeout,wait=!1,cancelled=!1;return[(...args)=>{if(cancelled)return;if(wait)return;const val=fn(...args);return wait=!0,timeout=window.setTimeout((()=>{wait=!1}),delay),val},()=>{cancelled=!0,clearTimeout(timeout)}]}}}]);