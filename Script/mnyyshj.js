[rewrite_local]
# 蒙牛营养生活家_获取token
^https:\/\/mp-isv\.youzanyun\.com\/activity\/get_sign_in_by_open_id_and_mobile url script-request-body https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/MengNiu/MengNiuNutritionist.js

# 蒙牛生活家会员中心_获取token
^https:\/\/mp-isv\.youzanyun\.com\/client\/member\/getMemberInfo url script-request-body https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/MengNiu/MengNiuVip.js

[task]
# 蒙牛营养生活家 定时任务
1 0,22 * * * https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/MengNiu/MengNiuNutritionist.js, tag=蒙牛营养生活家, enabled=true

# 蒙牛生活家会员中心 定时任务
5 0,22 * * * https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/MengNiu/MengNiuVip.js, tag=蒙牛生活家会员中心, enabled=true

[mitm]
hostname = mp-isv.youzanyun.com