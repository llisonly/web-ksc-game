window.KSC = window.KSC || {};

var utils = {
    /**
     * 请求api
     * @param url 请求地址
     * @param type 请求类型
     * @param dataGet get数据
     * @param dataPost post数据
     * @returns {Promise}
     */
    api: function (url, type, dataGet, dataPost){
        var deferred = $.Deferred();

        if(dataGet){
            url = url + (~url.indexOf('?') ? '&' : '?') + $.param(dataGet);
        }

        var ajax = $.ajax({
            url: url,
            type: type || 'get',
            dataType: 'json',
            data: dataPost,
            cache: false
        }).done(function(res){
            if (res && res.status == KSC.utils.ERR_CODE.SUCCESS){
                deferred.resolve(res)
            } else {
                deferred.reject(res);
            }
        }).fail(function(e){
            deferred.reject(e);
        });

        var ret = deferred.promise();
        ret.abort = ajax.abort;
        return ret;
    },
    ERR_CODE:{
        SUCCESS: 200
    }
};

$.extend(KSC, utils);
