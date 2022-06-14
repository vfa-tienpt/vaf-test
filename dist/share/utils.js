"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePasswords = void 0;
const bcrypt = require("bcrypt");
const comparePasswords = async (userPassword, currentPassword) => {
    return await bcrypt.compare(currentPassword, userPassword);
};
exports.comparePasswords = comparePasswords;
//# sourceMappingURL=utils.js.map