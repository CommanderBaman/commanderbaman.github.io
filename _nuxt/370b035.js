(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4],{306:function(t,e,r){var content=r(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("38fbf61a",content,!0,{sourceMap:!1})},310:function(t,e,r){"use strict";r(306)},311:function(t,e,r){var n=r(18)(!1);n.push([t.i,".cover-image[data-v-0ac7bf24]{width:100%;display:block;transition:all var(--short-transition-time)}.cover-image-wrapper[data-v-0ac7bf24]{overflow:hidden;border-bottom:var(--border-size-4) solid var(--clr-primary)}.display-text-section[data-v-0ac7bf24]{flex:1;padding:1em}.work-heading[data-v-0ac7bf24]{transition:all var(--short-transition-time);font-size:var(--font-size-20)}.work-description[data-v-0ac7bf24]{font-size:var(--font-size-16);padding-top:1em;opacity:.8}.work-display-card-wrapper[data-v-0ac7bf24]{background-color:var(--clr-surface);height:100%;border-radius:var(--border-radius-16);overflow:hidden;display:flex;flex-direction:column;justify-content:space-between}.work-display-card-wrapper:hover .cover-image[data-v-0ac7bf24]{transform:scale(1.1)}.work-display-card-wrapper:hover .work-heading[data-v-0ac7bf24]{color:var(--clr-primary)}",""]),t.exports=n},314:function(t,e,r){"use strict";r.r(e);var n={props:{coverImageLink:{type:String,required:!0},destinationLink:{type:String,required:!0},workDescription:{type:String,required:!0},workTitle:{type:String,required:!0}}},o=(r(310),r(13)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{attrs:{to:t.$props.destinationLink}},[r("div",{staticClass:"work-display-card-wrapper"},[r("div",{staticClass:"cover-image-wrapper"},[r("img",{staticClass:"cover-image",attrs:{src:t.$props.coverImageLink,loading:"lazy"}})]),t._v(" "),r("div",{staticClass:"display-text-section"},[r("h3",{staticClass:"work-heading"},[t._v(t._s(t.$props.workTitle))]),t._v(" "),r("p",{staticClass:"work-description"},[t._v(t._s(t.$props.workDescription))])])])])}),[],!1,null,"0ac7bf24",null);e.default=component.exports},322:function(t,e,r){var content=r(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("293d319c",content,!0,{sourceMap:!1})},338:function(t,e,r){"use strict";r(322)},339:function(t,e,r){var n=r(18)(!1);n.push([t.i,".heading-section[data-v-91011d90]{width:100%;margin:auto;position:relative;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.back-heading[data-v-91011d90]{color:var(--clr-surface);margin:.8em 0;text-align:center;font-size:var(--font-size-64);letter-spacing:.2ch;max-width:99vw;overflow:hidden}.main-heading[data-v-91011d90]{display:flex;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:var(--clr-on-bg);white-space:nowrap}.heading-highlight[data-v-91011d90]{margin:0 .5ch;color:var(--clr-primary)}@media only screen and (min-width:48em){.back-heading[data-v-91011d90]{font-size:var(--font-size-96);margin:.5em 0}}.content-section[data-v-91011d90]{width:72%;margin:auto;display:grid;padding:0 2em 5em;grid-column-gap:2em;-moz-column-gap:2em;column-gap:2em;grid-row-gap:2em;row-gap:2em}.article-wrapper[data-v-91011d90]{max-width:100vw;width:88%;margin:auto;padding-bottom:3em}.article-title[data-v-91011d90]{font-size:var(--font-size-48);padding:1em 0 0;text-align:center}.article-cover-image[data-v-91011d90]{width:80%;margin:0 10% 2vh}.article-description[data-v-91011d90]{padding:2em;text-align:center;opacity:.8}@media only screen and (min-width:48em){.content-section[data-v-91011d90]{grid-template-columns:1fr 1fr;padding:0 2em 3.5em}.article-wrapper[data-v-91011d90]{width:70%;padding-bottom:none}.article-cover-image[data-v-91011d90]{width:40%;margin:0 30% 2vh}.article-title[data-v-91011d90]{padding:1.5em 0 0}}@media only screen and (min-width:64em){.content-section[data-v-91011d90]{grid-template-columns:1fr 1fr 1fr;padding:0 2em 2em}}",""]),t.exports=n},369:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(50),r(15),r(37),r(110),r(49),r(30),r(141),r(2)),c=r(140),d=o.a.extend({name:"ProjectsPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r(c.g).without(["body","toc","dir"]).fetch();case 3:return(n=e.sent).forEach((function(t){t.customPath=c.j.path+"/"+t.path.split("/").slice(2).join("/")})),e.abrupt("return",{allProjectData:n});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{PROJECT_CONTENT_TITLES:c.h}}}),l=(r(338),r(13)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"projects-page"},[t._m(0),t._v(" "),r("div",{staticClass:"content-section"},t._l(t.allProjectData,(function(e){return r("div",{key:e[t.PROJECT_CONTENT_TITLES.TITLE],staticClass:"project-wrapper"},[r("CardWorkDisplay",{attrs:{"cover-image-link":e[t.PROJECT_CONTENT_TITLES.COVER_IMAGE],"destination-link":e.customPath,"work-description":e[t.PROJECT_CONTENT_TITLES.DESCRIPTION],"work-title":e[t.PROJECT_CONTENT_TITLES.TITLE]}})],1)})),0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"heading-section"},[r("h1",{staticClass:"back-heading"},[t._v("Projects")]),t._v(" "),r("h2",{staticClass:"main-heading"},[t._v("\n      My\n      "),r("span",{staticClass:"heading-highlight"},[t._v("Work")])])])}],!1,null,"91011d90",null);e.default=component.exports;installComponents(component,{CardWorkDisplay:r(314).default})}}]);