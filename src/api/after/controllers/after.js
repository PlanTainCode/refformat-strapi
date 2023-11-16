'use strict';

/**
 * after controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::after.after');
