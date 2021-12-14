import axios from "@/axios/index";

export function getBanner(): Promise<any> {
    return axios.post("/cadinea/api/v1/protect/bbs/ad/page")
}