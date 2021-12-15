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