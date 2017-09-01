'use strict';

/**
 * Method to render HTML block from JSON
 *
 * @param data
 */

module.exports = function (data) {
  let element = document.createElement('DIV');

  element.classList.add('ce-paragraph');

  if (data && data.text) {
    element.innerHTML = data.text;
  };

  element.contentEditable = true;

  return element;
};
