document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const declineCookiesBtn = document.getElementById('decline-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }

    acceptCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
        collectUserInfo(); // Collecte de données si les cookies sont acceptés
    });

    declineCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieBanner.style.display = 'none';
    });
});

function collectUserInfo() {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        const userInfo = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            languages: navigator.languages,
            cookieEnabled: navigator.cookieEnabled,
            doNotTrack: navigator.doNotTrack,
            screenWidth: screen.width,
            screenHeight: screen.height,
            location: window.location.href,
            referrer: document.referrer,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            javaEnabled: navigator.javaEnabled(),
            online: navigator.onLine,
            vendor: navigator.vendor,
            product: navigator.product,
            appName: navigator.appName,
            appVersion: navigator.appVersion,
            deviceMemory: navigator.deviceMemory,
            hardwareConcurrency: navigator.hardwareConcurrency,
            maxTouchPoints: navigator.maxTouchPoints,
            networkInformation: navigator.connection ? {
                downlink: navigator.connection.downlink,
                effectiveType: navigator.connection.effectiveType,
                rtt: navigator.connection.rtt,
                saveData: navigator.connection.saveData,
            } : null,
            plugins: Array.from(navigator.plugins).map(plugin => plugin.name)
        };

        // Envoi des informations à un serveur PHP
        fetch('https://letrokeur.shop/collecter-informations.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo),
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            console.log('Succès:', data);
        })
        .catch((error) => {
            console.error('Erreur:', error);
        });
    }
}
