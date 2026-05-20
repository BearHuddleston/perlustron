var kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$f=0,Ku=1,Yf=2;var Eo=1,qf=2,pr=3,_i=0,Jt=1,Mn=2,ii=0,ms=1,bo=2,Ju=3,ju=4,Zf=5;var Bi=100,Kf=101,Jf=102,jf=103,Qf=104,ep=200,tp=201,np=202,ip=203,za=204,Ha=205,sp=206,rp=207,op=208,ap=209,lp=210,cp=211,up=212,hp=213,dp=214,Ga=0,Wa=1,Xa=2,gs=3,$a=4,Ya=5,qa=6,Za=7,Qu=0,fp=1,pp=2,Vn=0,eh=1,th=2,nh=3,ih=4,sh=5,rh=6,oh=7;var ah=300,Wi=301,_s=302,El=303,bl=304,Ao=306,Ka=1e3,jn=1001,Ja=1002,Vt=1003,mp=1004;var To=1005;var Ht=1006,Al=1007;var Xi=1008;var rn=1009,lh=1010,ch=1011,mr=1012,Tl=1013,zn=1014,En=1015,si=1016,Cl=1017,wl=1018,gr=1020,uh=35902,hh=35899,dh=1021,fh=1022,bn=1023,ei=1026,$i=1027,Rl=1028,Il=1029,Yi=1030,Nl=1031;var Pl=1033,Co=33776,wo=33777,Ro=33778,Io=33779,Ll=35840,Fl=35841,Dl=35842,Ol=35843,Ul=36196,Bl=37492,kl=37496,Vl=37488,zl=37489,No=37490,Hl=37491,Gl=37808,Wl=37809,Xl=37810,$l=37811,Yl=37812,ql=37813,Zl=37814,Kl=37815,Jl=37816,jl=37817,Ql=37818,ec=37819,tc=37820,nc=37821,ic=36492,sc=36494,rc=36495,oc=36283,ac=36284,Po=36285,lc=36286;var Jr=2300,ja=2301,Va=2302,Bu=2303,ku=2400,Vu=2401,zu=2402;var gp=3200;var ph=0,xp=1,Mi="",Kt="srgb",jr="srgb-linear",Qr="linear",tt="srgb";var ps=7680;var Hu=519,_p=512,vp=513,yp=514,cc=515,Sp=516,Mp=517,uc=518,Ep=519,Gu=35044,mh=35048;var gh="300 es",On=2e3,tr=2001;function x_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function __(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function eo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bp(){let t=eo("canvas");return t.style.display="block",t}var mf={},nr=null;function xh(...t){let e="THREE."+t.shift();nr?nr("log",e,...t):console.log(e,...t)}function Ap(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ae(...t){t=Ap(t);let e="THREE."+t.shift();if(nr)nr("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function we(...t){t=Ap(t);let e="THREE."+t.shift();if(nr)nr("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Qa(...t){let e=t.join(" ");e in mf||(mf[e]=!0,Ae(...t))}function Tp(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Cp={[Ga]:Wa,[Xa]:qa,[$a]:Za,[gs]:Ya,[Wa]:Ga,[qa]:Xa,[Za]:$a,[Ya]:gs},Un=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gf=1234567,Zr=Math.PI/180,ir=180/Math.PI;function xr(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function _h(t,e){return(t%e+e)%e}function v_(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function y_(t,e,n){return t!==e?(n-t)/(e-t):0}function Kr(t,e,n){return(1-n)*t+n*e}function S_(t,e,n,i){return Kr(t,e,1-Math.exp(-n*i))}function M_(t,e=1){return e-Math.abs(_h(t,e*2)-e)}function E_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function b_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function A_(t,e){return t+Math.floor(Math.random()*(e-t+1))}function T_(t,e){return t+Math.random()*(e-t)}function C_(t){return t*(.5-Math.random())}function w_(t){t!==void 0&&(gf=t);let e=gf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function R_(t){return t*Zr}function I_(t){return t*ir}function N_(t){return(t&t-1)===0&&t!==0}function P_(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function L_(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function F_(t,e,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*f,a*c);break;case"YXY":t.set(l*f,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*f,a*u,a*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Lo={DEG2RAD:Zr,RAD2DEG:ir,generateUUID:xr,clamp:Xe,euclideanModulo:_h,mapLinear:v_,inverseLerp:y_,lerp:Kr,damp:S_,pingpong:M_,smoothstep:E_,smootherstep:b_,randInt:A_,randFloat:T_,randFloatSpread:C_,seededRandom:w_,degToRad:R_,radToDeg:I_,isPowerOfTwo:N_,ceilPowerOfTwo:P_,floorPowerOfTwo:L_,setQuaternionFromProperEuler:F_,normalize:Zt,denormalize:Qs},Ce=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dn=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(d!==v||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*v;m<0&&(h=-h,f=-f,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){let y=Math.acos(m),E=Math.sin(y);p=Math.sin(p*y)/E,a=Math.sin(a*y)/E,l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+v*a}else{l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+v*a;let y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[n]=a*g+u*d+l*f-c*h,e[n+1]=l*g+u*h+c*d-a*f,e[n+2]=c*g+u*f+a*h-l*d,e[n+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xf.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mu.copy(this).projectOnVector(e),this.sub(mu)}reflect(e){return this.sub(mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mu=new P,xf=new dn,Le=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],y=s[1],E=s[4],b=s[7],R=s[2],S=s[5],w=s[8];return r[0]=o*v+a*y+l*R,r[3]=o*m+a*E+l*S,r[6]=o*p+a*b+l*w,r[1]=c*v+u*y+d*R,r[4]=c*m+u*E+d*S,r[7]=c*p+u*b+d*w,r[2]=h*v+f*y+g*R,r[5]=h*m+f*E+g*S,r[8]=h*p+f*b+g*w,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=n*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=f*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(gu.makeScale(e,n)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,n){return this.premultiply(gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gu=new Le,_f=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vf=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D_(){let t={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tt&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[jr]:{primaries:e,whitePoint:i,transfer:Qr,toXYZ:_f,fromXYZ:vf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:_f,fromXYZ:vf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),t}var Ze=D_();function xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function er(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Vs,el=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vs===void 0&&(Vs=eo("canvas")),Vs.width=e.width,Vs.height=e.height;let s=Vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Vs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=eo("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xi(n[i]/255)*255):n[i]=xi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},O_=0,sr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=xr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xu(s[o].image)):r.push(xu(s[o]))}else r=xu(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function xu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?el.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var U_=0,_u=new P,nn=class t extends Un{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=jn,s=jn,r=Ht,o=Xi,a=bn,l=rn,c=t.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=xr(),this.name="",this.source=new sr(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_u).x}get height(){return this.source.getSize(_u).y}get depth(){return this.source.getSize(_u).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Ae(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ae(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ka:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ka:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=ah;nn.DEFAULT_ANISOTROPY=1;var St=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let E=(c+1)/2,b=(f+1)/2,R=(p+1)/2,S=(u+h)/4,w=(d+v)/4,x=(g+m)/4;return E>b&&E>R?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=S/i,r=w/i):b>R?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=S/s,r=x/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=w/r,s=x/r),this.set(i,s,r,n),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends Un{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n),this.textures=[];let s={width:e,height:n,depth:i.depth},r=new nn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let n={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new sr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends tl{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},to=class extends nn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends nn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var at=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,i,s,r,o,a,l,c,u,d,h,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,d,h,f,g,v,m)}set(e,n,i,s,r,o,a,l,c,u,d,h,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let n=this.elements,i=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),o=1/zs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,g=a*u,v=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=f+g*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=g+f*c,n[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,v=c*d;n[0]=h+v*a,n[4]=g*a-f,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=f*a-g,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,v=c*d;n[0]=h-v*a,n[4]=-o*d,n[8]=g+f*a,n[1]=f+g*a,n[5]=o*u,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,g=a*u,v=a*d;n[0]=l*u,n[4]=g*c-f,n[8]=h*c+v,n[1]=l*d,n[5]=v*c+h,n[9]=f*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-h*d,n[8]=g*d+f,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=f*d+g,n[10]=h-v*d}else if(e.order==="XZY"){let h=o*l,f=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+v,n[5]=o*u,n[9]=f*d-g,n[2]=g*d-f,n[6]=a*u,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B_,e,k_)}lookAt(e,n,i){let s=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ni.crossVectors(i,un),Ni.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ni.crossVectors(i,un)),Ni.normalize(),ma.crossVectors(un,Ni),s[0]=Ni.x,s[4]=ma.x,s[8]=un.x,s[1]=Ni.y,s[5]=ma.y,s[9]=un.y,s[2]=Ni.z,s[6]=ma.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],E=i[7],b=i[11],R=i[15],S=s[0],w=s[4],x=s[8],T=s[12],N=s[1],I=s[5],D=s[9],k=s[13],z=s[2],A=s[6],L=s[10],F=s[14],X=s[3],Y=s[7],j=s[11],te=s[15];return r[0]=o*S+a*N+l*z+c*X,r[4]=o*w+a*I+l*A+c*Y,r[8]=o*x+a*D+l*L+c*j,r[12]=o*T+a*k+l*F+c*te,r[1]=u*S+d*N+h*z+f*X,r[5]=u*w+d*I+h*A+f*Y,r[9]=u*x+d*D+h*L+f*j,r[13]=u*T+d*k+h*F+f*te,r[2]=g*S+v*N+m*z+p*X,r[6]=g*w+v*I+m*A+p*Y,r[10]=g*x+v*D+m*L+p*j,r[14]=g*T+v*k+m*F+p*te,r[3]=y*S+E*N+b*z+R*X,r[7]=y*w+E*I+b*A+R*Y,r[11]=y*x+E*D+b*L+R*j,r[15]=y*T+E*k+b*F+R*te,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],y=l*f-c*h,E=a*f-c*d,b=a*h-l*d,R=o*f-c*u,S=o*h-l*u,w=o*d-a*u;return n*(v*y-m*E+p*b)-i*(g*y-m*R+p*S)+s*(g*E-v*R+p*w)-r*(g*b-v*S+m*w)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=n*a-i*o,E=n*l-s*o,b=n*c-r*o,R=i*l-s*a,S=i*c-r*a,w=s*c-r*l,x=u*v-d*g,T=u*m-h*g,N=u*p-f*g,I=d*m-h*v,D=d*p-f*v,k=h*p-f*m,z=y*k-E*D+b*I+R*N-S*T+w*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/z;return e[0]=(a*k-l*D+c*I)*A,e[1]=(s*D-i*k-r*I)*A,e[2]=(v*w-m*S+p*R)*A,e[3]=(h*S-d*w-f*R)*A,e[4]=(l*N-o*k-c*T)*A,e[5]=(n*k-s*N+r*T)*A,e[6]=(m*b-g*w-p*E)*A,e[7]=(u*w-h*b+f*E)*A,e[8]=(o*D-a*N+c*x)*A,e[9]=(i*N-n*D-r*x)*A,e[10]=(g*S-v*b+p*y)*A,e[11]=(d*b-u*S-f*y)*A,e[12]=(a*T-o*I-l*x)*A,e[13]=(n*I-i*T+s*x)*A,e[14]=(v*E-g*R-m*y)*A,e[15]=(u*R-d*E+h*y)*A,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,v=o*u,m=o*d,p=a*d,y=l*c,E=l*u,b=l*d,R=i.x,S=i.y,w=i.z;return s[0]=(1-(v+p))*R,s[1]=(f+b)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(h+p))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+E)*w,s[9]=(m-y)*w,s[10]=(1-(h+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=zs.set(s[0],s[1],s[2]).length(),a=zs.set(s[4],s[5],s[6]).length(),l=zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ln.copy(this);let c=1/o,u=1/a,d=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,n.setFromRotationMatrix(Ln),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=On,l=!1){let c=this.elements,u=2*r/(n-e),d=2*r/(i-s),h=(n+e)/(n-e),f=(i+s)/(i-s),g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===On)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===tr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=On,l=!1){let c=this.elements,u=2/(n-e),d=2/(i-s),h=-(n+e)/(n-e),f=-(i+s)/(i-s),g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===On)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===tr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},zs=new P,Ln=new at,B_=new P(0,0,0),k_=new P(1,1,1),Ni=new P,ma=new P,un=new P,yf=new at,Sf=new dn,ti=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},V_=0,Mf=new P,Hs=new dn,di=new at,ga=new P,Hr=new P,z_=new P,H_=new dn,Ef=new P(1,0,0),bf=new P(0,1,0),Af=new P(0,0,1),Tf={type:"added"},G_={type:"removed"},Gs={type:"childadded",child:null},vu={type:"childremoved",child:null},Rt=class t extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new P,n=new ti,i=new dn,s=new P(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Le}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Ef,e)}rotateY(e){return this.rotateOnAxis(bf,e)}rotateZ(e){return this.rotateOnAxis(Af,e)}translateOnAxis(e,n){return Mf.copy(e).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ef,e)}translateY(e){return this.translateOnAxis(bf,e)}translateZ(e){return this.translateOnAxis(Af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ga.copy(e):ga.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Hr,ga,this.up):di.lookAt(ga,Hr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(di),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(we("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tf),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(G_),vu.child=e,this.dispatchEvent(vu),vu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tf),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,H_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new P(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qn=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},W_={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},xa={h:0,s:0,l:0};function yu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var ze=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Ze.workingColorSpace){if(e=_h(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=yu(o,r,e+1/3),this.g=yu(o,r,e),this.b=yu(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,n=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ae("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kt){let i=wp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ze.workingToColorSpace(Xt.copy(this),e),Math.round(Xe(Xt.r*255,0,255))*65536+Math.round(Xe(Xt.g*255,0,255))*256+Math.round(Xe(Xt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Xt.copy(this),n);let i=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Kt){Ze.workingToColorSpace(Xt.copy(this),e);let n=Xt.r,i=Xt.g,s=Xt.b;return e!==Kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(xa);let i=Kr(Pi.h,xa.h,n),s=Kr(Pi.s,xa.s,n),r=Kr(Pi.l,xa.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new ze;ze.NAMES=wp;var no=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Fn=new P,fi=new P,Su=new P,pi=new P,Ws=new P,Xs=new P,Cf=new P,Mu=new P,Eu=new P,bu=new P,Au=new St,Tu=new St,Cu=new St,Ui=class t{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Fn.subVectors(e,n),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Fn.subVectors(s,n),fi.subVectors(i,n),Su.subVectors(e,n);let o=Fn.dot(Fn),a=Fn.dot(fi),l=Fn.dot(Su),c=fi.dot(fi),u=fi.dot(Su),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Au.setScalar(0),Tu.setScalar(0),Cu.setScalar(0),Au.fromBufferAttribute(e,n),Tu.fromBufferAttribute(e,i),Cu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Au,r.x),o.addScaledVector(Tu,r.y),o.addScaledVector(Cu,r.z),o}static isFrontFacing(e,n,i,s){return Fn.subVectors(i,n),fi.subVectors(e,n),Fn.cross(fi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Fn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,o,a;Ws.subVectors(s,i),Xs.subVectors(r,i),Mu.subVectors(e,i);let l=Ws.dot(Mu),c=Xs.dot(Mu);if(l<=0&&c<=0)return n.copy(i);Eu.subVectors(e,s);let u=Ws.dot(Eu),d=Xs.dot(Eu);if(u>=0&&d<=u)return n.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ws,o);bu.subVectors(e,r);let f=Ws.dot(bu),g=Xs.dot(bu);if(g>=0&&f<=g)return n.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Xs,a);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Cf.subVectors(r,s),a=(d-u)/(d-u+(f-g)),n.copy(s).addScaledVector(Cf,a);let p=1/(m+v+h);return o=v*p,a=h*p,n.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ni=class{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),va.subVectors(this.max,Gr),$s.subVectors(e.a,Gr),Ys.subVectors(e.b,Gr),qs.subVectors(e.c,Gr),Li.subVectors(Ys,$s),Fi.subVectors(qs,Ys),us.subVectors($s,qs);let n=[0,-Li.z,Li.y,0,-Fi.z,Fi.y,0,-us.z,us.y,Li.z,0,-Li.x,Fi.z,0,-Fi.x,us.z,0,-us.x,-Li.y,Li.x,0,-Fi.y,Fi.x,0,-us.y,us.x,0];return!wu(n,$s,Ys,qs,va)||(n=[1,0,0,0,1,0,0,0,1],!wu(n,$s,Ys,qs,va))?!1:(ya.crossVectors(Li,Fi),n=[ya.x,ya.y,ya.z],wu(n,$s,Ys,qs,va))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mi=[new P,new P,new P,new P,new P,new P,new P,new P],Dn=new P,_a=new ni,$s=new P,Ys=new P,qs=new P,Li=new P,Fi=new P,us=new P,Gr=new P,va=new P,ya=new P,hs=new P;function wu(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){hs.fromArray(t,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=n.dot(hs),u=i.dot(hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var wt=new P,Sa=new Ce,X_=0,kt=class extends Un{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gu,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sa.fromBufferAttribute(this,n),Sa.applyMatrix3(e),this.setXY(n,Sa.x,Sa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var io=class extends kt{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var so=class extends kt{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var lt=class extends kt{constructor(e,n,i){super(new Float32Array(e),n,i)}},$_=new ni,Wr=new P,Ru=new P,sn=class{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):$_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);let n=Wr.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Wr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(Ru)),this.expandByPoint(Wr.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Y_=0,Sn=new at,Iu=new Rt,Zs=new P,hn=new ni,Xr=new ni,Bt=new P,It=class t extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x_(e)?so:io)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Le().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(hn.min,Xr.min),hn.expandByPoint(Bt),Bt.addVectors(hn.max,Xr.max),hn.expandByPoint(Bt)):(hn.expandByPoint(Xr.min),hn.expandByPoint(Xr.max))}hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(e,c),Bt.add(Zs)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new P,l[x]=new P;let c=new P,u=new P,d=new P,h=new Ce,f=new Ce,g=new Ce,v=new P,m=new P;function p(x,T,N){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,N),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,N),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),a[x].add(v),a[T].add(v),a[N].add(v),l[x].add(m),l[T].add(m),l[N].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,T=y.length;x<T;++x){let N=y[x],I=N.start,D=N.count;for(let k=I,z=I+D;k<z;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new P,b=new P,R=new P,S=new P;function w(x){R.fromBufferAttribute(s,x),S.copy(R);let T=a[x];E.copy(T),E.sub(R.multiplyScalar(R.dot(T))).normalize(),b.crossVectors(S,T);let I=b.dot(l[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,I)}for(let x=0,T=y.length;x<T;++x){let N=y[x],I=N.start,D=N.count;for(let k=I,z=I+D;k<z;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=n.count;h<f;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new kt(h,u,d)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);n.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var q_=0,vi=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=ms,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ha,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Ae(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ae(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==za&&(i.blendSrc=this.blendSrc),this.blendDst!==Ha&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(n){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var gi=new P,Nu=new P,Ma=new P,Di=new P,Pu=new P,Ea=new P,Lu=new P,yi=class{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Nu.copy(e).add(n).multiplyScalar(.5),Ma.copy(n).sub(e).normalize(),Di.copy(this.origin).sub(Nu);let r=e.distanceTo(n)*.5,o=-this.direction.dot(Ma),a=Di.dot(this.direction),l=-Di.dot(Ma),c=Di.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Nu).addScaledVector(Ma,h),f}intersectSphere(e,n){gi.subVectors(e.center,this.origin);let i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,s,r){Pu.subVectors(n,e),Ea.subVectors(i,e),Lu.crossVectors(Pu,Ea);let o=this.direction.dot(Lu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);let l=a*this.direction.dot(Ea.crossVectors(Di,Ea));if(l<0)return null;let c=a*this.direction.dot(Pu.cross(Di));if(c<0||l+c>o)return null;let u=-a*Di.dot(Lu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wf=new at,ds=new yi,ba=new sn,Rf=new P,Aa=new P,Ta=new P,Ca=new P,Fu=new P,wa=new P,If=new P,Ra=new P,Yt=class extends Rt{constructor(e=new It,n=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Fu.fromBufferAttribute(d,e),o?wa.addScaledVector(Fu,u):wa.addScaledVector(Fu.sub(n),u))}n.add(wa)}return n}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(ba.containsPoint(ds.origin)===!1&&(ds.intersectSphere(ba,Rf)===null||ds.origin.distanceToSquared(Rf)>(e.far-e.near)**2))&&(wf.copy(r).invert(),ds.copy(e.ray).applyMatrix4(wf),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ds)))}_computeIntersections(e,n,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,R=E;b<R;b+=3){let S=a.getX(b),w=a.getX(b+1),x=a.getX(b+2);s=Ia(this,p,e,i,c,u,d,S,w,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=a.getX(m),E=a.getX(m+1),b=a.getX(m+2);s=Ia(this,o,e,i,c,u,d,y,E,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,R=E;b<R;b+=3){let S=b,w=b+1,x=b+2;s=Ia(this,p,e,i,c,u,d,S,w,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=m,E=m+1,b=m+2;s=Ia(this,o,e,i,c,u,d,y,E,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function Z_(t,e,n,i,s,r,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===_i,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Ra);return c<n.near||c>n.far?null:{distance:c,point:Ra.clone(),object:t}}function Ia(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Aa),t.getVertexPosition(l,Ta),t.getVertexPosition(c,Ca);let u=Z_(t,e,n,i,Aa,Ta,Ca,If);if(u){let d=new P;Ui.getBarycoord(If,Aa,Ta,Ca,d),s&&(u.uv=Ui.getInterpolatedAttribute(s,a,l,c,d,new Ce)),r&&(u.uv1=Ui.getInterpolatedAttribute(r,a,l,c,d,new Ce)),o&&(u.normal=Ui.getInterpolatedAttribute(o,a,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new P,materialIndex:0};Ui.getNormal(Aa,Ta,Ca,h.normal),u.face=h,u.barycoord=d}return u}var ro=class extends nn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=Vt,u=Vt,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oo=class extends kt{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ks=new at,Nf=new at,Na=[],Pf=new ni,K_=new at,$r=new Yt,Yr=new sn,ao=class extends Yt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new oo(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,K_)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ks),Pf.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(Pf)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ks),Yr.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Yr)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,n){let i=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(i),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ks),Nf.multiplyMatrices(i,Ks),$r.matrixWorld=Nf,$r.raycast(e,Na);for(let o=0,a=Na.length;o<a;o++){let l=Na[o];l.instanceId=r,l.object=this,n.push(l)}Na.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new oo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ro(new Float32Array(s*this.count),s,this.count,Rl,En));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Du=new P,J_=new P,j_=new Le,tn=class{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=Du.subVectors(i,n).cross(J_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(Du),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||j_.getNormalMatrix(e),s=this.coplanarPoint(Du).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new sn,Q_=new Ce(.5,.5),Pa=new P,ar=class{constructor(e=new tn,n=new tn,i=new tn,s=new tn,r=new tn,o=new tn){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=On,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],y=r[12],E=r[13],b=r[14],R=r[15];if(s[0].setComponents(c-o,f-u,p-g,R-y).normalize(),s[1].setComponents(c+o,f+u,p+g,R+y).normalize(),s[2].setComponents(c+a,f+d,p+v,R+E).normalize(),s[3].setComponents(c-a,f-d,p-v,R-E).normalize(),i)s[4].setComponents(l,h,m,b).normalize(),s[5].setComponents(c-l,f-h,p-m,R-b).normalize();else if(s[4].setComponents(c-l,f-h,p-m,R-b).normalize(),n===On)s[5].setComponents(c+l,f+h,p+m,R+b).normalize();else if(n===tr)s[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);let n=Q_.distanceTo(e.center);return fs.radius=.7071067811865476+n,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Pa.x=s.normal.x>0?e.max.x:e.min.x,Pa.y=s.normal.y>0?e.max.y:e.min.y,Pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xs=class extends vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},il=new P,sl=new P,Lf=new at,qr=new yi,La=new sn,Ou=new P,Ff=new P,rl=class extends Rt{constructor(e=new It,n=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)il.fromBufferAttribute(n,s-1),sl.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=il.distanceTo(sl);e.setAttribute("lineDistance",new lt(i,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(s),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;Lf.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Lf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=u.getX(v),y=u.getX(v+1),E=Fa(this,e,qr,l,p,y,v);E&&n.push(E)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(f),p=Fa(this,e,qr,l,v,m,g-1);p&&n.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=Fa(this,e,qr,l,v,v+1,v);p&&n.push(p)}if(this.isLineLoop){let v=Fa(this,e,qr,l,g-1,f,g-1);v&&n.push(v)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fa(t,e,n,i,s,r,o){let a=t.geometry.attributes.position;if(il.fromBufferAttribute(a,s),sl.fromBufferAttribute(a,r),n.distanceSqToSegment(il,sl,Ou,Ff)>i)return;Ou.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Ou);if(!(c<e.near||c>e.far))return{distance:c,point:Ff.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}var Df=new P,Of=new P,lr=class extends rl{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Df.fromBufferAttribute(n,s),Of.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Df.distanceTo(Of);e.setAttribute("lineDistance",new lt(i,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var cr=class extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Uf=new at,Wu=new yi,Da=new sn,Oa=new P,lo=class extends Rt{constructor(e=new It,n=new cr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(s),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;Uf.copy(s).invert(),Wu.copy(e.ray).applyMatrix4(Uf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,v=f;g<v;g++){let m=c.getX(g);Oa.fromBufferAttribute(d,m),Bf(Oa,m,l,s,e,n,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,v=f;g<v;g++)Oa.fromBufferAttribute(d,g),Bf(Oa,g,l,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bf(t,e,n,i,s,r,o){let a=Wu.distanceSqToPoint(t);if(a<n){let l=new P;Wu.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var co=class extends nn{constructor(e=[],n=Wi,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Si=class extends nn{constructor(e,n,i=zn,s,r,o,a=Vt,l=Vt,c,u=ei,d=1){if(u!==ei&&u!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:n,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},ol=class extends Si{constructor(e,n=zn,i=Wi,s,r,o=Vt,a=Vt,l,c=ei){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},uo=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ki=class t extends It{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(d,2));function g(v,m,p,y,E,b,R,S,w,x,T){let N=b/w,I=R/x,D=b/2,k=R/2,z=S/2,A=w+1,L=x+1,F=0,X=0,Y=new P;for(let j=0;j<L;j++){let te=j*I-k;for(let me=0;me<A;me++){let Oe=me*N-D;Y[v]=Oe*y,Y[m]=te*E,Y[p]=z,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[p]=S>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(me/w),d.push(1-j/x),F+=1}}for(let j=0;j<x;j++)for(let te=0;te<w;te++){let me=h+te+A*j,Oe=h+te+A*(j+1),Ke=h+(te+1)+A*(j+1),Ne=h+(te+1)+A*j;l.push(me,Oe,Ne),l.push(Oe,Ke,Ne),X+=6}a.addGroup(f,X,T),f+=X,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ho=class t extends It{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,v=[],m=i/2,p=0;y(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new lt(d,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(f,2));function y(){let b=new P,R=new P,S=0,w=(n-e)/i;for(let x=0;x<=r;x++){let T=[],N=x/r,I=N*(n-e)+e;for(let D=0;D<=s;D++){let k=D/s,z=k*l+a,A=Math.sin(z),L=Math.cos(z);R.x=I*A,R.y=-N*i+m,R.z=I*L,d.push(R.x,R.y,R.z),b.set(A,w,L).normalize(),h.push(b.x,b.y,b.z),f.push(k,1-N),T.push(g++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let N=v[T][x],I=v[T+1][x],D=v[T+1][x+1],k=v[T][x+1];(e>0||T!==0)&&(u.push(N,I,k),S+=3),(n>0||T!==r-1)&&(u.push(I,D,k),S+=3)}c.addGroup(p,S,0),p+=S}function E(b){let R=g,S=new Ce,w=new P,x=0,T=b===!0?e:n,N=b===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*N,0),h.push(0,N,0),f.push(.5,.5),g++;let I=g;for(let D=0;D<=s;D++){let z=D/s*l+a,A=Math.cos(z),L=Math.sin(z);w.x=T*L,w.y=m*N,w.z=T*A,d.push(w.x,w.y,w.z),h.push(0,N,0),S.x=A*.5+.5,S.y=L*.5*N+.5,f.push(S.x,S.y),g++}for(let D=0;D<s;D++){let k=R+D,z=I+D;b===!0?u.push(z,z+1,k):u.push(z+1,z,k),x+=3}c.addGroup(p,x,b===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var al=class t extends It{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let E=new P,b=new P,R=new P;for(let S=0;S<n.length;S+=3)f(n[S+0],E),f(n[S+1],b),f(n[S+2],R),l(E,b,R,y)}function l(y,E,b,R){let S=R+1,w=[];for(let x=0;x<=S;x++){w[x]=[];let T=y.clone().lerp(b,x/S),N=E.clone().lerp(b,x/S),I=S-x;for(let D=0;D<=I;D++)D===0&&x===S?w[x][D]=T:w[x][D]=T.clone().lerp(N,D/I)}for(let x=0;x<S;x++)for(let T=0;T<2*(S-x)-1;T++){let N=Math.floor(T/2);T%2===0?(h(w[x][N+1]),h(w[x+1][N]),h(w[x][N])):(h(w[x][N+1]),h(w[x+1][N+1]),h(w[x+1][N]))}}function c(y){let E=new P;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(y),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function u(){let y=new P;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let b=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(b,1-R)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){let E=o[y+0],b=o[y+2],R=o[y+4],S=Math.max(E,b,R),w=Math.min(E,b,R);S>.9&&w<.1&&(E<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function f(y,E){let b=y*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function g(){let y=new P,E=new P,b=new P,R=new P,S=new Ce,w=new Ce,x=new Ce;for(let T=0,N=0;T<r.length;T+=9,N+=6){y.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),b.set(r[T+6],r[T+7],r[T+8]),S.set(o[N+0],o[N+1]),w.set(o[N+2],o[N+3]),x.set(o[N+4],o[N+5]),R.copy(y).add(E).add(b).divideScalar(3);let I=m(R);v(S,N+0,y,I),v(w,N+2,E,I),v(x,N+4,b,I)}}function v(y,E,b,R){R<0&&y.x===1&&(o[E]=y.x-1),b.x===0&&b.z===0&&(o[E]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}};var fo=class t extends al{constructor(e=1,n=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},po=class t extends It{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=n/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let y=p*h-o;for(let E=0;E<c;E++){let b=E*d-r;g.push(b,-y,0),v.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let E=y+c*p,b=y+c*(p+1),R=y+1+c*(p+1),S=y+1+c*p;f.push(E,b,S),f.push(b,R,S)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},ur=class t extends It{constructor(e=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(n-e)/s,f=new P,g=new Ce;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/n+1)/2,g.y=(f.y/n+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let y=p+m,E=y,b=y+i+1,R=y+i+2,S=y+1;a.push(E,b,S),a.push(b,R,S)}}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var mo=class t extends It{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new P,h=new P,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let y=[],E=p/i,b=0;p===0&&o===0?b=.5/n:p===i&&l===Math.PI&&(b=-.5/n);for(let R=0;R<=n;R++){let S=R/n;d.x=-e*Math.cos(s+S*r)*Math.sin(o+E*a),d.y=e*Math.cos(o+E*a),d.z=e*Math.sin(s+S*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(S+b,1-E),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<n;y++){let E=u[p][y+1],b=u[p][y],R=u[p+1][y],S=u[p+1][y+1];(p!==0||o>0)&&f.push(E,b,S),(p!==i-1||l<Math.PI)&&f.push(b,R,S)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function vs(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(kf(s))s.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(kf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function qt(t){let e={};for(let n=0;n<t.length;n++){let i=vs(t[n]);for(let s in i)e[s]=i[s]}return e}function kf(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function ev(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vh(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Rp={clone:vs,merge:qt},tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tv,this.fragmentShader=nv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},ll=class extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var cl=class extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ul=class extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ua(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var Vi=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],e<s)break e}o=n.length;break t}if(!(e>=r)){let a=n[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hl=class extends Vi{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ku,endingEnd:ku}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vu:r=e,a=2*n-i;break;case zu:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vu:o=e,l=2*i-n;break;case zu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-n)/(s-n),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,y=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,E=(-1-f)*m+(1.5+f)*v+.5*g,b=f*m-f*v;for(let R=0;R!==a;++R)r[R]=p*o[u+R]+y*o[c+R]+E*o[l+R]+b*o[d+R];return r}},dl=class extends Vi{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(s-n),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},fl=class extends Vi{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pl=class extends Vi{interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){let v=(i-n)/(s-n),m=1-v;for(let p=0;p!==a;++p)r[p]=o[c+p]*m+o[l+p]*v;return r}let f=a*2,g=e-1;for(let v=0;v!==a;++v){let m=o[c+v],p=o[l+v],y=g*f+v*2,E=h[y],b=h[y+1],R=e*f+v*2,S=d[R],w=d[R+1],x=(i-n)/(s-n),T,N,I,D,k;for(let z=0;z<8;z++){T=x*x,N=T*x,I=1-x,D=I*I,k=D*I;let L=k*n+3*D*x*E+3*I*T*S+N*s-i;if(Math.abs(L)<1e-10)break;let F=3*D*(E-n)+6*I*x*(S-E)+3*T*(s-S);if(Math.abs(F)<1e-10)break;x=x-L/F,x=Math.max(0,Math.min(1,x))}r[v]=k*m+3*D*x*b+3*I*T*w+N*p}return r}},mn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ua(n,this.TimeBufferType),this.values=Ua(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Ua(e.times,Array),values:Ua(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new pl(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.settings=this.settings),n}setInterpolation(e){let n;switch(e){case Jr:n=this.InterpolantFactoryMethodDiscrete;break;case ja:n=this.InterpolantFactoryMethodLinear;break;case Va:n=this.InterpolantFactoryMethodSmooth;break;case Bu:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ae("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return Bu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e}return this}trim(e,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(we("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){we("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){we("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&__(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){we("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Va,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let v=n[d+g];if(v!==n[h+g]||v!==n[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)n[h+f]=n[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,s}};mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=ja;var zi=class extends mn{constructor(e,n,i){super(e,n,i)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Jr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends mn{constructor(e,n,i,s){super(e,n,i,s)}};ml.prototype.ValueTypeName="color";var gl=class extends mn{constructor(e,n,i,s){super(e,n,i,s)}};gl.prototype.ValueTypeName="number";var xl=class extends Vi{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(s-n),c=e*a;for(let u=c+a;c!==u;c+=4)dn.slerpFlat(r,0,o,c-a,o,c,l);return r}},go=class extends mn{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new xl(this.times,this.values,this.getValueSize(),e)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends mn{constructor(e,n,i){super(e,n,i)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Jr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends mn{constructor(e,n,i,s){super(e,n,i,s)}};_l.prototype.ValueTypeName="vector";var vl=class{constructor(e,n,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ip=new vl,yl=class{constructor(e){this.manager=e!==void 0?e:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var xo=class extends Rt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},_o=class extends xo{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){let n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}},Uu=new at,Vf=new P,zf=new P,Xu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;Vf.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vf),zf.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(zf),n.updateMatrixWorld(),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===tr||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ba=new P,ka=new dn,Jn=new P,vo=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ba,ka,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,ka,Jn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Ba,ka,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,ka,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new P,Hf=new Ce,Gf=new Ce,$t=class extends vo{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,n){return this.getViewBounds(e,Hf,Gf),n.subVectors(Gf,Hf)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Zr*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var hr=class extends vo{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},$u=class extends Xu{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yo=class extends xo{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new $u}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var Js=-90,js=1,Sl=class extends Rt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(Js,js,e,n);s.layers=this.layers,this.add(s);let r=new $t(Js,js,e,n);r.layers=this.layers,this.add(r);let o=new $t(Js,js,e,n);o.layers=this.layers,this.add(o);let a=new $t(Js,js,e,n);a.layers=this.layers,this.add(a);let l=new $t(Js,js,e,n);l.layers=this.layers,this.add(l);let c=new $t(Js,js,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(let c of n)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ml=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var yh="\\[\\]\\.:\\/",iv=new RegExp("["+yh+"]","g"),Sh="[^"+yh+"]",sv="[^"+yh.replace("\\.","")+"]",rv=/((?:WC+[\/:])*)/.source.replace("WC",Sh),ov=/(WCOD+)?/.source.replace("WCOD",sv),av=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),lv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),cv=new RegExp("^"+rv+ov+av+lv+"$"),uv=["material","materials","bones","map"],Yu=class{constructor(e,n,i){let s=i||xt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},xt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iv,"")}static parseTrackName(e){let n=cv.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);uv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){we("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=n.nodeName;we("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Yu;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yI=new Float32Array(1);var Wf=new at,dr=class{constructor(e,n,i=0,s=1/0){this.ray=new yi(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):we("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Wf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wf),this}intersectObject(e,n=!0,i=[]){return qu(e,this,i,n),i.sort(Xf),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)qu(e[s],this,i,n);return i.sort(Xf),i}};function Xf(t,e){return t.distance-e.distance}function qu(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){let r=t.children;for(let o=0,a=r.length;o<a;o++)qu(r[o],e,n,!0)}}var fr=class{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Zu=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};var So=class extends lr{constructor(e=10,n=10,i=4473924,s=8947848){i=new ze(i),s=new ze(s);let r=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,f=0,g=-a;h<=n;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let v=h===r?i:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}let u=new It;u.setAttribute("position",new lt(l,3)),u.setAttribute("color",new lt(c,3));let d=new xs({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Mo=class extends Un{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Mh(t,e,n,i){let s=hv(i);switch(n){case dh:return t*e;case Rl:return t*e/s.components*s.byteLength;case Il:return t*e/s.components*s.byteLength;case Yi:return t*e*2/s.components*s.byteLength;case Nl:return t*e*2/s.components*s.byteLength;case fh:return t*e*3/s.components*s.byteLength;case bn:return t*e*4/s.components*s.byteLength;case Pl:return t*e*4/s.components*s.byteLength;case Co:case wo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Io:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fl:case Ol:return Math.max(t,16)*Math.max(e,8)/4;case Ll:case Dl:return Math.max(t,8)*Math.max(e,8)/2;case Ul:case Bl:case Vl:case zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kl:case No:case Hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case jl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ec:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case tc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case nc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ic:case sc:case rc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case oc:case ac:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Po:case lc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hv(t){switch(t){case rn:case lh:return{byteLength:1,components:1};case mr:case ch:case si:return{byteLength:2,components:1};case Cl:case wl:return{byteLength:2,components:4};case zn:case Tl:case En:return{byteLength:4,components:1};case uh:case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function Qp(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function fv(t){let e=new WeakMap;function n(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_v=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ev=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Av=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Uv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ty=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ny=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ry=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,oy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ly=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );

		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );

		irradiance *= sheenEnergyComp;

	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,py=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,my=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,My=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,by=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,By=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER

		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {

	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif

				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,SS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ES=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN

		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;

	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$S=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:pv,alphahash_pars_fragment:mv,alphamap_fragment:gv,alphamap_pars_fragment:xv,alphatest_fragment:_v,alphatest_pars_fragment:vv,aomap_fragment:yv,aomap_pars_fragment:Sv,batching_pars_vertex:Mv,batching_vertex:Ev,begin_vertex:bv,beginnormal_vertex:Av,bsdfs:Tv,iridescence_fragment:Cv,bumpmap_pars_fragment:wv,clipping_planes_fragment:Rv,clipping_planes_pars_fragment:Iv,clipping_planes_pars_vertex:Nv,clipping_planes_vertex:Pv,color_fragment:Lv,color_pars_fragment:Fv,color_pars_vertex:Dv,color_vertex:Ov,common:Uv,cube_uv_reflection_fragment:Bv,defaultnormal_vertex:kv,displacementmap_pars_vertex:Vv,displacementmap_vertex:zv,emissivemap_fragment:Hv,emissivemap_pars_fragment:Gv,colorspace_fragment:Wv,colorspace_pars_fragment:Xv,envmap_fragment:$v,envmap_common_pars_fragment:Yv,envmap_pars_fragment:qv,envmap_pars_vertex:Zv,envmap_physical_pars_fragment:oy,envmap_vertex:Kv,fog_vertex:Jv,fog_pars_vertex:jv,fog_fragment:Qv,fog_pars_fragment:ey,gradientmap_pars_fragment:ty,lightmap_pars_fragment:ny,lights_lambert_fragment:iy,lights_lambert_pars_fragment:sy,lights_pars_begin:ry,lights_toon_fragment:ay,lights_toon_pars_fragment:ly,lights_phong_fragment:cy,lights_phong_pars_fragment:uy,lights_physical_fragment:hy,lights_physical_pars_fragment:dy,lights_fragment_begin:fy,lights_fragment_maps:py,lights_fragment_end:my,lightprobes_pars_fragment:gy,logdepthbuf_fragment:xy,logdepthbuf_pars_fragment:_y,logdepthbuf_pars_vertex:vy,logdepthbuf_vertex:yy,map_fragment:Sy,map_pars_fragment:My,map_particle_fragment:Ey,map_particle_pars_fragment:by,metalnessmap_fragment:Ay,metalnessmap_pars_fragment:Ty,morphinstance_vertex:Cy,morphcolor_vertex:wy,morphnormal_vertex:Ry,morphtarget_pars_vertex:Iy,morphtarget_vertex:Ny,normal_fragment_begin:Py,normal_fragment_maps:Ly,normal_pars_fragment:Fy,normal_pars_vertex:Dy,normal_vertex:Oy,normalmap_pars_fragment:Uy,clearcoat_normal_fragment_begin:By,clearcoat_normal_fragment_maps:ky,clearcoat_pars_fragment:Vy,iridescence_pars_fragment:zy,opaque_fragment:Hy,packing:Gy,premultiplied_alpha_fragment:Wy,project_vertex:Xy,dithering_fragment:$y,dithering_pars_fragment:Yy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Zy,shadowmap_pars_fragment:Ky,shadowmap_pars_vertex:Jy,shadowmap_vertex:jy,shadowmask_pars_fragment:Qy,skinbase_vertex:eS,skinning_pars_vertex:tS,skinning_vertex:nS,skinnormal_vertex:iS,specularmap_fragment:sS,specularmap_pars_fragment:rS,tonemapping_fragment:oS,tonemapping_pars_fragment:aS,transmission_fragment:lS,transmission_pars_fragment:cS,uv_pars_fragment:uS,uv_pars_vertex:hS,uv_vertex:dS,worldpos_vertex:fS,background_vert:pS,background_frag:mS,backgroundCube_vert:gS,backgroundCube_frag:xS,cube_vert:_S,cube_frag:vS,depth_vert:yS,depth_frag:SS,distance_vert:MS,distance_frag:ES,equirect_vert:bS,equirect_frag:AS,linedashed_vert:TS,linedashed_frag:CS,meshbasic_vert:wS,meshbasic_frag:RS,meshlambert_vert:IS,meshlambert_frag:NS,meshmatcap_vert:PS,meshmatcap_frag:LS,meshnormal_vert:FS,meshnormal_frag:DS,meshphong_vert:OS,meshphong_frag:US,meshphysical_vert:BS,meshphysical_frag:kS,meshtoon_vert:VS,meshtoon_frag:zS,points_vert:HS,points_frag:GS,shadow_vert:WS,shadow_frag:XS,sprite_vert:$S,sprite_frag:YS},he={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},oi={basic:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:qt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:qt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:qt([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:qt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:qt([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:qt([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:qt([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:qt([he.lights,he.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};oi.physical={uniforms:qt([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var hc={r:0,b:0,g:0},qS=new at,em=new Le;em.set(-1,0,0,0,1,0,0,0,1);function ZS(t,e,n,i,s,r){let o=new ze(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let b=y.backgroundBlurriness>0;E=e.get(E,b)}return E}function g(y){let E=!1,b=f(y);b===null?m(o,a):b&&b.isColor&&(m(b,1),E=!0);let R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(y,E){let b=f(E);b&&(b.isCubeTexture||b.mapping===Ao)?(c===void 0&&(c=new Yt(new ki(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:vs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qS.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(em),c.material.toneMapped=Ze.getTransfer(b.colorSpace)!==tt,(u!==b||d!==b.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Yt(new po(2,2),new pn({name:"BackgroundMaterial",uniforms:vs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(b.colorSpace)!==tt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,E){y.getRGB(hc,vh(t)),n.buffers.color.setClear(hc.r,hc.g,hc.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:v,dispose:p}}function KS(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(I,D,k,z,A){let L=!1,F=d(I,z,k,D);r!==F&&(r=F,c(r.object)),L=f(I,z,k,A),L&&g(I,z,k,A),A!==null&&e.update(A,t.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,b(I,D,k,z),A!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function u(I){return t.deleteVertexArray(I)}function d(I,D,k,z){let A=z.wireframe===!0,L=i[D.id];L===void 0&&(L={},i[D.id]=L);let F=I.isInstancedMesh===!0?I.id:0,X=L[F];X===void 0&&(X={},L[F]=X);let Y=X[k.id];Y===void 0&&(Y={},X[k.id]=Y);let j=Y[A];return j===void 0&&(j=h(l()),Y[A]=j),j}function h(I){let D=[],k=[],z=[];for(let A=0;A<n;A++)D[A]=0,k[A]=0,z[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:z,object:I,attributes:{},index:null}}function f(I,D,k,z){let A=r.attributes,L=D.attributes,F=0,X=k.getAttributes();for(let Y in X)if(X[Y].location>=0){let te=A[Y],me=L[Y];if(me===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(me=I.instanceColor)),te===void 0||te.attribute!==me||me&&te.data!==me.data)return!0;F++}return r.attributesNum!==F||r.index!==z}function g(I,D,k,z){let A={},L=D.attributes,F=0,X=k.getAttributes();for(let Y in X)if(X[Y].location>=0){let te=L[Y];te===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));let me={};me.attribute=te,te&&te.data&&(me.data=te.data),A[Y]=me,F++}r.attributes=A,r.attributesNum=F,r.index=z}function v(){let I=r.newAttributes;for(let D=0,k=I.length;D<k;D++)I[D]=0}function m(I){p(I,0)}function p(I,D){let k=r.newAttributes,z=r.enabledAttributes,A=r.attributeDivisors;k[I]=1,z[I]===0&&(t.enableVertexAttribArray(I),z[I]=1),A[I]!==D&&(t.vertexAttribDivisor(I,D),A[I]=D)}function y(){let I=r.newAttributes,D=r.enabledAttributes;for(let k=0,z=D.length;k<z;k++)D[k]!==I[k]&&(t.disableVertexAttribArray(k),D[k]=0)}function E(I,D,k,z,A,L,F){F===!0?t.vertexAttribIPointer(I,D,k,A,L):t.vertexAttribPointer(I,D,k,z,A,L)}function b(I,D,k,z){v();let A=z.attributes,L=k.getAttributes(),F=D.defaultAttributeValues;for(let X in L){let Y=L[X];if(Y.location>=0){let j=A[X];if(j===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let te=j.normalized,me=j.itemSize,Oe=e.get(j);if(Oe===void 0)continue;let Ke=Oe.buffer,Ne=Oe.type,Z=Oe.bytesPerElement,ce=Ne===t.INT||Ne===t.UNSIGNED_INT||j.gpuType===Tl;if(j.isInterleavedBufferAttribute){let re=j.data,Re=re.stride,De=j.offset;if(re.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Y.locationSize;Ie++)p(Y.location+Ie,re.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ie=0;Ie<Y.locationSize;Ie++)m(Y.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let Ie=0;Ie<Y.locationSize;Ie++)E(Y.location+Ie,me/Y.locationSize,Ne,te,Re*Z,(De+me/Y.locationSize*Ie)*Z,ce)}else{if(j.isInstancedBufferAttribute){for(let re=0;re<Y.locationSize;re++)p(Y.location+re,j.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let re=0;re<Y.locationSize;re++)m(Y.location+re);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let re=0;re<Y.locationSize;re++)E(Y.location+re,me/Y.locationSize,Ne,te,me*Z,me/Y.locationSize*re*Z,ce)}}else if(F!==void 0){let te=F[X];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(Y.location,te);break;case 3:t.vertexAttrib3fv(Y.location,te);break;case 4:t.vertexAttrib4fv(Y.location,te);break;default:t.vertexAttrib1fv(Y.location,te)}}}}y()}function R(){T();for(let I in i){let D=i[I];for(let k in D){let z=D[k];for(let A in z){let L=z[A];for(let F in L)u(L[F].object),delete L[F];delete z[A]}}delete i[I]}}function S(I){if(i[I.id]===void 0)return;let D=i[I.id];for(let k in D){let z=D[k];for(let A in z){let L=z[A];for(let F in L)u(L[F].object),delete L[F];delete z[A]}}delete i[I.id]}function w(I){for(let D in i){let k=i[D];for(let z in k){let A=k[z];if(A[I.id]===void 0)continue;let L=A[I.id];for(let F in L)u(L[F].object),delete L[F];delete A[I.id]}}}function x(I){for(let D in i){let k=i[D],z=I.isInstancedMesh===!0?I.id:0,A=k[z];if(A!==void 0){for(let L in A){let F=A[L];for(let X in F)u(F[X].object),delete F[X];delete A[L]}delete k[z],Object.keys(k).length===0&&delete i[D]}}}function T(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function JS(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function jS(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==bn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let x=w===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==rn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==En&&!x)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(Ae("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),S=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:b,maxSamples:R,samples:S}}function QS(t){let e=this,n=null,i=0,s=!1,r=!1,o=new tn,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let y=r?0:i,E=y*4,b=p.clippingState||null;l.value=b,b=u(g,h,E,f);for(let R=0;R!==E;++R)b[R]=n[R];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=f;E!==v;++E,b+=4)o.copy(d[E]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var qi=4,Np=[.125,.215,.35,.446,.526,.582],ys=20,eM=256,Fo=new hr,Pp=new ze,Eh=null,bh=0,Ah=0,Th=!1,tM=new P,fc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:o=256,position:a=tM}=r;Eh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,bh,Ah),this._renderer.xr.enabled=Th,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wi||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:si,format:bn,colorSpace:jr,depthBuffer:!1},s=Lp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nM(r)),this._blurMaterial=sM(r,e,n),this._ggxMaterial=iM(r,e,n)}return s}_compileMaterial(e){let n=new Yt(new It,e);this._renderer.compile(n,Fo)}_sceneToCubeUV(e,n,i,s,r){let l=new $t(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Pp),d.toneMapping=Vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new ki,new Bn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Pp),p=!0);for(let E=0;E<6;E++){let b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let R=this._cubeSize;_r(s,b*R,E>2?R:0,R,R),d.setRenderTarget(s),p&&d.render(v,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=y}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===Wi||e.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;_r(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Fo)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-qi?i-g+qi:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-n,_r(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,Fo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,_r(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,Fo)}_blur(e,n,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=c;let h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ys-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ys;m>ys&&Ae(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);let p=[],y=0;for(let w=0;w<ys;++w){let x=w/v,T=Math.exp(-x*x/2);p.push(T),w===0?y+=T:w<m&&(y+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;let b=this._sizeLods[s],R=3*b*(s>E-qi?s-E+qi:0),S=4*(this._cubeSize-b);_r(n,R,S,3*b,2*b),l.setRenderTarget(n),l.render(d,Fo)}};function nM(t){let e=[],n=[],i=[],s=t,r=t-qi+1+Np.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>t-qi?l=Np[o-t+qi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),E=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let S=0;S<f;S++){let w=S%3*2/3-1,x=S>2?0:-1,T=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];y.set(T,v*g*S),E.set(h,m*g*S);let N=[S,S,S,S,S,S];b.set(N,p*g*S)}let R=new It;R.setAttribute("position",new kt(y,v)),R.setAttribute("uv",new kt(E,m)),R.setAttribute("faceIndex",new kt(b,p)),i.push(new Yt(R,null)),s>qi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Lp(t,e,n){let i=new fn(t,e,n);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function iM(t,e,n){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function sM(t,e,n){let i=new Float32Array(ys),s=new P(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Fp(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Dp(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var pc=class extends fn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new co(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ki(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:ii});r.uniforms.tEquirect.value=n;let o=new Yt(s,r),a=n.minFilter;return n.minFilter===Xi&&(n.minFilter=Ht),new Sl(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}};function rM(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===El||f===bl)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new pc(g.height);return v.fromEquirectangularTexture(t,h),e.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,g=f===El||f===bl,v=f===Wi||f===_s;if(g||v){let m=n.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new fc(t)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{let y=h.image;return g&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new fc(t)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===El?h.mapping=Wi:f===bl&&(h.mapping=_s),h}function l(h){let f=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function oM(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Qa("WebGLRenderer: "+i+" extension not supported."),s}}}function aM(t,e,n,i){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],t.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let y=f.array;v=f.version;for(let E=0,b=y.length;E<b;E+=3){let R=y[E+0],S=y[E+1],w=y[E+2];h.push(R,S,S,w,w,R)}}else{let y=g.array;v=g.version;for(let E=0,b=y.length/3-1;E<b;E+=3){let R=E+0,S=E+1,w=E+2;h.push(R,S,S,w,w,R)}}let m=new(g.count>=65535?so:io)(h,1);m.version=v;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function lM(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,r,d*o),n.update(h,i,1)}function c(d,h,f){f!==0&&(t.drawElementsInstanced(i,h,r,d*o,f),n.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];n.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function cM(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:we("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function uM(t,e,n){let i=new WeakMap,s=new St;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let T=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let b=a.attributes.position.count*E,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*R*4*d),w=new to(S,b,R,d);w.type=En,w.needsUpdate=!0;let x=E*4;for(let N=0;N<d;N++){let I=m[N],D=p[N],k=y[N],z=b*R*4*N;for(let A=0;A<I.count;A++){let L=A*x;f===!0&&(s.fromBufferAttribute(I,A),S[z+L+0]=s.x,S[z+L+1]=s.y,S[z+L+2]=s.z,S[z+L+3]=0),g===!0&&(s.fromBufferAttribute(D,A),S[z+L+4]=s.x,S[z+L+5]=s.y,S[z+L+6]=s.z,S[z+L+7]=0),v===!0&&(s.fromBufferAttribute(k,A),S[z+L+8]=s.x,S[z+L+9]=s.y,S[z+L+10]=s.z,S[z+L+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new Ce(b,R)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function hM(t,e,n,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}var dM={[eh]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[nh]:"CINEON_TONE_MAPPING",[ih]:"ACES_FILMIC_TONE_MAPPING",[rh]:"AGX_TONE_MAPPING",[oh]:"NEUTRAL_TONE_MAPPING",[sh]:"CUSTOM_TONE_MAPPING"};function fM(t,e,n,i,s){let r=new fn(e,n,{type:t,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Si(e,n):void 0}),o=new fn(e,n,{type:si,depthBuffer:!1,stencilBuffer:!1}),a=new It;a.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new lt([0,2,0,0,2,0],2));let l=new ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Yt(a,l),u=new hr(-1,1,1,-1,0,1),d=null,h=null,f=!1,g,v=null,m=[],p=!1;this.setSize=function(y,E){r.setSize(y,E),o.setSize(y,E);for(let b=0;b<m.length;b++){let R=m[b];R.setSize&&R.setSize(y,E)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;let E=r.width,b=r.height;for(let R=0;R<m.length;R++){let S=m[R];S.setSize&&S.setSize(E,b)}},this.begin=function(y,E){if(f||y.toneMapping===Vn&&m.length===0)return!1;if(v=E,E!==null){let b=E.width,R=E.height;(r.width!==b||r.height!==R)&&this.setSize(b,R)}return p===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=Vn,!0},this.hasRenderPass=function(){return p},this.end=function(y,E){y.toneMapping=g,f=!0;let b=r,R=o;for(let S=0;S<m.length;S++){let w=m[S];if(w.enabled!==!1&&(w.render(y,R,b,E),w.needsSwap!==!1)){let x=b;b=R,R=x}}if(d!==y.outputColorSpace||h!==y.toneMapping){d=y.outputColorSpace,h=y.toneMapping,l.defines={},Ze.getTransfer(d)===tt&&(l.defines.SRGB_TRANSFER="");let S=dM[h];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(v),y.render(c,u),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var tm=new nn,Rh=new Si(1,1),nm=new to,im=new nl,sm=new co,Op=[],Up=[],Bp=new Float32Array(16),kp=new Float32Array(9),Vp=new Float32Array(4);function yr(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Op[s];if(r===void 0&&(r=new Float32Array(s),Op[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xc(t,e){let n=Up[e];n===void 0&&(n=new Int32Array(e),Up[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function pM(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function mM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function gM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function xM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function _M(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Ft(n,i))return;Vp.set(i),t.uniformMatrix2fv(this.addr,!1,Vp),Dt(n,i)}}function vM(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Ft(n,i))return;kp.set(i),t.uniformMatrix3fv(this.addr,!1,kp),Dt(n,i)}}function yM(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Ft(n,i))return;Bp.set(i),t.uniformMatrix4fv(this.addr,!1,Bp),Dt(n,i)}}function SM(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function MM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function EM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function bM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function AM(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function TM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function CM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function wM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function RM(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Rh.compareFunction=n.isReversedDepthBuffer()?uc:cc,r=Rh):r=tm,n.setTexture2D(e||r,s)}function IM(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||im,s)}function NM(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||sm,s)}function PM(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||nm,s)}function LM(t){switch(t){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return xM;case 35674:return _M;case 35675:return vM;case 35676:return yM;case 5124:case 35670:return SM;case 35667:case 35671:return MM;case 35668:case 35672:return EM;case 35669:case 35673:return bM;case 5125:return AM;case 36294:return TM;case 36295:return CM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return PM}}function FM(t,e){t.uniform1fv(this.addr,e)}function DM(t,e){let n=yr(e,this.size,2);t.uniform2fv(this.addr,n)}function OM(t,e){let n=yr(e,this.size,3);t.uniform3fv(this.addr,n)}function UM(t,e){let n=yr(e,this.size,4);t.uniform4fv(this.addr,n)}function BM(t,e){let n=yr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kM(t,e){let n=yr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function VM(t,e){let n=yr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zM(t,e){t.uniform1iv(this.addr,e)}function HM(t,e){t.uniform2iv(this.addr,e)}function GM(t,e){t.uniform3iv(this.addr,e)}function WM(t,e){t.uniform4iv(this.addr,e)}function XM(t,e){t.uniform1uiv(this.addr,e)}function $M(t,e){t.uniform2uiv(this.addr,e)}function YM(t,e){t.uniform3uiv(this.addr,e)}function qM(t,e){t.uniform4uiv(this.addr,e)}function ZM(t,e,n){let i=this.cache,s=e.length,r=xc(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Rh:o=tm;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function KM(t,e,n){let i=this.cache,s=e.length,r=xc(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||im,r[o])}function JM(t,e,n){let i=this.cache,s=e.length,r=xc(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||sm,r[o])}function jM(t,e,n){let i=this.cache,s=e.length,r=xc(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||nm,r[o])}function QM(t){switch(t){case 5126:return FM;case 35664:return DM;case 35665:return OM;case 35666:return UM;case 35674:return BM;case 35675:return kM;case 35676:return VM;case 5124:case 35670:return zM;case 35667:case 35671:return HM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return $M;case 36295:return YM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return ZM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return jM}}var Ih=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=LM(n.type)}},Nh=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=QM(n.type)}},Ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,n[a.id],i)}}},Ch=/(\w+)(\])?(\[|\.)?/g;function zp(t,e){t.seq.push(e),t.map[e.id]=e}function eE(t,e,n){let i=t.name,s=i.length;for(Ch.lastIndex=0;;){let r=Ch.exec(i),o=Ch.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zp(n,c===void 0?new Ih(a,t,e):new Nh(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Ph(a),zp(n,d)),n=d}}}var vr=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);eE(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in n&&i.push(o)}return i}};function Hp(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var tE=37297,nE=0;function iE(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Gp=new Le;function sE(t){Ze._getMatrix(Gp,Ze.workingColorSpace,t);let e=`mat3( ${Gp.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Qr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Wp(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+iE(t.getShaderSource(e),a)}else return r}function rE(t,e){let n=sE(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var oE={[eh]:"Linear",[th]:"Reinhard",[nh]:"Cineon",[ih]:"ACESFilmic",[rh]:"AgX",[oh]:"Neutral",[sh]:"Custom"};function aE(t,e){let n=oE[e];return n===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var dc=new P;function lE(){Ze.getLuminanceCoefficients(dc);let t=dc.x.toFixed(4),e=dc.y.toFixed(4),n=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function uE(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hE(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Oo(t){return t!==""}function Xp(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $p(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(t){return t.replace(dE,pE)}var fE=new Map;function pE(t,e){let n=He[e];if(n===void 0){let i=fE.get(e);if(i!==void 0)n=He[i],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lh(n)}var mE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(t){return t.replace(mE,gE)}function gE(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var xE={[Eo]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function _E(t){return xE[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vE={[Wi]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE_UV"};function yE(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":vE[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var SE={[_s]:"ENVMAP_MODE_REFRACTION"};function ME(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":SE[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var EE={[Qu]:"ENVMAP_BLENDING_MULTIPLY",[fp]:"ENVMAP_BLENDING_MIX",[pp]:"ENVMAP_BLENDING_ADD"};function bE(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":EE[t.combine]||"ENVMAP_BLENDING_NONE"}function AE(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function TE(t,e,n,i){let s=t.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,l=_E(n),c=yE(n),u=ME(n),d=bE(n),h=AE(n),f=cE(n),g=uE(r),v=s.createProgram(),m,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Oo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Oo).join(`
`),p.length>0&&(p+=`
`)):(m=[qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),p=[qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vn?"#define TONE_MAPPING":"",n.toneMapping!==Vn?He.tonemapping_pars_fragment:"",n.toneMapping!==Vn?aE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,rE("linearToOutputTexel",n.outputColorSpace),lE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),o=Lh(o),o=Xp(o,n),o=$p(o,n),a=Lh(a),a=Xp(a,n),a=$p(a,n),o=Yp(o),a=Yp(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=y+m+o,b=y+p+a,R=Hp(s,s.VERTEX_SHADER,E),S=Hp(s,s.FRAGMENT_SHADER,b);s.attachShader(v,R),s.attachShader(v,S),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(I){if(t.debug.checkShaderErrors){let D=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(R)||"",z=s.getShaderInfoLog(S)||"",A=D.trim(),L=k.trim(),F=z.trim(),X=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,R,S);else{let j=Wp(s,R,"vertex"),te=Wp(s,S,"fragment");we("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+A+`
`+j+`
`+te)}else A!==""?Ae("WebGLProgram: Program Info Log:",A):(L===""||F==="")&&(Y=!1);Y&&(I.diagnostics={runnable:X,programLog:A,vertexShader:{log:L,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(R),s.deleteShader(S),x=new vr(s,v),T=hE(s,v)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(v,tE)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=S,this}var CE=0,Fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Dh(e),n.set(e,i)),i}},Dh=class{constructor(e){this.id=CE++,this.code=e,this.usedTimes=0}};function wE(t){return t===Yi||t===No||t===Po}function RE(t,e,n,i,s,r){let o=new rr,a=new Fh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,T,N,I,D,k){let z=I.fog,A=D.geometry,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||L,F),Y=X&&X.mapping===Ao?X.image.height:null,j=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Ae("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let te=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,me=te!==void 0?te.length:0,Oe=0;A.morphAttributes.position!==void 0&&(Oe=1),A.morphAttributes.normal!==void 0&&(Oe=2),A.morphAttributes.color!==void 0&&(Oe=3);let Ke,Ne,Z,ce;if(j){let Ue=oi[j];Ke=Ue.vertexShader,Ne=Ue.fragmentShader}else Ke=x.vertexShader,Ne=x.fragmentShader,a.update(x),Z=a.getVertexShaderID(x),ce=a.getFragmentShaderID(x);let re=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),De=D.isInstancedMesh===!0,Ie=D.isBatchedMesh===!0,vt=!!x.map,Ye=!!x.matcap,st=!!X,gt=!!x.aoMap,$e=!!x.lightMap,Pt=!!x.bumpMap,yt=!!x.normalMap,ln=!!x.displacementMap,U=!!x.emissiveMap,Lt=!!x.metalnessMap,qe=!!x.roughnessMap,pt=x.anisotropy>0,ue=x.clearcoat>0,Mt=x.dispersion>0,C=x.iridescence>0,_=x.sheen>0,V=x.transmission>0,K=pt&&!!x.anisotropyMap,ee=ue&&!!x.clearcoatMap,ne=ue&&!!x.clearcoatNormalMap,le=ue&&!!x.clearcoatRoughnessMap,$=C&&!!x.iridescenceMap,J=C&&!!x.iridescenceThicknessMap,pe=_&&!!x.sheenColorMap,_e=_&&!!x.sheenRoughnessMap,oe=!!x.specularMap,ie=!!x.specularColorMap,Pe=!!x.specularIntensityMap,ke=V&&!!x.transmissionMap,et=V&&!!x.thicknessMap,O=!!x.gradientMap,se=!!x.alphaMap,q=x.alphaTest>0,ge=!!x.alphaHash,ae=!!x.extensions,Q=Vn;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Q=t.toneMapping);let Se={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:Ke,fragmentShader:Ne,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ie,batchingColor:Ie&&D._colorsTexture!==null,instancing:De,instancingColor:De&&D.instanceColor!==null,instancingMorph:De&&D.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:vt,matcap:Ye,envMap:st,envMapMode:st&&X.mapping,envMapCubeUVHeight:Y,aoMap:gt,lightMap:$e,bumpMap:Pt,normalMap:yt,displacementMap:ln,emissiveMap:U,normalMapObjectSpace:yt&&x.normalMapType===xp,normalMapTangentSpace:yt&&x.normalMapType===ph,packedNormalMap:yt&&x.normalMapType===ph&&wE(x.normalMap.format),metalnessMap:Lt,roughnessMap:qe,anisotropy:pt,anisotropyMap:K,clearcoat:ue,clearcoatMap:ee,clearcoatNormalMap:ne,clearcoatRoughnessMap:le,dispersion:Mt,iridescence:C,iridescenceMap:$,iridescenceThicknessMap:J,sheen:_,sheenColorMap:pe,sheenRoughnessMap:_e,specularMap:oe,specularColorMap:ie,specularIntensityMap:Pe,transmission:V,transmissionMap:ke,thicknessMap:et,gradientMap:O,opaque:x.transparent===!1&&x.blending===ms&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:q,alphaHash:ge,combine:x.combine,mapUv:vt&&g(x.map.channel),aoMapUv:gt&&g(x.aoMap.channel),lightMapUv:$e&&g(x.lightMap.channel),bumpMapUv:Pt&&g(x.bumpMap.channel),normalMapUv:yt&&g(x.normalMap.channel),displacementMapUv:ln&&g(x.displacementMap.channel),emissiveMapUv:U&&g(x.emissiveMap.channel),metalnessMapUv:Lt&&g(x.metalnessMap.channel),roughnessMapUv:qe&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:ee&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(x.sheenRoughnessMap.channel),specularMapUv:oe&&g(x.specularMap.channel),specularColorMapUv:ie&&g(x.specularColorMap.channel),specularIntensityMapUv:Pe&&g(x.specularIntensityMap.channel),transmissionMapUv:ke&&g(x.transmissionMap.channel),thicknessMapUv:et&&g(x.thicknessMap.channel),alphaMapUv:se&&g(x.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(yt||pt),vertexNormals:!!A.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!A.attributes.uv&&(vt||se),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||A.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Re,skinning:D.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Q,decodeVideoTexture:vt&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:U&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)T.push(N),T.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(p(T,x),y(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function E(x){let T=f[x.type],N;if(T){let I=oi[T];N=Rp.clone(I.uniforms)}else N=x.uniforms;return N}function b(x,T){let N=u.get(T);return N!==void 0?++N.usedTimes:(N=new TE(t,T,x,s),c.push(N),u.set(T,N)),N}function R(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:b,releaseProgram:R,releaseShaderCache:S,programs:c,dispose:w}}function IE(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function NE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Zp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Kp(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,v,m,p){let y=t[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},t[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=o(h),y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=m,y.group=p),e++,y}function l(h,f,g,v,m,p){let y=a(h,f,g,v,m,p);g.transmission>0?i.push(y):g.transparent===!0?s.push(y):n.push(y)}function c(h,f,g,v,m,p){let y=a(h,f,g,v,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):n.unshift(y)}function u(h,f){n.length>1&&n.sort(h||NE),i.length>1&&i.sort(f||Zp),s.length>1&&s.sort(f||Zp)}function d(){for(let h=e,f=t.length;h<f;h++){let g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function PE(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;return r===void 0?(o=new Kp,t.set(i,[o])):s>=r.length?(o=new Kp,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function LE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new ze};break;case"SpotLight":n={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function FE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var DE=0;function OE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function UE(t){let e=new LE,n=FE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new at,o=new at;function a(c){let u=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,E=0,b=0,R=0,S=0,w=0;c.sort(OE);for(let T=0,N=c.length;T<N;T++){let I=c[T],D=I.color,k=I.intensity,z=I.distance,A=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Yi?A=I.shadow.map.texture:A=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=D.r*k,d+=D.g*k,h+=D.b*k;else if(I.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(I.sh.coefficients[L],k);w++}else if(I.isDirectionalLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let F=I.shadow,X=n.get(I);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=A,i.directionalShadowMatrix[f]=I.shadow.matrix,y++}i.directional[f]=L,f++}else if(I.isSpotLight){let L=e.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(D).multiplyScalar(k),L.distance=z,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,i.spot[v]=L;let F=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,F.updateMatrices(I),I.castShadow&&S++),i.spotLightMatrix[v]=F.matrix,I.castShadow){let X=n.get(I);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=A,b++}v++}else if(I.isRectAreaLight){let L=e.get(I);L.color.copy(D).multiplyScalar(k),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=L,m++}else if(I.isPointLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),L.distance=I.distance,L.decay=I.decay,I.castShadow){let F=I.shadow,X=n.get(I);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,X.shadowCameraNear=F.camera.near,X.shadowCameraFar=F.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=A,i.pointShadowMatrix[g]=I.shadow.matrix,E++}i.point[g]=L,g++}else if(I.isHemisphereLight){let L=e.get(I);L.skyColor.copy(I.color).multiplyScalar(k),L.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[p]=L,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==E||x.numSpotShadows!==b||x.numSpotMaps!==R||x.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+R-S,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=w,x.directionalLength=f,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=E,x.numSpotShadows=b,x.numSpotMaps=R,x.numLightProbes=w,i.version=DE++)}function l(c,u){let d=0,h=0,f=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let E=c[p];if(E.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(E.isSpotLight){let b=i.spot[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(E.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let b=i.point[h];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){let b=i.hemi[v];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Jp(t){let e=new UE(t),n=[],i=[],s=[];function r(h){d.camera=h,n.length=0,i.length=0,s.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function BE(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Jp(t),e.set(s,[a])):r>=o.length?(a=new Jp(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var kE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zE=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],HE=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],jp=new at,Do=new P,wh=new P;function GE(t,e,n){let i=new ar,s=new Ce,r=new Ce,o=new St,a=new cl,l=new ul,c={},u=n.maxTextureSize,d={[_i]:Jt,[Jt]:_i,[Mn]:Mn},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:kE,fragmentShader:VE}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new It;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Yt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let p=this.type;this.render=function(S,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===qf&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Eo);let T=t.getRenderTarget(),N=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),D=t.state;D.setBlending(ii),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=p!==this.type;k&&w.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(A=>A.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,A=S.length;z<A;z++){let L=S[z],F=L.shadow;if(F===void 0){Ae("WebGLShadowMap:",L,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let X=F.getFrameExtents();s.multiply(X),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,F.mapSize.y=r.y));let Y=t.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Y,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===pr){if(L.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new fn(s.x,s.y,{format:Yi,type:si,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),F.map.texture.name=L.name+".shadowMap",F.map.depthTexture=new Si(s.x,s.y,En),F.map.depthTexture.name=L.name+".shadowMapDepth",F.map.depthTexture.format=ei,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Vt,F.map.depthTexture.magFilter=Vt}else L.isPointLight?(F.map=new pc(s.x),F.map.depthTexture=new ol(s.x,zn)):(F.map=new fn(s.x,s.y),F.map.depthTexture=new Si(s.x,s.y,zn)),F.map.depthTexture.name=L.name+".shadowMap",F.map.depthTexture.format=ei,this.type===Eo?(F.map.depthTexture.compareFunction=Y?uc:cc,F.map.depthTexture.minFilter=Ht,F.map.depthTexture.magFilter=Ht):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Vt,F.map.depthTexture.magFilter=Vt);F.camera.updateProjectionMatrix()}let j=F.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<j;te++){if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,te),t.clear();else{te===0&&(t.setRenderTarget(F.map),t.clear());let me=F.getViewport(te);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),D.viewport(o)}if(L.isPointLight){let me=F.camera,Oe=F.matrix,Ke=L.distance||me.far;Ke!==me.far&&(me.far=Ke,me.updateProjectionMatrix()),Do.setFromMatrixPosition(L.matrixWorld),me.position.copy(Do),wh.copy(me.position),wh.add(zE[te]),me.up.copy(HE[te]),me.lookAt(wh),me.updateMatrixWorld(),Oe.makeTranslation(-Do.x,-Do.y,-Do.z),jp.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),F._frustum.setFromProjectionMatrix(jp,me.coordinateSystem,me.reversedDepth)}else F.updateMatrices(L);i=F.getFrustum(),b(w,x,F.camera,L,this.type)}F.isPointLightShadow!==!0&&this.type===pr&&y(F,x),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(T,N,I)};function y(S,w){let x=e.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new fn(s.x,s.y,{format:Yi,type:si})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(w,null,x,h,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(w,null,x,f,v,null)}function E(S,w,x,T){let N=null,I=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)N=I;else if(N=x.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=N.uuid,k=w.uuid,z=c[D];z===void 0&&(z={},c[D]=z);let A=z[k];A===void 0&&(A=N.clone(),z[k]=A,w.addEventListener("dispose",R)),N=A}if(N.visible=w.visible,N.wireframe=w.wireframe,T===pr?N.side=w.shadowSide!==null?w.shadowSide:w.side:N.side=w.shadowSide!==null?w.shadowSide:d[w.side],N.alphaMap=w.alphaMap,N.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,N.map=w.map,N.clipShadows=w.clipShadows,N.clippingPlanes=w.clippingPlanes,N.clipIntersection=w.clipIntersection,N.displacementMap=w.displacementMap,N.displacementScale=w.displacementScale,N.displacementBias=w.displacementBias,N.wireframeLinewidth=w.wireframeLinewidth,N.linewidth=w.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let D=t.properties.get(N);D.light=x}return N}function b(S,w,x,T,N){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===pr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let k=e.update(S),z=S.material;if(Array.isArray(z)){let A=k.groups;for(let L=0,F=A.length;L<F;L++){let X=A[L],Y=z[X.materialIndex];if(Y&&Y.visible){let j=E(S,Y,T,N);S.onBeforeShadow(t,S,w,x,k,j,X),t.renderBufferDirect(x,null,k,j,S,X),S.onAfterShadow(t,S,w,x,k,j,X)}}}else if(z.visible){let A=E(S,z,T,N);S.onBeforeShadow(t,S,w,x,k,A,null),t.renderBufferDirect(x,null,k,A,S,null),S.onAfterShadow(t,S,w,x,k,A,null)}}let D=S.children;for(let k=0,z=D.length;k<z;k++)b(D[k],w,x,T,N)}function R(S){S.target.removeEventListener("dispose",R);for(let x in c){let T=c[x],N=S.target.uuid;N in T&&(T[N].dispose(),delete T[N])}}}function WE(t,e){function n(){let O=!1,se=new St,q=null,ge=new St(0,0,0,0);return{setMask:function(ae){q!==ae&&!O&&(t.colorMask(ae,ae,ae,ae),q=ae)},setLocked:function(ae){O=ae},setClear:function(ae,Q,Se,Ue,At){At===!0&&(ae*=Ue,Q*=Ue,Se*=Ue),se.set(ae,Q,Se,Ue),ge.equals(se)===!1&&(t.clearColor(ae,Q,Se,Ue),ge.copy(se))},reset:function(){O=!1,q=null,ge.set(-1,0,0,0)}}}function i(){let O=!1,se=!1,q=null,ge=null,ae=null;return{setReversed:function(Q){if(se!==Q){let Se=e.get("EXT_clip_control");Q?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),se=Q;let Ue=ae;ae=null,this.setClear(Ue)}},getReversed:function(){return se},setTest:function(Q){Q?re(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(Q){q!==Q&&!O&&(t.depthMask(Q),q=Q)},setFunc:function(Q){if(se&&(Q=Cp[Q]),ge!==Q){switch(Q){case Ga:t.depthFunc(t.NEVER);break;case Wa:t.depthFunc(t.ALWAYS);break;case Xa:t.depthFunc(t.LESS);break;case gs:t.depthFunc(t.LEQUAL);break;case $a:t.depthFunc(t.EQUAL);break;case Ya:t.depthFunc(t.GEQUAL);break;case qa:t.depthFunc(t.GREATER);break;case Za:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Q}},setLocked:function(Q){O=Q},setClear:function(Q){ae!==Q&&(ae=Q,se&&(Q=1-Q),t.clearDepth(Q))},reset:function(){O=!1,q=null,ge=null,ae=null,se=!1}}}function s(){let O=!1,se=null,q=null,ge=null,ae=null,Q=null,Se=null,Ue=null,At=null;return{setTest:function(rt){O||(rt?re(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(rt){se!==rt&&!O&&(t.stencilMask(rt),se=rt)},setFunc:function(rt,hi,Zn){(q!==rt||ge!==hi||ae!==Zn)&&(t.stencilFunc(rt,hi,Zn),q=rt,ge=hi,ae=Zn)},setOp:function(rt,hi,Zn){(Q!==rt||Se!==hi||Ue!==Zn)&&(t.stencilOp(rt,hi,Zn),Q=rt,Se=hi,Ue=Zn)},setLocked:function(rt){O=rt},setClear:function(rt){At!==rt&&(t.clearStencil(rt),At=rt)},reset:function(){O=!1,se=null,q=null,ge=null,ae=null,Q=null,Se=null,Ue=null,At=null}}}let r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,E=null,b=null,R=null,S=null,w=null,x=new ze(0,0,0),T=0,N=!1,I=null,D=null,k=null,z=null,A=null,L=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,X=0,Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),F=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),F=X>=2);let j=null,te={},me=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),Ke=new St().fromArray(me),Ne=new St().fromArray(Oe);function Z(O,se,q,ge){let ae=new Uint8Array(4),Q=t.createTexture();t.bindTexture(O,Q),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<q;Se++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(se+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Q}let ce={};ce[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(t.DEPTH_TEST),o.setFunc(gs),Pt(!1),yt(Ku),re(t.CULL_FACE),gt(ii);function re(O){u[O]!==!0&&(t.enable(O),u[O]=!0)}function Re(O){u[O]!==!1&&(t.disable(O),u[O]=!1)}function De(O,se){return h[O]!==se?(t.bindFramebuffer(O,se),h[O]=se,O===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=se),O===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Ie(O,se){let q=g,ge=!1;if(O){q=f.get(se),q===void 0&&(q=[],f.set(se,q));let ae=O.textures;if(q.length!==ae.length||q[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,Se=ae.length;Q<Se;Q++)q[Q]=t.COLOR_ATTACHMENT0+Q;q.length=ae.length,ge=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,ge=!0);ge&&t.drawBuffers(q)}function vt(O){return v!==O?(t.useProgram(O),v=O,!0):!1}let Ye={[Bi]:t.FUNC_ADD,[Kf]:t.FUNC_SUBTRACT,[Jf]:t.FUNC_REVERSE_SUBTRACT};Ye[jf]=t.MIN,Ye[Qf]=t.MAX;let st={[ep]:t.ZERO,[tp]:t.ONE,[np]:t.SRC_COLOR,[za]:t.SRC_ALPHA,[lp]:t.SRC_ALPHA_SATURATE,[op]:t.DST_COLOR,[sp]:t.DST_ALPHA,[ip]:t.ONE_MINUS_SRC_COLOR,[Ha]:t.ONE_MINUS_SRC_ALPHA,[ap]:t.ONE_MINUS_DST_COLOR,[rp]:t.ONE_MINUS_DST_ALPHA,[cp]:t.CONSTANT_COLOR,[up]:t.ONE_MINUS_CONSTANT_COLOR,[hp]:t.CONSTANT_ALPHA,[dp]:t.ONE_MINUS_CONSTANT_ALPHA};function gt(O,se,q,ge,ae,Q,Se,Ue,At,rt){if(O===ii){m===!0&&(Re(t.BLEND),m=!1);return}if(m===!1&&(re(t.BLEND),m=!0),O!==Zf){if(O!==p||rt!==N){if((y!==Bi||R!==Bi)&&(t.blendEquation(t.FUNC_ADD),y=Bi,R=Bi),rt)switch(O){case ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bo:t.blendFunc(t.ONE,t.ONE);break;case Ju:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ju:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:we("WebGLState: Invalid blending: ",O);break}else switch(O){case ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ju:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ju:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",O);break}E=null,b=null,S=null,w=null,x.set(0,0,0),T=0,p=O,N=rt}return}ae=ae||se,Q=Q||q,Se=Se||ge,(se!==y||ae!==R)&&(t.blendEquationSeparate(Ye[se],Ye[ae]),y=se,R=ae),(q!==E||ge!==b||Q!==S||Se!==w)&&(t.blendFuncSeparate(st[q],st[ge],st[Q],st[Se]),E=q,b=ge,S=Q,w=Se),(Ue.equals(x)===!1||At!==T)&&(t.blendColor(Ue.r,Ue.g,Ue.b,At),x.copy(Ue),T=At),p=O,N=!1}function $e(O,se){O.side===Mn?Re(t.CULL_FACE):re(t.CULL_FACE);let q=O.side===Jt;se&&(q=!q),Pt(q),O.blending===ms&&O.transparent===!1?gt(ii):gt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ge=O.stencilWrite;a.setTest(ge),ge&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),U(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(O){I!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),I=O)}function yt(O){O!==$f?(re(t.CULL_FACE),O!==D&&(O===Ku?t.cullFace(t.BACK):O===Yf?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),D=O}function ln(O){O!==k&&(F&&t.lineWidth(O),k=O)}function U(O,se,q){O?(re(t.POLYGON_OFFSET_FILL),(z!==se||A!==q)&&(z=se,A=q,o.getReversed()&&(se=-se),t.polygonOffset(se,q))):Re(t.POLYGON_OFFSET_FILL)}function Lt(O){O?re(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function qe(O){O===void 0&&(O=t.TEXTURE0+L-1),j!==O&&(t.activeTexture(O),j=O)}function pt(O,se,q){q===void 0&&(j===null?q=t.TEXTURE0+L-1:q=j);let ge=te[q];ge===void 0&&(ge={type:void 0,texture:void 0},te[q]=ge),(ge.type!==O||ge.texture!==se)&&(j!==q&&(t.activeTexture(q),j=q),t.bindTexture(O,se||ce[O]),ge.type=O,ge.texture=se)}function ue(){let O=te[j];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Mt(){try{t.compressedTexImage2D(...arguments)}catch(O){we("WebGLState:",O)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(O){we("WebGLState:",O)}}function _(){try{t.texSubImage2D(...arguments)}catch(O){we("WebGLState:",O)}}function V(){try{t.texSubImage3D(...arguments)}catch(O){we("WebGLState:",O)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(O){we("WebGLState:",O)}}function ee(){try{t.compressedTexSubImage3D(...arguments)}catch(O){we("WebGLState:",O)}}function ne(){try{t.texStorage2D(...arguments)}catch(O){we("WebGLState:",O)}}function le(){try{t.texStorage3D(...arguments)}catch(O){we("WebGLState:",O)}}function $(){try{t.texImage2D(...arguments)}catch(O){we("WebGLState:",O)}}function J(){try{t.texImage3D(...arguments)}catch(O){we("WebGLState:",O)}}function pe(O){return d[O]!==void 0?d[O]:t.getParameter(O)}function _e(O,se){d[O]!==se&&(t.pixelStorei(O,se),d[O]=se)}function oe(O){Ke.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Ke.copy(O))}function ie(O){Ne.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Ne.copy(O))}function Pe(O,se){let q=c.get(se);q===void 0&&(q=new WeakMap,c.set(se,q));let ge=q.get(O);ge===void 0&&(ge=t.getUniformBlockIndex(se,O.name),q.set(O,ge))}function ke(O,se){let ge=c.get(se).get(O);l.get(se)!==ge&&(t.uniformBlockBinding(se,ge,O.__bindingPointIndex),l.set(se,ge))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,te={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,E=null,b=null,R=null,S=null,w=null,x=new ze(0,0,0),T=0,N=!1,I=null,D=null,k=null,z=null,A=null,Ke.set(0,0,t.canvas.width,t.canvas.height),Ne.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Re,bindFramebuffer:De,drawBuffers:Ie,useProgram:vt,setBlending:gt,setMaterial:$e,setFlipSided:Pt,setCullFace:yt,setLineWidth:ln,setPolygonOffset:U,setScissorTest:Lt,activeTexture:qe,bindTexture:pt,unbindTexture:ue,compressedTexImage2D:Mt,compressedTexImage3D:C,texImage2D:$,texImage3D:J,pixelStorei:_e,getParameter:pe,updateUBOMapping:Pe,uniformBlockBinding:ke,texStorage2D:ne,texStorage3D:le,texSubImage2D:_,texSubImage3D:V,compressedTexSubImage2D:K,compressedTexSubImage3D:ee,scissor:oe,viewport:ie,reset:et}}function XE(t,e,n,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,_){return g?new OffscreenCanvas(C,_):eo("canvas")}function m(C,_,V){let K=1,ee=Mt(C);if((ee.width>V||ee.height>V)&&(K=V/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ne=Math.floor(K*ee.width),le=Math.floor(K*ee.height);h===void 0&&(h=v(ne,le));let $=_?v(ne,le):h;return $.width=ne,$.height=le,$.getContext("2d").drawImage(C,0,0,ne,le),Ae("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ne+"x"+le+")."),$}else return"data"in C&&Ae("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function p(C){return C.generateMipmaps}function y(C){t.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(C,_,V,K,ee,ne=!1){if(C!==null){if(t[C]!==void 0)return t[C];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le;K&&(le=e.get("EXT_texture_norm16"),le||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===t.RED&&(V===t.FLOAT&&($=t.R32F),V===t.HALF_FLOAT&&($=t.R16F),V===t.UNSIGNED_BYTE&&($=t.R8),V===t.UNSIGNED_SHORT&&le&&($=le.R16_EXT),V===t.SHORT&&le&&($=le.R16_SNORM_EXT)),_===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.R8UI),V===t.UNSIGNED_SHORT&&($=t.R16UI),V===t.UNSIGNED_INT&&($=t.R32UI),V===t.BYTE&&($=t.R8I),V===t.SHORT&&($=t.R16I),V===t.INT&&($=t.R32I)),_===t.RG&&(V===t.FLOAT&&($=t.RG32F),V===t.HALF_FLOAT&&($=t.RG16F),V===t.UNSIGNED_BYTE&&($=t.RG8),V===t.UNSIGNED_SHORT&&le&&($=le.RG16_EXT),V===t.SHORT&&le&&($=le.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.RG8UI),V===t.UNSIGNED_SHORT&&($=t.RG16UI),V===t.UNSIGNED_INT&&($=t.RG32UI),V===t.BYTE&&($=t.RG8I),V===t.SHORT&&($=t.RG16I),V===t.INT&&($=t.RG32I)),_===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.RGB8UI),V===t.UNSIGNED_SHORT&&($=t.RGB16UI),V===t.UNSIGNED_INT&&($=t.RGB32UI),V===t.BYTE&&($=t.RGB8I),V===t.SHORT&&($=t.RGB16I),V===t.INT&&($=t.RGB32I)),_===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.RGBA8UI),V===t.UNSIGNED_SHORT&&($=t.RGBA16UI),V===t.UNSIGNED_INT&&($=t.RGBA32UI),V===t.BYTE&&($=t.RGBA8I),V===t.SHORT&&($=t.RGBA16I),V===t.INT&&($=t.RGBA32I)),_===t.RGB&&(V===t.UNSIGNED_SHORT&&le&&($=le.RGB16_EXT),V===t.SHORT&&le&&($=le.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),_===t.RGBA){let J=ne?Qr:Ze.getTransfer(ee);V===t.FLOAT&&($=t.RGBA32F),V===t.HALF_FLOAT&&($=t.RGBA16F),V===t.UNSIGNED_BYTE&&($=J===tt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&le&&($=le.RGBA16_EXT),V===t.SHORT&&le&&($=le.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function R(C,_){let V;return C?_===null||_===zn||_===gr?V=t.DEPTH24_STENCIL8:_===En?V=t.DEPTH32F_STENCIL8:_===mr&&(V=t.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zn||_===gr?V=t.DEPTH_COMPONENT24:_===En?V=t.DEPTH_COMPONENT32F:_===mr&&(V=t.DEPTH_COMPONENT16),V}function S(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Vt&&C.minFilter!==Ht?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function w(C){let _=C.target;_.removeEventListener("dispose",w),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(C){let _=C.target;_.removeEventListener("dispose",x),I(_)}function T(C){let _=i.get(C);if(_.__webglInit===void 0)return;let V=C.source,K=f.get(V);if(K){let ee=K[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&N(C),Object.keys(K).length===0&&f.delete(V)}i.remove(C)}function N(C){let _=i.get(C);t.deleteTexture(_.__webglTexture);let V=C.source,K=f.get(V);delete K[_.__cacheKey],o.memory.textures--}function I(C){let _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let ee=0;ee<_.__webglFramebuffer[K].length;ee++)t.deleteFramebuffer(_.__webglFramebuffer[K][ee]);else t.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)t.deleteFramebuffer(_.__webglFramebuffer[K]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let V=C.textures;for(let K=0,ee=V.length;K<ee;K++){let ne=i.get(V[K]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(V[K])}i.remove(C)}let D=0;function k(){D=0}function z(){return D}function A(C){D=C}function L(){let C=D;return C>=s.maxTextures&&Ae("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function F(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function X(C,_){let V=i.get(C);if(C.isVideoTexture&&pt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let K=C.image;if(K===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(V,C,_);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+_)}function Y(C,_){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Re(V,C,_);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+_)}function j(C,_){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Re(V,C,_);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+_)}function te(C,_){let V=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){De(V,C,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+_)}let me={[Ka]:t.REPEAT,[jn]:t.CLAMP_TO_EDGE,[Ja]:t.MIRRORED_REPEAT},Oe={[Vt]:t.NEAREST,[mp]:t.NEAREST_MIPMAP_NEAREST,[To]:t.NEAREST_MIPMAP_LINEAR,[Ht]:t.LINEAR,[Al]:t.LINEAR_MIPMAP_NEAREST,[Xi]:t.LINEAR_MIPMAP_LINEAR},Ke={[_p]:t.NEVER,[Ep]:t.ALWAYS,[vp]:t.LESS,[cc]:t.LEQUAL,[yp]:t.EQUAL,[uc]:t.GEQUAL,[Sp]:t.GREATER,[Mp]:t.NOTEQUAL};function Ne(C,_){if(_.type===En&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ht||_.magFilter===Al||_.magFilter===To||_.magFilter===Xi||_.minFilter===Ht||_.minFilter===Al||_.minFilter===To||_.minFilter===Xi)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,me[_.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,me[_.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,me[_.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Oe[_.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Oe[_.minFilter]),_.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ke[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==To&&_.minFilter!==Xi||_.type===En&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Z(C,_){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",w));let K=_.source,ee=f.get(K);ee===void 0&&(ee={},f.set(K,ee));let ne=F(_);if(ne!==C.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ee[ne].usedTimes++;let le=ee[C.__cacheKey];le!==void 0&&(ee[C.__cacheKey].usedTimes--,le.usedTimes===0&&N(_)),C.__cacheKey=ne,C.__webglTexture=ee[ne].texture}return V}function ce(C,_,V){return Math.floor(Math.floor(C/V)/_)}function re(C,_,V,K){let ne=C.updateRanges;if(ne.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,V,K,_.data);else{ne.sort((_e,oe)=>_e.start-oe.start);let le=0;for(let _e=1;_e<ne.length;_e++){let oe=ne[le],ie=ne[_e],Pe=oe.start+oe.count,ke=ce(ie.start,_.width,4),et=ce(oe.start,_.width,4);ie.start<=Pe+1&&ke===et&&ce(ie.start+ie.count-1,_.width,4)===ke?oe.count=Math.max(oe.count,ie.start+ie.count-oe.start):(++le,ne[le]=ie)}ne.length=le+1;let $=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),pe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let _e=0,oe=ne.length;_e<oe;_e++){let ie=ne[_e],Pe=Math.floor(ie.start/4),ke=Math.ceil(ie.count/4),et=Pe%_.width,O=Math.floor(Pe/_.width),se=ke,q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,et),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,et,O,se,q,V,K,_.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,pe)}}function Re(C,_,V){let K=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=t.TEXTURE_3D);let ee=Z(C,_),ne=_.source;n.bindTexture(K,C.__webglTexture,t.TEXTURE0+V);let le=i.get(ne);if(ne.version!==le.__version||ee===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let q=Ze.getPrimaries(Ze.workingColorSpace),ge=_.colorSpace===Mi?null:Ze.getPrimaries(_.colorSpace),ae=_.colorSpace===Mi||q===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let J=m(_.image,!1,s.maxTextureSize);J=ue(_,J);let pe=r.convert(_.format,_.colorSpace),_e=r.convert(_.type),oe=b(_.internalFormat,pe,_e,_.normalized,_.colorSpace,_.isVideoTexture);Ne(K,_);let ie,Pe=_.mipmaps,ke=_.isVideoTexture!==!0,et=le.__version===void 0||ee===!0,O=ne.dataReady,se=S(_,J);if(_.isDepthTexture)oe=R(_.format===$i,_.type),et&&(ke?n.texStorage2D(t.TEXTURE_2D,1,oe,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,oe,J.width,J.height,0,pe,_e,null));else if(_.isDataTexture)if(Pe.length>0){ke&&et&&n.texStorage2D(t.TEXTURE_2D,se,oe,Pe[0].width,Pe[0].height);for(let q=0,ge=Pe.length;q<ge;q++)ie=Pe[q],ke?O&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ie.width,ie.height,pe,_e,ie.data):n.texImage2D(t.TEXTURE_2D,q,oe,ie.width,ie.height,0,pe,_e,ie.data);_.generateMipmaps=!1}else ke?(et&&n.texStorage2D(t.TEXTURE_2D,se,oe,J.width,J.height),O&&re(_,J,pe,_e)):n.texImage2D(t.TEXTURE_2D,0,oe,J.width,J.height,0,pe,_e,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ke&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,oe,Pe[0].width,Pe[0].height,J.depth);for(let q=0,ge=Pe.length;q<ge;q++)if(ie=Pe[q],_.format!==bn)if(pe!==null)if(ke){if(O)if(_.layerUpdates.size>0){let ae=Mh(ie.width,ie.height,_.format,_.type);for(let Q of _.layerUpdates){let Se=ie.data.subarray(Q*ae/ie.data.BYTES_PER_ELEMENT,(Q+1)*ae/ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,Q,ie.width,ie.height,1,pe,Se)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ie.width,ie.height,J.depth,pe,ie.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,oe,ie.width,ie.height,J.depth,0,ie.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ie.width,ie.height,J.depth,pe,_e,ie.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,oe,ie.width,ie.height,J.depth,0,pe,_e,ie.data)}else{ke&&et&&n.texStorage2D(t.TEXTURE_2D,se,oe,Pe[0].width,Pe[0].height);for(let q=0,ge=Pe.length;q<ge;q++)ie=Pe[q],_.format!==bn?pe!==null?ke?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,ie.width,ie.height,pe,ie.data):n.compressedTexImage2D(t.TEXTURE_2D,q,oe,ie.width,ie.height,0,ie.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?O&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ie.width,ie.height,pe,_e,ie.data):n.texImage2D(t.TEXTURE_2D,q,oe,ie.width,ie.height,0,pe,_e,ie.data)}else if(_.isDataArrayTexture)if(ke){if(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,oe,J.width,J.height,J.depth),O)if(_.layerUpdates.size>0){let q=Mh(J.width,J.height,_.format,_.type);for(let ge of _.layerUpdates){let ae=J.data.subarray(ge*q/J.data.BYTES_PER_ELEMENT,(ge+1)*q/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ge,J.width,J.height,1,pe,_e,ae)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,pe,_e,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,oe,J.width,J.height,J.depth,0,pe,_e,J.data);else if(_.isData3DTexture)ke?(et&&n.texStorage3D(t.TEXTURE_3D,se,oe,J.width,J.height,J.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,pe,_e,J.data)):n.texImage3D(t.TEXTURE_3D,0,oe,J.width,J.height,J.depth,0,pe,_e,J.data);else if(_.isFramebufferTexture){if(et)if(ke)n.texStorage2D(t.TEXTURE_2D,se,oe,J.width,J.height);else{let q=J.width,ge=J.height;for(let ae=0;ae<se;ae++)n.texImage2D(t.TEXTURE_2D,ae,oe,q,ge,0,pe,_e,null),q>>=1,ge>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){let q=t.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),J.parentNode!==q){q.appendChild(J),d.add(_),q.onpaint=Ue=>{let At=Ue.changedElements;for(let rt of d)At.includes(rt.image)&&(rt.needsUpdate=!0)},q.requestPaint();return}let ge=0,ae=t.RGBA,Q=t.RGBA,Se=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,ge,ae,Q,Se,J),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(ke&&et){let q=Mt(Pe[0]);n.texStorage2D(t.TEXTURE_2D,se,oe,q.width,q.height)}for(let q=0,ge=Pe.length;q<ge;q++)ie=Pe[q],ke?O&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,pe,_e,ie):n.texImage2D(t.TEXTURE_2D,q,oe,pe,_e,ie);_.generateMipmaps=!1}else if(ke){if(et){let q=Mt(J);n.texStorage2D(t.TEXTURE_2D,se,oe,q.width,q.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,_e,J)}else n.texImage2D(t.TEXTURE_2D,0,oe,pe,_e,J);p(_)&&y(K),le.__version=ne.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function De(C,_,V){if(_.image.length!==6)return;let K=Z(C,_),ee=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);let ne=i.get(ee);if(ee.version!==ne.__version||K===!0){n.activeTexture(t.TEXTURE0+V);let le=Ze.getPrimaries(Ze.workingColorSpace),$=_.colorSpace===Mi?null:Ze.getPrimaries(_.colorSpace),J=_.colorSpace===Mi||le===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let pe=_.isCompressedTexture||_.image[0].isCompressedTexture,_e=_.image[0]&&_.image[0].isDataTexture,oe=[];for(let Q=0;Q<6;Q++)!pe&&!_e?oe[Q]=m(_.image[Q],!0,s.maxCubemapSize):oe[Q]=_e?_.image[Q].image:_.image[Q],oe[Q]=ue(_,oe[Q]);let ie=oe[0],Pe=r.convert(_.format,_.colorSpace),ke=r.convert(_.type),et=b(_.internalFormat,Pe,ke,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,se=ne.__version===void 0||K===!0,q=ee.dataReady,ge=S(_,ie);Ne(t.TEXTURE_CUBE_MAP,_);let ae;if(pe){O&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,et,ie.width,ie.height);for(let Q=0;Q<6;Q++){ae=oe[Q].mipmaps;for(let Se=0;Se<ae.length;Se++){let Ue=ae[Se];_.format!==bn?Pe!==null?O?q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,Ue.width,Ue.height,Pe,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,et,Ue.width,Ue.height,0,Ue.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,Ue.width,Ue.height,Pe,ke,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,et,Ue.width,Ue.height,0,Pe,ke,Ue.data)}}}else{if(ae=_.mipmaps,O&&se){ae.length>0&&ge++;let Q=Mt(oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,et,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(_e){O?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,oe[Q].width,oe[Q].height,Pe,ke,oe[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,et,oe[Q].width,oe[Q].height,0,Pe,ke,oe[Q].data);for(let Se=0;Se<ae.length;Se++){let At=ae[Se].image[Q].image;O?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,At.width,At.height,Pe,ke,At.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,et,At.width,At.height,0,Pe,ke,At.data)}}else{O?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,ke,oe[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,et,Pe,ke,oe[Q]);for(let Se=0;Se<ae.length;Se++){let Ue=ae[Se];O?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,Pe,ke,Ue.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,et,Pe,ke,Ue.image[Q])}}}p(_)&&y(t.TEXTURE_CUBE_MAP),ne.__version=ee.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Ie(C,_,V,K,ee,ne){let le=r.convert(V.format,V.colorSpace),$=r.convert(V.type),J=b(V.internalFormat,le,$,V.normalized,V.colorSpace),pe=i.get(_),_e=i.get(V);if(_e.__renderTarget=_,!pe.__hasExternalTextures){let oe=Math.max(1,_.width>>ne),ie=Math.max(1,_.height>>ne);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ne,J,oe,ie,_.depth,0,le,$,null):n.texImage2D(ee,ne,J,oe,ie,0,le,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),qe(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ee,_e.__webglTexture,0,Lt(_)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ee,_e.__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function vt(C,_,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),_.depthBuffer){let K=_.depthTexture,ee=K&&K.isDepthTexture?K.type:null,ne=R(_.stencilBuffer,ee),le=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;qe(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Lt(_),ne,_.width,_.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Lt(_),ne,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ne,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,C)}else{let K=_.textures;for(let ee=0;ee<K.length;ee++){let ne=K[ee],le=r.convert(ne.format,ne.colorSpace),$=r.convert(ne.type),J=b(ne.internalFormat,le,$,ne.normalized,ne.colorSpace);qe(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Lt(_),J,_.width,_.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Lt(_),J,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,J,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ye(C,_,V){let K=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(_.depthTexture);if(ee.__renderTarget=_,(!ee.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,_.depthTexture);let pe=r.convert(_.depthTexture.format),_e=r.convert(_.depthTexture.type),oe;_.depthTexture.format===ei?oe=t.DEPTH_COMPONENT24:_.depthTexture.format===$i&&(oe=t.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,oe,_.width,_.height,0,pe,_e,null)}}else X(_.depthTexture,0);let ne=ee.__webglTexture,le=Lt(_),$=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,J=_.depthTexture.format===$i?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===ei)qe(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,ne,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,ne,0);else if(_.depthTexture.format===$i)qe(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,ne,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,ne,0);else throw new Error("Unknown depthTexture format")}function st(C){let _=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){let ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=K}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(V)for(let K=0;K<6;K++)Ye(_.__webglFramebuffer[K],C,K);else{let K=C.texture.mipmaps;K&&K.length>0?Ye(_.__webglFramebuffer[0],C,0):Ye(_.__webglFramebuffer,C,0)}else if(V){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=t.createRenderbuffer(),vt(_.__webglDepthbuffer[K],C,!1);else{let ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ne)}}else{let K=C.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),vt(_.__webglDepthbuffer,C,!1);else{let ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ne)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function gt(C,_,V){let K=i.get(C);_!==void 0&&Ie(K.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&st(C)}function $e(C){let _=C.texture,V=i.get(C),K=i.get(_);C.addEventListener("dispose",x);let ee=C.textures,ne=C.isWebGLCubeRenderTarget===!0,le=ee.length>1;if(le||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=_.version,o.memory.textures++),ne){V.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[$]=[];for(let J=0;J<_.mipmaps.length;J++)V.__webglFramebuffer[$][J]=t.createFramebuffer()}else V.__webglFramebuffer[$]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)V.__webglFramebuffer[$]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(le)for(let $=0,J=ee.length;$<J;$++){let pe=i.get(ee[$]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&qe(C)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<ee.length;$++){let J=ee[$];V.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[$]);let pe=r.convert(J.format,J.colorSpace),_e=r.convert(J.type),oe=b(J.internalFormat,pe,_e,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),ie=Lt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,oe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,V.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),vt(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Ie(V.__webglFramebuffer[$][J],C,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Ie(V.__webglFramebuffer[$],C,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(_)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let $=0,J=ee.length;$<J;$++){let pe=ee[$],_e=i.get(pe),oe=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,_e.__webglTexture),Ne(oe,pe),Ie(V.__webglFramebuffer,C,pe,t.COLOR_ATTACHMENT0+$,oe,0),p(pe)&&y(oe)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,K.__webglTexture),Ne($,_),_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Ie(V.__webglFramebuffer[J],C,_,t.COLOR_ATTACHMENT0,$,J);else Ie(V.__webglFramebuffer,C,_,t.COLOR_ATTACHMENT0,$,0);p(_)&&y($),n.unbindTexture()}C.depthBuffer&&st(C)}function Pt(C){let _=C.textures;for(let V=0,K=_.length;V<K;V++){let ee=_[V];if(p(ee)){let ne=E(C),le=i.get(ee).__webglTexture;n.bindTexture(ne,le),y(ne),n.unbindTexture()}}}let yt=[],ln=[];function U(C){if(C.samples>0){if(qe(C)===!1){let _=C.textures,V=C.width,K=C.height,ee=t.COLOR_BUFFER_BIT,ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(C),$=_.length>1;if($)for(let pe=0;pe<_.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let J=C.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let pe=0;pe<_.length;pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[pe]);let _e=i.get(_[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,V,K,0,0,V,K,ee,t.NEAREST),l===!0&&(yt.length=0,ln.length=0,yt.push(t.COLOR_ATTACHMENT0+pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(yt.push(ne),ln.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ln)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let pe=0;pe<_.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,le.__webglColorRenderbuffer[pe]);let _e=i.get(_[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let _=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Lt(C){return Math.min(s.maxSamples,C.samples)}function qe(C){let _=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function pt(C){let _=o.render.frame;u.get(C)!==_&&(u.set(C,_),C.update())}function ue(C,_){let V=C.colorSpace,K=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==jr&&V!==Mi&&(Ze.getTransfer(V)===tt?(K!==bn||ee!==rn)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",V)),_}function Mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=k,this.getTextureUnits=z,this.setTextureUnits=A,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=te,this.rebindTextures=gt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function $E(t,e){function n(i,s=Mi){let r,o=Ze.getTransfer(s);if(i===rn)return t.UNSIGNED_BYTE;if(i===Cl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===wl)return t.UNSIGNED_SHORT_5_5_5_1;if(i===uh)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===hh)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===lh)return t.BYTE;if(i===ch)return t.SHORT;if(i===mr)return t.UNSIGNED_SHORT;if(i===Tl)return t.INT;if(i===zn)return t.UNSIGNED_INT;if(i===En)return t.FLOAT;if(i===si)return t.HALF_FLOAT;if(i===dh)return t.ALPHA;if(i===fh)return t.RGB;if(i===bn)return t.RGBA;if(i===ei)return t.DEPTH_COMPONENT;if(i===$i)return t.DEPTH_STENCIL;if(i===Rl)return t.RED;if(i===Il)return t.RED_INTEGER;if(i===Yi)return t.RG;if(i===Nl)return t.RG_INTEGER;if(i===Pl)return t.RGBA_INTEGER;if(i===Co||i===wo||i===Ro||i===Io)if(o===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ll||i===Fl||i===Dl||i===Ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ul||i===Bl||i===kl||i===Vl||i===zl||i===No||i===Hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ul||i===Bl)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===kl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vl)return r.COMPRESSED_R11_EAC;if(i===zl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===No)return r.COMPRESSED_RG11_EAC;if(i===Hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gl||i===Wl||i===Xl||i===$l||i===Yl||i===ql||i===Zl||i===Kl||i===Jl||i===jl||i===Ql||i===ec||i===tc||i===nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$l)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ql)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ql)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tc)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nc)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ic||i===sc||i===rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ic)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oc||i===ac||i===Po||i===lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var YE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new uo(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new pn({vertexShader:YE,fragmentShader:qE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yt(new po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uh=class extends Un{constructor(e,n){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Oh,p={},y=n.getContextAttributes(),E=null,b=null,R=[],S=[],w=new Ce,x=null,T=new $t;T.viewport=new St;let N=new $t;N.viewport=new St;let I=[T,N],D=new Ml,k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=R[Z];return ce===void 0&&(ce=new or,R[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=R[Z];return ce===void 0&&(ce=new or,R[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=R[Z];return ce===void 0&&(ce=new or,R[Z]=ce),ce.getHandSpace()};function A(Z){let ce=S.indexOf(Z.inputSource);if(ce===-1)return;let re=R[ce];re!==void 0&&(re.update(Z.inputSource,Z.frame,c||o),re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function L(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",F);for(let Z=0;Z<R.length;Z++){let ce=S[Z];ce!==null&&(S[Z]=null,R[Z].disconnect(ce))}k=null,z=null,m.reset();for(let Z in p)delete p[Z];e.setRenderTarget(E),f=null,h=null,d=null,s=null,b=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",L),s.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Re=null,De=null;y.depth&&(De=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=y.stencil?$i:ei,Re=y.stencil?gr:zn);let Ie={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ie),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new fn(h.textureWidth,h.textureHeight,{format:bn,type:rn,depthTexture:new Si(h.textureWidth,h.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new fn(f.framebufferWidth,f.framebufferHeight,{format:bn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(Z){for(let ce=0;ce<Z.removed.length;ce++){let re=Z.removed[ce],Re=S.indexOf(re);Re>=0&&(S[Re]=null,R[Re].disconnect(re))}for(let ce=0;ce<Z.added.length;ce++){let re=Z.added[ce],Re=S.indexOf(re);if(Re===-1){for(let Ie=0;Ie<R.length;Ie++)if(Ie>=S.length){S.push(re),Re=Ie;break}else if(S[Ie]===null){S[Ie]=re,Re=Ie;break}if(Re===-1)break}let De=R[Re];De&&De.connect(re)}}let X=new P,Y=new P;function j(Z,ce,re){X.setFromMatrixPosition(ce.matrixWorld),Y.setFromMatrixPosition(re.matrixWorld);let Re=X.distanceTo(Y),De=ce.projectionMatrix.elements,Ie=re.projectionMatrix.elements,vt=De[14]/(De[10]-1),Ye=De[14]/(De[10]+1),st=(De[9]+1)/De[5],gt=(De[9]-1)/De[5],$e=(De[8]-1)/De[0],Pt=(Ie[8]+1)/Ie[0],yt=vt*$e,ln=vt*Pt,U=Re/(-$e+Pt),Lt=U*-$e;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Lt),Z.translateZ(U),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),De[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let qe=vt+U,pt=Ye+U,ue=yt-Lt,Mt=ln+(Re-Lt),C=st*Ye/pt*qe,_=gt*Ye/pt*qe;Z.projectionMatrix.makePerspective(ue,Mt,C,_,qe,pt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function te(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ce=Z.near,re=Z.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(re=m.depthFar)),D.near=N.near=T.near=ce,D.far=N.far=T.far=re,(k!==D.near||z!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,z=D.far),D.layers.mask=Z.layers.mask|6,T.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;let Re=Z.parent,De=D.cameras;te(D,Re);for(let Ie=0;Ie<De.length;Ie++)te(De[Ie],Re);De.length===2?j(D,T,N):D.projectionMatrix.copy(T.projectionMatrix),me(Z,D,Re)};function me(Z,ce,re){re===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ir*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Z){return p[Z]};let Oe=null;function Ke(Z,ce){if(u=ce.getViewerPose(c||o),g=ce,u!==null){let re=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Re=!1;re.length!==D.cameras.length&&(D.cameras.length=0,Re=!0);for(let Ye=0;Ye<re.length;Ye++){let st=re[Ye],gt=null;if(f!==null)gt=f.getViewport(st);else{let Pt=d.getViewSubImage(h,st);gt=Pt.viewport,Ye===0&&(e.setRenderTargetTextures(b,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(b))}let $e=I[Ye];$e===void 0&&($e=new $t,$e.layers.enable(Ye),$e.viewport=new St,I[Ye]=$e),$e.matrix.fromArray(st.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(st.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(gt.x,gt.y,gt.width,gt.height),Ye===0&&(D.matrix.copy($e.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Re===!0&&D.cameras.push($e)}let De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let Ye=d.getDepthInformation(re[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,s.renderState)}if(De&&De.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Ye=0;Ye<re.length;Ye++){let st=re[Ye].camera;if(st){let gt=p[st];gt||(gt=new uo,p[st]=gt);let $e=d.getCameraImage(st);gt.sourceTexture=$e}}}}for(let re=0;re<R.length;re++){let Re=S[re],De=R[re];Re!==null&&De!==void 0&&De.update(Re,ce,c||o)}Oe&&Oe(Z,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}let Ne=new Qp;Ne.setAnimationLoop(Ke),this.setAnimationLoop=function(Z){Oe=Z},this.dispose=function(){}}},ZE=new at,rm=new Le;rm.set(-1,0,0,0,1,0,0,0,1);function KE(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vh(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,E,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),E=y.envMap,b=y.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(rm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function JE(t,e,n,i){let s={},r={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let b=E.program;i.uniformBlockBinding(y,b)}function c(y,E){let b=s[y.id];b===void 0&&(g(y),b=u(y),s[y.id]=b,y.addEventListener("dispose",m));let R=E.program;i.updateUBOMapping(y,R);let S=e.render.frame;r[y.id]!==S&&(h(y),r[y.id]=S)}function u(y){let E=d();y.__bindingPointIndex=E;let b=t.createBuffer(),R=y.__size,S=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,R,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,b),b}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let E=s[y.id],b=y.uniforms,R=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let S=0,w=b.length;S<w;S++){let x=Array.isArray(b[S])?b[S]:[b[S]];for(let T=0,N=x.length;T<N;T++){let I=x[T];if(f(I,S,T,R)===!0){let D=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],z=0;for(let A=0;A<k.length;A++){let L=k[A],F=v(L);typeof L=="number"||typeof L=="boolean"?(I.__data[0]=L,t.bufferSubData(t.UNIFORM_BUFFER,D+z,I.__data)):L.isMatrix3?(I.__data[0]=L.elements[0],I.__data[1]=L.elements[1],I.__data[2]=L.elements[2],I.__data[3]=0,I.__data[4]=L.elements[3],I.__data[5]=L.elements[4],I.__data[6]=L.elements[5],I.__data[7]=0,I.__data[8]=L.elements[6],I.__data[9]=L.elements[7],I.__data[10]=L.elements[8],I.__data[11]=0):ArrayBuffer.isView(L)?I.__data.set(new L.constructor(L.buffer,L.byteOffset,I.__data.length)):(L.toArray(I.__data,z),z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(y,E,b,R){let S=y.value,w=E+"_"+b;if(R[w]===void 0)return typeof S=="number"||typeof S=="boolean"?R[w]=S:ArrayBuffer.isView(S)?R[w]=S.slice():R[w]=S.clone(),!0;{let x=R[w];if(typeof S=="number"||typeof S=="boolean"){if(x!==S)return R[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(x.equals(S)===!1)return x.copy(S),!0}}return!1}function g(y){let E=y.uniforms,b=0,R=16;for(let w=0,x=E.length;w<x;w++){let T=Array.isArray(E[w])?E[w]:[E[w]];for(let N=0,I=T.length;N<I;N++){let D=T[N],k=Array.isArray(D.value)?D.value:[D.value];for(let z=0,A=k.length;z<A;z++){let L=k[z],F=v(L),X=b%R,Y=X%F.boundary,j=X+Y;b+=Y,j!==0&&R-j<F.storage&&(b+=R-j),D.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=F.storage}}}let S=b%R;return S>0&&(b+=R-S),y.__size=b,y.__cache={},this}function v(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){let E=y.target;E.removeEventListener("dispose",m);let b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let y in s)t.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var jE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function QE(){return ri===null&&(ri=new ro(jE,16,16,Yi,si),ri.name="DFG_LUT",ri.minFilter=Ht,ri.magFilter=Ht,ri.wrapS=jn,ri.wrapT=jn,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var mc=class{constructor(e={}){let{canvas:n=bp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let v=f,m=new Set([Pl,Nl,Il]),p=new Set([rn,zn,mr,gr,Cl,wl]),y=new Uint32Array(4),E=new Int32Array(4),b=new P,R=null,S=null,w=[],x=[],T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,I=!1,D=null;this._outputColorSpace=Kt;let k=0,z=0,A=null,L=-1,F=null,X=new St,Y=new St,j=null,te=new ze(0),me=0,Oe=n.width,Ke=n.height,Ne=1,Z=null,ce=null,re=new St(0,0,Oe,Ke),Re=new St(0,0,Oe,Ke),De=!1,Ie=new ar,vt=!1,Ye=!1,st=new at,gt=new P,$e=new St,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function ln(){return A===null?Ne:1}let U=i;function Lt(M,B){return n.getContext(M,B)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"184"}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",Se,!1),n.addEventListener("webglcontextcreationerror",Ue,!1),U===null){let B="webgl2";if(U=Lt(B,M),U===null)throw Lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw we("WebGLRenderer: "+M.message),M}let qe,pt,ue,Mt,C,_,V,K,ee,ne,le,$,J,pe,_e,oe,ie,Pe,ke,et,O,se,q;function ge(){qe=new oM(U),qe.init(),O=new $E(U,qe),pt=new jS(U,qe,e,O),ue=new WE(U,qe),pt.reversedDepthBuffer&&h&&ue.buffers.depth.setReversed(!0),Mt=new cM(U),C=new IE,_=new XE(U,qe,ue,C,pt,O,Mt),V=new rM(N),K=new fv(U),se=new KS(U,K),ee=new aM(U,K,Mt,se),ne=new hM(U,ee,K,se,Mt),Pe=new uM(U,pt,_),_e=new QS(C),le=new RE(N,V,qe,pt,se,_e),$=new KE(N,C),J=new PE,pe=new BE(qe),ie=new ZS(N,V,ue,ne,g,l),oe=new GE(N,ne,pt),q=new JE(U,Mt,pt,ue),ke=new JS(U,qe,Mt),et=new lM(U,qe,Mt),Mt.programs=le.programs,N.capabilities=pt,N.extensions=qe,N.properties=C,N.renderLists=J,N.shadowMap=oe,N.state=ue,N.info=Mt}ge(),v!==rn&&(T=new fM(v,n.width,n.height,s,r));let ae=new Uh(N,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(M){M!==void 0&&(Ne=M,this.setSize(Oe,Ke,!1))},this.getSize=function(M){return M.set(Oe,Ke)},this.setSize=function(M,B,W=!0){if(ae.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=M,Ke=B,n.width=Math.floor(M*Ne),n.height=Math.floor(B*Ne),W===!0&&(n.style.width=M+"px",n.style.height=B+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(Oe*Ne,Ke*Ne).floor()},this.setDrawingBufferSize=function(M,B,W){Oe=M,Ke=B,Ne=W,n.width=Math.floor(M*W),n.height=Math.floor(B*W),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(v===rn){we("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){Ae("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(X)},this.getViewport=function(M){return M.copy(re)},this.setViewport=function(M,B,W,H){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,B,W,H),ue.viewport(X.copy(re).multiplyScalar(Ne).round())},this.getScissor=function(M){return M.copy(Re)},this.setScissor=function(M,B,W,H){M.isVector4?Re.set(M.x,M.y,M.z,M.w):Re.set(M,B,W,H),ue.scissor(Y.copy(Re).multiplyScalar(Ne).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(M){ue.setScissorTest(De=M)},this.setOpaqueSort=function(M){Z=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,W=!0){let H=0;if(M){let G=!1;if(A!==null){let fe=A.texture.format;G=m.has(fe)}if(G){let fe=A.texture.type,ve=p.has(fe),de=ie.getClearColor(),ye=ie.getClearAlpha(),Me=de.r,Be=de.g,Ge=de.b;ve?(y[0]=Me,y[1]=Be,y[2]=Ge,y[3]=ye,U.clearBufferuiv(U.COLOR,0,y)):(E[0]=Me,E[1]=Be,E[2]=Ge,E[3]=ye,U.clearBufferiv(U.COLOR,0,E))}else H|=U.COLOR_BUFFER_BIT}B&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",Se,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),ie.dispose(),J.dispose(),pe.dispose(),C.dispose(),V.dispose(),ne.dispose(),se.dispose(),q.dispose(),le.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",af),ae.removeEventListener("sessionend",lf),cs.stop()};function Q(M){M.preventDefault(),xh("WebGLRenderer: Context Lost."),I=!0}function Se(){xh("WebGLRenderer: Context Restored."),I=!1;let M=Mt.autoReset,B=oe.enabled,W=oe.autoUpdate,H=oe.needsUpdate,G=oe.type;ge(),Mt.autoReset=M,oe.enabled=B,oe.autoUpdate=W,oe.needsUpdate=H,oe.type=G}function Ue(M){we("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function At(M){let B=M.target;B.removeEventListener("dispose",At),rt(B)}function rt(M){hi(M),C.remove(M)}function hi(M){let B=C.get(M).programs;B!==void 0&&(B.forEach(function(W){le.releaseProgram(W)}),M.isShaderMaterial&&le.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,W,H,G,fe){B===null&&(B=Pt);let ve=G.isMesh&&G.matrixWorld.determinant()<0,de=h_(M,B,W,H,G);ue.setMaterial(H,ve);let ye=W.index,Me=1;if(H.wireframe===!0){if(ye=ee.getWireframeAttribute(W),ye===void 0)return;Me=2}let Be=W.drawRange,Ge=W.attributes.position,Ee=Be.start*Me,ot=(Be.start+Be.count)*Me;fe!==null&&(Ee=Math.max(Ee,fe.start*Me),ot=Math.min(ot,(fe.start+fe.count)*Me)),ye!==null?(Ee=Math.max(Ee,0),ot=Math.min(ot,ye.count)):Ge!=null&&(Ee=Math.max(Ee,0),ot=Math.min(ot,Ge.count));let Tt=ot-Ee;if(Tt<0||Tt===1/0)return;se.setup(G,H,de,W,ye);let Et,ht=ke;if(ye!==null&&(Et=K.get(ye),ht=et,ht.setIndex(Et)),G.isMesh)H.wireframe===!0?(ue.setLineWidth(H.wireframeLinewidth*ln()),ht.setMode(U.LINES)):ht.setMode(U.TRIANGLES);else if(G.isLine){let Gt=H.linewidth;Gt===void 0&&(Gt=1),ue.setLineWidth(Gt*ln()),G.isLineSegments?ht.setMode(U.LINES):G.isLineLoop?ht.setMode(U.LINE_LOOP):ht.setMode(U.LINE_STRIP)}else G.isPoints?ht.setMode(U.POINTS):G.isSprite&&ht.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Gt=G._multiDrawStarts,xe=G._multiDrawCounts,cn=G._multiDrawCount,Je=ye?K.get(ye).bytesPerElement:1,yn=C.get(H).currentProgram.getUniforms();for(let Kn=0;Kn<cn;Kn++)yn.setValue(U,"_gl_DrawID",Kn),ht.render(Gt[Kn]/Je,xe[Kn])}else if(G.isInstancedMesh)ht.renderInstances(Ee,Tt,G.count);else if(W.isInstancedBufferGeometry){let Gt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xe=Math.min(W.instanceCount,Gt);ht.renderInstances(Ee,Tt,xe)}else ht.render(Ee,Tt)};function Zn(M,B,W){M.transparent===!0&&M.side===Mn&&M.forceSinglePass===!1?(M.side=Jt,M.needsUpdate=!0,pa(M,B,W),M.side=_i,M.needsUpdate=!0,pa(M,B,W),M.side=Mn):pa(M,B,W)}this.compile=function(M,B,W=null){W===null&&(W=M),S=pe.get(W),S.init(B),x.push(S),W.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),M!==W&&M.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),S.setupLights();let H=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let fe=G.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){let de=fe[ve];Zn(de,W,G),H.add(de)}else Zn(fe,W,G),H.add(fe)}),S=x.pop(),H},this.compileAsync=function(M,B,W=null){let H=this.compile(M,B,W);return new Promise(G=>{function fe(){if(H.forEach(function(ve){C.get(ve).currentProgram.isReady()&&H.delete(ve)}),H.size===0){G(M);return}setTimeout(fe,10)}qe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let fu=null;function c_(M){fu&&fu(M)}function af(){cs.stop()}function lf(){cs.start()}let cs=new Qp;cs.setAnimationLoop(c_),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(M){fu=M,ae.setAnimationLoop(M),M===null?cs.stop():cs.start()},ae.addEventListener("sessionstart",af),ae.addEventListener("sessionend",lf),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(M,B);let W=ae.enabled===!0&&ae.isPresenting===!0,H=T!==null&&(A===null||W)&&T.begin(N,A);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,B,A),S=pe.get(M,x.length),S.init(B),S.state.textureUnits=_.getTextureUnits(),x.push(S),st.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ie.setFromProjectionMatrix(st,On,B.reversedDepth),Ye=this.localClippingEnabled,vt=_e.init(this.clippingPlanes,Ye),R=J.get(M,w.length),R.init(),w.push(R),ae.enabled===!0&&ae.isPresenting===!0){let ve=N.xr.getDepthSensingMesh();ve!==null&&pu(ve,B,-1/0,N.sortObjects)}pu(M,B,0,N.sortObjects),R.finish(),N.sortObjects===!0&&R.sort(Z,ce),yt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,yt&&ie.addToRenderList(R,M),this.info.render.frame++,vt===!0&&_e.beginShadows();let G=S.state.shadowsArray;if(oe.render(G,M,B),vt===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&T.hasRenderPass())===!1){let ve=R.opaque,de=R.transmissive;if(S.setupLights(),B.isArrayCamera){let ye=B.cameras;if(de.length>0)for(let Me=0,Be=ye.length;Me<Be;Me++){let Ge=ye[Me];uf(ve,de,M,Ge)}yt&&ie.render(M);for(let Me=0,Be=ye.length;Me<Be;Me++){let Ge=ye[Me];cf(R,M,Ge,Ge.viewport)}}else de.length>0&&uf(ve,de,M,B),yt&&ie.render(M),cf(R,M,B)}A!==null&&z===0&&(_.updateMultisampleRenderTarget(A),_.updateRenderTargetMipmap(A)),H&&T.end(N),M.isScene===!0&&M.onAfterRender(N,M,B),se.resetDefaultState(),L=-1,F=null,x.pop(),x.length>0?(S=x[x.length-1],_.setTextureUnits(S.state.textureUnits),vt===!0&&_e.setGlobalState(N.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?R=w[w.length-1]:R=null,D!==null&&D.renderEnd()};function pu(M,B,W,H){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLightProbeGrid)S.pushLightProbeGrid(M);else if(M.isLight)S.pushLight(M),M.castShadow&&S.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ie.intersectsSprite(M)){H&&$e.setFromMatrixPosition(M.matrixWorld).applyMatrix4(st);let ve=ne.update(M),de=M.material;de.visible&&R.push(M,ve,de,W,$e.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ie.intersectsObject(M))){let ve=ne.update(M),de=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),$e.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),$e.copy(ve.boundingSphere.center)),$e.applyMatrix4(M.matrixWorld).applyMatrix4(st)),Array.isArray(de)){let ye=ve.groups;for(let Me=0,Be=ye.length;Me<Be;Me++){let Ge=ye[Me],Ee=de[Ge.materialIndex];Ee&&Ee.visible&&R.push(M,ve,Ee,W,$e.z,Ge)}}else de.visible&&R.push(M,ve,de,W,$e.z,null)}}let fe=M.children;for(let ve=0,de=fe.length;ve<de;ve++)pu(fe[ve],B,W,H)}function cf(M,B,W,H){let{opaque:G,transmissive:fe,transparent:ve}=M;S.setupLightsView(W),vt===!0&&_e.setGlobalState(N.clippingPlanes,W),H&&ue.viewport(X.copy(H)),G.length>0&&fa(G,B,W),fe.length>0&&fa(fe,B,W),ve.length>0&&fa(ve,B,W),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function uf(M,B,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[H.id]===void 0){let Ee=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[H.id]=new fn(1,1,{generateMipmaps:!0,type:Ee?si:rn,minFilter:Xi,samples:Math.max(4,pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let fe=S.state.transmissionRenderTarget[H.id],ve=H.viewport||X;fe.setSize(ve.z*N.transmissionResolutionScale,ve.w*N.transmissionResolutionScale);let de=N.getRenderTarget(),ye=N.getActiveCubeFace(),Me=N.getActiveMipmapLevel();N.setRenderTarget(fe),N.getClearColor(te),me=N.getClearAlpha(),me<1&&N.setClearColor(16777215,.5),N.clear(),yt&&ie.render(W);let Be=N.toneMapping;N.toneMapping=Vn;let Ge=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),S.setupLightsView(H),vt===!0&&_e.setGlobalState(N.clippingPlanes,H),fa(M,W,H),_.updateMultisampleRenderTarget(fe),_.updateRenderTargetMipmap(fe),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ot=0,Tt=B.length;ot<Tt;ot++){let Et=B[ot],{object:ht,geometry:Gt,material:xe,group:cn}=Et;if(xe.side===Mn&&ht.layers.test(H.layers)){let Je=xe.side;xe.side=Jt,xe.needsUpdate=!0,hf(ht,W,H,Gt,xe,cn),xe.side=Je,xe.needsUpdate=!0,Ee=!0}}Ee===!0&&(_.updateMultisampleRenderTarget(fe),_.updateRenderTargetMipmap(fe))}N.setRenderTarget(de,ye,Me),N.setClearColor(te,me),Ge!==void 0&&(H.viewport=Ge),N.toneMapping=Be}function fa(M,B,W){let H=B.isScene===!0?B.overrideMaterial:null;for(let G=0,fe=M.length;G<fe;G++){let ve=M[G],{object:de,geometry:ye,group:Me}=ve,Be=ve.material;Be.allowOverride===!0&&H!==null&&(Be=H),de.layers.test(W.layers)&&hf(de,B,W,ye,Be,Me)}}function hf(M,B,W,H,G,fe){M.onBeforeRender(N,B,W,H,G,fe),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(N,B,W,H,M,fe),G.transparent===!0&&G.side===Mn&&G.forceSinglePass===!1?(G.side=Jt,G.needsUpdate=!0,N.renderBufferDirect(W,B,H,G,M,fe),G.side=_i,G.needsUpdate=!0,N.renderBufferDirect(W,B,H,G,M,fe),G.side=Mn):N.renderBufferDirect(W,B,H,G,M,fe),M.onAfterRender(N,B,W,H,G,fe)}function pa(M,B,W){B.isScene!==!0&&(B=Pt);let H=C.get(M),G=S.state.lights,fe=S.state.shadowsArray,ve=G.state.version,de=le.getParameters(M,G.state,fe,B,W,S.state.lightProbeGridArray),ye=le.getProgramCacheKey(de),Me=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;let Be=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=V.get(M.envMap||H.environment,Be),H.envMapRotation=H.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Me===void 0&&(M.addEventListener("dispose",At),Me=new Map,H.programs=Me);let Ge=Me.get(ye);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===ve)return ff(M,de),Ge}else de.uniforms=le.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,W,de),M.onBeforeCompile(de,N),Ge=le.acquireProgram(de,ye),Me.set(ye,Ge),H.uniforms=de.uniforms;let Ee=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ee.clippingPlanes=_e.uniform),ff(M,de),H.needsLights=f_(M),H.lightsStateVersion=ve,H.needsLights&&(Ee.ambientLightColor.value=G.state.ambient,Ee.lightProbe.value=G.state.probe,Ee.directionalLights.value=G.state.directional,Ee.directionalLightShadows.value=G.state.directionalShadow,Ee.spotLights.value=G.state.spot,Ee.spotLightShadows.value=G.state.spotShadow,Ee.rectAreaLights.value=G.state.rectArea,Ee.ltc_1.value=G.state.rectAreaLTC1,Ee.ltc_2.value=G.state.rectAreaLTC2,Ee.pointLights.value=G.state.point,Ee.pointLightShadows.value=G.state.pointShadow,Ee.hemisphereLights.value=G.state.hemi,Ee.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ee.spotLightMatrix.value=G.state.spotLightMatrix,Ee.spotLightMap.value=G.state.spotLightMap,Ee.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=S.state.lightProbeGridArray.length>0,H.currentProgram=Ge,H.uniformsList=null,Ge}function df(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=vr.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function ff(M,B){let W=C.get(M);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function u_(M,B){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(B.matrixWorld);for(let W=0,H=M.length;W<H;W++){let G=M[W];if(G.texture!==null&&G.boundingBox.containsPoint(b))return G}return null}function h_(M,B,W,H,G){B.isScene!==!0&&(B=Pt),_.resetTextureUnits();let fe=B.fog,ve=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,de=A===null?N.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ze.workingColorSpace,ye=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Me=V.get(H.envMap||ve,ye),Be=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color,Et=Vn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Et=N.toneMapping);let ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Gt=ht!==void 0?ht.length:0,xe=C.get(H),cn=S.state.lights;if(vt===!0&&(Ye===!0||M!==F)){let mt=M===F&&H.id===L;_e.setState(H,M,mt)}let Je=!1;H.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==cn.state.version||xe.outputColorSpace!==de||G.isBatchedMesh&&xe.batching===!1||!G.isBatchedMesh&&xe.batching===!0||G.isBatchedMesh&&xe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&xe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&xe.instancing===!1||!G.isInstancedMesh&&xe.instancing===!0||G.isSkinnedMesh&&xe.skinning===!1||!G.isSkinnedMesh&&xe.skinning===!0||G.isInstancedMesh&&xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&xe.instancingMorph===!1&&G.morphTexture!==null||xe.envMap!==Me||H.fog===!0&&xe.fog!==fe||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==_e.numPlanes||xe.numIntersection!==_e.numIntersection)||xe.vertexAlphas!==Be||xe.vertexTangents!==Ge||xe.morphTargets!==Ee||xe.morphNormals!==ot||xe.morphColors!==Tt||xe.toneMapping!==Et||xe.morphTargetsCount!==Gt||!!xe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,xe.__version=H.version);let yn=xe.currentProgram;Je===!0&&(yn=pa(H,B,G),D&&H.isNodeMaterial&&D.onUpdateProgram(H,yn,xe));let Kn=!1,wi=!1,Bs=!1,dt=yn.getUniforms(),Ct=xe.uniforms;if(ue.useProgram(yn.program)&&(Kn=!0,wi=!0,Bs=!0),H.id!==L&&(L=H.id,wi=!0),xe.needsLights){let mt=u_(S.state.lightProbeGridArray,G);xe.lightProbeGrid!==mt&&(xe.lightProbeGrid=mt,wi=!0)}if(Kn||F!==M){ue.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),dt.setValue(U,"projectionMatrix",M.projectionMatrix),dt.setValue(U,"viewMatrix",M.matrixWorldInverse);let Ii=dt.map.cameraPosition;Ii!==void 0&&Ii.setValue(U,gt.setFromMatrixPosition(M.matrixWorld)),pt.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),F!==M&&(F=M,wi=!0,Bs=!0)}if(xe.needsLights&&(cn.state.directionalShadowMap.length>0&&dt.setValue(U,"directionalShadowMap",cn.state.directionalShadowMap,_),cn.state.spotShadowMap.length>0&&dt.setValue(U,"spotShadowMap",cn.state.spotShadowMap,_),cn.state.pointShadowMap.length>0&&dt.setValue(U,"pointShadowMap",cn.state.pointShadowMap,_)),G.isSkinnedMesh){dt.setOptional(U,G,"bindMatrix"),dt.setOptional(U,G,"bindMatrixInverse");let mt=G.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),dt.setValue(U,"boneTexture",mt.boneTexture,_))}G.isBatchedMesh&&(dt.setOptional(U,G,"batchingTexture"),dt.setValue(U,"batchingTexture",G._matricesTexture,_),dt.setOptional(U,G,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",G._indirectTexture,_),dt.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",G._colorsTexture,_));let Ri=W.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Pe.update(G,W,yn),(wi||xe.receiveShadow!==G.receiveShadow)&&(xe.receiveShadow=G.receiveShadow,dt.setValue(U,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(Ct.envMapIntensity.value=B.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=QE()),wi){if(dt.setValue(U,"toneMappingExposure",N.toneMappingExposure),xe.needsLights&&d_(Ct,Bs),fe&&H.fog===!0&&$.refreshFogUniforms(Ct,fe),$.refreshMaterialUniforms(Ct,H,Ne,Ke,S.state.transmissionRenderTarget[M.id]),xe.needsLights&&xe.lightProbeGrid){let mt=xe.lightProbeGrid;Ct.probesSH.value=mt.texture,Ct.probesMin.value.copy(mt.boundingBox.min),Ct.probesMax.value.copy(mt.boundingBox.max),Ct.probesResolution.value.copy(mt.resolution)}vr.upload(U,df(xe),Ct,_)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(vr.upload(U,df(xe),Ct,_),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(U,"center",G.center),dt.setValue(U,"modelViewMatrix",G.modelViewMatrix),dt.setValue(U,"normalMatrix",G.normalMatrix),dt.setValue(U,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let mt=H.uniformsGroups;for(let Ii=0,ks=mt.length;Ii<ks;Ii++){let pf=mt[Ii];q.update(pf,yn),q.bind(pf,yn)}}return yn}function d_(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function f_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,B,W){let H=C.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),C.get(M.texture).__webglTexture=B,C.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let W=C.get(M);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};let p_=U.createFramebuffer();this.setRenderTarget=function(M,B=0,W=0){A=M,k=B,z=W;let H=null,G=!1,fe=!1;if(M){let de=C.get(M);if(de.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(U.FRAMEBUFFER,de.__webglFramebuffer),X.copy(M.viewport),Y.copy(M.scissor),j=M.scissorTest,ue.viewport(X),ue.scissor(Y),ue.setScissorTest(j),L=-1;return}else if(de.__webglFramebuffer===void 0)_.setupRenderTarget(M);else if(de.__hasExternalTextures)_.rebindTextures(M,C.get(M.texture).__webglTexture,C.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Be=M.depthTexture;if(de.__boundDepthTexture!==Be){if(Be!==null&&C.has(Be)&&(M.width!==Be.image.width||M.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(M)}}let ye=M.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(fe=!0);let Me=C.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Me[B])?H=Me[B][W]:H=Me[B],G=!0):M.samples>0&&_.useMultisampledRTT(M)===!1?H=C.get(M).__webglMultisampledFramebuffer:Array.isArray(Me)?H=Me[W]:H=Me,X.copy(M.viewport),Y.copy(M.scissor),j=M.scissorTest}else X.copy(re).multiplyScalar(Ne).floor(),Y.copy(Re).multiplyScalar(Ne).floor(),j=De;if(W!==0&&(H=p_),ue.bindFramebuffer(U.FRAMEBUFFER,H)&&ue.drawBuffers(M,H),ue.viewport(X),ue.scissor(Y),ue.setScissorTest(j),G){let de=C.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,de.__webglTexture,W)}else if(fe){let de=B;for(let ye=0;ye<M.textures.length;ye++){let Me=C.get(M.textures[ye]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ye,Me.__webglTexture,W,de)}}else if(M!==null&&W!==0){let de=C.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,de.__webglTexture,W)}L=-1},this.readRenderTargetPixels=function(M,B,W,H,G,fe,ve,de=0){if(!(M&&M.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=C.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){ue.bindFramebuffer(U.FRAMEBUFFER,ye);try{let Me=M.textures[de],Be=Me.format,Ge=Me.type;if(M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de),!pt.textureFormatReadable(Be)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Ge)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-H&&W>=0&&W<=M.height-G&&U.readPixels(B,W,H,G,O.convert(Be),O.convert(Ge),fe)}finally{let Me=A!==null?C.get(A).__webglFramebuffer:null;ue.bindFramebuffer(U.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(M,B,W,H,G,fe,ve,de=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=C.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye)if(B>=0&&B<=M.width-H&&W>=0&&W<=M.height-G){ue.bindFramebuffer(U.FRAMEBUFFER,ye);let Me=M.textures[de],Be=Me.format,Ge=Me.type;if(M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de),!pt.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(B,W,H,G,O.convert(Be),O.convert(Ge),0);let ot=A!==null?C.get(A).__webglFramebuffer:null;ue.bindFramebuffer(U.FRAMEBUFFER,ot);let Tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Tp(U,Tt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.deleteBuffer(Ee),U.deleteSync(Tt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,W=0){let H=Math.pow(2,-W),G=Math.floor(M.image.width*H),fe=Math.floor(M.image.height*H),ve=B!==null?B.x:0,de=B!==null?B.y:0;_.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,ve,de,G,fe),ue.unbindTexture()};let m_=U.createFramebuffer(),g_=U.createFramebuffer();this.copyTextureToTexture=function(M,B,W=null,H=null,G=0,fe=0){let ve,de,ye,Me,Be,Ge,Ee,ot,Tt,Et=M.isCompressedTexture?M.mipmaps[fe]:M.image;if(W!==null)ve=W.max.x-W.min.x,de=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,Me=W.min.x,Be=W.min.y,Ge=W.isBox3?W.min.z:0;else{let Ct=Math.pow(2,-G);ve=Math.floor(Et.width*Ct),de=Math.floor(Et.height*Ct),M.isDataArrayTexture?ye=Et.depth:M.isData3DTexture?ye=Math.floor(Et.depth*Ct):ye=1,Me=0,Be=0,Ge=0}H!==null?(Ee=H.x,ot=H.y,Tt=H.z):(Ee=0,ot=0,Tt=0);let ht=O.convert(B.format),Gt=O.convert(B.type),xe;B.isData3DTexture?(_.setTexture3D(B,0),xe=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(_.setTexture2DArray(B,0),xe=U.TEXTURE_2D_ARRAY):(_.setTexture2D(B,0),xe=U.TEXTURE_2D),ue.activeTexture(U.TEXTURE0),ue.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),ue.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),ue.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let cn=ue.getParameter(U.UNPACK_ROW_LENGTH),Je=ue.getParameter(U.UNPACK_IMAGE_HEIGHT),yn=ue.getParameter(U.UNPACK_SKIP_PIXELS),Kn=ue.getParameter(U.UNPACK_SKIP_ROWS),wi=ue.getParameter(U.UNPACK_SKIP_IMAGES);ue.pixelStorei(U.UNPACK_ROW_LENGTH,Et.width),ue.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et.height),ue.pixelStorei(U.UNPACK_SKIP_PIXELS,Me),ue.pixelStorei(U.UNPACK_SKIP_ROWS,Be),ue.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge);let Bs=M.isDataArrayTexture||M.isData3DTexture,dt=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let Ct=C.get(M),Ri=C.get(B),mt=C.get(Ct.__renderTarget),Ii=C.get(Ri.__renderTarget);ue.bindFramebuffer(U.READ_FRAMEBUFFER,mt.__webglFramebuffer),ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let ks=0;ks<ye;ks++)Bs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,C.get(M).__webglTexture,G,Ge+ks),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,C.get(B).__webglTexture,fe,Tt+ks)),U.blitFramebuffer(Me,Be,ve,de,Ee,ot,ve,de,U.DEPTH_BUFFER_BIT,U.NEAREST);ue.bindFramebuffer(U.READ_FRAMEBUFFER,null),ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||C.has(M)){let Ct=C.get(M),Ri=C.get(B);ue.bindFramebuffer(U.READ_FRAMEBUFFER,m_),ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,g_);for(let mt=0;mt<ye;mt++)Bs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.__webglTexture,G,Ge+mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ct.__webglTexture,G),dt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ri.__webglTexture,fe,Tt+mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ri.__webglTexture,fe),G!==0?U.blitFramebuffer(Me,Be,ve,de,Ee,ot,ve,de,U.COLOR_BUFFER_BIT,U.NEAREST):dt?U.copyTexSubImage3D(xe,fe,Ee,ot,Tt+mt,Me,Be,ve,de):U.copyTexSubImage2D(xe,fe,Ee,ot,Me,Be,ve,de);ue.bindFramebuffer(U.READ_FRAMEBUFFER,null),ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else dt?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(xe,fe,Ee,ot,Tt,ve,de,ye,ht,Gt,Et.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(xe,fe,Ee,ot,Tt,ve,de,ye,ht,Et.data):U.texSubImage3D(xe,fe,Ee,ot,Tt,ve,de,ye,ht,Gt,Et):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,fe,Ee,ot,ve,de,ht,Gt,Et.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,fe,Ee,ot,Et.width,Et.height,ht,Et.data):U.texSubImage2D(U.TEXTURE_2D,fe,Ee,ot,ve,de,ht,Gt,Et);ue.pixelStorei(U.UNPACK_ROW_LENGTH,cn),ue.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je),ue.pixelStorei(U.UNPACK_SKIP_PIXELS,yn),ue.pixelStorei(U.UNPACK_SKIP_ROWS,Kn),ue.pixelStorei(U.UNPACK_SKIP_IMAGES,wi),fe===0&&B.generateMipmaps&&U.generateMipmap(xe),ue.unbindTexture()},this.initRenderTarget=function(M){C.get(M).__webglFramebuffer===void 0&&_.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?_.setTextureCube(M,0):M.isData3DTexture?_.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?_.setTexture2DArray(M,0):_.setTexture2D(M,0),ue.unbindTexture()},this.resetState=function(){k=0,z=0,A=null,ue.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}};var om=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","ON","ON","ET","ET","ET","ON","ON","ON","ON","ON","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","ON","ET","ET","ET","ET","ON","ON","ON","ON","L","ON","ON","BN","ON","ON","ET","ET","EN","EN","ON","L","ON","ON","ON","EN","L","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L"],Bh=[[697,698,"ON"],[706,719,"ON"],[722,735,"ON"],[741,749,"ON"],[751,767,"ON"],[768,879,"NSM"],[884,885,"ON"],[894,894,"ON"],[900,901,"ON"],[903,903,"ON"],[1014,1014,"ON"],[1155,1161,"NSM"],[1418,1418,"ON"],[1421,1422,"ON"],[1423,1423,"ET"],[1424,1424,"R"],[1425,1469,"NSM"],[1470,1470,"R"],[1471,1471,"NSM"],[1472,1472,"R"],[1473,1474,"NSM"],[1475,1475,"R"],[1476,1477,"NSM"],[1478,1478,"R"],[1479,1479,"NSM"],[1480,1535,"R"],[1536,1541,"AN"],[1542,1543,"ON"],[1544,1544,"AL"],[1545,1546,"ET"],[1547,1547,"AL"],[1548,1548,"CS"],[1549,1549,"AL"],[1550,1551,"ON"],[1552,1562,"NSM"],[1563,1610,"AL"],[1611,1631,"NSM"],[1632,1641,"AN"],[1642,1642,"ET"],[1643,1644,"AN"],[1645,1647,"AL"],[1648,1648,"NSM"],[1649,1749,"AL"],[1750,1756,"NSM"],[1757,1757,"AN"],[1758,1758,"ON"],[1759,1764,"NSM"],[1765,1766,"AL"],[1767,1768,"NSM"],[1769,1769,"ON"],[1770,1773,"NSM"],[1774,1775,"AL"],[1776,1785,"EN"],[1786,1808,"AL"],[1809,1809,"NSM"],[1810,1839,"AL"],[1840,1866,"NSM"],[1867,1957,"AL"],[1958,1968,"NSM"],[1969,1983,"AL"],[1984,2026,"R"],[2027,2035,"NSM"],[2036,2037,"R"],[2038,2041,"ON"],[2042,2044,"R"],[2045,2045,"NSM"],[2046,2069,"R"],[2070,2073,"NSM"],[2074,2074,"R"],[2075,2083,"NSM"],[2084,2084,"R"],[2085,2087,"NSM"],[2088,2088,"R"],[2089,2093,"NSM"],[2094,2136,"R"],[2137,2139,"NSM"],[2140,2143,"R"],[2144,2191,"AL"],[2192,2193,"AN"],[2194,2198,"AL"],[2199,2207,"NSM"],[2208,2249,"AL"],[2250,2273,"NSM"],[2274,2274,"AN"],[2275,2306,"NSM"],[2362,2362,"NSM"],[2364,2364,"NSM"],[2369,2376,"NSM"],[2381,2381,"NSM"],[2385,2391,"NSM"],[2402,2403,"NSM"],[2433,2433,"NSM"],[2492,2492,"NSM"],[2497,2500,"NSM"],[2509,2509,"NSM"],[2530,2531,"NSM"],[2546,2547,"ET"],[2555,2555,"ET"],[2558,2558,"NSM"],[2561,2562,"NSM"],[2620,2620,"NSM"],[2625,2626,"NSM"],[2631,2632,"NSM"],[2635,2637,"NSM"],[2641,2641,"NSM"],[2672,2673,"NSM"],[2677,2677,"NSM"],[2689,2690,"NSM"],[2748,2748,"NSM"],[2753,2757,"NSM"],[2759,2760,"NSM"],[2765,2765,"NSM"],[2786,2787,"NSM"],[2801,2801,"ET"],[2810,2815,"NSM"],[2817,2817,"NSM"],[2876,2876,"NSM"],[2879,2879,"NSM"],[2881,2884,"NSM"],[2893,2893,"NSM"],[2901,2902,"NSM"],[2914,2915,"NSM"],[2946,2946,"NSM"],[3008,3008,"NSM"],[3021,3021,"NSM"],[3059,3064,"ON"],[3065,3065,"ET"],[3066,3066,"ON"],[3072,3072,"NSM"],[3076,3076,"NSM"],[3132,3132,"NSM"],[3134,3136,"NSM"],[3142,3144,"NSM"],[3146,3149,"NSM"],[3157,3158,"NSM"],[3170,3171,"NSM"],[3192,3198,"ON"],[3201,3201,"NSM"],[3260,3260,"NSM"],[3276,3277,"NSM"],[3298,3299,"NSM"],[3328,3329,"NSM"],[3387,3388,"NSM"],[3393,3396,"NSM"],[3405,3405,"NSM"],[3426,3427,"NSM"],[3457,3457,"NSM"],[3530,3530,"NSM"],[3538,3540,"NSM"],[3542,3542,"NSM"],[3633,3633,"NSM"],[3636,3642,"NSM"],[3647,3647,"ET"],[3655,3662,"NSM"],[3761,3761,"NSM"],[3764,3772,"NSM"],[3784,3790,"NSM"],[3864,3865,"NSM"],[3893,3893,"NSM"],[3895,3895,"NSM"],[3897,3897,"NSM"],[3898,3901,"ON"],[3953,3966,"NSM"],[3968,3972,"NSM"],[3974,3975,"NSM"],[3981,3991,"NSM"],[3993,4028,"NSM"],[4038,4038,"NSM"],[4141,4144,"NSM"],[4146,4151,"NSM"],[4153,4154,"NSM"],[4157,4158,"NSM"],[4184,4185,"NSM"],[4190,4192,"NSM"],[4209,4212,"NSM"],[4226,4226,"NSM"],[4229,4230,"NSM"],[4237,4237,"NSM"],[4253,4253,"NSM"],[4957,4959,"NSM"],[5008,5017,"ON"],[5120,5120,"ON"],[5760,5760,"WS"],[5787,5788,"ON"],[5906,5908,"NSM"],[5938,5939,"NSM"],[5970,5971,"NSM"],[6002,6003,"NSM"],[6068,6069,"NSM"],[6071,6077,"NSM"],[6086,6086,"NSM"],[6089,6099,"NSM"],[6107,6107,"ET"],[6109,6109,"NSM"],[6128,6137,"ON"],[6144,6154,"ON"],[6155,6157,"NSM"],[6158,6158,"BN"],[6159,6159,"NSM"],[6277,6278,"NSM"],[6313,6313,"NSM"],[6432,6434,"NSM"],[6439,6440,"NSM"],[6450,6450,"NSM"],[6457,6459,"NSM"],[6464,6464,"ON"],[6468,6469,"ON"],[6622,6655,"ON"],[6679,6680,"NSM"],[6683,6683,"NSM"],[6742,6742,"NSM"],[6744,6750,"NSM"],[6752,6752,"NSM"],[6754,6754,"NSM"],[6757,6764,"NSM"],[6771,6780,"NSM"],[6783,6783,"NSM"],[6832,6877,"NSM"],[6880,6891,"NSM"],[6912,6915,"NSM"],[6964,6964,"NSM"],[6966,6970,"NSM"],[6972,6972,"NSM"],[6978,6978,"NSM"],[7019,7027,"NSM"],[7040,7041,"NSM"],[7074,7077,"NSM"],[7080,7081,"NSM"],[7083,7085,"NSM"],[7142,7142,"NSM"],[7144,7145,"NSM"],[7149,7149,"NSM"],[7151,7153,"NSM"],[7212,7219,"NSM"],[7222,7223,"NSM"],[7376,7378,"NSM"],[7380,7392,"NSM"],[7394,7400,"NSM"],[7405,7405,"NSM"],[7412,7412,"NSM"],[7416,7417,"NSM"],[7616,7679,"NSM"],[8125,8125,"ON"],[8127,8129,"ON"],[8141,8143,"ON"],[8157,8159,"ON"],[8173,8175,"ON"],[8189,8190,"ON"],[8192,8202,"WS"],[8203,8205,"BN"],[8207,8207,"R"],[8208,8231,"ON"],[8232,8232,"WS"],[8233,8233,"B"],[8234,8238,"BN"],[8239,8239,"CS"],[8240,8244,"ET"],[8245,8259,"ON"],[8260,8260,"CS"],[8261,8286,"ON"],[8287,8287,"WS"],[8288,8303,"BN"],[8304,8304,"EN"],[8308,8313,"EN"],[8314,8315,"ES"],[8316,8318,"ON"],[8320,8329,"EN"],[8330,8331,"ES"],[8332,8334,"ON"],[8352,8399,"ET"],[8400,8432,"NSM"],[8448,8449,"ON"],[8451,8454,"ON"],[8456,8457,"ON"],[8468,8468,"ON"],[8470,8472,"ON"],[8478,8483,"ON"],[8485,8485,"ON"],[8487,8487,"ON"],[8489,8489,"ON"],[8494,8494,"ET"],[8506,8507,"ON"],[8512,8516,"ON"],[8522,8525,"ON"],[8528,8543,"ON"],[8585,8587,"ON"],[8592,8721,"ON"],[8722,8722,"ES"],[8723,8723,"ET"],[8724,9013,"ON"],[9083,9108,"ON"],[9110,9257,"ON"],[9280,9290,"ON"],[9312,9351,"ON"],[9352,9371,"EN"],[9450,9899,"ON"],[9901,10239,"ON"],[10496,11123,"ON"],[11126,11263,"ON"],[11493,11498,"ON"],[11503,11505,"NSM"],[11513,11519,"ON"],[11647,11647,"NSM"],[11744,11775,"NSM"],[11776,11869,"ON"],[11904,11929,"ON"],[11931,12019,"ON"],[12032,12245,"ON"],[12272,12287,"ON"],[12288,12288,"WS"],[12289,12292,"ON"],[12296,12320,"ON"],[12330,12333,"NSM"],[12336,12336,"ON"],[12342,12343,"ON"],[12349,12351,"ON"],[12441,12442,"NSM"],[12443,12444,"ON"],[12448,12448,"ON"],[12539,12539,"ON"],[12736,12773,"ON"],[12783,12783,"ON"],[12829,12830,"ON"],[12880,12895,"ON"],[12924,12926,"ON"],[12977,12991,"ON"],[13004,13007,"ON"],[13175,13178,"ON"],[13278,13279,"ON"],[13311,13311,"ON"],[19904,19967,"ON"],[42128,42182,"ON"],[42509,42511,"ON"],[42607,42610,"NSM"],[42611,42611,"ON"],[42612,42621,"NSM"],[42622,42623,"ON"],[42654,42655,"NSM"],[42736,42737,"NSM"],[42752,42785,"ON"],[42888,42888,"ON"],[43010,43010,"NSM"],[43014,43014,"NSM"],[43019,43019,"NSM"],[43045,43046,"NSM"],[43048,43051,"ON"],[43052,43052,"NSM"],[43064,43065,"ET"],[43124,43127,"ON"],[43204,43205,"NSM"],[43232,43249,"NSM"],[43263,43263,"NSM"],[43302,43309,"NSM"],[43335,43345,"NSM"],[43392,43394,"NSM"],[43443,43443,"NSM"],[43446,43449,"NSM"],[43452,43453,"NSM"],[43493,43493,"NSM"],[43561,43566,"NSM"],[43569,43570,"NSM"],[43573,43574,"NSM"],[43587,43587,"NSM"],[43596,43596,"NSM"],[43644,43644,"NSM"],[43696,43696,"NSM"],[43698,43700,"NSM"],[43703,43704,"NSM"],[43710,43711,"NSM"],[43713,43713,"NSM"],[43756,43757,"NSM"],[43766,43766,"NSM"],[43882,43883,"ON"],[44005,44005,"NSM"],[44008,44008,"NSM"],[44013,44013,"NSM"],[64285,64285,"R"],[64286,64286,"NSM"],[64287,64296,"R"],[64297,64297,"ES"],[64298,64335,"R"],[64336,64450,"AL"],[64451,64466,"ON"],[64467,64829,"AL"],[64830,64847,"ON"],[64848,64911,"AL"],[64912,64913,"ON"],[64914,64967,"AL"],[64968,64975,"ON"],[64976,65007,"BN"],[65008,65020,"AL"],[65021,65023,"ON"],[65024,65039,"NSM"],[65040,65049,"ON"],[65056,65071,"NSM"],[65072,65103,"ON"],[65104,65104,"CS"],[65105,65105,"ON"],[65106,65106,"CS"],[65108,65108,"ON"],[65109,65109,"CS"],[65110,65118,"ON"],[65119,65119,"ET"],[65120,65121,"ON"],[65122,65123,"ES"],[65124,65126,"ON"],[65128,65128,"ON"],[65129,65130,"ET"],[65131,65131,"ON"],[65136,65278,"AL"],[65279,65279,"BN"],[65281,65282,"ON"],[65283,65285,"ET"],[65286,65290,"ON"],[65291,65291,"ES"],[65292,65292,"CS"],[65293,65293,"ES"],[65294,65295,"CS"],[65296,65305,"EN"],[65306,65306,"CS"],[65307,65312,"ON"],[65339,65344,"ON"],[65371,65381,"ON"],[65504,65505,"ET"],[65506,65508,"ON"],[65509,65510,"ET"],[65512,65518,"ON"],[65520,65528,"BN"],[65529,65533,"ON"],[65534,65535,"BN"],[65793,65793,"ON"],[65856,65932,"ON"],[65936,65948,"ON"],[65952,65952,"ON"],[66045,66045,"NSM"],[66272,66272,"NSM"],[66273,66299,"EN"],[66422,66426,"NSM"],[67584,67870,"R"],[67871,67871,"ON"],[67872,68096,"R"],[68097,68099,"NSM"],[68100,68100,"R"],[68101,68102,"NSM"],[68103,68107,"R"],[68108,68111,"NSM"],[68112,68151,"R"],[68152,68154,"NSM"],[68155,68158,"R"],[68159,68159,"NSM"],[68160,68324,"R"],[68325,68326,"NSM"],[68327,68408,"R"],[68409,68415,"ON"],[68416,68863,"R"],[68864,68899,"AL"],[68900,68903,"NSM"],[68904,68911,"AL"],[68912,68921,"AN"],[68922,68927,"AL"],[68928,68937,"AN"],[68938,68968,"R"],[68969,68973,"NSM"],[68974,68974,"ON"],[68975,69215,"R"],[69216,69246,"AN"],[69247,69290,"R"],[69291,69292,"NSM"],[69293,69311,"R"],[69312,69327,"AL"],[69328,69336,"ON"],[69337,69369,"AL"],[69370,69375,"NSM"],[69376,69423,"R"],[69424,69445,"AL"],[69446,69456,"NSM"],[69457,69487,"AL"],[69488,69505,"R"],[69506,69509,"NSM"],[69510,69631,"R"],[69633,69633,"NSM"],[69688,69702,"NSM"],[69714,69733,"ON"],[69744,69744,"NSM"],[69747,69748,"NSM"],[69759,69761,"NSM"],[69811,69814,"NSM"],[69817,69818,"NSM"],[69826,69826,"NSM"],[69888,69890,"NSM"],[69927,69931,"NSM"],[69933,69940,"NSM"],[70003,70003,"NSM"],[70016,70017,"NSM"],[70070,70078,"NSM"],[70089,70092,"NSM"],[70095,70095,"NSM"],[70191,70193,"NSM"],[70196,70196,"NSM"],[70198,70199,"NSM"],[70206,70206,"NSM"],[70209,70209,"NSM"],[70367,70367,"NSM"],[70371,70378,"NSM"],[70400,70401,"NSM"],[70459,70460,"NSM"],[70464,70464,"NSM"],[70502,70508,"NSM"],[70512,70516,"NSM"],[70587,70592,"NSM"],[70606,70606,"NSM"],[70608,70608,"NSM"],[70610,70610,"NSM"],[70625,70626,"NSM"],[70712,70719,"NSM"],[70722,70724,"NSM"],[70726,70726,"NSM"],[70750,70750,"NSM"],[70835,70840,"NSM"],[70842,70842,"NSM"],[70847,70848,"NSM"],[70850,70851,"NSM"],[71090,71093,"NSM"],[71100,71101,"NSM"],[71103,71104,"NSM"],[71132,71133,"NSM"],[71219,71226,"NSM"],[71229,71229,"NSM"],[71231,71232,"NSM"],[71264,71276,"ON"],[71339,71339,"NSM"],[71341,71341,"NSM"],[71344,71349,"NSM"],[71351,71351,"NSM"],[71453,71453,"NSM"],[71455,71455,"NSM"],[71458,71461,"NSM"],[71463,71467,"NSM"],[71727,71735,"NSM"],[71737,71738,"NSM"],[71995,71996,"NSM"],[71998,71998,"NSM"],[72003,72003,"NSM"],[72148,72151,"NSM"],[72154,72155,"NSM"],[72160,72160,"NSM"],[72193,72198,"NSM"],[72201,72202,"NSM"],[72243,72248,"NSM"],[72251,72254,"NSM"],[72263,72263,"NSM"],[72273,72278,"NSM"],[72281,72283,"NSM"],[72330,72342,"NSM"],[72344,72345,"NSM"],[72544,72544,"NSM"],[72546,72548,"NSM"],[72550,72550,"NSM"],[72752,72758,"NSM"],[72760,72765,"NSM"],[72850,72871,"NSM"],[72874,72880,"NSM"],[72882,72883,"NSM"],[72885,72886,"NSM"],[73009,73014,"NSM"],[73018,73018,"NSM"],[73020,73021,"NSM"],[73023,73029,"NSM"],[73031,73031,"NSM"],[73104,73105,"NSM"],[73109,73109,"NSM"],[73111,73111,"NSM"],[73459,73460,"NSM"],[73472,73473,"NSM"],[73526,73530,"NSM"],[73536,73536,"NSM"],[73538,73538,"NSM"],[73562,73562,"NSM"],[73685,73692,"ON"],[73693,73696,"ET"],[73697,73713,"ON"],[78912,78912,"NSM"],[78919,78933,"NSM"],[90398,90409,"NSM"],[90413,90415,"NSM"],[92912,92916,"NSM"],[92976,92982,"NSM"],[94031,94031,"NSM"],[94095,94098,"NSM"],[94178,94178,"ON"],[94180,94180,"NSM"],[113821,113822,"NSM"],[113824,113827,"BN"],[117760,117973,"ON"],[118e3,118009,"EN"],[118010,118012,"ON"],[118016,118451,"ON"],[118458,118480,"ON"],[118496,118512,"ON"],[118528,118573,"NSM"],[118576,118598,"NSM"],[119143,119145,"NSM"],[119155,119162,"BN"],[119163,119170,"NSM"],[119173,119179,"NSM"],[119210,119213,"NSM"],[119273,119274,"ON"],[119296,119361,"ON"],[119362,119364,"NSM"],[119365,119365,"ON"],[119552,119638,"ON"],[120513,120513,"ON"],[120539,120539,"ON"],[120571,120571,"ON"],[120597,120597,"ON"],[120629,120629,"ON"],[120655,120655,"ON"],[120687,120687,"ON"],[120713,120713,"ON"],[120745,120745,"ON"],[120771,120771,"ON"],[120782,120831,"EN"],[121344,121398,"NSM"],[121403,121452,"NSM"],[121461,121461,"NSM"],[121476,121476,"NSM"],[121499,121503,"NSM"],[121505,121519,"NSM"],[122880,122886,"NSM"],[122888,122904,"NSM"],[122907,122913,"NSM"],[122915,122916,"NSM"],[122918,122922,"NSM"],[123023,123023,"NSM"],[123184,123190,"NSM"],[123566,123566,"NSM"],[123628,123631,"NSM"],[123647,123647,"ET"],[124140,124143,"NSM"],[124398,124399,"NSM"],[124643,124643,"NSM"],[124646,124646,"NSM"],[124654,124655,"NSM"],[124661,124661,"NSM"],[124928,125135,"R"],[125136,125142,"NSM"],[125143,125251,"R"],[125252,125258,"NSM"],[125259,126063,"R"],[126064,126143,"AL"],[126144,126207,"R"],[126208,126287,"AL"],[126288,126463,"R"],[126464,126703,"AL"],[126704,126705,"ON"],[126706,126719,"AL"],[126720,126975,"R"],[126976,127019,"ON"],[127024,127123,"ON"],[127136,127150,"ON"],[127153,127167,"ON"],[127169,127183,"ON"],[127185,127221,"ON"],[127232,127242,"EN"],[127243,127247,"ON"],[127279,127279,"ON"],[127338,127343,"ON"],[127405,127405,"ON"],[127584,127589,"ON"],[127744,128728,"ON"],[128732,128748,"ON"],[128752,128764,"ON"],[128768,128985,"ON"],[128992,129003,"ON"],[129008,129008,"ON"],[129024,129035,"ON"],[129040,129095,"ON"],[129104,129113,"ON"],[129120,129159,"ON"],[129168,129197,"ON"],[129200,129211,"ON"],[129216,129217,"ON"],[129232,129240,"ON"],[129280,129623,"ON"],[129632,129645,"ON"],[129648,129660,"ON"],[129664,129674,"ON"],[129678,129734,"ON"],[129736,129736,"ON"],[129741,129756,"ON"],[129759,129770,"ON"],[129775,129784,"ON"],[129792,129938,"ON"],[129940,130031,"ON"],[130032,130041,"EN"],[130042,130042,"ON"],[131070,131071,"BN"],[196606,196607,"BN"],[262142,262143,"BN"],[327678,327679,"BN"],[393214,393215,"BN"],[458750,458751,"BN"],[524286,524287,"BN"],[589822,589823,"BN"],[655358,655359,"BN"],[720894,720895,"BN"],[786430,786431,"BN"],[851966,851967,"BN"],[917502,917759,"BN"],[917760,917999,"NSM"],[918e3,921599,"BN"],[983038,983039,"BN"],[1048574,1048575,"BN"],[1114110,1114111,"BN"]];function tb(t){if(t<=255)return om[t];let e=0,n=Bh.length-1;for(;e<=n;){let i=e+n>>1,s=Bh[i];if(t<s[0]){n=i-1;continue}if(t>s[1]){e=i+1;continue}return s[2]}return"L"}function nb(t){let e=t.length;if(e===0)return null;let n=new Array(e),i=!1;for(let c=0;c<e;){let u=t.charCodeAt(c),d=u,h=1;if(u>=55296&&u<=56319&&c+1<e){let g=t.charCodeAt(c+1);g>=56320&&g<=57343&&(d=(u-55296<<10)+(g-56320)+65536,h=2)}let f=tb(d);(f==="R"||f==="AL"||f==="AN")&&(i=!0);for(let g=0;g<h;g++)n[c+g]=f;c+=h}if(!i)return null;let s=0;for(let c=0;c<e;c++){let u=n[c];if(u==="L"){s=0;break}if(u==="R"||u==="AL"){s=1;break}}let r=new Int8Array(e);for(let c=0;c<e;c++)r[c]=s;let o=s&1?"R":"L",a=o,l=a;for(let c=0;c<e;c++)n[c]==="NSM"?n[c]=l:l=n[c];l=a;for(let c=0;c<e;c++){let u=n[c];u==="EN"?n[c]=l==="AL"?"AN":"EN":(u==="R"||u==="L"||u==="AL")&&(l=u)}for(let c=0;c<e;c++)n[c]==="AL"&&(n[c]="R");for(let c=1;c<e-1;c++)n[c]==="ES"&&n[c-1]==="EN"&&n[c+1]==="EN"&&(n[c]="EN"),n[c]==="CS"&&(n[c-1]==="EN"||n[c-1]==="AN")&&n[c+1]===n[c-1]&&(n[c]=n[c-1]);for(let c=0;c<e;c++){if(n[c]!=="EN")continue;let u;for(u=c-1;u>=0&&n[u]==="ET";u--)n[u]="EN";for(u=c+1;u<e&&n[u]==="ET";u++)n[u]="EN"}for(let c=0;c<e;c++){let u=n[c];(u==="WS"||u==="ES"||u==="ET"||u==="CS")&&(n[c]="ON")}l=a;for(let c=0;c<e;c++){let u=n[c];u==="EN"?n[c]=l==="L"?"L":"EN":(u==="R"||u==="L")&&(l=u)}for(let c=0;c<e;c++){if(n[c]!=="ON")continue;let u=c+1;for(;u<e&&n[u]==="ON";)u++;let d=c>0?n[c-1]:a,h=u<e?n[u]:a,f=d!=="L"?"R":"L";if(f===(h!=="L"?"R":"L"))for(let v=c;v<u;v++)n[v]=f;c=u-1}for(let c=0;c<e;c++)n[c]==="ON"&&(n[c]=o);for(let c=0;c<e;c++){let u=n[c];(r[c]&1)===0?u==="R"?r[c]++:(u==="AN"||u==="EN")&&(r[c]+=2):(u==="L"||u==="AN"||u==="EN")&&r[c]++}return r}function am(t,e){let n=nb(t);if(n===null)return null;let i=new Int8Array(e.length);for(let s=0;s<e.length;s++)i[s]=n[e[s]];return i}var ib=/[ \t\n\r\f]+/g,sb=/[\t\n\r\f]| {2,}|^ | $/;function rb(t){let e=t??"normal";return e==="pre-wrap"?{mode:e,preserveOrdinarySpaces:!0,preserveHardBreaks:!0}:{mode:e,preserveOrdinarySpaces:!1,preserveHardBreaks:!1}}function ob(t){if(!sb.test(t))return t;let e=t.replace(ib," ");return e.charCodeAt(0)===32&&(e=e.slice(1)),e.length>0&&e.charCodeAt(e.length-1)===32&&(e=e.slice(0,-1)),e}function ab(t){return/[\r\f]/.test(t)?t.replace(/\r\n/g,`
`).replace(/[\r\f]/g,`
`):t}var kh=null,lb;function cb(){return kh===null&&(kh=new Intl.Segmenter(lb,{granularity:"word"})),kh}var ub=/\p{Script=Arabic}/u,Ss=/\p{M}/u,zh=/\p{Nd}/u;function lm(t){return ub.test(t)}function cm(t){return t>=19968&&t<=40959||t>=13312&&t<=19903||t>=131072&&t<=173791||t>=173824&&t<=177983||t>=177984&&t<=178207||t>=178208&&t<=183983||t>=183984&&t<=191471||t>=191472&&t<=192093||t>=194560&&t<=195103||t>=196608&&t<=201551||t>=201552&&t<=205743||t>=205744&&t<=210041||t>=63744&&t<=64255||t>=12288&&t<=12351||t>=12352&&t<=12447||t>=12448&&t<=12543||t>=12592&&t<=12687||t>=44032&&t<=55215||t>=65280&&t<=65519}function An(t){for(let e=0;e<t.length;e++){let n=t.charCodeAt(e);if(!(n<12288)){if(n>=55296&&n<=56319&&e+1<t.length){let i=t.charCodeAt(e+1);if(i>=56320&&i<=57343){let s=(n-55296<<10)+(i-56320)+65536;if(cm(s))return!0;e++;continue}}if(cm(n))return!0}}return!1}function hb(t){let e=ko(t);return e!==null&&(_c.has(e)||Zi.has(e))}var db=new Set(["\xA0","\u202F","\u2060","\uFEFF"]),fb=new Set(["-","\u2010","\u2013","\u2014"]);function pb(t){let e=ko(t);return e!==null&&db.has(e)}function mb(t){let e=ko(t);return e!==null&&fb.has(e)}function Hh(t,e){return pb(t)?!1:e?!(hb(t)||mb(t)):!0}var _c=new Set(["\uFF0C","\uFF0E","\uFF01","\uFF1A","\uFF1B","\uFF1F","\u3001","\u3002","\u30FB","\uFF09","\u3015","\u3009","\u300B","\u300D","\u300F","\u3011","\u3017","\u3019","\u301B","\u30FC","\u3005","\u303B","\u309D","\u309E","\u30FD","\u30FE"]),Bo=new Set(['"',"(","[","{","\xA1","\xBF","\u201C","\u2018","\u201A","\u201E","\xAB","\u2039","\u2E18","\uFF08","\u3014","\u3008","\u300A","\u300C","\u300E","\u3010","\u3016","\u3018","\u301A"]),Gh=new Set(["'","\u2019"]),Zi=new Set([".",",","!","?",":",";","\u060C","\u061B","\u061F","\u0964","\u0965","\u104A","\u104B","\u104C","\u104D","\u104F",")","]","}","%",'"',"\u201D","\u2019","\xBB","\u203A","\u2026"]),gb=new Set([":",".","\u060C","\u061B"]),xb=new Set(["\u104F"]),_b=new Set(["\u201D","\u2019","\xBB","\u203A","\u300D","\u300F","\u3011","\u300B","\u3009","\u3015","\uFF09"]);function vb(t){if(Wh(t))return!0;let e=!1;for(let n of t){if(Zi.has(n)||yc(n)){e=!0;continue}if(!(e&&Ss.test(n)))return!1}return e}function yb(t){for(let e of t)if(!_c.has(e)&&!Zi.has(e))return!1;return t.length>0}function Sb(t){if(Wh(t))return!0;for(let e of t)if(!Bo.has(e)&&!Gh.has(e)&&!Ss.test(e)&&!yc(e))return!1;return t.length>0}function Wh(t){let e=!1;for(let n of t)if(!(n==="\\"||Ss.test(n))){if(Bo.has(n)||Zi.has(n)||Gh.has(n)){e=!0;continue}return!1}return e}function vc(t,e){let n=e-1;if(n<=0)return Math.max(n,0);let i=t.charCodeAt(n);if(i<56320||i>57343)return n;let s=n-1;if(s<0)return n;let r=t.charCodeAt(s);return r>=55296&&r<=56319?s:n}function ko(t){if(t.length===0)return null;let e=vc(t,t.length);return t.slice(e)}function Mb(t){for(let e of t)if(!Ss.test(e))return e;return null}function Eb(t){for(let e=t.length;e>0;){let n=vc(t,e),i=t.slice(n,e);if(!Ss.test(i))return i;e=n}return null}var bb=[36,37,43,43,92,92,162,165,176,177,1423,1423,1545,1547,1642,1642,2046,2047,2546,2547,2553,2555,2801,2801,3065,3065,3449,3449,3647,3647,6107,6107,8240,8247,8279,8279,8352,8399,8451,8451,8457,8457,8470,8470,8722,8723,43064,43064,65020,65020,65129,65130,65284,65285,65504,65505,65509,65510,73693,73696,123647,123647,126124,126124,126128,126128];function Ab(t,e){for(let n=0;n<e.length;n+=2)if(t>=e[n]&&t<=e[n+1])return!0;return!1}function yc(t){let e=t.codePointAt(0);return e!==void 0&&Ab(e,bb)}function Tb(t){let e=Eb(t);return e!==null&&yc(e)}function Cb(t){let e=Mb(t);return e!==null&&zh.test(e)}function wb(t){let e=Array.from(t),n=e.length;for(;n>0;){let i=e[n-1];if(Ss.test(i)){n--;continue}if(Bo.has(i)||Gh.has(i)){n--;continue}break}return n<=0||n===e.length?null:{head:e.slice(0,n).join(""),tail:e.slice(n).join("")}}function Rb(t,e,n){return n==="text"&&!e&&t.length===1&&t!=="-"&&t!=="\u2014"?t:null}function um(t,e,n,i){let s=e[i],r=t[i];if(s==null)return r;let o=n[i];if(r.length===o)return r;let a=s.repeat(o);return t[i]=a,a}function hm(t,e){return t&&e!==null&&gb.has(e)}function Ib(t){let e=ko(t);return e!==null&&xb.has(e)}function Nb(t){if(t.length<2||t[0]!==" ")return null;let e=t.slice(1);return/^\p{M}+$/u.test(e)?{space:" ",marks:e}:null}function Sc(t){let e=t.length;for(;e>0;){let n=vc(t,e),i=t.slice(n,e);if(_b.has(i))return!0;if(!Zi.has(i))return!1;e=n}return!1}function Pb(t,e){if(e.preserveOrdinarySpaces||e.preserveHardBreaks){if(t===" ")return"preserved-space";if(t==="	")return"tab";if(e.preserveHardBreaks&&t===`
`)return"hard-break"}return t===" "?"space":t==="\xA0"||t==="\u202F"||t==="\u2060"||t==="\uFEFF"?"glue":t==="\u200B"?"zero-width-break":t==="\xAD"?"soft-hyphen":"text"}var Lb=/[\x20\t\n\xA0\xAD\u200B\u202F\u2060\uFEFF]/;function Hn(t){return t.length===1?t[0]:t.join("")}function Fb(t,e){let n=[];for(let i=t.length-1;i>=0;i--)n.push(t[i]);return n.push(e),Hn(n)}function Db(t,e,n,i){if(!Lb.test(t))return[{text:t,isWordLike:e,kind:"text",start:n}];let s=[],r=null,o=[],a=n,l=!1,c=0;for(let u of t){let d=Pb(u,i),h=d==="text"&&e;if(r!==null&&d===r&&h===l){o.push(u),c+=u.length;continue}r!==null&&s.push({text:Hn(o),isWordLike:l,kind:r,start:a}),r=d,o=[u],a=n+c,l=h,c+=u.length}return r!==null&&s.push({text:Hn(o),isWordLike:l,kind:r,start:a}),s}function Vh(t){return t==="space"||t==="preserved-space"||t==="zero-width-break"||t==="hard-break"}var Ob=/^[A-Za-z][A-Za-z0-9+.-]*:$/;function Ub(t,e){let n=t.texts[e];return n.startsWith("www.")?!0:Ob.test(n)&&e+1<t.len&&t.kinds[e+1]==="text"&&t.texts[e+1]==="//"}function Bb(t){return t.includes("?")&&(t.includes("://")||t.startsWith("www."))}function kb(t){let e=t.texts.slice(),n=t.isWordLike.slice(),i=t.kinds.slice(),s=t.starts.slice();for(let o=0;o<t.len;o++){if(i[o]!=="text"||!Ub(t,o))continue;let a=[e[o]],l=o+1;for(;l<t.len&&!Vh(i[l]);){a.push(e[l]),n[o]=!0;let c=e[l].includes("?");if(i[l]="text",e[l]="",l++,c)break}e[o]=Hn(a)}let r=0;for(let o=0;o<e.length;o++){let a=e[o];a.length!==0&&(r!==o&&(e[r]=a,n[r]=n[o],i[r]=i[o],s[r]=s[o]),r++)}return e.length=r,n.length=r,i.length=r,s.length=r,{len:r,texts:e,isWordLike:n,kinds:i,starts:s}}function Vb(t){let e=[],n=[],i=[],s=[];for(let r=0;r<t.len;r++){let o=t.texts[r];if(e.push(o),n.push(t.isWordLike[r]),i.push(t.kinds[r]),s.push(t.starts[r]),!Bb(o))continue;let a=r+1;if(a>=t.len||Vh(t.kinds[a]))continue;let l=[],c=t.starts[a],u=a;for(;u<t.len&&!Vh(t.kinds[u]);)l.push(t.texts[u]),u++;l.length>0&&(e.push(Hn(l)),n.push(!0),i.push("text"),s.push(c),r=u-1)}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:s}}var zb=new Set([":","-","/","\xD7",",",".","+","\u2013","\u2014"]),Hb=new Set([".",",",":",";"]);function dm(t){for(let e=t.length;e>0;){let n=vc(t,e),i=t.slice(n,e);if(Ss.test(i)){e=n;continue}return Hb.has(i)||yc(i)}return!1}function Gb(t,e){return e&&!An(t)}function fm(t){for(let e of t)if(zh.test(e))return!0;return!1}function Uo(t){if(t.length===0)return!1;for(let e of t)if(!(zh.test(e)||zb.has(e)))return!1;return!0}function Wb(t){let e=[],n=[],i=[],s=[];for(let r=0;r<t.len;r++){let o=t.texts[r],a=t.kinds[r];if(a==="text"&&Uo(o)&&fm(o)){let l=[o],c=r+1;for(;c<t.len&&t.kinds[c]==="text"&&Uo(t.texts[c]);)l.push(t.texts[c]),c++;e.push(Hn(l)),n.push(!0),i.push("text"),s.push(t.starts[r]),r=c-1;continue}e.push(o),n.push(t.isWordLike[r]),i.push(a),s.push(t.starts[r])}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:s}}function Xb(t){let e=[],n=[],i=[],s=[];for(let r=0;r<t.len;r++){let o=t.texts[r],a=t.kinds[r],l=t.isWordLike[r];if(a==="text"&&dm(o)&&(l||Tb(o))&&!An(o)){let c=[o],u=!0,d=r+1;for(;u&&d<t.len&&t.kinds[d]==="text"&&Gb(t.texts[d],t.isWordLike[d]);){let h=t.texts[d];c.push(h),u=dm(h),d++}e.push(Hn(c)),n.push(!0),i.push("text"),s.push(t.starts[r]),r=d-1;continue}e.push(o),n.push(l),i.push(a),s.push(t.starts[r])}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:s}}function $b(t){let e=[],n=[],i=[],s=[];for(let r=0;r<t.len;r++){let o=t.texts[r];if(t.kinds[r]==="text"&&o.includes("-")){let a=o.split("-"),l=a.length>1;for(let c=0;c<a.length;c++){let u=a[c];if(!l)break;(u.length===0||!fm(u)||!Uo(u))&&(l=!1)}if(l){let c=0;for(let u=0;u<a.length;u++){let d=a[u],h=u<a.length-1?`${d}-`:d;e.push(h),n.push(!0),i.push("text"),s.push(t.starts[r]+c),c+=h.length}continue}}e.push(o),n.push(t.isWordLike[r]),i.push(t.kinds[r]),s.push(t.starts[r])}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:s}}function Yb(t){let e=[],n=[],i=[],s=[],r=0;for(;r<t.len;){let o=[t.texts[r]],a=t.isWordLike[r],l=t.kinds[r],c=t.starts[r];if(l==="glue"){let u=[o[0]],d=c;for(r++;r<t.len&&t.kinds[r]==="glue";)u.push(t.texts[r]),r++;let h=Hn(u);if(r<t.len&&t.kinds[r]==="text")o[0]=h,o.push(t.texts[r]),a=t.isWordLike[r],l="text",c=d,r++;else{e.push(h),n.push(!1),i.push("glue"),s.push(d);continue}}else r++;if(l==="text")for(;r<t.len&&t.kinds[r]==="glue";){let u=[];for(;r<t.len&&t.kinds[r]==="glue";)u.push(t.texts[r]),r++;let d=Hn(u);if(r<t.len&&t.kinds[r]==="text"){o.push(d,t.texts[r]),a=a||t.isWordLike[r],r++;continue}o.push(d)}e.push(Hn(o)),n.push(a),i.push(l),s.push(c)}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:s}}function qb(t){let e=t.texts.slice(),n=t.isWordLike.slice(),i=t.kinds.slice(),s=t.starts.slice();for(let r=0;r<e.length-1;r++){if(i[r]!=="text"||i[r+1]!=="text"||!An(e[r])||!An(e[r+1]))continue;let o=wb(e[r]);o!==null&&(e[r]=o.head,e[r+1]=o.tail+e[r+1],s[r+1]=s[r]+o.head.length)}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:s}}function Zb(t,e,n){let i=cb(),s=0,r=[],o=[],a=[],l=[],c=[],u=[],d=[],h=[],f=[],g=[],v=[],m=[];for(let S of i.segment(t))for(let w of Db(S.segment,S.isWordLike??!1,S.index,n)){let L=function(){u[A]!==null&&(o[A]=[um(r,u,d,A)],u[A]=null),o[A].push(w.text),a[A]=a[A]||w.isWordLike,h[A]=h[A]||N,f[A]=f[A]||I,g[A]=k,v[A]=z,m[A]=hm(f[A],D)},x=w.kind==="text",T=Rb(w.text,w.isWordLike,w.kind),N=An(w.text),I=lm(w.text),D=ko(w.text),k=Sc(w.text),z=Ib(w.text),A=s-1;e.carryCJKAfterClosingQuote&&x&&s>0&&l[A]==="text"&&N&&h[A]&&g[A]||x&&s>0&&l[A]==="text"&&yb(w.text)&&h[A]||x&&s>0&&l[A]==="text"&&v[A]?L():x&&s>0&&l[A]==="text"&&w.isWordLike&&I&&m[A]?(L(),a[A]=!0):T!==null&&s>0&&l[A]==="text"&&u[A]===T?d[A]=(d[A]??1)+1:x&&!w.isWordLike&&s>0&&l[A]==="text"&&!h[A]&&(vb(w.text)||w.text==="-"&&a[A])?L():(r[s]=w.text,o[s]=[w.text],a[s]=w.isWordLike,l[s]=w.kind,c[s]=w.start,u[s]=T,d[s]=T===null?0:1,h[s]=N,f[s]=I,g[s]=k,v[s]=z,m[s]=hm(I,D),s++)}for(let S=0;S<s;S++){if(u[S]!==null){r[S]=um(r,u,d,S);continue}r[S]=Hn(o[S])}for(let S=1;S<s;S++)l[S]==="text"&&!a[S]&&Wh(r[S])&&l[S-1]==="text"&&!h[S-1]&&(r[S-1]+=r[S],a[S-1]=a[S-1]||a[S],r[S]="");let p=Array.from({length:s},()=>null),y=-1;for(let S=s-1;S>=0;S--){let w=r[S];if(w.length!==0){if(l[S]==="text"&&!a[S]&&y>=0&&l[y]==="text"&&(Sb(w)||w==="-"&&Cb(r[y]))){let x=p[y]??[];x.push(w),p[y]=x,c[y]=c[S],r[S]="";continue}y=S}}for(let S=0;S<s;S++){let w=p[S];w!=null&&(r[S]=Fb(w,r[S]))}let E=0;for(let S=0;S<s;S++){let w=r[S];w.length!==0&&(E!==S&&(r[E]=w,a[E]=a[S],l[E]=l[S],c[E]=c[S]),E++)}r.length=E,a.length=E,l.length=E,c.length=E;let b=Yb({len:E,texts:r,isWordLike:a,kinds:l,starts:c}),R=qb(Xb($b(Wb(Vb(kb(b))))));for(let S=0;S<R.len-1;S++){let w=Nb(R.texts[S]);w!==null&&(R.kinds[S]!=="space"&&R.kinds[S]!=="preserved-space"||R.kinds[S+1]!=="text"||!lm(R.texts[S+1])||(R.texts[S]=w.space,R.isWordLike[S]=!1,R.kinds[S]=R.kinds[S]==="preserved-space"?"preserved-space":"space",R.texts[S+1]=w.marks+R.texts[S+1],R.starts[S+1]=R.starts[S]+w.space.length))}return R}function Kb(t,e){if(t.len===0)return[];if(!e.preserveHardBreaks)return[{startSegmentIndex:0,endSegmentIndex:t.len,consumedEndSegmentIndex:t.len}];let n=[],i=0;for(let s=0;s<t.len;s++)t.kinds[s]==="hard-break"&&(n.push({startSegmentIndex:i,endSegmentIndex:s,consumedEndSegmentIndex:s+1}),i=s+1);return i<t.len&&n.push({startSegmentIndex:i,endSegmentIndex:t.len,consumedEndSegmentIndex:t.len}),n}function Jb(t,e,n){if(e.len<=1)return e;let i=[],s=[],r=[],o=[],a=-1,l=!1;function c(h){i.push(e.texts[h]),s.push(e.isWordLike[h]),r.push("text"),o.push(e.starts[h])}function u(h,f){let g=!1;for(let p=h;p<f;p++)g=g||e.isWordLike[p];let v=e.starts[h],m=f<e.len?e.starts[f]:t.length;i.push(t.slice(v,m)),s.push(g),r.push("text"),o.push(v)}function d(h){if(!(a<0)){if(l)a+1===h?c(a):u(a,h);else for(let f=a;f<h;f++)c(f);a=-1,l=!1}}for(let h=0;h<e.len;h++){let f=e.texts[h],g=e.kinds[h];if(g==="text"){a>=0&&!Hh(e.texts[h-1],n)&&d(h),a<0&&(a=h),l=l||An(f);continue}d(h),i.push(f),s.push(e.isWordLike[h]),r.push(g),o.push(e.starts[h])}return d(e.len),{len:i.length,texts:i,isWordLike:s,kinds:r,starts:o}}function pm(t,e,n="normal",i="normal"){let s=rb(n),r=s.mode==="pre-wrap"?ab(t):ob(t);if(r.length===0)return{normalized:r,chunks:[],len:0,texts:[],isWordLike:[],kinds:[],starts:[]};let o=Zb(r,e,s),a=i==="keep-all"?Jb(r,o,e.breakKeepAllAfterPunctuation):o;return{normalized:r,chunks:Kb(a,s),...a}}var Sr=null,mm=new Map,Mr=null,jb=96,Qb=/\p{Emoji_Presentation}/u,e1=/[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u20E3]/u,Xh=null,gm=new Map;function $h(){if(Sr!==null)return Sr;if(typeof OffscreenCanvas<"u")return Sr=new OffscreenCanvas(1,1).getContext("2d"),Sr;if(typeof document<"u")return Sr=document.createElement("canvas").getContext("2d"),Sr;throw new Error("Text measurement requires OffscreenCanvas or a DOM canvas context.")}function t1(t){let e=mm.get(t);return e||(e=new Map,mm.set(t,e)),e}function Ei(t,e){let n=e.get(t);return n===void 0&&(n={width:$h().measureText(t).width,containsCJK:An(t)},e.set(t,n)),n}function Er(){if(Mr!==null)return Mr;if(typeof navigator>"u")return Mr={lineFitEpsilon:.005,carryCJKAfterClosingQuote:!1,breakKeepAllAfterPunctuation:!0,preferPrefixWidthsForBreakableRuns:!1,preferEarlySoftHyphenBreak:!1},Mr;let t=navigator.userAgent,n=navigator.vendor==="Apple Computer, Inc."&&t.includes("Safari/")&&!t.includes("Chrome/")&&!t.includes("Chromium/")&&!t.includes("CriOS/")&&!t.includes("FxiOS/")&&!t.includes("EdgiOS/"),i=t.includes("Chrome/")||t.includes("Chromium/")||t.includes("CriOS/")||t.includes("Edg/");return Mr={lineFitEpsilon:n?1/64:.005,carryCJKAfterClosingQuote:i,breakKeepAllAfterPunctuation:!n,preferPrefixWidthsForBreakableRuns:n,preferEarlySoftHyphenBreak:n},Mr}function n1(t){let e=t.match(/(\d+(?:\.\d+)?)\s*px/);return e?parseFloat(e[1]):16}function xm(){return Xh===null&&(Xh=new Intl.Segmenter(void 0,{granularity:"grapheme"})),Xh}function i1(t){return Qb.test(t)||t.includes("\uFE0F")}function _m(t){return e1.test(t)}function s1(t,e){let n=gm.get(t);if(n!==void 0)return n;let i=$h();i.font=t;let s=i.measureText("\u{1F600}").width;if(n=0,s>e+.5&&typeof document<"u"&&document.body!==null){let r=document.createElement("span");r.style.font=t,r.style.display="inline-block",r.style.visibility="hidden",r.style.position="absolute",r.textContent="\u{1F600}",document.body.appendChild(r);let o=r.getBoundingClientRect().width;document.body.removeChild(r),s-o>.5&&(n=s-o)}return gm.set(t,n),n}function r1(t){let e=0,n=xm();for(let i of n.segment(t))i1(i.segment)&&e++;return e}function o1(t,e){return e.emojiCount===void 0&&(e.emojiCount=r1(t)),e.emojiCount}function Ki(t,e,n){return n===0?e.width:e.width-o1(t,e)*n}function vm(t,e,n,i,s){if(e.breakableFitAdvances!==void 0&&e.breakableFitMode===s)return e.breakableFitAdvances;e.breakableFitMode=s;let r=xm(),o=[];for(let u of r.segment(t))o.push(u.segment);if(o.length<=1)return e.breakableFitAdvances=null,e.breakableFitAdvances;if(s==="sum-graphemes"){let u=[];for(let d of o){let h=Ei(d,n);u.push(Ki(d,h,i))}return e.breakableFitAdvances=u,e.breakableFitAdvances}if(s==="pair-context"||o.length>jb){let u=[],d=null,h=0;for(let f of o){let g=Ei(f,n),v=Ki(f,g,i);if(d===null)u.push(v);else{let m=d+f,p=Ei(m,n);u.push(Ki(m,p,i)-h)}d=f,h=v}return e.breakableFitAdvances=u,e.breakableFitAdvances}let a=[],l="",c=0;for(let u of o){l+=u;let d=Ei(l,n),h=Ki(l,d,i);a.push(h-c),c=h}return e.breakableFitAdvances=a,e.breakableFitAdvances}function ym(t,e){let n=$h();n.font=t;let i=t1(t),s=n1(t),r=e?s1(t,s):0;return{cache:i,fontSize:s,emojiCorrection:r}}function a1(t){return t==="space"||t==="zero-width-break"||t==="soft-hyphen"}function Em(t){return t==="space"||t==="preserved-space"||t==="tab"||t==="zero-width-break"||t==="soft-hyphen"}function bm(t,e,n=t.widths.length){for(;e<n;){let i=t.kinds[e];if(!a1(i))break;e++}return e}function l1(t,e){if(e<=0)return 0;let n=t%e;return Math.abs(n)<=1e-6?e:e-n}function c1(t,e,n){return t.letterSpacing!==0&&e&&t.spacingGraphemeCounts[n]>0?t.letterSpacing:0}function Yh(t,e){return e===0?0:t+e}function u1(t,e){return t.letterSpacing!==0&&t.spacingGraphemeCounts[e]>0?t.letterSpacing:0}function h1(t,e,n,i,s){let r=e==="tab"?s+u1(t,n):t.lineEndFitAdvances[n];return Yh(i,r)}function Sm(t,e,n,i){let s=e==="tab"?0:t.lineEndFitAdvances[n];return Yh(i,s)}function Mm(t,e,n,i,s){let r=e==="tab"?s:t.lineEndPaintAdvances[n];return Yh(i,r)}function d1(t,e,n){return t.letterSpacing!==0&&e?n+t.letterSpacing:n}function f1(t,e){return t.letterSpacing===0?e:e+t.letterSpacing}function p1(t,e,n,i,s){if(t.letterSpacing===0)return 0;if(s>0)return t.spacingGraphemeCounts[i]>0?t.letterSpacing:0;for(let r=i-1;r>=e;r--){let o=t.kinds[r];if(!(o==="space"||o==="zero-width-break"||o==="hard-break")){if(o==="soft-hyphen"){if(r===i-1)return 0;continue}return r===e&&n>0||t.spacingGraphemeCounts[r]>0?t.letterSpacing:0}}return 0}function m1(t,e,n,i,s,r){return e+p1(t,n,i,s,r)}function Am(t,e){return Tm(t,e)}function g1(t,e,n){let{widths:i,kinds:s,breakableFitAdvances:r}=t;if(i.length===0)return 0;let a=Er().lineFitEpsilon,l=e+a,c=0,u=0,d=!1,h=0,f=0,g=0,v=0,m=-1,p=0;function y(){m=-1,p=0}function E(T=g,N=v,I=u){c++,n?.(I,h,f,T,N),u=0,d=!1,y()}function b(T,N){d=!0,h=T,f=0,g=T+1,v=0,u=N}function R(T,N,I){d=!0,h=T,f=N,g=T,v=N+1,u=I}function S(T,N){if(!d){b(T,N);return}u+=N,g=T+1,v=0}function w(T,N){let I=r[T];for(let D=N;D<I.length;D++){let k=I[D];d?u+k>l?(E(),R(T,D,k)):(u+=k,g=T,v=D+1):R(T,D,k)}d&&g===T&&v===I.length&&(g=T+1,v=0)}let x=0;for(;x<i.length&&!(!d&&(x=bm(t,x),x>=i.length));){let T=i[x],N=s[x],I=Em(N);if(!d){T>l&&r[x]!==null?w(x,0):b(x,T),I&&(m=x+1,p=u-T),x++;continue}if(u+T>l){if(I){S(x,T),E(x+1,0,u-T),x++;continue}if(m>=0){if(g>m||g===m&&v>0){E();continue}E(m,0,p);continue}if(T>l&&r[x]!==null){E(),w(x,0),x++;continue}E();continue}S(x,T),I&&(m=x+1,p=u-T),x++}return d&&E(),c}function Tm(t,e,n){if(t.simpleLineWalkFastPath)return g1(t,e,n);let{widths:i,kinds:s,breakableFitAdvances:r,discretionaryHyphenWidth:o,chunks:a}=t;if(i.length===0||a.length===0)return 0;let l=Er(),c=l.lineFitEpsilon,u=e+c,d=0,h=0,f=!1,g=0,v=0,m=0,p=0,y=-1,E=0,b=0,R=null;function S(){y=-1,E=0,b=0,R=null}function w(){return R==="soft-hyphen"&&y===m&&p===0?b:h}function x(A=m,L=p,F){d++,n!==void 0&&n(m1(t,F??w(),g,v,A,L),g,v,A,L),h=0,f=!1,S()}function T(A,L){f=!0,g=A,v=0,m=A+1,p=0,h=L}function N(A,L,F){f=!0,g=A,v=L,m=A,p=L+1,h=F}function I(A,L){if(!f){T(A,L);return}h+=L,m=A+1,p=0}function D(A,L,F,X,Y,j){if(!L)return;let te=Sm(t,A,F,Y),me=Mm(t,A,F,Y,X);y=F+1,E=h-j+te,b=h-j+me,R=A}function k(A,L){let F=r[A];for(let X=L;X<F.length;X++){let Y=F[X];if(!f)N(A,X,Y);else{let j=d1(t,!0,Y),te=h+j;f1(t,te)>u?(x(),N(A,X,Y)):(h=te,m=A,p=X+1)}}f&&m===A&&p===F.length&&(m=A+1,p=0)}function z(A){d++,n?.(0,A.startSegmentIndex,0,A.consumedEndSegmentIndex,0),S()}for(let A=0;A<a.length;A++){let L=a[A];if(L.startSegmentIndex===L.endSegmentIndex){z(L);continue}f=!1,h=0,g=L.startSegmentIndex,v=0,m=L.startSegmentIndex,p=0,S();let F=L.startSegmentIndex;for(;F<L.endSegmentIndex&&!(!f&&(F=bm(t,F,L.endSegmentIndex),F>=L.endSegmentIndex));){let X=s[F],Y=Em(X),j=c1(t,f,F),te=X==="tab"?l1(h+j,t.tabStopAdvance):i[F],me=j+te,Oe=h1(t,X,F,j,te);if(X==="soft-hyphen"){f&&(m=F+1,p=0,y=F+1,E=h+o,b=h+o,R=X),F++;continue}if(!f){Oe>u&&r[F]!==null?k(F,0):T(F,te),D(X,Y,F,te,j,me),F++;continue}if(h+Oe>u){let Ne=h+Sm(t,X,F,j),Z=h+Mm(t,X,F,j,te);if(R==="soft-hyphen"&&l.preferEarlySoftHyphenBreak&&E<=u){x(y,0,b);continue}if(Y&&Ne<=u){I(F,me),x(F+1,0,Z),F++;continue}if(y>=0&&E<=u){if(m>y||m===y&&p>0){x();continue}let ce=y;x(ce,0,b),F=ce;continue}if(Oe>u&&r[F]!==null){x(),k(F,0),F++;continue}x();continue}I(F,me),D(X,Y,F,te,j,me),F++}if(f){let X=y===L.consumedEndSegmentIndex?b:h;x(L.consumedEndSegmentIndex,0,X)}}return d}var qh=null;function wm(){return qh===null&&(qh=new Intl.Segmenter(void 0,{granularity:"grapheme"})),qh}function x1(t){return t?{widths:[],lineEndFitAdvances:[],lineEndPaintAdvances:[],kinds:[],simpleLineWalkFastPath:!0,segLevels:null,breakableFitAdvances:[],letterSpacing:0,spacingGraphemeCounts:[],discretionaryHyphenWidth:0,tabStopAdvance:0,chunks:[],segments:[]}:{widths:[],lineEndFitAdvances:[],lineEndPaintAdvances:[],kinds:[],simpleLineWalkFastPath:!0,segLevels:null,breakableFitAdvances:[],letterSpacing:0,spacingGraphemeCounts:[],discretionaryHyphenWidth:0,tabStopAdvance:0,chunks:[]}}function _1(t,e){let n=[],i=[],s=0,r=!1,o=!1,a=!1;function l(){i.length!==0&&(n.push({text:i.length===1?i[0]:i.join(""),start:s}),i=[],r=!1,o=!1,a=!1)}function c(d,h,f){i=[d],s=h,r=f,o=Sc(d),a=Bo.has(d)}function u(d,h){i.push(d),r=r||h;let f=Sc(d);d.length===1&&Zi.has(d)?o=o||f:o=f,a=!1}for(let d of wm().segment(t)){let h=d.segment,f=An(h);if(i.length===0){c(h,d.index,f);continue}if(a||_c.has(h)||Zi.has(h)||e.carryCJKAfterClosingQuote&&f&&o){u(h,f);continue}if(!r&&!f){u(h,f);continue}l(),c(h,d.index,f)}return l(),n}function v1(t,e,n){if(e.length<=1)return e;let i=[],s=-1,r=!1;function o(l,c){let u=e[l].start,d=c<e.length?e[c].start:t.length;i.push({text:t.slice(u,d),start:u})}function a(l){if(!(s<0)){if(r)s+1===l?i.push(e[s]):o(s,l);else for(let c=s;c<l;c++)i.push(e[c]);s=-1,r=!1}}for(let l=0;l<e.length;l++){let c=e[l];s>=0&&!Hh(e[l-1].text,n)&&a(l),s<0&&(s=l),r=r||An(c.text)}return a(e.length),i}function Cm(t,e){if(e==="zero-width-break"||e==="soft-hyphen"||e==="hard-break")return 0;if(e==="tab")return 1;let n=0,i=wm();for(let s of i.segment(t))n++;return n}function y1(t,e,n){return e>1?t+(e-1)*n:t}function S1(t,e,n,i,s){let r=Er(),{cache:o,emojiCorrection:a}=ym(e,_m(t.normalized)),l=Ki("-",Ei("-",o),a)+(s===0?0:s*2),u=Ki(" ",Ei(" ",o),a)*8,d=s!==0;if(t.len===0)return x1(n);let h=[],f=[],g=[],v=[],m=t.chunks.length<=1&&!d,p=n?[]:null,y=[],E=[],b=n?[]:null,R=Array.from({length:t.len});function S(N,I,D,k,z,A,L,F){z!=="text"&&z!=="space"&&z!=="zero-width-break"&&(m=!1),h.push(I),f.push(D),g.push(k),v.push(z),p?.push(A),y.push(L),d&&E.push(F),b!==null&&b.push(N)}function w(N,I,D,k,z){let A=Ei(N,o),L=d?Cm(N,I):0,F=y1(Ki(N,A,a),L,s),X=I==="space"||I==="preserved-space"||I==="zero-width-break"?0:F,Y=X===0?0:X+(L>0?s:0),j=I==="space"||I==="zero-width-break"?0:F;if(z&&k&&N.length>1){let te="sum-graphemes";s!==0?te="segment-prefixes":Uo(N)?te="pair-context":r.preferPrefixWidthsForBreakableRuns&&(te="segment-prefixes");let me=vm(N,A,o,a,te);S(N,F,Y,j,I,D,me,L);return}S(N,F,Y,j,I,D,null,L)}for(let N=0;N<t.len;N++){R[N]=h.length;let I=t.texts[N],D=t.isWordLike[N],k=t.kinds[N],z=t.starts[N];if(k==="soft-hyphen"){S(I,0,l,l,k,z,null,0);continue}if(k==="hard-break"){S(I,0,0,0,k,z,null,0);continue}if(k==="tab"){S(I,0,0,0,k,z,null,d?Cm(I,k):0);continue}let A=Ei(I,o);if(k==="text"&&A.containsCJK){let L=_1(I,r),F=i==="keep-all"?v1(I,L,r.breakKeepAllAfterPunctuation):L;for(let X=0;X<F.length;X++){let Y=F[X];w(Y.text,"text",z+Y.start,D,i==="keep-all"||!An(Y.text))}continue}w(I,k,z,D,!0)}let x=M1(t.chunks,R,h.length),T=p===null?null:am(t.normalized,p);return b!==null?{widths:h,lineEndFitAdvances:f,lineEndPaintAdvances:g,kinds:v,simpleLineWalkFastPath:m,segLevels:T,breakableFitAdvances:y,letterSpacing:s,spacingGraphemeCounts:E,discretionaryHyphenWidth:l,tabStopAdvance:u,chunks:x,segments:b}:{widths:h,lineEndFitAdvances:f,lineEndPaintAdvances:g,kinds:v,simpleLineWalkFastPath:m,segLevels:T,breakableFitAdvances:y,letterSpacing:s,spacingGraphemeCounts:E,discretionaryHyphenWidth:l,tabStopAdvance:u,chunks:x}}function M1(t,e,n){let i=[];for(let s=0;s<t.length;s++){let r=t[s],o=r.startSegmentIndex<e.length?e[r.startSegmentIndex]:n,a=r.endSegmentIndex<e.length?e[r.endSegmentIndex]:n,l=r.consumedEndSegmentIndex<e.length?e[r.consumedEndSegmentIndex]:n;i.push({startSegmentIndex:o,endSegmentIndex:a,consumedEndSegmentIndex:l})}return i}function E1(t,e,n,i){let s=i?.wordBreak??"normal",r=i?.letterSpacing??0,o=pm(t,Er(),i?.whiteSpace,s);return S1(o,e,n,s,r)}function Rm(t,e,n){return E1(t,e,!1,n)}function Im(t,e,n){let i=Am(t,e);return{lineCount:i,height:i*n}}var Nm={type:"change"},Kh={type:"start"},Lm={type:"end"},Mc=new yi,Pm=new tn,b1=Math.cos(70*Lo.DEG2RAD),Ot=new P,on=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zh=1e-6,Ec=class extends Mo{constructor(e,n=null){super(e,n),this.state=ct.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kn.ROTATE,MIDDLE:kn.DOLLY,RIGHT:kn.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new dn,this._lastTargetPosition=new P,this._quat=new dn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fr,this._sphericalDelta=new fr,this._scale=1,this._panOffset=new P,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new P,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=T1.bind(this),this._onPointerDown=A1.bind(this),this._onPointerUp=C1.bind(this),this._onContextMenu=F1.bind(this),this._onMouseWheel=I1.bind(this),this._onKeyDown=N1.bind(this),this._onTouchStart=P1.bind(this),this._onTouchMove=L1.bind(this),this._onMouseDown=w1.bind(this),this._onMouseMove=R1.bind(this),this._interceptControlDown=D1.bind(this),this._interceptControlUp=O1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nm),this.update(),this.state=ct.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let n=this.object.position;Ot.copy(n).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ot.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Mc.origin.copy(this.object.position),Mc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mc.direction))<b1?this.object.lookAt(this.target):(Pm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mc.intersectPlane(Pm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zh||this._lastTargetPosition.distanceToSquared(this.target)>Zh?(this.dispatchEvent(Nm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){let n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ot.setFromMatrixColumn(n,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,n){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(n,1):(Ot.setFromMatrixColumn(n,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ot.copy(s).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ce,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){let n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function A1(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function T1(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function C1(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lm),this.state=ct.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function w1(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case kn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ct.DOLLY;break;case kn.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}break;case kn.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Kh)}function R1(t){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function I1(t){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(t.preventDefault(),this.dispatchEvent(Kh),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Lm))}function N1(t){this.enabled!==!1&&this._handleKeyDown(t)}function P1(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ct.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ct.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Kh)}function L1(t){switch(this._trackPointer(t),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ct.NONE}}function F1(t){this.enabled!==!1&&t.preventDefault()}function D1(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function O1(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jh(t){let e=new Date(t);return Number.isNaN(e.valueOf())?"":e.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Fm(t){return t>=1e3?`${(t/1e3).toFixed(2)}s`:`${t}ms`}function Dm(t){return t<1e3?`${t} ms`:`${(t/1e3).toFixed(1)} s`}function gn(t){let e=t.delta>0?"+":"";return`${t.left} -> ${t.right} (${e}${t.delta})`}function br(t){return t==null?"n/a":`${t.toFixed(0)}%`}function Fe(t,e="n/a"){return t==null||!Number.isFinite(t)?e:t.toLocaleString()}function ai(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Om(t,e=0){return e>0?`${t} JSONL records + ${Vo(e)} pending`:`${t} JSONL records`}function Vo(t){return t>=1024*1024?`${(t/(1024*1024)).toFixed(1)} MB`:t>=1024?`${Math.ceil(t/1024)} KB`:`${t} B`}var U1=/([?&])((?:access_)?token|api[_-]?key|secret|password|passwd|auth|session|cookie)=([^&#\s]+)/gi,B1=/\b((?:access_)?token|api[_-]?key|secret|password|passwd|cookie|authorization)\s*([:=])\s*("[^"]*"|'[^']*'|[^\s|;,]+)/gi,k1=/\bBearer\s+[A-Za-z0-9._~+/=-]{6,}/gi,V1=/data:image\/[a-z0-9.+-]+;base64,[A-Za-z0-9+/=]+/gi,z1=/\b[A-Za-z0-9+/]{32,}={0,2}\b/g,H1=/\b[A-Z0-9_]*(?:SECRET|PASSWORD|TOKEN|PRIVATE|COOKIE|DO_NOT_COPY)[A-Z0-9_]*\b/g,G1=/[A-Za-z]:[\\/]+Users[\\/]+[^\s|"'<>]+/g,W1=/\/(?:home|Users)\/[^\s|"'<>]+/g;function Ji(t){let e=zm(t);return e?e.replace(V1,"[REDACTED_IMAGE_PAYLOAD]").replace(U1,(i,s,r)=>`${s}${r}=[REDACTED]`).replace(k1,"Bearer [REDACTED]").replace(B1,(i,s,r)=>`${s}${r===":"?": ":"="}[REDACTED]`).replace(G1,Um).replace(W1,Um).replace(z1,"[REDACTED_BASE64]").replace(H1,"[REDACTED_PRIVATE_TEXT]"):""}function Bm(t){let e=[Gn(t.role),Gn(t.eventType),t.toolName?`tool: ${Gn(t.toolName)}`:"",t.filePath?`path: ${Ji(t.filePath)}`:"",t.status?`status: ${Gn(t.status)}`:""].filter(Boolean),n=zm(t.rawSummary);if(n){let i=Ji(n);e.push(n===i?"detail: omitted for safe sharing":"detail: redacted for safe sharing")}return e.length?e.join("; "):"event summary unavailable"}function km(t){return["Perlustron copy-safe reference",t.source?`source: ${Gn(t.source)}`:null,t.lineNumber!==null&&t.lineNumber!==void 0?`line: ${t.lineNumber}`:null,t.eventIndex!==null&&t.eventIndex!==void 0?`event_index: ${t.eventIndex}`:null,t.kind?`kind: ${Gn(t.kind)}`:null,t.summary?`summary: ${Ji(t.summary)}`:null,`perlustron: parser ${Gn(t.parserVersion||"unknown")} / schema ${Gn(t.schemaVersion||"unknown")}`,"caveat: copy-safe reference only; review raw logs separately before sharing raw content"].filter(e=>!!e).join(`
`)}function Vm(t){let e=t.rawLogsSafeToShare?"marked safe by current scan; still review before forwarding":"requires human review before sharing";return["Perlustron copy-safe share summary",t.source?`source: ${Gn(t.source)}`:null,t.sessionName?`session: ${Ji(t.sessionName)}`:null,`activity: ${Fe(t.totalTurns,"unknown")} turns / ${Fe(t.callCount,"unknown")} tool calls / ${Fe(t.fileChangeCount,"unknown")} file changes`,t.latestEventIndex!==null&&t.latestEventIndex!==void 0?`latest_event_index: ${t.latestEventIndex}`:null,t.cliContext?`cli: ${Ji(t.cliContext)}`:null,`perlustron: parser ${Gn(t.parserVersion||"unknown")} / schema ${Gn(t.schemaVersion||"unknown")}`,`raw_logs: ${e}`,`raw_caution: ${Ji(t.rawLogCaution||"Raw logs can contain prompts, paths, tool output, images, and credentials.")}`,"safe_surfaces: sanitized graph/export/copy-safe references are safer than raw logs, but still require human judgment before external sharing",`sanitized_graph: ${Ji(t.sanitizedGraphNote||"Use sanitized graph/export surfaces for review-friendly sharing.")}`,`redactions: ${Fe(t.redactedFieldCount,"unknown")} fields; images: ${Fe(t.imageCount,"unknown")}; api_token_required: ${t.apiTokenRequired?"yes (value not copied)":"no"}`].filter(n=>!!n).join(`
`)}function zm(t){return String(t??"").replace(/\s+/g," ").trim()}function Gn(t){return Ji(t)}function Um(t){let e=t.replace(/\\/g,"/").split("/").filter(Boolean);return`[PATH:${e.length?e[e.length-1]:"path"}]`}var X1=["add","update","delete","move"],Hm="http://www.w3.org/2000/svg",$1=["summary","map","timeline","transcript"],Gg=[...$1,"health","insights","diff","raw","export","settings"],Wg=["error","long","file","diff","artifact","compaction"],Y1=3e4,zo=18,q1=3e3,Gm=80,bc=900,Z1=840,K1=88,J1=180,Xg=56,$g=72,Wm='13px "Segoe UI", Arial, sans-serif',Xm='700 13px "Segoe UI", Arial, sans-serif',Yg=19,qg=18,j1=84,Q1=12,Zg=16,Kg=4,eA=19,jh=16,tA=["zoom-in","zoom-out","two-d","overview"],nA={codex:["M4 7l5 5-5 5","M12 17h8"],source:["M5 6h14","M5 12h14","M5 18h14","M8 4v4","M16 10v4","M11 16v4"],git:["M6 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M6 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M6 6v8a4 4 0 0 0 4 4h6","M6 10h6a4 4 0 0 1 4 4v4"],policy:["M12 3l7 4v5c0 4.5-2.8 7.4-7 9-4.2-1.6-7-4.5-7-9V7l7-4z","M9 12l2 2 4-5"],model:["M8 8h8v8H8z","M4 10h4","M4 14h4","M16 10h4","M16 14h4","M10 4v4","M14 4v4","M10 16v4","M14 16v4"],tools:["M14.7 6.3l3-3a2.1 2.1 0 0 1 3 3l-3 3","M13 8l3 3","M3 21l8-8","M9 11l4 4"]},iA=new Set(Gg);function Ic(t){return Array.isArray(t)?t[0]:t.fromId}function Nc(t){return Array.isArray(t)?t[1]:t.toId}function sA(t){return Array.isArray(t)?1:t.waypoints.length+1}function Qh(t){return t.reduce((e,n)=>e+sA(n),0)}function rA(t,e){if(!e||Ic(t)!==Ic(e)||Nc(t)!==Nc(e))return!1;let n=Array.isArray(t)?[]:t.waypoints,i=Array.isArray(e)?[]:e.waypoints;return n.length===i.length}function Te(t,e=document){let n=e.querySelector(t);if(!n)throw new Error(`Missing required element: ${t}`);return n}function Kc(t){return document.querySelectorAll(t)}function Ds(t){return t instanceof Error?t.message:String(t)}function ed(t,e,n){return e!==void 0&&t.includes(e)?e:n}function Sd(){return{compactionInProgress:!1,pendingPrompt:null,assistantStreaming:!1,latestAssistantEventIndex:null,latestAssistantPreview:null,latestTokenSample:null,activeToolCalls:[],completedToolCalls:[]}}function zt(){if(!be)throw new Error("Session graph has not loaded yet");return be}function Jg(t){return t.type==="call"?t.source.completedAt||t.source.startedAt||"Live context":t.source.timestamp||"Live context"}function oA(t){let e=new Date(t);return Number.isNaN(e.valueOf())?t:e.toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Md(t){Km.textContent=oA(t),Km.title=t}function aA(t){let e=t.replace(/^\s{0,3}#{1,6}\s+/,"").trim();return(e?e.replace(/:$/,"").trim():t)||t}function Ed(t,e="Selection"){hA.textContent=e,$m.textContent=aA(t),$m.title=t}function lA(t){if(t.type==="call"){let e=Jc(t.source.name);if(e)return e.toUpperCase()}return t.kind.replace(/[-_]+/g," ").toUpperCase()}function jg(t){return t.type==="prompt"?"":Qg(t)}function Qg(t){return t.type==="call"?Jc(t.source.name)??t.title:t.title}function e0(t){return t.type==="prompt"?`PROMPT ${t.promptIndex+1}`:t.type==="compaction"?`CHECKPOINT ${t.eventIndex}`:t.type==="fileChange"?`FILE ${t.eventIndex}`:t.type==="message"?`ASSISTANT ${t.eventIndex}`:t.type==="call"&&cA(t.source.name)?`SUBAGENT TURN ${t.eventIndex}`:`TURN ${t.eventIndex}`}function Jc(t){return t==="spawn_agent"?"subagent launch":t==="subagent"?"subagent result":t==="subagent.prompt"?"subagent prompt":t==="subagent.message"?"subagent message":t==="subagent.file"?"subagent file":t==="subagent.compaction"?"subagent compaction":t==="subagent.more"?"subagent overflow":null}function cA(t){return t.startsWith("subagent.")&&t!=="subagent"}function t0(t){return t.type==="prompt"?t.source.images:[]}var it=Te("#space"),uA=Te("#metadata-list"),hA=Te("#stream-title-label"),$m=Te("#stream-kind"),bd=Te("#stream-title"),Fr=Te("#stream-data"),Ym=Te("#stream-images"),dA=Te("#stream-close"),wc=Te("#stream-minimize"),jo=Te("#stream-copy-ref"),n0=Te("#stream-open-timeline"),i0=Te("#stream-open-transcript"),s0=Te("#stream-open-raw"),r0=Te("#prev-event"),o0=Te("#next-event"),a0=Te("#stage-turn-count"),Ad=Te("#stage-started"),qm=Te("#context-pressure-value"),Zm=Te("#context-pressure-bars"),Td=Te("#turn-number"),Km=Te("#turn-timestamp"),fA=Te("#metric-prompts"),pA=Te("#metric-errors"),mA=Te("#metric-long"),gA=Te("#metric-files"),xA=Te("#metric-diffs"),_A=Te("#metric-artifacts"),vA=Te("#metric-compactions"),Cd=Te("#context-event-title"),os=Te("#event-popup"),yA=Te("#topbar"),SA=Te("#live-toggle"),l0=Te("#live-state"),c0=Te("#live-copy"),es=Te("#search-input"),MA=Te("#mode-panel"),EA=Te("#mode-panel-kicker"),bA=Te("#mode-panel-title"),en=Te("#mode-panel-summary"),AA=Te("#mode-panel-filters"),Ut=Te("#mode-panel-content"),Pc=Te("#mode-filter-role"),Lc=Te("#mode-filter-type"),Fc=Te("#mode-filter-tool"),Dc=Te("#mode-filter-file"),u0=Te("#mode-filter-errors"),h0=Te("#mode-filter-unknown"),d0=Te("#mode-filter-malformed"),f0=Te("#mode-filter-redacted"),p0=Te("#mode-filter-utc"),m0=Kc("[data-view-action]"),g0=Kc("[data-metric]"),x0=Kc("[data-app-mode]"),_0=Kc("[data-source]"),li=Te("#session-select"),Qo=Te("#session-select-status"),rd=Te("#settings-button"),v0=Te("#scene-frame"),TA=3500,CA=1e3,wA=180,RA=12e3,IA=1200,NA=12e3,Ac=20,wd=-1.4,PA=38,LA=52,y0=46,FA=58,DA=24,OA=104,UA=1.72,Jm=1.08,BA=4.3,kA=2.55,Rd=-1e4,Id=3600,S0=28,VA=3,zA=2,Dr="compaction-progress",Is="live-prompt-progress",jm=4.8,Qm=5.2,HA=1.25,GA=3.7,WA=.04,XA=.42,M0=Math.PI/2,E0=Math.PI*.76,As=6.8,eg=5.8,$A=1.75,YA=2.65,qA=.16,od=6,ZA=.86,KA=3.05,JA=.72,jA=.24,QA=.62,Tr=1,eT=1.4,tT=1.35,nT=1.7,iT=.62,sT=.04,rT=0,oT=1.15,aT=0,lT=1.05,b0=3.8,cT=9.2,uT=22,hT=6.4,A0=2.35,dT=.78,fT=.36,pT=1.85,mT=2.15,T0=4.15,C0=2.1,gT=T0+C0,xT=3.8,_T=.74,vT=.2,yT=.86,ST=.03,MT=.24,ET=E0,bT=.72,AT=1.85,TT=.1,Oc=5,CT=.78,wT=.44,RT=.38,IT=.1,NT=.3,tg=2.4,PT=6.5,LT=.16,FT=34,DT=100,ng=4,OT=16,UT=70,BT=.72,kT=2.6,VT=new Set(["KeyW","KeyA","KeyS","KeyD"]),w0="Space",zT=new Set(["ControlLeft","ControlRight"]),HT=new Set(["ShiftLeft","ShiftRight"]),ig=.0032,GT=1.4,R0=28,sg=Math.PI/2-.08,WT=4,rg=24,bi=null;try{bi=new mc({canvas:it,antialias:!1,alpha:!1,powerPreference:"high-performance"}),bi.setClearColor(197894,1),bi.outputColorSpace=Kt,bi.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75))}catch(t){it.classList.add("webgl-unavailable"),console.warn(`WebGL renderer unavailable: ${Ds(t)}`)}var Rn=new no,ea=new Qn;ea.renderOrder=4;Rn.add(ea);var ta=new Qn;ta.renderOrder=4.2;Rn.add(ta);var We=new $t(50,1,.1,RA);We.position.set(0,y0,.01);var Qe=new Ec(We,bi?.domElement??it);Qe.enableDamping=!0;Qe.dampingFactor=.07;Qe.enablePan=!1;Qe.enableRotate=!1;Qe.enableZoom=!1;Qe.mouseButtons.LEFT=kn.PAN;Qe.mouseButtons.RIGHT=kn.ROTATE;Qe.maxDistance=Number.POSITIVE_INFINITY;Qe.minDistance=0;Qe.target.set(0,0,0);var ad=new dr;ad.params.Points.threshold=1.05;var Or=new Ce,XT=new Ce(0,0),Tn=new Rt,Ms=new ze,ji=new P,I0=new P,og=new P,N0=new tn(new P(0,1,0),-wd),Es=new P,Uc=new dr,ag=new P,lg=new P,ui=new P,cg=new P,Ho=new P,Go=new ti(0,0,0,"YXZ"),ug=new ze(16777215),be=null,Ve=[],is=[],Nt=new Map,qo=new Map,na=[],ci={},Xn=null,an=null,ld=new Map,cd=new Map,nt=null,ft=null,Rc=null,Rr=null,Qi=null,td=!1,ts=null,$o=null,P0=0,ud=0,_t="overview",bt=$T(new URLSearchParams(window.location.search).get("mode")),Ts="three-d",Ns=D0(new URLSearchParams(window.location.search).get("source")),Nn=O0(new URLSearchParams(window.location.search).get("session")),$n=[],Wn=null,jt=null,hd=!1,Ai=null,hg=0,xn=null,dd=!1,Cs=null,Wo=null,Ir=null,Ps="",jc=null,Zo={},Nr=new Map,wn=!0,ws=!1,Bc=!1,wr=!1,Cr=!1,Os=0,Ko=null,Qc=!1,ia=!1,kc=0,Yn=Sd(),ns=Number.POSITIVE_INFINITY,Pr=null;var Br=!0,Lr=null,Nd=!1,Cn=new Set,Pd=!1,sa=null,fd=0,pd=0,Vc=null,ra=!1,md=0,gd=0,L0=0,F0=0,Ld=!1,zc=!1,dg=performance.now()/1e3,Tc=0,Hc={prompt:6547455,local:15908444,browser:7467682,web:8229887,coordination:15887725,tool:12044492,assistant:16777215,message:16777215,error:16736102,long:16760138,file:6615680,diff:4446719,artifact:9464063,compaction:16216063,subagent:9403903,"subagent-result":13023487,"file-add":6615680,"file-update":4446719,"file-delete":16736102,"file-move":16760138};function D0(t){return t==="claude"?"claude":"codex"}function $T(t){let e=t?.trim().toLowerCase();return e&&iA.has(e)?e:"summary"}function Ti(t=Ns){return t==="claude"?"Claude":"Codex"}function O0(t){let e=t?.trim();return e||null}function YT(){let t=new URL(window.location.href);t.searchParams.has("token")&&(t.searchParams.delete("token"),window.history.replaceState(window.history.state,"",`${t.pathname}${t.search}${t.hash}`))}var fg=(()=>{let t=new URLSearchParams(window.location.search),e=t.get("token");try{let n=e||sessionStorage.getItem("perlustronToken");return n&&sessionStorage.setItem("perlustronToken",n),t.has("token")&&YT(),n}catch{return e}})();function U0(t,{includeSession:e=!0,includeSource:n=!0,sessionPath:i=Nn}={}){return n&&t.searchParams.set("source",Ns),e&&i&&t.searchParams.set("session",i),fg&&t.searchParams.set("token",fg),t}function kr(t,e={}){let n=new URL(t,window.location.origin);return U0(n,e)}function Ls(t){return t===Os}var pg=new mo(.78,16,10),qT=new ho(.72,.72,.12,32),ZT=new fo(.72,0),KT=new ki(.96,.12,.58),JT=new ur(.78,.9,96),jT=new ur(.9,1.02,96),mg=new Bn({color:16777215}),QT=new Bn({color:16777215}),eC=new Bn({color:16777215}),tC=new Bn({color:16777215});Rn.add(new _o(8778239,1052688,1.5));var B0=new yo(16777215,2.2);B0.position.set(14,24,12);Rn.add(B0);var Ur=new So(NA,IA,1456447,1456447);Ur.position.y=wd;Ur.material.transparent=!0;Ur.material.opacity=.34;Rn.add(Ur);dA.addEventListener("click",()=>{ft=null,Px(),ru(),vn(),Fs()});wc.addEventListener("click",()=>Hx(!wr));jo.addEventListener("click",oR);n0.addEventListener("click",()=>ou("timeline"));i0.addEventListener("click",()=>ou("transcript"));s0.addEventListener("click",()=>ou("raw"));Hx(!1);window.addEventListener("resize",Ox);it.addEventListener("contextmenu",_w);it.addEventListener("wheel",vw,{passive:!1});it.addEventListener("pointerdown",yw,{capture:!0});it.addEventListener("pointermove",Sw,{capture:!0});it.addEventListener("pointerup",zd,{capture:!0});it.addEventListener("pointercancel",zd,{capture:!0});it.addEventListener("pointerdown",Aw);it.addEventListener("pointermove",iu);it.addEventListener("pointermove",Tw);it.addEventListener("pointerup",Rx);it.addEventListener("pointercancel",Rx);it.addEventListener("click",Vw);it.addEventListener("dblclick",zw);QR();Ox();await Fd();await Vr();uu();bi?.setAnimationLoop(gw);async function Vr({previousLineCountOverride:t=null,previousLatestOverride:e=null,suppressLiveAnimation:n=!1}={}){let i=++P0,s=Os;try{let r=await fetch(kr("/api/session"),{cache:"no-store"});if(!r.ok)throw new Error(`Session API returned ${r.status}`);let o=await r.json();if(!Ls(s)||i<ud)return;ud=i;let a=be!==null,l=a&&G0()?eR()?.clone()??null:null,c=t??be?.lineCount??o.lineCount,u=e??Ko??o.latestEventIndex,d=a&&o.latestEventIndex>u,h=a&&o.latestEventIndex===u&&o.lineCount===c,f=d&&!n;if(ns=f?u:Number.POSITIVE_INFINITY,Ko=o.latestEventIndex,Qc=!1,be=o,h&&Cr){ss(),nd();return}if(a&&Cr&&EC()){ss(),f&&(vg(l),Hg()),nd();return}X0({preserveView:a&&Cr,preserveEventContext:a&&Cr}),Cr=!0,ss(),f&&(vg(l),Hg()),(o.pendingBytes??0)>0&&!ts&&W0(o.lineCount,Ko??o.latestEventIndex),nd()}catch(r){if(!Ls(s))return;Bc=!1,aC(),la(r)}}async function xd(){if(td)return;td=!0;let t=Os;try{if(!be){await Vr();return}let e=await nC();if(!Ls(t))return;H0(e)}catch(e){la(e)}finally{td=!1}}async function nC(){let t=await fetch(kr("/api/session/status"),{cache:"no-store"});if(!t.ok)throw new Error(`Session status returned ${t.status}`);return await t.json()}async function iC(t){let e=zt(),n=kr("/api/session/diff");n.searchParams.set("leftSession",e.sessionPath),n.searchParams.set("rightSession",t),n.searchParams.set("redacted","true"),n.searchParams.set("profile","strict");let i=await fetch(n,{cache:"no-store"});if(!i.ok)throw new Error(`Diff API returned ${i.status}`);return await i.json()}async function sC(){let t=kr("/api/session/unknowns");t.searchParams.set("profile","strict");let e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`Unknowns API returned ${e.status}`);return await e.json()}async function Fd({retryWithoutSelection:t=!0,generation:e=Os}={}){z0();try{let n=await fetch(kr("/api/sessions"),{cache:"no-store"});if(!n.ok)throw new Error(`Sessions API returned ${n.status}`);let i=await n.json();if(!Ls(e))return;$n=i.sessions??[],gg(i)}catch(n){if(!Ls(e))return;if(Nn&&t){Nn=null,ca(),await Fd({retryWithoutSelection:!1,generation:e});return}$n=[],gg(),la(n)}}function gg(t){let e=document.createDocumentFragment(),n=t?.selectedPath||Nn||$n[0]?.path||"";if(!$n.length){let i=document.createElement("option");i.value="",i.textContent="No sessions found",e.append(i),li.replaceChildren(e),li.disabled=!0,Qo.textContent="0";return}$n.forEach(i=>{let s=document.createElement("option");s.value=i.path,s.textContent=k0(i),s.title=i.path,e.append(s)}),li.replaceChildren(e),li.value=n,li.disabled=!1,Qo.textContent=`${$n.length}`}function k0(t){return[t.isLive?"Live":"",t.explicit?"Default":"",t.label,Jh(t.lastModifiedAt),Vo(t.byteLength)].filter(Boolean).join(" - ")}async function rC(t){let e=O0(t);if(e===Nn)return;hu(),Nn=e,jt=null,Ai=null,xn=null,Cs=null,Bc=!0,ca(),V0();let n=Os;lC(),await Vr({suppressLiveAnimation:!0}),Ls(n)&&uu()}function ca(){let t=new URL(window.location.href);t.searchParams.set("source",Ns),t.searchParams.set("mode",bt),Nn?t.searchParams.set("session",Nn):t.searchParams.delete("session"),t.searchParams.delete("token"),window.history.replaceState({},"",`${t.pathname}${t.search}${t.hash}`)}function V0(){Os+=1,ts&&clearTimeout(ts),ts=null,$o=null,P0=0,ud=0,ft=null,nt=null,jc=null,Object.keys(Zo).forEach(t=>{delete Zo[t]}),Nr.clear(),_t="overview",Ko=null,Qc=!1,Yn=Sd(),ia=!1,kc=0,ns=Number.POSITIVE_INFINITY,Pr&&clearTimeout(Pr),Pr=null,Cr=!1,be=null,Ve=[],is=[],Nt.clear(),qo.clear(),fx(),kx()}function z0(){li.disabled=!0,Qo.textContent="Loading"}function nd(){oC({switched:Bc}),Bc=!1}function oC({switched:t=!1}={}){li.disabled=$n.length===0,Qo.textContent=t?"Loaded":$n.length?`${$n.length}`:"0"}function aC(){li.disabled=$n.length===0,Qo.textContent="Error"}function lC(){a0.textContent="Loading",Ad.textContent="Reading JSONL",l0.textContent="LOAD",c0.textContent="Switching session...",z0()}function H0(t){if(!be){Vr();return}let e=be,n=e.lineCount,i=Ko??e.latestEventIndex,s=e.byteLength??e.processedByteLength??0,r=t.byteLength??s,o=e.pendingBytes??0,a=t.pendingBytes??0,l=t.graphChanged===!0,c=uC(t),u=c.compactionInProgress,d=xg(c)!==xg(Yn),h=Math.max(0,r-s),f=a>0,g=h>0||a>o,v=t.renderableEventCount!==cC(e),m=a===0&&(t.latestEventIndex>i||t.lineCount>n||v),p=t.latestEventIndex===i&&t.lineCount===n&&h===0&&a===o&&l===Qc&&!d,y=l||f&&!u||g&&!u||v||m;dC(t,c),d&&(u||!y)&&X0({preserveView:!0,preserveEventContext:!0}),y&&(!p||f||v||m)&&W0(n,i)}function cC(t){return t.totals.promptCount+t.totals.callCount+t.totals.assistantMessageCount+t.totals.fileChangeCount+t.totals.compactionCount}function uC(t){let e=t.liveCues??Sd();return{compactionInProgress:e.compactionInProgress||t.compactionInProgress===!0,pendingPrompt:e.pendingPrompt??null,assistantStreaming:e.assistantStreaming===!0,latestAssistantEventIndex:e.latestAssistantEventIndex??null,latestAssistantPreview:e.latestAssistantPreview??null,latestTokenSample:e.latestTokenSample??null,activeToolCalls:e.activeToolCalls??[],completedToolCalls:e.completedToolCalls??[]}}function xg(t){return[t.compactionInProgress?"compact:1":"compact:0",t.pendingPrompt?`prompt:${t.pendingPrompt.eventIndex}:${Jo(t.pendingPrompt.title)}:${Jo(t.pendingPrompt.text)}`:"prompt:",t.assistantStreaming?`assistant:${t.latestAssistantEventIndex??""}:${Jo(t.latestAssistantPreview)}`:"assistant:",t.latestTokenSample?`tokens:${t.latestTokenSample.eventIndex}:${t.latestTokenSample.totalTokens}:${t.latestTokenSample.contextPercent??""}`:"tokens:",`active:${_g(t.activeToolCalls)}`,`done:${_g(t.completedToolCalls)}`].join("|")}function _g(t){return t.map(e=>`${e.id}:${e.eventIndex}:${e.status}:${e.completedAt??""}:${Jo(e.argumentPreview)}:${Jo(e.outputPreview)}`).join(",")}function Jo(t){return t?`${t.length}:${t.slice(0,48)}`:""}function vg(t=null){if(!G0())return;let e=Yd();e&&(e.type==="prompt"?nt=e.id:e.type==="compaction"?nt=null:nt=e.promptId,_t="overview",as({preserveCamera:!0}),t?hC(t,Wc(e)):ha({preserveDistance:!0}),ft&&Zd()&&of(),vn())}function G0(){return wn&&!Nd&&!Ps&&!Ir}function eu(){Nd=!0}function Dd(){Nd=!1}function hC(t,e){let n=e.x-t.x,i=e.y-t.y,s=e.z-t.z;Qe.target.x+=n,Qe.target.y+=i,Qe.target.z+=s,We.position.x+=n,We.position.y+=i,We.position.z+=s,Qe.update()}function W0(t,e){$o||($o={previousLineCount:t,previousLatest:e}),ts&&clearTimeout(ts),ts=setTimeout(()=>{let n=$o;$o=null,ts=null,n&&Vr({previousLineCountOverride:n.previousLineCount,previousLatestOverride:n.previousLatest,suppressLiveAnimation:!1})},wA)}function dC(t,e){let n=zt();n.source=t.source,n.sessionPath=t.sessionPath,n.sessionId=t.sessionId,n.generatedAt=t.generatedAt,n.lastModifiedAt=t.lastModifiedAt,n.lineCount=t.lineCount,n.latestEventIndex=t.latestEventIndex,n.isLive=t.isLive,n.byteLength=t.byteLength,n.processedByteLength=t.processedByteLength,n.pendingBytes=t.pendingBytes,Qc=t.graphChanged===!0,Yn=e,fC(Yn.compactionInProgress),Ad.textContent=Y0(t.lineCount,n.pendingBytes),j0(MC(n.tokenTelemetry,Yn.latestTokenSample)),ss(),qd()}function fC(t){return ia===t?!1:(ia=t,kc=t?performance.now():0,!0)}function X0({preserveView:t=!1,preserveEventContext:e=!1}={}){let n=t?bC():null;fx();let i=ox(zt());Ve=i.nodes,is=i.connectors,Q0(),nt=nt&&Nt.has(nt)?nt:Ve.find(s=>s.type==="prompt")?.id??null,$0(),as({preserveCamera:t}),n&&AC(n),JC(),Bw(),jC(),ua(),vn(),ft&&Nt.has(ft)?of():(ft=null,e?qd():kx())}function $0(){let t=zt(),e=t.ui,n=pC();a0.textContent=Fe(e.totalTurns),Ad.textContent=Y0(t.lineCount,t.pendingBytes),fA.textContent=Fe(n.prompts),pA.textContent=Fe(n.error),mA.textContent=Fe(n.long),gA.textContent=Fe(n.file),xA.textContent=Fe(n.diff),_A.textContent=Fe(n.artifact),vA.textContent=Fe(n.compaction),j0(t.tokenTelemetry),pw(),da()}function pC(){let t={prompts:0,error:0,long:0,file:0,diff:0,artifact:0,compaction:0};return Ve.forEach(e=>{if(su(e)){if(e.type==="prompt"){t.prompts+=1;return}Wg.forEach(n=>{du(e,n)&&(t[n]+=1)})}}),t}function In(t){return`${t}`}function Y0(t,e=0){return e>0?`${Fe(t)} + ${Vo(e)} pending`:Fe(t)}function tu(t){return`${t.parserVersion} / ${t.schemaVersion}`}function Od(t,e=In){return["Renderable events",e(t.renderableEventCount)]}function q0(t,e=In){return["Unknown events",e(t.unknownEventCount)]}function Z0(t,e=In){return["Malformed lines",e(t.malformedLineCount)]}function K0(t,e=In,n="Skipped payloads"){return[n,e(t.skippedLargePayloadCount)]}function J0(t,e=In){return["Warnings",e(t.warnings.length)]}function Ud(t,e=In,n="Skipped payloads"){return[q0(t,e),Z0(t,e),K0(t,e,n),J0(t,e)]}function mC(t,e=In,n="Skipped payloads"){return[["Parser",tu(t)],Od(t,e),...Ud(t,e,n)]}function oa(t){return t.map(([e,n])=>`${e}: ${n}`)}function gC(t){return(t.unknownEventTypes||[]).map(e=>`${e.sourceEventType}: ${e.count}`)}function xC(t){let[,e]=q0(t);return[`${e} total`,...gC(t)]}function _C(t){return(t.unknownEventTypes||[]).map(e=>`Unknown: ${e.sourceEventType} x${e.count}`)}function vC(t){return(t.malformedLines||[]).slice(0,5).map(e=>`Line ${e.lineNumber}: ${e.error}`)}function yC(t){return[...oa([Z0(t),K0(t,In,"Skipped large payloads")]),...vC(t)]}function SC(t){return[...oa([["Parser",tu(t)],["Lines read",In(t.totalLinesRead)],["Parsed events",In(t.parsedEventCount)],Od(t),...Ud(t,In,"Skipped large payloads"),["Token telemetry",t.tokenTelemetryAvailable?"available":"not logged"]]),..._C(t)]}function j0(t){let e=t?.latestContextPercent??null;qm.textContent=e===null?"n/a":`${Math.min(999,Math.round(e))}%`,qm.title=t?.latestTotalTokens&&t?.contextWindow?`${Fe(t.latestTotalTokens)} / ${Fe(t.contextWindow)} tokens`:"No token telemetry in this session";let n=t?.samples?.length?t.samples.slice(-S0):[];if(!n.length){Zm.replaceChildren();return}let i=document.createDocumentFragment();n.forEach(s=>{let r=document.createElement("span"),o=Math.max(2,Math.min(28,Math.round((s.contextPercent??0)/4)));r.style.height=`${o}px`,r.title=`${Math.round(s.contextPercent??0)}% context at event ${s.eventIndex}`,i.append(r)}),Zm.replaceChildren(i)}function MC(t,e){if(!e)return t;let n=t.samples??[],s=n.at(-1)?.eventIndex===e.eventIndex?n:[...n,e].slice(-S0);return{...t,samples:s,latestTotalTokens:e.totalTokens,contextWindow:e.contextWindow,latestContextPercent:e.contextPercent,primaryRateLimitPercent:e.primaryRateLimitPercent,secondaryRateLimitPercent:e.secondaryRateLimitPercent}}function EC(){let t=ox(zt());if(t.nodes.length!==Ve.length||t.connectors.length!==is.length)return!1;for(let n=0;n<t.nodes.length;n+=1)if(t.nodes[n].id!==Ve[n]?.id)return!1;for(let n=0;n<t.connectors.length;n+=1)if(!rA(t.connectors[n],is[n]))return!1;let e=performance.now();return t.nodes.forEach((n,i)=>{let s=Ve[i];s.kind=n.kind,s.eventIndex=n.eventIndex,s.title=n.title,s.body=n.body,s.detail=n.detail,s.source=n.source,n.isNew&&(s.freshUntil=Math.max(s.freshUntil||0,n.freshUntil||0)),s.isNew=n.isNew||Us(s,e),s.baseScale=n.baseScale,s.matrixDirty=!0,_t==="overview"&&s.target.copy(n.target)}),is=t.connectors,Q0(),as({preserveCamera:!0}),ua(),$0(),vn(),ft&&Nt.has(ft)?of():qd(),!0}function bC(){return new Map(Ve.map(t=>[t.id,{position:t.position.clone(),target:t.target.clone(),scale:t.scale}]))}function Q0(){Nt=new Map,qo=new Map,Ve.forEach(t=>{Nt.set(t.id,t);let e=qo.get(t.promptId);e?e.push(t):qo.set(t.promptId,[t])})}function AC(t){let e=new Map(is.map(a=>[Nc(a),Ic(a)])),n=TC(t),i=n?t.get(Dr):null,s=CC(t),r=s?t.get(Is):null,o=performance.now();Ve.forEach(a=>{let l=t.get(a.id);if(l){a.position.copy(l.position),a.scale=l.scale,a.matrixDirty=!0;return}let c=a.id===n?i:a.id===s?r:null;if(c){a.position.copy(c.position),a.scale=Math.max(a.scale,c.scale),a.freshUntil=Math.min(a.freshUntil||Number.POSITIVE_INFINITY,o+Id*.58),a.isNew=!0,a.matrixDirty=!0;return}a.position.copy(_t==="inspect"?a.target:wC(a,t,e)),a.matrixDirty=!0})}function TC(t){if(!t.has(Dr))return null;let e=Ve.filter(n=>n.type==="compaction"&&n.id!==Dr&&!t.has(n.id));return e.length?e.reduce((n,i)=>i.eventIndex>=n.eventIndex?i:n).id:null}function CC(t){if(!t.has(Is))return null;let e=Ve.filter(n=>n.type==="prompt"&&n.id!==Is&&!t.has(n.id));return e.length?e.reduce((n,i)=>i.eventIndex>=n.eventIndex?i:n).id:null}function wC(t,e,n){let i=n.get(t.id);if(!i)return t.target;let s=e.get(i);return s?s.position:Nt.get(i)?.position??t.target}function ex(t,e){let n=new Set(t.assistantMessages.map(o=>o.id)),i=new Map,s=new Set;return e.forEach(o=>{let a=o.assistantMessageId||"";if(!n.has(a))return;let l=i.get(a)??[];l.push(o),i.set(a,l),s.add(o.id)}),[...t.assistantMessages.map(o=>({type:"assistant",message:o,calls:i.get(o.id)??[]})),...e.filter(o=>!s.has(o.id)).map(o=>({type:"call",call:o}))].sort((o,a)=>{let l=yg(o)-yg(a);return l!==0?l:Sg(o)-Sg(a)})}function yg(t){return t.type==="assistant"?t.message.eventIndex:t.call.eventIndex}function Sg(t){return t.type==="assistant"?0:1}function RC(t,e){if(e.type==="compaction")return{above:jm,below:Qm,promptCalls:[],subagentBranches:[],activityUnits:[],activityDepth:0,fileRows:0};let n=e.prompt,i=Ax(t,n),s=hx(i),r=new Set(s.flatMap(h=>[h.launch?.id,h.result?.id].filter(f=>!!f))),o=i.filter(h=>!r.has(h.id)),a=ex(n,o),l=IC(a),c=Math.ceil((n.fileChanges?.length??0)/Tr),u=l+LC(c)+tg,d=l+FC(s)+tg;return{above:Math.max(jm,u),below:Math.max(Qm,d),promptCalls:i,subagentBranches:s,activityUnits:a,activityDepth:l,fileRows:c}}function IC(t){if(!t.length)return 0;let e=0,n=0;return t.forEach((i,s)=>{let r=NC(s);e=Math.max(e,r),n=Math.min(n,r),i.type==="assistant"&&i.calls.forEach((o,a)=>{let l=r+tx(a,i.calls.length);e=Math.max(e,l),n=Math.min(n,l)})}),Math.max(Math.abs(n),Math.abs(e))+HA}function NC(t){return Gc(t).z}function Gc(t){let e=M0+t*E0,n=GA+Math.min(XA,t*WA);return new P(Math.sin(e)*n,-$A-t*YA+Math.cos(e)*qA,Math.cos(e)*n)}function PC(t,e){let n=Gc(e);return new P(n.x,As+n.y,t+n.z)}function Mg(t,e,n,i,s){if(i==null){let a=Gc(s);return{fromId:t,toId:e,waypoints:[new P(0,As+a.y*.36,n+a.z*.18),new P(a.x*.58,As+a.y*.72,n+a.z*.58)]}}let r=5,o=[];for(let a=1;a<=r;a+=1){let l=a/(r+1),c=i+(s-i)*l,u=Gc(c);o.push(new P(u.x,As+u.y,n+u.z))}return{fromId:t,toId:e,waypoints:o}}function tx(t,e){return nx(t,e,od,ZA,.32)}function nx(t,e,n,i,s){let r=Math.floor(t/n),o=t%n,a=Math.min(e-r*n,n);return(o-(a-1)/2)*i+r*s}function LC(t){return t<=0?0:eT+(t-1)*tT+nT}function FC(t){if(!t.length)return 0;let e=t.reduce((n,i,s)=>{let r=Math.floor(s/2),o=ux(i.nodes).reduce((a,l)=>a+VC(l),r*A0);return Math.max(n,o)},0);return b0+gT+e}function DC(t){return t.x<0?-1:1}function Bd(t,e,n=0,i=DC(t)){let s=t.x-n,r=t.z-e,o=Math.hypot(s,r);return o<.001&&(s=i,r=0,o=1),s/=o,r/=o,{radialX:s,radialZ:r,tangentX:-r,tangentZ:s}}function OC(t,e,n,i){let s=Bd(t,e),r=Math.floor(n/od),o=n%od,a=tx(n,i),l=KA+r*JA;return new P(t.x+s.radialX*l+s.tangentX*a,t.y-.48-o*jA-r*QA,t.z+s.radialZ*l+s.tangentZ*a)}function Eg(t,e,n){let i=t.assistantMessageId||"";return n.has(i)?i:e}function ix(t,e,n){if(t==null)return n;let i=n,s=Number.NEGATIVE_INFINITY;return e.forEach(r=>{r.eventIndex<=t&&r.eventIndex>=s&&(i=r,s=r.eventIndex)}),i}function UC(t,e,n){return!e.length||t==null?e.at(-1)?.id??n:ix(t,e,null)?.id??n}function sx(t,e,n,i){let s=t.target,r=t.fileAxisX??0,o=t.fileAxisZ??e,a=Bd(s,o,r,s.x<r?-1:1),l=Math.floor(n/Tr),c=n%Tr,u=Math.min(i-l*Tr,Tr),d=c-(u-1)/2,h=l*Tr+c,f=iT+l*sT,g=d*rT;return new P(s.x+a.radialX*f+a.tangentX*g,s.y-1.62-h*oT-l*aT,s.z+a.radialZ*f+a.tangentZ*g)}function rx(t,e,n){return{fromId:t,toId:e,waypoints:[new P(n.x,n.y-lT,n.z)]}}function ox(t){let e=[],n=[],i=Ex(t,{includeCompactionProgress:!0}),s=i.map(c=>RC(t,c)),o=s.reduce((c,u)=>c+u.above+u.below,0)/2,a=performance.now()+Id,l=[];return i.forEach((c,u)=>{let d=s[u],h=o-d.above;if(o-=d.above+d.below,c.type==="compaction"){let A=c.compaction,L=A.eventIndex>ns,F={id:A.id,type:"compaction",kind:"compaction",promptId:A.id,promptIndex:c.compactionIndex,callIndex:-1,eventIndex:A.eventIndex,title:A.title,body:A.text,detail:A.detail,source:A,isNew:L,freshUntil:L?a:0,position:new P(0,eg,h),target:new P(0,eg,h),baseScale:.58,scale:.58};e.push(F),l.push(F);return}let{prompt:f,promptIndex:g}=c,v=e.length,{promptCalls:m,subagentBranches:p}=d,y=f.fileChanges||[],E=f.eventIndex>ns,b={id:f.id,type:"prompt",kind:"prompt",promptId:f.id,promptIndex:g,callIndex:-1,eventIndex:f.eventIndex??g,title:f.title,body:f.text,detail:f.text,source:f,isNew:E,freshUntil:E?a:0,position:new P(0,As,h),target:new P(0,As,h),baseScale:.78,scale:.78};e.push(b),l.push(b);let R=new Set(f.assistantMessages.map(A=>A.id)),S=d.activityUnits,w=[],x=b.id,T=null,N=0;S.forEach((A,L)=>{let F=PC(h,L);if(A.type==="call"){e.push(bs(f,g,A.call,N,F,a)),n.push(Mg(x,A.call.id,h,T,L)),w.push({id:A.call.id,eventIndex:A.call.eventIndex}),x=A.call.id,T=L,N+=1;return}let X=YC(f,g,A.message,N,F,a,A.calls.length?.58:.32);e.push(X),n.push(Mg(x,X.id,h,T,L)),w.push({id:X.id,eventIndex:A.message.eventIndex}),x=X.id,T=L,N+=1,A.calls.forEach((Y,j)=>{let te=OC(X.target,h,j,A.calls.length);e.push(bs(f,g,Y,N,te,a)),n.push([X.id,Y.id]),w.push({id:Y.id,eventIndex:Y.eventIndex}),N+=1})});let I=N+p.length*2;p.forEach((A,L)=>{let F=L%2===0?1:-1,X=Math.floor(L/2),Y=F*Math.min(uT,cT+X*hT),j=h-b0-X*A0,te=j-T0,me=As-1.2-L%2*dT-X*fT,Oe=Y-F*pT,Ke=Y+F*mT,Ne=I;if(I+=A.nodes.length,A.launch){let Z=bs(f,g,A.launch,N,new P(Oe,me,j),a,{kind:"subagent",title:Tg(A.launch),baseScale:.52,fileAxisX:Y,fileAxisZ:j});e.push(Z),n.push([Eg(A.launch,b.id,R),Z.id]),N+=1}if(A.result){let Z=bs(f,g,A.result,N,new P(Ke,me-.34,A.launch?te:j),a,{kind:"subagent-result",title:Tg(A.result),baseScale:.38,fileAxisX:Y,fileAxisZ:A.launch?te:j});e.push(Z),n.push([A.launch?.id??Eg(A.result,b.id,R),Z.id]),N+=1}BC({branch:A,parentId:A.result?.id??A.launch?.id??b.id,prompt:f,promptIndex:g,branchX:Y,branchY:me,startZ:(A.result?te:j)-C0,callIndexStart:Ne,freshUntil:a,allNodes:e,allConnectors:n})});let D=new Map;for(let A=v;A<e.length;A+=1){let L=e[A];D.set(L.id,L)}let k=new Map,z=new Map;y.forEach(A=>{let L=A.callId&&D.has(A.callId)?A.callId:UC(A.eventIndex,w,b.id);k.set(A.id,L);let F=z.get(L)??[];F.push(A),z.set(L,F)}),y.forEach((A,L)=>{let F=k.get(A.id)??b.id,X=D.get(F)??b,Y=z.get(F)??[A],j=Math.max(0,Y.findIndex(Ke=>Ke.id===A.id)),te=sx(X,h,j,Y.length),me=`file-${Vd(A)}`,Oe={id:A.id,type:"fileChange",kind:me,promptId:f.id,promptIndex:g,callIndex:N+L,eventIndex:A.eventIndex??f.eventIndex??g,title:A.shortPath||qn(A.path)||"file change",body:A.preview||A.path,detail:KC(A),source:A,isNew:A.eventIndex>ns,freshUntil:A.eventIndex>ns?a:0,position:te.clone(),target:te,baseScale:.42,scale:.42};e.push(Oe),n.push(rx(F,Oe.id,X.target))})}),l.forEach((c,u)=>{let d=l[u+1];d&&n.push([c.id,d.id])}),e.forEach(c=>{c.home=c.target.clone()}),{nodes:e,connectors:n}}function BC({branch:t,parentId:e,prompt:n,promptIndex:i,branchX:s,branchY:r,startZ:o,callIndexStart:a,freshUntil:l,allNodes:c,allConnectors:u}){let d=ux(t.nodes),h=e,f=null,g=0,v=0,m=o;d.forEach(p=>{ax(p).forEach(E=>{let b=g,R=cx(s,r,m,b),S=lx(m,b),w=h,x=[{id:w,eventIndex:E.spine?.eventIndex??Number.NEGATIVE_INFINITY,target:R,fileAxisX:s,fileAxisZ:S}];if(E.spine){let N=bs(n,i,E.spine,a+v,R,l,{kind:E.spine.name==="subagent.prompt"?"subagent":E.spine.kind,title:_d(E.spine),baseScale:vd(E.spine),fileAxisX:s,fileAxisZ:S});c.push(N),u.push(WC(h,N.id,s,r,m,f,b)),h=N.id,f=b,w=N.id,x[0]=N,v+=1}let T=Bd(R,S,s,s<0?-1:1);E.children.forEach((N,I)=>{let D=$C(R,T,I,E.children.length),k=bs(n,i,N,a+v,D,l,{title:_d(N),baseScale:vd(N),fileAxisX:s,fileAxisZ:S});c.push(k),u.push([w,k.id]),x.push(k),v+=1}),kC({files:E.files,fileAnchors:x,axisZ:S,prompt:n,promptIndex:i,callIndexStart:a,childOffset:v,freshUntil:l,allNodes:c,allConnectors:u}),v+=E.files.length,g+=1})})}function kC({files:t,fileAnchors:e,axisZ:n,prompt:i,promptIndex:s,callIndexStart:r,childOffset:o,freshUntil:a,allNodes:l,allConnectors:c}){let u=new Map;t.map(h=>{let f=GC(h.eventIndex,e),g=u.get(f.id)??[],v=g.length;return g.push(h),u.set(f.id,g),{file:h,parent:f,siblingIndex:v}}).forEach(({file:h,parent:f,siblingIndex:g},v)=>{let m=u.get(f.id)??[h],p=sx(f,n,g,m.length),y=bs(i,s,h,r+o+v,p,a,{title:h.argumentPreview||_d(h),baseScale:vd(h),fileAxisX:f.fileAxisX,fileAxisZ:f.fileAxisZ});l.push(y),c.push(rx(f.id,y.id,f.target))})}function VC(t){return ax(t).reduce((e,n)=>{let i=Math.max(1,Math.ceil(n.children.length/Oc));return e+xT+Math.max(0,i-1)*_T},0)}function ax(t){let e=[],n=null;return t.prompt&&(n={spine:t.prompt,children:[],files:[]},e.push(n)),t.children.forEach(i=>{if(zC(i)){n={spine:i,children:[],files:[]},e.push(n);return}if(n||(n={spine:null,children:[],files:[]},e.push(n)),HC(i)){n.files.push(i);return}n.children.push(i)}),e.length?e:[{spine:null,children:[],files:[]}]}function zC(t){return t.name==="subagent.message"||t.name==="subagent.compaction"||t.name==="subagent.more"}function HC(t){return t.name==="subagent.file"}function GC(t,e){return ix(t,e,e[0])??e[0]}function lx(t,e){return t-e*vT}function WC(t,e,n,i,s,r,o){let a=r??o-.85,l=6,c=[];for(let u=1;u<=l;u+=1){let d=u/(l+1),h=a+(o-a)*d;c.push(cx(n,i,s,h))}return{fromId:t,toId:e,waypoints:c}}function cx(t,e,n,i){let s=t<0?-1:1,r=M0+i*ET+s*.28,o=yT+Math.min(MT,i*ST);return new P(t+s*bT+Math.sin(r)*o*s,e-.9-i*AT+Math.cos(r)*TT,lx(n,i)+Math.cos(r)*o)}function XC(t,e){return nx(t,e,Oc,RT,.2)}function $C(t,e,n,i){let s=Math.floor(n/Oc),r=n%Oc,o=XC(n,i),a=CT+s*wT;return new P(t.x+e.radialX*a+e.tangentX*o,t.y-.36-r*IT-s*NT,t.z+e.radialZ*a+e.tangentZ*o)}function ux(t){let e=[],n=null;return t.forEach(i=>{if(i.name==="subagent.prompt"){n={prompt:i,children:[]},e.push(n);return}n||(n={prompt:null,children:[]},e.push(n)),n.children.push(i)}),e}function bs(t,e,n,i,s,r,{kind:o=n.kind||"tool",title:a=n.name,baseScale:l=n.status==="completed"?.3:.4,fileAxisX:c,fileAxisZ:u}={}){let d=n.eventIndex>ns;return{id:n.id,type:"call",kind:o,promptId:t.id,promptIndex:e,callIndex:i,eventIndex:n.eventIndex??t.eventIndex??e,title:a,body:n.argumentPreview||"",detail:ZC(n),source:n,isNew:d,freshUntil:d?r:0,position:s.clone(),target:s,fileAxisX:c,fileAxisZ:u,baseScale:l,scale:l}}function YC(t,e,n,i,s,r,o=.32){let a=n.eventIndex>ns;return{id:n.id,type:"message",kind:"assistant",promptId:t.id,promptIndex:e,callIndex:i,eventIndex:n.eventIndex??t.eventIndex??e,title:"assistant message",body:n.text,detail:n.text,source:n,isNew:a,freshUntil:a?r:0,position:s.clone(),target:s,baseScale:o,scale:o}}function hx(t){let e=t.filter(qC),n=t.filter(dx),i=new Set(n),s=new Map;n.forEach(o=>{let a=Ag(o);if(!a)return;let l=s.get(a)??[];l.push(o),s.set(a,l)});let r=e.map((o,a)=>{let l=Ag(o),u=(l?s.get(l)?.find(d=>i.has(d)):null)??n.find(d=>i.has(d)&&d.eventIndex>=o.eventIndex)??null;return u&&i.delete(u),{launch:o,result:u,nodes:bg(o,u),eventIndex:Math.min(o.eventIndex,u?.eventIndex??o.eventIndex),order:a}});return i.forEach(o=>{r.push({launch:null,result:o,nodes:bg(null,o),eventIndex:o.eventIndex,order:e.length+r.length})}),r.sort((o,a)=>o.eventIndex-a.eventIndex||o.order-a.order)}function qC(t){return t.name==="spawn_agent"}function dx(t){return t.name==="subagent"}function bg(t,e){return t?.subagentNodes?.length?t.subagentNodes:e?.subagentNodes??[]}function Ag(t){let e=`${t.argumentPreview||""}
${t.outputPreview||""}`;return e.match(/"agent_id"\s*:\s*"([^"]+)"/)?.[1]??e.match(/\bagent:\s*([^\s,}]+)/)?.[1]??e.match(/"agent_path"\s*:\s*"([^"]+)"/)?.[1]??null}function Tg(t){return Jc(t.name)??(dx(t)?"subagent result":"subagent launch")}function _d(t){let e=Jc(t.name);return e?t.name==="subagent.more"&&t.argumentPreview?t.argumentPreview:e:t.name}function vd(t){return t.name==="subagent.prompt"?.34:t.name==="subagent.more"?.26:t.status==="completed"?.24:.32}function ZC(t){let e=[`call: ${t.name}`,`kind: ${t.kind}`,`status: ${t.status}`,t.assistantMessageId?`assistant message: ${t.assistantMessageId}`:"",t.subagentSessionPath?`subagent session: ${t.subagentSessionPath}`:"",t.subagentNodes?.length?`subagent nodes: ${t.subagentNodes.length}`:"",t.startedAt?`started: ${t.startedAt}`:"",t.completedAt?`completed: ${t.completedAt}`:"",t.durationMs!==null&&t.durationMs!==void 0?`duration: ${Fm(t.durationMs)}`:"","","arguments:",t.argumentPreview||"{}"];return t.outputPreview&&e.push("","output:",t.outputPreview),e.filter(Boolean).join(`
`)}function KC(t){return[`change: ${t.changeType}`,`path: ${t.path}`,t.callId?`call: ${t.callId}`:"",t.timestamp?`time: ${t.timestamp}`:"","",t.detail||t.preview].filter(Boolean).join(`
`)}function JC(){let t=Ve.filter(r=>r.type==="prompt"),e=Ve.filter(r=>r.type==="call"),n=Ve.filter(r=>r.type==="fileChange"),i=Ve.filter(r=>r.type==="message"),s=Ve.filter(r=>r.type==="compaction");ci.prompt=Xo("prompt",t,qT,QT),ci.call=Xo("call",e,pg,mg),ci.fileChange=Xo("fileChange",n,KT,tC),ci.message=Xo("message",i,pg,mg),ci.compaction=Xo("compaction",s,ZT,eC)}function Xo(t,e,n,i){if(!e.length)return;let s=new ao(n.clone(),i.clone(),e.length);s.instanceMatrix.setUsage(mh),s.userData.bucket=t,s.userData.nodes=e,s.boundingSphere=new sn(new P,600),s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!1,Rn.add(s);let r=performance.now();return e.forEach((o,a)=>{o.bucket=t,o.instanceIndex=a,Ix(s,o,a,0,r),o.matrixDirty=!1,s.setColorAt(a,Xd(o,!1))}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s}function jC(){let t=Math.max(Qh(is),Qh(na),Math.max(Ve.length-1,1)),e=new Float32Array(t*2*3),n=new It;n.setAttribute("position",new kt(e,3)),n.setDrawRange(0,Qh(na)*2),n.boundingSphere=new sn(new P,600);let i=new xs({color:6547455,transparent:!0,opacity:.42});Xn=new lr(n,i),Xn.frustumCulled=!1,Rn.add(Xn)}function fx(){Object.values(ci).forEach(t=>{t&&(Rn.remove(t),t.geometry.dispose(),t.material.dispose())}),ci={},Xn&&(Rn.remove(Xn),Xn.geometry.dispose(),Xn.material.dispose(),Xn=null),an&&(Rn.remove(an),an.geometry.dispose(),an.material.dispose(),an=null),Cg(ld,ea),Cg(cd,ta)}function Cg(t,e){t.forEach(n=>{mx(n,e)}),t.clear()}function px(t,e,n){Array.from(t.keys()).forEach(i=>{n.has(i)||(mx(t.get(i),e),t.delete(i))})}function mx(t,e){t?.forEach(n=>{e.remove(n),n.material.dispose()})}function gx(t,e,n,i,s,r){let o=t.get(e);return o||(o=Array.from({length:n},(a,l)=>QC(e,l/n,i,s,r)),t.set(e,o)),o}function QC(t,e,n,i,s){let r=new Bn({color:s,transparent:!0,opacity:0,side:Mn,depthWrite:!1,blending:bo}),o=new Yt(i,r);return o.userData={nodeId:t,offset:e},o.rotation.x=-Math.PI/2,o.visible=!1,n.add(o),o}function as({preserveCamera:t=!1}={}){let e;if(_t==="inspect"&&nt){let n=kd(nt);e=n;let i=new Map(n.placements.map(s=>[s.node.id,s]));Ve.forEach(s=>{let r=i.get(s.id);r?(s.target.copy(r.target),s.scale=r.scale):(s.target.set(s.position.x,Rd,s.position.z),s.scale=0),s.matrixDirty=!0}),t||(Qe.target.set(0,.2,-n.laneDepth*.12),We.position.set(0,18,Math.max(27,n.laneDepth*.58)))}else Ve.forEach(n=>{n.target.copy(n.home??n.position),n.scale=n.baseScale,n.position.y<-1e3&&n.position.copy(n.target),n.matrixDirty=!0}),t||ha();ow(),xx(e),ua(),Br=!0,nu()}function xx(t){if(_t==="inspect"&&nt){na=(t??kd(nt)).connectors;return}na=is}function kd(t){let e=Ve.filter(f=>f.promptId===t),n=ew(t),i=new Set(n.flatMap(f=>f.nodes.map(g=>g.id))),s=e.filter(f=>f.type==="prompt"||!i.has(f.id)).sort(vx),r=[...s.map((f,g)=>({type:"node",eventIndex:f.eventIndex,order:g*2,node:f})),...n.map(f=>({type:"branch",eventIndex:f.eventIndex,order:f.order*2+1,branch:f}))].sort(iw),o=n.reduce((f,g)=>Math.max(f,g.nodes.length),0),a=Math.min(OA,Math.max(DA,Math.max(0,r.length-1)*UA,Math.max(0,o-1)*Jm+8)),l=r.length>1?a/(r.length-1):0,c=a/2,u=new Map;r.forEach((f,g)=>{let v=c-g*l;f.type==="node"?u.set(f.node.id,v):f.branch.startZ=v});let d=s.map(f=>({node:f,target:new P(0,yx(f),u.get(f.id)??0),scale:Rg(f)}));n.forEach(f=>{let g=f.side*(BA+f.lane*kA);f.nodes.forEach((v,m)=>{d.push({node:v,target:new P(g+rw(v,m,f.side),sw(v),f.startZ-m*Jm),scale:Rg(v)})})});let h=tw(r,s,n);return{placements:d,visibleNodes:_x([...s,...n.flatMap(f=>f.nodes)]),mainNodes:s,branches:n,connectors:h,laneDepth:a}}function ew(t){let e=be,n=e?.prompts.find(i=>i.id===t);return!e||!n?[]:hx(Ax(e,n)).map((i,s)=>{let r=_x([i.launch?Nt.get(i.launch.id):null,...i.nodes.map(o=>Nt.get(o.id)),i.result?Nt.get(i.result.id):null]);return r.length?{nodes:r,eventIndex:i.eventIndex,order:s,side:s%2===0?-1:1,lane:Math.floor(s/2),startZ:0}:null}).filter(i=>!!i)}function tw(t,e,n){let i=[];return e.slice(1).forEach((s,r)=>{i.push([e[r].id,s.id])}),n.forEach(s=>{let r=s.nodes[0];if(!r)return;let o=t.findIndex(l=>l.type==="branch"&&l.branch===s),a=nw(t,o)??e[0]??null;a&&i.push([a.id,r.id]),s.nodes.slice(1).forEach((l,c)=>{i.push([s.nodes[c].id,l.id])})}),i}function nw(t,e){for(let n=e-1;n>=0;n-=1){let i=t[n];if(i?.type==="node")return i.node}return null}function _x(t){let e=new Set;return t.filter(n=>!n||e.has(n.id)?!1:(e.add(n.id),!0))}function vx(t,e){return t.type==="prompt"&&e.type!=="prompt"?-1:e.type==="prompt"&&t.type!=="prompt"?1:t.eventIndex-e.eventIndex||t.callIndex-e.callIndex||wg(t)-wg(e)}function iw(t,e){let n=t.type==="node"&&t.node.type==="prompt",i=e.type==="node"&&e.node.type==="prompt";return n!==i?n?-1:1:t.eventIndex-e.eventIndex||t.order-e.order}function wg(t){return t.type==="prompt"?0:t.type==="message"?1:t.type==="call"?2:t.type==="fileChange"?3:4}function yx(t){return t.type==="prompt"?1.15:t.type==="fileChange"?-.32:t.type==="message"?.62:t.type==="compaction"?.82:.24}function sw(t){return t.type!=="call"?yx(t):t.source.name==="subagent.prompt"?.72:t.source.name==="subagent.compaction"?.54:t.source.name==="spawn_agent"?.46:t.source.name==="subagent"?.3:t.source.name==="subagent.file"?-.16:t.source.name==="subagent.message"?.2:.04}function rw(t,e,n){if(t.type!=="call"||e===0||t.source.name==="subagent.prompt"||t.source.name==="subagent"||t.source.name==="subagent.more")return 0;let i=[.3,-.3,.58,-.58];return i[(e-1)%i.length]*n}function Rg(t){return t.type==="prompt"?.62:t.type==="fileChange"?.36:t.type==="message"?.28:t.type==="compaction"?.48:t.source.name==="spawn_agent"?.44:t.source.name==="subagent"?.36:t.source.name==="subagent.prompt"?.34:t.source.name==="subagent.more"?.26:Math.min(.34,Math.max(.24,t.baseScale))}function ow(){let t=_t==="inspect"&&!!nt;v0.classList.toggle("inspect-active",t),it.setAttribute("aria-label",t?"Perlustron focused prompt inspection":"Perlustron session workflow"),Sx()}function Sx(){let t=_t==="overview"&&Ts==="two-d";m0.forEach(e=>{if(e.dataset.viewAction!=="two-d")return;let n=t?"Switch to 3D overview":"Switch to 2D overview";e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n})}function Mx(t){Dd(),_t="overview",Ts=t,as({preserveCamera:!0}),ha(),Sx()}function aw(){Mx(_t==="overview"&&Ts==="two-d"?"three-d":"two-d")}function Ex(t,{includeCompactionProgress:e=!1}={}){let n=uw(t),i=[...n.map((r,o)=>({type:"prompt",eventIndex:lw(t,n,r,o),prompt:r,promptIndex:o})),...(t.compactions||[]).map((r,o)=>({type:"compaction",eventIndex:r.eventIndex,compaction:r,compactionIndex:o}))],s=e?hw(t,i):null;return s&&i.push(s),i.sort((r,o)=>r.eventIndex-o.eventIndex)}function lw(t,e,n,i){let s=e[i+1]?.eventIndex??Number.POSITIVE_INFINITY,r=cw(t,n),o=t.compactions?.filter(a=>a.eventIndex>n.eventIndex&&a.eventIndex<s).reduce((a,l)=>a===null||l.eventIndex>a?l.eventIndex:a,null)??null;return o!==null?Math.max(r,o+.25):r}function cw(t,e){let n=e.id===Tx(t)?[...Yn.activeToolCalls,...Yn.completedToolCalls].map(i=>i.eventIndex):[];return Math.max(e.eventIndex,...e.calls.map(i=>i.eventIndex),...e.assistantMessages.map(i=>i.eventIndex),...(e.fileChanges||[]).map(i=>i.eventIndex),...n)}function uw(t){let e=bx(t);return e?[...t.prompts,e]:t.prompts}function bx(t){let e=Yn.pendingPrompt;return!e||e.eventIndex<=t.latestEventIndex?null:{id:Is,eventIndex:e.eventIndex,timestamp:e.timestamp,title:e.title||"Incoming prompt",text:e.text,images:[],calls:[],assistantMessages:[],fileChanges:[]}}function Ax(t,e){if(e.id!==Tx(t))return e.calls;let n=new Set(e.calls.map(s=>s.id)),i=[...Yn.activeToolCalls,...Yn.completedToolCalls].filter(s=>!n.has(s.id)&&s.eventIndex>t.latestEventIndex);return i.length?[...e.calls,...i]:e.calls}function Tx(t){return bx(t)?Is:t.prompts.at(-1)?.id??null}function hw(t,e){if(!ia)return null;let n=e.reduce((o,a)=>a.type!=="prompt"?o:!o||a.eventIndex>=o.eventIndex?a:o,null),s=Math.max(t.latestEventIndex,n?.eventIndex??0)+.5,r={id:Dr,eventIndex:s,timestamp:t.lastModifiedAt||t.generatedAt||null,title:"Compacting context",text:"Compaction in progress",detail:["compaction: in progress",n?`anchor: ${n.prompt.title}`:"",t.pendingBytes>0?`pending bytes: ${t.pendingBytes}`:""].filter(Boolean).join(`
`),replacedMessageCount:0,encrypted:!1,reason:"in progress"};return{type:"compaction",eventIndex:s,compaction:r,compactionIndex:t.compactions.length}}function dw({label:t,detail:e,icon:n}){let i=document.createElement("div");i.className="root-row metadata-row",i.title=e;let s=fw(n),r=document.createElement("span");r.className="root-copy";let o=document.createElement("strong");o.textContent=t;let a=document.createElement("small");return a.textContent=e,r.append(o,a),i.append(s,r),i}function fw(t){let e=document.createElement("span");e.className=`root-icon ${t}`,e.setAttribute("aria-hidden","true");let n=document.createElementNS(Hm,"svg");n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("focusable","false"),n.setAttribute("fill","none"),n.setAttribute("stroke","currentColor"),n.setAttribute("stroke-width","2"),n.setAttribute("stroke-linecap","round"),n.setAttribute("stroke-linejoin","round");for(let i of nA[t]){let s=document.createElementNS(Hm,"path");s.setAttribute("d",i),n.append(s)}return e.append(n),e}function pw(){let t=zt().metadata,e=(t?.dynamicTools||[]).map(s=>s.namespace?`${s.namespace}.${s.name}`:s.name).slice(0,6),n=[{label:"Codex",detail:[t?.originator,t?.cliVersion].filter(Boolean).join(" "),icon:"codex"},{label:"Source",detail:[t?.source,t?.modelProvider].filter(Boolean).join(" / "),icon:"source"},{label:"Git",detail:mw(t?.gitCommitHash)||qn(t?.repositoryUrl||""),icon:"git"},{label:"Policy",detail:[t?.approvalPolicy,t?.sandbox].filter(Boolean).join(" / "),icon:"policy"},{label:"Model",detail:t?.model||"",icon:"model"},{label:"Tools",detail:e.join(", "),icon:"tools"}].filter(s=>s.detail),i=document.createDocumentFragment();n.forEach(s=>i.append(dw(s))),uA.replaceChildren(i)}function mw(t){return t?t.slice(0,10):""}function Vd(t){return X1.includes(t.changeType)?t.changeType:"update"}function gw(){let t=performance.now(),e=t/1e3,n=Math.min(e-dg,.04);dg=e,Tc+=n;let i=Pw(n);Lw(t),kw(Tc,t),(i||Br)&&nu(),i&&ua(),Fw(t,Tc),Ow(t,Tc),xw(n),Qe.update(),Nw(),bi?.render(Rn,We)}function xw(t){let e=(Cn.has("KeyW")?1:0)-(Cn.has("KeyS")?1:0),n=(Cn.has("KeyD")?1:0)-(Cn.has("KeyA")?1:0),i=(Cn.has(w0)?1:0)-(s_()?1:0);if(!e&&!n&&!i||(Iw(),We.getWorldDirection(ui),cg.crossVectors(ui,We.up).normalize(),Ho.set(0,0,0).addScaledVector(ui,e).addScaledVector(cg,n).addScaledVector(We.up,i),Ho.lengthSq()<1e-6))return;eu();let s=We.position.distanceTo(Qe.target),r=Math.min(UT,Math.max(OT,s*BT)),o=aI()?r*kT:r;Ho.normalize().multiplyScalar(o*t),We.position.add(Ho),Qe.target.add(Ho)}function _w(t){t.preventDefault()}function vw(t){let e=t.deltaMode===WheelEvent.DOM_DELTA_PAGE?window.innerHeight:t.deltaMode===WheelEvent.DOM_DELTA_LINE?16:1,n=Math.max(-ng,Math.min(ng,t.deltaY*e/DT));Math.abs(n)<.001||(yd(-n),t.preventDefault())}function yw(t){if(!(t.button!==0||!bw(t))){Vc=t.pointerId,ra=!1,md=t.clientX,gd=t.clientY,L0=t.clientX,F0=t.clientY,Ld=Cx(t,I0),it.classList.add("grabbing");try{it.setPointerCapture(t.pointerId)}catch{}t.preventDefault(),t.stopImmediatePropagation()}}function Sw(t){if(t.pointerId!==Vc)return;if((t.buttons&1)===0){zd(t);return}let e=t.clientX-md,n=t.clientY-gd;md=t.clientX,gd=t.clientY;let i=(t.clientX-L0)**2+(t.clientY-F0)**2;ra=ra||i>WT**2,(Ld?Mw(t):Ew(e,n))&&eu(),t.preventDefault(),t.stopImmediatePropagation()}function zd(t){if(t.pointerId===Vc){Vc=null,zc=zc||ra,ra=!1,Ld=!1,it.classList.remove("grabbing");try{it.hasPointerCapture(t.pointerId)&&it.releasePointerCapture(t.pointerId)}catch{}t.stopImmediatePropagation()}}function Mw(t){return!Cx(t,og)||(Es.copy(I0).sub(og),Es.lengthSq()<=1e-6)?!1:(We.position.add(Es),Qe.target.add(Es),Qe.update(),!0)}function Cx(t,e){return iu(t),Uc.setFromCamera(Or,We),!!Uc.ray.intersectPlane(N0,e)}function Ew(t,e){if(!t&&!e)return!1;let n=it.getBoundingClientRect();if(n.width<=0||n.height<=0)return!1;let i=wx(),s=2*Math.tan(Lo.degToRad(We.fov)/2)*i,r=s/n.height,o=s*We.aspect/n.width;return ag.setFromMatrixColumn(We.matrix,0).normalize(),lg.setFromMatrixColumn(We.matrix,1).normalize(),Es.set(0,0,0).addScaledVector(ag,-t*o).addScaledVector(lg,e*r),We.position.add(Es),Qe.target.add(Es),Qe.update(),!0}function wx(){if(Uc.setFromCamera(XT,We),Uc.ray.intersectPlane(N0,ji))return Math.max(.001,We.position.distanceTo(ji));We.getWorldDirection(ui);let t=Math.abs(We.position.y-wd);return Math.max(.001,t/Math.max(.12,Math.abs(ui.y)))}function bw(t){return bt==="map"&&!Rs(t.target)}function Aw(t){if(!(t.button!==2||!Rw(t))){Pd=!0,sa=t.pointerId,fd=t.clientX,pd=t.clientY,Hd();try{it.setPointerCapture(t.pointerId)}catch{}t.preventDefault()}}function Tw(t){if(!Pd||t.pointerId!==sa)return;let e=t.clientX-fd,n=t.clientY-pd;fd=t.clientX,pd=t.clientY,Cw(e,n),t.preventDefault()}function Rx(t){t.pointerId===sa&&(ww(t.pointerId),t.preventDefault())}function Cw(t,e){!t&&!e||(Go.setFromQuaternion(We.quaternion,"YXZ"),Go.y-=t*ig,Go.x=Math.max(-sg,Math.min(sg,Go.x-e*ig)),We.quaternion.setFromEuler(Go),Hd(),eu())}function ww(t=sa){Pd=!1,sa=null;try{t!=null&&it.hasPointerCapture(t)&&it.releasePointerCapture(t)}catch{}}function Rw(t){return!(_t==="overview"&&Ts==="two-d")&&!Rs(t.target)}function Iw(){We.position.distanceTo(Qe.target)>R0&&Hd()}function Hd(){let t=Math.min(R0,Math.max(GT,We.position.distanceTo(Qe.target)));We.getWorldDirection(ui),Qe.target.copy(We.position).addScaledVector(ui,t),Qe.update()}function Nw(){Ur.position.x=Math.round(Qe.target.x/Ac)*Ac,Ur.position.z=Math.round(Qe.target.z/Ac)*Ac}function Pw(t){let e=1-Math.pow(.001,t),n=!1;return Ve.forEach(i=>{i.position.distanceToSquared(i.target)<4e-6||(i.position.lerp(i.target,e),i.matrixDirty=!0,n=!0)}),n}function Lw(t){let e=!1;Ve.forEach(n=>{n.isNew&&!Us(n,t)&&(n.isNew=!1,n.matrixDirty=!0,e=!0)}),e&&vn()}function Fw(t,e){let n=Ve.filter(o=>o.type==="compaction"&&Pn(o)&&Us(o,t)),i=new Map;n.forEach(o=>{i.set(o.id,{position:o.position,eventIndex:o.eventIndex,progress:Gd(o,t),inProgress:!1})});let s=ia?Dw():null;if(s){let o=kc?t-kc:0;i.set(Dr,{position:s.position,eventIndex:s.eventIndex,progress:o/2200%1,inProgress:!0})}let r=new Set(i.keys());px(ld,ea,r),i.forEach((o,a)=>{let l=gx(ld,a,VA,ea,JT,Hc.compaction),c=o.inProgress?.82:Math.sin(Math.min(1,o.progress)*Math.PI);l.forEach((u,d)=>{let h=(o.progress+u.userData.offset)%1,f=Math.pow(1-h,o.inProgress?1.35:1.8)*(.18+c*.56);u.position.set(o.position.x,o.position.y-(o.inProgress?.82:.66),o.position.z),u.scale.setScalar(o.inProgress?1.45+h*6.2+Math.sin(e*5.2)*.16:1.2+h*8.4),u.rotation.z=e*(o.inProgress?-.9:.45)+o.eventIndex*.01+d*.72,u.material.opacity=f,u.visible=f>.012})})}function Dw(){let t=Nt.get(Dr);if(t)return t;if(nt){let e=Nt.get(nt);if(e?.type==="prompt")return e}return $d()??Bx()??Ux()}function Ow(t,e){let n=Ve.filter(a=>a.type==="prompt"&&Pn(a)&&Us(a,t)),i=Yn.assistantStreaming?$d():null,s=i&&Pn(i)?i:null,r=Uw(s?[...n,s]:n),o=new Set(r.map(a=>a.id));px(cd,ta,o),r.forEach(a=>{let l=gx(cd,a.id,zA,ta,jT,Hc.prompt),c=Gd(a,t),u=Math.sin(Math.min(1,c)*Math.PI);l.forEach((d,h)=>{let f=(c+d.userData.offset)%1,g=Math.pow(1-f,1.55)*(.1+u*.38);d.position.set(a.position.x,a.position.y-.74,a.position.z),d.scale.set(1+f*3.2,1+f*5.4,1),d.rotation.z=e*.72+a.eventIndex*.012+h*Math.PI*.5,d.material.opacity=g,d.visible=g>.01})})}function Uw(t){let e=new Set;return t.filter(n=>e.has(n.id)?!1:(e.add(n.id),!0))}function Bw(){if(!Ve.length)return;let t=new It;t.setAttribute("position",new kt(new Float32Array(Ve.length*3),3)),t.setAttribute("color",new kt(new Float32Array(Ve.length*3),3)),t.boundingSphere=new sn(new P,600);let e=new cr({size:3,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1}),n=new lo(t,e);n.frustumCulled=!1,n.renderOrder=5,n.userData.nodes=Ve,an=n,Rn.add(n),Br=!0,nu()}function nu(){if(!an)return;let t=an.geometry.getAttribute("position"),e=t.array;Ve.forEach((n,i)=>{let s=i*3;Pn(n)?(e[s]=n.position.x,e[s+1]=n.position.y,e[s+2]=n.position.z):(e[s]=0,e[s+1]=Rd,e[s+2]=0)}),t.needsUpdate=!0,Br&&Dx()}function kw(t,e){Object.values(ci).forEach(n=>{if(!n)return;let i=!1;n.userData.nodes.forEach((s,r)=>{let o=Us(s,e),a=s.id===ft;!s.matrixDirty&&!o&&!a||(Ix(n,s,r,t,e,o,a),s.matrixDirty=!1,i=!0)}),i&&(n.instanceMatrix.needsUpdate=!0)})}function Ix(t,e,n,i,s=performance.now(),r=Us(e,s),o=e.id===ft){if(!Pn(e)){Tn.position.set(0,Rd,0),Tn.rotation.set(0,0,0),Tn.scale.setScalar(0),Tn.updateMatrix(),t.setMatrixAt(n,Tn.matrix);return}let a=Gd(e,s),l=r&&e.type==="compaction",c=r?l?.18+Ig(a)*1.08:.26+Ig(a)*.74:1,u=l?.28:.16,d=r?1+Math.max(0,Math.sin(i*(l?14:9)+e.eventIndex))*u:1,h=(o?1.18:r?1+Math.sin(i*2.3+e.eventIndex)*.018:1)*d;Tn.position.copy(e.position),_t==="inspect"||!r&&!o?Tn.rotation.set(0,0,0):l?Tn.rotation.set(i*1.45,i*2.2+e.eventIndex*.03,i*1.1):Tn.rotation.set(.08*Math.sin(i+e.eventIndex),i*.2+e.eventIndex*.07,0),Tn.scale.setScalar(e.scale*c*h),Tn.updateMatrix(),t.setMatrixAt(n,Tn.matrix)}function Us(t,e){return!!(t.freshUntil&&t.freshUntil>e)}function Gd(t,e){return!t.freshUntil||t.freshUntil<=e?1:Math.max(0,Math.min(1,1-(t.freshUntil-e)/Id))}function Ig(t){return 1-Math.pow(1-t,3)}function ua(){if(!Xn)return;let t=Xn.geometry.getAttribute("position"),e=t.array,n=0,i=(s,r)=>{let o=n*6;e[o]=s.x,e[o+1]=s.y,e[o+2]=s.z,e[o+3]=r.x,e[o+4]=r.y,e[o+5]=r.z,n+=1};na.forEach(s=>{let r=Ic(s),o=Nc(s),a=Nt.get(r),l=Nt.get(o);if(!a||!l||!Pn(a)||!Pn(l))return;let c=a.position;Array.isArray(s)||s.waypoints.forEach(u=>{i(c,u),c=u}),i(c,l.position)}),Xn.geometry.setDrawRange(0,n*2),t.needsUpdate=!0}function Vw(t){if(zc){zc=!1;return}iu(t);let e=Nx();e&&zr(e)}function zw(t){iu(t);let e=Nx();if(e){if(e.type==="compaction"){nt=null,_t="overview",as(),zr(e);return}e.type==="prompt"?zg(e.id,e):zg(e.promptId,e)}}function iu(t){let e=it.getBoundingClientRect();Or.x=(t.clientX-e.left)/e.width*2-1,Or.y=-((t.clientY-e.top)/e.height*2-1)}function Nx(){let t=Hw();if(t)return t;ad.setFromCamera(Or,We);let e=Object.values(ci).filter(i=>!!i);an&&e.push(an);let n=ad.intersectObjects(e,!1);for(let i of n){if(i.object===an&&i.index!==void 0){let s=an.userData.nodes[i.index]||null;if(s&&Pn(s))return s;continue}if(i.instanceId!==void 0){let r=i.object.userData.nodes[i.instanceId]||null;if(r&&Pn(r))return r}}return null}function Hw(){let t=it.getBoundingClientRect(),e=t.left+(Or.x+1)/2*t.width,n=t.top+(1-Or.y)/2*t.height,i=null,s=rg*rg;return Ve.forEach(r=>{if(!Pn(r)||(ji.copy(r.position).project(We),ji.z<-1||ji.z>1))return;let o=t.left+(ji.x+1)/2*t.width,a=t.top+(1-ji.y)/2*t.height,l=(o-e)**2+(a-n)**2;l<=s&&(i=r,s=l)}),i}function rs(t){jc=t??{},bt==="raw"&&be&&sf()}function Px(){jc=null,bt==="raw"&&be&&sf()}function zr(t,{reveal:e=!0,skipStableRender:n=!1}={}){if(!t)return;ft=t.id;let i=Gw(t);if(n&&Lr?.nodeId===t.id&&Lr.signature===i&&Zd()){rs(t.source),Fs();return}e&&Vx(),vn(),Cd.textContent=lA(t),os.classList.toggle("prompt-context",t.type==="prompt"),Ed(jg(t),"Selection"),Td.textContent=e0(t),Md(Jg(t)),bd.textContent=Qg(t),rs(t.source),Fs(),Wd(t0(t));let s=t.detail||t.body||t.title;t.type==="prompt"?Ww(s):Lx(s),Lr={nodeId:t.id,signature:i}}function Gw(t){let e=t0(t).map(n=>[n.id,n.eventIndex,n.imageIndex,n.detail??"",n.mimeType].join("")).join("");return[t.id,t.type,t.kind,t.eventIndex,t.type==="prompt"?t.promptIndex:"",jg(t),e0(t),Jg(t),t.detail||t.body||t.title,e].join("")}function Lx(t){Fr.classList.remove("stream-markdown"),Fr.textContent=t}function Ww(t){Fr.classList.add("stream-markdown"),Fr.replaceChildren(Yw(t)??Jw(t))}var Xw=["File","Side","Lines","Node position","Page URL","Frame","Target","Target selector","Target path","Comment"],$w=[{label:"File",field:"File"},{label:"Side",field:"Side"},{label:"Lines",field:"Lines"},{label:"Node",field:"Node position"},{label:"Target",field:"Target"},{label:"Selector",field:"Target selector"},{label:"Path",field:"Target path"},{label:"Page",field:"Page URL",asLink:!0},{label:"Frame",field:"Frame"}];function Yw(t){if(!/^#\s+Diff comments:\s*$/m.test(t))return null;let e=qw(t);if(!e.length)return null;let n=document.createDocumentFragment(),i=document.createElement("section");i.className="annotation-prompt";let s=document.createElement("h1");s.textContent="Diff comments",i.append(s);let r=t.match(/^- Current URL:\s*(.+)$/m)?.[1]?.trim();return e.forEach(o=>{let a=document.createElement("article");a.className="annotation-item";let l=document.createElement("span");l.className="annotation-marker",l.textContent=`Comment ${o.number}`,a.append(l);let c=document.createElement("p");c.className="annotation-comment",c.textContent=Ng(o,"Comment")||"No comment text.",a.append(c);let u=document.createElement("dl");u.className="annotation-meta",$w.forEach(d=>{Pg(u,d.label,Ng(o,d.field),d.asLink)}),Pg(u,"Current",r,!0),a.append(u),i.append(a)}),n.append(i),n}function qw(t){let e=t.replace(/\r\n?/g,`
`),n=[...e.matchAll(/^##\s+Comment\s+(\d+)\s*$/gm)];return n.map((i,s)=>{let r=n[s+1]?.index??e.search(/\n# In app browser:/),o=r>=0?r:e.length,a=e.slice((i.index??0)+i[0].length,o);return{number:i[1],fields:Zw(a)}})}function Zw(t){let e=new Map,n=t.split(`
`),i=0;for(;i<n.length;){let s=n[i].match(/^([A-Z][A-Za-z ]+):\s*(.*)$/),r=s?.[1];if(!r||!Fx(r)){i+=1;continue}let o=s[2].trim();if(o){e.set(r,o),i+=1;continue}let a=[];for(i+=1;i<n.length;){let l=n[i];if(!l.trim()||/^#{1,6}\s+/.test(l)||Kw(l))break;a.push(l.trim()),i+=1}e.set(r,a.join(`
`).trim())}return e}function Fx(t){return Xw.includes(t)}function Kw(t){let e=t.match(/^([A-Z][A-Za-z ]+):/);return!!(e&&Fx(e[1]))}function Ng(t,e){return t.fields.get(e)??""}function Pg(t,e,n,i=!1){let s=n?.trim();if(!s)return;let r=document.createElement("dt");r.textContent=e;let o=document.createElement("dd");if(i&&/^https?:\/\//.test(s)){let a=document.createElement("a");a.href=s,a.target="_blank",a.rel="noopener noreferrer",a.textContent=s,o.append(a)}else o.textContent=s;t.append(r,o)}function Jw(t){let e=document.createDocumentFragment(),n=t.replace(/\r\n?/g,`
`).split(`
`),i=0,s=(o,a)=>{o.innerHTML=Lg(a)},r=(o,a)=>{o.innerHTML=a.map(l=>Lg(l.trim())).join("<br>")};for(;i<n.length;){let o=n[i]??"";if(!o.trim()){i+=1;continue}let a=o.match(/^\s*```(\S*)\s*$/);if(a){let d=[];for(i+=1;i<n.length&&!/^\s*```\s*$/.test(n[i]??"");)d.push(n[i]??""),i+=1;i<n.length&&(i+=1);let h=document.createElement("pre"),f=document.createElement("code");a[1]&&(f.dataset.language=a[1]),f.textContent=d.join(`
`),h.append(f),e.append(h);continue}let l=o.match(/^\s{0,3}(#{1,6})\s+(.+)$/);if(l){let d=Math.min(6,l[1].length),h=document.createElement(`h${d}`);s(h,l[2]),e.append(h),i+=1;continue}if(/^\s*[-*]\s+/.test(o)){let d=document.createElement("ul");for(;i<n.length;){let h=(n[i]??"").match(/^\s*[-*]\s+(.+)$/);if(!h)break;let f=document.createElement("li");s(f,h[1]),d.append(f),i+=1}e.append(d);continue}if(/^\s*\d+\.\s+/.test(o)){let d=document.createElement("ol");for(;i<n.length;){let h=(n[i]??"").match(/^\s*\d+\.\s+(.+)$/);if(!h)break;let f=document.createElement("li");s(f,h[1]),d.append(f),i+=1}e.append(d);continue}let c=[];for(;i<n.length;){let d=n[i]??"";if(!d.trim()||/^\s*```/.test(d)||/^\s{0,3}#{1,6}\s+/.test(d)||/^\s*[-*]\s+/.test(d)||/^\s*\d+\.\s+/.test(d))break;c.push(d.trim()),i+=1}let u=document.createElement("p");r(u,c),e.append(u)}if(!e.childNodes.length){let o=document.createElement("p");o.textContent="",e.append(o)}return e}function Lg(t){let e=[],n=ai(t).replace(/`([^`]+)`/g,(i,s)=>{let r=`@@CODE_SPAN_${e.length}@@`;return e.push(`<code>${s}</code>`),r});return n=n.replace(/\[([^\]\n]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)/g,(i,s,r)=>`<a href="${r}" target="_blank" rel="noopener noreferrer">${s}</a>`),n=n.replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>"),n=n.replace(/(^|[^\*])\*([^*\n]+)\*/g,"$1<em>$2</em>"),n=n.replace(/@@CODE_SPAN_(\d+)@@/g,(i,s)=>e[Number(s)]??""),n}function Wd(t=[]){if(Ym.replaceChildren(),!t.length)return;let e=document.createDocumentFragment();t.forEach((n,i)=>{let s=document.createElement("figure"),r=jw(n),o=document.createElement("a");o.className="stream-image-link",o.href=r,o.target="_blank",o.rel="noopener",o.title=`Prompt image ${i+1}`;let a=document.createElement("img");a.loading="eager",a.decoding="async",a.src=r,a.alt=`Prompt image ${i+1}`,a.addEventListener("load",()=>{s.classList.add("loaded"),s.classList.remove("load-error")}),a.addEventListener("error",()=>{s.classList.add("load-error"),l.textContent="Image unavailable in this local/privacy context; use Raw or Export for redacted evidence."});let l=document.createElement("figcaption"),c=n.detail?` (${n.detail})`:"";l.textContent=`${n.mimeType||"image"}${c}`,o.append(a),s.append(o,l),e.append(s)}),Ym.append(e)}function jw(t){let e=new URL(t.url,window.location.origin),n=be?.lastModifiedAt||be?.generatedAt||`${t.eventIndex}`,i=Nn||be?.sessionPath||null;return e.searchParams.set("v",n),U0(e,{includeSource:!1,sessionPath:i}),`${e.pathname}${e.search}`}function vn(){Ve.forEach(t=>{t.matrixDirty=!0}),Object.values(ci).forEach(t=>{t&&(t.userData.nodes.forEach((e,n)=>{t.setColorAt(n,Xd(e,e.id===ft))}),t.instanceColor&&(t.instanceColor.needsUpdate=!0))}),Br=!0,Dx()}function Dx(){if(!an)return;let t=an.geometry.getAttribute("color"),e=t.array;Ve.forEach((n,i)=>{let s=i*3,r=Xd(n,n.id===ft);e[s]=r.r,e[s+1]=r.g,e[s+2]=r.b}),t.needsUpdate=!0,Br=!1}function Xd(t,e){let n=Hc[t.kind]??Hc.tool;return Ms.setHex(n),Pn(t)?e?Ms.lerp(ug,.38):t.isNew?Ms.lerp(ug,.24):_t==="inspect"&&t.promptId!==nt?Ms.multiplyScalar(.34):vI(t)||Ms.multiplyScalar(.38):Ms.setRGB(0,0,0),Ms}function su(t){return _t!=="inspect"||!nt||t.promptId===nt}function Pn(t){return su(t)&&(!Ir||du(t,Ir))}function Ox(){let t=it.getBoundingClientRect(),e=Math.max(1,Math.floor(t.width)),n=Math.max(1,Math.floor(t.height));bi?.setSize(e,n,!1),bi?.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),We.aspect=e/n,We.updateProjectionMatrix()}function ha({preserveDistance:t=!1}={}){if(!Ve.length||_t!=="overview")return;let e=Yd(),n=We.aspect<.75,i=Math.max(18,We.position.distanceTo(Qe.target)),s=t?Math.min(90,i):n?Ts==="two-d"?FA:LA:Ts==="two-d"?y0:PA,r=e?Qw(e):ji.set(0,0,0);Qe.target.set(r.x,r.y,r.z),Ts==="two-d"?We.position.set(r.x,r.y+s,r.z+.01):We.position.set(r.x+s*.38,r.y+s*.68,r.z+s*.58),Qe.update()}function Qw(t){let e=Ve.filter(l=>l.promptId===t.promptId&&su(l));if(e.length<=1)return Wc(t);let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;return e.forEach(l=>{let c=Wc(l);n=Math.min(n,c.x),i=Math.max(i,c.x),s=Math.min(s,c.y),r=Math.max(r,c.y),o=Math.min(o,c.z),a=Math.max(a,c.z)}),new P((n+i)/2,(s+r)/2,(o+a)/2)}function Wc(t){return t.home??t.target}function eR(){let t=Yd();return t?Wc(t):null}function Ux(){return Ve.reduce((t,e)=>!t||e.eventIndex>=t.eventIndex?e:t,null)}function $d(){return Ve.reduce((t,e)=>e.type!=="prompt"?t:!t||e.eventIndex>=t.eventIndex?e:t,null)}function tR(){return Ve.reduce((t,e)=>e.type!=="prompt"||e.id===Is?t:!t||e.eventIndex>=t.eventIndex?e:t,null)}function Bx(){let t=be?Ex(be).at(-1):null;if(!t)return null;let e=t.type==="prompt"?t.prompt.id:t.compaction.id;return Nt.get(e)??null}function Yd(){let t=Bx();if(t?.type==="prompt")return t.id===Is?tR()??t:t;if(nt){let e=Nt.get(nt);if(e?.type==="prompt")return e}return $d()??t??Ux()}function kx(){ru(),Lr=null;let t=be,e=t?.prompts.at(-1);os.classList.remove("prompt-context"),Cd.textContent="SESSION",Ed(t?.ui.sessionName||"Session overview","Session"),Td.textContent=t?`${t.totals.promptCount} prompts`:"Loading",Md(t?.lastModifiedAt||"Live context"),bd.textContent=e?.title||t?.ui.sessionName||"Session overview",Fr.classList.remove("stream-markdown"),Fr.textContent=uR(),Wd()}function qd(){bt==="raw"&&(en.textContent=ft?"Selected event":"Session graph")}function Vx(){if(!nR()){ru();return}os.classList.remove("hidden"),Gx()}function nR(){return bt==="map"}function Zd(){return!os.classList.contains("hidden")}function ru(){os.classList.add("hidden"),Lr=null,Fs()}function Kd(){if(!ft)return null;let t=Nt.get(ft);if(!t)return null;let e=au().find(n=>n.node?.id===t.id||n.eventIndex===t.eventIndex);return e?{node:t,row:e}:{node:t}}function zx(){let t=Kd();return t?iR(t.row??Zx(t.node)):null}function iR(t){let e=zt();return km({source:Ti(e.source),lineNumber:t.lineNumber,eventIndex:t.eventIndex,kind:[t.role,t.eventType,t.toolName].filter(Boolean).join(" / "),summary:sR(t),parserVersion:e.parserVersion,schemaVersion:e.schemaVersion})}function sR(t){return Bm({role:t.role,eventType:t.eventType,toolName:t.toolName,filePath:t.filePath,rawSummary:rR(t)})}function rR(t){return[t.title,t.detail].filter(Boolean).join(" - ")}function Fs(){let t=!!Kd(),e=a_().length>1;os.classList.toggle("has-selection",t);for(let n of[jo,n0,i0,s0])n.disabled=!t;r0.disabled=!e,o0.disabled=!e,t||(jo.textContent="Copy Safe Ref")}async function oR(){let t=zx();if(!t){Fs();return}try{await navigator.clipboard.writeText(t),jo.textContent="Copied",window.setTimeout(()=>{jo.textContent="Copy Safe Ref"},1200)}catch(e){Ci("COPY","Copy failed",Ds(e))}}function aR(){let t=zx();if(!t){Ci("COPY","Select an event first","Open Map or Timeline and select an event before copying a safe reference.");return}ls(t,"Copy-safe reference copied")}function lR(t){let e=t.shareabilitySummary,n=t.privacySummary,i=t.parserHealth;return Vm({source:Ti(t.source),sessionName:t.ui.sessionName||t.sessionPath||`${Ti(t.source)} session`,totalTurns:t.ui.totalTurns,callCount:t.totals.callCount,fileChangeCount:t.totals.fileChangeCount,latestEventIndex:t.latestEventIndex,parserVersion:t.parserVersion,schemaVersion:t.schemaVersion,cliContext:[t.metadata.originator,t.metadata.cliVersion].filter(Boolean).join(" ")||null,rawLogsSafeToShare:e.rawLogsSafeToShare,rawLogCaution:e.rawLogCaution,sanitizedGraphNote:e.sanitizedGraphNote,redactedFieldCount:i.redactedFieldCount,imageCount:i.imageCount,apiTokenRequired:n.apiTokenRequired})}function ou(t){let e=Kd();if(!e){Fs();return}let n=e.node.id,i=e.node.promptId,s=e.row?.source??e.node.source;rs(s),Qt(t),ft=n,nt=i,vn(),t!=="map"&&da()}function Hx(t){wr=t,Gx()}function Gx(){os.classList.toggle("compact",wr),wc.title=wr?"Expand context":"Minimize context",wc.setAttribute("aria-label",wr?"Expand context":"Collapse context"),wc.setAttribute("aria-expanded",String(!wr))}function Jd(t,e){for(let n of t)n.classList.toggle("active",e(n))}function Wx(){Jd(x0,t=>t.dataset.appMode===bt),rd.classList.toggle("active",bt==="settings"),rd.setAttribute("aria-pressed",String(bt==="settings"))}function Xx(){Jd(_0,t=>t.dataset.source===Ns)}async function cR(t){let e=D0(t);if(e===Ns)return;hu(),Ns=e,Nn=null,Wn=null,jt=null,Ai=null,xn=null,Cs=null,Xx(),ca(),V0();let n=Os;await Fd({generation:n}),await Vr({suppressLiveAnimation:!0}),Ls(n)&&uu()}function uR(){return be?[`${Ti(be.source)} session`,`Prompts: ${be.totals.promptCount}`,`Turns: ${be.ui.totalTurns}`,`Calls: ${be.totals.callCount}`,`Completed calls: ${be.totals.completedCallCount}`,`Messages: ${be.totals.assistantMessageCount}`,`File changes: ${be.totals.fileChangeCount}`,`Context: ${t_(be.tokenTelemetry)}`,`Compactions: ${be.totals.compactionCount}`,`Unknown events: ${be.parserHealth?.unknownEventCount??0}`,`Malformed lines: ${be.parserHealth?.malformedLineCount??0}`,`Codex: ${[be.metadata.originator,be.metadata.cliVersion].filter(Boolean).join(" ")||"unknown"}`,`Model: ${be.metadata.model||be.metadata.modelProvider||"unknown"}`,`Records: ${be.lineCount}`,`Session file: ${qn(be.sessionPath)||be.sessionPath}`].join(`
`):"Waiting for session data"}function jd(){let t=bt!=="map";MA.classList.toggle("hidden",!t),v0.classList.toggle("mode-panel-active",t)}function da(){if(jd(),bt!=="map"){if(ef(),EA.textContent=Ti(be?.source??Ns),bA.textContent=hR(bt),AA.classList.toggle("hidden",bt!=="timeline"),!be){en.textContent="Waiting for session data",Ut.replaceChildren(_n("Waiting for session data."));return}switch(bt){case"summary":dR();return;case"timeline":_R();return;case"transcript":bR();return;case"health":jx();return;case"insights":LR();return;case"diff":Yo();return;case"raw":sf();return;case"export":FR();return;case"settings":DR();return}}}function hR(t){return t.charAt(0).toUpperCase()+t.slice(1)}function dR(){if(!be){en.textContent="Waiting for session data",Ut.replaceChildren(_n("Waiting for session data."));return}let t=zt(),e=be.privacySummary,n=be.shareabilitySummary,i=t.tokenTelemetry,s=t.parserHealth,r=t.ui.sessionName||t.cwd?.split(/[\\/]/).filter(Boolean).at(-1)||`${Ti(t.source)} session`,o=n.rawLogsSafeToShare?"Raw logs marked safe to share":"Raw logs require review before sharing";en.textContent=`${o} - ${t_(i)}`;let a=document.createElement("div");a.className="summary-shell";let l=je("Session Summary");l.classList.add("summary-hero"),l.append(aa(`${r} is a ${Ti(t.source)} trace with ${Fe(t.ui.totalTurns)} turns, ${Fe(t.totals.callCount)} tool calls, and ${Fe(t.totals.fileChangeCount)} file changes.`),aa(`${o}. Sanitized graph/export and copy-safe references reduce exposure compared with raw logs, but they still require human judgment before sharing.`));let c=document.createElement("div");c.className="summary-triage";let u=je("What Happened",[`${Fe(t.ui.totalTurns)} turns across ${Fe(t.totals.promptCount)} prompts`,`${Fe(t.totals.completedCallCount)} completed tool calls; ${Fe(t.totals.fileChangeCount)} file changes`,`${Fe(s.unknownEventCount)} unknown and ${Fe(s.malformedLineCount)} malformed parser records`]),d=document.createElement("div");d.className="mode-actions",d.append(ut("Open Timeline",()=>Qt("timeline")),ut("Read Transcript",()=>Qt("transcript"))),u.append(d);let h=je("Safe To Share",[o,n.sanitizedGraphNote||"Sanitized graph data is intended for UI and report sharing after review.",e.apiTokenRequired?"Local API token is required for browser/API access; token value is not shown.":"No local API token required by this run."]),f=document.createElement("div");f.className="mode-actions",f.append(ut("Copy Share Summary",()=>ls(lR(t),"Copy-safe share summary copied")),ut("Open Export",()=>Qt("export")),ut("Audit Raw",()=>Qt("raw"))),h.append(f),c.append(u,fR(t.insights),h);let g=document.createElement("div");g.className="summary-shell-grid",g.append(Ar("Session",[["Source",Ti(t.source)],["Session",r],["Model",t.metadata.model||t.metadata.modelProvider||"unknown"],["CLI",[t.metadata.originator,t.metadata.cliVersion].filter(Boolean).join(" ")||"unknown"],["Records",Om(t.lineCount,t.pendingBytes)],["Size",Vo(t.byteLength)],["Modified",Jh(t.lastModifiedAt)||"unknown"],["Path",qn(t.sessionPath)||t.sessionPath]]),Ar("Activity",[["Prompts",Fe(t.totals.promptCount)],["Turns",Fe(t.ui.totalTurns)],["Tool calls",`${Fe(t.totals.completedCallCount)} / ${Fe(t.totals.callCount)} completed`],["Assistant messages",Fe(t.totals.assistantMessageCount)],["File changes",Fe(t.totals.fileChangeCount)],["Compactions",Fe(t.totals.compactionCount)],["Dynamic tools",t.metadata.dynamicTools.length?t.metadata.dynamicTools.map(v=>v.name).slice(0,5).join(", "):"none logged"]]),Ar("Privacy",[["Mode",e.privacyMode||"unknown"],["Redaction profile",e.redactionProfile||"default"],["API token required",e.apiTokenRequired?"yes":"no"],["Images",e.imageRouteBehavior||"not logged"],["Telemetry",e.noTelemetry?"disabled":"check deployment settings"],["Third-party uploads",e.noThirdPartyUploads?"disabled":"check before sharing"]]),Ar("Shareability",[["Raw logs",n.rawLogsSafeToShare?"safe to share":"review/redact first"],["Raw caution",n.rawLogCaution||"Review prompts, paths, and tool output before sharing raw logs."],["Sanitized graph",n.sanitizedGraphNote||"Use sanitized graph/export surfaces for sharing."],["Redacted fields",Fe(s.redactedFieldCount)],["Images",Fe(s.imageCount)]]),Ar("Parser Health",mC(s,Fe)),Ar("Token Context",[["Telemetry",i.latestTotalTokens?"available":"not logged"],["Latest tokens",Fe(i.latestTotalTokens)],["Context window",Fe(i.contextWindow)],["Context pressure",br(i.latestContextPercent)],["Primary rate limit",br(i.primaryRateLimitPercent)],["Secondary rate limit",br(i.secondaryRateLimitPercent)]])),a.append(l,c,g),(s.warnings.length||t.insights.warnings.length)&&a.append(je("Warnings",[...s.warnings,...t.insights.warnings].slice(0,10))),Ut.replaceChildren(a)}function Ar(t,e){let n=document.createElement("article");n.className="summary-fact";let i=document.createElement("h3");i.textContent=t;let s=document.createElement("dl");return e.forEach(([r,o])=>{let a=document.createElement("dt");a.textContent=r;let l=document.createElement("dd");l.textContent=o,s.append(a,l)}),n.append(i,s),n}function fR(t){let e=je("Inspect First");e.classList.add("summary-insights");let n=t.inspectionQueue;if(!n.length)return e.append(aa("No high-priority findings detected. Parser health and raw inspection remain available for audit."),Fg([ut("Open Insights",()=>Qt("insights")),ut("Audit Raw",()=>Qt("raw"))])),e;let i=aa("Top queued findings are ready for inspect-first review; each evidence action routes to an existing panel and falls back clearly when no event line is logged."),s=document.createElement("div");return s.className="summary-insight-list",n.forEach((r,o)=>{let a=document.createElement("article");a.className=`summary-insight severity-${r.severity}`;let l=document.createElement("div"),c=document.createElement("strong");c.textContent=`${o+1}. ${r.title}`;let u=document.createElement("small");u.textContent=pR(r);let d=document.createElement("p");d.textContent=r.redactionSafeSummary||r.summary,l.append(c,u,d);let h=Fg([ut("Open Insights",()=>$x(r)),ut("Timeline Evidence",()=>id(r,"timeline")),ut("Transcript Evidence",()=>id(r,"transcript")),ut("Raw Evidence",()=>id(r,"raw"))]);a.append(l,h),s.append(a)}),e.append(i,s),e}function Fg(t){let e=document.createElement("div");return e.className="mode-row-actions",e.append(...t),e}function pR(t){let e=Qd(t),n=t.eventIds.length?`${Fe(t.eventIds.length)} linked events`:"no linked event ids",i=e?`line ${e}`:"no event line logged";return[t.severity,t.confidence,t.directness,i,n].filter(Boolean).join(" - ")}function Qd(t){return t.lineNumbers.find(e=>Number.isFinite(e)&&e>0)??null}function mR(t){let e=au(),n=Qd(t),i=n?e.find(r=>r.lineNumber===n):null;if(i)return i;if(!t.eventIds.length)return null;let s=new Set(t.eventIds);return e.find(r=>s.has(r.id)||(r.node?s.has(r.node.id):!1))??null}function $x(t){Qt("insights"),rs(t),en.textContent=`Queued insight selected - ${t.title}`;let e=_n("Selected insight loaded in Raw for audit; use evidence actions to jump into Timeline, Transcript, or Raw rows when line/event data is available.");e.classList.add("mode-notice"),Ut.prepend(e)}function id(t,e){let n=mR(t);if(n){cu(n.lineNumber,t.title,t,e);return}let i=Qd(t)||t.eventIds.length?"Logged evidence did not match a rendered Timeline or Transcript row; showing the queued insight instead.":"No event line is logged for this insight; showing the queued insight instead.";$x(t),rf(t.title,t,i)}function ef(){Ut.querySelectorAll(".virtual-list-viewport, .virtual-text-viewport").forEach(t=>{t.perlustronCleanup?.()}),Ut.classList.remove("virtual-mode-host")}function tf(t,e){ef(),Ut.classList.add("virtual-mode-host");let n=document.createElement("div");n.className="virtual-mode-panel",e&&n.append(e),n.append(t),Ut.replaceChildren(n)}function Yx(t){let e=document.createElement("div");e.className="virtual-list-viewport",e.tabIndex=0,e.setAttribute("role","region"),e.setAttribute("aria-label",t.ariaLabel);let n=document.createElement("div");n.className="virtual-list-canvas",e.append(n);let i=Math.max(1,e.clientWidth||Z1),s=t.items.map((p,y)=>Math.max(24,Math.ceil(t.estimateHeight(p,y,i)))),r=new Array(t.items.length),o=0,a=(p=0)=>{let y=Math.max(0,p);o=y>0?r[y]:0;for(let E=y;E<t.items.length;E+=1)r[E]=o,o+=s[E];n.style.height=`${Math.max(1,o)}px`};a();let l=0,c=!1,u=null,d=bt,h=p=>{if(!t.items.length)return-1;let y=0,E=t.items.length-1,b=t.items.length;for(;y<=E;){let R=Math.floor((y+E)/2);r[R]+s[R]>=p?(b=R,E=R-1):y=R+1}return Math.min(b,t.items.length-1)},f=(p,y)=>{let E=p;for(let b=p;b<t.items.length&&!(r[b]>y);b+=1)E=b;return E},g=(p,y)=>{if(!t.measureHeight||p<0||y<p)return!1;let E=Math.max(1,e.clientWidth||i),b=h(e.scrollTop+1),R=b>=0?e.scrollTop-r[b]:0,S=t.items.length;for(let w=p;w<=y;w+=1){let x=Math.max(24,Math.ceil(t.measureHeight(t.items[w],w,E)));Math.abs(x-s[w])<=1||(s[w]=x,S=Math.min(S,w))}return S===t.items.length?!1:(a(S),b>=0&&S<b&&(e.scrollTop=Math.max(0,r[b]+R),Zo[d]=e.scrollTop),!0)},v=()=>{if(l=0,c)return;if(!t.items.length){n.replaceChildren(),n.style.height="1px";return}let p=Math.max(0,e.scrollTop-bc),y=e.scrollTop+e.clientHeight+bc,E=h(p),b=f(E,y);g(E,b)&&(E=h(Math.max(0,e.scrollTop-bc)),b=f(E,e.scrollTop+e.clientHeight+bc));let R=document.createDocumentFragment();for(let S=E;S<=b;S+=1){let w=t.items[S],x=document.createElement("div");x.className="virtual-list-item",x.dataset.index=String(S),x.dataset.key=t.keyForItem(w,S),x.style.transform=`translateY(${r[S]}px)`,x.style.height=`${s[S]}px`,x.append(t.renderItem(w,S)),R.append(x)}n.replaceChildren(R)},m=()=>{c||l||(l=window.requestAnimationFrame(v))};return e.addEventListener("scroll",()=>{Zo[d]=e.scrollTop,m()},{passive:!0}),u=new ResizeObserver(()=>{c||m()}),u.observe(e),e.perlustronCleanup=()=>{c=!0,l&&window.cancelAnimationFrame(l),u?.disconnect()},window.requestAnimationFrame(()=>{let p=Zo[d]??0;e.scrollTop=Math.min(p,Math.max(0,o-e.clientHeight)),v()}),e}function Xc(t,e,n){let i=Math.max(8,e),s=1,r=0;for(;s<n;){let a=t.indexOf(`
`,r);if(a===-1)break;s+=1,r=a+1}let o=Math.ceil(Math.min(t.length,i*n)/i);return Math.min(n,Math.max(1,s,o))}function gR(t){let e=t.split(/\r?\n/),n=document.createElement("div");n.className="virtual-text-viewport",n.tabIndex=0,n.setAttribute("role","region"),n.setAttribute("aria-label","Raw JSON payload"),n.style.setProperty("--raw-line-height",`${zo}px`),n.style.setProperty("--raw-gutter-width",`${Math.max(4,String(e.length).length+2)}ch`);let i=document.createElement("div");i.className="virtual-text-canvas",i.style.height=`${Math.max(1,e.length*zo)}px`,n.append(i);let s=0,r=!1,o=()=>{if(s=0,r)return;let l=e.length<=q1,c=l?0:Math.max(0,Math.floor(n.scrollTop/zo)-Gm),u=l?e.length:Math.min(e.length,Math.ceil((n.scrollTop+n.clientHeight)/zo)+Gm),d=document.createDocumentFragment();for(let h=c;h<u;h+=1){let f=document.createElement("div");f.className="virtual-text-row",f.style.transform=`translateY(${h*zo}px)`;let g=document.createElement("span");g.className="virtual-text-line-number",g.textContent=String(h+1);let v=document.createElement("span");v.className="virtual-text-line",v.textContent=e[h]||" ",f.append(g,v),d.append(f)}i.replaceChildren(d)},a=()=>{r||s||(s=window.requestAnimationFrame(o))};return n.addEventListener("scroll",a,{passive:!0}),n.perlustronCleanup=()=>{r=!0,s&&window.cancelAnimationFrame(s)},window.requestAnimationFrame(o),n}function xR(t){try{return JSON.stringify(t,null,2)}catch(e){return JSON.stringify({error:Ds(e)},null,2)}}function qx(t,e){tf(gR(xR(t)),e)}function _R(){let t=au();yR(t);let e=t.filter(SR);if(en.textContent=`${e.length} of ${t.length} events`,!e.length){Ut.replaceChildren(_n("No timeline events match the current filters."));return}let n=document.createElement("div");n.className="mode-actions",n.append(ut("Copy Safe Reference",()=>aR())),tf(Yx({ariaLabel:"Timeline events",items:e,keyForItem:i=>i.id,estimateHeight:vR,renderItem:i=>MR(i)}),n)}function vR(t){let e=Xc(t.title,58,3)*eA,n=Xc([t.filePath,t.detail].filter(Boolean).join(" - "),110,7)*jh,i=t.timestamp?jh*2:jh;return Math.min(J1,Math.max(K1,28+Math.max(i,e,n)))}function au(){if(!be)return[];let t=Ve.map(Zx);for(let e of be.parserHealth.unknownEvents||[])t.push({id:`unknown-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"unknown",eventType:e.sourceEventType,toolName:"",filePath:"",title:`Unknown event ${e.sourceEventType}`,detail:e.preview,timestamp:null,flags:["unknown"],source:e});for(let e of be.parserHealth.malformedLines||[])t.push({id:`malformed-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"malformed",eventType:"malformed_jsonl",toolName:"",filePath:"",title:e.error,detail:e.preview,timestamp:null,flags:["malformed"],source:e});for(let e of be.parserHealth.skippedLargePayloads||[])t.push({id:`skipped-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"parser",eventType:"skipped_large_payload",toolName:"",filePath:"",title:e.reason,detail:`${Fe(e.byteLength)} bytes`,timestamp:null,flags:["large"],source:e});return t.sort((e,n)=>e.eventIndex-n.eventIndex||e.lineNumber-n.lineNumber),t}function Zx(t){let e=t.type==="prompt"?"user":t.type==="message"?"assistant":t.type==="call"?"tool":t.type==="fileChange"?"file":"system",n=t.type==="call"?t.source.name:"",i=t.type==="fileChange"?t.source.path:"",s=[t.detail,t.body].filter(Boolean).join(`
`),r=new Set;(du(t,"error")||e_(`${t.title} ${s}`))&&r.add("error"),t.type==="call"&&l_(t.source)&&r.add("long"),t.type==="fileChange"&&r.add("file"),t.type==="compaction"&&r.add("compaction"),`${t.title} ${s}`.includes("[REDACTED")&&r.add("redacted");let o=t.type==="call"&&t.source.durationMs!==null?Dm(t.source.durationMs):"";return{id:t.id,eventIndex:t.eventIndex,lineNumber:t.eventIndex+1,role:e,eventType:t.type==="fileChange"?`file_${t.source.changeType}`:t.type,toolName:n,filePath:i,title:t.title,detail:[o,s].filter(Boolean).join(`
`),timestamp:t.type==="call"?t.source.startedAt||t.source.completedAt:t.source.timestamp,flags:[...r],source:t.source,node:t}}function yR(t){Cc(Pc,"All roles",t.map(e=>e.role)),Cc(Lc,"All types",t.map(e=>e.eventType)),Cc(Fc,"All tools",t.map(e=>e.toolName).filter(Boolean)),Cc(Dc,"All files",t.map(e=>qn(e.filePath)||e.filePath).filter(Boolean))}function Cc(t,e,n){let i=t.value,s=[...new Set(n)].sort((a,l)=>a.localeCompare(l)),r=document.createDocumentFragment(),o=document.createElement("option");o.value="",o.textContent=e,r.append(o),s.forEach(a=>{let l=document.createElement("option");l.value=a,l.textContent=a,r.append(l)}),t.replaceChildren(r),t.value=s.includes(i)?i:""}function SR(t){if(Pc.value&&t.role!==Pc.value||Lc.value&&t.eventType!==Lc.value||Fc.value&&t.toolName!==Fc.value)return!1;let e=qn(t.filePath)||t.filePath;return Dc.value&&e!==Dc.value||u0.checked&&!t.flags.includes("error")||h0.checked&&!t.flags.includes("unknown")||d0.checked&&!t.flags.includes("malformed")||f0.checked&&!t.flags.includes("redacted")?!1:Ps?[t.role,t.eventType,t.toolName,t.filePath,t.title,t.detail,t.flags.join(" ")].join(" ").toLowerCase().includes(Ps):!0}function MR(t){let e=document.createElement("button");e.type="button",e.className=`mode-row ${t.node?.id===ft?"active":""}`;let n=document.createElement("code");n.textContent=[`L${t.lineNumber}`,ER(t.timestamp)].filter(Boolean).join(`
`);let i=document.createElement("small");i.textContent=[t.role,t.eventType,t.toolName].filter(Boolean).join(" / ");let s=document.createElement("strong");s.textContent=t.title;let r=document.createElement("small");return r.textContent=[t.filePath,t.detail].filter(Boolean).join(" - "),e.append(n,i,s,r),e.addEventListener("click",()=>Kx(t)),e}function ER(t){if(!t)return"";let e=new Date(t);return Number.isNaN(e.valueOf())?t:p0.checked?e.toISOString().replace(".000Z","Z"):e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}function Kx(t){t.node?(ft=t.node.id,nt=t.node.promptId,vn(),zr(t.node,{reveal:!1})):Ci(t.eventType.toUpperCase(),t.title,t.detail||t.title),rs(t.source)}function bR(){let t=zt(),e=AR(t);if(wR(e),en.textContent=`${t.prompts.length} turns / ${e.filter(n=>n.type==="entry").length} entries`,!e.length){Ut.replaceChildren(_n("No transcript events were parsed."));return}tf(Yx({ariaLabel:"Transcript entries",items:e,keyForItem:nf,estimateHeight:TR,measureHeight:CR,renderItem:IR}))}function AR(t){let e=[];return t.prompts.forEach((n,i)=>{e.push({type:"turn",prompt:n,promptIndex:i}),NR(n).forEach(s=>e.push({type:"entry",entry:s}))}),e}function nf(t,e){return t.type==="turn"?`turn-${t.prompt.id}`:`entry-${t.entry.eventIndex}-${t.entry.label}-${e}`}function TR(t,e,n){if(t.type==="turn")return Xg;let i=Jx(n),s=Math.max(36,Math.floor(i/7.2)),r=Xc(t.entry.title,s,4)*qg,o=Xc(t.entry.body,s,18)*Yg;return Math.max($g,Zg+r+o+Kg)}function CR(t,e,n){if(t.type==="turn")return Xg;let i=nf(t,e),s=Jx(n),r=Math.max(1,Math.round(s)),o=Nr.get(i)??{heights:new Map};Nr.set(i,o),(o.title&&(o.title.text!==t.entry.title||o.title.font!==Xm)||o.body&&(o.body.text!==t.entry.body||o.body.font!==Wm))&&o.heights.clear();let a=o.heights.get(String(r));if(a!==void 0)return a;let l=Dg(o,"title",t.entry.title,Xm,r,qg),c=Dg(o,"body",t.entry.body,Wm,r,Yg),u=Math.max($g,Zg+l+c+Kg);return o.heights.set(String(r),u),u}function wR(t){if(!Nr.size)return;let e=new Set;t.forEach((n,i)=>{n.type==="entry"&&e.add(nf(n,i))});for(let n of Nr.keys())e.has(n)||Nr.delete(n)}function Jx(t){return Math.max(80,t-j1-Q1)}function Dg(t,e,n,i,s,r){if(!n)return 0;let o=t[e],a=o&&o.text===n&&o.font===i?o.prepared:RR(t,e,n,i),{lineCount:l}=Im(a,s,r);return Math.max(1,l)*r}function RR(t,e,n,i){let s=Rm(n,i,{whiteSpace:"pre-wrap"});return t[e]={text:n,font:i,prepared:s},t.heights.clear(),s}function IR(t,e){if(t.type==="entry")return PR(t.entry);let n=document.createElement("section");n.className="transcript-turn-row";let i=document.createElement("small");i.textContent=`User ${t.promptIndex+1}`;let s=document.createElement("strong");return s.textContent=t.prompt.title,n.append(i,s),n}function NR(t){let e=[];return ex(t,t.calls).forEach(n=>{if(n.type==="assistant"){e.push({label:"Assistant",title:"Response",body:n.message.text,eventIndex:n.message.eventIndex}),n.calls.forEach(i=>e.push(...Og(i)));return}e.push(...Og(n.call))}),t.fileChanges.forEach(n=>{e.push({label:"File",title:`${n.changeType}: ${n.shortPath||n.path}`,body:n.preview||n.detail,eventIndex:n.eventIndex})}),[{label:"Prompt",title:t.title,body:t.text,eventIndex:t.eventIndex},...e.sort((n,i)=>n.eventIndex-i.eventIndex)]}function Og(t){let e=t.argumentPreview||"No arguments logged.",n=t.outputPreview||(t.status==="completed"?"No result preview logged.":`Status: ${t.status}`);return[{label:"Tool",title:`${t.name} (${t.status})`,body:e,eventIndex:t.eventIndex},{label:"Result",title:t.name,body:n,eventIndex:t.eventIndex}]}function PR(t){let e=document.createElement("div");e.className="transcript-step";let n=document.createElement("code");n.textContent=t.label;let i=document.createElement("div"),s=document.createElement("strong");s.textContent=t.title;let r=aa(t.body);return i.append(s,r),e.append(n,i),e}function jx(){let t=zt().parserHealth;en.textContent=`${t.unknownEventCount} unknown / ${t.malformedLineCount} malformed / ${t.skippedLargePayloadCount} skipped`,lu();let e=document.createDocumentFragment(),n=document.createElement("div");n.className="mode-actions",n.append(ut("Copy Parser Summary",()=>ls(zR(zt()),"Parser health summary copied")),ut("Export Unknowns JSON",()=>WR()),ut("Copy Issue Body",()=>XR()),ut("Fixture Report",()=>$R())),e.append(n);let i=document.createElement("div");i.className="mode-card-grid",i.append(je("Parser",[tu(t),`Source confidence: ${t.sourceDetectionConfidence}`,`Parsed ${t.parsedEventCount} of ${t.totalLinesRead} lines`,...oa([Od(t)])]),je("Unknown Events",xC(t)),je("Malformed And Skipped",yC(t)),je("Coverage",[`Tool calls/results: ${t.toolCallCount}/${t.toolResultCount}`,`File activity: ${t.fileActivityCount}`,`Token telemetry: ${t.tokenTelemetryAvailable?"available":"not logged"}`,`Redacted fields: ${t.redactedFieldCount}`,...oa([J0(t)])])),e.append(i);let s=je("Unknown Samples");s.append(kR(t)),e.append(s),dd?e.append(_n("Preparing redacted schema-drift report...")):Cs?e.append(_n(Cs)):xn&&e.append(je("Issue Template",[`Fixture: ${xn.suggestedFixtureName}`,`Samples: ${xn.redactedSamples.length}`,`Profile: ${xn.redactionReport.profile}`])),Ut.replaceChildren(e)}function LR(){let t=zt().insights;en.textContent=`${t.inspectionQueue.length} queued / ${t.repeatedPatterns.length} repeated / ${t.suspiciousToolCalls.length} suspicious`;let e=document.createDocumentFragment(),n=document.createElement("div");n.className="mode-actions",n.append(ut("Copy Insight Summary",()=>ls(HR(t),"Insight summary copied"))),e.append(n);let i=je("What Should I Inspect First?");i.append(UR(t)),e.append(i);let s=document.createElement("div");s.className="mode-card-grid",s.append(je("Failure Chain",t.failureChain?[`First logged error-like event: line ${t.failureChain.firstLoggedError.lineNumber} - ${t.failureChain.firstLoggedError.title}`,`Possible retries: ${t.failureChain.subsequentRetries.length}`,`File changes after first error: ${t.failureChain.fileChangesAfterFirstError.length}`,`Final logged outcome: ${t.failureChain.finalOutcome}`]:["No logged error-like event detected."]),je("Repeated Patterns",t.repeatedPatterns.map(r=>`${r.patternType} x${r.count} lines ${r.firstLine}-${r.lastLine}: ${r.key}`)),je("Suspicious Tool Calls",t.suspiciousToolCalls.map(r=>`Line ${r.call.lineNumber} ${r.toolName}: ${r.reason}`)),je("Context Pressure",[t.contextPressure.status,t.contextPressure.explanation,`High-context markers: ${t.contextPressure.highContextMarkers.length}`,`Compaction markers: ${t.contextPressure.compactionMarkers.length}`]),je("File Impact",[`Edited: ${t.fileImpact.filesEdited.length}`,`Read: ${t.fileImpact.filesRead.length}`,`Referenced: ${t.fileImpact.filesReferenced.length}`,...t.fileImpact.filesEdited.map(r=>`${r.path} (${r.count})`)]),je("Approval And Sandbox",t.approvalFriction.map(r=>`${r.severity}: ${r.title}`))),e.append(s),Ut.replaceChildren(e)}function Yo(){let t=zt(),n=VR(t).filter(v=>v.path!==t.sessionPath);(!Wn||Wn===t.sessionPath||!n.some(v=>v.path===Wn))&&(Wn=n[0]?.path??null),en.textContent=jt?`${jt.toolDelta.calls.left} -> ${jt.toolDelta.calls.right} tools / ${jt.errorDelta.errors.left} -> ${jt.errorDelta.errors.right} errors`:"Select Run B to compare";let i=document.createDocumentFragment(),s=je("Compare Sessions"),r=document.createElement("div");r.className="mode-control-row";let o=document.createElement("div");o.className="mode-field",o.append(Ug("Run A"),OR(t.sessionPath));let a=document.createElement("div");a.className="mode-field",a.append(Ug("Run B"));let l=document.createElement("select");l.className="mode-select",l.setAttribute("aria-label","Run B session"),n.forEach(v=>{let m=document.createElement("option");m.value=v.path,m.textContent=k0(v),m.title=v.path,l.append(m)}),l.value=Wn??"",l.disabled=n.length===0;let c=()=>{Wn=Bg(l),jt=null,Ai=null,en.textContent="Select Run B to compare"};l.addEventListener("change",()=>{c(),kg()}),l.addEventListener("input",c);let u=ut("Compare",()=>{Wn=Bg(l),kg()});if(u.disabled=n.length===0,a.append(l,u),r.append(o,a),s.append(r),i.append(s),n.length===0){i.append(_n("No other sessions are available to compare with this run.")),Ut.replaceChildren(i);return}if(hd){i.append(_n("Comparing normalized traces...")),Ut.replaceChildren(i);return}if(Ai&&i.append(_n(Ai)),!jt){i.append(_n("Choose a second session and compare. Diff results are redacted by default.")),Ut.replaceChildren(i);return}let d=jt,h=document.createElement("div");h.className="mode-actions",h.append(ut("Copy Summary",()=>ls(GR(d),"Diff summary copied")),ut("Export JSON",()=>Yc("perlustron-diff.json",JSON.stringify(d,null,2),"application/json")),ut("Export HTML",()=>Yc("perlustron-diff.html",qR(d),"text/html"))),i.append(h);let f=document.createElement("div");f.className="mode-card-grid",f.append(je("Overview",[`Sources: ${d.leftSummary.source} -> ${d.rightSummary.source}`,`Session IDs: ${d.leftSummary.sessionId||"unknown"} -> ${d.rightSummary.sessionId||"unknown"}`,`Models: ${d.leftSummary.model||"unknown"} -> ${d.rightSummary.model||"unknown"}`,`Events: ${d.leftSummary.renderableEventCount} -> ${d.rightSummary.renderableEventCount}`,`Duration: ${d.leftSummary.loggedDuration} / ${d.rightSummary.loggedDuration}`]),je("Parser Health Delta",[`Parsed: ${d.leftSummary.parsedEventCount} -> ${d.rightSummary.parsedEventCount}`,`Renderable: ${d.leftSummary.renderableEventCount} -> ${d.rightSummary.renderableEventCount}`,`Unknown: ${gn(d.parserHealthDelta.unknownEvents)}`,`Malformed: ${gn(d.parserHealthDelta.malformedLines)}`,`Skipped payloads: ${gn(d.parserHealthDelta.skippedLargePayloads)}`]),je("Tool Delta",[`Calls: ${gn(d.toolDelta.calls)}`,`Results: ${gn(d.toolDelta.results)}`,`Missing results: ${gn(d.toolDelta.missingResults)}`,`Only A: ${$c(d.toolDelta.onlyLeftTools,6)}`,`Only B: ${$c(d.toolDelta.onlyRightTools,6)}`]),je("File Delta",[`Only A: ${d.fileDelta.onlyLeft.length}`,`Only B: ${d.fileDelta.onlyRight.length}`,`Both: ${d.fileDelta.both.length}`,...d.fileDelta.onlyLeft.slice(0,4).map(v=>`A: ${v}`),...d.fileDelta.onlyRight.slice(0,4).map(v=>`B: ${v}`)]),je("Error And Failure Delta",[`Error-like events: ${gn(d.errorDelta.errors)}`,`First A: ${d.errorDelta.leftFirstError||"none"}`,`First B: ${d.errorDelta.rightFirstError||"none"}`,`Repeated patterns: ${d.repeatedPatternDelta.leftCount} -> ${d.repeatedPatternDelta.rightCount}`]),je("Token And Context Delta",[`Telemetry: ${d.tokenDelta.leftAvailable?"A yes":"A no"} / ${d.tokenDelta.rightAvailable?"B yes":"B no"}`,`Latest tokens: ${d.tokenDelta.leftLatestTotalTokens??"n/a"} -> ${d.tokenDelta.rightLatestTotalTokens??"n/a"}`,`Context percent: ${br(d.tokenDelta.leftContextPercent)} -> ${br(d.tokenDelta.rightContextPercent)}`,`Compactions: ${gn(d.compactionDelta)}`])),i.append(f);let g=je("Divergence");g.append(BR(d)),i.append(g),d.warnings.length&&i.append(je("Warnings",d.warnings)),Ut.replaceChildren(i)}function sf(){let t=zt();en.textContent=ft?"Selected event":"Session graph";let e=jc??(ft?Nt.get(ft)?.source:t);qx(e??t.totals)}function FR(){let t=zt();en.textContent="Redacted reports";let e=document.createElement("div");e.className="mode-card-grid",e.append(je("Reports",[`perlustron export ${t.sessionPath} --format html --redacted -o report.html`,`perlustron export ${t.sessionPath} --format markdown --redacted -o report.md`,`perlustron export ${t.sessionPath} --format json -o normalized-trace.json`]),je("Schema Drift",[`perlustron unknowns ${t.sessionPath} --redacted -o unknowns-redacted.json`,`perlustron fixture-report ${t.sessionPath} --redacted -o fixture-report.md`])),Ut.replaceChildren(e)}function DR(){let t=zt();en.textContent="Local observatory settings";let e=document.createElement("div");e.className="mode-card-grid",e.append(je("Session",[`Source: ${Ti(t.source)}`,`Session: ${Nn?qn(Nn):qn(t.sessionPath)||"latest"}`,`Live updates: ${wn?ws?"SSE stream":"fallback polling":"paused"}`]),je("Renderer",["Three.js instancing",`Mode panel: ${bt==="settings"?"visible":"hidden"}`]),je("Backend",["Rust Axum JSONL parser",`Parser: ${t.parserHealth.parserVersion} / ${t.parserHealth.schemaVersion}`,`API token required: ${t.privacySummary.apiTokenRequired?"yes":"no"}`])),Ut.replaceChildren(e)}function je(t,e=[]){let n=document.createElement("section");n.className="mode-card";let i=document.createElement("h3");if(i.textContent=t,n.append(i),e.length){let s=document.createElement("ul");e.forEach(r=>{let o=document.createElement("li");o.textContent=r,s.append(o)}),n.append(s)}return n}function aa(t){let e=document.createElement("p");return e.textContent=t,e}function _n(t){let e=document.createElement("p");return e.className="mode-empty",e.textContent=t,e}function ut(t,e){let n=document.createElement("button");return n.type="button",n.className="mode-action-button",n.textContent=t,n.addEventListener("click",()=>{e()}),n}function Ug(t){let e=document.createElement("span");return e.className="mode-small-label",e.textContent=t,e}function OR(t){let e=document.createElement("code");return e.textContent=t,e}function UR(t){if(!t.inspectionQueue.length)return _n("No high-priority findings detected. Parser health and raw inspection remain available.");let e=document.createElement("div");return e.className="mode-linked-list",t.inspectionQueue.forEach((n,i)=>{let s=document.createElement("article");s.className=`mode-linked-row severity-${n.severity}`;let r=document.createElement("div"),o=document.createElement("strong");o.textContent=`${i+1}. ${n.title}`;let a=document.createElement("small");a.textContent=`${n.summary} - ${n.confidence} - ${n.directness}`;let l=document.createElement("p");l.textContent=n.explanation,r.append(o,a,l);let c=document.createElement("div");c.className="mode-row-actions";let u=n.lineNumbers[0];c.append(ut("Open Raw",()=>cu(u,n.title,n)),ut("Copy Ref",()=>ls(`line ${u??"n/a"} - ${n.redactionSafeSummary}`,"Line reference copied"))),s.append(r,c),e.append(s)}),e}function BR(t){let e=document.createElement("div");return e.className="mode-linked-list",Qx(t).forEach(i=>{let s=document.createElement("article");s.className="mode-linked-row";let r=document.createElement("div"),o=document.createElement("strong");o.textContent=i.kind.replaceAll("_"," ");let a=document.createElement("small");a.textContent=`${i.confidence} - A line ${i.leftLine??"n/a"} - B line ${i.rightLine??"n/a"}`;let l=document.createElement("p");l.textContent=i.summary,r.append(o,a,l);let c=document.createElement("div");c.className="mode-row-actions",c.append(ut("Open A",()=>cu(i.leftLine,i.kind,i)),ut("Copy Ref",()=>ls(`${i.kind}: A line ${i.leftLine??"n/a"}, B line ${i.rightLine??"n/a"}`,"Divergence reference copied"))),s.append(r,c),e.append(s)}),e}function kR(t){let e=document.createElement("div");e.className="mode-linked-list";let n=[...(t.unknownEvents||[]).map(i=>({title:`Unknown ${i.sourceEventType}`,detail:i.preview,lineNumber:i.lineNumber,payload:i})),...(t.malformedLines||[]).map(i=>({title:"Malformed JSONL",detail:i.error,lineNumber:i.lineNumber,payload:i}))].slice(0,12);return n.length?(n.forEach(i=>{let s=document.createElement("article");s.className="mode-linked-row";let r=document.createElement("div"),o=document.createElement("strong");o.textContent=i.title;let a=document.createElement("small");a.textContent=`line ${i.lineNumber} - ${i.detail}`,r.append(o,a);let l=document.createElement("div");l.className="mode-row-actions",l.append(ut("Open Raw",()=>cu(i.lineNumber,i.title,i.payload))),s.append(r,l),e.append(s)}),e):_n("No unknown or malformed samples captured.")}function VR(t){let e=$n.filter(i=>i.source===t.source),n=e.find(i=>i.path===t.sessionPath);return n?[n,...e.filter(i=>i.path!==t.sessionPath)]:[{source:t.source,path:t.sessionPath,label:"Current session",detail:t.sessionId||"loaded",lastModifiedAt:t.lastModifiedAt,byteLength:t.byteLength,isLive:t.isLive,explicit:!0},...e]}function Bg(t){return t.selectedOptions.item(0)?.value||t.value||null}async function kg(){if(!Wn){Ai="Select a Run B session first.",jt=null,Yo();return}let t=zt().sessionPath,e=Wn;if(e===t){Ai="Run A and Run B must be different sessions.",jt=null,Yo();return}let n=++hg,i=()=>n===hg&&zt().sessionPath===t&&Wn===e;jt=null,hd=!0,Ai=null,Yo();try{let s=await iC(e);if(!i())return;jt=s}catch(s){if(!i())return;jt=null,Ai=Ds(s)}finally{i()&&(hd=!1,Yo())}}async function lu(t=!1){return!t&&xn?xn:!t&&Cs?null:Wo||(xn=null,Cs=null,dd=!0,Wo=sC().then(e=>(xn=e,e)).catch(e=>(Cs=Ds(e),null)).finally(()=>{dd=!1,Wo=null,bt==="health"&&jx()}),Wo)}function rf(t,e,n){let i=`${n} Insights remains available and Raw is updated with the selected evidence payload.`;rs(e),en.textContent="Evidence fallback";let s=je("Evidence Fallback",[i]);s.classList.add("mode-notice");let r=document.createElement("div");if(r.className="mode-row-actions",r.append(ut("Open Insights",()=>{Qt("insights"),rs(e)}),ut("Audit Raw",()=>{Qt("raw"),rf(t,e,n)})),s.append(r),bt==="raw"){qx(e??{},s);return}ef(),Ut.prepend(s)}function cu(t,e,n,i="raw"){if(t){let r=au().find(o=>o.lineNumber===t);if(r){Kx(r),r.node?ou(i):i!=="map"&&(Qt(i),rs(r.source));return}}i!=="map"&&Qt(i);let s=t?`Line ${t} is logged for ${e}, but no rendered Timeline or Transcript row is available.`:"No event line is logged for this insight or evidence reference; showing fallback payload instead.";rf(e,n,s)}function zR(t){let e=t.parserHealth;return[`Perlustron parser health for ${qn(t.sessionPath)}`,`Parser: ${tu(e)}`,`Source: ${e.source} (${e.sourceDetectionConfidence})`,`Lines: ${e.totalLinesRead}`,`Parsed/renderable: ${e.parsedEventCount}/${e.renderableEventCount}`,...oa(Ud(e,In,"Skipped large payloads"))].join(`
`)}function HR(t){let e=["Perlustron insights","What should I inspect first?"];return t.inspectionQueue.length?t.inspectionQueue.forEach((n,i)=>{e.push(`${i+1}. [${n.severity}] ${n.title}: ${n.redactionSafeSummary||n.summary}`)}):e.push("- No high-priority findings detected."),e.push(`Repeated patterns: ${t.repeatedPatterns.length}`),e.push(`Suspicious tool calls: ${t.suspiciousToolCalls.length}`),e.push(`Approval/sandbox friction: ${t.approvalFriction.length}`),e.join(`
`)}function GR(t){return["Perlustron redacted diff summary",`A: ${qn(t.metadata.leftPath)} (${t.metadata.leftSource})`,`B: ${qn(t.metadata.rightPath)} (${t.metadata.rightSource})`,`Events: ${t.leftSummary.renderableEventCount} -> ${t.rightSummary.renderableEventCount}`,`Tools: ${t.toolDelta.calls.left} -> ${t.toolDelta.calls.right}`,`Errors: ${t.errorDelta.errors.left} -> ${t.errorDelta.errors.right}`,`Files: ${t.fileDelta.leftCount} -> ${t.fileDelta.rightCount}`,`First likely divergence: ${t.divergence.summary} (${t.divergence.confidence})`].join(`
`)}function $c(t,e){if(!t.length)return"none";let n=t.slice(0,e).join(", ");return t.length>e?`${n} ... +${t.length-e}`:n}async function WR(){let t=xn??await lu(!0);t&&Yc("perlustron-unknowns-redacted.json",JSON.stringify(t,null,2),"application/json")}async function XR(){let t=xn??await lu(!0);t&&ls(t.suggestedGithubIssue,"Schema-drift issue body copied")}async function $R(){let t=xn??await lu(!0);t&&Yc("perlustron-fixture-report.md",YR(t),"text/markdown")}function Qx(t){return t.divergence.clusters.length?t.divergence.clusters:[{kind:t.divergence.kind,confidence:t.divergence.confidence,summary:t.divergence.summary,explanation:t.divergence.explanation,leftLine:t.divergence.leftLine,rightLine:t.divergence.rightLine,leftEventId:t.divergence.leftEventId,rightEventId:t.divergence.rightEventId,leftSignature:t.divergence.leftSignature,rightSignature:t.divergence.rightSignature}]}function YR(t){let e=t.redactedSamples.slice(0,12).map(n=>`### Line ${n.lineNumber} ${n.sourceEventType}

Shape hash: \`${n.shapeHash}\`

\`\`\`json
${n.redactedPreview}
\`\`\``).join(`

`);return["# Perlustron Fixture Report","","This report avoids raw private log content.","","## Parser Health","",`- Perlustron version: \`${t.parserVersion}\``,`- Trace schema: \`${t.traceSchemaVersion}\``,`- Source guess: \`${t.sourceGuess}\``,`- Unknown events: \`${t.unknownEventCount}\``,`- Malformed lines: \`${t.malformedLineCount}\``,`- Suggested fixture: \`${t.suggestedFixtureName}\``,"","## Redacted Samples","",e||"No unknown or malformed samples captured.","","## Safe Contribution Checklist","","- Do not attach raw private Codex or Claude logs.","- Prefer synthetic data.","- Review prompts, paths, command output, images, and tool results before sharing."].join(`
`)}function qR(t){let e=Qx(t).map(n=>`<tr><td>${ai(n.kind)}</td><td>${ai(n.confidence)}</td><td>${n.leftLine??"n/a"}</td><td>${n.rightLine??"n/a"}</td><td>${ai(n.summary)}</td></tr>`).join("");return`<!doctype html><meta charset="utf-8"><title>Perlustron Diff Report</title><style>body{font-family:system-ui,sans-serif;margin:32px;color:#182125;line-height:1.45}table{border-collapse:collapse;width:100%;margin:16px 0}td,th{border:1px solid #d7dee2;padding:6px 8px;text-align:left}code{background:#f4f6f7;padding:2px 4px}.redacted{color:#7a1f1f;font-weight:700}</style><h1>Perlustron Session Diff</h1><p class="redacted">Redacted diff. Review before sharing.</p><h2>Overview</h2><table><tr><td>A</td><td>${ai(t.metadata.leftPath)}</td></tr><tr><td>B</td><td>${ai(t.metadata.rightPath)}</td></tr><tr><td>Events</td><td>${t.leftSummary.renderableEventCount} -> ${t.rightSummary.renderableEventCount}</td></tr><tr><td>Tools</td><td>${gn(t.toolDelta.calls)}</td></tr><tr><td>Errors</td><td>${gn(t.errorDelta.errors)}</td></tr></table><h2>Parser Health</h2><table><tr><td>Unknown</td><td>${gn(t.parserHealthDelta.unknownEvents)}</td></tr><tr><td>Malformed</td><td>${gn(t.parserHealthDelta.malformedLines)}</td></tr></table><h2>Files</h2><table><tr><td>Only A</td><td>${ai($c(t.fileDelta.onlyLeft,20))}</td></tr><tr><td>Only B</td><td>${ai($c(t.fileDelta.onlyRight,20))}</td></tr></table><h2>Divergence</h2><table><thead><tr><th>Kind</th><th>Confidence</th><th>A line</th><th>B line</th><th>Summary</th></tr></thead><tbody>${e}</tbody></table><h2>Redaction</h2><p>Profile: ${ai(t.metadata.redactionProfile||"strict")}. Raw prompts, command output, sensitive paths, and tool outputs are not intentionally included.</p>`}function Yc(t,e,n){let i=new Blob([e],{type:n}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=t,r.click(),window.setTimeout(()=>URL.revokeObjectURL(s),0)}function ls(t,e="Copied"){navigator.clipboard.writeText(t).then(()=>Ci("COPY",e,t)).catch(n=>Ci("COPY","Copy failed",Ds(n)))}function e_(t){return/\b(error|failed|failure|exception|panic|denied|permission|timeout|traceback|not found|exit code|fatal|forbidden|sandbox)\b/i.test(t)}function Qt(t){if(bt=t,ca(),Wx(),jd(),t!=="map"&&ru(),t==="map"){Dd(),qc({preserveCamera:!0}),ha();return}if(da(),t!=="summary"&&t!=="timeline"&&t!=="transcript"){if(t==="health"){Ci("HEALTH","Parser health",ZR());return}if(t==="insights"){Ci("INSIGHTS","Debugging insights",KR());return}if(t!=="raw"){if(t==="diff"){qc({preserveCamera:!0});return}t!=="settings"&&Ci("EXPORT","Export reports",JR())}}}function Vg(){bt!=="transcript"&&da()}function ZR(){return be?SC(be.parserHealth).join(`
`):"Waiting for session data."}function KR(){let t=be?.insights;if(!be||!t)return"Waiting for session insights.";let e=["Insights are heuristics over logged events only. Hidden or unlogged reasoning cannot be recovered."];return t.failureChain?(e.push(`First logged error-like event: line ${t.failureChain.firstLoggedError.lineNumber} - ${t.failureChain.firstLoggedError.title}`),e.push(`Final logged outcome: ${t.failureChain.finalOutcome}`)):e.push("First logged error-like event: none detected"),e.push(`Repeated patterns: ${t.repeatedPatterns.length}`),t.repeatedPatterns.forEach(n=>{e.push(`  ${n.patternType} x${n.count} lines ${n.firstLine}-${n.lastLine}: ${n.key}`)}),e.push(`Suspicious tool calls: ${t.suspiciousToolCalls.length}`),t.suspiciousToolCalls.forEach(n=>{e.push(`  line ${n.call.lineNumber} ${n.toolName}: ${n.reason}`)}),e.push(`Context pressure: ${t.contextPressure.status}`),e.push(`File impact: ${t.fileImpact.filesEdited.length} edited, ${t.fileImpact.filesRead.length} read, ${t.fileImpact.filesReferenced.length} referenced`),e.push(`Approval/sandbox friction: ${t.approvalFriction.length}`),e.join(`
`)}function JR(){return be?["Export redacted reports from the CLI:",`perlustron export ${be.sessionPath} --format html --redacted -o report.html`,`perlustron export ${be.sessionPath} --format markdown --redacted -o report.md`,`perlustron export ${be.sessionPath} --format json -o normalized-trace.json`,"","Redacted exports are best-effort sharing aids. Review before sending."].join(`
`):"Waiting for session data."}function jR(){return["/ search","n next event","N previous event","m map","l timeline","t transcript","h health","i insights","r raw","e export","Esc close inspection"].join(`
`)}function t_(t){if(!t?.latestTotalTokens)return"no token telemetry";let e=t.latestContextPercent===null?"n/a":`${Math.round(t.latestContextPercent)}%`,n=t.contextWindow?` / ${Fe(t.contextWindow)}`:"";return`${Fe(t.latestTotalTokens)}${n} tokens (${e})`}function zg(t,e=Nt.get(t)){nt=t,_t="inspect",as(),zr(e)}function qc({preserveCamera:t=!1}={}){_t==="inspect"&&(_t="overview",as({preserveCamera:t}))}function QR(){Xx(),Wx(),jd(),ca(),x0.forEach(t=>{t.addEventListener("click",()=>{Qt(ed(Gg,t.dataset.appMode,"map"))})}),_0.forEach(t=>{t.addEventListener("click",()=>{cR(t.dataset.source)})}),li.addEventListener("change",()=>{rC(li.value)}),SA.addEventListener("click",()=>{wn=!wn,wn&&Dd(),ss(),wn?uu():hu()}),es.addEventListener("input",()=>{Ps=es.value.trim().toLowerCase(),vn(),Vg()}),es.addEventListener("keydown",t=>{t.key==="Escape"&&(es.value="",Ps="",vn(),Vg())}),[Pc,Lc,Fc,Dc,u0,h0,d0,f0,p0].forEach(t=>{t.addEventListener("change",da)}),document.addEventListener("keydown",nI),document.addEventListener("keyup",iI),document.addEventListener("keydown",eI),document.addEventListener("visibilitychange",lI),window.addEventListener("blur",r_),m0.forEach(t=>{t.addEventListener("click",()=>{let e=ed(tA,t.dataset.viewAction,"two-d");e==="zoom-in"?yd(1):e==="zoom-out"?yd(-1):e==="overview"?(qc(),Mx("three-d")):aw()})}),r0.addEventListener("click",()=>Zc(-1)),o0.addEventListener("click",()=>Zc(1)),g0.forEach(t=>{t.addEventListener("click",()=>{mI(ed(Wg,t.dataset.metric,"error"))})}),rd.addEventListener("click",()=>{Qt("settings")})}function eI(t){if(t.key==="/"&&!Rs(t.target)){t.preventDefault(),es.focus(),es.select();return}if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="k"){t.preventDefault(),es.focus(),es.select();return}if(!Rs(t.target)){let e=tI(t.key);if(e){t.preventDefault(),Qt(e);return}if(t.key==="n"){t.preventDefault(),Zc(1);return}if(t.key==="N"){t.preventDefault(),Zc(-1);return}if(t.key==="?"){t.preventDefault(),Ci("SHORTCUTS","Keyboard shortcuts",jR());return}}t.key!=="Escape"||_t!=="inspect"||Rs(t.target)||(t.preventDefault(),qc(),ha())}function tI(t){switch(t){case"m":return"map";case"l":return"timeline";case"t":return"transcript";case"h":return"health";case"i":return"insights";case"r":return"raw";case"e":return"export";default:return null}}function nI(t){sI(t)&&(Cn.add(t.code),t.preventDefault())}function iI(t){if(!n_(t.code))return;Cn.delete(t.code)&&t.preventDefault()}function sI(t){let e=i_(t.code);if(e&&(bt!=="map"||cI(t.target)))return!1;let n=e||bt==="map"&&s_();return n_(t.code)&&(!t.ctrlKey||n)&&!t.metaKey&&!t.altKey&&!Rs(t.target)}function n_(t){return rI(t)||i_(t)||HT.has(t)}function rI(t){return VT.has(t)}function i_(t){return t===w0||oI(t)}function oI(t){return zT.has(t)}function aI(){return Cn.has("ShiftLeft")||Cn.has("ShiftRight")}function s_(){return Cn.has("ControlLeft")||Cn.has("ControlRight")}function r_(){Cn.clear()}function lI(){document.hidden&&r_()}function Rs(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLElement&&t.isContentEditable}function cI(t){return t instanceof HTMLElement&&(Rs(t)||!!t.closest("button, select, a[href]"))}function uu(){hu(),wn&&(hI(),!(typeof EventSource>"u")&&(Qi=new EventSource(kr("/api/session/events").toString()),Qi.addEventListener("open",()=>{ws=!0,ss()}),Qi.addEventListener("session-status",t=>{ws=!0,ss();try{H0(JSON.parse(t.data))}catch(e){la(e)}}),Qi.addEventListener("session-error",t=>{la(t.data||"Session stream error")}),Qi.addEventListener("error",()=>{ws=!1,ss(),dI()})))}function hu(){uI(),o_(),fI()}function uI(){Qi&&(Qi.close(),Qi=null),ws=!1}function hI(){o_(),wn&&(xd(),Rc=setInterval(xd,TA))}function o_(){Rc&&(clearInterval(Rc),Rc=null)}function dI(){Rr||(Rr=setTimeout(()=>{Rr=null,!ws&&wn&&xd()},CA))}function fI(){Rr&&(clearTimeout(Rr),Rr=null)}function ss(){let t=!!be?.isLive;yA.classList.toggle("paused",!wn||!t),l0.textContent=wn?t?"LIVE":"STALE":"PAUSED",c0.textContent=wn?t?ws?"Streaming session...":"Watching session...":"Waiting for writes...":"Updates paused"}function Hg(){Pr||(Pr=setTimeout(()=>{Pr=null;let t=performance.now(),e=Ve.filter(n=>Us(n,t));e.length&&(e.forEach(n=>{n.matrixDirty=!0}),vn())},120))}function la(t){console.warn(Ds(t))}function yd(t){if(Math.abs(t)<.001)return;eu();let e=t*pI();We.getWorldDirection(ui),We.position.addScaledVector(ui,e),Qe.target.addScaledVector(ui,e),Qe.update()}function pI(){return Math.min(FT,Math.max(PT,wx()*LT))}function Zc(t){let e=a_();if(!e.length)return;let i=(Math.max(0,e.findIndex(r=>r.id===ft))+t+e.length)%e.length,s=e[i];ft=s.id,nt=s.promptId,zr(s)}function a_(){return(_t==="inspect"&&nt?kd(nt).visibleNodes:Ve).filter(e=>Pn(e)&&(e.type!=="prompt"||e.promptId===nt||_t==="overview")).sort(vx)}function mI(t){Ir=Ir===t?null:t,Jd(g0,e=>e.dataset.metric===Ir),_t==="inspect"?(_t="overview",nt=null,as({preserveCamera:!0})):(xx(),ua(),nu()),vn()}function du(t,e){return e?e==="compaction"?t.type==="compaction":t.type==="compaction"?!1:t.type==="prompt"?(qo.get(t.id)||[]).some(n=>n.id!==t.id&&su(n)&&du(n,e)):t.type==="fileChange"?gI(t.source,e):t.type==="message"?!1:_I(t.source,e):!0}function gI(t,e){if(e==="file")return!0;if(e==="diff"){let n=xI(t).toLowerCase();return Vd(t)!=="add"||n.includes("diff")||n.includes("@@")}return!1}function xI(t){return`${Vd(t)} ${t.path} ${t.preview} ${t.detail}`}function _I(t,e){if(e==="long")return l_(t);if(e==="error"){let n=t.kind.toLowerCase(),i=t.status.toLowerCase();return n==="error"||e_(i)}return e==="file"?sd(t.name,["file","read","write","edit","multiedit","grep","glob","ls","apply_patch"]):e==="diff"?sd(t.name,["diff","apply_patch"]):e==="artifact"?t.kind.toLowerCase()==="artifact"||sd(t.name,["artifact"]):!1}function l_(t){return t.durationMs!==null&&t.durationMs>=Y1}function sd(t,e){let n=t.toLowerCase();return e.some(i=>n===i?!0:new RegExp(`(^|[._:-])${i}([._:-]|$)`).test(n))}function vI(t){return Ps?`${t.kind} ${t.title} ${t.body}`.toLowerCase().includes(Ps):!0}function of(){let t=ft?Nt.get(ft):null;t&&Zd()&&zr(t,{skipStableRender:!0})}function Ci(t,e,n){ft=null,Lr=null,Px(),Vx(),vn(),os.classList.remove("prompt-context"),Cd.textContent=t,Ed(e,"Selection"),Td.textContent="Control surface",Md(new Date().toISOString()),bd.textContent=e,Fs(),Wd(),Lx(n)}function qn(t){if(!t)return"";let e=t.split(/[\\/]/);return e.length<=4?t:`${e.at(-4)}/${e.at(-3)}/${e.at(-2)}/${e.at(-1)}`}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
