sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/m/MessageToast"
], function (Controller) {
	"use strict";

	return Controller.extend("Workspace.Assignment1.controller.Viewas1", {
		onInit: function () {
			

			//this.array = [];
			//	var odataModel = new sap.ui.model.odata.ODataModel("/ES5/sap/opu/odata/iwbep/GWSAMPLE_BASIC/"); 
			//	var localJson = new sap.ui.model.json.JSONModel(); 
			var localJson = sap.ui.getCore().getModel("localJsonG");
			var oTable = this.getView().byId("ProductTable");
			oTable.setModel(localJson);
			//	console.log(localJson);

			//		odataModel.read("/ProductSet", {
			//
			//							async: false,
			//							success: function (
			//								data,
			//								response) {
			//								//	console.log(data.results);
			//								localJson.setData(data.results);
			//							
			//								sap.ui.getCore().setModel(localJson,"localJson");
			//								oTable.setModel(localJson);
			/*	for (var j = 0; j <= data.results.length - 1; j++) {}*/

			////				},
			//			error: function (
			//				error) {
			//
			//					sap.m.MessageBox.error(error.response.body);
			//				}

			//			});

			//	this.jsonlocaldataModel = new sap.ui.model.json.JSONModel();
			//this.jsonlocaldataModel.loadData("./model/product.json");
			//	this.jsonlocaldataModel.loadData("/ES5/sap/opu/odata/iwbep/GWSAMPLE_BASIC/")
			//	this.getView().byId("ProductTable").setModel(localJson);

		},
		onSearchfilter: function (event) {
			var aFilters = [];
			var sQuery = event.getSource().getValue().byId(this.ProductID);
			if (sQuery && sQuery.length > 0) {
				var filter = new sap.ui.model.Filter("ProductID", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}
			var list = this.getView().byId("ProductTable");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},
		onSearch: function (event) {

			// add filter for search
			var aFilters = [];
			var sQuery = event.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new sap.ui.model.Filter("ProductID", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("ProductTable");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");

		},
		EditProduct: function () {

			var oTable = this.getView().byId("ProductTable");

			var table1Rows = oTable.getItems();
			//console(table1Rows.length);
			for (var i = 0; i < table1Rows.length; i++) {

				var table1RowCells = table1Rows[i].getCells();

				table1RowCells[0].setEditable(true);
				table1RowCells[1].setEditable(true);
				table1RowCells[2].setEditable(true);
				table1RowCells[3].setEditable(true);
				table1RowCells[4].setEditable(true);

			}

			this.getView().byId("save").setVisible(true);
			this.getView().byId("edit").setVisible(false);

		},
		saveProduct: function () {

			var oTable = this.getView().byId("ProductTable");

			var table1Rows = oTable.getItems();

			for (var i = 0; i < table1Rows.length; i++) {

				var table1RowCells = table1Rows[i].getCells();

				table1RowCells[0].setEditable(false);
				table1RowCells[1].setEditable(false);
				table1RowCells[2].setEditable(false);
				table1RowCells[3].setEditable(false);
				table1RowCells[4].setEditable(false);
				table1RowCells[5].setEditable(false);

			}

			this.getView().byId("save").setVisible(false);
			this.getView().byId("edit").setVisible(true);

		},
		deleteProduct: function () {

			var oTable = this.getView().byId("ProductTable");

			var table1Rows = oTable.getItems();

			for (var i = 0; i < table1Rows.length; i++) {

				var table1RowCells = table1Rows[i].getCells();

				table1RowCells[0].setValue("");
				table1RowCells[1].setValue("");
				table1RowCells[2].setValue("");
				table1RowCells[3].setEditable(false);
				table1RowCells[4].setEditable(false);
				table1RowCells[5].setValue(" ");

			}

			this.getView().byId("save").setVisible(false);
			this.getView().byId("edit").setVisible(true);

		},
		getAddDialog: function () {

			var oView = this.getView();

			if (!this.oDialog) {

				this.oDialog = sap.ui.xmlfragment("idDialogAddfrag", "Workspace.Assignment1.fragment.dialogAddproduct", this);

				oView.addDependent(this.oDialog);
			}
			return this.oDialog;

		},
		addProduct: function () {

			this.getAddDialog().open();

		},
		onDialogAddClose: function () {

			this.getAddDialog().close();

		},
		onDialogAdd: function () {
			var prodid = sap.ui.getCore().byId("idDialogAddfrag--dialogProductId").getValue();
			var prodname = sap.ui.getCore().byId("idDialogAddfrag--dialogProductName").getValue();
			var proddesc = sap.ui.getCore().byId("idDialogAddfrag--dialogProductDesc").getValue();
			if (prodid !== "" && prodname !== "" && proddesc !== "") {
				var tableModel = this.getView().byId("ProductTable").getModel();
				var tableData = tableModel.getData();
				tableData.unshift({
					"ProductID": prodid,
					"Name": prodname,
					"Category": proddesc

				});

				tableModel.setData(tableData);

				this.getView().byId("ProductTable").setModel(tableModel);

				this.onDialogAddClose();
			}
		},
		onClickRow: function (e) {

			//	var data = e.getSource().getBindingContext().getModel().getData();

			var data = e.getSource().getBindingContext().getProperty();
			//	var datatest = e.getSource().getBindingContext().getSelectedItems();
			//	var data1 = e.getSource().getBindingContext().getModel().getData();
			//	var data2 = e.getSource().getBindingContext().getModel().getData();
			var ist = data.ProductID;
			var second = data.Category;

			var obj = {
				ist,
				second
			}
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter
				.navTo(
					"View2", {

						ist,second

					}
				);

		},
		onDeleteBiderRow: function () {

		}

	});
});