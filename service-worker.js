if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const t=e=>a(e,r),f={module:{uri:r},exports:d,require:t};s[r]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(c(...e),d)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1-8-5-installer-BiBVFR-v.js",revision:"cc13e2b00164710d0ed707ea46e4a8ef"},{url:"assets/404.html-DhIh9X7t.js",revision:"b4d665d5a73028c0daa8eb249050c768"},{url:"assets/achievements.html-B-kH_n0g.js",revision:"fc11a5a70ab83df5ae754d7a41289870"},{url:"assets/achievements.html-CdIbbdIL.js",revision:"522a622917e9036d755e31b31f26d01a"},{url:"assets/achievements.html-DCB8u1_P.js",revision:"927f1d0f427d3a9564c144f604e96d65"},{url:"assets/achievements.html-DRFw5EHr.js",revision:"1430166ed102cbd9dd8c0b704f9f1edf"},{url:"assets/app-CQqsBhUY.js",revision:"102dcc1c33ebc61f7d84bc607d0ce9be"},{url:"assets/archive.html-C6B1Y_TF.js",revision:"990f4d92b49ff9c3a6fb3cdddd6704fc"},{url:"assets/bug-report.html-CBi2lGHJ.js",revision:"84be9cb55f16a198000a225ed426eeef"},{url:"assets/bug-report.html-CRtZfW_U.js",revision:"d241e07287bbd6b5fd69da2093cfa376"},{url:"assets/bug-report.html-DcIbs7vM.js",revision:"e900eed099b8d9abd5f470b104f1a8c1"},{url:"assets/bug-report.html-u7onA38e.js",revision:"2e6d665aa4db5d1246daab6cd83df592"},{url:"assets/character-data.html-BPEvZuUV.js",revision:"aef01e38c8ef692caac63091adcaf7cf"},{url:"assets/character-data.html-BQEpwGsV.js",revision:"a233425433c037805bd6eeab97cbd89b"},{url:"assets/character-data.html-BSUiI7M4.js",revision:"557ea7a78fff5c8f12fcebcac3e3f330"},{url:"assets/character-data.html-BynGVE03.js",revision:"d84e505829c210f69831258ee1d4bbbb"},{url:"assets/character-wiki.html-2M1oQCHM.js",revision:"fffaad6d15e5c60972609696be9a69c9"},{url:"assets/character-wiki.html-kBMcR1uo.js",revision:"0da186d838db66f5f31010f29a0ac458"},{url:"assets/character-wiki.html-TFJvFOXL.js",revision:"0ecefef1e12926d2c4139cb4208c810d"},{url:"assets/character-wiki.html-ZZjy77es.js",revision:"3d5fe1bbcae24ad2c3a1bbe2fe9d4546"},{url:"assets/community.html-CfGboq-N.js",revision:"f869a0dc201d9b871c8d0ef64e0ddc1b"},{url:"assets/community.html-Cg_QHkWl.js",revision:"1ce18e2e78e97cc41a4741ca0d2401f3"},{url:"assets/community.html-CgNVWzs3.js",revision:"e84fc8cefb0e291103c0ee559872e895"},{url:"assets/community.html-DJDxfIRW.js",revision:"d049765dd419210edcbb8b69a8c3023b"},{url:"assets/contribute.html-C2oNwETi.js",revision:"e82c443d402426ea9085441c22e76792"},{url:"assets/contribute.html-c8ZqXMgw.js",revision:"5559444e69bd759bc8965cf842b484e9"},{url:"assets/contribute.html-DdanqoRd.js",revision:"2b7d895a862053292145b7d94cc35d50"},{url:"assets/contribute.html-wMLyBzwi.js",revision:"cd84fbc598014426cda96a8c1b1311ca"},{url:"assets/dashboard.html-BmolGi_F.js",revision:"f057cfca731556702d3001a7c642bee1"},{url:"assets/dashboard.html-CmdKsKMn.js",revision:"de90d4ea03c0c167654b39818feade19"},{url:"assets/dashboard.html-CrKeYmHx.js",revision:"756d7821e89d7ed3fcaaee268b02f607"},{url:"assets/dashboard.html-Q27cesdd.js",revision:"cff7402394136dec036f7474dd61f2bb"},{url:"assets/dependency.html-BzSA2J-9.js",revision:"9e85a8743d9513880d8cd67f33ed36a9"},{url:"assets/dependency.html-emx9pu8G.js",revision:"dc7595b27052e1a71f11ff35bb60a6fd"},{url:"assets/develop-plan.html-B8d1VTX7.js",revision:"d86e2cb1c91f6547917f58cf020262c2"},{url:"assets/develop-plan.html-D39eyLp0.js",revision:"04c1e6f6119c2681ee1332a2c5b2a895"},{url:"assets/develop-plan.html-DoMPFac2.js",revision:"47fc27a2a5fbefed0d7022f4ecf83ec0"},{url:"assets/develop-plan.html-DYIfwL1M.js",revision:"40cb9ec81d256704da78dbc6cb9e3cb1"},{url:"assets/digitalocean-horizontal-Nm6MkYI3.js",revision:"eaa4cbd043bf24493eda53d39fbaf796"},{url:"assets/docsearch-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/exceptions.html-B1gQz7Uo.js",revision:"83c84b9a114b13766f869d74495cd6b1"},{url:"assets/exceptions.html-CbiO7dXw.js",revision:"98c8b0fd117c821029cf46f31e4b697d"},{url:"assets/exceptions.html-D9V7BH4J.js",revision:"f0785e4c1db6e2a3cabaffed01a30c3c"},{url:"assets/exceptions.html-DDkvxGtN.js",revision:"42b47baef0f2cee2455e6fe7496b517c"},{url:"assets/FAQ.html-DJbFRh1j.js",revision:"147f678d565c2e6b7a32d8578f65e2a1"},{url:"assets/FAQ.html-DkReXAI9.js",revision:"ea06fbabd12b88a273978bc401496ba3"},{url:"assets/FAQ.html-DpYa-zR2.js",revision:"c8028e79a02cc078256ead12469d6667"},{url:"assets/FAQ.html-YbDmPxZ2.js",revision:"95fe8479d79919935f9f9450440b90f5"},{url:"assets/feedback-center.html-DMsfgPAM.js",revision:"4895e8ce116c09069d576c7776b6b391"},{url:"assets/feedback-center.html-usg4O8hu.js",revision:"c2ad34a597023a38b608ef2e819807d8"},{url:"assets/Gacha-system-and-export-principal.html-Ccjfhypv.js",revision:"a861af7439608d9030db462166033876"},{url:"assets/Gacha-system-and-export-principal.html-Cl1ZRdXr.js",revision:"f73a1ed5a500cab1cbd66bce7fe12b9e"},{url:"assets/Gacha-system-and-export-principal.html-CY4PCYvf.js",revision:"4b5887704bb783a484f055bb93897836"},{url:"assets/Gacha-system-and-export-principal.html-FuUwF1g0.js",revision:"37285e251db430a5e27d2e332b6dbd62"},{url:"assets/game-launcher.html-CfoshWlS.js",revision:"12401aa21a5d1efad4eb6207f823447d"},{url:"assets/game-launcher.html-CxcpAVpJ.js",revision:"733b006d2a811e99b9e59e9605e3ef13"},{url:"assets/game-launcher.html-JkcJdc9p.js",revision:"6347d30c37247715e972e09dae38680b"},{url:"assets/game-launcher.html-Wl-nbNFD.js",revision:"997054156c23a2e9498186d22b842ca2"},{url:"assets/get-stoken-cookie-from-the-third-party.html-BPXJa5lQ.js",revision:"f824c3600db2f6756d5b1c2c1b5b1a6a"},{url:"assets/get-stoken-cookie-from-the-third-party.html-CAuPjRdw.js",revision:"ee345325b31847ddac84ed4e218bc5a0"},{url:"assets/get-stoken-cookie-from-the-third-party.html-djSATfVn.js",revision:"314545442f8720d4bebd4b497440298b"},{url:"assets/get-stoken-cookie-from-the-third-party.html-uiSJAufE.js",revision:"0864a650a35d977dd12e04a5152451b7"},{url:"assets/giscus--_FS5kYt.js",revision:"bb05431bc292361992e6141ce0948b43"},{url:"assets/hutao-API.html-Aorh-cNB.js",revision:"6a20767f6ffcb75181c7ea1db9566aa8"},{url:"assets/hutao-API.html-B99hkk65.js",revision:"8712165def3a5d4b8fcf6c42d640a46e"},{url:"assets/hutao-API.html-l1_HNgmJ.js",revision:"b7333fa778a2ad98b67b8fe1db75b2da"},{url:"assets/hutao-API.html-y98Z32v2.js",revision:"fdd188f658b80209ccecb97f8634b5a6"},{url:"assets/hutao-passport.html-BxU97dMi.js",revision:"0a76a25f8db421150d1c05fc128c6977"},{url:"assets/hutao-passport.html-LkNXz03E.js",revision:"c4e65ca5762eb9c66ccd0e1dc4d095dd"},{url:"assets/hutao-settings.html-C0H43KWL.js",revision:"c937beceb1c302f11e8cbf09a505991f"},{url:"assets/hutao-settings.html-CRpaBaS-.js",revision:"784b527405d1e9644f0b7aa1400d7216"},{url:"assets/hutao-settings.html-CUpyFNpN.js",revision:"1a9e1561fba922d30b9330440ff1e929"},{url:"assets/hutao-settings.html-Dde2N_fW.js",revision:"c581309a99e07d49bc93589d0a8f7ab6"},{url:"assets/i18n.html-B9P-89Z2.js",revision:"16f2840c228be1fcbe666c024efa95b0"},{url:"assets/i18n.html-CmG2erMc.js",revision:"936cf4f0dcda8fcd003a539cd230428e"},{url:"assets/i18n.html-DdxS_USN.js",revision:"e45622a0667fc05e5f6cbac8beb218e3"},{url:"assets/i18n.html-HMrMHnAU.js",revision:"5e9ff9a4242d08bced58a078ffc314e9"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-zMbLkDvU.js",revision:"31f36bdf766eca20dff7683b6d0b15c7"},{url:"assets/index.html--YfsZPrb.js",revision:"e503c198a2d03a0d4eb7141a2405fab8"},{url:"assets/index.html-BbSofIhN.js",revision:"e97082a48bcb763f696d2adcbca838c8"},{url:"assets/index.html-Belqq9RD.js",revision:"81195af55134450c90fb059f1006864a"},{url:"assets/index.html-BEwM4wE4.js",revision:"ebdc0a1ce77a01fac48a18cc06f4ba9b"},{url:"assets/index.html-BP9yF2sQ.js",revision:"2667ddef4ccb69206d603f80542bf4a4"},{url:"assets/index.html-Bpfeze00.js",revision:"d0aced9697d70b153e9c0f91fb28921a"},{url:"assets/index.html-bSn-lUmI.js",revision:"ae82fdffcef5190c4c906026fc9f20fc"},{url:"assets/index.html-C4P9mD66.js",revision:"251b8fbc9c67a2dfb0fb962359134fc2"},{url:"assets/index.html-CakW9I5-.js",revision:"3066e9f27f5e86013d9561191b251654"},{url:"assets/index.html-CbyXXVBK.js",revision:"58b895557b2f8b59254fba779ce1cafe"},{url:"assets/index.html-CLyWiIy4.js",revision:"db5bcc25be593cf47fa355370d184c14"},{url:"assets/index.html-CnlfKO-p.js",revision:"3f1914ea0e4d12c889f44825873a28c8"},{url:"assets/index.html-CpXevxrj.js",revision:"ed73691dbe82360b711ab1e7971209b1"},{url:"assets/index.html-DeYYKhX3.js",revision:"1e64ef8aa60c2c255e5df988c141dbde"},{url:"assets/index.html-DfXrFQqd.js",revision:"151d7a6a443f03842001309e871170de"},{url:"assets/index.html-DLdbfbtc.js",revision:"b5d2d799f64dfa8bccde0281c20c64ec"},{url:"assets/index.html-DLJ9vciz.js",revision:"aaf0c4a4ca2efcca8b6681e0e137145f"},{url:"assets/index.html-Dq3KSbOi.js",revision:"3edc42acb3bd40fc27b94d0f0d5cfe15"},{url:"assets/index.html-KBrQKfJ9.js",revision:"349444d2763cc207c372543e93ef2c09"},{url:"assets/index.html-N7-s2PCh.js",revision:"dc1268094c9d0a2a5e0d7678043100c6"},{url:"assets/index.html-SgBWY-Q2.js",revision:"16db4e4687ae59b1c99bdf6a007e8f9d"},{url:"assets/index.html-sLLJI9DJ.js",revision:"dbf6de311f13c1b9ef0f03bc4af69db0"},{url:"assets/index.html-WtS3cF8k.js",revision:"0c8bb1d22e14cdb0ce4a3ed8c62c1a99"},{url:"assets/index.html-zZ9i6_MZ.js",revision:"a43e1869992123a1b2aeb8d1ea076083"},{url:"assets/jetbrains-BhnMeNcK.js",revision:"5c61e71209952149b8a225ed775ca3a6"},{url:"assets/join.html-Br3hpJso.js",revision:"29ae266fb9dbfc3aae5761879f12a56e"},{url:"assets/join.html-DqkNMZsg.js",revision:"c074040f2bd33aab3a168ff2e0d4a7ab"},{url:"assets/join.html-gYrcw-oe.js",revision:"82988e99c772c6e61f164e79dea604ee"},{url:"assets/known-issue.html-B_KQu2MY.js",revision:"604571ffcc6932e9ab8a743b23f6ffef"},{url:"assets/known-issue.html-Cq5s537B.js",revision:"dd436619d22c48536188b8459ce10db7"},{url:"assets/known-issue.html-JCD18jGC.js",revision:"85ea0acefeb8536b381ff03b55f4be98"},{url:"assets/known-issue.html-JdSWJSnM.js",revision:"d799eb90f9e8f0b89d9b9c40e52f18bb"},{url:"assets/menu.html-CMUhY_GT.js",revision:"86963cc5840a41038b700d79dcec9fd6"},{url:"assets/menu.html-CNmBlPHI.js",revision:"7b4217bc7c69c465745caf21c37b9613"},{url:"assets/menu.html-DOgGYOWv.js",revision:"74293e0c409dfa2313cc15cdd99c0773"},{url:"assets/menu.html-DvvIc0-z.js",revision:"fd5e9632436983bd77baaef6aebe6f61"},{url:"assets/mhy-account-switch.html-0d_UCTRY.js",revision:"cb65c5baf461ee532579d788ac4f42c4"},{url:"assets/mhy-account-switch.html-7af4P98z.js",revision:"d6ea21ec7d792afeecc67e9b5549f98d"},{url:"assets/mhy-account-switch.html-BOsHsq3g.js",revision:"e75f195da2e4c6b6859193ee24f48440"},{url:"assets/mhy-account-switch.html-Cshd0r5u.js",revision:"f9e549df7a60dbf0db47f9fadfed0c93"},{url:"assets/monster-wiki.html-6wJaFJOF.js",revision:"b0ecab000c3ad271aa9eefd04655fb81"},{url:"assets/monster-wiki.html-C76Vlss_.js",revision:"da293f3e460becb377499d4a3d8720f4"},{url:"assets/monster-wiki.html-iWRSZwZR.js",revision:"b2ea90b4b42ecc737f8df011735812b9"},{url:"assets/monster-wiki.html-kfI3kNZN.js",revision:"aff0e69e3ae2c48d981fc9fd9a39ec86"},{url:"assets/MSEdge-Bvt55oa-.js",revision:"664a8be7f006b82a3d2eac682334d154"},{url:"assets/photoswipe.esm-SzV8tJDW.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/platform.html-BgZ6EyoD.js",revision:"6143c226a9b98a79daa1db71795c9bcc"},{url:"assets/platform.html-CHfExB07.js",revision:"cb428c3644f52af763770fb2a9dffe92"},{url:"assets/platform.html-DiVTdJob.js",revision:"293173d15fb427c108315f138c2e7d85"},{url:"assets/platform.html-DVEpuVJ7.js",revision:"c8e91f6e406da9647876e76391595181"},{url:"assets/privacy-notice.html-BRbjBKCK.js",revision:"f0d96f647b809e1fb741ed9758e2c6f0"},{url:"assets/privacy-notice.html-CIWCHkwn.js",revision:"9d112b49fda23cd728d61fddd14f30c0"},{url:"assets/privacy-notice.html-jw15YOFY.js",revision:"a1f9901b3889a2f9fee0a20f884ee959"},{url:"assets/privacy-notice.html-zazRV8ul.js",revision:"303c69c710a0fa6b6990c66da725c35f"},{url:"assets/project.html-__5yPDpT.js",revision:"049ba4ce35aa034611b5696253136c9f"},{url:"assets/project.html-B0wXENsI.js",revision:"5186c360996d55e293f632e1772ce79a"},{url:"assets/project.html-Cg3HqaZn.js",revision:"c2b99d8e6a621ad644bc8ed78e9854fd"},{url:"assets/project.html-dSyUkutq.js",revision:"17c0a7770ddc41ab3fd82c618e65c883"},{url:"assets/quick-start.html-CDTi9j_x.js",revision:"20a0664f9d3be71e17311da5a3defad4"},{url:"assets/quick-start.html-CtJgA7BQ.js",revision:"c376e8a0c10a6a9d1aa921a6fec715cc"},{url:"assets/quick-start.html-nM1_otu_.js",revision:"f0e01d2ee5639796aae2d13b1f31a421"},{url:"assets/quick-start.html-SwoeuWFO.js",revision:"73122de7efb3e3ddcbec35b65e0fb81e"},{url:"assets/real-time-notes.html-D98-6eMa.js",revision:"20492f3aa596b87fde5c42cdfb66b84a"},{url:"assets/real-time-notes.html-Dq1zielh.js",revision:"c53879bf6d9f6f7cafabed3025f67dbf"},{url:"assets/real-time-notes.html-DXA-6NHi.js",revision:"b545d1b8ceaab45b790107518ed466f0"},{url:"assets/real-time-notes.html-SzNmkOvs.js",revision:"bf45fe3c34b020cbf9a7306b45212fa8"},{url:"assets/setup.html-BGRvFxzN.js",revision:"993400d49132cb2c3f804d9aeac4659e"},{url:"assets/setup.html-CoDnFKlg.js",revision:"9762217304c8f5f46de66bfdd6696bdc"},{url:"assets/setup.html-DeAm2Br4.js",revision:"ca3f759abac65ff136a50a672fae1330"},{url:"assets/setup.html-DWcLIRlj.js",revision:"c7d744dedc8533734cbab4d8f951ac6b"},{url:"assets/side-load.html-BbKBsyZE.js",revision:"56736a45b123168d23f9262e226ffaaa"},{url:"assets/side-load.html-C7QaW7kj.js",revision:"5989beb315f1a5702510193170ae6bd0"},{url:"assets/side-load.html-Ca6D2d6o.js",revision:"6dfa79f3f5b66c9f57e8d05f723bba17"},{url:"assets/side-load.html-COf8uP29.js",revision:"8a41b24a01fd24d045a17a5bd24e105c"},{url:"assets/star-request.html-3wrA7CzB.js",revision:"2d1d226638f8b368e7547ba6351d68ec"},{url:"assets/star-request.html-C1K7iXPX.js",revision:"7a5773f9a77c42e8d22ee94be34e8447"},{url:"assets/star-request.html-CEK1e01q.js",revision:"f0864635211277b45a20f1775a3414b5"},{url:"assets/star-request.html-CmUJduF7.js",revision:"aa54f5a2d527ae6d04c3f2903f94a232"},{url:"assets/style-Dktmk8W3.css",revision:"6acb82f0cb47272c724576c184ecba0c"},{url:"assets/style-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/support-us.html-4gY3dQLc.js",revision:"6155c39756f016c7e68ca3031c97502e"},{url:"assets/support-us.html-Bn5QC8L8.js",revision:"e40459fd277a11af6863accc7a1bec85"},{url:"assets/support-us.html-CMVUsxeJ.js",revision:"ee1978d66216c2f0d41da42f49b238fa"},{url:"assets/support-us.html-DI6JJI8n.js",revision:"ddec89ebaa4f98b297cc010b84a0ad9a"},{url:"assets/symposium1.html-H7bXKK_9.js",revision:"1b295c86d2f867019ff66603e06a90cf"},{url:"assets/symposium2.html-CB6mxB81.js",revision:"69de4fdd46a48cf42b4fa3a5a7d35ee4"},{url:"assets/tos.html-BhgjF5pP.js",revision:"1506ca3dfc1d48a76a46cc623826d2a3"},{url:"assets/tos.html-BrH9dnp9.js",revision:"d7abf0883e82c56338cc369507d961d6"},{url:"assets/tos.html-DCLbv-8L.js",revision:"6e9b0a2e3596884c90f496d21a4fecef"},{url:"assets/tos.html-q4ydoBYl.js",revision:"bacfc4b49cc1adbedd5dfe659cf03ad6"},{url:"assets/uninstall.html-CpNzdP8V.js",revision:"8f3719c6eb23999f13543d0e1dbcf1de"},{url:"assets/uninstall.html-DqFVkydS.js",revision:"0945ae39aeaaa3be9ee81e0eccab4bb2"},{url:"assets/uninstall.html-recTP38H.js",revision:"d18053bedb27135693b78bc43a0d24f4"},{url:"assets/uninstall.html-uPuYWa9x.js",revision:"48696b020c647fbeb97cafa7e553e182"},{url:"assets/update-log.html-BKswT1AY.js",revision:"0654cdbf11c8c92d43af2a4c6efd11cf"},{url:"assets/update-log.html-CJD935hY.js",revision:"e965bc17f76b1addf32f9f832437aaa7"},{url:"assets/update-log.html-DJUnv7xC.js",revision:"2149ddab480b044780a24c8e7acd9abd"},{url:"assets/update-log.html-R2NDDzYN.js",revision:"564659e0c5fa8b4fafc712067663ae25"},{url:"assets/version-1-9-0-breaking-changes.html-C2FwkFIv.js",revision:"eba76f740d74f2be207805ef30b01395"},{url:"assets/version-1-9-0-breaking-changes.html-Cy3WCo_u.js",revision:"47129e33fdf6458ecdf8bc5ea1de74fb"},{url:"assets/version-1-9-0-breaking-changes.html-Dp91eGvw.js",revision:"aab3c05c45ef93091a26160c172246d0"},{url:"assets/version-1-9-0-breaking-changes.html-odKuV2m2.js",revision:"48b39d12d8354a47d8e6e7214f44116a"},{url:"assets/weapon-wiki.html-C80IfSr9.js",revision:"3b822f02f54621d0478bb77cf270d98c"},{url:"assets/weapon-wiki.html-CxrqQdia.js",revision:"82794a8534defe9f385c73d2deff2330"},{url:"assets/weapon-wiki.html-D_OpM96H.js",revision:"741d1fee052481492c466f0978b4a28e"},{url:"assets/weapon-wiki.html-ol6yeU4w.js",revision:"ad938f57e80b89dca92bdcf8f4541c75"},{url:"assets/wish-export.html-C54LsqsG.js",revision:"1ce8cc917a4eb980d2ee723e3ab8d151"},{url:"assets/wish-export.html-Do1ZXReh.js",revision:"628f82e918c931f848a02d3cc2a1e28b"},{url:"assets/wish-export.html-DU6pPCQ4.js",revision:"a4989d1b247324bdcff9a184bb7a97c6"},{url:"assets/wish-export.html-vPVPQffA.js",revision:"6546c8ce71f0453728d4e62e2b982a2c"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"images/202312/1Password-logo.svg",revision:"70b83e6026ab134a2f7836d315201592"},{url:"images/202312/C_sharp.svg",revision:"bdaccca278378c33d51a37613e6acd09"},{url:"images/202312/community.svg",revision:"a6416747c570bdf5443e2d03094adf2b"},{url:"images/202312/digitalocean-horizontal.svg",revision:"cc43a74e8c264d19bfd6575d9fd4e67d"},{url:"images/202312/discord.svg",revision:"1e0d18bad882e0adf80fd212bf879243"},{url:"images/202312/documents.svg",revision:"6cdb5625f4c6bd4c0abb725dd0a3332b"},{url:"images/202312/github-mark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"images/202312/gitlab-logo.svg",revision:"d06c9d4a634d4f0345fe4e35add3f933"},{url:"images/202312/jihulab.svg",revision:"16fdc7c7a02de0bf63a48c0e498d30fb"},{url:"images/202312/tencent.svg",revision:"b18acecbd9c07541fd34d6f07645c6ed"},{url:"images/202312/uptime-kuma.svg",revision:"e4ed8e71ba8f67c89b305aab8f641790"},{url:"images/202312/uptimerobot-logo.svg",revision:"77e3e93be900d9d9b4d9ad69ce69662b"},{url:"images/202312/video-editing.svg",revision:"be4022972dace1067ae8218338311658"},{url:"images/202312/Vue.js.svg",revision:"9a45fc7689867939804c469bfcd17784"},{url:"images/202401/javascript.svg",revision:"891a71b9a98f1d58491e1b06c4d356a2"},{url:"images/202401/Microsoft_Office_OneDrive.svg",revision:"51d2a9bb48ab28ba3a2aadbaa7a69f52"},{url:"images/202402/ux-design.svg",revision:"540420913952ca6b97c2e6d3e0d1d4c8"},{url:"svg/afd-official.svg",revision:"bec79d5731d1c28c509746469eaafd0c"},{url:"svg/afdian.svg",revision:"22e22e64ee9da786e70d0ead0dc1ef26"},{url:"svg/crowdin-light.svg",revision:"74707ad6ef73e20c671c197b31d72189"},{url:"svg/ducalis.svg",revision:"8ecc71258d180a1a014cc0730caef494"},{url:"svg/jetbrains.svg",revision:"2d77be0dd63858a25d034b11773b95ac"},{url:"svg/paypal.svg",revision:"1c4f7c36fe6bbed4976169bf2e4dab8a"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"404.html",revision:"476e8e1082c4b23bb8d8c81414ac8214"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"images/202312/1-8-5-installer.png",revision:"aa697cf352e40598be53ffd543378a4f"},{url:"images/202312/DGP-v3.webp",revision:"b84981827cc8f401ddc5590049e09d8d"},{url:"images/202312/genshin-pizza-helper-logo.webp",revision:"ef87a086cb120946887220bb9d325cd7"},{url:"images/202312/miao-plugin-logo.webp",revision:"376109bfb0be20f6e6552a2faa6de961"},{url:"images/202312/MSEdge.webp",revision:"36c15ad3c07c5d30788df358be4de586"},{url:"images/202312/signpath-logo.png",revision:"b60b1d15de8d94117e1e1bd504951589"},{url:"images/202312/ysin-logo.png",revision:"8bf3e90190298fe08c6bf8001e29c6da"},{url:"images/202402/aifadian-qr.png",revision:"5808dc46c9eb723584137c75355e3cfc"},{url:"images/202402/github-sponsor.png",revision:"36e36d7440093bc067861599f1597d61"},{url:"images/202402/paypal-qr.png",revision:"e2ca9effe9b5862fa5508d941b17375a"},{url:"images/202403/en-default-social.webp",revision:"79e869a5b39c24a57963a1048495e4cd"},{url:"images/202403/zh-default-social.webp",revision:"5fdbfa1de3ffa7af198a4c9929eb188a"},{url:"images/202404/wish_import_zh-cn.webp",revision:"a470b1ed0f9b3010f6ecd3f0cdd40fc5"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
