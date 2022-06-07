import request from '@/utils/request'



/**
 * 轮播图-列表接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3648
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{"pageNum":{"type":"number","description":"当前页","mock":{"mock":"1"}},"pageSize":{"type":"number","description":"每页的数量","mock":{"mock":"10"}}},"required":["pageNum","pageSize"]}
 */
export function postBannerListPage(data, options = {}) {
    return request({
        url: `/banner/list-page`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 轮播图-置顶接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3666
 * 备注: 
 */
export function putBannerUpdateSort(data, options = {}) {
    return request({
        url: `/banner/updateSort`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 轮播图-详情接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3675
 * 备注: 
 */
export function postBannerQueryById(data, options = {}) {
    return request({
        url: `/banner/queryById`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 轮播图-状态修改接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3693
 * 备注: 
 */
export function putBannerStatus(data, options = {}) {
    return request({
        url: `/banner/status`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 轮播图-新增接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3657
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{"title":{"type":"string","mock":{"mock":"xx图片"},"description":"图片标题"},"description":{"type":"string","mock":{"mock":"这是一张xx图片"},"description":"图片介绍"},"image":{"type":"string","mock":{"mock":"https://"},"description":"图片地址"},"url":{"type":"string","mock":{"mock":"https://"},"description":"详情跳转地址"},"status":{"type":"number","description":"状态;0=上架 1=下架 ","mock":{"mock":"0"}},"sort":{"type":"number","description":"排序号","mock":{"mock":"0"}}},"required":["title","image","status","url","description","sort"]}
 */
export function postBannerAdd(data, options = {}) {
    return request({
        url: `/banner/add`,
        method: 'POST',
        data: data,
        ...options
    })
}



/**
 * 轮播图-编辑接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/3684
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{"title":{"type":"string","mock":{"mock":"yy图片"},"description":"图片标题"},"description":{"type":"string","mock":{"mock":"这是一张yy图片"},"description":"图片介绍"},"image":{"type":"string","mock":{"mock":"test.png"},"description":"图片地址"},"url":{"type":"string","mock":{"mock":"a.html"},"description":"详情跳转地址"},"status":{"type":"number","mock":{"mock":"2"},"description":"图片状态，0=上架 1=下架 2=删除"},"sort":{"type":"number","description":"排序号"}},"required":["title","image","status","sort"]}
 */
export function putBannerEdit(data, options = {}) {
    return request({
        url: `/banner/edit`,
        method: 'PUT',
        data: data,
        ...options
    })
}



/**
 * 轮播图-上下架接口
 * YAPI: http://proj.kaikeba.com:3000/project/162/interface/api/11667
 * 备注: 
 * 请求参数 - body - json
{"type":"object","title":"empty object","properties":{}}
 */
export function putBannerUpdateStatus(data, options = {}) {
    return request({
        url: `/banner/updateStatus`,
        method: 'PUT',
        data: data,
        ...options
    })
}


