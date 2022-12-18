import { axios, axios2 } from ".";

export const searchKmo = async (searchTerm) => {
    const {data} = await axios2.get(`/kmos?search=${searchTerm}`);
    return data;
}

export const getKmoByOndernemingsnummer = async (ondernemingsnummer) => {
    const { data } = await axios2.get(`/kmo/${ondernemingsnummer}`)
    return data
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
    const {data} = await axios2.get(`/score/ranking/2021/sector/${sectorId}`)
    return data
}

export const getBestSectors = async () => {
    const { data } = await axios2.get(`/score/ranking/2021/sector`)
    return data
}

export const getBestKmosHoofdSector = async (sectorId) => {
    const { data } = await axios2.get(`/score/ranking/2021/hoofdsector/${sectorId}`)
    return data
}

export const getBestHoofdSectors = async () => {
    const { data } = await axios2.get(`/score/ranking/2021/hoofdsector`)
    return data
}

export const getGraphData = async (ondernemingsnummer) => {
    const { data } = await axios2.get(`/graph/2021/${ondernemingsnummer}`)
    return data
}

export const voorspel = async (body) => {
    const { data } = await axios2.post(`/predict`, body)
    return data
}