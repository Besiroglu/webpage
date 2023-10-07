// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-53150914-2', 'auto');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let newTheme = "light";
    if (currentTheme === "light") {
        newTheme = "dark";
    }
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
}

document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    }

    document.querySelector(".themeToggle").addEventListener("click", toggleTheme);

    const htmlTag = document.documentElement;
    const themeToggleButton = document.getElementById("theme-toggle-button");

    // Check for user's preference and set initial theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlTag.setAttribute('data-theme', 'dark');
    }

    // Cache the button element for better performance
    const btn = document.querySelector('.toTop__btn');

    window.onscroll = function () {
        // Check how far we've scrolled
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > 600) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }
});
