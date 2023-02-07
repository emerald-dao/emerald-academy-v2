import { user } from "$stores/FlowStore"
import { getEmeraldID } from "$flow/actions";
import { supabase } from "$lib/supabaseClient";

export const load = async () => {
    if (!user.loggedIn) {
        return { value: null };
    }

    const userAddr = user.addr;
    const emeraldID = await getEmeraldID(userAddr);
    if (!emeraldID) {
        return { value: null };
    }

    const { data } = await supabase.from('rankings').select().eq('discord_id', emeraldID);
    const [profile] = data;

    return {
        value: profile.score
    }
};
