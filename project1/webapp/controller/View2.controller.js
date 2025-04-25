sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.View2", {
        onInit: function () {
        },

        onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("RouteNavPage");
        }
    });
}); 