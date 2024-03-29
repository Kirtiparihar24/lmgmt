/*!
 * FusionCharts Export Component JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * @license License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @version: 1.0.3-release
 */
if(typeof FusionCharts==='undefined'){
    alert('FusionChartsExport: object::FusionCharts was not found.'+' Verify script inclusions.',10901271400);
    throw'FusionChartsExportComponentFatalError::10901271400';
}
var _FCEO=function(){
    _FCEO.initializeComponent(this,arguments)
    };

var FusionChartsExportObject=_FCEO;
if(FusionCharts.version&&FusionCharts.version[0]>=3){
    _FCEO.__global=FusionCharts(['private','LegacyExportComponent'])
        }
        _FCEO.version=[1,0,3,'release',362];
_FCEO.defaultParameters={
    id:undefined,
    swfLocation:undefined,
    componentAttributes:{
        width:'120',
        height:'40',
        bgColor:'',
        strictTrigger:'0'
    },
    exportAttributes:{},
    sourceCharts:[],
    debugMode:false,
    outerHTML:''
};

_FCEO.checkFlashVersion=false;
_FCEO.debugMode=false;
var FC_ExportComponentReady=function(a){
    setTimeout(function(){
        _FCEO.flushRack(a)
        },0);
    return true
    };

var FC_ExportDataReady=function(a){
    setTimeout(function(){
        return _FCEO.relayStream(a)
        },0)
    };

_FCEO.prototype.Render=function(a){
    return this.render(a)
    };

_FCEO.prototype.BeginExport=function(){
    return _FCEO.batchExport(this,this.sourceCharts)
    };

_FCEO.prototype.BeginExportAll=function(){
    return _FCEO.batchExport(this,_FCEO.probeCharts())
    };

_FCEO.prototype.GetOuterHTML=function(){
    this.update();
    return this.outerHTML
    };

_FCEO.prototype.render=function(a){
    var b=_FCEO.L.get(a);
    if(!b||!_FCEO.L.isObj(b.innerHTML,'string')){
        this.trace(_FCEO.R.errContainer,10902091233);
        return false
        }
        this.update();
    try{
        this.srcObj.render(b)
        }catch(err){
        this.trace(_FCEO.R.errFusion+'\n'+err,10902101448)
        }
        return true
    };

_FCEO.prototype.update=function(){
    _FCEO.updateComponent(this)
    };

_FCEO.prototype.trace=function(a,b){
    _FCEO.trace(a,b,this.debugMode)
    };

_FCEO.prototype.toString=function(){
    return'[object '+_FCEO.R.resSig+' #'+this.id+' ]'
    };

_FCEO.streamRack={};

_FCEO.flags={
    c:0
};

_FCEO.playerVersion={
    major:0,
    minor:0,
    rev:0
};

try{
    if(typeof _FCEO.__global==='undefined'){
        _FCEO.playerVersion=infosoftglobal.FusionChartsUtil.getPlayerVersion()
            }else{
        _FCEO.playerVersion=_FCEO.__global.swfobject.getFlashPlayerVersion()
            }
        }catch(err){
            
    _FCEO.trace('FusionChartsExport: object::Flash Player DetectionError.\n'+err,10902182119)
        }
        _FCEO.relayStream=function(a){
    var b=_FCEO.probeHandler(a);
    if(b==null){
        _FCEO.trace(_FCEO.R.errStream,10902041759)
        }
        if(!_FCEO.L.isObj(a.parameters.exportParameters)){
        a.parameters.exportParameters={}
    }
    if(!_FCEO.L.isObj(a.parameters.exportParameters.triggerOrdinal,'number')){
    a.parameters.exportParameters.triggerOrdinal=_FCEO.flags.c++
}
setTimeout(function(){
    if(typeof window.FC_ExportReady==='function'){
        FC_ExportReady(a.meta.DOMId)
        }
    },0);
if(_FCEO.probeComponent(b)){
    _FCEO.pushStream(b,[a]);
    return true
    }
    if(!_FCEO.streamRack[b]){
    _FCEO.streamRack[b]=[]
    }
    _FCEO.streamRack[b].push(a);
return true
};

