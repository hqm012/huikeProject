import request from '@/utils/request'



/**
 * 信息公开-上下架接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/11631
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{}}
 */
export function putHkinformationUpdateStatus(data, options = {}) {
    return request({
        url: `/hkinformation/updateStatus`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 信息公开-列表接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3810
 * 备注: 
 */
export function postHkinformationListPage(data, options = {}) {
    return request({
        url: `/hkinformation/list-page`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 信息公开-删除接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3864
 * 备注: 
 */
export function putHkinformationStatus(data, options = {}) {
    return request({
        url: `/hkinformation/status`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 信息公开-新增接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3837
 * 备注: 添加数据需要转换成formdata格式
 * 请求参数 - body - formData
[
  {
    "required": "1",
    "_id": "623d923f1c866acff06c4744",
    "name": "title",
    "type": "text",
    "example": "《项目标题》",
    "desc": "文件名称"
  },
  {
    "required": "1",
    "_id": "623d923f1c866a08036c4743",
    "name": "fileUrl",
    "type": "text",
    "example": "https://",
    "desc": "从上传文件的返回值获取"
  },
  {
    "required": "1",
    "_id": "623d923f1c866a0a966c4742",
    "name": "type",
    "type": "text",
    "example": "1",
    "desc": "类型;0-法人证书，1-规章制度，2-年度报告，3-审计报告"
  },
  {
    "required": "1",
    "_id": "623d923f1c866a7d6a6c4741",
    "name": "status",
    "type": "text",
    "example": "1",
    "desc": "状态;0=上架 1=下架 2=删除"
  }
]
 */
export function postHkinformationAdd(data, options = {}) {
    return request({
        url: `/hkinformation/add`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 信息公开-编辑接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3846
 * 备注: 
 * 请求参数 - body - formData
[
  {
    "required": "1",
    "_id": "61e66c929aea9063569b8887",
    "name": "title",
    "type": "text",
    "example": "《法人证书》",
    "desc": "文件名称"
  },
  {
    "required": "1",
    "_id": "61e66c929aea9046d29b8886",
    "name": "fileUrl",
    "type": "text",
    "example": "",
    "desc": "从文件上传的返回值获取"
  },
  {
    "required": "1",
    "_id": "61e66c929aea9015319b8885",
    "name": "type",
    "type": "text",
    "example": "1",
    "desc": "项目类型 0-法人证书，1-规章制度，2-年度报告，3-审计报告"
  },
  {
    "required": "1",
    "_id": "61e66c929aea90b60a9b8884",
    "name": "status",
    "type": "text",
    "example": "",
    "desc": "状态;0=上架 1=下架 "
  }
]
 */
export function putHkinformationEdit(data, options = {}) {
    return request({
        url: `/hkinformation/edit`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 信息公开-置顶接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3828
 * 备注: 
 */
export function putHkinformationUpdateSort(data, options = {}) {
    return request({
        url: `/hkinformation/updateSort`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 信息公开-详情接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3819
 * 备注: 
 */
export function postHkinformationQueryById(data, options = {}) {
    return request({
        url: `/hkinformation/queryById`,
        method: 'POST',
        data: data,
        ...options
    })
}


