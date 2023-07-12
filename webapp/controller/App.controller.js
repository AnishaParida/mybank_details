sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("mybankdetails.controller.App", {
            onInit: function () {
                // this._setGlobalModel();
                
                this._setGlobalLanguage();

                let oProfileModel = new sap.ui.model.json.JSONModel(
                    {profile: sap.ui.require.toUrl("mybankdetails/images/profile.jpg")}
                );
                this.getView().setModel(oProfileModel);
                
            },

            onOpenBankDetails: function () {
                //create dialog
                if (!this.moreBankDetails) {
                    this.moreBankDetails = this.loadFragment(
                        { name: "mybankdetails.view.fragments.MoreDetails" }
                    );
                }
                this.moreBankDetails.then(
                    function (oDialog) {
                        oDialog.open();
                    });
            },

            onCloseBankDetails: function () {
                this.byId("moreBankDetails").close();
            },
            // _setGlobalModel: function(){
            //     let oModel = this.getOwnerComponent().getModel("oBankDetails");
            //     this.getView().setModel(oModel);
            // },
            _setGlobalLanguage: function(){
                var appLang;
                if (navigator.language == "es")
                    appLang = "i18n_es";
                else if (navigator.language == "en")
                    appLang = "i18n";
                else
                    appLang = "i18n";
                var i18nModel = this.getOwnerComponent().getModel(appLang)
                this.getOwnerComponent().setModel(i18nModel, "i18n")
            }
        });
    });
