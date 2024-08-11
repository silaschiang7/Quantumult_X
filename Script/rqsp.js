[rewrite_local]
# 日清食品体验馆_获取token
^https:\/\/prod-api\.nissinfoodium\.com\.cn\/gw-shop\/app\/v1\/user\/detail url script-response-body https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/RQSP/RQSP.js

[task]
# 日清食品体验馆 定时任务
25 5,15 * * * https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/RQSP/RQSP.js, tag=日清食品体验馆, enabled=true

[mitm]
hostname = prod-api.nissinfoodium.com.cn