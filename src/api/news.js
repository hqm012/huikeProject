import request from '@/utils/request'



/**
 *  新闻动态-删除接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3747
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{}}
 */
export function putNewsStatus(data, options = {}) {
    return request({
        url: `/news/status`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 新闻动态-上下架接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/11640
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{}}
 */
export function putNewsUpdateStatus(data, options = {}) {
    return request({
        url: `/news/updateStatus`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 新闻动态-列表接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3702
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{}}
 */
export function postNewsListPage(data, options = {}) {
    return request({
        url: `/news/list-page`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 新闻动态-新增接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3711
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{"title":{"type":"string","mock":{"mock":"真北小雨伞计划"},"description":"新闻标题"},"description":{"type":"string","mock":{"mock":"在真北小雨伞计划中，我们共有756人次参与捐赠，筹集到2万余元汇聚着开课吧人爱心的善款，为打渔陈镇中心小学、前方小学的孩子们，捐赠了一间真北图书馆童馆。为乡村孩子们搭建起阅读大千世界的桥梁。"},"description":"新闻描述"},"image":{"type":"string","mock":{"mock":" https"},"description":"新闻图片"},"content":{"type":"string","mock":{"mock":" 10月初，慧科公益基金会携手开课吧发起了真北小雨伞计划"},"description":"新闻内容"},"project_id":{"type":"number","mock":{"mock":"0"},"description":"新闻所属公益项目"},"type":{"type":"number","mock":{"mock":"0"},"description":"类型;0=官方动态 1=媒体动态"}},"required":["title"]}
 * 请求参数 - body - formData
[
  {
    "required": "1",
    "_id": "61d84d4a9aea9039359b853d",
    "name": "title",
    "type": "text",
    "example": "镇北小学",
    "desc": "新闻标题"
  },
  {
    "required": "1",
    "_id": "61d84d4a9aea900cc69b853c",
    "name": "image",
    "type": "text",
    "example": "http",
    "desc": "新闻封面地址"
  },
  {
    "required": "1",
    "_id": "61d84d4a9aea905bf69b853b",
    "name": "content",
    "type": "text",
    "example": "今天在小学",
    "desc": "新闻内容"
  },
  {
    "required": "1",
    "_id": "61d84d4a9aea906e5f9b853a",
    "name": "type",
    "type": "text",
    "example": "0",
    "desc": "内容类型 0=官方动态 1=媒体动态"
  },
  {
    "required": "0",
    "_id": "61d84d4a9aea90f8da9b8539",
    "name": "projectId",
    "type": "text",
    "example": "1",
    "desc": "所属公益项目id"
  },
  {
    "required": "0",
    "_id": "61d84d4a9aea9089939b8538",
    "name": "description",
    "type": "text",
    "example": "在小学发生",
    "desc": "新闻描述"
  },
  {
    "required": "1",
    "_id": "61d84d4a9aea908d239b8537",
    "name": "status",
    "type": "text",
    "example": "0",
    "desc": "0上架中、1下架中"
  }
]
 */
export function postNewsAdd(data, options = {}) {
    return request({
        url: `/news/add`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 新闻动态-编辑接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3738
 * 备注: 
 * 请求参数 - body - formData
[
  {
    "required": "1",
    "_id": "61dea6959aea907fcd9b879b",
    "name": "newsId",
    "type": "text",
    "example": "6"
  },
  {
    "required": "1",
    "_id": "61dea6959aea905b179b879a",
    "name": "title",
    "type": "text",
    "example": "真北小雨伞计划",
    "desc": ""
  },
  {
    "required": "1",
    "_id": "61dea6959aea9001249b8799",
    "name": "image",
    "type": "text",
    "example": "https",
    "desc": ""
  },
  {
    "required": "1",
    "_id": "61dea6959aea900bf59b8798",
    "name": "content",
    "type": "text",
    "example": "alt=\"\"></li>",
    "desc": ""
  },
  {
    "required": "1",
    "_id": "61dea6959aea908ae19b8797",
    "name": "type",
    "type": "text",
    "example": "0",
    "desc": ""
  },
  {
    "required": "0",
    "_id": "61dea6959aea9016389b8796",
    "name": "status",
    "type": "text",
    "example": "0",
    "desc": ""
  },
  {
    "required": "0",
    "_id": "61dea6959aea90714d9b8795",
    "name": "projectId",
    "type": "text",
    "example": "1",
    "desc": ""
  },
  {
    "required": "0",
    "_id": "61dea6959aea9066439b8794",
    "name": "pushTime",
    "type": "text",
    "example": "2020",
    "desc": ""
  }
]
 */
export function putNewsEdit(data, options = {}) {
    return request({
        url: `/news/edit`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 新闻动态-置顶接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3720
 * 备注: 
 */
export function putNewsUpdateSort(data, options = {}) {
    return request({
        url: `/news/updateSort`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 新闻动态-详情接口 
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3729
 * 备注: 
 */
export function postNewsQueryById(data, options = {}) {
    return request({
        url: `/news/queryById`,
        method: 'POST',
        data: data,
        ...options
    })
}
