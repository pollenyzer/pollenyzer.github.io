if(!self.define){let e,i={};const a=(a,o)=>(a=new URL(a+".js",o).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(o,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let d={};const g=e=>a(e,n),s={module:{uri:n},exports:d,require:g};i[n]=Promise.all(o.map((e=>s[e]||g(e)))).then((e=>(r(...e),d)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pollenyzer"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.8c5c52ea.css",revision:null},{url:"/img/android/android-launchericon-144-144.png",revision:"bebb5d6a678d9e44d31a373211a5a564"},{url:"/img/android/android-launchericon-192-192.png",revision:"fea72f625d4215581b985fbd2f9d634e"},{url:"/img/android/android-launchericon-48-48.png",revision:"277b439defeb398155851ad38152cd31"},{url:"/img/android/android-launchericon-512-512.png",revision:"f92d2c3e99e60ba8337d3fc01ae70285"},{url:"/img/android/android-launchericon-72-72.png",revision:"24e0f3e5393f00455913f0e6f1edf77d"},{url:"/img/android/android-launchericon-96-96.png",revision:"85c4096ede05cf5b0968133ade7a3684"},{url:"/img/icons.json",revision:"5dbbc3fe59816e65ba28e355a58ea45c"},{url:"/img/ios/100.png",revision:"8683fb1922c3b13fed7cac32447b1eaa"},{url:"/img/ios/1024.png",revision:"526762b64819d5976c6f34add58630a2"},{url:"/img/ios/114.png",revision:"70802625cb9101280d667792209c1dfb"},{url:"/img/ios/120.png",revision:"d1f79400b23d31f9f22dfdc3d46b5ec4"},{url:"/img/ios/128.png",revision:"3f7b903c8dcb7170439c0a0e8996703b"},{url:"/img/ios/144.png",revision:"bebb5d6a678d9e44d31a373211a5a564"},{url:"/img/ios/152.png",revision:"38f08a08e5e5af6b43f970969dd7c87b"},{url:"/img/ios/16.png",revision:"2c0ec7e3b886ed6f90074d280fb47d7a"},{url:"/img/ios/167.png",revision:"0b28238a9d620e93382e795d109cc607"},{url:"/img/ios/180.png",revision:"ad9dda02efbc71a741975d5543095fe7"},{url:"/img/ios/192.png",revision:"fea72f625d4215581b985fbd2f9d634e"},{url:"/img/ios/20.png",revision:"1c7ac71409089947fe9141630429cd4b"},{url:"/img/ios/256.png",revision:"2858baca3bea266ef5ebdb5efcfa85e4"},{url:"/img/ios/29.png",revision:"c59fcaad36816445bc8eacf950e78a22"},{url:"/img/ios/32.png",revision:"c24af8100c7444a892be7f1ed0580464"},{url:"/img/ios/40.png",revision:"c7d594edb6ff5fe894238118305924df"},{url:"/img/ios/50.png",revision:"9c3b89a3dacb5294f4279249eb823812"},{url:"/img/ios/512.png",revision:"f92d2c3e99e60ba8337d3fc01ae70285"},{url:"/img/ios/57.png",revision:"6c34bfbec3a3cebbac5ca3c5d7e9c43a"},{url:"/img/ios/58.png",revision:"094bbdb687ec10fcdb652028e715ef7e"},{url:"/img/ios/60.png",revision:"cc81bcb59fdcade9be401ca4349dc3ef"},{url:"/img/ios/64.png",revision:"9c8fefdf22db18b0a5412777c33a51b9"},{url:"/img/ios/72.png",revision:"24e0f3e5393f00455913f0e6f1edf77d"},{url:"/img/ios/76.png",revision:"f83b2a106b412eacababc4cd45833956"},{url:"/img/ios/80.png",revision:"40c689e855956ae4d610fcd314dc5818"},{url:"/img/ios/87.png",revision:"3480bfc24edd8ac085023c10e31424fc"},{url:"/img/pollen_marker.b21e44ff.svg",revision:null},{url:"/img/pollenyzer_favicon.svg",revision:"b5536e846f750839ee5cffece01fac9e"},{url:"/img/pollenyzer_favicon16x16.png",revision:"c8fd6f50a9fa6919a872da8b852bfec6"},{url:"/img/pollenyzer_favicon32x32.png",revision:"e8dcd8bd2c7111db388fca3d524c9490"},{url:"/img/pollenyzer_logo.8c6997e9.svg",revision:null},{url:"/img/windows11/LargeTile.scale-100.png",revision:"7e26fd8a2fbe93b325429ce14452f724"},{url:"/img/windows11/LargeTile.scale-125.png",revision:"5bbcb457f8170180a4131c93aa91f588"},{url:"/img/windows11/LargeTile.scale-150.png",revision:"424678154ce56adb8f426902e9948097"},{url:"/img/windows11/LargeTile.scale-200.png",revision:"d307d8a9d39d74ab55512035655179bd"},{url:"/img/windows11/LargeTile.scale-400.png",revision:"3dc78c5cc7e645756182cbe0305603c4"},{url:"/img/windows11/SmallTile.scale-100.png",revision:"ad0b2ca3ff0eae896aa574a30070b254"},{url:"/img/windows11/SmallTile.scale-125.png",revision:"a536b7bc9f97ef3deb8f5761e58bb7f1"},{url:"/img/windows11/SmallTile.scale-150.png",revision:"844393f51ece2d32d99edf37b614872d"},{url:"/img/windows11/SmallTile.scale-200.png",revision:"85858dcd3d928ea2716a91aad6d5d0fc"},{url:"/img/windows11/SmallTile.scale-400.png",revision:"52d3f175d10eebec9b2509555db6c3c6"},{url:"/img/windows11/SplashScreen.scale-100.png",revision:"c3286b0ba4fbbe0f1f0c4754c1e0f8aa"},{url:"/img/windows11/SplashScreen.scale-125.png",revision:"f04ba1806a095ad2483ee7902a27a8d9"},{url:"/img/windows11/SplashScreen.scale-150.png",revision:"682e8fabafb9a991d5ad8ac3f8b54019"},{url:"/img/windows11/SplashScreen.scale-200.png",revision:"d566707bbd7112bc1b00e2f288f6950a"},{url:"/img/windows11/SplashScreen.scale-400.png",revision:"bd685626ab0dd6cce7ea50c54589a6c4"},{url:"/img/windows11/Square150x150Logo.scale-100.png",revision:"558da59a3cba3908c9267f37ffc4cb31"},{url:"/img/windows11/Square150x150Logo.scale-125.png",revision:"9c932bdd22b297d9fdc3a6cec1f19b43"},{url:"/img/windows11/Square150x150Logo.scale-150.png",revision:"a255033b8b12ce96a9f73e80c6b44236"},{url:"/img/windows11/Square150x150Logo.scale-200.png",revision:"7950e4d2f7f17286a99a416aaeac0369"},{url:"/img/windows11/Square150x150Logo.scale-400.png",revision:"213688f3af0d612e7e1700f851de962c"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"d256736da9e6ed7b85a9f24c2e8e2213"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"0061b5e52c56882f9c2161f577d79e72"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"8247ac6a5b8d409387f929a816c6fe5e"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"a99b783b2e0458008cf82aac6e32c2ac"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"034e4622e93f7282e3b5e046d76f91e5"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"a5ff90bb6c90f8f58d3f09ae7ebd1256"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"638c1b4b8b8cf8f59deab7d248a6a23e"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"ffb8e8a1129fa0437cc2f2deb2fce4c6"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"629e3d09b445c46f27b9f6cf008f7c9c"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"94874733cdfc5eeba8d9211a41dc7010"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"22291bdfc995b982202661c873ba4639"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"871ba836a5d00d79ae3d6512e20ba301"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"9e443a47ed7a400f8a8c2ba824e09809"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"2012d74a1b6e2745ecff19eb3f93be6f"},{url:"/img/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"8acf07460413a483e508718683473a68"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"d256736da9e6ed7b85a9f24c2e8e2213"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"0061b5e52c56882f9c2161f577d79e72"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"8247ac6a5b8d409387f929a816c6fe5e"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"a99b783b2e0458008cf82aac6e32c2ac"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"034e4622e93f7282e3b5e046d76f91e5"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"a5ff90bb6c90f8f58d3f09ae7ebd1256"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"638c1b4b8b8cf8f59deab7d248a6a23e"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"ffb8e8a1129fa0437cc2f2deb2fce4c6"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"629e3d09b445c46f27b9f6cf008f7c9c"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"94874733cdfc5eeba8d9211a41dc7010"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"22291bdfc995b982202661c873ba4639"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"871ba836a5d00d79ae3d6512e20ba301"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"9e443a47ed7a400f8a8c2ba824e09809"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"2012d74a1b6e2745ecff19eb3f93be6f"},{url:"/img/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"8acf07460413a483e508718683473a68"},{url:"/img/windows11/Square44x44Logo.scale-100.png",revision:"629e3d09b445c46f27b9f6cf008f7c9c"},{url:"/img/windows11/Square44x44Logo.scale-125.png",revision:"63d52c373c17f67a30090e189d47c99f"},{url:"/img/windows11/Square44x44Logo.scale-150.png",revision:"0d64d5fa9a1a97487b18fe1b86058ad1"},{url:"/img/windows11/Square44x44Logo.scale-200.png",revision:"ba5f66519b35c15bde6c130710a66aa4"},{url:"/img/windows11/Square44x44Logo.scale-400.png",revision:"67602d4a29f8f763a3854fbb990d6d31"},{url:"/img/windows11/Square44x44Logo.targetsize-16.png",revision:"d256736da9e6ed7b85a9f24c2e8e2213"},{url:"/img/windows11/Square44x44Logo.targetsize-20.png",revision:"0061b5e52c56882f9c2161f577d79e72"},{url:"/img/windows11/Square44x44Logo.targetsize-24.png",revision:"8247ac6a5b8d409387f929a816c6fe5e"},{url:"/img/windows11/Square44x44Logo.targetsize-256.png",revision:"a99b783b2e0458008cf82aac6e32c2ac"},{url:"/img/windows11/Square44x44Logo.targetsize-30.png",revision:"034e4622e93f7282e3b5e046d76f91e5"},{url:"/img/windows11/Square44x44Logo.targetsize-32.png",revision:"a5ff90bb6c90f8f58d3f09ae7ebd1256"},{url:"/img/windows11/Square44x44Logo.targetsize-36.png",revision:"638c1b4b8b8cf8f59deab7d248a6a23e"},{url:"/img/windows11/Square44x44Logo.targetsize-40.png",revision:"ffb8e8a1129fa0437cc2f2deb2fce4c6"},{url:"/img/windows11/Square44x44Logo.targetsize-44.png",revision:"629e3d09b445c46f27b9f6cf008f7c9c"},{url:"/img/windows11/Square44x44Logo.targetsize-48.png",revision:"94874733cdfc5eeba8d9211a41dc7010"},{url:"/img/windows11/Square44x44Logo.targetsize-60.png",revision:"22291bdfc995b982202661c873ba4639"},{url:"/img/windows11/Square44x44Logo.targetsize-64.png",revision:"871ba836a5d00d79ae3d6512e20ba301"},{url:"/img/windows11/Square44x44Logo.targetsize-72.png",revision:"9e443a47ed7a400f8a8c2ba824e09809"},{url:"/img/windows11/Square44x44Logo.targetsize-80.png",revision:"2012d74a1b6e2745ecff19eb3f93be6f"},{url:"/img/windows11/Square44x44Logo.targetsize-96.png",revision:"8acf07460413a483e508718683473a68"},{url:"/img/windows11/StoreLogo.scale-100.png",revision:"9c3b89a3dacb5294f4279249eb823812"},{url:"/img/windows11/StoreLogo.scale-125.png",revision:"3debf9cc9da52b1698f2166be4a91fd2"},{url:"/img/windows11/StoreLogo.scale-150.png",revision:"6b7c0410b22e681fe0bb6a6fb2ecfcee"},{url:"/img/windows11/StoreLogo.scale-200.png",revision:"8683fb1922c3b13fed7cac32447b1eaa"},{url:"/img/windows11/StoreLogo.scale-400.png",revision:"e3c9fee02af1187d19f98fb0558e98c3"},{url:"/img/windows11/Wide310x150Logo.scale-100.png",revision:"deba9ac880bd5c5622c13701b247849d"},{url:"/img/windows11/Wide310x150Logo.scale-125.png",revision:"7b327779468db45b92b18684e0f35adc"},{url:"/img/windows11/Wide310x150Logo.scale-150.png",revision:"a0a7da78dc0f503f34c466f9a51651ce"},{url:"/img/windows11/Wide310x150Logo.scale-200.png",revision:"c3286b0ba4fbbe0f1f0c4754c1e0f8aa"},{url:"/img/windows11/Wide310x150Logo.scale-400.png",revision:"d566707bbd7112bc1b00e2f288f6950a"},{url:"/index.html",revision:"0df1cbe3245bee0efc4e14ebd6c81509"},{url:"/js/app.5f88b159.js",revision:null},{url:"/js/chunk-vendors.28fd8fcf.js",revision:null},{url:"/manifest.json",revision:"a25efac78bd6d4d195c53bbc8d356d00"},{url:"/models/m08_00/group1-shard1of1.bin",revision:"2ffa53d95280d1657b6a3897f9e886b6"},{url:"/models/m08_00/model.json",revision:"67c0556796492183cf6bac68e6c34931"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
