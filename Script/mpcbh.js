[rewrite_local]
# 毛铺草本荟_获取token
^https:\/\/mpb\.jingjiu\.com\/proxy-he\/api\/user url script-response-body https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/MPCBH/MPCBH.js

[task]
# 毛铺草本荟 定时任务
27 7,17 * * * https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/MPCBH/MPCBH.js, tag=毛铺草本荟, enabled=true

[mitm]
hostname = mpb.jingjiu.com