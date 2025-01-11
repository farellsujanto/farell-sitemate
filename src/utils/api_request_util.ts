
export async function fetchApiRequest<T>(url: string, options: RequestInit): Promise<T> {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        throw error;
    }
}
