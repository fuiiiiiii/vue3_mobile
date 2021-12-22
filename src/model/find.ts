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
        return res.data;
    } else {
        console.log(`apiGetBanner response error: ${res.message}`)
        return false;
    };
}


interface bbsParams {
    bbsSectionId: string,
    isOrderByEssenceFlag: number,
    isOrderByTopFlag: number,
    lastDate?: string,
    pageNum: number,
    pageSize: number,
    sortField: string,
    sortOrder: string,
    types: any[]
}
export async function apiGetBbs(params: bbsParams): Promise<any> {
    const res: responseModel = await axios.post(`/cadinea/api/v1/${localStorage["userToken"]? 'private': 'protect'}/bbs/getContentPage/v2`, {
        ...params
    });

    if (res.statusCode == 200) {
        return res.data;
    } else {
        console.log(`apiGetBanner response error: ${res.message}`)
        return false;
    };
}


interface detailParams {
    id: string
}

export async function apiGetDetail(params: detailParams): Promise<any> {
    const res: responseModel = await axios.post("/cadinea/api/v1/protect/bbs/getContentPage/detail/v2", {
        ...params
    });

    if (res.statusCode == 200) {
        return res.data;
    } else {
        console.log(`apiGetDetail response error: ${res.message}`)
        return false;
    };

}

interface likeParams {
    id: string
    praise: string
    type: string
}

export async function apiLike(params: likeParams): Promise<any> {
    const res: responseModel = await axios.post(`/cadinea/api/v1/private/bbs/praise`, {
        ...params
    });

    if (res.statusCode == 200) {
        return res.data;
    } else {
        console.log(`apiLike response error: ${res.message}`)
        return false;
    };

}