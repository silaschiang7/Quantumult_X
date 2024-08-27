[rewrite_local]
# 获取 Cookie
^https:\/\/c\.cfmoto\.com\/jv\/user\/user_info url script-response-body cfmoto.js

# 开屏广告
^https:\/\/c\.cfmoto\.com\/cfmotoservermall\/app\/ad$ reject

# 弹窗广告
^https:\/\/c\.cfmoto\.com\/cfmotoservermall\/app\/popwindow reject

[task_local]
# 脚本任务
0 7 * * * cfmoto.js

[mitm]
hostname = c.cfmoto.com