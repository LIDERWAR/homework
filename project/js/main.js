(function () {

    // =========================================
    // burger
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1000) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // ==============================================
    // поле date
    

    let startDate = new Date();
    
    new AirDatepicker('#airdatepicker', {
        startDate,
        multipleDates: true,
    })




    // const input = document.querySelector('.date-input');

    // input.addEventListener('focus', function () {
    //     this.type = 'date';
    // });
    // input.addEventListener('blur', function () {
    //     if (this.value === '') {
    //         this.type = 'text';
    //     }
    // });

    // // ===============================
    // // sliders-gallery

    const swiper = new Swiper('.traver__card-gallery', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        spaceBetween: 15,
        slidesPerView: 1,

        // If we need pagination
        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },
        
       // Navigation arrows
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            450: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            601: {
                slidesPerView: 2.1,
                spaceBetween: 13,
            },
            801: {
                slidesPerView: 2.3,
                spaceBetween: 15,
            },
            1101: {
                slidesPerView: 2.9,
                spaceBetween: 15,
            },
            1201: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });














    // // ===============================================
    // // modal
    // const modal = document.querySelector('.modal')
    // const modalButton = document.querySelector('.about__img-button')

    // modalButton.addEventListener('click', openModal)
    // modal.addEventListener('click', closeModal)

    // function openModal(e) {
    //     e.preventDefault()
    //     document.body.classList.toggle('body--opened-modal')
    // }

    // function closeModal(e) {
    //     e.preventDefault()
    //     const target = e.target

    //     if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
    //         document.body.classList.remove('body--opened-modal')
    //     }
    // }
    // // ===============================================
    // // tabs
    // const tabControls = document.querySelector('.tab-controls')

    // tabControls.addEventListener('click', toggleTab)

    // function toggleTab(e) {
    //     const tabButton = e.target.closest('.tab-controls__link')

    //     if (!tabButton) return
    //     e.preventDefault()
    //     if (tabButton.classList.contains('tab-controls__link--active')) return

    //     const tabContentId = tabButton.getAttribute('href')
    //     const tabContent = document.querySelector(tabContentId)
    //     const activeControl = document.querySelector('.tab-content--show')
    //     const activeContent = document.querySelector('.tab-controls__link--active')

    //     activeControl.classList.remove('tab-content--show')
    //     activeContent.classList.remove('tab-controls__link--active')

    //     tabContent.classList.add('tab-content--show')
    //     tabButton.classList.add('tab-controls__link--active')
    // }
    // // ====================
    // // accordion
    // const accordionList = document.querySelectorAll('.accordion-list')

    // accordionList.forEach(el => {
    //     el.addEventListener('click', (e) => {
    //         const accordionList = e.currentTarget
    //         const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
    //         const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

    //         const accordionControl = e.target.closest('.accordion-list__control');
    //         if (!accordionControl) return
    //         const accordionItem = accordionControl.parentElement;
    //         const accordionContent = accordionControl.nextElementSibling;

    //         if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
    //             accordionOpenedItem.classList.remove('accordion-list__item--opened')
    //             accordionOpenedContent.style.maxHeight = null;
    //         }
    //         accordionItem.classList.toggle('accordion-list__item--opened');

    //         if (accordionItem.classList.contains('accordion-list__item--opened')) {
    //             accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    //         } else {
    //             accordionContent.style.maxHeight = null;
    //         }
    //     })
    // })

    

})(); 