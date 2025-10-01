// Author: Nicholas Panayotakos

// Description: This file is responsible for the dropdown component to enable keyboard navigation and accessibility.

class Dropdown {
  constructor(container) {
    this.isOpen = false;
    this.activeIndex = undefined;

    this.container = container;
    this.button = container.querySelector(".dropdown__button");
    this.menuContainer = container.querySelector(".dropdown__menu-container");
    this.menu = container.querySelector(".dropdown__menu");
    
    this.items = container.querySelectorAll(".dropdown__menu-item");

    // Set initial tabindex for all menu items
    this.items.forEach(item => {
      item.setAttribute("tabindex", "-1");
    });

    this.setMenuPosition();
  }

  initEvents() {
    this.button.addEventListener("click", this.onButtonClick.bind(this));
    this.button.addEventListener("keydown", this.onButtonKeyDown.bind(this));
    this.button.addEventListener("focus", this.onButtonFocus.bind(this));
    this.container.addEventListener("focusout", this.onContainerFocusOut.bind(this));
    document.addEventListener("click", this.onClickOutside.bind(this));
    document.addEventListener("keydown", this.onKeyEvent.bind(this));
    
    // Add click handlers for menu items
    this.items.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.close();
      });
    });
  }

  onButtonFocus(e) {
    // Open menu when button receives focus
    if (!this.isOpen) {
      this.open();
    }
  }

  onContainerFocusOut(e) {
    // Check if focus is moving outside the entire dropdown container
    setTimeout(() => {
      if (!this.container.contains(document.activeElement)) {
        this.close();
      }
    }, 0);
  }

  onButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.toggle();
  }

  onButtonKeyDown(e) {
    // Open menu with Enter or Space
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!this.isOpen) {
        this.open();
        // Focus first item after opening
        setTimeout(() => {
          this.activeIndex = 0;
          this.items[0].focus();
        }, 10);
      }
    }
    
    // Open menu and focus first item with ArrowDown
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!this.isOpen) {
        this.open();
        setTimeout(() => {
          this.activeIndex = 0;
          this.items[0].focus();
        }, 10);
      }
    }
    
    // Open menu and focus last item with ArrowUp
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!this.isOpen) {
        this.open();
        setTimeout(() => {
          this.activeIndex = this.items.length - 1;
          this.items[this.activeIndex].focus();
        }, 10);
      }
    }
  }

  open() {
    if (this.isOpen) return;
    this.isOpen = true;
    this.button.setAttribute("aria-expanded", "true");
    this.menu.setAttribute("aria-hidden", "false");
    this.container.dataset.open = "true";
    
    // Make first item focusable when menu opens
    if (this.items.length > 0) {
      this.items[0].setAttribute("tabindex", "0");
    }
    
    // Recalculate position when opening
    setTimeout(() => {
      this.setMenuPosition();
    }, 0);
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.activeIndex = undefined;
    this.button.setAttribute("aria-expanded", "false");
    this.menu.setAttribute("aria-hidden", "true");
    this.container.dataset.open = "false";
    
    // Remove all items from tab order when menu closes
    this.items.forEach(item => {
      item.setAttribute("tabindex", "-1");
    });
  }

  setMenuPosition() {
    // Reset any previous positioning to get natural dimensions
    this.menuContainer.style.top = '';
    this.menuContainer.style.bottom = '';
    this.menuContainer.style.transform = '';
    
    // Force a reflow to get accurate measurements
    this.menuContainer.offsetHeight;
    
    // Get actual dimensions
    const menuRect = this.menuContainer.getBoundingClientRect();
    const buttonRect = this.button.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Calculate available space above and below the button
    const spaceAbove = buttonRect.top;
    const spaceBelow = viewportHeight - buttonRect.bottom;
    const menuHeight = menuRect.height;
    
    // Determine best position
    if (spaceBelow >= menuHeight) {
      // Enough space below - position normally
      this.menuContainer.style.top = '100%';
      this.menuContainer.classList.remove('dropdown__menu-container--above');
    } else if (spaceAbove >= menuHeight) {
      // Not enough space below but enough above - position above
      this.menuContainer.style.bottom = '100%';
      this.menuContainer.classList.add('dropdown__menu-container--above');
    } else {
      // Not enough space in either direction - use the larger space and add scrolling
      if (spaceBelow > spaceAbove) {
        this.menuContainer.style.top = '100%';
        this.menuContainer.style.maxHeight = `${spaceBelow - 10}px`;
        this.menuContainer.classList.remove('dropdown__menu-container--above');
      } else {
        this.menuContainer.style.bottom = '100%';
        this.menuContainer.style.maxHeight = `${spaceAbove - 10}px`;
        this.menuContainer.classList.add('dropdown__menu-container--above');
      }
      this.menuContainer.style.overflowY = 'auto';
    }
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  onClickOutside(e) {
    if (!this.isOpen) return; 

    let targetElement = e.target;

    do {
      if (targetElement == this.container) return;

      targetElement = targetElement.parentNode;
    } while (targetElement);

    this.toggle();
  }

  onKeyEvent(e) {
    if (!this.isOpen) return;

    // Close menu with Tab
    if (e.key === "Tab") {
      this.close();
      return;
    }

    // Close menu and return focus to button with Escape
    if (e.key === "Escape") {
      e.preventDefault();
      this.close();
      this.button.focus();
      return;
    }

    // Navigate to next item with ArrowDown
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (this.activeIndex === undefined) {
        this.activeIndex = 0;
      } else {
        this.activeIndex = this.activeIndex < this.items.length - 1 ? this.activeIndex + 1 : 0;
      }
      this.setActiveItem();
      return;
    }

    // Navigate to previous item with ArrowUp
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (this.activeIndex === undefined) {
        this.activeIndex = this.items.length - 1;
      } else {
        this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : this.items.length - 1;
      }
      this.setActiveItem();
      return;
    }

    // Navigate to first item with Home
    if (e.key === "Home") {
      e.preventDefault();
      this.activeIndex = 0;
      this.setActiveItem();
      return;
    }

    // Navigate to last item with End
    if (e.key === "End") {
      e.preventDefault();
      this.activeIndex = this.items.length - 1;
      this.setActiveItem();
      return;
    }

    // Activate item with Enter or Space
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (this.activeIndex !== undefined) {
        this.items[this.activeIndex].click();
        this.close();
        this.button.focus();
      }
      return;
    }

    // Character search navigation
    if (e.key.length === 1 && e.key.match(/\S/)) {
      e.preventDefault();
      this.searchByCharacter(e.key.toLowerCase());
      return;
    }
  }

  searchByCharacter(char) {
    // Start search from next item after current, or from beginning
    const startIndex = this.activeIndex !== undefined ? this.activeIndex + 1 : 0;
    
    // Search from start index to end
    for (let i = startIndex; i < this.items.length; i++) {
      const itemText = this.items[i].textContent.trim().toLowerCase();
      if (itemText.startsWith(char)) {
        this.activeIndex = i;
        this.setActiveItem();
        return;
      }
    }
    
    // If not found, search from beginning to start index
    for (let i = 0; i < startIndex; i++) {
      const itemText = this.items[i].textContent.trim().toLowerCase();
      if (itemText.startsWith(char)) {
        this.activeIndex = i;
        this.setActiveItem();
        return;
      }
    }
  }

  setActiveItem() {
    // Remove tabindex from all items
    this.items.forEach(item => {
      item.setAttribute("tabindex", "-1");
    });
    
    // Set tabindex and focus on active item
    if (this.activeIndex !== undefined && this.items[this.activeIndex]) {
      this.items[this.activeIndex].setAttribute("tabindex", "0");
      this.items[this.activeIndex].focus();
    }
  }
}

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => new Dropdown(dropdown).initEvents());
