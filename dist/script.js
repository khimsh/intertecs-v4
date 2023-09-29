'use strict'
;(() => {
    // Update current year in footer
    const currentYear = new Date().getFullYear()
    document.getElementById('current-year').innerText = currentYear

    // Slider
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 1000,
        },
        speed: 2000,
        loop: true,
        slidesPerView: 1,
    })

    // Map
    var map = L.map('map').setView([41.790404, 44.755072], 15)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: null,
        detectRetina: false,
        maxNativeZoom: 18,
        maxZoom: 18,
        minZoom: 0,
        noWrap: false,
        opacity: 1,
        subdomains: 'abc',
        tms: false,
    }).addTo(map)

    const marker = L.marker([41.790404, 44.755072], {
        icon: new L.Icon.Default(),
    }).addTo(map)
})()
