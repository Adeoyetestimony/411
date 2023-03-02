'use strict';

/**
 * hey service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hey.hey');
