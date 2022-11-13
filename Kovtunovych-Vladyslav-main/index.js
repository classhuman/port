const func = (id) => {
    const elementToView = document.getElementById(id);
    elementToView.scrollIntoView({
        behavior: 'smooth'
    });
}
