
document.addEventListener('mousemove', function(e) {
    const img = document.getElementById('goth-girl');
    const box = document.getElementById('contract-box');
    const rect = box.getBoundingClientRect();
    const dist = Math.hypot(e.clientX - (rect.left + rect.width/2), e.clientY - (rect.top + rect.height/2));

    // Move head slightly with mouse
    let offsetX = (e.clientX / window.innerWidth - 0.5) * 20;
    let offsetY = (e.clientY / window.innerHeight - 0.5) * 20;
    img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    // "React" when mouse is close to contract address
    if (dist < 100) {
        box.style.background = '#c084fc';
        box.style.color = '#fff';
        box.style.transform = 'scale(1.1)';
    } else {
        box.style.background = '#a36fb0';
        box.style.color = '#000';
        box.style.transform = 'scale(1)';
    }
});
