var app=angular.module('sampleApp', ['ngRoute','btford.socket-io','ngMaterial','material.svgAssetsCache']);

app.factory('socket', function (socketFactory) {
  return socketFactory();
});