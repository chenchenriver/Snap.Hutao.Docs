import{_ as l,r as a,o as c,c as s,a as t,b as e,d as n,w as d,e as i}from"./app-BdfVXbEs.js";const h={},u=i('<h1 id="game-launcher" tabindex="-1"><a class="header-anchor" href="#game-launcher"><span>Game Launcher</span></a></h1><p><img src="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01a8DIs91g6dyJFyg2X_!!1797064093.png_.webp" alt="Game Launcher" loading="lazy"></p><ul><li>Snap Hutao offers advanced game launcher feature allows user to launch the game with self-defined settings</li><li>Click on the <code>Game Launcher</code> on the sidebar to get into game launcher&#39;s page <ul><li>If you are using it at the first time, you will be redirected to Snap Hutao settings page and asked to set your game path <ul><li>When choosing the game path, noticed that you should choose game program instead of launcher program <ul><li>Such as <code>$\\Genshin Impact\\Genshin Impact Game\\YuanShen.exe</code> and <code>$\\Genshin Impact\\Genshin Impact Game\\Genshin Impact.exe</code></li><li>Official launcher program is usually <code>$\\Genshin Impact\\launcher.exe</code></li></ul></li></ul></li></ul></li><li>You can make launcher configuration options in the game launcher&#39;s page, and then click <code>Launcher</code> button on the top-right to launch the game <ul><li>Launcher options is explained in the document below</li></ul></li></ul><h2 id="server-switch" tabindex="-1"><a class="header-anchor" href="#server-switch"><span>Server Switch</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Privilege Notice</p><ol><li>You need to run Snap Hutao as administrator to use this feature</li><li>Snap Hutao will create <code>ServerCache</code> folder in the data directory to save required sever switch files</li></ol></div><p>Enter Game Launcher page In the <code>General - Server</code> field, select the server you want</p><ul><li>Current available serves options include:</li></ul><table><thead><tr><th>Option</th><th>Server</th></tr></thead><tbody><tr><td>CN Default</td><td>Mainland China server</td></tr><tr><td>CN Official</td><td>Mainland China server, no difference with previous row</td></tr><tr><td>CN NoTapTap</td><td>Mainland China server without TapTap account login method</td></tr><tr><td>BiliBili</td><td>Chinese server with BiliBili account system</td></tr><tr><td>Global Default</td><td>HoYoVerse servers</td></tr><tr><td>Global Epic</td><td>HoYoVerse servers with Epic Store payment gateway</td></tr><tr><td>Global Google</td><td>HoYoVerse servers with Google Pay payment gateway</td></tr></tbody></table><ul><li>click <code>Launcher</code> button on the top-right to launch the game, Snap Hutao will download server required files and then launch the game</li></ul><h2 id="game-account-switch" tabindex="-1"><a class="header-anchor" href="#game-account-switch"><span>Game Account Switch</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Совет</p><ol><li>The <strong>account</strong> mentioned in this feature is Genshin game login account instead of HoYoLAB account</li><li>Game account switch feature currently only supporting official CN server</li></ol></div><table><thead><tr><th></th><th>CN</th><th>BiliBili</th><th>Global</th></tr></thead><tbody><tr><td>Save Login Status</td><td>Supported</td><td>Supported</td><td>Supported</td></tr><tr><td>Switch Account</td><td>Supported</td><td>Not Supported</td><td>Supported</td></tr></tbody></table><ol><li>Enter Game Launcher page</li><li>Click <code>Detect Account</code> field in the <code>General</code> category, Snap Hutao will detect current Genshin Impact&#39;s account login status</li><li>In this pop-up window, enter an archive name for this account and click <code>Confirm</code></li><li>Go back to the game, sign out and sign in to your another account. Repeat step 2 and 3 to add all your account to Snap Hutao <ul><li>Each saved account are selectable</li><li>On the right side, there are three buttons, they are: <ul><li><code>Bind current user account</code>, bind current activated MiHoYo BBS account with this game account, an UID will be display on this archive</li><li><code>Rename</code>, rename current account archive name</li><li><code>Delete</code>, delete current account archive</li></ul></li></ul></li></ol><h2 id="appearance" tabindex="-1"><a class="header-anchor" href="#appearance"><span>Appearance</span></a></h2><div class="hint-container warning"><p class="hint-container-title">Примечание</p><ul><li><p>In some reported cases, using Snap Hutao with <code>Exclusive Fullscreen</code> mode will cause the game process no response.</p><ul><li>Suggest to use <code>Borderless</code> or <code>Fullscreen</code> mode if you faced same problem</li><li>The problem is caused by failure of game embedded browser cannot run</li></ul></li></ul></div><ul><li>Enter Game Launcher page</li><li>In the <code>Appearance</code> category, there are 6 available options: <ul><li><strong>Exclusive Fullscreen</strong>, the game process will run in exclusive fullscreen mode <ul><li><strong>You should only use this option when you are able to independently describe technical principles and effects of exclusive fullscreen</strong></li></ul></li><li><strong>Fullscreen</strong>, the game display mode is set to fullscreen</li><li><strong>Borderless</strong>, the game display mode is set to borderless</li><li><strong>Width</strong>, game window width, such as <code>1920</code></li><li><strong>Height</strong>, game window height, such as <code>1080</code></li><li><strong>Display</strong>, users with multiple displays can use this option to set which display to run the game</li></ul></li></ul><h2 id="resource-download" tabindex="-1"><a class="header-anchor" href="#resource-download"><span>Resource Download</span></a></h2><p>Game launcher in Snap Hutao also offers resource download feature, which lists real time Genshin Impact (CN server) client package and OTA package. User can click the hyperlink icon on each package&#39;s right side to redirect to browser to download them by user favored download tools.</p><p>When you are updating the game client, you can do the following steps:</p><ol><li>Update official launcher to the latest</li><li>In <code>Snap Hutao - Game Launcher - Resource Download</code>, find needed client OTA package and installed language OTA package</li><li>Move all package to folder where game client located</li><li>Start official launcher, click on update button. The launcher should skip the download and directly starts to unzip the OTA packages to update client</li></ol><h2 id="advanced-features" tabindex="-1"><a class="header-anchor" href="#advanced-features"><span>Advanced Features</span></a></h2><div class="hint-container caution"><p class="hint-container-title">Предупреждение</p><ul><li>Be aware: all advanced features are labeled as <code>Dangeroud Feature</code>; indicating that enabling them means you choose to assume any risk on your own.</li><li>You need to enable advanced features in Snap Hutao&#39;s settings page</li></ul></div><h3 id="unlock-frame-rate-limit" tabindex="-1"><a class="header-anchor" href="#unlock-frame-rate-limit"><span>Unlock Frame Rate Limit</span></a></h3>',23),p={class:"hint-container caution"},m=t("p",{class:"hint-container-title"},"Предупреждение",-1),g={href:"https://github.com/DGP-Studio/Unlocker",target:"_blank",rel:"noopener noreferrer"},f=i("<ul><li><p>Run Snap Hutao as administrator</p></li><li><p>Enter Game Launcher page</p></li><li><p>At the bottom of the page, you can find <code>Unlock Frame Rate Limit</code> option</p><ul><li>Trigger the switch to enable or disable this feature</li><li>In the <code>Set Frame Rate Limit</code> field, you can adjust the limit freely</li></ul></li><li><p>Fact that may cause <strong>failure in unlocking frame rate limit</strong>:</p><ul><li>Snap Hutao process is not kept in the background</li><li><code>V-Sync</code> is not set to off in the game</li><li><code>Max Framerate</code> limit is not changed in your graphic card settings</li><li><code>Power Saving</code> mode is not disabled in power settings</li><li>Your graphic card is not powerful enough</li></ul></li></ul>",1);function w(y,v){const o=a("ExternalLinkIcon"),r=a("RouteLink");return c(),s("div",null,[u,t("div",p,[m,t("ul",null,[t("li",null,[e("The "),t("a",g,[e("Unlocker project"),n(o)]),e(" only affects the UnityPlayer itself, directly affecting the Unity3D engine, and does not have a direct relationship with the game itself. Essentially, it is no different from settings like 120 FPS in mobile devices. However, you should still use it with caution and read the "),n(r,{to:"/ru/statements/tos.html"},{default:d(()=>[e("user agreement")]),_:1}),e(" on your own.")])])]),f])}const k=l(h,[["render",w],["__file","game-launcher.html.vue"]]),S=JSON.parse('{"path":"/ru/features/game-launcher.html","title":"Game Launcher","lang":"ru-RU","frontmatter":{"headerDepth":2,"category":["Feature","Tutorial"],"tag":["unlock framerate","convert server","switch account"],"order":3,"comment":false,"description":"Game Launcher Game Launcher Snap Hutao offers advanced game launcher feature allows user to launch the game with self-defined settings Click on the Game Launcher on the sidebar ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/features/game-launcher.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/features/game-launcher.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/features/game-launcher.html"}],["meta",{"property":"og:url","content":"https://hut.ao/ru/features/game-launcher.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Game Launcher"}],["meta",{"property":"og:description","content":"Game Launcher Game Launcher Snap Hutao offers advanced game launcher feature allows user to launch the game with self-defined settings Click on the Game Launcher on the sidebar ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i4/1797064093/O1CN01a8DIs91g6dyJFyg2X_!!1797064093.png_.webp"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:updated_time","content":"2024-02-29T10:16:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Game Launcher"}],["meta",{"property":"article:author","content":"DGP-Studio"}],["meta",{"property":"article:tag","content":"unlock framerate"}],["meta",{"property":"article:tag","content":"convert server"}],["meta",{"property":"article:tag","content":"switch account"}],["meta",{"property":"article:modified_time","content":"2024-02-29T10:16:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Game Launcher\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i4/1797064093/O1CN01a8DIs91g6dyJFyg2X_!!1797064093.png_.webp\\"],\\"dateModified\\":\\"2024-02-29T10:16:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/ru/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"Server Switch","slug":"server-switch","link":"#server-switch","children":[]},{"level":2,"title":"Game Account Switch","slug":"game-account-switch","link":"#game-account-switch","children":[]},{"level":2,"title":"Appearance","slug":"appearance","link":"#appearance","children":[]},{"level":2,"title":"Resource Download","slug":"resource-download","link":"#resource-download","children":[]},{"level":2,"title":"Advanced Features","slug":"advanced-features","link":"#advanced-features","children":[{"level":3,"title":"Unlock Frame Rate Limit","slug":"unlock-frame-rate-limit","link":"#unlock-frame-rate-limit","children":[]}]}],"git":{"createdTime":1703005550000,"updatedTime":1709201815000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":2},{"name":"QweRez","email":"xtoyougg@gmail.com","commits":1}]},"readingTime":{"minutes":3.03,"words":910},"filePathRelative":"ru/features/game-launcher.md","localizedDate":"19 декабря 2023 г.","autoDesc":true}');export{k as comp,S as data};