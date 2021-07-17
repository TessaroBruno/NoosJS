/*  (C) 2021 Bruno Tessaro
 *  NoosUI.js
 *  #v 1.2021.2.4
 */

noos = window.noos || {};
noos.ui = noos.ui || {};

noos.ui.initializeWebapp = function() {
    var tag;
    tag = document.createElement('meta');
    tag.name = 'viewport';
    tag.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no';
    document.head.insertBefore(tag, document.head.firstElementChild);
    tag = document.createElement('meta');
    tag.name = 'keywords';
    tag.content = webapp.name + ' ' + webapp.version;
    document.head.insertBefore(tag, document.head.firstElementChild);
    tag = document.createElement('meta');
    tag.name = 'copyright';
    tag.content = webapp.copy;
    document.head.insertBefore(tag, document.head.firstElementChild);
    tag = document.createElement('meta');
    tag.name = 'author';
    tag.content = webapp.author;
    document.head.insertBefore(tag, document.head.firstElementChild);
    tag = document.createElement('meta');
    tag.name = 'description';
    tag.content = webapp.description;
    document.head.insertBefore(tag, document.head.firstElementChild);
    tag = document.createElement('title');
    tag.innerHTML = webapp.name;
    document.head.insertBefore(tag, document.head.firstElementChild);
}

noos.ui.loadLanguage = function(callback) {
    if (localStorage.getItem('lang') == undefined)
        localStorage.setItem('lang', 'en');
    noosLoadJSON(webapp.urlbase + '/js/lang/' +
        localStorage.getItem('lang') + '.json',
        function(response) {
            callback(webapp.lang = JSON.parse(response));
        });
}

noos.ui.notification = function() {
    var modalform;
    var modalbodytext;

    this.create = function() {
        modalform = document.createElement('div');
        modalform.id = 'modalPopup';
        modalform.classList.add('modal');
        document.body.appendChild(modalform);

        var modalcontent = document.createElement('div');
        modalcontent.classList.add('modal-content');
        modalform.appendChild(modalcontent);
        var modalheader = document.createElement('div');
        modalheader.classList.add('modal-header');
        modalcontent.appendChild(modalheader);
        var modalclose = document.createElement('span');
        modalclose.classList.add('modal-close');
        modalclose.innerHTML = '&times;';
        modalheader.appendChild(modalclose);
        var modalheadertext = document.createElement('h2');
        modalheadertext.classList.add('modal-text');
        modalheadertext.innerText = webapp.name;
        modalheader.appendChild(modalheadertext);

        var modalbody = document.createElement('div');
        modalbody.classList.add('modal-body');
        modalcontent.appendChild(modalbody);
        modalbodytext = document.createElement('p');
        modalbodytext.classList.add('modal-text');
        modalbody.appendChild(modalbodytext);

        var modalfooter = document.createElement('div');
        modalfooter.classList.add('modal-footer');
        modalcontent.appendChild(modalfooter);
        var modalfootertext = document.createElement('h3');
        modalfootertext.classList.add('modal-text');
        //modalfootertext.innerText = 'footer text';
        modalfooter.appendChild(modalfootertext);

        modalclose.onclick = function() {
            modalform.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modalform) {
                modalform.style.display = "none";
            }
        }
    };

    this.setText = function(text) {
        modalbodytext.innerText = text;
    };

    this.show = function() {
        modalform.style.display = "block";
    };
};

window.addEventListener('click', function(e) {
    const select = document.querySelector('.combobox-select');
    if (select != null)
        if (!select.contains(e.target))
            select.classList.remove('open');
});

