const projectModalColivingProject = document.querySelector('#coliving-project-modal');
const projectModalMltProject = document.querySelector('#mlt-project-modal');

const projectOpenBtnColivingProject = document.querySelector('#coliving-project-btn');
const projectOpenBtnMltProject = document.querySelector('#mlt-project-btn');

const projectModals = [ projectModalColivingProject, projectModalMltProject ];
const projectBtns = [ projectOpenBtnColivingProject, projectOpenBtnMltProject ];

const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

const modalsWrappers = document.querySelectorAll('.modal-area-bgd');
const modalContainers = document.querySelectorAll('.modal-area-content');

const MODAL_ACTIVE_CLASS = 'modal-active';
const BODY_SCROLL_DISABLE_CLASS = 'body-scroll-disable';

enableCloseModalOnBgdClick();
hideModalOnMobileMenuElementsClick();

projectBtns.forEach((btn, index) => {
    const projectModal = projectModals[index];

    if (btn) {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            projectModal.classList.add(MODAL_ACTIVE_CLASS);

            document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
        })
    }
});

modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', hideModal);
})

function enableCloseModalOnBgdClick() {
    if (modalContainers.length) {
        modalContainers.forEach( container => {
            container.addEventListener('click', event => event.stopPropagation());
        });
    }

    if (modalsWrappers.length) {
        modalsWrappers.forEach( container => {
            container.addEventListener('click', hideModal);
        });
    }
}


function hideModal() {
    const modalToClose = document.querySelector(`.${MODAL_ACTIVE_CLASS}`);

    if (modalToClose) {
        modalToClose.classList.remove(MODAL_ACTIVE_CLASS);
        document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS);    
    }
}

function hideModalOnMobileMenuElementsClick() {
    const MOBILE_MENU_ITEM_CLOSE_DELAY = 150;
    const menuElements = document.querySelectorAll('.mobile-menu-item');

    if (menuElements.length) {
        menuElements.forEach( container => {
            container.addEventListener('click', () => setTimeout(hideModal, MOBILE_MENU_ITEM_CLOSE_DELAY));
        });
    }
}