import request from '@/utils/request'



/**
 * 公益故事-新增接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3756
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{"title":{"type":"string","description":"标题"},"description":{"type":"string","description":"描述"},"content":{"type":"string","description":"内容"},"image":{"type":"string","description":"图片"},"createdBy":{"type":"string","description":"创建人"}},"required":["title","description","content","image","createdBy"]}
 * 请求参数 - body - formData
[
  {
    "required": "1",
    "_id": "61dcf57f9aea900d589b873c",
    "name": "title",
    "type": "text",
    "example": "标题16",
    "desc": "标题"
  },
  {
    "required": "1",
    "_id": "61dcf57f9aea9081f99b873b",
    "name": "description",
    "type": "text",
    "example": "新闻摘要",
    "desc": "内容摘要"
  },
  {
    "required": "1",
    "_id": "61dcf57f9aea905b2b9b873a",
    "name": "content",
    "type": "text",
    "example": "内容16",
    "desc": "内容"
  },
  {
    "required": "1",
    "_id": "61dcf57f9aea902dcd9b8739",
    "name": "image",
    "type": "text",
    "example": "图片16",
    "desc": "图片"
  },
  {
    "required": "0",
    "_id": "61dcf57f9aea90138e9b8738",
    "name": "sort",
    "type": "text",
    "example": "1",
    "desc": "排序"
  },
  {
    "required": "1",
    "_id": "61dcf57f9aea90bfa19b8737",
    "name": "status",
    "type": "text",
    "example": "0",
    "desc": "状态  0:上架  1:下架 ，默认传0"
  },
  {
    "required": "1",
    "_id": "61dcf57f9aea908ebf9b8736",
    "name": "pushTime",
    "type": "text",
    "example": "2021-11-12 00",
    "desc": "发布时间"
  }
]
 */
export function postStoryAdd(data, options = {}) {
    return request({
        url: `/story/add`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 公益故事-上下架接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3855
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{}}
 */
export function putStoryUpdateStatus(data, options = {}) {
    return request({
        url: `/story/updateStatus`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 公益故事-列表接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3765
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{}}
 */
export function postStoryListPage(data, options = {}) {
    return request({
        url: `/story/list-page`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 公益故事-置顶接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3774
 * 备注: 
 */
export function putStoryUpdateSort(data, options = {}) {
    return request({
        url: `/story/updateSort`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 *  公益故事-详情接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3783
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{}}
 */
export function postStoryQueryById(data, options = {}) {
    return request({
        url: `/story/queryById`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 公益故事-编辑接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3801
 * 备注: 
 * 请求参数 - body - formData
[
  {
    "required": "1",
    "_id": "61dea5979aea9011189b877f",
    "name": "title",
    "type": "text",
    "example": "test",
    "desc": "标题"
  },
  {
    "required": "1",
    "_id": "61dea5979aea906e959b877e",
    "name": "description",
    "type": "text",
    "example": "test-1117",
    "desc": "内容摘要"
  },
  {
    "required": "1",
    "_id": "61dea5979aea90c1119b877d",
    "name": "content",
    "type": "text",
    "example": "test",
    "desc": "内容"
  },
  {
    "required": "1",
    "_id": "61dea5979aea9089699b877c",
    "name": "image",
    "type": "text",
    "example": "55555",
    "desc": "封面图片"
  },
  {
    "required": "0",
    "_id": "61dea5979aea9012ef9b877b",
    "name": "sort",
    "type": "text",
    "example": "2",
    "desc": "排序"
  },
  {
    "required": "1",
    "_id": "61dea5979aea90e6ae9b877a",
    "name": "status",
    "type": "text",
    "example": "1",
    "desc": "状态;0=上架 1=下架"
  },
  {
    "required": "1",
    "_id": "61dea5979aea9006dd9b8779",
    "name": "pushTime",
    "type": "text",
    "example": "2021-10-06 02:24:56",
    "desc": "发布时间"
  }
]
 */
export function putStoryEdit(data, options = {}) {
    return request({
        url: `/story/edit`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 *  公益故事-删除接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3792
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{"storyId":{"type":"string"}},"required":["storyId"]}
 */
export function putStoryStatus(data, options = {}) {
    return request({
        url: `/story/status`,
        method: 'PUT',
        data: data,
        ...options
    })
}


