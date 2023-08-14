const base_url = 'http://localhost:333';

export const fetchWrapper = async (url: string, options: any) => {
    const response = await fetch(`base_url${url}`, options);
    const data = await response.json();
    return data;
}