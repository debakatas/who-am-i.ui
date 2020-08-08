const endpoint = process.env.REACT_APP_BACKEND || `http://localhost:9000`;

export const doGet = async (path) => {
    const res = await fetch(`${endpoint}/${path}`);
    const data = await res.json();
    return data;
};