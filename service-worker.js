if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const t=e=>a(e,c),b={module:{uri:c},exports:d,require:t};s[c]=Promise.all(i.map((e=>b[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1-8-5-installer-BiBVFR-v.js",revision:"cc13e2b00164710d0ed707ea46e4a8ef"},{url:"assets/404.html-C1R96AyP.js",revision:"57d0d4ea06c1a630c7ce181548821ef3"},{url:"assets/achievements.html-BY9bzHJ8.js",revision:"29587fecb37ce003ff8567a4dd7a32a7"},{url:"assets/achievements.html-CkKc42M5.js",revision:"7d0a200304429d89480c5120b9211df3"},{url:"assets/achievements.html-CSWztBDs.js",revision:"a7503152a54fcce001d586f01882af97"},{url:"assets/achievements.html-iks8VrzX.js",revision:"5c14d6efa0bfc8313d157503f67be0c8"},{url:"assets/app-BAxxDba1.js",revision:"c4b006c7c53fe1f33cbf75636264b736"},{url:"assets/archive.html-DnlNhy1m.js",revision:"52230b6a5eb9db556e6f782bde968df7"},{url:"assets/bug-report.html-BOkt2JQV.js",revision:"58da9295aa57aec72710b469cf2afecd"},{url:"assets/bug-report.html-DeYiS8bz.js",revision:"9248271efad874661b2c751ddb5cf41f"},{url:"assets/bug-report.html-DXEmVzgy.js",revision:"f1ff57f3c05927f01aff6c44b7f402bc"},{url:"assets/bug-report.html-RXS8assV.js",revision:"5ebf9d5865175fcf7989599a29cac372"},{url:"assets/character-data.html-CSq3HxI4.js",revision:"35f308d972607aa6a6b1464f3c1d981c"},{url:"assets/character-data.html-D5YKBNr2.js",revision:"bae4ea29dd0497e70e4be8b25af9e39f"},{url:"assets/character-data.html-DaIFk7pI.js",revision:"45b105b7f01a7b53904ff0783909364b"},{url:"assets/character-data.html-kFHKNJ8E.js",revision:"c59faca4fcd204903828d53ca0eece26"},{url:"assets/character-wiki.html-B66QwT1Z.js",revision:"a8492eb3ed5f6e1931f30ec95a20d45e"},{url:"assets/character-wiki.html-BNHnE9pp.js",revision:"542955ee78d0451f22e8c6dcb16000a7"},{url:"assets/character-wiki.html-PJFGb10F.js",revision:"dde91862b7e6526b2646ed432109da72"},{url:"assets/character-wiki.html-YCOTKW2R.js",revision:"9432e3a94390247a9aad9433b2ceed3f"},{url:"assets/community.html-B_2rwW22.js",revision:"b7eebf327ea786000c1920c91fa4edf0"},{url:"assets/community.html-DIQOeFMm.js",revision:"46e57fed496646337ee6d72b8443817f"},{url:"assets/community.html-L2xU3jpk.js",revision:"4017a5a9f570545f918394c6940af0ba"},{url:"assets/community.html-y--7NX4S.js",revision:"92e76f8bad42316a8e730b22d83b9abb"},{url:"assets/contribute.html-Caa3ug6e.js",revision:"a30035308e34bffa3e4a72dd98d2d5ad"},{url:"assets/contribute.html-DpEDWPyZ.js",revision:"8b4be51ae676d43a0c442e24b7bb33d4"},{url:"assets/contribute.html-DPzW6XQv.js",revision:"6b79828b3d7dfada1b677f5cfbcbae86"},{url:"assets/contribute.html-OBvR_9Xy.js",revision:"2c73be3dd637ea71344a1017e4074765"},{url:"assets/dashboard.html-BdszdtSk.js",revision:"b0d815e4f944482a7d8b96afed6754f0"},{url:"assets/dashboard.html-Bq3A5wHr.js",revision:"22f4e1ca66f5072293e987f5f5c378cd"},{url:"assets/dashboard.html-BxkkD1xL.js",revision:"77de60c838fa9fc902aec3dc5f222097"},{url:"assets/dashboard.html-DK--x7rx.js",revision:"97e8c36d72457679ce52cf1fb0924b7c"},{url:"assets/dependency.html-BdXFLDHs.js",revision:"49be453cf35a3e9fb18081a2c70a390c"},{url:"assets/dependency.html-CasVJi31.js",revision:"275804be5e6f72d960c206fe935bc06b"},{url:"assets/develop-plan.html-BVx2KIl1.js",revision:"0774451e778d17285701a2aaeac3bd35"},{url:"assets/develop-plan.html-CDtFUmLc.js",revision:"deff77e0f2b710426e701bdb4bb4fc28"},{url:"assets/develop-plan.html-DC98lrL0.js",revision:"286d6fa358e4c9a24688b1f78d1b12bc"},{url:"assets/develop-plan.html-DmwFgiVo.js",revision:"d632ee9b3c9d3747fe18b8115e1310b6"},{url:"assets/digitalocean-horizontal-Nm6MkYI3.js",revision:"eaa4cbd043bf24493eda53d39fbaf796"},{url:"assets/docsearch-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/exceptions.html-Cg1C57Ne.js",revision:"1ef4e11290a8e6f509c40ef56ea63123"},{url:"assets/exceptions.html-Cg3X41kA.js",revision:"32070212752c0dc5bfed58718b8663c8"},{url:"assets/exceptions.html-CLw3d3Ai.js",revision:"44c3a53d165c1310d7b9b6471dc9d1ff"},{url:"assets/exceptions.html-STXeKewQ.js",revision:"cd488851cd42bfa6d27b5aa6cc20d365"},{url:"assets/FAQ.html-B1MWi7JT.js",revision:"cac228f4c13075930426fc31d11695db"},{url:"assets/FAQ.html-CwSw9faC.js",revision:"75817e387cbd42c712ad735dafa761fd"},{url:"assets/FAQ.html-DwakhiUt.js",revision:"41f0c87c52b9f39fc0f0f9d1aafd4ca2"},{url:"assets/FAQ.html-u0s9OoE0.js",revision:"e53fd3272b9c1f2234239000fab9e77b"},{url:"assets/feedback-center.html-BK5QeBra.js",revision:"e3f42e9363905f74bbe4789b43d993a5"},{url:"assets/feedback-center.html-fiDEqiI6.js",revision:"71657ba2e8b79b6a1c2096812a1233ab"},{url:"assets/Gacha-system-and-export-principal.html-5GzYw1d7.js",revision:"65cf4b84448a4b35d535935048b32eae"},{url:"assets/Gacha-system-and-export-principal.html-D-sVnW_o.js",revision:"3521665af82658e62676e9a592ea3445"},{url:"assets/Gacha-system-and-export-principal.html-D1rZEzlM.js",revision:"98840095f9c213cafe18253ca586be0b"},{url:"assets/Gacha-system-and-export-principal.html-yFMaN-C9.js",revision:"d56cd689b8ec1c08f93e8b86654e9267"},{url:"assets/game-launcher.html-BXpraSxI.js",revision:"1e61cd4187117acfdfd94f1b372a490b"},{url:"assets/game-launcher.html-Ch0j6DI9.js",revision:"8a9a7c27208422d817c7bce5a719cc91"},{url:"assets/game-launcher.html-CQ0bL2J_.js",revision:"d80b34c072ab5874c73f0b27e502d072"},{url:"assets/game-launcher.html-FuR-ZyhD.js",revision:"eb2868884f67a6f3e98f09a3f7c9e0f1"},{url:"assets/get-stoken-cookie-from-the-third-party.html-BRS0-Tke.js",revision:"56a747d9966469dd222b1410cca434c7"},{url:"assets/get-stoken-cookie-from-the-third-party.html-C1gqlvyq.js",revision:"31b9e2c34b24a7834652f4212c0738d3"},{url:"assets/get-stoken-cookie-from-the-third-party.html-Etp2Sxb7.js",revision:"66ed6b576e89e0318efd345f7f505984"},{url:"assets/get-stoken-cookie-from-the-third-party.html-TwWJHykY.js",revision:"2cfbe0aa803de83df350859ce0d52fa1"},{url:"assets/giscus--_FS5kYt.js",revision:"bb05431bc292361992e6141ce0948b43"},{url:"assets/hutao-API.html-BTpc0_ki.js",revision:"07eb3abe8b1aea2aec7b92325264e2ef"},{url:"assets/hutao-API.html-DkfF-1cs.js",revision:"16f33733a7f1dd33bd04f80cfb401ca1"},{url:"assets/hutao-API.html-DkO6v9LN.js",revision:"606d75930bf3b182b2a7e38e5b3b014f"},{url:"assets/hutao-API.html-DlvFAZpm.js",revision:"1a1b22ed682080e0b99a942c422dbb54"},{url:"assets/hutao-passport.html-DcRyBLs4.js",revision:"00b458e91d5e3e7d000847fced347f43"},{url:"assets/hutao-passport.html-DRUCg040.js",revision:"8e25bc6ea941cd1c1635e940fd1e2745"},{url:"assets/hutao-settings.html-BA6t9LKr.js",revision:"74ebafb6e6ef7383e04fcb9628f952f8"},{url:"assets/hutao-settings.html-Bei22y9y.js",revision:"6d046a390f2184e980a7e51986a2f0cc"},{url:"assets/hutao-settings.html-BTEWK1YT.js",revision:"9fefb1c1c2e6b2bc50b83440c44e04a2"},{url:"assets/hutao-settings.html-DDzU18Es.js",revision:"23c7d7af1d587b3674db917a7ddaf9ce"},{url:"assets/i18n.html-BlnmD7EL.js",revision:"1ed094ad0ab4657fa77d5941e8694529"},{url:"assets/i18n.html-CFA9B_vL.js",revision:"c0484eb51f0148d831450d24cb2e544d"},{url:"assets/i18n.html-MMud4Umj.js",revision:"b913cff7d97bfd8a66d67d464197e229"},{url:"assets/i18n.html-XlXlE0y_.js",revision:"fb94891e386a8f8fbe3bf1561fe3fa64"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-zMbLkDvU.js",revision:"31f36bdf766eca20dff7683b6d0b15c7"},{url:"assets/index.html-ax-EvzJ0.js",revision:"4af7f54d5a4c609561ed9b8000702c54"},{url:"assets/index.html-B4vKdMGu.js",revision:"41bec6df5061cd227cc28b879b8a6c39"},{url:"assets/index.html-BakUkMLn.js",revision:"29c19825c69c95c9919a72b700068d9b"},{url:"assets/index.html-Bb6koFLq.js",revision:"70ce55feaec4fd09ac757525808dfe0f"},{url:"assets/index.html-Bl3hrYaS.js",revision:"6c3648bb935d305fc6425bed796bd21e"},{url:"assets/index.html-Bvqe6y96.js",revision:"eb2c3b57f4e8fd19f398d699c428391d"},{url:"assets/index.html-ByLdTkxY.js",revision:"af584aee2a037a6ed2d42134ac33b73a"},{url:"assets/index.html-C1kKcU3p.js",revision:"f3cea6bdcb727c9a6d8452b5e8c46229"},{url:"assets/index.html-C4reOSCe.js",revision:"55fa0c74ad396f22de115c05e641a29f"},{url:"assets/index.html-CAEdNkJx.js",revision:"d90725881f8e3dee7f0f22620abc6408"},{url:"assets/index.html-CbPo6zn_.js",revision:"74ecb8281abc8150dbe0f89098843684"},{url:"assets/index.html-CCLxvZ4E.js",revision:"eaac4f4f52b43ae3f801478cb13d5ee0"},{url:"assets/index.html-cFtVCLEg.js",revision:"986a7e90d32c0b7ad8815c1cd349104d"},{url:"assets/index.html-CIiSYO1z.js",revision:"f9315172e5fe03fb0b64a749bd738b08"},{url:"assets/index.html-CiT0loJY.js",revision:"335114ce863652eb00c361ff64337940"},{url:"assets/index.html-CJZV2gmV.js",revision:"3c11b460a910d7f153e0dc191cdba83e"},{url:"assets/index.html-CqftXKdK.js",revision:"b030af1a1695357fb23ab6336d6526e9"},{url:"assets/index.html-CVwyVLPC.js",revision:"75fc935525542ccac6bbb4f0fced7475"},{url:"assets/index.html-DaA0yuy4.js",revision:"9bfdfe32b2fac1a3bde9507802a75850"},{url:"assets/index.html-DB6bjLNP.js",revision:"ffc8064b499e4b3e8d31a5555f522952"},{url:"assets/index.html-DbCrzzaw.js",revision:"845e85d1971117aeeca0848162829270"},{url:"assets/index.html-DNTbnc49.js",revision:"422b2b51924ec9af86ad9db2a060ad6c"},{url:"assets/index.html-DoZ49QnG.js",revision:"2c098624dabdfa609bf340e98b5a8fd2"},{url:"assets/index.html-Duql3Db_.js",revision:"eca491cb2f86b2998d8b043de7dba8e4"},{url:"assets/jetbrains-BhnMeNcK.js",revision:"5c61e71209952149b8a225ed775ca3a6"},{url:"assets/join.html-BwYwNX6t.js",revision:"ca2c28046d06eae45f8ab5038848dc5a"},{url:"assets/join.html-CUQxo52e.js",revision:"9402f928299c3b0e627f9a0dddc5e5be"},{url:"assets/join.html-DrMD0Oq6.js",revision:"be4f0fd0b828922c44d07af96cff0e93"},{url:"assets/known-issue.html-BmrJLBSa.js",revision:"758dcb54cad00d2405347aed3a5c419e"},{url:"assets/known-issue.html-D8aw586Z.js",revision:"19329cf78f4d5d08199f70abb914b903"},{url:"assets/known-issue.html-DMd04wol.js",revision:"5a9338c7ebaa6ba66fbc941ccdf95bc0"},{url:"assets/known-issue.html-F0WYxaaZ.js",revision:"aab0b483553279e62a123b0925ad601a"},{url:"assets/menu.html-a09y5_Ja.js",revision:"ca931250e8e76f56c9ae8b7ddeb04ba2"},{url:"assets/menu.html-Bo_HjIVQ.js",revision:"6717bb5bc72e6db1106394f781020fac"},{url:"assets/menu.html-CGkVd0g2.js",revision:"078c48ee7f1fbe7c317f97eccc7d73ac"},{url:"assets/menu.html-x71yCYS2.js",revision:"696e8d165e634af44a0c8e4217c92e78"},{url:"assets/mhy-account-switch.html-cqFWHRQl.js",revision:"7165d6ec188bd71a30f1d084e190e61f"},{url:"assets/mhy-account-switch.html-Oxai67ZY.js",revision:"ae868e834d319d6d295d0b6c621e187b"},{url:"assets/mhy-account-switch.html-PdrK7toz.js",revision:"d7b714469533e5d17685fc200efe1dd0"},{url:"assets/mhy-account-switch.html-UFM1fvkq.js",revision:"895818e27ee3a6801ce20e736e23729e"},{url:"assets/monster-wiki.html-Coq6NNd9.js",revision:"6a8fa7afc08b8a42027cba65719e1ced"},{url:"assets/monster-wiki.html-DfN7jgoJ.js",revision:"6057e12e2a1d3f20dd379def199c55d7"},{url:"assets/monster-wiki.html-fjU4KPm5.js",revision:"3db9e8bb1e1a6d4af165cb7464954d57"},{url:"assets/monster-wiki.html-mftB0An7.js",revision:"d434099a57fd7b71096302eb25c9f6e3"},{url:"assets/MSEdge-Bvt55oa-.js",revision:"664a8be7f006b82a3d2eac682334d154"},{url:"assets/photoswipe.esm-SzV8tJDW.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/platform.html-BDSDUoPI.js",revision:"7cd49f2756516a20d7940c18c38f7723"},{url:"assets/platform.html-DjXLyNMI.js",revision:"b67e23ad04245a9e43a6d9dc352e76a3"},{url:"assets/platform.html-DR1YcFeM.js",revision:"a04ee03ea6bc11de3a7c9b7d3c669e4d"},{url:"assets/platform.html-DyfspxYM.js",revision:"cf04fc55889d604cbf0810f85d13f35d"},{url:"assets/privacy-notice.html-Bg7Bo-qr.js",revision:"1e227c51ebeeba4159ebab6fb8023e3e"},{url:"assets/privacy-notice.html-BTaUIT9P.js",revision:"e384bf276b6689eb4abed60fc5db4064"},{url:"assets/privacy-notice.html-D-vNYHnG.js",revision:"82e016827e7331a573b6f06ac3118b8e"},{url:"assets/privacy-notice.html-RnPumPoK.js",revision:"abea019a1358deef9f5e3672f5bb357d"},{url:"assets/project.html-7U1-X4KT.js",revision:"6883c2688672872396711c92d7b773e2"},{url:"assets/project.html-BvAj2_ux.js",revision:"0fd92b8d96c098da700e5a5c8743a195"},{url:"assets/project.html-CTuqCme1.js",revision:"0a68703af0e02efb98c4d5d8aaff5aa9"},{url:"assets/project.html-kNGl0RMj.js",revision:"6d59320b2eebcaf144c1a96a80533768"},{url:"assets/quick-start.html-DmMP3i6d.js",revision:"957d860c4ba29572d008a2c0f7c7c036"},{url:"assets/quick-start.html-DQnjLFNl.js",revision:"e50d164b23c3016f6b21c3de6781eb4d"},{url:"assets/quick-start.html-DZgmc7zB.js",revision:"1da4925eb560a24b5cd2965afdee6e96"},{url:"assets/quick-start.html-gFJPBCph.js",revision:"7627b493f1da554f977e5a6c6148677e"},{url:"assets/real-time-notes.html-BMO6HlHi.js",revision:"d6bdf81178bb0c987665e84d71d174d9"},{url:"assets/real-time-notes.html-BnAI5UTd.js",revision:"7bb9cf1345a80f5bb0b8409d8da9a045"},{url:"assets/real-time-notes.html-CFRSsY3Y.js",revision:"05c4efc80c7e008be7b6af5a9b459548"},{url:"assets/real-time-notes.html-D7fkLczV.js",revision:"3df0d03c980b18eed4b606b570d83393"},{url:"assets/setup.html-BNF_WbHe.js",revision:"8c0f90d165525bf953c4b91a8fb29ef4"},{url:"assets/setup.html-CzZJ-v87.js",revision:"f53e942d78f53cb00263ec48ded63a08"},{url:"assets/setup.html-Dew5gfTS.js",revision:"6abe4846fccfb78cdbc07e1b02d446c1"},{url:"assets/setup.html-q98VoJZQ.js",revision:"62ae971a548891574a9e4ba43093e84e"},{url:"assets/side-load.html-Bb5L0nfh.js",revision:"9b2f81c621ee96d530b31ce3ce93c717"},{url:"assets/side-load.html-Cfc_02c_.js",revision:"84d90cb68e589020e03dc28963562708"},{url:"assets/side-load.html-CzfeSdX0.js",revision:"74650c978868cf18411a6fcd62788779"},{url:"assets/side-load.html-SXpeQIFu.js",revision:"63ee5a597b3a891086868b48fdd7ea00"},{url:"assets/star-request.html-Av-SoI8U.js",revision:"10e96cdc7ee5c88e2a4d03ceb96d9f66"},{url:"assets/star-request.html-DIgpkgpv.js",revision:"cdda62771a58dd821bcca8083ad2dcc5"},{url:"assets/star-request.html-PVJ2Hi46.js",revision:"8e5faddd54657b0049270495c3060a3f"},{url:"assets/star-request.html-WgZErx67.js",revision:"2a258021618441e432c3da83bb8deea4"},{url:"assets/style-Dktmk8W3.css",revision:"6acb82f0cb47272c724576c184ecba0c"},{url:"assets/style-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/support-us.html-BYX6xTi-.js",revision:"130c560b0262e0bf6e7638ef97fe3824"},{url:"assets/support-us.html-Cs99LlYI.js",revision:"58504b9e3c2bd459faf83e9391a88614"},{url:"assets/support-us.html-DNY6ZJj4.js",revision:"e35e90ca80e256219f34b0e7a063ce81"},{url:"assets/support-us.html-EurrH7WW.js",revision:"dedab2f20e1d5bb639e04fecb1f74b77"},{url:"assets/symposium1.html-BVDhMIdB.js",revision:"905c992647e4f250902b7987cb0cf282"},{url:"assets/symposium2.html-CZvtizf5.js",revision:"d22fc47d8d319901f79f3b60b4a24b43"},{url:"assets/tos.html-BtGxcDrP.js",revision:"32a6ab1bc774f71f0524edf6ce0875a8"},{url:"assets/tos.html-COr8csxA.js",revision:"97d60cd727e6eb467de728cdcb09f05b"},{url:"assets/tos.html-CUMkseTp.js",revision:"5cd932ee72d6ae3b9d6587867f18d6cf"},{url:"assets/tos.html-DdGm1Ush.js",revision:"dd4415b2b91eb45d0626ab8b034ff9c7"},{url:"assets/uninstall.html-B-VS8_pq.js",revision:"0ce9e80b1e27fa633a69128c9d43b5b4"},{url:"assets/uninstall.html-BkG8JE6j.js",revision:"1dea5eb4fcad287f9763e2ced6a04893"},{url:"assets/uninstall.html-BqJ3WX9K.js",revision:"a1624e6416b35ae12de18d77882b52be"},{url:"assets/uninstall.html-GwA7ENZt.js",revision:"3206b0d8f87b1286991e15b87e514acd"},{url:"assets/update-log.html-B2VuRPUK.js",revision:"58c97f1cfa08f66fc7c10dfc752c20f9"},{url:"assets/update-log.html-CHGTUpE1.js",revision:"490005445581288165a56adef7eacce3"},{url:"assets/update-log.html-CT7QRKy1.js",revision:"b280a1adcb867dc5b45fafdc1249398c"},{url:"assets/update-log.html-p36GVV1R.js",revision:"96e13ebedcc3f87f96d3e3584a192549"},{url:"assets/version-1-9-0-breaking-changes.html-BMhYMGKB.js",revision:"471a9b502adb3c6862b5812187515325"},{url:"assets/version-1-9-0-breaking-changes.html-C8wHJRN5.js",revision:"c26d0c188f2ca085db5f6c4e121c6f53"},{url:"assets/version-1-9-0-breaking-changes.html-CrGVetav.js",revision:"b96a3c913545404f7640dc1e59d7e948"},{url:"assets/version-1-9-0-breaking-changes.html-DLcnIK7c.js",revision:"7d6ee2042fd67d62dc46b743b0d6ff6e"},{url:"assets/weapon-wiki.html-B5UNE2Is.js",revision:"9c210a6b3c687acf4c50dd34db8ad882"},{url:"assets/weapon-wiki.html-DKMR4o16.js",revision:"9dacb3602d915a69741ff03d9d3d3533"},{url:"assets/weapon-wiki.html-DneK5D0z.js",revision:"a615e0aae01edc01c9273718194c432e"},{url:"assets/weapon-wiki.html-K3J70vTR.js",revision:"8d02a787d670d85180c5a4151756cc48"},{url:"assets/wish-export.html-231-pc2R.js",revision:"ab0fbf00eca14d1f07f1b59dae3030e0"},{url:"assets/wish-export.html-Blie8oHy.js",revision:"32ef726038d777a7dc5750c612cf06df"},{url:"assets/wish-export.html-CBR_ZcDE.js",revision:"5d24ac04f95cd6d201b39e0e46273bfe"},{url:"assets/wish-export.html-DaeLpO_Z.js",revision:"b4204612ee4d030cf08e08840e21226d"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"images/202312/1Password-logo.svg",revision:"70b83e6026ab134a2f7836d315201592"},{url:"images/202312/C_sharp.svg",revision:"bdaccca278378c33d51a37613e6acd09"},{url:"images/202312/community.svg",revision:"a6416747c570bdf5443e2d03094adf2b"},{url:"images/202312/digitalocean-horizontal.svg",revision:"cc43a74e8c264d19bfd6575d9fd4e67d"},{url:"images/202312/discord.svg",revision:"1e0d18bad882e0adf80fd212bf879243"},{url:"images/202312/documents.svg",revision:"6cdb5625f4c6bd4c0abb725dd0a3332b"},{url:"images/202312/github-mark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"images/202312/gitlab-logo.svg",revision:"d06c9d4a634d4f0345fe4e35add3f933"},{url:"images/202312/jihulab.svg",revision:"16fdc7c7a02de0bf63a48c0e498d30fb"},{url:"images/202312/tencent.svg",revision:"b18acecbd9c07541fd34d6f07645c6ed"},{url:"images/202312/uptime-kuma.svg",revision:"e4ed8e71ba8f67c89b305aab8f641790"},{url:"images/202312/uptimerobot-logo.svg",revision:"77e3e93be900d9d9b4d9ad69ce69662b"},{url:"images/202312/video-editing.svg",revision:"be4022972dace1067ae8218338311658"},{url:"images/202312/Vue.js.svg",revision:"9a45fc7689867939804c469bfcd17784"},{url:"images/202401/javascript.svg",revision:"891a71b9a98f1d58491e1b06c4d356a2"},{url:"images/202401/Microsoft_Office_OneDrive.svg",revision:"51d2a9bb48ab28ba3a2aadbaa7a69f52"},{url:"images/202402/ux-design.svg",revision:"540420913952ca6b97c2e6d3e0d1d4c8"},{url:"svg/afd-official.svg",revision:"bec79d5731d1c28c509746469eaafd0c"},{url:"svg/afdian.svg",revision:"22e22e64ee9da786e70d0ead0dc1ef26"},{url:"svg/crowdin-light.svg",revision:"74707ad6ef73e20c671c197b31d72189"},{url:"svg/ducalis.svg",revision:"8ecc71258d180a1a014cc0730caef494"},{url:"svg/jetbrains.svg",revision:"2d77be0dd63858a25d034b11773b95ac"},{url:"svg/paypal.svg",revision:"1c4f7c36fe6bbed4976169bf2e4dab8a"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"404.html",revision:"a159322c84714beadae185e74a3f9ee9"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"images/202312/1-8-5-installer.png",revision:"aa697cf352e40598be53ffd543378a4f"},{url:"images/202312/DGP-v3.webp",revision:"b84981827cc8f401ddc5590049e09d8d"},{url:"images/202312/genshin-pizza-helper-logo.webp",revision:"ef87a086cb120946887220bb9d325cd7"},{url:"images/202312/miao-plugin-logo.webp",revision:"376109bfb0be20f6e6552a2faa6de961"},{url:"images/202312/MSEdge.webp",revision:"36c15ad3c07c5d30788df358be4de586"},{url:"images/202312/signpath-logo.png",revision:"b60b1d15de8d94117e1e1bd504951589"},{url:"images/202312/ysin-logo.png",revision:"8bf3e90190298fe08c6bf8001e29c6da"},{url:"images/202402/aifadian-qr.png",revision:"5808dc46c9eb723584137c75355e3cfc"},{url:"images/202402/github-sponsor.png",revision:"36e36d7440093bc067861599f1597d61"},{url:"images/202402/paypal-qr.png",revision:"e2ca9effe9b5862fa5508d941b17375a"},{url:"images/202403/en-default-social.webp",revision:"79e869a5b39c24a57963a1048495e4cd"},{url:"images/202403/zh-default-social.webp",revision:"5fdbfa1de3ffa7af198a4c9929eb188a"},{url:"images/202404/wish_import_zh-cn.webp",revision:"a470b1ed0f9b3010f6ecd3f0cdd40fc5"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
