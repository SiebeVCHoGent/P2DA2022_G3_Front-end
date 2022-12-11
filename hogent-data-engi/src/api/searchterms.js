import { axios2 } from ".";

export const getSearchTerms = async (sectorId) => {
    const { data } = await axios2.get(`/searchterms`)
    return data
}

export const getWoorden = async (id)=>{
    const {data} = await axios2.get(`/searchterm/${id}/words`)
    return data
}