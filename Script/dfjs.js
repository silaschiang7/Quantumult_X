[rewrite_local]
# 东方棘市_获取token
^https:\/\/ys\.shajixueyuan\.com\/api\/user\/info url script-response-body https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/DFJS/DFJS.js

[task]
# 东方棘市 定时任务
43 11,21 * * * https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/DFJS/DFJS.js, tag=东方棘市, enabled=true

[mitm]
hostname = ys.shajixueyuan.com