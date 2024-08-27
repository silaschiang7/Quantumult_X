[rewrite_local]
# 获取 Token
^https:\/\/m\.tk\.cn\/wechat_item\/rest\/xcx\/login url script-response-body https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/TKZX/TKZX.js

[task_local]
# 定时任务
8 8,22 * * * https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/TKZX/TKZX.js

[mitm]
hostname = m.tk.cn