sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"Workspace/Assignment1/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("Workspace.Assignment1.Component", {

		metadata: {
			manifest: "json"
		},
 
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();
		
	var odataModel = new sap.ui.model.odata.ODataModel("/ES5/sap/opu/odata/iwbep/GWSAMPLE_BASIC/");
		var localJsonG = new sap.ui.model.json.JSONModel();
			
			odataModel.read("/ProductSet", {

				async: false,
				success: function (
					data,
					response) {
					//	console.log(data.results);
					localJsonG.setData(data.results);
					
					sap.ui.getCore().setModel(localJsonG,"localJsonG");
				//	oTable.setModel(localJson);
					/*	for (var j = 0; j <= data.results.length - 1; j++) {}*/

				},
				error: function (
					error) {

					sap.m.MessageBox.error(error.response.body);
				}

			});
			

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});