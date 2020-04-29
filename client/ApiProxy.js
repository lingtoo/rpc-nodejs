// **********************************************************************
// Parsed By TarsParser(1.2.0), Generated By tars2node(20200315)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "Api.tars" by Client Mode
// **********************************************************************

/* eslint-disable */

"use strict";

var assert    = require("assert");
var TarsStream = require("@tars/stream");
var TarsError  = require("@tars/rpc").error;

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _makeError = function (data, message, type) {
    var error = new Error(message || "");
    error.request = data.request;
    error.response = {
        "costtime" : data.request.costtime
    };
    if (type === TarsError.CLIENT.DECODE_ERROR) {
        error.name = "DECODE_ERROR";
        error.response.error = {
            "code" : type,
            "message" : message
        };
    } else {
        error.name = "RPC_ERROR";
        error.response.error = data.error;
    }
    return error;
};

var Api = Api || {};
module.exports.Api = Api;

Api.ServiceProxy = function () {
    this._name    = undefined;
    this._worker  = undefined;
};

Api.ServiceProxy.prototype.setTimeout = function (iTimeout) {
    this._worker.timeout = iTimeout;
};

Api.ServiceProxy.prototype.getTimeout = function () {
    return this._worker.timeout;
};

Api.ServiceProxy.prototype.setVersion = function (iVersion) {
    this._worker.version = iVersion;
};

Api.ServiceProxy.prototype.getVersion = function () {
    return this._worker.version;
};

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

var __Api_Service$findMapOfUser$IF = {
    "name" : "findMapOfUser",
    "return" : "map(string, Api.User)",
    "arguments" : [{
        "name" : "name",
        "class" : "string",
        "direction" : "in"
    }]
};

var __Api_Service$findMapOfUser$IE = function (name) {
    var os = new TarsStream.TarsOutputStream();
    os.writeString(1, name);
    return os.getBinBuffer();
};

var __Api_Service$findMapOfUser$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readMap(0, true, TarsStream.Map(TarsStream.String, Api.User))
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __Api_Service$findMapOfUser$PE = function (name, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeString("name", name);
    return tup;
};

var __Api_Service$findMapOfUser$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readMap("", TarsStream.Map(TarsStream.String, Api.User), new TarsStream.Map(TarsStream.String, Api.User))
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __Api_Service$findMapOfUser$ER = function (data) {
    throw _makeError(data, "Call Service::findMapOfUser failed");
};

Api.ServiceProxy.prototype.findMapOfUser = function (name) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("findMapOfUser", __Api_Service$findMapOfUser$PE(name, version), arguments[arguments.length - 1], __Api_Service$findMapOfUser$IF).then(__Api_Service$findMapOfUser$PD, __Api_Service$findMapOfUser$ER);
    } else {
        return this._worker.tars_invoke("findMapOfUser", __Api_Service$findMapOfUser$IE(name), arguments[arguments.length - 1], __Api_Service$findMapOfUser$IF).then(__Api_Service$findMapOfUser$ID, __Api_Service$findMapOfUser$ER);
    }
};
Api.ServiceProxy.findMapOfUser = __Api_Service$findMapOfUser$IF;

var __Api_Service$findUsers$IF = {
    "name" : "findUsers",
    "return" : "list(Api.User)",
    "arguments" : [{
        "name" : "s",
        "class" : "Api.Search",
        "direction" : "in"
    }]
};

var __Api_Service$findUsers$IE = function (s) {
    var os = new TarsStream.TarsOutputStream();
    os.writeStruct(1, s);
    return os.getBinBuffer();
};

var __Api_Service$findUsers$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readList(0, true, TarsStream.List(Api.User))
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __Api_Service$findUsers$PE = function (s, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeStruct("s", s);
    return tup;
};

var __Api_Service$findUsers$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readList("", TarsStream.List(Api.User), new TarsStream.List(Api.User))
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __Api_Service$findUsers$ER = function (data) {
    throw _makeError(data, "Call Service::findUsers failed");
};

Api.ServiceProxy.prototype.findUsers = function (s) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("findUsers", __Api_Service$findUsers$PE(s, version), arguments[arguments.length - 1], __Api_Service$findUsers$IF).then(__Api_Service$findUsers$PD, __Api_Service$findUsers$ER);
    } else {
        return this._worker.tars_invoke("findUsers", __Api_Service$findUsers$IE(s), arguments[arguments.length - 1], __Api_Service$findUsers$IF).then(__Api_Service$findUsers$ID, __Api_Service$findUsers$ER);
    }
};
Api.ServiceProxy.findUsers = __Api_Service$findUsers$IF;

var __Api_Service$getName$IF = {
    "name" : "getName",
    "return" : "string",
    "arguments" : [{
        "name" : "id",
        "class" : "int32",
        "direction" : "in"
    }]
};

var __Api_Service$getName$IE = function (id) {
    var os = new TarsStream.TarsOutputStream();
    os.writeInt32(1, id);
    return os.getBinBuffer();
};

var __Api_Service$getName$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readString(0, true, "")
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __Api_Service$getName$PE = function (id, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeInt32("id", id);
    return tup;
};

var __Api_Service$getName$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readString("", "")
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __Api_Service$getName$ER = function (data) {
    throw _makeError(data, "Call Service::getName failed");
};

Api.ServiceProxy.prototype.getName = function (id) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("getName", __Api_Service$getName$PE(id, version), arguments[arguments.length - 1], __Api_Service$getName$IF).then(__Api_Service$getName$PD, __Api_Service$getName$ER);
    } else {
        return this._worker.tars_invoke("getName", __Api_Service$getName$IE(id), arguments[arguments.length - 1], __Api_Service$getName$IF).then(__Api_Service$getName$ID, __Api_Service$getName$ER);
    }
};
Api.ServiceProxy.getName = __Api_Service$getName$IF;

var __Api_Service$getUserById$IF = {
    "name" : "getUserById",
    "return" : "Api.User",
    "arguments" : [{
        "name" : "id",
        "class" : "int32",
        "direction" : "in"
    }]
};

var __Api_Service$getUserById$IE = function (id) {
    var os = new TarsStream.TarsOutputStream();
    os.writeInt32(1, id);
    return os.getBinBuffer();
};

var __Api_Service$getUserById$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readStruct(0, true, Api.User)
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __Api_Service$getUserById$PE = function (id, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeInt32("id", id);
    return tup;
};

var __Api_Service$getUserById$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readStruct("", Api.User, new Api.User)
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __Api_Service$getUserById$ER = function (data) {
    throw _makeError(data, "Call Service::getUserById failed");
};

Api.ServiceProxy.prototype.getUserById = function (id) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("getUserById", __Api_Service$getUserById$PE(id, version), arguments[arguments.length - 1], __Api_Service$getUserById$IF).then(__Api_Service$getUserById$PD, __Api_Service$getUserById$ER);
    } else {
        return this._worker.tars_invoke("getUserById", __Api_Service$getUserById$IE(id), arguments[arguments.length - 1], __Api_Service$getUserById$IF).then(__Api_Service$getUserById$ID, __Api_Service$getUserById$ER);
    }
};
Api.ServiceProxy.getUserById = __Api_Service$getUserById$IF;


