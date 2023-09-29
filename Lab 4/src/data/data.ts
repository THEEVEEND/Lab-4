export async function getNeko(){
    try {
        const data = await fetch("https://nekos.best/api/v2/wink?amount=8").then(res => res.json());
        console.log(data);
        return data.results;
    } catch (error) {
        console.error(error);
    }
}
