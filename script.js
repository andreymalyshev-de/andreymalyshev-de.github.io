function toggling() {
    /* makes the menu visible */
    document.getElementById("myMenu").classList.toggle("show");
    /* turns the arrow up */
    document.querySelector(".dropbtn").classList.toggle("active")
}

window.onclick = function(event) {
    if (!event.target.closest('.dropbtn')) {
        var dropdowns = this.document.getElementsByClassName("menu-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) openDropdown.classList.remove('show');
        }

        var btn = this.document.querySelector(".dropbtn");
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
        }
    }
}

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" /* avoids jumping */
    });
}

var btn = document.querySelector(".topBtn");

window.onscroll = function() {
    if (this.document.body.scrollTop > 200 || this.document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
};

function contact() {
    document.querySelector('footer').scrollIntoView({
        behavior: "smooth"
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        /* if the entry is visible */
        if (entry.isIntersecting) {
            entry.target.classList.add('shown');
            observer.unobserve(entry.target);
        }
    });
});

const hiddenEls = document.querySelectorAll('.hidden');
hiddenEls.forEach((el) => observer.observe(el))

/* toggling func changes the display attribute from none to block (shows the content of the menu);
    window.onclick checks whether the click was made on the button or somewhere else
    and closes the menu if not on the button */

/* when clicked on the flag image, it opens the menu and closes it automatically,
    since !event.target.matches('.dropbtn') didn't match the menuPic class.
    closest solves this problem -> it searches for parent classes */

/* observer looks for all hidden classes and shows them */