import { axios, axios2 } from ".";

export const searchKmo = async (searchTerm) => {
    const {data} = await axios2.get(`/kmos?search=${searchTerm}`);
    return data;
}

export const getSector = async (sectorId) => {
    const { data } = await axios.get(`/sector/${sectorId}`)
    return data
}

export const getHoofdSector = async (sectorId) => {
    const { data } = await axios.get(`/hoofdsector/${sectorId}`)
    return data
}

export const getBestKmosSector = async (sectorId) => {
    const {data} = await axios.get(`/sector/best/${sectorId}`)
    return data
}

export const getBestSectors = async () => {
    const { data } = await axios.get(`/sector/best`)
    return data
}

export const getBestKmosHoofdSector = async (sectorId) => {
    const { data } = await axios.get(`/hoofdsector/best/${sectorId}`)
    return data
}

export const getBestHoofdSectors = async () => {
    const { data } = await axios.get(`/hoofdsector/best`)
    return data
}