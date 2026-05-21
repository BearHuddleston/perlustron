var zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ap=0,ih=1,lp=2;var Co=1,cp=2,mr=3,vi=0,Jt=1,bn=2,si=0,ms=1,wo=2,sh=3,rh=4,up=5;var ki=100,hp=101,dp=102,fp=103,pp=104,mp=200,gp=201,xp=202,_p=203,Xa=204,$a=205,vp=206,yp=207,Sp=208,Mp=209,bp=210,Ep=211,Ap=212,Tp=213,Cp=214,Ya=0,qa=1,Za=2,gs=3,Ka=4,Ja=5,ja=6,Qa=7,oh=0,wp=1,Rp=2,Hn=0,ah=1,lh=2,ch=3,uh=4,hh=5,dh=6,fh=7;var ph=300,Xi=301,_s=302,Cl=303,wl=304,Ro=306,el=1e3,Qn=1001,tl=1002,Vt=1003,Ip=1004;var Io=1005;var Ht=1006,Rl=1007;var $i=1008;var rn=1009,mh=1010,gh=1011,gr=1012,Il=1013,Gn=1014,En=1015,ri=1016,Nl=1017,Pl=1018,xr=1020,xh=35902,_h=35899,vh=1021,yh=1022,An=1023,ti=1026,Yi=1027,Ll=1028,Fl=1029,qi=1030,Dl=1031;var Ol=1033,No=33776,Po=33777,Lo=33778,Fo=33779,Bl=35840,Ul=35841,kl=35842,Vl=35843,zl=36196,Hl=37492,Gl=37496,Wl=37488,Xl=37489,Do=37490,$l=37491,Yl=37808,ql=37809,Zl=37810,Kl=37811,Jl=37812,jl=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,ac=36492,lc=36494,cc=36495,uc=36283,hc=36284,Oo=36285,dc=36286;var to=2300,nl=2301,Wa=2302,Xu=2303,$u=2400,Yu=2401,qu=2402;var Np=3200;var Sh=0,Pp=1,bi="",Kt="srgb",no="srgb-linear",io="linear",tt="srgb";var ps=7680;var Zu=519,Lp=512,Fp=513,Dp=514,fc=515,Op=516,Bp=517,pc=518,Up=519,Ku=35044,Mh=35048;var bh="300 es",Un=2e3,nr=2001;function H_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function G_(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function so(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kp(){let t=so("canvas");return t.style.display="block",t}var If={},ir=null;function Eh(...t){let e="THREE."+t.shift();ir?ir("log",e,...t):console.log(e,...t)}function Vp(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ce(...t){t=Vp(t);let e="THREE."+t.shift();if(ir)ir("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Re(...t){t=Vp(t);let e="THREE."+t.shift();if(ir)ir("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function il(...t){let e=t.join(" ");e in If||(If[e]=!0,Ce(...t))}function zp(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Hp={[Ya]:qa,[Za]:ja,[Ka]:Qa,[gs]:Ja,[qa]:Ya,[ja]:Za,[Qa]:Ka,[Ja]:gs},kn=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=1234567,Qr=Math.PI/180,sr=180/Math.PI;function _r(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function Ah(t,e){return(t%e+e)%e}function W_(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function X_(t,e,n){return t!==e?(n-t)/(e-t):0}function eo(t,e,n){return(1-n)*t+n*e}function $_(t,e,n,i){return eo(t,e,1-Math.exp(-n*i))}function Y_(t,e=1){return e-Math.abs(Ah(t,e*2)-e)}function q_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Z_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function K_(t,e){return t+Math.floor(Math.random()*(e-t+1))}function J_(t,e){return t+Math.random()*(e-t)}function j_(t){return t*(.5-Math.random())}function Q_(t){t!==void 0&&(Nf=t);let e=Nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ev(t){return t*Qr}function tv(t){return t*sr}function nv(t){return(t&t-1)===0&&t!==0}function iv(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function sv(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function rv(t,e,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":t.set(a*h,l*d,l*u,a*c);break;case"YZY":t.set(l*u,a*h,l*d,a*c);break;case"ZXZ":t.set(l*d,l*u,a*h,a*c);break;case"XZX":t.set(a*h,l*g,l*f,a*c);break;case"YXY":t.set(l*f,a*h,l*g,a*c);break;case"ZYZ":t.set(l*g,l*f,a*h,a*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function er(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var vr={DEG2RAD:Qr,RAD2DEG:sr,generateUUID:_r,clamp:Xe,euclideanModulo:Ah,mapLinear:W_,inverseLerp:X_,lerp:eo,damp:$_,pingpong:Y_,smoothstep:q_,smootherstep:Z_,randInt:K_,randFloat:J_,randFloatSpread:j_,seededRandom:Q_,degToRad:ev,radToDeg:tv,isPowerOfTwo:nv,ceilPowerOfTwo:iv,floorPowerOfTwo:sv,setQuaternionFromProperEuler:rv,normalize:Zt,denormalize:er},we=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dn=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);p=Math.sin(p*y)/M,a=Math.sin(a*y)/M,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+_*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+_*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[n]=a*g+h*d+l*f-c*u,e[n+1]=l*g+h*u+c*d-a*f,e[n+2]=c*g+h*f+a*u-l*d,e[n+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pf.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mu=new P,Pf=new dn,Le=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],y=s[1],M=s[4],E=s[7],R=s[2],S=s[5],w=s[8];return r[0]=o*_+a*y+l*R,r[3]=o*m+a*M+l*S,r[6]=o*p+a*E+l*w,r[1]=c*_+h*y+d*R,r[4]=c*m+h*M+d*S,r[7]=c*p+h*E+d*w,r[2]=u*_+f*y+g*R,r[5]=u*m+f*M+g*S,r[8]=u*p+f*E+g*w,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=n*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=u*_,e[4]=(h*n-s*l)*_,e[5]=(s*r-a*n)*_,e[6]=f*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(bu.makeScale(e,n)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bu=new Le,Lf=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ff=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ov(){let t={enabled:!0,workingColorSpace:no,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tt&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return il("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return il("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[no]:{primaries:e,whitePoint:i,transfer:io,toXYZ:Lf,fromXYZ:Ff,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Lf,fromXYZ:Ff,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),t}var Ze=ov();function _i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function tr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var zs,sl=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zs===void 0&&(zs=so("canvas")),zs.width=e.width,zs.height=e.height;let s=zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=zs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=so("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_i(n[i]/255)*255):n[i]=_i(n[i]);return{data:n,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},av=0,rr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=_r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Eu(s[o].image)):r.push(Eu(s[o]))}else r=Eu(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function Eu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?sl.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var lv=0,Au=new P,nn=class t extends kn{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Qn,s=Qn,r=Ht,o=$i,a=An,l=rn,c=t.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=_r(),this.name="",this.source=new rr(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Au).x}get height(){return this.source.getSize(Au).y}get depth(){return this.source.getSize(Au).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Ce(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ce(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case el:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case el:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=ph;nn.DEFAULT_ANISOTROPY=1;var St=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let M=(c+1)/2,E=(f+1)/2,R=(p+1)/2,S=(h+u)/4,w=(d+_)/4,x=(g+m)/4;return M>E&&M>R?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=S/i,r=w/i):E>R?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=S/s,r=x/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=w/r,s=x/r),this.set(i,s,r,n),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rl=class extends kn{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n),this.textures=[];let s={width:e,height:n,depth:i.depth},r=new nn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let n={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new rr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends rl{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},ro=class extends nn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ol=class extends nn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var at=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,i,s,r,o,a,l,c,h,d,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,h,d,u,f,g,_,m)}set(e,n,i,s,r,o,a,l,c,h,d,u,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let n=this.elements,i=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,_=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=f+g*c,n[5]=u-_*c,n[9]=-a*l,n[2]=_-u*c,n[6]=g+f*c,n[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;n[0]=u+_*a,n[4]=g*a-f,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=f*a-g,n[6]=_+u*a,n[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;n[0]=u-_*a,n[4]=-o*d,n[8]=g+f*a,n[1]=f+g*a,n[5]=o*h,n[9]=_-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,_=a*d;n[0]=l*h,n[4]=g*c-f,n[8]=u*c+_,n[1]=l*d,n[5]=_*c+u,n[9]=f*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,_=a*c;n[0]=l*h,n[4]=_-u*d,n[8]=g*d+f,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=f*d+g,n[10]=u-_*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,_=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+_,n[5]=o*h,n[9]=f*d-g,n[2]=g*d-f,n[6]=a*h,n[10]=_*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cv,e,uv)}lookAt(e,n,i){let s=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Pi.crossVectors(i,un),Pi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Pi.crossVectors(i,un)),Pi.normalize(),va.crossVectors(un,Pi),s[0]=Pi.x,s[4]=va.x,s[8]=un.x,s[1]=Pi.y,s[5]=va.y,s[9]=un.y,s[2]=Pi.z,s[6]=va.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],M=i[7],E=i[11],R=i[15],S=s[0],w=s[4],x=s[8],T=s[12],N=s[1],I=s[5],D=s[9],k=s[13],z=s[2],A=s[6],F=s[10],L=s[14],X=s[3],Y=s[7],ee=s[11],se=s[15];return r[0]=o*S+a*N+l*z+c*X,r[4]=o*w+a*I+l*A+c*Y,r[8]=o*x+a*D+l*F+c*ee,r[12]=o*T+a*k+l*L+c*se,r[1]=h*S+d*N+u*z+f*X,r[5]=h*w+d*I+u*A+f*Y,r[9]=h*x+d*D+u*F+f*ee,r[13]=h*T+d*k+u*L+f*se,r[2]=g*S+_*N+m*z+p*X,r[6]=g*w+_*I+m*A+p*Y,r[10]=g*x+_*D+m*F+p*ee,r[14]=g*T+_*k+m*L+p*se,r[3]=y*S+M*N+E*z+R*X,r[7]=y*w+M*I+E*A+R*Y,r[11]=y*x+M*D+E*F+R*ee,r[15]=y*T+M*k+E*L+R*se,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*f-c*u,M=a*f-c*d,E=a*u-l*d,R=o*f-c*h,S=o*u-l*h,w=o*d-a*h;return n*(_*y-m*M+p*E)-i*(g*y-m*R+p*S)+s*(g*M-_*R+p*w)-r*(g*E-_*S+m*w)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=n*a-i*o,M=n*l-s*o,E=n*c-r*o,R=i*l-s*a,S=i*c-r*a,w=s*c-r*l,x=h*_-d*g,T=h*m-u*g,N=h*p-f*g,I=d*m-u*_,D=d*p-f*_,k=u*p-f*m,z=y*k-M*D+E*I+R*N-S*T+w*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/z;return e[0]=(a*k-l*D+c*I)*A,e[1]=(s*D-i*k-r*I)*A,e[2]=(_*w-m*S+p*R)*A,e[3]=(u*S-d*w-f*R)*A,e[4]=(l*N-o*k-c*T)*A,e[5]=(n*k-s*N+r*T)*A,e[6]=(m*E-g*w-p*M)*A,e[7]=(h*w-u*E+f*M)*A,e[8]=(o*D-a*N+c*x)*A,e[9]=(i*N-n*D-r*x)*A,e[10]=(g*S-_*E+p*y)*A,e[11]=(d*E-h*S-f*y)*A,e[12]=(a*T-o*I-l*x)*A,e[13]=(n*I-i*T+s*x)*A,e[14]=(_*M-g*R-m*y)*A,e[15]=(h*R-d*M+u*y)*A,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,_=o*h,m=o*d,p=a*d,y=l*c,M=l*h,E=l*d,R=i.x,S=i.y,w=i.z;return s[0]=(1-(_+p))*R,s[1]=(f+E)*R,s[2]=(g-M)*R,s[3]=0,s[4]=(f-E)*S,s[5]=(1-(u+p))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+M)*w,s[9]=(m-y)*w,s[10]=(1-(u+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Hs.set(s[0],s[1],s[2]).length(),a=Hs.set(s[4],s[5],s[6]).length(),l=Hs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Dn.copy(this);let c=1/o,h=1/a,d=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,n.setFromRotationMatrix(Dn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=Un,l=!1){let c=this.elements,h=2*r/(n-e),d=2*r/(i-s),u=(n+e)/(n-e),f=(i+s)/(i-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Un)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===nr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Un,l=!1){let c=this.elements,h=2/(n-e),d=2/(i-s),u=-(n+e)/(n-e),f=-(i+s)/(i-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Un)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===nr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Hs=new P,Dn=new at,cv=new P(0,0,0),uv=new P(1,1,1),Pi=new P,va=new P,un=new P,Df=new at,Of=new dn,ni=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Df,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Of.setFromEuler(this),this.setFromQuaternion(Of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hv=0,Bf=new P,Gs=new dn,fi=new at,ya=new P,$r=new P,dv=new P,fv=new dn,Uf=new P(1,0,0),kf=new P(0,1,0),Vf=new P(0,0,1),zf={type:"added"},pv={type:"removed"},Ws={type:"childadded",child:null},Tu={type:"childremoved",child:null},Rt=class t extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new P,n=new ni,i=new dn,s=new P(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Le}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Uf,e)}rotateY(e){return this.rotateOnAxis(kf,e)}rotateZ(e){return this.rotateOnAxis(Vf,e)}translateOnAxis(e,n){return Bf.copy(e).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Uf,e)}translateY(e){return this.translateOnAxis(kf,e)}translateZ(e){return this.translateOnAxis(Vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ya.copy(e):ya.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt($r,ya,this.up):fi.lookAt(ya,$r,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(fi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zf),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pv),Tu.child=e,this.dispatchEvent(Tu),Tu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zf),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,dv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new P(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},mv={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function Cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var He=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Ze.workingColorSpace){if(e=Ah(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Cu(o,r,e+1/3),this.g=Cu(o,r,e),this.b=Cu(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,n=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kt){let i=Gp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ze.workingToColorSpace(Xt.copy(this),e),Math.round(Xe(Xt.r*255,0,255))*65536+Math.round(Xe(Xt.g*255,0,255))*256+Math.round(Xe(Xt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Xt.copy(this),n);let i=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Kt){Ze.workingToColorSpace(Xt.copy(this),e);let n=Xt.r,i=Xt.g,s=Xt.b;return e!==Kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(Sa);let i=eo(Li.h,Sa.h,n),s=eo(Li.s,Sa.s,n),r=eo(Li.l,Sa.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new He;He.NAMES=Gp;var oo=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},On=new P,pi=new P,wu=new P,mi=new P,Xs=new P,$s=new P,Hf=new P,Ru=new P,Iu=new P,Nu=new P,Pu=new St,Lu=new St,Fu=new St,Ui=class t{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),On.subVectors(e,n),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){On.subVectors(s,n),pi.subVectors(i,n),wu.subVectors(e,n);let o=On.dot(On),a=On.dot(pi),l=On.dot(wu),c=pi.dot(pi),h=pi.dot(wu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Pu.setScalar(0),Lu.setScalar(0),Fu.setScalar(0),Pu.fromBufferAttribute(e,n),Lu.fromBufferAttribute(e,i),Fu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Pu,r.x),o.addScaledVector(Lu,r.y),o.addScaledVector(Fu,r.z),o}static isFrontFacing(e,n,i,s){return On.subVectors(i,n),pi.subVectors(e,n),On.cross(pi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),On.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,o,a;Xs.subVectors(s,i),$s.subVectors(r,i),Ru.subVectors(e,i);let l=Xs.dot(Ru),c=$s.dot(Ru);if(l<=0&&c<=0)return n.copy(i);Iu.subVectors(e,s);let h=Xs.dot(Iu),d=$s.dot(Iu);if(h>=0&&d<=h)return n.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Xs,o);Nu.subVectors(e,r);let f=Xs.dot(Nu),g=$s.dot(Nu);if(g>=0&&f<=g)return n.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector($s,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Hf.subVectors(r,s),a=(d-h)/(d-h+(f-g)),n.copy(s).addScaledVector(Hf,a);let p=1/(m+_+u);return o=_*p,a=u*p,n.copy(i).addScaledVector(Xs,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ii=class{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ma.copy(i.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),ba.subVectors(this.max,Yr),Ys.subVectors(e.a,Yr),qs.subVectors(e.b,Yr),Zs.subVectors(e.c,Yr),Fi.subVectors(qs,Ys),Di.subVectors(Zs,qs),us.subVectors(Ys,Zs);let n=[0,-Fi.z,Fi.y,0,-Di.z,Di.y,0,-us.z,us.y,Fi.z,0,-Fi.x,Di.z,0,-Di.x,us.z,0,-us.x,-Fi.y,Fi.x,0,-Di.y,Di.x,0,-us.y,us.x,0];return!Du(n,Ys,qs,Zs,ba)||(n=[1,0,0,0,1,0,0,0,1],!Du(n,Ys,qs,Zs,ba))?!1:(Ea.crossVectors(Fi,Di),n=[Ea.x,Ea.y,Ea.z],Du(n,Ys,qs,Zs,ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gi=[new P,new P,new P,new P,new P,new P,new P,new P],Bn=new P,Ma=new ii,Ys=new P,qs=new P,Zs=new P,Fi=new P,Di=new P,us=new P,Yr=new P,ba=new P,Ea=new P,hs=new P;function Du(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){hs.fromArray(t,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=n.dot(hs),h=i.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var wt=new P,Aa=new we,gv=0,kt=class extends kn{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ku,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Aa.fromBufferAttribute(this,n),Aa.applyMatrix3(e),this.setXY(n,Aa.x,Aa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=er(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=er(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=er(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=er(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=er(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ku&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var ao=class extends kt{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var lo=class extends kt{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var lt=class extends kt{constructor(e,n,i){super(new Float32Array(e),n,i)}},xv=new ii,qr=new P,Ou=new P,sn=class{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):xv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);let n=qr.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(Ou)),this.expandByPoint(qr.copy(e.center).sub(Ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_v=0,Mn=new at,Bu=new Rt,Ks=new P,hn=new ii,Zr=new ii,Ut=new P,It=class t extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H_(e)?lo:ao)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Le().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(hn.min,Zr.min),hn.expandByPoint(Ut),Ut.addVectors(hn.max,Zr.max),hn.expandByPoint(Ut)):(hn.expandByPoint(Zr.min),hn.expandByPoint(Zr.max))}hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ut.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(e,c),Ut.add(Ks)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new P,l[x]=new P;let c=new P,h=new P,d=new P,u=new we,f=new we,g=new we,_=new P,m=new P;function p(x,T,N){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,N),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,N),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[x].add(_),a[T].add(_),a[N].add(_),l[x].add(m),l[T].add(m),l[N].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,T=y.length;x<T;++x){let N=y[x],I=N.start,D=N.count;for(let k=I,z=I+D;k<z;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let M=new P,E=new P,R=new P,S=new P;function w(x){R.fromBufferAttribute(s,x),S.copy(R);let T=a[x];M.copy(T),M.sub(R.multiplyScalar(R.dot(T))).normalize(),E.crossVectors(S,T);let I=E.dot(l[x])<0?-1:1;o.setXYZW(x,M.x,M.y,M.z,I)}for(let x=0,T=y.length;x<T;++x){let N=y[x],I=N.start,D=N.count;for(let k=I,z=I+D;k<z;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new kt(u,h,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);n.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vv=0,yi=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=ms,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=$a,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Ce(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ce(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xa&&(i.blendSrc=this.blendSrc),this.blendDst!==$a&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(n){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var xi=new P,Uu=new P,Ta=new P,Oi=new P,ku=new P,Ca=new P,Vu=new P,Si=class{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Uu.copy(e).add(n).multiplyScalar(.5),Ta.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(Uu);let r=e.distanceTo(n)*.5,o=-this.direction.dot(Ta),a=Oi.dot(this.direction),l=-Oi.dot(Ta),c=Oi.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Uu).addScaledVector(Ta,u),f}intersectSphere(e,n){xi.subVectors(e.center,this.origin);let i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,s,r){ku.subVectors(n,e),Ca.subVectors(i,e),Vu.crossVectors(ku,Ca);let o=this.direction.dot(Vu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);let l=a*this.direction.dot(Ca.crossVectors(Oi,Ca));if(l<0)return null;let c=a*this.direction.dot(ku.cross(Oi));if(c<0||l+c>o)return null;let h=-a*Oi.dot(Vu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vn=class extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gf=new at,ds=new Si,wa=new sn,Wf=new P,Ra=new P,Ia=new P,Na=new P,zu=new P,Pa=new P,Xf=new P,La=new P,Yt=class extends Rt{constructor(e=new It,n=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(zu.fromBufferAttribute(d,e),o?Pa.addScaledVector(zu,h):Pa.addScaledVector(zu.sub(n),h))}n.add(Pa)}return n}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(wa.containsPoint(ds.origin)===!1&&(ds.intersectSphere(wa,Wf)===null||ds.origin.distanceToSquared(Wf)>(e.far-e.near)**2))&&(Gf.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Gf),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ds)))}_computeIntersections(e,n,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,R=M;E<R;E+=3){let S=a.getX(E),w=a.getX(E+1),x=a.getX(E+2);s=Fa(this,p,e,i,c,h,d,S,w,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);s=Fa(this,o,e,i,c,h,d,y,M,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,R=M;E<R;E+=3){let S=E,w=E+1,x=E+2;s=Fa(this,p,e,i,c,h,d,S,w,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=m,M=m+1,E=m+2;s=Fa(this,o,e,i,c,h,d,y,M,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function yv(t,e,n,i,s,r,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===vi,a),l===null)return null;La.copy(a),La.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(La);return c<n.near||c>n.far?null:{distance:c,point:La.clone(),object:t}}function Fa(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Ra),t.getVertexPosition(l,Ia),t.getVertexPosition(c,Na);let h=yv(t,e,n,i,Ra,Ia,Na,Xf);if(h){let d=new P;Ui.getBarycoord(Xf,Ra,Ia,Na,d),s&&(h.uv=Ui.getInterpolatedAttribute(s,a,l,c,d,new we)),r&&(h.uv1=Ui.getInterpolatedAttribute(r,a,l,c,d,new we)),o&&(h.normal=Ui.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};Ui.getNormal(Ra,Ia,Na,u.normal),h.face=u,h.barycoord=d}return h}var co=class extends nn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=Vt,h=Vt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uo=class extends kt{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new at,$f=new at,Da=[],Yf=new ii,Sv=new at,Kr=new Yt,Jr=new sn,ho=class extends Yt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new uo(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Sv)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Js),Yf.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(Yf)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Js),Jr.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Jr)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(i),e.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),$f.multiplyMatrices(i,Js),Kr.matrixWorld=$f,Kr.raycast(e,Da);for(let o=0,a=Da.length;o<a;o++){let l=Da[o];l.instanceId=r,l.object=this,n.push(l)}Da.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new uo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new co(new Float32Array(s*this.count),s,this.count,Ll,En));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hu=new P,Mv=new P,bv=new Le,tn=class{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=Hu.subVectors(i,n).cross(Mv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(Hu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||bv.getNormalMatrix(e),s=this.coplanarPoint(Hu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new sn,Ev=new we(.5,.5),Oa=new P,lr=class{constructor(e=new tn,n=new tn,i=new tn,s=new tn,r=new tn,o=new tn){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Un,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],M=r[13],E=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,p-g,R-y).normalize(),s[1].setComponents(c+o,f+h,p+g,R+y).normalize(),s[2].setComponents(c+a,f+d,p+_,R+M).normalize(),s[3].setComponents(c-a,f-d,p-_,R-M).normalize(),i)s[4].setComponents(l,u,m,E).normalize(),s[5].setComponents(c-l,f-u,p-m,R-E).normalize();else if(s[4].setComponents(c-l,f-u,p-m,R-E).normalize(),n===Un)s[5].setComponents(c+l,f+u,p+m,R+E).normalize();else if(n===nr)s[5].setComponents(l,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);let n=Ev.distanceTo(e.center);return fs.radius=.7071067811865476+n,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Oa.x=s.normal.x>0?e.max.x:e.min.x,Oa.y=s.normal.y>0?e.max.y:e.min.y,Oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xs=class extends yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},al=new P,ll=new P,qf=new at,jr=new Si,Ba=new sn,Gu=new P,Zf=new P,cl=class extends Rt{constructor(e=new It,n=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)al.fromBufferAttribute(n,s-1),ll.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=al.distanceTo(ll);e.setAttribute("lineDistance",new lt(i,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;qf.copy(s).invert(),jr.copy(e.ray).applyMatrix4(qf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=h.getX(_),y=h.getX(_+1),M=Ua(this,e,jr,l,p,y,_);M&&n.push(M)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=Ua(this,e,jr,l,_,m,g-1);p&&n.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=Ua(this,e,jr,l,_,_+1,_);p&&n.push(p)}if(this.isLineLoop){let _=Ua(this,e,jr,l,g-1,f,g-1);_&&n.push(_)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ua(t,e,n,i,s,r,o){let a=t.geometry.attributes.position;if(al.fromBufferAttribute(a,s),ll.fromBufferAttribute(a,r),n.distanceSqToSegment(al,ll,Gu,Zf)>i)return;Gu.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Gu);if(!(c<e.near||c>e.far))return{distance:c,point:Zf.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}var Kf=new P,Jf=new P,cr=class extends cl{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Kf.fromBufferAttribute(n,s),Jf.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Kf.distanceTo(Jf);e.setAttribute("lineDistance",new lt(i,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ur=class extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jf=new at,Ju=new Si,ka=new sn,Va=new P,fo=class extends Rt{constructor(e=new It,n=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;jf.copy(s).invert(),Ju.copy(e.ray).applyMatrix4(jf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,_=f;g<_;g++){let m=c.getX(g);Va.fromBufferAttribute(d,m),Qf(Va,m,l,s,e,n,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,_=f;g<_;g++)Va.fromBufferAttribute(d,g),Qf(Va,g,l,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qf(t,e,n,i,s,r,o){let a=Ju.distanceSqToPoint(t);if(a<n){let l=new P;Ju.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var po=class extends nn{constructor(e=[],n=Xi,i,s,r,o,a,l,c,h){super(e,n,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Mi=class extends nn{constructor(e,n,i=Gn,s,r,o,a=Vt,l=Vt,c,h=ti,d=1){if(h!==ti&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:n,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},ul=class extends Mi{constructor(e,n=Gn,i=Xi,s,r,o=Vt,a=Vt,l,c=ti){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},mo=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vi=class t extends It{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2));function g(_,m,p,y,M,E,R,S,w,x,T){let N=E/w,I=R/x,D=E/2,k=R/2,z=S/2,A=w+1,F=x+1,L=0,X=0,Y=new P;for(let ee=0;ee<F;ee++){let se=ee*I-k;for(let xe=0;xe<A;xe++){let ze=xe*N-D;Y[_]=ze*y,Y[m]=se*M,Y[p]=z,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(xe/w),d.push(1-ee/x),L+=1}}for(let ee=0;ee<x;ee++)for(let se=0;se<w;se++){let xe=u+se+A*ee,ze=u+se+A*(ee+1),et=u+(se+1)+A*(ee+1),De=u+(se+1)+A*ee;l.push(xe,ze,De),l.push(ze,et,De),X+=6}a.addGroup(f,X,T),f+=X,u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var go=class t extends It{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,_=[],m=i/2,p=0;y(),o===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new lt(d,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function y(){let E=new P,R=new P,S=0,w=(n-e)/i;for(let x=0;x<=r;x++){let T=[],N=x/r,I=N*(n-e)+e;for(let D=0;D<=s;D++){let k=D/s,z=k*l+a,A=Math.sin(z),F=Math.cos(z);R.x=I*A,R.y=-N*i+m,R.z=I*F,d.push(R.x,R.y,R.z),E.set(A,w,F).normalize(),u.push(E.x,E.y,E.z),f.push(k,1-N),T.push(g++)}_.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let N=_[T][x],I=_[T+1][x],D=_[T+1][x+1],k=_[T][x+1];(e>0||T!==0)&&(h.push(N,I,k),S+=3),(n>0||T!==r-1)&&(h.push(I,D,k),S+=3)}c.addGroup(p,S,0),p+=S}function M(E){let R=g,S=new we,w=new P,x=0,T=E===!0?e:n,N=E===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*N,0),u.push(0,N,0),f.push(.5,.5),g++;let I=g;for(let D=0;D<=s;D++){let z=D/s*l+a,A=Math.cos(z),F=Math.sin(z);w.x=T*F,w.y=m*N,w.z=T*A,d.push(w.x,w.y,w.z),u.push(0,N,0),S.x=A*.5+.5,S.y=F*.5*N+.5,f.push(S.x,S.y),g++}for(let D=0;D<s;D++){let k=R+D,z=I+D;E===!0?h.push(z,z+1,k):h.push(z+1,z,k),x+=3}c.addGroup(p,x,E===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var hl=class t extends It{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new P,E=new P,R=new P;for(let S=0;S<n.length;S+=3)f(n[S+0],M),f(n[S+1],E),f(n[S+2],R),l(M,E,R,y)}function l(y,M,E,R){let S=R+1,w=[];for(let x=0;x<=S;x++){w[x]=[];let T=y.clone().lerp(E,x/S),N=M.clone().lerp(E,x/S),I=S-x;for(let D=0;D<=I;D++)D===0&&x===S?w[x][D]=T:w[x][D]=T.clone().lerp(N,D/I)}for(let x=0;x<S;x++)for(let T=0;T<2*(S-x)-1;T++){let N=Math.floor(T/2);T%2===0?(u(w[x][N+1]),u(w[x+1][N]),u(w[x][N])):(u(w[x][N+1]),u(w[x+1][N+1]),u(w[x+1][N]))}}function c(y){let M=new P;for(let E=0;E<r.length;E+=3)M.x=r[E+0],M.y=r[E+1],M.z=r[E+2],M.normalize().multiplyScalar(y),r[E+0]=M.x,r[E+1]=M.y,r[E+2]=M.z}function h(){let y=new P;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let E=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(E,1-R)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){let M=o[y+0],E=o[y+2],R=o[y+4],S=Math.max(M,E,R),w=Math.min(M,E,R);S>.9&&w<.1&&(M<.2&&(o[y+0]+=1),E<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,M){let E=y*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function g(){let y=new P,M=new P,E=new P,R=new P,S=new we,w=new we,x=new we;for(let T=0,N=0;T<r.length;T+=9,N+=6){y.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),E.set(r[T+6],r[T+7],r[T+8]),S.set(o[N+0],o[N+1]),w.set(o[N+2],o[N+3]),x.set(o[N+4],o[N+5]),R.copy(y).add(M).add(E).divideScalar(3);let I=m(R);_(S,N+0,y,I),_(w,N+2,M,I),_(x,N+4,E,I)}}function _(y,M,E,R){R<0&&y.x===1&&(o[M]=y.x-1),E.x===0&&E.z===0&&(o[M]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}};var xo=class t extends hl{constructor(e=1,n=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},_o=class t extends It{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=n/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*u-o;for(let M=0;M<c;M++){let E=M*d-r;g.push(E,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let M=y+c*p,E=y+c*(p+1),R=y+1+c*(p+1),S=y+1+c*p;f.push(M,E,S),f.push(E,R,S)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},hr=class t extends It{constructor(e=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(n-e)/s,f=new P,g=new we;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/n+1)/2,g.y=(f.y/n+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){let m=_*(i+1);for(let p=0;p<i;p++){let y=p+m,M=y,E=y+i+1,R=y+i+2,S=y+1;a.push(M,E,S),a.push(E,R,S)}}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var vo=class t extends It{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let y=[],M=p/i,E=0;p===0&&o===0?E=.5/n:p===i&&l===Math.PI&&(E=-.5/n);for(let R=0;R<=n;R++){let S=R/n;d.x=-e*Math.cos(s+S*r)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(s+S*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(S+E,1-M),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<n;y++){let M=h[p][y+1],E=h[p][y],R=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&f.push(M,E,S),(p!==i-1||l<Math.PI)&&f.push(E,R,S)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function vs(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(ep(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(ep(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function qt(t){let e={};for(let n=0;n<t.length;n++){let i=vs(t[n]);for(let s in i)e[s]=i[s]}return e}function ep(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Av(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Th(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Wp={clone:vs,merge:qt},Tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tv,this.fragmentShader=Cv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=Av(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},dl=class extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var fl=class extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pl=class extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function za(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var zi=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],e<s)break e}o=n.length;break t}if(!(e>=r)){let a=n[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ml=class extends zi{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$u,endingEnd:$u}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yu:r=e,a=2*n-i;break;case qu:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yu:o=e,l=2*i-n;break;case qu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-n)/(s-n),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,y=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,E=f*m-f*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[c+R]+M*o[l+R]+E*o[d+R];return r}},gl=class extends zi{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-n)/(s-n),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},xl=class extends zi{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_l=class extends zi{interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.settings||this.DefaultSettings_,d=h.inTangents,u=h.outTangents;if(!d||!u){let _=(i-n)/(s-n),m=1-_;for(let p=0;p!==a;++p)r[p]=o[c+p]*m+o[l+p]*_;return r}let f=a*2,g=e-1;for(let _=0;_!==a;++_){let m=o[c+_],p=o[l+_],y=g*f+_*2,M=u[y],E=u[y+1],R=e*f+_*2,S=d[R],w=d[R+1],x=(i-n)/(s-n),T,N,I,D,k;for(let z=0;z<8;z++){T=x*x,N=T*x,I=1-x,D=I*I,k=D*I;let F=k*n+3*D*x*M+3*I*T*S+N*s-i;if(Math.abs(F)<1e-10)break;let L=3*D*(M-n)+6*I*x*(S-M)+3*T*(s-S);if(Math.abs(L)<1e-10)break;x=x-F/L,x=Math.max(0,Math.min(1,x))}r[_]=k*m+3*D*x*E+3*I*T*w+N*p}return r}},mn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=za(n,this.TimeBufferType),this.values=za(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:za(e.times,Array),values:za(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new _l(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.settings=this.settings),n}setInterpolation(e){let n;switch(e){case to:n=this.InterpolantFactoryMethodDiscrete;break;case nl:n=this.InterpolantFactoryMethodLinear;break;case Wa:n=this.InterpolantFactoryMethodSmooth;break;case Xu:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ce("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return nl;case this.InterpolantFactoryMethodSmooth:return Wa;case this.InterpolantFactoryMethodBezier:return Xu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e}return this}trim(e,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Re("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Re("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&G_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Re("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Wa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let _=n[d+g];if(_!==n[u+g]||_!==n[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)n[u+f]=n[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,s}};mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=nl;var Hi=class extends mn{constructor(e,n,i){super(e,n,i)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=to;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends mn{constructor(e,n,i,s){super(e,n,i,s)}};vl.prototype.ValueTypeName="color";var yl=class extends mn{constructor(e,n,i,s){super(e,n,i,s)}};yl.prototype.ValueTypeName="number";var Sl=class extends zi{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(s-n),c=e*a;for(let h=c+a;c!==h;c+=4)dn.slerpFlat(r,0,o,c-a,o,c,l);return r}},yo=class extends mn{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}};yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends mn{constructor(e,n,i){super(e,n,i)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=to;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends mn{constructor(e,n,i,s){super(e,n,i,s)}};Ml.prototype.ValueTypeName="vector";var bl=class{constructor(e,n,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xp=new bl,El=class{constructor(e){this.manager=e!==void 0?e:Xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};El.DEFAULT_MATERIAL_NAME="__DEFAULT";var So=class extends Rt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Mo=class extends So{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){let n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}},Wu=new at,tp=new P,np=new P,ju=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;tp.setFromMatrixPosition(e.matrixWorld),n.position.copy(tp),np.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(np),n.updateMatrixWorld(),Wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===nr||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ha=new P,Ga=new dn,jn=new P,bo=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ha,Ga,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Ga,jn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Ha,Ga,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Ga,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new P,ip=new we,sp=new we,$t=class extends bo{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,ip,sp),n.subVectors(sp,ip)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var dr=class extends bo{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Qu=class extends ju{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Eo=class extends So{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Qu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var js=-90,Qs=1,Al=class extends Rt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(js,Qs,e,n);s.layers=this.layers,this.add(s);let r=new $t(js,Qs,e,n);r.layers=this.layers,this.add(r);let o=new $t(js,Qs,e,n);o.layers=this.layers,this.add(o);let a=new $t(js,Qs,e,n);a.layers=this.layers,this.add(a);let l=new $t(js,Qs,e,n);l.layers=this.layers,this.add(l);let c=new $t(js,Qs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(let c of n)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Tl=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ch="\\[\\]\\.:\\/",wv=new RegExp("["+Ch+"]","g"),wh="[^"+Ch+"]",Rv="[^"+Ch.replace("\\.","")+"]",Iv=/((?:WC+[\/:])*)/.source.replace("WC",wh),Nv=/(WCOD+)?/.source.replace("WCOD",Rv),Pv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),Lv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),Fv=new RegExp("^"+Iv+Nv+Pv+Lv+"$"),Dv=["material","materials","bones","map"],eh=class{constructor(e,n,i){let s=i||xt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},xt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wv,"")}static parseTrackName(e){let n=Fv.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Dv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=n.nodeName;Re("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=eh;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mN=new Float32Array(1);var rp=new at,fr=class{constructor(e,n,i=0,s=1/0){this.ray=new Si(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Re("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return rp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rp),this}intersectObject(e,n=!0,i=[]){return th(e,this,i,n),i.sort(op),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)th(e[s],this,i,n);return i.sort(op),i}};function op(t,e){return t.distance-e.distance}function th(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){let r=t.children;for(let o=0,a=r.length;o<a;o++)th(r[o],e,n,!0)}}var pr=class{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var nh=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};var Ao=class extends cr{constructor(e=10,n=10,i=4473924,s=8947848){i=new He(i),s=new He(s);let r=n/2,o=e/n,a=e/2,l=[],c=[];for(let u=0,f=0,g=-a;u<=n;u++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let _=u===r?i:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new It;h.setAttribute("position",new lt(l,3)),h.setAttribute("color",new lt(c,3));let d=new xs({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var To=class extends kn{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ce("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Rh(t,e,n,i){let s=Ov(i);switch(n){case vh:return t*e;case Ll:return t*e/s.components*s.byteLength;case Fl:return t*e/s.components*s.byteLength;case qi:return t*e*2/s.components*s.byteLength;case Dl:return t*e*2/s.components*s.byteLength;case yh:return t*e*3/s.components*s.byteLength;case An:return t*e*4/s.components*s.byteLength;case Ol:return t*e*4/s.components*s.byteLength;case No:case Po:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Fo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Vl:return Math.max(t,16)*Math.max(e,8)/4;case Bl:case kl:return Math.max(t,8)*Math.max(e,8)/2;case zl:case Hl:case Wl:case Xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Do:case $l:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ac:case lc:case cc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case uc:case hc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Oo:case dc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ov(t){switch(t){case rn:case mh:return{byteLength:1,components:1};case gr:case gh:case ri:return{byteLength:2,components:1};case Nl:case Pl:return{byteLength:2,components:4};case Gn:case Il:case En:return{byteLength:4,components:1};case xh:case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function pm(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Uv(t){let e=new WeakMap;function n(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];t.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var kv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vv=`#ifdef USE_ALPHAHASH
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
#endif`,zv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
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
#endif`,$v=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yv=`#ifdef USE_BATCHING
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
#endif`,qv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jv=`#ifdef USE_IRIDESCENCE
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
#endif`,Qv=`#ifdef USE_BUMPMAP
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
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ly=`#define PI 3.141592653589793
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
} // validated`,cy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uy=`vec3 transformedNormal = objectNormal;
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
#endif`,hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,my="gl_FragColor = linearToOutputTexel( gl_FragColor );",gy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
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
#endif`,yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,by=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ty=`#ifdef USE_GRADIENTMAP
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
}`,Cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oy=`PhysicalMaterial material;
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
#endif`,By=`uniform sampler2D dfgLUT;
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
}`,Uy=`
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
#endif`,ky=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zy=`#if defined( USE_POINTS_UV )
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
#endif`,Ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tS=`#ifdef USE_MORPHTARGETS
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
#endif`,nS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lS=`#ifdef USE_NORMALMAP
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
#endif`,cS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_S=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ES=`float getShadowMask() {
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
}`,AS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TS=`#ifdef USE_SKINNING
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
#endif`,CS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wS=`#ifdef USE_SKINNING
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
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LS=`#ifdef USE_TRANSMISSION
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
#endif`,FS=`#ifdef USE_TRANSMISSION
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
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,US=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VS=`uniform sampler2D t2D;
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`#include <common>
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
}`,$S=`#if DEPTH_PACKING == 3200
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
}`,YS=`#define DISTANCE
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
}`,qS=`#define DISTANCE
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
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`uniform float scale;
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
}`,jS=`uniform vec3 diffuse;
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
}`,QS=`#include <common>
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
}`,eM=`uniform vec3 diffuse;
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
}`,tM=`#define LAMBERT
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
}`,nM=`#define LAMBERT
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
}`,iM=`#define MATCAP
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
}`,sM=`#define MATCAP
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
}`,rM=`#define NORMAL
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
}`,oM=`#define NORMAL
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
}`,aM=`#define PHONG
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
}`,lM=`#define PHONG
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
}`,cM=`#define STANDARD
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
}`,uM=`#define STANDARD
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
}`,hM=`#define TOON
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
}`,dM=`#define TOON
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
}`,fM=`uniform float size;
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#include <common>
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
}`,gM=`uniform vec3 color;
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
}`,xM=`uniform float rotation;
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
}`,_M=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:kv,alphahash_pars_fragment:Vv,alphamap_fragment:zv,alphamap_pars_fragment:Hv,alphatest_fragment:Gv,alphatest_pars_fragment:Wv,aomap_fragment:Xv,aomap_pars_fragment:$v,batching_pars_vertex:Yv,batching_vertex:qv,begin_vertex:Zv,beginnormal_vertex:Kv,bsdfs:Jv,iridescence_fragment:jv,bumpmap_pars_fragment:Qv,clipping_planes_fragment:ey,clipping_planes_pars_fragment:ty,clipping_planes_pars_vertex:ny,clipping_planes_vertex:iy,color_fragment:sy,color_pars_fragment:ry,color_pars_vertex:oy,color_vertex:ay,common:ly,cube_uv_reflection_fragment:cy,defaultnormal_vertex:uy,displacementmap_pars_vertex:hy,displacementmap_vertex:dy,emissivemap_fragment:fy,emissivemap_pars_fragment:py,colorspace_fragment:my,colorspace_pars_fragment:gy,envmap_fragment:xy,envmap_common_pars_fragment:_y,envmap_pars_fragment:vy,envmap_pars_vertex:yy,envmap_physical_pars_fragment:Ny,envmap_vertex:Sy,fog_vertex:My,fog_pars_vertex:by,fog_fragment:Ey,fog_pars_fragment:Ay,gradientmap_pars_fragment:Ty,lightmap_pars_fragment:Cy,lights_lambert_fragment:wy,lights_lambert_pars_fragment:Ry,lights_pars_begin:Iy,lights_toon_fragment:Py,lights_toon_pars_fragment:Ly,lights_phong_fragment:Fy,lights_phong_pars_fragment:Dy,lights_physical_fragment:Oy,lights_physical_pars_fragment:By,lights_fragment_begin:Uy,lights_fragment_maps:ky,lights_fragment_end:Vy,lightprobes_pars_fragment:zy,logdepthbuf_fragment:Hy,logdepthbuf_pars_fragment:Gy,logdepthbuf_pars_vertex:Wy,logdepthbuf_vertex:Xy,map_fragment:$y,map_pars_fragment:Yy,map_particle_fragment:qy,map_particle_pars_fragment:Zy,metalnessmap_fragment:Ky,metalnessmap_pars_fragment:Jy,morphinstance_vertex:jy,morphcolor_vertex:Qy,morphnormal_vertex:eS,morphtarget_pars_vertex:tS,morphtarget_vertex:nS,normal_fragment_begin:iS,normal_fragment_maps:sS,normal_pars_fragment:rS,normal_pars_vertex:oS,normal_vertex:aS,normalmap_pars_fragment:lS,clearcoat_normal_fragment_begin:cS,clearcoat_normal_fragment_maps:uS,clearcoat_pars_fragment:hS,iridescence_pars_fragment:dS,opaque_fragment:fS,packing:pS,premultiplied_alpha_fragment:mS,project_vertex:gS,dithering_fragment:xS,dithering_pars_fragment:_S,roughnessmap_fragment:vS,roughnessmap_pars_fragment:yS,shadowmap_pars_fragment:SS,shadowmap_pars_vertex:MS,shadowmap_vertex:bS,shadowmask_pars_fragment:ES,skinbase_vertex:AS,skinning_pars_vertex:TS,skinning_vertex:CS,skinnormal_vertex:wS,specularmap_fragment:RS,specularmap_pars_fragment:IS,tonemapping_fragment:NS,tonemapping_pars_fragment:PS,transmission_fragment:LS,transmission_pars_fragment:FS,uv_pars_fragment:DS,uv_pars_vertex:OS,uv_vertex:BS,worldpos_vertex:US,background_vert:kS,background_frag:VS,backgroundCube_vert:zS,backgroundCube_frag:HS,cube_vert:GS,cube_frag:WS,depth_vert:XS,depth_frag:$S,distance_vert:YS,distance_frag:qS,equirect_vert:ZS,equirect_frag:KS,linedashed_vert:JS,linedashed_frag:jS,meshbasic_vert:QS,meshbasic_frag:eM,meshlambert_vert:tM,meshlambert_frag:nM,meshmatcap_vert:iM,meshmatcap_frag:sM,meshnormal_vert:rM,meshnormal_frag:oM,meshphong_vert:aM,meshphong_frag:lM,meshphysical_vert:cM,meshphysical_frag:uM,meshtoon_vert:hM,meshtoon_frag:dM,points_vert:fM,points_frag:pM,shadow_vert:mM,shadow_frag:gM,sprite_vert:xM,sprite_frag:_M},he={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},ai={basic:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:qt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:qt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new He(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:qt([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:qt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:qt([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:qt([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:qt([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:qt([he.lights,he.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ai.physical={uniforms:qt([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var mc={r:0,b:0,g:0},vM=new at,mm=new Le;mm.set(-1,0,0,0,1,0,0,0,1);function yM(t,e,n,i,s,r){let o=new He(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let E=y.backgroundBlurriness>0;M=e.get(M,E)}return M}function g(y){let M=!1,E=f(y);E===null?m(o,a):E&&E.isColor&&(m(E,1),M=!0);let R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(y,M){let E=f(M);E&&(E.isCubeTexture||E.mapping===Ro)?(c===void 0&&(c=new Yt(new Vi(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:vs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vM.makeRotationFromEuler(M.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mm),c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==tt,(h!==E||d!==E.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,u=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Yt(new _o(2,2),new pn({name:"BackgroundMaterial",uniforms:vs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(E.colorSpace)!==tt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,u=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(mc,Th(t)),n.buffers.color.setClear(mc.r,mc.g,mc.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:_,dispose:p}}function SM(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(I,D,k,z,A){let F=!1,L=d(I,z,k,D);r!==L&&(r=L,c(r.object)),F=f(I,z,k,A),F&&g(I,z,k,A),A!==null&&e.update(A,t.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,E(I,D,k,z),A!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function d(I,D,k,z){let A=z.wireframe===!0,F=i[D.id];F===void 0&&(F={},i[D.id]=F);let L=I.isInstancedMesh===!0?I.id:0,X=F[L];X===void 0&&(X={},F[L]=X);let Y=X[k.id];Y===void 0&&(Y={},X[k.id]=Y);let ee=Y[A];return ee===void 0&&(ee=u(l()),Y[A]=ee),ee}function u(I){let D=[],k=[],z=[];for(let A=0;A<n;A++)D[A]=0,k[A]=0,z[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:z,object:I,attributes:{},index:null}}function f(I,D,k,z){let A=r.attributes,F=D.attributes,L=0,X=k.getAttributes();for(let Y in X)if(X[Y].location>=0){let se=A[Y],xe=F[Y];if(xe===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor)),se===void 0||se.attribute!==xe||xe&&se.data!==xe.data)return!0;L++}return r.attributesNum!==L||r.index!==z}function g(I,D,k,z){let A={},F=D.attributes,L=0,X=k.getAttributes();for(let Y in X)if(X[Y].location>=0){let se=F[Y];se===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(se=I.instanceColor));let xe={};xe.attribute=se,se&&se.data&&(xe.data=se.data),A[Y]=xe,L++}r.attributes=A,r.attributesNum=L,r.index=z}function _(){let I=r.newAttributes;for(let D=0,k=I.length;D<k;D++)I[D]=0}function m(I){p(I,0)}function p(I,D){let k=r.newAttributes,z=r.enabledAttributes,A=r.attributeDivisors;k[I]=1,z[I]===0&&(t.enableVertexAttribArray(I),z[I]=1),A[I]!==D&&(t.vertexAttribDivisor(I,D),A[I]=D)}function y(){let I=r.newAttributes,D=r.enabledAttributes;for(let k=0,z=D.length;k<z;k++)D[k]!==I[k]&&(t.disableVertexAttribArray(k),D[k]=0)}function M(I,D,k,z,A,F,L){L===!0?t.vertexAttribIPointer(I,D,k,A,F):t.vertexAttribPointer(I,D,k,z,A,F)}function E(I,D,k,z){_();let A=z.attributes,F=k.getAttributes(),L=D.defaultAttributeValues;for(let X in F){let Y=F[X];if(Y.location>=0){let ee=A[X];if(ee===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){let se=ee.normalized,xe=ee.itemSize,ze=e.get(ee);if(ze===void 0)continue;let et=ze.buffer,De=ze.type,J=ze.bytesPerElement,ce=De===t.INT||De===t.UNSIGNED_INT||ee.gpuType===Il;if(ee.isInterleavedBufferAttribute){let re=ee.data,Ie=re.stride,Oe=ee.offset;if(re.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Y.locationSize;Ne++)p(Y.location+Ne,re.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ne=0;Ne<Y.locationSize;Ne++)m(Y.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,et);for(let Ne=0;Ne<Y.locationSize;Ne++)M(Y.location+Ne,xe/Y.locationSize,De,se,Ie*J,(Oe+xe/Y.locationSize*Ne)*J,ce)}else{if(ee.isInstancedBufferAttribute){for(let re=0;re<Y.locationSize;re++)p(Y.location+re,ee.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let re=0;re<Y.locationSize;re++)m(Y.location+re);t.bindBuffer(t.ARRAY_BUFFER,et);for(let re=0;re<Y.locationSize;re++)M(Y.location+re,xe/Y.locationSize,De,se,xe*J,xe/Y.locationSize*re*J,ce)}}else if(L!==void 0){let se=L[X];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(Y.location,se);break;case 3:t.vertexAttrib3fv(Y.location,se);break;case 4:t.vertexAttrib4fv(Y.location,se);break;default:t.vertexAttrib1fv(Y.location,se)}}}}y()}function R(){T();for(let I in i){let D=i[I];for(let k in D){let z=D[k];for(let A in z){let F=z[A];for(let L in F)h(F[L].object),delete F[L];delete z[A]}}delete i[I]}}function S(I){if(i[I.id]===void 0)return;let D=i[I.id];for(let k in D){let z=D[k];for(let A in z){let F=z[A];for(let L in F)h(F[L].object),delete F[L];delete z[A]}}delete i[I.id]}function w(I){for(let D in i){let k=i[D];for(let z in k){let A=k[z];if(A[I.id]===void 0)continue;let F=A[I.id];for(let L in F)h(F[L].object),delete F[L];delete A[I.id]}}}function x(I){for(let D in i){let k=i[D],z=I.isInstancedMesh===!0?I.id:0,A=k[z];if(A!==void 0){for(let F in A){let L=A[F];for(let X in L)h(L[X].object),delete L[X];delete A[F]}delete k[z],Object.keys(k).length===0&&delete i[D]}}}function T(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function MM(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function bM(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==An&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let x=w===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==rn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==En&&!x)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),S=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:E,maxSamples:R,samples:S}}function EM(t){let e=this,n=null,i=0,s=!1,r=!1,o=new tn,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,M=y*4,E=p.clippingState||null;l.value=E,E=h(g,u,M,f);for(let R=0;R!==M;++R)E[R]=n[R];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=f;M!==_;++M,E+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Zi=4,$p=[.125,.215,.35,.446,.526,.582],ys=20,AM=256,Bo=new dr,Yp=new He,Ih=null,Nh=0,Ph=0,Lh=!1,TM=new P,xc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:o=256,position:a=TM}=r;Ih=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Nh,Ph),this._renderer.xr.enabled=Lh,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xi||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ri,format:An,colorSpace:no,depthBuffer:!1},s=qp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qp(e,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CM(r)),this._blurMaterial=RM(r,e,n),this._ggxMaterial=wM(r,e,n)}return s}_compileMaterial(e){let n=new Yt(new It,e);this._renderer.compile(n,Bo)}_sceneToCubeUV(e,n,i,s,r){let l=new $t(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Yp),d.toneMapping=Hn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new Vi,new Vn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Yp),p=!0);for(let M=0;M<6;M++){let E=M%3;E===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):E===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let R=this._cubeSize;yr(s,E*R,M>2?R:0,R,R),d.setRenderTarget(s),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===Xi||e.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;yr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Bo)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Zi?i-g+Zi:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-n,yr(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Bo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,yr(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(a,Bo)}_blur(e,n,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ys-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ys;m>ys&&Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);let p=[],y=0;for(let w=0;w<ys;++w){let x=w/_,T=Math.exp(-x*x/2);p.push(T),w===0?y+=T:w<m&&(y+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;let E=this._sizeLods[s],R=3*E*(s>M-Zi?s-M+Zi:0),S=4*(this._cubeSize-E);yr(n,R,S,3*E,2*E),l.setRenderTarget(n),l.render(d,Bo)}};function CM(t){let e=[],n=[],i=[],s=t,r=t-Zi+1+$p.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>t-Zi?l=$p[o-t+Zi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),M=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let S=0;S<f;S++){let w=S%3*2/3-1,x=S>2?0:-1,T=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];y.set(T,_*g*S),M.set(u,m*g*S);let N=[S,S,S,S,S,S];E.set(N,p*g*S)}let R=new It;R.setAttribute("position",new kt(y,_)),R.setAttribute("uv",new kt(M,m)),R.setAttribute("faceIndex",new kt(E,p)),i.push(new Yt(R,null)),s>Zi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function qp(t,e,n){let i=new fn(t,e,n);return i.texture.mapping=Ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function wM(t,e,n){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function RM(t,e,n){let i=new Float32Array(ys),s=new P(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Zp(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Kp(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}var _c=class extends fn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new po(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vi(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:si});r.uniforms.tEquirect.value=n;let o=new Yt(s,r),a=n.minFilter;return n.minFilter===$i&&(n.minFilter=Ht),new Al(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}};function IM(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Cl||f===wl)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new _c(g.height);return _.fromEquirectangularTexture(t,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===Cl||f===wl,_=f===Xi||f===_s;if(g||_){let m=n.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new xc(t)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return g&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new xc(t)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Cl?u.mapping=Xi:f===wl&&(u.mapping=_s),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function NM(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&il("WebGLRenderer: "+i+" extension not supported."),s}}}function PM(t,e,n,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,n.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],t.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let y=f.array;_=f.version;for(let M=0,E=y.length;M<E;M+=3){let R=y[M+0],S=y[M+1],w=y[M+2];u.push(R,S,S,w,w,R)}}else{let y=g.array;_=g.version;for(let M=0,E=y.length/3-1;M<E;M+=3){let R=M+0,S=M+1,w=M+2;u.push(R,S,S,w,w,R)}}let m=new(g.count>=65535?lo:ao)(u,1);m.version=_;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function LM(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,r,d*o),n.update(u,i,1)}function c(d,u,f){f!==0&&(t.drawElementsInstanced(i,u,r,d*o,f),n.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];n.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function FM(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:Re("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function DM(t,e,n){let i=new WeakMap,s=new St;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let T=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let E=a.attributes.position.count*M,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let S=new Float32Array(E*R*4*d),w=new ro(S,E,R,d);w.type=En,w.needsUpdate=!0;let x=M*4;for(let N=0;N<d;N++){let I=m[N],D=p[N],k=y[N],z=E*R*4*N;for(let A=0;A<I.count;A++){let F=A*x;f===!0&&(s.fromBufferAttribute(I,A),S[z+F+0]=s.x,S[z+F+1]=s.y,S[z+F+2]=s.z,S[z+F+3]=0),g===!0&&(s.fromBufferAttribute(D,A),S[z+F+4]=s.x,S[z+F+5]=s.y,S[z+F+6]=s.z,S[z+F+7]=0),_===!0&&(s.fromBufferAttribute(k,A),S[z+F+8]=s.x,S[z+F+9]=s.y,S[z+F+10]=s.z,S[z+F+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new we(E,R)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function OM(t,e,n,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}var BM={[ah]:"LINEAR_TONE_MAPPING",[lh]:"REINHARD_TONE_MAPPING",[ch]:"CINEON_TONE_MAPPING",[uh]:"ACES_FILMIC_TONE_MAPPING",[dh]:"AGX_TONE_MAPPING",[fh]:"NEUTRAL_TONE_MAPPING",[hh]:"CUSTOM_TONE_MAPPING"};function UM(t,e,n,i,s){let r=new fn(e,n,{type:t,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Mi(e,n):void 0}),o=new fn(e,n,{type:ri,depthBuffer:!1,stencilBuffer:!1}),a=new It;a.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new lt([0,2,0,0,2,0],2));let l=new dl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Yt(a,l),h=new dr(-1,1,1,-1,0,1),d=null,u=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(y,M){r.setSize(y,M),o.setSize(y,M);for(let E=0;E<m.length;E++){let R=m[E];R.setSize&&R.setSize(y,M)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;let M=r.width,E=r.height;for(let R=0;R<m.length;R++){let S=m[R];S.setSize&&S.setSize(M,E)}},this.begin=function(y,M){if(f||y.toneMapping===Hn&&m.length===0)return!1;if(_=M,M!==null){let E=M.width,R=M.height;(r.width!==E||r.height!==R)&&this.setSize(E,R)}return p===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=Hn,!0},this.hasRenderPass=function(){return p},this.end=function(y,M){y.toneMapping=g,f=!0;let E=r,R=o;for(let S=0;S<m.length;S++){let w=m[S];if(w.enabled!==!1&&(w.render(y,R,E,M),w.needsSwap!==!1)){let x=E;E=R,R=x}}if(d!==y.outputColorSpace||u!==y.toneMapping){d=y.outputColorSpace,u=y.toneMapping,l.defines={},Ze.getTransfer(d)===tt&&(l.defines.SRGB_TRANSFER="");let S=BM[u];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(_),y.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var gm=new nn,Oh=new Mi(1,1),xm=new ro,_m=new ol,vm=new po,Jp=[],jp=[],Qp=new Float32Array(16),em=new Float32Array(9),tm=new Float32Array(4);function Mr(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Jp[s];if(r===void 0&&(r=new Float32Array(s),Jp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Sc(t,e){let n=jp[e];n===void 0&&(n=new Int32Array(e),jp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function kM(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function zM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function HM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function GM(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Ft(n,i))return;tm.set(i),t.uniformMatrix2fv(this.addr,!1,tm),Dt(n,i)}}function WM(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Ft(n,i))return;em.set(i),t.uniformMatrix3fv(this.addr,!1,em),Dt(n,i)}}function XM(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Ft(n,i))return;Qp.set(i),t.uniformMatrix4fv(this.addr,!1,Qp),Dt(n,i)}}function $M(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function qM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function ZM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function KM(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function jM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function QM(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function eb(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Oh.compareFunction=n.isReversedDepthBuffer()?pc:fc,r=Oh):r=gm,n.setTexture2D(e||r,s)}function tb(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||_m,s)}function nb(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||vm,s)}function ib(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||xm,s)}function sb(t){switch(t){case 5126:return kM;case 35664:return VM;case 35665:return zM;case 35666:return HM;case 35674:return GM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return $M;case 35667:case 35671:return YM;case 35668:case 35672:return qM;case 35669:case 35673:return ZM;case 5125:return KM;case 36294:return JM;case 36295:return jM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}function rb(t,e){t.uniform1fv(this.addr,e)}function ob(t,e){let n=Mr(e,this.size,2);t.uniform2fv(this.addr,n)}function ab(t,e){let n=Mr(e,this.size,3);t.uniform3fv(this.addr,n)}function lb(t,e){let n=Mr(e,this.size,4);t.uniform4fv(this.addr,n)}function cb(t,e){let n=Mr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ub(t,e){let n=Mr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hb(t,e){let n=Mr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function db(t,e){t.uniform1iv(this.addr,e)}function fb(t,e){t.uniform2iv(this.addr,e)}function pb(t,e){t.uniform3iv(this.addr,e)}function mb(t,e){t.uniform4iv(this.addr,e)}function gb(t,e){t.uniform1uiv(this.addr,e)}function xb(t,e){t.uniform2uiv(this.addr,e)}function _b(t,e){t.uniform3uiv(this.addr,e)}function vb(t,e){t.uniform4uiv(this.addr,e)}function yb(t,e,n){let i=this.cache,s=e.length,r=Sc(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Oh:o=gm;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function Sb(t,e,n){let i=this.cache,s=e.length,r=Sc(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||_m,r[o])}function Mb(t,e,n){let i=this.cache,s=e.length,r=Sc(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||vm,r[o])}function bb(t,e,n){let i=this.cache,s=e.length,r=Sc(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||xm,r[o])}function Eb(t){switch(t){case 5126:return rb;case 35664:return ob;case 35665:return ab;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return hb;case 5124:case 35670:return db;case 35667:case 35671:return fb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return xb;case 36295:return _b;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return bb}}var Bh=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sb(n.type)}},Uh=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Eb(n.type)}},kh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,n[a.id],i)}}},Fh=/(\w+)(\])?(\[|\.)?/g;function nm(t,e){t.seq.push(e),t.map[e.id]=e}function Ab(t,e,n){let i=t.name,s=i.length;for(Fh.lastIndex=0;;){let r=Fh.exec(i),o=Fh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nm(n,c===void 0?new Bh(a,t,e):new Uh(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new kh(a),nm(n,d)),n=d}}}var Sr=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Ab(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in n&&i.push(o)}return i}};function im(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Tb=37297,Cb=0;function wb(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var sm=new Le;function Rb(t){Ze._getMatrix(sm,Ze.workingColorSpace,t);let e=`mat3( ${sm.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case io:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function rm(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+wb(t.getShaderSource(e),a)}else return r}function Ib(t,e){let n=Rb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var Nb={[ah]:"Linear",[lh]:"Reinhard",[ch]:"Cineon",[uh]:"ACESFilmic",[dh]:"AgX",[fh]:"Neutral",[hh]:"Custom"};function Pb(t,e){let n=Nb[e];return n===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var gc=new P;function Lb(){Ze.getLuminanceCoefficients(gc);let t=gc.x.toFixed(4),e=gc.y.toFixed(4),n=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function Db(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ob(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ko(t){return t!==""}function om(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function am(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(t){return t.replace(Bb,kb)}var Ub=new Map;function kb(t,e){let n=Ge[e];if(n===void 0){let i=Ub.get(e);if(i!==void 0)n=Ge[i],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vh(n)}var Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lm(t){return t.replace(Vb,zb)}function zb(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var Hb={[Co]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function Gb(t){return Hb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wb={[Xi]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE_UV"};function Xb(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Wb[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var $b={[_s]:"ENVMAP_MODE_REFRACTION"};function Yb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":$b[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qb={[oh]:"ENVMAP_BLENDING_MULTIPLY",[wp]:"ENVMAP_BLENDING_MIX",[Rp]:"ENVMAP_BLENDING_ADD"};function Zb(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":qb[t.combine]||"ENVMAP_BLENDING_NONE"}function Kb(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Jb(t,e,n,i){let s=t.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,l=Gb(n),c=Xb(n),h=Yb(n),d=Zb(n),u=Kb(n),f=Fb(n),g=Db(r),_=s.createProgram(),m,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ko).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ko).join(`
`),p.length>0&&(p+=`
`)):(m=[cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),p=[cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hn?"#define TONE_MAPPING":"",n.toneMapping!==Hn?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Hn?Pb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Ib("linearToOutputTexel",n.outputColorSpace),Lb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ko).join(`
`)),o=Vh(o),o=om(o,n),o=am(o,n),a=Vh(a),a=om(a,n),a=am(a,n),o=lm(o),a=lm(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+m+o,E=y+p+a,R=im(s,s.VERTEX_SHADER,M),S=im(s,s.FRAGMENT_SHADER,E);s.attachShader(_,R),s.attachShader(_,S),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(I){if(t.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(R)||"",z=s.getShaderInfoLog(S)||"",A=D.trim(),F=k.trim(),L=z.trim(),X=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,R,S);else{let ee=rm(s,R,"vertex"),se=rm(s,S,"fragment");Re("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+A+`
`+ee+`
`+se)}else A!==""?Ce("WebGLProgram: Program Info Log:",A):(F===""||L==="")&&(Y=!1);Y&&(I.diagnostics={runnable:X,programLog:A,vertexShader:{log:F,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(R),s.deleteShader(S),x=new Sr(s,_),T=Ob(s,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,Tb)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=S,this}var jb=0,zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Hh(e),n.set(e,i)),i}},Hh=class{constructor(e){this.id=jb++,this.code=e,this.usedTimes=0}};function Qb(t){return t===qi||t===Do||t===Oo}function eE(t,e,n,i,s,r){let o=new or,a=new zh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,N,I,D,k){let z=I.fog,A=D.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||F,L),Y=X&&X.mapping===Ro?X.image.height:null,ee=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ce("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let se=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,xe=se!==void 0?se.length:0,ze=0;A.morphAttributes.position!==void 0&&(ze=1),A.morphAttributes.normal!==void 0&&(ze=2),A.morphAttributes.color!==void 0&&(ze=3);let et,De,J,ce;if(ee){let Be=ai[ee];et=Be.vertexShader,De=Be.fragmentShader}else et=x.vertexShader,De=x.fragmentShader,a.update(x),J=a.getVertexShaderID(x),ce=a.getFragmentShaderID(x);let re=t.getRenderTarget(),Ie=t.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,Ne=D.isBatchedMesh===!0,vt=!!x.map,Ye=!!x.matcap,st=!!X,gt=!!x.aoMap,$e=!!x.lightMap,Pt=!!x.bumpMap,yt=!!x.normalMap,ln=!!x.displacementMap,B=!!x.emissiveMap,Lt=!!x.metalnessMap,qe=!!x.roughnessMap,pt=x.anisotropy>0,ue=x.clearcoat>0,bt=x.dispersion>0,C=x.iridescence>0,v=x.sheen>0,V=x.transmission>0,Z=pt&&!!x.anisotropyMap,Q=ue&&!!x.clearcoatMap,te=ue&&!!x.clearcoatNormalMap,le=ue&&!!x.clearcoatRoughnessMap,$=C&&!!x.iridescenceMap,K=C&&!!x.iridescenceThicknessMap,me=v&&!!x.sheenColorMap,ve=v&&!!x.sheenRoughnessMap,oe=!!x.specularMap,ne=!!x.specularColorMap,Pe=!!x.specularIntensityMap,ke=V&&!!x.transmissionMap,Qe=V&&!!x.thicknessMap,O=!!x.gradientMap,ie=!!x.alphaMap,q=x.alphaTest>0,ge=!!x.alphaHash,ae=!!x.extensions,j=Hn;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(j=t.toneMapping);let Me={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:et,fragmentShader:De,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ne,batchingColor:Ne&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:vt,matcap:Ye,envMap:st,envMapMode:st&&X.mapping,envMapCubeUVHeight:Y,aoMap:gt,lightMap:$e,bumpMap:Pt,normalMap:yt,displacementMap:ln,emissiveMap:B,normalMapObjectSpace:yt&&x.normalMapType===Pp,normalMapTangentSpace:yt&&x.normalMapType===Sh,packedNormalMap:yt&&x.normalMapType===Sh&&Qb(x.normalMap.format),metalnessMap:Lt,roughnessMap:qe,anisotropy:pt,anisotropyMap:Z,clearcoat:ue,clearcoatMap:Q,clearcoatNormalMap:te,clearcoatRoughnessMap:le,dispersion:bt,iridescence:C,iridescenceMap:$,iridescenceThicknessMap:K,sheen:v,sheenColorMap:me,sheenRoughnessMap:ve,specularMap:oe,specularColorMap:ne,specularIntensityMap:Pe,transmission:V,transmissionMap:ke,thicknessMap:Qe,gradientMap:O,opaque:x.transparent===!1&&x.blending===ms&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:q,alphaHash:ge,combine:x.combine,mapUv:vt&&g(x.map.channel),aoMapUv:gt&&g(x.aoMap.channel),lightMapUv:$e&&g(x.lightMap.channel),bumpMapUv:Pt&&g(x.bumpMap.channel),normalMapUv:yt&&g(x.normalMap.channel),displacementMapUv:ln&&g(x.displacementMap.channel),emissiveMapUv:B&&g(x.emissiveMap.channel),metalnessMapUv:Lt&&g(x.metalnessMap.channel),roughnessMapUv:qe&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:Q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(x.sheenRoughnessMap.channel),specularMapUv:oe&&g(x.specularMap.channel),specularColorMapUv:ne&&g(x.specularColorMap.channel),specularIntensityMapUv:Pe&&g(x.specularIntensityMap.channel),transmissionMapUv:ke&&g(x.transmissionMap.channel),thicknessMapUv:Qe&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(yt||pt),vertexNormals:!!A.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!A.attributes.uv&&(vt||ie),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||A.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ie,skinning:D.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ze,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:j,decodeVideoTexture:vt&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:B&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bn,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)T.push(N),T.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(p(T,x),y(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function M(x){let T=f[x.type],N;if(T){let I=ai[T];N=Wp.clone(I.uniforms)}else N=x.uniforms;return N}function E(x,T){let N=h.get(T);return N!==void 0?++N.usedTimes:(N=new Jb(t,T,x,s),c.push(N),h.set(T,N)),N}function R(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:E,releaseProgram:R,releaseShaderCache:S,programs:c,dispose:w}}function tE(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function nE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function um(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function hm(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,_,m,p){let y=t[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},t[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=o(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=m,y.group=p),e++,y}function l(u,f,g,_,m,p){let y=a(u,f,g,_,m,p);g.transmission>0?i.push(y):g.transparent===!0?s.push(y):n.push(y)}function c(u,f,g,_,m,p){let y=a(u,f,g,_,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):n.unshift(y)}function h(u,f){n.length>1&&n.sort(u||nE),i.length>1&&i.sort(f||um),s.length>1&&s.sort(f||um)}function d(){for(let u=e,f=t.length;u<f;u++){let g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function iE(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;return r===void 0?(o=new hm,t.set(i,[o])):s>=r.length?(o=new hm,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function sE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new He};break;case"SpotLight":n={position:new P,direction:new P,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function rE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var oE=0;function aE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lE(t){let e=new sE,n=rE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new at,o=new at;function a(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,M=0,E=0,R=0,S=0,w=0;c.sort(aE);for(let T=0,N=c.length;T<N;T++){let I=c[T],D=I.color,k=I.intensity,z=I.distance,A=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===qi?A=I.shadow.map.texture:A=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=D.r*k,d+=D.g*k,u+=D.b*k;else if(I.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(I.sh.coefficients[F],k);w++}else if(I.isDirectionalLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let L=I.shadow,X=n.get(I);X.shadowIntensity=L.intensity,X.shadowBias=L.bias,X.shadowNormalBias=L.normalBias,X.shadowRadius=L.radius,X.shadowMapSize=L.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=A,i.directionalShadowMatrix[f]=I.shadow.matrix,y++}i.directional[f]=F,f++}else if(I.isSpotLight){let F=e.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(D).multiplyScalar(k),F.distance=z,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,i.spot[_]=F;let L=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,L.updateMatrices(I),I.castShadow&&S++),i.spotLightMatrix[_]=L.matrix,I.castShadow){let X=n.get(I);X.shadowIntensity=L.intensity,X.shadowBias=L.bias,X.shadowNormalBias=L.normalBias,X.shadowRadius=L.radius,X.shadowMapSize=L.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=A,E++}_++}else if(I.isRectAreaLight){let F=e.get(I);F.color.copy(D).multiplyScalar(k),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=F,m++}else if(I.isPointLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){let L=I.shadow,X=n.get(I);X.shadowIntensity=L.intensity,X.shadowBias=L.bias,X.shadowNormalBias=L.normalBias,X.shadowRadius=L.radius,X.shadowMapSize=L.mapSize,X.shadowCameraNear=L.camera.near,X.shadowCameraFar=L.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=A,i.pointShadowMatrix[g]=I.shadow.matrix,M++}i.point[g]=F,g++}else if(I.isHemisphereLight){let F=e.get(I);F.skyColor.copy(I.color).multiplyScalar(k),F.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[p]=F,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==M||x.numSpotShadows!==E||x.numSpotMaps!==R||x.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+R-S,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=w,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=M,x.numSpotShadows=E,x.numSpotMaps=R,x.numLightProbes=w,i.version=oE++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let M=c[p];if(M.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(M.isSpotLight){let E=i.spot[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let E=i.point[u];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){let E=i.hemi[_];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function dm(t){let e=new lE(t),n=[],i=[],s=[];function r(u){d.camera=u,n.length=0,i.length=0,s.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function cE(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),a;return o===void 0?(a=new dm(t),e.set(s,[a])):r>=o.length?(a=new dm(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var uE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hE=`uniform sampler2D shadow_pass;
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
}`,dE=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],fE=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],fm=new at,Uo=new P,Dh=new P;function pE(t,e,n){let i=new lr,s=new we,r=new we,o=new St,a=new fl,l=new pl,c={},h=n.maxTextureSize,d={[vi]:Jt,[Jt]:vi,[bn]:bn},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:uE,fragmentShader:hE}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new It;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Yt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let p=this.type;this.render=function(S,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===cp&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Co);let T=t.getRenderTarget(),N=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),D=t.state;D.setBlending(si),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=p!==this.type;k&&w.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(A=>A.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,A=S.length;z<A;z++){let F=S[z],L=F.shadow;if(L===void 0){Ce("WebGLShadowMap:",F,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let X=L.getFrameExtents();s.multiply(X),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,L.mapSize.y=r.y));let Y=t.state.buffers.depth.getReversed();if(L.camera._reversedDepth=Y,L.map===null||k===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===mr){if(F.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new fn(s.x,s.y,{format:qi,type:ri,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),L.map.texture.name=F.name+".shadowMap",L.map.depthTexture=new Mi(s.x,s.y,En),L.map.depthTexture.name=F.name+".shadowMapDepth",L.map.depthTexture.format=ti,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Vt,L.map.depthTexture.magFilter=Vt}else F.isPointLight?(L.map=new _c(s.x),L.map.depthTexture=new ul(s.x,Gn)):(L.map=new fn(s.x,s.y),L.map.depthTexture=new Mi(s.x,s.y,Gn)),L.map.depthTexture.name=F.name+".shadowMap",L.map.depthTexture.format=ti,this.type===Co?(L.map.depthTexture.compareFunction=Y?pc:fc,L.map.depthTexture.minFilter=Ht,L.map.depthTexture.magFilter=Ht):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Vt,L.map.depthTexture.magFilter=Vt);L.camera.updateProjectionMatrix()}let ee=L.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<ee;se++){if(L.map.isWebGLCubeRenderTarget)t.setRenderTarget(L.map,se),t.clear();else{se===0&&(t.setRenderTarget(L.map),t.clear());let xe=L.getViewport(se);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),D.viewport(o)}if(F.isPointLight){let xe=L.camera,ze=L.matrix,et=F.distance||xe.far;et!==xe.far&&(xe.far=et,xe.updateProjectionMatrix()),Uo.setFromMatrixPosition(F.matrixWorld),xe.position.copy(Uo),Dh.copy(xe.position),Dh.add(dE[se]),xe.up.copy(fE[se]),xe.lookAt(Dh),xe.updateMatrixWorld(),ze.makeTranslation(-Uo.x,-Uo.y,-Uo.z),fm.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),L._frustum.setFromProjectionMatrix(fm,xe.coordinateSystem,xe.reversedDepth)}else L.updateMatrices(F);i=L.getFrustum(),E(w,x,L.camera,F,this.type)}L.isPointLightShadow!==!0&&this.type===mr&&y(L,x),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(T,N,I)};function y(S,w){let x=e.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new fn(s.x,s.y,{format:qi,type:ri})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(w,null,x,u,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(w,null,x,f,_,null)}function M(S,w,x,T){let N=null,I=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)N=I;else if(N=x.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=N.uuid,k=w.uuid,z=c[D];z===void 0&&(z={},c[D]=z);let A=z[k];A===void 0&&(A=N.clone(),z[k]=A,w.addEventListener("dispose",R)),N=A}if(N.visible=w.visible,N.wireframe=w.wireframe,T===mr?N.side=w.shadowSide!==null?w.shadowSide:w.side:N.side=w.shadowSide!==null?w.shadowSide:d[w.side],N.alphaMap=w.alphaMap,N.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,N.map=w.map,N.clipShadows=w.clipShadows,N.clippingPlanes=w.clippingPlanes,N.clipIntersection=w.clipIntersection,N.displacementMap=w.displacementMap,N.displacementScale=w.displacementScale,N.displacementBias=w.displacementBias,N.wireframeLinewidth=w.wireframeLinewidth,N.linewidth=w.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let D=t.properties.get(N);D.light=x}return N}function E(S,w,x,T,N){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===mr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let k=e.update(S),z=S.material;if(Array.isArray(z)){let A=k.groups;for(let F=0,L=A.length;F<L;F++){let X=A[F],Y=z[X.materialIndex];if(Y&&Y.visible){let ee=M(S,Y,T,N);S.onBeforeShadow(t,S,w,x,k,ee,X),t.renderBufferDirect(x,null,k,ee,S,X),S.onAfterShadow(t,S,w,x,k,ee,X)}}}else if(z.visible){let A=M(S,z,T,N);S.onBeforeShadow(t,S,w,x,k,A,null),t.renderBufferDirect(x,null,k,A,S,null),S.onAfterShadow(t,S,w,x,k,A,null)}}let D=S.children;for(let k=0,z=D.length;k<z;k++)E(D[k],w,x,T,N)}function R(S){S.target.removeEventListener("dispose",R);for(let x in c){let T=c[x],N=S.target.uuid;N in T&&(T[N].dispose(),delete T[N])}}}function mE(t,e){function n(){let O=!1,ie=new St,q=null,ge=new St(0,0,0,0);return{setMask:function(ae){q!==ae&&!O&&(t.colorMask(ae,ae,ae,ae),q=ae)},setLocked:function(ae){O=ae},setClear:function(ae,j,Me,Be,At){At===!0&&(ae*=Be,j*=Be,Me*=Be),ie.set(ae,j,Me,Be),ge.equals(ie)===!1&&(t.clearColor(ae,j,Me,Be),ge.copy(ie))},reset:function(){O=!1,q=null,ge.set(-1,0,0,0)}}}function i(){let O=!1,ie=!1,q=null,ge=null,ae=null;return{setReversed:function(j){if(ie!==j){let Me=e.get("EXT_clip_control");j?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ie=j;let Be=ae;ae=null,this.setClear(Be)}},getReversed:function(){return ie},setTest:function(j){j?re(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(j){q!==j&&!O&&(t.depthMask(j),q=j)},setFunc:function(j){if(ie&&(j=Hp[j]),ge!==j){switch(j){case Ya:t.depthFunc(t.NEVER);break;case qa:t.depthFunc(t.ALWAYS);break;case Za:t.depthFunc(t.LESS);break;case gs:t.depthFunc(t.LEQUAL);break;case Ka:t.depthFunc(t.EQUAL);break;case Ja:t.depthFunc(t.GEQUAL);break;case ja:t.depthFunc(t.GREATER);break;case Qa:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=j}},setLocked:function(j){O=j},setClear:function(j){ae!==j&&(ae=j,ie&&(j=1-j),t.clearDepth(j))},reset:function(){O=!1,q=null,ge=null,ae=null,ie=!1}}}function s(){let O=!1,ie=null,q=null,ge=null,ae=null,j=null,Me=null,Be=null,At=null;return{setTest:function(rt){O||(rt?re(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(rt){ie!==rt&&!O&&(t.stencilMask(rt),ie=rt)},setFunc:function(rt,di,Kn){(q!==rt||ge!==di||ae!==Kn)&&(t.stencilFunc(rt,di,Kn),q=rt,ge=di,ae=Kn)},setOp:function(rt,di,Kn){(j!==rt||Me!==di||Be!==Kn)&&(t.stencilOp(rt,di,Kn),j=rt,Me=di,Be=Kn)},setLocked:function(rt){O=rt},setClear:function(rt){At!==rt&&(t.clearStencil(rt),At=rt)},reset:function(){O=!1,ie=null,q=null,ge=null,ae=null,j=null,Me=null,Be=null,At=null}}}let r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,M=null,E=null,R=null,S=null,w=null,x=new He(0,0,0),T=0,N=!1,I=null,D=null,k=null,z=null,A=null,F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,X=0,Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),L=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),L=X>=2);let ee=null,se={},xe=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),et=new St().fromArray(xe),De=new St().fromArray(ze);function J(O,ie,q,ge){let ae=new Uint8Array(4),j=t.createTexture();t.bindTexture(O,j),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Me=0;Me<q;Me++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(ie+Me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return j}let ce={};ce[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(t.DEPTH_TEST),o.setFunc(gs),Pt(!1),yt(ih),re(t.CULL_FACE),gt(si);function re(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function Ie(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function Oe(O,ie){return u[O]!==ie?(t.bindFramebuffer(O,ie),u[O]=ie,O===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ie),O===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ne(O,ie){let q=g,ge=!1;if(O){q=f.get(ie),q===void 0&&(q=[],f.set(ie,q));let ae=O.textures;if(q.length!==ae.length||q[0]!==t.COLOR_ATTACHMENT0){for(let j=0,Me=ae.length;j<Me;j++)q[j]=t.COLOR_ATTACHMENT0+j;q.length=ae.length,ge=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,ge=!0);ge&&t.drawBuffers(q)}function vt(O){return _!==O?(t.useProgram(O),_=O,!0):!1}let Ye={[ki]:t.FUNC_ADD,[hp]:t.FUNC_SUBTRACT,[dp]:t.FUNC_REVERSE_SUBTRACT};Ye[fp]=t.MIN,Ye[pp]=t.MAX;let st={[mp]:t.ZERO,[gp]:t.ONE,[xp]:t.SRC_COLOR,[Xa]:t.SRC_ALPHA,[bp]:t.SRC_ALPHA_SATURATE,[Sp]:t.DST_COLOR,[vp]:t.DST_ALPHA,[_p]:t.ONE_MINUS_SRC_COLOR,[$a]:t.ONE_MINUS_SRC_ALPHA,[Mp]:t.ONE_MINUS_DST_COLOR,[yp]:t.ONE_MINUS_DST_ALPHA,[Ep]:t.CONSTANT_COLOR,[Ap]:t.ONE_MINUS_CONSTANT_COLOR,[Tp]:t.CONSTANT_ALPHA,[Cp]:t.ONE_MINUS_CONSTANT_ALPHA};function gt(O,ie,q,ge,ae,j,Me,Be,At,rt){if(O===si){m===!0&&(Ie(t.BLEND),m=!1);return}if(m===!1&&(re(t.BLEND),m=!0),O!==up){if(O!==p||rt!==N){if((y!==ki||R!==ki)&&(t.blendEquation(t.FUNC_ADD),y=ki,R=ki),rt)switch(O){case ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wo:t.blendFunc(t.ONE,t.ONE);break;case sh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Re("WebGLState: Invalid blending: ",O);break}else switch(O){case ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case sh:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",O);break}M=null,E=null,S=null,w=null,x.set(0,0,0),T=0,p=O,N=rt}return}ae=ae||ie,j=j||q,Me=Me||ge,(ie!==y||ae!==R)&&(t.blendEquationSeparate(Ye[ie],Ye[ae]),y=ie,R=ae),(q!==M||ge!==E||j!==S||Me!==w)&&(t.blendFuncSeparate(st[q],st[ge],st[j],st[Me]),M=q,E=ge,S=j,w=Me),(Be.equals(x)===!1||At!==T)&&(t.blendColor(Be.r,Be.g,Be.b,At),x.copy(Be),T=At),p=O,N=!1}function $e(O,ie){O.side===bn?Ie(t.CULL_FACE):re(t.CULL_FACE);let q=O.side===Jt;ie&&(q=!q),Pt(q),O.blending===ms&&O.transparent===!1?gt(si):gt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ge=O.stencilWrite;a.setTest(ge),ge&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),B(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(O){I!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),I=O)}function yt(O){O!==ap?(re(t.CULL_FACE),O!==D&&(O===ih?t.cullFace(t.BACK):O===lp?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),D=O}function ln(O){O!==k&&(L&&t.lineWidth(O),k=O)}function B(O,ie,q){O?(re(t.POLYGON_OFFSET_FILL),(z!==ie||A!==q)&&(z=ie,A=q,o.getReversed()&&(ie=-ie),t.polygonOffset(ie,q))):Ie(t.POLYGON_OFFSET_FILL)}function Lt(O){O?re(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function qe(O){O===void 0&&(O=t.TEXTURE0+F-1),ee!==O&&(t.activeTexture(O),ee=O)}function pt(O,ie,q){q===void 0&&(ee===null?q=t.TEXTURE0+F-1:q=ee);let ge=se[q];ge===void 0&&(ge={type:void 0,texture:void 0},se[q]=ge),(ge.type!==O||ge.texture!==ie)&&(ee!==q&&(t.activeTexture(q),ee=q),t.bindTexture(O,ie||ce[O]),ge.type=O,ge.texture=ie)}function ue(){let O=se[ee];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function bt(){try{t.compressedTexImage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function v(){try{t.texSubImage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function V(){try{t.texSubImage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function te(){try{t.texStorage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function le(){try{t.texStorage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function $(){try{t.texImage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function K(){try{t.texImage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function me(O){return d[O]!==void 0?d[O]:t.getParameter(O)}function ve(O,ie){d[O]!==ie&&(t.pixelStorei(O,ie),d[O]=ie)}function oe(O){et.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),et.copy(O))}function ne(O){De.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),De.copy(O))}function Pe(O,ie){let q=c.get(ie);q===void 0&&(q=new WeakMap,c.set(ie,q));let ge=q.get(O);ge===void 0&&(ge=t.getUniformBlockIndex(ie,O.name),q.set(O,ge))}function ke(O,ie){let ge=c.get(ie).get(O);l.get(ie)!==ge&&(t.uniformBlockBinding(ie,ge,O.__bindingPointIndex),l.set(ie,ge))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},ee=null,se={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,M=null,E=null,R=null,S=null,w=null,x=new He(0,0,0),T=0,N=!1,I=null,D=null,k=null,z=null,A=null,et.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Ie,bindFramebuffer:Oe,drawBuffers:Ne,useProgram:vt,setBlending:gt,setMaterial:$e,setFlipSided:Pt,setCullFace:yt,setLineWidth:ln,setPolygonOffset:B,setScissorTest:Lt,activeTexture:qe,bindTexture:pt,unbindTexture:ue,compressedTexImage2D:bt,compressedTexImage3D:C,texImage2D:$,texImage3D:K,pixelStorei:ve,getParameter:me,updateUBOMapping:Pe,uniformBlockBinding:ke,texStorage2D:te,texStorage3D:le,texSubImage2D:v,texSubImage3D:V,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:oe,viewport:ne,reset:Qe}}function gE(t,e,n,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return g?new OffscreenCanvas(C,v):so("canvas")}function m(C,v,V){let Z=1,Q=bt(C);if((Q.width>V||Q.height>V)&&(Z=V/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let te=Math.floor(Z*Q.width),le=Math.floor(Z*Q.height);u===void 0&&(u=_(te,le));let $=v?_(te,le):u;return $.width=te,$.height=le,$.getContext("2d").drawImage(C,0,0,te,le),Ce("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+te+"x"+le+")."),$}else return"data"in C&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function y(C){t.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(C,v,V,Z,Q,te=!1){if(C!==null){if(t[C]!==void 0)return t[C];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le;Z&&(le=e.get("EXT_texture_norm16"),le||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===t.RED&&(V===t.FLOAT&&($=t.R32F),V===t.HALF_FLOAT&&($=t.R16F),V===t.UNSIGNED_BYTE&&($=t.R8),V===t.UNSIGNED_SHORT&&le&&($=le.R16_EXT),V===t.SHORT&&le&&($=le.R16_SNORM_EXT)),v===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.R8UI),V===t.UNSIGNED_SHORT&&($=t.R16UI),V===t.UNSIGNED_INT&&($=t.R32UI),V===t.BYTE&&($=t.R8I),V===t.SHORT&&($=t.R16I),V===t.INT&&($=t.R32I)),v===t.RG&&(V===t.FLOAT&&($=t.RG32F),V===t.HALF_FLOAT&&($=t.RG16F),V===t.UNSIGNED_BYTE&&($=t.RG8),V===t.UNSIGNED_SHORT&&le&&($=le.RG16_EXT),V===t.SHORT&&le&&($=le.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.RG8UI),V===t.UNSIGNED_SHORT&&($=t.RG16UI),V===t.UNSIGNED_INT&&($=t.RG32UI),V===t.BYTE&&($=t.RG8I),V===t.SHORT&&($=t.RG16I),V===t.INT&&($=t.RG32I)),v===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.RGB8UI),V===t.UNSIGNED_SHORT&&($=t.RGB16UI),V===t.UNSIGNED_INT&&($=t.RGB32UI),V===t.BYTE&&($=t.RGB8I),V===t.SHORT&&($=t.RGB16I),V===t.INT&&($=t.RGB32I)),v===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.RGBA8UI),V===t.UNSIGNED_SHORT&&($=t.RGBA16UI),V===t.UNSIGNED_INT&&($=t.RGBA32UI),V===t.BYTE&&($=t.RGBA8I),V===t.SHORT&&($=t.RGBA16I),V===t.INT&&($=t.RGBA32I)),v===t.RGB&&(V===t.UNSIGNED_SHORT&&le&&($=le.RGB16_EXT),V===t.SHORT&&le&&($=le.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),v===t.RGBA){let K=te?io:Ze.getTransfer(Q);V===t.FLOAT&&($=t.RGBA32F),V===t.HALF_FLOAT&&($=t.RGBA16F),V===t.UNSIGNED_BYTE&&($=K===tt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&le&&($=le.RGBA16_EXT),V===t.SHORT&&le&&($=le.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function R(C,v){let V;return C?v===null||v===Gn||v===xr?V=t.DEPTH24_STENCIL8:v===En?V=t.DEPTH32F_STENCIL8:v===gr&&(V=t.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gn||v===xr?V=t.DEPTH_COMPONENT24:v===En?V=t.DEPTH_COMPONENT32F:v===gr&&(V=t.DEPTH_COMPONENT16),V}function S(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Vt&&C.minFilter!==Ht?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){let v=C.target;v.removeEventListener("dispose",w),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(C){let v=C.target;v.removeEventListener("dispose",x),I(v)}function T(C){let v=i.get(C);if(v.__webglInit===void 0)return;let V=C.source,Z=f.get(V);if(Z){let Q=Z[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(C),Object.keys(Z).length===0&&f.delete(V)}i.remove(C)}function N(C){let v=i.get(C);t.deleteTexture(v.__webglTexture);let V=C.source,Z=f.get(V);delete Z[v.__cacheKey],o.memory.textures--}function I(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let Q=0;Q<v.__webglFramebuffer[Z].length;Q++)t.deleteFramebuffer(v.__webglFramebuffer[Z][Q]);else t.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)t.deleteFramebuffer(v.__webglFramebuffer[Z]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=C.textures;for(let Z=0,Q=V.length;Z<Q;Z++){let te=i.get(V[Z]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(V[Z])}i.remove(C)}let D=0;function k(){D=0}function z(){return D}function A(C){D=C}function F(){let C=D;return C>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function L(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function X(C,v){let V=i.get(C);if(C.isVideoTexture&&pt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let Z=C.image;if(Z===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(V,C,v);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+v)}function Y(C,v){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ie(V,C,v);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+v)}function ee(C,v){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ie(V,C,v);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+v)}function se(C,v){let V=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){Oe(V,C,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+v)}let xe={[el]:t.REPEAT,[Qn]:t.CLAMP_TO_EDGE,[tl]:t.MIRRORED_REPEAT},ze={[Vt]:t.NEAREST,[Ip]:t.NEAREST_MIPMAP_NEAREST,[Io]:t.NEAREST_MIPMAP_LINEAR,[Ht]:t.LINEAR,[Rl]:t.LINEAR_MIPMAP_NEAREST,[$i]:t.LINEAR_MIPMAP_LINEAR},et={[Lp]:t.NEVER,[Up]:t.ALWAYS,[Fp]:t.LESS,[fc]:t.LEQUAL,[Dp]:t.EQUAL,[pc]:t.GEQUAL,[Op]:t.GREATER,[Bp]:t.NOTEQUAL};function De(C,v){if(v.type===En&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ht||v.magFilter===Rl||v.magFilter===Io||v.magFilter===$i||v.minFilter===Ht||v.minFilter===Rl||v.minFilter===Io||v.minFilter===$i)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,xe[v.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,xe[v.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,xe[v.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,ze[v.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,ze[v.minFilter]),v.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,et[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Vt||v.minFilter!==Io&&v.minFilter!==$i||v.type===En&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function J(C,v){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));let Z=v.source,Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));let te=L(v);if(te!==C.__cacheKey){Q[te]===void 0&&(Q[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[te].usedTimes++;let le=Q[C.__cacheKey];le!==void 0&&(Q[C.__cacheKey].usedTimes--,le.usedTimes===0&&N(v)),C.__cacheKey=te,C.__webglTexture=Q[te].texture}return V}function ce(C,v,V){return Math.floor(Math.floor(C/V)/v)}function re(C,v,V,Z){let te=C.updateRanges;if(te.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,V,Z,v.data);else{te.sort((ve,oe)=>ve.start-oe.start);let le=0;for(let ve=1;ve<te.length;ve++){let oe=te[le],ne=te[ve],Pe=oe.start+oe.count,ke=ce(ne.start,v.width,4),Qe=ce(oe.start,v.width,4);ne.start<=Pe+1&&ke===Qe&&ce(ne.start+ne.count-1,v.width,4)===ke?oe.count=Math.max(oe.count,ne.start+ne.count-oe.start):(++le,te[le]=ne)}te.length=le+1;let $=n.getParameter(t.UNPACK_ROW_LENGTH),K=n.getParameter(t.UNPACK_SKIP_PIXELS),me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let ve=0,oe=te.length;ve<oe;ve++){let ne=te[ve],Pe=Math.floor(ne.start/4),ke=Math.ceil(ne.count/4),Qe=Pe%v.width,O=Math.floor(Pe/v.width),ie=ke,q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Qe,O,ie,q,V,Z,v.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,K),n.pixelStorei(t.UNPACK_SKIP_ROWS,me)}}function Ie(C,v,V){let Z=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=t.TEXTURE_3D);let Q=J(C,v),te=v.source;n.bindTexture(Z,C.__webglTexture,t.TEXTURE0+V);let le=i.get(te);if(te.version!==le.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let q=Ze.getPrimaries(Ze.workingColorSpace),ge=v.colorSpace===bi?null:Ze.getPrimaries(v.colorSpace),ae=v.colorSpace===bi||q===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let K=m(v.image,!1,s.maxTextureSize);K=ue(v,K);let me=r.convert(v.format,v.colorSpace),ve=r.convert(v.type),oe=E(v.internalFormat,me,ve,v.normalized,v.colorSpace,v.isVideoTexture);De(Z,v);let ne,Pe=v.mipmaps,ke=v.isVideoTexture!==!0,Qe=le.__version===void 0||Q===!0,O=te.dataReady,ie=S(v,K);if(v.isDepthTexture)oe=R(v.format===Yi,v.type),Qe&&(ke?n.texStorage2D(t.TEXTURE_2D,1,oe,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,oe,K.width,K.height,0,me,ve,null));else if(v.isDataTexture)if(Pe.length>0){ke&&Qe&&n.texStorage2D(t.TEXTURE_2D,ie,oe,Pe[0].width,Pe[0].height);for(let q=0,ge=Pe.length;q<ge;q++)ne=Pe[q],ke?O&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ne.width,ne.height,me,ve,ne.data):n.texImage2D(t.TEXTURE_2D,q,oe,ne.width,ne.height,0,me,ve,ne.data);v.generateMipmaps=!1}else ke?(Qe&&n.texStorage2D(t.TEXTURE_2D,ie,oe,K.width,K.height),O&&re(v,K,me,ve)):n.texImage2D(t.TEXTURE_2D,0,oe,K.width,K.height,0,me,ve,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ke&&Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,oe,Pe[0].width,Pe[0].height,K.depth);for(let q=0,ge=Pe.length;q<ge;q++)if(ne=Pe[q],v.format!==An)if(me!==null)if(ke){if(O)if(v.layerUpdates.size>0){let ae=Rh(ne.width,ne.height,v.format,v.type);for(let j of v.layerUpdates){let Me=ne.data.subarray(j*ae/ne.data.BYTES_PER_ELEMENT,(j+1)*ae/ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,j,ne.width,ne.height,1,me,Me)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ne.width,ne.height,K.depth,me,ne.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,oe,ne.width,ne.height,K.depth,0,ne.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ne.width,ne.height,K.depth,me,ve,ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,oe,ne.width,ne.height,K.depth,0,me,ve,ne.data)}else{ke&&Qe&&n.texStorage2D(t.TEXTURE_2D,ie,oe,Pe[0].width,Pe[0].height);for(let q=0,ge=Pe.length;q<ge;q++)ne=Pe[q],v.format!==An?me!==null?ke?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,ne.width,ne.height,me,ne.data):n.compressedTexImage2D(t.TEXTURE_2D,q,oe,ne.width,ne.height,0,ne.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?O&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ne.width,ne.height,me,ve,ne.data):n.texImage2D(t.TEXTURE_2D,q,oe,ne.width,ne.height,0,me,ve,ne.data)}else if(v.isDataArrayTexture)if(ke){if(Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,oe,K.width,K.height,K.depth),O)if(v.layerUpdates.size>0){let q=Rh(K.width,K.height,v.format,v.type);for(let ge of v.layerUpdates){let ae=K.data.subarray(ge*q/K.data.BYTES_PER_ELEMENT,(ge+1)*q/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ge,K.width,K.height,1,me,ve,ae)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,me,ve,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,oe,K.width,K.height,K.depth,0,me,ve,K.data);else if(v.isData3DTexture)ke?(Qe&&n.texStorage3D(t.TEXTURE_3D,ie,oe,K.width,K.height,K.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,me,ve,K.data)):n.texImage3D(t.TEXTURE_3D,0,oe,K.width,K.height,K.depth,0,me,ve,K.data);else if(v.isFramebufferTexture){if(Qe)if(ke)n.texStorage2D(t.TEXTURE_2D,ie,oe,K.width,K.height);else{let q=K.width,ge=K.height;for(let ae=0;ae<ie;ae++)n.texImage2D(t.TEXTURE_2D,ae,oe,q,ge,0,me,ve,null),q>>=1,ge>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){let q=t.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),K.parentNode!==q){q.appendChild(K),d.add(v),q.onpaint=Be=>{let At=Be.changedElements;for(let rt of d)At.includes(rt.image)&&(rt.needsUpdate=!0)},q.requestPaint();return}let ge=0,ae=t.RGBA,j=t.RGBA,Me=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,ge,ae,j,Me,K),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(ke&&Qe){let q=bt(Pe[0]);n.texStorage2D(t.TEXTURE_2D,ie,oe,q.width,q.height)}for(let q=0,ge=Pe.length;q<ge;q++)ne=Pe[q],ke?O&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,me,ve,ne):n.texImage2D(t.TEXTURE_2D,q,oe,me,ve,ne);v.generateMipmaps=!1}else if(ke){if(Qe){let q=bt(K);n.texStorage2D(t.TEXTURE_2D,ie,oe,q.width,q.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,ve,K)}else n.texImage2D(t.TEXTURE_2D,0,oe,me,ve,K);p(v)&&y(Z),le.__version=te.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Oe(C,v,V){if(v.image.length!==6)return;let Z=J(C,v),Q=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);let te=i.get(Q);if(Q.version!==te.__version||Z===!0){n.activeTexture(t.TEXTURE0+V);let le=Ze.getPrimaries(Ze.workingColorSpace),$=v.colorSpace===bi?null:Ze.getPrimaries(v.colorSpace),K=v.colorSpace===bi||le===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let me=v.isCompressedTexture||v.image[0].isCompressedTexture,ve=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let j=0;j<6;j++)!me&&!ve?oe[j]=m(v.image[j],!0,s.maxCubemapSize):oe[j]=ve?v.image[j].image:v.image[j],oe[j]=ue(v,oe[j]);let ne=oe[0],Pe=r.convert(v.format,v.colorSpace),ke=r.convert(v.type),Qe=E(v.internalFormat,Pe,ke,v.normalized,v.colorSpace),O=v.isVideoTexture!==!0,ie=te.__version===void 0||Z===!0,q=Q.dataReady,ge=S(v,ne);De(t.TEXTURE_CUBE_MAP,v);let ae;if(me){O&&ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Qe,ne.width,ne.height);for(let j=0;j<6;j++){ae=oe[j].mipmaps;for(let Me=0;Me<ae.length;Me++){let Be=ae[Me];v.format!==An?Pe!==null?O?q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,0,0,Be.width,Be.height,Pe,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,Qe,Be.width,Be.height,0,Be.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,0,0,Be.width,Be.height,Pe,ke,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,Qe,Be.width,Be.height,0,Pe,ke,Be.data)}}}else{if(ae=v.mipmaps,O&&ie){ae.length>0&&ge++;let j=bt(oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Qe,j.width,j.height)}for(let j=0;j<6;j++)if(ve){O?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,oe[j].width,oe[j].height,Pe,ke,oe[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Qe,oe[j].width,oe[j].height,0,Pe,ke,oe[j].data);for(let Me=0;Me<ae.length;Me++){let At=ae[Me].image[j].image;O?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,0,0,At.width,At.height,Pe,ke,At.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,Qe,At.width,At.height,0,Pe,ke,At.data)}}else{O?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pe,ke,oe[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Qe,Pe,ke,oe[j]);for(let Me=0;Me<ae.length;Me++){let Be=ae[Me];O?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,0,0,Pe,ke,Be.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,Qe,Pe,ke,Be.image[j])}}}p(v)&&y(t.TEXTURE_CUBE_MAP),te.__version=Q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ne(C,v,V,Z,Q,te){let le=r.convert(V.format,V.colorSpace),$=r.convert(V.type),K=E(V.internalFormat,le,$,V.normalized,V.colorSpace),me=i.get(v),ve=i.get(V);if(ve.__renderTarget=v,!me.__hasExternalTextures){let oe=Math.max(1,v.width>>te),ne=Math.max(1,v.height>>te);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,te,K,oe,ne,v.depth,0,le,$,null):n.texImage2D(Q,te,K,oe,ne,0,le,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),qe(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,Q,ve.__webglTexture,0,Lt(v)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,Q,ve.__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function vt(C,v,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),v.depthBuffer){let Z=v.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,te=R(v.stencilBuffer,Q),le=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;qe(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Lt(v),te,v.width,v.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Lt(v),te,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,te,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,C)}else{let Z=v.textures;for(let Q=0;Q<Z.length;Q++){let te=Z[Q],le=r.convert(te.format,te.colorSpace),$=r.convert(te.type),K=E(te.internalFormat,le,$,te.normalized,te.colorSpace);qe(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Lt(v),K,v.width,v.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Lt(v),K,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,K,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ye(C,v,V){let Z=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),De(t.TEXTURE_CUBE_MAP,v.depthTexture);let me=r.convert(v.depthTexture.format),ve=r.convert(v.depthTexture.type),oe;v.depthTexture.format===ti?oe=t.DEPTH_COMPONENT24:v.depthTexture.format===Yi&&(oe=t.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,oe,v.width,v.height,0,me,ve,null)}}else X(v.depthTexture,0);let te=Q.__webglTexture,le=Lt(v),$=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,K=v.depthTexture.format===Yi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===ti)qe(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,$,te,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,K,$,te,0);else if(v.depthTexture.format===Yi)qe(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,$,te,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,K,$,te,0);else throw new Error("Unknown depthTexture format")}function st(C){let v=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Z}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(V)for(let Z=0;Z<6;Z++)Ye(v.__webglFramebuffer[Z],C,Z);else{let Z=C.texture.mipmaps;Z&&Z.length>0?Ye(v.__webglFramebuffer[0],C,0):Ye(v.__webglFramebuffer,C,0)}else if(V){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=t.createRenderbuffer(),vt(v.__webglDepthbuffer[Z],C,!1);else{let Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,te)}}else{let Z=C.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),vt(v.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,te)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function gt(C,v,V){let Z=i.get(C);v!==void 0&&Ne(Z.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&st(C)}function $e(C){let v=C.texture,V=i.get(C),Z=i.get(v);C.addEventListener("dispose",x);let Q=C.textures,te=C.isWebGLCubeRenderTarget===!0,le=Q.length>1;if(le||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=v.version,o.memory.textures++),te){V.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[$]=[];for(let K=0;K<v.mipmaps.length;K++)V.__webglFramebuffer[$][K]=t.createFramebuffer()}else V.__webglFramebuffer[$]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)V.__webglFramebuffer[$]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(le)for(let $=0,K=Q.length;$<K;$++){let me=i.get(Q[$]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&qe(C)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<Q.length;$++){let K=Q[$];V.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[$]);let me=r.convert(K.format,K.colorSpace),ve=r.convert(K.type),oe=E(K.internalFormat,me,ve,K.normalized,K.colorSpace,C.isXRRenderTarget===!0),ne=Lt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,oe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,V.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),vt(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),De(t.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Ne(V.__webglFramebuffer[$][K],C,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,K);else Ne(V.__webglFramebuffer[$],C,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(v)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let $=0,K=Q.length;$<K;$++){let me=Q[$],ve=i.get(me),oe=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,ve.__webglTexture),De(oe,me),Ne(V.__webglFramebuffer,C,me,t.COLOR_ATTACHMENT0+$,oe,0),p(me)&&y(oe)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,Z.__webglTexture),De($,v),v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Ne(V.__webglFramebuffer[K],C,v,t.COLOR_ATTACHMENT0,$,K);else Ne(V.__webglFramebuffer,C,v,t.COLOR_ATTACHMENT0,$,0);p(v)&&y($),n.unbindTexture()}C.depthBuffer&&st(C)}function Pt(C){let v=C.textures;for(let V=0,Z=v.length;V<Z;V++){let Q=v[V];if(p(Q)){let te=M(C),le=i.get(Q).__webglTexture;n.bindTexture(te,le),y(te),n.unbindTexture()}}}let yt=[],ln=[];function B(C){if(C.samples>0){if(qe(C)===!1){let v=C.textures,V=C.width,Z=C.height,Q=t.COLOR_BUFFER_BIT,te=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(C),$=v.length>1;if($)for(let me=0;me<v.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let K=C.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let me=0;me<v.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[me]);let ve=i.get(v[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ve,0)}t.blitFramebuffer(0,0,V,Z,0,0,V,Z,Q,t.NEAREST),l===!0&&(yt.length=0,ln.length=0,yt.push(t.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(yt.push(te),ln.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ln)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let me=0;me<v.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,le.__webglColorRenderbuffer[me]);let ve=i.get(v[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let v=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function Lt(C){return Math.min(s.maxSamples,C.samples)}function qe(C){let v=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pt(C){let v=o.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function ue(C,v){let V=C.colorSpace,Z=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==no&&V!==bi&&(Ze.getTransfer(V)===tt?(Z!==An||Q!==rn)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",V)),v}function bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.getTextureUnits=z,this.setTextureUnits=A,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=se,this.rebindTextures=gt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function xE(t,e){function n(i,s=bi){let r,o=Ze.getTransfer(s);if(i===rn)return t.UNSIGNED_BYTE;if(i===Nl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Pl)return t.UNSIGNED_SHORT_5_5_5_1;if(i===xh)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_h)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===mh)return t.BYTE;if(i===gh)return t.SHORT;if(i===gr)return t.UNSIGNED_SHORT;if(i===Il)return t.INT;if(i===Gn)return t.UNSIGNED_INT;if(i===En)return t.FLOAT;if(i===ri)return t.HALF_FLOAT;if(i===vh)return t.ALPHA;if(i===yh)return t.RGB;if(i===An)return t.RGBA;if(i===ti)return t.DEPTH_COMPONENT;if(i===Yi)return t.DEPTH_STENCIL;if(i===Ll)return t.RED;if(i===Fl)return t.RED_INTEGER;if(i===qi)return t.RG;if(i===Dl)return t.RG_INTEGER;if(i===Ol)return t.RGBA_INTEGER;if(i===No||i===Po||i===Lo||i===Fo)if(o===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bl||i===Ul||i===kl||i===Vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zl||i===Hl||i===Gl||i===Wl||i===Xl||i===Do||i===$l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zl||i===Hl)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wl)return r.COMPRESSED_R11_EAC;if(i===Xl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Do)return r.COMPRESSED_RG11_EAC;if(i===$l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yl||i===ql||i===Zl||i===Kl||i===Jl||i===jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ql)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ql)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ec)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tc)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nc)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ic)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sc)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rc)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oc)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===lc||i===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ac)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uc||i===hc||i===Oo||i===dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===uc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var _E=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vE=`
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

}`,Gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new mo(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new pn({vertexShader:_E,fragmentShader:vE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yt(new _o(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends kn{constructor(e,n){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Gh,p={},y=n.getContextAttributes(),M=null,E=null,R=[],S=[],w=new we,x=null,T=new $t;T.viewport=new St;let N=new $t;N.viewport=new St;let I=[T,N],D=new Tl,k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=R[J];return ce===void 0&&(ce=new ar,R[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=R[J];return ce===void 0&&(ce=new ar,R[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=R[J];return ce===void 0&&(ce=new ar,R[J]=ce),ce.getHandSpace()};function A(J){let ce=S.indexOf(J.inputSource);if(ce===-1)return;let re=R[ce];re!==void 0&&(re.update(J.inputSource,J.frame,c||o),re.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",L);for(let J=0;J<R.length;J++){let ce=S[J];ce!==null&&(S[J]=null,R[J].disconnect(ce))}k=null,z=null,m.reset();for(let J in p)delete p[J];e.setRenderTarget(M),f=null,u=null,d=null,s=null,E=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",F),s.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ie=null,Oe=null;y.depth&&(Oe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=y.stencil?Yi:ti,Ie=y.stencil?xr:Gn);let Ne={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ne),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new fn(u.textureWidth,u.textureHeight,{format:An,type:rn,depthTexture:new Mi(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new fn(f.framebufferWidth,f.framebufferHeight,{format:An,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),De.setContext(s),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function L(J){for(let ce=0;ce<J.removed.length;ce++){let re=J.removed[ce],Ie=S.indexOf(re);Ie>=0&&(S[Ie]=null,R[Ie].disconnect(re))}for(let ce=0;ce<J.added.length;ce++){let re=J.added[ce],Ie=S.indexOf(re);if(Ie===-1){for(let Ne=0;Ne<R.length;Ne++)if(Ne>=S.length){S.push(re),Ie=Ne;break}else if(S[Ne]===null){S[Ne]=re,Ie=Ne;break}if(Ie===-1)break}let Oe=R[Ie];Oe&&Oe.connect(re)}}let X=new P,Y=new P;function ee(J,ce,re){X.setFromMatrixPosition(ce.matrixWorld),Y.setFromMatrixPosition(re.matrixWorld);let Ie=X.distanceTo(Y),Oe=ce.projectionMatrix.elements,Ne=re.projectionMatrix.elements,vt=Oe[14]/(Oe[10]-1),Ye=Oe[14]/(Oe[10]+1),st=(Oe[9]+1)/Oe[5],gt=(Oe[9]-1)/Oe[5],$e=(Oe[8]-1)/Oe[0],Pt=(Ne[8]+1)/Ne[0],yt=vt*$e,ln=vt*Pt,B=Ie/(-$e+Pt),Lt=B*-$e;if(ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Lt),J.translateZ(B),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Oe[10]===-1)J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let qe=vt+B,pt=Ye+B,ue=yt-Lt,bt=ln+(Ie-Lt),C=st*Ye/pt*qe,v=gt*Ye/pt*qe;J.projectionMatrix.makePerspective(ue,bt,C,v,qe,pt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function se(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ce=J.near,re=J.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(re=m.depthFar)),D.near=N.near=T.near=ce,D.far=N.far=T.far=re,(k!==D.near||z!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,z=D.far),D.layers.mask=J.layers.mask|6,T.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;let Ie=J.parent,Oe=D.cameras;se(D,Ie);for(let Ne=0;Ne<Oe.length;Ne++)se(Oe[Ne],Ie);Oe.length===2?ee(D,T,N):D.projectionMatrix.copy(T.projectionMatrix),xe(J,D,Ie)};function xe(J,ce,re){re===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(re.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=sr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(J){return p[J]};let ze=null;function et(J,ce){if(h=ce.getViewerPose(c||o),g=ce,h!==null){let re=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Ie=!1;re.length!==D.cameras.length&&(D.cameras.length=0,Ie=!0);for(let Ye=0;Ye<re.length;Ye++){let st=re[Ye],gt=null;if(f!==null)gt=f.getViewport(st);else{let Pt=d.getViewSubImage(u,st);gt=Pt.viewport,Ye===0&&(e.setRenderTargetTextures(E,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(E))}let $e=I[Ye];$e===void 0&&($e=new $t,$e.layers.enable(Ye),$e.viewport=new St,I[Ye]=$e),$e.matrix.fromArray(st.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(st.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(gt.x,gt.y,gt.width,gt.height),Ye===0&&(D.matrix.copy($e.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ie===!0&&D.cameras.push($e)}let Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Ye=d.getDepthInformation(re[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,s.renderState)}if(Oe&&Oe.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Ye=0;Ye<re.length;Ye++){let st=re[Ye].camera;if(st){let gt=p[st];gt||(gt=new mo,p[st]=gt);let $e=d.getCameraImage(st);gt.sourceTexture=$e}}}}for(let re=0;re<R.length;re++){let Ie=S[re],Oe=R[re];Ie!==null&&Oe!==void 0&&Oe.update(Ie,ce,c||o)}ze&&ze(J,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}let De=new pm;De.setAnimationLoop(et),this.setAnimationLoop=function(J){ze=J},this.dispose=function(){}}},yE=new at,ym=new Le;ym.set(-1,0,0,0,1,0,0,0,1);function SE(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Th(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),M=y.envMap,E=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(yE.makeRotationFromEuler(E)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ym),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ME(t,e,n,i){let s={},r={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let E=M.program;i.uniformBlockBinding(y,E)}function c(y,M){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",m));let R=M.program;i.updateUBOMapping(y,R);let S=e.render.frame;r[y.id]!==S&&(u(y),r[y.id]=S)}function h(y){let M=d();y.__bindingPointIndex=M;let E=t.createBuffer(),R=y.__size,S=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,E),E}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let M=s[y.id],E=y.uniforms,R=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let S=0,w=E.length;S<w;S++){let x=Array.isArray(E[S])?E[S]:[E[S]];for(let T=0,N=x.length;T<N;T++){let I=x[T];if(f(I,S,T,R)===!0){let D=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],z=0;for(let A=0;A<k.length;A++){let F=k[A],L=_(F);typeof F=="number"||typeof F=="boolean"?(I.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,D+z,I.__data)):F.isMatrix3?(I.__data[0]=F.elements[0],I.__data[1]=F.elements[1],I.__data[2]=F.elements[2],I.__data[3]=0,I.__data[4]=F.elements[3],I.__data[5]=F.elements[4],I.__data[6]=F.elements[5],I.__data[7]=0,I.__data[8]=F.elements[6],I.__data[9]=F.elements[7],I.__data[10]=F.elements[8],I.__data[11]=0):ArrayBuffer.isView(F)?I.__data.set(new F.constructor(F.buffer,F.byteOffset,I.__data.length)):(F.toArray(I.__data,z),z+=L.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(y,M,E,R){let S=y.value,w=M+"_"+E;if(R[w]===void 0)return typeof S=="number"||typeof S=="boolean"?R[w]=S:ArrayBuffer.isView(S)?R[w]=S.slice():R[w]=S.clone(),!0;{let x=R[w];if(typeof S=="number"||typeof S=="boolean"){if(x!==S)return R[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(x.equals(S)===!1)return x.copy(S),!0}}return!1}function g(y){let M=y.uniforms,E=0,R=16;for(let w=0,x=M.length;w<x;w++){let T=Array.isArray(M[w])?M[w]:[M[w]];for(let N=0,I=T.length;N<I;N++){let D=T[N],k=Array.isArray(D.value)?D.value:[D.value];for(let z=0,A=k.length;z<A;z++){let F=k[z],L=_(F),X=E%R,Y=X%L.boundary,ee=X+Y;E+=Y,ee!==0&&R-ee<L.storage&&(E+=R-ee),D.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=L.storage}}}let S=E%R;return S>0&&(E+=R-S),y.__size=E,y.__cache={},this}function _(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){let M=y.target;M.removeEventListener("dispose",m);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let y in s)t.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var bE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function EE(){return oi===null&&(oi=new co(bE,16,16,qi,ri),oi.name="DFG_LUT",oi.minFilter=Ht,oi.magFilter=Ht,oi.wrapS=Qn,oi.wrapT=Qn,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var vc=class{constructor(e={}){let{canvas:n=kp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let _=f,m=new Set([Ol,Dl,Fl]),p=new Set([rn,Gn,gr,xr,Nl,Pl]),y=new Uint32Array(4),M=new Int32Array(4),E=new P,R=null,S=null,w=[],x=[],T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,I=!1,D=null;this._outputColorSpace=Kt;let k=0,z=0,A=null,F=-1,L=null,X=new St,Y=new St,ee=null,se=new He(0),xe=0,ze=n.width,et=n.height,De=1,J=null,ce=null,re=new St(0,0,ze,et),Ie=new St(0,0,ze,et),Oe=!1,Ne=new lr,vt=!1,Ye=!1,st=new at,gt=new P,$e=new St,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function ln(){return A===null?De:1}let B=i;function Lt(b,U){return n.getContext(b,U)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"184"}`),n.addEventListener("webglcontextlost",j,!1),n.addEventListener("webglcontextrestored",Me,!1),n.addEventListener("webglcontextcreationerror",Be,!1),B===null){let U="webgl2";if(B=Lt(U,b),B===null)throw Lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Re("WebGLRenderer: "+b.message),b}let qe,pt,ue,bt,C,v,V,Z,Q,te,le,$,K,me,ve,oe,ne,Pe,ke,Qe,O,ie,q;function ge(){qe=new NM(B),qe.init(),O=new xE(B,qe),pt=new bM(B,qe,e,O),ue=new mE(B,qe),pt.reversedDepthBuffer&&u&&ue.buffers.depth.setReversed(!0),bt=new FM(B),C=new tE,v=new gE(B,qe,ue,C,pt,O,bt),V=new IM(N),Z=new Uv(B),ie=new SM(B,Z),Q=new PM(B,Z,bt,ie),te=new OM(B,Q,Z,ie,bt),Pe=new DM(B,pt,v),ve=new EM(C),le=new eE(N,V,qe,pt,ie,ve),$=new SE(N,C),K=new iE,me=new cE(qe),ne=new yM(N,V,ue,te,g,l),oe=new pE(N,te,pt),q=new ME(B,bt,pt,ue),ke=new MM(B,qe,bt),Qe=new LM(B,qe,bt),bt.programs=le.programs,N.capabilities=pt,N.extensions=qe,N.properties=C,N.renderLists=K,N.shadowMap=oe,N.state=ue,N.info=bt}ge(),_!==rn&&(T=new UM(_,n.width,n.height,s,r));let ae=new Wh(N,B);this.xr=ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(b){b!==void 0&&(De=b,this.setSize(ze,et,!1))},this.getSize=function(b){return b.set(ze,et)},this.setSize=function(b,U,W=!0){if(ae.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=b,et=U,n.width=Math.floor(b*De),n.height=Math.floor(U*De),W===!0&&(n.style.width=b+"px",n.style.height=U+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(ze*De,et*De).floor()},this.setDrawingBufferSize=function(b,U,W){ze=b,et=U,De=W,n.width=Math.floor(b*W),n.height=Math.floor(U*W),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===rn){Re("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Ce("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(X)},this.getViewport=function(b){return b.copy(re)},this.setViewport=function(b,U,W,H){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,U,W,H),ue.viewport(X.copy(re).multiplyScalar(De).round())},this.getScissor=function(b){return b.copy(Ie)},this.setScissor=function(b,U,W,H){b.isVector4?Ie.set(b.x,b.y,b.z,b.w):Ie.set(b,U,W,H),ue.scissor(Y.copy(Ie).multiplyScalar(De).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){ue.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){ce=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,W=!0){let H=0;if(b){let G=!1;if(A!==null){let pe=A.texture.format;G=m.has(pe)}if(G){let pe=A.texture.type,ye=p.has(pe),fe=ne.getClearColor(),Se=ne.getClearAlpha(),be=fe.r,Ue=fe.g,We=fe.b;ye?(y[0]=be,y[1]=Ue,y[2]=We,y[3]=Se,B.clearBufferuiv(B.COLOR,0,y)):(M[0]=be,M[1]=Ue,M[2]=We,M[3]=Se,B.clearBufferiv(B.COLOR,0,M))}else H|=B.COLOR_BUFFER_BIT}U&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){n.removeEventListener("webglcontextlost",j,!1),n.removeEventListener("webglcontextrestored",Me,!1),n.removeEventListener("webglcontextcreationerror",Be,!1),ne.dispose(),K.dispose(),me.dispose(),C.dispose(),V.dispose(),te.dispose(),ie.dispose(),q.dispose(),le.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Mf),ae.removeEventListener("sessionend",bf),cs.stop()};function j(b){b.preventDefault(),Eh("WebGLRenderer: Context Lost."),I=!0}function Me(){Eh("WebGLRenderer: Context Restored."),I=!1;let b=bt.autoReset,U=oe.enabled,W=oe.autoUpdate,H=oe.needsUpdate,G=oe.type;ge(),bt.autoReset=b,oe.enabled=U,oe.autoUpdate=W,oe.needsUpdate=H,oe.type=G}function Be(b){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function At(b){let U=b.target;U.removeEventListener("dispose",At),rt(U)}function rt(b){di(b),C.remove(b)}function di(b){let U=C.get(b).programs;U!==void 0&&(U.forEach(function(W){le.releaseProgram(W)}),b.isShaderMaterial&&le.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,W,H,G,pe){U===null&&(U=Pt);let ye=G.isMesh&&G.matrixWorld.determinant()<0,fe=O_(b,U,W,H,G);ue.setMaterial(H,ye);let Se=W.index,be=1;if(H.wireframe===!0){if(Se=Q.getWireframeAttribute(W),Se===void 0)return;be=2}let Ue=W.drawRange,We=W.attributes.position,Ee=Ue.start*be,ot=(Ue.start+Ue.count)*be;pe!==null&&(Ee=Math.max(Ee,pe.start*be),ot=Math.min(ot,(pe.start+pe.count)*be)),Se!==null?(Ee=Math.max(Ee,0),ot=Math.min(ot,Se.count)):We!=null&&(Ee=Math.max(Ee,0),ot=Math.min(ot,We.count));let Tt=ot-Ee;if(Tt<0||Tt===1/0)return;ie.setup(G,H,fe,W,Se);let Et,ht=ke;if(Se!==null&&(Et=Z.get(Se),ht=Qe,ht.setIndex(Et)),G.isMesh)H.wireframe===!0?(ue.setLineWidth(H.wireframeLinewidth*ln()),ht.setMode(B.LINES)):ht.setMode(B.TRIANGLES);else if(G.isLine){let Gt=H.linewidth;Gt===void 0&&(Gt=1),ue.setLineWidth(Gt*ln()),G.isLineSegments?ht.setMode(B.LINES):G.isLineLoop?ht.setMode(B.LINE_LOOP):ht.setMode(B.LINE_STRIP)}else G.isPoints?ht.setMode(B.POINTS):G.isSprite&&ht.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Gt=G._multiDrawStarts,_e=G._multiDrawCounts,cn=G._multiDrawCount,je=Se?Z.get(Se).bytesPerElement:1,Sn=C.get(H).currentProgram.getUniforms();for(let Jn=0;Jn<cn;Jn++)Sn.setValue(B,"_gl_DrawID",Jn),ht.render(Gt[Jn]/je,_e[Jn])}else if(G.isInstancedMesh)ht.renderInstances(Ee,Tt,G.count);else if(W.isInstancedBufferGeometry){let Gt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,Gt);ht.renderInstances(Ee,Tt,_e)}else ht.render(Ee,Tt)};function Kn(b,U,W){b.transparent===!0&&b.side===bn&&b.forceSinglePass===!1?(b.side=Jt,b.needsUpdate=!0,_a(b,U,W),b.side=vi,b.needsUpdate=!0,_a(b,U,W),b.side=bn):_a(b,U,W)}this.compile=function(b,U,W=null){W===null&&(W=b),S=me.get(W),S.init(U),x.push(S),W.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),b!==W&&b.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),S.setupLights();let H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let pe=G.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){let fe=pe[ye];Kn(fe,W,G),H.add(fe)}else Kn(pe,W,G),H.add(pe)}),S=x.pop(),H},this.compileAsync=function(b,U,W=null){let H=this.compile(b,U,W);return new Promise(G=>{function pe(){if(H.forEach(function(ye){C.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){G(b);return}setTimeout(pe,10)}qe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let yu=null;function F_(b){yu&&yu(b)}function Mf(){cs.stop()}function bf(){cs.start()}let cs=new pm;cs.setAnimationLoop(F_),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(b){yu=b,ae.setAnimationLoop(b),b===null?cs.stop():cs.start()},ae.addEventListener("sessionstart",Mf),ae.addEventListener("sessionend",bf),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(b,U);let W=ae.enabled===!0&&ae.isPresenting===!0,H=T!==null&&(A===null||W)&&T.begin(N,A);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,U,A),S=me.get(b,x.length),S.init(U),S.state.textureUnits=v.getTextureUnits(),x.push(S),st.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ne.setFromProjectionMatrix(st,Un,U.reversedDepth),Ye=this.localClippingEnabled,vt=ve.init(this.clippingPlanes,Ye),R=K.get(b,w.length),R.init(),w.push(R),ae.enabled===!0&&ae.isPresenting===!0){let ye=N.xr.getDepthSensingMesh();ye!==null&&Su(ye,U,-1/0,N.sortObjects)}Su(b,U,0,N.sortObjects),R.finish(),N.sortObjects===!0&&R.sort(J,ce),yt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,yt&&ne.addToRenderList(R,b),this.info.render.frame++,vt===!0&&ve.beginShadows();let G=S.state.shadowsArray;if(oe.render(G,b,U),vt===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&T.hasRenderPass())===!1){let ye=R.opaque,fe=R.transmissive;if(S.setupLights(),U.isArrayCamera){let Se=U.cameras;if(fe.length>0)for(let be=0,Ue=Se.length;be<Ue;be++){let We=Se[be];Af(ye,fe,b,We)}yt&&ne.render(b);for(let be=0,Ue=Se.length;be<Ue;be++){let We=Se[be];Ef(R,b,We,We.viewport)}}else fe.length>0&&Af(ye,fe,b,U),yt&&ne.render(b),Ef(R,b,U)}A!==null&&z===0&&(v.updateMultisampleRenderTarget(A),v.updateRenderTargetMipmap(A)),H&&T.end(N),b.isScene===!0&&b.onAfterRender(N,b,U),ie.resetDefaultState(),F=-1,L=null,x.pop(),x.length>0?(S=x[x.length-1],v.setTextureUnits(S.state.textureUnits),vt===!0&&ve.setGlobalState(N.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?R=w[w.length-1]:R=null,D!==null&&D.renderEnd()};function Su(b,U,W,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)S.pushLightProbeGrid(b);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ne.intersectsSprite(b)){H&&$e.setFromMatrixPosition(b.matrixWorld).applyMatrix4(st);let ye=te.update(b),fe=b.material;fe.visible&&R.push(b,ye,fe,W,$e.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ne.intersectsObject(b))){let ye=te.update(b),fe=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),$e.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),$e.copy(ye.boundingSphere.center)),$e.applyMatrix4(b.matrixWorld).applyMatrix4(st)),Array.isArray(fe)){let Se=ye.groups;for(let be=0,Ue=Se.length;be<Ue;be++){let We=Se[be],Ee=fe[We.materialIndex];Ee&&Ee.visible&&R.push(b,ye,Ee,W,$e.z,We)}}else fe.visible&&R.push(b,ye,fe,W,$e.z,null)}}let pe=b.children;for(let ye=0,fe=pe.length;ye<fe;ye++)Su(pe[ye],U,W,H)}function Ef(b,U,W,H){let{opaque:G,transmissive:pe,transparent:ye}=b;S.setupLightsView(W),vt===!0&&ve.setGlobalState(N.clippingPlanes,W),H&&ue.viewport(X.copy(H)),G.length>0&&xa(G,U,W),pe.length>0&&xa(pe,U,W),ye.length>0&&xa(ye,U,W),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Af(b,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[H.id]===void 0){let Ee=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[H.id]=new fn(1,1,{generateMipmaps:!0,type:Ee?ri:rn,minFilter:$i,samples:Math.max(4,pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let pe=S.state.transmissionRenderTarget[H.id],ye=H.viewport||X;pe.setSize(ye.z*N.transmissionResolutionScale,ye.w*N.transmissionResolutionScale);let fe=N.getRenderTarget(),Se=N.getActiveCubeFace(),be=N.getActiveMipmapLevel();N.setRenderTarget(pe),N.getClearColor(se),xe=N.getClearAlpha(),xe<1&&N.setClearColor(16777215,.5),N.clear(),yt&&ne.render(W);let Ue=N.toneMapping;N.toneMapping=Hn;let We=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),S.setupLightsView(H),vt===!0&&ve.setGlobalState(N.clippingPlanes,H),xa(b,W,H),v.updateMultisampleRenderTarget(pe),v.updateRenderTargetMipmap(pe),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ot=0,Tt=U.length;ot<Tt;ot++){let Et=U[ot],{object:ht,geometry:Gt,material:_e,group:cn}=Et;if(_e.side===bn&&ht.layers.test(H.layers)){let je=_e.side;_e.side=Jt,_e.needsUpdate=!0,Tf(ht,W,H,Gt,_e,cn),_e.side=je,_e.needsUpdate=!0,Ee=!0}}Ee===!0&&(v.updateMultisampleRenderTarget(pe),v.updateRenderTargetMipmap(pe))}N.setRenderTarget(fe,Se,be),N.setClearColor(se,xe),We!==void 0&&(H.viewport=We),N.toneMapping=Ue}function xa(b,U,W){let H=U.isScene===!0?U.overrideMaterial:null;for(let G=0,pe=b.length;G<pe;G++){let ye=b[G],{object:fe,geometry:Se,group:be}=ye,Ue=ye.material;Ue.allowOverride===!0&&H!==null&&(Ue=H),fe.layers.test(W.layers)&&Tf(fe,U,W,Se,Ue,be)}}function Tf(b,U,W,H,G,pe){b.onBeforeRender(N,U,W,H,G,pe),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(N,U,W,H,b,pe),G.transparent===!0&&G.side===bn&&G.forceSinglePass===!1?(G.side=Jt,G.needsUpdate=!0,N.renderBufferDirect(W,U,H,G,b,pe),G.side=vi,G.needsUpdate=!0,N.renderBufferDirect(W,U,H,G,b,pe),G.side=bn):N.renderBufferDirect(W,U,H,G,b,pe),b.onAfterRender(N,U,W,H,G,pe)}function _a(b,U,W){U.isScene!==!0&&(U=Pt);let H=C.get(b),G=S.state.lights,pe=S.state.shadowsArray,ye=G.state.version,fe=le.getParameters(b,G.state,pe,U,W,S.state.lightProbeGridArray),Se=le.getProgramCacheKey(fe),be=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let Ue=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=V.get(b.envMap||H.environment,Ue),H.envMapRotation=H.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,be===void 0&&(b.addEventListener("dispose",At),be=new Map,H.programs=be);let We=be.get(Se);if(We!==void 0){if(H.currentProgram===We&&H.lightsStateVersion===ye)return wf(b,fe),We}else fe.uniforms=le.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,W,fe),b.onBeforeCompile(fe,N),We=le.acquireProgram(fe,Se),be.set(Se,We),H.uniforms=fe.uniforms;let Ee=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ee.clippingPlanes=ve.uniform),wf(b,fe),H.needsLights=U_(b),H.lightsStateVersion=ye,H.needsLights&&(Ee.ambientLightColor.value=G.state.ambient,Ee.lightProbe.value=G.state.probe,Ee.directionalLights.value=G.state.directional,Ee.directionalLightShadows.value=G.state.directionalShadow,Ee.spotLights.value=G.state.spot,Ee.spotLightShadows.value=G.state.spotShadow,Ee.rectAreaLights.value=G.state.rectArea,Ee.ltc_1.value=G.state.rectAreaLTC1,Ee.ltc_2.value=G.state.rectAreaLTC2,Ee.pointLights.value=G.state.point,Ee.pointLightShadows.value=G.state.pointShadow,Ee.hemisphereLights.value=G.state.hemi,Ee.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ee.spotLightMatrix.value=G.state.spotLightMatrix,Ee.spotLightMap.value=G.state.spotLightMap,Ee.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=S.state.lightProbeGridArray.length>0,H.currentProgram=We,H.uniformsList=null,We}function Cf(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Sr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function wf(b,U){let W=C.get(b);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function D_(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;E.setFromMatrixPosition(U.matrixWorld);for(let W=0,H=b.length;W<H;W++){let G=b[W];if(G.texture!==null&&G.boundingBox.containsPoint(E))return G}return null}function O_(b,U,W,H,G){U.isScene!==!0&&(U=Pt),v.resetTextureUnits();let pe=U.fog,ye=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,fe=A===null?N.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ze.workingColorSpace,Se=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,be=V.get(H.envMap||ye,Se),Ue=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color,Et=Hn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Et=N.toneMapping);let ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Gt=ht!==void 0?ht.length:0,_e=C.get(H),cn=S.state.lights;if(vt===!0&&(Ye===!0||b!==L)){let mt=b===L&&H.id===F;ve.setState(H,b,mt)}let je=!1;H.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==cn.state.version||_e.outputColorSpace!==fe||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==be||H.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ve.numPlanes||_e.numIntersection!==ve.numIntersection)||_e.vertexAlphas!==Ue||_e.vertexTangents!==We||_e.morphTargets!==Ee||_e.morphNormals!==ot||_e.morphColors!==Tt||_e.toneMapping!==Et||_e.morphTargetsCount!==Gt||!!_e.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,_e.__version=H.version);let Sn=_e.currentProgram;je===!0&&(Sn=_a(H,U,G),D&&H.isNodeMaterial&&D.onUpdateProgram(H,Sn,_e));let Jn=!1,Ri=!1,ks=!1,dt=Sn.getUniforms(),Ct=_e.uniforms;if(ue.useProgram(Sn.program)&&(Jn=!0,Ri=!0,ks=!0),H.id!==F&&(F=H.id,Ri=!0),_e.needsLights){let mt=D_(S.state.lightProbeGridArray,G);_e.lightProbeGrid!==mt&&(_e.lightProbeGrid=mt,Ri=!0)}if(Jn||L!==b){ue.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),dt.setValue(B,"projectionMatrix",b.projectionMatrix),dt.setValue(B,"viewMatrix",b.matrixWorldInverse);let Ni=dt.map.cameraPosition;Ni!==void 0&&Ni.setValue(B,gt.setFromMatrixPosition(b.matrixWorld)),pt.logarithmicDepthBuffer&&dt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,Ri=!0,ks=!0)}if(_e.needsLights&&(cn.state.directionalShadowMap.length>0&&dt.setValue(B,"directionalShadowMap",cn.state.directionalShadowMap,v),cn.state.spotShadowMap.length>0&&dt.setValue(B,"spotShadowMap",cn.state.spotShadowMap,v),cn.state.pointShadowMap.length>0&&dt.setValue(B,"pointShadowMap",cn.state.pointShadowMap,v)),G.isSkinnedMesh){dt.setOptional(B,G,"bindMatrix"),dt.setOptional(B,G,"bindMatrixInverse");let mt=G.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),dt.setValue(B,"boneTexture",mt.boneTexture,v))}G.isBatchedMesh&&(dt.setOptional(B,G,"batchingTexture"),dt.setValue(B,"batchingTexture",G._matricesTexture,v),dt.setOptional(B,G,"batchingIdTexture"),dt.setValue(B,"batchingIdTexture",G._indirectTexture,v),dt.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&dt.setValue(B,"batchingColorTexture",G._colorsTexture,v));let Ii=W.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&Pe.update(G,W,Sn),(Ri||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,dt.setValue(B,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Ct.envMapIntensity.value=U.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=EE()),Ri){if(dt.setValue(B,"toneMappingExposure",N.toneMappingExposure),_e.needsLights&&B_(Ct,ks),pe&&H.fog===!0&&$.refreshFogUniforms(Ct,pe),$.refreshMaterialUniforms(Ct,H,De,et,S.state.transmissionRenderTarget[b.id]),_e.needsLights&&_e.lightProbeGrid){let mt=_e.lightProbeGrid;Ct.probesSH.value=mt.texture,Ct.probesMin.value.copy(mt.boundingBox.min),Ct.probesMax.value.copy(mt.boundingBox.max),Ct.probesResolution.value.copy(mt.resolution)}Sr.upload(B,Cf(_e),Ct,v)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Sr.upload(B,Cf(_e),Ct,v),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(B,"center",G.center),dt.setValue(B,"modelViewMatrix",G.modelViewMatrix),dt.setValue(B,"normalMatrix",G.normalMatrix),dt.setValue(B,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let mt=H.uniformsGroups;for(let Ni=0,Vs=mt.length;Ni<Vs;Ni++){let Rf=mt[Ni];q.update(Rf,Sn),q.bind(Rf,Sn)}}return Sn}function B_(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function U_(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,W){let H=C.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),C.get(b.texture).__webglTexture=U,C.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let W=C.get(b);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};let k_=B.createFramebuffer();this.setRenderTarget=function(b,U=0,W=0){A=b,k=U,z=W;let H=null,G=!1,pe=!1;if(b){let fe=C.get(b);if(fe.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(B.FRAMEBUFFER,fe.__webglFramebuffer),X.copy(b.viewport),Y.copy(b.scissor),ee=b.scissorTest,ue.viewport(X),ue.scissor(Y),ue.setScissorTest(ee),F=-1;return}else if(fe.__webglFramebuffer===void 0)v.setupRenderTarget(b);else if(fe.__hasExternalTextures)v.rebindTextures(b,C.get(b.texture).__webglTexture,C.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ue=b.depthTexture;if(fe.__boundDepthTexture!==Ue){if(Ue!==null&&C.has(Ue)&&(b.width!==Ue.image.width||b.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(b)}}let Se=b.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(pe=!0);let be=C.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(be[U])?H=be[U][W]:H=be[U],G=!0):b.samples>0&&v.useMultisampledRTT(b)===!1?H=C.get(b).__webglMultisampledFramebuffer:Array.isArray(be)?H=be[W]:H=be,X.copy(b.viewport),Y.copy(b.scissor),ee=b.scissorTest}else X.copy(re).multiplyScalar(De).floor(),Y.copy(Ie).multiplyScalar(De).floor(),ee=Oe;if(W!==0&&(H=k_),ue.bindFramebuffer(B.FRAMEBUFFER,H)&&ue.drawBuffers(b,H),ue.viewport(X),ue.scissor(Y),ue.setScissorTest(ee),G){let fe=C.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,W)}else if(pe){let fe=U;for(let Se=0;Se<b.textures.length;Se++){let be=C.get(b.textures[Se]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Se,be.__webglTexture,W,fe)}}else if(b!==null&&W!==0){let fe=C.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fe.__webglTexture,W)}F=-1},this.readRenderTargetPixels=function(b,U,W,H,G,pe,ye,fe=0){if(!(b&&b.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=C.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){ue.bindFramebuffer(B.FRAMEBUFFER,Se);try{let be=b.textures[fe],Ue=be.format,We=be.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe),!pt.textureFormatReadable(Ue)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(We)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&W>=0&&W<=b.height-G&&B.readPixels(U,W,H,G,O.convert(Ue),O.convert(We),pe)}finally{let be=A!==null?C.get(A).__webglFramebuffer:null;ue.bindFramebuffer(B.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(b,U,W,H,G,pe,ye,fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=C.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se)if(U>=0&&U<=b.width-H&&W>=0&&W<=b.height-G){ue.bindFramebuffer(B.FRAMEBUFFER,Se);let be=b.textures[fe],Ue=be.format,We=be.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe),!pt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.bufferData(B.PIXEL_PACK_BUFFER,pe.byteLength,B.STREAM_READ),B.readPixels(U,W,H,G,O.convert(Ue),O.convert(We),0);let ot=A!==null?C.get(A).__webglFramebuffer:null;ue.bindFramebuffer(B.FRAMEBUFFER,ot);let Tt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await zp(B,Tt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pe),B.deleteBuffer(Ee),B.deleteSync(Tt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,W=0){let H=Math.pow(2,-W),G=Math.floor(b.image.width*H),pe=Math.floor(b.image.height*H),ye=U!==null?U.x:0,fe=U!==null?U.y:0;v.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,ye,fe,G,pe),ue.unbindTexture()};let V_=B.createFramebuffer(),z_=B.createFramebuffer();this.copyTextureToTexture=function(b,U,W=null,H=null,G=0,pe=0){let ye,fe,Se,be,Ue,We,Ee,ot,Tt,Et=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(W!==null)ye=W.max.x-W.min.x,fe=W.max.y-W.min.y,Se=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,Ue=W.min.y,We=W.isBox3?W.min.z:0;else{let Ct=Math.pow(2,-G);ye=Math.floor(Et.width*Ct),fe=Math.floor(Et.height*Ct),b.isDataArrayTexture?Se=Et.depth:b.isData3DTexture?Se=Math.floor(Et.depth*Ct):Se=1,be=0,Ue=0,We=0}H!==null?(Ee=H.x,ot=H.y,Tt=H.z):(Ee=0,ot=0,Tt=0);let ht=O.convert(U.format),Gt=O.convert(U.type),_e;U.isData3DTexture?(v.setTexture3D(U,0),_e=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(v.setTexture2DArray(U,0),_e=B.TEXTURE_2D_ARRAY):(v.setTexture2D(U,0),_e=B.TEXTURE_2D),ue.activeTexture(B.TEXTURE0),ue.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),ue.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ue.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let cn=ue.getParameter(B.UNPACK_ROW_LENGTH),je=ue.getParameter(B.UNPACK_IMAGE_HEIGHT),Sn=ue.getParameter(B.UNPACK_SKIP_PIXELS),Jn=ue.getParameter(B.UNPACK_SKIP_ROWS),Ri=ue.getParameter(B.UNPACK_SKIP_IMAGES);ue.pixelStorei(B.UNPACK_ROW_LENGTH,Et.width),ue.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et.height),ue.pixelStorei(B.UNPACK_SKIP_PIXELS,be),ue.pixelStorei(B.UNPACK_SKIP_ROWS,Ue),ue.pixelStorei(B.UNPACK_SKIP_IMAGES,We);let ks=b.isDataArrayTexture||b.isData3DTexture,dt=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let Ct=C.get(b),Ii=C.get(U),mt=C.get(Ct.__renderTarget),Ni=C.get(Ii.__renderTarget);ue.bindFramebuffer(B.READ_FRAMEBUFFER,mt.__webglFramebuffer),ue.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Vs=0;Vs<Se;Vs++)ks&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,C.get(b).__webglTexture,G,We+Vs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,C.get(U).__webglTexture,pe,Tt+Vs)),B.blitFramebuffer(be,Ue,ye,fe,Ee,ot,ye,fe,B.DEPTH_BUFFER_BIT,B.NEAREST);ue.bindFramebuffer(B.READ_FRAMEBUFFER,null),ue.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||C.has(b)){let Ct=C.get(b),Ii=C.get(U);ue.bindFramebuffer(B.READ_FRAMEBUFFER,V_),ue.bindFramebuffer(B.DRAW_FRAMEBUFFER,z_);for(let mt=0;mt<Se;mt++)ks?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.__webglTexture,G,We+mt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ct.__webglTexture,G),dt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ii.__webglTexture,pe,Tt+mt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ii.__webglTexture,pe),G!==0?B.blitFramebuffer(be,Ue,ye,fe,Ee,ot,ye,fe,B.COLOR_BUFFER_BIT,B.NEAREST):dt?B.copyTexSubImage3D(_e,pe,Ee,ot,Tt+mt,be,Ue,ye,fe):B.copyTexSubImage2D(_e,pe,Ee,ot,be,Ue,ye,fe);ue.bindFramebuffer(B.READ_FRAMEBUFFER,null),ue.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else dt?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(_e,pe,Ee,ot,Tt,ye,fe,Se,ht,Gt,Et.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(_e,pe,Ee,ot,Tt,ye,fe,Se,ht,Et.data):B.texSubImage3D(_e,pe,Ee,ot,Tt,ye,fe,Se,ht,Gt,Et):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,pe,Ee,ot,ye,fe,ht,Gt,Et.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,pe,Ee,ot,Et.width,Et.height,ht,Et.data):B.texSubImage2D(B.TEXTURE_2D,pe,Ee,ot,ye,fe,ht,Gt,Et);ue.pixelStorei(B.UNPACK_ROW_LENGTH,cn),ue.pixelStorei(B.UNPACK_IMAGE_HEIGHT,je),ue.pixelStorei(B.UNPACK_SKIP_PIXELS,Sn),ue.pixelStorei(B.UNPACK_SKIP_ROWS,Jn),ue.pixelStorei(B.UNPACK_SKIP_IMAGES,Ri),pe===0&&U.generateMipmaps&&B.generateMipmap(_e),ue.unbindTexture()},this.initRenderTarget=function(b){C.get(b).__webglFramebuffer===void 0&&v.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?v.setTextureCube(b,0):b.isData3DTexture?v.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?v.setTexture2DArray(b,0):v.setTexture2D(b,0),ue.unbindTexture()},this.resetState=function(){k=0,z=0,A=null,ue.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}};var Sm=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","ON","ON","ET","ET","ET","ON","ON","ON","ON","ON","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","ON","ET","ET","ET","ET","ON","ON","ON","ON","L","ON","ON","BN","ON","ON","ET","ET","EN","EN","ON","L","ON","ON","ON","EN","L","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L"],Xh=[[697,698,"ON"],[706,719,"ON"],[722,735,"ON"],[741,749,"ON"],[751,767,"ON"],[768,879,"NSM"],[884,885,"ON"],[894,894,"ON"],[900,901,"ON"],[903,903,"ON"],[1014,1014,"ON"],[1155,1161,"NSM"],[1418,1418,"ON"],[1421,1422,"ON"],[1423,1423,"ET"],[1424,1424,"R"],[1425,1469,"NSM"],[1470,1470,"R"],[1471,1471,"NSM"],[1472,1472,"R"],[1473,1474,"NSM"],[1475,1475,"R"],[1476,1477,"NSM"],[1478,1478,"R"],[1479,1479,"NSM"],[1480,1535,"R"],[1536,1541,"AN"],[1542,1543,"ON"],[1544,1544,"AL"],[1545,1546,"ET"],[1547,1547,"AL"],[1548,1548,"CS"],[1549,1549,"AL"],[1550,1551,"ON"],[1552,1562,"NSM"],[1563,1610,"AL"],[1611,1631,"NSM"],[1632,1641,"AN"],[1642,1642,"ET"],[1643,1644,"AN"],[1645,1647,"AL"],[1648,1648,"NSM"],[1649,1749,"AL"],[1750,1756,"NSM"],[1757,1757,"AN"],[1758,1758,"ON"],[1759,1764,"NSM"],[1765,1766,"AL"],[1767,1768,"NSM"],[1769,1769,"ON"],[1770,1773,"NSM"],[1774,1775,"AL"],[1776,1785,"EN"],[1786,1808,"AL"],[1809,1809,"NSM"],[1810,1839,"AL"],[1840,1866,"NSM"],[1867,1957,"AL"],[1958,1968,"NSM"],[1969,1983,"AL"],[1984,2026,"R"],[2027,2035,"NSM"],[2036,2037,"R"],[2038,2041,"ON"],[2042,2044,"R"],[2045,2045,"NSM"],[2046,2069,"R"],[2070,2073,"NSM"],[2074,2074,"R"],[2075,2083,"NSM"],[2084,2084,"R"],[2085,2087,"NSM"],[2088,2088,"R"],[2089,2093,"NSM"],[2094,2136,"R"],[2137,2139,"NSM"],[2140,2143,"R"],[2144,2191,"AL"],[2192,2193,"AN"],[2194,2198,"AL"],[2199,2207,"NSM"],[2208,2249,"AL"],[2250,2273,"NSM"],[2274,2274,"AN"],[2275,2306,"NSM"],[2362,2362,"NSM"],[2364,2364,"NSM"],[2369,2376,"NSM"],[2381,2381,"NSM"],[2385,2391,"NSM"],[2402,2403,"NSM"],[2433,2433,"NSM"],[2492,2492,"NSM"],[2497,2500,"NSM"],[2509,2509,"NSM"],[2530,2531,"NSM"],[2546,2547,"ET"],[2555,2555,"ET"],[2558,2558,"NSM"],[2561,2562,"NSM"],[2620,2620,"NSM"],[2625,2626,"NSM"],[2631,2632,"NSM"],[2635,2637,"NSM"],[2641,2641,"NSM"],[2672,2673,"NSM"],[2677,2677,"NSM"],[2689,2690,"NSM"],[2748,2748,"NSM"],[2753,2757,"NSM"],[2759,2760,"NSM"],[2765,2765,"NSM"],[2786,2787,"NSM"],[2801,2801,"ET"],[2810,2815,"NSM"],[2817,2817,"NSM"],[2876,2876,"NSM"],[2879,2879,"NSM"],[2881,2884,"NSM"],[2893,2893,"NSM"],[2901,2902,"NSM"],[2914,2915,"NSM"],[2946,2946,"NSM"],[3008,3008,"NSM"],[3021,3021,"NSM"],[3059,3064,"ON"],[3065,3065,"ET"],[3066,3066,"ON"],[3072,3072,"NSM"],[3076,3076,"NSM"],[3132,3132,"NSM"],[3134,3136,"NSM"],[3142,3144,"NSM"],[3146,3149,"NSM"],[3157,3158,"NSM"],[3170,3171,"NSM"],[3192,3198,"ON"],[3201,3201,"NSM"],[3260,3260,"NSM"],[3276,3277,"NSM"],[3298,3299,"NSM"],[3328,3329,"NSM"],[3387,3388,"NSM"],[3393,3396,"NSM"],[3405,3405,"NSM"],[3426,3427,"NSM"],[3457,3457,"NSM"],[3530,3530,"NSM"],[3538,3540,"NSM"],[3542,3542,"NSM"],[3633,3633,"NSM"],[3636,3642,"NSM"],[3647,3647,"ET"],[3655,3662,"NSM"],[3761,3761,"NSM"],[3764,3772,"NSM"],[3784,3790,"NSM"],[3864,3865,"NSM"],[3893,3893,"NSM"],[3895,3895,"NSM"],[3897,3897,"NSM"],[3898,3901,"ON"],[3953,3966,"NSM"],[3968,3972,"NSM"],[3974,3975,"NSM"],[3981,3991,"NSM"],[3993,4028,"NSM"],[4038,4038,"NSM"],[4141,4144,"NSM"],[4146,4151,"NSM"],[4153,4154,"NSM"],[4157,4158,"NSM"],[4184,4185,"NSM"],[4190,4192,"NSM"],[4209,4212,"NSM"],[4226,4226,"NSM"],[4229,4230,"NSM"],[4237,4237,"NSM"],[4253,4253,"NSM"],[4957,4959,"NSM"],[5008,5017,"ON"],[5120,5120,"ON"],[5760,5760,"WS"],[5787,5788,"ON"],[5906,5908,"NSM"],[5938,5939,"NSM"],[5970,5971,"NSM"],[6002,6003,"NSM"],[6068,6069,"NSM"],[6071,6077,"NSM"],[6086,6086,"NSM"],[6089,6099,"NSM"],[6107,6107,"ET"],[6109,6109,"NSM"],[6128,6137,"ON"],[6144,6154,"ON"],[6155,6157,"NSM"],[6158,6158,"BN"],[6159,6159,"NSM"],[6277,6278,"NSM"],[6313,6313,"NSM"],[6432,6434,"NSM"],[6439,6440,"NSM"],[6450,6450,"NSM"],[6457,6459,"NSM"],[6464,6464,"ON"],[6468,6469,"ON"],[6622,6655,"ON"],[6679,6680,"NSM"],[6683,6683,"NSM"],[6742,6742,"NSM"],[6744,6750,"NSM"],[6752,6752,"NSM"],[6754,6754,"NSM"],[6757,6764,"NSM"],[6771,6780,"NSM"],[6783,6783,"NSM"],[6832,6877,"NSM"],[6880,6891,"NSM"],[6912,6915,"NSM"],[6964,6964,"NSM"],[6966,6970,"NSM"],[6972,6972,"NSM"],[6978,6978,"NSM"],[7019,7027,"NSM"],[7040,7041,"NSM"],[7074,7077,"NSM"],[7080,7081,"NSM"],[7083,7085,"NSM"],[7142,7142,"NSM"],[7144,7145,"NSM"],[7149,7149,"NSM"],[7151,7153,"NSM"],[7212,7219,"NSM"],[7222,7223,"NSM"],[7376,7378,"NSM"],[7380,7392,"NSM"],[7394,7400,"NSM"],[7405,7405,"NSM"],[7412,7412,"NSM"],[7416,7417,"NSM"],[7616,7679,"NSM"],[8125,8125,"ON"],[8127,8129,"ON"],[8141,8143,"ON"],[8157,8159,"ON"],[8173,8175,"ON"],[8189,8190,"ON"],[8192,8202,"WS"],[8203,8205,"BN"],[8207,8207,"R"],[8208,8231,"ON"],[8232,8232,"WS"],[8233,8233,"B"],[8234,8238,"BN"],[8239,8239,"CS"],[8240,8244,"ET"],[8245,8259,"ON"],[8260,8260,"CS"],[8261,8286,"ON"],[8287,8287,"WS"],[8288,8303,"BN"],[8304,8304,"EN"],[8308,8313,"EN"],[8314,8315,"ES"],[8316,8318,"ON"],[8320,8329,"EN"],[8330,8331,"ES"],[8332,8334,"ON"],[8352,8399,"ET"],[8400,8432,"NSM"],[8448,8449,"ON"],[8451,8454,"ON"],[8456,8457,"ON"],[8468,8468,"ON"],[8470,8472,"ON"],[8478,8483,"ON"],[8485,8485,"ON"],[8487,8487,"ON"],[8489,8489,"ON"],[8494,8494,"ET"],[8506,8507,"ON"],[8512,8516,"ON"],[8522,8525,"ON"],[8528,8543,"ON"],[8585,8587,"ON"],[8592,8721,"ON"],[8722,8722,"ES"],[8723,8723,"ET"],[8724,9013,"ON"],[9083,9108,"ON"],[9110,9257,"ON"],[9280,9290,"ON"],[9312,9351,"ON"],[9352,9371,"EN"],[9450,9899,"ON"],[9901,10239,"ON"],[10496,11123,"ON"],[11126,11263,"ON"],[11493,11498,"ON"],[11503,11505,"NSM"],[11513,11519,"ON"],[11647,11647,"NSM"],[11744,11775,"NSM"],[11776,11869,"ON"],[11904,11929,"ON"],[11931,12019,"ON"],[12032,12245,"ON"],[12272,12287,"ON"],[12288,12288,"WS"],[12289,12292,"ON"],[12296,12320,"ON"],[12330,12333,"NSM"],[12336,12336,"ON"],[12342,12343,"ON"],[12349,12351,"ON"],[12441,12442,"NSM"],[12443,12444,"ON"],[12448,12448,"ON"],[12539,12539,"ON"],[12736,12773,"ON"],[12783,12783,"ON"],[12829,12830,"ON"],[12880,12895,"ON"],[12924,12926,"ON"],[12977,12991,"ON"],[13004,13007,"ON"],[13175,13178,"ON"],[13278,13279,"ON"],[13311,13311,"ON"],[19904,19967,"ON"],[42128,42182,"ON"],[42509,42511,"ON"],[42607,42610,"NSM"],[42611,42611,"ON"],[42612,42621,"NSM"],[42622,42623,"ON"],[42654,42655,"NSM"],[42736,42737,"NSM"],[42752,42785,"ON"],[42888,42888,"ON"],[43010,43010,"NSM"],[43014,43014,"NSM"],[43019,43019,"NSM"],[43045,43046,"NSM"],[43048,43051,"ON"],[43052,43052,"NSM"],[43064,43065,"ET"],[43124,43127,"ON"],[43204,43205,"NSM"],[43232,43249,"NSM"],[43263,43263,"NSM"],[43302,43309,"NSM"],[43335,43345,"NSM"],[43392,43394,"NSM"],[43443,43443,"NSM"],[43446,43449,"NSM"],[43452,43453,"NSM"],[43493,43493,"NSM"],[43561,43566,"NSM"],[43569,43570,"NSM"],[43573,43574,"NSM"],[43587,43587,"NSM"],[43596,43596,"NSM"],[43644,43644,"NSM"],[43696,43696,"NSM"],[43698,43700,"NSM"],[43703,43704,"NSM"],[43710,43711,"NSM"],[43713,43713,"NSM"],[43756,43757,"NSM"],[43766,43766,"NSM"],[43882,43883,"ON"],[44005,44005,"NSM"],[44008,44008,"NSM"],[44013,44013,"NSM"],[64285,64285,"R"],[64286,64286,"NSM"],[64287,64296,"R"],[64297,64297,"ES"],[64298,64335,"R"],[64336,64450,"AL"],[64451,64466,"ON"],[64467,64829,"AL"],[64830,64847,"ON"],[64848,64911,"AL"],[64912,64913,"ON"],[64914,64967,"AL"],[64968,64975,"ON"],[64976,65007,"BN"],[65008,65020,"AL"],[65021,65023,"ON"],[65024,65039,"NSM"],[65040,65049,"ON"],[65056,65071,"NSM"],[65072,65103,"ON"],[65104,65104,"CS"],[65105,65105,"ON"],[65106,65106,"CS"],[65108,65108,"ON"],[65109,65109,"CS"],[65110,65118,"ON"],[65119,65119,"ET"],[65120,65121,"ON"],[65122,65123,"ES"],[65124,65126,"ON"],[65128,65128,"ON"],[65129,65130,"ET"],[65131,65131,"ON"],[65136,65278,"AL"],[65279,65279,"BN"],[65281,65282,"ON"],[65283,65285,"ET"],[65286,65290,"ON"],[65291,65291,"ES"],[65292,65292,"CS"],[65293,65293,"ES"],[65294,65295,"CS"],[65296,65305,"EN"],[65306,65306,"CS"],[65307,65312,"ON"],[65339,65344,"ON"],[65371,65381,"ON"],[65504,65505,"ET"],[65506,65508,"ON"],[65509,65510,"ET"],[65512,65518,"ON"],[65520,65528,"BN"],[65529,65533,"ON"],[65534,65535,"BN"],[65793,65793,"ON"],[65856,65932,"ON"],[65936,65948,"ON"],[65952,65952,"ON"],[66045,66045,"NSM"],[66272,66272,"NSM"],[66273,66299,"EN"],[66422,66426,"NSM"],[67584,67870,"R"],[67871,67871,"ON"],[67872,68096,"R"],[68097,68099,"NSM"],[68100,68100,"R"],[68101,68102,"NSM"],[68103,68107,"R"],[68108,68111,"NSM"],[68112,68151,"R"],[68152,68154,"NSM"],[68155,68158,"R"],[68159,68159,"NSM"],[68160,68324,"R"],[68325,68326,"NSM"],[68327,68408,"R"],[68409,68415,"ON"],[68416,68863,"R"],[68864,68899,"AL"],[68900,68903,"NSM"],[68904,68911,"AL"],[68912,68921,"AN"],[68922,68927,"AL"],[68928,68937,"AN"],[68938,68968,"R"],[68969,68973,"NSM"],[68974,68974,"ON"],[68975,69215,"R"],[69216,69246,"AN"],[69247,69290,"R"],[69291,69292,"NSM"],[69293,69311,"R"],[69312,69327,"AL"],[69328,69336,"ON"],[69337,69369,"AL"],[69370,69375,"NSM"],[69376,69423,"R"],[69424,69445,"AL"],[69446,69456,"NSM"],[69457,69487,"AL"],[69488,69505,"R"],[69506,69509,"NSM"],[69510,69631,"R"],[69633,69633,"NSM"],[69688,69702,"NSM"],[69714,69733,"ON"],[69744,69744,"NSM"],[69747,69748,"NSM"],[69759,69761,"NSM"],[69811,69814,"NSM"],[69817,69818,"NSM"],[69826,69826,"NSM"],[69888,69890,"NSM"],[69927,69931,"NSM"],[69933,69940,"NSM"],[70003,70003,"NSM"],[70016,70017,"NSM"],[70070,70078,"NSM"],[70089,70092,"NSM"],[70095,70095,"NSM"],[70191,70193,"NSM"],[70196,70196,"NSM"],[70198,70199,"NSM"],[70206,70206,"NSM"],[70209,70209,"NSM"],[70367,70367,"NSM"],[70371,70378,"NSM"],[70400,70401,"NSM"],[70459,70460,"NSM"],[70464,70464,"NSM"],[70502,70508,"NSM"],[70512,70516,"NSM"],[70587,70592,"NSM"],[70606,70606,"NSM"],[70608,70608,"NSM"],[70610,70610,"NSM"],[70625,70626,"NSM"],[70712,70719,"NSM"],[70722,70724,"NSM"],[70726,70726,"NSM"],[70750,70750,"NSM"],[70835,70840,"NSM"],[70842,70842,"NSM"],[70847,70848,"NSM"],[70850,70851,"NSM"],[71090,71093,"NSM"],[71100,71101,"NSM"],[71103,71104,"NSM"],[71132,71133,"NSM"],[71219,71226,"NSM"],[71229,71229,"NSM"],[71231,71232,"NSM"],[71264,71276,"ON"],[71339,71339,"NSM"],[71341,71341,"NSM"],[71344,71349,"NSM"],[71351,71351,"NSM"],[71453,71453,"NSM"],[71455,71455,"NSM"],[71458,71461,"NSM"],[71463,71467,"NSM"],[71727,71735,"NSM"],[71737,71738,"NSM"],[71995,71996,"NSM"],[71998,71998,"NSM"],[72003,72003,"NSM"],[72148,72151,"NSM"],[72154,72155,"NSM"],[72160,72160,"NSM"],[72193,72198,"NSM"],[72201,72202,"NSM"],[72243,72248,"NSM"],[72251,72254,"NSM"],[72263,72263,"NSM"],[72273,72278,"NSM"],[72281,72283,"NSM"],[72330,72342,"NSM"],[72344,72345,"NSM"],[72544,72544,"NSM"],[72546,72548,"NSM"],[72550,72550,"NSM"],[72752,72758,"NSM"],[72760,72765,"NSM"],[72850,72871,"NSM"],[72874,72880,"NSM"],[72882,72883,"NSM"],[72885,72886,"NSM"],[73009,73014,"NSM"],[73018,73018,"NSM"],[73020,73021,"NSM"],[73023,73029,"NSM"],[73031,73031,"NSM"],[73104,73105,"NSM"],[73109,73109,"NSM"],[73111,73111,"NSM"],[73459,73460,"NSM"],[73472,73473,"NSM"],[73526,73530,"NSM"],[73536,73536,"NSM"],[73538,73538,"NSM"],[73562,73562,"NSM"],[73685,73692,"ON"],[73693,73696,"ET"],[73697,73713,"ON"],[78912,78912,"NSM"],[78919,78933,"NSM"],[90398,90409,"NSM"],[90413,90415,"NSM"],[92912,92916,"NSM"],[92976,92982,"NSM"],[94031,94031,"NSM"],[94095,94098,"NSM"],[94178,94178,"ON"],[94180,94180,"NSM"],[113821,113822,"NSM"],[113824,113827,"BN"],[117760,117973,"ON"],[118e3,118009,"EN"],[118010,118012,"ON"],[118016,118451,"ON"],[118458,118480,"ON"],[118496,118512,"ON"],[118528,118573,"NSM"],[118576,118598,"NSM"],[119143,119145,"NSM"],[119155,119162,"BN"],[119163,119170,"NSM"],[119173,119179,"NSM"],[119210,119213,"NSM"],[119273,119274,"ON"],[119296,119361,"ON"],[119362,119364,"NSM"],[119365,119365,"ON"],[119552,119638,"ON"],[120513,120513,"ON"],[120539,120539,"ON"],[120571,120571,"ON"],[120597,120597,"ON"],[120629,120629,"ON"],[120655,120655,"ON"],[120687,120687,"ON"],[120713,120713,"ON"],[120745,120745,"ON"],[120771,120771,"ON"],[120782,120831,"EN"],[121344,121398,"NSM"],[121403,121452,"NSM"],[121461,121461,"NSM"],[121476,121476,"NSM"],[121499,121503,"NSM"],[121505,121519,"NSM"],[122880,122886,"NSM"],[122888,122904,"NSM"],[122907,122913,"NSM"],[122915,122916,"NSM"],[122918,122922,"NSM"],[123023,123023,"NSM"],[123184,123190,"NSM"],[123566,123566,"NSM"],[123628,123631,"NSM"],[123647,123647,"ET"],[124140,124143,"NSM"],[124398,124399,"NSM"],[124643,124643,"NSM"],[124646,124646,"NSM"],[124654,124655,"NSM"],[124661,124661,"NSM"],[124928,125135,"R"],[125136,125142,"NSM"],[125143,125251,"R"],[125252,125258,"NSM"],[125259,126063,"R"],[126064,126143,"AL"],[126144,126207,"R"],[126208,126287,"AL"],[126288,126463,"R"],[126464,126703,"AL"],[126704,126705,"ON"],[126706,126719,"AL"],[126720,126975,"R"],[126976,127019,"ON"],[127024,127123,"ON"],[127136,127150,"ON"],[127153,127167,"ON"],[127169,127183,"ON"],[127185,127221,"ON"],[127232,127242,"EN"],[127243,127247,"ON"],[127279,127279,"ON"],[127338,127343,"ON"],[127405,127405,"ON"],[127584,127589,"ON"],[127744,128728,"ON"],[128732,128748,"ON"],[128752,128764,"ON"],[128768,128985,"ON"],[128992,129003,"ON"],[129008,129008,"ON"],[129024,129035,"ON"],[129040,129095,"ON"],[129104,129113,"ON"],[129120,129159,"ON"],[129168,129197,"ON"],[129200,129211,"ON"],[129216,129217,"ON"],[129232,129240,"ON"],[129280,129623,"ON"],[129632,129645,"ON"],[129648,129660,"ON"],[129664,129674,"ON"],[129678,129734,"ON"],[129736,129736,"ON"],[129741,129756,"ON"],[129759,129770,"ON"],[129775,129784,"ON"],[129792,129938,"ON"],[129940,130031,"ON"],[130032,130041,"EN"],[130042,130042,"ON"],[131070,131071,"BN"],[196606,196607,"BN"],[262142,262143,"BN"],[327678,327679,"BN"],[393214,393215,"BN"],[458750,458751,"BN"],[524286,524287,"BN"],[589822,589823,"BN"],[655358,655359,"BN"],[720894,720895,"BN"],[786430,786431,"BN"],[851966,851967,"BN"],[917502,917759,"BN"],[917760,917999,"NSM"],[918e3,921599,"BN"],[983038,983039,"BN"],[1048574,1048575,"BN"],[1114110,1114111,"BN"]];function TE(t){if(t<=255)return Sm[t];let e=0,n=Xh.length-1;for(;e<=n;){let i=e+n>>1,s=Xh[i];if(t<s[0]){n=i-1;continue}if(t>s[1]){e=i+1;continue}return s[2]}return"L"}function CE(t){let e=t.length;if(e===0)return null;let n=new Array(e),i=!1;for(let c=0;c<e;){let h=t.charCodeAt(c),d=h,u=1;if(h>=55296&&h<=56319&&c+1<e){let g=t.charCodeAt(c+1);g>=56320&&g<=57343&&(d=(h-55296<<10)+(g-56320)+65536,u=2)}let f=TE(d);(f==="R"||f==="AL"||f==="AN")&&(i=!0);for(let g=0;g<u;g++)n[c+g]=f;c+=u}if(!i)return null;let s=0;for(let c=0;c<e;c++){let h=n[c];if(h==="L"){s=0;break}if(h==="R"||h==="AL"){s=1;break}}let r=new Int8Array(e);for(let c=0;c<e;c++)r[c]=s;let o=s&1?"R":"L",a=o,l=a;for(let c=0;c<e;c++)n[c]==="NSM"?n[c]=l:l=n[c];l=a;for(let c=0;c<e;c++){let h=n[c];h==="EN"?n[c]=l==="AL"?"AN":"EN":(h==="R"||h==="L"||h==="AL")&&(l=h)}for(let c=0;c<e;c++)n[c]==="AL"&&(n[c]="R");for(let c=1;c<e-1;c++)n[c]==="ES"&&n[c-1]==="EN"&&n[c+1]==="EN"&&(n[c]="EN"),n[c]==="CS"&&(n[c-1]==="EN"||n[c-1]==="AN")&&n[c+1]===n[c-1]&&(n[c]=n[c-1]);for(let c=0;c<e;c++){if(n[c]!=="EN")continue;let h;for(h=c-1;h>=0&&n[h]==="ET";h--)n[h]="EN";for(h=c+1;h<e&&n[h]==="ET";h++)n[h]="EN"}for(let c=0;c<e;c++){let h=n[c];(h==="WS"||h==="ES"||h==="ET"||h==="CS")&&(n[c]="ON")}l=a;for(let c=0;c<e;c++){let h=n[c];h==="EN"?n[c]=l==="L"?"L":"EN":(h==="R"||h==="L")&&(l=h)}for(let c=0;c<e;c++){if(n[c]!=="ON")continue;let h=c+1;for(;h<e&&n[h]==="ON";)h++;let d=c>0?n[c-1]:a,u=h<e?n[h]:a,f=d!=="L"?"R":"L";if(f===(u!=="L"?"R":"L"))for(let _=c;_<h;_++)n[_]=f;c=h-1}for(let c=0;c<e;c++)n[c]==="ON"&&(n[c]=o);for(let c=0;c<e;c++){let h=n[c];(r[c]&1)===0?h==="R"?r[c]++:(h==="AN"||h==="EN")&&(r[c]+=2):(h==="L"||h==="AN"||h==="EN")&&r[c]++}return r}function Mm(t,e){let n=CE(t);if(n===null)return null;let i=new Int8Array(e.length);for(let s=0;s<e.length;s++)i[s]=n[e[s]];return i}var wE=/[ \t\n\r\f]+/g,RE=/[\t\n\r\f]| {2,}|^ | $/;function IE(t){let e=t??"normal";return e==="pre-wrap"?{mode:e,preserveOrdinarySpaces:!0,preserveHardBreaks:!0}:{mode:e,preserveOrdinarySpaces:!1,preserveHardBreaks:!1}}function NE(t){if(!RE.test(t))return t;let e=t.replace(wE," ");return e.charCodeAt(0)===32&&(e=e.slice(1)),e.length>0&&e.charCodeAt(e.length-1)===32&&(e=e.slice(0,-1)),e}function PE(t){return/[\r\f]/.test(t)?t.replace(/\r\n/g,`
`).replace(/[\r\f]/g,`
`):t}var $h=null,LE;function FE(){return $h===null&&($h=new Intl.Segmenter(LE,{granularity:"word"})),$h}var DE=/\p{Script=Arabic}/u,Ss=/\p{M}/u,qh=/\p{Nd}/u;function bm(t){return DE.test(t)}function Em(t){return t>=19968&&t<=40959||t>=13312&&t<=19903||t>=131072&&t<=173791||t>=173824&&t<=177983||t>=177984&&t<=178207||t>=178208&&t<=183983||t>=183984&&t<=191471||t>=191472&&t<=192093||t>=194560&&t<=195103||t>=196608&&t<=201551||t>=201552&&t<=205743||t>=205744&&t<=210041||t>=63744&&t<=64255||t>=12288&&t<=12351||t>=12352&&t<=12447||t>=12448&&t<=12543||t>=12592&&t<=12687||t>=44032&&t<=55215||t>=65280&&t<=65519}function Tn(t){for(let e=0;e<t.length;e++){let n=t.charCodeAt(e);if(!(n<12288)){if(n>=55296&&n<=56319&&e+1<t.length){let i=t.charCodeAt(e+1);if(i>=56320&&i<=57343){let s=(n-55296<<10)+(i-56320)+65536;if(Em(s))return!0;e++;continue}}if(Em(n))return!0}}return!1}function OE(t){let e=Ho(t);return e!==null&&(Mc.has(e)||Ki.has(e))}var BE=new Set(["\xA0","\u202F","\u2060","\uFEFF"]),UE=new Set(["-","\u2010","\u2013","\u2014"]);function kE(t){let e=Ho(t);return e!==null&&BE.has(e)}function VE(t){let e=Ho(t);return e!==null&&UE.has(e)}function Zh(t,e){return kE(t)?!1:e?!(OE(t)||VE(t)):!0}var Mc=new Set(["\uFF0C","\uFF0E","\uFF01","\uFF1A","\uFF1B","\uFF1F","\u3001","\u3002","\u30FB","\uFF09","\u3015","\u3009","\u300B","\u300D","\u300F","\u3011","\u3017","\u3019","\u301B","\u30FC","\u3005","\u303B","\u309D","\u309E","\u30FD","\u30FE"]),zo=new Set(['"',"(","[","{","\xA1","\xBF","\u201C","\u2018","\u201A","\u201E","\xAB","\u2039","\u2E18","\uFF08","\u3014","\u3008","\u300A","\u300C","\u300E","\u3010","\u3016","\u3018","\u301A"]),Kh=new Set(["'","\u2019"]),Ki=new Set([".",",","!","?",":",";","\u060C","\u061B","\u061F","\u0964","\u0965","\u104A","\u104B","\u104C","\u104D","\u104F",")","]","}","%",'"',"\u201D","\u2019","\xBB","\u203A","\u2026"]),zE=new Set([":",".","\u060C","\u061B"]),HE=new Set(["\u104F"]),GE=new Set(["\u201D","\u2019","\xBB","\u203A","\u300D","\u300F","\u3011","\u300B","\u3009","\u3015","\uFF09"]);function WE(t){if(Jh(t))return!0;let e=!1;for(let n of t){if(Ki.has(n)||Ec(n)){e=!0;continue}if(!(e&&Ss.test(n)))return!1}return e}function XE(t){for(let e of t)if(!Mc.has(e)&&!Ki.has(e))return!1;return t.length>0}function $E(t){if(Jh(t))return!0;for(let e of t)if(!zo.has(e)&&!Kh.has(e)&&!Ss.test(e)&&!Ec(e))return!1;return t.length>0}function Jh(t){let e=!1;for(let n of t)if(!(n==="\\"||Ss.test(n))){if(zo.has(n)||Ki.has(n)||Kh.has(n)){e=!0;continue}return!1}return e}function bc(t,e){let n=e-1;if(n<=0)return Math.max(n,0);let i=t.charCodeAt(n);if(i<56320||i>57343)return n;let s=n-1;if(s<0)return n;let r=t.charCodeAt(s);return r>=55296&&r<=56319?s:n}function Ho(t){if(t.length===0)return null;let e=bc(t,t.length);return t.slice(e)}function YE(t){for(let e of t)if(!Ss.test(e))return e;return null}function qE(t){for(let e=t.length;e>0;){let n=bc(t,e),i=t.slice(n,e);if(!Ss.test(i))return i;e=n}return null}var ZE=[36,37,43,43,92,92,162,165,176,177,1423,1423,1545,1547,1642,1642,2046,2047,2546,2547,2553,2555,2801,2801,3065,3065,3449,3449,3647,3647,6107,6107,8240,8247,8279,8279,8352,8399,8451,8451,8457,8457,8470,8470,8722,8723,43064,43064,65020,65020,65129,65130,65284,65285,65504,65505,65509,65510,73693,73696,123647,123647,126124,126124,126128,126128];function KE(t,e){for(let n=0;n<e.length;n+=2)if(t>=e[n]&&t<=e[n+1])return!0;return!1}function Ec(t){let e=t.codePointAt(0);return e!==void 0&&KE(e,ZE)}function JE(t){let e=qE(t);return e!==null&&Ec(e)}function jE(t){let e=YE(t);return e!==null&&qh.test(e)}function QE(t){let e=Array.from(t),n=e.length;for(;n>0;){let i=e[n-1];if(Ss.test(i)){n--;continue}if(zo.has(i)||Kh.has(i)){n--;continue}break}return n<=0||n===e.length?null:{head:e.slice(0,n).join(""),tail:e.slice(n).join("")}}function e1(t,e,n){return n==="text"&&!e&&t.length===1&&t!=="-"&&t!=="\u2014"?t:null}function Am(t,e,n,i){let s=e[i],r=t[i];if(s==null)return r;let o=n[i];if(r.length===o)return r;let a=s.repeat(o);return t[i]=a,a}function Tm(t,e){return t&&e!==null&&zE.has(e)}function t1(t){let e=Ho(t);return e!==null&&HE.has(e)}function n1(t){if(t.length<2||t[0]!==" ")return null;let e=t.slice(1);return/^\p{M}+$/u.test(e)?{space:" ",marks:e}:null}function Ac(t){let e=t.length;for(;e>0;){let n=bc(t,e),i=t.slice(n,e);if(GE.has(i))return!0;if(!Ki.has(i))return!1;e=n}return!1}function i1(t,e){if(e.preserveOrdinarySpaces||e.preserveHardBreaks){if(t===" ")return"preserved-space";if(t==="	")return"tab";if(e.preserveHardBreaks&&t===`
`)return"hard-break"}return t===" "?"space":t==="\xA0"||t==="\u202F"||t==="\u2060"||t==="\uFEFF"?"glue":t==="\u200B"?"zero-width-break":t==="\xAD"?"soft-hyphen":"text"}var s1=/[\x20\t\n\xA0\xAD\u200B\u202F\u2060\uFEFF]/;function Wn(t){return t.length===1?t[0]:t.join("")}function r1(t,e){let n=[];for(let i=t.length-1;i>=0;i--)n.push(t[i]);return n.push(e),Wn(n)}function o1(t,e,n,i){if(!s1.test(t))return[{text:t,isWordLike:e,kind:"text",start:n}];let s=[],r=null,o=[],a=n,l=!1,c=0;for(let h of t){let d=i1(h,i),u=d==="text"&&e;if(r!==null&&d===r&&u===l){o.push(h),c+=h.length;continue}r!==null&&s.push({text:Wn(o),isWordLike:l,kind:r,start:a}),r=d,o=[h],a=n+c,l=u,c+=h.length}return r!==null&&s.push({text:Wn(o),isWordLike:l,kind:r,start:a}),s}function Yh(t){return t==="space"||t==="preserved-space"||t==="zero-width-break"||t==="hard-break"}var a1=/^[A-Za-z][A-Za-z0-9+.-]*:$/;function l1(t,e){let n=t.texts[e];return n.startsWith("www.")?!0:a1.test(n)&&e+1<t.len&&t.kinds[e+1]==="text"&&t.texts[e+1]==="//"}function c1(t){return t.includes("?")&&(t.includes("://")||t.startsWith("www."))}function u1(t){let e=t.texts.slice(),n=t.isWordLike.slice(),i=t.kinds.slice(),s=t.starts.slice();for(let o=0;o<t.len;o++){if(i[o]!=="text"||!l1(t,o))continue;let a=[e[o]],l=o+1;for(;l<t.len&&!Yh(i[l]);){a.push(e[l]),n[o]=!0;let c=e[l].includes("?");if(i[l]="text",e[l]="",l++,c)break}e[o]=Wn(a)}let r=0;for(let o=0;o<e.length;o++){let a=e[o];a.length!==0&&(r!==o&&(e[r]=a,n[r]=n[o],i[r]=i[o],s[r]=s[o]),r++)}return e.length=r,n.length=r,i.length=r,s.length=r,{len:r,texts:e,isWordLike:n,kinds:i,starts:s}}function h1(t){let e=[],n=[],i=[],s=[];for(let r=0;r<t.len;r++){let o=t.texts[r];if(e.push(o),n.push(t.isWordLike[r]),i.push(t.kinds[r]),s.push(t.starts[r]),!c1(o))continue;let a=r+1;if(a>=t.len||Yh(t.kinds[a]))continue;let l=[],c=t.starts[a],h=a;for(;h<t.len&&!Yh(t.kinds[h]);)l.push(t.texts[h]),h++;l.length>0&&(e.push(Wn(l)),n.push(!0),i.push("text"),s.push(c),r=h-1)}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:s}}var d1=new Set([":","-","/","\xD7",",",".","+","\u2013","\u2014"]),f1=new Set([".",",",":",";"]);function Cm(t){for(let e=t.length;e>0;){let n=bc(t,e),i=t.slice(n,e);if(Ss.test(i)){e=n;continue}return f1.has(i)||Ec(i)}return!1}function p1(t,e){return e&&!Tn(t)}function wm(t){for(let e of t)if(qh.test(e))return!0;return!1}function Vo(t){if(t.length===0)return!1;for(let e of t)if(!(qh.test(e)||d1.has(e)))return!1;return!0}function m1(t){let e=[],n=[],i=[],s=[];for(let r=0;r<t.len;r++){let o=t.texts[r],a=t.kinds[r];if(a==="text"&&Vo(o)&&wm(o)){let l=[o],c=r+1;for(;c<t.len&&t.kinds[c]==="text"&&Vo(t.texts[c]);)l.push(t.texts[c]),c++;e.push(Wn(l)),n.push(!0),i.push("text"),s.push(t.starts[r]),r=c-1;continue}e.push(o),n.push(t.isWordLike[r]),i.push(a),s.push(t.starts[r])}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:s}}function g1(t){let e=[],n=[],i=[],s=[];for(let r=0;r<t.len;r++){let o=t.texts[r],a=t.kinds[r],l=t.isWordLike[r];if(a==="text"&&Cm(o)&&(l||JE(o))&&!Tn(o)){let c=[o],h=!0,d=r+1;for(;h&&d<t.len&&t.kinds[d]==="text"&&p1(t.texts[d],t.isWordLike[d]);){let u=t.texts[d];c.push(u),h=Cm(u),d++}e.push(Wn(c)),n.push(!0),i.push("text"),s.push(t.starts[r]),r=d-1;continue}e.push(o),n.push(l),i.push(a),s.push(t.starts[r])}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:s}}function x1(t){let e=[],n=[],i=[],s=[];for(let r=0;r<t.len;r++){let o=t.texts[r];if(t.kinds[r]==="text"&&o.includes("-")){let a=o.split("-"),l=a.length>1;for(let c=0;c<a.length;c++){let h=a[c];if(!l)break;(h.length===0||!wm(h)||!Vo(h))&&(l=!1)}if(l){let c=0;for(let h=0;h<a.length;h++){let d=a[h],u=h<a.length-1?`${d}-`:d;e.push(u),n.push(!0),i.push("text"),s.push(t.starts[r]+c),c+=u.length}continue}}e.push(o),n.push(t.isWordLike[r]),i.push(t.kinds[r]),s.push(t.starts[r])}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:s}}function _1(t){let e=[],n=[],i=[],s=[],r=0;for(;r<t.len;){let o=[t.texts[r]],a=t.isWordLike[r],l=t.kinds[r],c=t.starts[r];if(l==="glue"){let h=[o[0]],d=c;for(r++;r<t.len&&t.kinds[r]==="glue";)h.push(t.texts[r]),r++;let u=Wn(h);if(r<t.len&&t.kinds[r]==="text")o[0]=u,o.push(t.texts[r]),a=t.isWordLike[r],l="text",c=d,r++;else{e.push(u),n.push(!1),i.push("glue"),s.push(d);continue}}else r++;if(l==="text")for(;r<t.len&&t.kinds[r]==="glue";){let h=[];for(;r<t.len&&t.kinds[r]==="glue";)h.push(t.texts[r]),r++;let d=Wn(h);if(r<t.len&&t.kinds[r]==="text"){o.push(d,t.texts[r]),a=a||t.isWordLike[r],r++;continue}o.push(d)}e.push(Wn(o)),n.push(a),i.push(l),s.push(c)}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:s}}function v1(t){let e=t.texts.slice(),n=t.isWordLike.slice(),i=t.kinds.slice(),s=t.starts.slice();for(let r=0;r<e.length-1;r++){if(i[r]!=="text"||i[r+1]!=="text"||!Tn(e[r])||!Tn(e[r+1]))continue;let o=QE(e[r]);o!==null&&(e[r]=o.head,e[r+1]=o.tail+e[r+1],s[r+1]=s[r]+o.head.length)}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:s}}function y1(t,e,n){let i=FE(),s=0,r=[],o=[],a=[],l=[],c=[],h=[],d=[],u=[],f=[],g=[],_=[],m=[];for(let S of i.segment(t))for(let w of o1(S.segment,S.isWordLike??!1,S.index,n)){let F=function(){h[A]!==null&&(o[A]=[Am(r,h,d,A)],h[A]=null),o[A].push(w.text),a[A]=a[A]||w.isWordLike,u[A]=u[A]||N,f[A]=f[A]||I,g[A]=k,_[A]=z,m[A]=Tm(f[A],D)},x=w.kind==="text",T=e1(w.text,w.isWordLike,w.kind),N=Tn(w.text),I=bm(w.text),D=Ho(w.text),k=Ac(w.text),z=t1(w.text),A=s-1;e.carryCJKAfterClosingQuote&&x&&s>0&&l[A]==="text"&&N&&u[A]&&g[A]||x&&s>0&&l[A]==="text"&&XE(w.text)&&u[A]||x&&s>0&&l[A]==="text"&&_[A]?F():x&&s>0&&l[A]==="text"&&w.isWordLike&&I&&m[A]?(F(),a[A]=!0):T!==null&&s>0&&l[A]==="text"&&h[A]===T?d[A]=(d[A]??1)+1:x&&!w.isWordLike&&s>0&&l[A]==="text"&&!u[A]&&(WE(w.text)||w.text==="-"&&a[A])?F():(r[s]=w.text,o[s]=[w.text],a[s]=w.isWordLike,l[s]=w.kind,c[s]=w.start,h[s]=T,d[s]=T===null?0:1,u[s]=N,f[s]=I,g[s]=k,_[s]=z,m[s]=Tm(I,D),s++)}for(let S=0;S<s;S++){if(h[S]!==null){r[S]=Am(r,h,d,S);continue}r[S]=Wn(o[S])}for(let S=1;S<s;S++)l[S]==="text"&&!a[S]&&Jh(r[S])&&l[S-1]==="text"&&!u[S-1]&&(r[S-1]+=r[S],a[S-1]=a[S-1]||a[S],r[S]="");let p=Array.from({length:s},()=>null),y=-1;for(let S=s-1;S>=0;S--){let w=r[S];if(w.length!==0){if(l[S]==="text"&&!a[S]&&y>=0&&l[y]==="text"&&($E(w)||w==="-"&&jE(r[y]))){let x=p[y]??[];x.push(w),p[y]=x,c[y]=c[S],r[S]="";continue}y=S}}for(let S=0;S<s;S++){let w=p[S];w!=null&&(r[S]=r1(w,r[S]))}let M=0;for(let S=0;S<s;S++){let w=r[S];w.length!==0&&(M!==S&&(r[M]=w,a[M]=a[S],l[M]=l[S],c[M]=c[S]),M++)}r.length=M,a.length=M,l.length=M,c.length=M;let E=_1({len:M,texts:r,isWordLike:a,kinds:l,starts:c}),R=v1(g1(x1(m1(h1(u1(E))))));for(let S=0;S<R.len-1;S++){let w=n1(R.texts[S]);w!==null&&(R.kinds[S]!=="space"&&R.kinds[S]!=="preserved-space"||R.kinds[S+1]!=="text"||!bm(R.texts[S+1])||(R.texts[S]=w.space,R.isWordLike[S]=!1,R.kinds[S]=R.kinds[S]==="preserved-space"?"preserved-space":"space",R.texts[S+1]=w.marks+R.texts[S+1],R.starts[S+1]=R.starts[S]+w.space.length))}return R}function S1(t,e){if(t.len===0)return[];if(!e.preserveHardBreaks)return[{startSegmentIndex:0,endSegmentIndex:t.len,consumedEndSegmentIndex:t.len}];let n=[],i=0;for(let s=0;s<t.len;s++)t.kinds[s]==="hard-break"&&(n.push({startSegmentIndex:i,endSegmentIndex:s,consumedEndSegmentIndex:s+1}),i=s+1);return i<t.len&&n.push({startSegmentIndex:i,endSegmentIndex:t.len,consumedEndSegmentIndex:t.len}),n}function M1(t,e,n){if(e.len<=1)return e;let i=[],s=[],r=[],o=[],a=-1,l=!1;function c(u){i.push(e.texts[u]),s.push(e.isWordLike[u]),r.push("text"),o.push(e.starts[u])}function h(u,f){let g=!1;for(let p=u;p<f;p++)g=g||e.isWordLike[p];let _=e.starts[u],m=f<e.len?e.starts[f]:t.length;i.push(t.slice(_,m)),s.push(g),r.push("text"),o.push(_)}function d(u){if(!(a<0)){if(l)a+1===u?c(a):h(a,u);else for(let f=a;f<u;f++)c(f);a=-1,l=!1}}for(let u=0;u<e.len;u++){let f=e.texts[u],g=e.kinds[u];if(g==="text"){a>=0&&!Zh(e.texts[u-1],n)&&d(u),a<0&&(a=u),l=l||Tn(f);continue}d(u),i.push(f),s.push(e.isWordLike[u]),r.push(g),o.push(e.starts[u])}return d(e.len),{len:i.length,texts:i,isWordLike:s,kinds:r,starts:o}}function Rm(t,e,n="normal",i="normal"){let s=IE(n),r=s.mode==="pre-wrap"?PE(t):NE(t);if(r.length===0)return{normalized:r,chunks:[],len:0,texts:[],isWordLike:[],kinds:[],starts:[]};let o=y1(r,e,s),a=i==="keep-all"?M1(r,o,e.breakKeepAllAfterPunctuation):o;return{normalized:r,chunks:S1(a,s),...a}}var br=null,Im=new Map,Er=null,b1=96,E1=/\p{Emoji_Presentation}/u,A1=/[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u20E3]/u,jh=null,Nm=new Map;function Qh(){if(br!==null)return br;if(typeof OffscreenCanvas<"u")return br=new OffscreenCanvas(1,1).getContext("2d"),br;if(typeof document<"u")return br=document.createElement("canvas").getContext("2d"),br;throw new Error("Text measurement requires OffscreenCanvas or a DOM canvas context.")}function T1(t){let e=Im.get(t);return e||(e=new Map,Im.set(t,e)),e}function Ei(t,e){let n=e.get(t);return n===void 0&&(n={width:Qh().measureText(t).width,containsCJK:Tn(t)},e.set(t,n)),n}function Ar(){if(Er!==null)return Er;if(typeof navigator>"u")return Er={lineFitEpsilon:.005,carryCJKAfterClosingQuote:!1,breakKeepAllAfterPunctuation:!0,preferPrefixWidthsForBreakableRuns:!1,preferEarlySoftHyphenBreak:!1},Er;let t=navigator.userAgent,n=navigator.vendor==="Apple Computer, Inc."&&t.includes("Safari/")&&!t.includes("Chrome/")&&!t.includes("Chromium/")&&!t.includes("CriOS/")&&!t.includes("FxiOS/")&&!t.includes("EdgiOS/"),i=t.includes("Chrome/")||t.includes("Chromium/")||t.includes("CriOS/")||t.includes("Edg/");return Er={lineFitEpsilon:n?1/64:.005,carryCJKAfterClosingQuote:i,breakKeepAllAfterPunctuation:!n,preferPrefixWidthsForBreakableRuns:n,preferEarlySoftHyphenBreak:n},Er}function C1(t){let e=t.match(/(\d+(?:\.\d+)?)\s*px/);return e?parseFloat(e[1]):16}function Pm(){return jh===null&&(jh=new Intl.Segmenter(void 0,{granularity:"grapheme"})),jh}function w1(t){return E1.test(t)||t.includes("\uFE0F")}function Lm(t){return A1.test(t)}function R1(t,e){let n=Nm.get(t);if(n!==void 0)return n;let i=Qh();i.font=t;let s=i.measureText("\u{1F600}").width;if(n=0,s>e+.5&&typeof document<"u"&&document.body!==null){let r=document.createElement("span");r.style.font=t,r.style.display="inline-block",r.style.visibility="hidden",r.style.position="absolute",r.textContent="\u{1F600}",document.body.appendChild(r);let o=r.getBoundingClientRect().width;document.body.removeChild(r),s-o>.5&&(n=s-o)}return Nm.set(t,n),n}function I1(t){let e=0,n=Pm();for(let i of n.segment(t))w1(i.segment)&&e++;return e}function N1(t,e){return e.emojiCount===void 0&&(e.emojiCount=I1(t)),e.emojiCount}function Ji(t,e,n){return n===0?e.width:e.width-N1(t,e)*n}function Fm(t,e,n,i,s){if(e.breakableFitAdvances!==void 0&&e.breakableFitMode===s)return e.breakableFitAdvances;e.breakableFitMode=s;let r=Pm(),o=[];for(let h of r.segment(t))o.push(h.segment);if(o.length<=1)return e.breakableFitAdvances=null,e.breakableFitAdvances;if(s==="sum-graphemes"){let h=[];for(let d of o){let u=Ei(d,n);h.push(Ji(d,u,i))}return e.breakableFitAdvances=h,e.breakableFitAdvances}if(s==="pair-context"||o.length>b1){let h=[],d=null,u=0;for(let f of o){let g=Ei(f,n),_=Ji(f,g,i);if(d===null)h.push(_);else{let m=d+f,p=Ei(m,n);h.push(Ji(m,p,i)-u)}d=f,u=_}return e.breakableFitAdvances=h,e.breakableFitAdvances}let a=[],l="",c=0;for(let h of o){l+=h;let d=Ei(l,n),u=Ji(l,d,i);a.push(u-c),c=u}return e.breakableFitAdvances=a,e.breakableFitAdvances}function Dm(t,e){let n=Qh();n.font=t;let i=T1(t),s=C1(t),r=e?R1(t,s):0;return{cache:i,fontSize:s,emojiCorrection:r}}function P1(t){return t==="space"||t==="zero-width-break"||t==="soft-hyphen"}function Um(t){return t==="space"||t==="preserved-space"||t==="tab"||t==="zero-width-break"||t==="soft-hyphen"}function km(t,e,n=t.widths.length){for(;e<n;){let i=t.kinds[e];if(!P1(i))break;e++}return e}function L1(t,e){if(e<=0)return 0;let n=t%e;return Math.abs(n)<=1e-6?e:e-n}function F1(t,e,n){return t.letterSpacing!==0&&e&&t.spacingGraphemeCounts[n]>0?t.letterSpacing:0}function ed(t,e){return e===0?0:t+e}function D1(t,e){return t.letterSpacing!==0&&t.spacingGraphemeCounts[e]>0?t.letterSpacing:0}function O1(t,e,n,i,s){let r=e==="tab"?s+D1(t,n):t.lineEndFitAdvances[n];return ed(i,r)}function Om(t,e,n,i){let s=e==="tab"?0:t.lineEndFitAdvances[n];return ed(i,s)}function Bm(t,e,n,i,s){let r=e==="tab"?s:t.lineEndPaintAdvances[n];return ed(i,r)}function B1(t,e,n){return t.letterSpacing!==0&&e?n+t.letterSpacing:n}function U1(t,e){return t.letterSpacing===0?e:e+t.letterSpacing}function k1(t,e,n,i,s){if(t.letterSpacing===0)return 0;if(s>0)return t.spacingGraphemeCounts[i]>0?t.letterSpacing:0;for(let r=i-1;r>=e;r--){let o=t.kinds[r];if(!(o==="space"||o==="zero-width-break"||o==="hard-break")){if(o==="soft-hyphen"){if(r===i-1)return 0;continue}return r===e&&n>0||t.spacingGraphemeCounts[r]>0?t.letterSpacing:0}}return 0}function V1(t,e,n,i,s,r){return e+k1(t,n,i,s,r)}function Vm(t,e){return zm(t,e)}function z1(t,e,n){let{widths:i,kinds:s,breakableFitAdvances:r}=t;if(i.length===0)return 0;let a=Ar().lineFitEpsilon,l=e+a,c=0,h=0,d=!1,u=0,f=0,g=0,_=0,m=-1,p=0;function y(){m=-1,p=0}function M(T=g,N=_,I=h){c++,n?.(I,u,f,T,N),h=0,d=!1,y()}function E(T,N){d=!0,u=T,f=0,g=T+1,_=0,h=N}function R(T,N,I){d=!0,u=T,f=N,g=T,_=N+1,h=I}function S(T,N){if(!d){E(T,N);return}h+=N,g=T+1,_=0}function w(T,N){let I=r[T];for(let D=N;D<I.length;D++){let k=I[D];d?h+k>l?(M(),R(T,D,k)):(h+=k,g=T,_=D+1):R(T,D,k)}d&&g===T&&_===I.length&&(g=T+1,_=0)}let x=0;for(;x<i.length&&!(!d&&(x=km(t,x),x>=i.length));){let T=i[x],N=s[x],I=Um(N);if(!d){T>l&&r[x]!==null?w(x,0):E(x,T),I&&(m=x+1,p=h-T),x++;continue}if(h+T>l){if(I){S(x,T),M(x+1,0,h-T),x++;continue}if(m>=0){if(g>m||g===m&&_>0){M();continue}M(m,0,p);continue}if(T>l&&r[x]!==null){M(),w(x,0),x++;continue}M();continue}S(x,T),I&&(m=x+1,p=h-T),x++}return d&&M(),c}function zm(t,e,n){if(t.simpleLineWalkFastPath)return z1(t,e,n);let{widths:i,kinds:s,breakableFitAdvances:r,discretionaryHyphenWidth:o,chunks:a}=t;if(i.length===0||a.length===0)return 0;let l=Ar(),c=l.lineFitEpsilon,h=e+c,d=0,u=0,f=!1,g=0,_=0,m=0,p=0,y=-1,M=0,E=0,R=null;function S(){y=-1,M=0,E=0,R=null}function w(){return R==="soft-hyphen"&&y===m&&p===0?E:u}function x(A=m,F=p,L){d++,n!==void 0&&n(V1(t,L??w(),g,_,A,F),g,_,A,F),u=0,f=!1,S()}function T(A,F){f=!0,g=A,_=0,m=A+1,p=0,u=F}function N(A,F,L){f=!0,g=A,_=F,m=A,p=F+1,u=L}function I(A,F){if(!f){T(A,F);return}u+=F,m=A+1,p=0}function D(A,F,L,X,Y,ee){if(!F)return;let se=Om(t,A,L,Y),xe=Bm(t,A,L,Y,X);y=L+1,M=u-ee+se,E=u-ee+xe,R=A}function k(A,F){let L=r[A];for(let X=F;X<L.length;X++){let Y=L[X];if(!f)N(A,X,Y);else{let ee=B1(t,!0,Y),se=u+ee;U1(t,se)>h?(x(),N(A,X,Y)):(u=se,m=A,p=X+1)}}f&&m===A&&p===L.length&&(m=A+1,p=0)}function z(A){d++,n?.(0,A.startSegmentIndex,0,A.consumedEndSegmentIndex,0),S()}for(let A=0;A<a.length;A++){let F=a[A];if(F.startSegmentIndex===F.endSegmentIndex){z(F);continue}f=!1,u=0,g=F.startSegmentIndex,_=0,m=F.startSegmentIndex,p=0,S();let L=F.startSegmentIndex;for(;L<F.endSegmentIndex&&!(!f&&(L=km(t,L,F.endSegmentIndex),L>=F.endSegmentIndex));){let X=s[L],Y=Um(X),ee=F1(t,f,L),se=X==="tab"?L1(u+ee,t.tabStopAdvance):i[L],xe=ee+se,ze=O1(t,X,L,ee,se);if(X==="soft-hyphen"){f&&(m=L+1,p=0,y=L+1,M=u+o,E=u+o,R=X),L++;continue}if(!f){ze>h&&r[L]!==null?k(L,0):T(L,se),D(X,Y,L,se,ee,xe),L++;continue}if(u+ze>h){let De=u+Om(t,X,L,ee),J=u+Bm(t,X,L,ee,se);if(R==="soft-hyphen"&&l.preferEarlySoftHyphenBreak&&M<=h){x(y,0,E);continue}if(Y&&De<=h){I(L,xe),x(L+1,0,J),L++;continue}if(y>=0&&M<=h){if(m>y||m===y&&p>0){x();continue}let ce=y;x(ce,0,E),L=ce;continue}if(ze>h&&r[L]!==null){x(),k(L,0),L++;continue}x();continue}I(L,xe),D(X,Y,L,se,ee,xe),L++}if(f){let X=y===F.consumedEndSegmentIndex?E:u;x(F.consumedEndSegmentIndex,0,X)}}return d}var td=null;function Gm(){return td===null&&(td=new Intl.Segmenter(void 0,{granularity:"grapheme"})),td}function H1(t){return t?{widths:[],lineEndFitAdvances:[],lineEndPaintAdvances:[],kinds:[],simpleLineWalkFastPath:!0,segLevels:null,breakableFitAdvances:[],letterSpacing:0,spacingGraphemeCounts:[],discretionaryHyphenWidth:0,tabStopAdvance:0,chunks:[],segments:[]}:{widths:[],lineEndFitAdvances:[],lineEndPaintAdvances:[],kinds:[],simpleLineWalkFastPath:!0,segLevels:null,breakableFitAdvances:[],letterSpacing:0,spacingGraphemeCounts:[],discretionaryHyphenWidth:0,tabStopAdvance:0,chunks:[]}}function G1(t,e){let n=[],i=[],s=0,r=!1,o=!1,a=!1;function l(){i.length!==0&&(n.push({text:i.length===1?i[0]:i.join(""),start:s}),i=[],r=!1,o=!1,a=!1)}function c(d,u,f){i=[d],s=u,r=f,o=Ac(d),a=zo.has(d)}function h(d,u){i.push(d),r=r||u;let f=Ac(d);d.length===1&&Ki.has(d)?o=o||f:o=f,a=!1}for(let d of Gm().segment(t)){let u=d.segment,f=Tn(u);if(i.length===0){c(u,d.index,f);continue}if(a||Mc.has(u)||Ki.has(u)||e.carryCJKAfterClosingQuote&&f&&o){h(u,f);continue}if(!r&&!f){h(u,f);continue}l(),c(u,d.index,f)}return l(),n}function W1(t,e,n){if(e.length<=1)return e;let i=[],s=-1,r=!1;function o(l,c){let h=e[l].start,d=c<e.length?e[c].start:t.length;i.push({text:t.slice(h,d),start:h})}function a(l){if(!(s<0)){if(r)s+1===l?i.push(e[s]):o(s,l);else for(let c=s;c<l;c++)i.push(e[c]);s=-1,r=!1}}for(let l=0;l<e.length;l++){let c=e[l];s>=0&&!Zh(e[l-1].text,n)&&a(l),s<0&&(s=l),r=r||Tn(c.text)}return a(e.length),i}function Hm(t,e){if(e==="zero-width-break"||e==="soft-hyphen"||e==="hard-break")return 0;if(e==="tab")return 1;let n=0,i=Gm();for(let s of i.segment(t))n++;return n}function X1(t,e,n){return e>1?t+(e-1)*n:t}function $1(t,e,n,i,s){let r=Ar(),{cache:o,emojiCorrection:a}=Dm(e,Lm(t.normalized)),l=Ji("-",Ei("-",o),a)+(s===0?0:s*2),h=Ji(" ",Ei(" ",o),a)*8,d=s!==0;if(t.len===0)return H1(n);let u=[],f=[],g=[],_=[],m=t.chunks.length<=1&&!d,p=n?[]:null,y=[],M=[],E=n?[]:null,R=Array.from({length:t.len});function S(N,I,D,k,z,A,F,L){z!=="text"&&z!=="space"&&z!=="zero-width-break"&&(m=!1),u.push(I),f.push(D),g.push(k),_.push(z),p?.push(A),y.push(F),d&&M.push(L),E!==null&&E.push(N)}function w(N,I,D,k,z){let A=Ei(N,o),F=d?Hm(N,I):0,L=X1(Ji(N,A,a),F,s),X=I==="space"||I==="preserved-space"||I==="zero-width-break"?0:L,Y=X===0?0:X+(F>0?s:0),ee=I==="space"||I==="zero-width-break"?0:L;if(z&&k&&N.length>1){let se="sum-graphemes";s!==0?se="segment-prefixes":Vo(N)?se="pair-context":r.preferPrefixWidthsForBreakableRuns&&(se="segment-prefixes");let xe=Fm(N,A,o,a,se);S(N,L,Y,ee,I,D,xe,F);return}S(N,L,Y,ee,I,D,null,F)}for(let N=0;N<t.len;N++){R[N]=u.length;let I=t.texts[N],D=t.isWordLike[N],k=t.kinds[N],z=t.starts[N];if(k==="soft-hyphen"){S(I,0,l,l,k,z,null,0);continue}if(k==="hard-break"){S(I,0,0,0,k,z,null,0);continue}if(k==="tab"){S(I,0,0,0,k,z,null,d?Hm(I,k):0);continue}let A=Ei(I,o);if(k==="text"&&A.containsCJK){let F=G1(I,r),L=i==="keep-all"?W1(I,F,r.breakKeepAllAfterPunctuation):F;for(let X=0;X<L.length;X++){let Y=L[X];w(Y.text,"text",z+Y.start,D,i==="keep-all"||!Tn(Y.text))}continue}w(I,k,z,D,!0)}let x=Y1(t.chunks,R,u.length),T=p===null?null:Mm(t.normalized,p);return E!==null?{widths:u,lineEndFitAdvances:f,lineEndPaintAdvances:g,kinds:_,simpleLineWalkFastPath:m,segLevels:T,breakableFitAdvances:y,letterSpacing:s,spacingGraphemeCounts:M,discretionaryHyphenWidth:l,tabStopAdvance:h,chunks:x,segments:E}:{widths:u,lineEndFitAdvances:f,lineEndPaintAdvances:g,kinds:_,simpleLineWalkFastPath:m,segLevels:T,breakableFitAdvances:y,letterSpacing:s,spacingGraphemeCounts:M,discretionaryHyphenWidth:l,tabStopAdvance:h,chunks:x}}function Y1(t,e,n){let i=[];for(let s=0;s<t.length;s++){let r=t[s],o=r.startSegmentIndex<e.length?e[r.startSegmentIndex]:n,a=r.endSegmentIndex<e.length?e[r.endSegmentIndex]:n,l=r.consumedEndSegmentIndex<e.length?e[r.consumedEndSegmentIndex]:n;i.push({startSegmentIndex:o,endSegmentIndex:a,consumedEndSegmentIndex:l})}return i}function q1(t,e,n,i){let s=i?.wordBreak??"normal",r=i?.letterSpacing??0,o=Rm(t,Ar(),i?.whiteSpace,s);return $1(o,e,n,s,r)}function Wm(t,e,n){return q1(t,e,!1,n)}function Xm(t,e,n){let i=Vm(t,e);return{lineCount:i,height:i*n}}var $m={type:"change"},id={type:"start"},qm={type:"end"},Tc=new Si,Ym=new tn,Z1=Math.cos(70*vr.DEG2RAD),Ot=new P,on=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nd=1e-6,Cc=class extends To{constructor(e,n=null){super(e,n),this.state=ct.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zn.ROTATE,MIDDLE:zn.DOLLY,RIGHT:zn.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new dn,this._lastTargetPosition=new P,this._quat=new dn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pr,this._sphericalDelta=new pr,this._scale=1,this._panOffset=new P,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new P,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=J1.bind(this),this._onPointerDown=K1.bind(this),this._onPointerUp=j1.bind(this),this._onContextMenu=rA.bind(this),this._onMouseWheel=tA.bind(this),this._onKeyDown=nA.bind(this),this._onTouchStart=iA.bind(this),this._onTouchMove=sA.bind(this),this._onMouseDown=Q1.bind(this),this._onMouseMove=eA.bind(this),this._interceptControlDown=oA.bind(this),this._interceptControlUp=aA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($m),this.update(),this.state=ct.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let n=this.object.position;Ot.copy(n).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ot.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Tc.origin.copy(this.object.position),Tc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tc.direction))<Z1?this.object.lookAt(this.target):(Ym.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tc.intersectPlane(Ym,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nd||this._lastTargetPosition.distanceToSquared(this.target)>nd?(this.dispatchEvent($m),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){let n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ot.setFromMatrixColumn(n,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,n){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(n,1):(Ot.setFromMatrixColumn(n,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ot.copy(s).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new we,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){let n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function K1(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function J1(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function j1(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qm),this.state=ct.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Q1(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ct.DOLLY;break;case zn.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}break;case zn.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(id)}function eA(t){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function tA(t){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(t.preventDefault(),this.dispatchEvent(id),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(qm))}function nA(t){this.enabled!==!1&&this._handleKeyDown(t)}function iA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ct.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ct.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(id)}function sA(t){switch(this._trackPointer(t),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ct.NONE}}function rA(t){this.enabled!==!1&&t.preventDefault()}function oA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sd(t){let e=new Date(t);return Number.isNaN(e.valueOf())?"":e.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Zm(t){return t>=1e3?`${(t/1e3).toFixed(2)}s`:`${t}ms`}function Km(t){return t<1e3?`${t} ms`:`${(t/1e3).toFixed(1)} s`}function gn(t){let e=t.delta>0?"+":"";return`${t.left} -> ${t.right} (${e}${t.delta})`}function Tr(t){return t==null?"n/a":`${t.toFixed(0)}%`}function de(t,e="n/a"){return t==null||!Number.isFinite(t)?e:t.toLocaleString()}function li(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Jm(t,e=0){return e>0?`${t} JSONL records + ${Go(e)} pending`:`${t} JSONL records`}function Go(t){return t>=1024*1024?`${(t/(1024*1024)).toFixed(1)} MB`:t>=1024?`${Math.ceil(t/1024)} KB`:`${t} B`}var lA=/([?&])((?:access_)?token|api[_-]?key|secret|password|passwd|auth|session|cookie)=([^&#\s]+)/gi,cA=/\b((?:access_)?token|api[_-]?key|secret|password|passwd|cookie|authorization)\s*([:=])\s*("[^"]*"|'[^']*'|[^\s|;,]+)/gi,uA=/\bBearer\s+[A-Za-z0-9._~+/=-]{6,}/gi,hA=/data:image\/[a-z0-9.+-]+;base64,[A-Za-z0-9+/=]+/gi,dA=/\b[A-Za-z0-9+/]{32,}={0,2}\b/g,fA=/\b[A-Z0-9_]*(?:SECRET|PASSWORD|TOKEN|PRIVATE|COOKIE|DO_NOT_COPY)[A-Z0-9_]*\b/g,pA=/[A-Za-z]:[\\/]+Users[\\/]+[^\s|"'<>]+/g,mA=/\/(?:home|Users)\/[^\s|"'<>]+/g;function ji(t){let e=ng(t);return e?e.replace(hA,"[REDACTED_IMAGE_PAYLOAD]").replace(lA,(i,s,r)=>`${s}${r}=[REDACTED]`).replace(uA,"Bearer [REDACTED]").replace(cA,(i,s,r)=>`${s}${r===":"?": ":"="}[REDACTED]`).replace(pA,jm).replace(mA,jm).replace(dA,"[REDACTED_BASE64]").replace(fA,"[REDACTED_PRIVATE_TEXT]"):""}function Qm(t){let e=[Xn(t.role),Xn(t.eventType),t.toolName?`tool: ${Xn(t.toolName)}`:"",t.filePath?`path: ${ji(t.filePath)}`:"",t.status?`status: ${Xn(t.status)}`:""].filter(Boolean),n=ng(t.rawSummary);if(n){let i=ji(n);e.push(n===i?"detail: omitted for safe sharing":"detail: redacted for safe sharing")}return e.length?e.join("; "):"event summary unavailable"}function eg(t){return["Perlustron copy-safe reference",t.source?`source: ${Xn(t.source)}`:null,t.lineNumber!==null&&t.lineNumber!==void 0?`line: ${t.lineNumber}`:null,t.eventIndex!==null&&t.eventIndex!==void 0?`event_index: ${t.eventIndex}`:null,t.kind?`kind: ${Xn(t.kind)}`:null,t.summary?`summary: ${ji(t.summary)}`:null,`perlustron: parser ${Xn(t.parserVersion||"unknown")} / schema ${Xn(t.schemaVersion||"unknown")}`,"caveat: copy-safe reference only; review raw logs separately before sharing raw content"].filter(e=>!!e).join(`
`)}function tg(t){let e=t.rawLogsSafeToShare?"marked safe by current scan; still review before forwarding":"requires human review before sharing";return["Perlustron copy-safe share summary",t.source?`source: ${Xn(t.source)}`:null,t.sessionName?`session: ${ji(t.sessionName)}`:null,`activity: ${de(t.totalTurns,"unknown")} turns / ${de(t.callCount,"unknown")} tool calls / ${de(t.fileChangeCount,"unknown")} file changes`,t.latestEventIndex!==null&&t.latestEventIndex!==void 0?`latest_event_index: ${t.latestEventIndex}`:null,t.cliContext?`cli: ${ji(t.cliContext)}`:null,`perlustron: parser ${Xn(t.parserVersion||"unknown")} / schema ${Xn(t.schemaVersion||"unknown")}`,`raw_logs: ${e}`,`raw_caution: ${ji(t.rawLogCaution||"Raw logs can contain prompts, paths, tool output, images, and credentials.")}`,"safe_surfaces: sanitized graph/export/copy-safe references are safer than raw logs, but still require human judgment before external sharing",`sanitized_graph: ${ji(t.sanitizedGraphNote||"Use sanitized graph/export surfaces for review-friendly sharing.")}`,`redactions: ${de(t.redactedFieldCount,"unknown")} fields; images: ${de(t.imageCount,"unknown")}; api_token_required: ${t.apiTokenRequired?"yes (value not copied)":"no"}`].filter(n=>!!n).join(`
`)}function ng(t){return String(t??"").replace(/\s+/g," ").trim()}function Xn(t){return ji(t)}function jm(t){let e=t.replace(/\\/g,"/").split("/").filter(Boolean);return`[PATH:${e.length?e[e.length-1]:"path"}]`}var gA=["add","update","delete","move"],ig="http://www.w3.org/2000/svg",xA=["summary","map","timeline","transcript"],l0=[...xA,"health","insights","diff","raw","export","settings"],c0=["error","long","file","diff","artifact","compaction"],_A=3e4,Wo=18,vA=3e3,sg=80,wc=900,yA=840,SA=5,u0=10,rg=12,MA=12,bA=180,h0="Repeated file activity",Nd="Suspicious tool call",Pd="Repeated tool-call pattern",og=["critical","high","warning","info","low"],EA={summary:{label:"Beta",maturity:"beta",title:"Beta view: available for early use while the interface continues to mature."},map:{label:"Beta",maturity:"beta",title:"Beta view: available for early use while the interface continues to mature."},timeline:{label:"Beta",maturity:"beta",title:"Beta view: available for early use while the interface continues to mature."},transcript:{label:"Beta",maturity:"beta",title:"Beta view: available for early use while the interface continues to mature."},health:{label:"Advanced",maturity:"advanced",title:"Advanced view: intended for audit, debugging, or export workflows."},insights:{label:"Experimental",maturity:"experimental",title:"Experimental view: useful for beta feedback, but verify important conclusions."},diff:{label:"Experimental",maturity:"experimental",title:"Experimental view: useful for beta feedback, but verify important conclusions."},raw:{label:"Advanced",maturity:"advanced",title:"Advanced view: intended for audit, debugging, or export workflows."},export:{label:"Advanced",maturity:"advanced",title:"Advanced view: intended for audit, debugging, or export workflows."},settings:{label:"Advanced",maturity:"advanced",title:"Advanced view: intended for audit, debugging, or export workflows."}},AA=88,TA=180,d0=56,f0=72,ag='13px "Segoe UI", Arial, sans-serif',lg='700 13px "Segoe UI", Arial, sans-serif',p0=19,m0=18,CA=84,wA=12,g0=16,x0=4,RA=19,rd=16,IA=["zoom-in","zoom-out","two-d","overview"],NA={codex:["M4 7l5 5-5 5","M12 17h8"],source:["M5 6h14","M5 12h14","M5 18h14","M8 4v4","M16 10v4","M11 16v4"],git:["M6 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M6 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M6 6v8a4 4 0 0 0 4 4h6","M6 10h6a4 4 0 0 1 4 4v4"],policy:["M12 3l7 4v5c0 4.5-2.8 7.4-7 9-4.2-1.6-7-4.5-7-9V7l7-4z","M9 12l2 2 4-5"],model:["M8 8h8v8H8z","M4 10h4","M4 14h4","M16 10h4","M16 14h4","M10 4v4","M14 4v4","M10 16v4","M14 16v4"],tools:["M14.7 6.3l3-3a2.1 2.1 0 0 1 3 3l-3 3","M13 8l3 3","M3 21l8-8","M9 11l4 4"]},_0=new Set(l0);function Fc(t){return Array.isArray(t)?t[0]:t.fromId}function Dc(t){return Array.isArray(t)?t[1]:t.toId}function PA(t){return Array.isArray(t)?1:t.waypoints.length+1}function od(t){return t.reduce((e,n)=>e+PA(n),0)}function LA(t,e){if(!e||Fc(t)!==Fc(e)||Dc(t)!==Dc(e))return!1;let n=Array.isArray(t)?[]:t.waypoints,i=Array.isArray(e)?[]:e.waypoints;return n.length===i.length}function Te(t,e=document){let n=e.querySelector(t);if(!n)throw new Error(`Missing required element: ${t}`);return n}function eu(t){return document.querySelectorAll(t)}function Os(t){return t instanceof Error?t.message:String(t)}function ad(t,e,n){return e!==void 0&&t.includes(e)?e:n}function Ld(){return{compactionInProgress:!1,pendingPrompt:null,assistantStreaming:!1,latestAssistantEventIndex:null,latestAssistantPreview:null,latestTokenSample:null,activeToolCalls:[],completedToolCalls:[]}}function zt(){if(!Ae)throw new Error("Session graph has not loaded yet");return Ae}function v0(t){return t.type==="call"?t.source.completedAt||t.source.startedAt||"Live context":t.source.timestamp||"Live context"}function FA(t){let e=new Date(t);return Number.isNaN(e.valueOf())?t:e.toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Fd(t){fg.textContent=FA(t),fg.title=t}function DA(t){let e=t.replace(/^\s{0,3}#{1,6}\s+/,"").trim();return(e?e.replace(/:$/,"").trim():t)||t}function Dd(t,e="Selection"){kA.textContent=e,cg.textContent=DA(t),cg.title=t}function OA(t){if(t.type==="call"){let e=tu(t.source.name);if(e)return e.toUpperCase()}return t.kind.replace(/[-_]+/g," ").toUpperCase()}function y0(t){return t.type==="prompt"?"":S0(t)}function S0(t){return t.type==="call"?tu(t.source.name)??t.title:t.title}function M0(t){return t.type==="prompt"?`PROMPT ${t.promptIndex+1}`:t.type==="compaction"?`CHECKPOINT ${t.eventIndex}`:t.type==="fileChange"?`FILE ${t.eventIndex}`:t.type==="message"?`ASSISTANT ${t.eventIndex}`:t.type==="call"&&BA(t.source.name)?`SUBAGENT TURN ${t.eventIndex}`:`TURN ${t.eventIndex}`}function tu(t){return t==="spawn_agent"?"subagent launch":t==="subagent"?"subagent result":t==="subagent.prompt"?"subagent prompt":t==="subagent.message"?"subagent message":t==="subagent.file"?"subagent file":t==="subagent.compaction"?"subagent compaction":t==="subagent.more"?"subagent overflow":null}function BA(t){return t.startsWith("subagent.")&&t!=="subagent"}function b0(t){return t.type==="prompt"?t.source.images:[]}var nt=Te("#space"),UA=Te("#metadata-list"),kA=Te("#stream-title-label"),cg=Te("#stream-kind"),Od=Te("#stream-title"),Ur=Te("#stream-data"),ug=Te("#stream-images"),VA=Te("#stream-close"),Pc=Te("#stream-minimize"),ta=Te("#stream-copy-ref"),E0=Te("#stream-open-timeline"),A0=Te("#stream-open-transcript"),T0=Te("#stream-open-raw"),C0=Te("#prev-event"),w0=Te("#next-event"),R0=Te("#stage-turn-count"),Bd=Te("#stage-started"),hg=Te("#context-pressure-value"),dg=Te("#context-pressure-bars"),Ud=Te("#turn-number"),fg=Te("#turn-timestamp"),zA=Te("#metric-prompts"),HA=Te("#metric-errors"),GA=Te("#metric-long"),WA=Te("#metric-files"),XA=Te("#metric-diffs"),$A=Te("#metric-artifacts"),YA=Te("#metric-compactions"),kd=Te("#context-event-title"),os=Te("#event-popup"),qA=Te("#topbar"),ZA=Te("#live-toggle"),I0=Te("#live-state"),N0=Te("#live-copy"),es=Te("#search-input"),KA=Te("#mode-panel"),JA=Te("#mode-panel-kicker"),jA=Te("#mode-panel-title"),ld=Te("#mode-panel-status"),en=Te("#mode-panel-summary"),QA=Te("#mode-panel-filters"),Bt=Te("#mode-panel-content"),Oc=Te("#mode-filter-role"),Bc=Te("#mode-filter-type"),Uc=Te("#mode-filter-tool"),kc=Te("#mode-filter-file"),P0=Te("#mode-filter-errors"),L0=Te("#mode-filter-unknown"),F0=Te("#mode-filter-malformed"),D0=Te("#mode-filter-redacted"),O0=Te("#mode-filter-utc"),B0=eu("[data-view-action]"),U0=eu("[data-metric]"),k0=eu("[data-app-mode]"),V0=eu("[data-source]"),ci=Te("#session-select"),na=Te("#session-select-status"),pd=Te("#settings-button"),z0=Te("#scene-frame"),eT=3500,tT=1e3,nT=180,iT=1200,pg=.72,sT=1e-4,rT=12e3,oT=1200,aT=12e3,Rc=20,Vd=-1.4,lT=38,cT=52,H0=46,uT=58,hT=24,dT=104,fT=1.72,mg=1.08,pT=4.3,mT=2.55,zd=-1e4,Hd=3600,G0=28,gT=3,xT=2,kr="compaction-progress",Is="live-prompt-progress",gg=4.8,xg=5.2,_T=1.25,vT=3.7,yT=.04,ST=.42,W0=Math.PI/2,X0=Math.PI*.76,As=6.8,_g=5.8,MT=1.75,bT=2.65,ET=.16,md=6,AT=.86,TT=3.05,CT=.72,wT=.24,RT=.62,wr=1,IT=1.4,NT=1.35,PT=1.7,LT=.62,FT=.04,DT=0,OT=1.15,BT=0,UT=1.05,kT=3.8,VT=9.2,zT=22,HT=6.4,GT=2.35,WT=.78,XT=.36,$T=1.85,YT=2.15,qT=4.15,ZT=2.1,KT=.2,JT=.86,jT=.03,QT=.24,eC=X0,tC=.72,nC=1.85,iC=.1,gd=5,sC=.78,rC=.44,oC=.38,aC=.1,lC=.3,vg=2.4,cC=6.5,uC=.16,hC=34,dC=100,yg=4,fC=16,pC=70,mC=.72,gC=2.6,xC=new Set(["KeyW","KeyA","KeyS","KeyD"]),$0="Space",_C=new Set(["ControlLeft","ControlRight"]),vC=new Set(["ShiftLeft","ShiftRight"]),Sg=.0032,yC=1.4,Y0=28,Mg=Math.PI/2-.08,SC=4,bg=24,Ai=null;try{Ai=new vc({canvas:nt,antialias:!1,alpha:!1,powerPreference:"high-performance"}),Ai.setClearColor(197894,1),Ai.outputColorSpace=Kt,Ai.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75))}catch(t){nt.classList.add("webgl-unavailable"),console.warn(`WebGL renderer unavailable: ${Os(t)}`)}var In=new oo,ia=new ei;ia.renderOrder=4;In.add(ia);var sa=new ei;sa.renderOrder=4.2;In.add(sa);var Fe=new $t(50,1,.1,rT);Fe.position.set(0,H0,.01);var Ke=new Cc(Fe,Ai?.domElement??nt);Ke.enableDamping=!0;Ke.dampingFactor=.07;Ke.enablePan=!1;Ke.enableRotate=!1;Ke.enableZoom=!1;Ke.mouseButtons.LEFT=zn.PAN;Ke.mouseButtons.RIGHT=zn.ROTATE;Ke.maxDistance=Number.POSITIVE_INFINITY;Ke.minDistance=0;Ke.target.set(0,0,0);var xd=new fr;xd.params.Points.threshold=1.05;var Vr=new we,MC=new we(0,0),Cn=new Rt,Ms=new He,xn=new P,q0=new P,Eg=new P,Z0=new tn(new P(0,1,0),-Vd),bs=new P,Vc=new fr,Ag=new P,Tg=new P,hi=new P,Cg=new P,Xo=new P,$o=new ni(0,0,0,"YXZ"),K0=new P,J0=new P,Ir=new P,Nr=new P,wg=new He(16777215),Ae=null,Ve=[],is=[],Nt=new Map,Jo=new Map,ra=[],ui={},Yn=null,an=null,_d=new Map,vd=new Map,it=null,ft=null,Lc=null,Lr=null,Qi=null,cd=!1,ts=null,Zo=null,j0=0,yd=0,_t="overview",Mt=bC(new URLSearchParams(window.location.search).get("mode")),Ts="three-d",Ns=nx(new URLSearchParams(window.location.search).get("source")),Pn=ix(new URLSearchParams(window.location.search).get("session")),qn=[],$n=null,jt=null,Sd=!1,Ti=null,Rg=0,_n=null,Md=!1,Cs=null,Yo=null,Fr=null,Ps="",nu=null,jo={},Dr=new Map,Rn=!0,ws=!1,zc=!1,Pr=!1,Rr=!1,Bs=0,Qo=null,iu=!1,oa=!1,Hc=0,Zn=Ld(),ns=Number.POSITIVE_INFINITY,Or=null;var Hr=!0,Br=null,Gd=!1,aa=!1,Q0=0,wn=new Set,Wd=!1,la=null,bd=0,Ed=0,Gc=null,ca=!1,Ad=0,Td=0,ex=0,tx=0,Xd=!1,Wc=!1,Ig=performance.now()/1e3,Ic=0,Xc={prompt:6547455,local:15908444,browser:7467682,web:8229887,coordination:15887725,tool:12044492,assistant:16777215,message:16777215,error:16736102,long:16760138,file:6615680,diff:4446719,artifact:9464063,compaction:16216063,subagent:9403903,"subagent-result":13023487,"file-add":6615680,"file-update":4446719,"file-delete":16736102,"file-move":16760138};function nx(t){return t==="claude"?"claude":"codex"}function bC(t){let e=t?.trim().toLowerCase();return e&&_0.has(e)?e:"summary"}function Ci(t=Ns){return t==="claude"?"Claude":"Codex"}function ix(t){let e=t?.trim();return e||null}function EC(){let t=new URL(window.location.href);t.searchParams.has("token")&&(t.searchParams.delete("token"),window.history.replaceState(window.history.state,"",`${t.pathname}${t.search}${t.hash}`))}var Ng=(()=>{let t=new URLSearchParams(window.location.search),e=t.get("token");try{let n=e||sessionStorage.getItem("perlustronToken");return n&&sessionStorage.setItem("perlustronToken",n),t.has("token")&&EC(),n}catch{return e}})();function sx(t,{includeSession:e=!0,includeSource:n=!0,sessionPath:i=Pn}={}){return n&&t.searchParams.set("source",Ns),e&&i&&t.searchParams.set("session",i),Ng&&t.searchParams.set("token",Ng),t}function Gr(t,e={}){let n=new URL(t,window.location.origin);return sx(n,e)}function Ls(t){return t===Bs}var Pg=new vo(.78,16,10),AC=new go(.72,.72,.12,32),TC=new xo(.72,0),CC=new Vi(.96,.12,.58),wC=new hr(.78,.9,96),RC=new hr(.9,1.02,96),Lg=new Vn({color:16777215}),IC=new Vn({color:16777215}),NC=new Vn({color:16777215}),PC=new Vn({color:16777215});In.add(new Mo(8778239,1052688,1.5));var rx=new Eo(16777215,2.2);rx.position.set(14,24,12);In.add(rx);var zr=new Ao(aT,oT,1456447,1456447);zr.position.y=Vd;zr.material.transparent=!0;zr.material.opacity=.34;In.add(zr);VA.addEventListener("click",()=>{ft=null,jx(),hu(),yn(),Fs()});Pc.addEventListener("click",()=>l_(!Pr));ta.addEventListener("click",GR);E0.addEventListener("click",()=>du("timeline"));A0.addEventListener("click",()=>du("transcript"));T0.addEventListener("click",()=>du("raw"));l_(!1);window.addEventListener("resize",n_);nt.addEventListener("contextmenu",tR);nt.addEventListener("wheel",nR,{passive:!1});nt.addEventListener("pointerdown",iR,{capture:!0});nt.addEventListener("pointermove",sR,{capture:!0});nt.addEventListener("pointerup",nf,{capture:!0});nt.addEventListener("pointercancel",nf,{capture:!0});nt.addEventListener("pointerdown",lR);nt.addEventListener("pointermove",cu);nt.addEventListener("pointermove",cR);nt.addEventListener("pointerup",Zx);nt.addEventListener("pointercancel",Zx);nt.addEventListener("click",bR);nt.addEventListener("dblclick",ER);qI();n_();await $d();await Wr();xu();Ai?.setAnimationLoop(Qw);async function Wr({previousLineCountOverride:t=null,previousLatestOverride:e=null,suppressLiveAnimation:n=!1}={}){let i=++j0,s=Bs;try{let r=await fetch(Gr("/api/session"),{cache:"no-store"});if(!r.ok)throw new Error(`Session API returned ${r.status}`);let o=await r.json();if(!Ls(s)||i<yd)return;yd=i;let a=Ae!==null,l=a&&Yd()?BR()?.clone()??null:null,c=t??Ae?.lineCount??o.lineCount,h=e??Qo??o.latestEventIndex,d=a&&o.latestEventIndex>h,u=a&&o.latestEventIndex===h&&o.lineCount===c,f=d&&!n;if(ns=f?h:Number.POSITIVE_INFINITY,Qo=o.latestEventIndex,iu=!1,Ae=o,u&&Rr){ss(),ud();return}if(a&&Rr&&iw()){ss(),f&&(Bg(l),a0()),ud();return}hx({preserveView:a&&Rr,preserveEventContext:a&&Rr}),Rr=!0,ss(),f&&(Bg(l),a0()),(o.pendingBytes??0)>0&&!ts&&ux(o.lineCount,Qo??o.latestEventIndex),ud()}catch(r){if(!Ls(s))return;zc=!1,UC(),ha(r)}}async function Cd(){if(cd)return;cd=!0;let t=Bs;try{if(!Ae){await Wr();return}let e=await LC();if(!Ls(t))return;cx(e)}catch(e){ha(e)}finally{cd=!1}}async function LC(){let t=await fetch(Gr("/api/session/status"),{cache:"no-store"});if(!t.ok)throw new Error(`Session status returned ${t.status}`);return await t.json()}async function FC(t){let e=zt(),n=Gr("/api/session/diff");n.searchParams.set("leftSession",e.sessionPath),n.searchParams.set("rightSession",t),n.searchParams.set("redacted","true"),n.searchParams.set("profile","strict");let i=await fetch(n,{cache:"no-store"});if(!i.ok)throw new Error(`Diff API returned ${i.status}`);return await i.json()}async function DC(){let t=Gr("/api/session/unknowns");t.searchParams.set("profile","strict");let e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`Unknowns API returned ${e.status}`);return await e.json()}async function $d({retryWithoutSelection:t=!0,generation:e=Bs}={}){lx();try{let n=await fetch(Gr("/api/sessions"),{cache:"no-store"});if(!n.ok)throw new Error(`Sessions API returned ${n.status}`);let i=await n.json();if(!Ls(e))return;qn=i.sessions??[],Fg(i)}catch(n){if(!Ls(e))return;if(Pn&&t){Pn=null,da(),await $d({retryWithoutSelection:!1,generation:e});return}qn=[],Fg(),ha(n)}}function Fg(t){let e=document.createDocumentFragment(),n=t?.selectedPath||Pn||qn[0]?.path||"";if(!qn.length){let i=document.createElement("option");i.value="",i.textContent="No sessions found",e.append(i),ci.replaceChildren(e),ci.disabled=!0,na.textContent="0";return}qn.forEach(i=>{let s=document.createElement("option");s.value=i.path,s.textContent=ox(i),s.title=i.path,e.append(s)}),ci.replaceChildren(e),ci.value=n,ci.disabled=!1,na.textContent=`${qn.length}`}function ox(t){return[t.isLive?"Live":"",t.explicit?"Default":"",t.label,sd(t.lastModifiedAt),Go(t.byteLength)].filter(Boolean).join(" - ")}async function OC(t){let e=ix(t);if(e===Pn)return;_u(),Pn=e,jt=null,Ti=null,_n=null,Cs=null,zc=!0,da(),ax();let n=Bs;kC(),await Wr({suppressLiveAnimation:!0}),Ls(n)&&xu()}function da(){let t=new URL(window.location.href);t.searchParams.set("source",Ns),t.searchParams.set("mode",Mt),Pn?t.searchParams.set("session",Pn):t.searchParams.delete("session"),t.searchParams.delete("token"),window.history.replaceState({},"",`${t.pathname}${t.search}${t.hash}`)}function ax(){Bs+=1,ts&&clearTimeout(ts),ts=null,Zo=null,j0=0,yd=0,ft=null,it=null,nu=null,Object.keys(jo).forEach(t=>{delete jo[t]}),Dr.clear(),_t="overview",Qo=null,iu=!1,Zn=Ld(),oa=!1,Hc=0,ns=Number.POSITIVE_INFINITY,ru(),Or&&clearTimeout(Or),Or=null,Rr=!1,Ae=null,Ve=[],is=[],Nt.clear(),Jo.clear(),Lx(),r_()}function lx(){ci.disabled=!0,na.textContent="Loading"}function ud(){BC({switched:zc}),zc=!1}function BC({switched:t=!1}={}){ci.disabled=qn.length===0,na.textContent=t?"Loaded":qn.length?`${qn.length}`:"0"}function UC(){ci.disabled=qn.length===0,na.textContent="Error"}function kC(){R0.textContent="Loading",Bd.textContent="Reading JSONL",I0.textContent="LOAD",N0.textContent="Switching session...",lx()}function cx(t){if(!Ae){Wr();return}let e=Ae,n=e.lineCount,i=Qo??e.latestEventIndex,s=e.byteLength??e.processedByteLength??0,r=t.byteLength??s,o=e.pendingBytes??0,a=t.pendingBytes??0,l=t.graphChanged===!0,c=zC(t),h=c.compactionInProgress,d=Dg(c)!==Dg(Zn),u=Math.max(0,r-s),f=a>0,g=u>0||a>o,_=t.renderableEventCount!==VC(e),m=a===0&&(t.latestEventIndex>i||t.lineCount>n||_),p=t.latestEventIndex===i&&t.lineCount===n&&u===0&&a===o&&l===iu&&!d,y=l||f&&!h||g&&!h||_||m;$C(t,c),d&&(h||!y)&&hx({preserveView:!0,preserveEventContext:!0}),y&&(!p||f||_||m)&&ux(n,i)}function VC(t){return t.totals.promptCount+t.totals.callCount+t.totals.assistantMessageCount+t.totals.fileChangeCount+t.totals.compactionCount}function zC(t){let e=t.liveCues??Ld();return{compactionInProgress:e.compactionInProgress||t.compactionInProgress===!0,pendingPrompt:e.pendingPrompt??null,assistantStreaming:e.assistantStreaming===!0,latestAssistantEventIndex:e.latestAssistantEventIndex??null,latestAssistantPreview:e.latestAssistantPreview??null,latestTokenSample:e.latestTokenSample??null,activeToolCalls:e.activeToolCalls??[],completedToolCalls:e.completedToolCalls??[]}}function Dg(t){return[t.compactionInProgress?"compact:1":"compact:0",t.pendingPrompt?`prompt:${t.pendingPrompt.eventIndex}:${ea(t.pendingPrompt.title)}:${ea(t.pendingPrompt.text)}`:"prompt:",t.assistantStreaming?`assistant:${t.latestAssistantEventIndex??""}:${ea(t.latestAssistantPreview)}`:"assistant:",t.latestTokenSample?`tokens:${t.latestTokenSample.eventIndex}:${t.latestTokenSample.totalTokens}:${t.latestTokenSample.contextPercent??""}`:"tokens:",`active:${Og(t.activeToolCalls)}`,`done:${Og(t.completedToolCalls)}`].join("|")}function Og(t){return t.map(e=>`${e.id}:${e.eventIndex}:${e.status}:${e.completedAt??""}:${ea(e.argumentPreview)}:${ea(e.outputPreview)}`).join(",")}function ea(t){return t?`${t.length}:${t.slice(0,48)}`:""}function Bg(t=null){if(!Yd())return;let e=cf();if(e){if(e.type==="prompt"?it=e.id:e.type==="compaction"?it=null:it=e.promptId,_t="overview",as({preserveCamera:!0}),t){let n=Yc(e);HC(n)||GC(t,n)}else pa({preserveDistance:!0});ft&&hf()&&Sf(),yn()}}function Yd(){return Rn&&!Gd&&!Ps&&!Fr}function su(){Gd=!0,ru()}function qd(){Gd=!1}function HC(t){let e=nt.getBoundingClientRect();return e.width<=0||e.height<=0?!1:(Fe.updateMatrixWorld(),xn.copy(t).project(Fe),xn.z>=-1&&xn.z<=1&&Math.abs(xn.x)<=pg&&Math.abs(xn.y)<=pg)}function GC(t,e){let n=e.x-t.x,i=e.y-t.y,s=e.z-t.z;n*n+i*i+s*s<sT||(K0.copy(Fe.position),J0.copy(Ke.target),aa?(Ir.x+=n,Ir.y+=i,Ir.z+=s,Nr.x+=n,Nr.y+=i,Nr.z+=s):(Ir.set(Fe.position.x+n,Fe.position.y+i,Fe.position.z+s),Nr.set(Ke.target.x+n,Ke.target.y+i,Ke.target.z+s)),Q0=performance.now(),aa=!0)}function WC(t){if(!aa)return;if(!Yd()){ru();return}let e=vr.clamp((t-Q0)/iT,0,1),n=XC(e);Fe.position.lerpVectors(K0,Ir,n),Ke.target.lerpVectors(J0,Nr,n),e>=1&&(Fe.position.copy(Ir),Ke.target.copy(Nr),aa=!1)}function XC(t){return t*t*t*(t*(t*6-15)+10)}function ru(){aa=!1}function ux(t,e){Zo||(Zo={previousLineCount:t,previousLatest:e}),ts&&clearTimeout(ts),ts=setTimeout(()=>{let n=Zo;Zo=null,ts=null,n&&Wr({previousLineCountOverride:n.previousLineCount,previousLatestOverride:n.previousLatest,suppressLiveAnimation:!1})},nT)}function $C(t,e){let n=zt();n.source=t.source,n.sessionPath=t.sessionPath,n.sessionId=t.sessionId,n.generatedAt=t.generatedAt,n.lastModifiedAt=t.lastModifiedAt,n.lineCount=t.lineCount,n.latestEventIndex=t.latestEventIndex,n.isLive=t.isLive,n.byteLength=t.byteLength,n.processedByteLength=t.processedByteLength,n.pendingBytes=t.pendingBytes,iu=t.graphChanged===!0,Zn=e,YC(Zn.compactionInProgress),Bd.textContent=fx(t.lineCount,n.pendingBytes),_x(nw(n.tokenTelemetry,Zn.latestTokenSample)),ss(),uf()}function YC(t){return oa===t?!1:(oa=t,Hc=t?performance.now():0,!0)}function hx({preserveView:t=!1,preserveEventContext:e=!1}={}){let n=t?sw():null;Lx();let i=Cx(zt());Ve=i.nodes,is=i.connectors,vx(),it=it&&Nt.has(it)?it:Ve.find(s=>s.type==="prompt")?.id??null,dx(),as({preserveCamera:t}),n&&rw(n),Fw(),SR(),Dw(),fa(),yn(),ft&&Nt.has(ft)?Sf():(ft=null,e?uf():r_())}function dx(){let t=zt(),e=t.ui,n=qC();R0.textContent=de(e.totalTurns),Bd.textContent=fx(t.lineCount,t.pendingBytes),zA.textContent=de(n.prompts),HA.textContent=de(n.error),GA.textContent=de(n.long),WA.textContent=de(n.file),XA.textContent=de(n.diff),$A.textContent=de(n.artifact),YA.textContent=de(n.compaction),_x(t.tokenTelemetry),Jw(),ma()}function qC(){let t={prompts:0,error:0,long:0,file:0,diff:0,artifact:0,compaction:0};return Ve.forEach(e=>{if(uu(e)){if(e.type==="prompt"){t.prompts+=1;return}c0.forEach(n=>{vu(e,n)&&(t[n]+=1)})}}),t}function Nn(t){return`${t}`}function fx(t,e=0){return e>0?`${de(t)} + ${Go(e)} pending`:de(t)}function ou(t){return`${t.parserVersion} / ${t.schemaVersion}`}function Zd(t,e=Nn){return["Renderable events",e(t.renderableEventCount)]}function px(t,e=Nn){return["Unknown events",e(t.unknownEventCount)]}function mx(t,e=Nn){return["Malformed lines",e(t.malformedLineCount)]}function gx(t,e=Nn,n="Skipped payloads"){return[n,e(t.skippedLargePayloadCount)]}function xx(t,e=Nn){return["Warnings",e(t.warnings.length)]}function Kd(t,e=Nn,n="Skipped payloads"){return[px(t,e),mx(t,e),gx(t,e,n),xx(t,e)]}function ZC(t,e=Nn,n="Skipped payloads"){return[["Parser",ou(t)],Zd(t,e),...Kd(t,e,n)]}function ua(t){return t.map(([e,n])=>`${e}: ${n}`)}function KC(t){return(t.unknownEventTypes||[]).map(e=>`${e.sourceEventType}: ${e.count}`)}function JC(t){let[,e]=px(t);return[`${e} total`,...KC(t)]}function jC(t){return(t.unknownEventTypes||[]).map(e=>`Unknown: ${e.sourceEventType} x${e.count}`)}function QC(t){return(t.malformedLines||[]).slice(0,5).map(e=>`Line ${e.lineNumber}: ${e.error}`)}function ew(t){return[...ua([mx(t),gx(t,Nn,"Skipped large payloads")]),...QC(t)]}function tw(t){return[...ua([["Parser",ou(t)],["Lines read",Nn(t.totalLinesRead)],["Parsed events",Nn(t.parsedEventCount)],Zd(t),...Kd(t,Nn,"Skipped large payloads"),["Token telemetry",t.tokenTelemetryAvailable?"available":"not logged"]]),...jC(t)]}function _x(t){let e=t?.latestContextPercent??null;hg.textContent=e===null?"n/a":`${Math.min(999,Math.round(e))}%`,hg.title=t?.latestTotalTokens&&t?.contextWindow?`${de(t.latestTotalTokens)} / ${de(t.contextWindow)} tokens`:"No token telemetry in this session";let n=t?.samples?.length?t.samples.slice(-G0):[];if(!n.length){dg.replaceChildren();return}let i=document.createDocumentFragment();n.forEach(s=>{let r=document.createElement("span"),o=Math.max(2,Math.min(28,Math.round((s.contextPercent??0)/4)));r.style.height=`${o}px`,r.title=`${Math.round(s.contextPercent??0)}% context at event ${s.eventIndex}`,i.append(r)}),dg.replaceChildren(i)}function nw(t,e){if(!e)return t;let n=t.samples??[],s=n.at(-1)?.eventIndex===e.eventIndex?n:[...n,e].slice(-G0);return{...t,samples:s,latestTotalTokens:e.totalTokens,contextWindow:e.contextWindow,latestContextPercent:e.contextPercent,primaryRateLimitPercent:e.primaryRateLimitPercent,secondaryRateLimitPercent:e.secondaryRateLimitPercent}}function iw(){let t=Cx(zt());if(t.nodes.length!==Ve.length||t.connectors.length!==is.length)return!1;for(let n=0;n<t.nodes.length;n+=1)if(t.nodes[n].id!==Ve[n]?.id)return!1;for(let n=0;n<t.connectors.length;n+=1)if(!LA(t.connectors[n],is[n]))return!1;let e=performance.now();return t.nodes.forEach((n,i)=>{let s=Ve[i];s.kind=n.kind,s.eventIndex=n.eventIndex,s.title=n.title,s.body=n.body,s.detail=n.detail,s.source=n.source,n.isNew&&(s.freshUntil=Math.max(s.freshUntil||0,n.freshUntil||0)),s.isNew=n.isNew||Us(s,e),s.baseScale=n.baseScale,s.matrixDirty=!0,_t==="overview"&&s.target.copy(n.target)}),is=t.connectors,vx(),as({preserveCamera:!0}),fa(),dx(),yn(),ft&&Nt.has(ft)?Sf():uf(),!0}function sw(){return new Map(Ve.map(t=>[t.id,{position:t.position.clone(),target:t.target.clone(),scale:t.scale}]))}function vx(){Nt=new Map,Jo=new Map,Ve.forEach(t=>{Nt.set(t.id,t);let e=Jo.get(t.promptId);e?e.push(t):Jo.set(t.promptId,[t])})}function rw(t){let e=new Map(is.map(a=>[Dc(a),Fc(a)])),n=ow(t),i=n?t.get(kr):null,s=aw(t),r=s?t.get(Is):null,o=performance.now();Ve.forEach(a=>{let l=t.get(a.id);if(l){a.position.copy(l.position),a.scale=l.scale,a.matrixDirty=!0;return}let c=a.id===n?i:a.id===s?r:null;if(c){a.position.copy(c.position),a.scale=Math.max(a.scale,c.scale),a.freshUntil=Math.min(a.freshUntil||Number.POSITIVE_INFINITY,o+Hd*.58),a.isNew=!0,a.matrixDirty=!0;return}a.position.copy(_t==="inspect"?a.target:lw(a,t,e)),a.matrixDirty=!0})}function ow(t){if(!t.has(kr))return null;let e=Ve.filter(n=>n.type==="compaction"&&n.id!==kr&&!t.has(n.id));return e.length?e.reduce((n,i)=>i.eventIndex>=n.eventIndex?i:n).id:null}function aw(t){if(!t.has(Is))return null;let e=Ve.filter(n=>n.type==="prompt"&&n.id!==Is&&!t.has(n.id));return e.length?e.reduce((n,i)=>i.eventIndex>=n.eventIndex?i:n).id:null}function lw(t,e,n){let i=n.get(t.id);if(!i)return t.target;let s=e.get(i);return s?s.position:Nt.get(i)?.position??t.target}function yx(t,e){let n=new Set(t.assistantMessages.map(o=>o.id)),i=new Map,s=new Set;return e.forEach(o=>{let a=o.assistantMessageId||"";if(!n.has(a))return;let l=i.get(a)??[];l.push(o),i.set(a,l),s.add(o.id)}),[...t.assistantMessages.map(o=>({type:"assistant",message:o,calls:i.get(o.id)??[]})),...e.filter(o=>!s.has(o.id)).map(o=>({type:"call",call:o}))].sort((o,a)=>{let l=Ug(o)-Ug(a);return l!==0?l:kg(o)-kg(a)})}function Ug(t){return t.type==="assistant"?t.message.eventIndex:t.call.eventIndex}function kg(t){return t.type==="assistant"?0:1}function cw(t,e){if(e.type==="compaction")return{above:gg,below:xg,promptCalls:[],subagentBranches:[],activityUnits:[],activityDepth:0,fileRows:0};let n=e.prompt,i=Xx(t,n),s=Nx(i),r=new Set(s.flatMap(u=>[u.launch?.id,u.result?.id].filter(f=>!!f))),o=i.filter(u=>!r.has(u.id)),a=yx(n,o),l=uw(a),c=Math.ceil((n.fileChanges?.length??0)/wr),h=l+fw(c)+vg,d=l+pw(s)+vg;return{above:Math.max(gg,h),below:Math.max(xg,d),promptCalls:i,subagentBranches:s,activityUnits:a,activityDepth:l,fileRows:c}}function uw(t){if(!t.length)return 0;let e=0,n=0;return t.forEach((i,s)=>{let r=hw(s);e=Math.max(e,r),n=Math.min(n,r),i.type==="assistant"&&i.calls.forEach((o,a)=>{let l=r+Sx(a,i.calls.length);e=Math.max(e,l),n=Math.min(n,l)})}),Math.max(Math.abs(n),Math.abs(e))+_T}function hw(t){return $c(t).z}function $c(t){let e=W0+t*X0,n=vT+Math.min(ST,t*yT);return new P(Math.sin(e)*n,-MT-t*bT+Math.cos(e)*ET,Math.cos(e)*n)}function dw(t,e){let n=$c(e);return new P(n.x,As+n.y,t+n.z)}function Vg(t,e,n,i,s){if(i==null){let a=$c(s);return{fromId:t,toId:e,waypoints:[new P(0,As+a.y*.36,n+a.z*.18),new P(a.x*.58,As+a.y*.72,n+a.z*.58)]}}let r=5,o=[];for(let a=1;a<=r;a+=1){let l=a/(r+1),c=i+(s-i)*l,h=$c(c);o.push(new P(h.x,As+h.y,n+h.z))}return{fromId:t,toId:e,waypoints:o}}function Sx(t,e){return Mx(t,e,md,AT,.32)}function Mx(t,e,n,i,s){let r=Math.floor(t/n),o=t%n,a=Math.min(e-r*n,n);return(o-(a-1)/2)*i+r*s}function fw(t){return t<=0?0:IT+(t-1)*NT+PT}function pw(t){return t.length?t.reduce((e,n,i)=>Math.max(e,mw(n,i)),0):0}function mw(t,e){let n=bx(t,e,0),i=Math.min(n.branchZ,t.result?n.resultZ:n.branchZ,t.nodes.length?gw(t.nodes,n.branchX,n.branchY,n.childStartZ):n.branchZ);return Math.abs(Math.min(0,i))}function bx(t,e,n){let i=e%2===0?1:-1,s=Math.floor(e/2),r=i*Math.min(zT,VT+s*HT),o=n-kT-s*GT,a=o-qT;return{side:i,lane:s,branchX:r,branchY:As-1.2-e%2*WT-s*XT,branchZ:o,launchX:r-i*$T,resultX:r+i*YT,resultZ:a,childStartZ:(t.result?a:o)-ZT}}function gw(t,e,n,i){let s=Ix(t),r=i,o={id:"",eventIndex:Number.NEGATIVE_INFINITY,target:new P(e,n,i),fileAxisX:e,fileAxisZ:i},a=0;return s.forEach(l=>{wx(l).forEach(h=>{let d=a,u=Qd(e,n,i,d),f=jd(i,d),g={...o,eventIndex:h.spine?.eventIndex??o.eventIndex,target:u,fileAxisX:e,fileAxisZ:f},_=[g];h.spine&&(g={id:h.spine.id,eventIndex:h.spine.eventIndex,target:u,fileAxisX:e,fileAxisZ:f},_[0]=g,o=g,r=Math.min(r,u.z));let m=au(u,f,e,e<0?-1:1);h.children.forEach((p,y)=>{let M=Rx(u,m,y,h.children.length),E={id:p.id,eventIndex:p.eventIndex,target:M,fileAxisX:e,fileAxisZ:f};_.push(E),r=Math.min(r,M.z)}),r=Math.min(r,xw(h.files,_,f)),a+=1})}),r}function xw(t,e,n){if(!t.length)return n;let i=n;return Ex(t,e).forEach(({parent:s,siblingIndex:r,siblingCount:o})=>{i=Math.min(i,Jd(s,n,r,o).z)}),i}function Ex(t,e){let n=new Map;return t.map(s=>{let r=Aw(s.eventIndex,e),o=n.get(r.id)??[],a=o.length;return o.push(s),n.set(r.id,o),{file:s,parent:r,siblingIndex:a}}).map(s=>({...s,siblingCount:n.get(s.parent.id)?.length??1}))}function _w(t){return t.x<0?-1:1}function au(t,e,n=0,i=_w(t)){let s=t.x-n,r=t.z-e,o=Math.hypot(s,r);return o<.001&&(s=i,r=0,o=1),s/=o,r/=o,{radialX:s,radialZ:r,tangentX:-r,tangentZ:s}}function vw(t,e,n,i){let s=au(t,e),r=Math.floor(n/md),o=n%md,a=Sx(n,i),l=TT+r*CT;return new P(t.x+s.radialX*l+s.tangentX*a,t.y-.48-o*wT-r*RT,t.z+s.radialZ*l+s.tangentZ*a)}function zg(t,e,n){let i=t.assistantMessageId||"";return n.has(i)?i:e}function Ax(t,e,n){if(t==null)return n;let i=n,s=Number.NEGATIVE_INFINITY;return e.forEach(r=>{r.eventIndex<=t&&r.eventIndex>=s&&(i=r,s=r.eventIndex)}),i}function yw(t,e,n){return!e.length||t==null?e.at(-1)?.id??n:Ax(t,e,null)?.id??n}function Jd(t,e,n,i){let s=t.target,r=t.fileAxisX??0,o=t.fileAxisZ??e,a=au(s,o,r,s.x<r?-1:1),l=Math.floor(n/wr),c=n%wr,h=Math.min(i-l*wr,wr),d=c-(h-1)/2,u=l*wr+c,f=LT+l*FT,g=d*DT;return new P(s.x+a.radialX*f+a.tangentX*g,s.y-1.62-u*OT-l*BT,s.z+a.radialZ*f+a.tangentZ*g)}function Tx(t,e,n){return{fromId:t,toId:e,waypoints:[new P(n.x,n.y-UT,n.z)]}}function Cx(t){let e=[],n=[],i=Gx(t,{includeCompactionProgress:!0}),s=i.map(c=>cw(t,c)),o=s.reduce((c,h)=>c+h.above+h.below,0)/2,a=performance.now()+Hd,l=[];return i.forEach((c,h)=>{let d=s[h],u=o-d.above;if(o-=d.above+d.below,c.type==="compaction"){let A=c.compaction,F=A.eventIndex>ns,L={id:A.id,type:"compaction",kind:"compaction",promptId:A.id,promptIndex:c.compactionIndex,callIndex:-1,eventIndex:A.eventIndex,title:A.title,body:A.text,detail:A.detail,source:A,isNew:F,freshUntil:F?a:0,position:new P(0,_g,u),target:new P(0,_g,u),baseScale:.58,scale:.58};e.push(L),l.push(L);return}let{prompt:f,promptIndex:g}=c,_=e.length,{promptCalls:m,subagentBranches:p}=d,y=f.fileChanges||[],M=f.eventIndex>ns,E={id:f.id,type:"prompt",kind:"prompt",promptId:f.id,promptIndex:g,callIndex:-1,eventIndex:f.eventIndex??g,title:f.title,body:f.text,detail:f.text,source:f,isNew:M,freshUntil:M?a:0,position:new P(0,As,u),target:new P(0,As,u),baseScale:.78,scale:.78};e.push(E),l.push(E);let R=new Set(f.assistantMessages.map(A=>A.id)),S=d.activityUnits,w=[],x=E.id,T=null,N=0;S.forEach((A,F)=>{let L=dw(u,F);if(A.type==="call"){e.push(Es(f,g,A.call,N,L,a)),n.push(Vg(x,A.call.id,u,T,F)),w.push({id:A.call.id,eventIndex:A.call.eventIndex}),x=A.call.id,T=F,N+=1;return}let X=ww(f,g,A.message,N,L,a,A.calls.length?.58:.32);e.push(X),n.push(Vg(x,X.id,u,T,F)),w.push({id:X.id,eventIndex:A.message.eventIndex}),x=X.id,T=F,N+=1,A.calls.forEach((Y,ee)=>{let se=vw(X.target,u,ee,A.calls.length);e.push(Es(f,g,Y,N,se,a)),n.push([X.id,Y.id]),w.push({id:Y.id,eventIndex:Y.eventIndex}),N+=1})});let I=N+p.length*2;p.forEach((A,F)=>{let L=bx(A,F,u),X=I;if(I+=A.nodes.length,A.launch){let Y=Es(f,g,A.launch,N,new P(L.launchX,L.branchY,L.branchZ),a,{kind:"subagent",title:Wg(A.launch),baseScale:.52,fileAxisX:L.branchX,fileAxisZ:L.branchZ});e.push(Y),n.push([zg(A.launch,E.id,R),Y.id]),N+=1}if(A.result){let Y=Es(f,g,A.result,N,new P(L.resultX,L.branchY-.34,A.launch?L.resultZ:L.branchZ),a,{kind:"subagent-result",title:Wg(A.result),baseScale:.38,fileAxisX:L.branchX,fileAxisZ:A.launch?L.resultZ:L.branchZ});e.push(Y),n.push([A.launch?.id??zg(A.result,E.id,R),Y.id]),N+=1}Sw({branch:A,parentId:A.result?.id??A.launch?.id??E.id,prompt:f,promptIndex:g,branchX:L.branchX,branchY:L.branchY,startZ:L.childStartZ,callIndexStart:X,freshUntil:a,allNodes:e,allConnectors:n})});let D=new Map;for(let A=_;A<e.length;A+=1){let F=e[A];D.set(F.id,F)}let k=new Map,z=new Map;y.forEach(A=>{let F=A.callId&&D.has(A.callId)?A.callId:yw(A.eventIndex,w,E.id);k.set(A.id,F);let L=z.get(F)??[];L.push(A),z.set(F,L)}),y.forEach((A,F)=>{let L=k.get(A.id)??E.id,X=D.get(L)??E,Y=z.get(L)??[A],ee=Math.max(0,Y.findIndex(et=>et.id===A.id)),se=Jd(X,u,ee,Y.length),xe=`file-${tf(A)}`,ze={id:A.id,type:"fileChange",kind:xe,promptId:f.id,promptIndex:g,callIndex:N+F,eventIndex:A.eventIndex??f.eventIndex??g,title:A.shortPath||Fn(A.path)||"file change",body:A.preview||A.path,detail:Lw(A),source:A,isNew:A.eventIndex>ns,freshUntil:A.eventIndex>ns?a:0,position:se.clone(),target:se,baseScale:.42,scale:.42};e.push(ze),n.push(Tx(L,ze.id,X.target))})}),l.forEach((c,h)=>{let d=l[h+1];d&&n.push([c.id,d.id])}),e.forEach(c=>{c.home=c.target.clone()}),{nodes:e,connectors:n}}function Sw({branch:t,parentId:e,prompt:n,promptIndex:i,branchX:s,branchY:r,startZ:o,callIndexStart:a,freshUntil:l,allNodes:c,allConnectors:h}){let d=Ix(t.nodes),u=e,f=null,g=0,_=0,m=o;d.forEach(p=>{wx(p).forEach(M=>{let E=g,R=Qd(s,r,m,E),S=jd(m,E),w=u,x=[{id:w,eventIndex:M.spine?.eventIndex??Number.NEGATIVE_INFINITY,target:R,fileAxisX:s,fileAxisZ:S}];if(M.spine){let N=Es(n,i,M.spine,a+_,R,l,{kind:M.spine.name==="subagent.prompt"?"subagent":M.spine.kind,title:wd(M.spine),baseScale:Rd(M.spine),fileAxisX:s,fileAxisZ:S});c.push(N),h.push(Tw(u,N.id,s,r,m,f,E)),u=N.id,f=E,w=N.id,x[0]=N,_+=1}let T=au(R,S,s,s<0?-1:1);M.children.forEach((N,I)=>{let D=Rx(R,T,I,M.children.length),k=Es(n,i,N,a+_,D,l,{title:wd(N),baseScale:Rd(N),fileAxisX:s,fileAxisZ:S});c.push(k),h.push([w,k.id]),x.push(k),_+=1}),Mw({files:M.files,fileAnchors:x,axisZ:S,prompt:n,promptIndex:i,callIndexStart:a,childOffset:_,freshUntil:l,allNodes:c,allConnectors:h}),_+=M.files.length,g+=1})})}function Mw({files:t,fileAnchors:e,axisZ:n,prompt:i,promptIndex:s,callIndexStart:r,childOffset:o,freshUntil:a,allNodes:l,allConnectors:c}){Ex(t,e).forEach(({file:h,parent:d,siblingIndex:u,siblingCount:f},g)=>{let _=Jd(d,n,u,f),m=Es(i,s,h,r+o+g,_,a,{title:h.argumentPreview||wd(h),baseScale:Rd(h),fileAxisX:d.fileAxisX,fileAxisZ:d.fileAxisZ});l.push(m),c.push(Tx(d.id,m.id,d.target))})}function wx(t){let e=[],n=null;return t.prompt&&(n={spine:t.prompt,children:[],files:[]},e.push(n)),t.children.forEach(i=>{if(bw(i)){n={spine:i,children:[],files:[]},e.push(n);return}if(n||(n={spine:null,children:[],files:[]},e.push(n)),Ew(i)){n.files.push(i);return}n.children.push(i)}),e.length?e:[{spine:null,children:[],files:[]}]}function bw(t){return t.name==="subagent.message"||t.name==="subagent.compaction"||t.name==="subagent.more"}function Ew(t){return t.name==="subagent.file"}function Aw(t,e){return Ax(t,e,e[0])??e[0]}function jd(t,e){return t-e*KT}function Tw(t,e,n,i,s,r,o){let a=r??o-.85,l=6,c=[];for(let h=1;h<=l;h+=1){let d=h/(l+1),u=a+(o-a)*d;c.push(Qd(n,i,s,u))}return{fromId:t,toId:e,waypoints:c}}function Qd(t,e,n,i){let s=t<0?-1:1,r=W0+i*eC+s*.28,o=JT+Math.min(QT,i*jT);return new P(t+s*tC+Math.sin(r)*o*s,e-.9-i*nC+Math.cos(r)*iC,jd(n,i)+Math.cos(r)*o)}function Cw(t,e){return Mx(t,e,gd,oC,.2)}function Rx(t,e,n,i){let s=Math.floor(n/gd),r=n%gd,o=Cw(n,i),a=sC+s*rC;return new P(t.x+e.radialX*a+e.tangentX*o,t.y-.36-r*aC-s*lC,t.z+e.radialZ*a+e.tangentZ*o)}function Ix(t){let e=[],n=null;return t.forEach(i=>{if(i.name==="subagent.prompt"){n={prompt:i,children:[]},e.push(n);return}n||(n={prompt:null,children:[]},e.push(n)),n.children.push(i)}),e}function Es(t,e,n,i,s,r,{kind:o=n.kind||"tool",title:a=n.name,baseScale:l=n.status==="completed"?.3:.4,fileAxisX:c,fileAxisZ:h}={}){let d=n.eventIndex>ns;return{id:n.id,type:"call",kind:o,promptId:t.id,promptIndex:e,callIndex:i,eventIndex:n.eventIndex??t.eventIndex??e,title:a,body:n.argumentPreview||"",detail:Pw(n),source:n,isNew:d,freshUntil:d?r:0,position:s.clone(),target:s,fileAxisX:c,fileAxisZ:h,baseScale:l,scale:l}}function ww(t,e,n,i,s,r,o=.32){let a=n.eventIndex>ns;return{id:n.id,type:"message",kind:"assistant",promptId:t.id,promptIndex:e,callIndex:i,eventIndex:n.eventIndex??t.eventIndex??e,title:"assistant message",body:n.text,detail:n.text,source:n,isNew:a,freshUntil:a?r:0,position:s.clone(),target:s,baseScale:o,scale:o}}function Nx(t){let e=t.filter(Nw),n=t.filter(Px),i=new Set(n),s=new Map,r=new Map;n.forEach(a=>{let l=Gg(a);if(r.set(a.id,l),!l)return;let c=s.get(l)??[];c.push(a),s.set(l,c)});let o=e.map((a,l)=>{let c=Gg(a),d=(c?s.get(c)?.find(u=>i.has(u)&&u.eventIndex>=a.eventIndex):null)??n.find(u=>i.has(u)&&u.eventIndex>=a.eventIndex&&Rw(c,r.get(u.id)??null))??null;return d&&i.delete(d),{launch:a,result:d,nodes:Hg(a,d),eventIndex:Math.min(a.eventIndex,d?.eventIndex??a.eventIndex),order:l}}).filter(Iw);return i.forEach(a=>{o.push({launch:null,result:a,nodes:Hg(null,a),eventIndex:a.eventIndex,order:e.length+o.length})}),o.sort((a,l)=>a.eventIndex-l.eventIndex||a.order-l.order)}function Rw(t,e){return e===null||t===e}function Iw(t){return!!(t.result||t.nodes.length)}function Nw(t){return t.name==="spawn_agent"}function Px(t){return t.name==="subagent"}function Hg(t,e){return t?.subagentNodes?.length?t.subagentNodes:e?.subagentNodes??[]}function Gg(t){let e=`${t.argumentPreview||""}
${t.outputPreview||""}`;return e.match(/"agent_id"\s*:\s*"([^"]+)"/)?.[1]??e.match(/\bagent:\s*([^\s,}]+)/)?.[1]??e.match(/"agent_path"\s*:\s*"([^"]+)"/)?.[1]??null}function Wg(t){return tu(t.name)??(Px(t)?"subagent result":"subagent launch")}function wd(t){let e=tu(t.name);return e?t.name==="subagent.more"&&t.argumentPreview?t.argumentPreview:e:t.name}function Rd(t){return t.name==="subagent.prompt"?.34:t.name==="subagent.more"?.26:t.status==="completed"?.24:.32}function Pw(t){let e=[`call: ${t.name}`,`kind: ${t.kind}`,`status: ${t.status}`,t.assistantMessageId?`assistant message: ${t.assistantMessageId}`:"",t.subagentSessionPath?`subagent session: ${t.subagentSessionPath}`:"",t.subagentNodes?.length?`subagent nodes: ${t.subagentNodes.length}`:"",t.startedAt?`started: ${t.startedAt}`:"",t.completedAt?`completed: ${t.completedAt}`:"",t.durationMs!==null&&t.durationMs!==void 0?`duration: ${Zm(t.durationMs)}`:"","","arguments:",t.argumentPreview||"{}"];return t.outputPreview&&e.push("","output:",t.outputPreview),e.filter(Boolean).join(`
`)}function Lw(t){return[`change: ${t.changeType}`,`path: ${t.path}`,t.callId?`call: ${t.callId}`:"",t.timestamp?`time: ${t.timestamp}`:"","",t.detail||t.preview].filter(Boolean).join(`
`)}function Fw(){let t=Ve.filter(r=>r.type==="prompt"),e=Ve.filter(r=>r.type==="call"),n=Ve.filter(r=>r.type==="fileChange"),i=Ve.filter(r=>r.type==="message"),s=Ve.filter(r=>r.type==="compaction");ui.prompt=qo("prompt",t,AC,IC),ui.call=qo("call",e,Pg,Lg),ui.fileChange=qo("fileChange",n,CC,PC),ui.message=qo("message",i,Pg,Lg),ui.compaction=qo("compaction",s,TC,NC)}function qo(t,e,n,i){if(!e.length)return;let s=new ho(n.clone(),i.clone(),e.length);s.instanceMatrix.setUsage(Mh),s.userData.bucket=t,s.userData.nodes=e,s.boundingSphere=new sn(new P,600),s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!1,In.add(s);let r=performance.now();return e.forEach((o,a)=>{o.bucket=t,o.instanceIndex=a,Kx(s,o,a,0,r),o.matrixDirty=!1,s.setColorAt(a,af(o,!1))}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s}function Dw(){let t=Math.max(od(is),od(ra),Math.max(Ve.length-1,1)),e=new Float32Array(t*2*3),n=new It;n.setAttribute("position",new kt(e,3)),n.setDrawRange(0,od(ra)*2),n.boundingSphere=new sn(new P,600);let i=new xs({color:6547455,transparent:!0,opacity:.42});Yn=new cr(n,i),Yn.frustumCulled=!1,In.add(Yn)}function Lx(){Object.values(ui).forEach(t=>{t&&(In.remove(t),t.geometry.dispose(),t.material.dispose())}),ui={},Yn&&(In.remove(Yn),Yn.geometry.dispose(),Yn.material.dispose(),Yn=null),an&&(In.remove(an),an.geometry.dispose(),an.material.dispose(),an=null),Xg(_d,ia),Xg(vd,sa)}function Xg(t,e){t.forEach(n=>{Dx(n,e)}),t.clear()}function Fx(t,e,n){Array.from(t.keys()).forEach(i=>{n.has(i)||(Dx(t.get(i),e),t.delete(i))})}function Dx(t,e){t?.forEach(n=>{e.remove(n),n.material.dispose()})}function Ox(t,e,n,i,s,r){let o=t.get(e);return o||(o=Array.from({length:n},(a,l)=>Ow(e,l/n,i,s,r)),t.set(e,o)),o}function Ow(t,e,n,i,s){let r=new Vn({color:s,transparent:!0,opacity:0,side:bn,depthWrite:!1,blending:wo}),o=new Yt(i,r);return o.userData={nodeId:t,offset:e},o.rotation.x=-Math.PI/2,o.visible=!1,n.add(o),o}function as({preserveCamera:t=!1}={}){let e;if(_t==="inspect"&&it){let n=ef(it);e=n;let i=new Map(n.placements.map(s=>[s.node.id,s]));Ve.forEach(s=>{let r=i.get(s.id);r?(s.target.copy(r.target),s.scale=r.scale):(s.target.set(s.position.x,zd,s.position.z),s.scale=0),s.matrixDirty=!0}),t||(Ke.target.set(0,.2,-n.laneDepth*.12),Fe.position.set(0,18,Math.max(27,n.laneDepth*.58)))}else Ve.forEach(n=>{n.target.copy(n.home??n.position),n.scale=n.baseScale,n.position.y<-1e3&&n.position.copy(n.target),n.matrixDirty=!0}),t||pa();Gw(),Bx(e),fa(),Hr=!0,lu()}function Bx(t){if(_t==="inspect"&&it){ra=(t??ef(it)).connectors;return}ra=is}function ef(t){let e=Ve.filter(f=>f.promptId===t),n=Bw(t),i=new Set(n.flatMap(f=>f.nodes.map(g=>g.id))),s=e.filter(f=>f.type==="prompt"||!i.has(f.id)).sort(kx),r=[...s.map((f,g)=>({type:"node",eventIndex:f.eventIndex,order:g*2,node:f})),...n.map(f=>({type:"branch",eventIndex:f.eventIndex,order:f.order*2+1,branch:f}))].sort(Vw),o=n.reduce((f,g)=>Math.max(f,g.nodes.length),0),a=Math.min(dT,Math.max(hT,Math.max(0,r.length-1)*fT,Math.max(0,o-1)*mg+8)),l=r.length>1?a/(r.length-1):0,c=a/2,h=new Map;r.forEach((f,g)=>{let _=c-g*l;f.type==="node"?h.set(f.node.id,_):f.branch.startZ=_});let d=s.map(f=>({node:f,target:new P(0,Vx(f),h.get(f.id)??0),scale:Yg(f)}));n.forEach(f=>{let g=f.side*(pT+f.lane*mT);f.nodes.forEach((_,m)=>{d.push({node:_,target:new P(g+Hw(_,m,f.side),zw(_),f.startZ-m*mg),scale:Yg(_)})})});let u=Uw(r,s,n);return{placements:d,visibleNodes:Ux([...s,...n.flatMap(f=>f.nodes)]),mainNodes:s,branches:n,connectors:u,laneDepth:a}}function Bw(t){let e=Ae,n=e?.prompts.find(i=>i.id===t);return!e||!n?[]:Nx(Xx(e,n)).map((i,s)=>{let r=Ux([i.launch?Nt.get(i.launch.id):null,...i.nodes.map(o=>Nt.get(o.id)),i.result?Nt.get(i.result.id):null]);return r.length?{nodes:r,eventIndex:i.eventIndex,order:s,side:s%2===0?-1:1,lane:Math.floor(s/2),startZ:0}:null}).filter(i=>!!i)}function Uw(t,e,n){let i=[];return e.slice(1).forEach((s,r)=>{i.push([e[r].id,s.id])}),n.forEach(s=>{let r=s.nodes[0];if(!r)return;let o=t.findIndex(l=>l.type==="branch"&&l.branch===s),a=kw(t,o)??e[0]??null;a&&i.push([a.id,r.id]),s.nodes.slice(1).forEach((l,c)=>{i.push([s.nodes[c].id,l.id])})}),i}function kw(t,e){for(let n=e-1;n>=0;n-=1){let i=t[n];if(i?.type==="node")return i.node}return null}function Ux(t){let e=new Set;return t.filter(n=>!n||e.has(n.id)?!1:(e.add(n.id),!0))}function kx(t,e){return t.type==="prompt"&&e.type!=="prompt"?-1:e.type==="prompt"&&t.type!=="prompt"?1:t.eventIndex-e.eventIndex||t.callIndex-e.callIndex||$g(t)-$g(e)}function Vw(t,e){let n=t.type==="node"&&t.node.type==="prompt",i=e.type==="node"&&e.node.type==="prompt";return n!==i?n?-1:1:t.eventIndex-e.eventIndex||t.order-e.order}function $g(t){return t.type==="prompt"?0:t.type==="message"?1:t.type==="call"?2:t.type==="fileChange"?3:4}function Vx(t){return t.type==="prompt"?1.15:t.type==="fileChange"?-.32:t.type==="message"?.62:t.type==="compaction"?.82:.24}function zw(t){return t.type!=="call"?Vx(t):t.source.name==="subagent.prompt"?.72:t.source.name==="subagent.compaction"?.54:t.source.name==="spawn_agent"?.46:t.source.name==="subagent"?.3:t.source.name==="subagent.file"?-.16:t.source.name==="subagent.message"?.2:.04}function Hw(t,e,n){if(t.type!=="call"||e===0||t.source.name==="subagent.prompt"||t.source.name==="subagent"||t.source.name==="subagent.more")return 0;let i=[.3,-.3,.58,-.58];return i[(e-1)%i.length]*n}function Yg(t){return t.type==="prompt"?.62:t.type==="fileChange"?.36:t.type==="message"?.28:t.type==="compaction"?.48:t.source.name==="spawn_agent"?.44:t.source.name==="subagent"?.36:t.source.name==="subagent.prompt"?.34:t.source.name==="subagent.more"?.26:Math.min(.34,Math.max(.24,t.baseScale))}function Gw(){let t=_t==="inspect"&&!!it;z0.classList.toggle("inspect-active",t),nt.setAttribute("aria-label",t?"Perlustron focused prompt inspection":"Perlustron session workflow"),zx()}function zx(){let t=_t==="overview"&&Ts==="two-d";B0.forEach(e=>{if(e.dataset.viewAction!=="two-d")return;let n=t?"Switch to 3D overview":"Switch to 2D overview";e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n})}function Hx(t){qd(),_t="overview",Ts=t,as({preserveCamera:!0}),pa(),zx()}function Ww(){Hx(_t==="overview"&&Ts==="two-d"?"three-d":"two-d")}function Gx(t,{includeCompactionProgress:e=!1}={}){let n=Yw(t),i=[...n.map((r,o)=>({type:"prompt",eventIndex:Xw(t,n,r,o),prompt:r,promptIndex:o})),...(t.compactions||[]).map((r,o)=>({type:"compaction",eventIndex:r.eventIndex,compaction:r,compactionIndex:o}))],s=e?qw(t,i):null;return s&&i.push(s),i.sort((r,o)=>r.eventIndex-o.eventIndex)}function Xw(t,e,n,i){let s=e[i+1]?.eventIndex??Number.POSITIVE_INFINITY,r=$w(t,n),o=t.compactions?.filter(a=>a.eventIndex>n.eventIndex&&a.eventIndex<s).reduce((a,l)=>a===null||l.eventIndex>a?l.eventIndex:a,null)??null;return o!==null?Math.max(r,o+.25):r}function $w(t,e){let n=e.id===$x(t)?[...Zn.activeToolCalls,...Zn.completedToolCalls].map(i=>i.eventIndex):[];return Math.max(e.eventIndex,...e.calls.map(i=>i.eventIndex),...e.assistantMessages.map(i=>i.eventIndex),...(e.fileChanges||[]).map(i=>i.eventIndex),...n)}function Yw(t){let e=Wx(t);return e?[...t.prompts,e]:t.prompts}function Wx(t){let e=Zn.pendingPrompt;return!e||e.eventIndex<=t.latestEventIndex?null:{id:Is,eventIndex:e.eventIndex,timestamp:e.timestamp,title:e.title||"Incoming prompt",text:e.text,images:[],calls:[],assistantMessages:[],fileChanges:[]}}function Xx(t,e){if(e.id!==$x(t))return e.calls;let n=new Set(e.calls.map(s=>s.id)),i=[...Zn.activeToolCalls,...Zn.completedToolCalls].filter(s=>!n.has(s.id)&&s.eventIndex>t.latestEventIndex);return i.length?[...e.calls,...i]:e.calls}function $x(t){return Wx(t)?Is:t.prompts.at(-1)?.id??null}function qw(t,e){if(!oa)return null;let n=e.reduce((o,a)=>a.type!=="prompt"?o:!o||a.eventIndex>=o.eventIndex?a:o,null),s=Math.max(t.latestEventIndex,n?.eventIndex??0)+.5,r={id:kr,eventIndex:s,timestamp:t.lastModifiedAt||t.generatedAt||null,title:"Compacting context",text:"Compaction in progress",detail:["compaction: in progress",n?`anchor: ${n.prompt.title}`:"",t.pendingBytes>0?`pending bytes: ${t.pendingBytes}`:""].filter(Boolean).join(`
`),replacedMessageCount:0,encrypted:!1,reason:"in progress"};return{type:"compaction",eventIndex:s,compaction:r,compactionIndex:t.compactions.length}}function Zw({label:t,detail:e,icon:n}){let i=document.createElement("div");i.className="root-row metadata-row",i.title=e;let s=Kw(n),r=document.createElement("span");r.className="root-copy";let o=document.createElement("strong");o.textContent=t;let a=document.createElement("small");return a.textContent=e,r.append(o,a),i.append(s,r),i}function Kw(t){let e=document.createElement("span");e.className=`root-icon ${t}`,e.setAttribute("aria-hidden","true");let n=document.createElementNS(ig,"svg");n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("focusable","false"),n.setAttribute("fill","none"),n.setAttribute("stroke","currentColor"),n.setAttribute("stroke-width","2"),n.setAttribute("stroke-linecap","round"),n.setAttribute("stroke-linejoin","round");for(let i of NA[t]){let s=document.createElementNS(ig,"path");s.setAttribute("d",i),n.append(s)}return e.append(n),e}function Jw(){let t=zt().metadata,e=(t?.dynamicTools||[]).map(s=>s.namespace?`${s.namespace}.${s.name}`:s.name).slice(0,6),n=[{label:"Codex",detail:[t?.originator,t?.cliVersion].filter(Boolean).join(" "),icon:"codex"},{label:"Source",detail:[t?.source,t?.modelProvider].filter(Boolean).join(" / "),icon:"source"},{label:"Git",detail:jw(t?.gitCommitHash)||Fn(t?.repositoryUrl||""),icon:"git"},{label:"Policy",detail:[t?.approvalPolicy,t?.sandbox].filter(Boolean).join(" / "),icon:"policy"},{label:"Model",detail:t?.model||"",icon:"model"},{label:"Tools",detail:e.join(", "),icon:"tools"}].filter(s=>s.detail),i=document.createDocumentFragment();n.forEach(s=>i.append(Zw(s))),UA.replaceChildren(i)}function jw(t){return t?t.slice(0,10):""}function tf(t){return gA.includes(t.changeType)?t.changeType:"update"}function Qw(){let t=performance.now(),e=t/1e3,n=Math.min(e-Ig,.04);Ig=e,Ic+=n;let i=mR(n);gR(t),MR(Ic,t),(i||Hr)&&lu(),i&&fa(),xR(t,Ic),vR(t,Ic),eR(n),WC(t),Ke.update(),pR(),Ai?.render(In,Fe)}function eR(t){let e=(wn.has("KeyW")?1:0)-(wn.has("KeyS")?1:0),n=(wn.has("KeyD")?1:0)-(wn.has("KeyA")?1:0),i=(wn.has($0)?1:0)-(R_()?1:0);if(!e&&!n&&!i||(fR(),Fe.getWorldDirection(hi),Cg.crossVectors(hi,Fe.up).normalize(),Xo.set(0,0,0).addScaledVector(hi,e).addScaledVector(Cg,n).addScaledVector(Fe.up,i),Xo.lengthSq()<1e-6))return;su();let s=Fe.position.distanceTo(Ke.target),r=Math.min(pC,Math.max(fC,s*mC)),o=nN()?r*gC:r;Xo.normalize().multiplyScalar(o*t),Fe.position.add(Xo),Ke.target.add(Xo)}function tR(t){t.preventDefault()}function nR(t){let e=t.deltaMode===WheelEvent.DOM_DELTA_PAGE?window.innerHeight:t.deltaMode===WheelEvent.DOM_DELTA_LINE?16:1,n=Math.max(-yg,Math.min(yg,t.deltaY*e/dC));Math.abs(n)<.001||(Id(-n),t.preventDefault())}function iR(t){if(!(t.button!==0||!aR(t))){Gc=t.pointerId,ca=!1,Ad=t.clientX,Td=t.clientY,ex=t.clientX,tx=t.clientY,Xd=Yx(t,q0),nt.classList.add("grabbing");try{nt.setPointerCapture(t.pointerId)}catch{}t.preventDefault(),t.stopImmediatePropagation()}}function sR(t){if(t.pointerId!==Gc)return;if((t.buttons&1)===0){nf(t);return}let e=t.clientX-Ad,n=t.clientY-Td;Ad=t.clientX,Td=t.clientY;let i=(t.clientX-ex)**2+(t.clientY-tx)**2;ca=ca||i>SC**2,(Xd?rR(t):oR(e,n))&&su(),t.preventDefault(),t.stopImmediatePropagation()}function nf(t){if(t.pointerId===Gc){Gc=null,Wc=Wc||ca,ca=!1,Xd=!1,nt.classList.remove("grabbing");try{nt.hasPointerCapture(t.pointerId)&&nt.releasePointerCapture(t.pointerId)}catch{}t.stopImmediatePropagation()}}function rR(t){return!Yx(t,Eg)||(bs.copy(q0).sub(Eg),bs.lengthSq()<=1e-6)?!1:(Fe.position.add(bs),Ke.target.add(bs),Ke.update(),!0)}function Yx(t,e){return cu(t),Vc.setFromCamera(Vr,Fe),!!Vc.ray.intersectPlane(Z0,e)}function oR(t,e){if(!t&&!e)return!1;let n=nt.getBoundingClientRect();if(n.width<=0||n.height<=0)return!1;let i=qx(),s=2*Math.tan(vr.degToRad(Fe.fov)/2)*i,r=s/n.height,o=s*Fe.aspect/n.width;return Ag.setFromMatrixColumn(Fe.matrix,0).normalize(),Tg.setFromMatrixColumn(Fe.matrix,1).normalize(),bs.set(0,0,0).addScaledVector(Ag,-t*o).addScaledVector(Tg,e*r),Fe.position.add(bs),Ke.target.add(bs),Ke.update(),!0}function qx(){if(Vc.setFromCamera(MC,Fe),Vc.ray.intersectPlane(Z0,xn))return Math.max(.001,Fe.position.distanceTo(xn));Fe.getWorldDirection(hi);let t=Math.abs(Fe.position.y-Vd);return Math.max(.001,t/Math.max(.12,Math.abs(hi.y)))}function aR(t){return Mt==="map"&&!Rs(t.target)}function lR(t){if(!(t.button!==2||!dR(t))){Wd=!0,la=t.pointerId,bd=t.clientX,Ed=t.clientY,sf();try{nt.setPointerCapture(t.pointerId)}catch{}t.preventDefault()}}function cR(t){if(!Wd||t.pointerId!==la)return;let e=t.clientX-bd,n=t.clientY-Ed;bd=t.clientX,Ed=t.clientY,uR(e,n),t.preventDefault()}function Zx(t){t.pointerId===la&&(hR(t.pointerId),t.preventDefault())}function uR(t,e){!t&&!e||($o.setFromQuaternion(Fe.quaternion,"YXZ"),$o.y-=t*Sg,$o.x=Math.max(-Mg,Math.min(Mg,$o.x-e*Sg)),Fe.quaternion.setFromEuler($o),sf(),su())}function hR(t=la){Wd=!1,la=null;try{t!=null&&nt.hasPointerCapture(t)&&nt.releasePointerCapture(t)}catch{}}function dR(t){return!(_t==="overview"&&Ts==="two-d")&&!Rs(t.target)}function fR(){Fe.position.distanceTo(Ke.target)>Y0&&sf()}function sf(){let t=Math.min(Y0,Math.max(yC,Fe.position.distanceTo(Ke.target)));Fe.getWorldDirection(hi),Ke.target.copy(Fe.position).addScaledVector(hi,t),Ke.update()}function pR(){zr.position.x=Math.round(Ke.target.x/Rc)*Rc,zr.position.z=Math.round(Ke.target.z/Rc)*Rc}function mR(t){let e=1-Math.pow(.001,t),n=!1;return Ve.forEach(i=>{i.position.distanceToSquared(i.target)<4e-6||(i.position.lerp(i.target,e),i.matrixDirty=!0,n=!0)}),n}function gR(t){let e=!1;Ve.forEach(n=>{n.isNew&&!Us(n,t)&&(n.isNew=!1,n.matrixDirty=!0,e=!0)}),e&&yn()}function xR(t,e){let n=Ve.filter(o=>o.type==="compaction"&&Ln(o)&&Us(o,t)),i=new Map;n.forEach(o=>{i.set(o.id,{position:o.position,eventIndex:o.eventIndex,progress:rf(o,t),inProgress:!1})});let s=oa?_R():null;if(s){let o=Hc?t-Hc:0;i.set(kr,{position:s.position,eventIndex:s.eventIndex,progress:o/2200%1,inProgress:!0})}let r=new Set(i.keys());Fx(_d,ia,r),i.forEach((o,a)=>{let l=Ox(_d,a,gT,ia,wC,Xc.compaction),c=o.inProgress?.82:Math.sin(Math.min(1,o.progress)*Math.PI);l.forEach((h,d)=>{let u=(o.progress+h.userData.offset)%1,f=Math.pow(1-u,o.inProgress?1.35:1.8)*(.18+c*.56);h.position.set(o.position.x,o.position.y-(o.inProgress?.82:.66),o.position.z),h.scale.setScalar(o.inProgress?1.45+u*6.2+Math.sin(e*5.2)*.16:1.2+u*8.4),h.rotation.z=e*(o.inProgress?-.9:.45)+o.eventIndex*.01+d*.72,h.material.opacity=f,h.visible=f>.012})})}function _R(){let t=Nt.get(kr);if(t)return t;if(it){let e=Nt.get(it);if(e?.type==="prompt")return e}return lf()??s_()??i_()}function vR(t,e){let n=Ve.filter(a=>a.type==="prompt"&&Ln(a)&&Us(a,t)),i=Zn.assistantStreaming?lf():null,s=i&&Ln(i)?i:null,r=yR(s?[...n,s]:n),o=new Set(r.map(a=>a.id));Fx(vd,sa,o),r.forEach(a=>{let l=Ox(vd,a.id,xT,sa,RC,Xc.prompt),c=rf(a,t),h=Math.sin(Math.min(1,c)*Math.PI);l.forEach((d,u)=>{let f=(c+d.userData.offset)%1,g=Math.pow(1-f,1.55)*(.1+h*.38);d.position.set(a.position.x,a.position.y-.74,a.position.z),d.scale.set(1+f*3.2,1+f*5.4,1),d.rotation.z=e*.72+a.eventIndex*.012+u*Math.PI*.5,d.material.opacity=g,d.visible=g>.01})})}function yR(t){let e=new Set;return t.filter(n=>e.has(n.id)?!1:(e.add(n.id),!0))}function SR(){if(!Ve.length)return;let t=new It;t.setAttribute("position",new kt(new Float32Array(Ve.length*3),3)),t.setAttribute("color",new kt(new Float32Array(Ve.length*3),3)),t.boundingSphere=new sn(new P,600);let e=new ur({size:3,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1}),n=new fo(t,e);n.frustumCulled=!1,n.renderOrder=5,n.userData.nodes=Ve,an=n,In.add(n),Hr=!0,lu()}function lu(){if(!an)return;let t=an.geometry.getAttribute("position"),e=t.array;Ve.forEach((n,i)=>{let s=i*3;Ln(n)?(e[s]=n.position.x,e[s+1]=n.position.y,e[s+2]=n.position.z):(e[s]=0,e[s+1]=zd,e[s+2]=0)}),t.needsUpdate=!0,Hr&&t_()}function MR(t,e){Object.values(ui).forEach(n=>{if(!n)return;let i=!1;n.userData.nodes.forEach((s,r)=>{let o=Us(s,e),a=s.id===ft;!s.matrixDirty&&!o&&!a||(Kx(n,s,r,t,e,o,a),s.matrixDirty=!1,i=!0)}),i&&(n.instanceMatrix.needsUpdate=!0)})}function Kx(t,e,n,i,s=performance.now(),r=Us(e,s),o=e.id===ft){if(!Ln(e)){Cn.position.set(0,zd,0),Cn.rotation.set(0,0,0),Cn.scale.setScalar(0),Cn.updateMatrix(),t.setMatrixAt(n,Cn.matrix);return}let a=rf(e,s),l=r&&e.type==="compaction",c=r?l?.18+qg(a)*1.08:.26+qg(a)*.74:1,h=l?.28:.16,d=r?1+Math.max(0,Math.sin(i*(l?14:9)+e.eventIndex))*h:1,u=(o?1.18:r?1+Math.sin(i*2.3+e.eventIndex)*.018:1)*d;Cn.position.copy(e.position),_t==="inspect"||!r&&!o?Cn.rotation.set(0,0,0):l?Cn.rotation.set(i*1.45,i*2.2+e.eventIndex*.03,i*1.1):Cn.rotation.set(.08*Math.sin(i+e.eventIndex),i*.2+e.eventIndex*.07,0),Cn.scale.setScalar(e.scale*c*u),Cn.updateMatrix(),t.setMatrixAt(n,Cn.matrix)}function Us(t,e){return!!(t.freshUntil&&t.freshUntil>e)}function rf(t,e){return!t.freshUntil||t.freshUntil<=e?1:Math.max(0,Math.min(1,1-(t.freshUntil-e)/Hd))}function qg(t){return 1-Math.pow(1-t,3)}function fa(){if(!Yn)return;let t=Yn.geometry.getAttribute("position"),e=t.array,n=0,i=(s,r)=>{let o=n*6;e[o]=s.x,e[o+1]=s.y,e[o+2]=s.z,e[o+3]=r.x,e[o+4]=r.y,e[o+5]=r.z,n+=1};ra.forEach(s=>{let r=Fc(s),o=Dc(s),a=Nt.get(r),l=Nt.get(o);if(!a||!l||!Ln(a)||!Ln(l))return;let c=a.position;Array.isArray(s)||s.waypoints.forEach(h=>{i(c,h),c=h}),i(c,l.position)}),Yn.geometry.setDrawRange(0,n*2),t.needsUpdate=!0}function bR(t){if(Wc){Wc=!1;return}cu(t);let e=Jx();e&&Xr(e)}function ER(t){cu(t);let e=Jx();if(e){if(e.type==="compaction"){it=null,_t="overview",as(),Xr(e);return}e.type==="prompt"?o0(e.id,e):o0(e.promptId,e)}}function cu(t){let e=nt.getBoundingClientRect();Vr.x=(t.clientX-e.left)/e.width*2-1,Vr.y=-((t.clientY-e.top)/e.height*2-1)}function Jx(){let t=AR();if(t)return t;xd.setFromCamera(Vr,Fe);let e=Object.values(ui).filter(i=>!!i);an&&e.push(an);let n=xd.intersectObjects(e,!1);for(let i of n){if(i.object===an&&i.index!==void 0){let s=an.userData.nodes[i.index]||null;if(s&&Ln(s))return s;continue}if(i.instanceId!==void 0){let r=i.object.userData.nodes[i.instanceId]||null;if(r&&Ln(r))return r}}return null}function AR(){let t=nt.getBoundingClientRect(),e=t.left+(Vr.x+1)/2*t.width,n=t.top+(1-Vr.y)/2*t.height,i=null,s=bg*bg;return Ve.forEach(r=>{if(!Ln(r)||(xn.copy(r.position).project(Fe),xn.z<-1||xn.z>1))return;let o=t.left+(xn.x+1)/2*t.width,a=t.top+(1-xn.y)/2*t.height,l=(o-e)**2+(a-n)**2;l<=s&&(i=r,s=l)}),i}function rs(t){nu=t??{},Mt==="raw"&&Ae&&_f()}function jx(){nu=null,Mt==="raw"&&Ae&&_f()}function Xr(t,{reveal:e=!0,skipStableRender:n=!1}={}){if(!t)return;ft=t.id;let i=TR(t);if(n&&Br?.nodeId===t.id&&Br.signature===i&&hf()){rs(t.source),Fs();return}e&&o_(),yn(),kd.textContent=OA(t),os.classList.toggle("prompt-context",t.type==="prompt"),Dd(y0(t),"Selection"),Ud.textContent=M0(t),Fd(v0(t)),Od.textContent=S0(t),rs(t.source),Fs(),of(b0(t));let s=t.detail||t.body||t.title;t.type==="prompt"?CR(s):Qx(s),Br={nodeId:t.id,signature:i}}function TR(t){let e=b0(t).map(n=>[n.id,n.eventIndex,n.imageIndex,n.detail??"",n.mimeType].join("")).join("");return[t.id,t.type,t.kind,t.eventIndex,t.type==="prompt"?t.promptIndex:"",y0(t),M0(t),v0(t),t.detail||t.body||t.title,e].join("")}function Qx(t){Ur.classList.remove("stream-markdown"),Ur.textContent=t}function CR(t){Ur.classList.add("stream-markdown"),Ur.replaceChildren(IR(t)??FR(t))}var wR=["File","Side","Lines","Node position","Page URL","Frame","Target","Target selector","Target path","Comment"],RR=[{label:"File",field:"File"},{label:"Side",field:"Side"},{label:"Lines",field:"Lines"},{label:"Node",field:"Node position"},{label:"Target",field:"Target"},{label:"Selector",field:"Target selector"},{label:"Path",field:"Target path"},{label:"Page",field:"Page URL",asLink:!0},{label:"Frame",field:"Frame"}];function IR(t){if(!/^#\s+Diff comments:\s*$/m.test(t))return null;let e=NR(t);if(!e.length)return null;let n=document.createDocumentFragment(),i=document.createElement("section");i.className="annotation-prompt";let s=document.createElement("h1");s.textContent="Diff comments",i.append(s);let r=t.match(/^- Current URL:\s*(.+)$/m)?.[1]?.trim();return e.forEach(o=>{let a=document.createElement("article");a.className="annotation-item";let l=document.createElement("span");l.className="annotation-marker",l.textContent=`Comment ${o.number}`,a.append(l);let c=document.createElement("p");c.className="annotation-comment",c.textContent=Zg(o,"Comment")||"No comment text.",a.append(c);let h=document.createElement("dl");h.className="annotation-meta",RR.forEach(d=>{Kg(h,d.label,Zg(o,d.field),d.asLink)}),Kg(h,"Current",r,!0),a.append(h),i.append(a)}),n.append(i),n}function NR(t){let e=t.replace(/\r\n?/g,`
`),n=[...e.matchAll(/^##\s+Comment\s+(\d+)\s*$/gm)];return n.map((i,s)=>{let r=n[s+1]?.index??e.search(/\n# In app browser:/),o=r>=0?r:e.length,a=e.slice((i.index??0)+i[0].length,o);return{number:i[1],fields:PR(a)}})}function PR(t){let e=new Map,n=t.split(`
`),i=0;for(;i<n.length;){let s=n[i].match(/^([A-Z][A-Za-z ]+):\s*(.*)$/),r=s?.[1];if(!r||!e_(r)){i+=1;continue}let o=s[2].trim();if(o){e.set(r,o),i+=1;continue}let a=[];for(i+=1;i<n.length;){let l=n[i];if(!l.trim()||/^#{1,6}\s+/.test(l)||LR(l))break;a.push(l.trim()),i+=1}e.set(r,a.join(`
`).trim())}return e}function e_(t){return wR.includes(t)}function LR(t){let e=t.match(/^([A-Z][A-Za-z ]+):/);return!!(e&&e_(e[1]))}function Zg(t,e){return t.fields.get(e)??""}function Kg(t,e,n,i=!1){let s=n?.trim();if(!s)return;let r=document.createElement("dt");r.textContent=e;let o=document.createElement("dd");if(i&&/^https?:\/\//.test(s)){let a=document.createElement("a");a.href=s,a.target="_blank",a.rel="noopener noreferrer",a.textContent=s,o.append(a)}else o.textContent=s;t.append(r,o)}function FR(t){let e=document.createDocumentFragment(),n=t.replace(/\r\n?/g,`
`).split(`
`),i=0,s=(o,a)=>{o.innerHTML=Jg(a)},r=(o,a)=>{o.innerHTML=a.map(l=>Jg(l.trim())).join("<br>")};for(;i<n.length;){let o=n[i]??"";if(!o.trim()){i+=1;continue}let a=o.match(/^\s*```(\S*)\s*$/);if(a){let d=[];for(i+=1;i<n.length&&!/^\s*```\s*$/.test(n[i]??"");)d.push(n[i]??""),i+=1;i<n.length&&(i+=1);let u=document.createElement("pre"),f=document.createElement("code");a[1]&&(f.dataset.language=a[1]),f.textContent=d.join(`
`),u.append(f),e.append(u);continue}let l=o.match(/^\s{0,3}(#{1,6})\s+(.+)$/);if(l){let d=Math.min(6,l[1].length),u=document.createElement(`h${d}`);s(u,l[2]),e.append(u),i+=1;continue}if(/^\s*[-*]\s+/.test(o)){let d=document.createElement("ul");for(;i<n.length;){let u=(n[i]??"").match(/^\s*[-*]\s+(.+)$/);if(!u)break;let f=document.createElement("li");s(f,u[1]),d.append(f),i+=1}e.append(d);continue}if(/^\s*\d+\.\s+/.test(o)){let d=document.createElement("ol");for(;i<n.length;){let u=(n[i]??"").match(/^\s*\d+\.\s+(.+)$/);if(!u)break;let f=document.createElement("li");s(f,u[1]),d.append(f),i+=1}e.append(d);continue}let c=[];for(;i<n.length;){let d=n[i]??"";if(!d.trim()||/^\s*```/.test(d)||/^\s{0,3}#{1,6}\s+/.test(d)||/^\s*[-*]\s+/.test(d)||/^\s*\d+\.\s+/.test(d))break;c.push(d.trim()),i+=1}let h=document.createElement("p");r(h,c),e.append(h)}if(!e.childNodes.length){let o=document.createElement("p");o.textContent="",e.append(o)}return e}function Jg(t){let e=[],n=li(t).replace(/`([^`]+)`/g,(i,s)=>{let r=`@@CODE_SPAN_${e.length}@@`;return e.push(`<code>${s}</code>`),r});return n=n.replace(/\[([^\]\n]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)/g,(i,s,r)=>`<a href="${r}" target="_blank" rel="noopener noreferrer">${s}</a>`),n=n.replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>"),n=n.replace(/(^|[^\*])\*([^*\n]+)\*/g,"$1<em>$2</em>"),n=n.replace(/@@CODE_SPAN_(\d+)@@/g,(i,s)=>e[Number(s)]??""),n}function of(t=[]){if(ug.replaceChildren(),!t.length)return;let e=document.createDocumentFragment();t.forEach((n,i)=>{let s=document.createElement("figure"),r=DR(n),o=document.createElement("a");o.className="stream-image-link",o.href=r,o.target="_blank",o.rel="noopener",o.title=`Prompt image ${i+1}`;let a=document.createElement("img");a.loading="eager",a.decoding="async",a.src=r,a.alt=`Prompt image ${i+1}`,a.addEventListener("load",()=>{s.classList.add("loaded"),s.classList.remove("load-error")}),a.addEventListener("error",()=>{s.classList.add("load-error"),l.textContent="Image unavailable in this local/privacy context; use Raw or Export for redacted evidence."});let l=document.createElement("figcaption"),c=n.detail?` (${n.detail})`:"";l.textContent=`${n.mimeType||"image"}${c}`,o.append(a),s.append(o,l),e.append(s)}),ug.append(e)}function DR(t){let e=new URL(t.url,window.location.origin),n=Ae?.lastModifiedAt||Ae?.generatedAt||`${t.eventIndex}`,i=Pn||Ae?.sessionPath||null;return e.searchParams.set("v",n),sx(e,{includeSource:!1,sessionPath:i}),`${e.pathname}${e.search}`}function yn(){Ve.forEach(t=>{t.matrixDirty=!0}),Object.values(ui).forEach(t=>{t&&(t.userData.nodes.forEach((e,n)=>{t.setColorAt(n,af(e,e.id===ft))}),t.instanceColor&&(t.instanceColor.needsUpdate=!0))}),Hr=!0,t_()}function t_(){if(!an)return;let t=an.geometry.getAttribute("color"),e=t.array;Ve.forEach((n,i)=>{let s=i*3,r=af(n,n.id===ft);e[s]=r.r,e[s+1]=r.g,e[s+2]=r.b}),t.needsUpdate=!0,Hr=!1}function af(t,e){let n=Xc[t.kind]??Xc.tool;return Ms.setHex(n),Ln(t)?e?Ms.lerp(wg,.38):t.isNew?Ms.lerp(wg,.24):_t==="inspect"&&t.promptId!==it?Ms.multiplyScalar(.34):pN(t)||Ms.multiplyScalar(.38):Ms.setRGB(0,0,0),Ms}function uu(t){return _t!=="inspect"||!it||t.promptId===it}function Ln(t){return uu(t)&&(!Fr||vu(t,Fr))}function n_(){let t=nt.getBoundingClientRect(),e=Math.max(1,Math.floor(t.width)),n=Math.max(1,Math.floor(t.height));Ai?.setSize(e,n,!1),Ai?.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),Fe.aspect=e/n,Fe.updateProjectionMatrix()}function pa({preserveDistance:t=!1}={}){if(!Ve.length||_t!=="overview")return;let e=cf(),n=Fe.aspect<.75,i=Math.max(18,Fe.position.distanceTo(Ke.target)),s=t?Math.min(90,i):n?Ts==="two-d"?uT:cT:Ts==="two-d"?H0:lT,r=e?OR(e):xn.set(0,0,0);Ke.target.set(r.x,r.y,r.z),Ts==="two-d"?Fe.position.set(r.x,r.y+s,r.z+.01):Fe.position.set(r.x+s*.38,r.y+s*.68,r.z+s*.58),Ke.update()}function OR(t){let e=Ve.filter(l=>l.promptId===t.promptId&&uu(l));if(e.length<=1)return Yc(t);let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;return e.forEach(l=>{let c=Yc(l);n=Math.min(n,c.x),i=Math.max(i,c.x),s=Math.min(s,c.y),r=Math.max(r,c.y),o=Math.min(o,c.z),a=Math.max(a,c.z)}),new P((n+i)/2,(s+r)/2,(o+a)/2)}function Yc(t){return t.home??t.target}function BR(){let t=cf();return t?Yc(t):null}function i_(){return Ve.reduce((t,e)=>!t||e.eventIndex>=t.eventIndex?e:t,null)}function lf(){return Ve.reduce((t,e)=>e.type!=="prompt"?t:!t||e.eventIndex>=t.eventIndex?e:t,null)}function UR(){return Ve.reduce((t,e)=>e.type!=="prompt"||e.id===Is?t:!t||e.eventIndex>=t.eventIndex?e:t,null)}function s_(){let t=Ae?Gx(Ae).at(-1):null;if(!t)return null;let e=t.type==="prompt"?t.prompt.id:t.compaction.id;return Nt.get(e)??null}function cf(){let t=s_();if(t?.type==="prompt")return t.id===Is?UR()??t:t;if(it){let e=Nt.get(it);if(e?.type==="prompt")return e}return lf()??t??i_()}function r_(){hu(),Br=null;let t=Ae,e=t?.prompts.at(-1);os.classList.remove("prompt-context"),kd.textContent="SESSION",Dd(t?.ui.sessionName||"Session overview","Session"),Ud.textContent=t?`${t.totals.promptCount} prompts`:"Loading",Fd(t?.lastModifiedAt||"Live context"),Od.textContent=e?.title||t?.ui.sessionName||"Session overview",Ur.classList.remove("stream-markdown"),Ur.textContent=YR(),of()}function uf(){Mt==="raw"&&(en.textContent=ft?"Selected event":"Session graph")}function o_(){if(!kR()){hu();return}os.classList.remove("hidden"),c_()}function kR(){return Mt==="map"}function hf(){return!os.classList.contains("hidden")}function hu(){os.classList.add("hidden"),Br=null,Fs()}function df(){if(!ft)return null;let t=Nt.get(ft);if(!t)return null;let e=fu().find(n=>n.node?.id===t.id||n.eventIndex===t.eventIndex);return e?{node:t,row:e}:{node:t}}function a_(){let t=df();return t?VR(t.row??x_(t.node)):null}function VR(t){let e=zt();return eg({source:Ci(e.source),lineNumber:t.lineNumber,eventIndex:t.eventIndex,kind:[t.role,t.eventType,t.toolName].filter(Boolean).join(" / "),summary:zR(t),parserVersion:e.parserVersion,schemaVersion:e.schemaVersion})}function zR(t){return Qm({role:t.role,eventType:t.eventType,toolName:t.toolName,filePath:t.filePath,rawSummary:HR(t)})}function HR(t){return[t.title,t.detail].filter(Boolean).join(" - ")}function Fs(){let t=!!df(),e=P_().length>1;os.classList.toggle("has-selection",t);for(let n of[ta,E0,A0,T0])n.disabled=!t;C0.disabled=!e,w0.disabled=!e,t||(ta.textContent="Copy Safe Ref")}async function GR(){let t=a_();if(!t){Fs();return}try{await navigator.clipboard.writeText(t),ta.textContent="Copied",window.setTimeout(()=>{ta.textContent="Copy Safe Ref"},1200)}catch(e){wi("COPY","Copy failed",Os(e))}}function WR(){let t=a_();if(!t){wi("COPY","Select an event first","Open Map or Timeline and select an event before copying a safe reference.");return}ls(t,"Copy-safe reference copied")}function XR(t){let e=t.shareabilitySummary,n=t.privacySummary,i=t.parserHealth;return tg({source:Ci(t.source),sessionName:t.ui.sessionName||t.sessionPath||`${Ci(t.source)} session`,totalTurns:t.ui.totalTurns,callCount:t.totals.callCount,fileChangeCount:t.totals.fileChangeCount,latestEventIndex:t.latestEventIndex,parserVersion:t.parserVersion,schemaVersion:t.schemaVersion,cliContext:[t.metadata.originator,t.metadata.cliVersion].filter(Boolean).join(" ")||null,rawLogsSafeToShare:e.rawLogsSafeToShare,rawLogCaution:e.rawLogCaution,sanitizedGraphNote:e.sanitizedGraphNote,redactedFieldCount:i.redactedFieldCount,imageCount:i.imageCount,apiTokenRequired:n.apiTokenRequired})}function du(t){let e=df();if(!e){Fs();return}let n=e.node.id,i=e.node.promptId,s=e.row?.source??e.node.source;rs(s),Qt(t),ft=n,it=i,yn(),t!=="map"&&ma()}function l_(t){Pr=t,c_()}function c_(){os.classList.toggle("compact",Pr),Pc.title=Pr?"Expand context":"Minimize context",Pc.setAttribute("aria-label",Pr?"Expand context":"Collapse context"),Pc.setAttribute("aria-expanded",String(!Pr))}function u_(t,e){for(let n of t)n.classList.toggle("active",e(n))}function h_(){k0.forEach(t=>{let e=t.dataset.appMode;if(e&&_0.has(e)){let n=f_(e);t.dataset.status=n.label,t.dataset.maturity=n.maturity,t.title=n.title}t.classList.toggle("active",e===Mt)}),pd.classList.toggle("active",Mt==="settings"),pd.setAttribute("aria-pressed",String(Mt==="settings"))}function d_(){u_(V0,t=>t.dataset.source===Ns)}async function $R(t){let e=nx(t);if(e===Ns)return;_u(),Ns=e,Pn=null,$n=null,jt=null,Ti=null,_n=null,Cs=null,d_(),da(),ax();let n=Bs;await $d({generation:n}),await Wr({suppressLiveAnimation:!0}),Ls(n)&&xu()}function YR(){return Ae?[`${Ci(Ae.source)} session`,`Prompts: ${Ae.totals.promptCount}`,`Turns: ${Ae.ui.totalTurns}`,`Calls: ${Ae.totals.callCount}`,`Completed calls: ${Ae.totals.completedCallCount}`,`Messages: ${Ae.totals.assistantMessageCount}`,`File changes: ${Ae.totals.fileChangeCount}`,`Context: ${T_(Ae.tokenTelemetry)}`,`Compactions: ${Ae.totals.compactionCount}`,`Unknown events: ${Ae.parserHealth?.unknownEventCount??0}`,`Malformed lines: ${Ae.parserHealth?.malformedLineCount??0}`,`Codex: ${[Ae.metadata.originator,Ae.metadata.cliVersion].filter(Boolean).join(" ")||"unknown"}`,`Model: ${Ae.metadata.model||Ae.metadata.modelProvider||"unknown"}`,`Records: ${Ae.lineCount}`,`Session file: ${Fn(Ae.sessionPath)||Ae.sessionPath}`].join(`
`):"Waiting for session data"}function ff(){let t=Mt!=="map";KA.classList.toggle("hidden",!t),z0.classList.toggle("mode-panel-active",t)}function ma(){if(ff(),Mt!=="map"){if(mf(),JA.textContent=Ci(Ae?.source??Ns),jA.textContent=qR(Mt),ZR(Mt),QA.classList.toggle("hidden",Mt!=="timeline"),!Ae){en.textContent="Waiting for session data",Bt.replaceChildren(vn("Waiting for session data."));return}switch(Mt){case"summary":KR();return;case"timeline":nI();return;case"transcript":lI();return;case"health":y_();return;case"insights":xI();return;case"diff":Ko();return;case"raw":_f();return;case"export":_I();return;case"settings":vI();return}}}function qR(t){return t.charAt(0).toUpperCase()+t.slice(1)}function f_(t){return EA[t]}function ZR(t){let e=f_(t);ld.textContent=e.label,ld.title=e.title,ld.className=`mode-status-label ${e.maturity}`}function KR(){if(!Ae){en.textContent="Waiting for session data",Bt.replaceChildren(vn("Waiting for session data."));return}let t=zt(),e=Ae.privacySummary,n=Ae.shareabilitySummary,i=t.tokenTelemetry,s=t.parserHealth,r=t.ui.sessionName||t.cwd?.split(/[\\/]/).filter(Boolean).at(-1)||`${Ci(t.source)} session`,o=n.rawLogsSafeToShare?"Raw logs marked safe to share":"Raw logs require review before sharing";en.textContent=`${o} - ${T_(i)}`;let a=document.createElement("div");a.className="summary-shell";let l=Je("Session Summary");l.classList.add("summary-hero"),l.append(Ds(`${r} is a ${Ci(t.source)} trace with ${de(t.ui.totalTurns)} turns, ${de(t.totals.callCount)} tool calls, and ${de(t.totals.fileChangeCount)} file changes.`),Ds(`${o}. Sanitized graph/export and copy-safe references reduce exposure compared with raw logs, but they still require human judgment before sharing.`));let c=document.createElement("div");c.className="summary-triage";let h=Je("What Happened",[`${de(t.ui.totalTurns)} turns across ${de(t.totals.promptCount)} prompts`,`${de(t.totals.completedCallCount)} completed tool calls; ${de(t.totals.fileChangeCount)} file changes`,`${de(s.unknownEventCount)} unknown and ${de(s.malformedLineCount)} malformed parser records`]),d=document.createElement("div");d.className="mode-actions",d.append(ut("Open Timeline",()=>Qt("timeline")),ut("Read Transcript",()=>Qt("transcript"))),h.append(d);let u=Je("Safe To Share",[o,n.sanitizedGraphNote||"Sanitized graph data is intended for UI and report sharing after review.",e.apiTokenRequired?"Local API token is required for browser/API access; token value is not shown.":"No local API token required by this run."]),f=document.createElement("div");f.className="mode-actions",f.append(ut("Copy Share Summary",()=>ls(XR(t),"Copy-safe share summary copied")),ut("Open Export",()=>Qt("export")),ut("Audit Raw",()=>Qt("raw"))),u.append(f),c.append(h,JR(t.insights),u);let g=document.createElement("div");g.className="summary-shell-grid",g.append(Cr("Session",[["Source",Ci(t.source)],["Session",r],["Model",t.metadata.model||t.metadata.modelProvider||"unknown"],["CLI",[t.metadata.originator,t.metadata.cliVersion].filter(Boolean).join(" ")||"unknown"],["Records",Jm(t.lineCount,t.pendingBytes)],["Size",Go(t.byteLength)],["Modified",sd(t.lastModifiedAt)||"unknown"],["Path",Fn(t.sessionPath)||t.sessionPath]]),Cr("Activity",[["Prompts",de(t.totals.promptCount)],["Turns",de(t.ui.totalTurns)],["Tool calls",`${de(t.totals.completedCallCount)} / ${de(t.totals.callCount)} completed`],["Assistant messages",de(t.totals.assistantMessageCount)],["File changes",de(t.totals.fileChangeCount)],["Compactions",de(t.totals.compactionCount)],["Dynamic tools",t.metadata.dynamicTools.length?t.metadata.dynamicTools.map(_=>_.name).slice(0,5).join(", "):"none logged"]]),Cr("Privacy",[["Mode",e.privacyMode||"unknown"],["Redaction profile",e.redactionProfile||"default"],["API token required",e.apiTokenRequired?"yes":"no"],["Images",e.imageRouteBehavior||"not logged"],["Telemetry",e.noTelemetry?"disabled":"check deployment settings"],["Third-party uploads",e.noThirdPartyUploads?"disabled":"check before sharing"]]),Cr("Shareability",[["Raw logs",n.rawLogsSafeToShare?"safe to share":"review/redact first"],["Raw caution",n.rawLogCaution||"Review prompts, paths, and tool output before sharing raw logs."],["Sanitized graph",n.sanitizedGraphNote||"Use sanitized graph/export surfaces for sharing."],["Redacted fields",de(s.redactedFieldCount)],["Images",de(s.imageCount)]]),Cr("Parser Health",ZC(s,de)),Cr("Token Context",[["Telemetry",i.latestTotalTokens?"available":"not logged"],["Latest tokens",de(i.latestTotalTokens)],["Context window",de(i.contextWindow)],["Context pressure",Tr(i.latestContextPercent)],["Primary rate limit",Tr(i.primaryRateLimitPercent)],["Secondary rate limit",Tr(i.secondaryRateLimitPercent)]])),a.append(l,c,g),(s.warnings.length||t.insights.warnings.length)&&a.append(Je("Warnings",[...s.warnings,...t.insights.warnings].slice(0,10))),Bt.replaceChildren(a)}function Cr(t,e){let n=document.createElement("article");n.className="summary-fact";let i=document.createElement("h3");i.textContent=t;let s=document.createElement("dl");return e.forEach(([r,o])=>{let a=document.createElement("dt");a.textContent=r;let l=document.createElement("dd");l.textContent=o,s.append(a,l)}),n.append(i,s),n}function JR(t){let e=Je("Inspect First");e.classList.add("summary-insights");let n=t.inspectionQueue.length,i=t.inspectionQueue.slice(0,SA);if(!n)return e.append(Ds("No high-priority findings detected. Parser health and raw inspection remain available for audit."),jg([ut("Open Insights",()=>Qt("insights")),ut("Audit Raw",()=>Qt("raw"))])),e;let s=Ds(n>i.length?`Showing the first ${de(i.length)} of ${de(n)} queued findings for inspect-first review.`:"Top queued findings are ready for inspect-first review; each evidence action routes to an existing panel and falls back clearly when no event line is logged."),r=document.createElement("div");return r.className="mode-linked-list",i.forEach((o,a)=>{let l=document.createElement("article");l.className=`mode-linked-row severity-${o.severity}`;let c=document.createElement("div"),h=document.createElement("strong");h.textContent=`${a+1}. ${o.title}`;let d=document.createElement("small");d.textContent=jR(o);let u=document.createElement("p");u.textContent=o.redactionSafeSummary||o.summary,c.append(h,d,u);let f=jg([ut("Open Insights",()=>p_(o)),ut("Timeline Evidence",()=>hd(o,"timeline")),ut("Transcript Evidence",()=>hd(o,"transcript")),ut("Raw Evidence",()=>hd(o,"raw"))]);l.append(c,f),r.append(l)}),e.append(s,r),e}function jg(t){let e=document.createElement("div");return e.className="mode-row-actions",e.append(...t),e}function jR(t){let e=pf(t),n=t.eventIds.length?`${de(t.eventIds.length)} linked events`:"no linked event ids",i=e?`line ${e}`:"no event line logged";return[t.severity,t.confidence,t.directness,i,n].filter(Boolean).join(" - ")}function pf(t){return t.lineNumbers.find(e=>Number.isFinite(e)&&e>0)??null}function QR(t){let e=fu(),n=pf(t),i=n?e.find(r=>r.lineNumber===n):null;if(i)return i;if(!t.eventIds.length)return null;let s=new Set(t.eventIds);return e.find(r=>s.has(r.id)||(r.node?s.has(r.node.id):!1))??null}function p_(t){Qt("insights"),rs(t),en.textContent=`Queued insight selected - ${t.title}`;let e=vn("Selected insight loaded in Raw for audit; use evidence actions to jump into Timeline, Transcript, or Raw rows when line/event data is available.");e.classList.add("mode-notice"),Bt.prepend(e)}function hd(t,e){let n=QR(t);if(n){gu(n.lineNumber,t.title,t,e);return}let i=pf(t)||t.eventIds.length?"Logged evidence did not match a rendered Timeline or Transcript row; showing the queued insight instead.":"No event line is logged for this insight; showing the queued insight instead.";p_(t),yf(t.title,t,i)}function mf(){Bt.querySelectorAll(".virtual-list-viewport, .virtual-text-viewport").forEach(t=>{t.perlustronCleanup?.()}),Bt.classList.remove("virtual-mode-host")}function gf(t,e){mf(),Bt.classList.add("virtual-mode-host");let n=document.createElement("div");n.className="virtual-mode-panel",e&&n.append(e),n.append(t),Bt.replaceChildren(n)}function m_(t){let e=document.createElement("div");e.className="virtual-list-viewport",e.tabIndex=0,e.setAttribute("role","region"),e.setAttribute("aria-label",t.ariaLabel);let n=document.createElement("div");n.className="virtual-list-canvas",e.append(n);let i=Math.max(1,e.clientWidth||yA),s=t.items.map((p,y)=>Math.max(24,Math.ceil(t.estimateHeight(p,y,i)))),r=new Array(t.items.length),o=0,a=(p=0)=>{let y=Math.max(0,p);o=y>0?r[y]:0;for(let M=y;M<t.items.length;M+=1)r[M]=o,o+=s[M];n.style.height=`${Math.max(1,o)}px`};a();let l=0,c=!1,h=null,d=Mt,u=p=>{if(!t.items.length)return-1;let y=0,M=t.items.length-1,E=t.items.length;for(;y<=M;){let R=Math.floor((y+M)/2);r[R]+s[R]>=p?(E=R,M=R-1):y=R+1}return Math.min(E,t.items.length-1)},f=(p,y)=>{let M=p;for(let E=p;E<t.items.length&&!(r[E]>y);E+=1)M=E;return M},g=(p,y)=>{if(!t.measureHeight||p<0||y<p)return!1;let M=Math.max(1,e.clientWidth||i),E=u(e.scrollTop+1),R=E>=0?e.scrollTop-r[E]:0,S=t.items.length;for(let w=p;w<=y;w+=1){let x=Math.max(24,Math.ceil(t.measureHeight(t.items[w],w,M)));Math.abs(x-s[w])<=1||(s[w]=x,S=Math.min(S,w))}return S===t.items.length?!1:(a(S),E>=0&&S<E&&(e.scrollTop=Math.max(0,r[E]+R),jo[d]=e.scrollTop),!0)},_=()=>{if(l=0,c)return;if(!t.items.length){n.replaceChildren(),n.style.height="1px";return}let p=Math.max(0,e.scrollTop-wc),y=e.scrollTop+e.clientHeight+wc,M=u(p),E=f(M,y);g(M,E)&&(M=u(Math.max(0,e.scrollTop-wc)),E=f(M,e.scrollTop+e.clientHeight+wc));let R=document.createDocumentFragment();for(let S=M;S<=E;S+=1){let w=t.items[S],x=document.createElement("div");x.className="virtual-list-item",x.dataset.index=String(S),x.dataset.key=t.keyForItem(w,S),x.style.transform=`translateY(${r[S]}px)`,x.style.height=`${s[S]}px`,x.append(t.renderItem(w,S)),R.append(x)}n.replaceChildren(R)},m=()=>{c||l||(l=window.requestAnimationFrame(_))};return e.addEventListener("scroll",()=>{jo[d]=e.scrollTop,m()},{passive:!0}),h=new ResizeObserver(()=>{c||m()}),h.observe(e),e.perlustronCleanup=()=>{c=!0,l&&window.cancelAnimationFrame(l),h?.disconnect()},window.requestAnimationFrame(()=>{let p=jo[d]??0;e.scrollTop=Math.min(p,Math.max(0,o-e.clientHeight)),_()}),e}function qc(t,e,n){let i=Math.max(8,e),s=1,r=0;for(;s<n;){let a=t.indexOf(`
`,r);if(a===-1)break;s+=1,r=a+1}let o=Math.ceil(Math.min(t.length,i*n)/i);return Math.min(n,Math.max(1,s,o))}function eI(t){let e=t.split(/\r?\n/),n=document.createElement("div");n.className="virtual-text-viewport",n.tabIndex=0,n.setAttribute("role","region"),n.setAttribute("aria-label","Raw JSON payload"),n.style.setProperty("--raw-line-height",`${Wo}px`),n.style.setProperty("--raw-gutter-width",`${Math.max(4,String(e.length).length+2)}ch`);let i=document.createElement("div");i.className="virtual-text-canvas",i.style.height=`${Math.max(1,e.length*Wo)}px`,n.append(i);let s=0,r=!1,o=()=>{if(s=0,r)return;let l=e.length<=vA,c=l?0:Math.max(0,Math.floor(n.scrollTop/Wo)-sg),h=l?e.length:Math.min(e.length,Math.ceil((n.scrollTop+n.clientHeight)/Wo)+sg),d=document.createDocumentFragment();for(let u=c;u<h;u+=1){let f=document.createElement("div");f.className="virtual-text-row",f.style.transform=`translateY(${u*Wo}px)`;let g=document.createElement("span");g.className="virtual-text-line-number",g.textContent=String(u+1);let _=document.createElement("span");_.className="virtual-text-line",_.textContent=e[u]||" ",f.append(g,_),d.append(f)}i.replaceChildren(d)},a=()=>{r||s||(s=window.requestAnimationFrame(o))};return n.addEventListener("scroll",a,{passive:!0}),n.perlustronCleanup=()=>{r=!0,s&&window.cancelAnimationFrame(s)},window.requestAnimationFrame(o),n}function tI(t){try{return JSON.stringify(t,null,2)}catch(e){return JSON.stringify({error:Os(e)},null,2)}}function g_(t,e){gf(eI(tI(t)),e)}function nI(){let t=fu();sI(t);let e=t.filter(rI);if(en.textContent=`${e.length} of ${t.length} events`,!e.length){Bt.replaceChildren(vn("No timeline events match the current filters."));return}let n=document.createElement("div");n.className="mode-actions",n.append(ut("Copy Safe Reference",()=>WR())),gf(m_({ariaLabel:"Timeline events",items:e,keyForItem:i=>i.id,estimateHeight:iI,renderItem:i=>oI(i)}),n)}function iI(t){let e=qc(t.title,58,3)*RA,n=qc([t.filePath,t.detail].filter(Boolean).join(" - "),110,7)*rd,i=t.timestamp?rd*2:rd;return Math.min(TA,Math.max(AA,28+Math.max(i,e,n)))}function fu(){if(!Ae)return[];let t=Ve.map(x_);for(let e of Ae.parserHealth.unknownEvents||[])t.push({id:`unknown-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"unknown",eventType:e.sourceEventType,toolName:"",filePath:"",title:`Unknown event ${e.sourceEventType}`,detail:e.preview,timestamp:null,flags:["unknown"],source:e});for(let e of Ae.parserHealth.malformedLines||[])t.push({id:`malformed-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"malformed",eventType:"malformed_jsonl",toolName:"",filePath:"",title:e.error,detail:e.preview,timestamp:null,flags:["malformed"],source:e});for(let e of Ae.parserHealth.skippedLargePayloads||[])t.push({id:`skipped-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"parser",eventType:"skipped_large_payload",toolName:"",filePath:"",title:e.reason,detail:`${de(e.byteLength)} bytes`,timestamp:null,flags:["large"],source:e});return t.sort((e,n)=>e.eventIndex-n.eventIndex||e.lineNumber-n.lineNumber),t}function x_(t){let e=t.type==="prompt"?"user":t.type==="message"?"assistant":t.type==="call"?"tool":t.type==="fileChange"?"file":"system",n=t.type==="call"?t.source.name:"",i=t.type==="fileChange"?t.source.path:"",s=[t.detail,t.body].filter(Boolean).join(`
`),r=new Set;(vu(t,"error")||A_(`${t.title} ${s}`))&&r.add("error"),t.type==="call"&&L_(t.source)&&r.add("long"),t.type==="fileChange"&&r.add("file"),t.type==="compaction"&&r.add("compaction"),`${t.title} ${s}`.includes("[REDACTED")&&r.add("redacted");let o=t.type==="call"&&t.source.durationMs!==null?Km(t.source.durationMs):"";return{id:t.id,eventIndex:t.eventIndex,lineNumber:t.eventIndex+1,role:e,eventType:t.type==="fileChange"?`file_${t.source.changeType}`:t.type,toolName:n,filePath:i,title:t.title,detail:[o,s].filter(Boolean).join(`
`),timestamp:t.type==="call"?t.source.startedAt||t.source.completedAt:t.source.timestamp,flags:[...r],source:t.source,node:t}}function sI(t){Nc(Oc,"All roles",t.map(e=>e.role)),Nc(Bc,"All types",t.map(e=>e.eventType)),Nc(Uc,"All tools",t.map(e=>e.toolName).filter(Boolean)),Nc(kc,"All files",t.map(e=>Fn(e.filePath)||e.filePath).filter(Boolean))}function Nc(t,e,n){let i=t.value,s=[...new Set(n)].sort((a,l)=>a.localeCompare(l)),r=document.createDocumentFragment(),o=document.createElement("option");o.value="",o.textContent=e,r.append(o),s.forEach(a=>{let l=document.createElement("option");l.value=a,l.textContent=a,r.append(l)}),t.replaceChildren(r),t.value=s.includes(i)?i:""}function rI(t){if(Oc.value&&t.role!==Oc.value||Bc.value&&t.eventType!==Bc.value||Uc.value&&t.toolName!==Uc.value)return!1;let e=Fn(t.filePath)||t.filePath;return kc.value&&e!==kc.value||P0.checked&&!t.flags.includes("error")||L0.checked&&!t.flags.includes("unknown")||F0.checked&&!t.flags.includes("malformed")||D0.checked&&!t.flags.includes("redacted")?!1:Ps?[t.role,t.eventType,t.toolName,t.filePath,t.title,t.detail,t.flags.join(" ")].join(" ").toLowerCase().includes(Ps):!0}function oI(t){let e=document.createElement("button");e.type="button",e.className=`mode-row ${t.node?.id===ft?"active":""}`;let n=document.createElement("code");n.textContent=[`L${t.lineNumber}`,aI(t.timestamp)].filter(Boolean).join(`
`);let i=document.createElement("small");i.textContent=[t.role,t.eventType,t.toolName].filter(Boolean).join(" / ");let s=document.createElement("strong");s.textContent=t.title;let r=document.createElement("small");return r.textContent=[t.filePath,t.detail].filter(Boolean).join(" - "),e.append(n,i,s,r),e.addEventListener("click",()=>__(t)),e}function aI(t){if(!t)return"";let e=new Date(t);return Number.isNaN(e.valueOf())?t:O0.checked?e.toISOString().replace(".000Z","Z"):e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}function __(t){t.node?(ft=t.node.id,it=t.node.promptId,yn(),Xr(t.node,{reveal:!1})):wi(t.eventType.toUpperCase(),t.title,t.detail||t.title),rs(t.source)}function lI(){let t=zt(),e=cI(t);if(dI(e),en.textContent=`${t.prompts.length} turns / ${e.filter(n=>n.type==="entry").length} entries`,!e.length){Bt.replaceChildren(vn("No transcript events were parsed."));return}gf(m_({ariaLabel:"Transcript entries",items:e,keyForItem:xf,estimateHeight:uI,measureHeight:hI,renderItem:pI}))}function cI(t){let e=[];return t.prompts.forEach((n,i)=>{e.push({type:"turn",prompt:n,promptIndex:i}),mI(n).forEach(s=>e.push({type:"entry",entry:s}))}),e}function xf(t,e){return t.type==="turn"?`turn-${t.prompt.id}`:`entry-${t.entry.eventIndex}-${t.entry.label}-${e}`}function uI(t,e,n){if(t.type==="turn")return d0;let i=v_(n),s=Math.max(36,Math.floor(i/7.2)),r=qc(t.entry.title,s,4)*m0,o=qc(t.entry.body,s,18)*p0;return Math.max(f0,g0+r+o+x0)}function hI(t,e,n){if(t.type==="turn")return d0;let i=xf(t,e),s=v_(n),r=Math.max(1,Math.round(s)),o=Dr.get(i)??{heights:new Map};Dr.set(i,o),(o.title&&(o.title.text!==t.entry.title||o.title.font!==lg)||o.body&&(o.body.text!==t.entry.body||o.body.font!==ag))&&o.heights.clear();let a=o.heights.get(String(r));if(a!==void 0)return a;let l=Qg(o,"title",t.entry.title,lg,r,m0),c=Qg(o,"body",t.entry.body,ag,r,p0),h=Math.max(f0,g0+l+c+x0);return o.heights.set(String(r),h),h}function dI(t){if(!Dr.size)return;let e=new Set;t.forEach((n,i)=>{n.type==="entry"&&e.add(xf(n,i))});for(let n of Dr.keys())e.has(n)||Dr.delete(n)}function v_(t){return Math.max(80,t-CA-wA)}function Qg(t,e,n,i,s,r){if(!n)return 0;let o=t[e],a=o&&o.text===n&&o.font===i?o.prepared:fI(t,e,n,i),{lineCount:l}=Xm(a,s,r);return Math.max(1,l)*r}function fI(t,e,n,i){let s=Wm(n,i,{whiteSpace:"pre-wrap"});return t[e]={text:n,font:i,prepared:s},t.heights.clear(),s}function pI(t,e){if(t.type==="entry")return gI(t.entry);let n=document.createElement("section");n.className="transcript-turn-row";let i=document.createElement("small");i.textContent=`User ${t.promptIndex+1}`;let s=document.createElement("strong");return s.textContent=t.prompt.title,n.append(i,s),n}function mI(t){let e=[];return yx(t,t.calls).forEach(n=>{if(n.type==="assistant"){e.push({label:"Assistant",title:"Response",body:n.message.text,eventIndex:n.message.eventIndex}),n.calls.forEach(i=>e.push(...e0(i)));return}e.push(...e0(n.call))}),t.fileChanges.forEach(n=>{e.push({label:"File",title:`${n.changeType}: ${n.shortPath||n.path}`,body:n.preview||n.detail,eventIndex:n.eventIndex})}),[{label:"Prompt",title:t.title,body:t.text,eventIndex:t.eventIndex},...e.sort((n,i)=>n.eventIndex-i.eventIndex)]}function e0(t){let e=t.argumentPreview||"No arguments logged.",n=t.outputPreview||(t.status==="completed"?"No result preview logged.":`Status: ${t.status}`);return[{label:"Tool",title:`${t.name} (${t.status})`,body:e,eventIndex:t.eventIndex},{label:"Result",title:t.name,body:n,eventIndex:t.eventIndex}]}function gI(t){let e=document.createElement("div");e.className="transcript-step";let n=document.createElement("code");n.textContent=t.label;let i=document.createElement("div"),s=document.createElement("strong");s.textContent=t.title;let r=Ds(t.body);return i.append(s,r),e.append(n,i),e}function y_(){let t=zt().parserHealth;en.textContent=`${t.unknownEventCount} unknown / ${t.malformedLineCount} malformed / ${t.skippedLargePayloadCount} skipped`,mu();let e=document.createDocumentFragment(),n=document.createElement("div");n.className="mode-actions",n.append(ut("Copy Parser Summary",()=>ls(OI(zt()),"Parser health summary copied")),ut("Export Unknowns JSON",()=>kI()),ut("Copy Issue Body",()=>VI()),ut("Fixture Report",()=>zI())),e.append(n);let i=document.createElement("div");i.className="mode-card-grid",i.append(Je("Parser",[ou(t),`Source confidence: ${t.sourceDetectionConfidence}`,`Parsed ${t.parsedEventCount} of ${t.totalLinesRead} lines`,...ua([Zd(t)])]),Je("Unknown Events",JC(t)),Je("Malformed And Skipped",ew(t)),Je("Coverage",[`Tool calls/results: ${t.toolCallCount}/${t.toolResultCount}`,`File activity: ${t.fileActivityCount}`,`Token telemetry: ${t.tokenTelemetryAvailable?"available":"not logged"}`,`Redacted fields: ${t.redactedFieldCount}`,...ua([xx(t)])])),e.append(i);let s=Je("Unknown Samples");s.append(FI(t)),e.append(s),Md?e.append(vn("Preparing redacted schema-drift report...")):Cs?e.append(vn(Cs)):_n&&e.append(Je("Issue Template",[`Fixture: ${_n.suggestedFixtureName}`,`Samples: ${_n.redactedSamples.length}`,`Profile: ${_n.redactionReport.profile}`])),Bt.replaceChildren(e)}function xI(){let t=zt().insights,e=ga(t),n=e.slice(0,u0),i=e.length,s=pu(t);en.textContent=`${i} priority signal groups / ${s.length} file-churn patterns / ${t.suspiciousToolCalls.length} suspicious calls`;let r=document.createDocumentFragment(),o=document.createElement("div");o.className="mode-actions",o.append(ut("Copy Insight Summary",()=>ls(BI(t),"Insight summary copied"))),r.append(o);let a=Je("How To Read This",["Insights are heuristic signals from logged events only; they are leads, not root cause.","Repeated event rows are grouped so the panel shows signal categories before backing detail.","Start with Priority Signals. Expand File Churn only when you need audit detail for repeated path activity."]);a.classList.add("mode-takeaway"),r.append(a);let l=Je("Priority Signals");l.append(NI(t,n,i)),r.append(l);let c=PI(t,s);c&&r.append(c);let h=document.createElement("div");h.className="mode-card-grid";let d=t.repeatedPatterns.filter(u=>u.patternType!=="file_activity");h.append(Je("Error Timeline",t.failureChain?[`First logged error-like event: line ${t.failureChain.firstLoggedError.lineNumber} - ${t.failureChain.firstLoggedError.title}`,`Later retry-like events: ${t.failureChain.subsequentRetries.length}`,`File changes after first error: ${t.failureChain.fileChangesAfterFirstError.length}`,`Final logged outcome: ${S_(t.failureChain.finalOutcome)}`]:["No logged error-like event detected."]),Je("Repeated Tool Patterns",M_(d)),Je("Suspicious Tool Calls",b_(t.suspiciousToolCalls)),Je("Context Pressure",[t.contextPressure.status,t.contextPressure.explanation,`High-context markers: ${t.contextPressure.highContextMarkers.length}`,`Compaction markers: ${t.contextPressure.compactionMarkers.length}`]),Je("File Impact",[`Edited: ${t.fileImpact.filesEdited.length}`,`Read: ${t.fileImpact.filesRead.length}`,`Referenced: ${t.fileImpact.filesReferenced.length}`,`Top edited: ${dd(t.fileImpact.filesEdited)}`,`Top read: ${dd(t.fileImpact.filesRead)}`,`Top referenced: ${dd(t.fileImpact.filesReferenced)}`]),Je("Approval And Sandbox",t.approvalFriction.map(u=>`${u.severity}: ${u.title}`))),r.append(h),Bt.replaceChildren(r)}function Ko(){let t=zt(),n=DI(t).filter(_=>_.path!==t.sessionPath);(!$n||$n===t.sessionPath||!n.some(_=>_.path===$n))&&($n=n[0]?.path??null),en.textContent=jt?`${jt.toolDelta.calls.left} -> ${jt.toolDelta.calls.right} tools / ${jt.errorDelta.errors.left} -> ${jt.errorDelta.errors.right} errors`:"Select Run B to compare";let i=document.createDocumentFragment(),s=Je("Compare Sessions"),r=document.createElement("div");r.className="mode-control-row";let o=document.createElement("div");o.className="mode-field",o.append(t0("Run A"),yI(t.sessionPath));let a=document.createElement("div");a.className="mode-field",a.append(t0("Run B"));let l=document.createElement("select");l.className="mode-select",l.setAttribute("aria-label","Run B session"),n.forEach(_=>{let m=document.createElement("option");m.value=_.path,m.textContent=ox(_),m.title=_.path,l.append(m)}),l.value=$n??"",l.disabled=n.length===0;let c=()=>{$n=i0(l),jt=null,Ti=null,en.textContent="Select Run B to compare"};l.addEventListener("change",()=>{c(),s0()}),l.addEventListener("input",c);let h=ut("Compare",()=>{$n=i0(l),s0()});if(h.disabled=n.length===0,a.append(l,h),r.append(o,a),s.append(r),i.append(s),n.length===0){i.append(vn("No other sessions are available to compare with this run.")),Bt.replaceChildren(i);return}if(Sd){i.append(vn("Comparing normalized traces...")),Bt.replaceChildren(i);return}if(Ti&&i.append(vn(Ti)),!jt){i.append(vn("Choose a second session and compare. Diff results are redacted by default.")),Bt.replaceChildren(i);return}let d=jt,u=document.createElement("div");u.className="mode-actions",u.append(ut("Copy Summary",()=>ls(UI(d),"Diff summary copied")),ut("Export JSON",()=>Jc("perlustron-diff.json",JSON.stringify(d,null,2),"application/json")),ut("Export HTML",()=>Jc("perlustron-diff.html",GI(d),"text/html"))),i.append(u);let f=document.createElement("div");f.className="mode-card-grid",f.append(Je("Overview",[`Sources: ${d.leftSummary.source} -> ${d.rightSummary.source}`,`Session IDs: ${d.leftSummary.sessionId||"unknown"} -> ${d.rightSummary.sessionId||"unknown"}`,`Models: ${d.leftSummary.model||"unknown"} -> ${d.rightSummary.model||"unknown"}`,`Events: ${d.leftSummary.renderableEventCount} -> ${d.rightSummary.renderableEventCount}`,`Duration: ${d.leftSummary.loggedDuration} / ${d.rightSummary.loggedDuration}`]),Je("Parser Health Delta",[`Parsed: ${d.leftSummary.parsedEventCount} -> ${d.rightSummary.parsedEventCount}`,`Renderable: ${d.leftSummary.renderableEventCount} -> ${d.rightSummary.renderableEventCount}`,`Unknown: ${gn(d.parserHealthDelta.unknownEvents)}`,`Malformed: ${gn(d.parserHealthDelta.malformedLines)}`,`Skipped payloads: ${gn(d.parserHealthDelta.skippedLargePayloads)}`]),Je("Tool Delta",[`Calls: ${gn(d.toolDelta.calls)}`,`Results: ${gn(d.toolDelta.results)}`,`Missing results: ${gn(d.toolDelta.missingResults)}`,`Only A: ${Kc(d.toolDelta.onlyLeftTools,6)}`,`Only B: ${Kc(d.toolDelta.onlyRightTools,6)}`]),Je("File Delta",[`Only A: ${d.fileDelta.onlyLeft.length}`,`Only B: ${d.fileDelta.onlyRight.length}`,`Both: ${d.fileDelta.both.length}`,...d.fileDelta.onlyLeft.slice(0,4).map(_=>`A: ${_}`),...d.fileDelta.onlyRight.slice(0,4).map(_=>`B: ${_}`)]),Je("Error And Failure Delta",[`Error-like events: ${gn(d.errorDelta.errors)}`,`First A: ${d.errorDelta.leftFirstError||"none"}`,`First B: ${d.errorDelta.rightFirstError||"none"}`,`Repeated patterns: ${d.repeatedPatternDelta.leftCount} -> ${d.repeatedPatternDelta.rightCount}`]),Je("Token And Context Delta",[`Telemetry: ${d.tokenDelta.leftAvailable?"A yes":"A no"} / ${d.tokenDelta.rightAvailable?"B yes":"B no"}`,`Latest tokens: ${d.tokenDelta.leftLatestTotalTokens??"n/a"} -> ${d.tokenDelta.rightLatestTotalTokens??"n/a"}`,`Context percent: ${Tr(d.tokenDelta.leftContextPercent)} -> ${Tr(d.tokenDelta.rightContextPercent)}`,`Compactions: ${gn(d.compactionDelta)}`])),i.append(f);let g=Je("Divergence");g.append(LI(d)),i.append(g),d.warnings.length&&i.append(Je("Warnings",d.warnings)),Bt.replaceChildren(i)}function _f(){let t=zt();en.textContent=ft?"Selected event":"Session graph";let e=nu??(ft?Nt.get(ft)?.source:t);g_(e??t.totals)}function _I(){let t=zt();en.textContent="Redacted reports";let e=document.createElement("div");e.className="mode-card-grid",e.append(Je("Reports",[`perlustron export ${t.sessionPath} --format html --redacted -o report.html`,`perlustron export ${t.sessionPath} --format markdown --redacted -o report.md`,`perlustron export ${t.sessionPath} --format json -o normalized-trace.json`]),Je("Schema Drift",[`perlustron unknowns ${t.sessionPath} --redacted -o unknowns-redacted.json`,`perlustron fixture-report ${t.sessionPath} --redacted -o fixture-report.md`])),Bt.replaceChildren(e)}function vI(){let t=zt();en.textContent="Local observatory settings";let e=document.createElement("div");e.className="mode-card-grid",e.append(Je("Session",[`Source: ${Ci(t.source)}`,`Session: ${Pn?Fn(Pn):Fn(t.sessionPath)||"latest"}`,`Live updates: ${Rn?ws?"SSE stream":"fallback polling":"paused"}`]),Je("Renderer",["Three.js instancing",`Mode panel: ${Mt==="settings"?"visible":"hidden"}`]),Je("Backend",["Rust Axum JSONL parser",`Parser: ${t.parserHealth.parserVersion} / ${t.parserHealth.schemaVersion}`,`API token required: ${t.privacySummary.apiTokenRequired?"yes":"no"}`])),Bt.replaceChildren(e)}function Je(t,e=[]){let n=document.createElement("section");n.className="mode-card";let i=document.createElement("h3");if(i.textContent=t,n.append(i),e.length){let s=document.createElement("ul");e.forEach(r=>{let o=document.createElement("li");o.textContent=r,s.append(o)}),n.append(s)}return n}function Ds(t){let e=document.createElement("p");return e.textContent=t,e}function vn(t){let e=document.createElement("p");return e.className="mode-empty",e.textContent=t,e}function ut(t,e){let n=document.createElement("button");return n.type="button",n.className="mode-action-button",n.textContent=t,n.addEventListener("click",()=>{e()}),n}function t0(t){let e=document.createElement("span");return e.className="mode-small-label",e.textContent=t,e}function yI(t){let e=document.createElement("code");return e.textContent=t,e}function pu(t){return t.repeatedPatterns.filter(e=>e.patternType==="file_activity")}function SI(t){return t.title!==h0&&(t.severity==="high"||t.severity==="warning")}function MI(t){let e=t.inspectionQueue.filter(SI);return e.length?e:t.inspectionQueue.filter(n=>n.title!==h0)}function ga(t){let e=new Map;return MI(t).forEach(n=>{let i=bI(n),s=e.get(i);s?s.push(n):e.set(i,[n])}),Array.from(e.values()).map(EI)}function vf(t){return ga(t).slice(0,u0)}function bI(t){return t.title===Nd?"suspicious-tool-calls":t.title===Pd?"repeated-tool-call-patterns":t.title}function EI(t){let e=t[0];return{title:e.title,severity:AI(t),confidence:e.confidence,directness:e.directness,summary:TI(e,t),explanation:wI(e,t),lineNumbers:e.lineNumbers,redactionSafeSummary:CI(e,t),representative:e,count:t.length}}function AI(t){return t.reduce((e,n)=>{let i=n0(e);return n0(n.severity)<i?n.severity:e},t[0]?.severity??"info")}function n0(t){let e=og.indexOf(t);return e===-1?og.length:e}function TI(t,e){return e.length===1?t.summary:t.title===Nd?`${de(e.length)} suspicious tool-call records grouped; first example: ${t.summary}`:t.title===Pd?`${de(e.length)} repeated tool-call pattern records grouped; first example: ${t.summary}`:`${de(e.length)} related ${t.title.toLowerCase()} records grouped; first example: ${t.summary}`}function CI(t,e){let n=t.redactionSafeSummary||t.summary;return e.length===1?n:`${de(e.length)} grouped records; first example: ${n}`}function wI(t,e){return e.length===1?t.explanation:`${t.explanation} ${de(e.length)} matching rows were grouped to avoid repeating the same signal in the main list.`}function RI(t){return t.title==="First logged error-like event"?"Start here because this is the earliest logged event that looked broken.":t.title===Nd?"One or more tool records look failed, missing, long-running, empty, or error-like.":t.title===Pd?"Similar tool calls repeated, which can point to retry loops or stuck local work.":t.title==="Approval or sandbox friction"?"Permission, sandbox, or approval friction can explain blocked or retried work.":t.title==="Context pressure marker"?"Context pressure or compaction markers can explain abrupt summaries or degraded continuity.":t.title==="Unknown or malformed log data"?"Parser gaps can hide details from normalized views, so audit raw or Health output.":t.title==="File impact"?"Use this as audit context for touched files, not as a root-cause claim.":"Use this as a lead into the raw log evidence, not as a root-cause verdict."}function Zc(t,e,n=MA){let i=t.slice(0,n).map(e);return t.length>n&&i.push(`Showing ${de(n)} of ${de(t.length)} items.`),i}function S_(t,e=bA){let n=t.replace(/::git-[^}]+}/g,"").replace(/\s+/g," ").trim();return n?n.length>e?`${n.slice(0,Math.max(0,e-3)).trimEnd()}...`:n:"none logged"}function M_(t){if(!t.length)return["No repeated tool-call patterns detected."];let e=new Map;t.forEach(i=>{let s=II(i.key),r=e.get(s);r?(r.count+=i.count,r.patterns+=1,r.firstLine=Math.min(r.firstLine,i.firstLine),r.lastLine=Math.max(r.lastLine,i.lastLine)):e.set(s,{label:s,count:i.count,patterns:1,firstLine:i.firstLine,lastLine:i.lastLine})});let n=Array.from(e.values()).sort((i,s)=>s.count-i.count||i.label.localeCompare(s.label));return Zc(n,i=>`${i.label}: ${de(i.count)} repeated calls across ${de(i.patterns)} pattern groups, lines ${i.firstLine}-${i.lastLine}`)}function II(t){return(t.startsWith("tool:")?t.slice(5):t).split(/[:.]/)[0]||"tool"}function b_(t){if(!t.length)return["No suspicious tool calls detected."];let e=new Map;t.forEach(i=>{let r=e.get(i.reason)??{reason:i.reason,count:0,tools:new Map};r.count+=1,r.tools.set(i.toolName,(r.tools.get(i.toolName)??0)+1),e.set(i.reason,r)});let n=Array.from(e.values()).sort((i,s)=>s.count-i.count||i.reason.localeCompare(s.reason));return Zc(n,i=>{let s=Array.from(i.tools.entries()).sort((r,o)=>o[1]-r[1]||r[0].localeCompare(o[0])).slice(0,3).map(([r,o])=>`${r} ${de(o)}`).join(", ");return`${i.reason}: ${de(i.count)} calls${s?` (${s})`:""}`})}function dd(t,e=3){return t.length?t.slice().sort((n,i)=>i.count-n.count||n.path.localeCompare(i.path)).slice(0,e).map(n=>`${Fn(n.path)||n.path} (${de(n.count)})`).join(", "):"none"}function NI(t,e=vf(t),n=ga(t).length){if(!e.length)return vn("No priority signals detected. Parser health, file churn, and raw inspection remain available for audit.");let i=document.createElement("div"),s=Ds(n>e.length?`Showing ${de(e.length)} of ${de(n)} grouped priority signals. Lower-priority file churn is collapsed below.`:"Showing grouped priority signals from logged evidence. These are leads for inspection, not root-cause conclusions."),r=document.createElement("div");return r.className="mode-linked-list",e.forEach((o,a)=>{let l=document.createElement("article");l.className=`mode-linked-row severity-${o.severity}`;let c=document.createElement("div"),h=document.createElement("strong");h.textContent=`${a+1}. ${o.count>1?`${o.title} (${de(o.count)})`:o.title}`;let d=document.createElement("small");d.textContent=`Evidence: ${o.summary} - ${o.confidence} - ${o.directness}`;let u=document.createElement("p");u.textContent=`Why it matters: ${RI(o)}`;let f=document.createElement("p");f.textContent=`How detected: ${o.explanation}`,c.append(h,u,d,f);let g=document.createElement("div");g.className="mode-row-actions";let _=o.lineNumbers[0];g.append(ut("Open Raw",()=>gu(_,o.title,o.representative)),ut("Copy Ref",()=>ls(`line ${_??"n/a"} - ${o.redactionSafeSummary}`,"Line reference copied"))),l.append(c,g),r.append(l)}),i.append(s,r),i}function PI(t,e=pu(t)){let n=t.fileImpact.repeatedFiles;if(!e.length&&!n.length)return null;let i=document.createElement("details");i.className="mode-details file-churn-details";let s=document.createElement("summary");s.textContent=e.length?`File Churn (${de(e.length)} repeated file patterns)`:`File Churn (${de(n.length)} repeated files)`,i.append(s),i.append(Ds("Repeated file activity is audit context. Expand it when you need to inspect which paths dominated the run."));let r=e.length?Zc(e,o=>`${o.key} - ${de(o.count)} mentions, lines ${o.firstLine}-${o.lastLine}`,rg):Zc(n,o=>`${o.path} - ${de(o.count)} mentions, lines ${o.firstLine}-${o.lastLine}`,rg);if(r.length){let o=document.createElement("ul");r.forEach(a=>{let l=document.createElement("li");l.textContent=a,o.append(l)}),i.append(o)}return i}function LI(t){let e=document.createElement("div");return e.className="mode-linked-list",E_(t).forEach(i=>{let s=document.createElement("article");s.className="mode-linked-row";let r=document.createElement("div"),o=document.createElement("strong");o.textContent=i.kind.replaceAll("_"," ");let a=document.createElement("small");a.textContent=`${i.confidence} - A line ${i.leftLine??"n/a"} - B line ${i.rightLine??"n/a"}`;let l=document.createElement("p");l.textContent=i.summary,r.append(o,a,l);let c=document.createElement("div");c.className="mode-row-actions",c.append(ut("Open A",()=>gu(i.leftLine,i.kind,i)),ut("Copy Ref",()=>ls(`${i.kind}: A line ${i.leftLine??"n/a"}, B line ${i.rightLine??"n/a"}`,"Divergence reference copied"))),s.append(r,c),e.append(s)}),e}function FI(t){let e=document.createElement("div");e.className="mode-linked-list";let n=[...(t.unknownEvents||[]).map(i=>({title:`Unknown ${i.sourceEventType}`,detail:i.preview,lineNumber:i.lineNumber,payload:i})),...(t.malformedLines||[]).map(i=>({title:"Malformed JSONL",detail:i.error,lineNumber:i.lineNumber,payload:i}))].slice(0,12);return n.length?(n.forEach(i=>{let s=document.createElement("article");s.className="mode-linked-row";let r=document.createElement("div"),o=document.createElement("strong");o.textContent=i.title;let a=document.createElement("small");a.textContent=`line ${i.lineNumber} - ${i.detail}`,r.append(o,a);let l=document.createElement("div");l.className="mode-row-actions",l.append(ut("Open Raw",()=>gu(i.lineNumber,i.title,i.payload))),s.append(r,l),e.append(s)}),e):vn("No unknown or malformed samples captured.")}function DI(t){let e=qn.filter(i=>i.source===t.source),n=e.find(i=>i.path===t.sessionPath);return n?[n,...e.filter(i=>i.path!==t.sessionPath)]:[{source:t.source,path:t.sessionPath,label:"Current session",detail:t.sessionId||"loaded",lastModifiedAt:t.lastModifiedAt,byteLength:t.byteLength,isLive:t.isLive,explicit:!0},...e]}function i0(t){return t.selectedOptions.item(0)?.value||t.value||null}async function s0(){if(!$n){Ti="Select a Run B session first.",jt=null,Ko();return}let t=zt().sessionPath,e=$n;if(e===t){Ti="Run A and Run B must be different sessions.",jt=null,Ko();return}let n=++Rg,i=()=>n===Rg&&zt().sessionPath===t&&$n===e;jt=null,Sd=!0,Ti=null,Ko();try{let s=await FC(e);if(!i())return;jt=s}catch(s){if(!i())return;jt=null,Ti=Os(s)}finally{i()&&(Sd=!1,Ko())}}async function mu(t=!1){return!t&&_n?_n:!t&&Cs?null:Yo||(_n=null,Cs=null,Md=!0,Yo=DC().then(e=>(_n=e,e)).catch(e=>(Cs=Os(e),null)).finally(()=>{Md=!1,Yo=null,Mt==="health"&&y_()}),Yo)}function yf(t,e,n){let i=`${n} Insights remains available and Raw is updated with the selected evidence payload.`;rs(e),en.textContent="Evidence fallback";let s=Je("Evidence Fallback",[i]);s.classList.add("mode-notice");let r=document.createElement("div");if(r.className="mode-row-actions",r.append(ut("Open Insights",()=>{Qt("insights"),rs(e)}),ut("Audit Raw",()=>{Qt("raw"),yf(t,e,n)})),s.append(r),Mt==="raw"){g_(e??{},s);return}mf(),Bt.prepend(s)}function gu(t,e,n,i="raw"){if(t){let r=fu().find(o=>o.lineNumber===t);if(r){__(r),r.node?du(i):i!=="map"&&(Qt(i),rs(r.source));return}}i!=="map"&&Qt(i);let s=t?`Line ${t} is logged for ${e}, but no rendered Timeline or Transcript row is available.`:"No event line is logged for this insight or evidence reference; showing fallback payload instead.";yf(e,n,s)}function OI(t){let e=t.parserHealth;return[`Perlustron parser health for ${Fn(t.sessionPath)}`,`Parser: ${ou(e)}`,`Source: ${e.source} (${e.sourceDetectionConfidence})`,`Lines: ${e.totalLinesRead}`,`Parsed/renderable: ${e.parsedEventCount}/${e.renderableEventCount}`,...ua(Kd(e,Nn,"Skipped large payloads"))].join(`
`)}function BI(t){let e=vf(t),n=ga(t).length,i=pu(t).length,s=["Perlustron insights","Insights are heuristic signals from logged events only; they are leads, not root cause.","Priority signal groups"];return e.length?(e.forEach((r,o)=>{let a=r.count>1?` (${de(r.count)} grouped)`:"";s.push(`${o+1}. [${r.severity}] ${r.title}${a}: ${r.redactionSafeSummary||r.summary}`)}),n>e.length&&s.push(`Showing ${de(e.length)} of ${de(n)} priority signal groups.`)):s.push("- No priority signals detected."),s.push(`File-churn patterns: ${i}`),s.push(`Suspicious calls: ${t.suspiciousToolCalls.length}`),s.push(`Approval/sandbox friction: ${t.approvalFriction.length}`),s.join(`
`)}function UI(t){return["Perlustron redacted diff summary",`A: ${Fn(t.metadata.leftPath)} (${t.metadata.leftSource})`,`B: ${Fn(t.metadata.rightPath)} (${t.metadata.rightSource})`,`Events: ${t.leftSummary.renderableEventCount} -> ${t.rightSummary.renderableEventCount}`,`Tools: ${t.toolDelta.calls.left} -> ${t.toolDelta.calls.right}`,`Errors: ${t.errorDelta.errors.left} -> ${t.errorDelta.errors.right}`,`Files: ${t.fileDelta.leftCount} -> ${t.fileDelta.rightCount}`,`First likely divergence: ${t.divergence.summary} (${t.divergence.confidence})`].join(`
`)}function Kc(t,e){if(!t.length)return"none";let n=t.slice(0,e).join(", ");return t.length>e?`${n} ... +${t.length-e}`:n}async function kI(){let t=_n??await mu(!0);t&&Jc("perlustron-unknowns-redacted.json",JSON.stringify(t,null,2),"application/json")}async function VI(){let t=_n??await mu(!0);t&&ls(t.suggestedGithubIssue,"Schema-drift issue body copied")}async function zI(){let t=_n??await mu(!0);t&&Jc("perlustron-fixture-report.md",HI(t),"text/markdown")}function E_(t){return t.divergence.clusters.length?t.divergence.clusters:[{kind:t.divergence.kind,confidence:t.divergence.confidence,summary:t.divergence.summary,explanation:t.divergence.explanation,leftLine:t.divergence.leftLine,rightLine:t.divergence.rightLine,leftEventId:t.divergence.leftEventId,rightEventId:t.divergence.rightEventId,leftSignature:t.divergence.leftSignature,rightSignature:t.divergence.rightSignature}]}function HI(t){let e=t.redactedSamples.slice(0,12).map(n=>`### Line ${n.lineNumber} ${n.sourceEventType}

Shape hash: \`${n.shapeHash}\`

\`\`\`json
${n.redactedPreview}
\`\`\``).join(`

`);return["# Perlustron Fixture Report","","This report avoids raw private log content.","","## Parser Health","",`- Perlustron version: \`${t.parserVersion}\``,`- Trace schema: \`${t.traceSchemaVersion}\``,`- Source guess: \`${t.sourceGuess}\``,`- Unknown events: \`${t.unknownEventCount}\``,`- Malformed lines: \`${t.malformedLineCount}\``,`- Suggested fixture: \`${t.suggestedFixtureName}\``,"","## Redacted Samples","",e||"No unknown or malformed samples captured.","","## Safe Contribution Checklist","","- Do not attach raw private Codex or Claude logs.","- Prefer synthetic data.","- Review prompts, paths, command output, images, and tool results before sharing."].join(`
`)}function GI(t){let e=E_(t).map(n=>`<tr><td>${li(n.kind)}</td><td>${li(n.confidence)}</td><td>${n.leftLine??"n/a"}</td><td>${n.rightLine??"n/a"}</td><td>${li(n.summary)}</td></tr>`).join("");return`<!doctype html><meta charset="utf-8"><title>Perlustron Diff Report</title><style>body{font-family:system-ui,sans-serif;margin:32px;color:#182125;line-height:1.45}table{border-collapse:collapse;width:100%;margin:16px 0}td,th{border:1px solid #d7dee2;padding:6px 8px;text-align:left}code{background:#f4f6f7;padding:2px 4px}.redacted{color:#7a1f1f;font-weight:700}</style><h1>Perlustron Session Diff</h1><p class="redacted">Redacted diff. Review before sharing.</p><h2>Overview</h2><table><tr><td>A</td><td>${li(t.metadata.leftPath)}</td></tr><tr><td>B</td><td>${li(t.metadata.rightPath)}</td></tr><tr><td>Events</td><td>${t.leftSummary.renderableEventCount} -> ${t.rightSummary.renderableEventCount}</td></tr><tr><td>Tools</td><td>${gn(t.toolDelta.calls)}</td></tr><tr><td>Errors</td><td>${gn(t.errorDelta.errors)}</td></tr></table><h2>Parser Health</h2><table><tr><td>Unknown</td><td>${gn(t.parserHealthDelta.unknownEvents)}</td></tr><tr><td>Malformed</td><td>${gn(t.parserHealthDelta.malformedLines)}</td></tr></table><h2>Files</h2><table><tr><td>Only A</td><td>${li(Kc(t.fileDelta.onlyLeft,20))}</td></tr><tr><td>Only B</td><td>${li(Kc(t.fileDelta.onlyRight,20))}</td></tr></table><h2>Divergence</h2><table><thead><tr><th>Kind</th><th>Confidence</th><th>A line</th><th>B line</th><th>Summary</th></tr></thead><tbody>${e}</tbody></table><h2>Redaction</h2><p>Profile: ${li(t.metadata.redactionProfile||"strict")}. Raw prompts, command output, sensitive paths, and tool outputs are not intentionally included.</p>`}function Jc(t,e,n){let i=new Blob([e],{type:n}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=t,r.click(),window.setTimeout(()=>URL.revokeObjectURL(s),0)}function ls(t,e="Copied"){navigator.clipboard.writeText(t).then(()=>wi("COPY",e,t)).catch(n=>wi("COPY","Copy failed",Os(n)))}function A_(t){return/\b(error|failed|failure|exception|panic|denied|permission|timeout|traceback|not found|exit code|fatal|forbidden|sandbox)\b/i.test(t)}function Qt(t){if(Mt=t,da(),h_(),ff(),t!=="map"&&hu(),t==="map"){qd(),jc({preserveCamera:!0}),pa();return}if(ma(),t!=="summary"&&t!=="timeline"&&t!=="transcript"){if(t==="health"){wi("HEALTH","Parser health",WI());return}if(t==="insights"){wi("INSIGHTS","Debugging insights",XI());return}if(t!=="raw"){if(t==="diff"){jc({preserveCamera:!0});return}t!=="settings"&&wi("EXPORT","Export reports",$I())}}}function r0(){Mt!=="transcript"&&ma()}function WI(){return Ae?tw(Ae.parserHealth).join(`
`):"Waiting for session data."}function XI(){let t=Ae?.insights;if(!Ae||!t)return"Waiting for session insights.";let e=vf(t),n=ga(t).length,i=pu(t).length,s=["Insights are heuristic signals from logged events only. Hidden or unlogged reasoning cannot be recovered.","Repeated event rows are grouped before backing detail is summarized."];s.push(`Priority signal groups: ${de(n)}`),e.forEach((o,a)=>{let l=o.count>1?` (${de(o.count)} grouped)`:"";s.push(`  ${a+1}. [${o.severity}] ${o.title}${l}: ${o.redactionSafeSummary||o.summary}`)}),n>e.length&&s.push(`  Showing ${de(e.length)} of ${de(n)} priority signal groups.`),t.failureChain?(s.push(`First logged error-like event: line ${t.failureChain.firstLoggedError.lineNumber} - ${t.failureChain.firstLoggedError.title}`),s.push(`Final logged outcome: ${S_(t.failureChain.finalOutcome)}`)):s.push("First logged error-like event: none detected");let r=t.repeatedPatterns.filter(o=>o.patternType!=="file_activity");return s.push(`Repeated tool patterns: ${de(r.length)}`),M_(r).forEach(o=>s.push(`  ${o}`)),s.push(`File-churn patterns: ${de(i)}`),s.push(`Suspicious calls: ${de(t.suspiciousToolCalls.length)}`),b_(t.suspiciousToolCalls).forEach(o=>s.push(`  ${o}`)),s.push(`Context pressure: ${t.contextPressure.status}`),s.push(`File impact: ${t.fileImpact.filesEdited.length} edited, ${t.fileImpact.filesRead.length} read, ${t.fileImpact.filesReferenced.length} referenced`),s.push(`Approval/sandbox friction: ${t.approvalFriction.length}`),s.join(`
`)}function $I(){return Ae?["Export redacted reports from the CLI:",`perlustron export ${Ae.sessionPath} --format html --redacted -o report.html`,`perlustron export ${Ae.sessionPath} --format markdown --redacted -o report.md`,`perlustron export ${Ae.sessionPath} --format json -o normalized-trace.json`,"","Redacted exports are best-effort sharing aids. Review before sending."].join(`
`):"Waiting for session data."}function YI(){return["/ search","n next event","N previous event","m map","l timeline","t transcript","h health","i insights","r raw","e export","Esc close inspection"].join(`
`)}function T_(t){if(!t?.latestTotalTokens)return"no token telemetry";let e=t.latestContextPercent===null?"n/a":`${Math.round(t.latestContextPercent)}%`,n=t.contextWindow?` / ${de(t.contextWindow)}`:"";return`${de(t.latestTotalTokens)}${n} tokens (${e})`}function o0(t,e=Nt.get(t)){it=t,_t="inspect",as(),Xr(e)}function jc({preserveCamera:t=!1}={}){_t==="inspect"&&(_t="overview",as({preserveCamera:t}))}function qI(){d_(),h_(),ff(),da(),k0.forEach(t=>{t.addEventListener("click",()=>{Qt(ad(l0,t.dataset.appMode,"map"))})}),V0.forEach(t=>{t.addEventListener("click",()=>{$R(t.dataset.source)})}),ci.addEventListener("change",()=>{OC(ci.value)}),ZA.addEventListener("click",()=>{Rn=!Rn,Rn&&qd(),ss(),Rn?xu():(ru(),_u())}),es.addEventListener("input",()=>{Ps=es.value.trim().toLowerCase(),yn(),r0()}),es.addEventListener("keydown",t=>{t.key==="Escape"&&(es.value="",Ps="",yn(),r0())}),[Oc,Bc,Uc,kc,P0,L0,F0,D0,O0].forEach(t=>{t.addEventListener("change",ma)}),document.addEventListener("keydown",JI),document.addEventListener("keyup",jI),document.addEventListener("keydown",ZI),document.addEventListener("visibilitychange",iN),window.addEventListener("blur",I_),B0.forEach(t=>{t.addEventListener("click",()=>{let e=ad(IA,t.dataset.viewAction,"two-d");e==="zoom-in"?Id(1):e==="zoom-out"?Id(-1):e==="overview"?(jc(),Hx("three-d")):Ww()})}),C0.addEventListener("click",()=>Qc(-1)),w0.addEventListener("click",()=>Qc(1)),U0.forEach(t=>{t.addEventListener("click",()=>{uN(ad(c0,t.dataset.metric,"error"))})}),pd.addEventListener("click",()=>{Qt("settings")})}function ZI(t){if(t.key==="/"&&!Rs(t.target)){t.preventDefault(),es.focus(),es.select();return}if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="k"){t.preventDefault(),es.focus(),es.select();return}if(!Rs(t.target)){let e=KI(t.key);if(e){t.preventDefault(),Qt(e);return}if(t.key==="n"){t.preventDefault(),Qc(1);return}if(t.key==="N"){t.preventDefault(),Qc(-1);return}if(t.key==="?"){t.preventDefault(),wi("SHORTCUTS","Keyboard shortcuts",YI());return}}t.key!=="Escape"||_t!=="inspect"||Rs(t.target)||(t.preventDefault(),jc(),pa())}function KI(t){switch(t){case"m":return"map";case"l":return"timeline";case"t":return"transcript";case"h":return"health";case"i":return"insights";case"r":return"raw";case"e":return"export";default:return null}}function JI(t){QI(t)&&(wn.add(t.code),t.preventDefault())}function jI(t){if(!C_(t.code))return;wn.delete(t.code)&&t.preventDefault()}function QI(t){let e=w_(t.code);if(e&&(Mt!=="map"||sN(t.target)))return!1;let n=e||Mt==="map"&&R_();return C_(t.code)&&(!t.ctrlKey||n)&&!t.metaKey&&!t.altKey&&!Rs(t.target)}function C_(t){return eN(t)||w_(t)||vC.has(t)}function eN(t){return xC.has(t)}function w_(t){return t===$0||tN(t)}function tN(t){return _C.has(t)}function nN(){return wn.has("ShiftLeft")||wn.has("ShiftRight")}function R_(){return wn.has("ControlLeft")||wn.has("ControlRight")}function I_(){wn.clear()}function iN(){document.hidden&&I_()}function Rs(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLElement&&t.isContentEditable}function sN(t){return t instanceof HTMLElement&&(Rs(t)||!!t.closest("button, select, a[href]"))}function xu(){_u(),Rn&&(oN(),!(typeof EventSource>"u")&&(Qi=new EventSource(Gr("/api/session/events").toString()),Qi.addEventListener("open",()=>{ws=!0,ss()}),Qi.addEventListener("session-status",t=>{ws=!0,ss();try{cx(JSON.parse(t.data))}catch(e){ha(e)}}),Qi.addEventListener("session-error",t=>{ha(t.data||"Session stream error")}),Qi.addEventListener("error",()=>{ws=!1,ss(),aN()})))}function _u(){rN(),N_(),lN()}function rN(){Qi&&(Qi.close(),Qi=null),ws=!1}function oN(){N_(),Rn&&(Cd(),Lc=setInterval(Cd,eT))}function N_(){Lc&&(clearInterval(Lc),Lc=null)}function aN(){Lr||(Lr=setTimeout(()=>{Lr=null,!ws&&Rn&&Cd()},tT))}function lN(){Lr&&(clearTimeout(Lr),Lr=null)}function ss(){let t=!!Ae?.isLive;qA.classList.toggle("paused",!Rn||!t),I0.textContent=Rn?t?"LIVE":"STALE":"PAUSED",N0.textContent=Rn?t?ws?"Streaming session...":"Watching session...":"Waiting for writes...":"Updates paused"}function a0(){Or||(Or=setTimeout(()=>{Or=null;let t=performance.now(),e=Ve.filter(n=>Us(n,t));e.length&&(e.forEach(n=>{n.matrixDirty=!0}),yn())},120))}function ha(t){console.warn(Os(t))}function Id(t){if(Math.abs(t)<.001)return;su();let e=t*cN();Fe.getWorldDirection(hi),Fe.position.addScaledVector(hi,e),Ke.target.addScaledVector(hi,e),Ke.update()}function cN(){return Math.min(hC,Math.max(cC,qx()*uC))}function Qc(t){let e=P_();if(!e.length)return;let i=(Math.max(0,e.findIndex(r=>r.id===ft))+t+e.length)%e.length,s=e[i];ft=s.id,it=s.promptId,Xr(s)}function P_(){return(_t==="inspect"&&it?ef(it).visibleNodes:Ve).filter(e=>Ln(e)&&(e.type!=="prompt"||e.promptId===it||_t==="overview")).sort(kx)}function uN(t){Fr=Fr===t?null:t,u_(U0,e=>e.dataset.metric===Fr),_t==="inspect"?(_t="overview",it=null,as({preserveCamera:!0})):(Bx(),fa(),lu()),yn()}function vu(t,e){return e?e==="compaction"?t.type==="compaction":t.type==="compaction"?!1:t.type==="prompt"?(Jo.get(t.id)||[]).some(n=>n.id!==t.id&&uu(n)&&vu(n,e)):t.type==="fileChange"?hN(t.source,e):t.type==="message"?!1:fN(t.source,e):!0}function hN(t,e){if(e==="file")return!0;if(e==="diff"){let n=dN(t).toLowerCase();return tf(t)!=="add"||n.includes("diff")||n.includes("@@")}return!1}function dN(t){return`${tf(t)} ${t.path} ${t.preview} ${t.detail}`}function fN(t,e){if(e==="long")return L_(t);if(e==="error"){let n=t.kind.toLowerCase(),i=t.status.toLowerCase();return n==="error"||A_(i)}return e==="file"?fd(t.name,["file","read","write","edit","multiedit","grep","glob","ls","apply_patch"]):e==="diff"?fd(t.name,["diff","apply_patch"]):e==="artifact"?t.kind.toLowerCase()==="artifact"||fd(t.name,["artifact"]):!1}function L_(t){return t.durationMs!==null&&t.durationMs>=_A}function fd(t,e){let n=t.toLowerCase();return e.some(i=>n===i?!0:new RegExp(`(^|[._:-])${i}([._:-]|$)`).test(n))}function pN(t){return Ps?`${t.kind} ${t.title} ${t.body}`.toLowerCase().includes(Ps):!0}function Sf(){let t=ft?Nt.get(ft):null;t&&hf()&&Xr(t,{skipStableRender:!0})}function wi(t,e,n){ft=null,Br=null,jx(),o_(),yn(),os.classList.remove("prompt-context"),kd.textContent=t,Dd(e,"Selection"),Ud.textContent="Control surface",Fd(new Date().toISOString()),Od.textContent=e,Fs(),of(),Qx(n)}function Fn(t){if(!t)return"";let e=t.split(/[\\/]/);return e.length<=4?t:`${e.at(-4)}/${e.at(-3)}/${e.at(-2)}/${e.at(-1)}`}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
