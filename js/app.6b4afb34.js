(function(){var e={8905:function(e){var t=function(e){this.canvas=e.canvas,this.ctx=e.ctx,this.particleColor=e.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*e.options.velocity,y:(Math.random()-.5)*e.options.velocity}};t.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},t.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle=this.particleColor,this.ctx.globalAlpha=.7,this.ctx.arc(this.x,this.y,1.5,0,2*Math.PI),this.ctx.fill()};var a=function(e,t){this.canvasDiv=e,this.canvasDiv.size={width:this.canvasDiv.offsetWidth,height:this.canvasDiv.offsetHeight},t=void 0!==t?t:{},this.options={particleColor:void 0!==t.particleColor?t.particleColor:"#fff",background:void 0!==t.background?t.background:"#1a252f",interactive:void 0===t.interactive||t.interactive,velocity:this.setVelocity(t.speed),density:this.setDensity(t.density)},this.init()};a.prototype.init=function(){if(this.bgDiv=document.createElement("div"),this.canvasDiv.appendChild(this.bgDiv),this.setStyles(this.bgDiv,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background)&&this.setStyles(this.bgDiv,{background:this.options.background}),!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.canvasDiv.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.canvasDiv.size.width,this.canvas.height=this.canvasDiv.size.height,this.setStyles(this.canvasDiv,{position:"relative"}),this.setStyles(this.canvas,{"z-index":"20",position:"relative"}),window.addEventListener("resize",function(){if(this.canvasDiv.offsetWidth===this.canvasDiv.size.width&&this.canvasDiv.offsetHeight===this.canvasDiv.size.height)return!1;this.canvas.width=this.canvasDiv.size.width=this.canvasDiv.offsetWidth,this.canvas.height=this.canvasDiv.size.height=this.canvasDiv.offsetHeight,clearTimeout(this.resetTimer),this.resetTimer=setTimeout(function(){this.particles=[];for(var e=0;e<this.canvas.width*this.canvas.height/this.options.density;e++)this.particles.push(new t(this));this.options.interactive&&this.particles.push(this.mouseParticle),requestAnimationFrame(this.update.bind(this))}.bind(this),500)}.bind(this)),this.particles=[];for(var e=0;e<this.canvas.width*this.canvas.height/this.options.density;e++)this.particles.push(new t(this));this.options.interactive&&(this.mouseParticle=new t(this),this.mouseParticle.velocity={x:0,y:0},this.particles.push(this.mouseParticle),this.canvas.addEventListener("mousemove",function(e){this.mouseParticle.x=e.clientX-this.canvas.offsetLeft,this.mouseParticle.y=e.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(){this.mouseParticle.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.mouseParticle=new t(this),this.mouseParticle.velocity={x:0,y:0},this.particles.push(this.mouseParticle)}.bind(this))),requestAnimationFrame(this.update.bind(this))},a.prototype.update=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalAlpha=1;for(var e=0;e<this.particles.length;e++){this.particles[e].update(),this.particles[e].draw();for(var t=this.particles.length-1;t>e;t--){var a=Math.sqrt(Math.pow(this.particles[e].x-this.particles[t].x,2)+Math.pow(this.particles[e].y-this.particles[t].y,2));a>120||(this.ctx.beginPath(),this.ctx.strokeStyle=this.options.particleColor,this.ctx.globalAlpha=(120-a)/120,this.ctx.lineWidth=2.8,this.ctx.moveTo(this.particles[e].x,this.particles[e].y),this.ctx.lineTo(this.particles[t].x,this.particles[t].y),this.ctx.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},a.prototype.setVelocity=function(e){return"fast"===e?3.5:"slow"===e?1:"none"===e?0:.66},a.prototype.setDensity=function(e){return"high"===e?5e3:"low"===e?2e4:isNaN(parseInt(e,10))?1e4:e},a.prototype.setStyles=function(e,t){for(var a in t)e.style[a]=t[a]},e.exports={ParticleNetwork:a}},1051:function(e,t,a){"use strict";var i=a(9242),n=a(3396);function s(e,t,a,i,s,o){const l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(l)}var o={name:"App",components:{}},l=a(89);const r=(0,l.Z)(o,[["render",s]]);var d=r,c=a(5431);(0,c.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var h=a(2483),u=a.p+"img/pollenyzer_logo.8c6997e9.svg";const p=(0,n._)("img",{class:"mx-auto my-4",style:{"max-width":"500px"},alt:"Vue logo",src:u},null,-1),m={key:0},v={key:0},f={key:0};function b(e,t,a,s,o,l){const r=(0,n.up)("MDBRow"),d=(0,n.up)("MDBCol"),c=(0,n.up)("MyCard1"),h=(0,n.up)("MyCard2"),u=(0,n.up)("MyCard3"),b=(0,n.up)("MDBContainer"),g=(0,n.up)("MyFooter");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{md:"12",class:"mx-auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[p])),_:1}),(0,n.Wm)(r)])),_:1})])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i.uT,{appear:"",name:"bounce"},{default:(0,n.w5)((()=>[o.showCards[0]?((0,n.wg)(),(0,n.iD)("p",m,[(0,n.Wm)(c)])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{name:"bounce"},{default:(0,n.w5)((()=>[o.showCards[1]?((0,n.wg)(),(0,n.iD)("p",v,[(0,n.Wm)(h)])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{name:"bounce"},{default:(0,n.w5)((()=>[o.showCards[2]?((0,n.wg)(),(0,n.iD)("p",f,[(0,n.Wm)(u)])):(0,n.kq)("",!0)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(g,{onNextCard:t[0]||(t[0]=e=>l.nextCard()),onPreviousCard:t[1]||(t[1]=e=>l.previousCard()),prevDisabled:o.prevDisabled,nextDisabled:o.nextDisabled},null,8,["prevDisabled","nextDisabled"])])}const g=e=>((0,n.dD)("data-v-8d9f9320"),e=e(),(0,n.Cn)(),e),D={style:{color:"white",position:"fixed",bottom:"0",width:"100%"},class:"d-block d-md-none"},y={class:"text-center p-1",style:{"background-image":"linear-gradient(to top,rgba(151, 190, 17, 1),rgba(151, 190, 17, 0.3),rgba(251,252,235, 0))"}},w={key:0,class:"text-center bgcol_green",style:{width:"100%","min-height":"1em"}},C=(0,n.Uk)(" © 2022 Pollenyzer "),x=g((()=>(0,n._)("span",{style:{color:"rgba(255, 255, 255, 0.3)"}},"v0.2",-1))),_=[C,x],k={style:{width:"100%"},class:"d-none d-md-block text-center"},M=g((()=>(0,n._)("div",{style:{height:"50px"}},null,-1))),B={style:{color:"white",position:"fixed",bottom:"0",width:"100%"}},W={key:0,class:"text-center bgcol_dark text-smaller",style:{width:"100%","min-height":"1em"}},T=(0,n.Uk)(" © 2022 Pollenyzer "),I=g((()=>(0,n._)("span",{style:{color:"rgba(255, 255, 255, 0.4)"}},"v0.2",-1))),P=[T,I];function $(e,t,a,i,s,o){const l=(0,n.up)("MyCardControls");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",D,[(0,n._)("div",y,[(0,n.Wm)(l,{onNextCard:t[0]||(t[0]=t=>e.$emit("nextCard")),onPreviousCard:t[1]||(t[1]=t=>e.$emit("previousCard")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled},null,8,["nextDisabled","prevDisabled"])]),((0,n.wg)(),(0,n.iD)("div",w,_))]),(0,n._)("div",k,[(0,n.Wm)(l,{onNextCard:t[2]||(t[2]=t=>e.$emit("nextCard")),onPreviousCard:t[3]||(t[3]=t=>e.$emit("previousCard")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled},null,8,["nextDisabled","prevDisabled"]),M,(0,n._)("div",B,[((0,n.wg)(),(0,n.iD)("div",W,P))])])],64)}const A={class:"d-block d-md-none"},S={class:"mx-2"},z={class:"mx-2"},H={class:"d-none d-md-block"},j={class:"m-5"},E={class:"m-5"};function O(e,t,a,i,s,o){const l=(0,n.up)("MDBIcon"),r=(0,n.up)("MDBBtn");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",A,[(0,n._)("span",S,[(0,n.Wm)(r,{onClick:t[0]||(t[0]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",z,[(0,n.Wm)(r,{onClick:t[1]||(t[1]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{icon:"angle-right"})])),_:1},8,["disabled"])])]),(0,n._)("div",H,[(0,n._)("span",j,[(0,n.Wm)(r,{onClick:t[2]||(t[2]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",E,[(0,n.Wm)(r,{onClick:t[3]||(t[3]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{icon:"angle-right"})])),_:1},8,["disabled"])])])])}var F=a(6818),V={data(){return{}},props:{prevDisabled:Boolean,nextDisabled:Boolean},name:"CamControls",components:{MDBBtn:F.MDBBtn,MDBIcon:F.MDBIcon}};const U=(0,l.Z)(V,[["render",O]]);var N=U,R={components:{MyCardControls:N},props:{prevDisabled:Boolean,nextDisabled:Boolean}};const L=(0,l.Z)(R,[["render",$],["__scopeId","data-v-8d9f9320"]]);var Z=L;const q=(0,n.Uk)("Analyze the content of your pollen traps!"),G=(0,n._)("ol",null,[(0,n._)("li",null,"Attach the pollen trap to the hive for a few days."),(0,n._)("li",null,"Harvest the pollen."),(0,n._)("li",null,"Photograph your catch."),(0,n._)("li",null,"(Opt. provide some additional information for scientists)."),(0,n._)("li",null,"Analyze your pollen!")],-1);function K(e,t,a,i,s,o){const l=(0,n.up)("MDBCardTitle"),r=(0,n.up)("MDBCardText"),d=(0,n.up)("MDBCardBody"),c=(0,n.up)("MDBCard");return(0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(l,null,{default:(0,n.w5)((()=>[q])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[G])),_:1})])),_:1})])),_:1})}var Y={name:"MyCard1",components:{MDBCard:F.MDBCard,MDBCardBody:F.MDBCardBody,MDBCardTitle:F.MDBCardTitle,MDBCardText:F.MDBCardText}};const X=(0,l.Z)(Y,[["render",K]]);var J=X,Q=a(7139);const ee=(0,n.Uk)("Support science!"),te=(0,n.Uk)(" You can skip this, however if you feel like saving the bees, please give us additional information about your hive. "),ae=(0,n._)("hr",null,null,-1),ie=(0,n._)("label",{for:"country",class:"form-label"},"Hive's location",-1),ne=(0,n._)("span",{class:"input-group-text border-0",id:"search-addon"},[(0,n._)("i",{class:"fas fa-map-marker-alt"})],-1),se=(0,n._)("span",{class:"input-group-text border-0",id:"search-addon"},[(0,n._)("i",{class:"fas fa-map-marker-alt"})],-1),oe=(0,n._)("hr",null,null,-1),le={for:"duration",class:"form-label"},re=(0,n.Uk)("No. of days the trap was mounted: "),de=(0,n._)("hr",null,null,-1),ce={for:"datepicker",class:"form-label"},he={style:{"text-align":"center",width:"100%"}};function ue(e,t,a,i,s,o){const l=(0,n.up)("MDBCardTitle"),r=(0,n.up)("MDBCardText"),d=(0,n.up)("MDBInput"),c=(0,n.up)("vue3-slider"),h=(0,n.up)("Datepicker"),u=(0,n.up)("MDBCardBody"),p=(0,n.up)("MDBCard");return(0,n.wg)(),(0,n.j4)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"xtra-padding"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,null,{default:(0,n.w5)((()=>[ee])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[te])),_:1}),ae,ie,(0,n.Wm)(d,{id:"country",inputGroup:"",formOutline:!1,wrapperClass:"mb-3",class:"rounded",modelValue:i.input12,"onUpdate:modelValue":t[0]||(t[0]=e=>i.input12=e),"aria-describedby":"search-addon","aria-label":"country",placeholder:"Hive's country"},{prepend:(0,n.w5)((()=>[ne])),_:1},8,["modelValue"]),(0,n.Wm)(d,{inputGroup:"",formOutline:!1,type:"number",wrapperClass:"mb-3",class:"zipCode rounded",modelValue:i.input13,"onUpdate:modelValue":t[1]||(t[1]=e=>i.input13=e),"aria-describedby":"basic-addon4","aria-label":"zipcode",placeholder:"Hive's zip code"},{prepend:(0,n.w5)((()=>[se])),_:1},8,["modelValue"]),oe,(0,n._)("label",le,[re,(0,n._)("b",null,(0,Q.zw)(s.daysMounted),1)]),(0,n.Wm)(c,{id:"duration",trackColor:"#ffa820",color:"#97be11",modelValue:s.daysMounted,"onUpdate:modelValue":t[2]||(t[2]=e=>s.daysMounted=e),handleScale:2.1,min:1,alwaysShowHandle:!0,sticky:!0,max:7,disabled:!1},null,8,["modelValue","handleScale"]),de,(0,n._)("label",ce,"Date of harvest "+(0,Q.zw)(s.date),1),(0,n._)("div",he,[(0,n.Wm)(h,{id:"datepicker",selectText:"",timePicker:!1,inline:!0,modelValue:s.date,"onUpdate:modelValue":t[3]||(t[3]=e=>s.date=e)},null,8,["modelValue"])])])),_:1})])),_:1})}var pe=a(8524),me=a(1716),ve=a.n(me),fe=a(4870),be={name:"MyCard2",data(){return{date:null,daysMounted:3}},components:{MDBCard:F.MDBCard,MDBCardBody:F.MDBCardBody,MDBCardTitle:F.MDBCardTitle,MDBCardText:F.MDBCardText,MDBInput:F.MDBInput,Datepicker:pe.Z,"vue3-slider":ve()},setup(){const e=(0,fe.iH)(""),t=(0,fe.iH)(""),a=(0,fe.iH)(""),i=(0,fe.iH)(""),n=(0,fe.iH)(""),s=(0,fe.iH)("");return{input12:e,input13:t,input14:a,input15:i,input16:n,textarea2:s}}};const ge=(0,l.Z)(be,[["render",ue]]);var De=ge;const ye=e=>((0,n.dD)("data-v-6b3e753a"),e=e(),(0,n.Cn)(),e),we=(0,n.Uk)("Take or upload a photo!"),Ce={class:"fa-ul p-1 py-3"},xe=ye((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),_e=(0,n.Uk)(" Place Pollen on a white, folded piece of paper. "),ke=ye((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Me=[ke],Be=ye((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),We=(0,n.Uk)(" Pollen should not overlap. "),Te=ye((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Ie=[Te],Pe=ye((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),$e=(0,n.Uk)("Avoid casting any shadows. "),Ae=ye((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Se=[Ae],ze=ye((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),He=(0,n.Uk)("Avoid flashlight. "),je=ye((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Ee=[je],Oe=ye((()=>(0,n._)("div",{class:"row justify-content-evenly"},[(0,n._)("div",{class:"col-4 text-center"},[(0,n._)("a",{class:"btn btn-primary btn-lg btn-floating btn-dark",href:"/#main",role:"button"},[(0,n._)("i",{class:"fas fa-camera",style:{}})])]),(0,n._)("div",{class:"col-4 text-center"},[(0,n._)("a",{class:"btn btn-primary btn-lg btn-floating btn-dark disabled",href:"#!",role:"button"},[(0,n._)("i",{class:"fas fa-file-upload",style:{}})])])],-1))),Fe=ye((()=>(0,n._)("div",{class:"row justify-content-evenly"},[(0,n._)("div",{class:"col-4 text-center small p-1"},"Open Camera"),(0,n._)("div",{class:"col-4 text-center small p-1"},"Upload File")],-1)));function Ve(e,t,a,i,s,o){const l=(0,n.up)("MDBCardTitle"),r=(0,n.up)("MDBCardText"),d=(0,n.up)("MDBCardBody"),c=(0,n.up)("MDBCard");return(0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(l,null,{default:(0,n.w5)((()=>[we])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n._)("ul",Ce,[(0,n._)("li",null,[xe,(0,n._)("p",null,[_e,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Please use DIN A5 paper.",class:"col_green customtooltip","data-mdb-html":"true","data-mdb-placement":"bottom",href:"#!",onClick:t[0]||(t[0]=e=>e.preventDefault())},Me)])]),(0,n._)("li",null,[Be,(0,n._)("p",null,[We,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Overlapping pollen cannot be analyzed.",class:"col_green customtooltip",href:"#!",onClick:t[1]||(t[1]=e=>e.preventDefault())},Ie)])]),(0,n._)("li",null,[Pe,(0,n._)("p",null,[$e,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Daylight works best.",class:"col_green customtooltip",href:"#!",onClick:t[2]||(t[2]=e=>e.preventDefault())},Se)])]),(0,n._)("li",null,[ze,(0,n._)("p",null,[He,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Consider daylight.",class:"col_green customtooltip",href:"#!",onClick:t[3]||(t[3]=e=>e.preventDefault())},Ee)])])])])),_:1}),Oe,Fe])),_:1})])),_:1})}var Ue={name:"MyCard3",data(){return{date:null}},components:{MDBCard:F.MDBCard,MDBCardBody:F.MDBCardBody,MDBCardTitle:F.MDBCardTitle,MDBCardText:F.MDBCardText}};const Ne=(0,l.Z)(Ue,[["render",Ve],["__scopeId","data-v-6b3e753a"]]);var Re=Ne,Le={data(){return{cardId:0,showCards:[!0,!1,!1],prevDisabled:!0,nextDisabled:!1}},methods:{nextCard(){this.showCards[this.cardId]=!1,this.cardId++,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1)},previousCard(){this.showCards[this.cardId]=!1,this.cardId--,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1)}},name:"HomeView",components:{MyFooter:Z,MyCard1:J,MyCard2:De,MyCard3:Re,MDBCol:F.MDBCol,MDBRow:F.MDBRow,MDBContainer:F.MDBContainer}};const Ze=(0,l.Z)(Le,[["render",b]]);var qe=Ze;const Ge=e=>((0,n.dD)("data-v-ffe25060"),e=e(),(0,n.Cn)(),e),Ke={style:{height:"100%",width:"100%"}},Ye={key:0,style:{overflow:"hidden"},ref:"errorcontainer",class:"error-container parent"},Xe={class:"error-close"},Je=Ge((()=>(0,n._)("i",{class:"fa fa-times fa-2x"},null,-1))),Qe=[Je],et={class:"error-content"},tt={ref:"maincamcontainer",style:{height:"100%",display:"flex"}},at={ref:"maindatacontainer",style:{display:"none"}};function it(e,t,a,i,s,o){const l=(0,n.up)("MainCam"),r=(0,n.up)("MainData");return(0,n.wg)(),(0,n.iD)("div",Ke,[s.errorMsg?((0,n.wg)(),(0,n.iD)("div",Ye,[(0,n._)("div",Xe,[(0,n._)("a",{style:{color:"#fbfceb"},href:"#!",onClick:t[0]||(t[0]=e=>{e.preventDefault(),this.errorMsg=null}),role:"button"},Qe)]),(0,n._)("div",et,(0,Q.zw)(s.errorMsg),1)],512)):(0,n.kq)("",!0),(0,n._)("div",tt,[(0,n.Wm)(l,{onError:t[1]||(t[1]=e=>o.onError(e)),onPhotoTaken:t[2]||(t[2]=e=>o.onPhotoTaken(e))})],512),(0,n._)("div",at,[(0,n.Wm)(r,{onRedo:t[3]||(t[3]=e=>o.onRedo()),onError:t[4]||(t[4]=e=>o.onError(e)),pollenData:s.pollenData},null,8,["pollenData"])],512)])}const nt=e=>((0,n.dD)("data-v-7ecc0764"),e=e(),(0,n.Cn)(),e),st={class:"wrapper align-items-center justify-content-center",style:{display:"flex"}},ot={ref:"videocanvas",class:"video-canvas"},lt={ref:"particlediv",class:"particle-div"},rt={class:"video",ref:"videoviewer"},dt={class:"photo-button-container d-block text-center my-3"},ct=["disabled"],ht=nt((()=>(0,n._)("i",{class:"fas fa-camera",style:{}},null,-1))),ut=[ht];function pt(e,t,a,i,s,o){return(0,n.wg)(),(0,n.iD)("div",st,[(0,n._)("canvas",ot,null,512),(0,n._)("div",lt,null,512),(0,n._)("video",rt,null,512),(0,n._)("div",dt,[(0,n._)("button",{class:"button photo-button",disabled:s.camButtonDisabled,onClick:t[0]||(t[0]=(...e)=>o.TakePhoto&&o.TakePhoto(...e))},ut,8,ct)])])}a(1703);var mt=a(8905),vt={components:{},data(){return{mediaStream:null,data:null,camButtonDisabled:!1}},props:{},methods:{async StartRecording(){await navigator.mediaDevices.enumerateDevices().catch((e=>{this.$emit("error","Could not retrieve cameras. ("+e+")")}));let e=this.$refs.videoviewer,t=this.$refs.videocanvas,a=this.$refs.particlediv;this.camButtonDisabled=!1,t.style.display="none",a.display="none",e.style.display="block",this.mediaStream=navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:2048},height:{ideal:1536}}}).catch((e=>{this.$emit("error","Could not start camera. ("+e+")")})).then((t=>(this.mediaStream=t,e.srcObject=this.mediaStream,e.play().catch((e=>{this.$emit("error","Could not start playing camera stream. ("+e+")")})))))},async TakePhoto(){let e=this.$refs.videoviewer,t=this.$refs.videocanvas,a=this.$refs.particlediv;this.camButtonDisabled=!0;const i=t.getContext("2d");i.canvas.width=e.videoWidth,i.canvas.height=e.videoHeight;let n=e.videoWidth,s=e.videoHeight;i.drawImage(e,0,0,e.videoWidth,e.videoHeight);let o=e.clientWidth,l=t.toDataURL(),r=e.videoHeight/e.videoWidth;e.style.display="none",t.style.display="block",t.style.width="100%",a.style.display="block",a.innerHTML="",a.style.width=o+"px",a.style.height=o*r+"px";var d={particleColor:"#ffa820",background:l,interactive:!0,speed:"fast",density:"high"};new mt.ParticleNetwork(a,d);const c={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({img:l})},h=this.mediaStream.getVideoTracks();h.forEach((e=>{e.stop()})),fetch("https://chicks.ddnss.org:5000/find_pollen",c).then((e=>{let t=e.json();return a.innerHTML="",a.style.display="none",t})).then((e=>{if(console.log("emitted",e),!e){const e="Could contact AI-server.";throw console.log(e),new Error(e)}e["dataURL"]=l,e["imgWidth"]=n,e["imgHeight"]=s,this.$emit("photoTaken",e)})).catch((e=>{this.$emit("error","Could not retrieve pollen analysis. ("+e+")"),a.innerHTML="",a.style.display="none",this.StartRecording()}))}},async mounted(){await this.StartRecording().catch((e=>{this.$emit("error","Could not start camera. ("+e+")")}))}};const ft=(0,l.Z)(vt,[["render",pt],["__scopeId","data-v-7ecc0764"]]);var bt=ft;const gt={ref:"datawrapper"},Dt=(0,n._)("img",{class:"mx-auto my-4",style:{"max-width":"500px"},src:u},null,-1),yt={key:0},wt={ref:"annotationcanvas",class:"annotation-canvas"},Ct={key:0},xt={ref:"forcegraph",style:{width:"100%",height:"400px"}},_t={key:0},kt={ref:"barcanvascontainer"},Mt={ref:"barcanvas",class:"bar-canvas"},Bt={class:"m-3"};function Wt(e,t,a,s,o,l){const r=(0,n.up)("MDBRow"),d=(0,n.up)("MDBCol"),c=(0,n.up)("MDBCardText"),h=(0,n.up)("MDBCardBody"),u=(0,n.up)("MDBCard"),p=(0,n.up)("vue3-slider"),m=(0,n.up)("MDBContainer"),v=(0,n.up)("CamFooter");return(0,n.wg)(),(0,n.iD)("div",gt,[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{md:"12",class:"mx-auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[Dt])),_:1}),(0,n.Wm)(r)])),_:1})])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i.uT,{appear:"",name:"bounce"},{default:(0,n.w5)((()=>[o.showCards[0]?((0,n.wg)(),(0,n.iD)("p",yt,[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n._)("canvas",wt,null,512)])),_:1})])),_:1})])),_:1})])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{appear:"",name:"bounce",onAfterEnter:t[0]||(t[0]=e=>l.showForceGraph())},{default:(0,n.w5)((()=>[o.showCards[1]?((0,n.wg)(),(0,n.iD)("p",Ct,[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n._)("div",xt,null,512)])),_:1})])),_:1})])),_:1})])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{appear:"",name:"bounce",onAfterEnter:t[2]||(t[2]=e=>l.showClusters(this.nCluster))},{default:(0,n.w5)((()=>[o.showCards[2]?((0,n.wg)(),(0,n.iD)("p",_t,[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n._)("div",kt,[(0,n._)("canvas",Mt,null,512)],512),(0,n._)("div",Bt,[(0,n.Wm)(p,{trackColor:"#ffa820",color:"#97be11",tooltip:!0,onDragEnd:l.showClusters,modelValue:o.nCluster,"onUpdate:modelValue":t[1]||(t[1]=e=>o.nCluster=e),handleScale:3,min:1,alwaysShowHandle:!0,sticky:!0,max:o.maxClusters,disabled:o.inProgress},null,8,["onDragEnd","modelValue","max","disabled"])])])),_:1})])),_:1})])),_:1})])):(0,n.kq)("",!0)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(v,{onNextCard:t[3]||(t[3]=e=>l.nextCard()),onPreviousCard:t[4]||(t[4]=e=>l.previousCard()),onRedo:t[5]||(t[5]=t=>e.$emit("redo")),prevDisabled:o.prevDisabled,nextDisabled:o.nextDisabled,redoDisabled:e.redoDisabled},null,8,["prevDisabled","nextDisabled","redoDisabled"])],512)}const Tt={style:{color:"white",position:"fixed",bottom:"0",width:"100%"},class:"d-block d-md-none"},It={class:"text-center p-1",style:{"background-image":"linear-gradient(to top,rgba(151, 190, 17, 1),rgba(151, 190, 17, 0.3),rgba(251,252,235, 0))"}},Pt={key:0,class:"text-center bgcol_green",style:{width:"100%","min-height":"1em"}},$t={style:{width:"100%"},class:"d-none d-md-block text-center"},At={style:{color:"white",position:"fixed",bottom:"0",width:"100%"}},St={key:0,class:"text-center bgcol_dark text-smaller",style:{width:"100%","min-height":"1em"}};function zt(e,t,a,i,s,o){const l=(0,n.up)("CamControls");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",Tt,[(0,n._)("div",It,[(0,n.Wm)(l,{onNextCard:t[0]||(t[0]=t=>e.$emit("nextCard")),onPreviousCard:t[1]||(t[1]=t=>e.$emit("previousCard")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled,onRedo:t[2]||(t[2]=t=>e.$emit("redo"))},null,8,["nextDisabled","prevDisabled"])]),((0,n.wg)(),(0,n.iD)("div",Pt," © 2022 Pollenyzer "))]),(0,n._)("div",$t,[(0,n.Wm)(l,{onNextCard:t[3]||(t[3]=t=>e.$emit("nextCard")),onPreviousCard:t[4]||(t[4]=t=>e.$emit("previousCard")),onRedo:t[5]||(t[5]=t=>e.$emit("redo")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled,redoDisabled:a.redoDisabled},null,8,["nextDisabled","prevDisabled","redoDisabled"]),(0,n._)("div",At,[((0,n.wg)(),(0,n.iD)("div",St," © 2022 Pollenyzer "))])])],64)}const Ht={class:"d-block d-md-none"},jt={class:"mx-2"},Et={class:"mx-2"},Ot={class:"mx-2"},Ft={class:"d-none d-md-block"},Vt={class:"m-5"},Ut={class:"m-5"},Nt={class:"m-5"};function Rt(e,t,a,i,s,o){const l=(0,n.up)("MDBIcon"),r=(0,n.up)("MDBBtn");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",Ht,[(0,n._)("span",jt,[(0,n.Wm)(r,{onClick:t[0]||(t[0]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",Et,[(0,n.Wm)(r,{onClick:t[1]||(t[1]=t=>e.$emit("redo")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.redoDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{icon:"redo"})])),_:1},8,["disabled"])]),(0,n._)("span",Ot,[(0,n.Wm)(r,{onClick:t[2]||(t[2]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{icon:"angle-right"})])),_:1},8,["disabled"])])]),(0,n._)("div",Ft,[(0,n._)("span",Vt,[(0,n.Wm)(r,{onClick:t[3]||(t[3]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",Ut,[(0,n.Wm)(r,{onClick:t[4]||(t[4]=t=>e.$emit("redo")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.redoDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{icon:"redo"})])),_:1},8,["disabled"])]),(0,n._)("span",Nt,[(0,n.Wm)(r,{onClick:t[5]||(t[5]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{icon:"angle-right"})])),_:1},8,["disabled"])])])])}var Lt={data(){return{}},props:{prevDisabled:Boolean,nextDisabled:Boolean,redoDisabled:Boolean},name:"CamControls",components:{MDBBtn:F.MDBBtn,MDBIcon:F.MDBIcon}};const Zt=(0,l.Z)(Lt,[["render",Rt]]);var qt=Zt,Gt={name:"CamFooter",components:{CamControls:qt},props:{prevDisabled:Boolean,nextDisabled:Boolean,redoDisabled:Boolean}};const Kt=(0,l.Z)(Gt,[["render",zt],["__scopeId","data-v-21e8e934"]]);var Yt=Kt,Xt=a(2996),Jt=a(856),Qt=a(741);Qt.kL.register(Qt.qi,Qt.jn,Qt.ZL,Qt.od,Qt.vn,Qt.N0,Qt.jI,Qt.ST,Qt.tt,Qt.CV,Qt.Xi,Qt.ho,Qt.uw,Qt.f$,Qt.WV,Qt.l7,Qt.FB,Qt.RM,Qt.WY,Qt.Gu,Qt.De,Qt.Dx,Qt.u,Qt.DK);var ea={components:{MDBCol:F.MDBCol,MDBRow:F.MDBRow,MDBContainer:F.MDBContainer,MDBCard:F.MDBCard,MDBCardBody:F.MDBCardBody,MDBCardTitle:F.MDBCardTitle,MDBCardText:F.MDBCardText,CamFooter:Yt,"vue3-slider":ve()},props:{pollenData:Object},data(){return{showCards:[!0,!1,!1],cardId:0,maxClusters:2,nCluster:1,barChart:null,inProgress:!1,prevDisabled:!0,nextDisabled:!1}},mounted(){this.showAnnotations()},watch:{pollenData(e,t){this.showAnnotations(e)}},methods:{async showClusters(e){if(console.log("show clusters wir K=",e),this.inProgress)return;this.inProgress=!0;let t=this.pollenData.pollen.annotations.lab_colors,a=this.pollenData.pollen.annotations.rgb_colors;this.pollenData.pollen.annotations.str_colors;this.maxClusters=Math.min(20,a.length),console.log("clusters",t),console.log(t[0]);let i=(0,Jt.eM)({data:t});console.log(i);let n=[];console.log(i.clustersGivenK);let s=i.clustersGivenK[e].length;for(let d=0;d<s;d++)i.clustersGivenK[e][d].forEach((e=>{console.log("pollenID",e);let t=new Array(s).fill(null);t[d]=1,n.push({backgroundColor:"rgb("+a[e][0]+","+a[e][1]+","+a[e][2]+")",borderColor:"rgb("+a[e][0]+","+a[e][1]+","+a[e][2]+")",borderWidth:0,data:t})}));console.log(n);let o=this.$refs.barcanvas,l=this.$refs.barcanvascontainer;o.remove(),l.innerHTML="<canvas ref='barcanvas' id='barcanvas' class='bar-canvas'></canvas>",o=document.getElementById("barcanvas");const r=o.getContext("2d");this.barChart&&this.barChart.destroy(),this.barChart=new Qt.kL(r,{type:"bar",data:{labels:[...new Array(e).keys()].map((e=>"")),datasets:n},options:{indexAxis:"y",plugins:{tooltip:{enabled:!1},legend:{display:!1},title:{display:!0,text:a.length+" pollen in "+e+" clusters"}},scales:{xAxes:[{gridLines:{display:!1},type:"logarithmic"}],yAxes:[{gridLines:{display:!1}}],x:{stacked:!0},y:{stacked:!0}},responsive:!0}}),await setTimeout((()=>{this.inProgress=!1}),1200)},showForceGraph(){console.log(this.pollenData.pollen.force_graph);let e=this.$refs.forcegraph;const t=(0,Xt.Z)()(e).width(e.clientWidth).height(e.clientHeight).cooldownTicks(200).warmupTicks(10).graphData(this.pollenData.pollen.force_graph);t.d3Force("center",null),t.onEngineStop((()=>t.zoomToFit(400)))},showAnnotations(e){if(e){let a=this.$refs.annotationcanvas;const i=a.getContext("2d");i.canvas.width=e.imgWidth,i.canvas.height=e.imgHeight;var t=new Image;t.onload=function(){i.drawImage(t,0,0,e.imgWidth,e.imgHeight),i.beginPath(),i.lineWidth=10,i.strokeStyle="red",i.rect(e.pollen.annotations.rect.upperleft_x,e.pollen.annotations.rect.upperleft_y,e.pollen.annotations.rect.width,e.pollen.annotations.rect.height),i.stroke();for(let t=0;t<e.pollen.annotations.coords.length;t++){let a=e.pollen.annotations.coords[t],n=e.pollen.annotations.str_colors[t];const s=a.x,o=a.y,l=e.pollen.dimension;console.log(s,o,n),i.beginPath(),i.arc(s,o,l,0,2*Math.PI,!1),i.fillStyle=n,i.lineWidth=10,i.strokeStyle=n,i.stroke()}},t.src=e.dataURL}},nextCard(){this.showCards[this.cardId]=!1,this.cardId++,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1),0==this.cardId?this.showAnnotations(this.pollenData):this.cardId},previousCard(){this.showCards[this.cardId]=!1,this.cardId--,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1),0==this.cardId?this.showAnnotations(this.pollenData):1==this.cardId&&this.showForceGraph()}}};const ta=(0,l.Z)(ea,[["render",Wt]]);var aa=ta,ia={components:{MainCam:bt,MainData:aa},mounted(){},setup(){},data(){return{pollenData:void 0,errorMsg:null,errorZIndex:10}},methods:{onRedo(){this.$router.push("/")},onError(e){console.log("retrieved error",e),this.errorMsg=e,setTimeout((()=>{this.$refs.errorcontainer.style.zIndex=++this.errorZIndex}),200)},onPhotoTaken(e){console.log("data retrieved"),this.$refs.maincamcontainer.style.display="none",this.$refs.maindatacontainer.style.display="block",this.pollenData=e}}};const na=(0,l.Z)(ia,[["render",it],["__scopeId","data-v-ffe25060"]]);var sa=na;const oa=[{path:"/",name:"home",component:qe},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,9757))},{path:"/main",name:"main",component:sa}],la=(0,h.p7)({history:(0,h.r5)(),routes:oa});var ra=la,da=a(6735);(0,i.ri)(d).use(ra).use(da.Z).mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,s){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],s=e[c][2];for(var l=!0,r=0;r<i.length;r++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](i[r])}))?i.splice(r--,1):(l=!1,s<o&&(o=s));if(l){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,i){return a.f[i](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.cbd8c785.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="pollenyzer:";a.l=function(i,n,s,o){if(e[i])e[i].push(n);else{var l,r;if(void 0!==s)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var h=d[c];if(h.getAttribute("src")==i||h.getAttribute("data-webpack")==t+s){l=h;break}}l||(r=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+s),l.src=i),e[i]=[n];var u=function(t,a){l.onerror=l.onload=null,clearTimeout(p);var n=e[i];if(delete e[i],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),r&&document.head.appendChild(l)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.f.j=function(t,i){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var s=new Promise((function(a,i){n=e[t]=[a,i]}));i.push(n[2]=s);var o=a.p+a.u(t),l=new Error,r=function(i){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var s=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",l.name="ChunkLoadError",l.type=s,l.request=o,n[1](l)}};a.l(o,r,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,o=i[0],l=i[1],r=i[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(r)var c=r(a)}for(t&&t(i);d<o.length;d++)s=o[d],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},i=self["webpackChunkpollenyzer"]=self["webpackChunkpollenyzer"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(1051)}));i=a.O(i)})();
//# sourceMappingURL=app.6b4afb34.js.map