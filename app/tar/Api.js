// **********************************************************************
// Parsed By TarsParser(1.2.0), Generated By tars2node(20200315)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "Api.tars" by Server Mode
// **********************************************************************

/* eslint-disable */

"use strict";

var assert    = require("assert");
var TarsStream = require("@tars/stream");
var TarsError  = require("@tars/rpc").error;

var _hasOwnProperty = Object.prototype.hasOwnProperty;

var Api = Api || {};
module.exports.Api = Api;

Api.User = function() {
    this.id = 0;
    this.userName = "";
    this.corp = "";
    this._classname = "Api.User";
};
Api.User._classname = "Api.User";
Api.User._write = function (os, tag, value) { os.writeStruct(tag, value); };
Api.User._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
Api.User._readFrom = function (is) {
    var tmp = new Api.User;
    tmp.id = is.readInt32(0, true, 0);
    tmp.userName = is.readString(1, true, "");
    tmp.corp = is.readString(2, false, "");
    return tmp;
};
Api.User.prototype._writeTo = function (os) {
    os.writeInt32(0, this.id);
    os.writeString(1, this.userName);
    os.writeString(2, this.corp);
};
Api.User.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
Api.User.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
Api.User.prototype.toObject = function() { 
    return {
        "id" : this.id,
        "userName" : this.userName,
        "corp" : this.corp
    };
};
Api.User.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "id") && (this.id = json.id);
    _hasOwnProperty.call(json, "userName") && (this.userName = json.userName);
    _hasOwnProperty.call(json, "corp") && (this.corp = json.corp);
    return this;
};
Api.User.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
Api.User.new = function () {
    return new Api.User();
};
Api.User.create = function (is) {
    return Api.User._readFrom(is);
};

Api.Search = function() {
    this.userName = "";
    this._classname = "Api.Search";
};
Api.Search._classname = "Api.Search";
Api.Search._write = function (os, tag, value) { os.writeStruct(tag, value); };
Api.Search._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
Api.Search._readFrom = function (is) {
    var tmp = new Api.Search;
    tmp.userName = is.readString(0, false, "");
    return tmp;
};
Api.Search.prototype._writeTo = function (os) {
    os.writeString(0, this.userName);
};
Api.Search.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
Api.Search.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
Api.Search.prototype.toObject = function() { 
    return {
        "userName" : this.userName
    };
};
Api.Search.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "userName") && (this.userName = json.userName);
    return this;
};
Api.Search.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
Api.Search.new = function () {
    return new Api.Search();
};
Api.Search.create = function (is) {
    return Api.Search._readFrom(is);
};

Api.ServiceImp = function () { 
    this._name   = undefined;
    this._worker = undefined;
};

Api.ServiceImp.prototype.initialize = function () {};

Api.ServiceImp.prototype.onDispatch = function (current, funcName, binBuffer) { 
    if ("__" + funcName in this) {
        return this["__" + funcName](current, binBuffer);
    } else {
        return TarsError.SERVER.FUNC_NOT_FOUND;
    }
};

var __Api_Service$tars_ping$RE = function (_ret) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeInt32("", _ret);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeInt32(0, _ret);

        this.doResponse(os.getBinBuffer());
    }
};

Api.ServiceImp.prototype.__tars_ping = function (current) {
    __Api_Service$tars_ping$RE.call(current, 0);

    return TarsError.SUCCESS;
};

Api.ServiceImp.prototype.getName = function () {
    assert.fail("getName function not implemented");
};

var __Api_Service$getName$RE = function (_ret) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeString("", _ret);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeString(0, _ret);

        this.doResponse(os.getBinBuffer());
    }
};

Api.ServiceImp.prototype.__getName = function (current, binBuffer) {
    var id = null;

    if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = current.getRequestVersion();
        tup.decode(binBuffer);
        id = tup.readInt32("id");
    } else {
        var is = new TarsStream.TarsInputStream(binBuffer);
        id = is.readInt32(1, true, 0);
    }

    current.sendResponse = __Api_Service$getName$RE;

    this.getName(current, id);

    return TarsError.SUCCESS;
};

Api.ServiceImp.prototype.findMapOfUser = function () {
    assert.fail("findMapOfUser function not implemented");
};

var __Api_Service$findMapOfUser$RE = function (_ret) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeMap("", _ret);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeMap(0, _ret);

        this.doResponse(os.getBinBuffer());
    }
};

Api.ServiceImp.prototype.__findMapOfUser = function (current, binBuffer) {
    var name = null;

    if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = current.getRequestVersion();
        tup.decode(binBuffer);
        name = tup.readString("name");
    } else {
        var is = new TarsStream.TarsInputStream(binBuffer);
        name = is.readString(1, true, "");
    }

    current.sendResponse = __Api_Service$findMapOfUser$RE;

    this.findMapOfUser(current, name);

    return TarsError.SUCCESS;
};

Api.ServiceImp.prototype.getUserById = function () {
    assert.fail("getUserById function not implemented");
};

var __Api_Service$getUserById$RE = function (_ret) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeStruct("", _ret);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeStruct(0, _ret);

        this.doResponse(os.getBinBuffer());
    }
};

Api.ServiceImp.prototype.__getUserById = function (current, binBuffer) {
    var id = null;

    if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = current.getRequestVersion();
        tup.decode(binBuffer);
        id = tup.readInt32("id");
    } else {
        var is = new TarsStream.TarsInputStream(binBuffer);
        id = is.readInt32(1, true, 0);
    }

    current.sendResponse = __Api_Service$getUserById$RE;

    this.getUserById(current, id);

    return TarsError.SUCCESS;
};

Api.ServiceImp.prototype.findUsers = function () {
    assert.fail("findUsers function not implemented");
};

var __Api_Service$findUsers$RE = function (_ret) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeList("", _ret);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeList(0, _ret);

        this.doResponse(os.getBinBuffer());
    }
};

Api.ServiceImp.prototype.__findUsers = function (current, binBuffer) {
    var s = null;

    if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = current.getRequestVersion();
        tup.decode(binBuffer);
        s = tup.readStruct("s", Api.Search);
    } else {
        var is = new TarsStream.TarsInputStream(binBuffer);
        s = is.readStruct(1, true, Api.Search);
    }

    current.sendResponse = __Api_Service$findUsers$RE;

    this.findUsers(current, s);

    return TarsError.SUCCESS;
};





