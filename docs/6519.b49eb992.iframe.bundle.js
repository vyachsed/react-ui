"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6519],{"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}__webpack_require__.d(__webpack_exports__,{h:()=>uid})},"./src/components/input/PhoneNumberInput/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>PhoneNumberInput});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),changeInputData=__webpack_require__("./src/components/common/dom/changeInputData.ts"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),TextInput=__webpack_require__("./src/components/input/TextInput/index.tsx"),SmallArrowDownOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/SmallArrowDownOutline.svg");const CountryCodes={AFG:["+93"],ALA:["+358"],ALB:["+355"],DZA:["+213"],ASM:["+1-684"],AND:["+376"],AGO:["+244"],AIA:["+1-264"],ATA:["+672"],ATG:["+1-268"],ARE:["+971"],ARG:["+54"],ARM:["+374"],ABW:["+297"],AUS:["+61"],AUT:["+43"],AZE:["+994"],BHS:["+1-242"],BHR:["+973"],BGD:["+880"],BRB:["+1-246"],BLR:["+375"],BEL:["+32"],BLZ:["+501"],BEN:["+229"],BMU:["+1-441"],BTN:["+975"],BOL:["+591"],BES:["+599"],BIH:["+387"],BWA:["+267"],BVT:["+47"],BRA:["+55"],IOT:["+246"],VGB:["+1-284"],BRN:["+673"],BGR:["+359"],BFA:["+226"],BDI:["+257"],CPV:["+238"],KHM:["+855"],CMR:["+237"],CAN:["+1"],CYM:["+1-345"],CAF:["+236"],TCD:["+235"],CHL:["+56"],CHN:["+86"],CXR:["+6724"],CCK:["+891"],COL:["+57"],COM:["+269"],COD:["+243"],COG:["+242"],COK:["+682"],CRI:["+506"],CIV:["+225"],HRV:["+385"],CUB:["+53"],CUW:["+5999"],CYP:["+357"],CZE:["+420"],DNK:["+45"],DJI:["+253"],DMA:["+1-767"],DOM:["+1-809","+1-829","+1-849"],ECU:["+593"],EGY:["+20"],SLV:["+503"],GNQ:["+240"],ERI:["+291"],EST:["+372"],ETH:["+251"],FLK:["+500"],FRO:["+298"],FJI:["+679"],FIN:["+358"],FRA:["+33"],GUF:["+594"],GAB:["+241"],GMB:["+220"],GEO:["+995"],DEU:["+49"],GHA:["+233"],GIB:["+350"],GBR:["+44"],GRC:["+30"],GRL:["+299"],GRD:["+1-473"],GLP:["+590"],GUM:["+1-671"],GTM:["+502"],GGY:["+44-1481"],GIN:["+224"],GNB:["+245"],GUY:["+592"],HTI:["+509"],HMD:["+672"],VAT:["+379"],HND:["+504"],HKG:["+852"],HUN:["+36"],ISL:["+354"],IND:["+91"],IDN:["+62"],IRN:["+98"],IRQ:["+964"],IRL:["+353"],IMN:["+44-1624"],ISR:["+972"],ITA:["+39"],JAM:["+1-876"],JPN:["+81"],JEY:["+44-1534"],JOR:["+962"],KAZ:["+7"],KEN:["+254"],KIR:["+686"],PRK:["+850"],KOR:["+82"],KWT:["+965"],KGZ:["+996"],LAO:["+856"],LVA:["+371"],LBN:["+961"],LSO:["+266"],LBR:["+231"],LBY:["+218"],LIE:["+423"],LTU:["+370"],LUX:["+352"],MAC:["+853"],MKD:["+389"],MDG:["+261"],MWI:["+265"],MYS:["+213"],MDV:["+960"],MLI:["+223"],MLT:["+356"],MHL:["+692"],MTQ:["+596"],MRT:["+222"],MUS:["+230"],MYT:["+262"],MEX:["+52"],FSM:["+691"],MDA:["+373"],MCO:["+377"],MNG:["+976"],MNE:["+382"],MSR:["+1-664"],MAR:["+212"],MOZ:["+258"],MMR:["+95"],NAM:["+264"],NRU:["+674"],NPL:["+977"],NLD:["+31"],ANT:["+599"],NCL:["+687"],NZL:["+64"],NIC:["+505"],NER:["+227"],NGA:["+234"],NFK:["+672"],NOR:["+47"],OMN:["+968"],PAK:["+92"],PLW:["+680"],PSE:["+970"],PAN:["+507"],PNG:["+675"],PRY:["+595"],PER:["+51"],PHL:["+63"],PCN:["+64"],POL:["+48"],PYF:["+689"],PRT:["+351"],PRI:["+1-787","+1-939"],QAT:["+974"],ROU:["+40"],RUS:["+7"],RWA:["+250"],SHN:["+290"],KNA:["+1-869"],LCA:["+1-758"],VCT:["+1-784"],WSM:["+685"],SMR:["+378"],STP:["+239"],SAU:["+966"],SEN:["+221"],SRB:["+381"],SYC:["+248"],SLE:["+232"],SGP:["+65"],SVK:["+421"],SVN:["+386"],SLB:["+677"],SOM:["+252"],ZAF:["+27"],SGS:["+500"],SSD:["+211"],ESP:["+34"],LKA:["+94"],SDN:["+249"],SUR:["+597"],SWZ:["+213"],SWE:["+46"],CHE:["+41"],SYR:["+963"],TWN:["+886"],TJK:["+992"],TZA:["+255"],THA:["+66"],TLS:["+670"],TGO:["+228"],TON:["+676"],TKL:["+690"],TTO:["+1-868"],TUN:["+216"],TUR:["+90"],TKM:["+993"],TCA:["+1-649"],TUV:["+688"],UGA:["+256"],UKR:["+380"],UMI:["+1"],USA:["+1"],URY:["+598"],UZB:["+998"],VUT:["+678"],VEN:["+58"],VNM:["+84"],WLF:["+681"],ESH:["+212"],YEM:["+967"],ZMB:["+260"],ZWE:["+263"]};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flag=({Component,dimension,...props})=>{const width="s"===dimension?"18":"22";return(0,jsx_runtime.jsx)(Component,{...props,width})};Flag.displayName="Flag";try{Flag.displayName="Flag",Flag.__docgenInfo={description:"",displayName:"Flag",props:{Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ElementType<any>"}},dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/PhoneNumberInput/Flag.tsx#Flag"]={docgenInfo:Flag.__docgenInfo,name:"Flag",path:"src/components/input/PhoneNumberInput/Flag.tsx#Flag"})}catch(__react_docgen_typescript_loader_error){}const defaultPhoneNumberInputHandler=clojureHandler(null);function clojureHandler(mask){const countryCode=mask?.replace(/\D/g,"");const InitialInputData={selectionStart:1,value:""};return inputData=>{let selectionStart=inputData?.selectionStart||1,selectionEnd=inputData?.selectionEnd||1;if(!function needFormat(value){const hasPlus="+"===value.charAt(0);if(!countryCode)return!hasPlus;const hasCountyWs=!(value.length>countryCode.length+1)||" "===value.charAt(countryCode.length+1),hasCityWs=!(value.length>countryCode.length+5)||" "===value.charAt(countryCode.length+5),hasMiddleWs=!(value.length>countryCode.length+9)||" "===value.charAt(countryCode.length+9);return!(hasPlus&&hasCountyWs&&hasCityWs&&hasMiddleWs)}(inputData?.value||""))return inputData||InitialInputData;const clearData=(inputData?.value||"").replace(/\D/g,""),value=function formatValue(mask,value){const parsedData=function parseInputValue(mask,value){if(!mask)return null;const matchMask=value.length>=mask.length&&value.substring(0,mask.length)===mask;if(!matchMask)return null;let start=mask.length;const cityCode=value.substring(start,start+3);start+=3;const middleCode=value.substring(start,start+3);start+=3;const lastNum=value.substring(start,start+4);return{mask,cityCode,middleCode,lastNum}}(mask,value);if(!parsedData)return`+${value}`;return parsedData.lastNum?`+${parsedData.mask} ${parsedData.cityCode} ${parsedData.middleCode} ${parsedData.lastNum}`:parsedData.middleCode?`+${parsedData.mask} ${parsedData.cityCode} ${parsedData.middleCode}`:parsedData.cityCode?`+${parsedData.mask} ${parsedData.cityCode}`:`+${value}`}(countryCode,clearData),positionWithSpaceBefore=/\d/.test(value.charAt(selectionStart))&&" "===value.charAt(selectionStart-1),oldNextChar=inputData?.value&&inputData.value.length>=selectionStart?inputData.value.charAt(selectionStart).trim():null;positionWithSpaceBefore&&!oldNextChar&&(selectionStart+=1,selectionEnd+=1);return inputData?.value===value?inputData:{...inputData,value,selectionStart,selectionEnd}}}var typography=__webpack_require__("./src/components/Typography/typography.ts"),index_es=__webpack_require__("./node_modules/@admiral-ds/flags/dist/index.es.js"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx"),Tooltip=__webpack_require__("./src/components/Tooltip/index.tsx"),checkOverflow=__webpack_require__("./src/components/common/utils/checkOverflow.ts");const StyledCountryBlock=(0,styled_components_browser_esm.default)(MenuItem.s).withConfig({displayName:"CountryBlock__StyledCountryBlock",componentId:"sc-1hxu1hw-0"})(["display:flex;justify-content:flex-start;flex-flow:nowrap;cursor:",";"],(p=>p.disabled?"not-allowed":"pointer")),StyledFlag=(0,styled_components_browser_esm.default)(Flag).withConfig({displayName:"CountryBlock__StyledFlag",componentId:"sc-1hxu1hw-1"})(["flex-shrink:0;"]),StyledCountryName=styled_components_browser_esm.default.span.withConfig({displayName:"CountryBlock__StyledCountryName",componentId:"sc-1hxu1hw-2"})(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0 9px;"]),CountryCode=styled_components_browser_esm.default.span.withConfig({displayName:"CountryBlock__CountryCode",componentId:"sc-1hxu1hw-3"})(["flex:0 0 auto;color:",";"],(p=>p.theme.color["Neutral/Neutral 50"])),CountryBlock=react.forwardRef(((props,ref)=>{const{dimension,value,code,name,...otherProps}=props,wrapperRef=react.useRef(null),textRef=react.useRef(null),[overflow,setOverflow]=react.useState(!1),[tooltipVisible,setTooltipVisible]=react.useState(!1);react.useLayoutEffect((()=>{const element=textRef.current;element&&(0,checkOverflow.a)(element)!==overflow&&setOverflow((0,checkOverflow.a)(element))}),[tooltipVisible,setOverflow]),react.useLayoutEffect((()=>{function show(){setTooltipVisible(!0)}function hide(){setTooltipVisible(!1)}const wrapper=wrapperRef.current;if(wrapper)return wrapper.addEventListener("mouseenter",show),wrapper.addEventListener("mouseleave",hide),wrapper.addEventListener("focus",show),wrapper.addEventListener("blur",hide),()=>{wrapper.removeEventListener("mouseenter",show),wrapper.removeEventListener("mouseleave",hide),wrapper.removeEventListener("focus",show),wrapper.removeEventListener("blur",hide)}}),[setTooltipVisible]);const SvgFlag=index_es.Fq[name];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(StyledCountryBlock,{dimension,ref:(0,refSetter.O)(ref,wrapperRef),...otherProps,children:[SvgFlag&&(0,jsx_runtime.jsx)(StyledFlag,{dimension,Component:SvgFlag}),(0,jsx_runtime.jsx)(StyledCountryName,{ref:textRef,children:value}),(0,jsx_runtime.jsx)(CountryCode,{children:code})]}),tooltipVisible&&overflow&&(0,jsx_runtime.jsx)(Tooltip.u,{targetRef:wrapperRef,renderContent:()=>value})]})}));try{CountryBlock.displayName="CountryBlock",CountryBlock.__docgenInfo={description:"",displayName:"CountryBlock",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},dimension:{defaultValue:null,description:"Размер MenuItems",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},selected:{defaultValue:null,description:"Активная секция MenuItems",name:"selected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Акцентная секция MenuItems",name:"hovered",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"Обработчик наведения мыши на item",name:"onHover",required:!1,type:{name:"(() => void)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},expandIcon:{defaultValue:null,description:"",name:"expandIcon",required:!1,type:{name:"ReactNode"}},hasSubmenu:{defaultValue:null,description:"",name:"hasSubmenu",required:!1,type:{name:"boolean"}},selfRef:{defaultValue:null,description:"",name:"selfRef",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},disabled:{defaultValue:null,description:"Отключение секции",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/PhoneNumberInput/CountryBlock.tsx#CountryBlock"]={docgenInfo:CountryBlock.__docgenInfo,name:"CountryBlock",path:"src/components/input/PhoneNumberInput/CountryBlock.tsx#CountryBlock"})}catch(__react_docgen_typescript_loader_error){}var Menu=__webpack_require__("./src/components/Menu/index.tsx");const StyledCountriesList=(0,styled_components_browser_esm.default)(Menu.v).withConfig({displayName:"CountriesList__StyledCountriesList",componentId:"sc-9f0sc1-0"})([""," max-height:",";"],(p=>"s"===p.dimension?typography.c["Body/Body 2 Long"]:typography.c["Body/Body 1 Long"]),(({dimension})=>{switch(dimension){case"l":default:return"208px";case"m":return"176px";case"s":return"144px"}})),CountriesList=({countries,dimension="l",...props})=>{const listModel=(0,react.useMemo)((()=>countries.map((country=>{const countryBlockProps={dimension,name:country.name,value:country.rusName,code:country.code};return{id:country.uid,render:options=>(0,jsx_runtime.jsx)(CountryBlock,{dimension,...countryBlockProps,...options},country.uid)}}))),[countries]);return(0,jsx_runtime.jsx)(StyledCountriesList,{dimension,model:listModel,...props})};CountriesList.displayName="CountriesList";try{CountriesList.displayName="CountriesList",CountriesList.__docgenInfo={description:"",displayName:"CountriesList",props:{countries:{defaultValue:null,description:"",name:"countries",required:!0,type:{name:"CountryInfo[]"}},dimension:{defaultValue:{value:"l"},description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:"Возможность отключить подсветку выбранной опции\n(например, при множественном выборе, когда у каждой опции есть Checkbox",name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},multiSelection:{defaultValue:null,description:"Возможность множественного выбора (опции с Checkbox)\n@deprecated use disableSelectedOptionHighlight instead",name:"multiSelection",required:!1,type:{name:"boolean"}},virtualScroll:{defaultValue:null,description:"Включение виртуального скролла для меню.\nМаксимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет\nвысота согласно dimension",name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},rowCount:{defaultValue:null,description:"Количество строк в меню",name:"rowCount",required:!1,type:{name:"number"}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не преводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"maxHeight",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/PhoneNumberInput/CountriesList.tsx#CountriesList"]={docgenInfo:CountriesList.__docgenInfo,name:"CountriesList",path:"src/components/input/PhoneNumberInput/CountriesList.tsx#CountriesList"})}catch(__react_docgen_typescript_loader_error){}var uid=__webpack_require__("./src/components/common/uid.ts");function getFindCountryFunction(countries){const lengths=countries.map((country=>country.code.replace(/\D/g,"").length)),maxLength=Math.max(...lengths);return function(inputValue){const value=inputValue.replace(/\D/g,"");if(!value)return null;const country=function findCountry(value){let country;const length=maxLength>value.length?value.length:maxLength;for(let i=1;i<=length;i++){const code=value.slice(0,i),foundCountry=countries.find((country=>country.code.replace(/\D/g,"")===code));foundCountry&&(country=foundCountry)}return country}(value);return country?function getPriorityCountry(country){switch(country.code){case"+7":return countries.find((country=>"RUS"===country.iso3))||country;case"+1":return countries.find((country=>"USA"===country.iso3))||country;default:return country}}(country):null}}var DropdownContainer=__webpack_require__("./src/components/DropdownContainer/index.tsx"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),GlobeOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/GlobeOutline.svg");const Chevron=(0,styled_components_browser_esm.default)(SmallArrowDownOutline.r).withConfig({displayName:"PhoneNumberInput__Chevron",componentId:"sc-dumc6d-0"})(["transition:transform 0.3s;flex-shrink:0;margin-left:1px;& path{fill:",";}",""],(p=>p.disabled?p.theme.color["Neutral/Neutral 30"]:p.theme.color["Neutral/Neutral 50"]),(p=>p.disabled&&"pointer-events: none;")),disabledStyles=(0,styled_components_browser_esm.css)(["& svg{opacity:0.4;}"]),PhoneContainer=styled_components_browser_esm.default.div.withConfig({displayName:"PhoneNumberInput__PhoneContainer",componentId:"sc-dumc6d-1"})(["position:relative;& ","{width:",";height:",";}& input{padding-left:",";}"],Chevron,(p=>"s"===p.dimension?"20px":"24px"),(p=>"s"===p.dimension?"20px":"24px"),(p=>"s"===p.dimension?p.readOnly?"40px":"60px":p.readOnly?"48px":"72px")),CountryContainer=styled_components_browser_esm.default.div.withConfig({displayName:"PhoneNumberInput__CountryContainer",componentId:"sc-dumc6d-2"})(["cursor:pointer;position:absolute;top:50%;left:16px;transform:translateY(-50%);display:flex;height:",";& ","{& *[fill^='#']{stroke:none;}transform:",";}",";visibility:",";"],(p=>"s"===p.dimension?"20px":"24px"),Chevron,(p=>p.isOpened&&!p.disabled?"rotate(180deg)":"rotate(0deg)"),(p=>p.disabled&&disabledStyles),(p=>p.skeleton?"hidden":"visible")),PhoneInputDropContainer=(0,styled_components_browser_esm.default)(DropdownContainer.I).withConfig({displayName:"PhoneNumberInput__PhoneInputDropContainer",componentId:"sc-dumc6d-3"})(["width:100%;"]),FlagContainer=styled_components_browser_esm.default.div.withConfig({displayName:"PhoneNumberInput__FlagContainer",componentId:"sc-dumc6d-4"})(["width:","px;"],(p=>"s"===p.dimension?"18":"22")),AVAILABLE_ALPHA3_CODES=Object.keys(index_es.T8),PhoneNumberInput=react.forwardRef((({value="",disabled=!1,dimension="xl",defaultCountry="RUS",onlyCountries=AVAILABLE_ALPHA3_CODES,handleInput,skeleton=!1,dropContainerCssMixin,dropContainerClassName,dropContainerStyle,...props},ref)=>{const[activeIndex,setActiveIndex]=react.useState(-1),[selectedIndex,setSelectedIndex]=react.useState(-1),inputContainerRef=react.useRef(null),inputRef=react.useRef(null),containerRef=react.useRef(null),[isOpened,setIsOpened]=react.useState(!1),menuDimension=react.useMemo((()=>"xl"===dimension?"l":dimension),[dimension]),countryList=react.useMemo((()=>onlyCountries.reduce(((acc,iso3)=>{const codes=CountryCodes[iso3];return codes&&codes.forEach((code=>acc.push({iso3,code}))),acc}),[]).map((item=>{const{iso3,code}=item;return{...item,rusName:index_es.Og[iso3],name:index_es.T8[iso3],uid:(0,uid.h)(),handleInput:handleInput||clojureHandler(code)}})).sort(((a,b)=>a.rusName.localeCompare(b.rusName,"ru")))),[onlyCountries]),findCountry=react.useMemo((()=>getFindCountryFunction(countryList)),[countryList]),currentCountry=react.useMemo((()=>findCountry(value)),[value]),currentCountryIndex=currentCountry?countryList.findIndex((item=>item.iso3===currentCountry.iso3&&item.code===currentCountry.code)):-1,selectedCountryCode=selectedIndex>-1?countryList[selectedIndex].code:null;currentCountryIndex===selectedIndex||currentCountry?.code===selectedCountryCode||setSelectedIndex(currentCountryIndex);const handleInputRef=currentCountryIndex>-1?countryList[currentCountryIndex].handleInput:defaultPhoneNumberInputHandler;react.useEffect((()=>{if(defaultCountry&&-1===selectedIndex){const index=countryList.findIndex((country=>country.iso3===defaultCountry));index>-1&&selectCountry(index)}}),[defaultCountry]);const selectCountry=indexNumber=>{if(!inputRef.current||indexNumber===selectedIndex)return;const hasOldSelected=selectedIndex>-1,oldCode=hasOldSelected?countryList[selectedIndex].code.replace(/[^0-9+]/g,""):"",newCode=countryList[indexNumber].code.replace(/[^0-9+]/g,""),oldCodeLength=oldCode.length,newCodeLength=newCode.length,selStart=(inputRef.current?.selectionStart||0)+(newCodeLength-oldCodeLength),selEnd=(inputRef.current?.selectionEnd||0)+(newCodeLength-oldCodeLength);(0,changeInputData.j)(inputRef.current,{value:hasOldSelected?value.replace(/\s+/g,"").replace(oldCode,newCode):newCode+value.replace(/\s+/g,""),selectionStart:selStart>0?selStart:1,selectionEnd:selEnd>0?selEnd:1}),setSelectedIndex(indexNumber),setIsOpened(!1)},IconComponent=react.useMemo((()=>{const SvgComponent=selectedIndex>-1?index_es.Fq[countryList[selectedIndex].name]:GlobeOutline.r;return(0,jsx_runtime.jsx)(Flag,{dimension:menuDimension,Component:SvgComponent})}),[selectedIndex]);react.useEffect((()=>{setActiveIndex(isOpened?selectedIndex:-1)}),[isOpened]),react.useEffect((()=>{isOpened&&setActiveIndex(selectedIndex)}),[selectedIndex]);return(0,jsx_runtime.jsxs)(PhoneContainer,{ref:containerRef,dimension,disabled,readOnly:props.readOnly,children:[(0,jsx_runtime.jsx)(TextInput.oi,{...props,type:"tel",ref:(0,refSetter.O)(ref,inputRef),handleInput:handleInputRef,containerRef:inputContainerRef,value,disabled,dimension,skeleton,displayClearIcon:!1,onKeyDown:(...p)=>{props.onKeyDown?.(...p),(e=>{switch(keyboardKey.y.getCode(e)){case keyboardKey.y[" "]:case keyboardKey.y.Enter:isOpened&&(e.preventDefault(),selectedIndex!==activeIndex&&selectCountry(activeIndex));break;case keyboardKey.y.ArrowDown:case keyboardKey.y.ArrowUp:isOpened||(setIsOpened(!0),e.preventDefault(),e.stopPropagation());break;case keyboardKey.y.Escape:isOpened&&(setIsOpened(!1),e.preventDefault())}})(...p)},children:isOpened&&!disabled&&!skeleton&&(0,jsx_runtime.jsx)(PhoneInputDropContainer,{targetRef:inputRef,onClickOutside:e=>{e.target&&containerRef.current?.contains(e.target)||setIsOpened(!1)},alignSelf:"stretch",dropContainerCssMixin,className:dropContainerClassName,style:dropContainerStyle,children:(0,jsx_runtime.jsx)(CountriesList,{countries:countryList,selected:selectedIndex>-1?countryList[selectedIndex].uid:void 0,active:activeIndex>-1?countryList[activeIndex].uid:void 0,onActivateItem:id=>{const index=countryList.findIndex((item=>item.uid===id));setActiveIndex(index)},onSelectItem:id=>{const index=countryList.findIndex((item=>item.uid===id));selectCountry(index)},dimension:menuDimension})})}),(0,jsx_runtime.jsxs)(CountryContainer,{skeleton,dimension,isOpened,disabled,onClick:()=>{setIsOpened((prev=>!prev))},children:[(0,jsx_runtime.jsx)(FlagContainer,{dimension,children:IconComponent}),!props.readOnly&&(0,jsx_runtime.jsx)(Chevron,{disabled:disabled||props.readOnly})]})]})}));PhoneNumberInput.displayName="PhoneNumberInput";try{PhoneNumberInput.displayName="PhoneNumberInput",PhoneNumberInput.__docgenInfo={description:"",displayName:"PhoneNumberInput",props:{value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},defaultCountry:{defaultValue:{value:"RUS"},description:"Код ISO A3 страны для определения префикса номера по умолчанию",name:"defaultCountry",required:!1,type:{name:"string"}},onlyCountries:{defaultValue:{value:"Object.keys(ComponentsNames)"},description:"Список стран для выпадающего списка. Отмечается кодом ISO A3 страны",name:"onlyCountries",required:!1,type:{name:"string[]"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"FlattenInterpolation<ThemeProps<DefaultTheme>>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:{value:"xl"},description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/PhoneNumberInput/index.tsx#PhoneNumberInput"]={docgenInfo:PhoneNumberInput.__docgenInfo,name:"PhoneNumberInput",path:"src/components/input/PhoneNumberInput/index.tsx#PhoneNumberInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>INPUT_STATUS_VALUES,q:()=>INPUT_DIMENSIONS_VALUES});const INPUT_DIMENSIONS_VALUES=["xl","m","s"],INPUT_STATUS_VALUES=["error","success"]}}]);