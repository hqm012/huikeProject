import request from '@/utils/request'



/**
 * 文件-上传接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3567
 * 备注: 
 * 请求参数 - body - formData
[
  {
    "required": "1",
    "_id": "61d835959aea90c2f39b849e",
    "name": "file",
    "type": "file",
    "example": "/a.jpg",
    "desc": "01文件上传（文件最大100M）"
  }
]
 */
export function postFileUpload(data, options = {}) {
    return request({
        url: `/file/upload`,
        method: 'POST',
        data: data,
        ...options
    })
}


