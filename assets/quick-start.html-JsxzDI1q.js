import{_ as h}from"./MSEdge-7LOvFlfM.js";import{_}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as p,c as b,a as e,b as t,d as i,w as o,e as c}from"./app-Zu9mKU78.js";const v={},f=e("h1",{id:"快速开始",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速开始","aria-hidden":"true"},"#"),t(" 快速开始")],-1),m=e("p",null,"遵循这篇快速开始文档，你将可以快速地将胡桃工具箱设置为可用状态。",-1),g={id:"最低系统要求",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#最低系统要求","aria-hidden":"true"},"#",-1),S=c("<table><thead><tr><th>要求</th><th>规格</th></tr></thead><tbody><tr><td><strong>最低可运行系统版本</strong></td><td>Windows 10 Build 19045 (22H2)<br> Windows 11 Build 22621 (22H2)</td></tr><tr><td><strong>推荐系统版本</strong></td><td>Windows 11 Build 22621 (22H2) 或更高版本</td></tr><tr><td><strong>必要组件</strong></td><td>Windows Update, App Installer</td></tr><tr><td>可选组件</td><td>WebView2 Runtime</td></tr></tbody></table><p><strong>不支持的系统版本</strong>：</p><ol><li>LTSC 和 LTSB 版本系统由于不包含微软商店，不在支持列表中</li><li>Windows 10 Build 19041 亦可以安装， 但部分功能会因内核问题无法使用，故该版本下的胡桃工具箱问题将不会被处理</li><li>Windows Insider 预览版本的问题不会被处理</li></ol>",3),A={id:"下载胡桃工具箱",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#下载胡桃工具箱","aria-hidden":"true"},"#",-1),H=e("h3",{id:"全新安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#全新安装","aria-hidden":"true"},"#"),t(" 全新安装")],-1),x=e("p",null,[e("strong",null,"无论使用何种安装方式，应用包来源和注册授权都由微软商店管理")],-1),W=e("p",null,[t("微软商店链接："),e("a",{href:"https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52",target:"_blank",rel:"noopener noreferrer"},"Snap Hutao")],-1),I=e("p",null,"在 Windows 10 和 Windows 11 下你可以直接点击上面的按钮来下载胡桃工具箱",-1),X=e("li",null,"启动 PowerShell",-1),z=e("li",null,[t("执行命令 "),e("code",null,'winget install "Snap Hutao"')],-1),N=e("li",null,[t("访问胡桃工具箱"),e("a",{href:"https://github.com/DGP-Studio/Snap.Hutao/releases/latest/",target:"_blank",rel:"noopener noreferrer"},"最新发布页面")],-1),V=e("li",null,"下载 MSIX 应用包",-1),B={id:"从侧载版升级至商店版",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#从侧载版升级至商店版","aria-hidden":"true"},"#",-1),M=e("p",null,"如果你之前安装了 Snap Hutao 侧载版（1.4.10及更旧的版本）则需要先卸载旧版本再进行全新安装",-1),P=e("ul",null,[e("li",null,"只要不手动删除数据目录，你的数据不会受到影响")],-1),J=e("li",null,"按照上述方法全新安装商店版应用",-1),T={id:"更新胡桃工具箱",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#更新胡桃工具箱","aria-hidden":"true"},"#",-1),y=e("p",null,[e("strong",null,"无论你使用何种方式安装了应用，你都可以选择任意的方式去更新它，不必选择和安装时一样的方法，因为微软商店是应用包唯一来源")],-1),R=e("ul",null,[e("li",null,"启动微软商店"),e("li",null,"点击左下角的库，查看到你目前已安装的全部应用"),e("li",null,"点击界面右上角的获取更新，你的应用将会被更新")],-1),q=e("p",null,[t("若点击获取更新后胡桃仍然没有获取到更新，则可以进入"),e("code",null,"Snap Hutao"),t("的"),e("a",{href:"(https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52)"},"商店详情页面"),t("，等待信息加载完成来获取更新")],-1),D=e("ul",null,[e("li",null,"启动 PowerShell"),e("li",null,[t("执行命令 "),e("code",null,'winget upgrade "Snap Hutao"')]),e("li",null,"根据提示允许安装")],-1),G=e("ul",null,[e("li",null,[t("访问胡桃工具箱"),e("a",{href:"https://github.com/DGP-Studio/Snap.Hutao/releases/latest/",target:"_blank",rel:"noopener noreferrer"},"最新发布页面")]),e("li",null,"下载 MSIX 应用包"),e("li",null,"直接运行 MSIX 应用包以执行安装")],-1),Y={id:"安装可选组件",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#安装可选组件","aria-hidden":"true"},"#",-1),U=c('<p>通过可选组件，胡桃工具箱可以通过系统级的环境来更方便地实现一些功能，它们不是强制要求的组件，但可以带来更好的体验</p><h3 id="webview2-运行时" tabindex="-1"><a class="header-anchor" href="#webview2-运行时" aria-hidden="true">#</a> <img src="'+h+'" width="20" height="20"> WebView2 运行时</h3><p>WebView2 运行时由微软提供，其允许胡桃在程序内低开销地启用一个内置的浏览器。通过该组件，胡桃允许用户通过 WebView2 内置浏览器登录米游社账号。</p><p>在<a href="https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/" target="_blank" rel="noopener noreferrer">微软官网</a>的底部，你可以找到<code>常青独立安装程序</code>，选择<code>x64</code>下载并根据提示安装即可</p>',4),j={id:"添加第一个米游社账号",tabindex:"-1"},F=e("a",{class:"header-anchor",href:"#添加第一个米游社账号","aria-hidden":"true"},"#",-1),K=e("p",null,"在进入胡桃工具箱主界面后，点击左下角文档按钮和设置按钮中间的账号面板。在弹出的米游社账号面板中，根据你的账号类型选择对应的登录按钮。",-1),O=e("p",null,[t("如果你的原神账号是米哈游的国服账号，需要在"),e("code",null,"米游社"),t("类别内登录；如果你的原神账号是 HoYoverse 的国际服账号，需要在 "),e("code",null,"HoYoLAB"),t(" 类别内登录。")],-1),Q=e("p",null,[t("无论是国服账号还是国际服账号，你都有"),e("code",null,"网页登录"),t("和"),e("code",null,"Cookie登录"),t("两种登录方式")],-1),Z=e("p",null,[e("strong",null,"网页登录需要使用 Microsoft WebView2 运行时组件")],-1),$=e("ol",null,[e("li",null,[t("点击账号面板中的"),e("code",null,"网页登录"),t("按钮，胡桃将会通过 WebView2 打开米游社登录界面")]),e("li",null,"在该界面中登录你的米游社账号，登录成功后你将进入米游社通行证界面并看到登录账号的信息"),e("li",null,[t("点击程序主界面右上角的"),e("code",null,"我已登录"),t("按钮，胡桃工具箱会将当前账号添加进本地客户端，并在账号面板中显示出来")])],-1),ee=e("p",null,[t("如果你能希望使用自己提取的米哈游通行证 Cookie 登录到胡桃工具箱，可以在登录面板中点击 "),e("code",null,"手动输入"),t("，并在弹出的窗口中输入包含 SToken 的 Cookie。 若你填入了一个有效的 Cookie，在点击"),e("code",null,"确认"),t("后你将成功登录你的米游社账号并在账号面板中显示出来。")],-1),te=e("hr",null,null,-1),oe=e("p",null,[e("em",null,[e("strong",null,"至此，你已经初步设置好了你的胡桃工具箱。你现在可以自由探索这个应用，你也可以在这个这个网站中找到胡桃的全部帮助文档。")])],-1);function le(ne,ie){const s=d("HopeIcon"),u=d("ms-store-badge"),a=d("RouterLink"),r=d("Tabs");return p(),b("div",null,[f,m,e("h2",g,[w,t(),i(s,{icon:"iconfont icon-windows",size:"1.7rem",color:"rgb(0, 168, 232)"}),t(" 最低系统要求")]),S,e("h2",A,[k,t(),i(s,{icon:"iconfont icon-cache",size:"1.8rem",color:"rgb(128, 161, 255)"}),t(" 下载胡桃工具箱")]),H,x,i(r,{id:"84",data:[{id:"使用微软商店安装"},{id:"使用 winget 安装"},{id:"使用 MSIX 安装包安装"}]},{title0:o(({value:l,isActive:n})=>[t("使用微软商店安装")]),title1:o(({value:l,isActive:n})=>[t("使用 winget 安装")]),title2:o(({value:l,isActive:n})=>[t("使用 MSIX 安装包安装")]),tab0:o(({value:l,isActive:n})=>[i(u,{productid:"9PH4NXJ2JN52",theme:"auto"}),W,I]),tab1:o(({value:l,isActive:n})=>[e("ul",null,[X,z,e("li",null,[t("根据提示允许安装 "),e("ul",null,[e("li",null,[t("如果安装失败或显示缺少依赖包，或卡在安装框架阶段，请参考"),i(a,{to:"/zh/advanced/dependency.html"},{default:o(()=>[t("手动安装依赖项")]),_:1}),t("一文")])])])])]),tab2:o(({value:l,isActive:n})=>[e("ul",null,[N,V,e("li",null,[t("直接运行 MSIX 应用包以执行安装 "),e("ul",null,[e("li",null,[t("如果安装失败或显示缺少依赖包，或卡在安装框架阶段，请参考"),i(a,{to:"/zh/advanced/dependency.html"},{default:o(()=>[t("手动安装依赖项")]),_:1}),t("一文")])])])])]),_:1}),e("h3",B,[C,t(),i(s,{icon:"iconfont icon-refresh",size:"1.5rem",color:"rgb(127, 186, 0)"}),t(" 从侧载版升级至商店版")]),M,e("ul",null,[e("li",null,[t("按照文档提供的"),i(a,{to:"/zh/advanced/uninstall.html"},{default:o(()=>[t("卸载方法")]),_:1}),t("卸载侧载版应用 "),P]),J]),e("h3",T,[L,t(),i(s,{icon:"iconfont icon-update",size:"1.5rem",color:"rgb(255, 185, 0)"}),t(" 更新胡桃工具箱")]),y,i(r,{id:"178",data:[{id:"使用微软商店更新"},{id:"使用 winget 更新"},{id:"使用 MSIX 安装包更新"}]},{title0:o(({value:l,isActive:n})=>[t("使用微软商店更新")]),title1:o(({value:l,isActive:n})=>[t("使用 winget 更新")]),title2:o(({value:l,isActive:n})=>[t("使用 MSIX 安装包更新")]),tab0:o(({value:l,isActive:n})=>[R,q]),tab1:o(({value:l,isActive:n})=>[D]),tab2:o(({value:l,isActive:n})=>[G]),_:1}),e("h2",Y,[E,t(),i(s,{icon:"iconfont icon-expansion",size:"1.7rem",color:"rgb(7, 163, 161)"}),t(" 安装可选组件")]),U,e("h2",j,[F,t(),i(s,{icon:"iconfont icon-adduser",size:"1.7rem",color:"rgb(7, 163, 161)"}),t(" 添加第一个米游社账号")]),K,O,Q,i(r,{id:"267",data:[{id:"网页登录"},{id:"Cookie 登录"}]},{title0:o(({value:l,isActive:n})=>[t("网页登录")]),title1:o(({value:l,isActive:n})=>[t("Cookie 登录")]),tab0:o(({value:l,isActive:n})=>[Z,$]),tab1:o(({value:l,isActive:n})=>[ee]),_:1}),te,oe])}const re=_(v,[["render",le],["__file","quick-start.html.vue"]]);export{re as default};
