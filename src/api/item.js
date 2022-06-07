import request from '@/utils/request'



/**
 * 公益项目-上下架接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/11685
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{}}
 */
export function putProjectUpdateStatus(data, options = {}) {
    return request({
        url: `/project/updateStatus`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 公益项目-修改接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3639
 * 备注: 
 * 请求参数 - body - json
{"$schema":"http://json-schema.org/draft-04/schema#","type":"object","properties":{"title":{"type":"string","description":"标题","mock":{"mock":"标题"}},"image":{"type":"string","description":"图片","mock":{"mock":"图片"}},"type":{"type":"number","description":"类型"},"description":{"type":"string","description":"内容摘要"},"content":{"type":"string","description":"内容","mock":{"mock":"内容"}},"sort":{"type":"number","description":"排序"},"status":{"type":"number","description":"状态"},"push_time":{"type":"number","description":"发布时间"},"updated_time":{"type":"number","description":"编辑时间"}},"required":["title","image","type","content","status","description"]}
 */
export function putProjectEdit(data, options = {}) {
    return request({
        url: `/project/edit`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 公益项目-列表接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3612
 * 备注: 
 */
export function postProjectList(data, options = {}) {
    return request({
        url: `/project/list`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 公益项目-列表接口(新增新闻动态时关联项目需要用到)
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3576
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{}}
 */
export function postProjectListTitle(data, options = {}) {
    return request({
        url: `/project/listTitle`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 公益项目-删除修改状态
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3630
 * 备注: 
 * 请求参数 - body - formData
[
  {
    "required": "1",
    "_id": "61dea7119aea90d5439b87b9",
    "name": "projectId",
    "type": "text",
    "example": "9",
    "desc": "主键id"
  },
  {
    "required": "1",
    "_id": "61dea7119aea900ea19b87b8",
    "name": "status",
    "type": "text",
    "example": "1",
    "desc": "状态;0=上架 1=下架 2=删除"
  }
]
 */
export function putProjectStatus(data, options = {}) {
    return request({
        url: `/project/status`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 公益项目-添加接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3594
 * 备注: 
 * 请求参数 - body - json
{"$schema":"http://json-schema.org/draft-04/schema#","type":"object","properties":{"title":{"type":"string","description":"标题"},"image":{"type":"string","description":"图片"},"type":{"type":"number","description":"所属领域 0=基础教育 1=职业成长 2=企业公益"},"description":{"type":"string","description":"内容摘要"},"content":{"type":"string","description":"内容"},"status":{"type":"number","description":"状态 0:上架 ，1:下架"},"sort":{"type":"number","description":"排序"}},"required":["title","image","type","content","status","description","sort"]}
 */
export function postProjectAdd(data, options = {}) {
    return request({
        url: `/project/add`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 公益项目-置顶接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3603
 * 备注: 
 */
export function putProjectUpdateSort(data, options = {}) {
    return request({
        url: `/project/updateSort`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 公益项目-详情接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3621
 * 备注: 
 * 请求参数 - body - formData
[
  {
    "required": "1",
    "_id": "61e031f79aea90ff8c9b87f5",
    "name": "projectId",
    "type": "text",
    "example": "9"
  }
]
 */
export function postProjectQueryById(data, options = {}) {
    return request({
        url: `/project/queryById`,
        method: 'POST',
        data: data,
        ...options
    })
}


