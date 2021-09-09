// TODO: write code here

class Popover {
  constructor(content) {
    this.popover = `<div class="popover popover-hide"> 
        <h4 class="popover__header">${content.title}</h4>
        <p class="popover__body">${content.message}</p>
        <div class="popover__arrow"></div>
        </div>`;
  }

  addPopover(elem) {
    elem.insertAdjacentHTML('beforebegin', this.popover);
    elem.addEventListener('click', () => {
      this.popover.classList.toggle('.popover-hide');
    });
  }
}

const popoverButton = document.querySelector('.toggleButton');
const popoverContent = { title: 'This is a title', message: 'This is a message' };
const popover = new Popover(popoverContent);
popover.addPopover(popoverButton);