_FCEO.flushRack=function(a){
    a=_FCEO.probeHandler(a);
    if(a==null){
        _FCEO.trace(_FCEO.R.errComponent,10902041939)
        }
        if(!_FCEO.probeComponent(a)){
        _FCEO.trace(_FCEO.R.errComponent,10902041917)
        }
        if(!_FCEO.streamRack[a]){
        return
    }
    _FCEO.pushStream(a,_FCEO.streamRack[a]);
    _FCEO.streamRack[a]=[]
    };

_FCEO.pushStream=function(a,b){
    return _FCEO.L.get(a).pushData(b)
    };

_FCEO.probeComponent=function(a){
    if(!a){
        return false
        }
        var b=_FCEO.L.get(a);
    return b?b.isReady!=null&&b.isReady()==true:false
    };

_FCEO.probeHandler=function(a){
    if(!a){
        return null
        }
        return _FCEO.L.isString(a)?a:(a.parameters!=null&&_FCEO.L.isString(a.parameters.exportHandler))?a.parameters.exportHandler:null
    };

_FCEO.probeCharts=function(){
    var a,toks,acc=[];
    toks=_FCEO.L.tags('object');
    for(var i=0;i<toks.length;i++){
        a=toks[i];
        if(_FCEO.probeChart(a)){
            acc.push(a)
            }
        }
    toks=_FCEO.L.tags('embed');
    for(i=0;i<toks.length;i++){
    a=toks[i];
    if(a.parentNode!=undefined&&a.parentNode.tagName=='object'){
        continue
    }
    if(_FCEO.probeChart(a)){
        acc.push(a)
        }
    }
return acc
};

_FCEO.probeChart=function(a){
    if(a.signature==undefined){
        return false
        }
        var b=a.signature();
    return(_FCEO.L.isString(b)&&b.indexOf(_FCEO.R.resChartSig)==0)
    };

_FCEO.initializeComponent=function(a,b){
    if(!b||!b.length||b.length<1){
        _FCEO.trace(_FCEO.R.errArgs,10902061902)
        }
        var c=!_FCEO.L.isString(b[0])&&b.length==1;
    if(!c&&b.length<2){
        _FCEO.trace(_FCEO.R.errArgs,10902091732)
        }
        var i=0;
    for(var d in _FCEO.defaultParameters){
        a[d]=(c?b[0][d]:b[i++])||_FCEO.defaultParameters[d]
        }
        if(!_FCEO.L.isString(a.id)||!_FCEO.L.isString(a.swfLocation)){
        a.trace(_FCEO.R.errArgs,10902091820)
        }
        if(_FCEO.playerVersion.major<10){
        if(_FCEO.checkFlashVersion&&!(a.debugMode||_FCEO.debugMode)){
            alert(_FCEO.R.msgNoPlayer)
            }
            a.trace(_FCEO.R.errPlayer,10902182131)
        }
        a.srcObj=new FusionCharts(a.swfLocation,a.id,0,0,a.debugMode)
    };

