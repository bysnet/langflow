"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[4973],{80671:(n,e,o)=>{o.r(e),o.d(e,{CH:()=>d,assets:()=>c,chCodeConfig:()=>h,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var t=o(74848),l=o(28453),s=o(24754);const a={title:"Install Langflow",sidebar_position:1,slug:"/get-started-installation"},i=void 0,r={id:"Get-Started/get-started-installation",title:"Install Langflow",description:"You can deploy Langflow either locally or as a hosted service with Datastax Langflow.",source:"@site/docs/Get-Started/get-started-installation.md",sourceDirName:"Get-Started",slug:"/get-started-installation",permalink:"/get-started-installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Install Langflow",sidebar_position:1,slug:"/get-started-installation"},sidebar:"docs",previous:{title:"Welcome to Langflow",permalink:"/"},next:{title:"Quickstart",permalink:"/get-started-quickstart"}},c={},d={annotations:s.hk,Code:s.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},p=[{value:"Install Langflow locally",id:"install-langflow-locally",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install Langflow with pip or pipx",id:"install-langflow-with-pip-or-pipx",level:3},{value:"Run Langflow",id:"run-langflow",level:2},{value:"Manage Langflow versions",id:"manage-langflow-versions",level:2},{value:"DataStax Langflow",id:"datastax-langflow",level:2},{value:"Common installation issues",id:"common-installation-issues",level:2},{value:"No <code>langflow.__main__</code> module",id:"no-langflow__main__-module",level:3},{value:"Langflow runTraceback",id:"langflow-runtraceback",level:3},{value:"Something went wrong running migrations",id:"something-went-wrong-running-migrations",level:3}];function g(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return d||u("CH",!1),d.Code||u("CH.Code",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,t.jsxs)(e.p,{children:["You can deploy Langflow either locally or as a hosted service with ",(0,t.jsx)(e.a,{href:"#datastax-langflow",children:(0,t.jsx)(e.strong,{children:"Datastax Langflow"})}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"install-langflow-locally",children:"Install Langflow locally"}),"\n",(0,t.jsxs)(e.p,{children:["Install Langflow locally with ",(0,t.jsx)(e.a,{href:"https://pypi.org/project/pip/",children:"pip"}),"\xa0or ",(0,t.jsx)(e.a,{href:"https://pipx.pypa.io/stable/installation/",children:"pipx"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://www.python.org/downloads/release/python-3100/",children:"Python 3.10 to 3.12"})," installed"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://pypi.org/project/pip/",children:"pip"}),"\xa0or\xa0",(0,t.jsx)(e.a,{href:"https://pipx.pypa.io/stable/installation/",children:"pipx"})," installed"]}),"\n",(0,t.jsxs)(e.li,{children:["Before installing Langflow, we recommend creating a virtual environment to isolate your Python dependencies with ",(0,t.jsx)(e.a,{href:"https://docs.python.org/3/library/venv.html",children:"venv"})," or ",(0,t.jsx)(e.a,{href:"https://anaconda.org/anaconda/conda",children:"conda"})]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"install-langflow-with-pip-or-pipx",children:"Install Langflow with pip or pipx"}),"\n",(0,t.jsx)(e.p,{children:"Install Langflow with pip:"}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"pip install langflow",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,t.jsx)(e.p,{children:"Install Langflow with pipx using the Python 3.10 executable:"}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"pipx ",props:{style:{color:"#FFA657"}}},{content:"install langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--python ",props:{style:{color:"#79C0FF"}}},{content:"python3.",props:{style:{color:"#A5D6FF"}}},{content:"10",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,t.jsx)(e.h2,{id:"run-langflow",children:"Run Langflow"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"To run Langflow, enter the following command."}),"\n"]}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow run",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsxs)(e.li,{children:["Confirm that a local Langflow instance starts by visiting\xa0",(0,t.jsx)(e.code,{children:"http://127.0.0.1:7860"}),"\xa0in a Chromium-based browser."]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["Now that Langflow is running, follow the ",(0,t.jsx)(e.a,{href:"/get-started-quickstart",children:"Quickstart"})," to create your first flow."]}),"\n",(0,t.jsx)(e.h2,{id:"manage-langflow-versions",children:"Manage Langflow versions"}),"\n",(0,t.jsx)(e.p,{children:"To upgrade Langflow to the latest version, use the pip upgrade command."}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"pip install langflow ",props:{style:{color:"#A5D6FF"}}},{content:"-U",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,t.jsx)(e.p,{children:"To install a specific version of the Langflow package, add the required version to the command."}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"pip install langflow==",props:{style:{color:"#A5D6FF"}}},{content:"1.1",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,t.jsxs)(e.p,{children:["To reinstall Langflow and all of its dependencies, add the ",(0,t.jsx)(e.code,{children:"--force-reinstall"})," flag to the command."]}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"pip install langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--force-reinstall",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,t.jsx)(e.h2,{id:"datastax-langflow",children:"DataStax Langflow"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"DataStax Langflow"})," is a hosted version of Langflow integrated with\xa0",(0,t.jsx)(e.a,{href:"https://www.datastax.com/products/datastax-astra",children:"Astra DB"}),". Be up and running in minutes with no installation or setup required.\xa0",(0,t.jsx)(e.a,{href:"https://astra.datastax.com/signup?type=langflow",children:"Sign up for free"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"common-installation-issues",children:"Common installation issues"}),"\n",(0,t.jsx)(e.p,{children:"This is a list of possible issues that you may encounter when installing and running Langflow."}),"\n",(0,t.jsxs)(e.h3,{id:"no-langflow__main__-module",children:["No ",(0,t.jsx)(e.code,{children:"langflow.__main__"})," module"]}),"\n",(0,t.jsxs)(e.p,{children:["When you try to run Langflow with the command ",(0,t.jsx)(e.code,{children:"langflow run"}),", you encounter the following error:"]}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:">",props:{style:{color:"#FF7B72"}}},{content:" No\xa0module\xa0named\xa0",props:{style:{color:"#C9D1D9"}}},{content:"'langflow.__main__'",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Run\xa0",(0,t.jsx)(e.code,{children:"python\xa0-m langflow run"}),"\xa0instead of\xa0",(0,t.jsx)(e.code,{children:"langflow run"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["If that doesn't work, reinstall the latest Langflow version with\xa0",(0,t.jsx)(e.code,{children:"python\xa0-m pip install langflow\xa0-U"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["If that doesn't work, reinstall Langflow and its dependencies with\xa0",(0,t.jsx)(e.code,{children:"python\xa0-m pip install langflow\xa0--pre\xa0-U\xa0--force-reinstall"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"langflow-runtraceback",children:"Langflow runTraceback"}),"\n",(0,t.jsxs)(e.p,{children:["When you try to run Langflow using the command\xa0",(0,t.jsx)(e.code,{children:"langflow run"}),", you encounter the following error:"]}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:">",props:{style:{color:"#FF7B72"}}},{content:" langflow runTraceback (",props:{style:{color:"#C9D1D9"}}},{content:"most ",props:{style:{color:"#FFA657"}}},{content:"recent call last",props:{style:{color:"#A5D6FF"}}},{content:"): File ",props:{style:{color:"#C9D1D9"}}},{content:'".../langflow"',props:{style:{color:"#A5D6FF"}}},{content:", line 5, ",props:{style:{color:"#C9D1D9"}}},{content:"in <",props:{style:{color:"#FF7B72"}}},{content:"module",props:{style:{color:"#C9D1D9"}}},{content:">",props:{style:{color:"#FF7B72"}}},{content:"  from langflow.__main__ import mainModuleNotFoundError: No module named ",props:{style:{color:"#C9D1D9"}}},{content:"'langflow.__main__'",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,t.jsx)(e.p,{children:"There are two possible reasons for this error:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["You've installed Langflow using\xa0",(0,t.jsx)(e.code,{children:"pip install langflow"}),"\xa0but you already had a previous version of Langflow installed in your system. In this case, you might be running the wrong executable. To solve this issue, run the correct executable by running\xa0",(0,t.jsx)(e.code,{children:"python\xa0-m langflow run"}),"\xa0instead of\xa0",(0,t.jsx)(e.code,{children:"langflow run"}),". If that doesn't work, try uninstalling and reinstalling Langflow with\xa0",(0,t.jsx)(e.code,{children:"python\xa0-m pip install langflow\xa0--pre\xa0-U"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Some version conflicts might have occurred during the installation process. Run\xa0",(0,t.jsx)(e.code,{children:"python\xa0-m pip install langflow\xa0--pre\xa0-U\xa0--force-reinstall"}),"\xa0to reinstall Langflow and its dependencies."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"something-went-wrong-running-migrations",children:"Something went wrong running migrations"}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:">",props:{style:{color:"#FF7B72"}}},{content:" Something went wrong running migrations. Please, run\xa0",props:{style:{color:"#C9D1D9"}}},{content:"'langflow migration --fix'",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,t.jsx)(e.p,{children:"Clear the cache by deleting the contents of the cache folder."}),"\n",(0,t.jsx)(e.p,{children:"This folder can be found at:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Linux or WSL2 on Windows"}),":\xa0",(0,t.jsx)(e.code,{children:"home/<username>/.cache/langflow/"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"MacOS"}),":\xa0",(0,t.jsx)(e.code,{children:"/Users/<username>/Library/Caches/langflow/"})]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["This error can occur during Langflow upgrades when the new version can't override\xa0",(0,t.jsx)(e.code,{children:"langflow-pre.db"}),"\xa0in\xa0",(0,t.jsx)(e.code,{children:".cache/langflow/"}),". Clearing the cache removes this file but also erases your settings."]}),"\n",(0,t.jsx)(e.p,{children:"If you wish to retain your files, back them up before clearing the folder."})]})}function f(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(g,{...n})}):g(n)}function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);