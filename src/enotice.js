/**
 * -------------------------------------------------------------------
 * @author Eduardo Martínez <eduardo.mzhz@gmail.com>
 * @version 1.1 | January 2018
 * -------------------------------------------------------------------
 */

 /**
  * @class
  * @property [string] message - Text of the notice
  * @property [string] color - Border and background color
  * @property [number] duration - Time displayed in milliseconds
  * @property [object] position - Position in window by axis
  * @property [string] stack - Position in the line
  * @property [HTMLElement] container - Container of the element
  * @property [HTMLElement] element - Representation in the DOM
  */
class eNotice {
  /**
   * @constructor
   * @param [string] message - Text to display
   * @param [object] options - Optional settings
   */
  constructor(message, options) {
    options = options || {};
    this.message = message || '';
    this.color = options.color || 'black';
    this.duration = options.duration || null;
    this.position = options.position || { x: 'right', y: 'bottom' };
    this.stack = options.stack || 'last';
    this.container = this._setContainer();
    this.element = this._setElement();

    this._insertElement();
    if (this.duration) {
      setTimeout(this.close.bind(this), this.duration);
    }
  }

  /**
   * Removes the notice from the DOM
   * @method
   */
  close() {
    this.element.style.opacity = 0;
    setTimeout(function() {
      this.element.remove();
      if (this.container.children.length === 0) {
        this.container.remove();
      }
    }.bind(this), 400);
  }

  /**
   * Converts the instance to an empty object
   * @method
   */
  delete() {
    this.close();
    setTimeout(function() {
      Object.setPrototypeOf(this, null);
      Object.keys(this).map((property) => {
        delete this[property];
      });
    }.bind(this), 500);
  }

  /**
   * Displays the notice
   * @method
   */
  show() {
    this.element.style.opacity = 1;
    this.container = this._setContainer();
    this._insertElement();
    if (this.duration) {
      setTimeout(this.close.bind(this), this.duration);
    }
  }

  /**
   * Stacks the element in the container
   * @method
   */
  _insertElement() {
    if (this.stack === 'last') {
      if (this.position.y === 'bottom') {
        this.container.insertBefore(this.element, this.container.firstChild);
      } else {
        this.container.appendChild(this.element);
      }
    } else {
      if (this.position.y === 'bottom') {
        this.container.appendChild(this.element);
      } else {
        this.container.insertBefore(this.element, this.container.firstChild);
      }
    }
  }

    /**
     * Defines the HTML container or creates it if not exist
     * @method
     * @return [HTMLElement] - Container of the element
     */
    _setContainer() {
      let cont = document.getElementById('enotice-' + this.position.y + '-' + this.position.x);
      if (cont === null) {
        cont = document.createElement('div');
        cont.id = 'enotice-' + this.position.y + '-' + this.position.x;
        cont.classList.add('en-container');
        cont.classList.add('en-' + this.position.y);
        cont.classList.add('en-' + this.position.x);
        document.body.appendChild(cont);
      }
      return cont;
    }

  /**
   * Creates the HTML element of the notice
   * @method
   * @return [HTMLElement] - Notice element
   */
  _setElement() {
    const elem = document.createElement('div');
    const btn = document.createElement('span');
    const txt = document.createTextNode(this.message);
    btn.innerHTML = '&times';
    btn.addEventListener('click', this.close.bind(this));
    elem.appendChild(btn);
    elem.appendChild(txt);
    elem.classList.add('en-element');
    elem.classList.add('en-' + this.color);
    return elem;
  }
}
