if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const t=e=>a(e,d),f={module:{uri:d},exports:r,require:t};s[d]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-cc9d59eb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-392add74.js",revision:"9bb763c4c841ee09970e5cdeb67eb6ce"},{url:"assets/404.html-d1c4e391.js",revision:"1e04ecc6de9e08849b63bb3a52a707d3"},{url:"assets/achievements.html-111df6f1.js",revision:"cd16ee917485a365c33af54aecbcb665"},{url:"assets/achievements.html-7e466c8a.js",revision:"38d58fb41bb5c2f37650175b1f136f2a"},{url:"assets/achievements.html-9522b5f8.js",revision:"2b96b0be1fda9aca42579d222becda5a"},{url:"assets/achievements.html-c513ff85.js",revision:"13257bfad14af1e5690c6d22726e7986"},{url:"assets/app-dddc4fb8.js",revision:"b6eb596015bf4ee40008f8825b1d3dd2"},{url:"assets/bug-report.html-4e9d3984.js",revision:"b5a7581c7b405c25b12161a867bb8a2d"},{url:"assets/bug-report.html-a5769e9d.js",revision:"f31b647e646f17becdec17eaf6886c9e"},{url:"assets/bug-report.html-be008402.js",revision:"abf7a78f0ac7aa1be94d5c6cbe93a779"},{url:"assets/bug-report.html-c921e978.js",revision:"fb265c6edef93fcd2426430df9f1d4aa"},{url:"assets/character-data.html-37eb819e.js",revision:"3e5b569274862284c047f18ec908841b"},{url:"assets/character-data.html-a8002393.js",revision:"2254e17d350c40120ae8d189e7df1cb4"},{url:"assets/character-data.html-bcb1d08c.js",revision:"db4689f23536bd666f3fffdceb2f5a6e"},{url:"assets/character-data.html-d19c231c.js",revision:"242f391edb9a6cd8acf12141cef45385"},{url:"assets/character-wiki.html-05003755.js",revision:"ab52b322ed26a90820f8f108704122bb"},{url:"assets/character-wiki.html-47702f57.js",revision:"b4760002d1579c1b0a7ffada4283143f"},{url:"assets/character-wiki.html-6f6ce2c3.js",revision:"7a2ea3fd8c7dd73fb1b1be46970c3a42"},{url:"assets/character-wiki.html-bff675d5.js",revision:"50874c928f91842cc937aa04116068fd"},{url:"assets/community.html-38c7becc.js",revision:"84d7a3611cff3b914e16743cfede8143"},{url:"assets/community.html-5d989c81.js",revision:"18bf908184bfc9210c4ab9b6c9dabbf1"},{url:"assets/community.html-77c874f1.js",revision:"80385e26f23e97b5719d3404dfbb7434"},{url:"assets/community.html-8264ee0b.js",revision:"e9ee1ce788ea63a9685db2bf0f1bb561"},{url:"assets/component-0205f978.js",revision:"c38646165227e365b8737fb783b2c900"},{url:"assets/dashboard.html-22f8c199.js",revision:"fad5e19f66a4a3d3f59e9f7d08403d59"},{url:"assets/dashboard.html-2499d39c.js",revision:"3c27a70183e9922586ca23705be64128"},{url:"assets/dashboard.html-98b51e54.js",revision:"7d1d51e36a4d440bc6e0b84283ef77a9"},{url:"assets/dashboard.html-a23f348c.js",revision:"c919eaa0d80a984d66646113b5550c21"},{url:"assets/develop-plan.html-6e34fa5d.js",revision:"3b32de3c97f7b1dff3b874951310dafa"},{url:"assets/develop-plan.html-a870290b.js",revision:"1e830251f967557f0da931f9c8217b2c"},{url:"assets/develop-plan.html-e7652959.js",revision:"e98ff1ca7f1019c27baef566d27c1a26"},{url:"assets/develop-plan.html-e7866253.js",revision:"c4e78a95901b820c9e76815abc987241"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/exceptions.html-44b0164a.js",revision:"5643b2ce6615a5a46f608c3749d52d4c"},{url:"assets/exceptions.html-44fb45f0.js",revision:"a1e9a6acb15a92d57d899f192fc00ad8"},{url:"assets/exceptions.html-8157d8c2.js",revision:"7754ffd0bf01f4d3058f9b5ef33abae4"},{url:"assets/exceptions.html-ef765121.js",revision:"beaab0bf557279326b74d06f90af1899"},{url:"assets/FAQ.html-20216826.js",revision:"0116e4a52aceee7b00598ee061f77144"},{url:"assets/FAQ.html-77b73d8a.js",revision:"5f8536f9094b1fc106a9a9b9c53b0116"},{url:"assets/FAQ.html-c926dafc.js",revision:"a1c612751fbc25e213758ddafcebf920"},{url:"assets/FAQ.html-d6fcc8da.js",revision:"868527bf6635cd1bc2e6d7dc63a5e661"},{url:"assets/Gacha-system-and-export-principal.html-35e3a9ed.js",revision:"3c3638cd085125cce959f5e7ebeef47c"},{url:"assets/Gacha-system-and-export-principal.html-ad2b3c2d.js",revision:"3c3294da7820cf857f3680309a46200b"},{url:"assets/Gacha-system-and-export-principal.html-cf17a2c3.js",revision:"eecbaf6026c57f9c740c930e5d69c6ea"},{url:"assets/Gacha-system-and-export-principal.html-eff6c983.js",revision:"3c3294da7820cf857f3680309a46200b"},{url:"assets/game-launcher.html-0c7b2319.js",revision:"22d181909eb2a3d69b31c2e579e0c207"},{url:"assets/game-launcher.html-2f704534.js",revision:"2acd0549caa8fcd668a351e09a0bb9d9"},{url:"assets/game-launcher.html-56b7cc24.js",revision:"7e5030254ad7f950babfbb439bd3413d"},{url:"assets/game-launcher.html-d7fe4a18.js",revision:"dd23b3227981340087b22714ecc8b427"},{url:"assets/get-stoken-cookie-from-the-third-party.html-7c0dd482.js",revision:"49984ee127d6f7b192a8ecd02a6cf5b0"},{url:"assets/get-stoken-cookie-from-the-third-party.html-8094a1b4.js",revision:"c7f16efc787ee3a73d4ddfbf92025584"},{url:"assets/get-stoken-cookie-from-the-third-party.html-a4274fa1.js",revision:"06b896c9ca11d40d6529e58f6be784f6"},{url:"assets/get-stoken-cookie-from-the-third-party.html-dcfed3ca.js",revision:"e2b749b5020a696067a244090949a17f"},{url:"assets/hutao-API.html-238785b2.js",revision:"5d598650629fc3a791aa56f22d89949f"},{url:"assets/hutao-API.html-6a0f3bd7.js",revision:"1955d3c2191cdd139c524c60cc81b944"},{url:"assets/hutao-API.html-861299fa.js",revision:"e22a16d62726bee9818bde67266bb158"},{url:"assets/hutao-API.html-f49eaf10.js",revision:"c6d787c20eac6fd22e1b5e5769264b17"},{url:"assets/hutao-settings.html-4c5f1089.js",revision:"8318ec71a83b0301776bf57c68789768"},{url:"assets/hutao-settings.html-67e3962d.js",revision:"1dbfcd08fcc8f63c16a27eb36d1929db"},{url:"assets/hutao-settings.html-912ef253.js",revision:"9ea4dac748e8cf9e42eedd24dd13d469"},{url:"assets/hutao-settings.html-ec4d694d.js",revision:"6729a0c2257feb5c5d89f29e4e6aee94"},{url:"assets/i18n.html-2617d448.js",revision:"b73013881af3ae93ef2ac13cdb701882"},{url:"assets/i18n.html-5a20b497.js",revision:"173deeed764420a6250e7c3b787c60a0"},{url:"assets/i18n.html-5fe8fe46.js",revision:"264355f7d45903e4eda0d77e4b7f6379"},{url:"assets/i18n.html-ce4441c1.js",revision:"768561dba6699f54184996383b1d90c4"},{url:"assets/index-d20b7d60.js",revision:"b9928e9aef81ab1d6d1efd40dcabbde1"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-00dbcbea.js",revision:"d210a3ce6137937431084074f6f939ce"},{url:"assets/index.html-20c8279c.js",revision:"b18e11fcfbde80295ae23690f908b046"},{url:"assets/index.html-30bc5ccf.js",revision:"a680c10a5696857968eddd76f52e4956"},{url:"assets/index.html-3b8b0cf1.js",revision:"660443f27fef4a11a5ae0ada17547918"},{url:"assets/index.html-3f0b9626.js",revision:"66051e808bb91a9e905be842f0a339d1"},{url:"assets/index.html-3ff3e6c5.js",revision:"bbd6c2f2af10beba68b1f22c72547b58"},{url:"assets/index.html-62b6158d.js",revision:"356ee0c4228da555cf4f4ba153b11ded"},{url:"assets/index.html-62cd4613.js",revision:"20c1d5df42a2298d720e69f6e23fead4"},{url:"assets/index.html-686501f4.js",revision:"588453247102137f6869ef2d8908bffb"},{url:"assets/index.html-6d28017a.js",revision:"021c1408e35cb804d78cee1d0d1e2f29"},{url:"assets/index.html-75933301.js",revision:"8cab336214a624b17cc2e48e05290a0a"},{url:"assets/index.html-7e4d27d7.js",revision:"b0dd8ba036725e3587f7a2176eb12eb6"},{url:"assets/index.html-8057fd2e.js",revision:"957806feaedad5cdb7d82062725ffcae"},{url:"assets/index.html-a5685402.js",revision:"9f3d9c80708f1b78232a786743bf2601"},{url:"assets/index.html-af8a954b.js",revision:"925357aa36438ff8fc4243b2c3bea8e2"},{url:"assets/index.html-b2cf2c28.js",revision:"6abb654b8301097b7281bddab396b8c3"},{url:"assets/index.html-c943e40a.js",revision:"1513c4e9f05d366715dfce2a3f109b6e"},{url:"assets/index.html-d6e83c3d.js",revision:"13968c17652c04898d776da5ad28dfd2"},{url:"assets/index.html-df914bf0.js",revision:"5505d7ac01bb903c3e8cc0ab0bdc7ff2"},{url:"assets/index.html-ead0711a.js",revision:"de8de7dab77f3d8beb7480ed2831da3a"},{url:"assets/index.html-f78206be.js",revision:"74e992174bca22a9d3ad730428e9006b"},{url:"assets/index.html-fcaf2f1e.js",revision:"dd626151477ff60672c54035df1b6ac3"},{url:"assets/known-issue.html-511bf0e2.js",revision:"2c6190d749b672cac821275e4e4797bd"},{url:"assets/known-issue.html-dfcd3928.js",revision:"bcb2741960f7fd8113697a831abb2db8"},{url:"assets/known-issue.html-eb48207a.js",revision:"af80e8ee8b1bef5600c5922b45e8ee47"},{url:"assets/known-issue.html-f9e5e987.js",revision:"de7119db874a60fd077c99ff07bd16e0"},{url:"assets/menu.html-26e19633.js",revision:"34fffcbaabd99270b419ef17543cc3c3"},{url:"assets/menu.html-663862c5.js",revision:"f41d30dad57e74b5c9d884c1e246b060"},{url:"assets/menu.html-68335df6.js",revision:"d79f120d3345a72ee8d61ed02b90378f"},{url:"assets/menu.html-f061a795.js",revision:"06a719d37d4b48364c29fdda78eabf71"},{url:"assets/mhy-account-switch.html-2d99275b.js",revision:"99dc5c8d384d3b0e52987bd2675523ac"},{url:"assets/mhy-account-switch.html-4fecf81c.js",revision:"e840201159e6aabcd44923d06b89326f"},{url:"assets/mhy-account-switch.html-60e9ae96.js",revision:"d4727212b5000bbf00db788abbf91ad9"},{url:"assets/mhy-account-switch.html-e7ebd02a.js",revision:"2e8614fc463066cb249d484ba57be7a4"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/platform.html-1b433c3a.js",revision:"e444d9e4888255c03ae1bf0872ee3896"},{url:"assets/platform.html-311d9f9f.js",revision:"aab93b1c8a91bf3d767f07b9beb8e58e"},{url:"assets/platform.html-49d33fba.js",revision:"05173a0920002e9dc32b4fafcdde9ca7"},{url:"assets/platform.html-9c25e1ff.js",revision:"a9d0e7fdbb172569e0a1279b77198df2"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy-notice.html-09b28c46.js",revision:"8d86defeb2ffb2bbd2ab027fec4f9d49"},{url:"assets/privacy-notice.html-43cfb1bb.js",revision:"9be956a558889716e99868524e59c7ec"},{url:"assets/privacy-notice.html-516ff78b.js",revision:"cbff1d9a75d24bf4bc51fb04025c644e"},{url:"assets/privacy-notice.html-91f130c3.js",revision:"bb2c5f63a75b8f961493d511957be0e8"},{url:"assets/project.html-001b8361.js",revision:"e8360a85b02f4fa33cb48139672b5cd4"},{url:"assets/project.html-41f89b8c.js",revision:"b246e924371a91d70a305078ce6b9156"},{url:"assets/project.html-d2f367cd.js",revision:"7f323f1836d2501dda01a5c52cfbcb25"},{url:"assets/project.html-e96a464c.js",revision:"330d9b45e33693425ad0d5e719efd571"},{url:"assets/quick-start.html-144d2db4.js",revision:"7b70a51489c98ba769975b220bc01110"},{url:"assets/quick-start.html-6fea300a.js",revision:"47591c3a02f9db6f4a37f550bcf803a6"},{url:"assets/quick-start.html-a1f49e05.js",revision:"64c665a21edaa64cb268ad0d2e83b27b"},{url:"assets/quick-start.html-d7922d91.js",revision:"66710dd584b756bd4f15a1544f7655f4"},{url:"assets/real-time-notes.html-007137ef.js",revision:"880fd34450f89543ee25db38507bc3e5"},{url:"assets/real-time-notes.html-4ffa95f3.js",revision:"8c07d8cf042ce5f82e4413f1fe850581"},{url:"assets/real-time-notes.html-76828791.js",revision:"c2fb341c3550594cc8eb9f089e1f5760"},{url:"assets/real-time-notes.html-bcb443a3.js",revision:"946b97ad860a1884daad9ce54df33023"},{url:"assets/side-load.html-14a04174.js",revision:"373a0c1fa35cae1cfd75108c548729c6"},{url:"assets/side-load.html-9b18c97a.js",revision:"373a0c1fa35cae1cfd75108c548729c6"},{url:"assets/side-load.html-9cc44de3.js",revision:"b9588a8824b262e5f4c9f9a04f2b5f22"},{url:"assets/side-load.html-e04e7234.js",revision:"010f1b65a4e1468a0ee25d71827ce299"},{url:"assets/star-request.html-219d2341.js",revision:"1547fddfbee9d8827f9ef4878817094d"},{url:"assets/star-request.html-2ad37f25.js",revision:"19ad6f641682199034539ee6494e764e"},{url:"assets/star-request.html-4cb88d32.js",revision:"9a2c74d42fd22a93ed691e07eeefde02"},{url:"assets/star-request.html-e3f26991.js",revision:"d2dc04efdf51a0dc7626f6dba00d798f"},{url:"assets/style-0ffdefae.css",revision:"f0ecc447db4dc229cc2422625590c6e8"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/symposium1.html-be2a8ae0.js",revision:"dc89df27e920c168fbc8a83387519f3f"},{url:"assets/symposium1.html-fcc754a5.js",revision:"ee5fa52dc6077cac042b0b51cafa5e7c"},{url:"assets/symposium2.html-998a2702.js",revision:"e56bc0c958c6c451838176d0a74ffb89"},{url:"assets/symposium2.html-f0280800.js",revision:"50b99173532a5452dd7f6cbbd98e349b"},{url:"assets/tos.html-09235935.js",revision:"a4db382bafa2e5c697ab410898692754"},{url:"assets/tos.html-2697c794.js",revision:"33bebab8b98ef06466117d15c4bb90fa"},{url:"assets/tos.html-6bddfc88.js",revision:"5d2dda60e4fd92934e17afb725f226de"},{url:"assets/tos.html-afbf6e1f.js",revision:"eb97eebe322f9e29a638ee65f6eabe93"},{url:"assets/uninstall.html-a7db0295.js",revision:"cce9e4b1538c48e1af0ef7aedf0010a1"},{url:"assets/uninstall.html-e98d2832.js",revision:"3f53fc617a33113c342de94e2c4b875c"},{url:"assets/uninstall.html-f2a93a65.js",revision:"35047d46a639c803769a030fe18993db"},{url:"assets/uninstall.html-f3e75a7a.js",revision:"571bc3e5d2eb1134737ba9132bbef16d"},{url:"assets/update-log.html-191f389f.js",revision:"6df961e306f57982a7dd013ad6a115f3"},{url:"assets/update-log.html-2a70e7c3.js",revision:"0723f31ca0bfeb8a0f148759181ce779"},{url:"assets/update-log.html-60a35ed5.js",revision:"e5cb5c0114b8838f58e97ab13e99d065"},{url:"assets/update-log.html-ac46e1e5.js",revision:"de60cd47f5855de8bd173b1f7d52e158"},{url:"assets/waline-meta-a31b78ed.js",revision:"4003eee21f800e7d4662bda5f1875047"},{url:"assets/weapon-wiki.html-38a68cbb.js",revision:"dd8f6ad83d6297598e821737dc045545"},{url:"assets/weapon-wiki.html-5722a870.js",revision:"cc2cc392a122b9ebc57366c0fe755464"},{url:"assets/weapon-wiki.html-9ee4af63.js",revision:"60fb41330a8dae96349f416304d9cdd7"},{url:"assets/weapon-wiki.html-e83d3d04.js",revision:"d50d866038ced74b089dcb8046d7d785"},{url:"assets/wish-export.html-4db41232.js",revision:"4d035fa976338d5ce1278a0b5b3d0470"},{url:"assets/wish-export.html-9ad57251.js",revision:"56243573bba1504c7fafe7925937a619"},{url:"assets/wish-export.html-b9d2bc5b.js",revision:"b903ebf96878ea60e05b7bdc92c40090"},{url:"assets/wish-export.html-e367596f.js",revision:"0538df7a95bd1e92ce85ccedbc8c0119"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"index.html",revision:"139bbfdef5f2752d1a80479003ebac22"},{url:"404.html",revision:"4cc89d90134eb9535d8bfaf44446b1c1"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
