class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="navbar">
                <div class="logo"><a><img src="Resourses/Pacesetter logo.png" alt=""></a></div>
                <ul class="links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <a href="http://ptsexpress.netlify.app" class="action_btn">Track Order</a>
                <div class="toggle_btn">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>

            <div class="dropdown_menu">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="http://ptsexpress.netlify.app" class="action_btn">Track Order</a></li>
                </ul>
            </div>
        </header>`;

        // Add the toggle functionality
        const toggleBtn = this.querySelector('.toggle_btn');
        const toggleBtnIcon = this.querySelector('.toggle_btn i');
        const dropDownMenu = this.querySelector('.dropdown_menu');

        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open');
            toggleBtnIcon.className = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars';
        };
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer_col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">affiliate program</a></li>
                            </ul>
                        </div>

                        <div class="footer_col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">intracity</a></li>
                                <li><a href="#">intercity</a></li>
                                <li><a href="#">logistics</a></li>
                            </ul>
                        </div>

                        <div class="footer_col">
                            <h4>online service</h4>
                            <ul>
                                <li><a href="#">omituntun card</a></li>
                                <li><a href="#">top up</a></li>
                                <li><a href="#">free wifi</a></li>
                                <li><a href="#">digital signage</a></li>
                            </ul>
                        </div>

                        <div class="footer_col footer_handles">
                            <h4>follow us</h4>
                            <div class="social_links">
                                <a href="https://www.facebook.com/profile.php?id=61550586621342&mibextid=ZbWKwL" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="https://x.com/OyoPts?t=qgOnyPz427E9n7q30xoIiA&s=09" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                                <a href="https://www.instagram.com/oyopts?igsh=a3M3YjNxbms2b3gw" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>`;
    }
}

// Define custom elements
customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
