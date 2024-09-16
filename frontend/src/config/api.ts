const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const API_CONFIG = {
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // TODO: Add the token here after setting up the auth!
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
};

export { API_URL, API_CONFIG };
