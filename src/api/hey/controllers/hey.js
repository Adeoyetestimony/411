'use strict';

/**
 * hey controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hey.hey');
