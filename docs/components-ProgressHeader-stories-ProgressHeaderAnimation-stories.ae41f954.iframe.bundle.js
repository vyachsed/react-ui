"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7035],{"./src/components/ProgressHeader/stories/ProgressHeaderAnimation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProgressHeaderAnimation:()=>ProgressHeaderAnimation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProgressHeaderAnimation_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ProgressHeader=__webpack_require__("./src/components/ProgressHeader/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledProgressHeader=(0,styled_components_browser_esm.default)(ProgressHeader.g).withConfig({displayName:"ProgressHeaderAnimationtemplate__StyledProgressHeader",componentId:"sc-nskw3r-0"})(["bottom:90%;"]),ProgressHeaderAnimationTemplate=({appearance="primary",percent,...props})=>{const[tik,setTick]=react.useState(0);return react.useEffect((()=>{const timerId=setTimeout((()=>setTick((prev=>prev+1))),1e3);return tik>=20&&clearTimeout(timerId),()=>{clearTimeout(timerId)}}),[tik]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(StyledProgressHeader,{...props,appearance,percent:percent||tik,role:"alert","aria-live":"assertive"})})};try{ProgressHeaderAnimationTemplate.displayName="ProgressHeaderAnimationTemplate",ProgressHeaderAnimationTemplate.__docgenInfo={description:"",displayName:"ProgressHeaderAnimationTemplate",props:{percent:{defaultValue:null,description:"Значение прогресса от 1 до 100",name:"percent",required:!1,type:{name:"number"}},appearance:{defaultValue:{value:"primary"},description:"Вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressHeader/stories/ProgressHeaderAnimation.template.tsx#ProgressHeaderAnimationTemplate"]={docgenInfo:ProgressHeaderAnimationTemplate.__docgenInfo,name:"ProgressHeaderAnimationTemplate",path:"src/components/ProgressHeader/stories/ProgressHeaderAnimation.template.tsx#ProgressHeaderAnimationTemplate"})}catch(__react_docgen_typescript_loader_error){}const Desc=styled_components_browser_esm.default.div.withConfig({displayName:"ProgressHeaderAnimationstories__Desc",componentId:"sc-1jl9a9c-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),Description=()=>(0,jsx_runtime.jsx)(Desc,{children:"Показывает визуальный прогресс загрузки страницы. Компонент отображается наверху страницы, непосредственно под шапкой браузера на самом верху рабочей области сайта. Ширина равняется ширине окна браузера."});Description.displayName="Description";const ProgressHeaderAnimation_stories={title:"Admiral-2.1/ProgressHeader/Animation",decorators:void 0,component:ProgressHeader.g,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(Description,{}),design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A24985"}},argTypes:{appearance:{options:["primary","error"],control:{type:"radio"}},percent:{control:!1}}},ProgressHeaderAnimationStory=props=>(0,jsx_runtime.jsx)(ProgressHeaderAnimationTemplate,{...props});ProgressHeaderAnimationStory.displayName="ProgressHeaderAnimationStory";const ProgressHeaderAnimation={render:ProgressHeaderAnimationStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport styled from 'styled-components';\n\nimport { ProgressHeader } from '@admiral-ds/react-ui';\nimport type { ProgressHeaderProps } from '@admiral-ds/react-ui';\n\nconst StyledProgressHeader = styled(ProgressHeader)`\n  bottom: 90%;\n`;\n\nexport const ProgressHeaderAnimationTemplate = ({ appearance = 'primary', percent, ...props }: ProgressHeaderProps) => {\n  const [tik, setTick] = React.useState(0);\n\n  React.useEffect(() => {\n    const counter = () => setTick((prev) => prev + 1);\n    const timerId = setTimeout(counter, 1000);\n    if (tik >= 20) {\n      clearTimeout(timerId);\n    }\n    return () => {\n      clearTimeout(timerId);\n    };\n  }, [tik]);\n\n  return (\n    <>\n      <StyledProgressHeader\n        {...props}\n        appearance={appearance}\n        percent={percent || tik}\n        role=\"alert\"\n        aria-live=\"assertive\"\n      />\n    </>\n  );\n};\n"}}},name:"Прогресс бар с анимацией"};ProgressHeaderAnimation.parameters={...ProgressHeaderAnimation.parameters,docs:{...ProgressHeaderAnimation.parameters?.docs,source:{originalSource:"{\n  render: ProgressHeaderAnimationStory,\n  parameters: {\n    docs: {\n      source: {\n        code: ProgressHeaderAnimationRaw\n      }\n    }\n  },\n  name: 'Прогресс бар с анимацией'\n}",...ProgressHeaderAnimation.parameters?.docs?.source}}};const __namedExportsOrder=["ProgressHeaderAnimation"]},"./src/components/ProgressHeader/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>ProgressHeader});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({displayName:"ProgressHeader__Container",componentId:"sc-153jy90-0"})(["position:fixed;top:0;left:0;bottom:0;right:0;"]),Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({displayName:"ProgressHeader__Wrapper",componentId:"sc-153jy90-1"})(["background:",";min-width:140px;min-height:4px;display:flex;"],(({theme})=>theme.color["Neutral/Neutral 20"])),Progress=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({displayName:"ProgressHeader__Progress",componentId:"sc-153jy90-2"})(["background:",";width:","%;transition:all 0.3s linear;"],(({theme,appearance})=>"error"===appearance?theme.color["Error/Error 60 Main"]:theme.color["Primary/Primary 60 Main"]),(({percent})=>percent)),ProgressHeader=({percent=0,appearance="primary",...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Container,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Wrapper,{appearance,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Progress,{appearance,percent})})});ProgressHeader.displayName="ProgressHeader",ProgressHeader.displayName="ProgressHeader";try{ProgressHeader.displayName="ProgressHeader",ProgressHeader.__docgenInfo={description:"",displayName:"ProgressHeader",props:{percent:{defaultValue:{value:"0"},description:"Значение прогресса от 1 до 100",name:"percent",required:!1,type:{name:"number"}},appearance:{defaultValue:{value:"primary"},description:"Вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressHeader/index.tsx#ProgressHeader"]={docgenInfo:ProgressHeader.__docgenInfo,name:"ProgressHeader",path:"src/components/ProgressHeader/index.tsx#ProgressHeader"})}catch(__react_docgen_typescript_loader_error){}}}]);