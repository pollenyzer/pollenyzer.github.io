(function(){var e={8905:function(e){var t=function(e){this.canvas=e.canvas,this.ctx=e.ctx,this.particleColor=e.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*e.options.velocity,y:(Math.random()-.5)*e.options.velocity}};t.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},t.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle=this.particleColor,this.ctx.globalAlpha=.7,this.ctx.arc(this.x,this.y,1.5,0,2*Math.PI),this.ctx.fill()};var a=function(e,t){this.canvasDiv=e,this.canvasDiv.size={width:this.canvasDiv.offsetWidth,height:this.canvasDiv.offsetHeight},t=void 0!==t?t:{},this.options={particleColor:void 0!==t.particleColor?t.particleColor:"#fff",background:void 0!==t.background?t.background:"#1a252f",interactive:void 0===t.interactive||t.interactive,velocity:this.setVelocity(t.speed),density:this.setDensity(t.density)},this.init()};a.prototype.init=function(){if(this.bgDiv=document.createElement("div"),this.canvasDiv.appendChild(this.bgDiv),this.setStyles(this.bgDiv,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background)&&this.setStyles(this.bgDiv,{background:this.options.background}),!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.canvasDiv.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.canvasDiv.size.width,this.canvas.height=this.canvasDiv.size.height,this.setStyles(this.canvasDiv,{position:"relative"}),this.setStyles(this.canvas,{"z-index":"20",position:"relative"}),window.addEventListener("resize",function(){if(this.canvasDiv.offsetWidth===this.canvasDiv.size.width&&this.canvasDiv.offsetHeight===this.canvasDiv.size.height)return!1;this.canvas.width=this.canvasDiv.size.width=this.canvasDiv.offsetWidth,this.canvas.height=this.canvasDiv.size.height=this.canvasDiv.offsetHeight,clearTimeout(this.resetTimer),this.resetTimer=setTimeout(function(){this.particles=[];for(var e=0;e<this.canvas.width*this.canvas.height/this.options.density;e++)this.particles.push(new t(this));this.options.interactive&&this.particles.push(this.mouseParticle),requestAnimationFrame(this.update.bind(this))}.bind(this),500)}.bind(this)),this.particles=[];for(var e=0;e<this.canvas.width*this.canvas.height/this.options.density;e++)this.particles.push(new t(this));this.options.interactive&&(this.mouseParticle=new t(this),this.mouseParticle.velocity={x:0,y:0},this.particles.push(this.mouseParticle),this.canvas.addEventListener("mousemove",function(e){this.mouseParticle.x=e.clientX-this.canvas.offsetLeft,this.mouseParticle.y=e.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(){this.mouseParticle.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.mouseParticle=new t(this),this.mouseParticle.velocity={x:0,y:0},this.particles.push(this.mouseParticle)}.bind(this))),requestAnimationFrame(this.update.bind(this))},a.prototype.update=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalAlpha=1;for(var e=0;e<this.particles.length;e++){this.particles[e].update(),this.particles[e].draw();for(var t=this.particles.length-1;t>e;t--){var a=Math.sqrt(Math.pow(this.particles[e].x-this.particles[t].x,2)+Math.pow(this.particles[e].y-this.particles[t].y,2));a>120||(this.ctx.beginPath(),this.ctx.strokeStyle=this.options.particleColor,this.ctx.globalAlpha=(120-a)/120,this.ctx.lineWidth=2.8,this.ctx.moveTo(this.particles[e].x,this.particles[e].y),this.ctx.lineTo(this.particles[t].x,this.particles[t].y),this.ctx.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},a.prototype.setVelocity=function(e){return"fast"===e?3.5:"slow"===e?1:"none"===e?0:.66},a.prototype.setDensity=function(e){return"high"===e?5e3:"low"===e?2e4:isNaN(parseInt(e,10))?1e4:e},a.prototype.setStyles=function(e,t){for(var a in t)e.style[a]=t[a]},e.exports={ParticleNetwork:a}},9978:function(e,t,a){"use strict";var i=a(9242),n=a(3396);const s={style:{"border-color":"crimson",width:"100%",margin:"10px",padding:"10px","border-style":"solid",color:"darkslategray","border-width":"10px","text-align":"center"}},l=(0,n.Uk)(" Thank you for your interest in pollenyzer! The program was intended as a demonstration for EurBee09 (click "),o=(0,n._)("a",{href:"./assets/poster_final.pdf"},"here",-1),r=(0,n.Uk)(" for the poster). If you are interested in using the program, I am happy to customize it to your needs in my spare time, just let me know (parzival(dot)borlinghaus(at)kit.edu). "),d=(0,n.Uk)("To avoid unnecessary costs, the server is currently shut down.");function c(e,t,a,i,c,u){const p=(0,n.up)("bold"),h=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",s,[l,o,r,(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[d])),_:1})]),(0,n.Wm)(h)],64)}var u={name:"App",components:{}},p=a(89);const h=(0,p.Z)(u,[["render",c]]);var m=h,v=a(5431);(0,v.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=a(2483),g=a.p+"img/pollenyzer_logo.8c6997e9.svg";const b=(0,n._)("img",{class:"mx-auto my-4",style:{"max-width":"500px"},alt:"Vue logo",src:g},null,-1),y={key:0},D={key:0},w={key:0};function _(e,t,a,s,l,o){const r=(0,n.up)("MDBRow"),d=(0,n.up)("MDBCol"),c=(0,n.up)("MyCard1"),u=(0,n.up)("MyCard2"),p=(0,n.up)("MyCard3"),h=(0,n.up)("MDBContainer"),m=(0,n.up)("MyFooter");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{md:"12",class:"mx-auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[b])),_:1}),(0,n.Wm)(r)])),_:1})])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i.uT,{appear:"",name:"bounce"},{default:(0,n.w5)((()=>[l.showCards[0]?((0,n.wg)(),(0,n.iD)("p",y,[(0,n.Wm)(c)])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{name:"bounce"},{default:(0,n.w5)((()=>[l.showCards[1]?((0,n.wg)(),(0,n.iD)("p",D,[(0,n.Wm)(u)])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{name:"bounce"},{default:(0,n.w5)((()=>[l.showCards[2]?((0,n.wg)(),(0,n.iD)("p",w,[(0,n.Wm)(p)])):(0,n.kq)("",!0)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(m,{onNextCard:t[0]||(t[0]=e=>o.nextCard()),onPreviousCard:t[1]||(t[1]=e=>o.previousCard()),prevDisabled:l.prevDisabled,nextDisabled:l.nextDisabled},null,8,["prevDisabled","nextDisabled"])])}const x=e=>((0,n.dD)("data-v-eb5ff872"),e=e(),(0,n.Cn)(),e),C={style:{color:"white",position:"fixed",bottom:"0",width:"100%"},class:"d-block d-md-none"},k={class:"text-center p-1",style:{"background-image":"linear-gradient(to top,rgba(151, 190, 17, 1),rgba(151, 190, 17, 0.3),rgba(251,252,235, 0))"}},M={key:0,class:"text-center bgcol_green",style:{width:"100%","min-height":"1em"}},B=(0,n.Uk)(" © 2022 Pollenyzer "),W=x((()=>(0,n._)("span",{style:{color:"rgba(255, 255, 255, 0.3)"}},"v0.2",-1))),T=[B,W],P={style:{width:"100%","padding-bottom":"100px"},class:"d-none d-md-block text-center"},I=x((()=>(0,n._)("div",{style:{height:"50px"}},null,-1))),$={style:{color:"white",position:"fixed",bottom:"0",width:"100%"}},z={key:0,class:"text-center bgcol_dark text-smaller",style:{width:"100%","min-height":"1em"}},A=(0,n.Uk)(" © 2022 Pollenyzer "),S=x((()=>(0,n._)("span",{style:{color:"rgba(255, 255, 255, 0.4)"}},"v0.2",-1))),U=[A,S];function H(e,t,a,i,s,l){const o=(0,n.up)("MyCardControls");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",C,[(0,n._)("div",k,[(0,n.Wm)(o,{onNextCard:t[0]||(t[0]=t=>e.$emit("nextCard")),onPreviousCard:t[1]||(t[1]=t=>e.$emit("previousCard")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled},null,8,["nextDisabled","prevDisabled"])]),((0,n.wg)(),(0,n.iD)("div",M,T))]),(0,n._)("div",P,[(0,n.Wm)(o,{onNextCard:t[2]||(t[2]=t=>e.$emit("nextCard")),onPreviousCard:t[3]||(t[3]=t=>e.$emit("previousCard")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled},null,8,["nextDisabled","prevDisabled"]),I,(0,n._)("div",$,[((0,n.wg)(),(0,n.iD)("div",z,U))])])],64)}const j={class:"d-block d-md-none"},O={class:"mx-2"},R={class:"mx-2"},E={class:"d-none d-md-block"},F={class:"m-5"},V={class:"m-5"};function L(e,t,a,i,s,l){const o=(0,n.up)("MDBIcon"),r=(0,n.up)("MDBBtn");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",j,[(0,n._)("span",O,[(0,n.Wm)(r,{onClick:t[0]||(t[0]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",R,[(0,n.Wm)(r,{onClick:t[1]||(t[1]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-right"})])),_:1},8,["disabled"])])]),(0,n._)("div",E,[(0,n._)("span",F,[(0,n.Wm)(r,{onClick:t[2]||(t[2]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",V,[(0,n.Wm)(r,{onClick:t[3]||(t[3]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-right"})])),_:1},8,["disabled"])])])])}var N=a(6818),Z={data(){return{}},props:{prevDisabled:Boolean,nextDisabled:Boolean},name:"CamControls",components:{MDBBtn:N.MDBBtn,MDBIcon:N.MDBIcon}};const q=(0,p.Z)(Z,[["render",L]]);var Y=q,G={components:{MyCardControls:Y},props:{prevDisabled:Boolean,nextDisabled:Boolean},emits:["nextCard","previousCard"]};const J=(0,p.Z)(G,[["render",H],["__scopeId","data-v-eb5ff872"]]);var K=J;const X=(0,n.Uk)("Analyze the content of your pollen traps!"),Q=(0,n._)("ol",null,[(0,n._)("li",null,"Attach the pollen trap to the hive for a few days."),(0,n._)("li",null,"Harvest the pollen."),(0,n._)("li",null,"Photograph your catch."),(0,n._)("li",null,"(Opt. provide some additional information for scientists)."),(0,n._)("li",null,"Analyze your pollen!")],-1);function ee(e,t,a,i,s,l){const o=(0,n.up)("MDBCardTitle"),r=(0,n.up)("MDBCardText"),d=(0,n.up)("MDBCardBody"),c=(0,n.up)("MDBCard");return(0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[X])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[Q])),_:1})])),_:1})])),_:1})}var te={name:"MyCard1",components:{MDBCard:N.MDBCard,MDBCardBody:N.MDBCardBody,MDBCardTitle:N.MDBCardTitle,MDBCardText:N.MDBCardText}};const ae=(0,p.Z)(te,[["render",ee]]);var ie=ae,ne=a(7139);const se=(0,n.Uk)("Support science!"),le=(0,n.Uk)(" You can skip this, however if you feel like saving the bees, please give us additional information about your hive. "),oe=(0,n._)("hr",null,null,-1),re=(0,n._)("label",{for:"country",class:"form-label"},"Hive's location",-1),de=(0,n._)("span",{class:"input-group-text border-0",id:"search-addon"},[(0,n._)("i",{class:"fas fa-map-marker-alt"})],-1),ce=(0,n._)("span",{class:"input-group-text border-0",id:"search-addon"},[(0,n._)("i",{class:"fas fa-map-marker-alt"})],-1),ue=(0,n._)("hr",null,null,-1),pe={for:"duration",class:"form-label"},he=(0,n.Uk)("No. of days the trap was mounted: "),me=(0,n._)("hr",null,null,-1),ve={for:"datepicker",class:"form-label"},fe={style:{"text-align":"center",width:"100%"}};function ge(e,t,a,i,s,l){const o=(0,n.up)("MDBCardTitle"),r=(0,n.up)("MDBCardText"),d=(0,n.up)("MDBInput"),c=(0,n.up)("vue3-slider"),u=(0,n.up)("Datepicker"),p=(0,n.up)("MDBCardBody"),h=(0,n.up)("MDBCard");return(0,n.wg)(),(0,n.j4)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"xtra-padding"},{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[se])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[le])),_:1}),oe,re,(0,n.Wm)(d,{id:"country",inputGroup:"",formOutline:!1,wrapperClass:"mb-3",class:"rounded",modelValue:i.input12,"onUpdate:modelValue":t[0]||(t[0]=e=>i.input12=e),"aria-describedby":"search-addon","aria-label":"country",placeholder:"Hive's country"},{prepend:(0,n.w5)((()=>[de])),_:1},8,["modelValue"]),(0,n.Wm)(d,{inputGroup:"",formOutline:!1,type:"number",wrapperClass:"mb-3",class:"zipCode rounded",modelValue:i.input13,"onUpdate:modelValue":t[1]||(t[1]=e=>i.input13=e),"aria-describedby":"basic-addon4","aria-label":"zipcode",placeholder:"Hive's zip code"},{prepend:(0,n.w5)((()=>[ce])),_:1},8,["modelValue"]),ue,(0,n._)("label",pe,[he,(0,n._)("b",null,(0,ne.zw)(s.daysMounted),1)]),(0,n.Wm)(c,{id:"duration",trackColor:"#ffa820",color:"#97be11",modelValue:s.daysMounted,"onUpdate:modelValue":t[2]||(t[2]=e=>s.daysMounted=e),handleScale:2.1,min:1,alwaysShowHandle:!0,sticky:!0,max:7,disabled:!1},null,8,["modelValue","handleScale"]),me,(0,n._)("label",ve,"Date of harvest "+(0,ne.zw)(s.date),1),(0,n._)("div",fe,[(0,n.Wm)(u,{id:"datepicker",selectText:"",timePicker:!1,inline:!0,modelValue:s.date,"onUpdate:modelValue":t[3]||(t[3]=e=>s.date=e)},null,8,["modelValue"])])])),_:1})])),_:1})}var be=a(8524),ye=a(1716),De=a.n(ye),we=a(4870),_e={name:"MyCard2",data(){return{date:null,daysMounted:3}},components:{MDBCard:N.MDBCard,MDBCardBody:N.MDBCardBody,MDBCardTitle:N.MDBCardTitle,MDBCardText:N.MDBCardText,MDBInput:N.MDBInput,Datepicker:be.Z,"vue3-slider":De()},setup(){const e=(0,we.iH)(""),t=(0,we.iH)(""),a=(0,we.iH)(""),i=(0,we.iH)(""),n=(0,we.iH)(""),s=(0,we.iH)("");return{input12:e,input13:t,input14:a,input15:i,input16:n,textarea2:s}}};const xe=(0,p.Z)(_e,[["render",ge]]);var Ce=xe;const ke=e=>((0,n.dD)("data-v-768cbe3a"),e=e(),(0,n.Cn)(),e),Me=(0,n.Uk)("Take or upload a photo!"),Be={class:"fa-ul p-1 py-3"},We=ke((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),Te=(0,n.Uk)(" Place Pollen on a white, folded piece of paper. "),Pe=ke((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Ie=[Pe],$e=ke((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),ze=(0,n.Uk)(" Pollen should not overlap. "),Ae=ke((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Se=[Ae],Ue=ke((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),He=(0,n.Uk)("Avoid casting any shadows. "),je=ke((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Oe=[je],Re=ke((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),Ee=(0,n.Uk)("Avoid flashlight. "),Fe=ke((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Ve=[Fe],Le={class:"row justify-content-evenly"},Ne=ke((()=>(0,n._)("div",{class:"col-4 text-center"},[(0,n._)("a",{class:"btn btn-primary btn-lg btn-floating btn-dark",href:"/#main",role:"button"},[(0,n._)("i",{class:"fas fa-camera",style:{}})])],-1))),Ze={class:"col-4 text-center"},qe={for:"file"},Ye=ke((()=>(0,n._)("i",{class:"fas fa-2x fa-file-upload",style:{cursor:"pointer"}},null,-1))),Ge={type:"file",ref:"fileupload",id:"file",style:{display:"none"},name:"image",accept:"image/jpeg,image/jpg,image/png",multiple:"","data-original-title":"upload photos"},Je=ke((()=>(0,n._)("div",{class:"row justify-content-evenly"},[(0,n._)("div",{class:"col-4 text-center small p-1"},"Open Camera"),(0,n._)("div",{class:"col-4 text-center small p-1"},"Upload File ")],-1)));function Ke(e,t,a,i,s,l){const o=(0,n.up)("MDBCardTitle"),r=(0,n.up)("MDBCardText"),d=(0,n.up)("MDBCardBody"),c=(0,n.up)("MDBCard");return(0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[Me])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n._)("ul",Be,[(0,n._)("li",null,[We,(0,n._)("p",null,[Te,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Please use DIN A5 paper.",class:"col_green customtooltip","data-mdb-html":"true","data-mdb-placement":"bottom",href:"#!",onClick:t[0]||(t[0]=e=>e.preventDefault())},Ie)])]),(0,n._)("li",null,[$e,(0,n._)("p",null,[ze,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Overlapping pollen cannot be analyzed.",class:"col_green customtooltip",href:"#!",onClick:t[1]||(t[1]=e=>e.preventDefault())},Se)])]),(0,n._)("li",null,[Ue,(0,n._)("p",null,[He,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Daylight works best.",class:"col_green customtooltip",href:"#!",onClick:t[2]||(t[2]=e=>e.preventDefault())},Oe)])]),(0,n._)("li",null,[Re,(0,n._)("p",null,[Ee,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Consider daylight.",class:"col_green customtooltip",href:"#!",onClick:t[3]||(t[3]=e=>e.preventDefault())},Ve)])])])])),_:1}),(0,n._)("div",Le,[Ne,(0,n._)("div",Ze,[(0,n._)("label",qe,[Ye,(0,n._)("input",Ge,null,512)])])]),Je])),_:1})])),_:1})}var Xe={name:"MyCard3",data(){return{date:null}},components:{MDBCard:N.MDBCard,MDBCardBody:N.MDBCardBody,MDBCardTitle:N.MDBCardTitle,MDBCardText:N.MDBCardText},mounted(){const e=this.$refs.fileupload;e.onclick=function(){this.value=null};const t=this.$router;e.addEventListener("change",(function(){const e=new FileReader;e.addEventListener("load",(function(){const a=e.result;t.push({name:"main",params:{uploaded_image:a}})})),e.readAsDataURL(this.files[0])}))},methods:{}};const Qe=(0,p.Z)(Xe,[["render",Ke],["__scopeId","data-v-768cbe3a"]]);var et=Qe,tt={data(){return{cardId:0,showCards:[!0,!1,!1],prevDisabled:!0,nextDisabled:!1}},methods:{nextCard(){this.showCards[this.cardId]=!1,this.cardId++,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1)},previousCard(){this.showCards[this.cardId]=!1,this.cardId--,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1)}},name:"HomeView",components:{MyFooter:K,MyCard1:ie,MyCard2:Ce,MyCard3:et,MDBCol:N.MDBCol,MDBRow:N.MDBRow,MDBContainer:N.MDBContainer}};const at=(0,p.Z)(tt,[["render",_]]);var it=at;const nt=e=>((0,n.dD)("data-v-2b23d9e2"),e=e(),(0,n.Cn)(),e),st={style:{height:"100%",width:"100%"}},lt={key:0,style:{overflow:"hidden"},ref:"errorcontainer",class:"error-container parent"},ot={class:"error-close"},rt=nt((()=>(0,n._)("i",{class:"fa fa-times fa-2x"},null,-1))),dt=[rt],ct={class:"error-content"},ut={key:1,ref:"maincamcontainer",style:{height:"100%",display:"flex"}},pt={key:2,ref:"mainfilecontainer",style:{height:"100%",display:"flex"}},ht={ref:"maindatacontainer",style:{display:"none"}};function mt(e,t,a,i,s,l){const o=(0,n.up)("MainCam"),r=(0,n.up)("MainFile"),d=(0,n.up)("MainData");return(0,n.wg)(),(0,n.iD)("div",st,[s.errorMsg?((0,n.wg)(),(0,n.iD)("div",lt,[(0,n._)("div",ot,[(0,n._)("a",{style:{color:"#fbfceb"},href:"#!",onClick:t[0]||(t[0]=e=>{e.preventDefault(),this.errorMsg=null}),role:"button"},dt)]),(0,n._)("div",ct,(0,ne.zw)(s.errorMsg),1)],512)):(0,n.kq)("",!0),e.$route.params?.uploaded_image?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",ut,[(0,n.Wm)(o,{onError:t[1]||(t[1]=e=>l.onError(e)),onPhotoAnalyzed:t[2]||(t[2]=e=>l.onPhotoAnalyzed(e))})],512)),e.$route.params?.uploaded_image?((0,n.wg)(),(0,n.iD)("div",pt,[(0,n.Wm)(r,{onError:t[3]||(t[3]=e=>l.onError(e)),onPhotoAnalyzed:t[4]||(t[4]=e=>l.onPhotoAnalyzed(e))})],512)):(0,n.kq)("",!0),(0,n._)("div",ht,[(0,n.Wm)(d,{onRedo:t[5]||(t[5]=e=>l.onRedo()),onError:t[6]||(t[6]=e=>l.onError(e)),pollenData:s.pollenData},null,8,["pollenData"])],512)])}const vt=e=>((0,n.dD)("data-v-90b83c92"),e=e(),(0,n.Cn)(),e),ft={class:"wrapper align-items-center justify-content-center",style:{display:"flex"}},gt={ref:"videocanvas",class:"video-canvas"},bt={ref:"particlediv",class:"particle-div"},yt={class:"video",ref:"videoviewer"},Dt={class:"photo-button-container d-block text-center my-3"},wt=["disabled"],_t=vt((()=>(0,n._)("i",{class:"fas fa-camera",style:{}},null,-1))),xt=[_t];function Ct(e,t,a,i,s,l){return(0,n.wg)(),(0,n.iD)("div",ft,[(0,n._)("canvas",gt,null,512),(0,n._)("div",bt,null,512),(0,n._)("video",yt,null,512),(0,n._)("div",Dt,[(0,n._)("button",{class:"button photo-button",disabled:s.camButtonDisabled,onClick:t[0]||(t[0]=(...e)=>l.TakePhoto&&l.TakePhoto(...e))},xt,8,wt)])])}a(1703);var kt=a(8905),Mt={components:{},data(){return{mediaStream:null,data:null,camButtonDisabled:!1}},props:{},methods:{async StartRecording(){await navigator.mediaDevices.enumerateDevices().catch((e=>{this.$emit("error","Could not retrieve cameras. ("+e+")")}));let e=this.$refs.videoviewer,t=this.$refs.videocanvas,a=this.$refs.particlediv;this.camButtonDisabled=!1,t.style.display="none",a.display="none",e.style.display="block",this.mediaStream=navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:2048},height:{ideal:1536}}}).catch((e=>{this.$emit("error","Could not start camera. ("+e+")")})).then((t=>(this.mediaStream=t,e.srcObject=this.mediaStream,e.play().catch((e=>{this.$emit("error","Could not start playing camera stream. ("+e+")")})))))},async TakePhoto(){let e=this.$refs.videoviewer,t=this.$refs.videocanvas,a=this.$refs.particlediv;this.camButtonDisabled=!0;const i=t.getContext("2d");i.canvas.width=e.videoWidth,i.canvas.height=e.videoHeight;let n=e.videoWidth,s=e.videoHeight;i.drawImage(e,0,0,n,s);let l=e.clientWidth,o=t.toDataURL();console.log("retireved img:",this.$route.params);let r=s/n;e.style.display="none",t.style.display="block",t.style.width="100%",a.style.display="block",a.innerHTML="",a.style.width=l+"px",a.style.height=l*r+"px";var d={particleColor:"#ffa820",background:o,interactive:!0,speed:"fast",density:"high"};new kt.ParticleNetwork(a,d);const c={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({img:o})},u=this.mediaStream?.getVideoTracks();u?.forEach((e=>{e.stop()})),fetch("https://chicks.ddnss.org:5000/find_pollen",c).then((e=>{let t=e.json();return a.innerHTML="",a.style.display="none",t})).then((e=>{if(console.log("emitted",e),!e){const e="Could contact AI-server.";throw console.log(e),new Error(e)}e["dataURL"]=o,e["imgWidth"]=n,e["imgHeight"]=s,this.$emit("photoAnalyzed",e)})).catch((e=>{this.$emit("error","Could not retrieve pollen analysis. ("+e+")"),a.innerHTML="",a.style.display="none",this.StartRecording()}))}},async mounted(){await this.StartRecording().catch((e=>{this.$emit("error","Could not start camera. ("+e+")")}))}};const Bt=(0,p.Z)(Mt,[["render",Ct],["__scopeId","data-v-90b83c92"]]);var Wt=Bt,Tt=a.p+"img/pollen_marker.b21e44ff.svg";const Pt={ref:"datawrapper"},It=(0,n._)("img",{class:"mx-auto my-4",style:{"max-width":"500px"},src:g},null,-1),$t={key:0},zt=(0,n.Uk)("Pollen Detections"),At={style:{"margin-bottom":"2em"}},St=(0,n._)("li",null,[(0,n._)("span",null,[(0,n.Uk)("Pollen are highlighted below with "),(0,n._)("img",{src:Tt,style:{width:"24px","vertical-align":"middle"}}),(0,n.Uk)(". The left arc shows the extracted primary pollen color while the right arc the secondary color.")])],-1),Ut=(0,n._)("li",null,"Use the zoom function to check on the detections.",-1),Ht={id:"annotationimgcontainer",ref:"annotationimgcontainer"},jt={ref:"annotationimg",id:"annotationimg",style:{display:"none"}},Ot={style:{display:"none"},ref:"annotationcanvas",class:"annotation-canvas"},Rt={key:0},Et=(0,n.Uk)("Pollen Clusters"),Ft={style:{"margin-bottom":"2em"}},Vt=(0,n._)("li",null,"For all detected pollen the following dendrogram shows their attributed clusters in different colors. Connections colored in light gray show outliers (that is clusters of size 1).",-1),Lt=["src"],Nt={key:0},Zt=(0,n._)("div",{class:"cluster-img-wrapper"},[(0,n._)("div",{class:"cluster-img"},"primary pollen colors per cluster"),(0,n._)("div",{class:"cluster-img"},"secondary pollen colors per cluster")],-1),qt={key:0},Yt=(0,n._)("div",{style:{"text-align":"center","margin-bottom":"-50px",color:"#888"}},"outliers",-1),Gt=(0,n._)("hr",{class:"outliers"},null,-1),Jt=[Yt,Gt],Kt={style:{color:"#888"}},Xt=["src"],Qt=["src"];function ea(e,t,a,s,l,o){const r=(0,n.up)("MDBRow"),d=(0,n.up)("MDBCol"),c=(0,n.up)("MDBCardTitle"),u=(0,n.up)("MDBCardText"),p=(0,n.up)("MDBCardBody"),h=(0,n.up)("MDBCard"),m=(0,n.up)("vue3-slider"),v=(0,n.up)("MDBContainer"),f=(0,n.up)("CamFooter");return(0,n.wg)(),(0,n.iD)("div",Pt,[(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{md:"12",class:"mx-auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[It])),_:1})])),_:1})])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i.uT,{appear:"",name:"bounce",onAfterEnter:t[0]||(t[0]=e=>o.showAnnotations(a.pollenData))},{default:(0,n.w5)((()=>[l.showCards[0]?((0,n.wg)(),(0,n.iD)("p",$t,[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[zt])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n._)("ul",At,[(0,n._)("li",null,(0,ne.zw)(a.pollenData?.pollen?.n_pollen)+" pollen detected.",1),St,Ut]),(0,n._)("div",Ht,null,512),(0,n._)("img",jt,null,512),(0,n._)("canvas",Ot,null,512)])),_:1})])),_:1})])),_:1})])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{appear:"",name:"bounce"},{default:(0,n.w5)((()=>[l.showCards[1]?((0,n.wg)(),(0,n.iD)("p",Rt,[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[Et])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n._)("ul",Ft,[(0,n._)("li",null,(0,ne.zw)(a.pollenData?.pollen?.clusters?.n_clusters_predicted)+" clusters and "+(0,ne.zw)(a.pollenData?.pollen?.clusters?.n_outliers_predicted)+" outliers detected.",1),Vt]),(0,n._)("img",{src:a.pollenData?.pollen?.clusters?.dendrogram,style:{width:"100%","max-width":"600px"}},null,8,Lt)])),_:1})])),_:1})])),_:1})])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{appear:"",name:"bounce"},{default:(0,n.w5)((()=>[l.showCards[2]?((0,n.wg)(),(0,n.iD)("p",Nt,[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{trackColor:"#ffa820",color:"#97be11",tooltip:!0,modelValue:l.nCluster,"onUpdate:modelValue":t[1]||(t[1]=e=>l.nCluster=e),handleScale:3,min:1,alwaysShowHandle:!0,sticky:!0,max:19},null,8,["modelValue"]),(0,n._)("div",null,[Zt,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.pollenData?.pollen?.clusters?.cluster_imgs[l.nCluster],((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"cluster-img-wrapper",key:e},[t>1&&a.pollenData?.pollen?.clusters?.cluster_imgs[l.nCluster][t-1].cluster_size>1&&1==e.cluster_size?((0,n.wg)(),(0,n.iD)("div",qt,Jt)):(0,n.kq)("",!0),(0,n._)("div",Kt,"cluster "+(0,ne.zw)(t+1)+" (n="+(0,ne.zw)(e.cluster_size)+")",1),(0,n._)("img",{src:e.cluster_img_primary,class:"cluster-img"},null,8,Xt),(0,n._)("img",{src:e.cluster_img_secondary,class:"cluster-img"},null,8,Qt)])))),128))])])),_:1})])),_:1})])),_:1})])):(0,n.kq)("",!0)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(f,{onNextCard:t[2]||(t[2]=e=>o.nextCard()),onPreviousCard:t[3]||(t[3]=e=>o.previousCard()),onRedo:t[4]||(t[4]=t=>e.$emit("redo")),prevDisabled:l.prevDisabled,nextDisabled:l.nextDisabled,redoDisabled:!1},null,8,["prevDisabled","nextDisabled"])],512)}const ta={style:{color:"white",position:"fixed",bottom:"0",width:"100%"},class:"d-block d-md-none"},aa={class:"text-center p-1",style:{"background-image":"linear-gradient(to top,rgba(151, 190, 17, 1),rgba(151, 190, 17, 0.3),rgba(251,252,235, 0))"}},ia={key:0,class:"text-center bgcol_green",style:{width:"100%","min-height":"1em"}},na={style:{width:"100%","padding-bottom":"100px"},class:"d-none d-md-block text-center"},sa={style:{color:"white",position:"fixed",bottom:"0",width:"100%"}},la={key:0,class:"text-center bgcol_dark text-smaller",style:{width:"100%","min-height":"1em"}};function oa(e,t,a,i,s,l){const o=(0,n.up)("CamControls");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",ta,[(0,n._)("div",aa,[(0,n.Wm)(o,{onNextCard:t[0]||(t[0]=t=>e.$emit("nextCard")),onPreviousCard:t[1]||(t[1]=t=>e.$emit("previousCard")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled,onRedo:t[2]||(t[2]=t=>e.$emit("redo"))},null,8,["nextDisabled","prevDisabled"])]),((0,n.wg)(),(0,n.iD)("div",ia," © 2022 Pollenyzer "))]),(0,n._)("div",na,[(0,n.Wm)(o,{onNextCard:t[3]||(t[3]=t=>e.$emit("nextCard")),onPreviousCard:t[4]||(t[4]=t=>e.$emit("previousCard")),onRedo:t[5]||(t[5]=t=>e.$emit("redo")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled,redoDisabled:a.redoDisabled},null,8,["nextDisabled","prevDisabled","redoDisabled"]),(0,n._)("div",sa,[((0,n.wg)(),(0,n.iD)("div",la," © 2022 Pollenyzer "))])])],64)}const ra={class:"d-block d-md-none"},da={class:"mx-2"},ca={class:"mx-2"},ua={class:"mx-2"},pa={class:"d-none d-md-block"},ha={class:"m-5"},ma={class:"m-5"},va={class:"m-5"};function fa(e,t,a,i,s,l){const o=(0,n.up)("MDBIcon"),r=(0,n.up)("MDBBtn");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",ra,[(0,n._)("span",da,[(0,n.Wm)(r,{onClick:t[0]||(t[0]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",ca,[(0,n.Wm)(r,{onClick:t[1]||(t[1]=t=>e.$emit("redo")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.redoDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"redo"})])),_:1},8,["disabled"])]),(0,n._)("span",ua,[(0,n.Wm)(r,{onClick:t[2]||(t[2]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-right"})])),_:1},8,["disabled"])])]),(0,n._)("div",pa,[(0,n._)("span",ha,[(0,n.Wm)(r,{onClick:t[3]||(t[3]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",ma,[(0,n.Wm)(r,{onClick:t[4]||(t[4]=t=>e.$emit("redo")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.redoDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"redo"})])),_:1},8,["disabled"])]),(0,n._)("span",va,[(0,n.Wm)(r,{onClick:t[5]||(t[5]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-right"})])),_:1},8,["disabled"])])])])}var ga={data(){return{}},props:{prevDisabled:Boolean,nextDisabled:Boolean,redoDisabled:Boolean},name:"CamControls",components:{MDBBtn:N.MDBBtn,MDBIcon:N.MDBIcon}};const ba=(0,p.Z)(ga,[["render",fa]]);var ya=ba,Da={name:"CamFooter",components:{CamControls:ya},props:{prevDisabled:Boolean,nextDisabled:Boolean,redoDisabled:Boolean},emits:["nextCard","previousCard","redo"]};const wa=(0,p.Z)(Da,[["render",oa],["__scopeId","data-v-6e224490"]]);var _a=wa,xa=a(9096),Ca={components:{MDBCol:N.MDBCol,MDBRow:N.MDBRow,MDBContainer:N.MDBContainer,MDBCard:N.MDBCard,MDBCardBody:N.MDBCardBody,MDBCardTitle:N.MDBCardTitle,MDBCardText:N.MDBCardText,CamFooter:_a,"vue3-slider":De()},props:{pollenData:Object},data(){return{showCards:[!0,!1,!1],cardId:0,nCluster:1,prevDisabled:!0,nextDisabled:!1}},mounted(){},watch:{pollenData(e,t){this.showAnnotations(e)}},methods:{showAnnotations(e){if(e){this.nCluster=this.pollenData.pollen.clusters.n_clusters_predicted+this.pollenData.pollen.clusters.n_outliers_predicted;let a=this.$refs.annotationcanvas,i=this.$refs.annotationimg;const n=a.getContext("2d");n.canvas.width=e.pollen.img_width,n.canvas.height=e.pollen.img_height;var t=new Image;t.onload=function(){n.drawImage(t,0,0,e.pollen.img_width,e.pollen.img_height),n.beginPath(),n.lineWidth=10,n.strokeStyle="#ffa820",n.rect(e.pollen.annotations.rect.upperleft_x,e.pollen.annotations.rect.upperleft_y,e.pollen.annotations.rect.width,e.pollen.annotations.rect.height),n.stroke();const s=e.pollen.dimension/2;for(let t=0;t<e.pollen.annotations.coords.length;t++){let a=e.pollen.annotations.coords[t],i=e.pollen.annotations.str_colors_primary[t],l=e.pollen.annotations.str_colors_secondary[t];const o=a.x,r=a.y,d=e.pollen.dimension;n.beginPath(),n.arc(o,r,d,Math.PI/2,3*Math.PI/2,!1),n.lineWidth=s,n.strokeStyle=i,n.stroke(),n.beginPath(),n.arc(o,r,d,Math.PI/2,3*Math.PI/2,!0),n.lineWidth=s,n.strokeStyle=l,n.stroke(),n.beginPath(),n.arc(o,r,d-s/2,0,2*Math.PI,!1),n.lineWidth=Math.max(1,s/2),n.strokeStyle="#dc1e0b",n.stroke()}i.src=a.toDataURL(),new xa.Z("#annotationimgcontainer",{src:i,maxRatio:4,slider:!1,zoomer:!0})},t.src=e.dataURL}},nextCard(){this.showCards[this.cardId]=!1,this.cardId++,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1)},previousCard(){this.showCards[this.cardId]=!1,this.cardId--,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1)}}};const ka=(0,p.Z)(Ca,[["render",ea]]);var Ma=ka;const Ba=e=>((0,n.dD)("data-v-25741bad"),e=e(),(0,n.Cn)(),e),Wa={class:"wrapper align-items-center justify-content-center",style:{display:"flex"}},Ta={ref:"particledivfile",class:"particle-div"},Pa=["src"],Ia={class:"photo-button-container d-block text-center my-3"},$a=["disabled"],za=Ba((()=>(0,n._)("i",{class:"fas fa-hat-wizard",style:{}},null,-1))),Aa=[za];function Sa(e,t,a,i,s,l){return(0,n.wg)(),(0,n.iD)("div",Wa,[(0,n._)("div",Ta,null,512),(0,n._)("img",{class:"image",ref:"imgviewer",src:this.$route.params.uploaded_image},null,8,Pa),(0,n._)("div",Ia,[(0,n._)("button",{class:"button photo-button",disabled:s.camButtonDisabled,onClick:t[0]||(t[0]=(...e)=>l.analyzeUpload&&l.analyzeUpload(...e))},Aa,8,$a)])])}var Ua={components:{},data(){return{data:null,camButtonDisabled:!1}},props:{},methods:{async analyzeUpload(){let e=this.$refs.imgviewer,t=e.width,a=e.height,i=this.$refs.particledivfile,n=this.$route.params.uploaded_image;this.camButtonDisabled=!0,i.style.display="block",i.innerHTML="",i.style.width="100%";let s=a/t;i.style.display="block",i.innerHTML="",i.style.width=e.clientWidth+"px",i.style.height=e.clientWidth*s+"px";var l={particleColor:"#ffa820",background:n,interactive:!0,speed:"fast",density:"high"};new kt.ParticleNetwork(i,l);const o={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({img:n})};fetch("https://chicks.ddnss.org:5000/find_pollen",o).then((e=>{let t=e.json();return i.innerHTML="",i.style.display="none",t})).then((e=>{if(console.log("emitted",e),!e){const e="Could contact AI-server.";throw console.log(e),new Error(e)}e["dataURL"]=n,e["imgWidth"]=t,e["imgHeight"]=a,this.camButtonDisabled=!1,this.$emit("photoAnalyzed",e)})).catch((e=>{this.$emit("error","Could not retrieve pollen analysis. ("+e+")"),i.innerHTML="",i.style.display="none",router.push({name:"main",params:{uploaded_image:uploaded_image}})}))}},async mounted(){}};const Ha=(0,p.Z)(Ua,[["render",Sa],["__scopeId","data-v-25741bad"]]);var ja=Ha,Oa={components:{MainCam:Wt,MainData:Ma,MainFile:ja},mounted(){},setup(){},data(){return{pollenData:void 0,errorMsg:null,errorZIndex:10}},methods:{onRedo(){this.$router.push("/")},onError(e){console.log("retrieved error",e),this.errorMsg=e,setTimeout((()=>{this.$refs.errorcontainer.style.zIndex=++this.errorZIndex}),200)},onPhotoAnalyzed(e){console.log("data retrieved");try{this.$refs.maincamcontainer.style.display="none"}catch{}try{this.$refs.mainfilecontainer.style.display="none"}catch{}this.$refs.maindatacontainer.style.display="block",this.pollenData=e}}};const Ra=(0,p.Z)(Oa,[["render",mt],["__scopeId","data-v-2b23d9e2"]]);var Ea=Ra;const Fa=[{path:"/",name:"home",component:it},{path:"/main",name:"main",component:Ea}],Va=(0,f.p7)({history:(0,f.r5)(),routes:Fa});var La=Va;(0,i.ri)(m).use(La).mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,s){if(!i){var l=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],s=e[c][2];for(var o=!0,r=0;r<i.length;r++)(!1&s||l>=s)&&Object.keys(a.O).every((function(e){return a.O[e](i[r])}))?i.splice(r--,1):(o=!1,s<l&&(l=s));if(o){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,l=i[0],o=i[1],r=i[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(r)var c=r(a)}for(t&&t(i);d<l.length;d++)s=l[d],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},i=self["webpackChunkpollenyzer"]=self["webpackChunkpollenyzer"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(9978)}));i=a.O(i)})();
//# sourceMappingURL=app.6556d866.js.map