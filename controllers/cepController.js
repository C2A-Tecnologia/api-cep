import { getAddress } from "../services/cepC2a.js";

export const getAddressByCep = (query, body) => {
    try {
        const clientCep = query?.cep || body?.cep || "";
        if (clientCep) {
            const streets = getAddress(clientCep);
            if (streets?.length)
                return { code: 200, status: "ok", data: streets }
            return { code: 404, status: "not found" }
        }
        return { code: 400, status: "bad request" }
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}
export const setAddressByCep = (query, body) => {
    try {
        const resultado = { code: 200, status: "ok", message: { query, body } }
        return resultado;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}