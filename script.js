document.addEventListener('DOMContentLoaded', function() {

    // 사이드바
    const menuTitles = document.querySelectorAll('.s_menu dt');
    
    menuTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling; 
            
            if (this.classList.contains('open')) {
                this.classList.remove('open');
                content.style.display = 'none';
            } else {
                this.classList.add('open');
                content.style.display = 'block';
            }
        });
    });

    // 캐릭터 선택바 
    const charSltBtn = document.querySelector('.ecl_char_slt');
    const charListLayer = document.querySelector('.ly_charslt');

    if (charSltBtn && charListLayer) {
        charSltBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const isVisible = charListLayer.style.display === 'block';
            charListLayer.style.display = isVisible ? 'none' : 'block';
            
            // 버튼 활성화
            this.classList.toggle('on');
        });

        // 레이어 바깥 클릭 시 닫기
        document.addEventListener('click', function(e) {
            if (!charSltBtn.contains(e.target) && !charListLayer.contains(e.target)) {
                charListLayer.style.display = 'none';
                charSltBtn.classList.remove('on');
            }
        });
    }


    const sideLinks = document.querySelectorAll('.s_menu dd a');
    
    sideLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


});

document.addEventListener('DOMContentLoaded', function() {
    const navBtn = document.querySelector('.evt_nav');
    const evtMenu = document.querySelector('.evt_menu');
    let leaveTimeout;

    // 메뉴 표시
    const showMenu = () => {
        clearTimeout(leaveTimeout); 
        evtMenu.style.display = 'block';
    };

    // 메뉴 숨김
    const hideMenu = () => {
        leaveTimeout = setTimeout(() => {
            evtMenu.style.display = 'none';
        }, 150); 
    };

    // 전체메뉴
    navBtn.addEventListener('mouseenter', showMenu);
    navBtn.addEventListener('mouseleave', hideMenu);

    // 메뉴바 유지
    evtMenu.addEventListener('mouseenter', showMenu);
    evtMenu.addEventListener('mouseleave', hideMenu);
});


const charCards = document.querySelectorAll('.lst_char a');

charCards.forEach(card => {
    const img = card.querySelector('img');
    const offSrc = img.src; 
    const onSrc = offSrc.replace('.png', '_on.png');

    card.addEventListener('mouseenter', function() {
        this.classList.add('on'); 
        img.src = onSrc;          
    });

    card.addEventListener('mouseleave', function() {
        this.classList.remove('on'); 
        img.src = offSrc;            
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const topBtn = document.querySelector('.ecl_top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 600) {
            topBtn.classList.add('ecl_topfix');
        } else {
            topBtn.classList.remove('ecl_topfix');
        }
    });

    // 최상단
    topBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sideMenu = document.querySelector('.s_menu');
    const menuTop = sideMenu.getBoundingClientRect().top + window.scrollY;

    window.addEventListener('scroll', function() {
        if (window.scrollY >= menuTop) {
            sideMenu.classList.add('mn_fix');
        } else {
            sideMenu.classList.remove('mn_fix');
        }
    });
});

// 보이스박스
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.sub .tab a');
    const voiceBoxes = document.querySelectorAll('.tab_c .voice_box');

    // 탭 클릭 
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            tabs.forEach(t => t.classList.remove('on'));
            this.classList.add('on');

            voiceBoxes.forEach(box => {
                box.style.display = 'none';
                box.classList.remove('show');
            });
            
            if (voiceBoxes[index]) {
                voiceBoxes[index].style.display = 'block';
                voiceBoxes[index].classList.add('show');
            }
        });
    });

    if (tabs[1]) {
        tabs[1].click();
    }
});