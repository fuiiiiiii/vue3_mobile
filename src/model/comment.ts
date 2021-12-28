import axios from "@/axios/index";
import { responseModel } from './base';


interface commentParams {
    bbsContentId: String,
    isComment: String,
    pageNum: Number,
    pageSize: Number,
    sortField?: String,
    sortOrder: String,
    status: Number,
    essenceFlag?: String
}

export const apiGetComment = async (params: commentParams): Promise<any> => {
    const res: responseModel = await axios.post("/cadinea/api/v1/private/bbs/comment/page", {
        ...params
    });

    if (res.statusCode == 200) {
        return res.data;
    } else {
        console.log(`apiGetComment response error: ${res.message}`)
        return false;
    };
}