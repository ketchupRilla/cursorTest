sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.View3", {
        onInit: function () {
            // Initialize the model with sample data
            var oModel = new JSONModel({
                salesOrders: [
                    {
                        DocumentNumber: "Joiega",
                        Company: "Erie, PL9 8AT",
                        City: "Wilma Kopp",
                        ContactPerson: "02/26/2024",
                        PostingDate: "19,503.26",
                        Amount: "19503.26",
                        Currency: "EUR"
                    },
                    {
                        DocumentNumber: "Joiega",
                        Company: "Erie, PL9 8AT",
                        City: "Wilma Kopp",
                        ContactPerson: "02/26/2024",
                        PostingDate: "19,503.26",
                        Amount: "19503.26",
                        Currency: "EUR"
                    },
                    {
                        DocumentNumber: "Joiega",
                        Company: "Erie, PL9 8AT",
                        City: "Wilma Kopp",
                        ContactPerson: "02/26/2024",
                        PostingDate: "19,503.26",
                        Amount: "19503.26",
                        Currency: "EUR"
                    },
                    {
                        DocumentNumber: "Joiega",
                        Company: "Erie, PL9 8AT",
                        City: "Wilma Kopp",
                        ContactPerson: "02/26/2024",
                        PostingDate: "19,503.26",
                        Amount: "19503.26",
                        Currency: "EUR"
                    },
                    {
                        DocumentNumber: "Joiega",
                        Company: "Erie, PL9 8AT",
                        City: "Wilma Kopp",
                        ContactPerson: "02/26/2024",
                        PostingDate: "19,503.26",
                        Amount: "19503.26",
                        Currency: "EUR"
                    },
                    {
                        DocumentNumber: "Joiega",
                        Company: "Erie, PL9 8AT",
                        City: "Wilma Kopp",
                        ContactPerson: "02/26/2024",
                        PostingDate: "19,503.26",
                        Amount: "19503.26",
                        Currency: "EUR"
                    }
                    // Add more sample data as needed
                ]
            });
            this.getView().setModel(oModel);
        },

        onSelectAll: function (oEvent) {
            var bSelected = oEvent.getParameter("selected");
            var oTable = this.byId("salesOrderTable");
            var aItems = oTable.getItems();
            
            aItems.forEach(function(oItem) {
                var oCheckBox = oItem.getCells()[0];
                oCheckBox.setSelected(bSelected);
            });
        },

        onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("RouteNavPage");
        }
    });
}); 