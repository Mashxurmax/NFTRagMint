export const onScroll = (href) => {
    const link = document.getElementById(href);
    const coords = link.getBoundingClientRect();
    const scroll = window.scrollY;
    const result = coords.top + scroll - 50;
    window.scrollTo(0, result);
};
