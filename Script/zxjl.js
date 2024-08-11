[rewrite_local]
# 尊享金陵_获取token
^https:\/\/app\.jinlinghotels\.com\/app\/wx\/v1\/getAuthUser url script-response-body https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/ZXJL/ZXJL.js

[task]
# 尊享金陵 定时任务
18 8,17 * * * https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/ZXJL/ZXJL.js, tag=尊享金陵, enabled=true

[mitm]
hostname = app.jinlinghotels.com