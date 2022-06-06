import request from '@/utils/request'

/**
 * 登录接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3882
 * 备注: 
 * 请求参数 - body - json
{"$schema":"http://json-schema.org/draft-04/schema#","type":"object","properties":{"username":{"type":"string","description":"用户名"},"password":{"type":"string","description":"密码"},"code":{"type":"string","description":"验证码结果"},"uuid":{"type":"string","description":"验证码结构返回的uuid"}},"required":["username","password","code","uuid"]}
 */
export function login(data, options = {}) {
  return request({
    url: `/login`,
    method: 'POST',
    data: data,
    ...options
  })
}

/**
 * 获取用户信息
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3891
 * 备注: 返回：
$  * {"msg":"操作成功","code":200,"permissions":["*:*:*"],"roles":["admin"],"user":{"searchValue":null,"createBy":"admin","createTime":"2021-09-26 02:56:43","updateBy":null,"updateTime":null,"remark":"管理员","params":{},"userId":1,"deptId":100,"userName":"admin","nickName":"管理员","email":"hk@163.com","phonenumber":"15888888888","sex":"1","avatar":"","salt":null,"status":"0","delFlag":"0","loginIp":"172.17.0.1","loginDate":"2021-11-29T06:45:04.041+0000","dept":{"searchValue":null,"createBy":null,"createTime":null,"updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":100,"parentId":0,"ancestors":null,"deptName":"慧科","orderNum":"0","leader":"慧科","phone":null,"email":null,"status":"0","delFlag":null,"parentName":null,"children":[]},"roles":[{"searchValue":null,"createBy":null,"createTime":null,"updateBy":null,"updateTime":null,"remark":null,"params":{},"roleId":1,"roleName":"超级管理员","roleKey":"admin","roleSort":"1","dataScope":"1","menuCheckStrictly":false,"deptCheckStrictly":false,"status":"0","delFlag":null,"flag":false,"menuIds":null,"deptIds":null,"admin":true}],"roleIds":null,"postIds":null,"roleId":null,"admin":true}}
 */
export function getInfo(data, options = {}) {
  return request({
    url: `/getInfo`,
    method: 'GET',
    params: data,
    ...options
  })
}

/**
 * 登出接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3873
 * 备注: {"msg":"退出成功","code":200}
 */
export function logout(data, options = {}) {
  return request({
    url: `/logout`,
    method: 'POST',
    data: data,
    ...options
  })
}

/**
 * 获取验证码
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3900
 * 备注: {&nbsp;&nbsp;&nbsp;"msg": "操作成功",&nbsp;&nbsp;&nbsp;&nbsp;"img": "Base64 图片", &nbsp;&nbsp;&nbsp;&nbsp;"captchaOnOff": true,&nbsp;&nbsp;&nbsp;&nbsp;"uuid": "e73bed9a91b7494d84501cc94f92f4e5"}
 */
export function getCaptchaImage(data, options = {}) {
  return request({
    url: `/captchaImage`,
    method: 'GET',
    params: data,
    ...options
  })
}