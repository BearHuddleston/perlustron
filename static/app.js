var kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},df=0,Iu=1,ff=2;var yo=1,pf=2,cr=3,_i=0,Kt=1,Tn=2,ei=0,ds=1,So=2,Pu=3,Lu=4,mf=5;var Oi=100,gf=101,_f=102,xf=103,vf=104,yf=200,Sf=201,Mf=202,bf=203,Na=204,Da=205,Ef=206,Tf=207,wf=208,Af=209,Cf=210,Rf=211,If=212,Pf=213,Lf=214,Ua=0,Fa=1,Oa=2,fs=3,Ba=4,ka=5,Va=6,za=7,Nu=0,Nf=1,Df=2,Vn=0,Du=1,Uu=2,Fu=3,Ou=4,Bu=5,ku=6,Vu=7;var zu=300,Gi=301,ms=302,ml=303,gl=304,Mo=306,Ha=1e3,Zn=1001,Ga=1002,kt=1003,Uf=1004;var bo=1005;var zt=1006,_l=1007;var Wi=1008;var sn=1009,Hu=1010,Gu=1011,ur=1012,xl=1013,zn=1014,wn=1015,ti=1016,vl=1017,yl=1018,hr=1020,Wu=35902,$u=35899,Xu=1021,qu=1022,An=1023,Kn=1026,$i=1027,Sl=1028,Ml=1029,Xi=1030,bl=1031;var El=1033,Eo=33776,To=33777,wo=33778,Ao=33779,Tl=35840,wl=35841,Al=35842,Cl=35843,Rl=36196,Il=37492,Pl=37496,Ll=37488,Nl=37489,Co=37490,Dl=37491,Ul=37808,Fl=37809,Ol=37810,Bl=37811,kl=37812,Vl=37813,zl=37814,Hl=37815,Gl=37816,Wl=37817,$l=37818,Xl=37819,ql=37820,Yl=37821,Zl=36492,Jl=36494,Kl=36495,jl=36283,Ql=36284,Ro=36285,ec=36286;var qr=2300,Wa=2301,La=2302,xu=2303,vu=2400,yu=2401,Su=2402;var Ff=3200;var Yu=0,Of=1,Si="",Jt="srgb",Yr="srgb-linear",Zr="linear",et="srgb";var hs=7680;var Mu=519,Bf=512,kf=513,Vf=514,tc=515,zf=516,Hf=517,nc=518,Gf=519,bu=35044,Zu=35048;var Ju="300 es",Fn=2e3,Ks=2001;function y_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function S_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wf(){let n=Jr("canvas");return n.style.display="block",n}var Dd={},js=null;function Ku(...n){let e="THREE."+n.shift();js?js("log",e,...n):console.log(e,...n)}function $f(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function we(...n){n=$f(n);let e="THREE."+n.shift();if(js)js("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ae(...n){n=$f(n);let e="THREE."+n.shift();if(js)js("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function $a(...n){let e=n.join(" ");e in Dd||(Dd[e]=!0,we(...n))}function Xf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var qf={[Ua]:Fa,[Oa]:Va,[Ba]:za,[fs]:ka,[Fa]:Ua,[Va]:Oa,[za]:Ba,[ka]:fs},On=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=1234567,$r=Math.PI/180,Qs=180/Math.PI;function dr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function ju(n,e){return(n%e+e)%e}function M_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function b_(n,e,t){return n!==e?(t-n)/(e-n):0}function Xr(n,e,t){return(1-t)*n+t*e}function E_(n,e,t,i){return Xr(n,e,1-Math.exp(-t*i))}function T_(n,e=1){return e-Math.abs(ju(n,e*2)-e)}function w_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function A_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function C_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function R_(n,e){return n+Math.random()*(e-n)}function I_(n){return n*(.5-Math.random())}function P_(n){n!==void 0&&(Ud=n);let e=Ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L_(n){return n*$r}function N_(n){return n*Qs}function D_(n){return(n&n-1)===0&&n!==0}function U_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function F_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function O_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Io={DEG2RAD:$r,RAD2DEG:Qs,generateUUID:dr,clamp:We,euclideanModulo:ju,mapLinear:M_,inverseLerp:b_,lerp:Xr,damp:E_,pingpong:T_,smoothstep:w_,smootherstep:A_,randInt:C_,randFloat:R_,randFloatSpread:I_,seededRandom:P_,degToRad:L_,radToDeg:N_,isPowerOfTwo:D_,ceilPowerOfTwo:U_,floorPowerOfTwo:F_,setQuaternionFromProperEuler:O_,normalize:Zt,denormalize:Zs},Ce=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let S=Math.acos(m),b=Math.sin(S);p=Math.sin(p*S)/b,a=Math.sin(a*S)/b,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+y*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+y*a;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zc=new I,Fd=new fn,Le=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],S=s[1],b=s[4],M=s[7],R=s[2],T=s[5],P=s[8];return r[0]=o*y+a*S+l*R,r[3]=o*m+a*b+l*T,r[6]=o*p+a*M+l*P,r[1]=c*y+h*S+d*R,r[4]=c*m+h*b+d*T,r[7]=c*p+h*M+d*P,r[2]=u*y+f*S+g*R,r[5]=u*m+f*b+g*T,r[8]=u*p+f*M+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jc.makeScale(e,t)),this}rotate(e){return this.premultiply(Jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jc=new Le,Od=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bd=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function B_(){let n={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===et&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $a("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $a("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yr]:{primaries:e,whitePoint:i,transfer:Zr,toXYZ:Od,fromXYZ:Bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Od,fromXYZ:Bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}var Ye=B_();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Fs,Xa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fs===void 0&&(Fs=Jr("canvas")),Fs.width=e.width,Fs.height=e.height;let s=Fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Fs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},k_=0,er=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kc(s[o].image)):r.push(Kc(s[o]))}else r=Kc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Kc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}var V_=0,jc=new I,tn=class n extends On{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Zn,s=Zn,r=zt,o=Wi,a=An,l=sn,c=n.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=dr(),this.name="",this.source=new er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=zu;tn.DEFAULT_ANISOTROPY=1;var vt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(f+1)/2,R=(p+1)/2,T=(h+u)/4,P=(d+y)/4,x=(g+m)/4;return b>M&&b>R?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=P/i):M>R?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=x/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=P/r,s=x/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-y)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends On{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new tn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new er(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends qa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Kr=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ya=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ot=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,y,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,y=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-y*c,t[9]=-a*l,t[2]=y-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u+y*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u-y*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,y=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z_,e,H_)}lookAt(e,t,i){let s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ii.crossVectors(i,hn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ii.crossVectors(i,hn)),Ii.normalize(),aa.crossVectors(hn,Ii),s[0]=Ii.x,s[4]=aa.x,s[8]=hn.x,s[1]=Ii.y,s[5]=aa.y,s[9]=hn.y,s[2]=Ii.z,s[6]=aa.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],S=i[3],b=i[7],M=i[11],R=i[15],T=s[0],P=s[4],x=s[8],w=s[12],L=s[1],C=s[5],U=s[9],G=s[13],W=s[2],A=s[6],O=s[10],k=s[14],J=s[3],K=s[7],ie=s[11],me=s[15];return r[0]=o*T+a*L+l*W+c*J,r[4]=o*P+a*C+l*A+c*K,r[8]=o*x+a*U+l*O+c*ie,r[12]=o*w+a*G+l*k+c*me,r[1]=h*T+d*L+u*W+f*J,r[5]=h*P+d*C+u*A+f*K,r[9]=h*x+d*U+u*O+f*ie,r[13]=h*w+d*G+u*k+f*me,r[2]=g*T+y*L+m*W+p*J,r[6]=g*P+y*C+m*A+p*K,r[10]=g*x+y*U+m*O+p*ie,r[14]=g*w+y*G+m*k+p*me,r[3]=S*T+b*L+M*W+R*J,r[7]=S*P+b*C+M*A+R*K,r[11]=S*x+b*U+M*O+R*ie,r[15]=S*w+b*G+M*k+R*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],S=l*f-c*u,b=a*f-c*d,M=a*u-l*d,R=o*f-c*h,T=o*u-l*h,P=o*d-a*h;return t*(y*S-m*b+p*M)-i*(g*S-m*R+p*T)+s*(g*b-y*R+p*P)-r*(g*M-y*T+m*P)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=t*a-i*o,b=t*l-s*o,M=t*c-r*o,R=i*l-s*a,T=i*c-r*a,P=s*c-r*l,x=h*y-d*g,w=h*m-u*g,L=h*p-f*g,C=d*m-u*y,U=d*p-f*y,G=u*p-f*m,W=S*G-b*U+M*C+R*L-T*w+P*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/W;return e[0]=(a*G-l*U+c*C)*A,e[1]=(s*U-i*G-r*C)*A,e[2]=(y*P-m*T+p*R)*A,e[3]=(u*T-d*P-f*R)*A,e[4]=(l*L-o*G-c*w)*A,e[5]=(t*G-s*L+r*w)*A,e[6]=(m*M-g*P-p*b)*A,e[7]=(h*P-u*M+f*b)*A,e[8]=(o*U-a*L+c*x)*A,e[9]=(i*L-t*U-r*x)*A,e[10]=(g*T-y*M+p*S)*A,e[11]=(d*M-h*T-f*S)*A,e[12]=(a*w-o*C-l*x)*A,e[13]=(t*C-i*w+s*x)*A,e[14]=(y*b-g*R-m*S)*A,e[15]=(h*R-d*b+u*S)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,y=o*h,m=o*d,p=a*d,S=l*c,b=l*h,M=l*d,R=i.x,T=i.y,P=i.z;return s[0]=(1-(y+p))*R,s[1]=(f+M)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(u+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+b)*P,s[9]=(m-S)*P,s[10]=(1-(u+y))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Os.set(s[0],s[1],s[2]).length(),a=Os.set(s[4],s[5],s[6]).length(),l=Os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Nn.copy(this);let c=1/o,h=1/a,d=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,t.setFromRotationMatrix(Nn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Fn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Fn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ks)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Fn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Fn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ks)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Os=new I,Nn=new ot,z_=new I(0,0,0),H_=new I(1,1,1),Ii=new I,aa=new I,hn=new I,kd=new ot,Vd=new fn,jn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},G_=0,zd=new I,Bs=new fn,hi=new ot,la=new I,Br=new I,W_=new I,$_=new fn,Hd=new I(1,0,0),Gd=new I(0,1,0),Wd=new I(0,0,1),$d={type:"added"},X_={type:"removed"},ks={type:"childadded",child:null},Qc={type:"childremoved",child:null},Ct=class n extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new jn,i=new fn,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Le}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Hd,e)}rotateY(e){return this.rotateOnAxis(Gd,e)}rotateZ(e){return this.rotateOnAxis(Wd,e)}translateOnAxis(e,t){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hd,e)}translateY(e){return this.translateOnAxis(Gd,e)}translateZ(e){return this.translateOnAxis(Wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?la.copy(e):la.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Br,la,this.up):hi.lookAt(la,Br,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(hi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ae("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($d),ks.child=e,this.dispatchEvent(ks),ks.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X_),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($d),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,W_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,$_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ct.DEFAULT_UP=new I(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},q_={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function eu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ye.workingColorSpace){if(e=ju(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=eu(o,r,e+1/3),this.g=eu(o,r,e),this.b=eu(o,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let i=Yf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Ye.workingToColorSpace(Wt.copy(this),e),Math.round(We(Wt.r*255,0,255))*65536+Math.round(We(Wt.g*255,0,255))*256+Math.round(We(Wt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Wt.copy(this),t);let i=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Jt){Ye.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,i=Wt.g,s=Wt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(ca);let i=Xr(Pi.h,ca.h,t),s=Xr(Pi.s,ca.s,t),r=Xr(Pi.l,ca.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new ke;ke.NAMES=Yf;var jr=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Dn=new I,di=new I,tu=new I,fi=new I,Vs=new I,zs=new I,Xd=new I,nu=new I,iu=new I,su=new I,ru=new vt,ou=new vt,au=new vt,Fi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),di.subVectors(i,t),tu.subVectors(e,t);let o=Dn.dot(Dn),a=Dn.dot(di),l=Dn.dot(tu),c=di.dot(di),h=di.dot(tu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ru.setScalar(0),ou.setScalar(0),au.setScalar(0),ru.fromBufferAttribute(e,t),ou.fromBufferAttribute(e,i),au.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ru,r.x),o.addScaledVector(ou,r.y),o.addScaledVector(au,r.z),o}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),di.subVectors(e,t),Dn.cross(di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Dn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Vs.subVectors(s,i),zs.subVectors(r,i),nu.subVectors(e,i);let l=Vs.dot(nu),c=zs.dot(nu);if(l<=0&&c<=0)return t.copy(i);iu.subVectors(e,s);let h=Vs.dot(iu),d=zs.dot(iu);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Vs,o);su.subVectors(e,r);let f=Vs.dot(su),g=zs.dot(su);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(zs,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Xd.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Xd,a);let p=1/(m+y+u);return o=y*p,a=u*p,t.copy(i).addScaledVector(Vs,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),ha.subVectors(this.max,kr),Hs.subVectors(e.a,kr),Gs.subVectors(e.b,kr),Ws.subVectors(e.c,kr),Li.subVectors(Gs,Hs),Ni.subVectors(Ws,Gs),as.subVectors(Hs,Ws);let t=[0,-Li.z,Li.y,0,-Ni.z,Ni.y,0,-as.z,as.y,Li.z,0,-Li.x,Ni.z,0,-Ni.x,as.z,0,-as.x,-Li.y,Li.x,0,-Ni.y,Ni.x,0,-as.y,as.x,0];return!lu(t,Hs,Gs,Ws,ha)||(t=[1,0,0,0,1,0,0,0,1],!lu(t,Hs,Gs,Ws,ha))?!1:(da.crossVectors(Li,Ni),t=[da.x,da.y,da.z],lu(t,Hs,Gs,Ws,ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new I,new I,new I,new I,new I,new I,new I,new I],Un=new I,ua=new Qn,Hs=new I,Gs=new I,Ws=new I,Li=new I,Ni=new I,as=new I,kr=new I,ha=new I,da=new I,ls=new I;function lu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ls.fromArray(n,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),h=i.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var At=new I,fa=new Ce,Y_=0,Bt=class extends On{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Y_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bu,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Qr=class extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var eo=class extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var at=class extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Z_=new Qn,Vr=new I,cu=new I,nn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Z_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(cu)),this.expandByPoint(Vr.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},J_=0,bn=new ot,uu=new Ct,$s=new I,dn=new Qn,zr=new Qn,Ot=new I,Rt=class n extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y_(e)?eo:Qr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Le().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(dn.min,zr.min),dn.expandByPoint(Ot),Ot.addVectors(dn.max,zr.max),dn.expandByPoint(Ot)):(dn.expandByPoint(zr.min),dn.expandByPoint(zr.max))}dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(e,c),Ot.add($s)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new I,l[x]=new I;let c=new I,h=new I,d=new I,u=new Ce,f=new Ce,g=new Ce,y=new I,m=new I;function p(x,w,L){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,L),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,L),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[x].add(y),a[w].add(y),a[L].add(y),l[x].add(m),l[w].add(m),l[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,w=S.length;x<w;++x){let L=S[x],C=L.start,U=L.count;for(let G=C,W=C+U;G<W;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let b=new I,M=new I,R=new I,T=new I;function P(x){R.fromBufferAttribute(s,x),T.copy(R);let w=a[x];b.copy(w),b.sub(R.multiplyScalar(R.dot(w))).normalize(),M.crossVectors(T,w);let C=M.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,C)}for(let x=0,w=S.length;x<w;++x){let L=S[x],C=L.start,U=L.count;for(let G=C,W=C+U;G<W;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Bt(u,h,d)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var K_=0,xi=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=ds,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Da,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Na&&(i.blendSrc=this.blendSrc),this.blendDst!==Da&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var mi=new I,hu=new I,pa=new I,Di=new I,du=new I,ma=new I,fu=new I,vi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hu.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(hu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(pa),a=Di.dot(this.direction),l=-Di.dot(pa),c=Di.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hu).addScaledVector(pa,u),f}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,s,r){du.subVectors(t,e),ma.subVectors(i,e),fu.crossVectors(du,ma);let o=this.direction.dot(fu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);let l=a*this.direction.dot(ma.crossVectors(Di,ma));if(l<0)return null;let c=a*this.direction.dot(du.cross(Di));if(c<0||l+c>o)return null;let h=-a*Di.dot(fu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qd=new ot,cs=new vi,ga=new nn,Yd=new I,_a=new I,xa=new I,va=new I,pu=new I,ya=new I,Zd=new I,Sa=new I,Xt=class extends Ct{constructor(e=new Rt,t=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(pu.fromBufferAttribute(d,e),o?ya.addScaledVector(pu,h):ya.addScaledVector(pu.sub(t),h))}t.add(ya)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(ga.containsPoint(cs.origin)===!1&&(cs.intersectSphere(ga,Yd)===null||cs.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&(qd.copy(r).invert(),cs.copy(e.ray).applyMatrix4(qd),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,R=b;M<R;M+=3){let T=a.getX(M),P=a.getX(M+1),x=a.getX(M+2);s=Ma(this,p,e,i,c,h,d,T,P,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=Ma(this,o,e,i,c,h,d,S,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,R=b;M<R;M+=3){let T=M,P=M+1,x=M+2;s=Ma(this,p,e,i,c,h,d,T,P,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,b=m+1,M=m+2;s=Ma(this,o,e,i,c,h,d,S,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function j_(n,e,t,i,s,r,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===_i,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Sa);return c<t.near||c>t.far?null:{distance:c,point:Sa.clone(),object:n}}function Ma(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,_a),n.getVertexPosition(l,xa),n.getVertexPosition(c,va);let h=j_(n,e,t,i,_a,xa,va,Zd);if(h){let d=new I;Fi.getBarycoord(Zd,_a,xa,va,d),s&&(h.uv=Fi.getInterpolatedAttribute(s,a,l,c,d,new Ce)),r&&(h.uv1=Fi.getInterpolatedAttribute(r,a,l,c,d,new Ce)),o&&(h.normal=Fi.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Fi.getNormal(_a,xa,va,u.normal),h.face=u,h.barycoord=d}return h}var to=class extends tn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=kt,h=kt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var no=class extends Bt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xs=new ot,Jd=new ot,ba=[],Kd=new Qn,Q_=new ot,Hr=new Xt,Gr=new nn,io=class extends Xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new no(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Q_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xs),Kd.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(Kd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xs),Gr.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(i),e.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),Jd.multiplyMatrices(i,Xs),Hr.matrixWorld=Jd,Hr.raycast(e,ba);for(let o=0,a=ba.length;o<a;o++){let l=ba[o];l.instanceId=r,l.object=this,t.push(l)}ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new no(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new to(new Float32Array(s*this.count),s,this.count,Sl,wn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mu=new I,e0=new I,t0=new Le,En=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=mu.subVectors(i,t).cross(e0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(mu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||t0.getNormalMatrix(e),s=this.coplanarPoint(mu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new nn,n0=new Ce(.5,.5),Ea=new I,ir=class{constructor(e=new En,t=new En,i=new En,s=new En,r=new En,o=new En){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],b=r[13],M=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,p-g,R-S).normalize(),s[1].setComponents(c+o,f+h,p+g,R+S).normalize(),s[2].setComponents(c+a,f+d,p+y,R+b).normalize(),s[3].setComponents(c-a,f-d,p-y,R-b).normalize(),i)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,f-u,p-m,R-M).normalize();else if(s[4].setComponents(c-l,f-u,p-m,R-M).normalize(),t===Fn)s[5].setComponents(c+l,f+u,p+m,R+M).normalize();else if(t===Ks)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=n0.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ea.x=s.normal.x>0?e.max.x:e.min.x,Ea.y=s.normal.y>0?e.max.y:e.min.y,Ea.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ps=class extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Za=new I,Ja=new I,jd=new ot,Wr=new vi,Ta=new nn,gu=new I,Qd=new I,Ka=class extends Ct{constructor(e=new Rt,t=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Za.fromBufferAttribute(t,s-1),Ja.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Za.distanceTo(Ja);e.setAttribute("lineDistance",new at(i,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;jd.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(jd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=h.getX(y),S=h.getX(y+1),b=wa(this,e,Wr,l,p,S,y);b&&t.push(b)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=wa(this,e,Wr,l,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=wa(this,e,Wr,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=wa(this,e,Wr,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wa(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Za.fromBufferAttribute(a,s),Ja.fromBufferAttribute(a,r),t.distanceSqToSegment(Za,Ja,gu,Qd)>i)return;gu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(gu);if(!(c<e.near||c>e.far))return{distance:c,point:Qd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var ef=new I,tf=new I,sr=class extends Ka{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ef.fromBufferAttribute(t,s),tf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ef.distanceTo(tf);e.setAttribute("lineDistance",new at(i,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var rr=class extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nf=new ot,Eu=new vi,Aa=new nn,Ca=new I,so=class extends Ct{constructor(e=new Rt,t=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;nf.copy(s).invert(),Eu.copy(e.ray).applyMatrix4(nf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,y=f;g<y;g++){let m=c.getX(g);Ca.fromBufferAttribute(d,m),sf(Ca,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,y=f;g<y;g++)Ca.fromBufferAttribute(d,g),sf(Ca,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sf(n,e,t,i,s,r,o){let a=Eu.distanceSqToPoint(n);if(a<t){let l=new I;Eu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ro=class extends tn{constructor(e=[],t=Gi,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var yi=class extends tn{constructor(e,t,i=zn,s,r,o,a=kt,l=kt,c,h=Kn,d=1){if(h!==Kn&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new er(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ja=class extends yi{constructor(e,t=zn,i=Gi,s,r,o=kt,a=kt,l,c=Kn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},oo=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bi=class n extends Rt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2));function g(y,m,p,S,b,M,R,T,P,x,w){let L=M/P,C=R/x,U=M/2,G=R/2,W=T/2,A=P+1,O=x+1,k=0,J=0,K=new I;for(let ie=0;ie<O;ie++){let me=ie*C-G;for(let ye=0;ye<A;ye++){let He=ye*L-U;K[y]=He*S,K[m]=me*b,K[p]=W,c.push(K.x,K.y,K.z),K[y]=0,K[m]=0,K[p]=T>0?1:-1,h.push(K.x,K.y,K.z),d.push(ye/P),d.push(1-ie/x),k+=1}}for(let ie=0;ie<x;ie++)for(let me=0;me<P;me++){let ye=u+me+A*ie,He=u+me+A*(ie+1),Ge=u+(me+1)+A*(ie+1),Fe=u+(me+1)+A*ie;l.push(ye,He,Fe),l.push(He,Ge,Fe),J+=6}a.addGroup(f,J,w),f+=J,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ao=class n extends Rt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=i/2,p=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(f,2));function S(){let M=new I,R=new I,T=0,P=(t-e)/i;for(let x=0;x<=r;x++){let w=[],L=x/r,C=L*(t-e)+e;for(let U=0;U<=s;U++){let G=U/s,W=G*l+a,A=Math.sin(W),O=Math.cos(W);R.x=C*A,R.y=-L*i+m,R.z=C*O,d.push(R.x,R.y,R.z),M.set(A,P,O).normalize(),u.push(M.x,M.y,M.z),f.push(G,1-L),w.push(g++)}y.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let L=y[w][x],C=y[w+1][x],U=y[w+1][x+1],G=y[w][x+1];(e>0||w!==0)&&(h.push(L,C,G),T+=3),(t>0||w!==r-1)&&(h.push(C,U,G),T+=3)}c.addGroup(p,T,0),p+=T}function b(M){let R=g,T=new Ce,P=new I,x=0,w=M===!0?e:t,L=M===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*L,0),u.push(0,L,0),f.push(.5,.5),g++;let C=g;for(let U=0;U<=s;U++){let W=U/s*l+a,A=Math.cos(W),O=Math.sin(W);P.x=w*O,P.y=m*L,P.z=w*A,d.push(P.x,P.y,P.z),u.push(0,L,0),T.x=A*.5+.5,T.y=O*.5*L+.5,f.push(T.x,T.y),g++}for(let U=0;U<s;U++){let G=R+U,W=C+U;M===!0?h.push(W,W+1,G):h.push(W+1,W,G),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qa=class n extends Rt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let b=new I,M=new I,R=new I;for(let T=0;T<t.length;T+=3)f(t[T+0],b),f(t[T+1],M),f(t[T+2],R),l(b,M,R,S)}function l(S,b,M,R){let T=R+1,P=[];for(let x=0;x<=T;x++){P[x]=[];let w=S.clone().lerp(M,x/T),L=b.clone().lerp(M,x/T),C=T-x;for(let U=0;U<=C;U++)U===0&&x===T?P[x][U]=w:P[x][U]=w.clone().lerp(L,U/C)}for(let x=0;x<T;x++)for(let w=0;w<2*(T-x)-1;w++){let L=Math.floor(w/2);w%2===0?(u(P[x][L+1]),u(P[x+1][L]),u(P[x][L])):(u(P[x][L+1]),u(P[x+1][L+1]),u(P[x+1][L]))}}function c(S){let b=new I;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(S),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){let S=new I;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];let M=m(S)/2/Math.PI+.5,R=p(S)/Math.PI+.5;o.push(M,1-R)}g(),d()}function d(){for(let S=0;S<o.length;S+=6){let b=o[S+0],M=o[S+2],R=o[S+4],T=Math.max(b,M,R),P=Math.min(b,M,R);T>.9&&P<.1&&(b<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),R<.2&&(o[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,b){let M=S*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function g(){let S=new I,b=new I,M=new I,R=new I,T=new Ce,P=new Ce,x=new Ce;for(let w=0,L=0;w<r.length;w+=9,L+=6){S.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),T.set(o[L+0],o[L+1]),P.set(o[L+2],o[L+3]),x.set(o[L+4],o[L+5]),R.copy(S).add(b).add(M).divideScalar(3);let C=m(R);y(T,L+0,S,C),y(P,L+2,b,C),y(x,L+4,M,C)}}function y(S,b,M,R){R<0&&S.x===1&&(o[b]=S.x-1),M.x===0&&M.z===0&&(o[b]=R/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var lo=class n extends Qa{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},co=class n extends Rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let S=p*u-o;for(let b=0;b<c;b++){let M=b*d-r;g.push(M,-S,0),y.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let b=S+c*p,M=S+c*(p+1),R=S+1+c*(p+1),T=S+1+c*p;f.push(b,M,T),f.push(M,R,T)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(y,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},or=class n extends Rt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new I,g=new Ce;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(i+1);for(let p=0;p<i;p++){let S=p+m,b=S,M=S+i+1,R=S+i+2,T=S+1;a.push(b,M,T),a.push(M,R,T)}}this.setIndex(a),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var uo=class n extends Rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let S=[],b=p/i,M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){let T=R/t;d.x=-e*Math.cos(s+T*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+T*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+M,1-b),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let b=h[p][S+1],M=h[p][S],R=h[p+1][S],T=h[p+1][S+1];(p!==0||o>0)&&f.push(b,M,T),(p!==i-1||l<Math.PI)&&f.push(M,R,T)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(y,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function gs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(rf(s))s.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(rf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function qt(n){let e={};for(let t=0;t<n.length;t++){let i=gs(n[t]);for(let s in i)e[s]=i[s]}return e}function rf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function i0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var Zf={clone:gs,merge:qt},s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=i0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},el=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var tl=class extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nl=class extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ra(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var ki=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},il=class extends ki{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vu,endingEnd:vu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yu:r=e,a=2*t-i;break;case Su:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case yu:o=e,l=2*i-t;break;case Su:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,S=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*y+.5*g,M=f*m-f*y;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+S*o[c+R]+b*o[l+R]+M*o[d+R];return r}},sl=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},rl=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ol=class extends ki{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.settings||this.DefaultSettings_,d=h.inTangents,u=h.outTangents;if(!d||!u){let y=(i-t)/(s-t),m=1-y;for(let p=0;p!==a;++p)r[p]=o[c+p]*m+o[l+p]*y;return r}let f=a*2,g=e-1;for(let y=0;y!==a;++y){let m=o[c+y],p=o[l+y],S=g*f+y*2,b=u[S],M=u[S+1],R=e*f+y*2,T=d[R],P=d[R+1],x=(i-t)/(s-t),w,L,C,U,G;for(let W=0;W<8;W++){w=x*x,L=w*x,C=1-x,U=C*C,G=U*C;let O=G*t+3*U*x*b+3*C*w*T+L*s-i;if(Math.abs(O)<1e-10)break;let k=3*U*(b-t)+6*C*x*(T-b)+3*w*(s-T);if(Math.abs(k)<1e-10)break;x=x-O/k,x=Math.max(0,Math.min(1,x))}r[y]=G*m+3*U*x*M+3*C*w*P+L*p}return r}},gn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ra(t,this.TimeBufferType),this.values=Ra(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ra(e.times,Array),values:Ra(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ol(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case Wa:t=this.InterpolantFactoryMethodLinear;break;case La:t=this.InterpolantFactoryMethodSmooth;break;case xu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return we("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return La;case this.InterpolantFactoryMethodBezier:return xu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ae("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ae("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ae("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ae("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&S_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ae("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===La,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Wa;var Vi=class extends gn{constructor(e,t,i){super(e,t,i)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=qr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};al.prototype.ValueTypeName="color";var ll=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};ll.prototype.ValueTypeName="number";var cl=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ho=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}};ho.prototype.ValueTypeName="quaternion";ho.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends gn{constructor(e,t,i){super(e,t,i)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=qr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};ul.prototype.ValueTypeName="vector";var hl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jf=new hl,dl=class{constructor(e){this.manager=e!==void 0?e:Jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var fo=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},po=class extends fo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},_u=new ot,of=new I,af=new I,Tu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;of.setFromMatrixPosition(e.matrixWorld),t.position.copy(of),af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(af),t.updateMatrixWorld(),_u.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_u,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ks||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ia=new I,Pa=new fn,Yn=new I,mo=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ia,Pa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Pa,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ia,Pa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Pa,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ui=new I,lf=new Ce,cf=new Ce,$t=class extends mo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,lf,cf),t.subVectors(cf,lf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($r*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ar=class extends mo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wu=class extends Tu{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},go=class extends fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new wu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var qs=-90,Ys=1,fl=class extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(qs,Ys,e,t);s.layers=this.layers,this.add(s);let r=new $t(qs,Ys,e,t);r.layers=this.layers,this.add(r);let o=new $t(qs,Ys,e,t);o.layers=this.layers,this.add(o);let a=new $t(qs,Ys,e,t);a.layers=this.layers,this.add(a);let l=new $t(qs,Ys,e,t);l.layers=this.layers,this.add(l);let c=new $t(qs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},pl=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var eh="\\[\\]\\.:\\/",o0=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",a0="[^"+eh.replace("\\.","")+"]",l0=/((?:WC+[\/:])*)/.source.replace("WC",th),c0=/(WCOD+)?/.source.replace("WCOD",a0),u0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),h0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),d0=new RegExp("^"+l0+c0+u0+h0+"$"),f0=["material","materials","bones","map"],Au=class{constructor(e,t,i){let s=i||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},gt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(o0,"")}static parseTrackName(e){let t=d0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);f0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ae("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=Au;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uA=new Float32Array(1);var uf=new ot,_o=class{constructor(e,t,i=0,s=1/0){this.ray=new vi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ae("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uf),this}intersectObject(e,t=!0,i=[]){return Cu(e,this,i,t),i.sort(hf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Cu(e[s],this,i,t);return i.sort(hf),i}};function hf(n,e){return n.distance-e.distance}function Cu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Cu(r[o],e,t,!0)}}var lr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ru=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var xo=class extends sr{constructor(e=10,t=10,i=4473924,s=8947848){i=new ke(i),s=new ke(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,f=0,g=-a;u<=t;u++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let y=u===r?i:s;y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3}let h=new Rt;h.setAttribute("position",new at(l,3)),h.setAttribute("color",new at(c,3));let d=new ps({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var vo=class extends On{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){we("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function nh(n,e,t,i){let s=p0(i);switch(t){case Xu:return n*e;case Sl:return n*e/s.components*s.byteLength;case Ml:return n*e/s.components*s.byteLength;case Xi:return n*e*2/s.components*s.byteLength;case bl:return n*e*2/s.components*s.byteLength;case qu:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case El:return n*e*4/s.components*s.byteLength;case Eo:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wo:case Ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:case Cl:return Math.max(n,16)*Math.max(e,8)/4;case Tl:case Al:return Math.max(n,8)*Math.max(e,8)/2;case Rl:case Il:case Ll:case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Co:case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Zl:case Jl:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ro:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function p0(n){switch(n){case sn:case Hu:return{byteLength:1,components:1};case ur:case Gu:case ti:return{byteLength:2,components:1};case vl:case yl:return{byteLength:2,components:4};case zn:case xl:case wn:return{byteLength:4,components:1};case Wu:case $u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function vp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function g0(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
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
#endif`,v0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
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
#endif`,E0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
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
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I0=`#ifdef USE_IRIDESCENCE
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
#endif`,P0=`#ifdef USE_BUMPMAP
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H0=`vec3 transformedNormal = objectNormal;
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
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
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
}`,rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cx=`#ifdef USE_ENVMAP
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
#endif`,ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,px=`PhysicalMaterial material;
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
#endif`,mx=`uniform sampler2D dfgLUT;
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
}`,gx=`
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
#endif`,_x=`#if defined( RE_IndirectDiffuse )
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ax=`#if defined( USE_POINTS_UV )
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
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Px=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`#ifdef USE_MORPHTARGETS
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
#endif`,Dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
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
#endif`,zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nv=`float getShadowMask() {
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
}`,iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sv=`#ifdef USE_SKINNING
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
#endif`,rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ov=`#ifdef USE_SKINNING
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
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hv=`#ifdef USE_TRANSMISSION
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
#endif`,dv=`#ifdef USE_TRANSMISSION
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xv=`uniform sampler2D t2D;
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`#include <common>
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
}`,Ev=`#if DEPTH_PACKING == 3200
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
}`,Tv=`#define DISTANCE
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
}`,wv=`#define DISTANCE
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
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
}`,Iv=`uniform vec3 diffuse;
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
}`,Pv=`#include <common>
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Nv=`#define LAMBERT
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
}`,Dv=`#define LAMBERT
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
}`,Uv=`#define MATCAP
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
}`,Fv=`#define MATCAP
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
}`,Ov=`#define NORMAL
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
}`,Bv=`#define NORMAL
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
}`,kv=`#define PHONG
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
}`,Vv=`#define PHONG
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
}`,zv=`#define STANDARD
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
}`,Hv=`#define STANDARD
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
}`,Gv=`#define TOON
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
}`,Wv=`#define TOON
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
}`,$v=`uniform float size;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,qv=`#include <common>
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
}`,Yv=`uniform vec3 color;
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
}`,Zv=`uniform float rotation;
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
}`,Jv=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:_0,alphahash_pars_fragment:x0,alphamap_fragment:v0,alphamap_pars_fragment:y0,alphatest_fragment:S0,alphatest_pars_fragment:M0,aomap_fragment:b0,aomap_pars_fragment:E0,batching_pars_vertex:T0,batching_vertex:w0,begin_vertex:A0,beginnormal_vertex:C0,bsdfs:R0,iridescence_fragment:I0,bumpmap_pars_fragment:P0,clipping_planes_fragment:L0,clipping_planes_pars_fragment:N0,clipping_planes_pars_vertex:D0,clipping_planes_vertex:U0,color_fragment:F0,color_pars_fragment:O0,color_pars_vertex:B0,color_vertex:k0,common:V0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:H0,displacementmap_pars_vertex:G0,displacementmap_vertex:W0,emissivemap_fragment:$0,emissivemap_pars_fragment:X0,colorspace_fragment:q0,colorspace_pars_fragment:Y0,envmap_fragment:Z0,envmap_common_pars_fragment:J0,envmap_pars_fragment:K0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:cx,envmap_vertex:Q0,fog_vertex:ex,fog_pars_vertex:tx,fog_fragment:nx,fog_pars_fragment:ix,gradientmap_pars_fragment:sx,lightmap_pars_fragment:rx,lights_lambert_fragment:ox,lights_lambert_pars_fragment:ax,lights_pars_begin:lx,lights_toon_fragment:ux,lights_toon_pars_fragment:hx,lights_phong_fragment:dx,lights_phong_pars_fragment:fx,lights_physical_fragment:px,lights_physical_pars_fragment:mx,lights_fragment_begin:gx,lights_fragment_maps:_x,lights_fragment_end:xx,lightprobes_pars_fragment:vx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:Mx,logdepthbuf_vertex:bx,map_fragment:Ex,map_pars_fragment:Tx,map_particle_fragment:wx,map_particle_pars_fragment:Ax,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Rx,morphinstance_vertex:Ix,morphcolor_vertex:Px,morphnormal_vertex:Lx,morphtarget_pars_vertex:Nx,morphtarget_vertex:Dx,normal_fragment_begin:Ux,normal_fragment_maps:Fx,normal_pars_fragment:Ox,normal_pars_vertex:Bx,normal_vertex:kx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:zx,clearcoat_normal_fragment_maps:Hx,clearcoat_pars_fragment:Gx,iridescence_pars_fragment:Wx,opaque_fragment:$x,packing:Xx,premultiplied_alpha_fragment:qx,project_vertex:Yx,dithering_fragment:Zx,dithering_pars_fragment:Jx,roughnessmap_fragment:Kx,roughnessmap_pars_fragment:jx,shadowmap_pars_fragment:Qx,shadowmap_pars_vertex:ev,shadowmap_vertex:tv,shadowmask_pars_fragment:nv,skinbase_vertex:iv,skinning_pars_vertex:sv,skinning_vertex:rv,skinnormal_vertex:ov,specularmap_fragment:av,specularmap_pars_fragment:lv,tonemapping_fragment:cv,tonemapping_pars_fragment:uv,transmission_fragment:hv,transmission_pars_fragment:dv,uv_pars_fragment:fv,uv_pars_vertex:pv,uv_vertex:mv,worldpos_vertex:gv,background_vert:_v,background_frag:xv,backgroundCube_vert:vv,backgroundCube_frag:yv,cube_vert:Sv,cube_frag:Mv,depth_vert:bv,depth_frag:Ev,distance_vert:Tv,distance_frag:wv,equirect_vert:Av,equirect_frag:Cv,linedashed_vert:Rv,linedashed_frag:Iv,meshbasic_vert:Pv,meshbasic_frag:Lv,meshlambert_vert:Nv,meshlambert_frag:Dv,meshmatcap_vert:Uv,meshmatcap_frag:Fv,meshnormal_vert:Ov,meshnormal_frag:Bv,meshphong_vert:kv,meshphong_frag:Vv,meshphysical_vert:zv,meshphysical_frag:Hv,meshtoon_vert:Gv,meshtoon_frag:Wv,points_vert:$v,points_frag:Xv,shadow_vert:qv,shadow_frag:Yv,sprite_vert:Zv,sprite_frag:Jv},ue={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},ii={basic:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:qt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:qt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:qt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:qt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:qt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:qt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:qt([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:qt([ue.lights,ue.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ii.physical={uniforms:qt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var ic={r:0,b:0,g:0},Kv=new ot,yp=new Le;yp.set(-1,0,0,0,1,0,0,0,1);function jv(n,e,t,i,s,r){let o=new ke(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){let M=S.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(S){let b=!1,M=f(S);M===null?m(o,a):M&&M.isColor&&(m(M,1),b=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,b){let M=f(b);M&&(M.isCubeTexture||M.mapping===Mo)?(c===void 0&&(c=new Xt(new Bi(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:gs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yp),c.material.toneMapped=Ye.getTransfer(M.colorSpace)!==et,(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Xt(new co(2,2),new mn({name:"BackgroundMaterial",uniforms:gs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,b){S.getRGB(ic,Qu(n)),t.buffers.color.setClear(ic.r,ic.g,ic.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:y,dispose:p}}function Qv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(C,U,G,W,A){let O=!1,k=d(C,W,G,U);r!==k&&(r=k,c(r.object)),O=f(C,W,G,A),O&&g(C,W,G,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,M(C,U,G,W),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function d(C,U,G,W){let A=W.wireframe===!0,O=i[U.id];O===void 0&&(O={},i[U.id]=O);let k=C.isInstancedMesh===!0?C.id:0,J=O[k];J===void 0&&(J={},O[k]=J);let K=J[G.id];K===void 0&&(K={},J[G.id]=K);let ie=K[A];return ie===void 0&&(ie=u(l()),K[A]=ie),ie}function u(C){let U=[],G=[],W=[];for(let A=0;A<t;A++)U[A]=0,G[A]=0,W[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:W,object:C,attributes:{},index:null}}function f(C,U,G,W){let A=r.attributes,O=U.attributes,k=0,J=G.getAttributes();for(let K in J)if(J[K].location>=0){let me=A[K],ye=O[K];if(ye===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ye=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ye=C.instanceColor)),me===void 0||me.attribute!==ye||ye&&me.data!==ye.data)return!0;k++}return r.attributesNum!==k||r.index!==W}function g(C,U,G,W){let A={},O=U.attributes,k=0,J=G.getAttributes();for(let K in J)if(J[K].location>=0){let me=O[K];me===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(me=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(me=C.instanceColor));let ye={};ye.attribute=me,me&&me.data&&(ye.data=me.data),A[K]=ye,k++}r.attributes=A,r.attributesNum=k,r.index=W}function y(){let C=r.newAttributes;for(let U=0,G=C.length;U<G;U++)C[U]=0}function m(C){p(C,0)}function p(C,U){let G=r.newAttributes,W=r.enabledAttributes,A=r.attributeDivisors;G[C]=1,W[C]===0&&(n.enableVertexAttribArray(C),W[C]=1),A[C]!==U&&(n.vertexAttribDivisor(C,U),A[C]=U)}function S(){let C=r.newAttributes,U=r.enabledAttributes;for(let G=0,W=U.length;G<W;G++)U[G]!==C[G]&&(n.disableVertexAttribArray(G),U[G]=0)}function b(C,U,G,W,A,O,k){k===!0?n.vertexAttribIPointer(C,U,G,A,O):n.vertexAttribPointer(C,U,G,W,A,O)}function M(C,U,G,W){y();let A=W.attributes,O=G.getAttributes(),k=U.defaultAttributeValues;for(let J in O){let K=O[J];if(K.location>=0){let ie=A[J];if(ie===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor)),ie!==void 0){let me=ie.normalized,ye=ie.itemSize,He=e.get(ie);if(He===void 0)continue;let Ge=He.buffer,Fe=He.type,Z=He.bytesPerElement,fe=Fe===n.INT||Fe===n.UNSIGNED_INT||ie.gpuType===xl;if(ie.isInterleavedBufferAttribute){let re=ie.data,Re=re.stride,Ne=ie.offset;if(re.isInstancedInterleavedBuffer){for(let Ie=0;Ie<K.locationSize;Ie++)p(K.location+Ie,re.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ie=0;Ie<K.locationSize;Ie++)m(K.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Ie=0;Ie<K.locationSize;Ie++)b(K.location+Ie,ye/K.locationSize,Fe,me,Re*Z,(Ne+ye/K.locationSize*Ie)*Z,fe)}else{if(ie.isInstancedBufferAttribute){for(let re=0;re<K.locationSize;re++)p(K.location+re,ie.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let re=0;re<K.locationSize;re++)m(K.location+re);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let re=0;re<K.locationSize;re++)b(K.location+re,ye/K.locationSize,Fe,me,ye*Z,ye/K.locationSize*re*Z,fe)}}else if(k!==void 0){let me=k[J];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(K.location,me);break;case 3:n.vertexAttrib3fv(K.location,me);break;case 4:n.vertexAttrib4fv(K.location,me);break;default:n.vertexAttrib1fv(K.location,me)}}}}S()}function R(){w();for(let C in i){let U=i[C];for(let G in U){let W=U[G];for(let A in W){let O=W[A];for(let k in O)h(O[k].object),delete O[k];delete W[A]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;let U=i[C.id];for(let G in U){let W=U[G];for(let A in W){let O=W[A];for(let k in O)h(O[k].object),delete O[k];delete W[A]}}delete i[C.id]}function P(C){for(let U in i){let G=i[U];for(let W in G){let A=G[W];if(A[C.id]===void 0)continue;let O=A[C.id];for(let k in O)h(O[k].object),delete O[k];delete A[C.id]}}}function x(C){for(let U in i){let G=i[U],W=C.isInstancedMesh===!0?C.id:0,A=G[W];if(A!==void 0){for(let O in A){let k=A[O];for(let J in k)h(k[J].object),delete k[J];delete A[O]}delete G[W],Object.keys(G).length===0&&delete i[U]}}}function w(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function ey(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ty(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==An&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let x=P===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==sn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==wn&&!x)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(we("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:M,maxSamples:R,samples:T}}function ny(n){let e=this,t=null,i=0,s=!1,r=!1,o=new En,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:i,b=S*4,M=p.clippingState||null;l.value=M,M=h(g,u,b,f);for(let R=0;R!==b;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==y;++b,M+=4)o.copy(d[b]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var qi=4,Kf=[.125,.215,.35,.446,.526,.582],_s=20,iy=256,Po=new ar,jf=new ke,ih=null,sh=0,rh=0,oh=!1,sy=new I,rc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=sy}=r;ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,sh,rh),this._renderer.xr.enabled=oh,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:ti,format:An,colorSpace:Yr,depthBuffer:!1},s=Qf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ry(r)),this._blurMaterial=ay(r,e,t),this._ggxMaterial=oy(r,e,t)}return s}_compileMaterial(e){let t=new Xt(new Rt,e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,i,s,r){let l=new $t(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(jf),d.toneMapping=Vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new Bi,new Bn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(jf),p=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let R=this._cubeSize;fr(s,M*R,b>2?R:0,R,R),d.setRenderTarget(s),p&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Gi||e.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ep());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;fr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Po)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-qi?i-g+qi:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,fr(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,Po),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,fr(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(a,Po)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_s-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):_s;m>_s&&we(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_s}`);let p=[],S=0;for(let P=0;P<_s;++P){let x=P/y,w=Math.exp(-x*x/2);p.push(w),P===0?S+=w:P<m&&(S+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-i;let M=this._sizeLods[s],R=3*M*(s>b-qi?s-b+qi:0),T=4*(this._cubeSize-M);fr(t,R,T,3*M,2*M),l.setRenderTarget(t),l.render(d,Po)}};function ry(n){let e=[],t=[],i=[],s=n,r=n-qi+1+Kf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-qi?l=Kf[o-n+qi-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,S=new Float32Array(y*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let T=0;T<f;T++){let P=T%3*2/3-1,x=T>2?0:-1,w=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];S.set(w,y*g*T),b.set(u,m*g*T);let L=[T,T,T,T,T,T];M.set(L,p*g*T)}let R=new Rt;R.setAttribute("position",new Bt(S,y)),R.setAttribute("uv",new Bt(b,m)),R.setAttribute("faceIndex",new Bt(M,p)),i.push(new Xt(R,null)),s>qi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Qf(n,e,t){let i=new pn(n,e,t);return i.texture.mapping=Mo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function oy(n,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ay(n,e,t){let i=new Float32Array(_s),s=new I(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ep(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function tp(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}var oc=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ro(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bi(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:ei});r.uniforms.tEquirect.value=t;let o=new Xt(s,r),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=zt),new fl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function ly(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ml||f===gl)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new oc(g.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===ml||f===gl,y=f===Gi||f===ms;if(g||y){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new rc(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||y&&S&&l(S)?(i===null&&(i=new rc(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===ml?u.mapping=Gi:f===gl&&(u.mapping=ms),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function cy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&$a("WebGLRenderer: "+i+" extension not supported."),s}}}function uy(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let b=0,M=S.length;b<M;b+=3){let R=S[b+0],T=S[b+1],P=S[b+2];u.push(R,T,T,P,P,R)}}else{let S=g.array;y=g.version;for(let b=0,M=S.length/3-1;b<M;b+=3){let R=b+0,T=b+1,P=b+2;u.push(R,T,T,P,P,R)}}let m=new(g.count>=65535?eo:Qr)(u,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function hy(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),t.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function dy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function fy(n,e,t){let i=new WeakMap,s=new vt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let w=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let M=a.attributes.position.count*b,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*R*4*d),P=new Kr(T,M,R,d);P.type=wn,P.needsUpdate=!0;let x=b*4;for(let L=0;L<d;L++){let C=m[L],U=p[L],G=S[L],W=M*R*4*L;for(let A=0;A<C.count;A++){let O=A*x;f===!0&&(s.fromBufferAttribute(C,A),T[W+O+0]=s.x,T[W+O+1]=s.y,T[W+O+2]=s.z,T[W+O+3]=0),g===!0&&(s.fromBufferAttribute(U,A),T[W+O+4]=s.x,T[W+O+5]=s.y,T[W+O+6]=s.z,T[W+O+7]=0),y===!0&&(s.fromBufferAttribute(G,A),T[W+O+8]=s.x,T[W+O+9]=s.y,T[W+O+10]=s.z,T[W+O+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new Ce(M,R)},i.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function py(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var my={[Du]:"LINEAR_TONE_MAPPING",[Uu]:"REINHARD_TONE_MAPPING",[Fu]:"CINEON_TONE_MAPPING",[Ou]:"ACES_FILMIC_TONE_MAPPING",[ku]:"AGX_TONE_MAPPING",[Vu]:"NEUTRAL_TONE_MAPPING",[Bu]:"CUSTOM_TONE_MAPPING"};function gy(n,e,t,i,s){let r=new pn(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new yi(e,t):void 0}),o=new pn(e,t,{type:ti,depthBuffer:!1,stencilBuffer:!1}),a=new Rt;a.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new at([0,2,0,0,2,0],2));let l=new el({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Xt(a,l),h=new ar(-1,1,1,-1,0,1),d=null,u=null,f=!1,g,y=null,m=[],p=!1;this.setSize=function(S,b){r.setSize(S,b),o.setSize(S,b);for(let M=0;M<m.length;M++){let R=m[M];R.setSize&&R.setSize(S,b)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;let b=r.width,M=r.height;for(let R=0;R<m.length;R++){let T=m[R];T.setSize&&T.setSize(b,M)}},this.begin=function(S,b){if(f||S.toneMapping===Vn&&m.length===0)return!1;if(y=b,b!==null){let M=b.width,R=b.height;(r.width!==M||r.height!==R)&&this.setSize(M,R)}return p===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=Vn,!0},this.hasRenderPass=function(){return p},this.end=function(S,b){S.toneMapping=g,f=!0;let M=r,R=o;for(let T=0;T<m.length;T++){let P=m[T];if(P.enabled!==!1&&(P.render(S,R,M,b),P.needsSwap!==!1)){let x=M;M=R,R=x}}if(d!==S.outputColorSpace||u!==S.toneMapping){d=S.outputColorSpace,u=S.toneMapping,l.defines={},Ye.getTransfer(d)===et&&(l.defines.SRGB_TRANSFER="");let T=my[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(y),S.render(c,h),y=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var Sp=new tn,ch=new yi(1,1),Mp=new Kr,bp=new Ya,Ep=new ro,np=[],ip=[],sp=new Float32Array(16),rp=new Float32Array(9),op=new Float32Array(4);function mr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=np[s];if(r===void 0&&(r=new Float32Array(s),np[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cc(n,e){let t=ip[e];t===void 0&&(t=new Int32Array(e),ip[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _y(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function vy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function yy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function Sy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;op.set(i),n.uniformMatrix2fv(this.addr,!1,op),Ut(t,i)}}function My(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;rp.set(i),n.uniformMatrix3fv(this.addr,!1,rp),Ut(t,i)}}function by(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;sp.set(i),n.uniformMatrix4fv(this.addr,!1,sp),Ut(t,i)}}function Ey(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function wy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function Ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Cy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ry(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Iy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Py(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Ly(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ch.compareFunction=t.isReversedDepthBuffer()?nc:tc,r=ch):r=Sp,t.setTexture2D(e||r,s)}function Ny(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||bp,s)}function Dy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ep,s)}function Uy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Mp,s)}function Fy(n){switch(n){case 5126:return _y;case 35664:return xy;case 35665:return vy;case 35666:return yy;case 35674:return Sy;case 35675:return My;case 35676:return by;case 5124:case 35670:return Ey;case 35667:case 35671:return Ty;case 35668:case 35672:return wy;case 35669:case 35673:return Ay;case 5125:return Cy;case 36294:return Ry;case 36295:return Iy;case 36296:return Py;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Uy}}function Oy(n,e){n.uniform1fv(this.addr,e)}function By(n,e){let t=mr(e,this.size,2);n.uniform2fv(this.addr,t)}function ky(n,e){let t=mr(e,this.size,3);n.uniform3fv(this.addr,t)}function Vy(n,e){let t=mr(e,this.size,4);n.uniform4fv(this.addr,t)}function zy(n,e){let t=mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Hy(n,e){let t=mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gy(n,e){let t=mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wy(n,e){n.uniform1iv(this.addr,e)}function $y(n,e){n.uniform2iv(this.addr,e)}function Xy(n,e){n.uniform3iv(this.addr,e)}function qy(n,e){n.uniform4iv(this.addr,e)}function Yy(n,e){n.uniform1uiv(this.addr,e)}function Zy(n,e){n.uniform2uiv(this.addr,e)}function Jy(n,e){n.uniform3uiv(this.addr,e)}function Ky(n,e){n.uniform4uiv(this.addr,e)}function jy(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=ch:o=Sp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Qy(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||bp,r[o])}function eS(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ep,r[o])}function tS(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Mp,r[o])}function nS(n){switch(n){case 5126:return Oy;case 35664:return By;case 35665:return ky;case 35666:return Vy;case 35674:return zy;case 35675:return Hy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return $y;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return Zy;case 36295:return Jy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return eS;case 36289:case 36303:case 36311:case 36292:return tS}}var uh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fy(t.type)}},hh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nS(t.type)}},dh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ah=/(\w+)(\])?(\[|\.)?/g;function ap(n,e){n.seq.push(e),n.map[e.id]=e}function iS(n,e,t){let i=n.name,s=i.length;for(ah.lastIndex=0;;){let r=ah.exec(i),o=ah.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ap(t,c===void 0?new uh(a,n,e):new hh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new dh(a),ap(t,d)),t=d}}}var pr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);iS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function lp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var sS=37297,rS=0;function oS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var cp=new Le;function aS(n){Ye._getMatrix(cp,Ye.workingColorSpace,n);let e=`mat3( ${cp.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Zr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function up(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+oS(n.getShaderSource(e),a)}else return r}function lS(n,e){let t=aS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var cS={[Du]:"Linear",[Uu]:"Reinhard",[Fu]:"Cineon",[Ou]:"ACESFilmic",[ku]:"AgX",[Vu]:"Neutral",[Bu]:"Custom"};function uS(n,e){let t=cS[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sc=new I;function hS(){Ye.getLuminanceCoefficients(sc);let n=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function fS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function No(n){return n!==""}function hp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var mS=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(n){return n.replace(mS,_S)}var gS=new Map;function _S(n,e){let t=Ve[e];if(t===void 0){let i=gS.get(e);if(i!==void 0)t=Ve[i],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fh(t)}var xS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fp(n){return n.replace(xS,vS)}function vS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var yS={[yo]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function SS(n){return yS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var MS={[Gi]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE_UV"};function bS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":MS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var ES={[ms]:"ENVMAP_MODE_REFRACTION"};function TS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ES[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wS={[Nu]:"ENVMAP_BLENDING_MULTIPLY",[Nf]:"ENVMAP_BLENDING_MIX",[Df]:"ENVMAP_BLENDING_ADD"};function AS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wS[n.combine]||"ENVMAP_BLENDING_NONE"}function CS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function RS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=SS(t),c=bS(t),h=TS(t),d=AS(t),u=CS(t),f=dS(t),g=fS(r),y=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(No).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(No).join(`
`),p.length>0&&(p+=`
`)):(m=[pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),p=[pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Vn?uS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,lS("linearToOutputTexel",t.outputColorSpace),hS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(No).join(`
`)),o=fh(o),o=hp(o,t),o=dp(o,t),a=fh(a),a=hp(a,t),a=dp(a,t),o=fp(o),a=fp(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=S+m+o,M=S+p+a,R=lp(s,s.VERTEX_SHADER,b),T=lp(s,s.FRAGMENT_SHADER,M);s.attachShader(y,R),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(C){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(R)||"",W=s.getShaderInfoLog(T)||"",A=U.trim(),O=G.trim(),k=W.trim(),J=!0,K=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,R,T);else{let ie=up(s,R,"vertex"),me=up(s,T,"fragment");Ae("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+A+`
`+ie+`
`+me)}else A!==""?we("WebGLProgram: Program Info Log:",A):(O===""||k==="")&&(K=!1);K&&(C.diagnostics={runnable:J,programLog:A,vertexShader:{log:O,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(R),s.deleteShader(T),x=new pr(s,y),w=pS(s,y)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(y,sS)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=T,this}var IS=0,ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new mh(e),t.set(e,i)),i}},mh=class{constructor(e){this.id=IS++,this.code=e,this.usedTimes=0}};function PS(n){return n===Xi||n===Co||n===Ro}function LS(n,e,t,i,s,r){let o=new tr,a=new ph,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,w,L,C,U,G){let W=C.fog,A=U.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||O,k),K=J&&J.mapping===Mo?J.image.height:null,ie=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&we("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let me=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,ye=me!==void 0?me.length:0,He=0;A.morphAttributes.position!==void 0&&(He=1),A.morphAttributes.normal!==void 0&&(He=2),A.morphAttributes.color!==void 0&&(He=3);let Ge,Fe,Z,fe;if(ie){let De=ii[ie];Ge=De.vertexShader,Fe=De.fragmentShader}else Ge=x.vertexShader,Fe=x.fragmentShader,a.update(x),Z=a.getVertexShaderID(x),fe=a.getFragmentShaderID(x);let re=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Ne=U.isInstancedMesh===!0,Ie=U.isBatchedMesh===!0,_t=!!x.map,Xe=!!x.matcap,it=!!J,mt=!!x.aoMap,$e=!!x.lightMap,Lt=!!x.bumpMap,xt=!!x.normalMap,cn=!!x.displacementMap,D=!!x.emissiveMap,Nt=!!x.metalnessMap,qe=!!x.roughnessMap,ft=x.anisotropy>0,ce=x.clearcoat>0,St=x.dispersion>0,E=x.iridescence>0,_=x.sheen>0,B=x.transmission>0,q=ft&&!!x.anisotropyMap,Q=ce&&!!x.clearcoatMap,ee=ce&&!!x.clearcoatNormalMap,le=ce&&!!x.clearcoatRoughnessMap,$=E&&!!x.iridescenceMap,Y=E&&!!x.iridescenceThicknessMap,pe=_&&!!x.sheenColorMap,xe=_&&!!x.sheenRoughnessMap,oe=!!x.specularMap,te=!!x.specularColorMap,Pe=!!x.specularIntensityMap,Oe=B&&!!x.transmissionMap,Ke=B&&!!x.thicknessMap,N=!!x.gradientMap,ne=!!x.alphaMap,X=x.alphaTest>0,ge=!!x.alphaHash,ae=!!x.extensions,j=Vn;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(j=n.toneMapping);let Me={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:Ge,fragmentShader:Fe,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ie,batchingColor:Ie&&U._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&U.instanceColor!==null,instancingMorph:Ne&&U.morphTexture!==null,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:_t,matcap:Xe,envMap:it,envMapMode:it&&J.mapping,envMapCubeUVHeight:K,aoMap:mt,lightMap:$e,bumpMap:Lt,normalMap:xt,displacementMap:cn,emissiveMap:D,normalMapObjectSpace:xt&&x.normalMapType===Of,normalMapTangentSpace:xt&&x.normalMapType===Yu,packedNormalMap:xt&&x.normalMapType===Yu&&PS(x.normalMap.format),metalnessMap:Nt,roughnessMap:qe,anisotropy:ft,anisotropyMap:q,clearcoat:ce,clearcoatMap:Q,clearcoatNormalMap:ee,clearcoatRoughnessMap:le,dispersion:St,iridescence:E,iridescenceMap:$,iridescenceThicknessMap:Y,sheen:_,sheenColorMap:pe,sheenRoughnessMap:xe,specularMap:oe,specularColorMap:te,specularIntensityMap:Pe,transmission:B,transmissionMap:Oe,thicknessMap:Ke,gradientMap:N,opaque:x.transparent===!1&&x.blending===ds&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:X,alphaHash:ge,combine:x.combine,mapUv:_t&&g(x.map.channel),aoMapUv:mt&&g(x.aoMap.channel),lightMapUv:$e&&g(x.lightMap.channel),bumpMapUv:Lt&&g(x.bumpMap.channel),normalMapUv:xt&&g(x.normalMap.channel),displacementMapUv:cn&&g(x.displacementMap.channel),emissiveMapUv:D&&g(x.emissiveMap.channel),metalnessMapUv:Nt&&g(x.metalnessMap.channel),roughnessMapUv:qe&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:Q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(x.sheenRoughnessMap.channel),specularMapUv:oe&&g(x.specularMap.channel),specularColorMapUv:te&&g(x.specularColorMap.channel),specularIntensityMapUv:Pe&&g(x.specularIntensityMap.channel),transmissionMapUv:Oe&&g(x.transmissionMap.channel),thicknessMapUv:Ke&&g(x.thicknessMap.channel),alphaMapUv:ne&&g(x.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(xt||ft),vertexNormals:!!A.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!A.attributes.uv&&(_t||ne),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||A.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Re,skinning:U.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:He,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:j,decodeVideoTexture:_t&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tn,flipSided:x.side===Kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(w,x),S(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function b(x){let w=f[x.type],L;if(w){let C=ii[w];L=Zf.clone(C.uniforms)}else L=x.uniforms;return L}function M(x,w){let L=h.get(w);return L!==void 0?++L.usedTimes:(L=new RS(n,w,x,s),c.push(L),h.set(w,L)),L}function R(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function P(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:P}}function NS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function DS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function mp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,y,m,p){let S=n[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},n[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=o(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function l(u,f,g,y,m,p){let S=a(u,f,g,y,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(u,f,g,y,m,p){let S=a(u,f,g,y,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,f){t.length>1&&t.sort(u||DS),i.length>1&&i.sort(f||mp),s.length>1&&s.sort(f||mp)}function d(){for(let u=e,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function US(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new gp,n.set(i,[o])):s>=r.length?(o=new gp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function FS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ke};break;case"SpotLight":t={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function OS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var BS=0;function kS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function VS(n){let e=new FS,t=OS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new ot,o=new ot;function a(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,b=0,M=0,R=0,T=0,P=0;c.sort(kS);for(let w=0,L=c.length;w<L;w++){let C=c[w],U=C.color,G=C.intensity,W=C.distance,A=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Xi?A=C.shadow.map.texture:A=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*G,d+=U.g*G,u+=U.b*G;else if(C.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(C.sh.coefficients[O],G);P++}else if(C.isDirectionalLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,J=t.get(C);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,i.directionalShadow[f]=J,i.directionalShadowMap[f]=A,i.directionalShadowMatrix[f]=C.shadow.matrix,S++}i.directional[f]=O,f++}else if(C.isSpotLight){let O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(U).multiplyScalar(G),O.distance=W,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,i.spot[y]=O;let k=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,k.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[y]=k.matrix,C.castShadow){let J=t.get(C);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,i.spotShadow[y]=J,i.spotShadowMap[y]=A,M++}y++}else if(C.isRectAreaLight){let O=e.get(C);O.color.copy(U).multiplyScalar(G),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=O,m++}else if(C.isPointLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let k=C.shadow,J=t.get(C);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,J.shadowCameraNear=k.camera.near,J.shadowCameraFar=k.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=A,i.pointShadowMatrix[g]=C.shadow.matrix,b++}i.point[g]=O,g++}else if(C.isHemisphereLight){let O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(G),O.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[p]=O,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==S||x.numPointShadows!==b||x.numSpotShadows!==M||x.numSpotMaps!==R||x.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,x.directionalLength=f,x.pointLength=g,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=S,x.numPointShadows=b,x.numSpotShadows=M,x.numSpotMaps=R,x.numLightProbes=P,i.version=BS++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let b=c[p];if(b.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(b.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let M=i.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let M=i.hemi[y];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function _p(n){let e=new VS(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function zS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new _p(n),e.set(s,[a])):r>=o.length?(a=new _p(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var HS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GS=`uniform sampler2D shadow_pass;
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
}`,WS=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],$S=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],xp=new ot,Lo=new I,lh=new I;function XS(n,e,t){let i=new ir,s=new Ce,r=new Ce,o=new vt,a=new tl,l=new nl,c={},h=t.maxTextureSize,d={[_i]:Kt,[Kt]:_i,[Tn]:Tn},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:HS,fragmentShader:GS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Xt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let p=this.type;this.render=function(T,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===pf&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yo);let w=n.getRenderTarget(),L=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ei),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=p!==this.type;G&&P.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(A=>A.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,A=T.length;W<A;W++){let O=T[W],k=O.shadow;if(k===void 0){we("WebGLShadowMap:",O,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let J=k.getFrameExtents();s.multiply(J),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,k.mapSize.y=r.y));let K=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=K,k.map===null||G===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===cr){if(O.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new pn(s.x,s.y,{format:Xi,type:ti,minFilter:zt,magFilter:zt,generateMipmaps:!1}),k.map.texture.name=O.name+".shadowMap",k.map.depthTexture=new yi(s.x,s.y,wn),k.map.depthTexture.name=O.name+".shadowMapDepth",k.map.depthTexture.format=Kn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=kt,k.map.depthTexture.magFilter=kt}else O.isPointLight?(k.map=new oc(s.x),k.map.depthTexture=new ja(s.x,zn)):(k.map=new pn(s.x,s.y),k.map.depthTexture=new yi(s.x,s.y,zn)),k.map.depthTexture.name=O.name+".shadowMap",k.map.depthTexture.format=Kn,this.type===yo?(k.map.depthTexture.compareFunction=K?nc:tc,k.map.depthTexture.minFilter=zt,k.map.depthTexture.magFilter=zt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=kt,k.map.depthTexture.magFilter=kt);k.camera.updateProjectionMatrix()}let ie=k.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ie;me++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,me),n.clear();else{me===0&&(n.setRenderTarget(k.map),n.clear());let ye=k.getViewport(me);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),U.viewport(o)}if(O.isPointLight){let ye=k.camera,He=k.matrix,Ge=O.distance||ye.far;Ge!==ye.far&&(ye.far=Ge,ye.updateProjectionMatrix()),Lo.setFromMatrixPosition(O.matrixWorld),ye.position.copy(Lo),lh.copy(ye.position),lh.add(WS[me]),ye.up.copy($S[me]),ye.lookAt(lh),ye.updateMatrixWorld(),He.makeTranslation(-Lo.x,-Lo.y,-Lo.z),xp.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),k._frustum.setFromProjectionMatrix(xp,ye.coordinateSystem,ye.reversedDepth)}else k.updateMatrices(O);i=k.getFrustum(),M(P,x,k.camera,O,this.type)}k.isPointLightShadow!==!0&&this.type===cr&&S(k,x),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,L,C)};function S(T,P){let x=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pn(s.x,s.y,{format:Xi,type:ti})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,x,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,x,f,y,null)}function b(T,P,x,w){let L=null,C=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)L=C;else if(L=x.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let U=L.uuid,G=P.uuid,W=c[U];W===void 0&&(W={},c[U]=W);let A=W[G];A===void 0&&(A=L.clone(),W[G]=A,P.addEventListener("dispose",R)),L=A}if(L.visible=P.visible,L.wireframe=P.wireframe,w===cr?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:d[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let U=n.properties.get(L);U.light=x}return L}function M(T,P,x,w,L){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===cr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let G=e.update(T),W=T.material;if(Array.isArray(W)){let A=G.groups;for(let O=0,k=A.length;O<k;O++){let J=A[O],K=W[J.materialIndex];if(K&&K.visible){let ie=b(T,K,w,L);T.onBeforeShadow(n,T,P,x,G,ie,J),n.renderBufferDirect(x,null,G,ie,T,J),T.onAfterShadow(n,T,P,x,G,ie,J)}}}else if(W.visible){let A=b(T,W,w,L);T.onBeforeShadow(n,T,P,x,G,A,null),n.renderBufferDirect(x,null,G,A,T,null),T.onAfterShadow(n,T,P,x,G,A,null)}}let U=T.children;for(let G=0,W=U.length;G<W;G++)M(U[G],P,x,w,L)}function R(T){T.target.removeEventListener("dispose",R);for(let x in c){let w=c[x],L=T.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function qS(n,e){function t(){let N=!1,ne=new vt,X=null,ge=new vt(0,0,0,0);return{setMask:function(ae){X!==ae&&!N&&(n.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){N=ae},setClear:function(ae,j,Me,De,Et){Et===!0&&(ae*=De,j*=De,Me*=De),ne.set(ae,j,Me,De),ge.equals(ne)===!1&&(n.clearColor(ae,j,Me,De),ge.copy(ne))},reset:function(){N=!1,X=null,ge.set(-1,0,0,0)}}}function i(){let N=!1,ne=!1,X=null,ge=null,ae=null;return{setReversed:function(j){if(ne!==j){let Me=e.get("EXT_clip_control");j?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ne=j;let De=ae;ae=null,this.setClear(De)}},getReversed:function(){return ne},setTest:function(j){j?re(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(j){X!==j&&!N&&(n.depthMask(j),X=j)},setFunc:function(j){if(ne&&(j=qf[j]),ge!==j){switch(j){case Ua:n.depthFunc(n.NEVER);break;case Fa:n.depthFunc(n.ALWAYS);break;case Oa:n.depthFunc(n.LESS);break;case fs:n.depthFunc(n.LEQUAL);break;case Ba:n.depthFunc(n.EQUAL);break;case ka:n.depthFunc(n.GEQUAL);break;case Va:n.depthFunc(n.GREATER);break;case za:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=j}},setLocked:function(j){N=j},setClear:function(j){ae!==j&&(ae=j,ne&&(j=1-j),n.clearDepth(j))},reset:function(){N=!1,X=null,ge=null,ae=null,ne=!1}}}function s(){let N=!1,ne=null,X=null,ge=null,ae=null,j=null,Me=null,De=null,Et=null;return{setTest:function(st){N||(st?re(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(st){ne!==st&&!N&&(n.stencilMask(st),ne=st)},setFunc:function(st,ui,Xn){(X!==st||ge!==ui||ae!==Xn)&&(n.stencilFunc(st,ui,Xn),X=st,ge=ui,ae=Xn)},setOp:function(st,ui,Xn){(j!==st||Me!==ui||De!==Xn)&&(n.stencilOp(st,ui,Xn),j=st,Me=ui,De=Xn)},setLocked:function(st){N=st},setClear:function(st){Et!==st&&(n.clearStencil(st),Et=st)},reset:function(){N=!1,ne=null,X=null,ge=null,ae=null,j=null,Me=null,De=null,Et=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,b=null,M=null,R=null,T=null,P=null,x=new ke(0,0,0),w=0,L=!1,C=null,U=null,G=null,W=null,A=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,J=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(K)[1]),k=J>=1):K.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),k=J>=2);let ie=null,me={},ye=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),Ge=new vt().fromArray(ye),Fe=new vt().fromArray(He);function Z(N,ne,X,ge){let ae=new Uint8Array(4),j=n.createTexture();n.bindTexture(N,j),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<X;Me++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ne+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return j}let fe={};fe[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(fs),Lt(!1),xt(Iu),re(n.CULL_FACE),mt(ei);function re(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Re(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Ne(N,ne){return u[N]!==ne?(n.bindFramebuffer(N,ne),u[N]=ne,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ne),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ie(N,ne){let X=g,ge=!1;if(N){X=f.get(ne),X===void 0&&(X=[],f.set(ne,X));let ae=N.textures;if(X.length!==ae.length||X[0]!==n.COLOR_ATTACHMENT0){for(let j=0,Me=ae.length;j<Me;j++)X[j]=n.COLOR_ATTACHMENT0+j;X.length=ae.length,ge=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,ge=!0);ge&&n.drawBuffers(X)}function _t(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let Xe={[Oi]:n.FUNC_ADD,[gf]:n.FUNC_SUBTRACT,[_f]:n.FUNC_REVERSE_SUBTRACT};Xe[xf]=n.MIN,Xe[vf]=n.MAX;let it={[yf]:n.ZERO,[Sf]:n.ONE,[Mf]:n.SRC_COLOR,[Na]:n.SRC_ALPHA,[Cf]:n.SRC_ALPHA_SATURATE,[wf]:n.DST_COLOR,[Ef]:n.DST_ALPHA,[bf]:n.ONE_MINUS_SRC_COLOR,[Da]:n.ONE_MINUS_SRC_ALPHA,[Af]:n.ONE_MINUS_DST_COLOR,[Tf]:n.ONE_MINUS_DST_ALPHA,[Rf]:n.CONSTANT_COLOR,[If]:n.ONE_MINUS_CONSTANT_COLOR,[Pf]:n.CONSTANT_ALPHA,[Lf]:n.ONE_MINUS_CONSTANT_ALPHA};function mt(N,ne,X,ge,ae,j,Me,De,Et,st){if(N===ei){m===!0&&(Re(n.BLEND),m=!1);return}if(m===!1&&(re(n.BLEND),m=!0),N!==mf){if(N!==p||st!==L){if((S!==Oi||R!==Oi)&&(n.blendEquation(n.FUNC_ADD),S=Oi,R=Oi),st)switch(N){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case So:n.blendFunc(n.ONE,n.ONE);break;case Pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ae("WebGLState: Invalid blending: ",N);break}else switch(N){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case So:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Pu:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lu:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",N);break}b=null,M=null,T=null,P=null,x.set(0,0,0),w=0,p=N,L=st}return}ae=ae||ne,j=j||X,Me=Me||ge,(ne!==S||ae!==R)&&(n.blendEquationSeparate(Xe[ne],Xe[ae]),S=ne,R=ae),(X!==b||ge!==M||j!==T||Me!==P)&&(n.blendFuncSeparate(it[X],it[ge],it[j],it[Me]),b=X,M=ge,T=j,P=Me),(De.equals(x)===!1||Et!==w)&&(n.blendColor(De.r,De.g,De.b,Et),x.copy(De),w=Et),p=N,L=!1}function $e(N,ne){N.side===Tn?Re(n.CULL_FACE):re(n.CULL_FACE);let X=N.side===Kt;ne&&(X=!X),Lt(X),N.blending===ds&&N.transparent===!1?mt(ei):mt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ge=N.stencilWrite;a.setTest(ge),ge&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),D(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(N){C!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),C=N)}function xt(N){N!==df?(re(n.CULL_FACE),N!==U&&(N===Iu?n.cullFace(n.BACK):N===ff?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),U=N}function cn(N){N!==G&&(k&&n.lineWidth(N),G=N)}function D(N,ne,X){N?(re(n.POLYGON_OFFSET_FILL),(W!==ne||A!==X)&&(W=ne,A=X,o.getReversed()&&(ne=-ne),n.polygonOffset(ne,X))):Re(n.POLYGON_OFFSET_FILL)}function Nt(N){N?re(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function qe(N){N===void 0&&(N=n.TEXTURE0+O-1),ie!==N&&(n.activeTexture(N),ie=N)}function ft(N,ne,X){X===void 0&&(ie===null?X=n.TEXTURE0+O-1:X=ie);let ge=me[X];ge===void 0&&(ge={type:void 0,texture:void 0},me[X]=ge),(ge.type!==N||ge.texture!==ne)&&(ie!==X&&(n.activeTexture(X),ie=X),n.bindTexture(N,ne||fe[N]),ge.type=N,ge.texture=ne)}function ce(){let N=me[ie];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function St(){try{n.compressedTexImage2D(...arguments)}catch(N){Ae("WebGLState:",N)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(N){Ae("WebGLState:",N)}}function _(){try{n.texSubImage2D(...arguments)}catch(N){Ae("WebGLState:",N)}}function B(){try{n.texSubImage3D(...arguments)}catch(N){Ae("WebGLState:",N)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ae("WebGLState:",N)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ae("WebGLState:",N)}}function ee(){try{n.texStorage2D(...arguments)}catch(N){Ae("WebGLState:",N)}}function le(){try{n.texStorage3D(...arguments)}catch(N){Ae("WebGLState:",N)}}function $(){try{n.texImage2D(...arguments)}catch(N){Ae("WebGLState:",N)}}function Y(){try{n.texImage3D(...arguments)}catch(N){Ae("WebGLState:",N)}}function pe(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function xe(N,ne){d[N]!==ne&&(n.pixelStorei(N,ne),d[N]=ne)}function oe(N){Ge.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ge.copy(N))}function te(N){Fe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Fe.copy(N))}function Pe(N,ne){let X=c.get(ne);X===void 0&&(X=new WeakMap,c.set(ne,X));let ge=X.get(N);ge===void 0&&(ge=n.getUniformBlockIndex(ne,N.name),X.set(N,ge))}function Oe(N,ne){let ge=c.get(ne).get(N);l.get(ne)!==ge&&(n.uniformBlockBinding(ne,ge,N.__bindingPointIndex),l.set(ne,ge))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},ie=null,me={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,b=null,M=null,R=null,T=null,P=null,x=new ke(0,0,0),w=0,L=!1,C=null,U=null,G=null,W=null,A=null,Ge.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Re,bindFramebuffer:Ne,drawBuffers:Ie,useProgram:_t,setBlending:mt,setMaterial:$e,setFlipSided:Lt,setCullFace:xt,setLineWidth:cn,setPolygonOffset:D,setScissorTest:Nt,activeTexture:qe,bindTexture:ft,unbindTexture:ce,compressedTexImage2D:St,compressedTexImage3D:E,texImage2D:$,texImage3D:Y,pixelStorei:xe,getParameter:pe,updateUBOMapping:Pe,uniformBlockBinding:Oe,texStorage2D:ee,texStorage3D:le,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:oe,viewport:te,reset:Ke}}function YS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,_){return g?new OffscreenCanvas(E,_):Jr("canvas")}function m(E,_,B){let q=1,Q=St(E);if((Q.width>B||Q.height>B)&&(q=B/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ee=Math.floor(q*Q.width),le=Math.floor(q*Q.height);u===void 0&&(u=y(ee,le));let $=_?y(ee,le):u;return $.width=ee,$.height=le,$.getContext("2d").drawImage(E,0,0,ee,le),we("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ee+"x"+le+")."),$}else return"data"in E&&we("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function p(E){return E.generateMipmaps}function S(E){n.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,_,B,q,Q,ee=!1){if(E!==null){if(n[E]!==void 0)return n[E];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le;q&&(le=e.get("EXT_texture_norm16"),le||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===n.RED&&(B===n.FLOAT&&($=n.R32F),B===n.HALF_FLOAT&&($=n.R16F),B===n.UNSIGNED_BYTE&&($=n.R8),B===n.UNSIGNED_SHORT&&le&&($=le.R16_EXT),B===n.SHORT&&le&&($=le.R16_SNORM_EXT)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.R8UI),B===n.UNSIGNED_SHORT&&($=n.R16UI),B===n.UNSIGNED_INT&&($=n.R32UI),B===n.BYTE&&($=n.R8I),B===n.SHORT&&($=n.R16I),B===n.INT&&($=n.R32I)),_===n.RG&&(B===n.FLOAT&&($=n.RG32F),B===n.HALF_FLOAT&&($=n.RG16F),B===n.UNSIGNED_BYTE&&($=n.RG8),B===n.UNSIGNED_SHORT&&le&&($=le.RG16_EXT),B===n.SHORT&&le&&($=le.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RG8UI),B===n.UNSIGNED_SHORT&&($=n.RG16UI),B===n.UNSIGNED_INT&&($=n.RG32UI),B===n.BYTE&&($=n.RG8I),B===n.SHORT&&($=n.RG16I),B===n.INT&&($=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGB8UI),B===n.UNSIGNED_SHORT&&($=n.RGB16UI),B===n.UNSIGNED_INT&&($=n.RGB32UI),B===n.BYTE&&($=n.RGB8I),B===n.SHORT&&($=n.RGB16I),B===n.INT&&($=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGBA8UI),B===n.UNSIGNED_SHORT&&($=n.RGBA16UI),B===n.UNSIGNED_INT&&($=n.RGBA32UI),B===n.BYTE&&($=n.RGBA8I),B===n.SHORT&&($=n.RGBA16I),B===n.INT&&($=n.RGBA32I)),_===n.RGB&&(B===n.UNSIGNED_SHORT&&le&&($=le.RGB16_EXT),B===n.SHORT&&le&&($=le.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),_===n.RGBA){let Y=ee?Zr:Ye.getTransfer(Q);B===n.FLOAT&&($=n.RGBA32F),B===n.HALF_FLOAT&&($=n.RGBA16F),B===n.UNSIGNED_BYTE&&($=Y===et?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&le&&($=le.RGBA16_EXT),B===n.SHORT&&le&&($=le.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function R(E,_){let B;return E?_===null||_===zn||_===hr?B=n.DEPTH24_STENCIL8:_===wn?B=n.DEPTH32F_STENCIL8:_===ur&&(B=n.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zn||_===hr?B=n.DEPTH_COMPONENT24:_===wn?B=n.DEPTH_COMPONENT32F:_===ur&&(B=n.DEPTH_COMPONENT16),B}function T(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==kt&&E.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function P(E){let _=E.target;_.removeEventListener("dispose",P),w(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(E){let _=E.target;_.removeEventListener("dispose",x),C(_)}function w(E){let _=i.get(E);if(_.__webglInit===void 0)return;let B=E.source,q=f.get(B);if(q){let Q=q[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(E),Object.keys(q).length===0&&f.delete(B)}i.remove(E)}function L(E){let _=i.get(E);n.deleteTexture(_.__webglTexture);let B=E.source,q=f.get(B);delete q[_.__cacheKey],o.memory.textures--}function C(E){let _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let Q=0;Q<_.__webglFramebuffer[q].length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[q][Q]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=E.textures;for(let q=0,Q=B.length;q<Q;q++){let ee=i.get(B[q]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(B[q])}i.remove(E)}let U=0;function G(){U=0}function W(){return U}function A(E){U=E}function O(){let E=U;return E>=s.maxTextures&&we("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function k(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function J(E,_){let B=i.get(E);if(E.isVideoTexture&&ft(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let q=E.image;if(q===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(B,E,_);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function K(E,_){let B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){Re(B,E,_);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function ie(E,_){let B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){Re(B,E,_);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function me(E,_){let B=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){Ne(B,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}let ye={[Ha]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[Ga]:n.MIRRORED_REPEAT},He={[kt]:n.NEAREST,[Uf]:n.NEAREST_MIPMAP_NEAREST,[bo]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[_l]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},Ge={[Bf]:n.NEVER,[Gf]:n.ALWAYS,[kf]:n.LESS,[tc]:n.LEQUAL,[Vf]:n.EQUAL,[nc]:n.GEQUAL,[zf]:n.GREATER,[Hf]:n.NOTEQUAL};function Fe(E,_){if(_.type===wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zt||_.magFilter===_l||_.magFilter===bo||_.magFilter===Wi||_.minFilter===zt||_.minFilter===_l||_.minFilter===bo||_.minFilter===Wi)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ye[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ye[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ye[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,He[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,He[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===kt||_.minFilter!==bo&&_.minFilter!==Wi||_.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Z(E,_){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",P));let q=_.source,Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));let ee=k(_);if(ee!==E.__cacheKey){Q[ee]===void 0&&(Q[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[ee].usedTimes++;let le=Q[E.__cacheKey];le!==void 0&&(Q[E.__cacheKey].usedTimes--,le.usedTimes===0&&L(_)),E.__cacheKey=ee,E.__webglTexture=Q[ee].texture}return B}function fe(E,_,B){return Math.floor(Math.floor(E/B)/_)}function re(E,_,B,q){let ee=E.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,B,q,_.data);else{ee.sort((xe,oe)=>xe.start-oe.start);let le=0;for(let xe=1;xe<ee.length;xe++){let oe=ee[le],te=ee[xe],Pe=oe.start+oe.count,Oe=fe(te.start,_.width,4),Ke=fe(oe.start,_.width,4);te.start<=Pe+1&&Oe===Ke&&fe(te.start+te.count-1,_.width,4)===Oe?oe.count=Math.max(oe.count,te.start+te.count-oe.start):(++le,ee[le]=te)}ee.length=le+1;let $=t.getParameter(n.UNPACK_ROW_LENGTH),Y=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let xe=0,oe=ee.length;xe<oe;xe++){let te=ee[xe],Pe=Math.floor(te.start/4),Oe=Math.ceil(te.count/4),Ke=Pe%_.width,N=Math.floor(Pe/_.width),ne=Oe,X=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Ke,N,ne,X,B,q,_.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function Re(E,_,B){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);let Q=Z(E,_),ee=_.source;t.bindTexture(q,E.__webglTexture,n.TEXTURE0+B);let le=i.get(ee);if(ee.version!==le.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let X=Ye.getPrimaries(Ye.workingColorSpace),ge=_.colorSpace===Si?null:Ye.getPrimaries(_.colorSpace),ae=_.colorSpace===Si||X===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Y=m(_.image,!1,s.maxTextureSize);Y=ce(_,Y);let pe=r.convert(_.format,_.colorSpace),xe=r.convert(_.type),oe=M(_.internalFormat,pe,xe,_.normalized,_.colorSpace,_.isVideoTexture);Fe(q,_);let te,Pe=_.mipmaps,Oe=_.isVideoTexture!==!0,Ke=le.__version===void 0||Q===!0,N=ee.dataReady,ne=T(_,Y);if(_.isDepthTexture)oe=R(_.format===$i,_.type),Ke&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,oe,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,oe,Y.width,Y.height,0,pe,xe,null));else if(_.isDataTexture)if(Pe.length>0){Oe&&Ke&&t.texStorage2D(n.TEXTURE_2D,ne,oe,Pe[0].width,Pe[0].height);for(let X=0,ge=Pe.length;X<ge;X++)te=Pe[X],Oe?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,te.width,te.height,pe,xe,te.data):t.texImage2D(n.TEXTURE_2D,X,oe,te.width,te.height,0,pe,xe,te.data);_.generateMipmaps=!1}else Oe?(Ke&&t.texStorage2D(n.TEXTURE_2D,ne,oe,Y.width,Y.height),N&&re(_,Y,pe,xe)):t.texImage2D(n.TEXTURE_2D,0,oe,Y.width,Y.height,0,pe,xe,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Oe&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,oe,Pe[0].width,Pe[0].height,Y.depth);for(let X=0,ge=Pe.length;X<ge;X++)if(te=Pe[X],_.format!==An)if(pe!==null)if(Oe){if(N)if(_.layerUpdates.size>0){let ae=nh(te.width,te.height,_.format,_.type);for(let j of _.layerUpdates){let Me=te.data.subarray(j*ae/te.data.BYTES_PER_ELEMENT,(j+1)*ae/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,j,te.width,te.height,1,pe,Me)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,Y.depth,pe,te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,oe,te.width,te.height,Y.depth,0,te.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,Y.depth,pe,xe,te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,oe,te.width,te.height,Y.depth,0,pe,xe,te.data)}else{Oe&&Ke&&t.texStorage2D(n.TEXTURE_2D,ne,oe,Pe[0].width,Pe[0].height);for(let X=0,ge=Pe.length;X<ge;X++)te=Pe[X],_.format!==An?pe!==null?Oe?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,te.width,te.height,pe,te.data):t.compressedTexImage2D(n.TEXTURE_2D,X,oe,te.width,te.height,0,te.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,te.width,te.height,pe,xe,te.data):t.texImage2D(n.TEXTURE_2D,X,oe,te.width,te.height,0,pe,xe,te.data)}else if(_.isDataArrayTexture)if(Oe){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,oe,Y.width,Y.height,Y.depth),N)if(_.layerUpdates.size>0){let X=nh(Y.width,Y.height,_.format,_.type);for(let ge of _.layerUpdates){let ae=Y.data.subarray(ge*X/Y.data.BYTES_PER_ELEMENT,(ge+1)*X/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,Y.width,Y.height,1,pe,xe,ae)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,pe,xe,Y.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,oe,Y.width,Y.height,Y.depth,0,pe,xe,Y.data);else if(_.isData3DTexture)Oe?(Ke&&t.texStorage3D(n.TEXTURE_3D,ne,oe,Y.width,Y.height,Y.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,pe,xe,Y.data)):t.texImage3D(n.TEXTURE_3D,0,oe,Y.width,Y.height,Y.depth,0,pe,xe,Y.data);else if(_.isFramebufferTexture){if(Ke)if(Oe)t.texStorage2D(n.TEXTURE_2D,ne,oe,Y.width,Y.height);else{let X=Y.width,ge=Y.height;for(let ae=0;ae<ne;ae++)t.texImage2D(n.TEXTURE_2D,ae,oe,X,ge,0,pe,xe,null),X>>=1,ge>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let X=n.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),Y.parentNode!==X){X.appendChild(Y),d.add(_),X.onpaint=De=>{let Et=De.changedElements;for(let st of d)Et.includes(st.image)&&(st.needsUpdate=!0)},X.requestPaint();return}let ge=0,ae=n.RGBA,j=n.RGBA,Me=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,ge,ae,j,Me,Y),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Oe&&Ke){let X=St(Pe[0]);t.texStorage2D(n.TEXTURE_2D,ne,oe,X.width,X.height)}for(let X=0,ge=Pe.length;X<ge;X++)te=Pe[X],Oe?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,pe,xe,te):t.texImage2D(n.TEXTURE_2D,X,oe,pe,xe,te);_.generateMipmaps=!1}else if(Oe){if(Ke){let X=St(Y);t.texStorage2D(n.TEXTURE_2D,ne,oe,X.width,X.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,xe,Y)}else t.texImage2D(n.TEXTURE_2D,0,oe,pe,xe,Y);p(_)&&S(q),le.__version=ee.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Ne(E,_,B){if(_.image.length!==6)return;let q=Z(E,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);let ee=i.get(Q);if(Q.version!==ee.__version||q===!0){t.activeTexture(n.TEXTURE0+B);let le=Ye.getPrimaries(Ye.workingColorSpace),$=_.colorSpace===Si?null:Ye.getPrimaries(_.colorSpace),Y=_.colorSpace===Si||le===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let pe=_.isCompressedTexture||_.image[0].isCompressedTexture,xe=_.image[0]&&_.image[0].isDataTexture,oe=[];for(let j=0;j<6;j++)!pe&&!xe?oe[j]=m(_.image[j],!0,s.maxCubemapSize):oe[j]=xe?_.image[j].image:_.image[j],oe[j]=ce(_,oe[j]);let te=oe[0],Pe=r.convert(_.format,_.colorSpace),Oe=r.convert(_.type),Ke=M(_.internalFormat,Pe,Oe,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,ne=ee.__version===void 0||q===!0,X=Q.dataReady,ge=T(_,te);Fe(n.TEXTURE_CUBE_MAP,_);let ae;if(pe){N&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ke,te.width,te.height);for(let j=0;j<6;j++){ae=oe[j].mipmaps;for(let Me=0;Me<ae.length;Me++){let De=ae[Me];_.format!==An?Pe!==null?N?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,0,0,De.width,De.height,Pe,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,Ke,De.width,De.height,0,De.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,0,0,De.width,De.height,Pe,Oe,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,Ke,De.width,De.height,0,Pe,Oe,De.data)}}}else{if(ae=_.mipmaps,N&&ne){ae.length>0&&ge++;let j=St(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ke,j.width,j.height)}for(let j=0;j<6;j++)if(xe){N?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,oe[j].width,oe[j].height,Pe,Oe,oe[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ke,oe[j].width,oe[j].height,0,Pe,Oe,oe[j].data);for(let Me=0;Me<ae.length;Me++){let Et=ae[Me].image[j].image;N?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,0,0,Et.width,Et.height,Pe,Oe,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,Ke,Et.width,Et.height,0,Pe,Oe,Et.data)}}else{N?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pe,Oe,oe[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ke,Pe,Oe,oe[j]);for(let Me=0;Me<ae.length;Me++){let De=ae[Me];N?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,0,0,Pe,Oe,De.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,Ke,Pe,Oe,De.image[j])}}}p(_)&&S(n.TEXTURE_CUBE_MAP),ee.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Ie(E,_,B,q,Q,ee){let le=r.convert(B.format,B.colorSpace),$=r.convert(B.type),Y=M(B.internalFormat,le,$,B.normalized,B.colorSpace),pe=i.get(_),xe=i.get(B);if(xe.__renderTarget=_,!pe.__hasExternalTextures){let oe=Math.max(1,_.width>>ee),te=Math.max(1,_.height>>ee);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ee,Y,oe,te,_.depth,0,le,$,null):t.texImage2D(Q,ee,Y,oe,te,0,le,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),qe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Q,xe.__webglTexture,0,Nt(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Q,xe.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(E,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){let q=_.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ee=R(_.stencilBuffer,Q),le=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;qe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(_),ee,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(_),ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ee,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,E)}else{let q=_.textures;for(let Q=0;Q<q.length;Q++){let ee=q[Q],le=r.convert(ee.format,ee.colorSpace),$=r.convert(ee.type),Y=M(ee.internalFormat,le,$,ee.normalized,ee.colorSpace);qe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(_),Y,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(E,_,B){let q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,_.depthTexture);let pe=r.convert(_.depthTexture.format),xe=r.convert(_.depthTexture.type),oe;_.depthTexture.format===Kn?oe=n.DEPTH_COMPONENT24:_.depthTexture.format===$i&&(oe=n.DEPTH24_STENCIL8);for(let te=0;te<6;te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,oe,_.width,_.height,0,pe,xe,null)}}else J(_.depthTexture,0);let ee=Q.__webglTexture,le=Nt(_),$=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Y=_.depthTexture.format===$i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Kn)qe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,$,ee,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,Y,$,ee,0);else if(_.depthTexture.format===$i)qe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,$,ee,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,Y,$,ee,0);else throw new Error("Unknown depthTexture format")}function it(E){let _=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let q=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=q}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)Xe(_.__webglFramebuffer[q],E,q);else{let q=E.texture.mipmaps;q&&q.length>0?Xe(_.__webglFramebuffer[0],E,0):Xe(_.__webglFramebuffer,E,0)}else if(B){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),_t(_.__webglDepthbuffer[q],E,!1);else{let Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ee)}}else{let q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),_t(_.__webglDepthbuffer,E,!1);else{let Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(E,_,B){let q=i.get(E);_!==void 0&&Ie(q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&it(E)}function $e(E){let _=E.texture,B=i.get(E),q=i.get(_);E.addEventListener("dispose",x);let Q=E.textures,ee=E.isWebGLCubeRenderTarget===!0,le=Q.length>1;if(le||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,o.memory.textures++),ee){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let Y=0;Y<_.mipmaps.length;Y++)B.__webglFramebuffer[$][Y]=n.createFramebuffer()}else B.__webglFramebuffer[$]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)B.__webglFramebuffer[$]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(le)for(let $=0,Y=Q.length;$<Y;$++){let pe=i.get(Q[$]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&qe(E)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<Q.length;$++){let Y=Q[$];B.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let pe=r.convert(Y.format,Y.colorSpace),xe=r.convert(Y.type),oe=M(Y.internalFormat,pe,xe,Y.normalized,Y.colorSpace,E.isXRRenderTarget===!0),te=Nt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,oe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,B.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Ie(B.__webglFramebuffer[$][Y],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Y);else Ie(B.__webglFramebuffer[$],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(_)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let $=0,Y=Q.length;$<Y;$++){let pe=Q[$],xe=i.get(pe),oe=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,xe.__webglTexture),Fe(oe,pe),Ie(B.__webglFramebuffer,E,pe,n.COLOR_ATTACHMENT0+$,oe,0),p(pe)&&S(oe)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,q.__webglTexture),Fe($,_),_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Ie(B.__webglFramebuffer[Y],E,_,n.COLOR_ATTACHMENT0,$,Y);else Ie(B.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,$,0);p(_)&&S($),t.unbindTexture()}E.depthBuffer&&it(E)}function Lt(E){let _=E.textures;for(let B=0,q=_.length;B<q;B++){let Q=_[B];if(p(Q)){let ee=b(E),le=i.get(Q).__webglTexture;t.bindTexture(ee,le),S(ee),t.unbindTexture()}}}let xt=[],cn=[];function D(E){if(E.samples>0){if(qe(E)===!1){let _=E.textures,B=E.width,q=E.height,Q=n.COLOR_BUFFER_BIT,ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(E),$=_.length>1;if($)for(let pe=0;pe<_.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let Y=E.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let pe=0;pe<_.length;pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[pe]);let xe=i.get(_[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,B,q,0,0,B,q,Q,n.NEAREST),l===!0&&(xt.length=0,cn.length=0,xt.push(n.COLOR_ATTACHMENT0+pe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(xt.push(ee),cn.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,cn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let pe=0;pe<_.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,le.__webglColorRenderbuffer[pe]);let xe=i.get(_[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Nt(E){return Math.min(s.maxSamples,E.samples)}function qe(E){let _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ft(E){let _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function ce(E,_){let B=E.colorSpace,q=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Yr&&B!==Si&&(Ye.getTransfer(B)===et?(q!==An||Q!==sn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",B)),_}function St(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.getTextureUnits=W,this.setTextureUnits=A,this.setTexture2D=J,this.setTexture2DArray=K,this.setTexture3D=ie,this.setTextureCube=me,this.rebindTextures=mt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ZS(n,e){function t(i,s=Si){let r,o=Ye.getTransfer(s);if(i===sn)return n.UNSIGNED_BYTE;if(i===vl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$u)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hu)return n.BYTE;if(i===Gu)return n.SHORT;if(i===ur)return n.UNSIGNED_SHORT;if(i===xl)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===ti)return n.HALF_FLOAT;if(i===Xu)return n.ALPHA;if(i===qu)return n.RGB;if(i===An)return n.RGBA;if(i===Kn)return n.DEPTH_COMPONENT;if(i===$i)return n.DEPTH_STENCIL;if(i===Sl)return n.RED;if(i===Ml)return n.RED_INTEGER;if(i===Xi)return n.RG;if(i===bl)return n.RG_INTEGER;if(i===El)return n.RGBA_INTEGER;if(i===Eo||i===To||i===wo||i===Ao)if(o===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tl||i===wl||i===Al||i===Cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rl||i===Il||i===Pl||i===Ll||i===Nl||i===Co||i===Dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rl||i===Il)return o===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pl)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ll)return r.COMPRESSED_R11_EAC;if(i===Nl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Co)return r.COMPRESSED_RG11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ul||i===Fl||i===Ol||i===Bl||i===kl||i===Vl||i===zl||i===Hl||i===Gl||i===Wl||i===$l||i===Xl||i===ql||i===Yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ul)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ol)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bl)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kl)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vl)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zl)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hl)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wl)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$l)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xl)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ql)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yl)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zl||i===Jl||i===Kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Zl)return o===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jl||i===Ql||i===Ro||i===ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var JS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KS=`
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

}`,gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new oo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new mn({vertexShader:JS,fragmentShader:KS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new co(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_h=class extends On{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new gh,p={},S=t.getContextAttributes(),b=null,M=null,R=[],T=[],P=new Ce,x=null,w=new $t;w.viewport=new vt;let L=new $t;L.viewport=new vt;let C=[w,L],U=new pl,G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=R[Z];return fe===void 0&&(fe=new nr,R[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=R[Z];return fe===void 0&&(fe=new nr,R[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=R[Z];return fe===void 0&&(fe=new nr,R[Z]=fe),fe.getHandSpace()};function A(Z){let fe=T.indexOf(Z.inputSource);if(fe===-1)return;let re=R[fe];re!==void 0&&(re.update(Z.inputSource,Z.frame,c||o),re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",k);for(let Z=0;Z<R.length;Z++){let fe=T[Z];fe!==null&&(T[Z]=null,R[Z].disconnect(fe))}G=null,W=null,m.reset();for(let Z in p)delete p[Z];e.setRenderTarget(b),f=null,u=null,d=null,s=null,M=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",O),s.addEventListener("inputsourceschange",k),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Re=null,Ne=null;S.depth&&(Ne=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=S.stencil?$i:Kn,Re=S.stencil?hr:zn);let Ie={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ie),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new pn(u.textureWidth,u.textureHeight,{format:An,type:sn,depthTexture:new yi(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let re={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new pn(f.framebufferWidth,f.framebufferHeight,{format:An,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Fe.setContext(s),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Z){for(let fe=0;fe<Z.removed.length;fe++){let re=Z.removed[fe],Re=T.indexOf(re);Re>=0&&(T[Re]=null,R[Re].disconnect(re))}for(let fe=0;fe<Z.added.length;fe++){let re=Z.added[fe],Re=T.indexOf(re);if(Re===-1){for(let Ie=0;Ie<R.length;Ie++)if(Ie>=T.length){T.push(re),Re=Ie;break}else if(T[Ie]===null){T[Ie]=re,Re=Ie;break}if(Re===-1)break}let Ne=R[Re];Ne&&Ne.connect(re)}}let J=new I,K=new I;function ie(Z,fe,re){J.setFromMatrixPosition(fe.matrixWorld),K.setFromMatrixPosition(re.matrixWorld);let Re=J.distanceTo(K),Ne=fe.projectionMatrix.elements,Ie=re.projectionMatrix.elements,_t=Ne[14]/(Ne[10]-1),Xe=Ne[14]/(Ne[10]+1),it=(Ne[9]+1)/Ne[5],mt=(Ne[9]-1)/Ne[5],$e=(Ne[8]-1)/Ne[0],Lt=(Ie[8]+1)/Ie[0],xt=_t*$e,cn=_t*Lt,D=Re/(-$e+Lt),Nt=D*-$e;if(fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Nt),Z.translateZ(D),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ne[10]===-1)Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let qe=_t+D,ft=Xe+D,ce=xt-Nt,St=cn+(Re-Nt),E=it*Xe/ft*qe,_=mt*Xe/ft*qe;Z.projectionMatrix.makePerspective(ce,St,E,_,qe,ft),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function me(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let fe=Z.near,re=Z.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(re=m.depthFar)),U.near=L.near=w.near=fe,U.far=L.far=w.far=re,(G!==U.near||W!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),G=U.near,W=U.far),U.layers.mask=Z.layers.mask|6,w.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let Re=Z.parent,Ne=U.cameras;me(U,Re);for(let Ie=0;Ie<Ne.length;Ie++)me(Ne[Ie],Re);Ne.length===2?ie(U,w,L):U.projectionMatrix.copy(w.projectionMatrix),ye(Z,U,Re)};function ye(Z,fe,re){re===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Z){return p[Z]};let He=null;function Ge(Z,fe){if(h=fe.getViewerPose(c||o),g=fe,h!==null){let re=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Re=!1;re.length!==U.cameras.length&&(U.cameras.length=0,Re=!0);for(let Xe=0;Xe<re.length;Xe++){let it=re[Xe],mt=null;if(f!==null)mt=f.getViewport(it);else{let Lt=d.getViewSubImage(u,it);mt=Lt.viewport,Xe===0&&(e.setRenderTargetTextures(M,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(M))}let $e=C[Xe];$e===void 0&&($e=new $t,$e.layers.enable(Xe),$e.viewport=new vt,C[Xe]=$e),$e.matrix.fromArray(it.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(it.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(mt.x,mt.y,mt.width,mt.height),Xe===0&&(U.matrix.copy($e.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Re===!0&&U.cameras.push($e)}let Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Xe=d.getDepthInformation(re[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,s.renderState)}if(Ne&&Ne.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Xe=0;Xe<re.length;Xe++){let it=re[Xe].camera;if(it){let mt=p[it];mt||(mt=new oo,p[it]=mt);let $e=d.getCameraImage(it);mt.sourceTexture=$e}}}}for(let re=0;re<R.length;re++){let Re=T[re],Ne=R[re];Re!==null&&Ne!==void 0&&Ne.update(Re,fe,c||o)}He&&He(Z,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}let Fe=new vp;Fe.setAnimationLoop(Ge),this.setAnimationLoop=function(Z){He=Z},this.dispose=function(){}}},jS=new ot,Tp=new Le;Tp.set(-1,0,0,0,1,0,0,0,1);function QS(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,b,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),b=S.envMap,M=S.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(jS.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Tp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){let M=b.program;i.uniformBlockBinding(S,M)}function c(S,b){let M=s[S.id];M===void 0&&(g(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",m));let R=b.program;i.updateUBOMapping(S,R);let T=e.render.frame;r[S.id]!==T&&(u(S),r[S.id]=T)}function h(S){let b=d();S.__bindingPointIndex=b;let M=n.createBuffer(),R=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let b=s[S.id],M=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,P=M.length;T<P;T++){let x=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,L=x.length;w<L;w++){let C=x[w];if(f(C,T,w,R)===!0){let U=C.__offset,G=Array.isArray(C.value)?C.value:[C.value],W=0;for(let A=0;A<G.length;A++){let O=G[A],k=y(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,U+W,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):ArrayBuffer.isView(O)?C.__data.set(new O.constructor(O.buffer,O.byteOffset,C.__data.length)):(O.toArray(C.__data,W),W+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,b,M,R){let T=S.value,P=b+"_"+M;if(R[P]===void 0)return typeof T=="number"||typeof T=="boolean"?R[P]=T:ArrayBuffer.isView(T)?R[P]=T.slice():R[P]=T.clone(),!0;{let x=R[P];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return R[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function g(S){let b=S.uniforms,M=0,R=16;for(let P=0,x=b.length;P<x;P++){let w=Array.isArray(b[P])?b[P]:[b[P]];for(let L=0,C=w.length;L<C;L++){let U=w[L],G=Array.isArray(U.value)?U.value:[U.value];for(let W=0,A=G.length;W<A;W++){let O=G[W],k=y(O),J=M%R,K=J%k.boundary,ie=J+K;M+=K,ie!==0&&R-ie<k.storage&&(M+=R-ie),U.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=k.storage}}}let T=M%R;return T>0&&(M+=R-T),S.__size=M,S.__cache={},this}function y(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):we("WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){let b=S.target;b.removeEventListener("dispose",m);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var tM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function nM(){return ni===null&&(ni=new to(tM,16,16,Xi,ti),ni.name="DFG_LUT",ni.minFilter=zt,ni.magFilter=zt,ni.wrapS=Zn,ni.wrapT=Zn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var ac=class{constructor(e={}){let{canvas:t=Wf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=sn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=f,m=new Set([El,bl,Ml]),p=new Set([sn,zn,ur,hr,vl,yl]),S=new Uint32Array(4),b=new Int32Array(4),M=new I,R=null,T=null,P=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,C=!1,U=null;this._outputColorSpace=Jt;let G=0,W=0,A=null,O=-1,k=null,J=new vt,K=new vt,ie=null,me=new ke(0),ye=0,He=t.width,Ge=t.height,Fe=1,Z=null,fe=null,re=new vt(0,0,He,Ge),Re=new vt(0,0,He,Ge),Ne=!1,Ie=new ir,_t=!1,Xe=!1,it=new ot,mt=new I,$e=new vt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function cn(){return A===null?Fe:1}let D=i;function Nt(v,F){return t.getContext(v,F)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",De,!1),D===null){let F="webgl2";if(D=Nt(F,v),D===null)throw Nt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw Ae("WebGLRenderer: "+v.message),v}let qe,ft,ce,St,E,_,B,q,Q,ee,le,$,Y,pe,xe,oe,te,Pe,Oe,Ke,N,ne,X;function ge(){qe=new cy(D),qe.init(),N=new ZS(D,qe),ft=new ty(D,qe,e,N),ce=new qS(D,qe),ft.reversedDepthBuffer&&u&&ce.buffers.depth.setReversed(!0),St=new dy(D),E=new NS,_=new YS(D,qe,ce,E,ft,N,St),B=new ly(L),q=new g0(D),ne=new Qv(D,q),Q=new uy(D,q,St,ne),ee=new py(D,Q,q,ne,St),Pe=new fy(D,ft,_),xe=new ny(E),le=new LS(L,B,qe,ft,ne,xe),$=new QS(L,E),Y=new US,pe=new zS(qe),te=new jv(L,B,ce,ee,g,l),oe=new XS(L,ee,ft),X=new eM(D,St,ft,ce),Oe=new ey(D,qe,St),Ke=new hy(D,qe,St),St.programs=le.programs,L.capabilities=ft,L.extensions=qe,L.properties=E,L.renderLists=Y,L.shadowMap=oe,L.state=ce,L.info=St}ge(),y!==sn&&(w=new gy(y,t.width,t.height,s,r));let ae=new _h(L,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=qe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=qe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(v){v!==void 0&&(Fe=v,this.setSize(He,Ge,!1))},this.getSize=function(v){return v.set(He,Ge)},this.setSize=function(v,F,H=!0){if(ae.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}He=v,Ge=F,t.width=Math.floor(v*Fe),t.height=Math.floor(F*Fe),H===!0&&(t.style.width=v+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(He*Fe,Ge*Fe).floor()},this.setDrawingBufferSize=function(v,F,H){He=v,Ge=F,Fe=H,t.width=Math.floor(v*H),t.height=Math.floor(F*H),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(y===sn){Ae("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){we("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(J)},this.getViewport=function(v){return v.copy(re)},this.setViewport=function(v,F,H,V){v.isVector4?re.set(v.x,v.y,v.z,v.w):re.set(v,F,H,V),ce.viewport(J.copy(re).multiplyScalar(Fe).round())},this.getScissor=function(v){return v.copy(Re)},this.setScissor=function(v,F,H,V){v.isVector4?Re.set(v.x,v.y,v.z,v.w):Re.set(v,F,H,V),ce.scissor(K.copy(Re).multiplyScalar(Fe).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(v){ce.setScissorTest(Ne=v)},this.setOpaqueSort=function(v){Z=v},this.setTransparentSort=function(v){fe=v},this.getClearColor=function(v){return v.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,H=!0){let V=0;if(v){let z=!1;if(A!==null){let de=A.texture.format;z=m.has(de)}if(z){let de=A.texture.type,ve=p.has(de),he=te.getClearColor(),Se=te.getClearAlpha(),be=he.r,Ue=he.g,ze=he.b;ve?(S[0]=be,S[1]=Ue,S[2]=ze,S[3]=Se,D.clearBufferuiv(D.COLOR,0,S)):(b[0]=be,b[1]=Ue,b[2]=ze,b[3]=Se,D.clearBufferiv(D.COLOR,0,b))}else V|=D.COLOR_BUFFER_BIT}F&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",De,!1),te.dispose(),Y.dispose(),pe.dispose(),E.dispose(),B.dispose(),ee.dispose(),ne.dispose(),X.dispose(),le.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",wd),ae.removeEventListener("sessionend",Ad),os.stop()};function j(v){v.preventDefault(),Ku("WebGLRenderer: Context Lost."),C=!0}function Me(){Ku("WebGLRenderer: Context Restored."),C=!1;let v=St.autoReset,F=oe.enabled,H=oe.autoUpdate,V=oe.needsUpdate,z=oe.type;ge(),St.autoReset=v,oe.enabled=F,oe.autoUpdate=H,oe.needsUpdate=V,oe.type=z}function De(v){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Et(v){let F=v.target;F.removeEventListener("dispose",Et),st(F)}function st(v){ui(v),E.remove(v)}function ui(v){let F=E.get(v).programs;F!==void 0&&(F.forEach(function(H){le.releaseProgram(H)}),v.isShaderMaterial&&le.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,H,V,z,de){F===null&&(F=Lt);let ve=z.isMesh&&z.matrixWorld.determinant()<0,he=p_(v,F,H,V,z);ce.setMaterial(V,ve);let Se=H.index,be=1;if(V.wireframe===!0){if(Se=Q.getWireframeAttribute(H),Se===void 0)return;be=2}let Ue=H.drawRange,ze=H.attributes.position,Te=Ue.start*be,rt=(Ue.start+Ue.count)*be;de!==null&&(Te=Math.max(Te,de.start*be),rt=Math.min(rt,(de.start+de.count)*be)),Se!==null?(Te=Math.max(Te,0),rt=Math.min(rt,Se.count)):ze!=null&&(Te=Math.max(Te,0),rt=Math.min(rt,ze.count));let Tt=rt-Te;if(Tt<0||Tt===1/0)return;ne.setup(z,V,he,H,Se);let Mt,ut=Oe;if(Se!==null&&(Mt=q.get(Se),ut=Ke,ut.setIndex(Mt)),z.isMesh)V.wireframe===!0?(ce.setLineWidth(V.wireframeLinewidth*cn()),ut.setMode(D.LINES)):ut.setMode(D.TRIANGLES);else if(z.isLine){let Ht=V.linewidth;Ht===void 0&&(Ht=1),ce.setLineWidth(Ht*cn()),z.isLineSegments?ut.setMode(D.LINES):z.isLineLoop?ut.setMode(D.LINE_LOOP):ut.setMode(D.LINE_STRIP)}else z.isPoints?ut.setMode(D.POINTS):z.isSprite&&ut.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ht=z._multiDrawStarts,_e=z._multiDrawCounts,un=z._multiDrawCount,Je=Se?q.get(Se).bytesPerElement:1,Mn=E.get(V).currentProgram.getUniforms();for(let qn=0;qn<un;qn++)Mn.setValue(D,"_gl_DrawID",qn),ut.render(Ht[qn]/Je,_e[qn])}else if(z.isInstancedMesh)ut.renderInstances(Te,Tt,z.count);else if(H.isInstancedBufferGeometry){let Ht=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_e=Math.min(H.instanceCount,Ht);ut.renderInstances(Te,Tt,_e)}else ut.render(Te,Tt)};function Xn(v,F,H){v.transparent===!0&&v.side===Tn&&v.forceSinglePass===!1?(v.side=Kt,v.needsUpdate=!0,oa(v,F,H),v.side=_i,v.needsUpdate=!0,oa(v,F,H),v.side=Tn):oa(v,F,H)}this.compile=function(v,F,H=null){H===null&&(H=v),T=pe.get(H),T.init(F),x.push(T),H.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),v!==H&&v.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();let V=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let de=z.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){let he=de[ve];Xn(he,H,z),V.add(he)}else Xn(de,H,z),V.add(de)}),T=x.pop(),V},this.compileAsync=function(v,F,H=null){let V=this.compile(v,F,H);return new Promise(z=>{function de(){if(V.forEach(function(ve){E.get(ve).currentProgram.isReady()&&V.delete(ve)}),V.size===0){z(v);return}setTimeout(de,10)}qe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let qc=null;function d_(v){qc&&qc(v)}function wd(){os.stop()}function Ad(){os.start()}let os=new vp;os.setAnimationLoop(d_),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(v){qc=v,ae.setAnimationLoop(v),v===null?os.stop():os.start()},ae.addEventListener("sessionstart",wd),ae.addEventListener("sessionend",Ad),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(v,F);let H=ae.enabled===!0&&ae.isPresenting===!0,V=w!==null&&(A===null||H)&&w.begin(L,A);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,F,A),T=pe.get(v,x.length),T.init(F),T.state.textureUnits=_.getTextureUnits(),x.push(T),it.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ie.setFromProjectionMatrix(it,Fn,F.reversedDepth),Xe=this.localClippingEnabled,_t=xe.init(this.clippingPlanes,Xe),R=Y.get(v,P.length),R.init(),P.push(R),ae.enabled===!0&&ae.isPresenting===!0){let ve=L.xr.getDepthSensingMesh();ve!==null&&Yc(ve,F,-1/0,L.sortObjects)}Yc(v,F,0,L.sortObjects),R.finish(),L.sortObjects===!0&&R.sort(Z,fe),xt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,xt&&te.addToRenderList(R,v),this.info.render.frame++,_t===!0&&xe.beginShadows();let z=T.state.shadowsArray;if(oe.render(z,v,F),_t===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&w.hasRenderPass())===!1){let ve=R.opaque,he=R.transmissive;if(T.setupLights(),F.isArrayCamera){let Se=F.cameras;if(he.length>0)for(let be=0,Ue=Se.length;be<Ue;be++){let ze=Se[be];Rd(ve,he,v,ze)}xt&&te.render(v);for(let be=0,Ue=Se.length;be<Ue;be++){let ze=Se[be];Cd(R,v,ze,ze.viewport)}}else he.length>0&&Rd(ve,he,v,F),xt&&te.render(v),Cd(R,v,F)}A!==null&&W===0&&(_.updateMultisampleRenderTarget(A),_.updateRenderTargetMipmap(A)),V&&w.end(L),v.isScene===!0&&v.onAfterRender(L,v,F),ne.resetDefaultState(),O=-1,k=null,x.pop(),x.length>0?(T=x[x.length-1],_.setTextureUnits(T.state.textureUnits),_t===!0&&xe.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?R=P[P.length-1]:R=null,U!==null&&U.renderEnd()};function Yc(v,F,H,V){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Ie.intersectsSprite(v)){V&&$e.setFromMatrixPosition(v.matrixWorld).applyMatrix4(it);let ve=ee.update(v),he=v.material;he.visible&&R.push(v,ve,he,H,$e.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Ie.intersectsObject(v))){let ve=ee.update(v),he=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),$e.copy(v.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),$e.copy(ve.boundingSphere.center)),$e.applyMatrix4(v.matrixWorld).applyMatrix4(it)),Array.isArray(he)){let Se=ve.groups;for(let be=0,Ue=Se.length;be<Ue;be++){let ze=Se[be],Te=he[ze.materialIndex];Te&&Te.visible&&R.push(v,ve,Te,H,$e.z,ze)}}else he.visible&&R.push(v,ve,he,H,$e.z,null)}}let de=v.children;for(let ve=0,he=de.length;ve<he;ve++)Yc(de[ve],F,H,V)}function Cd(v,F,H,V){let{opaque:z,transmissive:de,transparent:ve}=v;T.setupLightsView(H),_t===!0&&xe.setGlobalState(L.clippingPlanes,H),V&&ce.viewport(J.copy(V)),z.length>0&&ra(z,F,H),de.length>0&&ra(de,F,H),ve.length>0&&ra(ve,F,H),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Rd(v,F,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Te=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new pn(1,1,{generateMipmaps:!0,type:Te?ti:sn,minFilter:Wi,samples:Math.max(4,ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let de=T.state.transmissionRenderTarget[V.id],ve=V.viewport||J;de.setSize(ve.z*L.transmissionResolutionScale,ve.w*L.transmissionResolutionScale);let he=L.getRenderTarget(),Se=L.getActiveCubeFace(),be=L.getActiveMipmapLevel();L.setRenderTarget(de),L.getClearColor(me),ye=L.getClearAlpha(),ye<1&&L.setClearColor(16777215,.5),L.clear(),xt&&te.render(H);let Ue=L.toneMapping;L.toneMapping=Vn;let ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),_t===!0&&xe.setGlobalState(L.clippingPlanes,V),ra(v,H,V),_.updateMultisampleRenderTarget(de),_.updateRenderTargetMipmap(de),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let rt=0,Tt=F.length;rt<Tt;rt++){let Mt=F[rt],{object:ut,geometry:Ht,material:_e,group:un}=Mt;if(_e.side===Tn&&ut.layers.test(V.layers)){let Je=_e.side;_e.side=Kt,_e.needsUpdate=!0,Id(ut,H,V,Ht,_e,un),_e.side=Je,_e.needsUpdate=!0,Te=!0}}Te===!0&&(_.updateMultisampleRenderTarget(de),_.updateRenderTargetMipmap(de))}L.setRenderTarget(he,Se,be),L.setClearColor(me,ye),ze!==void 0&&(V.viewport=ze),L.toneMapping=Ue}function ra(v,F,H){let V=F.isScene===!0?F.overrideMaterial:null;for(let z=0,de=v.length;z<de;z++){let ve=v[z],{object:he,geometry:Se,group:be}=ve,Ue=ve.material;Ue.allowOverride===!0&&V!==null&&(Ue=V),he.layers.test(H.layers)&&Id(he,F,H,Se,Ue,be)}}function Id(v,F,H,V,z,de){v.onBeforeRender(L,F,H,V,z,de),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(L,F,H,V,v,de),z.transparent===!0&&z.side===Tn&&z.forceSinglePass===!1?(z.side=Kt,z.needsUpdate=!0,L.renderBufferDirect(H,F,V,z,v,de),z.side=_i,z.needsUpdate=!0,L.renderBufferDirect(H,F,V,z,v,de),z.side=Tn):L.renderBufferDirect(H,F,V,z,v,de),v.onAfterRender(L,F,H,V,z,de)}function oa(v,F,H){F.isScene!==!0&&(F=Lt);let V=E.get(v),z=T.state.lights,de=T.state.shadowsArray,ve=z.state.version,he=le.getParameters(v,z.state,de,F,H,T.state.lightProbeGridArray),Se=le.getProgramCacheKey(he),be=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let Ue=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;V.envMap=B.get(v.envMap||V.environment,Ue),V.envMapRotation=V.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",Et),be=new Map,V.programs=be);let ze=be.get(Se);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===ve)return Ld(v,he),ze}else he.uniforms=le.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,H,he),v.onBeforeCompile(he,L),ze=le.acquireProgram(he,Se),be.set(Se,ze),V.uniforms=he.uniforms;let Te=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Te.clippingPlanes=xe.uniform),Ld(v,he),V.needsLights=g_(v),V.lightsStateVersion=ve,V.needsLights&&(Te.ambientLightColor.value=z.state.ambient,Te.lightProbe.value=z.state.probe,Te.directionalLights.value=z.state.directional,Te.directionalLightShadows.value=z.state.directionalShadow,Te.spotLights.value=z.state.spot,Te.spotLightShadows.value=z.state.spotShadow,Te.rectAreaLights.value=z.state.rectArea,Te.ltc_1.value=z.state.rectAreaLTC1,Te.ltc_2.value=z.state.rectAreaLTC2,Te.pointLights.value=z.state.point,Te.pointLightShadows.value=z.state.pointShadow,Te.hemisphereLights.value=z.state.hemi,Te.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Te.spotLightMatrix.value=z.state.spotLightMatrix,Te.spotLightMap.value=z.state.spotLightMap,Te.pointShadowMatrix.value=z.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=ze,V.uniformsList=null,ze}function Pd(v){if(v.uniformsList===null){let F=v.currentProgram.getUniforms();v.uniformsList=pr.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function Ld(v,F){let H=E.get(v);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function f_(v,F){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let H=0,V=v.length;H<V;H++){let z=v[H];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function p_(v,F,H,V,z){F.isScene!==!0&&(F=Lt),_.resetTextureUnits();let de=F.fog,ve=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,he=A===null?L.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ye.workingColorSpace,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,be=B.get(V.envMap||ve,Se),Ue=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!H.morphAttributes.position,rt=!!H.morphAttributes.normal,Tt=!!H.morphAttributes.color,Mt=Vn;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=L.toneMapping);let ut=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ht=ut!==void 0?ut.length:0,_e=E.get(V),un=T.state.lights;if(_t===!0&&(Xe===!0||v!==k)){let pt=v===k&&V.id===O;xe.setState(V,v,pt)}let Je=!1;V.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==un.state.version||_e.outputColorSpace!==he||z.isBatchedMesh&&_e.batching===!1||!z.isBatchedMesh&&_e.batching===!0||z.isBatchedMesh&&_e.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&_e.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&_e.instancing===!1||!z.isInstancedMesh&&_e.instancing===!0||z.isSkinnedMesh&&_e.skinning===!1||!z.isSkinnedMesh&&_e.skinning===!0||z.isInstancedMesh&&_e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&_e.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&_e.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&_e.instancingMorph===!1&&z.morphTexture!==null||_e.envMap!==be||V.fog===!0&&_e.fog!==de||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==xe.numPlanes||_e.numIntersection!==xe.numIntersection)||_e.vertexAlphas!==Ue||_e.vertexTangents!==ze||_e.morphTargets!==Te||_e.morphNormals!==rt||_e.morphColors!==Tt||_e.toneMapping!==Mt||_e.morphTargetsCount!==Ht||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,_e.__version=V.version);let Mn=_e.currentProgram;Je===!0&&(Mn=oa(V,F,z),U&&V.isNodeMaterial&&U.onUpdateProgram(V,Mn,_e));let qn=!1,Ai=!1,Ds=!1,ht=Mn.getUniforms(),wt=_e.uniforms;if(ce.useProgram(Mn.program)&&(qn=!0,Ai=!0,Ds=!0),V.id!==O&&(O=V.id,Ai=!0),_e.needsLights){let pt=f_(T.state.lightProbeGridArray,z);_e.lightProbeGrid!==pt&&(_e.lightProbeGrid=pt,Ai=!0)}if(qn||k!==v){ce.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",v.projectionMatrix),ht.setValue(D,"viewMatrix",v.matrixWorldInverse);let Ri=ht.map.cameraPosition;Ri!==void 0&&Ri.setValue(D,mt.setFromMatrixPosition(v.matrixWorld)),ft.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),k!==v&&(k=v,Ai=!0,Ds=!0)}if(_e.needsLights&&(un.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",un.state.directionalShadowMap,_),un.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",un.state.spotShadowMap,_),un.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",un.state.pointShadowMap,_)),z.isSkinnedMesh){ht.setOptional(D,z,"bindMatrix"),ht.setOptional(D,z,"bindMatrixInverse");let pt=z.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ht.setValue(D,"boneTexture",pt.boneTexture,_))}z.isBatchedMesh&&(ht.setOptional(D,z,"batchingTexture"),ht.setValue(D,"batchingTexture",z._matricesTexture,_),ht.setOptional(D,z,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",z._indirectTexture,_),ht.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",z._colorsTexture,_));let Ci=H.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&Pe.update(z,H,Mn),(Ai||_e.receiveShadow!==z.receiveShadow)&&(_e.receiveShadow=z.receiveShadow,ht.setValue(D,"receiveShadow",z.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(wt.envMapIntensity.value=F.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=nM()),Ai){if(ht.setValue(D,"toneMappingExposure",L.toneMappingExposure),_e.needsLights&&m_(wt,Ds),de&&V.fog===!0&&$.refreshFogUniforms(wt,de),$.refreshMaterialUniforms(wt,V,Fe,Ge,T.state.transmissionRenderTarget[v.id]),_e.needsLights&&_e.lightProbeGrid){let pt=_e.lightProbeGrid;wt.probesSH.value=pt.texture,wt.probesMin.value.copy(pt.boundingBox.min),wt.probesMax.value.copy(pt.boundingBox.max),wt.probesResolution.value.copy(pt.resolution)}pr.upload(D,Pd(_e),wt,_)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(pr.upload(D,Pd(_e),wt,_),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(D,"center",z.center),ht.setValue(D,"modelViewMatrix",z.modelViewMatrix),ht.setValue(D,"normalMatrix",z.normalMatrix),ht.setValue(D,"modelMatrix",z.matrixWorld),V.uniformsGroups!==void 0){let pt=V.uniformsGroups;for(let Ri=0,Us=pt.length;Ri<Us;Ri++){let Nd=pt[Ri];X.update(Nd,Mn),X.bind(Nd,Mn)}}return Mn}function m_(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function g_(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(v,F,H){let V=E.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),E.get(v.texture).__webglTexture=F,E.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){let H=E.get(v);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};let __=D.createFramebuffer();this.setRenderTarget=function(v,F=0,H=0){A=v,G=F,W=H;let V=null,z=!1,de=!1;if(v){let he=E.get(v);if(he.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),J.copy(v.viewport),K.copy(v.scissor),ie=v.scissorTest,ce.viewport(J),ce.scissor(K),ce.setScissorTest(ie),O=-1;return}else if(he.__webglFramebuffer===void 0)_.setupRenderTarget(v);else if(he.__hasExternalTextures)_.rebindTextures(v,E.get(v.texture).__webglTexture,E.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ue=v.depthTexture;if(he.__boundDepthTexture!==Ue){if(Ue!==null&&E.has(Ue)&&(v.width!==Ue.image.width||v.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(v)}}let Se=v.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(de=!0);let be=E.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(be[F])?V=be[F][H]:V=be[F],z=!0):v.samples>0&&_.useMultisampledRTT(v)===!1?V=E.get(v).__webglMultisampledFramebuffer:Array.isArray(be)?V=be[H]:V=be,J.copy(v.viewport),K.copy(v.scissor),ie=v.scissorTest}else J.copy(re).multiplyScalar(Fe).floor(),K.copy(Re).multiplyScalar(Fe).floor(),ie=Ne;if(H!==0&&(V=__),ce.bindFramebuffer(D.FRAMEBUFFER,V)&&ce.drawBuffers(v,V),ce.viewport(J),ce.scissor(K),ce.setScissorTest(ie),z){let he=E.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,he.__webglTexture,H)}else if(de){let he=F;for(let Se=0;Se<v.textures.length;Se++){let be=E.get(v.textures[Se]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Se,be.__webglTexture,H,he)}}else if(v!==null&&H!==0){let he=E.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,H)}O=-1},this.readRenderTargetPixels=function(v,F,H,V,z,de,ve,he=0){if(!(v&&v.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=E.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){ce.bindFramebuffer(D.FRAMEBUFFER,Se);try{let be=v.textures[he],Ue=be.format,ze=be.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!ft.textureFormatReadable(Ue)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(ze)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-V&&H>=0&&H<=v.height-z&&D.readPixels(F,H,V,z,N.convert(Ue),N.convert(ze),de)}finally{let be=A!==null?E.get(A).__webglFramebuffer:null;ce.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,F,H,V,z,de,ve,he=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=E.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se)if(F>=0&&F<=v.width-V&&H>=0&&H<=v.height-z){ce.bindFramebuffer(D.FRAMEBUFFER,Se);let be=v.textures[he],Ue=be.format,ze=be.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!ft.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(F,H,V,z,N.convert(Ue),N.convert(ze),0);let rt=A!==null?E.get(A).__webglFramebuffer:null;ce.bindFramebuffer(D.FRAMEBUFFER,rt);let Tt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Xf(D,Tt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(Te),D.deleteSync(Tt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,H=0){let V=Math.pow(2,-H),z=Math.floor(v.image.width*V),de=Math.floor(v.image.height*V),ve=F!==null?F.x:0,he=F!==null?F.y:0;_.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,ve,he,z,de),ce.unbindTexture()};let x_=D.createFramebuffer(),v_=D.createFramebuffer();this.copyTextureToTexture=function(v,F,H=null,V=null,z=0,de=0){let ve,he,Se,be,Ue,ze,Te,rt,Tt,Mt=v.isCompressedTexture?v.mipmaps[de]:v.image;if(H!==null)ve=H.max.x-H.min.x,he=H.max.y-H.min.y,Se=H.isBox3?H.max.z-H.min.z:1,be=H.min.x,Ue=H.min.y,ze=H.isBox3?H.min.z:0;else{let wt=Math.pow(2,-z);ve=Math.floor(Mt.width*wt),he=Math.floor(Mt.height*wt),v.isDataArrayTexture?Se=Mt.depth:v.isData3DTexture?Se=Math.floor(Mt.depth*wt):Se=1,be=0,Ue=0,ze=0}V!==null?(Te=V.x,rt=V.y,Tt=V.z):(Te=0,rt=0,Tt=0);let ut=N.convert(F.format),Ht=N.convert(F.type),_e;F.isData3DTexture?(_.setTexture3D(F,0),_e=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(_.setTexture2DArray(F,0),_e=D.TEXTURE_2D_ARRAY):(_.setTexture2D(F,0),_e=D.TEXTURE_2D),ce.activeTexture(D.TEXTURE0),ce.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),ce.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ce.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let un=ce.getParameter(D.UNPACK_ROW_LENGTH),Je=ce.getParameter(D.UNPACK_IMAGE_HEIGHT),Mn=ce.getParameter(D.UNPACK_SKIP_PIXELS),qn=ce.getParameter(D.UNPACK_SKIP_ROWS),Ai=ce.getParameter(D.UNPACK_SKIP_IMAGES);ce.pixelStorei(D.UNPACK_ROW_LENGTH,Mt.width),ce.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mt.height),ce.pixelStorei(D.UNPACK_SKIP_PIXELS,be),ce.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),ce.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);let Ds=v.isDataArrayTexture||v.isData3DTexture,ht=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){let wt=E.get(v),Ci=E.get(F),pt=E.get(wt.__renderTarget),Ri=E.get(Ci.__renderTarget);ce.bindFramebuffer(D.READ_FRAMEBUFFER,pt.__webglFramebuffer),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Us=0;Us<Se;Us++)Ds&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(v).__webglTexture,z,ze+Us),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(F).__webglTexture,de,Tt+Us)),D.blitFramebuffer(be,Ue,ve,he,Te,rt,ve,he,D.DEPTH_BUFFER_BIT,D.NEAREST);ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||E.has(v)){let wt=E.get(v),Ci=E.get(F);ce.bindFramebuffer(D.READ_FRAMEBUFFER,x_),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,v_);for(let pt=0;pt<Se;pt++)Ds?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.__webglTexture,z,ze+pt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wt.__webglTexture,z),ht?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ci.__webglTexture,de,Tt+pt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ci.__webglTexture,de),z!==0?D.blitFramebuffer(be,Ue,ve,he,Te,rt,ve,he,D.COLOR_BUFFER_BIT,D.NEAREST):ht?D.copyTexSubImage3D(_e,de,Te,rt,Tt+pt,be,Ue,ve,he):D.copyTexSubImage2D(_e,de,Te,rt,be,Ue,ve,he);ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ht?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(_e,de,Te,rt,Tt,ve,he,Se,ut,Ht,Mt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,de,Te,rt,Tt,ve,he,Se,ut,Mt.data):D.texSubImage3D(_e,de,Te,rt,Tt,ve,he,Se,ut,Ht,Mt):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,Te,rt,ve,he,ut,Ht,Mt.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,Te,rt,Mt.width,Mt.height,ut,Mt.data):D.texSubImage2D(D.TEXTURE_2D,de,Te,rt,ve,he,ut,Ht,Mt);ce.pixelStorei(D.UNPACK_ROW_LENGTH,un),ce.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Je),ce.pixelStorei(D.UNPACK_SKIP_PIXELS,Mn),ce.pixelStorei(D.UNPACK_SKIP_ROWS,qn),ce.pixelStorei(D.UNPACK_SKIP_IMAGES,Ai),de===0&&F.generateMipmaps&&D.generateMipmap(_e),ce.unbindTexture()},this.initRenderTarget=function(v){E.get(v).__webglFramebuffer===void 0&&_.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?_.setTextureCube(v,0):v.isData3DTexture?_.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?_.setTexture2DArray(v,0):_.setTexture2D(v,0),ce.unbindTexture()},this.resetState=function(){G=0,W=0,A=null,ce.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var wp={type:"change"},vh={type:"start"},Cp={type:"end"},uc=new vi,Ap=new En,sM=Math.cos(70*Io.DEG2RAD),Ft=new I,rn=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xh=1e-6,hc=class extends vo{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kn.ROTATE,MIDDLE:kn.DOLLY,RIGHT:kn.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new fn,this._lastTargetPosition=new I,this._quat=new fn().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lr,this._sphericalDelta=new lr,this._scale=1,this._panOffset=new I,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new I,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oM.bind(this),this._onPointerDown=rM.bind(this),this._onPointerUp=aM.bind(this),this._onContextMenu=pM.bind(this),this._onMouseWheel=uM.bind(this),this._onKeyDown=hM.bind(this),this._onTouchStart=dM.bind(this),this._onTouchMove=fM.bind(this),this._onMouseDown=lM.bind(this),this._onMouseMove=cM.bind(this),this._interceptControlDown=mM.bind(this),this._interceptControlUp=gM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wp),this.update(),this.state=lt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ft.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(uc.origin.copy(this.object.position),uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uc.direction))<sM?this.object.lookAt(this.target):(Ap.setFromNormalAndCoplanarPoint(this.object.up,this.target),uc.intersectPlane(Ap,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xh||this._lastTargetPosition.distanceToSquared(this.target)>xh?(this.dispatchEvent(wp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function rM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function oM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function aM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cp),this.state=lt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function lM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case kn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=lt.DOLLY;break;case kn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}break;case kn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(vh)}function cM(n){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function uM(n){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(n.preventDefault(),this.dispatchEvent(vh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Cp))}function hM(n){this.enabled!==!1&&this._handleKeyDown(n)}function dM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=lt.TOUCH_ROTATE;break;case Hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=lt.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(vh)}function fM(n){switch(this._trackPointer(n),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=lt.NONE}}function pM(n){this.enabled!==!1&&n.preventDefault()}function mM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yh(n){let e=new Date(n);return Number.isNaN(e.valueOf())?"":e.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Rp(n){return n>=1e3?`${(n/1e3).toFixed(2)}s`:`${n}ms`}function Ip(n){return n<1e3?`${n} ms`:`${(n/1e3).toFixed(1)} s`}function _n(n){let e=n.delta>0?"+":"";return`${n.left} -> ${n.right} (${e}${n.delta})`}function gr(n){return n==null?"n/a":`${n.toFixed(0)}%`}function Mi(n){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function dc(n,e=0){return e>0?`${n} JSONL records + ${fc(e)} pending`:`${n} JSONL records`}function fc(n){return n>=1024*1024?`${(n/(1024*1024)).toFixed(1)} MB`:n>=1024?`${Math.ceil(n/1024)} KB`:`${n} B`}var _M=/([?&])((?:access_)?token|api[_-]?key|secret|password|passwd|auth|session|cookie)=([^&#\s]+)/gi,xM=/\b((?:access_)?token|api[_-]?key|secret|password|passwd|cookie|authorization)\s*([:=])\s*("[^"]*"|'[^']*'|[^\s|;,]+)/gi,vM=/\bBearer\s+[A-Za-z0-9._~+/=-]{6,}/gi,yM=/data:image\/[a-z0-9.+-]+;base64,[A-Za-z0-9+/=]+/gi,SM=/\b[A-Za-z0-9+/]{32,}={0,2}\b/g,MM=/\b[A-Z0-9_]*(?:SECRET|PASSWORD|TOKEN|PRIVATE|COOKIE|DO_NOT_COPY)[A-Z0-9_]*\b/g,bM=/[A-Za-z]:[\\/]+Users[\\/]+[^\s|"'<>]+/g,EM=/\/(?:home|Users)\/[^\s|"'<>]+/g;function Yi(n,e=240){let t=Up(n);if(!t)return"";let i=t.replace(yM,"[REDACTED_IMAGE_PAYLOAD]").replace(_M,(s,r,o)=>`${r}${o}=[REDACTED]`).replace(vM,"Bearer [REDACTED]").replace(xM,(s,r,o)=>`${r}${o===":"?": ":"="}[REDACTED]`).replace(bM,Pp).replace(EM,Pp).replace(SM,"[REDACTED_BASE64]").replace(MM,"[REDACTED_PRIVATE_TEXT]");return TM(i,e)}function Lp(n){let e=[Hn(n.role),Hn(n.eventType),n.toolName?`tool: ${Hn(n.toolName)}`:"",n.filePath?`path: ${Yi(n.filePath,96)}`:"",n.status?`status: ${Hn(n.status)}`:""].filter(Boolean),t=Up(n.rawSummary);if(t){let i=Yi(t,Number.POSITIVE_INFINITY);e.push(t===i?"detail: omitted for safe sharing":"detail: redacted for safe sharing")}return e.length?e.join("; "):"event summary unavailable"}function Np(n){return["Perlustron copy-safe reference",n.source?`source: ${Hn(n.source)}`:null,n.lineNumber!==null&&n.lineNumber!==void 0?`line: ${n.lineNumber}`:null,n.eventIndex!==null&&n.eventIndex!==void 0?`event_index: ${n.eventIndex}`:null,n.kind?`kind: ${Hn(n.kind)}`:null,n.summary?`summary: ${Yi(n.summary,220)}`:null,`perlustron: parser ${Hn(n.parserVersion||"unknown")} / schema ${Hn(n.schemaVersion||"unknown")}`,"caveat: copy-safe reference only; review raw logs separately before sharing raw content"].filter(e=>!!e).join(`
`)}function Dp(n){let e=n.rawLogsSafeToShare?"marked safe by current scan; still review before forwarding":"requires human review before sharing";return["Perlustron copy-safe share summary",n.source?`source: ${Hn(n.source)}`:null,n.sessionName?`session: ${Yi(n.sessionName,140)}`:null,`activity: ${Do(n.totalTurns)} turns / ${Do(n.callCount)} tool calls / ${Do(n.fileChangeCount)} file changes`,n.latestEventIndex!==null&&n.latestEventIndex!==void 0?`latest_event_index: ${n.latestEventIndex}`:null,n.cliContext?`cli: ${Yi(n.cliContext,120)}`:null,`perlustron: parser ${Hn(n.parserVersion||"unknown")} / schema ${Hn(n.schemaVersion||"unknown")}`,`raw_logs: ${e}`,`raw_caution: ${Yi(n.rawLogCaution||"Raw logs can contain prompts, paths, tool output, images, and credentials.",180)}`,"safe_surfaces: sanitized graph/export/copy-safe references are safer than raw logs, but still require human judgment before external sharing",`sanitized_graph: ${Yi(n.sanitizedGraphNote||"Use sanitized graph/export surfaces for review-friendly sharing.",180)}`,`redactions: ${Do(n.redactedFieldCount)} fields; images: ${Do(n.imageCount)}; api_token_required: ${n.apiTokenRequired?"yes (value not copied)":"no"}`].filter(t=>!!t).join(`
`)}function Up(n){return String(n??"").replace(/\s+/g," ").trim()}function TM(n,e){return e===Number.POSITIVE_INFINITY||n.length<=e?n:e<=1?"\u2026":`${n.slice(0,e-1).replace(/\s+$/,"")}\u2026`}function Hn(n){return Yi(n,120)}function Do(n){return n==null?"unknown":n.toLocaleString()}function Pp(n){let e=n.replace(/\\/g,"/").split("/").filter(Boolean);return`[PATH:${e.length?e[e.length-1]:"path"}]`}var Fp=["green","blue","violet","amber"],wM=["add","update","delete","move"],AM=72,Cm=["summary","map","timeline","transcript"],CM=[...Cm,"health","insights","diff","raw","export","settings"],RM=new Set(CM),IM=new Set(Cm);function yc(n){return Array.isArray(n)?n[0]:n.fromId}function Sc(n){return Array.isArray(n)?n[1]:n.toId}function PM(n){return Array.isArray(n)?1:n.waypoints.length+1}function Sh(n){return n.reduce((e,t)=>e+PM(t),0)}function LM(n,e){if(!e||yc(n)!==yc(e)||Sc(n)!==Sc(e))return!1;let t=Array.isArray(n)?[]:n.waypoints,i=Array.isArray(e)?[]:e.waypoints;return t.length===i.length}function se(n,e=document){let t=e.querySelector(n);if(!t)throw new Error(`Missing required element: ${n}`);return t}function wi(n){return document.querySelectorAll(n)}function Lr(n){return n instanceof Error?n.message:String(n)}function xs(n,e){return n??e}function Xh(){return{compactionInProgress:!1,pendingPrompt:null,assistantStreaming:!1,latestAssistantEventIndex:null,latestAssistantPreview:null,latestTokenSample:null,activeToolCalls:[],completedToolCalls:[]}}function Pt(){if(!Ee)throw new Error("Session graph has not loaded yet");return Ee}function NM(n){return n.type==="call"?n.source.completedAt||n.source.startedAt||"Live context":n.source.timestamp||"Live context"}function DM(n){return n.type==="prompt"?n.source.images:[]}var dt=se("#space"),Rm=se("#session-title"),Im=se("#session-meta"),UM=se("#root-list"),FM=se("#metadata-list"),Op=se("#prompt-list"),qh=se("#stream-kind"),Yh=se("#stream-title"),Ah=se("#stream-data"),Mh=se("#stream-images"),OM=se("#stream-close"),Bo=se("#stream-minimize"),Xo=se("#stream-copy-ref"),Pm=se("#stream-open-timeline"),Lm=se("#stream-open-transcript"),Nm=se("#stream-open-raw"),BM=se("#prev-event"),kM=se("#next-event"),Dm=se("#stage-turn-count"),Zh=se("#stage-started"),Bp=se("#context-pressure-value"),kp=se("#context-pressure-bars"),VM=se("#all-count"),Um=se("#live-count"),zM=se("#pinned-count"),Jh=se("#turn-number"),Kh=se("#turn-timestamp"),Fm=se("#raw-json-preview"),HM=se("#raw-json-size"),Vp=se("#parser-health-status"),zp=se("#parser-health-summary"),GM=se("#metric-errors"),WM=se("#metric-long"),$M=se("#metric-files"),XM=se("#metric-diffs"),qM=se("#metric-artifacts"),YM=se("#metric-compactions"),Om=se("#sidebar-session-name"),Bm=se("#sidebar-source"),km=se("#sidebar-turns"),jh=se("#sidebar-records"),Vm=se("#sidebar-live-status"),Mc=se("#sidebar-session-path"),Qh=se("#context-event-title"),ZM=se("#saved-errors-summary"),JM=se("#saved-files-summary"),KM=se("#saved-latest-summary"),jM=se("#saved-view-count"),na=se("#event-popup"),QM=se("#workspace"),Hp=se("#inspector-dock"),eb=se("#topbar"),tb=se("#live-toggle"),zm=se("#live-state"),Hm=se("#live-copy"),Ch=se("#raw-json-toggle"),Ki=se("#search-input"),nb=se(".raw-json"),ib=se("#mode-panel"),sb=se("#mode-panel-kicker"),rb=se("#mode-panel-title"),ln=se("#mode-panel-summary"),ob=se("#mode-panel-filters"),Vt=se("#mode-panel-content"),bc=se("#mode-filter-role"),Ec=se("#mode-filter-type"),Tc=se("#mode-filter-tool"),wc=se("#mode-filter-file"),Gm=se("#mode-filter-errors"),Wm=se("#mode-filter-unknown"),$m=se("#mode-filter-malformed"),Xm=se("#mode-filter-redacted"),qm=se("#mode-filter-utc"),Gp=wi("[data-session-filter]"),ab=wi("[data-action]"),Rh=wi("[data-saved-view]"),lb=wi("[data-view-action]"),ed=wi("[data-metric]"),Ih=wi("[data-app-mode]"),vr=se("#utility-mode-select"),Ym=wi("[data-inspector-tab]"),cb=wi("[data-inspector-panel]"),Zm=wi("[data-source]"),si=se("#session-select"),qo=se("#session-select-status"),ub=se("#settings-button"),ko=se("#sidebar-toggle"),hb=se("#open-editor-button"),Jm=se("#scene-frame"),db=3500,fb=1e3,pb=180,pc=20,mb=38,gb=52,Km=46,_b=58,xb=24,vb=104,yb=1.72,Wp=1.08,Sb=4.3,Mb=2.55,jm=-1e4,td=3600,Qm=28,bb=3,Eb=2,Rr="compaction-progress",Cs="live-prompt-progress",$p=4.8,Xp=5.2,Tb=1.25,wb=3.7,Ab=.04,Cb=.42,Rb=Math.PI/2,Ib=Math.PI*.76,Es=6.8,qp=5.8,Pb=1.75,Lb=2.65,Nb=.16,Mr=6,Db=.86,Ub=3.05,Fb=.72,Ob=.24,Bb=.62,yr=1,kb=1.4,Vb=1.35,zb=1.7,Hb=.62,Gb=.04,Wb=0,$b=1.15,Xb=0,qb=1.05,eg=3.8,Yb=5.8,Yp=2.4,Ph=4.2,Zb=100,Zp=4,Jb=16,Kb=70,jb=.72,Qb=2.6,eE=new Set(["KeyW","KeyA","KeyS","KeyD"]),tE=new Set(["ShiftLeft","ShiftRight"]),Jp=.0032,nE=1.4,tg=28,Kp=Math.PI/2-.08,bi=null;try{bi=new ac({canvas:dt,antialias:!1,alpha:!1,powerPreference:"high-performance"}),bi.setClearColor(197894,1),bi.outputColorSpace=Jt,bi.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75))}catch(n){dt.classList.add("webgl-unavailable"),console.warn(`WebGL renderer unavailable: ${Lr(n)}`)}var Ln=new jr,Yo=new Jn;Yo.renderOrder=4;Ln.add(Yo);var Zo=new Jn;Zo.renderOrder=4.2;Ln.add(Zo);var je=new $t(50,1,.1,1200);je.position.set(0,Km,.01);var Qe=new hc(je,bi?.domElement??dt);Qe.enableDamping=!0;Qe.dampingFactor=.07;Qe.enableRotate=!1;Qe.enableZoom=!1;Qe.mouseButtons.LEFT=kn.PAN;Qe.mouseButtons.RIGHT=kn.ROTATE;Qe.maxDistance=Number.POSITIVE_INFINITY;Qe.minDistance=0;Qe.target.set(0,0,0);var Lh=new _o;Lh.params.Points.threshold=1.05;var Nh=new Ce,vs=new Ct,ys=new ke,Dh=new I,Wn=new I,Ho=new I,Zi=new I,Uo=new jn(0,0,0,"YXZ"),jp=new ke(16777215),Ee=null,Be=[],es=[],yt=new Map,Go=new Map,Jo=[],ri={},oi=null,on=null,Uh=new Map,Fh=new Map,tt=null,nt=null,_r=null,vc=null,Er=null,Ji=null,bh=!1,ji=null,Oh=new Map,Vo=null,ng=0,Bh=0,bt="overview",It=iE(new URLSearchParams(window.location.search).get("mode")),Tr="three-d",Rs=sg(new URLSearchParams(window.location.search).get("source")),yn=rg(new URLSearchParams(window.location.search).get("session")),Rn=[],Gn=null,jt=null,kh=!1,Ei=null,Qp=0,xn=null,Vh=!1,Ts=null,Fo=null,Ss="live",ai=null,Sn="",ig=!0,In=!0,ws=!1,Ac=!1,Ko="sessions",Cn=!1,Ms=!1,Sr=!1,Ls=0,Wo=null,Fc=!1,jo=!1,Cc=0,$n=Xh(),Qi=Number.POSITIVE_INFINITY,wr=null,Eh=!1,mc=!1,Nr=!0,Ti=new Set,nd=!1,Oc=!1,Qo=null,zh=0,Hh=0,em=performance.now()/1e3,gc=0,Rc={prompt:6547455,local:15908444,browser:7467682,web:8229887,coordination:15887725,tool:12044492,assistant:16777215,message:16777215,error:16736102,long:16760138,file:6615680,diff:4446719,artifact:9464063,compaction:16216063,subagent:9403903,"subagent-result":13023487,"file-add":6615680,"file-update":4446719,"file-delete":16736102,"file-move":16760138};function sg(n){return n==="claude"?"claude":"codex"}function iE(n){let e=n?.trim().toLowerCase();return e&&RM.has(e)?e:"summary"}function vn(n=Rs){return n==="claude"?"Claude":"Codex"}function rg(n){let e=n?.trim();return e||null}function sE(){let n=new URL(window.location.href);n.searchParams.has("token")&&(n.searchParams.delete("token"),window.history.replaceState(window.history.state,"",`${n.pathname}${n.search}${n.hash}`))}var Ic=(()=>{let n=new URLSearchParams(window.location.search),e=n.get("token");try{let t=e||sessionStorage.getItem("perlustronToken");return t&&sessionStorage.setItem("perlustronToken",t),n.has("token")&&sE(),t}catch{return e}})();function Dr(n,{includeSession:e=!0}={}){let t=new URL(n,window.location.origin);return t.searchParams.set("source",Rs),e&&yn&&t.searchParams.set("session",yn),Ic&&t.searchParams.set("token",Ic),t}function Is(n){return n===Ls}var tm=new uo(.78,16,10),rE=new ao(.72,.72,.12,32),oE=new lo(.72,0),aE=new Bi(.96,.12,.58),lE=new or(.78,.9,96),cE=new or(.9,1.02,96),nm=new Bn({color:16777215}),uE=new Bn({color:16777215}),hE=new Bn({color:16777215}),dE=new Bn({color:16777215});Ln.add(new po(8778239,1052688,1.5));var og=new go(16777215,2.2);og.position.set(14,24,12);Ln.add(og);var Ir=new xo(2400,240,1456447,1456447);Ir.position.y=-1.4;Ir.material.transparent=!0;Ir.material.opacity=.34;Ln.add(Ir);OM.addEventListener("click",()=>{nt=null,Vc(),Qt(),Fr()});Bo.addEventListener("click",()=>Yg(!Ms));Xo.addEventListener("click",iw);Pm.addEventListener("click",()=>zc("timeline"));Lm.addEventListener("click",()=>zc("transcript"));Nm.addEventListener("click",()=>zc("raw"));Yg(!1);window.addEventListener("resize",_d);dt.addEventListener("contextmenu",TT);dt.addEventListener("wheel",wT,{passive:!1});dt.addEventListener("pointerdown",AT);dt.addEventListener("pointerdown",DT);dt.addEventListener("pointermove",fd);dt.addEventListener("pointermove",UT);dt.addEventListener("pointerup",Ug);dt.addEventListener("pointercancel",Ug);dt.addEventListener("click",qT);dt.addEventListener("dblclick",YT);document.addEventListener("mousemove",RT);document.addEventListener("mouseup",IT);document.addEventListener("pointerlockchange",PT);$w();_d();await id();await Ur();$c();bi?.setAnimationLoop(bT);async function Ur({previousLineCountOverride:n=null,previousLatestOverride:e=null,suppressLiveAnimation:t=!1}={}){let i=++ng,s=Ls;try{let r=await fetch(Dr("/api/session"),{cache:"no-store"});if(!r.ok)throw new Error(`Session API returned ${r.status}`);let o=await r.json();if(!Is(s)||i<Bh)return;Bh=i;let a=Ee!==null,l=a&&hg()?KT()?.clone()??null:null,c=n??Ee?.lineCount??o.lineCount,h=e??Wo??o.latestEventIndex,d=a&&o.latestEventIndex>h,u=a&&o.latestEventIndex===h&&o.lineCount===c,f=d&&!t;if(Qi=f?h:Number.POSITIVE_INFINITY,Wo=o.latestEventIndex,Fc=!1,Ee=o,Oh.clear(),u&&Sr){ts(),Th();return}if(a&&Sr&&RE()){ts(),f&&(om(l),wm()),Th();return}fg({preserveView:a&&Sr,preserveInspector:a&&Sr}),Sr=!0,ts(),f&&(om(l),wm()),(o.pendingBytes??0)>0&&!ji&&dg(o.lineCount,Wo??o.latestEventIndex),Th()}catch(r){if(!Is(s))return;Ac=!1,xE(),ns(r)}}async function Gh(){if(bh)return;bh=!0;let n=Ls;try{if(!Ee){await Ur();return}let e=await fE();if(!Is(n))return;ug(e)}catch(e){ns(e)}finally{bh=!1}}async function fE(){let n=await fetch(Dr("/api/session/status"),{cache:"no-store"});if(!n.ok)throw new Error(`Session status returned ${n.status}`);return await n.json()}async function pE(n){let e=Pt(),t=Dr("/api/session/diff");t.searchParams.set("leftSession",e.sessionPath),t.searchParams.set("rightSession",n),t.searchParams.set("redacted","true"),t.searchParams.set("profile","strict");let i=await fetch(t,{cache:"no-store"});if(!i.ok)throw new Error(`Diff API returned ${i.status}`);return await i.json()}async function mE(){let n=Dr("/api/session/unknowns");n.searchParams.set("profile","strict");let e=await fetch(n,{cache:"no-store"});if(!e.ok)throw new Error(`Unknowns API returned ${e.status}`);return await e.json()}async function id({retryWithoutSelection:n=!0,generation:e=Ls}={}){cg();try{let t=await fetch(Dr("/api/sessions"),{cache:"no-store"});if(!t.ok)throw new Error(`Sessions API returned ${t.status}`);let i=await t.json();if(!Is(e))return;Rn=i.sessions??[],im(i)}catch(t){if(!Is(e))return;if(yn&&n){yn=null,ia(),await id({retryWithoutSelection:!1,generation:e});return}Rn=[],im(),ns(t)}}function im(n){let e=document.createDocumentFragment(),t=n?.selectedPath||yn||Rn[0]?.path||"";if(!Rn.length){let i=document.createElement("option");i.value="",i.textContent="No sessions found",e.append(i),si.replaceChildren(e),si.disabled=!0,qo.textContent="0";return}Rn.forEach(i=>{let s=document.createElement("option");s.value=i.path,s.textContent=ag(i),s.title=i.path,e.append(s)}),si.replaceChildren(e),si.value=t,si.disabled=!1,qo.textContent=`${Rn.length}`}function ag(n){return[n.isLive?"Live":"",n.explicit?"Default":"",n.label,yh(n.lastModifiedAt),fc(n.byteLength)].filter(Boolean).join(" - ")}async function gE(n){let e=rg(n);if(e===yn)return;Xc(),yn=e,jt=null,Ei=null,xn=null,Ts=null,Ac=!0,ia(),lg();let t=Ls;vE(e),await Ur({suppressLiveAnimation:!0}),Is(t)&&$c()}function ia(){let n=new URL(window.location.href);n.searchParams.set("source",Rs),n.searchParams.set("mode",It),yn?n.searchParams.set("session",yn):n.searchParams.delete("session"),n.searchParams.delete("token"),window.history.replaceState({},"",`${n.pathname}${n.search}${n.hash}`)}function lg(){Ls+=1,ji&&clearTimeout(ji),ji=null,Vo=null,ng=0,Bh=0,nt=null,tt=null,bt="overview",Wo=null,Fc=!1,$n=Xh(),jo=!1,Cc=0,Qi=Number.POSITIVE_INFINITY,wr&&clearTimeout(wr),wr=null,Sr=!1,Ee=null,Be=[],es=[],yt.clear(),Go.clear(),Eg(),Gg()}function cg(){si.disabled=!0,qo.textContent="Loading"}function Th(){_E({switched:Ac}),Ac=!1}function _E({switched:n=!1}={}){si.disabled=Rn.length===0,qo.textContent=n?"Loaded":Rn.length?`${Rn.length}`:"0"}function xE(){si.disabled=Rn.length===0,qo.textContent="Error"}function vE(n){let e=yE(n);Rm.textContent="Loading session",Im.textContent=e,Dm.textContent="Loading",Zh.textContent="Reading JSONL",Om.textContent="Loading session",Bm.textContent=vn(),km.textContent="0",jh.textContent="0",Vm.textContent="Loading",Mc.textContent=e,Mc.title=n||"Latest session",zm.textContent="LOAD",Hm.textContent="Switching session...",cg()}function yE(n){return n?Rn.find(t=>t.path===n)?.label||en(n)||n:"Latest session"}function ug(n){if(!Ee){Ur();return}let e=Ee,t=e.lineCount,i=Wo??e.latestEventIndex,s=e.byteLength??e.processedByteLength??0,r=n.byteLength??s,o=e.pendingBytes??0,a=n.pendingBytes??0,l=n.graphChanged===!0,c=ME(n),h=c.compactionInProgress,d=sm(c)!==sm($n),u=Math.max(0,r-s),f=a>0,g=u>0||a>o,y=n.renderableEventCount!==SE(e),m=a===0&&(n.latestEventIndex>i||n.lineCount>t||y),p=n.latestEventIndex===i&&n.lineCount===t&&u===0&&a===o&&l===Fc&&!d,S=l||f&&!h||g&&!h||y||m;EE(n,c),d&&(h||!S)&&fg({preserveView:!0,preserveInspector:!0}),S&&(!p||f||y||m)&&dg(t,i)}function SE(n){return n.totals.promptCount+n.totals.callCount+n.totals.assistantMessageCount+n.totals.fileChangeCount+n.totals.compactionCount}function ME(n){let e=n.liveCues??Xh();return{compactionInProgress:e.compactionInProgress||n.compactionInProgress===!0,pendingPrompt:e.pendingPrompt??null,assistantStreaming:e.assistantStreaming===!0,latestAssistantEventIndex:e.latestAssistantEventIndex??null,latestAssistantPreview:e.latestAssistantPreview??null,latestTokenSample:e.latestTokenSample??null,activeToolCalls:e.activeToolCalls??[],completedToolCalls:e.completedToolCalls??[]}}function sm(n){return[n.compactionInProgress?"compact:1":"compact:0",n.pendingPrompt?`prompt:${n.pendingPrompt.eventIndex}:${$o(n.pendingPrompt.title)}:${$o(n.pendingPrompt.text)}`:"prompt:",n.assistantStreaming?`assistant:${n.latestAssistantEventIndex??""}:${$o(n.latestAssistantPreview)}`:"assistant:",n.latestTokenSample?`tokens:${n.latestTokenSample.eventIndex}:${n.latestTokenSample.totalTokens}:${n.latestTokenSample.contextPercent??""}`:"tokens:",`active:${rm(n.activeToolCalls)}`,`done:${rm(n.completedToolCalls)}`].join("|")}function rm(n){return n.map(e=>`${e.id}:${e.eventIndex}:${e.status}:${e.completedAt??""}:${$o(e.argumentPreview)}:${$o(e.outputPreview)}`).join(",")}function $o(n){return n?`${n.length}:${n.slice(0,48)}`:""}function om(n=null){if(!hg())return;let e=vd();if(!e)return;e.type==="prompt"?tt=e.id:e.type==="compaction"?tt=null:tt=e.promptId;let t=nt!==e.id,i=Xg();bt="overview",is({preserveCamera:!0}),n?bE(n,Lc(e)):Ps({preserveDistance:!0}),li(),i?ss(e,{restartStream:t}):(nt=e.id,Qt())}function hg(){return In&&Ss==="live"&&!Sn&&!ai}function bE(n,e){let t=e.x-n.x,i=e.y-n.y,s=e.z-n.z;Qe.target.x+=t,Qe.target.y+=i,Qe.target.z+=s,je.position.x+=t,je.position.y+=i,je.position.z+=s,Qe.update()}function dg(n,e){Vo||(Vo={previousLineCount:n,previousLatest:e}),ji&&clearTimeout(ji),ji=setTimeout(()=>{let t=Vo;Vo=null,ji=null,t&&Ur({previousLineCountOverride:t.previousLineCount,previousLatestOverride:t.previousLatest,suppressLiveAnimation:!1})},pb)}function EE(n,e){let t=Pt();t.source=n.source,t.sessionPath=n.sessionPath,t.sessionId=n.sessionId,t.generatedAt=n.generatedAt,t.lastModifiedAt=n.lastModifiedAt,t.lineCount=n.lineCount,t.latestEventIndex=n.latestEventIndex,t.isLive=n.isLive,t.byteLength=n.byteLength,t.processedByteLength=n.processedByteLength,t.pendingBytes=n.pendingBytes,Fc=n.graphChanged===!0,$n=e,TE($n.compactionInProgress),Zh.textContent=dc(n.lineCount,t.pendingBytes),Um.textContent=`${n.isLive?t.ui.allCount:0}`,jh.textContent=`${n.lineCount}`,mg(AE(t.tokenTelemetry,$n.latestTokenSample)),ts(),Or()}function TE(n){return jo===n?!1:(jo=n,Cc=n?performance.now():0,!0)}function fg({preserveView:n=!1,preserveInspector:e=!1}={}){let t=n?IE():null;Eg();let i=Sg(Pt());Be=i.nodes,es=i.connectors,_g(),tt=tt&&yt.has(tt)?tt:Be.find(s=>s.type==="prompt")?.id??null,pg(),is({preserveCamera:n}),t&&PE(t),rd(),eT(),$T(),tT(),kc(),Qt(),nt&&yt.has(nt)?h_({restartStream:!e}):(nt=null,e?Wg():Gg())}function pg(){let n=Pt(),e=n.ui,t=e.sessionName||n.cwd?.split(/[\\/]/).filter(Boolean).at(-1)||`${vn()} session`;Rm.textContent=t,Im.textContent=`${vn(n.source)}  |  ${en(n.sessionPath)}  |  ${n.cwd||"local"}`,Dm.textContent=`${e.totalTurns} turns`,Zh.textContent=dc(n.lineCount,n.pendingBytes),Om.textContent=t,Bm.textContent=vn(n.source),km.textContent=`${e.totalTurns}`,jh.textContent=`${n.lineCount}`,Mc.textContent=en(n.sessionPath)||n.sessionPath,Mc.title=n.sessionPath,VM.textContent=`${e.allCount}`,Um.textContent=`${e.liveCount}`,zM.textContent=`${gg(n)}`,GM.textContent=`${e.metricErrors}`,WM.textContent=`${e.metricLongCalls}`,$M.textContent=`${e.metricFiles}`,XM.textContent=`${e.metricDiffs}`,qM.textContent=`${e.metricArtifacts}`,YM.textContent=`${e.metricCompactions}`,mg(n.tokenTelemetry),CE(n),pT(),mT(),wE(n.parserHealth),li(),Or()}function wE(n){if(!n){Vp.textContent="Unavailable",zp.replaceChildren();return}let e=n.unknownEventCount+n.malformedLineCount+n.skippedLargePayloadCount;Vp.textContent=e?`${e} issue${e===1?"":"s"}`:"Healthy";let t=[["Lines read",`${n.totalLinesRead}`],["Parsed events",`${n.parsedEventCount}`],["Renderable events",`${n.renderableEventCount}`],["Unknown events",`${n.unknownEventCount}`],["Malformed lines",`${n.malformedLineCount}`],["Skipped large payloads",`${n.skippedLargePayloadCount}`],["Redacted fields",`${n.redactedFieldCount}`],["Images",`${n.imageCount}`],["Tool calls",`${n.toolCallCount}`],["Tool results",`${n.toolResultCount}`],["File activity",`${n.fileActivityCount}`],["Compactions",`${n.compactionCount}`],["Token telemetry",n.tokenTelemetryAvailable?"available":"not logged"],["Parser",`${n.parserVersion} / ${n.schemaVersion}`]],i=document.createDocumentFragment();if(t.forEach(([s,r])=>{let o=document.createElement("div"),a=document.createElement("span"),l=document.createElement("strong");a.textContent=s,l.textContent=r,o.append(a,l),i.append(o)}),n.unknownEventTypes?.length){let s=document.createElement("pre");s.textContent=n.unknownEventTypes.map(r=>`${r.sourceEventType}: ${r.count}`).join(`
`),i.append(s)}zp.replaceChildren(i)}function mg(n){let e=n?.latestContextPercent??null;Bp.textContent=e===null?"n/a":`${Math.min(999,Math.round(e))}%`,Bp.title=n?.latestTotalTokens&&n?.contextWindow?`${n.latestTotalTokens.toLocaleString()} / ${n.contextWindow.toLocaleString()} tokens`:"No token telemetry in this session";let t=n?.samples?.length?n.samples.slice(-Qm):[];if(!t.length){kp.replaceChildren();return}let i=document.createDocumentFragment();t.forEach(s=>{let r=document.createElement("span"),o=Math.max(2,Math.min(28,Math.round((s.contextPercent??0)/4)));r.style.height=`${o}px`,r.title=`${Math.round(s.contextPercent??0)}% context at event ${s.eventIndex}`,i.append(r)}),kp.replaceChildren(i)}function AE(n,e){if(!e)return n;let t=n.samples??[],s=t.at(-1)?.eventIndex===e.eventIndex?t:[...t,e].slice(-Qm);return{...n,samples:s,latestTotalTokens:e.totalTokens,contextWindow:e.contextWindow,latestContextPercent:e.contextPercent,primaryRateLimitPercent:e.primaryRateLimitPercent,secondaryRateLimitPercent:e.secondaryRateLimitPercent}}function CE(n){let e=n.ui,t=n.prompts.at(-1);ZM.textContent=`${e.metricErrors} errors, ${e.metricLongCalls} long calls`,JM.textContent=`${e.metricFiles} file operations, ${e.metricDiffs} diffs`,KM.textContent=t?`${t.calls.length} calls, ${t.fileChanges?.length??0} file changes`:"Waiting for session data",jM.textContent=`${Rh.length}`}function gg(n){return Math.min(3,n.prompts.length)}function RE(){let n=Sg(Pt());if(n.nodes.length!==Be.length||n.connectors.length!==es.length)return!1;for(let t=0;t<n.nodes.length;t+=1)if(n.nodes[t].id!==Be[t]?.id)return!1;for(let t=0;t<n.connectors.length;t+=1)if(!LM(n.connectors[t],es[t]))return!1;let e=performance.now();return n.nodes.forEach((t,i)=>{let s=Be[i];s.kind=t.kind,s.eventIndex=t.eventIndex,s.title=t.title,s.body=t.body,s.detail=t.detail,s.source=t.source,t.isNew&&(s.freshUntil=Math.max(s.freshUntil||0,t.freshUntil||0)),s.isNew=t.isNew||Ns(s,e),s.baseScale=t.baseScale,s.matrixDirty=!0,bt==="overview"&&s.target.copy(t.target)}),es=n.connectors,_g(),is({preserveCamera:!0}),rd(),kc(),pg(),Qt(),nt&&yt.has(nt)?h_({restartStream:!1}):Wg(),!0}function IE(){return new Map(Be.map(n=>[n.id,{position:n.position.clone(),target:n.target.clone(),scale:n.scale}]))}function _g(){yt=new Map,Go=new Map,Be.forEach(n=>{yt.set(n.id,n);let e=Go.get(n.promptId);e?e.push(n):Go.set(n.promptId,[n])})}function PE(n){let e=new Map(es.map(a=>[Sc(a),yc(a)])),t=LE(n),i=t?n.get(Rr):null,s=NE(n),r=s?n.get(Cs):null,o=performance.now();Be.forEach(a=>{let l=n.get(a.id);if(l){a.position.copy(l.position),a.scale=l.scale,a.matrixDirty=!0;return}let c=a.id===t?i:a.id===s?r:null;if(c){a.position.copy(c.position),a.scale=Math.max(a.scale,c.scale),a.freshUntil=Math.min(a.freshUntil||Number.POSITIVE_INFINITY,o+td*.58),a.isNew=!0,a.matrixDirty=!0;return}a.position.copy(bt==="inspect"?a.target:DE(a,n,e)),a.matrixDirty=!0})}function LE(n){if(!n.has(Rr))return null;let e=Be.filter(t=>t.type==="compaction"&&t.id!==Rr&&!n.has(t.id));return e.length?e.reduce((t,i)=>i.eventIndex>=t.eventIndex?i:t).id:null}function NE(n){if(!n.has(Cs))return null;let e=Be.filter(t=>t.type==="prompt"&&t.id!==Cs&&!n.has(t.id));return e.length?e.reduce((t,i)=>i.eventIndex>=t.eventIndex?i:t).id:null}function DE(n,e,t){let i=t.get(n.id);if(!i)return n.target;let s=e.get(i);return s?s.position:yt.get(i)?.position??n.target}function xg(n,e){let t=new Set(n.assistantMessages.map(o=>o.id)),i=new Map,s=new Set;return e.forEach(o=>{let a=o.assistantMessageId||"";if(!t.has(a))return;let l=i.get(a)??[];l.push(o),i.set(a,l),s.add(o.id)}),[...n.assistantMessages.map(o=>({type:"assistant",message:o,calls:i.get(o.id)??[]})),...e.filter(o=>!s.has(o.id)).map(o=>({type:"call",call:o}))].sort((o,a)=>{let l=am(o)-am(a);return l!==0?l:lm(o)-lm(a)})}function am(n){return n.type==="assistant"?n.message.eventIndex:n.call.eventIndex}function lm(n){return n.type==="assistant"?0:1}function UE(n,e){if(e.type==="compaction")return{above:$p,below:Xp,activityUnits:[],activityDepth:0,fileRows:0};let t=e.prompt,i=ld(n,t),s=sd(i),r=new Set(s.flatMap(u=>[u.launch?.id,u.result?.id].filter(f=>!!f))),o=i.filter(u=>!r.has(u.id)),a=xg(t,o),l=FE(a),c=Math.ceil((t.fileChanges?.length??0)/yr),h=l+kE(c)+Yp,d=l+VE(s)+Yp;return{above:Math.max($p,h),below:Math.max(Xp,d),activityUnits:a,activityDepth:l,fileRows:c}}function FE(n){if(!n.length)return 0;let e=0,t=0;return n.forEach((i,s)=>{let r=OE(s);e=Math.max(e,r),t=Math.min(t,r),i.type==="assistant"&&i.calls.forEach((o,a)=>{let l=r+vg(a,i.calls.length);e=Math.max(e,l),t=Math.min(t,l)})}),Math.max(Math.abs(t),Math.abs(e))+Tb}function OE(n){return Pc(n).z}function Pc(n){let e=Rb+n*Ib,t=wb+Math.min(Cb,n*Ab);return new I(Math.sin(e)*t,-Pb-n*Lb+Math.cos(e)*Nb,Math.cos(e)*t)}function BE(n,e){let t=Pc(e);return new I(t.x,Es+t.y,n+t.z)}function cm(n,e,t,i,s){if(i==null){let a=Pc(s);return{fromId:n,toId:e,waypoints:[new I(0,Es+a.y*.36,t+a.z*.18),new I(a.x*.58,Es+a.y*.72,t+a.z*.58)]}}let r=5,o=[];for(let a=1;a<=r;a+=1){let l=a/(r+1),c=i+(s-i)*l,h=Pc(c);o.push(new I(h.x,Es+h.y,t+h.z))}return{fromId:n,toId:e,waypoints:o}}function vg(n,e){let t=Math.floor(n/Mr),i=n%Mr,s=Math.min(e-t*Mr,Mr);return(i-(s-1)/2)*Db+t*.32}function kE(n){return n<=0?0:kb+(n-1)*Vb+zb}function VE(n){if(!n.length)return 0;let e=n.reduce((t,i)=>{let s=Mg(i.nodes);return Math.max(t,s.length*3)},0);return eg+Yb+e}function zE(n){return n.x<0?-1:1}function yg(n,e){let t=n.x,i=n.z-e,s=Math.hypot(t,i);return s<.001&&(t=zE(n),i=0,s=1),t/=s,i/=s,{radialX:t,radialZ:i,tangentX:-i,tangentZ:t}}function HE(n,e,t,i){let s=yg(n,e),r=Math.floor(t/Mr),o=t%Mr,a=vg(t,i),l=Ub+r*Fb;return new I(n.x+s.radialX*l+s.tangentX*a,n.y-.48-o*Ob-r*Bb,n.z+s.radialZ*l+s.tangentZ*a)}function um(n,e,t){let i=n.assistantMessageId||"";return t.has(i)?i:e}function GE(n,e,t){if(!e.length||n==null)return e.at(-1)?.id??t;let i=t,s=Number.NEGATIVE_INFINITY;return e.forEach(r=>{r.eventIndex<=n&&r.eventIndex>=s&&(i=r.id,s=r.eventIndex)}),i}function WE(n,e,t,i){let s=yg(n,e),r=Math.floor(t/yr),o=t%yr,a=Math.min(i-r*yr,yr),l=o-(a-1)/2,c=r*yr+o,h=Hb+r*Gb,d=l*Wb;return new I(n.x+s.radialX*h+s.tangentX*d,n.y-1.62-c*$b-r*Xb,n.z+s.radialZ*h+s.tangentZ*d)}function $E(n,e,t){return{fromId:n,toId:e,waypoints:[new I(t.x,t.y-qb,t.z)]}}function Sg(n){let e=[],t=[],i=ad(n,{includeCompactionProgress:!0}),s=i.map(c=>UE(n,c)),o=s.reduce((c,h)=>c+h.above+h.below,0)/2,a=performance.now()+td,l=[];return i.forEach((c,h)=>{let d=s[h],u=o-d.above;if(o-=d.above+d.below,c.type==="compaction"){let A=c.compaction,O=A.eventIndex>Qi,k={id:A.id,type:"compaction",kind:"compaction",promptId:A.id,promptIndex:c.compactionIndex,callIndex:-1,eventIndex:A.eventIndex,title:A.title,body:A.text,detail:A.detail,source:A,isNew:O,freshUntil:O?a:0,position:new I(0,qp,u),target:new I(0,qp,u),baseScale:.58,scale:.58};e.push(k),l.push(k);return}let{prompt:f,promptIndex:g}=c,y=e.length,m=ld(n,f),p=sd(m),S=f.fileChanges||[],b=f.eventIndex>Qi,M={id:f.id,type:"prompt",kind:"prompt",promptId:f.id,promptIndex:g,callIndex:-1,eventIndex:f.eventIndex??g,title:f.title,body:f.text,detail:f.text,source:f,isNew:b,freshUntil:b?a:0,position:new I(0,Es,u),target:new I(0,Es,u),baseScale:.78,scale:.78};e.push(M),l.push(M);let R=new Set(m.map(A=>A.id)),T=new Set(f.assistantMessages.map(A=>A.id)),P=d.activityUnits,x=[],w=M.id,L=null,C=0;P.forEach((A,O)=>{let k=BE(u,O);if(A.type==="call"){e.push(br(f,g,A.call,C,k,a)),t.push(cm(w,A.call.id,u,L,O)),x.push({id:A.call.id,eventIndex:A.call.eventIndex}),w=A.call.id,L=O,C+=1;return}let J=YE(f,g,A.message,C,k,a,A.calls.length?.58:.32);e.push(J),t.push(cm(w,J.id,u,L,O)),x.push({id:J.id,eventIndex:A.message.eventIndex}),w=J.id,L=O,C+=1,A.calls.forEach((K,ie)=>{let me=HE(J.target,u,ie,A.calls.length);e.push(br(f,g,K,C,me,a)),t.push([J.id,K.id]),x.push({id:K.id,eventIndex:K.eventIndex}),C+=1})}),p.forEach((A,O)=>{let k=O%2===0?1:-1,J=Math.floor(O/2),K=k*Math.min(13.5,4.8+J*2.2),ie=u-eg-J*.55,me=ie-3.3,ye=Es-1.2-O%2*.28,He=C+p.length*2+O*AM;if(A.launch){let Ge=br(f,g,A.launch,C,new I(K,ye,ie),a,{kind:"subagent",title:fm(A.launch),baseScale:.52});e.push(Ge),t.push([um(A.launch,M.id,T),Ge.id]),C+=1}if(A.result){let Ge=br(f,g,A.result,C,new I(K,ye-.34,A.launch?me:ie),a,{kind:"subagent-result",title:fm(A.result),baseScale:.38});e.push(Ge),t.push([A.launch?.id??um(A.result,M.id,T),Ge.id]),C+=1}XE({branch:A,parentId:A.result?.id??A.launch?.id??M.id,prompt:f,promptIndex:g,branchX:K,branchY:ye,startZ:(A.result?me:ie)-2.1,callIndexStart:He,freshUntil:a,allNodes:e,allConnectors:t})});let U=new Set;for(let A=y;A<e.length;A+=1)U.add(e[A].id);let G=new Map,W=new Map;S.forEach(A=>{let O=A.callId&&R.has(A.callId)&&U.has(A.callId)?A.callId:GE(A.eventIndex,x,M.id);G.set(A.id,O);let k=W.get(O)??[];k.push(A),W.set(O,k)}),S.forEach((A,O)=>{let k=G.get(A.id)??M.id,J=e.find(Ge=>Ge.id===k)??M,K=W.get(k)??[A],ie=Math.max(0,K.findIndex(Ge=>Ge.id===A.id)),me=WE(J.target,u,ie,K.length),ye=`file-${Bc(A)}`,He={id:A.id,type:"fileChange",kind:ye,promptId:f.id,promptIndex:g,callIndex:C+O,eventIndex:A.eventIndex??f.eventIndex??g,title:A.shortPath||en(A.path)||"file change",body:A.preview||A.path,detail:QE(A),source:A,isNew:A.eventIndex>Qi,freshUntil:A.eventIndex>Qi?a:0,position:me.clone(),target:me,baseScale:.42,scale:.42};e.push(He),t.push($E(k,He.id,J.target))})}),l.forEach((c,h)=>{let d=l[h+1];d&&t.push([c.id,d.id])}),e.forEach(c=>{c.home=c.target.clone()}),{nodes:e,connectors:t}}function XE({branch:n,parentId:e,prompt:t,promptIndex:i,branchX:s,branchY:r,startZ:o,callIndexStart:a,freshUntil:l,allNodes:c,allConnectors:h}){let d=Mg(n.nodes),u=e,f=0;d.forEach((g,y)=>{let m=o-y*3,p=u;if(g.prompt){let b=br(t,i,g.prompt,a+f,new I(s,r-.9,m),l,{kind:"subagent",title:pm(g.prompt),baseScale:.3});c.push(b),h.push([u,b.id]),u=b.id,p=b.id,f+=1}let S=p;g.children.forEach((b,M)=>{let R=qE(s,r,m,M),T=br(t,i,b,a+f,R,l,{title:pm(b),baseScale:KE(b)});c.push(T),h.push([S,T.id]),S=T.id,f+=1})})}function qE(n,e,t,i){let s=i%8,r=Math.floor(i/8),o=s%2===0?-1:1,a=Math.floor(s/2),l=n+o*(.68+a*.42),c=e-1.16-r*.18+s%4*.06,h=t-.58-r*.92-Math.floor(s/2)*.18;return new I(l,c,h)}function Mg(n){let e=[],t=null;return n.forEach(i=>{if(i.name==="subagent.prompt"){t={prompt:i,children:[]},e.push(t);return}t||(t={prompt:null,children:[]},e.push(t)),t.children.push(i)}),e}function br(n,e,t,i,s,r,{kind:o=t.kind||"tool",title:a=t.name,baseScale:l=t.status==="completed"?.3:.4}={}){let c=t.eventIndex>Qi;return{id:t.id,type:"call",kind:o,promptId:n.id,promptIndex:e,callIndex:i,eventIndex:t.eventIndex??n.eventIndex??e,title:a,body:t.argumentPreview||"",detail:jE(t),source:t,isNew:c,freshUntil:c?r:0,position:s.clone(),target:s,baseScale:l,scale:l}}function YE(n,e,t,i,s,r,o=.32){let a=t.eventIndex>Qi;return{id:t.id,type:"message",kind:"assistant",promptId:n.id,promptIndex:e,callIndex:i,eventIndex:t.eventIndex??n.eventIndex??e,title:"assistant message",body:t.text,detail:t.text,source:t,isNew:a,freshUntil:a?r:0,position:s.clone(),target:s,baseScale:o,scale:o}}function sd(n){let e=n.filter(ZE),t=n.filter(bg),i=new Set(t),s=new Map;t.forEach(o=>{let a=dm(o);if(!a)return;let l=s.get(a)??[];l.push(o),s.set(a,l)});let r=e.map((o,a)=>{let l=dm(o),h=(l?s.get(l)?.find(d=>i.has(d)):null)??t.find(d=>i.has(d)&&d.eventIndex>=o.eventIndex)??null;return h&&i.delete(h),{launch:o,result:h,nodes:hm(o,h),eventIndex:Math.min(o.eventIndex,h?.eventIndex??o.eventIndex),order:a}});return i.forEach(o=>{r.push({launch:null,result:o,nodes:hm(null,o),eventIndex:o.eventIndex,order:e.length+r.length})}),r.sort((o,a)=>o.eventIndex-a.eventIndex||o.order-a.order)}function ZE(n){return n.name==="spawn_agent"}function bg(n){return n.name==="subagent"}function hm(n,e){return n?.subagentNodes?.length?n.subagentNodes:e?.subagentNodes??[]}function dm(n){let e=`${n.argumentPreview||""}
${n.outputPreview||""}`;return e.match(/"agent_id"\s*:\s*"([^"]+)"/)?.[1]??e.match(/\bagent:\s*([^\s,}]+)/)?.[1]??e.match(/"agent_path"\s*:\s*"([^"]+)"/)?.[1]??null}function fm(n){let e=JE(n);return e||(bg(n)?"subagent result":"subagent")}function JE(n){let e=n.outputPreview;if(!e)return null;try{let t=JSON.parse(e);return typeof t.nickname=="string"&&t.nickname.trim()?t.nickname:null}catch{return e.match(/"nickname"\s*:\s*"([^"]+)"/)?.[1]??null}}function pm(n){if(n.name.startsWith("subagent.")){let e=n.name.slice(9);return e==="more"?n.argumentPreview||"more":e}return n.name}function KE(n){return n.name==="subagent.prompt"?.34:n.name==="subagent.more"?.26:n.status==="completed"?.24:.32}function jE(n){let e=[`call: ${n.name}`,`kind: ${n.kind}`,`status: ${n.status}`,n.assistantMessageId?`assistant message: ${n.assistantMessageId}`:"",n.subagentSessionPath?`subagent session: ${n.subagentSessionPath}`:"",n.subagentNodes?.length?`subagent nodes: ${n.subagentNodes.length}`:"",n.startedAt?`started: ${n.startedAt}`:"",n.completedAt?`completed: ${n.completedAt}`:"",n.durationMs!==null&&n.durationMs!==void 0?`duration: ${Rp(n.durationMs)}`:"","","arguments:",n.argumentPreview||"{}"];return n.outputPreview&&e.push("","output:",n.outputPreview),e.filter(Boolean).join(`
`)}function QE(n){return[`change: ${n.changeType}`,`path: ${n.path}`,n.callId?`call: ${n.callId}`:"",n.timestamp?`time: ${n.timestamp}`:"","",n.detail||n.preview].filter(Boolean).join(`
`)}function eT(){let n=Be.filter(r=>r.type==="prompt"),e=Be.filter(r=>r.type==="call"),t=Be.filter(r=>r.type==="fileChange"),i=Be.filter(r=>r.type==="message"),s=Be.filter(r=>r.type==="compaction");ri.prompt=Oo("prompt",n,rE,uE),ri.call=Oo("call",e,tm,nm),ri.fileChange=Oo("fileChange",t,aE,dE),ri.message=Oo("message",i,tm,nm),ri.compaction=Oo("compaction",s,oE,hE)}function Oo(n,e,t,i){if(!e.length)return;let s=new io(t.clone(),i.clone(),e.length);s.instanceMatrix.setUsage(Zu),s.userData.bucket=n,s.userData.nodes=e,s.boundingSphere=new nn(new I,600),s.castShadow=!1,s.receiveShadow=!1,Ln.add(s);let r=performance.now();return e.forEach((o,a)=>{o.bucket=n,o.instanceIndex=a,Og(s,o,a,0,r),o.matrixDirty=!1,s.setColorAt(a,md(o,!1))}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s}function tT(){let n=Math.max(Sh(es),Sh(Jo),Math.max(Be.length-1,1)),e=new Float32Array(n*2*3),t=new Rt;t.setAttribute("position",new Bt(e,3)),t.setDrawRange(0,Sh(Jo)*2),t.boundingSphere=new nn(new I,600);let i=new ps({color:6547455,transparent:!0,opacity:.42});oi=new sr(t,i),Ln.add(oi)}function Eg(){Object.values(ri).forEach(n=>{n&&(Ln.remove(n),n.geometry.dispose(),n.material.dispose())}),ri={},oi&&(Ln.remove(oi),oi.geometry.dispose(),oi.material.dispose(),oi=null),on&&(Ln.remove(on),on.geometry.dispose(),on.material.dispose(),on=null),mm(Uh,Yo),mm(Fh,Zo)}function mm(n,e){n.forEach(t=>{wg(t,e)}),n.clear()}function Tg(n,e,t){Array.from(n.keys()).forEach(i=>{t.has(i)||(wg(n.get(i),e),n.delete(i))})}function wg(n,e){n?.forEach(t=>{e.remove(t),t.material.dispose()})}function Ag(n,e,t,i,s,r){let o=n.get(e);return o||(o=Array.from({length:t},(a,l)=>nT(e,l/t,i,s,r)),n.set(e,o)),o}function nT(n,e,t,i,s){let r=new Bn({color:s,transparent:!0,opacity:0,side:Tn,depthWrite:!1,blending:So}),o=new Xt(i,r);return o.userData={nodeId:n,offset:e},o.rotation.x=-Math.PI/2,o.visible=!1,t.add(o),o}function is({preserveCamera:n=!1}={}){if(bt==="inspect"&&tt){let e=od(tt),t=new Map(e.placements.map(i=>[i.node.id,i]));Be.forEach(i=>{let s=t.get(i.id);s?(i.target.copy(s.target),i.scale=s.scale):(i.target.set(i.position.x,jm,i.position.z),i.scale=0),i.matrixDirty=!0}),n||(Qe.target.set(0,.2,-e.laneDepth*.12),je.position.set(0,18,Math.max(27,e.laneDepth*.58)))}else Be.forEach(e=>{e.target.copy(e.home??e.position),e.scale=e.baseScale,e.position.y<-1e3&&e.position.copy(e.target),e.matrixDirty=!0}),n||Ps();cT(),rd(),kc(),Nr=!0,hd()}function rd(){if(bt==="inspect"&&tt){Jo=od(tt).connectors;return}Jo=es}function od(n){let e=Be.filter(f=>f.promptId===n),t=iT(n),i=new Set(t.flatMap(f=>f.nodes.map(g=>g.id))),s=e.filter(f=>f.type==="prompt"||!i.has(f.id)).sort(Rg),r=[...s.map((f,g)=>({type:"node",eventIndex:f.eventIndex,order:g*2,node:f})),...t.map(f=>({type:"branch",eventIndex:f.eventIndex,order:f.order*2+1,branch:f}))].sort(oT),o=t.reduce((f,g)=>Math.max(f,g.nodes.length),0),a=Math.min(vb,Math.max(xb,Math.max(0,r.length-1)*yb,Math.max(0,o-1)*Wp+8)),l=r.length>1?a/(r.length-1):0,c=a/2,h=new Map;r.forEach((f,g)=>{let y=c-g*l;f.type==="node"?h.set(f.node.id,y):f.branch.startZ=y});let d=s.map(f=>({node:f,target:new I(0,Ig(f),h.get(f.id)??0),scale:_m(f)}));t.forEach(f=>{let g=f.side*(Sb+f.lane*Mb);f.nodes.forEach((y,m)=>{d.push({node:y,target:new I(g+lT(y,m,f.side),aT(y),f.startZ-m*Wp),scale:_m(y)})})});let u=sT(r,s,t);return{placements:d,visibleNodes:Cg([...s,...t.flatMap(f=>f.nodes)]),mainNodes:s,branches:t,connectors:u,laneDepth:a}}function iT(n){let e=Ee,t=e?.prompts.find(i=>i.id===n);return!e||!t?[]:sd(ld(e,t)).map((i,s)=>{let r=Cg([i.launch?yt.get(i.launch.id):null,...i.nodes.map(o=>yt.get(o.id)),i.result?yt.get(i.result.id):null]);return r.length?{nodes:r,eventIndex:i.eventIndex,order:s,side:s%2===0?-1:1,lane:Math.floor(s/2),startZ:0}:null}).filter(i=>!!i)}function sT(n,e,t){let i=[];return e.slice(1).forEach((s,r)=>{i.push([e[r].id,s.id])}),t.forEach(s=>{let r=s.nodes[0];if(!r)return;let o=n.findIndex(l=>l.type==="branch"&&l.branch===s),a=rT(n,o)??e[0]??null;a&&i.push([a.id,r.id]),s.nodes.slice(1).forEach((l,c)=>{i.push([s.nodes[c].id,l.id])})}),i}function rT(n,e){for(let t=e-1;t>=0;t-=1){let i=n[t];if(i?.type==="node")return i.node}return null}function Cg(n){let e=new Set;return n.filter(t=>!t||e.has(t.id)?!1:(e.add(t.id),!0))}function Rg(n,e){return n.type==="prompt"&&e.type!=="prompt"?-1:e.type==="prompt"&&n.type!=="prompt"?1:n.eventIndex-e.eventIndex||n.callIndex-e.callIndex||gm(n)-gm(e)}function oT(n,e){let t=n.type==="node"&&n.node.type==="prompt",i=e.type==="node"&&e.node.type==="prompt";return t!==i?t?-1:1:n.eventIndex-e.eventIndex||n.order-e.order}function gm(n){return n.type==="prompt"?0:n.type==="message"?1:n.type==="call"?2:n.type==="fileChange"?3:4}function Ig(n){return n.type==="prompt"?1.15:n.type==="fileChange"?-.32:n.type==="message"?.62:n.type==="compaction"?.82:.24}function aT(n){return n.type!=="call"?Ig(n):n.source.name==="subagent.prompt"?.72:n.source.name==="subagent.compaction"?.54:n.source.name==="spawn_agent"?.46:n.source.name==="subagent"?.3:n.source.name==="subagent.file"?-.16:n.source.name==="subagent.message"?.2:.04}function lT(n,e,t){if(n.type!=="call"||e===0||n.source.name==="subagent.prompt"||n.source.name==="subagent"||n.source.name==="subagent.more")return 0;let i=[.3,-.3,.58,-.58];return i[(e-1)%i.length]*t}function _m(n){return n.type==="prompt"?.62:n.type==="fileChange"?.36:n.type==="message"?.28:n.type==="compaction"?.48:n.source.name==="spawn_agent"?.44:n.source.name==="subagent"?.36:n.source.name==="subagent.prompt"?.34:n.source.name==="subagent.more"?.26:Math.min(.34,Math.max(.24,n.baseScale))}function cT(){let n=bt==="inspect"&&!!tt;Jm.classList.toggle("inspect-active",n),dt.setAttribute("aria-label",n?"Perlustron focused prompt inspection":"Perlustron session workflow")}function ad(n,{includeCompactionProgress:e=!1}={}){let t=dT(n),i=[...t.map((r,o)=>({type:"prompt",eventIndex:uT(n,t,r,o),prompt:r,promptIndex:o})),...(n.compactions||[]).map((r,o)=>({type:"compaction",eventIndex:r.eventIndex,compaction:r,compactionIndex:o}))],s=e?fT(n,i):null;return s&&i.push(s),i.sort((r,o)=>r.eventIndex-o.eventIndex)}function uT(n,e,t,i){let s=e[i+1]?.eventIndex??Number.POSITIVE_INFINITY,r=hT(n,t),o=n.compactions?.filter(a=>a.eventIndex>t.eventIndex&&a.eventIndex<s).reduce((a,l)=>a===null||l.eventIndex>a?l.eventIndex:a,null)??null;return o!==null?Math.max(r,o+.25):r}function hT(n,e){let t=e.id===Lg(n)?[...$n.activeToolCalls,...$n.completedToolCalls].map(i=>i.eventIndex):[];return Math.max(e.eventIndex,...e.calls.map(i=>i.eventIndex),...e.assistantMessages.map(i=>i.eventIndex),...(e.fileChanges||[]).map(i=>i.eventIndex),...t)}function dT(n){let e=Pg(n);return e?[...n.prompts,e]:n.prompts}function Pg(n){let e=$n.pendingPrompt;return!e||e.eventIndex<=n.latestEventIndex?null:{id:Cs,eventIndex:e.eventIndex,timestamp:e.timestamp,title:e.title||"Incoming prompt",text:e.text,images:[],calls:[],assistantMessages:[],fileChanges:[]}}function ld(n,e){if(e.id!==Lg(n))return e.calls;let t=new Set(e.calls.map(s=>s.id)),i=[...$n.activeToolCalls,...$n.completedToolCalls].filter(s=>!t.has(s.id)&&s.eventIndex>n.latestEventIndex);return i.length?[...e.calls,...i]:e.calls}function Lg(n){return Pg(n)?Cs:n.prompts.at(-1)?.id??null}function fT(n,e){if(!jo)return null;let t=e.reduce((o,a)=>a.type!=="prompt"?o:!o||a.eventIndex>=o.eventIndex?a:o,null),s=Math.max(n.latestEventIndex,t?.eventIndex??0)+.5,r={id:Rr,eventIndex:s,timestamp:n.lastModifiedAt||n.generatedAt||null,title:"Compacting context",text:"Compaction in progress",detail:["compaction: in progress",t?`anchor: ${t.prompt.title}`:"",n.pendingBytes>0?`pending bytes: ${n.pendingBytes}`:""].filter(Boolean).join(`
`),replacedMessageCount:0,encrypted:!1,reason:"in progress"};return{type:"compaction",eventIndex:s,compaction:r,compactionIndex:n.compactions.length}}function Ng({label:n,detail:e,status:t,title:i=e,className:s="",dotIndex:r}){let o=document.createElement("div");o.className=["root-row",s].filter(Boolean).join(" "),o.title=i;let a=document.createElement("span");a.className=`root-dot ${Fp[r%Fp.length]}`;let l=document.createElement("span");l.className="root-copy";let c=document.createElement("strong");c.textContent=n;let h=document.createElement("small");if(h.textContent=e,l.append(c,h),o.append(a,l),t){let d=document.createElement("em");d.textContent=t,o.append(d)}return o}function pT(){let n=Pt(),e=n.ui?.roots?.length?n.ui.roots:[{label:"Session file",path:n.sessionPath,status:"Loaded"}],t=document.createDocumentFragment();e.forEach((i,s)=>{t.append(Ng({label:i.label||"Session root",detail:en(i.path)||i.path||"Local path",status:i.status||"Local",title:i.path||"",dotIndex:s}))}),UM.replaceChildren(t)}function mT(){let n=Pt().metadata,e=(n?.dynamicTools||[]).map(s=>s.namespace?`${s.namespace}.${s.name}`:s.name).slice(0,6),t=[["Codex",[n?.originator,n?.cliVersion].filter(Boolean).join(" ")],["Source",[n?.source,n?.modelProvider].filter(Boolean).join(" / ")],["Git",gT(n?.gitCommitHash)||en(n?.repositoryUrl||"")],["Policy",[n?.approvalPolicy,n?.sandbox].filter(Boolean).join(" / ")],["Model",n?.model||""],["Tools",e.join(", ")]].filter(([,s])=>s),i=document.createDocumentFragment();t.forEach(([s,r],o)=>{i.append(Ng({label:s,detail:r,className:"metadata-row",dotIndex:o}))}),FM.replaceChildren(i)}function gT(n){return n?n.slice(0,10):""}function li(){let n=Pt(),e=new Map((n.ui?.promptRows||[]).map(r=>[r.id,r])),t=ad(n),i=t.filter((r,o)=>{if(r.type==="compaction")return MT(r.compaction)?Sn||Ss==="all"?!0:Ss==="live"&&n.isLive&&o+1===t.length:!1;let{prompt:a,promptIndex:l}=r,c=e.get(a.id);return(Sn||Ss==="all"||Ss==="live"&&(c?.isLive||l+1===n.prompts.length)||Ss==="pinned"&&l<gg(n))&&yT(a)});if(!i.length){let r=document.createElement("div");r.className="prompt-empty",r.textContent="No matching sessions",Op.replaceChildren(r);return}let s=document.createDocumentFragment();i.forEach(r=>{if(r.type==="compaction"){s.append(_T(r.compaction));return}let{prompt:o}=r,a=e.get(o.id),l=Dg(o.id===tt?"prompt-row active":"prompt-row"),{row:c,meta:h}=l;c.dataset.promptId=o.id,l.title.textContent=o.title,l.count.textContent=a?.isLive?"LIVE":"LOCAL",h[0].textContent=`${a?.turns??o.calls.length+o.assistantMessages.length+(o.fileChanges?.length??0)} turns`,h[1].textContent=`${a?.local??o.calls.filter(d=>d.kind==="local").length} local`,h[2].textContent=`${a?.browser??o.calls.filter(d=>d.kind==="browser").length} browser`,h[3].textContent=`${a?.files??o.fileChanges?.length??0} files`,l.alerts.textContent=xT(o).join("  "),c.addEventListener("click",()=>{ta(o.id,yt.get(o.id))}),s.append(c)}),Op.replaceChildren(s)}function _T(n){let e=Dg(`prompt-row compaction-row ${n.id===nt?"active":""}`),{row:t,meta:i}=e;return t.dataset.compactionId=n.id,e.title.textContent=n.title,e.count.textContent="COMPACT",i[0].textContent=`${n.replacedMessageCount} messages`,i[1].textContent=n.encrypted?"encrypted":"plain text",i[2].textContent=`event ${n.eventIndex}`,i[3].textContent=n.reason||"context checkpoint",e.alerts.textContent="compacted",t.addEventListener("click",()=>{tt=null,bt==="inspect"?Pr({preserveCamera:!0}):is({preserveCamera:!0}),li(),ss(yt.get(n.id))}),t}function Dg(n){let e=document.createElement("button");return e.type="button",e.className=n,e.innerHTML='<span class="prompt-row-title"></span><span class="prompt-row-count"></span><span class="prompt-row-meta"><span></span><span></span><span></span><span></span></span><span class="prompt-row-alerts"></span>',{row:e,title:se(".prompt-row-title",e),count:se(".prompt-row-count",e),meta:e.querySelectorAll(".prompt-row-meta span"),alerts:se(".prompt-row-alerts",e)}}function xT(n){let e=0,t=0,i=0;n.calls.forEach(h=>{let d=u_(h);d.includes("error")&&(e+=1),d.includes("artifact")&&(t+=1),/(file|read|write|rg|patch)/.test(d)&&(i+=1)});let s=n.fileChanges?.length??0,r=vT(n.fileChanges),o=[];e&&o.push(_c(e,"error")),t&&o.push(_c(t,"artifact")),(i||s)&&o.push(`${i+s} file ops`);let a=r.add,l=r.update,c=r.delete;return(a||l||c)&&o.push(`+${a} ~${l} -${c}`),n.images.length&&o.push(_c(n.images.length,"image")),n.assistantMessages.length&&o.push(_c(n.assistantMessages.length,"message")),o.length?o:["clean"]}function _c(n,e){return`${n} ${e}${n===1?"":"s"}`}function vT(n=[]){let e={add:0,update:0,delete:0,move:0};return n.forEach(t=>{e[Bc(t)]+=1}),e}function Bc(n){return wM.includes(n.changeType)?n.changeType:"update"}function yT(n){return Sn?ST(n).includes(Sn):!0}function ST(n){let e=Oh.get(n.id);if(e)return e;let t=`${n.title} ${n.text} ${n.calls.map(i=>`${i.name} ${i.argumentPreview} ${i.outputPreview||""}`).join(" ")} ${(n.fileChanges||[]).map(c_).join(" ")} ${n.assistantMessages.map(i=>i.text).join(" ")}`.toLowerCase();return Oh.set(n.id,t),t}function MT(n){return Sn?`${n.title} ${n.text} ${n.detail} compacted compaction checkpoint`.toLowerCase().includes(Sn):!0}function bT(){let n=performance.now(),e=n/1e3,t=Math.min(e-em,.04);em=e,gc+=t;let i=kT(t);VT(n),XT(gc,n),(i||Nr)&&hd(),i&&kc(),zT(n,gc),GT(n,gc),ET(t),Qe.update(),BT(),bi?.render(Ln,je)}function ET(n){let e=(Ti.has("KeyW")?1:0)-(Ti.has("KeyS")?1:0),t=(Ti.has("KeyD")?1:0)-(Ti.has("KeyA")?1:0);if(!e&&!t||(OT(),je.getWorldDirection(Wn),Ho.crossVectors(Wn,je.up).normalize(),Zi.set(0,0,0).addScaledVector(Wn,e).addScaledVector(Ho,t),Zi.lengthSq()<1e-6))return;let i=je.position.distanceTo(Qe.target),s=Math.min(Kb,Math.max(Jb,i*jb)),r=Kw()?s*Qb:s;Zi.normalize().multiplyScalar(r*n),je.position.add(Zi),Qe.target.add(Zi)}function TT(n){n.preventDefault()}function wT(n){let e=n.deltaMode===WheelEvent.DOM_DELTA_PAGE?window.innerHeight:n.deltaMode===WheelEvent.DOM_DELTA_LINE?16:1,t=Math.max(-Zp,Math.min(Zp,n.deltaY*e/Zb));Math.abs(t)<.001||($h(-t*Ph),n.preventDefault())}function AT(n){n.button!==2||Ar(n.target)||CT()}function CT(){if(!(document.pointerLockElement===dt||typeof dt.requestPointerLock!="function"))try{dt.requestPointerLock()?.catch(ns)}catch(n){ns(n)}}function RT(n){document.pointerLockElement===dt&&(Oc?(Fg(n.movementX,n.movementY),n.preventDefault()):nd&&(NT(n.movementX,n.movementY),n.preventDefault()))}function IT(n){n.button===0?nd=!1:n.button===2&&cd(),(n.buttons&3)===0&&LT()}function PT(){document.pointerLockElement!==dt&&(nd=!1,cd())}function LT(){document.pointerLockElement===dt&&typeof document.exitPointerLock=="function"&&document.exitPointerLock()}function NT(n,e){if(!n&&!e)return;let t=Math.max(1,je.position.distanceTo(Qe.target)),i=2*Math.tan(Io.degToRad(je.fov*.5))*t/Math.max(1,dt.clientHeight);je.getWorldDirection(Wn),Ho.crossVectors(Wn,je.up).normalize(),Dh.crossVectors(Ho,Wn).normalize(),Zi.copy(Ho).multiplyScalar(-n*i).addScaledVector(Dh,e*i),je.position.add(Zi),Qe.target.add(Zi),Qe.update()}function DT(n){if(!(n.button!==2||!FT(n))){Oc=!0,Qo=n.pointerId,zh=n.clientX,Hh=n.clientY,ud();try{dt.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}}function UT(n){if(!Oc||n.pointerId!==Qo||document.pointerLockElement===dt)return;let e=n.clientX-zh,t=n.clientY-Hh;zh=n.clientX,Hh=n.clientY,Fg(e,t),n.preventDefault()}function Ug(n){n.pointerId===Qo&&(cd(n.pointerId),n.preventDefault())}function Fg(n,e){!n&&!e||(Uo.setFromQuaternion(je.quaternion,"YXZ"),Uo.y-=n*Jp,Uo.x=Math.max(-Kp,Math.min(Kp,Uo.x-e*Jp)),je.quaternion.setFromEuler(Uo),ud())}function cd(n=Qo){Oc=!1,Qo=null;try{n!=null&&dt.hasPointerCapture(n)&&dt.releasePointerCapture(n)}catch{}}function FT(n){return!(bt==="overview"&&Tr==="two-d")&&!Ar(n.target)}function OT(){je.position.distanceTo(Qe.target)>tg&&ud()}function ud(){let n=Math.min(tg,Math.max(nE,je.position.distanceTo(Qe.target)));je.getWorldDirection(Wn),Qe.target.copy(je.position).addScaledVector(Wn,n),Qe.update()}function BT(){Ir.position.x=Math.round(Qe.target.x/pc)*pc,Ir.position.z=Math.round(Qe.target.z/pc)*pc}function kT(n){let e=1-Math.pow(.001,n),t=!1;return Be.forEach(i=>{i.position.distanceToSquared(i.target)<4e-6||(i.position.lerp(i.target,e),i.matrixDirty=!0,t=!0)}),t}function VT(n){let e=!1;Be.forEach(t=>{t.isNew&&!Ns(t,n)&&(t.isNew=!1,t.matrixDirty=!0,e=!0)}),e&&Qt()}function zT(n,e){let t=Be.filter(o=>o.type==="compaction"&&Ns(o,n)),i=new Map;t.forEach(o=>{i.set(o.id,{position:o.position,eventIndex:o.eventIndex,progress:dd(o,n),inProgress:!1})});let s=jo?HT():null;if(s){let o=Cc?n-Cc:0;i.set(Rr,{position:s.position,eventIndex:s.eventIndex,progress:o/2200%1,inProgress:!0})}let r=new Set(i.keys());Tg(Uh,Yo,r),i.forEach((o,a)=>{let l=Ag(Uh,a,bb,Yo,lE,Rc.compaction),c=o.inProgress?.82:Math.sin(Math.min(1,o.progress)*Math.PI);l.forEach((h,d)=>{let u=(o.progress+h.userData.offset)%1,f=Math.pow(1-u,o.inProgress?1.35:1.8)*(.18+c*.56);h.position.set(o.position.x,o.position.y-(o.inProgress?.82:.66),o.position.z),h.scale.setScalar(o.inProgress?1.45+u*6.2+Math.sin(e*5.2)*.16:1.2+u*8.4),h.rotation.z=e*(o.inProgress?-.9:.45)+o.eventIndex*.01+d*.72,h.material.opacity=f,h.visible=f>.012})})}function HT(){let n=yt.get(Rr);if(n)return n;if(tt){let e=yt.get(tt);if(e?.type==="prompt")return e}return xd()??Hg()??zg()}function GT(n,e){let t=Be.filter(o=>o.type==="prompt"&&Ns(o,n)),i=$n.assistantStreaming?xd():null,s=WT(i?[...t,i]:t),r=new Set(s.map(o=>o.id));Tg(Fh,Zo,r),s.forEach(o=>{let a=Ag(Fh,o.id,Eb,Zo,cE,Rc.prompt),l=dd(o,n),c=Math.sin(Math.min(1,l)*Math.PI);a.forEach((h,d)=>{let u=(l+h.userData.offset)%1,f=Math.pow(1-u,1.55)*(.1+c*.38);h.position.set(o.position.x,o.position.y-.74,o.position.z),h.scale.set(1+u*3.2,1+u*5.4,1),h.rotation.z=e*.72+o.eventIndex*.012+d*Math.PI*.5,h.material.opacity=f,h.visible=f>.01})})}function WT(n){let e=new Set;return n.filter(t=>e.has(t.id)?!1:(e.add(t.id),!0))}function $T(){if(!Be.length)return;let n=new Rt;n.setAttribute("position",new Bt(new Float32Array(Be.length*3),3)),n.setAttribute("color",new Bt(new Float32Array(Be.length*3),3)),n.boundingSphere=new nn(new I,600);let e=new rr({size:3,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1}),t=new so(n,e);t.renderOrder=5,t.userData.nodes=Be,on=t,Ln.add(t),Nr=!0,hd()}function hd(){if(!on)return;let n=on.geometry.getAttribute("position"),e=n.array;Be.forEach((t,i)=>{let s=i*3;gd(t)?(e[s]=t.position.x,e[s+1]=t.position.y,e[s+2]=t.position.z):(e[s]=0,e[s+1]=jm,e[s+2]=0)}),n.needsUpdate=!0,Nr&&Vg()}function XT(n,e){Object.values(ri).forEach(t=>{if(!t)return;let i=!1;t.userData.nodes.forEach((s,r)=>{let o=Ns(s,e),a=s.id===nt;!s.matrixDirty&&!o&&!a||(Og(t,s,r,n,e,o,a),s.matrixDirty=!1,i=!0)}),i&&(t.instanceMatrix.needsUpdate=!0)})}function Og(n,e,t,i,s=performance.now(),r=Ns(e,s),o=e.id===nt){let a=dd(e,s),l=r&&e.type==="compaction",c=r?l?.18+xm(a)*1.08:.26+xm(a)*.74:1,h=l?.28:.16,d=r?1+Math.max(0,Math.sin(i*(l?14:9)+e.eventIndex))*h:1,u=(o?1.18:r?1+Math.sin(i*2.3+e.eventIndex)*.018:1)*d;vs.position.copy(e.position),bt==="inspect"||!r&&!o?vs.rotation.set(0,0,0):l?vs.rotation.set(i*1.45,i*2.2+e.eventIndex*.03,i*1.1):vs.rotation.set(.08*Math.sin(i+e.eventIndex),i*.2+e.eventIndex*.07,0),vs.scale.setScalar(e.scale*c*u),vs.updateMatrix(),n.setMatrixAt(t,vs.matrix)}function Ns(n,e){return!!(n.freshUntil&&n.freshUntil>e)}function dd(n,e){return!n.freshUntil||n.freshUntil<=e?1:Math.max(0,Math.min(1,1-(n.freshUntil-e)/td))}function xm(n){return 1-Math.pow(1-n,3)}function kc(){if(!oi)return;let n=oi.geometry.getAttribute("position"),e=n.array,t=0,i=(s,r)=>{let o=t*6;e[o]=s.x,e[o+1]=s.y,e[o+2]=s.z,e[o+3]=r.x,e[o+4]=r.y,e[o+5]=r.z,t+=1};Jo.forEach(s=>{let r=yc(s),o=Sc(s),a=yt.get(r),l=yt.get(o);if(!a||!l)return;let c=a.position;Array.isArray(s)||s.waypoints.forEach(h=>{i(c,h),c=h}),i(c,l.position)}),oi.geometry.setDrawRange(0,t*2),n.needsUpdate=!0}function qT(n){fd(n);let e=Bg();e&&ss(e)}function YT(n){fd(n);let e=Bg();if(e){if(e.type==="compaction"){tt=null,bt="overview",is(),li(),ss(e);return}e.type==="prompt"?ta(e.id,e):ta(e.promptId,e)}}function fd(n){let e=dt.getBoundingClientRect();Nh.x=(n.clientX-e.left)/e.width*2-1,Nh.y=-((n.clientY-e.top)/e.height*2-1)}function Bg(){Lh.setFromCamera(Nh,je);let n=Object.values(ri).filter(t=>!!t);on&&n.push(on);let e=Lh.intersectObjects(n,!1);for(let t of e){if(t.object===on&&t.index!==void 0)return on.userData.nodes[t.index]||null;if(t.instanceId!==void 0)return t.object.userData.nodes[t.instanceId]||null}return null}function ci(n){let e=JSON.stringify(n??{},null,2);Fm.textContent=e,HM.textContent=`${Math.max(1,Math.round(e.length/1024))} KB`}function ss(n,{restartStream:e=!0,reveal:t=!0}={}){if(!n)return;nt=n.id,t&&$g(),Qt(),qh.textContent=n.kind.toUpperCase(),Jh.textContent=n.type==="prompt"?`PROMPT ${n.promptIndex+1}`:n.type==="compaction"?`CHECKPOINT ${n.eventIndex}`:n.type==="fileChange"?`FILE ${n.eventIndex}`:n.type==="message"?`ASSISTANT ${n.eventIndex}`:`TURN ${n.eventIndex}`,Kh.textContent=NM(n),Qh.textContent=n.title,Yh.textContent=n.title,ci(n.source),Fr(),pd(DM(n));let i=n.detail||n.body||n.title;e&&kg(i)}function kg(n){_r&&clearInterval(_r);let e=n.split(`
`),t=0;Ah.textContent="",_r=setInterval(()=>{let i=e.slice(t,t+2);if(!i.length){_r&&clearInterval(_r),_r=null;return}Ah.textContent+=`${i.join(`
`)}
`,t+=2},34)}function pd(n=[]){if(Mh.replaceChildren(),!n.length){let t=document.createElement("div");t.className="stream-image-placeholder",t.textContent="No event media available; inspect Timeline, Transcript, or Raw for auditable evidence.",Mh.append(t);return}let e=document.createDocumentFragment();n.forEach((t,i)=>{let s=document.createElement("figure"),r=ZT(t),o=document.createElement("a");o.className="stream-image-link",o.href=r,o.target="_blank",o.rel="noopener",o.title=`Prompt image ${i+1}`;let a=document.createElement("img");a.loading="eager",a.decoding="async",a.src=r,a.alt=`Prompt image ${i+1}`,a.addEventListener("load",()=>{s.classList.add("loaded"),s.classList.remove("load-error")}),a.addEventListener("error",()=>{s.classList.add("load-error"),l.textContent="Image unavailable in this local/privacy context; use Raw or Export for redacted evidence."});let l=document.createElement("figcaption"),c=t.detail?` (${t.detail})`:"";l.textContent=`${t.mimeType||"image"}${c}`,o.append(a),s.append(o,l),e.append(s)}),Mh.append(e)}function ZT(n){let e=new URL(n.url,window.location.origin),t=Ee?.lastModifiedAt||Ee?.generatedAt||`${n.eventIndex}`,i=yn||Ee?.sessionPath||null;return e.searchParams.set("v",t),i&&e.searchParams.set("session",i),Ic&&e.searchParams.set("token",Ic),`${e.pathname}${e.search}`}function Qt(){Be.forEach(n=>{n.matrixDirty=!0}),Object.values(ri).forEach(n=>{n&&(n.userData.nodes.forEach((e,t)=>{n.setColorAt(t,md(e,e.id===nt))}),n.instanceColor&&(n.instanceColor.needsUpdate=!0))}),Nr=!0,Vg()}function Vg(){if(!on)return;let n=on.geometry.getAttribute("color"),e=n.array;Be.forEach((t,i)=>{let s=i*3,r=md(t,t.id===nt);e[s]=r.r,e[s+1]=r.g,e[s+2]=r.b}),n.needsUpdate=!0,Nr=!1}function md(n,e){let t=Rc[n.kind]??Rc.tool;return ys.setHex(t),gd(n)?e?ys.lerp(jp,.38):n.isNew?ys.lerp(jp,.24):bt==="inspect"&&n.promptId!==tt?ys.multiplyScalar(.34):(ai&&!sa(n,ai)||!cA(n))&&ys.multiplyScalar(.38):ys.setRGB(0,0,0),ys}function gd(n){return bt!=="inspect"||!tt||n.promptId===tt}function _d(){let n=dt.getBoundingClientRect(),e=Math.max(1,Math.floor(n.width)),t=Math.max(1,Math.floor(n.height));bi?.setSize(e,t,!1),bi?.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),je.aspect=e/t,je.updateProjectionMatrix()}function Ps({preserveDistance:n=!1}={}){if(!Be.length||bt!=="overview")return;let e=vd(),t=je.aspect<.75,i=Math.max(18,je.position.distanceTo(Qe.target)),s=n?Math.min(90,i):t?Tr==="two-d"?_b:gb:Tr==="two-d"?Km:mb,r=e?JT(e):Dh.set(0,0,0);Qe.target.set(r.x,r.y,r.z),Tr==="two-d"?je.position.set(r.x,r.y+s,r.z+.01):je.position.set(r.x+s*.38,r.y+s*.68,r.z+s*.58),Qe.update()}function JT(n){let e=Be.filter(l=>l.promptId===n.promptId&&gd(l));if(e.length<=1)return Lc(n);let t=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;return e.forEach(l=>{let c=Lc(l);t=Math.min(t,c.x),i=Math.max(i,c.x),s=Math.min(s,c.y),r=Math.max(r,c.y),o=Math.min(o,c.z),a=Math.max(a,c.z)}),new I((t+i)/2,(s+r)/2,(o+a)/2)}function Lc(n){return n.home??n.target}function KT(){let n=vd();return n?Lc(n):null}function zg(){return Be.reduce((n,e)=>!n||e.eventIndex>=n.eventIndex?e:n,null)}function xd(){return Be.reduce((n,e)=>e.type!=="prompt"?n:!n||e.eventIndex>=n.eventIndex?e:n,null)}function jT(){return Be.reduce((n,e)=>e.type!=="prompt"||e.id===Cs?n:!n||e.eventIndex>=n.eventIndex?e:n,null)}function Hg(){let n=Ee?ad(Ee).at(-1):null;if(!n)return null;let e=n.type==="prompt"?n.prompt.id:n.compaction.id;return yt.get(e)??null}function vd(){let n=Hg();if(n?.type==="prompt")return n.id===Cs?jT()??n:n;if(tt){let e=yt.get(tt);if(e?.type==="prompt")return e}return xd()??n??zg()}function Gg(){Vc();let n=Ee,e=n?.prompts.at(-1);qh.textContent="SESSION",Jh.textContent=n?`${n.totals.promptCount} prompts`:"Loading",Kh.textContent=n?.lastModifiedAt||"Live context",Qh.textContent=n?.ui.sessionName||"Session overview",Yh.textContent=e?.title||n?.ui.sessionName||"Session overview",Ah.textContent=Sd(),pd(),ci(Ee?.totals)}function Wg(){ci(Ee?.totals)}function $g(){if(!QT()){Vc();return}na.classList.remove("hidden"),Zg()}function QT(){return It==="map"}function Xg(){return!na.classList.contains("hidden")}function Vc(){na.classList.add("hidden"),Fr()}function yd(){if(!nt)return null;let n=yt.get(nt);if(!n)return null;let e=Hc().find(t=>t.node?.id===n.id||t.eventIndex===n.eventIndex);return e?{node:n,row:e}:{node:n}}function qg(){let n=yd();return n?ew(n.row??jg(n.node)):null}function ew(n){let e=Pt();return Np({source:vn(e.source),lineNumber:n.lineNumber,eventIndex:n.eventIndex,kind:[n.role,n.eventType,n.toolName].filter(Boolean).join(" / "),summary:tw(n),parserVersion:e.parserVersion,schemaVersion:e.schemaVersion})}function tw(n){return Lp({role:n.role,eventType:n.eventType,toolName:n.toolName,filePath:n.filePath,rawSummary:nw(n)})}function nw(n){return[n.title,n.detail].filter(Boolean).join(" - ")}function Fr(){let n=!!yd();na.classList.toggle("has-selection",n);for(let e of[Xo,Pm,Lm,Nm])e.disabled=!n;n||(Xo.textContent="Copy Safe Ref")}async function iw(){let n=qg();if(!n){Fr();return}try{await navigator.clipboard.writeText(n),Xo.textContent="Copied",window.setTimeout(()=>{Xo.textContent="Copy Safe Ref"},1200)}catch(e){Pn("COPY","Copy failed",Lr(e))}}function sw(){let n=qg();if(!n){Pn("COPY","Select an event first","Open Map or Timeline and select an event before copying a safe reference.");return}rs(n,"Copy-safe reference copied")}function rw(n){let e=n.shareabilitySummary,t=n.privacySummary,i=n.parserHealth;return Dp({source:vn(n.source),sessionName:n.ui.sessionName||n.sessionPath||`${vn(n.source)} session`,totalTurns:n.ui.totalTurns,callCount:n.totals.callCount,fileChangeCount:n.totals.fileChangeCount,latestEventIndex:n.latestEventIndex,parserVersion:n.parserVersion,schemaVersion:n.schemaVersion,cliContext:[n.metadata.originator,n.metadata.cliVersion].filter(Boolean).join(" ")||null,rawLogsSafeToShare:e.rawLogsSafeToShare,rawLogCaution:e.rawLogCaution,sanitizedGraphNote:e.sanitizedGraphNote,redactedFieldCount:i.redactedFieldCount,imageCount:i.imageCount,apiTokenRequired:t.apiTokenRequired})}function zc(n){let e=yd();if(!e){Fr();return}let t=e.node.id,i=e.node.promptId,s=e.row?.source??e.node.source;Yt(n),nt=t,tt=i,ci(s),Qt(),n!=="map"&&Or()}function Yg(n){Ms=n,Zg()}function Zg(){na.classList.toggle("compact",Ms),Bo.textContent=Ms?"+":"_",Bo.title=Ms?"Expand context":"Minimize context",Bo.setAttribute("aria-label",Ms?"Expand context":"Collapse context"),Bo.setAttribute("aria-expanded",String(!Ms))}function As(n,e){for(let t of n)t.classList.toggle("active",e(t))}function Jg(){As(Zm,n=>n.dataset.source===Rs)}async function ow(n){let e=sg(n);if(e===Rs)return;Xc(),Rs=e,yn=null,Gn=null,jt=null,Ei=null,xn=null,Ts=null,Jg(),ia(),lg();let t=Ls;await id({generation:t}),await Ur({suppressLiveAnimation:!0}),Is(t)&&$c()}function Sd(){return Ee?[`${vn(Ee.source)} session`,`Prompts: ${Ee.totals.promptCount}`,`Turns: ${Ee.ui.totalTurns}`,`Calls: ${Ee.totals.callCount}`,`Completed calls: ${Ee.totals.completedCallCount}`,`Messages: ${Ee.totals.assistantMessageCount}`,`File changes: ${Ee.totals.fileChangeCount}`,`Context: ${n_(Ee.tokenTelemetry)}`,`Compactions: ${Ee.totals.compactionCount}`,`Unknown events: ${Ee.parserHealth?.unknownEventCount??0}`,`Malformed lines: ${Ee.parserHealth?.malformedLineCount??0}`,`Codex: ${[Ee.metadata.originator,Ee.metadata.cliVersion].filter(Boolean).join(" ")||"unknown"}`,`Model: ${Ee.metadata.model||Ee.metadata.modelProvider||"unknown"}`,`Records: ${Ee.lineCount}`,`Session file: ${en(Ee.sessionPath)||Ee.sessionPath}`].join(`
`):"Waiting for session data"}function Md(){let n=It!=="map";ib.classList.toggle("hidden",!n),Jm.classList.toggle("mode-panel-active",n)}function Or(){if(Md(),It!=="map"){if(sb.textContent=vn(Ee?.source??Rs),rb.textContent=aw(It),ob.classList.toggle("hidden",It!=="timeline"),!Ee){ln.textContent="Waiting for session data",Vt.replaceChildren(an("Waiting for session data."));return}switch(It){case"summary":lw();return;case"timeline":dw();return;case"transcript":_w();return;case"health":e_();return;case"insights":yw();return;case"diff":zo();return;case"raw":Sw();return;case"export":Mw();return;case"settings":bw();return}}}function aw(n){return n.charAt(0).toUpperCase()+n.slice(1)}function lw(){if(!Ee){ln.textContent="Waiting for session data",Vt.replaceChildren(an("Waiting for session data."));return}let n=Pt(),e=Ee.privacySummary,t=Ee.shareabilitySummary,i=n.tokenTelemetry,s=n.parserHealth,r=n.ui.sessionName||n.cwd?.split(/[\\/]/).filter(Boolean).at(-1)||`${vn(n.source)} session`,o=t.rawLogsSafeToShare?"Raw logs marked safe to share":"Raw logs require review before sharing";ln.textContent=`${o} - ${n_(i)}`;let a=document.createElement("div");a.className="summary-shell";let l=Ze("Session Summary");l.classList.add("summary-hero"),l.append(ea(`${r} is a ${vn(n.source)} trace with ${n.ui.totalTurns.toLocaleString()} turns, ${n.totals.callCount.toLocaleString()} tool calls, and ${n.totals.fileChangeCount.toLocaleString()} file changes.`),ea(`${o}. Sanitized graph/export and copy-safe references reduce exposure compared with raw logs, but they still require human judgment before sharing.`));let c=document.createElement("div");c.className="summary-triage";let h=Ze("What Happened",[`${n.ui.totalTurns.toLocaleString()} turns across ${n.totals.promptCount.toLocaleString()} prompts`,`${n.totals.completedCallCount.toLocaleString()} completed tool calls; ${n.totals.fileChangeCount.toLocaleString()} file changes`,`${s.unknownEventCount.toLocaleString()} unknown and ${s.malformedLineCount.toLocaleString()} malformed parser records`]),d=document.createElement("div");d.className="mode-actions",d.append(ct("Open Timeline",()=>Yt("timeline")),ct("Read Transcript",()=>Yt("transcript"))),h.append(d);let u=Ze("Safe To Share",[o,t.sanitizedGraphNote||"Sanitized graph data is intended for UI and report sharing after review.",e.apiTokenRequired?"Local API token is required for browser/API access; token value is not shown.":"No local API token required by this run."]),f=document.createElement("div");f.className="mode-actions",f.append(ct("Copy Share Summary",()=>rs(rw(n),"Copy-safe share summary copied")),ct("Open Export",()=>Yt("export")),ct("Audit Raw",()=>Yt("raw"))),u.append(f),c.append(h,cw(n.insights),u);let g=document.createElement("div");g.className="summary-shell-grid",g.append(xr("Session",[["Source",vn(n.source)],["Session",r],["Model",n.metadata.model||n.metadata.modelProvider||"unknown"],["CLI",[n.metadata.originator,n.metadata.cliVersion].filter(Boolean).join(" ")||"unknown"],["Records",dc(n.lineCount,n.pendingBytes)],["Size",fc(n.byteLength)],["Modified",yh(n.lastModifiedAt)||"unknown"],["Path",en(n.sessionPath)||n.sessionPath]]),xr("Activity",[["Prompts",n.totals.promptCount.toLocaleString()],["Turns",n.ui.totalTurns.toLocaleString()],["Tool calls",`${n.totals.completedCallCount.toLocaleString()} / ${n.totals.callCount.toLocaleString()} completed`],["Assistant messages",n.totals.assistantMessageCount.toLocaleString()],["File changes",n.totals.fileChangeCount.toLocaleString()],["Compactions",n.totals.compactionCount.toLocaleString()],["Dynamic tools",n.metadata.dynamicTools.length?n.metadata.dynamicTools.map(y=>y.name).slice(0,5).join(", "):"none logged"]]),xr("Privacy",[["Mode",e.privacyMode||"unknown"],["Redaction profile",e.redactionProfile||"default"],["API token required",e.apiTokenRequired?"yes":"no"],["Images",e.imageRouteBehavior||"not logged"],["Telemetry",e.noTelemetry?"disabled":"check deployment settings"],["Third-party uploads",e.noThirdPartyUploads?"disabled":"check before sharing"]]),xr("Shareability",[["Raw logs",t.rawLogsSafeToShare?"safe to share":"review/redact first"],["Raw caution",t.rawLogCaution||"Review prompts, paths, and tool output before sharing raw logs."],["Sanitized graph",t.sanitizedGraphNote||"Use sanitized graph/export surfaces for sharing."],["Redacted fields",s.redactedFieldCount.toLocaleString()],["Images",s.imageCount.toLocaleString()]]),xr("Parser Health",[["Parser",`${s.parserVersion} / ${s.schemaVersion}`],["Renderable events",s.renderableEventCount.toLocaleString()],["Unknown events",s.unknownEventCount.toLocaleString()],["Malformed lines",s.malformedLineCount.toLocaleString()],["Skipped payloads",s.skippedLargePayloadCount.toLocaleString()],["Warnings",s.warnings.length.toLocaleString()]]),xr("Token Context",[["Telemetry",i.latestTotalTokens?"available":"not logged"],["Latest tokens",i.latestTotalTokens?.toLocaleString()??"n/a"],["Context window",i.contextWindow?.toLocaleString()??"n/a"],["Context pressure",gr(i.latestContextPercent)],["Primary rate limit",gr(i.primaryRateLimitPercent)],["Secondary rate limit",gr(i.secondaryRateLimitPercent)]])),a.append(l,c,g),(s.warnings.length||n.insights.warnings.length)&&a.append(Ze("Warnings",[...s.warnings,...n.insights.warnings].slice(0,10))),Vt.replaceChildren(a)}function xr(n,e){let t=document.createElement("article");t.className="summary-fact";let i=document.createElement("h3");i.textContent=n;let s=document.createElement("dl");return e.forEach(([r,o])=>{let a=document.createElement("dt");a.textContent=r;let l=document.createElement("dd");l.textContent=o,s.append(a,l)}),t.append(i,s),t}function cw(n){let e=Ze("Inspect First");e.classList.add("summary-insights");let t=n.inspectionQueue.slice(0,3);if(!t.length)return e.append(ea("No high-priority findings detected. Parser health and raw inspection remain available for audit."),vm([ct("Open Insights",()=>Yt("insights")),ct("Audit Raw",()=>Yt("raw"))])),e;let i=ea("Top queued findings are ready for inspect-first review; each evidence action routes to an existing panel and falls back clearly when no event line is logged."),s=document.createElement("div");return s.className="summary-insight-list",t.forEach((r,o)=>{let a=document.createElement("article");a.className=`summary-insight severity-${r.severity}`;let l=document.createElement("div"),c=document.createElement("strong");c.textContent=`${o+1}. ${r.title}`;let h=document.createElement("small");h.textContent=uw(r);let d=document.createElement("p");d.textContent=r.redactionSafeSummary||r.summary,l.append(c,h,d);let u=vm([ct("Open Insights",()=>Kg(r)),ct("Timeline Evidence",()=>wh(r,"timeline")),ct("Transcript Evidence",()=>wh(r,"transcript")),ct("Raw Evidence",()=>wh(r,"raw"))]);a.append(l,u),s.append(a)}),e.append(i,s),e}function vm(n){let e=document.createElement("div");return e.className="mode-row-actions",e.append(...n),e}function uw(n){let e=bd(n),t=n.eventIds.length?`${n.eventIds.length.toLocaleString()} linked events`:"no linked event ids",i=e?`line ${e}`:"no event line logged";return[n.severity,n.confidence,n.directness,i,t].filter(Boolean).join(" - ")}function bd(n){return n.lineNumbers.find(e=>Number.isFinite(e)&&e>0)??null}function hw(n){let e=Hc(),t=bd(n),i=t?e.find(r=>r.lineNumber===t):null;if(i)return i;if(!n.eventIds.length)return null;let s=new Set(n.eventIds);return e.find(r=>s.has(r.id)||(r.node?s.has(r.node.id):!1))??null}function Kg(n){Yt("insights"),ci(n),ln.textContent=`Queued insight selected - ${n.title}`;let e=an("Selected insight loaded in Raw for audit; use evidence actions to jump into Timeline, Transcript, or Raw rows when line/event data is available.");e.classList.add("mode-notice"),Vt.prepend(e)}function wh(n,e){let t=hw(n);if(t){Wc(t.lineNumber,n.title,n,e);return}let i=bd(n)||n.eventIds.length?"Logged evidence did not match a rendered Timeline or Transcript row; showing the queued insight instead.":"No event line is logged for this insight; showing the queued insight instead.";Kg(n),Ed(n.title,n,i)}function dw(){let n=Hc();fw(n);let e=n.filter(pw),t=e.slice(0,600);if(ln.textContent=`${e.length} of ${n.length} events`,!t.length){Vt.replaceChildren(an("No timeline events match the current filters."));return}let i=document.createDocumentFragment(),s=document.createElement("div");s.className="mode-actions",s.append(ct("Copy Safe Reference",()=>sw())),i.append(s),t.forEach(r=>i.append(mw(r))),e.length>t.length&&i.append(an(`${e.length-t.length} additional events hidden; narrow filters or search to inspect them.`)),Vt.replaceChildren(i)}function Hc(){if(!Ee)return[];let n=Be.map(jg);for(let e of Ee.parserHealth.unknownEvents||[])n.push({id:`unknown-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"unknown",eventType:e.sourceEventType,toolName:"",filePath:"",title:`Unknown event ${e.sourceEventType}`,detail:e.preview,timestamp:null,flags:["unknown"],source:e});for(let e of Ee.parserHealth.malformedLines||[])n.push({id:`malformed-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"malformed",eventType:"malformed_jsonl",toolName:"",filePath:"",title:e.error,detail:e.preview,timestamp:null,flags:["malformed"],source:e});for(let e of Ee.parserHealth.skippedLargePayloads||[])n.push({id:`skipped-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"parser",eventType:"skipped_large_payload",toolName:"",filePath:"",title:e.reason,detail:`${e.byteLength.toLocaleString()} bytes`,timestamp:null,flags:["large"],source:e});return n.sort((e,t)=>e.eventIndex-t.eventIndex||e.lineNumber-t.lineNumber),n}function jg(n){let e=n.type==="prompt"?"user":n.type==="message"?"assistant":n.type==="call"?"tool":n.type==="fileChange"?"file":"system",t=n.type==="call"?n.source.name:"",i=n.type==="fileChange"?n.source.path:"",s=[n.detail,n.body].filter(Boolean).join(`
`),r=new Set;(sa(n,"error")||Ow(`${n.title} ${s}`))&&r.add("error"),n.type==="call"&&n.source.durationMs!==null&&n.source.durationMs>3e4&&r.add("long"),n.type==="fileChange"&&r.add("file"),n.type==="compaction"&&r.add("compaction"),`${n.title} ${s}`.includes("[REDACTED")&&r.add("redacted");let o=n.type==="call"&&n.source.durationMs!==null?Ip(n.source.durationMs):"";return{id:n.id,eventIndex:n.eventIndex,lineNumber:n.eventIndex+1,role:e,eventType:n.type==="fileChange"?`file_${n.source.changeType}`:n.type,toolName:t,filePath:i,title:n.title,detail:[o,s].filter(Boolean).join(`
`),timestamp:n.type==="call"?n.source.startedAt||n.source.completedAt:n.source.timestamp,flags:[...r],source:n.source,node:n}}function fw(n){xc(bc,"All roles",n.map(e=>e.role)),xc(Ec,"All types",n.map(e=>e.eventType)),xc(Tc,"All tools",n.map(e=>e.toolName).filter(Boolean)),xc(wc,"All files",n.map(e=>en(e.filePath)||e.filePath).filter(Boolean))}function xc(n,e,t){let i=n.value,s=[...new Set(t)].sort((a,l)=>a.localeCompare(l)),r=document.createDocumentFragment(),o=document.createElement("option");o.value="",o.textContent=e,r.append(o),s.forEach(a=>{let l=document.createElement("option");l.value=a,l.textContent=a,r.append(l)}),n.replaceChildren(r),n.value=s.includes(i)?i:""}function pw(n){if(bc.value&&n.role!==bc.value||Ec.value&&n.eventType!==Ec.value||Tc.value&&n.toolName!==Tc.value)return!1;let e=en(n.filePath)||n.filePath;return wc.value&&e!==wc.value||Gm.checked&&!n.flags.includes("error")||Wm.checked&&!n.flags.includes("unknown")||$m.checked&&!n.flags.includes("malformed")||Xm.checked&&!n.flags.includes("redacted")?!1:Sn?[n.role,n.eventType,n.toolName,n.filePath,n.title,n.detail,n.flags.join(" ")].join(" ").toLowerCase().includes(Sn):!0}function mw(n){let e=document.createElement("button");e.type="button",e.className=`mode-row ${n.node?.id===nt?"active":""}`;let t=document.createElement("code");t.textContent=[`L${n.lineNumber}`,gw(n.timestamp)].filter(Boolean).join(`
`);let i=document.createElement("small");i.textContent=[n.role,n.eventType,n.toolName].filter(Boolean).join(" / ");let s=document.createElement("strong");s.textContent=n.title;let r=document.createElement("small");return r.textContent=Td([n.filePath,n.detail].filter(Boolean).join(" - "),260),e.append(t,i,s,r),e.addEventListener("click",()=>Qg(n)),e}function gw(n){if(!n)return"";let e=new Date(n);return Number.isNaN(e.valueOf())?n:qm.checked?e.toISOString().replace(".000Z","Z"):e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}function Qg(n){n.node?(nt=n.node.id,tt=n.node.promptId,Qt(),ss(n.node,{reveal:!1})):Pn(n.eventType.toUpperCase(),n.title,n.detail||n.title),ci(n.source)}function _w(){let n=Pt();ln.textContent=`${n.prompts.length} turns`;let e=document.createDocumentFragment();n.prompts.forEach((t,i)=>{let s=Ze(`User ${i+1}: ${t.title}`),r=document.createElement("div");r.className="transcript-flow",xw(t).forEach(o=>{r.append(vw(o))}),s.append(r),e.append(s)}),Vt.replaceChildren(e.childNodes.length?e:an("No transcript events were parsed."))}function xw(n){let e=[];return xg(n,n.calls).forEach(t=>{if(t.type==="assistant"){e.push({label:"Assistant",title:"Response",body:t.message.text,eventIndex:t.message.eventIndex}),t.calls.forEach(i=>e.push(...ym(i)));return}e.push(...ym(t.call))}),n.fileChanges.forEach(t=>{e.push({label:"File",title:`${t.changeType}: ${t.shortPath||t.path}`,body:t.preview||t.detail,eventIndex:t.eventIndex})}),[{label:"Prompt",title:n.title,body:n.text,eventIndex:n.eventIndex},...e.sort((t,i)=>t.eventIndex-i.eventIndex)]}function ym(n){let e=n.argumentPreview||"No arguments logged.",t=n.outputPreview||(n.status==="completed"?"No result preview logged.":`Status: ${n.status}`);return[{label:"Tool",title:`${n.name} (${n.status})`,body:e,eventIndex:n.eventIndex},{label:"Result",title:n.name,body:t,eventIndex:n.eventIndex}]}function vw(n){let e=document.createElement("div");e.className="transcript-step";let t=document.createElement("code");t.textContent=n.label;let i=document.createElement("div"),s=document.createElement("strong");s.textContent=n.title;let r=ea(Td(n.body,520));return i.append(s,r),e.append(t,i),e}function e_(){let n=Pt().parserHealth;ln.textContent=`${n.unknownEventCount} unknown / ${n.malformedLineCount} malformed / ${n.skippedLargePayloadCount} skipped`,Gc();let e=document.createDocumentFragment(),t=document.createElement("div");t.className="mode-actions",t.append(ct("Copy Parser Summary",()=>rs(Rw(Pt()),"Parser health summary copied")),ct("Export Unknowns JSON",()=>Lw()),ct("Copy Issue Body",()=>Nw()),ct("Fixture Report",()=>Dw())),e.append(t);let i=document.createElement("div");i.className="mode-card-grid",i.append(Ze("Parser",[`${n.parserVersion} / ${n.schemaVersion}`,`Source confidence: ${n.sourceDetectionConfidence}`,`Parsed ${n.parsedEventCount} of ${n.totalLinesRead} lines`]),Ze("Unknown Events",[`${n.unknownEventCount} total`,...(n.unknownEventTypes||[]).map(r=>`${r.sourceEventType}: ${r.count}`)]),Ze("Malformed And Skipped",[`Malformed lines: ${n.malformedLineCount}`,`Skipped large payloads: ${n.skippedLargePayloadCount}`,...(n.malformedLines||[]).slice(0,5).map(r=>`Line ${r.lineNumber}: ${r.error}`)]),Ze("Coverage",[`Tool calls/results: ${n.toolCallCount}/${n.toolResultCount}`,`File activity: ${n.fileActivityCount}`,`Token telemetry: ${n.tokenTelemetryAvailable?"available":"not logged"}`,`Redacted fields: ${n.redactedFieldCount}`])),e.append(i);let s=Ze("Unknown Samples");s.append(Aw(n)),e.append(s),Vh?e.append(an("Preparing redacted schema-drift report...")):Ts?e.append(an(Ts)):xn&&e.append(Ze("Issue Template",[`Fixture: ${xn.suggestedFixtureName}`,`Samples: ${xn.redactedSamples.length}`,`Profile: ${xn.redactionReport.profile}`])),Vt.replaceChildren(e)}function yw(){let n=Pt().insights;ln.textContent=`${n.inspectionQueue.length} queued / ${n.repeatedPatterns.length} repeated / ${n.suspiciousToolCalls.length} suspicious`;let e=document.createDocumentFragment(),t=document.createElement("div");t.className="mode-actions",t.append(ct("Copy Insight Summary",()=>rs(Iw(n),"Insight summary copied"))),e.append(t);let i=Ze("What Should I Inspect First?");i.append(Tw(n)),e.append(i);let s=document.createElement("div");s.className="mode-card-grid",s.append(Ze("Failure Chain",n.failureChain?[`First logged error-like event: line ${n.failureChain.firstLoggedError.lineNumber} - ${n.failureChain.firstLoggedError.title}`,`Possible retries: ${n.failureChain.subsequentRetries.length}`,`File changes after first error: ${n.failureChain.fileChangesAfterFirstError.length}`,`Final logged outcome: ${n.failureChain.finalOutcome}`]:["No logged error-like event detected."]),Ze("Repeated Patterns",n.repeatedPatterns.slice(0,8).map(r=>`${r.patternType} x${r.count} lines ${r.firstLine}-${r.lastLine}: ${r.key}`)),Ze("Suspicious Tool Calls",n.suspiciousToolCalls.slice(0,8).map(r=>`Line ${r.call.lineNumber} ${r.toolName}: ${r.reason}`)),Ze("Context Pressure",[n.contextPressure.status,n.contextPressure.explanation,`High-context markers: ${n.contextPressure.highContextMarkers.length}`,`Compaction markers: ${n.contextPressure.compactionMarkers.length}`]),Ze("File Impact",[`Edited: ${n.fileImpact.filesEdited.length}`,`Read: ${n.fileImpact.filesRead.length}`,`Referenced: ${n.fileImpact.filesReferenced.length}`,...n.fileImpact.filesEdited.slice(0,6).map(r=>`${r.path} (${r.count})`)]),Ze("Approval And Sandbox",n.approvalFriction.slice(0,8).map(r=>`${r.severity}: ${r.title}`))),e.append(s),Vt.replaceChildren(e)}function zo(){let n=Pt(),t=Cw(n).filter(y=>y.path!==n.sessionPath);(!Gn||Gn===n.sessionPath||!t.some(y=>y.path===Gn))&&(Gn=t[0]?.path??null),ln.textContent=jt?`${jt.toolDelta.calls.left} -> ${jt.toolDelta.calls.right} tools / ${jt.errorDelta.errors.left} -> ${jt.errorDelta.errors.right} errors`:"Select Run B to compare";let i=document.createDocumentFragment(),s=Ze("Compare Sessions"),r=document.createElement("div");r.className="mode-control-row";let o=document.createElement("div");o.className="mode-field",o.append(Sm("Run A"),Ew(n.sessionPath));let a=document.createElement("div");a.className="mode-field",a.append(Sm("Run B"));let l=document.createElement("select");l.className="mode-select",l.setAttribute("aria-label","Run B session"),t.forEach(y=>{let m=document.createElement("option");m.value=y.path,m.textContent=ag(y),m.title=y.path,l.append(m)}),l.value=Gn??"",l.disabled=t.length===0;let c=()=>{Gn=Mm(l),jt=null,Ei=null,ln.textContent="Select Run B to compare"};l.addEventListener("change",()=>{c(),bm()}),l.addEventListener("input",c);let h=ct("Compare",()=>{Gn=Mm(l),bm()});if(h.disabled=t.length===0,a.append(l,h),r.append(o,a),s.append(r),i.append(s),t.length===0){i.append(an("No other sessions are available to compare with this run.")),Vt.replaceChildren(i);return}if(kh){i.append(an("Comparing normalized traces...")),Vt.replaceChildren(i);return}if(Ei&&i.append(an(Ei)),!jt){i.append(an("Choose a second session and compare. Diff results are redacted by default.")),Vt.replaceChildren(i);return}let d=jt,u=document.createElement("div");u.className="mode-actions",u.append(ct("Copy Summary",()=>rs(Pw(d),"Diff summary copied")),ct("Export JSON",()=>Dc("perlustron-diff.json",JSON.stringify(d,null,2),"application/json")),ct("Export HTML",()=>Dc("perlustron-diff.html",Fw(d),"text/html"))),i.append(u);let f=document.createElement("div");f.className="mode-card-grid",f.append(Ze("Overview",[`Sources: ${d.leftSummary.source} -> ${d.rightSummary.source}`,`Session IDs: ${d.leftSummary.sessionId||"unknown"} -> ${d.rightSummary.sessionId||"unknown"}`,`Models: ${d.leftSummary.model||"unknown"} -> ${d.rightSummary.model||"unknown"}`,`Events: ${d.leftSummary.renderableEventCount} -> ${d.rightSummary.renderableEventCount}`,`Duration: ${d.leftSummary.loggedDuration} / ${d.rightSummary.loggedDuration}`]),Ze("Parser Health Delta",[`Parsed: ${d.leftSummary.parsedEventCount} -> ${d.rightSummary.parsedEventCount}`,`Renderable: ${d.leftSummary.renderableEventCount} -> ${d.rightSummary.renderableEventCount}`,`Unknown: ${_n(d.parserHealthDelta.unknownEvents)}`,`Malformed: ${_n(d.parserHealthDelta.malformedLines)}`,`Skipped payloads: ${_n(d.parserHealthDelta.skippedLargePayloads)}`]),Ze("Tool Delta",[`Calls: ${_n(d.toolDelta.calls)}`,`Results: ${_n(d.toolDelta.results)}`,`Missing results: ${_n(d.toolDelta.missingResults)}`,`Only A: ${Nc(d.toolDelta.onlyLeftTools,6)}`,`Only B: ${Nc(d.toolDelta.onlyRightTools,6)}`]),Ze("File Delta",[`Only A: ${d.fileDelta.onlyLeft.length}`,`Only B: ${d.fileDelta.onlyRight.length}`,`Both: ${d.fileDelta.both.length}`,...d.fileDelta.onlyLeft.slice(0,4).map(y=>`A: ${y}`),...d.fileDelta.onlyRight.slice(0,4).map(y=>`B: ${y}`)]),Ze("Error And Failure Delta",[`Error-like events: ${_n(d.errorDelta.errors)}`,`First A: ${d.errorDelta.leftFirstError||"none"}`,`First B: ${d.errorDelta.rightFirstError||"none"}`,`Repeated patterns: ${d.repeatedPatternDelta.leftCount} -> ${d.repeatedPatternDelta.rightCount}`]),Ze("Token And Context Delta",[`Telemetry: ${d.tokenDelta.leftAvailable?"A yes":"A no"} / ${d.tokenDelta.rightAvailable?"B yes":"B no"}`,`Latest tokens: ${d.tokenDelta.leftLatestTotalTokens??"n/a"} -> ${d.tokenDelta.rightLatestTotalTokens??"n/a"}`,`Context percent: ${gr(d.tokenDelta.leftContextPercent)} -> ${gr(d.tokenDelta.rightContextPercent)}`,`Compactions: ${_n(d.compactionDelta)}`])),i.append(f);let g=Ze("Divergence");g.append(ww(d)),i.append(g),d.warnings.length&&i.append(Ze("Warnings",d.warnings)),Vt.replaceChildren(i)}function Sw(){let n=Pt();ln.textContent=nt?"Selected event":"Session graph";let e=nt?yt.get(nt)?.source:n,t=document.createElement("pre");t.textContent=JSON.stringify(e??n.totals,null,2),Vt.replaceChildren(t)}function Mw(){let n=Pt();ln.textContent="Redacted reports";let e=document.createElement("div");e.className="mode-card-grid",e.append(Ze("Reports",[`perlustron export ${n.sessionPath} --format html --redacted -o report.html`,`perlustron export ${n.sessionPath} --format markdown --redacted -o report.md`,`perlustron export ${n.sessionPath} --format json -o normalized-trace.json`]),Ze("Schema Drift",[`perlustron unknowns ${n.sessionPath} --redacted -o unknowns-redacted.json`,`perlustron fixture-report ${n.sessionPath} --redacted -o fixture-report.md`])),Vt.replaceChildren(e)}function bw(){let n=Pt();ln.textContent="Local observatory settings";let e=document.createElement("div");e.className="mode-card-grid",e.append(Ze("Session",[`Source: ${vn(n.source)}`,`Session: ${yn?en(yn):en(n.sessionPath)||"latest"}`,`Live updates: ${In?ws?"SSE stream":"fallback polling":"paused"}`]),Ze("Renderer",["Three.js instancing",`Mode panel: ${It==="settings"?"visible":"hidden"}`,`Raw JSON: ${ig?"visible":"collapsed"}`]),Ze("Backend",["Rust Axum JSONL parser",`Parser: ${n.parserHealth.parserVersion} / ${n.parserHealth.schemaVersion}`,`API token required: ${n.privacySummary.apiTokenRequired?"yes":"no"}`])),Vt.replaceChildren(e)}function Ze(n,e=[]){let t=document.createElement("section");t.className="mode-card";let i=document.createElement("h3");if(i.textContent=n,t.append(i),e.length){let s=document.createElement("ul");e.forEach(r=>{let o=document.createElement("li");o.textContent=r,s.append(o)}),t.append(s)}return t}function ea(n){let e=document.createElement("p");return e.textContent=n,e}function an(n){let e=document.createElement("p");return e.className="mode-empty",e.textContent=n,e}function ct(n,e){let t=document.createElement("button");return t.type="button",t.className="mode-action-button",t.textContent=n,t.addEventListener("click",()=>{e()}),t}function Sm(n){let e=document.createElement("span");return e.className="mode-small-label",e.textContent=n,e}function Ew(n){let e=document.createElement("code");return e.textContent=n,e}function Tw(n){if(!n.inspectionQueue.length)return an("No high-priority findings detected. Parser health and raw inspection remain available.");let e=document.createElement("div");return e.className="mode-linked-list",n.inspectionQueue.slice(0,12).forEach((t,i)=>{let s=document.createElement("article");s.className=`mode-linked-row severity-${t.severity}`;let r=document.createElement("div"),o=document.createElement("strong");o.textContent=`${i+1}. ${t.title}`;let a=document.createElement("small");a.textContent=`${t.summary} - ${t.confidence} - ${t.directness}`;let l=document.createElement("p");l.textContent=t.explanation,r.append(o,a,l);let c=document.createElement("div");c.className="mode-row-actions";let h=t.lineNumbers[0];c.append(ct("Open Raw",()=>Wc(h,t.title,t)),ct("Copy Ref",()=>rs(`line ${h??"n/a"} - ${t.redactionSafeSummary}`,"Line reference copied"))),s.append(r,c),e.append(s)}),e}function ww(n){let e=document.createElement("div");return e.className="mode-linked-list",t_(n).forEach(i=>{let s=document.createElement("article");s.className="mode-linked-row";let r=document.createElement("div"),o=document.createElement("strong");o.textContent=i.kind.replaceAll("_"," ");let a=document.createElement("small");a.textContent=`${i.confidence} - A line ${i.leftLine??"n/a"} - B line ${i.rightLine??"n/a"}`;let l=document.createElement("p");l.textContent=i.summary,r.append(o,a,l);let c=document.createElement("div");c.className="mode-row-actions",c.append(ct("Open A",()=>Wc(i.leftLine,i.kind,i)),ct("Copy Ref",()=>rs(`${i.kind}: A line ${i.leftLine??"n/a"}, B line ${i.rightLine??"n/a"}`,"Divergence reference copied"))),s.append(r,c),e.append(s)}),e}function Aw(n){let e=document.createElement("div");e.className="mode-linked-list";let t=[...(n.unknownEvents||[]).map(i=>({title:`Unknown ${i.sourceEventType}`,detail:i.preview,lineNumber:i.lineNumber,payload:i})),...(n.malformedLines||[]).map(i=>({title:"Malformed JSONL",detail:i.error,lineNumber:i.lineNumber,payload:i}))].slice(0,12);return t.length?(t.forEach(i=>{let s=document.createElement("article");s.className="mode-linked-row";let r=document.createElement("div"),o=document.createElement("strong");o.textContent=i.title;let a=document.createElement("small");a.textContent=`line ${i.lineNumber} - ${Td(i.detail,180)}`,r.append(o,a);let l=document.createElement("div");l.className="mode-row-actions",l.append(ct("Open Raw",()=>Wc(i.lineNumber,i.title,i.payload))),s.append(r,l),e.append(s)}),e):an("No unknown or malformed samples captured.")}function Cw(n){let e=Rn.filter(i=>i.source===n.source),t=e.find(i=>i.path===n.sessionPath);return t?[t,...e.filter(i=>i.path!==n.sessionPath)]:[{source:n.source,path:n.sessionPath,label:"Current session",detail:n.sessionId||"loaded",lastModifiedAt:n.lastModifiedAt,byteLength:n.byteLength,isLive:n.isLive,explicit:!0},...e]}function Mm(n){return n.selectedOptions.item(0)?.value||n.value||null}async function bm(){if(!Gn){Ei="Select a Run B session first.",jt=null,zo();return}let n=Pt().sessionPath,e=Gn;if(e===n){Ei="Run A and Run B must be different sessions.",jt=null,zo();return}let t=++Qp,i=()=>t===Qp&&Pt().sessionPath===n&&Gn===e;jt=null,kh=!0,Ei=null,zo();try{let s=await pE(e);if(!i())return;jt=s}catch(s){if(!i())return;jt=null,Ei=Lr(s)}finally{i()&&(kh=!1,zo())}}async function Gc(n=!1){return!n&&xn?xn:!n&&Ts?null:Fo||(xn=null,Ts=null,Vh=!0,Fo=mE().then(e=>(xn=e,e)).catch(e=>(Ts=Lr(e),null)).finally(()=>{Vh=!1,Fo=null,It==="health"&&e_()}),Fo)}function Ed(n,e,t){let i=`${t} Insights remains available and Raw is updated with the selected evidence payload.`;ci(e),ln.textContent="Evidence fallback";let s=Ze("Evidence Fallback",[i]);s.classList.add("mode-notice");let r=document.createElement("div");if(r.className="mode-row-actions",r.append(ct("Open Insights",()=>{Yt("insights"),ci(e)}),ct("Audit Raw",()=>{Yt("raw"),Ed(n,e,t)})),s.append(r),It==="raw"){let o=document.createElement("pre");o.textContent=JSON.stringify(e??{},null,2),Vt.replaceChildren(s,o);return}Vt.prepend(s)}function Wc(n,e,t,i="raw"){if(n){let r=Hc().find(o=>o.lineNumber===n);if(r){Qg(r),r.node?zc(i):i!=="map"&&(Yt(i),ci(r.source));return}}i!=="map"&&Yt(i);let s=n?`Line ${n} is logged for ${e}, but no rendered Timeline or Transcript row is available.`:"No event line is logged for this insight or evidence reference; showing fallback payload instead.";Ed(e,t,s)}function Rw(n){let e=n.parserHealth;return[`Perlustron parser health for ${en(n.sessionPath)}`,`Parser: ${e.parserVersion} / ${e.schemaVersion}`,`Source: ${e.source} (${e.sourceDetectionConfidence})`,`Lines: ${e.totalLinesRead}`,`Parsed/renderable: ${e.parsedEventCount}/${e.renderableEventCount}`,`Unknown events: ${e.unknownEventCount}`,`Malformed lines: ${e.malformedLineCount}`,`Skipped large payloads: ${e.skippedLargePayloadCount}`].join(`
`)}function Iw(n){let e=["Perlustron insights","What should I inspect first?"];return n.inspectionQueue.length?n.inspectionQueue.slice(0,6).forEach((t,i)=>{e.push(`${i+1}. [${t.severity}] ${t.title}: ${t.redactionSafeSummary||t.summary}`)}):e.push("- No high-priority findings detected."),e.push(`Repeated patterns: ${n.repeatedPatterns.length}`),e.push(`Suspicious tool calls: ${n.suspiciousToolCalls.length}`),e.push(`Approval/sandbox friction: ${n.approvalFriction.length}`),e.join(`
`)}function Pw(n){return["Perlustron redacted diff summary",`A: ${en(n.metadata.leftPath)} (${n.metadata.leftSource})`,`B: ${en(n.metadata.rightPath)} (${n.metadata.rightSource})`,`Events: ${n.leftSummary.renderableEventCount} -> ${n.rightSummary.renderableEventCount}`,`Tools: ${n.toolDelta.calls.left} -> ${n.toolDelta.calls.right}`,`Errors: ${n.errorDelta.errors.left} -> ${n.errorDelta.errors.right}`,`Files: ${n.fileDelta.leftCount} -> ${n.fileDelta.rightCount}`,`First likely divergence: ${n.divergence.summary} (${n.divergence.confidence})`].join(`
`)}function Nc(n,e){if(!n.length)return"none";let t=n.slice(0,e).join(", ");return n.length>e?`${t} ... +${n.length-e}`:t}async function Lw(){let n=xn??await Gc(!0);n&&Dc("perlustron-unknowns-redacted.json",JSON.stringify(n,null,2),"application/json")}async function Nw(){let n=xn??await Gc(!0);n&&rs(n.suggestedGithubIssue,"Schema-drift issue body copied")}async function Dw(){let n=xn??await Gc(!0);n&&Dc("perlustron-fixture-report.md",Uw(n),"text/markdown")}function t_(n){return n.divergence.clusters.length?n.divergence.clusters:[{kind:n.divergence.kind,confidence:n.divergence.confidence,summary:n.divergence.summary,explanation:n.divergence.explanation,leftLine:n.divergence.leftLine,rightLine:n.divergence.rightLine,leftEventId:n.divergence.leftEventId,rightEventId:n.divergence.rightEventId,leftSignature:n.divergence.leftSignature,rightSignature:n.divergence.rightSignature}]}function Uw(n){let e=n.redactedSamples.slice(0,12).map(t=>`### Line ${t.lineNumber} ${t.sourceEventType}

Shape hash: \`${t.shapeHash}\`

\`\`\`json
${t.redactedPreview}
\`\`\``).join(`

`);return["# Perlustron Fixture Report","","This report avoids raw private log content.","","## Parser Health","",`- Perlustron version: \`${n.parserVersion}\``,`- Trace schema: \`${n.traceSchemaVersion}\``,`- Source guess: \`${n.sourceGuess}\``,`- Unknown events: \`${n.unknownEventCount}\``,`- Malformed lines: \`${n.malformedLineCount}\``,`- Suggested fixture: \`${n.suggestedFixtureName}\``,"","## Redacted Samples","",e||"No unknown or malformed samples captured.","","## Safe Contribution Checklist","","- Do not attach raw private Codex or Claude logs.","- Prefer synthetic data.","- Review prompts, paths, command output, images, and tool results before sharing."].join(`
`)}function Fw(n){let e=t_(n).map(t=>`<tr><td>${Mi(t.kind)}</td><td>${Mi(t.confidence)}</td><td>${t.leftLine??"n/a"}</td><td>${t.rightLine??"n/a"}</td><td>${Mi(t.summary)}</td></tr>`).join("");return`<!doctype html><meta charset="utf-8"><title>Perlustron Diff Report</title><style>body{font-family:system-ui,sans-serif;margin:32px;color:#182125;line-height:1.45}table{border-collapse:collapse;width:100%;margin:16px 0}td,th{border:1px solid #d7dee2;padding:6px 8px;text-align:left}code{background:#f4f6f7;padding:2px 4px}.redacted{color:#7a1f1f;font-weight:700}</style><h1>Perlustron Session Diff</h1><p class="redacted">Redacted diff. Review before sharing.</p><h2>Overview</h2><table><tr><td>A</td><td>${Mi(n.metadata.leftPath)}</td></tr><tr><td>B</td><td>${Mi(n.metadata.rightPath)}</td></tr><tr><td>Events</td><td>${n.leftSummary.renderableEventCount} -> ${n.rightSummary.renderableEventCount}</td></tr><tr><td>Tools</td><td>${_n(n.toolDelta.calls)}</td></tr><tr><td>Errors</td><td>${_n(n.errorDelta.errors)}</td></tr></table><h2>Parser Health</h2><table><tr><td>Unknown</td><td>${_n(n.parserHealthDelta.unknownEvents)}</td></tr><tr><td>Malformed</td><td>${_n(n.parserHealthDelta.malformedLines)}</td></tr></table><h2>Files</h2><table><tr><td>Only A</td><td>${Mi(Nc(n.fileDelta.onlyLeft,20))}</td></tr><tr><td>Only B</td><td>${Mi(Nc(n.fileDelta.onlyRight,20))}</td></tr></table><h2>Divergence</h2><table><thead><tr><th>Kind</th><th>Confidence</th><th>A line</th><th>B line</th><th>Summary</th></tr></thead><tbody>${e}</tbody></table><h2>Redaction</h2><p>Profile: ${Mi(n.metadata.redactionProfile||"strict")}. Raw prompts, command output, sensitive paths, and tool outputs are not intentionally included.</p>`}function Dc(n,e,t){let i=new Blob([e],{type:t}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=n,r.click(),window.setTimeout(()=>URL.revokeObjectURL(s),0)}function rs(n,e="Copied"){navigator.clipboard.writeText(n).then(()=>Pn("COPY",e,n)).catch(t=>Pn("COPY","Copy failed",Lr(t)))}function Ow(n){return/\b(error|failed|failure|exception|panic|denied|permission|timeout|traceback|not found|exit code|fatal|forbidden|sandbox)\b/i.test(n)}function Wh(n){return IM.has(n)}function Yt(n){if(It=n,ia(),As(Ih,e=>e.dataset.appMode===It),vr.value=Wh(It)?"":It,Md(),n!=="map"&&Vc(),n==="map"){bs("sessions"),Pr({preserveCamera:!0}),Ps();return}if(Or(),n==="summary"){bs("sessions");return}if(n==="timeline"){bs("sessions"),Cr(!1);return}if(n!=="transcript"){if(n==="health"){bs("health"),Cr(!1),Pn("HEALTH","Parser health",Bw());return}if(n==="insights"){Pn("INSIGHTS","Debugging insights",kw());return}if(n==="raw"){bs("raw"),Cr(!1),Pn("RAW","Raw and normalized event inspection",Vw());return}if(n==="diff"){Pr({preserveCamera:!0});return}n!=="settings"&&Pn("EXPORT","Export reports",zw())}}function Em(){It!=="transcript"&&Or()}function Bw(){if(!Ee)return"Waiting for session data.";let n=Ee.parserHealth;return[`Parser: ${n.parserVersion} / ${n.schemaVersion}`,`Lines read: ${n.totalLinesRead}`,`Parsed events: ${n.parsedEventCount}`,`Renderable events: ${n.renderableEventCount}`,`Unknown events: ${n.unknownEventCount}`,`Malformed lines: ${n.malformedLineCount}`,`Skipped large payloads: ${n.skippedLargePayloadCount}`,`Token telemetry: ${n.tokenTelemetryAvailable?"available":"not logged"}`,...(n.unknownEventTypes||[]).map(e=>`Unknown: ${e.sourceEventType} x${e.count}`)].join(`
`)}function kw(){let n=Ee?.insights;if(!Ee||!n)return"Waiting for session insights.";let e=["Insights are heuristics over logged events only. Hidden or unlogged reasoning cannot be recovered."];return n.failureChain?(e.push(`First logged error-like event: line ${n.failureChain.firstLoggedError.lineNumber} - ${n.failureChain.firstLoggedError.title}`),e.push(`Final logged outcome: ${n.failureChain.finalOutcome}`)):e.push("First logged error-like event: none detected"),e.push(`Repeated patterns: ${n.repeatedPatterns.length}`),n.repeatedPatterns.slice(0,6).forEach(t=>{e.push(`  ${t.patternType} x${t.count} lines ${t.firstLine}-${t.lastLine}: ${t.key}`)}),e.push(`Suspicious tool calls: ${n.suspiciousToolCalls.length}`),n.suspiciousToolCalls.slice(0,6).forEach(t=>{e.push(`  line ${t.call.lineNumber} ${t.toolName}: ${t.reason}`)}),e.push(`Context pressure: ${n.contextPressure.status}`),e.push(`File impact: ${n.fileImpact.filesEdited.length} edited, ${n.fileImpact.filesRead.length} read, ${n.fileImpact.filesReferenced.length} referenced`),e.push(`Approval/sandbox friction: ${n.approvalFriction.length}`),e.join(`
`)}function Vw(){return"Select any event to inspect its parsed payload. Use the Raw JSON inspector to copy the selected raw or normalized event."}function zw(){return Ee?["Export redacted reports from the CLI:",`perlustron export ${Ee.sessionPath} --format html --redacted -o report.html`,`perlustron export ${Ee.sessionPath} --format markdown --redacted -o report.md`,`perlustron export ${Ee.sessionPath} --format json -o normalized-trace.json`,"","Redacted exports are best-effort sharing aids. Review before sending."].join(`
`):"Waiting for session data."}function Hw(){return["/ search","n next event","N previous event","m map","l timeline","t transcript","h health","i insights","d diff","r raw","e export","Esc close inspection"].join(`
`)}function Td(n,e){return n.length<=e?n:`${n.slice(0,e)}
...[truncated]`}function n_(n){if(!n?.latestTotalTokens)return"no token telemetry";let e=n.latestContextPercent===null?"n/a":`${Math.round(n.latestContextPercent)}%`,t=n.contextWindow?` / ${n.contextWindow.toLocaleString()}`:"";return`${n.latestTotalTokens.toLocaleString()}${t} tokens (${e})`}function Gw(){bt==="inspect"&&Pr({preserveCamera:!0}),nt=null,Qt(),Pn("SESSION",Ee?.ui.sessionName||"Session overview",Sd())}function Tm(n){ai=n,As(ed,e=>e.dataset.metric===ai),Qt(),l_(n)}function Ww(){let n=Ee?.prompts.at(-1);n&&ta(n.id,yt.get(n.id))}function ta(n,e=yt.get(n)){tt=n,bt="inspect",is(),li(),ss(e)}function Pr({preserveCamera:n=!1}={}){bt==="inspect"&&(bt="overview",is({preserveCamera:n}),li())}function $w(){Jg(),As(Ih,n=>n.dataset.appMode===It),vr.value=Wh(It)?"":It,Md(),ia(),Ih.forEach(n=>{n.addEventListener("click",()=>{Yt(xs(n.dataset.appMode,"map"))})}),vr.addEventListener("change",()=>{if(!vr.value){vr.value=Wh(It)?"":It;return}Yt(xs(vr.value,"health"))}),Zm.forEach(n=>{n.addEventListener("click",()=>{ow(n.dataset.source)})}),si.addEventListener("change",()=>{gE(si.value)}),tb.addEventListener("click",()=>{In=!In,ts(),In?$c():Xc()}),Ym.forEach(n=>{n.addEventListener("click",()=>{let e=xs(n.dataset.inspectorTab,"sessions");if(e===Ko&&!Cn){Cr(!0);return}Cr(!1),bs(e)})}),ko.addEventListener("click",()=>Cr(!Cn)),Ch.addEventListener("change",()=>Am(Ch.checked)),Am(!0),bs("sessions",{force:!0}),Ki.addEventListener("input",()=>{Sn=Ki.value.trim().toLowerCase(),li(),Qt(),Em()}),Ki.addEventListener("keydown",n=>{n.key==="Escape"&&(Ki.value="",Sn="",li(),Qt(),Em())}),[bc,Ec,Tc,wc,Gm,Wm,$m,Xm,qm].forEach(n=>{n.addEventListener("change",Or)}),document.addEventListener("keydown",Yw),document.addEventListener("keyup",Zw),document.addEventListener("keydown",Xw),document.addEventListener("visibilitychange",jw),window.addEventListener("blur",s_),Gp.forEach(n=>{n.addEventListener("click",()=>{Ss=xs(n.dataset.sessionFilter,"live"),As(Gp,e=>e===n),li()})}),ab.forEach(n=>{n.addEventListener("click",()=>{let e=n.dataset.action;if(e==="sessions"){Gw();return}Pn("SYSTEM",`${e} controls`,Sd())})}),Rh.forEach(n=>{n.addEventListener("click",()=>{let e=xs(n.dataset.savedView,"latest");As(Rh,t=>t===n),e==="errors"?Tm(rA(["error","long"])||"error"):e==="files"?Tm("file"):Ww()})}),lb.forEach(n=>{n.addEventListener("click",()=>{let e=xs(n.dataset.viewAction,"two-d");e==="zoom-in"?$h(Ph):e==="zoom-out"?$h(-Ph):e==="overview"?(Pr(),Tr="three-d",Ps()):(bt="overview",Tr="two-d",is({preserveCamera:!0}),Ps(),li())})}),BM.addEventListener("click",()=>Uc(-1)),kM.addEventListener("click",()=>Uc(1)),ed.forEach(n=>{n.addEventListener("click",()=>{sA(xs(n.dataset.metric,"error"))})}),ub.addEventListener("click",()=>{Yt("settings")}),hb.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Fm.textContent)}catch(n){ns(n)}})}function Xw(n){if(n.key==="/"&&!Ar(n.target)){n.preventDefault(),Ki.focus(),Ki.select();return}if((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="k"){n.preventDefault(),Ki.focus(),Ki.select();return}if(!Ar(n.target)){let e=qw(n.key);if(e){n.preventDefault(),Yt(e);return}if(n.key==="n"){n.preventDefault(),Uc(1);return}if(n.key==="N"){n.preventDefault(),Uc(-1);return}if(n.key==="?"){n.preventDefault(),Pn("SHORTCUTS","Keyboard shortcuts",Hw());return}}n.key!=="Escape"||bt!=="inspect"||Ar(n.target)||(n.preventDefault(),Pr(),Ps())}function qw(n){switch(n){case"m":return"map";case"l":return"timeline";case"t":return"transcript";case"h":return"health";case"i":return"insights";case"d":return"diff";case"r":return"raw";case"e":return"export";default:return null}}function Yw(n){Jw(n)&&(Ti.add(n.code),n.preventDefault())}function Zw(n){i_(n.code)&&(Ti.delete(n.code),n.preventDefault())}function Jw(n){return i_(n.code)&&!n.ctrlKey&&!n.metaKey&&!n.altKey&&!Ar(n.target)}function i_(n){return eE.has(n)||tE.has(n)}function Kw(){return Ti.has("ShiftLeft")||Ti.has("ShiftRight")}function s_(){Ti.clear()}function jw(){document.hidden&&s_()}function Ar(n){return n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement||n instanceof HTMLElement&&n.isContentEditable}function $c(){Xc(),In&&(eA(),!(typeof EventSource>"u")&&(Ji=new EventSource(Dr("/api/session/events").toString()),Ji.addEventListener("open",()=>{ws=!0,ts()}),Ji.addEventListener("session-status",n=>{ws=!0,ts();try{ug(JSON.parse(n.data))}catch(e){ns(e)}}),Ji.addEventListener("session-error",n=>{ns(n.data||"Session stream error")}),Ji.addEventListener("error",()=>{ws=!1,ts(),tA()})))}function Xc(){Qw(),r_(),nA()}function Qw(){Ji&&(Ji.close(),Ji=null),ws=!1}function eA(){r_(),In&&(Gh(),vc=setInterval(Gh,db))}function r_(){vc&&(clearInterval(vc),vc=null)}function tA(){Er||(Er=setTimeout(()=>{Er=null,!ws&&In&&Gh()},fb))}function nA(){Er&&(clearTimeout(Er),Er=null)}function ts(){let n=!!Ee?.isLive;eb.classList.toggle("paused",!In||!n),zm.textContent=In?n?"LIVE":"STALE":"PAUSED",Hm.textContent=In?n?ws?"Streaming session...":"Watching session...":"Waiting for writes...":"Updates paused",Vm.textContent=In?n?"Live":"Stale":"Paused"}function wm(){wr||(wr=setTimeout(()=>{wr=null;let n=performance.now(),e=Be.filter(t=>Ns(t,n));e.length&&(e.forEach(t=>{t.matrixDirty=!0}),Qt())},120))}function ns(n){console.warn(Lr(n))}function o_(){QM.classList.toggle("inspector-collapsed",Cn),Hp.classList.toggle("inspector-collapsed",Cn),Hp.setAttribute("aria-expanded",`${!Cn}`),ko.setAttribute("aria-expanded",`${!Cn}`),ko.setAttribute("aria-label",Cn?"Expand sidebar":"Collapse sidebar"),ko.title=Cn?"Expand sidebar":"Collapse sidebar",ko.textContent=Cn?">":"<",Ym.forEach(n=>{let e=n.dataset.inspectorTab===Ko;n.classList.toggle("active",e),n.setAttribute("aria-expanded",`${e&&!Cn}`)}),cb.forEach(n=>{n.classList.toggle("active",n.dataset.inspectorPanel===Ko)})}function bs(n,{force:e=!1}={}){!(n!==Ko)&&!e||(Ko=n,o_(),a_())}function Cr(n){n!==Cn&&(Cn=n,o_(),a_({overview:!0}))}function a_({overview:n=!1}={}){mc=mc||n,!Eh&&(Eh=!0,window.requestAnimationFrame(()=>{Eh=!1,_d(),mc&&Ps(),mc=!1}))}function Am(n){ig=n,Ch.checked=n,nb.classList.toggle("collapsed",!n)}function $h(n){Math.abs(n)<.001||(je.getWorldDirection(Wn),je.position.addScaledVector(Wn,n),Qe.target.addScaledVector(Wn,n),Qe.update())}function Uc(n){let e=iA();if(!e.length)return;let i=(Math.max(0,e.findIndex(r=>r.id===nt))+n+e.length)%e.length,s=e[i];nt=s.id,tt=s.promptId,ss(s)}function iA(){return(bt==="inspect"&&tt?od(tt).visibleNodes:Be).filter(e=>e.type!=="prompt"||e.promptId===tt||bt==="overview").sort(Rg)}function sA(n){ai=ai===n?null:n,As(ed,e=>e.dataset.metric===ai),Qt(),ai&&l_(ai)}function l_(n){let e=Be.find(t=>t.type!=="prompt"&&sa(t,n));return e?(ta(e.promptId,e),!0):!1}function rA(n){return n.find(e=>Be.some(t=>t.type!=="prompt"&&sa(t,e)))}function sa(n,e){return e?e==="compaction"?n.type==="compaction":n.type==="compaction"?!1:n.type==="prompt"?(Go.get(n.id)||[]).some(t=>t.id!==n.id&&sa(t,e)):n.type==="fileChange"?aA(n.source,e):n.type==="message"?oA(n.source,e):lA(n.source,e):!0}function oA(n,e){return e?e==="long"?n.text.length>1200:n.text.toLowerCase().includes(e):!0}function aA(n,e){if(!e)return!0;let t=c_(n).toLowerCase();return e==="file"?!0:e==="diff"?Bc(n)!=="add"||t.includes("diff")||t.includes("@@"):e==="long"?(n.preview||"").length>1200||(n.detail||"").length>1600:t.includes(e)}function c_(n){return`${Bc(n)} ${n.path} ${n.preview} ${n.detail}`}function lA(n,e){if(!e)return!0;let t=u_(n);return e==="long"?(n.argumentPreview||"").length>1400||(n.outputPreview||"").length>1200:e==="file"?/(file|read|write|rg|patch)/.test(t):e==="diff"?/(diff|patch)/.test(t):e==="artifact"?t.includes("artifact"):t.includes(e)}function u_(n){return`${n.kind} ${n.name} ${n.argumentPreview||""} ${n.outputPreview||""}`.toLowerCase()}function cA(n){return Sn?`${n.kind} ${n.title} ${n.body}`.toLowerCase().includes(Sn):!0}function h_({restartStream:n=!1}={}){let e=nt?yt.get(nt):null;e&&Xg()&&ss(e,{restartStream:n})}function Pn(n,e,t){nt=null,$g(),Qt(),qh.textContent=n,Jh.textContent="Control surface",Kh.textContent=new Date().toLocaleTimeString(),Qh.textContent=e,Yh.textContent=e,ci({kind:n,title:e,body:t,generatedAt:new Date().toISOString()}),Fr(),pd(),kg(t)}function en(n){if(!n)return"";let e=n.split(/[\\/]/);return e.length<=4?n:`${e.at(-4)}/${e.at(-3)}/${e.at(-2)}/${e.at(-1)}`}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
