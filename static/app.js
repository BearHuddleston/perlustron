var zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bp=0,Mh=1,Up=2;var Lo=1,kp=2,vs=3,bi=0,jt=1,Tn=2,oi=0,gr=1,Fo=2,bh=3,Eh=4,Vp=5;var Hi=100,Hp=101,zp=102,Gp=103,Wp=104,$p=200,Xp=201,qp=202,Yp=203,sl=204,ol=205,Zp=206,Kp=207,Jp=208,jp=209,Qp=210,em=211,tm=212,nm=213,im=214,al=0,ll=1,cl=2,xr=3,ul=4,hl=5,dl=6,fl=7,Th=0,rm=1,sm=2,Gn=0,Ah=1,Ch=2,wh=3,Rh=4,Ih=5,Nh=6,Ph=7;var Lh=300,qi=301,vr=302,Hl=303,zl=304,Do=306,pl=1e3,ti=1001,ml=1002,kt=1003,om=1004;var Oo=1005;var Vt=1006,Gl=1007;var Yi=1008;var sn=1009,Fh=1010,Dh=1011,ys=1012,Wl=1013,Wn=1014,An=1015,ai=1016,$l=1017,Xl=1018,Ss=1020,Oh=35902,Bh=35899,Uh=1021,kh=1022,Cn=1023,ii=1026,Zi=1027,ql=1028,Yl=1029,Ki=1030,Zl=1031;var Kl=1033,Bo=33776,Uo=33777,ko=33778,Vo=33779,Jl=35840,jl=35841,Ql=35842,ec=35843,tc=36196,nc=37492,ic=37496,rc=37488,sc=37489,Ho=37490,oc=37491,ac=37808,lc=37809,cc=37810,uc=37811,hc=37812,dc=37813,fc=37814,pc=37815,mc=37816,gc=37817,xc=37818,_c=37819,vc=37820,yc=37821,Sc=36492,Mc=36494,bc=36495,Ec=36283,Tc=36284,zo=36285,Ac=36286;var ao=2300,gl=2301,rl=2302,uh=2303,hh=2400,dh=2401,fh=2402;var am=3200;var Vh=0,lm=1,Ci="",Jt="srgb",lo="srgb-linear",co="linear",tt="srgb";var mr=7680;var ph=519,cm=512,um=513,hm=514,Cc=515,dm=516,fm=517,wc=518,pm=519,mh=35044,Hh=35048;var zh="300 es",kn=2e3,os=2001;function Hv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zv(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function uo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function mm(){let t=uo("canvas");return t.style.display="block",t}var op={},as=null;function Gh(...t){let e="THREE."+t.shift();as?as("log",e,...t):console.log(e,...t)}function gm(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ce(...t){t=gm(t);let e="THREE."+t.shift();if(as)as("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Re(...t){t=gm(t);let e="THREE."+t.shift();if(as)as("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function xl(...t){let e=t.join(" ");e in op||(op[e]=!0,Ce(...t))}function xm(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var _m={[al]:ll,[cl]:dl,[ul]:fl,[xr]:hl,[ll]:al,[dl]:cl,[fl]:ul,[hl]:xr},Vn=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ap=1234567,so=Math.PI/180,ls=180/Math.PI;function Ms(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function Wh(t,e){return(t%e+e)%e}function Gv(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Wv(t,e,n){return t!==e?(n-t)/(e-t):0}function oo(t,e,n){return(1-n)*t+n*e}function $v(t,e,n,i){return oo(t,e,1-Math.exp(-n*i))}function Xv(t,e=1){return e-Math.abs(Wh(t,e*2)-e)}function qv(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Yv(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Zv(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Kv(t,e){return t+Math.random()*(e-t)}function Jv(t){return t*(.5-Math.random())}function jv(t){t!==void 0&&(ap=t);let e=ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qv(t){return t*so}function ey(t){return t*ls}function ty(t){return(t&t-1)===0&&t!==0}function ny(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function iy(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ry(t,e,n,i,r){let s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),h=o((e+i)/2),d=s((e-i)/2),u=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*h,l*d,l*u,a*c);break;case"YZY":t.set(l*u,a*h,l*d,a*c);break;case"ZXZ":t.set(l*d,l*u,a*h,a*c);break;case"XZX":t.set(a*h,l*g,l*f,a*c);break;case"YXY":t.set(l*f,a*h,l*g,a*c);break;case"ZYZ":t.set(l*g,l*f,a*h,a*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function rs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var bs={DEG2RAD:so,RAD2DEG:ls,generateUUID:Ms,clamp:$e,euclideanModulo:Wh,mapLinear:Gv,inverseLerp:Wv,lerp:oo,damp:$v,pingpong:Xv,smoothstep:qv,smootherstep:Yv,randInt:Zv,randFloat:Kv,randFloatSpread:Jv,seededRandom:jv,degToRad:Qv,radToDeg:ey,isPowerOfTwo:ty,ceilPowerOfTwo:ny,floorPowerOfTwo:iy,setQuaternionFromProperEuler:ry,normalize:Kt,denormalize:rs},we=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fn=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3],u=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);p=Math.sin(p*y)/M,a=Math.sin(a*y)/M,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+_*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+_*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return e[n]=a*g+h*d+l*f-c*u,e[n+1]=l*g+h*u+c*d-a*f,e[n+2]=c*g+h*f+a*u-l*d,e[n+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),u=l(i/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lp.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hu=new P,lp=new fn,Le=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],M=r[4],E=r[7],R=r[2],S=r[5],w=r[8];return s[0]=o*_+a*y+l*R,s[3]=o*m+a*M+l*S,s[6]=o*p+a*E+l*w,s[1]=c*_+h*y+d*R,s[4]=c*m+h*M+d*S,s[7]=c*p+h*E+d*w,s[2]=u*_+f*y+g*R,s[5]=u*m+f*M+g*S,s[8]=u*p+f*E+g*w,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,g=n*d+i*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(r*c-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=u*_,e[4]=(h*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=f*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(zu.makeScale(e,n)),this}rotate(e){return this.premultiply(zu.makeRotation(-e)),this}translate(e,n){return this.premultiply(zu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zu=new Le,cp=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),up=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sy(){let t={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tt&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?co:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[lo]:{primaries:e,whitePoint:i,transfer:co,toXYZ:cp,fromXYZ:up,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:cp,fromXYZ:up,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),t}var Ze=sy();function Mi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ss(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var $r,_l=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$r===void 0&&($r=uo("canvas")),$r.width=e.width,$r.height=e.height;let r=$r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$r}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=uo("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Mi(n[i]/255)*255):n[i]=Mi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},oy=0,cs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gu(r[o].image)):s.push(Gu(r[o]))}else s=Gu(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function Gu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_l.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var ay=0,Wu=new P,nn=class t extends Vn{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=ti,r=ti,s=Vt,o=Yi,a=Cn,l=sn,c=t.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Ms(),this.name="",this.source=new cs(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wu).x}get height(){return this.source.getSize(Wu).y}get depth(){return this.source.getSize(Wu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Ce(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Ce(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pl:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pl:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Lh;nn.DEFAULT_ANISOTROPY=1;var St=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let M=(c+1)/2,E=(f+1)/2,R=(p+1)/2,S=(h+u)/4,w=(d+_)/4,x=(g+m)/4;return M>E&&M>R?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=S/i,s=w/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=S/r,s=x/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=x/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vl=class extends Vn{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n),this.textures=[];let r={width:e,height:n,depth:i.depth},s=new nn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let n={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let r=Object.assign({},e.textures[n].image);this.textures[n].source=new cs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends vl{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},ho=class extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yl=class extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var at=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,i,r,s,o,a,l,c,h,d,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,d,u,f,g,_,m)}set(e,n,i,r,s,o,a,l,c,h,d,u,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,_=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=f+g*c,n[5]=u-_*c,n[9]=-a*l,n[2]=_-u*c,n[6]=g+f*c,n[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;n[0]=u+_*a,n[4]=g*a-f,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=f*a-g,n[6]=_+u*a,n[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;n[0]=u-_*a,n[4]=-o*d,n[8]=g+f*a,n[1]=f+g*a,n[5]=o*h,n[9]=_-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,_=a*d;n[0]=l*h,n[4]=g*c-f,n[8]=u*c+_,n[1]=l*d,n[5]=_*c+u,n[9]=f*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,_=a*c;n[0]=l*h,n[4]=_-u*d,n[8]=g*d+f,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=f*d+g,n[10]=u-_*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,_=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+_,n[5]=o*h,n[9]=f*d-g,n[2]=g*d-f,n[6]=a*h,n[10]=_*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ly,e,cy)}lookAt(e,n,i){let r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Fi.crossVectors(i,hn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Fi.crossVectors(i,hn)),Fi.normalize(),La.crossVectors(hn,Fi),r[0]=Fi.x,r[4]=La.x,r[8]=hn.x,r[1]=Fi.y,r[5]=La.y,r[9]=hn.y,r[2]=Fi.z,r[6]=La.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],M=i[7],E=i[11],R=i[15],S=r[0],w=r[4],x=r[8],A=r[12],N=r[1],I=r[5],D=r[9],k=r[13],H=r[2],T=r[6],F=r[10],L=r[14],$=r[3],q=r[7],ee=r[11],se=r[15];return s[0]=o*S+a*N+l*H+c*$,s[4]=o*w+a*I+l*T+c*q,s[8]=o*x+a*D+l*F+c*ee,s[12]=o*A+a*k+l*L+c*se,s[1]=h*S+d*N+u*H+f*$,s[5]=h*w+d*I+u*T+f*q,s[9]=h*x+d*D+u*F+f*ee,s[13]=h*A+d*k+u*L+f*se,s[2]=g*S+_*N+m*H+p*$,s[6]=g*w+_*I+m*T+p*q,s[10]=g*x+_*D+m*F+p*ee,s[14]=g*A+_*k+m*L+p*se,s[3]=y*S+M*N+E*H+R*$,s[7]=y*w+M*I+E*T+R*q,s[11]=y*x+M*D+E*F+R*ee,s[15]=y*A+M*k+E*L+R*se,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*f-c*u,M=a*f-c*d,E=a*u-l*d,R=o*f-c*h,S=o*u-l*h,w=o*d-a*h;return n*(_*y-m*M+p*E)-i*(g*y-m*R+p*S)+r*(g*M-_*R+p*w)-s*(g*E-_*S+m*w)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=n*a-i*o,M=n*l-r*o,E=n*c-s*o,R=i*l-r*a,S=i*c-s*a,w=r*c-s*l,x=h*_-d*g,A=h*m-u*g,N=h*p-f*g,I=d*m-u*_,D=d*p-f*_,k=u*p-f*m,H=y*k-M*D+E*I+R*N-S*A+w*x;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/H;return e[0]=(a*k-l*D+c*I)*T,e[1]=(r*D-i*k-s*I)*T,e[2]=(_*w-m*S+p*R)*T,e[3]=(u*S-d*w-f*R)*T,e[4]=(l*N-o*k-c*A)*T,e[5]=(n*k-r*N+s*A)*T,e[6]=(m*E-g*w-p*M)*T,e[7]=(h*w-u*E+f*M)*T,e[8]=(o*D-a*N+c*x)*T,e[9]=(i*N-n*D-s*x)*T,e[10]=(g*S-_*E+p*y)*T,e[11]=(d*E-h*S-f*y)*T,e[12]=(a*A-o*I-l*x)*T,e[13]=(n*I-i*A+r*x)*T,e[14]=(_*M-g*R-m*y)*T,e[15]=(h*R-d*M+u*y)*T,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,g=s*d,_=o*h,m=o*d,p=a*d,y=l*c,M=l*h,E=l*d,R=i.x,S=i.y,w=i.z;return r[0]=(1-(_+p))*R,r[1]=(f+E)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(f-E)*S,r[5]=(1-(u+p))*S,r[6]=(m+y)*S,r[7]=0,r[8]=(g+M)*w,r[9]=(m-y)*w,r[10]=(1-(u+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Xr.set(r[0],r[1],r[2]).length(),a=Xr.set(r[4],r[5],r[6]).length(),l=Xr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),On.copy(this);let c=1/o,h=1/a,d=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,n.setFromRotationMatrix(On),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=kn,l=!1){let c=this.elements,h=2*s/(n-e),d=2*s/(i-r),u=(n+e)/(n-e),f=(i+r)/(i-r),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===kn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===os)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=kn,l=!1){let c=this.elements,h=2/(n-e),d=2/(i-r),u=-(n+e)/(n-e),f=-(i+r)/(i-r),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===kn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===os)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Xr=new P,On=new at,ly=new P(0,0,0),cy=new P(1,1,1),Fi=new P,La=new P,hn=new P,hp=new at,dp=new fn,ri=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(n){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},uy=0,fp=new P,qr=new fn,xi=new at,Fa=new P,js=new P,hy=new P,dy=new fn,pp=new P(1,0,0),mp=new P(0,1,0),gp=new P(0,0,1),xp={type:"added"},fy={type:"removed"},Yr={type:"childadded",child:null},$u={type:"childremoved",child:null},Rt=class t extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new P,n=new ri,i=new fn,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Le}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,n){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fa.copy(e):Fa.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(js,Fa,this.up):xi.lookAt(Fa,js,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(xi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xp),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fy),$u.child=e,this.dispatchEvent($u),$u.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xp),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,hy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Rt.DEFAULT_UP=new P(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},py={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(py)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new ni;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},vm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Da={h:0,s:0,l:0};function Xu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var ze=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=Wh(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Xu(o,s,e+1/3),this.g=Xu(o,s,e),this.b=Xu(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=Jt){function i(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ce("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jt){let i=vm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Ze.workingToColorSpace(Wt.copy(this),e),Math.round($e(Wt.r*255,0,255))*65536+Math.round($e(Wt.g*255,0,255))*256+Math.round($e(Wt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Wt.copy(this),n);let i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Jt){Ze.workingToColorSpace(Wt.copy(this),e);let n=Wt.r,i=Wt.g,r=Wt.b;return e!==Jt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(Da);let i=oo(Di.h,Da.h,n),r=oo(Di.s,Da.s,n),s=oo(Di.l,Da.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new ze;ze.NAMES=vm;var fo=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Bn=new P,_i=new P,qu=new P,vi=new P,Zr=new P,Kr=new P,_p=new P,Yu=new P,Zu=new P,Ku=new P,Ju=new St,ju=new St,Qu=new St,Vi=class t{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),_i.subVectors(i,n),qu.subVectors(e,n);let o=Bn.dot(Bn),a=Bn.dot(_i),l=Bn.dot(qu),c=_i.dot(_i),h=_i.dot(qu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ju.setScalar(0),ju.setScalar(0),Qu.setScalar(0),Ju.fromBufferAttribute(e,n),ju.fromBufferAttribute(e,i),Qu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ju,s.x),o.addScaledVector(ju,s.y),o.addScaledVector(Qu,s.z),o}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),_i.subVectors(e,n),Bn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Bn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;Zr.subVectors(r,i),Kr.subVectors(s,i),Yu.subVectors(e,i);let l=Zr.dot(Yu),c=Kr.dot(Yu);if(l<=0&&c<=0)return n.copy(i);Zu.subVectors(e,r);let h=Zr.dot(Zu),d=Kr.dot(Zu);if(h>=0&&d<=h)return n.copy(r);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Zr,o);Ku.subVectors(e,s);let f=Zr.dot(Ku),g=Kr.dot(Ku);if(g>=0&&f<=g)return n.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Kr,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return _p.subVectors(s,r),a=(d-h)/(d-h+(f-g)),n.copy(r).addScaledVector(_p,a);let p=1/(m+_+u);return o=_*p,a=u*p,n.copy(i).addScaledVector(Zr,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},si=class{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),Ba.subVectors(this.max,Qs),Jr.subVectors(e.a,Qs),jr.subVectors(e.b,Qs),Qr.subVectors(e.c,Qs),Oi.subVectors(jr,Jr),Bi.subVectors(Qr,jr),hr.subVectors(Jr,Qr);let n=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-hr.z,hr.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,hr.z,0,-hr.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-hr.y,hr.x,0];return!eh(n,Jr,jr,Qr,Ba)||(n=[1,0,0,0,1,0,0,0,1],!eh(n,Jr,jr,Qr,Ba))?!1:(Ua.crossVectors(Oi,Bi),n=[Ua.x,Ua.y,Ua.z],eh(n,Jr,jr,Qr,Ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yi=[new P,new P,new P,new P,new P,new P,new P,new P],Un=new P,Oa=new si,Jr=new P,jr=new P,Qr=new P,Oi=new P,Bi=new P,hr=new P,Qs=new P,Ba=new P,Ua=new P,dr=new P;function eh(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){dr.fromArray(t,s);let a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),h=i.dot(dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var wt=new P,ka=new we,my=0,Ut=class extends Vn{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:my++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mh,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ka.fromBufferAttribute(this,n),ka.applyMatrix3(e),this.setXY(n,ka.x,ka.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=rs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=rs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=rs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=rs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=rs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var po=class extends Ut{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var mo=class extends Ut{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var lt=class extends Ut{constructor(e,n,i){super(new Float32Array(e),n,i)}},gy=new si,eo=new P,th=new P,rn=class{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):gy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);let n=eo.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(eo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(th)),this.expandByPoint(eo.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xy=0,En=new at,nh=new Rt,es=new P,dn=new si,to=new si,Bt=new P,It=class t extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hv(e)?mo:po)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(i,3))}else{let i=Math.min(e.length,n.count);for(let r=0;r<i;r++){let s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];to.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(dn.min,to.min),dn.expandByPoint(Bt),Bt.addVectors(dn.max,to.max),dn.expandByPoint(Bt)):(dn.expandByPoint(to.min),dn.expandByPoint(to.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Bt.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),Bt.add(es)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new P,l[x]=new P;let c=new P,h=new P,d=new P,u=new we,f=new we,g=new we,_=new P,m=new P;function p(x,A,N){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,N),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,A),g.fromBufferAttribute(s,N),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[x].add(_),a[A].add(_),a[N].add(_),l[x].add(m),l[A].add(m),l[N].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,A=y.length;x<A;++x){let N=y[x],I=N.start,D=N.count;for(let k=I,H=I+D;k<H;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let M=new P,E=new P,R=new P,S=new P;function w(x){R.fromBufferAttribute(r,x),S.copy(R);let A=a[x];M.copy(A),M.sub(R.multiplyScalar(R.dot(A))).normalize(),E.crossVectors(S,A);let I=E.dot(l[x])<0?-1:1;o.setXYZW(x,M.x,M.y,M.z,I)}for(let x=0,A=y.length;x<A;++x){let N=y[x],I=N.start,D=N.count;for(let k=I,H=I+D;k<H;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ut(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Ut(u,h,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(n))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var _y=0,Ei=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=gr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=ol,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Ce(`Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Ce(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==ol&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Si=new P,ih=new P,Va=new P,Ui=new P,rh=new P,Ha=new P,sh=new P,Ti=class{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ih.copy(e).add(n).multiplyScalar(.5),Va.copy(n).sub(e).normalize(),Ui.copy(this.origin).sub(ih);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Va),a=Ui.dot(this.direction),l=-Ui.dot(Va),c=Ui.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ih).addScaledVector(Va,u),f}intersectSphere(e,n){Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,s){rh.subVectors(n,e),Ha.subVectors(i,e),sh.crossVectors(rh,Ha);let o=this.direction.dot(sh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);let l=a*this.direction.dot(Ha.crossVectors(Ui,Ha));if(l<0)return null;let c=a*this.direction.dot(rh.cross(Ui));if(c<0||l+c>o)return null;let h=-a*Ui.dot(sh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hn=class extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vp=new at,fr=new Ti,za=new rn,yp=new P,Ga=new P,Wa=new P,$a=new P,oh=new P,Xa=new P,Sp=new P,qa=new P,Xt=class extends Rt{constructor(e=new It,n=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Xa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(oh.fromBufferAttribute(d,e),o?Xa.addScaledVector(oh,h):Xa.addScaledVector(oh.sub(n),h))}n.add(Xa)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(za.containsPoint(fr.origin)===!1&&(fr.intersectSphere(za,yp)===null||fr.origin.distanceToSquared(yp)>(e.far-e.near)**2))&&(vp.copy(s).invert(),fr.copy(e.ray).applyMatrix4(vp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,R=M;E<R;E+=3){let S=a.getX(E),w=a.getX(E+1),x=a.getX(E+2);r=Ya(this,p,e,i,c,h,d,S,w,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);r=Ya(this,o,e,i,c,h,d,y,M,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,R=M;E<R;E+=3){let S=E,w=E+1,x=E+2;r=Ya(this,p,e,i,c,h,d,S,w,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=m,M=m+1,E=m+2;r=Ya(this,o,e,i,c,h,d,y,M,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function vy(t,e,n,i,r,s,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===bi,a),l===null)return null;qa.copy(a),qa.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(qa);return c<n.near||c>n.far?null:{distance:c,point:qa.clone(),object:t}}function Ya(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ga),t.getVertexPosition(l,Wa),t.getVertexPosition(c,$a);let h=vy(t,e,n,i,Ga,Wa,$a,Sp);if(h){let d=new P;Vi.getBarycoord(Sp,Ga,Wa,$a,d),r&&(h.uv=Vi.getInterpolatedAttribute(r,a,l,c,d,new we)),s&&(h.uv1=Vi.getInterpolatedAttribute(s,a,l,c,d,new we)),o&&(h.normal=Vi.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};Vi.getNormal(Ga,Wa,$a,u.normal),h.face=u,h.barycoord=d}return h}var go=class extends nn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=kt,h=kt,d,u){super(null,o,a,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xo=class extends Ut{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ts=new at,Mp=new at,Za=[],bp=new si,yy=new at,no=new Xt,io=new rn,_o=class extends Xt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new xo(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,yy)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ts),bp.copy(e.boundingBox).applyMatrix4(ts),this.boundingBox.union(bp)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ts),io.copy(e.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(io)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){let i=this.matrixWorld,r=this.count;if(no.geometry=this.geometry,no.material=this.material,no.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(i),e.ray.intersectsSphere(io)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ts),Mp.multiplyMatrices(i,ts),no.matrixWorld=Mp,no.raycast(e,Za);for(let o=0,a=Za.length;o<a;o++){let l=Za[o];l.instanceId=s,l.object=this,n.push(l)}Za.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new go(new Float32Array(r*this.count),r,this.count,ql,An));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ah=new P,Sy=new P,My=new Le,tn=class{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=ah.subVectors(i,n).cross(Sy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let r=e.delta(ah),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||My.getNormalMatrix(e),r=this.coplanarPoint(ah).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pr=new rn,by=new we(.5,.5),Ka=new P,ds=class{constructor(e=new tn,n=new tn,i=new tn,r=new tn,s=new tn,o=new tn){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=kn,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],M=s[13],E=s[14],R=s[15];if(r[0].setComponents(c-o,f-h,p-g,R-y).normalize(),r[1].setComponents(c+o,f+h,p+g,R+y).normalize(),r[2].setComponents(c+a,f+d,p+_,R+M).normalize(),r[3].setComponents(c-a,f-d,p-_,R-M).normalize(),i)r[4].setComponents(l,u,m,E).normalize(),r[5].setComponents(c-l,f-u,p-m,R-E).normalize();else if(r[4].setComponents(c-l,f-u,p-m,R-E).normalize(),n===kn)r[5].setComponents(c+l,f+u,p+m,R+E).normalize();else if(n===os)r[5].setComponents(l,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);let n=by.distanceTo(e.center);return pr.radius=.7071067811865476+n,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Ka.x=r.normal.x>0?e.max.x:e.min.x,Ka.y=r.normal.y>0?e.max.y:e.min.y,Ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _r=class extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sl=new P,Ml=new P,Ep=new at,ro=new Ti,Ja=new rn,lh=new P,Tp=new P,bl=class extends Rt{constructor(e=new It,n=new _r){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Sl.fromBufferAttribute(n,r-1),Ml.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Sl.distanceTo(Ml);e.setAttribute("lineDistance",new lt(i,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,e.ray.intersectsSphere(Ja)===!1)return;Ep.copy(r).invert(),ro.copy(e.ray).applyMatrix4(Ep);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=h.getX(_),y=h.getX(_+1),M=ja(this,e,ro,l,p,y,_);M&&n.push(M)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=ja(this,e,ro,l,_,m,g-1);p&&n.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=ja(this,e,ro,l,_,_+1,_);p&&n.push(p)}if(this.isLineLoop){let _=ja(this,e,ro,l,g-1,f,g-1);_&&n.push(_)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ja(t,e,n,i,r,s,o){let a=t.geometry.attributes.position;if(Sl.fromBufferAttribute(a,r),Ml.fromBufferAttribute(a,s),n.distanceSqToSegment(Sl,Ml,lh,Tp)>i)return;lh.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(lh);if(!(c<e.near||c>e.far))return{distance:c,point:Tp.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}var Ap=new P,Cp=new P,fs=class extends bl{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Ap.fromBufferAttribute(n,r),Cp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ap.distanceTo(Cp);e.setAttribute("lineDistance",new lt(i,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ps=class extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wp=new at,gh=new Ti,Qa=new rn,el=new P,vo=class extends Rt{constructor(e=new It,n=new ps){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(r),Qa.radius+=s,e.ray.intersectsSphere(Qa)===!1)return;wp.copy(r).invert(),gh.copy(e.ray).applyMatrix4(wp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,_=f;g<_;g++){let m=c.getX(g);el.fromBufferAttribute(d,m),Rp(el,m,l,r,e,n,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,_=f;g<_;g++)el.fromBufferAttribute(d,g),Rp(el,g,l,r,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Rp(t,e,n,i,r,s,o){let a=gh.distanceSqToPoint(t);if(a<n){let l=new P;gh.closestPointToPoint(t,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var yo=class extends nn{constructor(e=[],n=qi,i,r,s,o,a,l,c,h){super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ai=class extends nn{constructor(e,n,i=Wn,r,s,o,a=kt,l=kt,c,h=ii,d=1){if(h!==ii&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:n,depth:d};super(u,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},El=class extends Ai{constructor(e,n=Wn,i=qi,r,s,o=kt,a=kt,l,c=ii){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},So=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zi=class t extends It{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2));function g(_,m,p,y,M,E,R,S,w,x,A){let N=E/w,I=R/x,D=E/2,k=R/2,H=S/2,T=w+1,F=x+1,L=0,$=0,q=new P;for(let ee=0;ee<F;ee++){let se=ee*I-k;for(let xe=0;xe<T;xe++){let He=xe*N-D;q[_]=He*y,q[m]=se*M,q[p]=H,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=S>0?1:-1,h.push(q.x,q.y,q.z),d.push(xe/w),d.push(1-ee/x),L+=1}}for(let ee=0;ee<x;ee++)for(let se=0;se<w;se++){let xe=u+se+T*ee,He=u+se+T*(ee+1),et=u+(se+1)+T*(ee+1),De=u+(se+1)+T*ee;l.push(xe,He,De),l.push(He,et,De),$+=6}a.addGroup(f,$,A),f+=$,u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Mo=class t extends It{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],u=[],f=[],g=0,_=[],m=i/2,p=0;y(),o===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new lt(d,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function y(){let E=new P,R=new P,S=0,w=(n-e)/i;for(let x=0;x<=s;x++){let A=[],N=x/s,I=N*(n-e)+e;for(let D=0;D<=r;D++){let k=D/r,H=k*l+a,T=Math.sin(H),F=Math.cos(H);R.x=I*T,R.y=-N*i+m,R.z=I*F,d.push(R.x,R.y,R.z),E.set(T,w,F).normalize(),u.push(E.x,E.y,E.z),f.push(k,1-N),A.push(g++)}_.push(A)}for(let x=0;x<r;x++)for(let A=0;A<s;A++){let N=_[A][x],I=_[A+1][x],D=_[A+1][x+1],k=_[A][x+1];(e>0||A!==0)&&(h.push(N,I,k),S+=3),(n>0||A!==s-1)&&(h.push(I,D,k),S+=3)}c.addGroup(p,S,0),p+=S}function M(E){let R=g,S=new we,w=new P,x=0,A=E===!0?e:n,N=E===!0?1:-1;for(let D=1;D<=r;D++)d.push(0,m*N,0),u.push(0,N,0),f.push(.5,.5),g++;let I=g;for(let D=0;D<=r;D++){let H=D/r*l+a,T=Math.cos(H),F=Math.sin(H);w.x=A*F,w.y=m*N,w.z=A*T,d.push(w.x,w.y,w.z),u.push(0,N,0),S.x=T*.5+.5,S.y=F*.5*N+.5,f.push(S.x,S.y),g++}for(let D=0;D<r;D++){let k=R+D,H=I+D;E===!0?h.push(H,H+1,k):h.push(H+1,H,k),x+=3}c.addGroup(p,x,E===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Tl=class t extends It{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};let s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new P,E=new P,R=new P;for(let S=0;S<n.length;S+=3)f(n[S+0],M),f(n[S+1],E),f(n[S+2],R),l(M,E,R,y)}function l(y,M,E,R){let S=R+1,w=[];for(let x=0;x<=S;x++){w[x]=[];let A=y.clone().lerp(E,x/S),N=M.clone().lerp(E,x/S),I=S-x;for(let D=0;D<=I;D++)D===0&&x===S?w[x][D]=A:w[x][D]=A.clone().lerp(N,D/I)}for(let x=0;x<S;x++)for(let A=0;A<2*(S-x)-1;A++){let N=Math.floor(A/2);A%2===0?(u(w[x][N+1]),u(w[x+1][N]),u(w[x][N])):(u(w[x][N+1]),u(w[x+1][N+1]),u(w[x+1][N]))}}function c(y){let M=new P;for(let E=0;E<s.length;E+=3)M.x=s[E+0],M.y=s[E+1],M.z=s[E+2],M.normalize().multiplyScalar(y),s[E+0]=M.x,s[E+1]=M.y,s[E+2]=M.z}function h(){let y=new P;for(let M=0;M<s.length;M+=3){y.x=s[M+0],y.y=s[M+1],y.z=s[M+2];let E=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(E,1-R)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){let M=o[y+0],E=o[y+2],R=o[y+4],S=Math.max(M,E,R),w=Math.min(M,E,R);S>.9&&w<.1&&(M<.2&&(o[y+0]+=1),E<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function f(y,M){let E=y*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function g(){let y=new P,M=new P,E=new P,R=new P,S=new we,w=new we,x=new we;for(let A=0,N=0;A<s.length;A+=9,N+=6){y.set(s[A+0],s[A+1],s[A+2]),M.set(s[A+3],s[A+4],s[A+5]),E.set(s[A+6],s[A+7],s[A+8]),S.set(o[N+0],o[N+1]),w.set(o[N+2],o[N+3]),x.set(o[N+4],o[N+5]),R.copy(y).add(M).add(E).divideScalar(3);let I=m(R);_(S,N+0,y,I),_(w,N+2,M,I),_(x,N+4,E,I)}}function _(y,M,E,R){R<0&&y.x===1&&(o[M]=y.x-1),E.x===0&&E.z===0&&(o[M]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}};var bo=class t extends Tl{constructor(e=1,n=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},Eo=class t extends It{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,u=n/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*u-o;for(let M=0;M<c;M++){let E=M*d-s;g.push(E,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let M=y+c*p,E=y+c*(p+1),R=y+1+c*(p+1),S=y+1+c*p;f.push(M,E,S),f.push(E,R,S)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},ms=class t extends It{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],h=[],d=e,u=(n-e)/r,f=new P,g=new we;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){let p=s+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/n+1)/2,g.y=(f.y/n+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<r;_++){let m=_*(i+1);for(let p=0;p<i;p++){let y=p+m,M=y,E=y+i+1,R=y+i+2,S=y+1;a.push(M,E,S),a.push(E,R,S)}}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var To=class t extends It{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let y=[],M=p/i,E=0;p===0&&o===0?E=.5/n:p===i&&l===Math.PI&&(E=-.5/n);for(let R=0;R<=n;R++){let S=R/n;d.x=-e*Math.cos(r+S*s)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(r+S*s)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(S+E,1-M),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<n;y++){let M=h[p][y+1],E=h[p][y],R=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&f.push(M,E,S),(p!==i-1||l<Math.PI)&&f.push(E,R,S)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function yr(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];if(Ip(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Ip(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function qt(t){let e={};for(let n=0;n<t.length;n++){let i=yr(t[n]);for(let r in i)e[r]=i[r]}return e}function Ip(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Ey(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $h(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var ym={clone:yr,merge:qt},Ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ty,this.fragmentShader=Ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Ey(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Al=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Cl=class extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wl=class extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function tl(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var Gi=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break e}o=n.length;break t}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rl=class extends Gi{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case dh:s=e,a=2*n-i;break;case fh:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case dh:o=e,l=2*i-n;break;case fh:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-n)/(r-n),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,y=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,E=f*m-f*_;for(let R=0;R!==a;++R)s[R]=p*o[h+R]+y*o[c+R]+M*o[l+R]+E*o[d+R];return s}},Il=class extends Gi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-n)/(r-n),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},Nl=class extends Gi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Pl=class extends Gi{interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.settings||this.DefaultSettings_,d=h.inTangents,u=h.outTangents;if(!d||!u){let _=(i-n)/(r-n),m=1-_;for(let p=0;p!==a;++p)s[p]=o[c+p]*m+o[l+p]*_;return s}let f=a*2,g=e-1;for(let _=0;_!==a;++_){let m=o[c+_],p=o[l+_],y=g*f+_*2,M=u[y],E=u[y+1],R=e*f+_*2,S=d[R],w=d[R+1],x=(i-n)/(r-n),A,N,I,D,k;for(let H=0;H<8;H++){A=x*x,N=A*x,I=1-x,D=I*I,k=D*I;let F=k*n+3*D*x*M+3*I*A*S+N*r-i;if(Math.abs(F)<1e-10)break;let L=3*D*(M-n)+6*I*x*(S-M)+3*A*(r-S);if(Math.abs(L)<1e-10)break;x=x-F/L,x=Math.max(0,Math.min(1,x))}s[_]=k*m+3*D*x*E+3*I*A*w+N*p}return s}},gn=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tl(n,this.TimeBufferType),this.values=tl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:tl(e.times,Array),values:tl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new Pl(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.settings=this.settings),n}setInterpolation(e){let n;switch(e){case ao:n=this.InterpolantFactoryMethodDiscrete;break;case gl:n=this.InterpolantFactoryMethodLinear;break;case rl:n=this.InterpolantFactoryMethodSmooth;break;case uh:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ce("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return rl;case this.InterpolantFactoryMethodBezier:return uh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Re("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Re("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&zv(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Re("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===rl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let _=n[d+g];if(_!==n[u+g]||_!==n[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)n[u+f]=n[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=gl;var Wi=class extends gn{constructor(e,n,i){super(e,n,i)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=ao;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends gn{constructor(e,n,i,r){super(e,n,i,r)}};Ll.prototype.ValueTypeName="color";var Fl=class extends gn{constructor(e,n,i,r){super(e,n,i,r)}};Fl.prototype.ValueTypeName="number";var Dl=class extends Gi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let h=c+a;c!==h;c+=4)fn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ao=class extends gn{constructor(e,n,i,r){super(e,n,i,r)}InterpolantFactoryMethodLinear(e){return new Dl(this.times,this.values,this.getValueSize(),e)}};Ao.prototype.ValueTypeName="quaternion";Ao.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends gn{constructor(e,n,i){super(e,n,i)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=ao;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Ol=class extends gn{constructor(e,n,i,r){super(e,n,i,r)}};Ol.prototype.ValueTypeName="vector";var Bl=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sm=new Bl,Ul=class{constructor(e){this.manager=e!==void 0?e:Sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var Co=class extends Rt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},wo=class extends Co{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){let n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}},ch=new at,Np=new P,Pp=new P,xh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;Np.setFromMatrixPosition(e.matrixWorld),n.position.copy(Np),Pp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Pp),n.updateMatrixWorld(),ch.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===os||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nl=new P,il=new fn,ei=new P,Ro=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nl,il,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,ei.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(nl,il,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new P,Lp=new we,Fp=new we,$t=class extends Ro{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,Lp,Fp),n.subVectors(Fp,Lp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(so*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var gs=class extends Ro{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},_h=class extends xh{constructor(){super(new gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Io=class extends Co{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new _h}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var ns=-90,is=1,kl=class extends Rt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $t(ns,is,e,n);r.layers=this.layers,this.add(r);let s=new $t(ns,is,e,n);s.layers=this.layers,this.add(s);let o=new $t(ns,is,e,n);o.layers=this.layers,this.add(o);let a=new $t(ns,is,e,n);a.layers=this.layers,this.add(a);let l=new $t(ns,is,e,n);l.layers=this.layers,this.add(l);let c=new $t(ns,is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===os)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Vl=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Xh="\\[\\]\\.:\\/",Cy=new RegExp("["+Xh+"]","g"),qh="[^"+Xh+"]",wy="[^"+Xh.replace("\\.","")+"]",Ry=/((?:WC+[\/:])*)/.source.replace("WC",qh),Iy=/(WCOD+)?/.source.replace("WCOD",wy),Ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),Py=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),Ly=new RegExp("^"+Ry+Iy+Ny+Py+"$"),Fy=["material","materials","bones","map"],vh=class{constructor(e,n,i){let r=i||gt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},gt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cy,"")}static parseTrackName(e){let n=Ly.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Fy.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;Re("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=vh;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jP=new Float32Array(1);var Dp=new at,xs=class{constructor(e,n,i=0,r=1/0){this.ray=new Ti(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Re("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Dp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dp),this}intersectObject(e,n=!0,i=[]){return yh(e,this,i,n),i.sort(Op),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)yh(e[r],this,i,n);return i.sort(Op),i}};function Op(t,e){return t.distance-e.distance}function yh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){let s=t.children;for(let o=0,a=s.length;o<a;o++)yh(s[o],e,n,!0)}}var _s=class{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Sh=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){let s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};var No=class extends fs{constructor(e=10,n=10,i=4473924,r=8947848){i=new ze(i),r=new ze(r);let s=n/2,o=e/n,a=e/2,l=[],c=[];for(let u=0,f=0,g=-a;u<=n;u++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let _=u===s?i:r;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new It;h.setAttribute("position",new lt(l,3)),h.setAttribute("color",new lt(c,3));let d=new _r({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Po=class extends Vn{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ce("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Yh(t,e,n,i){let r=Dy(i);switch(n){case Uh:return t*e;case ql:return t*e/r.components*r.byteLength;case Yl:return t*e/r.components*r.byteLength;case Ki:return t*e*2/r.components*r.byteLength;case Zl:return t*e*2/r.components*r.byteLength;case kh:return t*e*3/r.components*r.byteLength;case Cn:return t*e*4/r.components*r.byteLength;case Kl:return t*e*4/r.components*r.byteLength;case Bo:case Uo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ko:case Vo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jl:case ec:return Math.max(t,16)*Math.max(e,8)/4;case Jl:case Ql:return Math.max(t,8)*Math.max(e,8)/2;case tc:case nc:case rc:case sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ic:case Ho:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case cc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case dc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case fc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case gc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case _c:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Sc:case Mc:case bc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ec:case Tc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case zo:case Ac:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Dy(t){switch(t){case sn:case Fh:return{byteLength:1,components:1};case ys:case Dh:case ai:return{byteLength:2,components:1};case $l:case Xl:return{byteLength:2,components:4};case Wn:case Wl:case An:return{byteLength:4,components:1};case Oh:case Bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function Wm(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function By(t){let e=new WeakMap;function n(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];t.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ky=`#ifdef USE_ALPHAHASH
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
#endif`,Vy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wy=`#ifdef USE_AOMAP
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
#endif`,$y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xy=`#ifdef USE_BATCHING
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
#endif`,qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ky=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jy=`#ifdef USE_IRIDESCENCE
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
#endif`,jy=`#ifdef USE_BUMPMAP
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
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,aS=`#define PI 3.141592653589793
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
} // validated`,lS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cS=`vec3 transformedNormal = objectNormal;
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
#endif`,uS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pS="gl_FragColor = linearToOutputTexel( gl_FragColor );",mS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gS=`#ifdef USE_ENVMAP
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
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_S=`#ifdef USE_ENVMAP
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
#endif`,vS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yS=`#ifdef USE_ENVMAP
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
#endif`,SS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ES=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TS=`#ifdef USE_GRADIENTMAP
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
}`,AS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,IS=`#ifdef USE_ENVMAP
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
#endif`,NS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DS=`PhysicalMaterial material;
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
#endif`,OS=`uniform sampler2D dfgLUT;
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
}`,BS=`
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
#endif`,US=`#if defined( RE_IndirectDiffuse )
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
#endif`,kS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,HS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$S=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YS=`#if defined( USE_POINTS_UV )
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
#endif`,ZS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eM=`#ifdef USE_MORPHTARGETS
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
#endif`,tM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aM=`#ifdef USE_NORMALMAP
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
#endif`,lM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_M=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bM=`float getShadowMask() {
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
}`,EM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TM=`#ifdef USE_SKINNING
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
#endif`,AM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CM=`#ifdef USE_SKINNING
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
#endif`,wM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PM=`#ifdef USE_TRANSMISSION
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
#endif`,LM=`#ifdef USE_TRANSMISSION
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
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,UM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kM=`uniform sampler2D t2D;
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
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`#include <common>
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
}`,$M=`#if DEPTH_PACKING == 3200
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
}`,XM=`#define DISTANCE
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
}`,qM=`#define DISTANCE
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
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`uniform float scale;
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
}`,JM=`uniform vec3 diffuse;
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
}`,jM=`#include <common>
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
}`,QM=`uniform vec3 diffuse;
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
}`,eb=`#define LAMBERT
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
}`,tb=`#define LAMBERT
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
}`,nb=`#define MATCAP
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
}`,ib=`#define MATCAP
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
}`,rb=`#define NORMAL
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
}`,sb=`#define NORMAL
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
}`,ob=`#define PHONG
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
}`,ab=`#define PHONG
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
}`,lb=`#define STANDARD
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
}`,cb=`#define STANDARD
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
}`,ub=`#define TOON
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
}`,hb=`#define TOON
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
}`,db=`uniform float size;
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
}`,fb=`uniform vec3 diffuse;
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
}`,pb=`#include <common>
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
}`,mb=`uniform vec3 color;
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
}`,gb=`uniform float rotation;
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
}`,xb=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Uy,alphahash_pars_fragment:ky,alphamap_fragment:Vy,alphamap_pars_fragment:Hy,alphatest_fragment:zy,alphatest_pars_fragment:Gy,aomap_fragment:Wy,aomap_pars_fragment:$y,batching_pars_vertex:Xy,batching_vertex:qy,begin_vertex:Yy,beginnormal_vertex:Zy,bsdfs:Ky,iridescence_fragment:Jy,bumpmap_pars_fragment:jy,clipping_planes_fragment:Qy,clipping_planes_pars_fragment:eS,clipping_planes_pars_vertex:tS,clipping_planes_vertex:nS,color_fragment:iS,color_pars_fragment:rS,color_pars_vertex:sS,color_vertex:oS,common:aS,cube_uv_reflection_fragment:lS,defaultnormal_vertex:cS,displacementmap_pars_vertex:uS,displacementmap_vertex:hS,emissivemap_fragment:dS,emissivemap_pars_fragment:fS,colorspace_fragment:pS,colorspace_pars_fragment:mS,envmap_fragment:gS,envmap_common_pars_fragment:xS,envmap_pars_fragment:_S,envmap_pars_vertex:vS,envmap_physical_pars_fragment:IS,envmap_vertex:yS,fog_vertex:SS,fog_pars_vertex:MS,fog_fragment:bS,fog_pars_fragment:ES,gradientmap_pars_fragment:TS,lightmap_pars_fragment:AS,lights_lambert_fragment:CS,lights_lambert_pars_fragment:wS,lights_pars_begin:RS,lights_toon_fragment:NS,lights_toon_pars_fragment:PS,lights_phong_fragment:LS,lights_phong_pars_fragment:FS,lights_physical_fragment:DS,lights_physical_pars_fragment:OS,lights_fragment_begin:BS,lights_fragment_maps:US,lights_fragment_end:kS,lightprobes_pars_fragment:VS,logdepthbuf_fragment:HS,logdepthbuf_pars_fragment:zS,logdepthbuf_pars_vertex:GS,logdepthbuf_vertex:WS,map_fragment:$S,map_pars_fragment:XS,map_particle_fragment:qS,map_particle_pars_fragment:YS,metalnessmap_fragment:ZS,metalnessmap_pars_fragment:KS,morphinstance_vertex:JS,morphcolor_vertex:jS,morphnormal_vertex:QS,morphtarget_pars_vertex:eM,morphtarget_vertex:tM,normal_fragment_begin:nM,normal_fragment_maps:iM,normal_pars_fragment:rM,normal_pars_vertex:sM,normal_vertex:oM,normalmap_pars_fragment:aM,clearcoat_normal_fragment_begin:lM,clearcoat_normal_fragment_maps:cM,clearcoat_pars_fragment:uM,iridescence_pars_fragment:hM,opaque_fragment:dM,packing:fM,premultiplied_alpha_fragment:pM,project_vertex:mM,dithering_fragment:gM,dithering_pars_fragment:xM,roughnessmap_fragment:_M,roughnessmap_pars_fragment:vM,shadowmap_pars_fragment:yM,shadowmap_pars_vertex:SM,shadowmap_vertex:MM,shadowmask_pars_fragment:bM,skinbase_vertex:EM,skinning_pars_vertex:TM,skinning_vertex:AM,skinnormal_vertex:CM,specularmap_fragment:wM,specularmap_pars_fragment:RM,tonemapping_fragment:IM,tonemapping_pars_fragment:NM,transmission_fragment:PM,transmission_pars_fragment:LM,uv_pars_fragment:FM,uv_pars_vertex:DM,uv_vertex:OM,worldpos_vertex:BM,background_vert:UM,background_frag:kM,backgroundCube_vert:VM,backgroundCube_frag:HM,cube_vert:zM,cube_frag:GM,depth_vert:WM,depth_frag:$M,distance_vert:XM,distance_frag:qM,equirect_vert:YM,equirect_frag:ZM,linedashed_vert:KM,linedashed_frag:JM,meshbasic_vert:jM,meshbasic_frag:QM,meshlambert_vert:eb,meshlambert_frag:tb,meshmatcap_vert:nb,meshmatcap_frag:ib,meshnormal_vert:rb,meshnormal_frag:sb,meshphong_vert:ob,meshphong_frag:ab,meshphysical_vert:lb,meshphysical_frag:cb,meshtoon_vert:ub,meshtoon_frag:hb,points_vert:db,points_frag:fb,shadow_vert:pb,shadow_frag:mb,sprite_vert:gb,sprite_frag:xb},de={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},ci={basic:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:qt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:qt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:qt([de.points,de.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:qt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:qt([de.common,de.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:qt([de.sprite,de.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:qt([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:qt([de.lights,de.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ci.physical={uniforms:qt([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Rc={r:0,b:0,g:0},_b=new at,$m=new Le;$m.set(-1,0,0,0,1,0,0,0,1);function vb(t,e,n,i,r,s){let o=new ze(0),a=r===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let E=y.backgroundBlurriness>0;M=e.get(M,E)}return M}function g(y){let M=!1,E=f(y);E===null?m(o,a):E&&E.isColor&&(m(E,1),M=!0);let R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(y,M){let E=f(M);E&&(E.isCubeTexture||E.mapping===Do)?(c===void 0&&(c=new Xt(new zi(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:yr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_b.makeRotationFromEuler(M.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($m),c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==tt,(h!==E||d!==E.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,u=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Xt(new Eo(2,2),new mn({name:"BackgroundMaterial",uniforms:yr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(E.colorSpace)!==tt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,u=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(Rc,$h(t)),n.buffers.color.setClear(Rc.r,Rc.g,Rc.b,M,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:_,dispose:p}}function yb(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null),s=r,o=!1;function a(I,D,k,H,T){let F=!1,L=d(I,H,k,D);s!==L&&(s=L,c(s.object)),F=f(I,H,k,T),F&&g(I,H,k,T),T!==null&&e.update(T,t.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,E(I,D,k,H),T!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(T).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function d(I,D,k,H){let T=H.wireframe===!0,F=i[D.id];F===void 0&&(F={},i[D.id]=F);let L=I.isInstancedMesh===!0?I.id:0,$=F[L];$===void 0&&($={},F[L]=$);let q=$[k.id];q===void 0&&(q={},$[k.id]=q);let ee=q[T];return ee===void 0&&(ee=u(l()),q[T]=ee),ee}function u(I){let D=[],k=[],H=[];for(let T=0;T<n;T++)D[T]=0,k[T]=0,H[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:H,object:I,attributes:{},index:null}}function f(I,D,k,H){let T=s.attributes,F=D.attributes,L=0,$=k.getAttributes();for(let q in $)if($[q].location>=0){let se=T[q],xe=F[q];if(xe===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor)),se===void 0||se.attribute!==xe||xe&&se.data!==xe.data)return!0;L++}return s.attributesNum!==L||s.index!==H}function g(I,D,k,H){let T={},F=D.attributes,L=0,$=k.getAttributes();for(let q in $)if($[q].location>=0){let se=F[q];se===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(se=I.instanceColor));let xe={};xe.attribute=se,se&&se.data&&(xe.data=se.data),T[q]=xe,L++}s.attributes=T,s.attributesNum=L,s.index=H}function _(){let I=s.newAttributes;for(let D=0,k=I.length;D<k;D++)I[D]=0}function m(I){p(I,0)}function p(I,D){let k=s.newAttributes,H=s.enabledAttributes,T=s.attributeDivisors;k[I]=1,H[I]===0&&(t.enableVertexAttribArray(I),H[I]=1),T[I]!==D&&(t.vertexAttribDivisor(I,D),T[I]=D)}function y(){let I=s.newAttributes,D=s.enabledAttributes;for(let k=0,H=D.length;k<H;k++)D[k]!==I[k]&&(t.disableVertexAttribArray(k),D[k]=0)}function M(I,D,k,H,T,F,L){L===!0?t.vertexAttribIPointer(I,D,k,T,F):t.vertexAttribPointer(I,D,k,H,T,F)}function E(I,D,k,H){_();let T=H.attributes,F=k.getAttributes(),L=D.defaultAttributeValues;for(let $ in F){let q=F[$];if(q.location>=0){let ee=T[$];if(ee===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){let se=ee.normalized,xe=ee.itemSize,He=e.get(ee);if(He===void 0)continue;let et=He.buffer,De=He.type,J=He.bytesPerElement,ue=De===t.INT||De===t.UNSIGNED_INT||ee.gpuType===Wl;if(ee.isInterleavedBufferAttribute){let oe=ee.data,Ie=oe.stride,Oe=ee.offset;if(oe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<q.locationSize;Ne++)p(q.location+Ne,oe.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ne=0;Ne<q.locationSize;Ne++)m(q.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,et);for(let Ne=0;Ne<q.locationSize;Ne++)M(q.location+Ne,xe/q.locationSize,De,se,Ie*J,(Oe+xe/q.locationSize*Ne)*J,ue)}else{if(ee.isInstancedBufferAttribute){for(let oe=0;oe<q.locationSize;oe++)p(q.location+oe,ee.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let oe=0;oe<q.locationSize;oe++)m(q.location+oe);t.bindBuffer(t.ARRAY_BUFFER,et);for(let oe=0;oe<q.locationSize;oe++)M(q.location+oe,xe/q.locationSize,De,se,xe*J,xe/q.locationSize*oe*J,ue)}}else if(L!==void 0){let se=L[$];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(q.location,se);break;case 3:t.vertexAttrib3fv(q.location,se);break;case 4:t.vertexAttrib4fv(q.location,se);break;default:t.vertexAttrib1fv(q.location,se)}}}}y()}function R(){A();for(let I in i){let D=i[I];for(let k in D){let H=D[k];for(let T in H){let F=H[T];for(let L in F)h(F[L].object),delete F[L];delete H[T]}}delete i[I]}}function S(I){if(i[I.id]===void 0)return;let D=i[I.id];for(let k in D){let H=D[k];for(let T in H){let F=H[T];for(let L in F)h(F[L].object),delete F[L];delete H[T]}}delete i[I.id]}function w(I){for(let D in i){let k=i[D];for(let H in k){let T=k[H];if(T[I.id]===void 0)continue;let F=T[I.id];for(let L in F)h(F[L].object),delete F[L];delete T[I.id]}}}function x(I){for(let D in i){let k=i[D],H=I.isInstancedMesh===!0?I.id:0,T=k[H];if(T!==void 0){for(let F in T){let L=T[F];for(let $ in L)h(L[$].object),delete L[$];delete T[F]}delete k[H],Object.keys(k).length===0&&delete i[D]}}}function A(){N(),o=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Sb(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Mb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Cn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let x=w===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==sn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==An&&!x)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),S=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:E,maxSamples:R,samples:S}}function bb(t){let e=this,n=null,i=0,r=!1,s=!1,o=new tn,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||r;return r=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let y=s?0:i,M=y*4,E=p.clippingState||null;l.value=E,E=h(g,u,M,f);for(let R=0;R!==M;++R)E[R]=n[R];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=f;M!==_;++M,E+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Ji=4,Mm=[.125,.215,.35,.446,.526,.582],Sr=20,Eb=256,Go=new gs,bm=new ze,Zh=null,Kh=0,Jh=0,jh=!1,Tb=new P,Nc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){let{size:o=256,position:a=Tb}=s;Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zh,Kh,Jh),this._renderer.xr.enabled=jh,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qi||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:ai,format:Cn,colorSpace:lo,depthBuffer:!1},r=Em(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,n,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ab(s)),this._blurMaterial=wb(s,e,n),this._ggxMaterial=Cb(s,e,n)}return r}_compileMaterial(e){let n=new Xt(new It,e);this._renderer.compile(n,Go)}_sceneToCubeUV(e,n,i,r,s){let l=new $t(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(bm),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new zi,new Hn({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(bm),p=!0);for(let M=0;M<6;M++){let E=M%3;E===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):E===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));let R=this._cubeSize;Es(r,E*R,M>2?R:0,R,R),d.setRenderTarget(r),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===qi||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Es(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Go)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Ji?i-g+Ji:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-n,Es(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(a,Go),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Es(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(a,Go)}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[r];d.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Sr-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Sr;m>Sr&&Ce(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);let p=[],y=0;for(let w=0;w<Sr;++w){let x=w/_,A=Math.exp(-x*x/2);p.push(A),w===0?y+=A:w<m&&(y+=2*A)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;let E=this._sizeLods[r],R=3*E*(r>M-Ji?r-M+Ji:0),S=4*(this._cubeSize-E);Es(n,R,S,3*E,2*E),l.setRenderTarget(n),l.render(d,Go)}};function Ab(t){let e=[],n=[],i=[],r=t,s=t-Ji+1+Mm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Ji?l=Mm[o-t+Ji-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),M=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let S=0;S<f;S++){let w=S%3*2/3-1,x=S>2?0:-1,A=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];y.set(A,_*g*S),M.set(u,m*g*S);let N=[S,S,S,S,S,S];E.set(N,p*g*S)}let R=new It;R.setAttribute("position",new Ut(y,_)),R.setAttribute("uv",new Ut(M,m)),R.setAttribute("faceIndex",new Ut(E,p)),i.push(new Xt(R,null)),r>Ji&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Em(t,e,n){let i=new pn(t,e,n);return i.texture.mapping=Do,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Cb(t,e,n){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Eb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function wb(t,e,n){let i=new Float32Array(Sr),r=new P(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Tm(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Am(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Fc(){return`

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
	`}var Pc=class extends pn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yo(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zi(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:oi});s.uniforms.tEquirect.value=n;let o=new Xt(r,s),a=n.minFilter;return n.minFilter===Yi&&(n.minFilter=Vt),new kl(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}};function Rb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Hl||f===zl)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new Pc(g.height);return _.fromEquirectangularTexture(t,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===Hl||f===zl,_=f===qi||f===vr;if(g||_){let m=n.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Nc(t)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return g&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Nc(t)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Hl?u.mapping=qi:f===zl&&(u.mapping=vr),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Ib(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&xl("WebGLRenderer: "+i+" extension not supported."),r}}}function Nb(t,e,n,i){let r={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],t.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let y=f.array;_=f.version;for(let M=0,E=y.length;M<E;M+=3){let R=y[M+0],S=y[M+1],w=y[M+2];u.push(R,S,S,w,w,R)}}else{let y=g.array;_=g.version;for(let M=0,E=y.length/3-1;M<E;M+=3){let R=M+0,S=M+1,w=M+2;u.push(R,S,S,w,w,R)}}let m=new(g.count>=65535?mo:po)(u,1);m.version=_;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Pb(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,s,d*o),n.update(u,i,1)}function c(d,u,f){f!==0&&(t.drawElementsInstanced(i,u,s,d*o,f),n.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];n.update(_,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Lb(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Re("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Fb(t,e,n){let i=new WeakMap,r=new St;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let A=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let E=a.attributes.position.count*M,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let S=new Float32Array(E*R*4*d),w=new ho(S,E,R,d);w.type=An,w.needsUpdate=!0;let x=M*4;for(let N=0;N<d;N++){let I=m[N],D=p[N],k=y[N],H=E*R*4*N;for(let T=0;T<I.count;T++){let F=T*x;f===!0&&(r.fromBufferAttribute(I,T),S[H+F+0]=r.x,S[H+F+1]=r.y,S[H+F+2]=r.z,S[H+F+3]=0),g===!0&&(r.fromBufferAttribute(D,T),S[H+F+4]=r.x,S[H+F+5]=r.y,S[H+F+6]=r.z,S[H+F+7]=0),_===!0&&(r.fromBufferAttribute(k,T),S[H+F+8]=r.x,S[H+F+9]=r.y,S[H+F+10]=r.z,S[H+F+11]=k.itemSize===4?r.w:1)}}u={count:d,texture:w,size:new we(E,R)},i.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function Db(t,e,n,i,r){let s=new WeakMap;function o(c){let h=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}var Ob={[Ah]:"LINEAR_TONE_MAPPING",[Ch]:"REINHARD_TONE_MAPPING",[wh]:"CINEON_TONE_MAPPING",[Rh]:"ACES_FILMIC_TONE_MAPPING",[Nh]:"AGX_TONE_MAPPING",[Ph]:"NEUTRAL_TONE_MAPPING",[Ih]:"CUSTOM_TONE_MAPPING"};function Bb(t,e,n,i,r){let s=new pn(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Ai(e,n):void 0}),o=new pn(e,n,{type:ai,depthBuffer:!1,stencilBuffer:!1}),a=new It;a.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new lt([0,2,0,0,2,0],2));let l=new Al({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Xt(a,l),h=new gs(-1,1,1,-1,0,1),d=null,u=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(y,M){s.setSize(y,M),o.setSize(y,M);for(let E=0;E<m.length;E++){let R=m[E];R.setSize&&R.setSize(y,M)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;let M=s.width,E=s.height;for(let R=0;R<m.length;R++){let S=m[R];S.setSize&&S.setSize(M,E)}},this.begin=function(y,M){if(f||y.toneMapping===Gn&&m.length===0)return!1;if(_=M,M!==null){let E=M.width,R=M.height;(s.width!==E||s.height!==R)&&this.setSize(E,R)}return p===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=Gn,!0},this.hasRenderPass=function(){return p},this.end=function(y,M){y.toneMapping=g,f=!0;let E=s,R=o;for(let S=0;S<m.length;S++){let w=m[S];if(w.enabled!==!1&&(w.render(y,R,E,M),w.needsSwap!==!1)){let x=E;E=R,R=x}}if(d!==y.outputColorSpace||u!==y.toneMapping){d=y.outputColorSpace,u=y.toneMapping,l.defines={},Ze.getTransfer(d)===tt&&(l.defines.SRGB_TRANSFER="");let S=Ob[u];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(_),y.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var Xm=new nn,td=new Ai(1,1),qm=new ho,Ym=new yl,Zm=new yo,Cm=[],wm=[],Rm=new Float32Array(16),Im=new Float32Array(9),Nm=new Float32Array(4);function As(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=Cm[r];if(s===void 0&&(s=new Float32Array(r),Cm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Dc(t,e){let n=wm[e];n===void 0&&(n=new Int32Array(e),wm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ub(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function Vb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function Hb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function zb(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Ft(n,i))return;Nm.set(i),t.uniformMatrix2fv(this.addr,!1,Nm),Dt(n,i)}}function Gb(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Ft(n,i))return;Im.set(i),t.uniformMatrix3fv(this.addr,!1,Im),Dt(n,i)}}function Wb(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Ft(n,i))return;Rm.set(i),t.uniformMatrix4fv(this.addr,!1,Rm),Dt(n,i)}}function $b(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Xb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function qb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function Yb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function Zb(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Kb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function Jb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function jb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function Qb(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(td.compareFunction=n.isReversedDepthBuffer()?wc:Cc,s=td):s=Xm,n.setTexture2D(e||s,r)}function eE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ym,r)}function tE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Zm,r)}function nE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||qm,r)}function iE(t){switch(t){case 5126:return Ub;case 35664:return kb;case 35665:return Vb;case 35666:return Hb;case 35674:return zb;case 35675:return Gb;case 35676:return Wb;case 5124:case 35670:return $b;case 35667:case 35671:return Xb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return Zb;case 36294:return Kb;case 36295:return Jb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return eE;case 35680:case 36300:case 36308:case 36293:return tE;case 36289:case 36303:case 36311:case 36292:return nE}}function rE(t,e){t.uniform1fv(this.addr,e)}function sE(t,e){let n=As(e,this.size,2);t.uniform2fv(this.addr,n)}function oE(t,e){let n=As(e,this.size,3);t.uniform3fv(this.addr,n)}function aE(t,e){let n=As(e,this.size,4);t.uniform4fv(this.addr,n)}function lE(t,e){let n=As(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cE(t,e){let n=As(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function uE(t,e){let n=As(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hE(t,e){t.uniform1iv(this.addr,e)}function dE(t,e){t.uniform2iv(this.addr,e)}function fE(t,e){t.uniform3iv(this.addr,e)}function pE(t,e){t.uniform4iv(this.addr,e)}function mE(t,e){t.uniform1uiv(this.addr,e)}function gE(t,e){t.uniform2uiv(this.addr,e)}function xE(t,e){t.uniform3uiv(this.addr,e)}function _E(t,e){t.uniform4uiv(this.addr,e)}function vE(t,e,n){let i=this.cache,r=e.length,s=Dc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=td:o=Xm;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function yE(t,e,n){let i=this.cache,r=e.length,s=Dc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ym,s[o])}function SE(t,e,n){let i=this.cache,r=e.length,s=Dc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Zm,s[o])}function ME(t,e,n){let i=this.cache,r=e.length,s=Dc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||qm,s[o])}function bE(t){switch(t){case 5126:return rE;case 35664:return sE;case 35665:return oE;case 35666:return aE;case 35674:return lE;case 35675:return cE;case 35676:return uE;case 5124:case 35670:return hE;case 35667:case 35671:return dE;case 35668:case 35672:return fE;case 35669:case 35673:return pE;case 5125:return mE;case 36294:return gE;case 36295:return xE;case 36296:return _E;case 35678:case 36198:case 36298:case 36306:case 35682:return vE;case 35679:case 36299:case 36307:return yE;case 35680:case 36300:case 36308:case 36293:return SE;case 36289:case 36303:case 36311:case 36292:return ME}}var nd=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=iE(n.type)}},id=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bE(n.type)}},rd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},Qh=/(\w+)(\])?(\[|\.)?/g;function Pm(t,e){t.seq.push(e),t.map[e.id]=e}function EE(t,e,n){let i=t.name,r=i.length;for(Qh.lastIndex=0;;){let s=Qh.exec(i),o=Qh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pm(n,c===void 0?new nd(a,t,e):new id(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new rd(a),Pm(n,d)),n=d}}}var Ts=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);EE(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function Lm(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var TE=37297,AE=0;function CE(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Fm=new Le;function wE(t){Ze._getMatrix(Fm,Ze.workingColorSpace,t);let e=`mat3( ${Fm.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case co:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Dm(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+CE(t.getShaderSource(e),a)}else return s}function RE(t,e){let n=wE(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var IE={[Ah]:"Linear",[Ch]:"Reinhard",[wh]:"Cineon",[Rh]:"ACESFilmic",[Nh]:"AgX",[Ph]:"Neutral",[Ih]:"Custom"};function NE(t,e){let n=IE[e];return n===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ic=new P;function PE(){Ze.getLuminanceCoefficients(Ic);let t=Ic.x.toFixed(4),e=Ic.y.toFixed(4),n=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function FE(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function DE(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function $o(t){return t!==""}function Om(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var OE=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(t){return t.replace(OE,UE)}var BE=new Map;function UE(t,e){let n=Ge[e];if(n===void 0){let i=BE.get(e);if(i!==void 0)n=Ge[i],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sd(n)}var kE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Um(t){return t.replace(kE,VE)}function VE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function km(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var HE={[Lo]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function zE(t){return HE[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var GE={[qi]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE",[Do]:"ENVMAP_TYPE_CUBE_UV"};function WE(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":GE[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var $E={[vr]:"ENVMAP_MODE_REFRACTION"};function XE(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":$E[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qE={[Th]:"ENVMAP_BLENDING_MULTIPLY",[rm]:"ENVMAP_BLENDING_MIX",[sm]:"ENVMAP_BLENDING_ADD"};function YE(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":qE[t.combine]||"ENVMAP_BLENDING_NONE"}function ZE(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function KE(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=zE(n),c=WE(n),h=XE(n),d=YE(n),u=ZE(n),f=LE(n),g=FE(s),_=r.createProgram(),m,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($o).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($o).join(`
`),p.length>0&&(p+=`
`)):(m=[km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),p=[km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gn?"#define TONE_MAPPING":"",n.toneMapping!==Gn?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Gn?NE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,RE("linearToOutputTexel",n.outputColorSpace),PE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($o).join(`
`)),o=sd(o),o=Om(o,n),o=Bm(o,n),a=sd(a),a=Om(a,n),a=Bm(a,n),o=Um(o),a=Um(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+m+o,E=y+p+a,R=Lm(r,r.VERTEX_SHADER,M),S=Lm(r,r.FRAGMENT_SHADER,E);r.attachShader(_,R),r.attachShader(_,S),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(I){if(t.debug.checkShaderErrors){let D=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(R)||"",H=r.getShaderInfoLog(S)||"",T=D.trim(),F=k.trim(),L=H.trim(),$=!0,q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,R,S);else{let ee=Dm(r,R,"vertex"),se=Dm(r,S,"fragment");Re("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+T+`
`+ee+`
`+se)}else T!==""?Ce("WebGLProgram: Program Info Log:",T):(F===""||L==="")&&(q=!1);q&&(I.diagnostics={runnable:$,programLog:T,vertexShader:{log:F,prefix:m},fragmentShader:{log:L,prefix:p}})}r.deleteShader(R),r.deleteShader(S),x=new Ts(r,_),A=DE(r,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(_,TE)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=S,this}var JE=0,od=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new ad(e),n.set(e,i)),i}},ad=class{constructor(e){this.id=JE++,this.code=e,this.usedTimes=0}};function jE(t){return t===Ki||t===Ho||t===zo}function QE(t,e,n,i,r,s){let o=new us,a=new od,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,A,N,I,D,k){let H=I.fog,T=D.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=e.get(x.envMap||F,L),q=$&&$.mapping===Do?$.image.height:null,ee=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ce("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let se=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,xe=se!==void 0?se.length:0,He=0;T.morphAttributes.position!==void 0&&(He=1),T.morphAttributes.normal!==void 0&&(He=2),T.morphAttributes.color!==void 0&&(He=3);let et,De,J,ue;if(ee){let Ue=ci[ee];et=Ue.vertexShader,De=Ue.fragmentShader}else et=x.vertexShader,De=x.fragmentShader,a.update(x),J=a.getVertexShaderID(x),ue=a.getFragmentShaderID(x);let oe=t.getRenderTarget(),Ie=t.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,Ne=D.isBatchedMesh===!0,vt=!!x.map,qe=!!x.matcap,rt=!!$,mt=!!x.aoMap,Xe=!!x.lightMap,Pt=!!x.bumpMap,yt=!!x.normalMap,cn=!!x.displacementMap,B=!!x.emissiveMap,Lt=!!x.metalnessMap,Ye=!!x.roughnessMap,ft=x.anisotropy>0,he=x.clearcoat>0,bt=x.dispersion>0,C=x.iridescence>0,v=x.sheen>0,V=x.transmission>0,Z=ft&&!!x.anisotropyMap,Q=he&&!!x.clearcoatMap,te=he&&!!x.clearcoatNormalMap,ce=he&&!!x.clearcoatRoughnessMap,X=C&&!!x.iridescenceMap,K=C&&!!x.iridescenceThicknessMap,me=v&&!!x.sheenColorMap,ve=v&&!!x.sheenRoughnessMap,ae=!!x.specularMap,ne=!!x.specularColorMap,Pe=!!x.specularIntensityMap,Ve=V&&!!x.transmissionMap,Qe=V&&!!x.thicknessMap,O=!!x.gradientMap,ie=!!x.alphaMap,Y=x.alphaTest>0,ge=!!x.alphaHash,le=!!x.extensions,j=Gn;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(j=t.toneMapping);let be={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:et,fragmentShader:De,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ne,batchingColor:Ne&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:vt,matcap:qe,envMap:rt,envMapMode:rt&&$.mapping,envMapCubeUVHeight:q,aoMap:mt,lightMap:Xe,bumpMap:Pt,normalMap:yt,displacementMap:cn,emissiveMap:B,normalMapObjectSpace:yt&&x.normalMapType===lm,normalMapTangentSpace:yt&&x.normalMapType===Vh,packedNormalMap:yt&&x.normalMapType===Vh&&jE(x.normalMap.format),metalnessMap:Lt,roughnessMap:Ye,anisotropy:ft,anisotropyMap:Z,clearcoat:he,clearcoatMap:Q,clearcoatNormalMap:te,clearcoatRoughnessMap:ce,dispersion:bt,iridescence:C,iridescenceMap:X,iridescenceThicknessMap:K,sheen:v,sheenColorMap:me,sheenRoughnessMap:ve,specularMap:ae,specularColorMap:ne,specularIntensityMap:Pe,transmission:V,transmissionMap:Ve,thicknessMap:Qe,gradientMap:O,opaque:x.transparent===!1&&x.blending===gr&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:Y,alphaHash:ge,combine:x.combine,mapUv:vt&&g(x.map.channel),aoMapUv:mt&&g(x.aoMap.channel),lightMapUv:Xe&&g(x.lightMap.channel),bumpMapUv:Pt&&g(x.bumpMap.channel),normalMapUv:yt&&g(x.normalMap.channel),displacementMapUv:cn&&g(x.displacementMap.channel),emissiveMapUv:B&&g(x.emissiveMap.channel),metalnessMapUv:Lt&&g(x.metalnessMap.channel),roughnessMapUv:Ye&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:Q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(x.sheenRoughnessMap.channel),specularMapUv:ae&&g(x.specularMap.channel),specularColorMapUv:ne&&g(x.specularColorMap.channel),specularIntensityMapUv:Pe&&g(x.specularIntensityMap.channel),transmissionMapUv:Ve&&g(x.transmissionMap.channel),thicknessMapUv:Qe&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(yt||ft),vertexNormals:!!T.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!T.attributes.uv&&(vt||ie),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||T.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ie,skinning:D.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:He,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:j,decodeVideoTexture:vt&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:B&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tn,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:le&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&x.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)A.push(N),A.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(p(A,x),y(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function y(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function M(x){let A=f[x.type],N;if(A){let I=ci[A];N=ym.clone(I.uniforms)}else N=x.uniforms;return N}function E(x,A){let N=h.get(A);return N!==void 0?++N.usedTimes:(N=new KE(t,A,x,r),c.push(N),h.set(A,N)),N}function R(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:E,releaseProgram:R,releaseShaderCache:S,programs:c,dispose:w}}function e1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function t1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Vm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hm(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,_,m,p){let y=t[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},t[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=o(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=m,y.group=p),e++,y}function l(u,f,g,_,m,p){let y=a(u,f,g,_,m,p);g.transmission>0?i.push(y):g.transparent===!0?r.push(y):n.push(y)}function c(u,f,g,_,m,p){let y=a(u,f,g,_,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?r.unshift(y):n.unshift(y)}function h(u,f){n.length>1&&n.sort(u||t1),i.length>1&&i.sort(f||Vm),r.length>1&&r.sort(f||Vm)}function d(){for(let u=e,f=t.length;u<f;u++){let g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:h}}function n1(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new Hm,t.set(i,[o])):r>=s.length?(o=new Hm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function i1(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new ze};break;case"SpotLight":n={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function r1(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var s1=0;function o1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function a1(t){let e=new i1,n=r1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let r=new P,s=new at,o=new at;function a(c){let h=0,d=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,M=0,E=0,R=0,S=0,w=0;c.sort(o1);for(let A=0,N=c.length;A<N;A++){let I=c[A],D=I.color,k=I.intensity,H=I.distance,T=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ki?T=I.shadow.map.texture:T=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=D.r*k,d+=D.g*k,u+=D.b*k;else if(I.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(I.sh.coefficients[F],k);w++}else if(I.isDirectionalLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let L=I.shadow,$=n.get(I);$.shadowIntensity=L.intensity,$.shadowBias=L.bias,$.shadowNormalBias=L.normalBias,$.shadowRadius=L.radius,$.shadowMapSize=L.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=T,i.directionalShadowMatrix[f]=I.shadow.matrix,y++}i.directional[f]=F,f++}else if(I.isSpotLight){let F=e.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(D).multiplyScalar(k),F.distance=H,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,i.spot[_]=F;let L=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,L.updateMatrices(I),I.castShadow&&S++),i.spotLightMatrix[_]=L.matrix,I.castShadow){let $=n.get(I);$.shadowIntensity=L.intensity,$.shadowBias=L.bias,$.shadowNormalBias=L.normalBias,$.shadowRadius=L.radius,$.shadowMapSize=L.mapSize,i.spotShadow[_]=$,i.spotShadowMap[_]=T,E++}_++}else if(I.isRectAreaLight){let F=e.get(I);F.color.copy(D).multiplyScalar(k),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=F,m++}else if(I.isPointLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){let L=I.shadow,$=n.get(I);$.shadowIntensity=L.intensity,$.shadowBias=L.bias,$.shadowNormalBias=L.normalBias,$.shadowRadius=L.radius,$.shadowMapSize=L.mapSize,$.shadowCameraNear=L.camera.near,$.shadowCameraFar=L.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=T,i.pointShadowMatrix[g]=I.shadow.matrix,M++}i.point[g]=F,g++}else if(I.isHemisphereLight){let F=e.get(I);F.skyColor.copy(I.color).multiplyScalar(k),F.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[p]=F,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==M||x.numSpotShadows!==E||x.numSpotMaps!==R||x.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+R-S,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=w,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=M,x.numSpotShadows=E,x.numSpotMaps=R,x.numLightProbes=w,i.version=s1++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let M=c[p];if(M.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(M.isSpotLight){let E=i.spot[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let E=i.point[u];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){let E=i.hemi[_];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function zm(t){let e=new a1(t),n=[],i=[],r=[];function s(u){d.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function l1(t){let e=new WeakMap;function n(r,s=0){let o=e.get(r),a;return o===void 0?(a=new zm(t),e.set(r,[a])):s>=o.length?(a=new zm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
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
}`,h1=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],d1=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Gm=new at,Wo=new P,ed=new P;function f1(t,e,n){let i=new ds,r=new we,s=new we,o=new St,a=new Cl,l=new wl,c={},h=n.maxTextureSize,d={[bi]:jt,[jt]:bi,[Tn]:Tn},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:c1,fragmentShader:u1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new It;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Xt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo;let p=this.type;this.render=function(S,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===kp&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lo);let A=t.getRenderTarget(),N=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),D=t.state;D.setBlending(oi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=p!==this.type;k&&w.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(T=>T.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,T=S.length;H<T;H++){let F=S[H],L=F.shadow;if(L===void 0){Ce("WebGLShadowMap:",F,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);let $=L.getFrameExtents();r.multiply($),s.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,L.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,L.mapSize.y=s.y));let q=t.state.buffers.depth.getReversed();if(L.camera._reversedDepth=q,L.map===null||k===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===vs){if(F.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new pn(r.x,r.y,{format:Ki,type:ai,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),L.map.texture.name=F.name+".shadowMap",L.map.depthTexture=new Ai(r.x,r.y,An),L.map.depthTexture.name=F.name+".shadowMapDepth",L.map.depthTexture.format=ii,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=kt,L.map.depthTexture.magFilter=kt}else F.isPointLight?(L.map=new Pc(r.x),L.map.depthTexture=new El(r.x,Wn)):(L.map=new pn(r.x,r.y),L.map.depthTexture=new Ai(r.x,r.y,Wn)),L.map.depthTexture.name=F.name+".shadowMap",L.map.depthTexture.format=ii,this.type===Lo?(L.map.depthTexture.compareFunction=q?wc:Cc,L.map.depthTexture.minFilter=Vt,L.map.depthTexture.magFilter=Vt):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=kt,L.map.depthTexture.magFilter=kt);L.camera.updateProjectionMatrix()}let ee=L.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<ee;se++){if(L.map.isWebGLCubeRenderTarget)t.setRenderTarget(L.map,se),t.clear();else{se===0&&(t.setRenderTarget(L.map),t.clear());let xe=L.getViewport(se);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),D.viewport(o)}if(F.isPointLight){let xe=L.camera,He=L.matrix,et=F.distance||xe.far;et!==xe.far&&(xe.far=et,xe.updateProjectionMatrix()),Wo.setFromMatrixPosition(F.matrixWorld),xe.position.copy(Wo),ed.copy(xe.position),ed.add(h1[se]),xe.up.copy(d1[se]),xe.lookAt(ed),xe.updateMatrixWorld(),He.makeTranslation(-Wo.x,-Wo.y,-Wo.z),Gm.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),L._frustum.setFromProjectionMatrix(Gm,xe.coordinateSystem,xe.reversedDepth)}else L.updateMatrices(F);i=L.getFrustum(),E(w,x,L.camera,F,this.type)}L.isPointLightShadow!==!0&&this.type===vs&&y(L,x),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(A,N,I)};function y(S,w){let x=e.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new pn(r.x,r.y,{format:Ki,type:ai})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(w,null,x,u,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(w,null,x,f,_,null)}function M(S,w,x,A){let N=null,I=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)N=I;else if(N=x.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=N.uuid,k=w.uuid,H=c[D];H===void 0&&(H={},c[D]=H);let T=H[k];T===void 0&&(T=N.clone(),H[k]=T,w.addEventListener("dispose",R)),N=T}if(N.visible=w.visible,N.wireframe=w.wireframe,A===vs?N.side=w.shadowSide!==null?w.shadowSide:w.side:N.side=w.shadowSide!==null?w.shadowSide:d[w.side],N.alphaMap=w.alphaMap,N.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,N.map=w.map,N.clipShadows=w.clipShadows,N.clippingPlanes=w.clippingPlanes,N.clipIntersection=w.clipIntersection,N.displacementMap=w.displacementMap,N.displacementScale=w.displacementScale,N.displacementBias=w.displacementBias,N.wireframeLinewidth=w.wireframeLinewidth,N.linewidth=w.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let D=t.properties.get(N);D.light=x}return N}function E(S,w,x,A,N){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===vs)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let k=e.update(S),H=S.material;if(Array.isArray(H)){let T=k.groups;for(let F=0,L=T.length;F<L;F++){let $=T[F],q=H[$.materialIndex];if(q&&q.visible){let ee=M(S,q,A,N);S.onBeforeShadow(t,S,w,x,k,ee,$),t.renderBufferDirect(x,null,k,ee,S,$),S.onAfterShadow(t,S,w,x,k,ee,$)}}}else if(H.visible){let T=M(S,H,A,N);S.onBeforeShadow(t,S,w,x,k,T,null),t.renderBufferDirect(x,null,k,T,S,null),S.onAfterShadow(t,S,w,x,k,T,null)}}let D=S.children;for(let k=0,H=D.length;k<H;k++)E(D[k],w,x,A,N)}function R(S){S.target.removeEventListener("dispose",R);for(let x in c){let A=c[x],N=S.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function p1(t,e){function n(){let O=!1,ie=new St,Y=null,ge=new St(0,0,0,0);return{setMask:function(le){Y!==le&&!O&&(t.colorMask(le,le,le,le),Y=le)},setLocked:function(le){O=le},setClear:function(le,j,be,Ue,Tt){Tt===!0&&(le*=Ue,j*=Ue,be*=Ue),ie.set(le,j,be,Ue),ge.equals(ie)===!1&&(t.clearColor(le,j,be,Ue),ge.copy(ie))},reset:function(){O=!1,Y=null,ge.set(-1,0,0,0)}}}function i(){let O=!1,ie=!1,Y=null,ge=null,le=null;return{setReversed:function(j){if(ie!==j){let be=e.get("EXT_clip_control");j?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ie=j;let Ue=le;le=null,this.setClear(Ue)}},getReversed:function(){return ie},setTest:function(j){j?oe(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(j){Y!==j&&!O&&(t.depthMask(j),Y=j)},setFunc:function(j){if(ie&&(j=_m[j]),ge!==j){switch(j){case al:t.depthFunc(t.NEVER);break;case ll:t.depthFunc(t.ALWAYS);break;case cl:t.depthFunc(t.LESS);break;case xr:t.depthFunc(t.LEQUAL);break;case ul:t.depthFunc(t.EQUAL);break;case hl:t.depthFunc(t.GEQUAL);break;case dl:t.depthFunc(t.GREATER);break;case fl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=j}},setLocked:function(j){O=j},setClear:function(j){le!==j&&(le=j,ie&&(j=1-j),t.clearDepth(j))},reset:function(){O=!1,Y=null,ge=null,le=null,ie=!1}}}function r(){let O=!1,ie=null,Y=null,ge=null,le=null,j=null,be=null,Ue=null,Tt=null;return{setTest:function(st){O||(st?oe(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(st){ie!==st&&!O&&(t.stencilMask(st),ie=st)},setFunc:function(st,gi,jn){(Y!==st||ge!==gi||le!==jn)&&(t.stencilFunc(st,gi,jn),Y=st,ge=gi,le=jn)},setOp:function(st,gi,jn){(j!==st||be!==gi||Ue!==jn)&&(t.stencilOp(st,gi,jn),j=st,be=gi,Ue=jn)},setLocked:function(st){O=st},setClear:function(st){Tt!==st&&(t.clearStencil(st),Tt=st)},reset:function(){O=!1,ie=null,Y=null,ge=null,le=null,j=null,be=null,Ue=null,Tt=null}}}let s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,M=null,E=null,R=null,S=null,w=null,x=new ze(0,0,0),A=0,N=!1,I=null,D=null,k=null,H=null,T=null,F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,$=0,q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),L=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),L=$>=2);let ee=null,se={},xe=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),et=new St().fromArray(xe),De=new St().fromArray(He);function J(O,ie,Y,ge){let le=new Uint8Array(4),j=t.createTexture();t.bindTexture(O,j),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<Y;be++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(ie+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return j}let ue={};ue[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(xr),Pt(!1),yt(Mh),oe(t.CULL_FACE),mt(oi);function oe(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function Ie(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function Oe(O,ie){return u[O]!==ie?(t.bindFramebuffer(O,ie),u[O]=ie,O===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ie),O===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ne(O,ie){let Y=g,ge=!1;if(O){Y=f.get(ie),Y===void 0&&(Y=[],f.set(ie,Y));let le=O.textures;if(Y.length!==le.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let j=0,be=le.length;j<be;j++)Y[j]=t.COLOR_ATTACHMENT0+j;Y.length=le.length,ge=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,ge=!0);ge&&t.drawBuffers(Y)}function vt(O){return _!==O?(t.useProgram(O),_=O,!0):!1}let qe={[Hi]:t.FUNC_ADD,[Hp]:t.FUNC_SUBTRACT,[zp]:t.FUNC_REVERSE_SUBTRACT};qe[Gp]=t.MIN,qe[Wp]=t.MAX;let rt={[$p]:t.ZERO,[Xp]:t.ONE,[qp]:t.SRC_COLOR,[sl]:t.SRC_ALPHA,[Qp]:t.SRC_ALPHA_SATURATE,[Jp]:t.DST_COLOR,[Zp]:t.DST_ALPHA,[Yp]:t.ONE_MINUS_SRC_COLOR,[ol]:t.ONE_MINUS_SRC_ALPHA,[jp]:t.ONE_MINUS_DST_COLOR,[Kp]:t.ONE_MINUS_DST_ALPHA,[em]:t.CONSTANT_COLOR,[tm]:t.ONE_MINUS_CONSTANT_COLOR,[nm]:t.CONSTANT_ALPHA,[im]:t.ONE_MINUS_CONSTANT_ALPHA};function mt(O,ie,Y,ge,le,j,be,Ue,Tt,st){if(O===oi){m===!0&&(Ie(t.BLEND),m=!1);return}if(m===!1&&(oe(t.BLEND),m=!0),O!==Vp){if(O!==p||st!==N){if((y!==Hi||R!==Hi)&&(t.blendEquation(t.FUNC_ADD),y=Hi,R=Hi),st)switch(O){case gr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fo:t.blendFunc(t.ONE,t.ONE);break;case bh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Eh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Re("WebGLState: Invalid blending: ",O);break}else switch(O){case gr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case bh:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eh:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",O);break}M=null,E=null,S=null,w=null,x.set(0,0,0),A=0,p=O,N=st}return}le=le||ie,j=j||Y,be=be||ge,(ie!==y||le!==R)&&(t.blendEquationSeparate(qe[ie],qe[le]),y=ie,R=le),(Y!==M||ge!==E||j!==S||be!==w)&&(t.blendFuncSeparate(rt[Y],rt[ge],rt[j],rt[be]),M=Y,E=ge,S=j,w=be),(Ue.equals(x)===!1||Tt!==A)&&(t.blendColor(Ue.r,Ue.g,Ue.b,Tt),x.copy(Ue),A=Tt),p=O,N=!1}function Xe(O,ie){O.side===Tn?Ie(t.CULL_FACE):oe(t.CULL_FACE);let Y=O.side===jt;ie&&(Y=!Y),Pt(Y),O.blending===gr&&O.transparent===!1?mt(oi):mt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let ge=O.stencilWrite;a.setTest(ge),ge&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),B(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(O){I!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),I=O)}function yt(O){O!==Bp?(oe(t.CULL_FACE),O!==D&&(O===Mh?t.cullFace(t.BACK):O===Up?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),D=O}function cn(O){O!==k&&(L&&t.lineWidth(O),k=O)}function B(O,ie,Y){O?(oe(t.POLYGON_OFFSET_FILL),(H!==ie||T!==Y)&&(H=ie,T=Y,o.getReversed()&&(ie=-ie),t.polygonOffset(ie,Y))):Ie(t.POLYGON_OFFSET_FILL)}function Lt(O){O?oe(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function Ye(O){O===void 0&&(O=t.TEXTURE0+F-1),ee!==O&&(t.activeTexture(O),ee=O)}function ft(O,ie,Y){Y===void 0&&(ee===null?Y=t.TEXTURE0+F-1:Y=ee);let ge=se[Y];ge===void 0&&(ge={type:void 0,texture:void 0},se[Y]=ge),(ge.type!==O||ge.texture!==ie)&&(ee!==Y&&(t.activeTexture(Y),ee=Y),t.bindTexture(O,ie||ue[O]),ge.type=O,ge.texture=ie)}function he(){let O=se[ee];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function bt(){try{t.compressedTexImage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function v(){try{t.texSubImage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function V(){try{t.texSubImage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function te(){try{t.texStorage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function ce(){try{t.texStorage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function X(){try{t.texImage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function K(){try{t.texImage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function me(O){return d[O]!==void 0?d[O]:t.getParameter(O)}function ve(O,ie){d[O]!==ie&&(t.pixelStorei(O,ie),d[O]=ie)}function ae(O){et.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),et.copy(O))}function ne(O){De.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),De.copy(O))}function Pe(O,ie){let Y=c.get(ie);Y===void 0&&(Y=new WeakMap,c.set(ie,Y));let ge=Y.get(O);ge===void 0&&(ge=t.getUniformBlockIndex(ie,O.name),Y.set(O,ge))}function Ve(O,ie){let ge=c.get(ie).get(O);l.get(ie)!==ge&&(t.uniformBlockBinding(ie,ge,O.__bindingPointIndex),l.set(ie,ge))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},ee=null,se={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,M=null,E=null,R=null,S=null,w=null,x=new ze(0,0,0),A=0,N=!1,I=null,D=null,k=null,H=null,T=null,et.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Ie,bindFramebuffer:Oe,drawBuffers:Ne,useProgram:vt,setBlending:mt,setMaterial:Xe,setFlipSided:Pt,setCullFace:yt,setLineWidth:cn,setPolygonOffset:B,setScissorTest:Lt,activeTexture:Ye,bindTexture:ft,unbindTexture:he,compressedTexImage2D:bt,compressedTexImage3D:C,texImage2D:X,texImage3D:K,pixelStorei:ve,getParameter:me,updateUBOMapping:Pe,uniformBlockBinding:Ve,texStorage2D:te,texStorage3D:ce,texSubImage2D:v,texSubImage3D:V,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:ae,viewport:ne,reset:Qe}}function m1(t,e,n,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return g?new OffscreenCanvas(C,v):uo("canvas")}function m(C,v,V){let Z=1,Q=bt(C);if((Q.width>V||Q.height>V)&&(Z=V/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let te=Math.floor(Z*Q.width),ce=Math.floor(Z*Q.height);u===void 0&&(u=_(te,ce));let X=v?_(te,ce):u;return X.width=te,X.height=ce,X.getContext("2d").drawImage(C,0,0,te,ce),Ce("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+te+"x"+ce+")."),X}else return"data"in C&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function y(C){t.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(C,v,V,Z,Q,te=!1){if(C!==null){if(t[C]!==void 0)return t[C];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce;Z&&(ce=e.get("EXT_texture_norm16"),ce||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=v;if(v===t.RED&&(V===t.FLOAT&&(X=t.R32F),V===t.HALF_FLOAT&&(X=t.R16F),V===t.UNSIGNED_BYTE&&(X=t.R8),V===t.UNSIGNED_SHORT&&ce&&(X=ce.R16_EXT),V===t.SHORT&&ce&&(X=ce.R16_SNORM_EXT)),v===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(X=t.R8UI),V===t.UNSIGNED_SHORT&&(X=t.R16UI),V===t.UNSIGNED_INT&&(X=t.R32UI),V===t.BYTE&&(X=t.R8I),V===t.SHORT&&(X=t.R16I),V===t.INT&&(X=t.R32I)),v===t.RG&&(V===t.FLOAT&&(X=t.RG32F),V===t.HALF_FLOAT&&(X=t.RG16F),V===t.UNSIGNED_BYTE&&(X=t.RG8),V===t.UNSIGNED_SHORT&&ce&&(X=ce.RG16_EXT),V===t.SHORT&&ce&&(X=ce.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(X=t.RG8UI),V===t.UNSIGNED_SHORT&&(X=t.RG16UI),V===t.UNSIGNED_INT&&(X=t.RG32UI),V===t.BYTE&&(X=t.RG8I),V===t.SHORT&&(X=t.RG16I),V===t.INT&&(X=t.RG32I)),v===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(X=t.RGB8UI),V===t.UNSIGNED_SHORT&&(X=t.RGB16UI),V===t.UNSIGNED_INT&&(X=t.RGB32UI),V===t.BYTE&&(X=t.RGB8I),V===t.SHORT&&(X=t.RGB16I),V===t.INT&&(X=t.RGB32I)),v===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),V===t.UNSIGNED_INT&&(X=t.RGBA32UI),V===t.BYTE&&(X=t.RGBA8I),V===t.SHORT&&(X=t.RGBA16I),V===t.INT&&(X=t.RGBA32I)),v===t.RGB&&(V===t.UNSIGNED_SHORT&&ce&&(X=ce.RGB16_EXT),V===t.SHORT&&ce&&(X=ce.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),v===t.RGBA){let K=te?co:Ze.getTransfer(Q);V===t.FLOAT&&(X=t.RGBA32F),V===t.HALF_FLOAT&&(X=t.RGBA16F),V===t.UNSIGNED_BYTE&&(X=K===tt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&ce&&(X=ce.RGBA16_EXT),V===t.SHORT&&ce&&(X=ce.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function R(C,v){let V;return C?v===null||v===Wn||v===Ss?V=t.DEPTH24_STENCIL8:v===An?V=t.DEPTH32F_STENCIL8:v===ys&&(V=t.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wn||v===Ss?V=t.DEPTH_COMPONENT24:v===An?V=t.DEPTH_COMPONENT32F:v===ys&&(V=t.DEPTH_COMPONENT16),V}function S(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==kt&&C.minFilter!==Vt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){let v=C.target;v.removeEventListener("dispose",w),A(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(C){let v=C.target;v.removeEventListener("dispose",x),I(v)}function A(C){let v=i.get(C);if(v.__webglInit===void 0)return;let V=C.source,Z=f.get(V);if(Z){let Q=Z[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(C),Object.keys(Z).length===0&&f.delete(V)}i.remove(C)}function N(C){let v=i.get(C);t.deleteTexture(v.__webglTexture);let V=C.source,Z=f.get(V);delete Z[v.__cacheKey],o.memory.textures--}function I(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let Q=0;Q<v.__webglFramebuffer[Z].length;Q++)t.deleteFramebuffer(v.__webglFramebuffer[Z][Q]);else t.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)t.deleteFramebuffer(v.__webglFramebuffer[Z]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=C.textures;for(let Z=0,Q=V.length;Z<Q;Z++){let te=i.get(V[Z]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(V[Z])}i.remove(C)}let D=0;function k(){D=0}function H(){return D}function T(C){D=C}function F(){let C=D;return C>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),D+=1,C}function L(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function $(C,v){let V=i.get(C);if(C.isVideoTexture&&ft(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let Z=C.image;if(Z===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(V,C,v);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+v)}function q(C,v){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ie(V,C,v);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+v)}function ee(C,v){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ie(V,C,v);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+v)}function se(C,v){let V=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){Oe(V,C,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+v)}let xe={[pl]:t.REPEAT,[ti]:t.CLAMP_TO_EDGE,[ml]:t.MIRRORED_REPEAT},He={[kt]:t.NEAREST,[om]:t.NEAREST_MIPMAP_NEAREST,[Oo]:t.NEAREST_MIPMAP_LINEAR,[Vt]:t.LINEAR,[Gl]:t.LINEAR_MIPMAP_NEAREST,[Yi]:t.LINEAR_MIPMAP_LINEAR},et={[cm]:t.NEVER,[pm]:t.ALWAYS,[um]:t.LESS,[Cc]:t.LEQUAL,[hm]:t.EQUAL,[wc]:t.GEQUAL,[dm]:t.GREATER,[fm]:t.NOTEQUAL};function De(C,v){if(v.type===An&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Vt||v.magFilter===Gl||v.magFilter===Oo||v.magFilter===Yi||v.minFilter===Vt||v.minFilter===Gl||v.minFilter===Oo||v.minFilter===Yi)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,xe[v.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,xe[v.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,xe[v.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,He[v.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,He[v.minFilter]),v.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,et[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===kt||v.minFilter!==Oo&&v.minFilter!==Yi||v.type===An&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function J(C,v){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));let Z=v.source,Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));let te=L(v);if(te!==C.__cacheKey){Q[te]===void 0&&(Q[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[te].usedTimes++;let ce=Q[C.__cacheKey];ce!==void 0&&(Q[C.__cacheKey].usedTimes--,ce.usedTimes===0&&N(v)),C.__cacheKey=te,C.__webglTexture=Q[te].texture}return V}function ue(C,v,V){return Math.floor(Math.floor(C/V)/v)}function oe(C,v,V,Z){let te=C.updateRanges;if(te.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,V,Z,v.data);else{te.sort((ve,ae)=>ve.start-ae.start);let ce=0;for(let ve=1;ve<te.length;ve++){let ae=te[ce],ne=te[ve],Pe=ae.start+ae.count,Ve=ue(ne.start,v.width,4),Qe=ue(ae.start,v.width,4);ne.start<=Pe+1&&Ve===Qe&&ue(ne.start+ne.count-1,v.width,4)===Ve?ae.count=Math.max(ae.count,ne.start+ne.count-ae.start):(++ce,te[ce]=ne)}te.length=ce+1;let X=n.getParameter(t.UNPACK_ROW_LENGTH),K=n.getParameter(t.UNPACK_SKIP_PIXELS),me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let ve=0,ae=te.length;ve<ae;ve++){let ne=te[ve],Pe=Math.floor(ne.start/4),Ve=Math.ceil(ne.count/4),Qe=Pe%v.width,O=Math.floor(Pe/v.width),ie=Ve,Y=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Qe,O,ie,Y,V,Z,v.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,X),n.pixelStorei(t.UNPACK_SKIP_PIXELS,K),n.pixelStorei(t.UNPACK_SKIP_ROWS,me)}}function Ie(C,v,V){let Z=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=t.TEXTURE_3D);let Q=J(C,v),te=v.source;n.bindTexture(Z,C.__webglTexture,t.TEXTURE0+V);let ce=i.get(te);if(te.version!==ce.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Y=Ze.getPrimaries(Ze.workingColorSpace),ge=v.colorSpace===Ci?null:Ze.getPrimaries(v.colorSpace),le=v.colorSpace===Ci||Y===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let K=m(v.image,!1,r.maxTextureSize);K=he(v,K);let me=s.convert(v.format,v.colorSpace),ve=s.convert(v.type),ae=E(v.internalFormat,me,ve,v.normalized,v.colorSpace,v.isVideoTexture);De(Z,v);let ne,Pe=v.mipmaps,Ve=v.isVideoTexture!==!0,Qe=ce.__version===void 0||Q===!0,O=te.dataReady,ie=S(v,K);if(v.isDepthTexture)ae=R(v.format===Zi,v.type),Qe&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,ae,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,ae,K.width,K.height,0,me,ve,null));else if(v.isDataTexture)if(Pe.length>0){Ve&&Qe&&n.texStorage2D(t.TEXTURE_2D,ie,ae,Pe[0].width,Pe[0].height);for(let Y=0,ge=Pe.length;Y<ge;Y++)ne=Pe[Y],Ve?O&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ne.width,ne.height,me,ve,ne.data):n.texImage2D(t.TEXTURE_2D,Y,ae,ne.width,ne.height,0,me,ve,ne.data);v.generateMipmaps=!1}else Ve?(Qe&&n.texStorage2D(t.TEXTURE_2D,ie,ae,K.width,K.height),O&&oe(v,K,me,ve)):n.texImage2D(t.TEXTURE_2D,0,ae,K.width,K.height,0,me,ve,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,ae,Pe[0].width,Pe[0].height,K.depth);for(let Y=0,ge=Pe.length;Y<ge;Y++)if(ne=Pe[Y],v.format!==Cn)if(me!==null)if(Ve){if(O)if(v.layerUpdates.size>0){let le=Yh(ne.width,ne.height,v.format,v.type);for(let j of v.layerUpdates){let be=ne.data.subarray(j*le/ne.data.BYTES_PER_ELEMENT,(j+1)*le/ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,j,ne.width,ne.height,1,me,be)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ne.width,ne.height,K.depth,me,ne.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,ae,ne.width,ne.height,K.depth,0,ne.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ne.width,ne.height,K.depth,me,ve,ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,ae,ne.width,ne.height,K.depth,0,me,ve,ne.data)}else{Ve&&Qe&&n.texStorage2D(t.TEXTURE_2D,ie,ae,Pe[0].width,Pe[0].height);for(let Y=0,ge=Pe.length;Y<ge;Y++)ne=Pe[Y],v.format!==Cn?me!==null?Ve?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,ne.width,ne.height,me,ne.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,ae,ne.width,ne.height,0,ne.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?O&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ne.width,ne.height,me,ve,ne.data):n.texImage2D(t.TEXTURE_2D,Y,ae,ne.width,ne.height,0,me,ve,ne.data)}else if(v.isDataArrayTexture)if(Ve){if(Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,ae,K.width,K.height,K.depth),O)if(v.layerUpdates.size>0){let Y=Yh(K.width,K.height,v.format,v.type);for(let ge of v.layerUpdates){let le=K.data.subarray(ge*Y/K.data.BYTES_PER_ELEMENT,(ge+1)*Y/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ge,K.width,K.height,1,me,ve,le)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,me,ve,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ae,K.width,K.height,K.depth,0,me,ve,K.data);else if(v.isData3DTexture)Ve?(Qe&&n.texStorage3D(t.TEXTURE_3D,ie,ae,K.width,K.height,K.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,me,ve,K.data)):n.texImage3D(t.TEXTURE_3D,0,ae,K.width,K.height,K.depth,0,me,ve,K.data);else if(v.isFramebufferTexture){if(Qe)if(Ve)n.texStorage2D(t.TEXTURE_2D,ie,ae,K.width,K.height);else{let Y=K.width,ge=K.height;for(let le=0;le<ie;le++)n.texImage2D(t.TEXTURE_2D,le,ae,Y,ge,0,me,ve,null),Y>>=1,ge>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){let Y=t.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),K.parentNode!==Y){Y.appendChild(K),d.add(v),Y.onpaint=Ue=>{let Tt=Ue.changedElements;for(let st of d)Tt.includes(st.image)&&(st.needsUpdate=!0)},Y.requestPaint();return}let ge=0,le=t.RGBA,j=t.RGBA,be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,ge,le,j,be,K),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ve&&Qe){let Y=bt(Pe[0]);n.texStorage2D(t.TEXTURE_2D,ie,ae,Y.width,Y.height)}for(let Y=0,ge=Pe.length;Y<ge;Y++)ne=Pe[Y],Ve?O&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,me,ve,ne):n.texImage2D(t.TEXTURE_2D,Y,ae,me,ve,ne);v.generateMipmaps=!1}else if(Ve){if(Qe){let Y=bt(K);n.texStorage2D(t.TEXTURE_2D,ie,ae,Y.width,Y.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,ve,K)}else n.texImage2D(t.TEXTURE_2D,0,ae,me,ve,K);p(v)&&y(Z),ce.__version=te.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Oe(C,v,V){if(v.image.length!==6)return;let Z=J(C,v),Q=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);let te=i.get(Q);if(Q.version!==te.__version||Z===!0){n.activeTexture(t.TEXTURE0+V);let ce=Ze.getPrimaries(Ze.workingColorSpace),X=v.colorSpace===Ci?null:Ze.getPrimaries(v.colorSpace),K=v.colorSpace===Ci||ce===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let me=v.isCompressedTexture||v.image[0].isCompressedTexture,ve=v.image[0]&&v.image[0].isDataTexture,ae=[];for(let j=0;j<6;j++)!me&&!ve?ae[j]=m(v.image[j],!0,r.maxCubemapSize):ae[j]=ve?v.image[j].image:v.image[j],ae[j]=he(v,ae[j]);let ne=ae[0],Pe=s.convert(v.format,v.colorSpace),Ve=s.convert(v.type),Qe=E(v.internalFormat,Pe,Ve,v.normalized,v.colorSpace),O=v.isVideoTexture!==!0,ie=te.__version===void 0||Z===!0,Y=Q.dataReady,ge=S(v,ne);De(t.TEXTURE_CUBE_MAP,v);let le;if(me){O&&ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Qe,ne.width,ne.height);for(let j=0;j<6;j++){le=ae[j].mipmaps;for(let be=0;be<le.length;be++){let Ue=le[be];v.format!==Cn?Pe!==null?O?Y&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,Ue.width,Ue.height,Pe,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,Qe,Ue.width,Ue.height,0,Ue.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,Ue.width,Ue.height,Pe,Ve,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,Qe,Ue.width,Ue.height,0,Pe,Ve,Ue.data)}}}else{if(le=v.mipmaps,O&&ie){le.length>0&&ge++;let j=bt(ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Qe,j.width,j.height)}for(let j=0;j<6;j++)if(ve){O?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ae[j].width,ae[j].height,Pe,Ve,ae[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Qe,ae[j].width,ae[j].height,0,Pe,Ve,ae[j].data);for(let be=0;be<le.length;be++){let Tt=le[be].image[j].image;O?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,Tt.width,Tt.height,Pe,Ve,Tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,Qe,Tt.width,Tt.height,0,Pe,Ve,Tt.data)}}else{O?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pe,Ve,ae[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Qe,Pe,Ve,ae[j]);for(let be=0;be<le.length;be++){let Ue=le[be];O?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,Pe,Ve,Ue.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,Qe,Pe,Ve,Ue.image[j])}}}p(v)&&y(t.TEXTURE_CUBE_MAP),te.__version=Q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ne(C,v,V,Z,Q,te){let ce=s.convert(V.format,V.colorSpace),X=s.convert(V.type),K=E(V.internalFormat,ce,X,V.normalized,V.colorSpace),me=i.get(v),ve=i.get(V);if(ve.__renderTarget=v,!me.__hasExternalTextures){let ae=Math.max(1,v.width>>te),ne=Math.max(1,v.height>>te);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,te,K,ae,ne,v.depth,0,ce,X,null):n.texImage2D(Q,te,K,ae,ne,0,ce,X,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ye(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,Q,ve.__webglTexture,0,Lt(v)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,Q,ve.__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function vt(C,v,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),v.depthBuffer){let Z=v.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,te=R(v.stencilBuffer,Q),ce=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ye(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Lt(v),te,v.width,v.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Lt(v),te,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,te,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,C)}else{let Z=v.textures;for(let Q=0;Q<Z.length;Q++){let te=Z[Q],ce=s.convert(te.format,te.colorSpace),X=s.convert(te.type),K=E(te.internalFormat,ce,X,te.normalized,te.colorSpace);Ye(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Lt(v),K,v.width,v.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Lt(v),K,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,K,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(C,v,V){let Z=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),De(t.TEXTURE_CUBE_MAP,v.depthTexture);let me=s.convert(v.depthTexture.format),ve=s.convert(v.depthTexture.type),ae;v.depthTexture.format===ii?ae=t.DEPTH_COMPONENT24:v.depthTexture.format===Zi&&(ae=t.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ae,v.width,v.height,0,me,ve,null)}}else $(v.depthTexture,0);let te=Q.__webglTexture,ce=Lt(v),X=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,K=v.depthTexture.format===Zi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===ii)Ye(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,X,te,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,K,X,te,0);else if(v.depthTexture.format===Zi)Ye(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,X,te,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,K,X,te,0);else throw new Error("Unknown depthTexture format")}function rt(C){let v=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Z}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(V)for(let Z=0;Z<6;Z++)qe(v.__webglFramebuffer[Z],C,Z);else{let Z=C.texture.mipmaps;Z&&Z.length>0?qe(v.__webglFramebuffer[0],C,0):qe(v.__webglFramebuffer,C,0)}else if(V){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=t.createRenderbuffer(),vt(v.__webglDepthbuffer[Z],C,!1);else{let Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,te)}}else{let Z=C.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),vt(v.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,te)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function mt(C,v,V){let Z=i.get(C);v!==void 0&&Ne(Z.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&rt(C)}function Xe(C){let v=C.texture,V=i.get(C),Z=i.get(v);C.addEventListener("dispose",x);let Q=C.textures,te=C.isWebGLCubeRenderTarget===!0,ce=Q.length>1;if(ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=v.version,o.memory.textures++),te){V.__webglFramebuffer=[];for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[X]=[];for(let K=0;K<v.mipmaps.length;K++)V.__webglFramebuffer[X][K]=t.createFramebuffer()}else V.__webglFramebuffer[X]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let X=0;X<v.mipmaps.length;X++)V.__webglFramebuffer[X]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(ce)for(let X=0,K=Q.length;X<K;X++){let me=i.get(Q[X]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Ye(C)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let X=0;X<Q.length;X++){let K=Q[X];V.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[X]);let me=s.convert(K.format,K.colorSpace),ve=s.convert(K.type),ae=E(K.internalFormat,me,ve,K.normalized,K.colorSpace,C.isXRRenderTarget===!0),ne=Lt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,ae,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,V.__webglColorRenderbuffer[X])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),vt(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),De(t.TEXTURE_CUBE_MAP,v);for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Ne(V.__webglFramebuffer[X][K],C,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else Ne(V.__webglFramebuffer[X],C,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(v)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let X=0,K=Q.length;X<K;X++){let me=Q[X],ve=i.get(me),ae=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,ve.__webglTexture),De(ae,me),Ne(V.__webglFramebuffer,C,me,t.COLOR_ATTACHMENT0+X,ae,0),p(me)&&y(ae)}n.unbindTexture()}else{let X=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(X=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(X,Z.__webglTexture),De(X,v),v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Ne(V.__webglFramebuffer[K],C,v,t.COLOR_ATTACHMENT0,X,K);else Ne(V.__webglFramebuffer,C,v,t.COLOR_ATTACHMENT0,X,0);p(v)&&y(X),n.unbindTexture()}C.depthBuffer&&rt(C)}function Pt(C){let v=C.textures;for(let V=0,Z=v.length;V<Z;V++){let Q=v[V];if(p(Q)){let te=M(C),ce=i.get(Q).__webglTexture;n.bindTexture(te,ce),y(te),n.unbindTexture()}}}let yt=[],cn=[];function B(C){if(C.samples>0){if(Ye(C)===!1){let v=C.textures,V=C.width,Z=C.height,Q=t.COLOR_BUFFER_BIT,te=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(C),X=v.length>1;if(X)for(let me=0;me<v.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let K=C.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let me=0;me<v.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),X){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[me]);let ve=i.get(v[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ve,0)}t.blitFramebuffer(0,0,V,Z,0,0,V,Z,Q,t.NEAREST),l===!0&&(yt.length=0,cn.length=0,yt.push(t.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(yt.push(te),cn.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,cn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let me=0;me<v.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ce.__webglColorRenderbuffer[me]);let ve=i.get(v[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let v=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function Lt(C){return Math.min(r.maxSamples,C.samples)}function Ye(C){let v=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ft(C){let v=o.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function he(C,v){let V=C.colorSpace,Z=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==lo&&V!==Ci&&(Ze.getTransfer(V)===tt?(Z!==Cn||Q!==sn)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",V)),v}function bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.getTextureUnits=H,this.setTextureUnits=T,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=se,this.rebindTextures=mt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function g1(t,e){function n(i,r=Ci){let s,o=Ze.getTransfer(r);if(i===sn)return t.UNSIGNED_BYTE;if(i===$l)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xl)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Oh)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Bh)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fh)return t.BYTE;if(i===Dh)return t.SHORT;if(i===ys)return t.UNSIGNED_SHORT;if(i===Wl)return t.INT;if(i===Wn)return t.UNSIGNED_INT;if(i===An)return t.FLOAT;if(i===ai)return t.HALF_FLOAT;if(i===Uh)return t.ALPHA;if(i===kh)return t.RGB;if(i===Cn)return t.RGBA;if(i===ii)return t.DEPTH_COMPONENT;if(i===Zi)return t.DEPTH_STENCIL;if(i===ql)return t.RED;if(i===Yl)return t.RED_INTEGER;if(i===Ki)return t.RG;if(i===Zl)return t.RG_INTEGER;if(i===Kl)return t.RGBA_INTEGER;if(i===Bo||i===Uo||i===ko||i===Vo)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jl||i===jl||i===Ql||i===ec)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ql)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tc||i===nc||i===ic||i===rc||i===sc||i===Ho||i===oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===tc||i===nc)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ic)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===rc)return s.COMPRESSED_R11_EAC;if(i===sc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ho)return s.COMPRESSED_RG11_EAC;if(i===oc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ac||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===xc||i===_c||i===vc||i===yc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ac)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_c)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sc||i===Mc||i===bc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sc)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ec||i===Tc||i===zo||i===Ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ec)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var x1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
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

}`,ld=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new So(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new mn({vertexShader:x1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xt(new Eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cd=class extends Vn{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new ld,p={},y=n.getContextAttributes(),M=null,E=null,R=[],S=[],w=new we,x=null,A=new $t;A.viewport=new St;let N=new $t;N.viewport=new St;let I=[A,N],D=new Vl,k=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=R[J];return ue===void 0&&(ue=new hs,R[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=R[J];return ue===void 0&&(ue=new hs,R[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=R[J];return ue===void 0&&(ue=new hs,R[J]=ue),ue.getHandSpace()};function T(J){let ue=S.indexOf(J.inputSource);if(ue===-1)return;let oe=R[ue];oe!==void 0&&(oe.update(J.inputSource,J.frame,c||o),oe.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",L);for(let J=0;J<R.length;J++){let ue=S[J];ue!==null&&(S[J]=null,R[J].disconnect(ue))}k=null,H=null,m.reset();for(let J in p)delete p[J];e.setRenderTarget(M),f=null,u=null,d=null,r=null,E=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",F),r.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ie=null,Oe=null;y.depth&&(Oe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=y.stencil?Zi:ii,Ie=y.stencil?Ss:Wn);let Ne={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ne),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new pn(u.textureWidth,u.textureHeight,{format:Cn,type:sn,depthTexture:new Ai(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new pn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function L(J){for(let ue=0;ue<J.removed.length;ue++){let oe=J.removed[ue],Ie=S.indexOf(oe);Ie>=0&&(S[Ie]=null,R[Ie].disconnect(oe))}for(let ue=0;ue<J.added.length;ue++){let oe=J.added[ue],Ie=S.indexOf(oe);if(Ie===-1){for(let Ne=0;Ne<R.length;Ne++)if(Ne>=S.length){S.push(oe),Ie=Ne;break}else if(S[Ne]===null){S[Ne]=oe,Ie=Ne;break}if(Ie===-1)break}let Oe=R[Ie];Oe&&Oe.connect(oe)}}let $=new P,q=new P;function ee(J,ue,oe){$.setFromMatrixPosition(ue.matrixWorld),q.setFromMatrixPosition(oe.matrixWorld);let Ie=$.distanceTo(q),Oe=ue.projectionMatrix.elements,Ne=oe.projectionMatrix.elements,vt=Oe[14]/(Oe[10]-1),qe=Oe[14]/(Oe[10]+1),rt=(Oe[9]+1)/Oe[5],mt=(Oe[9]-1)/Oe[5],Xe=(Oe[8]-1)/Oe[0],Pt=(Ne[8]+1)/Ne[0],yt=vt*Xe,cn=vt*Pt,B=Ie/(-Xe+Pt),Lt=B*-Xe;if(ue.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Lt),J.translateZ(B),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Oe[10]===-1)J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let Ye=vt+B,ft=qe+B,he=yt-Lt,bt=cn+(Ie-Lt),C=rt*qe/ft*Ye,v=mt*qe/ft*Ye;J.projectionMatrix.makePerspective(he,bt,C,v,Ye,ft),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function se(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ue=J.near,oe=J.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),D.near=N.near=A.near=ue,D.far=N.far=A.far=oe,(k!==D.near||H!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,H=D.far),D.layers.mask=J.layers.mask|6,A.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;let Ie=J.parent,Oe=D.cameras;se(D,Ie);for(let Ne=0;Ne<Oe.length;Ne++)se(Oe[Ne],Ie);Oe.length===2?ee(D,A,N):D.projectionMatrix.copy(A.projectionMatrix),xe(J,D,Ie)};function xe(J,ue,oe){oe===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(oe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ls*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(J){return p[J]};let He=null;function et(J,ue){if(h=ue.getViewerPose(c||o),g=ue,h!==null){let oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Ie=!1;oe.length!==D.cameras.length&&(D.cameras.length=0,Ie=!0);for(let qe=0;qe<oe.length;qe++){let rt=oe[qe],mt=null;if(f!==null)mt=f.getViewport(rt);else{let Pt=d.getViewSubImage(u,rt);mt=Pt.viewport,qe===0&&(e.setRenderTargetTextures(E,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(E))}let Xe=I[qe];Xe===void 0&&(Xe=new $t,Xe.layers.enable(qe),Xe.viewport=new St,I[qe]=Xe),Xe.matrix.fromArray(rt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(rt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(mt.x,mt.y,mt.width,mt.height),qe===0&&(D.matrix.copy(Xe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ie===!0&&D.cameras.push(Xe)}let Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let qe=d.getDepthInformation(oe[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,r.renderState)}if(Oe&&Oe.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let qe=0;qe<oe.length;qe++){let rt=oe[qe].camera;if(rt){let mt=p[rt];mt||(mt=new So,p[rt]=mt);let Xe=d.getCameraImage(rt);mt.sourceTexture=Xe}}}}for(let oe=0;oe<R.length;oe++){let Ie=S[oe],Oe=R[oe];Ie!==null&&Oe!==void 0&&Oe.update(Ie,ue,c||o)}He&&He(J,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}let De=new Wm;De.setAnimationLoop(et),this.setAnimationLoop=function(J){He=J},this.dispose=function(){}}},v1=new at,Km=new Le;Km.set(-1,0,0,0,1,0,0,0,1);function y1(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,$h(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,M,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),M=y.envMap,E=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(v1.makeRotationFromEuler(E)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Km),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function S1(t,e,n,i){let r={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let E=M.program;i.uniformBlockBinding(y,E)}function c(y,M){let E=r[y.id];E===void 0&&(g(y),E=h(y),r[y.id]=E,y.addEventListener("dispose",m));let R=M.program;i.updateUBOMapping(y,R);let S=e.render.frame;s[y.id]!==S&&(u(y),s[y.id]=S)}function h(y){let M=d();y.__bindingPointIndex=M;let E=t.createBuffer(),R=y.__size,S=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,E),E}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let M=r[y.id],E=y.uniforms,R=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let S=0,w=E.length;S<w;S++){let x=Array.isArray(E[S])?E[S]:[E[S]];for(let A=0,N=x.length;A<N;A++){let I=x[A];if(f(I,S,A,R)===!0){let D=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],H=0;for(let T=0;T<k.length;T++){let F=k[T],L=_(F);typeof F=="number"||typeof F=="boolean"?(I.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,D+H,I.__data)):F.isMatrix3?(I.__data[0]=F.elements[0],I.__data[1]=F.elements[1],I.__data[2]=F.elements[2],I.__data[3]=0,I.__data[4]=F.elements[3],I.__data[5]=F.elements[4],I.__data[6]=F.elements[5],I.__data[7]=0,I.__data[8]=F.elements[6],I.__data[9]=F.elements[7],I.__data[10]=F.elements[8],I.__data[11]=0):ArrayBuffer.isView(F)?I.__data.set(new F.constructor(F.buffer,F.byteOffset,I.__data.length)):(F.toArray(I.__data,H),H+=L.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(y,M,E,R){let S=y.value,w=M+"_"+E;if(R[w]===void 0)return typeof S=="number"||typeof S=="boolean"?R[w]=S:ArrayBuffer.isView(S)?R[w]=S.slice():R[w]=S.clone(),!0;{let x=R[w];if(typeof S=="number"||typeof S=="boolean"){if(x!==S)return R[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(x.equals(S)===!1)return x.copy(S),!0}}return!1}function g(y){let M=y.uniforms,E=0,R=16;for(let w=0,x=M.length;w<x;w++){let A=Array.isArray(M[w])?M[w]:[M[w]];for(let N=0,I=A.length;N<I;N++){let D=A[N],k=Array.isArray(D.value)?D.value:[D.value];for(let H=0,T=k.length;H<T;H++){let F=k[H],L=_(F),$=E%R,q=$%L.boundary,ee=$+q;E+=q,ee!==0&&R-ee<L.storage&&(E+=R-ee),D.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=L.storage}}}let S=E%R;return S>0&&(E+=R-S),y.__size=E,y.__cache={},this}function _(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){let M=y.target;M.removeEventListener("dispose",m);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}var M1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function b1(){return li===null&&(li=new go(M1,16,16,Ki,ai),li.name="DFG_LUT",li.minFilter=Vt,li.magFilter=Vt,li.wrapS=ti,li.wrapT=ti,li.generateMipmaps=!1,li.needsUpdate=!0),li}var Lc=class{constructor(e={}){let{canvas:n=mm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=sn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let _=f,m=new Set([Kl,Zl,Yl]),p=new Set([sn,Wn,ys,Ss,$l,Xl]),y=new Uint32Array(4),M=new Int32Array(4),E=new P,R=null,S=null,w=[],x=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,I=!1,D=null;this._outputColorSpace=Jt;let k=0,H=0,T=null,F=-1,L=null,$=new St,q=new St,ee=null,se=new ze(0),xe=0,He=n.width,et=n.height,De=1,J=null,ue=null,oe=new St(0,0,He,et),Ie=new St(0,0,He,et),Oe=!1,Ne=new ds,vt=!1,qe=!1,rt=new at,mt=new P,Xe=new St,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function cn(){return T===null?De:1}let B=i;function Lt(b,U){return n.getContext(b,U)}try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"184"}`),n.addEventListener("webglcontextlost",j,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Ue,!1),B===null){let U="webgl2";if(B=Lt(U,b),B===null)throw Lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Re("WebGLRenderer: "+b.message),b}let Ye,ft,he,bt,C,v,V,Z,Q,te,ce,X,K,me,ve,ae,ne,Pe,Ve,Qe,O,ie,Y;function ge(){Ye=new Ib(B),Ye.init(),O=new g1(B,Ye),ft=new Mb(B,Ye,e,O),he=new p1(B,Ye),ft.reversedDepthBuffer&&u&&he.buffers.depth.setReversed(!0),bt=new Lb(B),C=new e1,v=new m1(B,Ye,he,C,ft,O,bt),V=new Rb(N),Z=new By(B),ie=new yb(B,Z),Q=new Nb(B,Z,bt,ie),te=new Db(B,Q,Z,ie,bt),Pe=new Fb(B,ft,v),ve=new bb(C),ce=new QE(N,V,Ye,ft,ie,ve),X=new y1(N,C),K=new n1,me=new l1(Ye),ne=new vb(N,V,he,te,g,l),ae=new f1(N,te,ft),Y=new S1(B,bt,ft,he),Ve=new Sb(B,Ye,bt),Qe=new Pb(B,Ye,bt),bt.programs=ce.programs,N.capabilities=ft,N.extensions=Ye,N.properties=C,N.renderLists=K,N.shadowMap=ae,N.state=he,N.info=bt}ge(),_!==sn&&(A=new Bb(_,n.width,n.height,r,s));let le=new cd(N,B);this.xr=le,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=Ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(b){b!==void 0&&(De=b,this.setSize(He,et,!1))},this.getSize=function(b){return b.set(He,et)},this.setSize=function(b,U,W=!0){if(le.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}He=b,et=U,n.width=Math.floor(b*De),n.height=Math.floor(U*De),W===!0&&(n.style.width=b+"px",n.style.height=U+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(He*De,et*De).floor()},this.setDrawingBufferSize=function(b,U,W){He=b,et=U,De=W,n.width=Math.floor(b*W),n.height=Math.floor(U*W),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===sn){Re("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Ce("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy($)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,U,W,z){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,U,W,z),he.viewport($.copy(oe).multiplyScalar(De).round())},this.getScissor=function(b){return b.copy(Ie)},this.setScissor=function(b,U,W,z){b.isVector4?Ie.set(b.x,b.y,b.z,b.w):Ie.set(b,U,W,z),he.scissor(q.copy(Ie).multiplyScalar(De).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){he.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){ue=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,W=!0){let z=0;if(b){let G=!1;if(T!==null){let pe=T.texture.format;G=m.has(pe)}if(G){let pe=T.texture.type,ye=p.has(pe),fe=ne.getClearColor(),Me=ne.getClearAlpha(),Ee=fe.r,ke=fe.g,We=fe.b;ye?(y[0]=Ee,y[1]=ke,y[2]=We,y[3]=Me,B.clearBufferuiv(B.COLOR,0,y)):(M[0]=Ee,M[1]=ke,M[2]=We,M[3]=Me,B.clearBufferiv(B.COLOR,0,M))}else z|=B.COLOR_BUFFER_BIT}U&&(z|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&B.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){n.removeEventListener("webglcontextlost",j,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),ne.dispose(),K.dispose(),me.dispose(),C.dispose(),V.dispose(),te.dispose(),ie.dispose(),Y.dispose(),ce.dispose(),le.dispose(),le.removeEventListener("sessionstart",jf),le.removeEventListener("sessionend",Qf),ur.stop()};function j(b){b.preventDefault(),Gh("WebGLRenderer: Context Lost."),I=!0}function be(){Gh("WebGLRenderer: Context Restored."),I=!1;let b=bt.autoReset,U=ae.enabled,W=ae.autoUpdate,z=ae.needsUpdate,G=ae.type;ge(),bt.autoReset=b,ae.enabled=U,ae.autoUpdate=W,ae.needsUpdate=z,ae.type=G}function Ue(b){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Tt(b){let U=b.target;U.removeEventListener("dispose",Tt),st(U)}function st(b){gi(b),C.remove(b)}function gi(b){let U=C.get(b).programs;U!==void 0&&(U.forEach(function(W){ce.releaseProgram(W)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,W,z,G,pe){U===null&&(U=Pt);let ye=G.isMesh&&G.matrixWorld.determinant()<0,fe=Dv(b,U,W,z,G);he.setMaterial(z,ye);let Me=W.index,Ee=1;if(z.wireframe===!0){if(Me=Q.getWireframeAttribute(W),Me===void 0)return;Ee=2}let ke=W.drawRange,We=W.attributes.position,Te=ke.start*Ee,ot=(ke.start+ke.count)*Ee;pe!==null&&(Te=Math.max(Te,pe.start*Ee),ot=Math.min(ot,(pe.start+pe.count)*Ee)),Me!==null?(Te=Math.max(Te,0),ot=Math.min(ot,Me.count)):We!=null&&(Te=Math.max(Te,0),ot=Math.min(ot,We.count));let At=ot-Te;if(At<0||At===1/0)return;ie.setup(G,z,fe,W,Me);let Et,ut=Ve;if(Me!==null&&(Et=Z.get(Me),ut=Qe,ut.setIndex(Et)),G.isMesh)z.wireframe===!0?(he.setLineWidth(z.wireframeLinewidth*cn()),ut.setMode(B.LINES)):ut.setMode(B.TRIANGLES);else if(G.isLine){let zt=z.linewidth;zt===void 0&&(zt=1),he.setLineWidth(zt*cn()),G.isLineSegments?ut.setMode(B.LINES):G.isLineLoop?ut.setMode(B.LINE_LOOP):ut.setMode(B.LINE_STRIP)}else G.isPoints?ut.setMode(B.POINTS):G.isSprite&&ut.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let zt=G._multiDrawStarts,_e=G._multiDrawCounts,un=G._multiDrawCount,Je=Me?Z.get(Me).bytesPerElement:1,bn=C.get(z).currentProgram.getUniforms();for(let Qn=0;Qn<un;Qn++)bn.setValue(B,"_gl_DrawID",Qn),ut.render(zt[Qn]/Je,_e[Qn])}else if(G.isInstancedMesh)ut.renderInstances(Te,At,G.count);else if(W.isInstancedBufferGeometry){let zt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,zt);ut.renderInstances(Te,At,_e)}else ut.render(Te,At)};function jn(b,U,W){b.transparent===!0&&b.side===Tn&&b.forceSinglePass===!1?(b.side=jt,b.needsUpdate=!0,Pa(b,U,W),b.side=bi,b.needsUpdate=!0,Pa(b,U,W),b.side=Tn):Pa(b,U,W)}this.compile=function(b,U,W=null){W===null&&(W=b),S=me.get(W),S.init(U),x.push(S),W.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),b!==W&&b.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),S.setupLights();let z=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let pe=G.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){let fe=pe[ye];jn(fe,W,G),z.add(fe)}else jn(pe,W,G),z.add(pe)}),S=x.pop(),z},this.compileAsync=function(b,U,W=null){let z=this.compile(b,U,W);return new Promise(G=>{function pe(){if(z.forEach(function(ye){C.get(ye).currentProgram.isReady()&&z.delete(ye)}),z.size===0){G(b);return}setTimeout(pe,10)}Ye.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ku=null;function Lv(b){ku&&ku(b)}function jf(){ur.stop()}function Qf(){ur.start()}let ur=new Wm;ur.setAnimationLoop(Lv),typeof self<"u"&&ur.setContext(self),this.setAnimationLoop=function(b){ku=b,le.setAnimationLoop(b),b===null?ur.stop():ur.start()},le.addEventListener("sessionstart",jf),le.addEventListener("sessionend",Qf),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(b,U);let W=le.enabled===!0&&le.isPresenting===!0,z=A!==null&&(T===null||W)&&A.begin(N,T);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,U,T),S=me.get(b,x.length),S.init(U),S.state.textureUnits=v.getTextureUnits(),x.push(S),rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ne.setFromProjectionMatrix(rt,kn,U.reversedDepth),qe=this.localClippingEnabled,vt=ve.init(this.clippingPlanes,qe),R=K.get(b,w.length),R.init(),w.push(R),le.enabled===!0&&le.isPresenting===!0){let ye=N.xr.getDepthSensingMesh();ye!==null&&Vu(ye,U,-1/0,N.sortObjects)}Vu(b,U,0,N.sortObjects),R.finish(),N.sortObjects===!0&&R.sort(J,ue),yt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,yt&&ne.addToRenderList(R,b),this.info.render.frame++,vt===!0&&ve.beginShadows();let G=S.state.shadowsArray;if(ae.render(G,b,U),vt===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&A.hasRenderPass())===!1){let ye=R.opaque,fe=R.transmissive;if(S.setupLights(),U.isArrayCamera){let Me=U.cameras;if(fe.length>0)for(let Ee=0,ke=Me.length;Ee<ke;Ee++){let We=Me[Ee];tp(ye,fe,b,We)}yt&&ne.render(b);for(let Ee=0,ke=Me.length;Ee<ke;Ee++){let We=Me[Ee];ep(R,b,We,We.viewport)}}else fe.length>0&&tp(ye,fe,b,U),yt&&ne.render(b),ep(R,b,U)}T!==null&&H===0&&(v.updateMultisampleRenderTarget(T),v.updateRenderTargetMipmap(T)),z&&A.end(N),b.isScene===!0&&b.onAfterRender(N,b,U),ie.resetDefaultState(),F=-1,L=null,x.pop(),x.length>0?(S=x[x.length-1],v.setTextureUnits(S.state.textureUnits),vt===!0&&ve.setGlobalState(N.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?R=w[w.length-1]:R=null,D!==null&&D.renderEnd()};function Vu(b,U,W,z){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)S.pushLightProbeGrid(b);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ne.intersectsSprite(b)){z&&Xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(rt);let ye=te.update(b),fe=b.material;fe.visible&&R.push(b,ye,fe,W,Xe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ne.intersectsObject(b))){let ye=te.update(b),fe=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Xe.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Xe.copy(ye.boundingSphere.center)),Xe.applyMatrix4(b.matrixWorld).applyMatrix4(rt)),Array.isArray(fe)){let Me=ye.groups;for(let Ee=0,ke=Me.length;Ee<ke;Ee++){let We=Me[Ee],Te=fe[We.materialIndex];Te&&Te.visible&&R.push(b,ye,Te,W,Xe.z,We)}}else fe.visible&&R.push(b,ye,fe,W,Xe.z,null)}}let pe=b.children;for(let ye=0,fe=pe.length;ye<fe;ye++)Vu(pe[ye],U,W,z)}function ep(b,U,W,z){let{opaque:G,transmissive:pe,transparent:ye}=b;S.setupLightsView(W),vt===!0&&ve.setGlobalState(N.clippingPlanes,W),z&&he.viewport($.copy(z)),G.length>0&&Na(G,U,W),pe.length>0&&Na(pe,U,W),ye.length>0&&Na(ye,U,W),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function tp(b,U,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[z.id]===void 0){let Te=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[z.id]=new pn(1,1,{generateMipmaps:!0,type:Te?ai:sn,minFilter:Yi,samples:Math.max(4,ft.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let pe=S.state.transmissionRenderTarget[z.id],ye=z.viewport||$;pe.setSize(ye.z*N.transmissionResolutionScale,ye.w*N.transmissionResolutionScale);let fe=N.getRenderTarget(),Me=N.getActiveCubeFace(),Ee=N.getActiveMipmapLevel();N.setRenderTarget(pe),N.getClearColor(se),xe=N.getClearAlpha(),xe<1&&N.setClearColor(16777215,.5),N.clear(),yt&&ne.render(W);let ke=N.toneMapping;N.toneMapping=Gn;let We=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),S.setupLightsView(z),vt===!0&&ve.setGlobalState(N.clippingPlanes,z),Na(b,W,z),v.updateMultisampleRenderTarget(pe),v.updateRenderTargetMipmap(pe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let ot=0,At=U.length;ot<At;ot++){let Et=U[ot],{object:ut,geometry:zt,material:_e,group:un}=Et;if(_e.side===Tn&&ut.layers.test(z.layers)){let Je=_e.side;_e.side=jt,_e.needsUpdate=!0,np(ut,W,z,zt,_e,un),_e.side=Je,_e.needsUpdate=!0,Te=!0}}Te===!0&&(v.updateMultisampleRenderTarget(pe),v.updateRenderTargetMipmap(pe))}N.setRenderTarget(fe,Me,Ee),N.setClearColor(se,xe),We!==void 0&&(z.viewport=We),N.toneMapping=ke}function Na(b,U,W){let z=U.isScene===!0?U.overrideMaterial:null;for(let G=0,pe=b.length;G<pe;G++){let ye=b[G],{object:fe,geometry:Me,group:Ee}=ye,ke=ye.material;ke.allowOverride===!0&&z!==null&&(ke=z),fe.layers.test(W.layers)&&np(fe,U,W,Me,ke,Ee)}}function np(b,U,W,z,G,pe){b.onBeforeRender(N,U,W,z,G,pe),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(N,U,W,z,b,pe),G.transparent===!0&&G.side===Tn&&G.forceSinglePass===!1?(G.side=jt,G.needsUpdate=!0,N.renderBufferDirect(W,U,z,G,b,pe),G.side=bi,G.needsUpdate=!0,N.renderBufferDirect(W,U,z,G,b,pe),G.side=Tn):N.renderBufferDirect(W,U,z,G,b,pe),b.onAfterRender(N,U,W,z,G,pe)}function Pa(b,U,W){U.isScene!==!0&&(U=Pt);let z=C.get(b),G=S.state.lights,pe=S.state.shadowsArray,ye=G.state.version,fe=ce.getParameters(b,G.state,pe,U,W,S.state.lightProbeGridArray),Me=ce.getProgramCacheKey(fe),Ee=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=V.get(b.envMap||z.environment,ke),z.envMapRotation=z.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ee===void 0&&(b.addEventListener("dispose",Tt),Ee=new Map,z.programs=Ee);let We=Ee.get(Me);if(We!==void 0){if(z.currentProgram===We&&z.lightsStateVersion===ye)return rp(b,fe),We}else fe.uniforms=ce.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,W,fe),b.onBeforeCompile(fe,N),We=ce.acquireProgram(fe,Me),Ee.set(Me,We),z.uniforms=fe.uniforms;let Te=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Te.clippingPlanes=ve.uniform),rp(b,fe),z.needsLights=Bv(b),z.lightsStateVersion=ye,z.needsLights&&(Te.ambientLightColor.value=G.state.ambient,Te.lightProbe.value=G.state.probe,Te.directionalLights.value=G.state.directional,Te.directionalLightShadows.value=G.state.directionalShadow,Te.spotLights.value=G.state.spot,Te.spotLightShadows.value=G.state.spotShadow,Te.rectAreaLights.value=G.state.rectArea,Te.ltc_1.value=G.state.rectAreaLTC1,Te.ltc_2.value=G.state.rectAreaLTC2,Te.pointLights.value=G.state.point,Te.pointLightShadows.value=G.state.pointShadow,Te.hemisphereLights.value=G.state.hemi,Te.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Te.spotLightMatrix.value=G.state.spotLightMatrix,Te.spotLightMap.value=G.state.spotLightMap,Te.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=S.state.lightProbeGridArray.length>0,z.currentProgram=We,z.uniformsList=null,We}function ip(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Ts.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function rp(b,U){let W=C.get(b);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Fv(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;E.setFromMatrixPosition(U.matrixWorld);for(let W=0,z=b.length;W<z;W++){let G=b[W];if(G.texture!==null&&G.boundingBox.containsPoint(E))return G}return null}function Dv(b,U,W,z,G){U.isScene!==!0&&(U=Pt),v.resetTextureUnits();let pe=U.fog,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,fe=T===null?N.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ze.workingColorSpace,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ee=V.get(z.envMap||ye,Me),ke=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,At=!!W.morphAttributes.color,Et=Gn;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Et=N.toneMapping);let ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,zt=ut!==void 0?ut.length:0,_e=C.get(z),un=S.state.lights;if(vt===!0&&(qe===!0||b!==L)){let pt=b===L&&z.id===F;ve.setState(z,b,pt)}let Je=!1;z.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==un.state.version||_e.outputColorSpace!==fe||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==Ee||z.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ve.numPlanes||_e.numIntersection!==ve.numIntersection)||_e.vertexAlphas!==ke||_e.vertexTangents!==We||_e.morphTargets!==Te||_e.morphNormals!==ot||_e.morphColors!==At||_e.toneMapping!==Et||_e.morphTargetsCount!==zt||!!_e.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,_e.__version=z.version);let bn=_e.currentProgram;Je===!0&&(bn=Pa(z,U,G),D&&z.isNodeMaterial&&D.onUpdateProgram(z,bn,_e));let Qn=!1,Ni=!1,Gr=!1,ht=bn.getUniforms(),Ct=_e.uniforms;if(he.useProgram(bn.program)&&(Qn=!0,Ni=!0,Gr=!0),z.id!==F&&(F=z.id,Ni=!0),_e.needsLights){let pt=Fv(S.state.lightProbeGridArray,G);_e.lightProbeGrid!==pt&&(_e.lightProbeGrid=pt,Ni=!0)}if(Qn||L!==b){he.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ht.setValue(B,"projectionMatrix",b.projectionMatrix),ht.setValue(B,"viewMatrix",b.matrixWorldInverse);let Li=ht.map.cameraPosition;Li!==void 0&&Li.setValue(B,mt.setFromMatrixPosition(b.matrixWorld)),ft.logarithmicDepthBuffer&&ht.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,Ni=!0,Gr=!0)}if(_e.needsLights&&(un.state.directionalShadowMap.length>0&&ht.setValue(B,"directionalShadowMap",un.state.directionalShadowMap,v),un.state.spotShadowMap.length>0&&ht.setValue(B,"spotShadowMap",un.state.spotShadowMap,v),un.state.pointShadowMap.length>0&&ht.setValue(B,"pointShadowMap",un.state.pointShadowMap,v)),G.isSkinnedMesh){ht.setOptional(B,G,"bindMatrix"),ht.setOptional(B,G,"bindMatrixInverse");let pt=G.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ht.setValue(B,"boneTexture",pt.boneTexture,v))}G.isBatchedMesh&&(ht.setOptional(B,G,"batchingTexture"),ht.setValue(B,"batchingTexture",G._matricesTexture,v),ht.setOptional(B,G,"batchingIdTexture"),ht.setValue(B,"batchingIdTexture",G._indirectTexture,v),ht.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&ht.setValue(B,"batchingColorTexture",G._colorsTexture,v));let Pi=W.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&Pe.update(G,W,bn),(Ni||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,ht.setValue(B,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(Ct.envMapIntensity.value=U.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=b1()),Ni){if(ht.setValue(B,"toneMappingExposure",N.toneMappingExposure),_e.needsLights&&Ov(Ct,Gr),pe&&z.fog===!0&&X.refreshFogUniforms(Ct,pe),X.refreshMaterialUniforms(Ct,z,De,et,S.state.transmissionRenderTarget[b.id]),_e.needsLights&&_e.lightProbeGrid){let pt=_e.lightProbeGrid;Ct.probesSH.value=pt.texture,Ct.probesMin.value.copy(pt.boundingBox.min),Ct.probesMax.value.copy(pt.boundingBox.max),Ct.probesResolution.value.copy(pt.resolution)}Ts.upload(B,ip(_e),Ct,v)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ts.upload(B,ip(_e),Ct,v),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(B,"center",G.center),ht.setValue(B,"modelViewMatrix",G.modelViewMatrix),ht.setValue(B,"normalMatrix",G.normalMatrix),ht.setValue(B,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let pt=z.uniformsGroups;for(let Li=0,Wr=pt.length;Li<Wr;Li++){let sp=pt[Li];Y.update(sp,bn),Y.bind(sp,bn)}}return bn}function Ov(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Bv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,U,W){let z=C.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),C.get(b.texture).__webglTexture=U,C.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let W=C.get(b);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};let Uv=B.createFramebuffer();this.setRenderTarget=function(b,U=0,W=0){T=b,k=U,H=W;let z=null,G=!1,pe=!1;if(b){let fe=C.get(b);if(fe.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(B.FRAMEBUFFER,fe.__webglFramebuffer),$.copy(b.viewport),q.copy(b.scissor),ee=b.scissorTest,he.viewport($),he.scissor(q),he.setScissorTest(ee),F=-1;return}else if(fe.__webglFramebuffer===void 0)v.setupRenderTarget(b);else if(fe.__hasExternalTextures)v.rebindTextures(b,C.get(b.texture).__webglTexture,C.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ke=b.depthTexture;if(fe.__boundDepthTexture!==ke){if(ke!==null&&C.has(ke)&&(b.width!==ke.image.width||b.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(b)}}let Me=b.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);let Ee=C.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ee[U])?z=Ee[U][W]:z=Ee[U],G=!0):b.samples>0&&v.useMultisampledRTT(b)===!1?z=C.get(b).__webglMultisampledFramebuffer:Array.isArray(Ee)?z=Ee[W]:z=Ee,$.copy(b.viewport),q.copy(b.scissor),ee=b.scissorTest}else $.copy(oe).multiplyScalar(De).floor(),q.copy(Ie).multiplyScalar(De).floor(),ee=Oe;if(W!==0&&(z=Uv),he.bindFramebuffer(B.FRAMEBUFFER,z)&&he.drawBuffers(b,z),he.viewport($),he.scissor(q),he.setScissorTest(ee),G){let fe=C.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,W)}else if(pe){let fe=U;for(let Me=0;Me<b.textures.length;Me++){let Ee=C.get(b.textures[Me]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Me,Ee.__webglTexture,W,fe)}}else if(b!==null&&W!==0){let fe=C.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fe.__webglTexture,W)}F=-1},this.readRenderTargetPixels=function(b,U,W,z,G,pe,ye,fe=0){if(!(b&&b.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=C.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me){he.bindFramebuffer(B.FRAMEBUFFER,Me);try{let Ee=b.textures[fe],ke=Ee.format,We=Ee.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe),!ft.textureFormatReadable(ke)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(We)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-z&&W>=0&&W<=b.height-G&&B.readPixels(U,W,z,G,O.convert(ke),O.convert(We),pe)}finally{let Ee=T!==null?C.get(T).__webglFramebuffer:null;he.bindFramebuffer(B.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(b,U,W,z,G,pe,ye,fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=C.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me)if(U>=0&&U<=b.width-z&&W>=0&&W<=b.height-G){he.bindFramebuffer(B.FRAMEBUFFER,Me);let Ee=b.textures[fe],ke=Ee.format,We=Ee.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe),!ft.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Te),B.bufferData(B.PIXEL_PACK_BUFFER,pe.byteLength,B.STREAM_READ),B.readPixels(U,W,z,G,O.convert(ke),O.convert(We),0);let ot=T!==null?C.get(T).__webglFramebuffer:null;he.bindFramebuffer(B.FRAMEBUFFER,ot);let At=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await xm(B,At,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Te),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pe),B.deleteBuffer(Te),B.deleteSync(At),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,W=0){let z=Math.pow(2,-W),G=Math.floor(b.image.width*z),pe=Math.floor(b.image.height*z),ye=U!==null?U.x:0,fe=U!==null?U.y:0;v.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,ye,fe,G,pe),he.unbindTexture()};let kv=B.createFramebuffer(),Vv=B.createFramebuffer();this.copyTextureToTexture=function(b,U,W=null,z=null,G=0,pe=0){let ye,fe,Me,Ee,ke,We,Te,ot,At,Et=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(W!==null)ye=W.max.x-W.min.x,fe=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Ee=W.min.x,ke=W.min.y,We=W.isBox3?W.min.z:0;else{let Ct=Math.pow(2,-G);ye=Math.floor(Et.width*Ct),fe=Math.floor(Et.height*Ct),b.isDataArrayTexture?Me=Et.depth:b.isData3DTexture?Me=Math.floor(Et.depth*Ct):Me=1,Ee=0,ke=0,We=0}z!==null?(Te=z.x,ot=z.y,At=z.z):(Te=0,ot=0,At=0);let ut=O.convert(U.format),zt=O.convert(U.type),_e;U.isData3DTexture?(v.setTexture3D(U,0),_e=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(v.setTexture2DArray(U,0),_e=B.TEXTURE_2D_ARRAY):(v.setTexture2D(U,0),_e=B.TEXTURE_2D),he.activeTexture(B.TEXTURE0),he.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),he.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),he.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let un=he.getParameter(B.UNPACK_ROW_LENGTH),Je=he.getParameter(B.UNPACK_IMAGE_HEIGHT),bn=he.getParameter(B.UNPACK_SKIP_PIXELS),Qn=he.getParameter(B.UNPACK_SKIP_ROWS),Ni=he.getParameter(B.UNPACK_SKIP_IMAGES);he.pixelStorei(B.UNPACK_ROW_LENGTH,Et.width),he.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et.height),he.pixelStorei(B.UNPACK_SKIP_PIXELS,Ee),he.pixelStorei(B.UNPACK_SKIP_ROWS,ke),he.pixelStorei(B.UNPACK_SKIP_IMAGES,We);let Gr=b.isDataArrayTexture||b.isData3DTexture,ht=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let Ct=C.get(b),Pi=C.get(U),pt=C.get(Ct.__renderTarget),Li=C.get(Pi.__renderTarget);he.bindFramebuffer(B.READ_FRAMEBUFFER,pt.__webglFramebuffer),he.bindFramebuffer(B.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Wr=0;Wr<Me;Wr++)Gr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,C.get(b).__webglTexture,G,We+Wr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,C.get(U).__webglTexture,pe,At+Wr)),B.blitFramebuffer(Ee,ke,ye,fe,Te,ot,ye,fe,B.DEPTH_BUFFER_BIT,B.NEAREST);he.bindFramebuffer(B.READ_FRAMEBUFFER,null),he.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||C.has(b)){let Ct=C.get(b),Pi=C.get(U);he.bindFramebuffer(B.READ_FRAMEBUFFER,kv),he.bindFramebuffer(B.DRAW_FRAMEBUFFER,Vv);for(let pt=0;pt<Me;pt++)Gr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.__webglTexture,G,We+pt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ct.__webglTexture,G),ht?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pi.__webglTexture,pe,At+pt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pi.__webglTexture,pe),G!==0?B.blitFramebuffer(Ee,ke,ye,fe,Te,ot,ye,fe,B.COLOR_BUFFER_BIT,B.NEAREST):ht?B.copyTexSubImage3D(_e,pe,Te,ot,At+pt,Ee,ke,ye,fe):B.copyTexSubImage2D(_e,pe,Te,ot,Ee,ke,ye,fe);he.bindFramebuffer(B.READ_FRAMEBUFFER,null),he.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ht?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(_e,pe,Te,ot,At,ye,fe,Me,ut,zt,Et.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(_e,pe,Te,ot,At,ye,fe,Me,ut,Et.data):B.texSubImage3D(_e,pe,Te,ot,At,ye,fe,Me,ut,zt,Et):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,pe,Te,ot,ye,fe,ut,zt,Et.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,pe,Te,ot,Et.width,Et.height,ut,Et.data):B.texSubImage2D(B.TEXTURE_2D,pe,Te,ot,ye,fe,ut,zt,Et);he.pixelStorei(B.UNPACK_ROW_LENGTH,un),he.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Je),he.pixelStorei(B.UNPACK_SKIP_PIXELS,bn),he.pixelStorei(B.UNPACK_SKIP_ROWS,Qn),he.pixelStorei(B.UNPACK_SKIP_IMAGES,Ni),pe===0&&U.generateMipmaps&&B.generateMipmap(_e),he.unbindTexture()},this.initRenderTarget=function(b){C.get(b).__webglFramebuffer===void 0&&v.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?v.setTextureCube(b,0):b.isData3DTexture?v.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?v.setTexture2DArray(b,0):v.setTexture2D(b,0),he.unbindTexture()},this.resetState=function(){k=0,H=0,T=null,he.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}};var Jm=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","ON","ON","ET","ET","ET","ON","ON","ON","ON","ON","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","ON","ET","ET","ET","ET","ON","ON","ON","ON","L","ON","ON","BN","ON","ON","ET","ET","EN","EN","ON","L","ON","ON","ON","EN","L","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L"],ud=[[697,698,"ON"],[706,719,"ON"],[722,735,"ON"],[741,749,"ON"],[751,767,"ON"],[768,879,"NSM"],[884,885,"ON"],[894,894,"ON"],[900,901,"ON"],[903,903,"ON"],[1014,1014,"ON"],[1155,1161,"NSM"],[1418,1418,"ON"],[1421,1422,"ON"],[1423,1423,"ET"],[1424,1424,"R"],[1425,1469,"NSM"],[1470,1470,"R"],[1471,1471,"NSM"],[1472,1472,"R"],[1473,1474,"NSM"],[1475,1475,"R"],[1476,1477,"NSM"],[1478,1478,"R"],[1479,1479,"NSM"],[1480,1535,"R"],[1536,1541,"AN"],[1542,1543,"ON"],[1544,1544,"AL"],[1545,1546,"ET"],[1547,1547,"AL"],[1548,1548,"CS"],[1549,1549,"AL"],[1550,1551,"ON"],[1552,1562,"NSM"],[1563,1610,"AL"],[1611,1631,"NSM"],[1632,1641,"AN"],[1642,1642,"ET"],[1643,1644,"AN"],[1645,1647,"AL"],[1648,1648,"NSM"],[1649,1749,"AL"],[1750,1756,"NSM"],[1757,1757,"AN"],[1758,1758,"ON"],[1759,1764,"NSM"],[1765,1766,"AL"],[1767,1768,"NSM"],[1769,1769,"ON"],[1770,1773,"NSM"],[1774,1775,"AL"],[1776,1785,"EN"],[1786,1808,"AL"],[1809,1809,"NSM"],[1810,1839,"AL"],[1840,1866,"NSM"],[1867,1957,"AL"],[1958,1968,"NSM"],[1969,1983,"AL"],[1984,2026,"R"],[2027,2035,"NSM"],[2036,2037,"R"],[2038,2041,"ON"],[2042,2044,"R"],[2045,2045,"NSM"],[2046,2069,"R"],[2070,2073,"NSM"],[2074,2074,"R"],[2075,2083,"NSM"],[2084,2084,"R"],[2085,2087,"NSM"],[2088,2088,"R"],[2089,2093,"NSM"],[2094,2136,"R"],[2137,2139,"NSM"],[2140,2143,"R"],[2144,2191,"AL"],[2192,2193,"AN"],[2194,2198,"AL"],[2199,2207,"NSM"],[2208,2249,"AL"],[2250,2273,"NSM"],[2274,2274,"AN"],[2275,2306,"NSM"],[2362,2362,"NSM"],[2364,2364,"NSM"],[2369,2376,"NSM"],[2381,2381,"NSM"],[2385,2391,"NSM"],[2402,2403,"NSM"],[2433,2433,"NSM"],[2492,2492,"NSM"],[2497,2500,"NSM"],[2509,2509,"NSM"],[2530,2531,"NSM"],[2546,2547,"ET"],[2555,2555,"ET"],[2558,2558,"NSM"],[2561,2562,"NSM"],[2620,2620,"NSM"],[2625,2626,"NSM"],[2631,2632,"NSM"],[2635,2637,"NSM"],[2641,2641,"NSM"],[2672,2673,"NSM"],[2677,2677,"NSM"],[2689,2690,"NSM"],[2748,2748,"NSM"],[2753,2757,"NSM"],[2759,2760,"NSM"],[2765,2765,"NSM"],[2786,2787,"NSM"],[2801,2801,"ET"],[2810,2815,"NSM"],[2817,2817,"NSM"],[2876,2876,"NSM"],[2879,2879,"NSM"],[2881,2884,"NSM"],[2893,2893,"NSM"],[2901,2902,"NSM"],[2914,2915,"NSM"],[2946,2946,"NSM"],[3008,3008,"NSM"],[3021,3021,"NSM"],[3059,3064,"ON"],[3065,3065,"ET"],[3066,3066,"ON"],[3072,3072,"NSM"],[3076,3076,"NSM"],[3132,3132,"NSM"],[3134,3136,"NSM"],[3142,3144,"NSM"],[3146,3149,"NSM"],[3157,3158,"NSM"],[3170,3171,"NSM"],[3192,3198,"ON"],[3201,3201,"NSM"],[3260,3260,"NSM"],[3276,3277,"NSM"],[3298,3299,"NSM"],[3328,3329,"NSM"],[3387,3388,"NSM"],[3393,3396,"NSM"],[3405,3405,"NSM"],[3426,3427,"NSM"],[3457,3457,"NSM"],[3530,3530,"NSM"],[3538,3540,"NSM"],[3542,3542,"NSM"],[3633,3633,"NSM"],[3636,3642,"NSM"],[3647,3647,"ET"],[3655,3662,"NSM"],[3761,3761,"NSM"],[3764,3772,"NSM"],[3784,3790,"NSM"],[3864,3865,"NSM"],[3893,3893,"NSM"],[3895,3895,"NSM"],[3897,3897,"NSM"],[3898,3901,"ON"],[3953,3966,"NSM"],[3968,3972,"NSM"],[3974,3975,"NSM"],[3981,3991,"NSM"],[3993,4028,"NSM"],[4038,4038,"NSM"],[4141,4144,"NSM"],[4146,4151,"NSM"],[4153,4154,"NSM"],[4157,4158,"NSM"],[4184,4185,"NSM"],[4190,4192,"NSM"],[4209,4212,"NSM"],[4226,4226,"NSM"],[4229,4230,"NSM"],[4237,4237,"NSM"],[4253,4253,"NSM"],[4957,4959,"NSM"],[5008,5017,"ON"],[5120,5120,"ON"],[5760,5760,"WS"],[5787,5788,"ON"],[5906,5908,"NSM"],[5938,5939,"NSM"],[5970,5971,"NSM"],[6002,6003,"NSM"],[6068,6069,"NSM"],[6071,6077,"NSM"],[6086,6086,"NSM"],[6089,6099,"NSM"],[6107,6107,"ET"],[6109,6109,"NSM"],[6128,6137,"ON"],[6144,6154,"ON"],[6155,6157,"NSM"],[6158,6158,"BN"],[6159,6159,"NSM"],[6277,6278,"NSM"],[6313,6313,"NSM"],[6432,6434,"NSM"],[6439,6440,"NSM"],[6450,6450,"NSM"],[6457,6459,"NSM"],[6464,6464,"ON"],[6468,6469,"ON"],[6622,6655,"ON"],[6679,6680,"NSM"],[6683,6683,"NSM"],[6742,6742,"NSM"],[6744,6750,"NSM"],[6752,6752,"NSM"],[6754,6754,"NSM"],[6757,6764,"NSM"],[6771,6780,"NSM"],[6783,6783,"NSM"],[6832,6877,"NSM"],[6880,6891,"NSM"],[6912,6915,"NSM"],[6964,6964,"NSM"],[6966,6970,"NSM"],[6972,6972,"NSM"],[6978,6978,"NSM"],[7019,7027,"NSM"],[7040,7041,"NSM"],[7074,7077,"NSM"],[7080,7081,"NSM"],[7083,7085,"NSM"],[7142,7142,"NSM"],[7144,7145,"NSM"],[7149,7149,"NSM"],[7151,7153,"NSM"],[7212,7219,"NSM"],[7222,7223,"NSM"],[7376,7378,"NSM"],[7380,7392,"NSM"],[7394,7400,"NSM"],[7405,7405,"NSM"],[7412,7412,"NSM"],[7416,7417,"NSM"],[7616,7679,"NSM"],[8125,8125,"ON"],[8127,8129,"ON"],[8141,8143,"ON"],[8157,8159,"ON"],[8173,8175,"ON"],[8189,8190,"ON"],[8192,8202,"WS"],[8203,8205,"BN"],[8207,8207,"R"],[8208,8231,"ON"],[8232,8232,"WS"],[8233,8233,"B"],[8234,8238,"BN"],[8239,8239,"CS"],[8240,8244,"ET"],[8245,8259,"ON"],[8260,8260,"CS"],[8261,8286,"ON"],[8287,8287,"WS"],[8288,8303,"BN"],[8304,8304,"EN"],[8308,8313,"EN"],[8314,8315,"ES"],[8316,8318,"ON"],[8320,8329,"EN"],[8330,8331,"ES"],[8332,8334,"ON"],[8352,8399,"ET"],[8400,8432,"NSM"],[8448,8449,"ON"],[8451,8454,"ON"],[8456,8457,"ON"],[8468,8468,"ON"],[8470,8472,"ON"],[8478,8483,"ON"],[8485,8485,"ON"],[8487,8487,"ON"],[8489,8489,"ON"],[8494,8494,"ET"],[8506,8507,"ON"],[8512,8516,"ON"],[8522,8525,"ON"],[8528,8543,"ON"],[8585,8587,"ON"],[8592,8721,"ON"],[8722,8722,"ES"],[8723,8723,"ET"],[8724,9013,"ON"],[9083,9108,"ON"],[9110,9257,"ON"],[9280,9290,"ON"],[9312,9351,"ON"],[9352,9371,"EN"],[9450,9899,"ON"],[9901,10239,"ON"],[10496,11123,"ON"],[11126,11263,"ON"],[11493,11498,"ON"],[11503,11505,"NSM"],[11513,11519,"ON"],[11647,11647,"NSM"],[11744,11775,"NSM"],[11776,11869,"ON"],[11904,11929,"ON"],[11931,12019,"ON"],[12032,12245,"ON"],[12272,12287,"ON"],[12288,12288,"WS"],[12289,12292,"ON"],[12296,12320,"ON"],[12330,12333,"NSM"],[12336,12336,"ON"],[12342,12343,"ON"],[12349,12351,"ON"],[12441,12442,"NSM"],[12443,12444,"ON"],[12448,12448,"ON"],[12539,12539,"ON"],[12736,12773,"ON"],[12783,12783,"ON"],[12829,12830,"ON"],[12880,12895,"ON"],[12924,12926,"ON"],[12977,12991,"ON"],[13004,13007,"ON"],[13175,13178,"ON"],[13278,13279,"ON"],[13311,13311,"ON"],[19904,19967,"ON"],[42128,42182,"ON"],[42509,42511,"ON"],[42607,42610,"NSM"],[42611,42611,"ON"],[42612,42621,"NSM"],[42622,42623,"ON"],[42654,42655,"NSM"],[42736,42737,"NSM"],[42752,42785,"ON"],[42888,42888,"ON"],[43010,43010,"NSM"],[43014,43014,"NSM"],[43019,43019,"NSM"],[43045,43046,"NSM"],[43048,43051,"ON"],[43052,43052,"NSM"],[43064,43065,"ET"],[43124,43127,"ON"],[43204,43205,"NSM"],[43232,43249,"NSM"],[43263,43263,"NSM"],[43302,43309,"NSM"],[43335,43345,"NSM"],[43392,43394,"NSM"],[43443,43443,"NSM"],[43446,43449,"NSM"],[43452,43453,"NSM"],[43493,43493,"NSM"],[43561,43566,"NSM"],[43569,43570,"NSM"],[43573,43574,"NSM"],[43587,43587,"NSM"],[43596,43596,"NSM"],[43644,43644,"NSM"],[43696,43696,"NSM"],[43698,43700,"NSM"],[43703,43704,"NSM"],[43710,43711,"NSM"],[43713,43713,"NSM"],[43756,43757,"NSM"],[43766,43766,"NSM"],[43882,43883,"ON"],[44005,44005,"NSM"],[44008,44008,"NSM"],[44013,44013,"NSM"],[64285,64285,"R"],[64286,64286,"NSM"],[64287,64296,"R"],[64297,64297,"ES"],[64298,64335,"R"],[64336,64450,"AL"],[64451,64466,"ON"],[64467,64829,"AL"],[64830,64847,"ON"],[64848,64911,"AL"],[64912,64913,"ON"],[64914,64967,"AL"],[64968,64975,"ON"],[64976,65007,"BN"],[65008,65020,"AL"],[65021,65023,"ON"],[65024,65039,"NSM"],[65040,65049,"ON"],[65056,65071,"NSM"],[65072,65103,"ON"],[65104,65104,"CS"],[65105,65105,"ON"],[65106,65106,"CS"],[65108,65108,"ON"],[65109,65109,"CS"],[65110,65118,"ON"],[65119,65119,"ET"],[65120,65121,"ON"],[65122,65123,"ES"],[65124,65126,"ON"],[65128,65128,"ON"],[65129,65130,"ET"],[65131,65131,"ON"],[65136,65278,"AL"],[65279,65279,"BN"],[65281,65282,"ON"],[65283,65285,"ET"],[65286,65290,"ON"],[65291,65291,"ES"],[65292,65292,"CS"],[65293,65293,"ES"],[65294,65295,"CS"],[65296,65305,"EN"],[65306,65306,"CS"],[65307,65312,"ON"],[65339,65344,"ON"],[65371,65381,"ON"],[65504,65505,"ET"],[65506,65508,"ON"],[65509,65510,"ET"],[65512,65518,"ON"],[65520,65528,"BN"],[65529,65533,"ON"],[65534,65535,"BN"],[65793,65793,"ON"],[65856,65932,"ON"],[65936,65948,"ON"],[65952,65952,"ON"],[66045,66045,"NSM"],[66272,66272,"NSM"],[66273,66299,"EN"],[66422,66426,"NSM"],[67584,67870,"R"],[67871,67871,"ON"],[67872,68096,"R"],[68097,68099,"NSM"],[68100,68100,"R"],[68101,68102,"NSM"],[68103,68107,"R"],[68108,68111,"NSM"],[68112,68151,"R"],[68152,68154,"NSM"],[68155,68158,"R"],[68159,68159,"NSM"],[68160,68324,"R"],[68325,68326,"NSM"],[68327,68408,"R"],[68409,68415,"ON"],[68416,68863,"R"],[68864,68899,"AL"],[68900,68903,"NSM"],[68904,68911,"AL"],[68912,68921,"AN"],[68922,68927,"AL"],[68928,68937,"AN"],[68938,68968,"R"],[68969,68973,"NSM"],[68974,68974,"ON"],[68975,69215,"R"],[69216,69246,"AN"],[69247,69290,"R"],[69291,69292,"NSM"],[69293,69311,"R"],[69312,69327,"AL"],[69328,69336,"ON"],[69337,69369,"AL"],[69370,69375,"NSM"],[69376,69423,"R"],[69424,69445,"AL"],[69446,69456,"NSM"],[69457,69487,"AL"],[69488,69505,"R"],[69506,69509,"NSM"],[69510,69631,"R"],[69633,69633,"NSM"],[69688,69702,"NSM"],[69714,69733,"ON"],[69744,69744,"NSM"],[69747,69748,"NSM"],[69759,69761,"NSM"],[69811,69814,"NSM"],[69817,69818,"NSM"],[69826,69826,"NSM"],[69888,69890,"NSM"],[69927,69931,"NSM"],[69933,69940,"NSM"],[70003,70003,"NSM"],[70016,70017,"NSM"],[70070,70078,"NSM"],[70089,70092,"NSM"],[70095,70095,"NSM"],[70191,70193,"NSM"],[70196,70196,"NSM"],[70198,70199,"NSM"],[70206,70206,"NSM"],[70209,70209,"NSM"],[70367,70367,"NSM"],[70371,70378,"NSM"],[70400,70401,"NSM"],[70459,70460,"NSM"],[70464,70464,"NSM"],[70502,70508,"NSM"],[70512,70516,"NSM"],[70587,70592,"NSM"],[70606,70606,"NSM"],[70608,70608,"NSM"],[70610,70610,"NSM"],[70625,70626,"NSM"],[70712,70719,"NSM"],[70722,70724,"NSM"],[70726,70726,"NSM"],[70750,70750,"NSM"],[70835,70840,"NSM"],[70842,70842,"NSM"],[70847,70848,"NSM"],[70850,70851,"NSM"],[71090,71093,"NSM"],[71100,71101,"NSM"],[71103,71104,"NSM"],[71132,71133,"NSM"],[71219,71226,"NSM"],[71229,71229,"NSM"],[71231,71232,"NSM"],[71264,71276,"ON"],[71339,71339,"NSM"],[71341,71341,"NSM"],[71344,71349,"NSM"],[71351,71351,"NSM"],[71453,71453,"NSM"],[71455,71455,"NSM"],[71458,71461,"NSM"],[71463,71467,"NSM"],[71727,71735,"NSM"],[71737,71738,"NSM"],[71995,71996,"NSM"],[71998,71998,"NSM"],[72003,72003,"NSM"],[72148,72151,"NSM"],[72154,72155,"NSM"],[72160,72160,"NSM"],[72193,72198,"NSM"],[72201,72202,"NSM"],[72243,72248,"NSM"],[72251,72254,"NSM"],[72263,72263,"NSM"],[72273,72278,"NSM"],[72281,72283,"NSM"],[72330,72342,"NSM"],[72344,72345,"NSM"],[72544,72544,"NSM"],[72546,72548,"NSM"],[72550,72550,"NSM"],[72752,72758,"NSM"],[72760,72765,"NSM"],[72850,72871,"NSM"],[72874,72880,"NSM"],[72882,72883,"NSM"],[72885,72886,"NSM"],[73009,73014,"NSM"],[73018,73018,"NSM"],[73020,73021,"NSM"],[73023,73029,"NSM"],[73031,73031,"NSM"],[73104,73105,"NSM"],[73109,73109,"NSM"],[73111,73111,"NSM"],[73459,73460,"NSM"],[73472,73473,"NSM"],[73526,73530,"NSM"],[73536,73536,"NSM"],[73538,73538,"NSM"],[73562,73562,"NSM"],[73685,73692,"ON"],[73693,73696,"ET"],[73697,73713,"ON"],[78912,78912,"NSM"],[78919,78933,"NSM"],[90398,90409,"NSM"],[90413,90415,"NSM"],[92912,92916,"NSM"],[92976,92982,"NSM"],[94031,94031,"NSM"],[94095,94098,"NSM"],[94178,94178,"ON"],[94180,94180,"NSM"],[113821,113822,"NSM"],[113824,113827,"BN"],[117760,117973,"ON"],[118e3,118009,"EN"],[118010,118012,"ON"],[118016,118451,"ON"],[118458,118480,"ON"],[118496,118512,"ON"],[118528,118573,"NSM"],[118576,118598,"NSM"],[119143,119145,"NSM"],[119155,119162,"BN"],[119163,119170,"NSM"],[119173,119179,"NSM"],[119210,119213,"NSM"],[119273,119274,"ON"],[119296,119361,"ON"],[119362,119364,"NSM"],[119365,119365,"ON"],[119552,119638,"ON"],[120513,120513,"ON"],[120539,120539,"ON"],[120571,120571,"ON"],[120597,120597,"ON"],[120629,120629,"ON"],[120655,120655,"ON"],[120687,120687,"ON"],[120713,120713,"ON"],[120745,120745,"ON"],[120771,120771,"ON"],[120782,120831,"EN"],[121344,121398,"NSM"],[121403,121452,"NSM"],[121461,121461,"NSM"],[121476,121476,"NSM"],[121499,121503,"NSM"],[121505,121519,"NSM"],[122880,122886,"NSM"],[122888,122904,"NSM"],[122907,122913,"NSM"],[122915,122916,"NSM"],[122918,122922,"NSM"],[123023,123023,"NSM"],[123184,123190,"NSM"],[123566,123566,"NSM"],[123628,123631,"NSM"],[123647,123647,"ET"],[124140,124143,"NSM"],[124398,124399,"NSM"],[124643,124643,"NSM"],[124646,124646,"NSM"],[124654,124655,"NSM"],[124661,124661,"NSM"],[124928,125135,"R"],[125136,125142,"NSM"],[125143,125251,"R"],[125252,125258,"NSM"],[125259,126063,"R"],[126064,126143,"AL"],[126144,126207,"R"],[126208,126287,"AL"],[126288,126463,"R"],[126464,126703,"AL"],[126704,126705,"ON"],[126706,126719,"AL"],[126720,126975,"R"],[126976,127019,"ON"],[127024,127123,"ON"],[127136,127150,"ON"],[127153,127167,"ON"],[127169,127183,"ON"],[127185,127221,"ON"],[127232,127242,"EN"],[127243,127247,"ON"],[127279,127279,"ON"],[127338,127343,"ON"],[127405,127405,"ON"],[127584,127589,"ON"],[127744,128728,"ON"],[128732,128748,"ON"],[128752,128764,"ON"],[128768,128985,"ON"],[128992,129003,"ON"],[129008,129008,"ON"],[129024,129035,"ON"],[129040,129095,"ON"],[129104,129113,"ON"],[129120,129159,"ON"],[129168,129197,"ON"],[129200,129211,"ON"],[129216,129217,"ON"],[129232,129240,"ON"],[129280,129623,"ON"],[129632,129645,"ON"],[129648,129660,"ON"],[129664,129674,"ON"],[129678,129734,"ON"],[129736,129736,"ON"],[129741,129756,"ON"],[129759,129770,"ON"],[129775,129784,"ON"],[129792,129938,"ON"],[129940,130031,"ON"],[130032,130041,"EN"],[130042,130042,"ON"],[131070,131071,"BN"],[196606,196607,"BN"],[262142,262143,"BN"],[327678,327679,"BN"],[393214,393215,"BN"],[458750,458751,"BN"],[524286,524287,"BN"],[589822,589823,"BN"],[655358,655359,"BN"],[720894,720895,"BN"],[786430,786431,"BN"],[851966,851967,"BN"],[917502,917759,"BN"],[917760,917999,"NSM"],[918e3,921599,"BN"],[983038,983039,"BN"],[1048574,1048575,"BN"],[1114110,1114111,"BN"]];function T1(t){if(t<=255)return Jm[t];let e=0,n=ud.length-1;for(;e<=n;){let i=e+n>>1,r=ud[i];if(t<r[0]){n=i-1;continue}if(t>r[1]){e=i+1;continue}return r[2]}return"L"}function A1(t){let e=t.length;if(e===0)return null;let n=new Array(e),i=!1;for(let c=0;c<e;){let h=t.charCodeAt(c),d=h,u=1;if(h>=55296&&h<=56319&&c+1<e){let g=t.charCodeAt(c+1);g>=56320&&g<=57343&&(d=(h-55296<<10)+(g-56320)+65536,u=2)}let f=T1(d);(f==="R"||f==="AL"||f==="AN")&&(i=!0);for(let g=0;g<u;g++)n[c+g]=f;c+=u}if(!i)return null;let r=0;for(let c=0;c<e;c++){let h=n[c];if(h==="L"){r=0;break}if(h==="R"||h==="AL"){r=1;break}}let s=new Int8Array(e);for(let c=0;c<e;c++)s[c]=r;let o=r&1?"R":"L",a=o,l=a;for(let c=0;c<e;c++)n[c]==="NSM"?n[c]=l:l=n[c];l=a;for(let c=0;c<e;c++){let h=n[c];h==="EN"?n[c]=l==="AL"?"AN":"EN":(h==="R"||h==="L"||h==="AL")&&(l=h)}for(let c=0;c<e;c++)n[c]==="AL"&&(n[c]="R");for(let c=1;c<e-1;c++)n[c]==="ES"&&n[c-1]==="EN"&&n[c+1]==="EN"&&(n[c]="EN"),n[c]==="CS"&&(n[c-1]==="EN"||n[c-1]==="AN")&&n[c+1]===n[c-1]&&(n[c]=n[c-1]);for(let c=0;c<e;c++){if(n[c]!=="EN")continue;let h;for(h=c-1;h>=0&&n[h]==="ET";h--)n[h]="EN";for(h=c+1;h<e&&n[h]==="ET";h++)n[h]="EN"}for(let c=0;c<e;c++){let h=n[c];(h==="WS"||h==="ES"||h==="ET"||h==="CS")&&(n[c]="ON")}l=a;for(let c=0;c<e;c++){let h=n[c];h==="EN"?n[c]=l==="L"?"L":"EN":(h==="R"||h==="L")&&(l=h)}for(let c=0;c<e;c++){if(n[c]!=="ON")continue;let h=c+1;for(;h<e&&n[h]==="ON";)h++;let d=c>0?n[c-1]:a,u=h<e?n[h]:a,f=d!=="L"?"R":"L";if(f===(u!=="L"?"R":"L"))for(let _=c;_<h;_++)n[_]=f;c=h-1}for(let c=0;c<e;c++)n[c]==="ON"&&(n[c]=o);for(let c=0;c<e;c++){let h=n[c];(s[c]&1)===0?h==="R"?s[c]++:(h==="AN"||h==="EN")&&(s[c]+=2):(h==="L"||h==="AN"||h==="EN")&&s[c]++}return s}function jm(t,e){let n=A1(t);if(n===null)return null;let i=new Int8Array(e.length);for(let r=0;r<e.length;r++)i[r]=n[e[r]];return i}var C1=/[ \t\n\r\f]+/g,w1=/[\t\n\r\f]| {2,}|^ | $/;function R1(t){let e=t??"normal";return e==="pre-wrap"?{mode:e,preserveOrdinarySpaces:!0,preserveHardBreaks:!0}:{mode:e,preserveOrdinarySpaces:!1,preserveHardBreaks:!1}}function I1(t){if(!w1.test(t))return t;let e=t.replace(C1," ");return e.charCodeAt(0)===32&&(e=e.slice(1)),e.length>0&&e.charCodeAt(e.length-1)===32&&(e=e.slice(0,-1)),e}function N1(t){return/[\r\f]/.test(t)?t.replace(/\r\n/g,`
`).replace(/[\r\f]/g,`
`):t}var hd=null,P1;function L1(){return hd===null&&(hd=new Intl.Segmenter(P1,{granularity:"word"})),hd}var F1=/\p{Script=Arabic}/u,Mr=/\p{M}/u,fd=/\p{Nd}/u;function Qm(t){return F1.test(t)}function eg(t){return t>=19968&&t<=40959||t>=13312&&t<=19903||t>=131072&&t<=173791||t>=173824&&t<=177983||t>=177984&&t<=178207||t>=178208&&t<=183983||t>=183984&&t<=191471||t>=191472&&t<=192093||t>=194560&&t<=195103||t>=196608&&t<=201551||t>=201552&&t<=205743||t>=205744&&t<=210041||t>=63744&&t<=64255||t>=12288&&t<=12351||t>=12352&&t<=12447||t>=12448&&t<=12543||t>=12592&&t<=12687||t>=44032&&t<=55215||t>=65280&&t<=65519}function wn(t){for(let e=0;e<t.length;e++){let n=t.charCodeAt(e);if(!(n<12288)){if(n>=55296&&n<=56319&&e+1<t.length){let i=t.charCodeAt(e+1);if(i>=56320&&i<=57343){let r=(n-55296<<10)+(i-56320)+65536;if(eg(r))return!0;e++;continue}}if(eg(n))return!0}}return!1}function D1(t){let e=Yo(t);return e!==null&&(Oc.has(e)||ji.has(e))}var O1=new Set(["\xA0","\u202F","\u2060","\uFEFF"]),B1=new Set(["-","\u2010","\u2013","\u2014"]);function U1(t){let e=Yo(t);return e!==null&&O1.has(e)}function k1(t){let e=Yo(t);return e!==null&&B1.has(e)}function pd(t,e){return U1(t)?!1:e?!(D1(t)||k1(t)):!0}var Oc=new Set(["\uFF0C","\uFF0E","\uFF01","\uFF1A","\uFF1B","\uFF1F","\u3001","\u3002","\u30FB","\uFF09","\u3015","\u3009","\u300B","\u300D","\u300F","\u3011","\u3017","\u3019","\u301B","\u30FC","\u3005","\u303B","\u309D","\u309E","\u30FD","\u30FE"]),qo=new Set(['"',"(","[","{","\xA1","\xBF","\u201C","\u2018","\u201A","\u201E","\xAB","\u2039","\u2E18","\uFF08","\u3014","\u3008","\u300A","\u300C","\u300E","\u3010","\u3016","\u3018","\u301A"]),md=new Set(["'","\u2019"]),ji=new Set([".",",","!","?",":",";","\u060C","\u061B","\u061F","\u0964","\u0965","\u104A","\u104B","\u104C","\u104D","\u104F",")","]","}","%",'"',"\u201D","\u2019","\xBB","\u203A","\u2026"]),V1=new Set([":",".","\u060C","\u061B"]),H1=new Set(["\u104F"]),z1=new Set(["\u201D","\u2019","\xBB","\u203A","\u300D","\u300F","\u3011","\u300B","\u3009","\u3015","\uFF09"]);function G1(t){if(gd(t))return!0;let e=!1;for(let n of t){if(ji.has(n)||Uc(n)){e=!0;continue}if(!(e&&Mr.test(n)))return!1}return e}function W1(t){for(let e of t)if(!Oc.has(e)&&!ji.has(e))return!1;return t.length>0}function $1(t){if(gd(t))return!0;for(let e of t)if(!qo.has(e)&&!md.has(e)&&!Mr.test(e)&&!Uc(e))return!1;return t.length>0}function gd(t){let e=!1;for(let n of t)if(!(n==="\\"||Mr.test(n))){if(qo.has(n)||ji.has(n)||md.has(n)){e=!0;continue}return!1}return e}function Bc(t,e){let n=e-1;if(n<=0)return Math.max(n,0);let i=t.charCodeAt(n);if(i<56320||i>57343)return n;let r=n-1;if(r<0)return n;let s=t.charCodeAt(r);return s>=55296&&s<=56319?r:n}function Yo(t){if(t.length===0)return null;let e=Bc(t,t.length);return t.slice(e)}function X1(t){for(let e of t)if(!Mr.test(e))return e;return null}function q1(t){for(let e=t.length;e>0;){let n=Bc(t,e),i=t.slice(n,e);if(!Mr.test(i))return i;e=n}return null}var Y1=[36,37,43,43,92,92,162,165,176,177,1423,1423,1545,1547,1642,1642,2046,2047,2546,2547,2553,2555,2801,2801,3065,3065,3449,3449,3647,3647,6107,6107,8240,8247,8279,8279,8352,8399,8451,8451,8457,8457,8470,8470,8722,8723,43064,43064,65020,65020,65129,65130,65284,65285,65504,65505,65509,65510,73693,73696,123647,123647,126124,126124,126128,126128];function Z1(t,e){for(let n=0;n<e.length;n+=2)if(t>=e[n]&&t<=e[n+1])return!0;return!1}function Uc(t){let e=t.codePointAt(0);return e!==void 0&&Z1(e,Y1)}function K1(t){let e=q1(t);return e!==null&&Uc(e)}function J1(t){let e=X1(t);return e!==null&&fd.test(e)}function j1(t){let e=Array.from(t),n=e.length;for(;n>0;){let i=e[n-1];if(Mr.test(i)){n--;continue}if(qo.has(i)||md.has(i)){n--;continue}break}return n<=0||n===e.length?null:{head:e.slice(0,n).join(""),tail:e.slice(n).join("")}}function Q1(t,e,n){return n==="text"&&!e&&t.length===1&&t!=="-"&&t!=="\u2014"?t:null}function tg(t,e,n,i){let r=e[i],s=t[i];if(r==null)return s;let o=n[i];if(s.length===o)return s;let a=r.repeat(o);return t[i]=a,a}function ng(t,e){return t&&e!==null&&V1.has(e)}function eT(t){let e=Yo(t);return e!==null&&H1.has(e)}function tT(t){if(t.length<2||t[0]!==" ")return null;let e=t.slice(1);return/^\p{M}+$/u.test(e)?{space:" ",marks:e}:null}function kc(t){let e=t.length;for(;e>0;){let n=Bc(t,e),i=t.slice(n,e);if(z1.has(i))return!0;if(!ji.has(i))return!1;e=n}return!1}function nT(t,e){if(e.preserveOrdinarySpaces||e.preserveHardBreaks){if(t===" ")return"preserved-space";if(t==="	")return"tab";if(e.preserveHardBreaks&&t===`
`)return"hard-break"}return t===" "?"space":t==="\xA0"||t==="\u202F"||t==="\u2060"||t==="\uFEFF"?"glue":t==="\u200B"?"zero-width-break":t==="\xAD"?"soft-hyphen":"text"}var iT=/[\x20\t\n\xA0\xAD\u200B\u202F\u2060\uFEFF]/;function $n(t){return t.length===1?t[0]:t.join("")}function rT(t,e){let n=[];for(let i=t.length-1;i>=0;i--)n.push(t[i]);return n.push(e),$n(n)}function sT(t,e,n,i){if(!iT.test(t))return[{text:t,isWordLike:e,kind:"text",start:n}];let r=[],s=null,o=[],a=n,l=!1,c=0;for(let h of t){let d=nT(h,i),u=d==="text"&&e;if(s!==null&&d===s&&u===l){o.push(h),c+=h.length;continue}s!==null&&r.push({text:$n(o),isWordLike:l,kind:s,start:a}),s=d,o=[h],a=n+c,l=u,c+=h.length}return s!==null&&r.push({text:$n(o),isWordLike:l,kind:s,start:a}),r}function dd(t){return t==="space"||t==="preserved-space"||t==="zero-width-break"||t==="hard-break"}var oT=/^[A-Za-z][A-Za-z0-9+.-]*:$/;function aT(t,e){let n=t.texts[e];return n.startsWith("www.")?!0:oT.test(n)&&e+1<t.len&&t.kinds[e+1]==="text"&&t.texts[e+1]==="//"}function lT(t){return t.includes("?")&&(t.includes("://")||t.startsWith("www."))}function cT(t){let e=t.texts.slice(),n=t.isWordLike.slice(),i=t.kinds.slice(),r=t.starts.slice();for(let o=0;o<t.len;o++){if(i[o]!=="text"||!aT(t,o))continue;let a=[e[o]],l=o+1;for(;l<t.len&&!dd(i[l]);){a.push(e[l]),n[o]=!0;let c=e[l].includes("?");if(i[l]="text",e[l]="",l++,c)break}e[o]=$n(a)}let s=0;for(let o=0;o<e.length;o++){let a=e[o];a.length!==0&&(s!==o&&(e[s]=a,n[s]=n[o],i[s]=i[o],r[s]=r[o]),s++)}return e.length=s,n.length=s,i.length=s,r.length=s,{len:s,texts:e,isWordLike:n,kinds:i,starts:r}}function uT(t){let e=[],n=[],i=[],r=[];for(let s=0;s<t.len;s++){let o=t.texts[s];if(e.push(o),n.push(t.isWordLike[s]),i.push(t.kinds[s]),r.push(t.starts[s]),!lT(o))continue;let a=s+1;if(a>=t.len||dd(t.kinds[a]))continue;let l=[],c=t.starts[a],h=a;for(;h<t.len&&!dd(t.kinds[h]);)l.push(t.texts[h]),h++;l.length>0&&(e.push($n(l)),n.push(!0),i.push("text"),r.push(c),s=h-1)}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:r}}var hT=new Set([":","-","/","\xD7",",",".","+","\u2013","\u2014"]),dT=new Set([".",",",":",";"]);function ig(t){for(let e=t.length;e>0;){let n=Bc(t,e),i=t.slice(n,e);if(Mr.test(i)){e=n;continue}return dT.has(i)||Uc(i)}return!1}function fT(t,e){return e&&!wn(t)}function rg(t){for(let e of t)if(fd.test(e))return!0;return!1}function Xo(t){if(t.length===0)return!1;for(let e of t)if(!(fd.test(e)||hT.has(e)))return!1;return!0}function pT(t){let e=[],n=[],i=[],r=[];for(let s=0;s<t.len;s++){let o=t.texts[s],a=t.kinds[s];if(a==="text"&&Xo(o)&&rg(o)){let l=[o],c=s+1;for(;c<t.len&&t.kinds[c]==="text"&&Xo(t.texts[c]);)l.push(t.texts[c]),c++;e.push($n(l)),n.push(!0),i.push("text"),r.push(t.starts[s]),s=c-1;continue}e.push(o),n.push(t.isWordLike[s]),i.push(a),r.push(t.starts[s])}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:r}}function mT(t){let e=[],n=[],i=[],r=[];for(let s=0;s<t.len;s++){let o=t.texts[s],a=t.kinds[s],l=t.isWordLike[s];if(a==="text"&&ig(o)&&(l||K1(o))&&!wn(o)){let c=[o],h=!0,d=s+1;for(;h&&d<t.len&&t.kinds[d]==="text"&&fT(t.texts[d],t.isWordLike[d]);){let u=t.texts[d];c.push(u),h=ig(u),d++}e.push($n(c)),n.push(!0),i.push("text"),r.push(t.starts[s]),s=d-1;continue}e.push(o),n.push(l),i.push(a),r.push(t.starts[s])}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:r}}function gT(t){let e=[],n=[],i=[],r=[];for(let s=0;s<t.len;s++){let o=t.texts[s];if(t.kinds[s]==="text"&&o.includes("-")){let a=o.split("-"),l=a.length>1;for(let c=0;c<a.length;c++){let h=a[c];if(!l)break;(h.length===0||!rg(h)||!Xo(h))&&(l=!1)}if(l){let c=0;for(let h=0;h<a.length;h++){let d=a[h],u=h<a.length-1?`${d}-`:d;e.push(u),n.push(!0),i.push("text"),r.push(t.starts[s]+c),c+=u.length}continue}}e.push(o),n.push(t.isWordLike[s]),i.push(t.kinds[s]),r.push(t.starts[s])}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:r}}function xT(t){let e=[],n=[],i=[],r=[],s=0;for(;s<t.len;){let o=[t.texts[s]],a=t.isWordLike[s],l=t.kinds[s],c=t.starts[s];if(l==="glue"){let h=[o[0]],d=c;for(s++;s<t.len&&t.kinds[s]==="glue";)h.push(t.texts[s]),s++;let u=$n(h);if(s<t.len&&t.kinds[s]==="text")o[0]=u,o.push(t.texts[s]),a=t.isWordLike[s],l="text",c=d,s++;else{e.push(u),n.push(!1),i.push("glue"),r.push(d);continue}}else s++;if(l==="text")for(;s<t.len&&t.kinds[s]==="glue";){let h=[];for(;s<t.len&&t.kinds[s]==="glue";)h.push(t.texts[s]),s++;let d=$n(h);if(s<t.len&&t.kinds[s]==="text"){o.push(d,t.texts[s]),a=a||t.isWordLike[s],s++;continue}o.push(d)}e.push($n(o)),n.push(a),i.push(l),r.push(c)}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:r}}function _T(t){let e=t.texts.slice(),n=t.isWordLike.slice(),i=t.kinds.slice(),r=t.starts.slice();for(let s=0;s<e.length-1;s++){if(i[s]!=="text"||i[s+1]!=="text"||!wn(e[s])||!wn(e[s+1]))continue;let o=j1(e[s]);o!==null&&(e[s]=o.head,e[s+1]=o.tail+e[s+1],r[s+1]=r[s]+o.head.length)}return{len:e.length,texts:e,isWordLike:n,kinds:i,starts:r}}function vT(t,e,n){let i=L1(),r=0,s=[],o=[],a=[],l=[],c=[],h=[],d=[],u=[],f=[],g=[],_=[],m=[];for(let S of i.segment(t))for(let w of sT(S.segment,S.isWordLike??!1,S.index,n)){let F=function(){h[T]!==null&&(o[T]=[tg(s,h,d,T)],h[T]=null),o[T].push(w.text),a[T]=a[T]||w.isWordLike,u[T]=u[T]||N,f[T]=f[T]||I,g[T]=k,_[T]=H,m[T]=ng(f[T],D)},x=w.kind==="text",A=Q1(w.text,w.isWordLike,w.kind),N=wn(w.text),I=Qm(w.text),D=Yo(w.text),k=kc(w.text),H=eT(w.text),T=r-1;e.carryCJKAfterClosingQuote&&x&&r>0&&l[T]==="text"&&N&&u[T]&&g[T]||x&&r>0&&l[T]==="text"&&W1(w.text)&&u[T]||x&&r>0&&l[T]==="text"&&_[T]?F():x&&r>0&&l[T]==="text"&&w.isWordLike&&I&&m[T]?(F(),a[T]=!0):A!==null&&r>0&&l[T]==="text"&&h[T]===A?d[T]=(d[T]??1)+1:x&&!w.isWordLike&&r>0&&l[T]==="text"&&!u[T]&&(G1(w.text)||w.text==="-"&&a[T])?F():(s[r]=w.text,o[r]=[w.text],a[r]=w.isWordLike,l[r]=w.kind,c[r]=w.start,h[r]=A,d[r]=A===null?0:1,u[r]=N,f[r]=I,g[r]=k,_[r]=H,m[r]=ng(I,D),r++)}for(let S=0;S<r;S++){if(h[S]!==null){s[S]=tg(s,h,d,S);continue}s[S]=$n(o[S])}for(let S=1;S<r;S++)l[S]==="text"&&!a[S]&&gd(s[S])&&l[S-1]==="text"&&!u[S-1]&&(s[S-1]+=s[S],a[S-1]=a[S-1]||a[S],s[S]="");let p=Array.from({length:r},()=>null),y=-1;for(let S=r-1;S>=0;S--){let w=s[S];if(w.length!==0){if(l[S]==="text"&&!a[S]&&y>=0&&l[y]==="text"&&($1(w)||w==="-"&&J1(s[y]))){let x=p[y]??[];x.push(w),p[y]=x,c[y]=c[S],s[S]="";continue}y=S}}for(let S=0;S<r;S++){let w=p[S];w!=null&&(s[S]=rT(w,s[S]))}let M=0;for(let S=0;S<r;S++){let w=s[S];w.length!==0&&(M!==S&&(s[M]=w,a[M]=a[S],l[M]=l[S],c[M]=c[S]),M++)}s.length=M,a.length=M,l.length=M,c.length=M;let E=xT({len:M,texts:s,isWordLike:a,kinds:l,starts:c}),R=_T(mT(gT(pT(uT(cT(E))))));for(let S=0;S<R.len-1;S++){let w=tT(R.texts[S]);w!==null&&(R.kinds[S]!=="space"&&R.kinds[S]!=="preserved-space"||R.kinds[S+1]!=="text"||!Qm(R.texts[S+1])||(R.texts[S]=w.space,R.isWordLike[S]=!1,R.kinds[S]=R.kinds[S]==="preserved-space"?"preserved-space":"space",R.texts[S+1]=w.marks+R.texts[S+1],R.starts[S+1]=R.starts[S]+w.space.length))}return R}function yT(t,e){if(t.len===0)return[];if(!e.preserveHardBreaks)return[{startSegmentIndex:0,endSegmentIndex:t.len,consumedEndSegmentIndex:t.len}];let n=[],i=0;for(let r=0;r<t.len;r++)t.kinds[r]==="hard-break"&&(n.push({startSegmentIndex:i,endSegmentIndex:r,consumedEndSegmentIndex:r+1}),i=r+1);return i<t.len&&n.push({startSegmentIndex:i,endSegmentIndex:t.len,consumedEndSegmentIndex:t.len}),n}function ST(t,e,n){if(e.len<=1)return e;let i=[],r=[],s=[],o=[],a=-1,l=!1;function c(u){i.push(e.texts[u]),r.push(e.isWordLike[u]),s.push("text"),o.push(e.starts[u])}function h(u,f){let g=!1;for(let p=u;p<f;p++)g=g||e.isWordLike[p];let _=e.starts[u],m=f<e.len?e.starts[f]:t.length;i.push(t.slice(_,m)),r.push(g),s.push("text"),o.push(_)}function d(u){if(!(a<0)){if(l)a+1===u?c(a):h(a,u);else for(let f=a;f<u;f++)c(f);a=-1,l=!1}}for(let u=0;u<e.len;u++){let f=e.texts[u],g=e.kinds[u];if(g==="text"){a>=0&&!pd(e.texts[u-1],n)&&d(u),a<0&&(a=u),l=l||wn(f);continue}d(u),i.push(f),r.push(e.isWordLike[u]),s.push(g),o.push(e.starts[u])}return d(e.len),{len:i.length,texts:i,isWordLike:r,kinds:s,starts:o}}function sg(t,e,n="normal",i="normal"){let r=R1(n),s=r.mode==="pre-wrap"?N1(t):I1(t);if(s.length===0)return{normalized:s,chunks:[],len:0,texts:[],isWordLike:[],kinds:[],starts:[]};let o=vT(s,e,r),a=i==="keep-all"?ST(s,o,e.breakKeepAllAfterPunctuation):o;return{normalized:s,chunks:yT(a,r),...a}}var Cs=null,og=new Map,ws=null,MT=96,bT=/\p{Emoji_Presentation}/u,ET=/[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u20E3]/u,xd=null,ag=new Map;function _d(){if(Cs!==null)return Cs;if(typeof OffscreenCanvas<"u")return Cs=new OffscreenCanvas(1,1).getContext("2d"),Cs;if(typeof document<"u")return Cs=document.createElement("canvas").getContext("2d"),Cs;throw new Error("Text measurement requires OffscreenCanvas or a DOM canvas context.")}function TT(t){let e=og.get(t);return e||(e=new Map,og.set(t,e)),e}function wi(t,e){let n=e.get(t);return n===void 0&&(n={width:_d().measureText(t).width,containsCJK:wn(t)},e.set(t,n)),n}function Rs(){if(ws!==null)return ws;if(typeof navigator>"u")return ws={lineFitEpsilon:.005,carryCJKAfterClosingQuote:!1,breakKeepAllAfterPunctuation:!0,preferPrefixWidthsForBreakableRuns:!1,preferEarlySoftHyphenBreak:!1},ws;let t=navigator.userAgent,n=navigator.vendor==="Apple Computer, Inc."&&t.includes("Safari/")&&!t.includes("Chrome/")&&!t.includes("Chromium/")&&!t.includes("CriOS/")&&!t.includes("FxiOS/")&&!t.includes("EdgiOS/"),i=t.includes("Chrome/")||t.includes("Chromium/")||t.includes("CriOS/")||t.includes("Edg/");return ws={lineFitEpsilon:n?1/64:.005,carryCJKAfterClosingQuote:i,breakKeepAllAfterPunctuation:!n,preferPrefixWidthsForBreakableRuns:n,preferEarlySoftHyphenBreak:n},ws}function AT(t){let e=t.match(/(\d+(?:\.\d+)?)\s*px/);return e?parseFloat(e[1]):16}function lg(){return xd===null&&(xd=new Intl.Segmenter(void 0,{granularity:"grapheme"})),xd}function CT(t){return bT.test(t)||t.includes("\uFE0F")}function cg(t){return ET.test(t)}function wT(t,e){let n=ag.get(t);if(n!==void 0)return n;let i=_d();i.font=t;let r=i.measureText("\u{1F600}").width;if(n=0,r>e+.5&&typeof document<"u"&&document.body!==null){let s=document.createElement("span");s.style.font=t,s.style.display="inline-block",s.style.visibility="hidden",s.style.position="absolute",s.textContent="\u{1F600}",document.body.appendChild(s);let o=s.getBoundingClientRect().width;document.body.removeChild(s),r-o>.5&&(n=r-o)}return ag.set(t,n),n}function RT(t){let e=0,n=lg();for(let i of n.segment(t))CT(i.segment)&&e++;return e}function IT(t,e){return e.emojiCount===void 0&&(e.emojiCount=RT(t)),e.emojiCount}function Qi(t,e,n){return n===0?e.width:e.width-IT(t,e)*n}function ug(t,e,n,i,r){if(e.breakableFitAdvances!==void 0&&e.breakableFitMode===r)return e.breakableFitAdvances;e.breakableFitMode=r;let s=lg(),o=[];for(let h of s.segment(t))o.push(h.segment);if(o.length<=1)return e.breakableFitAdvances=null,e.breakableFitAdvances;if(r==="sum-graphemes"){let h=[];for(let d of o){let u=wi(d,n);h.push(Qi(d,u,i))}return e.breakableFitAdvances=h,e.breakableFitAdvances}if(r==="pair-context"||o.length>MT){let h=[],d=null,u=0;for(let f of o){let g=wi(f,n),_=Qi(f,g,i);if(d===null)h.push(_);else{let m=d+f,p=wi(m,n);h.push(Qi(m,p,i)-u)}d=f,u=_}return e.breakableFitAdvances=h,e.breakableFitAdvances}let a=[],l="",c=0;for(let h of o){l+=h;let d=wi(l,n),u=Qi(l,d,i);a.push(u-c),c=u}return e.breakableFitAdvances=a,e.breakableFitAdvances}function hg(t,e){let n=_d();n.font=t;let i=TT(t),r=AT(t),s=e?wT(t,r):0;return{cache:i,fontSize:r,emojiCorrection:s}}function NT(t){return t==="space"||t==="zero-width-break"||t==="soft-hyphen"}function pg(t){return t==="space"||t==="preserved-space"||t==="tab"||t==="zero-width-break"||t==="soft-hyphen"}function mg(t,e,n=t.widths.length){for(;e<n;){let i=t.kinds[e];if(!NT(i))break;e++}return e}function PT(t,e){if(e<=0)return 0;let n=t%e;return Math.abs(n)<=1e-6?e:e-n}function LT(t,e,n){return t.letterSpacing!==0&&e&&t.spacingGraphemeCounts[n]>0?t.letterSpacing:0}function vd(t,e){return e===0?0:t+e}function FT(t,e){return t.letterSpacing!==0&&t.spacingGraphemeCounts[e]>0?t.letterSpacing:0}function DT(t,e,n,i,r){let s=e==="tab"?r+FT(t,n):t.lineEndFitAdvances[n];return vd(i,s)}function dg(t,e,n,i){let r=e==="tab"?0:t.lineEndFitAdvances[n];return vd(i,r)}function fg(t,e,n,i,r){let s=e==="tab"?r:t.lineEndPaintAdvances[n];return vd(i,s)}function OT(t,e,n){return t.letterSpacing!==0&&e?n+t.letterSpacing:n}function BT(t,e){return t.letterSpacing===0?e:e+t.letterSpacing}function UT(t,e,n,i,r){if(t.letterSpacing===0)return 0;if(r>0)return t.spacingGraphemeCounts[i]>0?t.letterSpacing:0;for(let s=i-1;s>=e;s--){let o=t.kinds[s];if(!(o==="space"||o==="zero-width-break"||o==="hard-break")){if(o==="soft-hyphen"){if(s===i-1)return 0;continue}return s===e&&n>0||t.spacingGraphemeCounts[s]>0?t.letterSpacing:0}}return 0}function kT(t,e,n,i,r,s){return e+UT(t,n,i,r,s)}function gg(t,e){return xg(t,e)}function VT(t,e,n){let{widths:i,kinds:r,breakableFitAdvances:s}=t;if(i.length===0)return 0;let a=Rs().lineFitEpsilon,l=e+a,c=0,h=0,d=!1,u=0,f=0,g=0,_=0,m=-1,p=0;function y(){m=-1,p=0}function M(A=g,N=_,I=h){c++,n?.(I,u,f,A,N),h=0,d=!1,y()}function E(A,N){d=!0,u=A,f=0,g=A+1,_=0,h=N}function R(A,N,I){d=!0,u=A,f=N,g=A,_=N+1,h=I}function S(A,N){if(!d){E(A,N);return}h+=N,g=A+1,_=0}function w(A,N){let I=s[A];for(let D=N;D<I.length;D++){let k=I[D];d?h+k>l?(M(),R(A,D,k)):(h+=k,g=A,_=D+1):R(A,D,k)}d&&g===A&&_===I.length&&(g=A+1,_=0)}let x=0;for(;x<i.length&&!(!d&&(x=mg(t,x),x>=i.length));){let A=i[x],N=r[x],I=pg(N);if(!d){A>l&&s[x]!==null?w(x,0):E(x,A),I&&(m=x+1,p=h-A),x++;continue}if(h+A>l){if(I){S(x,A),M(x+1,0,h-A),x++;continue}if(m>=0){if(g>m||g===m&&_>0){M();continue}M(m,0,p);continue}if(A>l&&s[x]!==null){M(),w(x,0),x++;continue}M();continue}S(x,A),I&&(m=x+1,p=h-A),x++}return d&&M(),c}function xg(t,e,n){if(t.simpleLineWalkFastPath)return VT(t,e,n);let{widths:i,kinds:r,breakableFitAdvances:s,discretionaryHyphenWidth:o,chunks:a}=t;if(i.length===0||a.length===0)return 0;let l=Rs(),c=l.lineFitEpsilon,h=e+c,d=0,u=0,f=!1,g=0,_=0,m=0,p=0,y=-1,M=0,E=0,R=null;function S(){y=-1,M=0,E=0,R=null}function w(){return R==="soft-hyphen"&&y===m&&p===0?E:u}function x(T=m,F=p,L){d++,n!==void 0&&n(kT(t,L??w(),g,_,T,F),g,_,T,F),u=0,f=!1,S()}function A(T,F){f=!0,g=T,_=0,m=T+1,p=0,u=F}function N(T,F,L){f=!0,g=T,_=F,m=T,p=F+1,u=L}function I(T,F){if(!f){A(T,F);return}u+=F,m=T+1,p=0}function D(T,F,L,$,q,ee){if(!F)return;let se=dg(t,T,L,q),xe=fg(t,T,L,q,$);y=L+1,M=u-ee+se,E=u-ee+xe,R=T}function k(T,F){let L=s[T];for(let $=F;$<L.length;$++){let q=L[$];if(!f)N(T,$,q);else{let ee=OT(t,!0,q),se=u+ee;BT(t,se)>h?(x(),N(T,$,q)):(u=se,m=T,p=$+1)}}f&&m===T&&p===L.length&&(m=T+1,p=0)}function H(T){d++,n?.(0,T.startSegmentIndex,0,T.consumedEndSegmentIndex,0),S()}for(let T=0;T<a.length;T++){let F=a[T];if(F.startSegmentIndex===F.endSegmentIndex){H(F);continue}f=!1,u=0,g=F.startSegmentIndex,_=0,m=F.startSegmentIndex,p=0,S();let L=F.startSegmentIndex;for(;L<F.endSegmentIndex&&!(!f&&(L=mg(t,L,F.endSegmentIndex),L>=F.endSegmentIndex));){let $=r[L],q=pg($),ee=LT(t,f,L),se=$==="tab"?PT(u+ee,t.tabStopAdvance):i[L],xe=ee+se,He=DT(t,$,L,ee,se);if($==="soft-hyphen"){f&&(m=L+1,p=0,y=L+1,M=u+o,E=u+o,R=$),L++;continue}if(!f){He>h&&s[L]!==null?k(L,0):A(L,se),D($,q,L,se,ee,xe),L++;continue}if(u+He>h){let De=u+dg(t,$,L,ee),J=u+fg(t,$,L,ee,se);if(R==="soft-hyphen"&&l.preferEarlySoftHyphenBreak&&M<=h){x(y,0,E);continue}if(q&&De<=h){I(L,xe),x(L+1,0,J),L++;continue}if(y>=0&&M<=h){if(m>y||m===y&&p>0){x();continue}let ue=y;x(ue,0,E),L=ue;continue}if(He>h&&s[L]!==null){x(),k(L,0),L++;continue}x();continue}I(L,xe),D($,q,L,se,ee,xe),L++}if(f){let $=y===F.consumedEndSegmentIndex?E:u;x(F.consumedEndSegmentIndex,0,$)}}return d}var yd=null;function vg(){return yd===null&&(yd=new Intl.Segmenter(void 0,{granularity:"grapheme"})),yd}function HT(t){return t?{widths:[],lineEndFitAdvances:[],lineEndPaintAdvances:[],kinds:[],simpleLineWalkFastPath:!0,segLevels:null,breakableFitAdvances:[],letterSpacing:0,spacingGraphemeCounts:[],discretionaryHyphenWidth:0,tabStopAdvance:0,chunks:[],segments:[]}:{widths:[],lineEndFitAdvances:[],lineEndPaintAdvances:[],kinds:[],simpleLineWalkFastPath:!0,segLevels:null,breakableFitAdvances:[],letterSpacing:0,spacingGraphemeCounts:[],discretionaryHyphenWidth:0,tabStopAdvance:0,chunks:[]}}function zT(t,e){let n=[],i=[],r=0,s=!1,o=!1,a=!1;function l(){i.length!==0&&(n.push({text:i.length===1?i[0]:i.join(""),start:r}),i=[],s=!1,o=!1,a=!1)}function c(d,u,f){i=[d],r=u,s=f,o=kc(d),a=qo.has(d)}function h(d,u){i.push(d),s=s||u;let f=kc(d);d.length===1&&ji.has(d)?o=o||f:o=f,a=!1}for(let d of vg().segment(t)){let u=d.segment,f=wn(u);if(i.length===0){c(u,d.index,f);continue}if(a||Oc.has(u)||ji.has(u)||e.carryCJKAfterClosingQuote&&f&&o){h(u,f);continue}if(!s&&!f){h(u,f);continue}l(),c(u,d.index,f)}return l(),n}function GT(t,e,n){if(e.length<=1)return e;let i=[],r=-1,s=!1;function o(l,c){let h=e[l].start,d=c<e.length?e[c].start:t.length;i.push({text:t.slice(h,d),start:h})}function a(l){if(!(r<0)){if(s)r+1===l?i.push(e[r]):o(r,l);else for(let c=r;c<l;c++)i.push(e[c]);r=-1,s=!1}}for(let l=0;l<e.length;l++){let c=e[l];r>=0&&!pd(e[l-1].text,n)&&a(l),r<0&&(r=l),s=s||wn(c.text)}return a(e.length),i}function _g(t,e){if(e==="zero-width-break"||e==="soft-hyphen"||e==="hard-break")return 0;if(e==="tab")return 1;let n=0,i=vg();for(let r of i.segment(t))n++;return n}function WT(t,e,n){return e>1?t+(e-1)*n:t}function $T(t,e,n,i,r){let s=Rs(),{cache:o,emojiCorrection:a}=hg(e,cg(t.normalized)),l=Qi("-",wi("-",o),a)+(r===0?0:r*2),h=Qi(" ",wi(" ",o),a)*8,d=r!==0;if(t.len===0)return HT(n);let u=[],f=[],g=[],_=[],m=t.chunks.length<=1&&!d,p=n?[]:null,y=[],M=[],E=n?[]:null,R=Array.from({length:t.len});function S(N,I,D,k,H,T,F,L){H!=="text"&&H!=="space"&&H!=="zero-width-break"&&(m=!1),u.push(I),f.push(D),g.push(k),_.push(H),p?.push(T),y.push(F),d&&M.push(L),E!==null&&E.push(N)}function w(N,I,D,k,H){let T=wi(N,o),F=d?_g(N,I):0,L=WT(Qi(N,T,a),F,r),$=I==="space"||I==="preserved-space"||I==="zero-width-break"?0:L,q=$===0?0:$+(F>0?r:0),ee=I==="space"||I==="zero-width-break"?0:L;if(H&&k&&N.length>1){let se="sum-graphemes";r!==0?se="segment-prefixes":Xo(N)?se="pair-context":s.preferPrefixWidthsForBreakableRuns&&(se="segment-prefixes");let xe=ug(N,T,o,a,se);S(N,L,q,ee,I,D,xe,F);return}S(N,L,q,ee,I,D,null,F)}for(let N=0;N<t.len;N++){R[N]=u.length;let I=t.texts[N],D=t.isWordLike[N],k=t.kinds[N],H=t.starts[N];if(k==="soft-hyphen"){S(I,0,l,l,k,H,null,0);continue}if(k==="hard-break"){S(I,0,0,0,k,H,null,0);continue}if(k==="tab"){S(I,0,0,0,k,H,null,d?_g(I,k):0);continue}let T=wi(I,o);if(k==="text"&&T.containsCJK){let F=zT(I,s),L=i==="keep-all"?GT(I,F,s.breakKeepAllAfterPunctuation):F;for(let $=0;$<L.length;$++){let q=L[$];w(q.text,"text",H+q.start,D,i==="keep-all"||!wn(q.text))}continue}w(I,k,H,D,!0)}let x=XT(t.chunks,R,u.length),A=p===null?null:jm(t.normalized,p);return E!==null?{widths:u,lineEndFitAdvances:f,lineEndPaintAdvances:g,kinds:_,simpleLineWalkFastPath:m,segLevels:A,breakableFitAdvances:y,letterSpacing:r,spacingGraphemeCounts:M,discretionaryHyphenWidth:l,tabStopAdvance:h,chunks:x,segments:E}:{widths:u,lineEndFitAdvances:f,lineEndPaintAdvances:g,kinds:_,simpleLineWalkFastPath:m,segLevels:A,breakableFitAdvances:y,letterSpacing:r,spacingGraphemeCounts:M,discretionaryHyphenWidth:l,tabStopAdvance:h,chunks:x}}function XT(t,e,n){let i=[];for(let r=0;r<t.length;r++){let s=t[r],o=s.startSegmentIndex<e.length?e[s.startSegmentIndex]:n,a=s.endSegmentIndex<e.length?e[s.endSegmentIndex]:n,l=s.consumedEndSegmentIndex<e.length?e[s.consumedEndSegmentIndex]:n;i.push({startSegmentIndex:o,endSegmentIndex:a,consumedEndSegmentIndex:l})}return i}function qT(t,e,n,i){let r=i?.wordBreak??"normal",s=i?.letterSpacing??0,o=sg(t,Rs(),i?.whiteSpace,r);return $T(o,e,n,r,s)}function yg(t,e,n){return qT(t,e,!1,n)}function Sg(t,e,n){let i=gg(t,e);return{lineCount:i,height:i*n}}var Mg={type:"change"},Md={type:"start"},Eg={type:"end"},Vc=new Ti,bg=new tn,YT=Math.cos(70*bs.DEG2RAD),Ot=new P,on=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sd=1e-6,Hc=class extends Po{constructor(e,n=null){super(e,n),this.state=ct.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zn.ROTATE,MIDDLE:zn.DOLLY,RIGHT:zn.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new fn,this._lastTargetPosition=new P,this._quat=new fn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _s,this._sphericalDelta=new _s,this._scale=1,this._panOffset=new P,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new P,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=KT.bind(this),this._onPointerDown=ZT.bind(this),this._onPointerUp=JT.bind(this),this._onContextMenu=rA.bind(this),this._onMouseWheel=eA.bind(this),this._onKeyDown=tA.bind(this),this._onTouchStart=nA.bind(this),this._onTouchMove=iA.bind(this),this._onMouseDown=jT.bind(this),this._onMouseMove=QT.bind(this),this._interceptControlDown=sA.bind(this),this._interceptControlUp=oA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mg),this.update(),this.state=ct.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let n=this.object.position;Ot.copy(n).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ot.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vc.origin.copy(this.object.position),Vc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vc.direction))<YT?this.object.lookAt(this.target):(bg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vc.intersectPlane(bg,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sd||this._lastTargetPosition.distanceToSquared(this.target)>Sd?(this.dispatchEvent(Mg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){let n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ot.setFromMatrixColumn(n,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,n){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(n,1):(Ot.setFromMatrixColumn(n,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ot.copy(r).sub(this.target);let s=Ot.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new we,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){let n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function ZT(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function KT(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function JT(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Eg),this.state=ct.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function jT(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ct.DOLLY;break;case zn.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}break;case zn.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Md)}function QT(t){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function eA(t){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(t.preventDefault(),this.dispatchEvent(Md),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Eg))}function tA(t){this.enabled!==!1&&this._handleKeyDown(t)}function nA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ct.TOUCH_ROTATE;break;case Xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ct.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Md)}function iA(t){switch(this._trackPointer(t),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ct.NONE}}function rA(t){this.enabled!==!1&&t.preventDefault()}function sA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zc(t){let e=new Date(t);return Number.isNaN(e.valueOf())?"":e.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Tg(t){return t>=1e3?`${(t/1e3).toFixed(2)}s`:`${t}ms`}function Ag(t){return t<1e3?`${t} ms`:`${(t/1e3).toFixed(1)} s`}function xn(t){let e=t.delta>0?"+":"";return`${t.left} -> ${t.right} (${e}${t.delta})`}function br(t){return t==null?"n/a":`${t.toFixed(0)}%`}function re(t,e="n/a"){return t==null||!Number.isFinite(t)?e:t.toLocaleString()}function ui(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Cg(t,e=0){return e>0?`${t} JSONL records + ${Is(e)} pending`:`${t} JSONL records`}function Is(t){return t>=1024*1024?`${(t/(1024*1024)).toFixed(1)} MB`:t>=1024?`${Math.ceil(t/1024)} KB`:`${t} B`}function Qt(t){if(!t)return"";let e=t.split(/[\\/]/);return e.length<=4?t:`${e.at(-4)}/${e.at(-3)}/${e.at(-2)}/${e.at(-1)}`}var Zo={prompt:3011583,local:16761415,patch:13134847,browser:3800981,web:5082623,coordination:16734418,tool:10467011,assistant:16317439,message:16317439,error:16729953,long:16742938,file:12058429,diff:49832,artifact:9059839,compaction:16752362,skill:16449280,subagent:11568383,"subagent-result":14862079,"file-add":12058429,"file-update":49832,"file-delete":16729953,"file-move":16742938};var aA=/(?<credential>\b(?<credentialKey>[A-Za-z0-9_-]*(?:access[_-]?token|api[_-]?key|token|secret|password|passwd|authorization|auth|session|cookie)[A-Za-z0-9_-]*)\s*(?<credentialSeparator>[:=])\s*\[REDACTED\])|(?<bearer>\bBearer\s+\[REDACTED\])|(?<structured>\[REDACTED:(?<structuredKind>[A-Za-z0-9_-]+)(?:\s+length:(?<structuredLength>\d+))?\])|(?<pathSentinel>\[PATH:(?<pathLeaf>[^\]]*)\])|(?<sentinel>\[(?<sentinelKind>REDACTED_IMAGE_PAYLOAD|REDACTED_BASE64|REDACTED_PRIVATE_TEXT)\])|(?<generic>\[REDACTED\])/gi;function Gc(t){let e=String(t??"");if(!e)return[];let n=[],i=0;for(let r of e.matchAll(aA)){let s=r.index??0;s>i&&n.push({kind:"text",text:e.slice(i,s)}),n.push(cA(r)),i=s+r[0].length}return i<e.length&&n.push({kind:"text",text:e.slice(i)}),n.length?n:[{kind:"text",text:e}]}function lA(t){let e=new Map;return Gc(t).forEach(n=>{if(n.kind!=="redaction"||!n.category)return;let i=n.length??null,r=n.key??null,s=`${n.category}:${i??""}:${r??""}`,o=e.get(s);if(o){o.count+=1,o.label=wg(o);return}let a={category:n.category,count:1,length:i,key:r,label:""};a.label=wg(a),e.set(s,a)}),Array.from(e.values()).sort((n,i)=>Rg(n.category)-Rg(i.category))}function bd(t){let e=lA(t);return e.length?`Redactions: ${e.map(n=>n.label).join("; ")}`:null}function cA(t){let e=t.groups??{};if(e.credential){let n=dA(e.credentialKey);return er("credential",`${n} hidden`,null,n)}if(e.bearer)return er("credential","Bearer token hidden",null,"token");if(e.structured){let n=uA(e.structuredKind),i=pA(e.structuredLength);return er(n,hA(n,i),i,null)}return e.pathSentinel?er("path","Path hidden",null,null):e.sentinelKind==="REDACTED_IMAGE_PAYLOAD"?er("image","Image disabled",null,null):e.sentinelKind==="REDACTED_BASE64"?er("base64","Base64 credential hidden",null,null):e.sentinelKind==="REDACTED_PRIVATE_TEXT"?er("private","Private text redacted",null,null):er("generic","Value redacted",null,null)}function er(t,e,n,i){return{kind:"redaction",text:e,category:t,length:n,key:i}}function uA(t){let e=String(t??"").toLowerCase();return e.includes("path")||e.includes("file")||e.includes("cwd")?"path":e.includes("image")||e.includes("screenshot")?"image":e.includes("token")||e.includes("secret")||e.includes("password")||e.includes("credential")||e.includes("auth")?"credential":e.includes("base64")?"base64":e.includes("private")||e.includes("prompt")?"private":e.includes("content")||e.includes("text")||e.includes("body")||e.includes("output")?"content":"generic"}function hA(t,e){let n=Ig(e);return t==="content"?`Content redacted${n}`:t==="path"?`Path hidden${n}`:t==="image"?"Image disabled":t==="credential"?"Credential hidden":t==="base64"?"Base64 credential hidden":t==="private"?`Private text redacted${n}`:`Value redacted${n}`}function wg(t){let e=t.count,n=Ig(t.length);if(t.category==="content")return`${e} content redacted${n}`;if(t.category==="path")return`${e} ${e===1?"path":"paths"} hidden${n}`;if(t.category==="image")return`${e} ${e===1?"image":"images"} disabled`;if(t.category==="credential"){let i=t.key||"credential";return`${e} ${e===1?i:fA(i)} hidden`}return t.category==="base64"?`${e} base64 ${e===1?"credential":"credentials"} hidden`:t.category==="private"?`${e} private ${e===1?"text":"text blocks"} redacted${n}`:`${e} ${e===1?"value":"values"} redacted${n}`}function dA(t){let e=String(t??"credential").replace(/[^A-Za-z0-9_-]+/g,"_").toLowerCase();return!e||e==="authorization"||e==="auth"?"credential":/api[_-]?key/.test(e)?"API key":e.includes("token")?"token":e.includes("password")||e.includes("passwd")?"password":e.includes("secret")?"secret":e.includes("cookie")||e.includes("session")?"session credential":e}function fA(t){return t.endsWith("s")?t:t.includes(" ")?`${t}s`:`${t}s`}function pA(t){let e=Number(t);return Number.isFinite(e)&&e>=0?e:null}function Ig(t){return t===null?"":` \xB7 ${t} ${t===1?"char":"chars"}`}function Rg(t){return["content","private","path","image","credential","base64","generic"].indexOf(t)}var mA=/([?&])((?:access_)?token|api[_-]?key|secret|password|passwd|auth|session|cookie)=([^&#\s]+)/gi,gA=/\b((?:access_)?token|api[_-]?key|secret|password|passwd|cookie|authorization)\s*([:=])\s*("[^"]*"|'[^']*'|[^\s|;,]+)/gi,xA=/\bBearer\s+[A-Za-z0-9._~+/=-]{6,}/gi,_A=/data:image\/[a-z0-9.+-]+;base64,[A-Za-z0-9+/=]+/gi,vA=/\b[A-Za-z0-9+/]{32,}={0,2}\b/g,yA=/\b[A-Z0-9_]*(?:SECRET|PASSWORD|TOKEN|PRIVATE|COOKIE|DO_NOT_COPY)[A-Z0-9_]*\b/g,SA=/[A-Za-z]:[\\/]+Users[\\/]+[^\s|"'<>]+/g,MA=/\/(?:home|Users)\/[^\s|"'<>]+/g;function hi(t){let e=Dg(t);return e?e.replace(_A,"[REDACTED_IMAGE_PAYLOAD]").replace(mA,(i,r,s)=>`${r}${s}=[REDACTED]`).replace(xA,"Bearer [REDACTED]").replace(gA,(i,r,s)=>`${r}${s===":"?": ":"="}[REDACTED]`).replace(SA,Ng).replace(MA,Ng).replace(vA,"[REDACTED_BASE64]").replace(yA,"[REDACTED_PRIVATE_TEXT]"):""}function Pg(t){let e=[Xn(t.role),Xn(t.eventType),t.toolName?`tool: ${Xn(t.toolName)}`:"",t.filePath?`path: ${hi(t.filePath)}`:"",t.status?`status: ${Xn(t.status)}`:""].filter(Boolean),n=Dg(t.rawSummary);if(n){let i=hi(n);e.push(n===i?"detail: omitted for safe sharing":"detail: redacted for safe sharing")}return e.length?e.join("; "):"event summary unavailable"}function Lg(t){return["Perlustron copy-safe reference",t.source?`source: ${Xn(t.source)}`:null,t.lineNumber!==null&&t.lineNumber!==void 0?`line: ${t.lineNumber}`:null,t.eventIndex!==null&&t.eventIndex!==void 0?`event_index: ${t.eventIndex}`:null,t.kind?`kind: ${Xn(t.kind)}`:null,t.summary?`summary: ${hi(t.summary)}`:null,`perlustron: parser ${Xn(t.parserVersion||"unknown")} / schema ${Xn(t.schemaVersion||"unknown")}`,"caveat: copy-safe reference only; review raw logs separately before sharing raw content"].filter(e=>!!e).join(`
`)}function Fg(t){let e=t.rawLogsSafeToShare?"marked safe by current scan; still review before forwarding":"requires human review before sharing";return["Perlustron copy-safe share summary",t.source?`source: ${Xn(t.source)}`:null,t.sessionName?`session: ${hi(t.sessionName)}`:null,`activity: ${re(t.totalTurns,"unknown")} turns / ${re(t.callCount,"unknown")} tool calls / ${re(t.fileChangeCount,"unknown")} file changes`,t.latestEventIndex!==null&&t.latestEventIndex!==void 0?`latest_event_index: ${t.latestEventIndex}`:null,t.cliContext?`cli: ${hi(t.cliContext)}`:null,`perlustron: parser ${Xn(t.parserVersion||"unknown")} / schema ${Xn(t.schemaVersion||"unknown")}`,`raw_logs: ${e}`,`raw_caution: ${hi(t.rawLogCaution||"Raw logs can contain prompts, paths, tool output, images, and credentials.")}`,"safe_surfaces: sanitized graph/export/copy-safe references are safer than raw logs, but still require human judgment before external sharing",`sanitized_graph: ${hi(t.sanitizedGraphNote||"Use sanitized graph/export surfaces for review-friendly sharing.")}`,`redactions: ${re(t.redactedFieldCount,"unknown")} fields; images: ${re(t.imageCount,"unknown")}; api_token_required: ${t.apiTokenRequired?"yes (value not copied)":"no"}`].filter(n=>!!n).join(`
`)}function Dg(t){return String(t??"").replace(/\s+/g," ").trim()}function Xn(t){return hi(t)}function Ng(t){let e=t.replace(/\\/g,"/").split("/").filter(Boolean);return`[PATH:${e.length?e[e.length-1]:"path"}]`}function Og(t){let e=new Date(t);return Number.isNaN(e.valueOf())?t:e.toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Bg(t){let e=t.replace(/^\s{0,3}#{1,6}\s+/,"").trim();return(e?e.replace(/:$/,"").trim():t)||t}function Ug(t){if(t.type==="call"){let e=Ko(t.source.name);if(e)return e.toUpperCase()}return t.kind.replace(/[-_]+/g," ").toUpperCase()}function Ed(t){return t.type==="prompt"?"":Td(t)}function Td(t){return t.type==="call"?Ko(t.source.name)??t.title:t.title}function Ad(t){return t.type==="prompt"?`PROMPT ${t.promptIndex+1}`:t.type==="compaction"?`CHECKPOINT ${t.eventIndex}`:t.type==="fileChange"?`FILE ${t.eventIndex}`:t.type==="message"?`ASSISTANT ${t.eventIndex}`:t.type==="call"&&bA(t.source.name)?`SUBAGENT TURN ${t.eventIndex}`:`TURN ${t.eventIndex}`}function Ko(t){return t==="spawn_agent"?"subagent launch":t==="subagent"?"subagent result":t==="subagent.prompt"?"subagent prompt":t==="subagent.message"?"subagent message":t==="subagent.file"?"subagent file":t==="subagent.compaction"?"subagent compaction":t==="subagent.more"?"subagent overflow":null}function bA(t){return t.startsWith("subagent.")&&t!=="subagent"}function kg(t){let{title:e,payload:n,detail:i}=t,r=`${i} Insights remains available and Raw is updated with the selected evidence payload.`;t.setRawModePayload(n),t.modePanelSummary.textContent="Evidence fallback";let s=t.modeCard("Evidence Fallback",[r]);s.classList.add("mode-notice");let o=document.createElement("div");if(o.className="mode-row-actions",o.append(t.modeButton("Open Insights",()=>{t.selectAppMode("insights"),t.setRawModePayload(n)}),t.modeButton("Audit Raw",()=>{t.selectAppMode("raw"),t.showEvidenceFallback(e,n,i)})),s.append(o),t.activeAppMode==="raw"){t.renderRawPayload(n??{},s);return}t.cleanupModePanelRender(),t.modePanelContent.prepend(s)}function Vg(t){let e=t.destination??"raw";if(t.setFocusedEvidenceLine(t.lineNumber??null),t.lineNumber){let i=t.modeTimelineRows().find(r=>r.lineNumber===t.lineNumber);if(i){t.inspectModeRow(i),i.node?t.openSelectedEventMode(e):e!=="map"&&(t.selectAppMode(e),t.setRawModePayload(i.source));return}}e!=="map"&&t.selectAppMode(e);let n=t.lineNumber?`Line ${t.lineNumber} is logged for ${t.title}, but no rendered Timeline or Transcript row is available.`:"No event line is logged for this insight or evidence reference; showing fallback payload instead.";t.showEvidenceFallback(t.title,t.payload,n)}var Hg="http://www.w3.org/2000/svg",EA={codex:["M4 7l5 5-5 5","M12 17h8"],source:["M5 6h14","M5 12h14","M5 18h14","M8 4v4","M16 10v4","M11 16v4"],git:["M6 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M6 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M6 6v8a4 4 0 0 0 4 4h6","M6 10h6a4 4 0 0 1 4 4v4"],policy:["M12 3l7 4v5c0 4.5-2.8 7.4-7 9-4.2-1.6-7-4.5-7-9V7l7-4z","M9 12l2 2 4-5"],model:["M8 8h8v8H8z","M4 10h4","M4 14h4","M16 10h4","M16 14h4","M10 4v4","M14 4v4","M10 16v4","M14 16v4"],tools:["M14.7 6.3l3-3a2.1 2.1 0 0 1 3 3l-3 3","M13 8l3 3","M3 21l8-8","M9 11l4 4"]};function zg(t,e){let n=(e?.dynamicTools||[]).map(s=>s.namespace?`${s.namespace}.${s.name}`:s.name).slice(0,6),i=[{label:"Codex",detail:[e?.originator,e?.cliVersion].filter(Boolean).join(" "),icon:"codex"},{label:"Source",detail:[e?.source,e?.modelProvider].filter(Boolean).join(" / "),icon:"source"},{label:"Git",detail:CA(e?.gitCommitHash)||Qt(e?.repositoryUrl||""),icon:"git"},{label:"Policy",detail:[e?.approvalPolicy,e?.sandbox].filter(Boolean).join(" / "),icon:"policy"},{label:"Model",detail:e?.model||"",icon:"model"},{label:"Tools",detail:n.join(", "),icon:"tools"}].filter(s=>s.detail),r=document.createDocumentFragment();i.forEach(s=>r.append(TA(s))),t.replaceChildren(r)}function TA({label:t,detail:e,icon:n}){let i=document.createElement("div");i.className="root-row metadata-row",i.title=e;let r=AA(n),s=document.createElement("span");s.className="root-copy";let o=document.createElement("strong");o.textContent=t;let a=document.createElement("small");return a.textContent=e,s.append(o,a),i.append(r,s),i}function AA(t){let e=document.createElement("span");e.className=`root-icon ${t}`,e.setAttribute("aria-hidden","true");let n=document.createElementNS(Hg,"svg");n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("focusable","false"),n.setAttribute("fill","none"),n.setAttribute("stroke","currentColor"),n.setAttribute("stroke-width","2"),n.setAttribute("stroke-linecap","round"),n.setAttribute("stroke-linejoin","round");for(let i of EA[t]){let r=document.createElementNS(Hg,"path");r.setAttribute("d",i),n.append(r)}return e.append(n),e}function CA(t){return t?t.slice(0,10):""}var wA=5;function $g(t){let{graph:e,modePanelSummary:n,modePanelContent:i,modeCard:r,modeParagraph:s,modeButton:o,selectAppMode:a}=t;if(!e){n.textContent="Waiting for session data",i.replaceChildren(t.modeEmpty("Waiting for session data."));return}let l=e,c=l.privacySummary,h=l.shareabilitySummary,d=l.tokenTelemetry,u=l.parserHealth,f=l.ui.sessionName||l.cwd?.split(/[\\/]/).filter(Boolean).at(-1)||`${Cd(l.source)} session`,g=h.rawLogsSafeToShare?"Raw logs marked safe to share":"Raw logs require review before sharing";n.textContent=`${g} - ${zA(d)}`;let _=document.createElement("div");_.className="summary-shell";let m=RA(l,g,t),p=r("Session Summary");p.classList.add("summary-hero"),p.append(s(`${f} is a ${Cd(l.source)} trace with ${Er(l.ui.totalTurns,"turn")}, ${Er(l.totals.callCount,"tool call")}, and ${Er(l.totals.fileChangeCount,"file change")}.`),s(`${g}. Sanitized graph/export and copy-safe references reduce exposure compared with raw logs, but they still require human judgment before sharing.`));let y=document.createElement("div");y.className="summary-triage";let M=r("What Happened",[`${Er(l.ui.totalTurns,"turn")} across ${Er(l.totals.promptCount,"prompt")}`,`${Er(l.totals.completedCallCount,"completed tool call")}; ${Er(l.totals.fileChangeCount,"file change")}`,`${re(u.unknownEventCount)} unknown and ${re(u.malformedLineCount)} malformed parser records`]),E=document.createElement("div");E.className="mode-actions",E.append(o("Open Timeline",()=>a("timeline")),o("Read Transcript",()=>a("transcript"))),M.append(E);let R=r("Safe To Share",[g,h.sanitizedGraphNote||"Sanitized graph data is intended for UI and report sharing after review.",c.apiTokenRequired?"Local API token is required for browser/API access; token value is not shown.":"No local API token required by this run."]),S=document.createElement("div");S.className="mode-actions",S.append(o("Copy Share Summary",()=>t.copyText(t.copySafeShareSummary(),"Copy-safe share summary copied")),o("Open Export",()=>a("export")),o("Audit Raw",()=>a("raw"))),R.append(S),y.append(M,OA(l.insights,t),R);let w=document.createElement("div");w.className="summary-shell-grid",w.append(Ns("Session",[["Source",Cd(l.source)],["Session",f],["Model",l.metadata.model||l.metadata.modelProvider||"unknown"],["CLI",[l.metadata.originator,l.metadata.cliVersion].filter(Boolean).join(" ")||"unknown"],["Records",Cg(l.lineCount,l.pendingBytes)],["Size",Is(l.byteLength)],["Modified",zc(l.lastModifiedAt)||"unknown"],["Path",Qt(l.sessionPath)||l.sessionPath]],t),Ns("Activity",[["Prompts",re(l.totals.promptCount)],["Turns",re(l.ui.totalTurns)],["Tool calls",`${re(l.totals.completedCallCount)} / ${re(l.totals.callCount)} completed`],["Assistant messages",re(l.totals.assistantMessageCount)],["File changes",re(l.totals.fileChangeCount)],["Compactions",re(l.totals.compactionCount)],["Dynamic tools",l.metadata.dynamicTools.length?l.metadata.dynamicTools.map(x=>x.name).slice(0,5).join(", "):"none logged"]],t),Ns("Privacy",[["Mode",c.privacyMode||"unknown"],["Redaction profile",c.redactionProfile||"default"],["API token required",c.apiTokenRequired?"yes":"no"],["Images",c.imageRouteBehavior||"not logged"],["Telemetry",c.noTelemetry?"disabled":"check deployment settings"],["Third-party uploads",c.noThirdPartyUploads?"disabled":"check before sharing"]],t),Ns("Shareability",[["Raw logs",h.rawLogsSafeToShare?"safe to share":"review/redact first"],["Raw caution",h.rawLogCaution||"Review prompts, paths, and tool output before sharing raw logs."],["Sanitized graph",h.sanitizedGraphNote||"Use sanitized graph/export surfaces for sharing."],["Redacted fields",re(u.redactedFieldCount)],["Images",re(u.imageCount)]],t),Ns("Parser Health",HA(u,re),t),Ns("Token Context",[["Telemetry",d.latestTotalTokens?"available":"not logged"],["Latest tokens",re(d.latestTotalTokens)],["Context window",re(d.contextWindow)],["Context pressure",br(d.latestContextPercent)],["Primary rate limit",br(d.primaryRateLimitPercent)],["Secondary rate limit",br(d.secondaryRateLimitPercent)]],t)),_.append(m,p,y,w),(u.warnings.length||l.insights.warnings.length)&&_.append(r("Warnings",[...u.warnings,...l.insights.warnings].slice(0,10))),i.replaceChildren(_)}function RA(t,e,n){let i=t.insights.inspectionQueue[0]??null,r=PA(t.insights.inspectionQueue)??i,s=n.modeCard("Forensic Verdict");s.classList.add("summary-verdict");let o=document.createElement("div");o.className="summary-verdict-grid",o.append(Jo("Outcome",IA(t),n),Jo("First critical event",NA(t,i),n),Jo("Highest-confidence finding",LA(r),n),Jo("Safe-share state",FA(t,e),n),Jo("Inspect next",DA(i),n));let a=i?n.modeButton("Start Inspect-First Review",()=>Wc(i,"timeline",n)):n.modeButton("Review Parser Health",()=>n.selectAppMode("health"));a.classList.add("summary-primary-cta");let l=document.createElement("div");return l.className="summary-verdict-actions",l.append(a),s.append(o,l),s}function Jo(t,e,n){let i=document.createElement("div");i.className="summary-verdict-field";let r=document.createElement("strong");r.textContent=t;let s=document.createElement("span");return n.setReadableRedactionText(s,e),i.append(r,s),i}function IA(t){let{insights:e,parserHealth:n}=t;if(e.failureChain){let r=e.failureChain.finalOutcome||e.failureChain.firstLoggedError.title;return`Failed - ${Rd(r,132)}`}let i=e.repeatedPatterns.find(r=>r.patternType!=="file_activity");return i?`Looped - ${re(i.count)} repeated ${i.key} records`:e.contextPressure.highContextMarkers.length||e.contextPressure.compactionMarkers.length?`Drifted - ${e.contextPressure.status||"context pressure"}`:n.unknownEventCount||n.malformedLineCount?`Unknown - ${re(n.unknownEventCount)} unknown / ${re(n.malformedLineCount)} malformed parser records`:t.isLive?"Live - session is still receiving events":"Completed - no failure chain detected"}function NA(t,e){let n=t.insights.failureChain?.firstLoggedError;if(n)return`${n.title} at line ${re(n.lineNumber)}`;if(e){let r=jo(e);return r?`${e.title} at line ${re(r)}`:`${e.title} (no event line logged)`}let i=t.insights.warnings[0]||t.parserHealth.warnings[0];return i?Rd(i,132):"No critical or suspicious event detected"}function PA(t){return t.reduce((e,n)=>{if(!e)return n;let i=Gg(n.confidence),r=Gg(e.confidence);return i<r||i===r&&Wg(n.severity)<Wg(e.severity)?n:e},null)}function Gg(t){switch(t.toLowerCase()){case"direct":case"high":return 0;case"strong heuristic":case"medium":return 1;case"weak heuristic":case"low":return 2;default:return 3}}function Wg(t){switch(t.toLowerCase()){case"critical":case"high":return 0;case"warning":case"medium":return 1;case"info":case"low":return 2;default:return 3}}function LA(t){if(!t)return"No queued high-confidence finding; use parser health for audit context.";let e=Rd(t.redactionSafeSummary||t.summary,132);return`${t.title} (${t.confidence} confidence, ${t.severity} severity) - ${e}`}function FA(t,e){let n=t.privacySummary.apiTokenRequired?"API token required; token value hidden":"No API token requirement logged";return`${e}; ${n}`}function DA(t){return t?`${t.title} - ${Xg(t)}`:"No queued finding; review Parser Health only if the audit needs raw parser details."}function Xg(t){return t.title==="First logged error-like event"?"Start here because this is the earliest logged event that looked broken.":t.title==="Suspicious tool call"?"One or more tool records look failed, missing, long-running, empty, or error-like.":t.title==="Repeated tool-call pattern"?"Similar tool calls repeated, which can point to retry loops or stuck local work.":t.title==="Approval or sandbox friction"?"Permission, sandbox, or approval friction can explain blocked or retried work.":t.title==="Context pressure marker"?"Context pressure or compaction markers can explain abrupt summaries or degraded continuity.":t.title==="Unknown or malformed log data"?"Parser gaps can hide details from normalized views, so audit raw or Health output.":t.title==="File impact"?"Use this as audit context for touched files, not as a root-cause claim.":"Use this as a lead into the raw log evidence, not as a root-cause verdict."}function Rd(t,e){let n=t.replace(/::git-[^}]+}/g,"").replace(/\s+/g," ").trim();return n?n.length>e?`${n.slice(0,Math.max(0,e-3)).trimEnd()}...`:n:"none logged"}function Er(t,e,n=`${e}s`){return`${re(t)} ${t===1?e:n}`}function Ns(t,e,n){let i=document.createElement("article");i.className="summary-fact";let r=document.createElement("h3");r.textContent=t;let s=document.createElement("dl");return e.forEach(([o,a])=>{let l=document.createElement("dt");l.textContent=o;let c=document.createElement("dd");n.setReadableRedactionText(c,a),s.append(l,c)}),i.append(r,s),i}function OA(t,e){let n=e.modeCard("Inspect First");n.classList.add("summary-insights");let i=t.inspectionQueue.length,r=t.inspectionQueue.slice(0,wA);if(!i)return n.append(e.modeParagraph("No high-priority findings detected. Parser health and raw inspection remain available for audit."),wd([e.modeButton("Open Insights",()=>e.selectAppMode("insights")),e.modeButton("Audit Raw",()=>e.selectAppMode("raw"))])),n;let s=e.modeParagraph(i>r.length?`Showing the first ${re(r.length)} of ${re(i)} queued findings for inspect-first review.`:"Top queued findings are ready for inspect-first review; each row exposes one evidence drawer that keeps Timeline, Transcript, Raw JSON, and Insights reachable."),o=document.createElement("div");return o.className="mode-linked-list",r.forEach((a,l)=>{let c=document.createElement("article");c.className=`mode-linked-row severity-${a.severity}`;let h=document.createElement("div"),d=document.createElement("strong");d.textContent=`${l+1}. ${a.title}`;let u=document.createElement("small");u.textContent=kA(a);let f=document.createElement("p");e.setReadableRedactionText(f,a.redactionSafeSummary||a.summary),h.append(d,u,f);let g=`summary-evidence-drawer-${l+1}`,_=`${g}-trigger`,m=BA(a,g,_,e),p=e.modeButton("View Evidence",()=>{let M=m.hidden;M&&UA(o,m),qg(p,m,M)});p.id=_,p.classList.add("summary-evidence-trigger"),p.setAttribute("aria-controls",g),p.setAttribute("aria-expanded","false");let y=wd([p]);c.append(h,y,m),o.append(c)}),n.append(s,o),n}function wd(t){let e=document.createElement("div");return e.className="mode-row-actions",e.append(...t),e}function BA(t,e,n,i){let r=document.createElement("section");r.id=e,r.className="summary-evidence-drawer",r.hidden=!0,r.tabIndex=-1,r.dataset.triggerId=n,r.setAttribute("role","region"),r.setAttribute("aria-labelledby",`${e}-title`);let s=document.createElement("h4");s.id=`${e}-title`,s.textContent=`Evidence drawer: ${t.title}`;let o=i.modeParagraph("Start with the summary here, then open the focused evidence surface without losing this finding as context."),a=document.createElement("section");a.className="summary-evidence-section",a.setAttribute("aria-labelledby",`${e}-summary`);let l=document.createElement("h5");l.id=`${e}-summary`,l.textContent="Summary";let c=i.modeParagraph(t.redactionSafeSummary||t.summary),h=document.createElement("dl");h.className="summary-evidence-meta";let d=jo(t);[["Severity",t.severity],["Confidence",t.confidence],["Directness",t.directness],["Line",d?`line ${d}`:"no event line logged"],["Events",t.eventIds.length?`${re(t.eventIds.length)} linked`:"no linked event ids"]].forEach(([E,R])=>{let S=document.createElement("dt");S.textContent=E;let w=document.createElement("dd");i.setReadableRedactionText(w,R),h.append(S,w)}),a.append(l,c,h);let u=document.createElement("section");u.className="summary-evidence-section",u.setAttribute("aria-labelledby",`${e}-why`);let f=document.createElement("h5");f.id=`${e}-why`,f.textContent="Why this finding?";let g=i.modeParagraph(""),_=t.explanation||Xg(t);i.setReadableRedactionText(g,_),u.append(f,g);let m=document.createElement("section");m.className="summary-evidence-section",m.setAttribute("aria-labelledby",`${e}-surfaces`);let p=document.createElement("h5");p.id=`${e}-surfaces`,p.textContent="Evidence surfaces";let y=i.modeParagraph("Open Timeline or Transcript for positioned rows, Raw JSON for the selected payload, or Insights for the grouped finding view."),M=wd([i.modeButton("Timeline",()=>Wc(t,"timeline",i)),i.modeButton("Transcript",()=>Wc(t,"transcript",i)),i.modeButton("Raw JSON",()=>Wc(t,"raw",i)),i.modeButton("Insights",()=>Yg(t,i))]);return M.classList.add("summary-evidence-tabs"),M.setAttribute("role","group"),M.setAttribute("aria-label",`Evidence surfaces for ${t.title}`),m.append(p,y,M),r.append(s,o,a,u,m),r}function UA(t,e){t.querySelectorAll(".summary-evidence-drawer").forEach(n=>{if(n===e||n.hidden)return;let i=n.dataset.triggerId?document.getElementById(n.dataset.triggerId):null;i instanceof HTMLButtonElement?qg(i,n,!1):n.hidden=!0})}function qg(t,e,n){e.hidden=!n,t.textContent=n?"Hide Evidence":"View Evidence",t.setAttribute("aria-expanded",String(n)),n&&e.focus()}function kA(t){let e=jo(t),n=t.eventIds.length?`${re(t.eventIds.length)} linked events`:"no linked event ids",i=e?`line ${e}`:"no event line logged";return[t.severity,t.confidence,t.directness,i,n].filter(Boolean).join(" - ")}function jo(t){return t.lineNumbers.find(e=>Number.isFinite(e)&&e>0)??null}function VA(t,e){let n=e.modeTimelineRows(),i=jo(t),r=i?n.find(o=>o.lineNumber===i):null;if(r)return r;if(!t.eventIds.length)return null;let s=new Set(t.eventIds);return n.find(o=>s.has(o.id)||(o.node?s.has(o.node.id):!1))??null}function Yg(t,e){e.selectAppMode("insights"),e.setRawModePayload(t),e.modePanelSummary.textContent=`Queued insight selected - ${t.title}`;let n=e.modeEmpty("Selected insight loaded in Raw for audit; use evidence actions to jump into Timeline, Transcript, or Raw rows when line/event data is available.");n.classList.add("mode-notice"),e.modePanelContent.prepend(n)}function Wc(t,e,n){let i=VA(t,n);if(i){n.focusEventByLine(i.lineNumber,t.title,t,e);return}let r=jo(t)||t.eventIds.length?"Logged evidence did not match a rendered Timeline or Transcript row; showing the queued insight instead.":"No event line is logged for this insight; showing the queued insight instead.";Yg(t,n),n.showEvidenceFallback(t.title,t,r)}function HA(t,e){return[["Parser",`${t.parserVersion} / ${t.schemaVersion}`],["Renderable events",e(t.renderableEventCount)],["Unknown events",e(t.unknownEventCount)],["Malformed lines",e(t.malformedLineCount)],["Skipped payloads",e(t.skippedLargePayloadCount)],["Warnings",e(t.warnings.length)]]}function zA(t){if(!t?.latestTotalTokens)return"no token telemetry";let e=t.latestContextPercent===null?"n/a":`${Math.round(t.latestContextPercent)}%`,n=t.contextWindow?` / ${re(t.contextWindow)}`:"";return`${re(t.latestTotalTokens)}${n} tokens (${e})`}function Cd(t){return t==="claude"?"Claude":"Codex"}var GA=["add","update","delete","move"],WA=["summary","map","timeline","transcript"],ex=[...WA,"health","insights","diff","raw","export","settings"],tf=["error","long","file","diff","artifact","compaction","skill"],nf=["prompt","local","patch","browser","web","coordination","message"],$A=["local","patch","browser","web","coordination"],rf={prompt:"prompts",local:"local",patch:"patch",browser:"browser",web:"web",coordination:"coordination",message:"messages"},XA={prompt:"Prompts",local:"Local calls",patch:"Patch calls",browser:"Browser calls",web:"Web calls",coordination:"Coordination calls",message:"Assistant messages"},qA={error:"Errors",long:"Long calls",file:"Files",diff:"Diffs",artifact:"Artifacts",compaction:"Compactions",skill:"Skills"},YA=3e4,Qo=18,ZA=3e3,Zg=80,$c=900,KA=840,tx=10,Kg=12,JA=12,jA=180,nx="Repeated file activity",sf="Suspicious tool call",of="Repeated tool-call pattern",Jg=["critical","high","warning","info","low"],QA={summary:{label:"Beta",maturity:"beta",title:"Beta view: available for early use while the interface continues to mature."},map:{label:"Beta",maturity:"beta",title:"Beta view: available for early use while the interface continues to mature."},timeline:{label:"Beta",maturity:"beta",title:"Beta view: available for early use while the interface continues to mature."},transcript:{label:"Beta",maturity:"beta",title:"Beta view: available for early use while the interface continues to mature."},health:{label:"Advanced",maturity:"advanced",title:"Advanced view: intended for audit, debugging, or export workflows."},insights:{label:"Experimental",maturity:"experimental",title:"Experimental view: useful for beta feedback, but verify important conclusions."},diff:{label:"Experimental",maturity:"experimental",title:"Experimental view: useful for beta feedback, but verify important conclusions."},raw:{label:"Advanced",maturity:"advanced",title:"Advanced view: intended for audit, debugging, or export workflows."},export:{label:"Advanced",maturity:"advanced",title:"Advanced view: intended for audit, debugging, or export workflows."},settings:{label:"Advanced",maturity:"advanced",title:"Advanced view: intended for audit, debugging, or export workflows."}},eC=88,tC=180,ix=56,rx=72,jg='13px "Segoe UI", Arial, sans-serif',Qg='700 13px "Segoe UI", Arial, sans-serif',sx=19,ox=18,nC=84,iC=12,ax=16,lx=4,rC=19,Id=16,sC=["zoom-in","zoom-out","two-d","overview"],cx=new Set(ex);function tu(t){return Array.isArray(t)?t[0]:t.fromId}function nu(t){return Array.isArray(t)?t[1]:t.toId}function oC(t){return Array.isArray(t)?1:t.waypoints.length+1}function Nd(t){return t.reduce((e,n)=>e+oC(n),0)}function aC(t,e){if(!e||tu(t)!==tu(e)||nu(t)!==nu(e))return!1;let n=Array.isArray(t)?[]:t.waypoints,i=Array.isArray(e)?[]:e.waypoints;return n.length===i.length}function Se(t,e=document){let n=e.querySelector(t);if(!n)throw new Error(`Missing required element: ${t}`);return n}function Ma(t){return document.querySelectorAll(t)}function Vr(t){return t instanceof Error?t.message:String(t)}function Xc(t,e,n){return e!==void 0&&t.includes(e)?e:n}function af(){return{compactionInProgress:!1,pendingPrompt:null,assistantStreaming:!1,latestAssistantEventIndex:null,latestAssistantPreview:null,latestTokenSample:null,activeToolCalls:[],completedToolCalls:[]}}function Zt(){if(!Ae)throw new Error("Session graph has not loaded yet");return Ae}function ux(t){return t.type==="call"?t.source.completedAt||t.source.startedAt||"Live context":t.source.timestamp||"Live context"}function lf(t){s0.textContent=Og(t),s0.title=t}function cf(t,e="Selection"){fC.textContent=e,t0.textContent=Bg(t),t0.title=t}function hx(t){return t.skillNames?t.skillNames:t.type==="call"?Su(t.source):t.type==="message"?Mu(t.source.text):[]}function lC(t){return t.kind==="skill"||hx(t).length>0}function Su(t){return Mu(`${t.name}
${t.argumentPreview}`)}function ba(t){if(!t.length)return"skill use";let e=t.slice(0,3).join(", "),n=t.length>3?` +${t.length-3}`:"";return`${t.length===1?"skill":"skills"}: ${e}${n}`}function Mu(t){let e=new Set,n=cC(t).replaceAll("\\\\","\\");return uC(n,e),e0(n,e,/\b(?:using|use|uses|used|loading|load|loads|loaded|invoking|invoke|invokes|invoked|running|run|runs|ran|applying|apply|applies|applied)\s+(?:the\s+)?(?:[$`])?([a-z][a-z0-9:_-]{1,80})(?:[`])?\s+skill\b/gi),e0(n,e,/\bskills?\s*[:=]\s*(?:[$`])?([a-z][a-z0-9:_-]{1,80})(?:[`])?/gi),hC(n,e),[...e].sort((i,r)=>i.localeCompare(r))}function cC(t){return t.length<=8e3?t:`${t.slice(0,4e3)}
${t.slice(-4e3)}`}function uC(t,e){let n=/(?:^|[\\/])([^\\/\s"'<>()[\]{}]+)[\\/]SKILL\.md\b/gi;for(let i of t.matchAll(n))uf(e,i[1],{requireExplicitMarker:!1})}function e0(t,e,n){for(let i of t.matchAll(n))uf(e,i[1],{requireExplicitMarker:!1})}function hC(t,e){let n=/\b(?:using|loading|invoking|running|applying)\s+(?:the\s+)?([$`]?)([a-z][a-z0-9:_-]{1,80})([`]?)(?=\s+(?:for|because|to|workflow|and|,|$))/gi;for(let i of t.matchAll(n)){let r=!!(i[1]||i[3]);uf(e,i[2],{requireExplicitMarker:!r})}}function uf(t,e,{requireExplicitMarker:n}){let i=e.trim().replace(/^[$`]+/,"").replace(/[`.,:;)\]]+$/,"").toLowerCase();/^[a-z][a-z0-9:_-]{1,80}$/.test(i)&&(i==="skill"||i==="skills"||i==="relevant"||i==="right"||i==="same"||i==="this"||n&&!/[-:]/.test(i)||t.add(i))}function dx(t){return t.type==="prompt"?t.source.images:[]}var nt=Se("#space"),dC=Se("#metadata-list"),fC=Se("#stream-title-label"),t0=Se("#stream-kind"),hf=Se("#stream-title"),zs=Se("#stream-data"),n0=Se("#stream-images"),pC=Se("#stream-close"),jc=Se("#stream-minimize"),ha=Se("#stream-copy-ref"),fx=Se("#stream-open-timeline"),px=Se("#stream-open-transcript"),mx=Se("#stream-open-raw"),gx=Se("#prev-event"),xx=Se("#next-event"),_x=Se("#stage-turn-count"),df=Se("#stage-started"),i0=Se("#context-pressure-value"),r0=Se("#context-pressure-bars"),ff=Se("#turn-number"),s0=Se("#turn-timestamp"),mC=Se("#metric-prompts"),gC=Se("#metric-local"),xC=Se("#metric-patch"),_C=Se("#metric-browser"),vC=Se("#metric-web"),yC=Se("#metric-coordination"),SC=Se("#metric-messages"),MC=Se("#metric-errors"),bC=Se("#metric-long"),EC=Se("#metric-files"),TC=Se("#metric-diffs"),AC=Se("#metric-artifacts"),CC=Se("#metric-compactions"),wC=Se("#metric-skills"),RC=Se(".map-live-hud"),o0=Se("#map-filter-status"),IC={prompt:mC,local:gC,patch:xC,browser:_C,web:vC,coordination:yC,message:SC},pf=Se("#context-event-title"),lr=Se("#event-popup"),NC=Se("#topbar"),PC=Se("#live-toggle"),vx=Se("#live-state"),yx=Se("#live-copy"),nr=Se("#search-input"),Tr=Se("#search-status"),qc=Se("#copy-feedback"),LC=Se("#mode-panel"),FC=Se("#mode-panel-kicker"),DC=Se("#mode-panel-title"),Pd=Se("#mode-panel-status"),Sn=Se("#mode-panel-summary"),OC=Se("#mode-panel-filters"),Ht=Se("#mode-panel-content"),iu=Se("#mode-filter-role"),ru=Se("#mode-filter-type"),su=Se("#mode-filter-tool"),ou=Se("#mode-filter-file"),Sx=Se("#mode-filter-errors"),Mx=Se("#mode-filter-unknown"),bx=Se("#mode-filter-malformed"),Ex=Se("#mode-filter-redacted"),Tx=Se("#mode-filter-utc"),Ax=Ma("[data-view-action]"),Cx=Ma("[data-metric]"),wx=Ma("[data-node-role]"),Rx=Ma("[data-app-mode]"),Ix=Ma("[data-source]"),di=Se("#session-select"),da=Se("#session-select-status"),Od=Se("#settings-button"),mf=Se("#scene-frame"),BC=3500,UC=1e3,kC=180,VC=1200,a0=.72,HC=1e-4,zC=12e3,GC=1200,WC=12e3,Yc=20,gf=-1.4,$C=38,XC=52,Nx=46,qC=58,YC=24,ZC=104,KC=1.72,l0=1.08,JC=4.3,jC=2.55,xf=-1e4,_f=3600,Px=28,QC=3,ew=2,Gs="compaction-progress",Fr="live-prompt-progress",c0=4.8,u0=5.2,tw=1.25,nw=3.7,iw=.04,rw=.42,Lx=Math.PI/2,Fx=Math.PI*.76,Rr=6.8,h0=5.8,sw=1.75,ow=2.65,aw=.16,Bd=6,lw=.86,cw=3.05,uw=.72,hw=.24,dw=.62,Ps=1,fw=1.4,pw=1.35,mw=1.7,gw=.62,xw=.04,_w=0,vw=1.15,yw=0,Sw=1.05,Mw=3.8,bw=9.2,Ew=22,Tw=6.4,Aw=2.35,Cw=.78,ww=.36,Rw=1.85,Iw=2.15,Nw=4.15,Pw=2.1,Lw=.2,Fw=.86,Dw=.03,Ow=.24,Bw=Fx,Uw=.72,kw=1.85,Vw=.1,Ud=5,Hw=.78,zw=.44,Gw=.38,Ww=.1,$w=.3,d0=2.4,Xw=6.5,qw=.16,Yw=34,Zw=100,f0=4,Kw=16,Jw=70,jw=.72,Qw=2.6,eR=new Set(["KeyW","KeyA","KeyS","KeyD"]),Dx="Space",tR=new Set(["ControlLeft","ControlRight"]),nR=new Set(["ShiftLeft","ShiftRight"]),p0=.0032,iR=1.4,Ox=28,m0=Math.PI/2-.08,rR=4,g0=24,Ri=null;try{Ri=new Lc({canvas:nt,antialias:!1,alpha:!1,powerPreference:"high-performance"}),Ri.setClearColor(197894,1),Ri.outputColorSpace=Jt,Ri.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75))}catch(t){nt.classList.add("webgl-unavailable"),console.warn(`WebGL renderer unavailable: ${Vr(t)}`)}var Ln=new fo,fa=new ni;fa.renderOrder=4;Ln.add(fa);var pa=new ni;pa.renderOrder=4.2;Ln.add(pa);var Fe=new $t(50,1,.1,zC);Fe.position.set(0,Nx,.01);var Ke=new Hc(Fe,Ri?.domElement??nt);Ke.enableDamping=!0;Ke.dampingFactor=.07;Ke.enablePan=!1;Ke.enableRotate=!1;Ke.enableZoom=!1;Ke.mouseButtons.LEFT=zn.PAN;Ke.mouseButtons.RIGHT=zn.ROTATE;Ke.maxDistance=Number.POSITIVE_INFINITY;Ke.minDistance=0;Ke.target.set(0,0,0);var kd=new xs;kd.params.Points.threshold=1.05;var Ws=new we,sR=new we(0,0),Rn=new Rt,Ar=new ze,vn=new P,Bx=new P,x0=new P,Ux=new tn(new P(0,1,0),-gf),Cr=new P,au=new xs,_0=new P,v0=new P,pi=new P,y0=new P,ea=new P,ta=new ri(0,0,0,"YXZ"),kx=new P,Vx=new P,Fs=new P,Ds=new P,S0=new ze(16777215),Ae=null,Be=[],or=[],Nt=new Map,oa=new Map,aa=new Map,ma=[],fi={},Yn=null,an=null,Vd=new Map,Hd=new Map,it=null,dt=null,Qc=null,Bs=null,tr=null,Ld=!1,ir=null,ra=null,Hx=0,zd=0,_t="overview",xt=oR(new URLSearchParams(window.location.search).get("mode")),Ir="three-d",Dr=$x(new URLSearchParams(window.location.search).get("source")),Fn=Xx(new URLSearchParams(window.location.search).get("session")),Zn=[],qn=null,en=null,Gd=!1,Ii=null,M0=0,yn=null,Wd=!1,Nr=null,na=null,Yt=null,_n="",bu=null,rr=null,Zc=null,la={},Us=new Map,Nn=!0,Pr=!1,lu=!1,Os=!1,Ls=!1,Hr=0,ca=null,Eu=!1,ga=!1,cu=0,Kn=af(),sr=Number.POSITIVE_INFINITY,ks=null;var Ys=!0,Vs=null,vf=!1,xa=!1,zx=0,In=new Set,yf=!1,_a=null,$d=0,Xd=0,uu=null,va=!1,qd=0,Yd=0,Gx=0,Wx=0,Sf=!1,hu=!1,b0=performance.now()/1e3,Kc=0;function $x(t){return t==="claude"?"claude":"codex"}function oR(t){let e=t?.trim().toLowerCase();return e&&cx.has(e)?e:"summary"}function $s(t=Dr){return t==="claude"?"Claude":"Codex"}function Xx(t){let e=t?.trim();return e||null}function aR(){let t=new URL(window.location.href);t.searchParams.has("token")&&(t.searchParams.delete("token"),window.history.replaceState(window.history.state,"",`${t.pathname}${t.search}${t.hash}`))}var E0=(()=>{let t=new URLSearchParams(window.location.search),e=t.get("token");try{let n=e||sessionStorage.getItem("perlustronToken");return n&&sessionStorage.setItem("perlustronToken",n),t.has("token")&&aR(),n}catch{return e}})();function qx(t,{includeSession:e=!0,includeSource:n=!0,sessionPath:i=Fn}={}){return n&&t.searchParams.set("source",Dr),e&&i&&t.searchParams.set("session",i),E0&&t.searchParams.set("token",E0),t}function Zs(t,e={}){let n=new URL(t,window.location.origin);return qx(n,e)}function Or(t){return t===Hr}var T0=new To(.78,16,10),lR=new Mo(.72,.72,.12,32),cR=new bo(.72,0),uR=new zi(.96,.12,.58),hR=new ms(.78,.9,96),dR=new ms(.9,1.02,96),A0=new Hn({color:16777215}),fR=new Hn({color:16777215}),pR=new Hn({color:16777215}),mR=new Hn({color:16777215});Ln.add(new wo(8778239,1052688,1.5));var Yx=new Io(16777215,2.2);Yx.position.set(14,24,12);Ln.add(Yx);var Xs=new No(WC,GC,1456447,1456447);Xs.position.y=gf;Xs.material.transparent=!0;Xs.material.opacity=.34;Ln.add(Xs);pC.addEventListener("click",()=>{dt=null,G_(),Iu(),Mn(),Ur()});jc.addEventListener("click",()=>ev(!Os));ha.addEventListener("click",bN);fx.addEventListener("click",()=>Nu("timeline"));px.addEventListener("click",()=>Nu("transcript"));mx.addEventListener("click",()=>Nu("raw"));ev(!1);window.addEventListener("resize",q_);nt.addEventListener("contextmenu",PI);nt.addEventListener("wheel",LI,{passive:!1});nt.addEventListener("pointerdown",FI,{capture:!0});nt.addEventListener("pointermove",DI,{capture:!0});nt.addEventListener("pointerup",Nf,{capture:!0});nt.addEventListener("pointercancel",Nf,{capture:!0});nt.addEventListener("pointerdown",kI);nt.addEventListener("pointermove",Ru);nt.addEventListener("pointermove",VI);nt.addEventListener("pointerup",V_);nt.addEventListener("pointercancel",V_);nt.addEventListener("click",eN);nt.addEventListener("dblclick",tN);MP();q_();await Mf();await Ks();Ou();Ri?.setAnimationLoop(II);async function Ks({previousLineCountOverride:t=null,previousLatestOverride:e=null,suppressLiveAnimation:n=!1}={}){let i=++Hx,r=Hr;try{let s=await fetch(Zs("/api/session"),{cache:"no-store"});if(!s.ok)throw new Error(`Session API returned ${s.status}`);let o=await s.json();if(!Or(r)||i<zd)return;zd=i;let a=Ae!==null,l=a&&bf()?xN()?.clone()??null:null,c=t??Ae?.lineCount??o.lineCount,h=e??ca??o.latestEventIndex,d=a&&o.latestEventIndex>h,u=a&&o.latestEventIndex===h&&o.lineCount===c,f=d&&!n;if(sr=f?h:Number.POSITIVE_INFINITY,ca=o.latestEventIndex,Eu=!1,Ae=o,u&&Ls){ar(),Fd();return}if(a&&Ls&&UR()){ar(),f&&(I0(l),Q0()),Fd();return}e_({preserveView:a&&Ls,preserveEventContext:a&&Ls}),Ls=!0,ar(),f&&(I0(l),Q0()),(o.pendingBytes??0)>0&&!ir&&Qx(o.lineCount,ca??o.latestEventIndex),Fd()}catch(s){if(!Or(r))return;lu=!1,SR(),Sa(s)}}async function Zd(){if(Ld)return;Ld=!0;let t=Hr;try{if(!Ae){await Ks();return}let e=await gR();if(!Or(t))return;jx(e)}catch(e){Sa(e)}finally{Ld=!1}}async function gR(){let t=await fetch(Zs("/api/session/status"),{cache:"no-store"});if(!t.ok)throw new Error(`Session status returned ${t.status}`);return await t.json()}async function xR(t){let e=Zt(),n=Zs("/api/session/diff");n.searchParams.set("leftSession",e.sessionPath),n.searchParams.set("rightSession",t),n.searchParams.set("redacted","true"),n.searchParams.set("profile","strict");let i=await fetch(n,{cache:"no-store"});if(!i.ok)throw new Error(`Diff API returned ${i.status}`);return await i.json()}async function _R(){let t=Zs("/api/session/unknowns");t.searchParams.set("profile","strict");let e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`Unknowns API returned ${e.status}`);return await e.json()}async function Mf({retryWithoutSelection:t=!0,generation:e=Hr}={}){Jx();try{let n=await fetch(Zs("/api/sessions"),{cache:"no-store"});if(!n.ok)throw new Error(`Sessions API returned ${n.status}`);let i=await n.json();if(!Or(e))return;Zn=i.sessions??[],C0(i)}catch(n){if(!Or(e))return;if(Fn&&t){Fn=null,Ea(),await Mf({retryWithoutSelection:!1,generation:e});return}Zn=[],C0(),Sa(n)}}function C0(t){let e=document.createDocumentFragment(),n=t?.selectedPath||Fn||Zn[0]?.path||"";if(!Zn.length){let i=document.createElement("option");i.value="",i.textContent="No sessions found",e.append(i),di.replaceChildren(e),di.disabled=!0,da.textContent="0";return}Zn.forEach(i=>{let r=document.createElement("option");r.value=i.path,r.textContent=Zx(i),r.title=i.path,e.append(r)}),di.replaceChildren(e),di.value=n,di.disabled=!1,da.textContent=`${Zn.length}`}function Zx(t){return[t.isLive?"Live":"",t.explicit?"Default":"",t.label,zc(t.lastModifiedAt),Is(t.byteLength)].filter(Boolean).join(" - ")}async function vR(t){let e=Xx(t);if(e===Fn)return;Bu(),Fn=e,en=null,Ii=null,yn=null,Nr=null,lu=!0,Ea(),Kx();let n=Hr;MR(),await Ks({suppressLiveAnimation:!0}),Or(n)&&Ou()}function Ea(){let t=new URL(window.location.href);t.searchParams.set("source",Dr),t.searchParams.set("mode",xt),Fn?t.searchParams.set("session",Fn):t.searchParams.delete("session"),t.searchParams.delete("token"),window.history.replaceState({},"",`${t.pathname}${t.search}${t.hash}`)}function Kx(){Hr+=1,ir&&clearTimeout(ir),ir=null,ra=null,Hx=0,zd=0,dt=null,it=null,bu=null,rr=null,Object.keys(la).forEach(t=>{delete la[t]}),Us.clear(),_t="overview",ca=null,Eu=!1,Kn=af(),ga=!1,cu=0,sr=Number.POSITIVE_INFINITY,Au(),ks&&clearTimeout(ks),ks=null,Ls=!1,Ae=null,Be=[],or=[],Nt.clear(),oa.clear(),aa.clear(),E_(),K_()}function Jx(){di.disabled=!0,da.textContent="Loading"}function Fd(){yR({switched:lu}),lu=!1}function yR({switched:t=!1}={}){di.disabled=Zn.length===0,da.textContent=t?"Loaded":Zn.length?`${Zn.length}`:"0"}function SR(){di.disabled=Zn.length===0,da.textContent="Error"}function MR(){_x.textContent="Loading",df.textContent="Reading JSONL",vx.textContent="LOAD",yx.textContent="Switching session...",Jx()}function jx(t){if(!Ae){Ks();return}let e=Ae,n=e.lineCount,i=ca??e.latestEventIndex,r=e.byteLength??e.processedByteLength??0,s=t.byteLength??r,o=e.pendingBytes??0,a=t.pendingBytes??0,l=t.graphChanged===!0,c=ER(t),h=c.compactionInProgress,d=w0(c)!==w0(Kn),u=Math.max(0,s-r),f=a>0,g=u>0||a>o,_=t.renderableEventCount!==bR(e),m=a===0&&(t.latestEventIndex>i||t.lineCount>n||_),p=t.latestEventIndex===i&&t.lineCount===n&&u===0&&a===o&&l===Eu&&!d,y=l||f&&!h||g&&!h||_||m;RR(t,c),d&&(h||!y)&&e_({preserveView:!0,preserveEventContext:!0}),y&&(!p||f||_||m)&&Qx(n,i)}function bR(t){return t.totals.promptCount+t.totals.callCount+t.totals.assistantMessageCount+t.totals.fileChangeCount+t.totals.compactionCount}function ER(t){let e=t.liveCues??af();return{compactionInProgress:e.compactionInProgress||t.compactionInProgress===!0,pendingPrompt:e.pendingPrompt??null,assistantStreaming:e.assistantStreaming===!0,latestAssistantEventIndex:e.latestAssistantEventIndex??null,latestAssistantPreview:e.latestAssistantPreview??null,latestTokenSample:e.latestTokenSample??null,activeToolCalls:e.activeToolCalls??[],completedToolCalls:e.completedToolCalls??[]}}function w0(t){return[t.compactionInProgress?"compact:1":"compact:0",t.pendingPrompt?`prompt:${t.pendingPrompt.eventIndex}:${ua(t.pendingPrompt.title)}:${ua(t.pendingPrompt.text)}`:"prompt:",t.assistantStreaming?`assistant:${t.latestAssistantEventIndex??""}:${ua(t.latestAssistantPreview)}`:"assistant:",t.latestTokenSample?`tokens:${t.latestTokenSample.eventIndex}:${t.latestTokenSample.totalTokens}:${t.latestTokenSample.contextPercent??""}`:"tokens:",`active:${R0(t.activeToolCalls)}`,`done:${R0(t.completedToolCalls)}`].join("|")}function R0(t){return t.map(e=>`${e.id}:${e.eventIndex}:${e.status}:${e.completedAt??""}:${ua(e.argumentPreview)}:${ua(e.outputPreview)}`).join(",")}function ua(t){return t?`${t.length}:${t.slice(0,48)}`:""}function I0(t=null){if(!bf())return;let e=Bf();if(e){if(e.type==="prompt"?it=e.id:e.type==="compaction"?it=null:it=e.promptId,_t="overview",cr({preserveCamera:!0}),t){let n=fu(e);TR(n)||AR(t,n)}else wa({preserveDistance:!0});dt&&kf()&&Jf(),Mn()}}function bf(){return Nn&&!vf&&!_n&&!Yt}function Tu(){vf=!0,Au()}function Ef(){vf=!1}function TR(t){let e=nt.getBoundingClientRect();return e.width<=0||e.height<=0?!1:(Fe.updateMatrixWorld(),vn.copy(t).project(Fe),vn.z>=-1&&vn.z<=1&&Math.abs(vn.x)<=a0&&Math.abs(vn.y)<=a0)}function AR(t,e){let n=e.x-t.x,i=e.y-t.y,r=e.z-t.z;n*n+i*i+r*r<HC||(kx.copy(Fe.position),Vx.copy(Ke.target),xa?(Fs.x+=n,Fs.y+=i,Fs.z+=r,Ds.x+=n,Ds.y+=i,Ds.z+=r):(Fs.set(Fe.position.x+n,Fe.position.y+i,Fe.position.z+r),Ds.set(Ke.target.x+n,Ke.target.y+i,Ke.target.z+r)),zx=performance.now(),xa=!0)}function CR(t){if(!xa)return;if(!bf()){Au();return}let e=bs.clamp((t-zx)/VC,0,1),n=wR(e);Fe.position.lerpVectors(kx,Fs,n),Ke.target.lerpVectors(Vx,Ds,n),e>=1&&(Fe.position.copy(Fs),Ke.target.copy(Ds),xa=!1)}function wR(t){return t*t*t*(t*(t*6-15)+10)}function Au(){xa=!1}function Qx(t,e){ra||(ra={previousLineCount:t,previousLatest:e}),ir&&clearTimeout(ir),ir=setTimeout(()=>{let n=ra;ra=null,ir=null,n&&Ks({previousLineCountOverride:n.previousLineCount,previousLatestOverride:n.previousLatest,suppressLiveAnimation:!1})},kC)}function RR(t,e){let n=Zt();n.source=t.source,n.sessionPath=t.sessionPath,n.sessionId=t.sessionId,n.generatedAt=t.generatedAt,n.lastModifiedAt=t.lastModifiedAt,n.lineCount=t.lineCount,n.latestEventIndex=t.latestEventIndex,n.isLive=t.isLive,n.byteLength=t.byteLength,n.processedByteLength=t.processedByteLength,n.pendingBytes=t.pendingBytes,Eu=t.graphChanged===!0,Kn=e,IR(Kn.compactionInProgress),df.textContent=n_(t.lineCount,n.pendingBytes),c_(BR(n.tokenTelemetry,Kn.latestTokenSample)),ar(),Uf()}function IR(t){return ga===t?!1:(ga=t,cu=t?performance.now():0,!0)}function e_({preserveView:t=!1,preserveEventContext:e=!1}={}){let n=t?kR():null;E_();let i=__(Zt());Be=i.nodes,or=i.connectors,u_(),it=it&&Nt.has(it)?it:Be.find(r=>r.type==="prompt")?.id??null,t_(),cr({preserveCamera:t}),n&&VR(n),mI(),jI(),gI(),Aa(),Mn(),dt&&Nt.has(dt)?Jf():(dt=null,e?Uf():K_())}function t_(){let t=Zt(),e=t.ui,n=Ta();_x.textContent=re(e.totalTurns),df.textContent=n_(t.lineCount,t.pendingBytes),nf.forEach(i=>{IC[i].textContent=re(n[rf[i]])}),MC.textContent=re(n.error),bC.textContent=re(n.long),EC.textContent=re(n.file),TC.textContent=re(n.diff),AC.textContent=re(n.artifact),CC.textContent=re(n.compaction),wC.textContent=re(n.skill),Zf(n),c_(t.tokenTelemetry),zg(dC,t.metadata),Ra()}function Ta(){let t={prompts:0,local:0,patch:0,browser:0,web:0,coordination:0,messages:0,error:0,long:0,file:0,diff:0,artifact:0,compaction:0,skill:0};return Be.forEach(e=>{if(!Ca(e))return;let n=Kf(e);n&&(t[rf[n]]+=1),e.type!=="prompt"&&tf.forEach(i=>{Uu(e,i)&&(t[i]+=1)})}),t}function Jn(t){return`${t}`}function n_(t,e=0){return e>0?`${re(t)} + ${Is(e)} pending`:re(t)}function Tf(t){return`${t.parserVersion} / ${t.schemaVersion}`}function i_(t,e=Jn){return["Renderable events",e(t.renderableEventCount)]}function r_(t,e=Jn){return["Unknown events",e(t.unknownEventCount)]}function s_(t,e=Jn){return["Malformed lines",e(t.malformedLineCount)]}function o_(t,e=Jn,n="Skipped payloads"){return[n,e(t.skippedLargePayloadCount)]}function a_(t,e=Jn){return["Warnings",e(t.warnings.length)]}function l_(t,e=Jn,n="Skipped payloads"){return[r_(t,e),s_(t,e),o_(t,e,n),a_(t,e)]}function ya(t){return t.map(([e,n])=>`${e}: ${n}`)}function NR(t){return(t.unknownEventTypes||[]).map(e=>`${e.sourceEventType}: ${e.count}`)}function PR(t){let[,e]=r_(t);return[`${e} total`,...NR(t)]}function LR(t){return(t.unknownEventTypes||[]).map(e=>`Unknown: ${e.sourceEventType} x${e.count}`)}function FR(t){return(t.malformedLines||[]).slice(0,5).map(e=>`Line ${e.lineNumber}: ${e.error}`)}function DR(t){return[...ya([s_(t),o_(t,Jn,"Skipped large payloads")]),...FR(t)]}function OR(t){return[...ya([["Parser",Tf(t)],["Lines read",Jn(t.totalLinesRead)],["Parsed events",Jn(t.parsedEventCount)],i_(t),...l_(t,Jn,"Skipped large payloads"),["Token telemetry",t.tokenTelemetryAvailable?"available":"not logged"]]),...LR(t)]}function c_(t){let e=t?.latestContextPercent??null;i0.textContent=e===null?"n/a":`${Math.min(999,Math.round(e))}%`,i0.title=t?.latestTotalTokens&&t?.contextWindow?`${re(t.latestTotalTokens)} / ${re(t.contextWindow)} tokens`:"No token telemetry in this session";let n=t?.samples?.length?t.samples.slice(-Px):[];if(!n.length){r0.replaceChildren();return}let i=document.createDocumentFragment();n.forEach(r=>{let s=document.createElement("span"),o=Math.max(2,Math.min(28,Math.round((r.contextPercent??0)/4)));s.style.height=`${o}px`,s.title=`${Math.round(r.contextPercent??0)}% context at event ${r.eventIndex}`,i.append(s)}),r0.replaceChildren(i)}function BR(t,e){if(!e)return t;let n=t.samples??[],r=n.at(-1)?.eventIndex===e.eventIndex?n:[...n,e].slice(-Px);return{...t,samples:r,latestTotalTokens:e.totalTokens,contextWindow:e.contextWindow,latestContextPercent:e.contextPercent,primaryRateLimitPercent:e.primaryRateLimitPercent,secondaryRateLimitPercent:e.secondaryRateLimitPercent}}function UR(){let t=__(Zt());if(t.nodes.length!==Be.length||t.connectors.length!==or.length)return!1;for(let n=0;n<t.nodes.length;n+=1)if(t.nodes[n].id!==Be[n]?.id)return!1;for(let n=0;n<t.connectors.length;n+=1)if(!aC(t.connectors[n],or[n]))return!1;let e=performance.now();return t.nodes.forEach((n,i)=>{let r=Be[i];r.kind=n.kind,r.eventIndex=n.eventIndex,r.title=n.title,r.body=n.body,r.detail=n.detail,r.source=n.source,n.isNew&&(r.freshUntil=Math.max(r.freshUntil||0,n.freshUntil||0)),r.isNew=n.isNew||zr(r,e),r.baseScale=n.baseScale,r.matrixDirty=!0,_t==="overview"&&r.target.copy(n.target)}),or=t.connectors,u_(),cr({preserveCamera:!0}),Aa(),t_(),Mn(),dt&&Nt.has(dt)?Jf():Uf(),!0}function kR(){return new Map(Be.map(t=>[t.id,{position:t.position.clone(),target:t.target.clone(),scale:t.scale}]))}function u_(){Nt=new Map,oa=new Map,aa=new Map,Be.forEach(t=>{Nt.set(t.id,t);let e=oa.get(t.promptId);e?e.push(t):oa.set(t.promptId,[t]);let n=Kf(t);if(n&&n!=="prompt"){let i=aa.get(t.promptId);i?i.add(n):aa.set(t.promptId,new Set([n]))}})}function VR(t){let e=new Map(or.map(a=>[nu(a),tu(a)])),n=HR(t),i=n?t.get(Gs):null,r=zR(t),s=r?t.get(Fr):null,o=performance.now();Be.forEach(a=>{let l=t.get(a.id);if(l){a.position.copy(l.position),a.scale=l.scale,a.matrixDirty=!0;return}let c=a.id===n?i:a.id===r?s:null;if(c){a.position.copy(c.position),a.scale=Math.max(a.scale,c.scale),a.freshUntil=Math.min(a.freshUntil||Number.POSITIVE_INFINITY,o+_f*.58),a.isNew=!0,a.matrixDirty=!0;return}a.position.copy(_t==="inspect"?a.target:GR(a,t,e)),a.matrixDirty=!0})}function HR(t){if(!t.has(Gs))return null;let e=Be.filter(n=>n.type==="compaction"&&n.id!==Gs&&!t.has(n.id));return e.length?e.reduce((n,i)=>i.eventIndex>=n.eventIndex?i:n).id:null}function zR(t){if(!t.has(Fr))return null;let e=Be.filter(n=>n.type==="prompt"&&n.id!==Fr&&!t.has(n.id));return e.length?e.reduce((n,i)=>i.eventIndex>=n.eventIndex?i:n).id:null}function GR(t,e,n){let i=n.get(t.id);if(!i)return t.target;let r=e.get(i);return r?r.position:Nt.get(i)?.position??t.target}function h_(t,e){let n=new Set(t.assistantMessages.map(o=>o.id)),i=new Map,r=new Set;return e.forEach(o=>{let a=o.assistantMessageId||"";if(!n.has(a))return;let l=i.get(a)??[];l.push(o),i.set(a,l),r.add(o.id)}),[...t.assistantMessages.map(o=>({type:"assistant",message:o,calls:i.get(o.id)??[]})),...e.filter(o=>!r.has(o.id)).map(o=>({type:"call",call:o}))].sort((o,a)=>{let l=N0(o)-N0(a);return l!==0?l:P0(o)-P0(a)})}function N0(t){return t.type==="assistant"?t.message.eventIndex:t.call.eventIndex}function P0(t){return t.type==="assistant"?0:1}function WR(t,e){if(e.type==="compaction")return{above:c0,below:u0,promptCalls:[],subagentBranches:[],activityUnits:[],activityDepth:0,fileRows:0};let n=e.prompt,i=O_(t,n),r=M_(i),s=new Set(r.flatMap(u=>[u.launch?.id,u.result?.id].filter(f=>!!f))),o=i.filter(u=>!s.has(u.id)),a=h_(n,o),l=$R(a),c=Math.ceil((n.fileChanges?.length??0)/Ps),h=l+YR(c)+d0,d=l+ZR(r)+d0;return{above:Math.max(c0,h),below:Math.max(u0,d),promptCalls:i,subagentBranches:r,activityUnits:a,activityDepth:l,fileRows:c}}function $R(t){if(!t.length)return 0;let e=0,n=0;return t.forEach((i,r)=>{let s=XR(r);e=Math.max(e,s),n=Math.min(n,s),i.type==="assistant"&&i.calls.forEach((o,a)=>{let l=s+d_(a,i.calls.length);e=Math.max(e,l),n=Math.min(n,l)})}),Math.max(Math.abs(n),Math.abs(e))+tw}function XR(t){return du(t).z}function du(t){let e=Lx+t*Fx,n=nw+Math.min(rw,t*iw);return new P(Math.sin(e)*n,-sw-t*ow+Math.cos(e)*aw,Math.cos(e)*n)}function qR(t,e){let n=du(e);return new P(n.x,Rr+n.y,t+n.z)}function L0(t,e,n,i,r){if(i==null){let a=du(r);return{fromId:t,toId:e,waypoints:[new P(0,Rr+a.y*.36,n+a.z*.18),new P(a.x*.58,Rr+a.y*.72,n+a.z*.58)]}}let s=5,o=[];for(let a=1;a<=s;a+=1){let l=a/(s+1),c=i+(r-i)*l,h=du(c);o.push(new P(h.x,Rr+h.y,n+h.z))}return{fromId:t,toId:e,waypoints:o}}function d_(t,e){return f_(t,e,Bd,lw,.32)}function f_(t,e,n,i,r){let s=Math.floor(t/n),o=t%n,a=Math.min(e-s*n,n);return(o-(a-1)/2)*i+s*r}function YR(t){return t<=0?0:fw+(t-1)*pw+mw}function ZR(t){return t.length?t.reduce((e,n,i)=>Math.max(e,KR(n,i)),0):0}function KR(t,e){let n=p_(t,e,0),i=Math.min(n.branchZ,t.result?n.resultZ:n.branchZ,t.nodes.length?JR(t.nodes,n.branchX,n.branchY,n.childStartZ):n.branchZ);return Math.abs(Math.min(0,i))}function p_(t,e,n){let i=e%2===0?1:-1,r=Math.floor(e/2),s=i*Math.min(Ew,bw+r*Tw),o=n-Mw-r*Aw,a=o-Nw;return{side:i,lane:r,branchX:s,branchY:Rr-1.2-e%2*Cw-r*ww,branchZ:o,launchX:s-i*Rw,resultX:s+i*Iw,resultZ:a,childStartZ:(t.result?a:o)-Pw}}function JR(t,e,n,i){let r=S_(t),s=i,o={id:"",eventIndex:Number.NEGATIVE_INFINITY,target:new P(e,n,i),fileAxisX:e,fileAxisZ:i},a=0;return r.forEach(l=>{v_(l).forEach(h=>{let d=a,u=wf(e,n,i,d),f=Cf(i,d),g={...o,eventIndex:h.spine?.eventIndex??o.eventIndex,target:u,fileAxisX:e,fileAxisZ:f},_=[g];h.spine&&(g={id:h.spine.id,eventIndex:h.spine.eventIndex,target:u,fileAxisX:e,fileAxisZ:f},_[0]=g,o=g,s=Math.min(s,u.z));let m=Cu(u,f,e,e<0?-1:1);h.children.forEach((p,y)=>{let M=y_(u,m,y,h.children.length),E={id:p.id,eventIndex:p.eventIndex,target:M,fileAxisX:e,fileAxisZ:f};_.push(E),s=Math.min(s,M.z)}),s=Math.min(s,jR(h.files,_,f)),a+=1})}),s}function jR(t,e,n){if(!t.length)return n;let i=n;return m_(t,e).forEach(({parent:r,siblingIndex:s,siblingCount:o})=>{i=Math.min(i,Af(r,n,s,o).z)}),i}function m_(t,e){let n=new Map;return t.map(r=>{let s=oI(r.eventIndex,e),o=n.get(s.id)??[],a=o.length;return o.push(r),n.set(s.id,o),{file:r,parent:s,siblingIndex:a}}).map(r=>({...r,siblingCount:n.get(r.parent.id)?.length??1}))}function QR(t){return t.x<0?-1:1}function Cu(t,e,n=0,i=QR(t)){let r=t.x-n,s=t.z-e,o=Math.hypot(r,s);return o<.001&&(r=i,s=0,o=1),r/=o,s/=o,{radialX:r,radialZ:s,tangentX:-s,tangentZ:r}}function eI(t,e,n,i){let r=Cu(t,e),s=Math.floor(n/Bd),o=n%Bd,a=d_(n,i),l=cw+s*uw;return new P(t.x+r.radialX*l+r.tangentX*a,t.y-.48-o*hw-s*dw,t.z+r.radialZ*l+r.tangentZ*a)}function F0(t,e,n){let i=t.assistantMessageId||"";return n.has(i)?i:e}function g_(t,e,n){if(t==null)return n;let i=n,r=Number.NEGATIVE_INFINITY;return e.forEach(s=>{s.eventIndex<=t&&s.eventIndex>=r&&(i=s,r=s.eventIndex)}),i}function tI(t,e,n){return!e.length||t==null?e.at(-1)?.id??n:g_(t,e,null)?.id??n}function Af(t,e,n,i){let r=t.target,s=t.fileAxisX??0,o=t.fileAxisZ??e,a=Cu(r,o,s,r.x<s?-1:1),l=Math.floor(n/Ps),c=n%Ps,h=Math.min(i-l*Ps,Ps),d=c-(h-1)/2,u=l*Ps+c,f=gw+l*xw,g=d*_w;return new P(r.x+a.radialX*f+a.tangentX*g,r.y-1.62-u*vw-l*yw,r.z+a.radialZ*f+a.tangentZ*g)}function x_(t,e,n){return{fromId:t,toId:e,waypoints:[new P(n.x,n.y-Sw,n.z)]}}function __(t){let e=[],n=[],i=F_(t,{includeCompactionProgress:!0}),r=i.map(c=>WR(t,c)),o=r.reduce((c,h)=>c+h.above+h.below,0)/2,a=performance.now()+_f,l=[];return i.forEach((c,h)=>{let d=r[h],u=o-d.above;if(o-=d.above+d.below,c.type==="compaction"){let T=c.compaction,F=T.eventIndex>sr,L={id:T.id,type:"compaction",kind:"compaction",promptId:T.id,promptIndex:c.compactionIndex,callIndex:-1,eventIndex:T.eventIndex,title:T.title,body:T.text,detail:T.detail,source:T,isNew:F,freshUntil:F?a:0,position:new P(0,h0,u),target:new P(0,h0,u),baseScale:.58,scale:.58};e.push(L),l.push(L);return}let{prompt:f,promptIndex:g}=c,_=e.length,{promptCalls:m,subagentBranches:p}=d,y=f.fileChanges||[],M=f.eventIndex>sr,E={id:f.id,type:"prompt",kind:"prompt",promptId:f.id,promptIndex:g,callIndex:-1,eventIndex:f.eventIndex??g,title:f.title,body:f.text,detail:f.text,source:f,isNew:M,freshUntil:M?a:0,position:new P(0,Rr,u),target:new P(0,Rr,u),baseScale:.78,scale:.78};e.push(E),l.push(E);let R=new Set(f.assistantMessages.map(T=>T.id)),S=d.activityUnits,w=[],x=E.id,A=null,N=0;S.forEach((T,F)=>{let L=qR(u,F);if(T.type==="call"){e.push(wr(f,g,T.call,N,L,a)),n.push(L0(x,T.call.id,u,A,F)),w.push({id:T.call.id,eventIndex:T.call.eventIndex}),x=T.call.id,A=F,N+=1;return}let $=cI(f,g,T.message,N,L,a,T.calls.length?.58:.32);e.push($),n.push(L0(x,$.id,u,A,F)),w.push({id:$.id,eventIndex:T.message.eventIndex}),x=$.id,A=F,N+=1,T.calls.forEach((q,ee)=>{let se=eI($.target,u,ee,T.calls.length);e.push(wr(f,g,q,N,se,a)),n.push([$.id,q.id]),w.push({id:q.id,eventIndex:q.eventIndex}),N+=1})});let I=N+p.length*2;p.forEach((T,F)=>{let L=p_(T,F,u),$=I;if(I+=T.nodes.length,T.launch){let q=wr(f,g,T.launch,N,new P(L.launchX,L.branchY,L.branchZ),a,{kind:"subagent",title:B0(T.launch),baseScale:.52,fileAxisX:L.branchX,fileAxisZ:L.branchZ});e.push(q),n.push([F0(T.launch,E.id,R),q.id]),N+=1}if(T.result){let q=wr(f,g,T.result,N,new P(L.resultX,L.branchY-.34,T.launch?L.resultZ:L.branchZ),a,{kind:"subagent-result",title:B0(T.result),baseScale:.38,fileAxisX:L.branchX,fileAxisZ:T.launch?L.resultZ:L.branchZ});e.push(q),n.push([T.launch?.id??F0(T.result,E.id,R),q.id]),N+=1}nI({branch:T,parentId:T.result?.id??T.launch?.id??E.id,prompt:f,promptIndex:g,branchX:L.branchX,branchY:L.branchY,startZ:L.childStartZ,callIndexStart:$,freshUntil:a,allNodes:e,allConnectors:n})});let D=new Map;for(let T=_;T<e.length;T+=1){let F=e[T];D.set(F.id,F)}let k=new Map,H=new Map;y.forEach(T=>{let F=T.callId&&D.has(T.callId)?T.callId:tI(T.eventIndex,w,E.id);k.set(T.id,F);let L=H.get(F)??[];L.push(T),H.set(F,L)}),y.forEach((T,F)=>{let L=k.get(T.id)??E.id,$=D.get(L)??E,q=H.get(L)??[T],ee=Math.max(0,q.findIndex(et=>et.id===T.id)),se=Af($,u,ee,q.length),xe=`file-${If(T)}`,He={id:T.id,type:"fileChange",kind:xe,promptId:f.id,promptIndex:g,callIndex:N+F,eventIndex:T.eventIndex??f.eventIndex??g,title:T.shortPath||Qt(T.path)||"file change",body:T.preview||T.path,detail:pI(T),source:T,isNew:T.eventIndex>sr,freshUntil:T.eventIndex>sr?a:0,position:se.clone(),target:se,baseScale:.42,scale:.42};e.push(He),n.push(x_(L,He.id,$.target))})}),l.forEach((c,h)=>{let d=l[h+1];d&&n.push([c.id,d.id])}),e.forEach(c=>{c.home=c.target.clone()}),{nodes:e,connectors:n}}function nI({branch:t,parentId:e,prompt:n,promptIndex:i,branchX:r,branchY:s,startZ:o,callIndexStart:a,freshUntil:l,allNodes:c,allConnectors:h}){let d=S_(t.nodes),u=e,f=null,g=0,_=0,m=o;d.forEach(p=>{v_(p).forEach(M=>{let E=g,R=wf(r,s,m,E),S=Cf(m,E),w=u,x=[{id:w,eventIndex:M.spine?.eventIndex??Number.NEGATIVE_INFINITY,target:R,fileAxisX:r,fileAxisZ:S}];if(M.spine){let N=wr(n,i,M.spine,a+_,R,l,{kind:M.spine.name==="subagent.prompt"?"subagent":M.spine.kind,title:Kd(M.spine),baseScale:Jd(M.spine),fileAxisX:r,fileAxisZ:S});c.push(N),h.push(aI(u,N.id,r,s,m,f,E)),u=N.id,f=E,w=N.id,x[0]=N,_+=1}let A=Cu(R,S,r,r<0?-1:1);M.children.forEach((N,I)=>{let D=y_(R,A,I,M.children.length),k=wr(n,i,N,a+_,D,l,{title:Kd(N),baseScale:Jd(N),fileAxisX:r,fileAxisZ:S});c.push(k),h.push([w,k.id]),x.push(k),_+=1}),iI({files:M.files,fileAnchors:x,axisZ:S,prompt:n,promptIndex:i,callIndexStart:a,childOffset:_,freshUntil:l,allNodes:c,allConnectors:h}),_+=M.files.length,g+=1})})}function iI({files:t,fileAnchors:e,axisZ:n,prompt:i,promptIndex:r,callIndexStart:s,childOffset:o,freshUntil:a,allNodes:l,allConnectors:c}){m_(t,e).forEach(({file:h,parent:d,siblingIndex:u,siblingCount:f},g)=>{let _=Af(d,n,u,f),m=wr(i,r,h,s+o+g,_,a,{title:h.argumentPreview||Kd(h),baseScale:Jd(h),fileAxisX:d.fileAxisX,fileAxisZ:d.fileAxisZ});l.push(m),c.push(x_(d.id,m.id,d.target))})}function v_(t){let e=[],n=null;return t.prompt&&(n={spine:t.prompt,children:[],files:[]},e.push(n)),t.children.forEach(i=>{if(rI(i)){n={spine:i,children:[],files:[]},e.push(n);return}if(n||(n={spine:null,children:[],files:[]},e.push(n)),sI(i)){n.files.push(i);return}n.children.push(i)}),e.length?e:[{spine:null,children:[],files:[]}]}function rI(t){return t.name==="subagent.message"||t.name==="subagent.compaction"||t.name==="subagent.more"}function sI(t){return t.name==="subagent.file"}function oI(t,e){return g_(t,e,e[0])??e[0]}function Cf(t,e){return t-e*Lw}function aI(t,e,n,i,r,s,o){let a=s??o-.85,l=6,c=[];for(let h=1;h<=l;h+=1){let d=h/(l+1),u=a+(o-a)*d;c.push(wf(n,i,r,u))}return{fromId:t,toId:e,waypoints:c}}function wf(t,e,n,i){let r=t<0?-1:1,s=Lx+i*Bw+r*.28,o=Fw+Math.min(Ow,i*Dw);return new P(t+r*Uw+Math.sin(s)*o*r,e-.9-i*kw+Math.cos(s)*Vw,Cf(n,i)+Math.cos(s)*o)}function lI(t,e){return f_(t,e,Ud,Gw,.2)}function y_(t,e,n,i){let r=Math.floor(n/Ud),s=n%Ud,o=lI(n,i),a=Hw+r*zw;return new P(t.x+e.radialX*a+e.tangentX*o,t.y-.36-s*Ww-r*$w,t.z+e.radialZ*a+e.tangentZ*o)}function S_(t){let e=[],n=null;return t.forEach(i=>{if(i.name==="subagent.prompt"){n={prompt:i,children:[]},e.push(n);return}n||(n={prompt:null,children:[]},e.push(n)),n.children.push(i)}),e}function wr(t,e,n,i,r,s,{kind:o=n.kind||"tool",title:a=n.name,baseScale:l=n.status==="completed"?.3:.4,fileAxisX:c,fileAxisZ:h}={}){let d=n.eventIndex>sr,u=Su(n),f=u.length?"skill":JP(n)?"patch":o,g=u.length?ba(u):a;return{id:n.id,type:"call",kind:f,promptId:t.id,promptIndex:e,callIndex:i,eventIndex:n.eventIndex??t.eventIndex??e,title:g,body:n.argumentPreview||"",detail:fI(n),source:n,isNew:d,freshUntil:d?s:0,position:r.clone(),target:r,fileAxisX:c,fileAxisZ:h,baseScale:l,scale:l,skillNames:u}}function cI(t,e,n,i,r,s,o=.32){let a=n.eventIndex>sr,l=Mu(n.text);return{id:n.id,type:"message",kind:l.length?"skill":"assistant",promptId:t.id,promptIndex:e,callIndex:i,eventIndex:n.eventIndex??t.eventIndex??e,title:l.length?ba(l):"assistant message",body:n.text,detail:n.text,source:n,isNew:a,freshUntil:a?s:0,position:r.clone(),target:r,baseScale:o,scale:o,skillNames:l}}function M_(t){let e=t.filter(dI),n=t.filter(b_),i=new Set(n),r=new Map,s=new Map;n.forEach(a=>{let l=O0(a);if(s.set(a.id,l),!l)return;let c=r.get(l)??[];c.push(a),r.set(l,c)});let o=e.map((a,l)=>{let c=O0(a),d=(c?r.get(c)?.find(u=>i.has(u)&&u.eventIndex>=a.eventIndex):null)??n.find(u=>i.has(u)&&u.eventIndex>=a.eventIndex&&uI(c,s.get(u.id)??null))??null;return d&&i.delete(d),{launch:a,result:d,nodes:D0(a,d),eventIndex:Math.min(a.eventIndex,d?.eventIndex??a.eventIndex),order:l}}).filter(hI);return i.forEach(a=>{o.push({launch:null,result:a,nodes:D0(null,a),eventIndex:a.eventIndex,order:e.length+o.length})}),o.sort((a,l)=>a.eventIndex-l.eventIndex||a.order-l.order)}function uI(t,e){return e===null||t===e}function hI(t){return!!(t.result||t.nodes.length)}function dI(t){return t.name==="spawn_agent"}function b_(t){return t.name==="subagent"}function D0(t,e){return t?.subagentNodes?.length?t.subagentNodes:e?.subagentNodes??[]}function O0(t){let e=`${t.argumentPreview||""}
${t.outputPreview||""}`;return e.match(/"agent_id"\s*:\s*"([^"]+)"/)?.[1]??e.match(/\bagent:\s*([^\s,}]+)/)?.[1]??e.match(/"agent_path"\s*:\s*"([^"]+)"/)?.[1]??null}function B0(t){return Ko(t.name)??(b_(t)?"subagent result":"subagent launch")}function Kd(t){let e=Ko(t.name);return e?t.name==="subagent.more"&&t.argumentPreview?t.argumentPreview:e:t.name}function Jd(t){return t.name==="subagent.prompt"?.34:t.name==="subagent.more"?.26:t.status==="completed"?.24:.32}function fI(t){let e=[`call: ${t.name}`,`kind: ${t.kind}`,`status: ${t.status}`,t.assistantMessageId?`assistant message: ${t.assistantMessageId}`:"",t.subagentSessionPath?`subagent session: ${t.subagentSessionPath}`:"",t.subagentNodes?.length?`subagent nodes: ${t.subagentNodes.length}`:"",t.startedAt?`started: ${t.startedAt}`:"",t.completedAt?`completed: ${t.completedAt}`:"",t.durationMs!==null&&t.durationMs!==void 0?`duration: ${Tg(t.durationMs)}`:"","","arguments:",t.argumentPreview||"{}"];return t.outputPreview&&e.push("","output:",t.outputPreview),e.filter(Boolean).join(`
`)}function pI(t){return[`change: ${t.changeType}`,`path: ${t.path}`,t.callId?`call: ${t.callId}`:"",t.timestamp?`time: ${t.timestamp}`:"","",t.detail||t.preview].filter(Boolean).join(`
`)}function mI(){let t=Be.filter(s=>s.type==="prompt"),e=Be.filter(s=>s.type==="call"),n=Be.filter(s=>s.type==="fileChange"),i=Be.filter(s=>s.type==="message"),r=Be.filter(s=>s.type==="compaction");fi.prompt=ia("prompt",t,lR,fR),fi.call=ia("call",e,T0,A0),fi.fileChange=ia("fileChange",n,uR,mR),fi.message=ia("message",i,T0,A0),fi.compaction=ia("compaction",r,cR,pR)}function ia(t,e,n,i){if(!e.length)return;let r=new _o(n.clone(),i.clone(),e.length);r.instanceMatrix.setUsage(Hh),r.userData.bucket=t,r.userData.nodes=e,r.boundingSphere=new rn(new P,600),r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,Ln.add(r);let s=performance.now();return e.forEach((o,a)=>{o.bucket=t,o.instanceIndex=a,H_(r,o,a,0,s),o.matrixDirty=!1,r.setColorAt(a,Df(o,!1))}),r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r}function gI(){let t=Math.max(Nd(or),Nd(ma),Math.max(Be.length-1,1)),e=new Float32Array(t*2*3),n=new It;n.setAttribute("position",new Ut(e,3)),n.setDrawRange(0,Nd(ma)*2),n.boundingSphere=new rn(new P,600);let i=new _r({color:6547455,transparent:!0,opacity:.42});Yn=new fs(n,i),Yn.frustumCulled=!1,Ln.add(Yn)}function E_(){Object.values(fi).forEach(t=>{t&&(Ln.remove(t),t.geometry.dispose(),t.material.dispose())}),fi={},Yn&&(Ln.remove(Yn),Yn.geometry.dispose(),Yn.material.dispose(),Yn=null),an&&(Ln.remove(an),an.geometry.dispose(),an.material.dispose(),an=null),U0(Vd,fa),U0(Hd,pa)}function U0(t,e){t.forEach(n=>{A_(n,e)}),t.clear()}function T_(t,e,n){Array.from(t.keys()).forEach(i=>{n.has(i)||(A_(t.get(i),e),t.delete(i))})}function A_(t,e){t?.forEach(n=>{e.remove(n),n.material.dispose()})}function C_(t,e,n,i,r,s){let o=t.get(e);return o||(o=Array.from({length:n},(a,l)=>xI(e,l/n,i,r,s)),t.set(e,o)),o}function xI(t,e,n,i,r){let s=new Hn({color:r,transparent:!0,opacity:0,side:Tn,depthWrite:!1,blending:Fo}),o=new Xt(i,s);return o.userData={nodeId:t,offset:e},o.rotation.x=-Math.PI/2,o.visible=!1,n.add(o),o}function cr({preserveCamera:t=!1}={}){let e;if(_t==="inspect"&&it){let n=Rf(it);e=n;let i=new Map(n.placements.map(r=>[r.node.id,r]));Be.forEach(r=>{let s=i.get(r.id);s?(r.target.copy(s.target),r.scale=s.scale):(r.target.set(r.position.x,xf,r.position.z),r.scale=0),r.matrixDirty=!0}),t||(Ke.target.set(0,.2,-n.laneDepth*.12),Fe.position.set(0,18,Math.max(27,n.laneDepth*.58)))}else Be.forEach(n=>{n.target.copy(n.home??n.position),n.scale=n.baseScale,n.position.y<-1e3&&n.position.copy(n.target),n.matrixDirty=!0}),t||wa();EI(),w_(e),Aa(),Ys=!0,wu()}function w_(t){if(_t==="inspect"&&it){ma=(t??Rf(it)).connectors;return}ma=or}function Rf(t){let e=Be.filter(f=>f.promptId===t),n=_I(t),i=new Set(n.flatMap(f=>f.nodes.map(g=>g.id))),r=e.filter(f=>f.type==="prompt"||!i.has(f.id)).sort(I_),s=[...r.map((f,g)=>({type:"node",eventIndex:f.eventIndex,order:g*2,node:f})),...n.map(f=>({type:"branch",eventIndex:f.eventIndex,order:f.order*2+1,branch:f}))].sort(SI),o=n.reduce((f,g)=>Math.max(f,g.nodes.length),0),a=Math.min(ZC,Math.max(YC,Math.max(0,s.length-1)*KC,Math.max(0,o-1)*l0+8)),l=s.length>1?a/(s.length-1):0,c=a/2,h=new Map;s.forEach((f,g)=>{let _=c-g*l;f.type==="node"?h.set(f.node.id,_):f.branch.startZ=_});let d=r.map(f=>({node:f,target:new P(0,N_(f),h.get(f.id)??0),scale:V0(f)}));n.forEach(f=>{let g=f.side*(JC+f.lane*jC);f.nodes.forEach((_,m)=>{d.push({node:_,target:new P(g+bI(_,m,f.side),MI(_),f.startZ-m*l0),scale:V0(_)})})});let u=vI(s,r,n);return{placements:d,visibleNodes:R_([...r,...n.flatMap(f=>f.nodes)]),mainNodes:r,branches:n,connectors:u,laneDepth:a}}function _I(t){let e=Ae,n=e?.prompts.find(i=>i.id===t);return!e||!n?[]:M_(O_(e,n)).map((i,r)=>{let s=R_([i.launch?Nt.get(i.launch.id):null,...i.nodes.map(o=>Nt.get(o.id)),i.result?Nt.get(i.result.id):null]);return s.length?{nodes:s,eventIndex:i.eventIndex,order:r,side:r%2===0?-1:1,lane:Math.floor(r/2),startZ:0}:null}).filter(i=>!!i)}function vI(t,e,n){let i=[];return e.slice(1).forEach((r,s)=>{i.push([e[s].id,r.id])}),n.forEach(r=>{let s=r.nodes[0];if(!s)return;let o=t.findIndex(l=>l.type==="branch"&&l.branch===r),a=yI(t,o)??e[0]??null;a&&i.push([a.id,s.id]),r.nodes.slice(1).forEach((l,c)=>{i.push([r.nodes[c].id,l.id])})}),i}function yI(t,e){for(let n=e-1;n>=0;n-=1){let i=t[n];if(i?.type==="node")return i.node}return null}function R_(t){let e=new Set;return t.filter(n=>!n||e.has(n.id)?!1:(e.add(n.id),!0))}function I_(t,e){return t.type==="prompt"&&e.type!=="prompt"?-1:e.type==="prompt"&&t.type!=="prompt"?1:t.eventIndex-e.eventIndex||t.callIndex-e.callIndex||k0(t)-k0(e)}function SI(t,e){let n=t.type==="node"&&t.node.type==="prompt",i=e.type==="node"&&e.node.type==="prompt";return n!==i?n?-1:1:t.eventIndex-e.eventIndex||t.order-e.order}function k0(t){return t.type==="prompt"?0:t.type==="message"?1:t.type==="call"?2:t.type==="fileChange"?3:4}function N_(t){return t.type==="prompt"?1.15:t.type==="fileChange"?-.32:t.type==="message"?.62:t.type==="compaction"?.82:.24}function MI(t){return t.type!=="call"?N_(t):t.source.name==="subagent.prompt"?.72:t.source.name==="subagent.compaction"?.54:t.source.name==="spawn_agent"?.46:t.source.name==="subagent"?.3:t.source.name==="subagent.file"?-.16:t.source.name==="subagent.message"?.2:.04}function bI(t,e,n){if(t.type!=="call"||e===0||t.source.name==="subagent.prompt"||t.source.name==="subagent"||t.source.name==="subagent.more")return 0;let i=[.3,-.3,.58,-.58];return i[(e-1)%i.length]*n}function V0(t){return t.type==="prompt"?.62:t.type==="fileChange"?.36:t.type==="message"?.28:t.type==="compaction"?.48:t.source.name==="spawn_agent"?.44:t.source.name==="subagent"?.36:t.source.name==="subagent.prompt"?.34:t.source.name==="subagent.more"?.26:Math.min(.34,Math.max(.24,t.baseScale))}function EI(){let t=_t==="inspect"&&!!it;mf.classList.toggle("inspect-active",t),nt.setAttribute("aria-label",t?"Perlustron focused prompt inspection":"Perlustron session workflow"),P_()}function P_(){let t=_t==="overview"&&Ir==="two-d";Ax.forEach(e=>{if(e.dataset.viewAction!=="two-d")return;let n=t?"Switch to 3D overview":"Switch to 2D overview";e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n})}function L_(t){Ef(),_t="overview",Ir=t,cr({preserveCamera:!0}),wa(),P_()}function TI(){L_(_t==="overview"&&Ir==="two-d"?"three-d":"two-d")}function F_(t,{includeCompactionProgress:e=!1}={}){let n=wI(t),i=[...n.map((s,o)=>({type:"prompt",eventIndex:AI(t,n,s,o),prompt:s,promptIndex:o})),...(t.compactions||[]).map((s,o)=>({type:"compaction",eventIndex:s.eventIndex,compaction:s,compactionIndex:o}))],r=e?RI(t,i):null;return r&&i.push(r),i.sort((s,o)=>s.eventIndex-o.eventIndex)}function AI(t,e,n,i){let r=e[i+1]?.eventIndex??Number.POSITIVE_INFINITY,s=CI(t,n),o=t.compactions?.filter(a=>a.eventIndex>n.eventIndex&&a.eventIndex<r).reduce((a,l)=>a===null||l.eventIndex>a?l.eventIndex:a,null)??null;return o!==null?Math.max(s,o+.25):s}function CI(t,e){let n=e.id===B_(t)?[...Kn.activeToolCalls,...Kn.completedToolCalls].map(i=>i.eventIndex):[];return Math.max(e.eventIndex,...e.calls.map(i=>i.eventIndex),...e.assistantMessages.map(i=>i.eventIndex),...(e.fileChanges||[]).map(i=>i.eventIndex),...n)}function wI(t){let e=D_(t);return e?[...t.prompts,e]:t.prompts}function D_(t){let e=Kn.pendingPrompt;return!e||e.eventIndex<=t.latestEventIndex?null:{id:Fr,eventIndex:e.eventIndex,timestamp:e.timestamp,title:e.title||"Incoming prompt",text:e.text,images:[],calls:[],assistantMessages:[],fileChanges:[]}}function O_(t,e){if(e.id!==B_(t))return e.calls;let n=new Set(e.calls.map(r=>r.id)),i=[...Kn.activeToolCalls,...Kn.completedToolCalls].filter(r=>!n.has(r.id)&&r.eventIndex>t.latestEventIndex);return i.length?[...e.calls,...i]:e.calls}function B_(t){return D_(t)?Fr:t.prompts.at(-1)?.id??null}function RI(t,e){if(!ga)return null;let n=e.reduce((o,a)=>a.type!=="prompt"?o:!o||a.eventIndex>=o.eventIndex?a:o,null),r=Math.max(t.latestEventIndex,n?.eventIndex??0)+.5,s={id:Gs,eventIndex:r,timestamp:t.lastModifiedAt||t.generatedAt||null,title:"Compacting context",text:"Compaction in progress",detail:["compaction: in progress",n?`anchor: ${n.prompt.title}`:"",t.pendingBytes>0?`pending bytes: ${t.pendingBytes}`:""].filter(Boolean).join(`
`),replacedMessageCount:0,encrypted:!1,reason:"in progress"};return{type:"compaction",eventIndex:r,compaction:s,compactionIndex:t.compactions.length}}function If(t){return GA.includes(t.changeType)?t.changeType:"update"}function II(){let t=performance.now(),e=t/1e3,n=Math.min(e-b0,.04);b0=e,Kc+=n;let i=XI(n);qI(t),QI(Kc,t),(i||Ys)&&wu(),i&&Aa(),YI(t,Kc),KI(t,Kc),NI(n),CR(t),Ke.update(),$I(),Ri?.render(Ln,Fe)}function NI(t){let e=(In.has("KeyW")?1:0)-(In.has("KeyS")?1:0),n=(In.has("KeyD")?1:0)-(In.has("KeyA")?1:0),i=(In.has(Dx)?1:0)-(Ev()?1:0);if(!e&&!n&&!i||(WI(),Fe.getWorldDirection(pi),y0.crossVectors(pi,Fe.up).normalize(),ea.set(0,0,0).addScaledVector(pi,e).addScaledVector(y0,n).addScaledVector(Fe.up,i),ea.lengthSq()<1e-6))return;Tu();let r=Fe.position.distanceTo(Ke.target),s=Math.min(Jw,Math.max(Kw,r*jw)),o=IP()?s*Qw:s;ea.normalize().multiplyScalar(o*t),Fe.position.add(ea),Ke.target.add(ea)}function PI(t){t.preventDefault()}function LI(t){let e=t.deltaMode===WheelEvent.DOM_DELTA_PAGE?window.innerHeight:t.deltaMode===WheelEvent.DOM_DELTA_LINE?16:1,n=Math.max(-f0,Math.min(f0,t.deltaY*e/Zw));Math.abs(n)<.001||(Qd(-n),t.preventDefault())}function FI(t){if(!(t.button!==0||!UI(t))){uu=t.pointerId,va=!1,qd=t.clientX,Yd=t.clientY,Gx=t.clientX,Wx=t.clientY,Sf=U_(t,Bx),nt.classList.add("grabbing");try{nt.setPointerCapture(t.pointerId)}catch{}t.preventDefault(),t.stopImmediatePropagation()}}function DI(t){if(t.pointerId!==uu)return;if((t.buttons&1)===0){Nf(t);return}let e=t.clientX-qd,n=t.clientY-Yd;qd=t.clientX,Yd=t.clientY;let i=(t.clientX-Gx)**2+(t.clientY-Wx)**2;va=va||i>rR**2,(Sf?OI(t):BI(e,n))&&Tu(),t.preventDefault(),t.stopImmediatePropagation()}function Nf(t){if(t.pointerId===uu){uu=null,hu=hu||va,va=!1,Sf=!1,nt.classList.remove("grabbing");try{nt.hasPointerCapture(t.pointerId)&&nt.releasePointerCapture(t.pointerId)}catch{}t.stopImmediatePropagation()}}function OI(t){return!U_(t,x0)||(Cr.copy(Bx).sub(x0),Cr.lengthSq()<=1e-6)?!1:(Fe.position.add(Cr),Ke.target.add(Cr),Ke.update(),!0)}function U_(t,e){return Ru(t),au.setFromCamera(Ws,Fe),!!au.ray.intersectPlane(Ux,e)}function BI(t,e){if(!t&&!e)return!1;let n=nt.getBoundingClientRect();if(n.width<=0||n.height<=0)return!1;let i=k_(),r=2*Math.tan(bs.degToRad(Fe.fov)/2)*i,s=r/n.height,o=r*Fe.aspect/n.width;return _0.setFromMatrixColumn(Fe.matrix,0).normalize(),v0.setFromMatrixColumn(Fe.matrix,1).normalize(),Cr.set(0,0,0).addScaledVector(_0,-t*o).addScaledVector(v0,e*s),Fe.position.add(Cr),Ke.target.add(Cr),Ke.update(),!0}function k_(){if(au.setFromCamera(sR,Fe),au.ray.intersectPlane(Ux,vn))return Math.max(.001,Fe.position.distanceTo(vn));Fe.getWorldDirection(pi);let t=Math.abs(Fe.position.y-gf);return Math.max(.001,t/Math.max(.12,Math.abs(pi.y)))}function UI(t){return xt==="map"&&!Lr(t.target)}function kI(t){if(!(t.button!==2||!GI(t))){yf=!0,_a=t.pointerId,$d=t.clientX,Xd=t.clientY,Pf();try{nt.setPointerCapture(t.pointerId)}catch{}t.preventDefault()}}function VI(t){if(!yf||t.pointerId!==_a)return;let e=t.clientX-$d,n=t.clientY-Xd;$d=t.clientX,Xd=t.clientY,HI(e,n),t.preventDefault()}function V_(t){t.pointerId===_a&&(zI(t.pointerId),t.preventDefault())}function HI(t,e){!t&&!e||(ta.setFromQuaternion(Fe.quaternion,"YXZ"),ta.y-=t*p0,ta.x=Math.max(-m0,Math.min(m0,ta.x-e*p0)),Fe.quaternion.setFromEuler(ta),Pf(),Tu())}function zI(t=_a){yf=!1,_a=null;try{t!=null&&nt.hasPointerCapture(t)&&nt.releasePointerCapture(t)}catch{}}function GI(t){return!(_t==="overview"&&Ir==="two-d")&&!Lr(t.target)}function WI(){Fe.position.distanceTo(Ke.target)>Ox&&Pf()}function Pf(){let t=Math.min(Ox,Math.max(iR,Fe.position.distanceTo(Ke.target)));Fe.getWorldDirection(pi),Ke.target.copy(Fe.position).addScaledVector(pi,t),Ke.update()}function $I(){Xs.position.x=Math.round(Ke.target.x/Yc)*Yc,Xs.position.z=Math.round(Ke.target.z/Yc)*Yc}function XI(t){let e=1-Math.pow(.001,t),n=!1;return Be.forEach(i=>{i.position.distanceToSquared(i.target)<4e-6||(i.position.lerp(i.target,e),i.matrixDirty=!0,n=!0)}),n}function qI(t){let e=!1;Be.forEach(n=>{n.isNew&&!zr(n,t)&&(n.isNew=!1,n.matrixDirty=!0,e=!0)}),e&&Mn()}function YI(t,e){let n=Be.filter(o=>o.type==="compaction"&&Dn(o)&&zr(o,t)),i=new Map;n.forEach(o=>{i.set(o.id,{position:o.position,eventIndex:o.eventIndex,progress:Lf(o,t),inProgress:!1})});let r=ga?ZI():null;if(r){let o=cu?t-cu:0;i.set(Gs,{position:r.position,eventIndex:r.eventIndex,progress:o/2200%1,inProgress:!0})}let s=new Set(i.keys());T_(Vd,fa,s),i.forEach((o,a)=>{let l=C_(Vd,a,QC,fa,hR,Zo.compaction),c=o.inProgress?.82:Math.sin(Math.min(1,o.progress)*Math.PI);l.forEach((h,d)=>{let u=(o.progress+h.userData.offset)%1,f=Math.pow(1-u,o.inProgress?1.35:1.8)*(.18+c*.56);h.position.set(o.position.x,o.position.y-(o.inProgress?.82:.66),o.position.z),h.scale.setScalar(o.inProgress?1.45+u*6.2+Math.sin(e*5.2)*.16:1.2+u*8.4),h.rotation.z=e*(o.inProgress?-.9:.45)+o.eventIndex*.01+d*.72,h.material.opacity=f,h.visible=f>.012})})}function ZI(){let t=Nt.get(Gs);if(t)return t;if(it){let e=Nt.get(it);if(e?.type==="prompt")return e}return Of()??Z_()??Y_()}function KI(t,e){let n=Be.filter(a=>a.type==="prompt"&&Dn(a)&&zr(a,t)),i=Kn.assistantStreaming?Of():null,r=i&&Dn(i)?i:null,s=JI(r?[...n,r]:n),o=new Set(s.map(a=>a.id));T_(Hd,pa,o),s.forEach(a=>{let l=C_(Hd,a.id,ew,pa,dR,Zo.prompt),c=Lf(a,t),h=Math.sin(Math.min(1,c)*Math.PI);l.forEach((d,u)=>{let f=(c+d.userData.offset)%1,g=Math.pow(1-f,1.55)*(.1+h*.38);d.position.set(a.position.x,a.position.y-.74,a.position.z),d.scale.set(1+f*3.2,1+f*5.4,1),d.rotation.z=e*.72+a.eventIndex*.012+u*Math.PI*.5,d.material.opacity=g,d.visible=g>.01})})}function JI(t){let e=new Set;return t.filter(n=>e.has(n.id)?!1:(e.add(n.id),!0))}function jI(){if(!Be.length)return;let t=new It;t.setAttribute("position",new Ut(new Float32Array(Be.length*3),3)),t.setAttribute("color",new Ut(new Float32Array(Be.length*3),3)),t.boundingSphere=new rn(new P,600);let e=new ps({size:3,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1}),n=new vo(t,e);n.frustumCulled=!1,n.renderOrder=5,n.userData.nodes=Be,an=n,Ln.add(n),Ys=!0,wu()}function wu(){if(!an)return;let t=an.geometry.getAttribute("position"),e=t.array;Be.forEach((n,i)=>{let r=i*3;Dn(n)?(e[r]=n.position.x,e[r+1]=n.position.y,e[r+2]=n.position.z):(e[r]=0,e[r+1]=xf,e[r+2]=0)}),t.needsUpdate=!0,Ys&&X_()}function QI(t,e){Object.values(fi).forEach(n=>{if(!n)return;let i=!1;n.userData.nodes.forEach((r,s)=>{let o=zr(r,e),a=r.id===dt;!r.matrixDirty&&!o&&!a||(H_(n,r,s,t,e,o,a),r.matrixDirty=!1,i=!0)}),i&&(n.instanceMatrix.needsUpdate=!0)})}function H_(t,e,n,i,r=performance.now(),s=zr(e,r),o=e.id===dt){if(!Dn(e)){Rn.position.set(0,xf,0),Rn.rotation.set(0,0,0),Rn.scale.setScalar(0),Rn.updateMatrix(),t.setMatrixAt(n,Rn.matrix);return}let a=Lf(e,r),l=s&&e.type==="compaction",c=s?l?.18+H0(a)*1.08:.26+H0(a)*.74:1,h=l?.28:.16,d=s?1+Math.max(0,Math.sin(i*(l?14:9)+e.eventIndex))*h:1,u=(o?1.18:s?1+Math.sin(i*2.3+e.eventIndex)*.018:1)*d;Rn.position.copy(e.position),_t==="inspect"||!s&&!o?Rn.rotation.set(0,0,0):l?Rn.rotation.set(i*1.45,i*2.2+e.eventIndex*.03,i*1.1):Rn.rotation.set(.08*Math.sin(i+e.eventIndex),i*.2+e.eventIndex*.07,0),Rn.scale.setScalar(e.scale*c*u),Rn.updateMatrix(),t.setMatrixAt(n,Rn.matrix)}function zr(t,e){return!!(t.freshUntil&&t.freshUntil>e)}function Lf(t,e){return!t.freshUntil||t.freshUntil<=e?1:Math.max(0,Math.min(1,1-(t.freshUntil-e)/_f))}function H0(t){return 1-Math.pow(1-t,3)}function Aa(){if(!Yn)return;let t=Yn.geometry.getAttribute("position"),e=t.array,n=0,i=(r,s)=>{let o=n*6;e[o]=r.x,e[o+1]=r.y,e[o+2]=r.z,e[o+3]=s.x,e[o+4]=s.y,e[o+5]=s.z,n+=1};ma.forEach(r=>{let s=tu(r),o=nu(r),a=Nt.get(s),l=Nt.get(o);if(!a||!l||!Dn(a)||!Dn(l))return;let c=a.position;Array.isArray(r)||r.waypoints.forEach(h=>{i(c,h),c=h}),i(c,l.position)}),Yn.geometry.setDrawRange(0,n*2),t.needsUpdate=!0}function eN(t){if(hu){hu=!1;return}Ru(t);let e=z_();e&&Js(e)}function tN(t){Ru(t);let e=z_();if(e){if(e.type==="compaction"){it=null,_t="overview",cr(),Js(e);return}e.type==="prompt"?j0(e.id,e):j0(e.promptId,e)}}function Ru(t){let e=nt.getBoundingClientRect();Ws.x=(t.clientX-e.left)/e.width*2-1,Ws.y=-((t.clientY-e.top)/e.height*2-1)}function z_(){let t=nN();if(t)return t;kd.setFromCamera(Ws,Fe);let e=Object.values(fi).filter(i=>!!i);an&&e.push(an);let n=kd.intersectObjects(e,!1);for(let i of n){if(i.object===an&&i.index!==void 0){let r=an.userData.nodes[i.index]||null;if(r&&Dn(r))return r;continue}if(i.instanceId!==void 0){let s=i.object.userData.nodes[i.instanceId]||null;if(s&&Dn(s))return s}}return null}function nN(){let t=nt.getBoundingClientRect(),e=t.left+(Ws.x+1)/2*t.width,n=t.top+(1-Ws.y)/2*t.height,i=null,r=g0*g0;return Be.forEach(s=>{if(!Dn(s)||(vn.copy(s.position).project(Fe),vn.z<-1||vn.z>1))return;let o=t.left+(vn.x+1)/2*t.width,a=t.top+(1-vn.y)/2*t.height,l=(o-e)**2+(a-n)**2;l<=r&&(i=s,r=l)}),i}function Br(t){bu=t??{},xt==="raw"&&Ae&&Xf()}function iN(t){rr=t??null,xt==="timeline"&&Ae&&av()}function G_(){bu=null,xt==="raw"&&Ae&&Xf()}function Js(t,{reveal:e=!0,skipStableRender:n=!1}={}){if(!t)return;dt=t.id;let i=rN(t);if(n&&Vs?.nodeId===t.id&&Vs.signature===i&&kf()){Br(t.source),Ur();return}e&&J_(),Mn(),pf.textContent=Ug(t),lr.classList.toggle("prompt-context",t.type==="prompt"),cf(Ed(t),"Selection"),ff.textContent=Ad(t),lf(ux(t)),hf.textContent=Td(t),Br(t.source),Ur(),Ff(dx(t));let r=t.detail||t.body||t.title;t.type==="prompt"?aN(r):W_(r),Vs={nodeId:t.id,signature:i}}function rN(t){let e=dx(t).map(n=>[n.id,n.eventIndex,n.imageIndex,n.detail??"",n.mimeType].join("")).join("");return[t.id,t.type,t.kind,t.eventIndex,t.type==="prompt"?t.promptIndex:"",Ed(t),Ad(t),ux(t),t.detail||t.body||t.title,e].join("")}function ln(t,e,n={}){let i=String(e??""),r=Gc(i),s=r.some(o=>o.kind==="redaction");if(t.classList.toggle("redaction-readable-text",s),t.replaceChildren(),!s){t.textContent=i;return}if(n.includeSummary){let o=bd(i);if(o){let a=document.createElement("div");a.className="redaction-group-summary",a.setAttribute("aria-label","Redactions: grouped readable placeholders"),a.textContent=o,t.append(a)}}sN(t,r)}function sN(t,e){e.forEach(n=>{if(n.kind==="text"||!n.category){t.append(document.createTextNode(n.text));return}let i=document.createElement("span");i.className=`redaction-chip redaction-${n.category}`,i.textContent=n.text,i.title="Readable redaction placeholder; raw sensitive value is not present in this UI surface.",t.append(i)})}function oN(t){let e=bd(t);if(!e)return null;let n=document.createElement("div");return n.className="redaction-group-summary",n.setAttribute("aria-label","Redactions: grouped readable placeholders"),n.textContent=e,n}function W_(t){zs.classList.remove("stream-markdown"),ln(zs,t,{includeSummary:!0})}function aN(t){zs.classList.add("stream-markdown");let e=Gc(t),n=e.some(s=>s.kind==="redaction")?e.map(s=>s.text).join(""):t,i=oN(t),r=uN(n)??pN(n);zs.replaceChildren(...[i,r].filter(s=>!!s))}var lN=["File","Side","Lines","Node position","Page URL","Frame","Target","Target selector","Target path","Comment"],cN=[{label:"File",field:"File"},{label:"Side",field:"Side"},{label:"Lines",field:"Lines"},{label:"Node",field:"Node position"},{label:"Target",field:"Target"},{label:"Selector",field:"Target selector"},{label:"Path",field:"Target path"},{label:"Page",field:"Page URL",asLink:!0},{label:"Frame",field:"Frame"}];function uN(t){if(!/^#\s+Diff comments:\s*$/m.test(t))return null;let e=hN(t);if(!e.length)return null;let n=document.createDocumentFragment(),i=document.createElement("section");i.className="annotation-prompt";let r=document.createElement("h1");r.textContent="Diff comments",i.append(r);let s=t.match(/^- Current URL:\s*(.+)$/m)?.[1]?.trim();return e.forEach(o=>{let a=document.createElement("article");a.className="annotation-item";let l=document.createElement("span");l.className="annotation-marker",l.textContent=`Comment ${o.number}`,a.append(l);let c=document.createElement("p");c.className="annotation-comment",c.textContent=z0(o,"Comment")||"No comment text.",a.append(c);let h=document.createElement("dl");h.className="annotation-meta",cN.forEach(d=>{G0(h,d.label,z0(o,d.field),d.asLink)}),G0(h,"Current",s,!0),a.append(h),i.append(a)}),n.append(i),n}function hN(t){let e=t.replace(/\r\n?/g,`
`),n=[...e.matchAll(/^##\s+Comment\s+(\d+)\s*$/gm)];return n.map((i,r)=>{let s=n[r+1]?.index??e.search(/\n# In app browser:/),o=s>=0?s:e.length,a=e.slice((i.index??0)+i[0].length,o);return{number:i[1],fields:dN(a)}})}function dN(t){let e=new Map,n=t.split(`
`),i=0;for(;i<n.length;){let r=n[i].match(/^([A-Z][A-Za-z ]+):\s*(.*)$/),s=r?.[1];if(!s||!$_(s)){i+=1;continue}let o=r[2].trim();if(o){e.set(s,o),i+=1;continue}let a=[];for(i+=1;i<n.length;){let l=n[i];if(!l.trim()||/^#{1,6}\s+/.test(l)||fN(l))break;a.push(l.trim()),i+=1}e.set(s,a.join(`
`).trim())}return e}function $_(t){return lN.includes(t)}function fN(t){let e=t.match(/^([A-Z][A-Za-z ]+):/);return!!(e&&$_(e[1]))}function z0(t,e){return t.fields.get(e)??""}function G0(t,e,n,i=!1){let r=n?.trim();if(!r)return;let s=document.createElement("dt");s.textContent=e;let o=document.createElement("dd");if(i&&/^https?:\/\//.test(r)){let a=document.createElement("a");a.href=r,a.target="_blank",a.rel="noopener noreferrer",a.textContent=r,o.append(a)}else o.textContent=r;t.append(s,o)}function pN(t){let e=document.createDocumentFragment(),n=t.replace(/\r\n?/g,`
`).split(`
`),i=0,r=(o,a)=>{o.innerHTML=W0(a)},s=(o,a)=>{o.innerHTML=a.map(l=>W0(l.trim())).join("<br>")};for(;i<n.length;){let o=n[i]??"";if(!o.trim()){i+=1;continue}let a=o.match(/^\s*```(\S*)\s*$/);if(a){let d=[];for(i+=1;i<n.length&&!/^\s*```\s*$/.test(n[i]??"");)d.push(n[i]??""),i+=1;i<n.length&&(i+=1);let u=document.createElement("pre"),f=document.createElement("code");a[1]&&(f.dataset.language=a[1]),f.textContent=d.join(`
`),u.append(f),e.append(u);continue}let l=o.match(/^\s{0,3}(#{1,6})\s+(.+)$/);if(l){let d=Math.min(6,l[1].length),u=document.createElement(`h${d}`);r(u,l[2]),e.append(u),i+=1;continue}if(/^\s*[-*]\s+/.test(o)){let d=document.createElement("ul");for(;i<n.length;){let u=(n[i]??"").match(/^\s*[-*]\s+(.+)$/);if(!u)break;let f=document.createElement("li");r(f,u[1]),d.append(f),i+=1}e.append(d);continue}if(/^\s*\d+\.\s+/.test(o)){let d=document.createElement("ol");for(;i<n.length;){let u=(n[i]??"").match(/^\s*\d+\.\s+(.+)$/);if(!u)break;let f=document.createElement("li");r(f,u[1]),d.append(f),i+=1}e.append(d);continue}let c=[];for(;i<n.length;){let d=n[i]??"";if(!d.trim()||/^\s*```/.test(d)||/^\s{0,3}#{1,6}\s+/.test(d)||/^\s*[-*]\s+/.test(d)||/^\s*\d+\.\s+/.test(d))break;c.push(d.trim()),i+=1}let h=document.createElement("p");s(h,c),e.append(h)}if(!e.childNodes.length){let o=document.createElement("p");o.textContent="",e.append(o)}return e}function W0(t){let e=[],n=ui(t).replace(/`([^`]+)`/g,(i,r)=>{let s=`@@CODE_SPAN_${e.length}@@`;return e.push(`<code>${r}</code>`),s});return n=n.replace(/\[([^\]\n]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)/g,(i,r,s)=>`<a href="${s}" target="_blank" rel="noopener noreferrer">${r}</a>`),n=n.replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>"),n=n.replace(/(^|[^\*])\*([^*\n]+)\*/g,"$1<em>$2</em>"),n=n.replace(/@@CODE_SPAN_(\d+)@@/g,(i,r)=>e[Number(r)]??""),n}function Ff(t=[]){if(n0.replaceChildren(),!t.length)return;let e=document.createDocumentFragment();t.forEach((n,i)=>{let r=document.createElement("figure"),s=mN(n),o=document.createElement("a");o.className="stream-image-link",o.href=s,o.target="_blank",o.rel="noopener",o.title=`Prompt image ${i+1}`;let a=document.createElement("img");a.loading="eager",a.decoding="async",a.src=s,a.alt=`Prompt image ${i+1}`,a.addEventListener("load",()=>{r.classList.add("loaded"),r.classList.remove("load-error")}),a.addEventListener("error",()=>{r.classList.add("load-error"),l.textContent="Image unavailable in this local/privacy context; use Raw or Export for redacted evidence."});let l=document.createElement("figcaption"),c=n.detail?` (${n.detail})`:"";l.textContent=`${n.mimeType||"image"}${c}`,o.append(a),r.append(o,l),e.append(r)}),n0.append(e)}function mN(t){let e=new URL(t.url,window.location.origin),n=Ae?.lastModifiedAt||Ae?.generatedAt||`${t.eventIndex}`,i=Fn||Ae?.sessionPath||null;return e.searchParams.set("v",n),qx(e,{includeSource:!1,sessionPath:i}),`${e.pathname}${e.search}`}function Mn(){Be.forEach(t=>{t.matrixDirty=!0}),Object.values(fi).forEach(t=>{if(!t)return;t.userData.nodes.forEach((n,i)=>{t.setColorAt(i,Df(n,n.id===dt))}),t.instanceColor&&(t.instanceColor.needsUpdate=!0)}),Ys=!0,X_()}function X_(){if(!an)return;let t=an.geometry.getAttribute("color"),e=t.array;Be.forEach((n,i)=>{let r=i*3,s=Df(n,n.id===dt);e[r]=s.r,e[r+1]=s.g,e[r+2]=s.b}),t.needsUpdate=!0,Ys=!1}function Df(t,e){let n=Zo[t.kind]??Zo.tool;return Ar.setHex(n),Dn(t)?e?Ar.lerp(S0,.26):t.isNew?Ar.lerp(S0,.14):_t==="inspect"&&t.promptId!==it?Ar.multiplyScalar(.42):Pv(t)||Ar.multiplyScalar(.46):Ar.setRGB(0,0,0),Ar}function Ca(t){return _t!=="inspect"||!it||t.promptId===it}function Dn(t){return Ca(t)&&$P(t)}function q_(){let t=nt.getBoundingClientRect(),e=Math.max(1,Math.floor(t.width)),n=Math.max(1,Math.floor(t.height));Ri?.setSize(e,n,!1),Ri?.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),Fe.aspect=e/n,Fe.updateProjectionMatrix()}function wa({preserveDistance:t=!1}={}){if(!Be.length||_t!=="overview")return;let e=Bf(),n=Fe.aspect<.75,i=Math.max(18,Fe.position.distanceTo(Ke.target)),r=t?Math.min(90,i):n?Ir==="two-d"?qC:XC:Ir==="two-d"?Nx:$C,s=e?gN(e):vn.set(0,0,0);Ke.target.set(s.x,s.y,s.z),Ir==="two-d"?Fe.position.set(s.x,s.y+r,s.z+.01):Fe.position.set(s.x+r*.38,s.y+r*.68,s.z+r*.58),Ke.update()}function gN(t){let e=Be.filter(l=>l.promptId===t.promptId&&Ca(l));if(e.length<=1)return fu(t);let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;return e.forEach(l=>{let c=fu(l);n=Math.min(n,c.x),i=Math.max(i,c.x),r=Math.min(r,c.y),s=Math.max(s,c.y),o=Math.min(o,c.z),a=Math.max(a,c.z)}),new P((n+i)/2,(r+s)/2,(o+a)/2)}function fu(t){return t.home??t.target}function xN(){let t=Bf();return t?fu(t):null}function Y_(){return Be.reduce((t,e)=>!t||e.eventIndex>=t.eventIndex?e:t,null)}function Of(){return Be.reduce((t,e)=>e.type!=="prompt"?t:!t||e.eventIndex>=t.eventIndex?e:t,null)}function _N(){return Be.reduce((t,e)=>e.type!=="prompt"||e.id===Fr?t:!t||e.eventIndex>=t.eventIndex?e:t,null)}function Z_(){let t=Ae?F_(Ae).at(-1):null;if(!t)return null;let e=t.type==="prompt"?t.prompt.id:t.compaction.id;return Nt.get(e)??null}function Bf(){let t=Z_();if(t?.type==="prompt")return t.id===Fr?_N()??t:t;if(it){let e=Nt.get(it);if(e?.type==="prompt")return e}return Of()??t??Y_()}function K_(){Iu(),Vs=null;let t=Ae,e=t?.prompts.at(-1);lr.classList.remove("prompt-context"),pf.textContent="SESSION",cf(t?.ui.sessionName||"Session overview","Session"),ff.textContent=t?`${t.totals.promptCount} prompts`:"Loading",lf(t?.lastModifiedAt||"Live context"),hf.textContent=e?.title||t?.ui.sessionName||"Session overview",zs.classList.remove("stream-markdown"),zs.textContent=AN(),Ff()}function Uf(){xt==="raw"&&(Sn.textContent=dt?"Selected event":"Session graph")}function J_(){if(!vN()){Iu();return}lr.classList.remove("hidden"),tv()}function vN(){return xt==="map"}function kf(){return!lr.classList.contains("hidden")}function Iu(){lr.classList.add("hidden"),Vs=null,Ur()}function Vf(){if(!dt)return null;let t=Nt.get(dt);if(!t)return null;let e=qs().find(n=>n.node?.id===t.id||n.eventIndex===t.eventIndex);return e?{node:t,row:e}:{node:t}}function j_(){let t=Vf();return t?yN(t.row??lv(t.node)):null}function yN(t){let e=Zt();return Lg({source:$s(e.source),lineNumber:t.lineNumber,eventIndex:t.eventIndex,kind:[t.role,t.eventType,t.toolName].filter(Boolean).join(" / "),summary:SN(t),parserVersion:e.parserVersion,schemaVersion:e.schemaVersion})}function SN(t){return Pg({role:t.role,eventType:t.eventType,toolName:t.toolName,filePath:t.filePath,rawSummary:MN(t)})}function MN(t){return[t.title,t.detail].filter(Boolean).join(" - ")}function Ur(){let t=!!Vf(),e=Cv().length>1;lr.classList.toggle("has-selection",t);for(let n of[ha,fx,px,mx])n.disabled=!t;gx.disabled=!e,xx.disabled=!e,t||(ha.textContent="Copy Safe Ref")}async function bN(){let t=j_();if(!t){Ur();return}try{await navigator.clipboard.writeText(t),ha.textContent="Copied",window.setTimeout(()=>{ha.textContent="Copy Safe Ref"},1200)}catch(e){Hs("COPY","Copy failed",Vr(e))}}function Q_(){let t=j_();if(!t){jd("Select an event first","Open Map or Timeline and select an event before copying a safe reference.","error");return}mi(t,"Copy-safe reference copied")}function Hf(t){let e=t.shareabilitySummary,n=t.privacySummary,i=t.parserHealth;return Fg({source:$s(t.source),sessionName:t.ui.sessionName||t.sessionPath||`${$s(t.source)} session`,totalTurns:t.ui.totalTurns,callCount:t.totals.callCount,fileChangeCount:t.totals.fileChangeCount,latestEventIndex:t.latestEventIndex,parserVersion:t.parserVersion,schemaVersion:t.schemaVersion,cliContext:[t.metadata.originator,t.metadata.cliVersion].filter(Boolean).join(" ")||null,rawLogsSafeToShare:e.rawLogsSafeToShare,rawLogCaution:e.rawLogCaution,sanitizedGraphNote:e.sanitizedGraphNote,redactedFieldCount:i.redactedFieldCount,imageCount:i.imageCount,apiTokenRequired:n.apiTokenRequired})}function Nu(t){let e=Vf();if(!e){Ur();return}let n=e.node.id,i=e.node.promptId,r=e.row?.source??e.node.source;Br(r),kr(t),dt=n,it=i,Mn(),t!=="map"&&Ra()}function ev(t){Os=t,tv()}function tv(){lr.classList.toggle("compact",Os),jc.title=Os?"Expand context":"Minimize context",jc.setAttribute("aria-label",Os?"Expand context":"Collapse context"),jc.setAttribute("aria-expanded",String(!Os))}function EN(t,e){for(let n of t)n.classList.toggle("active",e(n))}function nv(){Rx.forEach(t=>{let e=t.dataset.appMode;if(e&&cx.has(e)){let n=rv(e);t.dataset.status=n.label,t.dataset.maturity=n.maturity,t.title=n.title}t.classList.toggle("active",e===xt)}),Od.classList.toggle("active",xt==="settings"),Od.setAttribute("aria-pressed",String(xt==="settings"))}function iv(){EN(Ix,t=>t.dataset.source===Dr)}async function TN(t){let e=$x(t);if(e===Dr)return;Bu(),Dr=e,Fn=null,qn=null,en=null,Ii=null,yn=null,Nr=null,iv(),Ea(),Kx();let n=Hr;await Mf({generation:n}),await Ks({suppressLiveAnimation:!0}),Or(n)&&Ou()}function AN(){return Ae?[`${$s(Ae.source)} session`,`Prompts: ${Ae.totals.promptCount}`,`Turns: ${Ae.ui.totalTurns}`,`Calls: ${Ae.totals.callCount}`,`Completed calls: ${Ae.totals.completedCallCount}`,`Messages: ${Ae.totals.assistantMessageCount}`,`File changes: ${Ae.totals.fileChangeCount}`,`Context: ${SP(Ae.tokenTelemetry)}`,`Compactions: ${Ae.totals.compactionCount}`,`Unknown events: ${Ae.parserHealth?.unknownEventCount??0}`,`Malformed lines: ${Ae.parserHealth?.malformedLineCount??0}`,`Codex: ${[Ae.metadata.originator,Ae.metadata.cliVersion].filter(Boolean).join(" ")||"unknown"}`,`Model: ${Ae.metadata.model||Ae.metadata.modelProvider||"unknown"}`,`Records: ${Ae.lineCount}`,`Session file: ${Qt(Ae.sessionPath)||Ae.sessionPath}`].join(`
`):"Waiting for session data"}function zf(){let t=xt!=="map";LC.classList.toggle("hidden",!t),mf.classList.toggle("mode-panel-active",t)}function Ra(){if(zf(),xt!=="map"){if(Gf(),FC.textContent=$s(Ae?.source??Dr),DC.textContent=CN(xt),wN(xt),OC.classList.toggle("hidden",xt!=="timeline"),!Ae){Sn.textContent="Waiting for session data",Ht.replaceChildren(Pn("Waiting for session data."));return}switch(xt){case"summary":RN();return;case"timeline":av();return;case"transcript":BN();return;case"health":dv();return;case"insights":XN();return;case"diff":sa();return;case"raw":Xf();return;case"export":qN();return;case"settings":YN();return}}}function CN(t){return t.charAt(0).toUpperCase()+t.slice(1)}function rv(t){return QA[t]}function wN(t){let e=rv(t);Pd.textContent=e.label,Pd.title=e.title,Pd.className=`mode-status-label ${e.maturity}`}function RN(){let t=Ae;$g({graph:t,modePanelSummary:Sn,modePanelContent:Ht,modeCard:je,modeParagraph:Pu,modeButton:Mt,modeEmpty:Pn,setReadableRedactionText:ln,selectAppMode:kr,copyText:mi,copySafeShareSummary:()=>t?Hf(t):"",setRawModePayload:Br,modeTimelineRows:qs,focusEventByLine:Du,showEvidenceFallback:Yf})}function Gf(){Ht.querySelectorAll(".virtual-list-viewport, .virtual-text-viewport").forEach(t=>{t.perlustronCleanup?.()}),Ht.classList.remove("virtual-mode-host")}function Wf(t,e){Gf(),Ht.classList.add("virtual-mode-host");let n=document.createElement("div");n.className="virtual-mode-panel",e&&n.append(e),n.append(t),Ht.replaceChildren(n)}function sv(t){let e=document.createElement("div");e.className="virtual-list-viewport",e.tabIndex=0,e.setAttribute("role","region"),e.setAttribute("aria-label",t.ariaLabel);let n=document.createElement("div");n.className="virtual-list-canvas",e.append(n);let i=Math.max(1,e.clientWidth||KA),r=t.items.map((p,y)=>Math.max(24,Math.ceil(t.estimateHeight(p,y,i)))),s=new Array(t.items.length),o=0,a=(p=0)=>{let y=Math.max(0,p);o=y>0?s[y]:0;for(let M=y;M<t.items.length;M+=1)s[M]=o,o+=r[M];n.style.height=`${Math.max(1,o)}px`};a();let l=0,c=!1,h=null,d=xt,u=p=>{if(!t.items.length)return-1;let y=0,M=t.items.length-1,E=t.items.length;for(;y<=M;){let R=Math.floor((y+M)/2);s[R]+r[R]>=p?(E=R,M=R-1):y=R+1}return Math.min(E,t.items.length-1)},f=(p,y)=>{let M=p;for(let E=p;E<t.items.length&&!(s[E]>y);E+=1)M=E;return M},g=(p,y)=>{if(!t.measureHeight||p<0||y<p)return!1;let M=Math.max(1,e.clientWidth||i),E=u(e.scrollTop+1),R=E>=0?e.scrollTop-s[E]:0,S=t.items.length;for(let w=p;w<=y;w+=1){let x=Math.max(24,Math.ceil(t.measureHeight(t.items[w],w,M)));Math.abs(x-r[w])<=1||(r[w]=x,S=Math.min(S,w))}return S===t.items.length?!1:(a(S),E>=0&&S<E&&(e.scrollTop=Math.max(0,s[E]+R),la[d]=e.scrollTop),!0)},_=()=>{if(l=0,c)return;if(!t.items.length){n.replaceChildren(),n.style.height="1px";return}let p=Math.max(0,e.scrollTop-$c),y=e.scrollTop+e.clientHeight+$c,M=u(p),E=f(M,y);g(M,E)&&(M=u(Math.max(0,e.scrollTop-$c)),E=f(M,e.scrollTop+e.clientHeight+$c));let R=document.createDocumentFragment();for(let S=M;S<=E;S+=1){let w=t.items[S],x=document.createElement("div");x.className="virtual-list-item",x.dataset.index=String(S),x.dataset.key=t.keyForItem(w,S),x.style.transform=`translateY(${s[S]}px)`,x.style.height=`${r[S]}px`,x.append(t.renderItem(w,S)),R.append(x)}n.replaceChildren(R)},m=()=>{c||l||(l=window.requestAnimationFrame(_))};return e.addEventListener("scroll",()=>{la[d]=e.scrollTop,m()},{passive:!0}),h=new ResizeObserver(()=>{c||m()}),h.observe(e),e.perlustronCleanup=()=>{c=!0,l&&window.cancelAnimationFrame(l),h?.disconnect()},window.requestAnimationFrame(()=>{let p=la[d]??0;e.scrollTop=Math.min(p,Math.max(0,o-e.clientHeight)),_()}),e}function pu(t,e,n){let i=Math.max(8,e),r=1,s=0;for(;r<n;){let a=t.indexOf(`
`,s);if(a===-1)break;r+=1,s=a+1}let o=Math.ceil(Math.min(t.length,i*n)/i);return Math.min(n,Math.max(1,r,o))}function IN(t){let e=t.split(/\r?\n/),n=document.createElement("div");n.className="virtual-text-viewport",n.tabIndex=0,n.setAttribute("role","region"),n.setAttribute("aria-label","Raw JSON payload"),n.style.setProperty("--raw-line-height",`${Qo}px`),n.style.setProperty("--raw-gutter-width",`${Math.max(4,String(e.length).length+2)}ch`);let i=document.createElement("div");i.className="virtual-text-canvas",i.style.height=`${Math.max(1,e.length*Qo)}px`,n.append(i);let r=0,s=!1,o=()=>{if(r=0,s)return;let l=e.length<=ZA,c=l?0:Math.max(0,Math.floor(n.scrollTop/Qo)-Zg),h=l?e.length:Math.min(e.length,Math.ceil((n.scrollTop+n.clientHeight)/Qo)+Zg),d=document.createDocumentFragment();for(let u=c;u<h;u+=1){let f=document.createElement("div");f.className="virtual-text-row",f.style.transform=`translateY(${u*Qo}px)`;let g=document.createElement("span");g.className="virtual-text-line-number",g.textContent=String(u+1);let _=document.createElement("span");_.className="virtual-text-line",_.textContent=e[u]||" ",f.append(g,_),d.append(f)}i.replaceChildren(d)},a=()=>{s||r||(r=window.requestAnimationFrame(o))};return n.addEventListener("scroll",a,{passive:!0}),n.perlustronCleanup=()=>{s=!0,r&&window.cancelAnimationFrame(r)},window.requestAnimationFrame(o),n}function NN(t){try{return JSON.stringify(t,null,2)}catch(e){return JSON.stringify({error:Vr(e)},null,2)}}function ov(t,e){Wf(IN(NN(t)),e)}function av(){let t=qs();LN(t);let e=t.filter(FN);Sv(t.length,e.length);let n=rr?` - evidence target line ${rr}`:"";if(Sn.textContent=`${e.length} of ${t.length} events${n}`,!e.length){Ht.replaceChildren(Pn("No timeline events match the current filters."));return}let i=document.createElement("div");if(i.className="mode-panel-header-stack",rr){let s=je("Evidence Target",[`Opened from Summary or Insights. Line ${rr} is highlighted below when it is visible in the filtered Timeline.`]);s.classList.add("timeline-evidence-notice"),i.append(s)}let r=document.createElement("div");r.className="mode-actions",r.append(Mt("Copy Safe Reference",()=>Q_())),i.append(r),Wf(sv({ariaLabel:"Timeline events",items:e,keyForItem:s=>s.id,estimateHeight:PN,renderItem:s=>DN(s)}),i)}function PN(t){let e=pu(t.title,58,3)*rC,n=pu([t.filePath,t.detail].filter(Boolean).join(" - "),110,7)*Id,i=t.timestamp?Id*2:Id;return Math.min(tC,Math.max(eC,28+Math.max(i,e,n)))}function qs(){if(!Ae)return[];let t=Be.map(lv);for(let e of Ae.parserHealth.unknownEvents||[])t.push({id:`unknown-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"unknown",eventType:e.sourceEventType,toolName:"",filePath:"",title:`Unknown event ${e.sourceEventType}`,detail:e.preview,timestamp:null,flags:["unknown"],source:e});for(let e of Ae.parserHealth.malformedLines||[])t.push({id:`malformed-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"malformed",eventType:"malformed_jsonl",toolName:"",filePath:"",title:e.error,detail:e.preview,timestamp:null,flags:["malformed"],source:e});for(let e of Ae.parserHealth.skippedLargePayloads||[])t.push({id:`skipped-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"parser",eventType:"skipped_large_payload",toolName:"",filePath:"",title:e.reason,detail:`${re(e.byteLength)} bytes`,timestamp:null,flags:["large"],source:e});return t.sort((e,n)=>e.eventIndex-n.eventIndex||e.lineNumber-n.lineNumber),t}function lv(t){let e=t.type==="prompt"?"user":t.type==="message"?"assistant":t.type==="call"?"tool":t.type==="fileChange"?"file":"system",n=t.type==="call"?t.source.name:"",i=t.type==="fileChange"?t.source.path:"",r=[t.detail,t.body].filter(Boolean).join(`
`),s=hx(t),o=new Set;s.length&&o.add("skill"),(Uu(t,"error")||yv(`${t.title} ${r}`))&&o.add("error"),t.type==="call"&&Nv(t.source)&&o.add("long"),t.type==="fileChange"&&o.add("file"),t.type==="compaction"&&o.add("compaction"),`${t.title} ${r}`.includes("[REDACTED")&&o.add("redacted");let a=t.type==="call"&&t.source.durationMs!==null?Ag(t.source.durationMs):"";return{id:t.id,eventIndex:t.eventIndex,lineNumber:t.eventIndex+1,role:e,eventType:s.length?"skill_use":t.type==="fileChange"?`file_${t.source.changeType}`:t.type,toolName:n,filePath:i,title:s.length?ba(s):t.title,detail:[a,r].filter(Boolean).join(`
`),timestamp:t.type==="call"?t.source.startedAt||t.source.completedAt:t.source.timestamp,flags:[...o],source:t.source,node:t}}function LN(t){Jc(iu,"All roles",t.map(e=>e.role)),Jc(ru,"All types",t.map(e=>e.eventType)),Jc(su,"All tools",t.map(e=>e.toolName).filter(Boolean)),Jc(ou,"All files",t.map(e=>Qt(e.filePath)||e.filePath).filter(Boolean))}function Jc(t,e,n){let i=t.value,r=[...new Set(n)].sort((a,l)=>a.localeCompare(l)),s=document.createDocumentFragment(),o=document.createElement("option");o.value="",o.textContent=e,s.append(o),r.forEach(a=>{let l=document.createElement("option");l.value=a,l.textContent=a,s.append(l)}),t.replaceChildren(s),t.value=r.includes(i)?i:""}function FN(t){if(iu.value&&t.role!==iu.value||ru.value&&t.eventType!==ru.value||su.value&&t.toolName!==su.value)return!1;let e=Qt(t.filePath)||t.filePath;return ou.value&&e!==ou.value||Sx.checked&&!t.flags.includes("error")||Mx.checked&&!t.flags.includes("unknown")||bx.checked&&!t.flags.includes("malformed")||Ex.checked&&!t.flags.includes("redacted")?!1:cv(t)}function cv(t){return _n?[t.role,t.eventType,t.toolName,t.filePath,t.title,t.detail,t.flags.join(" ")].join(" ").toLowerCase().includes(_n):!0}function DN(t){let e=document.createElement("button");e.type="button";let n=t.node?.id===dt,i=rr!==null&&t.lineNumber===rr;e.className=`mode-row ${n?"active":""} ${i?"evidence-target":""} ${t.flags.includes("skill")?"skill-row":""}`,(n||i)&&e.setAttribute("aria-current",i?"location":"true"),i&&(e.title="Evidence target opened from Summary or Insights.");let r=document.createElement("code");r.textContent=[`L${t.lineNumber}`,ON(t.timestamp)].filter(Boolean).join(`
`);let s=document.createElement("small");s.textContent=[t.role,t.eventType,t.toolName].filter(Boolean).join(" / ");let o=document.createElement("strong");ln(o,t.title);let a=document.createElement("small");return ln(a,[t.filePath,t.detail].filter(Boolean).join(" - ")),e.append(r,s,o,a),e.addEventListener("click",()=>uv(t)),e}function ON(t){if(!t)return"";let e=new Date(t);return Number.isNaN(e.valueOf())?t:Tx.checked?e.toISOString().replace(".000Z","Z"):e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}function uv(t){t.node?(dt=t.node.id,it=t.node.promptId,Mn(),Js(t.node,{reveal:!1})):Hs(t.eventType.toUpperCase(),t.title,t.detail||t.title),Br(t.source)}function BN(){let t=Zt(),e=UN(t);if(HN(e),Sn.textContent=`${t.prompts.length} turns / ${e.filter(n=>n.type==="entry").length} entries`,!e.length){Ht.replaceChildren(Pn("No transcript events were parsed."));return}Wf(sv({ariaLabel:"Transcript entries",items:e,keyForItem:$f,estimateHeight:kN,measureHeight:VN,renderItem:GN}))}function UN(t){let e=[];return t.prompts.forEach((n,i)=>{e.push({type:"turn",prompt:n,promptIndex:i}),WN(n).forEach(r=>e.push({type:"entry",entry:r}))}),e}function $f(t,e){return t.type==="turn"?`turn-${t.prompt.id}`:`entry-${t.entry.eventIndex}-${t.entry.label}-${e}`}function kN(t,e,n){if(t.type==="turn")return ix;let i=hv(n),r=Math.max(36,Math.floor(i/7.2)),s=pu(t.entry.title,r,4)*ox,o=pu(t.entry.body,r,18)*sx;return Math.max(rx,ax+s+o+lx)}function VN(t,e,n){if(t.type==="turn")return ix;let i=$f(t,e),r=hv(n),s=Math.max(1,Math.round(r)),o=Us.get(i)??{heights:new Map};Us.set(i,o),(o.title&&(o.title.text!==t.entry.title||o.title.font!==Qg)||o.body&&(o.body.text!==t.entry.body||o.body.font!==jg))&&o.heights.clear();let a=o.heights.get(String(s));if(a!==void 0)return a;let l=$0(o,"title",t.entry.title,Qg,s,ox),c=$0(o,"body",t.entry.body,jg,s,sx),h=Math.max(rx,ax+l+c+lx);return o.heights.set(String(s),h),h}function HN(t){if(!Us.size)return;let e=new Set;t.forEach((n,i)=>{n.type==="entry"&&e.add($f(n,i))});for(let n of Us.keys())e.has(n)||Us.delete(n)}function hv(t){return Math.max(80,t-nC-iC)}function $0(t,e,n,i,r,s){if(!n)return 0;let o=t[e],a=o&&o.text===n&&o.font===i?o.prepared:zN(t,e,n,i),{lineCount:l}=Sg(a,r,s);return Math.max(1,l)*s}function zN(t,e,n,i){let r=yg(n,i,{whiteSpace:"pre-wrap"});return t[e]={text:n,font:i,prepared:r},t.heights.clear(),r}function GN(t,e){if(t.type==="entry")return $N(t.entry);let n=document.createElement("section");n.className="transcript-turn-row";let i=document.createElement("small");i.textContent=`User ${t.promptIndex+1}`;let r=document.createElement("strong");return ln(r,t.prompt.title),n.append(i,r),n}function WN(t){let e=[];return h_(t,t.calls).forEach(n=>{if(n.type==="assistant"){let i=Mu(n.message.text);e.push({label:i.length?"Skill":"Assistant",title:i.length?ba(i):"Response",body:n.message.text,eventIndex:n.message.eventIndex,marker:i.length?"skill":void 0}),n.calls.forEach(r=>e.push(...X0(r)));return}e.push(...X0(n.call))}),t.fileChanges.forEach(n=>{e.push({label:"File",title:`${n.changeType}: ${n.shortPath||n.path}`,body:n.preview||n.detail,eventIndex:n.eventIndex})}),[{label:"Prompt",title:t.title,body:t.text,eventIndex:t.eventIndex},...e.sort((n,i)=>n.eventIndex-i.eventIndex)]}function X0(t){let e=Su(t),n=t.argumentPreview||"No arguments logged.",i=t.outputPreview||(t.status==="completed"?"No result preview logged.":`Status: ${t.status}`),r=e.length?"Skill":"Tool",s=e.length?`${ba(e)} (${t.status})`:`${t.name} (${t.status})`;return[{label:r,title:s,body:n,eventIndex:t.eventIndex,marker:e.length?"skill":void 0},{label:"Result",title:t.name,body:i,eventIndex:t.eventIndex,marker:e.length?"skill":void 0}]}function $N(t){let e=document.createElement("div");e.className=`transcript-step ${t.marker??""}`;let n=document.createElement("code");n.textContent=t.label;let i=document.createElement("div"),r=document.createElement("strong");ln(r,t.title);let s=Pu(t.body);return i.append(r,s),e.append(n,i),e}function dv(){let t=Zt().parserHealth;Sn.textContent=`${t.unknownEventCount} unknown / ${t.malformedLineCount} malformed / ${t.skippedLargePayloadCount} skipped`,Fu();let e=document.createDocumentFragment(),n=document.createElement("div");n.className="mode-actions",n.append(Mt("Copy Parser Summary",()=>mi(hP(Zt()),"Parser health summary copied")),Mt("Export Unknowns JSON",()=>gv()),Mt("Copy Issue Body",()=>xv()),Mt("Fixture Report",()=>_v())),e.append(n);let i=document.createElement("div");i.className="mode-card-grid",i.append(je("Parser",[Tf(t),`Source confidence: ${t.sourceDetectionConfidence}`,`Parsed ${t.parsedEventCount} of ${t.totalLinesRead} lines`,...ya([i_(t)])]),je("Unknown Events",PR(t)),je("Malformed And Skipped",DR(t)),je("Coverage",[`Tool calls/results: ${t.toolCallCount}/${t.toolResultCount}`,`File activity: ${t.fileActivityCount}`,`Token telemetry: ${t.tokenTelemetryAvailable?"available":"not logged"}`,`Redacted fields: ${t.redactedFieldCount}`,...ya([a_(t)])])),e.append(i);let r=je("Unknown Samples");r.append(cP(t)),e.append(r),Wd?e.append(Pn("Preparing redacted schema-drift report...")):Nr?e.append(Pn(Nr)):yn&&e.append(je("Issue Template",[`Fixture: ${yn.suggestedFixtureName}`,`Samples: ${yn.redactedSamples.length}`,`Profile: ${yn.redactionReport.profile}`])),Ht.replaceChildren(e)}function XN(){let t=Zt().insights,e=Ia(t),n=e.slice(0,tx),i=e.length,r=Lu(t);Sn.textContent=`${i} priority signal groups / ${r.length} file-churn patterns / ${t.suspiciousToolCalls.length} suspicious calls`;let s=document.createDocumentFragment(),o=document.createElement("div");o.className="mode-actions",o.append(Mt("Copy Insight Summary",()=>mi(dP(t),"Insight summary copied"))),s.append(o);let a=je("How To Read This",["Insights are heuristic signals from logged events only; they are leads, not root cause.","Repeated event rows are grouped so the panel shows signal categories before backing detail.","Start with Priority Signals. Expand File Churn only when you need audit detail for repeated path activity."]);a.classList.add("mode-takeaway"),s.append(a);let l=je("Priority Signals");l.append(oP(t,n,i)),s.append(l);let c=aP(t,r);c&&s.append(c);let h=document.createElement("div");h.className="mode-card-grid";let d=t.repeatedPatterns.filter(u=>u.patternType!=="file_activity");h.append(je("Error Timeline",t.failureChain?[`First logged error-like event: line ${t.failureChain.firstLoggedError.lineNumber} - ${t.failureChain.firstLoggedError.title}`,`Later retry-like events: ${t.failureChain.subsequentRetries.length}`,`File changes after first error: ${t.failureChain.fileChangesAfterFirstError.length}`,`Final logged outcome: ${fv(t.failureChain.finalOutcome)}`]:["No logged error-like event detected."]),je("Repeated Tool Patterns",pv(d)),je("Suspicious Tool Calls",mv(t.suspiciousToolCalls)),je("Context Pressure",[t.contextPressure.status,t.contextPressure.explanation,`High-context markers: ${t.contextPressure.highContextMarkers.length}`,`Compaction markers: ${t.contextPressure.compactionMarkers.length}`]),je("File Impact",[`Edited: ${t.fileImpact.filesEdited.length}`,`Read: ${t.fileImpact.filesRead.length}`,`Referenced: ${t.fileImpact.filesReferenced.length}`,`Top edited: ${Dd(t.fileImpact.filesEdited)}`,`Top read: ${Dd(t.fileImpact.filesRead)}`,`Top referenced: ${Dd(t.fileImpact.filesReferenced)}`]),je("Approval And Sandbox",t.approvalFriction.map(u=>`${u.severity}: ${u.title}`))),s.append(h),Ht.replaceChildren(s)}function sa(){let t=Zt(),n=uP(t).filter(_=>_.path!==t.sessionPath);(!qn||qn===t.sessionPath||!n.some(_=>_.path===qn))&&(qn=n[0]?.path??null),Sn.textContent=en?`${en.toolDelta.calls.left} -> ${en.toolDelta.calls.right} tools / ${en.errorDelta.errors.left} -> ${en.errorDelta.errors.right} errors`:"Select Run B to compare";let i=document.createDocumentFragment(),r=je("Compare Sessions"),s=document.createElement("div");s.className="mode-control-row";let o=document.createElement("div");o.className="mode-field",o.append(q0("Run A"),ZN(t.sessionPath));let a=document.createElement("div");a.className="mode-field",a.append(q0("Run B"));let l=document.createElement("select");l.className="mode-select",l.setAttribute("aria-label","Run B session"),n.forEach(_=>{let m=document.createElement("option");m.value=_.path,m.textContent=Zx(_),m.title=_.path,l.append(m)}),l.value=qn??"",l.disabled=n.length===0;let c=()=>{qn=Z0(l),en=null,Ii=null,Sn.textContent="Select Run B to compare"};l.addEventListener("change",()=>{c(),K0()}),l.addEventListener("input",c);let h=Mt("Compare",()=>{qn=Z0(l),K0()});if(h.disabled=n.length===0,a.append(l,h),s.append(o,a),r.append(s),i.append(r),n.length===0){i.append(Pn("No other sessions are available to compare with this run.")),Ht.replaceChildren(i);return}if(Gd){i.append(Pn("Comparing normalized traces...")),Ht.replaceChildren(i);return}if(Ii&&i.append(Pn(Ii)),!en){i.append(Pn("Choose a second session and compare. Diff results are redacted by default.")),Ht.replaceChildren(i);return}let d=en,u=document.createElement("div");u.className="mode-actions",u.append(Mt("Copy Summary",()=>mi(fP(d),"Diff summary copied")),Mt("Export JSON",()=>xu("perlustron-diff.json",JSON.stringify(d,null,2),"application/json")),Mt("Export HTML",()=>xu("perlustron-diff.html",mP(d),"text/html"))),i.append(u);let f=document.createElement("div");f.className="mode-card-grid",f.append(je("Overview",[`Sources: ${d.leftSummary.source} -> ${d.rightSummary.source}`,`Session IDs: ${d.leftSummary.sessionId||"unknown"} -> ${d.rightSummary.sessionId||"unknown"}`,`Models: ${d.leftSummary.model||"unknown"} -> ${d.rightSummary.model||"unknown"}`,`Events: ${d.leftSummary.renderableEventCount} -> ${d.rightSummary.renderableEventCount}`,`Duration: ${d.leftSummary.loggedDuration} / ${d.rightSummary.loggedDuration}`]),je("Parser Health Delta",[`Parsed: ${d.leftSummary.parsedEventCount} -> ${d.rightSummary.parsedEventCount}`,`Renderable: ${d.leftSummary.renderableEventCount} -> ${d.rightSummary.renderableEventCount}`,`Unknown: ${xn(d.parserHealthDelta.unknownEvents)}`,`Malformed: ${xn(d.parserHealthDelta.malformedLines)}`,`Skipped payloads: ${xn(d.parserHealthDelta.skippedLargePayloads)}`]),je("Tool Delta",[`Calls: ${xn(d.toolDelta.calls)}`,`Results: ${xn(d.toolDelta.results)}`,`Missing results: ${xn(d.toolDelta.missingResults)}`,`Only A: ${gu(d.toolDelta.onlyLeftTools,6)}`,`Only B: ${gu(d.toolDelta.onlyRightTools,6)}`]),je("File Delta",[`Only A: ${d.fileDelta.onlyLeft.length}`,`Only B: ${d.fileDelta.onlyRight.length}`,`Both: ${d.fileDelta.both.length}`,...d.fileDelta.onlyLeft.slice(0,4).map(_=>`A: ${_}`),...d.fileDelta.onlyRight.slice(0,4).map(_=>`B: ${_}`)]),je("Error And Failure Delta",[`Error-like events: ${xn(d.errorDelta.errors)}`,`First A: ${d.errorDelta.leftFirstError||"none"}`,`First B: ${d.errorDelta.rightFirstError||"none"}`,`Repeated patterns: ${d.repeatedPatternDelta.leftCount} -> ${d.repeatedPatternDelta.rightCount}`]),je("Token And Context Delta",[`Telemetry: ${d.tokenDelta.leftAvailable?"A yes":"A no"} / ${d.tokenDelta.rightAvailable?"B yes":"B no"}`,`Latest tokens: ${d.tokenDelta.leftLatestTotalTokens??"n/a"} -> ${d.tokenDelta.rightLatestTotalTokens??"n/a"}`,`Context percent: ${br(d.tokenDelta.leftContextPercent)} -> ${br(d.tokenDelta.rightContextPercent)}`,`Compactions: ${xn(d.compactionDelta)}`])),i.append(f);let g=je("Divergence");g.append(lP(d)),i.append(g),d.warnings.length&&i.append(je("Warnings",d.warnings)),Ht.replaceChildren(i)}function Xf(){let t=Zt(),e=dt?"selected event":"session graph";Sn.textContent=["Raw audit",e].join(" - ");let n=bu??(dt?Nt.get(dt)?.source:t),i=document.createElement("div");i.className="mode-panel-header-stack";let r=je("Raw Privacy Warning",["Raw audit JSON may include prompts, private paths, tool output, image metadata, and credentials that were intentionally hidden from safe-share summaries.","Prefer Copy Safe Reference or Export safe-share reports unless you are doing local forensic review."]);r.classList.add("raw-privacy-notice");let s=document.createElement("div");s.className="mode-actions",s.append(Mt("Copy Safe Reference",()=>Q_()),Mt("Copy Safe Share Summary",()=>mi(Hf(t),"Safe-share summary copied"))),i.append(r,s),ov(n??t.totals,i)}function qN(){let t=Zt();Sn.textContent="Safe-share exports";let e=document.createElement("div");e.className="mode-panel-header-stack";let n=document.createElement("div");n.className="mode-card-grid",n.append(je("Safe Share Workflow",["Start with Copy Safe Share Summary for a compact shareable status update.","Use redacted HTML/Markdown/JSON exports for review artifacts; keep raw logs local unless a human explicitly approves sharing them.","Before forwarding externally, scan the generated artifact for private paths, prompts, image payloads, and secrets."]),je("Redacted Report Commands",[`perlustron export ${t.sessionPath} --format html --redacted -o report.html`,`perlustron export ${t.sessionPath} --format markdown --redacted -o report.md`,`perlustron export ${t.sessionPath} --format json --redacted -o normalized-trace-redacted.json`]),je("Schema Drift",[`perlustron unknowns ${t.sessionPath} --redacted -o unknowns-redacted.json`,`perlustron fixture-report ${t.sessionPath} --redacted -o fixture-report.md`]));let i=document.createElement("div");i.className="mode-actions",i.append(Mt("Copy Safe Share Summary",()=>mi(Hf(t),"Safe-share summary copied")),Mt("Export Unknowns JSON",()=>gv()),Mt("Copy Schema Issue",()=>xv()),Mt("Export Fixture Report",()=>_v())),e.append(i,n),Ht.replaceChildren(e)}function YN(){let t=Zt();Sn.textContent="Local observatory settings";let e=document.createElement("div");e.className="mode-card-grid",e.append(je("Session",[`Source: ${$s(t.source)}`,`Session: ${Fn?Qt(Fn):Qt(t.sessionPath)||"latest"}`,`Live updates: ${Nn?Pr?"SSE stream":"fallback polling":"paused"}`]),je("Renderer",["Three.js instancing",`Mode panel: ${xt==="settings"?"visible":"hidden"}`]),je("Backend",["Rust Axum JSONL parser",`Parser: ${t.parserHealth.parserVersion} / ${t.parserHealth.schemaVersion}`,`API token required: ${t.privacySummary.apiTokenRequired?"yes":"no"}`])),Ht.replaceChildren(e)}function je(t,e=[]){let n=document.createElement("section");n.className="mode-card";let i=document.createElement("h3");if(i.textContent=t,n.append(i),e.length){let r=document.createElement("ul");e.forEach(s=>{let o=document.createElement("li");ln(o,s),r.append(o)}),n.append(r)}return n}function Pu(t){let e=document.createElement("p");return ln(e,t),e}function Pn(t){let e=document.createElement("p");return e.className="mode-empty",e.textContent=t,e}function Mt(t,e){let n=document.createElement("button");return n.type="button",n.className="mode-action-button",n.textContent=t,n.addEventListener("click",()=>{e()}),n}function q0(t){let e=document.createElement("span");return e.className="mode-small-label",e.textContent=t,e}function ZN(t){let e=document.createElement("code");return e.textContent=t,e}function Lu(t){return t.repeatedPatterns.filter(e=>e.patternType==="file_activity")}function KN(t){return t.title!==nx&&(t.severity==="high"||t.severity==="warning")}function JN(t){let e=t.inspectionQueue.filter(KN);return e.length?e:t.inspectionQueue.filter(n=>n.title!==nx)}function Ia(t){let e=new Map;return JN(t).forEach(n=>{let i=jN(n),r=e.get(i);r?r.push(n):e.set(i,[n])}),Array.from(e.values()).map(QN)}function qf(t){return Ia(t).slice(0,tx)}function jN(t){return t.title===sf?"suspicious-tool-calls":t.title===of?"repeated-tool-call-patterns":t.title}function QN(t){let e=t[0];return{title:e.title,severity:eP(t),confidence:e.confidence,directness:e.directness,summary:tP(e,t),explanation:iP(e,t),lineNumbers:e.lineNumbers,redactionSafeSummary:nP(e,t),representative:e,count:t.length}}function eP(t){return t.reduce((e,n)=>{let i=Y0(e);return Y0(n.severity)<i?n.severity:e},t[0]?.severity??"info")}function Y0(t){let e=Jg.indexOf(t);return e===-1?Jg.length:e}function tP(t,e){return e.length===1?t.summary:t.title===sf?`${re(e.length)} suspicious tool-call records grouped; first example: ${t.summary}`:t.title===of?`${re(e.length)} repeated tool-call pattern records grouped; first example: ${t.summary}`:`${re(e.length)} related ${t.title.toLowerCase()} records grouped; first example: ${t.summary}`}function nP(t,e){let n=t.redactionSafeSummary||t.summary;return e.length===1?n:`${re(e.length)} grouped records; first example: ${n}`}function iP(t,e){return e.length===1?t.explanation:`${t.explanation} ${re(e.length)} matching rows were grouped to avoid repeating the same signal in the main list.`}function rP(t){return t.title==="First logged error-like event"?"Start here because this is the earliest logged event that looked broken.":t.title===sf?"One or more tool records look failed, missing, long-running, empty, or error-like.":t.title===of?"Similar tool calls repeated, which can point to retry loops or stuck local work.":t.title==="Approval or sandbox friction"?"Permission, sandbox, or approval friction can explain blocked or retried work.":t.title==="Context pressure marker"?"Context pressure or compaction markers can explain abrupt summaries or degraded continuity.":t.title==="Unknown or malformed log data"?"Parser gaps can hide details from normalized views, so audit raw or Health output.":t.title==="File impact"?"Use this as audit context for touched files, not as a root-cause claim.":"Use this as a lead into the raw log evidence, not as a root-cause verdict."}function mu(t,e,n=JA){let i=t.slice(0,n).map(e);return t.length>n&&i.push(`Showing ${re(n)} of ${re(t.length)} items.`),i}function fv(t,e=jA){let n=t.replace(/::git-[^}]+}/g,"").replace(/\s+/g," ").trim();return n?n.length>e?`${n.slice(0,Math.max(0,e-3)).trimEnd()}...`:n:"none logged"}function pv(t){if(!t.length)return["No repeated tool-call patterns detected."];let e=new Map;t.forEach(i=>{let r=sP(i.key),s=e.get(r);s?(s.count+=i.count,s.patterns+=1,s.firstLine=Math.min(s.firstLine,i.firstLine),s.lastLine=Math.max(s.lastLine,i.lastLine)):e.set(r,{label:r,count:i.count,patterns:1,firstLine:i.firstLine,lastLine:i.lastLine})});let n=Array.from(e.values()).sort((i,r)=>r.count-i.count||i.label.localeCompare(r.label));return mu(n,i=>`${i.label}: ${re(i.count)} repeated calls across ${re(i.patterns)} pattern groups, lines ${i.firstLine}-${i.lastLine}`)}function sP(t){return(t.startsWith("tool:")?t.slice(5):t).split(/[:.]/)[0]||"tool"}function mv(t){if(!t.length)return["No suspicious tool calls detected."];let e=new Map;t.forEach(i=>{let s=e.get(i.reason)??{reason:i.reason,count:0,tools:new Map};s.count+=1,s.tools.set(i.toolName,(s.tools.get(i.toolName)??0)+1),e.set(i.reason,s)});let n=Array.from(e.values()).sort((i,r)=>r.count-i.count||i.reason.localeCompare(r.reason));return mu(n,i=>{let r=Array.from(i.tools.entries()).sort((s,o)=>o[1]-s[1]||s[0].localeCompare(o[0])).slice(0,3).map(([s,o])=>`${s} ${re(o)}`).join(", ");return`${i.reason}: ${re(i.count)} calls${r?` (${r})`:""}`})}function Dd(t,e=3){return t.length?t.slice().sort((n,i)=>i.count-n.count||n.path.localeCompare(i.path)).slice(0,e).map(n=>`${Qt(n.path)||n.path} (${re(n.count)})`).join(", "):"none"}function oP(t,e=qf(t),n=Ia(t).length){if(!e.length)return Pn("No priority signals detected. Parser health, file churn, and raw inspection remain available for audit.");let i=document.createElement("div"),r=Pu(n>e.length?`Showing ${re(e.length)} of ${re(n)} grouped priority signals. Lower-priority file churn is collapsed below.`:"Showing grouped priority signals from logged evidence. These are leads for inspection, not root-cause conclusions."),s=document.createElement("div");return s.className="mode-linked-list",e.forEach((o,a)=>{let l=document.createElement("article");l.className=`mode-linked-row severity-${o.severity}`;let c=document.createElement("div"),h=document.createElement("strong");h.textContent=`${a+1}. ${o.count>1?`${o.title} (${re(o.count)})`:o.title}`;let d=document.createElement("small");ln(d,`Evidence: ${o.redactionSafeSummary||o.summary} - ${o.confidence} - ${o.directness}`);let u=document.createElement("p");u.textContent=`Why it matters: ${rP(o)}`;let f=document.createElement("p");ln(f,`How detected: ${o.explanation}`),c.append(h,u,d,f);let g=document.createElement("div");g.className="mode-row-actions";let _=o.lineNumbers[0];g.append(Mt("Open Raw",()=>Du(_,o.title,o.representative)),Mt("Copy Ref",()=>mi(`line ${_??"n/a"} - ${o.redactionSafeSummary}`,"Line reference copied"))),l.append(c,g),s.append(l)}),i.append(r,s),i}function aP(t,e=Lu(t)){let n=t.fileImpact.repeatedFiles;if(!e.length&&!n.length)return null;let i=document.createElement("details");i.className="mode-details file-churn-details";let r=document.createElement("summary");r.textContent=e.length?`File Churn (${re(e.length)} repeated file patterns)`:`File Churn (${re(n.length)} repeated files)`,i.append(r),i.append(Pu("Repeated file activity is audit context. Expand it when you need to inspect which paths dominated the run."));let s=e.length?mu(e,o=>`${o.key} - ${re(o.count)} mentions, lines ${o.firstLine}-${o.lastLine}`,Kg):mu(n,o=>`${o.path} - ${re(o.count)} mentions, lines ${o.firstLine}-${o.lastLine}`,Kg);if(s.length){let o=document.createElement("ul");s.forEach(a=>{let l=document.createElement("li");ln(l,a),o.append(l)}),i.append(o)}return i}function lP(t){let e=document.createElement("div");return e.className="mode-linked-list",vv(t).forEach(i=>{let r=document.createElement("article");r.className="mode-linked-row";let s=document.createElement("div"),o=document.createElement("strong");o.textContent=i.kind.replaceAll("_"," ");let a=document.createElement("small");a.textContent=`${i.confidence} - A line ${i.leftLine??"n/a"} - B line ${i.rightLine??"n/a"}`;let l=document.createElement("p");ln(l,i.summary),s.append(o,a,l);let c=document.createElement("div");c.className="mode-row-actions",c.append(Mt("Open A",()=>Du(i.leftLine,i.kind,i)),Mt("Copy Ref",()=>mi(`${i.kind}: A line ${i.leftLine??"n/a"}, B line ${i.rightLine??"n/a"}`,"Divergence reference copied"))),r.append(s,c),e.append(r)}),e}function cP(t){let e=document.createElement("div");e.className="mode-linked-list";let n=[...(t.unknownEvents||[]).map(i=>({title:`Unknown ${i.sourceEventType}`,detail:i.preview,lineNumber:i.lineNumber,payload:i})),...(t.malformedLines||[]).map(i=>({title:"Malformed JSONL",detail:i.error,lineNumber:i.lineNumber,payload:i}))].slice(0,12);return n.length?(n.forEach(i=>{let r=document.createElement("article");r.className="mode-linked-row";let s=document.createElement("div"),o=document.createElement("strong");ln(o,i.title);let a=document.createElement("small");ln(a,`line ${i.lineNumber} - ${i.detail}`),s.append(o,a);let l=document.createElement("div");l.className="mode-row-actions",l.append(Mt("Open Raw",()=>Du(i.lineNumber,i.title,i.payload))),r.append(s,l),e.append(r)}),e):Pn("No unknown or malformed samples captured.")}function uP(t){let e=Zn.filter(i=>i.source===t.source),n=e.find(i=>i.path===t.sessionPath);return n?[n,...e.filter(i=>i.path!==t.sessionPath)]:[{source:t.source,path:t.sessionPath,label:"Current session",detail:t.sessionId||"loaded",lastModifiedAt:t.lastModifiedAt,byteLength:t.byteLength,isLive:t.isLive,explicit:!0},...e]}function Z0(t){return t.selectedOptions.item(0)?.value||t.value||null}async function K0(){if(!qn){Ii="Select a Run B session first.",en=null,sa();return}let t=Zt().sessionPath,e=qn;if(e===t){Ii="Run A and Run B must be different sessions.",en=null,sa();return}let n=++M0,i=()=>n===M0&&Zt().sessionPath===t&&qn===e;en=null,Gd=!0,Ii=null,sa();try{let r=await xR(e);if(!i())return;en=r}catch(r){if(!i())return;en=null,Ii=Vr(r)}finally{i()&&(Gd=!1,sa())}}async function Fu(t=!1){return!t&&yn?yn:!t&&Nr?null:na||(yn=null,Nr=null,Wd=!0,na=_R().then(e=>(yn=e,e)).catch(e=>(Nr=Vr(e),null)).finally(()=>{Wd=!1,na=null,xt==="health"&&dv()}),na)}function Yf(t,e,n){kg({title:t,payload:e,detail:n,activeAppMode:xt,modePanelSummary:Sn,modePanelContent:Ht,modeCard:je,modeButton:Mt,setRawModePayload:Br,selectAppMode:kr,renderRawPayload:ov,cleanupModePanelRender:Gf,showEvidenceFallback:Yf})}function Du(t,e,n,i="raw"){Vg({lineNumber:t,title:e,payload:n,destination:i,modeTimelineRows:qs,inspectModeRow:uv,openSelectedEventMode:Nu,selectAppMode:kr,setRawModePayload:Br,setFocusedEvidenceLine:iN,showEvidenceFallback:Yf})}function hP(t){let e=t.parserHealth;return[`Perlustron parser health for ${Qt(t.sessionPath)}`,`Parser: ${Tf(e)}`,`Source: ${e.source} (${e.sourceDetectionConfidence})`,`Lines: ${e.totalLinesRead}`,`Parsed/renderable: ${e.parsedEventCount}/${e.renderableEventCount}`,...ya(l_(e,Jn,"Skipped large payloads"))].join(`
`)}function dP(t){let e=qf(t),n=Ia(t).length,i=Lu(t).length,r=["Perlustron insights","Insights are heuristic signals from logged events only; they are leads, not root cause.","Priority signal groups"];return e.length?(e.forEach((s,o)=>{let a=s.count>1?` (${re(s.count)} grouped)`:"";r.push(`${o+1}. [${s.severity}] ${s.title}${a}: ${s.redactionSafeSummary||s.summary}`)}),n>e.length&&r.push(`Showing ${re(e.length)} of ${re(n)} priority signal groups.`)):r.push("- No priority signals detected."),r.push(`File-churn patterns: ${i}`),r.push(`Suspicious calls: ${t.suspiciousToolCalls.length}`),r.push(`Approval/sandbox friction: ${t.approvalFriction.length}`),r.join(`
`)}function fP(t){return["Perlustron redacted diff summary",`A: ${Qt(t.metadata.leftPath)} (${t.metadata.leftSource})`,`B: ${Qt(t.metadata.rightPath)} (${t.metadata.rightSource})`,`Events: ${t.leftSummary.renderableEventCount} -> ${t.rightSummary.renderableEventCount}`,`Tools: ${t.toolDelta.calls.left} -> ${t.toolDelta.calls.right}`,`Errors: ${t.errorDelta.errors.left} -> ${t.errorDelta.errors.right}`,`Files: ${t.fileDelta.leftCount} -> ${t.fileDelta.rightCount}`,`First likely divergence: ${t.divergence.summary} (${t.divergence.confidence})`].join(`
`)}function gu(t,e){if(!t.length)return"none";let n=t.slice(0,e).join(", ");return t.length>e?`${n} ... +${t.length-e}`:n}async function gv(){let t=yn??await Fu(!0);t&&xu("perlustron-unknowns-redacted.json",JSON.stringify(t,null,2),"application/json")}async function xv(){let t=yn??await Fu(!0);t&&mi(t.suggestedGithubIssue,"Schema-drift issue body copied")}async function _v(){let t=yn??await Fu(!0);t&&xu("perlustron-fixture-report.md",pP(t),"text/markdown")}function vv(t){return t.divergence.clusters.length?t.divergence.clusters:[{kind:t.divergence.kind,confidence:t.divergence.confidence,summary:t.divergence.summary,explanation:t.divergence.explanation,leftLine:t.divergence.leftLine,rightLine:t.divergence.rightLine,leftEventId:t.divergence.leftEventId,rightEventId:t.divergence.rightEventId,leftSignature:t.divergence.leftSignature,rightSignature:t.divergence.rightSignature}]}function pP(t){let e=t.redactedSamples.slice(0,12).map(n=>`### Line ${n.lineNumber} ${n.sourceEventType}

Shape hash: \`${n.shapeHash}\`

\`\`\`json
${n.redactedPreview}
\`\`\``).join(`

`);return["# Perlustron Fixture Report","","This report avoids raw private log content.","","## Parser Health","",`- Perlustron version: \`${t.parserVersion}\``,`- Trace schema: \`${t.traceSchemaVersion}\``,`- Source guess: \`${t.sourceGuess}\``,`- Unknown events: \`${t.unknownEventCount}\``,`- Malformed lines: \`${t.malformedLineCount}\``,`- Suggested fixture: \`${t.suggestedFixtureName}\``,"","## Redacted Samples","",e||"No unknown or malformed samples captured.","","## Safe Contribution Checklist","","- Do not attach raw private Codex or Claude logs.","- Prefer synthetic data.","- Review prompts, paths, command output, images, and tool results before sharing."].join(`
`)}function mP(t){let e=vv(t).map(n=>`<tr><td>${ui(n.kind)}</td><td>${ui(n.confidence)}</td><td>${n.leftLine??"n/a"}</td><td>${n.rightLine??"n/a"}</td><td>${ui(n.summary)}</td></tr>`).join("");return`<!doctype html><meta charset="utf-8"><title>Perlustron Diff Report</title><style>body{font-family:system-ui,sans-serif;margin:32px;color:#182125;line-height:1.45}table{border-collapse:collapse;width:100%;margin:16px 0}td,th{border:1px solid #d7dee2;padding:6px 8px;text-align:left}code{background:#f4f6f7;padding:2px 4px}.redacted{color:#7a1f1f;font-weight:700}</style><h1>Perlustron Session Diff</h1><p class="redacted">Redacted diff. Review before sharing.</p><h2>Overview</h2><table><tr><td>A</td><td>${ui(t.metadata.leftPath)}</td></tr><tr><td>B</td><td>${ui(t.metadata.rightPath)}</td></tr><tr><td>Events</td><td>${t.leftSummary.renderableEventCount} -> ${t.rightSummary.renderableEventCount}</td></tr><tr><td>Tools</td><td>${xn(t.toolDelta.calls)}</td></tr><tr><td>Errors</td><td>${xn(t.errorDelta.errors)}</td></tr></table><h2>Parser Health</h2><table><tr><td>Unknown</td><td>${xn(t.parserHealthDelta.unknownEvents)}</td></tr><tr><td>Malformed</td><td>${xn(t.parserHealthDelta.malformedLines)}</td></tr></table><h2>Files</h2><table><tr><td>Only A</td><td>${ui(gu(t.fileDelta.onlyLeft,20))}</td></tr><tr><td>Only B</td><td>${ui(gu(t.fileDelta.onlyRight,20))}</td></tr></table><h2>Divergence</h2><table><thead><tr><th>Kind</th><th>Confidence</th><th>A line</th><th>B line</th><th>Summary</th></tr></thead><tbody>${e}</tbody></table><h2>Redaction</h2><p>Profile: ${ui(t.metadata.redactionProfile||"strict")}. Raw prompts, command output, sensitive paths, and tool outputs are not intentionally included.</p>`}function xu(t,e,n){let i=new Blob([e],{type:n}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=t,s.click(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function mi(t,e="Copied"){let n=gP(t);navigator.clipboard.writeText(t).then(()=>jd(e,n)).catch(i=>jd("Copy failed",Vr(i),"error"))}function gP(t){let e=hi(t).replace(/\s+/g," ").trim();return e?e.length>140?`${e.slice(0,137).trimEnd()}...`:e:"Clipboard payload was empty."}function jd(t,e,n="success"){Zc&&window.clearTimeout(Zc);let i=document.createElement("strong");i.textContent=t;let r=document.createElement("small");r.textContent=e,qc.classList.toggle("error",n==="error"),qc.replaceChildren(i,r),qc.hidden=!1,Zc=window.setTimeout(()=>{qc.hidden=!0,Zc=null},3600)}function yv(t){return/\b(error|failed|failure|exception|panic|denied|permission|timeout|traceback|not found|exit code|fatal|forbidden|sandbox)\b/i.test(t)}function kr(t){if(xt=t,Ea(),nv(),zf(),t!=="map"&&Iu(),t==="map"){Ef(),_u({preserveCamera:!0}),wa();return}if(Ra(),t!=="summary"&&t!=="timeline"&&t!=="transcript"){if(t==="health"){Hs("HEALTH","Parser health",xP());return}if(t==="insights"){Hs("INSIGHTS","Debugging insights",_P());return}if(t!=="raw"){if(t==="diff"){_u({preserveCamera:!0});return}t!=="settings"&&Hs("EXPORT","Export reports",vP())}}}function J0(){Sv(),xt!=="transcript"&&Ra()}function Sv(t,e){if(Tr.classList.remove("has-results","no-results"),!_n){Tr.textContent="Search filters Timeline evidence; type to see matching events.";return}if(!Ae){Tr.textContent=`Searching for "${_n}" once session data loads.`;return}if(xt==="timeline"){let i=t??qs().length,r=e??qs().filter(cv).length;Tr.classList.add(r?"has-results":"no-results"),Tr.textContent=r?`Search "${_n}" matched ${re(r)} of ${re(i)} Timeline events.`:`No Timeline events match "${_n}". Clear search or try another event, file, role, or tool term.`;return}let n=Be.filter(Pv).length;Tr.classList.add(n?"has-results":"no-results"),Tr.textContent=n?`Search "${_n}" highlights ${re(n)} map events; open Timeline for event-level results.`:`No map events match "${_n}"; open Timeline or clear search to continue.`}function xP(){return Ae?OR(Ae.parserHealth).join(`
`):"Waiting for session data."}function _P(){let t=Ae?.insights;if(!Ae||!t)return"Waiting for session insights.";let e=qf(t),n=Ia(t).length,i=Lu(t).length,r=["Insights are heuristic signals from logged events only. Hidden or unlogged reasoning cannot be recovered.","Repeated event rows are grouped before backing detail is summarized."];r.push(`Priority signal groups: ${re(n)}`),e.forEach((o,a)=>{let l=o.count>1?` (${re(o.count)} grouped)`:"";r.push(`  ${a+1}. [${o.severity}] ${o.title}${l}: ${o.redactionSafeSummary||o.summary}`)}),n>e.length&&r.push(`  Showing ${re(e.length)} of ${re(n)} priority signal groups.`),t.failureChain?(r.push(`First logged error-like event: line ${t.failureChain.firstLoggedError.lineNumber} - ${t.failureChain.firstLoggedError.title}`),r.push(`Final logged outcome: ${fv(t.failureChain.finalOutcome)}`)):r.push("First logged error-like event: none detected");let s=t.repeatedPatterns.filter(o=>o.patternType!=="file_activity");return r.push(`Repeated tool patterns: ${re(s.length)}`),pv(s).forEach(o=>r.push(`  ${o}`)),r.push(`File-churn patterns: ${re(i)}`),r.push(`Suspicious calls: ${re(t.suspiciousToolCalls.length)}`),mv(t.suspiciousToolCalls).forEach(o=>r.push(`  ${o}`)),r.push(`Context pressure: ${t.contextPressure.status}`),r.push(`File impact: ${t.fileImpact.filesEdited.length} edited, ${t.fileImpact.filesRead.length} read, ${t.fileImpact.filesReferenced.length} referenced`),r.push(`Approval/sandbox friction: ${t.approvalFriction.length}`),r.join(`
`)}function vP(){return Ae?["Export redacted reports from the CLI:",`perlustron export ${Ae.sessionPath} --format html --redacted -o report.html`,`perlustron export ${Ae.sessionPath} --format markdown --redacted -o report.md`,`perlustron export ${Ae.sessionPath} --format json -o normalized-trace.json`,"","Redacted exports are best-effort sharing aids. Review before sending."].join(`
`):"Waiting for session data."}function yP(){return["/ search","n next event","N previous event","m map","l timeline","t transcript","h health","i insights","r raw","e export","Esc close inspection"].join(`
`)}function SP(t){if(!t?.latestTotalTokens)return"no token telemetry";let e=t.latestContextPercent===null?"n/a":`${Math.round(t.latestContextPercent)}%`,n=t.contextWindow?` / ${re(t.contextWindow)}`:"";return`${re(t.latestTotalTokens)}${n} tokens (${e})`}function j0(t,e=Nt.get(t)){it=t,_t="inspect",cr(),Js(e)}function _u({preserveCamera:t=!1}={}){_t==="inspect"&&(_t="overview",cr({preserveCamera:t}))}function MP(){iv(),nv(),zf(),Ea(),Rx.forEach(t=>{t.addEventListener("click",()=>{kr(Xc(ex,t.dataset.appMode,"map"))})}),Ix.forEach(t=>{t.addEventListener("click",()=>{TN(t.dataset.source)})}),di.addEventListener("change",()=>{vR(di.value)}),PC.addEventListener("click",()=>{Nn=!Nn,Nn&&Ef(),ar(),Nn?Ou():(Au(),Bu())}),nr.addEventListener("input",()=>{_n=nr.value.trim().toLowerCase(),Mn(),J0()}),nr.addEventListener("keydown",t=>{t.key==="Escape"&&(nr.value="",_n="",Mn(),J0())}),[iu,ru,su,ou,Sx,Mx,bx,Ex,Tx].forEach(t=>{t.addEventListener("change",Ra)}),document.addEventListener("keydown",TP),document.addEventListener("keyup",AP),document.addEventListener("keydown",bP),document.addEventListener("visibilitychange",NP),window.addEventListener("blur",Tv),Ax.forEach(t=>{t.addEventListener("click",()=>{let e=Xc(sC,t.dataset.viewAction,"two-d");e==="zoom-in"?Qd(1):e==="zoom-out"?Qd(-1):e==="overview"?(_u(),L_("three-d")):TI()})}),gx.addEventListener("click",()=>vu(-1)),xx.addEventListener("click",()=>vu(1)),Cx.forEach(t=>{t.addEventListener("click",()=>{UP(Xc(tf,t.dataset.metric,"error"))})}),wx.forEach(t=>{t.addEventListener("click",()=>{kP(Xc(nf,t.dataset.nodeRole,"prompt"))})}),Od.addEventListener("click",()=>{kr("settings")})}function bP(t){if(t.key==="/"&&!Lr(t.target)){t.preventDefault(),nr.focus(),nr.select();return}if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="k"){t.preventDefault(),nr.focus(),nr.select();return}if(!Lr(t.target)){let e=EP(t.key);if(e){t.preventDefault(),kr(e);return}if(t.key==="n"){t.preventDefault(),vu(1);return}if(t.key==="N"){t.preventDefault(),vu(-1);return}if(t.key==="?"){t.preventDefault(),Hs("SHORTCUTS","Keyboard shortcuts",yP());return}}t.key!=="Escape"||_t!=="inspect"||Lr(t.target)||(t.preventDefault(),_u(),wa())}function EP(t){switch(t){case"m":return"map";case"l":return"timeline";case"t":return"transcript";case"h":return"health";case"i":return"insights";case"r":return"raw";case"e":return"export";default:return null}}function TP(t){CP(t)&&(In.add(t.code),t.preventDefault())}function AP(t){if(!Mv(t.code))return;In.delete(t.code)&&t.preventDefault()}function CP(t){let e=bv(t.code);if(e&&(xt!=="map"||PP(t.target)))return!1;let n=e||xt==="map"&&Ev();return Mv(t.code)&&(!t.ctrlKey||n)&&!t.metaKey&&!t.altKey&&!Lr(t.target)}function Mv(t){return wP(t)||bv(t)||nR.has(t)}function wP(t){return eR.has(t)}function bv(t){return t===Dx||RP(t)}function RP(t){return tR.has(t)}function IP(){return In.has("ShiftLeft")||In.has("ShiftRight")}function Ev(){return In.has("ControlLeft")||In.has("ControlRight")}function Tv(){In.clear()}function NP(){document.hidden&&Tv()}function Lr(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLElement&&t.isContentEditable}function PP(t){return t instanceof HTMLElement&&(Lr(t)||!!t.closest("button, select, a[href]"))}function Ou(){Bu(),Nn&&(FP(),!(typeof EventSource>"u")&&(tr=new EventSource(Zs("/api/session/events").toString()),tr.addEventListener("open",()=>{Pr=!0,ar()}),tr.addEventListener("session-status",t=>{Pr=!0,ar();try{jx(JSON.parse(t.data))}catch(e){Sa(e)}}),tr.addEventListener("session-error",t=>{Sa(t.data||"Session stream error")}),tr.addEventListener("error",()=>{Pr=!1,ar(),DP()})))}function Bu(){LP(),Av(),OP()}function LP(){tr&&(tr.close(),tr=null),Pr=!1}function FP(){Av(),Nn&&(Zd(),Qc=setInterval(Zd,BC))}function Av(){Qc&&(clearInterval(Qc),Qc=null)}function DP(){Bs||(Bs=setTimeout(()=>{Bs=null,!Pr&&Nn&&Zd()},UC))}function OP(){Bs&&(clearTimeout(Bs),Bs=null)}function ar(){let t=!!Ae?.isLive;NC.classList.toggle("paused",!Nn||!t),vx.textContent=Nn?t?"LIVE":"STALE":"PAUSED",yx.textContent=Nn?t?Pr?"Streaming session...":"Watching session...":"Waiting for writes...":"Updates paused"}function Q0(){ks||(ks=setTimeout(()=>{ks=null;let t=performance.now(),e=Be.filter(n=>zr(n,t));e.length&&(e.forEach(n=>{n.matrixDirty=!0}),Mn())},120))}function Sa(t){console.warn(Vr(t))}function Qd(t){if(Math.abs(t)<.001)return;Tu();let e=t*BP();Fe.getWorldDirection(pi),Fe.position.addScaledVector(pi,e),Ke.target.addScaledVector(pi,e),Ke.update()}function BP(){return Math.min(Yw,Math.max(Xw,k_()*qw))}function vu(t){let e=Cv();if(!e.length)return;let i=(Math.max(0,e.findIndex(s=>s.id===dt))+t+e.length)%e.length,r=e[i];dt=r.id,it=r.promptId,Js(r)}function Cv(){return(_t==="inspect"&&it?Rf(it).visibleNodes:Be).filter(e=>Dn(e)&&(e.type!=="prompt"||e.promptId===it||_t==="overview")).sort(I_)}function UP(t){wv({kind:"metric",metric:t})}function kP(t){wv({kind:"role",role:t})}function wv(t){if(!ef(Yt,t)&&yu(t)<=0){Zf();return}Yt=ef(Yt,t)?null:t,VP()}function ef(t,e){return!t||t.kind!==e.kind?!1:t.kind==="metric"&&e.kind==="metric"?t.metric===e.metric:t.kind==="role"&&e.kind==="role"&&t.role===e.role}function VP(){Zf(),_t==="inspect"?(_t="overview",it=null,cr({preserveCamera:!0})):(w_(),Aa(),wu()),Mn()}function Zf(t=Ta()){Yt&&yu(Yt,t)<=0&&(Yt=null);let e=!!Yt;if(mf.classList.toggle("map-filter-active",e),RC.classList.toggle("filter-active",e),HP(t),!Yt){let r=Be.filter(Ca).length;o0.textContent=`${re(r)} map nodes shown. Click a chip to isolate a role or metric.`;return}let n=Iv(Yt),i=yu(Yt,t);o0.textContent=`Filtering to ${n}: ${re(i)} matching nodes shown; other map nodes hidden. Click ${n} again to clear.`}function HP(t=Ta()){[...Cx,...wx].forEach(e=>{let n=Rv(e);if(!n)return;let i=ef(Yt,n),r=zP(e,t),s=Iv(n),o=`${re(r)} matching ${r===1?"node":"nodes"}`;e.classList.toggle("active",i),e.classList.toggle("map-filter-empty",r<=0),e.setAttribute("aria-pressed",String(i)),e.disabled=r<=0,e.title=r<=0?`No ${s.toLowerCase()} in this map`:i?`Clear ${s} map filter (${o})`:`Show only ${s} (${o})`,e.setAttribute("aria-label",r<=0?`No ${s} in this map`:i?`Clear ${s} filter; ${o} currently shown`:`Filter map to ${s}; ${o}`)})}function zP(t,e=Ta()){let n=Rv(t);return n?yu(n,e):0}function Rv(t){let e=t.dataset.metric;if(GP(e))return{kind:"metric",metric:e};let n=t.dataset.nodeRole;return WP(n)?{kind:"role",role:n}:null}function GP(t){return t!==void 0&&tf.includes(t)}function WP(t){return t!==void 0&&nf.includes(t)}function yu(t,e=Ta()){return t.kind==="metric"?e[t.metric]:e[rf[t.role]]}function Iv(t){return t.kind==="metric"?qA[t.metric]:XA[t.role]}function $P(t){return Yt?Yt.kind==="metric"?Uu(t,Yt.metric):XP(t,Yt.role):!0}function XP(t,e){return e?t.type==="prompt"?e==="prompt"?!0:aa.get(t.id)?.has(e)??!1:e==="prompt"?!1:Kf(t)===e:!0}function Kf(t){return t.type==="prompt"?"prompt":t.type==="message"?"message":t.type==="call"&&qP(t.kind)?t.kind:null}function qP(t){return $A.includes(t)}function Uu(t,e){return e?e==="compaction"?t.type==="compaction":e==="skill"?lC(t):t.type==="compaction"?!1:t.type==="prompt"?(oa.get(t.id)||[]).some(n=>n.id!==t.id&&Ca(n)&&Uu(n,e)):t.type==="fileChange"?YP(t.source,e):t.type==="message"?!1:KP(t.source,e):!0}function YP(t,e){if(e==="file")return!0;if(e==="diff"){let n=ZP(t).toLowerCase();return If(t)!=="add"||n.includes("diff")||n.includes("@@")}return!1}function ZP(t){return`${If(t)} ${t.path} ${t.preview} ${t.detail}`}function KP(t,e){if(e==="skill")return t.kind.toLowerCase()==="skill"||Su(t).length>0;if(e==="long")return Nv(t);if(e==="error"){let n=t.kind.toLowerCase(),i=t.status.toLowerCase();return n==="error"||yv(i)}return e==="file"?eu(t.name,["file","read","write","edit","multiedit","grep","glob","ls","apply_patch"]):e==="diff"?eu(t.name,["diff","apply_patch"]):e==="artifact"?t.kind.toLowerCase()==="artifact"||eu(t.name,["artifact"]):!1}function JP(t){return eu(t.name,["apply_patch"])}function Nv(t){return t.durationMs!==null&&t.durationMs>=YA}function eu(t,e){let n=t.toLowerCase();return e.some(i=>n===i?!0:new RegExp(`(^|[._:-])${i}([._:-]|$)`).test(n))}function Pv(t){return _n?`${t.kind} ${t.title} ${t.body}`.toLowerCase().includes(_n):!0}function Jf(){let t=dt?Nt.get(dt):null;t&&kf()&&Js(t,{skipStableRender:!0})}function Hs(t,e,n){dt=null,Vs=null,G_(),J_(),Mn(),lr.classList.remove("prompt-context"),pf.textContent=t,cf(e,"Selection"),ff.textContent="Control surface",lf(new Date().toISOString()),hf.textContent=e,Ur(),Ff(),W_(n)}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
