import axios from "axios";
import { AxiosResponse } from "axios";


export const stt = async (data:any) => {
    try {
        const res = await axios.post(
            '...',
            data
        )
        return res
    }
    catch(e){
        console.log(e);
        return {}
    }
}