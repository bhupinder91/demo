sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Workspace.Assignment1.controller.Viewas2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Workspace.Assignment1.view.Viewas2
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter.getRoute("View2").attachPatternMatched(this.getViewData, this);

			//thryujy

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Workspace.Assignment1.view.Viewas2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Workspace.Assignment1.view.Viewas2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Workspace.Assignment1.view.Viewas2
		 */
		//	onExit: function() {
		//
		//	}
		getViewData: function (e) {

			var data1 = e.getParameter("arguments").ist;

			//	var oTable = this.getView().byId("Table");
			//	oTable.setModel(data);
			//	var data1 = e.getParameter("arguments").data1;
			//	var data2 = e.getParameter("arguments").data2;
			this.getView().byId("sup1").setValue(data1);
			//	this.getView().byId("table").setmodel(data1);
			//	this.getView().byId("sup3").setValue(data2);

		}

	});

});