function updata() {
var res = {};
var items = [];
items.push({
title:'该版本已停用，点击更新最新版',
desc:'请更新新规则',
url:'',
col_type: 'text_center_1'
});
res.data=items;
setHomeResult(res);
}
//列表与选集图片函数
function pictu() {
if(MY_URL.indexOf("pangniaozyw")!=-1||MY_URL.indexOf("leshizyw")!=-1||MY_URL.indexOf("9191zy")!=-1){
pic="https://tu.tianzuida.com/pic/"+pic;
}else if(MY_URL.indexOf("lby")!=-1){
pic.indexOf("http")!=-1?pic=pic:pic="http://cj.lby.pet/"+pic;
}else if(MY_URL.indexOf("xjiys")!=-1){
pic=pic.replace("img.maccms.com","xjiys.com");
}else if(MY_URL.indexOf("shidian")!=-1){
pic=pic.replace("img.maccms.com","shidian.vip");
}else if(MY_URL.indexOf("17kanju")!=-1){
pic=pic.replace("img.maccms.com","img.17kanju.com");
}else if(MY_URL.indexOf("potatost")!=-1){
pic=pic.replace("http://img.maccms.com//pic=","");
}
}
//
//列表解析函数
function listfun() {
try{
var list=parseDomForArray(html,"rss&&video");
for(var j = 0; j <list.length; j++){
var title = parseDomForHtml(list[j],"body&&name&&Text"); 
var url = parseDomForHtml(list[j],"body&&id&&Text"); 
var note = parseDomForHtml(list[j],"body&&note&&Text"); 
//var last = parseDomForHtml(list[j],"body&&last&&Text"); 
var typ = parseDomForHtml(list[j],"body&&type&&Text");
var pic = parseDomForHtml(list[j],"body&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");
eval(fetch('hiker://files/rules/zywcj.js'));
pictu();
/((http|https):\/\/.*?)\/.*?/.test(pic);
var imgRefer = "@Referer=" + RegExp.$1;
items.push({
//title:title+"状态："+note,
title:title,
pic_url:pic+imgRefer,
desc:note,
//desc:last+"类型："+typ,
url:arrr+"?ac=videolist&ids="+url+`@rule=js:eval(fetch('hiker://files/rules/zywcj.js'));SSEJ();`,
col_type:"movie_3"});
  }

} catch(e) {}
}
//二级规则
function TWEJ() {
var res = {};
var items = [];
var arrr = MY_URL.split("?")[0];
var pn = MY_URL.split("=")[2];
var html = getResCode();
//对第一页分类进行处理
if(pn=='1'){
try{
var rescod= request(arrr+"?ac=list");
var type = parseDomForHtml(rescod,"class&&Html").match(/<ty[\s]id[\s\S]*?<\/ty>/g);
for(var i=0;i<type.length;i++){
var title = parseDomForHtml(type[i],"body&&Text").split('{')[0];
var url = parseDomForHtml(type[i],"body&&ty&&id");

items.push({
title:title,
url:arrr+"?ac=videolist&pg=fypage&t="+url+`@rule=js:\
var arrr = MY_URL.split("?")[0];\
var html = getResCode();\
var res = {};var items = [];\
eval(fetch('hiker://files/rules/zywcj.js'));\
listfun();\
res.data=items;setHomeResult(res);`,
col_type:"text_3"});
  }
 
} catch(e) {}
items.push({
col_type: 'line'});
}
//结束第一页分类处理
//对列表处理开始
eval(fetch('hiker://files/rules/zywcj.js'));
listfun();
//对列表处理结束
res.data=items;
setHomeResult(res);
}
//搜索二级函数
function SSEJ() {
var res = {};
var items = [];
refreshX5WebView("");
items.push({
	title: '',
    desc:'240&&float',
    url:'',
    col_type: 'x5_webview_single'
});
var html = getResCode();
try{
var pic = parseDomForHtml(html,"rss&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");
eval(fetch('hiker://files/rules/zywcj.js'));
pictu();
var typ = parseDomForHtml(html,"body&&type&&Text");
items.push({
title: parseDomForHtml(html, "rss&&name&&Text")+"  剧情简介：",
desc:parseDomForHtml(html, "rss&&des&&Text"),
pic_url:pic,
url:pic,
col_type: 'pic_1'
});
var conts=parseDomForArray(html,'rss&&dl&&dd');
var url=parseDomForHtml(html,'rss&&id&&Text');
for(var i = 0;i<conts.length;i++){
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");
var flag=parseDomForHtml(conts[i], "body&&dd&&flag");
if(list!=null){
items.push({
title:flag=='qdyun'?flag+" 不显示播放的需刷新一次网页才能播":flag,
col_type: 'text_1'
});
var url={};
for(var j = 0; j<list.length; j++){
if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}
if(MY_URL.indexOf('leduozy')!=-1){url='https://api.leduotv.com/wp-api/glid.php?vid='+url}
if(flag=='ddyunp'){url='https://player.90mm.me/play.php?url='+url.replace(/第.*?集/g,'')}
if(flag=='qdyun'){url='http://qdy.zt6a.cn/parse?resources='+url}
if(flag=='ppayun'||flag=='gangtiexia'){url=url.substring(0,4)=='http'?url.replace('683d2433ee134cde8063d50506c1a1b1','3bb24322f78b47dfb8723c13d46d45ee'):'https://wy.mlkioiy.cn/api/GetDownUrlWy/3bb24322f78b47dfb8723c13d46d45ee/'+url}
if(flag=='tt10'){url='https://wy.mlkioiy.cn/api/ShowVideoMu/3bb24322f78b47dfb8723c13d46d45ee/'+url}
if(MY_URL.indexOf('yyid6080')!=-1||MY_URL.indexOf('p4kan')!=-1){if(flag=='xigua'||flag=='bjm3u8'){url='https://bbs.cnzv.cc/dp/mp4.php?url=http://list.47api.cn:90/qq/xigua.php?id='+url;}else if(flag=='qqkj'){url='https://bbs.cnzv.cc/dp/ck/ck.php?url=http://list.47api.cn:90/qq/mp4.php?id='+url;}else if(flag=='tudou'){url='https://sf1-ttcdn-tos.pstatp.com/obj/'+url+'#.mp4';}else{url=url};}
if(flag=='rrm3u8'){url='https://www.meiju11.com/ckplayerx/m3u8.php?url='+url}
if(flag=='niux'){url='https://www.shenma4480.com/jx.php?id='+url}
if(flag=='hkm3u8'){url='https://pl.tcc-interiors.com/hls/'+url}
if(flag=='xsp1'){url='https://jx.api.xhfhttc.cn/jx/?type=xsp1&url='+url}
if(flag=='bb'){url='https://jx.api.xhfhttc.cn/jx/?url='+url}
if(flag=='pll'){url='https://jx.baipiaozy.com/player/?url='+url}
if(flag=='msp'){url='https://titan.mgtv.com.bowang.tv/player/analysis.php?v='+url}
if(flag=='bilibili'){url='https://www.murl.us/?url='+url}
items.push({
title:list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0],
url:url.replace(/\n*/g,'')+`@lazyRule=.js:eval(fetch('hiker://files/rules/zywcj.js'));lazyRu();`,
col_type: 'text_2'});
   }
  }
 }
 
} catch(e) {}
res.data=items;
setHomeResult(res);
}

