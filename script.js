function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none' || !section.style.display) {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

// Ocultar todos los contenidos al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.toggle-content').forEach(content => {
        content.style.display = 'none';
    });
    // Cargar el chatbot de Voiceflow
    (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
            window.voiceflow.chat.load({
                verify: { projectID: '67eaade1770ceb5319c8a89f' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production',
                voice: {
                    url: "https://runtime-api.voiceflow.com"
                }
            });
        }
        v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
        v.type = "text/javascript"; 
        s.parentNode.insertBefore(v, s);
    })(document, 'script');
});
