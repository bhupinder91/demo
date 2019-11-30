/*global QUnit*/

sap.ui.define([
	"Workspace/Assignment1/controller/Viewas1.controller"
], function (oController) {
	"use strict";

	QUnit.module("Viewas1 Controller");

	QUnit.test("I should test the Viewas1 controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});