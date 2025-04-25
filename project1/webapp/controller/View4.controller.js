sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.View4", {
        onInit: function () {
            // HTML5/CSS3 implementation doesn't need initialization
        },

        onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("RouteNavPage");
        }
    });
}); 