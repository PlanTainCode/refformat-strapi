'use strict';

/**
 * first-block service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::first-block.first-block');
