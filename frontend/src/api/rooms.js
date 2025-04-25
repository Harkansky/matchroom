export async function fetchRooms(filters = {}) {
    const p = new URLSearchParams();
    Object.entries(filters).forEach(([k, v]) => {
        if (v != null && v !== '' && !(Array.isArray(v) && v.length === 0)) {
            p.append(k, Array.isArray(v) ? v.join(',') : v);
        }
    });

    const res = await fetch(`/api/rooms?${p.toString()}`, {
        headers: { 'Accept': 'application/json' }
    });

    const raw = await res.text();
    console.log("reçue :", raw);

    if (!res.ok) {
        throw new Error(`HTTP ${res.status} : ${raw}`);
    }

    const json = JSON.parse(raw);
    return json.data;
}
