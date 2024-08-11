[rewrite_local]
# 海天美味馆_获取token
^https:\/\/cmallapi\.haday\.cn\/buyer-api\/wechat\/mini\/phoneNew\/login url script-response-body https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/HaiTian/HaiTian.js

[task]
# 海天美味馆 定时任务
43 2,20 * * * https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/HaiTian/HaiTian.js, tag=海天美味馆, enabled=true

[mitm]
hostname = cmallapi.haday.cn