[rewrite_local]
# 麦斯威尔福利社_获取token
^https:\/\/jde\.mtbcpt\.com\/api\/JDEMaxwellApi\/QueryHomeInfo url script-response-body https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/MSWEFLS/MSWEFLS.js

[task]
# 麦斯威尔福利社 定时任务
11 11,18 * * * https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/MSWEFLS/MSWEFLS.js, tag=麦斯威尔福利社, enabled=true

[mitm]
hostname = jde.mtbcpt.com