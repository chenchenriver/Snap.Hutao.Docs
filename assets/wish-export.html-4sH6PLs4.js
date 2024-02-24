import{_ as h,r,o as c,c as d,a as e,b as t,d as o,w as s,e as a}from"./app-DLNTSsrB.js";const u={},p=e("h1",{id:"wish-history",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wish-history"},[e("span",null,"Wish History")])],-1),f=e("p",null,[t("Gacha is one of the core gameplay in Genshin Impact. Whether it's for commemorative and show-off purposes, or for serious planning for a gacha strategy, it's very important to perform statical analysis on historical gacha record. However, Genshin Impact only provides players with six months of gacha records, which is not user-friendly "),e("s",null,"(although they still keep tracking how many Timmie's pigeons you've killed for the whole year)")],-1),m=e("p",null,"Therefore, we need to use the gacha records from these six months to retrieve the data and transfer the record to our local device. This is the purpose of wish history export feature in Snap Hutao.",-1),y=a('<p><img src="https://img.alicdn.com/imgextra/i1/1797064093/O1CN01AYR3I41g6dyGBmAw5_!!1797064093.png_.webp" alt="wish export" loading="lazy"></p><p><strong>As shown in the above figure, through the wish history feature in Snap Hutao, you can clearly obtain the following information: total number of wishes, current pity count, quantity and percentage of obtained items with different rarity, number of times a 5-star rarity item was not obtained and the current pity status.</strong></p><p><strong>Additionally, user with Hutao Cloud can view prediction data calculated by Hutao Cloud server</strong></p><div class="hint-container note"><p class="hint-container-title">Delay in Gacha Data Export</p><p>Snap Hutao retrieves gacha records from the MiHoYo servers, which means that recently made wishes may not be immediately available. When you see the latest batch of gacha records in the game&#39;s own history, then you can then obtain the corresponding statistics from Snap Hutao.</p></div><h2 id="fetch-wish-history" tabindex="-1"><a class="header-anchor" href="#fetch-wish-history"><span>Fetch Wish History</span></a></h2>',5),g={id:"refresh-with-stoken-cookie",tabindex:"-1"},w={class:"header-anchor",href:"#refresh-with-stoken-cookie"},_={class:"hint-container info"},b=e("p",{class:"hint-container-title"},"Hint",-1),x=e("li",null,[e("strong",null,"SToken Cookie refresh method does not support global server (HoYoLAB)")],-1),v=e("ul",null,[e("li",null,"Make sure the account you want to refresh wish history has been signed in to Snap Hutao"),e("li",null,[t("Switch to "),e("code",null,"Wish History"),t(" feature page in Snap Hutao")]),e("li",null,[t("Click on "),e("code",null,"Refresh"),t(" button and select "),e("code",null,"SToken Refresh")]),e("li",null,"Wait for refresh task to complete")],-1),k={id:"refresh-with-web-cache",tabindex:"-1"},S={class:"header-anchor",href:"#refresh-with-web-cache"},H=a('<ul><li>Switch to <code>Wish History</code> feature page in Snap Hutao</li><li>Start the game, go to in-game wish history page</li><li>Go back to Snap Hutao, clock on <code>Refresh</code> button and select <code>Refresh with Web Cache</code></li><li>Wait for refresh task to complete</li></ul><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>If errors keep occur:</p><ul><li>Go to settings page in Snap Hutao</li><li>Execute operation <code>Delete game embeeded browser web cache</code></li></ul></div>',2),C={id:"refresh-with-manually-input-url",tabindex:"-1"},I={class:"header-anchor",href:"#refresh-with-manually-input-url"},W=a('<ul><li>If you get your personal wish history URL, you can select <code>Manual Input</code> and submit your wish history URL</li><li>Be aware that the URL is time-sensitive</li></ul><h3 id="explanation-on-full-refresh-option" tabindex="-1"><a class="header-anchor" href="#explanation-on-full-refresh-option"><span>Explanation on Full Refresh Option</span></a></h3><p>By default, Snap Hutao will stop importing gacha records once it matches a Wish ID that already exists locally. However, if you wish to obtain all the historical records from the Genshin Impact servers (even if they are already present in your local wish history), you can check the &quot;Full Refresh&quot; option.</p><p>Not selecting <code>Full Refresh</code> will <strong>not</strong> cause you to lose your wishing data, and selecting <code>Full Refresh</code> will <strong>not</strong> cause your local records to mistakenly record the same wishing data twice.</p>',4),R={id:"import-wish-history-data-from-other-applications",tabindex:"-1"},G={class:"header-anchor",href:"#import-wish-history-data-from-other-applications"},D=a('<p>Snap Hutao supports importing wish history data file that in <code>UIGF data format</code><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>If you need to import such type of data, you can:</p><ul><li>Start Snap Hutao, switch to <code>Wish History</code> feature page</li><li>Select <code>Import</code></li><li>Select your UIGF Json data file</li><li>Check the imported file information and confirm to import</li></ul>',3),U={id:"export-wish-history-data",tabindex:"-1"},A={class:"header-anchor",href:"#export-wish-history-data"},F=e("p",null,"Snap Hutao support exporting wish history data to a Json file written in UIGF data format",-1),B=e("p",null,"If you need to export the wish history data, you can:",-1),T=e("ul",null,[e("li",null,[t("Start Snap Hutao, switch to "),e("code",null,"Wish History"),t(" feature page")]),e("li",null,[t("Switch to the archive you want to export, and select "),e("code",null,"Export"),e("ul",null,[e("li",null,"In the pop-up window, confirm your export path")])]),e("li",null,"Confirm and export data")],-1),E={id:"wish-history-cloud-sync",tabindex:"-1"},L={class:"header-anchor",href:"#wish-history-cloud-sync"},M=a('<p>With this feature, you can upload your wish history to Hutao Cloud, to avoid risk of losing data, and make it easier to transfer data between devices.</p><h3 id="cloud-sync-privilege" tabindex="-1"><a class="header-anchor" href="#cloud-sync-privilege"><span>Cloud Sync Privilege</span></a></h3><p>Cloud synchronization is a service uses Snap Hutao&#39;s server resource, so it is a time-limited feature. Currently, you have the following ways to enable Cloud Sync:</p><ol><li>Donate us on AiFaDian. The privilege will automatically assigned to Snap Hutao Account with same email address on AiFaDian</li><li>For all registered user, after upload Abyss record in each schedule, 3-day privilege will be automatically assigned <ul><li>This is a method you can constantly use benefit of Hutao Cloud</li></ul></li><li>Users who make contributions to our open-source community, including code development, program designing, localization translations, can contact the dev team to get your benefit for free <ul><li>We are designing an automation system to auto assign license to our contributors, it will be live with more development of Hutao Cloud</li></ul></li></ol><p>After your Hutao Cloud privilege expired, you will not be able to upload, download or delete your data, but your data will not be removed. You can continue to operate it once you get your privilege again.</p><h3 id="upload" tabindex="-1"><a class="header-anchor" href="#upload"><span>Upload</span></a></h3><ul><li>In wish export page, select the archive you need to sync data</li><li>Click <code>Snap Hutao Cloud</code> button on the top right</li><li>Click <code>Upload Current Wish Archive</code>, and then your data will be backup to the cloud</li></ul><h3 id="download" tabindex="-1"><a class="header-anchor" href="#download"><span>Download</span></a></h3><ul><li>In wish export page, Click <code>Snap Hutao Cloud</code> button on the top right</li><li>Click download button on the right side of UID which data needs to be downloaded</li></ul><h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete"><span>Delete</span></a></h3><ul><li>In wish export page, Click <code>Snap Hutao Cloud</code> button on the top right</li><li>Click delete button on the right side of UID which data needs to be deleted</li></ul><hr class="footnotes-sep">',12),N={class:"footnotes"},Y={class:"footnotes-list"},z={id:"footnote1",class:"footnote-item"},O={href:"https://uigf.org/",target:"_blank",rel:"noopener noreferrer"},P=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function q(V,J){const n=r("RouteLink"),i=r("Badge"),l=r("ExternalLinkIcon");return c(),d("div",null,[p,f,m,e("p",null,[t("Regarding the technical principles of exporting Genshin Impact gacha records, you can refer to our article on "),o(n,{to:"/ru/advanced/Gacha-system-and-export-principal.html"},{default:s(()=>[t("Gacha System and Export Principles")]),_:1})]),y,e("h3",g,[e("a",w,[e("span",null,[t("Refresh with SToken Cookie "),o(i,{text:"Recommend",type:"tip"})])])]),e("div",_,[b,e("ul",null,[e("li",null,[t("This method requires user to sign in to MiHoYo BBS account in Snap Hutao, refer to "),o(n,{to:"/ru/features/mhy-account-switch.html"},{default:s(()=>[t("MiHoYo BBS Account Switch")]),_:1}),t(" to get to know how to login to your MiHoYo BBS account")]),x])]),v,e("h3",k,[e("a",S,[e("span",null,[t("Refresh with Web Cache "),o(i,{text:"Global Server Supported",type:"tip"})])])]),H,e("h3",C,[e("a",I,[e("span",null,[t("Refresh with Manually Input URL "),o(i,{text:"Global Server Supported",type:"tip"})])])]),W,e("h3",R,[e("a",G,[e("span",null,[t("Import Wish History Data from Other Applications "),o(i,{text:"UIGF",type:"info"})])])]),D,e("h2",U,[e("a",A,[e("span",null,[t("Export Wish History Data "),o(i,{text:"UIGF",type:"info"})])])]),F,B,T,e("h2",E,[e("a",L,[e("span",null,[t("Wish History Cloud Sync "),o(i,{text:"Beta",type:"info"})])])]),e("blockquote",null,[e("p",null,[t("Wish history cloud sync is designed on Snap Hutao Account. You need to "),o(n,{to:"/ru/features/hutao-settings.html#snap-hutao-account"},{default:s(()=>[t("register an account in the settings")]),_:1}),t(" to use this feature")])]),M,e("section",N,[e("ol",Y,[e("li",z,[e("p",null,[t("Unified Standardized GenshinData Format is provided by "),e("a",O,[t("UIGF-Org"),o(l)]),t(),P])])])])])}const j=h(u,[["render",q],["__file","wish-export.html.vue"]]),Q=JSON.parse(`{"path":"/ru/features/wish-export.html","title":"Wish History","lang":"ru-RU","frontmatter":{"headerDepth":0,"category":["Feature","Tutorial"],"tag":["wish export","gacha","wish"],"order":4,"comment":false,"description":"Wish History Gacha is one of the core gameplay in Genshin Impact. Whether it's for commemorative and show-off purposes, or for serious planning for a gacha strategy, it's very i...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/features/wish-export.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/features/wish-export.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/features/wish-export.html"}],["meta",{"property":"og:url","content":"https://hut.ao/ru/features/wish-export.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Wish History"}],["meta",{"property":"og:description","content":"Wish History Gacha is one of the core gameplay in Genshin Impact. Whether it's for commemorative and show-off purposes, or for serious planning for a gacha strategy, it's very i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i1/1797064093/O1CN01AYR3I41g6dyGBmAw5_!!1797064093.png_.webp"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:updated_time","content":"2024-01-07T14:35:32.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Wish History"}],["meta",{"property":"article:author","content":"DGP-Studio"}],["meta",{"property":"article:tag","content":"wish export"}],["meta",{"property":"article:tag","content":"gacha"}],["meta",{"property":"article:tag","content":"wish"}],["meta",{"property":"article:modified_time","content":"2024-01-07T14:35:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Wish History\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i1/1797064093/O1CN01AYR3I41g6dyGBmAw5_!!1797064093.png_.webp\\"],\\"dateModified\\":\\"2024-01-07T14:35:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/ru/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"Fetch Wish History","slug":"fetch-wish-history","link":"#fetch-wish-history","children":[{"level":3,"title":"Refresh with SToken Cookie","slug":"refresh-with-stoken-cookie","link":"#refresh-with-stoken-cookie","children":[]},{"level":3,"title":"Refresh with Web Cache","slug":"refresh-with-web-cache","link":"#refresh-with-web-cache","children":[]},{"level":3,"title":"Refresh with Manually Input URL","slug":"refresh-with-manually-input-url","link":"#refresh-with-manually-input-url","children":[]},{"level":3,"title":"Explanation on Full Refresh Option","slug":"explanation-on-full-refresh-option","link":"#explanation-on-full-refresh-option","children":[]},{"level":3,"title":"Import Wish History Data from Other Applications","slug":"import-wish-history-data-from-other-applications","link":"#import-wish-history-data-from-other-applications","children":[]}]},{"level":2,"title":"Export Wish History Data","slug":"export-wish-history-data","link":"#export-wish-history-data","children":[]},{"level":2,"title":"Wish History Cloud Sync","slug":"wish-history-cloud-sync","link":"#wish-history-cloud-sync","children":[{"level":3,"title":"Cloud Sync Privilege","slug":"cloud-sync-privilege","link":"#cloud-sync-privilege","children":[]},{"level":3,"title":"Upload","slug":"upload","link":"#upload","children":[]},{"level":3,"title":"Download","slug":"download","link":"#download","children":[]},{"level":3,"title":"Delete","slug":"delete","link":"#delete","children":[]}]}],"git":{"createdTime":1703005550000,"updatedTime":1704638132000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":1},{"name":"QweRez","email":"xtoyougg@gmail.com","commits":1}]},"readingTime":{"minutes":3.51,"words":1054},"filePathRelative":"ru/features/wish-export.md","localizedDate":"19 декабря 2023 г.","autoDesc":true}`);export{j as comp,Q as data};
