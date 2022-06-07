import request from '@/utils/request'



/**
 * 埋点-录入接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3558
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{}}
 */
export function postTrackerInput(data, options = {}) {
    return request({
        url: `/tracker/input`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 埋点-统计接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3540
 * 备注: 
 */
export function postTrackerQuery(data, options = {}) {
    return request({
        url: `/tracker/query`,
        method: 'POST',
        data: data,
        ...options
    })
}


