function move(obj,target,attr,speed,callback){
    clearInterval(obj.timer);
    var current=parseInt(getStyle(obj,attr));//得到获取对象目标样式的int值
    if (current>target){
        speed=-speed;
    }
    obj.timer=setInterval(function (){
        var oldValue=parseInt(getStyle(obj,attr));
        var newValue=oldValue+speed;
        if ((newValue>target && speed>0) || (newValue<target && speed<0)){
            newValue=target;
        }
        obj.style[attr]=newValue+"px";
        if (newValue == target){
            clearInterval(obj.timer);
            callback && callback();
        }
    },30)
}
function getStyle(obj,name){
    return getComputedStyle(obj,null)[name];
}