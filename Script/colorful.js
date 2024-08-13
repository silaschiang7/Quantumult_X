[rewrite_remote]
https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/Colorful/Colorful.js, tag=七彩虹商城_获取token, pattern=^https:\/\/shopapi\.skycolorful\.com\/api\/User\/DecryptPhoneNumber, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/Colorful/Colorful.js

https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/Colorful/Colorful.js, tag=七彩虹商城_获取token2, pattern=^https:\/\/shopapitest\.skycolorful\.com\/api\/User\/DecryptPhoneNumber, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/Colorful/Colorful.js

[task_local]
7 8,20 * * * https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/Colorful/Colorful.js, tag=七彩虹商城, enabled=true

[mitm]
hostname = shopapi.skycolorful.com, shopapitest.skycolorful.com