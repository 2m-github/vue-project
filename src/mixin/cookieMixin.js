export default {
    name:'cookie',
    methods:{
        setCookie(name, value){
            //取出当前日期，加上30天，得出有效截止日期
            var exp = new Date();
            exp.setTime(exp.getTime()+30*24*60*60*1000);    
    
            document.cookie=name +"="+escape(value) +";expries     ="+exp.toGMTString();      
            console.log(document.cookie);
          },
          getCookie(name){
            var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
              if(arr=document.cookie.match(reg))
                  return unescape(arr[2]);
              else
                  return null;
          }
    }
}