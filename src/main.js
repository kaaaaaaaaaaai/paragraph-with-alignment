'use strict';

/**
 * Paragraph Plugin
 *
 * Creates DIV tag and adds content into this tag
 */

module.exports = function () {
  /**
   * Load module package info
   */
  let pkg = require('../package');

  /**
   * Create variable for tag element
   */
  let element;

  /**
   * Wrapper for render function
   *
   * @param {object} data      — plugin json data to be converted HTML element
   * @return {object} element  — DOM element
   */
  let render = (data) => {
    let render_ = require('./js/render');

    element = render_(data);
    return element;
  };

  /**
   * Wrapper for validate function
   */
  let validate = () => {
    let validate_ = require('./js/validate');

    return validate_;
  };

  /**
   * Wrapper for save function
   *
   * @return {object} jsonData — json block data
   */
  let save = () => {
    let save_ = require('./js/save'),
        jsonData = save_(element.innerHTML);

    return jsonData;
  };

  /**
   * Returns object with public functions
   */
  return {
    name: pkg.exportModuleName,
    version: pkg.version,
    render,
    validate,
    save
  };
};
