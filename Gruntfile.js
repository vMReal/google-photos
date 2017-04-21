/**
 * Gruntfile
 */

includeAll = require('include-all');

module.exports = function(grunt) {

  var taskConfigurations = loadTasks('./tasks/config');
  var	registerDefinitions = loadTasks('./tasks/register');

  (function init() {
    invokeConfigFn(taskConfigurations);
    invokeConfigFn(registerDefinitions);
  })();

  function loadTasks(relPath) {
    return includeAll({
        dirname: require('path').resolve(__dirname, relPath),
        filter: /(.+)\.js$/
      }) || {};
  }

  function invokeConfigFn(tasks) {
    for (var taskName in tasks) {
      if (tasks.hasOwnProperty(taskName)) {
        tasks[taskName](grunt);
      }
    }
  }
};
