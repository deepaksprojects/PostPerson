import { supabase } from "@/lib/supabase"

export const TokenProvider = async() =>{
    const {data} = await supabase.functions.invoke('stream-token')
    return data.token
}