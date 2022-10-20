(function(){var e={8905:function(e){var t=function(e){this.canvas=e.canvas,this.ctx=e.ctx,this.particleColor=e.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*e.options.velocity,y:(Math.random()-.5)*e.options.velocity}};t.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},t.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle=this.particleColor,this.ctx.globalAlpha=.7,this.ctx.arc(this.x,this.y,1.5,0,2*Math.PI),this.ctx.fill()};var a=function(e,t){this.canvasDiv=e,this.canvasDiv.size={width:this.canvasDiv.offsetWidth,height:this.canvasDiv.offsetHeight},t=void 0!==t?t:{},this.options={particleColor:void 0!==t.particleColor?t.particleColor:"#fff",background:void 0!==t.background?t.background:"#1a252f",interactive:void 0===t.interactive||t.interactive,velocity:this.setVelocity(t.speed),density:this.setDensity(t.density)},this.init()};a.prototype.init=function(){if(this.bgDiv=document.createElement("div"),this.canvasDiv.appendChild(this.bgDiv),this.setStyles(this.bgDiv,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background)&&this.setStyles(this.bgDiv,{background:this.options.background}),!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.canvasDiv.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.canvasDiv.size.width,this.canvas.height=this.canvasDiv.size.height,this.setStyles(this.canvasDiv,{position:"relative"}),this.setStyles(this.canvas,{"z-index":"20",position:"relative"}),window.addEventListener("resize",function(){if(this.canvasDiv.offsetWidth===this.canvasDiv.size.width&&this.canvasDiv.offsetHeight===this.canvasDiv.size.height)return!1;this.canvas.width=this.canvasDiv.size.width=this.canvasDiv.offsetWidth,this.canvas.height=this.canvasDiv.size.height=this.canvasDiv.offsetHeight,clearTimeout(this.resetTimer),this.resetTimer=setTimeout(function(){this.particles=[];for(var e=0;e<this.canvas.width*this.canvas.height/this.options.density;e++)this.particles.push(new t(this));this.options.interactive&&this.particles.push(this.mouseParticle),requestAnimationFrame(this.update.bind(this))}.bind(this),500)}.bind(this)),this.particles=[];for(var e=0;e<this.canvas.width*this.canvas.height/this.options.density;e++)this.particles.push(new t(this));this.options.interactive&&(this.mouseParticle=new t(this),this.mouseParticle.velocity={x:0,y:0},this.particles.push(this.mouseParticle),this.canvas.addEventListener("mousemove",function(e){this.mouseParticle.x=e.clientX-this.canvas.offsetLeft,this.mouseParticle.y=e.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(){this.mouseParticle.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.mouseParticle=new t(this),this.mouseParticle.velocity={x:0,y:0},this.particles.push(this.mouseParticle)}.bind(this))),requestAnimationFrame(this.update.bind(this))},a.prototype.update=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalAlpha=1;for(var e=0;e<this.particles.length;e++){this.particles[e].update(),this.particles[e].draw();for(var t=this.particles.length-1;t>e;t--){var a=Math.sqrt(Math.pow(this.particles[e].x-this.particles[t].x,2)+Math.pow(this.particles[e].y-this.particles[t].y,2));a>120||(this.ctx.beginPath(),this.ctx.strokeStyle=this.options.particleColor,this.ctx.globalAlpha=(120-a)/120,this.ctx.lineWidth=2.8,this.ctx.moveTo(this.particles[e].x,this.particles[e].y),this.ctx.lineTo(this.particles[t].x,this.particles[t].y),this.ctx.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},a.prototype.setVelocity=function(e){return"fast"===e?3.5:"slow"===e?1:"none"===e?0:.66},a.prototype.setDensity=function(e){return"high"===e?5e3:"low"===e?2e4:isNaN(parseInt(e,10))?1e4:e},a.prototype.setStyles=function(e,t){for(var a in t)e.style[a]=t[a]},e.exports={ParticleNetwork:a}},1793:function(e,t,a){"use strict";var i=a(9242),n=a(3396);function l(e,t,a,i,l,s){const o=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(o)}var s={name:"App",components:{}},o=a(89);const r=(0,o.Z)(s,[["render",l]]);var d=r,c=a(5431);(0,c.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u=a(2483),p=a.p+"img/pollenyzer_logo.8c6997e9.svg";const h=(0,n._)("img",{class:"mx-auto my-4",style:{"max-width":"500px"},alt:"Vue logo",src:p},null,-1),m={key:0},v={key:0},f={key:0};function g(e,t,a,l,s,o){const r=(0,n.up)("MDBRow"),d=(0,n.up)("MDBCol"),c=(0,n.up)("MyCard1"),u=(0,n.up)("MyCard2"),p=(0,n.up)("MyCard3"),g=(0,n.up)("MDBContainer"),b=(0,n.up)("MyFooter");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{md:"12",class:"mx-auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[h])),_:1}),(0,n.Wm)(r)])),_:1})])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i.uT,{appear:"",name:"bounce"},{default:(0,n.w5)((()=>[s.showCards[0]?((0,n.wg)(),(0,n.iD)("p",m,[(0,n.Wm)(c)])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{name:"bounce"},{default:(0,n.w5)((()=>[s.showCards[1]?((0,n.wg)(),(0,n.iD)("p",v,[(0,n.Wm)(u)])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{name:"bounce"},{default:(0,n.w5)((()=>[s.showCards[2]?((0,n.wg)(),(0,n.iD)("p",f,[(0,n.Wm)(p)])):(0,n.kq)("",!0)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(b,{onNextCard:t[0]||(t[0]=e=>o.nextCard()),onPreviousCard:t[1]||(t[1]=e=>o.previousCard()),prevDisabled:s.prevDisabled,nextDisabled:s.nextDisabled},null,8,["prevDisabled","nextDisabled"])])}const b=e=>((0,n.dD)("data-v-eb5ff872"),e=e(),(0,n.Cn)(),e),y={style:{color:"white",position:"fixed",bottom:"0",width:"100%"},class:"d-block d-md-none"},D={class:"text-center p-1",style:{"background-image":"linear-gradient(to top,rgba(151, 190, 17, 1),rgba(151, 190, 17, 0.3),rgba(251,252,235, 0))"}},w={key:0,class:"text-center bgcol_green",style:{width:"100%","min-height":"1em"}},_=(0,n.Uk)(" © 2022 Pollenyzer "),x=b((()=>(0,n._)("span",{style:{color:"rgba(255, 255, 255, 0.3)"}},"v0.2",-1))),C=[_,x],k={style:{width:"100%","padding-bottom":"100px"},class:"d-none d-md-block text-center"},M=b((()=>(0,n._)("div",{style:{height:"50px"}},null,-1))),B={style:{color:"white",position:"fixed",bottom:"0",width:"100%"}},W={key:0,class:"text-center bgcol_dark text-smaller",style:{width:"100%","min-height":"1em"}},T=(0,n.Uk)(" © 2022 Pollenyzer "),P=b((()=>(0,n._)("span",{style:{color:"rgba(255, 255, 255, 0.4)"}},"v0.2",-1))),z=[T,P];function $(e,t,a,i,l,s){const o=(0,n.up)("MyCardControls");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",y,[(0,n._)("div",D,[(0,n.Wm)(o,{onNextCard:t[0]||(t[0]=t=>e.$emit("nextCard")),onPreviousCard:t[1]||(t[1]=t=>e.$emit("previousCard")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled},null,8,["nextDisabled","prevDisabled"])]),((0,n.wg)(),(0,n.iD)("div",w,C))]),(0,n._)("div",k,[(0,n.Wm)(o,{onNextCard:t[2]||(t[2]=t=>e.$emit("nextCard")),onPreviousCard:t[3]||(t[3]=t=>e.$emit("previousCard")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled},null,8,["nextDisabled","prevDisabled"]),M,(0,n._)("div",B,[((0,n.wg)(),(0,n.iD)("div",W,z))])])],64)}const I={class:"d-block d-md-none"},A={class:"mx-2"},S={class:"mx-2"},U={class:"d-none d-md-block"},H={class:"m-5"},j={class:"m-5"};function O(e,t,a,i,l,s){const o=(0,n.up)("MDBIcon"),r=(0,n.up)("MDBBtn");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",I,[(0,n._)("span",A,[(0,n.Wm)(r,{onClick:t[0]||(t[0]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",S,[(0,n.Wm)(r,{onClick:t[1]||(t[1]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-right"})])),_:1},8,["disabled"])])]),(0,n._)("div",U,[(0,n._)("span",H,[(0,n.Wm)(r,{onClick:t[2]||(t[2]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",j,[(0,n.Wm)(r,{onClick:t[3]||(t[3]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-right"})])),_:1},8,["disabled"])])])])}var R=a(6818),E={data(){return{}},props:{prevDisabled:Boolean,nextDisabled:Boolean},name:"CamControls",components:{MDBBtn:R.MDBBtn,MDBIcon:R.MDBIcon}};const F=(0,o.Z)(E,[["render",O]]);var V=F,L={components:{MyCardControls:V},props:{prevDisabled:Boolean,nextDisabled:Boolean},emits:["nextCard","previousCard"]};const N=(0,o.Z)(L,[["render",$],["__scopeId","data-v-eb5ff872"]]);var Z=N;const q=(0,n.Uk)("Analyze the content of your pollen traps!"),Y=(0,n._)("ol",null,[(0,n._)("li",null,"Attach the pollen trap to the hive for a few days."),(0,n._)("li",null,"Harvest the pollen."),(0,n._)("li",null,"Photograph your catch."),(0,n._)("li",null,"(Opt. provide some additional information for scientists)."),(0,n._)("li",null,"Analyze your pollen!")],-1);function G(e,t,a,i,l,s){const o=(0,n.up)("MDBCardTitle"),r=(0,n.up)("MDBCardText"),d=(0,n.up)("MDBCardBody"),c=(0,n.up)("MDBCard");return(0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[q])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[Y])),_:1})])),_:1})])),_:1})}var J={name:"MyCard1",components:{MDBCard:R.MDBCard,MDBCardBody:R.MDBCardBody,MDBCardTitle:R.MDBCardTitle,MDBCardText:R.MDBCardText}};const K=(0,o.Z)(J,[["render",G]]);var X=K,Q=a(7139);const ee=(0,n.Uk)("Support science!"),te=(0,n.Uk)(" You can skip this, however if you feel like saving the bees, please give us additional information about your hive. "),ae=(0,n._)("hr",null,null,-1),ie=(0,n._)("label",{for:"country",class:"form-label"},"Hive's location",-1),ne=(0,n._)("span",{class:"input-group-text border-0",id:"search-addon"},[(0,n._)("i",{class:"fas fa-map-marker-alt"})],-1),le=(0,n._)("span",{class:"input-group-text border-0",id:"search-addon"},[(0,n._)("i",{class:"fas fa-map-marker-alt"})],-1),se=(0,n._)("hr",null,null,-1),oe={for:"duration",class:"form-label"},re=(0,n.Uk)("No. of days the trap was mounted: "),de=(0,n._)("hr",null,null,-1),ce={for:"datepicker",class:"form-label"},ue={style:{"text-align":"center",width:"100%"}};function pe(e,t,a,i,l,s){const o=(0,n.up)("MDBCardTitle"),r=(0,n.up)("MDBCardText"),d=(0,n.up)("MDBInput"),c=(0,n.up)("vue3-slider"),u=(0,n.up)("Datepicker"),p=(0,n.up)("MDBCardBody"),h=(0,n.up)("MDBCard");return(0,n.wg)(),(0,n.j4)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"xtra-padding"},{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[ee])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[te])),_:1}),ae,ie,(0,n.Wm)(d,{id:"country",inputGroup:"",formOutline:!1,wrapperClass:"mb-3",class:"rounded",modelValue:i.input12,"onUpdate:modelValue":t[0]||(t[0]=e=>i.input12=e),"aria-describedby":"search-addon","aria-label":"country",placeholder:"Hive's country"},{prepend:(0,n.w5)((()=>[ne])),_:1},8,["modelValue"]),(0,n.Wm)(d,{inputGroup:"",formOutline:!1,type:"number",wrapperClass:"mb-3",class:"zipCode rounded",modelValue:i.input13,"onUpdate:modelValue":t[1]||(t[1]=e=>i.input13=e),"aria-describedby":"basic-addon4","aria-label":"zipcode",placeholder:"Hive's zip code"},{prepend:(0,n.w5)((()=>[le])),_:1},8,["modelValue"]),se,(0,n._)("label",oe,[re,(0,n._)("b",null,(0,Q.zw)(l.daysMounted),1)]),(0,n.Wm)(c,{id:"duration",trackColor:"#ffa820",color:"#97be11",modelValue:l.daysMounted,"onUpdate:modelValue":t[2]||(t[2]=e=>l.daysMounted=e),handleScale:2.1,min:1,alwaysShowHandle:!0,sticky:!0,max:7,disabled:!1},null,8,["modelValue","handleScale"]),de,(0,n._)("label",ce,"Date of harvest "+(0,Q.zw)(l.date),1),(0,n._)("div",ue,[(0,n.Wm)(u,{id:"datepicker",selectText:"",timePicker:!1,inline:!0,modelValue:l.date,"onUpdate:modelValue":t[3]||(t[3]=e=>l.date=e)},null,8,["modelValue"])])])),_:1})])),_:1})}var he=a(8524),me=a(1716),ve=a.n(me),fe=a(4870),ge={name:"MyCard2",data(){return{date:null,daysMounted:3}},components:{MDBCard:R.MDBCard,MDBCardBody:R.MDBCardBody,MDBCardTitle:R.MDBCardTitle,MDBCardText:R.MDBCardText,MDBInput:R.MDBInput,Datepicker:he.Z,"vue3-slider":ve()},setup(){const e=(0,fe.iH)(""),t=(0,fe.iH)(""),a=(0,fe.iH)(""),i=(0,fe.iH)(""),n=(0,fe.iH)(""),l=(0,fe.iH)("");return{input12:e,input13:t,input14:a,input15:i,input16:n,textarea2:l}}};const be=(0,o.Z)(ge,[["render",pe]]);var ye=be;const De=e=>((0,n.dD)("data-v-b51f7eee"),e=e(),(0,n.Cn)(),e),we=(0,n.Uk)("Take or upload a photo!"),_e={class:"fa-ul p-1 py-3"},xe=De((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),Ce=(0,n.Uk)(" Place Pollen on a white, folded piece of paper. "),ke=De((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Me=[ke],Be=De((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),We=(0,n.Uk)(" Pollen should not overlap. "),Te=De((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Pe=[Te],ze=De((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),$e=(0,n.Uk)("Avoid casting any shadows. "),Ie=De((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Ae=[Ie],Se=De((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),Ue=(0,n.Uk)("Avoid flashlight. "),He=De((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),je=[He],Oe={class:"row justify-content-evenly"},Re=De((()=>(0,n._)("div",{class:"col-4 text-center"},[(0,n._)("a",{class:"btn btn-primary btn-lg btn-floating btn-dark",href:"/#main",role:"button"},[(0,n._)("i",{class:"fas fa-camera",style:{}})])],-1))),Ee={class:"col-4 text-center"},Fe={for:"file"},Ve=De((()=>(0,n._)("i",{class:"fas fa-2x fa-file-upload",style:{cursor:"pointer"}},null,-1))),Le={type:"file",ref:"fileupload",id:"file",style:{display:"none"},name:"image",accept:"image/jpeg,image/jpg,image/png",multiple:"","data-original-title":"upload photos"},Ne=De((()=>(0,n._)("div",{class:"row justify-content-evenly"},[(0,n._)("div",{class:"col-4 text-center small p-1"},"Open Camera"),(0,n._)("div",{class:"col-4 text-center small p-1"},"Upload File ")],-1)));function Ze(e,t,a,i,l,s){const o=(0,n.up)("MDBCardTitle"),r=(0,n.up)("MDBCardText"),d=(0,n.up)("MDBCardBody"),c=(0,n.up)("MDBCard");return(0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[we])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n._)("ul",_e,[(0,n._)("li",null,[xe,(0,n._)("p",null,[Ce,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Please use DIN A5 paper.",class:"col_green customtooltip","data-mdb-html":"true","data-mdb-placement":"bottom",href:"#!",onClick:t[0]||(t[0]=e=>e.preventDefault())},Me)])]),(0,n._)("li",null,[Be,(0,n._)("p",null,[We,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Overlapping pollen cannot be analyzed.",class:"col_green customtooltip",href:"#!",onClick:t[1]||(t[1]=e=>e.preventDefault())},Pe)])]),(0,n._)("li",null,[ze,(0,n._)("p",null,[$e,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Daylight works best.",class:"col_green customtooltip",href:"#!",onClick:t[2]||(t[2]=e=>e.preventDefault())},Ae)])]),(0,n._)("li",null,[Se,(0,n._)("p",null,[Ue,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Consider daylight.",class:"col_green customtooltip",href:"#!",onClick:t[3]||(t[3]=e=>e.preventDefault())},je)])])])])),_:1}),(0,n._)("div",Oe,[Re,(0,n._)("div",Ee,[(0,n._)("label",Fe,[Ve,(0,n._)("input",Le,null,512)])])]),Ne])),_:1})])),_:1})}var qe={name:"MyCard3",data(){return{date:null}},components:{MDBCard:R.MDBCard,MDBCardBody:R.MDBCardBody,MDBCardTitle:R.MDBCardTitle,MDBCardText:R.MDBCardText},mounted(){const e=this.$refs.fileupload;e.onclick=function(){this.value=null};const t=this.$router;e.addEventListener("change",(function(){const e=new FileReader;e.addEventListener("load",(function(){const a=e.result;t.push({name:"main",params:{uploaded_image:a}})})),e.readAsDataURL(this.files[0])}))},methods:{}};const Ye=(0,o.Z)(qe,[["render",Ze],["__scopeId","data-v-b51f7eee"]]);var Ge=Ye,Je={data(){return{cardId:0,showCards:[!0,!1,!1],prevDisabled:!0,nextDisabled:!1}},methods:{nextCard(){this.showCards[this.cardId]=!1,this.cardId++,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1)},previousCard(){this.showCards[this.cardId]=!1,this.cardId--,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1)}},name:"HomeView",components:{MyFooter:Z,MyCard1:X,MyCard2:ye,MyCard3:Ge,MDBCol:R.MDBCol,MDBRow:R.MDBRow,MDBContainer:R.MDBContainer}};const Ke=(0,o.Z)(Je,[["render",g]]);var Xe=Ke;const Qe=e=>((0,n.dD)("data-v-4e56d3f8"),e=e(),(0,n.Cn)(),e),et={style:{height:"100%",width:"100%"}},tt={key:0,style:{overflow:"hidden"},ref:"errorcontainer",class:"error-container parent"},at={class:"error-close"},it=Qe((()=>(0,n._)("i",{class:"fa fa-times fa-2x"},null,-1))),nt=[it],lt={class:"error-content"},st={key:1,ref:"maincamcontainer",style:{height:"100%",display:"flex"}},ot={key:2,ref:"mainfilecontainer",style:{height:"100%",display:"flex"}},rt={ref:"maindatacontainer",style:{display:"none"}};function dt(e,t,a,i,l,s){const o=(0,n.up)("MainCam"),r=(0,n.up)("MainFile"),d=(0,n.up)("MainData");return(0,n.wg)(),(0,n.iD)("div",et,[l.errorMsg?((0,n.wg)(),(0,n.iD)("div",tt,[(0,n._)("div",at,[(0,n._)("a",{style:{color:"#fbfceb"},href:"#!",onClick:t[0]||(t[0]=e=>{e.preventDefault(),this.errorMsg=null}),role:"button"},nt)]),(0,n._)("div",lt,(0,Q.zw)(l.errorMsg),1)],512)):(0,n.kq)("",!0),e.$route.params?.uploaded_image?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",st,[(0,n.Wm)(o,{onError:t[1]||(t[1]=e=>s.onError(e)),onPhotoAnalyzed:t[2]||(t[2]=e=>s.onPhotoAnalyzed(e))})],512)),e.$route.params?.uploaded_image?((0,n.wg)(),(0,n.iD)("div",ot,[(0,n.Wm)(r,{onError:t[3]||(t[3]=e=>s.onError(e)),onPhotoAnalyzed:t[4]||(t[4]=e=>s.onPhotoAnalyzed(e))})],512)):(0,n.kq)("",!0),(0,n._)("div",rt,[(0,n.Wm)(d,{onRedo:t[5]||(t[5]=e=>s.onRedo()),onError:t[6]||(t[6]=e=>s.onError(e)),pollenData:l.pollenData},null,8,["pollenData"])],512)])}const ct=e=>((0,n.dD)("data-v-64b9499c"),e=e(),(0,n.Cn)(),e),ut={class:"wrapper align-items-center justify-content-center",style:{display:"flex"}},pt={ref:"videocanvas",class:"video-canvas"},ht={ref:"particlediv",class:"particle-div"},mt={class:"video",ref:"videoviewer"},vt={class:"photo-button-container d-block text-center my-3"},ft=["disabled"],gt=ct((()=>(0,n._)("i",{class:"fas fa-camera",style:{}},null,-1))),bt=[gt];function yt(e,t,a,i,l,s){return(0,n.wg)(),(0,n.iD)("div",ut,[(0,n._)("canvas",pt,null,512),(0,n._)("div",ht,null,512),(0,n._)("video",mt,null,512),(0,n._)("div",vt,[(0,n._)("button",{class:"button photo-button",disabled:l.camButtonDisabled,onClick:t[0]||(t[0]=(...e)=>s.TakePhoto&&s.TakePhoto(...e))},bt,8,ft)])])}a(1703);var Dt=a(8905),wt={components:{},data(){return{mediaStream:null,data:null,camButtonDisabled:!1}},props:{},methods:{async StartRecording(){await navigator.mediaDevices.enumerateDevices().catch((e=>{this.$emit("error","Could not retrieve cameras. ("+e+")")}));let e=this.$refs.videoviewer,t=this.$refs.videocanvas,a=this.$refs.particlediv;this.camButtonDisabled=!1,t.style.display="none",a.display="none",e.style.display="block",this.mediaStream=navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:2048},height:{ideal:1536}}}).catch((e=>{this.$emit("error","Could not start camera. ("+e+")")})).then((t=>(this.mediaStream=t,e.srcObject=this.mediaStream,e.play().catch((e=>{this.$emit("error","Could not start playing camera stream. ("+e+")")})))))},async TakePhoto(){let e=this.$refs.videoviewer,t=this.$refs.videocanvas,a=this.$refs.particlediv;this.camButtonDisabled=!0;const i=t.getContext("2d");i.canvas.width=e.videoWidth,i.canvas.height=e.videoHeight;let n=e.videoWidth,l=e.videoHeight;i.drawImage(e,0,0,n,l);let s=e.clientWidth,o=t.toDataURL(),r=l/n;e.style.display="none",t.style.display="block",t.style.width="100%",a.style.display="block",a.innerHTML="",a.style.width=s+"px",a.style.height=s*r+"px";var d={particleColor:"#ffa820",background:o,interactive:!0,speed:"fast",density:"high"};new Dt.ParticleNetwork(a,d);const c={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({img:o})},u=this.mediaStream?.getVideoTracks();u?.forEach((e=>{e.stop()})),fetch("https://europe-west3-pollenyzer.cloudfunctions.net/analyze",c).then((e=>{let t=e.json();return a.innerHTML="",a.style.display="none",t})).then((e=>{if(console.log("server response",e),!e){const e="Could contact AI-server.";throw console.log(e),new Error(e)}e["dataURL"]=o,e["imgWidth"]=n,e["imgHeight"]=l,this.$emit("photoAnalyzed",e)})).catch((e=>{this.$emit("error","Could not retrieve pollen analysis. ("+e+")"),a.innerHTML="",a.style.display="none",this.StartRecording()}))}},async mounted(){await this.StartRecording().catch((e=>{this.$emit("error","Could not start camera. ("+e+")")}))}};const _t=(0,o.Z)(wt,[["render",yt],["__scopeId","data-v-64b9499c"]]);var xt=_t,Ct=a.p+"img/pollen_marker.b21e44ff.svg";const kt={ref:"datawrapper"},Mt=(0,n._)("img",{class:"mx-auto my-4",style:{"max-width":"500px"},src:p},null,-1),Bt={key:0},Wt=(0,n.Uk)("Pollen Detections"),Tt={style:{"margin-bottom":"2em"}},Pt=(0,n._)("li",null,[(0,n._)("span",null,[(0,n.Uk)("Pollen are highlighted below with "),(0,n._)("img",{src:Ct,style:{width:"24px","vertical-align":"middle"}}),(0,n.Uk)(". The left arc shows the extracted primary pollen color while the right arc the secondary color.")])],-1),zt=(0,n._)("li",null,"Use the zoom function to check on the detections.",-1),$t={id:"annotationimgcontainer",ref:"annotationimgcontainer"},It={ref:"annotationimg",id:"annotationimg",style:{display:"none"}},At={style:{display:"none"},ref:"annotationcanvas",class:"annotation-canvas"},St={key:0},Ut=(0,n.Uk)("Pollen Clusters"),Ht={style:{"margin-bottom":"2em"}},jt=(0,n._)("li",null,"For all detected pollen the following dendrogram shows their attributed clusters in different colors. Connections colored in light gray show outliers (that is clusters of size 1).",-1),Ot=["src"],Rt={key:0},Et={style:{"margin-bottom":"10px",width:"100%","text-align":"center","font-weight":"bold"}},Ft=(0,n._)("div",{class:"cluster-img-wrapper"},[(0,n._)("div",{class:"cluster-img"},"primary pollen colors per cluster"),(0,n._)("div",{class:"cluster-img"},"secondary pollen colors per cluster")],-1),Vt={key:0},Lt=(0,n._)("div",{style:{"text-align":"center","margin-bottom":"-50px",color:"#888"}},"outliers",-1),Nt=(0,n._)("hr",{class:"outliers"},null,-1),Zt=[Lt,Nt],qt={style:{color:"#888"}},Yt=["src"],Gt=["src"];function Jt(e,t,a,l,s,o){const r=(0,n.up)("MDBRow"),d=(0,n.up)("MDBCol"),c=(0,n.up)("MDBCardTitle"),u=(0,n.up)("MDBCardText"),p=(0,n.up)("MDBCardBody"),h=(0,n.up)("MDBCard"),m=(0,n.up)("vue3-slider"),v=(0,n.up)("MDBContainer"),f=(0,n.up)("CamFooter");return(0,n.wg)(),(0,n.iD)("div",kt,[(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{md:"12",class:"mx-auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[Mt])),_:1})])),_:1})])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i.uT,{appear:"",name:"bounce",onAfterEnter:t[0]||(t[0]=e=>o.showAnnotations(a.pollenData))},{default:(0,n.w5)((()=>[s.showCards[0]?((0,n.wg)(),(0,n.iD)("p",Bt,[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[Wt])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n._)("ul",Tt,[(0,n._)("li",null,(0,Q.zw)(a.pollenData?.pollen?.n_pollen)+" pollen detected.",1),Pt,zt]),(0,n._)("div",$t,null,512),(0,n._)("img",It,null,512),(0,n._)("canvas",At,null,512)])),_:1})])),_:1})])),_:1})])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{appear:"",name:"bounce"},{default:(0,n.w5)((()=>[s.showCards[1]?((0,n.wg)(),(0,n.iD)("p",St,[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[Ut])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n._)("ul",Ht,[(0,n._)("li",null,(0,Q.zw)(a.pollenData?.pollen?.clusters?.n_clusters_predicted)+" clusters and "+(0,Q.zw)(a.pollenData?.pollen?.clusters?.n_outliers_predicted)+" outliers detected.",1),jt]),(0,n._)("img",{src:a.pollenData?.pollen?.clusters?.dendrogram,style:{width:"100%","max-width":"600px"}},null,8,Ot)])),_:1})])),_:1})])),_:1})])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{appear:"",name:"bounce"},{default:(0,n.w5)((()=>[s.showCards[2]?((0,n.wg)(),(0,n.iD)("p",Rt,[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n._)("div",Et,"#cluster "+(0,Q.zw)(s.nCluster),1),(0,n.Wm)(m,{trackColor:"#ffa820",color:"#97be11",tooltip:!0,modelValue:s.nCluster,"onUpdate:modelValue":t[1]||(t[1]=e=>s.nCluster=e),handleScale:3,min:1,alwaysShowHandle:!0,sticky:!0,max:19},null,8,["modelValue"]),(0,n._)("div",null,[Ft,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.pollenData?.pollen?.clusters?.cluster_imgs[s.nCluster],((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"cluster-img-wrapper",key:e},[t>1&&a.pollenData?.pollen?.clusters?.cluster_imgs[s.nCluster][t-1].cluster_size>1&&1==e.cluster_size?((0,n.wg)(),(0,n.iD)("div",Vt,Zt)):(0,n.kq)("",!0),(0,n._)("div",qt,"cluster "+(0,Q.zw)(t+1)+" (n="+(0,Q.zw)(e.cluster_size)+")",1),(0,n._)("img",{src:e.cluster_primary_canvas,class:"cluster-img"},null,8,Yt),(0,n._)("img",{src:e.cluster_secondary_canvas,class:"cluster-img"},null,8,Gt)])))),128))])])),_:1})])),_:1})])),_:1})])):(0,n.kq)("",!0)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(f,{onNextCard:t[2]||(t[2]=e=>o.nextCard()),onPreviousCard:t[3]||(t[3]=e=>o.previousCard()),onRedo:t[4]||(t[4]=t=>e.$emit("redo")),prevDisabled:s.prevDisabled,nextDisabled:s.nextDisabled,redoDisabled:!1},null,8,["prevDisabled","nextDisabled"])],512)}const Kt={style:{color:"white",position:"fixed",bottom:"0",width:"100%"},class:"d-block d-md-none"},Xt={class:"text-center p-1",style:{"background-image":"linear-gradient(to top,rgba(151, 190, 17, 1),rgba(151, 190, 17, 0.3),rgba(251,252,235, 0))"}},Qt={key:0,class:"text-center bgcol_green",style:{width:"100%","min-height":"1em"}},ea={style:{width:"100%","padding-bottom":"100px"},class:"d-none d-md-block text-center"},ta={style:{color:"white",position:"fixed",bottom:"0",width:"100%"}},aa={key:0,class:"text-center bgcol_dark text-smaller",style:{width:"100%","min-height":"1em"}};function ia(e,t,a,i,l,s){const o=(0,n.up)("CamControls");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",Kt,[(0,n._)("div",Xt,[(0,n.Wm)(o,{onNextCard:t[0]||(t[0]=t=>e.$emit("nextCard")),onPreviousCard:t[1]||(t[1]=t=>e.$emit("previousCard")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled,onRedo:t[2]||(t[2]=t=>e.$emit("redo"))},null,8,["nextDisabled","prevDisabled"])]),((0,n.wg)(),(0,n.iD)("div",Qt," © 2022 Pollenyzer "))]),(0,n._)("div",ea,[(0,n.Wm)(o,{onNextCard:t[3]||(t[3]=t=>e.$emit("nextCard")),onPreviousCard:t[4]||(t[4]=t=>e.$emit("previousCard")),onRedo:t[5]||(t[5]=t=>e.$emit("redo")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled,redoDisabled:a.redoDisabled},null,8,["nextDisabled","prevDisabled","redoDisabled"]),(0,n._)("div",ta,[((0,n.wg)(),(0,n.iD)("div",aa," © 2022 Pollenyzer "))])])],64)}const na={class:"d-block d-md-none"},la={class:"mx-2"},sa={class:"mx-2"},oa={class:"mx-2"},ra={class:"d-none d-md-block"},da={class:"m-5"},ca={class:"m-5"},ua={class:"m-5"};function pa(e,t,a,i,l,s){const o=(0,n.up)("MDBIcon"),r=(0,n.up)("MDBBtn");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",na,[(0,n._)("span",la,[(0,n.Wm)(r,{onClick:t[0]||(t[0]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",sa,[(0,n.Wm)(r,{onClick:t[1]||(t[1]=t=>e.$emit("redo")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.redoDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"redo"})])),_:1},8,["disabled"])]),(0,n._)("span",oa,[(0,n.Wm)(r,{onClick:t[2]||(t[2]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-right"})])),_:1},8,["disabled"])])]),(0,n._)("div",ra,[(0,n._)("span",da,[(0,n.Wm)(r,{onClick:t[3]||(t[3]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",ca,[(0,n.Wm)(r,{onClick:t[4]||(t[4]=t=>e.$emit("redo")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.redoDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"redo"})])),_:1},8,["disabled"])]),(0,n._)("span",ua,[(0,n.Wm)(r,{onClick:t[5]||(t[5]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-right"})])),_:1},8,["disabled"])])])])}var ha={data(){return{}},props:{prevDisabled:Boolean,nextDisabled:Boolean,redoDisabled:Boolean},name:"CamControls",components:{MDBBtn:R.MDBBtn,MDBIcon:R.MDBIcon}};const ma=(0,o.Z)(ha,[["render",pa]]);var va=ma,fa={name:"CamFooter",components:{CamControls:va},props:{prevDisabled:Boolean,nextDisabled:Boolean,redoDisabled:Boolean},emits:["nextCard","previousCard","redo"]};const ga=(0,o.Z)(fa,[["render",ia],["__scopeId","data-v-fd317084"]]);var ba=ga,ya=a(9096),Da={components:{MDBCol:R.MDBCol,MDBRow:R.MDBRow,MDBContainer:R.MDBContainer,MDBCard:R.MDBCard,MDBCardBody:R.MDBCardBody,MDBCardTitle:R.MDBCardTitle,MDBCardText:R.MDBCardText,CamFooter:ba,"vue3-slider":ve()},props:{pollenData:Object},data(){return{showCards:[!0,!1,!1],cardId:0,nCluster:1,prevDisabled:!0,nextDisabled:!1}},mounted(){},watch:{pollenData(e,t){this.showAnnotations(e)}},methods:{showAnnotations(e){if(e){this.nCluster=this.pollenData.pollen.clusters.n_clusters_predicted+this.pollenData.pollen.clusters.n_outliers_predicted;let a=this.$refs.annotationcanvas,i=this.$refs.annotationimg;const n=a.getContext("2d");n.canvas.width=e.pollen.img_width,n.canvas.height=e.pollen.img_height;var t=new Image;t.onload=function(){n.drawImage(t,0,0,e.pollen.img_width,e.pollen.img_height),n.beginPath(),n.lineWidth=10,n.strokeStyle="#ffa820",n.rect(e.pollen.annotations.rect.upperleft_x,e.pollen.annotations.rect.upperleft_y,e.pollen.annotations.rect.width,e.pollen.annotations.rect.height),n.stroke();const l=e.pollen.dimension/2;for(let t=0;t<e.pollen.annotations.coords.length;t++){let a=e.pollen.annotations.coords[t],i=e.pollen.annotations.str_colors_primary[t],s=e.pollen.annotations.str_colors_secondary[t];const o=a.x,r=a.y,d=e.pollen.dimension;n.beginPath(),n.arc(o,r,d,Math.PI/2,3*Math.PI/2,!1),n.lineWidth=l,n.strokeStyle=i,n.stroke(),n.beginPath(),n.arc(o,r,d,Math.PI/2,3*Math.PI/2,!0),n.lineWidth=l,n.strokeStyle=s,n.stroke(),n.beginPath(),n.arc(o,r,d-l/2,0,2*Math.PI,!1),n.lineWidth=Math.max(1,l/2),n.strokeStyle="#dc1e0b",n.stroke()}i.src=a.toDataURL(),new ya.Z("#annotationimgcontainer",{src:i,maxRatio:4,slider:!1,zoomer:!0})},t.src=e.dataURL}},nextCard(){this.showCards[this.cardId]=!1,this.cardId++,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1)},previousCard(){this.showCards[this.cardId]=!1,this.cardId--,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1)}}};const wa=(0,o.Z)(Da,[["render",Jt]]);var _a=wa;const xa=e=>((0,n.dD)("data-v-3aeada1e"),e=e(),(0,n.Cn)(),e),Ca={class:"wrapper align-items-center justify-content-center",style:{display:"flex"}},ka={ref:"particledivfile",class:"particle-div"},Ma=["src"],Ba={class:"photo-button-container d-block text-center my-3"},Wa=["disabled"],Ta=xa((()=>(0,n._)("i",{class:"fas fa-hat-wizard",style:{}},null,-1))),Pa=[Ta];function za(e,t,a,i,l,s){return(0,n.wg)(),(0,n.iD)("div",Ca,[(0,n._)("div",ka,null,512),(0,n._)("img",{class:"image",ref:"imgviewer",src:this.$route.params.uploaded_image},null,8,Ma),(0,n._)("div",Ba,[(0,n._)("button",{class:"button photo-button",disabled:l.camButtonDisabled,onClick:t[0]||(t[0]=(...e)=>s.analyzeUpload&&s.analyzeUpload(...e))},Pa,8,Wa)])])}var $a={components:{},data(){return{data:null,camButtonDisabled:!1}},props:{},methods:{async analyzeUpload(){let e=this.$refs.imgviewer,t=e.width,a=e.height,i=this.$refs.particledivfile,n=this.$route.params.uploaded_image;this.camButtonDisabled=!0,i.style.display="block",i.innerHTML="",i.style.width="100%";let l=a/t;i.style.display="block",i.innerHTML="",i.style.width=e.clientWidth+"px",i.style.height=e.clientWidth*l+"px";var s={particleColor:"#ffa820",background:n,interactive:!0,speed:"fast",density:"high"};new Dt.ParticleNetwork(i,s);const o={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({img:n})};fetch("https://europe-west3-pollenyzer.cloudfunctions.net/analyze",o).then((e=>{let t=e.json();return i.innerHTML="",i.style.display="none",t})).then((e=>{if(console.log("emitted",e),!e){const e="Could contact AI-server.";throw console.log(e),new Error(e)}e["dataURL"]=n,e["imgWidth"]=t,e["imgHeight"]=a,this.camButtonDisabled=!1,this.$emit("photoAnalyzed",e)})).catch((e=>{this.$emit("error","Could not retrieve pollen analysis. ("+e+")"),i.innerHTML="",i.style.display="none",router.push({name:"main",params:{uploaded_image:uploaded_image}})}))}},async mounted(){}};const Ia=(0,o.Z)($a,[["render",za],["__scopeId","data-v-3aeada1e"]]);var Aa=Ia,Sa={components:{MainCam:xt,MainData:_a,MainFile:Aa},mounted(){},setup(){},data(){return{pollenData:void 0,errorMsg:null,errorZIndex:10}},methods:{onRedo(){this.$router.push("/")},onError(e){this.errorMsg=e,setTimeout((()=>{this.$refs.errorcontainer.style.zIndex=++this.errorZIndex}),200)},onPhotoAnalyzed(e){try{this.$refs.maincamcontainer.style.display="none"}catch{}try{this.$refs.mainfilecontainer.style.display="none"}catch{}this.$refs.maindatacontainer.style.display="block",this.pollenData=e}}};const Ua=(0,o.Z)(Sa,[["render",dt],["__scopeId","data-v-4e56d3f8"]]);var Ha=Ua;const ja=[{path:"/",name:"home",component:Xe},{path:"/main",name:"main",component:Ha}],Oa=(0,u.p7)({history:(0,u.r5)(),routes:ja});var Ra=Oa;(0,i.ri)(d).use(Ra).mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var l=t[i]={exports:{}};return e[i].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,l){if(!i){var s=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],l=e[c][2];for(var o=!0,r=0;r<i.length;r++)(!1&l||s>=l)&&Object.keys(a.O).every((function(e){return a.O[e](i[r])}))?i.splice(r--,1):(o=!1,l<s&&(s=l));if(o){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[i,n,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,l,s=i[0],o=i[1],r=i[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(r)var c=r(a)}for(t&&t(i);d<s.length;d++)l=s[d],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},i=self["webpackChunkpollenyzer"]=self["webpackChunkpollenyzer"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(1793)}));i=a.O(i)})();
//# sourceMappingURL=app.e75d9d7c.js.map