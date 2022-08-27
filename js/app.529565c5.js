(function(){var e={8905:function(e){var t=function(e){this.canvas=e.canvas,this.ctx=e.ctx,this.particleColor=e.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*e.options.velocity,y:(Math.random()-.5)*e.options.velocity}};t.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},t.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle=this.particleColor,this.ctx.globalAlpha=.7,this.ctx.arc(this.x,this.y,1.5,0,2*Math.PI),this.ctx.fill()};var a=function(e,t){this.canvasDiv=e,this.canvasDiv.size={width:this.canvasDiv.offsetWidth,height:this.canvasDiv.offsetHeight},t=void 0!==t?t:{},this.options={particleColor:void 0!==t.particleColor?t.particleColor:"#fff",background:void 0!==t.background?t.background:"#1a252f",interactive:void 0===t.interactive||t.interactive,velocity:this.setVelocity(t.speed),density:this.setDensity(t.density)},this.init()};a.prototype.init=function(){if(this.bgDiv=document.createElement("div"),this.canvasDiv.appendChild(this.bgDiv),this.setStyles(this.bgDiv,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background)&&this.setStyles(this.bgDiv,{background:this.options.background}),!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.canvasDiv.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.canvasDiv.size.width,this.canvas.height=this.canvasDiv.size.height,this.setStyles(this.canvasDiv,{position:"relative"}),this.setStyles(this.canvas,{"z-index":"20",position:"relative"}),window.addEventListener("resize",function(){if(this.canvasDiv.offsetWidth===this.canvasDiv.size.width&&this.canvasDiv.offsetHeight===this.canvasDiv.size.height)return!1;this.canvas.width=this.canvasDiv.size.width=this.canvasDiv.offsetWidth,this.canvas.height=this.canvasDiv.size.height=this.canvasDiv.offsetHeight,clearTimeout(this.resetTimer),this.resetTimer=setTimeout(function(){this.particles=[];for(var e=0;e<this.canvas.width*this.canvas.height/this.options.density;e++)this.particles.push(new t(this));this.options.interactive&&this.particles.push(this.mouseParticle),requestAnimationFrame(this.update.bind(this))}.bind(this),500)}.bind(this)),this.particles=[];for(var e=0;e<this.canvas.width*this.canvas.height/this.options.density;e++)this.particles.push(new t(this));this.options.interactive&&(this.mouseParticle=new t(this),this.mouseParticle.velocity={x:0,y:0},this.particles.push(this.mouseParticle),this.canvas.addEventListener("mousemove",function(e){this.mouseParticle.x=e.clientX-this.canvas.offsetLeft,this.mouseParticle.y=e.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(){this.mouseParticle.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.mouseParticle=new t(this),this.mouseParticle.velocity={x:0,y:0},this.particles.push(this.mouseParticle)}.bind(this))),requestAnimationFrame(this.update.bind(this))},a.prototype.update=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalAlpha=1;for(var e=0;e<this.particles.length;e++){this.particles[e].update(),this.particles[e].draw();for(var t=this.particles.length-1;t>e;t--){var a=Math.sqrt(Math.pow(this.particles[e].x-this.particles[t].x,2)+Math.pow(this.particles[e].y-this.particles[t].y,2));a>120||(this.ctx.beginPath(),this.ctx.strokeStyle=this.options.particleColor,this.ctx.globalAlpha=(120-a)/120,this.ctx.lineWidth=2.8,this.ctx.moveTo(this.particles[e].x,this.particles[e].y),this.ctx.lineTo(this.particles[t].x,this.particles[t].y),this.ctx.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},a.prototype.setVelocity=function(e){return"fast"===e?3.5:"slow"===e?1:"none"===e?0:.66},a.prototype.setDensity=function(e){return"high"===e?5e3:"low"===e?2e4:isNaN(parseInt(e,10))?1e4:e},a.prototype.setStyles=function(e,t){for(var a in t)e.style[a]=t[a]},e.exports={ParticleNetwork:a}},5032:function(e,t,a){"use strict";var i=a(9242),n=a(3396);function s(e,t,a,i,s,l){const o=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(o)}var l={name:"App",components:{}},o=a(89);const r=(0,o.Z)(l,[["render",s]]);var d=r,c=a(5431);(0,c.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u=a(2483),p=a.p+"img/pollenyzer_logo.8c6997e9.svg";const h=(0,n._)("img",{class:"mx-auto my-4",style:{"max-width":"500px"},alt:"Vue logo",src:p},null,-1),m={key:0},v={key:0},f={key:0};function b(e,t,a,s,l,o){const r=(0,n.up)("MDBRow"),d=(0,n.up)("MDBCol"),c=(0,n.up)("MyCard1"),u=(0,n.up)("MyCard2"),p=(0,n.up)("MyCard3"),b=(0,n.up)("MDBContainer"),g=(0,n.up)("MyFooter");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{md:"12",class:"mx-auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[h])),_:1}),(0,n.Wm)(r)])),_:1})])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i.uT,{appear:"",name:"bounce"},{default:(0,n.w5)((()=>[l.showCards[0]?((0,n.wg)(),(0,n.iD)("p",m,[(0,n.Wm)(c)])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{name:"bounce"},{default:(0,n.w5)((()=>[l.showCards[1]?((0,n.wg)(),(0,n.iD)("p",v,[(0,n.Wm)(u)])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{name:"bounce"},{default:(0,n.w5)((()=>[l.showCards[2]?((0,n.wg)(),(0,n.iD)("p",f,[(0,n.Wm)(p)])):(0,n.kq)("",!0)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(g,{onNextCard:t[0]||(t[0]=e=>o.nextCard()),onPreviousCard:t[1]||(t[1]=e=>o.previousCard()),prevDisabled:l.prevDisabled,nextDisabled:l.nextDisabled},null,8,["prevDisabled","nextDisabled"])])}const g=e=>((0,n.dD)("data-v-8d9f9320"),e=e(),(0,n.Cn)(),e),y={style:{color:"white",position:"fixed",bottom:"0",width:"100%"},class:"d-block d-md-none"},D={class:"text-center p-1",style:{"background-image":"linear-gradient(to top,rgba(151, 190, 17, 1),rgba(151, 190, 17, 0.3),rgba(251,252,235, 0))"}},w={key:0,class:"text-center bgcol_green",style:{width:"100%","min-height":"1em"}},_=(0,n.Uk)(" © 2022 Pollenyzer "),C=g((()=>(0,n._)("span",{style:{color:"rgba(255, 255, 255, 0.3)"}},"v0.2",-1))),x=[_,C],k={style:{width:"100%"},class:"d-none d-md-block text-center"},M=g((()=>(0,n._)("div",{style:{height:"50px"}},null,-1))),B={style:{color:"white",position:"fixed",bottom:"0",width:"100%"}},W={key:0,class:"text-center bgcol_dark text-smaller",style:{width:"100%","min-height":"1em"}},T=(0,n.Uk)(" © 2022 Pollenyzer "),$=g((()=>(0,n._)("span",{style:{color:"rgba(255, 255, 255, 0.4)"}},"v0.2",-1))),I=[T,$];function P(e,t,a,i,s,l){const o=(0,n.up)("MyCardControls");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",y,[(0,n._)("div",D,[(0,n.Wm)(o,{onNextCard:t[0]||(t[0]=t=>e.$emit("nextCard")),onPreviousCard:t[1]||(t[1]=t=>e.$emit("previousCard")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled},null,8,["nextDisabled","prevDisabled"])]),((0,n.wg)(),(0,n.iD)("div",w,x))]),(0,n._)("div",k,[(0,n.Wm)(o,{onNextCard:t[2]||(t[2]=t=>e.$emit("nextCard")),onPreviousCard:t[3]||(t[3]=t=>e.$emit("previousCard")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled},null,8,["nextDisabled","prevDisabled"]),M,(0,n._)("div",B,[((0,n.wg)(),(0,n.iD)("div",W,I))])])],64)}const z={class:"d-block d-md-none"},A={class:"mx-2"},S={class:"mx-2"},j={class:"d-none d-md-block"},H={class:"m-5"},E={class:"m-5"};function U(e,t,a,i,s,l){const o=(0,n.up)("MDBIcon"),r=(0,n.up)("MDBBtn");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",z,[(0,n._)("span",A,[(0,n.Wm)(r,{onClick:t[0]||(t[0]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",S,[(0,n.Wm)(r,{onClick:t[1]||(t[1]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-right"})])),_:1},8,["disabled"])])]),(0,n._)("div",j,[(0,n._)("span",H,[(0,n.Wm)(r,{onClick:t[2]||(t[2]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",E,[(0,n.Wm)(r,{onClick:t[3]||(t[3]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-right"})])),_:1},8,["disabled"])])])])}var O=a(6818),F={data(){return{}},props:{prevDisabled:Boolean,nextDisabled:Boolean},name:"CamControls",components:{MDBBtn:O.MDBBtn,MDBIcon:O.MDBIcon}};const R=(0,o.Z)(F,[["render",U]]);var L=R,N={components:{MyCardControls:L},props:{prevDisabled:Boolean,nextDisabled:Boolean}};const V=(0,o.Z)(N,[["render",P],["__scopeId","data-v-8d9f9320"]]);var Z=V;const q=(0,n.Uk)("Analyze the content of your pollen traps!"),Y=(0,n._)("ol",null,[(0,n._)("li",null,"Attach the pollen trap to the hive for a few days."),(0,n._)("li",null,"Harvest the pollen."),(0,n._)("li",null,"Photograph your catch."),(0,n._)("li",null,"(Opt. provide some additional information for scientists)."),(0,n._)("li",null,"Analyze your pollen!")],-1);function G(e,t,a,i,s,l){const o=(0,n.up)("MDBCardTitle"),r=(0,n.up)("MDBCardText"),d=(0,n.up)("MDBCardBody"),c=(0,n.up)("MDBCard");return(0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[q])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[Y])),_:1})])),_:1})])),_:1})}var J={name:"MyCard1",components:{MDBCard:O.MDBCard,MDBCardBody:O.MDBCardBody,MDBCardTitle:O.MDBCardTitle,MDBCardText:O.MDBCardText}};const K=(0,o.Z)(J,[["render",G]]);var X=K,Q=a(7139);const ee=(0,n.Uk)("Support science!"),te=(0,n.Uk)(" You can skip this, however if you feel like saving the bees, please give us additional information about your hive. "),ae=(0,n._)("hr",null,null,-1),ie=(0,n._)("label",{for:"country",class:"form-label"},"Hive's location",-1),ne=(0,n._)("span",{class:"input-group-text border-0",id:"search-addon"},[(0,n._)("i",{class:"fas fa-map-marker-alt"})],-1),se=(0,n._)("span",{class:"input-group-text border-0",id:"search-addon"},[(0,n._)("i",{class:"fas fa-map-marker-alt"})],-1),le=(0,n._)("hr",null,null,-1),oe={for:"duration",class:"form-label"},re=(0,n.Uk)("No. of days the trap was mounted: "),de=(0,n._)("hr",null,null,-1),ce={for:"datepicker",class:"form-label"},ue={style:{"text-align":"center",width:"100%"}};function pe(e,t,a,i,s,l){const o=(0,n.up)("MDBCardTitle"),r=(0,n.up)("MDBCardText"),d=(0,n.up)("MDBInput"),c=(0,n.up)("vue3-slider"),u=(0,n.up)("Datepicker"),p=(0,n.up)("MDBCardBody"),h=(0,n.up)("MDBCard");return(0,n.wg)(),(0,n.j4)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"xtra-padding"},{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[ee])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[te])),_:1}),ae,ie,(0,n.Wm)(d,{id:"country",inputGroup:"",formOutline:!1,wrapperClass:"mb-3",class:"rounded",modelValue:i.input12,"onUpdate:modelValue":t[0]||(t[0]=e=>i.input12=e),"aria-describedby":"search-addon","aria-label":"country",placeholder:"Hive's country"},{prepend:(0,n.w5)((()=>[ne])),_:1},8,["modelValue"]),(0,n.Wm)(d,{inputGroup:"",formOutline:!1,type:"number",wrapperClass:"mb-3",class:"zipCode rounded",modelValue:i.input13,"onUpdate:modelValue":t[1]||(t[1]=e=>i.input13=e),"aria-describedby":"basic-addon4","aria-label":"zipcode",placeholder:"Hive's zip code"},{prepend:(0,n.w5)((()=>[se])),_:1},8,["modelValue"]),le,(0,n._)("label",oe,[re,(0,n._)("b",null,(0,Q.zw)(s.daysMounted),1)]),(0,n.Wm)(c,{id:"duration",trackColor:"#ffa820",color:"#97be11",modelValue:s.daysMounted,"onUpdate:modelValue":t[2]||(t[2]=e=>s.daysMounted=e),handleScale:2.1,min:1,alwaysShowHandle:!0,sticky:!0,max:7,disabled:!1},null,8,["modelValue","handleScale"]),de,(0,n._)("label",ce,"Date of harvest "+(0,Q.zw)(s.date),1),(0,n._)("div",ue,[(0,n.Wm)(u,{id:"datepicker",selectText:"",timePicker:!1,inline:!0,modelValue:s.date,"onUpdate:modelValue":t[3]||(t[3]=e=>s.date=e)},null,8,["modelValue"])])])),_:1})])),_:1})}var he=a(8524),me=a(1716),ve=a.n(me),fe=a(4870),be={name:"MyCard2",data(){return{date:null,daysMounted:3}},components:{MDBCard:O.MDBCard,MDBCardBody:O.MDBCardBody,MDBCardTitle:O.MDBCardTitle,MDBCardText:O.MDBCardText,MDBInput:O.MDBInput,Datepicker:he.Z,"vue3-slider":ve()},setup(){const e=(0,fe.iH)(""),t=(0,fe.iH)(""),a=(0,fe.iH)(""),i=(0,fe.iH)(""),n=(0,fe.iH)(""),s=(0,fe.iH)("");return{input12:e,input13:t,input14:a,input15:i,input16:n,textarea2:s}}};const ge=(0,o.Z)(be,[["render",pe]]);var ye=ge;const De=e=>((0,n.dD)("data-v-33258fcd"),e=e(),(0,n.Cn)(),e),we=(0,n.Uk)("Take or upload a photo!"),_e={class:"fa-ul p-1 py-3"},Ce=De((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),xe=(0,n.Uk)(" Place Pollen on a white, folded piece of paper. "),ke=De((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Me=[ke],Be=De((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),We=(0,n.Uk)(" Pollen should not overlap. "),Te=De((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),$e=[Te],Ie=De((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),Pe=(0,n.Uk)("Avoid casting any shadows. "),ze=De((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Ae=[ze],Se=De((()=>(0,n._)("span",{class:"fa-li"},[(0,n._)("i",{class:"fas fa-check col_green"})],-1))),je=(0,n.Uk)("Avoid flashlight. "),He=De((()=>(0,n._)("i",{class:"fas fa-1x fa-info-circle"},null,-1))),Ee=[He],Ue={class:"row justify-content-evenly"},Oe=De((()=>(0,n._)("div",{class:"col-4 text-center"},[(0,n._)("a",{class:"btn btn-primary btn-lg btn-floating btn-dark",href:"/#main",role:"button"},[(0,n._)("i",{class:"fas fa-camera",style:{}})])],-1))),Fe={class:"col-4 text-center"},Re={for:"file"},Le=De((()=>(0,n._)("i",{class:"fas fa-2x fa-file-upload",style:{}},null,-1))),Ne={type:"file",ref:"fileupload",id:"file",style:{display:"none"},name:"image",accept:"image/jpeg,image/jpg,image/png",multiple:"","data-original-title":"upload photos"},Ve=De((()=>(0,n._)("div",{class:"row justify-content-evenly"},[(0,n._)("div",{class:"col-4 text-center small p-1"},"Open Camera"),(0,n._)("div",{class:"col-4 text-center small p-1"},"Upload File ")],-1)));function Ze(e,t,a,i,s,l){const o=(0,n.up)("MDBCardTitle"),r=(0,n.up)("MDBCardText"),d=(0,n.up)("MDBCardBody"),c=(0,n.up)("MDBCard");return(0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[we])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n._)("ul",_e,[(0,n._)("li",null,[Ce,(0,n._)("p",null,[xe,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Please use DIN A5 paper.",class:"col_green customtooltip","data-mdb-html":"true","data-mdb-placement":"bottom",href:"#!",onClick:t[0]||(t[0]=e=>e.preventDefault())},Me)])]),(0,n._)("li",null,[Be,(0,n._)("p",null,[We,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Overlapping pollen cannot be analyzed.",class:"col_green customtooltip",href:"#!",onClick:t[1]||(t[1]=e=>e.preventDefault())},$e)])]),(0,n._)("li",null,[Ie,(0,n._)("p",null,[Pe,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Daylight works best.",class:"col_green customtooltip",href:"#!",onClick:t[2]||(t[2]=e=>e.preventDefault())},Ae)])]),(0,n._)("li",null,[Se,(0,n._)("p",null,[je,(0,n._)("a",{"data-mdb-toggle":"tooltip",title:"Consider daylight.",class:"col_green customtooltip",href:"#!",onClick:t[3]||(t[3]=e=>e.preventDefault())},Ee)])])])])),_:1}),(0,n._)("div",Ue,[Oe,(0,n._)("div",Fe,[(0,n._)("label",Re,[Le,(0,n._)("input",Ne,null,512)])])]),Ve])),_:1})])),_:1})}var qe={name:"MyCard3",data(){return{date:null}},components:{MDBCard:O.MDBCard,MDBCardBody:O.MDBCardBody,MDBCardTitle:O.MDBCardTitle,MDBCardText:O.MDBCardText},mounted(){const e=this.$refs.fileupload;e.onclick=function(){this.value=null};const t=this.$router;console.log("upload clicked",this.$router),e.addEventListener("change",(function(){console.log("selected");const e=new FileReader;e.addEventListener("load",(function(){const a=e.result;console.log(a),t.push({name:"main",params:{uploaded_image:a}})})),e.readAsDataURL(this.files[0])}))},methods:{}};const Ye=(0,o.Z)(qe,[["render",Ze],["__scopeId","data-v-33258fcd"]]);var Ge=Ye,Je={data(){return{cardId:0,showCards:[!0,!1,!1],prevDisabled:!0,nextDisabled:!1}},methods:{nextCard(){this.showCards[this.cardId]=!1,this.cardId++,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1)},previousCard(){this.showCards[this.cardId]=!1,this.cardId--,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1)}},name:"HomeView",components:{MyFooter:Z,MyCard1:X,MyCard2:ye,MyCard3:Ge,MDBCol:O.MDBCol,MDBRow:O.MDBRow,MDBContainer:O.MDBContainer}};const Ke=(0,o.Z)(Je,[["render",b]]);var Xe=Ke;const Qe=e=>((0,n.dD)("data-v-2b23d9e2"),e=e(),(0,n.Cn)(),e),et={style:{height:"100%",width:"100%"}},tt={key:0,style:{overflow:"hidden"},ref:"errorcontainer",class:"error-container parent"},at={class:"error-close"},it=Qe((()=>(0,n._)("i",{class:"fa fa-times fa-2x"},null,-1))),nt=[it],st={class:"error-content"},lt={key:1,ref:"maincamcontainer",style:{height:"100%",display:"flex"}},ot={key:2,ref:"mainfilecontainer",style:{height:"100%",display:"flex"}},rt={ref:"maindatacontainer",style:{display:"none"}};function dt(e,t,a,i,s,l){const o=(0,n.up)("MainCam"),r=(0,n.up)("MainFile"),d=(0,n.up)("MainData");return(0,n.wg)(),(0,n.iD)("div",et,[s.errorMsg?((0,n.wg)(),(0,n.iD)("div",tt,[(0,n._)("div",at,[(0,n._)("a",{style:{color:"#fbfceb"},href:"#!",onClick:t[0]||(t[0]=e=>{e.preventDefault(),this.errorMsg=null}),role:"button"},nt)]),(0,n._)("div",st,(0,Q.zw)(s.errorMsg),1)],512)):(0,n.kq)("",!0),e.$route.params?.uploaded_image?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",lt,[(0,n.Wm)(o,{onError:t[1]||(t[1]=e=>l.onError(e)),onPhotoAnalyzed:t[2]||(t[2]=e=>l.onPhotoAnalyzed(e))})],512)),e.$route.params?.uploaded_image?((0,n.wg)(),(0,n.iD)("div",ot,[(0,n.Wm)(r,{onError:t[3]||(t[3]=e=>l.onError(e)),onPhotoAnalyzed:t[4]||(t[4]=e=>l.onPhotoAnalyzed(e))})],512)):(0,n.kq)("",!0),(0,n._)("div",rt,[(0,n.Wm)(d,{onRedo:t[5]||(t[5]=e=>l.onRedo()),onError:t[6]||(t[6]=e=>l.onError(e)),pollenData:s.pollenData},null,8,["pollenData"])],512)])}const ct=e=>((0,n.dD)("data-v-704be1bf"),e=e(),(0,n.Cn)(),e),ut={class:"wrapper align-items-center justify-content-center",style:{display:"flex"}},pt={ref:"videocanvas",class:"video-canvas"},ht={ref:"particlediv",class:"particle-div"},mt={class:"video",ref:"videoviewer"},vt={class:"photo-button-container d-block text-center my-3"},ft=["disabled"],bt=ct((()=>(0,n._)("i",{class:"fas fa-camera",style:{}},null,-1))),gt=[bt];function yt(e,t,a,i,s,l){return(0,n.wg)(),(0,n.iD)("div",ut,[(0,n._)("canvas",pt,null,512),(0,n._)("div",ht,null,512),(0,n._)("video",mt,null,512),(0,n._)("div",vt,[(0,n._)("button",{class:"button photo-button",disabled:s.camButtonDisabled,onClick:t[0]||(t[0]=(...e)=>l.TakePhoto&&l.TakePhoto(...e))},gt,8,ft)])])}a(1703);var Dt=a(8905),wt={components:{},data(){return{mediaStream:null,data:null,camButtonDisabled:!1}},props:{},methods:{async StartRecording(){await navigator.mediaDevices.enumerateDevices().catch((e=>{this.$emit("error","Could not retrieve cameras. ("+e+")")}));let e=this.$refs.videoviewer,t=this.$refs.videocanvas,a=this.$refs.particlediv;this.camButtonDisabled=!1,t.style.display="none",a.display="none",e.style.display="block",this.mediaStream=navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:2048},height:{ideal:1536}}}).catch((e=>{this.$emit("error","Could not start camera. ("+e+")")})).then((t=>(this.mediaStream=t,e.srcObject=this.mediaStream,e.play().catch((e=>{this.$emit("error","Could not start playing camera stream. ("+e+")")})))))},async TakePhoto(){this.$route?.params?.uploaded_image,console.log("sd");let e=this.$refs.videoviewer,t=this.$refs.videocanvas,a=this.$refs.particlediv;this.camButtonDisabled=!0;const i=t.getContext("2d");i.canvas.width=e.videoWidth,i.canvas.height=e.videoHeight;let n=e.videoWidth,s=e.videoHeight;i.drawImage(e,0,0,n,s);let l=e.clientWidth,o=t.toDataURL();console.log("retireved img:",this.$route.params);let r=s/n;e.style.display="none",t.style.display="block",t.style.width="100%",a.style.display="block",a.innerHTML="",a.style.width=l+"px",a.style.height=l*r+"px";var d={particleColor:"#ffa820",background:o,interactive:!0,speed:"fast",density:"high"};new Dt.ParticleNetwork(a,d);const c={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({img:o})},u=this.mediaStream.getVideoTracks();u.forEach((e=>{e.stop()})),fetch("https://chicks.ddnss.org:5000/find_pollen",c).then((e=>{let t=e.json();return a.innerHTML="",a.style.display="none",t})).then((e=>{if(console.log("emitted",e),!e){const e="Could contact AI-server.";throw console.log(e),new Error(e)}e["dataURL"]=o,e["imgWidth"]=n,e["imgHeight"]=s,this.$emit("photoAnalyzed",e)})).catch((e=>{this.$emit("error","Could not retrieve pollen analysis. ("+e+")"),a.innerHTML="",a.style.display="none",this.StartRecording()}))}},async mounted(){await this.StartRecording().catch((e=>{this.$emit("error","Could not start camera. ("+e+")")}))}};const _t=(0,o.Z)(wt,[["render",yt],["__scopeId","data-v-704be1bf"]]);var Ct=_t;const xt={ref:"datawrapper"},kt=(0,n._)("img",{class:"mx-auto my-4",style:{"max-width":"500px"},src:p},null,-1),Mt={key:0},Bt={ref:"annotationcanvas",class:"annotation-canvas"},Wt={key:0},Tt=["src"],$t={key:0},It=(0,n._)("div",{class:"cluster-img-wrapper"},[(0,n._)("div",{class:"cluster-img"},"primary pollen colors per cluster"),(0,n._)("div",{class:"cluster-img"},"secondary pollen colors per cluster")],-1),Pt={key:0},zt=(0,n._)("div",{style:{"text-align":"center","margin-bottom":"-50px",color:"#888"}},"outliers",-1),At=(0,n._)("hr",{class:"outliers"},null,-1),St=[zt,At],jt={style:{color:"#888"}},Ht=["src"],Et=["src"];function Ut(e,t,a,s,l,o){const r=(0,n.up)("MDBRow"),d=(0,n.up)("MDBCol"),c=(0,n.up)("MDBCardTitle"),u=(0,n.up)("MDBCardText"),p=(0,n.up)("MDBCardBody"),h=(0,n.up)("MDBCard"),m=(0,n.up)("vue3-slider"),v=(0,n.up)("MDBContainer"),f=(0,n.up)("CamFooter");return(0,n.wg)(),(0,n.iD)("div",xt,[(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{md:"12",class:"mx-auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[kt])),_:1}),(0,n.Wm)(r)])),_:1})])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i.uT,{appear:"",name:"bounce",onAfterEnter:t[0]||(t[0]=e=>o.showAnnotations(a.pollenData))},{default:(0,n.w5)((()=>[l.showCards[0]?((0,n.wg)(),(0,n.iD)("p",Mt,[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,Q.zw)(a.pollenData?.pollen?.n_pollen)+" colorful pollen detected.",1)])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n._)("canvas",Bt,null,512)])),_:1})])),_:1})])),_:1})])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{appear:"",name:"bounce",onAfterEnter:t[1]||(t[1]=e=>o.showForceGraph())},{default:(0,n.w5)((()=>[l.showCards[1]?((0,n.wg)(),(0,n.iD)("p",Wt,[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,Q.zw)(a.pollenData?.pollen?.clusters?.n_clusters_predicted)+" clusters and "+(0,Q.zw)(a.pollenData?.pollen?.clusters?.n_outliers_predicted)+" outliers detected.",1)])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n._)("img",{src:a.pollenData?.pollen?.clusters?.dendrogram,style:{width:"100%"}},null,8,Tt)])),_:1})])),_:1})])),_:1})])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(i.uT,{appear:"",name:"bounce"},{default:(0,n.w5)((()=>[l.showCards[2]?((0,n.wg)(),(0,n.iD)("p",$t,[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{trackColor:"#ffa820",color:"#97be11",tooltip:!0,onDragEnd:o.showClusters,modelValue:l.nCluster,"onUpdate:modelValue":t[2]||(t[2]=e=>l.nCluster=e),handleScale:3,min:1,alwaysShowHandle:!0,sticky:!0,max:19},null,8,["onDragEnd","modelValue"]),(0,n._)("div",null,[It,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.pollenData?.pollen?.clusters?.cluster_imgs[l.nCluster],((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"cluster-img-wrapper",key:e},[t>1&&a.pollenData?.pollen?.clusters?.cluster_imgs[l.nCluster][t-1].cluster_size>1&&1==e.cluster_size?((0,n.wg)(),(0,n.iD)("div",Pt,St)):(0,n.kq)("",!0),(0,n._)("div",jt,"cluster "+(0,Q.zw)(t+1)+" (n="+(0,Q.zw)(e.cluster_size)+")",1),(0,n._)("img",{src:e.cluster_img_primary,class:"cluster-img"},null,8,Ht),(0,n._)("img",{src:e.cluster_img_secondary,class:"cluster-img"},null,8,Et)])))),128))])])),_:1})])),_:1})])),_:1})])):(0,n.kq)("",!0)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(f,{onNextCard:t[3]||(t[3]=e=>o.nextCard()),onPreviousCard:t[4]||(t[4]=e=>o.previousCard()),onRedo:t[5]||(t[5]=t=>e.$emit("redo")),prevDisabled:l.prevDisabled,nextDisabled:l.nextDisabled,redoDisabled:e.redoDisabled},null,8,["prevDisabled","nextDisabled","redoDisabled"])],512)}const Ot={style:{color:"white",position:"fixed",bottom:"0",width:"100%"},class:"d-block d-md-none"},Ft={class:"text-center p-1",style:{"background-image":"linear-gradient(to top,rgba(151, 190, 17, 1),rgba(151, 190, 17, 0.3),rgba(251,252,235, 0))"}},Rt={key:0,class:"text-center bgcol_green",style:{width:"100%","min-height":"1em"}},Lt={style:{width:"100%"},class:"d-none d-md-block text-center"},Nt={style:{color:"white",position:"fixed",bottom:"0",width:"100%"}},Vt={key:0,class:"text-center bgcol_dark text-smaller",style:{width:"100%","min-height":"1em"}};function Zt(e,t,a,i,s,l){const o=(0,n.up)("CamControls");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",Ot,[(0,n._)("div",Ft,[(0,n.Wm)(o,{onNextCard:t[0]||(t[0]=t=>e.$emit("nextCard")),onPreviousCard:t[1]||(t[1]=t=>e.$emit("previousCard")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled,onRedo:t[2]||(t[2]=t=>e.$emit("redo"))},null,8,["nextDisabled","prevDisabled"])]),((0,n.wg)(),(0,n.iD)("div",Rt," © 2022 Pollenyzer "))]),(0,n._)("div",Lt,[(0,n.Wm)(o,{onNextCard:t[3]||(t[3]=t=>e.$emit("nextCard")),onPreviousCard:t[4]||(t[4]=t=>e.$emit("previousCard")),onRedo:t[5]||(t[5]=t=>e.$emit("redo")),nextDisabled:a.nextDisabled,prevDisabled:a.prevDisabled,redoDisabled:a.redoDisabled},null,8,["nextDisabled","prevDisabled","redoDisabled"]),(0,n._)("div",Nt,[((0,n.wg)(),(0,n.iD)("div",Vt," © 2022 Pollenyzer "))])])],64)}const qt={class:"d-block d-md-none"},Yt={class:"mx-2"},Gt={class:"mx-2"},Jt={class:"mx-2"},Kt={class:"d-none d-md-block"},Xt={class:"m-5"},Qt={class:"m-5"},ea={class:"m-5"};function ta(e,t,a,i,s,l){const o=(0,n.up)("MDBIcon"),r=(0,n.up)("MDBBtn");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",qt,[(0,n._)("span",Yt,[(0,n.Wm)(r,{onClick:t[0]||(t[0]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",Gt,[(0,n.Wm)(r,{onClick:t[1]||(t[1]=t=>e.$emit("redo")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.redoDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"redo"})])),_:1},8,["disabled"])]),(0,n._)("span",Jt,[(0,n.Wm)(r,{onClick:t[2]||(t[2]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-right"})])),_:1},8,["disabled"])])]),(0,n._)("div",Kt,[(0,n._)("span",Xt,[(0,n.Wm)(r,{onClick:t[3]||(t[3]=t=>e.$emit("previousCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.prevDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-left"})])),_:1},8,["disabled"])]),(0,n._)("span",Qt,[(0,n.Wm)(r,{onClick:t[4]||(t[4]=t=>e.$emit("redo")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.redoDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"redo"})])),_:1},8,["disabled"])]),(0,n._)("span",ea,[(0,n.Wm)(r,{onClick:t[5]||(t[5]=t=>e.$emit("nextCard")),class:"mx-auto btn-dark mx-2",floating:"",disabled:a.nextDisabled},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"angle-right"})])),_:1},8,["disabled"])])])])}var aa={data(){return{}},props:{prevDisabled:Boolean,nextDisabled:Boolean,redoDisabled:Boolean},name:"CamControls",components:{MDBBtn:O.MDBBtn,MDBIcon:O.MDBIcon}};const ia=(0,o.Z)(aa,[["render",ta]]);var na=ia,sa={name:"CamFooter",components:{CamControls:na},props:{prevDisabled:Boolean,nextDisabled:Boolean,redoDisabled:Boolean}};const la=(0,o.Z)(sa,[["render",Zt],["__scopeId","data-v-21e8e934"]]);var oa=la,ra=(a(856),a(741));ra.kL.register(ra.qi,ra.jn,ra.ZL,ra.od,ra.vn,ra.N0,ra.jI,ra.ST,ra.tt,ra.CV,ra.Xi,ra.ho,ra.uw,ra.f$,ra.WV,ra.l7,ra.FB,ra.RM,ra.WY,ra.Gu,ra.De,ra.Dx,ra.u,ra.DK);var da={components:{MDBCol:O.MDBCol,MDBRow:O.MDBRow,MDBContainer:O.MDBContainer,MDBCard:O.MDBCard,MDBCardBody:O.MDBCardBody,MDBCardTitle:O.MDBCardTitle,MDBCardText:O.MDBCardText,CamFooter:oa,"vue3-slider":ve()},props:{pollenData:Object},data(){return{showCards:[!0,!1,!1],cardId:0,maxClusters:2,nCluster:1,barChart:null,inProgress:!1,prevDisabled:!0,nextDisabled:!1}},mounted(){},watch:{pollenData(e,t){this.showAnnotations(e)}},methods:{async showClusters(e){},showForceGraph(){},showAnnotations(e){if(e){this.nCluster=this.pollenData.pollen.clusters.n_clusters_predicted+this.pollenData.pollen.clusters.n_outliers_predicted;let a=this.$refs.annotationcanvas;const i=a.getContext("2d");i.canvas.width=e.pollen.img_width,i.canvas.height=e.pollen.img_height;var t=new Image;t.onload=function(){i.drawImage(t,0,0,e.pollen.img_width,e.pollen.img_height),i.beginPath(),i.lineWidth=10,i.strokeStyle="#ffa820",i.rect(e.pollen.annotations.rect.upperleft_x,e.pollen.annotations.rect.upperleft_y,e.pollen.annotations.rect.width,e.pollen.annotations.rect.height),i.stroke();for(let t=0;t<e.pollen.annotations.coords.length;t++){let a=e.pollen.annotations.coords[t],n=e.pollen.annotations.str_colors[t];const s=a.x,l=a.y,o=e.pollen.dimension;console.log(s,l,n),i.beginPath(),i.arc(s,l,o,0,2*Math.PI,!1),i.fillStyle=n,i.lineWidth=10,i.strokeStyle=n,i.stroke()}},t.src=e.dataURL}},nextCard(){this.showCards[this.cardId]=!1,this.cardId++,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1),0==this.cardId||this.cardId},previousCard(){this.showCards[this.cardId]=!1,this.cardId--,this.showCards[this.cardId]=!0,0===this.cardId?(this.prevDisabled=!0,this.nextDisabled=!1):2===this.cardId?(this.prevDisabled=!1,this.nextDisabled=!0):(this.prevDisabled=!1,this.nextDisabled=!1),0==this.cardId||this.cardId}}};const ca=(0,o.Z)(da,[["render",Ut]]);var ua=ca;const pa=e=>((0,n.dD)("data-v-bd7bcd9e"),e=e(),(0,n.Cn)(),e),ha={class:"wrapper align-items-center justify-content-center",style:{display:"flex"}},ma={ref:"particledivfile",class:"particle-div"},va=["src"],fa={class:"photo-button-container d-block text-center my-3"},ba=["disabled"],ga=pa((()=>(0,n._)("i",{class:"fas fa-diagnoses",style:{}},null,-1))),ya=[ga];function Da(e,t,a,i,s,l){return(0,n.wg)(),(0,n.iD)("div",ha,[(0,n._)("div",ma,null,512),(0,n._)("img",{class:"image",ref:"imgviewer",src:this.$route.params.uploaded_image},null,8,va),(0,n._)("div",fa,[(0,n._)("button",{class:"button photo-button",disabled:s.camButtonDisabled,onClick:t[0]||(t[0]=(...e)=>l.analyzeUpload&&l.analyzeUpload(...e))},ya,8,ba)])])}var wa={components:{},data(){return{data:null,camButtonDisabled:!1}},props:{},methods:{async analyzeUpload(){let e=this.$refs.imgviewer,t=e.width,a=e.height,i=this.$refs.particledivfile,n=this.$route.params.uploaded_image;this.camButtonDisabled=!0,i.style.display="block",i.innerHTML="",i.style.width="100%";let s=a/t;i.style.display="block",i.innerHTML="",i.style.width=e.clientWidth+"px",i.style.height=e.clientWidth*s+"px";var l={particleColor:"#ffa820",background:n,interactive:!0,speed:"fast",density:"high"};new Dt.ParticleNetwork(i,l);const o={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({img:n})};fetch("https://chicks.ddnss.org:5000/find_pollen",o).then((e=>{let t=e.json();return i.innerHTML="",i.style.display="none",t})).then((e=>{if(console.log("emitted",e),!e){const e="Could contact AI-server.";throw console.log(e),new Error(e)}e["dataURL"]=n,e["imgWidth"]=t,e["imgHeight"]=a,this.camButtonDisabled=!1,this.$emit("photoAnalyzed",e)})).catch((e=>{this.$emit("error","Could not retrieve pollen analysis. ("+e+")"),i.innerHTML="",i.style.display="none",router.push({name:"main",params:{uploaded_image:uploaded_image}})}))}},async mounted(){}};const _a=(0,o.Z)(wa,[["render",Da],["__scopeId","data-v-bd7bcd9e"]]);var Ca=_a,xa={components:{MainCam:Ct,MainData:ua,MainFile:Ca},mounted(){},setup(){},data(){return{pollenData:void 0,errorMsg:null,errorZIndex:10}},methods:{onRedo(){this.$router.push("/")},onError(e){console.log("retrieved error",e),this.errorMsg=e,setTimeout((()=>{this.$refs.errorcontainer.style.zIndex=++this.errorZIndex}),200)},onPhotoAnalyzed(e){console.log("data retrieved");try{this.$refs.maincamcontainer.style.display="none"}catch{}try{this.$refs.mainfilecontainer.style.display="none"}catch{}this.$refs.maindatacontainer.style.display="block",this.pollenData=e}}};const ka=(0,o.Z)(xa,[["render",dt],["__scopeId","data-v-2b23d9e2"]]);var Ma=ka;const Ba=[{path:"/",name:"home",component:Xe},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,9757))},{path:"/main",name:"main",component:Ma}],Wa=(0,u.p7)({history:(0,u.r5)(),routes:Ba});var Ta=Wa,$a=a(6735);(0,i.ri)(d).use(Ta).use($a.Z).mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,s){if(!i){var l=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],s=e[c][2];for(var o=!0,r=0;r<i.length;r++)(!1&s||l>=s)&&Object.keys(a.O).every((function(e){return a.O[e](i[r])}))?i.splice(r--,1):(o=!1,s<l&&(l=s));if(o){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,i){return a.f[i](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.4c6d6763.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="pollenyzer:";a.l=function(i,n,s,l){if(e[i])e[i].push(n);else{var o,r;if(void 0!==s)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+s){o=u;break}}o||(r=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+s),o.src=i),e[i]=[n];var p=function(t,a){o.onerror=o.onload=null,clearTimeout(h);var n=e[i];if(delete e[i],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(e){return e(a)})),t)return t(a)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),r&&document.head.appendChild(o)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.f.j=function(t,i){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var s=new Promise((function(a,i){n=e[t]=[a,i]}));i.push(n[2]=s);var l=a.p+a.u(t),o=new Error,r=function(i){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var s=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+l+")",o.name="ChunkLoadError",o.type=s,o.request=l,n[1](o)}};a.l(l,r,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,l=i[0],o=i[1],r=i[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(r)var c=r(a)}for(t&&t(i);d<l.length;d++)s=l[d],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},i=self["webpackChunkpollenyzer"]=self["webpackChunkpollenyzer"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(5032)}));i=a.O(i)})();
//# sourceMappingURL=app.529565c5.js.map