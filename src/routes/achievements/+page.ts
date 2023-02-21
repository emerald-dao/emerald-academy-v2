import { user } from "$stores/flow/FlowStore"
import { getEmeraldID } from "$flow/actions";
import { supabase } from "$lib/supabaseClient";
import { get } from "svelte/store";

export const load = async () => {
    const userObj = get(user);
    if (!userObj.loggedIn) {
        return { value: null };
    }

    const userAddr = userObj.addr;
    const emeraldID = await getEmeraldID(userAddr);

    if (!emeraldID) {
        return { value: null };
    }

    const { data } = await supabase.from('rankings').select().eq('discord_id', emeraldID);
    const [profile] = data;

    return {
        value: profile?.score
    }
};
