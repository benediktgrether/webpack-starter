export function initNavigationOnScroll() {
    const header = document.querySelector('#data-header');
    const scrollHeightEventFire = 80;

    if (header) {
        navigationOnScrollheader(header, scrollHeightEventFire);
    }
}

function navigationOnScrollheader(header, scrollHeightEventFire) {
    if (window.scrollY > scrollHeightEventFire) {
        header.classList.add('header-navigation--scrolled');
    }


    document.addEventListener('scroll', function () {

        if (window.scrollY > scrollHeightEventFire) {
            header.classList.add('header-navigation--scrolled');
        }
        else {
            header.classList.remove('header-navigation--scrolled');
        }
    });
}