_FCEO.updateComponent=function(b){
    if(!b.srcObj){
        b.trace(_FCEO.R.errFusion,10902220400)
        }
        _FCEO.L.sync(b.componentAttributes,b.srcObj.variables||b.srcObj.flashVars);
    var c;
    var d=function(a){
        return!_FCEO.L.isObj((b.srcObj.variables||b.srcObj.flashVars)[a],'undefined')?(b.srcObj.variables||b.srcObj.flashVars)[a]:_FCEO.defaultParameters.componentAttributes[a]
        };

    try{
        (b.srcObj.variables||b.srcObj.flashVars)['generator']=_FCEO.R.resSig;
        c=d('width');
        if(c!=undefined){
            if(_FCEO.__global){
                b.srcObj.width=c.toString();
                b.srcObj.flashVars['width']=c.toString()
                }else{
                b.srcObj.setAttribute('width',c);
                b.srcObj.addVariable('width',c)
                }
            }
        c=d('height');
    if(c!=undefined){
        if(_FCEO.__global){
            b.srcObj.height=c.toString();
            b.srcObj.flashVars['height']=c.toString()
            }else{
            b.srcObj.setAttribute('height',c);
            b.srcObj.addVariable('height',c)
            }
        }
    c=d('bgColor');
    if(c!=undefined){
    if(b.srcObj.params){
        b.srcObj.params['bgColor']=c
        }else{
        b.srcObj.addParam('bgColor',c)
        }
    }
b.outerHTML=b.srcObj.getSWFHTML()
}catch(err){
    this.trace(_FCEO.R.errFusion+''+err,10902091318)
    }
};

_FCEO.batchExport=function(b,c){
    if(!(c instanceof Array)){
        b.trace(_FCEO.R.errArgs,10902091853);
        return[]
        }
        var d=[],mRef=_FCEO.flags.c;
    _FCEO.flags.c+=c.length;
    var e=parseInt(b.componentAttributes.strictTrigger||0)==0?function(a){
        return a
        }:function(a){
        a.handlerId=b.id;
        return a
        };

    for(var i=0;i<c.length;i++){
        var f=_FCEO.L.get(c[i]);
        if(f==null){
            b.trace(_FCEO.R.errFusion,10902092026);
            continue
        }
        if(!_FCEO.L.isObj(b.exportAttributes.exportParameters)){
            b.exportAttributes.exportParameters={}
        }
        b.exportAttributes.exportParameters.triggerOrdinal=mRef++;
    b.exportAttributes=e(b.exportAttributes);
        if(f&&f.exportChart){
        f.exportChart(b.exportAttributes);
        d.push(f.id)
        }else{
        b.trace(_FCEO.R.errFusion+'\nRef: '+f.id,10902092036)
        }
    }
    return d
};

_FCEO.toString=function(){
    return'[object '+_FCEO.R.resSig+']'
    };

_FCEO.trace=function(a,b,c){
    if(c||_FCEO.debugMode){
        _FCEO.L.raise(a,b)
        }
    };

_FCEO.R={
    errStream:'Inbound stream missing or stream integrity failure.',
    errComponent:'Export component missing or authentication failure.',
    errArgs:'Invalid arguments or parameters out of bounds exception.',
    errContainer:'Invalid container id or HTMLNode missing from DOM.',
    errFusion:'Error with internal FusionCharts object. Review parameters.',
    errPlayer:'Incompatible Flash player or Flash player not installed. Flash Player 10 (or above) is needed for Export Component.',
    msgNoPlayer:'This page contains elements that require the latest version of Flash Player plugin.',
    resSig:'FusionChartsExportComponent',
    resChartSig:'FusionCharts/'
};

_FCEO.L={
    isIE:navigator.appName=="Microsoft Internet Explorer",
    isFF:document.getElementById&&!document.all,
    tags:function(a,b){
        if(!_FCEO.L.isString(a))return[];
        return(b||document).getElementsByTagName(a)
        },
    get:function(a,b){
        if(!_FCEO.L.isString(a))return a;
        return(b||document).getElementById(a)
        },
    getNew:function(a){
        var b=document.createElement(a),arg;
        for(var i=1;c<arguments.length;i++){
            arg=arguments[i].split('=');
            b.setAttribute(arg[0],arg[1])
            }
            return b
        },
    sync:function(a,b){
        for(var c in a){
            b[c]=a[c]
            }
        },
isString:function(a){
    return typeof(a)=='string'
    },
isObj:function(a,b){
    return typeof(a)==(b?b:'object')
    },
raise:function(a,b,c){
    c=c?('# '+c):'';
    a='[object '+_FCEO.R.resSig+c+']\n\nError '+b+'.\n'+a+'\n\nRefer to documentation.';
    alert(a);
    throw a;
}
};