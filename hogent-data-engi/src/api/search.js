import { axios } from ".";

export const searchKmo = async (searchTerm) => {
    const {data} = await axios.get(`/kmo/${searchTerm}`);
    return data;
}

export const getSector = async (sectorId) => {
    const { data } = await axios.get(`/sector/${sectorId}`)
    return data
}

export const getBestKmosSector = async (sectorId) => {
    const {data} = await axios.get(`/sector/best/${sectorId}`)
    return data
}