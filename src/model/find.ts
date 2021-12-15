import axios from "@/axios/index";
import { responseModel } from './base';


interface bannerParams {
    pageNum: number,
    pageSize: number,
    type: number
}
export async function apiGetBanner(params: bannerParams): Promise<any> {
    const res: responseModel = await axios.post("/cadinea/api/v1/protect/bbs/ad/page", {
        ...params
    });

    if (res.statusCode == 200) {
        return res.data
    } else {
        console.log(`apiGetBanner response error: ${res.message}`)
    };
}


interface bbsParams {
    bbsSectionId:string,
    isOrderByEssenceFlag: number,
    isOrderByTopFlag: number,
    lastDate?: string,
    pageNum: number,
    pageSize: number,
    sortField: string,
    sortOrder: string,
    types: any[]
}
export async function apiGetBbs(params: bbsParams):Promise<any> {
    const res: responseModel = await axios.post("/cadinea/api/v1/protect/bbs/getContentPage/v2", {
        ...params
    });

    if (res.statusCode == 200) {
        return res.data
    } else {
        console.log(`apiGetBanner response error: ${res.message}`)
    };
}