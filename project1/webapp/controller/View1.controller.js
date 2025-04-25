sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {
            // 초기 데이터 모델 설정
            var oModel = new JSONModel({
                customers: [
                    { key: "1", text: "스터디스 시스템사업부" }
                ],
                creators: [
                    { key: "1", text: "김 현민" }
                ],
                projects: [
                    { key: "1", text: "스터디스 2024 시스템 AMS" }
                ],
                assignees: [
                    { key: "1", text: "박 현정" }
                ],
                tickets: [
                    {
                        selected: false,
                        ticketId: "T0000176",
                        createDate: "2025/04/09",
                        creator: "김 현민",
                        projectName: "스터디스 CRM 시스템 구축 AMS",
                        status: "신규 계정 생성 요청",
                        ticketStatus: "Re-Assigned",
                        assignee: "정 혁목",
                        type: "L2"
                    },
                    {
                        selected: false,
                        ticketId: "T0000175",
                        createDate: "2025/04/09",
                        creator: "김 현민",
                        projectName: "스터디스 2024 시스템 AMS",
                        status: "유지 관리 번경 요청",
                        ticketStatus: "Waiting Confirm",
                        assignee: "박 현정",
                        type: "L1"
                    }
                    // 추가 데이터는 여기에 계속 추가
                ]
            });
            this.getView().setModel(oModel);
        },

        onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("RouteNavPage");
        },

        onSearch: function () {
            // 검색 로직 구현
            MessageToast.show("검색 기능이 구현될 예정입니다.");
        },

        onTicketPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oBindingContext = oItem.getBindingContext();
            var sTicketId = oBindingContext.getProperty("ticketId");
            MessageToast.show("선택된 티켓: " + sTicketId);
        },

        onDetailPress: function (oEvent) {
            // 상세 보기 버튼 클릭 이벤트 처리
            var oButton = oEvent.getSource();
            var oItem = oButton.getParent();
            var oBindingContext = oItem.getBindingContext();
            var sTicketId = oBindingContext.getProperty("ticketId");
            MessageToast.show("상세 보기: " + sTicketId);
            // 여기에 상세 페이지로 이동하는 로직 추가
        }
    });
});
