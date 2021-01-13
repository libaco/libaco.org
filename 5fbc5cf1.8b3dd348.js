(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),c=(a(0),a(88)),i={id:"api",title:"API",sidebar_label:"API",slug:"/api"},r={unversionedId:"api",id:"api",isDocsHomePage:!1,title:"API",description:"Introduction",source:"@site/docs/api.md",slug:"/api",permalink:"/docs/api",editUrl:"https://github.com/libaco/libaco.github.io/edit/master/docs/api.md",version:"current",sidebar_label:"API",sidebar:"docs",previous:{title:"Tutorials",permalink:"/docs/tutorials"},next:{title:"Best practice",permalink:"/docs/best-practice"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Functions",id:"functions",children:[{value:"aco_thread_init",id:"aco_thread_init",children:[]},{value:"aco_share_stack_new",id:"aco_share_stack_new",children:[]},{value:"aco_share_stack_new2",id:"aco_share_stack_new2",children:[]},{value:"aco_share_stack_destroy",id:"aco_share_stack_destroy",children:[]},{value:"aco_create",id:"aco_create",children:[]},{value:"aco_resume",id:"aco_resume",children:[]},{value:"aco_yield",id:"aco_yield",children:[]},{value:"aco_get_co",id:"aco_get_co",children:[]},{value:"aco_get_arg",id:"aco_get_arg",children:[]},{value:"aco_exit",id:"aco_exit",children:[]},{value:"aco_destroy",id:"aco_destroy",children:[]}]},{value:"Macros",id:"macros",children:[{value:"Version",id:"version",children:[]},{value:"aco_assert_override.h",id:"aco_assert_overrideh",children:[]}]}],s={toc:l};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"introduction"},"Introduction"),Object(c.b)("p",null,"It would be very helpful to read the corresponding API implementation in the source code simultaneously when you are reading the following API description of libaco since the source code is pretty clear and easy to understand. And it is also recommended to read all the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"tutorials"}),"tutorials")," before reading the API document."),Object(c.b)("p",null,"It is strongly recommended to read the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"best-practice"}),"best practice")," part before starting to write the real application of libaco (in addition to describing how to truly release libaco's extreme performance in your application, there is also a notice about the programming of libaco)."),Object(c.b)("p",null,"Note: The version control of libaco follows the spec: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://semver.org/spec/v2.0.0.html"}),"Semantic Versioning 2.0.0"),". So the API in the following list have the compatibility guarantee. (Please note that there is no such guarantee for the API no in the list.)"),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"aco_thread_init"},"aco_thread_init"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"typedef void (*aco_cofuncp_t)(void);\nvoid aco_thread_init(aco_cofuncp_t last_word_co_fp);\n")),Object(c.b)("p",null,"Initializes the libaco environment in the current thread."),Object(c.b)("p",null,"It will store the current control words of FPU and MXCSR into a thread-local global variable."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"If the global macro ",Object(c.b)("inlineCode",{parentName:"li"},"ACO_CONFIG_SHARE_FPU_MXCSR_ENV")," is not defined, the saved control words would be used as a reference value to set up the control words of the new co's FPU and MXCSR (in ",Object(c.b)("inlineCode",{parentName:"li"},"aco_create"),") and each co would maintain its own copy of FPU and MXCSR control words during later context switching."),Object(c.b)("li",{parentName:"ul"},"If the global macro ",Object(c.b)("inlineCode",{parentName:"li"},"ACO_CONFIG_SHARE_FPU_MXCSR_ENV")," is defined, then all the co shares the same control words of FPU and MXCSR. You may refer the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"build-and-test"}),"build and test")," part of this document for more information about this.")),Object(c.b)("p",null,"And as it said in the ",Object(c.b)("inlineCode",{parentName:"p"},"test_aco_tutorial_5.c")," of the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"tutorials"}),"tutorials")," part, when the 1st argument ",Object(c.b)("inlineCode",{parentName:"p"},"last_word_co_fp")," is not NULL then the function pointed by ",Object(c.b)("inlineCode",{parentName:"p"},"last_word_co_fp"),' will substitute the default protector to do some "last words" stuff about the offending co before the process is aborted. In such last word function, you could use ',Object(c.b)("inlineCode",{parentName:"p"},"aco_get_co")," to get the pointer of the offending co. For more information, you may read ",Object(c.b)("inlineCode",{parentName:"p"},"test_aco_tutorial_5.c"),"."),Object(c.b)("h3",{id:"aco_share_stack_new"},"aco_share_stack_new"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"aco_share_stack_t* aco_share_stack_new(size_t sz);\n")),Object(c.b)("p",null,"Equal to ",Object(c.b)("inlineCode",{parentName:"p"},"aco_share_stack_new2(sz, 1)"),"."),Object(c.b)("h3",{id:"aco_share_stack_new2"},"aco_share_stack_new2"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"aco_share_stack_t* aco_share_stack_new2(size_t sz, char guard_page_enabled);\n")),Object(c.b)("p",null,"Creates a new share stack with a advisory memory size of ",Object(c.b)("inlineCode",{parentName:"p"},"sz")," in bytes and may have a guard page (read-only) for the detection of stack overflow which is depending on the 2nd argument ",Object(c.b)("inlineCode",{parentName:"p"},"guard_page_enabled"),"."),Object(c.b)("p",null,"To use the default size value (2MB) if the 1st argument ",Object(c.b)("inlineCode",{parentName:"p"},"sz")," equals 0. After some computation of alignment and reserve, this function will ensure the final valid length of the share stack in return:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"final_valid_sz >= 4096")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"final_valid_sz >= sz")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"final_valid_sz % page_size == 0 if the guard_page_enabled != 0"))),Object(c.b)("p",null,"And as close to the value of ",Object(c.b)("inlineCode",{parentName:"p"},"sz")," as possible."),Object(c.b)("p",null,"When the value of the 2nd argument ",Object(c.b)("inlineCode",{parentName:"p"},"guard_page_enabled")," is 1, the share stack in return would have one read-only guard page for the detection of stack overflow while a value 0 of ",Object(c.b)("inlineCode",{parentName:"p"},"guard_page_enabled")," means without such guard page."),Object(c.b)("p",null,"This function will always return a valid share stack."),Object(c.b)("h3",{id:"aco_share_stack_destroy"},"aco_share_stack_destroy"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"void aco_share_stack_destroy(aco_share_stack_t* sstk);\n")),Object(c.b)("p",null,"Destory the share stack ",Object(c.b)("inlineCode",{parentName:"p"},"sstk"),"."),Object(c.b)("p",null,"Be sure that all the co whose share stack is ",Object(c.b)("inlineCode",{parentName:"p"},"sstk")," is already destroyed when you destroy the ",Object(c.b)("inlineCode",{parentName:"p"},"sstk"),"."),Object(c.b)("h3",{id:"aco_create"},"aco_create"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"typedef void (*aco_cofuncp_t)(void);\naco_t* aco_create(aco_t* main_co\uff0caco_share_stack_t* share_stack, \n        size_t save_stack_sz, aco_cofuncp_t co_fp, void* arg);\n")),Object(c.b)("p",null,"Create a new co."),Object(c.b)("p",null,"If it is a main_co you want to create, just call: ",Object(c.b)("inlineCode",{parentName:"p"},"aco_create(NULL, NULL, 0, NULL, NULL)"),". Main co is a special standalone coroutine whose share stack is the default thread stack. In the thread, main co is the coroutine who should be created and started to execute before all the other non-main coroutine does."),Object(c.b)("p",null,"Otherwise it is a non-main co you want to create:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The 1st argument ",Object(c.b)("inlineCode",{parentName:"li"},"main_co")," is the main co the co will ",Object(c.b)("inlineCode",{parentName:"li"},"aco_yield")," to in the future context switching. ",Object(c.b)("inlineCode",{parentName:"li"},"main_co")," must not be NULL;"),Object(c.b)("li",{parentName:"ul"},"The 2nd argument ",Object(c.b)("inlineCode",{parentName:"li"},"share_stack")," is the address of a share stack which the non-main co you want to create will use as its executing stack in the future. ",Object(c.b)("inlineCode",{parentName:"li"},"share_stack")," must not be NULL;"),Object(c.b)("li",{parentName:"ul"},"The 3rd argument ",Object(c.b)("inlineCode",{parentName:"li"},"save_stack_sz")," specifies the init size of the private save stack of this co. The unit is in bytes. A value of 0 means to use the default size 64 bytes. Since automatical resizing would happen when the private save stack is not big enough to hold the executing stack of the co when it has to yield the share stack it is occupying to another co, you usually should not worry about the value of ",Object(c.b)("inlineCode",{parentName:"li"},"sz")," at all. But it will bring some performance impact to the memory allocator when a huge amount (say 10,000,000) of the co resizes their private save stack continuously, so it is very wise and highly recommended to set the ",Object(c.b)("inlineCode",{parentName:"li"},"save_stack_sz")," with a value equal to the maximum value of ",Object(c.b)("inlineCode",{parentName:"li"},"co->save_stack.max_cpsz")," when the co is running (You may refer to the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"best-practice"}),"best practice")," part of this document for more information about such optimization);"),Object(c.b)("li",{parentName:"ul"},"The 4th argument ",Object(c.b)("inlineCode",{parentName:"li"},"co_fp")," is the entry function pointer of the co. ",Object(c.b)("inlineCode",{parentName:"li"},"co_fp")," must not be NULL;"),Object(c.b)("li",{parentName:"ul"},"The last argument ",Object(c.b)("inlineCode",{parentName:"li"},"arg")," is a pointer value and will set to ",Object(c.b)("inlineCode",{parentName:"li"},"co->arg")," of the co to create. It could be used as a input argument for the co.")),Object(c.b)("p",null,'This function will always return a valid co. And we name the state of the co in return as "init" if it is a non-main co you want to create.'),Object(c.b)("h3",{id:"aco_resume"},"aco_resume"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"void aco_resume(aco_t* co);\n")),Object(c.b)("p",null,"Yield from the caller main co and to start or continue the execution of ",Object(c.b)("inlineCode",{parentName:"p"},"co"),"."),Object(c.b)("p",null,"The caller of this function must be a main co and must be ",Object(c.b)("inlineCode",{parentName:"p"},"co->main_co"),". And the 1st argument ",Object(c.b)("inlineCode",{parentName:"p"},"co")," must be a non-main co."),Object(c.b)("p",null,"The first time you resume a ",Object(c.b)("inlineCode",{parentName:"p"},"co"),", it starts running the function pointing by ",Object(c.b)("inlineCode",{parentName:"p"},"co->fp"),". If ",Object(c.b)("inlineCode",{parentName:"p"},"co")," has already been yielded, ",Object(c.b)("inlineCode",{parentName:"p"},"aco_resume")," restarts it and continues the execution."),Object(c.b)("p",null,"After the call of ",Object(c.b)("inlineCode",{parentName:"p"},"aco_resume"),', we name the state of the caller \u2014 main co as "yielded".'),Object(c.b)("h3",{id:"aco_yield"},"aco_yield"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"void aco_yield();\n")),Object(c.b)("p",null,"Yield the execution of ",Object(c.b)("inlineCode",{parentName:"p"},"co")," and resume ",Object(c.b)("inlineCode",{parentName:"p"},"co->main_co"),". The caller of this function must be a non-main co. And ",Object(c.b)("inlineCode",{parentName:"p"},"co->main_co")," must not be NULL."),Object(c.b)("p",null,"After the call of ",Object(c.b)("inlineCode",{parentName:"p"},"aco_yield"),", we name the state of the caller \u2014 ",Object(c.b)("inlineCode",{parentName:"p"},"co"),' as "yielded".'),Object(c.b)("h3",{id:"aco_get_co"},"aco_get_co"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"aco_t* aco_get_co();\n")),Object(c.b)("p",null,"Return the pointer of the current non-main co. The caller of this function must be a non-main co."),Object(c.b)("h3",{id:"aco_get_arg"},"aco_get_arg"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"void* aco_get_arg();\n")),Object(c.b)("p",null,"Equal to ",Object(c.b)("inlineCode",{parentName:"p"},"(aco_get_co()->arg)"),". And also, the caller of this function must be a non-main co."),Object(c.b)("h3",{id:"aco_exit"},"aco_exit"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"void aco_exit();\n")),Object(c.b)("p",null,"In addition do the same as ",Object(c.b)("inlineCode",{parentName:"p"},"aco_yield()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"aco_exit()")," also set ",Object(c.b)("inlineCode",{parentName:"p"},"co->is_end")," to 1 thus to mark the ",Object(c.b)("inlineCode",{parentName:"p"},"co"),' at the status of "end".'),Object(c.b)("h3",{id:"aco_destroy"},"aco_destroy"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"void aco_destroy(aco_t* co);\n")),Object(c.b)("p",null,"Destroy the ",Object(c.b)("inlineCode",{parentName:"p"},"co"),". The argument ",Object(c.b)("inlineCode",{parentName:"p"},"co")," must not be NULL. The private save stack would also been destroyed if the ",Object(c.b)("inlineCode",{parentName:"p"},"co")," is a non-main co."),Object(c.b)("h2",{id:"macros"},"Macros"),Object(c.b)("h3",{id:"version"},"Version"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"#define ACO_VERSION_MAJOR 1\n#define ACO_VERSION_MINOR 2\n#define ACO_VERSION_PATCH 4\n")),Object(c.b)("p",null,"These 3 macros are defined in the header ",Object(c.b)("inlineCode",{parentName:"p"},"aco.h")," and the value of them follows the spec: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://semver.org/spec/v2.0.0.html"}),"Semantic Versioning 2.0.0"),"."),Object(c.b)("h3",{id:"aco_assert_overrideh"},"aco_assert_override.h"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"// provide the compiler with branch prediction information\n#define likely(x)               aco_likely(x)\n#define unlikely(x)             aco_unlikely(x)\n\n// override the default `assert` for convenience when coding\n#define assert(EX)              aco_assert(EX)\n\n// equal to `assert((ptr) != NULL)`\n#define assertptr(ptr)          aco_assertptr(ptr)\n\n// assert the successful return of memory allocation\n#define assertalloc_bool(b)     aco_assertalloc_bool(b)\n#define assertalloc_ptr(ptr)    aco_assertalloc_ptr(ptr)\n")),Object(c.b)("p",null,"You could choose to include the header ",Object(c.b)("inlineCode",{parentName:"p"},'"aco_assert_override.h"')," to override the default C ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://man7.org/linux/man-pages/man3/assert.3.html"}),"assert")," in the libaco application like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/blob/master/test_aco_synopsis.c"}),"test_aco_synopsis.c")," does (this header including should be at the last of the include directives list in the source file because the C ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://man7.org/linux/man-pages/man3/assert.3.html"}),"assert")," is a C macro definition too) and define the 5 other macros in the above. Please do not include this header in the application source file if you want to use the default C ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://man7.org/linux/man-pages/man3/assert.3.html"}),"assert"),"."),Object(c.b)("p",null,"For more details you may refer to the source file ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/blob/master/aco_assert_override.h"}),"aco_assert_override.h"),"."))}b.isMDXComponent=!0},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,h=d["".concat(i,".").concat(p)]||d[p]||u[p]||c;return a?o.a.createElement(h,r(r({ref:t},s),{},{components:a})):o.a.createElement(h,r({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var s=2;s<c;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);