//动态解析
function lazyRu() {
var src=input.replace(/amp;/g,"");
if(src.indexOf("html")!=-1){
var jiek="https://1717.ntryjd.net/0526/?url=";
var fileUrl="https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/parse.js";
var js=fetch(fileUrl,{});
eval(js);
var url=yqjx.toUrl(jiek+src.split('"')[0]);
return url!=""?url:getUrl(jiek+src.split('"')[0]);
}else if(src.indexOf("135-cdn")!=-1){
refreshX5WebView(src);return "toast://请等待加载选集！";
}else if(src.indexOf("share")!=-1){
var link=src.split("/share")[0];
var fc=fetch(src,{}).replace("var purl","var main");
if(fc.indexOf("main")!=-1){
var mat=fc.match(/var main.*?;/)[0];
eval(mat);
return main.indexOf("http")!=-1?main:link+main;
}else{
var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
return main.indexOf("http")!=-1?main:link+main};
}else if(src.indexOf("meiju11")!=-1){
var meiju=fetch(src,{headers:{"Referer":"https://www.meiju11.com"}});
return meiju.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
}else if(src.indexOf("leduotv")!=-1){
var pla=fetch(src,{}).split("var url=\'")[1].split("\'")[0];
if(pla.indexOf("m3u8")!=-1){
return pla.split("=")[1]};
}else if(src.indexOf("aHR0c")!=-1){
return decodeURIComponent(base64Decode(src.split("&")[0]));
}else if(src.indexOf("haodanxia")!=-1||src.indexOf("cqzyw")!=-1){
var ul=JSON.parse(fetch(src, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withStatusCode:true}));
if(ul.statusCode=="302"){
return ul.headers.location[0];
}else{
return src};
}else if(src.indexOf("shenma4480")!=-1){
var sm="https://www.shenma4480.com/"+fetch(src,{headers:{"Referer":"https://www.shenma4480.com"}}).match(/var u=\"(.*?)\"/)[1];
return fetch(sm,{headers:{"Referer":"https://www.shenma4480.com"}}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1].replace(/[+]/g,"%20");
}else if(src.indexOf("mlkioiy")!=-1){
if(src.indexOf("ShowVideo")!=-1){
var mlki=parseDomForHtml(fetch(src,{}),"body&&#dplayer&&result");
var fileUrl ="https://cdn.jsdelivr.net/gh/lzk23559/rulehouse/pako-min.js";
eval(fetch(fileUrl,{}));
return realUrl;
}else{
return src+"#.mp4"};
}else if(src.indexOf("ddyunp")!=-1||src.indexOf("90mm.me")!=-1){
if(!fetch("hiker://files/rules/js/kem.js",{})){
refreshX5WebView(src);return "toast://请等待加载选集！";
}else{
var fileUrl="hiker://files/rules/js/kem.js";
var ddjs=fetch(fileUrl,{});
eval(ddjs);
return tools.DdyunPlayer.toUrl(src).replace("ddyunp.com","90mm.me")};
}else if(src.indexOf("xsp1")!=-1){
var pli=parseDomForHtml(fetch(src,{headers:{"Referer":"https://zz22x.com"}}),"body&&iframe&&src").split("url=")[1];
var jiek="https://1717.ntryjd.net/0526/?url=";
var fileUrl="https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/parse.js";
var js=fetch(fileUrl,{});
eval(js);
var url=yqjx.toUrl(jiek+pli);
return url!=""?url:getUrl(jiek+pli);
}else if(src.indexOf("baipiaozy")!=-1||src.indexOf("bowang")!=-1){
refreshX5WebView(src);return "toast://请等待加载选集！";
}else if(src.indexOf("murl")!=-1){
refreshX5WebView(src);return "toast://请等待加载选集！";
}else if(src.indexOf("47api")!=-1){
refreshX5WebView(src);return "toast://请等待加载选集！";
}else{return src}
}