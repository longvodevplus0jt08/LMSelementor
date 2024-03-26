function scrollXToZero() {
    window.scroll({
        top: 0,
        left: window.scrollX,
        behavior: 'smooth'
    });
}