noos.ui.createElement = function(element_type, element_id,
    element_par, element_par2, element_par3, element_par4) {
    var uielement;

    try {
        switch (element_type) {
            case 'Title':
                uielement = document.createElement('h2');
                uielement.classList.add('title');
                if (element_id != undefined) {
                    uielement.name = element_id;
                    uielement.id = element_id;
                }
                uielement.innerHTML = element_par;
                break;
            case 'Label':
                uielement = document.createElement('h1');
                uielement.classList.add('label');
                if (element_id != undefined) {
                    uielement.name = element_id;
                    uielement.id = element_id;
                }
                uielement.innerHTML = element_par;
                break;
            case 'Textbox':
                uielement = document.createElement('input');
                uielement.classList.add('textbox');
                uielement.type = 'text';
                if (element_id != undefined) {
                    uielement.name = element_id;
                    uielement.id = element_id;
                }
                uielement.placeholder = element_par;
                break;
            case 'TextArea':
                uielement = document.createElement('textarea');
                uielement.classList.add('textarea');
                if (element_id != undefined) {
                    uielement.name = element_id;
                    uielement.id = element_id;
                }
                if (element_par != undefined) uielement.rows = element_par;
                if (element_par2 != undefined) uielement.cols = element_par2;
                break;
            case 'ButtonPrimary':
                uielement = document.createElement('button');
                uielement.classList.add('btn');
                uielement.classList.add('btn-primary');
                if (element_id != undefined) {
                    uielement.name = element_id;
                    uielement.id = element_id;
                }
                uielement.innerHTML = element_par;
                break;
            case 'ButtonSecondary':
                uielement = document.createElement('button');
                uielement.classList.add('btn');
                uielement.classList.add('btn-secondary');
                if (element_id != undefined) {
                    uielement.name = element_id;
                    uielement.id = element_id;
                }
                uielement.innerHTML = element_par;
                break;
            case 'InputPassword':
                uielement = document.createElement('input');
                uielement.type = 'password';
                if (element_id != undefined) {
                    uielement.name = element_id;
                    uielement.id = element_id;
                }
                break;
            case 'Checkbox':
                uielement = document.createElement('input');
                uielement.classList.add('element');
                uielement.type = 'checkbox';
                if (element_id != undefined) uielement.id = element_id;
                if (element_par == true) uielement.checked = true;
                break;
            case 'Switch':
                uielement = document.createElement('input');
                uielement.classList.add('element');
                uielement.classList.add('switch');
                uielement.type = 'checkbox';
                if (element_id != undefined) uielement.id = element_id;
                if (element_par == true) uielement.checked = true;
                break;
            case 'Radiobutton':
                uielement = document.createElement('input');
                uielement.classList.add('element');
                uielement.type = 'radio';
                if (element_id != undefined) uielement.id = element_id;
                if (element_par != undefined) uielement.name = element_par;
                if (element_par2 != undefined) uielement.value = element_par2;
                if (element_par3 == true) uielement.checked = true;
                break;
            case 'LabelFor':
                uielement = document.createElement('label');
                uielement.classList.add('labelfor');
                uielement.innerText = element_par;
                if (element_id != undefined) uielement.setAttribute('for', element_id);
                break;
            case 'Slider':
                uielement = document.createElement('input');
                uielement.classList.add('slider');
                uielement.type = 'range';
                if (element_id != undefined) {
                    uielement.name = element_id;
                    uielement.id = element_id;
                }
                if (element_par != undefined) uielement.value = element_par;
                if (element_par2 != undefined) uielement.min = element_par2;
                if (element_par3 != undefined) uielement.max = element_par3;
                break;
            case 'Combobox':
                var option;
                uielement = document.createElement('div');
                uielement.classList.add('combobox-wrapper');
                uielement.addEventListener('click', function() {
                    this.querySelector('.combobox-select').classList.toggle('open');
                });
                var select = document.createElement('div');
                select.classList.add('combobox-select');
                uielement.appendChild(select);
                var selecttrg = document.createElement('div');
                selecttrg.classList.add('combobox-select_trigger');
                select.appendChild(selecttrg);
                var trgspan = document.createElement('span');
                if (element_id != undefined) trgspan.id = element_id;
                trgspan.innerText = element_par[0];
                trgspan.setAttribute("data-value", element_par2[0]);
                selecttrg.appendChild(trgspan);
                var arrow = document.createElement('div');
                arrow.classList.add('combobox-arrow');
                selecttrg.appendChild(arrow);

                var options = document.createElement('div');
                options.classList.add('combobox-options');
                select.appendChild(options);
                for (i = 0; i < element_par.length; i++) {
                    option = document.createElement('span');
                    option.classList.add('combobox-option');
                    if (i == 0) option.classList.add('selected');
                    option.setAttribute("data-value", element_par2[i]);
                    option.innerText = element_par[i];
                    option.addEventListener('click', function() {
                        if (!this.classList.contains('selected')) {
                            this.parentNode.querySelector(
                                '.combobox-option.selected').classList.remove('selected');
                            this.classList.add('selected');
                            this.closest('.combobox-select').querySelector(
                                '.combobox-select_trigger span').textContent = this.textContent;
                        }
                    })
                    options.appendChild(option);
                }
                break;
            case 'Table':
                var row;
                var rowdata;
                var cell;
                uielement = document.createElement('table');
                uielement.classList.add('table');
                if (element_id != undefined) uielement.id = element_id;
                var tblHead = document.createElement("thead");
                row = document.createElement("tr");
                for (i = 0; i < element_par.length; i++) {
                    cell = document.createElement("th");
                    cell.innerText = element_par[i];
                    row.appendChild(cell);
                }
                tblHead.appendChild(row);
                uielement.appendChild(tblHead);
                var tblBody = document.createElement("tbody");
                for (i = 0; i < element_par2.length; i++) {
                    row = document.createElement("tr");
                    rowdata = element_par2[i];
                    for (x = 0; x < rowdata.length; x++) {

                        cell = document.createElement("td");
                        cell.innerText = rowdata[x];
                        row.appendChild(cell);
                    }
                    tblBody.appendChild(row);
                }
                uielement.appendChild(tblBody);
                break;
            case 'Panel':
                uielement = document.createElement('div');
                if (element_par == 'inline')
                    uielement.classList.add('panel-inline');
                else
                    uielement.classList.add('panel-block');
                if (element_id != undefined)
                    uielement.id = element_id;
                break;
            case 'DatePicker':
                uielement = document.createElement('input');
                uielement.classList.add('textbox');
                uielement.type = 'date';
                if (element_id != undefined) {
                    uielement.name = element_id;
                    uielement.id = element_id;
                }
                break;
            case 'DateTimePicker':
                uielement = document.createElement('input');
                uielement.classList.add('textbox');
                uielement.type = 'datetime-local';
                if (element_id != undefined) {
                    uielement.name = element_id;
                    uielement.id = element_id;
                }
                break;
            case 'EmailInput':
                uielement = document.createElement('input');
                uielement.classList.add('textbox');
                uielement.type = 'email';
                if (element_id != undefined) {
                    uielement.name = element_id;
                    uielement.id = element_id;
                }
                break;
            case 'NumUpDown':
                uielement = document.createElement('input');
                uielement.classList.add('textbox');
                uielement.type = 'number';
                if (element_id != undefined) {
                    uielement.name = element_id;
                    uielement.id = element_id;
                }
                if (element_par != undefined) uielement.value = element_par;
                if (element_par2 != undefined) uielement.min = element_par2;
                if (element_par3 != undefined) uielement.max = element_par3;
                break;
            case 'ProgressBar':
                uielement = document.createElement('progress');
                uielement.classList.add('progress');
                if (element_id != undefined) uielement.id = element_id;
                if (element_par != undefined) uielement.value = element_par;
                if (element_par2 != undefined) uielement.min = element_par2;
                if (element_par3 != undefined) uielement.max = element_par3;
                break;
            case 'Image':
                uielement = document.createElement('img');
                uielement.classList.add('image');
                if (element_id != undefined) uielement.id = element_id;
                uielement.src = element_par;
                break;
            default:
        }
    } catch (err) {
        console.error(err);
    }
    return uielement;
}

