if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const f=e=>a(e,d),t={module:{uri:d},exports:r,require:f};s[d]=Promise.all(c.map((e=>t[e]||f(e)))).then((e=>(i(...e),r)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-88ef0c16.js",revision:"da492afff5390b2f6895f2e1e67e449f"},{url:"assets/404.html-cc4520a7.js",revision:"603894850918e0d0424fa87be67b1b21"},{url:"assets/achievements.html-48ffc151.js",revision:"13a76d7e8cfcf1bd939c185ee15085f9"},{url:"assets/achievements.html-8ebdf358.js",revision:"33616aac5c39fadd2d8668e692b618a9"},{url:"assets/achievements.html-a6a0de9a.js",revision:"75eab6790f6d5e7f011445af2520df05"},{url:"assets/achievements.html-b3bbfb7d.js",revision:"bf5f9883665312e9e96aad20d9ecab44"},{url:"assets/app-4efc3550.js",revision:"0d3e681fd1b51de2f9b321153ba6bb6f"},{url:"assets/bug-report.html-310cbc3b.js",revision:"0b90cc93185ccd747c1d04a2ccf8210e"},{url:"assets/bug-report.html-7b974279.js",revision:"d9619a684b3e256780ba05fdd2812808"},{url:"assets/bug-report.html-7db5234d.js",revision:"b6854f322003417f49b0836c4a066ffe"},{url:"assets/bug-report.html-84fe1704.js",revision:"cdc39d1ae597168004ffecbec46ca1aa"},{url:"assets/character-data.html-42720767.js",revision:"26bb97d023b8bf081334042267a35385"},{url:"assets/character-data.html-8a78117e.js",revision:"f3941634724fcc4938079fa9c55a2b01"},{url:"assets/character-data.html-bdb41809.js",revision:"913079a94dd46a18c47f5e1333fa1106"},{url:"assets/character-data.html-ca777703.js",revision:"20ae72f3ebd18ca75ea314319091c34e"},{url:"assets/character-wiki.html-1b9db7c1.js",revision:"c254c0d48e5fcdac79185e870835dbf0"},{url:"assets/character-wiki.html-551cb859.js",revision:"823535184d91d5fa29bc5a9308588d10"},{url:"assets/character-wiki.html-90b9eedb.js",revision:"8dfc2f275cfe6ccfc8159cc3ffbdb9bd"},{url:"assets/character-wiki.html-c2cd14b6.js",revision:"dd0d868c814d4e9161bebd0ee6835c24"},{url:"assets/community.html-84f8e709.js",revision:"044388d4b7b8152ac5df304c080d0cc7"},{url:"assets/community.html-9b7032ff.js",revision:"7450c72e4f2ba01369a25941d56a9c70"},{url:"assets/community.html-b29916f9.js",revision:"dfef593fb67fd30f5348fe8bff3a9ec0"},{url:"assets/community.html-cc616e3c.js",revision:"dd37d013281e855f21501f815b6d4bbc"},{url:"assets/component-8928108c.js",revision:"e326c987effd105e56aa0d064a8814aa"},{url:"assets/contribute.html-0dd7b1da.js",revision:"792ccfb7500b5fb6eeba61066a28d940"},{url:"assets/contribute.html-64ac2d95.js",revision:"204b515728553ce1d712a01e2c249605"},{url:"assets/contribute.html-7f946320.js",revision:"18599b25749263485f64f72421a43ddf"},{url:"assets/contribute.html-b6b54868.js",revision:"bc7e88a678d2d40de06825fde9d57642"},{url:"assets/dashboard.html-0ea899a5.js",revision:"1c0cb0de6523c0e5d582a3ed935caa06"},{url:"assets/dashboard.html-493b7d7d.js",revision:"dc5ee421f694e06092348a01a9fd0a57"},{url:"assets/dashboard.html-50b728ce.js",revision:"4f61da7b47cc877825b939ca85ef9c21"},{url:"assets/dashboard.html-de43d08c.js",revision:"196a6ca2646b2292ace1ae77cee8b4d0"},{url:"assets/dependency.html-655fe7fb.js",revision:"2bf24ebdbd46f9b2d63f5d71491eb773"},{url:"assets/dependency.html-6aa2a973.js",revision:"e669ebecaa985c9836b7cbbe1a3b7efa"},{url:"assets/dependency.html-72a8a506.js",revision:"cdf941791f06c0c5303cab7157151004"},{url:"assets/dependency.html-cb812315.js",revision:"e8577918470c24e6896599ffc443359e"},{url:"assets/develop-plan.html-2eddad67.js",revision:"d148fdd40ed1fbad7c430ca794da59c1"},{url:"assets/develop-plan.html-4cd8de09.js",revision:"0ea5475c971b1fa3c7eac3c95d82c901"},{url:"assets/develop-plan.html-72b138aa.js",revision:"9070fb1ed188e5fa1c8efa2619e90818"},{url:"assets/develop-plan.html-9300f57b.js",revision:"b0d33c7e23907f95a6091db96224c18c"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/exceptions.html-7d9e8827.js",revision:"c2b53dc7e98d450679a8bf0f569ef7a1"},{url:"assets/exceptions.html-a05a1b2d.js",revision:"968828e74ee284108dd0e46d80800d01"},{url:"assets/exceptions.html-b2f4e231.js",revision:"f63a4b354d5947ade2d3fb9d30722bcd"},{url:"assets/exceptions.html-b8f537f9.js",revision:"4b02e0bd3907d7585b679a878ed3d45b"},{url:"assets/FAQ.html-58ca3047.js",revision:"dee0c9854d3a79e051cc52f64d85107c"},{url:"assets/FAQ.html-83d69344.js",revision:"06e81bad2e5a25e20efd947e46a01dca"},{url:"assets/FAQ.html-d6cb8bb4.js",revision:"4f56e3e696257983d6a39719034fc9a6"},{url:"assets/FAQ.html-e0a2e611.js",revision:"16d138811c5d2bc425f04999ca55e00c"},{url:"assets/Gacha-system-and-export-principal.html-015af494.js",revision:"ce641ab3fb44cf7d3c118e52e2e9e4b7"},{url:"assets/Gacha-system-and-export-principal.html-24e5354f.js",revision:"23f2a132ff5aba0f35e5dc0f84ba972b"},{url:"assets/Gacha-system-and-export-principal.html-81906cdb.js",revision:"c294c2c93b1030af939992f5cac028c5"},{url:"assets/Gacha-system-and-export-principal.html-f1f04e58.js",revision:"23f2a132ff5aba0f35e5dc0f84ba972b"},{url:"assets/game-launcher.html-0a1afa07.js",revision:"f0ef08c58a204bf8bc2751f0ff0f735a"},{url:"assets/game-launcher.html-2b10fd00.js",revision:"0b0a8f45ff132cea48eb883d91b52e08"},{url:"assets/game-launcher.html-48fbcd0a.js",revision:"faa3250409d30ba684322ed2a33905f5"},{url:"assets/game-launcher.html-bbaa8a3b.js",revision:"c7706ba704e184828516d14b397f693a"},{url:"assets/get-stoken-cookie-from-the-third-party.html-47ff6d9a.js",revision:"8c113d69e7dbb433d068bee2acd9417f"},{url:"assets/get-stoken-cookie-from-the-third-party.html-56225954.js",revision:"3988e80839fc22cbfc40f349f523cee0"},{url:"assets/get-stoken-cookie-from-the-third-party.html-698c6b8e.js",revision:"48059663f453f004ae4149f5c79744bb"},{url:"assets/get-stoken-cookie-from-the-third-party.html-75f986b3.js",revision:"dc026647681da97901bf0668ea77dd31"},{url:"assets/hutao-API.html-4088b7a3.js",revision:"6205c4f437dc582fe620a9bbed791e31"},{url:"assets/hutao-API.html-c450cbe0.js",revision:"ab57dba63ac53e3e1a265e0df685f731"},{url:"assets/hutao-API.html-ed9e51a9.js",revision:"ea720846f1caaabe86d482f5b0adf16b"},{url:"assets/hutao-API.html-f72be91a.js",revision:"af6dd7fa041be5050dcb393ffd46b44b"},{url:"assets/hutao-settings.html-280e1afc.js",revision:"cb5fe502c022604c20df1164c9cb854c"},{url:"assets/hutao-settings.html-72e1a0f6.js",revision:"5a49038d6e41a095c6a58534b035b254"},{url:"assets/hutao-settings.html-acfbde47.js",revision:"aef865948eae2054754519a99c77d8e7"},{url:"assets/hutao-settings.html-b0f096c2.js",revision:"da755412336c8c81959c75036a117db3"},{url:"assets/i18n.html-10933388.js",revision:"c4b1d2626298dff9d345783c66c1b9a8"},{url:"assets/i18n.html-803615df.js",revision:"1292b5ee6dd965c0c95c6fc96aff2485"},{url:"assets/i18n.html-c30bce14.js",revision:"856d9610cd1f26e1be46f0775740a4a9"},{url:"assets/i18n.html-f972be08.js",revision:"baa9fa66b31c0976d12bc702842da205"},{url:"assets/index-82585c84.js",revision:"938526a93de840eecd804073030c5832"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-061d6dc0.js",revision:"b28f922d563cf64d86259330b9927a11"},{url:"assets/index.html-0c415b8c.js",revision:"09ca4e33a1cc7b67232e1ed824e1773f"},{url:"assets/index.html-13ab5dc3.js",revision:"48bb40353aecc4c253fa59dce4f9b83b"},{url:"assets/index.html-21d93ed1.js",revision:"f5b55f1d60d45af3a2258ad1c3e1d840"},{url:"assets/index.html-279f7857.js",revision:"30e9584503c92ac28b592451f4482133"},{url:"assets/index.html-3216a9e5.js",revision:"eaf3b1d621d6705eb2c3476f8159906c"},{url:"assets/index.html-5af56952.js",revision:"e5fd8a2d9ddbf2313fff06d60826fdfd"},{url:"assets/index.html-6913b6c2.js",revision:"3472044dc3e4d1ec7359aabd1c35ad31"},{url:"assets/index.html-6a43042e.js",revision:"77cf96b2c3c39b7a622a3d95997b13a0"},{url:"assets/index.html-7b139ff1.js",revision:"fe2598108a86d152dd27fa538e3202cb"},{url:"assets/index.html-81dd031d.js",revision:"fd8b9ba49115551d897d53bc6841ee7e"},{url:"assets/index.html-836742e1.js",revision:"2cdc8100a5f859c1a331556291cee8f8"},{url:"assets/index.html-8402a07f.js",revision:"d404bf5e80b891b3de5eacf2fea89d65"},{url:"assets/index.html-8616774c.js",revision:"edbefcde92c4e01f99fae9abdcfd403f"},{url:"assets/index.html-947e2238.js",revision:"d896dd240ff16005bd475786b8c4b389"},{url:"assets/index.html-9e2ac80c.js",revision:"5d286ecab30a83c7ecdecc13a309b4cf"},{url:"assets/index.html-a228d087.js",revision:"f597a202ff25b04eb08d9f40b4ecb9c6"},{url:"assets/index.html-b2e89739.js",revision:"f5dd0c1c944ef8e300cb2dbffacd4546"},{url:"assets/index.html-c85b8c07.js",revision:"0337b32000c599f384797a2dee352278"},{url:"assets/index.html-ce254148.js",revision:"f4f322313fa70ab549b3d165ac5b1273"},{url:"assets/index.html-ead0711a.js",revision:"de8de7dab77f3d8beb7480ed2831da3a"},{url:"assets/index.html-ebbf76de.js",revision:"d76635749af8a4b73f93bdecda83706c"},{url:"assets/known-issue.html-16dc2216.js",revision:"76bb12795d3edae35a9669e4157cc85b"},{url:"assets/known-issue.html-1b954c89.js",revision:"3f595ac3e19c3079a2978d6c6bdbb4a2"},{url:"assets/known-issue.html-353310f4.js",revision:"67ee4533cb4264ff960dead3eae34430"},{url:"assets/known-issue.html-dcf2dda3.js",revision:"2477a2e8cec3fe145c1f586abdab2efe"},{url:"assets/menu.html-37a47978.js",revision:"91b7cf707098fb8026edcbe62c9f6322"},{url:"assets/menu.html-530437ec.js",revision:"72a5a11b94f41a5da19b4ef6dcd6e722"},{url:"assets/menu.html-5e29ea11.js",revision:"43c77387eb0d9c82cc4f34720cac295e"},{url:"assets/menu.html-df52c6ac.js",revision:"43fb5c12971274a93023c83b6e98f4e2"},{url:"assets/mhy-account-switch.html-105053c8.js",revision:"4e7d5b1ee414089d58624be59e788d46"},{url:"assets/mhy-account-switch.html-ca9beaf1.js",revision:"a7b9508fbf561048c43b568df3ecd41c"},{url:"assets/mhy-account-switch.html-db811865.js",revision:"cd64d7c7287848c2efae0443ba2db1f5"},{url:"assets/mhy-account-switch.html-e51082d9.js",revision:"897dc74e2a10e5ef37ab8329eaec2fc1"},{url:"assets/monster-wiki.html-2ef6b7f1.js",revision:"9741527bc9a761039b149406d09779aa"},{url:"assets/monster-wiki.html-a4668d7a.js",revision:"7970433e2b9746f25307b2fa55a36772"},{url:"assets/monster-wiki.html-bafbf876.js",revision:"1d1bb07b5491a970353df22b29a92bf3"},{url:"assets/monster-wiki.html-ed4ef353.js",revision:"16f8fda35bffa7a5ba4ba2c2f7c22cb7"},{url:"assets/photoswipe.esm-1464cdb9.js",revision:"3a72d9823ffa5943f03c5e884d0f66d8"},{url:"assets/platform.html-1e5f7e79.js",revision:"71acffe7bcfa49734be18f1e77672d6d"},{url:"assets/platform.html-919420ad.js",revision:"16a7fde95327675296237b41405059a0"},{url:"assets/platform.html-a018603e.js",revision:"89a4ccb7922e5cb9670e02ecdd58b44f"},{url:"assets/platform.html-ec227b31.js",revision:"f4a3b4723af281c3c3146be834b362de"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy-notice.html-5ca92516.js",revision:"3f747b4de61dca58b0de570456b8b810"},{url:"assets/privacy-notice.html-69586390.js",revision:"ccbb4203331610ce1af193c2dd780239"},{url:"assets/privacy-notice.html-7a7919a5.js",revision:"02b0d2b93fb10097e680fb5075ea00f0"},{url:"assets/privacy-notice.html-e40ff099.js",revision:"a2760af798972147096754cf017bfad9"},{url:"assets/project.html-747e49a9.js",revision:"05883fbc9b9430ba7fda560533b16457"},{url:"assets/project.html-8b1dc1c2.js",revision:"e02e979c09c839410bc35d04e92ff0f0"},{url:"assets/project.html-9b08d186.js",revision:"8b7bd376d882e29ce9bd60798ba8b388"},{url:"assets/project.html-d9af2432.js",revision:"e72ecf1b91540df8d9a4f7808e2f8a6e"},{url:"assets/quick-start.html-25418c6c.js",revision:"ef5a1b3a57a0b0b03e3cb1d2eace83a4"},{url:"assets/quick-start.html-8f711792.js",revision:"0961a810eca03323e852cc1ac66e8741"},{url:"assets/quick-start.html-9a4e63cf.js",revision:"d299fe3e0daf37fca01368cc3a819dc3"},{url:"assets/quick-start.html-dab9eba3.js",revision:"d57e2e2fbfbbe1bc1b00db57d852ac70"},{url:"assets/real-time-notes.html-3c2ae649.js",revision:"0cad12265e2d9a92fd4dca05f4bce23b"},{url:"assets/real-time-notes.html-d4cb10b5.js",revision:"6c6fbf00d59c02d67ca37e5d3ff190c4"},{url:"assets/real-time-notes.html-dc54edfa.js",revision:"6a6e6bfa320462495176e1f50e377413"},{url:"assets/real-time-notes.html-dddbb957.js",revision:"749fff22c5cd3082316a5b0aed10e733"},{url:"assets/setup.html-1c08e858.js",revision:"d80fda139b04d9e1e1a7c2d10c1cd013"},{url:"assets/setup.html-8161c7b5.js",revision:"ae3e98c54ce8293f340e37688ceac500"},{url:"assets/setup.html-829b4bbd.js",revision:"29faf34d3d34b295983b32617e7e13d7"},{url:"assets/setup.html-af40dc11.js",revision:"6f53b9f1930e2cac3d641fc5ec228489"},{url:"assets/side-load.html-0a898ed6.js",revision:"0415aa8e51f3730757e450a47b30d441"},{url:"assets/side-load.html-3cd56027.js",revision:"042041b913d5e38a9550bb9c28ad83ab"},{url:"assets/side-load.html-61588b2e.js",revision:"042041b913d5e38a9550bb9c28ad83ab"},{url:"assets/side-load.html-93a3f61b.js",revision:"d3123e3e80faa5a4ba2f51acb5b018b3"},{url:"assets/star-request.html-2a841f90.js",revision:"fa244fa91531ef827c21d10c0f57e03c"},{url:"assets/star-request.html-51a2befb.js",revision:"05911b81aca7baee7d238cc5592821d6"},{url:"assets/star-request.html-7f0089f1.js",revision:"27dfdc170327f7658b49d86d88cff1c4"},{url:"assets/star-request.html-eb357667.js",revision:"79801dfbfe99d5202323c4f6f246c0a1"},{url:"assets/style-e89e9e42.css",revision:"91e49a0644055194a4174407f8135974"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/symposium1.html-4ca69a8e.js",revision:"9e38d23bebd819ee8112e2306c0f6999"},{url:"assets/symposium1.html-fe074e8a.js",revision:"b621a16581598c915ff7f15c078ef1a4"},{url:"assets/symposium2.html-0f0e146d.js",revision:"294e2bdd3b15be96a703b8daa0fa8c00"},{url:"assets/symposium2.html-b9b55802.js",revision:"4737a434d776df0d0bee1391970bb013"},{url:"assets/tos.html-3a563f3d.js",revision:"668d37e9508582d680a270647bc68159"},{url:"assets/tos.html-4a3b89d1.js",revision:"e59bd2db7736ecff11d5daab07ac6381"},{url:"assets/tos.html-b69a063a.js",revision:"bf883e862fc7ca6bf5071263293f2882"},{url:"assets/tos.html-e7fb0dd0.js",revision:"a5509330b39e17b8587d6bf82fbca7a9"},{url:"assets/uninstall.html-3103004e.js",revision:"a4d27d8eb36ac36ae4c92b4f25674223"},{url:"assets/uninstall.html-41edbfff.js",revision:"94d32bf375f5a4c3b17b29fc9c7299bb"},{url:"assets/uninstall.html-9099517b.js",revision:"8ff2f99c756824cba7d9421ed8f4c3d2"},{url:"assets/uninstall.html-90d5e7a1.js",revision:"79bdca9323776fd73ad0d21f21437fa9"},{url:"assets/update-log.html-1aa5831c.js",revision:"a65a712a2cab33de0ccde728bbb7dc92"},{url:"assets/update-log.html-51fb50e2.js",revision:"893c2fe098777a8da8f5692a4113e208"},{url:"assets/update-log.html-8d907f0a.js",revision:"6c809993b886a31028474879f1c8a44f"},{url:"assets/update-log.html-8f0e1c9f.js",revision:"30145944c78a497df1c7f7effc185ba8"},{url:"assets/waline-meta-56fbc549.js",revision:"fe8fce833452b0c8ea188f0342a2ce65"},{url:"assets/weapon-wiki.html-12997220.js",revision:"9fcc3412dd2c6e3c6585e894b6fae4d8"},{url:"assets/weapon-wiki.html-5c2ca54e.js",revision:"49f602a411138efd8ce35cfa6c50886c"},{url:"assets/weapon-wiki.html-a5bdf173.js",revision:"48e9d3f57e253ba4184375863e352e2a"},{url:"assets/weapon-wiki.html-ab7d6f8c.js",revision:"612d779ff53a1e19892c23fd46a9317b"},{url:"assets/wish-export.html-30e5101d.js",revision:"2d0cac968845f5bc436e697f71a0739c"},{url:"assets/wish-export.html-6c37dce5.js",revision:"d255af2c79fbedf0496c1cb4cf4d5042"},{url:"assets/wish-export.html-97425236.js",revision:"405d50172561b5e94f5217d9ea51b167"},{url:"assets/wish-export.html-b1d5faab.js",revision:"e94740d52a7512ddfd9df61af8db93dd"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"index.html",revision:"a0c2a84b03564e3d4d7250abc0ed28dc"},{url:"404.html",revision:"516efc9e7e436202e60c4ddc33414b3a"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
