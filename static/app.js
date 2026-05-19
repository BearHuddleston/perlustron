var Bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hf=0,Pu=1,df=2;var po=1,ff=2,ar=3,gi=0,Jt=1,bn=2,ti=0,us=1,mo=2,Lu=3,Nu=4,pf=5;var Ui=100,mf=101,gf=102,_f=103,xf=104,vf=200,yf=201,Sf=202,bf=203,Aa=204,Ca=205,Mf=206,Ef=207,Tf=208,wf=209,Af=210,Cf=211,Rf=212,If=213,Pf=214,Ra=0,Ia=1,Pa=2,hs=3,La=4,Na=5,Da=6,Ua=7,Du=0,Lf=1,Nf=2,kn=0,Uu=1,Fu=2,Ou=3,Bu=4,ku=5,Vu=6,zu=7;var Hu=300,zi=301,fs=302,cl=303,ul=304,go=306,Fa=1e3,Kn=1001,Oa=1002,kt=1003,Df=1004;var _o=1005;var Ht=1006,hl=1007;var Hi=1008;var sn=1009,Gu=1010,Wu=1011,lr=1012,dl=1013,Vn=1014,Mn=1015,ni=1016,fl=1017,pl=1018,cr=1020,Xu=35902,$u=35899,Yu=1021,qu=1022,En=1023,jn=1026,Gi=1027,ml=1028,gl=1029,Wi=1030,_l=1031;var xl=1033,xo=33776,vo=33777,yo=33778,So=33779,vl=35840,yl=35841,Sl=35842,bl=35843,Ml=36196,El=37492,Tl=37496,wl=37488,Al=37489,bo=37490,Cl=37491,Rl=37808,Il=37809,Pl=37810,Ll=37811,Nl=37812,Dl=37813,Ul=37814,Fl=37815,Ol=37816,Bl=37817,kl=37818,Vl=37819,zl=37820,Hl=37821,Gl=36492,Wl=36494,Xl=36495,$l=36283,Yl=36284,Mo=36285,ql=36286;var Hr=2300,Ba=2301,wa=2302,vu=2303,yu=2400,Su=2401,bu=2402;var Uf=3200;var Zu=0,Ff=1,yi="",Kt="srgb",Gr="srgb-linear",Wr="linear",tt="srgb";var cs=7680;var Mu=519,Of=512,Bf=513,kf=514,Zl=515,Vf=516,zf=517,Kl=518,Hf=519,Eu=35044,Ku=35048;var Ju="300 es",Un=2e3,qs=2001;function Q_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function e0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gf(){let n=Xr("canvas");return n.style.display="block",n}var Nd={},Zs=null;function ju(...n){let e="THREE."+n.shift();Zs?Zs("log",e,...n):console.log(e,...n)}function Wf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Te(...n){n=Wf(n);let e="THREE."+n.shift();if(Zs)Zs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ce(...n){n=Wf(n);let e="THREE."+n.shift();if(Zs)Zs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ka(...n){let e=n.join(" ");e in Nd||(Nd[e]=!0,Te(...n))}function Xf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var $f={[Ra]:Ia,[Pa]:Da,[La]:Ua,[hs]:Na,[Ia]:Ra,[Da]:Pa,[Ua]:La,[Na]:hs},Fn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dd=1234567,Vr=Math.PI/180,Ks=180/Math.PI;function ur(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function Qu(n,e){return(n%e+e)%e}function t0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function n0(n,e,t){return n!==e?(t-n)/(e-n):0}function zr(n,e,t){return(1-t)*n+t*e}function i0(n,e,t,i){return zr(n,e,1-Math.exp(-t*i))}function s0(n,e=1){return e-Math.abs(Qu(n,e*2)-e)}function r0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function o0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function a0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function l0(n,e){return n+Math.random()*(e-n)}function c0(n){return n*(.5-Math.random())}function u0(n){n!==void 0&&(Dd=n);let e=Dd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function h0(n){return n*Vr}function d0(n){return n*Ks}function f0(n){return(n&n-1)===0&&n!==0}function p0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function m0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function g0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),d=o((e+i)/2),h=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*d,l*h,l*u,a*c);break;case"YZY":n.set(l*u,a*d,l*h,a*c);break;case"ZXZ":n.set(l*h,l*u,a*d,a*c);break;case"XZX":n.set(a*d,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*d,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*d,a*c);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $s(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Eo={DEG2RAD:Vr,RAD2DEG:Ks,generateUUID:ur,clamp:We,euclideanModulo:Qu,mapLinear:t0,inverseLerp:n0,lerp:zr,damp:i0,pingpong:s0,smoothstep:r0,smootherstep:o0,randInt:a0,randFloat:l0,randFloatSpread:c0,seededRandom:u0,degToRad:h0,radToDeg:d0,isPowerOfTwo:f0,ceilPowerOfTwo:p0,floorPowerOfTwo:m0,setQuaternionFromProperEuler:g0,normalize:Zt,denormalize:$s},Ae=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],h=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(h!==v||l!==u||c!==f||d!==g){let m=l*u+c*f+d*g+h*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){let S=Math.acos(m),M=Math.sin(S);p=Math.sin(p*S)/M,a=Math.sin(a*S)/M,l=l*p+u*a,c=c*p+f*a,d=d*p+g*a,h=h*p+v*a}else{l=l*p+u*a,c=c*p+f*a,d=d*p+g*a,h=h*p+v*a;let S=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=S,c*=S,d*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],h=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+d*h+l*f-c*u,e[t+1]=l*g+d*u+c*h-a*f,e[t+2]=c*g+d*f+a*u-l*h,e[t+3]=d*g-a*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),h=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"YZX":this._x=u*d*h+c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h-u*f*g;break;case"XZY":this._x=u*d*h-c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h+u*f*g;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=i+a+h;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ud.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ud.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),d=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*d,this.y=i+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kc=new I,Ud=new fn,Ne=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],S=s[1],M=s[4],b=s[7],A=s[2],T=s[5],P=s[8];return r[0]=o*v+a*S+l*A,r[3]=o*m+a*M+l*T,r[6]=o*p+a*b+l*P,r[1]=c*v+d*S+h*A,r[4]=c*m+d*M+h*T,r[7]=c*p+d*b+h*P,r[2]=u*v+f*S+g*A,r[5]=u*m+f*M+g*T,r[8]=u*p+f*b+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*r,f=c*r-o*l,g=t*h+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*c-d*i)*v,e[2]=(a*i-s*o)*v,e[3]=u*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jc.makeScale(e,t)),this}rotate(e){return this.premultiply(Jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jc=new Ne,Fd=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Od=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _0(){let n={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?Wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Gr]:{primaries:e,whitePoint:i,transfer:Wr,toXYZ:Fd,fromXYZ:Od,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Fd,fromXYZ:Od,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}var Ze=_0();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ns,Va=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ns===void 0&&(Ns=Xr("canvas")),Ns.width=e.width,Ns.height=e.height;let s=Ns.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ns}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},x0=0,Js=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jc(s[o].image)):r.push(jc(s[o]))}else r=jc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Va.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var v0=0,Qc=new I,tn=class n extends Fn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Kn,s=Kn,r=Ht,o=Hi,a=En,l=sn,c=n.DEFAULT_ANISOTROPY,d=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=ur(),this.name="",this.source=new Js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Hu;tn.DEFAULT_ANISOTROPY=1;var St=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,b=(f+1)/2,A=(p+1)/2,T=(d+u)/4,P=(h+v)/4,x=(g+m)/4;return M>b&&M>A?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=P/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=T/s,r=x/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=x/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-v)/S,this.z=(u-d)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},za=class extends Fn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new tn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Js(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends za{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},$r=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ha=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var at=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,d,h,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,d,h,u,f,g,v,m)}set(e,t,i,s,r,o,a,l,c,d,h,u,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=o*d,f=o*h,g=a*d,v=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*d,f=l*h,g=c*d,v=c*h;t[0]=u+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*d,f=l*h,g=c*d,v=c*h;t[0]=u-v*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*d,f=o*h,g=a*d,v=a*h;t[0]=l*d,t[4]=g*c-f,t[8]=u*c+v,t[1]=l*h,t[5]=v*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=v-u*h,t[8]=g*h+f,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*h+g,t[10]=u-v*h}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+v,t[5]=o*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*d,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y0,e,S0)}lookAt(e,t,i){let s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ci.crossVectors(i,hn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ci.crossVectors(i,hn)),Ci.normalize(),ta.crossVectors(hn,Ci),s[0]=Ci.x,s[4]=ta.x,s[8]=hn.x,s[1]=Ci.y,s[5]=ta.y,s[9]=hn.y,s[2]=Ci.z,s[6]=ta.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],M=i[7],b=i[11],A=i[15],T=s[0],P=s[4],x=s[8],w=s[12],R=s[1],C=s[5],F=s[9],W=s[13],D=s[2],L=s[6],B=s[10],V=s[14],Z=s[3],J=s[7],ie=s[11],me=s[15];return r[0]=o*T+a*R+l*D+c*Z,r[4]=o*P+a*C+l*L+c*J,r[8]=o*x+a*F+l*B+c*ie,r[12]=o*w+a*W+l*V+c*me,r[1]=d*T+h*R+u*D+f*Z,r[5]=d*P+h*C+u*L+f*J,r[9]=d*x+h*F+u*B+f*ie,r[13]=d*w+h*W+u*V+f*me,r[2]=g*T+v*R+m*D+p*Z,r[6]=g*P+v*C+m*L+p*J,r[10]=g*x+v*F+m*B+p*ie,r[14]=g*w+v*W+m*V+p*me,r[3]=S*T+M*R+b*D+A*Z,r[7]=S*P+M*C+b*L+A*J,r[11]=S*x+M*F+b*B+A*ie,r[15]=S*w+M*W+b*V+A*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],S=l*f-c*u,M=a*f-c*h,b=a*u-l*h,A=o*f-c*d,T=o*u-l*d,P=o*h-a*d;return t*(v*S-m*M+p*b)-i*(g*S-m*A+p*T)+s*(g*M-v*A+p*P)-r*(g*b-v*T+m*P)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=t*a-i*o,M=t*l-s*o,b=t*c-r*o,A=i*l-s*a,T=i*c-r*a,P=s*c-r*l,x=d*v-h*g,w=d*m-u*g,R=d*p-f*g,C=h*m-u*v,F=h*p-f*v,W=u*p-f*m,D=S*W-M*F+b*C+A*R-T*w+P*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/D;return e[0]=(a*W-l*F+c*C)*L,e[1]=(s*F-i*W-r*C)*L,e[2]=(v*P-m*T+p*A)*L,e[3]=(u*T-h*P-f*A)*L,e[4]=(l*R-o*W-c*w)*L,e[5]=(t*W-s*R+r*w)*L,e[6]=(m*b-g*P-p*M)*L,e[7]=(d*P-u*b+f*M)*L,e[8]=(o*F-a*R+c*x)*L,e[9]=(i*R-t*F-r*x)*L,e[10]=(g*T-v*b+p*S)*L,e[11]=(h*b-d*T-f*S)*L,e[12]=(a*w-o*C-l*x)*L,e[13]=(t*C-i*w+s*x)*L,e[14]=(v*M-g*A-m*S)*L,e[15]=(d*A-h*M+u*S)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,h=a+a,u=r*c,f=r*d,g=r*h,v=o*d,m=o*h,p=a*h,S=l*c,M=l*d,b=l*h,A=i.x,T=i.y,P=i.z;return s[0]=(1-(v+p))*A,s[1]=(f+b)*A,s[2]=(g-M)*A,s[3]=0,s[4]=(f-b)*T,s[5]=(1-(u+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+M)*P,s[9]=(m-S)*P,s[10]=(1-(u+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ds.set(s[0],s[1],s[2]).length(),a=Ds.set(s[4],s[5],s[6]).length(),l=Ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ln.copy(this);let c=1/o,d=1/a,h=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=d,Ln.elements[5]*=d,Ln.elements[6]*=d,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Un,l=!1){let c=this.elements,d=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Un)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===qs)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Un,l=!1){let c=this.elements,d=2/(t-e),h=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Un)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===qs)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ds=new I,Ln=new at,y0=new I(0,0,0),S0=new I(1,1,1),Ci=new I,ta=new I,hn=new I,Bd=new at,kd=new fn,Qn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kd.setFromEuler(this),this.setFromQuaternion(kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},b0=0,Vd=new I,Us=new fn,ui=new at,na=new I,Nr=new I,M0=new I,E0=new fn,zd=new I(1,0,0),Hd=new I(0,1,0),Gd=new I(0,0,1),Wd={type:"added"},T0={type:"removed"},Fs={type:"childadded",child:null},eu={type:"childremoved",child:null},Rt=class n extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Qn,i=new fn,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Ne}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(zd,e)}rotateY(e){return this.rotateOnAxis(Hd,e)}rotateZ(e){return this.rotateOnAxis(Gd,e)}translateOnAxis(e,t){return Vd.copy(e).applyQuaternion(this.quaternion),this.position.add(Vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zd,e)}translateY(e){return this.translateOnAxis(Hd,e)}translateZ(e){return this.translateOnAxis(Gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?na.copy(e):na.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Nr,na,this.up):ui.lookAt(na,Nr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(ui),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wd),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T0),eu.child=e,this.dispatchEvent(eu),eu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wd),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,M0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,E0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new I(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},w0={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},ia={h:0,s:0,l:0};function tu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=Qu(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=tu(o,r,e+1/3),this.g=tu(o,r,e),this.b=tu(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let i=Yf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ze.workingToColorSpace(Xt.copy(this),e),Math.round(We(Xt.r*255,0,255))*65536+Math.round(We(Xt.g*255,0,255))*256+Math.round(We(Xt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Xt.copy(this),t);let i=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Kt){Ze.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,i=Xt.g,s=Xt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(ia);let i=zr(Ri.h,ia.h,t),s=zr(Ri.s,ia.s,t),r=zr(Ri.l,ia.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Ve;Ve.NAMES=Yf;var Yr=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new I,hi=new I,nu=new I,di=new I,Os=new I,Bs=new I,Xd=new I,iu=new I,su=new I,ru=new I,ou=new St,au=new St,lu=new St,Di=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Nn.subVectors(s,t),hi.subVectors(i,t),nu.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(hi),l=Nn.dot(nu),c=hi.dot(hi),d=hi.dot(nu),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,f=(c*l-a*d)*u,g=(o*d-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ou.setScalar(0),au.setScalar(0),lu.setScalar(0),ou.fromBufferAttribute(e,t),au.fromBufferAttribute(e,i),lu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ou,r.x),o.addScaledVector(au,r.y),o.addScaledVector(lu,r.z),o}static isFrontFacing(e,t,i,s){return Nn.subVectors(i,t),hi.subVectors(e,t),Nn.cross(hi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Nn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Os.subVectors(s,i),Bs.subVectors(r,i),iu.subVectors(e,i);let l=Os.dot(iu),c=Bs.dot(iu);if(l<=0&&c<=0)return t.copy(i);su.subVectors(e,s);let d=Os.dot(su),h=Bs.dot(su);if(d>=0&&h<=d)return t.copy(s);let u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Os,o);ru.subVectors(e,r);let f=Os.dot(ru),g=Bs.dot(ru);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Bs,a);let m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return Xd.subVectors(r,s),a=(h-d)/(h-d+(f-g)),t.copy(s).addScaledVector(Xd,a);let p=1/(m+v+u);return o=v*p,a=u*p,t.copy(i).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ei=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sa.copy(i.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),ra.subVectors(this.max,Dr),ks.subVectors(e.a,Dr),Vs.subVectors(e.b,Dr),zs.subVectors(e.c,Dr),Ii.subVectors(Vs,ks),Pi.subVectors(zs,Vs),rs.subVectors(ks,zs);let t=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-rs.z,rs.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,rs.z,0,-rs.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-rs.y,rs.x,0];return!cu(t,ks,Vs,zs,ra)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,ks,Vs,zs,ra))?!1:(oa.crossVectors(Ii,Pi),t=[oa.x,oa.y,oa.z],cu(t,ks,Vs,zs,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new I,new I,new I,new I,new I,new I,new I,new I],Dn=new I,sa=new ei,ks=new I,Vs=new I,zs=new I,Ii=new I,Pi=new I,rs=new I,Dr=new I,ra=new I,oa=new I,os=new I;function cu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){os.fromArray(n,r);let a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),d=i.dot(os);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var Ct=new I,aa=new Ae,A0=0,Bt=class extends Fn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:A0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Eu,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$s(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$s(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$s(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var qr=class extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Zr=class extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var lt=class extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},C0=new ei,Ur=new I,uu=new I,nn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):C0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(uu)),this.expandByPoint(Ur.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},R0=0,Sn=new at,hu=new Rt,Hs=new I,dn=new ei,Fr=new ei,Ot=new I,It=class n extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q_(e)?Zr:qr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(dn.min,Fr.min),dn.expandByPoint(Ot),Ot.addVectors(dn.max,Fr.max),dn.expandByPoint(Ot)):(dn.expandByPoint(Fr.min),dn.expandByPoint(Fr.max))}dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ot.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(e,c),Ot.add(Hs)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new I,l[x]=new I;let c=new I,d=new I,h=new I,u=new Ae,f=new Ae,g=new Ae,v=new I,m=new I;function p(x,w,R){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,R),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),d.sub(c),h.sub(c),f.sub(u),g.sub(u);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(C),a[x].add(v),a[w].add(v),a[R].add(v),l[x].add(m),l[w].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,w=S.length;x<w;++x){let R=S[x],C=R.start,F=R.count;for(let W=C,D=C+F;W<D;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let M=new I,b=new I,A=new I,T=new I;function P(x){A.fromBufferAttribute(s,x),T.copy(A);let w=a[x];M.copy(w),M.sub(A.multiplyScalar(A.dot(w))).normalize(),b.crossVectors(T,w);let C=b.dot(l[x])<0?-1:1;o.setXYZW(x,M.x,M.y,M.z,C)}for(let x=0,w=S.length;x<w;++x){let R=S[x],C=R.start,F=R.count;for(let W=C,D=C+F;W<D;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,d=new I,h=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*d;for(let p=0;p<d;p++)u[g++]=c[f++]}return new Bt(u,d,h)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){let u=c[d],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){let f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],h=r[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var I0=0,_i=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=us,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ca,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Aa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ca&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var pi=new I,du=new I,la=new I,Li=new I,fu=new I,ca=new I,pu=new I,xi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){du.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(du);let r=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=Li.dot(this.direction),l=-Li.dot(la),c=Li.lengthSq(),d=Math.abs(1-o*o),h,u,f,g;if(d>0)if(h=o*l-a,u=o*a-l,g=r*d,h>=0)if(u>=-g)if(u<=g){let v=1/d;h*=v,u*=v,f=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(du).addScaledVector(la,u),f}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,s,r){fu.subVectors(t,e),ca.subVectors(i,e),pu.crossVectors(fu,ca);let o=this.direction.dot(pu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);let l=a*this.direction.dot(ca.crossVectors(Li,ca));if(l<0)return null;let c=a*this.direction.dot(fu.cross(Li));if(c<0||l+c>o)return null;let d=-a*Li.dot(pu);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},On=class extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$d=new at,as=new xi,ua=new nn,Yd=new I,ha=new I,da=new I,fa=new I,mu=new I,pa=new I,qd=new I,ma=new I,Yt=class extends Rt{constructor(e=new It,t=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],h=r[l];d!==0&&(mu.fromBufferAttribute(h,e),o?pa.addScaledVector(mu,d):pa.addScaledVector(mu.sub(t),d))}t.add(pa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(ua.containsPoint(as.origin)===!1&&(as.intersectSphere(ua,Yd)===null||as.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&($d.copy(r).invert(),as.copy(e.ray).applyMatrix4($d),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=S,A=M;b<A;b+=3){let T=a.getX(b),P=a.getX(b+1),x=a.getX(b+2);s=ga(this,p,e,i,c,d,h,T,P,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=a.getX(m),M=a.getX(m+1),b=a.getX(m+2);s=ga(this,o,e,i,c,d,h,S,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=S,A=M;b<A;b+=3){let T=b,P=b+1,x=b+2;s=ga(this,p,e,i,c,d,h,T,P,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=m,M=m+1,b=m+2;s=ga(this,o,e,i,c,d,h,S,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function P0(n,e,t,i,s,r,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===gi,a),l===null)return null;ma.copy(a),ma.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ma);return c<t.near||c>t.far?null:{distance:c,point:ma.clone(),object:n}}function ga(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ha),n.getVertexPosition(l,da),n.getVertexPosition(c,fa);let d=P0(n,e,t,i,ha,da,fa,qd);if(d){let h=new I;Di.getBarycoord(qd,ha,da,fa,h),s&&(d.uv=Di.getInterpolatedAttribute(s,a,l,c,h,new Ae)),r&&(d.uv1=Di.getInterpolatedAttribute(r,a,l,c,h,new Ae)),o&&(d.normal=Di.getInterpolatedAttribute(o,a,l,c,h,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Di.getNormal(ha,da,fa,u.normal),d.face=u,d.barycoord=h}return d}var Kr=class extends tn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=kt,d=kt,h,u){super(null,o,a,l,c,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jr=class extends Bt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gs=new at,Zd=new at,_a=[],Kd=new ei,L0=new at,Or=new Yt,Br=new nn,jr=class extends Yt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jr(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,L0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),Kd.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Kd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),Br.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(i),e.ray.intersectsSphere(Br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Zd.multiplyMatrices(i,Gs),Or.matrixWorld=Zd,Or.raycast(e,_a);for(let o=0,a=_a.length;o<a;o++){let l=_a[o];l.instanceId=r,l.object=this,t.push(l)}_a.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Kr(new Float32Array(s*this.count),s,this.count,ml,Mn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gu=new I,N0=new I,D0=new Ne,en=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=gu.subVectors(i,t).cross(N0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(gu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||D0.getNormalMatrix(e),s=this.coplanarPoint(gu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new nn,U0=new Ae(.5,.5),xa=new I,er=class{constructor(e=new en,t=new en,i=new en,s=new en,r=new en,o=new en){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],h=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],S=r[12],M=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-o,f-d,p-g,A-S).normalize(),s[1].setComponents(c+o,f+d,p+g,A+S).normalize(),s[2].setComponents(c+a,f+h,p+v,A+M).normalize(),s[3].setComponents(c-a,f-h,p-v,A-M).normalize(),i)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,f-u,p-m,A-b).normalize();else if(s[4].setComponents(c-l,f-u,p-m,A-b).normalize(),t===Un)s[5].setComponents(c+l,f+u,p+m,A+b).normalize();else if(t===qs)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);let t=U0.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ds=class extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ga=new I,Wa=new I,Jd=new at,kr=new xi,va=new nn,_u=new I,jd=new I,Xa=class extends Rt{constructor(e=new It,t=new ds){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ga.fromBufferAttribute(t,s-1),Wa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ga.distanceTo(Wa);e.setAttribute("lineDistance",new lt(i,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;Jd.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Jd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=d.getX(v),S=d.getX(v+1),M=ya(this,e,kr,l,p,S,v);M&&t.push(M)}if(this.isLineLoop){let v=d.getX(g-1),m=d.getX(f),p=ya(this,e,kr,l,v,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=ya(this,e,kr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=ya(this,e,kr,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ya(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Ga.fromBufferAttribute(a,s),Wa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ga,Wa,_u,jd)>i)return;_u.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(_u);if(!(c<e.near||c>e.far))return{distance:c,point:jd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Qd=new I,ef=new I,tr=class extends Xa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Qd.fromBufferAttribute(t,s),ef.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Qd.distanceTo(ef);e.setAttribute("lineDistance",new lt(i,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var nr=class extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tf=new at,Tu=new xi,Sa=new nn,ba=new I,Qr=class extends Rt{constructor(e=new It,t=new nr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,e.ray.intersectsSphere(Sa)===!1)return;tf.copy(s).invert(),Tu.copy(e.ray).applyMatrix4(tf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,v=f;g<v;g++){let m=c.getX(g);ba.fromBufferAttribute(h,m),nf(ba,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=u,v=f;g<v;g++)ba.fromBufferAttribute(h,g),nf(ba,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nf(n,e,t,i,s,r,o){let a=Tu.distanceSqToPoint(n);if(a<t){let l=new I;Tu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var eo=class extends tn{constructor(e=[],t=zi,i,s,r,o,a,l,c,d){super(e,t,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var vi=class extends tn{constructor(e,t,i=Vn,s,r,o,a=kt,l=kt,c,d=jn,h=1){if(d!==jn&&d!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$a=class extends vi{constructor(e,t=Vn,i=zi,s,r,o=kt,a=kt,l,c=jn){let d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},to=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fi=class n extends It{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],h=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(h,2));function g(v,m,p,S,M,b,A,T,P,x,w){let R=b/P,C=A/x,F=b/2,W=A/2,D=T/2,L=P+1,B=x+1,V=0,Z=0,J=new I;for(let ie=0;ie<B;ie++){let me=ie*C-W;for(let ve=0;ve<L;ve++){let Xe=ve*R-F;J[v]=Xe*S,J[m]=me*M,J[p]=D,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[p]=T>0?1:-1,d.push(J.x,J.y,J.z),h.push(ve/P),h.push(1-ie/x),V+=1}}for(let ie=0;ie<x;ie++)for(let me=0;me<P;me++){let ve=u+me+L*ie,Xe=u+me+L*(ie+1),et=u+(me+1)+L*(ie+1),Pe=u+(me+1)+L*ie;l.push(ve,Xe,Pe),l.push(Xe,et,Pe),Z+=6}a.addGroup(f,Z,w),f+=Z,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var no=class n extends It{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],h=[],u=[],f=[],g=0,v=[],m=i/2,p=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function S(){let b=new I,A=new I,T=0,P=(t-e)/i;for(let x=0;x<=r;x++){let w=[],R=x/r,C=R*(t-e)+e;for(let F=0;F<=s;F++){let W=F/s,D=W*l+a,L=Math.sin(D),B=Math.cos(D);A.x=C*L,A.y=-R*i+m,A.z=C*B,h.push(A.x,A.y,A.z),b.set(L,P,B).normalize(),u.push(b.x,b.y,b.z),f.push(W,1-R),w.push(g++)}v.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let R=v[w][x],C=v[w+1][x],F=v[w+1][x+1],W=v[w][x+1];(e>0||w!==0)&&(d.push(R,C,W),T+=3),(t>0||w!==r-1)&&(d.push(C,F,W),T+=3)}c.addGroup(p,T,0),p+=T}function M(b){let A=g,T=new Ae,P=new I,x=0,w=b===!0?e:t,R=b===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;let C=g;for(let F=0;F<=s;F++){let D=F/s*l+a,L=Math.cos(D),B=Math.sin(D);P.x=w*B,P.y=m*R,P.z=w*L,h.push(P.x,P.y,P.z),u.push(0,R,0),T.x=L*.5+.5,T.y=B*.5*R+.5,f.push(T.x,T.y),g++}for(let F=0;F<s;F++){let W=A+F,D=C+F;b===!0?d.push(D,D+1,W):d.push(D+1,D,W),x+=3}c.addGroup(p,x,b===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ya=class n extends It{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),d(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let M=new I,b=new I,A=new I;for(let T=0;T<t.length;T+=3)f(t[T+0],M),f(t[T+1],b),f(t[T+2],A),l(M,b,A,S)}function l(S,M,b,A){let T=A+1,P=[];for(let x=0;x<=T;x++){P[x]=[];let w=S.clone().lerp(b,x/T),R=M.clone().lerp(b,x/T),C=T-x;for(let F=0;F<=C;F++)F===0&&x===T?P[x][F]=w:P[x][F]=w.clone().lerp(R,F/C)}for(let x=0;x<T;x++)for(let w=0;w<2*(T-x)-1;w++){let R=Math.floor(w/2);w%2===0?(u(P[x][R+1]),u(P[x+1][R]),u(P[x][R])):(u(P[x][R+1]),u(P[x+1][R+1]),u(P[x+1][R]))}}function c(S){let M=new I;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(S),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function d(){let S=new I;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];let b=m(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;o.push(b,1-A)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){let M=o[S+0],b=o[S+2],A=o[S+4],T=Math.max(M,b,A),P=Math.min(M,b,A);T>.9&&P<.1&&(M<.2&&(o[S+0]+=1),b<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,M){let b=S*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function g(){let S=new I,M=new I,b=new I,A=new I,T=new Ae,P=new Ae,x=new Ae;for(let w=0,R=0;w<r.length;w+=9,R+=6){S.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),b.set(r[w+6],r[w+7],r[w+8]),T.set(o[R+0],o[R+1]),P.set(o[R+2],o[R+3]),x.set(o[R+4],o[R+5]),A.copy(S).add(M).add(b).divideScalar(3);let C=m(A);v(T,R+0,S,C),v(P,R+2,M,C),v(x,R+4,b,C)}}function v(S,M,b,A){A<0&&S.x===1&&(o[M]=S.x-1),b.x===0&&b.z===0&&(o[M]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var io=class n extends Ya{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},so=class n extends It{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,h=e/a,u=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){let S=p*u-o;for(let M=0;M<c;M++){let b=M*h-r;g.push(b,-S,0),v.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let M=S+c*p,b=S+c*(p+1),A=S+1+c*(p+1),T=S+1+c*p;f.push(M,b,T),f.push(b,A,T)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ir=class n extends It{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],d=[],h=e,u=(t-e)/s,f=new I,g=new Ae;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let S=p+m,M=S,b=S+i+1,A=S+i+2,T=S+1;a.push(M,b,T),a.push(b,A,T)}}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ro=class n extends It{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,d=[],h=new I,u=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let S=[],M=p/i,b=0;p===0&&o===0?b=.5/t:p===i&&l===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){let T=A/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),m.push(T+b,1-M),S.push(c++)}d.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let M=d[p][S+1],b=d[p][S],A=d[p+1][S],T=d[p+1][S+1];(p!==0||o>0)&&f.push(M,b,T),(p!==i-1||l<Math.PI)&&f.push(b,A,T)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ps(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(sf(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(sf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function qt(n){let e={};for(let t=0;t<n.length;t++){let i=ps(n[t]);for(let s in i)e[s]=i[s]}return e}function sf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function F0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var qf={clone:ps,merge:qt},O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=B0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=F0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},qa=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Za=class extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ka=class extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ma(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var Oi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ja=class extends Oi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yu,endingEnd:yu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Su:r=e,a=2*t-i;break;case bu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Su:o=e,l=2*i-t;break;case bu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,S=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,M=(-1-f)*m+(1.5+f)*v+.5*g,b=f*m-f*v;for(let A=0;A!==a;++A)r[A]=p*o[d+A]+S*o[c+A]+M*o[l+A]+b*o[h+A];return r}},ja=class extends Oi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-t)/(s-t),h=1-d;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*d;return r}},Qa=class extends Oi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},el=class extends Oi{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.settings||this.DefaultSettings_,h=d.inTangents,u=d.outTangents;if(!h||!u){let v=(i-t)/(s-t),m=1-v;for(let p=0;p!==a;++p)r[p]=o[c+p]*m+o[l+p]*v;return r}let f=a*2,g=e-1;for(let v=0;v!==a;++v){let m=o[c+v],p=o[l+v],S=g*f+v*2,M=u[S],b=u[S+1],A=e*f+v*2,T=h[A],P=h[A+1],x=(i-t)/(s-t),w,R,C,F,W;for(let D=0;D<8;D++){w=x*x,R=w*x,C=1-x,F=C*C,W=F*C;let B=W*t+3*F*x*M+3*C*w*T+R*s-i;if(Math.abs(B)<1e-10)break;let V=3*F*(M-t)+6*C*x*(T-M)+3*w*(s-T);if(Math.abs(V)<1e-10)break;x=x-B/V,x=Math.max(0,Math.min(1,x))}r[v]=W*m+3*F*x*b+3*C*w*P+R*p}return r}},gn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ma(t,this.TimeBufferType),this.values=Ma(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ma(e.times,Array),values:Ma(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new el(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Hr:t=this.InterpolantFactoryMethodDiscrete;break;case Ba:t=this.InterpolantFactoryMethodLinear;break;case wa:t=this.InterpolantFactoryMethodSmooth;break;case vu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Te("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return Ba;case this.InterpolantFactoryMethodSmooth:return wa;case this.InterpolantFactoryMethodBezier:return vu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ce("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ce("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&e0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ce("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,u=h-i,f=h+i;for(let g=0;g!==i;++g){let v=t[h+g];if(v!==t[u+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ba;var Bi=class extends gn{constructor(e,t,i){super(e,t,i)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Hr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};tl.prototype.ValueTypeName="color";var nl=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};nl.prototype.ValueTypeName="number";var il=class extends Oi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let d=c+a;c!==d;c+=4)fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},oo=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}};oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends gn{constructor(e,t,i){super(e,t,i)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Hr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};sl.prototype.ValueTypeName="vector";var rl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zf=new rl,ol=class{constructor(e){this.manager=e!==void 0?e:Zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var ao=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},lo=class extends ao{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xu=new at,rf=new I,of=new I,wu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(rf),of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(of),t.updateMatrixWorld(),xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===qs||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ea=new I,Ta=new fn,Zn=new I,co=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ea,Ta,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ea,Ta,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ni=new I,af=new Ae,lf=new Ae,$t=class extends co{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,af,lf),t.subVectors(lf,af)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var sr=class extends co{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Au=class extends wu{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},uo=class extends ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Au}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ws=-90,Xs=1,al=class extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(Ws,Xs,e,t);s.layers=this.layers,this.add(s);let r=new $t(Ws,Xs,e,t);r.layers=this.layers,this.add(r);let o=new $t(Ws,Xs,e,t);o.layers=this.layers,this.add(o);let a=new $t(Ws,Xs,e,t);a.layers=this.layers,this.add(a);let l=new $t(Ws,Xs,e,t);l.layers=this.layers,this.add(l);let c=new $t(Ws,Xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ll=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var th="\\[\\]\\.:\\/",k0=new RegExp("["+th+"]","g"),nh="[^"+th+"]",V0="[^"+th.replace("\\.","")+"]",z0=/((?:WC+[\/:])*)/.source.replace("WC",nh),H0=/(WCOD+)?/.source.replace("WCOD",V0),G0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),W0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),X0=new RegExp("^"+z0+H0+G0+W0+"$"),$0=["material","materials","bones","map"],Cu=class{constructor(e,t,i){let s=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(k0,"")}static parseTrackName(e){let t=X0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);$0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Cu;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xC=new Float32Array(1);var cf=new at,rr=class{constructor(e,t,i=0,s=1/0){this.ray=new xi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ce("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cf),this}intersectObject(e,t=!0,i=[]){return Ru(e,this,i,t),i.sort(uf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ru(e[s],this,i,t);return i.sort(uf),i}};function uf(n,e){return n.distance-e.distance}function Ru(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Ru(r[o],e,t,!0)}}var or=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Iu=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var ho=class extends tr{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ve(i),s=new Ve(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,f=0,g=-a;u<=t;u++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let v=u===r?i:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}let d=new It;d.setAttribute("position",new lt(l,3)),d.setAttribute("color",new lt(c,3));let h=new ds({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var fo=class extends Fn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Te("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ih(n,e,t,i){let s=Y0(i);switch(t){case Yu:return n*e;case ml:return n*e/s.components*s.byteLength;case gl:return n*e/s.components*s.byteLength;case Wi:return n*e*2/s.components*s.byteLength;case _l:return n*e*2/s.components*s.byteLength;case qu:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case xl:return n*e*4/s.components*s.byteLength;case xo:case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yo:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:case bl:return Math.max(n,16)*Math.max(e,8)/4;case vl:case Sl:return Math.max(n,8)*Math.max(e,8)/2;case Ml:case El:case wl:case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tl:case bo:case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Gl:case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $l:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mo:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Y0(n){switch(n){case sn:case Gu:return{byteLength:1,components:1};case lr:case Wu:case ni:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case Vn:case dl:case Mn:return{byteLength:4,components:1};case Xu:case $u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function xp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Z0(n){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let d=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){let g=h[u],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,h[u]=v)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){let v=h[f];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,j0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ex=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nx=`#ifdef USE_AOMAP
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
#endif`,ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
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
#endif`,rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cx=`#ifdef USE_IRIDESCENCE
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
#endif`,ux=`#ifdef USE_BUMPMAP
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vx=`#define PI 3.141592653589793
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
} // validated`,yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sx=`vec3 transformedNormal = objectNormal;
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
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ox=`#ifdef USE_GRADIENTMAP
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
}`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yx=`PhysicalMaterial material;
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
#endif`,qx=`uniform sampler2D dfgLUT;
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
}`,Zx=`
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
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ov=`#if defined( USE_POINTS_UV )
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
#endif`,av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dv=`#ifdef USE_MORPHTARGETS
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
#endif`,fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vv=`#ifdef USE_NORMALMAP
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
#endif`,yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uv=`float getShadowMask() {
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
}`,Fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,Bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,Vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wv=`#ifdef USE_TRANSMISSION
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
#endif`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jv=`uniform sampler2D t2D;
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`#include <common>
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
}`,iy=`#if DEPTH_PACKING == 3200
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
}`,sy=`#define DISTANCE
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
}`,ry=`#define DISTANCE
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`uniform float scale;
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
}`,cy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,hy=`uniform vec3 diffuse;
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
}`,dy=`#define LAMBERT
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
}`,fy=`#define LAMBERT
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
}`,py=`#define MATCAP
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
}`,my=`#define MATCAP
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
}`,gy=`#define NORMAL
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
}`,_y=`#define NORMAL
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
}`,xy=`#define PHONG
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
}`,vy=`#define PHONG
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
}`,yy=`#define STANDARD
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
}`,Sy=`#define STANDARD
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
}`,by=`#define TOON
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
}`,My=`#define TOON
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
}`,Ey=`uniform float size;
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
}`,Ty=`uniform vec3 diffuse;
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
}`,wy=`#include <common>
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
}`,Ay=`uniform vec3 color;
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
}`,Cy=`uniform float rotation;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:K0,alphahash_pars_fragment:J0,alphamap_fragment:j0,alphamap_pars_fragment:Q0,alphatest_fragment:ex,alphatest_pars_fragment:tx,aomap_fragment:nx,aomap_pars_fragment:ix,batching_pars_vertex:sx,batching_vertex:rx,begin_vertex:ox,beginnormal_vertex:ax,bsdfs:lx,iridescence_fragment:cx,bumpmap_pars_fragment:ux,clipping_planes_fragment:hx,clipping_planes_pars_fragment:dx,clipping_planes_pars_vertex:fx,clipping_planes_vertex:px,color_fragment:mx,color_pars_fragment:gx,color_pars_vertex:_x,color_vertex:xx,common:vx,cube_uv_reflection_fragment:yx,defaultnormal_vertex:Sx,displacementmap_pars_vertex:bx,displacementmap_vertex:Mx,emissivemap_fragment:Ex,emissivemap_pars_fragment:Tx,colorspace_fragment:wx,colorspace_pars_fragment:Ax,envmap_fragment:Cx,envmap_common_pars_fragment:Rx,envmap_pars_fragment:Ix,envmap_pars_vertex:Px,envmap_physical_pars_fragment:Hx,envmap_vertex:Lx,fog_vertex:Nx,fog_pars_vertex:Dx,fog_fragment:Ux,fog_pars_fragment:Fx,gradientmap_pars_fragment:Ox,lightmap_pars_fragment:Bx,lights_lambert_fragment:kx,lights_lambert_pars_fragment:Vx,lights_pars_begin:zx,lights_toon_fragment:Gx,lights_toon_pars_fragment:Wx,lights_phong_fragment:Xx,lights_phong_pars_fragment:$x,lights_physical_fragment:Yx,lights_physical_pars_fragment:qx,lights_fragment_begin:Zx,lights_fragment_maps:Kx,lights_fragment_end:Jx,lightprobes_pars_fragment:jx,logdepthbuf_fragment:Qx,logdepthbuf_pars_fragment:ev,logdepthbuf_pars_vertex:tv,logdepthbuf_vertex:nv,map_fragment:iv,map_pars_fragment:sv,map_particle_fragment:rv,map_particle_pars_fragment:ov,metalnessmap_fragment:av,metalnessmap_pars_fragment:lv,morphinstance_vertex:cv,morphcolor_vertex:uv,morphnormal_vertex:hv,morphtarget_pars_vertex:dv,morphtarget_vertex:fv,normal_fragment_begin:pv,normal_fragment_maps:mv,normal_pars_fragment:gv,normal_pars_vertex:_v,normal_vertex:xv,normalmap_pars_fragment:vv,clearcoat_normal_fragment_begin:yv,clearcoat_normal_fragment_maps:Sv,clearcoat_pars_fragment:bv,iridescence_pars_fragment:Mv,opaque_fragment:Ev,packing:Tv,premultiplied_alpha_fragment:wv,project_vertex:Av,dithering_fragment:Cv,dithering_pars_fragment:Rv,roughnessmap_fragment:Iv,roughnessmap_pars_fragment:Pv,shadowmap_pars_fragment:Lv,shadowmap_pars_vertex:Nv,shadowmap_vertex:Dv,shadowmask_pars_fragment:Uv,skinbase_vertex:Fv,skinning_pars_vertex:Ov,skinning_vertex:Bv,skinnormal_vertex:kv,specularmap_fragment:Vv,specularmap_pars_fragment:zv,tonemapping_fragment:Hv,tonemapping_pars_fragment:Gv,transmission_fragment:Wv,transmission_pars_fragment:Xv,uv_pars_fragment:$v,uv_pars_vertex:Yv,uv_vertex:qv,worldpos_vertex:Zv,background_vert:Kv,background_frag:Jv,backgroundCube_vert:jv,backgroundCube_frag:Qv,cube_vert:ey,cube_frag:ty,depth_vert:ny,depth_frag:iy,distance_vert:sy,distance_frag:ry,equirect_vert:oy,equirect_frag:ay,linedashed_vert:ly,linedashed_frag:cy,meshbasic_vert:uy,meshbasic_frag:hy,meshlambert_vert:dy,meshlambert_frag:fy,meshmatcap_vert:py,meshmatcap_frag:my,meshnormal_vert:gy,meshnormal_frag:_y,meshphong_vert:xy,meshphong_frag:vy,meshphysical_vert:yy,meshphysical_frag:Sy,meshtoon_vert:by,meshtoon_frag:My,points_vert:Ey,points_frag:Ty,shadow_vert:wy,shadow_frag:Ay,sprite_vert:Cy,sprite_frag:Ry},ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},si={basic:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:qt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:qt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:qt([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:qt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:qt([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:qt([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:qt([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:qt([ce.lights,ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};si.physical={uniforms:qt([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Jl={r:0,b:0,g:0},Iy=new at,vp=new Ne;vp.set(-1,0,0,0,1,0,0,0,1);function Py(n,e,t,i,s,r){let o=new Ve(0),a=s===!0?0:1,l,c,d=null,h=0,u=null;function f(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let b=S.backgroundBlurriness>0;M=e.get(M,b)}return M}function g(S){let M=!1,b=f(S);b===null?m(o,a):b&&b.isColor&&(m(b,1),M=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,M){let b=f(M);b&&(b.isCubeTexture||b.mapping===go)?(c===void 0&&(c=new Yt(new Fi(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:ps(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vp),c.material.toneMapped=Ze.getTransfer(b.colorSpace)!==tt,(d!==b||h!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Yt(new so(2,2),new mn({name:"BackgroundMaterial",uniforms:ps(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(b.colorSpace)!==tt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,h=b.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,M){S.getRGB(Jl,eh(n)),t.buffers.color.setClear(Jl.r,Jl.g,Jl.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:v,dispose:p}}function Ly(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(C,F,W,D,L){let B=!1,V=h(C,D,W,F);r!==V&&(r=V,c(r.object)),B=f(C,D,W,L),B&&g(C,D,W,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,b(C,F,W,D),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function h(C,F,W,D){let L=D.wireframe===!0,B=i[F.id];B===void 0&&(B={},i[F.id]=B);let V=C.isInstancedMesh===!0?C.id:0,Z=B[V];Z===void 0&&(Z={},B[V]=Z);let J=Z[W.id];J===void 0&&(J={},Z[W.id]=J);let ie=J[L];return ie===void 0&&(ie=u(l()),J[L]=ie),ie}function u(C){let F=[],W=[],D=[];for(let L=0;L<t;L++)F[L]=0,W[L]=0,D[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:D,object:C,attributes:{},index:null}}function f(C,F,W,D){let L=r.attributes,B=F.attributes,V=0,Z=W.getAttributes();for(let J in Z)if(Z[J].location>=0){let me=L[J],ve=B[J];if(ve===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor)),me===void 0||me.attribute!==ve||ve&&me.data!==ve.data)return!0;V++}return r.attributesNum!==V||r.index!==D}function g(C,F,W,D){let L={},B=F.attributes,V=0,Z=W.getAttributes();for(let J in Z)if(Z[J].location>=0){let me=B[J];me===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(me=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(me=C.instanceColor));let ve={};ve.attribute=me,me&&me.data&&(ve.data=me.data),L[J]=ve,V++}r.attributes=L,r.attributesNum=V,r.index=D}function v(){let C=r.newAttributes;for(let F=0,W=C.length;F<W;F++)C[F]=0}function m(C){p(C,0)}function p(C,F){let W=r.newAttributes,D=r.enabledAttributes,L=r.attributeDivisors;W[C]=1,D[C]===0&&(n.enableVertexAttribArray(C),D[C]=1),L[C]!==F&&(n.vertexAttribDivisor(C,F),L[C]=F)}function S(){let C=r.newAttributes,F=r.enabledAttributes;for(let W=0,D=F.length;W<D;W++)F[W]!==C[W]&&(n.disableVertexAttribArray(W),F[W]=0)}function M(C,F,W,D,L,B,V){V===!0?n.vertexAttribIPointer(C,F,W,L,B):n.vertexAttribPointer(C,F,W,D,L,B)}function b(C,F,W,D){v();let L=D.attributes,B=W.getAttributes(),V=F.defaultAttributeValues;for(let Z in B){let J=B[Z];if(J.location>=0){let ie=L[Z];if(ie===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor)),ie!==void 0){let me=ie.normalized,ve=ie.itemSize,Xe=e.get(ie);if(Xe===void 0)continue;let et=Xe.buffer,Pe=Xe.type,K=Xe.bytesPerElement,de=Pe===n.INT||Pe===n.UNSIGNED_INT||ie.gpuType===dl;if(ie.isInterleavedBufferAttribute){let se=ie.data,Re=se.stride,Ue=ie.offset;if(se.isInstancedInterleavedBuffer){for(let Ie=0;Ie<J.locationSize;Ie++)p(J.location+Ie,se.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ie=0;Ie<J.locationSize;Ie++)m(J.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,et);for(let Ie=0;Ie<J.locationSize;Ie++)M(J.location+Ie,ve/J.locationSize,Pe,me,Re*K,(Ue+ve/J.locationSize*Ie)*K,de)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<J.locationSize;se++)p(J.location+se,ie.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<J.locationSize;se++)m(J.location+se);n.bindBuffer(n.ARRAY_BUFFER,et);for(let se=0;se<J.locationSize;se++)M(J.location+se,ve/J.locationSize,Pe,me,ve*K,ve/J.locationSize*se*K,de)}}else if(V!==void 0){let me=V[Z];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(J.location,me);break;case 3:n.vertexAttrib3fv(J.location,me);break;case 4:n.vertexAttrib4fv(J.location,me);break;default:n.vertexAttrib1fv(J.location,me)}}}}S()}function A(){w();for(let C in i){let F=i[C];for(let W in F){let D=F[W];for(let L in D){let B=D[L];for(let V in B)d(B[V].object),delete B[V];delete D[L]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;let F=i[C.id];for(let W in F){let D=F[W];for(let L in D){let B=D[L];for(let V in B)d(B[V].object),delete B[V];delete D[L]}}delete i[C.id]}function P(C){for(let F in i){let W=i[F];for(let D in W){let L=W[D];if(L[C.id]===void 0)continue;let B=L[C.id];for(let V in B)d(B[V].object),delete B[V];delete L[C.id]}}}function x(C){for(let F in i){let W=i[F],D=C.isInstancedMesh===!0?C.id:0,L=W[D];if(L!==void 0){for(let B in L){let V=L[B];for(let Z in V)d(V[Z].object),delete V[Z];delete L[B]}delete W[D],Object.keys(W).length===0&&delete i[F]}}}function w(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Ny(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Dy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==En&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let x=P===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==sn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Mn&&!x)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Te("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:b,maxSamples:A,samples:T}}function Uy(n){let e=this,t=null,i=0,s=!1,r=!1,o=new en,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let f=h.length!==0||u||i!==0||s;return s=u,i=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{let S=r?0:i,M=S*4,b=p.clippingState||null;l.value=b,b=d(g,u,M,f);for(let A=0;A!==M;++A)b[A]=t[A];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,f,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,b=f;M!==v;++M,b+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Xi=4,Kf=[.125,.215,.35,.446,.526,.582],ms=20,Fy=256,To=new sr,Jf=new Ve,sh=null,rh=0,oh=0,ah=!1,Oy=new I,Ql=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Oy}=r;sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,rh,oh),this._renderer.xr.enabled=ah,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ni,format:En,colorSpace:Gr,depthBuffer:!1},s=jf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=By(r)),this._blurMaterial=Vy(r,e,t),this._ggxMaterial=ky(r,e,t)}return s}_compileMaterial(e){let t=new Yt(new It,e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,i,s,r){let l=new $t(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Jf),h.toneMapping=kn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new Fi,new On({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Jf),p=!0);for(let M=0;M<6;M++){let b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[M],r.y,r.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[M]));let A=this._cubeSize;hr(s,b*A,M>2?A:0,A,A),h.setRenderTarget(s),p&&h.render(v,l),h.render(e,l)}h.toneMapping=f,h.autoClear=u,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===zi||e.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;hr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,To)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,f=h*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Xi?i-g+Xi:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,hr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,To),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,hr(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,To)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");let d=3,h=this._lodMeshes[s];h.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ms-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):ms;m>ms&&Te(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);let p=[],S=0;for(let P=0;P<ms;++P){let x=P/v,w=Math.exp(-x*x/2);p.push(w),P===0?S+=w:P<m&&(S+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;let b=this._sizeLods[s],A=3*b*(s>M-Xi?s-M+Xi:0),T=4*(this._cubeSize-b);hr(t,A,T,3*b,2*b),l.setRenderTarget(t),l.render(h,To)}};function By(n){let e=[],t=[],i=[],s=n,r=n-Xi+1+Kf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Xi?l=Kf[o-n+Xi-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*f),M=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let T=0;T<f;T++){let P=T%3*2/3-1,x=T>2?0:-1,w=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];S.set(w,v*g*T),M.set(u,m*g*T);let R=[T,T,T,T,T,T];b.set(R,p*g*T)}let A=new It;A.setAttribute("position",new Bt(S,v)),A.setAttribute("uv",new Bt(M,m)),A.setAttribute("faceIndex",new Bt(b,p)),i.push(new Yt(A,null)),s>Xi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function jf(n,e,t){let i=new pn(n,e,t);return i.texture.mapping=go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ky(n,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Vy(n,e,t){let i=new Float32Array(ms),s=new I(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Qf(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ep(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}var ec=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new eo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fi(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:ti});r.uniforms.tEquirect.value=t;let o=new Yt(s,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Ht),new al(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function zy(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===cl||f===ul)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new ec(g.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===cl||f===ul,v=f===zi||f===fs;if(g||v){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Ql(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new Ql(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function a(u,f){return f===cl?u.mapping=zi:f===ul&&(u.mapping=fs),u}function l(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Hy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ka("WebGLRenderer: "+i+" extension not supported."),s}}}function Gy(n,e,t,i){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(h){let u=h.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(h){let u=[],f=h.index,g=h.attributes.position,v=0;if(g===void 0)return;if(f!==null){let S=f.array;v=f.version;for(let M=0,b=S.length;M<b;M+=3){let A=S[M+0],T=S[M+1],P=S[M+2];u.push(A,T,T,P,P,A)}}else{let S=g.array;v=g.version;for(let M=0,b=S.length/3-1;M<b;M+=3){let A=M+0,T=M+1,P=M+2;u.push(A,T,T,P,P,A)}}let m=new(g.count>=65535?Zr:qr)(u,1);m.version=v;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function d(h){let u=r.get(h);if(u){let f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Wy(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,u){n.drawElements(i,u,r,h*o),t.update(u,i,1)}function c(h,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,h*o,f),t.update(u,i,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Xy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ce("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $y(n,e,t){let i=new WeakMap,s=new St;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0,u=i.get(a);if(u===void 0||u.count!==h){let w=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let b=a.attributes.position.count*M,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*A*4*h),P=new $r(T,b,A,h);P.type=Mn,P.needsUpdate=!0;let x=M*4;for(let R=0;R<h;R++){let C=m[R],F=p[R],W=S[R],D=b*A*4*R;for(let L=0;L<C.count;L++){let B=L*x;f===!0&&(s.fromBufferAttribute(C,L),T[D+B+0]=s.x,T[D+B+1]=s.y,T[D+B+2]=s.z,T[D+B+3]=0),g===!0&&(s.fromBufferAttribute(F,L),T[D+B+4]=s.x,T[D+B+5]=s.y,T[D+B+6]=s.z,T[D+B+7]=0),v===!0&&(s.fromBufferAttribute(W,L),T[D+B+8]=s.x,T[D+B+9]=s.y,T[D+B+10]=s.z,T[D+B+11]=W.itemSize===4?s.w:1)}}u={count:h,texture:P,size:new Ae(b,A)},i.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Yy(n,e,t,i,s){let r=new WeakMap;function o(c){let d=s.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function a(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var qy={[Uu]:"LINEAR_TONE_MAPPING",[Fu]:"REINHARD_TONE_MAPPING",[Ou]:"CINEON_TONE_MAPPING",[Bu]:"ACES_FILMIC_TONE_MAPPING",[Vu]:"AGX_TONE_MAPPING",[zu]:"NEUTRAL_TONE_MAPPING",[ku]:"CUSTOM_TONE_MAPPING"};function Zy(n,e,t,i,s){let r=new pn(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new vi(e,t):void 0}),o=new pn(e,t,{type:ni,depthBuffer:!1,stencilBuffer:!1}),a=new It;a.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new lt([0,2,0,0,2,0],2));let l=new qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Yt(a,l),d=new sr(-1,1,1,-1,0,1),h=null,u=null,f=!1,g,v=null,m=[],p=!1;this.setSize=function(S,M){r.setSize(S,M),o.setSize(S,M);for(let b=0;b<m.length;b++){let A=m[b];A.setSize&&A.setSize(S,M)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;let M=r.width,b=r.height;for(let A=0;A<m.length;A++){let T=m[A];T.setSize&&T.setSize(M,b)}},this.begin=function(S,M){if(f||S.toneMapping===kn&&m.length===0)return!1;if(v=M,M!==null){let b=M.width,A=M.height;(r.width!==b||r.height!==A)&&this.setSize(b,A)}return p===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=kn,!0},this.hasRenderPass=function(){return p},this.end=function(S,M){S.toneMapping=g,f=!0;let b=r,A=o;for(let T=0;T<m.length;T++){let P=m[T];if(P.enabled!==!1&&(P.render(S,A,b,M),P.needsSwap!==!1)){let x=b;b=A,A=x}}if(h!==S.outputColorSpace||u!==S.toneMapping){h=S.outputColorSpace,u=S.toneMapping,l.defines={},Ze.getTransfer(h)===tt&&(l.defines.SRGB_TRANSFER="");let T=qy[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(v),S.render(c,d),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var yp=new tn,uh=new vi(1,1),Sp=new $r,bp=new Ha,Mp=new eo,tp=[],np=[],ip=new Float32Array(16),sp=new Float32Array(9),rp=new Float32Array(4);function fr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=tp[s];if(r===void 0&&(r=new Float32Array(s),tp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ic(n,e){let t=np[e];t===void 0&&(t=new Int32Array(e),np[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ky(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Jy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function jy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function Qy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function eS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;rp.set(i),n.uniformMatrix2fv(this.addr,!1,rp),Ut(t,i)}}function tS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;sp.set(i),n.uniformMatrix3fv(this.addr,!1,sp),Ut(t,i)}}function nS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;ip.set(i),n.uniformMatrix4fv(this.addr,!1,ip),Ut(t,i)}}function iS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function rS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function oS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function aS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function cS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function uS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function hS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(uh.compareFunction=t.isReversedDepthBuffer()?Kl:Zl,r=uh):r=yp,t.setTexture2D(e||r,s)}function dS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||bp,s)}function fS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Mp,s)}function pS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Sp,s)}function mS(n){switch(n){case 5126:return Ky;case 35664:return Jy;case 35665:return jy;case 35666:return Qy;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return sS;case 35668:case 35672:return rS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return cS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return pS}}function gS(n,e){n.uniform1fv(this.addr,e)}function _S(n,e){let t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function xS(n,e){let t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function vS(n,e){let t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function yS(n,e){let t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function SS(n,e){let t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bS(n,e){let t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function MS(n,e){n.uniform1iv(this.addr,e)}function ES(n,e){n.uniform2iv(this.addr,e)}function TS(n,e){n.uniform3iv(this.addr,e)}function wS(n,e){n.uniform4iv(this.addr,e)}function AS(n,e){n.uniform1uiv(this.addr,e)}function CS(n,e){n.uniform2uiv(this.addr,e)}function RS(n,e){n.uniform3uiv(this.addr,e)}function IS(n,e){n.uniform4uiv(this.addr,e)}function PS(n,e,t){let i=this.cache,s=e.length,r=ic(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=uh:o=yp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function LS(n,e,t){let i=this.cache,s=e.length,r=ic(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||bp,r[o])}function NS(n,e,t){let i=this.cache,s=e.length,r=ic(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Mp,r[o])}function DS(n,e,t){let i=this.cache,s=e.length,r=ic(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sp,r[o])}function US(n){switch(n){case 5126:return gS;case 35664:return _S;case 35665:return xS;case 35666:return vS;case 35674:return yS;case 35675:return SS;case 35676:return bS;case 5124:case 35670:return MS;case 35667:case 35671:return ES;case 35668:case 35672:return TS;case 35669:case 35673:return wS;case 5125:return AS;case 36294:return CS;case 36295:return RS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return PS;case 35679:case 36299:case 36307:return LS;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return DS}}var hh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mS(t.type)}},dh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=US(t.type)}},fh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},lh=/(\w+)(\])?(\[|\.)?/g;function op(n,e){n.seq.push(e),n.map[e.id]=e}function FS(n,e,t){let i=n.name,s=i.length;for(lh.lastIndex=0;;){let r=lh.exec(i),o=lh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){op(t,c===void 0?new hh(a,n,e):new dh(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new fh(a),op(t,h)),t=h}}}var dr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);FS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function ap(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var OS=37297,BS=0;function kS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var lp=new Ne;function VS(n){Ze._getMatrix(lp,Ze.workingColorSpace,n);let e=`mat3( ${lp.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Wr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+kS(n.getShaderSource(e),a)}else return r}function zS(n,e){let t=VS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var HS={[Uu]:"Linear",[Fu]:"Reinhard",[Ou]:"Cineon",[Bu]:"ACESFilmic",[Vu]:"AgX",[zu]:"Neutral",[ku]:"Custom"};function GS(n,e){let t=HS[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jl=new I;function WS(){Ze.getLuminanceCoefficients(jl);let n=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function $S(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function YS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ao(n){return n!==""}function up(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(n){return n.replace(qS,KS)}var ZS=new Map;function KS(n,e){let t=ze[e];if(t===void 0){let i=ZS.get(e);if(i!==void 0)t=ze[i],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ph(t)}var JS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dp(n){return n.replace(JS,jS)}function jS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var QS={[po]:"SHADOWMAP_TYPE_PCF",[ar]:"SHADOWMAP_TYPE_VSM"};function eb(n){return QS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tb={[zi]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE_UV"};function nb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":tb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var ib={[fs]:"ENVMAP_MODE_REFRACTION"};function sb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ib[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var rb={[Du]:"ENVMAP_BLENDING_MULTIPLY",[Lf]:"ENVMAP_BLENDING_MIX",[Nf]:"ENVMAP_BLENDING_ADD"};function ob(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":rb[n.combine]||"ENVMAP_BLENDING_NONE"}function ab(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function lb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=eb(t),c=nb(t),d=sb(t),h=ob(t),u=ab(t),f=XS(t),g=$S(r),v=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ao).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ao).join(`
`),p.length>0&&(p+=`
`)):(m=[fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),p=[fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?ze.tonemapping_pars_fragment:"",t.toneMapping!==kn?GS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,zS("linearToOutputTexel",t.outputColorSpace),WS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ao).join(`
`)),o=ph(o),o=up(o,t),o=hp(o,t),a=ph(a),a=up(a,t),a=hp(a,t),o=dp(o),a=dp(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=S+m+o,b=S+p+a,A=ap(s,s.VERTEX_SHADER,M),T=ap(s,s.FRAGMENT_SHADER,b);s.attachShader(v,A),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(C){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(v)||"",W=s.getShaderInfoLog(A)||"",D=s.getShaderInfoLog(T)||"",L=F.trim(),B=W.trim(),V=D.trim(),Z=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,T);else{let ie=cp(s,A,"vertex"),me=cp(s,T,"fragment");Ce("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+ie+`
`+me)}else L!==""?Te("WebGLProgram: Program Info Log:",L):(B===""||V==="")&&(J=!1);J&&(C.diagnostics={runnable:Z,programLog:L,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(A),s.deleteShader(T),x=new dr(s,v),w=YS(s,v)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,OS)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}var cb=0,mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new gh(e),t.set(e,i)),i}},gh=class{constructor(e){this.id=cb++,this.code=e,this.usedTimes=0}};function ub(n){return n===Wi||n===bo||n===Mo}function hb(n,e,t,i,s,r){let o=new js,a=new mh,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,w,R,C,F,W){let D=C.fog,L=F.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||B,V),J=Z&&Z.mapping===go?Z.image.height:null,ie=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Te("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let me=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ve=me!==void 0?me.length:0,Xe=0;L.morphAttributes.position!==void 0&&(Xe=1),L.morphAttributes.normal!==void 0&&(Xe=2),L.morphAttributes.color!==void 0&&(Xe=3);let et,Pe,K,de;if(ie){let Fe=si[ie];et=Fe.vertexShader,Pe=Fe.fragmentShader}else et=x.vertexShader,Pe=x.fragmentShader,a.update(x),K=a.getVertexShaderID(x),de=a.getFragmentShaderID(x);let se=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,Ie=F.isBatchedMesh===!0,vt=!!x.map,Ye=!!x.matcap,st=!!Z,gt=!!x.aoMap,$e=!!x.lightMap,Lt=!!x.bumpMap,yt=!!x.normalMap,cn=!!x.displacementMap,U=!!x.emissiveMap,Nt=!!x.metalnessMap,qe=!!x.roughnessMap,ft=x.anisotropy>0,le=x.clearcoat>0,bt=x.dispersion>0,E=x.iridescence>0,_=x.sheen>0,k=x.transmission>0,Y=ft&&!!x.anisotropyMap,Q=le&&!!x.clearcoatMap,ee=le&&!!x.clearcoatNormalMap,ae=le&&!!x.clearcoatRoughnessMap,X=E&&!!x.iridescenceMap,q=E&&!!x.iridescenceThicknessMap,fe=_&&!!x.sheenColorMap,_e=_&&!!x.sheenRoughnessMap,re=!!x.specularMap,te=!!x.specularColorMap,Le=!!x.specularIntensityMap,Be=k&&!!x.transmissionMap,Qe=k&&!!x.thicknessMap,N=!!x.gradientMap,ne=!!x.alphaMap,$=x.alphaTest>0,pe=!!x.alphaHash,oe=!!x.extensions,j=kn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(j=n.toneMapping);let Se={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:et,fragmentShader:Pe,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ie,batchingColor:Ie&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:vt,matcap:Ye,envMap:st,envMapMode:st&&Z.mapping,envMapCubeUVHeight:J,aoMap:gt,lightMap:$e,bumpMap:Lt,normalMap:yt,displacementMap:cn,emissiveMap:U,normalMapObjectSpace:yt&&x.normalMapType===Ff,normalMapTangentSpace:yt&&x.normalMapType===Zu,packedNormalMap:yt&&x.normalMapType===Zu&&ub(x.normalMap.format),metalnessMap:Nt,roughnessMap:qe,anisotropy:ft,anisotropyMap:Y,clearcoat:le,clearcoatMap:Q,clearcoatNormalMap:ee,clearcoatRoughnessMap:ae,dispersion:bt,iridescence:E,iridescenceMap:X,iridescenceThicknessMap:q,sheen:_,sheenColorMap:fe,sheenRoughnessMap:_e,specularMap:re,specularColorMap:te,specularIntensityMap:Le,transmission:k,transmissionMap:Be,thicknessMap:Qe,gradientMap:N,opaque:x.transparent===!1&&x.blending===us&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:$,alphaHash:pe,combine:x.combine,mapUv:vt&&g(x.map.channel),aoMapUv:gt&&g(x.aoMap.channel),lightMapUv:$e&&g(x.lightMap.channel),bumpMapUv:Lt&&g(x.bumpMap.channel),normalMapUv:yt&&g(x.normalMap.channel),displacementMapUv:cn&&g(x.displacementMap.channel),emissiveMapUv:U&&g(x.emissiveMap.channel),metalnessMapUv:Nt&&g(x.metalnessMap.channel),roughnessMapUv:qe&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:Q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(x.sheenRoughnessMap.channel),specularMapUv:re&&g(x.specularMap.channel),specularColorMapUv:te&&g(x.specularColorMap.channel),specularIntensityMapUv:Le&&g(x.specularIntensityMap.channel),transmissionMapUv:Be&&g(x.transmissionMap.channel),thicknessMapUv:Qe&&g(x.thicknessMap.channel),alphaMapUv:ne&&g(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(yt||ft),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!L.attributes.uv&&(vt||ne),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:F.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Xe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:j,decodeVideoTexture:vt&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:U&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bn,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(w,x),S(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function M(x){let w=f[x.type],R;if(w){let C=si[w];R=qf.clone(C.uniforms)}else R=x.uniforms;return R}function b(x,w){let R=d.get(w);return R!==void 0?++R.usedTimes:(R=new lb(n,w,x,s),c.push(R),d.set(w,R)),R}function A(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function P(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:b,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:P}}function db(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function fb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function pp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,v,m,p){let S=n[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=o(u),S.groupOrder=v,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function l(u,f,g,v,m,p){let S=a(u,f,g,v,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(u,f,g,v,m,p){let S=a(u,f,g,v,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function d(u,f){t.length>1&&t.sort(u||fb),i.length>1&&i.sort(f||pp),s.length>1&&s.sort(f||pp)}function h(){for(let u=e,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function pb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new mp,n.set(i,[o])):s>=r.length?(o=new mp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function mb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ve};break;case"SpotLight":t={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function gb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var _b=0;function xb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vb(n){let e=new mb,t=gb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new at,o=new at;function a(c){let d=0,h=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,M=0,b=0,A=0,T=0,P=0;c.sort(xb);for(let w=0,R=c.length;w<R;w++){let C=c[w],F=C.color,W=C.intensity,D=C.distance,L=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Wi?L=C.shadow.map.texture:L=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=F.r*W,h+=F.g*W,u+=F.b*W;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],W);P++}else if(C.isDirectionalLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let V=C.shadow,Z=t.get(C);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=L,i.directionalShadowMatrix[f]=C.shadow.matrix,S++}i.directional[f]=B,f++}else if(C.isSpotLight){let B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(F).multiplyScalar(W),B.distance=D,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[v]=B;let V=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,V.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[v]=V.matrix,C.castShadow){let Z=t.get(C);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,i.spotShadow[v]=Z,i.spotShadowMap[v]=L,b++}v++}else if(C.isRectAreaLight){let B=e.get(C);B.color.copy(F).multiplyScalar(W),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=B,m++}else if(C.isPointLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let V=C.shadow,Z=t.get(C);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,Z.shadowCameraNear=V.camera.near,Z.shadowCameraFar=V.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=C.shadow.matrix,M++}i.point[g]=B,g++}else if(C.isHemisphereLight){let B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(W),B.groundColor.copy(C.groundColor).multiplyScalar(W),i.hemi[p]=B,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;let x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==S||x.numPointShadows!==M||x.numSpotShadows!==b||x.numSpotMaps!==A||x.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,x.directionalLength=f,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=S,x.numPointShadows=M,x.numSpotShadows=b,x.numSpotMaps=A,x.numLightProbes=P,i.version=_b++)}function l(c,d){let h=0,u=0,f=0,g=0,v=0,m=d.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let M=c[p];if(M.isDirectionalLight){let b=i.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(M.isSpotLight){let b=i.spot[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){let b=i.hemi[v];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function gp(n){let e=new vb(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function yb(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new gp(n),e.set(s,[a])):r>=o.length?(a=new gp(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bb=`uniform sampler2D shadow_pass;
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
}`,Mb=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Eb=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],_p=new at,wo=new I,ch=new I;function Tb(n,e,t){let i=new er,s=new Ae,r=new Ae,o=new St,a=new Za,l=new Ka,c={},d=t.maxTextureSize,h={[gi]:Jt,[Jt]:gi,[bn]:bn},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Sb,fragmentShader:bb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new It;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Yt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let p=this.type;this.render=function(T,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===ff&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=po);let w=n.getRenderTarget(),R=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ti),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let W=p!==this.type;W&&P.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(L=>L.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,L=T.length;D<L;D++){let B=T[D],V=B.shadow;if(V===void 0){Te("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Z=V.getFrameExtents();s.multiply(Z),r.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Z.x),s.x=r.x*Z.x,V.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Z.y),s.y=r.y*Z.y,V.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=J,V.map===null||W===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ar){if(B.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new pn(s.x,s.y,{format:Wi,type:ni,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new vi(s.x,s.y,Mn),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=jn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=kt,V.map.depthTexture.magFilter=kt}else B.isPointLight?(V.map=new ec(s.x),V.map.depthTexture=new $a(s.x,Vn)):(V.map=new pn(s.x,s.y),V.map.depthTexture=new vi(s.x,s.y,Vn)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=jn,this.type===po?(V.map.depthTexture.compareFunction=J?Kl:Zl,V.map.depthTexture.minFilter=Ht,V.map.depthTexture.magFilter=Ht):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=kt,V.map.depthTexture.magFilter=kt);V.camera.updateProjectionMatrix()}let ie=V.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ie;me++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,me),n.clear();else{me===0&&(n.setRenderTarget(V.map),n.clear());let ve=V.getViewport(me);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),F.viewport(o)}if(B.isPointLight){let ve=V.camera,Xe=V.matrix,et=B.distance||ve.far;et!==ve.far&&(ve.far=et,ve.updateProjectionMatrix()),wo.setFromMatrixPosition(B.matrixWorld),ve.position.copy(wo),ch.copy(ve.position),ch.add(Mb[me]),ve.up.copy(Eb[me]),ve.lookAt(ch),ve.updateMatrixWorld(),Xe.makeTranslation(-wo.x,-wo.y,-wo.z),_p.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),V._frustum.setFromProjectionMatrix(_p,ve.coordinateSystem,ve.reversedDepth)}else V.updateMatrices(B);i=V.getFrustum(),b(P,x,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===ar&&S(V,x),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,R,C)};function S(T,P){let x=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pn(s.x,s.y,{format:Wi,type:ni})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,x,u,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,x,f,v,null)}function M(T,P,x,w){let R=null,C=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)R=C;else if(R=x.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=R.uuid,W=P.uuid,D=c[F];D===void 0&&(D={},c[F]=D);let L=D[W];L===void 0&&(L=R.clone(),D[W]=L,P.addEventListener("dispose",A)),R=L}if(R.visible=P.visible,R.wireframe=P.wireframe,w===ar?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:h[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=n.properties.get(R);F.light=x}return R}function b(T,P,x,w,R){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===ar)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let W=e.update(T),D=T.material;if(Array.isArray(D)){let L=W.groups;for(let B=0,V=L.length;B<V;B++){let Z=L[B],J=D[Z.materialIndex];if(J&&J.visible){let ie=M(T,J,w,R);T.onBeforeShadow(n,T,P,x,W,ie,Z),n.renderBufferDirect(x,null,W,ie,T,Z),T.onAfterShadow(n,T,P,x,W,ie,Z)}}}else if(D.visible){let L=M(T,D,w,R);T.onBeforeShadow(n,T,P,x,W,L,null),n.renderBufferDirect(x,null,W,L,T,null),T.onAfterShadow(n,T,P,x,W,L,null)}}let F=T.children;for(let W=0,D=F.length;W<D;W++)b(F[W],P,x,w,R)}function A(T){T.target.removeEventListener("dispose",A);for(let x in c){let w=c[x],R=T.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function wb(n,e){function t(){let N=!1,ne=new St,$=null,pe=new St(0,0,0,0);return{setMask:function(oe){$!==oe&&!N&&(n.colorMask(oe,oe,oe,oe),$=oe)},setLocked:function(oe){N=oe},setClear:function(oe,j,Se,Fe,Et){Et===!0&&(oe*=Fe,j*=Fe,Se*=Fe),ne.set(oe,j,Se,Fe),pe.equals(ne)===!1&&(n.clearColor(oe,j,Se,Fe),pe.copy(ne))},reset:function(){N=!1,$=null,pe.set(-1,0,0,0)}}}function i(){let N=!1,ne=!1,$=null,pe=null,oe=null;return{setReversed:function(j){if(ne!==j){let Se=e.get("EXT_clip_control");j?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ne=j;let Fe=oe;oe=null,this.setClear(Fe)}},getReversed:function(){return ne},setTest:function(j){j?se(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(j){$!==j&&!N&&(n.depthMask(j),$=j)},setFunc:function(j){if(ne&&(j=$f[j]),pe!==j){switch(j){case Ra:n.depthFunc(n.NEVER);break;case Ia:n.depthFunc(n.ALWAYS);break;case Pa:n.depthFunc(n.LESS);break;case hs:n.depthFunc(n.LEQUAL);break;case La:n.depthFunc(n.EQUAL);break;case Na:n.depthFunc(n.GEQUAL);break;case Da:n.depthFunc(n.GREATER);break;case Ua:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=j}},setLocked:function(j){N=j},setClear:function(j){oe!==j&&(oe=j,ne&&(j=1-j),n.clearDepth(j))},reset:function(){N=!1,$=null,pe=null,oe=null,ne=!1}}}function s(){let N=!1,ne=null,$=null,pe=null,oe=null,j=null,Se=null,Fe=null,Et=null;return{setTest:function(rt){N||(rt?se(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(rt){ne!==rt&&!N&&(n.stencilMask(rt),ne=rt)},setFunc:function(rt,ci,Yn){($!==rt||pe!==ci||oe!==Yn)&&(n.stencilFunc(rt,ci,Yn),$=rt,pe=ci,oe=Yn)},setOp:function(rt,ci,Yn){(j!==rt||Se!==ci||Fe!==Yn)&&(n.stencilOp(rt,ci,Yn),j=rt,Se=ci,Fe=Yn)},setLocked:function(rt){N=rt},setClear:function(rt){Et!==rt&&(n.clearStencil(rt),Et=rt)},reset:function(){N=!1,ne=null,$=null,pe=null,oe=null,j=null,Se=null,Fe=null,Et=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,d={},h={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,M=null,b=null,A=null,T=null,P=null,x=new Ve(0,0,0),w=0,R=!1,C=null,F=null,W=null,D=null,L=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Z=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=Z>=2);let ie=null,me={},ve=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),et=new St().fromArray(ve),Pe=new St().fromArray(Xe);function K(N,ne,$,pe){let oe=new Uint8Array(4),j=n.createTexture();n.bindTexture(N,j),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<$;Se++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(ne+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return j}let de={};de[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(hs),Lt(!1),yt(Pu),se(n.CULL_FACE),gt(ti);function se(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Re(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function Ue(N,ne){return u[N]!==ne?(n.bindFramebuffer(N,ne),u[N]=ne,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ne),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ie(N,ne){let $=g,pe=!1;if(N){$=f.get(ne),$===void 0&&($=[],f.set(ne,$));let oe=N.textures;if($.length!==oe.length||$[0]!==n.COLOR_ATTACHMENT0){for(let j=0,Se=oe.length;j<Se;j++)$[j]=n.COLOR_ATTACHMENT0+j;$.length=oe.length,pe=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,pe=!0);pe&&n.drawBuffers($)}function vt(N){return v!==N?(n.useProgram(N),v=N,!0):!1}let Ye={[Ui]:n.FUNC_ADD,[mf]:n.FUNC_SUBTRACT,[gf]:n.FUNC_REVERSE_SUBTRACT};Ye[_f]=n.MIN,Ye[xf]=n.MAX;let st={[vf]:n.ZERO,[yf]:n.ONE,[Sf]:n.SRC_COLOR,[Aa]:n.SRC_ALPHA,[Af]:n.SRC_ALPHA_SATURATE,[Tf]:n.DST_COLOR,[Mf]:n.DST_ALPHA,[bf]:n.ONE_MINUS_SRC_COLOR,[Ca]:n.ONE_MINUS_SRC_ALPHA,[wf]:n.ONE_MINUS_DST_COLOR,[Ef]:n.ONE_MINUS_DST_ALPHA,[Cf]:n.CONSTANT_COLOR,[Rf]:n.ONE_MINUS_CONSTANT_COLOR,[If]:n.CONSTANT_ALPHA,[Pf]:n.ONE_MINUS_CONSTANT_ALPHA};function gt(N,ne,$,pe,oe,j,Se,Fe,Et,rt){if(N===ti){m===!0&&(Re(n.BLEND),m=!1);return}if(m===!1&&(se(n.BLEND),m=!0),N!==pf){if(N!==p||rt!==R){if((S!==Ui||A!==Ui)&&(n.blendEquation(n.FUNC_ADD),S=Ui,A=Ui),rt)switch(N){case us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFunc(n.ONE,n.ONE);break;case Lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ce("WebGLState: Invalid blending: ",N);break}else switch(N){case us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Lu:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",N);break}M=null,b=null,T=null,P=null,x.set(0,0,0),w=0,p=N,R=rt}return}oe=oe||ne,j=j||$,Se=Se||pe,(ne!==S||oe!==A)&&(n.blendEquationSeparate(Ye[ne],Ye[oe]),S=ne,A=oe),($!==M||pe!==b||j!==T||Se!==P)&&(n.blendFuncSeparate(st[$],st[pe],st[j],st[Se]),M=$,b=pe,T=j,P=Se),(Fe.equals(x)===!1||Et!==w)&&(n.blendColor(Fe.r,Fe.g,Fe.b,Et),x.copy(Fe),w=Et),p=N,R=!1}function $e(N,ne){N.side===bn?Re(n.CULL_FACE):se(n.CULL_FACE);let $=N.side===Jt;ne&&($=!$),Lt($),N.blending===us&&N.transparent===!1?gt(ti):gt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let pe=N.stencilWrite;a.setTest(pe),pe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),U(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(N){C!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),C=N)}function yt(N){N!==hf?(se(n.CULL_FACE),N!==F&&(N===Pu?n.cullFace(n.BACK):N===df?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),F=N}function cn(N){N!==W&&(V&&n.lineWidth(N),W=N)}function U(N,ne,$){N?(se(n.POLYGON_OFFSET_FILL),(D!==ne||L!==$)&&(D=ne,L=$,o.getReversed()&&(ne=-ne),n.polygonOffset(ne,$))):Re(n.POLYGON_OFFSET_FILL)}function Nt(N){N?se(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function qe(N){N===void 0&&(N=n.TEXTURE0+B-1),ie!==N&&(n.activeTexture(N),ie=N)}function ft(N,ne,$){$===void 0&&(ie===null?$=n.TEXTURE0+B-1:$=ie);let pe=me[$];pe===void 0&&(pe={type:void 0,texture:void 0},me[$]=pe),(pe.type!==N||pe.texture!==ne)&&(ie!==$&&(n.activeTexture($),ie=$),n.bindTexture(N,ne||de[N]),pe.type=N,pe.texture=ne)}function le(){let N=me[ie];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function bt(){try{n.compressedTexImage2D(...arguments)}catch(N){Ce("WebGLState:",N)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(N){Ce("WebGLState:",N)}}function _(){try{n.texSubImage2D(...arguments)}catch(N){Ce("WebGLState:",N)}}function k(){try{n.texSubImage3D(...arguments)}catch(N){Ce("WebGLState:",N)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ce("WebGLState:",N)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ce("WebGLState:",N)}}function ee(){try{n.texStorage2D(...arguments)}catch(N){Ce("WebGLState:",N)}}function ae(){try{n.texStorage3D(...arguments)}catch(N){Ce("WebGLState:",N)}}function X(){try{n.texImage2D(...arguments)}catch(N){Ce("WebGLState:",N)}}function q(){try{n.texImage3D(...arguments)}catch(N){Ce("WebGLState:",N)}}function fe(N){return h[N]!==void 0?h[N]:n.getParameter(N)}function _e(N,ne){h[N]!==ne&&(n.pixelStorei(N,ne),h[N]=ne)}function re(N){et.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),et.copy(N))}function te(N){Pe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Pe.copy(N))}function Le(N,ne){let $=c.get(ne);$===void 0&&($=new WeakMap,c.set(ne,$));let pe=$.get(N);pe===void 0&&(pe=n.getUniformBlockIndex(ne,N.name),$.set(N,pe))}function Be(N,ne){let pe=c.get(ne).get(N);l.get(ne)!==pe&&(n.uniformBlockBinding(ne,pe,N.__bindingPointIndex),l.set(ne,pe))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},ie=null,me={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,M=null,b=null,A=null,T=null,P=null,x=new Ve(0,0,0),w=0,R=!1,C=null,F=null,W=null,D=null,L=null,et.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Re,bindFramebuffer:Ue,drawBuffers:Ie,useProgram:vt,setBlending:gt,setMaterial:$e,setFlipSided:Lt,setCullFace:yt,setLineWidth:cn,setPolygonOffset:U,setScissorTest:Nt,activeTexture:qe,bindTexture:ft,unbindTexture:le,compressedTexImage2D:bt,compressedTexImage3D:E,texImage2D:X,texImage3D:q,pixelStorei:_e,getParameter:fe,updateUBOMapping:Le,uniformBlockBinding:Be,texStorage2D:ee,texStorage3D:ae,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:re,viewport:te,reset:Qe}}function Ab(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,d=new WeakMap,h=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,_){return g?new OffscreenCanvas(E,_):Xr("canvas")}function m(E,_,k){let Y=1,Q=bt(E);if((Q.width>k||Q.height>k)&&(Y=k/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ee=Math.floor(Y*Q.width),ae=Math.floor(Y*Q.height);u===void 0&&(u=v(ee,ae));let X=_?v(ee,ae):u;return X.width=ee,X.height=ae,X.getContext("2d").drawImage(E,0,0,ee,ae),Te("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ee+"x"+ae+")."),X}else return"data"in E&&Te("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function p(E){return E.generateMipmaps}function S(E){n.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,_,k,Y,Q,ee=!1){if(E!==null){if(n[E]!==void 0)return n[E];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae;Y&&(ae=e.get("EXT_texture_norm16"),ae||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=_;if(_===n.RED&&(k===n.FLOAT&&(X=n.R32F),k===n.HALF_FLOAT&&(X=n.R16F),k===n.UNSIGNED_BYTE&&(X=n.R8),k===n.UNSIGNED_SHORT&&ae&&(X=ae.R16_EXT),k===n.SHORT&&ae&&(X=ae.R16_SNORM_EXT)),_===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.R8UI),k===n.UNSIGNED_SHORT&&(X=n.R16UI),k===n.UNSIGNED_INT&&(X=n.R32UI),k===n.BYTE&&(X=n.R8I),k===n.SHORT&&(X=n.R16I),k===n.INT&&(X=n.R32I)),_===n.RG&&(k===n.FLOAT&&(X=n.RG32F),k===n.HALF_FLOAT&&(X=n.RG16F),k===n.UNSIGNED_BYTE&&(X=n.RG8),k===n.UNSIGNED_SHORT&&ae&&(X=ae.RG16_EXT),k===n.SHORT&&ae&&(X=ae.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RG8UI),k===n.UNSIGNED_SHORT&&(X=n.RG16UI),k===n.UNSIGNED_INT&&(X=n.RG32UI),k===n.BYTE&&(X=n.RG8I),k===n.SHORT&&(X=n.RG16I),k===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RGB8UI),k===n.UNSIGNED_SHORT&&(X=n.RGB16UI),k===n.UNSIGNED_INT&&(X=n.RGB32UI),k===n.BYTE&&(X=n.RGB8I),k===n.SHORT&&(X=n.RGB16I),k===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),k===n.UNSIGNED_INT&&(X=n.RGBA32UI),k===n.BYTE&&(X=n.RGBA8I),k===n.SHORT&&(X=n.RGBA16I),k===n.INT&&(X=n.RGBA32I)),_===n.RGB&&(k===n.UNSIGNED_SHORT&&ae&&(X=ae.RGB16_EXT),k===n.SHORT&&ae&&(X=ae.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),_===n.RGBA){let q=ee?Wr:Ze.getTransfer(Q);k===n.FLOAT&&(X=n.RGBA32F),k===n.HALF_FLOAT&&(X=n.RGBA16F),k===n.UNSIGNED_BYTE&&(X=q===tt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&ae&&(X=ae.RGBA16_EXT),k===n.SHORT&&ae&&(X=ae.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function A(E,_){let k;return E?_===null||_===Vn||_===cr?k=n.DEPTH24_STENCIL8:_===Mn?k=n.DEPTH32F_STENCIL8:_===lr&&(k=n.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vn||_===cr?k=n.DEPTH_COMPONENT24:_===Mn?k=n.DEPTH_COMPONENT32F:_===lr&&(k=n.DEPTH_COMPONENT16),k}function T(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==kt&&E.minFilter!==Ht?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function P(E){let _=E.target;_.removeEventListener("dispose",P),w(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&h.delete(_)}function x(E){let _=E.target;_.removeEventListener("dispose",x),C(_)}function w(E){let _=i.get(E);if(_.__webglInit===void 0)return;let k=E.source,Y=f.get(k);if(Y){let Q=Y[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(E),Object.keys(Y).length===0&&f.delete(k)}i.remove(E)}function R(E){let _=i.get(E);n.deleteTexture(_.__webglTexture);let k=E.source,Y=f.get(k);delete Y[_.__cacheKey],o.memory.textures--}function C(E){let _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let Q=0;Q<_.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=E.textures;for(let Y=0,Q=k.length;Y<Q;Y++){let ee=i.get(k[Y]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(k[Y])}i.remove(E)}let F=0;function W(){F=0}function D(){return F}function L(E){F=E}function B(){let E=F;return E>=s.maxTextures&&Te("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),F+=1,E}function V(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function Z(E,_){let k=i.get(E);if(E.isVideoTexture&&ft(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){let Y=E.image;if(Y===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(k,E,_);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+_)}function J(E,_){let k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){Re(k,E,_);return}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+_)}function ie(E,_){let k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){Re(k,E,_);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+_)}function me(E,_){let k=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&k.__version!==E.version){Ue(k,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+_)}let ve={[Fa]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[Oa]:n.MIRRORED_REPEAT},Xe={[kt]:n.NEAREST,[Df]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[hl]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},et={[Of]:n.NEVER,[Hf]:n.ALWAYS,[Bf]:n.LESS,[Zl]:n.LEQUAL,[kf]:n.EQUAL,[Kl]:n.GEQUAL,[Vf]:n.GREATER,[zf]:n.NOTEQUAL};function Pe(E,_){if(_.type===Mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ht||_.magFilter===hl||_.magFilter===_o||_.magFilter===Hi||_.minFilter===Ht||_.minFilter===hl||_.minFilter===_o||_.minFilter===Hi)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ve[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ve[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ve[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Xe[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Xe[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,et[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===kt||_.minFilter!==_o&&_.minFilter!==Hi||_.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function K(E,_){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",P));let Y=_.source,Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));let ee=V(_);if(ee!==E.__cacheKey){Q[ee]===void 0&&(Q[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[ee].usedTimes++;let ae=Q[E.__cacheKey];ae!==void 0&&(Q[E.__cacheKey].usedTimes--,ae.usedTimes===0&&R(_)),E.__cacheKey=ee,E.__webglTexture=Q[ee].texture}return k}function de(E,_,k){return Math.floor(Math.floor(E/k)/_)}function se(E,_,k,Y){let ee=E.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,k,Y,_.data);else{ee.sort((_e,re)=>_e.start-re.start);let ae=0;for(let _e=1;_e<ee.length;_e++){let re=ee[ae],te=ee[_e],Le=re.start+re.count,Be=de(te.start,_.width,4),Qe=de(re.start,_.width,4);te.start<=Le+1&&Be===Qe&&de(te.start+te.count-1,_.width,4)===Be?re.count=Math.max(re.count,te.start+te.count-re.start):(++ae,ee[ae]=te)}ee.length=ae+1;let X=t.getParameter(n.UNPACK_ROW_LENGTH),q=t.getParameter(n.UNPACK_SKIP_PIXELS),fe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let _e=0,re=ee.length;_e<re;_e++){let te=ee[_e],Le=Math.floor(te.start/4),Be=Math.ceil(te.count/4),Qe=Le%_.width,N=Math.floor(Le/_.width),ne=Be,$=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Qe,N,ne,$,k,Y,_.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,X),t.pixelStorei(n.UNPACK_SKIP_PIXELS,q),t.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function Re(E,_,k){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);let Q=K(E,_),ee=_.source;t.bindTexture(Y,E.__webglTexture,n.TEXTURE0+k);let ae=i.get(ee);if(ee.version!==ae.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let $=Ze.getPrimaries(Ze.workingColorSpace),pe=_.colorSpace===yi?null:Ze.getPrimaries(_.colorSpace),oe=_.colorSpace===yi||$===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let q=m(_.image,!1,s.maxTextureSize);q=le(_,q);let fe=r.convert(_.format,_.colorSpace),_e=r.convert(_.type),re=b(_.internalFormat,fe,_e,_.normalized,_.colorSpace,_.isVideoTexture);Pe(Y,_);let te,Le=_.mipmaps,Be=_.isVideoTexture!==!0,Qe=ae.__version===void 0||Q===!0,N=ee.dataReady,ne=T(_,q);if(_.isDepthTexture)re=A(_.format===Gi,_.type),Qe&&(Be?t.texStorage2D(n.TEXTURE_2D,1,re,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,re,q.width,q.height,0,fe,_e,null));else if(_.isDataTexture)if(Le.length>0){Be&&Qe&&t.texStorage2D(n.TEXTURE_2D,ne,re,Le[0].width,Le[0].height);for(let $=0,pe=Le.length;$<pe;$++)te=Le[$],Be?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,te.width,te.height,fe,_e,te.data):t.texImage2D(n.TEXTURE_2D,$,re,te.width,te.height,0,fe,_e,te.data);_.generateMipmaps=!1}else Be?(Qe&&t.texStorage2D(n.TEXTURE_2D,ne,re,q.width,q.height),N&&se(_,q,fe,_e)):t.texImage2D(n.TEXTURE_2D,0,re,q.width,q.height,0,fe,_e,q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,re,Le[0].width,Le[0].height,q.depth);for(let $=0,pe=Le.length;$<pe;$++)if(te=Le[$],_.format!==En)if(fe!==null)if(Be){if(N)if(_.layerUpdates.size>0){let oe=ih(te.width,te.height,_.format,_.type);for(let j of _.layerUpdates){let Se=te.data.subarray(j*oe/te.data.BYTES_PER_ELEMENT,(j+1)*oe/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,j,te.width,te.height,1,fe,Se)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,te.width,te.height,q.depth,fe,te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,re,te.width,te.height,q.depth,0,te.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,te.width,te.height,q.depth,fe,_e,te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,re,te.width,te.height,q.depth,0,fe,_e,te.data)}else{Be&&Qe&&t.texStorage2D(n.TEXTURE_2D,ne,re,Le[0].width,Le[0].height);for(let $=0,pe=Le.length;$<pe;$++)te=Le[$],_.format!==En?fe!==null?Be?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,te.width,te.height,fe,te.data):t.compressedTexImage2D(n.TEXTURE_2D,$,re,te.width,te.height,0,te.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,te.width,te.height,fe,_e,te.data):t.texImage2D(n.TEXTURE_2D,$,re,te.width,te.height,0,fe,_e,te.data)}else if(_.isDataArrayTexture)if(Be){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,re,q.width,q.height,q.depth),N)if(_.layerUpdates.size>0){let $=ih(q.width,q.height,_.format,_.type);for(let pe of _.layerUpdates){let oe=q.data.subarray(pe*$/q.data.BYTES_PER_ELEMENT,(pe+1)*$/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,q.width,q.height,1,fe,_e,oe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,fe,_e,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,re,q.width,q.height,q.depth,0,fe,_e,q.data);else if(_.isData3DTexture)Be?(Qe&&t.texStorage3D(n.TEXTURE_3D,ne,re,q.width,q.height,q.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,fe,_e,q.data)):t.texImage3D(n.TEXTURE_3D,0,re,q.width,q.height,q.depth,0,fe,_e,q.data);else if(_.isFramebufferTexture){if(Qe)if(Be)t.texStorage2D(n.TEXTURE_2D,ne,re,q.width,q.height);else{let $=q.width,pe=q.height;for(let oe=0;oe<ne;oe++)t.texImage2D(n.TEXTURE_2D,oe,re,$,pe,0,fe,_e,null),$>>=1,pe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),q.parentNode!==$){$.appendChild(q),h.add(_),$.onpaint=Fe=>{let Et=Fe.changedElements;for(let rt of h)Et.includes(rt.image)&&(rt.needsUpdate=!0)},$.requestPaint();return}let pe=0,oe=n.RGBA,j=n.RGBA,Se=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,pe,oe,j,Se,q),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Be&&Qe){let $=bt(Le[0]);t.texStorage2D(n.TEXTURE_2D,ne,re,$.width,$.height)}for(let $=0,pe=Le.length;$<pe;$++)te=Le[$],Be?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,fe,_e,te):t.texImage2D(n.TEXTURE_2D,$,re,fe,_e,te);_.generateMipmaps=!1}else if(Be){if(Qe){let $=bt(q);t.texStorage2D(n.TEXTURE_2D,ne,re,$.width,$.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,_e,q)}else t.texImage2D(n.TEXTURE_2D,0,re,fe,_e,q);p(_)&&S(Y),ae.__version=ee.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Ue(E,_,k){if(_.image.length!==6)return;let Y=K(E,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+k);let ee=i.get(Q);if(Q.version!==ee.__version||Y===!0){t.activeTexture(n.TEXTURE0+k);let ae=Ze.getPrimaries(Ze.workingColorSpace),X=_.colorSpace===yi?null:Ze.getPrimaries(_.colorSpace),q=_.colorSpace===yi||ae===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let fe=_.isCompressedTexture||_.image[0].isCompressedTexture,_e=_.image[0]&&_.image[0].isDataTexture,re=[];for(let j=0;j<6;j++)!fe&&!_e?re[j]=m(_.image[j],!0,s.maxCubemapSize):re[j]=_e?_.image[j].image:_.image[j],re[j]=le(_,re[j]);let te=re[0],Le=r.convert(_.format,_.colorSpace),Be=r.convert(_.type),Qe=b(_.internalFormat,Le,Be,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,ne=ee.__version===void 0||Y===!0,$=Q.dataReady,pe=T(_,te);Pe(n.TEXTURE_CUBE_MAP,_);let oe;if(fe){N&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Qe,te.width,te.height);for(let j=0;j<6;j++){oe=re[j].mipmaps;for(let Se=0;Se<oe.length;Se++){let Fe=oe[Se];_.format!==En?Le!==null?N?$&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,Fe.width,Fe.height,Le,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,Qe,Fe.width,Fe.height,0,Fe.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,Fe.width,Fe.height,Le,Be,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,Qe,Fe.width,Fe.height,0,Le,Be,Fe.data)}}}else{if(oe=_.mipmaps,N&&ne){oe.length>0&&pe++;let j=bt(re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Qe,j.width,j.height)}for(let j=0;j<6;j++)if(_e){N?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,re[j].width,re[j].height,Le,Be,re[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Qe,re[j].width,re[j].height,0,Le,Be,re[j].data);for(let Se=0;Se<oe.length;Se++){let Et=oe[Se].image[j].image;N?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,Et.width,Et.height,Le,Be,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,Qe,Et.width,Et.height,0,Le,Be,Et.data)}}else{N?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Le,Be,re[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Qe,Le,Be,re[j]);for(let Se=0;Se<oe.length;Se++){let Fe=oe[Se];N?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,Le,Be,Fe.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,Qe,Le,Be,Fe.image[j])}}}p(_)&&S(n.TEXTURE_CUBE_MAP),ee.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Ie(E,_,k,Y,Q,ee){let ae=r.convert(k.format,k.colorSpace),X=r.convert(k.type),q=b(k.internalFormat,ae,X,k.normalized,k.colorSpace),fe=i.get(_),_e=i.get(k);if(_e.__renderTarget=_,!fe.__hasExternalTextures){let re=Math.max(1,_.width>>ee),te=Math.max(1,_.height>>ee);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ee,q,re,te,_.depth,0,ae,X,null):t.texImage2D(Q,ee,q,re,te,0,ae,X,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),qe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,_e.__webglTexture,0,Nt(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,_e.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(E,_,k){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){let Y=_.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,ee=A(_.stencilBuffer,Q),ae=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;qe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(_),ee,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(_),ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ee,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,E)}else{let Y=_.textures;for(let Q=0;Q<Y.length;Q++){let ee=Y[Q],ae=r.convert(ee.format,ee.colorSpace),X=r.convert(ee.type),q=b(ee.internalFormat,ae,X,ee.normalized,ee.colorSpace);qe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(_),q,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(_),q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(E,_,k){let Y=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,_.depthTexture);let fe=r.convert(_.depthTexture.format),_e=r.convert(_.depthTexture.type),re;_.depthTexture.format===jn?re=n.DEPTH_COMPONENT24:_.depthTexture.format===Gi&&(re=n.DEPTH24_STENCIL8);for(let te=0;te<6;te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,re,_.width,_.height,0,fe,_e,null)}}else Z(_.depthTexture,0);let ee=Q.__webglTexture,ae=Nt(_),X=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,q=_.depthTexture.format===Gi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===jn)qe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,X,ee,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,q,X,ee,0);else if(_.depthTexture.format===Gi)qe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,X,ee,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,q,X,ee,0);else throw new Error("Unknown depthTexture format")}function st(E){let _=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let Y=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=Y}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let Y=0;Y<6;Y++)Ye(_.__webglFramebuffer[Y],E,Y);else{let Y=E.texture.mipmaps;Y&&Y.length>0?Ye(_.__webglFramebuffer[0],E,0):Ye(_.__webglFramebuffer,E,0)}else if(k){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),vt(_.__webglDepthbuffer[Y],E,!1);else{let Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ee)}}else{let Y=E.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),vt(_.__webglDepthbuffer,E,!1);else{let Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(E,_,k){let Y=i.get(E);_!==void 0&&Ie(Y.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&st(E)}function $e(E){let _=E.texture,k=i.get(E),Y=i.get(_);E.addEventListener("dispose",x);let Q=E.textures,ee=E.isWebGLCubeRenderTarget===!0,ae=Q.length>1;if(ae||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,o.memory.textures++),ee){k.__webglFramebuffer=[];for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[X]=[];for(let q=0;q<_.mipmaps.length;q++)k.__webglFramebuffer[X][q]=n.createFramebuffer()}else k.__webglFramebuffer[X]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let X=0;X<_.mipmaps.length;X++)k.__webglFramebuffer[X]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ae)for(let X=0,q=Q.length;X<q;X++){let fe=i.get(Q[X]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&qe(E)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let X=0;X<Q.length;X++){let q=Q[X];k.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[X]);let fe=r.convert(q.format,q.colorSpace),_e=r.convert(q.type),re=b(q.internalFormat,fe,_e,q.normalized,q.colorSpace,E.isXRRenderTarget===!0),te=Nt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,re,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,k.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,_);for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0)for(let q=0;q<_.mipmaps.length;q++)Ie(k.__webglFramebuffer[X][q],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,q);else Ie(k.__webglFramebuffer[X],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(_)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let X=0,q=Q.length;X<q;X++){let fe=Q[X],_e=i.get(fe),re=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,_e.__webglTexture),Pe(re,fe),Ie(k.__webglFramebuffer,E,fe,n.COLOR_ATTACHMENT0+X,re,0),p(fe)&&S(re)}t.unbindTexture()}else{let X=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(X=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(X,Y.__webglTexture),Pe(X,_),_.mipmaps&&_.mipmaps.length>0)for(let q=0;q<_.mipmaps.length;q++)Ie(k.__webglFramebuffer[q],E,_,n.COLOR_ATTACHMENT0,X,q);else Ie(k.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,X,0);p(_)&&S(X),t.unbindTexture()}E.depthBuffer&&st(E)}function Lt(E){let _=E.textures;for(let k=0,Y=_.length;k<Y;k++){let Q=_[k];if(p(Q)){let ee=M(E),ae=i.get(Q).__webglTexture;t.bindTexture(ee,ae),S(ee),t.unbindTexture()}}}let yt=[],cn=[];function U(E){if(E.samples>0){if(qe(E)===!1){let _=E.textures,k=E.width,Y=E.height,Q=n.COLOR_BUFFER_BIT,ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(E),X=_.length>1;if(X)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let q=E.texture.mipmaps;q&&q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);let _e=i.get(_[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,k,Y,0,0,k,Y,Q,n.NEAREST),l===!0&&(yt.length=0,cn.length=0,yt.push(n.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(yt.push(ee),cn.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,cn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);let _e=i.get(_[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Nt(E){return Math.min(s.maxSamples,E.samples)}function qe(E){let _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ft(E){let _=o.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function le(E,_){let k=E.colorSpace,Y=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==Gr&&k!==yi&&(Ze.getTransfer(k)===tt?(Y!==En||Q!==sn)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",k)),_}function bt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.getTextureUnits=D,this.setTextureUnits=L,this.setTexture2D=Z,this.setTexture2DArray=J,this.setTexture3D=ie,this.setTextureCube=me,this.rebindTextures=gt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Cb(n,e){function t(i,s=yi){let r,o=Ze.getTransfer(s);if(i===sn)return n.UNSIGNED_BYTE;if(i===fl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$u)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gu)return n.BYTE;if(i===Wu)return n.SHORT;if(i===lr)return n.UNSIGNED_SHORT;if(i===dl)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===Mn)return n.FLOAT;if(i===ni)return n.HALF_FLOAT;if(i===Yu)return n.ALPHA;if(i===qu)return n.RGB;if(i===En)return n.RGBA;if(i===jn)return n.DEPTH_COMPONENT;if(i===Gi)return n.DEPTH_STENCIL;if(i===ml)return n.RED;if(i===gl)return n.RED_INTEGER;if(i===Wi)return n.RG;if(i===_l)return n.RG_INTEGER;if(i===xl)return n.RGBA_INTEGER;if(i===xo||i===vo||i===yo||i===So)if(o===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vl||i===yl||i===Sl||i===bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ml||i===El||i===Tl||i===wl||i===Al||i===bo||i===Cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ml||i===El)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Tl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===wl)return r.COMPRESSED_R11_EAC;if(i===Al)return r.COMPRESSED_SIGNED_R11_EAC;if(i===bo)return r.COMPRESSED_RG11_EAC;if(i===Cl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rl||i===Il||i===Pl||i===Ll||i===Nl||i===Dl||i===Ul||i===Fl||i===Ol||i===Bl||i===kl||i===Vl||i===zl||i===Hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Il)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ll)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ul)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ol)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gl||i===Wl||i===Xl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Gl)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$l||i===Yl||i===Mo||i===ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ib=`
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

}`,_h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new to(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new mn({vertexShader:Rb,fragmentShader:Ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new so(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends Fn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new _h,p={},S=t.getContextAttributes(),M=null,b=null,A=[],T=[],P=new Ae,x=null,w=new $t;w.viewport=new St;let R=new $t;R.viewport=new St;let C=[w,R],F=new ll,W=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let de=A[K];return de===void 0&&(de=new Qs,A[K]=de),de.getTargetRaySpace()},this.getControllerGrip=function(K){let de=A[K];return de===void 0&&(de=new Qs,A[K]=de),de.getGripSpace()},this.getHand=function(K){let de=A[K];return de===void 0&&(de=new Qs,A[K]=de),de.getHandSpace()};function L(K){let de=T.indexOf(K.inputSource);if(de===-1)return;let se=A[de];se!==void 0&&(se.update(K.inputSource,K.frame,c||o),se.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",V);for(let K=0;K<A.length;K++){let de=T[K];de!==null&&(T[K]=null,A[K].disconnect(de))}W=null,D=null,m.reset();for(let K in p)delete p[K];e.setRenderTarget(M),f=null,u=null,h=null,s=null,b=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",B),s.addEventListener("inputsourceschange",V),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Re=null,Ue=null;S.depth&&(Ue=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=S.stencil?Gi:jn,Re=S.stencil?cr:Vn);let Ie={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ie),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new pn(u.textureWidth,u.textureHeight,{format:En,type:sn,depthTexture:new vi(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new pn(f.framebufferWidth,f.framebufferHeight,{format:En,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Pe.setContext(s),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(K){for(let de=0;de<K.removed.length;de++){let se=K.removed[de],Re=T.indexOf(se);Re>=0&&(T[Re]=null,A[Re].disconnect(se))}for(let de=0;de<K.added.length;de++){let se=K.added[de],Re=T.indexOf(se);if(Re===-1){for(let Ie=0;Ie<A.length;Ie++)if(Ie>=T.length){T.push(se),Re=Ie;break}else if(T[Ie]===null){T[Ie]=se,Re=Ie;break}if(Re===-1)break}let Ue=A[Re];Ue&&Ue.connect(se)}}let Z=new I,J=new I;function ie(K,de,se){Z.setFromMatrixPosition(de.matrixWorld),J.setFromMatrixPosition(se.matrixWorld);let Re=Z.distanceTo(J),Ue=de.projectionMatrix.elements,Ie=se.projectionMatrix.elements,vt=Ue[14]/(Ue[10]-1),Ye=Ue[14]/(Ue[10]+1),st=(Ue[9]+1)/Ue[5],gt=(Ue[9]-1)/Ue[5],$e=(Ue[8]-1)/Ue[0],Lt=(Ie[8]+1)/Ie[0],yt=vt*$e,cn=vt*Lt,U=Re/(-$e+Lt),Nt=U*-$e;if(de.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Nt),K.translateZ(U),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ue[10]===-1)K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let qe=vt+U,ft=Ye+U,le=yt-Nt,bt=cn+(Re-Nt),E=st*Ye/ft*qe,_=gt*Ye/ft*qe;K.projectionMatrix.makePerspective(le,bt,E,_,qe,ft),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function me(K,de){de===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(de.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let de=K.near,se=K.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(se=m.depthFar)),F.near=R.near=w.near=de,F.far=R.far=w.far=se,(W!==F.near||D!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,D=F.far),F.layers.mask=K.layers.mask|6,w.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;let Re=K.parent,Ue=F.cameras;me(F,Re);for(let Ie=0;Ie<Ue.length;Ie++)me(Ue[Ie],Re);Ue.length===2?ie(F,w,R):F.projectionMatrix.copy(w.projectionMatrix),ve(K,F,Re)};function ve(K,de,se){se===null?K.matrix.copy(de.matrixWorld):(K.matrix.copy(se.matrixWorld),K.matrix.invert(),K.matrix.multiply(de.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ks*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(K){return p[K]};let Xe=null;function et(K,de){if(d=de.getViewerPose(c||o),g=de,d!==null){let se=d.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Re=!1;se.length!==F.cameras.length&&(F.cameras.length=0,Re=!0);for(let Ye=0;Ye<se.length;Ye++){let st=se[Ye],gt=null;if(f!==null)gt=f.getViewport(st);else{let Lt=h.getViewSubImage(u,st);gt=Lt.viewport,Ye===0&&(e.setRenderTargetTextures(b,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(b))}let $e=C[Ye];$e===void 0&&($e=new $t,$e.layers.enable(Ye),$e.viewport=new St,C[Ye]=$e),$e.matrix.fromArray(st.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(st.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(gt.x,gt.y,gt.width,gt.height),Ye===0&&(F.matrix.copy($e.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Re===!0&&F.cameras.push($e)}let Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();let Ye=h.getDepthInformation(se[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,s.renderState)}if(Ue&&Ue.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let Ye=0;Ye<se.length;Ye++){let st=se[Ye].camera;if(st){let gt=p[st];gt||(gt=new to,p[st]=gt);let $e=h.getCameraImage(st);gt.sourceTexture=$e}}}}for(let se=0;se<A.length;se++){let Re=T[se],Ue=A[se];Re!==null&&Ue!==void 0&&Ue.update(Re,de,c||o)}Xe&&Xe(K,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}let Pe=new xp;Pe.setAnimationLoop(et),this.setAnimationLoop=function(K){Xe=K},this.dispose=function(){}}},Pb=new at,Ep=new Ne;Ep.set(-1,0,0,0,1,0,0,0,1);function Lb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,eh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,M,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),M=S.envMap,b=S.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ep),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Nb(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let b=M.program;i.uniformBlockBinding(S,b)}function c(S,M){let b=s[S.id];b===void 0&&(g(S),b=d(S),s[S.id]=b,S.addEventListener("dispose",m));let A=M.program;i.updateUBOMapping(S,A);let T=e.render.frame;r[S.id]!==T&&(u(S),r[S.id]=T)}function d(S){let M=h();S.__bindingPointIndex=M;let b=n.createBuffer(),A=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let M=s[S.id],b=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,P=b.length;T<P;T++){let x=Array.isArray(b[T])?b[T]:[b[T]];for(let w=0,R=x.length;w<R;w++){let C=x[w];if(f(C,T,w,A)===!0){let F=C.__offset,W=Array.isArray(C.value)?C.value:[C.value],D=0;for(let L=0;L<W.length;L++){let B=W[L],V=v(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,F+D,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):ArrayBuffer.isView(B)?C.__data.set(new B.constructor(B.buffer,B.byteOffset,C.__data.length)):(B.toArray(C.__data,D),D+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,M,b,A){let T=S.value,P=M+"_"+b;if(A[P]===void 0)return typeof T=="number"||typeof T=="boolean"?A[P]=T:ArrayBuffer.isView(T)?A[P]=T.slice():A[P]=T.clone(),!0;{let x=A[P];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return A[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function g(S){let M=S.uniforms,b=0,A=16;for(let P=0,x=M.length;P<x;P++){let w=Array.isArray(M[P])?M[P]:[M[P]];for(let R=0,C=w.length;R<C;R++){let F=w[R],W=Array.isArray(F.value)?F.value:[F.value];for(let D=0,L=W.length;D<L;D++){let B=W[D],V=v(B),Z=b%A,J=Z%V.boundary,ie=Z+J;b+=J,ie!==0&&A-ie<V.storage&&(b+=A-ie),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=V.storage}}}let T=b%A;return T>0&&(b+=A-T),S.__size=b,S.__cache={},this}function v(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){let M=S.target;M.removeEventListener("dispose",m);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Db=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function Ub(){return ii===null&&(ii=new Kr(Db,16,16,Wi,ni),ii.name="DFG_LUT",ii.minFilter=Ht,ii.magFilter=Ht,ii.wrapS=Kn,ii.wrapT=Kn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var tc=class{constructor(e={}){let{canvas:t=Gf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=sn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let v=f,m=new Set([xl,_l,gl]),p=new Set([sn,Vn,lr,cr,fl,pl]),S=new Uint32Array(4),M=new Int32Array(4),b=new I,A=null,T=null,P=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,F=null;this._outputColorSpace=Kt;let W=0,D=0,L=null,B=-1,V=null,Z=new St,J=new St,ie=null,me=new Ve(0),ve=0,Xe=t.width,et=t.height,Pe=1,K=null,de=null,se=new St(0,0,Xe,et),Re=new St(0,0,Xe,et),Ue=!1,Ie=new er,vt=!1,Ye=!1,st=new at,gt=new I,$e=new St,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function cn(){return L===null?Pe:1}let U=i;function Nt(y,O){return t.getContext(y,O)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),U===null){let O="webgl2";if(U=Nt(O,y),U===null)throw Nt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Ce("WebGLRenderer: "+y.message),y}let qe,ft,le,bt,E,_,k,Y,Q,ee,ae,X,q,fe,_e,re,te,Le,Be,Qe,N,ne,$;function pe(){qe=new Hy(U),qe.init(),N=new Cb(U,qe),ft=new Dy(U,qe,e,N),le=new wb(U,qe),ft.reversedDepthBuffer&&u&&le.buffers.depth.setReversed(!0),bt=new Xy(U),E=new db,_=new Ab(U,qe,le,E,ft,N,bt),k=new zy(R),Y=new Z0(U),ne=new Ly(U,Y),Q=new Gy(U,Y,bt,ne),ee=new Yy(U,Q,Y,ne,bt),Le=new $y(U,ft,_),_e=new Uy(E),ae=new hb(R,k,qe,ft,ne,_e),X=new Lb(R,E),q=new pb,fe=new yb(qe),te=new Py(R,k,le,ee,g,l),re=new Tb(R,ee,ft),$=new Nb(U,bt,ft,le),Be=new Ny(U,qe,bt),Qe=new Wy(U,qe,bt),bt.programs=ae.programs,R.capabilities=ft,R.extensions=qe,R.properties=E,R.renderLists=q,R.shadowMap=re,R.state=le,R.info=bt}pe(),v!==sn&&(w=new Zy(v,t.width,t.height,s,r));let oe=new xh(R,U);this.xr=oe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(y){y!==void 0&&(Pe=y,this.setSize(Xe,et,!1))},this.getSize=function(y){return y.set(Xe,et)},this.setSize=function(y,O,G=!0){if(oe.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=y,et=O,t.width=Math.floor(y*Pe),t.height=Math.floor(O*Pe),G===!0&&(t.style.width=y+"px",t.style.height=O+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(Xe*Pe,et*Pe).floor()},this.setDrawingBufferSize=function(y,O,G){Xe=y,et=O,Pe=G,t.width=Math.floor(y*G),t.height=Math.floor(O*G),this.setViewport(0,0,y,O)},this.setEffects=function(y){if(v===sn){Ce("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let O=0;O<y.length;O++)if(y[O].isOutputPass===!0){Te("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Z)},this.getViewport=function(y){return y.copy(se)},this.setViewport=function(y,O,G,z){y.isVector4?se.set(y.x,y.y,y.z,y.w):se.set(y,O,G,z),le.viewport(Z.copy(se).multiplyScalar(Pe).round())},this.getScissor=function(y){return y.copy(Re)},this.setScissor=function(y,O,G,z){y.isVector4?Re.set(y.x,y.y,y.z,y.w):Re.set(y,O,G,z),le.scissor(J.copy(Re).multiplyScalar(Pe).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(y){le.setScissorTest(Ue=y)},this.setOpaqueSort=function(y){K=y},this.setTransparentSort=function(y){de=y},this.getClearColor=function(y){return y.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,G=!0){let z=0;if(y){let H=!1;if(L!==null){let he=L.texture.format;H=m.has(he)}if(H){let he=L.texture.type,xe=p.has(he),ue=te.getClearColor(),ye=te.getClearAlpha(),be=ue.r,Oe=ue.g,He=ue.b;xe?(S[0]=be,S[1]=Oe,S[2]=He,S[3]=ye,U.clearBufferuiv(U.COLOR,0,S)):(M[0]=be,M[1]=Oe,M[2]=He,M[3]=ye,U.clearBufferiv(U.COLOR,0,M))}else z|=U.COLOR_BUFFER_BIT}O&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),te.dispose(),q.dispose(),fe.dispose(),E.dispose(),k.dispose(),ee.dispose(),ne.dispose(),$.dispose(),ae.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Td),oe.removeEventListener("sessionend",wd),ss.stop()};function j(y){y.preventDefault(),ju("WebGLRenderer: Context Lost."),C=!0}function Se(){ju("WebGLRenderer: Context Restored."),C=!1;let y=bt.autoReset,O=re.enabled,G=re.autoUpdate,z=re.needsUpdate,H=re.type;pe(),bt.autoReset=y,re.enabled=O,re.autoUpdate=G,re.needsUpdate=z,re.type=H}function Fe(y){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Et(y){let O=y.target;O.removeEventListener("dispose",Et),rt(O)}function rt(y){ci(y),E.remove(y)}function ci(y){let O=E.get(y).programs;O!==void 0&&(O.forEach(function(G){ae.releaseProgram(G)}),y.isShaderMaterial&&ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,G,z,H,he){O===null&&(O=Lt);let xe=H.isMesh&&H.matrixWorld.determinant()<0,ue=Y_(y,O,G,z,H);le.setMaterial(z,xe);let ye=G.index,be=1;if(z.wireframe===!0){if(ye=Q.getWireframeAttribute(G),ye===void 0)return;be=2}let Oe=G.drawRange,He=G.attributes.position,Me=Oe.start*be,ot=(Oe.start+Oe.count)*be;he!==null&&(Me=Math.max(Me,he.start*be),ot=Math.min(ot,(he.start+he.count)*be)),ye!==null?(Me=Math.max(Me,0),ot=Math.min(ot,ye.count)):He!=null&&(Me=Math.max(Me,0),ot=Math.min(ot,He.count));let Tt=ot-Me;if(Tt<0||Tt===1/0)return;ne.setup(H,z,ue,G,ye);let Mt,ht=Be;if(ye!==null&&(Mt=Y.get(ye),ht=Qe,ht.setIndex(Mt)),H.isMesh)z.wireframe===!0?(le.setLineWidth(z.wireframeLinewidth*cn()),ht.setMode(U.LINES)):ht.setMode(U.TRIANGLES);else if(H.isLine){let Gt=z.linewidth;Gt===void 0&&(Gt=1),le.setLineWidth(Gt*cn()),H.isLineSegments?ht.setMode(U.LINES):H.isLineLoop?ht.setMode(U.LINE_LOOP):ht.setMode(U.LINE_STRIP)}else H.isPoints?ht.setMode(U.POINTS):H.isSprite&&ht.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Gt=H._multiDrawStarts,ge=H._multiDrawCounts,un=H._multiDrawCount,Je=ye?Y.get(ye).bytesPerElement:1,yn=E.get(z).currentProgram.getUniforms();for(let qn=0;qn<un;qn++)yn.setValue(U,"_gl_DrawID",qn),ht.render(Gt[qn]/Je,ge[qn])}else if(H.isInstancedMesh)ht.renderInstances(Me,Tt,H.count);else if(G.isInstancedBufferGeometry){let Gt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ge=Math.min(G.instanceCount,Gt);ht.renderInstances(Me,Tt,ge)}else ht.render(Me,Tt)};function Yn(y,O,G){y.transparent===!0&&y.side===bn&&y.forceSinglePass===!1?(y.side=Jt,y.needsUpdate=!0,ea(y,O,G),y.side=gi,y.needsUpdate=!0,ea(y,O,G),y.side=bn):ea(y,O,G)}this.compile=function(y,O,G=null){G===null&&(G=y),T=fe.get(G),T.init(O),x.push(T),G.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),y!==G&&y.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();let z=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let he=H.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){let ue=he[xe];Yn(ue,G,H),z.add(ue)}else Yn(he,G,H),z.add(he)}),T=x.pop(),z},this.compileAsync=function(y,O,G=null){let z=this.compile(y,O,G);return new Promise(H=>{function he(){if(z.forEach(function(xe){E.get(xe).currentProgram.isReady()&&z.delete(xe)}),z.size===0){H(y);return}setTimeout(he,10)}qe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let qc=null;function X_(y){qc&&qc(y)}function Td(){ss.stop()}function wd(){ss.start()}let ss=new xp;ss.setAnimationLoop(X_),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(y){qc=y,oe.setAnimationLoop(y),y===null?ss.stop():ss.start()},oe.addEventListener("sessionstart",Td),oe.addEventListener("sessionend",wd),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;F!==null&&F.renderStart(y,O);let G=oe.enabled===!0&&oe.isPresenting===!0,z=w!==null&&(L===null||G)&&w.begin(R,L);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(O),O=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,O,L),T=fe.get(y,x.length),T.init(O),T.state.textureUnits=_.getTextureUnits(),x.push(T),st.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ie.setFromProjectionMatrix(st,Un,O.reversedDepth),Ye=this.localClippingEnabled,vt=_e.init(this.clippingPlanes,Ye),A=q.get(y,P.length),A.init(),P.push(A),oe.enabled===!0&&oe.isPresenting===!0){let xe=R.xr.getDepthSensingMesh();xe!==null&&Zc(xe,O,-1/0,R.sortObjects)}Zc(y,O,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(K,de),yt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,yt&&te.addToRenderList(A,y),this.info.render.frame++,vt===!0&&_e.beginShadows();let H=T.state.shadowsArray;if(re.render(H,y,O),vt===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&w.hasRenderPass())===!1){let xe=A.opaque,ue=A.transmissive;if(T.setupLights(),O.isArrayCamera){let ye=O.cameras;if(ue.length>0)for(let be=0,Oe=ye.length;be<Oe;be++){let He=ye[be];Cd(xe,ue,y,He)}yt&&te.render(y);for(let be=0,Oe=ye.length;be<Oe;be++){let He=ye[be];Ad(A,y,He,He.viewport)}}else ue.length>0&&Cd(xe,ue,y,O),yt&&te.render(y),Ad(A,y,O)}L!==null&&D===0&&(_.updateMultisampleRenderTarget(L),_.updateRenderTargetMipmap(L)),z&&w.end(R),y.isScene===!0&&y.onAfterRender(R,y,O),ne.resetDefaultState(),B=-1,V=null,x.pop(),x.length>0?(T=x[x.length-1],_.setTextureUnits(T.state.textureUnits),vt===!0&&_e.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?A=P[P.length-1]:A=null,F!==null&&F.renderEnd()};function Zc(y,O,G,z){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ie.intersectsSprite(y)){z&&$e.setFromMatrixPosition(y.matrixWorld).applyMatrix4(st);let xe=ee.update(y),ue=y.material;ue.visible&&A.push(y,xe,ue,G,$e.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ie.intersectsObject(y))){let xe=ee.update(y),ue=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),$e.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),$e.copy(xe.boundingSphere.center)),$e.applyMatrix4(y.matrixWorld).applyMatrix4(st)),Array.isArray(ue)){let ye=xe.groups;for(let be=0,Oe=ye.length;be<Oe;be++){let He=ye[be],Me=ue[He.materialIndex];Me&&Me.visible&&A.push(y,xe,Me,G,$e.z,He)}}else ue.visible&&A.push(y,xe,ue,G,$e.z,null)}}let he=y.children;for(let xe=0,ue=he.length;xe<ue;xe++)Zc(he[xe],O,G,z)}function Ad(y,O,G,z){let{opaque:H,transmissive:he,transparent:xe}=y;T.setupLightsView(G),vt===!0&&_e.setGlobalState(R.clippingPlanes,G),z&&le.viewport(Z.copy(z)),H.length>0&&Qo(H,O,G),he.length>0&&Qo(he,O,G),xe.length>0&&Qo(xe,O,G),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Cd(y,O,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let Me=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new pn(1,1,{generateMipmaps:!0,type:Me?ni:sn,minFilter:Hi,samples:Math.max(4,ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let he=T.state.transmissionRenderTarget[z.id],xe=z.viewport||Z;he.setSize(xe.z*R.transmissionResolutionScale,xe.w*R.transmissionResolutionScale);let ue=R.getRenderTarget(),ye=R.getActiveCubeFace(),be=R.getActiveMipmapLevel();R.setRenderTarget(he),R.getClearColor(me),ve=R.getClearAlpha(),ve<1&&R.setClearColor(16777215,.5),R.clear(),yt&&te.render(G);let Oe=R.toneMapping;R.toneMapping=kn;let He=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),vt===!0&&_e.setGlobalState(R.clippingPlanes,z),Qo(y,G,z),_.updateMultisampleRenderTarget(he),_.updateRenderTargetMipmap(he),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let ot=0,Tt=O.length;ot<Tt;ot++){let Mt=O[ot],{object:ht,geometry:Gt,material:ge,group:un}=Mt;if(ge.side===bn&&ht.layers.test(z.layers)){let Je=ge.side;ge.side=Jt,ge.needsUpdate=!0,Rd(ht,G,z,Gt,ge,un),ge.side=Je,ge.needsUpdate=!0,Me=!0}}Me===!0&&(_.updateMultisampleRenderTarget(he),_.updateRenderTargetMipmap(he))}R.setRenderTarget(ue,ye,be),R.setClearColor(me,ve),He!==void 0&&(z.viewport=He),R.toneMapping=Oe}function Qo(y,O,G){let z=O.isScene===!0?O.overrideMaterial:null;for(let H=0,he=y.length;H<he;H++){let xe=y[H],{object:ue,geometry:ye,group:be}=xe,Oe=xe.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),ue.layers.test(G.layers)&&Rd(ue,O,G,ye,Oe,be)}}function Rd(y,O,G,z,H,he){y.onBeforeRender(R,O,G,z,H,he),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(R,O,G,z,y,he),H.transparent===!0&&H.side===bn&&H.forceSinglePass===!1?(H.side=Jt,H.needsUpdate=!0,R.renderBufferDirect(G,O,z,H,y,he),H.side=gi,H.needsUpdate=!0,R.renderBufferDirect(G,O,z,H,y,he),H.side=bn):R.renderBufferDirect(G,O,z,H,y,he),y.onAfterRender(R,O,G,z,H,he)}function ea(y,O,G){O.isScene!==!0&&(O=Lt);let z=E.get(y),H=T.state.lights,he=T.state.shadowsArray,xe=H.state.version,ue=ae.getParameters(y,H.state,he,O,G,T.state.lightProbeGridArray),ye=ae.getProgramCacheKey(ue),be=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,z.fog=O.fog;let Oe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=k.get(y.envMap||z.environment,Oe),z.envMapRotation=z.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,be===void 0&&(y.addEventListener("dispose",Et),be=new Map,z.programs=be);let He=be.get(ye);if(He!==void 0){if(z.currentProgram===He&&z.lightsStateVersion===xe)return Pd(y,ue),He}else ue.uniforms=ae.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,G,ue),y.onBeforeCompile(ue,R),He=ae.acquireProgram(ue,ye),be.set(ye,He),z.uniforms=ue.uniforms;let Me=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Me.clippingPlanes=_e.uniform),Pd(y,ue),z.needsLights=Z_(y),z.lightsStateVersion=xe,z.needsLights&&(Me.ambientLightColor.value=H.state.ambient,Me.lightProbe.value=H.state.probe,Me.directionalLights.value=H.state.directional,Me.directionalLightShadows.value=H.state.directionalShadow,Me.spotLights.value=H.state.spot,Me.spotLightShadows.value=H.state.spotShadow,Me.rectAreaLights.value=H.state.rectArea,Me.ltc_1.value=H.state.rectAreaLTC1,Me.ltc_2.value=H.state.rectAreaLTC2,Me.pointLights.value=H.state.point,Me.pointLightShadows.value=H.state.pointShadow,Me.hemisphereLights.value=H.state.hemi,Me.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Me.spotLightMatrix.value=H.state.spotLightMatrix,Me.spotLightMap.value=H.state.spotLightMap,Me.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=He,z.uniformsList=null,He}function Id(y){if(y.uniformsList===null){let O=y.currentProgram.getUniforms();y.uniformsList=dr.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Pd(y,O){let G=E.get(y);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function $_(y,O){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(O.matrixWorld);for(let G=0,z=y.length;G<z;G++){let H=y[G];if(H.texture!==null&&H.boundingBox.containsPoint(b))return H}return null}function Y_(y,O,G,z,H){O.isScene!==!0&&(O=Lt),_.resetTextureUnits();let he=O.fog,xe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?O.environment:null,ue=L===null?R.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ze.workingColorSpace,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,be=k.get(z.envMap||xe,ye),Oe=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!G.morphAttributes.position,ot=!!G.morphAttributes.normal,Tt=!!G.morphAttributes.color,Mt=kn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Mt=R.toneMapping);let ht=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Gt=ht!==void 0?ht.length:0,ge=E.get(z),un=T.state.lights;if(vt===!0&&(Ye===!0||y!==V)){let pt=y===V&&z.id===B;_e.setState(z,y,pt)}let Je=!1;z.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==un.state.version||ge.outputColorSpace!==ue||H.isBatchedMesh&&ge.batching===!1||!H.isBatchedMesh&&ge.batching===!0||H.isBatchedMesh&&ge.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ge.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ge.instancing===!1||!H.isInstancedMesh&&ge.instancing===!0||H.isSkinnedMesh&&ge.skinning===!1||!H.isSkinnedMesh&&ge.skinning===!0||H.isInstancedMesh&&ge.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ge.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ge.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ge.instancingMorph===!1&&H.morphTexture!==null||ge.envMap!==be||z.fog===!0&&ge.fog!==he||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==_e.numPlanes||ge.numIntersection!==_e.numIntersection)||ge.vertexAlphas!==Oe||ge.vertexTangents!==He||ge.morphTargets!==Me||ge.morphNormals!==ot||ge.morphColors!==Tt||ge.toneMapping!==Mt||ge.morphTargetsCount!==Gt||!!ge.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,ge.__version=z.version);let yn=ge.currentProgram;Je===!0&&(yn=ea(z,O,H),F&&z.isNodeMaterial&&F.onUpdateProgram(z,yn,ge));let qn=!1,Ti=!1,Ps=!1,dt=yn.getUniforms(),wt=ge.uniforms;if(le.useProgram(yn.program)&&(qn=!0,Ti=!0,Ps=!0),z.id!==B&&(B=z.id,Ti=!0),ge.needsLights){let pt=$_(T.state.lightProbeGridArray,H);ge.lightProbeGrid!==pt&&(ge.lightProbeGrid=pt,Ti=!0)}if(qn||V!==y){le.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),dt.setValue(U,"projectionMatrix",y.projectionMatrix),dt.setValue(U,"viewMatrix",y.matrixWorldInverse);let Ai=dt.map.cameraPosition;Ai!==void 0&&Ai.setValue(U,gt.setFromMatrixPosition(y.matrixWorld)),ft.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),V!==y&&(V=y,Ti=!0,Ps=!0)}if(ge.needsLights&&(un.state.directionalShadowMap.length>0&&dt.setValue(U,"directionalShadowMap",un.state.directionalShadowMap,_),un.state.spotShadowMap.length>0&&dt.setValue(U,"spotShadowMap",un.state.spotShadowMap,_),un.state.pointShadowMap.length>0&&dt.setValue(U,"pointShadowMap",un.state.pointShadowMap,_)),H.isSkinnedMesh){dt.setOptional(U,H,"bindMatrix"),dt.setOptional(U,H,"bindMatrixInverse");let pt=H.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),dt.setValue(U,"boneTexture",pt.boneTexture,_))}H.isBatchedMesh&&(dt.setOptional(U,H,"batchingTexture"),dt.setValue(U,"batchingTexture",H._matricesTexture,_),dt.setOptional(U,H,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",H._indirectTexture,_),dt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",H._colorsTexture,_));let wi=G.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&Le.update(H,G,yn),(Ti||ge.receiveShadow!==H.receiveShadow)&&(ge.receiveShadow=H.receiveShadow,dt.setValue(U,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&O.environment!==null&&(wt.envMapIntensity.value=O.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=Ub()),Ti){if(dt.setValue(U,"toneMappingExposure",R.toneMappingExposure),ge.needsLights&&q_(wt,Ps),he&&z.fog===!0&&X.refreshFogUniforms(wt,he),X.refreshMaterialUniforms(wt,z,Pe,et,T.state.transmissionRenderTarget[y.id]),ge.needsLights&&ge.lightProbeGrid){let pt=ge.lightProbeGrid;wt.probesSH.value=pt.texture,wt.probesMin.value.copy(pt.boundingBox.min),wt.probesMax.value.copy(pt.boundingBox.max),wt.probesResolution.value.copy(pt.resolution)}dr.upload(U,Id(ge),wt,_)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(dr.upload(U,Id(ge),wt,_),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(U,"center",H.center),dt.setValue(U,"modelViewMatrix",H.modelViewMatrix),dt.setValue(U,"normalMatrix",H.normalMatrix),dt.setValue(U,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let pt=z.uniformsGroups;for(let Ai=0,Ls=pt.length;Ai<Ls;Ai++){let Ld=pt[Ai];$.update(Ld,yn),$.bind(Ld,yn)}}return yn}function q_(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Z_(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,O,G){let z=E.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),E.get(y.texture).__webglTexture=O,E.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){let G=E.get(y);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};let K_=U.createFramebuffer();this.setRenderTarget=function(y,O=0,G=0){L=y,W=O,D=G;let z=null,H=!1,he=!1;if(y){let ue=E.get(y);if(ue.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(U.FRAMEBUFFER,ue.__webglFramebuffer),Z.copy(y.viewport),J.copy(y.scissor),ie=y.scissorTest,le.viewport(Z),le.scissor(J),le.setScissorTest(ie),B=-1;return}else if(ue.__webglFramebuffer===void 0)_.setupRenderTarget(y);else if(ue.__hasExternalTextures)_.rebindTextures(y,E.get(y.texture).__webglTexture,E.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Oe=y.depthTexture;if(ue.__boundDepthTexture!==Oe){if(Oe!==null&&E.has(Oe)&&(y.width!==Oe.image.width||y.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(y)}}let ye=y.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(he=!0);let be=E.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(be[O])?z=be[O][G]:z=be[O],H=!0):y.samples>0&&_.useMultisampledRTT(y)===!1?z=E.get(y).__webglMultisampledFramebuffer:Array.isArray(be)?z=be[G]:z=be,Z.copy(y.viewport),J.copy(y.scissor),ie=y.scissorTest}else Z.copy(se).multiplyScalar(Pe).floor(),J.copy(Re).multiplyScalar(Pe).floor(),ie=Ue;if(G!==0&&(z=K_),le.bindFramebuffer(U.FRAMEBUFFER,z)&&le.drawBuffers(y,z),le.viewport(Z),le.scissor(J),le.setScissorTest(ie),H){let ue=E.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,ue.__webglTexture,G)}else if(he){let ue=O;for(let ye=0;ye<y.textures.length;ye++){let be=E.get(y.textures[ye]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ye,be.__webglTexture,G,ue)}}else if(y!==null&&G!==0){let ue=E.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ue.__webglTexture,G)}B=-1},this.readRenderTargetPixels=function(y,O,G,z,H,he,xe,ue=0){if(!(y&&y.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=E.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){le.bindFramebuffer(U.FRAMEBUFFER,ye);try{let be=y.textures[ue],Oe=be.format,He=be.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue),!ft.textureFormatReadable(Oe)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(He)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-z&&G>=0&&G<=y.height-H&&U.readPixels(O,G,z,H,N.convert(Oe),N.convert(He),he)}finally{let be=L!==null?E.get(L).__webglFramebuffer:null;le.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(y,O,G,z,H,he,xe,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=E.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye)if(O>=0&&O<=y.width-z&&G>=0&&G<=y.height-H){le.bindFramebuffer(U.FRAMEBUFFER,ye);let be=y.textures[ue],Oe=be.format,He=be.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue),!ft.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.bufferData(U.PIXEL_PACK_BUFFER,he.byteLength,U.STREAM_READ),U.readPixels(O,G,z,H,N.convert(Oe),N.convert(He),0);let ot=L!==null?E.get(L).__webglFramebuffer:null;le.bindFramebuffer(U.FRAMEBUFFER,ot);let Tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xf(U,Tt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,he),U.deleteBuffer(Me),U.deleteSync(Tt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,G=0){let z=Math.pow(2,-G),H=Math.floor(y.image.width*z),he=Math.floor(y.image.height*z),xe=O!==null?O.x:0,ue=O!==null?O.y:0;_.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,xe,ue,H,he),le.unbindTexture()};let J_=U.createFramebuffer(),j_=U.createFramebuffer();this.copyTextureToTexture=function(y,O,G=null,z=null,H=0,he=0){let xe,ue,ye,be,Oe,He,Me,ot,Tt,Mt=y.isCompressedTexture?y.mipmaps[he]:y.image;if(G!==null)xe=G.max.x-G.min.x,ue=G.max.y-G.min.y,ye=G.isBox3?G.max.z-G.min.z:1,be=G.min.x,Oe=G.min.y,He=G.isBox3?G.min.z:0;else{let wt=Math.pow(2,-H);xe=Math.floor(Mt.width*wt),ue=Math.floor(Mt.height*wt),y.isDataArrayTexture?ye=Mt.depth:y.isData3DTexture?ye=Math.floor(Mt.depth*wt):ye=1,be=0,Oe=0,He=0}z!==null?(Me=z.x,ot=z.y,Tt=z.z):(Me=0,ot=0,Tt=0);let ht=N.convert(O.format),Gt=N.convert(O.type),ge;O.isData3DTexture?(_.setTexture3D(O,0),ge=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(_.setTexture2DArray(O,0),ge=U.TEXTURE_2D_ARRAY):(_.setTexture2D(O,0),ge=U.TEXTURE_2D),le.activeTexture(U.TEXTURE0),le.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),le.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),le.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let un=le.getParameter(U.UNPACK_ROW_LENGTH),Je=le.getParameter(U.UNPACK_IMAGE_HEIGHT),yn=le.getParameter(U.UNPACK_SKIP_PIXELS),qn=le.getParameter(U.UNPACK_SKIP_ROWS),Ti=le.getParameter(U.UNPACK_SKIP_IMAGES);le.pixelStorei(U.UNPACK_ROW_LENGTH,Mt.width),le.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt.height),le.pixelStorei(U.UNPACK_SKIP_PIXELS,be),le.pixelStorei(U.UNPACK_SKIP_ROWS,Oe),le.pixelStorei(U.UNPACK_SKIP_IMAGES,He);let Ps=y.isDataArrayTexture||y.isData3DTexture,dt=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){let wt=E.get(y),wi=E.get(O),pt=E.get(wt.__renderTarget),Ai=E.get(wi.__renderTarget);le.bindFramebuffer(U.READ_FRAMEBUFFER,pt.__webglFramebuffer),le.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Ls=0;Ls<ye;Ls++)Ps&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,E.get(y).__webglTexture,H,He+Ls),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,E.get(O).__webglTexture,he,Tt+Ls)),U.blitFramebuffer(be,Oe,xe,ue,Me,ot,xe,ue,U.DEPTH_BUFFER_BIT,U.NEAREST);le.bindFramebuffer(U.READ_FRAMEBUFFER,null),le.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||E.has(y)){let wt=E.get(y),wi=E.get(O);le.bindFramebuffer(U.READ_FRAMEBUFFER,J_),le.bindFramebuffer(U.DRAW_FRAMEBUFFER,j_);for(let pt=0;pt<ye;pt++)Ps?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,H,He+pt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wt.__webglTexture,H),dt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wi.__webglTexture,he,Tt+pt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wi.__webglTexture,he),H!==0?U.blitFramebuffer(be,Oe,xe,ue,Me,ot,xe,ue,U.COLOR_BUFFER_BIT,U.NEAREST):dt?U.copyTexSubImage3D(ge,he,Me,ot,Tt+pt,be,Oe,xe,ue):U.copyTexSubImage2D(ge,he,Me,ot,be,Oe,xe,ue);le.bindFramebuffer(U.READ_FRAMEBUFFER,null),le.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else dt?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(ge,he,Me,ot,Tt,xe,ue,ye,ht,Gt,Mt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(ge,he,Me,ot,Tt,xe,ue,ye,ht,Mt.data):U.texSubImage3D(ge,he,Me,ot,Tt,xe,ue,ye,ht,Gt,Mt):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,he,Me,ot,xe,ue,ht,Gt,Mt.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,he,Me,ot,Mt.width,Mt.height,ht,Mt.data):U.texSubImage2D(U.TEXTURE_2D,he,Me,ot,xe,ue,ht,Gt,Mt);le.pixelStorei(U.UNPACK_ROW_LENGTH,un),le.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je),le.pixelStorei(U.UNPACK_SKIP_PIXELS,yn),le.pixelStorei(U.UNPACK_SKIP_ROWS,qn),le.pixelStorei(U.UNPACK_SKIP_IMAGES,Ti),he===0&&O.generateMipmaps&&U.generateMipmap(ge),le.unbindTexture()},this.initRenderTarget=function(y){E.get(y).__webglFramebuffer===void 0&&_.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?_.setTextureCube(y,0):y.isData3DTexture?_.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?_.setTexture2DArray(y,0):_.setTexture2D(y,0),le.unbindTexture()},this.resetState=function(){W=0,D=0,L=null,le.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Tp={type:"change"},yh={type:"start"},Ap={type:"end"},sc=new xi,wp=new en,Ob=Math.cos(70*Eo.DEG2RAD),Ft=new I,rn=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vh=1e-6,rc=class extends fo{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bn.ROTATE,MIDDLE:Bn.DOLLY,RIGHT:Bn.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new fn,this._lastTargetPosition=new I,this._quat=new fn().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new or,this._sphericalDelta=new or,this._scale=1,this._panOffset=new I,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new I,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kb.bind(this),this._onPointerDown=Bb.bind(this),this._onPointerUp=Vb.bind(this),this._onContextMenu=Yb.bind(this),this._onMouseWheel=Gb.bind(this),this._onKeyDown=Wb.bind(this),this._onTouchStart=Xb.bind(this),this._onTouchMove=$b.bind(this),this._onMouseDown=zb.bind(this),this._onMouseMove=Hb.bind(this),this._interceptControlDown=qb.bind(this),this._interceptControlUp=Zb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tp),this.update(),this.state=ct.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ft.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(sc.origin.copy(this.object.position),sc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sc.direction))<Ob?this.object.lookAt(this.target):(wp.setFromNormalAndCoplanarPoint(this.object.up,this.target),sc.intersectPlane(wp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vh||this._lastTargetPosition.distanceToSquared(this.target)>vh?(this.dispatchEvent(Tp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Bb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function kb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Vb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ap),this.state=ct.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function zb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ct.DOLLY;break;case Bn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ct.ROTATE}break;case Bn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(yh)}function Hb(n){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Gb(n){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(n.preventDefault(),this.dispatchEvent(yh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Ap))}function Wb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Xb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ct.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ct.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(yh)}function $b(n){switch(this._trackPointer(n),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ct.NONE}}function Yb(n){this.enabled!==!1&&n.preventDefault()}function qb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sh(n){let e=new Date(n);return Number.isNaN(e.valueOf())?"":e.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Cp(n){return n>=1e3?`${(n/1e3).toFixed(2)}s`:`${n}ms`}function Rp(n){return n<1e3?`${n} ms`:`${(n/1e3).toFixed(1)} s`}function _n(n){let e=n.delta>0?"+":"";return`${n.left} -> ${n.right} (${e}${n.delta})`}function pr(n){return n==null?"n/a":`${n.toFixed(0)}%`}function De(n,e="n/a"){return n==null||!Number.isFinite(n)?e:n.toLocaleString()}function oc(n,e,t="..."){return e===Number.POSITIVE_INFINITY||n.length<=e?n:e<=0?"":e<=t.length?t.slice(0,e):`${n.slice(0,e-t.length).replace(/\s+$/,"")}${t}`}function ri(n){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Ip(n,e=0){return e>0?`${n} JSONL records + ${Co(e)} pending`:`${n} JSONL records`}function Co(n){return n>=1024*1024?`${(n/(1024*1024)).toFixed(1)} MB`:n>=1024?`${Math.ceil(n/1024)} KB`:`${n} B`}var Kb=/([?&])((?:access_)?token|api[_-]?key|secret|password|passwd|auth|session|cookie)=([^&#\s]+)/gi,Jb=/\b((?:access_)?token|api[_-]?key|secret|password|passwd|cookie|authorization)\s*([:=])\s*("[^"]*"|'[^']*'|[^\s|;,]+)/gi,jb=/\bBearer\s+[A-Za-z0-9._~+/=-]{6,}/gi,Qb=/data:image\/[a-z0-9.+-]+;base64,[A-Za-z0-9+/=]+/gi,eM=/\b[A-Za-z0-9+/]{32,}={0,2}\b/g,tM=/\b[A-Z0-9_]*(?:SECRET|PASSWORD|TOKEN|PRIVATE|COOKIE|DO_NOT_COPY)[A-Z0-9_]*\b/g,nM=/[A-Za-z]:[\\/]+Users[\\/]+[^\s|"'<>]+/g,iM=/\/(?:home|Users)\/[^\s|"'<>]+/g;function $i(n,e=240){let t=Up(n);if(!t)return"";let i=t.replace(Qb,"[REDACTED_IMAGE_PAYLOAD]").replace(Kb,(s,r,o)=>`${r}${o}=[REDACTED]`).replace(jb,"Bearer [REDACTED]").replace(Jb,(s,r,o)=>`${r}${o===":"?": ":"="}[REDACTED]`).replace(nM,Pp).replace(iM,Pp).replace(eM,"[REDACTED_BASE64]").replace(tM,"[REDACTED_PRIVATE_TEXT]");return oc(i,e)}function Lp(n){let e=[zn(n.role),zn(n.eventType),n.toolName?`tool: ${zn(n.toolName)}`:"",n.filePath?`path: ${$i(n.filePath,96)}`:"",n.status?`status: ${zn(n.status)}`:""].filter(Boolean),t=Up(n.rawSummary);if(t){let i=$i(t,Number.POSITIVE_INFINITY);e.push(t===i?"detail: omitted for safe sharing":"detail: redacted for safe sharing")}return e.length?e.join("; "):"event summary unavailable"}function Np(n){return["Perlustron copy-safe reference",n.source?`source: ${zn(n.source)}`:null,n.lineNumber!==null&&n.lineNumber!==void 0?`line: ${n.lineNumber}`:null,n.eventIndex!==null&&n.eventIndex!==void 0?`event_index: ${n.eventIndex}`:null,n.kind?`kind: ${zn(n.kind)}`:null,n.summary?`summary: ${$i(n.summary,220)}`:null,`perlustron: parser ${zn(n.parserVersion||"unknown")} / schema ${zn(n.schemaVersion||"unknown")}`,"caveat: copy-safe reference only; review raw logs separately before sharing raw content"].filter(e=>!!e).join(`
`)}function Dp(n){let e=n.rawLogsSafeToShare?"marked safe by current scan; still review before forwarding":"requires human review before sharing";return["Perlustron copy-safe share summary",n.source?`source: ${zn(n.source)}`:null,n.sessionName?`session: ${$i(n.sessionName,140)}`:null,`activity: ${De(n.totalTurns,"unknown")} turns / ${De(n.callCount,"unknown")} tool calls / ${De(n.fileChangeCount,"unknown")} file changes`,n.latestEventIndex!==null&&n.latestEventIndex!==void 0?`latest_event_index: ${n.latestEventIndex}`:null,n.cliContext?`cli: ${$i(n.cliContext,120)}`:null,`perlustron: parser ${zn(n.parserVersion||"unknown")} / schema ${zn(n.schemaVersion||"unknown")}`,`raw_logs: ${e}`,`raw_caution: ${$i(n.rawLogCaution||"Raw logs can contain prompts, paths, tool output, images, and credentials.",180)}`,"safe_surfaces: sanitized graph/export/copy-safe references are safer than raw logs, but still require human judgment before external sharing",`sanitized_graph: ${$i(n.sanitizedGraphNote||"Use sanitized graph/export surfaces for review-friendly sharing.",180)}`,`redactions: ${De(n.redactedFieldCount,"unknown")} fields; images: ${De(n.imageCount,"unknown")}; api_token_required: ${n.apiTokenRequired?"yes (value not copied)":"no"}`].filter(t=>!!t).join(`
`)}function Up(n){return String(n??"").replace(/\s+/g," ").trim()}function zn(n){return $i(n,120)}function Pp(n){let e=n.replace(/\\/g,"/").split("/").filter(Boolean);return`[PATH:${e.length?e[e.length-1]:"path"}]`}var sM=["add","update","delete","move"],rM=72,Fp="http://www.w3.org/2000/svg",oM=["summary","map","timeline","transcript"],Nm=[...oM,"health","insights","diff","raw","export","settings"],Dm=["error","long","file","diff","artifact","compaction"],aM=3e4,lM=["zoom-in","zoom-out","two-d","overview"],cM={codex:["M4 7l5 5-5 5","M12 17h8"],source:["M5 6h14","M5 12h14","M5 18h14","M8 4v4","M16 10v4","M11 16v4"],git:["M6 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M6 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M6 6v8a4 4 0 0 0 4 4h6","M6 10h6a4 4 0 0 1 4 4v4"],policy:["M12 3l7 4v5c0 4.5-2.8 7.4-7 9-4.2-1.6-7-4.5-7-9V7l7-4z","M9 12l2 2 4-5"],model:["M8 8h8v8H8z","M4 10h4","M4 14h4","M16 10h4","M16 14h4","M10 4v4","M14 4v4","M10 16v4","M14 16v4"],tools:["M14.7 6.3l3-3a2.1 2.1 0 0 1 3 3l-3 3","M13 8l3 3","M3 21l8-8","M9 11l4 4"]},uM=new Set(Nm);function dc(n){return Array.isArray(n)?n[0]:n.fromId}function fc(n){return Array.isArray(n)?n[1]:n.toId}function hM(n){return Array.isArray(n)?1:n.waypoints.length+1}function bh(n){return n.reduce((e,t)=>e+hM(t),0)}function dM(n,e){if(!e||dc(n)!==dc(e)||fc(n)!==fc(e))return!1;let t=Array.isArray(n)?[]:n.waypoints,i=Array.isArray(e)?[]:e.waypoints;return t.length===i.length}function we(n,e=document){let t=e.querySelector(n);if(!t)throw new Error(`Missing required element: ${n}`);return t}function Pc(n){return document.querySelectorAll(n)}function Ar(n){return n instanceof Error?n.message:String(n)}function Mh(n,e,t){return e!==void 0&&n.includes(e)?e:t}function Wh(){return{compactionInProgress:!1,pendingPrompt:null,assistantStreaming:!1,latestAssistantEventIndex:null,latestAssistantPreview:null,latestTokenSample:null,activeToolCalls:[],completedToolCalls:[]}}function zt(){if(!Ee)throw new Error("Session graph has not loaded yet");return Ee}function Um(n){return n.type==="call"?n.source.completedAt||n.source.startedAt||"Live context":n.source.timestamp||"Live context"}function fM(n){let e=new Date(n);return Number.isNaN(e.valueOf())?n:e.toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Xh(n){zp.textContent=fM(n),zp.title=n}function pM(n){let e=n.replace(/^\s{0,3}#{1,6}\s+/,"").trim();return(e?e.replace(/:$/,"").trim():n)||n}function $h(n,e="Selection"){xM.textContent=e,Op.textContent=pM(n),Op.title=n}function mM(n){if(n.type==="call"){let e=Lc(n.source.name);if(e)return e.toUpperCase()}return n.kind.replace(/[-_]+/g," ").toUpperCase()}function Fm(n){return n.type==="prompt"?"":Om(n)}function Om(n){return n.type==="call"?Lc(n.source.name)??n.title:n.title}function Bm(n){return n.type==="prompt"?`PROMPT ${n.promptIndex+1}`:n.type==="compaction"?`CHECKPOINT ${n.eventIndex}`:n.type==="fileChange"?`FILE ${n.eventIndex}`:n.type==="message"?`ASSISTANT ${n.eventIndex}`:n.type==="call"&&gM(n.source.name)?`SUBAGENT TURN ${n.eventIndex}`:`TURN ${n.eventIndex}`}function Lc(n){return n==="spawn_agent"?"subagent launch":n==="subagent"?"subagent result":n==="subagent.prompt"?"subagent prompt":n==="subagent.message"?"subagent message":n==="subagent.file"?"subagent file":n==="subagent.compaction"?"subagent compaction":n==="subagent.more"?"subagent overflow":null}function gM(n){return n.startsWith("subagent.")&&n!=="subagent"}function km(n){return n.type==="prompt"?n.source.images:[]}var it=we("#space"),_M=we("#metadata-list"),xM=we("#stream-title-label"),Op=we("#stream-kind"),Yh=we("#stream-title"),Mr=we("#stream-data"),Bp=we("#stream-images"),vM=we("#stream-close"),uc=we("#stream-minimize"),Bo=we("#stream-copy-ref"),Vm=we("#stream-open-timeline"),zm=we("#stream-open-transcript"),Hm=we("#stream-open-raw"),Gm=we("#prev-event"),Wm=we("#next-event"),Xm=we("#stage-turn-count"),qh=we("#stage-started"),kp=we("#context-pressure-value"),Vp=we("#context-pressure-bars"),Zh=we("#turn-number"),zp=we("#turn-timestamp"),yM=we("#metric-prompts"),SM=we("#metric-errors"),bM=we("#metric-long"),MM=we("#metric-files"),EM=we("#metric-diffs"),TM=we("#metric-artifacts"),wM=we("#metric-compactions"),Kh=we("#context-event-title"),ts=we("#event-popup"),AM=we("#topbar"),CM=we("#live-toggle"),$m=we("#live-state"),Ym=we("#live-copy"),Zi=we("#search-input"),RM=we("#mode-panel"),IM=we("#mode-panel-kicker"),PM=we("#mode-panel-title"),ln=we("#mode-panel-summary"),LM=we("#mode-panel-filters"),Vt=we("#mode-panel-content"),pc=we("#mode-filter-role"),mc=we("#mode-filter-type"),gc=we("#mode-filter-tool"),_c=we("#mode-filter-file"),qm=we("#mode-filter-errors"),Zm=we("#mode-filter-unknown"),Km=we("#mode-filter-malformed"),Jm=we("#mode-filter-redacted"),jm=we("#mode-filter-utc"),Qm=Pc("[data-view-action]"),eg=Pc("[data-metric]"),tg=Pc("[data-app-mode]"),ng=Pc("[data-source]"),oi=we("#session-select"),ko=we("#session-select-status"),Ch=we("#settings-button"),ig=we("#scene-frame"),NM=3500,DM=1e3,UM=180,FM=12e3,OM=1200,BM=12e3,ac=20,Jh=-1.4,kM=38,VM=52,sg=46,zM=58,HM=24,GM=104,WM=1.72,Hp=1.08,XM=4.3,$M=2.55,jh=-1e4,Qh=3600,rg=28,YM=3,qM=2,Er="compaction-progress",Es="live-prompt-progress",Gp=4.8,Wp=5.2,ZM=1.25,KM=3.7,JM=.04,jM=.42,og=Math.PI/2,ag=Math.PI*.76,vs=6.8,Xp=5.8,QM=1.75,eE=2.65,tE=.16,Rh=6,nE=.86,iE=3.05,sE=.72,rE=.24,oE=.62,gr=1,aE=1.4,lE=1.35,cE=1.7,uE=.62,hE=.04,dE=0,fE=1.15,pE=0,mE=1.05,lg=3.8,gE=9.2,_E=22,xE=6.4,cg=2.35,vE=.78,yE=.36,SE=1.85,bE=2.15,ug=4.15,hg=2.1,ME=ug+hg,EE=3.8,TE=.74,wE=.2,AE=.86,CE=.03,RE=.24,IE=ag,PE=.72,LE=1.85,NE=.1,xc=5,DE=.78,UE=.44,FE=.38,OE=.1,BE=.3,$p=2.4,kE=6.5,VE=.16,zE=34,HE=100,Yp=4,GE=16,WE=70,XE=.72,$E=2.6,YE=new Set(["KeyW","KeyA","KeyS","KeyD"]),dg="Space",qE=new Set(["ControlLeft","ControlRight"]),ZE=new Set(["ShiftLeft","ShiftRight"]),qp=.0032,KE=1.4,fg=28,Zp=Math.PI/2-.08,JE=4,Kp=24,Si=null;try{Si=new tc({canvas:it,antialias:!1,alpha:!1,powerPreference:"high-performance"}),Si.setClearColor(197894,1),Si.outputColorSpace=Kt,Si.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75))}catch(n){it.classList.add("webgl-unavailable"),console.warn(`WebGL renderer unavailable: ${Ar(n)}`)}var Cn=new Yr,Vo=new Jn;Vo.renderOrder=4;Cn.add(Vo);var zo=new Jn;zo.renderOrder=4.2;Cn.add(zo);var Ge=new $t(50,1,.1,FM);Ge.position.set(0,sg,.01);var je=new rc(Ge,Si?.domElement??it);je.enableDamping=!0;je.dampingFactor=.07;je.enablePan=!1;je.enableRotate=!1;je.enableZoom=!1;je.mouseButtons.LEFT=Bn.PAN;je.mouseButtons.RIGHT=Bn.ROTATE;je.maxDistance=Number.POSITIVE_INFINITY;je.minDistance=0;je.target.set(0,0,0);var Ih=new rr;Ih.params.Points.threshold=1.05;var Tr=new Ae,jE=new Ae(0,0),Tn=new Rt,gs=new Ve,Yi=new I,pg=new I,Jp=new I,mg=new en(new I(0,1,0),-Jh),_s=new I,vc=new rr,jp=new I,Qp=new I,li=new I,em=new I,Ro=new I,Io=new Qn(0,0,0,"YXZ"),tm=new Ve(16777215),Ee=null,ke=[],ji=[],Pt=new Map,Uo=new Map,Ho=[],ai={},Gn=null,on=null,Ph=new Map,Lh=new Map,nt=null,mt=null,hc=null,vr=null,qi=null,Eh=!1,Ki=null,No=null,gg=0,Nh=0,xt="overview",At=QE(new URLSearchParams(window.location.search).get("mode")),ys="three-d",Ts=vg(new URLSearchParams(window.location.search).get("source")),In=yg(new URLSearchParams(window.location.search).get("session")),Wn=[],Hn=null,jt=null,Dh=!1,bi=null,nm=0,xn=null,Uh=!1,Ss=null,Po=null,yr=null,ws="",Zo=null,An=!0,bs=!1,yc=!1,xr=!1,_r=!1,Rs=0,Fo=null,Nc=!1,Go=!1,Sc=0,Xn=Wh(),Ji=Number.POSITIVE_INFINITY,Sr=null;var Cr=!0,br=null,ed=!1,wn=new Set,td=!1,Wo=null,Fh=0,Oh=0,bc=null,Xo=!1,Bh=0,kh=0,_g=0,xg=0,nd=!1,Mc=!1,im=performance.now()/1e3,lc=0,Ec={prompt:6547455,local:15908444,browser:7467682,web:8229887,coordination:15887725,tool:12044492,assistant:16777215,message:16777215,error:16736102,long:16760138,file:6615680,diff:4446719,artifact:9464063,compaction:16216063,subagent:9403903,"subagent-result":13023487,"file-add":6615680,"file-update":4446719,"file-delete":16736102,"file-move":16760138};function vg(n){return n==="claude"?"claude":"codex"}function QE(n){let e=n?.trim().toLowerCase();return e&&uM.has(e)?e:"summary"}function Mi(n=Ts){return n==="claude"?"Claude":"Codex"}function yg(n){let e=n?.trim();return e||null}function eT(){let n=new URL(window.location.href);n.searchParams.has("token")&&(n.searchParams.delete("token"),window.history.replaceState(window.history.state,"",`${n.pathname}${n.search}${n.hash}`))}var sm=(()=>{let n=new URLSearchParams(window.location.search),e=n.get("token");try{let t=e||sessionStorage.getItem("perlustronToken");return t&&sessionStorage.setItem("perlustronToken",t),n.has("token")&&eT(),t}catch{return e}})();function Sg(n,{includeSession:e=!0,includeSource:t=!0,sessionPath:i=In}={}){return t&&n.searchParams.set("source",Ts),e&&i&&n.searchParams.set("session",i),sm&&n.searchParams.set("token",sm),n}function Rr(n,e={}){let t=new URL(n,window.location.origin);return Sg(t,e)}function As(n){return n===Rs}var rm=new ro(.78,16,10),tT=new no(.72,.72,.12,32),nT=new io(.72,0),iT=new Fi(.96,.12,.58),sT=new ir(.78,.9,96),rT=new ir(.9,1.02,96),om=new On({color:16777215}),oT=new On({color:16777215}),aT=new On({color:16777215}),lT=new On({color:16777215});Cn.add(new lo(8778239,1052688,1.5));var bg=new uo(16777215,2.2);bg.position.set(14,24,12);Cn.add(bg);var wr=new ho(BM,OM,1456447,1456447);wr.position.y=Jh;wr.material.transparent=!0;wr.material.opacity=.34;Cn.add(wr);vM.addEventListener("click",()=>{mt=null,g_(),kc(),vn(),Cs()});uc.addEventListener("click",()=>A_(!xr));Bo.addEventListener("click",fA);Vm.addEventListener("click",()=>Vc("timeline"));zm.addEventListener("click",()=>Vc("transcript"));Hm.addEventListener("click",()=>Vc("raw"));A_(!1);window.addEventListener("resize",y_);it.addEventListener("contextmenu",Tw);it.addEventListener("wheel",ww,{passive:!1});it.addEventListener("pointerdown",Aw,{capture:!0});it.addEventListener("pointermove",Cw,{capture:!0});it.addEventListener("pointerup",ud,{capture:!0});it.addEventListener("pointercancel",ud,{capture:!0});it.addEventListener("pointerdown",Lw);it.addEventListener("pointermove",Oc);it.addEventListener("pointermove",Nw);it.addEventListener("pointerup",f_);it.addEventListener("pointercancel",f_);it.addEventListener("click",Yw);it.addEventListener("dblclick",qw);JA();y_();await id();await Ir();Xc();Si?.setAnimationLoop(Mw);async function Ir({previousLineCountOverride:n=null,previousLatestOverride:e=null,suppressLiveAnimation:t=!1}={}){let i=++gg,s=Rs;try{let r=await fetch(Rr("/api/session"),{cache:"no-store"});if(!r.ok)throw new Error(`Session API returned ${r.status}`);let o=await r.json();if(!As(s)||i<Nh)return;Nh=i;let a=Ee!==null,l=a&&Ag()?aA()?.clone()??null:null,c=n??Ee?.lineCount??o.lineCount,d=e??Fo??o.latestEventIndex,h=a&&o.latestEventIndex>d,u=a&&o.latestEventIndex===d&&o.lineCount===c,f=h&&!t;if(Ji=f?d:Number.POSITIVE_INFINITY,Fo=o.latestEventIndex,Nc=!1,Ee=o,u&&_r){Qi(),Th();return}if(a&&_r&&IT()){Qi(),f&&(um(l),Lm()),Th();return}Rg({preserveView:a&&_r,preserveEventContext:a&&_r}),_r=!0,Qi(),f&&(um(l),Lm()),(o.pendingBytes??0)>0&&!Ki&&Cg(o.lineCount,Fo??o.latestEventIndex),Th()}catch(r){if(!As(s))return;yc=!1,pT(),qo(r)}}async function Vh(){if(Eh)return;Eh=!0;let n=Rs;try{if(!Ee){await Ir();return}let e=await cT();if(!As(n))return;wg(e)}catch(e){qo(e)}finally{Eh=!1}}async function cT(){let n=await fetch(Rr("/api/session/status"),{cache:"no-store"});if(!n.ok)throw new Error(`Session status returned ${n.status}`);return await n.json()}async function uT(n){let e=zt(),t=Rr("/api/session/diff");t.searchParams.set("leftSession",e.sessionPath),t.searchParams.set("rightSession",n),t.searchParams.set("redacted","true"),t.searchParams.set("profile","strict");let i=await fetch(t,{cache:"no-store"});if(!i.ok)throw new Error(`Diff API returned ${i.status}`);return await i.json()}async function hT(){let n=Rr("/api/session/unknowns");n.searchParams.set("profile","strict");let e=await fetch(n,{cache:"no-store"});if(!e.ok)throw new Error(`Unknowns API returned ${e.status}`);return await e.json()}async function id({retryWithoutSelection:n=!0,generation:e=Rs}={}){Tg();try{let t=await fetch(Rr("/api/sessions"),{cache:"no-store"});if(!t.ok)throw new Error(`Sessions API returned ${t.status}`);let i=await t.json();if(!As(e))return;Wn=i.sessions??[],am(i)}catch(t){if(!As(e))return;if(In&&n){In=null,Ko(),await id({retryWithoutSelection:!1,generation:e});return}Wn=[],am(),qo(t)}}function am(n){let e=document.createDocumentFragment(),t=n?.selectedPath||In||Wn[0]?.path||"";if(!Wn.length){let i=document.createElement("option");i.value="",i.textContent="No sessions found",e.append(i),oi.replaceChildren(e),oi.disabled=!0,ko.textContent="0";return}Wn.forEach(i=>{let s=document.createElement("option");s.value=i.path,s.textContent=Mg(i),s.title=i.path,e.append(s)}),oi.replaceChildren(e),oi.value=t,oi.disabled=!1,ko.textContent=`${Wn.length}`}function Mg(n){return[n.isLive?"Live":"",n.explicit?"Default":"",n.label,Sh(n.lastModifiedAt),Co(n.byteLength)].filter(Boolean).join(" - ")}async function dT(n){let e=yg(n);if(e===In)return;$c(),In=e,jt=null,bi=null,xn=null,Ss=null,yc=!0,Ko(),Eg();let t=Rs;mT(),await Ir({suppressLiveAnimation:!0}),As(t)&&Xc()}function Ko(){let n=new URL(window.location.href);n.searchParams.set("source",Ts),n.searchParams.set("mode",At),In?n.searchParams.set("session",In):n.searchParams.delete("session"),n.searchParams.delete("token"),window.history.replaceState({},"",`${n.pathname}${n.search}${n.hash}`)}function Eg(){Rs+=1,Ki&&clearTimeout(Ki),Ki=null,No=null,gg=0,Nh=0,mt=null,nt=null,Zo=null,xt="overview",Fo=null,Nc=!1,Xn=Wh(),Go=!1,Sc=0,Ji=Number.POSITIVE_INFINITY,Sr&&clearTimeout(Sr),Sr=null,_r=!1,Ee=null,ke=[],ji=[],Pt.clear(),Uo.clear(),Jg(),M_()}function Tg(){oi.disabled=!0,ko.textContent="Loading"}function Th(){fT({switched:yc}),yc=!1}function fT({switched:n=!1}={}){oi.disabled=Wn.length===0,ko.textContent=n?"Loaded":Wn.length?`${Wn.length}`:"0"}function pT(){oi.disabled=Wn.length===0,ko.textContent="Error"}function mT(){Xm.textContent="Loading",qh.textContent="Reading JSONL",$m.textContent="LOAD",Ym.textContent="Switching session...",Tg()}function wg(n){if(!Ee){Ir();return}let e=Ee,t=e.lineCount,i=Fo??e.latestEventIndex,s=e.byteLength??e.processedByteLength??0,r=n.byteLength??s,o=e.pendingBytes??0,a=n.pendingBytes??0,l=n.graphChanged===!0,c=_T(n),d=c.compactionInProgress,h=lm(c)!==lm(Xn),u=Math.max(0,r-s),f=a>0,g=u>0||a>o,v=n.renderableEventCount!==gT(e),m=a===0&&(n.latestEventIndex>i||n.lineCount>t||v),p=n.latestEventIndex===i&&n.lineCount===t&&u===0&&a===o&&l===Nc&&!h,S=l||f&&!d||g&&!d||v||m;vT(n,c),h&&(d||!S)&&Rg({preserveView:!0,preserveEventContext:!0}),S&&(!p||f||v||m)&&Cg(t,i)}function gT(n){return n.totals.promptCount+n.totals.callCount+n.totals.assistantMessageCount+n.totals.fileChangeCount+n.totals.compactionCount}function _T(n){let e=n.liveCues??Wh();return{compactionInProgress:e.compactionInProgress||n.compactionInProgress===!0,pendingPrompt:e.pendingPrompt??null,assistantStreaming:e.assistantStreaming===!0,latestAssistantEventIndex:e.latestAssistantEventIndex??null,latestAssistantPreview:e.latestAssistantPreview??null,latestTokenSample:e.latestTokenSample??null,activeToolCalls:e.activeToolCalls??[],completedToolCalls:e.completedToolCalls??[]}}function lm(n){return[n.compactionInProgress?"compact:1":"compact:0",n.pendingPrompt?`prompt:${n.pendingPrompt.eventIndex}:${Oo(n.pendingPrompt.title)}:${Oo(n.pendingPrompt.text)}`:"prompt:",n.assistantStreaming?`assistant:${n.latestAssistantEventIndex??""}:${Oo(n.latestAssistantPreview)}`:"assistant:",n.latestTokenSample?`tokens:${n.latestTokenSample.eventIndex}:${n.latestTokenSample.totalTokens}:${n.latestTokenSample.contextPercent??""}`:"tokens:",`active:${cm(n.activeToolCalls)}`,`done:${cm(n.completedToolCalls)}`].join("|")}function cm(n){return n.map(e=>`${e.id}:${e.eventIndex}:${e.status}:${e.completedAt??""}:${Oo(e.argumentPreview)}:${Oo(e.outputPreview)}`).join(",")}function Oo(n){return n?`${n.length}:${n.slice(0,48)}`:""}function um(n=null){if(!Ag())return;let e=gd();e&&(e.type==="prompt"?nt=e.id:e.type==="compaction"?nt=null:nt=e.promptId,xt="overview",ns({preserveCamera:!0}),n?xT(n,wc(e)):jo({preserveDistance:!0}),mt&&_d()&&Ed(),vn())}function Ag(){return An&&!ed&&!ws&&!yr}function Dc(){ed=!0}function sd(){ed=!1}function xT(n,e){let t=e.x-n.x,i=e.y-n.y,s=e.z-n.z;je.target.x+=t,je.target.y+=i,je.target.z+=s,Ge.position.x+=t,Ge.position.y+=i,Ge.position.z+=s,je.update()}function Cg(n,e){No||(No={previousLineCount:n,previousLatest:e}),Ki&&clearTimeout(Ki),Ki=setTimeout(()=>{let t=No;No=null,Ki=null,t&&Ir({previousLineCountOverride:t.previousLineCount,previousLatestOverride:t.previousLatest,suppressLiveAnimation:!1})},UM)}function vT(n,e){let t=zt();t.source=n.source,t.sessionPath=n.sessionPath,t.sessionId=n.sessionId,t.generatedAt=n.generatedAt,t.lastModifiedAt=n.lastModifiedAt,t.lineCount=n.lineCount,t.latestEventIndex=n.latestEventIndex,t.isLive=n.isLive,t.byteLength=n.byteLength,t.processedByteLength=n.processedByteLength,t.pendingBytes=n.pendingBytes,Nc=n.graphChanged===!0,Xn=e,yT(Xn.compactionInProgress),qh.textContent=Pg(n.lineCount,t.pendingBytes),Fg(RT(t.tokenTelemetry,Xn.latestTokenSample)),Qi(),Lr()}function yT(n){return Go===n?!1:(Go=n,Sc=n?performance.now():0,!0)}function Rg({preserveView:n=!1,preserveEventContext:e=!1}={}){let t=n?PT():null;Jg();let i=Wg(zt());ke=i.nodes,ji=i.connectors,Og(),nt=nt&&Pt.has(nt)?nt:ke.find(s=>s.type==="prompt")?.id??null,Ig(),ns({preserveCamera:n}),t&&LT(t),sw(),Xw(),rw(),Jo(),vn(),mt&&Pt.has(mt)?Ed():(mt=null,e?E_():M_())}function Ig(){let n=zt(),e=n.ui,t=ST();Xm.textContent=De(e.totalTurns),qh.textContent=Pg(n.lineCount,n.pendingBytes),yM.textContent=De(t.prompts),SM.textContent=De(t.error),bM.textContent=De(t.long),MM.textContent=De(t.file),EM.textContent=De(t.diff),TM.textContent=De(t.artifact),wM.textContent=De(t.compaction),Fg(n.tokenTelemetry),Sw(),Lr()}function ST(){let n={prompts:0,error:0,long:0,file:0,diff:0,artifact:0,compaction:0};return ke.forEach(e=>{if(Bc(e)){if(e.type==="prompt"){n.prompts+=1;return}Dm.forEach(t=>{Yc(e,t)&&(n[t]+=1)})}}),n}function Rn(n){return`${n}`}function Pg(n,e=0){return e>0?`${De(n)} + ${Co(e)} pending`:De(n)}function Uc(n){return`${n.parserVersion} / ${n.schemaVersion}`}function rd(n,e=Rn){return["Renderable events",e(n.renderableEventCount)]}function Lg(n,e=Rn){return["Unknown events",e(n.unknownEventCount)]}function Ng(n,e=Rn){return["Malformed lines",e(n.malformedLineCount)]}function Dg(n,e=Rn,t="Skipped payloads"){return[t,e(n.skippedLargePayloadCount)]}function Ug(n,e=Rn){return["Warnings",e(n.warnings.length)]}function od(n,e=Rn,t="Skipped payloads"){return[Lg(n,e),Ng(n,e),Dg(n,e,t),Ug(n,e)]}function bT(n,e=Rn,t="Skipped payloads"){return[["Parser",Uc(n)],rd(n,e),...od(n,e,t)]}function $o(n){return n.map(([e,t])=>`${e}: ${t}`)}function MT(n){return(n.unknownEventTypes||[]).map(e=>`${e.sourceEventType}: ${e.count}`)}function ET(n){let[,e]=Lg(n);return[`${e} total`,...MT(n)]}function TT(n){return(n.unknownEventTypes||[]).map(e=>`Unknown: ${e.sourceEventType} x${e.count}`)}function wT(n){return(n.malformedLines||[]).slice(0,5).map(e=>`Line ${e.lineNumber}: ${e.error}`)}function AT(n){return[...$o([Ng(n),Dg(n,Rn,"Skipped large payloads")]),...wT(n)]}function CT(n){return[...$o([["Parser",Uc(n)],["Lines read",Rn(n.totalLinesRead)],["Parsed events",Rn(n.parsedEventCount)],rd(n),...od(n,Rn,"Skipped large payloads"),["Token telemetry",n.tokenTelemetryAvailable?"available":"not logged"]]),...TT(n)]}function Fg(n){let e=n?.latestContextPercent??null;kp.textContent=e===null?"n/a":`${Math.min(999,Math.round(e))}%`,kp.title=n?.latestTotalTokens&&n?.contextWindow?`${De(n.latestTotalTokens)} / ${De(n.contextWindow)} tokens`:"No token telemetry in this session";let t=n?.samples?.length?n.samples.slice(-rg):[];if(!t.length){Vp.replaceChildren();return}let i=document.createDocumentFragment();t.forEach(s=>{let r=document.createElement("span"),o=Math.max(2,Math.min(28,Math.round((s.contextPercent??0)/4)));r.style.height=`${o}px`,r.title=`${Math.round(s.contextPercent??0)}% context at event ${s.eventIndex}`,i.append(r)}),Vp.replaceChildren(i)}function RT(n,e){if(!e)return n;let t=n.samples??[],s=t.at(-1)?.eventIndex===e.eventIndex?t:[...t,e].slice(-rg);return{...n,samples:s,latestTotalTokens:e.totalTokens,contextWindow:e.contextWindow,latestContextPercent:e.contextPercent,primaryRateLimitPercent:e.primaryRateLimitPercent,secondaryRateLimitPercent:e.secondaryRateLimitPercent}}function IT(){let n=Wg(zt());if(n.nodes.length!==ke.length||n.connectors.length!==ji.length)return!1;for(let t=0;t<n.nodes.length;t+=1)if(n.nodes[t].id!==ke[t]?.id)return!1;for(let t=0;t<n.connectors.length;t+=1)if(!dM(n.connectors[t],ji[t]))return!1;let e=performance.now();return n.nodes.forEach((t,i)=>{let s=ke[i];s.kind=t.kind,s.eventIndex=t.eventIndex,s.title=t.title,s.body=t.body,s.detail=t.detail,s.source=t.source,t.isNew&&(s.freshUntil=Math.max(s.freshUntil||0,t.freshUntil||0)),s.isNew=t.isNew||Is(s,e),s.baseScale=t.baseScale,s.matrixDirty=!0,xt==="overview"&&s.target.copy(t.target)}),ji=n.connectors,Og(),ns({preserveCamera:!0}),Jo(),Ig(),vn(),mt&&Pt.has(mt)?Ed():E_(),!0}function PT(){return new Map(ke.map(n=>[n.id,{position:n.position.clone(),target:n.target.clone(),scale:n.scale}]))}function Og(){Pt=new Map,Uo=new Map,ke.forEach(n=>{Pt.set(n.id,n);let e=Uo.get(n.promptId);e?e.push(n):Uo.set(n.promptId,[n])})}function LT(n){let e=new Map(ji.map(a=>[fc(a),dc(a)])),t=NT(n),i=t?n.get(Er):null,s=DT(n),r=s?n.get(Es):null,o=performance.now();ke.forEach(a=>{let l=n.get(a.id);if(l){a.position.copy(l.position),a.scale=l.scale,a.matrixDirty=!0;return}let c=a.id===t?i:a.id===s?r:null;if(c){a.position.copy(c.position),a.scale=Math.max(a.scale,c.scale),a.freshUntil=Math.min(a.freshUntil||Number.POSITIVE_INFINITY,o+Qh*.58),a.isNew=!0,a.matrixDirty=!0;return}a.position.copy(xt==="inspect"?a.target:UT(a,n,e)),a.matrixDirty=!0})}function NT(n){if(!n.has(Er))return null;let e=ke.filter(t=>t.type==="compaction"&&t.id!==Er&&!n.has(t.id));return e.length?e.reduce((t,i)=>i.eventIndex>=t.eventIndex?i:t).id:null}function DT(n){if(!n.has(Es))return null;let e=ke.filter(t=>t.type==="prompt"&&t.id!==Es&&!n.has(t.id));return e.length?e.reduce((t,i)=>i.eventIndex>=t.eventIndex?i:t).id:null}function UT(n,e,t){let i=t.get(n.id);if(!i)return n.target;let s=e.get(i);return s?s.position:Pt.get(i)?.position??n.target}function Bg(n,e){let t=new Set(n.assistantMessages.map(o=>o.id)),i=new Map,s=new Set;return e.forEach(o=>{let a=o.assistantMessageId||"";if(!t.has(a))return;let l=i.get(a)??[];l.push(o),i.set(a,l),s.add(o.id)}),[...n.assistantMessages.map(o=>({type:"assistant",message:o,calls:i.get(o.id)??[]})),...e.filter(o=>!s.has(o.id)).map(o=>({type:"call",call:o}))].sort((o,a)=>{let l=hm(o)-hm(a);return l!==0?l:dm(o)-dm(a)})}function hm(n){return n.type==="assistant"?n.message.eventIndex:n.call.eventIndex}function dm(n){return n.type==="assistant"?0:1}function FT(n,e){if(e.type==="compaction")return{above:Gp,below:Wp,promptCalls:[],subagentBranches:[],activityUnits:[],activityDepth:0,fileRows:0};let t=e.prompt,i=c_(n,t),s=Zg(i),r=new Set(s.flatMap(u=>[u.launch?.id,u.result?.id].filter(f=>!!f))),o=i.filter(u=>!r.has(u.id)),a=Bg(t,o),l=OT(a),c=Math.ceil((t.fileChanges?.length??0)/gr),d=l+VT(c)+$p,h=l+zT(s)+$p;return{above:Math.max(Gp,d),below:Math.max(Wp,h),promptCalls:i,subagentBranches:s,activityUnits:a,activityDepth:l,fileRows:c}}function OT(n){if(!n.length)return 0;let e=0,t=0;return n.forEach((i,s)=>{let r=BT(s);e=Math.max(e,r),t=Math.min(t,r),i.type==="assistant"&&i.calls.forEach((o,a)=>{let l=r+kg(a,i.calls.length);e=Math.max(e,l),t=Math.min(t,l)})}),Math.max(Math.abs(t),Math.abs(e))+ZM}function BT(n){return Tc(n).z}function Tc(n){let e=og+n*ag,t=KM+Math.min(jM,n*JM);return new I(Math.sin(e)*t,-QM-n*eE+Math.cos(e)*tE,Math.cos(e)*t)}function kT(n,e){let t=Tc(e);return new I(t.x,vs+t.y,n+t.z)}function fm(n,e,t,i,s){if(i==null){let a=Tc(s);return{fromId:n,toId:e,waypoints:[new I(0,vs+a.y*.36,t+a.z*.18),new I(a.x*.58,vs+a.y*.72,t+a.z*.58)]}}let r=5,o=[];for(let a=1;a<=r;a+=1){let l=a/(r+1),c=i+(s-i)*l,d=Tc(c);o.push(new I(d.x,vs+d.y,t+d.z))}return{fromId:n,toId:e,waypoints:o}}function kg(n,e){return Vg(n,e,Rh,nE,.32)}function Vg(n,e,t,i,s){let r=Math.floor(n/t),o=n%t,a=Math.min(e-r*t,t);return(o-(a-1)/2)*i+r*s}function VT(n){return n<=0?0:aE+(n-1)*lE+cE}function zT(n){if(!n.length)return 0;let e=n.reduce((t,i,s)=>{let r=Math.floor(s/2),o=qg(i.nodes).reduce((a,l)=>a+YT(l),r*cg);return Math.max(t,o)},0);return lg+ME+e}function HT(n){return n.x<0?-1:1}function ad(n,e,t=0,i=HT(n)){let s=n.x-t,r=n.z-e,o=Math.hypot(s,r);return o<.001&&(s=i,r=0,o=1),s/=o,r/=o,{radialX:s,radialZ:r,tangentX:-r,tangentZ:s}}function GT(n,e,t,i){let s=ad(n,e),r=Math.floor(t/Rh),o=t%Rh,a=kg(t,i),l=iE+r*sE;return new I(n.x+s.radialX*l+s.tangentX*a,n.y-.48-o*rE-r*oE,n.z+s.radialZ*l+s.tangentZ*a)}function pm(n,e,t){let i=n.assistantMessageId||"";return t.has(i)?i:e}function zg(n,e,t){if(n==null)return t;let i=t,s=Number.NEGATIVE_INFINITY;return e.forEach(r=>{r.eventIndex<=n&&r.eventIndex>=s&&(i=r,s=r.eventIndex)}),i}function WT(n,e,t){return!e.length||n==null?e.at(-1)?.id??t:zg(n,e,null)?.id??t}function Hg(n,e,t,i){let s=n.target,r=n.fileAxisX??0,o=n.fileAxisZ??e,a=ad(s,o,r,s.x<r?-1:1),l=Math.floor(t/gr),c=t%gr,d=Math.min(i-l*gr,gr),h=c-(d-1)/2,u=l*gr+c,f=uE+l*hE,g=h*dE;return new I(s.x+a.radialX*f+a.tangentX*g,s.y-1.62-u*fE-l*pE,s.z+a.radialZ*f+a.tangentZ*g)}function Gg(n,e,t){return{fromId:n,toId:e,waypoints:[new I(t.x,t.y-mE,t.z)]}}function Wg(n){let e=[],t=[],i=a_(n,{includeCompactionProgress:!0}),s=i.map(c=>FT(n,c)),o=s.reduce((c,d)=>c+d.above+d.below,0)/2,a=performance.now()+Qh,l=[];return i.forEach((c,d)=>{let h=s[d],u=o-h.above;if(o-=h.above+h.below,c.type==="compaction"){let D=c.compaction,L=D.eventIndex>Ji,B={id:D.id,type:"compaction",kind:"compaction",promptId:D.id,promptIndex:c.compactionIndex,callIndex:-1,eventIndex:D.eventIndex,title:D.title,body:D.text,detail:D.detail,source:D,isNew:L,freshUntil:L?a:0,position:new I(0,Xp,u),target:new I(0,Xp,u),baseScale:.58,scale:.58};e.push(B),l.push(B);return}let{prompt:f,promptIndex:g}=c,v=e.length,{promptCalls:m,subagentBranches:p}=h,S=f.fileChanges||[],M=f.eventIndex>Ji,b={id:f.id,type:"prompt",kind:"prompt",promptId:f.id,promptIndex:g,callIndex:-1,eventIndex:f.eventIndex??g,title:f.title,body:f.text,detail:f.text,source:f,isNew:M,freshUntil:M?a:0,position:new I(0,vs,u),target:new I(0,vs,u),baseScale:.78,scale:.78};e.push(b),l.push(b);let A=new Set(f.assistantMessages.map(D=>D.id)),T=h.activityUnits,P=[],x=b.id,w=null,R=0;T.forEach((D,L)=>{let B=kT(u,L);if(D.type==="call"){e.push(xs(f,g,D.call,R,B,a)),t.push(fm(x,D.call.id,u,w,L)),P.push({id:D.call.id,eventIndex:D.call.eventIndex}),x=D.call.id,w=L,R+=1;return}let V=ew(f,g,D.message,R,B,a,D.calls.length?.58:.32);e.push(V),t.push(fm(x,V.id,u,w,L)),P.push({id:V.id,eventIndex:D.message.eventIndex}),x=V.id,w=L,R+=1,D.calls.forEach((Z,J)=>{let ie=GT(V.target,u,J,D.calls.length);e.push(xs(f,g,Z,R,ie,a)),t.push([V.id,Z.id]),P.push({id:Z.id,eventIndex:Z.eventIndex}),R+=1})}),p.forEach((D,L)=>{let B=L%2===0?1:-1,V=Math.floor(L/2),Z=B*Math.min(_E,gE+V*xE),J=u-lg-V*cg,ie=J-ug,me=vs-1.2-L%2*vE-V*yE,ve=Z-B*SE,Xe=Z+B*bE,et=R+p.length*2+L*rM;if(D.launch){let Pe=xs(f,g,D.launch,R,new I(ve,me,J),a,{kind:"subagent",title:_m(D.launch),baseScale:.52,fileAxisX:Z,fileAxisZ:J});e.push(Pe),t.push([pm(D.launch,b.id,A),Pe.id]),R+=1}if(D.result){let Pe=xs(f,g,D.result,R,new I(Xe,me-.34,D.launch?ie:J),a,{kind:"subagent-result",title:_m(D.result),baseScale:.38,fileAxisX:Z,fileAxisZ:D.launch?ie:J});e.push(Pe),t.push([D.launch?.id??pm(D.result,b.id,A),Pe.id]),R+=1}XT({branch:D,parentId:D.result?.id??D.launch?.id??b.id,prompt:f,promptIndex:g,branchX:Z,branchY:me,startZ:(D.result?ie:J)-hg,callIndexStart:et,freshUntil:a,allNodes:e,allConnectors:t})});let C=new Map;for(let D=v;D<e.length;D+=1){let L=e[D];C.set(L.id,L)}let F=new Map,W=new Map;S.forEach(D=>{let L=D.callId&&C.has(D.callId)?D.callId:WT(D.eventIndex,P,b.id);F.set(D.id,L);let B=W.get(L)??[];B.push(D),W.set(L,B)}),S.forEach((D,L)=>{let B=F.get(D.id)??b.id,V=C.get(B)??b,Z=W.get(B)??[D],J=Math.max(0,Z.findIndex(Xe=>Xe.id===D.id)),ie=Hg(V,u,J,Z.length),me=`file-${cd(D)}`,ve={id:D.id,type:"fileChange",kind:me,promptId:f.id,promptIndex:g,callIndex:R+L,eventIndex:D.eventIndex??f.eventIndex??g,title:D.shortPath||$n(D.path)||"file change",body:D.preview||D.path,detail:iw(D),source:D,isNew:D.eventIndex>Ji,freshUntil:D.eventIndex>Ji?a:0,position:ie.clone(),target:ie,baseScale:.42,scale:.42};e.push(ve),t.push(Gg(B,ve.id,V.target))})}),l.forEach((c,d)=>{let h=l[d+1];h&&t.push([c.id,h.id])}),e.forEach(c=>{c.home=c.target.clone()}),{nodes:e,connectors:t}}function XT({branch:n,parentId:e,prompt:t,promptIndex:i,branchX:s,branchY:r,startZ:o,callIndexStart:a,freshUntil:l,allNodes:c,allConnectors:d}){let h=qg(n.nodes),u=e,f=null,g=0,v=0,m=o;h.forEach(p=>{Xg(p).forEach(M=>{let b=g,A=Yg(s,r,m,b),T=$g(m,b),P=u,x=[{id:P,eventIndex:M.spine?.eventIndex??Number.NEGATIVE_INFINITY,target:A,fileAxisX:s,fileAxisZ:T}];if(M.spine){let R=xs(t,i,M.spine,a+v,A,l,{kind:M.spine.name==="subagent.prompt"?"subagent":M.spine.kind,title:zh(M.spine),baseScale:Hh(M.spine),fileAxisX:s,fileAxisZ:T});c.push(R),d.push(JT(u,R.id,s,r,m,f,b)),u=R.id,f=b,P=R.id,x[0]=R,v+=1}let w=ad(A,T,s,s<0?-1:1);M.children.forEach((R,C)=>{let F=QT(A,w,C,M.children.length),W=xs(t,i,R,a+v,F,l,{title:zh(R),baseScale:Hh(R),fileAxisX:s,fileAxisZ:T});c.push(W),d.push([P,W.id]),x.push(W),v+=1}),$T({files:M.files,fileAnchors:x,axisZ:T,prompt:t,promptIndex:i,callIndexStart:a,childOffset:v,freshUntil:l,allNodes:c,allConnectors:d}),v+=M.files.length,g+=1})})}function $T({files:n,fileAnchors:e,axisZ:t,prompt:i,promptIndex:s,callIndexStart:r,childOffset:o,freshUntil:a,allNodes:l,allConnectors:c}){let d=new Map;n.map(u=>{let f=KT(u.eventIndex,e),g=d.get(f.id)??[],v=g.length;return g.push(u),d.set(f.id,g),{file:u,parent:f,siblingIndex:v}}).forEach(({file:u,parent:f,siblingIndex:g},v)=>{let m=d.get(f.id)??[u],p=Hg(f,t,g,m.length),S=xs(i,s,u,r+o+v,p,a,{title:u.argumentPreview||zh(u),baseScale:Hh(u),fileAxisX:f.fileAxisX,fileAxisZ:f.fileAxisZ});l.push(S),c.push(Gg(f.id,S.id,f.target))})}function YT(n){return Xg(n).reduce((e,t)=>{let i=Math.max(1,Math.ceil(t.children.length/xc));return e+EE+Math.max(0,i-1)*TE},0)}function Xg(n){let e=[],t=null;return n.prompt&&(t={spine:n.prompt,children:[],files:[]},e.push(t)),n.children.forEach(i=>{if(qT(i)){t={spine:i,children:[],files:[]},e.push(t);return}if(t||(t={spine:null,children:[],files:[]},e.push(t)),ZT(i)){t.files.push(i);return}t.children.push(i)}),e.length?e:[{spine:null,children:[],files:[]}]}function qT(n){return n.name==="subagent.message"||n.name==="subagent.compaction"||n.name==="subagent.more"}function ZT(n){return n.name==="subagent.file"}function KT(n,e){return zg(n,e,e[0])??e[0]}function $g(n,e){return n-e*wE}function JT(n,e,t,i,s,r,o){let a=r??o-.85,l=6,c=[];for(let d=1;d<=l;d+=1){let h=d/(l+1),u=a+(o-a)*h;c.push(Yg(t,i,s,u))}return{fromId:n,toId:e,waypoints:c}}function Yg(n,e,t,i){let s=n<0?-1:1,r=og+i*IE+s*.28,o=AE+Math.min(RE,i*CE);return new I(n+s*PE+Math.sin(r)*o*s,e-.9-i*LE+Math.cos(r)*NE,$g(t,i)+Math.cos(r)*o)}function jT(n,e){return Vg(n,e,xc,FE,.2)}function QT(n,e,t,i){let s=Math.floor(t/xc),r=t%xc,o=jT(t,i),a=DE+s*UE;return new I(n.x+e.radialX*a+e.tangentX*o,n.y-.36-r*OE-s*BE,n.z+e.radialZ*a+e.tangentZ*o)}function qg(n){let e=[],t=null;return n.forEach(i=>{if(i.name==="subagent.prompt"){t={prompt:i,children:[]},e.push(t);return}t||(t={prompt:null,children:[]},e.push(t)),t.children.push(i)}),e}function xs(n,e,t,i,s,r,{kind:o=t.kind||"tool",title:a=t.name,baseScale:l=t.status==="completed"?.3:.4,fileAxisX:c,fileAxisZ:d}={}){let h=t.eventIndex>Ji;return{id:t.id,type:"call",kind:o,promptId:n.id,promptIndex:e,callIndex:i,eventIndex:t.eventIndex??n.eventIndex??e,title:a,body:t.argumentPreview||"",detail:nw(t),source:t,isNew:h,freshUntil:h?r:0,position:s.clone(),target:s,fileAxisX:c,fileAxisZ:d,baseScale:l,scale:l}}function ew(n,e,t,i,s,r,o=.32){let a=t.eventIndex>Ji;return{id:t.id,type:"message",kind:"assistant",promptId:n.id,promptIndex:e,callIndex:i,eventIndex:t.eventIndex??n.eventIndex??e,title:"assistant message",body:t.text,detail:t.text,source:t,isNew:a,freshUntil:a?r:0,position:s.clone(),target:s,baseScale:o,scale:o}}function Zg(n){let e=n.filter(tw),t=n.filter(Kg),i=new Set(t),s=new Map;t.forEach(o=>{let a=gm(o);if(!a)return;let l=s.get(a)??[];l.push(o),s.set(a,l)});let r=e.map((o,a)=>{let l=gm(o),d=(l?s.get(l)?.find(h=>i.has(h)):null)??t.find(h=>i.has(h)&&h.eventIndex>=o.eventIndex)??null;return d&&i.delete(d),{launch:o,result:d,nodes:mm(o,d),eventIndex:Math.min(o.eventIndex,d?.eventIndex??o.eventIndex),order:a}});return i.forEach(o=>{r.push({launch:null,result:o,nodes:mm(null,o),eventIndex:o.eventIndex,order:e.length+r.length})}),r.sort((o,a)=>o.eventIndex-a.eventIndex||o.order-a.order)}function tw(n){return n.name==="spawn_agent"}function Kg(n){return n.name==="subagent"}function mm(n,e){return n?.subagentNodes?.length?n.subagentNodes:e?.subagentNodes??[]}function gm(n){let e=`${n.argumentPreview||""}
${n.outputPreview||""}`;return e.match(/"agent_id"\s*:\s*"([^"]+)"/)?.[1]??e.match(/\bagent:\s*([^\s,}]+)/)?.[1]??e.match(/"agent_path"\s*:\s*"([^"]+)"/)?.[1]??null}function _m(n){return Lc(n.name)??(Kg(n)?"subagent result":"subagent launch")}function zh(n){let e=Lc(n.name);return e?n.name==="subagent.more"&&n.argumentPreview?n.argumentPreview:e:n.name}function Hh(n){return n.name==="subagent.prompt"?.34:n.name==="subagent.more"?.26:n.status==="completed"?.24:.32}function nw(n){let e=[`call: ${n.name}`,`kind: ${n.kind}`,`status: ${n.status}`,n.assistantMessageId?`assistant message: ${n.assistantMessageId}`:"",n.subagentSessionPath?`subagent session: ${n.subagentSessionPath}`:"",n.subagentNodes?.length?`subagent nodes: ${n.subagentNodes.length}`:"",n.startedAt?`started: ${n.startedAt}`:"",n.completedAt?`completed: ${n.completedAt}`:"",n.durationMs!==null&&n.durationMs!==void 0?`duration: ${Cp(n.durationMs)}`:"","","arguments:",n.argumentPreview||"{}"];return n.outputPreview&&e.push("","output:",n.outputPreview),e.filter(Boolean).join(`
`)}function iw(n){return[`change: ${n.changeType}`,`path: ${n.path}`,n.callId?`call: ${n.callId}`:"",n.timestamp?`time: ${n.timestamp}`:"","",n.detail||n.preview].filter(Boolean).join(`
`)}function sw(){let n=ke.filter(r=>r.type==="prompt"),e=ke.filter(r=>r.type==="call"),t=ke.filter(r=>r.type==="fileChange"),i=ke.filter(r=>r.type==="message"),s=ke.filter(r=>r.type==="compaction");ai.prompt=Lo("prompt",n,tT,oT),ai.call=Lo("call",e,rm,om),ai.fileChange=Lo("fileChange",t,iT,lT),ai.message=Lo("message",i,rm,om),ai.compaction=Lo("compaction",s,nT,aT)}function Lo(n,e,t,i){if(!e.length)return;let s=new jr(t.clone(),i.clone(),e.length);s.instanceMatrix.setUsage(Ku),s.userData.bucket=n,s.userData.nodes=e,s.boundingSphere=new nn(new I,600),s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!1,Cn.add(s);let r=performance.now();return e.forEach((o,a)=>{o.bucket=n,o.instanceIndex=a,p_(s,o,a,0,r),o.matrixDirty=!1,s.setColorAt(a,pd(o,!1))}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s}function rw(){let n=Math.max(bh(ji),bh(Ho),Math.max(ke.length-1,1)),e=new Float32Array(n*2*3),t=new It;t.setAttribute("position",new Bt(e,3)),t.setDrawRange(0,bh(Ho)*2),t.boundingSphere=new nn(new I,600);let i=new ds({color:6547455,transparent:!0,opacity:.42});Gn=new tr(t,i),Gn.frustumCulled=!1,Cn.add(Gn)}function Jg(){Object.values(ai).forEach(n=>{n&&(Cn.remove(n),n.geometry.dispose(),n.material.dispose())}),ai={},Gn&&(Cn.remove(Gn),Gn.geometry.dispose(),Gn.material.dispose(),Gn=null),on&&(Cn.remove(on),on.geometry.dispose(),on.material.dispose(),on=null),xm(Ph,Vo),xm(Lh,zo)}function xm(n,e){n.forEach(t=>{Qg(t,e)}),n.clear()}function jg(n,e,t){Array.from(n.keys()).forEach(i=>{t.has(i)||(Qg(n.get(i),e),n.delete(i))})}function Qg(n,e){n?.forEach(t=>{e.remove(t),t.material.dispose()})}function e_(n,e,t,i,s,r){let o=n.get(e);return o||(o=Array.from({length:t},(a,l)=>ow(e,l/t,i,s,r)),n.set(e,o)),o}function ow(n,e,t,i,s){let r=new On({color:s,transparent:!0,opacity:0,side:bn,depthWrite:!1,blending:mo}),o=new Yt(i,r);return o.userData={nodeId:n,offset:e},o.rotation.x=-Math.PI/2,o.visible=!1,t.add(o),o}function ns({preserveCamera:n=!1}={}){let e;if(xt==="inspect"&&nt){let t=ld(nt);e=t;let i=new Map(t.placements.map(s=>[s.node.id,s]));ke.forEach(s=>{let r=i.get(s.id);r?(s.target.copy(r.target),s.scale=r.scale):(s.target.set(s.position.x,jh,s.position.z),s.scale=0),s.matrixDirty=!0}),n||(je.target.set(0,.2,-t.laneDepth*.12),Ge.position.set(0,18,Math.max(27,t.laneDepth*.58)))}else ke.forEach(t=>{t.target.copy(t.home??t.position),t.scale=t.baseScale,t.position.y<-1e3&&t.position.copy(t.target),t.matrixDirty=!0}),n||jo();fw(),t_(e),Jo(),Cr=!0,Fc()}function t_(n){if(xt==="inspect"&&nt){Ho=(n??ld(nt)).connectors;return}Ho=ji}function ld(n){let e=ke.filter(f=>f.promptId===n),t=aw(n),i=new Set(t.flatMap(f=>f.nodes.map(g=>g.id))),s=e.filter(f=>f.type==="prompt"||!i.has(f.id)).sort(i_),r=[...s.map((f,g)=>({type:"node",eventIndex:f.eventIndex,order:g*2,node:f})),...t.map(f=>({type:"branch",eventIndex:f.eventIndex,order:f.order*2+1,branch:f}))].sort(uw),o=t.reduce((f,g)=>Math.max(f,g.nodes.length),0),a=Math.min(GM,Math.max(HM,Math.max(0,r.length-1)*WM,Math.max(0,o-1)*Hp+8)),l=r.length>1?a/(r.length-1):0,c=a/2,d=new Map;r.forEach((f,g)=>{let v=c-g*l;f.type==="node"?d.set(f.node.id,v):f.branch.startZ=v});let h=s.map(f=>({node:f,target:new I(0,s_(f),d.get(f.id)??0),scale:ym(f)}));t.forEach(f=>{let g=f.side*(XM+f.lane*$M);f.nodes.forEach((v,m)=>{h.push({node:v,target:new I(g+dw(v,m,f.side),hw(v),f.startZ-m*Hp),scale:ym(v)})})});let u=lw(r,s,t);return{placements:h,visibleNodes:n_([...s,...t.flatMap(f=>f.nodes)]),mainNodes:s,branches:t,connectors:u,laneDepth:a}}function aw(n){let e=Ee,t=e?.prompts.find(i=>i.id===n);return!e||!t?[]:Zg(c_(e,t)).map((i,s)=>{let r=n_([i.launch?Pt.get(i.launch.id):null,...i.nodes.map(o=>Pt.get(o.id)),i.result?Pt.get(i.result.id):null]);return r.length?{nodes:r,eventIndex:i.eventIndex,order:s,side:s%2===0?-1:1,lane:Math.floor(s/2),startZ:0}:null}).filter(i=>!!i)}function lw(n,e,t){let i=[];return e.slice(1).forEach((s,r)=>{i.push([e[r].id,s.id])}),t.forEach(s=>{let r=s.nodes[0];if(!r)return;let o=n.findIndex(l=>l.type==="branch"&&l.branch===s),a=cw(n,o)??e[0]??null;a&&i.push([a.id,r.id]),s.nodes.slice(1).forEach((l,c)=>{i.push([s.nodes[c].id,l.id])})}),i}function cw(n,e){for(let t=e-1;t>=0;t-=1){let i=n[t];if(i?.type==="node")return i.node}return null}function n_(n){let e=new Set;return n.filter(t=>!t||e.has(t.id)?!1:(e.add(t.id),!0))}function i_(n,e){return n.type==="prompt"&&e.type!=="prompt"?-1:e.type==="prompt"&&n.type!=="prompt"?1:n.eventIndex-e.eventIndex||n.callIndex-e.callIndex||vm(n)-vm(e)}function uw(n,e){let t=n.type==="node"&&n.node.type==="prompt",i=e.type==="node"&&e.node.type==="prompt";return t!==i?t?-1:1:n.eventIndex-e.eventIndex||n.order-e.order}function vm(n){return n.type==="prompt"?0:n.type==="message"?1:n.type==="call"?2:n.type==="fileChange"?3:4}function s_(n){return n.type==="prompt"?1.15:n.type==="fileChange"?-.32:n.type==="message"?.62:n.type==="compaction"?.82:.24}function hw(n){return n.type!=="call"?s_(n):n.source.name==="subagent.prompt"?.72:n.source.name==="subagent.compaction"?.54:n.source.name==="spawn_agent"?.46:n.source.name==="subagent"?.3:n.source.name==="subagent.file"?-.16:n.source.name==="subagent.message"?.2:.04}function dw(n,e,t){if(n.type!=="call"||e===0||n.source.name==="subagent.prompt"||n.source.name==="subagent"||n.source.name==="subagent.more")return 0;let i=[.3,-.3,.58,-.58];return i[(e-1)%i.length]*t}function ym(n){return n.type==="prompt"?.62:n.type==="fileChange"?.36:n.type==="message"?.28:n.type==="compaction"?.48:n.source.name==="spawn_agent"?.44:n.source.name==="subagent"?.36:n.source.name==="subagent.prompt"?.34:n.source.name==="subagent.more"?.26:Math.min(.34,Math.max(.24,n.baseScale))}function fw(){let n=xt==="inspect"&&!!nt;ig.classList.toggle("inspect-active",n),it.setAttribute("aria-label",n?"Perlustron focused prompt inspection":"Perlustron session workflow"),r_()}function r_(){let n=xt==="overview"&&ys==="two-d";Qm.forEach(e=>{if(e.dataset.viewAction!=="two-d")return;let t=n?"Switch to 3D overview":"Switch to 2D overview";e.classList.toggle("active",n),e.setAttribute("aria-pressed",String(n)),e.setAttribute("aria-label",t),e.title=t})}function o_(n){sd(),xt="overview",ys=n,ns({preserveCamera:!0}),jo(),r_()}function pw(){o_(xt==="overview"&&ys==="two-d"?"three-d":"two-d")}function a_(n,{includeCompactionProgress:e=!1}={}){let t=_w(n),i=[...t.map((r,o)=>({type:"prompt",eventIndex:mw(n,t,r,o),prompt:r,promptIndex:o})),...(n.compactions||[]).map((r,o)=>({type:"compaction",eventIndex:r.eventIndex,compaction:r,compactionIndex:o}))],s=e?xw(n,i):null;return s&&i.push(s),i.sort((r,o)=>r.eventIndex-o.eventIndex)}function mw(n,e,t,i){let s=e[i+1]?.eventIndex??Number.POSITIVE_INFINITY,r=gw(n,t),o=n.compactions?.filter(a=>a.eventIndex>t.eventIndex&&a.eventIndex<s).reduce((a,l)=>a===null||l.eventIndex>a?l.eventIndex:a,null)??null;return o!==null?Math.max(r,o+.25):r}function gw(n,e){let t=e.id===u_(n)?[...Xn.activeToolCalls,...Xn.completedToolCalls].map(i=>i.eventIndex):[];return Math.max(e.eventIndex,...e.calls.map(i=>i.eventIndex),...e.assistantMessages.map(i=>i.eventIndex),...(e.fileChanges||[]).map(i=>i.eventIndex),...t)}function _w(n){let e=l_(n);return e?[...n.prompts,e]:n.prompts}function l_(n){let e=Xn.pendingPrompt;return!e||e.eventIndex<=n.latestEventIndex?null:{id:Es,eventIndex:e.eventIndex,timestamp:e.timestamp,title:e.title||"Incoming prompt",text:e.text,images:[],calls:[],assistantMessages:[],fileChanges:[]}}function c_(n,e){if(e.id!==u_(n))return e.calls;let t=new Set(e.calls.map(s=>s.id)),i=[...Xn.activeToolCalls,...Xn.completedToolCalls].filter(s=>!t.has(s.id)&&s.eventIndex>n.latestEventIndex);return i.length?[...e.calls,...i]:e.calls}function u_(n){return l_(n)?Es:n.prompts.at(-1)?.id??null}function xw(n,e){if(!Go)return null;let t=e.reduce((o,a)=>a.type!=="prompt"?o:!o||a.eventIndex>=o.eventIndex?a:o,null),s=Math.max(n.latestEventIndex,t?.eventIndex??0)+.5,r={id:Er,eventIndex:s,timestamp:n.lastModifiedAt||n.generatedAt||null,title:"Compacting context",text:"Compaction in progress",detail:["compaction: in progress",t?`anchor: ${t.prompt.title}`:"",n.pendingBytes>0?`pending bytes: ${n.pendingBytes}`:""].filter(Boolean).join(`
`),replacedMessageCount:0,encrypted:!1,reason:"in progress"};return{type:"compaction",eventIndex:s,compaction:r,compactionIndex:n.compactions.length}}function vw({label:n,detail:e,icon:t}){let i=document.createElement("div");i.className="root-row metadata-row",i.title=e;let s=yw(t),r=document.createElement("span");r.className="root-copy";let o=document.createElement("strong");o.textContent=n;let a=document.createElement("small");return a.textContent=e,r.append(o,a),i.append(s,r),i}function yw(n){let e=document.createElement("span");e.className=`root-icon ${n}`,e.setAttribute("aria-hidden","true");let t=document.createElementNS(Fp,"svg");t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("focusable","false"),t.setAttribute("fill","none"),t.setAttribute("stroke","currentColor"),t.setAttribute("stroke-width","2"),t.setAttribute("stroke-linecap","round"),t.setAttribute("stroke-linejoin","round");for(let i of cM[n]){let s=document.createElementNS(Fp,"path");s.setAttribute("d",i),t.append(s)}return e.append(t),e}function Sw(){let n=zt().metadata,e=(n?.dynamicTools||[]).map(s=>s.namespace?`${s.namespace}.${s.name}`:s.name).slice(0,6),t=[{label:"Codex",detail:[n?.originator,n?.cliVersion].filter(Boolean).join(" "),icon:"codex"},{label:"Source",detail:[n?.source,n?.modelProvider].filter(Boolean).join(" / "),icon:"source"},{label:"Git",detail:bw(n?.gitCommitHash)||$n(n?.repositoryUrl||""),icon:"git"},{label:"Policy",detail:[n?.approvalPolicy,n?.sandbox].filter(Boolean).join(" / "),icon:"policy"},{label:"Model",detail:n?.model||"",icon:"model"},{label:"Tools",detail:e.join(", "),icon:"tools"}].filter(s=>s.detail),i=document.createDocumentFragment();t.forEach(s=>i.append(vw(s))),_M.replaceChildren(i)}function bw(n){return n?n.slice(0,10):""}function cd(n){return sM.includes(n.changeType)?n.changeType:"update"}function Mw(){let n=performance.now(),e=n/1e3,t=Math.min(e-im,.04);im=e,lc+=t;let i=kw(t);Vw(n),$w(lc,n),(i||Cr)&&Fc(),i&&Jo(),zw(n,lc),Gw(n,lc),Ew(t),je.update(),Bw(),Si?.render(Cn,Ge)}function Ew(n){let e=(wn.has("KeyW")?1:0)-(wn.has("KeyS")?1:0),t=(wn.has("KeyD")?1:0)-(wn.has("KeyA")?1:0),i=(wn.has(dg)?1:0)-(V_()?1:0);if(!e&&!t&&!i||(Ow(),Ge.getWorldDirection(li),em.crossVectors(li,Ge.up).normalize(),Ro.set(0,0,0).addScaledVector(li,e).addScaledVector(em,t).addScaledVector(Ge.up,i),Ro.lengthSq()<1e-6))return;Dc();let s=Ge.position.distanceTo(je.target),r=Math.min(WE,Math.max(GE,s*XE)),o=rC()?r*$E:r;Ro.normalize().multiplyScalar(o*n),Ge.position.add(Ro),je.target.add(Ro)}function Tw(n){n.preventDefault()}function ww(n){let e=n.deltaMode===WheelEvent.DOM_DELTA_PAGE?window.innerHeight:n.deltaMode===WheelEvent.DOM_DELTA_LINE?16:1,t=Math.max(-Yp,Math.min(Yp,n.deltaY*e/HE));Math.abs(t)<.001||(Gh(-t),n.preventDefault())}function Aw(n){if(!(n.button!==0||!Pw(n))){bc=n.pointerId,Xo=!1,Bh=n.clientX,kh=n.clientY,_g=n.clientX,xg=n.clientY,nd=h_(n,pg),it.classList.add("grabbing");try{it.setPointerCapture(n.pointerId)}catch{}n.preventDefault(),n.stopImmediatePropagation()}}function Cw(n){if(n.pointerId!==bc)return;if((n.buttons&1)===0){ud(n);return}let e=n.clientX-Bh,t=n.clientY-kh;Bh=n.clientX,kh=n.clientY;let i=(n.clientX-_g)**2+(n.clientY-xg)**2;Xo=Xo||i>JE**2,(nd?Rw(n):Iw(e,t))&&Dc(),n.preventDefault(),n.stopImmediatePropagation()}function ud(n){if(n.pointerId===bc){bc=null,Mc=Mc||Xo,Xo=!1,nd=!1,it.classList.remove("grabbing");try{it.hasPointerCapture(n.pointerId)&&it.releasePointerCapture(n.pointerId)}catch{}n.stopImmediatePropagation()}}function Rw(n){return!h_(n,Jp)||(_s.copy(pg).sub(Jp),_s.lengthSq()<=1e-6)?!1:(Ge.position.add(_s),je.target.add(_s),je.update(),!0)}function h_(n,e){return Oc(n),vc.setFromCamera(Tr,Ge),!!vc.ray.intersectPlane(mg,e)}function Iw(n,e){if(!n&&!e)return!1;let t=it.getBoundingClientRect();if(t.width<=0||t.height<=0)return!1;let i=d_(),s=2*Math.tan(Eo.degToRad(Ge.fov)/2)*i,r=s/t.height,o=s*Ge.aspect/t.width;return jp.setFromMatrixColumn(Ge.matrix,0).normalize(),Qp.setFromMatrixColumn(Ge.matrix,1).normalize(),_s.set(0,0,0).addScaledVector(jp,-n*o).addScaledVector(Qp,e*r),Ge.position.add(_s),je.target.add(_s),je.update(),!0}function d_(){if(vc.setFromCamera(jE,Ge),vc.ray.intersectPlane(mg,Yi))return Math.max(.001,Ge.position.distanceTo(Yi));Ge.getWorldDirection(li);let n=Math.abs(Ge.position.y-Jh);return Math.max(.001,n/Math.max(.12,Math.abs(li.y)))}function Pw(n){return At==="map"&&!Ms(n.target)}function Lw(n){if(!(n.button!==2||!Fw(n))){td=!0,Wo=n.pointerId,Fh=n.clientX,Oh=n.clientY,hd();try{it.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}}function Nw(n){if(!td||n.pointerId!==Wo)return;let e=n.clientX-Fh,t=n.clientY-Oh;Fh=n.clientX,Oh=n.clientY,Dw(e,t),n.preventDefault()}function f_(n){n.pointerId===Wo&&(Uw(n.pointerId),n.preventDefault())}function Dw(n,e){!n&&!e||(Io.setFromQuaternion(Ge.quaternion,"YXZ"),Io.y-=n*qp,Io.x=Math.max(-Zp,Math.min(Zp,Io.x-e*qp)),Ge.quaternion.setFromEuler(Io),hd(),Dc())}function Uw(n=Wo){td=!1,Wo=null;try{n!=null&&it.hasPointerCapture(n)&&it.releasePointerCapture(n)}catch{}}function Fw(n){return!(xt==="overview"&&ys==="two-d")&&!Ms(n.target)}function Ow(){Ge.position.distanceTo(je.target)>fg&&hd()}function hd(){let n=Math.min(fg,Math.max(KE,Ge.position.distanceTo(je.target)));Ge.getWorldDirection(li),je.target.copy(Ge.position).addScaledVector(li,n),je.update()}function Bw(){wr.position.x=Math.round(je.target.x/ac)*ac,wr.position.z=Math.round(je.target.z/ac)*ac}function kw(n){let e=1-Math.pow(.001,n),t=!1;return ke.forEach(i=>{i.position.distanceToSquared(i.target)<4e-6||(i.position.lerp(i.target,e),i.matrixDirty=!0,t=!0)}),t}function Vw(n){let e=!1;ke.forEach(t=>{t.isNew&&!Is(t,n)&&(t.isNew=!1,t.matrixDirty=!0,e=!0)}),e&&vn()}function zw(n,e){let t=ke.filter(o=>o.type==="compaction"&&Pn(o)&&Is(o,n)),i=new Map;t.forEach(o=>{i.set(o.id,{position:o.position,eventIndex:o.eventIndex,progress:dd(o,n),inProgress:!1})});let s=Go?Hw():null;if(s){let o=Sc?n-Sc:0;i.set(Er,{position:s.position,eventIndex:s.eventIndex,progress:o/2200%1,inProgress:!0})}let r=new Set(i.keys());jg(Ph,Vo,r),i.forEach((o,a)=>{let l=e_(Ph,a,YM,Vo,sT,Ec.compaction),c=o.inProgress?.82:Math.sin(Math.min(1,o.progress)*Math.PI);l.forEach((d,h)=>{let u=(o.progress+d.userData.offset)%1,f=Math.pow(1-u,o.inProgress?1.35:1.8)*(.18+c*.56);d.position.set(o.position.x,o.position.y-(o.inProgress?.82:.66),o.position.z),d.scale.setScalar(o.inProgress?1.45+u*6.2+Math.sin(e*5.2)*.16:1.2+u*8.4),d.rotation.z=e*(o.inProgress?-.9:.45)+o.eventIndex*.01+h*.72,d.material.opacity=f,d.visible=f>.012})})}function Hw(){let n=Pt.get(Er);if(n)return n;if(nt){let e=Pt.get(nt);if(e?.type==="prompt")return e}return md()??b_()??S_()}function Gw(n,e){let t=ke.filter(a=>a.type==="prompt"&&Pn(a)&&Is(a,n)),i=Xn.assistantStreaming?md():null,s=i&&Pn(i)?i:null,r=Ww(s?[...t,s]:t),o=new Set(r.map(a=>a.id));jg(Lh,zo,o),r.forEach(a=>{let l=e_(Lh,a.id,qM,zo,rT,Ec.prompt),c=dd(a,n),d=Math.sin(Math.min(1,c)*Math.PI);l.forEach((h,u)=>{let f=(c+h.userData.offset)%1,g=Math.pow(1-f,1.55)*(.1+d*.38);h.position.set(a.position.x,a.position.y-.74,a.position.z),h.scale.set(1+f*3.2,1+f*5.4,1),h.rotation.z=e*.72+a.eventIndex*.012+u*Math.PI*.5,h.material.opacity=g,h.visible=g>.01})})}function Ww(n){let e=new Set;return n.filter(t=>e.has(t.id)?!1:(e.add(t.id),!0))}function Xw(){if(!ke.length)return;let n=new It;n.setAttribute("position",new Bt(new Float32Array(ke.length*3),3)),n.setAttribute("color",new Bt(new Float32Array(ke.length*3),3)),n.boundingSphere=new nn(new I,600);let e=new nr({size:3,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1}),t=new Qr(n,e);t.frustumCulled=!1,t.renderOrder=5,t.userData.nodes=ke,on=t,Cn.add(t),Cr=!0,Fc()}function Fc(){if(!on)return;let n=on.geometry.getAttribute("position"),e=n.array;ke.forEach((t,i)=>{let s=i*3;Pn(t)?(e[s]=t.position.x,e[s+1]=t.position.y,e[s+2]=t.position.z):(e[s]=0,e[s+1]=jh,e[s+2]=0)}),n.needsUpdate=!0,Cr&&v_()}function $w(n,e){Object.values(ai).forEach(t=>{if(!t)return;let i=!1;t.userData.nodes.forEach((s,r)=>{let o=Is(s,e),a=s.id===mt;!s.matrixDirty&&!o&&!a||(p_(t,s,r,n,e,o,a),s.matrixDirty=!1,i=!0)}),i&&(t.instanceMatrix.needsUpdate=!0)})}function p_(n,e,t,i,s=performance.now(),r=Is(e,s),o=e.id===mt){if(!Pn(e)){Tn.position.set(0,jh,0),Tn.rotation.set(0,0,0),Tn.scale.setScalar(0),Tn.updateMatrix(),n.setMatrixAt(t,Tn.matrix);return}let a=dd(e,s),l=r&&e.type==="compaction",c=r?l?.18+Sm(a)*1.08:.26+Sm(a)*.74:1,d=l?.28:.16,h=r?1+Math.max(0,Math.sin(i*(l?14:9)+e.eventIndex))*d:1,u=(o?1.18:r?1+Math.sin(i*2.3+e.eventIndex)*.018:1)*h;Tn.position.copy(e.position),xt==="inspect"||!r&&!o?Tn.rotation.set(0,0,0):l?Tn.rotation.set(i*1.45,i*2.2+e.eventIndex*.03,i*1.1):Tn.rotation.set(.08*Math.sin(i+e.eventIndex),i*.2+e.eventIndex*.07,0),Tn.scale.setScalar(e.scale*c*u),Tn.updateMatrix(),n.setMatrixAt(t,Tn.matrix)}function Is(n,e){return!!(n.freshUntil&&n.freshUntil>e)}function dd(n,e){return!n.freshUntil||n.freshUntil<=e?1:Math.max(0,Math.min(1,1-(n.freshUntil-e)/Qh))}function Sm(n){return 1-Math.pow(1-n,3)}function Jo(){if(!Gn)return;let n=Gn.geometry.getAttribute("position"),e=n.array,t=0,i=(s,r)=>{let o=t*6;e[o]=s.x,e[o+1]=s.y,e[o+2]=s.z,e[o+3]=r.x,e[o+4]=r.y,e[o+5]=r.z,t+=1};Ho.forEach(s=>{let r=dc(s),o=fc(s),a=Pt.get(r),l=Pt.get(o);if(!a||!l||!Pn(a)||!Pn(l))return;let c=a.position;Array.isArray(s)||s.waypoints.forEach(d=>{i(c,d),c=d}),i(c,l.position)}),Gn.geometry.setDrawRange(0,t*2),n.needsUpdate=!0}function Yw(n){if(Mc){Mc=!1;return}Oc(n);let e=m_();e&&Pr(e)}function qw(n){Oc(n);let e=m_();if(e){if(e.type==="compaction"){nt=null,xt="overview",ns(),Pr(e);return}e.type==="prompt"?Pm(e.id,e):Pm(e.promptId,e)}}function Oc(n){let e=it.getBoundingClientRect();Tr.x=(n.clientX-e.left)/e.width*2-1,Tr.y=-((n.clientY-e.top)/e.height*2-1)}function m_(){let n=Zw();if(n)return n;Ih.setFromCamera(Tr,Ge);let e=Object.values(ai).filter(i=>!!i);on&&e.push(on);let t=Ih.intersectObjects(e,!1);for(let i of t){if(i.object===on&&i.index!==void 0){let s=on.userData.nodes[i.index]||null;if(s&&Pn(s))return s;continue}if(i.instanceId!==void 0){let r=i.object.userData.nodes[i.instanceId]||null;if(r&&Pn(r))return r}}return null}function Zw(){let n=it.getBoundingClientRect(),e=n.left+(Tr.x+1)/2*n.width,t=n.top+(1-Tr.y)/2*n.height,i=null,s=Kp*Kp;return ke.forEach(r=>{if(!Pn(r)||(Yi.copy(r.position).project(Ge),Yi.z<-1||Yi.z>1))return;let o=n.left+(Yi.x+1)/2*n.width,a=n.top+(1-Yi.y)/2*n.height,l=(o-e)**2+(a-t)**2;l<=s&&(i=r,s=l)}),i}function es(n){Zo=n??{},At==="raw"&&Ee&&Hc()}function g_(){Zo=null,At==="raw"&&Ee&&Hc()}function Pr(n,{reveal:e=!0,skipStableRender:t=!1}={}){if(!n)return;mt=n.id;let i=Kw(n);if(t&&br?.nodeId===n.id&&br.signature===i&&_d()){es(n.source),Cs();return}e&&T_(),vn(),Kh.textContent=mM(n),ts.classList.toggle("prompt-context",n.type==="prompt"),$h(Fm(n),"Selection"),Zh.textContent=Bm(n),Xh(Um(n)),Yh.textContent=Om(n),es(n.source),Cs(),fd(km(n));let s=n.detail||n.body||n.title;n.type==="prompt"?Jw(s):__(s),br={nodeId:n.id,signature:i}}function Kw(n){let e=km(n).map(t=>[t.id,t.eventIndex,t.imageIndex,t.detail??"",t.mimeType].join("")).join("");return[n.id,n.type,n.kind,n.eventIndex,n.type==="prompt"?n.promptIndex:"",Fm(n),Bm(n),Um(n),n.detail||n.body||n.title,e].join("")}function __(n){Mr.classList.remove("stream-markdown"),Mr.textContent=n}function Jw(n){Mr.classList.add("stream-markdown"),Mr.replaceChildren(eA(n)??sA(n))}var jw=["File","Side","Lines","Node position","Page URL","Frame","Target","Target selector","Target path","Comment"],Qw=[{label:"File",field:"File"},{label:"Side",field:"Side"},{label:"Lines",field:"Lines"},{label:"Node",field:"Node position"},{label:"Target",field:"Target"},{label:"Selector",field:"Target selector"},{label:"Path",field:"Target path"},{label:"Page",field:"Page URL",asLink:!0},{label:"Frame",field:"Frame"}];function eA(n){if(!/^#\s+Diff comments:\s*$/m.test(n))return null;let e=tA(n);if(!e.length)return null;let t=document.createDocumentFragment(),i=document.createElement("section");i.className="annotation-prompt";let s=document.createElement("h1");s.textContent="Diff comments",i.append(s);let r=n.match(/^- Current URL:\s*(.+)$/m)?.[1]?.trim();return e.forEach(o=>{let a=document.createElement("article");a.className="annotation-item";let l=document.createElement("span");l.className="annotation-marker",l.textContent=`Comment ${o.number}`,a.append(l);let c=document.createElement("p");c.className="annotation-comment",c.textContent=bm(o,"Comment")||"No comment text.",a.append(c);let d=document.createElement("dl");d.className="annotation-meta",Qw.forEach(h=>{Mm(d,h.label,bm(o,h.field),h.asLink)}),Mm(d,"Current",r,!0),a.append(d),i.append(a)}),t.append(i),t}function tA(n){let e=n.replace(/\r\n?/g,`
`),t=[...e.matchAll(/^##\s+Comment\s+(\d+)\s*$/gm)];return t.map((i,s)=>{let r=t[s+1]?.index??e.search(/\n# In app browser:/),o=r>=0?r:e.length,a=e.slice((i.index??0)+i[0].length,o);return{number:i[1],fields:nA(a)}})}function nA(n){let e=new Map,t=n.split(`
`),i=0;for(;i<t.length;){let s=t[i].match(/^([A-Z][A-Za-z ]+):\s*(.*)$/),r=s?.[1];if(!r||!x_(r)){i+=1;continue}let o=s[2].trim();if(o){e.set(r,o),i+=1;continue}let a=[];for(i+=1;i<t.length;){let l=t[i];if(!l.trim()||/^#{1,6}\s+/.test(l)||iA(l))break;a.push(l.trim()),i+=1}e.set(r,a.join(`
`).trim())}return e}function x_(n){return jw.includes(n)}function iA(n){let e=n.match(/^([A-Z][A-Za-z ]+):/);return!!(e&&x_(e[1]))}function bm(n,e){return n.fields.get(e)??""}function Mm(n,e,t,i=!1){let s=t?.trim();if(!s)return;let r=document.createElement("dt");r.textContent=e;let o=document.createElement("dd");if(i&&/^https?:\/\//.test(s)){let a=document.createElement("a");a.href=s,a.target="_blank",a.rel="noopener noreferrer",a.textContent=s,o.append(a)}else o.textContent=s;n.append(r,o)}function sA(n){let e=document.createDocumentFragment(),t=n.replace(/\r\n?/g,`
`).split(`
`),i=0,s=(o,a)=>{o.innerHTML=Em(a)},r=(o,a)=>{o.innerHTML=a.map(l=>Em(l.trim())).join("<br>")};for(;i<t.length;){let o=t[i]??"";if(!o.trim()){i+=1;continue}let a=o.match(/^\s*```(\S*)\s*$/);if(a){let h=[];for(i+=1;i<t.length&&!/^\s*```\s*$/.test(t[i]??"");)h.push(t[i]??""),i+=1;i<t.length&&(i+=1);let u=document.createElement("pre"),f=document.createElement("code");a[1]&&(f.dataset.language=a[1]),f.textContent=h.join(`
`),u.append(f),e.append(u);continue}let l=o.match(/^\s{0,3}(#{1,6})\s+(.+)$/);if(l){let h=Math.min(6,l[1].length),u=document.createElement(`h${h}`);s(u,l[2]),e.append(u),i+=1;continue}if(/^\s*[-*]\s+/.test(o)){let h=document.createElement("ul");for(;i<t.length;){let u=(t[i]??"").match(/^\s*[-*]\s+(.+)$/);if(!u)break;let f=document.createElement("li");s(f,u[1]),h.append(f),i+=1}e.append(h);continue}if(/^\s*\d+\.\s+/.test(o)){let h=document.createElement("ol");for(;i<t.length;){let u=(t[i]??"").match(/^\s*\d+\.\s+(.+)$/);if(!u)break;let f=document.createElement("li");s(f,u[1]),h.append(f),i+=1}e.append(h);continue}let c=[];for(;i<t.length;){let h=t[i]??"";if(!h.trim()||/^\s*```/.test(h)||/^\s{0,3}#{1,6}\s+/.test(h)||/^\s*[-*]\s+/.test(h)||/^\s*\d+\.\s+/.test(h))break;c.push(h.trim()),i+=1}let d=document.createElement("p");r(d,c),e.append(d)}if(!e.childNodes.length){let o=document.createElement("p");o.textContent="",e.append(o)}return e}function Em(n){let e=[],t=ri(n).replace(/`([^`]+)`/g,(i,s)=>{let r=`@@CODE_SPAN_${e.length}@@`;return e.push(`<code>${s}</code>`),r});return t=t.replace(/\[([^\]\n]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)/g,(i,s,r)=>`<a href="${r}" target="_blank" rel="noopener noreferrer">${s}</a>`),t=t.replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/(^|[^\*])\*([^*\n]+)\*/g,"$1<em>$2</em>"),t=t.replace(/@@CODE_SPAN_(\d+)@@/g,(i,s)=>e[Number(s)]??""),t}function fd(n=[]){if(Bp.replaceChildren(),!n.length)return;let e=document.createDocumentFragment();n.forEach((t,i)=>{let s=document.createElement("figure"),r=rA(t),o=document.createElement("a");o.className="stream-image-link",o.href=r,o.target="_blank",o.rel="noopener",o.title=`Prompt image ${i+1}`;let a=document.createElement("img");a.loading="eager",a.decoding="async",a.src=r,a.alt=`Prompt image ${i+1}`,a.addEventListener("load",()=>{s.classList.add("loaded"),s.classList.remove("load-error")}),a.addEventListener("error",()=>{s.classList.add("load-error"),l.textContent="Image unavailable in this local/privacy context; use Raw or Export for redacted evidence."});let l=document.createElement("figcaption"),c=t.detail?` (${t.detail})`:"";l.textContent=`${t.mimeType||"image"}${c}`,o.append(a),s.append(o,l),e.append(s)}),Bp.append(e)}function rA(n){let e=new URL(n.url,window.location.origin),t=Ee?.lastModifiedAt||Ee?.generatedAt||`${n.eventIndex}`,i=In||Ee?.sessionPath||null;return e.searchParams.set("v",t),Sg(e,{includeSource:!1,sessionPath:i}),`${e.pathname}${e.search}`}function vn(){ke.forEach(n=>{n.matrixDirty=!0}),Object.values(ai).forEach(n=>{n&&(n.userData.nodes.forEach((e,t)=>{n.setColorAt(t,pd(e,e.id===mt))}),n.instanceColor&&(n.instanceColor.needsUpdate=!0))}),Cr=!0,v_()}function v_(){if(!on)return;let n=on.geometry.getAttribute("color"),e=n.array;ke.forEach((t,i)=>{let s=i*3,r=pd(t,t.id===mt);e[s]=r.r,e[s+1]=r.g,e[s+2]=r.b}),n.needsUpdate=!0,Cr=!1}function pd(n,e){let t=Ec[n.kind]??Ec.tool;return gs.setHex(t),Pn(n)?e?gs.lerp(tm,.38):n.isNew?gs.lerp(tm,.24):xt==="inspect"&&n.promptId!==nt?gs.multiplyScalar(.34):_C(n)||gs.multiplyScalar(.38):gs.setRGB(0,0,0),gs}function Bc(n){return xt!=="inspect"||!nt||n.promptId===nt}function Pn(n){return Bc(n)&&(!yr||Yc(n,yr))}function y_(){let n=it.getBoundingClientRect(),e=Math.max(1,Math.floor(n.width)),t=Math.max(1,Math.floor(n.height));Si?.setSize(e,t,!1),Si?.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),Ge.aspect=e/t,Ge.updateProjectionMatrix()}function jo({preserveDistance:n=!1}={}){if(!ke.length||xt!=="overview")return;let e=gd(),t=Ge.aspect<.75,i=Math.max(18,Ge.position.distanceTo(je.target)),s=n?Math.min(90,i):t?ys==="two-d"?zM:VM:ys==="two-d"?sg:kM,r=e?oA(e):Yi.set(0,0,0);je.target.set(r.x,r.y,r.z),ys==="two-d"?Ge.position.set(r.x,r.y+s,r.z+.01):Ge.position.set(r.x+s*.38,r.y+s*.68,r.z+s*.58),je.update()}function oA(n){let e=ke.filter(l=>l.promptId===n.promptId&&Bc(l));if(e.length<=1)return wc(n);let t=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;return e.forEach(l=>{let c=wc(l);t=Math.min(t,c.x),i=Math.max(i,c.x),s=Math.min(s,c.y),r=Math.max(r,c.y),o=Math.min(o,c.z),a=Math.max(a,c.z)}),new I((t+i)/2,(s+r)/2,(o+a)/2)}function wc(n){return n.home??n.target}function aA(){let n=gd();return n?wc(n):null}function S_(){return ke.reduce((n,e)=>!n||e.eventIndex>=n.eventIndex?e:n,null)}function md(){return ke.reduce((n,e)=>e.type!=="prompt"?n:!n||e.eventIndex>=n.eventIndex?e:n,null)}function lA(){return ke.reduce((n,e)=>e.type!=="prompt"||e.id===Es?n:!n||e.eventIndex>=n.eventIndex?e:n,null)}function b_(){let n=Ee?a_(Ee).at(-1):null;if(!n)return null;let e=n.type==="prompt"?n.prompt.id:n.compaction.id;return Pt.get(e)??null}function gd(){let n=b_();if(n?.type==="prompt")return n.id===Es?lA()??n:n;if(nt){let e=Pt.get(nt);if(e?.type==="prompt")return e}return md()??n??S_()}function M_(){kc(),br=null;let n=Ee,e=n?.prompts.at(-1);ts.classList.remove("prompt-context"),Kh.textContent="SESSION",$h(n?.ui.sessionName||"Session overview","Session"),Zh.textContent=n?`${n.totals.promptCount} prompts`:"Loading",Xh(n?.lastModifiedAt||"Live context"),Yh.textContent=e?.title||n?.ui.sessionName||"Session overview",Mr.classList.remove("stream-markdown"),Mr.textContent=_A(),fd()}function E_(){At==="raw"&&!Zo&&Hc()}function T_(){if(!cA()){kc();return}ts.classList.remove("hidden"),C_()}function cA(){return At==="map"}function _d(){return!ts.classList.contains("hidden")}function kc(){ts.classList.add("hidden"),br=null,Cs()}function xd(){if(!mt)return null;let n=Pt.get(mt);if(!n)return null;let e=zc().find(t=>t.node?.id===n.id||t.eventIndex===n.eventIndex);return e?{node:n,row:e}:{node:n}}function w_(){let n=xd();return n?uA(n.row??L_(n.node)):null}function uA(n){let e=zt();return Np({source:Mi(e.source),lineNumber:n.lineNumber,eventIndex:n.eventIndex,kind:[n.role,n.eventType,n.toolName].filter(Boolean).join(" / "),summary:hA(n),parserVersion:e.parserVersion,schemaVersion:e.schemaVersion})}function hA(n){return Lp({role:n.role,eventType:n.eventType,toolName:n.toolName,filePath:n.filePath,rawSummary:dA(n)})}function dA(n){return[n.title,n.detail].filter(Boolean).join(" - ")}function Cs(){let n=!!xd(),e=G_().length>1;ts.classList.toggle("has-selection",n);for(let t of[Bo,Vm,zm,Hm])t.disabled=!n;Gm.disabled=!e,Wm.disabled=!e,n||(Bo.textContent="Copy Safe Ref")}async function fA(){let n=w_();if(!n){Cs();return}try{await navigator.clipboard.writeText(n),Bo.textContent="Copied",window.setTimeout(()=>{Bo.textContent="Copy Safe Ref"},1200)}catch(e){Ei("COPY","Copy failed",Ar(e))}}function pA(){let n=w_();if(!n){Ei("COPY","Select an event first","Open Map or Timeline and select an event before copying a safe reference.");return}is(n,"Copy-safe reference copied")}function mA(n){let e=n.shareabilitySummary,t=n.privacySummary,i=n.parserHealth;return Dp({source:Mi(n.source),sessionName:n.ui.sessionName||n.sessionPath||`${Mi(n.source)} session`,totalTurns:n.ui.totalTurns,callCount:n.totals.callCount,fileChangeCount:n.totals.fileChangeCount,latestEventIndex:n.latestEventIndex,parserVersion:n.parserVersion,schemaVersion:n.schemaVersion,cliContext:[n.metadata.originator,n.metadata.cliVersion].filter(Boolean).join(" ")||null,rawLogsSafeToShare:e.rawLogsSafeToShare,rawLogCaution:e.rawLogCaution,sanitizedGraphNote:e.sanitizedGraphNote,redactedFieldCount:i.redactedFieldCount,imageCount:i.imageCount,apiTokenRequired:t.apiTokenRequired})}function Vc(n){let e=xd();if(!e){Cs();return}let t=e.node.id,i=e.node.promptId,s=e.row?.source??e.node.source;es(s),Qt(n),mt=t,nt=i,vn(),n!=="map"&&Lr()}function A_(n){xr=n,C_()}function C_(){ts.classList.toggle("compact",xr),uc.title=xr?"Expand context":"Minimize context",uc.setAttribute("aria-label",xr?"Expand context":"Collapse context"),uc.setAttribute("aria-expanded",String(!xr))}function vd(n,e){for(let t of n)t.classList.toggle("active",e(t))}function R_(){vd(tg,n=>n.dataset.appMode===At),Ch.classList.toggle("active",At==="settings"),Ch.setAttribute("aria-pressed",String(At==="settings"))}function I_(){vd(ng,n=>n.dataset.source===Ts)}async function gA(n){let e=vg(n);if(e===Ts)return;$c(),Ts=e,In=null,Hn=null,jt=null,bi=null,xn=null,Ss=null,I_(),Ko(),Eg();let t=Rs;await id({generation:t}),await Ir({suppressLiveAnimation:!0}),As(t)&&Xc()}function _A(){return Ee?[`${Mi(Ee.source)} session`,`Prompts: ${Ee.totals.promptCount}`,`Turns: ${Ee.ui.totalTurns}`,`Calls: ${Ee.totals.callCount}`,`Completed calls: ${Ee.totals.completedCallCount}`,`Messages: ${Ee.totals.assistantMessageCount}`,`File changes: ${Ee.totals.fileChangeCount}`,`Context: ${O_(Ee.tokenTelemetry)}`,`Compactions: ${Ee.totals.compactionCount}`,`Unknown events: ${Ee.parserHealth?.unknownEventCount??0}`,`Malformed lines: ${Ee.parserHealth?.malformedLineCount??0}`,`Codex: ${[Ee.metadata.originator,Ee.metadata.cliVersion].filter(Boolean).join(" ")||"unknown"}`,`Model: ${Ee.metadata.model||Ee.metadata.modelProvider||"unknown"}`,`Records: ${Ee.lineCount}`,`Session file: ${$n(Ee.sessionPath)||Ee.sessionPath}`].join(`
`):"Waiting for session data"}function yd(){let n=At!=="map";RM.classList.toggle("hidden",!n),ig.classList.toggle("mode-panel-active",n)}function Lr(){if(yd(),At!=="map"){if(IM.textContent=Mi(Ee?.source??Ts),PM.textContent=xA(At),LM.classList.toggle("hidden",At!=="timeline"),!Ee){ln.textContent="Waiting for session data",Vt.replaceChildren(an("Waiting for session data."));return}switch(At){case"summary":vA();return;case"timeline":MA();return;case"transcript":CA();return;case"health":D_();return;case"insights":PA();return;case"diff":Do();return;case"raw":Hc();return;case"export":LA();return;case"settings":NA();return}}}function xA(n){return n.charAt(0).toUpperCase()+n.slice(1)}function vA(){if(!Ee){ln.textContent="Waiting for session data",Vt.replaceChildren(an("Waiting for session data."));return}let n=zt(),e=Ee.privacySummary,t=Ee.shareabilitySummary,i=n.tokenTelemetry,s=n.parserHealth,r=n.ui.sessionName||n.cwd?.split(/[\\/]/).filter(Boolean).at(-1)||`${Mi(n.source)} session`,o=t.rawLogsSafeToShare?"Raw logs marked safe to share":"Raw logs require review before sharing";ln.textContent=`${o} - ${O_(i)}`;let a=document.createElement("div");a.className="summary-shell";let l=Ke("Session Summary");l.classList.add("summary-hero"),l.append(Yo(`${r} is a ${Mi(n.source)} trace with ${De(n.ui.totalTurns)} turns, ${De(n.totals.callCount)} tool calls, and ${De(n.totals.fileChangeCount)} file changes.`),Yo(`${o}. Sanitized graph/export and copy-safe references reduce exposure compared with raw logs, but they still require human judgment before sharing.`));let c=document.createElement("div");c.className="summary-triage";let d=Ke("What Happened",[`${De(n.ui.totalTurns)} turns across ${De(n.totals.promptCount)} prompts`,`${De(n.totals.completedCallCount)} completed tool calls; ${De(n.totals.fileChangeCount)} file changes`,`${De(s.unknownEventCount)} unknown and ${De(s.malformedLineCount)} malformed parser records`]),h=document.createElement("div");h.className="mode-actions",h.append(ut("Open Timeline",()=>Qt("timeline")),ut("Read Transcript",()=>Qt("transcript"))),d.append(h);let u=Ke("Safe To Share",[o,t.sanitizedGraphNote||"Sanitized graph data is intended for UI and report sharing after review.",e.apiTokenRequired?"Local API token is required for browser/API access; token value is not shown.":"No local API token required by this run."]),f=document.createElement("div");f.className="mode-actions",f.append(ut("Copy Share Summary",()=>is(mA(n),"Copy-safe share summary copied")),ut("Open Export",()=>Qt("export")),ut("Audit Raw",()=>Qt("raw"))),u.append(f),c.append(d,yA(n.insights),u);let g=document.createElement("div");g.className="summary-shell-grid",g.append(mr("Session",[["Source",Mi(n.source)],["Session",r],["Model",n.metadata.model||n.metadata.modelProvider||"unknown"],["CLI",[n.metadata.originator,n.metadata.cliVersion].filter(Boolean).join(" ")||"unknown"],["Records",Ip(n.lineCount,n.pendingBytes)],["Size",Co(n.byteLength)],["Modified",Sh(n.lastModifiedAt)||"unknown"],["Path",$n(n.sessionPath)||n.sessionPath]]),mr("Activity",[["Prompts",De(n.totals.promptCount)],["Turns",De(n.ui.totalTurns)],["Tool calls",`${De(n.totals.completedCallCount)} / ${De(n.totals.callCount)} completed`],["Assistant messages",De(n.totals.assistantMessageCount)],["File changes",De(n.totals.fileChangeCount)],["Compactions",De(n.totals.compactionCount)],["Dynamic tools",n.metadata.dynamicTools.length?n.metadata.dynamicTools.map(v=>v.name).slice(0,5).join(", "):"none logged"]]),mr("Privacy",[["Mode",e.privacyMode||"unknown"],["Redaction profile",e.redactionProfile||"default"],["API token required",e.apiTokenRequired?"yes":"no"],["Images",e.imageRouteBehavior||"not logged"],["Telemetry",e.noTelemetry?"disabled":"check deployment settings"],["Third-party uploads",e.noThirdPartyUploads?"disabled":"check before sharing"]]),mr("Shareability",[["Raw logs",t.rawLogsSafeToShare?"safe to share":"review/redact first"],["Raw caution",t.rawLogCaution||"Review prompts, paths, and tool output before sharing raw logs."],["Sanitized graph",t.sanitizedGraphNote||"Use sanitized graph/export surfaces for sharing."],["Redacted fields",De(s.redactedFieldCount)],["Images",De(s.imageCount)]]),mr("Parser Health",bT(s,De)),mr("Token Context",[["Telemetry",i.latestTotalTokens?"available":"not logged"],["Latest tokens",De(i.latestTotalTokens)],["Context window",De(i.contextWindow)],["Context pressure",pr(i.latestContextPercent)],["Primary rate limit",pr(i.primaryRateLimitPercent)],["Secondary rate limit",pr(i.secondaryRateLimitPercent)]])),a.append(l,c,g),(s.warnings.length||n.insights.warnings.length)&&a.append(Ke("Warnings",[...s.warnings,...n.insights.warnings].slice(0,10))),Vt.replaceChildren(a)}function mr(n,e){let t=document.createElement("article");t.className="summary-fact";let i=document.createElement("h3");i.textContent=n;let s=document.createElement("dl");return e.forEach(([r,o])=>{let a=document.createElement("dt");a.textContent=r;let l=document.createElement("dd");l.textContent=o,s.append(a,l)}),t.append(i,s),t}function yA(n){let e=Ke("Inspect First");e.classList.add("summary-insights");let t=n.inspectionQueue.slice(0,3);if(!t.length)return e.append(Yo("No high-priority findings detected. Parser health and raw inspection remain available for audit."),Tm([ut("Open Insights",()=>Qt("insights")),ut("Audit Raw",()=>Qt("raw"))])),e;let i=Yo("Top queued findings are ready for inspect-first review; each evidence action routes to an existing panel and falls back clearly when no event line is logged."),s=document.createElement("div");return s.className="summary-insight-list",t.forEach((r,o)=>{let a=document.createElement("article");a.className=`summary-insight severity-${r.severity}`;let l=document.createElement("div"),c=document.createElement("strong");c.textContent=`${o+1}. ${r.title}`;let d=document.createElement("small");d.textContent=SA(r);let h=document.createElement("p");h.textContent=r.redactionSafeSummary||r.summary,l.append(c,d,h);let u=Tm([ut("Open Insights",()=>P_(r)),ut("Timeline Evidence",()=>wh(r,"timeline")),ut("Transcript Evidence",()=>wh(r,"transcript")),ut("Raw Evidence",()=>wh(r,"raw"))]);a.append(l,u),s.append(a)}),e.append(i,s),e}function Tm(n){let e=document.createElement("div");return e.className="mode-row-actions",e.append(...n),e}function SA(n){let e=Sd(n),t=n.eventIds.length?`${De(n.eventIds.length)} linked events`:"no linked event ids",i=e?`line ${e}`:"no event line logged";return[n.severity,n.confidence,n.directness,i,t].filter(Boolean).join(" - ")}function Sd(n){return n.lineNumbers.find(e=>Number.isFinite(e)&&e>0)??null}function bA(n){let e=zc(),t=Sd(n),i=t?e.find(r=>r.lineNumber===t):null;if(i)return i;if(!n.eventIds.length)return null;let s=new Set(n.eventIds);return e.find(r=>s.has(r.id)||(r.node?s.has(r.node.id):!1))??null}function P_(n){Qt("insights"),es(n),ln.textContent=`Queued insight selected - ${n.title}`;let e=an("Selected insight loaded in Raw for audit; use evidence actions to jump into Timeline, Transcript, or Raw rows when line/event data is available.");e.classList.add("mode-notice"),Vt.prepend(e)}function wh(n,e){let t=bA(n);if(t){Wc(t.lineNumber,n.title,n,e);return}let i=Sd(n)||n.eventIds.length?"Logged evidence did not match a rendered Timeline or Transcript row; showing the queued insight instead.":"No event line is logged for this insight; showing the queued insight instead.";P_(n),bd(n.title,n,i)}function MA(){let n=zc();EA(n);let e=n.filter(TA),t=e.slice(0,600);if(ln.textContent=`${e.length} of ${n.length} events`,!t.length){Vt.replaceChildren(an("No timeline events match the current filters."));return}let i=document.createDocumentFragment(),s=document.createElement("div");s.className="mode-actions",s.append(ut("Copy Safe Reference",()=>pA())),i.append(s),t.forEach(r=>i.append(wA(r))),e.length>t.length&&i.append(an(`${e.length-t.length} additional events hidden; narrow filters or search to inspect them.`)),Vt.replaceChildren(i)}function zc(){if(!Ee)return[];let n=ke.map(L_);for(let e of Ee.parserHealth.unknownEvents||[])n.push({id:`unknown-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"unknown",eventType:e.sourceEventType,toolName:"",filePath:"",title:`Unknown event ${e.sourceEventType}`,detail:e.preview,timestamp:null,flags:["unknown"],source:e});for(let e of Ee.parserHealth.malformedLines||[])n.push({id:`malformed-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"malformed",eventType:"malformed_jsonl",toolName:"",filePath:"",title:e.error,detail:e.preview,timestamp:null,flags:["malformed"],source:e});for(let e of Ee.parserHealth.skippedLargePayloads||[])n.push({id:`skipped-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"parser",eventType:"skipped_large_payload",toolName:"",filePath:"",title:e.reason,detail:`${De(e.byteLength)} bytes`,timestamp:null,flags:["large"],source:e});return n.sort((e,t)=>e.eventIndex-t.eventIndex||e.lineNumber-t.lineNumber),n}function L_(n){let e=n.type==="prompt"?"user":n.type==="message"?"assistant":n.type==="call"?"tool":n.type==="fileChange"?"file":"system",t=n.type==="call"?n.source.name:"",i=n.type==="fileChange"?n.source.path:"",s=[n.detail,n.body].filter(Boolean).join(`
`),r=new Set;(Yc(n,"error")||F_(`${n.title} ${s}`))&&r.add("error"),n.type==="call"&&W_(n.source)&&r.add("long"),n.type==="fileChange"&&r.add("file"),n.type==="compaction"&&r.add("compaction"),`${n.title} ${s}`.includes("[REDACTED")&&r.add("redacted");let o=n.type==="call"&&n.source.durationMs!==null?Rp(n.source.durationMs):"";return{id:n.id,eventIndex:n.eventIndex,lineNumber:n.eventIndex+1,role:e,eventType:n.type==="fileChange"?`file_${n.source.changeType}`:n.type,toolName:t,filePath:i,title:n.title,detail:[o,s].filter(Boolean).join(`
`),timestamp:n.type==="call"?n.source.startedAt||n.source.completedAt:n.source.timestamp,flags:[...r],source:n.source,node:n}}function EA(n){cc(pc,"All roles",n.map(e=>e.role)),cc(mc,"All types",n.map(e=>e.eventType)),cc(gc,"All tools",n.map(e=>e.toolName).filter(Boolean)),cc(_c,"All files",n.map(e=>$n(e.filePath)||e.filePath).filter(Boolean))}function cc(n,e,t){let i=n.value,s=[...new Set(t)].sort((a,l)=>a.localeCompare(l)),r=document.createDocumentFragment(),o=document.createElement("option");o.value="",o.textContent=e,r.append(o),s.forEach(a=>{let l=document.createElement("option");l.value=a,l.textContent=a,r.append(l)}),n.replaceChildren(r),n.value=s.includes(i)?i:""}function TA(n){if(pc.value&&n.role!==pc.value||mc.value&&n.eventType!==mc.value||gc.value&&n.toolName!==gc.value)return!1;let e=$n(n.filePath)||n.filePath;return _c.value&&e!==_c.value||qm.checked&&!n.flags.includes("error")||Zm.checked&&!n.flags.includes("unknown")||Km.checked&&!n.flags.includes("malformed")||Jm.checked&&!n.flags.includes("redacted")?!1:ws?[n.role,n.eventType,n.toolName,n.filePath,n.title,n.detail,n.flags.join(" ")].join(" ").toLowerCase().includes(ws):!0}function wA(n){let e=document.createElement("button");e.type="button",e.className=`mode-row ${n.node?.id===mt?"active":""}`;let t=document.createElement("code");t.textContent=[`L${n.lineNumber}`,AA(n.timestamp)].filter(Boolean).join(`
`);let i=document.createElement("small");i.textContent=[n.role,n.eventType,n.toolName].filter(Boolean).join(" / ");let s=document.createElement("strong");s.textContent=n.title;let r=document.createElement("small");return r.textContent=Md([n.filePath,n.detail].filter(Boolean).join(" - "),260),e.append(t,i,s,r),e.addEventListener("click",()=>N_(n)),e}function AA(n){if(!n)return"";let e=new Date(n);return Number.isNaN(e.valueOf())?n:jm.checked?e.toISOString().replace(".000Z","Z"):e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}function N_(n){n.node?(mt=n.node.id,nt=n.node.promptId,vn(),Pr(n.node,{reveal:!1})):Ei(n.eventType.toUpperCase(),n.title,n.detail||n.title),es(n.source)}function CA(){let n=zt();ln.textContent=`${n.prompts.length} turns`;let e=document.createDocumentFragment();n.prompts.forEach((t,i)=>{let s=Ke(`User ${i+1}: ${t.title}`),r=document.createElement("div");r.className="transcript-flow",RA(t).forEach(o=>{r.append(IA(o))}),s.append(r),e.append(s)}),Vt.replaceChildren(e.childNodes.length?e:an("No transcript events were parsed."))}function RA(n){let e=[];return Bg(n,n.calls).forEach(t=>{if(t.type==="assistant"){e.push({label:"Assistant",title:"Response",body:t.message.text,eventIndex:t.message.eventIndex}),t.calls.forEach(i=>e.push(...wm(i)));return}e.push(...wm(t.call))}),n.fileChanges.forEach(t=>{e.push({label:"File",title:`${t.changeType}: ${t.shortPath||t.path}`,body:t.preview||t.detail,eventIndex:t.eventIndex})}),[{label:"Prompt",title:n.title,body:n.text,eventIndex:n.eventIndex},...e.sort((t,i)=>t.eventIndex-i.eventIndex)]}function wm(n){let e=n.argumentPreview||"No arguments logged.",t=n.outputPreview||(n.status==="completed"?"No result preview logged.":`Status: ${n.status}`);return[{label:"Tool",title:`${n.name} (${n.status})`,body:e,eventIndex:n.eventIndex},{label:"Result",title:n.name,body:t,eventIndex:n.eventIndex}]}function IA(n){let e=document.createElement("div");e.className="transcript-step";let t=document.createElement("code");t.textContent=n.label;let i=document.createElement("div"),s=document.createElement("strong");s.textContent=n.title;let r=Yo(Md(n.body,520));return i.append(s,r),e.append(t,i),e}function D_(){let n=zt().parserHealth;ln.textContent=`${n.unknownEventCount} unknown / ${n.malformedLineCount} malformed / ${n.skippedLargePayloadCount} skipped`,Gc();let e=document.createDocumentFragment(),t=document.createElement("div");t.className="mode-actions",t.append(ut("Copy Parser Summary",()=>is(kA(zt()),"Parser health summary copied")),ut("Export Unknowns JSON",()=>HA()),ut("Copy Issue Body",()=>GA()),ut("Fixture Report",()=>WA())),e.append(t);let i=document.createElement("div");i.className="mode-card-grid",i.append(Ke("Parser",[Uc(n),`Source confidence: ${n.sourceDetectionConfidence}`,`Parsed ${n.parsedEventCount} of ${n.totalLinesRead} lines`,...$o([rd(n)])]),Ke("Unknown Events",ET(n)),Ke("Malformed And Skipped",AT(n)),Ke("Coverage",[`Tool calls/results: ${n.toolCallCount}/${n.toolResultCount}`,`File activity: ${n.fileActivityCount}`,`Token telemetry: ${n.tokenTelemetryAvailable?"available":"not logged"}`,`Redacted fields: ${n.redactedFieldCount}`,...$o([Ug(n)])])),e.append(i);let s=Ke("Unknown Samples");s.append(OA(n)),e.append(s),Uh?e.append(an("Preparing redacted schema-drift report...")):Ss?e.append(an(Ss)):xn&&e.append(Ke("Issue Template",[`Fixture: ${xn.suggestedFixtureName}`,`Samples: ${xn.redactedSamples.length}`,`Profile: ${xn.redactionReport.profile}`])),Vt.replaceChildren(e)}function PA(){let n=zt().insights;ln.textContent=`${n.inspectionQueue.length} queued / ${n.repeatedPatterns.length} repeated / ${n.suspiciousToolCalls.length} suspicious`;let e=document.createDocumentFragment(),t=document.createElement("div");t.className="mode-actions",t.append(ut("Copy Insight Summary",()=>is(VA(n),"Insight summary copied"))),e.append(t);let i=Ke("What Should I Inspect First?");i.append(UA(n)),e.append(i);let s=document.createElement("div");s.className="mode-card-grid",s.append(Ke("Failure Chain",n.failureChain?[`First logged error-like event: line ${n.failureChain.firstLoggedError.lineNumber} - ${n.failureChain.firstLoggedError.title}`,`Possible retries: ${n.failureChain.subsequentRetries.length}`,`File changes after first error: ${n.failureChain.fileChangesAfterFirstError.length}`,`Final logged outcome: ${n.failureChain.finalOutcome}`]:["No logged error-like event detected."]),Ke("Repeated Patterns",n.repeatedPatterns.slice(0,8).map(r=>`${r.patternType} x${r.count} lines ${r.firstLine}-${r.lastLine}: ${r.key}`)),Ke("Suspicious Tool Calls",n.suspiciousToolCalls.slice(0,8).map(r=>`Line ${r.call.lineNumber} ${r.toolName}: ${r.reason}`)),Ke("Context Pressure",[n.contextPressure.status,n.contextPressure.explanation,`High-context markers: ${n.contextPressure.highContextMarkers.length}`,`Compaction markers: ${n.contextPressure.compactionMarkers.length}`]),Ke("File Impact",[`Edited: ${n.fileImpact.filesEdited.length}`,`Read: ${n.fileImpact.filesRead.length}`,`Referenced: ${n.fileImpact.filesReferenced.length}`,...n.fileImpact.filesEdited.slice(0,6).map(r=>`${r.path} (${r.count})`)]),Ke("Approval And Sandbox",n.approvalFriction.slice(0,8).map(r=>`${r.severity}: ${r.title}`))),e.append(s),Vt.replaceChildren(e)}function Do(){let n=zt(),t=BA(n).filter(v=>v.path!==n.sessionPath);(!Hn||Hn===n.sessionPath||!t.some(v=>v.path===Hn))&&(Hn=t[0]?.path??null),ln.textContent=jt?`${jt.toolDelta.calls.left} -> ${jt.toolDelta.calls.right} tools / ${jt.errorDelta.errors.left} -> ${jt.errorDelta.errors.right} errors`:"Select Run B to compare";let i=document.createDocumentFragment(),s=Ke("Compare Sessions"),r=document.createElement("div");r.className="mode-control-row";let o=document.createElement("div");o.className="mode-field",o.append(Am("Run A"),DA(n.sessionPath));let a=document.createElement("div");a.className="mode-field",a.append(Am("Run B"));let l=document.createElement("select");l.className="mode-select",l.setAttribute("aria-label","Run B session"),t.forEach(v=>{let m=document.createElement("option");m.value=v.path,m.textContent=Mg(v),m.title=v.path,l.append(m)}),l.value=Hn??"",l.disabled=t.length===0;let c=()=>{Hn=Cm(l),jt=null,bi=null,ln.textContent="Select Run B to compare"};l.addEventListener("change",()=>{c(),Rm()}),l.addEventListener("input",c);let d=ut("Compare",()=>{Hn=Cm(l),Rm()});if(d.disabled=t.length===0,a.append(l,d),r.append(o,a),s.append(r),i.append(s),t.length===0){i.append(an("No other sessions are available to compare with this run.")),Vt.replaceChildren(i);return}if(Dh){i.append(an("Comparing normalized traces...")),Vt.replaceChildren(i);return}if(bi&&i.append(an(bi)),!jt){i.append(an("Choose a second session and compare. Diff results are redacted by default.")),Vt.replaceChildren(i);return}let h=jt,u=document.createElement("div");u.className="mode-actions",u.append(ut("Copy Summary",()=>is(zA(h),"Diff summary copied")),ut("Export JSON",()=>Cc("perlustron-diff.json",JSON.stringify(h,null,2),"application/json")),ut("Export HTML",()=>Cc("perlustron-diff.html",$A(h),"text/html"))),i.append(u);let f=document.createElement("div");f.className="mode-card-grid",f.append(Ke("Overview",[`Sources: ${h.leftSummary.source} -> ${h.rightSummary.source}`,`Session IDs: ${h.leftSummary.sessionId||"unknown"} -> ${h.rightSummary.sessionId||"unknown"}`,`Models: ${h.leftSummary.model||"unknown"} -> ${h.rightSummary.model||"unknown"}`,`Events: ${h.leftSummary.renderableEventCount} -> ${h.rightSummary.renderableEventCount}`,`Duration: ${h.leftSummary.loggedDuration} / ${h.rightSummary.loggedDuration}`]),Ke("Parser Health Delta",[`Parsed: ${h.leftSummary.parsedEventCount} -> ${h.rightSummary.parsedEventCount}`,`Renderable: ${h.leftSummary.renderableEventCount} -> ${h.rightSummary.renderableEventCount}`,`Unknown: ${_n(h.parserHealthDelta.unknownEvents)}`,`Malformed: ${_n(h.parserHealthDelta.malformedLines)}`,`Skipped payloads: ${_n(h.parserHealthDelta.skippedLargePayloads)}`]),Ke("Tool Delta",[`Calls: ${_n(h.toolDelta.calls)}`,`Results: ${_n(h.toolDelta.results)}`,`Missing results: ${_n(h.toolDelta.missingResults)}`,`Only A: ${Ac(h.toolDelta.onlyLeftTools,6)}`,`Only B: ${Ac(h.toolDelta.onlyRightTools,6)}`]),Ke("File Delta",[`Only A: ${h.fileDelta.onlyLeft.length}`,`Only B: ${h.fileDelta.onlyRight.length}`,`Both: ${h.fileDelta.both.length}`,...h.fileDelta.onlyLeft.slice(0,4).map(v=>`A: ${v}`),...h.fileDelta.onlyRight.slice(0,4).map(v=>`B: ${v}`)]),Ke("Error And Failure Delta",[`Error-like events: ${_n(h.errorDelta.errors)}`,`First A: ${h.errorDelta.leftFirstError||"none"}`,`First B: ${h.errorDelta.rightFirstError||"none"}`,`Repeated patterns: ${h.repeatedPatternDelta.leftCount} -> ${h.repeatedPatternDelta.rightCount}`]),Ke("Token And Context Delta",[`Telemetry: ${h.tokenDelta.leftAvailable?"A yes":"A no"} / ${h.tokenDelta.rightAvailable?"B yes":"B no"}`,`Latest tokens: ${h.tokenDelta.leftLatestTotalTokens??"n/a"} -> ${h.tokenDelta.rightLatestTotalTokens??"n/a"}`,`Context percent: ${pr(h.tokenDelta.leftContextPercent)} -> ${pr(h.tokenDelta.rightContextPercent)}`,`Compactions: ${_n(h.compactionDelta)}`])),i.append(f);let g=Ke("Divergence");g.append(FA(h)),i.append(g),h.warnings.length&&i.append(Ke("Warnings",h.warnings)),Vt.replaceChildren(i)}function Hc(){let n=zt();ln.textContent=mt?"Selected event":"Session graph";let e=Zo??(mt?Pt.get(mt)?.source:n),t=document.createElement("pre");t.textContent=JSON.stringify(e??n.totals,null,2),Vt.replaceChildren(t)}function LA(){let n=zt();ln.textContent="Redacted reports";let e=document.createElement("div");e.className="mode-card-grid",e.append(Ke("Reports",[`perlustron export ${n.sessionPath} --format html --redacted -o report.html`,`perlustron export ${n.sessionPath} --format markdown --redacted -o report.md`,`perlustron export ${n.sessionPath} --format json -o normalized-trace.json`]),Ke("Schema Drift",[`perlustron unknowns ${n.sessionPath} --redacted -o unknowns-redacted.json`,`perlustron fixture-report ${n.sessionPath} --redacted -o fixture-report.md`])),Vt.replaceChildren(e)}function NA(){let n=zt();ln.textContent="Local observatory settings";let e=document.createElement("div");e.className="mode-card-grid",e.append(Ke("Session",[`Source: ${Mi(n.source)}`,`Session: ${In?$n(In):$n(n.sessionPath)||"latest"}`,`Live updates: ${An?bs?"SSE stream":"fallback polling":"paused"}`]),Ke("Renderer",["Three.js instancing",`Mode panel: ${At==="settings"?"visible":"hidden"}`]),Ke("Backend",["Rust Axum JSONL parser",`Parser: ${n.parserHealth.parserVersion} / ${n.parserHealth.schemaVersion}`,`API token required: ${n.privacySummary.apiTokenRequired?"yes":"no"}`])),Vt.replaceChildren(e)}function Ke(n,e=[]){let t=document.createElement("section");t.className="mode-card";let i=document.createElement("h3");if(i.textContent=n,t.append(i),e.length){let s=document.createElement("ul");e.forEach(r=>{let o=document.createElement("li");o.textContent=r,s.append(o)}),t.append(s)}return t}function Yo(n){let e=document.createElement("p");return e.textContent=n,e}function an(n){let e=document.createElement("p");return e.className="mode-empty",e.textContent=n,e}function ut(n,e){let t=document.createElement("button");return t.type="button",t.className="mode-action-button",t.textContent=n,t.addEventListener("click",()=>{e()}),t}function Am(n){let e=document.createElement("span");return e.className="mode-small-label",e.textContent=n,e}function DA(n){let e=document.createElement("code");return e.textContent=n,e}function UA(n){if(!n.inspectionQueue.length)return an("No high-priority findings detected. Parser health and raw inspection remain available.");let e=document.createElement("div");return e.className="mode-linked-list",n.inspectionQueue.slice(0,12).forEach((t,i)=>{let s=document.createElement("article");s.className=`mode-linked-row severity-${t.severity}`;let r=document.createElement("div"),o=document.createElement("strong");o.textContent=`${i+1}. ${t.title}`;let a=document.createElement("small");a.textContent=`${t.summary} - ${t.confidence} - ${t.directness}`;let l=document.createElement("p");l.textContent=t.explanation,r.append(o,a,l);let c=document.createElement("div");c.className="mode-row-actions";let d=t.lineNumbers[0];c.append(ut("Open Raw",()=>Wc(d,t.title,t)),ut("Copy Ref",()=>is(`line ${d??"n/a"} - ${t.redactionSafeSummary}`,"Line reference copied"))),s.append(r,c),e.append(s)}),e}function FA(n){let e=document.createElement("div");return e.className="mode-linked-list",U_(n).forEach(i=>{let s=document.createElement("article");s.className="mode-linked-row";let r=document.createElement("div"),o=document.createElement("strong");o.textContent=i.kind.replaceAll("_"," ");let a=document.createElement("small");a.textContent=`${i.confidence} - A line ${i.leftLine??"n/a"} - B line ${i.rightLine??"n/a"}`;let l=document.createElement("p");l.textContent=i.summary,r.append(o,a,l);let c=document.createElement("div");c.className="mode-row-actions",c.append(ut("Open A",()=>Wc(i.leftLine,i.kind,i)),ut("Copy Ref",()=>is(`${i.kind}: A line ${i.leftLine??"n/a"}, B line ${i.rightLine??"n/a"}`,"Divergence reference copied"))),s.append(r,c),e.append(s)}),e}function OA(n){let e=document.createElement("div");e.className="mode-linked-list";let t=[...(n.unknownEvents||[]).map(i=>({title:`Unknown ${i.sourceEventType}`,detail:i.preview,lineNumber:i.lineNumber,payload:i})),...(n.malformedLines||[]).map(i=>({title:"Malformed JSONL",detail:i.error,lineNumber:i.lineNumber,payload:i}))].slice(0,12);return t.length?(t.forEach(i=>{let s=document.createElement("article");s.className="mode-linked-row";let r=document.createElement("div"),o=document.createElement("strong");o.textContent=i.title;let a=document.createElement("small");a.textContent=`line ${i.lineNumber} - ${Md(i.detail,180)}`,r.append(o,a);let l=document.createElement("div");l.className="mode-row-actions",l.append(ut("Open Raw",()=>Wc(i.lineNumber,i.title,i.payload))),s.append(r,l),e.append(s)}),e):an("No unknown or malformed samples captured.")}function BA(n){let e=Wn.filter(i=>i.source===n.source),t=e.find(i=>i.path===n.sessionPath);return t?[t,...e.filter(i=>i.path!==n.sessionPath)]:[{source:n.source,path:n.sessionPath,label:"Current session",detail:n.sessionId||"loaded",lastModifiedAt:n.lastModifiedAt,byteLength:n.byteLength,isLive:n.isLive,explicit:!0},...e]}function Cm(n){return n.selectedOptions.item(0)?.value||n.value||null}async function Rm(){if(!Hn){bi="Select a Run B session first.",jt=null,Do();return}let n=zt().sessionPath,e=Hn;if(e===n){bi="Run A and Run B must be different sessions.",jt=null,Do();return}let t=++nm,i=()=>t===nm&&zt().sessionPath===n&&Hn===e;jt=null,Dh=!0,bi=null,Do();try{let s=await uT(e);if(!i())return;jt=s}catch(s){if(!i())return;jt=null,bi=Ar(s)}finally{i()&&(Dh=!1,Do())}}async function Gc(n=!1){return!n&&xn?xn:!n&&Ss?null:Po||(xn=null,Ss=null,Uh=!0,Po=hT().then(e=>(xn=e,e)).catch(e=>(Ss=Ar(e),null)).finally(()=>{Uh=!1,Po=null,At==="health"&&D_()}),Po)}function bd(n,e,t){let i=`${t} Insights remains available and Raw is updated with the selected evidence payload.`;es(e),ln.textContent="Evidence fallback";let s=Ke("Evidence Fallback",[i]);s.classList.add("mode-notice");let r=document.createElement("div");if(r.className="mode-row-actions",r.append(ut("Open Insights",()=>{Qt("insights"),es(e)}),ut("Audit Raw",()=>{Qt("raw"),bd(n,e,t)})),s.append(r),At==="raw"){let o=document.createElement("pre");o.textContent=JSON.stringify(e??{},null,2),Vt.replaceChildren(s,o);return}Vt.prepend(s)}function Wc(n,e,t,i="raw"){if(n){let r=zc().find(o=>o.lineNumber===n);if(r){N_(r),r.node?Vc(i):i!=="map"&&(Qt(i),es(r.source));return}}i!=="map"&&Qt(i);let s=n?`Line ${n} is logged for ${e}, but no rendered Timeline or Transcript row is available.`:"No event line is logged for this insight or evidence reference; showing fallback payload instead.";bd(e,t,s)}function kA(n){let e=n.parserHealth;return[`Perlustron parser health for ${$n(n.sessionPath)}`,`Parser: ${Uc(e)}`,`Source: ${e.source} (${e.sourceDetectionConfidence})`,`Lines: ${e.totalLinesRead}`,`Parsed/renderable: ${e.parsedEventCount}/${e.renderableEventCount}`,...$o(od(e,Rn,"Skipped large payloads"))].join(`
`)}function VA(n){let e=["Perlustron insights","What should I inspect first?"];return n.inspectionQueue.length?n.inspectionQueue.slice(0,6).forEach((t,i)=>{e.push(`${i+1}. [${t.severity}] ${t.title}: ${t.redactionSafeSummary||t.summary}`)}):e.push("- No high-priority findings detected."),e.push(`Repeated patterns: ${n.repeatedPatterns.length}`),e.push(`Suspicious tool calls: ${n.suspiciousToolCalls.length}`),e.push(`Approval/sandbox friction: ${n.approvalFriction.length}`),e.join(`
`)}function zA(n){return["Perlustron redacted diff summary",`A: ${$n(n.metadata.leftPath)} (${n.metadata.leftSource})`,`B: ${$n(n.metadata.rightPath)} (${n.metadata.rightSource})`,`Events: ${n.leftSummary.renderableEventCount} -> ${n.rightSummary.renderableEventCount}`,`Tools: ${n.toolDelta.calls.left} -> ${n.toolDelta.calls.right}`,`Errors: ${n.errorDelta.errors.left} -> ${n.errorDelta.errors.right}`,`Files: ${n.fileDelta.leftCount} -> ${n.fileDelta.rightCount}`,`First likely divergence: ${n.divergence.summary} (${n.divergence.confidence})`].join(`
`)}function Ac(n,e){if(!n.length)return"none";let t=n.slice(0,e).join(", ");return n.length>e?`${t} ... +${n.length-e}`:t}async function HA(){let n=xn??await Gc(!0);n&&Cc("perlustron-unknowns-redacted.json",JSON.stringify(n,null,2),"application/json")}async function GA(){let n=xn??await Gc(!0);n&&is(n.suggestedGithubIssue,"Schema-drift issue body copied")}async function WA(){let n=xn??await Gc(!0);n&&Cc("perlustron-fixture-report.md",XA(n),"text/markdown")}function U_(n){return n.divergence.clusters.length?n.divergence.clusters:[{kind:n.divergence.kind,confidence:n.divergence.confidence,summary:n.divergence.summary,explanation:n.divergence.explanation,leftLine:n.divergence.leftLine,rightLine:n.divergence.rightLine,leftEventId:n.divergence.leftEventId,rightEventId:n.divergence.rightEventId,leftSignature:n.divergence.leftSignature,rightSignature:n.divergence.rightSignature}]}function XA(n){let e=n.redactedSamples.slice(0,12).map(t=>`### Line ${t.lineNumber} ${t.sourceEventType}

Shape hash: \`${t.shapeHash}\`

\`\`\`json
${t.redactedPreview}
\`\`\``).join(`

`);return["# Perlustron Fixture Report","","This report avoids raw private log content.","","## Parser Health","",`- Perlustron version: \`${n.parserVersion}\``,`- Trace schema: \`${n.traceSchemaVersion}\``,`- Source guess: \`${n.sourceGuess}\``,`- Unknown events: \`${n.unknownEventCount}\``,`- Malformed lines: \`${n.malformedLineCount}\``,`- Suggested fixture: \`${n.suggestedFixtureName}\``,"","## Redacted Samples","",e||"No unknown or malformed samples captured.","","## Safe Contribution Checklist","","- Do not attach raw private Codex or Claude logs.","- Prefer synthetic data.","- Review prompts, paths, command output, images, and tool results before sharing."].join(`
`)}function $A(n){let e=U_(n).map(t=>`<tr><td>${ri(t.kind)}</td><td>${ri(t.confidence)}</td><td>${t.leftLine??"n/a"}</td><td>${t.rightLine??"n/a"}</td><td>${ri(t.summary)}</td></tr>`).join("");return`<!doctype html><meta charset="utf-8"><title>Perlustron Diff Report</title><style>body{font-family:system-ui,sans-serif;margin:32px;color:#182125;line-height:1.45}table{border-collapse:collapse;width:100%;margin:16px 0}td,th{border:1px solid #d7dee2;padding:6px 8px;text-align:left}code{background:#f4f6f7;padding:2px 4px}.redacted{color:#7a1f1f;font-weight:700}</style><h1>Perlustron Session Diff</h1><p class="redacted">Redacted diff. Review before sharing.</p><h2>Overview</h2><table><tr><td>A</td><td>${ri(n.metadata.leftPath)}</td></tr><tr><td>B</td><td>${ri(n.metadata.rightPath)}</td></tr><tr><td>Events</td><td>${n.leftSummary.renderableEventCount} -> ${n.rightSummary.renderableEventCount}</td></tr><tr><td>Tools</td><td>${_n(n.toolDelta.calls)}</td></tr><tr><td>Errors</td><td>${_n(n.errorDelta.errors)}</td></tr></table><h2>Parser Health</h2><table><tr><td>Unknown</td><td>${_n(n.parserHealthDelta.unknownEvents)}</td></tr><tr><td>Malformed</td><td>${_n(n.parserHealthDelta.malformedLines)}</td></tr></table><h2>Files</h2><table><tr><td>Only A</td><td>${ri(Ac(n.fileDelta.onlyLeft,20))}</td></tr><tr><td>Only B</td><td>${ri(Ac(n.fileDelta.onlyRight,20))}</td></tr></table><h2>Divergence</h2><table><thead><tr><th>Kind</th><th>Confidence</th><th>A line</th><th>B line</th><th>Summary</th></tr></thead><tbody>${e}</tbody></table><h2>Redaction</h2><p>Profile: ${ri(n.metadata.redactionProfile||"strict")}. Raw prompts, command output, sensitive paths, and tool outputs are not intentionally included.</p>`}function Cc(n,e,t){let i=new Blob([e],{type:t}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=n,r.click(),window.setTimeout(()=>URL.revokeObjectURL(s),0)}function is(n,e="Copied"){navigator.clipboard.writeText(n).then(()=>Ei("COPY",e,n)).catch(t=>Ei("COPY","Copy failed",Ar(t)))}function F_(n){return/\b(error|failed|failure|exception|panic|denied|permission|timeout|traceback|not found|exit code|fatal|forbidden|sandbox)\b/i.test(n)}function Qt(n){if(At=n,Ko(),R_(),yd(),n!=="map"&&kc(),n==="map"){sd(),Rc({preserveCamera:!0}),jo();return}if(Lr(),n!=="summary"&&n!=="timeline"&&n!=="transcript"){if(n==="health"){Ei("HEALTH","Parser health",YA());return}if(n==="insights"){Ei("INSIGHTS","Debugging insights",qA());return}if(n!=="raw"){if(n==="diff"){Rc({preserveCamera:!0});return}n!=="settings"&&Ei("EXPORT","Export reports",ZA())}}}function Im(){At!=="transcript"&&Lr()}function YA(){return Ee?CT(Ee.parserHealth).join(`
`):"Waiting for session data."}function qA(){let n=Ee?.insights;if(!Ee||!n)return"Waiting for session insights.";let e=["Insights are heuristics over logged events only. Hidden or unlogged reasoning cannot be recovered."];return n.failureChain?(e.push(`First logged error-like event: line ${n.failureChain.firstLoggedError.lineNumber} - ${n.failureChain.firstLoggedError.title}`),e.push(`Final logged outcome: ${n.failureChain.finalOutcome}`)):e.push("First logged error-like event: none detected"),e.push(`Repeated patterns: ${n.repeatedPatterns.length}`),n.repeatedPatterns.slice(0,6).forEach(t=>{e.push(`  ${t.patternType} x${t.count} lines ${t.firstLine}-${t.lastLine}: ${t.key}`)}),e.push(`Suspicious tool calls: ${n.suspiciousToolCalls.length}`),n.suspiciousToolCalls.slice(0,6).forEach(t=>{e.push(`  line ${t.call.lineNumber} ${t.toolName}: ${t.reason}`)}),e.push(`Context pressure: ${n.contextPressure.status}`),e.push(`File impact: ${n.fileImpact.filesEdited.length} edited, ${n.fileImpact.filesRead.length} read, ${n.fileImpact.filesReferenced.length} referenced`),e.push(`Approval/sandbox friction: ${n.approvalFriction.length}`),e.join(`
`)}function ZA(){return Ee?["Export redacted reports from the CLI:",`perlustron export ${Ee.sessionPath} --format html --redacted -o report.html`,`perlustron export ${Ee.sessionPath} --format markdown --redacted -o report.md`,`perlustron export ${Ee.sessionPath} --format json -o normalized-trace.json`,"","Redacted exports are best-effort sharing aids. Review before sending."].join(`
`):"Waiting for session data."}function KA(){return["/ search","n next event","N previous event","m map","l timeline","t transcript","h health","i insights","r raw","e export","Esc close inspection"].join(`
`)}function Md(n,e){return oc(n,e,`
...[truncated]`)}function O_(n){if(!n?.latestTotalTokens)return"no token telemetry";let e=n.latestContextPercent===null?"n/a":`${Math.round(n.latestContextPercent)}%`,t=n.contextWindow?` / ${De(n.contextWindow)}`:"";return`${De(n.latestTotalTokens)}${t} tokens (${e})`}function Pm(n,e=Pt.get(n)){nt=n,xt="inspect",ns(),Pr(e)}function Rc({preserveCamera:n=!1}={}){xt==="inspect"&&(xt="overview",ns({preserveCamera:n}))}function JA(){I_(),R_(),yd(),Ko(),tg.forEach(n=>{n.addEventListener("click",()=>{Qt(Mh(Nm,n.dataset.appMode,"map"))})}),ng.forEach(n=>{n.addEventListener("click",()=>{gA(n.dataset.source)})}),oi.addEventListener("change",()=>{dT(oi.value)}),CM.addEventListener("click",()=>{An=!An,An&&sd(),Qi(),An?Xc():$c()}),Zi.addEventListener("input",()=>{ws=Zi.value.trim().toLowerCase(),vn(),Im()}),Zi.addEventListener("keydown",n=>{n.key==="Escape"&&(Zi.value="",ws="",vn(),Im())}),[pc,mc,gc,_c,qm,Zm,Km,Jm,jm].forEach(n=>{n.addEventListener("change",Lr)}),document.addEventListener("keydown",eC),document.addEventListener("keyup",tC),document.addEventListener("keydown",jA),document.addEventListener("visibilitychange",oC),window.addEventListener("blur",z_),Qm.forEach(n=>{n.addEventListener("click",()=>{let e=Mh(lM,n.dataset.viewAction,"two-d");e==="zoom-in"?Gh(1):e==="zoom-out"?Gh(-1):e==="overview"?(Rc(),o_("three-d")):pw()})}),Gm.addEventListener("click",()=>Ic(-1)),Wm.addEventListener("click",()=>Ic(1)),eg.forEach(n=>{n.addEventListener("click",()=>{fC(Mh(Dm,n.dataset.metric,"error"))})}),Ch.addEventListener("click",()=>{Qt("settings")})}function jA(n){if(n.key==="/"&&!Ms(n.target)){n.preventDefault(),Zi.focus(),Zi.select();return}if((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="k"){n.preventDefault(),Zi.focus(),Zi.select();return}if(!Ms(n.target)){let e=QA(n.key);if(e){n.preventDefault(),Qt(e);return}if(n.key==="n"){n.preventDefault(),Ic(1);return}if(n.key==="N"){n.preventDefault(),Ic(-1);return}if(n.key==="?"){n.preventDefault(),Ei("SHORTCUTS","Keyboard shortcuts",KA());return}}n.key!=="Escape"||xt!=="inspect"||Ms(n.target)||(n.preventDefault(),Rc(),jo())}function QA(n){switch(n){case"m":return"map";case"l":return"timeline";case"t":return"transcript";case"h":return"health";case"i":return"insights";case"r":return"raw";case"e":return"export";default:return null}}function eC(n){nC(n)&&(wn.add(n.code),n.preventDefault())}function tC(n){if(!B_(n.code))return;wn.delete(n.code)&&n.preventDefault()}function nC(n){let e=k_(n.code);if(e&&(At!=="map"||aC(n.target)))return!1;let t=e||At==="map"&&V_();return B_(n.code)&&(!n.ctrlKey||t)&&!n.metaKey&&!n.altKey&&!Ms(n.target)}function B_(n){return iC(n)||k_(n)||ZE.has(n)}function iC(n){return YE.has(n)}function k_(n){return n===dg||sC(n)}function sC(n){return qE.has(n)}function rC(){return wn.has("ShiftLeft")||wn.has("ShiftRight")}function V_(){return wn.has("ControlLeft")||wn.has("ControlRight")}function z_(){wn.clear()}function oC(){document.hidden&&z_()}function Ms(n){return n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement||n instanceof HTMLElement&&n.isContentEditable}function aC(n){return n instanceof HTMLElement&&(Ms(n)||!!n.closest("button, select, a[href]"))}function Xc(){$c(),An&&(cC(),!(typeof EventSource>"u")&&(qi=new EventSource(Rr("/api/session/events").toString()),qi.addEventListener("open",()=>{bs=!0,Qi()}),qi.addEventListener("session-status",n=>{bs=!0,Qi();try{wg(JSON.parse(n.data))}catch(e){qo(e)}}),qi.addEventListener("session-error",n=>{qo(n.data||"Session stream error")}),qi.addEventListener("error",()=>{bs=!1,Qi(),uC()})))}function $c(){lC(),H_(),hC()}function lC(){qi&&(qi.close(),qi=null),bs=!1}function cC(){H_(),An&&(Vh(),hc=setInterval(Vh,NM))}function H_(){hc&&(clearInterval(hc),hc=null)}function uC(){vr||(vr=setTimeout(()=>{vr=null,!bs&&An&&Vh()},DM))}function hC(){vr&&(clearTimeout(vr),vr=null)}function Qi(){let n=!!Ee?.isLive;AM.classList.toggle("paused",!An||!n),$m.textContent=An?n?"LIVE":"STALE":"PAUSED",Ym.textContent=An?n?bs?"Streaming session...":"Watching session...":"Waiting for writes...":"Updates paused"}function Lm(){Sr||(Sr=setTimeout(()=>{Sr=null;let n=performance.now(),e=ke.filter(t=>Is(t,n));e.length&&(e.forEach(t=>{t.matrixDirty=!0}),vn())},120))}function qo(n){console.warn(Ar(n))}function Gh(n){if(Math.abs(n)<.001)return;Dc();let e=n*dC();Ge.getWorldDirection(li),Ge.position.addScaledVector(li,e),je.target.addScaledVector(li,e),je.update()}function dC(){return Math.min(zE,Math.max(kE,d_()*VE))}function Ic(n){let e=G_();if(!e.length)return;let i=(Math.max(0,e.findIndex(r=>r.id===mt))+n+e.length)%e.length,s=e[i];mt=s.id,nt=s.promptId,Pr(s)}function G_(){return(xt==="inspect"&&nt?ld(nt).visibleNodes:ke).filter(e=>Pn(e)&&(e.type!=="prompt"||e.promptId===nt||xt==="overview")).sort(i_)}function fC(n){yr=yr===n?null:n,vd(eg,e=>e.dataset.metric===yr),xt==="inspect"?(xt="overview",nt=null,ns({preserveCamera:!0})):(t_(),Jo(),Fc()),vn()}function Yc(n,e){return e?e==="compaction"?n.type==="compaction":n.type==="compaction"?!1:n.type==="prompt"?(Uo.get(n.id)||[]).some(t=>t.id!==n.id&&Bc(t)&&Yc(t,e)):n.type==="fileChange"?pC(n.source,e):n.type==="message"?!1:gC(n.source,e):!0}function pC(n,e){if(e==="file")return!0;if(e==="diff"){let t=mC(n).toLowerCase();return cd(n)!=="add"||t.includes("diff")||t.includes("@@")}return!1}function mC(n){return`${cd(n)} ${n.path} ${n.preview} ${n.detail}`}function gC(n,e){if(e==="long")return W_(n);if(e==="error"){let t=n.kind.toLowerCase(),i=n.status.toLowerCase();return t==="error"||F_(i)}return e==="file"?Ah(n.name,["file","read","write","edit","multiedit","grep","glob","ls","apply_patch"]):e==="diff"?Ah(n.name,["diff","apply_patch"]):e==="artifact"?n.kind.toLowerCase()==="artifact"||Ah(n.name,["artifact"]):!1}function W_(n){return n.durationMs!==null&&n.durationMs>=aM}function Ah(n,e){let t=n.toLowerCase();return e.some(i=>t===i?!0:new RegExp(`(^|[._:-])${i}([._:-]|$)`).test(t))}function _C(n){return ws?`${n.kind} ${n.title} ${n.body}`.toLowerCase().includes(ws):!0}function Ed(){let n=mt?Pt.get(mt):null;n&&_d()&&Pr(n,{skipStableRender:!0})}function Ei(n,e,t){mt=null,br=null,g_(),T_(),vn(),ts.classList.remove("prompt-context"),Kh.textContent=n,$h(e,"Selection"),Zh.textContent="Control surface",Xh(new Date().toISOString()),Yh.textContent=e,Cs(),fd(),__(t)}function $n(n){if(!n)return"";let e=n.split(/[\\/]/);return e.length<=4?n:`${e.at(-4)}/${e.at(-3)}/${e.at(-2)}/${e.at(-1)}`}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
