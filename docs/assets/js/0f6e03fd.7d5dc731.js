"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[530],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97034:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:6},s="GOOS",u={unversionedId:"reference/goos",id:"reference/goos",title:"GOOS",description:"GOOS is a macro language for GOAL. It is a separate language.  Files written in GOAL end in .gc and files written in GOOS end in .gs.  The REPL will display a goos> prompt for GOOS and gc > for GOAL.",source:"@site/documentation/reference/goos.md",sourceDirName:"reference",slug:"/reference/goos",permalink:"/docs/reference/goos",draft:!1,editUrl:"https://github.com/open-goal/open-goal.github.io/tree/master/documentation/reference/goos.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Reader",permalink:"/docs/reference/reader"},next:{title:"Object File Formats",permalink:"/docs/reference/object_file_formats"}},p={},m=[{value:"Special Forms",id:"special-forms",level:2},{value:"define",id:"define",level:3},{value:"quote",id:"quote",level:3},{value:"set!",id:"set",level:3},{value:"lambda",id:"lambda",level:3},{value:"cond",id:"cond",level:3},{value:"or",id:"or",level:3},{value:"and",id:"and",level:3},{value:"macro",id:"macro",level:3},{value:"quasiquote",id:"quasiquote",level:3},{value:"while",id:"while",level:3},{value:"Not Special Built-In Forms",id:"not-special-built-in-forms",level:2},{value:"Namespace Details",id:"namespace-details",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"goos"},"GOOS"),(0,l.kt)("p",null,"GOOS is a macro language for GOAL. It is a separate language.  Files written in GOAL end in ",(0,l.kt)("inlineCode",{parentName:"p"},".gc")," and files written in GOOS end in ",(0,l.kt)("inlineCode",{parentName:"p"},".gs"),".  The REPL will display a ",(0,l.kt)("inlineCode",{parentName:"p"},"goos>")," prompt for GOOS and ",(0,l.kt)("inlineCode",{parentName:"p"},"gc >")," for GOAL."),(0,l.kt)("p",null,"There is a special namespace shared between GOOS and GOAL containing the names of the macros (written in GOOS) which can be used in GOAL code."),(0,l.kt)("p",null,"To access a GOOS REPL, run ",(0,l.kt)("inlineCode",{parentName:"p"},"(goos)")," from the ",(0,l.kt)("inlineCode",{parentName:"p"},"gc >")," prompt."),(0,l.kt)("p",null,"This document assumes some familiarity with the Scheme programming language.  It's recommended to read a bit about Scheme first."),(0,l.kt)("p",null,"Note that most Scheme things will work in GOOS, with the following exceptions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Scheme supports fractions, GOOS does not (it has separate integer/floating point types)"),(0,l.kt)("li",{parentName:"ul"},"The short form for defining functions is ",(0,l.kt)("inlineCode",{parentName:"li"},"(desfun function-name (arguments) body...)")),(0,l.kt)("li",{parentName:"ul"},"GOOS does not have tail call optimization and prefers looping to recursion (there is a ",(0,l.kt)("inlineCode",{parentName:"li"},"while")," form)")),(0,l.kt)("h2",{id:"special-forms"},"Special Forms"),(0,l.kt)("p",null,"Most forms in Scheme have a name, and list of arguments. Like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(my-operation first-argument second-argument ...)\n")),(0,l.kt)("p",null,"Usually, each argument is evaluated, then passed to the operation, and the resulting value is returned.  However, there are cases where not all arguments are evaluated.  For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(if (want-x?)\n    (do-x)\n    (do-y)\n )\n")),(0,l.kt)("p",null,"In this case, only one of ",(0,l.kt)("inlineCode",{parentName:"p"},"(do-x)")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"(do-y)"),' are executed.  This doesn\'t follow the pattern of "evaluate all arguments...", so it is a ',(0,l.kt)("em",{parentName:"p"},"SPECIAL FORM"),".  It's not possible for a function call to be a special form - GOOS will automatically evaluate all arguments.  It is possible to build macros which act like special forms.  There are some special forms built-in to the GOOS interpreter, which are documented in this section."),(0,l.kt)("h3",{id:"define"},"define"),(0,l.kt)("p",null,"This is used to define a value in the current lexical environment.\nFor example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(define x 10)\n")),(0,l.kt)("p",null,"will define ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," as a variable equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"10")," in the inner-most lexical environment. (Note, I'm not sure this is actually how Scheme works)"),(0,l.kt)("p",null,"There is an optional keyword argument to pick the environment for definition, but this is used rarely.  The only named environments are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*goal-env*")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*global-env*"))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(define :env *global-env* x 10)\n")),(0,l.kt)("p",null,"will define ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," in the global (outer-most) environment, regardless of where the ",(0,l.kt)("inlineCode",{parentName:"p"},"define")," is written."),(0,l.kt)("h3",{id:"quote"},"quote"),(0,l.kt)("p",null,"This form simply returns its argument without evaluating it.  There's a reader shortcut for this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(quote x)\n\n;; reader shortcut\n'x ;; same as (quote x)\n")),(0,l.kt)("p",null,"It's often used to get a symbol, but you can quote complex things like lists, pairs, and arrays."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"goos> (cdr '(1 . 2))\n2\ngoos> (cdr '(1 2))\n(2)\ngoos> '#(1 2 3)\n#(1 2 3)\n")),(0,l.kt)("h3",{id:"set"},"set!"),(0,l.kt)("p",null,"Set is used to search for a variable in the enclosing environments, then set it to a value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(set! x (+ 1 2))\n")),(0,l.kt)("p",null,"will set the lexically closest ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," to 3.  It's an error if there's no variable named ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," in an enclosing scope."),(0,l.kt)("h3",{id:"lambda"},"lambda"),(0,l.kt)("p",null,"See any Lisp/Scheme tutorial for a good explanation of ",(0,l.kt)("inlineCode",{parentName:"p"},"lambda"),"."),(0,l.kt)("p",null,'Note that GOOS has some extensions for arguments.  You can have a "rest" argument at the end, like this:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(lambda (a b &rest c) ...) ;; c is the rest arg\n(lambda (&rest a) ...) ;; a is the rest\n")),(0,l.kt)("p",null,"The rest argument will contain a list of all extra arguments passed to the function.  If there are no extra arguments, the rest argument will be the empty list."),(0,l.kt)("p",null,"There are also keyword arguments, which contain a ",(0,l.kt)("inlineCode",{parentName:"p"},"&key")," before the argument name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(lambda (a b &key c) ...) ;; b is a keyword argument, a and c are not.\n(lambda (&key a &key b) ...) ;; a and b are keyword arguments\n")),(0,l.kt)("p",null,"These keyword arguments ",(0,l.kt)("em",{parentName:"p"},"must")," be specified by name. So to call the two functions above:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(f 1 2 :c 3) ;; a = 1, b = 2, c = 3\n(f :a 1 : b 2) ;; a = 1, b = 2\n")),(0,l.kt)("p",null,"Note that it is not required to put keyword arguments last, but it is a good idea to do it for clarity."),(0,l.kt)("p",null,"There are also keyword default arguments, which are like keyword arguments, but can be omitted from the call.  In this case a default value is used instead."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(lambda (&key (c 12)) ...)\n(f :c 2) ;; c = 2\n(f) ;; c = 12\n")),(0,l.kt)("p",null,"The order of argument evaluation is:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'All "normal" arguments, in the order they appear'),(0,l.kt)("li",{parentName:"ul"},"All keyword/keyword default arguments, in alphabetical order",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"It is not recommended to rely on this"))),(0,l.kt)("li",{parentName:"ul"},"All rest arguments, in the order they appear")),(0,l.kt)("h3",{id:"cond"},"cond"),(0,l.kt)("p",null,"Normal Scheme ",(0,l.kt)("inlineCode",{parentName:"p"},"cond"),". If no cases matches and there is no ",(0,l.kt)("inlineCode",{parentName:"p"},"else"),", returns ",(0,l.kt)("inlineCode",{parentName:"p"},"#f"),".\nCurrently ",(0,l.kt)("inlineCode",{parentName:"p"},"else")," isn't implement, just use ",(0,l.kt)("inlineCode",{parentName:"p"},"#t")," instead for now."),(0,l.kt)("h3",{id:"or"},"or"),(0,l.kt)("p",null,"Short circuiting ",(0,l.kt)("inlineCode",{parentName:"p"},"or"),". If nothing is truthy, ",(0,l.kt)("inlineCode",{parentName:"p"},"#f"),". Otherwise returns first truthy."),(0,l.kt)("h3",{id:"and"},"and"),(0,l.kt)("p",null,"Short circuiting ",(0,l.kt)("inlineCode",{parentName:"p"},"or"),". If not all truthy, ",(0,l.kt)("inlineCode",{parentName:"p"},"#f"),". Otherwise returns last truthy."),(0,l.kt)("h3",{id:"macro"},"macro"),(0,l.kt)("p",null,"Kind of like ",(0,l.kt)("inlineCode",{parentName:"p"},"lambda"),", but for a macro."),(0,l.kt)("p",null,"A lambda:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Evaluate the arguments"),(0,l.kt)("li",{parentName:"ul"},"Evaluate the body")),(0,l.kt)("p",null,"A macro:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Don't evaluate the arguments"),(0,l.kt)("li",{parentName:"ul"},"Evaluate the body"),(0,l.kt)("li",{parentName:"ul"},"Evaluate that again")),(0,l.kt)("p",null,"You can think about a ",(0,l.kt)("inlineCode",{parentName:"p"},"lambda"),' like a "normal" function, and a ',(0,l.kt)("inlineCode",{parentName:"p"},"macro")," as a function that receive code as arguments (as opposed to values), and produces code as an output, which is then evaluated."),(0,l.kt)("h3",{id:"quasiquote"},"quasiquote"),(0,l.kt)("p",null,"See any Lisp/Scheme tutorial.  GOOS supports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"(quasiquote x)")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"`x")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"(unquote x)")," or ",(0,l.kt)("inlineCode",{parentName:"li"},",x")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"(unquote-splicing x)")," or ",(0,l.kt)("inlineCode",{parentName:"li"},",@x"))),(0,l.kt)("h3",{id:"while"},"while"),(0,l.kt)("p",null,"Special while loop form for GOOS."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"(while condition body...)")),(0,l.kt)("p",null,"To add together ",(0,l.kt)("inlineCode",{parentName:"p"},"[0, 100)"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(define count 0)\n(define sum 0)\n\n(while (< count 100)\n  (set! sum (+ sum count))\n  (set! count (+ count 1))\n  )\n\nsum\n")),(0,l.kt)("h2",{id:"not-special-built-in-forms"},"Not Special Built-In Forms"),(0,l.kt)("p",null,"TODO - None at this time"),(0,l.kt)("h2",{id:"namespace-details"},"Namespace Details"),(0,l.kt)("p",null,"The GOOS ",(0,l.kt)("inlineCode",{parentName:"p"},"define")," form accepts an environment for definition.  For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scheme"},"(define :env *goal-env* x 10)\n")),(0,l.kt)("p",null,"will define ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"*goal-env*"),".  Any macros defined in the ",(0,l.kt)("inlineCode",{parentName:"p"},"*goal-env*")," can be used as macros from within GOAL code.\nThings that aren't macros in the ",(0,l.kt)("inlineCode",{parentName:"p"},"*goal-env*")," cannot be accessed."))}d.isMDXComponent=!0}}]);