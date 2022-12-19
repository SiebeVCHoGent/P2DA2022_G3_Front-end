import { axios2 } from ".";

export const getSearchTerms = async (sectorId) => {
    const { data } = await axios2.get(`/searchterms`)
    return data
}

export const getWoorden = async (id)=>{
    const {data} = await axios2.get(`/searchterm/${id}/words`)
    return data
}

export const addWord = async (term,word) => {
    const { data } = await axios2.post(`/searchterm/${term}/woord/${word}`,)
    return data
}

export const deleteWord = async (term,id) => {
    const { data } = await axios2.delete(`/searchterm/${term}/woord/${id}`)
    return data
}

export const herbereken = async () => {
    console.log('test')
    const { data } = await axios2.post(`/score/recalculate/2021`)
    return data
}