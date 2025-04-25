sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.NavPage", {
        onInit: function () {
        },

        onNav1Press: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView1");
        },

        onNav2Press: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        },

        onNav3Press: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView3");
        },

        onNav4Press: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView4");
        },

        onNav5Press: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView5");
        },

        onNav6Press: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView6");
        }
    });
}); 