function runWebApp() {
    webapp.name = 'Noos Sample WebApp';
    webapp.description = 'Sample JS webapp';
    webapp.version = '1.2021.2.4';
    webapp.author = 'Bruno Tessaro';
    webapp.copy = 'Copyright &copy; 2021 Bruno Tessaro';

    if (window.localStorage == null) {
        alert("Your browser doesn't support this webapp.\nTry changing your browser.");
        return;
    }

    webapp.popup = new noos.ui.notification();
    noos.ui.initializeWebapp();

    document.body.classList.add('themegray');
    localStorage.setItem('lang', 'en');

    noos.ui.loadLanguage(function() {
        noos.ui.loadPageLogin(function() {
            document.getElementById('loginBtn').onclick = (ev) => {
                loadMainPage();
            };
            document.getElementById('password').onkeydown = (ev) => {
                if (ev.code == 'Enter') { loadMainPage(); }
            };
        });
    });

    var loadMainPage = function() {
        noos.ui.loadPageSidebar(function() {
            // Sidebar menu
            var sidebarmenu = document.querySelector("#sidebarmenu");
            sidebarmenu.appendChild(noos.ui.createComponent('SideMenuHeading', webapp.lang.mainmenu));
            sidebarmenu.appendChild(noos.ui.createComponent('SideMenuButton', 'FirstPageBtn',
                'fa-tachometer-alt', webapp.lang.dashboard));
            document.querySelector("#FirstPageBtn").onclick = (ev) => { firstPage(); };
            sidebarmenu.appendChild(noos.ui.createComponent('CollapsibleSideMenuButton'));

            // Headerbar
            var headerbar = document.querySelector("#headerbar");
            headerbar.appendChild(noos.ui.createComponent('HeaderSearch'));

            headerbar.appendChild(noos.ui.createComponent('HeaderUser', 'Hello admin'));
            document.querySelector("#usericon").onclick = (ev) => {
                webapp.popup.setText('User button action');
                webapp.popup.show();
            };
            var badge = document.querySelector("#userbadge");
            badge.style.visibility = 'visible';
            badge.innerHTML = '2';

            // Main panel
            noos.ui.createComponent('Grid1x1');

            // Footer
            document.querySelector("#footer").innerText = 'Copyright © 2021 Bruno Tessaro';
        });
    }

    var firstPage = function() {
        noos.ui.createComponent('Grid3e1');
        var area11 = document.querySelector("#area1_1");
        var blockpanel = noos.ui.createElement('Panel', 'panel1', 'block');
        area11.appendChild(blockpanel);
        blockpanel.appendChild(noos.ui.createElement('Title', 'ttl1', webapp.lang.title));
        //alert(document.querySelector("#ttl1").textContent);
        blockpanel.appendChild(noos.ui.createElement('Label', 'lbl1', webapp.lang.label));
        blockpanel.appendChild(noos.ui.createElement('Textbox', 'txt1', webapp.lang.label));
        blockpanel.appendChild(noos.ui.createElement('TextArea', 'txa1', webapp.lang.label, 30, 10));
        blockpanel.appendChild(noos.ui.createElement(
            'Combobox', 'cox1', [webapp.lang.first, webapp.lang.second, webapp.lang.third], ['FirstVal', 'SecondVal', 'ThirdVal']));
        //alert('Combobox value: ' + document.querySelector("#cox1").dataset.value);
        blockpanel.appendChild(noos.ui.createElement('ButtonPrimary', 'btn1', webapp.lang.click));
        blockpanel.appendChild(noos.ui.createElement('ButtonSecondary', 'btn2', webapp.lang.click));

        var area12 = document.querySelector("#area1_2");
        var blockpanel2 = noos.ui.createElement('Panel', 'panel2', 'block');
        area12.appendChild(blockpanel2);
        blockpanel2.appendChild(noos.ui.createElement('Checkbox', 'cbx1', true));
        blockpanel2.appendChild(noos.ui.createElement('LabelFor', 'cbx1', webapp.lang.select));
        blockpanel2.appendChild(noos.ui.createElement('InputPassword', 'btnpwd'));
        blockpanel2.appendChild(noos.ui.createElement('Radiobutton', 'rdo1', 'radiogroup', 'Val1', true));
        blockpanel2.appendChild(noos.ui.createElement('LabelFor', 'rdo1', webapp.lang.select));
        blockpanel2.appendChild(noos.ui.createElement('Radiobutton', 'rdo2', 'radiogroup', 'Val2'));
        blockpanel2.appendChild(noos.ui.createElement('LabelFor', 'rdo2', webapp.lang.select));
        blockpanel2.appendChild(noos.ui.createElement('Slider', 'sld1', 12));
        blockpanel2.appendChild(noos.ui.createElement('Switch', 'cbx2', true));
        blockpanel2.appendChild(noos.ui.createElement('LabelFor', 'cbx2', webapp.lang.select));
        blockpanel2.appendChild(noos.ui.createElement('DatePicker', 'dp1'));
        blockpanel2.appendChild(noos.ui.createElement('DateTimePicker', 'date1'));
        blockpanel2.appendChild(noos.ui.createElement('EmailInput', 'mail1'));
        blockpanel2.appendChild(noos.ui.createElement('NumUpDown', 'num1', 15, 0, 50));
        blockpanel2.appendChild(noos.ui.createElement('ProgressBar', 'prog1', 25, 0, 100));

        var area13 = document.querySelector("#area1_3");
        var blockpanel3 = noos.ui.createElement('Panel', 'panel3', 'block');
        area13.appendChild(blockpanel3);
        blockpanel3.appendChild(noos.ui.createElement('Image', 'img1', 'img/loginbg.png'));

        var area21 = document.querySelector("#area2_1");
        area21.appendChild(noos.ui.createElement(
            'Table', 'tbl1', ['Col1', 'Col2', 'Col3'], [
                ['FirstVal', 'SecondVal', 'ThirdVal'],
                ['First', 'Second', 'Third'],
                ['FirVal', 'SecVal', 'ThiVal']
            ]));
    }
}