
export async function fetchApiRequest<T>(url: string, options: RequestInit): Promise<T> {
    try {
        const response = await fetch(url, options);
        console.log(response.status);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching API:', error);
        throw error;
    }
}
