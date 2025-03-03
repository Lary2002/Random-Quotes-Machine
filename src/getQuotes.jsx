
export const getQuotes = async () => {
    try {
        const quotes = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
        const data = await quotes.json();        
        return data.quotes
    } catch (error) {
        console.error(error);
    }
}