import{_ as d,V as s,W as r,X as e,Y as l,Z as o,a0 as h,$ as n,F as t}from"./framework-e266aaef.js";const u={},_=n('<h1 id="祈愿记录" tabindex="-1"><a class="header-anchor" href="#祈愿记录" aria-hidden="true">#</a> 祈愿记录</h1><h2 id="祈愿记录的导出" tabindex="-1"><a class="header-anchor" href="#祈愿记录的导出" aria-hidden="true">#</a> 祈愿记录的导出</h2><p><img src="https://user-images.githubusercontent.com/96916320/207942052-1d9bfc73-6e3a-4aa8-ba1a-292e49142d36.png" alt="qiyuanjilu"></p>',3),p=e("strong",null,"祈愿系统与导出原理",-1),f={id:"利用stoken从服务器获取最新的祈愿记录",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#利用stoken从服务器获取最新的祈愿记录","aria-hidden":"true"},"#",-1),m=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,[l("自"),e("code",null,"胡桃1.2.4版本"),l("，从"),e("code",null,"登录米哈游通行证"),l("选项登录米游社账号，则已代表您的账号Cookie具有Stoken字段，不再需要重新补充获取")])],-1),x=e("li",null,[e("p",null,[l("前置条件：已在胡桃工具箱中"),e("code",null,"登录米哈游通行证")])],-1),k=e("li",null,[e("p",null,[l("从左侧菜单栏进入"),e("code",null,"祈愿记录")])],-1),b=e("li",null,[e("p",null,[l("点击右上角的"),e("code",null,"刷新"),l("，并点击"),e("code",null,"Stoken刷新")])],-1),I=e("p",null,"等待读取完毕，即可查看最新的祈愿记录",-1),G=e("li",null,[l("距离"),e("strong",null,"产生时间"),l("过近的祈愿数据不会同步至游戏服务器，因此需要"),e("strong",null,"等待一定的时间")],-1),U=e("code",null,"登录米哈游通行证",-1),C=e("li",null,[l("可重新用"),e("strong",null,"管理员模式"),l("打开胡桃")],-1),F={href:"https://hut.ao/features/mhy-account-switch.html",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"从本地缓存获取最新的祈愿记录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#从本地缓存获取最新的祈愿记录","aria-hidden":"true"},"#"),l(" 从本地缓存获取最新的祈愿记录")],-1),w={href:"https://hut.ao/features/mhy-account-switch.html",target:"_blank",rel:"noopener noreferrer"},q=e("strong",null,"需要获取祈愿记录",-1),y=e("strong",null,"米游社账号",-1),B=n("<li>从左侧菜单栏进入<code>祈愿记录</code></li><li>启动游戏并登入游戏，<strong>打开</strong>游戏内的祈愿记录</li><li>回到<code>胡桃工具箱</code>并在<code>祈愿记录</code>界面中，点击<code>刷新</code>按钮，继而点击<code>从缓存刷新</code></li><li>等待祈愿记录获取完成，获取完成前请勿关闭游戏内的祈愿记录页面 <ul><li>若上述步骤出现问题，可尝试<strong>重新打开胡桃</strong></li><li>如果你通过<code>其它工具</code>获取到了你祈愿历史记录的Url，可以选择<code>手动输入Url</code>并根据提示操作，但应注意此类Url<strong>具有时效性</strong>，随时可能过期</li></ul></li>",4),S=n('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>若出现<code>从缓存刷新</code>功能异常的情况：</p><ul><li>请进入游戏路径的Cache文件夹 <ul><li>该文件夹路径形如：&quot;$\\Genshin Impact\\Genshin Impact Game\\YuanShen_Data\\webCaches\\Cache&quot;</li></ul></li><li>删除该目录下的&quot;Cache_Data&quot;文件夹</li></ul></div><h2 id="对于全量刷新选项的补充说明" tabindex="-1"><a class="header-anchor" href="#对于全量刷新选项的补充说明" aria-hidden="true">#</a> 对于全量刷新选项的补充说明</h2><p>在默认情况下，胡桃工具箱会在匹配到本地已有记录的祈愿ID后停止导入。 但如果你希望完整地获取原神服务器中所有的历史记录（即使它已经存在于你的本地祈愿记录中），你可以勾选<code>全量刷新</code>。</p><p><strong>不勾选<code>全量刷新</code>不会使你丢失祈愿数据，勾选<code>全量刷新</code>也不会让你的本地记录错误地额外记录一次相同的祈愿数据。</strong></p><h2 id="从其它祈愿导出程序导入祈愿数据" tabindex="-1"><a class="header-anchor" href="#从其它祈愿导出程序导入祈愿数据" aria-hidden="true">#</a> 从其它祈愿导出程序导入祈愿数据</h2><p>胡桃工具箱支持导入 <code>UIGF数据格式</code> 的祈愿记录数据</p><p>如果你希望导入这一类数据，可以：</p><ul><li>启动胡桃工具箱，从左侧菜单栏进入<code>祈愿记录</code></li><li>点击右上角的<code>导入</code><ul><li>选择<code>从 UIGF Json 文件导入</code></li><li>选择你的 UIGF 数据文件</li><li>根据界面确认导入数据</li></ul></li></ul><h2 id="导出祈愿数据" tabindex="-1"><a class="header-anchor" href="#导出祈愿数据" aria-hidden="true">#</a> 导出祈愿数据</h2><p>胡桃工具箱支持导出 <code>UIGF数据格式</code> 的Json文件格式的祈愿记录数据</p><p>如果你希望导出祈愿数据，可以：</p><ul><li>启动胡桃工具箱，从左侧菜单栏进入<code>祈愿记录</code></li><li>点击<code>UID</code>字样的按钮，选择您要导出的祈愿记录存档 <ul><li>若您只有一个账号的祈愿记录存档，则跳过此步骤</li></ul></li><li>点击<code>导出</code>按钮 <ul><li>点击<code>导出到UIGF Json文件</code>按钮</li><li>在弹出的界面选择您需要将此<code>导出的祈愿记录数据</code>文件存放的位置，并点击<code>导出</code></li></ul></li><li>导出完成</li></ul>',12);function V(D,E){const c=t("RouterLink"),a=t("Badge"),i=t("ExternalLinkIcon");return s(),r("div",null,[_,e("p",null,[l("有关原神祈愿记录导出的技术原理，你可以参阅我们的"),o(c,{to:"/FAQ/Gacha-system-and-export-principal.html"},{default:h(()=>[p]),_:1}),l("一文")]),e("h2",f,[g,l(" 利用Stoken从服务器获取最新的祈愿记录 "),o(a,{text:"推荐",type:"tip"})]),m,e("ul",null,[x,k,b,e("li",null,[I,e("ul",null,[G,e("li",null,[l("若您已在胡桃工具箱中"),U,l("，但上述步骤中仍出现异常 "),e("ul",null,[C,e("li",null,[l("可按"),e("a",F,[l("此文档"),o(i)]),l("重新登录您的米哈游通行证")])])])])])]),v,e("ul",null,[e("li",null,[l("前置条件："),e("a",w,[l("登录"),o(i)]),q,l("的游戏账号对应的"),y]),B]),S])}const N=d(u,[["render",V],["__file","wish-export.html.vue"]]);export{N as default};