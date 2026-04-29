async function askAI(prompt) {
    const apiKey = window.APP_KEYS.cs; // This gets the combined key
    
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "llama3-8b-8192",
            messages: [{ role: "user", content: prompt }]
        })
    });
    
    const data = await response.json();
    console.log(data.choices[0].message.content);
}
