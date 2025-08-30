// Advanced markdown loader using marked.js library
// First, include this in your HTML: <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

async function loadAdvancedContent(sectionId, contentPath) {
    try {
        const response = await fetch(contentPath);
        const markdown = await response.text();
        
        // Use marked.js to convert markdown to HTML
        const html = marked.parse(markdown);
        
        const section = document.getElementById(sectionId);
        if (section) {
            const contentDiv = section.querySelector('.section-content');
            if (contentDiv) {
                contentDiv.innerHTML = html;
            }
        }
    } catch (error) {
        console.error(`Error loading content for ${sectionId}:`, error);
    }
}

// Load all content when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadAdvancedContent('about', '/content/about.md');
    loadAdvancedContent('contact', '/content/contact.md');
});
