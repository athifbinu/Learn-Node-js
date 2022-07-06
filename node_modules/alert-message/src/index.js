"use strict";
exports.__esModule = true;
var warnImg = require("./images/warn.png"), errorImg = require("./images/error.png"), successImg = require("./images/success.png"), IMG = {
    warn: warnImg,
    error: errorImg,
    success: successImg
};
var Message = /** @class */ (function () {
    function Message() {
        this.fadeTime = 2500;
        this.messageContainer = null;
    }
    Message.prototype.renderDom = function (type, args) {
        var _this = this;
        if (!this.messageContainer) {
            this.messageContainer = document.createElement("div");
            this.messageContainer.className = "r-message-container";
        }
        var divOuter = document.createElement("div"), div = document.createElement("div"), img = document.createElement("img"), span = document.createElement("span");
        div.className = "r-alert";
        img.className = "r-alert-img";
        if (IMG[type]) {
            img.src = IMG[type];
        }
        else {
            img.src = IMG.warn;
        }
        span.innerText = args.txt;
        span.className = "r-warn-txt";
        div.appendChild(img);
        divOuter.className = "r-alert-outer";
        div.appendChild(span);
        divOuter.appendChild(div);
        this.messageContainer.appendChild(divOuter);
        document.querySelector("body").appendChild(this.messageContainer);
        setTimeout(function () {
            _this.messageContainer.removeChild(divOuter);
        }, args.time || this.fadeTime);
    };
    /**
     *
     * @param args - {txt: "", time: 2500}
     */
    Message.prototype.warn = function (args) {
        if (args === void 0) { args = { txt: "", time: 2500 }; }
        this.renderDom("warn", args);
    };
    Message.prototype.error = function (args) {
        if (args === void 0) { args = { txt: "", time: 2500 }; }
        this.renderDom("error", args);
    };
    Message.prototype.success = function (args) {
        if (args === void 0) { args = { txt: "", time: 2500 }; }
        this.renderDom("success", args);
    };
    return Message;
}());
exports.Message = Message;
exports["default"] = new Message();
