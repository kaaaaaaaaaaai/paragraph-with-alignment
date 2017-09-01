'use strict';

/**
 * Check output data for validity.
 * Should be defined by developer
 *
 * @param output
 */

module.exports = function (output) {
  if (output.text === '')
    return false;

  return true;
};
