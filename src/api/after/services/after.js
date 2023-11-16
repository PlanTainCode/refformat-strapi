'use strict';

/**
 * after service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::after.after');
