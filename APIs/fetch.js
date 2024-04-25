let URL = "https://api.api-ninjas.com/v1/chucknorris?";

const API_KEY = "h/Ig48/zxpf083tO4DZgyg==eKkv49i06zx2Qm1f"; // Corrected typo in API_KEY

const getGata = async () => {
    console.log("Getting data...");

    try {
        const response = await fetch(URL, {
            method: 'GET', // Assuming GET is the required method, adjust if needed
            headers: {
                'X-Api-Key': API_KEY
            }
        });

        // Check for successful response
        if (response.ok) {
            const data = await response.json(); // Assuming the response is JSON
            console.log("Data:", data);
        } else {
            console.error("Error fetching data:", response.status);
        }
    } catch (error) {
        console.error("Error:", error);
    }

    console.log("Done getting data");
};

getGata();
