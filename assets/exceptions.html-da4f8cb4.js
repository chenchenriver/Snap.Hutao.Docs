import{ac as i,H as r,I as a,F as e,V as t,O as n,ad as l,Y as s}from"./framework-3390b3d8.js";const d={},c=e("h1",{id:"常见的程序异常",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常见的程序异常","aria-hidden":"true"},"#"),t(" 常见的程序异常")],-1),h=e("p",null,[t("该文档包含由"),e("strong",null,"用户端错误"),t("造成的问题")],-1),u=e("h2",{id:"runtimeenvironmentexception",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#runtimeenvironmentexception","aria-hidden":"true"},"#"),t(" RuntimeEnvironmentException")],-1),p=e("li",null,[t("异常："),e("code",null,"RuntimeEnvironmentException"),e("ul",null,[e("li",null,[t("提示："),e("code",null,"未开启长路径功能，无法设置注册表键值")])])],-1),_=e("li",null,"问题来源：没有解除 Windows 目录长度限制",-1),f={href:"https://d.hut.ao/d/tools/EnableLongPaths.zip",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,".reg",-1),b=l('<h2 id="return-code-10001" tabindex="-1"><a class="header-anchor" href="#return-code-10001" aria-hidden="true">#</a> Return Code: -10001</h2><ul><li>该异常实际上来源于米游社的返回信息，包括： <ul><li><code>Return Code: -10001</code></li><li><code>Return Code: -100</code></li></ul></li><li>问题来源： <ol><li>Cookie 过期或网络异常</li><li>系统时间错误</li></ol></li><li>解决方案： <ol><li>在帐号面板中，点击<code>刷新 Cookie</code></li><li>删除帐号后重新添加米游社帐号</li><li>在系统设置中启用自动同步时间并立刻同步时间</li></ol></li></ul><h2 id="httprequestexception-元数据校验文件下载失败" tabindex="-1"><a class="header-anchor" href="#httprequestexception-元数据校验文件下载失败" aria-hidden="true">#</a> HttpRequestException 元数据校验文件下载失败</h2><h3 id="_403-forbidden" tabindex="-1"><a class="header-anchor" href="#_403-forbidden" aria-hidden="true">#</a> 403 (Forbidden)</h3>',4),x={href:"https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52",target:"_blank",rel:"noopener noreferrer"},g=e("h3",{id:"_502-bad-gateway",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_502-bad-gateway","aria-hidden":"true"},"#"),t(" 502 (Bad Gateway)")],-1),k={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/100",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,[t("当胡桃工具箱无法从远程服务器获取到必要资源时（通常是配置文件和图片缓存），会在用户界面抛出如下图所示的 "),e("code",null,"HttpRequestException"),t(" 错误。")],-1),w=e("p",null,[e("img",{src:"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Tb2RUm1g6du5YeNuy_!!1797064093.jpg",alt:"HttpRequestException",loading:"lazy"})],-1),C=e("p",null,"当你遇到该情况，且已经确定本地网络没有互联网连接问题时，请检查是否启用了系统代理程序。如果是，请关闭。胡桃工具箱的远程服务器在全世界范围内都有类似的体验效果， 你无需为了胡桃工具箱的网络连接而使用代理网络。",-1),N={href:"https://www.telerik.com/fiddler/add-ons",target:"_blank",rel:"noopener noreferrer"},R={href:"https://learn.microsoft.com/zh-CN/windows/iot-core/develop-your-app/loopback",target:"_blank",rel:"noopener noreferrer"};function v(y,H){const o=s("ExternalLinkIcon");return r(),a("div",null,[c,h,u,e("ul",null,[p,_,e("li",null,[t("解决方案：下载 "),e("a",f,[t("EnableLongPaths.zip"),n(o)]),t(" 后解压，以管理员身份运行解压后的 "),m,t(" 文件")])]),b,e("p",null,[t("解决方案：更新胡桃工具箱至"),e("a",x,[t("最新版本"),n(o)])]),g,e("blockquote",null,[e("p",null,[t("相关 Issue: "),e("a",k,[t("https://github.com/DGP-Studio/Snap.Hutao/issues/100"),n(o)])])]),E,w,C,e("p",null,[t("如果系统代理是你的网络必须选项，请关闭系统代理而使用 TUN 模式代理；或者也可以通过 "),e("a",N,[t("Windows 8 AppContainer Loopback Utility"),n(o)]),t(" 解除 "),e("a",R,[t("Windows APP Container Loopback 的限制"),n(o)]),t(" 。")])])}const q=i(d,[["render",v],["__file","exceptions.html.vue"]]);export{q as default};
