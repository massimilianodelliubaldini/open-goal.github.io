"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[926],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(y,r(r({ref:t},d),{},{components:n})):i.createElement(y,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},921:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],l={sidebar_position:1},s="OpenGOAL's Type System",p={unversionedId:"reference/type_system",id:"reference/type_system",title:"OpenGOAL's Type System",description:"This document explains the GOAL type system.  The GOAL type system supports runtime typing, single inheritance, virtual methods, and dynamically sized structures.",source:"@site/documentation/reference/type_system.md",sourceDirName:"reference",slug:"/reference/type_system",permalink:"/docs/reference/type_system",draft:!1,editUrl:"https://github.com/open-goal/open-goal.github.io/tree/master/documentation/reference/type_system.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Language Reference",permalink:"/docs/category/language-reference"},next:{title:"OpenGOAL's Method System",permalink:"/docs/reference/method_system"}},d={},c=[{value:"Compile-time vs Run-time",id:"compile-time-vs-run-time",level:2},{value:"Types of Types",id:"types-of-types",level:2},{value:"Value Types",id:"value-types",level:3},{value:"Reference Types",id:"reference-types",level:3},{value:"Dynamic Size Types",id:"dynamic-size-types",level:3},{value:"Compound Types",id:"compound-types",level:3},{value:"Pointer",id:"pointer",level:4},{value:"Arrays",id:"arrays",level:4},{value:"Inline Arrays",id:"inline-arrays",level:5},{value:"Function",id:"function",level:4},{value:"Field Definitions",id:"field-definitions",level:3},{value:"Field Placement",id:"field-placement",level:4},{value:"Built-in Types",id:"built-in-types",level:2},{value:"<code>none</code>",id:"none",level:3},{value:"<code>object</code>",id:"object",level:3},{value:"<code>structure</code> (child of <code>object</code>)",id:"structure-child-of-object",level:3},{value:"<code>basic</code> (child of <code>structure</code>)",id:"basic-child-of-structure",level:3},{value:"<code>symbol</code> (child of <code>basic</code>)",id:"symbol-child-of-basic",level:3},{value:"<code>type</code> (child of <code>basic</code>)",id:"type-child-of-basic",level:3},{value:"<code>string</code> (child of <code>basic</code>)",id:"string-child-of-basic",level:3},{value:"<code>function</code> (child of <code>basic</code>)",id:"function-child-of-basic",level:3},{value:"<code>kheap</code> (child of <code>structure</code>)",id:"kheap-child-of-structure",level:3},{value:"<code>array</code> (child of <code>basic</code>)",id:"array-child-of-basic",level:3},{value:"<code>pair</code> (child of <code>object</code>)",id:"pair-child-of-object",level:3},{value:"<code>pointer</code> (child of <code>object</code>)",id:"pointer-child-of-object",level:3},{value:"<code>number</code> (child of <code>object</code>)",id:"number-child-of-object",level:3},{value:"<code>float</code> (child of <code>number</code>)",id:"float-child-of-number",level:3},{value:"<code>integer</code> (child of <code>number</code>)",id:"integer-child-of-number",level:3},{value:"Weird Built-in types that aren&#39;t supported yet.",id:"weird-built-in-types-that-arent-supported-yet",level:4},{value:"Unknown Areas",id:"unknown-areas",level:2},{value:"Inline Array Class",id:"inline-array-class",level:3},{value:"Heap Base",id:"heap-base",level:3},{value:"Second Size Field",id:"second-size-field",level:3},{value:"TODO",id:"todo",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opengoals-type-system"},"OpenGOAL's Type System"),(0,o.kt)("p",null,"This document explains the GOAL type system.  The GOAL type system supports runtime typing, single inheritance, virtual methods, and dynamically sized structures."),(0,o.kt)("p",null,"There's a single type system library, located in ",(0,o.kt)("inlineCode",{parentName:"p"},"common/type_system"),".  It will be used in both the decompiler and compiler. The plan is to have a single ",(0,o.kt)("inlineCode",{parentName:"p"},"all_types.gc")," file which contains all type information (type definitions and types of globals). The decompiler will help generate this, but some small details may need to be filled in manually for some types.  Later versions of the decompiler can use this information to figure out what fields of types are being accessed.  We can also add a test to make sure that types defined in the decompiled game match ",(0,o.kt)("inlineCode",{parentName:"p"},"all_types.gc"),"."),(0,o.kt)("p",null,"The main features are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TypeSystem")," stores all type information and provides a convenient way to add new types or request information about existing types."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Type"),' information about a GOAL Type.  A "base GOAL type" is identified by a single unique string. Examples: ',(0,o.kt)("inlineCode",{parentName:"li"},"function"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"vector3h"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TypeSpec")," a way to specify either ",(0,o.kt)("inlineCode",{parentName:"li"},"Type"),' or a "compound type".  Compound types are used to create types which represent specific function types (function which takes two integer arguments and returns a string), or specific pointer/array types (pointer to an integer).  These can be represented as (possibly nested) lists, like ',(0,o.kt)("inlineCode",{parentName:"li"},"(pointer integer)")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"(function (integer integer) string)"),"."),(0,o.kt)("li",{parentName:"ul"},"Type Checking for compiler"),(0,o.kt)("li",{parentName:"ul"},"Parsing of type definitions for compiler"),(0,o.kt)("li",{parentName:"ul"},"Lowest common ancestor implementation for compiler to figure out return types for branching forms."),(0,o.kt)("li",{parentName:"ul"},"Logic to catch multiple incompatible type definitions for both compiler warnings and decompiler sanity checks")),(0,o.kt)("p",null,"The type system will store:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The types of all global variables (this includes functions)"),(0,o.kt)("li",{parentName:"ul"},"Information about all types:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Fields/specific details on how to load from memory, alignment, sign extension, size in arrays, etc..."),(0,o.kt)("li",{parentName:"ul"},"Parent type"),(0,o.kt)("li",{parentName:"ul"},"Methods not defined for the parent.")))),(0,o.kt)("p",null,"It's important that all of the type-related info is stored/calculated in a single location. The proof of concept compiler did not have the equivalent of ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeSystem")," and scattered field/array access logic all over the place.  This was extremely confusing to get right."),(0,o.kt)("p",null,"If type information is specified multiple times, and is also inconsistent, the TypeSystem can be configured to either throw an exception or print a warning."),(0,o.kt)("p",null,'This will be a big improvement over the "proof of concept" compiler which did not handle this situation well.  When debugging GOAL you will often put the same file through the compiler again and again, changing functions, but not types.  In this case, there should be no warnings. If the type does change, it should warn (as old code may exist that uses the old type layout), but shouldn\'t cause the compiler to abort, error, or do something very unexpected.'),(0,o.kt)("h2",{id:"compile-time-vs-run-time"},"Compile-time vs Run-time"),(0,o.kt)("p",null,"The types in the runtime are only a subset of the compile time types. Here are the rules I've discovered so far"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Any compound types become just the first type. So ",(0,o.kt)("inlineCode",{parentName:"li"},"(pointer my-type)")," becomes ",(0,o.kt)("inlineCode",{parentName:"li"},"pointer"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"inline-array")," class just becomes ",(0,o.kt)("inlineCode",{parentName:"li"},"pointer"),"."),(0,o.kt)("li",{parentName:"ul"},"Some children of integers disappear, but others don't. The rules for this aren't known yet.")),(0,o.kt)("h2",{id:"types-of-types"},"Types of Types"),(0,o.kt)("p",null,"Everything in GOAL has a type at compile time.  A subset of compile-time types are also available in the runtime as objects with the same name as the type.  For example, there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," type, and at runtime there is a global object named ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," which is an object of type ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," containing information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," type."),(0,o.kt)("p",null,'Some objects have runtime type information, and others don\'t.  Objects which have runtime type information can have their type identified at runtime, and are called "boxed objects".  Objects without runtime type information are called "unboxed objects".  An unboxed object cannot reliably be detected as a unboxed object - you can\'t write a function that takes an arbitrary object and tells you if its boxed or not.  However, boxed objects can always be recognized as boxed.'),(0,o.kt)("p",null,"All types have a parent type, and all types descend from the parent type ",(0,o.kt)("inlineCode",{parentName:"p"},"object"),", except for the special type ",(0,o.kt)("inlineCode",{parentName:"p"},"none")," (and maybe ",(0,o.kt)("inlineCode",{parentName:"p"},"_type_"),", but more on this later). The ",(0,o.kt)("inlineCode",{parentName:"p"},"none")," type doesn't exist in the runtime and is used to represent an invalid value that the compiler should not use.  For example, the return type of a function which doesn't return anything is ",(0,o.kt)("inlineCode",{parentName:"p"},"none"),", and attempting to use this value should cause an error."),(0,o.kt)("p",null,"Here are some important special types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"object")," - the parent of all types"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"structure")," - parent type of any type with fields"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"basic")," - parent type of any ",(0,o.kt)("inlineCode",{parentName:"li"},"structure")," with runtime type information.")),(0,o.kt)("h3",{id:"value-types"},"Value Types"),(0,o.kt)("p",null,'Some GOAL types are "value types", meaning they are passed by value when used as arguments to functions, return values from functions, local variables, and when using ',(0,o.kt)("inlineCode",{parentName:"p"},"set!"),".  These are always very small and fit directly into the CPU registers.  Some example value types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Floating point numbers"),(0,o.kt)("li",{parentName:"ul"},"Integers")),(0,o.kt)("h3",{id:"reference-types"},"Reference Types"),(0,o.kt)("p",null,'Other GOAL types are "reference types", meaning they act like a reference to data when used as arguments to functions, return values from functions, local variables, and when using ',(0,o.kt)("inlineCode",{parentName:"p"},"set!"),".  The data can be allocated on a heap, on the stack, or as part of static data included when loading code (which is technically also on a heap).  All structure/basic types are reference types."),(0,o.kt)("p",null,"You can think of these like C/C++ pointers or references, which is how it is implemented.  The difference is that there's no special notation for this.  A GOAL ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," object is like a C/C++ ",(0,o.kt)("inlineCode",{parentName:"p"},"string*")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"string&"),'.  A GOAL "pointer to reference type" is like a C/C++ ',(0,o.kt)("inlineCode",{parentName:"p"},"my_type**"),"."),(0,o.kt)("p",null,"Note - this is quite a bit different from C/C++. In C++ you can have a structure with value semantics (normal), or reference semantics (C++ reference or pointer).  In GOAL, there is no value semantics for structures!  This is great because it means function arguments/variables always fit into registers."),(0,o.kt)("h3",{id:"dynamic-size-types"},"Dynamic Size Types"),(0,o.kt)("p",null,"Any type which ends with a dynamic array as the last field is dynamic. For these, it's a good idea to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"asize-of")," method."),(0,o.kt)("h3",{id:"compound-types"},"Compound Types"),(0,o.kt)("p",null,'A compound type is a type like "a pointer to an int64" or "a function which takes int as an argument and returns a string". These exist only at compile time, and get simplified at runtime. For example, all pointers become ',(0,o.kt)("inlineCode",{parentName:"p"},"pointer")," and all functions become ",(0,o.kt)("inlineCode",{parentName:"p"},"function"),". (The one exception to this seems to be ",(0,o.kt)("inlineCode",{parentName:"p"},"inline-array-class")," stuff, but this is not yet supported in OpenGOAL)."),(0,o.kt)("h4",{id:"pointer"},"Pointer"),(0,o.kt)("p",null,"Pointers work like you would expect. They can only point to memory types - you can't have a ",(0,o.kt)("inlineCode",{parentName:"p"},"(pointer int)"),", instead you must have a ",(0,o.kt)("inlineCode",{parentName:"p"},"(pointer int32)")," (for example).  Note that a ",(0,o.kt)("inlineCode",{parentName:"p"},"(pointer basic)")," is like a C++ ",(0,o.kt)("inlineCode",{parentName:"p"},"basic**")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"basic")," is already like a C++ pointer to struct. You can nest these, like ",(0,o.kt)("inlineCode",{parentName:"p"},"(pointer (pointer int64))"),".  If you want a pointer with no type, (like C++ ",(0,o.kt)("inlineCode",{parentName:"p"},"void*"),") just use a plain ",(0,o.kt)("inlineCode",{parentName:"p"},"pointer"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"(pointer none)")," type is invalid."),(0,o.kt)("p",null,"Like in C/C++, you can use array indexing with a pointer. One thing to note is that a ",(0,o.kt)("inlineCode",{parentName:"p"},"(pointer basic)"),' (or pointer to any reference type) is like a C++ "array of pointers to structs". To get the C++ "array of structs", you need an ',(0,o.kt)("inlineCode",{parentName:"p"},"inline-array"),"."),(0,o.kt)("h4",{id:"arrays"},"Arrays"),(0,o.kt)("p",null,"For value types, arrays work as you expect.  They have type ",(0,o.kt)("inlineCode",{parentName:"p"},"(pointer your-type)"),".  Arrays of references come in two versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Array of references: ",(0,o.kt)("inlineCode",{parentName:"li"},"(pointer your-type)"),", like a C array of pointers"),(0,o.kt)("li",{parentName:"ul"},"Array of inline objects: ",(0,o.kt)("inlineCode",{parentName:"li"},"(inline-array your-type)"),", like a C array of structs")),(0,o.kt)("p",null,"The default alignment of structs is 16 bytes, which is also the minimum alignment of ",(0,o.kt)("inlineCode",{parentName:"p"},"kmalloc"),", and the minimum alignment used when using a reference type as an inline field.  However, it's possible to violate this rule in a ",(0,o.kt)("inlineCode",{parentName:"p"},"(inline-array your-type)")," to be more efficient.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"your-type")," can set a flag indicating it should be packed in an inline array."),(0,o.kt)("p",null,"I believe the alignment then becomes the maximum of the minimum alignment of the ",(0,o.kt)("inlineCode",{parentName:"p"},"your-type")," fields.  So if you have a type with two ",(0,o.kt)("inlineCode",{parentName:"p"},"uint32"),"s (alignment 4 bytes), an ",(0,o.kt)("inlineCode",{parentName:"p"},"(inline-array your-type)")," can then have spacing of 8 bytes, instead of the usual minimum 16.  The behavior of a ",(0,o.kt)("inlineCode",{parentName:"p"},"(field-name your-type :inline #t)")," is unchanged and will still align at the minimum of 16 bytes. I ",(0,o.kt)("em",{parentName:"p"},"believe")," that the first element of the array will still have an alignment of 16."),(0,o.kt)("h5",{id:"inline-arrays"},"Inline Arrays"),(0,o.kt)("p",null,"These are only valid for reference types. They refer to an array of the actual data (like C array of structs) rather than an array of reference (like C array of pointers to structs, or GOAL ",(0,o.kt)("inlineCode",{parentName:"p"},"(pointer structure)"),").  At runtime, ",(0,o.kt)("inlineCode",{parentName:"p"},"inline-array")," becomes pointer."),(0,o.kt)("p",null,"For an inline array of basics, elements are 16-byte aligned. For ",(0,o.kt)("inlineCode",{parentName:"p"},"structure"),"s that aren't ",(0,o.kt)("inlineCode",{parentName:"p"},"basic"),", the alignment is usually the minimum alignment of all members of the structure, but there is an option to make it 16-byte aligned if needed."),(0,o.kt)("p",null,"For information about how to create these arrays, see ",(0,o.kt)("inlineCode",{parentName:"p"},"deftype")," (fields in a type) and ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," (create just an array) sections."),(0,o.kt)("h4",{id:"function"},"Function"),(0,o.kt)("p",null,"Function compound types look like this ",(0,o.kt)("inlineCode",{parentName:"p"},"(function arg0-type arg1-type... return-type)"),". There can be no arguments. The ",(0,o.kt)("inlineCode",{parentName:"p"},"return-type")," must always be specified, and should be ",(0,o.kt)("inlineCode",{parentName:"p"},"none")," if there is no return value.  The argument types themselves can be compound types.  In order to call a function, you must have a compound function type - a ",(0,o.kt)("inlineCode",{parentName:"p"},"function")," by itself cannot be called."),(0,o.kt)("h3",{id:"field-definitions"},"Field Definitions"),(0,o.kt)("p",null,"GOAL field definitions look like this:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"(name type-name [optional stuff])")),(0,o.kt)("p",null,"where optional stuff can include these, in any order:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":inline #t")," (default is false), to mark field as inline. This can only be done for a reference type, and indicates that the data should be stored inline, in the type, rather than just storing a reference to data stored elsewhere."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":dynamic #t")," (default is false), to mark field as dynamically-sized array (must be the last field in the type)"),(0,o.kt)("li",{parentName:"ul"},"a number, to give an array size."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":offset x")," where x is a number, to manually specify where the field is located")),(0,o.kt)("p",null,"There are many combinations of reference/value, dynamic/not-dynamic, inline/not-inline, array-size/no-array-size, and it can be confusing.  This list explains all that are valid."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Value type, no modifiers: a single value is stored in the field. The field type is the value type."),(0,o.kt)("li",{parentName:"ul"},"Value type, ",(0,o.kt)("inlineCode",{parentName:"li"},":dynamic #t"),": the field marks the beginning of an array (of unknown size). Field type is ",(0,o.kt)("inlineCode",{parentName:"li"},"(pointer your-type)")),(0,o.kt)("li",{parentName:"ul"},"Value type, with array size: the field marks the beginning of an array (of known size). Field type is ",(0,o.kt)("inlineCode",{parentName:"li"},"(pointer your-type)")),(0,o.kt)("li",{parentName:"ul"},"Value type, with ",(0,o.kt)("inlineCode",{parentName:"li"},":inline #t"),": invalid in all cases."),(0,o.kt)("li",{parentName:"ul"},"Reference type, no modifiers: a single reference is stored in the type. Type of field is ",(0,o.kt)("inlineCode",{parentName:"li"},"your-type")," (a C++ pointer)."),(0,o.kt)("li",{parentName:"ul"},"Reference type, ",(0,o.kt)("inlineCode",{parentName:"li"},":inline #t"),": a single object is stored inside the type. Type of field is ",(0,o.kt)("inlineCode",{parentName:"li"},"your-type")," still (a C++ pointer). The access logic is different to make this work."),(0,o.kt)("li",{parentName:"ul"},"Reference type, ",(0,o.kt)("inlineCode",{parentName:"li"},":dynamic #t")," or array size: the field marks the beginning of an ",(0,o.kt)("strong",{parentName:"li"},"array of references"),". Field type is ",(0,o.kt)("inlineCode",{parentName:"li"},"(pointer your-type)"),".  Like C array of pointers."),(0,o.kt)("li",{parentName:"ul"},"Reference type, ",(0,o.kt)("inlineCode",{parentName:"li"},":inline #t")," and (",(0,o.kt)("inlineCode",{parentName:"li"},":dynamic #t")," or array size): the field marks the beginning of an ",(0,o.kt)("strong",{parentName:"li"},"array of inline objects"),". Field type is ",(0,o.kt)("inlineCode",{parentName:"li"},"(inline-array your-type)"),". Like C array of structs.")),(0,o.kt)("p",null,"Bonus ones, for where the array is stored ",(0,o.kt)("em",{parentName:"p"},"outside")," of the type:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A dynamically typed GOAL array, stored outside your type (think ",(0,o.kt)("inlineCode",{parentName:"li"},"std::vector"),"): use ",(0,o.kt)("inlineCode",{parentName:"li"},"(name (array your-type))")),(0,o.kt)("li",{parentName:"ul"},"A dynamically typed GOAL array, stored inside your type: Not allowed, ",(0,o.kt)("inlineCode",{parentName:"li"},"array")," is dynamic!"),(0,o.kt)("li",{parentName:"ul"},"An array of value types, stored outside your type: use ",(0,o.kt)("inlineCode",{parentName:"li"},"(name (pointer your-type))")),(0,o.kt)("li",{parentName:"ul"},"An array of references (C++ array of pointers), stored outside your type: use ",(0,o.kt)("inlineCode",{parentName:"li"},"(name (pointer your-ref-type))")),(0,o.kt)("li",{parentName:"ul"},"An array of objects of reference type (C++ array of structs), stored outside your type: use ",(0,o.kt)("inlineCode",{parentName:"li"},"(name (inline-array your-ref-type))"))),(0,o.kt)("p",null,"Of course, you can combine these, to get even more confusing types! But this seems uncommon."),(0,o.kt)("h4",{id:"field-placement"},"Field Placement"),(0,o.kt)("p",null,'The exact rules for placing fields in GOAL types is unknown, but the simple approach of "place the next field as close as possible to the end of the last field" seems to get it right almost all the time. However, we need to be extra certain that we lay out type fields correctly because many GOAL types have overlapping fields.'),(0,o.kt)("p",null,"The theory I'm going with for now is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The order of fields in the ",(0,o.kt)("inlineCode",{parentName:"li"},"inspect")," method is the order fields are listed in in the type definition"),(0,o.kt)("li",{parentName:"ul"},"In the rare cases this is wrong, this is due to somebody manually specifying an offset.")),(0,o.kt)("p",null,"As a result, we should specify offsets like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If we think a field was manually placed, use ",(0,o.kt)("inlineCode",{parentName:"li"},":offset")," to override. This is certain to be right"),(0,o.kt)("li",{parentName:"ul"},"If we think a field was automatically placed, use ",(0,o.kt)("inlineCode",{parentName:"li"},":offset-assert")," to inform the compiler where we expect it to be.  In this case it will still place the field automatically, but if the result is different from the ",(0,o.kt)("inlineCode",{parentName:"li"},":offset-assert"),", it will throw an error."),(0,o.kt)("li",{parentName:"ul"},"Avoid defining any fields without ",(0,o.kt)("inlineCode",{parentName:"li"},":offset")," or ",(0,o.kt)("inlineCode",{parentName:"li"},":offset-assert"))),(0,o.kt)("h2",{id:"built-in-types"},"Built-in Types"),(0,o.kt)("p",null,'There are a number of built-in types. I use "abstract" type to refer to a type that is only a parent type.'),(0,o.kt)("h3",{id:"none"},(0,o.kt)("inlineCode",{parentName:"h3"},"none")),(0,o.kt)("p",null,'This is a special type that represents "no information". This is the return type of a function which returns nothing, and also the return type of an expression that doesn\'t return anything.  For example, the expression ',(0,o.kt)("inlineCode",{parentName:"p"},"(goto x)")," does not produce a value, so its type is ",(0,o.kt)("inlineCode",{parentName:"p"},"none"),"."),(0,o.kt)("h3",{id:"object"},(0,o.kt)("inlineCode",{parentName:"h3"},"object")),(0,o.kt)("p",null,"This is the parent type of all types. This is an abstract class. In a variable, this is always ",(0,o.kt)("inlineCode",{parentName:"p"},"object"),", and can hold any ",(0,o.kt)("inlineCode",{parentName:"p"},"object"),". In memory, this is either ",(0,o.kt)("inlineCode",{parentName:"p"},"object32")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"object64"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"object32")," can hold everything except for ",(0,o.kt)("inlineCode",{parentName:"p"},"binteger")," and 64-bit integers. This type is neither boxed nor unboxed and is neither value nor reference."),(0,o.kt)("h3",{id:"structure-child-of-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"structure")," (child of ",(0,o.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,o.kt)("p",null,"This is the parent type of all types with fields. This is an abstract class and a reference class.  A ",(0,o.kt)("inlineCode",{parentName:"p"},"structure")," can hold any ",(0,o.kt)("inlineCode",{parentName:"p"},"structure"),", both in memory and in a variable.  It is unboxed."),(0,o.kt)("h3",{id:"basic-child-of-structure"},(0,o.kt)("inlineCode",{parentName:"h3"},"basic")," (child of ",(0,o.kt)("inlineCode",{parentName:"h3"},"structure"),")"),(0,o.kt)("p",null,'This is the "boxed" version of ',(0,o.kt)("inlineCode",{parentName:"p"},"structure"),". The first field of a basic is ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),", which contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," of the object. It is boxed and a reference. A ",(0,o.kt)("inlineCode",{parentName:"p"},"basic")," can hold any ",(0,o.kt)("inlineCode",{parentName:"p"},"basic"),", both in memory and in a variable."),(0,o.kt)("h3",{id:"symbol-child-of-basic"},(0,o.kt)("inlineCode",{parentName:"h3"},"symbol")," (child of ",(0,o.kt)("inlineCode",{parentName:"h3"},"basic"),")"),(0,o.kt)("p",null,"A symbol has a name and a value. The name is a string, and the value is an ",(0,o.kt)("inlineCode",{parentName:"p"},"object32"),".  Note that the value is an ",(0,o.kt)("inlineCode",{parentName:"p"},"object32"),' so you cannot store a 64-bit integer in a symbol.  It is considered "bad" to store unboxed objects in symbols, though you can get away with it sometimes.'),(0,o.kt)("p",null,"All ",(0,o.kt)("inlineCode",{parentName:"p"},"symbol"),"s are stored in the global symbol table, which is a hash table. As a result, you cannot have multiple symbols with the same name. A name is enough to uniquely determine the symbol.  To get a symbol, use the syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"'symbol-name"),". To get the value, use ",(0,o.kt)("inlineCode",{parentName:"p"},"symbol-name"),"."),(0,o.kt)("p",null,"Each global variable, type, and named global function has a symbol for it which has the variable, type, or function as its value. The linker is able to perform symbol table lookups at link time and patch the code so you don't have to do a hash table lookup every time you access a global variable, function, or type."),(0,o.kt)("p",null,"You can also use symbols as a efficient way to represent a enum. For example, a function may return ",(0,o.kt)("inlineCode",{parentName:"p"},"'error")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"'complete")," as a status. The compiler is able to compare symbols for equality very efficiently (just a pointer comparison, as symbols are a reference type)."),(0,o.kt)("h3",{id:"type-child-of-basic"},(0,o.kt)("inlineCode",{parentName:"h3"},"type")," (child of ",(0,o.kt)("inlineCode",{parentName:"h3"},"basic"),")"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," stores information about an OpenGOAL type, including its size, parent, and name (stored as a ",(0,o.kt)("inlineCode",{parentName:"p"},"symbol"),"). It also stores the method table.  Some OpenGOAL types (children of integers, bitfield types, enums, compounds types) do not have runtime types, and instead become the parent/base type. But these types cannot have runtime type information or methods and are pretty rare.  It is a reference type, is boxed, and is dynamically sized (the method table's size is not fixed)."),(0,o.kt)("h3",{id:"string-child-of-basic"},(0,o.kt)("inlineCode",{parentName:"h3"},"string")," (child of ",(0,o.kt)("inlineCode",{parentName:"h3"},"basic"),")"),(0,o.kt)("p",null,"A string. The string is null terminated and also stores the buffer size. This type is a reference type, is boxed, and is also dynamically sized."),(0,o.kt)("h3",{id:"function-child-of-basic"},(0,o.kt)("inlineCode",{parentName:"h3"},"function")," (child of ",(0,o.kt)("inlineCode",{parentName:"h3"},"basic"),")"),(0,o.kt)("p",null,"A function. Boxed and reference. It is a reference to a function, so it's like a C/C++ function pointer type."),(0,o.kt)("h3",{id:"kheap-child-of-structure"},(0,o.kt)("inlineCode",{parentName:"h3"},"kheap")," (child of ",(0,o.kt)("inlineCode",{parentName:"h3"},"structure"),")"),(0,o.kt)("p",null,"A simple bump-allocated heap. Doesn't store the heap memory, just metadata. Supports allocating from either the top or the bottom. This is used as the memory allocation strategy for the global, debug, and level heaps. Unboxed, reference, not dynamic."),(0,o.kt)("h3",{id:"array-child-of-basic"},(0,o.kt)("inlineCode",{parentName:"h3"},"array")," (child of ",(0,o.kt)("inlineCode",{parentName:"h3"},"basic"),")"),(0,o.kt)("p",null,'A "fancy" array. It is not yet implemented in OpenGOAL.'),(0,o.kt)("h3",{id:"pair-child-of-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"pair")," (child of ",(0,o.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,o.kt)("p",null,"A pair. It is boxed. You should not make child types of ",(0,o.kt)("inlineCode",{parentName:"p"},"pair"),".  The two objects stored by the pair are ",(0,o.kt)("inlineCode",{parentName:"p"},"object32"),"s."),(0,o.kt)("h3",{id:"pointer-child-of-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"pointer")," (child of ",(0,o.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,o.kt)("p",null,"It is a 32-bit value type containing a pointer. Not boxed, value type. See section on compound types for more information."),(0,o.kt)("h3",{id:"number-child-of-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"number")," (child of ",(0,o.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,o.kt)("p",null,"Abstract type for all numbers. Value type. 64-bits."),(0,o.kt)("h3",{id:"float-child-of-number"},(0,o.kt)("inlineCode",{parentName:"h3"},"float")," (child of ",(0,o.kt)("inlineCode",{parentName:"h3"},"number"),")"),(0,o.kt)("p",null,"4-byte, single precision floating point number.  Value type."),(0,o.kt)("h3",{id:"integer-child-of-number"},(0,o.kt)("inlineCode",{parentName:"h3"},"integer")," (child of ",(0,o.kt)("inlineCode",{parentName:"h3"},"number"),")"),(0,o.kt)("p",null,"Abstract class for integer numbers. Child classes are ",(0,o.kt)("inlineCode",{parentName:"p"},"sinteger")," (signed integer), ",(0,o.kt)("inlineCode",{parentName:"p"},"uinteger")," (unsigned integer), and ",(0,o.kt)("inlineCode",{parentName:"p"},"binteger")," (boxed-integer, always signed).  These are all 64-bit types."),(0,o.kt)("p",null,"Children of ",(0,o.kt)("inlineCode",{parentName:"p"},"sinteger")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"uinteger")," are ",(0,o.kt)("inlineCode",{parentName:"p"},"int8"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"int16"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"int32"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"int64"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uint8"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uint16"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uint32"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uint64"),".  These are the size you expect, value types, and not boxed. These only exist as memory types. In a variable, there is only ",(0,o.kt)("inlineCode",{parentName:"p"},"int")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"uint"),".  These are both 64-bit types. All integer operations (math, logical, shifts) are 64-bit."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"binteger")," is a boxed integer. It is a 61 bit signed integer (the other three bits are lost due to the number being boxed). There may actually be a ",(0,o.kt)("inlineCode",{parentName:"p"},"buinteger")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"ubinteger"),") but it doesn't exist in OpenGOAL at this point."),(0,o.kt)("h4",{id:"weird-built-in-types-that-arent-supported-yet"},"Weird Built-in types that aren't supported yet."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vu-function")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"link-block")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connectable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"file-stream")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"inline-array")," (class)")),(0,o.kt)("h2",{id:"unknown-areas"},"Unknown Areas"),(0,o.kt)("h3",{id:"inline-array-class"},"Inline Array Class"),(0,o.kt)("p",null,"There's a weird ",(0,o.kt)("inlineCode",{parentName:"p"},"inline-array-class")," type that's not fully understood yet.  It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"heap-base"),"."),(0,o.kt)("h3",{id:"heap-base"},"Heap Base"),(0,o.kt)("p",null,"This is a field in ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),". What does it mean?  It's zero for most types (at least the early types)."),(0,o.kt)("h3",{id:"second-size-field"},"Second Size Field"),(0,o.kt)("p",null,"There are two fields in ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," for storing the size. The first one stores the exact size, and by default the second stores the size rounded up to the nearest 16 bytes.  Why? Who uses it? Does it ever get changed?"),(0,o.kt)("h2",{id:"todo"},"TODO"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Kernel types that are built-in"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Signed/unsigned for a few built-in type fields"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Tests for field placement logic (probably a full compiler test?)"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Bitfield types"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Type redefinition tests (these are a pain and probably useless, might just wait for full compiler tests?)"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Stuff for decompiler",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","What field is here?"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Export all deftypes")))))}m.isMDXComponent=!0}}]);