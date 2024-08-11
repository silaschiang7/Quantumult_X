[rewrite_local]
# 顾家家居_获取token
^https:\/\/mc\.kukahome\.com\/club-server\/member\/automaticLogin url script-request-body https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/GJJJ/GJJJ.js

[task]
# 顾家家居 定时任务
19 9,17 * * * https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/GJJJ/GJJJ.js, tag=顾家家居, enabled=true

[mitm]
hostname = mc.kukahome.com