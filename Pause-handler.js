
/**
 * NeuroLearn AI - Pause Logic Module
 * Focus: AbortController management for GitHub Pages
 */

let neuroController = null;

// 1. Function to prepare the "Signal" before calling the AI
function initializeAIStream() {
    neuroController = new AbortController();
    return neuroController.signal;
}

// 2. The Core Pause Function (The Square Icon Action)
function triggerPause() {
    if (neuroController) {
        neuroController.abort(); // Cuts the connection immediately
        console.log("Stream stopped by user.");
        
        const responseBox = document.getElementById('ai-response-box');
        const pauseBtn = document.getElementById('pause-btn');
        
        if (responseBox) responseBox.innerHTML += " <b style='color: #ef4444;'>[PAUSED]</b>";
        if (pauseBtn) pauseBtn.style.display = 'none';
        
        neuroController = null;
    }
}

// 3. Exporting logic to the button in your HTML
document.addEventListener('DOMContentLoaded', () => {
    const pauseBtn = document.getElementById('pause-btn');
    if (pauseBtn) {
        pauseBtn.addEventListener('click', triggerPause);
    }
});