noos.ui.createComponent = function(element_type,
    element_par, element_par2, element_par3) {
    var uielement;

    try {
        switch (element_type) {
            case 'LoginBox':
                uielement = document.createElement('div');
                uielement.classList.add('loginbox-inner-container');
                var loginbox = document.createElement('div');
                loginbox.classList.add('loginbox');
                uielement.appendChild(loginbox);
                loginbox.appendChild(
                    Object.assign(document.createElement('h1'), {
                        innerHTML: webapp.name
                    })
                );
                loginbox.appendChild(
                    Object.assign(document.createElement('img'), {
                        src: '/img/logo.png',
                        width: 100
                    })
                );
                loginbox.appendChild(
                    Object.assign(document.createElement('input'), {
                        type: 'text',
                        id: 'username',
                        placeholder: webapp.lang.username,
                        autocomplete: 'username'
                    })
                );
                loginbox.appendChild(
                    Object.assign(noos.ui.createElement(
                        'InputPassword', 'password'), {
                        placeholder: webapp.lang.password,
                        autocomplete: 'password'
                    })
                );
                loginbox.appendChild(
                    Object.assign(document.createElement('button'), {
                        innerHTML: webapp.lang.login,
                        id: 'loginBtn'
                    })
                );
                break;
            case 'SideBar':
                uielement = document.createElement('nav');

                var logoimglink = document.createElement('a');
                logoimglink.href = '#0';
                uielement.appendChild(logoimglink);
                var logoimg = document.createElement('img');
                logoimg.classList.add('logo');
                logoimg.src = 'img/Logo.png';
                logoimg.alt = 'Logo';
                logoimglink.appendChild(logoimg);

                var togglebtn = document.createElement('button');
                togglebtn.classList.add('toggle-mob-menu');
                togglebtn.setAttribute('aria-expanded', 'false');
                togglebtn.setAttribute('aria-label', 'open menu');
                uielement.appendChild(togglebtn);
                var icondown = document.createElement('i');
                icondown.classList.add('fas');
                icondown.classList.add('fa-bars');
                icondown.setAttribute('aria-hidden', 'true');
                togglebtn.appendChild(icondown);

                var sidemenu = document.createElement('ul');
                sidemenu.classList.add('admin-menu');
                sidemenu.id = 'sidebarmenu';
                uielement.appendChild(sidemenu);
                break;
            case 'Header':
                uielement = document.createElement('section');
                uielement.classList.add('headerbar');
                uielement.id = 'headerbar';
                break;
            case 'MainPanel':
                uielement = document.createElement('section');
                uielement.classList.add('mainpanel');
                uielement.id = 'mainpanel';
                break;
            case 'Footer':
                uielement = document.createElement('footer');
                uielement.classList.add('footer');
                uielement.appendChild(
                    Object.assign(document.createElement('small'), {
                        innerHTML: webapp.copy,
                        id: 'footer'
                    })
                );
                break;
            case 'SideMenuHeading':
                uielement = document.createElement('li');
                uielement.classList.add('menu-heading');
                var sidemenutext = document.createElement('h3');
                sidemenutext.innerHTML = element_par;
                uielement.appendChild(sidemenutext);
                break;
            case 'SideMenuButton':
                uielement = document.createElement('li');
                uielement.classList.add('menu-heading');

                var menurow = document.createElement('a');
                menurow.id = element_par;
                uielement.appendChild(menurow);
                var iconrow = document.createElement('i');
                iconrow.classList.add('fas');
                iconrow.classList.add(element_par2);
                menurow.appendChild(iconrow);
                var textrow = document.createElement('span');
                textrow.classList.add('iconspan');
                textrow.innerHTML = element_par3;
                menurow.appendChild(textrow);
                break;
            case 'CollapsibleSideMenuButton':
                uielement = document.createElement('li');

                var collapsebtn = document.createElement('button');
                collapsebtn.classList.add('collapse-btn');
                collapsebtn.setAttribute('aria-expanded', 'true');
                collapsebtn.setAttribute('aria-label', 'collapse menu');
                uielement.appendChild(collapsebtn);
                var iconcollapse = document.createElement('i');
                iconcollapse.classList.add('fas');
                iconcollapse.classList.add('fa-bars');
                iconcollapse.setAttribute('aria-hidden', 'true');
                collapsebtn.appendChild(iconcollapse);

                // collapse menù handler
                collapsebtn.addEventListener("click", function() {
                    this.getAttribute("aria-expanded") == "true" ?
                        this.setAttribute("aria-expanded", "false") :
                        this.setAttribute("aria-expanded", "true");
                    this.getAttribute("aria-label") == "collapse menu" ?
                        this.setAttribute("aria-label", "expand menu") :
                        this.setAttribute("aria-label", "collapse menu");
                    document.body.classList.toggle('collapsed');
                });

                var menuLinks = document.querySelectorAll(".admin-menu a");
                for (const link of menuLinks) {
                    link.addEventListener("mouseenter", function() {
                        document.body.classList.contains('collapsed') &&
                            window.matchMedia("(min-width: 768px)").matches ?
                            this.setAttribute("title", this.textContent) :
                            this.removeAttribute("title");
                    });
                }

                var toggleMobileMenu = document.querySelector(".toggle-mob-menu");
                toggleMobileMenu.addEventListener("click", function() {
                    this.getAttribute("aria-expanded") == "true" ?
                        this.setAttribute("aria-expanded", "false") :
                        this.setAttribute("aria-expanded", "true");
                    this.getAttribute("aria-label") == "open menu" ?
                        this.setAttribute("aria-label", "close menu") :
                        this.setAttribute("aria-label", "open menu");
                    document.body.classList.toggle("mob-menu-opened");
                });
                break;
            case 'HeaderSearch':
                uielement = document.createElement('form');

                var searchinput = document.createElement('input');
                searchinput.type = 'search';
                searchinput.placeholder = '';
                uielement.appendChild(searchinput);
                var searchbtn = document.createElement('button');
                searchbtn.type = 'submit';
                searchbtn.setAttribute('aria-label', 'submit form');
                uielement.appendChild(searchbtn);
                var iconsearch = document.createElement('i');
                iconsearch.classList.add('fa');
                iconsearch.classList.add('fa-search');
                searchbtn.appendChild(iconsearch);
                break;
            case 'HeaderUser':
                uielement = document.createElement('div');
                uielement.classList.add('admin-profile');

                var usertext = document.createElement('span');
                usertext.classList.add('greeting');
                usertext.innerHTML = element_par;
                uielement.appendChild(usertext);
                var notification = document.createElement('div');
                notification.classList.add('notifications');
                uielement.appendChild(notification);
                var userbadge = document.createElement('span');
                userbadge.classList.add('badge');
                userbadge.id = 'userbadge';
                userbadge.style.visibility = 'hidden';
                notification.appendChild(userbadge);


                var separator = document.createElement('span');
                separator.classList.add('iconspan');
                separator.innerHTML = ' ';
                notification.appendChild(separator);


                var iconuser = document.createElement('i');
                iconuser.classList.add('fa');
                iconuser.classList.add('fa-user-circle');
                iconuser.id = 'usericon';
                notification.appendChild(iconuser);

                notification.appendChild(separator);

                var iconuser = document.createElement('i');
                iconuser.classList.add('fas');
                iconuser.classList.add('fa-sign-out-alt');
                iconuser.onclick = (ev) => { window.location.reload() };
                notification.appendChild(iconuser);
                break;
            case 'Grid1x1':
                var mainpanel = document.querySelector("#mainpanel");
                mainpanel.innerHTML = '';
                mainpanel.classList.remove('grid1e2');
                mainpanel.classList.remove('grid2e1');
                mainpanel.classList.remove('grid2x2');
                mainpanel.classList.remove('grid3e1');
                mainpanel.classList.remove('grid1e3');
                mainpanel.classList.remove('grid4e1');
                mainpanel.classList.remove('grid1e4');
                mainpanel.classList.add('grid1x1');

                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_1' })
                );
                break;
            case 'Grid1e2':
                var mainpanel = document.querySelector("#mainpanel");
                mainpanel.innerHTML = '';
                mainpanel.classList.remove('grid1x1');
                mainpanel.classList.remove('grid2e1');
                mainpanel.classList.remove('grid2x2');
                mainpanel.classList.remove('grid3e1');
                mainpanel.classList.remove('grid1e3');
                mainpanel.classList.remove('grid4e1');
                mainpanel.classList.remove('grid1e4');
                mainpanel.classList.add('grid1e2');

                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_1' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_1' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_2' })
                );
                break;
            case 'Grid2e1':
                var mainpanel = document.querySelector("#mainpanel");
                mainpanel.innerHTML = '';
                mainpanel.classList.remove('grid1x1');
                mainpanel.classList.remove('grid1e2');
                mainpanel.classList.remove('grid2x2');
                mainpanel.classList.remove('grid3e1');
                mainpanel.classList.remove('grid1e3');
                mainpanel.classList.remove('grid4e1');
                mainpanel.classList.remove('grid1e4');
                mainpanel.classList.add('grid2e1');

                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_1' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_2' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_1' })
                );
                break;
            case 'Grid2x2':
                var mainpanel = document.querySelector("#mainpanel");
                mainpanel.innerHTML = '';
                mainpanel.classList.remove('grid1x1');
                mainpanel.classList.remove('grid1e2');
                mainpanel.classList.remove('grid2e1');
                mainpanel.classList.remove('grid3e1');
                mainpanel.classList.remove('grid1e3');
                mainpanel.classList.remove('grid4e1');
                mainpanel.classList.remove('grid1e4');
                mainpanel.classList.add('grid2x2');

                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_1' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_2' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_1' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_2' })
                );
                break;
            case 'Grid3e1':
                var mainpanel = document.querySelector("#mainpanel");
                mainpanel.innerHTML = '';
                mainpanel.classList.remove('grid1x1');
                mainpanel.classList.remove('grid1e2');
                mainpanel.classList.remove('grid2e1');
                mainpanel.classList.remove('grid2x2');
                mainpanel.classList.remove('grid1e3');
                mainpanel.classList.remove('grid4e1');
                mainpanel.classList.remove('grid1e4');
                mainpanel.classList.add('grid3e1');

                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_1' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_2' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_3' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_1' })
                );
                break;
            case 'Grid1e3':
                var mainpanel = document.querySelector("#mainpanel");
                mainpanel.innerHTML = '';
                mainpanel.classList.remove('grid1x1');
                mainpanel.classList.remove('grid1e2');
                mainpanel.classList.remove('grid2e1');
                mainpanel.classList.remove('grid2x2');
                mainpanel.classList.remove('grid3e1');
                mainpanel.classList.remove('grid4e1');
                mainpanel.classList.remove('grid1e4');
                mainpanel.classList.add('grid1e3');

                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_1' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_1' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_2' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_3' })
                );
                break;
            case 'Grid4e1':
                var mainpanel = document.querySelector("#mainpanel");
                mainpanel.innerHTML = '';
                mainpanel.classList.remove('grid1x1');
                mainpanel.classList.remove('grid1e2');
                mainpanel.classList.remove('grid2e1');
                mainpanel.classList.remove('grid2x2');
                mainpanel.classList.remove('grid3e1');
                mainpanel.classList.remove('grid1e3');
                mainpanel.classList.remove('grid1e4');
                mainpanel.classList.add('grid4e1');

                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_1' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_2' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_3' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_4' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_1' })
                );
                break;
            case 'Grid1e4':
                var mainpanel = document.querySelector("#mainpanel");
                mainpanel.innerHTML = '';
                mainpanel.classList.remove('grid1x1');
                mainpanel.classList.remove('grid1e2');
                mainpanel.classList.remove('grid2e1');
                mainpanel.classList.remove('grid2x2');
                mainpanel.classList.remove('grid3e1');
                mainpanel.classList.remove('grid1e3');
                mainpanel.classList.remove('grid4e1');
                mainpanel.classList.add('grid1e4');

                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area1_1' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_1' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_2' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_3' })
                );
                mainpanel.appendChild(
                    Object.assign(document.createElement('article'), { id: 'area2_4' })
                );
                break;
            default:
        }
    } catch (err) {
        console.error(err);
    }
    return uielement;
}

noos.ui.loadPageLogin = function(callback) {
    var body = document.body;

    body.innerHTML = "";
    body.classList.remove('sidemenupage');
    body.classList.add('loginpage');

    webapp.popup.create();
    body.appendChild(noos.ui.createComponent('LoginBox'));
    callback();
}

noos.ui.loadPageSidebar = function(callback) {
    var body = document.body;

    body.innerHTML = "";
    body.classList.remove('loginpage');
    body.classList.add('sidemenupage');

    webapp.popup.create();

    var sidemenucontainer = document.createElement('header');
    sidemenucontainer.classList.add('sidemenubar');
    body.appendChild(sidemenucontainer);
    sidemenucontainer.appendChild(noos.ui.createComponent('SideBar'));

    var pagepanel = document.createElement('section');
    pagepanel.classList.add('pagepanel');
    body.appendChild(pagepanel);
    pagepanel.appendChild(noos.ui.createComponent('Header'));
    pagepanel.appendChild(noos.ui.createComponent('MainPanel'));
    pagepanel.appendChild(noos.ui.createComponent('Footer'));
    callback();
}