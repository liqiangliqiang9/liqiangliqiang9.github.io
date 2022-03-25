/**
 *只能替换一次 
 **/
String.prototype.formatOnce = function(args) {
    var result = this;
    if (arguments.length < 1) {
        return result;
    }
    var data = arguments;        //如果模板参数是数组
    if (arguments.length == 1 && typeof (args) == "object") {
        //如果模板参数是对象
        data = args;
    }
    for (var key in data) {
        var value = data[key];
        if (undefined != value) {
            result = result.replace("{" + key + "}", value);
        }
    }
    return result;
}
/**
 *全局搜索替换所有
 **/
String.prototype.format = function (args) {
    var result = this;
    if (arguments.length < 1) {
        return result;
    }
    return this.replace(/\{(\w+)\}/g, function (s, i) {
        return args[i];
    });
};
String.prototype.endWith = function(s) {
    if (s == null || s == "" || this.length == 0 || s.length > this.length) return false;
    if (this.substring(this.length - s.length) == s) return true;
    else return false;
    return true;
}
String.prototype.startWith = function(s) {
    if (s == null || s == "" || this.length == 0 || s.length > this.length) return false;
    if (this.substr(0, s.length) == s) return true;
    else return false;
    return true;
}
/** 首字母大写*/
String.prototype.firstUpper = function() {
    if (this.length == 0) return this;
    return this.replace(/^\S/, s => s.toUpperCase());
    return true;
}

/**
 * 判断是否为空，如果为空返回ture，不为空返回false
 * */
 function isEmpty(a){
    if(a == "" || a == null || a == undefined){ 
        return true;
    }else{
        return false;
    }
 }