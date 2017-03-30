"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const unirest = require("unirest");
function getTokenAsync(authreq) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            console.log("retreiving access token.....");
            var req = unirest("POST", authreq.commonAuthority);
            req.headers({
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded"
            });
            delete authreq.commonAuthority;
            if (!authreq.grant_type)
                authreq.grant_type = 'password';
            req.form(authreq);
            req.end((res) => {
                if (res.error) {
                    reject(res.error);
                    return;
                }
                try {
                    resolve(res.body.access_token);
                    console.log("Access token reteived");
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getTokenAsync;
//# sourceMappingURL=index.js.map